# TRPG LOG ANALYZER

ココフォリアから書き出したセッションログのビジュアライズと集計を行うツール。

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ファイル構成

```tree
trpg-log-analyzer/
├─ public/                  # 静的アセット
├─ src/                     # アプリケーション本体
│  ├─ App.jsx               # アプリ全体のレイアウトと状態管理
│  ├─ App.css               # メイン画面のスタイル
│  ├─ main.jsx              # React エントリーポイント
│  ├─ index.css             # 共通スタイル
│  ├─ SampleApp.jsx         # サンプル表示用の実装
│  ├─ ChatViewer.css        # チャット表示用スタイル
│  ├─ assets/               # 画像・アイコン等
│  ├─ components/           # UI コンポーネント
│  │  ├─ ChatViewer.jsx     # チャットログの表示
│  │  ├─ LogUploader.jsx    # ログアップロード UI
│  │  ├─ LogViewer.jsx      # ログ内容の表示
│  │  └─ ResultViewer.jsx   # 集計結果の表示
│  └─ utils/                # ログ解析・HTML解析ロジック
│     ├─ htmlParser.js      # HTML パース処理
│     └─ logAnalyzer.js     # ログ集計・分析処理
├─ index.html               # Vite の HTML テンプレート
├─ package.json             # プロジェクト設定・依存関係
├─ vite.config.js           # Vite 設定
└─ README.md                # プロジェクト説明
```