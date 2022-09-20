import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";
import IconFilter from "@/components/icons/IconFilter";

# Scrape Data From Page

## 1.Open Page

First, open the page you want to scrape data, for example: [Amazon.com: Knapsack](https://www.amazon.com/s?k=knapsack&qid=1663576640&ref=sr_pg_1)

<Image src="/screenshots/amazon-knapsack.png" alt="amazon-knapsack" />

<Callout emoji="💡">
You can open any page you want to scrape data, and then scrape the data through DataPicker.
</Callout>

## 2.Scrape Data

Then, we only need **two clicks** to scrape the data:

1. Click on the `DataPicker` icon and move your mouse over the `@official/amazon-knapsack` recipe
2. Click the `Crawl` button to scrape the data

<Image src="/screenshots/crawling-amazon-knapsack.png" alt="crawling-amazon-knapsack" />

<Callout emoji="💡">
You can click the <IconFilter /> icon to quickly find the recipes available on the current site.  
If no recipe matches, you can create your own recipe for this page. If you don't know how to develop recipes yet, please refer to [Recipe Development Guide](/docs/recipe-development/main-flows).
</Callout>

## 3.Complete Scraping

Wait until the prompt data scraping is successful, you can [go to view the data](/docs/getting-started/view-and-export-data).

<Image src="/screenshots/crawling-success.png" alt="crawling-success" />

<Callout emoji="💡">
Usually, after the scraping is completed, the scraping log will be displayed on the page, and the number of rows of scraped data will be displayed on the icon.
</Callout>
