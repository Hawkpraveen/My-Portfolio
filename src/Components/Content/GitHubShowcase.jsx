import { useEffect, useMemo, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  FaArrowUpRightFromSquare,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const pinnedRepos = [
  "Project_Management_Tool_FrontEnd",
  "BLOG_APP_FE",
  "CRUD-Project-TODO",
  "Fetch-Project-Github-Profile-Finder",
  "React_Day_11_Task",
];

const pinnedOrder = new Map(
  pinnedRepos.map((repoName, index) => [repoName, index])
);

function GitHubShowcase() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 850, once: true });

    const controller = new AbortController();

    fetch(
      "https://api.github.com/users/Hawkpraveen/repos?per_page=100&sort=updated",
      { signal: controller.signal }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API request failed with ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("GitHub API returned an unexpected repository list");
        }

        setRepos(
          data
            .filter((repo) => !repo.fork)
            .sort(
              (first, second) =>
                (pinnedOrder.get(first.name) ?? Number.MAX_SAFE_INTEGER) -
                (pinnedOrder.get(second.name) ?? Number.MAX_SAFE_INTEGER)
            )
        );
      })
      .catch((fetchError) => {
        if (!controller.signal.aborted) {
          console.error("Unable to load GitHub repositories", fetchError);
          setError(true);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  const filteredRepos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return repos.filter((repo) =>
      `${repo.name} ${repo.description || ""} ${repo.language || ""}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query, repos]);

  return (
    <section id="GitHub" className="section-band github-section">
      <div className="section-shell py-24">
        <header className="section-heading" data-aos="fade-up">
          <div className="eyebrow">BEYOND THE PORTFOLIO</div>
          <h2>
            More code.{" "}
            <span className="gradient-text">More experiments.</span>
          </h2>
          <p>
            Browse public projects and experiments from my GitHub profile. The
            repository list updates directly from GitHub.
          </p>
        </header>

        <div className="github-toolbar" data-aos="fade-up">
          <div className="github-summary">
            <AiFillGithub aria-hidden="true" />
            <span>
              <strong>
                {loading
                  ? "Loading repositories…"
                  : `${repos.length} public repositories`}
              </strong>
              <small>github.com/Hawkpraveen</small>
            </span>
          </div>
          <label className="sr-only" htmlFor="repository-search">
            Search repositories
          </label>
          <input
            id="repository-search"
            type="search"
            aria-label="Search repositories"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search repositories or languages…"
          />
          <a
            href="https://github.com/Hawkpraveen?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            View all on GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>

        {loading && (
          <div className="repo-state" role="status" aria-live="polite">
            Fetching public repositories from GitHub…
          </div>
        )}
        {error && (
          <div className="repo-state" role="status">
            GitHub’s API is temporarily unavailable.{" "}
            <a
              href="https://github.com/Hawkpraveen?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Open the complete repository list ↗
            </a>
          </div>
        )}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="repo-state" role="status">
            No repositories match “{query}”. Try another search.
          </div>
        )}

        <div className="repo-grid" aria-busy={loading}>
          {filteredRepos.slice(0, 12).map((repo, index) => (
            <article
              className="repo-card"
              key={repo.id}
              data-aos="fade-up"
              data-aos-delay={Math.min((index % 3) * 70, 140)}
            >
              <div className="repo-card-top">
                <span className="repo-icon" aria-hidden="true">
                  <AiFillGithub />
                </span>
                <span className="repo-visibility">PUBLIC</span>
              </div>
              <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </h3>
              <p>
                {repo.description ||
                  "A project or experiment from my development journey."}
              </p>
              <div className="repo-meta">
                <span>
                  {repo.language && (
                    <>
                      <i className="language-dot" aria-hidden="true" />
                      {repo.language}
                    </>
                  )}
                </span>
                <span>
                  <FaStar aria-hidden="true" /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch aria-hidden="true" /> {repo.forks_count}
                </span>
              </div>
            </article>
          ))}
        </div>

        {!loading && !error && filteredRepos.length > 12 && (
          <p className="repo-footnote">
            Showing 12 of {filteredRepos.length} matching repositories.{" "}
            <a
              href="https://github.com/Hawkpraveen?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Explore the rest on GitHub ↗
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

export default GitHubShowcase;
