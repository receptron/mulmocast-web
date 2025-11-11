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
    subtitle: "MulmoCast AI Short Film Festival",
    about: {
      title: "映画祭について",
      description:
        "MulmoCast AI Short Film Festivalは、AIを活用して制作された動画作品を募集・展示するイベントです。あなたの創造性とMulmoCastの力で、新しい映像表現に挑戦しませんか？",
    },
    applicationMethod: {
      title: "応募方法",
      step1: "作品をYouTubeにアップロード（限定公開可）",
      step2: "応募フォーム（Googleフォーム）から以下の情報を申請",
      requirements: {
        title: "作品タイトル",
        youtubeLink: "YouTubeリンク",
        creator: "制作者名（個人／チーム名）",
        contact: "連絡先",
        script: "MulmoScript ファイル (.json 形式)",
      },
    },
    eligibility: {
      title: "応募要件",
      items: [
        "18歳以上（未成年は原則応募不可。但し主催者が個別に許可した場合を除く。）",
        "MulmoCastで制作した作品であること",
        "複数応募不可",
        "チーム応募可",
        "他のコンテストとの併願不可",
        "海外応募可（賞金対応は別途調整）",
      ],
    },
    results: {
      title: "結果発表",
      items: ["{date} YouTubeライブで発表予定", "TECH WORLDチャンネル＋各社配信予定", "参加はオンラインに限定"],
      date: "12月中旬",
    },
    latestInfo: {
      title: "最新情報",
      description: "詳細・応募フォームは{eventLink}で公開中です。最新情報はXアカウント{twitterLink}をご確認ください。",
      eventLinkText: "こちら",
      twitterHandle: "{'@'}mulmocast",
    },
    backButton: "ホームに戻る",
  },
  navigation: {
    home: "ホーム",
    faq: "FAQ",
    festival: "映画祭",
    openMenu: "メニューを開く",
  },
  faq: {
    title: "FAQ",
    subtitle: "よくある質問",
    items: [
      {
        question: "MulmoCastとは何ですか？",
        answer:
          "MulmoCastは、台本を書くだけでAIが画像とナレーション音声を自動生成し、動画を完成させるマルチモーダルプレゼンテーションツールです。",
      },
      {
        question: "料金はかかりますか？",
        answer:
          "アプリケーション自体は無料でご利用いただけます。ただし、利用にはOpenAI / Google / Anthropicなどの各種API Keyが必要です。それらのAPIの利用には料金がかかります。",
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
    ],
    backButton: "ホームに戻る",
  },
  home: {
    hero: {
      title: "MulmoCast",
      subtitle: "台本を書くだけ。AIが動画まで。",
      description: "学生の発表も、ビジネスの提案も、{emphasize}。",
      emphasize: "伝わる形に自動で",
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
      githubApp: "GitHub - MulmoCast App",
      githubCli: "GitHub - MulmoCast CLI",
    },
  },
  languages,
};

export default lang;
