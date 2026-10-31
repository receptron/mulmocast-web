// Structural (non-translatable) definitions for the four flagship Mulmo apps,
// the wider family catalog shown on the home hub, and shared ecosystem resources.
// Translatable text lives in i18n under `products.<id>.*` and `family.*`.

export const PRODUCT_IDS = ["mulmocast", "mulmochat", "mulmoclaude", "mulmoterminal"] as const;

export type ProductId = (typeof PRODUCT_IDS)[number];

export type AccentKey = "red" | "violet" | "amber" | "emerald";

export type ProductLink =
  { kind: "npm" | "github" | "guide"; url: string } | { kind: "docs" | "download"; path: string };

export type RelatedDoc = { path: string; key: string };

export type ProductDef = {
  id: ProductId;
  icon: string;
  accent: AccentKey;
  image: string;
  install?: string;
  videoIds: string[];
  links: ProductLink[];
  relatedDocs: RelatedDoc[];
};

const PRODUCTS: Record<ProductId, ProductDef> = {
  mulmocast: {
    id: "mulmocast",
    icon: "Clapperboard",
    accent: "red",
    image: "/products/mulmocast.png",
    install: "npx mulmocast",
    videoIds: [],
    links: [
      { kind: "download", path: "/mulmocast/getting-started#download" },
      { kind: "docs", path: "/docs" },
      { kind: "npm", url: "https://www.npmjs.com/package/mulmocast" },
      { kind: "github", url: "https://github.com/receptron/mulmocast-app" },
    ],
    relatedDocs: [
      { path: "/docs/app", key: "app" },
      { path: "/docs/cli", key: "cli" },
      { path: "/docs/slides", key: "slides" },
      { path: "/docs/recipes", key: "recipes" },
    ],
  },
  mulmochat: {
    id: "mulmochat",
    icon: "Mic",
    accent: "violet",
    image: "/products/mulmochat.jpg",
    videoIds: ["hfPqgwmiaRg", "9dd_teSnlKU"],
    links: [
      { kind: "docs", path: "/docs/mulmochat" },
      { kind: "github", url: "https://github.com/receptron/MulmoChat" },
    ],
    relatedDocs: [{ path: "/docs/mulmochat", key: "mulmochat" }],
  },
  mulmoclaude: {
    id: "mulmoclaude",
    icon: "Brain",
    accent: "amber",
    image: "/products/mulmoclaude.jpg",
    install: "npx mulmoclaude@latest",
    videoIds: ["AfsTkYg6pZc"],
    links: [
      { kind: "guide", url: "https://receptron.github.io/mulmoclaude/" },
      { kind: "docs", path: "/docs/mulmoclaude" },
      { kind: "npm", url: "https://www.npmjs.com/package/mulmoclaude" },
      { kind: "github", url: "https://github.com/receptron/mulmoclaude" },
    ],
    relatedDocs: [{ path: "/docs/mulmoclaude", key: "mulmoclaude" }],
  },
  mulmoterminal: {
    id: "mulmoterminal",
    icon: "LayoutGrid",
    accent: "emerald",
    image: "/products/mulmoterminal.jpg",
    install: "npx mulmoterminal@latest",
    videoIds: [],
    links: [
      { kind: "guide", url: "https://www.mulmoterminal.com/guide/ja/" },
      { kind: "npm", url: "https://www.npmjs.com/package/mulmoterminal" },
      { kind: "github", url: "https://github.com/receptron/mulmoterminal" },
    ],
    relatedDocs: [],
  },
};

const isProductId = (id: string): id is ProductId => PRODUCT_IDS.some((productId) => productId === id);

export const getProduct = (id: string): ProductDef | undefined => (isProductId(id) ? PRODUCTS[id] : undefined);

export const listProducts = (): ProductDef[] => PRODUCT_IDS.map((id) => PRODUCTS[id]);

// Wider family catalog (non-flagship ecosystem tools) for the home overview.
// `i18nKey` points at `family.<i18nKey>` for title/tagline.
export type FamilyTool = {
  i18nKey: string;
  icon: string;
  href: string;
  external: boolean;
};

export const FAMILY_TOOLS: FamilyTool[] = [
  { i18nKey: "cli", icon: "Terminal", href: "https://www.npmjs.com/package/mulmocast", external: true },
  { i18nKey: "slides", icon: "FileSliders", href: "https://www.npmjs.com/package/mulmocast-slides", external: true },
  { i18nKey: "vision", icon: "Presentation", href: "https://www.npmjs.com/package/mulmocast-vision", external: true },
  { i18nKey: "mcp", icon: "Server", href: "https://www.npmjs.com/package/mulmocast-mcp", external: true },
  { i18nKey: "viewer", icon: "Play", href: "https://www.npmjs.com/package/mulmocast-viewer", external: true },
  { i18nKey: "claudePlugin", icon: "Plug", href: "/docs/claude-plugin", external: false },
  { i18nKey: "protocol", icon: "Blocks", href: "https://www.npmjs.com/package/gui-chat-protocol", external: true },
];

// Shared ecosystem resources used for cross-linking from the hub and product pages.
export const RESOURCES = {
  visionArticle: "https://singularitysociety.org/articles/blog/2026-10-16-ai-native-apps-direction/",
  singularitySociety: "https://singularitysociety.org/",
  zenn: "https://zenn.dev/p/singularity",
  discord: "https://discord.gg/XqmAYxm2Xf",
  xMulmocast: "https://x.com/mulmocast",
  githubOrg: "https://github.com/receptron",
} as const;
