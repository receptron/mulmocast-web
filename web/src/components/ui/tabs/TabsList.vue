<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn('bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1', props.class)
    "
  >
    <slot />
  </div>
</template>
