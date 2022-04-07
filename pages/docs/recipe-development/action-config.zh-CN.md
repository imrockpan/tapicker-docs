import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 动作配置

动作可以模拟像人一样浏览页面，比如：点击某个按钮，向下滚动页面等。

我们依然以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 这个页面为例，创建一个向下滚动的动作。

<Image src="/screenshots/recipe-dev-action-example.png" alt="recipe-dev-action-example" />

---

开始配置动作。

<Image src="/screenshots/recipe-dev-action.png" alt="recipe-dev-action" />

这是一个等待 1 秒，然后开始滚动，直到页面底部的动作。

1. **动作卡片** - 配置好的动作将呈现在这里并按顺序执行
2. **执行时机** - 选择动作执行的时机及频次，请看下文说明
3. **等待时间** - 延迟执行动作，1：表示等待 1 秒后，再执行动作
4. **动作类型** - 选择动作类型，请看下文说明

<Callout emoji="💡">
小技巧1：**动作卡片** 点击一下，即可对其编辑，此时卡片右边显示 `EDITING`，再点击一下，则是取消编辑。
</Callout>

### 执行时机

执行时机主要有以下 4 个：

- **Before Crawl Every** - 在每次提取数据前执行
- **After Crawl Every** - 在每次提取数据后执行
- **Before Crawl Once** - 在第一次提取数据后执行（即自动翻页时，只有第一页执行）
- **After Crawl Once** - 在第一次提取数据后执行（即自动翻页时，只有第一页执行）

### 动作类型

动作类型主要有以下 6 个：

- **Click an element** - 模拟点击某个元素
- **Hover an element** - 模拟鼠标移动到某个元素上
- **Scroll to element** - 模拟滚动到某个元素上
- **Scroll a distance** - 模拟滚动一段距离（负数表示向上滚动，正数表示向下滚动）
- **Scroll page start** - 模拟滚动到页面顶部
- **Scroll page end** - 模拟滚动到页面底部
