# fix: MulmoCast アプリのダウンロードボタン (#125)

## 背景

トップ刷新でダウンロード欄 (`MulmoCastDownload.vue`) は `/mulmocast/getting-started` にだけ表示されるようになったが、ボタンのリンク先が追従していない。

## 変更

- `web/src/views/products/products.ts`: download リンクを `/mulmocast/getting-started#download` に変更
- `web/src/views/Family.vue`: App のダウンロードボタンを同じ先に変更
- `web/src/router/index.ts`: `scrollBehavior` を追加し、ハッシュがあればその要素へスクロール（固定ヘッダー分ずらす）

ダウンロード URL の取得処理（S3 の release JSON）は変更しない。

## 確認

- `yarn format` / `yarn lint` / `yarn build`
- ビルドをプレビューし、`/mulmocast`・`/ja/mulmocast`・`/family`・`/en/family` のボタンと直接 URL でダウンロード欄に着き、インストーラーのリンクが入ることを Chromium で確認
- デプロイ後に本番で同じ導線を確認
