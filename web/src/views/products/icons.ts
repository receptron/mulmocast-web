// Maps the icon names stored in product/family data to lucide components,
// so data modules stay free of component imports.
import type { Component } from "vue";
import {
  Clapperboard,
  Mic,
  Brain,
  LayoutGrid,
  Terminal,
  FileSliders,
  Presentation,
  Server,
  Play,
  Plug,
  Blocks,
} from "lucide-vue-next";

const ICONS: Record<string, Component> = {
  Clapperboard,
  Mic,
  Brain,
  LayoutGrid,
  Terminal,
  FileSliders,
  Presentation,
  Server,
  Play,
  Plug,
  Blocks,
};

export const iconFor = (name: string): Component | undefined => ICONS[name];
