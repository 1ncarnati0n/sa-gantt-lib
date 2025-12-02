"use client";
import * as Fe from "react";
import ke, { forwardRef as He, createElement as qe, useState as ie, useRef as me, useMemo as ge, useCallback as z, useEffect as ze } from "react";
import { flushSync as $t } from "react-dom";
var Xe = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Gt() {
  if (et) return Me;
  et = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var o in s)
        o !== "key" && (a[o] = s[o]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Me.Fragment = n, Me.jsx = t, Me.jsxs = t, Me;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function Vt() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === $ ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case W:
          return "Fragment";
        case D:
          return "Profiler";
        case R:
          return "StrictMode";
        case B:
          return "Suspense";
        case T:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case b:
            return "Portal";
          case V:
            return l.displayName || "Context";
          case j:
            return (l._context.displayName || "Context") + ".Consumer";
          case q:
            var k = l.render;
            return l = l.displayName, l || (l = k.displayName || k.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case S:
            return k = l.displayName || null, k !== null ? k : e(l.type) || "Memo";
          case _:
            k = l._payload, l = l._init;
            try {
              return e(l(k));
            } catch {
            }
        }
      return null;
    }
    function n(l) {
      return "" + l;
    }
    function t(l) {
      try {
        n(l);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var C = k.error, A = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return C.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), n(l);
      }
    }
    function r(l) {
      if (l === W) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === _)
        return "<...>";
      try {
        var k = e(l);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var l = Y.A;
      return l === null ? null : l.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(l) {
      if (H.call(l, "key")) {
        var k = Object.getOwnPropertyDescriptor(l, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function o(l, k) {
      function C() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: C,
        configurable: !0
      });
    }
    function h() {
      var l = e(this.type);
      return se[l] || (se[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function u(l, k, C, A, w, M) {
      var O = C.ref;
      return l = {
        $$typeof: x,
        type: l,
        key: k,
        props: C,
        _owner: A
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, k, C, A, w, M) {
      var O = k.children;
      if (O !== void 0)
        if (A)
          if (K(O)) {
            for (A = 0; A < O.length; A++)
              p(O[A]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(O);
      if (H.call(k, "key")) {
        O = e(l);
        var G = Object.keys(k).filter(function(ye) {
          return ye !== "key";
        });
        A = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", ne[O + A] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          O,
          G,
          O
        ), ne[O + A] = !0);
      }
      if (O = null, C !== void 0 && (t(C), O = "" + C), i(k) && (t(k.key), O = "" + k.key), "key" in k) {
        C = {};
        for (var Z in k)
          Z !== "key" && (C[Z] = k[Z]);
      } else C = k;
      return O && o(
        C,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), u(
        l,
        O,
        C,
        s(),
        w,
        M
      );
    }
    function p(l) {
      y(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === _ && (l._payload.status === "fulfilled" ? y(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function y(l) {
      return typeof l == "object" && l !== null && l.$$typeof === x;
    }
    var d = ke, x = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), V = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), Y = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, K = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var ce, se = {}, J = d.react_stack_bottom_frame.bind(
      d,
      a
    )(), le = te(r(a)), ne = {};
    Oe.Fragment = W, Oe.jsx = function(l, k, C) {
      var A = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        l,
        k,
        C,
        !1,
        A ? Error("react-stack-top-frame") : J,
        A ? te(r(l)) : le
      );
    }, Oe.jsxs = function(l, k, C) {
      var A = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        l,
        k,
        C,
        !0,
        A ? Error("react-stack-top-frame") : J,
        A ? te(r(l)) : le
      );
    };
  }()), Oe;
}
process.env.NODE_ENV === "production" ? Xe.exports = Gt() : Xe.exports = Vt();
var c = Xe.exports;
const St = 6048e5, qt = 864e5, nt = Symbol.for("constructDateFrom");
function ue(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && nt in e ? e[nt](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function X(e, n) {
  return ue(n || e, e);
}
function L(e, n, t) {
  const r = X(e, t == null ? void 0 : t.in);
  return isNaN(n) ? ue(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function Wt(e, n) {
  return X(e, n == null ? void 0 : n.in).getDay() === 6;
}
function Mt(e, n) {
  return X(e, n == null ? void 0 : n.in).getDay() === 0;
}
let Xt = {};
function _e() {
  return Xt;
}
function pe(e, n) {
  var o, h, u, f;
  const t = _e(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((f = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = X(e, n == null ? void 0 : n.in), a = s.getDay(), i = (a < r ? 7 : 0) + a - r;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function Le(e, n) {
  return pe(e, { ...n, weekStartsOn: 1 });
}
function Ot(e, n) {
  const t = X(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = ue(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Le(s), i = ue(t, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const o = Le(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function rt(e) {
  const n = X(e), t = new Date(
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
function Ie(e, ...n) {
  const t = ue.bind(
    null,
    e || n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function Pe(e, n) {
  const t = X(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Nt(e, n, t) {
  const [r, s] = Ie(
    t == null ? void 0 : t.in,
    e,
    n
  ), a = Pe(r), i = Pe(s), o = +a - rt(a), h = +i - rt(i);
  return Math.round((o - h) / qt);
}
function Bt(e, n) {
  const t = Ot(e, n), r = ue(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Le(r);
}
function Ut(e, n, t) {
  const [r, s] = Ie(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Pe(r) == +Pe(s);
}
function Qt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Kt(e) {
  return !(!Qt(e) && typeof e != "number" || isNaN(+X(e)));
}
function Be(e, n, t) {
  const [r, s] = Ie(
    t == null ? void 0 : t.in,
    e,
    n
  ), a = st(r, s), i = Math.abs(
    Nt(r, s)
  );
  r.setDate(r.getDate() - a * i);
  const o = +(st(r, s) === -a), h = a * (i - o);
  return h === 0 ? 0 : h;
}
function st(e, n) {
  const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Jt(e, n) {
  const t = X(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Zt(e, n) {
  const t = X(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const en = {
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
}, tn = (e, n, t) => {
  let r;
  const s = en[e];
  return typeof s == "string" ? r = s : n === 1 ? r = s.one : r = s.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ge(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const nn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, sn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, an = {
  date: Ge({
    formats: nn,
    defaultWidth: "full"
  }),
  time: Ge({
    formats: rn,
    defaultWidth: "full"
  }),
  dateTime: Ge({
    formats: sn,
    defaultWidth: "full"
  })
}, on = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, cn = (e, n, t, r) => on[e];
function Ne(e) {
  return (n, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : i;
      s = e.formattingValues[o] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[o] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(n) : n;
    return s[a];
  };
}
const ln = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, dn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, un = {
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
}, hn = {
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
}, fn = {
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
}, mn = {
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
}, gn = (e, n) => {
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
}, yn = {
  ordinalNumber: gn,
  era: Ne({
    values: ln,
    defaultWidth: "wide"
  }),
  quarter: Ne({
    values: dn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ne({
    values: un,
    defaultWidth: "wide"
  }),
  day: Ne({
    values: hn,
    defaultWidth: "wide"
  }),
  dayPeriod: Ne({
    values: fn,
    defaultWidth: "wide",
    formattingValues: mn,
    defaultFormattingWidth: "wide"
  })
};
function je(e) {
  return (n, t = {}) => {
    const r = t.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(s);
    if (!a)
      return null;
    const i = a[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(o) ? xn(o, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      bn(o, (p) => p.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(h) : h, u = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(u)
    ) : u;
    const f = n.slice(i.length);
    return { value: u, rest: f };
  };
}
function bn(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function xn(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function pn(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const s = r[0], a = n.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const o = n.slice(s.length);
    return { value: i, rest: o };
  };
}
const wn = /^(\d+)(th|st|nd|rd)?/i, vn = /\d+/i, Dn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kn = {
  any: [/^b/i, /^(a|c)/i]
}, En = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Wn = {
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
}, Mn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, On = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Nn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jn = {
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
}, Pn = {
  ordinalNumber: pn({
    matchPattern: wn,
    parsePattern: vn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: je({
    matchPatterns: Dn,
    defaultMatchWidth: "wide",
    parsePatterns: kn,
    defaultParseWidth: "any"
  }),
  quarter: je({
    matchPatterns: En,
    defaultMatchWidth: "wide",
    parsePatterns: Tn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: je({
    matchPatterns: Sn,
    defaultMatchWidth: "wide",
    parsePatterns: Wn,
    defaultParseWidth: "any"
  }),
  day: je({
    matchPatterns: Mn,
    defaultMatchWidth: "wide",
    parsePatterns: On,
    defaultParseWidth: "any"
  }),
  dayPeriod: je({
    matchPatterns: Nn,
    defaultMatchWidth: "any",
    parsePatterns: jn,
    defaultParseWidth: "any"
  })
}, _n = {
  code: "en-US",
  formatDistance: tn,
  formatLong: an,
  formatRelative: cn,
  localize: yn,
  match: Pn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function In(e, n) {
  const t = X(e, n == null ? void 0 : n.in);
  return Nt(t, Zt(t)) + 1;
}
function Rn(e, n) {
  const t = X(e, n == null ? void 0 : n.in), r = +Le(t) - +Bt(t);
  return Math.round(r / St) + 1;
}
function jt(e, n) {
  var f, p, y, d;
  const t = X(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = _e(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((d = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = ue((n == null ? void 0 : n.in) || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const o = pe(i, n), h = ue((n == null ? void 0 : n.in) || e, 0);
  h.setFullYear(r, 0, a), h.setHours(0, 0, 0, 0);
  const u = pe(h, n);
  return +t >= +o ? r + 1 : +t >= +u ? r : r - 1;
}
function Cn(e, n) {
  var o, h, u, f;
  const t = _e(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : h.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = jt(e, n), a = ue((n == null ? void 0 : n.in) || e, 0);
  return a.setFullYear(s, 0, r), a.setHours(0, 0, 0, 0), pe(a, n);
}
function An(e, n) {
  const t = X(e, n == null ? void 0 : n.in), r = +pe(t, n) - +Cn(t, n);
  return Math.round(r / St) + 1;
}
function I(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const he = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return I(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : I(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return I(e.getDate(), n.length);
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
    return I(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return I(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return I(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return I(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), s = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return I(s, n.length);
  }
}, ve = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, at = {
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
    return he.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const s = jt(e, r), a = s > 0 ? s : 1 - s;
    if (n === "YY") {
      const i = a % 100;
      return I(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : I(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Ot(e);
    return I(t, n.length);
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
    return I(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return I(r, 2);
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
        return I(r, 2);
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
        return he.M(e, n);
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
        return I(r + 1, 2);
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
    const s = An(e, r);
    return n === "wo" ? t.ordinalNumber(s, { unit: "week" }) : I(s, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = Rn(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : I(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : he.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = In(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : I(r, n.length);
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
    const s = e.getDay(), a = (s - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(a);
      case "ee":
        return I(a, 2);
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
  c: function(e, n, t, r) {
    const s = e.getDay(), a = (s - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(a);
      case "cc":
        return I(a, n.length);
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
  i: function(e, n, t) {
    const r = e.getDay(), s = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(s);
      case "ii":
        return I(s, n.length);
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
    switch (r === 12 ? s = ve.noon : r === 0 ? s = ve.midnight : s = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? s = ve.evening : r >= 12 ? s = ve.afternoon : r >= 4 ? s = ve.morning : s = ve.night, n) {
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
    return he.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : he.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : I(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : I(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : he.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : he.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return he.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return ot(r);
      case "XXXX":
      case "XX":
        return be(r);
      case "XXXXX":
      case "XXX":
      default:
        return be(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return ot(r);
      case "xxxx":
      case "xx":
        return be(r);
      case "xxxxx":
      case "xxx":
      default:
        return be(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + it(r, ":");
      case "OOOO":
      default:
        return "GMT" + be(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + it(r, ":");
      case "zzzz":
      default:
        return "GMT" + be(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(+e / 1e3);
    return I(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return I(+e, n.length);
  }
};
function it(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(s) : t + String(s) + n + I(a, 2);
}
function ot(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + I(Math.abs(e) / 60, 2) : be(e, n);
}
function be(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = I(Math.trunc(r / 60), 2), a = I(r % 60, 2);
  return t + s + n + a;
}
const ct = (e, n) => {
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
}, Pt = (e, n) => {
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
}, zn = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], s = t[2];
  if (!s)
    return ct(e, n);
  let a;
  switch (r) {
    case "P":
      a = n.dateTime({ width: "short" });
      break;
    case "PP":
      a = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = n.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ct(r, n)).replace("{{time}}", Pt(s, n));
}, Fn = {
  p: Pt,
  P: zn
}, Ln = /^D+$/, Yn = /^Y+$/, Hn = ["D", "DD", "YY", "YYYY"];
function $n(e) {
  return Ln.test(e);
}
function Gn(e) {
  return Yn.test(e);
}
function Vn(e, n, t) {
  const r = qn(e, n, t);
  if (console.warn(r), Hn.includes(e)) throw new RangeError(r);
}
function qn(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Un = /^'([^]*?)'?$/, Qn = /''/g, Kn = /[a-zA-Z]/;
function oe(e, n, t) {
  var f, p, y, d;
  const r = _e(), s = r.locale ?? _n, a = r.firstWeekContainsDate ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = r.weekStartsOn ?? ((d = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = X(e, t == null ? void 0 : t.in);
  if (!Kt(o))
    throw new RangeError("Invalid time value");
  let h = n.match(Bn).map((x) => {
    const b = x[0];
    if (b === "p" || b === "P") {
      const W = Fn[b];
      return W(x, s.formatLong);
    }
    return x;
  }).join("").match(Xn).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const b = x[0];
    if (b === "'")
      return { isToken: !1, value: Jn(x) };
    if (at[b])
      return { isToken: !0, value: x };
    if (b.match(Kn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: x };
  });
  s.localize.preprocessor && (h = s.localize.preprocessor(o, h));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: s
  };
  return h.map((x) => {
    if (!x.isToken) return x.value;
    const b = x.value;
    (Gn(b) || $n(b)) && Vn(b, n, String(e));
    const W = at[b[0]];
    return W(o, b, s.localize, u);
  }).join("");
}
function Jn(e) {
  const n = e.match(Un);
  return n ? n[1].replace(Qn, "'") : e;
}
function Zn(e, n) {
  return X(e, n == null ? void 0 : n.in).getDate();
}
function $e(e, n) {
  return X(e, n == null ? void 0 : n.in).getDay();
}
function lt(e, n) {
  var h, u, f, p;
  const t = _e(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((p = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = Zn(X(e, n == null ? void 0 : n.in));
  if (isNaN(s)) return NaN;
  const a = $e(Jt(e, n));
  let i = r - a;
  i <= 0 && (i += 7);
  const o = s - i;
  return Math.ceil(o / 7) + 1;
}
function Ve(e, n) {
  return X(e, n == null ? void 0 : n.in).getFullYear();
}
function er(e, n, t) {
  const [r, s] = Ie(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +pe(r, t) == +pe(s, t);
}
function tr(e, n, t) {
  const [r, s] = Ie(
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
const nr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), dt = (e) => {
  const n = rr(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, _t = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), sr = (e) => {
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
var ar = {
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
const ir = He(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: a,
    iconNode: i,
    ...o
  }, h) => qe(
    "svg",
    {
      ref: h,
      ...ar,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: _t("lucide", s),
      ...!a && !sr(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...i.map(([u, f]) => qe(u, f)),
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
const Te = (e, n) => {
  const t = He(
    ({ className: r, ...s }, a) => qe(ir, {
      ref: a,
      iconNode: n,
      className: _t(
        `lucide-${nr(dt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return t.displayName = dt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], cr = Te("check", or);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], dr = Te("chevron-down", lr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], hr = Te("chevron-right", ur);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], mr = Te("grip-vertical", fr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], yr = Te("plus", gr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xr = Te("x", br), de = {
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
}, xe = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, Ye = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, { ROW_HEIGHT: fe, HEADER_HEIGHT: ut, MILESTONE_LANE_HEIGHT: ht } = xe, ft = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 }
], mt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "앞간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "뒤간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Ae = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, It = He(
  ({ tasks: e, allTasks: n, viewMode: t, expandedIds: r, onToggle: s, onTaskClick: a, onBackToMaster: i, onTaskUpdate: o, onTaskCreate: h, onTaskReorder: u, onScrollToFirstTask: f, activeCPId: p, virtualRows: y, totalHeight: d }, x) => {
    const b = y && y.length > 0, [W, R] = ie(!1), [D, j] = ie(Ae), V = me(null), [q, B] = ie(null), [T, S] = ie(null), [_, N] = ie(null), [$, Y] = ie(
      ft.map((g) => g.width)
    ), [H, K] = ie(
      mt.map((g) => g.width)
    ), [te, ce] = ie(null), se = me(!1), J = t === "MASTER" ? ft : mt, le = t === "MASTER" ? $ : H, ne = t === "MASTER" ? Y : K, l = ge(
      () => J.map((g, m) => ({
        ...g,
        width: le[m] ?? g.width
      })),
      [J, le]
    ), k = l.reduce((g, m) => g + m.width, 0), C = z((g, m) => {
      if (g.detail >= 2) return;
      g.preventDefault(), g.stopPropagation(), se.current = !0, ce(m);
      const E = g.clientX, F = le[m], v = J[m].minWidth, U = (ee) => {
        if (!se.current) return;
        const Re = ee.clientX - E, Ke = Math.max(v, F + Re);
        ne((Je) => {
          const Ce = [...Je];
          return Ce[m] = Ke, Ce;
        });
      }, P = () => {
        se.current = !1, ce(null), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", U), document.addEventListener("mouseup", P);
    }, [le, J, ne]), A = z((g, m = 12, E = "normal") => {
      const v = document.createElement("canvas").getContext("2d");
      return v ? (v.font = `${E} ${m}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, v.measureText(g).width) : 0;
    }, []), w = z((g) => {
      const m = J[g].minWidth, E = g === 0, F = E ? 48 : 20, v = J[g].label;
      let U = A(v, 12, "500") + 16;
      return e.forEach((P) => {
        let ee = "", Re = 0;
        if (t === "MASTER") {
          const Ze = P.type === "GROUP";
          switch (E && P.parentId && (Re = 20), g) {
            case 0:
              ee = P.name;
              break;
            case 1:
              ee = Ze ? "-" : P.cp ? `${P.cp.workDaysTotal + P.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              ee = Ze ? "-" : P.cp ? `${P.cp.workDaysTotal}일` : "-";
              break;
          }
        } else
          switch (g) {
            case 0:
              ee = P.name;
              break;
            case 1:
              ee = P.task ? String(P.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              ee = P.task ? String(P.task.netWorkDays) : "-";
              break;
            case 3:
              ee = P.task ? String(P.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              ee = oe(P.startDate, "yyyy-MM-dd");
              break;
            case 5:
              ee = oe(P.endDate, "yyyy-MM-dd");
              break;
          }
        const Ce = A(ee, E ? 14 : 12, E ? "500" : "normal") + F + Re;
        U = Math.max(U, Ce);
      }), Math.max(m, Math.ceil(U));
    }, [e, t, J, A]), M = z((g, m) => {
      g.preventDefault(), g.stopPropagation(), se.current = !1, ce(null);
      const E = w(m);
      ne((F) => {
        const v = [...F];
        return v[m] = E, v;
      });
    }, [w, ne]), O = z((g, m, E) => {
      if (!g.task || !o) return;
      const F = {
        ...g,
        task: {
          ...g.task,
          [m]: E
        }
      };
      o(F);
    }, [o]), G = z(() => {
      R(!0), j(Ae), setTimeout(() => {
        var g;
        (g = V.current) == null || g.focus();
      }, 0);
    }, []), Z = z(() => {
      R(!1), j(Ae);
    }, []), ye = z(() => {
      if (!D.name.trim() || !h || !p) return;
      const g = e[e.length - 1], m = g ? L(g.endDate, 1) : /* @__PURE__ */ new Date(), E = D.indirectWorkDaysPre + D.netWorkDays + D.indirectWorkDaysPost, F = L(m, Math.max(E - 1, 0)), v = {
        id: `task-${Date.now()}`,
        // 임시 ID (서버에서 재할당 가능)
        parentId: p,
        wbsLevel: 2,
        type: "TASK",
        name: D.name.trim(),
        startDate: m,
        endDate: F,
        task: {
          netWorkDays: D.netWorkDays,
          indirectWorkDaysPre: D.indirectWorkDaysPre,
          indirectWorkDaysPost: D.indirectWorkDaysPost
        },
        dependencies: []
      };
      h(v), R(!1), j(Ae);
    }, [D, h, p, e]), we = z((g) => {
      g.key === "Enter" ? (g.preventDefault(), ye()) : g.key === "Escape" && (g.preventDefault(), Z());
    }, [ye, Z]), zt = z((g, m) => {
      g.dataTransfer.effectAllowed = "move", g.dataTransfer.setData("text/plain", m), B(m);
      const E = document.createElement("div");
      E.style.opacity = "0", document.body.appendChild(E), g.dataTransfer.setDragImage(E, 0, 0), setTimeout(() => document.body.removeChild(E), 0);
    }, []), Ft = z((g, m) => {
      if (g.preventDefault(), g.dataTransfer.dropEffect = "move", m === q) return;
      const E = g.currentTarget.getBoundingClientRect(), F = E.top + E.height / 2, v = g.clientY < F ? "before" : "after";
      S(m), N(v);
    }, [q]), Lt = z(() => {
      S(null), N(null);
    }, []), Yt = z((g, m) => {
      if (g.preventDefault(), !q || !u || q === m) {
        B(null), S(null), N(null);
        return;
      }
      const E = e.findIndex((v) => v.id === m), F = _ === "after" ? E + 1 : E;
      u(q, F), B(null), S(null), N(null);
    }, [q, _, u, e]), Ht = z(() => {
      B(null), S(null), N(null);
    }, []), Qe = () => /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: l.map((g, m) => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: g.width },
        children: [
          g.label,
          m < l.length - 1 && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${te === m ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (E) => C(E, m),
              onDoubleClick: (E) => M(E, m),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          m < l.length - 1 && /* @__PURE__ */ c.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      g.id
    )) });
    return t === "MASTER" ? /* @__PURE__ */ c.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: ut },
          children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex flex-1 items-center px-4 font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
            Qe()
          ]
        }
      ),
      te !== null && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ c.jsxs("div", { ref: x, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "border-b border-gray-200 bg-gray-50/50",
            style: { height: ht, minWidth: k }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            style: {
              minWidth: k,
              height: b ? d : void 0,
              position: "relative"
            },
            children: (b ? y : e.map((g, m) => ({ index: m, start: m * fe, size: fe, key: m }))).map((g) => {
              const m = e[g.index];
              if (!m) return null;
              const E = m.type === "GROUP", F = E && n.some((P) => P.parentId === m.id), v = r.has(m.id), U = m.parentId ? 20 : 0;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `box-border flex items-center border-b border-gray-100 transition-all duration-150 ${E ? "bg-gray-50" : "cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] hover:pl-1"}`,
                  style: {
                    height: fe,
                    ...b ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${g.start}px)`
                    } : {}
                  },
                  onDoubleClick: () => !E && a(m),
                  title: E ? void 0 : "더블클릭하여 상세 공정표 보기",
                  children: [
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                        style: { width: l[0].width, paddingLeft: U + 8 },
                        children: [
                          F ? /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: (P) => {
                                P.stopPropagation(), s(m.id);
                              },
                              className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                              children: v ? /* @__PURE__ */ c.jsx(dr, { size: 14 }) : /* @__PURE__ */ c.jsx(hr, { size: 14 })
                            }
                          ) : /* @__PURE__ */ c.jsx("div", { className: "w-6 shrink-0" }),
                          /* @__PURE__ */ c.jsx(
                            "span",
                            {
                              className: `truncate text-sm ${E ? "font-bold text-gray-700" : "font-medium text-gray-800"}`,
                              children: m.name
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                        style: { width: l[1].width },
                        children: E ? "-" : m.cp ? `${m.cp.workDaysTotal + m.cp.nonWorkDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center text-xs text-vermilion",
                        style: { width: l[2].width },
                        children: E ? "-" : m.cp ? `${m.cp.workDaysTotal}일` : "-"
                      }
                    )
                  ]
                },
                g.key
              );
            })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ c.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: ut },
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ c.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
                f && /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    onClick: f,
                    className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                    title: "첫 번째 작업으로 스크롤",
                    children: "◀ 첫 작업"
                  }
                ),
                h && !W && /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    onClick: G,
                    className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                    title: "새 공정 추가",
                    children: [
                      /* @__PURE__ */ c.jsx(yr, { size: 12 }),
                      "추가"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  onClick: i,
                  className: "rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300",
                  children: "← 공구 공정표로"
                }
              )
            ] }),
            Qe()
          ]
        }
      ),
      te !== null && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ c.jsxs("div", { ref: x, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "border-b border-gray-200 bg-gray-50/50",
            style: { height: ht, minWidth: k }
          }
        ),
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            style: {
              minWidth: k,
              height: b ? d : void 0,
              position: "relative"
            },
            children: [
              (b ? y : e.map((g, m) => ({ index: m, start: m * fe, size: fe, key: m }))).map((g) => {
                const m = e[g.index];
                if (!m) return null;
                const E = q === m.id, F = T === m.id;
                return /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    draggable: !!u,
                    onDragStart: (v) => zt(v, m.id),
                    onDragOver: (v) => Ft(v, m.id),
                    onDragLeave: Lt,
                    onDrop: (v) => Yt(v, m.id),
                    onDragEnd: Ht,
                    className: `box-border flex items-center border-b transition-colors ${E ? "opacity-50 bg-blue-50" : F ? _ === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: fe,
                      ...b ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${g.start}px)`
                      } : {}
                    },
                    children: [
                      u && /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ c.jsx(mr, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: u ? l[0].width - 24 : l[0].width },
                          children: /* @__PURE__ */ c.jsx("span", { className: "truncate text-sm text-gray-700", children: m.name })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: l[1].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: m.task.indirectWorkDaysPre,
                              onChange: (v) => {
                                const U = v.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                O(m, "indirectWorkDaysPre", P);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "앞 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: l[2].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: m.task.netWorkDays,
                              onChange: (v) => {
                                const U = v.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                O(m, "netWorkDays", P);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "순작업일"
                            }
                          ) : /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: l[3].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: m.task.indirectWorkDaysPost,
                              onChange: (v) => {
                                const U = v.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                O(m, "indirectWorkDaysPost", P);
                              },
                              onKeyDown: (v) => {
                                (v.key === "-" || v.key === "e" || v.key === "+" || v.key === ".") && v.preventDefault();
                              },
                              title: "뒤 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: l[4].width },
                          children: oe(m.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: l[5].width },
                          children: oe(m.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  g.key
                );
              }),
              W && /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
                  style: {
                    height: fe,
                    ...b ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${e.length * fe}px)`
                    } : {}
                  },
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
                        style: { width: l[0].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            ref: V,
                            type: "text",
                            placeholder: "공정명...",
                            className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.name,
                            onChange: (g) => j((m) => ({ ...m, name: g.target.value })),
                            onKeyDown: we
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: l[1].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.indirectWorkDaysPre,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(m) || 0;
                              j((F) => ({ ...F, indirectWorkDaysPre: E }));
                            },
                            onKeyDown: we,
                            title: "앞 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: l[2].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.netWorkDays,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(m) || 0;
                              j((F) => ({ ...F, netWorkDays: E }));
                            },
                            onKeyDown: we,
                            title: "순작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: l[3].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: D.indirectWorkDaysPost,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(m) || 0;
                              j((F) => ({ ...F, indirectWorkDaysPost: E }));
                            },
                            onKeyDown: we,
                            title: "뒤 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center gap-1 px-2",
                        style: { width: l[4].width + l[5].width },
                        children: [
                          /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: ye,
                              disabled: !D.name.trim(),
                              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                              title: "저장 (Enter)",
                              children: /* @__PURE__ */ c.jsx(cr, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: Z,
                              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                              title: "취소 (Esc)",
                              children: /* @__PURE__ */ c.jsx(xr, { size: 14 })
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
      ] })
    ] });
  }
);
It.displayName = "GanttSidebar";
const Ee = (e, n = [], t) => !!(!t.workOnSaturdays && Wt(e) || !t.workOnSundays && Mt(e) || !t.workOnHolidays && n.some((r) => Ut(r, e))), Zr = (e) => Wt(e) || Mt(e), pr = (e, n, t = [], r) => {
  let s = new Date(e), a = 0;
  if (n <= 0) return s;
  for (; Ee(s, t, r); )
    s = L(s, 1);
  for (; a < n; )
    Ee(s, t, r) || a++, a < n && (s = L(s, 1));
  return s;
}, es = (e, n, t = [], r) => {
  let s = new Date(e), a = 0;
  if (n <= 0) return s;
  for (; a < n; )
    s = L(s, -1), Ee(s, t, r) || a++;
  return s;
}, gt = (e, n) => n <= 0 ? e : L(e, n - 1), ts = (e, n = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: r, indirectWorkDaysPre: s, indirectWorkDaysPost: a } = e.task, i = Pe(new Date(e.startDate));
  let o = i, h, u;
  s > 0 && (h = o, u = gt(o, s), o = L(u, 1));
  let f = o, p = f;
  if (r > 0) {
    for (; Ee(f, n, t); )
      f = L(f, 1);
    p = pr(f, r, n, t), o = L(p, 1);
  } else s === 0 && (f = i, p = i);
  let y, d;
  return a > 0 && (y = o, d = gt(o, a)), {
    startDate: h || f,
    endDate: d || p,
    netWorkStartDate: f,
    netWorkEndDate: p,
    indirectPreStartDate: h,
    indirectPreEndDate: u,
    indirectPostStartDate: y,
    indirectPostEndDate: d
  };
}, ns = (e, n, t) => {
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
}, Ue = (e, n, t) => Be(e, n) * t, rs = (e, n, t) => {
  const r = Math.round(e / t);
  return L(n, r);
}, ss = (e, n, t) => (Be(n, e) + 1) * t, as = (e) => Ye[e].pixelsPerDay, Rt = (e, n = [], t = 5) => {
  const r = [
    ...e.flatMap((u) => [u.startDate, u.endDate].filter(Boolean)),
    ...n.map((u) => u.date)
  ];
  if (r.length === 0) {
    const u = /* @__PURE__ */ new Date();
    return {
      minDate: u,
      maxDate: L(u, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...r.map((u) => u.getTime()))), a = new Date(Math.max(...r.map((u) => u.getTime()))), i = L(s, -t), o = L(a, t), h = Be(o, i);
  return {
    minDate: i,
    maxDate: o,
    totalDays: h
  };
}, { ROW_HEIGHT: re, HEADER_HEIGHT: wr, MILESTONE_LANE_HEIGHT: ae, BAR_HEIGHT: Q } = xe, vr = ({
  minDate: e,
  totalDays: n,
  pixelsPerDay: t,
  zoomLevel: r,
  holidays: s,
  calendarSettings: a
}) => {
  const i = Array.from({ length: n }, (y, d) => L(e, d)), o = n * t, h = ge(() => {
    const y = [];
    let d = Ve(i[0]), x = 0;
    return i.forEach((b) => {
      Ve(b) !== d ? (y.push({ label: `${d}년`, days: x }), d = Ve(b), x = 1) : x++;
    }), y.push({ label: `${d}년`, days: x }), y;
  }, [i]), u = ge(() => {
    const y = [];
    let d = i[0], x = 0;
    return i.forEach((b) => {
      tr(b, d) ? x++ : (y.push({ label: oe(d, "M월"), days: x }), d = b, x = 1);
    }), y.push({ label: oe(d, "M월"), days: x }), y;
  }, [i]), f = ge(() => {
    if (r === "MONTH")
      return null;
    if (r === "DAY")
      return /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: i.map((y, d) => {
        const x = $e(y), b = Ee(y, s, a), W = x === 0, R = x === 6;
        let D = "text-gray-600";
        W && (D = "text-red-500"), R && (D = "text-blue-500"), b && !W && !R && (D = "text-red-500");
        let j = "";
        return W || b && !R ? j = "bg-red-50/50" : R && (j = "bg-blue-50/50"), /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${j}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ c.jsx("span", { className: `text-[10px] leading-none ${D}`, children: oe(y, "d") }),
              /* @__PURE__ */ c.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${D}`, children: ["일", "월", "화", "수", "목", "금", "토"][x] })
            ]
          },
          d
        );
      }) });
    {
      const y = [];
      let d = i[0], x = 0;
      return i.forEach((b) => {
        er(b, d, { weekStartsOn: 0 }) ? x++ : (y.push({ label: `${lt(d, { weekStartsOn: 0 })}주`, days: x }), d = b, x = 1);
      }), y.push({ label: `${lt(d, { weekStartsOn: 0 })}주`, days: x }), /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: y.map((b, W) => /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: b.days * t },
          children: b.label
        },
        W
      )) });
    }
  }, [i, r, t, s, a, o]), p = r === "MONTH";
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: wr, minWidth: o },
      children: p ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: o },
            children: h.map((y, d) => /* @__PURE__ */ c.jsx(
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
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: u.map((y, d) => /* @__PURE__ */ c.jsx(
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
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: o },
            children: h.map((y, d) => /* @__PURE__ */ c.jsx(
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
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: u.map((y, d) => /* @__PURE__ */ c.jsx(
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
        f
      ] })
    }
  );
}, Dr = ({
  minDate: e,
  totalDays: n,
  chartHeight: t,
  pixelsPerDay: r,
  holidays: s,
  calendarSettings: a,
  zoomLevel: i
}) => {
  const o = ge(() => {
    if (i === "MONTH") return [];
    const h = [];
    for (let u = 0; u < n; u++) {
      const f = L(e, u), p = $e(f), y = p === 0, d = p === 6;
      if (Ee(f, s, a) || d) {
        const b = u * r;
        let W = "rgba(254, 242, 242, 0.5)";
        d && !y && (W = "rgba(239, 246, 255, 0.5)"), y && (W = "rgba(254, 242, 242, 0.5)"), h.push(
          /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: b,
              y: 0,
              width: r,
              height: t,
              fill: W,
              className: "pointer-events-none"
            },
            `weekend-${u}`
          )
        );
      }
    }
    return h;
  }, [e, n, t, r, s, a, i]);
  return /* @__PURE__ */ c.jsx("g", { children: o });
}, kr = ({ milestone: e, x: n }) => {
  const r = ae / 2;
  return /* @__PURE__ */ c.jsxs("g", { transform: `translate(${n}, ${r})`, className: "group cursor-pointer", children: [
    /* @__PURE__ */ c.jsx(
      "line",
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1e3,
        stroke: de.grid,
        strokeWidth: 2,
        strokeDasharray: "4, 4",
        className: "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
        fill: de.milestone,
        stroke: "white",
        strokeWidth: 1,
        className: "drop-shadow-sm transition-all duration-150 group-hover:scale-125 group-hover:fill-blue-600"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "text",
      {
        x: 8,
        y: 4,
        className: "select-none text-[11px] font-bold fill-gray-600 transition-colors group-hover:fill-blue-700",
        children: e.name
      }
    )
  ] });
}, Er = ({
  task: e,
  y: n,
  minDate: t,
  pixelsPerDay: r,
  isMasterView: s,
  isDraggable: a = !1,
  dragInfo: i,
  onDragStart: o
}) => {
  var d, x;
  if (e.type === "GROUP") return null;
  const h = 4, u = !!i, f = (i == null ? void 0 : i.startDate) || e.startDate, p = (i == null ? void 0 : i.endDate) || e.endDate, y = Ue(f, t, r);
  if (s) {
    const b = ((d = e.cp) == null ? void 0 : d.workDaysTotal) || 0, W = ((x = e.cp) == null ? void 0 : x.nonWorkDaysTotal) || 0;
    if (b + W === 0) return null;
    const D = b * r, j = W * r, V = D + j;
    return /* @__PURE__ */ c.jsxs("g", { transform: `translate(${y}, ${n})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ c.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: D,
          height: Q,
          fill: de.vermilion,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "rect",
        {
          x: D,
          y: 0,
          width: j,
          height: Q,
          fill: de.teal,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "text",
        {
          x: V + 8,
          y: Q / 2 + 4,
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: b, indirectWorkDaysPre: W, indirectWorkDaysPost: R } = e.task, D = (i == null ? void 0 : i.indirectWorkDaysPre) ?? W, j = (i == null ? void 0 : i.indirectWorkDaysPost) ?? R, V = D * r, q = b * r, B = j * r, T = V + q + B, S = 0, _ = V, N = V + q, $ = 8, Y = {
      startDate: f,
      endDate: p,
      indirectWorkDaysPre: D,
      netWorkDays: b,
      indirectWorkDaysPost: j
    };
    return /* @__PURE__ */ c.jsxs(
      "g",
      {
        transform: `translate(${y}, ${n})`,
        className: `group ${u ? "opacity-90" : ""}`,
        children: [
          a && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: V,
              y: 0,
              width: q,
              height: Q,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (H) => o == null ? void 0 : o(H, e.id, "move", Y)
            }
          ),
          D > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: S,
              y: 0,
              width: V,
              height: Q,
              fill: de.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          b > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: _,
              y: 0,
              width: q,
              height: Q,
              fill: de.red,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          j > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: N,
              y: 0,
              width: B,
              height: Q,
              fill: de.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          a && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: -$ / 2,
              y: 0,
              width: $,
              height: Q,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (H) => o == null ? void 0 : o(H, e.id, "resize-pre", Y),
              children: /* @__PURE__ */ c.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: T - $ / 2,
              y: 0,
              width: $,
              height: Q,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (H) => o == null ? void 0 : o(H, e.id, "resize-post", Y),
              children: /* @__PURE__ */ c.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
            /* @__PURE__ */ c.jsx(
              "rect",
              {
                x: 1,
                y: Q / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "rect",
              {
                x: T - 4,
                y: Q / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(
            "text",
            {
              x: T + 8,
              y: Q / 2 + 4,
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          u && /* @__PURE__ */ c.jsxs("g", { children: [
            /* @__PURE__ */ c.jsxs(
              "text",
              {
                x: T / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  oe(f, "MM/dd"),
                  " ~ ",
                  oe(p, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "text",
              {
                x: T / 2,
                y: Q + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  D,
                  "일 + 순",
                  b,
                  "일 + 뒤",
                  j,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, Tr = () => /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ c.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: de.dependency })
  }
) }), Ct = He(
  ({ tasks: e, milestones: n, viewMode: t, zoomLevel: r, holidays: s, calendarSettings: a, onBarDrag: i, virtualRows: o, totalHeight: h }, u) => {
    const f = Ye[r].pixelsPerDay, p = t === "MASTER", y = o && o.length > 0, [d, x] = ie(null), { minDate: b, totalDays: W } = ge(() => Rt(e, n, 60), [e, n]), R = W * f, D = Math.max(y ? (h || 0) + ae + 100 : e.length * re + ae + 100, 500), j = z((T, S, _, N) => {
      i && (T.preventDefault(), T.stopPropagation(), x({
        taskId: S,
        dragType: _,
        startX: T.clientX,
        originalStartDate: N.startDate,
        originalEndDate: N.endDate,
        originalIndirectWorkDaysPre: N.indirectWorkDaysPre,
        originalNetWorkDays: N.netWorkDays,
        originalIndirectWorkDaysPost: N.indirectWorkDaysPost,
        currentStartDate: N.startDate,
        currentEndDate: N.endDate,
        currentIndirectWorkDaysPre: N.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: N.indirectWorkDaysPost
      }));
    }, [i]), V = z((T) => {
      if (!d || !i) return;
      const S = T.clientX - d.startX, _ = Math.round(S / f);
      let N = d.originalStartDate, $ = d.originalEndDate, Y = d.originalIndirectWorkDaysPre, H = d.originalIndirectWorkDaysPost;
      if (d.dragType === "move")
        N = L(d.originalStartDate, _), $ = L(d.originalEndDate, _);
      else if (d.dragType === "resize-pre") {
        Y = Math.max(0, d.originalIndirectWorkDaysPre - _), N = L(d.originalStartDate, -(-_ + (Y - d.originalIndirectWorkDaysPre)));
        const K = L(d.originalStartDate, d.originalIndirectWorkDaysPre);
        N = L(K, -Y), $ = d.originalEndDate;
      } else if (d.dragType === "resize-post") {
        H = Math.max(0, d.originalIndirectWorkDaysPost + _);
        const K = L(d.originalEndDate, -d.originalIndirectWorkDaysPost);
        $ = L(K, H), N = d.originalStartDate;
      }
      x((K) => K ? {
        ...K,
        currentStartDate: N,
        currentEndDate: $,
        currentIndirectWorkDaysPre: Y,
        currentIndirectWorkDaysPost: H
      } : null);
    }, [d, i, f]), q = z(() => {
      if (!d || !i) {
        x(null);
        return;
      }
      const T = d.currentStartDate.getTime() !== d.originalStartDate.getTime() || d.currentEndDate.getTime() !== d.originalEndDate.getTime(), S = d.currentIndirectWorkDaysPre !== d.originalIndirectWorkDaysPre || d.currentIndirectWorkDaysPost !== d.originalIndirectWorkDaysPost;
      (T || S) && i({
        taskId: d.taskId,
        dragType: d.dragType,
        newStartDate: d.currentStartDate,
        newEndDate: d.currentEndDate,
        newIndirectWorkDaysPre: d.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: d.currentIndirectWorkDaysPost
      }), x(null);
    }, [d, i]);
    ze(() => {
      if (d)
        return window.addEventListener("mousemove", V), window.addEventListener("mouseup", q), document.body.style.cursor = d.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", q), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [d, V, q]);
    const B = z((T) => d && d.taskId === T ? {
      startDate: d.currentStartDate,
      endDate: d.currentEndDate,
      indirectWorkDaysPre: d.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: d.currentIndirectWorkDaysPost
    } : null, [d]);
    return /* @__PURE__ */ c.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ c.jsxs("div", { ref: u, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ c.jsx(
        vr,
        {
          minDate: b,
          totalDays: W,
          pixelsPerDay: f,
          zoomLevel: r,
          holidays: s,
          calendarSettings: a
        }
      ),
      /* @__PURE__ */ c.jsxs("svg", { width: R, height: D, className: "block bg-white", children: [
        /* @__PURE__ */ c.jsx(Tr, {}),
        /* @__PURE__ */ c.jsx(
          Dr,
          {
            minDate: b,
            totalDays: W,
            chartHeight: D,
            pixelsPerDay: f,
            holidays: s,
            calendarSettings: a,
            zoomLevel: r
          }
        ),
        /* @__PURE__ */ c.jsx("rect", { x: 0, y: 0, width: R, height: ae, fill: "transparent" }),
        n.map((T) => /* @__PURE__ */ c.jsx(
          kr,
          {
            milestone: T,
            x: Ue(T.date, b, f)
          },
          T.id
        )),
        /* @__PURE__ */ c.jsx(
          "line",
          {
            x1: 0,
            y1: ae,
            x2: R,
            y2: ae,
            stroke: de.grid,
            strokeWidth: 1
          }
        ),
        Array.from({ length: W }, (T, S) => {
          const _ = (S + 1) * f, N = L(b, S), $ = $e(N);
          let Y = !1, H = "#f0f0f0";
          return r === "DAY" ? (Y = !0, H = $ === 0 ? "#e0e0e0" : "#f0f0f0") : r === "WEEK" ? (Y = $ === 0, H = "#e5e7eb") : r === "MONTH" && (Y = $ === 0, H = "#f0f0f0"), Y ? /* @__PURE__ */ c.jsx(
            "line",
            {
              x1: _,
              y1: 0,
              x2: _,
              y2: D,
              stroke: H,
              strokeWidth: 1
            },
            `vline-${S}`
          ) : null;
        }),
        (y ? o : e.map((T, S) => ({ index: S, start: S * re, size: re, key: S }))).map((T) => /* @__PURE__ */ c.jsx(
          "line",
          {
            x1: 0,
            y1: T.start + re + ae,
            x2: R,
            y2: T.start + re + ae,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${T.key}`
        )),
        (y ? o : e.map((T, S) => ({ index: S, start: S * re, size: re, key: S }))).map((T) => {
          const S = e[T.index];
          if (!S || S.type !== "GROUP") return null;
          const _ = T.start + ae;
          return /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: 0,
              y: _,
              width: R,
              height: re,
              fill: "#f9fafb",
              className: "pointer-events-none"
            },
            `group-bg-${T.key}`
          );
        }),
        (y ? o : e.map((T, S) => ({ index: S, start: S * re, size: re, key: S }))).map((T) => {
          const S = e[T.index];
          if (!S) return null;
          const _ = T.start + (re - Q) / 2 + ae;
          return /* @__PURE__ */ c.jsx(
            Er,
            {
              task: S,
              y: _,
              minDate: b,
              pixelsPerDay: f,
              isMasterView: p,
              isDraggable: !p && !!i,
              dragInfo: B(S.id),
              onDragStart: j
            },
            T.key
          );
        })
      ] })
    ] }) });
  }
);
Ct.displayName = "GanttTimeline";
const yt = (e) => {
  let n;
  const t = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(n) : u;
    if (!Object.is(p, n)) {
      const y = n;
      n = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, n, p), t.forEach((d) => d(n, y));
    }
  }, s = () => n, o = { setState: r, getState: s, getInitialState: () => h, subscribe: (u) => (t.add(u), () => t.delete(u)) }, h = n = e(r, s, o);
  return o;
}, Sr = (e) => e ? yt(e) : yt, Wr = (e) => e;
function Mr(e, n = Wr) {
  const t = ke.useSyncExternalStore(
    e.subscribe,
    ke.useCallback(() => n(e.getState()), [e, n]),
    ke.useCallback(() => n(e.getInitialState()), [e, n])
  );
  return ke.useDebugValue(t), t;
}
const bt = (e) => {
  const n = Sr(e), t = (r) => Mr(n, r);
  return Object.assign(t, n), t;
}, Or = (e) => e ? bt(e) : bt, xt = (e) => Symbol.iterator in e, pt = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), wt = (e, n) => {
  const t = e instanceof Map ? e : new Map(e.entries()), r = n instanceof Map ? n : new Map(n.entries());
  if (t.size !== r.size)
    return !1;
  for (const [s, a] of t)
    if (!r.has(s) || !Object.is(a, r.get(s)))
      return !1;
  return !0;
}, Nr = (e, n) => {
  const t = e[Symbol.iterator](), r = n[Symbol.iterator]();
  let s = t.next(), a = r.next();
  for (; !s.done && !a.done; ) {
    if (!Object.is(s.value, a.value))
      return !1;
    s = t.next(), a = r.next();
  }
  return !!s.done && !!a.done;
};
function jr(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) ? !1 : xt(e) && xt(n) ? pt(e) && pt(n) ? wt(e, n) : Nr(e, n) : wt(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  );
}
function Se(e) {
  const n = ke.useRef(void 0);
  return (t) => {
    const r = e(t);
    return jr(n.current, r) ? n.current : n.current = r;
  };
}
const We = Or((e, n) => ({
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
  sidebarWidth: xe.SIDEBAR_WIDTH,
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
      xe.SIDEBAR_MIN_WIDTH,
      Math.min(t, xe.SIDEBAR_MAX_WIDTH)
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
})), Pr = () => We(
  Se((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), _r = () => We(
  Se((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), is = () => We(
  Se((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), Ir = () => We(
  Se((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Rr = () => We(
  Se((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), os = () => We(
  Se((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function De(e, n, t) {
  let r = t.initialDeps ?? [], s;
  function a() {
    var i, o, h, u;
    let f;
    t.key && ((i = t.debug) != null && i.call(t)) && (f = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((x, b) => r[b] !== x)))
      return s;
    r = p;
    let d;
    if (t.key && ((o = t.debug) != null && o.call(t)) && (d = Date.now()), s = n(...p), t.key && ((h = t.debug) != null && h.call(t))) {
      const x = Math.round((Date.now() - f) * 100) / 100, b = Math.round((Date.now() - d) * 100) / 100, W = b / 16, R = (D, j) => {
        for (D = String(D); D.length < j; )
          D = " " + D;
        return D;
      };
      console.info(
        `%c⏱ ${R(b, 5)} /${R(x, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * W, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (u = t == null ? void 0 : t.onChange) == null || u.call(t, s), s;
  }
  return a.updateDeps = (i) => {
    r = i;
  }, a;
}
function vt(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Cr = (e, n) => Math.abs(e - n) < 1.01, Ar = (e, n, t) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, s), t);
  };
}, Dt = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, zr = (e) => e, Fr = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = n; s <= t; s++)
    r.push(s);
  return r;
}, Lr = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (i) => {
    const { width: o, height: h } = i;
    n({ width: Math.round(o), height: Math.round(h) });
  };
  if (s(Dt(t)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((i) => {
    const o = () => {
      const h = i[0];
      if (h != null && h.borderBoxSize) {
        const u = h.borderBoxSize[0];
        if (u) {
          s({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      s(Dt(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, kt = {
  passive: !0
}, Et = typeof window > "u" ? !0 : "onscrollend" in window, Yr = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && Et ? () => {
  } : Ar(
    r,
    () => {
      n(s, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (f) => () => {
    const { horizontal: p, isRtl: y } = e.options;
    s = p ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, a(), n(s, f);
  }, o = i(!0), h = i(!1);
  h(), t.addEventListener("scroll", o, kt);
  const u = e.options.useScrollendEvent && Et;
  return u && t.addEventListener("scrollend", h, kt), () => {
    t.removeEventListener("scroll", o), u && t.removeEventListener("scrollend", h);
  };
}, Hr = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, $r = (e, {
  adjustments: n = 0,
  behavior: t
}, r) => {
  var s, a;
  const i = e + n;
  (a = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
    [r.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class Gr {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const r = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((a) => {
          const i = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = r()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(s);
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
        getItemKey: zr,
        rangeExtractor: Fr,
        onChange: () => {
        },
        measureElement: Hr,
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
    }, this.maybeNotify = De(
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
          this.options.observeElementOffset(this, (s, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = a, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, r) => {
      const s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let i = r - 1; i >= 0; i--) {
        const o = t[i];
        if (s.has(o.lane))
          continue;
        const h = a.get(
          o.lane
        );
        if (h == null || o.end > h.end ? a.set(o.lane, o) : o.end < h.end && s.set(o.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((i, o) => i.end === o.end ? i.index - o.index : i.end - o.end)[0] : void 0;
    }, this.getMeasurementOptions = De(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, r, s, a, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: a,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = De(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: r, scrollMargin: s, getItemKey: a, enabled: i }, o) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const h = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, h);
        for (let f = h; f < t; f++) {
          const p = a(f), y = this.options.lanes === 1 ? u[f - 1] : this.getFurthestMeasurement(u, f), d = y ? y.end + this.options.gap : r + s, x = o.get(p), b = typeof x == "number" ? x : this.options.estimateSize(f), W = d + b, R = y ? y.lane : f % this.options.lanes;
          u[f] = {
            index: f,
            start: d,
            size: b,
            end: W,
            key: p,
            lane: R
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = De(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, r, s, a) => this.range = t.length > 0 && r > 0 ? Vr({
        measurements: t,
        outerSize: r,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = De(
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
      (t, r, s, a, i) => a === null || i === null ? [] : t({
        startIndex: a,
        endIndex: i,
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
      const s = this.indexFromElement(t), a = this.measurementsCache[s];
      if (!a)
        return;
      const i = a.key, o = this.elementsCache.get(i);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, r, this));
    }, this.resizeItem = (t, r) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.itemSizeCache.get(s.key) ?? s.size, i = r - a;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
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
    }, this.getVirtualItems = De(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, r) => {
        const s = [];
        for (let a = 0, i = t.length; a < i; a++) {
          const o = t[a], h = r[o];
          s.push(h);
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
        return vt(
          r[At(
            0,
            r.length - 1,
            (s) => vt(r[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, r, s = 0) => {
      const a = this.getSize(), i = this.getScrollOffset();
      r === "auto" && (r = t >= i + a ? "end" : "start"), r === "center" ? t += (s - a) / 2 : r === "end" && (t -= a);
      const o = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(o, t), 0);
    }, this.getOffsetForIndex = (t, r = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.getSize(), i = this.getScrollOffset();
      if (r === "auto")
        if (s.end >= i + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (s.start <= i + this.options.scrollPaddingStart)
          r = "start";
        else
          return [i, r];
      const o = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, r, s.size),
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
      let a = 0;
      const i = 10, o = (u) => {
        if (!this.targetWindow) return;
        const f = this.getOffsetForIndex(t, u);
        if (!f) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [p, y] = f;
        this._scrollToOffset(p, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const d = this.getScrollOffset(), x = this.getOffsetForIndex(t, y);
          if (!x) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Cr(x[0], d) || h(y);
        });
      }, h = (u) => {
        this.targetWindow && (a++, a < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, i), this.targetWindow.requestAnimationFrame(() => o(u))) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
        ));
      };
      o(r);
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
        const a = Array(this.options.lanes).fill(null);
        let i = r.length - 1;
        for (; i >= 0 && a.some((o) => o === null); ) {
          const o = r[i];
          a[o.lane] === null && (a[o.lane] = o.end), i--;
        }
        s = Math.max(...a.filter((o) => o !== null));
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
const At = (e, n, t, r) => {
  for (; e <= n; ) {
    const s = (e + n) / 2 | 0, a = t(s);
    if (a < r)
      e = s + 1;
    else if (a > r)
      n = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function Vr({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: r
}) {
  const s = e.length - 1, a = (h) => e[h].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = At(
    0,
    s,
    a,
    t
  ), o = i;
  if (r === 1)
    for (; o < s && e[o].end < t + n; )
      o++;
  else if (r > 1) {
    const h = Array(r).fill(0);
    for (; o < s && h.some((f) => f < t + n); ) {
      const f = e[o];
      h[f.lane] = f.end, o++;
    }
    const u = Array(r).fill(t + n);
    for (; i >= 0 && u.some((f) => f >= t); ) {
      const f = e[i];
      u[f.lane] = f.start, i--;
    }
    i = Math.max(0, i - i % r), o = Math.min(s, o + (r - 1 - o % r));
  }
  return { startIndex: i, endIndex: o };
}
const Tt = typeof document < "u" ? Fe.useLayoutEffect : Fe.useEffect;
function qr(e) {
  const n = Fe.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, a) => {
      var i;
      a ? $t(n) : n(), (i = e.onChange) == null || i.call(e, s, a);
    }
  }, [r] = Fe.useState(
    () => new Gr(t)
  );
  return r.setOptions(t), Tt(() => r._didMount(), []), Tt(() => r._willUpdate()), r;
}
function Xr(e) {
  return qr({
    observeElementRect: Lr,
    observeElementOffset: Yr,
    scrollToFn: $r,
    ...e
  });
}
const { ROW_HEIGHT: Br } = xe;
function Ur({
  containerRef: e,
  count: n,
  rowHeight: t = Br,
  overscan: r = 5
}) {
  const s = Xr({
    count: n,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: r
  });
  return {
    /** 가상화된 행 목록 */
    virtualRows: ge(() => s.getVirtualItems().map((i) => ({
      index: i.index,
      start: i.start,
      size: i.size,
      key: i.index
      // index는 항상 number이므로 타입 안전
    })), [s.getVirtualItems()]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: s.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: s
  };
}
const Qr = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function cs({
  tasks: e,
  milestones: n = [],
  holidays: t = [],
  calendarSettings: r = Qr,
  initialView: s = "MASTER",
  initialZoomLevel: a = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: i,
  onTaskUpdate: o,
  onTaskCreate: h,
  onTaskReorder: u,
  onViewChange: f,
  className: p,
  style: y
}) {
  const { viewMode: d, activeCPId: x, zoomLevel: b } = Pr(), { setViewMode: W, setZoomLevel: R } = _r(), { sidebarWidth: D, setSidebarWidth: j } = Rr(), { expandedTaskIds: V, toggleTask: q, expandAll: B } = Ir(), T = me(null), S = me(null), _ = me(null), N = me(!1), $ = me(!1), [Y, H] = ie(!1), K = me(!1);
  ze(() => {
    K.current || (K.current = !0, W(s), R(a), i && i.length > 0 ? B(i) : e.length > 0 && B(e.map((w) => w.id)));
  }, [e.length]);
  const te = ge(() => {
    if (d === "MASTER") {
      const w = [];
      return e.forEach((M) => {
        (M.wbsLevel === 1 && !M.parentId || M.wbsLevel === 1 && M.parentId && V.has(M.parentId)) && w.push(M);
      }), w;
    } else
      return e.filter((w) => w.wbsLevel === 2 && w.parentId === x);
  }, [e, d, x, V]), { virtualRows: ce, totalHeight: se } = Ur({
    containerRef: _,
    count: te.length
  });
  ze(() => {
    const w = S.current, M = _.current;
    if (!w || !M) return;
    const O = () => {
      N.current || (N.current = !0, M.scrollTop = w.scrollTop, requestAnimationFrame(() => {
        N.current = !1;
      }));
    }, G = () => {
      N.current || (N.current = !0, w.scrollTop = M.scrollTop, requestAnimationFrame(() => {
        N.current = !1;
      }));
    };
    return w.addEventListener("scroll", O), M.addEventListener("scroll", G), () => {
      w.removeEventListener("scroll", O), M.removeEventListener("scroll", G);
    };
  }, []);
  const J = z((w) => {
    w.preventDefault(), $.current = !0, H(!0);
    const M = w.clientX, O = D, G = (ye) => {
      if (!$.current) return;
      const we = ye.clientX - M;
      j(O + we);
    }, Z = () => {
      $.current = !1, H(!1), document.removeEventListener("mousemove", G), document.removeEventListener("mouseup", Z);
    };
    document.addEventListener("mousemove", G), document.addEventListener("mouseup", Z);
  }, [D, j]), le = z(() => {
    j(xe.SIDEBAR_WIDTH);
  }, [j]), ne = z((w, M) => {
    W(w, M), f == null || f(w, M);
  }, [W, f]), l = z((w) => {
    const M = _.current;
    if (!M) return;
    const O = Ye[b].pixelsPerDay, { minDate: G } = Rt(e, n, 60), Z = Ue(w, G, O);
    M.scrollLeft = Math.max(0, Z - 50);
  }, [b, e, n]), k = z(() => {
    if (d !== "DETAIL" || !x) return;
    const w = e.filter((M) => M.parentId === x);
    if (w.length > 0) {
      const M = w.reduce(
        (O, G) => O.startDate < G.startDate ? O : G
      );
      l(M.startDate);
    }
  }, [d, x, e, l]), C = z((w) => {
    d === "MASTER" && w.type === "CP" && ne("DETAIL", w.id);
  }, [d, ne]);
  ze(() => {
    if (d === "DETAIL" && x) {
      const w = setTimeout(() => {
        k();
      }, 100);
      return () => clearTimeout(w);
    }
  }, [d, x]);
  const A = z((w) => {
    if (!o) return;
    const M = e.find((G) => G.id === w.taskId);
    if (!M || !M.task) return;
    const O = {
      ...M,
      startDate: w.newStartDate,
      endDate: w.newEndDate,
      task: {
        ...M.task,
        indirectWorkDaysPre: w.newIndirectWorkDaysPre,
        indirectWorkDaysPost: w.newIndirectWorkDaysPost
      }
    };
    o(O);
  }, [e, o]);
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: T,
      className: `flex h-full w-full flex-col bg-gray-50 ${p || ""}`,
      style: y,
      children: [
        /* @__PURE__ */ c.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ c.jsx("h1", { className: "flex items-center gap-2 text-xl font-extrabold text-gray-800", children: /* @__PURE__ */ c.jsxs("span", { children: [
            /* @__PURE__ */ c.jsx("span", { className: "text-teal", children: "건설" }),
            " ",
            /* @__PURE__ */ c.jsx("span", { className: "text-vermilion", children: "표준공정표" }),
            " 관리 시스템"
          ] }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (d === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((w) => /* @__PURE__ */ c.jsx(
              "button",
              {
                onClick: () => R(w),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${b === w ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Ye[w].label
              },
              w
            )) }),
            /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              oe(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: D },
              children: /* @__PURE__ */ c.jsx(
                It,
                {
                  ref: S,
                  tasks: te,
                  allTasks: e,
                  viewMode: d,
                  expandedIds: V,
                  onToggle: q,
                  onTaskClick: C,
                  onBackToMaster: () => ne("MASTER"),
                  onTaskUpdate: o,
                  onTaskCreate: h,
                  onTaskReorder: u,
                  onScrollToFirstTask: k,
                  activeCPId: x,
                  virtualRows: ce,
                  totalHeight: se
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${Y ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: J,
              onDoubleClick: le,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ c.jsx(
            Ct,
            {
              ref: _,
              tasks: te,
              milestones: n,
              viewMode: d,
              zoomLevel: b,
              holidays: t,
              calendarSettings: r,
              onTaskUpdate: o,
              onBarDrag: A,
              virtualRows: ce,
              totalHeight: se
            }
          ) }),
          Y && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] })
      ]
    }
  );
}
export {
  de as GANTT_COLORS,
  xe as GANTT_LAYOUT,
  cs as GanttChart,
  It as GanttSidebar,
  Ct as GanttTimeline,
  Ye as ZOOM_CONFIG,
  gt as addCalendarDays,
  pr as addWorkingDays,
  Rt as calculateDateRange,
  ts as calculateDualCalendarDates,
  Ue as dateToX,
  ns as getAnchorDate,
  ss as getDateRangeWidth,
  as as getPixelsPerDay,
  Ee as isHoliday,
  Zr as isWeekend,
  es as subtractWorkingDays,
  os as useGanttDrag,
  Ir as useGanttExpansion,
  is as useGanttSelection,
  Rr as useGanttSidebar,
  We as useGanttStore,
  _r as useGanttViewActions,
  Pr as useGanttViewState,
  Ur as useGanttVirtualization,
  rs as xToDate
};
