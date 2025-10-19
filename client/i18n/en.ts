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
  festival: {
    subtitle: "MulmoCast AI Short Film Festival",
    about: {
      title: "About the Festival",
      description:
        "MulmoCast AI Short Film Festival is an event that accepts and showcases video works created using AI. Why not challenge yourself to create new forms of visual expression with your creativity and the power of MulmoCast?",
    },
    applicationMethod: {
      title: "How to Apply",
      step1: "Upload your work to YouTube (unlisted is allowed)",
      step2: "Submit the following information via the application form (Google Form planned)",
      requirements: {
        title: "Work title (required)",
        youtubeLink: "YouTube link",
        creator: "Creator name (individual/team name)",
        contact: "Contact information",
        script: "mulmoscript.json (optional)",
      },
    },
    eligibility: {
      title: "Eligibility Requirements",
      items: [
        "Both individuals and teams are eligible",
        "Multiple submissions not allowed",
        "Applicants must be 18 years or older (minors not eligible)",
        "Overseas applications accepted (prize money/awards subject to separate arrangements)",
        "Concurrent applications to other contests not allowed",
      ],
    },
    results: {
      title: "Results Announcement",
      items: [
        "Scheduled to be announced on YouTube Live in {date}",
        "Planned to be broadcast on Tech World channel + other channels",
        "Participation limited to online",
      ],
      date: "mid-December",
    },
    latestInfo: {
      title: "Latest Information",
      description:
        "Details and application form will be available soon. For the latest information, please check our X account (link).",
      twitterHandle: "{'@'}mulmocast",
    },
    backButton: "Back to Home",
  },
  navigation: {
    home: "Home",
    faq: "FAQ",
    festival: "Festival",
    openMenu: "Open menu",
  },
  faq: {
    title: "FAQ",
    subtitle: "Frequently Asked Questions",
    items: [
      {
        question: "What is MulmoCast?",
        answer:
          "MulmoCast is a multimodal presentation tool that automatically generates images and narration audio using AI, completing your video just by writing a script.",
      },
      {
        question: "Does it cost money?",
        answer:
          "The application itself is free to use. However, you will need API Keys from providers such as OpenAI / Google / Anthropic. There are costs associated with using those APIs.",
      },
      {
        question: "What platforms is it available on?",
        answer: "Available on MacOS, Windows, and as a CLI tool.",
      },
      {
        question: "What can it be used for?",
        answer:
          "It can be used for various purposes including short videos, student reports and class presentations, business proposals and planning documents.",
      },
    ],
    backButton: "Back to Home",
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
