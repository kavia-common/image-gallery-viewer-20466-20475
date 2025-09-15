# Ocean Gallery – React Image Gallery

A responsive, accessible image gallery built with React and vanilla CSS, featuring:
- Ocean Professional theme (blue & amber accents)
- Responsive image grid
- Modal/lightbox with keyboard navigation
- Search and category filter
- Graceful image fallback logic

## Development

- `npm start` – run dev server on port 3000
- `npm test` – run tests
- `npm run build` – production build

## Attachments

This app attempts to load sample images from the repository `attachments/` folder at runtime:
- 20250915_075013_random.jpg
- 20250915_075617_picasso_pablo_1.jpg
- 20250915_075635_250px-Le_Gourmet.jpg
- 20250915_075645_girl-with-mandolin.jpg

If the dev server cannot serve files outside `public/`, the gallery will gracefully fall back to high-quality Unsplash placeholders.

To ensure local images are served in a typical CRA app, copy attachments into `public/attachments/`:
- Create folder: `public/attachments/`
- Copy the files there, preserving names
The app already points to `/attachments/<file>`.

## Accessibility

- Modal uses `role="dialog"` and `aria-modal="true"`
- ESC closes the lightbox
- Arrow Left/Right navigate images
- Buttons have descriptive labels
- Focus moves to the modal’s close button when opened
- Page scroll locked while modal is open

## Theming

Light/Dark toggle applies `data-theme` to the root element and updates CSS variables to switch colors without layout shift.

