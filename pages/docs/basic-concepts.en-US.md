import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Basic Conceipts

## What's Recipe?

The recipe is a collection of action instructions that DataPicker uses to extract data.

When you visit a website, DataPicker will automatically match you with available recipes. If it doesn't match, it means you have to create your own recipe! If you encounter difficulties when creating a recipe, you can go to [Recipe Development Guide](/docs/recipe-development/main-flows) to learn, or contact the official (support@byetool.com) for free assistance.

<Image src="/screenshots/recipe-popup.png" width="80%" height="auto" alt="recipe-popup" center />

Recipes can be self-created, shared publicly, or pinned, so recipes are divided into 3 categories:

- **Public Recipes** - Publicly shared recipes (from any user)
- **My Recipes** - Own recipes
- **Pinned Recipes** - Pinned recipes

<Callout emoji="⚠️">
A publicly shared recipe is not always reliable (officially it is) as it may be modified or deleted by the author.
</Callout>

## Will the recipe fail?

Yes, the recipe may fail! Because the rules for extracting data depend on the HTML structure of the web page, the recipe may fail if the web page is updated.
