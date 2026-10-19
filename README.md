# PDF結合ツール

`PDFMerge.html` をダブルクリックしてブラウザで開くだけで使える、PDF結合ツールです。
Windows / Mac どちらでも動き、インストールもネット接続も不要です（ファイルは外部へ送信されません）。

## 使い方

1. `PDFMerge.html` をブラウザ（Chrome / Edge / Safari / Firefox）で開く
2. PDFファイルを画面にドラッグ＆ドロップ（またはクリックして選択）
3. 行のドラッグ、▲▼ボタン、「名前順」「逆順」で並べ替え
4. 必要なら「ページ」欄で使うページを指定（例: `1-3,5`、空欄なら全ページ）
5. 出力ファイル名を入力して「結合して保存」

配布するときは `PDFMerge.html` の1ファイルだけを渡せばOKです。

## 開発

`src/template.html` を編集し、以下で `PDFMerge.html` を再生成します（[pdf-lib](https://pdf-lib.js.org/) を埋め込みます）。

```sh
npm install
npm run build
```
