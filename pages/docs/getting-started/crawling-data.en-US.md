import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Crawling Data From Page

## 1.Open page

First, open the page you want to scrape data, eg: [Github Search Results](https://github.com/search?q=hello+world&type=Repositories)

<Image src="/screenshots/github-repos.png" alt="github-repos" />

<Callout emoji="💡">
You can open any page you want to scrape data, and then scrape the data through DataPicker.
</Callout>

## 2.Crawl data

And then, with just **two clicks**, you can grab the data:

1. Click on the `DataPicker` icon and move your mouse over the `@official/github-search-results` recipe
2. Click the `Crawl` button to scrape data

<Image src="/screenshots/crawling-github.png" alt="crawling-github" />

<Callout emoji="💡">
If no recipe matches, you can create your own recipe for this page. If you have not developed a recipe yet, please refer to [Recipe Development Guide](/docs/recipe-development/main-flows)。
</Callout>

Wait until the prompt data capture is successful, you can view the captured data.
