import img1 from "../assets/Project Management Tool.png";
import img2 from "../assets/Blog.png";
import img3 from "../assets/Todo.png";
import img4 from "../assets/Git_Profile_Finder.png";

const ProjectsList = [
  {
    id: 1,
    title: "Project Management Tool",
    link: "https://project-management-tool-mern.netlify.app/",
    github: "https://github.com/Hawkpraveen/Project_Management_Tool_FrontEnd",
    image: img1,
    desc: "A MERN stack project workspace with a dashboard, calendar, drag-and-drop task organization, image uploads, and report download workflows. Built to bring everyday project coordination into one place.",
    tech: [
      "React",
      "Redux",
      "React DnD",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google Authentication",
    ],
  },
  {
    id: 2,
    title: "Blog App",
    link: "https://blog-app-react-redux-tailwind.netlify.app/",
    github: "https://github.com/Hawkpraveen/BLOG_APP_FE",
    image: img2,
    desc: "An admin-managed blogging platform where editors can create and publish posts while readers browse content through a responsive interface. Includes authenticated workflows and a rich-text editor.",
    tech: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google Authentication",
      "React Quill"
    ],
  },
  {
    id: 3,
    title: "Todo App",
    link: "https://crud-todo-localstroage.netlify.app/",
    github: "https://github.com/Hawkpraveen/CRUD-Project-TODO",
    image: img3,
    desc: "A lightweight task manager demonstrating DOM manipulation and browser Local Storage, so tasks remain available after refresh without a backend.",
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "Local Storage",
    ],
  },
  {
    id: 4,
    title: "GitHub Profile Finder",
    link: "https://gitrhub-profile-finder.netlify.app/",
    github:
      "https://github.com/Hawkpraveen/Fetch-Project-Github-Profile-Finder",
    image: img4,
    desc: "A GitHub API-powered profile lookup that fetches public account information and presents it in a simple interface. A practical exercise in asynchronous requests and API integration.",
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "API Integration",
    ],
  },
];

export default ProjectsList;
