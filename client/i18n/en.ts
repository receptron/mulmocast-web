import languages from "./languages";

const lang = {
  message: {
    hello: "hello world",
  },
  menu: {
    top: "Home",
    mypage: "MyPage",
    signin: "SignIn",
    signout: "SignOut",
    about: "Abount",
  },
  filmFes: {
    title: "AI Short Film Festival 2025",
  },
  navigation: {
    home: "Home",
    faq: "FAQ",
    festival: "Festival",
    openMenu: "Open menu",
  },
  home: {
    hero: {
      title: "MulmoCast",
      subtitle: "Just write a script. AI creates the video.",
      description: "For student presentations and business proposals, {emphasize}.",
      emphasize: "automatically in a compelling format",
    },
    features: {
      title: "What You Can Do",
      items: [
        "Let AI create a script for you, or write your own",
        "Automatically generate images and narration audio",
        "Complete your video with one click",
      ],
    },
    useCases: {
      title: "Who It's For",
      student: {
        label: "Students:",
        description: "Turn reports and class presentations into easy-to-understand videos",
      },
      business: {
        label: "Business Professionals:",
        description: "Transform proposals and plans into narrated videos",
      },
    },
    download: {
      mac: {
        title: "Download Mac App",
        downloadLink: "Download {version}",
        free: "Free to use.",
        requirement: "Requires {apiKey}.",
        apiKey: "OpenAI API Key",
        tryButton: "Try for Free",
      },
      windows: {
        title: "Download Windows App",
        downloadLink: "Download {version}",
        free: "Free to use.",
        requirement: "Requires {apiKey}.",
        apiKey: "OpenAI API Key",
        tryButton: "Try for Free",
      },
    },
    installGuide: {
      mac: "MulmoCast Installation Guide - Mac",
      windows: "MulmoCast Installation Guide - Windows",
    },
    links: {
      title: "Links",
      twitter: "X (Twitter)",
      githubApp: "GitHub - MulmoCast App",
      githubCli: "GitHub - MulmoCast CLI",
    },
  },
  languages,
};

export default lang;
