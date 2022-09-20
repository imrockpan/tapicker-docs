import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";
import IconFilter from "@/components/icons/IconFilter";

# 从页面中抓取数据

## 1.打开页面

首先，打开您想要抓取数据的页面，例如：[Amazon.com: Knapsack](https://www.amazon.com/s?k=knapsack&qid=1663576640&ref=sr_pg_1)

<Image src="/screenshots/amazon-knapsack.png" alt="amazon-knapsack" />

<Callout emoji="💡">
您可以打开任何您想要抓取数据的页面，然后通过 DataPicker 来抓取数据。
</Callout>

## 2.抓取数据

然后，我们仅需 **两次点击**，就能抓取数据了：

1. 点击 `DataPicker` 图标，将鼠标移动到 `@official/amazon-knapsack` 配方上
2. 点击 `Crawl` 按钮，就可以抓取数据了

<Image src="/screenshots/crawling-amazon-knapsack.png" alt="crawling-amazon-knapsack" />

<Callout emoji="💡">
可以点击 <IconFilter /> 图标，快速找到当前站点可用的配方。  
如果没有匹配到配方，您可以针对该页面自行创建配方。如果您还不会开发配方，请参考 [配方开发指南](/zh-CN/docs/recipe-development/main-flows)。
</Callout>

## 3.完成抓取

等到提示数据抓取成功，您就可以[去查看数据](/zh-CN/docs/getting-started/view-and-download-data)了。

<Image src="/screenshots/crawling-success.png" alt="crawling-success" />

<Callout emoji="💡">
通常抓取完成后，会在页面上显示抓取日志，图标上显示抓取到的数据行数。
</Callout>
