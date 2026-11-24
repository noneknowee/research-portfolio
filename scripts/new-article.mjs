import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rawTitle = process.argv.slice(2).join(' ').trim();
if (!rawTitle) {
  console.error('Usage: npm run article:new -- "文章标题"');
  process.exit(1);
}

const slug = rawTitle
  .normalize('NFKD')
  .toLowerCase()
  .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
  .replace(/^-|-$/g, '') || `article-${Date.now()}`;
const directory = resolve('src/content/articles');
const path = resolve(directory, `${slug}.md`);

if (existsSync(path)) {
  console.error(`Article already exists: ${path}`);
  process.exit(1);
}

mkdirSync(directory, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
const content = `---
title: ${rawTitle}
description: 用一句话说明文章回答什么问题。
publishedAt: ${today}
category: 估值研究
tags: []
status: draft
featured: false
readingMinutes: 8
challenge: 写下本文挑战的常见观点。
---

## 问题

从一个可以验证的问题开始。

## 分析

写明数据、假设、Driver 和反方观点。

## 什么会改变我的判断

列出明确的失效条件或修订触发器。
`;

writeFileSync(path, content, 'utf8');
console.log(`Created ${path}`);
