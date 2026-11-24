# 发布与维护

## 推荐工作流

项目已经接入 Pages CMS。日常更新不需要编辑网站代码，也不需要自己操作 Git 命令：

1. 网站代码推送到 GitHub 后，打开 `https://app.pagescms.org`。
2. 使用有该仓库权限的 GitHub 账号登录。
3. 选择作品集仓库。
4. 进入“网站与首页设置”“关于页面”或“文章与作品”。
5. 编辑并保存；Pages CMS 会向仓库提交修改。
6. GitHub Actions 自动重新构建和发布网站。

Pages CMS 的表单结构由项目根目录的 `.pages.yml` 控制。后台只编辑内容文件，不会直接修改布局、动画或样式代码。

下面的本地工作流仍然保留，适合批量编辑或离线工作。

1. 创建文章：`npm run article:new -- "文章标题"`
2. 编辑 `src/content/articles/` 中生成的 Markdown 文件。
3. 将 `status: draft` 改为 `status: published`。
4. 本地运行 `npm run dev` 检查。
5. 提交并推送到 GitHub；部署工作流会自动更新网站。

开发模式会显示草稿并标注“示例草稿”。生产构建不会包含草稿。

## 文章字段

- `title`：文章标题。
- `description`：索引页摘要。
- `publishedAt`：发布日期，格式 `YYYY-MM-DD`。
- `category`：估值研究、策略研究、论文研读、会计准则、书本研读之一。
- `tags`：可自由增加的标签。
- `status`：`draft` 或 `published`。
- `featured`：是否出现在首页精选区。
- `readingMinutes`：预计阅读分钟数。
- `challenge`：文章试图挑战的主流观点。

## 邮件订阅

GitHub Pages 是静态托管，不能自己保存订阅者。推荐使用 Buttondown、Kit 或 Mailchimp：

1. 在邮件服务中创建列表。
2. 找到嵌入表单的 `action` URL。
3. 在 GitHub 仓库的 Settings → Secrets and variables → Actions 中新增变量 `PUBLIC_NEWSLETTER_ACTION`。
4. 值示例：`https://buttondown.com/api/emails/embed-subscribe/your-name`。

未配置时，网站会明确提示“订阅服务尚未连接”，不会假装订阅成功。

## 后台可以修改什么

- 网站姓名、浏览器标题、描述、邮箱与社交链接。
- 首页主标题、介绍、关注领域、按钮和研究方法。
- 关于页面简介、正文和研究原则。
- 新建、编辑、删除文章，切换草稿与发布状态。
- 上传文章封面、正文图片和 PDF 等附件。

布局、动画、字体和配色仍由代码控制，避免一次普通内容修改意外破坏整个页面。

## 个性化清单

发布前替换 `src/config.ts` 中的姓名、邮箱和社交链接，并重写 `src/pages/about.astro` 的示例简介。示例文章都明确标记为演示稿或草稿，不应当作为真实研究直接发布。
