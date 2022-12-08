# 常用的规则

### 数字

| 规则            | 说明             | 示例       |
| --------------- | ---------------- | ---------- |
| `\d+`           | 整数             | 1, 2, 3    |
| `\d+\.\d+`      | 小数             | 1.1, 1.2   |
| `\d+(\.\d+)?`   | 整数 + 小数      | 1, 1.1     |
| `-?\d+(\.\d+)?` | 正/负整数 + 小数 | -1, 1, 1.2 |

### 语言

| 规则               | 说明 | 示例 |
| ------------------ | ---- | ---- |
| `[a-zA-Z]+`        | 英文 | abc  |
| `[\u4e00-\u9fa5]+` | 中文 | 汉语 |

### JSON

| 规则                     | 说明       | 示例                                    |
| ------------------------ | ---------- | --------------------------------------- |
| `(?<="name":)[^,]+(?=,)` | JSON Value | \{"name":byetool, "age":18\} -> byetool |

### 信用卡

| 规则                         | 说明                    | 示例 |
| ---------------------------- | ----------------------- | ---- |
| `4[0-9]{12}(?:[0-9]{3})?`    | Visa 信用卡             | -    |
| `3[47][0-9]{13}`             | American Express 信用卡 | -    |
| `([1-9]{1})(\d{15}\|\d{18})` | 中国银行卡号            | -    |

### 电话号码

| 规则                       | 说明       | 示例                              |
| -------------------------- | ---------- | --------------------------------- |
| `\(\d{3}\) \d{3}-?\d{4}`   | 美国座机号 | (562) 988-1688<br />(562) 9881688 |
| `\d{3}-\d{8}\|\d{4}-\d{7}` | 中国座机号 | 0511-4405222<br />021-87888822    |
| `1[3456789]\d{9}`          | 中国手机号 | 18623236565                       |

### 邮编

| 规则                 | 说明     | 示例                |
| -------------------- | -------- | ------------------- |
| `[1-9]\d{5}(?!\d)`   | 中国邮编 | 516285              |
| `\d{5}-\d{4}\|\d{5}` | 美国邮编 | 90807 or 92064-3404 |

### 邮箱

| 规则                                          | 说明  | 示例                |
| --------------------------------------------- | ----- | ------------------- |
| `\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*` | Email | support@byetool.com |

### 日期

| 规则                                            | 说明     | 示例                |
| ----------------------------------------------- | -------- | ------------------- |
| `\d{1,2}-\d{1,2}-\d{4}`                         | Date     | 10/24/2022          |
| `\d{4}-\d{1,2}-\d{1,2}`                         | Date     | 2022-10-24          |
| `\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}` | Datetime | 2022-10-24 12:08:16 |

### 其它

| 规则                                         | 说明        | 示例                      |
| -------------------------------------------- | ----------- | ------------------------- |
| `https?://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?` | URL         | https://www.tapicker.com/ |
| `\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}`         | IP Address  | 192.168.1.1               |
| `(?:[0-9a-fA-F]{2}\:){5}[0-9a-fA-F]{2}`      | MAC Address | 00:1b:63:84:45:e6         |
| `<(\S*?)[^>]*>.*?\|<.*? />`                  | HTML        | \<p id="test"\>\<p\/\>    |