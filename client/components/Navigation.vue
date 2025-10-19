<template>
  <nav class="border-muted bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-foreground hover:text-primary text-xl font-bold transition-colors"> MulmoCast </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                isCurrentPage(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
              ]"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            type="button"
            class="text-muted-foreground hover:text-foreground focus:ring-primary inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">{{ t('navigation.openMenu') }}</span>
            <svg
              v-if="!mobileMenuOpen"
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            isCurrentPage(item.href)
              ? 'text-primary bg-muted'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted',
            'block rounded-md px-3 py-2 text-base font-medium transition-colors',
          ]"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const mobileMenuOpen = ref(false);
const { t } = useI18n();

const navigation = computed(() => [
  { name: t("navigation.home"), href: "/" },
  { name: t("navigation.faq"), href: "/faq" },
  { name: t("navigation.festival"), href: "/festival" },
  //  { name: "サンプル", href: "/samples" },
]);

const isCurrentPage = (href: string) => {
  if (href === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(href);
};
</script>

<style scoped></style>
