import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Nav Configuration

Navigation is essentially actions, but we need to configure a set of actions to tell DataPicker how to navigate to the next page? So that it can execute them at the right time.

We still use the [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) page as an example to create an action that can navigate to the next page.

<Image src="/screenshots/recipe-dev-nav-example.png" alt="recipe-dev-nav-example" />

---

Begins the navigation configuration action.

<Image src="/screenshots/recipe-dev-nav.png" alt="recipe-dev-nav" />

This is an action that waits 1 second and then clicks the "Next" button.

1. **Action Card** - Configured actions will be presented here and executed in sequence
2. **Execution timing** - Select the timing and frequency of action execution, please see the description of [Action Configuration - Execution Timing](/docs/recipe-development/action-config#execution timing)
3. **Wait Time** - delay the execution of the action, 1: means wait for 1 second before executing the action
4. **Action Type** - Select an action type, see [Action Configuration - Action Type](/docs/recipe-development/action-config#action type) description

<Callout emoji="💡">
Tip 1: **Action card** Click once to edit it. At this time, `EDITING` will be displayed on the right side of the card. Click again to cancel editing.
</Callout>
