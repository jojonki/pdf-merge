# pdf-merge

Merge PDFs in your browser — drag, drop, reorder. No install, no upload; everything runs locally.

Just open `PDFMerge.html` in a browser. It works on both Windows and Mac, with no installation or internet connection required. Your files are never sent anywhere.

## Usage

1. Open `PDFMerge.html` in a browser (Chrome / Edge / Safari / Firefox)
2. Drag and drop PDF files onto the page (or click to select them)
3. Reorder by dragging rows, using the ▲▼ buttons, or "Sort by name" / "Reverse"
4. Optionally specify which pages to use in the pages field (e.g. `1-3,5`; leave blank for all pages)
5. Enter an output file name and click "Merge & save"

To share the tool, just hand over the single `PDFMerge.html` file.

## How it works

Merging is done entirely in the browser using [pdf-lib](https://pdf-lib.js.org/), which is inlined into `PDFMerge.html`. Files are read with the File API, merged in memory, and saved via a `blob:` URL — no network requests are made.

Note: password-protected (encrypted) PDFs may not merge correctly.

## Security & Privacy

If you plan to merge confidential documents, here is exactly what this tool does and how you can verify it yourself.

### What happens to your files

- Files are read locally with the browser's File API, merged in memory, and saved through a `blob:` URL (a local, in-browser download).
- Nothing is uploaded. There is no server-side code — the hosted version is a static page on GitHub Pages.
- No analytics, no cookies, no tracking, and no external resources (no CDN scripts, web fonts, or images).

### Enforced by the browser, not just promised

`PDFMerge.html` sets a strict [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP):

```
default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';
img-src data:; connect-src 'none'; form-action 'none'; base-uri 'none'
```

`connect-src 'none'` makes the browser block every `fetch`, XHR, WebSocket, and beacon request from the page — including any from the bundled library. External scripts, styles, and images cannot be loaded either, and forms cannot be submitted anywhere.

### Verify it yourself

- **Network tab**: open DevTools (F12) → Network, then merge some files. No requests are made.
- **Offline**: turn off Wi-Fi and use the tool. It works exactly the same.
- **Read the source**: all application code is in [`src/template.html`](src/template.html) (about 340 lines of plain HTML/CSS/JS, no framework).

### Third-party code

The only third-party code is pdf-lib, bundled as its prebuilt `dist/pdf-lib.min.js` from npm, unmodified except that the trailing source-map comment is removed.

| Package | Version | License | Role |
|---|---|---|---|
| [pdf-lib](https://github.com/Hopding/pdf-lib) | 1.17.1 | MIT | Reading, copying, and writing PDF pages |
| [pako](https://github.com/nodeca/pako) | 1.0.11 | MIT and Zlib | Compression (bundled inside pdf-lib) |
| [@pdf-lib/standard-fonts](https://github.com/Hopding/standard-fonts) | 1.0.0 | MIT | Standard font metrics (bundled inside pdf-lib) |
| [@pdf-lib/upng](https://github.com/Hopding/upng) | 1.0.1 | MIT | PNG decoding (bundled inside pdf-lib) |
| [tslib](https://github.com/microsoft/tslib) | 1.14.1 | 0BSD | TypeScript runtime helpers (bundled inside pdf-lib) |

Exact versions and integrity hashes are pinned in [`package-lock.json`](package-lock.json). Build tooling (Node.js and [`build.mjs`](build.mjs)) is only used to generate the HTML and is not part of what runs in your browser.

### Reproducible build

You can confirm that the committed `PDFMerge.html` matches the source and the published npm package:

```sh
npm ci          # installs exactly the versions in package-lock.json, verifying their hashes
npm run build   # regenerates PDFMerge.html
git diff --exit-code PDFMerge.html   # no output = identical
```

### Things to keep in mind

- **Hosted vs. local**: the GitHub Pages version always serves the latest code from this repository. For highly sensitive documents, download `PDFMerge.html` once, review it if you like, and open the local copy — it will never change underneath you.
- **Browser extensions** that can read page content can, in principle, see anything a web page handles. This applies to any browser-based tool; use a clean browser profile if that is a concern.

Found a security issue? Please [open an issue](https://github.com/jojonki/pdf-merge/issues).

## Development

Edit `src/template.html`, then regenerate `PDFMerge.html` (this inlines pdf-lib):

```sh
npm install
npm run build
```

## License

MIT
