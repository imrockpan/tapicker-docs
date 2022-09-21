import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";
import IconFinder from "@/components/icons/IconFinder";

# 查找器（Finder）

Finder 是用于辅助您生成 [CSS 选择器](/zh-CN/docs/reference/css-selector) 的一个小工具。 在需要时我们只需点击一下 <IconFinder /> 图标就能唤出它。

<Image src="/screenshots/open-finder.gif" alt="open-finder" />

### 选定元素

打开 Finder 后，我们只需在页面中点击某个元素，就能自动生成选择器了。

<Image src="/screenshots/finder-gen-selector.gif" alt="finder-gen-selector" />

### 生成模式

Finder 提供了两种生成模式：`列表模式` 和 `唯一模式`。

我们以 [虾皮商品列表页](https://shopee.sg/search?keyword=dress) 为例来对比一下这两种模式有什么区别？

**列表模式**

> 从选定的元素开始向上查找，直到找到一个列表，然后生成列表选择器。适用于生成行选择器。

我们选定了「商品标题」，Finder 将自动帮我们生成商品列表的选择器：  
`div.shopee-search-item-result__items > div.col-xs-2-4`

<Image src="/screenshots/finder-mode-list-example.png" alt="finder-mode-list-example" />

**唯一模式**

> 生成区域内的唯一选择器。适用于生成列选择器。

选定了「商品标题」后，Finder 将自动帮我们生成该标题的唯一选择器：  
`div:nth-of-type(1) > a > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div`

<Image src="/screenshots/finder-mode-unique-example.png" alt="finder-mode-unique-example" />

### 元素爬行

有时候我们选中的元素并不一定是我们想要的，或者说无法通过鼠标选中它。这时我们就可以通过点击 Finder 上的箭头来爬行。

<Image src="/screenshots/finder-walk-element.gif" alt="finder-walk-element" />

### 禁用选择器

某些选择器特定的，或者是不持久的，它们可能会随时失效，所以我们根据需要，选择性的禁用它们。

- **禁用 ID 选择器（Disable ID）** - 例如：`#foo`、`div#foo`
- **禁用类选择器（Disable Class）** - 例如：`.foo`、`div.foo`
- **禁用属性选择器（Disable Attribute）** - 例如：`[foo]`、`div[foo]`
- **禁用类型选择器（Disable Child Type）** - 例如：`div:nth-of-type(1)`
