<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("faq.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("faq.subtitle") }}</p>
        </div>

        <!-- FAQ Items -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.0.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.0.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.1.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.1.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.2.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.2.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.3.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.3.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.4.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground whitespace-pre-line">
              {{ t("faq.items.4.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.5.question") }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p>
              {{ t("faq.items.5.answer") }}
            </p>
            <p class="mt-2 font-semibold">{{ t("faq.items.5.stepsLabel") }}</p>
            <ul class="list-disc space-y-2 pl-5">
              <li>
                <i18n-t keypath="faq.items.5.steps.0" tag="span">
                  <template #organizationSettingsPage>
                    <a
                      href="https://platform.openai.com/settings/organization/general"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary hover:underline"
                    >
                      {{ t("faq.items.5.organizationSettingsPageText") }}
                    </a>
                  </template>
                </i18n-t>
              </li>
              <li>
                {{ t("faq.items.5.steps.1") }}
              </li>
            </ul>
            <p class="mt-4">{{ t("faq.items.5.note") }}</p>
            <p class="mt-4">
              <i18n-t keypath="faq.items.5.support" tag="span">
                <template #openaiSupport>
                  <a
                    href="https://help.openai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("faq.items.5.openaiSupportText") }}
                  </a>
                </template>
              </i18n-t>
            </p>

            <div class="mt-6">
              <p class="font-semibold">{{ t("faq.items.5.alternative.title") }}</p>
              <p class="mt-2">{{ t("faq.items.5.alternative.description") }}</p>
              <p class="mt-2 font-semibold">{{ t("faq.items.5.alternative.stepsLabel") }}</p>
              <ul class="list-disc space-y-1 pl-5">
                <li>{{ t("faq.items.5.alternative.steps.0") }}</li>
                <li>{{ t("faq.items.5.alternative.steps.1") }}</li>
                <li>{{ t("faq.items.5.alternative.steps.2") }}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.6.question") }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.6.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.6.methods.0") }}</li>
              <li>{{ t("faq.items.6.methods.1") }}</li>
            </ul>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.7.question") }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.7.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.7.methods.0") }}</li>
              <li>{{ t("faq.items.7.methods.1") }}</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline"> {{ t("faq.backButton") }} </Button>
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
  title: [t("faq.title"), "MulmoCast"].join(" - "),
});
</script>

<style scoped></style>
