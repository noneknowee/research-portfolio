# Signal Notes Portfolio

一个面向研究写作的个人作品集：动态信号场首页、Markdown 文章库、分类与搜索、RSS、邮件订阅入口，以及 GitHub Pages 自动部署。

## 本地运行

项目需要 Node.js 24。使用 nvm 时：

```bash
nvm use
npm install
npm run dev
```

打开 `http://localhost:4321`。

## 先替换这些内容

1. 在 `src/config.ts` 中填写姓名、邮箱和社交链接。
2. 在 `src/pages/about.astro` 中替换示例简介。
3. 在 `src/content/articles/` 中替换或删除示例文章。
4. 按 `.env.example` 配置部署路径和邮件订阅服务。

## 发布文章

日常维护推荐登录 [Pages CMS](https://app.pagescms.org)，选择这个 GitHub 仓库后直接编辑首页、关于页面和文章。后台配置位于 `.pages.yml`。

本地也可以使用命令创建文章：

```bash
npm run article:new -- "文章标题"
```

编辑新文件后，将 frontmatter 中的 `status: draft` 改为 `status: published`。更完整的字段、订阅服务和 GitHub Pages 说明见 `docs/PUBLISHING.md`。

## 构建检查

```bash
npm run build
```

推送到 GitHub 的 `main` 分支后，`.github/workflows/deploy.yml` 会自动发布到 GitHub Pages。
