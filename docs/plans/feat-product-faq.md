# 各製品に FAQ サブページを追加

## 背景
各 `/mulmoXXX` は 概要/機能/利用例/はじめかた の 4 サブページを持つ。
ユーザー要望「どんどんページをふやしてよい」に沿って、検索流入とサイト内理解の
両面で価値の高い **FAQ（よくある質問）** を 5 つ目のセクションとして全製品に追加する。

## 設計
- `productSections.ts` の `SECTIONS` に `faq` を追加（データ追加のみでルートとタブが増える）。
- ルート（`router/index.ts`）は `PRODUCT_IDS × SECTIONS` で自動生成されるため変更不要。
- `ProductPage.vue` に FAQ セクションの描画（Q/A リスト）を追加。
- SEO: FAQ ページでは `FAQPage` の JSON-LD を出力（`seo.ts` に `faqPageJsonLd` を追加）。
- i18n: `products.sections.faq` / `faqLead` と、各製品の `faq: [{ q, a }]` を ja/en に追加。
  内容は各製品リポジトリ（~/ss/llm 以下）のドキュメント準拠。
- `sitemap.xml` に 4 製品 × /faq × (ja/en/無印) を追加。

## 検証
- `yarn format` → `yarn lint` → `yarn build`（型チェック込み）。
- ヘッドレス Chrome で ja/en の FAQ ページを描画確認（タブ activo・Q/A 表示・`@latest` 等）。
