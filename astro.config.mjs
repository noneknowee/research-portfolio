import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://example.com';

function rehypeBaseMedia({ base }) {
  const prefix = base === '/' ? '' : base.replace(/\/$/, '');

  return function transform(tree) {
    function walk(node) {
      if (node?.type === 'element' && node.properties) {
        for (const attribute of ['src', 'href']) {
          const value = node.properties[attribute];
          if (typeof value === 'string' && value.startsWith('/uploads/')) {
            node.properties[attribute] = `${prefix}${value}`;
          }
        }
      }
      if (Array.isArray(node?.children)) node.children.forEach(walk);
    }
    walk(tree);
  };
}

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [[rehypeBaseMedia, { base }]],
    }),
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
