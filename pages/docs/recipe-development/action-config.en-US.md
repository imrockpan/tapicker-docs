import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Action Configuration

Actions can simulate browsing the page like a human, such as: clicking a button, scrolling down the page, etc.

We still use the [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) page as an example to create a scroll down action.

<Image src="/screenshots/recipe-dev-action-example.png" alt="recipe-dev-action-example" />

---

Start configuring actions.

<Image src="/screenshots/recipe-dev-action.png" alt="recipe-dev-action" />

This is an action that waits 1 second, then starts scrolling until the bottom of the page.

1. **Action Card** - Configured actions will be presented here and executed in sequence
2. **Execution Timing** - Select the timing and frequency of action execution, please see the description below
3. **Wait Time** - delay the execution of the action, 1: means wait for 1 second before executing the action
4. **Action Type** - Select an action type, see the description below

<Callout emoji="💡">
Tip 1: **Action card** Click once to edit it. At this time, `EDITING` will be displayed on the right side of the card. Click again to cancel editing.
</Callout>

### Execution Time

There are four main execution times:

- **Before Crawl Every** - executed before each fetch
- **After Crawl Every** - Executed after each fetch
- **Before Crawl Once** - executed after the first data extraction (i.e. when automatically turning pages, only the first page is executed)
- **After Crawl Once** - Executed after the first data extraction (ie, when automatically turning pages, only the first page is executed)

### Action Card

There are six main types of actions:

- **Click an element** - simulate clicking on an element
- **Hover an element** - simulates mouse movement over an element
- **Scroll to element** - simulate scrolling to an element
- **Scroll a distance** - Simulate scrolling a distance (negative number means scroll up, positive number means scroll down)
- **Scroll page start** - simulates scrolling to the top of the page
- **Scroll page end** - simulates scrolling to the bottom of the page
