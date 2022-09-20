import Image from "@/components/Image";

# Choose Template

Based on a large amount of data scraping experience, we have precipitated the following sets of templates to further reduce the difficulty of recipe development:

- "Search Page" means to search by keywords first, and then scrape the search results. For example: Google, Bing, Baidu.
- "List Page" means to scrape the list data in the page, including automatic page turning. For example: blog article list, shopping website product list.
- "Details Page" means scraping detailed data, usually only one line of data. For example: article details page, product details page.
- "Combined Page" means that after scraping the list data, continue scraping the details page. For example: scrape links from the article list page, and then scrape the article details in turn.
- "Custom" means you can play freely.

<Image src="/screenshots/choose-template.png"  alt="choose-template" />
