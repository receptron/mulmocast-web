<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-xl w-full space-y-4">
      <div class="text-pretty text-center text-3xl font-bold sm:text-5xl sm:font-extrabold md:text-6xl text-foreground">
        MulmoCast
      </div>
      <div class="col-span-3 rounded-2xl border border-muted bg-card h-80 md:h-auto p-6 md:p-10 relative overflow-hidden">
        aa
      </div>
      <div class="group rounded-2xl border border-muted bg-card hover:bg-muted/50 p-4 md:p-6 relative">
        <div class="mt-4 flex items-center gap-2">
          AA
        </div>
        <p class="mt-2 text-muted-foreground group-hover:text-foreground group-focus:text-foreground">
          aa
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Download Mac arm</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <a :href="currentMac?.updateTo?.url">Download {{ currentMac?.version }} ({{ currentMac?.updateTo?.url }})</a>

        </CardContent>
        <CardFooter>
          <div class="w-full">
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const text = ref('')
const loading = ref(false)
const error = ref<string | null>(null)
const responseText = ref('')

async function onSubmit() {
  error.value = null
  responseText.value = ''
  loading.value = true
  try {
    const res = await fetch('/api/echo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text.value })
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data?.error || 'Request failed')
    }
    responseText.value = JSON.stringify(data, null, 2)
  } catch (e: any) {
    error.value = e?.message ?? 'Unexpected error'
  } finally {
    loading.value = false
  }

}


type MacData = {
  version?: string;
  updateTo?: {
    url: string;
  };
};

const currentMac = ref<MacData>({});
const currentWin = ref({});

const fetchDataMac = async () => {
  const response = await fetch("https://s3.aws.mulmocast.com/releases/prod/darwin/arm64/RELEASES.json");
  const result = await response.json();
  const { currentRelease, releases } = result;
  currentMac.value = releases.find((release: MacData) => release.version === currentRelease);

};

const fetchDataWin = async () => {
  const response = await fetch("https://s3.aws.mulmocast.com/releases/prod/win32/x64/RELEASES");
  const result = await response.text();
  console.log(result.split("\n").map(line => line.split(/\s/)));
  // const { currentRelease, releases } = result;
  // currentWin.value = releases.find(release => release.version === currentRelease);
};


fetchDataMac();
fetchDataWin();

function onClear() {
  text.value = ''
  responseText.value = ''
  error.value = null
}
</script>

<style scoped>
</style>
