# ADR-007: 三语种界面本地化范围收口（zh-CN / zh-TW / en）

- **状态 / Status**: Accepted (Maintainer Approved)
- **守护铁律**: [`AGENTS.md`](../../AGENTS.md) 四节 · **门禁**: [`i18n-and-version-sync.test.mjs`](../../test/gates/i18n-and-version-sync.test.mjs) · [`bundle-budget.test.mjs`](../../test/gates/bundle-budget.test.mjs)

## 背景 / Context
本定制分支面向个人及中文/英文工作环境分发与自用部署。原上游 9 语种词典在主运行时、设置面板、检视台、宿主/Swarm 字典及各独立通道中占据显著包体积，并增加了不使用的语种维护负担。经人类维护者明确批准，收口界面支持语种范围并同步调整对应门禁契约。

## 决策 / Decision
1. **规范界面语种**：统一收口为 `zh-CN`、`zh-TW`、`en` 三语（配置项仍支持 `auto` 按宿主/系统环境自动择一）；
2. **精简与移除**：移除 `ja`、`ko`、`es`、`fr`、`de`、`tr` 的前端界面词典、选项与独立 `tr` 宿主/Swarm 词库文件；
3. **兼容与红线保留**：历史配置中的已移除语种（`ja`/`ko`/`es`/`fr`/`de`/`tr`）平滑回退至 `en`，历史 `yue` 仍平滑迁移至 `zh-CN`；继续严格执行 `en` 零汉字泄漏、零独立 `yue` 词典、零禁用词及全部预算红线。

## 约束边界 / Scope Guardrails
本卡仅豁免 9 语种完备性门禁并调整对应预算探针语种列表，不放宽 Ch1 `< 390 KB`、零 `innerHTML`、零外部依赖、四防安全或原子落盘等任何其余架构红线。
