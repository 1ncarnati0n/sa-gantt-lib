"use client";
import * as Qe from "react";
import Pe, { forwardRef as et, createElement as it, useState as ae, useRef as be, useMemo as we, useEffect as pe, useCallback as I } from "react";
import { flushSync as tr } from "react-dom";
var ot = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function rr() {
  if (yt) return ze;
  yt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, s, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      a = {};
      for (var c in s)
        c !== "key" && (a[c] = s[c]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return ze.Fragment = r, ze.jsx = t, ze.jsxs = t, ze;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function nr() {
  return xt || (xt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === G ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case S:
          return "Fragment";
        case O:
          return "Profiler";
        case $:
          return "StrictMode";
        case B:
          return "Suspense";
        case E:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case b:
            return "Portal";
          case z:
            return u.displayName || "Context";
          case D:
            return (u._context.displayName || "Context") + ".Consumer";
          case J:
            var M = u.render;
            return u = u.displayName, u || (u = M.displayName || M.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case W:
            return M = u.displayName || null, M !== null ? M : e(u.type) || "Memo";
          case _:
            M = u._payload, u = u._init;
            try {
              return e(u(M));
            } catch {
            }
        }
      return null;
    }
    function r(u) {
      return "" + u;
    }
    function t(u) {
      try {
        r(u);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var L = M.error, F = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return L.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), r(u);
      }
    }
    function n(u) {
      if (u === S) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === _)
        return "<...>";
      try {
        var M = e(u);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = j.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (R.call(u, "key")) {
        var M = Object.getOwnPropertyDescriptor(u, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, M) {
      function L() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: L,
        configurable: !0
      });
    }
    function f() {
      var u = e(this.type);
      return ne[u] || (ne[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function m(u, M, L, F, ee, ce) {
      var H = L.ref;
      return u = {
        $$typeof: x,
        type: u,
        key: M,
        props: L,
        _owner: F
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function g(u, M, L, F, ee, ce) {
      var H = M.children;
      if (H !== void 0)
        if (F)
          if (re(H)) {
            for (F = 0; F < H.length; F++)
              w(H[F]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(H);
      if (R.call(M, "key")) {
        H = e(u);
        var P = Object.keys(M).filter(function(de) {
          return de !== "key";
        });
        F = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", ke[H + F] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          H,
          P,
          H
        ), ke[H + F] = !0);
      }
      if (H = null, L !== void 0 && (t(L), H = "" + L), o(M) && (t(M.key), H = "" + M.key), "key" in M) {
        L = {};
        for (var Ee in M)
          Ee !== "key" && (L[Ee] = M[Ee]);
      } else L = M;
      return H && c(
        L,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), m(
        u,
        H,
        L,
        s(),
        ee,
        ce
      );
    }
    function w(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === _ && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === x;
    }
    var d = Pe, x = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), z = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), j = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, re = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var Z, ne = {}, ve = d.react_stack_bottom_frame.bind(
      d,
      a
    )(), De = oe(n(a)), ke = {};
    Le.Fragment = S, Le.jsx = function(u, M, L) {
      var F = 1e4 > j.recentlyCreatedOwnerStacks++;
      return g(
        u,
        M,
        L,
        !1,
        F ? Error("react-stack-top-frame") : ve,
        F ? oe(n(u)) : De
      );
    }, Le.jsxs = function(u, M, L) {
      var F = 1e4 > j.recentlyCreatedOwnerStacks++;
      return g(
        u,
        M,
        L,
        !0,
        F ? Error("react-stack-top-frame") : ve,
        F ? oe(n(u)) : De
      );
    };
  }()), Le;
}
process.env.NODE_ENV === "production" ? ot.exports = rr() : ot.exports = nr();
var i = ot.exports;
const $t = 6048e5, sr = 864e5, bt = Symbol.for("constructDateFrom");
function ge(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && bt in e ? e[bt](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Q(e, r) {
  return ge(r || e, e);
}
function q(e, r, t) {
  const n = Q(e, t == null ? void 0 : t.in);
  return isNaN(r) ? ge(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Gt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 6;
}
function Vt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 0;
}
let ar = {};
function $e() {
  return ar;
}
function je(e, r) {
  var c, f, m, g;
  const t = $e(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? t.weekStartsOn ?? ((g = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ?? 0, s = Q(e, r == null ? void 0 : r.in), a = s.getDay(), o = (a < n ? 7 : 0) + a - n;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function Je(e, r) {
  return je(e, { ...r, weekStartsOn: 1 });
}
function qt(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = ge(t, 0);
  s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Je(s), o = ge(t, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const c = Je(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
function pt(e) {
  const r = Q(e), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +e - +t;
}
function Ge(e, ...r) {
  const t = ge.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function Ye(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Xt(e, r, t) {
  const [n, s] = Ge(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = Ye(n), o = Ye(s), c = +a - pt(a), f = +o - pt(o);
  return Math.round((c - f) / sr);
}
function ir(e, r) {
  const t = qt(e, r), n = ge(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Je(n);
}
function or(e, r, t) {
  const [n, s] = Ge(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +Ye(n) == +Ye(s);
}
function cr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function lr(e) {
  return !(!cr(e) && typeof e != "number" || isNaN(+Q(e)));
}
function ct(e, r, t) {
  const [n, s] = Ge(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = wt(n, s), o = Math.abs(
    Xt(n, s)
  );
  n.setDate(n.getDate() - a * o);
  const c = +(wt(n, s) === -a), f = a * (o - c);
  return f === 0 ? 0 : f;
}
function wt(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function dr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ur(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const hr = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, fr = (e, r, t) => {
  let n;
  const s = hr[e];
  return typeof s == "string" ? n = s : r === 1 ? n = s.one : n = s.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function st(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const mr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, yr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xr = {
  date: st({
    formats: mr,
    defaultWidth: "full"
  }),
  time: st({
    formats: gr,
    defaultWidth: "full"
  }),
  dateTime: st({
    formats: yr,
    defaultWidth: "full"
  })
}, br = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pr = (e, r, t, n) => br[e];
function Fe(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, c = t != null && t.width ? String(t.width) : o;
      s = e.formattingValues[c] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, c = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[c] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[a];
  };
}
const wr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Dr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, kr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Er = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Mr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Sr = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Wr = {
  ordinalNumber: Sr,
  era: Fe({
    values: wr,
    defaultWidth: "wide"
  }),
  quarter: Fe({
    values: vr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Fe({
    values: Dr,
    defaultWidth: "wide"
  }),
  day: Fe({
    values: kr,
    defaultWidth: "wide"
  }),
  dayPeriod: Fe({
    values: Er,
    defaultWidth: "wide",
    formattingValues: Mr,
    defaultFormattingWidth: "wide"
  })
};
function He(e) {
  return (r, t = {}) => {
    const n = t.width, s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(s);
    if (!a)
      return null;
    const o = a[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(c) ? Tr(c, (w) => w.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      jr(c, (w) => w.test(o))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(f) : f, m = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(m)
    ) : m;
    const g = r.slice(o.length);
    return { value: m, rest: g };
  };
}
function jr(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function Tr(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function Nr(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const s = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = t.valueCallback ? t.valueCallback(o) : o;
    const c = r.slice(s.length);
    return { value: o, rest: c };
  };
}
const Or = /^(\d+)(th|st|nd|rd)?/i, Pr = /\d+/i, _r = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Cr = {
  any: [/^b/i, /^(a|c)/i]
}, Ir = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Rr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ar = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Lr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Hr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, $r = {
  ordinalNumber: Nr({
    matchPattern: Or,
    parsePattern: Pr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: He({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: Cr,
    defaultParseWidth: "any"
  }),
  quarter: He({
    matchPatterns: Ir,
    defaultMatchWidth: "wide",
    parsePatterns: Rr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: He({
    matchPatterns: Ar,
    defaultMatchWidth: "wide",
    parsePatterns: zr,
    defaultParseWidth: "any"
  }),
  day: He({
    matchPatterns: Lr,
    defaultMatchWidth: "wide",
    parsePatterns: Fr,
    defaultParseWidth: "any"
  }),
  dayPeriod: He({
    matchPatterns: Hr,
    defaultMatchWidth: "any",
    parsePatterns: Yr,
    defaultParseWidth: "any"
  })
}, Gr = {
  code: "en-US",
  formatDistance: fr,
  formatLong: xr,
  formatRelative: pr,
  localize: Wr,
  match: $r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Vr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return Xt(t, ur(t)) + 1;
}
function qr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +Je(t) - +ir(t);
  return Math.round(n / $t) + 1;
}
function Bt(e, r) {
  var g, w, y, d;
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = $e(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((w = (g = r == null ? void 0 : r.locale) == null ? void 0 : g.options) == null ? void 0 : w.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((d = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = ge((r == null ? void 0 : r.in) || e, 0);
  o.setFullYear(n + 1, 0, a), o.setHours(0, 0, 0, 0);
  const c = je(o, r), f = ge((r == null ? void 0 : r.in) || e, 0);
  f.setFullYear(n, 0, a), f.setHours(0, 0, 0, 0);
  const m = je(f, r);
  return +t >= +c ? n + 1 : +t >= +m ? n : n - 1;
}
function Xr(e, r) {
  var c, f, m, g;
  const t = $e(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((f = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((g = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Bt(e, r), a = ge((r == null ? void 0 : r.in) || e, 0);
  return a.setFullYear(s, 0, n), a.setHours(0, 0, 0, 0), je(a, r);
}
function Br(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +je(t, r) - +Xr(t, r);
  return Math.round(n / $t) + 1;
}
function A(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const ye = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return A(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : A(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return A(e.getDate(), r.length);
  },
  // AM or PM
  a(e, r) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, r) {
    return A(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return A(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return A(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return A(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), s = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return A(s, r.length);
  }
}, Ne = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, vt = {
  // Era
  G: function(e, r, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, r, t) {
    if (r === "yo") {
      const n = e.getFullYear(), s = n > 0 ? n : 1 - n;
      return t.ordinalNumber(s, { unit: "year" });
    }
    return ye.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const s = Bt(e, n), a = s > 0 ? s : 1 - s;
    if (r === "YY") {
      const o = a % 100;
      return A(o, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : A(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = qt(e);
    return A(t, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, r) {
    const t = e.getFullYear();
    return A(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return A(n, 2);
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(n);
      case "qq":
        return A(n, 2);
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return ye.M(e, r);
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "L":
        return String(n + 1);
      case "LL":
        return A(n + 1, 2);
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, r, t, n) {
    const s = Br(e, n);
    return r === "wo" ? t.ordinalNumber(s, { unit: "week" }) : A(s, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = qr(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : A(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : ye.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Vr(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : A(n, r.length);
  },
  // Day of week
  E: function(e, r, t) {
    const n = e.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, r, t, n) {
    const s = e.getDay(), a = (s - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(a);
      case "ee":
        return A(a, 2);
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const s = e.getDay(), a = (s - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(a);
      case "cc":
        return A(a, r.length);
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), s = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(s);
      case "ii":
        return A(s, r.length);
      case "io":
        return t.ordinalNumber(s, { unit: "day" });
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, r, t) {
    const s = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let s;
    switch (n === 12 ? s = Ne.noon : n === 0 ? s = Ne.midnight : s = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let s;
    switch (n >= 17 ? s = Ne.evening : n >= 12 ? s = Ne.afternoon : n >= 4 ? s = Ne.morning : s = Ne.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, r, t) {
    if (r === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return ye.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : ye.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : A(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : A(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ye.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : ye.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return ye.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return kt(n);
      case "XXXX":
      case "XX":
        return Se(n);
      case "XXXXX":
      case "XXX":
      default:
        return Se(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return kt(n);
      case "xxxx":
      case "xx":
        return Se(n);
      case "xxxxx":
      case "xxx":
      default:
        return Se(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Dt(n, ":");
      case "OOOO":
      default:
        return "GMT" + Se(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Dt(n, ":");
      case "zzzz":
      default:
        return "GMT" + Se(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return A(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return A(+e, r.length);
  }
};
function Dt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(s) : t + String(s) + r + A(a, 2);
}
function kt(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + A(Math.abs(e) / 60, 2) : Se(e, r);
}
function Se(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = A(Math.trunc(n / 60), 2), a = A(n % 60, 2);
  return t + s + r + a;
}
const Et = (e, r) => {
  switch (e) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, Ut = (e, r) => {
  switch (e) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, Ur = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], s = t[2];
  if (!s)
    return Et(e, r);
  let a;
  switch (n) {
    case "P":
      a = r.dateTime({ width: "short" });
      break;
    case "PP":
      a = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = r.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Et(n, r)).replace("{{time}}", Ut(s, r));
}, Kr = {
  p: Ut,
  P: Ur
}, Qr = /^D+$/, Jr = /^Y+$/, Zr = ["D", "DD", "YY", "YYYY"];
function en(e) {
  return Qr.test(e);
}
function tn(e) {
  return Jr.test(e);
}
function rn(e, r, t) {
  const n = nn(e, r, t);
  if (console.warn(n), Zr.includes(e)) throw new RangeError(n);
}
function nn(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const sn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, an = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, on = /^'([^]*?)'?$/, cn = /''/g, ln = /[a-zA-Z]/;
function he(e, r, t) {
  var g, w, y, d;
  const n = $e(), s = n.locale ?? Gr, a = n.firstWeekContainsDate ?? ((w = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = n.weekStartsOn ?? ((d = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : d.weekStartsOn) ?? 0, c = Q(e, t == null ? void 0 : t.in);
  if (!lr(c))
    throw new RangeError("Invalid time value");
  let f = r.match(an).map((x) => {
    const b = x[0];
    if (b === "p" || b === "P") {
      const S = Kr[b];
      return S(x, s.formatLong);
    }
    return x;
  }).join("").match(sn).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const b = x[0];
    if (b === "'")
      return { isToken: !1, value: dn(x) };
    if (vt[b])
      return { isToken: !0, value: x };
    if (b.match(ln))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: x };
  });
  s.localize.preprocessor && (f = s.localize.preprocessor(c, f));
  const m = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: s
  };
  return f.map((x) => {
    if (!x.isToken) return x.value;
    const b = x.value;
    (tn(b) || en(b)) && rn(b, r, String(e));
    const S = vt[b[0]];
    return S(c, b, s.localize, m);
  }).join("");
}
function dn(e) {
  const r = e.match(on);
  return r ? r[1].replace(cn, "'") : e;
}
function un(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDate();
}
function tt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay();
}
function Mt(e, r) {
  var f, m, g, w;
  const t = $e(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((m = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((w = (g = t.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = un(Q(e, r == null ? void 0 : r.in));
  if (isNaN(s)) return NaN;
  const a = tt(dr(e, r));
  let o = n - a;
  o <= 0 && (o += 7);
  const c = s - o;
  return Math.ceil(c / 7) + 1;
}
function at(e, r) {
  return Q(e, r == null ? void 0 : r.in).getFullYear();
}
function hn(e, r, t) {
  const [n, s] = Ge(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +je(n, t) == +je(s, t);
}
function fn(e, r, t) {
  const [n, s] = Ge(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth();
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), St = (e) => {
  const r = gn(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Kt = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), yn = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = et(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...c
  }, f) => it(
    "svg",
    {
      ref: f,
      ...xn,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: Kt("lucide", s),
      ...!a && !yn(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...o.map(([m, g]) => it(m, g)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = (e, r) => {
  const t = et(
    ({ className: n, ...s }, a) => it(bn, {
      ref: a,
      iconNode: r,
      className: Kt(
        `lucide-${mn(St(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return t.displayName = St(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wn = Ve("check", pn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Dn = Ve("chevron-down", vn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], En = Ve("chevron-right", kn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Wt = Ve("grip-vertical", Mn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Wn = Ve("x", Sn), me = {
  // Level 1 Colors (공구 공정표)
  vermilion: "#E34234",
  // 작업일수 (Work Days)
  teal: "#008080",
  // 비작업일수 (Non-Work Days)
  // Level 2 Colors (주공정표)
  red: "#FF5252",
  // 순작업일 (Net Work)
  blue: "#448AFF",
  // 간접작업일 (Indirect Work)
  // Common Colors
  milestone: "#4B5563",
  // 마일스톤
  dependency: "#9CA3AF",
  // 연결선
  grid: "#E5E7EB",
  // 그리드 라인
  weekend: "#f3f4f6",
  // 주말 배경
  holiday: "#fef2f2"
  // 휴일 배경
}, We = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, Ze = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, { ROW_HEIGHT: xe, HEADER_HEIGHT: jt, MILESTONE_LANE_HEIGHT: Tt } = We, Nt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], Ot = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Ke = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Qt = et(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: s, onTaskClick: a, onTaskUpdate: o, onTaskCreate: c, onTaskReorder: f, activeCPId: m, virtualRows: g, totalHeight: w, onTotalWidthChange: y, onTaskGroup: d, onTaskUngroup: x, isAddingTask: b = !1, onCancelAddTask: S }, $) => {
    const O = g && g.length > 0, [D, z] = ae(Ke), J = be(null), [B, E] = ae(null), [W, _] = ae(null), [C, G] = ae(null), [j, R] = ae(/* @__PURE__ */ new Set()), [re, oe] = ae(null), [Z, ne] = ae(null), [ve, De] = ae(
      Nt.map((h) => h.width)
    ), [ke, u] = ae(
      Ot.map((h) => h.width)
    ), [M, L] = ae(null), F = be(!1), ee = t === "MASTER" ? Nt : Ot, ce = t === "MASTER" ? ve : ke, H = t === "MASTER" ? De : u, P = we(
      () => ee.map((h, l) => ({
        ...h,
        width: ce[l] ?? h.width
      })),
      [ee, ce]
    ), Ee = f ? 24 : 0, de = P.reduce((h, l) => h + l.width, 0) + Ee;
    pe(() => {
      y && y(de);
    }, [de, y]);
    const rt = I((h, l) => {
      if (h.detail >= 2) return;
      h.preventDefault(), h.stopPropagation(), F.current = !0, L(l);
      const p = h.clientX, Y = ce[l], X = ee[l].minWidth, k = (V) => {
        if (!F.current) return;
        const fe = V.clientX - p, U = Math.max(X, Y + fe);
        H((gt) => {
          const Ue = [...gt];
          return Ue[l] = U, Ue;
        });
      }, N = () => {
        F.current = !1, L(null), document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", N);
      };
      document.addEventListener("mousemove", k), document.addEventListener("mouseup", N);
    }, [ce, ee, H]), Me = I((h, l = 12, p = "normal") => {
      const X = document.createElement("canvas").getContext("2d");
      return X ? (X.font = `${p} ${l}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, X.measureText(h).width) : 0;
    }, []), Te = I((h) => {
      const l = ee[h].minWidth, p = h === 0, Y = p ? 48 : 20, X = ee[h].label;
      let k = Me(X, 12, "500") + 16;
      return e.forEach((N) => {
        let V = "", fe = 0;
        if (t === "MASTER") {
          const nt = N.type === "GROUP";
          switch (p && N.parentId && (fe = 20), h) {
            case 0:
              V = N.name;
              break;
            case 1:
              V = nt ? "-" : N.cp ? `${N.cp.workDaysTotal + N.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              V = nt ? "-" : N.cp ? `${N.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              V = nt ? "-" : N.cp ? `${N.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (h) {
            case 0:
              V = N.name;
              break;
            case 1:
              V = N.task ? String(N.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              V = N.task ? String(N.task.netWorkDays) : "-";
              break;
            case 3:
              V = N.task ? String(N.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              V = he(N.startDate, "yyyy-MM-dd");
              break;
            case 5:
              V = he(N.endDate, "yyyy-MM-dd");
              break;
          }
        const Ue = Me(V, p ? 14 : 12, p ? "500" : "normal") + Y + fe;
        k = Math.max(k, Ue);
      }), Math.max(l, Math.ceil(k));
    }, [e, t, ee, Me]), qe = I((h, l) => {
      h.preventDefault(), h.stopPropagation(), F.current = !1, L(null);
      const p = Te(l);
      H((Y) => {
        const X = [...Y];
        return X[l] = p, X;
      });
    }, [Te, H]), Re = I((h, l, p) => {
      if (!h.task || !o) return;
      const Y = {
        ...h,
        task: {
          ...h.task,
          [l]: p
        }
      };
      o(Y);
    }, [o]);
    pe(() => {
      b && (z(Ke), setTimeout(() => {
        var h;
        (h = J.current) == null || h.focus();
      }, 0));
    }, [b]);
    const Ae = I(() => {
      z(Ke), S == null || S();
    }, [S]), v = I(() => {
      if (!D.name.trim() || !c || !m) return;
      const h = e[e.length - 1], l = h ? q(h.endDate, 1) : /* @__PURE__ */ new Date(), p = D.indirectWorkDaysPre + D.netWorkDays + D.indirectWorkDaysPost, Y = q(l, Math.max(p - 1, 0)), X = {
        id: `task-${Date.now()}`,
        // 임시 ID (서버에서 재할당 가능)
        parentId: m,
        wbsLevel: 2,
        type: "TASK",
        name: D.name.trim(),
        startDate: l,
        endDate: Y,
        task: {
          netWorkDays: D.netWorkDays,
          indirectWorkDaysPre: D.indirectWorkDaysPre,
          indirectWorkDaysPost: D.indirectWorkDaysPost
        },
        dependencies: []
      };
      c(X), z(Ke), S == null || S();
    }, [D, c, m, e, S]), T = I((h) => {
      h.key === "Enter" ? (h.preventDefault(), v()) : h.key === "Escape" && (h.preventDefault(), Ae());
    }, [v, Ae]), K = I((h, l) => {
      h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("text/plain", l), E(l);
      const p = document.createElement("div");
      p.style.opacity = "0", document.body.appendChild(p), h.dataTransfer.setDragImage(p, 0, 0), setTimeout(() => document.body.removeChild(p), 0);
    }, []), te = I((h, l) => {
      if (h.preventDefault(), h.dataTransfer.dropEffect = "move", l === B) return;
      const p = h.currentTarget.getBoundingClientRect(), Y = p.top + p.height / 2, X = h.clientY < Y ? "before" : "after";
      _(l), G(X);
    }, [B]), ie = I(() => {
      _(null), G(null);
    }, []), Xe = I((h, l) => {
      if (h.preventDefault(), !B || !f || B === l) {
        E(null), _(null), G(null);
        return;
      }
      const p = e.findIndex((X) => X.id === l), Y = C === "after" ? p + 1 : p;
      f(B, Y), E(null), _(null), G(null);
    }, [B, C, f, e]), Be = I(() => {
      E(null), _(null), G(null);
    }, []), dt = I((h, l, p) => {
      if (B) return;
      const Y = h.ctrlKey || h.metaKey, X = h.shiftKey;
      if (Y)
        R((k) => {
          const N = new Set(k);
          return N.has(l.id) ? N.delete(l.id) : N.add(l.id), N;
        }), oe(p);
      else if (X && re !== null) {
        const k = Math.min(re, p), N = Math.max(re, p);
        R((V) => {
          const fe = new Set(V);
          for (let U = k; U <= N; U++)
            e[U] && fe.add(e[U].id);
          return fe;
        });
      } else
        R(/* @__PURE__ */ new Set([l.id])), oe(p);
    }, [B, re, e]), ut = I((h, l) => {
      h.preventDefault(), j.has(l.id) || R(/* @__PURE__ */ new Set([l.id])), ne({
        x: h.clientX,
        y: h.clientY,
        taskId: l.id
      });
    }, [j]);
    pe(() => {
      const h = () => {
        ne(null);
      };
      if (Z)
        return document.addEventListener("click", h), () => document.removeEventListener("click", h);
    }, [Z]);
    const ht = I(() => {
      j.size < 2 || !d || (d(Array.from(j)), R(/* @__PURE__ */ new Set()), ne(null));
    }, [j, d]), ft = I(() => {
      if (j.size !== 1 || !x) return;
      const h = Array.from(j)[0], l = e.find((p) => p.id === h);
      (l == null ? void 0 : l.type) === "GROUP" && (x(h), R(/* @__PURE__ */ new Set()), ne(null));
    }, [j, e, x]);
    pe(() => {
      const h = (l) => {
        l.key === "Escape" && (R(/* @__PURE__ */ new Set()), ne(null));
      };
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, []);
    const mt = () => /* @__PURE__ */ i.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: P.map((h, l) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: h.width },
        children: [
          h.label,
          l < P.length - 1 && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${M === l ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (p) => rt(p, l),
              onDoubleClick: (p) => qe(p, l),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          l < P.length - 1 && /* @__PURE__ */ i.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      h.id
    )) });
    return t === "MASTER" ? /* @__PURE__ */ i.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: jt },
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "flex flex-1 items-center px-4 font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
            mt()
          ]
        }
      ),
      M !== null && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ i.jsxs("div", { ref: $, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Tt, minWidth: de },
            children: P.map((h, l) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: h.width },
                children: l === 0 && "Milestone"
              },
              h.id
            ))
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            style: {
              minWidth: de,
              height: O ? w : void 0,
              position: "relative"
            },
            children: (O ? g : e.map((h, l) => ({ index: l, start: l * xe, size: xe, key: l }))).map((h) => {
              const l = e[h.index];
              if (!l) return null;
              const p = l.type === "GROUP", Y = p && r.some((U) => U.parentId === l.id), X = n.has(l.id), k = l.parentId ? 20 : 0, N = B === l.id, V = W === l.id, fe = j.has(l.id);
              return /* @__PURE__ */ i.jsxs(
                "div",
                {
                  draggable: !!f,
                  onDragStart: (U) => K(U, l.id),
                  onDragOver: (U) => te(U, l.id),
                  onDragLeave: ie,
                  onDrop: (U) => Xe(U, l.id),
                  onDragEnd: Be,
                  onClick: (U) => dt(U, l, h.index),
                  onContextMenu: (U) => ut(U, l),
                  className: `box-border flex items-center border-b transition-all duration-150 ${N ? "opacity-50 bg-blue-50" : V ? C === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : fe ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : p ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                  style: {
                    height: xe,
                    ...O ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${h.start}px)`
                    } : {}
                  },
                  onDoubleClick: () => !p && a(l),
                  title: p ? void 0 : "더블클릭하여 상세 공정표 보기",
                  children: [
                    f && /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                        style: { width: 24 },
                        children: /* @__PURE__ */ i.jsx(Wt, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                        style: { width: f ? P[0].width - 24 : P[0].width, paddingLeft: k + 8 },
                        children: [
                          Y ? /* @__PURE__ */ i.jsx(
                            "button",
                            {
                              onClick: (U) => {
                                U.stopPropagation(), s(l.id);
                              },
                              className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                              children: X ? /* @__PURE__ */ i.jsx(Dn, { size: 14 }) : /* @__PURE__ */ i.jsx(En, { size: 14 })
                            }
                          ) : /* @__PURE__ */ i.jsx("div", { className: "w-6 shrink-0" }),
                          /* @__PURE__ */ i.jsx(
                            "span",
                            {
                              className: `truncate text-sm ${p ? "font-bold text-gray-700" : "font-medium text-gray-800"}`,
                              children: l.name
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                        style: { width: P[1].width },
                        children: p ? "-" : l.cp ? `${l.cp.workDaysTotal + l.cp.nonWorkDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                        style: { width: P[2].width },
                        children: p ? "-" : l.cp ? `${l.cp.workDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center text-xs text-teal",
                        style: { width: P[3].width },
                        children: p ? "-" : l.cp ? `${l.cp.nonWorkDaysTotal}일` : "-"
                      }
                    )
                  ]
                },
                h.key
              );
            })
          }
        )
      ] }),
      Z && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
          style: { left: Z.x, top: Z.y },
          onClick: (h) => h.stopPropagation(),
          children: [
            j.size >= 2 && d && /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: ht,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
                  "그룹화 (",
                  j.size,
                  "개 선택됨)"
                ]
              }
            ),
            j.size === 1 && x && (() => {
              const h = Array.from(j)[0], l = e.find((p) => p.id === h);
              return (l == null ? void 0 : l.type) === "GROUP";
            })() && /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: ft,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
                  "그룹 해제"
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => {
                  R(/* @__PURE__ */ new Set()), ne(null);
                },
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
                  "선택 해제"
                ]
              }
            )
          ]
        }
      )
    ] }) : /* @__PURE__ */ i.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: jt },
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "flex flex-1 items-center px-4", children: /* @__PURE__ */ i.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }) }),
            mt()
          ]
        }
      ),
      M !== null && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ i.jsxs("div", { ref: $, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Tt, minWidth: de },
            children: P.map((h, l) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: h.width },
                children: l === 0 && "Milestone"
              },
              h.id
            ))
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            style: {
              minWidth: de,
              height: O ? w : void 0,
              position: "relative"
            },
            children: [
              (O ? g : e.map((h, l) => ({ index: l, start: l * xe, size: xe, key: l }))).map((h) => {
                const l = e[h.index];
                if (!l) return null;
                const p = B === l.id, Y = W === l.id, X = j.has(l.id);
                return /* @__PURE__ */ i.jsxs(
                  "div",
                  {
                    draggable: !!f,
                    onDragStart: (k) => K(k, l.id),
                    onDragOver: (k) => te(k, l.id),
                    onDragLeave: ie,
                    onDrop: (k) => Xe(k, l.id),
                    onDragEnd: Be,
                    onClick: (k) => dt(k, l, h.index),
                    onContextMenu: (k) => ut(k, l),
                    className: `box-border flex items-center border-b transition-colors ${p ? "opacity-50 bg-blue-50" : Y ? C === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : X ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: xe,
                      ...O ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${h.start}px)`
                      } : {}
                    },
                    children: [
                      f && /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ i.jsx(Wt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? P[0].width - 24 : P[0].width },
                          children: /* @__PURE__ */ i.jsx("span", { className: "truncate text-sm text-gray-700", children: l.name })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: P[1].width },
                          children: l.task ? /* @__PURE__ */ i.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: l.task.indirectWorkDaysPre,
                              onChange: (k) => {
                                const N = k.target.value.replace(/[^0-9]/g, ""), V = parseInt(N) || 0;
                                Re(l, "indirectWorkDaysPre", V);
                              },
                              onKeyDown: (k) => {
                                (k.key === "-" || k.key === "e" || k.key === "+" || k.key === ".") && k.preventDefault();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ i.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: P[2].width },
                          children: l.task ? /* @__PURE__ */ i.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: l.task.netWorkDays,
                              onChange: (k) => {
                                const N = k.target.value.replace(/[^0-9]/g, ""), V = parseInt(N) || 0;
                                Re(l, "netWorkDays", V);
                              },
                              onKeyDown: (k) => {
                                (k.key === "-" || k.key === "e" || k.key === "+" || k.key === ".") && k.preventDefault();
                              },
                              title: "순작업일"
                            }
                          ) : /* @__PURE__ */ i.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: P[3].width },
                          children: l.task ? /* @__PURE__ */ i.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: l.task.indirectWorkDaysPost,
                              onChange: (k) => {
                                const N = k.target.value.replace(/[^0-9]/g, ""), V = parseInt(N) || 0;
                                Re(l, "indirectWorkDaysPost", V);
                              },
                              onKeyDown: (k) => {
                                (k.key === "-" || k.key === "e" || k.key === "+" || k.key === ".") && k.preventDefault();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ i.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: P[4].width },
                          children: he(l.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: P[5].width },
                          children: he(l.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  h.key
                );
              }),
              b && /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
                  style: {
                    height: xe,
                    ...O ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${e.length * xe}px)`
                    } : {}
                  },
                  children: [
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
                        style: { width: P[0].width },
                        children: /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            ref: J,
                            type: "text",
                            placeholder: "공정명...",
                            className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.name,
                            onChange: (h) => z((l) => ({ ...l, name: h.target.value })),
                            onKeyDown: T
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: P[1].width },
                        children: /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.indirectWorkDaysPre,
                            onChange: (h) => {
                              const l = h.target.value.replace(/[^0-9]/g, ""), p = parseInt(l) || 0;
                              z((Y) => ({ ...Y, indirectWorkDaysPre: p }));
                            },
                            onKeyDown: T,
                            title: "선 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: P[2].width },
                        children: /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.netWorkDays,
                            onChange: (h) => {
                              const l = h.target.value.replace(/[^0-9]/g, ""), p = parseInt(l) || 0;
                              z((Y) => ({ ...Y, netWorkDays: p }));
                            },
                            onKeyDown: T,
                            title: "순작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: P[3].width },
                        children: /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.indirectWorkDaysPost,
                            onChange: (h) => {
                              const l = h.target.value.replace(/[^0-9]/g, ""), p = parseInt(l) || 0;
                              z((Y) => ({ ...Y, indirectWorkDaysPost: p }));
                            },
                            onKeyDown: T,
                            title: "후 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center gap-1 px-2",
                        style: { width: P[4].width + P[5].width },
                        children: [
                          /* @__PURE__ */ i.jsx(
                            "button",
                            {
                              onClick: v,
                              disabled: !D.name.trim(),
                              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                              title: "저장 (Enter)",
                              children: /* @__PURE__ */ i.jsx(wn, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ i.jsx(
                            "button",
                            {
                              onClick: Ae,
                              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                              title: "취소 (Esc)",
                              children: /* @__PURE__ */ i.jsx(Wn, { size: 14 })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }),
      Z && /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
          style: { left: Z.x, top: Z.y },
          onClick: (h) => h.stopPropagation(),
          children: [
            j.size >= 2 && d && /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: ht,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
                  "그룹화 (",
                  j.size,
                  "개 선택됨)"
                ]
              }
            ),
            j.size === 1 && x && (() => {
              const h = Array.from(j)[0], l = e.find((p) => p.id === h);
              return (l == null ? void 0 : l.type) === "GROUP";
            })() && /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: ft,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
                  "그룹 해제"
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => {
                  R(/* @__PURE__ */ new Set()), ne(null);
                },
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
                  "선택 해제"
                ]
              }
            )
          ]
        }
      )
    ] });
  }
);
Qt.displayName = "GanttSidebar";
const _e = (e, r = [], t) => !!(!t.workOnSaturdays && Gt(e) || !t.workOnSundays && Vt(e) || !t.workOnHolidays && r.some((n) => or(n, e))), cs = (e) => Gt(e) || Vt(e), jn = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; _e(s, t, n); )
    s = q(s, 1);
  for (; a < r; )
    _e(s, t, n) || a++, a < r && (s = q(s, 1));
  return s;
}, ls = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; a < r; )
    s = q(s, -1), _e(s, t, n) || a++;
  return s;
}, Pt = (e, r) => r <= 0 ? e : q(e, r - 1), ds = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: s, indirectWorkDaysPost: a } = e.task, o = Ye(new Date(e.startDate));
  let c = o, f, m;
  s > 0 && (f = c, m = Pt(c, s), c = q(m, 1));
  let g = c, w = g;
  if (n > 0) {
    for (; _e(g, r, t); )
      g = q(g, 1);
    w = jn(g, n, r, t), c = q(w, 1);
  } else s === 0 && (g = o, w = o);
  let y, d;
  return a > 0 && (y = c, d = Pt(c, a)), {
    startDate: f || g,
    endDate: d || w,
    netWorkStartDate: g,
    netWorkEndDate: w,
    indirectPreStartDate: f,
    indirectPreEndDate: m,
    indirectPostStartDate: y,
    indirectPostEndDate: d
  };
}, us = (e, r, t) => {
  switch (r) {
    case "START":
      return t.startDate;
    case "NET_WORK_START":
      return t.netWorkStartDate;
    case "NET_WORK_END":
      return t.netWorkEndDate;
    case "END":
      return t.endDate;
    default:
      return t.endDate;
  }
}, lt = (e, r, t) => ct(e, r) * t, hs = (e, r, t) => {
  const n = Math.round(e / t);
  return q(r, n);
}, fs = (e, r, t) => (ct(r, e) + 1) * t, ms = (e) => Ze[e].pixelsPerDay, Jt = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((m) => [m.startDate, m.endDate].filter(Boolean)),
    ...r.map((m) => m.date)
  ];
  if (n.length === 0) {
    const m = /* @__PURE__ */ new Date();
    return {
      minDate: m,
      maxDate: q(m, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...n.map((m) => m.getTime()))), a = new Date(Math.max(...n.map((m) => m.getTime()))), o = q(s, -t), c = q(a, t), f = ct(c, o);
  return {
    minDate: o,
    maxDate: c,
    totalDays: f
  };
}, { ROW_HEIGHT: le, HEADER_HEIGHT: Tn, MILESTONE_LANE_HEIGHT: ue, BAR_HEIGHT: se } = We, Nn = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: s,
  calendarSettings: a
}) => {
  const o = Array.from({ length: r }, (y, d) => q(e, d)), c = r * t, f = we(() => {
    const y = [];
    let d = at(o[0]), x = 0;
    return o.forEach((b) => {
      at(b) !== d ? (y.push({ label: `${d}년`, days: x }), d = at(b), x = 1) : x++;
    }), y.push({ label: `${d}년`, days: x }), y;
  }, [o]), m = we(() => {
    const y = [];
    let d = o[0], x = 0;
    return o.forEach((b) => {
      fn(b, d) ? x++ : (y.push({ label: he(d, "M월"), days: x }), d = b, x = 1);
    }), y.push({ label: he(d, "M월"), days: x }), y;
  }, [o]), g = we(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ i.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: c }, children: o.map((y, d) => {
        const x = tt(y), b = _e(y, s, a), S = x === 0, $ = x === 6;
        let O = "text-gray-600";
        S && (O = "text-red-500"), $ && (O = "text-blue-500"), b && !S && !$ && (O = "text-red-500");
        let D = "";
        return S || b && !$ ? D = "bg-red-50/50" : $ && (D = "bg-blue-50/50"), /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${D}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ i.jsx("span", { className: `text-[10px] leading-none ${O}`, children: he(y, "d") }),
              /* @__PURE__ */ i.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${O}`, children: ["일", "월", "화", "수", "목", "금", "토"][x] })
            ]
          },
          d
        );
      }) });
    {
      const y = [];
      let d = o[0], x = 0;
      return o.forEach((b) => {
        hn(b, d, { weekStartsOn: 0 }) ? x++ : (y.push({ label: `${Mt(d, { weekStartsOn: 0 })}주`, days: x }), d = b, x = 1);
      }), y.push({ label: `${Mt(d, { weekStartsOn: 0 })}주`, days: x }), /* @__PURE__ */ i.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: c }, children: y.map((b, S) => /* @__PURE__ */ i.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: b.days * t },
          children: b.label
        },
        S
      )) });
    }
  }, [o, n, t, s, a, c]), w = n === "MONTH";
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: Tn, minWidth: c },
      children: w ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: c },
            children: f.map((y, d) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              d
            ))
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: c },
            children: m.map((y, d) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: y.days * t },
                children: y.label
              },
              d
            ))
          }
        )
      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: c },
            children: f.map((y, d) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: y.days * t },
                children: y.label
              },
              d
            ))
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: c },
            children: m.map((y, d) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              d
            ))
          }
        ),
        g
      ] })
    }
  );
}, On = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: a,
  zoomLevel: o
}) => {
  const c = we(() => {
    if (o === "MONTH") return [];
    const f = [];
    for (let m = 0; m < r; m++) {
      const g = q(e, m), w = tt(g), y = w === 0, d = w === 6;
      if (_e(g, s, a) || d) {
        const b = m * n;
        let S = "rgba(254, 242, 242, 0.5)";
        d && !y && (S = "rgba(239, 246, 255, 0.5)"), y && (S = "rgba(254, 242, 242, 0.5)"), f.push(
          /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: b,
              y: 0,
              width: n,
              height: t,
              fill: S,
              className: "pointer-events-none"
            },
            `weekend-${m}`
          )
        );
      }
    }
    return f;
  }, [e, r, t, n, s, a, o]);
  return /* @__PURE__ */ i.jsx("g", { children: c });
}, Pn = ({ milestone: e, x: r }) => {
  const n = ue / 2;
  return /* @__PURE__ */ i.jsxs("g", { transform: `translate(${r}, ${n})`, className: "group cursor-pointer", children: [
    /* @__PURE__ */ i.jsx(
      "line",
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1e3,
        stroke: me.grid,
        strokeWidth: 2,
        strokeDasharray: "4, 4",
        className: "opacity-100"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "path",
      {
        d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
        fill: me.milestone,
        stroke: "white",
        strokeWidth: 1,
        className: "drop-shadow-sm transition-all duration-150 group-hover:opacity-0 group-hover:scale-0"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "circle",
      {
        cx: 0,
        cy: 0,
        r: 12 / 2,
        fill: "#3B82F6",
        stroke: "white",
        strokeWidth: 2,
        className: "drop-shadow-sm opacity-0 scale-0 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "text",
      {
        x: -8,
        y: 4,
        textAnchor: "end",
        className: "select-none text-[11px] font-bold fill-gray-600 transition-colors group-hover:fill-blue-700",
        children: e.name
      }
    )
  ] });
}, _n = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: s,
  isDraggable: a = !1,
  dragInfo: o,
  onDragStart: c
}) => {
  var d, x;
  if (e.type === "GROUP") return null;
  const f = 4, m = !!o, g = (o == null ? void 0 : o.startDate) || e.startDate, w = (o == null ? void 0 : o.endDate) || e.endDate, y = lt(g, t, n);
  if (s) {
    const b = ((d = e.cp) == null ? void 0 : d.workDaysTotal) || 0, S = ((x = e.cp) == null ? void 0 : x.nonWorkDaysTotal) || 0;
    if (b + S === 0) return null;
    const O = b * n, D = S * n;
    return /* @__PURE__ */ i.jsxs("g", { transform: `translate(${y}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ i.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: O,
          height: se,
          fill: me.vermilion,
          rx: f,
          ry: f,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "rect",
        {
          x: O,
          y: 0,
          width: D,
          height: se,
          fill: me.teal,
          rx: f,
          ry: f,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "text",
        {
          x: -8,
          y: se / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: b, indirectWorkDaysPre: S, indirectWorkDaysPost: $ } = e.task, O = (o == null ? void 0 : o.indirectWorkDaysPre) ?? S, D = (o == null ? void 0 : o.indirectWorkDaysPost) ?? $, z = O * n, J = b * n, B = D * n, E = z + J + B, W = 0, _ = z, C = z + J, G = 8, j = {
      startDate: g,
      endDate: w,
      indirectWorkDaysPre: O,
      netWorkDays: b,
      indirectWorkDaysPost: D
    };
    return /* @__PURE__ */ i.jsxs(
      "g",
      {
        transform: `translate(${y}, ${r})`,
        className: `group ${m ? "opacity-90" : ""}`,
        children: [
          a && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: z,
              y: 0,
              width: J,
              height: se,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (R) => c == null ? void 0 : c(R, e.id, "move", j)
            }
          ),
          O > 0 && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: W,
              y: 0,
              width: z,
              height: se,
              fill: me.blue,
              rx: f,
              ry: f,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          b > 0 && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: _,
              y: 0,
              width: J,
              height: se,
              fill: me.red,
              rx: f,
              ry: f,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          D > 0 && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: C,
              y: 0,
              width: B,
              height: se,
              fill: me.blue,
              rx: f,
              ry: f,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          a && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: -G / 2,
              y: 0,
              width: G,
              height: se,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (R) => c == null ? void 0 : c(R, e.id, "resize-pre", j),
              children: /* @__PURE__ */ i.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: E - G / 2,
              y: 0,
              width: G,
              height: se,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (R) => c == null ? void 0 : c(R, e.id, "resize-post", j),
              children: /* @__PURE__ */ i.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(
              "rect",
              {
                x: 1,
                y: se / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "rect",
              {
                x: E - 4,
                y: se / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            "text",
            {
              x: -8,
              y: se / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          m && /* @__PURE__ */ i.jsxs("g", { children: [
            /* @__PURE__ */ i.jsxs(
              "text",
              {
                x: E / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  he(g, "MM/dd"),
                  " ~ ",
                  he(w, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "text",
              {
                x: E / 2,
                y: se + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  O,
                  "일 + 순",
                  b,
                  "일 + 뒤",
                  D,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, Cn = () => /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ i.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: me.dependency })
  }
) }), Zt = et(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: s, calendarSettings: a, onBarDrag: o, virtualRows: c, totalHeight: f }, m) => {
    const g = Ze[n].pixelsPerDay, w = t === "MASTER", y = c && c.length > 0, [d, x] = ae(null), { minDate: b, totalDays: S } = we(() => Jt(e, r, 60), [e, r]), $ = S * g, O = Math.max(y ? (f || 0) + ue + 100 : e.length * le + ue + 100, 500), D = I((E, W, _, C) => {
      o && (E.preventDefault(), E.stopPropagation(), x({
        taskId: W,
        dragType: _,
        startX: E.clientX,
        originalStartDate: C.startDate,
        originalEndDate: C.endDate,
        originalIndirectWorkDaysPre: C.indirectWorkDaysPre,
        originalNetWorkDays: C.netWorkDays,
        originalIndirectWorkDaysPost: C.indirectWorkDaysPost,
        currentStartDate: C.startDate,
        currentEndDate: C.endDate,
        currentIndirectWorkDaysPre: C.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: C.indirectWorkDaysPost
      }));
    }, [o]), z = I((E) => {
      if (!d || !o) return;
      const W = E.clientX - d.startX, _ = Math.round(W / g);
      let C = d.originalStartDate, G = d.originalEndDate, j = d.originalIndirectWorkDaysPre, R = d.originalIndirectWorkDaysPost;
      if (d.dragType === "move")
        C = q(d.originalStartDate, _), G = q(d.originalEndDate, _);
      else if (d.dragType === "resize-pre") {
        j = Math.max(0, d.originalIndirectWorkDaysPre - _), C = q(d.originalStartDate, -(-_ + (j - d.originalIndirectWorkDaysPre)));
        const re = q(d.originalStartDate, d.originalIndirectWorkDaysPre);
        C = q(re, -j), G = d.originalEndDate;
      } else if (d.dragType === "resize-post") {
        R = Math.max(0, d.originalIndirectWorkDaysPost + _);
        const re = q(d.originalEndDate, -d.originalIndirectWorkDaysPost);
        G = q(re, R), C = d.originalStartDate;
      }
      x((re) => re ? {
        ...re,
        currentStartDate: C,
        currentEndDate: G,
        currentIndirectWorkDaysPre: j,
        currentIndirectWorkDaysPost: R
      } : null);
    }, [d, o, g]), J = I(() => {
      if (!d || !o) {
        x(null);
        return;
      }
      const E = d.currentStartDate.getTime() !== d.originalStartDate.getTime() || d.currentEndDate.getTime() !== d.originalEndDate.getTime(), W = d.currentIndirectWorkDaysPre !== d.originalIndirectWorkDaysPre || d.currentIndirectWorkDaysPost !== d.originalIndirectWorkDaysPost;
      (E || W) && o({
        taskId: d.taskId,
        dragType: d.dragType,
        newStartDate: d.currentStartDate,
        newEndDate: d.currentEndDate,
        newIndirectWorkDaysPre: d.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: d.currentIndirectWorkDaysPost
      }), x(null);
    }, [d, o]);
    pe(() => {
      if (d)
        return window.addEventListener("mousemove", z), window.addEventListener("mouseup", J), document.body.style.cursor = d.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", J), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [d, z, J]);
    const B = I((E) => d && d.taskId === E ? {
      startDate: d.currentStartDate,
      endDate: d.currentEndDate,
      indirectWorkDaysPre: d.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: d.currentIndirectWorkDaysPost
    } : null, [d]);
    return /* @__PURE__ */ i.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ i.jsxs("div", { ref: m, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ i.jsx(
        Nn,
        {
          minDate: b,
          totalDays: S,
          pixelsPerDay: g,
          zoomLevel: n,
          holidays: s,
          calendarSettings: a
        }
      ),
      /* @__PURE__ */ i.jsxs("svg", { width: $, height: O, className: "block bg-white", children: [
        /* @__PURE__ */ i.jsx(Cn, {}),
        /* @__PURE__ */ i.jsx(
          On,
          {
            minDate: b,
            totalDays: S,
            chartHeight: O,
            pixelsPerDay: g,
            holidays: s,
            calendarSettings: a,
            zoomLevel: n
          }
        ),
        (y ? c : e.map((E, W) => ({ index: W, start: W * le, size: le, key: W }))).map((E) => {
          const W = e[E.index];
          if (!W || W.type !== "GROUP") return null;
          const _ = E.start + ue;
          return /* @__PURE__ */ i.jsx(
            "rect",
            {
              x: 0,
              y: _,
              width: $,
              height: le,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${E.key}`
          );
        }),
        Array.from({ length: S }, (E, W) => {
          const _ = (W + 1) * g, C = q(b, W), G = tt(C);
          let j = !1, R = "#f0f0f0";
          return n === "DAY" ? (j = !0, R = G === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (j = G === 0, R = "#e5e7eb") : n === "MONTH" && (j = G === 0, R = "#f0f0f0"), j ? /* @__PURE__ */ i.jsx(
            "line",
            {
              x1: _,
              y1: 0,
              x2: _,
              y2: O,
              stroke: R,
              strokeWidth: 1
            },
            `vline-${W}`
          ) : null;
        }),
        (y ? c : e.map((E, W) => ({ index: W, start: W * le, size: le, key: W }))).map((E) => /* @__PURE__ */ i.jsx(
          "line",
          {
            x1: 0,
            y1: E.start + le + ue,
            x2: $,
            y2: E.start + le + ue,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${E.key}`
        )),
        /* @__PURE__ */ i.jsx("rect", { x: 0, y: 0, width: $, height: ue, fill: "transparent" }),
        r.map((E) => /* @__PURE__ */ i.jsx(
          Pn,
          {
            milestone: E,
            x: lt(E.date, b, g)
          },
          E.id
        )),
        /* @__PURE__ */ i.jsx(
          "line",
          {
            x1: 0,
            y1: ue,
            x2: $,
            y2: ue,
            stroke: me.grid,
            strokeWidth: 1
          }
        ),
        (y ? c : e.map((E, W) => ({ index: W, start: W * le, size: le, key: W }))).map((E) => {
          const W = e[E.index];
          if (!W) return null;
          const _ = E.start + (le - se) / 2 + ue;
          return /* @__PURE__ */ i.jsx(
            _n,
            {
              task: W,
              y: _,
              minDate: b,
              pixelsPerDay: g,
              isMasterView: w,
              isDraggable: !w && !!o,
              dragInfo: B(W.id),
              onDragStart: D
            },
            E.key
          );
        })
      ] })
    ] }) });
  }
);
Zt.displayName = "GanttTimeline";
const _t = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (m, g) => {
    const w = typeof m == "function" ? m(r) : m;
    if (!Object.is(w, r)) {
      const y = r;
      r = g ?? (typeof w != "object" || w === null) ? w : Object.assign({}, r, w), t.forEach((d) => d(r, y));
    }
  }, s = () => r, c = { setState: n, getState: s, getInitialState: () => f, subscribe: (m) => (t.add(m), () => t.delete(m)) }, f = r = e(n, s, c);
  return c;
}, In = (e) => e ? _t(e) : _t, Rn = (e) => e;
function An(e, r = Rn) {
  const t = Pe.useSyncExternalStore(
    e.subscribe,
    Pe.useCallback(() => r(e.getState()), [e, r]),
    Pe.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return Pe.useDebugValue(t), t;
}
const Ct = (e) => {
  const r = In(e), t = (n) => An(r, n);
  return Object.assign(t, r), t;
}, zn = (e) => e ? Ct(e) : Ct, It = (e) => Symbol.iterator in e, Rt = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), At = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [s, a] of t)
    if (!n.has(s) || !Object.is(a, n.get(s)))
      return !1;
  return !0;
}, Ln = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let s = t.next(), a = n.next();
  for (; !s.done && !a.done; ) {
    if (!Object.is(s.value, a.value))
      return !1;
    s = t.next(), a = n.next();
  }
  return !!s.done && !!a.done;
};
function Fn(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : It(e) && It(r) ? Rt(e) && Rt(r) ? At(e, r) : Ln(e, r) : At(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function Ce(e) {
  const r = Pe.useRef(void 0);
  return (t) => {
    const n = e(t);
    return Fn(r.current, n) ? r.current : r.current = n;
  };
}
const Ie = zn((e, r) => ({
  // ====================================
  // Initial State
  // ====================================
  // View State
  viewMode: "MASTER",
  activeCPId: null,
  zoomLevel: "MONTH",
  // Master View 기본: 월
  // UI Interaction State
  selectedTaskId: null,
  hoveredTaskId: null,
  expandedTaskIds: /* @__PURE__ */ new Set(),
  // Sidebar
  sidebarWidth: We.SIDEBAR_WIDTH,
  // Drag State
  isDragging: !1,
  dragType: null,
  dragTaskId: null,
  // ====================================
  // View Actions
  // ====================================
  setViewMode: (t, n) => {
    e({
      viewMode: t,
      activeCPId: n ?? null,
      // 뷰 모드에 따른 기본 줌 레벨 설정
      // Master (Level 1): 월 / Detail (Level 2): 일
      zoomLevel: t === "DETAIL" ? "DAY" : "MONTH"
    });
  },
  setZoomLevel: (t) => {
    e({ zoomLevel: t });
  },
  // ====================================
  // Task UI Actions
  // ====================================
  selectTask: (t) => {
    e({ selectedTaskId: t });
  },
  hoverTask: (t) => {
    e({ hoveredTaskId: t });
  },
  toggleTask: (t) => {
    const { expandedTaskIds: n } = r(), s = new Set(n);
    s.has(t) ? s.delete(t) : s.add(t), e({ expandedTaskIds: s });
  },
  expandAll: (t) => {
    e({ expandedTaskIds: new Set(t) });
  },
  collapseAll: () => {
    e({ expandedTaskIds: /* @__PURE__ */ new Set() });
  },
  // ====================================
  // Sidebar Actions
  // ====================================
  setSidebarWidth: (t) => {
    const n = Math.max(
      We.SIDEBAR_MIN_WIDTH,
      Math.min(t, We.SIDEBAR_MAX_WIDTH)
    );
    e({ sidebarWidth: n });
  },
  // ====================================
  // Drag Actions
  // ====================================
  startDrag: (t, n) => {
    e({
      isDragging: !0,
      dragType: t,
      dragTaskId: n
    });
  },
  endDrag: () => {
    e({
      isDragging: !1,
      dragType: null,
      dragTaskId: null
    });
  }
})), Hn = () => Ie(
  Ce((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), Yn = () => Ie(
  Ce((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), gs = () => Ie(
  Ce((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), $n = () => Ie(
  Ce((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Gn = () => Ie(
  Ce((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), ys = () => Ie(
  Ce((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Oe(e, r, t) {
  let n = t.initialDeps ?? [], s;
  function a() {
    var o, c, f, m;
    let g;
    t.key && ((o = t.debug) != null && o.call(t)) && (g = Date.now());
    const w = e();
    if (!(w.length !== n.length || w.some((x, b) => n[b] !== x)))
      return s;
    n = w;
    let d;
    if (t.key && ((c = t.debug) != null && c.call(t)) && (d = Date.now()), s = r(...w), t.key && ((f = t.debug) != null && f.call(t))) {
      const x = Math.round((Date.now() - g) * 100) / 100, b = Math.round((Date.now() - d) * 100) / 100, S = b / 16, $ = (O, D) => {
        for (O = String(O); O.length < D; )
          O = " " + O;
        return O;
      };
      console.info(
        `%c⏱ ${$(b, 5)} /${$(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (m = t == null ? void 0 : t.onChange) == null || m.call(t, s), s;
  }
  return a.updateDeps = (o) => {
    n = o;
  }, a;
}
function zt(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Vn = (e, r) => Math.abs(e - r) < 1.01, qn = (e, r, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, s), t);
  };
}, Lt = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Xn = (e) => e, Bn = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let s = r; s <= t; s++)
    n.push(s);
  return n;
}, Un = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (o) => {
    const { width: c, height: f } = o;
    r({ width: Math.round(c), height: Math.round(f) });
  };
  if (s(Lt(t)), !n.ResizeObserver)
    return () => {
    };
  const a = new n.ResizeObserver((o) => {
    const c = () => {
      const f = o[0];
      if (f != null && f.borderBoxSize) {
        const m = f.borderBoxSize[0];
        if (m) {
          s({ width: m.inlineSize, height: m.blockSize });
          return;
        }
      }
      s(Lt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, Ft = {
  passive: !0
}, Ht = typeof window > "u" ? !0 : "onscrollend" in window, Kn = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && Ht ? () => {
  } : qn(
    n,
    () => {
      r(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (g) => () => {
    const { horizontal: w, isRtl: y } = e.options;
    s = w ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, a(), r(s, g);
  }, c = o(!0), f = o(!1);
  f(), t.addEventListener("scroll", c, Ft);
  const m = e.options.useScrollendEvent && Ht;
  return m && t.addEventListener("scrollend", f, Ft), () => {
    t.removeEventListener("scroll", c), m && t.removeEventListener("scrollend", f);
  };
}, Qn = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Jn = (e, {
  adjustments: r = 0,
  behavior: t
}, n) => {
  var s, a;
  const o = e + r;
  (a = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
    [n.options.horizontal ? "left" : "top"]: o,
    behavior: t
  });
};
class Zn {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var a;
          return (a = n()) == null ? void 0 : a.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var a;
          return (a = n()) == null ? void 0 : a.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, s]) => {
        typeof s > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Xn,
        rangeExtractor: Bn,
        onChange: () => {
        },
        measureElement: Qn,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
    }, this.maybeNotify = Oe(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = a, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = n - 1; o >= 0; o--) {
        const c = t[o];
        if (s.has(c.lane))
          continue;
        const f = a.get(
          c.lane
        );
        if (f == null || c.end > f.end ? a.set(c.lane, c) : c.end < f.end && s.set(c.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, c) => o.end === c.end ? o.index - c.index : o.end - c.end)[0] : void 0;
    }, this.getMeasurementOptions = Oe(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, s, a, o) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: a,
        enabled: o
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Oe(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: a, enabled: o }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const f = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const m = this.measurementsCache.slice(0, f);
        for (let g = f; g < t; g++) {
          const w = a(g), y = this.options.lanes === 1 ? m[g - 1] : this.getFurthestMeasurement(m, g), d = y ? y.end + this.options.gap : n + s, x = c.get(w), b = typeof x == "number" ? x : this.options.estimateSize(g), S = d + b, $ = y ? y.lane : g % this.options.lanes;
          m[g] = {
            index: g,
            start: d,
            size: b,
            end: S,
            key: w,
            lane: $
          };
        }
        return this.measurementsCache = m, m;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Oe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, a) => this.range = t.length > 0 && n > 0 ? es({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Oe(
      () => {
        let t = null, n = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, s, a, o) => a === null || o === null ? [] : t({
        startIndex: a,
        endIndex: o,
        overscan: n,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, s = t.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const s = this.indexFromElement(t), a = this.measurementsCache[s];
      if (!a)
        return;
      const o = a.key, c = this.elementsCache.get(o);
      c !== t && (c && this.observer.unobserve(c), this.observer.observe(t), this.elementsCache.set(o, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.itemSizeCache.get(s.key) ?? s.size, o = n - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, o, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, s) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = Oe(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let a = 0, o = t.length; a < o; a++) {
          const c = t[a], f = n[c];
          s.push(f);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return zt(
          n[er(
            0,
            n.length - 1,
            (s) => zt(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const a = this.getSize(), o = this.getScrollOffset();
      n === "auto" && (n = t >= o + a ? "end" : "start"), n === "center" ? t += (s - a) / 2 : n === "end" && (t -= a);
      const c = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (n === "auto")
        if (s.end >= o + a - this.options.scrollPaddingEnd)
          n = "end";
        else if (s.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      const c = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, n, s.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: n = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let a = 0;
      const o = 10, c = (m) => {
        if (!this.targetWindow) return;
        const g = this.getOffsetForIndex(t, m);
        if (!g) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [w, y] = g;
        this._scrollToOffset(w, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const d = this.getScrollOffset(), x = this.getOffsetForIndex(t, y);
          if (!x) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Vn(x[0], d) || f(y);
        });
      }, f = (m) => {
        this.targetWindow && (a++, a < o ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, o), this.targetWindow.requestAnimationFrame(() => c(m))) : console.warn(
          `Failed to scroll to index ${t} after ${o} attempts.`
        ));
      };
      c(n);
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var t;
      const n = this.getMeasurements();
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = n.length - 1;
        for (; o >= 0 && a.some((c) => c === null); ) {
          const c = n[o];
          a[c.lane] === null && (a[c.lane] = c.end), o--;
        }
        s = Math.max(...a.filter((c) => c !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: s
    }) => {
      this.options.scrollToFn(t, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(r);
  }
}
const er = (e, r, t, n) => {
  for (; e <= r; ) {
    const s = (e + r) / 2 | 0, a = t(s);
    if (a < n)
      e = s + 1;
    else if (a > n)
      r = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function es({
  measurements: e,
  outerSize: r,
  scrollOffset: t,
  lanes: n
}) {
  const s = e.length - 1, a = (f) => e[f].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = er(
    0,
    s,
    a,
    t
  ), c = o;
  if (n === 1)
    for (; c < s && e[c].end < t + r; )
      c++;
  else if (n > 1) {
    const f = Array(n).fill(0);
    for (; c < s && f.some((g) => g < t + r); ) {
      const g = e[c];
      f[g.lane] = g.end, c++;
    }
    const m = Array(n).fill(t + r);
    for (; o >= 0 && m.some((g) => g >= t); ) {
      const g = e[o];
      m[g.lane] = g.start, o--;
    }
    o = Math.max(0, o - o % n), c = Math.min(s, c + (n - 1 - c % n));
  }
  return { startIndex: o, endIndex: c };
}
const Yt = typeof document < "u" ? Qe.useLayoutEffect : Qe.useEffect;
function ts(e) {
  const r = Qe.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, a) => {
      var o;
      a ? tr(r) : r(), (o = e.onChange) == null || o.call(e, s, a);
    }
  }, [n] = Qe.useState(
    () => new Zn(t)
  );
  return n.setOptions(t), Yt(() => n._didMount(), []), Yt(() => n._willUpdate()), n;
}
function rs(e) {
  return ts({
    observeElementRect: Un,
    observeElementOffset: Kn,
    scrollToFn: Jn,
    ...e
  });
}
const { ROW_HEIGHT: ns } = We;
function ss({
  containerRef: e,
  count: r,
  rowHeight: t = ns,
  overscan: n = 5
}) {
  const s = rs({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  });
  return {
    /** 가상화된 행 목록 */
    virtualRows: we(() => s.getVirtualItems().map((o) => ({
      index: o.index,
      start: o.start,
      size: o.size,
      key: o.index
      // index는 항상 number이므로 타입 안전
    })), [s.getVirtualItems()]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: s.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: s
  };
}
const as = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function xs({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = as,
  initialView: s = "MASTER",
  initialZoomLevel: a = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: o,
  onTaskUpdate: c,
  onTaskCreate: f,
  onTaskReorder: m,
  onTaskGroup: g,
  onTaskUngroup: w,
  onViewChange: y,
  onSave: d,
  onReset: x,
  hasUnsavedChanges: b,
  saveStatus: S,
  className: $,
  style: O
}) {
  const { viewMode: D, activeCPId: z, zoomLevel: J } = Hn(), { setViewMode: B, setZoomLevel: E } = Yn(), { sidebarWidth: W, setSidebarWidth: _ } = Gn(), { expandedTaskIds: C, toggleTask: G, expandAll: j } = $n(), R = be(null), re = be(null), oe = be(null), Z = be(!1), ne = be(!1), [ve, De] = ae(!1), [ke, u] = ae(!1), M = I(() => {
    u(!0);
  }, []), L = I(() => {
    u(!1);
  }, []), F = be(!1);
  pe(() => {
    F.current || (F.current = !0, B(s), E(a), o && o.length > 0 ? j(o) : e.length > 0 && j(e.map((v) => v.id)));
  }, [e.length]);
  const ee = we(() => {
    if (D === "MASTER") {
      const v = [];
      return e.forEach((T) => {
        (T.wbsLevel === 1 && !T.parentId || T.wbsLevel === 1 && T.parentId && C.has(T.parentId)) && v.push(T);
      }), v;
    } else
      return e.filter((v) => v.wbsLevel === 2 && v.parentId === z);
  }, [e, D, z, C]), { virtualRows: ce, totalHeight: H } = ss({
    containerRef: oe,
    count: ee.length
  });
  pe(() => {
    const v = re.current, T = oe.current;
    if (!v || !T) return;
    const K = () => {
      Z.current || (Z.current = !0, T.scrollTop = v.scrollTop, requestAnimationFrame(() => {
        Z.current = !1;
      }));
    }, te = () => {
      Z.current || (Z.current = !0, v.scrollTop = T.scrollTop, requestAnimationFrame(() => {
        Z.current = !1;
      }));
    };
    return v.addEventListener("scroll", K), T.addEventListener("scroll", te), () => {
      v.removeEventListener("scroll", K), T.removeEventListener("scroll", te);
    };
  }, []);
  const [P, Ee] = ae(null), de = I((v) => {
    if (v.detail >= 2) return;
    v.preventDefault(), ne.current = !0, De(!0);
    const T = v.clientX, K = W, te = (Xe) => {
      if (!ne.current) return;
      const Be = Xe.clientX - T;
      _(K + Be);
    }, ie = () => {
      ne.current = !1, De(!1), document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", ie);
    };
    document.addEventListener("mousemove", te), document.addEventListener("mouseup", ie);
  }, [W, _]), rt = I(() => {
    _(P !== null ? P : We.SIDEBAR_WIDTH);
  }, [P, _]), Me = I((v, T) => {
    B(v, T), y == null || y(v, T);
  }, [B, y]), Te = I((v) => {
    const T = oe.current;
    if (!T) return;
    const K = Ze[J].pixelsPerDay, { minDate: te } = Jt(e, r, 60), ie = lt(v, te, K);
    T.scrollLeft = Math.max(0, ie - 50);
  }, [J, e, r]), qe = I(() => {
    if (D === "MASTER") {
      const v = ee.filter((T) => T.type === "CP");
      if (v.length > 0) {
        const T = v.reduce(
          (te, ie) => te.startDate < ie.startDate ? te : ie
        ), K = new Date(T.startDate);
        K.setDate(K.getDate() - 5), Te(K);
      }
    } else if (D === "DETAIL" && z) {
      const v = e.filter((T) => T.parentId === z);
      if (v.length > 0) {
        const T = v.reduce(
          (te, ie) => te.startDate < ie.startDate ? te : ie
        ), K = new Date(T.startDate);
        K.setDate(K.getDate() - 5), Te(K);
      }
    }
  }, [D, z, e, ee, Te]), Re = I((v) => {
    D === "MASTER" && v.type === "CP" && Me("DETAIL", v.id);
  }, [D, Me]);
  pe(() => {
    if (D === "DETAIL" && z) {
      const v = setTimeout(() => {
        qe();
      }, 100);
      return () => clearTimeout(v);
    }
  }, [D, z]);
  const Ae = I((v) => {
    if (!c) return;
    const T = e.find((te) => te.id === v.taskId);
    if (!T || !T.task) return;
    const K = {
      ...T,
      startDate: v.newStartDate,
      endDate: v.newEndDate,
      task: {
        ...T.task,
        indirectWorkDaysPre: v.newIndirectWorkDaysPre,
        indirectWorkDaysPost: v.newIndirectWorkDaysPost
      }
    };
    c(K);
  }, [e, c]);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: R,
      className: `flex h-full w-full flex-col bg-gray-50 ${$ || ""}`,
      style: O,
      children: [
        /* @__PURE__ */ i.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-3 shrink-0", children: D === "DETAIL" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => Me("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            f && !ke && /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: M,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ i.jsx("div", { className: "w-[180px]" }) }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: qe,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: D === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ i.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (D === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((v) => /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => E(v),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${J === v ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Ze[v].label
              },
              v
            )) }),
            /* @__PURE__ */ i.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              he(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
            d && /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: d,
                disabled: !b || S === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${b ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: S === "saving" ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  /* @__PURE__ */ i.jsxs("svg", { className: "h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ i.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ i.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                  ] }),
                  "저장 중..."
                ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" }) }),
                  "저장"
                ] })
              }
            ),
            x && /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: x,
                className: "flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300",
                children: [
                  /* @__PURE__ */ i.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ i.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                  "초기화"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: W },
              children: /* @__PURE__ */ i.jsx(
                Qt,
                {
                  ref: re,
                  tasks: ee,
                  allTasks: e,
                  viewMode: D,
                  expandedIds: C,
                  onToggle: G,
                  onTaskClick: Re,
                  onTaskUpdate: c,
                  onTaskCreate: f,
                  onTaskReorder: m,
                  onTaskGroup: g,
                  onTaskUngroup: w,
                  activeCPId: z,
                  virtualRows: ce,
                  totalHeight: H,
                  onTotalWidthChange: Ee,
                  isAddingTask: ke,
                  onCancelAddTask: L
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${ve ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: de,
              onDoubleClick: rt,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ i.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ i.jsx(
            Zt,
            {
              ref: oe,
              tasks: ee,
              milestones: r,
              viewMode: D,
              zoomLevel: J,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: c,
              onBarDrag: Ae,
              virtualRows: ce,
              totalHeight: H
            }
          ) }),
          ve && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] })
      ]
    }
  );
}
export {
  me as GANTT_COLORS,
  We as GANTT_LAYOUT,
  xs as GanttChart,
  Qt as GanttSidebar,
  Zt as GanttTimeline,
  Ze as ZOOM_CONFIG,
  Pt as addCalendarDays,
  jn as addWorkingDays,
  Jt as calculateDateRange,
  ds as calculateDualCalendarDates,
  lt as dateToX,
  us as getAnchorDate,
  fs as getDateRangeWidth,
  ms as getPixelsPerDay,
  _e as isHoliday,
  cs as isWeekend,
  ls as subtractWorkingDays,
  ys as useGanttDrag,
  $n as useGanttExpansion,
  gs as useGanttSelection,
  Gn as useGanttSidebar,
  Ie as useGanttStore,
  Yn as useGanttViewActions,
  Hn as useGanttViewState,
  ss as useGanttVirtualization,
  hs as xToDate
};
