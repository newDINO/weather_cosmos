# 星际天气 · Exoweather

把太阳系气候档案做成手机天气 App：为 **8 颗行星 + 冥王星 + 6 颗著名卫星** 各生成一张天气页面。

> 这不是真实天气预报。温度、气压与风来自 NASA / ESA 的公开观测；逐时曲线与天气事件是基于这些参数的确定性模拟。

## 第一版包含什么

- 15 个天体页面：水星、金星、地球、火星、木星、土星、天王星、海王星、冥王星、月球、木卫二、木卫一、泰坦、土卫二、海卫一
- 每页：当前天气、24 段本地时逐时预报、未来 7 天、8 项详情、真实观测时间线与来源
- 首页天体目录、方法说明页
- 手机优先、桌面自适应的响应式布局
- 静态生成，无前端框架、无客户端 JS、无追踪
- GitHub Actions 自动部署到 GitHub Pages

第一版刻意没有做：实时数据、单位切换、搜索筛选、对比页、动画粒子、定时重建。留到后续迭代。

## 技术

- [Astro](https://astro.build/) 7 · 静态生成
- TypeScript · 数据与模拟引擎按模块拆分
- 原生 CSS（渐变、玻璃拟态卡片、内联 SVG 图标）

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 输出到 dist/
npm run preview
npm run check      # 类型与 Astro 检查
```

## 项目结构

```
src/
├─ data/bodies/          # 每个天体一个数据模块（真实观测参数 + 气候权重）
│  ├─ mars.ts
│  ├─ titan.ts
│  └─ index.ts           # 天体注册表、顺序、分组
├─ lib/
│  ├─ types.ts           # 数据结构定义
│  ├─ conditions.ts      # 天气类型目录（图标、文案、颜色）
│  ├─ random.ts          # 种子随机数
│  ├─ simulate.ts        # 预报生成引擎
│  ├─ format.ts          # 日期/温度格式
│  └─ site.ts            # 站点常量与 base path
├─ components/           # 天气图标、星球球体、预报卡片、导航等
├─ layouts/BaseLayout.astro
├─ pages/
│  ├─ index.astro
│  ├─ weather/[slug].astro
│  └─ about.astro
└─ styles/global.css
```

### 加一个新天体

1. 复制 `src/data/bodies/moon.ts`，改成新天体的真实参数与气候权重。
2. 在 `src/data/bodies/index.ts` 中导入并加入 `BODIES`（记得调整展示顺序）。
3. 运行 `npm run build`；页面、首页卡片与上一页/下一页会自动生成。

模拟引擎不需要改：只认 `Body` 接口。

## 预报是怎么来的

每个天体提供平均温度、昼夜振幅、典型风速、气压、湿度、太阳辐照、重力与天气类型权重。`simulate.ts` 用「天体 ID + 日期」作为随机种子，生成：

- 以本地太阳时 14 时为峰值的温度曲线
- 由权重抽取的天气类型（火星沙尘、泰坦甲烷雨、艾奥火山活动等）
- 事件概率、7 天趋势、详情指标

同一天内构建结果稳定；换一天重新构建，天气会变化。所有页面在构建时生成，因此部署后不需要数据库或接口。

## 部署到 GitHub Pages

1. 把仓库推送到 GitHub。
2. 在仓库 **Settings → Pages** 中把 Source 设为 **GitHub Actions**。
3. 推送 `main`，`.github/workflows/deploy.yml` 会自动构建并发布。

工作流还会每天 UTC 00:20 自动重建一次，让页面上的“今日预报”和构建日期保持新鲜。

工作流会自动判断部署路径：

- 普通项目仓库：`https://<user>.github.io/<repo>/`，`BASE_PATH=/<repo>`
- 用户主页仓库（`<user>.github.io`）：根路径 `/`
- 自定义域名：把 `BASE_PATH` 改为 `/`，并设置你自己的 `SITE_URL`

也可以部署到 Netlify、Cloudflare Pages、Vercel 等任意静态托管：构建命令 `npm run build`，产物目录 `dist`。

## 数据来源与免责声明

主要参考 NASA Science 的行星/卫星资料页与 NASA、ESA 各任务页面；每张天体页底部列出了具体来源。

本项目管理的是**体验**，不是科学预报能力：

- 不能用于真实任务规划、航天器操作或安全决策
- “1 bar 参考层”不是固体表面；不同纬度的差异被简化为一个概念性站点
- 天气概率、逐时变化、7 天趋势均为模拟

## 许可

代码可自由使用与修改。引用的观测数据版权归 NASA / ESA 等原始机构。
