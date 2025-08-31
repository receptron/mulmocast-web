<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

type ApiResponse = { name: string }

const apiResult = ref<ApiResponse | null>(null)
const apiError = ref<string | null>(null)
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  try {
    const res = await fetch('/api/hello')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    apiResult.value = await res.json()
  } catch (e) {
    apiError.value = e instanceof Error ? e.message : String(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <main>
    <TheWelcome />
    <section>
      <h2>API Check</h2>
      <p v-if="isLoading">Loading...</p>
      <pre v-else-if="apiResult">{{ apiResult }}</pre>
      <p v-else-if="apiError">Error: {{ apiError }}</p>
      <p v-else>No data</p>
    </section>
  </main>
</template>
