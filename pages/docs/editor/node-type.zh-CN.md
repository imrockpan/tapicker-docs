import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 节点类型

目前，我们提供了 13 个节点来供您自由组合，以满足各种场景下的数据抓取。

<Image src="/screenshots/node-type.png" alt="node-type" />

### 打开页面

打开您想要抓取数据的起始页，通常我们把这个节点放在第一个。

<Image src="/screenshots/node-open-page.png" alt="node-open-page" />

参数设置：

- 「数据来源」表示从哪里获取页面链接？
  - 来自手动输入 - 固定的，填写好后不再变化。
  - 来自用户输入 - 可变的，由用户自定义页面链接。
  - 来自循环输入 - 可变的，由循环节点自动输入页面链接。
- 「页面链接」需要填写页面链接，可以通过左边的按钮一键填入当前页面链接。
- 「超时」表示超过 20 秒后还未能打开页面，任务将结束。

### 进入循环

「进入循环」节点可以做一些重复的工作，我们把需要重复执行的节点，放在这个节点里边。

<Image src="/screenshots/node-enter-loop-example.png" alt="node-enter-loop-example" width="auto" height="80%" />

就像这样，表示这些节点需要重复执行。

<Image src="/screenshots/node-enter-loop.png" alt="node-enter-loop" width="auto" height="80%" />

参数设置：

- 「循环名称」由系统自动生成，您可以自由修改。
- 「循环类型」
  - 链接列表 - 按链接数量循环，比如：批量抓取详情页。
  - 文本列表 - 按文本条数循环，比如：批量搜索关键词。
  - 循环次数 - 重复执行 n 次
  - 加载次数 - 加载 n 次，比如：自动翻页
- 「数据来源」
  - 来自手动输入 - 固定的，填写好后不再变化。
  - 来自用户输入 - 可变的，由用户自定义输入。例如：由用户决定抓取多少页数据。

### 滚动页面

有一些网站，做了图片懒加载，需要滚动页面，图片才会被加载进来。  
如果您需要抓取图片链接，这个节点就比较重要。

<Image src="/screenshots/node-scroll-page.png" alt="node-scroll-page" />

参数设置：

- 「滚动类型」
  - 滚动到页面底部 - 能满足大部分场景
  - 滚动到元素所在位置 - 例如：滚动到分页所在位置
  - 滚动到指定位置 - 1000 - 表示向下滚动 1000px
  - 滚动到当前位置后再滚动
- 「目标元素」html - 表示整个页面滚动，您可以自定义滚动元素来满足局部滚动。
- 「滚动步长」表示每次滚动的距离
- 「间隔时间」表示每次滚动的间隔时间
- 「偏移量」支持正负值。例如：滚动到 1000px 的位置，偏移量设置 -200px，则最终滚动距离为 800px。

<Callout emoji="💡">
滚动页面可能是耗时的，您可根据实际情况，选择是否停用「滚动页面」节点来提高采集速度。
</Callout>

### 提取数据

这是一个非常重要的节点，它用于告知 DataPicker 如何从页面中提取数据？

<Image src="/screenshots/node-extract-data.png" alt="node-extract-data" />

参数设置：

- 「表格名称」由系统自动生成，您可以自由修改。
- 「存储」如果不勾选，将不会存储抓取到的数据，但可以提供给其它节点引用。

**表格行配置**

行选择器是必须的，当提取详情页数据时，可把整个页面看做是一行，填写为 “body” 即可。

<Image src="/screenshots/node-extract-data-table-rows.png" alt="node-extract-data-table-rows" width="80%" />

参数设置：

- 「目标元素」设定列表目标元素的 CSS 选择器，可通过[高级查找器](/zh-CN/docs/editor/finder)快捷设定
- 「过滤」可以过滤掉不需要的行，例如：广告。
- 「如果未找到行就结束任务」不勾选时，可用于提取可选数据。

**表格列配置**

<Image src="/screenshots/node-extract-data-col-editor.png" alt="node-extract-data-col-editor" width="80%" />

参数设置：

- 「列类别」
  - 从行内提取 - 表示要提取的数据在选定行的区域内
  - 从行外提取 - 表示要提取的数据在选定行的区域外
  - 从自身提取 - 表示要从选定行自身提取数据
  - 从循环中提取 - 表示要从循环信息中引用数据，例如：索引号，当前的值等。
  - 从系统中提取 - 可以引用一些基础字段，例如：页面链接，页面标题，当前时间等。
- 「目标元素」设定列目标元素的 CSS 选择器，可通过[高级查找器](/zh-CN/docs/editor/finder)快捷设定。
- 「提取属性」通常在您选定目标元素后，自动推荐。
- 「默认值」当提取不到数据时，使用默认值。

**表格列管理**

在这里支持对列进行 `排序`、`添加`、`删除`、`编辑`、`预览`、`修剪` 等操作。

<Image src="/screenshots/node-extract-data-manage-cols.png" alt="node-extract-data-manage-cols" width="80%" />

### 加载更多

当您需要加载更多数据时，就会用到此节点，例如：翻页。

<Image src="/screenshots/node-load-more.png" alt="node-load-more" width="80%" />

### 等待一会

当点击页面上的某个元素或提交某个表单时，页面可能会发生变化，这时我们就会用到这个节点。

<Image src="/screenshots/node-wait-moment.png" alt="node-wait-moment" width="80%" />

参数设置：

- 「等待类型」
  - 等待页面 - 表示等待页面直到页面加载或页面变更
  - 等待元素 - 表示等待某个元素出现在页面中或包含某段文本
  - 等待时间 - 表示等待 n 秒

### 输入文本

在输入框里输入文本，例如：输入关键词。

<Image src="/screenshots/node-enter-text.png" alt="node-enter-text" />

### 提交表单

输入好文本后，通常我们需要提交表单。

<Image src="/screenshots/node-submit-form.png" alt="node-submit-form" width="80%" />

参数设置：

- 「目标元素」选定 form 表单内的任意元素，DataPicker 会自动的帮您提交表单。

### 键盘按下

模拟按下指定的键，例如：在 input 元素上按下 `Enter` 键提交表单。

<Image src="/screenshots/node-key-press.png" alt="node-key-press" width="80%" />

### 点击元素

模拟点击页面中的某个元素

<Image src="/screenshots/node-click-element.png" alt="node-click-element" width="80%" />

### 悬浮元素

与「点击元素」类似

### 选择选项

选择某个选项

<Image src="/screenshots/node-select-option.png" alt="node-select-option" width="80%" />

### 刷新页面

刷新页面

<Image src="/screenshots/node-refresh-page.png" alt="node-refresh-page" width="80%" />
