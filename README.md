# Nafisa Boutique — Vite + Vercel

A multi-page Vite website prepared for Vercel deployment.

## Run locally

1. Install Node.js 20 or newer.
2. Extract this project ZIP.
3. Open a terminal in the project folder (the folder containing `package.json`).
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the deployable site to `dist/`.

## Deploy to Vercel

1. Push the extracted project folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Vercel detects Vite. The included `vercel.json` sets:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

The project uses Vite's multi-page build. Keep all seven HTML pages, CSS, JS and `assets/` in the project root as provided. Do not upload only `index.html` or the `dist` folder to GitHub.

## Pages
- `index.html` — homepage and interactive demo catalogue/cart
- `story.html` — brand story
- `collections.html` — collections
- `lookbook.html` — visual archive
- `journal.html` — journal
- `atelier.html` — custom design enquiries
- `contact.html` — contact

## Commerce status
The current cart, wishlist and checkout are frontend prototype interactions. Checkout sends an order enquiry; it does not process payments, reserve inventory, calculate live shipping/taxes or create real orders. Connect Shopify or another commerce backend before accepting customer payments.

Product prices are illustrative CAD values and need confirmation by Nafisa Boutique. Verify contact details, policies, product descriptions, shipping and tax settings before launch.
