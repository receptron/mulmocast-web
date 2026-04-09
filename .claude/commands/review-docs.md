---
description: 更新したWebドキュメントページをブラウザで確認する。
argument-hint: [確認するページのパスまたはVueファイル名]
# Bash(yarn dev): 開発サーバー起動
# Bash(open *): ブラウザでページを開く
allowed-tools: Read, Glob, Bash(yarn dev), Bash(open *)
---

# ドキュメントページ確認スキル

引数: $ARGUMENTS

## 概要

更新したWebドキュメントページをdev serverで確認する。

## 実行手順

1. **対象ページを特定**: 引数からVueファイルとルートパスを特定
2. **dev serverの確認**: `yarn dev` が起動中か確認し、起動していなければバックグラウンドで起動
3. **ブラウザで開く**: 対象ページのURLを `open` コマンドで開く
4. **ユーザーに確認**: 表示結果に問題がないか確認

## ページとURLのマッピング

| Vueファイル | URL |
|-------------|-----|
| `DocsIndex.vue` | `http://localhost:5173/docs` |
| `cli/CliIndex.vue` | `http://localhost:5173/docs/cli` |
| `cli/CliQuickstart.vue` | `http://localhost:5173/docs/cli/quickstart` |
| `cli/CliMulmoscript.vue` | `http://localhost:5173/docs/cli/mulmoscript` |
| `cli/CliProviders.vue` | `http://localhost:5173/docs/cli/providers` |
| `cli/CliAdvanced.vue` | `http://localhost:5173/docs/cli/advanced` |
| `DocsApp.vue` | `http://localhost:5173/docs/app` |
| `DocsSlides.vue` | `http://localhost:5173/docs/slides` |
| `DocsEasy.vue` | `http://localhost:5173/docs/easy` |
| `DocsPreprocessor.vue` | `http://localhost:5173/docs/preprocessor` |
| `DocsMulmochat.vue` | `http://localhost:5173/docs/mulmochat` |
| `DocsMulmoclaude.vue` | `http://localhost:5173/docs/mulmoclaude` |
| `DocsRecipes.vue` | `http://localhost:5173/docs/recipes` |
