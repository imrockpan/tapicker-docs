import Image from "@/components/Image";

# Dashboard

## My Recipes

All the recipes you have created are displayed here, and you can manage them here, for example: `Search`, `Sort`, `Edit`, `Delete`, etc.

<Image src="/screenshots/dashboard-my-recipes.png" alt="dashboard-my-recipes" />

## Pinned Recipes

Shown here are all your pinned recipes, where you can manage them, for example: `Search`, `Sort`, `Edit`, `Unpin`, etc.

<Image src="/screenshots/dashboard-pinned-recipes.png" alt="dashboard-pinned-recipes" />

## Page Crawl

Here you can scrape data, view data, download data, clear data.

### Scrape data

<Image src="/screenshots/dashboard-page-crawl-a.png" alt="dashboard-page-crawl-a" />

1. **Currently connected tab** - this is required, if the prompt is not connected to a tab, some functions will be restricted, for example: `edit`, `grab`, etc.
2. **Page Link** - If you open the Dashboard from Popup, the URL of the current page will usually be filled in automatically, of course, you can also modify it here
3. **Recipe Card** - You can click on the recipe card to grab data or view data
4. **Start Crawl** - There are currently two ways to scrape data
5. **View Data** - Click here to view data, download data and clear data under this recipe
6. **Quick fetch** - only fetch the data of the current page, will not automatically turn to the next page
7. **Auto next page grab** - You can set the number of pages to grab, and DataPicker will automatically flip the page (if the recipe does not support page flip, it cannot be grabbed in this way)
8. **Fetch** - Click this button to start crawling page data
9. **Expand Right Panel** - When you are viewing data, you can expand this panel for a better look and feel

### View data

<Image src="/screenshots/dashboard-page-crawl-b.png" alt="dashboard-page-crawl-b" />

1. **Table Name** - here is the table name and the number of rows
2. **Column Name** - The column name here is the field name in the recipe
3. **Download** - data can be exported as .json, .csv, .xls, .xml files
4. **Clear** - clears the data for this recipe

## Webhook

Here you can configure webhooks to automatically push data to your server.

### View Webhook's info

You can view the hooked request status (successes and failures) and basic request logs.

<Image src="/screenshots/dashboard-webhook-a.png" alt="dashboard-webhook-a" />

1. **Add Hook** - Click here to add hook
2. **Hook List** - here is the list of added hooks
3. **Enable/Disable** - Click here to enable or disable this hook
4. **Remove** - Click here to remove this hook
5. **Clear** - Click here to clear the log information for this hook

### Add hook

<Image src="/screenshots/dashboard-webhook-b.png" alt="dashboard-webhook-b" />

1. **Recipe** - select a recipe (only public recipes and self-created recipes are supported)
2. **Callback** - request interface (the interface in the figure is invalid, it is only for demonstration, do not use)
3. **Timeout** - Set the timeout, here means that there is no response for 3 seconds, it will be regarded as the request failure
4. **Request Header** - JSON format, you can set some custom headers to identify the request

## Download

You can view data and download data here.

<Image src="/screenshots/dashboard-download.png" alt="dashboard-download" />

1. **Search** - You can search the recipe name here to view the data
2. **Recipe Card** - Click on the recipe card to view the data
3. **Download** - data can be exported as .json, .csv, .xls, .xml files
4. **Clear** - clears the data for this recipe
5. **Table Name** - here is the table name and the number of rows
6. **Column Name** - The column name here is the field name in the recipe
7. **Expand Right Panel** - When you are viewing data, you can expand this panel for a better look and feel
