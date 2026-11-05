# Brassy Monkey — Barber Shop & Salon, Tecumseh OK

Website for Brassy Monkey (owner: Misty Patterson), 1011 N. Broadway, Suite 3, Tecumseh, OK 74873 · (918) 758-6486.

Built with **React + Vite + TypeScript + Tailwind CSS**, the same stack Lovable uses, so it can be edited in Lovable, any code editor, or directly on GitHub.

## Where to edit things

| What | File |
|---|---|
| **All text, prices, hours, reviews, gallery photos, phone, Facebook link** | `src/content.ts` |
| Brand colors & fonts | top of `src/index.css` (the `:root` block) |
| Page sections (layout) | `src/components/*.tsx` (one file per section) |
| Photos | `public/images/` (reference as `/images/name.webp`) |
| SEO title, description, Google business data | `index.html` |

### Quick edits in `src/content.ts`
- **Prices:** change `price: "Call for pricing"` to e.g. `price: "From $25"`.
- **Hours:** fill `open: "09:00", close: "18:00"` (24-hour time), or `closed: true`. The Open now / Closed now badge appears automatically.
- **Facebook:** replace the `facebook:` URL with the shop's real page.
- **Gallery:** upload a photo to `public/images/`, then add an entry to `gallery`. Before-and-after sliders are supported (see the example comment).

### Example Lovable prompts
- "Set the price for Men's Haircuts to $25 and Beard Trims to $15"
- "Set hours to Tue–Fri 9am–6pm, Sat 9am–2pm, closed Sunday and Monday"
- "Add the photo I uploaded to the gallery with the caption 'Fresh fade'"

## Run locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production files in dist/
```
