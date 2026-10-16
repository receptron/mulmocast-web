// Structural (non-translatable) definitions for the four flagship Mulmo apps.
// Translatable text lives in i18n under `products.<id>.*`.

export const PRODUCT_IDS = ["mulmocast", "mulmochat", "mulmoclaude", "mulmoterminal"] as const;

export type ProductId = (typeof PRODUCT_IDS)[number];

export type ProductLinkKind = "npm" | "github" | "docs" | "guide" | "download";

export type ProductLink =
  { kind: "npm" | "github" | "guide"; url: string } | { kind: "docs" | "download"; path: string };

export type ProductDef = {
  id: ProductId;
  icon: string;
  install?: string;
  videoIds: string[];
  links: ProductLink[];
};

const PRODUCTS: Record<ProductId, ProductDef> = {
  mulmocast: {
    id: "mulmocast",
    icon: "Clapperboard",
    install: "npx mulmocast",
    videoIds: [],
    links: [
      { kind: "download", path: "/mulmocast#download" },
      { kind: "docs", path: "/docs" },
      { kind: "npm", url: "https://www.npmjs.com/package/mulmocast" },
      { kind: "github", url: "https://github.com/receptron/mulmocast-app" },
    ],
  },
  mulmochat: {
    id: "mulmochat",
    icon: "Mic",
    videoIds: ["hfPqgwmiaRg", "9dd_teSnlKU"],
    links: [
      { kind: "docs", path: "/docs/mulmochat" },
      { kind: "github", url: "https://github.com/receptron/MulmoChat" },
    ],
  },
  mulmoclaude: {
    id: "mulmoclaude",
    icon: "Brain",
    install: "npx mulmoclaude@latest",
    videoIds: ["AfsTkYg6pZc"],
    links: [
      { kind: "docs", path: "/docs/mulmoclaude" },
      { kind: "guide", url: "https://receptron.github.io/mulmoclaude/" },
      { kind: "npm", url: "https://www.npmjs.com/package/mulmoclaude" },
      { kind: "github", url: "https://github.com/receptron/mulmoclaude" },
    ],
  },
  mulmoterminal: {
    id: "mulmoterminal",
    icon: "LayoutGrid",
    install: "npx mulmoterminal@latest",
    videoIds: [],
    links: [
      { kind: "npm", url: "https://www.npmjs.com/package/mulmoterminal" },
      { kind: "github", url: "https://github.com/receptron/mulmoterminal" },
    ],
  },
};

const isProductId = (id: string): id is ProductId => PRODUCT_IDS.some((productId) => productId === id);

export const getProduct = (id: string): ProductDef | undefined => (isProductId(id) ? PRODUCTS[id] : undefined);

export const listProducts = (): ProductDef[] => PRODUCT_IDS.map((id) => PRODUCTS[id]);
