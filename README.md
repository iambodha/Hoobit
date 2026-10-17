# Hoobit

A student-led community for free peer learning and student hackathons. Hoobit brings students together to explore interests, teach one another, and build projects—from Python and Scratch to 3D modelling, game development, and music.

This repository contains the community website. It explains the learning tracks, shares existing student feedback, and links to learner/mentor interest forms and our hackathon work. It is a public information site; accounts, course enrollment, and a learning-management backend are not implemented here.

**[Hackathon project](https://github.com/iambodha/Hoobit_Hacks_2026)** · **[Python teaching resources](https://github.com/iambodha/Hoobit-Python-Resources)** · **[Learner interest form](https://forms.gle/fRZ2urgo2VZH3gLh8)** · **[Mentor interest form](https://forms.gle/eoou3L5RzkhaUA9y6)**

## About the project

The site supports a community built around students sharing what they enjoy. Peer-led learning and hackathons are complementary: one helps students explore a subject, while the other gives them a chance to build and share something with others.

The website introduces the learning tracks, presents student feedback, and gives learners and prospective mentors a clear way to express interest. Hackathon links connect the community introduction to its project work.

## Run locally

Node.js 20+ and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run typecheck
npm run build
```

The application uses Next.js, React, TypeScript, Tailwind CSS, Radix UI, Lucide, and Framer Motion. Inter is bundled through Fontsource, so builds do not require a Google Fonts download. npm's `package-lock.json` is the authoritative dependency lockfile.

## Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Community page composition, including hackathon content |
| `components/site-header.tsx` | Desktop/mobile navigation and menu state |
| `components/hero-section.tsx`, `features-section.tsx` | Introduction and learning tracks |
| `components/testimonials-section.tsx` | Existing student quotes, with labelled manual controls |
| `components/cta-section.tsx` | Learner and mentor interest links |
| `lib/site.ts` | Shared public destinations and base-path-aware asset paths |

Learner signup links now use the same existing form destination throughout the site. The mobile menu opens/closes, closes after navigation, and supports Escape. Student quotes stay visible until the reader changes them. Decorative motion respects reduced-motion preferences.

## Static deployment

`npm run build` exports the site into `out/`. The existing GitHub Pages workflow deploys `main`; PR checks build the site without deploying it. For project Pages hosting:

```sh
NEXT_PUBLIC_BASE_PATH=/Hoobit npm run build
```

On PowerShell, set `$env:NEXT_PUBLIC_BASE_PATH="/Hoobit"` before running the build. Leave the variable unset for root-domain hosting. The logo and favicon use the same base path as the application.

The repository does not declare a verified canonical live domain. The forms and event/resources links are existing public project destinations; check that the intended forms are accepting responses before a campaign. No signup was submitted during this maintenance pass.

## Contributing

Keep community information factual and links current. Confirm permission before adding testimonials or personal details. Check the page on a narrow screen, test navigation with a keyboard, and run the type check and production build before opening a PR.

## License

Repository code uses [Apache License 2.0](LICENSE). Bundled fonts and dependencies retain their own licenses. Existing community quotes and branding remain attributed to their contributors.
