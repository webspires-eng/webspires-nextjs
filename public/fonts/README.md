# Self-hosted display + body fonts (Answer Engine design system)

The site is wired to use two self-hosted Fontshare fonts. Until the files below
are present, the CSS falls back to Geist automatically, so the build and site
never break. Drop the files in and they activate on the next load.

## Add these two files (exact names)

| File to place here | Font | Source |
|---|---|---|
| `clash-display.woff2` | **Clash Display** (Variable) | https://www.fontshare.com/fonts/clash-display |
| `satoshi.woff2` | **Satoshi** (Variable) | https://www.fontshare.com/fonts/satoshi |

Both are free for commercial use under the Fontshare licence.

### How to get them
1. Open each Fontshare link above and click **Download Family**.
2. From each download, take the **variable** `.woff2` (e.g. `ClashDisplay-Variable.woff2`,
   `Satoshi-Variable.woff2`).
3. Rename them to `clash-display.woff2` and `satoshi.woff2` and place them in this
   folder (`public/fonts/`).

The `@font-face` rules and the `--font-clash` / `--font-satoshi` variables are
already declared in `src/app/globals.css`. JetBrains Mono (the mono/citation
face) loads automatically via `next/font/google` — no file needed.

### Optional: faster first paint
Once the files are here, you can preload them by adding to the `<head>` in
`src/app/layout.js`:

```jsx
<link rel="preload" href="/fonts/clash-display.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="/fonts/satoshi.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```
