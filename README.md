<div align="center">

<img src="assets/logo.svg" width="96" height="96" alt="Antigravity Prism Logo" />

# Antigravity Prism

**基于 [Obsidian Prism](https://github.com/RMvdesi/obsidian-prism)（`v1.0.8-beta.4`）定制的 Google Antigravity 光学界面套件（源码克隆本地部署版）**

四套深浅配色 · 会呼吸的 512K 上下文试管 · 推理等级滑块 · 悬停与棱镜流光边框 · 自定义动静态壁纸（Beta）· Chat 对话模式（Beta）

[**简体中文**](./README.md) · [**English**](./README.en.md) · [**源码仓库 (GitHub)**](https://github.com/LYChen328/antigravity-prism) · [**上游原版 (Obsidian Prism)**](https://github.com/RMvdesi/obsidian-prism) · [**更新日志 (CHANGELOG)**](./CHANGELOG.md) · [**问题反馈 (Issues)**](https://github.com/LYChen328/antigravity-prism/issues)

<p>
  <a href="https://github.com/RMvdesi/obsidian-prism"><img src="https://img.shields.io/badge/Upstream-Obsidian%20Prism%20v1.0.8--beta.4-3186ff?style=flat-square" alt="Upstream Base: Obsidian Prism v1.0.8-beta.4" /></a>
  <img src="https://img.shields.io/badge/Deploy-git%20clone%20%2B%20Node.js%2022%2B-0f172a?style=flat-square" alt="Deploy: git clone + Node.js 22+" />
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-1e293b?style=flat-square" alt="Platform: Windows | macOS | Linux" />
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0-2563eb?style=flat-square" alt="License: GPL-3.0" /></a>
  <a href="./NOTICE"><img src="https://img.shields.io/badge/Attribution-Required%20(NOTICE)-8b5cf6?style=flat-square" alt="Attribution Required" /></a>
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/screenshots/hero-dark.webp" />
  <source media="(prefers-color-scheme: light)" srcset="assets/screenshots/hero-light.webp" />
  <img src="assets/screenshots/hero-dark.webp" width="100%" alt="Obsidian Prism v1.0.8-beta.4 界面演示" />
</picture>

<sub>以上演示图来自上游 Obsidian Prism v1.0.8-beta.4（离线渲染舞台逐帧录制，示例工作区与对话内容均为虚构）。本分支开箱默认预设略有精简调整，详见下方「本分支定制内容与默认配置」。</sub>

</div>

> **分支来源与署名声明 (Fork Notice & Attribution)**
>
> 本仓库（`LYChen328/antigravity-prism`）是从 **[@RMvdesi](https://github.com/RMvdesi)** 的开源项目 **[Obsidian Prism](https://github.com/RMvdesi/obsidian-prism)**（`v1.0.8-beta.4`）Fork 并自用定制的衍生版本，**并非原项目官方发行版**。原项目与本分支均采用 **[GNU General Public License v3.0 (`GPL-3.0-only`)](./LICENSE)** 开源，并完整保留 **[`NOTICE`](./NOTICE)** 与 **[`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)**。
>
> Built upon [Obsidian Prism](https://github.com/RMvdesi/obsidian-prism) by [@RMvdesi](https://github.com/RMvdesi), licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html). Upstream component notices are preserved in `NOTICE` and `THIRD_PARTY_NOTICES.md`.

> **非官方社区项目与商标免责声明 (Non-Affiliation Disclaimer)**
>
> **Obsidian Prism is an independent open-source project and is not affiliated with or endorsed by Google LLC.**
> 本项目为独立的开源社区工程，与 Google LLC 无任何隶属、赞助或官方背书关系；文中提及的 “Antigravity” 与 “Google” 仅作兼容性说明用途。

---

## 快速安装：克隆源码到本地部署 (Quick Start)

本仓库面向**直接克隆源码到本地部署**分发（不再引导下载上游 Release 的独立安装包，以免安装成未定制的原版）。

### 1. 环境准备

- **Git**
- **Node.js `>= 22.0.0`**（纯 Node.js 标准库实现，无第三方 npm 依赖，**无需运行 `npm install`**）
- **Google Antigravity** 桌面端（原生兼容 `Antigravity v2.33.0+`）

### 2. 克隆仓库并部署

建议将仓库克隆到一个固定保留的本地目录（部署会在插件状态中关联本地仓库路径）：

```bash
# 1. 克隆本仓库到本地
git clone https://github.com/LYChen328/antigravity-prism.git
cd antigravity-prism

# 2. 部署为 Antigravity 本地原生插件（自动同步文件、拉起后台守护并注入当前窗口）
npm run install:plugin

# 3. 检查安装与后台守护状态
node tools/install-plugin.cjs --status
```

**安装脚本会自动完成以下操作**：
- 将插件文件同步部署至 `~/.gemini/config/plugins/obsidian-prism`（为兼容 Antigravity 原生插件注册表，内部插件 ID 仍沿用 `obsidian-prism`，并将默认配置 `config.example.json` 写入目标目录，保留已有配置不被覆盖）；
- 自动在 `~/.gemini/config/config.json` 中注册并启用插件；
- 自动为 Antigravity 启动入口维护 `--remote-debugging-port=0` 参数（Windows 桌面/开始菜单/任务栏快捷方式、macOS 无损启动器、Linux XDG `.desktop` 影子覆写）；
- 在后台拉起常驻守护进程并立即向当前已打开的 Antigravity 窗口注入界面套件。

安装完成后，在 Antigravity 中打开 **设置 (Settings) → 外观 (Appearance)**，展开 **「Obsidian Prism · 黑曜棱镜」** 区域即可自由切换配色、流光样式、桌宠、汉化与思考翻译等全部选项。

> **状态核验提示**：运行 `node tools/install-plugin.cjs --status` 后，确认输出中包含 `installed: true` 与 `daemonAlive: true`。若显示 `bareAntigravityRunning: true`（说明当前 Antigravity 实例未携带调试端口启动），只需完全关闭 Antigravity，再通过已修补的桌面/开始菜单/应用菜单快捷方式重新打开一次即可激活。

### 3. 日常更新、状态检查与卸载还原

- **拉取最新源码并重新部署**（因为本仓库是本地源码部署的定制分支，**请勿使用设置面板内的 GitHub Release 在线更新**，更新时请在克隆目录执行）：
  ```bash
  git pull
  npm run install:plugin
  ```
- **随时检查运行状态**：
  ```bash
  node tools/install-plugin.cjs --status
  ```
- **卸载并完整还原 Antigravity 原生界面**（默认保留 `~/.gemini/config/` 下的个人设置与思考翻译配置）：
  ```bash
  node tools/install-plugin.cjs --uninstall
  ```
  如需连同所有插件配置与本地缓存一并彻底清除，可执行：
  ```bash
  node tools/install-plugin.cjs --uninstall --purge-data
  ```

### 4. AI 助手代装标准流程 & 思考翻译排查清单

如果你使用 AI 助手（Claude Code、Cursor、Antigravity Agent 等）协助从源码部署，请**严格执行以下标准命令**完成安装与验收：

```bash
git clone https://github.com/LYChen328/antigravity-prism.git
cd antigravity-prism

# 1. 必须执行完整本地插件部署（同步全部模块并启动后台常驻守护进程）
npm run install:plugin

# 2. 必须执行安装状态自检，确认后台守护与按需模块均已就绪
node tools/install-plugin.cjs --status
```

- **严禁仅执行 `npm run inject` 替代安装**：`npm run inject` 仅做单次临时前端注入，**不会**将插件部署至 `~/.gemini/config/plugins/obsidian-prism`，也**不会**启动常驻后台守护进程——这会导致思考翻译、本地遥测与动态壁纸等后台服务功能离线，且在窗口刷新、重启或更新后立即失效。
- **核对 `--status` 自检项**：确认返回 JSON 中 `installed: true`、`daemonAlive: true`、`hasThoughtTranslator: true`、`hasWallpaperChannel: true`；若 `bareAntigravityRunning: true`（常见于客户端在线更新后裸启），请关闭 Antigravity 并通过已自动补齐 `--remote-debugging-port=0` 的快捷方式重开一次即可激活。
- **思考过程翻译排查清单**：
  1. **出厂默认关闭**：思考过程翻译默认关闭（`thoughtTranslate: "off"`，零注入），安装后需打开 **设置 (Settings) → 外观 (Appearance) → Obsidian Prism**，手动切换为 **机器翻译（免配置）** 或 **AI 模型流式转译**（按需可同时开启「会话标题自动翻译」）。
  2. **开启后无反应**：点击思考翻译设置卡片顶部的 **「一键诊断」** 按钮，即可一键核验守护桥接在线态、当前模式/模型配置、系统代理与上游网络连通性；也可重新执行 `node tools/install-plugin.cjs --status` 确认 `daemonAlive: true`。
  3. **更新或裸启后样式暂时回退**：若客户端刚完成在线自动更新且当次裸启无调试端口，接受守护进程弹出的温和重开恢复提示，或直接通过桌面/开始菜单快捷方式重启一次 Antigravity 即可恢复。

### 5. 常见问题与 `Antigravity v2.33.0+` 兼容说明 (FAQ)

- **为什么客户端在线自动更新到 `v2.33.0+` 当次重启后界面暂时回到原生状态？**
  自 `Antigravity v2.33.0` 起，宿主将本地调试桥接改为显式按需启用（`--remote-debugging-port=0`，仅在本地 `127.0.0.1` 随机分配端口并写入受限鉴权文件），且客户端内置在线更新器（`quitAndInstall`）当次拉起进程时不携带命令行参数。插件内置双层自动恢复机制：
  1. **日常启动零感生效**：插件安装脚本与后台守护会自动为桌面、开始菜单、任务栏或应用菜单中的 `Antigravity` 启动入口维护 `--remote-debugging-port=0` 参数（客户端升级重置快捷方式后会自动补回；卸载时精准剥离还原）。
  2. **在线更新裸启一键恢复**：当守护进程检测到运行中的客户端未开启本地桥接端口时，会弹出**单次确认提示框**（同一客户端进程生命周期最多提示 1 次，选择稍后不会重复弹窗），确认后将等待当前实例安全退出并自动带 `--remote-debugging-port=0` 重新打开恢复全套界面；macOS 用户亦可执行 `open -a "/Applications/Antigravity.app" --args --remote-debugging-port=0` 手动带参启动。

---

## 本分支定制内容与默认配置

相比上游 `RMvdesi/obsidian-prism`（`v1.0.8-beta.4`），本分支在保留全部核心能力的基础上，针对日常 coding 偏好调整了开箱默认预设，并围绕首页/会话光学一致性、三语种瘦身与运行时渲染性能进行了定制调优：

### 1. 开箱即用默认预设调整（均可在设置面板随时切回）

| 设置项 | 上游原版默认 | 本分支默认 | 说明 |
| :--- | :--- | :--- | :--- |
| 面板语言 / 宿主汉化 | `auto` / `auto` | **`zh-CN`** / **`off`** | 插件设置面板使用简体中文（UI 支持简中/繁中/英三语及 `auto`），**关闭宿主自动汉化**以保留 Antigravity 原版英文界面 |
| 忽略系统减弱动效 (`ignoreReducedMotion`) | `false` | **`true`** | 系统开启 Reduced Motion 时仍保持插件光学动效与背景动画流畅运行 |
| 帧率上限 (`targetFps`) | `180` | **`native`** | 跟随显示器原生刷新率 |
| 底栏配额模式 (`telemetryQuotaMode`) | `compact` | **`both`** | 同时展示上下文/会话用量卡片与 5h/周模型池配额状态 |
| 深色环境光浓度 (`darkAura`) | `balanced` | **`subtle`** | 默认采用柔和细腻的深色底部地平线氛围光（搭配默认 `prism` 极夜流纱，首页与会话统一响应） |
| 全局圆角 (`cornerStyle`) | `balanced` | **`soft`** | 配合重新校准的圆角梯度呈现更柔和的卡片边缘 |
| 代码连字 (`codeLigatures`) | `false` | **`true`** | 默认开启编程字体连字 |
| 光标边框流光 (`prismRim` / `prismRimStyle`) | `prism`（无开关细分） | **`true`** / **`simple`** | 开启边框高光并默认采用轻量**悬停高光 (`simple`)**，可随时切回跟随光标彩色棱镜流光 (`prism`) |
| 品牌图标 (`logoInk`) | `accent` | **`antigravity`** | 保留 Antigravity 原版品牌图标配色 |
| 输入框提示语 (`placeholderStyle`) | `studio` | **`host`** | 保留宿主原生占位提示语 |
| 像素桌宠 (`mascot`) | `crab` | **`off`** | 默认关闭桌面像素伙伴（可在设置中重新开启多物种桌宠） |
| 侧栏紧凑排版 (`sidebarRestyle`) | `true` | **`false`** | 默认保留宿主原生侧栏排版 |

> 注：其余核心视觉与字体默认项——如首页字符波纹（`homeRipple: true`）、深色氛围光风格（`darkAuraStyle: "prism"` 极夜流纱）以及自定义正文/代码字体（`chatFont: "default"` / `codeFont: "default"`）——均保持与上游默认一致。

### 2. 交互、视觉、动画与性能优化

- **首页与会话环境光统一**：首页底部品牌辉光（`BrandHorizonGlow`）在深色主题下统一接入 `darkAura`（`subtle` / `balanced` / `vivid`）与 `darkAuraStyle`（`prism` 极夜流纱 / `neon` 幽邃光晕）调控（浅色主题保持原貌），同时注入 `halftone: 0.24` 网点纹理并支持聚焦唤醒。
- **底部激发光效平滑淡出与衔接**：为开启会话（`start`，`1150ms`）与首页升空承接（`liftoffEbb`，`780ms`）时的底部激发光效补充后半程余弦平滑淡出曲线，使其自然过渡并收敛至运行中呼吸流光（`running`）或静止清屏休眠（`idle` `0fps`）；同时抑制升空过渡窗期内的延迟重复启动闪光。
- **边框流光与细节精修**：新增 `prismRim`、`prismRimStyle` 与 `logoInk: "antigravity"` 选项；同步窗口标题栏叠加层色值（`syncTitleBarOverlay`）；移除输入框卡片静态 `focus-within` 默认蓝边；重新校准 `balanced` 与 `soft` 两档圆角梯级；过滤 L3 级联菜单弹窗镜像、修复 Orchestrator L2 模型切换悬停闪烁，并将对话回底按钮 `.agy-scroll-bottom` 提升至 `z-index: 24`；复用 Gemini 模型行原生图标与统一 SideQuestion 高亮质感。
- **界面三语种精简收敛（[ADR-007](./docs/adr/ADR-007-three-locale-ui-scope.md)）**：将全栈界面本地化收口至 **简体中文 (`zh-CN`) / 繁體中文 (`zh-TW`) / English (`en`)**（配置仍兼容 `auto` 及历史 `ja`/`ko`/`es`/`fr`/`de`/`tr` → `en`、`yue` → `zh-CN` 平滑迁移），移除了未使用的 6 语种界面词典及独立 `tr` 宿主/Swarm 字典。
- **Canvas 与 DOM 热路径性能优化**：
  - `prism-rim-canvas.js`：缓存卡片外围径向渐变与指针反射精灵图，并在非相关元素滚动时提前短路测量，降低高频鼠标/滚动重绘开销；
  - `host-workbench-enhancer.js`：增量同步时跳过已封存的历史回答 `<pre>` 扫描，并缓存无滚动条节点以避免重复查找；
  - `smooth-caret.js`：通过 `firstChild` 叶节点文本快速短路判空，替代全树 `textContent` 遍历与 `querySelectorAll('p, div')` 查询；
  - `ui-runtime.js`：缓存 `activeElement` 输入框命中判定，并将隐藏态唤醒区分为结构性与非结构性变更，避免无谓的全量图标重扫。

---

## 亮点功能（继承自 Obsidian Prism `v1.0.8-beta.4`）

- **四套配色，一键换装**：深空黑曜、暖炭玄岩两套深色，白昼冷晶、暖白画册两套浅色，可跟随系统亮暗自动切换。
- **看得见的上下文**：输入框旁的小试管实时显示 512K 上下文用量，点开就能看到用量拆分和配额剩余预测。
- **推理等级，一拨就换**：模型菜单里内置星空滑块；选中 Orchestrator 时，滑块会变成一条会折射光线的切工水晶，并支持 3D 元素周期表模型选择器。
- **读得懂的思考过程与标题**：模型的思考内容支持实时转译成中文（沉浸 / 双语对照）与一键诊断，支持手动 HTTP/SOCKS5 代理、可选工具摘要与会话标题自动翻译。
- **自定义动静态背景壁纸（Beta）**：位于设置「Beta 内容」分类，默认关闭零占用，支持纯本机只读加载自定义图片与 MP4/WebM 动态视频背景（实验性功能，交互与表现可能随版本持续调整）。
- **桌面上的像素伙伴（本分支默认关闭，可在设置开启）**：支持 Clawd、小紫猫、三只迷你蟹、GPT 白龙与 DeepSeek 蓝鲸等像素伙伴，可在输入框上方拖拽叠叠乐，还藏着彩虹彩蛋。
- **更顺手的工作台**：内置浏览器和大文件检视台、行内 Diff 预览、右键快捷菜单、长代码块折叠、会话大纲快速跳转。
- **Chat 对话模式（Beta）**：在写代码之外，多了一个专门聊天、整理资料的空间，和工程设置互不干扰。
- **轻、快、守规矩**：动画空闲时自动降到 0fps；本地服务只监听本机；设置改动 10 毫秒内生效，随时一键卸载还原。

---

## 界面预览

### 1. 四套配色

<p align="center">
  <img src="assets/screenshots/palettes.webp" width="100%" alt="四套深浅配色方案" />
</p>

| 主题预设 | 配置键值 | 侧栏底色 | 主画布 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| **深空黑曜** | `palette: "obsidian"` | `#09090B` | `#0E0E11` | 冷调深灰底色，高对比度代码阅读配色 |
| **暖炭玄岩** | `palette: "warm"` | `#10100F` | `#141413` | 暖炭褐底色，低蓝光夜间配色 |
| **白昼冷晶** | `lightPreset: "crystal"` | `#E8EEF6` | `#F4F7FB` | 冷调浅灰蓝侧栏与高明度工作区 |
| **暖白画册** | `lightPreset: "alabaster"` | `#EBE6DC` | `#F6F4EE` | 暖白纸色背景，柔和对比度浅色配色 |

### 2. 光学细节：上下文试管 · 推理滑块 · 切工水晶

点击底部试管可展开用量浮窗，查看上下文切片、5 小时配额与模型池余量；模型菜单里的推理等级滑块随档位点亮星辰，Orchestrator 则显示为切工水晶条。

<p align="center">
  <img src="assets/screenshots/optics.webp" width="100%" alt="512K 上下文试管、推理等级滑块与 Orchestrator 切工水晶" />
</p>

### 3. 像素伙伴

输入框上方的像素伙伴可以拖拽、叠成高塔；满足特定条件时，小紫猫会披上彩虹极光（本分支默认关闭以保持界面极简，可在 **设置 → 外观** 中重新开启）。

<p align="center">
  <img src="assets/screenshots/companions.webp" width="100%" alt="像素伙伴叠叠乐与彩虹彩蛋" />
</p>

### 4. Chat 对话模式（Beta）

默认关闭，可在 **设置 → 外观 → Beta 内容** 中开启。开启后侧栏顶部可在 Code 与 Chat 之间切换，用文件夹整理日常对话，权限按项目隔离，不改动全局工程设置。

<p align="center">
  <img src="assets/screenshots/chat-mode.webp" width="100%" alt="Chat 对话模式（Beta）" />
</p>

### 5. 更多能力

- **外观设置中心**：集成在 **设置 → 外观**，双栏光学布局、**3 种界面语言**（简体中文 / 繁體中文 / English，支持 `auto` 与旧配置平滑回退）、**41 项**核心面板 Schema 字段与 `beta.4` 字体/性能/配额扩展控件（底层配置契约 `src/config/schema.cjs` 共 **56 项**键，含性能模式 `performanceMode`、忽略减弱动效 `ignoreReducedMotion`、底栏配额显示 `telemetryQuotaMode`、边框流光 `prismRim`/`prismRimStyle`、侧栏导航折叠 `sidebarNavFold`、滚底动效 `scrollBottomMotion` 与「正式版 / Beta 尝鲜版」双更新通道）、三档场景预设（完整光效 / 专注编码 / 静默省电）与脱敏配置备份恢复。
- **思考转译与标题翻译**：按需加载模块，关闭态默认零注入并支持热插拔；内置免配置机器翻译与本地/兼容模型流式转译，支持 OS 系统代理自动检测与手动 HTTP/SOCKS5 代理、可选工具摘要与会话标题自动翻译、卡片顶部「一键诊断」及源码路径/行号跳转。
- **自定义静态 / 动态视频壁纸（Beta）**：实验性按需加载模块，默认关闭零占用；纯本机只读加载图片（JPG/PNG/WebP/GIF/AVIF）与动态视频（MP4/WebM），支持透明度/模糊/护眼遮罩调节、Browser Hole 自动避让及失焦/隐藏自动 `0fps` 暂停。
- **Omni 检视台与行内 Diff 预览**：裸链接、本地路径一键在侧栏打开，文件变更支持行内 Diff 预览；超大视频、音频、PDF、表格、字体流式预览，右键菜单复制路径、定位文件、插入引用。
- **Smoked Obsidian 切面与工作台增强**：统一烟熏黑曜消息气泡、变更条、Artifact 卡片与石墨键帽；代码块顶栏吸顶、长代码块手动折叠、左侧会话导轨独立大纲入口与悬停大纲、`Alt+↑` / `Alt+↓` 上下轮跳转，以及会话区右键 `/btw` 侧边提问与 `/compact`、`/plan`、`/learn`、`/grill-me` 原生斜杠快捷指令。

<details>
<summary><strong>技术细节：性能、安全边界、遥测与配置（点击展开）</strong></summary>

本分支基于 **Obsidian Prism (`v1.0.8-beta.4`)** 架构，在不改动宿主业务逻辑、不触碰外部插件锁文件的前提下，通过模块化按需加载插件架构为 Antigravity 桌面端提供 Smoked Obsidian 视觉界面、工作台交互与行内 Diff 增强、侧边栏内置浏览器与多格式流式检视台、模型配额遥测、思考过程转译及实验性动静态壁纸（Beta）：

- **四套深浅配色与细节微调**：内置深色（`obsidian` 深空黑曜、`warm` 暖炭玄岩）与浅色（`crystal` 白昼冷晶、`alabaster` 暖白画册）共四套主题，支持跟随系统/宿主亮暗切换；统一 Smoked Obsidian 烟熏黑曜切面（用户消息气泡、文件变更条、Artifact 卡片、石墨键帽与单层行内文件芯片）；提供 5 档工业强调色（跟随模型 / 钴蓝 `cobalt` / 鸢尾紫 `iris` / 琥珀金 `amber` / 纯银钛单色 `mono`）、3 档全局圆角、正文/代码自定义字体与连字开关、统一首页与会话的环境光浓度（`darkAura`）/风格（`darkAuraStyle`）调节及悬停/棱镜双模边框流光。
- **300Hz 高刷分频、五级水墨流式淡入与平滑收敛余晖**：移除常驻大面积 `backdrop-filter` 模糊开销，休眠时 Canvas VRAM 主动回收至 `0x0`；对话流式吐字采用基于 `CSS.highlights` 的**五级水墨流式淡入**（零 DOM 节点包裹、零强制同步回流），在超长会话（`34k+` DOM 节点）与高刷屏下保持流畅零卡顿；本分支优化了光标边框缓存、历史代码块增量跳过与叶节点判空热路径，对话底部极光在启动/运行态点亮并经平滑余弦淡出尾迹收敛至呼吸流光或 `0fps` 休眠，支持「待用户决策 / 异常中止 / 长任务后台完成」三态无弹窗边缘余晖提示，静态定格后维持 `0fps` 零重绘。
- **工作台与扩展面板集成**：通过宿主原生 `preload` 协议向 `plugin://*` 扩展面板（Swarm、Pulse 等）按需同步 24 项主题色彩变量，消除跨源 `iframe` 浅色闪白；Markdown 与 Artifacts 代码块顶栏支持 Sticky 吸顶，已完成且 `>= 48` 行的长代码块提供手动折叠/展开（不做自动截断，收起时自动补偿滚动位置）；左侧原生会话导轨支持长会话章节刻度、悬停提问大纲与关键词过滤、一键折叠历史步骤及非编辑焦点下 `Alt+↑` / `Alt+↓` 上下轮跳转；统一底部终端与后台任务卡片的控制台凹槽（Console Well）样式。
- **Omni 宿主原生内置浏览器联动、右键菜单与流式检视台**：支持开关控制（`omniModule: "on" | "off"`）与链接打开位置配置（`linkTarget: "builtin" | "external"`）。全面贯彻**官方优先礼让**：对宿主原生 `<a href="http...">` 链接、页内搜索、外链确认弹窗及原生 `<= 200MB` 音视频/CSV/PDF/HTML 预览 100% 礼让官方能力；仅通过 `CSS.highlights`（Custom Highlight API）零 DOM 篡改激活纯文本裸 URL、`localhost` 端口与本地路径（左键链接可直达右侧多标签内置 Browser Tab），并在宿主右侧栏报体积超限（`> 20MB` / `> 200MB`）或无预览时原位接管为流式检视台（切回正常文件自动卸载）。日常阅读保持**零悬停浮窗干扰**，仅在右键点击裸链接、文件药丸、Artifact 卡片或 Mermaid 图表时弹出操作菜单（复制绝对/相对路径、在文件夹中定位选中、作为 `@引用` 填入输入框、内外部浏览器打开、图表缩放）。流式检视台基于仅监听 `127.0.0.1` 的 HTTP `206 Range` 流式网关，支持大体积视频逐帧检视、音频毫秒级波形打点、SVG/透明图棋盘格缩放画布（含 PNG 导出）、本地 HTML 响应式视口沙盒、PDF、`CSV/TSV/JSONL` 冻结表头检索与 `TTF/OTF/WOFF2` 字体样张预览。
- **纵深安全边界与本地隔离**：CDP 特权绑定（`__agPrism*`）强制校验顶层主 Frame 上下文，拒绝任何子 `<iframe>` 越权调用；本地流式网关与后台守护服务实施 Fail-Closed `Host` 与跨站请求校验、UNC / NT 设备路径拦截、`realpath` 敏感凭据与 Google/Antigravity 核心凭据目录保护，下载更新实施预写内存 SHA-256 校验；行内 Diff RPC 强制校验 Git 仓边界、`.git` gitfile/UNC Fail-Closed、`--literal-pathspecs`、`--no-optional-locks` 与安全 `[filter]` 降级；本地 HTML 预览采用 `HMAC-SHA256` 单目录作用域只读子令牌与受限 `sandbox` 隔离，思考转译防跨源 `apiKey` 复用、禁用重定向并阻断云元数据与高危内网端口。
- **双窗口配额遥测与 512K 上下文指示**：遥测引擎对齐上游 [`ATtacK030130/antigrative-dashboard`](https://github.com/ATtacK030130/antigrative-dashboard) `v0.9.1`，支持全模型池 **5 小时 + 周度（Weekly）双窗口配额监控与线性耗尽预测**、**主会话与 Swarm/子代理 Token 消耗拆分**、**Cache 命中率**统计，以及基于 CDP 进程族谱的多实例归属识别；Studio 首页看板提供概览、趋势与模型配额三视图及按工作区筛选；遥测目录独立隔离，检测到外部独立插件时自动礼貌避让（Auto-Yield）。
- **双模思考转译工作台**：独立按需加载模块（关闭态默认零注入），同时支持免配置**机器翻译**与 **OpenAI 兼容接口流式转译**，支持零依赖异步 OS 系统代理自动检测（Windows/macOS），放行本地免密端点（`localhost` / 局域网 Ollama、LM Studio、vLLM 等无需填写 API Key）；基于 `file://` 协议白名单还原思考内容中的源码路径与 `#L` 行号点击跳转；内置服务端并发限流（上限 `3`）与视口优先调度队列、单块失败重试与强制重译，支持「沉浸纯译文 / 双语上下对照」切换及双端缓存清理；API Key 与提示词以 `0600` 权限仅保存在本机配置目录。
- **Chat 对话模式 (Beta · 默认关闭)**：默认保持关闭，可在 **设置 → 外观 → Beta 内容** 中随时开启或关闭（`sidebarStudio: "on" | "off"`）。开启后可在侧栏顶部切换工程模式与专注日常交流、文档整理的 Chat 空间，提供独立文件夹/项目组织、多轮阅读视图与 Artifacts 侧边栏预览，并实行项目级权限隔离，避免改动全局工程设置。
- **按需模块化微内核、零-`eval` LZSS 与毫秒级热刷新**：前端拆解为 `ui-runtime.js` 微内核与 6 个高内聚控制器模块，结合零-`eval` 同步 UTF-16 LZSS 压缩与三语种收口策略严格控制 Channel 1 主包体积（`< 390 KB`；Omni 检视台、Chat 侧栏、宿主汉化、思考转译、行内 Diff 与动静态壁纸 Beta 等均按独立模块按需加载），配合统一磁盘缓存（`.bundle-cache.json`）显著加速冷启动；设置中心覆盖 **41 项**核心面板 Schema 字段与 `beta.4` 扩展控件（底层 `src/config/schema.cjs` 共 **56 项**配置键），内置三档场景预设、分类子标签页与自动剥离私钥凭据的脱敏 JSON 导入/导出备份，配置变更通过单飞增量广播在 `< 10 ms` 内热刷新生效。

</details>

<details>
<summary><strong>命令行维护工具与仓库目录结构（点击展开）</strong></summary>

#### 常用开发与维护命令
```bash
npm run install:plugin                     # 部署为 Antigravity 本地插件并启动后台守护进程
node tools/install-plugin.cjs --status     # 检查安装、后台守护与各按需模块状态
node tools/install-plugin.cjs --uninstall  # 卸载插件并还原快捷方式（加 --purge-data 清理配置）
npm run inject                             # 仅单次临时前端注入（开发调试用，不能替代安装）
npm run remove                             # 移除当前窗口临时注入并停止看门进程
npm run clean:legacy                       # 清理历史旧版 app.asar 遗留块（保留汉化与外部插件）
npm run archive:conversations              # 检查本地对话库体积并离线安全归档历史子代理会话（支持无损还原）
npm run test:gates                         # 运行架构/预算/安全/文档完整性红线检查
npm test                                   # 运行跨模块安全、性能与回归测试套件
npm run build:installer                    # 可选：在本地编译 Windows 独立安装器 (.exe)
npm run build:macos                        # 可选：在本地编译 macOS Universal 安装包 (.dmg)
node scripts/build-linux.mjs               # 可选：在本地打包 Linux 便携版 (.tar.gz)
```

#### 仓库核心目录结构
```text
antigravity-prism/
├── plugin.json                         # Antigravity 原生插件清单 (内部插件名保持 obsidian-prism@1.0.8-beta.4)
├── config.example.json                 # 本分支默认配置模板（首次部署时写入目标 config.json）
├── LICENSE / NOTICE / CITATION.cff     # GPL-3.0 许可证、附加署名声明与原项目引用元数据
├── THIRD_PARTY_NOTICES.md              # 吸收整合的上游 MIT 项目完整版权与许可声明
├── assets/                             # 插件矢量图标与说明文档截图资源
├── cdp.js / inject.js / remove.js      # 零-eval LZSS 打包器、按需分块磁盘缓存与注入卸载协议
├── style.css                           # 四套深浅主题、Smoked Obsidian 切面与宿主表面样式表
├── i18n-locales.js / i18n-core.js      # 3 语种多语言词条模块（简体中文 / 繁體中文 / English，含历史语种平滑回退）
├── motion-engine.js / animated-icons.js# 4 档二阶阻尼弹簧动画与微动态图标模块
├── ripple-core.js / conv-aura.js       # 300Hz 分频 WebGL2 地平线/对话激发平滑淡出着色器与三态 0fps 语义余晖
├── smooth-caret.js / dual-mascot-rig.js# 读写分离编辑器光标跟随与桌面像素多宠模块
├── usage-core.js / vial-core.js        # 用量统计/双窗口配额预测纯函数与 512K 浅水波胶囊
├── pulse-vial-bridge.js                # 上下文切片拆分与 5h/周配额浮窗桥接器
├── settings-panel.js                   # 外观设置中心（41 项核心 Schema、场景预设、脱敏 JSON 备份）
├── src/runtime/                        # beta.4 外观设置扩展、3 语种词条扩展与 OffscreenCanvas Worker
├── home-studio-panel.js                # 控制器 1：Studio 新建会话看板（概览/趋势/配额三视图）
├── home-ripple-host.js                 # 控制器 2：首页字符波纹矩阵与统一深色环境光宿主控制器
├── model-glyph-crystal.js              # 控制器 3：模型星标与 WebGL2 棱镜状态栏控制器
├── stream-choreography.js              # 控制器 4：CSS.highlights 五级水墨流式淡入与表格行级防抖控制器
├── prism-rim-canvas.js                 # 控制器 5：近场指针边框高光控制器
├── host-workbench-enhancer.js          # 控制器 6：扩展面板主题同步桥、代码折叠与导轨大纲控制器
├── ui-runtime.js                       # 前端微内核：配置热同步、DOM 观察器与生命周期编排
├── sidecars/daemon/                    # 本地常驻守护服务 (设置/遥测/用量/Git/归档/思考/Omni/行内Diff/壁纸Beta)
├── vendor/                             # 遥测 (v0.9.1)、滑块、思考转译、行内Diff、壁纸Beta、omni-viewer、sidebar-studio 与 host-i18n
└── installer/ & tools/                 # 原生插件安装脚本及 Windows / macOS 安装器构建工具
```
</details>

---

## 开源协议、原作者署名与致谢

### 1. 开源协议与衍生署名说明 (`GPL-3.0-only` + `NOTICE`)
本项目是基于 **[Obsidian Prism](https://github.com/RMvdesi/obsidian-prism)**（`Copyright (C) 2026 RMvdesi`）的自用定制分支，整体继续遵循 **[GNU General Public License v3.0 (`GPL-3.0-only`)](./LICENSE)** 与 **[`NOTICE`](./NOTICE)** 开源：

1. **同源开源义务（Copyleft）**：任何包含或修改自本项目的衍生版本须同样以 **`GPL-3.0`** 免费开放完整对应源代码。
2. **保留署名与致谢链（Attribution Required）**：完整保留 [`LICENSE`](./LICENSE)、[`NOTICE`](./NOTICE) 与 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)，以及对原作者 `@RMvdesi` 和原仓库 [`RMvdesi/obsidian-prism`](https://github.com/RMvdesi/obsidian-prism) 的来源署名。
3. **非官方背书说明**：本分支为个人定制维护版本，不得以 `Obsidian Prism` 官方原版名义发布。

#### 原项目引用格式 (`CITATION.cff` / BibTeX)
```bibtex
@software{rmvdesi_obsidian_prism_2026,
  author       = {RMvdesi},
  title        = {{Obsidian Prism: Modular Optical UI, Workbench Enhancements, Omni File Viewer, Quota Telemetry & Thought Translator for Antigravity}},
  year         = {2026},
  version      = {1.0.8-beta.4},
  license      = {GPL-3.0-only},
  url          = {https://github.com/RMvdesi/obsidian-prism}
}
```

---

### 2. 上游开源项目与致谢 (Upstream Credits)

上游项目及本项目吸收适配的第三方组件原采用 **MIT License**（与 `GPL-3.0-only` 兼容），完整原始版权声明与许可全文保留于 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)：

1. **[0DNANCY/agy-claude-style](https://github.com/0DNANCY/agy-claude-style)** — `MIT License`, `Copyright (c) 2026 0DNANCY`（基础配色框架、弹簧动画底座、WebGL2 地平线/字符波纹矩阵、像素宠物底座与打包器雏形）。
2. **[ATtacK030130/antigrative-dashboard](https://github.com/ATtacK030130/antigrative-dashboard)** (`v0.9.1`) — `MIT License`, `Copyright (c) 2026 AG Pulse contributors`（吸收适配于 `vendor/pulse-dashboard/`，用于实时吞吐速率、Cache 命中率、5h/周双窗口模型配额预测、主/子代理消耗拆分与多实例进程血缘归属）。
3. **[LLYSH-HANNARI/antigravity-Codex-Claude-effort-slider](https://github.com/LLYSH-HANNARI/antigravity-Codex-Claude-effort-slider)** — `MIT License`, `Copyright (c) 2026 月上寒 (LLYSH-HANNARI)`（吸收适配于 `vendor/effort-slider/`，用于模型菜单推理等级滑块与智能共存让位）。
4. **[yiheng8023/antigravity-chinese](https://github.com/yiheng8023/antigravity-chinese)** (`v3.3.63`) — `MIT License`, `Copyright (c) 2026 Antigravity Chinese Localization Contributors`（参考其 `zh-CN` 词库与前端界面翻译匹配思路；在 `vendor/host-i18n/` 重构为不修改宿主安装包的按需加载本地化模块，并新增四层未知插件通用自动礼让、防死循环熔断与 `WeakMap` 100% 无损还原）。
5. **[Nwflower/dsh-claude-style](https://github.com/Nwflower/dsh-claude-style)** — Studio 极简排版、输入框边框结构与暖白浅色配色参考致谢。
6. **[Microqian2th/dsh-codex-effort-slider](https://github.com/Microqian2th/dsh-codex-effort-slider)** — 轨道刻度分档、迟滞吸附与阻尼运动曲线参考致谢。
7. **[mobius/dsh-performance-slider](https://github.com/mobius/dsh-performance-slider)** — 性能档位滑块交互与实时反馈设计参考致谢。
8. **[claudenoshujin/claude-web](https://github.com/claudenoshujin/claude-web)** (by `lulu`) — 桌面宠物堆叠交互设计参考致谢（物理逻辑为净室独立实现）。
9. **[wp3171216237/dsh-TUI](https://github.com/wp3171216237/dsh-TUI)** — `MIT License`, `Copyright (c) 2026 chimney (@wp3171216237)`（**Deepy** DeepSeek 蓝鲸桌宠轮廓配色与喷水动画设计参考致谢，以 `16×10` 零描边像素语法独立适配于 `dual-mascot-rig.js`）。

---

### 3. 社区贡献者 (Community Contributors)

感谢原作者 **[@RMvdesi](https://github.com/RMvdesi)** 以及所有推动上游 Obsidian Prism 持续演进的社区伙伴！

- **上游完整社区贡献者荣誉名录与贡献详情**：请见 [**`docs/CONTRIBUTORS.md`**](./docs/CONTRIBUTORS.md)（永久收录全部 PR 贡献者与核心 Issue 定位反馈者，并同步留档于 [`CHANGELOG.md`](./CHANGELOG.md)）。
- 欢迎通过本仓库 [Issues](https://github.com/LYChen328/antigravity-prism/issues) 或上游原项目 [obsidian-prism](https://github.com/RMvdesi/obsidian-prism) 反馈问题与交流。
