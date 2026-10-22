/** Licences accepted for photographs, including commercial use and cropping. */
export function reusablePhotoLicense(license: string, licenseUrl?: string): boolean {
  if (license === 'Public domain') return !licenseUrl || licenseUrl.startsWith('https://commons.wikimedia.org/');
  if (!licenseUrl) return false;
  let url: URL;
  try { url = new URL(licenseUrl); } catch { return false; }
  if (url.protocol !== 'https:' || url.hostname !== 'creativecommons.org') return false;
  if (license === 'CC0') return /^\/publicdomain\/zero\/1\.0\/?$/.test(url.pathname);
  const match = /^CC BY(-SA)? (2\.0|2\.5|3\.0|4\.0)$/.exec(license);
  if (!match) return false;
  return url.pathname.replace(/\/$/, '') === `/licenses/by${match[1] ? '-sa' : ''}/${match[2]}`;
}

export function normalizeLicenseUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.replace(/^http:\/\//, 'https://').replace(/\/deed\.[a-z-]+$/, '').replace(/\/$/, '');
}
