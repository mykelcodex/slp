/* @ds-bundle: {"format":3,"namespace":"SLPEventsDesignSystem_39d768","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2eeeccc4ac0f","components/core/Badge.jsx":"8f77d1bb4f3b","components/core/Button.jsx":"ef0a1e3fee2c","components/core/Card.jsx":"f4a1354a3c88","components/core/Divider.jsx":"789ec8b79370","components/core/Eyebrow.jsx":"49e9090f3489","components/core/IconButton.jsx":"6daf656da7bb","components/core/Tag.jsx":"52df9c4c5a67","components/feedback/Accordion.jsx":"2a125f80451d","components/feedback/Dialog.jsx":"8c1c579420b9","components/feedback/Tooltip.jsx":"75054957c918","components/forms/Checkbox.jsx":"b64964a7439e","components/forms/Input.jsx":"551d7fdadab3","components/forms/Radio.jsx":"a6c26e587664","components/forms/Select.jsx":"b40b9e8b4938","components/forms/Switch.jsx":"481dd56c244d","components/forms/Textarea.jsx":"88e1e3e06bed","components/navigation/Tabs.jsx":"288553f124a7","ui_kits/website/Booking.jsx":"4fd5bafd218f","ui_kits/website/Gallery.jsx":"048570a22d8b","ui_kits/website/Home.jsx":"9c439b3d4026","ui_kits/website/Icons.jsx":"2493f52d77dc","ui_kits/website/Services.jsx":"8813c65b5d32","ui_kits/website/Site.jsx":"c75adfd17163"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SLPEventsDesignSystem_39d768 = window.SLPEventsDesignSystem_39d768 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand logotype for SLP Events.
 * No original logo files were provided — this is a type-based wordmark built
 * from the brand display face (Bodoni Moda) plus the four-point "spark" motif.
 */
function Logo({
  variant = "wordmark",
  size = 28,
  color = "var(--ivory)",
  accent = "var(--gold-500)",
  // lavender-green primary
  style,
  ...rest
}) {
  const Spark = ({
    s
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 12 L36 28 L52 32 L36 36 L32 52 L28 36 L12 32 L28 28 Z",
    fill: accent
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "3",
    fill: color
  }));
  if (variant === "monogram") {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "img",
      "aria-label": "SLP Events",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        position: "relative",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Spark, {
      s: size
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "SLP Events",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.55em",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Spark, {
    s: size
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: size * 0.82,
      lineHeight: 1,
      color,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap"
    }
  }, "SLP ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      fontStyle: "italic"
    }
  }, "Events")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label pill. Semantic tones + a signature gold. */
function Badge({
  tone = "gold",
  subtle = false,
  children,
  style,
  ...rest
}) {
  const map = {
    gold: {
      solid: "var(--gold-500)",
      soft: "var(--accent-soft)",
      fg: "var(--gold-200)"
    },
    neutral: {
      solid: "var(--ink-500)",
      soft: "rgba(246,242,233,0.08)",
      fg: "var(--ink-100)"
    },
    wine: {
      solid: "var(--wine-500)",
      soft: "rgba(124,38,57,0.18)",
      fg: "var(--wine-200)"
    },
    success: {
      solid: "var(--success)",
      soft: "rgba(111,168,94,0.16)",
      fg: "#a7d199"
    },
    warning: {
      solid: "var(--warning)",
      soft: "rgba(216,162,74,0.16)",
      fg: "#e7c583"
    },
    danger: {
      solid: "var(--danger)",
      soft: "rgba(198,90,80,0.16)",
      fg: "#e29b93"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-xs)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: subtle ? map.soft : map.solid,
      color: subtle ? map.fg : tone === "gold" ? "var(--text-on-gold)" : "var(--ivory)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action control for SLP Events.
 * Gold-filled "primary", gold-outline "secondary", quiet "ghost", "wine" for
 * rich alternates, and "light" for use on ivory surfaces.
 */
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      font: "var(--text-xs)",
      tracking: "0.14em",
      gap: "8px"
    },
    md: {
      padding: "13px 26px",
      font: "var(--text-sm)",
      tracking: "0.16em",
      gap: "10px"
    },
    lg: {
      padding: "17px 38px",
      font: "var(--text-base)",
      tracking: "0.18em",
      gap: "12px"
    }
  }[size];
  const variants = {
    primary: {
      background: "var(--gradient-gold)",
      color: "var(--text-on-gold)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "transparent",
      color: "var(--gold-300)",
      border: "1px solid var(--border-gold)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)"
    },
    wine: {
      background: "var(--wine-500)",
      color: "var(--ivory)",
      border: "1px solid transparent"
    },
    light: {
      background: "var(--ivory)",
      color: "var(--text-on-light)",
      border: "1px solid transparent"
    }
  }[variant];
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    disabled: Comp === "button" ? disabled : undefined,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: sizes.font,
      letterSpacing: sizes.tracking,
      textTransform: "uppercase",
      textDecoration: "none",
      padding: sizes.padding,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      whiteSpace: "nowrap",
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.filter = "brightness(1.08)";
      if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-glow)";
      if (variant === "secondary" || variant === "ghost") e.currentTarget.style.background = "var(--accent-soft)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "scale(1)";
      if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      if (variant === "secondary" || variant === "ghost") e.currentTarget.style.background = "transparent";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. "gold" adds the signature glow outline for feature cards. */
function Card({
  variant = "default",
  interactive = false,
  children,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-md)"
    },
    raised: {
      background: "var(--surface-raised)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-lg)"
    },
    gold: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-gold)",
      boxShadow: "var(--shadow-gold-card)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      transition: "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      ...variants,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "var(--border-gold)";
      e.currentTarget.style.boxShadow = "var(--shadow-gold-card)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = variants.border.replace("1px solid ", "");
      e.currentTarget.style.boxShadow = variants.boxShadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal or vertical rule. "ornate" centers a spark diamond for section breaks. */
function Divider({
  orientation = "horizontal",
  ornate = false,
  style,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-default)",
        ...style
      }
    }, rest));
  }
  if (ornate) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        color: "var(--gold-500)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "linear-gradient(90deg, transparent, var(--border-gold))"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        transform: "rotate(45deg)"
      }
    }, "\u25C6"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "linear-gradient(90deg, var(--border-gold), transparent)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: "none",
      height: 1,
      background: "var(--border-default)",
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow / kicker label — uppercase, wide tracking, gold. The brand's
 *  signature section opener, often paired with a display heading below. */
function Eyebrow({
  ornament = true,
  color = "var(--gold-300)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), ornament && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "currentColor",
      opacity: 0.6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square/round icon-only control. Pass a 20–24px SVG as children. */
function IconButton({
  variant = "ghost",
  size = "md",
  round = true,
  label,
  children,
  style,
  ...rest
}) {
  const dim = {
    sm: 34,
    md: 42,
    lg: 52
  }[size];
  const variants = {
    solid: {
      background: "var(--gradient-gold)",
      color: "var(--text-on-gold)",
      border: "1px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)"
    },
    bare: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: "pointer",
      transition: "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      ...variants,
      ...style
    },
    onMouseEnter: e => {
      if (variant === "bare") e.currentTarget.style.color = "var(--gold-300)";else if (variant === "ghost") e.currentTarget.style.background = "var(--accent-soft)";
    },
    onMouseLeave: e => {
      if (variant === "bare") e.currentTarget.style.color = "var(--text-secondary)";else if (variant === "ghost") e.currentTarget.style.background = "transparent";
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter/category chip. Optionally selectable and removable. */
function Tag({
  selected = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "var(--text-sm)",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      border: selected ? "1px solid var(--border-gold)" : "1px solid var(--border-default)",
      background: selected ? "var(--accent-soft)" : "transparent",
      color: selected ? "var(--gold-200)" : "var(--text-secondary)",
      cursor: rest.onClick ? "pointer" : "default",
      transition: "all var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      background: "none",
      border: "none",
      color: "inherit",
      cursor: "pointer",
      lineHeight: 1,
      fontSize: "1.1em",
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single expandable FAQ-style item. Uncontrolled by default. */
function Accordion({
  title,
  defaultOpen = false,
  open,
  onToggle,
  children,
  style,
  ...rest
}) {
  const isControlled = open !== undefined;
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = isControlled ? open : internal;
  const toggle = () => {
    if (!isControlled) setInternal(v => !v);
    onToggle?.(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-expanded": isOpen,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      padding: "var(--space-5) 0",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--text-lg)",
      color: "var(--text-primary)"
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      color: "var(--gold-400)",
      fontSize: 20,
      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
      transition: "transform var(--dur-base) var(--ease-standard)"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: isOpen ? "1fr" : "0fr",
      transition: "grid-template-rows var(--dur-slow) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "var(--space-5)",
      font: "var(--type-body)",
      color: "var(--text-secondary)"
    }
  }, children))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal dialog with backdrop blur. Renders nothing when `open` is false. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      background: "rgba(4,4,7,0.72)",
      backdropFilter: "blur(var(--blur-md))",
      animation: "slpFade var(--dur-base) var(--ease-entrance)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      border: "1px solid var(--border-gold)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg), var(--shadow-glow)",
      padding: "var(--space-6)",
      animation: "slpRise var(--dur-slow) var(--ease-entrance)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes slpFade{from{opacity:0}to{opacity:1}}@keyframes slpRise{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}`), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontSize: 22,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
      marginTop: "var(--space-6)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover tooltip. Wraps its trigger children. */
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 900,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      color: "var(--ivory)",
      background: "var(--ink-700)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "6px 10px",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      ...pos,
      ...style
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with gold fill when checked. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-secondary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "var(--radius-sm)",
      flex: "none",
      background: on ? "var(--gradient-gold)" : "var(--ink-900)",
      border: `1px solid ${on ? "transparent" : "var(--border-strong)"}`,
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5L5 9L9.5 3.5",
    stroke: "var(--ink-950)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, hint, error, and leading icon. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-xs)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "flex",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      background: "var(--ink-900)",
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--border-gold)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: iconLeft ? "13px 16px 13px 42px" : "13px 16px",
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px var(--accent-soft)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio option. Group by sharing a `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  name,
  value,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-secondary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      flex: "none",
      background: "var(--ink-900)",
      border: `1px solid ${on ? "var(--border-gold)" : "var(--border-strong)"}`,
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--gradient-gold)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with a custom chevron. */
function Select({
  label,
  hint,
  error,
  id,
  children,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-xs)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      background: "var(--ink-900)",
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--border-gold)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "13px 40px 13px 16px",
      outline: "none",
      cursor: "pointer",
      boxShadow: focus && !error ? "0 0 0 3px var(--accent-soft)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off switch. Gold track when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-secondary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      borderRadius: "var(--radius-pill)",
      flex: "none",
      background: on ? "var(--gradient-gold)" : "var(--ink-600)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--ink-950)" : "var(--ivory)",
      transition: "left var(--dur-base) var(--ease-standard)",
      boxShadow: "var(--shadow-sm)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field. Same treatment as Input. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-xs)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-primary)",
      background: "var(--ink-900)",
      border: `1px solid ${error ? "var(--danger)" : focus ? "var(--border-gold)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "13px 16px",
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px var(--accent-soft)" : "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs with a gold active indicator. Controlled or uncontrolled. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "8px",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: on ? 600 : 500,
        fontSize: "var(--text-sm)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: on ? "var(--gold-200)" : "var(--text-muted)",
        padding: "12px 16px",
        transition: "color var(--dur-base) var(--ease-standard)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--text-secondary)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--text-muted)";
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: -1,
        height: 2,
        background: on ? "var(--gradient-gold)" : "transparent",
        transition: "background var(--dur-base) var(--ease-standard)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
const {
  Input: BInput,
  Textarea: BTextarea,
  Select: BSelect,
  Checkbox: BCheck,
  Button: BBtn,
  Eyebrow: BEye,
  Card: BCard,
  Divider: BDiv
} = window.SLPEventsDesignSystem_39d768;
function Booking() {
  const [sent, setSent] = React.useState(false);
  const wrap = {
    maxWidth: 1040,
    margin: "0 auto",
    padding: "0 var(--space-6)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement(BEye, null, "Book an Experience"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: "clamp(40px,5vw,68px)",
      margin: "16px 0 20px"
    }
  }, "Let's craft your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--gold-300)"
    }
  }, "signature moment")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginBottom: 32,
      maxWidth: "42ch"
    }
  }, "Share a few details and we'll return a bespoke proposal within 24 hours. No obligation, no pressure \u2014 just possibilities."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [["phone", "(212) 555-0148"], ["mail", "hello@slpevents.com"], ["map-pin", "Tri-state area & nationwide"], ["calendar", "Now booking 2026–2027"]].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--text-secondary)",
      font: "var(--type-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--accent-soft)",
      color: "var(--gold-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  })), tx)))), /*#__PURE__*/React.createElement(BCard, {
    variant: "gold",
    style: {
      padding: "var(--space-7)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "999px",
      background: "var(--gradient-gold)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink-950)",
      boxShadow: "var(--shadow-glow)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--ink-950)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h2)",
      margin: "20px 0 8px"
    }
  }, "Enquiry received"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      margin: "0 0 24px"
    }
  }, "We'll be in touch within 24 hours. Get ready to dazzle."), /*#__PURE__*/React.createElement(BBtn, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BInput, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Last name",
    placeholder: "Doe",
    required: true
  })), /*#__PURE__*/React.createElement(BInput, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    }),
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BSelect, {
    label: "Event type"
  }, /*#__PURE__*/React.createElement("option", null, "Wedding"), /*#__PURE__*/React.createElement("option", null, "Corporate"), /*#__PURE__*/React.createElement("option", null, "Proposal"), /*#__PURE__*/React.createElement("option", null, "Gala"), /*#__PURE__*/React.createElement("option", null, "Birthday")), /*#__PURE__*/React.createElement(BInput, {
    label: "Event date",
    type: "date"
  })), /*#__PURE__*/React.createElement(BSelect, {
    label: "Estimated guests"
  }, /*#__PURE__*/React.createElement("option", null, "Under 50"), /*#__PURE__*/React.createElement("option", null, "50\u2013150"), /*#__PURE__*/React.createElement("option", null, "150\u2013300"), /*#__PURE__*/React.createElement("option", null, "300+")), /*#__PURE__*/React.createElement(BTextarea, {
    label: "Your vision",
    rows: 3,
    placeholder: "Tell us about the moment you're dreaming of\u2026"
  }), /*#__PURE__*/React.createElement(BCheck, {
    label: "Add the cold-spark + fog signature combo",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(BBtn, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Send Enquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "We reply within 24 hours \xB7 Fully insured \xB7 Venue-approved")))));
}
window.Booking = Booking;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
const {
  Tag: GTag,
  Eyebrow: GEye,
  Badge: GBadge
} = window.SLPEventsDesignSystem_39d768;
const FILTERS = ["All", "Weddings", "Corporate", "Proposals", "Galas"];
const TILES = [{
  cat: "Weddings",
  tone: "gold",
  label: "Cold spark first dance",
  span: 2
}, {
  cat: "Corporate",
  tone: "wine",
  label: "Product launch cryo",
  span: 1
}, {
  cat: "Proposals",
  tone: "noir",
  label: "Rooftop proposal",
  span: 1
}, {
  cat: "Galas",
  tone: "gold",
  label: "Charity gala entrance",
  span: 1
}, {
  cat: "Weddings",
  tone: "wine",
  label: "Aerial reception",
  span: 1
}, {
  cat: "Corporate",
  tone: "noir",
  label: "LED robot walkabout",
  span: 2
}, {
  cat: "Proposals",
  tone: "gold",
  label: "Beach fog reveal",
  span: 1
}, {
  cat: "Galas",
  tone: "wine",
  label: "Confetti finale",
  span: 1
}];
function Gallery({
  onNav
}) {
  const [filter, setFilter] = React.useState("All");
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--space-6)"
  };
  const tiles = filter === "All" ? TILES : TILES.filter(t => t.cat === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-8)",
      paddingBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(GEye, null, "The Gallery"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: "clamp(44px,6vw,80px)",
      margin: "16px 0 24px"
    }
  }, "Moments we've made"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(GTag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridAutoRows: "220px",
      gap: 16
    }
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: t.span === 2 ? "span 2" : "span 1"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: t.tone,
    ratio: "auto",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 14,
      right: 16,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      fontSize: 16
    }
  }, t.label), /*#__PURE__*/React.createElement(GBadge, {
    tone: "neutral",
    subtle: true
  }, t.cat))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-9)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      marginBottom: 24
    }
  }, "Want to see the full reel? We'll send private footage on request."), /*#__PURE__*/React.createElement(window.SLPEventsDesignSystem_39d768.Button, {
    size: "lg",
    onClick: () => onNav("booking"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Request the Reel")));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button: HBtn,
  Card: HCard,
  Eyebrow: HEye,
  Badge: HBadge,
  Divider: HDiv
} = window.SLPEventsDesignSystem_39d768;
const SERVICES = [{
  icon: "flame",
  name: "Cold Spark Fountains",
  desc: "Indoor-safe, smokeless sparks for grand entrances and first dances.",
  tone: "gold"
}, {
  icon: "users",
  name: "Interactive Performers",
  desc: "LED dancers, aerialists, and roaming acts that command the room.",
  tone: "wine"
}, {
  icon: "sparkles",
  name: "Luxury Special Effects",
  desc: "Low-lying fog, CO₂ jets, confetti, and pyro-safe atmospheres.",
  tone: "noir"
}];
function Stat({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h1)",
      color: "var(--gold-300)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, label));
}
function Home({
  onNav
}) {
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--space-6)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-spotlight)",
      paddingTop: "var(--space-9)",
      paddingBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: "center",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "gold",
    subtle: true
  }, "\u2605 Premium Event Entertainment")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: "clamp(48px, 8vw, 104px)",
      letterSpacing: "-0.02em",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Make every entrance", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--gold-300)"
    }
  }, "unforgettable")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: 19,
      color: "var(--text-secondary)",
      maxWidth: "56ch",
      margin: "26px auto 0"
    }
  }, "Interactive performers, luxury special effects, and breathtaking enhancements \u2014 crafted so every celebration feels like a VIP moment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      marginTop: 36,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    size: "lg",
    onClick: () => onNav("booking"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book an Experience"), /*#__PURE__*/React.createElement(HBtn, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav("gallery"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Watch the Reel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      justifyContent: "center",
      marginTop: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "500+",
    label: "Events Produced"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "12yrs",
    label: "Of Showmanship"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "100%",
    label: "Indoor-Safe FX"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 36,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HEye, null, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      margin: "14px 0 0"
    }
  }, "Signature enhancements")), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    onClick: () => onNav("services"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    })
  }, "All Services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(HCard, {
    key: s.name,
    variant: "gold",
    interactive: true,
    onClick: () => onNav("services"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--accent-soft)",
      color: "var(--gold-300)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: "0 0 8px"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Reel \xB7 0:42",
    tone: "wine",
    ratio: "5/4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 68,
      height: 68,
      borderRadius: "999px",
      background: "var(--gradient-gold)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-glow)",
      color: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 26,
    color: "var(--ink-950)"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HEye, null, "The SLP Difference"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      margin: "14px 0 20px"
    }
  }, "You're the VIP.", /*#__PURE__*/React.createElement("br", null), "We handle the magic."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      marginBottom: 24
    }
  }, "From the first spark to the final bow, our team choreographs every beat \u2014 fully insured, venue-approved, and obsessively on time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["Indoor-safe, smokeless effects", "Dedicated show producer per event", "Nationwide travel for signature events"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "var(--text-secondary)",
      font: "var(--type-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })), t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 820,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-h2)",
      fontStyle: "italic",
      color: "var(--text-primary)",
      margin: "16px 0 24px",
      lineHeight: 1.35
    }
  }, "The cold-spark entrance stopped the entire room. Our guests are still talking about it \u2014 SLP made us feel like royalty."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: 13,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Amara & James \xB7 Wedding, The Plaza"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      padding: "var(--space-9) var(--space-7)",
      textAlign: "center",
      background: "var(--ink-850) var(--gradient-spotlight)",
      border: "1px solid var(--border-gold)",
      boxShadow: "var(--shadow-gold-card)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display)",
      fontSize: 56,
      margin: 0
    }
  }, "Let's create your moment"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      margin: "16px auto 32px",
      maxWidth: "48ch"
    }
  }, "Tell us your date and vision \u2014 we'll craft a bespoke proposal within 24 hours."), /*#__PURE__*/React.createElement(HBtn, {
    size: "lg",
    onClick: () => onNav("booking"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Start Planning"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SLP Events — line icon set. Geometry matches Lucide (1.75px stroke, 24px grid),
// the brand's chosen icon family. Recolor via `color` prop (inherits currentColor).
function Icon({
  name,
  size = 22,
  stroke = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const P = {
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    "arrow-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M5 12h14"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M13 6l6 6-6 6"
    }))),
    "arrow-up-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M7 17L17 7"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M8 7h9v9"
    }))),
    sparkles: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"
    }))),
    star: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9z"
    })),
    phone: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({}, P, {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M2 7l10 6 10-6"
    }))),
    "map-pin": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
    })), /*#__PURE__*/React.createElement("circle", _extends({}, P, {
      cx: "12",
      cy: "10",
      r: "3"
    }))),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M3 6h18"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M3 12h18"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M3 18h18"
    }))),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M18 6L6 18"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M6 6l12 12"
    }))),
    play: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M6 4l14 8-14 8z",
      fill: color
    })),
    quote: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M7 7h4v6a4 4 0 0 1-4 4M15 7h4v6a4 4 0 0 1-4 4"
    })),
    check: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M20 6L9 17l-5-5"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({}, P, {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M3 10h18M8 2v4M16 2v4"
    }))),
    flame: /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c1.5 0 1.5-1.5 1.5-3 0-3-1.5-4-.5-6z"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", _extends({}, P, {
      cx: "9",
      cy: "8",
      r: "3"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M3 20a6 6 0 0 1 12 0"
    })), /*#__PURE__*/React.createElement("path", _extends({}, P, {
      d: "M16 5.5a3 3 0 0 1 0 5.8M21 20a6 6 0 0 0-4-5.6"
    }))),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({}, P, {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5"
    })), /*#__PURE__*/React.createElement("circle", _extends({}, P, {
      cx: "12",
      cy: "12",
      r: "4"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "7",
      r: "1",
      fill: color
    }))
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: "block",
      flex: "none",
      ...style
    }
  }, rest), paths[name] || null);
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  Tabs: STabs,
  Card: SCard,
  Eyebrow: SEye,
  Button: SBtn,
  Badge: SBadge,
  Accordion: SAcc
} = window.SLPEventsDesignSystem_39d768;
const CATALOG = {
  effects: {
    label: "Special Effects",
    items: [{
      name: "Cold Spark Fountains",
      price: "from $850",
      desc: "Smokeless indoor sparks up to 15ft.",
      tag: "Most Booked"
    }, {
      name: "Low-Lying Fog",
      price: "from $650",
      desc: "Dreamy dance-on-clouds first dance.",
      tag: null
    }, {
      name: "CO₂ Cryo Jets",
      price: "from $1,200",
      desc: "High-energy blasts synced to the drop.",
      tag: null
    }, {
      name: "Confetti & Streamers",
      price: "from $450",
      desc: "Timed cannons for the big reveal.",
      tag: null
    }]
  },
  performers: {
    label: "Performers",
    items: [{
      name: "LED Robot Duo",
      price: "from $1,800",
      desc: "Roaming light-suit spectacle.",
      tag: "Crowd Favorite"
    }, {
      name: "Aerial Silk Artist",
      price: "from $1,500",
      desc: "Ceiling-suspended elegance.",
      tag: null
    }, {
      name: "Champagne Skirt Host",
      price: "from $950",
      desc: "Walking bar meets showpiece.",
      tag: null
    }]
  },
  enhancements: {
    label: "Enhancements",
    items: [{
      name: "360° Photo Booth",
      price: "from $700",
      desc: "Slow-mo VIP video capture.",
      tag: null
    }, {
      name: "Custom Gobo Lighting",
      price: "from $400",
      desc: "Your monogram, projected in light.",
      tag: null
    }, {
      name: "Dancing on a Cloud",
      price: "from $650",
      desc: "Signature fog + first-dance combo.",
      tag: "Signature"
    }]
  }
};
function Services({
  onNav
}) {
  const [cat, setCat] = React.useState("effects");
  const wrap = {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--space-6)"
  };
  const list = CATALOG[cat].items;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-8)",
      paddingBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SEye, null, "Our Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: "clamp(44px,6vw,80px)",
      margin: "16px 0 12px"
    }
  }, "The catalog"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "56ch"
    }
  }, "Mix and match to design your night. Every package includes a dedicated show producer and full insurance.")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement(STabs, {
    items: Object.entries(CATALOG).map(([id, v]) => ({
      id,
      label: v.label
    })),
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 20,
      marginTop: 32
    }
  }, list.map(it => /*#__PURE__*/React.createElement(SCard, {
    key: it.name,
    interactive: true,
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "gold",
    ratio: "1/1",
    radius: "var(--radius-md)",
    style: {
      width: 120,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      margin: 0
    }
  }, it.name), it.tag && /*#__PURE__*/React.createElement(SBadge, {
    tone: "gold",
    subtle: true
  }, it.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: "0 0 16px"
    }
  }, it.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h3)",
      color: "var(--gold-300)",
      fontFamily: "var(--font-mono)",
      fontSize: 15
    }
  }, it.price), /*#__PURE__*/React.createElement(SBtn, {
    size: "sm",
    variant: "secondary",
    onClick: () => onNav("booking")
  }, "Add to Enquiry"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SEye, {
    ornament: false
  }, "Curated Packages"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      margin: "12px 0 0"
    }
  }, "Or start with a tier")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, [{
    t: "Silver",
    p: "$1,900",
    f: ["Cold spark entrance", "Custom gobo light", "3-hour coverage"],
    hot: false
  }, {
    t: "Gold",
    p: "$3,600",
    f: ["Everything in Silver", "LED performer duo", "Fog first dance", "Dedicated producer"],
    hot: true
  }, {
    t: "Platinum",
    p: "$6,400",
    f: ["Everything in Gold", "Aerial artist", "360° booth", "CO₂ finale"],
    hot: false
  }].map(pk => /*#__PURE__*/React.createElement(SCard, {
    key: pk.t,
    variant: pk.hot ? "gold" : "default",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, pk.hot && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SBadge, {
    tone: "gold"
  }, "Most Popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h2)",
      margin: "0 0 4px"
    }
  }, pk.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-display)",
      fontSize: 40,
      color: "var(--gold-300)",
      marginBottom: 20
    }
  }, pk.p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1,
      marginBottom: 24
    }
  }, pk.f.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      color: "var(--text-secondary)",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-400)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), f))), /*#__PURE__*/React.createElement(SBtn, {
    variant: pk.hot ? "primary" : "ghost",
    fullWidth: true,
    onClick: () => onNav("booking")
  }, "Choose ", pk.t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 820,
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      textAlign: "center",
      marginBottom: 24
    }
  }, "Good to know"), /*#__PURE__*/React.createElement(SAcc, {
    title: "Are the effects safe indoors?",
    defaultOpen: true
  }, "Yes \u2014 our cold-spark fountains are smokeless, cool to the touch, and approved by most venues. We provide certificates on request."), /*#__PURE__*/React.createElement(SAcc, {
    title: "How far in advance should we book?"
  }, "Peak dates (May\u2013October, December) book 3\u20136 months out. Reach out early to lock your date."), /*#__PURE__*/React.createElement(SAcc, {
    title: "Do you travel?"
  }, "We serve the tri-state area as standard and travel nationwide for signature events. Travel is quoted per booking.")));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
// Shared site chrome: header, footer, and a branded photo placeholder.
const {
  Logo,
  Button,
  Eyebrow,
  Divider
} = window.SLPEventsDesignSystem_39d768;

// Elegant image placeholder (no stock assets shipped — see readme → Imagery).
function Photo({
  label,
  tone = "noir",
  ratio = "4/3",
  radius = "var(--radius-lg)",
  children,
  style
}) {
  const tones = {
    noir: "radial-gradient(120% 120% at 30% 20%, #23222c 0%, #0c0c11 70%)",
    gold: "radial-gradient(120% 120% at 70% 10%, rgba(116,160,102,.35) 0%, #0c0c11 65%)",
    wine: "radial-gradient(120% 120% at 40% 10%, rgba(124,38,57,.5) 0%, #0c0c11 68%)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: "hidden",
      background: tones[tone],
      border: "1px solid var(--border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "80",
    height: "80",
    viewBox: "0 0 64 64",
    style: {
      position: "absolute",
      right: 16,
      bottom: 12,
      opacity: 0.16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 8 L37 27 L56 32 L37 37 L32 56 L27 37 L8 32 L27 27 Z",
    fill: "#74a066"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontFamily: "var(--font-sans)"
    }
  }, label), children);
}
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "services",
  label: "Services"
}, {
  id: "gallery",
  label: "Gallery"
}, {
  id: "booking",
  label: "Book"
}];
function SiteHeader({
  page,
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("kit-scroll");
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 20);
    el.addEventListener("scroll", on);
    return () => el.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(8,8,11,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(var(--blur-md))" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px var(--space-6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 14px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: page === n.id ? "var(--gold-300)" : "var(--text-muted)",
      transition: "color var(--dur-base) var(--ease-standard)"
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav("booking")
  }, "Enquire")));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: "var(--space-9)",
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "34ch",
      marginTop: 16
    }
  }, "Premium event entertainment \u2014 interactive performers, luxury special effects, and unforgettable enhancements."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 20,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 16
    }
  }, "Explore"), NAV.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      cursor: "pointer",
      color: "var(--text-secondary)",
      font: "var(--type-body-sm)",
      marginBottom: 10
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 16
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      font: "var(--type-body-sm)",
      marginBottom: 10
    }
  }, "hello@slpevents.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      font: "var(--type-body-sm)",
      marginBottom: 10
    }
  }, "(212) 555-0148"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      font: "var(--type-body-sm)"
    }
  }, "Serving the tri-state area & beyond"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "18px var(--space-6)",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      color: "var(--text-muted)",
      fontSize: 12,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SLP Events"), /*#__PURE__*/React.createElement("span", null, "Every entrance, grand.")));
}
Object.assign(window, {
  Photo,
  SiteHeader,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
