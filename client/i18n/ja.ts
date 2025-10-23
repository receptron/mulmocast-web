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
      description: "詳細・応募フォームは近日公開予定です。最新情報はXアカウント(link)をご確認ください。",
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
