import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 从页面中抓取数据

## 1.打开页面

首先，打开您想要抓取数据的页面，例如：[Github Search Results](https://github.com/search?q=hello+world&type=Repositories)

<Image src="/screenshots/github-repos.png" alt="github-repos" />

<Callout emoji="💡">
您可以打开任何您想要抓取数据的页面，然后通过 DataPicker 来抓取数据。
</Callout>

## 2.抓取数据

然后，仅需 **两次点击**，就能抓取数据了：

1. 点击 `DataPicker` 图标，将鼠标移动到 `@official/github-search-results` 配方上
2. 点击 `Crawl` 按钮，即可抓取数据了

<Image src="/screenshots/crawling-github.png" alt="crawling-github" />

<Callout emoji="💡">
如果没有匹配到配方，您可以针对该页面自行创建配方。如果您还不会开发配方，请参考 [配方开发指南](/zh-CN/docs/recipe-development/main-flows)。
</Callout>

等到提示数据抓取成功，即可去查看抓取到的数据了。
