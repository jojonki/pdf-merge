# pdf-merge

Merge PDFs in your browser — drag, drop, reorder. No install, no upload; everything runs locally.

Just open `PDFMerge.html` in a browser. It works on both Windows and Mac, with no installation or internet connection required. Your files are never sent anywhere.

## Usage

1. Open `PDFMerge.html` in a browser (Chrome / Edge / Safari / Firefox)
2. Drag and drop PDF files onto the page (or click to select them)
3. Reorder by dragging rows, using the ▲▼ buttons, or 名前順 (sort by name) / 逆順 (reverse)
4. Optionally specify which pages to use in the ページ (pages) field (e.g. `1-3,5`; leave blank for all pages)
5. Enter an output file name and click 結合して保存 (merge and save)

The UI is in Japanese.

To share the tool, just hand over the single `PDFMerge.html` file.

## How it works

Merging is done entirely in the browser using [pdf-lib](https://pdf-lib.js.org/), which is inlined into `PDFMerge.html`. Files are read with the File API, merged in memory, and saved via a `blob:` URL — no network requests are made.

Note: password-protected (encrypted) PDFs may not merge correctly.

## Development

Edit `src/template.html`, then regenerate `PDFMerge.html` (this inlines pdf-lib):

```sh
npm install
npm run build
```

## License

MIT
