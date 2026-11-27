// Beta.4 独立 3 语种扩展词典（zh-CN / zh-TW / en；en 0 汉字、0 yue、0 禁用词）
(function (root, factory) {
  const api = factory();
  if (root) root.__agPrismI18nExtBeta4 = api;
  if (typeof window !== 'undefined' && window && window !== root) {
    window.__agPrismI18nExtBeta4 = api;
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const LOCALES = Object.freeze(['zh-CN', 'zh-TW', 'en']);
  const LOCALE_INDEX = Object.freeze(Object.fromEntries(LOCALES.map((l, i) => [l, i])));

  // 列序严格对齐 LOCALES：[zh-CN, zh-TW, en]
  const TABLE = Object.freeze({
    setPerformanceModeTitle: ["性能模式","效能模式","Performance Mode"],
    setPerformanceModeDesc: ["无损调节运行期帧率上限、渲染分辨率与瞬态模糊，不改写您的动效、波纹或宠物设置，随时切回原样恢复。","無損調節執行期影格率上限、渲染解析度與瞬態模糊，不改寫您的動效、波紋或寵物設定，隨時切回原樣恢復。","Losslessly caps runtime FPS, render DPR, and heavy blur without altering your motion, ripple, or mascot settings; switch back anytime to restore."],
    optPerfPerformance: ["极速省电","極速省電","Performance"],
    optPerfBalanced: ["均衡","均衡","Balanced"],
    optPerfQuality: ["全效","全效","Quality"],
    setIgnoreReducedMotionTitle: ["忽略系统减弱动效","忽略系統減弱動效","Ignore System Reduced Motion"],
    setIgnoreReducedMotionDesc: ["关闭 Windows/macOS 系统动画时，仍允许 Prism 按所选动效档位播放；「动效关闭」仍完全禁用全部动效。","關閉 Windows/macOS 系統動畫時，仍允許 Prism 依所選動效檔位播放；「動效關閉」仍會完全停用所有動效。","Allow Prism animations to play at the selected Motion Level even when OS animations are disabled. Motion Level \"Off\" always disables all animations."],
    setChatFontTitle: ["会话正文字体","對話正文字型","Chat Body Font"],
    setChatFontDesc: ["自定义会话消息正文与输入框字体，不干扰代码等宽字体与界面图标，缺失字形自动回退系统字体。","自訂對話訊息正文與輸入框字型，不影響程式碼等寬字型與介面圖示，缺少字形時自動回退系統字型。","Customize chat message body and input font without affecting monospace code blocks or UI icons. Missing glyphs fall back automatically."],
    optChatFontDefault: ["宿主默认","宿主預設","Host Default"],
    optChatFontSystemSans: ["系统无衬线","系統無襯線","System Sans"],
    optChatFontNotoSans: ["思源黑体 (Noto Sans)","思源黑體 (Noto Sans)","Noto Sans"],
    optChatFontInter: ["Inter","Inter","Inter"],
    optChatFontHarmony: ["鸿蒙黑体 (HarmonyOS Sans)","鴻蒙黑體 (HarmonyOS Sans)","HarmonyOS Sans"],
    optFontCustom: ["自定义","自訂","Custom"],
    chatFontCustomPlaceholder: ["输入字体名称，多个以逗号分隔（如 LXGW WenKai, PingFang SC）","輸入字型名稱，多個以逗號分隔（如 LXGW WenKai, PingFang TC）","Font family names, comma-separated (e.g. Inter, Segoe UI)"],
    codeFontCustomPlaceholder: ["输入等宽字体名，逗号分隔（如 Maple Mono, Fira Code）","輸入等寬字型名，逗號分隔（如 Maple Mono, Fira Code）","Monospace font families, comma-separated (e.g. Maple Mono, Fira Code)"],
    btnLoadLocalFonts: ["读取本机字体","讀取本機字型","Load Local Fonts"],
    btnResetFontDefault: ["恢复默认","恢復預設","Reset Default"],
    fontLocalLoading: ["正在读取本机字体…","正在讀取本機字型…","Loading local fonts..."],
    fontLocalLoaded: ["已加载 {n} 个本机字体，可在输入框下拉选择","已載入 {n} 個本機字型，可在輸入框下拉選擇","Loaded {n} local fonts for autocomplete"],
    fontLocalUnsupported: ["当前宿主不支持读取本机字体，请直接手动输入字体名称","目前宿主不支援讀取本機字型，請直接手動輸入字型名稱","Local font enumeration is unavailable here; type font names manually"],
    fontLocalDenied: ["未授权访问本机字体，已回退为手动输入","未授權存取本機字型，已回退為手動輸入","Font permission was declined; you can still enter font names manually"],
    fontSanitizedNotice: ["已自动过滤不安全字符，仅保留有效字体名","已自動過濾不安全字元，僅保留有效字型名","Unsafe characters were stripped; only valid font family names are applied"],
    setTelemetryQuotaModeTitle: ["底栏配额显示","底欄配額顯示","Footer Quota Display"],
    setTelemetryQuotaModeDesc: ["控制输入框底部栏配额槽位：紧凑单槽仅显示更吃紧的窗口（5h 或周），悬停或点击即可查看全部详情；双槽模式在宽度充裕时同时显示 5h 与周。","控制輸入框底部欄配額槽位：精簡單槽僅顯示較吃緊的視窗（5h 或週），懸停或點擊即可檢視完整詳情；雙槽模式在寬度充裕時同時顯示 5h 與週。","Controls quota slots in the composer footer: Compact shows only the tighter window (5h or Weekly) with full details on hover/click; Both shows 5h and Weekly side by side when space allows."],
    optQuotaCompact: ["紧凑单槽","精簡單槽","Compact"],
    optQuotaBoth: ["5h + 周双槽","5h + 週雙槽","Both (5h + Wk)"],
    optAntigravity: ["Antigravity 原版","Antigravity 原版","Antigravity"],
    setPrismRimTitle: ["光标边框流光","游標邊框流光","Cursor Border Glow"],
    setPrismRimDesc: ["鼠标靠近输入框及卡片边缘时显示跟随光标的棱镜光晕。","滑鼠靠近輸入框及卡片邊緣時顯示跟隨游標的稜鏡光暈。","Show a cursor-tracking prism rim glow along the composer and panel borders."],
    setPrismRimStyleTitle: ["流光样式","流光樣式","Glow Style"],
    setPrismRimStyleDesc: ["切换输入框边框效果：彩色棱镜流光跟随光标，或卡片悬停式简单边框高光。","切換輸入框邊框效果：彩色稜鏡流光跟隨游標，或卡片懸停式簡單邊框高光。","Switch composer border effect between colorful cursor prism flow and simple card-hover highlight."],
    optRimPrism: ["棱镜流光","稜鏡流光","Prism Flow"],
    optRimSimple: ["悬停高光","懸停高光","Hover Edge"],
  });

  function normalizeLocale(lang) {
    const raw = typeof lang === 'string' ? lang.trim().toLowerCase().replace(/_/g, '-') : '';
    if (!raw || raw === 'auto') return 'en';
    if (raw === 'zh-tw' || raw === 'zh-hk' || raw === 'zh-mo' || raw === 'zh-hant' || raw.startsWith('zh-hant-')) return 'zh-TW';
    if (raw === 'zh' || raw === 'zh-cn' || raw === 'zh-hans' || raw.startsWith('zh-') || raw === 'yue' || raw.startsWith('yue-')) return 'zh-CN';
    return 'en';
  }

  function getStrings(lang) {
    const idx = LOCALE_INDEX[normalizeLocale(lang)] ?? 2;
    const out = {};
    for (const key of Object.keys(TABLE)) {
      out[key] = TABLE[key][idx];
    }
    return out;
  }

  function mergeIntoUiStrings(baseUi, lang) {
    return Object.assign({}, baseUi || {}, getStrings(lang));
  }

  return {
    LOCALES,
    TABLE,
    normalizeLocale,
    getStrings,
    mergeIntoUiStrings,
  };
});
