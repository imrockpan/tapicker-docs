import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";
import IconFinder from "@/components/icons/IconFinder";

# Finder

Finder is a small tool to help you generate [CSS selectors](/docs/reference/css-selector). We can call it up with a single click of the <IconFinder /> icon when needed.

<Image src="/screenshots/open-finder.gif" alt="open-finder" />

### Selected Element

After opening the Finder, we only need to click on an element in the page, and the selector can be automatically generated.

<Image src="/screenshots/finder-gen-selector.gif" alt="finder-gen-selector" />

### Generate Mode

Finder provides two modes: `List Mode` and `Unique Mode`.

Let's take [Shopee Product List Page](https://shopee.sg/search?keyword=dress) as an example to compare the difference between these two modes?

**List Mode**

> Look up from the selected element until a list is found, then generate a list selector. Suitable for generating row selectors.

We have selected the "Product Title", and the Finder will automatically generate the selector for the product list for us:  
`div.shopee-search-item-result__items > div.col-xs-2-4`

<Image src="/screenshots/finder-mode-list-example.png" alt="finder-mode-list-example" />

**Unique Mode**

> Generates a unique selector within a region. Suitable for generating column selectors.

Once the "Product Title" is selected, the Finder will automatically generate a unique selector for that title for us:  
`div:nth-of-type(1) > a > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div`

<Image src="/screenshots/finder-mode-unique-example.png" alt="finder-mode-unique-example" />

### Element Walk

Sometimes the element we select is not necessarily what we want, or it cannot be selected with the mouse. At this point we can walk by clicking the arrow on the Finder.

<Image src="/screenshots/finder-walk-element.gif" alt="finder-walk-element" />

### Disable Selector

Some selectors are specific or non-persistent, they may expire at any time, so we selectively disable them as needed.

- **Disable ID** - e.g. `#foo`、`div#foo`
- **Disable Class** - e.g. `.foo`、`div.foo`
- **Disable Attribute** - e.g. `[foo]`、`div[foo]`
- **Disable Child Type** - e.g. `div:nth-of-type(1)`
