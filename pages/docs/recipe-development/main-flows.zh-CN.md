import Image from "@/components/Image";

# 主要流程

配方编辑器是 DataPicker 的核心功能之一，它是完全可视化的，让您无需编码，就能轻松的为任何网站创建配方。

<Image src="/screenshots/recipe-dev-step.png" alt="recipe-dev-step" />

主要流程如下：

1. **配方基础信息** - 让您能方便的找到配方
2. **配置表格信息** - 让 DataPicker 知道从哪提取数据？
3. **配置字段信息** - 让 DataPicker 知道要提取哪些数据？
4. **配置一组动作（可选的）**- 在提取数据之前需要做什么？
5. **配置一组导航动作（可选的）**- 如何导航到下一页？（导航本质上也是动作）

接下来，我们将以 [Github Search Results](https://github.com/search?q=hello+world&type=Repositories) 为例，带您一步一步的创建自己的配方。

<Image src="/screenshots/github-search-results.png" alt="github-search-results" />

OK，[让我们开始吧](/zh-CN/docs/recipe-development/basic-info)！
