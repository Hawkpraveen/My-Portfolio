

# Praveen Kumar — Product Engineer

A responsive portfolio for Praveen Kumar, focused on product engineering,
backend systems, full-stack development, and applied AI.

## Highlights

- Responsive navigation with working section links and a dark/light theme switch.
- Profile, education, and an experience section that separates professional
  Piqual product work from personal projects.
- A GitHub repository explorer and a compact, fully labeled contact form.
- Technology categories and current focus based on Praveen’s public GitHub
  profile.
- Existing AOS scroll reveals, typed headline, hero animations, hover states,
  and loading experience are retained.
- Contact form uses EmailJS; status is reported through toast notifications.

The GitHub section reads public repository metadata from the GitHub REST API at
runtime. If the API is unavailable or rate-limited, the direct GitHub profile
link remains available.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.
