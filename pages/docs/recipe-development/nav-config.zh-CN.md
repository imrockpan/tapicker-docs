import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 导航配置

导航本质上就是动作，但是我们需要配置一组动作来告知 DataPicker 如何导航到下一页？这样它才能在合适的时机去执行它们。

我们依然以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 这个页面为例，创建能导航到下一页的动作。

<Image src="/screenshots/recipe-dev-nav-example.png" alt="recipe-dev-nav-example" />

---

开始导航配置动作。

<Image src="/screenshots/recipe-dev-nav.png" alt="recipe-dev-nav" />

这是一个等待 1 秒，然后点击 “Next” 按钮的动作。

1. **动作卡片** - 配置好的动作将呈现在这里并按顺序执行
2. **执行时机** - 选择动作执行的时机及频次，请看 [动作配置 - 执行时机](/zh-CN/docs/recipe-development/action-config#执行时机) 说明
3. **等待时间** - 延迟执行动作，1：表示等待 1 秒后，再执行动作
4. **动作类型** - 选择动作类型，请看 [动作配置 - 动作类型](/zh-CN/docs/recipe-development/action-config#动作类型) 说明

<Callout emoji="💡">
小技巧1：**动作卡片** 点击一下，即可对其编辑，此时卡片右边显示 `EDITING`，再点击一下，则是取消编辑。
</Callout>
