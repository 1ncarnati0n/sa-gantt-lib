"use client";
import * as gt from "react";
import Se, { forwardRef as bt, createElement as jt, useState as V, useRef as ie, useEffect as se, useCallback as W, useMemo as xe } from "react";
import on, { flushSync as vn } from "react-dom";
var Et = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function Dn() {
  if (St) return Je;
  St = 1;
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
  return Je.Fragment = n, Je.jsx = t, Je.jsxs = t, Je;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function kn() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === G ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case j:
          return "Fragment";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case A:
          return "Suspense";
        case C:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case x:
            return "Portal";
          case S:
            return u.displayName || "Context";
          case L:
            return (u._context.displayName || "Context") + ".Consumer";
          case Y:
            var E = u.render;
            return u = u.displayName, u || (u = E.displayName || E.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case R:
            return E = u.displayName || null, E !== null ? E : e(u.type) || "Memo";
          case $:
            E = u._payload, u = u._init;
            try {
              return e(u(E));
            } catch {
            }
        }
      return null;
    }
    function n(u) {
      return "" + u;
    }
    function t(u) {
      try {
        n(u);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var T = E.error, I = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return T.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), n(u);
      }
    }
    function r(u) {
      if (u === j) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === $)
        return "<...>";
      try {
        var E = e(u);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = K.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (F.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, E) {
      function T() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: T,
        configurable: !0
      });
    }
    function h() {
      var u = e(this.type);
      return Q[u] || (Q[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function m(u, E, T, I, oe, re) {
      var X = T.ref;
      return u = {
        $$typeof: g,
        type: u,
        key: E,
        props: T,
        _owner: I
      }, (X !== void 0 ? X : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: h
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
        value: oe
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function f(u, E, T, I, oe, re) {
      var X = E.children;
      if (X !== void 0)
        if (I)
          if (J(X)) {
            for (I = 0; I < X.length; I++)
              w(X[I]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(X);
      if (F.call(E, "key")) {
        X = e(u);
        var le = Object.keys(E).filter(function(ke) {
          return ke !== "key";
        });
        I = 0 < le.length ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}", z[X + I] || (le = 0 < le.length ? "{" + le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          X,
          le,
          X
        ), z[X + I] = !0);
      }
      if (X = null, T !== void 0 && (t(T), X = "" + T), o(E) && (t(E.key), X = "" + E.key), "key" in E) {
        T = {};
        for (var ye in E)
          ye !== "key" && (T[ye] = E[ye]);
      } else T = E;
      return X && l(
        T,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), m(
        u,
        X,
        T,
        s(),
        oe,
        re
      );
    }
    function w(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === $ && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === g;
    }
    var b = Se, g = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), S = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), K = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, J = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var ce, Q = {}, k = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), v = te(r(i)), z = {};
    Ue.Fragment = j, Ue.jsx = function(u, E, T) {
      var I = 1e4 > K.recentlyCreatedOwnerStacks++;
      return f(
        u,
        E,
        T,
        !1,
        I ? Error("react-stack-top-frame") : k,
        I ? te(r(u)) : v
      );
    }, Ue.jsxs = function(u, E, T) {
      var I = 1e4 > K.recentlyCreatedOwnerStacks++;
      return f(
        u,
        E,
        T,
        !0,
        I ? Error("react-stack-top-frame") : k,
        I ? te(r(u)) : v
      );
    };
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Et.exports = Dn() : Et.exports = kn();
var a = Et.exports;
const ln = 6048e5, jn = 864e5, Tt = Symbol.for("constructDateFrom");
function ve(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && Tt in e ? e[Tt](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ee(e, n) {
  return ve(n || e, e);
}
function B(e, n, t) {
  const r = ee(e, t == null ? void 0 : t.in);
  return isNaN(n) ? ve(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function cn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 6;
}
function dn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 0;
}
let En = {};
function rt() {
  return En;
}
function Pe(e, n) {
  var l, h, m, f;
  const t = rt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = ee(e, n == null ? void 0 : n.in), i = s.getDay(), o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function xt(e, n) {
  return Pe(e, { ...n, weekStartsOn: 1 });
}
function un(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = ve(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const i = xt(s), o = ve(t, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const l = xt(o);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function Ot(e) {
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
function st(e, ...n) {
  const t = ve.bind(
    null,
    e || n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function tt(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function hn(e, n, t) {
  const [r, s] = st(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = tt(r), o = tt(s), l = +i - Ot(i), h = +o - Ot(o);
  return Math.round((l - h) / jn);
}
function Nn(e, n) {
  const t = un(e, n), r = ve(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), xt(r);
}
function Mn(e, n, t) {
  const [r, s] = st(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +tt(r) == +tt(s);
}
function Sn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Wn(e) {
  return !(!Sn(e) && typeof e != "number" || isNaN(+ee(e)));
}
function Nt(e, n, t) {
  const [r, s] = st(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = Ct(r, s), o = Math.abs(
    hn(r, s)
  );
  r.setDate(r.getDate() - i * o);
  const l = +(Ct(r, s) === -i), h = i * (o - l);
  return h === 0 ? 0 : h;
}
function Ct(e, n) {
  const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Tn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function On(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Cn = {
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
}, Pn = (e, n, t) => {
  let r;
  const s = Cn[e];
  return typeof s == "string" ? r = s : n === 1 ? r = s.one : r = s.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Dt(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const _n = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Rn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, In = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, An = {
  date: Dt({
    formats: _n,
    defaultWidth: "full"
  }),
  time: Dt({
    formats: Rn,
    defaultWidth: "full"
  }),
  dateTime: Dt({
    formats: In,
    defaultWidth: "full"
  })
}, zn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ln = (e, n, t, r) => zn[e];
function Ze(e) {
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
const Fn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yn = {
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
}, $n = {
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
}, Gn = {
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
}, Xn = {
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
}, Vn = (e, n) => {
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
}, Bn = {
  ordinalNumber: Vn,
  era: Ze({
    values: Fn,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: Hn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ze({
    values: Yn,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: $n,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: Gn,
    defaultWidth: "wide",
    formattingValues: Xn,
    defaultFormattingWidth: "wide"
  })
};
function et(e) {
  return (n, t = {}) => {
    const r = t.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(s);
    if (!i)
      return null;
    const o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(l) ? Kn(l, (w) => w.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      qn(l, (w) => w.test(o))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(h) : h, m = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(m)
    ) : m;
    const f = n.slice(o.length);
    return { value: m, rest: f };
  };
}
function qn(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Kn(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Qn(e) {
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
const Jn = /^(\d+)(th|st|nd|rd)?/i, Un = /\d+/i, Zn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, er = {
  any: [/^b/i, /^(a|c)/i]
}, tr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sr = {
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
}, ar = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ir = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, or = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, lr = {
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
}, cr = {
  ordinalNumber: Qn({
    matchPattern: Jn,
    parsePattern: Un,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: et({
    matchPatterns: Zn,
    defaultMatchWidth: "wide",
    parsePatterns: er,
    defaultParseWidth: "any"
  }),
  quarter: et({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: nr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: et({
    matchPatterns: rr,
    defaultMatchWidth: "wide",
    parsePatterns: sr,
    defaultParseWidth: "any"
  }),
  day: et({
    matchPatterns: ar,
    defaultMatchWidth: "wide",
    parsePatterns: ir,
    defaultParseWidth: "any"
  }),
  dayPeriod: et({
    matchPatterns: or,
    defaultMatchWidth: "any",
    parsePatterns: lr,
    defaultParseWidth: "any"
  })
}, dr = {
  code: "en-US",
  formatDistance: Pn,
  formatLong: An,
  formatRelative: Ln,
  localize: Bn,
  match: cr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ur(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return hn(t, On(t)) + 1;
}
function hr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +xt(t) - +Nn(t);
  return Math.round(r / ln) + 1;
}
function fn(e, n) {
  var f, w, y, b;
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = rt(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((w = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((b = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, o = ve((n == null ? void 0 : n.in) || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = Pe(o, n), h = ve((n == null ? void 0 : n.in) || e, 0);
  h.setFullYear(r, 0, i), h.setHours(0, 0, 0, 0);
  const m = Pe(h, n);
  return +t >= +l ? r + 1 : +t >= +m ? r : r - 1;
}
function fr(e, n) {
  var l, h, m, f;
  const t = rt(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = fn(e, n), i = ve((n == null ? void 0 : n.in) || e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), Pe(i, n);
}
function mr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +Pe(t, n) - +fr(t, n);
  return Math.round(r / ln) + 1;
}
function H(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const Ne = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return H(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : H(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return H(e.getDate(), n.length);
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
    return H(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return H(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return H(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return H(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), s = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return H(s, n.length);
  }
}, He = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Pt = {
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
    return Ne.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const s = fn(e, r), i = s > 0 ? s : 1 - s;
    if (n === "YY") {
      const o = i % 100;
      return H(o, 2);
    }
    return n === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : H(i, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = un(e);
    return H(t, n.length);
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
    return H(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return H(r, 2);
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
        return H(r, 2);
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
        return Ne.M(e, n);
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
        return H(r + 1, 2);
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
    const s = mr(e, r);
    return n === "wo" ? t.ordinalNumber(s, { unit: "week" }) : H(s, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = hr(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : H(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Ne.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = ur(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : H(r, n.length);
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
        return H(i, 2);
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
        return H(i, n.length);
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
        return H(s, n.length);
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
    return Ne.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Ne.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : H(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : H(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ne.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ne.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Ne.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return Rt(r);
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
        return Rt(r);
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
        return "GMT" + _t(r, ":");
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
        return "GMT" + _t(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ce(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(+e / 1e3);
    return H(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return H(+e, n.length);
  }
};
function _t(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(s) : t + String(s) + n + H(i, 2);
}
function Rt(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + H(Math.abs(e) / 60, 2) : Ce(e, n);
}
function Ce(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = H(Math.trunc(r / 60), 2), i = H(r % 60, 2);
  return t + s + n + i;
}
const It = (e, n) => {
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
}, mn = (e, n) => {
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
}, gr = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], s = t[2];
  if (!s)
    return It(e, n);
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
  return i.replace("{{date}}", It(r, n)).replace("{{time}}", mn(s, n));
}, xr = {
  p: mn,
  P: gr
}, yr = /^D+$/, br = /^Y+$/, pr = ["D", "DD", "YY", "YYYY"];
function wr(e) {
  return yr.test(e);
}
function vr(e) {
  return br.test(e);
}
function Dr(e, n, t) {
  const r = kr(e, n, t);
  if (console.warn(r), pr.includes(e)) throw new RangeError(r);
}
function kr(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const jr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Er = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nr = /^'([^]*?)'?$/, Mr = /''/g, Sr = /[a-zA-Z]/;
function he(e, n, t) {
  var f, w, y, b;
  const r = rt(), s = r.locale ?? dr, i = r.firstWeekContainsDate ?? ((w = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = r.weekStartsOn ?? ((b = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = ee(e, t == null ? void 0 : t.in);
  if (!Wn(l))
    throw new RangeError("Invalid time value");
  let h = n.match(Er).map((g) => {
    const x = g[0];
    if (x === "p" || x === "P") {
      const j = xr[x];
      return j(g, s.formatLong);
    }
    return g;
  }).join("").match(jr).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const x = g[0];
    if (x === "'")
      return { isToken: !1, value: Wr(g) };
    if (Pt[x])
      return { isToken: !0, value: g };
    if (x.match(Sr))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: g };
  });
  s.localize.preprocessor && (h = s.localize.preprocessor(l, h));
  const m = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: s
  };
  return h.map((g) => {
    if (!g.isToken) return g.value;
    const x = g.value;
    (vr(x) || wr(x)) && Dr(x, n, String(e));
    const j = Pt[x[0]];
    return j(l, x, s.localize, m);
  }).join("");
}
function Wr(e) {
  const n = e.match(Nr);
  return n ? n[1].replace(Mr, "'") : e;
}
function Tr(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDate();
}
function pt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay();
}
function At(e, n) {
  var h, m, f, w;
  const t = rt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((w = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = Tr(ee(e, n == null ? void 0 : n.in));
  if (isNaN(s)) return NaN;
  const i = pt(Tn(e, n));
  let o = r - i;
  o <= 0 && (o += 7);
  const l = s - o;
  return Math.ceil(l / 7) + 1;
}
function kt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getFullYear();
}
function Or(e, n, t) {
  const [r, s] = st(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Pe(r, t) == +Pe(s, t);
}
function Cr(e, n, t) {
  const [r, s] = st(
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
const Pr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _r = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), zt = (e) => {
  const n = _r(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, gn = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Rr = (e) => {
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
var Ir = {
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
const Ar = bt(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: o,
    ...l
  }, h) => jt(
    "svg",
    {
      ref: h,
      ...Ir,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: gn("lucide", s),
      ...!i && !Rr(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([m, f]) => jt(m, f)),
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
const De = (e, n) => {
  const t = bt(
    ({ className: r, ...s }, i) => jt(Ar, {
      ref: i,
      iconNode: n,
      className: gn(
        `lucide-${Pr(zt(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return t.displayName = zt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Lr = De("calendar", zr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], xn = De("check", Fr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Lt = De("chevron-down", Hr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ft = De("chevron-right", Yr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [
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
], Gr = De("file-text", $r);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Ht = De("grip-vertical", Xr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Br = De("trash-2", Vr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Kr = De("type", qr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Mt = De("x", Qr), Me = {
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
}, we = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, yt = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, Jr = ({ taskNames: e, onConfirm: n, onCancel: t }) => on.createPortal(
  /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
        className: "w-[360px] rounded-lg bg-white p-6 shadow-xl",
        onClick: (r) => r.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ a.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ a.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "삭제 확인" }),
              /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500", children: "이 작업은 되돌릴 수 없습니다" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "mb-6 rounded-md bg-gray-50 p-3", children: [
            /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-sm text-gray-600", children: [
              "다음 ",
              e.length,
              "개 항목을 삭제하시겠습니까?"
            ] }),
            /* @__PURE__ */ a.jsx("ul", { className: "max-h-[120px] overflow-auto", children: e.map((r, s) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ a.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-400" }),
              r
            ] }, s)) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: n,
                className: "rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors",
                children: "삭제"
              }
            )
          ] })
        ]
      }
    ) })
  ] }),
  document.body
), Yt = ({
  x: e,
  y: n,
  taskId: t,
  selectedTaskIds: r,
  tasks: s,
  onTaskGroup: i,
  onTaskUngroup: o,
  onTaskDelete: l,
  onStartRename: h,
  onClose: m,
  onDeselect: f
}) => {
  var Y;
  const [w, y] = V(!1), b = Array.from(r).some((A) => {
    const C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  }), g = () => {
    r.size >= 1 && !b && i && (i(Array.from(r)), m());
  }, x = () => {
    if (r.size === 1 && o) {
      const A = Array.from(r)[0], C = s.find((R) => R.id === A);
      (C == null ? void 0 : C.type) === "GROUP" && (o(A), m());
    }
  }, j = () => {
    y(!0);
  }, N = () => {
    l && (r.size > 0 ? Array.from(r) : [t]).forEach((C) => {
      l(C);
    }), y(!1), f(), m();
  }, O = () => {
    y(!1);
  }, L = r.size === 1 && (() => {
    const A = Array.from(r)[0], C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  })(), S = r.size > 0 ? Array.from(r).map((A) => {
    var C;
    return ((C = s.find((R) => R.id === A)) == null ? void 0 : C.name) || A;
  }) : [((Y = s.find((A) => A.id === t)) == null ? void 0 : Y.name) || t];
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: n },
      onClick: (A) => A.stopPropagation(),
      children: [
        r.size >= 1 && !b && i && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: g,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
              "그룹화 (",
              r.size,
              "개 선택됨)"
            ]
          }
        ),
        L && o && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: x,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
              "그룹 해제"
            ]
          }
        ),
        r.size === 1 && h && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: () => {
              const A = Array.from(r)[0];
              h(A), m();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
              "이름 변경"
            ]
          }
        ),
        l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("div", { className: "my-1 border-t border-gray-200" }),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: j,
              className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50",
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                "삭제 ",
                r.size > 1 ? `(${r.size}개)` : ""
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "my-1 border-t border-gray-200" }),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: () => {
              f(), m();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        ),
        w && /* @__PURE__ */ a.jsx(
          Jr,
          {
            taskNames: S,
            onConfirm: N,
            onCancel: O
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: $t } = we, ft = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Ur = ({
  columns: e,
  tasks: n,
  activeCPId: t,
  onTaskCreate: r,
  onCancel: s,
  isVirtualized: i = !1,
  virtualRowIndex: o
}) => {
  const [l, h] = Se.useState(ft), m = ie(null);
  se(() => {
    h(ft), setTimeout(() => {
      var g;
      (g = m.current) == null || g.focus();
    }, 0);
  }, []);
  const f = W(() => {
    h(ft), s();
  }, [s]), w = W(async () => {
    if (!(!l.name.trim() || !r || !t))
      try {
        const g = n[n.length - 1], x = g ? B(g.endDate, 1) : /* @__PURE__ */ new Date(), j = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, N = B(x, Math.max(j - 1, 0)), O = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: x,
          endDate: N,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await r(O), h(ft), s();
      } catch (g) {
        console.error("Failed to create task:", g), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, r, t, n, s]), y = W((g) => {
    g.key === "Enter" ? (g.preventDefault(), w()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [w, f]), b = i && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * $t}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: $t,
        ...b
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
                onChange: (g) => h((x) => ({ ...x, name: g.target.value })),
                onKeyDown: y
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
                onChange: (g) => {
                  const x = g.target.value.replace(/[^0-9]/g, ""), j = parseInt(x) || 0;
                  h((N) => ({ ...N, indirectWorkDaysPre: j }));
                },
                onKeyDown: y,
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
                onChange: (g) => {
                  const x = g.target.value.replace(/[^0-9]/g, ""), j = parseInt(x) || 0;
                  h((N) => ({ ...N, netWorkDays: j }));
                },
                onKeyDown: y,
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
                onChange: (g) => {
                  const x = g.target.value.replace(/[^0-9]/g, ""), j = parseInt(x) || 0;
                  h((N) => ({ ...N, indirectWorkDaysPost: j }));
                },
                onKeyDown: y,
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
                  onClick: w,
                  disabled: !l.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ a.jsx(xn, { size: 14 })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: f,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ a.jsx(Mt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Gt } = we, mt = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, Zr = ({
  columns: e,
  tasks: n,
  onTaskCreate: t,
  onCancel: r,
  isVirtualized: s = !1,
  virtualRowIndex: i,
  dragHandleWidth: o = 0
}) => {
  const [l, h] = Se.useState(mt), m = ie(null);
  se(() => {
    h(mt), setTimeout(() => {
      var g;
      (g = m.current) == null || g.focus();
    }, 0);
  }, []);
  const f = W(() => {
    h(mt), r();
  }, [r]), w = W(async () => {
    if (!(!l.name.trim() || !t))
      try {
        const g = n.filter((S) => S.type === "CP" && !S.parentId), x = g[g.length - 1], j = x ? B(x.endDate, 1) : /* @__PURE__ */ new Date(), N = l.workDaysTotal + l.nonWorkDaysTotal, O = B(j, Math.max(N - 1, 0)), L = {
          id: `cp-${Date.now()}`,
          parentId: null,
          wbsLevel: 1,
          type: "CP",
          name: l.name.trim(),
          startDate: j,
          endDate: O,
          cp: {
            workDaysTotal: l.workDaysTotal,
            nonWorkDaysTotal: l.nonWorkDaysTotal
          },
          dependencies: []
        };
        await t(L), h(mt), r();
      } catch (g) {
        console.error("Failed to create CP:", g), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, t, n, r]), y = W((g) => {
    g.key === "Enter" ? (g.preventDefault(), w()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [w, f]), b = s && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Gt}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Gt,
        ...b
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
                  onChange: (g) => h((x) => ({ ...x, name: g.target.value })),
                  onKeyDown: y
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
                onChange: (g) => {
                  const x = g.target.value.replace(/[^0-9]/g, ""), j = parseInt(x) || 0;
                  h((N) => ({ ...N, workDaysTotal: j }));
                },
                onKeyDown: y,
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
                onChange: (g) => {
                  const x = g.target.value.replace(/[^0-9]/g, ""), j = parseInt(x) || 0;
                  h((N) => ({ ...N, nonWorkDaysTotal: j }));
                },
                onKeyDown: y,
                title: "비작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex shrink-0 items-center justify-center gap-1 px-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: w,
              disabled: !l.name.trim(),
              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
              title: "저장 (Enter)",
              children: /* @__PURE__ */ a.jsx(xn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: f,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ a.jsx(Mt, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: Ye, HEADER_HEIGHT: Xt, MILESTONE_LANE_HEIGHT: Vt } = we, Bt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], qt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], yn = bt(
  ({ tasks: e, allTasks: n, viewMode: t, expandedIds: r, onToggle: s, onTaskClick: i, onTaskUpdate: o, onTaskCreate: l, onTaskReorder: h, activeCPId: m, virtualRows: f, totalHeight: w, onTotalWidthChange: y, onTaskGroup: b, onTaskUngroup: g, onTaskDelete: x, onTaskMove: j, isAddingTask: N = !1, onCancelAddTask: O, isAddingCP: L = !1, onCancelAddCP: S }, Y) => {
    const A = f && f.length > 0, [C, R] = V(null), [$, ne] = V(null), [G, K] = V(null), [F, J] = V(/* @__PURE__ */ new Set()), [te, ce] = V(null), [Q, k] = V(null), [v, z] = V(null), [u, E] = V(""), T = ie(null), [I, oe] = V(
      Bt.map((d) => d.width)
    ), [re, X] = V(
      qt.map((d) => d.width)
    ), [le, ye] = V(null), ke = ie(!1), be = t === "MASTER" ? Bt : qt, _e = t === "MASTER" ? I : re, Re = t === "MASTER" ? oe : X, q = xe(
      () => be.map((d, c) => ({
        ...d,
        width: _e[c] ?? d.width
      })),
      [be, _e]
    ), at = h ? 24 : 0, fe = q.reduce((d, c) => d + c.width, 0) + at;
    se(() => {
      y && y(fe);
    }, [fe, y]);
    const Be = W((d, c) => {
      if (d.detail >= 2) return;
      d.preventDefault(), d.stopPropagation(), ke.current = !0, ye(c);
      const p = d.clientX, M = _e[c], _ = be[c].minWidth, U = (Z) => {
        if (!ke.current) return;
        const de = Z.clientX - p, D = Math.max(_, M + de);
        Re((Ee) => {
          const me = [...Ee];
          return me[c] = D, me;
        });
      }, P = () => {
        ke.current = !1, ye(null), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", U), document.addEventListener("mouseup", P);
    }, [_e, be, Re]), We = W((d, c = 12, p = "normal") => {
      const _ = document.createElement("canvas").getContext("2d");
      return _ ? (_.font = `${p} ${c}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, _.measureText(d).width) : 0;
    }, []), it = W((d) => {
      const c = be[d].minWidth, p = d === 0, M = p ? 48 : 20, _ = be[d].label;
      let U = We(_, 12, "500") + 16;
      return e.forEach((P) => {
        let Z = "", de = 0;
        if (t === "MASTER") {
          const vt = P.type === "GROUP";
          switch (p && P.parentId && (de = 20), d) {
            case 0:
              Z = P.name;
              break;
            case 1:
              Z = vt ? "-" : P.cp ? `${P.cp.workDaysTotal + P.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              Z = vt ? "-" : P.cp ? `${P.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              Z = vt ? "-" : P.cp ? `${P.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (d) {
            case 0:
              Z = P.name;
              break;
            case 1:
              Z = P.task ? String(P.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              Z = P.task ? String(P.task.netWorkDays) : "-";
              break;
            case 3:
              Z = P.task ? String(P.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              Z = he(P.startDate, "yyyy-MM-dd");
              break;
            case 5:
              Z = he(P.endDate, "yyyy-MM-dd");
              break;
          }
        const me = We(Z, p ? 14 : 12, p ? "500" : "normal") + M + de;
        U = Math.max(U, me);
      }), Math.max(c, Math.ceil(U));
    }, [e, t, be, We]), wt = W((d, c) => {
      d.preventDefault(), d.stopPropagation(), ke.current = !1, ye(null);
      const p = it(c);
      Re((M) => {
        const _ = [...M];
        return _[c] = p, _;
      });
    }, [it, Re]), pe = W((d, c, p) => {
      if (!d.task || !o) return;
      const M = {
        ...d,
        task: {
          ...d.task,
          [c]: p
        }
      };
      o(M);
    }, [o]), ot = W((d, c) => {
      d.dataTransfer.effectAllowed = "move", d.dataTransfer.setData("text/plain", c), R(c);
      const p = document.createElement("div");
      p.style.opacity = "0", document.body.appendChild(p), d.dataTransfer.setDragImage(p, 0, 0), setTimeout(() => document.body.removeChild(p), 0);
    }, []), lt = W((d, c, p) => {
      if (d.preventDefault(), d.dataTransfer.dropEffect = "move", c === C) return;
      const M = d.currentTarget.getBoundingClientRect(), _ = d.clientY - M.top, U = M.height;
      let P;
      p ? _ < U / 3 ? P = "before" : _ < U * 2 / 3 ? P = "into" : P = "after" : P = _ < U / 2 ? "before" : "after", ne(c), K(P);
    }, [C]), qe = W(() => {
      ne(null), K(null);
    }, []), Ie = W((d, c) => {
      if (d.preventDefault(), !C || C === c || !G) {
        R(null), ne(null), K(null);
        return;
      }
      if (j)
        j(C, c, G);
      else if (h && G !== "into") {
        const p = e.findIndex((_) => _.id === c), M = G === "after" ? p + 1 : p;
        h(C, M);
      }
      R(null), ne(null), K(null);
    }, [C, G, j, h, e]), Ke = W(() => {
      R(null), ne(null), K(null);
    }, []), je = W((d, c, p) => {
      if (C) return;
      const M = d.ctrlKey || d.metaKey, _ = d.shiftKey;
      if (M)
        J((U) => {
          const P = new Set(U);
          return P.has(c.id) ? P.delete(c.id) : P.add(c.id), P;
        }), ce(p);
      else if (_ && te !== null) {
        const U = Math.min(te, p), P = Math.max(te, p);
        J((Z) => {
          const de = new Set(Z);
          for (let D = U; D <= P; D++)
            e[D] && de.add(e[D].id);
          return de;
        });
      } else
        J(/* @__PURE__ */ new Set([c.id])), ce(p);
    }, [C, te, e]), Qe = W((d, c) => {
      d.preventDefault(), F.has(c.id) || J(/* @__PURE__ */ new Set([c.id])), k({
        x: d.clientX,
        y: d.clientY,
        taskId: c.id
      });
    }, [F]);
    se(() => {
      const d = () => {
        k(null);
      };
      if (Q)
        return document.addEventListener("click", d), () => document.removeEventListener("click", d);
    }, [Q]), se(() => {
      const d = (c) => {
        c.key === "Escape" && (J(/* @__PURE__ */ new Set()), k(null), z(null));
      };
      return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
    }, []);
    const Te = W((d) => {
      z(d.id), E(d.name), setTimeout(() => {
        var c, p;
        (c = T.current) == null || c.focus(), (p = T.current) == null || p.select();
      }, 0);
    }, []), Ae = W((d) => {
      const c = e.find((p) => p.id === d);
      c && o && Te(c);
    }, [e, o, Te]), ze = W(() => {
      if (!v || !o) {
        z(null);
        return;
      }
      const d = e.find((c) => c.id === v);
      d && u.trim() && u !== d.name && o({
        ...d,
        name: u.trim()
      }), z(null), E("");
    }, [v, u, e, o]), ct = W(() => {
      z(null), E("");
    }, []), dt = W((d) => {
      d.key === "Enter" ? (d.preventDefault(), ze()) : d.key === "Escape" && (d.preventDefault(), ct());
    }, [ze, ct]), Le = () => /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: q.map((d, c) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: d.width },
        children: [
          d.label,
          c < q.length - 1 && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${le === c ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (p) => Be(p, c),
              onDoubleClick: (p) => wt(p, c),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          c < q.length - 1 && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      d.id
    )) }), Oe = F.size === 1 ? e.find((d) => d.id === Array.from(F)[0] && d.type === "GROUP") : null, Fe = F.size >= 1 && b && !Oe, ut = Oe && g, ht = () => !Fe && !ut && F.size === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      F.size > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-500", children: [
        F.size,
        "개 선택"
      ] }),
      Fe && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            b(Array.from(F)), J(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
          title: "선택한 항목들을 그룹화",
          children: [
            /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
            "그룹화"
          ]
        }
      ),
      ut && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            g(Oe.id), J(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors",
          title: "그룹 해제",
          children: [
            /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
            "해제"
          ]
        }
      ),
      F.size > 0 && /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => J(/* @__PURE__ */ new Set()),
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
          style: { height: Xt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              ht()
            ] }),
            Le()
          ]
        }
      ),
      le !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: Y, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Vt, minWidth: fe },
            children: q.map((d, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: d.width },
                children: c === 0 && "Milestone"
              },
              d.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: fe,
              height: A ? w : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((d, c) => ({ index: c, start: c * Ye, size: Ye, key: c }))).map((d) => {
                const c = e[d.index];
                if (!c) return null;
                const p = c.type === "GROUP", M = p && n.some((D) => D.parentId === c.id), _ = r.has(c.id), U = c.parentId ? 20 : 0, P = C === c.id, Z = $ === c.id, de = F.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(h || j),
                    onDragStart: (D) => ot(D, c.id),
                    onDragOver: (D) => lt(D, c.id, p),
                    onDragLeave: qe,
                    onDrop: (D) => Ie(D, c.id),
                    onDragEnd: Ke,
                    onClick: (D) => je(D, c, d.index),
                    onContextMenu: (D) => Qe(D, c),
                    className: `box-border flex items-center border-b transition-all duration-150 ${P ? "opacity-50 bg-blue-50" : Z ? G === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : G === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : de ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : p ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: Ye,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${d.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !p && i(c),
                    title: p ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      h && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(Ht, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: h ? q[0].width - 24 : q[0].width, paddingLeft: U + 8 },
                          children: [
                            M ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (D) => {
                                  D.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: _ ? /* @__PURE__ */ a.jsx(Lt, { size: 14 }) : /* @__PURE__ */ a.jsx(Ft, { size: 14 })
                              }
                            ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: T,
                                type: "text",
                                value: u,
                                onChange: (D) => E(D.target.value),
                                onKeyDown: dt,
                                onBlur: ze,
                                onClick: (D) => D.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${p ? "font-normal text-gray-500 italic cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (D) => {
                                  o && (D.stopPropagation(), Te(c));
                                },
                                title: o ? "더블클릭하여 이름 편집" : void 0,
                                children: c.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: q[1].width },
                          children: p ? "-" : c.cp ? `${c.cp.workDaysTotal + c.cp.nonWorkDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                          style: { width: q[2].width },
                          children: p ? "-" : c.cp ? `${c.cp.workDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-teal",
                          style: { width: q[3].width },
                          children: p ? "-" : c.cp ? `${c.cp.nonWorkDaysTotal}일` : "-"
                        }
                      )
                    ]
                  },
                  d.key
                );
              }),
              L && /* @__PURE__ */ a.jsx(
                Zr,
                {
                  columns: q,
                  tasks: e,
                  onTaskCreate: l,
                  onCancel: S || (() => {
                  }),
                  isVirtualized: A,
                  virtualRowIndex: e.length,
                  dragHandleWidth: at
                }
              )
            ]
          }
        )
      ] }),
      Q && /* @__PURE__ */ a.jsx(
        Yt,
        {
          x: Q.x,
          y: Q.y,
          taskId: Q.taskId,
          selectedTaskIds: F,
          tasks: e,
          onTaskGroup: b,
          onTaskUngroup: g,
          onTaskDelete: x,
          onStartRename: Ae,
          onClose: () => k(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Xt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              ht()
            ] }),
            Le()
          ]
        }
      ),
      le !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: Y, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Vt, minWidth: fe },
            children: q.map((d, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: d.width },
                children: c === 0 && "Milestone"
              },
              d.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: fe,
              height: A ? w : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((d, c) => ({ index: c, start: c * Ye, size: Ye, key: c }))).map((d) => {
                const c = e[d.index];
                if (!c) return null;
                const p = c.type === "GROUP", M = p && n.some((D) => D.parentId === c.id), _ = r.has(c.id), U = c.parentId && c.parentId !== m ? 20 : 0, P = C === c.id, Z = $ === c.id, de = F.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(h || j),
                    onDragStart: (D) => ot(D, c.id),
                    onDragOver: (D) => lt(D, c.id, p),
                    onDragLeave: qe,
                    onDrop: (D) => Ie(D, c.id),
                    onDragEnd: Ke,
                    onClick: (D) => je(D, c, d.index),
                    onContextMenu: (D) => Qe(D, c),
                    className: `box-border flex items-center border-b transition-colors ${P ? "opacity-50 bg-blue-50" : Z ? G === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : G === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : de ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : p ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: Ye,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${d.start}px)`
                      } : {}
                    },
                    children: [
                      h && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(Ht, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: h ? q[0].width - 24 : q[0].width, paddingLeft: U + 8 },
                          children: [
                            M ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (D) => {
                                  D.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: _ ? /* @__PURE__ */ a.jsx(Lt, { size: 14 }) : /* @__PURE__ */ a.jsx(Ft, { size: 14 })
                              }
                            ) : p ? /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }) : null,
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: T,
                                type: "text",
                                value: u,
                                onChange: (D) => E(D.target.value),
                                onKeyDown: dt,
                                onBlur: ze,
                                onClick: (D) => D.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${p ? "font-normal text-gray-500 italic cursor-text" : "text-gray-700"}`,
                                onDoubleClick: (D) => {
                                  o && (D.stopPropagation(), Te(c));
                                },
                                title: o ? "더블클릭하여 이름 편집" : void 0,
                                children: c.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: q[1].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPre,
                              onChange: (D) => {
                                const Ee = D.target.value.replace(/[^0-9]/g, ""), me = parseInt(Ee) || 0;
                                pe(c, "indirectWorkDaysPre", me);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
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
                          style: { width: q[2].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: c.task.netWorkDays,
                              onChange: (D) => {
                                const Ee = D.target.value.replace(/[^0-9]/g, ""), me = parseInt(Ee) || 0;
                                pe(c, "netWorkDays", me);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
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
                          style: { width: q[3].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPost,
                              onChange: (D) => {
                                const Ee = D.target.value.replace(/[^0-9]/g, ""), me = parseInt(Ee) || 0;
                                pe(c, "indirectWorkDaysPost", me);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
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
                          style: { width: q[4].width },
                          children: he(c.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: q[5].width },
                          children: he(c.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  d.key
                );
              }),
              N && m && /* @__PURE__ */ a.jsx(
                Ur,
                {
                  columns: q,
                  tasks: e,
                  activeCPId: m,
                  onTaskCreate: l,
                  onCancel: O || (() => {
                  }),
                  isVirtualized: A,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      Q && /* @__PURE__ */ a.jsx(
        Yt,
        {
          x: Q.x,
          y: Q.y,
          taskId: Q.taskId,
          selectedTaskIds: F,
          tasks: e,
          onTaskGroup: b,
          onTaskUngroup: g,
          onTaskDelete: x,
          onStartRename: Ae,
          onClose: () => k(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
yn.displayName = "GanttSidebar";
const Ge = (e, n = [], t) => !!(!t.workOnSaturdays && cn(e) || !t.workOnSundays && dn(e) || !t.workOnHolidays && n.some((r) => Mn(r, e))), As = (e) => cn(e) || dn(e), es = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; Ge(s, t, r); )
    s = B(s, 1);
  for (; i < n; )
    Ge(s, t, r) || i++, i < n && (s = B(s, 1));
  return s;
}, zs = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; i < n; )
    s = B(s, -1), Ge(s, t, r) || i++;
  return s;
}, Kt = (e, n) => n <= 0 ? e : B(e, n - 1), Ls = (e, n = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: r, indirectWorkDaysPre: s, indirectWorkDaysPost: i } = e.task, o = tt(new Date(e.startDate));
  let l = o, h, m;
  s > 0 && (h = l, m = Kt(l, s), l = B(m, 1));
  let f = l, w = f;
  if (r > 0) {
    for (; Ge(f, n, t); )
      f = B(f, 1);
    w = es(f, r, n, t), l = B(w, 1);
  } else s === 0 && (f = o, w = o);
  let y, b;
  return i > 0 && (y = l, b = Kt(l, i)), {
    startDate: h || f,
    endDate: b || w,
    netWorkStartDate: f,
    netWorkEndDate: w,
    indirectPreStartDate: h,
    indirectPreEndDate: m,
    indirectPostStartDate: y,
    indirectPostEndDate: b
  };
}, Fs = (e, n, t) => {
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
}, nt = (e, n, t) => Nt(e, n) * t, Hs = (e, n, t) => {
  const r = Math.round(e / t);
  return B(n, r);
}, Ys = (e, n, t) => (Nt(n, e) + 1) * t, $s = (e) => yt[e].pixelsPerDay, bn = (e, n = [], t = 5) => {
  const r = [
    ...e.flatMap((m) => [m.startDate, m.endDate].filter(Boolean)),
    ...n.map((m) => m.date)
  ];
  if (r.length === 0) {
    const m = /* @__PURE__ */ new Date();
    return {
      minDate: m,
      maxDate: B(m, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...r.map((m) => m.getTime()))), i = new Date(Math.max(...r.map((m) => m.getTime()))), o = B(s, -t), l = B(i, t), h = Nt(l, o);
  return {
    minDate: o,
    maxDate: l,
    totalDays: h
  };
}, { ROW_HEIGHT: ue, HEADER_HEIGHT: ts, MILESTONE_LANE_HEIGHT: ge, BAR_HEIGHT: ae } = we, ns = ({
  minDate: e,
  totalDays: n,
  pixelsPerDay: t,
  zoomLevel: r,
  holidays: s,
  calendarSettings: i
}) => {
  const o = Array.from({ length: n }, (y, b) => B(e, b)), l = n * t, h = xe(() => {
    const y = [];
    let b = kt(o[0]), g = 0;
    return o.forEach((x) => {
      kt(x) !== b ? (y.push({ label: `${b}년`, days: g }), b = kt(x), g = 1) : g++;
    }), y.push({ label: `${b}년`, days: g }), y;
  }, [o]), m = xe(() => {
    const y = [];
    let b = o[0], g = 0;
    return o.forEach((x) => {
      Cr(x, b) ? g++ : (y.push({ label: he(b, "M월"), days: g }), b = x, g = 1);
    }), y.push({ label: he(b, "M월"), days: g }), y;
  }, [o]), f = xe(() => {
    if (r === "MONTH")
      return null;
    if (r === "DAY")
      return /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: o.map((y, b) => {
        const g = pt(y), x = Ge(y, s, i), j = g === 0, N = g === 6;
        let O = "text-gray-600";
        j && (O = "text-red-500"), N && (O = "text-blue-500"), x && !j && !N && (O = "text-red-500");
        let L = "";
        return j || x && !N ? L = "bg-red-50/50" : N && (L = "bg-blue-50/50"), /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${L}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: `text-[10px] leading-none ${O}`, children: he(y, "d") }),
              /* @__PURE__ */ a.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${O}`, children: ["일", "월", "화", "수", "목", "금", "토"][g] })
            ]
          },
          b
        );
      }) });
    {
      const y = [];
      let b = o[0], g = 0;
      return o.forEach((x) => {
        Or(x, b, { weekStartsOn: 0 }) ? g++ : (y.push({ label: `${At(b, { weekStartsOn: 0 })}주`, days: g }), b = x, g = 1);
      }), y.push({ label: `${At(b, { weekStartsOn: 0 })}주`, days: g }), /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: y.map((x, j) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: x.days * t },
          children: x.label
        },
        j
      )) });
    }
  }, [o, r, t, s, i, l]), w = r === "MONTH";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: ts, minWidth: l },
      children: w ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: h.map((y, b) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              b
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((y, b) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: y.days * t },
                children: y.label
              },
              b
            ))
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: h.map((y, b) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: y.days * t },
                children: y.label
              },
              b
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((y, b) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              b
            ))
          }
        ),
        f
      ] })
    }
  );
}, rs = ({
  minDate: e,
  totalDays: n,
  chartHeight: t,
  pixelsPerDay: r,
  holidays: s,
  calendarSettings: i,
  zoomLevel: o
}) => {
  const l = xe(() => {
    if (o === "MONTH") return [];
    const h = [];
    for (let m = 0; m < n; m++) {
      const f = B(e, m), w = pt(f), y = w === 0, b = w === 6;
      if (Ge(f, s, i) || b) {
        const x = m * r;
        let j = "rgba(254, 242, 242, 0.5)";
        b && !y && (j = "rgba(239, 246, 255, 0.5)"), y && (j = "rgba(254, 242, 242, 0.5)"), h.push(
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x,
              y: 0,
              width: r,
              height: t,
              fill: j,
              className: "pointer-events-none"
            },
            `weekend-${m}`
          )
        );
      }
    }
    return h;
  }, [e, n, t, r, s, i, o]);
  return /* @__PURE__ */ a.jsx("g", { children: l });
}, ss = (e, n, t) => {
  if (e.length === 0) return [];
  const r = 25, s = 12, i = 8, o = e.map((f) => ({
    milestone: f,
    x: nt(f.date, n, t),
    labelLevel: 0,
    labelWidth: f.name.length * s + r
  })).sort((f, w) => f.x - w.x), l = [], h = [], m = [];
  for (const f of o) {
    const w = f.labelWidth, y = f.x - w, b = f.x - i;
    if (!h.some((x) => y < x + i))
      h.push(b), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 0
      });
    else {
      const x = f.x + i, j = f.x + w;
      m.some(
        (O) => !(j < O.start || x > O.end)
      ) ? l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: -1
      }) : (m.push({ start: x, end: j }), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, as = ({
  milestone: e,
  x: n,
  labelLevel: t = 0,
  isDragging: r = !1,
  dragX: s,
  onMouseDown: i,
  onDoubleClick: o
}) => {
  const h = ge / 2, m = r && s !== void 0 ? s : n;
  let f, w, y;
  t === 0 ? (f = -8, w = 4, y = "end") : t === 1 ? (f = 8, w = 4, y = "start") : (f = 0, w = 18, y = "middle");
  const b = (x) => {
    i && (x.preventDefault(), x.stopPropagation(), i(x, e));
  }, g = (x) => {
    o && (x.preventDefault(), x.stopPropagation(), o(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${m}, ${h})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${r ? "cursor-ew-resize" : ""}`,
      onMouseDown: b,
      onDoubleClick: g,
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
            fill: r ? "#3B82F6" : Me.milestone,
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
            x: f,
            y: w,
            textAnchor: y,
            className: `select-none text-[11px] font-bold transition-colors ${r ? "fill-blue-700" : "fill-gray-600 group-hover:fill-blue-700"}`,
            children: e.name
          }
        )
      ]
    }
  );
}, is = ({
  task: e,
  y: n,
  minDate: t,
  pixelsPerDay: r,
  isMasterView: s,
  isDraggable: i = !1,
  dragInfo: o,
  onDragStart: l
}) => {
  var b, g;
  if (e.type === "GROUP") return null;
  const h = 4, m = !!o, f = (o == null ? void 0 : o.startDate) || e.startDate, w = (o == null ? void 0 : o.endDate) || e.endDate, y = nt(f, t, r);
  if (s) {
    const x = ((b = e.cp) == null ? void 0 : b.workDaysTotal) || 0, j = ((g = e.cp) == null ? void 0 : g.nonWorkDaysTotal) || 0;
    if (x + j === 0) return null;
    const O = x * r, L = j * r;
    return /* @__PURE__ */ a.jsxs("g", { transform: `translate(${y}, ${n})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: O,
          height: ae,
          fill: Me.vermilion,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: O,
          y: 0,
          width: L,
          height: ae,
          fill: Me.teal,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "text",
        {
          x: -8,
          y: ae / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: x, indirectWorkDaysPre: j, indirectWorkDaysPost: N } = e.task, O = (o == null ? void 0 : o.indirectWorkDaysPre) ?? j, L = (o == null ? void 0 : o.indirectWorkDaysPost) ?? N, S = O * r, Y = x * r, A = L * r, C = S + Y + A, R = 0, $ = S, ne = S + Y, G = 8, K = {
      startDate: f,
      endDate: w,
      indirectWorkDaysPre: O,
      netWorkDays: x,
      indirectWorkDaysPost: L
    };
    return /* @__PURE__ */ a.jsxs(
      "g",
      {
        transform: `translate(${y}, ${n})`,
        className: `group ${m ? "opacity-90" : ""}`,
        children: [
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: S,
              y: 0,
              width: Y,
              height: ae,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (F) => l == null ? void 0 : l(F, e.id, "move", K)
            }
          ),
          O > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: R,
              y: 0,
              width: S,
              height: ae,
              fill: Me.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          x > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: $,
              y: 0,
              width: Y,
              height: ae,
              fill: Me.red,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          L > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: ne,
              y: 0,
              width: A,
              height: ae,
              fill: Me.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: -G / 2,
              y: 0,
              width: G,
              height: ae,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (F) => l == null ? void 0 : l(F, e.id, "resize-pre", K),
              children: /* @__PURE__ */ a.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: C - G / 2,
              y: 0,
              width: G,
              height: ae,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (F) => l == null ? void 0 : l(F, e.id, "resize-post", K),
              children: /* @__PURE__ */ a.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: 1,
                y: ae / 2 - 6,
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
                x: C - 4,
                y: ae / 2 - 6,
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
              y: ae / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          m && /* @__PURE__ */ a.jsxs("g", { children: [
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: C / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  he(f, "MM/dd"),
                  " ~ ",
                  he(w, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: C / 2,
                y: ae + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  O,
                  "일 + 순",
                  x,
                  "일 + 뒤",
                  L,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, os = () => /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ a.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: Me.dependency })
  }
) }), pn = bt(
  ({ tasks: e, milestones: n, viewMode: t, zoomLevel: r, holidays: s, calendarSettings: i, onBarDrag: o, onMilestoneUpdate: l, onMilestoneDoubleClick: h, virtualRows: m, totalHeight: f }, w) => {
    const y = yt[r].pixelsPerDay, b = t === "MASTER", g = m && m.length > 0, [x, j] = V(null), [N, O] = V(null), L = ie(null);
    se(() => {
      L.current = N;
    }, [N]);
    const { minDate: S, totalDays: Y } = xe(() => bn(e, n, 60), [e, n]), A = xe(() => ss(n, S, y), [n, S, y]), C = Y * y, R = Math.max(g ? (f || 0) + ge + 100 : e.length * ue + ge + 100, 500), $ = ie(null);
    se(() => {
      $.current = x;
    }, [x]);
    const ne = W((k, v) => {
      if (!l) return;
      k.preventDefault(), k.stopPropagation();
      const z = nt(v.date, S, y), u = {
        milestoneId: v.id,
        startX: k.clientX,
        originalDate: v.date,
        currentX: z
      };
      O(u);
    }, [l, S, y]), G = W((k) => {
      const v = L.current;
      if (!v) return;
      const z = k.clientX - v.startX, u = nt(v.originalDate, S, y), E = Math.max(0, u + z);
      O((T) => T ? { ...T, currentX: E } : null);
    }, [S, y]), K = W((k) => {
      const v = L.current;
      if (!v || !l) {
        O(null);
        return;
      }
      const z = k.clientX - v.startX, u = Math.round(z / y);
      if (u !== 0) {
        const E = B(v.originalDate, u), T = n.find((I) => I.id === v.milestoneId);
        T && l({
          ...T,
          date: E
        });
      }
      O(null);
    }, [l, y, n]);
    se(() => {
      if (N)
        return window.addEventListener("mousemove", G), window.addEventListener("mouseup", K), () => {
          window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", K);
        };
    }, [N, G, K]);
    const F = W((k) => {
      h && h(k);
    }, [h]), J = W((k, v, z, u) => {
      if (!o) return;
      k.preventDefault(), k.stopPropagation();
      const E = {
        taskId: v,
        dragType: z,
        startX: k.clientX,
        originalStartDate: u.startDate,
        originalEndDate: u.endDate,
        originalIndirectWorkDaysPre: u.indirectWorkDaysPre,
        originalNetWorkDays: u.netWorkDays,
        originalIndirectWorkDaysPost: u.indirectWorkDaysPost,
        currentStartDate: u.startDate,
        currentEndDate: u.endDate,
        currentIndirectWorkDaysPre: u.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: u.indirectWorkDaysPost
      };
      j(E), $.current = E;
    }, [o]), te = W((k) => {
      const v = $.current;
      if (!v || !o) return;
      const z = k.clientX - v.startX, u = Math.round(z / y);
      let E = v.originalStartDate, T = v.originalEndDate, I = v.originalIndirectWorkDaysPre, oe = v.originalIndirectWorkDaysPost;
      if (v.dragType === "move")
        E = B(v.originalStartDate, u), T = B(v.originalEndDate, u);
      else if (v.dragType === "resize-pre") {
        I = Math.max(0, v.originalIndirectWorkDaysPre - u);
        const re = B(v.originalStartDate, v.originalIndirectWorkDaysPre);
        E = B(re, -I), T = v.originalEndDate;
      } else if (v.dragType === "resize-post") {
        oe = Math.max(0, v.originalIndirectWorkDaysPost + u);
        const re = B(v.originalEndDate, -v.originalIndirectWorkDaysPost);
        T = B(re, oe), E = v.originalStartDate;
      }
      j((re) => re ? {
        ...re,
        currentStartDate: E,
        currentEndDate: T,
        currentIndirectWorkDaysPre: I,
        currentIndirectWorkDaysPost: oe
      } : null);
    }, [o, y]), ce = W(() => {
      const k = $.current;
      if (!k || !o) {
        j(null), $.current = null;
        return;
      }
      const v = k.currentStartDate.getTime() !== k.originalStartDate.getTime() || k.currentEndDate.getTime() !== k.originalEndDate.getTime(), z = k.currentIndirectWorkDaysPre !== k.originalIndirectWorkDaysPre || k.currentIndirectWorkDaysPost !== k.originalIndirectWorkDaysPost;
      (v || z) && o({
        taskId: k.taskId,
        dragType: k.dragType,
        newStartDate: k.currentStartDate,
        newEndDate: k.currentEndDate,
        newIndirectWorkDaysPre: k.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: k.currentIndirectWorkDaysPost
      }), j(null), $.current = null;
    }, [o]);
    se(() => {
      if (x)
        return window.addEventListener("mousemove", te), window.addEventListener("mouseup", ce), document.body.style.cursor = x.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", ce), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [x, te, ce]);
    const Q = W((k) => x && x.taskId === k ? {
      startDate: x.currentStartDate,
      endDate: x.currentEndDate,
      indirectWorkDaysPre: x.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: x.currentIndirectWorkDaysPost
    } : null, [x]);
    return /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsxs("div", { ref: w, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ a.jsx(
        ns,
        {
          minDate: S,
          totalDays: Y,
          pixelsPerDay: y,
          zoomLevel: r,
          holidays: s,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ a.jsxs("svg", { width: C, height: R, className: "block bg-white", children: [
        /* @__PURE__ */ a.jsx(os, {}),
        /* @__PURE__ */ a.jsx(
          rs,
          {
            minDate: S,
            totalDays: Y,
            chartHeight: R,
            pixelsPerDay: y,
            holidays: s,
            calendarSettings: i,
            zoomLevel: r
          }
        ),
        (g ? m : e.map((k, v) => ({ index: v, start: v * ue, size: ue, key: v }))).map((k) => {
          const v = e[k.index];
          if (!v || v.type !== "GROUP") return null;
          const z = k.start + ge;
          return /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 0,
              y: z,
              width: C,
              height: ue,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${k.key}`
          );
        }),
        Array.from({ length: Y }, (k, v) => {
          const z = (v + 1) * y, u = B(S, v), E = pt(u);
          let T = !1, I = "#f0f0f0";
          return r === "DAY" ? (T = !0, I = E === 0 ? "#e0e0e0" : "#f0f0f0") : r === "WEEK" ? (T = E === 0, I = "#e5e7eb") : r === "MONTH" && (T = E === 0, I = "#f0f0f0"), T ? /* @__PURE__ */ a.jsx(
            "line",
            {
              x1: z,
              y1: 0,
              x2: z,
              y2: R,
              stroke: I,
              strokeWidth: 1
            },
            `vline-${v}`
          ) : null;
        }),
        (g ? m : e.map((k, v) => ({ index: v, start: v * ue, size: ue, key: v }))).map((k) => /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: k.start + ue + ge,
            x2: C,
            y2: k.start + ue + ge,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${k.key}`
        )),
        /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: C, height: ge, fill: "transparent" }),
        A.map((k) => {
          const v = (N == null ? void 0 : N.milestoneId) === k.milestone.id;
          return /* @__PURE__ */ a.jsx(
            as,
            {
              milestone: k.milestone,
              x: k.x,
              labelLevel: k.labelLevel,
              isDragging: v,
              dragX: v ? N == null ? void 0 : N.currentX : void 0,
              onMouseDown: l ? ne : void 0,
              onDoubleClick: h ? F : void 0
            },
            k.milestone.id
          );
        }),
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: ge,
            x2: C,
            y2: ge,
            stroke: Me.grid,
            strokeWidth: 1
          }
        ),
        (g ? m : e.map((k, v) => ({ index: v, start: v * ue, size: ue, key: v }))).map((k) => {
          const v = e[k.index];
          if (!v) return null;
          const z = k.start + (ue - ae) / 2 + ge;
          return /* @__PURE__ */ a.jsx(
            is,
            {
              task: v,
              y: z,
              minDate: S,
              pixelsPerDay: y,
              isMasterView: b,
              isDraggable: !b && !!o,
              dragInfo: Q(v.id),
              onDragStart: J
            },
            k.key
          );
        })
      ] })
    ] }) });
  }
);
pn.displayName = "GanttTimeline";
const ls = ({ milestoneName: e, onConfirm: n, onCancel: t }) => on.createPortal(
  /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "w-[360px] rounded-lg bg-white p-6 shadow-xl",
        onClick: (r) => r.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ a.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ a.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "마일스톤 삭제" }),
              /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-500", children: "이 작업은 되돌릴 수 없습니다" })
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "mb-6 rounded-md bg-gray-50 p-3", children: [
            /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-600", children: "다음 마일스톤을 삭제하시겠습니까?" }),
            /* @__PURE__ */ a.jsxs("p", { className: "mt-1 flex items-center gap-2 text-sm font-medium text-gray-700", children: [
              /* @__PURE__ */ a.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-400" }),
              e
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: n,
                className: "rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors",
                children: "삭제"
              }
            )
          ] })
        ]
      }
    ) })
  ] }),
  document.body
), cs = ({
  milestone: e,
  isOpen: n,
  isNew: t = !1,
  onClose: r,
  onSave: s,
  onDelete: i
}) => {
  const [o, l] = V(""), [h, m] = V(""), [f, w] = V(""), [y, b] = V(!1), g = ie(null);
  se(() => {
    e && n && (l(e.name), m(e.description || ""), w(he(e.date, "yyyy-MM-dd")), b(!1), setTimeout(() => {
      var S, Y;
      (S = g.current) == null || S.focus(), (Y = g.current) == null || Y.select();
    }, 100));
  }, [e, n]), se(() => {
    const S = (Y) => {
      Y.key === "Escape" && n && (y ? b(!1) : r());
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [n, y, r]);
  const x = () => {
    if (!e || !o.trim()) return;
    const S = {
      ...e,
      name: o.trim(),
      description: h.trim() || void 0,
      date: new Date(f)
    };
    s(S), r();
  }, j = () => {
    b(!0);
  }, N = () => {
    e && i && i(e.id), b(!1);
  }, O = () => {
    b(!1);
  }, L = (S) => {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), x());
  };
  return !n || !e ? null : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "w-full max-w-md rounded-lg bg-white shadow-xl",
        onClick: (S) => S.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ a.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: t ? "새 마일스톤" : "마일스톤 설정" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: r,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ a.jsx(Mt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Kr, { size: 14 }),
                "마일스톤 이름"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: g,
                  type: "text",
                  value: o,
                  onChange: (S) => l(S.target.value),
                  onKeyDown: L,
                  placeholder: "마일스톤 이름을 입력하세요",
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Lr, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "date",
                  value: f,
                  onChange: (S) => w(S.target.value),
                  onKeyDown: L,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Gr, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: h,
                  onChange: (S) => m(S.target.value),
                  placeholder: "마일스톤에 대한 설명을 입력하세요",
                  rows: 3,
                  className: "w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between border-t border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ a.jsx("div", { children: !t && i && /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: j,
                className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                children: [
                  /* @__PURE__ */ a.jsx(Br, { size: 16 }),
                  "삭제"
                ]
              }
            ) }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: r,
                  className: "rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors",
                  children: "취소"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: x,
                  disabled: !o.trim(),
                  className: "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  children: "저장"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    y && /* @__PURE__ */ a.jsx(
      ls,
      {
        milestoneName: o || e.name,
        onConfirm: N,
        onCancel: O
      }
    )
  ] });
}, Qt = (e) => {
  let n;
  const t = /* @__PURE__ */ new Set(), r = (m, f) => {
    const w = typeof m == "function" ? m(n) : m;
    if (!Object.is(w, n)) {
      const y = n;
      n = f ?? (typeof w != "object" || w === null) ? w : Object.assign({}, n, w), t.forEach((b) => b(n, y));
    }
  }, s = () => n, l = { setState: r, getState: s, getInitialState: () => h, subscribe: (m) => (t.add(m), () => t.delete(m)) }, h = n = e(r, s, l);
  return l;
}, ds = (e) => e ? Qt(e) : Qt, us = (e) => e;
function hs(e, n = us) {
  const t = Se.useSyncExternalStore(
    e.subscribe,
    Se.useCallback(() => n(e.getState()), [e, n]),
    Se.useCallback(() => n(e.getInitialState()), [e, n])
  );
  return Se.useDebugValue(t), t;
}
const Jt = (e) => {
  const n = ds(e), t = (r) => hs(n, r);
  return Object.assign(t, n), t;
}, fs = (e) => e ? Jt(e) : Jt, Ut = (e) => Symbol.iterator in e, Zt = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), en = (e, n) => {
  const t = e instanceof Map ? e : new Map(e.entries()), r = n instanceof Map ? n : new Map(n.entries());
  if (t.size !== r.size)
    return !1;
  for (const [s, i] of t)
    if (!r.has(s) || !Object.is(i, r.get(s)))
      return !1;
  return !0;
}, ms = (e, n) => {
  const t = e[Symbol.iterator](), r = n[Symbol.iterator]();
  let s = t.next(), i = r.next();
  for (; !s.done && !i.done; ) {
    if (!Object.is(s.value, i.value))
      return !1;
    s = t.next(), i = r.next();
  }
  return !!s.done && !!i.done;
};
function gs(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) ? !1 : Ut(e) && Ut(n) ? Zt(e) && Zt(n) ? en(e, n) : ms(e, n) : en(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  );
}
function Xe(e) {
  const n = Se.useRef(void 0);
  return (t) => {
    const r = e(t);
    return gs(n.current, r) ? n.current : n.current = r;
  };
}
const Ve = fs((e, n) => ({
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
  sidebarWidth: we.SIDEBAR_WIDTH,
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
      we.SIDEBAR_MIN_WIDTH,
      Math.min(t, we.SIDEBAR_MAX_WIDTH)
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
})), xs = () => Ve(
  Xe((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), ys = () => Ve(
  Xe((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), Gs = () => Ve(
  Xe((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), bs = () => Ve(
  Xe((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), ps = () => Ve(
  Xe((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), Xs = () => Ve(
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
    var o, l, h, m;
    let f;
    t.key && ((o = t.debug) != null && o.call(t)) && (f = Date.now());
    const w = e();
    if (!(w.length !== r.length || w.some((g, x) => r[x] !== g)))
      return s;
    r = w;
    let b;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (b = Date.now()), s = n(...w), t.key && ((h = t.debug) != null && h.call(t))) {
      const g = Math.round((Date.now() - f) * 100) / 100, x = Math.round((Date.now() - b) * 100) / 100, j = x / 16, N = (O, L) => {
        for (O = String(O); O.length < L; )
          O = " " + O;
        return O;
      };
      console.info(
        `%c⏱ ${N(x, 5)} /${N(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * j, 120)
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
function tn(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ws = (e, n) => Math.abs(e - n) < 1.01, vs = (e, n, t) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, s), t);
  };
}, nn = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, Ds = (e) => e, ks = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = n; s <= t; s++)
    r.push(s);
  return r;
}, js = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: l, height: h } = o;
    n({ width: Math.round(l), height: Math.round(h) });
  };
  if (s(nn(t)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((o) => {
    const l = () => {
      const h = o[0];
      if (h != null && h.borderBoxSize) {
        const m = h.borderBoxSize[0];
        if (m) {
          s({ width: m.inlineSize, height: m.blockSize });
          return;
        }
      }
      s(nn(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, rn = {
  passive: !0
}, sn = typeof window > "u" ? !0 : "onscrollend" in window, Es = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && sn ? () => {
  } : vs(
    r,
    () => {
      n(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (f) => () => {
    const { horizontal: w, isRtl: y } = e.options;
    s = w ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, i(), n(s, f);
  }, l = o(!0), h = o(!1);
  h(), t.addEventListener("scroll", l, rn);
  const m = e.options.useScrollendEvent && sn;
  return m && t.addEventListener("scrollend", h, rn), () => {
    t.removeEventListener("scroll", l), m && t.removeEventListener("scrollend", h);
  };
}, Ns = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ms = (e, {
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
class Ss {
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
        getItemKey: Ds,
        rangeExtractor: ks,
        onChange: () => {
        },
        measureElement: Ns,
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
        const h = i.get(
          l.lane
        );
        if (h == null || l.end > h.end ? i.set(l.lane, l) : l.end < h.end && s.set(l.lane, !0), s.size === this.options.lanes)
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
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const h = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const m = this.measurementsCache.slice(0, h);
        for (let f = h; f < t; f++) {
          const w = i(f), y = this.options.lanes === 1 ? m[f - 1] : this.getFurthestMeasurement(m, f), b = y ? y.end + this.options.gap : r + s, g = l.get(w), x = typeof g == "number" ? g : this.options.estimateSize(f), j = b + x, N = y ? y.lane : f % this.options.lanes;
          m[f] = {
            index: f,
            start: b,
            size: x,
            end: j,
            key: w,
            lane: N
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
      (t, r, s, i) => this.range = t.length > 0 && r > 0 ? Ws({
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
          const l = t[i], h = r[l];
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
        return tn(
          r[wn(
            0,
            r.length - 1,
            (s) => tn(r[s]).start,
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
        const f = this.getOffsetForIndex(t, m);
        if (!f) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [w, y] = f;
        this._scrollToOffset(w, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const b = this.getScrollOffset(), g = this.getOffsetForIndex(t, y);
          if (!g) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          ws(g[0], b) || h(y);
        });
      }, h = (m) => {
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
const wn = (e, n, t, r) => {
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
function Ws({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: r
}) {
  const s = e.length - 1, i = (h) => e[h].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = wn(
    0,
    s,
    i,
    t
  ), l = o;
  if (r === 1)
    for (; l < s && e[l].end < t + n; )
      l++;
  else if (r > 1) {
    const h = Array(r).fill(0);
    for (; l < s && h.some((f) => f < t + n); ) {
      const f = e[l];
      h[f.lane] = f.end, l++;
    }
    const m = Array(r).fill(t + n);
    for (; o >= 0 && m.some((f) => f >= t); ) {
      const f = e[o];
      m[f.lane] = f.start, o--;
    }
    o = Math.max(0, o - o % r), l = Math.min(s, l + (r - 1 - l % r));
  }
  return { startIndex: o, endIndex: l };
}
const an = typeof document < "u" ? gt.useLayoutEffect : gt.useEffect;
function Ts(e) {
  const n = gt.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? vn(n) : n(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = gt.useState(
    () => new Ss(t)
  );
  return r.setOptions(t), an(() => r._didMount(), []), an(() => r._willUpdate()), r;
}
function Os(e) {
  return Ts({
    observeElementRect: js,
    observeElementOffset: Es,
    scrollToFn: Ms,
    ...e
  });
}
const { ROW_HEIGHT: Cs } = we;
function Ps({
  containerRef: e,
  count: n,
  rowHeight: t = Cs,
  overscan: r = 5
}) {
  const s = Os({
    count: n,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: r
  }), i = s.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: xe(() => i.map((l) => ({
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
const _s = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function Vs({
  tasks: e,
  milestones: n = [],
  holidays: t = [],
  calendarSettings: r = _s,
  initialView: s = "MASTER",
  initialZoomLevel: i = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: o,
  onTaskUpdate: l,
  onTaskCreate: h,
  onTaskDelete: m,
  onTaskReorder: f,
  onTaskGroup: w,
  onTaskUngroup: y,
  onTaskMove: b,
  onViewChange: g,
  onMilestoneCreate: x,
  onMilestoneUpdate: j,
  onMilestoneDelete: N,
  onSave: O,
  onReset: L,
  hasUnsavedChanges: S,
  saveStatus: Y,
  className: A,
  style: C
}) {
  const { viewMode: R, activeCPId: $, zoomLevel: ne } = xs(), { setViewMode: G, setZoomLevel: K } = ys(), { sidebarWidth: F, setSidebarWidth: J } = ps(), { expandedTaskIds: te, toggleTask: ce, expandAll: Q } = bs(), k = ie(null), v = ie(null), z = ie(null), u = ie(!1), E = ie(!1), [T, I] = V(!1), [oe, re] = V(!1), [X, le] = V(!1), ye = W(() => {
    re(!0);
  }, []), ke = W(() => {
    re(!1);
  }, []), be = W(() => {
    le(!0);
  }, []), _e = W(() => {
    le(!1);
  }, []), [Re, q] = V(null), [at, fe] = V(!1), [Be, We] = V(!1), it = W((d) => {
    q(d), We(!1), fe(!0);
  }, []), wt = W(() => {
    const d = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    q(d), We(!0), fe(!0);
  }, []), pe = W(() => {
    fe(!1), q(null), We(!1);
  }, []), ot = W((d) => {
    Be && x ? x(d) : j && j(d), pe();
  }, [Be, x, j, pe]), lt = W((d) => {
    N && N(d), pe();
  }, [N, pe]), qe = ie(!1), Ie = xe(() => e.map((d) => d.id), [e]);
  se(() => {
    qe.current || (qe.current = !0, G(s), K(i), o && o.length > 0 ? Q(o) : Ie.length > 0 && Q(Ie));
  }, [Ie, o, s, i, G, K, Q]);
  const Ke = ie(/* @__PURE__ */ new Set());
  se(() => {
    const d = new Set(e.map((M) => M.id)), c = Ke.current, p = [];
    e.forEach((M) => {
      M.type === "GROUP" && !c.has(M.id) && p.push(M.id);
    }), p.length > 0 && Q(p), Ke.current = d;
  }, [e, Q]);
  const je = xe(() => {
    if (R === "MASTER") {
      const d = [], c = (p, M = 0) => {
        e.forEach((_) => {
          _.wbsLevel === 1 && _.parentId === p && (p === null || te.has(p)) && (d.push(_), _.type === "GROUP" && c(_.id, M + 1));
        });
      };
      return c(null), d;
    } else {
      const d = [], c = (p) => {
        e.forEach((M) => {
          M.wbsLevel === 2 && M.parentId === p && (p === $ || te.has(p)) && (d.push(M), M.type === "GROUP" && c(M.id));
        });
      };
      return c($), d;
    }
  }, [e, R, $, te]), { virtualRows: Qe, totalHeight: Te } = Ps({
    containerRef: z,
    count: je.length
  });
  se(() => {
    const d = v.current, c = z.current;
    if (!d || !c) return;
    const p = () => {
      u.current || (u.current = !0, c.scrollTop = d.scrollTop, requestAnimationFrame(() => {
        u.current = !1;
      }));
    }, M = () => {
      u.current || (u.current = !0, d.scrollTop = c.scrollTop, requestAnimationFrame(() => {
        u.current = !1;
      }));
    };
    return d.addEventListener("scroll", p), c.addEventListener("scroll", M), () => {
      d.removeEventListener("scroll", p), c.removeEventListener("scroll", M);
    };
  }, []);
  const [Ae, ze] = V(null), ct = W((d) => {
    if (d.detail >= 2) return;
    d.preventDefault(), E.current = !0, I(!0);
    const c = d.clientX, p = F, M = (U) => {
      if (!E.current) return;
      const P = U.clientX - c;
      J(p + P);
    }, _ = () => {
      E.current = !1, I(!1), document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", _);
    };
    document.addEventListener("mousemove", M), document.addEventListener("mouseup", _);
  }, [F, J]), dt = W(() => {
    J(Ae !== null ? Ae : we.SIDEBAR_WIDTH);
  }, [Ae, J]), Le = W((d, c) => {
    G(d, c), g == null || g(d, c);
  }, [G, g]), Oe = W((d) => {
    const c = z.current;
    if (!c) return;
    const p = yt[ne].pixelsPerDay, { minDate: M } = bn(e, n, 60), _ = nt(d, M, p);
    c.scrollLeft = Math.max(0, _ - 50);
  }, [ne, e, n]), Fe = W(() => {
    if (R === "MASTER") {
      const d = je.filter((c) => c.type === "CP");
      if (d.length > 0) {
        const c = d.reduce(
          (M, _) => M.startDate < _.startDate ? M : _
        ), p = new Date(c.startDate);
        p.setDate(p.getDate() - 5), Oe(p);
      }
    } else if (R === "DETAIL" && $) {
      const d = e.filter((c) => c.parentId === $);
      if (d.length > 0) {
        const c = d.reduce(
          (M, _) => M.startDate < _.startDate ? M : _
        ), p = new Date(c.startDate);
        p.setDate(p.getDate() - 5), Oe(p);
      }
    }
  }, [R, $, e, je, Oe]), ut = W((d) => {
    R === "MASTER" && d.type === "CP" && Le("DETAIL", d.id);
  }, [R, Le]);
  se(() => {
    if (R === "DETAIL" && $) {
      const d = setTimeout(() => {
        Fe();
      }, 100);
      return () => clearTimeout(d);
    }
  }, [R, $, Fe]);
  const ht = W(async (d) => {
    if (l)
      try {
        const c = e.find((M) => M.id === d.taskId);
        if (!c || !c.task) return;
        const p = {
          ...c,
          startDate: d.newStartDate,
          endDate: d.newEndDate,
          task: {
            ...c.task,
            indirectWorkDaysPre: d.newIndirectWorkDaysPre,
            indirectWorkDaysPost: d.newIndirectWorkDaysPost
          }
        };
        await l(p);
      } catch (c) {
        console.error("Failed to update task:", c);
      }
  }, [e, l]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: k,
      className: `flex h-full w-full flex-col bg-gray-50 ${A || ""}`,
      style: C,
      children: [
        /* @__PURE__ */ a.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-3 shrink-0", children: R === "DETAIL" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => Le("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            h && !oe && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: ye,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            h && !X && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: be,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            x && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: wt,
                className: "flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors",
                title: "새 마일스톤 추가",
                children: "+ 마일스톤"
              }
            ),
            X && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Fe,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: R === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (R === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((d) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => K(d),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${ne === d ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: yt[d].label
              },
              d
            )) }),
            /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              he(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            O && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: O,
                disabled: !S || Y === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${S ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: Y === "saving" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
            L && /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: L,
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
              style: { width: F },
              children: /* @__PURE__ */ a.jsx(
                yn,
                {
                  ref: v,
                  tasks: je,
                  allTasks: e,
                  viewMode: R,
                  expandedIds: te,
                  onToggle: ce,
                  onTaskClick: ut,
                  onTaskUpdate: l,
                  onTaskCreate: h,
                  onTaskReorder: f,
                  onTaskGroup: w,
                  onTaskUngroup: y,
                  onTaskDelete: m,
                  onTaskMove: b,
                  activeCPId: $,
                  virtualRows: Qe,
                  totalHeight: Te,
                  onTotalWidthChange: ze,
                  isAddingTask: oe,
                  onCancelAddTask: ke,
                  isAddingCP: X,
                  onCancelAddCP: _e
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${T ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: ct,
              onDoubleClick: dt,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsx(
            pn,
            {
              ref: z,
              tasks: je,
              milestones: n,
              viewMode: R,
              zoomLevel: ne,
              holidays: t,
              calendarSettings: r,
              onTaskUpdate: l,
              onBarDrag: ht,
              onMilestoneUpdate: j,
              onMilestoneDoubleClick: it,
              virtualRows: Qe,
              totalHeight: Te
            }
          ) }),
          T && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ a.jsx(
          cs,
          {
            milestone: Re,
            isOpen: at,
            isNew: Be,
            onClose: pe,
            onSave: ot,
            onDelete: lt
          }
        )
      ]
    }
  );
}
export {
  Me as GANTT_COLORS,
  we as GANTT_LAYOUT,
  Vs as GanttChart,
  yn as GanttSidebar,
  pn as GanttTimeline,
  yt as ZOOM_CONFIG,
  Kt as addCalendarDays,
  es as addWorkingDays,
  bn as calculateDateRange,
  Ls as calculateDualCalendarDates,
  nt as dateToX,
  Fs as getAnchorDate,
  Ys as getDateRangeWidth,
  $s as getPixelsPerDay,
  Ge as isHoliday,
  As as isWeekend,
  zs as subtractWorkingDays,
  Xs as useGanttDrag,
  bs as useGanttExpansion,
  Gs as useGanttSelection,
  ps as useGanttSidebar,
  Ve as useGanttStore,
  ys as useGanttViewActions,
  xs as useGanttViewState,
  Ps as useGanttVirtualization,
  Hs as xToDate
};
