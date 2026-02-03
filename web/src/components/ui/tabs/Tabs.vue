<script setup lang="ts">
import { ref, provide, computed } from "vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
  defaultValue?: string;
  modelValue?: string;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  defaultValue: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const internalValue = ref(props.defaultValue);

const currentValue = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (value: string) => {
    internalValue.value = value;
    emit("update:modelValue", value);
  },
});

provide("tabs-value", currentValue);
</script>

<template>
  <div :class="cn('w-full', props.class)">
    <slot />
  </div>
</template>
