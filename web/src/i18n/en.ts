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
    resultsAnnouncement: "Results Announcement",
    grandPrix: {
      title: "Grand Prix",
      work: "The Nameless",
      creator: "Hisho Kakihara",
      description:
        "A visual work depicting one night of a nameless young man who only photographs shadows, overlaying the sense of distance between AI and 'things we are somehow drawn to.' Unanimously selected as Grand Prix by the judges.",
    },
    categoryAwards: {
      title: "Category Awards",
      visual: {
        title: "Visual Award",
        work: "The Nameless",
        creator: "Hisho Kakihara",
      },
      animation: {
        title: "Animation Award",
        work: "Beyond One Click",
        creator: "Kawabe Shinkun",
      },
      promotion: {
        title: "Promotion Award",
        work: "W Pepper Melon",
        creator: "ungr18",
      },
      documentary: {
        title: "Documentary Award",
        work: "AUTHENTIC ZERO",
        creator: "keythpiece",
      },
    },
    statistics: {
      title: "Event Overview",
      totalEntries: "Total Entries: 184 works",
      eventDate: "Review Live Date: December 13, 2025",
      totalPrize: "Total Prize Money: 900,000 JPY (Grand Prix: 500,000 JPY)",
    },
    reviewLive: {
      title: "Review Live",
      description:
        "The review live was held on YouTube on December 13, 2025, with judges including Satoshi Nakajima (Chief Judge), Yohei Sadoshima, Akihiko Shirai, and Yuka Osumi.",
    },
    relatedLinks: {
      title: "Related Links",
      noteArticle: "Complete Review Live Summary (note article)",
      passedWorks: "First Round Passed Works",
      officialPage: "Official Event Page",
    },
    backButton: "Back to Home",
  },
  navigation: {
    home: "Home",
    docs: "Docs",
    faq: "FAQ",
    festival: "Festival",
    family: "Family",
    openMenu: "Open menu",
  },
  family: {
    title: "MulmoCast Family",
    subtitle: "Tools that make up the MulmoCast ecosystem",
    cli: {
      title: "MulmoCast CLI",
      tagline: "The Core Engine of MulmoCast",
      description:
        "The full-featured CLI tool that is the essence of MulmoCast. An AI-native presentation platform with script generation, image/audio synthesis, and video/PDF/slide output capabilities.",
    },
    app: {
      title: "MulmoCast App",
      tagline: "Desktop Application",
      description:
        "MulmoCast CLI wrapped as an easy-to-use GUI app. Just install and create videos for most use cases.",
      download: "Download",
    },
    slides: {
      title: "MulmoCast Slides",
      tagline: "Presentation Converter",
      description:
        "Convert Keynote, PPTX, PDF, and Marp Markdown presentations to MulmoScript format. Extracts slide images and supports LLM-powered narration generation.",
    },
    vision: {
      title: "MulmoCast Vision",
      tagline: "Slide-Focused Tool",
      description:
        "An MCP tool specialized for slide creation, combining MulmoCast CLI with templates. Create proposals and reports in seconds with 80+ business templates.",
    },
    mcp: {
      title: "MulmoCast MCP",
      tagline: "CLI as MCP Server",
      description:
        "MulmoCast CLI functionality provided as an MCP server. Use MulmoCast features directly from MCP clients like Claude Desktop.",
    },
    viewer: {
      title: "MulmoCast Viewer",
      tagline: "Web Embedding Component",
      description:
        "A Vue 3 component for embedding bundled data from CLI into websites. Features multi-language support, speed adjustment, and theming.",
    },
    chat: {
      title: "MulmoChat",
      tagline: "Next-Gen Voice Dialogue OS",
      description:
        "A next-generation voice dialogue platform using Chat Protocol. Fuses text and visuals for real-time image generation and interactive content during conversation.",
    },
    protocol: {
      title: "GUI Chat Protocol",
      tagline: "Chat Plugin Specification",
      description:
        "A standard protocol for building GUI chat plugins. Provides Vue 3 and React adapters for portable, framework-agnostic plugin development.",
    },
    badges: {
      gui: "GUI",
      cli: "CLI",
      automation: "Automation",
      component: "Component",
      format: "Format",
      openSource: "Open Source",
      multimodal: "Multimodal",
      slides: "Slide Generation",
      core: "Core",
      fullFeature: "Full Feature",
      autoGenerate: "Auto Generate",
      nextGen: "Next Gen",
      converter: "Converter",
      protocol: "Protocol",
      integration: "AI Integration",
    },
    backButton: "Back to Home",
  },
  faq: {
    title: "FAQ",
    subtitle: "Frequently Asked Questions",
    copyLink: "Copy link",
    linkCopied: "Link copied to clipboard!",
    items: [
      {
        question: "What is MulmoCast?",
        answer:
          "MulmoCast is a multimodal presentation tool that automatically generates images and narration audio using AI, completing your video just by writing a script.",
      },
      {
        question: "Does it cost money?",
        answer:
          "The MulmoCast application itself is free to use.\nHowever, using generative AI requires API Keys from providers such as OpenAI / Google / Anthropic, and using these APIs incurs costs.\n\nAdditionally, this is a separate system from monthly subscription plans like ChatGPT Plus, so having a monthly subscription does not make API usage free.\n\nMulmoCast uses your own API Keys to call AI services, so you will never be charged by MulmoCast itself.",
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
      {
        question:
          'I\'m getting an error "Image generation (OpenAI) error: Please complete organization verification to use the gpt-image-1 model..." during image generation. What should I do?',
        answer:
          "To use the gpt-image-1 model, you need to complete organization verification (Verify Organization) on your OpenAI account. This is a separate procedure from paid plans like ChatGPT Plus.",
      },
      {
        question: "Where do I complete organization verification, and is there a fee for Persona?",
        answer: "No payment is required for Persona. You can complete it by following the steps below:",
        stepsLabel: "Steps:",
        steps: [
          "Go to the {organizationSettingsPage} and click the 'Verify Organization' button.",
          "Follow the on-screen instructions to complete identity verification (using Persona).",
        ],
        organizationSettingsPageText: "OpenAI Platform's organization settings page",
        note: "Persona is the identity verification service used by OpenAI. There is no charge to the user for Persona.",
        support:
          "※ If identity verification repeatedly fails, please contact {openaiSupport}. You can reach them from the Help Center (chat icon in the bottom right corner).",
        openaiSupportText: "OpenAI support",
        alternative: {
          title: "■ Using the dall-e-3 model",
          description:
            "If you do not wish to use the `gpt-image-1` model, you can use `dall-e-3` instead. Please change the settings as follows:",
          stepsLabel: "Steps:",
          steps: [
            "Navigate to Style Settings Tab → Image Parameters.",
            "Ensure Provider is set to 'OpenAI'.",
            "Change Model from 'auto' to 'dall-e-3'.",
          ],
        },
      },
      {
        question: "The generated video doesn't match my expectations. What should I do?",
        answer:
          "MulmoCast generates movies by combining generated images with movie generation prompts. If no images are generated, the movie is created using only the movie generation prompt.\n\nTo generate movies closer to your intended result, please try one of the following methods:",
        methods: [
          "Generate images first, then set movie generation prompts based on those images",
          "Provide detailed visual instructions in the movie generation prompt (such as scene content, movement details, etc.)",
        ],
      },
      {
        question: "The latter half of the movie becomes a still image. What should I do?",
        answer:
          "When the audio length (text volume) exceeds the movie generation time, the latter half is displayed as a still image.\n\nDepending on the movie generation model you use, there is a time limit for each movie generation. For example, when using Google (Veo3), movies are generated with a fixed duration of 8 seconds.\n\nIn this case, please adjust using one of the following methods:",
        methods: [
          "Accept that the latter half becomes a still image",
          "Adjust the audio length (text volume) and divide it to fit within the movie generation time",
        ],
      },
      {
        question: "Can I display a slide without narration (image only) for a specified duration?",
        answer:
          "Yes, you can. In Advanced Mode, you can specify the display duration for each beat. Please follow these steps:",
        steps: ["Switch to Advanced Mode", "Open the JSON tab", 'Add "duration: seconds" to the corresponding beat'],
        exampleLabel: "Example:",
        noteLabel: "Note:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "",\n  "image": {'{'}\n    "type": "textSlide",\n    "slide": {'{'}\n      "title": "no audio slide + duration",\n      "bullets": [\n        "duration 5"\n      ]\n    {'}'}\n  {'}'},\n  "duration": 5\n{'}'}`,
        exampleNote: "In this example, the slide without narration will be displayed for 5 seconds.",
        note: "When adding duration, remember to add a comma (,) at the end of the previous item (the image object in this example).",
      },
      {
        question: "The movie generated from the movie prompt gets cut off midway. What should I do?",
        answer:
          "When generating a movie using a movie generation prompt, MulmoCast trims the video based on the audio length when combining audio and video. Therefore, if the generated video is longer than the audio, the video may be cut off at the end of the audio.\n\nIn this case, add audioParams.padding in Advanced Mode to create padding at the end of the audio.\n\nPlease follow these steps:",
        steps: [
          "Switch to Advanced Mode",
          "Open the JSON tab",
          'Add "audioParams.padding: seconds" to the corresponding beat',
        ],
        exampleLabel: "Example:",
        noteLabel: "Note:",
        example: `{'{'}\n  "speaker": "Presenter",\n  "text": "This beat has audio. add padding 6.",\n  "audioParams": {'{'}\n    "padding": 6\n  {'}'},\n  "moviePrompt": "Four shots in rapid succession: art, anime, documentary, and promotional style.",\n  "enableLipSync": false\n{'}'}`,
        exampleNote: "In this example, 6 seconds of padding is added to the end of the audio.",
        note: "When adding audioParams, remember to add a comma (,) at the end of the previous item.",
      },
      {
        question: "What information should I share when contacting support about an error?",
        answer:
          'When contacting us, sharing the following information will help us resolve the issue more quickly:\n\n■ How to Download MulmoScript (JSON)\nYou can download the JSON file of the project where the issue occurred by:\nTarget Project Page → "Download MulmoScript"\n\n■ Log File Locations\n• Mac: ~/Library/Application Support/MulmoCast/mulmocastLog\n• Windows: %APPDATA%\\MulmoCast\\mulmocastLog\n\nLog files contain application operation logs with detailed error information.\nThe folder contains log files separated by date. Please share the log file from the date when the error occurred.',
      },
      {
        question: "Can I change or turn off the BGM, or use my own audio files?",
        answer:
          "Yes, you can.\nFrom Style tab > Audio Parameters > BGM dropdown, you can select the following options:\n\n• BGM: Choose from built-in background music.\n• Custom Audio: Use your own audio files directly.\n• None: Turn off BGM.",
      },
      {
        question: "Is there a way to share one audio across multiple beats (spillover feature)?",
        answer:
          'Yes, you can. MulmoCast supports an "audio spillover" feature that allows one audio (narration) to play across multiple beats. This feature is useful for creating music videos or displaying long narrations across multiple slides.\n\nYou can configure this in Advanced Mode.',
        rulesLabel: "How it works:",
        rules: [
          "Audio starts in beats with text",
          "In beats without text, the previous beat's audio continues to play",
          "You can specify each beat's display time with BEAT duration",
        ],
        durationLabel: "Automatic BEAT duration distribution:",
        duration: [
          "Beats without BEAT duration specified receive equal distribution of remaining audio time",
          "When some beats have BEAT duration specified, those durations are prioritized and the remainder is distributed equally",
          "Each beat is guaranteed at least 1 second during equal distribution",
        ],
      },
      {
        question: "What are OpenAI Usage Tiers?",
        answer:
          "OpenAI Usage Tiers are usage limits for the OpenAI API, managed through a tier system based on your payment history.\n\nAs your payment amount to the API increases, you automatically advance to the next usage tier. Higher tiers increase your monthly spending limit and relax API rate limit restrictions.",
        tiersLabel: "Usage limits for each tier (up to Tier 3, as of December 2025):",
        tiers: [
          "Free: $100/month",
          "Tier 1: $100/month (requires at least $5 in payments)",
          "Tier 2: $500/month (requires at least $50 in payments + 7+ days since first payment)",
          "Tier 3: $1,000/month (requires at least $100 in payments + 7+ days since first payment)",
        ],
        note: "For Tier 4 and above, and rate limits for each model, please check the official documentation:",
        rateLimitsLink: "https://platform.openai.com/docs/guides/rate-limits#usage-tiers",
        rateLimitsText: "Rate Limits",
        checkTier: "You can check your tier at",
        organizationLimitsLink: "https://platform.openai.com/settings/organization/limits",
        organizationLimitsText: "Organization Limits",
        checkTierSuffix: ".",
      },
      {
        question: "What are Gemini API Usage Tiers?",
        answer:
          "Gemini API Usage Tiers are usage restrictions for the Gemini API. Unlike OpenAI, they are managed by request counts and token counts rather than monetary limits.\n\nAs your usage and costs increase, you automatically upgrade to higher tiers with relaxed rate limits.",
        tiersLabel: "Conditions for each tier (as of December 2025):",
        tiers: [
          "Free: Users in eligible countries",
          "Tier 1: Paid billing account linked to the project",
          "Tier 2: Total costs exceeding $250 + 30+ days since payment completion",
          "Tier 3: Total costs exceeding $1,000 + 30+ days since payment completion",
        ],
        note1:
          "※ Tier 2/3 costs are based on total accumulated costs for Google Cloud services (including Gemini API).",
        checkTier: "You can check your tier at",
        aiStudioUsageLink: "https://aistudio.google.com/usage?tab=rate-limit",
        aiStudioUsageText: "AI Studio Usage",
        checkTierSuffix: ".",
        note2: "For specific rate limit values and model-specific details, please check the official documentation:",
        geminiRateLimitsLink: "https://ai.google.dev/gemini-api/docs/rate-limits",
        geminiRateLimitsText: "Gemini API Rate Limits",
      },
    ],
    backButton: "Back to Home",
  },
  docs: {
    title: "Documentation",
    subtitle: "Official documentation for the MulmoCast ecosystem",
    readMore: "Read More",
    backButton: "Back to Home",
    backToDocs: "Back to Documentation",
    cli: {
      title: "MulmoCast CLI",
      description: "Core engine. Command-line tool for generating AI videos from MulmoScript.",
      item1: "Installation and Quick Start",
      item2: "MulmoScript Specification",
      item3: "Command Reference",
      pageTitle: "MulmoCast CLI",
      pageSubtitle: "Full-featured AI presentation platform",
      installation: {
        title: "Installation",
        description: "You can run it directly using npx. Requires Node.js 18 or higher.",
        note: "Global installation: npm install -g mulmocast",
      },
      quickstart: {
        title: "Quick Start",
        description: "Basic usage workflow.",
      },
      mulmoscript: {
        title: "MulmoScript",
        description: "MulmoScript is the script format for MulmoCast. It is written in JSON format.",
      },
      commands: {
        title: "Command Reference",
        description: "List of available commands.",
      },
    },
    app: {
      title: "MulmoCast App",
      description: "CLI wrapped as GUI app. Desktop application for Mac/Windows.",
      item1: "Installation",
      item2: "Basic Usage",
      item3: "Settings Options",
      pageTitle: "MulmoCast App",
      pageSubtitle: "Desktop application for Mac/Windows",
      installation: {
        title: "Installation",
        description: "Download and install from the official website.",
      },
      usage: {
        title: "Usage",
        description: "Explains the basic operations of the app.",
      },
      settings: {
        title: "Settings",
        description: "Customize API Key, output format, audio settings, and more.",
      },
    },
    mulmochat: {
      title: "MulmoChat",
      description: "Next-generation voice dialogue OS using Chat Protocol.",
      item1: "Overview and Architecture",
      item2: "GUI Chat Protocol",
      item3: "Plugin Development",
      pageTitle: "MulmoChat",
      pageSubtitle: "Next-generation voice dialogue platform",
      overview: {
        title: "Overview",
        description:
          "MulmoChat is a next-generation voice dialogue platform using Chat Protocol. It fuses text and visuals for real-time image generation and interactive content during conversation.",
      },
      architecture: {
        title: "Architecture",
        description: "Explains the system architecture and tech stack of MulmoChat.",
      },
      protocol: {
        title: "GUI Chat Protocol",
        description:
          "A standard protocol for building GUI chat plugins. Provides Vue 3 and React adapters for portable, framework-agnostic plugin development.",
      },
    },
  },
  home: {
    hero: {
      title: "MulmoCast",
      subtitle: "Just write a script. AI creates the video.",
      description: "For student presentations and business proposals, {emphasize}.",
      emphasize: "automatically in a compelling format",
    },
    support: {
      title: "💬 Questions & Requests",
      description:
        "Have questions about how to use MulmoCast? Feature requests? Need help? Join our Discord community! Also check out our FAQ for common questions.",
      joinDiscord: "Join Discord",
      viewFaq: "View FAQ",
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
      macVideoUrl: "https://www.youtube.com/embed/58HkfR4WmdY?si=jcZ_MXdbKM8k5FE8",
      windows: "MulmoCast Installation Guide - Windows",
      windowsVideoUrl: "https://www.youtube.com/embed/gVKAbBgpOBs?si=IBEHv5fWPzYbstDj",
    },
    links: {
      title: "Links",
      twitter: "X (Twitter)",
      discord: "Discord",
      githubApp: "GitHub - MulmoCast App",
      githubCli: "GitHub - MulmoCast CLI",
    },
  },
  languages,
};

export default lang;
