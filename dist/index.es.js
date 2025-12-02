"use client";
import * as ht from "react";
import Oe, { forwardRef as gt, createElement as vt, useRef as ue, useEffect as le, useCallback as T, useState as V, useMemo as ve } from "react";
import { flushSync as xn } from "react-dom";
var Dt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function bn() {
  if (jt) return Ke;
  jt = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Ke.Fragment = n, Ke.jsx = t, Ke.jsxs = t, Ke;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function pn() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === z ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case E:
          return "Fragment";
        case P:
          return "Profiler";
        case S:
          return "StrictMode";
        case ie:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case x:
            return "Portal";
          case N:
            return c.displayName || "Context";
          case H:
            return (c._context.displayName || "Context") + ".Consumer";
          case I:
            var k = c.render;
            return c = c.displayName, c || (c = k.displayName || k.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case ne:
            return k = c.displayName || null, k !== null ? k : e(c.type) || "Memo";
          case B:
            k = c._payload, c = c._init;
            try {
              return e(c(k));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function t(c) {
      try {
        n(c);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var W = k.error, C = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return W.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), n(c);
      }
    }
    function r(c) {
      if (c === E) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === B)
        return "<...>";
      try {
        var k = e(c);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = G.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (q.call(c, "key")) {
        var k = Object.getOwnPropertyDescriptor(c, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, k) {
      function W() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: W,
        configurable: !0
      });
    }
    function d() {
      var c = e(this.type);
      return ae[c] || (ae[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, k, W, C, me, oe) {
      var Y = W.ref;
      return c = {
        $$typeof: f,
        type: c,
        key: k,
        props: W,
        _owner: C
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function u(c, k, W, C, me, oe) {
      var Y = k.children;
      if (Y !== void 0)
        if (C)
          if (Me(Y)) {
            for (C = 0; C < Y.length; C++)
              p(Y[C]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(Y);
      if (q.call(k, "key")) {
        Y = e(c);
        var he = Object.keys(k).filter(function(De) {
          return De !== "key";
        });
        C = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", L[Y + C] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          Y,
          he,
          Y
        ), L[Y + C] = !0);
      }
      if (Y = null, W !== void 0 && (t(W), Y = "" + W), o(k) && (t(k.key), Y = "" + k.key), "key" in k) {
        W = {};
        for (var fe in k)
          fe !== "key" && (W[fe] = k[fe]);
      } else W = k;
      return Y && l(
        W,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        Y,
        W,
        s(),
        me,
        oe
      );
    }
    function p(c) {
      g(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === B && (c._payload.status === "fulfilled" ? g(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function g(c) {
      return typeof c == "object" && c !== null && c.$$typeof === f;
    }
    var y = Oe, f = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), N = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), G = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, Me = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var se, ae = {}, D = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), w = K(r(i)), L = {};
    Qe.Fragment = E, Qe.jsx = function(c, k, W) {
      var C = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        c,
        k,
        W,
        !1,
        C ? Error("react-stack-top-frame") : D,
        C ? K(r(c)) : w
      );
    }, Qe.jsxs = function(c, k, W) {
      var C = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        c,
        k,
        W,
        !0,
        C ? Error("react-stack-top-frame") : D,
        C ? K(r(c)) : w
      );
    };
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Dt.exports = bn() : Dt.exports = pn();
var a = Dt.exports;
const rn = 6048e5, wn = 864e5, St = Symbol.for("constructDateFrom");
function je(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && St in e ? e[St](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ee(e, n) {
  return je(n || e, e);
}
function $(e, n, t) {
  const r = ee(e, t == null ? void 0 : t.in);
  return isNaN(n) ? je(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function sn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 6;
}
function an(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 0;
}
let vn = {};
function tt() {
  return vn;
}
function _e(e, n) {
  var l, d, m, u;
  const t = tt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((d = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? t.weekStartsOn ?? ((u = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : u.weekStartsOn) ?? 0, s = ee(e, n == null ? void 0 : n.in), i = s.getDay(), o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function ft(e, n) {
  return _e(e, { ...n, weekStartsOn: 1 });
}
function on(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = je(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const i = ft(s), o = je(t, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const l = ft(o);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function Nt(e) {
  const n = ee(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function nt(e, ...n) {
  const t = je.bind(
    null,
    e || n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function Ze(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function ln(e, n, t) {
  const [r, s] = nt(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = Ze(r), o = Ze(s), l = +i - Nt(i), d = +o - Nt(o);
  return Math.round((l - d) / wn);
}
function Dn(e, n) {
  const t = on(e, n), r = je(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), ft(r);
}
function kn(e, n, t) {
  const [r, s] = nt(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Ze(r) == +Ze(s);
}
function En(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function jn(e) {
  return !(!En(e) && typeof e != "number" || isNaN(+ee(e)));
}
function kt(e, n, t) {
  const [r, s] = nt(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = Wt(r, s), o = Math.abs(
    ln(r, s)
  );
  r.setDate(r.getDate() - i * o);
  const l = +(Wt(r, s) === -i), d = i * (o - l);
  return d === 0 ? 0 : d;
}
function Wt(e, n) {
  const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Mn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Sn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Nn = {
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
}, Wn = (e, n, t) => {
  let r;
  const s = Nn[e];
  return typeof s == "string" ? r = s : n === 1 ? r = s.one : r = s.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function pt(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const Tn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, On = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Cn = {
  date: pt({
    formats: Tn,
    defaultWidth: "full"
  }),
  time: pt({
    formats: On,
    defaultWidth: "full"
  }),
  dateTime: pt({
    formats: Pn,
    defaultWidth: "full"
  })
}, _n = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, In = (e, n, t, r) => _n[e];
function Ue(e) {
  return (n, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : o;
      s = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[l] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(n) : n;
    return s[i];
  };
}
const Rn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, An = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zn = {
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
}, Ln = {
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
}, Fn = {
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
}, Hn = {
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
}, Yn = (e, n) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, $n = {
  ordinalNumber: Yn,
  era: Ue({
    values: Rn,
    defaultWidth: "wide"
  }),
  quarter: Ue({
    values: An,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ue({
    values: zn,
    defaultWidth: "wide"
  }),
  day: Ue({
    values: Ln,
    defaultWidth: "wide"
  }),
  dayPeriod: Ue({
    values: Fn,
    defaultWidth: "wide",
    formattingValues: Hn,
    defaultFormattingWidth: "wide"
  })
};
function Je(e) {
  return (n, t = {}) => {
    const r = t.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(s);
    if (!i)
      return null;
    const o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(l) ? Xn(l, (p) => p.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Gn(l, (p) => p.test(o))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(d) : d, m = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(m)
    ) : m;
    const u = n.slice(o.length);
    return { value: m, rest: u };
  };
}
function Gn(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Xn(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Vn(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const s = r[0], i = n.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = t.valueCallback ? t.valueCallback(o) : o;
    const l = n.slice(s.length);
    return { value: o, rest: l };
  };
}
const Bn = /^(\d+)(th|st|nd|rd)?/i, qn = /\d+/i, Kn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qn = {
  any: [/^b/i, /^(a|c)/i]
}, Un = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Jn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, er = {
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
}, tr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, nr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, rr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, sr = {
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
}, ar = {
  ordinalNumber: Vn({
    matchPattern: Bn,
    parsePattern: qn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Je({
    matchPatterns: Kn,
    defaultMatchWidth: "wide",
    parsePatterns: Qn,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: Un,
    defaultMatchWidth: "wide",
    parsePatterns: Jn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Je({
    matchPatterns: Zn,
    defaultMatchWidth: "wide",
    parsePatterns: er,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: nr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: rr,
    defaultMatchWidth: "any",
    parsePatterns: sr,
    defaultParseWidth: "any"
  })
}, ir = {
  code: "en-US",
  formatDistance: Wn,
  formatLong: Cn,
  formatRelative: In,
  localize: $n,
  match: ar,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function or(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return ln(t, Sn(t)) + 1;
}
function lr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +ft(t) - +Dn(t);
  return Math.round(r / rn) + 1;
}
function cn(e, n) {
  var u, p, g, y;
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = tt(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : p.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((y = (g = s.locale) == null ? void 0 : g.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, o = je((n == null ? void 0 : n.in) || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = _e(o, n), d = je((n == null ? void 0 : n.in) || e, 0);
  d.setFullYear(r, 0, i), d.setHours(0, 0, 0, 0);
  const m = _e(d, n);
  return +t >= +l ? r + 1 : +t >= +m ? r : r - 1;
}
function cr(e, n) {
  var l, d, m, u;
  const t = tt(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, s = cn(e, n), i = je((n == null ? void 0 : n.in) || e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), _e(i, n);
}
function dr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +_e(t, n) - +cr(t, n);
  return Math.round(r / rn) + 1;
}
function F(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const We = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return F(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : F(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return F(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  h(e, n) {
    return F(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return F(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return F(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return F(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), s = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return F(s, n.length);
  }
}, He = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Tt = {
  // Era
  G: function(e, n, t) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const r = e.getFullYear(), s = r > 0 ? r : 1 - r;
      return t.ordinalNumber(s, { unit: "year" });
    }
    return We.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const s = cn(e, r), i = s > 0 ? s : 1 - s;
    if (n === "YY") {
      const o = i % 100;
      return F(o, 2);
    }
    return n === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : F(i, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = on(e);
    return F(t, n.length);
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
  u: function(e, n) {
    const t = e.getFullYear();
    return F(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return F(r, 2);
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(r);
      case "qq":
        return F(r, 2);
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return We.M(e, n);
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "L":
        return String(r + 1);
      case "LL":
        return F(r + 1, 2);
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, r) {
    const s = dr(e, r);
    return n === "wo" ? t.ordinalNumber(s, { unit: "week" }) : F(s, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = lr(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : F(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : We.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = or(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : F(r, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const r = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, r) {
    const s = e.getDay(), i = (s - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return F(i, 2);
      case "eo":
        return t.ordinalNumber(i, { unit: "day" });
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
  c: function(e, n, t, r) {
    const s = e.getDay(), i = (s - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return F(i, n.length);
      case "co":
        return t.ordinalNumber(i, { unit: "day" });
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
  i: function(e, n, t) {
    const r = e.getDay(), s = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(s);
      case "ii":
        return F(s, n.length);
      case "io":
        return t.ordinalNumber(s, { unit: "day" });
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const s = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
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
  b: function(e, n, t) {
    const r = e.getHours();
    let s;
    switch (r === 12 ? s = He.noon : r === 0 ? s = He.midnight : s = r / 12 >= 1 ? "pm" : "am", n) {
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
  B: function(e, n, t) {
    const r = e.getHours();
    let s;
    switch (r >= 17 ? s = He.evening : r >= 12 ? s = He.afternoon : r >= 4 ? s = He.morning : s = He.night, n) {
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
  h: function(e, n, t) {
    if (n === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return We.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : We.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : F(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : F(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : We.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : We.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return We.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return Pt(r);
      case "XXXX":
      case "XX":
        return Ce(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ce(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return Pt(r);
      case "xxxx":
      case "xx":
        return Ce(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ce(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ot(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ce(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ot(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ce(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(+e / 1e3);
    return F(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return F(+e, n.length);
  }
};
function Ot(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(s) : t + String(s) + n + F(i, 2);
}
function Pt(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + F(Math.abs(e) / 60, 2) : Ce(e, n);
}
function Ce(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = F(Math.trunc(r / 60), 2), i = F(r % 60, 2);
  return t + s + n + i;
}
const Ct = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, dn = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, ur = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], s = t[2];
  if (!s)
    return Ct(e, n);
  let i;
  switch (r) {
    case "P":
      i = n.dateTime({ width: "short" });
      break;
    case "PP":
      i = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = n.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Ct(r, n)).replace("{{time}}", dn(s, n));
}, hr = {
  p: dn,
  P: ur
}, fr = /^D+$/, mr = /^Y+$/, gr = ["D", "DD", "YY", "YYYY"];
function yr(e) {
  return fr.test(e);
}
function xr(e) {
  return mr.test(e);
}
function br(e, n, t) {
  const r = pr(e, n, t);
  if (console.warn(r), gr.includes(e)) throw new RangeError(r);
}
function pr(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const wr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Dr = /^'([^]*?)'?$/, kr = /''/g, Er = /[a-zA-Z]/;
function xe(e, n, t) {
  var u, p, g, y;
  const r = tt(), s = r.locale ?? ir, i = r.firstWeekContainsDate ?? ((p = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, l = ee(e, t == null ? void 0 : t.in);
  if (!jn(l))
    throw new RangeError("Invalid time value");
  let d = n.match(vr).map((f) => {
    const x = f[0];
    if (x === "p" || x === "P") {
      const E = hr[x];
      return E(f, s.formatLong);
    }
    return f;
  }).join("").match(wr).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const x = f[0];
    if (x === "'")
      return { isToken: !1, value: jr(f) };
    if (Tt[x])
      return { isToken: !0, value: f };
    if (x.match(Er))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: f };
  });
  s.localize.preprocessor && (d = s.localize.preprocessor(l, d));
  const m = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: s
  };
  return d.map((f) => {
    if (!f.isToken) return f.value;
    const x = f.value;
    (xr(x) || yr(x)) && br(x, n, String(e));
    const E = Tt[x[0]];
    return E(l, x, s.localize, m);
  }).join("");
}
function jr(e) {
  const n = e.match(Dr);
  return n ? n[1].replace(kr, "'") : e;
}
function Mr(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDate();
}
function yt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay();
}
function _t(e, n) {
  var d, m, u, p;
  const t = tt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((p = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = Mr(ee(e, n == null ? void 0 : n.in));
  if (isNaN(s)) return NaN;
  const i = yt(Mn(e, n));
  let o = r - i;
  o <= 0 && (o += 7);
  const l = s - o;
  return Math.ceil(l / 7) + 1;
}
function wt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getFullYear();
}
function Sr(e, n, t) {
  const [r, s] = nt(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +_e(r, t) == +_e(s, t);
}
function Nr(e, n, t) {
  const [r, s] = nt(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return r.getFullYear() === s.getFullYear() && r.getMonth() === s.getMonth();
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), It = (e) => {
  const n = Tr(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, un = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Or = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pr = {
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
const Cr = gt(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: o,
    ...l
  }, d) => vt(
    "svg",
    {
      ref: d,
      ...Pr,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: un("lucide", s),
      ...!i && !Or(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([m, u]) => vt(m, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = (e, n) => {
  const t = gt(
    ({ className: r, ...s }, i) => vt(Cr, {
      ref: i,
      iconNode: n,
      className: un(
        `lucide-${Wr(It(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return t.displayName = It(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Ir = Pe("calendar", _r);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], hn = Pe("check", Rr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Rt = Pe("chevron-down", Ar);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], At = Pe("chevron-right", zr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Fr = Pe("file-text", Lr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], zt = Pe("grip-vertical", Hr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], $r = Pe("type", Yr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Et = Pe("x", Gr), Te = {
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
}, Ee = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, mt = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, Lt = ({
  x: e,
  y: n,
  taskId: t,
  // 사용되지 않지만 props 유지
  selectedTaskIds: r,
  tasks: s,
  onTaskGroup: i,
  onTaskUngroup: o,
  onClose: l,
  onDeselect: d
}) => {
  const m = () => {
    r.size >= 2 && i && (i(Array.from(r)), l());
  }, u = () => {
    if (r.size === 1 && o) {
      const g = Array.from(r)[0], y = s.find((f) => f.id === g);
      (y == null ? void 0 : y.type) === "GROUP" && (o(g), l());
    }
  }, p = r.size === 1 && (() => {
    const g = Array.from(r)[0], y = s.find((f) => f.id === g);
    return (y == null ? void 0 : y.type) === "GROUP";
  })();
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: n },
      onClick: (g) => g.stopPropagation(),
      children: [
        r.size >= 2 && i && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: m,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
              "그룹화 (",
              r.size,
              "개 선택됨)"
            ]
          }
        ),
        p && o && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: u,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
              "그룹 해제"
            ]
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: () => {
              d(), l();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Ft } = Ee, dt = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Xr = ({
  columns: e,
  tasks: n,
  activeCPId: t,
  onTaskCreate: r,
  onCancel: s,
  isVirtualized: i = !1,
  virtualRowIndex: o
}) => {
  const [l, d] = Oe.useState(dt), m = ue(null);
  le(() => {
    d(dt), setTimeout(() => {
      var f;
      (f = m.current) == null || f.focus();
    }, 0);
  }, []);
  const u = T(() => {
    d(dt), s();
  }, [s]), p = T(async () => {
    if (!(!l.name.trim() || !r || !t))
      try {
        const f = n[n.length - 1], x = f ? $(f.endDate, 1) : /* @__PURE__ */ new Date(), E = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, S = $(x, Math.max(E - 1, 0)), P = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: x,
          endDate: S,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await r(P), d(dt), s();
      } catch (f) {
        console.error("Failed to create task:", f), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, r, t, n, s]), g = T((f) => {
    f.key === "Enter" ? (f.preventDefault(), p()) : f.key === "Escape" && (f.preventDefault(), u());
  }, [p, u]), y = i && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Ft}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Ft,
        ...y
      },
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: e[0].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: m,
                type: "text",
                placeholder: "공정명...",
                className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.name,
                onChange: (f) => d((x) => ({ ...x, name: f.target.value })),
                onKeyDown: g
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[1].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.indirectWorkDaysPre,
                onChange: (f) => {
                  const x = f.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  d((S) => ({ ...S, indirectWorkDaysPre: E }));
                },
                onKeyDown: g,
                title: "선 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[2].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.netWorkDays,
                onChange: (f) => {
                  const x = f.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  d((S) => ({ ...S, netWorkDays: E }));
                },
                onKeyDown: g,
                title: "순작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[3].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.indirectWorkDaysPost,
                onChange: (f) => {
                  const x = f.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  d((S) => ({ ...S, indirectWorkDaysPost: E }));
                },
                onKeyDown: g,
                title: "후 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center justify-center gap-1 px-2",
            style: { width: e[4].width + e[5].width },
            children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: p,
                  disabled: !l.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ a.jsx(hn, { size: 14 })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: u,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ a.jsx(Et, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Ht } = Ee, ut = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, Vr = ({
  columns: e,
  tasks: n,
  onTaskCreate: t,
  onCancel: r,
  isVirtualized: s = !1,
  virtualRowIndex: i,
  dragHandleWidth: o = 0
}) => {
  const [l, d] = Oe.useState(ut), m = ue(null);
  le(() => {
    d(ut), setTimeout(() => {
      var f;
      (f = m.current) == null || f.focus();
    }, 0);
  }, []);
  const u = T(() => {
    d(ut), r();
  }, [r]), p = T(async () => {
    if (!(!l.name.trim() || !t))
      try {
        const f = n.filter((N) => N.type === "CP" && !N.parentId), x = f[f.length - 1], E = x ? $(x.endDate, 1) : /* @__PURE__ */ new Date(), S = l.workDaysTotal + l.nonWorkDaysTotal, P = $(E, Math.max(S - 1, 0)), H = {
          id: `cp-${Date.now()}`,
          parentId: null,
          wbsLevel: 1,
          type: "CP",
          name: l.name.trim(),
          startDate: E,
          endDate: P,
          cp: {
            workDaysTotal: l.workDaysTotal,
            nonWorkDaysTotal: l.nonWorkDaysTotal
          },
          dependencies: []
        };
        await t(H), d(ut), r();
      } catch (f) {
        console.error("Failed to create CP:", f), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, t, n, r]), g = T((f) => {
    f.key === "Enter" ? (f.preventDefault(), p()) : f.key === "Escape" && (f.preventDefault(), u());
  }, [p, u]), y = s && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Ht}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Ht,
        ...y
      },
      children: [
        o > 0 && /* @__PURE__ */ a.jsx("div", { style: { width: o }, className: "shrink-0" }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: o > 0 ? e[0].width - o : e[0].width },
            children: [
              /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
              " ",
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: m,
                  type: "text",
                  placeholder: "CP명...",
                  className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: l.name,
                  onChange: (f) => d((x) => ({ ...x, name: f.target.value })),
                  onKeyDown: g
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 text-xs text-gray-600",
            style: { width: e[1].width },
            children: [
              l.workDaysTotal + l.nonWorkDaysTotal,
              "일"
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[2].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[50px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-vermilion focus:border-vermilion focus:outline-none focus:ring-1 focus:ring-vermilion",
                value: l.workDaysTotal,
                onChange: (f) => {
                  const x = f.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  d((S) => ({ ...S, workDaysTotal: E }));
                },
                onKeyDown: g,
                title: "작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center px-1",
            style: { width: e[3].width },
            children: /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[50px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-teal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal",
                value: l.nonWorkDaysTotal,
                onChange: (f) => {
                  const x = f.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  d((S) => ({ ...S, nonWorkDaysTotal: E }));
                },
                onKeyDown: g,
                title: "비작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex shrink-0 items-center justify-center gap-1 px-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: p,
              disabled: !l.name.trim(),
              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
              title: "저장 (Enter)",
              children: /* @__PURE__ */ a.jsx(hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: u,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ a.jsx(Et, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: Ye, HEADER_HEIGHT: Yt, MILESTONE_LANE_HEIGHT: $t } = Ee, Gt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], Xt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], fn = gt(
  ({ tasks: e, allTasks: n, viewMode: t, expandedIds: r, onToggle: s, onTaskClick: i, onTaskUpdate: o, onTaskCreate: l, onTaskReorder: d, activeCPId: m, virtualRows: u, totalHeight: p, onTotalWidthChange: g, onTaskGroup: y, onTaskUngroup: f, isAddingTask: x = !1, onCancelAddTask: E, isAddingCP: S = !1, onCancelAddCP: P }, H) => {
    const N = u && u.length > 0, [I, ie] = V(null), [Q, ne] = V(null), [B, re] = V(null), [z, G] = V(/* @__PURE__ */ new Set()), [q, Me] = V(null), [K, se] = V(null), [ae, D] = V(null), [w, L] = V(""), c = ue(null), [k, W] = V(
      Gt.map((b) => b.width)
    ), [C, me] = V(
      Xt.map((b) => b.width)
    ), [oe, Y] = V(null), he = ue(!1), fe = t === "MASTER" ? Gt : Xt, De = t === "MASTER" ? k : C, Ie = t === "MASTER" ? W : me, X = ve(
      () => fe.map((b, h) => ({
        ...b,
        width: De[h] ?? b.width
      })),
      [fe, De]
    ), rt = d ? 24 : 0, be = X.reduce((b, h) => b + h.width, 0) + rt;
    le(() => {
      g && g(be);
    }, [be, g]);
    const xt = T((b, h) => {
      if (b.detail >= 2) return;
      b.preventDefault(), b.stopPropagation(), he.current = !0, Y(h);
      const M = b.clientX, te = De[h], U = fe[h].minWidth, ce = (Z) => {
        if (!he.current) return;
        const ge = Z.clientX - M, v = Math.max(U, te + ge);
        Ie((Ne) => {
          const pe = [...Ne];
          return pe[h] = v, pe;
        });
      }, _ = () => {
        he.current = !1, Y(null), document.removeEventListener("mousemove", ce), document.removeEventListener("mouseup", _);
      };
      document.addEventListener("mousemove", ce), document.addEventListener("mouseup", _);
    }, [De, fe, Ie]), Re = T((b, h = 12, M = "normal") => {
      const U = document.createElement("canvas").getContext("2d");
      return U ? (U.font = `${M} ${h}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, U.measureText(b).width) : 0;
    }, []), Ae = T((b) => {
      const h = fe[b].minWidth, M = b === 0, te = M ? 48 : 20, U = fe[b].label;
      let ce = Re(U, 12, "500") + 16;
      return e.forEach((_) => {
        let Z = "", ge = 0;
        if (t === "MASTER") {
          const bt = _.type === "GROUP";
          switch (M && _.parentId && (ge = 20), b) {
            case 0:
              Z = _.name;
              break;
            case 1:
              Z = bt ? "-" : _.cp ? `${_.cp.workDaysTotal + _.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              Z = bt ? "-" : _.cp ? `${_.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              Z = bt ? "-" : _.cp ? `${_.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (b) {
            case 0:
              Z = _.name;
              break;
            case 1:
              Z = _.task ? String(_.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              Z = _.task ? String(_.task.netWorkDays) : "-";
              break;
            case 3:
              Z = _.task ? String(_.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              Z = xe(_.startDate, "yyyy-MM-dd");
              break;
            case 5:
              Z = xe(_.endDate, "yyyy-MM-dd");
              break;
          }
        const pe = Re(Z, M ? 14 : 12, M ? "500" : "normal") + te + ge;
        ce = Math.max(ce, pe);
      }), Math.max(h, Math.ceil(ce));
    }, [e, t, fe, Re]), st = T((b, h) => {
      b.preventDefault(), b.stopPropagation(), he.current = !1, Y(null);
      const M = Ae(h);
      Ie((te) => {
        const U = [...te];
        return U[h] = M, U;
      });
    }, [Ae, Ie]), ke = T((b, h, M) => {
      if (!b.task || !o) return;
      const te = {
        ...b,
        task: {
          ...b.task,
          [h]: M
        }
      };
      o(te);
    }, [o]), Be = T((b, h) => {
      b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", h), ie(h);
      const M = document.createElement("div");
      M.style.opacity = "0", document.body.appendChild(M), b.dataTransfer.setDragImage(M, 0, 0), setTimeout(() => document.body.removeChild(M), 0);
    }, []), qe = T((b, h) => {
      if (b.preventDefault(), b.dataTransfer.dropEffect = "move", h === I) return;
      const M = b.currentTarget.getBoundingClientRect(), te = M.top + M.height / 2, U = b.clientY < te ? "before" : "after";
      ne(h), re(U);
    }, [I]), ze = T(() => {
      ne(null), re(null);
    }, []), at = T((b, h) => {
      if (b.preventDefault(), !I || !d || I === h) {
        ie(null), ne(null), re(null);
        return;
      }
      const M = e.findIndex((U) => U.id === h), te = B === "after" ? M + 1 : M;
      d(I, te), ie(null), ne(null), re(null);
    }, [I, B, d, e]), it = T(() => {
      ie(null), ne(null), re(null);
    }, []), ot = T((b, h, M) => {
      if (I) return;
      const te = b.ctrlKey || b.metaKey, U = b.shiftKey;
      if (te)
        G((ce) => {
          const _ = new Set(ce);
          return _.has(h.id) ? _.delete(h.id) : _.add(h.id), _;
        }), Me(M);
      else if (U && q !== null) {
        const ce = Math.min(q, M), _ = Math.max(q, M);
        G((Z) => {
          const ge = new Set(Z);
          for (let v = ce; v <= _; v++)
            e[v] && ge.add(e[v].id);
          return ge;
        });
      } else
        G(/* @__PURE__ */ new Set([h.id])), Me(M);
    }, [I, q, e]), Le = T((b, h) => {
      b.preventDefault(), z.has(h.id) || G(/* @__PURE__ */ new Set([h.id])), se({
        x: b.clientX,
        y: b.clientY,
        taskId: h.id
      });
    }, [z]);
    le(() => {
      const b = () => {
        se(null);
      };
      if (K)
        return document.addEventListener("click", b), () => document.removeEventListener("click", b);
    }, [K]), le(() => {
      const b = (h) => {
        h.key === "Escape" && (G(/* @__PURE__ */ new Set()), se(null), D(null));
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, []);
    const Fe = T((b) => {
      b.type === "GROUP" && (D(b.id), L(b.name), setTimeout(() => {
        var h, M;
        (h = c.current) == null || h.focus(), (M = c.current) == null || M.select();
      }, 0));
    }, []), Se = T(() => {
      if (!ae || !o) {
        D(null);
        return;
      }
      const b = e.find((h) => h.id === ae);
      b && w.trim() && w !== b.name && o({
        ...b,
        name: w.trim()
      }), D(null), L("");
    }, [ae, w, e, o]), lt = T(() => {
      D(null), L("");
    }, []), ct = T((b) => {
      b.key === "Enter" ? (b.preventDefault(), Se()) : b.key === "Escape" && (b.preventDefault(), lt());
    }, [Se, lt]), j = () => /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: X.map((b, h) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: b.width },
        children: [
          b.label,
          h < X.length - 1 && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${oe === h ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (M) => xt(M, h),
              onDoubleClick: (M) => st(M, h),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          h < X.length - 1 && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      b.id
    )) }), O = z.size === 1 ? e.find((b) => b.id === Array.from(z)[0] && b.type === "GROUP") : null, A = z.size >= 2 && y, R = O && f, J = () => !A && !R && z.size === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      z.size > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-500", children: [
        z.size,
        "개 선택"
      ] }),
      A && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            y(Array.from(z)), G(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
          title: "선택한 항목들을 그룹화",
          children: [
            /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
            "그룹화"
          ]
        }
      ),
      R && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            f(O.id), G(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors",
          title: "그룹 해제",
          children: [
            /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
            "해제"
          ]
        }
      ),
      z.size > 0 && /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => G(/* @__PURE__ */ new Set()),
          className: "flex items-center justify-center rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors",
          title: "선택 해제 (ESC)",
          children: /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] });
    return t === "MASTER" ? /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Yt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              J()
            ] }),
            j()
          ]
        }
      ),
      oe !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: H, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: $t, minWidth: be },
            children: X.map((b, h) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: b.width },
                children: h === 0 && "Milestone"
              },
              b.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: be,
              height: N ? p : void 0,
              position: "relative"
            },
            children: [
              (N ? u : e.map((b, h) => ({ index: h, start: h * Ye, size: Ye, key: h }))).map((b) => {
                const h = e[b.index];
                if (!h) return null;
                const M = h.type === "GROUP", te = M && n.some((v) => v.parentId === h.id), U = r.has(h.id), ce = h.parentId ? 20 : 0, _ = I === h.id, Z = Q === h.id, ge = z.has(h.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!d,
                    onDragStart: (v) => Be(v, h.id),
                    onDragOver: (v) => qe(v, h.id),
                    onDragLeave: ze,
                    onDrop: (v) => at(v, h.id),
                    onDragEnd: it,
                    onClick: (v) => ot(v, h, b.index),
                    onContextMenu: (v) => Le(v, h),
                    className: `box-border flex items-center border-b transition-all duration-150 ${_ ? "opacity-50 bg-blue-50" : Z ? B === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : ge ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : M ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: Ye,
                      ...N ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${b.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !M && i(h),
                    title: M ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      d && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(zt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: d ? X[0].width - 24 : X[0].width, paddingLeft: ce + 8 },
                          children: [
                            te ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (v) => {
                                  v.stopPropagation(), s(h.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: U ? /* @__PURE__ */ a.jsx(Rt, { size: 14 }) : /* @__PURE__ */ a.jsx(At, { size: 14 })
                              }
                            ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
                            ae === h.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: c,
                                type: "text",
                                value: w,
                                onChange: (v) => L(v.target.value),
                                onKeyDown: ct,
                                onBlur: Se,
                                onClick: (v) => v.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-bold text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${M ? "font-bold text-gray-700 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (v) => {
                                  M && o && (v.stopPropagation(), Fe(h));
                                },
                                title: M && o ? "더블클릭하여 이름 편집" : void 0,
                                children: h.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: X[1].width },
                          children: M ? "-" : h.cp ? `${h.cp.workDaysTotal + h.cp.nonWorkDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                          style: { width: X[2].width },
                          children: M ? "-" : h.cp ? `${h.cp.workDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-teal",
                          style: { width: X[3].width },
                          children: M ? "-" : h.cp ? `${h.cp.nonWorkDaysTotal}일` : "-"
                        }
                      )
                    ]
                  },
                  b.key
                );
              }),
              S && /* @__PURE__ */ a.jsx(
                Vr,
                {
                  columns: X,
                  tasks: e,
                  onTaskCreate: l,
                  onCancel: P || (() => {
                  }),
                  isVirtualized: N,
                  virtualRowIndex: e.length,
                  dragHandleWidth: rt
                }
              )
            ]
          }
        )
      ] }),
      K && /* @__PURE__ */ a.jsx(
        Lt,
        {
          x: K.x,
          y: K.y,
          taskId: K.taskId,
          selectedTaskIds: z,
          tasks: e,
          onTaskGroup: y,
          onTaskUngroup: f,
          onClose: () => se(null),
          onDeselect: () => G(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Yt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              J()
            ] }),
            j()
          ]
        }
      ),
      oe !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: H, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: $t, minWidth: be },
            children: X.map((b, h) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: b.width },
                children: h === 0 && "Milestone"
              },
              b.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: be,
              height: N ? p : void 0,
              position: "relative"
            },
            children: [
              (N ? u : e.map((b, h) => ({ index: h, start: h * Ye, size: Ye, key: h }))).map((b) => {
                const h = e[b.index];
                if (!h) return null;
                const M = h.type === "GROUP", te = M && n.some((v) => v.parentId === h.id), U = r.has(h.id), ce = h.parentId && h.parentId !== m ? 20 : 0, _ = I === h.id, Z = Q === h.id, ge = z.has(h.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!d,
                    onDragStart: (v) => Be(v, h.id),
                    onDragOver: (v) => qe(v, h.id),
                    onDragLeave: ze,
                    onDrop: (v) => at(v, h.id),
                    onDragEnd: it,
                    onClick: (v) => ot(v, h, b.index),
                    onContextMenu: (v) => Le(v, h),
                    className: `box-border flex items-center border-b transition-colors ${_ ? "opacity-50 bg-blue-50" : Z ? B === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : ge ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : M ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: Ye,
                      ...N ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${b.start}px)`
                      } : {}
                    },
                    children: [
                      d && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(zt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: d ? X[0].width - 24 : X[0].width, paddingLeft: ce + 8 },
                          children: [
                            te ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (v) => {
                                  v.stopPropagation(), s(h.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: U ? /* @__PURE__ */ a.jsx(Rt, { size: 14 }) : /* @__PURE__ */ a.jsx(At, { size: 14 })
                              }
                            ) : M ? /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }) : null,
                            ae === h.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: c,
                                type: "text",
                                value: w,
                                onChange: (v) => L(v.target.value),
                                onKeyDown: ct,
                                onBlur: Se,
                                onClick: (v) => v.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-bold text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${M ? "font-bold text-gray-700 cursor-text" : "text-gray-700"}`,
                                onDoubleClick: (v) => {
                                  M && o && (v.stopPropagation(), Fe(h));
                                },
                                title: M && o ? "더블클릭하여 이름 편집" : void 0,
                                children: h.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: X[1].width },
                          children: h.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: h.task.indirectWorkDaysPre,
                              onChange: (v) => {
                                const Ne = v.target.value.replace(/[^0-9]/g, ""), pe = parseInt(Ne) || 0;
                                ke(h, "indirectWorkDaysPre", pe);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: X[2].width },
                          children: h.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: h.task.netWorkDays,
                              onChange: (v) => {
                                const Ne = v.target.value.replace(/[^0-9]/g, ""), pe = parseInt(Ne) || 0;
                                ke(h, "netWorkDays", pe);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "순작업일"
                            }
                          ) : /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: X[3].width },
                          children: h.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: h.task.indirectWorkDaysPost,
                              onChange: (v) => {
                                const Ne = v.target.value.replace(/[^0-9]/g, ""), pe = parseInt(Ne) || 0;
                                ke(h, "indirectWorkDaysPost", pe);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: X[4].width },
                          children: xe(h.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: X[5].width },
                          children: xe(h.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  b.key
                );
              }),
              x && m && /* @__PURE__ */ a.jsx(
                Xr,
                {
                  columns: X,
                  tasks: e,
                  activeCPId: m,
                  onTaskCreate: l,
                  onCancel: E || (() => {
                  }),
                  isVirtualized: N,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      K && /* @__PURE__ */ a.jsx(
        Lt,
        {
          x: K.x,
          y: K.y,
          taskId: K.taskId,
          selectedTaskIds: z,
          tasks: e,
          onTaskGroup: y,
          onTaskUngroup: f,
          onClose: () => se(null),
          onDeselect: () => G(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
fn.displayName = "GanttSidebar";
const Ge = (e, n = [], t) => !!(!t.workOnSaturdays && sn(e) || !t.workOnSundays && an(e) || !t.workOnHolidays && n.some((r) => kn(r, e))), Ws = (e) => sn(e) || an(e), Br = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; Ge(s, t, r); )
    s = $(s, 1);
  for (; i < n; )
    Ge(s, t, r) || i++, i < n && (s = $(s, 1));
  return s;
}, Ts = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; i < n; )
    s = $(s, -1), Ge(s, t, r) || i++;
  return s;
}, Vt = (e, n) => n <= 0 ? e : $(e, n - 1), Os = (e, n = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: r, indirectWorkDaysPre: s, indirectWorkDaysPost: i } = e.task, o = Ze(new Date(e.startDate));
  let l = o, d, m;
  s > 0 && (d = l, m = Vt(l, s), l = $(m, 1));
  let u = l, p = u;
  if (r > 0) {
    for (; Ge(u, n, t); )
      u = $(u, 1);
    p = Br(u, r, n, t), l = $(p, 1);
  } else s === 0 && (u = o, p = o);
  let g, y;
  return i > 0 && (g = l, y = Vt(l, i)), {
    startDate: d || u,
    endDate: y || p,
    netWorkStartDate: u,
    netWorkEndDate: p,
    indirectPreStartDate: d,
    indirectPreEndDate: m,
    indirectPostStartDate: g,
    indirectPostEndDate: y
  };
}, Ps = (e, n, t) => {
  switch (n) {
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
}, et = (e, n, t) => kt(e, n) * t, Cs = (e, n, t) => {
  const r = Math.round(e / t);
  return $(n, r);
}, _s = (e, n, t) => (kt(n, e) + 1) * t, Is = (e) => mt[e].pixelsPerDay, mn = (e, n = [], t = 5) => {
  const r = [
    ...e.flatMap((m) => [m.startDate, m.endDate].filter(Boolean)),
    ...n.map((m) => m.date)
  ];
  if (r.length === 0) {
    const m = /* @__PURE__ */ new Date();
    return {
      minDate: m,
      maxDate: $(m, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...r.map((m) => m.getTime()))), i = new Date(Math.max(...r.map((m) => m.getTime()))), o = $(s, -t), l = $(i, t), d = kt(l, o);
  return {
    minDate: o,
    maxDate: l,
    totalDays: d
  };
}, { ROW_HEIGHT: ye, HEADER_HEIGHT: qr, MILESTONE_LANE_HEIGHT: we, BAR_HEIGHT: de } = Ee, Kr = ({
  minDate: e,
  totalDays: n,
  pixelsPerDay: t,
  zoomLevel: r,
  holidays: s,
  calendarSettings: i
}) => {
  const o = Array.from({ length: n }, (g, y) => $(e, y)), l = n * t, d = ve(() => {
    const g = [];
    let y = wt(o[0]), f = 0;
    return o.forEach((x) => {
      wt(x) !== y ? (g.push({ label: `${y}년`, days: f }), y = wt(x), f = 1) : f++;
    }), g.push({ label: `${y}년`, days: f }), g;
  }, [o]), m = ve(() => {
    const g = [];
    let y = o[0], f = 0;
    return o.forEach((x) => {
      Nr(x, y) ? f++ : (g.push({ label: xe(y, "M월"), days: f }), y = x, f = 1);
    }), g.push({ label: xe(y, "M월"), days: f }), g;
  }, [o]), u = ve(() => {
    if (r === "MONTH")
      return null;
    if (r === "DAY")
      return /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: o.map((g, y) => {
        const f = yt(g), x = Ge(g, s, i), E = f === 0, S = f === 6;
        let P = "text-gray-600";
        E && (P = "text-red-500"), S && (P = "text-blue-500"), x && !E && !S && (P = "text-red-500");
        let H = "";
        return E || x && !S ? H = "bg-red-50/50" : S && (H = "bg-blue-50/50"), /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${H}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: `text-[10px] leading-none ${P}`, children: xe(g, "d") }),
              /* @__PURE__ */ a.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${P}`, children: ["일", "월", "화", "수", "목", "금", "토"][f] })
            ]
          },
          y
        );
      }) });
    {
      const g = [];
      let y = o[0], f = 0;
      return o.forEach((x) => {
        Sr(x, y, { weekStartsOn: 0 }) ? f++ : (g.push({ label: `${_t(y, { weekStartsOn: 0 })}주`, days: f }), y = x, f = 1);
      }), g.push({ label: `${_t(y, { weekStartsOn: 0 })}주`, days: f }), /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: g.map((x, E) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: x.days * t },
          children: x.label
        },
        E
      )) });
    }
  }, [o, r, t, s, i, l]), p = r === "MONTH";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: qr, minWidth: l },
      children: p ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: d.map((g, y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: g.days * t },
                children: g.label
              },
              y
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((g, y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: g.days * t },
                children: g.label
              },
              y
            ))
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: d.map((g, y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: g.days * t },
                children: g.label
              },
              y
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((g, y) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: g.days * t },
                children: g.label
              },
              y
            ))
          }
        ),
        u
      ] })
    }
  );
}, Qr = ({
  minDate: e,
  totalDays: n,
  chartHeight: t,
  pixelsPerDay: r,
  holidays: s,
  calendarSettings: i,
  zoomLevel: o
}) => {
  const l = ve(() => {
    if (o === "MONTH") return [];
    const d = [];
    for (let m = 0; m < n; m++) {
      const u = $(e, m), p = yt(u), g = p === 0, y = p === 6;
      if (Ge(u, s, i) || y) {
        const x = m * r;
        let E = "rgba(254, 242, 242, 0.5)";
        y && !g && (E = "rgba(239, 246, 255, 0.5)"), g && (E = "rgba(254, 242, 242, 0.5)"), d.push(
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x,
              y: 0,
              width: r,
              height: t,
              fill: E,
              className: "pointer-events-none"
            },
            `weekend-${m}`
          )
        );
      }
    }
    return d;
  }, [e, n, t, r, s, i, o]);
  return /* @__PURE__ */ a.jsx("g", { children: l });
}, Ur = (e, n, t) => {
  if (e.length === 0) return [];
  const r = 25, s = 12, i = 8, o = e.map((u) => ({
    milestone: u,
    x: et(u.date, n, t),
    labelLevel: 0,
    labelWidth: u.name.length * s + r
  })).sort((u, p) => u.x - p.x), l = [], d = [], m = [];
  for (const u of o) {
    const p = u.labelWidth, g = u.x - p, y = u.x - i;
    if (!d.some((x) => g < x + i))
      d.push(y), l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: 0
      });
    else {
      const x = u.x + i, E = u.x + p;
      m.some(
        (P) => !(E < P.start || x > P.end)
      ) ? l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: -1
      }) : (m.push({ start: x, end: E }), l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, Jr = ({
  milestone: e,
  x: n,
  labelLevel: t = 0,
  isDragging: r = !1,
  dragX: s,
  onMouseDown: i,
  onDoubleClick: o
}) => {
  const d = we / 2, m = r && s !== void 0 ? s : n;
  let u, p, g;
  t === 0 ? (u = -8, p = 4, g = "end") : t === 1 ? (u = 8, p = 4, g = "start") : (u = 0, p = 18, g = "middle");
  const y = (x) => {
    i && (x.preventDefault(), x.stopPropagation(), i(x, e));
  }, f = (x) => {
    o && (x.preventDefault(), x.stopPropagation(), o(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${m}, ${d})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${r ? "cursor-ew-resize" : ""}`,
      onMouseDown: y,
      onDoubleClick: f,
      children: [
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1e3,
            stroke: r ? "#3B82F6" : "#9CA3AF",
            strokeWidth: r ? 3 : 2,
            strokeDasharray: "4, 4",
            className: r ? "opacity-100" : "opacity-80"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "path",
          {
            d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
            fill: r ? "#3B82F6" : Te.milestone,
            stroke: "white",
            strokeWidth: 1,
            className: "drop-shadow-sm transition-transform duration-150 group-hover:scale-[1.3]",
            style: {
              transformOrigin: "center",
              transformBox: "fill-box",
              transform: r ? "scale(1.3)" : void 0
            }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: 0,
            cy: 0,
            r: 12,
            fill: "transparent",
            className: "cursor-ew-resize"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "text",
          {
            x: u,
            y: p,
            textAnchor: g,
            className: `select-none text-[11px] font-bold transition-colors ${r ? "fill-blue-700" : "fill-gray-600 group-hover:fill-blue-700"}`,
            children: e.name
          }
        )
      ]
    }
  );
}, Zr = ({
  task: e,
  y: n,
  minDate: t,
  pixelsPerDay: r,
  isMasterView: s,
  isDraggable: i = !1,
  dragInfo: o,
  onDragStart: l
}) => {
  var y, f;
  if (e.type === "GROUP") return null;
  const d = 4, m = !!o, u = (o == null ? void 0 : o.startDate) || e.startDate, p = (o == null ? void 0 : o.endDate) || e.endDate, g = et(u, t, r);
  if (s) {
    const x = ((y = e.cp) == null ? void 0 : y.workDaysTotal) || 0, E = ((f = e.cp) == null ? void 0 : f.nonWorkDaysTotal) || 0;
    if (x + E === 0) return null;
    const P = x * r, H = E * r;
    return /* @__PURE__ */ a.jsxs("g", { transform: `translate(${g}, ${n})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: P,
          height: de,
          fill: Te.vermilion,
          rx: d,
          ry: d,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: P,
          y: 0,
          width: H,
          height: de,
          fill: Te.teal,
          rx: d,
          ry: d,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "text",
        {
          x: -8,
          y: de / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: x, indirectWorkDaysPre: E, indirectWorkDaysPost: S } = e.task, P = (o == null ? void 0 : o.indirectWorkDaysPre) ?? E, H = (o == null ? void 0 : o.indirectWorkDaysPost) ?? S, N = P * r, I = x * r, ie = H * r, Q = N + I + ie, ne = 0, B = N, re = N + I, z = 8, G = {
      startDate: u,
      endDate: p,
      indirectWorkDaysPre: P,
      netWorkDays: x,
      indirectWorkDaysPost: H
    };
    return /* @__PURE__ */ a.jsxs(
      "g",
      {
        transform: `translate(${g}, ${n})`,
        className: `group ${m ? "opacity-90" : ""}`,
        children: [
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: N,
              y: 0,
              width: I,
              height: de,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (q) => l == null ? void 0 : l(q, e.id, "move", G)
            }
          ),
          P > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: ne,
              y: 0,
              width: N,
              height: de,
              fill: Te.blue,
              rx: d,
              ry: d,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          x > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: B,
              y: 0,
              width: I,
              height: de,
              fill: Te.red,
              rx: d,
              ry: d,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          H > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: re,
              y: 0,
              width: ie,
              height: de,
              fill: Te.blue,
              rx: d,
              ry: d,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: -z / 2,
              y: 0,
              width: z,
              height: de,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (q) => l == null ? void 0 : l(q, e.id, "resize-pre", G),
              children: /* @__PURE__ */ a.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: Q - z / 2,
              y: 0,
              width: z,
              height: de,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (q) => l == null ? void 0 : l(q, e.id, "resize-post", G),
              children: /* @__PURE__ */ a.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: 1,
                y: de / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: Q - 4,
                y: de / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx(
            "text",
            {
              x: -8,
              y: de / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          m && /* @__PURE__ */ a.jsxs("g", { children: [
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: Q / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  xe(u, "MM/dd"),
                  " ~ ",
                  xe(p, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: Q / 2,
                y: de + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  P,
                  "일 + 순",
                  x,
                  "일 + 뒤",
                  H,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, es = () => /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ a.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: Te.dependency })
  }
) }), gn = gt(
  ({ tasks: e, milestones: n, viewMode: t, zoomLevel: r, holidays: s, calendarSettings: i, onBarDrag: o, onMilestoneUpdate: l, onMilestoneDoubleClick: d, virtualRows: m, totalHeight: u }, p) => {
    const g = mt[r].pixelsPerDay, y = t === "MASTER", f = m && m.length > 0, [x, E] = V(null), [S, P] = V(null), H = ue(null);
    le(() => {
      H.current = S;
    }, [S]);
    const { minDate: N, totalDays: I } = ve(() => mn(e, n, 60), [e, n]), ie = ve(() => Ur(n, N, g), [n, N, g]), Q = I * g, ne = Math.max(f ? (u || 0) + we + 100 : e.length * ye + we + 100, 500), B = ue(null);
    le(() => {
      B.current = x;
    }, [x]);
    const re = T((D, w) => {
      if (!l) return;
      D.preventDefault(), D.stopPropagation();
      const L = et(w.date, N, g), c = {
        milestoneId: w.id,
        startX: D.clientX,
        originalDate: w.date,
        currentX: L
      };
      P(c);
    }, [l, N, g]), z = T((D) => {
      const w = H.current;
      if (!w) return;
      const L = D.clientX - w.startX, c = et(w.originalDate, N, g), k = Math.max(0, c + L);
      P((W) => W ? { ...W, currentX: k } : null);
    }, [N, g]), G = T((D) => {
      const w = H.current;
      if (!w || !l) {
        P(null);
        return;
      }
      const L = D.clientX - w.startX, c = Math.round(L / g);
      if (c !== 0) {
        const k = $(w.originalDate, c), W = n.find((C) => C.id === w.milestoneId);
        W && l({
          ...W,
          date: k
        });
      }
      P(null);
    }, [l, g, n]);
    le(() => {
      if (S)
        return window.addEventListener("mousemove", z), window.addEventListener("mouseup", G), () => {
          window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", G);
        };
    }, [S, z, G]);
    const q = T((D) => {
      d && d(D);
    }, [d]), Me = T((D, w, L, c) => {
      if (!o) return;
      D.preventDefault(), D.stopPropagation();
      const k = {
        taskId: w,
        dragType: L,
        startX: D.clientX,
        originalStartDate: c.startDate,
        originalEndDate: c.endDate,
        originalIndirectWorkDaysPre: c.indirectWorkDaysPre,
        originalNetWorkDays: c.netWorkDays,
        originalIndirectWorkDaysPost: c.indirectWorkDaysPost,
        currentStartDate: c.startDate,
        currentEndDate: c.endDate,
        currentIndirectWorkDaysPre: c.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: c.indirectWorkDaysPost
      };
      E(k), B.current = k;
    }, [o]), K = T((D) => {
      const w = B.current;
      if (!w || !o) return;
      const L = D.clientX - w.startX, c = Math.round(L / g);
      let k = w.originalStartDate, W = w.originalEndDate, C = w.originalIndirectWorkDaysPre, me = w.originalIndirectWorkDaysPost;
      if (w.dragType === "move")
        k = $(w.originalStartDate, c), W = $(w.originalEndDate, c);
      else if (w.dragType === "resize-pre") {
        C = Math.max(0, w.originalIndirectWorkDaysPre - c);
        const oe = $(w.originalStartDate, w.originalIndirectWorkDaysPre);
        k = $(oe, -C), W = w.originalEndDate;
      } else if (w.dragType === "resize-post") {
        me = Math.max(0, w.originalIndirectWorkDaysPost + c);
        const oe = $(w.originalEndDate, -w.originalIndirectWorkDaysPost);
        W = $(oe, me), k = w.originalStartDate;
      }
      E((oe) => oe ? {
        ...oe,
        currentStartDate: k,
        currentEndDate: W,
        currentIndirectWorkDaysPre: C,
        currentIndirectWorkDaysPost: me
      } : null);
    }, [o, g]), se = T(() => {
      const D = B.current;
      if (!D || !o) {
        E(null), B.current = null;
        return;
      }
      const w = D.currentStartDate.getTime() !== D.originalStartDate.getTime() || D.currentEndDate.getTime() !== D.originalEndDate.getTime(), L = D.currentIndirectWorkDaysPre !== D.originalIndirectWorkDaysPre || D.currentIndirectWorkDaysPost !== D.originalIndirectWorkDaysPost;
      (w || L) && o({
        taskId: D.taskId,
        dragType: D.dragType,
        newStartDate: D.currentStartDate,
        newEndDate: D.currentEndDate,
        newIndirectWorkDaysPre: D.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: D.currentIndirectWorkDaysPost
      }), E(null), B.current = null;
    }, [o]);
    le(() => {
      if (x)
        return window.addEventListener("mousemove", K), window.addEventListener("mouseup", se), document.body.style.cursor = x.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", K), window.removeEventListener("mouseup", se), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [x, K, se]);
    const ae = T((D) => x && x.taskId === D ? {
      startDate: x.currentStartDate,
      endDate: x.currentEndDate,
      indirectWorkDaysPre: x.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: x.currentIndirectWorkDaysPost
    } : null, [x]);
    return /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsxs("div", { ref: p, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ a.jsx(
        Kr,
        {
          minDate: N,
          totalDays: I,
          pixelsPerDay: g,
          zoomLevel: r,
          holidays: s,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ a.jsxs("svg", { width: Q, height: ne, className: "block bg-white", children: [
        /* @__PURE__ */ a.jsx(es, {}),
        /* @__PURE__ */ a.jsx(
          Qr,
          {
            minDate: N,
            totalDays: I,
            chartHeight: ne,
            pixelsPerDay: g,
            holidays: s,
            calendarSettings: i,
            zoomLevel: r
          }
        ),
        (f ? m : e.map((D, w) => ({ index: w, start: w * ye, size: ye, key: w }))).map((D) => {
          const w = e[D.index];
          if (!w || w.type !== "GROUP") return null;
          const L = D.start + we;
          return /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 0,
              y: L,
              width: Q,
              height: ye,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${D.key}`
          );
        }),
        Array.from({ length: I }, (D, w) => {
          const L = (w + 1) * g, c = $(N, w), k = yt(c);
          let W = !1, C = "#f0f0f0";
          return r === "DAY" ? (W = !0, C = k === 0 ? "#e0e0e0" : "#f0f0f0") : r === "WEEK" ? (W = k === 0, C = "#e5e7eb") : r === "MONTH" && (W = k === 0, C = "#f0f0f0"), W ? /* @__PURE__ */ a.jsx(
            "line",
            {
              x1: L,
              y1: 0,
              x2: L,
              y2: ne,
              stroke: C,
              strokeWidth: 1
            },
            `vline-${w}`
          ) : null;
        }),
        (f ? m : e.map((D, w) => ({ index: w, start: w * ye, size: ye, key: w }))).map((D) => /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: D.start + ye + we,
            x2: Q,
            y2: D.start + ye + we,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${D.key}`
        )),
        /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: Q, height: we, fill: "transparent" }),
        ie.map((D) => {
          const w = (S == null ? void 0 : S.milestoneId) === D.milestone.id;
          return /* @__PURE__ */ a.jsx(
            Jr,
            {
              milestone: D.milestone,
              x: D.x,
              labelLevel: D.labelLevel,
              isDragging: w,
              dragX: w ? S == null ? void 0 : S.currentX : void 0,
              onMouseDown: l ? re : void 0,
              onDoubleClick: d ? q : void 0
            },
            D.milestone.id
          );
        }),
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: we,
            x2: Q,
            y2: we,
            stroke: Te.grid,
            strokeWidth: 1
          }
        ),
        (f ? m : e.map((D, w) => ({ index: w, start: w * ye, size: ye, key: w }))).map((D) => {
          const w = e[D.index];
          if (!w) return null;
          const L = D.start + (ye - de) / 2 + we;
          return /* @__PURE__ */ a.jsx(
            Zr,
            {
              task: w,
              y: L,
              minDate: N,
              pixelsPerDay: g,
              isMasterView: y,
              isDraggable: !y && !!o,
              dragInfo: ae(w.id),
              onDragStart: Me
            },
            D.key
          );
        })
      ] })
    ] }) });
  }
);
gn.displayName = "GanttTimeline";
const ts = ({
  milestone: e,
  isOpen: n,
  onClose: t,
  onSave: r
}) => {
  const [s, i] = V(""), [o, l] = V(""), [d, m] = V(""), u = ue(null);
  le(() => {
    e && n && (i(e.name), l(e.description || ""), m(xe(e.date, "yyyy-MM-dd")), setTimeout(() => {
      var y, f;
      (y = u.current) == null || y.focus(), (f = u.current) == null || f.select();
    }, 100));
  }, [e, n]), le(() => {
    const y = (f) => {
      f.key === "Escape" && n && t();
    };
    return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [n, t]);
  const p = () => {
    if (!e || !s.trim()) return;
    const y = {
      ...e,
      name: s.trim(),
      description: o.trim() || void 0,
      date: new Date(d)
    };
    r(y), t();
  }, g = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), p());
  };
  return !n || !e ? null : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "w-full max-w-md rounded-lg bg-white shadow-xl",
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ a.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: "마일스톤 설정" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: t,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ a.jsx(Et, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx($r, { size: 14 }),
                "마일스톤 이름"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: u,
                  type: "text",
                  value: s,
                  onChange: (y) => i(y.target.value),
                  onKeyDown: g,
                  placeholder: "마일스톤 이름을 입력하세요",
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Ir, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "date",
                  value: d,
                  onChange: (y) => m(y.target.value),
                  onKeyDown: g,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Fr, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: o,
                  onChange: (y) => l(y.target.value),
                  placeholder: "마일스톤에 대한 설명을 입력하세요",
                  rows: 3,
                  className: "w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-2 border-t border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: p,
                disabled: !s.trim(),
                className: "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                children: "저장"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, Bt = (e) => {
  let n;
  const t = /* @__PURE__ */ new Set(), r = (m, u) => {
    const p = typeof m == "function" ? m(n) : m;
    if (!Object.is(p, n)) {
      const g = n;
      n = u ?? (typeof p != "object" || p === null) ? p : Object.assign({}, n, p), t.forEach((y) => y(n, g));
    }
  }, s = () => n, l = { setState: r, getState: s, getInitialState: () => d, subscribe: (m) => (t.add(m), () => t.delete(m)) }, d = n = e(r, s, l);
  return l;
}, ns = (e) => e ? Bt(e) : Bt, rs = (e) => e;
function ss(e, n = rs) {
  const t = Oe.useSyncExternalStore(
    e.subscribe,
    Oe.useCallback(() => n(e.getState()), [e, n]),
    Oe.useCallback(() => n(e.getInitialState()), [e, n])
  );
  return Oe.useDebugValue(t), t;
}
const qt = (e) => {
  const n = ns(e), t = (r) => ss(n, r);
  return Object.assign(t, n), t;
}, as = (e) => e ? qt(e) : qt, Kt = (e) => Symbol.iterator in e, Qt = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Ut = (e, n) => {
  const t = e instanceof Map ? e : new Map(e.entries()), r = n instanceof Map ? n : new Map(n.entries());
  if (t.size !== r.size)
    return !1;
  for (const [s, i] of t)
    if (!r.has(s) || !Object.is(i, r.get(s)))
      return !1;
  return !0;
}, is = (e, n) => {
  const t = e[Symbol.iterator](), r = n[Symbol.iterator]();
  let s = t.next(), i = r.next();
  for (; !s.done && !i.done; ) {
    if (!Object.is(s.value, i.value))
      return !1;
    s = t.next(), i = r.next();
  }
  return !!s.done && !!i.done;
};
function os(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) ? !1 : Kt(e) && Kt(n) ? Qt(e) && Qt(n) ? Ut(e, n) : is(e, n) : Ut(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  );
}
function Xe(e) {
  const n = Oe.useRef(void 0);
  return (t) => {
    const r = e(t);
    return os(n.current, r) ? n.current : n.current = r;
  };
}
const Ve = as((e, n) => ({
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
  sidebarWidth: Ee.SIDEBAR_WIDTH,
  // Drag State
  isDragging: !1,
  dragType: null,
  dragTaskId: null,
  // ====================================
  // View Actions
  // ====================================
  setViewMode: (t, r) => {
    e({
      viewMode: t,
      activeCPId: r ?? null,
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
    const { expandedTaskIds: r } = n(), s = new Set(r);
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
    const r = Math.max(
      Ee.SIDEBAR_MIN_WIDTH,
      Math.min(t, Ee.SIDEBAR_MAX_WIDTH)
    );
    e({ sidebarWidth: r });
  },
  // ====================================
  // Drag Actions
  // ====================================
  startDrag: (t, r) => {
    e({
      isDragging: !0,
      dragType: t,
      dragTaskId: r
    });
  },
  endDrag: () => {
    e({
      isDragging: !1,
      dragType: null,
      dragTaskId: null
    });
  }
})), ls = () => Ve(
  Xe((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), cs = () => Ve(
  Xe((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), Rs = () => Ve(
  Xe((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), ds = () => Ve(
  Xe((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), us = () => Ve(
  Xe((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), As = () => Ve(
  Xe((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function $e(e, n, t) {
  let r = t.initialDeps ?? [], s;
  function i() {
    var o, l, d, m;
    let u;
    t.key && ((o = t.debug) != null && o.call(t)) && (u = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((f, x) => r[x] !== f)))
      return s;
    r = p;
    let y;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (y = Date.now()), s = n(...p), t.key && ((d = t.debug) != null && d.call(t))) {
      const f = Math.round((Date.now() - u) * 100) / 100, x = Math.round((Date.now() - y) * 100) / 100, E = x / 16, S = (P, H) => {
        for (P = String(P); P.length < H; )
          P = " " + P;
        return P;
      };
      console.info(
        `%c⏱ ${S(x, 5)} /${S(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * E, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (m = t == null ? void 0 : t.onChange) == null || m.call(t, s), s;
  }
  return i.updateDeps = (o) => {
    r = o;
  }, i;
}
function Jt(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const hs = (e, n) => Math.abs(e - n) < 1.01, fs = (e, n, t) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, s), t);
  };
}, Zt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, ms = (e) => e, gs = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = n; s <= t; s++)
    r.push(s);
  return r;
}, ys = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: l, height: d } = o;
    n({ width: Math.round(l), height: Math.round(d) });
  };
  if (s(Zt(t)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((o) => {
    const l = () => {
      const d = o[0];
      if (d != null && d.borderBoxSize) {
        const m = d.borderBoxSize[0];
        if (m) {
          s({ width: m.inlineSize, height: m.blockSize });
          return;
        }
      }
      s(Zt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, en = {
  passive: !0
}, tn = typeof window > "u" ? !0 : "onscrollend" in window, xs = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && tn ? () => {
  } : fs(
    r,
    () => {
      n(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (u) => () => {
    const { horizontal: p, isRtl: g } = e.options;
    s = p ? t.scrollLeft * (g && -1 || 1) : t.scrollTop, i(), n(s, u);
  }, l = o(!0), d = o(!1);
  d(), t.addEventListener("scroll", l, en);
  const m = e.options.useScrollendEvent && tn;
  return m && t.addEventListener("scrollend", d, en), () => {
    t.removeEventListener("scroll", l), m && t.removeEventListener("scrollend", d);
  };
}, bs = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ps = (e, {
  adjustments: n = 0,
  behavior: t
}, r) => {
  var s, i;
  const o = e + n;
  (i = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: t
  });
};
class ws {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const r = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const o = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = r()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([r, s]) => {
        typeof s > "u" && delete t[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ms,
        rangeExtractor: gs,
        onChange: () => {
        },
        measureElement: bs,
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
      var r, s;
      (s = (r = this.options).onChange) == null || s.call(r, this, t);
    }, this.maybeNotify = $e(
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
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, r) => {
      const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const l = t[o];
        if (s.has(l.lane))
          continue;
        const d = i.get(
          l.lane
        );
        if (d == null || l.end > d.end ? i.set(l.lane, l) : l.end < d.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, l) => o.end === l.end ? o.index - l.index : o.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = $e(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, r, s, i, o) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: i,
        enabled: o
      }),
      {
        key: !1
      }
    ), this.getMeasurements = $e(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: r, scrollMargin: s, getItemKey: i, enabled: o }, l) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const m = this.measurementsCache.slice(0, d);
        for (let u = d; u < t; u++) {
          const p = i(u), g = this.options.lanes === 1 ? m[u - 1] : this.getFurthestMeasurement(m, u), y = g ? g.end + this.options.gap : r + s, f = l.get(p), x = typeof f == "number" ? f : this.options.estimateSize(u), E = y + x, S = g ? g.lane : u % this.options.lanes;
          m[u] = {
            index: u,
            start: y,
            size: x,
            end: E,
            key: p,
            lane: S
          };
        }
        return this.measurementsCache = m, m;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = $e(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, r, s, i) => this.range = t.length > 0 && r > 0 ? vs({
        measurements: t,
        outerSize: r,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = $e(
      () => {
        let t = null, r = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, r = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          r
        ];
      },
      (t, r, s, i, o) => i === null || o === null ? [] : t({
        startIndex: i,
        endIndex: o,
        overscan: r,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const r = this.options.indexAttribute, s = t.getAttribute(r);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, r) => {
      const s = this.indexFromElement(t), i = this.measurementsCache[s];
      if (!i)
        return;
      const o = i.key, l = this.elementsCache.get(o);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(o, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, r, this));
    }, this.resizeItem = (t, r) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const i = this.itemSizeCache.get(s.key) ?? s.size, o = r - i;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, o, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, s) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = $e(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, r) => {
        const s = [];
        for (let i = 0, o = t.length; i < o; i++) {
          const l = t[i], d = r[l];
          s.push(d);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Jt(
          r[yn(
            0,
            r.length - 1,
            (s) => Jt(r[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, r, s = 0) => {
      const i = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = t >= o + i ? "end" : "start"), r === "center" ? t += (s - i) / 2 : r === "end" && (t -= i);
      const l = this.getTotalSize() + this.options.scrollMargin - i;
      return Math.max(Math.min(l, t), 0);
    }, this.getOffsetForIndex = (t, r = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const i = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (s.end >= o + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (s.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      const l = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, r, s.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: r = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, r), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (t, { align: r = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let i = 0;
      const o = 10, l = (m) => {
        if (!this.targetWindow) return;
        const u = this.getOffsetForIndex(t, m);
        if (!u) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [p, g] = u;
        this._scrollToOffset(p, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const y = this.getScrollOffset(), f = this.getOffsetForIndex(t, g);
          if (!f) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          hs(f[0], y) || d(g);
        });
      }, d = (m) => {
        this.targetWindow && (i++, i < o ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", i, o), this.targetWindow.requestAnimationFrame(() => l(m))) : console.warn(
          `Failed to scroll to index ${t} after ${o} attempts.`
        ));
      };
      l(r);
    }, this.scrollBy = (t, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var t;
      const r = this.getMeasurements();
      let s;
      if (r.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = r[r.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && i.some((l) => l === null); ) {
          const l = r[o];
          i[l.lane] === null && (i[l.lane] = l.end), o--;
        }
        s = Math.max(...i.filter((l) => l !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: r,
      behavior: s
    }) => {
      this.options.scrollToFn(t, { behavior: s, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const yn = (e, n, t, r) => {
  for (; e <= n; ) {
    const s = (e + n) / 2 | 0, i = t(s);
    if (i < r)
      e = s + 1;
    else if (i > r)
      n = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function vs({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: r
}) {
  const s = e.length - 1, i = (d) => e[d].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = yn(
    0,
    s,
    i,
    t
  ), l = o;
  if (r === 1)
    for (; l < s && e[l].end < t + n; )
      l++;
  else if (r > 1) {
    const d = Array(r).fill(0);
    for (; l < s && d.some((u) => u < t + n); ) {
      const u = e[l];
      d[u.lane] = u.end, l++;
    }
    const m = Array(r).fill(t + n);
    for (; o >= 0 && m.some((u) => u >= t); ) {
      const u = e[o];
      m[u.lane] = u.start, o--;
    }
    o = Math.max(0, o - o % r), l = Math.min(s, l + (r - 1 - l % r));
  }
  return { startIndex: o, endIndex: l };
}
const nn = typeof document < "u" ? ht.useLayoutEffect : ht.useEffect;
function Ds(e) {
  const n = ht.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? xn(n) : n(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = ht.useState(
    () => new ws(t)
  );
  return r.setOptions(t), nn(() => r._didMount(), []), nn(() => r._willUpdate()), r;
}
function ks(e) {
  return Ds({
    observeElementRect: ys,
    observeElementOffset: xs,
    scrollToFn: ps,
    ...e
  });
}
const { ROW_HEIGHT: Es } = Ee;
function js({
  containerRef: e,
  count: n,
  rowHeight: t = Es,
  overscan: r = 5
}) {
  const s = ks({
    count: n,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: r
  }), i = s.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: ve(() => i.map((l) => ({
      index: l.index,
      start: l.start,
      size: l.size,
      key: l.index
      // index는 항상 number이므로 타입 안전
    })), [i]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: s.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: s
  };
}
const Ms = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function zs({
  tasks: e,
  milestones: n = [],
  holidays: t = [],
  calendarSettings: r = Ms,
  initialView: s = "MASTER",
  initialZoomLevel: i = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: o,
  onTaskUpdate: l,
  onTaskCreate: d,
  onTaskReorder: m,
  onTaskGroup: u,
  onTaskUngroup: p,
  onViewChange: g,
  onMilestoneUpdate: y,
  onSave: f,
  onReset: x,
  hasUnsavedChanges: E,
  saveStatus: S,
  className: P,
  style: H
}) {
  const { viewMode: N, activeCPId: I, zoomLevel: ie } = ls(), { setViewMode: Q, setZoomLevel: ne } = cs(), { sidebarWidth: B, setSidebarWidth: re } = us(), { expandedTaskIds: z, toggleTask: G, expandAll: q } = ds(), Me = ue(null), K = ue(null), se = ue(null), ae = ue(!1), D = ue(!1), [w, L] = V(!1), [c, k] = V(!1), [W, C] = V(!1), me = T(() => {
    k(!0);
  }, []), oe = T(() => {
    k(!1);
  }, []), Y = T(() => {
    C(!0);
  }, []), he = T(() => {
    C(!1);
  }, []), [fe, De] = V(null), [Ie, X] = V(!1), rt = T((j) => {
    De(j), X(!0);
  }, []), be = T(() => {
    X(!1), De(null);
  }, []), xt = T((j) => {
    y && y(j), be();
  }, [y, be]), Re = ue(!1), Ae = ve(() => e.map((j) => j.id), [e]);
  le(() => {
    Re.current || (Re.current = !0, Q(s), ne(i), o && o.length > 0 ? q(o) : Ae.length > 0 && q(Ae));
  }, [Ae, o, s, i, Q, ne, q]);
  const st = ue(/* @__PURE__ */ new Set());
  le(() => {
    const j = new Set(e.map((R) => R.id)), O = st.current, A = [];
    e.forEach((R) => {
      R.type === "GROUP" && !O.has(R.id) && A.push(R.id);
    }), A.length > 0 && q(A), st.current = j;
  }, [e, q]);
  const ke = ve(() => {
    if (N === "MASTER") {
      const j = [], O = (A, R = 0) => {
        e.forEach((J) => {
          J.wbsLevel === 1 && J.parentId === A && (A === null || z.has(A)) && (j.push(J), J.type === "GROUP" && O(J.id, R + 1));
        });
      };
      return O(null), j;
    } else {
      const j = [], O = (A) => {
        e.forEach((R) => {
          R.wbsLevel === 2 && R.parentId === A && (A === I || z.has(A)) && (j.push(R), R.type === "GROUP" && O(R.id));
        });
      };
      return O(I), j;
    }
  }, [e, N, I, z]), { virtualRows: Be, totalHeight: qe } = js({
    containerRef: se,
    count: ke.length
  });
  le(() => {
    const j = K.current, O = se.current;
    if (!j || !O) return;
    const A = () => {
      ae.current || (ae.current = !0, O.scrollTop = j.scrollTop, requestAnimationFrame(() => {
        ae.current = !1;
      }));
    }, R = () => {
      ae.current || (ae.current = !0, j.scrollTop = O.scrollTop, requestAnimationFrame(() => {
        ae.current = !1;
      }));
    };
    return j.addEventListener("scroll", A), O.addEventListener("scroll", R), () => {
      j.removeEventListener("scroll", A), O.removeEventListener("scroll", R);
    };
  }, []);
  const [ze, at] = V(null), it = T((j) => {
    if (j.detail >= 2) return;
    j.preventDefault(), D.current = !0, L(!0);
    const O = j.clientX, A = B, R = (b) => {
      if (!D.current) return;
      const h = b.clientX - O;
      re(A + h);
    }, J = () => {
      D.current = !1, L(!1), document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", J);
    };
    document.addEventListener("mousemove", R), document.addEventListener("mouseup", J);
  }, [B, re]), ot = T(() => {
    re(ze !== null ? ze : Ee.SIDEBAR_WIDTH);
  }, [ze, re]), Le = T((j, O) => {
    Q(j, O), g == null || g(j, O);
  }, [Q, g]), Fe = T((j) => {
    const O = se.current;
    if (!O) return;
    const A = mt[ie].pixelsPerDay, { minDate: R } = mn(e, n, 60), J = et(j, R, A);
    O.scrollLeft = Math.max(0, J - 50);
  }, [ie, e, n]), Se = T(() => {
    if (N === "MASTER") {
      const j = ke.filter((O) => O.type === "CP");
      if (j.length > 0) {
        const O = j.reduce(
          (R, J) => R.startDate < J.startDate ? R : J
        ), A = new Date(O.startDate);
        A.setDate(A.getDate() - 5), Fe(A);
      }
    } else if (N === "DETAIL" && I) {
      const j = e.filter((O) => O.parentId === I);
      if (j.length > 0) {
        const O = j.reduce(
          (R, J) => R.startDate < J.startDate ? R : J
        ), A = new Date(O.startDate);
        A.setDate(A.getDate() - 5), Fe(A);
      }
    }
  }, [N, I, e, ke, Fe]), lt = T((j) => {
    N === "MASTER" && j.type === "CP" && Le("DETAIL", j.id);
  }, [N, Le]);
  le(() => {
    if (N === "DETAIL" && I) {
      const j = setTimeout(() => {
        Se();
      }, 100);
      return () => clearTimeout(j);
    }
  }, [N, I, Se]);
  const ct = T(async (j) => {
    if (l)
      try {
        const O = e.find((R) => R.id === j.taskId);
        if (!O || !O.task) return;
        const A = {
          ...O,
          startDate: j.newStartDate,
          endDate: j.newEndDate,
          task: {
            ...O.task,
            indirectWorkDaysPre: j.newIndirectWorkDaysPre,
            indirectWorkDaysPost: j.newIndirectWorkDaysPost
          }
        };
        await l(A);
      } catch (O) {
        console.error("Failed to update task:", O);
      }
  }, [e, l]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: Me,
      className: `flex h-full w-full flex-col bg-gray-50 ${P || ""}`,
      style: H,
      children: [
        /* @__PURE__ */ a.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-3 shrink-0", children: N === "DETAIL" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => Le("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            d && !c && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: me,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            d && !W && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Y,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            W && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Se,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: N === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (N === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((j) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => ne(j),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${ie === j ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: mt[j].label
              },
              j
            )) }),
            /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              xe(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            f && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: f,
                disabled: !E || S === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${E ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: S === "saving" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                  /* @__PURE__ */ a.jsxs("svg", { className: "h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ a.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ a.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                  ] }),
                  "저장 중..."
                ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                  /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" }) }),
                  "저장"
                ] })
              }
            ),
            x && /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: x,
                className: "flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300",
                children: [
                  /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                  "초기화"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: B },
              children: /* @__PURE__ */ a.jsx(
                fn,
                {
                  ref: K,
                  tasks: ke,
                  allTasks: e,
                  viewMode: N,
                  expandedIds: z,
                  onToggle: G,
                  onTaskClick: lt,
                  onTaskUpdate: l,
                  onTaskCreate: d,
                  onTaskReorder: m,
                  onTaskGroup: u,
                  onTaskUngroup: p,
                  activeCPId: I,
                  virtualRows: Be,
                  totalHeight: qe,
                  onTotalWidthChange: at,
                  isAddingTask: c,
                  onCancelAddTask: oe,
                  isAddingCP: W,
                  onCancelAddCP: he
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${w ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: it,
              onDoubleClick: ot,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsx(
            gn,
            {
              ref: se,
              tasks: ke,
              milestones: n,
              viewMode: N,
              zoomLevel: ie,
              holidays: t,
              calendarSettings: r,
              onTaskUpdate: l,
              onBarDrag: ct,
              onMilestoneUpdate: y,
              onMilestoneDoubleClick: rt,
              virtualRows: Be,
              totalHeight: qe
            }
          ) }),
          w && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ a.jsx(
          ts,
          {
            milestone: fe,
            isOpen: Ie,
            onClose: be,
            onSave: xt
          }
        )
      ]
    }
  );
}
export {
  Te as GANTT_COLORS,
  Ee as GANTT_LAYOUT,
  zs as GanttChart,
  fn as GanttSidebar,
  gn as GanttTimeline,
  mt as ZOOM_CONFIG,
  Vt as addCalendarDays,
  Br as addWorkingDays,
  mn as calculateDateRange,
  Os as calculateDualCalendarDates,
  et as dateToX,
  Ps as getAnchorDate,
  _s as getDateRangeWidth,
  Is as getPixelsPerDay,
  Ge as isHoliday,
  Ws as isWeekend,
  Ts as subtractWorkingDays,
  As as useGanttDrag,
  ds as useGanttExpansion,
  Rs as useGanttSelection,
  us as useGanttSidebar,
  Ve as useGanttStore,
  cs as useGanttViewActions,
  ls as useGanttViewState,
  js as useGanttVirtualization,
  Cs as xToDate
};
