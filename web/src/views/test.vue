<template>
  <div class="bg-background min-h-screen p-8">
    <div class="mx-auto max-w-7xl space-y-12">
      <h1 class="text-foreground mb-8 text-4xl font-bold">MulmoViewer Samples</h1>

      <!-- Sample 1: Basic Usage -->
      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">1. Basic Usage</h2>
        <p class="text-muted-foreground mb-4">Default viewer without custom controls</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer :data-set="data" :base-path="basePath" />
        </div>
      </section>

      <!-- Sample 2: Custom Navigation Controls -->
      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">2. Custom Navigation Controls</h2>
        <p class="text-muted-foreground mb-4">Custom layout with previous/next buttons and page counter</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer
            v-if="data"
            :data-set="data"
            :base-path="basePath"
            v-slot="{ MulmoPlayer, pageProps, pageMove, currentPage, pageCount, mediaPlayerRef }"
          >
            <div class="mx-auto flex max-w-screen-xl flex-col gap-4 p-4">
              <div class="flex items-center justify-between rounded-lg bg-gray-100 p-4">
                <button
                  class="rounded bg-gray-600 px-6 py-2 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  @click="pageMove(-1)"
                  :disabled="currentPage === 0"
                >
                  ← Previous
                </button>
                <div class="text-xl font-bold text-gray-800">{{ currentPage + 1 }} / {{ pageCount }}</div>
                <button
                  class="rounded bg-gray-600 px-6 py-2 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  @click="pageMove(1)"
                  :disabled="currentPage >= pageCount - 1"
                >
                  Next →
                </button>
              </div>

              <div class="overflow-hidden rounded-lg bg-black">
                <component :is="MulmoPlayer" :ref="mediaPlayerRef" v-bind="pageProps" />
              </div>
            </div>
          </MulmoViewer>
        </div>
      </section>

      <!-- Sample 3: Minimal Controls -->
      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">3. Minimal Controls</h2>
        <p class="text-muted-foreground mb-4">Simple layout with page info only</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer
            :data-set="data"
            :base-path="basePath"
            v-slot="{ MulmoPlayer, pageProps, currentPage, pageCount, mediaPlayerRef }"
          >
            <div class="space-y-2">
              <div class="text-muted-foreground text-right text-sm">Page {{ currentPage + 1 }} of {{ pageCount }}</div>
              <component :is="MulmoPlayer" :ref="mediaPlayerRef" v-bind="pageProps" />
            </div>
          </MulmoViewer>
        </div>
      </section>

      <!-- Sample 4: Side Navigation -->
      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">4. Side Navigation Layout</h2>
        <p class="text-muted-foreground mb-4">Navigation buttons on the sides</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer
            :data-set="data"
            :base-path="basePath"
            v-slot="{ MulmoPlayer, pageProps, pageMove, currentPage, pageCount, mediaPlayerRef }"
          >
            <div class="flex items-center space-x-4">
              <button
                @click="pageMove(-1)"
                :disabled="currentPage === 0"
                class="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0 rounded-full p-3 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div class="flex-1">
                <component :is="MulmoPlayer" :ref="mediaPlayerRef" v-bind="pageProps" />
              </div>

              <button
                @click="pageMove(1)"
                :disabled="currentPage >= pageCount - 1"
                class="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0 rounded-full p-3 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </MulmoViewer>
        </div>
      </section>

      <!-- Sample 5: With Language Switcher -->
      <section class="border-muted rounded-lg border p-6">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">5. With Language Switcher</h2>
        <p class="text-muted-foreground mb-4">Switch audio and text languages independently</p>
        <div class="bg-muted rounded-lg p-4">
          <MulmoViewer
            :data-set="data"
            :base-path="basePath"
            :audio-lang="audioLang"
            :text-lang="textLang"
            v-slot="{ MulmoPlayer, pageProps, pageMove, currentPage, pageCount, mediaPlayerRef }"
          >
            <div class="space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex flex-col gap-2">
                  <div class="text-foreground text-sm font-medium">Audio:</div>
                  <div class="flex space-x-2">
                    <button
                      @click="audioLang = 'en'"
                      :class="[
                        'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                        audioLang === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                      ]"
                    >
                      English
                    </button>
                    <button
                      @click="audioLang = 'ja'"
                      :class="[
                        'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                        audioLang === 'ja'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                      ]"
                    >
                      日本語
                    </button>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                  <div class="text-foreground text-sm font-medium">Text:</div>
                  <div class="flex space-x-2">
                    <button
                      @click="textLang = 'en'"
                      :class="[
                        'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                        textLang === 'en'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                      ]"
                    >
                      English
                    </button>
                    <button
                      @click="textLang = 'ja'"
                      :class="[
                        'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                        textLang === 'ja'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                      ]"
                    >
                      日本語
                    </button>
                  </div>
                </div>

                <div class="text-muted-foreground text-sm">{{ currentPage + 1 }} / {{ pageCount }}</div>
              </div>

              <component :is="MulmoPlayer" :ref="mediaPlayerRef" v-bind="pageProps" />

              <div class="flex justify-center space-x-2">
                <button
                  @click="pageMove(-1)"
                  :disabled="currentPage === 0"
                  class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  ← Prev
                </button>
                <button
                  @click="pageMove(1)"
                  :disabled="currentPage >= pageCount - 1"
                  class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </div>
          </MulmoViewer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MulmoViewer } from "mulmocast-viewer";
import { data } from "./data";

const basePath = "/test_media";
const audioLang = ref("en");
const textLang = ref("en");
</script>
