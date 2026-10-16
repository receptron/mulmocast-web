import { useHead } from "@unhead/vue";

export const SITE_ORIGIN = "https://mulmocast.com";
const SITE_NAME = "Mulmo Family";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/products/mulmoterminal.jpg`;

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

const absolute = (pathOrUrl: string): string =>
  pathOrUrl.startsWith("http") ? pathOrUrl : `${SITE_ORIGIN}${pathOrUrl}`;

export const useSeo = ({ title, description, path, image, jsonLd }: SeoOptions): void => {
  const url = absolute(path);
  const ogImage = absolute(image ?? DEFAULT_OG_IMAGE);
  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    link: [{ rel: "canonical", href: url }],
    script: jsonLd ? [{ type: "application/ld+json", innerHTML: JSON.stringify(jsonLd) }] : [],
  });
};

export const softwareAppJsonLd = (name: string, description: string, url: string): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name,
  description,
  url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Windows, Linux",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Singularity Society", url: "https://singularitysociety.org/" },
});

export const faqPageJsonLd = (entries: Array<{ question: string; answer: string }>): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: entries.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: { "@type": "Answer", text: entry.answer },
  })),
});
