export type InstallerPlatform = "mac" | "windows";

export type Installer = { version: string; url: string };

type MacRelease = { version?: string; updateTo?: { url?: string } };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isMacRelease = (value: unknown): value is MacRelease => isRecord(value);

// iPadOS Safari reports a Mac user agent; touch support is what tells it apart.
const IPAD_MIN_TOUCH_POINTS = 2;

export const detectPlatform = (userAgent: string, maxTouchPoints: number): InstallerPlatform | null => {
  if (/Windows/i.test(userAgent)) return "windows";
  if (/Macintosh|Mac OS X/i.test(userAgent) && maxTouchPoints < IPAD_MIN_TOUCH_POINTS) return "mac";
  return null;
};

export const macInstallerFrom = (releasesJson: unknown): Installer | null => {
  if (!isRecord(releasesJson) || !Array.isArray(releasesJson.releases)) return null;
  const { currentRelease } = releasesJson;
  const current = releasesJson.releases.filter(isMacRelease).find((release) => release.version === currentRelease);
  const url = current?.updateTo?.url;
  return current?.version && url ? { version: current.version, url } : null;
};

export const windowsInstallerFrom = (winPrefix: string, releaseJson: unknown): Installer | null => {
  if (!isRecord(releaseJson) || typeof releaseJson.currentVersion !== "string" || !releaseJson.currentVersion) {
    return null;
  }
  const version = releaseJson.currentVersion;
  return { version, url: `${winPrefix}/MulmoCast-${version}-setup.exe` };
};
