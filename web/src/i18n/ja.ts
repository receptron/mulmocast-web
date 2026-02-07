import languages from "./languages";

const lang = {
  message: {
    hello: "こんにちは、世界",
  },
  menu: {
    top: "Home",
    mypage: "マイページ",
    signin: "ログイン",
    signout: "ログアウト",
    about: "Abount",
  },
  filmFes: {
    title: "AIショートフィルムフェス 2025",
  },
  festival: {
    resultsAnnouncement: "結果発表",
    grandPrix: {
      title: "グランプリ",
      work: "無名の人",
      creator: "柿原飛翔",
      description:
        "影ばかり撮る無名の青年の一夜を通じて、「なんとなく惹かれてしまうもの」とAIとの距離感を重ねて描いた映像作品。審査員満場一致でグランプリに選出。",
    },
    categoryAwards: {
      title: "部門賞",
      visual: {
        title: "ビジュアル部門",
        work: "無名の人",
        creator: "柿原飛翔",
      },
      animation: {
        title: "アニメーション部門",
        work: "1クリックの向こう側",
        creator: "カワベシンクン",
      },
      promotion: {
        title: "プロモーション部門",
        work: "W Pepper Melon",
        creator: "ungr18",
      },
      documentary: {
        title: "ドキュメンタリー部門",
        work: "AUTHENTIC ZERO",
        creator: "keythpiece",
      },
    },
    statistics: {
      title: "開催概要",
      totalEntries: "総応募数: 184作品",
      eventDate: "審査ライブ開催日: 2025年12月13日",
      totalPrize: "賞金総額: 90万円（グランプリ 50万円）",
    },
    reviewLive: {
      title: "審査ライブ",
      description:
        "2025年12月13日にYouTubeで開催された審査ライブでは、審査員長の中島聡氏をはじめ、佐渡島庸平氏、白井暁彦氏、オースミユーカ氏による審査が行われました。",
    },
    relatedLinks: {
      title: "関連リンク",
      noteArticle: "審査ライブ全まとめ（note記事）",
      passedWorks: "一次予選通過作品一覧",
      officialPage: "公式イベントページ",
    },
    backButton: "ホームに戻る",
  },
  navigation: {
    home: "ホーム",
    docs: "ドキュメント",
    faq: "FAQ",
    festival: "映画祭",
    family: "ファミリー",
    openMenu: "メニューを開く",
  },
  family: {
    title: "MulmoCast Family",
    subtitle: "MulmoCastエコシステムを構成するツール群",
    cli: {
      title: "MulmoCast CLI",
      tagline: "MulmoCastのコアエンジン",
      description:
        "MulmoCastの本質となるフル機能CLIツール。台本生成、画像・音声生成、動画・PDF・スライド出力まで、すべての機能を備えたAIネイティブなプレゼンテーションプラットフォーム。",
    },
    app: {
      title: "MulmoCast App",
      tagline: "デスクトップアプリケーション",
      description:
        "MulmoCast CLIをGUIアプリとして簡単に使えるようにしたもの。インストールするだけで、ほとんどの用途で動画が作れます。",
      download: "ダウンロード",
    },
    slides: {
      title: "MulmoCast Slides",
      tagline: "プレゼン変換ツール",
      description:
        "Keynote、PPTX、PDF、Marp MarkdownなどのプレゼンテーションファイルをMulmoScriptに変換。スライド画像の抽出やLLMによるナレーション生成も可能です。",
    },
    vision: {
      title: "MulmoCast Vision",
      tagline: "スライド作成特化ツール",
      description:
        "MulmoCast CLIとテンプレートを組み合わせたスライド作成特化のMCPツール。80以上のビジネステンプレートで提案書やレポートを数秒で作成できます。",
    },
    mcp: {
      title: "MulmoCast MCP",
      tagline: "CLIのMCPサーバー版",
      description:
        "MulmoCast CLIの機能をMCPサーバーとして提供。Claude DesktopなどのMCPクライアントから直接MulmoCastの機能を利用できます。",
    },
    viewer: {
      title: "MulmoCast Viewer",
      tagline: "Web埋め込みコンポーネント",
      description:
        "CLIでバンドルしたデータをVue 3のWebサイトに組み込むためのビューアーコンポーネント。多言語対応、速度調整、テーマ機能を備えています。",
    },
    chat: {
      title: "MulmoChat",
      tagline: "次世代音声対話OS",
      description:
        "Chat Protocolを使った次世代の音声対話プラットフォーム。テキストとビジュアルを融合し、会話しながらリアルタイムで画像やインタラクティブコンテンツを体験できます。",
    },
    protocol: {
      title: "GUI Chat Protocol",
      tagline: "チャットプラグイン仕様",
      description:
        "チャットアプリ用GUIプラグインの標準プロトコル。Vue 3とReactアダプターを提供し、フレームワークに依存しないポータブルなプラグイン開発を可能にします。",
    },
    badges: {
      gui: "GUI",
      cli: "CLI",
      automation: "自動化",
      component: "コンポーネント",
      format: "フォーマット",
      openSource: "オープンソース",
      core: "コア",
      fullFeature: "フル機能",
      autoGenerate: "自動生成",
      nextGen: "次世代",
      converter: "変換",
      protocol: "プロトコル",
      multimodal: "マルチモーダル",
      slides: "スライド生成",
      integration: "AI統合",
    },
    backButton: "ホームに戻る",
  },
  faq: {
    title: "FAQ（よくある質問）",
    subtitle: "Frequently Asked Questions",
    copyLink: "リンクをコピー",
    linkCopied: "リンクをクリップボードにコピーしました！",
    items: [
      {
        question: "MulmoCastとは何ですか？",
        answer:
          "MulmoCastは、台本を書くだけでAIが画像とナレーション音声を自動生成し、動画を完成させるマルチモーダルプレゼンテーションツールです。",
      },
      {
        question: "料金はかかりますか？",
        answer:
          "MulmoCast のアプリケーション自体は無料でご利用いただけます。\nただし、生成AIの利用には OpenAI / Google / Anthropic などの各種 API Key が必要で、これらの API の利用には料金が発生します。\n\nまた、ChatGPT Plus のような月額プランとは別の仕組みのため、月額課金をしていても API 利用料が無料になるわけではありません。\n\nMulmoCast はユーザーご自身の API Key を使って AI を呼び出す仕組みのため、MulmoCast 側から料金が請求されることはありません。",
      },
      {
        question: "どのプラットフォームで利用できますか？",
        answer: "MacOS、Windows、およびCLIツールで利用可能です。",
      },
      {
        question: "どんな用途に使えますか？",
        answer:
          "ショート動画、学生のレポートや授業発表、ビジネスの提案資料や企画書など、様々な用途でご利用いただけます。",
      },
      {
        question:
          "画像生成時に「画像生成（OpenAI）エラー: gpt-image-1 モデルを利用するためには組織認証を行ってください...」というエラーが出ます。どうすれば良いですか？",
        answer:
          "gpt-image-1 モデルを利用するには、OpenAIアカウントで「組織認証（Verify Organization）」を完了する必要があります。これはChatGPT Plusなどの有料プランとは別の手続きです。",
      },
      {
        question: "「組織認証」はどこで行いますか？また、Personaへの課金は必要ですか？",
        answer: "Personaへの課金は不要です。下記の手順で行うことができます。",
        stepsLabel: "手順:",
        steps: [
          "{organizationSettingsPage}にアクセスし、「Verify Organization」ボタンをクリックします。",
          "画面の案内に沿って本人確認（Personaを利用）を完了してください。",
        ],
        organizationSettingsPageText: "OpenAI Platformの組織設定ページ",
        note: "補足：PersonaはOpenAIが採用している本人確認サービスです。ユーザー側がPersonaに料金を支払う必要はありません。",
        support:
          "※本人確認が繰り返し失敗する場合は、{openaiSupport}へお問い合わせください。Help Center（右下のチャット）から連絡できます。",
        openaiSupportText: "OpenAIのサポート",
        alternative: {
          title: "■ dall-e-3 モデルを利用する場合",
          description:
            "「gpt-image-1」モデルを利用しない場合は、代わりに「dall-e-3」モデルをお使いいただけます。以下の手順で設定を変更してください。",
          stepsLabel: "操作手順:",
          steps: [
            "スタイル設定タブを開き、画像生成設定のセクションに移動します。",
            "AI の種類が「OpenAI」に設定されていることを確認します。",
            "モデルの設定を「auto」から「dall-e-3」に変更します。",
          ],
        },
      },
      {
        question: "思った通りに動画が生成されません。どうすればいいですか？",
        answer:
          "MulmoCastの動画生成は、生成した画像と動画生成プロンプトを組み合わせて映像を作成しています。画像が生成されていない場合は、動画生成プロンプトのみで動画を生成する仕組みになっています。\n\nより意図に近い映像を生成するには、次のいずれかの方法をお試しください。",
        methods: [
          "先に画像生成を行い、その画像に対して動画生成プロンプトを設定する",
          "動画生成プロンプトに具体的な映像指示（シーンの内容、動きの詳細など）を詳しく記述する",
        ],
      },
      {
        question: "動画の後半が静止画になってしまいます。どうすればいいですか？",
        answer:
          "音声の長さ（テキスト量）が動画の生成時間を超えると、後半部分は静止画として表示される仕様になっています。\n\n使用する動画生成モデルによって、1回の動画生成で作成できる時間に制限があります。たとえば、Google（Veo3）を使用している場合、動画は8秒固定で生成されます。\n\nこの場合は、次のいずれかの方法で調整してください。",
        methods: [
          "後半が静止画になることを許容する",
          "音声の長さ（テキスト量）を調整し、動画生成時間内に収まるよう分割する",
        ],
      },
      {
        question: "セリフのないスライド（画像のみ）を、指定した時間だけ表示することはできますか？",
        answer: "可能です。上級モードで、各ビートの表示時間を指定できます。以下の手順で設定してください。",
        steps: ["上級モードにする", "JSONタブを開く", "該当するビートに「duration: 秒数」を追加する"],
        exampleLabel: "例:",
        noteLabel: "注意:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "",\n  "image": {'{'}\n    "type": "textSlide",\n    "slide": {'{'}\n      "title": "no audio slide + duration",\n      "bullets": [\n        "duration 5"\n      ]\n    {'}'}\n  {'}'},\n  "duration": 5\n{'}'}`,
        exampleNote: "この例では、セリフのないスライドが5秒間表示されます。",
        note: "duration を追加する場合は、その前の項目（この例では image オブジェクト）の最後にカンマ（,）を付けることを忘れないでください。",
      },
      {
        question: "動画生成プロンプトで作った動画が、途中で切れてしまいます。どうすればいいですか？",
        answer:
          "動画生成プロンプトを使用して動画を生成した場合、MulmoCastは音声と動画を結合する際に音声の長さを基準に映像をトリミングしています。そのため、生成された動画が音声より長い場合、音声の終端で動画が途中で切れてしまうことがあります。\n\nこの場合は、上級モードで audioParams.padding を追加して、音声の終端に余白を設けてください。\n\n以下の手順で設定してください。",
        steps: ["上級モードにする", "JSONタブを開く", "該当するビートに「audioParams.padding: 秒数」を追加する"],
        exampleLabel: "例:",
        noteLabel: "注意:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "This beat has audio. add padding 6.",\n  "audioParams": {'{'}\n    "padding": 6\n  {'}'},\n  "moviePrompt": "Four shots in rapid succession: art, anime, documentary, and promotional style.",\n  "enableLipSync": false\n{'}'}`,
        exampleNote: "この例では、音声の終端に6秒の余白を追加しています。",
        note: "audioParams を追加する場合は、その前の項目の最後にカンマ（,）を付けることを忘れないでください。",
      },
      {
        question: "エラーが発生した場合、問い合わせ時にどのような情報を共有すれば良いですか？",
        answer:
          "お問い合わせの際は、以下の情報を共有していただくと問題解決がスムーズになります。\n\n■ MulmoScript (JSON) のダウンロード方法\n問題が発生したプロジェクトのJSONファイルを以下の手順でダウンロードできます：\n対象のプロジェクトのページ → 「MulmoScript をダウンロード」\n\n■ ログファイルの場所\n• Mac: ~/Library/Application Support/MulmoCast/mulmocastLog\n• Windows: %APPDATA%\\MulmoCast\\mulmocastLog\n\nログファイルにはアプリケーションの動作ログが記録されており、エラー発生時の詳細情報が含まれます。\nフォルダ内には日付ごとにログファイルが分かれています。エラーが発生した日付のログファイルを共有してください。",
      },
      {
        question: "BGMを変更・オフにしたり、自分で作った音源を使ったりすることはできますか？",
        answer:
          "はい、可能です。\nスタイル設定タブ > オーディオ設定 > BGM のプルダウンから、以下のオプションを選択できます：\n\n• BGM：内蔵のBGMから選択できます。\n• カスタムオーディオ：ご自身で作成した音源ファイルなどを直接使用できます。\n• なし：BGMをオフにします。",
      },
      {
        question: "一つの音声を複数のビートで共有する方法（スピルオーバー機能）はありますか？",
        answer:
          "はい、可能です。MulmoCastでは、一つの音声（ナレーション）を複数のビートにまたがって再生する「音声スピルオーバー」機能をサポートしています。この機能は、ミュージックビデオの作成や、長いナレーションを複数のスライドで表示する際に便利です。\n\n上級モードで設定できます。",
        rulesLabel: "動作ルール:",
        rules: [
          "話す内容を持つビートで音声が開始されます",
          "話す内容がないビートでは、前のビートの音声が継続して再生されます",
          "BEAT の時間で各ビートの表示時間を指定できます",
        ],
        durationLabel: "BEAT の時間の自動配分:",
        duration: [
          "BEAT の時間が指定されていないビートには、残りの音声時間を均等に配分します",
          "一部のビートに BEAT の時間が指定されている場合は、指定された BEAT の時間を優先し、残りを均等配分します",
          "均等配分時も各ビートに最低1秒は割り当てられます",
        ],
      },
      {
        question: "OpenAI の Usage Tiers とはなんですか？",
        answer:
          "OpenAI APIの利用制限です。支払い実績に応じて変わる「Tierシステム」で管理されています。\n\nAPIへの支払い額が増えると、自動的に次の利用Tierに昇格します。Tierが上がると、月の利用上限額が増え、API rate limitの制限も緩和されます。",
        tiersLabel: "各Tierの利用上限額（Tier 3まで、2025年12月現在）:",
        tiers: [
          "Free: $100/月",
          "Tier 1: $100/月（$5以上の入金が必要）",
          "Tier 2: $500/月（$50以上の入金 + 初回入金から7日以上経過）",
          "Tier 3: $1,000/月（$100以上の入金 + 初回入金から7日以上経過）",
        ],
        note: "Tier 4以上や各モデルのrate limitsについては、公式ドキュメントを確認してください：",
        rateLimitsLink: "https://platform.openai.com/docs/guides/rate-limits#usage-tiers",
        rateLimitsText: "Rate Limits",
        checkTier: "あなたのTierは",
        organizationLimitsLink: "https://platform.openai.com/settings/organization/limits",
        organizationLimitsText: "Organization Limits",
        checkTierSuffix: "から確認できます。",
      },
      {
        question: "Gemini API の Usage Tiers とはなんですか？",
        answer:
          "Gemini APIの利用制限です。OpenAIと異なり、金額ベースの上限ではなく、リクエスト数やトークン数で管理されています。\n\n使用量と費用が増加すると、自動的に上位のTierにアップグレードされ、レート制限が緩和されます。",
        tiersLabel: "各Tierの条件（2025年12月現在）:",
        tiers: [
          "Free: 対象となる国のユーザー",
          "Tier 1: プロジェクトにリンクされている有料の請求先アカウント",
          "Tier 2: 合計費用 $250超 + 支払い完了から30日以上経過",
          "Tier 3: 合計費用 $1,000超 + 支払い完了から30日以上経過",
        ],
        note1: "※ Tier 2/3の費用は、Google Cloudサービス（Gemini API含む）の合計累積費用に基づきます。",
        checkTier: "あなたのTierは",
        aiStudioUsageLink: "https://aistudio.google.com/usage?tab=rate-limit",
        aiStudioUsageText: "AI Studio Usage",
        checkTierSuffix: "から確認できます。",
        note2: "具体的なレート制限値やモデル別の詳細は公式ドキュメントを確認してください：",
        geminiRateLimitsLink: "https://ai.google.dev/gemini-api/docs/rate-limits",
        geminiRateLimitsText: "Gemini API Rate Limits",
      },
    ],
    backButton: "ホームに戻る",
  },
  docs: {
    title: "ドキュメント",
    subtitle: "MulmoCastエコシステムの公式ドキュメント",
    readMore: "詳細を見る",
    backButton: "ホームに戻る",
    backToDocs: "ドキュメントに戻る",
    cli: {
      title: "MulmoCast CLI",
      description: "コアエンジン。MulmoScriptからAI動画を生成するコマンドラインツール。",
      item1: "インストールとクイックスタート",
      item2: "MulmoScript仕様",
      item3: "コマンドリファレンス",
      pageTitle: "MulmoCast CLI",
      pageSubtitle: "フル機能のAIプレゼンテーションプラットフォーム",
      installation: {
        title: "インストール",
        description: "npxを使って直接実行できます。Node.js 22以上が必要です。",
        note: "グローバルインストール: npm install -g mulmocast",
      },
      quickstart: {
        title: "クイックスタート",
        description: "基本的な使い方の流れです。",
      },
      mulmoscript: {
        title: "MulmoScript",
        description: "MulmoScriptはMulmoCastの台本フォーマットです。JSON形式で記述します。",
      },
      commands: {
        title: "コマンドリファレンス",
        description: "利用可能なコマンド一覧です。",
      },
      advanced: {
        lipsync: {
          modelComparison: "モデル比較",
          model: "モデル",
          inputType: "入力形式",
          features: "特徴",
          omniHuman: {
            input: "静止画",
            description: "推奨。最新・高品質。静止画1枚から自然な口パク動画を生成",
          },
          latentSync: {
            input: "動画",
            description: "安定した品質。既存の動画の口の動きを音声に合わせて変更",
          },
          tmappdev: {
            input: "動画",
            description: "レガシーモデル。互換性のために維持",
          },
          completeConfig: "完全な設定例",
          configTitle: "リップシンクデモ",
          configText: "こんにちは、リップシンクのデモです",
          imageTipsLabel: "入力画像のコツ：",
          imageTips:
            "正面を向いた顔が明確に映っている画像を使うと、最も良い結果が得られます。横顔や小さく映った顔では品質が下がることがあります。",
        },
        filters: {
          title: "ビデオフィルター（36種類）",
          description:
            "各beatの映像に視覚効果を適用する機能です。FFmpegのフィルター機能をJSON設定で簡単に利用できます。beat単位で異なるフィルターを適用でき、複数のフィルターをチェーン（連結）して使用することも可能です。",
          whatIsThis: "これは何？",
          filter: "フィルター",
          effect: "効果",
          keyParameters: "主なパラメータ",
          category: "カテゴリ",
          color: {
            title: "色調整フィルター（9種類）",
            mono: "モノクロ（グレースケール）",
            sepia: "セピア調",
            brightnessContrast: "明度・コントラスト調整",
            hue: "色相・彩度・明度調整",
            colorbalance: "RGB各チャンネルの微調整",
            colorbalanceParam: "シャドウ/ミッドトーン/ハイライト別",
            vibrance: "彩度の強調",
            negate: "色反転（ネガポジ）",
            colorhold: "特定の色だけ残し他を脱色",
            colorkey: "特定の色を透明化（クロマキー）",
          },
          blur: {
            title: "ブラー・シャープフィルター（4種類）",
            blur: "ボックスブラー",
            gblur: "ガウシアンブラー",
            avgblur: "平均ブラー",
            avgblurParam: "X/Yサイズ個別指定",
            unsharp: "アンシャープマスク",
            unsharpParam: "輝度・色差個別制御",
          },
          edge: {
            title: "エッジ検出フィルター（3種類）",
            edgedetect: "エッジ検出",
            sobel: "Sobelエッジ検出",
            emboss: "エンボス（3D浮き彫り）",
          },
          transform: {
            title: "変形フィルター（4種類）",
            hflip: "左右反転",
            vflip: "上下反転",
            rotate: "回転",
            rotateParam: "角度（ラジアン）、塗りつぶし色",
            transpose: "90度回転",
            transposeParam: "反転オプション付き",
          },
          visual: {
            title: "視覚効果フィルター（4種類）",
            vignette: "周辺減光（映画風）",
            vignetteParam: "角度、中心位置、モード",
            fade: "フェードイン/アウト",
            fadeParam: "フレーム単位で制御",
            pixelize: "ピクセル化（モザイク）",
            pseudocolor: "疑似カラー",
          },
          temporal: {
            title: "時間効果・閾値・特殊フィルター（12種類）",
            temporalCategory: "時間効果",
            tmix: "時間軸ミックス（モーションブラー）",
            lagfun: "ラグエフェクト（モーショントレイル）",
            thresholdCategory: "閾値",
            threshold: "二値化",
            elbg: "色数削減（ポスタライズ）",
            specialCategory: "特殊",
            glitch: "デジタルグリッチ",
            grain: "フィルムグレイン",
            lensdistortion: "レンズ歪み",
            chromashift: "色ずれ（色収差）",
            deflicker: "フリッカー除去",
            dctdnoiz: "DCTノイズ除去",
            custom: "生のFFmpegフィルター文字列を直接指定",
          },
          setup: "設定方法",
          singleFilter: "単一フィルター",
          filterWithParams: "パラメータ付きフィルター",
          filterChain: "フィルターチェーン（複数連結）",
          filterChainDescription:
            "複数のフィルターを配列で指定すると、順番に効果が適用されます。例：ヴィンテージ風の組み合わせ",
          customFilter: "カスタムフィルター",
          customFilterDescription: "プリセットにない効果が必要な場合、FFmpegのフィルター文字列を直接指定できます。",
          globalConfig: "グローバル設定",
          globalConfigDescription: "movieParams.filters をトップレベルに設定 → 全beatに適用",
          perBeatConfig: "beat単位の設定",
          perBeatConfigDescription: "各beatの movieParams.filters に設定 → そのbeatのみ適用",
        },
        captions: {
          basicSetup: "基本設定",
          captionSplitModes: "モード",
          noneMode: "全文を一度に表示します。短いテキストや、タイミング制御が不要な場合に使用します。",
          estimateMode: "音声のタイミングに合わせてテキストを自動的に分割・表示します。長いナレーションに最適です。",
          styleCustomization: "スタイルカスタマイズ",
          styleCustomizationDescription: "stylesにCSS文字列の配列を指定して、字幕の見た目をカスタマイズできます。",
          perBeatOverride: "beat単位での上書き",
          perBeatOverrideDescription:
            "特定のbeatだけ字幕スタイルを変更できます。グローバル設定をbeat単位で上書きします。",
          normalText: "通常のテキスト",
          emphasizedText: "強調テキスト",
        },
        fillOption: {
          navTitle: "フィルオプション",
          navDescription: "アスペクト比の調整",
          title: "フィルオプション（アスペクト比調整）",
          whatIsThis: "これは何？",
          description:
            "画像・動画とキャンバスのアスペクト比が異なる場合の表示方法を制御します。例えば、正方形の画像を16:9の動画に配置するときの振る舞いを変更できます。",
          aspectFitDefault: "デフォルト",
          aspectFitDescription: "画像全体を表示します。アスペクト比が合わない場合は余白（黒帯）が表示されます。",
          aspectFillDescription:
            "画面全体を埋めます。はみ出した部分はトリミングされます。フルスクリーン表示に最適です。",
          setup: "設定方法",
        },
      },
      enterprise: {
        title: "エンタープライズ設定",
        description: "企業環境で利用する場合のGoogle Vertex AIとAzure OpenAIの設定方法を説明します。",
        vertexai: {
          description:
            "エンタープライズ環境ではVertex AIが推奨されます。ADC（Application Default Credentials）を使用してGoogle Cloudと連携します。",
          geminiApi: "Gemini API（APIキー）",
          geminiApiDesc: "GEMINI_API_KEYを設定するだけで利用可能。個人・小規模向け。",
          vertexaiAdc: "Vertex AI（ADC）",
          vertexaiAdcDesc: "Google Cloudの認証を使用。エンタープライズ・本番環境向け。",
          prerequisites: "前提条件",
          prereq1: "Google Cloudプロジェクト（課金有効）",
          prereq2: "Google Cloud CLI（gcloud）インストール済み",
          prereq3: "適切なIAM権限（Vertex AI User等）",
          prereqInstallHint: "macOSの場合: brew install google-cloud-sdk",
          setupSteps: "セットアップ手順",
          setupStep1: "Google Cloud CLIでログイン",
          setupStep2: "プロジェクトを設定",
          setupStep3: "必要なAPIを有効化",
          setupStep4: "ADCを設定",
          configExample: "MulmoScript設定例",
          configProjectComment: "Google CloudプロジェクトID",
          configLocationComment: "リージョン",
          availableModels: "利用可能なモデル",
          category: "カテゴリ",
          model: "モデル",
          notes: "備考",
          imageGeneration: "画像生成",
          imagen4Series: "Imagen 4シリーズ",
          geminiImageGen: "Geminiベース画像生成",
          gemini3Pro: "Gemini 3 Pro（一部リージョン）",
          videoGeneration: "動画生成",
          veoSeries: "Veoシリーズ",
          tts: "音声合成",
          note: "注意：",
          noteVertexaiProject:
            "vertexai_projectを設定しないと、Gemini API経由で生成しようとします。エンタープライズ環境では必ず設定してください。",
          noteGemini3Location: "は vertexai_location を",
          noteGemini3LocationSet: " に設定してください（",
          noteGemini3Reference: "参考ドキュメント",
          noteGemini3Date: " 2025-02-04 現在）",
          detailedDocs: "Vertex AI詳細ドキュメント",
        },
        azure: {
          description:
            "Microsoft Azure上でOpenAIモデルを利用できます。エンタープライズのセキュリティ・コンプライアンス要件に対応。",
          important: "重要：",
          importantDesc:
            "デプロイメント名はモデル名と完全に一致させてください。例：gpt-image-1.5をデプロイする場合、デプロイメント名も「gpt-image-1.5」にします。",
          prerequisites: "前提条件",
          prereq1: "Azure OpenAIリソースが作成済み",
          prereq2: "必要なモデルがデプロイ済み（デプロイメント名＝モデル名）",
          prereq3: "カスタムドメインが設定済み",
          prereqNote: "セットアップ詳細は Azure Portal で Azure OpenAI リソースを作成してください。",
          envVars: "環境変数設定",
          envImageGen: "画像生成",
          envTts: "音声合成（TTS）",
          envTextGen: "テキスト生成（翻訳等）",
          supportedModels: "対応モデル",
          purpose: "用途",
          text: "テキスト",
          availableTtsVoices: "利用可能なTTSボイス",
          recommendedRegions: "推奨リージョン",
          recommendedRegionsDesc: "最も多くのモデルに対応しているリージョン：",
          troubleshooting: "トラブルシューティング：",
          troubleshootingDesc:
            "「404 The API deployment for this resource does not exist」エラーが出た場合、デプロイメント名がモデル名と一致しているか確認してください。",
          detailedDocs: "Azure OpenAI詳細ドキュメント",
        },
        envSummary: {
          title: "環境変数まとめ",
          azureTitle: "Azure OpenAI用（エンタープライズ）",
          variable: "変数名",
          purpose: "用途",
          azureImageGen: "Azure画像生成",
          azureTts: "Azure音声合成",
          azureTextGen: "Azureテキスト生成（翻訳等）",
        },
      },
    },
    app: {
      title: "MulmoCast App",
      description: "CLIをGUIアプリ化。Mac/Windows対応のデスクトップアプリケーション。",
      item1: "インストール方法",
      item2: "基本的な使い方",
      item3: "設定オプション",
      pageTitle: "MulmoCast App",
      pageSubtitle: "Mac/Windows対応のデスクトップアプリケーション",
      installation: {
        title: "インストール",
        description: "公式サイトからダウンロードしてインストールします。",
      },
      usage: {
        title: "使い方",
        description: "アプリの基本的な操作方法を説明します。",
      },
      settings: {
        title: "設定",
        description: "API Key、出力形式、音声設定などをカスタマイズできます。",
      },
    },
    easy: {
      title: "MulmoCast Easy",
      description: "ffmpeg同梱の簡単インストール版CLI。面倒なセットアップ不要。",
      item1: "ffmpeg不要の簡単インストール",
      item2: "通常版と完全互換のコマンド",
      item3: "すぐに動画生成を開始",
      pageSubtitle: "ffmpegを同梱した簡単インストール版MulmoCast CLI。面倒なセットアップなしで動画生成を始められます。",
      overview: {
        title: "概要",
        description:
          "MulmoCast Easyは、ffmpegやChromeを同梱した簡単インストール版のMulmoCast CLIです。別途インストール不要でMulmoCastのすべての機能が使えます。",
      },
      install: "インストール",
      quickstart: "クイックスタート",
      step1: "1. スクリプトファイル（hello.json）を作成します：",
      step2: "2. 動画を生成：",
      outputPath: "動画は output/movie/hello.mp4 に作成されます。",
      aiVoice: "AI音声を追加",
      aiVoiceDesc: "AIナレーション付きの動画を生成するには、OpenAI APIキーを設定します：",
      aiVoiceNote: "そしてスクリプトのbeatsにtextを追加すれば、音声が自動生成されます。",
      commands: "利用可能なコマンド",
      keyPointLabel: "ポイント：",
      keyPoint:
        "mulmocast-easyは通常のmulmocastと完全に同じコマンドが使えます。違いはffmpegが同梱されていることだけです。",
      links: "リンク",
    },
    preprocessor: {
      title: "MulmoCast Preprocessor",
      description: "1つのスクリプトから複数バリエーション生成＆AI要約・質問応答ツール。",
      item1: "プロファイルベースのバリエーション生成",
      item2: "AI要約の自動生成",
      item3: "スクリプト内容へのAI質問応答",
      pageSubtitle:
        "1つのMulmoScriptから複数のバリエーションを生成し、メタデータを使ったAI質問応答も可能な前処理ツール。",
      toc: {
        title: "目次",
        profiles: "プロファイルによるバリエーション生成",
        cli: "CLIコマンド",
        ai: "AI機能（要約・質問応答）",
        metadata: "Beatメタデータ",
        workflow: "活用ワークフロー",
      },
      overview: {
        title: "概要",
        description:
          "MulmoCast Preprocessorは、1つのMulmoScriptから複数のバリエーション（フル版、要約版、ティーザー版など）を生成し、メタデータを使ったAI質問応答も可能な前処理ツールです。",
      },
      install: "インストール",
      profileTitle: "プロファイルによるバリエーション生成",
      profileDesc:
        "スクリプト内の各beatにvariantsフィールドを追加することで、プロファイルごとに異なるテキストや画像を出力できます。",
      presetTitle: "プリセットプロファイル",
      profileHeader: "プロファイル",
      descriptionHeader: "説明",
      defaultDesc: "フル版（全beat、オリジナルテキスト）",
      summaryDesc: "要約版（テキスト置換、一部beatスキップ）",
      teaserDesc: "ティーザー版（最小限のbeat、SNS向けの短縮版）",
      scriptExample: "スクリプト例（variantsあり）",
      cliCommands: "CLIコマンド",
      generateVariations: "バリエーション生成",
      aiFeatures: "AI機能",
      aiSummarize: "AI要約",
      aiSummarizeDesc: "LLMを使ってスクリプト内容の要約を自動生成します。OpenAI、Anthropic、Groq、Geminiに対応。",
      aiQA: "AI質問応答",
      aiQADesc: "スクリプトの内容について自然言語で質問できます。対話モードも利用可能。",
      envVars: "環境変数",
      variableHeader: "変数名",
      providerHeader: "プロバイダー",
      beatMeta: "Beatメタデータ",
      beatMetaDesc: "各beatにmetaフィールドを追加して、フィルタリングやAI処理の精度を高められます。",
      workflow: {
        title: "活用ワークフロー",
        description: "1つのスクリプトから複数の動画を効率的に作成するワークフロー例です。",
      },
      links: "リンク",
    },
    mulmochat: {
      title: "MulmoChat",
      description: "Chat Protocol使用の次世代音声対話OS。",
      item1: "概要とアーキテクチャ",
      item2: "GUI Chat Protocol",
      item3: "プラグイン開発",
      pageTitle: "MulmoChat",
      pageSubtitle: "次世代音声対話プラットフォーム",
      overview: {
        title: "概要",
        description:
          "MulmoChatはChat Protocolを使った次世代の音声対話プラットフォームです。テキストとビジュアルを融合し、会話しながらリアルタイムで画像やインタラクティブコンテンツを体験できます。",
      },
      architecture: {
        title: "アーキテクチャ",
        description: "MulmoChatのシステム構成と技術スタックについて説明します。",
      },
      protocol: {
        title: "GUI Chat Protocol",
        description:
          "チャットアプリ用GUIプラグインの標準プロトコル。Vue 3とReactアダプターを提供し、フレームワークに依存しないポータブルなプラグイン開発を可能にします。",
      },
    },
  },
  home: {
    hero: {
      title: "MulmoCast",
      subtitle: "台本を書くだけ。AIが動画まで。",
      description: "学生の発表も、ビジネスの提案も、{emphasize}。",
      emphasize: "伝わる形に自動で",
    },
    support: {
      title: "💬 質問・要望はこちら",
      description: "使い方の疑問、機能の要望、困ったことがあれば、お気軽にDiscordコミュニティにご参加ください！",
      joinDiscord: "Discordに参加",
      viewFaq: "FAQ（よくある質問）を見る",
    },
    features: {
      title: "できること",
      items: ["AIに台本を作らせる、または自分で書く", "画像とナレーション音声を自動生成", "ワンクリックで動画を完成"],
    },
    useCases: {
      title: "こんな人に",
      student: {
        label: "学生：",
        description: "レポートや授業発表をわかりやすい動画に",
      },
      business: {
        label: "ビジネスパーソン：",
        description: "提案資料や企画をナレーション付き動画に",
      },
    },
    download: {
      mac: {
        title: "Mac用アプリをダウンロード",
        downloadLink: "ダウンロード {version}",
        free: "無料で利用できます。",
        requirement: "利用には {apiKey} が必要です。",
        apiKey: "OpenAI API Key",
        tryButton: "無料で使ってみる",
      },
      windows: {
        title: "Windows用アプリをダウンロード",
        downloadLink: "ダウンロード {version}",
        free: "無料で利用できます。",
        requirement: "利用には {apiKey} が必要です。",
        apiKey: "OpenAI API Key",
        tryButton: "無料で使ってみる",
      },
    },
    installGuide: {
      mac: "MulmoCastイントールガイドMac版",
      macVideoUrl: "https://www.youtube.com/embed/qbxteoIwgXg?si=v4KAaaE6AjtWo4Kr",
      windows: "MulmoCastイントールガイドWindows版",
      windowsVideoUrl: "https://www.youtube.com/embed/ar_iC7lTSjE?si=OBWGHqapGV0FsVrW",
    },
    links: {
      title: "リンク",
      twitter: "X (Twitter)",
      discord: "Discord",
      githubApp: "GitHub - MulmoCast App",
      githubCli: "GitHub - MulmoCast CLI",
    },
  },
  languages,
};

export default lang;
