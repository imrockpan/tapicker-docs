import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 挂钩面板 (Webhook)

大部分情况下，我们并不会用到此功能。但当您需要时，就会觉得它非常有用！

您可以对任何配方设置挂钩，当数据抓取成功后，就会自动的把数据推送到您的服务器。

<Image src="https://s2.loli.net/2022/10/18/oCY4bqR7291nptV.png" alt="webhooks-panel" width="50%" height="auto" />

### 添加

您可以点击这里添加一个新的挂钩

<Image src="https://s2.loli.net/2022/10/18/zVIMWC7dNibUnpa.gif" alt="webhooks-add" width="50%" height="auto" />

<Callout emoji="⚠️">
无法创建挂钩？可能会员过期了，这是 **专业版(Pro)** 才支持的功能。
</Callout>

### 编辑

您需要先选择一个配方，如果没有找到目标配方，可以通过关键词搜索。

然后，填写 接口 (Api)，它看起来像一条链接。

最后，添加 请求头 (Headers)，这是可选的。

<Image src="https://s2.loli.net/2022/10/18/kYfMoUuDwbyVl67.png" alt="webhooks-edit" width="50%" height="auto" />

### 格式

请求的数据格式如下，以「@official/shopbop-products」为例：

```json
{
  "recipeName": "@official/shopbop-products",
  "tableName": "T391",
  "fields": [
    { "id": "cb3a5adda", "name": "title" },
    { "id": "c2f7a2473", "name": "brand" },
    { "id": "c7a768d57", "name": "price" },
    { "id": "c6eb7913d", "name": "cover" },
    { "id": "c45bf5749", "name": "link" }
  ],
  "rows": [
    {
      "cb3a5adda": "Lili Jeans",
      "c2f7a2473": "Hellessy",
      "c7a768d57": "$490.00",
      "c6eb7913d": "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/hlles/hlles301461f83a/hlles301461f83a_1665705468020_2-0._QL90_UX250_.jpg",
      "c45bf5749": "https://www.shopbop.com/lili-jean-hellessy/vp/v=1/1540731055.htm?os=false&breadcrumb=Shop+Women%27s%3EClothing%3EJeans&folderID=13377&colorSin=2092290718&fm=other-shopbysize&pf_rd_p=PLACEMENT_ID_PLACEHOLDER&pf_rd_r=IMPRESSION_REQUEST_ID_PLACEHOLDER&ref_=SB_PLP_PDP_W_CLOTH_DENIM_13377_DB_1"
    },
    {
      "cb3a5adda": "Sofie Splice Jeans",
      "c2f7a2473": "Rag & Bone",
      "c7a768d57": "$325.00",
      "c6eb7913d": "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ragbo/ragbo464081ea91/ragbo464081ea91_1665685197870_2-0._QL90_UX250_.jpg",
      "c45bf5749": "https://www.shopbop.com/sofie-splce-jean-rag-bone/vp/v=1/1585870626.htm?os=false&breadcrumb=Shop+Women%27s%3EClothing%3EJeans&folderID=13377&colorSin=2079425462&fm=other-shopbysize&pf_rd_p=PLACEMENT_ID_PLACEHOLDER&pf_rd_r=IMPRESSION_REQUEST_ID_PLACEHOLDER&ref_=SB_PLP_PDP_W_CLOTH_DENIM_13377_NB_2"
    }
  ]
}
```

<Callout emoji="💡">
数据是分批推送的，假设您要抓取 3 页数据，那么就会推送 3 次。  
理论上是，数据一旦提取成功就会推送，而不是等到任务完成。
</Callout>
