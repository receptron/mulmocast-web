<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-3xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-3xl md:text-4xl">{{ t("filmFes.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("festival.resultsAnnouncement") }}</p>
        </div>

        <!-- Grand Prix -->
        <Card class="border-2 border-yellow-500">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-yellow-500">
              <span class="text-2xl">&#127942;</span>
              {{ t("festival.grandPrix.title") }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div>
                <h3 class="text-foreground text-xl font-bold">{{ t("festival.grandPrix.work") }}</h3>
                <p class="text-muted-foreground">{{ t("festival.grandPrix.creator") }}</p>
              </div>
              <p class="text-muted-foreground text-sm">{{ t("festival.grandPrix.description") }}</p>
              <div class="aspect-video w-full">
                <iframe
                  class="h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/SlHhzFUOXBQ"
                  :title="t('festival.grandPrix.work')"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Category Awards -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.categoryAwards.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <!-- Visual Award -->
              <div class="space-y-2">
                <h3 class="text-foreground font-semibold">{{ t("festival.categoryAwards.visual.title") }}</h3>
                <p class="text-muted-foreground">
                  <a
                    href="https://www.youtube.com/watch?v=SlHhzFUOXBQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("festival.categoryAwards.visual.work") }}
                  </a>
                  - {{ t("festival.categoryAwards.visual.creator") }}
                </p>
              </div>

              <!-- Animation Award -->
              <div class="space-y-2">
                <h3 class="text-foreground font-semibold">{{ t("festival.categoryAwards.animation.title") }}</h3>
                <p class="text-muted-foreground">
                  <a
                    href="https://www.youtube.com/watch?v=ftdpy6NHfLA"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("festival.categoryAwards.animation.work") }}
                  </a>
                  - {{ t("festival.categoryAwards.animation.creator") }}
                </p>
              </div>

              <!-- Promotion Award -->
              <div class="space-y-2">
                <h3 class="text-foreground font-semibold">{{ t("festival.categoryAwards.promotion.title") }}</h3>
                <p class="text-muted-foreground">
                  <a
                    href="https://www.youtube.com/watch?v=9qaJCGRm5Dc"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("festival.categoryAwards.promotion.work") }}
                  </a>
                  - {{ t("festival.categoryAwards.promotion.creator") }}
                </p>
              </div>

              <!-- Documentary Award -->
              <div class="space-y-2">
                <h3 class="text-foreground font-semibold">{{ t("festival.categoryAwards.documentary.title") }}</h3>
                <p class="text-muted-foreground">
                  <a
                    href="https://www.youtube.com/watch?v=D5LvtyH2VU4"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("festival.categoryAwards.documentary.work") }}
                  </a>
                  - {{ t("festival.categoryAwards.documentary.creator") }}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Statistics -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.statistics.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li>{{ t("festival.statistics.totalEntries") }}</li>
              <li>{{ t("festival.statistics.eventDate") }}</li>
              <li>{{ t("festival.statistics.totalPrize") }}</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Review Live -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.reviewLive.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <p class="text-muted-foreground">{{ t("festival.reviewLive.description") }}</p>
              <div class="aspect-video w-full">
                <iframe
                  class="h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/Ow69HedV2e0"
                  :title="t('festival.reviewLive.title')"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Related Links -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.relatedLinks.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li>
                <a
                  href="https://note.com/aicu/n/n434b9823d39b"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:underline"
                >
                  {{ t("festival.relatedLinks.noteArticle") }}
                </a>
              </li>
              <li>
                <a
                  href="https://www.mag2.com/events/ai-film-fes2025/pass.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:underline"
                >
                  {{ t("festival.relatedLinks.passedWorks") }}
                </a>
              </li>
              <li>
                <a
                  href="https://www.mag2.com/events/ai-film-fes2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:underline"
                >
                  {{ t("festival.relatedLinks.officialPage") }}
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline"> {{ t("festival.backButton") }} </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

useHead({
  title: [t("filmFes.title"), "MulmoCast"].join(" - "),
});
</script>

<style scoped></style>
