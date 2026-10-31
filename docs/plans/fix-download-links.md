# fix: MulmoCast アプリのダウンロードボタン (#125)

## 背景

トップ刷新でダウンロード欄 (`MulmoCastDownload.vue`) は `/mulmocast/getting-started` にだけ表示されるようになったが、ボタンのリンク先が追従していない。さらに、ボタンはページ遷移ではなく直接インストーラーをダウンロードしてほしい。

## 変更

- `web/src/views/products/installers.ts`（純粋関数）: OS 判定（Mac / Windows / それ以外。iPad の Mac 偽装はタッチ対応で除外）と、release JSON からインストーラー URL を作る処理
- `web/src/views/products/useMulmoCastInstallers.ts`: release JSON を一度だけ取得し、Mac / Windows / この端末向けのインストーラーを返す。取得の仕組みは以前の `Home.vue` と同じ（S3 の `RELEASES.json` / `RELEASE.json`）
- 製品ページの「ダウンロード」、`/family` の App ボタン: この端末向けインストーラーを直接ダウンロード。判定できない OS や取得失敗時は `/mulmocast/getting-started#download` へ
- `/docs/app` のダウンロード欄: GitHub Actions ではなくインストーラーを直接ダウンロード（取得失敗時は従来の GitHub Actions）
- `web/src/router/index.ts`: ハッシュ付き遷移でその要素へスクロール（上の代替リンク用）
- `web/vite.config.ts`: S3 の CORS は mulmocast.com だけ許可しているため、開発サーバーでは `/releases` を S3 へ中継する

## 確認

- `yarn format` / `yarn lint` / `yarn build`
- 開発サーバーで Mac / Windows / Linux / iPad の各ユーザーエージェントからボタンを押し、ダウンロード開始とページに留まることを Chromium で確認
- デプロイ後に本番で同じ導線を確認
