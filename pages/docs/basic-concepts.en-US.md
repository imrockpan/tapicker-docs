import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Basic Conceipts

## What's Recipe?

The recipe is a collection of action instructions that DataPicker uses to extract data.

When you visit a website, DataPicker will automatically match you with available recipes. If it doesn't match, it means you have to create your own recipe! If you encounter difficulties when creating a recipe, you can go to [Video Tutorial](/docs/video-tutorial) to learn, or contact the official (support@byetool.com) for free assistance.

<Image src="/screenshots/recipe-popup.png" width="80%" height="auto" alt="recipe-popup" center />

Recipes can be self-created, shared publicly, or pinned, so recipes are divided into 3 categories:

- **Public Recipes** - Publicly shared recipes (from any user)
- **Pinned Recipes** - Pinned recipes (Commonly used recipes suggest pinning it)
- **My Recipes** - Your own recipes (you can manage your own recipes here)

<Callout emoji="⚠️">
A publicly shared recipe is not always reliable as it may be modified or deleted by the author.
</Callout>

## What does recipe metadata mean?

Recipe card in normal state

<Image src="/screenshots/recipe-item-normal.png" alt="recipe-popup-normal" width="80%" height="auto" />

1. Indicates that the recipe is "public" or "private"
2. Indicates how many people have pinned the recipe
3. Indicates the number of data rows extracted by this recipe
4. Indicates the last time the recipe was used

## What operations does the recipe support?

Recipe card in hover state

<Image src="/screenshots/recipe-item-hover.png" alt="recipe-popup-hover" width="80%" height="auto" />

1. scrape - Use this recipe to scrape data from a page
2. Pin/Unpin - Pin this recipe or unpin it
3. Copy - Copy this recipe (Pro plan required)
4. Edit - Edit this recipe (can only edit own recipes)
5. Delete - Deletes this recipe (can only delete own recipes)

## Will the recipe fail?

Yes, the recipe may fail! Because the rules for extracting data depend on the HTML structure of the web page, the recipe may fail if the web page is updated.
