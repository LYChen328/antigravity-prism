<div align="center">

<img src="assets/logo.svg" width="96" height="96" alt="Antigravity Prism Logo" />

# Antigravity Prism

**A customized personal fork of [Obsidian Prism](https://github.com/RMvdesi/obsidian-prism) (`v1.0.8-beta.4`) for Google Antigravity (Source-Clone Local Deployment)**

Four dark & daylight themes · A living 512K context vial · Reasoning effort slider · Hover & prism border glow · Custom Static / Video Wallpaper (Beta) · Chat Mode (Beta)

[**简体中文**](./README.md) · [**English**](./README.en.md) · [**Source Repo (GitHub)**](https://github.com/LYChen328/antigravity-prism) · [**Upstream (Obsidian Prism)**](https://github.com/RMvdesi/obsidian-prism) · [**Changelog**](./CHANGELOG.md) · [**Issues**](https://github.com/LYChen328/antigravity-prism/issues)

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
  <img src="assets/screenshots/hero-dark.webp" width="100%" alt="Obsidian Prism v1.0.8-beta.4 showcase" />
</picture>

<sub>Showcase footage is from upstream Obsidian Prism v1.0.8-beta.4 (rendered frame by frame by an offline stage; all workspaces and conversations shown are fictional). Out-of-the-box defaults in this fork are trimmed slightly — see "Fork Customizations & Default Setup" below.</sub>

</div>

> **Fork Notice & Attribution**
>
> This repository (`LYChen328/antigravity-prism`) is a personal customized fork built upon **[Obsidian Prism](https://github.com/RMvdesi/obsidian-prism)** (`v1.0.8-beta.4`) by **[@RMvdesi](https://github.com/RMvdesi)**, and is **not** an official Obsidian Prism release. Both the upstream project and this fork are open-source under **[GNU General Public License v3.0 (`GPL-3.0-only`)](./LICENSE)** with **[`NOTICE`](./NOTICE)** and **[`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)** preserved intact.
>
> Built upon [Obsidian Prism](https://github.com/RMvdesi/obsidian-prism) by [@RMvdesi](https://github.com/RMvdesi), licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html). Upstream component notices are preserved in `NOTICE` and `THIRD_PARTY_NOTICES.md`.

> **Non-Affiliation & Trademark Disclaimer**
>
> **Obsidian Prism is an independent open-source project and is not affiliated with or endorsed by Google LLC.**
> References to “Antigravity” and “Google” are strictly for compatibility and descriptive purposes.

---

## Quick Start: Clone & Deploy Locally

This repository is intended to be **cloned from source and deployed locally** (rather than downloading upstream release installers, which do not contain this fork's customizations).

### 1. Prerequisites

- **Git**
- **Node.js `>= 22.0.0`** (pure Node.js standard library with zero third-party npm dependencies — **no `npm install` needed**)
- **Google Antigravity** desktop client (natively compatible with `Antigravity v2.33.0+`)

### 2. Clone & Deploy

Clone the repository into a directory you intend to keep (plugin metadata links back to your local clone path):

```bash
# 1. Clone this repository locally
git clone https://github.com/LYChen328/antigravity-prism.git
cd antigravity-prism

# 2. Deploy as a local Antigravity plugin (syncs files, starts the persistent daemon, and attaches to open windows)
npm run install:plugin

# 3. Verify installation and daemon status
node tools/install-plugin.cjs --status
```

**What `npm run install:plugin` handles automatically**:
- Copies plugin assets and runtime modules to `~/.gemini/config/plugins/obsidian-prism` (keeping the internal `obsidian-prism` plugin ID for Antigravity registry compatibility, seeding `config.example.json` on first install while preserving existing user configs);
- Registers and enables the plugin in `~/.gemini/config/config.json`;
- Maintains `--remote-debugging-port=0` on Antigravity launch entries (Windows Desktop/Start Menu/Taskbar shortcuts, macOS lossless launcher, or Linux XDG `.desktop` shadow overrides);
- Starts the persistent background daemon and injects into running Antigravity windows immediately.

Once deployed, open **Settings → Appearance** in Antigravity and expand the **Obsidian Prism** panel to customize themes, border glow, companions, localization, and thought translation.

> **Status check tip**: Confirm `node tools/install-plugin.cjs --status` outputs `installed: true` and `daemonAlive: true`. If `bareAntigravityRunning: true` appears (meaning Antigravity was launched without the debug-port flag), fully close Antigravity and reopen it once via your patched shortcut or application launcher.

### 3. Updating, Status Checks & Clean Uninstall

- **Pull latest source updates and redeploy** (because this is a source-deployed fork, **do not use the in-panel GitHub Release updater**, which points to upstream releases; update from your local clone instead):
  ```bash
  git pull
  npm run install:plugin
  ```
- **Check installation & daemon health**:
  ```bash
  node tools/install-plugin.cjs --status
  ```
- **Uninstall and restore stock Antigravity UI** (preserves user settings and thought-translator config in `~/.gemini/config/` by default):
  ```bash
  node tools/install-plugin.cjs --uninstall
  ```
  To also purge all plugin user configs and local caches, add `--purge-data`:
  ```bash
  node tools/install-plugin.cjs --uninstall --purge-data
  ```

### 4. Standard AI-Assisted Install Workflow & Thought Translator Checklist

If you ask an AI coding assistant (Claude Code, Cursor, Antigravity Agent, etc.) to install this repository from source, **always run these two commands in order**:

```bash
git clone https://github.com/LYChen328/antigravity-prism.git
cd antigravity-prism

# 1. Full local plugin deployment (syncs all modules and starts the persistent background daemon)
npm run install:plugin

# 2. Verify installation health, background daemon, and on-demand modules
node tools/install-plugin.cjs --status
```

- **Do NOT use `npm run inject` as an installer**: `npm run inject` only performs a one-shot temporary front-end injection. It does **not** install into `~/.gemini/config/plugins/obsidian-prism` and does **not** start the persistent background daemon — leaving Thought Translator, local telemetry, and wallpaper services offline and causing styles to disappear on reload, restart, or client update.
- **Verify `--status` output**: confirm `installed: true`, `daemonAlive: true`, `hasThoughtTranslator: true`, and `hasWallpaperChannel: true`. If `bareAntigravityRunning: true` (typical right after an in-app update relaunches without flags), close Antigravity and reopen it once via your configured Desktop, Start Menu, or launcher shortcut (which automatically carries `--remote-debugging-port=0`).
- **Thought Translator Troubleshooting Checklist**:
  1. **OFF by default**: Thought Translator ships disabled (`thoughtTranslate: "off"`, `0 B` injected). Open **Settings → Appearance → Obsidian Prism** and explicitly select **Machine Translation (zero-config)** or **AI Streaming** (and optionally toggle automatic session-title translation).
  2. **No translation after enabling**: click the **1-Click Diagnose** button at the top of the Thought Translator settings card to inspect daemon bridge health, active mode/model configuration, OS proxy detection, and upstream connectivity — or re-run `node tools/install-plugin.cjs --status` to confirm `daemonAlive: true`.
  3. **UI reverted right after an Antigravity update**: accept the daemon/watcher's single non-repeating relaunch prompt, or simply restart Antigravity once via its configured shortcut.

### 5. FAQ & `Antigravity v2.33.0+` Compatibility

- **Why did the UI temporarily revert to stock right after an in-app update to `Antigravity v2.33.0+`?**
  Starting in `Antigravity v2.33.0`, the host switched its local DevTools bridge to explicit opt-in (`--remote-debugging-port=0`, binding an ephemeral `127.0.0.1` port with a local token file), and Electron's built-in `quitAndInstall` updater relaunches the app once without command-line arguments. The plugin handles this automatically in two layers:
  1. **Zero-Friction Daily Launch**: The plugin install script and background daemon automatically maintain `--remote-debugging-port=0` on user Desktop, Start Menu, Taskbar, or application launcher entries for `Antigravity` (silently restoring the flag if an app update overwrites shortcuts, and cleanly stripping it upon uninstall).
  2. **One-Click Relaunch Recovery**: Whenever the daemon detects a running Antigravity instance launched without a local bridge port, it shows a **single non-repeating confirmation prompt** (at most once per host process lifetime) to gracefully close the current instance and relaunch with `--remote-debugging-port=0`; on macOS you can also launch via `open -a "/Applications/Antigravity.app" --args --remote-debugging-port=0`.

---

## Fork Customizations & Default Setup

Compared to upstream `RMvdesi/obsidian-prism` (`v1.0.8-beta.4`), this fork keeps all core capabilities while adjusting out-of-the-box defaults and refining day-to-day visual behavior:

### 1. Out-of-the-Box Default Adjustments (All Toggleable in Settings)

| Setting | Upstream Default | Fork Default | Notes |
| :--- | :--- | :--- | :--- |
| Panel Language / Host i18n | `auto` / `auto` | `zh-CN` / **`off`** | Uses `zh-CN` in the Prism settings panel while **disabling automatic host UI translation** to keep Antigravity's stock UI text |
| Target Refresh Rate (`targetFps`) | `180` | **`native`** | Follows the display's native refresh rate |
| Corner Radius (`cornerStyle`) | `balanced` | **`soft`** | Paired with recalibrated corner radius steps for softer card edges |
| Code Ligatures (`codeLigatures`) | `false` | **`true`** | Enables coding font ligatures by default |
| Composer Glow (`prismRimStyle`) | `prism` | **`simple`** | Defaults to card-hover border highlight (`Hover Edge`), switchable back to colorful cursor prism flow |
| Brand Icon (`logoInk`) | `accent` | **`antigravity`** | Keeps the original Antigravity brand logo styling |
| Placeholder (`placeholderStyle`) | `studio` | **`host`** | Keeps Antigravity's native composer placeholder text |
| Home Glyph Ripple (`homeRipple`) | `true` | **`false`** | Off by default for a cleaner home canvas (while preserving the bottom ambient brand glow) |
| Pixel Mascots (`mascot`) | `crab` | **`off`** | Off by default (can be re-enabled anytime in Settings) |
| Sidebar Restyle (`sidebarRestyle`) | `true` | **`false`** | Keeps the host's native sidebar layout by default |

### 2. Visual, Interaction & Stability Refinements

- **Granular Border Glow Controls**: Added `prismRim` toggle and `prismRimStyle` selector (`prism` Prism Flow vs. `simple` Hover Edge), plus the `antigravity` option for `logoInk`.
- **Visual Polish**: Syncs the window title-bar overlay colors (`syncTitleBarOverlay`) to match dark/light themes, removes the resting `focus-within` blue border on the composer card, filters L3 cascade submenus out of popup rim mirrors, recalibrates `balanced` / `soft` corner radii and rim metrics, and adds halftone texture (`0.24`) + focus-wake support to the home ambient glow.
- **Scoped Motion & Zero-Idle Aurora**: Scopes Hero A liftoff effects strictly to Home launches and switches conversation background aurora to `running-only`, clearing and sleeping immediately at `0fps` when idle.

---

## Highlights (Inherited from Obsidian Prism `v1.0.8-beta.4`)

- **Four themes, one click**: Obsidian Dark and Warm Charcoal, plus Daylight Crystal and Warm Alabaster — with automatic light/dark following.
- **Context you can see**: A tiny vial next to the composer shows live 512K context usage; click it for a usage breakdown and quota forecasts.
- **Reasoning effort at your fingertips**: A starfield slider lives in the model menu; pick Orchestrator and it turns into a light-refracting cut-crystal bar alongside the on-demand 3D periodic-table model picker.
- **Thinking & titles you can read**: Translate the model's thinking in real time (Immersive or Stacked Bilingual) with 1-Click Diagnose, manual HTTP/SOCKS5 proxy, and optional tool-summary & session-title translation.
- **Custom Static / Live Video Wallpaper (Beta)**: Located under Settings → **Beta**, off by default with zero overhead; loads local images and MP4/WebM videos read-only (experimental feature that may evolve across versions).
- **Pixel companions (off by default in this fork)**: Supports Clawd, purple cat, mini crabs, GPT white dragon, and DeepSeek blue whale — stackable above the composer with a hidden rainbow easter egg when enabled in Settings.
- **A friendlier workbench**: Built-in side-pane browser and large-file viewer, inline file diff previews, right-click actions, long code-block folding, and conversation outline jumps.
- **Chat Mode (Beta)**: A dedicated space for everyday chats and notes, kept separate from your coding workspace and its settings.
- **Light, fast and well-behaved**: Animations idle down to 0fps, local services listen on loopback only, settings apply in under 10 ms, and everything uninstalls cleanly.

---

## Visual Overview

### 1. Four Themes

<p align="center">
  <img src="assets/screenshots/palettes.webp" width="100%" alt="Four dark and daylight themes" />
</p>

| Theme Preset | Config Key | Sidebar | Canvas | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Obsidian Dark** | `palette: "obsidian"` | `#09090B` | `#0E0E11` | Cool dark slate palette tuned for high-contrast code reading |
| **Warm Charcoal** | `palette: "warm"` | `#10100F` | `#141413` | Warm charcoal dark palette with reduced blue-light glare |
| **Daylight Crystal** | `lightPreset: "crystal"` | `#E8EEF6` | `#F4F7FB` | Cool slate-blue sidebar paired with a bright workspace canvas |
| **Warm Alabaster** | `lightPreset: "alabaster"` | `#EBE6DC` | `#F6F4EE` | Warm paper-tinted daylight palette with softer contrast |

### 2. Optical Details: Context Vial · Effort Slider · Cut Crystal

Click the vial to open the usage popover with context slices, 5-hour quota and model-pool headroom. The effort slider lights up its starfield as you climb tiers, and Orchestrator appears as a cut-crystal bar.

<p align="center">
  <img src="assets/screenshots/optics.webp" width="100%" alt="512K context vial, reasoning effort slider and Orchestrator cut crystal" />
</p>

### 3. Pixel Companions

Drag the companions above the composer and stack them high; under the right conditions the purple cat dons a rainbow aurora cape (disabled by default in this fork for a cleaner composer — re-enable anytime in **Settings → Appearance**).

<p align="center">
  <img src="assets/screenshots/companions.webp" width="100%" alt="Pixel companions tower and rainbow easter egg" />
</p>

### 4. Chat Mode (Beta)

Off by default — enable it under **Settings → Appearance → Beta**. A switcher at the top of the sidebar flips between Code and Chat, with folders for everyday conversations and project-scoped permissions that never touch global Code settings.

<p align="center">
  <img src="assets/screenshots/chat-mode.webp" width="100%" alt="Chat Mode (Beta)" />
</p>

### 5. More Capabilities

- **Appearance Control Center**: Lives in **Settings → Appearance** — redesigned two-column modal, **9 UI languages** (zh-CN/zh-TW/en/ja/ko/es/fr/de/tr), **41** end-to-end validated panel settings (**56** schema config keys overall, including `performanceMode`, `prismRim`/`prismRimStyle`, `sidebarNavFold`, `scrollBottomMotion`, and Stable / Beta update channels), three scene presets (Full Visuals / Deep Focus / Silent Eco), and sanitized backup/restore.
- **Thought & Title Translator**: On-demand module that injects `0 B` by default when disabled with hot-plug support; zero-config machine translation or streaming local/compatible endpoints, OS proxy auto-detection + manual HTTP/SOCKS5 proxy, optional tool-summary & conversation-title translation, 1-Click Diagnose bar, and clickable source paths/line numbers.
- **Custom Static / Live Video Wallpaper (Beta)**: Experimental on-demand module, off by default (zero overhead); 100% local read-only streaming for images (JPG/PNG/WebP/GIF/AVIF) and videos (MP4/WebM) with opacity/blur/dim controls, Browser Hole avoidance, and automatic `0fps` pause on blur/hide.
- **Omni Browser, File Viewer & Inline Diff Preview**: Open bare links and local paths in the side pane, preview inline file diffs directly in conversation turns, stream huge videos/audio/PDFs/tables/fonts, and right-click to copy paths, reveal files or insert references.
- **Smoked Obsidian Surfaces & Workbench Enhancements**: Unified faceted message bubbles, file-change strips, Artifact cards and graphite keycaps; sticky code-block headers, manual folding for long code blocks, dedicated outline trigger and hover outlines on the conversation rail, `Alt+↑` / `Alt+↓` turn navigation, and conversation right-click `/btw` + native `/compact`, `/plan`, `/learn`, `/grill-me` slash commands.

<details>
<summary><strong>Technical details: performance, security, telemetry & configuration (click to expand)</strong></summary>

Built on **Obsidian Prism (`v1.0.8-beta.4`)**, this fork provides Smoked Obsidian dark/daylight themes, host workbench & inline diff enhancements, a built-in side-pane browser and streaming multi-format file viewer, live quota telemetry, chain-of-thought translation, and experimental static/video wallpapers (Beta) for the Antigravity desktop client through a modular on-demand local plugin architecture — without altering host business logic or conflicting with external plugins:

- **Four Dark/Daylight Themes & Fine-Grained Controls**: Includes two dark palettes (**Obsidian Dark** & **Warm Charcoal**) and two daylight presets (**Daylight Crystal** & **Warm Alabaster**) with automatic host light/dark tracking, unified Smoked Obsidian faceted surfaces (message bubbles, file-change strips, Artifact cards, graphite keycaps, and single-frame inline file chips), plus 5 accent tones (Follow Model, Cobalt, Iris, Amber, and Graphite Monochrome `mono`), 3 corner radius scales, 4 code monospace font stacks with ligature toggle, ambient glow intensity controls, and dual-mode (`prism` / `simple`) border glow.
- **300Hz Split-Rate Pipeline, 5-Step Ink Streaming & `0fps` Semantic Afterglow**: Removes persistent multi-layer `backdrop-filter` blur passes and reclaims Canvas VRAM (`0x0`) during sleep; renders streaming responses with a `CSS.highlights`-based **5-step ink fade-in** (zero wrapper nodes, zero forced layout reflow, maintaining smooth high-refresh frame pacing even in `34k+`-node long sessions). In this fork, conversation background aurora runs only during active execution (`running-only`) and clears/sleeps at `0fps` when idle; non-intrusive three-state semantic edge cues (awaiting user decision, error halted, and background long-task completion) freeze into `0fps` static snapshots.
- **Host Workbench & Extension Panel Integration**: Synchronizes 24 theme color variables in real time to `plugin://*` extension `iframe` panels (Swarm, Pulse, etc.) via the host `preload` `postMessage` protocol to prevent white flashes; adds sticky headers to Markdown and Artifact code blocks with manual fold/unfold controls for completed blocks (`>= 48` lines, never auto-truncated, with scroll-anchor compensation); enhances the left conversation rail with chapter tick styles, on-hover prompt outline filtering, historical step folding, and `Alt+↑` / `Alt+↓` turn navigation; unifies terminal and background task surfaces with four-theme Console Well styling.
- **Omni Native Browser Integration, Context Menu & Streaming File Viewer**: Configurable via `omniModule` (`"on" | "off"`) and `linkTarget` (`"builtin" | "external"`). Follows a **stock-first deference** rule: yields 100% of native `<a href="http...">` clicks, in-page search, external confirmation modals, and `<= 200MB` native media/CSV/PDF/HTML previews to Antigravity's built-in handlers. Uses `CSS.highlights` (Custom Highlight API) for zero-DOM-mutation activation of bare URLs, `localhost` ports, and local file paths (routing bare links to native right-pane Browser Tabs), and upgrades the side pane in-place only when the host shows size-limit (`> 20MB` / `> 200MB`) or unsupported-file notices (auto-unmounting when switching back). Preserves **zero hover-popup clutter** during reading — actions appear strictly on right-click (`contextmenu`) over bare links, file pills, Artifact cards, or Mermaid diagrams (copy absolute/relative paths, reveal in folder, insert as `@mention` into composer, open in side-pane/external browser, or zoom diagrams). Backed by a loopback-only (`127.0.0.1`) HTTP `206 Range` streaming gateway supporting frame-stepped large video inspection, millisecond audio waveform markers, checkerboard SVG/transparent-image zoom & PNG export, responsive local HTML sandboxes, PDF viewing, frozen-header `CSV/TSV/JSONL` search/sorting, and `TTF/OTF/WOFF2` font specimen waterfalls.
- **Defense-in-Depth Security & Local Isolation**: Enforces top-level main-frame verification on all privileged `__agPrism*` CDP bindings (rejecting sub-`<iframe>` RPC calls); hardens the loopback streaming gateway and background daemon with fail-closed `Host` and cross-site request checks, UNC/NT device-path blocking, `realpath` blocking of sensitive credential files and Google/Antigravity core credential directories, and in-memory pre-write SHA-256 verification on updates; enforces Git repo boundaries, fail-closed `.git` gitfile/UNC checks, `--literal-pathspecs`, `--no-optional-locks`, and safe `[filter]` downgrade on Inline Diff RPC; isolates local HTML previews with per-directory `HMAC-SHA256` read-only sub-tokens and restricted `sandbox` attributes (without `allow-same-origin`), while preventing cross-origin `apiKey` reuse, disabling upstream redirects, and blocking cloud-metadata/unsafe ports in thought translation requests.
- **Dual-Window Quota Telemetry & 512K Context Vial**: Aligns `vendor/pulse-dashboard/` with upstream [`ATtacK030130/antigrative-dashboard`](https://github.com/ATtacK030130/antigrative-dashboard) `v0.9.1` (MIT), supporting **5-hour and weekly quota pool tracking with linear depletion forecasts**, **main session vs. Swarm/subagent token attribution**, **cache hit rate** metrics, and CDP process-lineage multi-instance discovery. Exposes Overview, Trends, and Quotas views with workspace filtering on the Studio home dashboard, stores telemetry in an isolated local data directory, and yields automatically when standalone external plugins are active.
- **Dual-Mode Thought Translator**: Isolated into an on-demand module (`0 B` injected when off) supporting zero-config **Machine Translation** and **OpenAI-Compatible Streaming Translation**, with zero-dependency async Windows/macOS OS system proxy auto-detection and keyless local endpoints (`localhost` / LAN Ollama, LM Studio, vLLM without requiring an API key); safely restores `file://` source paths and `#L` line-number jump pills under a strict `file://`-only protocol allowlist; adds a concurrency-limited (`max = 3`) viewport-priority queue, per-block retry/re-translate controls, **Immersive vs. Stacked Bilingual** view modes, and cache management. API keys and custom prompts are stored locally in `~/.gemini/config/` (`0600` permissions).
- **Chat Mode (Beta · Off by Default)**: Off by default and toggleable anytime in **Settings → Appearance → Beta** (`sidebarStudio: "on" | "off"`). When enabled, adds a top-sidebar switcher between the Code workspace and a dedicated Chat space for everyday conversations and document organization, complete with folder/project grouping, clean multi-turn reading views, Artifacts preview, and project-scoped permission isolation that preserves global Code settings.
- **Modular On-Demand Microkernel, Zero-`eval` LZSS & Sub-10ms Config Sync**: Splits the runtime into a lean `ui-runtime.js` microkernel and 6 focused controller modules compiled with zero-`eval` synchronous UTF-16 LZSS compression (Omni viewer, Chat sidebar, Host i18n, Thought Translator, Inline Diff, Wallpaper Beta, etc. load on-demand as separate modules) and a unified disk cache (`.bundle-cache.json`) for fast cold-start builds. Covers **41** validated panel settings (**56** schema config keys in `src/config/schema.cjs`) with `< 10 ms` single-flight incremental `refreshConfig` broadcast, three scene presets, categorized sub-tabs, and API-key-sanitized JSON export/import.

</details>

<details>
<summary><strong>CLI Utilities & Repository Structure (Click to expand)</strong></summary>

#### Common CLI Commands
```bash
npm run install:plugin                     # Deploy as local Antigravity plugin and start persistent daemon
node tools/install-plugin.cjs --status     # Check installation, daemon & module health
node tools/install-plugin.cjs --uninstall  # Cleanly uninstall plugin (add --purge-data to wipe configs)
npm run inject                             # One-shot temporary front-end injection (dev only; not an installer)
npm run remove                             # Cleanly remove all styles/widgets and restore stock UI
npm run clean:legacy                       # Strip legacy blocks from historical app.asar archives
npm run archive:conversations              # Inspect conversation DB bloat & safely archive old subagent sessions offline (reversible)
npm run test:gates                         # Run architecture, bundle budget, security & repo hygiene gates
npm test                                   # Run cross-module security, bundle & regression tests
npm run build:installer                    # Optional: build standalone Windows installer (.exe) locally
npm run build:macos                        # Optional: build standalone macOS Universal bundle (.dmg) locally
node scripts/build-linux.mjs               # Optional: build portable Linux bundle (.tar.gz) locally
```

#### Core Repository Layout
```text
antigravity-prism/
├── plugin.json                         # Antigravity native plugin manifest (internal ID kept as obsidian-prism@1.0.8-beta.4)
├── config.example.json                 # Default config template for this fork (seeded on first install)
├── LICENSE / NOTICE / CITATION.cff     # GPL-3.0 license, attribution terms & upstream citation metadata
├── THIRD_PARTY_NOTICES.md              # Preserved copyright & license notices for MIT upstreams
├── assets/                             # Vector plugin icon & documentation screenshots
├── cdp.js / inject.js / remove.js      # Zero-eval LZSS compiler, on-demand disk cache & attach/removal
├── style.css                           # Four themes, Smoked Obsidian surfaces & workbench styles
├── i18n-locales.js / i18n-core.js      # 9-language localization tables (zh-CN/zh-TW/en/ja/ko/es/fr/de/tr)
├── motion-engine.js / animated-icons.js# 4-tier damped spring physics & animated UI icons
├── ripple-core.js / conv-aura.js       # 300Hz split-rate WebGL2 horizon shader & 0fps semantic cues
├── smooth-caret.js / dual-mascot-rig.js# Read/write-separated caret tracking & pixel mascot rig
├── usage-core.js / vial-core.js        # Quota forecast functions & 512K shallow-water vial renderer
├── pulse-vial-bridge.js                # Context slice breakdown & 5h/weekly quota popover bridge
├── settings-panel.js                   # Settings UI (41 panel settings, scene presets, sanitized JSON backup)
├── src/runtime/                        # beta.4 settings & 9-locale extensions + OffscreenCanvas worker
├── home-studio-panel.js                # Controller 1: Studio home dashboard (Overview/Trends/Quotas)
├── home-ripple-host.js                 # Controller 2: Home glyph ripple matrix host controller
├── model-glyph-crystal.js              # Controller 3: Model glyph & WebGL2 prism bar controller
├── stream-choreography.js              # Controller 4: CSS.highlights 5-step ink fade & table row throttle
├── prism-rim-canvas.js                 # Controller 5: Cursor-reactive border highlight controller
├── host-workbench-enhancer.js          # Controller 6: Extension panel theme bridge, code fold & rail outline
├── ui-runtime.js                       # Frontend microkernel: fast config sync & lifecycle orchestration
├── sidecars/daemon/                    # Persistent local daemon (settings/metrics/usage/repo/archiver/thought/omni/inline-diff/wallpaper-beta)
├── vendor/                             # Telemetry (v0.9.1), effort-slider, thought-translator, inline-diff, wallpaper-beta, omni-viewer, sidebar-studio & host-i18n
└── installer/ & tools/                 # Native plugin deployment scripts & multi-OS installer builders
```
</details>

---

## License, Upstream Attribution & Citation

### 1. Open-Source License & Attribution (`GPL-3.0-only` + `NOTICE`)
This fork builds upon **[Obsidian Prism](https://github.com/RMvdesi/obsidian-prism)** (`Copyright (C) 2026 RMvdesi`) and remains open-source under **[GNU General Public License v3.0 (`GPL-3.0-only`)](./LICENSE)** with mandatory Section 7 attribution terms in **[`NOTICE`](./NOTICE)**:

1. **Same-License Copyleft**: Any derivative work, bundle, or installer incorporating code from this project must be distributed under **`GPL-3.0`** with complete corresponding source code available.
2. **Preserve Attribution Chain**: Retain [`LICENSE`](./LICENSE), [`NOTICE`](./NOTICE), and [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) intact, along with credit linking back to `@RMvdesi` and [`RMvdesi/obsidian-prism`](https://github.com/RMvdesi/obsidian-prism).
3. **Non-Endorsement**: This is a customized personal fork and must not be represented as an official `Obsidian Prism` release.

#### Upstream Citation (`CITATION.cff` / BibTeX)
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

### 2. Upstream Open-Source Credits

Absorbed and adapted third-party components were originally released under the **MIT License** (compatible with `GPL-3.0-only`), with full copyright and permission notices preserved in [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md):

1. **[0DNANCY/agy-claude-style](https://github.com/0DNANCY/agy-claude-style)** — `MIT License`, `Copyright (c) 2026 0DNANCY` (Base palette tokens, spring physics foundation, WebGL2 horizon/glyph wavefield, pixel mascot foundation, and initial bundler).
2. **[ATtacK030130/antigrative-dashboard](https://github.com/ATtacK030130/antigrative-dashboard)** (`v0.9.1`) — `MIT License`, `Copyright (c) 2026 AG Pulse contributors` (Absorbed and adapted in `vendor/pulse-dashboard/` for live token throughput, cache hit rate, 5h/weekly quota forecasting, main/subagent token attribution, and CDP process-lineage discovery).
3. **[LLYSH-HANNARI/antigravity-Codex-Claude-effort-slider](https://github.com/LLYSH-HANNARI/antigravity-Codex-Claude-effort-slider)** — `MIT License`, `Copyright (c) 2026 LLYSH-HANNARI` (Absorbed and adapted in `vendor/effort-slider/` for model-menu reasoning effort slider and smart coexistence yielding).
4. **[yiheng8023/antigravity-chinese](https://github.com/yiheng8023/antigravity-chinese)** (`v3.3.63`) — `MIT License`, `Copyright (c) 2026 Antigravity Chinese Localization Contributors` (Upstream `zh-CN` dictionary source & UI localization pattern reference; re-architected in `vendor/host-i18n/` as an on-demand runtime localization module without modifying host packages, featuring universal 4-layer auto-yield, ping-pong circuit breaker, and `WeakMap` lossless `destroy()`).
5. **[Nwflower/dsh-claude-style](https://github.com/Nwflower/dsh-claude-style)** — Minimalist Studio layout, composer framing, and warm alabaster daylight palette reference.
6. **[Microqian2th/dsh-codex-effort-slider](https://github.com/Microqian2th/dsh-codex-effort-slider)** — Detent track snapping, hysteresis thresholds, and damped motion curve reference.
7. **[mobius/dsh-performance-slider](https://github.com/mobius/dsh-performance-slider)** — Performance tier slider interaction and live visual feedback reference.
8. **[claudenoshujin/claude-web](https://github.com/claudenoshujin/claude-web)** (by `lulu`) — Mascot stacking interaction reference (clean-room independent physics implementation).
9. **[wp3171216237/dsh-TUI](https://github.com/wp3171216237/dsh-TUI)** — `MIT License`, `Copyright (c) 2026 chimney (@wp3171216237)` (Visual silhouette, cobalt-blue + white-belly palette, and water-spout animation concept reference for the **Deepy** DeepSeek pixel whale mascot, cleanly adapted in `dual-mascot-rig.js`).

---

### 3. Community Contributors

Thanks to **[@RMvdesi](https://github.com/RMvdesi)** and all community contributors whose work shaped the upstream Obsidian Prism project!

- **Upstream Hall of Contributors & Detailed Credits**: See [**`docs/CONTRIBUTORS.md`**](./docs/CONTRIBUTORS.md) and [`CHANGELOG.md`](./CHANGELOG.md).
- Feel free to report fork-specific issues via [Issues](https://github.com/LYChen328/antigravity-prism/issues) or check out upstream [obsidian-prism](https://github.com/RMvdesi/obsidian-prism).
