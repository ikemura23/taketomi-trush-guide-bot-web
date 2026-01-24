# 竹富町ごみ分別ガイド - LINEチャットボット紹介サイト

「竹富町ごみ分別ガイド」というLINEチャットボットを紹介するための、モダンで清潔感のある静的ウェブサイトです。

## 🌐 公開URL

https://taketomi-trush-guide-bot-web.pages.dev/

## 📋 概要

このサイトは、AIを活用したLINEチャットボット「竹富町ごみ分別ガイド」の紹介ページです。島のごみ分別をより正しく、より楽にすることを目的としています。

**⚠️ 重要**: このプロジェクトは竹富町公式ではなく、個人が作成した非公式プロジェクトです。

## 🛠️ 技術スタック

- **React** - UIライブラリ
- **Tailwind CSS** - スタイリング
- **Lucide React** - アイコン
- **Vite** - ビルドツール
- **Cloudflare Pages** - ホスティング

## 🚀 セットアップ

### 必要な環境

- Node.js (推奨バージョン: 18以上)
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## 📦 デプロイ

Cloudflare Pagesにデプロイする場合：

```bash
npm run deploy
```

または、Wrangler CLIを使用：

```bash
npm run build
wrangler pages deploy dist
```

## 📁 プロジェクト構造

```
├── src/
│   ├── components/     # Reactコンポーネント
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowToUse.jsx
│   │   ├── Transparency.jsx
│   │   └── Footer.jsx
│   ├── App.jsx        # メインアプリケーション
│   ├── main.jsx       # エントリーポイント
│   └── index.css      # グローバルスタイル
├── public/            # 静的ファイル
└── dist/              # ビルド出力
```

## 📝 ライセンス

このプロジェクトはプロトタイプ版です。
