import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Table Configuration

Set the table name and row selector to let DataPicker know which area to pull data from? And which table to store the data in?

Hmm~, this may be a bit abstract, so let's illustrate it with the [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) page!

<Image src="/screenshots/recipe-dev-tables-example.png" alt="recipe-dev-tables-example" />

As shown in the figure, we identified the pink area as a table and named it: `repositories`. Then the red box mark is the row of the table, this page has a total of 10 rows of data, `row 1`, `row 2`, `row 3`, `row...`, `row 10`.

---

Is this easy to understand? OK, let's start configuring the table.

<Image src="/screenshots/recipe-dev-tables.png" alt="recipe-dev-tables" />

1. **Table Card** - The configured table will be displayed here (one page can configure multiple tables, if needed)
2. **Table Name** - Give the table an appropriate name so you can see at a glance what it is for
3. **Row Selector** - [CSS Selector](/docs/recipe-development/css-selector) for table rows, you can _manually enter_ or _generate via advanced finder_
4. **Advanced Finder** - You can use it to find the element selector you need, please go to [Advanced Finder](/docs/recipe-development/advanced-finder) to learn how to use it
5. **HTML Viewer** - You can view the HTML found by the current selector to determine if the selector is correct
6. **Number of elements found** - The number of elements found by the current selector, you can judge whether the selector is valid or not according to this prompt?

<Callout emoji="💡">
Tip 1: **Table Card** Click to edit it, and `EDITING` will be displayed on the top right of the card, and click again to cancel the editing.
</Callout>

<Callout emoji="💡">
Tip 2: Determine if the selector is valid?
- The selected element will be framed by a blue dotted line
- Check if the element is found at `Mark 6` in the figure, 0 means no
- Click on the HTML viewer at `Mark 5` in the image to see if the HTML is displayed
</Callout>
