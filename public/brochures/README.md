# Program Brochures

This directory needs one PDF per certification track, named to match its slug from `lib/programs-data.ts`:

- `data-science.pdf`
- `business-analyst.pdf`
- `data-analytics.pdf`
- `full-stack.pdf`
- `ai-productivity.pdf`

The gated-download flow (`components/modal/DownloadForm.tsx`) links to `/brochures/<slug>.pdf` after a lead submits the form. Until real brochures are added here, that link will 404 — drop the real PDFs in before launch.
