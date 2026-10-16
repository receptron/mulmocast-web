// Per-product accent styling. Tailwind JIT needs full literal class strings,
// so each accent is defined once here and selected by key (never composed dynamically).
import type { AccentKey } from "./products";

export type AccentClasses = {
  text: string;
  dot: string;
  iconBox: string;
  ring: string;
  glow: string;
  button: string;
};

export const ACCENTS: Record<AccentKey, AccentClasses> = {
  red: {
    text: "text-rose-500",
    dot: "bg-rose-500",
    iconBox: "bg-rose-500/10 text-rose-500",
    ring: "group-hover:ring-rose-500/40",
    glow: "from-rose-500/25",
    button: "bg-rose-600 text-white hover:bg-rose-500",
  },
  violet: {
    text: "text-violet-500",
    dot: "bg-violet-500",
    iconBox: "bg-violet-500/10 text-violet-500",
    ring: "group-hover:ring-violet-500/40",
    glow: "from-violet-500/25",
    button: "bg-violet-600 text-white hover:bg-violet-500",
  },
  amber: {
    text: "text-amber-500",
    dot: "bg-amber-500",
    iconBox: "bg-amber-500/10 text-amber-500",
    ring: "group-hover:ring-amber-500/40",
    glow: "from-amber-500/25",
    button: "bg-amber-600 text-white hover:bg-amber-500",
  },
  emerald: {
    text: "text-emerald-500",
    dot: "bg-emerald-500",
    iconBox: "bg-emerald-500/10 text-emerald-500",
    ring: "group-hover:ring-emerald-500/40",
    glow: "from-emerald-500/25",
    button: "bg-emerald-600 text-white hover:bg-emerald-500",
  },
};
