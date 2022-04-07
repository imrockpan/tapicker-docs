import Image from "@/components/Image";

# 控制面板（Dashboard）

## 我的配方（My Recipes）

这里显示的是所有您创建的配方，您可以在这里管理它们，例如：`搜索`、`排序`、`编辑`、`删除` 等操作。

<Image src="/screenshots/dashboard-my-recipes.png" alt="dashboard-my-recipes" />

## 钉住的配方（Pinned Recipes）

这里显示的是所有您钉住的配方，您可以在这里管理它们，例如：`搜索`、`排序`、`编辑`、`取消钉住` 等操作。

<Image src="/screenshots/dashboard-pinned-recipes.png" alt="dashboard-pinned-recipes" />

## 页面抓取（Page Crawl）

在这里您可以抓取数据、查看数据、下载数据、清除数据。

### 抓取数据

<Image src="/screenshots/dashboard-page-crawl-a.png" alt="dashboard-page-crawl-a" />

1. **当前连接的选项卡** - 这是必须的，如果提示未连接到 Tab，则某些功能将被限制，例如：`编辑`、`抓取` 等
2. **页面链接** - 如果您是从 Popup 打开的 Dashboard，通常会自动填入当前页面的 URL，当然您也可以在这里修改
3. **配方卡片** - 您可以点击配方卡片来抓取数据或者查看数据
4. **开始抓取** - 目前提供两种方式抓取数据
5. **查看数据** - 点击此处可以查看该配方下的数据、下载数据和清除数据
6. **快速抓取** - 只抓取当前页面的数据，不会自动翻到下一页
7. **自动下一页抓取** - 您可以设定要抓取的页面数，DataPicker 将自动翻页抓取（如果配方不支持翻页，则无法以此方式抓取）
8. **抓取** - 点击此按钮，将开始抓取页面数据
9. **扩展右边面板** - 当您在查看数据时，可以扩展此面板来达到更好的观感

### 查看数据

<Image src="/screenshots/dashboard-page-crawl-b.png" alt="dashboard-page-crawl-b" />

1. **表名** - 这里显示的是表名以及数据行数
2. **列名** - 这里的列名，即配方里的字段名
3. **下载** - 可以将数据导出为 .json，.csv，.xls，.xml 文件
4. **清除** - 清除此配方的数据

## 网络挂钩（Webhook）

您可以在这里配置网络挂钩，将数据自动推送到您的服务器上。

### 查看挂钩信息

可以查看挂钩的请求状态（成功个数和失败个数）以及基本的请求日志。

<Image src="/screenshots/dashboard-webhook-a.png" alt="dashboard-webhook-a" />

1. **添加挂钩** - 点击这里去添加挂钩
2. **挂钩列表** - 这里是已添加的挂钩列表
3. **启用/停用** - 点击这里启用或停用此挂钩
4. **删除** - 点击这里删除此挂钩
5. **清除** - 点击这里清除此挂钩的日志信息

### 添加挂钩

<Image src="/screenshots/dashboard-webhook-b.png" alt="dashboard-webhook-b" />

1. **配方** - 选中某一配方（仅支持公开的配方和自己创建的配方）
2. **回调** - 请求接口（图中的接口无效，仅做演示，勿用）
3. **超时** - 设置超时，这里表示 3 秒无响应，将认定为请求失败
4. **请求头** - JSON 格式，可以设置一些自定义头，以标识请求

## 下载数据（Download）

您可以在这里查看数据和下载数据。

<Image src="/screenshots/dashboard-download.png" alt="dashboard-download" />

1. **搜索** - 您可以在这里搜索配方名称来查看数据
2. **配方卡片** - 点击配方卡片以查看数据
3. **下载** - 可以将数据导出为 .json，.csv，.xls，.xml 文件
4. **清除** - 清除此配方的数据
5. **表名** - 这里显示的是表名以及数据行数
6. **列名** - 这里的列名，即配方里的字段名
7. **扩展右边面板** - 当您在查看数据时，可以扩展此面板来达到更好的观感
