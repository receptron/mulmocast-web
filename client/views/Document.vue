<template>
  <div class="bg-background min-h-screen p-8">
    <div class="mx-auto max-w-7xl space-y-12">
      <h1 class="text-foreground mb-8 text-4xl font-bold">MulmoViewer Document</h1>

      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">Mac</h2>
        <p class="text-muted-foreground mb-4">install</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer :data-set="GuideMac" base-path="/guide00_script_mac" />
        </div>
      </section>

      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">Win</h2>
        <p class="text-muted-foreground mb-4">install</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer :data-set="GuideWin" base-path="/guide00_script_win" />
        </div>
      </section>

      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">Onboard</h2>
        <p class="text-muted-foreground mb-4">install</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer :data-set="Guide1" base-path="/guide01_script" />
        </div>
      </section>

      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MulmoViewer } from "mulmocast-viewer";
import { data } from "./data";

import GuideMac from "./script/guide00_script_mac.json";
import GuideWin from "./script/guide00_script_win.json";
import Guide1 from "./script/guide01.json";

</script>
