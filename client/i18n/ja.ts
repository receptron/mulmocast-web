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
      step2: "応募フォーム（Googleフォーム予定）から以下の情報を申請",
      requirements: {
        title: "作品タイトル（必須）",
        youtubeLink: "YouTubeリンク",
        creator: "制作者名（個人／チーム名）",
        contact: "連絡先",
        script: "mulmoscript.json（任意）",
      },
    },
    eligibility: {
      title: "応募条件",
      items: [
        "個人／チームいずれも可",
        "複数応募不可",
        "応募は18歳以上のみ（未成年不可）",
        "海外からの応募は可（賞金・副賞の対応は別途調整）",
        "他のコンテストとの併願不可",
      ],
    },
    results: {
      title: "結果発表",
      items: [
        "{date} YouTubeライブで発表予定",
        "Tech Worldチャンネル＋各社配信予定",
        "参加はオンラインに限定",
      ],
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
      windows: "MulmoCastイントールガイドWindows版",
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
