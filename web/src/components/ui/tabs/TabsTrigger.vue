<script setup lang="ts">
import { inject, computed } from "vue";
import type { HTMLAttributes, WritableComputedRef } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const currentValue = inject<WritableComputedRef<string>>("tabs-value");

const isActive = computed(() => currentValue?.value === props.value);

const handleClick = () => {
  if (currentValue) {
    currentValue.value = props.value;
  }
};
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        isActive ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50 hover:text-foreground',
        props.class,
      )
    "
    @click="handleClick"
  >
    <slot />
  </button>
</template>
