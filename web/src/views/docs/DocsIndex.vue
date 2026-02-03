<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-4xl">{{ t("docs.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">
            {{ t("docs.subtitle") }}
          </p>
        </div>

        <!-- MulmoCast CLI -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Terminal class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("docs.cli.title") }}</CardTitle>
                <CardDescription>{{ t("docs.cli.description") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground space-y-2 text-sm">
              <li>{{ t("docs.cli.item1") }}</li>
              <li>{{ t("docs.cli.item2") }}</li>
              <li>{{ t("docs.cli.item3") }}</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/cli')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoCast App -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Monitor class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("docs.app.title") }}</CardTitle>
                <CardDescription>{{ t("docs.app.description") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground space-y-2 text-sm">
              <li>{{ t("docs.app.item1") }}</li>
              <li>{{ t("docs.app.item2") }}</li>
              <li>{{ t("docs.app.item3") }}</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/app')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoChat -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <MessageCircle class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("docs.mulmochat.title") }}</CardTitle>
                <CardDescription>{{ t("docs.mulmochat.description") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground space-y-2 text-sm">
              <li>{{ t("docs.mulmochat.item1") }}</li>
              <li>{{ t("docs.mulmochat.item2") }}</li>
              <li>{{ t("docs.mulmochat.item3") }}</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/mulmochat')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline">
            {{ t("docs.backButton") }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { Terminal, Monitor, MessageCircle } from "lucide-vue-next";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
