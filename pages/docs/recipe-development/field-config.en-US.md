import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Field Configuration

Which fields (columns) are in the configuration in the row? and how to extract these fields. This way the DataPicker will work.

Then let's take the [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) page as an example to illustrate!

<Image src="/screenshots/recipe-dev-field-example.png" alt="recipe-dev-field-example" />

As shown in the figure, the red box part is our line, `Line 1`, `Line 2`, `Line 3`, `Line...`, `Line 10` There are a total of 10 lines. Then, what fields do we need to configure in a row? Here, we define the following fields:

- **link** `https://github.com/phonegap/phonegap-start`
- **name** `phonegap/phonegap-start`
- **description** `PhoneGap Hello World app`
- **start_count** `3.4k`
- **language** `JavaScript`

---

Alright, let's start configuring the fields.

<Image src="/screenshots/recipe-dev-field.png" alt="recipe-dev-field" />

1. **Table Name** - This is the table configured in the previous step
2. **Table Fields** - This is the field we have configured for this table
3. **Own Table** - Select the table to which the field belongs (if there are multiple tables, the first one is selected by default)
4. **Field Name** - give the field an appropriate name
5. **default value** - when the field value cannot be found, this value will be assigned
6. **Extraction Method** - How do you choose to extract the data? See below for optional methods
7. **Table row selector** - By default, data is extracted under this row selector, which will be linked with the **belonging table**
8. **Remove Row Selector** - pass don't change unless you want to extract data from off row
9. **Field selector** - [CSS Selector](/docs/recipe-development/css-selector) for fields, here can be _manually entered_ or _generated via advanced finder_
10. **Advanced Finder** - You can use it to find the element selector you need, please go to [Advanced Finder](/docs/recipe-development/advanced-finder) to learn how to use it
11. **HTML Viewer** - You can view the HTML found by the current selector to determine if the selector is correct
12. **Preprocessor** - can process the extracted raw data like a Pipeline, please see the description below for optional processors
13. **Number of elements found** - The number of elements found by the current selector. Can you judge whether the selector is valid or not based on this prompt?

<Callout emoji="💡">
Tip 1: **Table field** Click once to edit it. At this time, `EDITING` is displayed on the right side of the card. Click again to cancel the editing.
</Callout>

<Callout emoji="💡">
Tip 2: Determine if the selector is valid?
- The selected element will be framed by a blue dotted line
- Check if the element is found at `Mark 13` in the figure, 0 means no
- Click on the HTML viewer at `Mark 11` in the image to see if the HTML is displayed
</Callout>

### Extraction Method

There are many extraction methods, which can satisfy your data extraction in different scenarios. Next, we will introduce their usage one by one:

- **getInnerText** - get the text inside the element
- **getTopText** - get the top text inside the element
- **getInnerHTML** - get the HTML inside the element (excluding itself)
- **getOuterHTML** - get the HTML inside the element (including itself)
- **getAnchorURL** - get the link (href attribute of a element)
- **getImageURL** - get image link (src attribute of img element)
- **getAttribute** - Get the value of the specified attribute of the element, for example: `<h1 class="title" foo="bar"...`, `class` and `foo` are both `<h1>` elements properties of
- **getDataset** - Get the data set value of the element, for example: `<h1 data-foo="bar"...`, `foo` is the data set of the `<h1>` element
- **getPageURL** - get the link of the current page
- **getCurrentTime** - Get the current time, stored in UTC (Coordinated Universal Time) format, such as: `2022-04-02T03:13:43.873Z`. If you are in China, the time zone is Dongba District, that is, add 8 hours to China time: `2022-04-02T11:13:43.873Z`

Let's take an example to illustrate, if you have the following HTML:

```html
<div class="card">
    <img class="cover" src="https://img.byetool.com/s0/cover.png" />
    <a class="title" href="https://dp.byetool.com/recipes/007" title="title" data-id="007">Im a title</a>
    <p class="desc">Im a description</p>
    <div class="star">star: <span>123</span></div>
</div>
```

**getInnerText**  
Excuting `getInnerText` on the `div.star` element will get `star: 123`

**getoTopText**  
Excuting `getTopText` on the `div.star` element will get `star:`

**getInnerHTML**  
Excuting `getInnerHTML` on the `div.star` element will result in `star: <span>123</span>`

**getOuterHTML**  
Excuting `getOuterHTML` on the `div.star` element will result in `<div class="star">star: <span>123</span></div>`

**getAnchorURL**  
Excuting `getAnchorURL` on the `a.title` element will return `https://dp.byetool.com/recipes/007`

**getImageURL**  
Excuting `getImageURL` on the `img.cover` element will give you `https://img.byetool.com/s0/cover.png`

**getAttribute**  
Excuting `getAttribute` on the `a.title` element and specifying the attribute `title` will get the `title`

**getDataset**  
Excuting `getDataset` on the `a.title` element and specifying the attribute `id` will result in `007`

### Preprocessor

The preprocessor does some transformations on the extracted raw data and waits to get the desired look. The available processors are as follows:

- **trimSpaces** - Trim leading and trailing spaces from a string, eg: `" foo "` -> `"foo"`
- **getEmail** - extract email from string
- **getDate** - extract date from string
- **toString** - convert to string
- **toNumber** - convert to number
- **toBoolean** - convert to boolean
- **evalCode** - execute the code, it will be executed in the sandbox, it is safe, you can only do some basic operations on the value

**evalCode**  
When the above preprocessors can't meet your needs, you can write some code to do it yourself, for example:

```js
(value) => {
    // do something
    return newValue
}
```

<Callout emoji="💡">
Parameter Description:  
- **value** is the original value extracted or the value processed by other preprocessors
- you must return a new value, otherwise the field will take the default value
</Callout>
