import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 基础概念

## 什么是配方？

配方是 DataPicker 用于提取数据的一组动作指令集合。

当您访问到某个网站时，DataPicker 会自动帮您匹配出可用的配方。如果没有匹配到，则意味着您只能自己创建配方了！如果您在创建配方时，遇到困难，您可以前往 [配方开发指南](/zh-CN/docs/recipe-development/main-flows) 学习， 或者联系官方（support@byetool.com）免费协助创建。

<Image src="/screenshots/recipe-popup.png" width="80%" height="auto" alt="recipe-popup" center />

配方可以自行创建，可以被公开分享，也可以被钉住，因此配方分为 3 类：

- **Public Recipes** - 即公开分享的配方（来自于任何用户）
- **My Recipes** - 即自己创建的配方
- **Pinned Recipes** - 即自己钉住的配方

<Callout emoji="⚠️">
公开分享的配方（Public Recipes）并不总是可靠的（官方是可靠的），因为它有可能被作者修改或删除。
</Callout>

## 配方会失效吗？

是的，配方可能会失效！因为提取数据的规则取决于网页的 HTML 结构，如果网页更新了，则配方就可能会失效。
