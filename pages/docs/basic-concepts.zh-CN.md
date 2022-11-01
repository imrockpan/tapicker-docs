import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 基础概念

## 什么是配方？

配方是 Tapicker 用于提取数据的一组动作指令集合。

当您访问到某个网站时，DataPicker 会自动帮您匹配出可用的配方。如果没有匹配到，则意味着您只能自己创建配方了！如果您在创建配方时，遇到困难，您可以前往 [视频教程](/zh-CN/docs/video-tutorial) 学习，或者联系官方（support@tapicker.com）免费协助创建。

<Image src="/screenshots/recipe-popup.png" alt="recipe-popup" />

配方可以自行创建，可以被公开分享，也可以被钉住，因此配方分为 3 类：

- **Public Recipes** - 即公开分享的配方（来自于任何用户）
- **Pinned Recipes** - 即自己钉住的配方（常用的配方建议钉住它）
- **My Recipes** - 即自己创建的配方（您可以在这里管理自己的配方）

<Callout emoji="⚠️">
公开分享的配方（Public Recipes）并不总是可靠的，因为它有可能被作者修改或删除。
</Callout>

## 配方元数据含义？

正常状态下的配方卡片

<Image src="/screenshots/recipe-item-normal.png" alt="recipe-popup-normal" width="80%" height="auto" />

1. 表示该配方是“公开的”或“私有的”
2. 表示有多少人钉住了该配方
3. 表示使用该配方抓取到数据行数
4. 表示最近使用该配方的时间

## 配方支持哪些操作？

悬浮状态下的配方卡片

<Image src="/screenshots/recipe-item-hover.png" alt="recipe-popup-hover" width="80%" height="auto" />

1. 抓取 - 使用此配方从页面中抓取数据
2. 钉住/取消 - 钉住此配方或者取消钉住
3. 复制 - 复制此配方（需要 Pro 会员）
4. 编辑 - 编辑此配方（只能编辑自己的配方）
5. 删除 - 删除此配方（只能删除自己的配方）

## 配方会失效吗？

是的，配方可能会失效！因为提取数据的规则取决于网页的 HTML 结构，如果网页更新了，配方就有可能失效。
