// Sub-page sections for each product. Overview is the base path ("/{id}");
// the rest are "/{id}/{slug}". Labels live in i18n under `products.sections.*`.

export const SECTION_KEYS = ["overview", "features", "use-cases", "getting-started", "faq"] as const;

export type SectionKey = (typeof SECTION_KEYS)[number];

export type SectionDef = {
  key: SectionKey;
  slug: string; // "" for the overview (base) route
  labelKey: string; // i18n: products.sections.<labelKey>
  icon: string;
};

export const SECTIONS: SectionDef[] = [
  { key: "overview", slug: "", labelKey: "overview", icon: "House" },
  { key: "features", slug: "features", labelKey: "features", icon: "Sparkles" },
  { key: "use-cases", slug: "use-cases", labelKey: "useCases", icon: "Lightbulb" },
  { key: "getting-started", slug: "getting-started", labelKey: "gettingStarted", icon: "Rocket" },
  { key: "faq", slug: "faq", labelKey: "faq", icon: "HelpCircle" },
];

const isSectionKey = (value: string): value is SectionKey => SECTION_KEYS.some((key) => key === value);

export const toSectionKey = (value: string | undefined): SectionKey =>
  value && isSectionKey(value) ? value : "overview";
