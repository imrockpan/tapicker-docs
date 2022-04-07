import Callout from "nextra-theme-docs/callout";
import Image from "@/components/Image";

# Match Patterns

Match patterns are URL rules used to find available recipes. It consists of the following three parts:

- **scheme**
- **host**
- **path**

The basic syntax is as follows:

```js
<url-pattern> := <scheme>://<host><path>
----------------------------------------
<scheme> := '*' | 'http' | 'https'
<host> := '*' | '*.' <any char except '/' and '*'>+
<path> := '/' <any chars>
```

Taking `https://datapicker.byetool.com/signup` as an example, the disassembly is as follows:

```yaml
scheme: https
host: datapicker.byetool.com
path: /signup
```

<Callout emoji="💡">
**Match Patterns** is very critical, if it is set incorrectly, the recipe will not be matched.
</Callout>

### scheme (protocol)

The optional value of the scheme can only take one of the following forms:

```bash
* | http | https
```

### host

The optional value for host can only take one of the following forms:

```bash
* | *.<topdomain> | <domain>
```

### path

The path must start with `/` followed by `*` or `any other character`.

```bash
/* | /<any chars>
```

### working example

Maybe the above concept descriptions are too boring, so let's look at some examples, which are more helpful to understand.

| match pattern                                                                                        | matched                                                                                                               | mismatch                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `*://*/*`<br/>matches any URL                                                                        | `http://byetool.com/`<br/>`https://www.google.com/`<br/>`https://www.reddit.com/new/`                                 | `resource://a/b/c/`<br/>Reason: not a valid URL                                                                   |
| `*://*.byetool.com/*`<br/>matches any protocol, any path under byetool.com and any of its subdomains | `http://byetool.com/`<br/>`https://sub.byetool.com/`<br/>`https://sub.byetool.com/a`                                  | `https://www.google.com/`<br/>Reason: mismatch host                                                               |
| `*://byetool.com/*`<br/>Match any protocol, any path under byetool.com                               | `http://byetool.com/`<br/>`https://byetool.com/`<br/>`https://byetool.com/a`                                          | `https://a.byetool.com/`<br/>`https://www.google.com/`<br/>Reason: mismatch host                                  |
| `https://byetool.com/*`<br/>matches any path under byetool.com                                       | `https://byetool.com/`<br/>`https://byetool.com/a`                                                                    | `http://byetool.com/`<br/>Reason: mismatch protocol                                                               |
| `https://byetool.com/a/`<br/>Match the specified path under byetool.com                              | `https://byetool.com/a`<br/>`https://byetool.com/a/`                                                                  | `https://byetool.com/`<br/>Reason: mismatch path<br/>`https://byetool.com/a?b=c`<br/>Reason: with query parameter |
| `https://byetool.com/a*`<br/>matches any path starting with a under byetool.com                      | `https://byetool.com/a`<br/>`https://byetool.com/a?b=c`<br/>`https://byetool.com/abc`<br/>`https://byetool.com/a/b/c` | `https://byetool.com/b`<br/>Reason: mismatch path                                                                 |
| `https://byetool.com/*/a/*`<br/>matches any path containing a under byetool.com                      | `https://byetool.com/b/a/c`<br/>`https://byetool.com/b/a/c?d=e`                                                       | `https://byetool.com/b/c/d`<br/>Reason: mismatch path                                                             |
| `https://byetool.com/?a=*`<br/>Match the path containing a in query under byetool.com                | `https://byetool.com/?a=b`<br/>`https://byetool.com/?a=b&c=d`                                                         | `https://byetool.com/b/c/d`<br/>Reason: mismatch path                                                             |

### invalid example

Here are some invalid examples, please don't use them.

| match pattern               | reason                                          |
| --------------------------- | ----------------------------------------------- |
| `resource://path/`          | Invalid URL                                     |
| `https://byetool.com`       | no path specified                               |
| `https://datapicker.*.com/` | `*` in host must start                          |
| `https://*byetool.com/`     | `*` in host must be followed by `.`             |
| `http*://byetool.com/`      | The protocol can only be `*` or `http`, `https` |
| `*://*/`                    | empty path, this should be `*://*/*`            |
