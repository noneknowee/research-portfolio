import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config';

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((article) => article.data.status === 'published')
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: `${siteConfig.name} — 文章`,
    description: siteConfig.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `writing/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
  });
}
