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
</script>

<template>
  <div
    v-if="isActive"
    :class="
      cn(
        'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
