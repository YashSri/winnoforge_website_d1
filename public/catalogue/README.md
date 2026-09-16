# Course Catalogue

The "Download Course Catalog" flow (`components/home/FeaturedPrograms.tsx` → `components/modal/CatalogueForm.tsx`) unlocks `/catalogue/forge-course-catalog.pdf` after a successful lead submission.

That PDF does not exist yet — drop the real, up-to-date course catalogue PDF at this path before launch (matching the filename referenced in `CatalogueForm.tsx`'s `onSuccess` call), the same placeholder pattern as `public/brochures/README.md`.
