import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 表格配置

设置表格名称以及行选择器，让 DataPicker 知道从哪个区域提取数据？以及把数据存储到哪张表？

嗯~，这可能有点儿抽象，那我们就以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 这个页面来说明一下吧！

<Image src="/screenshots/recipe-dev-tables-example.png" alt="recipe-dev-tables-example" />

如图所示，我们把粉色区域认定是一个表格，并命名为：`repositories`。然后红框标记处是表格的行，这个页面有共有 10 行数据，`行 1`、`行 2`、`行 3`、`行...`、`行 10`。

---

这样是不是就好理解了呢？OK，接下来我们开始配置表格。

<Image src="/screenshots/recipe-dev-tables.png" alt="recipe-dev-tables" />

1. **表格卡片** - 配置好的表格将显示在这里（一个页面可以配置多个表格，如果需要的话）
2. **表格名称** - 给表格起个贴切的名称，让您一眼就知道它是干嘛的
3. **行选择器** - 表格行的 [CSS 选择器](/zh-CN/docs/recipe-development/css-selector)，您可以 _手动输入_ 或 _通过高级查找器生成_
4. **高级查找器** - 您可以通过它来找到需要的元素选择器，请前往 [高级查找器](/zh-CN/docs/recipe-development/advanced-finder) 学习使用
5. **HTML 查看器** - 可以查看当前选择器找到的 HTML 以判断选择器是否正确
6. **找到的元素个数** - 当前选择器找到的元素个数，可根据此提示来判断选择器是否生效？

<Callout emoji="💡">
小技巧1：**表格卡片** 点击一下，即可对其编辑，此时卡片右上方显示 `EDITING`，再点击一下，则是取消编辑。
</Callout>

<Callout emoji="💡">
小技巧2：判断选择器是否有效？
- 被选中的元素会用蓝色虚线框起来
- 查看图中 `标记 6` 处是否找到元素，0 则表示没有
- 点击图中 `标记 5` 处的 HTML 查看器，看是否显示 HTML
</Callout>
