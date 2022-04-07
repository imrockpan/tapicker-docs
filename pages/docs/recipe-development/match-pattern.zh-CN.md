import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# 匹配模式

匹配模式是用于找到可用配方的 URL 规则。它的由以下三个部分构成：

- **协议（scheme）**
- **主机（host）**
- **路径（path）**

基本语法如下：

```js
<url-pattern> := <scheme>://<host><path>
----------------------------------------
<scheme> := '*' | 'http' | 'https'
<host> := '*' | '*.' <any char except '/' and '*'>+
<path> := '/' <any chars>
```

以 `https://datapicker.byetool.com/signup` 为例，拆解如下：

```yaml
scheme: https
host: datapicker.byetool.com
path: /signup
```

<Callout emoji="💡">
**匹配模式** 非常关键，如果设置不正确，会导致配方无法匹配出来。
</Callout>

### 协议（scheme）

协议的可选值只能是以下几种形式之一：

```bash
* | http | https
```

### 主机（host）

主机的可选值只能是以下几种形式之一：

```bash
* | *.<topdomain> | <domain>
```

### 路径（path）

路径必须以 `/` 开头，后边可接 `*` 或 `其它任何字符`。

```bash
/* | /<any chars>
```

### 有效的例子

有可能上边的概念描述太多枯燥，那我们来看一些例子吧，这样更有助于理解。

| 匹配模式                                                                      | 匹配                                                                                                                  | 不匹配                                                                                              |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `*://*/*`<br/>匹配任何 URL                                                    | `http://byetool.com/`<br/>`https://www.google.com/`<br/>`https://www.reddit.com/new/`                                 | `resource://a/b/c/`<br/>原因：不是一个可用的 URL                                                    |
| `*://*.byetool.com/*`<br/>匹配 byetool.com 及其任何子域下的任何协议、任何路径 | `http://byetool.com/`<br/>`https://sub.byetool.com/`<br/>`https://sub.byetool.com/a`                                  | `https://www.google.com/`<br/>原因：不匹配主机                                                      |
| `*://byetool.com/*`<br/>匹配 byetool.com 下的任何协议、任何路径               | `http://byetool.com/`<br/>`https://byetool.com/`<br/>`https://byetool.com/a`                                          | `https://a.byetool.com/`<br/>`https://www.google.com/`<br/>原因：不匹配主机                         |
| `https://byetool.com/*`<br/>匹配 byetool.com 下的任何路径                     | `https://byetool.com/`<br/>`https://byetool.com/a`                                                                    | `http://byetool.com/`<br/>原因：不匹配协议                                                          |
| `https://byetool.com/a/`<br/>匹配 byetool.com 下的指定路径                    | `https://byetool.com/a`<br/>`https://byetool.com/a/`                                                                  | `https://byetool.com/`<br/>原因：不匹配路径<br/>`https://byetool.com/a?b=c`<br/>原因：带 query 参数 |
| `https://byetool.com/a*`<br/>匹配 byetool.com 下的以 a 开头的任何路径         | `https://byetool.com/a`<br/>`https://byetool.com/a?b=c`<br/>`https://byetool.com/abc`<br/>`https://byetool.com/a/b/c` | `https://byetool.com/b`<br/>原因：不匹配路径                                                        |
| `https://byetool.com/*/a/*`<br/>匹配 byetool.com 下的包含 a 的任何路径        | `https://byetool.com/b/a/c`<br/>`https://byetool.com/b/a/c?d=e`                                                       | `https://byetool.com/b/c/d`<br/>原因：不匹配路径                                                    |
| `https://byetool.com/?a=*`<br/>匹配 byetool.com 下的 query 包含 a 的路径      | `https://byetool.com/?a=b`<br/>`https://byetool.com/?a=b&c=d`                                                         | `https://byetool.com/b/c/d`<br/>原因：不匹配路径                                                    |

### 无效的例子

这里一些无效的例子，请不要使用哟。

| 匹配模式                    | 原因                              |
| --------------------------- | --------------------------------- |
| `resource://path/`          | 无效的 URL                        |
| `https://byetool.com`       | 没有指定路径                      |
| `https://datapicker.*.com/` | 主机中的 `*` 必须在开头           |
| `https://*byetool.com/`     | 主机中的 `*` 后必须跟 `.`         |
| `http*://byetool.com/`      | 协议只能是 `*` 或 `http`、`https` |
| `*://*/`                    | 空路径，这应该是 `*://*/*`        |
