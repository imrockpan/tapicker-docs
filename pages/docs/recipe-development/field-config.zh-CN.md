import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 字段配置

配置行里边有哪些字段（列）？以及这些字段的提取方式。这样 DataPicker 就可以工作了。

那我们还是以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 这个页面为例来说明一下！

<Image src="/screenshots/recipe-dev-field-example.png" alt="recipe-dev-field-example" />

如图所示，红框部分是我们的行，`行 1`、`行 2`、`行 3`、`行...`、`行 10` 共 10 行。然后，我们要配置一行里边有哪些字段？在这里，我们定义了如下字段：

- **link (仓库链接):** `https://github.com/phonegap/phonegap-start`
- **name (仓库名称):** `phonegap/phonegap-start`
- **description (仓库描述):** `PhoneGap Hello World app`
- **start_count (仓库 Star 个数):** `3.4k`
- **language (仓库语言):** `JavaScript`

---

好啦，接下来我们开始配置字段。

<Image src="/screenshots/recipe-dev-field.png" alt="recipe-dev-field" />

1. **表格名称** - 这是上一步配置好的表格
2. **表格字段** - 这是我们对该表格配置好的字段
3. **所属表格** - 选择该字段所属的表格（如果有多个表格，默认选中第一个）
4. **字段名称** - 给字段起个贴切的名称
5. **默认值** - 当无法找到字段值时，将赋予该值
6. **提取方法** - 选择以何种方式提取数据？可选方法请看下文说明
7. **表格行选择器** - 默认在该行选择器下提取数据，会跟 **所属表格** 联动
8. **移除行选择器** - 通过不要更改，除非您要从行外提取数据
9. **字段选择器** - 字段的 [CSS 选择器](/zh-CN/docs/recipe-development/css-selector)，这里可以 _手动输入_ 或 _通过高级查找器生成_
10. **高级查找器** - 您可以通过它来找到需要的元素选择器，请前往 [高级查找器](/zh-CN/docs/recipe-development/advanced-finder) 学习使用
11. **HTML 查看器** - 可以查看当前选择器找到的 HTML 以判断选择器是否正确
12. **预处理器** - 可以像 Pipeline 一样处理提取到的原始数据，可选处理器请看下文说明
13. **找到的元素个数** - 当前选择器找到的元素个数，可根据此提示来判断选择器是否生效？

<Callout emoji="💡">
小技巧1：**表格字段** 点击一下，即可对其编辑，此时卡片右边显示 `EDITING`，再点击一下，则是取消编辑。
</Callout>

<Callout emoji="💡">
小技巧2：判断选择器是否有效？
- 被选中的元素会用蓝色虚线框起来
- 查看图中 `标记 13` 处是否找到元素，0 则表示没有
- 点击图中 `标记 11` 处的 HTML 查看器，看是否显示 HTML
</Callout>

### 提取方法

提取方法有很多，能满足您不同场景的数据提取，接下来，我们一一介绍它们的用法：

- **getInnerText** - 获取该元素里边的文本
- **getTopText** - 获取该元素里边的顶层文本
- **getInnerHTML** - 获取该元素里边的 HTML（不包含自身）
- **getOuterHTML** - 获取该元素里边的 HTML（包含自身）
- **getAnchorURL** - 获取链接（a 元素的 href 属性）
- **getImageURL** - 获取图片链接（img 元素的 src 属性）
- **getAttribute** - 获取该元素指定属性的值，例如：`<h1 class="title" foo="bar"...`，`class` 和 `foo` 都是 `<h1>` 元素的属性
- **getDataset** - 获取该元素的数据设定值，例如：`<h1 data-foo="bar"...`，`foo` 就是 `<h1>` 元素的数据设定
- **getPageURL** - 获取当前页面的链接
- **getCurrentTime** - 获取当前时间，存储为 UTC（协调世界时）格式，如：`2022-04-02T03:13:43.873Z`。如果您在中国，时区为东八区，即再加 8 小时才是中国时间：`2022-04-02T11:13:43.873Z`

举个例子说明一下哈，假如有如下 HTML：

```html
<div class="card">
    <img class="cover" src="https://img.byetool.com/s0/cover.png" />
    <a class="title" href="https://dp.byetool.com/recipes/007" title="标题" data-id="007">我是一个标题</a>
    <p class="desc">我是一段描述</p>
    <div class="star">star: <span>123</span></div>
</div>
```

**getInnerText**  
对 `div.star` 元素执行 `getInnerText` 将得到 `star: 123`

**getoTopText**  
对 `div.star` 元素执行 `getTopText` 将得到 `star:`

**getInnerHTML**  
对 `div.star` 元素执行 `getInnerHTML` 将得到 `star: <span>123</span>`

**getOuterHTML**  
对 `div.star` 元素执行 `getOuterHTML` 将得到 `<div class="star">star: <span>123</span></div>`

**getAnchorURL**  
对 `a.title` 元素执行 `getAnchorURL` 将得到 `https://dp.byetool.com/recipes/007`

**getImageURL**  
对 `img.cover` 元素执行 `getImageURL` 将得到 `https://img.byetool.com/s0/cover.png`

**getAttribute**  
对 `a.title` 元素执行 `getAttribute` 并指定属性 `title` 将得到 `标题`

**getDataset**  
对 `a.title` 元素执行 `getDataset` 并指定属性 `id` 将得到 `007`

### 预处理器

预处理器是对提取到的原始数据做一些转换，并等得到想要的样子。可用的处理器如下：

- **trimSpaces** - 去除字符串的头和尾空格，例如：`" foo "` -> `"foo"`
- **getEmail** - 从字符串中提取邮箱
- **getDate** - 从字符串中提取日期
- **toString** - 转换为字符串
- **toNumber** - 转换为数字
- **toBoolean** - 转换为布尔值
- **evalCode** - 执行代码，将在 Sandbox 里执行，这是安全的，您只能对值做一些基本操作

**evalCode**  
当以上预处理器不能满足您的需求时，您可以自行写一些代码来完成，例如：

```js
(value) => {
    // do something
    return newValue
}
```

<Callout emoji="💡">
参数说明：  
- **value** 即提取到的原始值 或 经过其它预处理器处理过的值
- 您必须返回一个新的值，否则该字段将采纳 默认值
</Callout>
