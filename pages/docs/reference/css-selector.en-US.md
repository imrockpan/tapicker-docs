import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# CSS Selector

The CSS selector is a set of CSS rules for selecting the elements you want. Commonly used selectors and syntax are as follows:

| Selector               | Example               | Comment                                                                                        |
| ---------------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| .class                 | .foo                  | Selects all elements with class="foo"                                                          |
| #id                    | #foo                  | selects all elements with id="foo"                                                             |
| element                | p                     | Select all &lt;p&gt; elements                                                                  |
| element element        | div p                 | Selects all &lt;p&gt; elements within &lt;div&gt; elements                                     |
| element > element      | div > p               | Selects all &lt;p&gt; elements whose parent is a &lt;div&gt; element                           |
| element + element      | div + p               | Selects all the first &lt;p&gt; elements immediately after the &lt;div&gt; element             |
| [attribute]            | [target]              | Selects all elements with target attribute                                                     |
| [attribute=value]      | [target=_blank]       | Selects all elements using target="\_blank"                                                    |
| [attribute~=value]     | [title~=flower]       | Selects all elements whose title attribute contains the word "flower"                          |
| [attribute\|=language] | [lang\|=en]           | Selects all elements with a lang attribute equal to en, or starting with en-                   |
| [attribute^=value]     | a[href^="https"]      | Selects every element whose href attribute value starts with "https"                           |
| [attribute$=value]     | a[href$=".pdf"]       | Selects each element whose href attribute value ends with ".pdf"                               |
| [attribute*=value]     | a[href*="foo"]        | Selects each element whose href attribute value contains the substring "foo"                   |
| :nth-child(n)          | p:nth-child(2)        | selects each p element that is the second child of its parent                                  |
| :nth-last-child(n)     | p:nth-last-child(2)   | Selects each p element that is the second child of its parent, counting from the last child    |
| :nth-of-type(n)        | p:nth-of-type(2)      | Selects the second p element that each p element is its parent                                 |
| :nth-last-of-type(n)   | p:nth-last-of-type(2) | Select each p element that is the second p element of its parent, counting from the last child |
| :first-child           | p:first-child         | selects each p element that is the first child of its parent                                   |
| :last-child            | p:last-child          | selects each p element that is the last child of its parent                                    |

<Callout emoji="💡">
For more information, please refer to:
- [MDN - CSS Selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
- [MDN - Learning HTML](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started)
</Callout>
