import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Advanced Finder

Open the advanced finder, it looks like the picture below, it only takes a few steps to help you generate the selector. The first time you use it, you may feel unfamiliar, but don't be afraid, once you are familiar with it, you will feel very relaxed!

Here we take [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) as an example to find the row selector of the table `repositories`.

## 1.Select an Element

<Image src="/screenshots/advanced-finder-step1.png" alt="advanced-finder-step1" />

As shown in the picture, the finder will prompt you step by step how to do it?

1. Move your cursor over the element you want to select, it will be styled like `Mark 1`
2. After completing the first step, press the `Shift` key to select the element, and the element will be styled like `Mark 2`

After completing the above steps, it will automatically enter the next step.

## 2.Generate CSS Selector

<Image src="/screenshots/advanced-finder-step2.png" alt="advanced-finder-step2" />

CSS Selectors are composed of `tags`, `IDs`, `classes` of elements. Since HTML is a tree structure, combining multiple element selectors can accurately find a certain element. element.

1. **Tag** - selected element tag
2. **ClassName** - Selected element class name
3. **CSS Selector** - After completing the first two steps, the selector will be automatically generated: `li.repo-list-item`, showing that 10 elements were found
4. **Selected Elements** - The selected elements will be marked as such
5. **Parent** - selects the parent element of this element
6. **Child** - selects the child elements of this element
7. **Prev** - selects the previous sibling of this element
8. **Next** - selects the next sibling of this element
9. **Combine** - Is the combo selector enabled? (default: on)
10. **Unique** - Is the unique selector enabled? (default: off)

<Callout emoji="💡">
Concept Note:

- **Single selector:** `li.repo-list-item` it is a single element selector
- **Combination selector: **`ul.repo-list > li.repo-list-item` It is a multi-element combination selector, which means to find only `li.repo- under `ul.repo-list` list-item`
- **Unique selector: **`ul.repo-list > li.repo-list-item:nth-child(1)` It is a multi-element combination unique selector, if there are multiple identical elements in the page , only the first one is selected

For more information, see the [CSS Selector](/docs/recipe-development/css-selector) chapter.
</Callout>

In this case, `ul.repo-list > li.repo-list-item`, `ul.repo-list > li`, `ul > li.repo-list-item`, or `li.repo-list- Several selectors of item` are available, we can choose one of them.

## 3.View Selected HTML (Optional)

<Image src="/screenshots/advanced-finder-step3.png" alt="advanced-finder-step3" />

The HTML for this card is displayed here, so you can tell if the data you want to extract is included? If not, you may need to look to its parent element, or replace with another element, until you see the data you want.
