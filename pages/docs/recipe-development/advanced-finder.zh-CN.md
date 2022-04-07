import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 高级查找器

打开高级查找器，它的样子如下图所示，仅需要几个步骤，就能帮您生成选择器。第一次使用，您可能会感到陌生，但请别怕，一旦熟悉之后，就会觉得很轻松！

这里以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 为例，把表格 `repositories` 的行选择器找出来。

## 1.选择一个元素

<Image src="/screenshots/advanced-finder-step1.png" alt="advanced-finder-step1" />

如图中所示，查找器会按步骤提示您如何操作？

1. 将您的光标移动到想要选择的元素上，此时该元素会添加像 `标记 1` 一样的样式
2. 完成第一步后，按下 `Shift` 键，即可选中该元素，此时该元素会添加像 `标记 2` 一样的样式

完成以上步骤后，会自动进入下一步。

## 2.生成 CSS 选择器

<Image src="/screenshots/advanced-finder-step2.png" alt="advanced-finder-step2" />

CSS 选择器是由元素的 `标签（tag）`、`ID（id）`、`类（classes）` 构成，由于 HTML 是树状结构的，组合多个元素选择器可以精确的查找到某个元素。

1. **标签** - 选中元素标签
2. **类名** - 选中元素类名
3. **CSS 选择器** - 完成前两个步骤，将会自动生成选择器：`li.repo-list-item`，显示找到 10 个元素
4. **选中的元素** - 选中的元素将会被标识成这个样子
5. **Parent** - 选择该元素的父元素
6. **Child** - 选择该元素的子元素
7. **Prev** - 选择该元素的上一个兄弟元素
8. **Next** - 选择该元素的下一个兄弟元素
9. **Combine** - 是否开启组合选择器？（默认：开启）
10. **Unique** - 是否开启唯一选择器？（默认：关闭）

<Callout emoji="💡">
概念说明：

- **单选择器：**`li.repo-list-item` 它是一个单元素选择器
- **组合择器：**`ul.repo-list > li.repo-list-item` 它是一个多元素组合选择器，表示只查找 `ul.repo-list` 下的 `li.repo-list-item`
- **唯一择器：**`ul.repo-list > li.repo-list-item:nth-child(1)` 它是一个多元素组合唯一选择器，如果页面中存在多个一样的元素，则只选中第 1 个

更多信息，请查阅 [CSS 选择器](/zh-CN/docs/recipe-development/css-selector) 章节。
</Callout>

在这个案例中，`ul.repo-list > li.repo-list-item`、`ul.repo-list > li`、`ul > li.repo-list-item` 或 `li.repo-list-item` 这个几个选择器都是可用的，我们选择其中之一即可。

## 3.查看选中的 HTML（可选的）

<Image src="/screenshots/advanced-finder-step3.png" alt="advanced-finder-step3" />

这个卡片的 HTML 显示在这里，您可以通过它判断需要提取的数据是否包含在里边？如果没有，您可能需要向它的父元素查找，或者更换为其它元素，直到您看到想要的数据为止。
