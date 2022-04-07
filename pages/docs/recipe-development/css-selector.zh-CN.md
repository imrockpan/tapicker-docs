import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# CSS 选择器

CSS 选择器是用于选择您想要的元素的一套 CSS 规则。常用的选择器及语法如下：

| 选择器                 | 示例                  | 说明                                                             |
| ---------------------- | --------------------- | ---------------------------------------------------------------- |
| .class                 | .foo                  | 选择所有 class="foo"的元素                                       |
| #id                    | #foo                  | 选择所有 id="foo"的元素                                          |
| element                | p                     | 选择所有 &lt;p&gt; 元素                                          |
| element element        | div p                 | 选择 &lt;div&gt; 元素内的所有 &lt;p&gt; 元素                     |
| element > element      | div > p               | 选择所有父级是 &lt;div&gt; 元素的 &lt;p&gt; 元素                 |
| element + element      | div + p               | 选择所有紧跟在 &lt;div&gt; 元素之后的第一个 &lt;p&gt; 元素       |
| [attribute]            | [target]              | 选择所有带有 target 属性元素                                     |
| [attribute=value]      | [target=_blank]       | 选择所有使用 target="\_blank"的元素                              |
| [attribute~=value]     | [title~=flower]       | 选择标题属性包含单词"flower"的所有元素                           |
| [attribute\|=language] | [lang\|=en]           | 选择 lang 属性等于 en，或者以 en- 为开头的所有元素               |
| [attribute^=value]     | a[href^="https"]      | 选择每一个 src 属性的值以"https"开头的元素                       |
| [attribute$=value]     | a[href$=".pdf"]       | 选择每一个 src 属性的值以".pdf"结尾的元素                        |
| [attribute*=value]     | a[href*="foo"]        | 选择每一个 src 属性的值包含子字符串"foo"的元素                   |
| :nth-child(n)          | p:nth-child(2)        | 选择每个 p 元素是其父级的第二个子元素                            |
| :nth-last-child(n)     | p:nth-last-child(2)   | 选择每个 p 元素是其父级的第二个子元素，从最后一个子元素开始计数  |
| :nth-of-type(n)        | p:nth-of-type(2)      | 选择每个 p 元素是其父级的第二个 p 元素                           |
| :nth-last-of-type(n)   | p:nth-last-of-type(2) | 选择每个 p 元素是其父级的第二个 p 元素，从最后一个子元素开始计数 |
| :first-child           | p:first-child         | 选择每个 p 元素是其父级的第一个子元素                            |
| :last-child            | p:last-child          | 选择每个 p 元素是其父级的最后一个子元素                          |

<Callout emoji="💡">
更多内容，请参考：
- [MDN - CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
- [MDN - 开始学习 HTML](https://developer.mozilla.org/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started)
</Callout>
