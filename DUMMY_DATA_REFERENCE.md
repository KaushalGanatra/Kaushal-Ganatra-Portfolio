# Dummy / Placeholder Data Reference

This portfolio uses real data from `Kaushal_Ganatra_CV_latest.pdf` wherever possible.
The items below are **placeholder content** — replace them with real data when available.

All dummy items live in `src/data/portfolio.ts`. Look for `dummy: true` flags
or the sections listed below.

## Sections with placeholder content

### `techBlog` — Tech Blog posts
All posts are illustrative. Replace with real article titles + links + dates
once you publish them. Topics chosen to match your actual stack
(.NET Core, Go, React, AI-assisted dev, PostgreSQL, Docker).

### `personalWriting` — Personal essays
All essays are illustrative. Themes (curiosity, philosophy, books, Rajkot)
were picked to feel authentic — swap in your real writing when ready.

### `galleryItems` — Gallery tiles
Currently rendered as colored placeholder tiles with captions. Replace each
entry's `color` with an `image` URL (and update the Gallery component) to use
real photos.

### `legends` — Unsung Legends in tech
Curated public-domain figures. Keep, edit, or replace with your own picks.

### `currently` — "Currently" widget on personal home
Reading / Watching / Listening / Building — update freely.

### `interests` — interest pills on personal home
Edit to match your real interests.

### `businesses` — derived from CV companies
These are the actual companies/clients from the CV. Descriptions paraphrase
the CV bullets. Edit if you'd like more nuance.

### `stats` — Hero stat block on home
Numbers (years exp, companies, projects, certifications) are conservative
estimates from the CV — adjust as your career grows.

## Profile photo

`src/assets/profile.jpg` is an AI-generated portrait used as a placeholder.
Replace with a real photo (same dimensions ideally) when ready.

## Resume PDF

`public/Kaushal_Ganatra_CV.pdf` is the real CV provided. The Download Resume
button serves this file. Replace it with a newer version when the CV updates.

## Removed / Hidden for now

- **Experience Card Details**: The detail lists (what was built/achieved) that open on clicking the timeline cards in `src/routes/experience.tsx` have been commented out. They are still in the code and can be uncommented to restore the interaction.
