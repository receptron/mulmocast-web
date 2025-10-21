<template>
  <div>
    <MulmoView :data-set="data" :base-path="basePath" />
  </div>
</template>

<script setup lang="ts">
import { MulmoView } from "mulmocast-viewer";
import { data } from "./data";
const basePath = "/test_media";
</script>
