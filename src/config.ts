import siteData from './content/settings/site.json';

export const siteConfig = {
  ...siteData,
  title: siteData.siteTitle,
};

export const basePath = import.meta.env.BASE_URL;

export function withBase(path = '') {
  const base = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

export function mediaWithBase(path?: string) {
  if (!path) return '';
  if (/^(https?:)?\/\//.test(path)) return path;
  return withBase(path.replace(/^\//, ''));
}
