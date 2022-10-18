import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Webhooks Panel

In most cases, we will not use this function. But it's very useful when you need it!

You can set up hooks on any recipe, and when the data extraction is successful, the data will be automatically pushed to your server.

<Image src="https://s2.loli.net/2022/10/18/oCY4bqR7291nptV.png" alt="webhooks-panel" width="50%" height="auto" />

### Add

You can click here to add a new hook

<Image src="https://s2.loli.net/2022/10/18/zVIMWC7dNibUnpa.gif" alt="webhooks-add" width="50%" height="auto" />

<Callout emoji="⚠️">
Unable to create hook? Maybe the plan has expired, this is only supported by the **Pro** plan.
</Callout>

### Edit

You need to select a recipe first, if the target recipe is not found, you can search by keyword.

Then, fill in the Interface (Api), which looks like a link.

Finally, add the request headers (Headers), this is optional.

<Image src="https://s2.loli.net/2022/10/18/kYfMoUuDwbyVl67.png" alt="webhooks-edit" width="50%" height="auto" />

### Format

The requested data format is as follows, taking "@official/shopbop-products" as an example:

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
The data is pushed in batches, if you fetch 3 pages of data, then it will be pushed 3 times.  
In theory, the data will be pushed as soon as the extraction is successful, rather than waiting for the task to complete.
</Callout>
