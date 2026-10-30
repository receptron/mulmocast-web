import { computed, ref } from "vue";
import { macReleaseURL, winPrefix } from "../../configs/config";
import { detectPlatform, macInstallerFrom, windowsInstallerFrom, type Installer } from "./installers";

const FETCH_TIMEOUT_MS = 10_000;
const S3_ORIGIN = "https://s3.aws.mulmocast.com";

const mac = ref<Installer | null>(null);
const windows = ref<Installer | null>(null);
let started = false;

// S3 only allows CORS from mulmocast.com, so the dev server proxies these JSON files (see vite.config.ts).
const releaseJsonUrl = (url: string): string => (import.meta.env.DEV ? url.replace(S3_ORIGIN, "") : url);

const fetchJson = async (url: string): Promise<unknown> => {
  const response = await fetch(releaseJsonUrl(url), { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  return response.json();
};

const loadMac = async () => {
  try {
    mac.value = macInstallerFrom(await fetchJson(`${macReleaseURL}?${Date.now()}`));
  } catch (error) {
    console.error("Failed to fetch Mac release info from", macReleaseURL, error);
  }
};

const loadWindows = async () => {
  const url = `${winPrefix}/RELEASE.json`;
  try {
    windows.value = windowsInstallerFrom(winPrefix, await fetchJson(url));
  } catch (error) {
    console.error("Failed to fetch Windows release info from", url, error);
  }
};

export const useMulmoCastInstallers = () => {
  if (!started) {
    started = true;
    loadMac();
    loadWindows();
  }
  const platform =
    typeof navigator === "undefined" ? null : detectPlatform(navigator.userAgent, navigator.maxTouchPoints);
  const forThisDevice = computed<Installer | null>(() => {
    if (platform === "mac") return mac.value;
    if (platform === "windows") return windows.value;
    return null;
  });
  return { mac, windows, forThisDevice };
};
