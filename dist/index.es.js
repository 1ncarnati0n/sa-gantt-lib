"use client";
var Za = Object.defineProperty;
var ei = (e, t, r) => t in e ? Za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Mr = (e, t, r) => ei(e, typeof t != "symbol" ? t + "" : t, r);
import * as Ur from "react";
import He, { useState as te, forwardRef as un, createElement as Kn, useRef as be, useEffect as fe, useCallback as W, useMemo as re, memo as xr, Component as ti, createContext as Fo, useContext as fn } from "react";
import br, { flushSync as ri } from "react-dom";
var Xn = { exports: {} }, Zt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function ni() {
  if (_s) return Zt;
  _s = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Zt.Fragment = t, Zt.jsx = r, Zt.jsxs = r, Zt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function si() {
  return Ps || (Ps = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === P ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case k:
          return "Suspense";
        case T:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case g:
            return "Portal";
          case v:
            return S.displayName || "Context";
          case D:
            return (S._context.displayName || "Context") + ".Consumer";
          case w:
            var A = S.render;
            return S = S.displayName, S || (S = A.displayName || A.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case E:
            return A = S.displayName || null, A !== null ? A : e(S.type) || "Memo";
          case j:
            A = S._payload, S = S._init;
            try {
              return e(S(A));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function r(S) {
      try {
        t(S);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var M = A.error, F = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return M.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(S);
      }
    }
    function n(S) {
      if (S === p) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === j)
        return "<...>";
      try {
        var A = e(S);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var S = L.A;
      return S === null ? null : S.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if ($.call(S, "key")) {
        var A = Object.getOwnPropertyDescriptor(S, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, A) {
      function M() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: M,
        configurable: !0
      });
    }
    function c() {
      var S = e(this.type);
      return U[S] || (U[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function f(S, A, M, F, I, Y) {
      var G = M.ref;
      return S = {
        $$typeof: u,
        type: S,
        key: A,
        props: M,
        _owner: F
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function d(S, A, M, F, I, Y) {
      var G = A.children;
      if (G !== void 0)
        if (F)
          if (R(G)) {
            for (F = 0; F < G.length; F++)
              y(G[F]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(G);
      if ($.call(A, "key")) {
        G = e(S);
        var q = Object.keys(A).filter(function(de) {
          return de !== "key";
        });
        F = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", X[G + F] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          G,
          q,
          G
        ), X[G + F] = !0);
      }
      if (G = null, M !== void 0 && (r(M), G = "" + M), i(A) && (r(A.key), G = "" + A.key), "key" in A) {
        M = {};
        for (var Q in A)
          Q !== "key" && (M[Q] = A[Q]);
      } else M = A;
      return G && l(
        M,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), f(
        S,
        G,
        M,
        s(),
        I,
        Y
      );
    }
    function y(S) {
      h(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === j && (S._payload.status === "fulfilled" ? h(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function h(S) {
      return typeof S == "object" && S !== null && S.$$typeof === u;
    }
    var m = He, u = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), L = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, R = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var K, U = {}, C = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), V = H(n(o)), X = {};
    er.Fragment = p, er.jsx = function(S, A, M) {
      var F = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        S,
        A,
        M,
        !1,
        F ? Error("react-stack-top-frame") : C,
        F ? H(n(S)) : V
      );
    }, er.jsxs = function(S, A, M) {
      var F = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        S,
        A,
        M,
        !0,
        F ? Error("react-stack-top-frame") : C,
        F ? H(n(S)) : V
      );
    };
  }()), er;
}
process.env.NODE_ENV === "production" ? Xn.exports = ni() : Xn.exports = si();
var a = Xn.exports;
const $o = 6048e5, oi = 864e5, Bo = 6e4, Go = 36e5, Rs = Symbol.for("constructDateFrom");
function rt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Rs in e ? e[Rs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ee(e, t) {
  return rt(t || e, e);
}
function ne(e, t, r) {
  const n = Ee(e, r == null ? void 0 : r.in);
  return isNaN(t) ? rt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Vo(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getDay() === 6;
}
function Yo(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getDay() === 0;
}
let ai = {};
function Dr() {
  return ai;
}
function Rt(e, t) {
  var l, c, f, d;
  const r = Dr(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((d = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? 0, s = Ee(e, t == null ? void 0 : t.in), o = s.getDay(), i = (o < n ? 7 : 0) + o - n;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function Kr(e, t) {
  return Rt(e, { ...t, weekStartsOn: 1 });
}
function Uo(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in), n = r.getFullYear(), s = rt(r, 0);
  s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const o = Kr(s), i = rt(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const l = Kr(i);
  return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= l.getTime() ? n : n - 1;
}
function Os(e) {
  const t = Ee(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Kt(e, ...t) {
  const r = rt.bind(
    null,
    e || t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Ne(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Ko(e, t, r) {
  const [n, s] = Kt(
    r == null ? void 0 : r.in,
    e,
    t
  ), o = Ne(n), i = Ne(s), l = +o - Os(o), c = +i - Os(i);
  return Math.round((l - c) / oi);
}
function ii(e, t) {
  const r = Uo(e, t), n = rt(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Kr(n);
}
function vr(e, t, r) {
  const [n, s] = Kt(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +Ne(n) == +Ne(s);
}
function li(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ci(e) {
  return !(!li(e) && typeof e != "number" || isNaN(+Ee(e)));
}
function $e(e, t, r) {
  const [n, s] = Kt(
    r == null ? void 0 : r.in,
    e,
    t
  ), o = As(n, s), i = Math.abs(
    Ko(n, s)
  );
  n.setDate(n.getDate() - o * i);
  const l = +(As(n, s) === -o), c = o * (i - l);
  return c === 0 ? 0 : c;
}
function As(e, t) {
  const r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function di(e, t) {
  const [r, n] = Kt(e, t.start, t.end);
  return { start: r, end: n };
}
function ui(e, t) {
  const { start: r, end: n } = di(t == null ? void 0 : t.in, e);
  let s = +r > +n;
  const o = s ? +r : +n, i = s ? n : r;
  i.setHours(0, 0, 0, 0);
  let l = 1;
  const c = [];
  for (; +i <= o; )
    c.push(rt(r, i)), i.setDate(i.getDate() + l), i.setHours(0, 0, 0, 0);
  return s ? c.reverse() : c;
}
function fi(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function hi(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const mi = {
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
}, gi = (e, t, r) => {
  let n;
  const s = mi[e];
  return typeof s == "string" ? n = s : t === 1 ? n = s.one : n = s.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Yt(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const yi = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pi = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xi = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, bi = {
  date: Yt({
    formats: yi,
    defaultWidth: "full"
  }),
  time: Yt({
    formats: pi,
    defaultWidth: "full"
  }),
  dateTime: Yt({
    formats: xi,
    defaultWidth: "full"
  })
}, Di = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vi = (e, t, r, n) => Di[e];
function dt(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let s;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = r != null && r.width ? String(r.width) : i;
      s = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      s = e.values[l] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[o];
  };
}
const wi = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ki = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ei = {
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
}, Ti = {
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
}, Si = {
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
}, Ci = {
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
}, Ii = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Mi = {
  ordinalNumber: Ii,
  era: dt({
    values: wi,
    defaultWidth: "wide"
  }),
  quarter: dt({
    values: ki,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: dt({
    values: Ei,
    defaultWidth: "wide"
  }),
  day: dt({
    values: Ti,
    defaultWidth: "wide"
  }),
  dayPeriod: dt({
    values: Si,
    defaultWidth: "wide",
    formattingValues: Ci,
    defaultFormattingWidth: "wide"
  })
};
function ut(e) {
  return (t, r = {}) => {
    const n = r.width, s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = t.match(s);
    if (!o)
      return null;
    const i = o[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? ji(l, (y) => y.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Ni(l, (y) => y.test(i))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(c) : c, f = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(f)
    ) : f;
    const d = t.slice(i.length);
    return { value: f, rest: d };
  };
}
function Ni(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function ji(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Xo(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const s = n[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const l = t.slice(s.length);
    return { value: i, rest: l };
  };
}
const Wi = /^(\d+)(th|st|nd|rd)?/i, _i = /\d+/i, Pi = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ri = {
  any: [/^b/i, /^(a|c)/i]
}, Oi = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ai = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Li = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hi = {
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
}, zi = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fi = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $i = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Bi = {
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
}, Gi = {
  ordinalNumber: Xo({
    matchPattern: Wi,
    parsePattern: _i,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ut({
    matchPatterns: Pi,
    defaultMatchWidth: "wide",
    parsePatterns: Ri,
    defaultParseWidth: "any"
  }),
  quarter: ut({
    matchPatterns: Oi,
    defaultMatchWidth: "wide",
    parsePatterns: Ai,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ut({
    matchPatterns: Li,
    defaultMatchWidth: "wide",
    parsePatterns: Hi,
    defaultParseWidth: "any"
  }),
  day: ut({
    matchPatterns: zi,
    defaultMatchWidth: "wide",
    parsePatterns: Fi,
    defaultParseWidth: "any"
  }),
  dayPeriod: ut({
    matchPatterns: $i,
    defaultMatchWidth: "any",
    parsePatterns: Bi,
    defaultParseWidth: "any"
  })
}, Vi = {
  code: "en-US",
  formatDistance: gi,
  formatLong: bi,
  formatRelative: vi,
  localize: Mi,
  match: Gi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Yi(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in);
  return Ko(r, hi(r)) + 1;
}
function Ui(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in), n = +Kr(r) - +ii(r);
  return Math.round(n / $o) + 1;
}
function qo(e, t) {
  var d, y, h, m;
  const r = Ee(e, t == null ? void 0 : t.in), n = r.getFullYear(), s = Dr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((y = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : y.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((m = (h = s.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = rt((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, o), i.setHours(0, 0, 0, 0);
  const l = Rt(i, t), c = rt((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, o), c.setHours(0, 0, 0, 0);
  const f = Rt(c, t);
  return +r >= +l ? n + 1 : +r >= +f ? n : n - 1;
}
function Ki(e, t) {
  var l, c, f, d;
  const r = Dr(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, s = qo(e, t), o = rt((t == null ? void 0 : t.in) || e, 0);
  return o.setFullYear(s, 0, n), o.setHours(0, 0, 0, 0), Rt(o, t);
}
function Xi(e, t) {
  const r = Ee(e, t == null ? void 0 : t.in), n = +Rt(r, t) - +Ki(r, t);
  return Math.round(n / $o) + 1;
}
function ye(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const St = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return ye(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : ye(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ye(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ye(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ye(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ye(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ye(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), s = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return ye(s, t.length);
  }
}, $t = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ls = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), s = n > 0 ? n : 1 - n;
      return r.ordinalNumber(s, { unit: "year" });
    }
    return St.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const s = qo(e, n), o = s > 0 ? s : 1 - s;
    if (t === "YY") {
      const i = o % 100;
      return ye(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(o, { unit: "year" }) : ye(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Uo(e);
    return ye(r, t.length);
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
  u: function(e, t) {
    const r = e.getFullYear();
    return ye(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return ye(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return ye(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return St.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return ye(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const s = Xi(e, n);
    return t === "wo" ? r.ordinalNumber(s, { unit: "week" }) : ye(s, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Ui(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ye(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : St.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Yi(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : ye(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const s = e.getDay(), o = (s - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return ye(o, 2);
      case "eo":
        return r.ordinalNumber(o, { unit: "day" });
      case "eee":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const s = e.getDay(), o = (s - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return ye(o, t.length);
      case "co":
        return r.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return r.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), s = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(s);
      case "ii":
        return ye(s, t.length);
      case "io":
        return r.ordinalNumber(s, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const s = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let s;
    switch (n === 12 ? s = $t.noon : n === 0 ? s = $t.midnight : s = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let s;
    switch (n >= 17 ? s = $t.evening : n >= 12 ? s = $t.afternoon : n >= 4 ? s = $t.morning : s = $t.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return St.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : St.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : ye(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : ye(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : St.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : St.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return St.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return zs(n);
      case "XXXX":
      case "XX":
        return Pt(n);
      case "XXXXX":
      case "XXX":
      default:
        return Pt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return zs(n);
      case "xxxx":
      case "xx":
        return Pt(n);
      case "xxxxx":
      case "xxx":
      default:
        return Pt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Hs(n, ":");
      case "OOOO":
      default:
        return "GMT" + Pt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Hs(n, ":");
      case "zzzz":
      default:
        return "GMT" + Pt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return ye(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return ye(+e, t.length);
  }
};
function Hs(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), s = Math.trunc(n / 60), o = n % 60;
  return o === 0 ? r + String(s) : r + String(s) + t + ye(o, 2);
}
function zs(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ye(Math.abs(e) / 60, 2) : Pt(e, t);
}
function Pt(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), s = ye(Math.trunc(n / 60), 2), o = ye(n % 60, 2);
  return r + s + t + o;
}
const Fs = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Qo = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, qi = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], s = r[2];
  if (!s)
    return Fs(e, t);
  let o;
  switch (n) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Fs(n, t)).replace("{{time}}", Qo(s, t));
}, Qi = {
  p: Qo,
  P: qi
}, Ji = /^D+$/, Zi = /^Y+$/, el = ["D", "DD", "YY", "YYYY"];
function tl(e) {
  return Ji.test(e);
}
function rl(e) {
  return Zi.test(e);
}
function nl(e, t, r) {
  const n = sl(e, t, r);
  if (console.warn(n), el.includes(e)) throw new RangeError(n);
}
function sl(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ol = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, al = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, il = /^'([^]*?)'?$/, ll = /''/g, cl = /[a-zA-Z]/;
function xe(e, t, r) {
  var d, y, h, m, u, g, p, b;
  const n = Dr(), s = (r == null ? void 0 : r.locale) ?? n.locale ?? Vi, o = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((y = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : y.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = (r == null ? void 0 : r.weekStartsOn) ?? ((g = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : g.weekStartsOn) ?? n.weekStartsOn ?? ((b = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = Ee(e, r == null ? void 0 : r.in);
  if (!ci(l))
    throw new RangeError("Invalid time value");
  let c = t.match(al).map((x) => {
    const D = x[0];
    if (D === "p" || D === "P") {
      const v = Qi[D];
      return v(x, s.formatLong);
    }
    return x;
  }).join("").match(ol).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const D = x[0];
    if (D === "'")
      return { isToken: !1, value: dl(x) };
    if (Ls[D])
      return { isToken: !0, value: x };
    if (D.match(cl))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: x };
  });
  s.localize.preprocessor && (c = s.localize.preprocessor(l, c));
  const f = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: s
  };
  return c.map((x) => {
    if (!x.isToken) return x.value;
    const D = x.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && rl(D) || !(r != null && r.useAdditionalDayOfYearTokens) && tl(D)) && nl(D, t, String(e));
    const v = Ls[D[0]];
    return v(l, D, s.localize, f);
  }).join("");
}
function dl(e) {
  const t = e.match(il);
  return t ? t[1].replace(ll, "'") : e;
}
function ul(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getDate();
}
function hn(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getDay();
}
function $s(e, t) {
  var c, f, d, y;
  const r = Dr(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((y = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = ul(Ee(e, t == null ? void 0 : t.in));
  if (isNaN(s)) return NaN;
  const o = hn(fi(e, t));
  let i = n - o;
  i <= 0 && (i += 7);
  const l = s - i;
  return Math.ceil(l / 7) + 1;
}
function wn(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getFullYear();
}
function fl(e, t, r) {
  const [n, s] = Kt(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +Rt(n, r) == +Rt(s, r);
}
function hl(e, t, r) {
  const [n, s] = Kt(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth();
}
function bt(e, t) {
  const r = () => rt(t == null ? void 0 : t.in, NaN), s = pl(e);
  let o;
  if (s.date) {
    const f = xl(s.date, 2);
    o = bl(f.restDateString, f.year);
  }
  if (!o || isNaN(+o)) return r();
  const i = +o;
  let l = 0, c;
  if (s.time && (l = Dl(s.time), isNaN(l)))
    return r();
  if (s.timezone) {
    if (c = vl(s.timezone), isNaN(c)) return r();
  } else {
    const f = new Date(i + l), d = Ee(0, t == null ? void 0 : t.in);
    return d.setFullYear(
      f.getUTCFullYear(),
      f.getUTCMonth(),
      f.getUTCDate()
    ), d.setHours(
      f.getUTCHours(),
      f.getUTCMinutes(),
      f.getUTCSeconds(),
      f.getUTCMilliseconds()
    ), d;
  }
  return Ee(i + l + c, t == null ? void 0 : t.in);
}
const Nr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, ml = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, gl = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, yl = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function pl(e) {
  const t = {}, r = e.split(Nr.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], Nr.timeZoneDelimiter.test(t.date) && (t.date = e.split(Nr.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const s = Nr.timezone.exec(n);
    s ? (t.time = n.replace(s[1], ""), t.timezone = s[1]) : t.time = n;
  }
  return t;
}
function xl(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const s = n[1] ? parseInt(n[1]) : null, o = n[2] ? parseInt(n[2]) : null;
  return {
    year: o === null ? s : o * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function bl(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(ml);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], s = tr(r[1]), o = tr(r[2]) - 1, i = tr(r[3]), l = tr(r[4]), c = tr(r[5]) - 1;
  if (n)
    return Sl(t, l, c) ? wl(t, l, c) : /* @__PURE__ */ new Date(NaN);
  {
    const f = /* @__PURE__ */ new Date(0);
    return !El(t, o, i) || !Tl(t, s) ? /* @__PURE__ */ new Date(NaN) : (f.setUTCFullYear(t, o, Math.max(s, i)), f);
  }
}
function tr(e) {
  return e ? parseInt(e) : 1;
}
function Dl(e) {
  const t = e.match(gl);
  if (!t) return NaN;
  const r = kn(t[1]), n = kn(t[2]), s = kn(t[3]);
  return Cl(r, n, s) ? r * Go + n * Bo + s * 1e3 : NaN;
}
function kn(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function vl(e) {
  if (e === "Z") return 0;
  const t = e.match(yl);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), s = t[3] && parseInt(t[3]) || 0;
  return Il(n, s) ? r * (n * Go + s * Bo) : NaN;
}
function wl(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const s = n.getUTCDay() || 7, o = (t - 1) * 7 + r + 1 - s;
  return n.setUTCDate(n.getUTCDate() + o), n;
}
const kl = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Jo(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function El(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (kl[t] || (Jo(e) ? 29 : 28));
}
function Tl(e, t) {
  return t >= 1 && t <= (Jo(e) ? 366 : 365);
}
function Sl(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function Cl(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Il(e, t) {
  return t >= 0 && t <= 59;
}
const je = (e, t = [], r) => !!(!r.workOnSaturdays && Vo(e) || !r.workOnSundays && Yo(e) || !r.workOnHolidays && t.some((n) => vr(n, e))), oh = (e) => Vo(e) || Yo(e), Zo = (e, t, r = [], n) => {
  const s = [];
  let o = Ne(new Date(e));
  const i = Ne(new Date(t));
  let l = 0;
  for (; o <= i; )
    je(o, r, n) && s.push({ date: new Date(o), offset: l }), o = ne(o, 1), l++;
  return s;
}, hs = (e, t, r, n) => {
  let s = new Date(e);
  const o = t === "right" ? 1 : -1;
  for (; je(s, r, n); )
    s = ne(s, o);
  return s;
}, Xt = (e, t, r = [], n) => {
  let s = new Date(e);
  if (t === 0) return s;
  if (t < 0)
    return ea(s, Math.abs(t), r, n);
  let o = 0;
  const i = Math.ceil(t);
  for (; je(s, r, n); )
    s = ne(s, 1);
  for (; o < i; )
    je(s, r, n) || o++, o < i && (s = ne(s, 1));
  return s;
}, ea = (e, t, r = [], n) => {
  let s = new Date(e), o = 0;
  if (t <= 0) return s;
  for (; o < t; )
    s = ne(s, -1), je(s, r, n) || o++;
  return s;
}, qn = (e, t, r = [], n) => {
  if (vr(e, t)) return 0;
  const s = e < t;
  let o = 0, i = new Date(e);
  const l = new Date(t);
  if (s)
    for (; i < l; )
      je(i, r, n) || o++, i = ne(i, 1);
  else
    for (; i > l; )
      i = ne(i, -1), je(i, r, n) || o--;
  return o;
}, Bs = (e, t, r = [], n) => t === 0 ? new Date(e) : t > 0 ? Xt(e, t + 1, r, n) : ea(e, Math.abs(t), r, n), Gs = (e, t) => {
  if (t <= 0) return e;
  const r = Math.ceil(t);
  return ne(e, r - 1);
}, mn = {
  workOnSaturdays: !0,
  workOnSundays: !1,
  workOnHolidays: !1
}, ms = (e, t = mn) => e ? {
  workOnSaturdays: e.workOnSaturdays ?? t.workOnSaturdays,
  workOnSundays: e.workOnSundays ?? t.workOnSundays,
  workOnHolidays: e.workOnHolidays ?? t.workOnHolidays
} : t, Ml = (e, t = [], r) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: s, indirectWorkDaysPost: o } = e.task, i = Ne(new Date(e.startDate));
  let l = i, c, f;
  s > 0 && (c = l, f = Gs(l, s), l = ne(f, 1));
  let d = l, y = d;
  if (n > 0) {
    for (; je(d, t, r); )
      d = ne(d, 1);
    y = Xt(d, n, t, r), l = ne(y, 1);
  } else s === 0 && (d = i, y = i);
  let h, m;
  return o > 0 && (h = l, m = Gs(l, o)), {
    startDate: c || d,
    endDate: m || y,
    netWorkStartDate: d,
    netWorkEndDate: y,
    indirectPreStartDate: c,
    indirectPreEndDate: f,
    indirectPostStartDate: h,
    indirectPostEndDate: m
  };
}, ah = (e, t, r) => {
  switch (t) {
    case "START":
      return r.startDate;
    case "NET_WORK_START":
      return r.netWorkStartDate;
    case "NET_WORK_END":
      return r.netWorkEndDate;
    case "END":
      return r.endDate;
    default:
      return r.endDate;
  }
}, _ = {
  // Level 1 Colors (공구 공정표)
  vermilion: "var(--gantt-vermilion)",
  // 작업일수 (Work Days)
  teal: "var(--gantt-teal)",
  // 비작업일수 (Non-Work Days)
  // Level 2 Colors (주공정표)
  red: "var(--gantt-red)",
  // 순작업일 (Net Work)
  blue: "var(--gantt-blue)",
  // 간접작업일 (Indirect Work)
  // Milestone Colors
  milestone: "var(--gantt-milestone)",
  // Master 마일스톤
  milestoneDetail: "var(--gantt-milestone-detail)",
  // Detail 마일스톤
  milestoneDetailHover: "var(--gantt-milestone-detail-hover)",
  // UI Element Colors
  dependency: "var(--gantt-dependency)",
  // 연결선
  grid: "var(--gantt-grid)",
  // 그리드 라인
  gridDark: "var(--gantt-grid-dark)",
  // 그리드 라인 (진한)
  focus: "var(--gantt-focus)",
  // 포커스 색상
  success: "var(--gantt-success)",
  // 성공/확인 색상
  // Background Colors
  bgPrimary: "var(--gantt-bg-primary)",
  bgSecondary: "var(--gantt-bg-secondary)",
  bgHover: "var(--gantt-bg-hover)",
  bgSelected: "var(--gantt-bg-selected)",
  // Text Colors
  textPrimary: "var(--gantt-text-primary)",
  textSecondary: "var(--gantt-text-secondary)",
  textMuted: "var(--gantt-text-muted)",
  textInverse: "var(--gantt-text-inverse)",
  // Border Colors
  border: "var(--gantt-border)",
  borderLight: "var(--gantt-border-light)",
  borderFocus: "var(--gantt-border-focus)",
  // Weekend/Holiday Background
  weekend: "var(--gantt-weekend-bg)",
  holiday: "var(--gantt-holiday-bg)",
  sunday: "var(--gantt-sunday-bg)",
  // Summary Bar
  summaryBar: "var(--gantt-summary-bar)",
  summaryProgress: "var(--gantt-summary-progress)",
  // Anchor Points
  anchorFill: "var(--gantt-anchor-fill)",
  anchorStroke: "var(--gantt-anchor-stroke)",
  anchorHover: "var(--gantt-anchor-hover)",
  // Tooltip
  tooltipBg: "var(--gantt-tooltip-bg)",
  tooltipText: "var(--gantt-tooltip-text)",
  // Drag Preview
  dragPreview: "var(--gantt-drag-preview)",
  // Badge Colors (Block/Group 구분용)
  badgeBlock: "#e5e7eb",
  // Block 배지 배경 (light gray)
  badgeBlockText: "#1f2937",
  // Block 배지 텍스트 (dark gray)
  badgeBlockBorder: "#374151",
  // Block 배지 테두리
  badgeGroup: "#b0b3b8"
  // Group 배지 배경 (medium gray)
};
function ih(e) {
  return _[e];
}
const lh = {
  // Level 1 Colors (공구 공정표)
  vermilion: "#E34234",
  teal: "#008080",
  // Level 2 Colors (주공정표)
  red: "#FF5252",
  blue: "#448AFF",
  // Common Colors
  milestone: "#4B5563",
  milestoneDetail: "#F59E0B",
  dependency: "#9CA3AF",
  grid: "#E5E7EB",
  focus: "#3B82F6"
}, ce = {
  ROW_HEIGHT: 30,
  ROW_HEIGHT_COMPACT: 12,
  /** 그룹행 컴팩트 높이 (30% 감소: 30px → 21px) */
  GROUP_ROW_HEIGHT_COMPACT: 21,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 9,
  BAR_HEIGHT_COMPACT: 4,
  SIDEBAR_WIDTH: 500,
  SIDEBAR_MIN_WIDTH: 300,
  SIDEBAR_MAX_WIDTH: 800,
  SIDEBAR_MASTER_WIDTH: 500,
  SIDEBAR_DETAIL_WIDTH: 600,
  SIDEBAR_UNIFIED_WIDTH: 450,
  /** 뷰 전환 후 스크롤 대기 시간 (ms) */
  SCROLL_DELAY_MS: 100,
  /** SVG 하단 여백 (스크롤 시 종속선 계산용) */
  BOTTOM_PADDING: 100
};
function Nl(e) {
  return {
    rowHeight: e ? ce.ROW_HEIGHT_COMPACT : ce.ROW_HEIGHT,
    barHeight: e ? ce.BAR_HEIGHT_COMPACT : ce.BAR_HEIGHT
  };
}
const Xr = [
  { id: "name", label: "CP명", width: 200, minWidth: 100 },
  { id: "total", label: "총 공기", width: 90, minWidth: 60 },
  { id: "workDays", label: "작업일수", width: 90, minWidth: 60 },
  { id: "nonWorkDays", label: "비작업일수", width: 90, minWidth: 60 }
], qr = [
  { id: "name", label: "단위공정명", width: 180, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 65, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 65, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 65, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 95, minWidth: 75 },
  { id: "endDate", label: "종료일", width: 95, minWidth: 75 }
], Qr = [
  { id: "name", label: "작업명", width: 220, minWidth: 120 },
  { id: "duration", label: "기간", width: 70, minWidth: 50 },
  { id: "startDate", label: "시작일", width: 80, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 80, minWidth: 70 }
], wr = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, Nt = {
  /** 기본 앵커 반지름 */
  RADIUS: 1.5,
  /** 활성화된 앵커 반지름 (연결 시작점) */
  RADIUS_ACTIVE: 2.5,
  /** 연결된 앵커 반지름 */
  RADIUS_CONNECTED: 2,
  /** 클릭 영역 반지름 (터치 친화적) */
  HIT_AREA: 10,
  /** 앵커 스트로크 너비 */
  STROKE_WIDTH: 1.5
}, Jr = {
  /** 양쪽 끝 드래그 핸들 너비 */
  HANDLE_WIDTH: 8,
  /** 내부 경계 드래그 핸들 너비 */
  BOUNDARY_HANDLE_WIDTH: 6,
  /** 종속성 경로 - 위로 갈 때 드롭다운 오프셋 */
  DROP_DOWN_OFFSET: 10,
  /** 종속성 경로 - 측면 X 오프셋 */
  PATH_OFFSET_X: 15
}, ta = {
  /** 요약 바 높이 */
  BAR_HEIGHT: 8,
  /** 수직 오프셋 (바를 아래로 배치) */
  VERTICAL_OFFSET: 4
}, gs = {
  /** 기본 스트로크 너비 */
  DEFAULT: 1.5,
  /** 호버 상태 스트로크 너비 */
  HOVER: 2,
  /** 선택 상태 스트로크 너비 */
  SELECTED: 2.5
}, ra = {
  /** 기본 앵커 반지름 */
  RADIUS: 1,
  /** 활성화된 앵커 반지름 (연결 시작점) */
  RADIUS_ACTIVE: 1.5,
  /** 연결된 앵커 반지름 */
  RADIUS_CONNECTED: 1.25,
  /** 앵커 스트로크 너비 */
  STROKE_WIDTH: 0.75
}, ys = {
  /** 기본 스트로크 너비 */
  DEFAULT: 0.75,
  /** 호버 상태 스트로크 너비 */
  HOVER: 1,
  /** 선택 상태 스트로크 너비 */
  SELECTED: 1.25
}, Ce = {
  /** 마커 너비 */
  WIDTH: 3,
  /** 마커 높이 */
  HEIGHT: 3,
  /** 참조점 X (화살표 끝점) */
  REF_X: 2.5,
  /** 참조점 Y (중앙) */
  REF_Y: 1.5,
  /** 화살표 스트로크 너비 */
  STROKE_WIDTH: 0.75
}, Ge = (e, t, r) => $e(e, t) * r, jl = (e, t, r) => {
  const n = Math.round(e / r);
  return ne(t, n);
}, ch = (e, t, r) => ($e(t, e) + 1) * r, dh = (e) => wr[e].pixelsPerDay, ps = (e, t = [], r = 5) => {
  const n = [
    ...e.flatMap((f) => [f.startDate, f.endDate].filter(Boolean)),
    ...t.map((f) => f.date)
  ];
  if (n.length === 0) {
    const f = /* @__PURE__ */ new Date();
    return {
      minDate: f,
      maxDate: ne(f, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...n.map((f) => f.getTime()))), o = new Date(Math.max(...n.map((f) => f.getTime()))), i = ne(s, -r), l = ne(o, r), c = $e(l, i);
  return {
    minDate: i,
    maxDate: l,
    totalDays: c
  };
}, na = [
  // 신정
  /* @__PURE__ */ new Date("2025-01-01"),
  // 설날 연휴 (1/27 임시공휴일 포함)
  /* @__PURE__ */ new Date("2025-01-27"),
  // 임시공휴일
  /* @__PURE__ */ new Date("2025-01-28"),
  /* @__PURE__ */ new Date("2025-01-29"),
  // 설날
  /* @__PURE__ */ new Date("2025-01-30"),
  // 삼일절 + 대체공휴일
  /* @__PURE__ */ new Date("2025-03-01"),
  // 토요일
  /* @__PURE__ */ new Date("2025-03-03"),
  // 대체공휴일
  // 어린이날 + 부처님오신날 (동일)
  /* @__PURE__ */ new Date("2025-05-05"),
  /* @__PURE__ */ new Date("2025-05-06"),
  // 대체공휴일
  // 대통령선거
  /* @__PURE__ */ new Date("2025-06-03"),
  // 현충일
  /* @__PURE__ */ new Date("2025-06-06"),
  // 광복절
  /* @__PURE__ */ new Date("2025-08-15"),
  // 개천절
  /* @__PURE__ */ new Date("2025-10-03"),
  // 추석 연휴 + 대체공휴일
  /* @__PURE__ */ new Date("2025-10-05"),
  // 일요일
  /* @__PURE__ */ new Date("2025-10-06"),
  // 추석
  /* @__PURE__ */ new Date("2025-10-07"),
  /* @__PURE__ */ new Date("2025-10-08"),
  // 대체공휴일
  // 한글날
  /* @__PURE__ */ new Date("2025-10-09"),
  // 성탄절
  /* @__PURE__ */ new Date("2025-12-25")
], sa = [
  // 신정
  /* @__PURE__ */ new Date("2026-01-01"),
  // 설날 연휴
  /* @__PURE__ */ new Date("2026-02-16"),
  /* @__PURE__ */ new Date("2026-02-17"),
  // 설날
  /* @__PURE__ */ new Date("2026-02-18"),
  // 삼일절 + 대체공휴일
  /* @__PURE__ */ new Date("2026-03-01"),
  // 일요일
  /* @__PURE__ */ new Date("2026-03-02"),
  // 대체공휴일
  // 어린이날
  /* @__PURE__ */ new Date("2026-05-05"),
  // 부처님오신날 + 대체공휴일
  /* @__PURE__ */ new Date("2026-05-24"),
  // 일요일
  /* @__PURE__ */ new Date("2026-05-25"),
  // 대체공휴일
  // 현충일
  /* @__PURE__ */ new Date("2026-06-06"),
  // 토요일
  // 광복절 + 대체공휴일
  /* @__PURE__ */ new Date("2026-08-15"),
  // 토요일
  /* @__PURE__ */ new Date("2026-08-17"),
  // 대체공휴일
  // 추석 연휴
  /* @__PURE__ */ new Date("2026-09-24"),
  /* @__PURE__ */ new Date("2026-09-25"),
  // 추석
  /* @__PURE__ */ new Date("2026-09-26"),
  // 토요일
  // 개천절 + 대체공휴일
  /* @__PURE__ */ new Date("2026-10-03"),
  // 토요일
  /* @__PURE__ */ new Date("2026-10-05"),
  // 대체공휴일
  // 한글날
  /* @__PURE__ */ new Date("2026-10-09"),
  // 성탄절
  /* @__PURE__ */ new Date("2026-12-25")
], oa = [
  // 신정
  /* @__PURE__ */ new Date("2027-01-01"),
  // 설날 연휴 + 대체공휴일
  /* @__PURE__ */ new Date("2027-02-06"),
  // 토요일
  /* @__PURE__ */ new Date("2027-02-07"),
  // 설날 (일요일)
  /* @__PURE__ */ new Date("2027-02-08"),
  /* @__PURE__ */ new Date("2027-02-09"),
  // 대체공휴일
  // 삼일절
  /* @__PURE__ */ new Date("2027-03-01"),
  // 어린이날
  /* @__PURE__ */ new Date("2027-05-05"),
  // 부처님오신날
  /* @__PURE__ */ new Date("2027-05-13"),
  // 현충일
  /* @__PURE__ */ new Date("2027-06-06"),
  // 일요일
  /* @__PURE__ */ new Date("2027-06-07"),
  // 대체공휴일 (현충일은 대체공휴일 미적용이지만 참고용)
  // 광복절 + 대체공휴일
  /* @__PURE__ */ new Date("2027-08-15"),
  // 일요일
  /* @__PURE__ */ new Date("2027-08-16"),
  // 대체공휴일
  // 추석 연휴
  /* @__PURE__ */ new Date("2027-09-14"),
  /* @__PURE__ */ new Date("2027-09-15"),
  // 추석
  /* @__PURE__ */ new Date("2027-09-16"),
  // 개천절 + 대체공휴일
  /* @__PURE__ */ new Date("2027-10-03"),
  // 일요일
  /* @__PURE__ */ new Date("2027-10-04"),
  // 대체공휴일
  // 한글날 + 대체공휴일
  /* @__PURE__ */ new Date("2027-10-09"),
  // 토요일
  /* @__PURE__ */ new Date("2027-10-11"),
  // 대체공휴일
  // 성탄절 + 대체공휴일
  /* @__PURE__ */ new Date("2027-12-25"),
  // 토요일
  /* @__PURE__ */ new Date("2027-12-27")
  // 대체공휴일
], Wl = [
  ...na,
  ...sa,
  ...oa
], _l = (e) => {
  switch (e) {
    case 2025:
      return na;
    case 2026:
      return sa;
    case 2027:
      return oa;
    default:
      return [];
  }
}, uh = (e) => e.flatMap((t) => _l(t)), Pl = ({ taskNames: e, onConfirm: t, onCancel: r }) => br.createPortal(
  /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-[10000] bg-black/50 transition-opacity",
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-[10001] flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "w-[400px] rounded-xl shadow-2xl",
        style: {
          backgroundColor: "var(--gantt-bg-primary)",
          border: "1px solid var(--gantt-border)"
        },
        onClick: (n) => n.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "px-5 py-4",
              style: { borderBottom: "1px solid var(--gantt-border)" },
              children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ a.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30", children: /* @__PURE__ */ a.jsx("svg", { className: "h-5 w-5 text-red-600 dark:text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsx(
                    "h3",
                    {
                      className: "text-base font-bold",
                      style: { color: "var(--gantt-text-primary)" },
                      children: "삭제 확인"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "p",
                    {
                      className: "text-sm",
                      style: { color: "var(--gantt-text-muted)" },
                      children: "이 작업은 되돌릴 수 없습니다"
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "px-5 py-4", children: /* @__PURE__ */ a.jsxs("div", { className: "rounded-lg bg-red-50 dark:bg-red-900/20 p-4", children: [
            /* @__PURE__ */ a.jsxs(
              "p",
              {
                className: "text-sm mb-3",
                style: { color: "var(--gantt-text-secondary)" },
                children: [
                  "다음 ",
                  /* @__PURE__ */ a.jsxs("span", { className: "font-semibold text-red-600 dark:text-red-400", children: [
                    e.length,
                    "개"
                  ] }),
                  " 항목을 삭제하시겠습니까?"
                ]
              }
            ),
            /* @__PURE__ */ a.jsx("ul", { className: "max-h-[150px] overflow-auto space-y-1.5", children: e.map((n, s) => /* @__PURE__ */ a.jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-sm font-medium",
                style: { color: "var(--gantt-text-primary)" },
                children: [
                  /* @__PURE__ */ a.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400 dark:bg-red-500 shrink-0" }),
                  n
                ]
              },
              s
            )) })
          ] }) }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex justify-end gap-3 px-5 py-4 rounded-b-xl",
              style: {
                borderTop: "1px solid var(--gantt-border)",
                backgroundColor: "var(--gantt-bg-secondary)"
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: r,
                    className: "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    style: { color: "var(--gantt-text-primary)" },
                    onMouseEnter: (n) => n.currentTarget.style.backgroundColor = "var(--gantt-bg-hover)",
                    onMouseLeave: (n) => n.currentTarget.style.backgroundColor = "transparent",
                    children: "취소"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: t,
                    className: "rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors shadow-sm",
                    children: "삭제"
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] }),
  document.body
), Rl = ({
  x: e,
  y: t,
  taskId: r,
  selectedTaskIds: n,
  tasks: s,
  onTaskGroup: o,
  onTaskUngroup: i,
  onTaskDelete: l,
  onStartRename: c,
  onClose: f,
  onDeselect: d
}) => {
  var w;
  const [y, h] = te(!1), m = Array.from(n).some((k) => {
    const T = s.find((E) => E.id === k);
    return (T == null ? void 0 : T.type) === "GROUP";
  }), u = () => {
    n.size >= 1 && !m && o && (o(Array.from(n)), f());
  }, g = () => {
    if (n.size === 1 && i) {
      const k = Array.from(n)[0], T = s.find((E) => E.id === k);
      (T == null ? void 0 : T.type) === "GROUP" && (i(k), f());
    }
  }, p = () => {
    h(!0);
  }, b = () => {
    l && (n.size > 0 ? Array.from(n) : [r]).forEach((T) => {
      l(T);
    }), h(!1), d(), f();
  }, x = () => {
    h(!1);
  }, D = n.size === 1 && (() => {
    const k = Array.from(n)[0], T = s.find((E) => E.id === k);
    return (T == null ? void 0 : T.type) === "GROUP";
  })(), v = n.size > 0 ? Array.from(n).map((k) => {
    var T;
    return ((T = s.find((E) => E.id === k)) == null ? void 0 : T.name) || k;
  }) : [((w = s.find((k) => k.id === r)) == null ? void 0 : w.name) || r];
  return br.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "fixed z-[9999] min-w-[160px] rounded-lg py-1 shadow-lg",
        style: {
          left: e,
          top: t,
          backgroundColor: "var(--gantt-bg-primary)",
          border: "1px solid var(--gantt-border)"
        },
        onClick: (k) => k.stopPropagation(),
        children: [
          n.size >= 1 && !m && o && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: u,
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-primary)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
                "그룹화 (",
                n.size,
                "개 선택됨)"
              ]
            }
          ),
          D && i && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: g,
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-primary)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
                "그룹 해제"
              ]
            }
          ),
          n.size === 1 && c && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => {
                const k = Array.from(n)[0];
                c(k), f();
              },
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-primary)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
                "이름 변경"
              ]
            }
          ),
          l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx("div", { className: "my-1", style: { borderTop: "1px solid var(--gantt-border)" } }),
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: p,
                className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 dark:text-red-400",
                children: [
                  /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                  "삭제 ",
                  n.size > 1 ? `(${n.size}개)` : ""
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "my-1", style: { borderTop: "1px solid var(--gantt-border)" } }),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => {
                d(), f();
              },
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-muted)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
                "선택 해제"
              ]
            }
          ),
          y && /* @__PURE__ */ a.jsx(
            Pl,
            {
              taskNames: v,
              onConfirm: b,
              onCancel: x
            }
          )
        ]
      }
    ),
    document.body
  );
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Al = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Vs = (e) => {
  const t = Al(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, aa = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Ll = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hl = {
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
const zl = un(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: o,
    iconNode: i,
    ...l
  }, c) => Kn(
    "svg",
    {
      ref: c,
      ...Hl,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: aa("lucide", s),
      ...!o && !Ll(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([f, d]) => Kn(f, d)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = (e, t) => {
  const r = un(
    ({ className: n, ...s }, o) => Kn(zl, {
      ref: o,
      iconNode: t,
      className: aa(
        `lucide-${Ol(Vs(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Vs(e), r;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], $l = jt("calendar", Fl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ia = jt("check", Bl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xs = jt("chevron-down", Gl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], bs = jt("chevron-right", Vl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Ds = jt("grip-vertical", Yl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], la = jt("trash-2", Ul);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Xl = jt("type", Kl);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], gn = jt("x", ql), { ROW_HEIGHT: Ys } = ce, jr = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Ql = ({
  columns: e,
  tasks: t,
  activeCPId: r,
  onTaskCreate: n,
  onCancel: s,
  isVirtualized: o = !1,
  virtualRowIndex: i
}) => {
  const [l, c] = He.useState(jr), f = be(null);
  fe(() => {
    c(jr), setTimeout(() => {
      var u;
      (u = f.current) == null || u.focus();
    }, 0);
  }, []);
  const d = W(() => {
    c(jr), s();
  }, [s]), y = W(async () => {
    if (!(!l.name.trim() || !n || !r))
      try {
        const u = t[t.length - 1], g = u ? ne(u.endDate, 1) : /* @__PURE__ */ new Date(), p = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, b = ne(g, Math.max(p - 1, 0)), x = {
          id: `task-${Date.now()}`,
          parentId: r,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: g,
          endDate: b,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await n(x), c(jr), s();
      } catch (u) {
        console.error("Failed to create task:", u), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, n, r, t, s]), h = W((u) => {
    u.key === "Enter" ? (u.preventDefault(), y()) : u.key === "Escape" && (u.preventDefault(), d());
  }, [y, d]), m = o && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${t.length * Ys}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Ys,
        ...m
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
                ref: f,
                type: "text",
                placeholder: "공정명...",
                className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.name,
                onChange: (u) => c((g) => ({ ...g, name: u.target.value })),
                onKeyDown: h
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
                onChange: (u) => {
                  const g = u.target.value.replace(/[^0-9]/g, ""), p = parseInt(g) || 0;
                  c((b) => ({ ...b, indirectWorkDaysPre: p }));
                },
                onKeyDown: h,
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
                onChange: (u) => {
                  const g = u.target.value.replace(/[^0-9]/g, ""), p = parseInt(g) || 0;
                  c((b) => ({ ...b, netWorkDays: p }));
                },
                onKeyDown: h,
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
                onChange: (u) => {
                  const g = u.target.value.replace(/[^0-9]/g, ""), p = parseInt(g) || 0;
                  c((b) => ({ ...b, indirectWorkDaysPost: p }));
                },
                onKeyDown: h,
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
                  onClick: y,
                  disabled: !l.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ a.jsx(ia, { size: 14 })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: d,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ a.jsx(gn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Us } = ce, Wr = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, Jl = ({
  columns: e,
  tasks: t,
  onTaskCreate: r,
  onCancel: n,
  isVirtualized: s = !1,
  virtualRowIndex: o,
  dragHandleWidth: i = 0
}) => {
  const [l, c] = He.useState(Wr), f = be(null);
  fe(() => {
    c(Wr), setTimeout(() => {
      var u;
      (u = f.current) == null || u.focus();
    }, 0);
  }, []);
  const d = W(() => {
    c(Wr), n();
  }, [n]), y = W(async () => {
    if (!(!l.name.trim() || !r))
      try {
        const u = t.filter((v) => v.type === "CP" && !v.parentId), g = u[u.length - 1], p = g ? ne(g.endDate, 1) : /* @__PURE__ */ new Date(), b = l.workDaysTotal + l.nonWorkDaysTotal, x = ne(p, Math.max(b - 1, 0)), D = {
          id: `cp-${Date.now()}`,
          parentId: null,
          wbsLevel: 1,
          type: "CP",
          name: l.name.trim(),
          startDate: p,
          endDate: x,
          cp: {
            workDaysTotal: l.workDaysTotal,
            nonWorkDaysTotal: l.nonWorkDaysTotal
          },
          dependencies: []
        };
        await r(D), c(Wr), n();
      } catch (u) {
        console.error("Failed to create CP:", u), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, r, t, n]), h = W((u) => {
    u.key === "Enter" ? (u.preventDefault(), y()) : u.key === "Escape" && (u.preventDefault(), d());
  }, [y, d]), m = s && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${t.length * Us}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Us,
        ...m
      },
      children: [
        i > 0 && /* @__PURE__ */ a.jsx("div", { style: { width: i }, className: "shrink-0" }),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: i > 0 ? e[0].width - i : e[0].width },
            children: [
              /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
              " ",
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: f,
                  type: "text",
                  placeholder: "CP명...",
                  className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: l.name,
                  onChange: (u) => c((g) => ({ ...g, name: u.target.value })),
                  onKeyDown: h
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
                onChange: (u) => {
                  const g = u.target.value.replace(/[^0-9]/g, ""), p = parseInt(g) || 0;
                  c((b) => ({ ...b, workDaysTotal: p }));
                },
                onKeyDown: h,
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
                onChange: (u) => {
                  const g = u.target.value.replace(/[^0-9]/g, ""), p = parseInt(g) || 0;
                  c((b) => ({ ...b, nonWorkDaysTotal: p }));
                },
                onKeyDown: h,
                title: "비작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex shrink-0 items-center justify-center gap-1 px-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: y,
              disabled: !l.name.trim(),
              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
              title: "저장 (Enter)",
              children: /* @__PURE__ */ a.jsx(ia, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: d,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ a.jsx(gn, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { HEADER_HEIGHT: Zl } = ce, Ks = ({
  viewMode: e,
  activeGroupName: t,
  activeCPName: r,
  columns: n,
  resizingIndex: s,
  selectedTaskIds: o,
  tasks: i,
  onColumnResizeStart: l,
  onColumnResizeDoubleClick: c,
  onTaskGroup: f,
  onTaskUngroup: d,
  onClearSelection: y,
  dragHandleWidth: h = 0
}) => {
  const m = o.size === 1 ? i.find((x) => x.id === Array.from(o)[0] && x.type === "GROUP") : null, u = o.size >= 1 && f && !m, g = m && d, p = () => !u && !g && o.size === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
    o.size > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs", style: { color: "var(--gantt-text-muted)" }, children: [
      o.size,
      "개 선택"
    ] }),
    g && /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => {
          d(m.id), y();
        },
        className: "flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-white transition-colors",
        style: { backgroundColor: "var(--gantt-text-muted)" },
        title: "그룹 해제",
        children: [
          /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
          "해제"
        ]
      }
    ),
    o.size > 0 && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: y,
        className: "flex items-center justify-center rounded p-1 transition-colors",
        style: { color: "var(--gantt-text-muted)" },
        title: "선택 해제 (ESC)",
        children: /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] }), b = () => /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "flex h-[32px]",
      style: { borderTop: "1px solid var(--gantt-border-light)" },
      children: [
        h > 0 && /* @__PURE__ */ a.jsx("div", { className: "shrink-0", style: { width: h } }),
        n.map((x, D) => /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "relative flex shrink-0 items-center justify-center text-xs font-medium",
            style: {
              width: D === 0 && h > 0 ? x.width - h : x.width,
              color: "var(--gantt-text-secondary)"
            },
            children: [
              x.label,
              D < n.length - 1 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "absolute right-0 top-0 z-10 h-full w-3 touch-none flex justify-center group",
                  style: { transform: "translateX(50%)", cursor: "col-resize" },
                  onMouseDown: (v) => l(v, D),
                  onDoubleClick: (v) => c(v, D),
                  title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절",
                  children: /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: "h-full w-[2px] transition-colors pointer-events-none",
                      style: {
                        backgroundColor: s === D ? "var(--gantt-focus)" : "transparent"
                      }
                    }
                  )
                }
              ),
              D < n.length - 1 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "absolute right-0 top-0 h-full w-px pointer-events-none",
                  style: { backgroundColor: "var(--gantt-border-light)" }
                }
              )
            ]
          },
          x.id
        ))
      ]
    }
  );
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "flex shrink-0 flex-col",
      style: {
        height: Zl,
        backgroundColor: "var(--gantt-bg-secondary)",
        borderBottom: "1px solid var(--gantt-border)"
      },
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
          /* @__PURE__ */ a.jsx("span", { style: { color: "var(--gantt-text-secondary)", fontSize: "0.875rem" }, children: e === "MASTER" ? "공구공정표 Master" : e === "UNIFIED" ? "통합보기 공정표" : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            "주공정(C.P)표 Detail : ",
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: "font-bold", style: { color: "var(--gantt-text-primary)" }, children: [
              t ? `${t} / ` : "",
              r || ""
            ] })
          ] }) }),
          p()
        ] }),
        b()
      ]
    }
  );
}, { ROW_HEIGHT: ec } = ce, Xs = (e) => Number.isInteger(e) ? e.toString() : e.toFixed(1), tc = He.memo(({
  task: e,
  rowIndex: t,
  isVirtualized: r,
  rowStart: n,
  isDragging: s,
  isDragOver: o,
  dragOverPosition: i,
  isSelected: l,
  isFocused: c,
  isExpanded: f,
  canExpand: d,
  indent: y,
  isGroup: h,
  onDragStart: m,
  onDragOver: u,
  onDragLeave: g,
  onDrop: p,
  onDragEnd: b,
  onRowClick: x,
  onContextMenu: D,
  onToggle: v,
  editingTaskId: w,
  editingName: k,
  setEditingName: T,
  editInputRef: E,
  onStartEdit: j,
  onSaveEdit: N,
  onEditKeyDown: P,
  columns: L,
  dragHandleWidth: $,
  onTaskReorder: R,
  onTaskMove: H,
  onTaskUpdate: K,
  cpSummary: U,
  onTaskClick: C
}) => {
  const V = re(() => {
    let M = "var(--gantt-bg-primary)", F = "var(--gantt-border-light)", I = "none";
    return s ? M = "var(--gantt-bg-selected)" : o ? i === "into" && (M = "var(--gantt-bg-selected)", F = "var(--gantt-focus)", I = "inset 0 0 0 2px var(--gantt-focus)") : c ? (M = "var(--gantt-bg-selected)", I = "inset 0 0 0 2px var(--gantt-focus)") : l ? (M = "var(--gantt-bg-selected)", I = "inset 0 0 0 2px rgba(59, 130, 246, 0.3)") : h && (M = "var(--gantt-bg-secondary)"), {
      height: ec,
      backgroundColor: M,
      borderBottom: `1px solid ${F}`,
      borderTop: o && i === "before" ? "2px solid var(--gantt-focus)" : "none",
      boxShadow: I,
      opacity: s ? 0.5 : 1,
      ...r ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${n}px)`
      } : {}
    };
  }, [s, o, i, c, l, h, r, n]), X = W((M) => {
    M.stopPropagation(), v(e.id);
  }, [v, e.id]), S = W((M) => {
    K && (M.stopPropagation(), j(e));
  }, [K, j, e]), A = re(() => h ? {
    backgroundColor: _.badgeBlock,
    color: _.badgeBlockText,
    border: `1.5px solid ${_.badgeBlockBorder}`
  } : {
    backgroundColor: _.vermilion,
    color: "white"
  }, [h]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      draggable: !!(R || H),
      onDragStart: (M) => m(M, e.id),
      onDragOver: (M) => u(M, e.id, h),
      onDragLeave: g,
      onDrop: (M) => p(M, e.id),
      onDragEnd: b,
      onClick: (M) => x(M, e, t),
      onContextMenu: (M) => D(M, e),
      className: "box-border flex items-center transition-all duration-150",
      style: V,
      onDoubleClick: () => {
        h && d ? v(e.id) : h || C(e);
      },
      title: h && d ? "더블클릭하여 접기/펼치기" : h ? void 0 : "더블클릭하여 상세 공정표 보기",
      children: [
        R && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing",
            style: { width: $, color: "var(--gantt-text-muted)" },
            children: /* @__PURE__ */ a.jsx(Ds, { size: 14 })
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden px-2",
            style: {
              width: R ? L[0].width - $ : L[0].width,
              paddingLeft: y + 8,
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: [
              d ? /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: X,
                  className: "mr-1 shrink-0 rounded p-1",
                  style: { color: "var(--gantt-text-muted)" },
                  children: f ? /* @__PURE__ */ a.jsx(xs, { size: 14 }) : /* @__PURE__ */ a.jsx(bs, { size: 14 })
                }
              ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
              /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "mr-1.5 shrink-0 rounded px-1 text-[10px] font-medium",
                  style: A,
                  children: h ? "B" : "CP"
                }
              ),
              w === e.id ? /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: E,
                  type: "text",
                  value: k,
                  onChange: (M) => T(M.target.value),
                  onKeyDown: P,
                  onBlur: N,
                  onClick: (M) => M.stopPropagation(),
                  className: "w-full rounded px-1 py-0.5 text-xs font-normal focus:outline-none focus:ring-1",
                  style: {
                    backgroundColor: "var(--gantt-bg-primary)",
                    color: "var(--gantt-text-secondary)",
                    border: "1px solid var(--gantt-focus)"
                  }
                }
              ) : /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "truncate text-xs",
                  style: {
                    fontWeight: 500,
                    color: "var(--gantt-text-primary)",
                    cursor: h ? "text" : "default"
                  },
                  onDoubleClick: S,
                  title: K ? "더블클릭하여 이름 편집" : void 0,
                  children: e.name
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: {
              width: L[1].width,
              color: "var(--gantt-text-muted)",
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: h ? "-" : U ? `${U.totalDays}일` : "-"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: {
              width: L[2].width,
              color: _.vermilion,
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: h ? "-" : U ? `${Xs(U.workDays)}일` : "-"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: { width: L[3].width, color: _.teal },
            children: h ? "-" : U ? `${Xs(U.nonWorkDays)}일` : "-"
          }
        )
      ]
    }
  );
}), { ROW_HEIGHT: qs } = ce, rc = {
  indirectWorkDaysPre: {
    localKey: "pre",
    bgColor: "var(--gantt-blue)",
    focusBorderColor: "var(--gantt-blue)",
    title: "선 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)"
  },
  netWorkDays: {
    localKey: "net",
    bgColor: "var(--gantt-red)",
    focusBorderColor: "var(--gantt-red)",
    title: "순작업일 (0.1 단위)"
  },
  indirectWorkDaysPost: {
    localKey: "post",
    bgColor: "var(--gantt-blue)",
    focusBorderColor: "var(--gantt-blue)",
    title: "후 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)"
  }
}, En = ({
  task: e,
  field: t,
  editingDays: r,
  setEditingDays: n,
  onDurationChange: s,
  width: o,
  rowHeight: i
}) => {
  const l = i ?? qs, c = l < qs;
  if (!e.task)
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "flex shrink-0 items-center justify-center px-1",
        style: { width: o, borderRight: "1px solid var(--gantt-border-light)" },
        children: /* @__PURE__ */ a.jsx("span", { className: "text-xs", style: { color: "var(--gantt-text-muted)" }, children: "-" })
      }
    );
  const f = rc[t], d = e.task[t], y = (r == null ? void 0 : r.taskId) === e.id && (r == null ? void 0 : r.field) === f.localKey;
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "flex shrink-0 items-center justify-center px-1",
      style: { width: o, borderRight: "1px solid var(--gantt-border-light)" },
      children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          inputMode: "decimal",
          pattern: "[0-9]*\\.?[0-9]?",
          className: `w-full rounded text-center focus:outline-none focus:ring-1 ${c ? "max-w-[32px] px-0.5 py-0 text-[9px]" : "max-w-[45px] px-1 py-1 text-xs"}`,
          style: {
            backgroundColor: `color-mix(in srgb, ${f.bgColor} 15%, var(--gantt-bg-primary))`,
            color: "var(--gantt-text-primary)",
            border: "1px solid var(--gantt-border)",
            height: c ? l - 2 : "auto",
            lineHeight: c ? `${l - 4}px` : "normal"
          },
          value: y ? r.value : d,
          onFocus: () => n({ taskId: e.id, field: f.localKey, value: String(d) }),
          onChange: (h) => {
            const m = h.target.value.replace(/[^0-9.]/g, "");
            n({ taskId: e.id, field: f.localKey, value: m });
          },
          onBlur: () => {
            if (y) {
              const h = parseFloat(r.value) || 0, m = Math.round(h * 10) / 10;
              s(e, t, m), n(null);
            }
          },
          onKeyDown: (h) => {
            (h.key === "-" || h.key === "e" || h.key === "+") && h.preventDefault(), h.key === "Enter" && h.target.blur();
          },
          title: f.title
        }
      )
    }
  );
}, { ROW_HEIGHT: _r, GROUP_ROW_HEIGHT_COMPACT: nc } = ce, sc = He.memo(({
  task: e,
  rowIndex: t,
  isVirtualized: r,
  rowStart: n,
  isDragging: s,
  isDragOver: o,
  dragOverPosition: i,
  isSelected: l,
  isFocused: c,
  isExpanded: f,
  canExpand: d,
  indent: y,
  isGroup: h,
  onDragStart: m,
  onDragOver: u,
  onDragLeave: g,
  onDrop: p,
  onDragEnd: b,
  onRowClick: x,
  onContextMenu: D,
  onToggle: v,
  editingTaskId: w,
  editingName: k,
  setEditingName: T,
  editInputRef: E,
  onStartEdit: j,
  onSaveEdit: N,
  onEditKeyDown: P,
  columns: L,
  dragHandleWidth: $,
  onTaskReorder: R,
  onTaskMove: H,
  onTaskUpdate: K,
  onTaskDoubleClick: U,
  editingDays: C,
  setEditingDays: V,
  onDurationChange: X,
  rowHeight: S
}) => {
  const A = (S ?? _r) < _r, M = h ? A ? nc : _r : S ?? _r, F = re(() => {
    let q = "var(--gantt-bg-primary)", Q = "var(--gantt-border-light)", de = "none";
    return s ? q = "var(--gantt-bg-selected)" : o ? i === "into" && (q = "var(--gantt-bg-selected)", Q = "var(--gantt-focus)", de = "inset 0 0 0 2px var(--gantt-focus)") : c ? (q = "var(--gantt-bg-selected)", de = "inset 0 0 0 2px var(--gantt-focus)") : l ? (q = "var(--gantt-bg-selected)", de = "inset 0 0 0 2px rgba(59, 130, 246, 0.3)") : h && (q = "var(--gantt-bg-secondary)"), {
      height: M,
      backgroundColor: q,
      borderBottom: `1px solid ${Q}`,
      borderTop: o && i === "before" ? "2px solid var(--gantt-focus)" : "none",
      boxShadow: de,
      opacity: s ? 0.5 : 1,
      ...r ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${n}px)`
      } : {}
    };
  }, [s, o, i, c, l, h, r, n, M]), I = W((q) => {
    q.stopPropagation(), v(e.id);
  }, [v, e.id]), Y = W((q) => {
    K && (q.stopPropagation(), j(e));
  }, [K, j, e]), G = re(() => h ? {
    backgroundColor: _.badgeGroup,
    color: "white"
  } : null, [h]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      draggable: !!(R || H),
      onDragStart: (q) => m(q, e.id),
      onDragOver: (q) => u(q, e.id, h),
      onDragLeave: g,
      onDrop: (q) => p(q, e.id),
      onDragEnd: b,
      onClick: (q) => x(q, e, t),
      onDoubleClick: () => {
        h && d ? v(e.id) : !h && e.type === "TASK" && U && U(e);
      },
      onContextMenu: (q) => D(q, e),
      className: "box-border flex items-center transition-colors",
      style: F,
      title: h && d ? "더블클릭하여 접기/펼치기" : !h && e.type === "TASK" ? "더블클릭하여 공정 설정" : void 0,
      children: [
        R && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing",
            style: { width: $, color: "var(--gantt-text-muted)" },
            children: /* @__PURE__ */ a.jsx(Ds, { size: 14 })
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden px-2",
            style: {
              width: R ? L[0].width - $ : L[0].width,
              paddingLeft: y + 8,
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: [
              d ? /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: I,
                  className: "mr-1 shrink-0 rounded p-1",
                  style: { color: "var(--gantt-text-muted)" },
                  "aria-label": f ? "접기" : "펼치기",
                  "aria-expanded": f,
                  children: f ? /* @__PURE__ */ a.jsx(xs, { size: 14 }) : /* @__PURE__ */ a.jsx(bs, { size: 14 })
                }
              ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
              h && G ? /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "mr-1.5 shrink-0 rounded px-1 text-[10px] font-medium",
                  style: G,
                  children: "G"
                }
              ) : /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "mr-1.5 shrink-0 rounded-full",
                  style: {
                    width: 4,
                    height: 4,
                    backgroundColor: _.red
                  }
                }
              ),
              w === e.id ? /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: E,
                  type: "text",
                  value: k,
                  onChange: (q) => T(q.target.value),
                  onKeyDown: P,
                  onBlur: N,
                  onClick: (q) => q.stopPropagation(),
                  className: "w-full rounded px-1 py-0.5 text-xs font-normal focus:outline-none focus:ring-1",
                  style: {
                    backgroundColor: "var(--gantt-bg-primary)",
                    color: "var(--gantt-text-secondary)",
                    border: "1px solid var(--gantt-focus)"
                  }
                }
              ) : /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "truncate text-xs",
                  style: {
                    fontWeight: 500,
                    color: "var(--gantt-text-primary)",
                    cursor: h ? "text" : "default"
                  },
                  onDoubleClick: Y,
                  title: K ? "더블클릭하여 이름 편집" : void 0,
                  children: e.name
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          En,
          {
            task: e,
            field: "indirectWorkDaysPre",
            editingDays: C,
            setEditingDays: V,
            onDurationChange: X,
            width: L[1].width,
            rowHeight: S
          }
        ),
        /* @__PURE__ */ a.jsx(
          En,
          {
            task: e,
            field: "netWorkDays",
            editingDays: C,
            setEditingDays: V,
            onDurationChange: X,
            width: L[2].width,
            rowHeight: S
          }
        ),
        /* @__PURE__ */ a.jsx(
          En,
          {
            task: e,
            field: "indirectWorkDaysPost",
            editingDays: C,
            setEditingDays: V,
            onDurationChange: X,
            width: L[3].width,
            rowHeight: S
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs cursor-pointer",
            style: {
              width: L[4].width,
              color: h ? "var(--gantt-text-muted)" : "var(--gantt-text-secondary)",
              borderRight: "1px solid var(--gantt-border-light)"
            },
            onDoubleClick: (q) => {
              !h && U && (q.stopPropagation(), U(e));
            },
            title: h ? void 0 : "더블클릭하여 시작일 편집",
            children: h ? "-" : xe(e.startDate, "yyyy-MM-dd")
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: { width: L[5].width, color: "var(--gantt-text-muted)" },
            children: h ? "-" : xe(e.endDate, "yyyy-MM-dd")
          }
        )
      ]
    }
  );
}), { ROW_HEIGHT: rr, GROUP_ROW_HEIGHT_COMPACT: oc } = ce, ca = He.memo(({
  task: e,
  rowIndex: t,
  isVirtualized: r,
  rowStart: n,
  isDragging: s,
  isDragOver: o,
  dragOverPosition: i,
  isSelected: l,
  isFocused: c,
  isExpanded: f,
  canExpand: d,
  indent: y,
  isGroup: h,
  isCP: m,
  isBlock: u,
  onDragStart: g,
  onDragOver: p,
  onDragLeave: b,
  onDrop: x,
  onDragEnd: D,
  onRowClick: v,
  onContextMenu: w,
  onToggle: k,
  editingTaskId: T,
  editingName: E,
  setEditingName: j,
  editInputRef: N,
  onStartEdit: P,
  onSaveEdit: L,
  onEditKeyDown: $,
  columns: R,
  dragHandleWidth: H,
  onTaskReorder: K,
  onTaskMove: U,
  onTaskUpdate: C,
  onTaskClick: V,
  rowHeight: X,
  onTaskDoubleClick: S
}) => {
  const A = (X ?? rr) < rr, M = u || m ? rr : h ? A ? oc : rr : X ?? rr, F = re(() => $e(e.endDate, e.startDate) + 1, [e.startDate, e.endDate]), I = re(() => {
    let Q = "var(--gantt-bg-primary)", de = "var(--gantt-border-light)", he = "none";
    return s ? Q = "var(--gantt-bg-selected)" : o ? i === "into" && (Q = "var(--gantt-bg-selected)", de = "var(--gantt-focus)", he = "inset 0 0 0 2px var(--gantt-focus)") : c ? (Q = "var(--gantt-bg-selected)", he = "inset 0 0 0 2px var(--gantt-focus)") : l ? (Q = "var(--gantt-bg-selected)", he = "inset 0 0 0 2px rgba(59, 130, 246, 0.3)") : u ? Q = "var(--gantt-bg-tertiary)" : (m || h) && (Q = "var(--gantt-bg-secondary)"), {
      height: M,
      backgroundColor: Q,
      borderBottom: `1px solid ${de}`,
      borderTop: o && i === "before" ? "2px solid var(--gantt-focus)" : "none",
      boxShadow: he,
      opacity: s ? 0.5 : 1,
      ...r ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${n}px)`
      } : {}
    };
  }, [s, o, i, c, l, u, m, h, r, n, M]), Y = W((Q) => {
    Q.stopPropagation(), k(e.id);
  }, [k, e.id]), G = W((Q) => {
    C && (Q.stopPropagation(), P(e));
  }, [C, P, e]), q = re(() => u ? {
    backgroundColor: _.badgeBlock,
    color: _.badgeBlockText,
    border: `1.5px solid ${_.badgeBlockBorder}`
  } : m ? {
    backgroundColor: _.vermilion,
    color: "white"
  } : h ? {
    backgroundColor: _.badgeGroup,
    color: "white"
  } : {
    backgroundColor: _.red,
    color: "white"
  }, [u, m, h]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      draggable: !!(K || U),
      onDragStart: (Q) => g(Q, e.id),
      onDragOver: (Q) => p(Q, e.id, h || m),
      onDragLeave: b,
      onDrop: (Q) => x(Q, e.id),
      onDragEnd: D,
      onClick: (Q) => v(Q, e, t),
      onContextMenu: (Q) => w(Q, e),
      className: "box-border flex items-center transition-all duration-150",
      style: I,
      onDoubleClick: () => {
        d ? k(e.id) : S ? S(e) : V && V(e);
      },
      title: d ? "더블클릭하여 접기/펼치기" : void 0,
      children: [
        K && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing",
            style: { width: H, color: "var(--gantt-text-muted)" },
            children: /* @__PURE__ */ a.jsx(Ds, { size: 14 })
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden px-2",
            style: {
              width: K ? R[0].width - H : R[0].width,
              paddingLeft: y + 8,
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: [
              d ? /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: Y,
                  className: "mr-1 shrink-0 rounded p-1",
                  style: { color: "var(--gantt-text-muted)" },
                  "aria-label": f ? "접기" : "펼치기",
                  "aria-expanded": f,
                  children: f ? /* @__PURE__ */ a.jsx(xs, { size: 14 }) : /* @__PURE__ */ a.jsx(bs, { size: 14 })
                }
              ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
              u || m || h ? /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "mr-1.5 shrink-0 rounded px-1 text-[10px] font-medium",
                  style: q,
                  children: u ? "B" : m ? "CP" : "G"
                }
              ) : (
                /* Task는 작은 점으로 표시 */
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "mr-1.5 shrink-0 rounded-full",
                    style: {
                      width: 4,
                      height: 4,
                      backgroundColor: _.red
                    }
                  }
                )
              ),
              T === e.id ? /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: N,
                  type: "text",
                  value: E,
                  onChange: (Q) => j(Q.target.value),
                  onKeyDown: $,
                  onBlur: L,
                  onClick: (Q) => Q.stopPropagation(),
                  className: "w-full rounded px-1 py-0.5 text-xs font-normal focus:outline-none focus:ring-1",
                  style: {
                    backgroundColor: "var(--gantt-bg-primary)",
                    color: "var(--gantt-text-secondary)",
                    border: "1px solid var(--gantt-focus)"
                  }
                }
              ) : /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "truncate text-xs",
                  style: {
                    fontWeight: 500,
                    color: "var(--gantt-text-primary)"
                  },
                  onDoubleClick: G,
                  title: C ? "더블클릭하여 이름 편집" : void 0,
                  children: e.name
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: {
              width: R[1].width,
              color: "var(--gantt-text-muted)",
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: h || u ? "-" : `${F}일`
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: {
              width: R[2].width,
              color: "var(--gantt-text-secondary)",
              borderRight: "1px solid var(--gantt-border-light)"
            },
            children: h || u ? "-" : xe(e.startDate, "yyyy-MM-dd")
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center text-xs",
            style: { width: R[3].width, color: "var(--gantt-text-muted)" },
            children: h || u ? "-" : xe(e.endDate, "yyyy-MM-dd")
          }
        )
      ]
    }
  );
});
ca.displayName = "SidebarRowUnified";
const { MILESTONE_LANE_HEIGHT: ac } = ce, Qn = xr(({
  columns: e,
  dragHandleWidth: t,
  totalWidth: r
}) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: "flex items-center",
    style: {
      height: ac,
      minWidth: r,
      backgroundColor: "var(--gantt-bg-secondary)",
      borderBottom: "1px solid var(--gantt-border-light)"
    },
    children: [
      t > 0 && /* @__PURE__ */ a.jsx("div", { className: "shrink-0", style: { width: t } }),
      e.map((n, s) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex shrink-0 items-center justify-center text-xs",
          style: {
            width: s === 0 && t > 0 ? n.width - t : n.width,
            color: "var(--gantt-text-primary)",
            borderRight: "1px solid var(--gantt-border-light)"
          },
          children: s === 0 && "Milestone"
        },
        n.id
      ))
    ]
  }
));
Qn.displayName = "MilestoneLaneSpacer";
const ic = ({
  viewMode: e,
  tasks: t,
  allTasks: r,
  activeCPId: n,
  cpSummaryMap: s,
  onTotalWidthChange: o,
  onTaskReorder: i
}) => {
  const [l, c] = te(
    Xr.map((R) => R.width)
  ), [f, d] = te(
    qr.map((R) => R.width)
  ), [y, h] = te(
    Qr.map((R) => R.width)
  ), [m, u] = te(null), g = be(!1), p = re(() => {
    switch (e) {
      case "MASTER":
        return Xr;
      case "DETAIL":
        return qr;
      case "UNIFIED":
        return Qr;
    }
  }, [e]), b = re(() => {
    switch (e) {
      case "MASTER":
        return l;
      case "DETAIL":
        return f;
      case "UNIFIED":
        return y;
    }
  }, [e, l, f, y]), x = re(() => {
    switch (e) {
      case "MASTER":
        return c;
      case "DETAIL":
        return d;
      case "UNIFIED":
        return h;
    }
  }, [e]), D = re(
    () => p.map((R, H) => ({
      ...R,
      width: b[H] ?? R.width
    })),
    [p, b]
  ), v = i ? 24 : 0, w = D.reduce((R, H) => R + H.width, 0) + v;
  fe(() => {
    o && o(w);
  }, [w, o]);
  const k = W((R, H = 12, K = "normal") => {
    const C = document.createElement("canvas").getContext("2d");
    return C ? (C.font = `${K} ${H}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, C.measureText(R).width) : 0;
  }, []), T = W((R) => {
    if (!n || R.parentId === n) return 0;
    let H = 0, K = R.parentId;
    for (; K && K !== n; ) {
      const U = r.find((C) => C.id === K);
      (U == null ? void 0 : U.type) === "GROUP" && H++, K = (U == null ? void 0 : U.parentId) || null;
    }
    return H;
  }, [n, r]), E = W((R) => {
    if (!R.parentId) return 0;
    let H = 0, K = R.parentId;
    for (; K; ) {
      const U = r.find((C) => C.id === K);
      (U == null ? void 0 : U.type) === "GROUP" && H++, K = U == null ? void 0 : U.parentId;
    }
    return H;
  }, [r]), j = W((R) => {
    if (R.type === "GROUP") {
      const U = R.parentId ? r.find((C) => C.id === R.parentId) : null;
      if (!U || U.type !== "CP") return 0;
    }
    if (R.type === "CP") return 1;
    let H = 2, K = R.parentId;
    for (; K; ) {
      const U = r.find((C) => C.id === K);
      if (!U || U.type === "CP") break;
      if (U.type === "GROUP") {
        const C = U.parentId ? r.find((V) => V.id === U.parentId) : null;
        (C == null ? void 0 : C.type) === "CP" && H++;
      }
      K = U.parentId;
    }
    return H;
  }, [r]), N = W((R) => {
    const H = p[R].minWidth, K = R === 0, U = K ? 72 : 20, C = p[R].label;
    let V = k(C, 12, "500") + 16;
    return t.forEach((X) => {
      let S = "", A = 0;
      if (e === "MASTER") {
        K && (A = E(X) * 12);
        const Y = X.type === "CP" ? s.get(X.id) : null, G = (Q) => Number.isInteger(Q) ? Q.toString() : Q.toFixed(1), q = X.type === "GROUP";
        switch (R) {
          case 0:
            S = X.name;
            break;
          case 1:
            S = q ? "-" : Y ? `${Y.totalDays}일` : "-";
            break;
          case 2:
            S = q ? "-" : Y ? `${G(Y.workDays)}일` : "-";
            break;
          case 3:
            S = q ? "-" : Y ? `${G(Y.nonWorkDays)}일` : "-";
            break;
        }
      } else if (e === "DETAIL")
        switch (K && (A = T(X) * 12), R) {
          case 0:
            S = X.name;
            break;
          case 1:
            S = X.task ? String(X.task.indirectWorkDaysPre) : "-";
            break;
          case 2:
            S = X.task ? String(X.task.netWorkDays) : "-";
            break;
          case 3:
            S = X.task ? String(X.task.indirectWorkDaysPost) : "-";
            break;
          case 4:
            S = "yyyy-MM-dd";
            break;
          case 5:
            S = "yyyy-MM-dd";
            break;
        }
      else {
        K && (A = j(X) * 16);
        const Y = X.type === "GROUP";
        switch (R) {
          case 0:
            S = X.name;
            break;
          case 1:
            S = Y ? "-" : "999일";
            break;
          case 2:
          case 3:
            S = Y ? "-" : "yyyy-MM-dd";
            break;
        }
      }
      const I = k(S, K ? 14 : 12, K ? "500" : "normal") + U + A;
      V = Math.max(V, I);
    }), Math.max(H, Math.ceil(V));
  }, [t, e, p, k, E, T, j, s]), P = W((R, H) => {
    if (R.detail >= 2) return;
    R.preventDefault(), R.stopPropagation(), g.current = !0, u(H);
    const K = R.clientX, U = b[H], C = p[H].minWidth, V = (S) => {
      if (!g.current) return;
      const A = S.clientX - K, M = Math.max(C, U + A);
      x((F) => {
        const I = [...F];
        return I[H] = M, I;
      });
    }, X = () => {
      g.current = !1, u(null), document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", X);
    };
    document.addEventListener("mousemove", V), document.addEventListener("mouseup", X);
  }, [b, p, x]), L = W((R, H) => {
    R.preventDefault(), R.stopPropagation(), g.current = !1, u(null);
    const K = N(H);
    x((U) => {
      const C = [...U];
      return C[H] = K, C;
    });
  }, [N, x]), $ = be({ master: "", detail: "", unified: "" });
  return fe(() => {
    if (t.length === 0) return;
    const R = () => {
      const H = p.map((K, U) => N(U));
      switch (e) {
        case "MASTER":
          c(H), $.current.master = `${r.length}-${t.length}-${s.size}`;
          break;
        case "DETAIL":
          d(H), $.current.detail = `${n}-${t.length}`;
          break;
        case "UNIFIED":
          h(H), $.current.unified = `${r.length}-${t.length}`;
          break;
      }
    };
    if (e === "MASTER") {
      const H = `${r.length}-${t.length}-${s.size}`;
      $.current.master !== H && R();
    } else if (e === "DETAIL") {
      const H = `${n}-${t.length}`;
      $.current.detail !== H && R();
    } else if (e === "UNIFIED") {
      const H = `${r.length}-${t.length}`;
      $.current.unified !== H && R();
    }
  }, [t, r.length, e, n, N, s.size, p]), {
    columns: D,
    totalWidth: w,
    dragHandleWidth: v,
    resizingIndex: m,
    handleColumnResizeStart: P,
    handleColumnResizeDoubleClick: L,
    getGroupDepth: T,
    getMasterGroupDepth: E,
    getUnifiedDepth: j,
    calculateOptimalWidth: N
  };
}, lc = ({
  tasks: e,
  onTaskReorder: t,
  onTaskMove: r
}) => {
  const [n, s] = te(null), [o, i] = te(null), [l, c] = te(null), f = W((u, g) => {
    u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", g), s(g);
    const p = document.createElement("div");
    p.style.opacity = "0", document.body.appendChild(p), u.dataTransfer.setDragImage(p, 0, 0), setTimeout(() => document.body.removeChild(p), 0);
  }, []), d = W((u, g, p) => {
    if (u.preventDefault(), u.dataTransfer.dropEffect = "move", g === n) return;
    const b = u.currentTarget.getBoundingClientRect(), x = u.clientY - b.top, D = b.height;
    let v;
    p ? x < D / 3 ? v = "before" : x < D * 2 / 3 ? v = "into" : v = "after" : v = x < D / 2 ? "before" : "after", i(g), c(v);
  }, [n]), y = W(() => {
    i(null), c(null);
  }, []), h = W((u, g) => {
    if (u.preventDefault(), !n || n === g || !l) {
      s(null), i(null), c(null);
      return;
    }
    if (r)
      r(n, g, l);
    else if (t && l !== "into") {
      const p = e.findIndex((x) => x.id === g), b = l === "after" ? p + 1 : p;
      t(n, b);
    }
    s(null), i(null), c(null);
  }, [n, l, r, t, e]), m = W(() => {
    s(null), i(null), c(null);
  }, []);
  return {
    draggedTaskId: n,
    dragOverTaskId: o,
    dragOverPosition: l,
    handleDragStart: f,
    handleDragOver: d,
    handleDragLeave: y,
    handleDrop: h,
    handleDragEnd: m
  };
}, Qs = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (f, d) => {
    const y = typeof f == "function" ? f(t) : f;
    if (!Object.is(y, t)) {
      const h = t;
      t = d ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), r.forEach((m) => m(t, h));
    }
  }, s = () => t, l = { setState: n, getState: s, getInitialState: () => c, subscribe: (f) => (r.add(f), () => r.delete(f)) }, c = t = e(n, s, l);
  return l;
}, cc = (e) => e ? Qs(e) : Qs, dc = (e) => e;
function uc(e, t = dc) {
  const r = He.useSyncExternalStore(
    e.subscribe,
    He.useCallback(() => t(e.getState()), [e, t]),
    He.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return He.useDebugValue(r), r;
}
const Js = (e) => {
  const t = cc(e), r = (n) => uc(t, n);
  return Object.assign(r, t), r;
}, fc = (e) => e ? Js(e) : Js, Zs = (e) => Symbol.iterator in e, eo = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), to = (e, t) => {
  const r = e instanceof Map ? e : new Map(e.entries()), n = t instanceof Map ? t : new Map(t.entries());
  if (r.size !== n.size)
    return !1;
  for (const [s, o] of r)
    if (!n.has(s) || !Object.is(o, n.get(s)))
      return !1;
  return !0;
}, hc = (e, t) => {
  const r = e[Symbol.iterator](), n = t[Symbol.iterator]();
  let s = r.next(), o = n.next();
  for (; !s.done && !o.done; ) {
    if (!Object.is(s.value, o.value))
      return !1;
    s = r.next(), o = n.next();
  }
  return !!s.done && !!o.done;
};
function mc(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Zs(e) && Zs(t) ? eo(e) && eo(t) ? to(e, t) : hc(e, t) : to(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(t) }
  );
}
function Ht(e) {
  const t = He.useRef(void 0);
  return (r) => {
    const n = e(r);
    return mc(t.current, n) ? t.current : t.current = n;
  };
}
const zt = fc((e, t) => ({
  // ====================================
  // Initial State
  // ====================================
  // View State
  viewMode: "MASTER",
  activeCPId: null,
  zoomLevel: "MONTH",
  // Master View 기본: 월
  // UI Interaction State - Selection
  selectedTaskIds: /* @__PURE__ */ new Set(),
  focusedTaskId: null,
  lastClickedIndex: null,
  // UI Interaction State - Hover & Expand
  hoveredTaskId: null,
  expandedTaskIds: /* @__PURE__ */ new Set(),
  // Sidebar
  sidebarWidth: ce.SIDEBAR_WIDTH,
  // Drag State
  isDragging: !1,
  dragType: null,
  dragTaskId: null,
  // Compact Mode (Detail View 전용)
  isCompactMode: !1,
  // ====================================
  // View Actions
  // ====================================
  setViewMode: (r, n) => {
    let s, o;
    switch (r) {
      case "MASTER":
        s = ce.SIDEBAR_MASTER_WIDTH, o = "MONTH";
        break;
      case "DETAIL":
        s = ce.SIDEBAR_DETAIL_WIDTH, o = "DAY";
        break;
      case "UNIFIED":
        s = ce.SIDEBAR_UNIFIED_WIDTH, o = "WEEK";
        break;
    }
    e({
      viewMode: r,
      activeCPId: n ?? null,
      zoomLevel: o,
      sidebarWidth: s
    });
  },
  setZoomLevel: (r) => {
    e({ zoomLevel: r });
  },
  // ====================================
  // Task Selection Actions
  // ====================================
  selectTask: (r, n) => {
    const { selectedTaskIds: s, lastClickedIndex: o } = t(), { ctrlKey: i, shiftKey: l, visibleTasks: c } = n ?? {};
    if (i) {
      const f = new Set(s);
      f.has(r) ? f.delete(r) : f.add(r);
      const d = (c == null ? void 0 : c.findIndex((y) => y.id === r)) ?? null;
      e({
        selectedTaskIds: f,
        focusedTaskId: r,
        lastClickedIndex: d
      });
    } else if (l && o !== null && c) {
      const f = c.findIndex((d) => d.id === r);
      if (f !== -1) {
        const d = Math.min(o, f), y = Math.max(o, f), h = new Set(s);
        for (let m = d; m <= y; m++)
          c[m] && h.add(c[m].id);
        e({
          selectedTaskIds: h,
          focusedTaskId: r
        });
      }
    } else {
      const f = (c == null ? void 0 : c.findIndex((d) => d.id === r)) ?? null;
      e({
        selectedTaskIds: /* @__PURE__ */ new Set([r]),
        focusedTaskId: r,
        lastClickedIndex: f
      });
    }
  },
  selectMultipleTasks: (r) => {
    e({
      selectedTaskIds: new Set(r),
      focusedTaskId: r.length > 0 ? r[0] : null
    });
  },
  clearSelection: () => {
    e({
      selectedTaskIds: /* @__PURE__ */ new Set(),
      focusedTaskId: null,
      lastClickedIndex: null
    });
  },
  setFocusedTask: (r) => {
    e({ focusedTaskId: r });
  },
  moveFocus: (r, n) => {
    const { focusedTaskId: s, selectedTaskIds: o } = t();
    let i = -1;
    if (s)
      i = n.findIndex((f) => f.id === s);
    else if (o.size > 0) {
      const f = Array.from(o)[0];
      i = n.findIndex((d) => d.id === f);
    }
    let l;
    i === -1 ? l = 0 : r === "up" ? l = Math.max(0, i - 1) : l = Math.min(n.length - 1, i + 1);
    const c = n[l];
    c && e({
      focusedTaskId: c.id,
      selectedTaskIds: /* @__PURE__ */ new Set([c.id]),
      lastClickedIndex: l
    });
  },
  // ====================================
  // Task Hover Actions
  // ====================================
  hoverTask: (r) => {
    e({ hoveredTaskId: r });
  },
  toggleTask: (r) => {
    const { expandedTaskIds: n } = t(), s = new Set(n);
    s.has(r) ? s.delete(r) : s.add(r), e({ expandedTaskIds: s });
  },
  expandAll: (r) => {
    const { expandedTaskIds: n } = t(), s = /* @__PURE__ */ new Set([...n, ...r]);
    e({ expandedTaskIds: s });
  },
  collapseAll: () => {
    e({ expandedTaskIds: /* @__PURE__ */ new Set() });
  },
  setExpandedTaskIds: (r) => {
    e({ expandedTaskIds: r });
  },
  // ====================================
  // Sidebar Actions
  // ====================================
  setSidebarWidth: (r) => {
    const n = Math.max(
      ce.SIDEBAR_MIN_WIDTH,
      Math.min(r, ce.SIDEBAR_MAX_WIDTH)
    );
    e({ sidebarWidth: n });
  },
  // ====================================
  // Drag Actions
  // ====================================
  startDrag: (r, n) => {
    e({
      isDragging: !0,
      dragType: r,
      dragTaskId: n
    });
  },
  endDrag: () => {
    e({
      isDragging: !1,
      dragType: null,
      dragTaskId: null
    });
  },
  // ====================================
  // Compact Mode Actions
  // ====================================
  toggleCompactMode: () => {
    e((r) => ({ isCompactMode: !r.isCompactMode }));
  },
  setCompactMode: (r) => {
    e({ isCompactMode: r });
  }
})), gc = () => zt(
  Ht((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), yc = () => zt(
  Ht((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), yn = () => zt(
  Ht((e) => ({
    selectedTaskIds: e.selectedTaskIds,
    focusedTaskId: e.focusedTaskId,
    lastClickedIndex: e.lastClickedIndex,
    selectTask: e.selectTask,
    selectMultipleTasks: e.selectMultipleTasks,
    clearSelection: e.clearSelection,
    setFocusedTask: e.setFocusedTask,
    moveFocus: e.moveFocus
  }))
), da = () => zt(
  Ht((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll,
    setExpandedTaskIds: e.setExpandedTaskIds
  }))
), pc = () => zt(
  Ht((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), fh = () => zt(
  Ht((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
), xc = () => zt(
  Ht((e) => ({
    isCompactMode: e.isCompactMode,
    toggleCompactMode: e.toggleCompactMode,
    setCompactMode: e.setCompactMode
  }))
), bc = ({ tasks: e, draggedTaskId: t }) => {
  const {
    selectedTaskIds: r,
    focusedTaskId: n,
    selectTask: s,
    selectMultipleTasks: o,
    clearSelection: i
  } = yn(), l = W((f, d, y) => {
    if (f.stopPropagation(), t) return;
    const h = f.ctrlKey || f.metaKey, m = f.shiftKey;
    s(d.id, {
      ctrlKey: h,
      shiftKey: m,
      visibleTasks: e
    });
  }, [t, e, s]), c = W((f) => {
    s(f, { visibleTasks: e });
  }, [s, e]);
  return {
    selectedTaskIds: r,
    focusedTaskId: n,
    handleRowClick: l,
    clearSelection: i,
    selectTask: c,
    selectMultipleTasks: o
  };
}, Dc = ({
  selectedTaskIds: e,
  allTasks: t,
  viewMode: r,
  activeCPId: n,
  onTaskCreate: s
}) => {
  const [o, i] = te([]), l = W((d, y) => {
    const h = new Set(y.map((u) => u.name)), m = d.match(/^(.+?)\s*(\d+)$/);
    if (m) {
      const u = m[1].trim();
      let g = parseInt(m[2], 10) + 1;
      for (; h.has(`${u} ${g}`); )
        g++;
      return `${u} ${g}`;
    } else {
      let u = 1;
      for (; h.has(`${d} ${u}`); )
        u++;
      return `${d} ${u}`;
    }
  }, []), c = W(() => {
    if (e.size === 0) return;
    const d = Array.from(e), y = [], h = (m) => {
      const u = t.find((g) => g.id === m);
      u && !y.some((g) => g.id === u.id) && (y.push({ ...u }), (u.type === "GROUP" || u.type === "CP") && t.filter((g) => g.parentId === m).forEach((g) => h(g.id)));
    };
    d.forEach((m) => h(m)), i(y);
  }, [e, t]), f = W(() => {
    if (o.length === 0 || !s) return;
    const d = Date.now(), y = /* @__PURE__ */ new Map();
    o.forEach((u, g) => {
      const p = `${u.type.toLowerCase()}-${d + g}`;
      y.set(u.id, p);
    });
    const h = r === "DETAIL" ? n : null, m = new Set(o.map((u) => u.id));
    o.forEach((u) => {
      let g;
      u.parentId && y.has(u.parentId) ? g = y.get(u.parentId) : m.has(u.id) && !o.some((x) => x.id === u.parentId) ? g = h ?? null : g = u.parentId;
      const p = !u.parentId || !m.has(u.parentId), b = {
        ...u,
        id: y.get(u.id),
        parentId: g,
        name: p ? l(u.name, t) : u.name,
        dependencies: []
      };
      s(b);
    });
  }, [o, s, r, n, l, t]);
  return fe(() => {
    const d = (y) => {
      const h = y.target, m = h.tagName === "INPUT" || h.tagName === "TEXTAREA" || h.isContentEditable;
      (y.metaKey || y.ctrlKey) && y.key.toLowerCase() === "c" && !m && e.size > 0 && (y.preventDefault(), c()), (y.metaKey || y.ctrlKey) && y.key.toLowerCase() === "v" && !m && o.length > 0 && (y.preventDefault(), f());
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [c, f, e, o]), {
    clipboardTasks: o,
    handleCopy: c,
    handlePaste: f
  };
}, vc = ({ tasks: e, onTaskUpdate: t }) => {
  const [r, n] = te(null), [s, o] = te(""), i = be(null), l = W((h) => {
    n(h.id), o(h.name), setTimeout(() => {
      var m, u;
      (m = i.current) == null || m.focus(), (u = i.current) == null || u.select();
    }, 0);
  }, []), c = W((h) => {
    const m = e.find((u) => u.id === h);
    m && t && l(m);
  }, [e, t, l]), f = W(() => {
    if (!r || !t) {
      n(null);
      return;
    }
    const h = e.find((m) => m.id === r);
    h && s.trim() && s !== h.name && t({
      ...h,
      name: s.trim()
    }), n(null), o("");
  }, [r, s, e, t]), d = W(() => {
    n(null), o("");
  }, []), y = W((h) => {
    h.key === "Enter" ? (h.preventDefault(), f()) : h.key === "Escape" && (h.preventDefault(), d());
  }, [f, d]);
  return {
    editingTaskId: r,
    editingName: s,
    setEditingName: o,
    editInputRef: i,
    handleStartEdit: l,
    handleStartRename: c,
    handleSaveEdit: f,
    handleCancelEdit: d,
    handleEditKeyDown: y
  };
}, wc = (e, t, r, n, s) => {
  if (!r.task || r.task.netWorkDays <= 0) return 0;
  const o = Ne(e).getTime(), i = Ne(t.netWorkStartDate).getTime(), l = Ne(t.netWorkEndDate).getTime();
  if (o < i || o > l || je(e, n, s)) return 0;
  const c = r.task.netWorkDays, f = Math.floor(c), d = c - f;
  let y = 0, h = new Date(i);
  for (; h.getTime() < o; )
    je(new Date(h), n, s) || y++, h = ne(h, 1);
  return y === f && d > 0 ? d : (y < f || y === f - 1 && d === 0, 1);
}, kc = (e, t, r) => {
  if (!r.task) return 0;
  const n = Ne(e).getTime(), { indirectWorkDaysPre: s, indirectWorkDaysPost: o } = r.task;
  if (s > 0 && t.indirectPreStartDate && t.indirectPreEndDate) {
    const i = Ne(t.indirectPreStartDate).getTime(), l = Ne(t.indirectPreEndDate).getTime();
    if (n >= i && n <= l) {
      const c = Math.floor(s), f = s - c, d = $e(new Date(n), new Date(i));
      return d === c && f > 0 ? f : (d < c || d === c - 1 && f === 0, 1);
    }
  }
  if (o > 0 && t.indirectPostStartDate && t.indirectPostEndDate) {
    const i = Ne(t.indirectPostStartDate).getTime(), l = Ne(t.indirectPostEndDate).getTime();
    if (n >= i && n <= l) {
      const c = Math.floor(o), f = o - c, d = $e(new Date(n), new Date(i));
      return d === c && f > 0 ? f : (d < c || d === c - 1 && f === 0, 1);
    }
  }
  return 0;
}, pn = (e, t = [], r = mn) => {
  const n = e.filter((p) => p.type === "TASK" && p.task);
  if (n.length === 0) {
    const p = Ne(/* @__PURE__ */ new Date());
    return {
      startDate: p,
      endDate: p,
      totalDays: 0,
      workDays: 0,
      nonWorkDays: 0,
      netWorkDaysTotal: 0,
      indirectWorkDaysTotal: 0,
      dailyBreakdown: []
    };
  }
  const s = n.map((p) => {
    const b = ms(p.task, r), x = Ml(p, t, b);
    return {
      task: p,
      dates: x,
      settings: b
    };
  }), o = s.map((p) => p.dates.startDate), i = s.map((p) => p.dates.endDate), l = Ne(new Date(Math.min(...o.map((p) => p.getTime())))), c = Ne(new Date(Math.max(...i.map((p) => p.getTime())))), f = $e(c, l) + 1, d = [];
  let y = 0, h = 0, m = new Date(l);
  for (let p = 0; p < f; p++) {
    const b = Ne(new Date(m));
    let x = 0, D = 0, v = !1, w = !1;
    const k = [];
    for (const { task: N, dates: P, settings: L } of s) {
      const $ = wc(b, P, N, t, L);
      $ > 0 && (x = Math.max(x, $), v = !0, k.includes(N.id) || k.push(N.id));
      const R = kc(b, P, N);
      R > 0 && (D = Math.max(D, R), w = !0, k.includes(N.id) || k.push(N.id));
    }
    const T = je(b, t, r);
    let E = 0, j = 0;
    x > 0 ? (E = x, j = Math.max(0, 1 - x)) : (D > 0, j = 1, E = 0), y += E, h += j, d.push({
      date: b,
      workDayValue: E,
      nonWorkDayValue: j,
      hasNetWork: v,
      hasIndirectWork: w,
      isHoliday: T,
      contributingTaskIds: k
    }), m = ne(m, 1);
  }
  let u = 0, g = 0;
  return n.forEach((p) => {
    p.task && (u += p.task.netWorkDays, g += p.task.indirectWorkDaysPre + p.task.indirectWorkDaysPost);
  }), {
    startDate: l,
    endDate: c,
    totalDays: f,
    workDays: Math.round(y * 2) / 2,
    // 0.5 단위
    nonWorkDays: Math.round(h * 2) / 2,
    // 0.5 단위
    netWorkDaysTotal: u,
    indirectWorkDaysTotal: g,
    dailyBreakdown: d
  };
}, hh = (e) => {
  const t = (r) => Number.isInteger(r) ? r.toString() : r.toFixed(1);
  return `총 공기: ${e.totalDays}일 | 작업일: ${t(e.workDays)}일 | 비작업일: ${t(e.nonWorkDays)}일`;
}, Ec = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const n = r.parentId;
    t.has(n) || t.set(n, []), t.get(n).push(r);
  }), t;
}, qt = (e, t, r) => {
  const {
    wbsLevel: n,
    includeTypes: s = ["TASK"],
    includeGroups: o = !1,
    childrenMap: i
  } = r ?? {}, l = i ?? Ec(t), c = [];
  return (l.get(e) || []).forEach((d) => {
    const y = n === void 0 || d.wbsLevel === n;
    d.type === "GROUP" || d.type === "CP" ? (o && y && c.push(d), c.push(...qt(d.id, t, { ...r, childrenMap: l }))) : s.includes(d.type) && y && c.push(d);
  }), c;
}, vs = (e, t, r) => {
  const n = qt(e, t, { childrenMap: r });
  if (n.length === 0) return null;
  const s = n.map((f) => f.startDate), o = n.map((f) => f.endDate), i = new Date(Math.min(...s.map((f) => f.getTime()))), l = new Date(Math.max(...o.map((f) => f.getTime()))), c = $e(l, i) + 1;
  return { startDate: i, endDate: l, totalDays: c };
}, { ROW_HEIGHT: Tn, ROW_HEIGHT_COMPACT: Tc, GROUP_ROW_HEIGHT_COMPACT: Sc } = ce, Cc = ({
  tasks: e,
  allTasks: t,
  viewMode: r,
  activeCPId: n,
  holidays: s,
  calendarSettings: o,
  effectiveRowHeight: i,
  virtualRows: l
}) => {
  const c = !!(l && l.length > 0), f = i === Tc, d = re(
    () => new Map(t.map((x) => [x.id, x])),
    [t]
  ), y = W((x) => {
    if (x.type === "CP")
      return Tn;
    if (x.type === "GROUP") {
      const D = x.parentId ? d.get(x.parentId) : null;
      return !D || D.type !== "CP" ? Tn : f ? Sc : Tn;
    }
    return i;
  }, [i, d, f]), h = re(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((D) => {
      D.parentId && x.set(D.parentId, (x.get(D.parentId) || 0) + 1);
    }), x;
  }, [t]), m = re(() => {
    const x = /* @__PURE__ */ new Map();
    return r !== "MASTER" || t.forEach((D) => {
      if (D.type === "CP") {
        const v = qt(D.id, t, { wbsLevel: 2 }), w = pn(
          v,
          s,
          o
        );
        x.set(D.id, w);
      }
    }), x;
  }, [r, t, s, o]), u = re(() => {
    if (c)
      return l;
    let x = 0;
    return e.map((D, v) => {
      const w = y(D), k = { index: v, start: x, size: w, key: v };
      return x += w, k;
    });
  }, [c, l, e, y]), g = re(() => {
    if (u.length === 0) return 100;
    const x = u[u.length - 1];
    return x.start + x.size + 100;
  }, [u]), { activeGroupName: p, activeCPName: b } = re(() => {
    if (!n) return { activeGroupName: void 0, activeCPName: void 0 };
    const x = t.find((w) => w.id === n);
    if (!x) return { activeGroupName: void 0, activeCPName: void 0 };
    const D = x.name;
    if (!x.parentId)
      return { activeGroupName: void 0, activeCPName: D };
    const v = t.find((w) => w.id === x.parentId);
    return {
      activeGroupName: v == null ? void 0 : v.name,
      activeCPName: D
    };
  }, [n, t]);
  return {
    taskMap: d,
    childrenCountMap: h,
    cpSummaryMap: m,
    getRowHeight: y,
    rowData: u,
    dynamicTotalHeight: g,
    activeCPName: b,
    activeGroupName: p,
    isVirtualized: c,
    isCompact: f
  };
}, { ROW_HEIGHT: Ic } = ce, Jn = xr(un(
  ({
    tasks: e,
    allTasks: t,
    viewMode: r,
    expandedIds: n,
    onToggle: s,
    onTaskClick: o,
    onTaskUpdate: i,
    onTaskCreate: l,
    onTaskReorder: c,
    activeCPId: f,
    holidays: d = [],
    calendarSettings: y,
    virtualRows: h,
    totalHeight: m,
    onTotalWidthChange: u,
    onTaskGroup: g,
    onTaskUngroup: p,
    onTaskDelete: b,
    onTaskMove: x,
    isAddingTask: D = !1,
    onCancelAddTask: v,
    isAddingCP: w = !1,
    onCancelAddCP: k,
    onTaskDoubleClick: T,
    renderMode: E = "all",
    rowHeight: j,
    // 외부 컬럼 상태 (두 인스턴스 간 공유용)
    externalColumns: N,
    externalColumnResizeStart: P,
    externalColumnResizeDoubleClick: L,
    externalDragHandleWidth: $,
    externalResizingIndex: R,
    onOptimalColumnWidth: H
  }, K) => {
    const U = j ?? Ic, C = y ?? mn, {
      taskMap: V,
      childrenCountMap: X,
      cpSummaryMap: S,
      rowData: A,
      dynamicTotalHeight: M,
      activeCPName: F,
      activeGroupName: I,
      isVirtualized: Y
    } = Cc({
      tasks: e,
      allTasks: t,
      viewMode: r,
      activeCPId: f,
      holidays: d,
      calendarSettings: C,
      effectiveRowHeight: U,
      virtualRows: h
    }), G = ic({
      viewMode: r,
      tasks: e,
      allTasks: t,
      activeCPId: f,
      cpSummaryMap: S,
      onTotalWidthChange: N ? void 0 : u,
      onTaskReorder: c
    }), q = N ?? G.columns, Q = $ ?? G.dragHandleWidth, de = R ?? G.resizingIndex, he = P ?? G.handleColumnResizeStart, pe = W((J, B) => {
      const ae = G.calculateOptimalWidth(B);
      H && H(B, ae), L ? L(J, B) : G.handleColumnResizeDoubleClick(J, B);
    }, [G, H, L]), Te = q.reduce((J, B) => J + B.width, 0) + Q, { getGroupDepth: We, getMasterGroupDepth: qe, getUnifiedDepth: _e } = G;
    fe(() => {
      N && u && u(Te);
    }, [N, Te, u]);
    const {
      draggedTaskId: ve,
      dragOverTaskId: De,
      dragOverPosition: Pe,
      handleDragStart: Ve,
      handleDragOver: tt,
      handleDragLeave: nt,
      handleDrop: we,
      handleDragEnd: Ye
    } = lc({ tasks: e, onTaskReorder: c, onTaskMove: x }), {
      selectedTaskIds: Se,
      focusedTaskId: Qe,
      handleRowClick: Ke,
      clearSelection: ge,
      selectTask: Re
    } = bc({ tasks: e, draggedTaskId: ve });
    Dc({
      selectedTaskIds: Se,
      allTasks: t,
      viewMode: r,
      activeCPId: f,
      onTaskCreate: l
    });
    const {
      editingTaskId: st,
      editingName: vt,
      setEditingName: ot,
      editInputRef: wt,
      handleStartEdit: kt,
      handleStartRename: Et,
      handleSaveEdit: ht,
      handleEditKeyDown: mt
    } = vc({ tasks: e, onTaskUpdate: i }), [Ue, Je] = te(null), [Tt, gt] = te(null), at = W((J, B) => {
      J.preventDefault(), Se.has(B.id) || Re(B.id), Je({
        x: J.clientX,
        y: J.clientY,
        taskId: B.id
      });
    }, [Se, Re]);
    fe(() => {
      const J = () => Je(null);
      if (Ue)
        return document.addEventListener("click", J), () => document.removeEventListener("click", J);
    }, [Ue]), fe(() => {
      const J = (B) => {
        B.key === "Escape" && (ge(), Je(null));
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [ge]);
    const se = W((J, B, ae) => {
      if (!J.task || !i) return;
      const me = J.task.indirectWorkDaysPre, ke = J.task.indirectWorkDaysPost, oe = ne(J.startDate, me), Fe = ne(J.endDate, -ke);
      let Ze = J.startDate, Wt = J.endDate;
      B === "indirectWorkDaysPre" ? Ze = ne(oe, -ae) : B === "indirectWorkDaysPost" && (Wt = ne(Fe, ae));
      const Ft = {
        ...J,
        startDate: Ze,
        endDate: Wt,
        task: { ...J.task, [B]: ae }
      };
      i(Ft);
    }, [i]), z = {
      isVirtualized: Y,
      draggedTaskId: ve,
      dragOverTaskId: De,
      dragOverPosition: Pe,
      selectedTaskIds: Se,
      focusedTaskId: Qe,
      expandedIds: n,
      editingTaskId: st,
      editingName: vt,
      setEditingName: ot,
      editInputRef: wt,
      columns: q,
      dragHandleWidth: Q,
      onDragStart: Ve,
      onDragOver: tt,
      onDragLeave: nt,
      onDrop: we,
      onDragEnd: Ye,
      onRowClick: Ke,
      onContextMenu: at,
      onToggle: s,
      onStartEdit: kt,
      onSaveEdit: ht,
      onEditKeyDown: mt,
      onTaskReorder: c,
      onTaskMove: x,
      onTaskUpdate: i
    }, O = Ue && /* @__PURE__ */ a.jsx(
      Rl,
      {
        x: Ue.x,
        y: Ue.y,
        taskId: Ue.taskId,
        selectedTaskIds: Se,
        tasks: e,
        onTaskGroup: g,
        onTaskUngroup: p,
        onTaskDelete: b,
        onStartRename: Et,
        onClose: () => Je(null),
        onDeselect: ge
      }
    ), ue = () => r === "MASTER" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      A.map((J) => {
        const B = e[J.index];
        if (!B) return null;
        const ae = B.type === "GROUP", me = ae && (X.get(B.id) || 0) > 0, ke = B.type === "CP" && S.get(B.id) || null;
        return /* @__PURE__ */ a.jsx(
          tc,
          {
            task: B,
            rowIndex: J.index,
            rowStart: J.start,
            isDragging: ve === B.id,
            isDragOver: De === B.id,
            isSelected: Se.has(B.id),
            isFocused: Qe === B.id,
            isExpanded: n.has(B.id),
            canExpand: me,
            indent: qe(B) * 12,
            isGroup: ae,
            cpSummary: ke,
            onTaskClick: o,
            ...z
          },
          J.key
        );
      }),
      w && /* @__PURE__ */ a.jsx(
        Jl,
        {
          columns: q,
          tasks: e,
          onTaskCreate: l,
          onCancel: k || (() => {
          }),
          isVirtualized: Y,
          virtualRowIndex: e.length,
          dragHandleWidth: Q
        }
      )
    ] }) : r === "UNIFIED" ? A.map((J) => {
      const B = e[J.index];
      if (!B) return null;
      const ae = B.type === "CP", me = B.type === "GROUP", ke = B.parentId ? V.get(B.parentId) : null, oe = me && (!ke || ke.type !== "CP"), Fe = (ae || me) && (X.get(B.id) || 0) > 0;
      return /* @__PURE__ */ a.jsx(
        ca,
        {
          task: B,
          rowIndex: J.index,
          rowStart: J.start,
          isDragging: ve === B.id,
          isDragOver: De === B.id,
          isSelected: Se.has(B.id),
          isFocused: Qe === B.id,
          isExpanded: n.has(B.id),
          canExpand: Fe,
          indent: _e(B) * 16,
          isGroup: me && !oe,
          isCP: ae,
          isBlock: oe,
          rowHeight: J.size,
          onTaskClick: o,
          onTaskDoubleClick: T,
          ...z
        },
        J.key
      );
    }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      A.map((J) => {
        const B = e[J.index];
        if (!B) return null;
        const ae = B.type === "GROUP", me = ae && (X.get(B.id) || 0) > 0;
        return /* @__PURE__ */ a.jsx(
          sc,
          {
            task: B,
            rowIndex: J.index,
            rowStart: J.start,
            isDragging: ve === B.id,
            isDragOver: De === B.id,
            isSelected: Se.has(B.id),
            isFocused: Qe === B.id,
            isExpanded: n.has(B.id),
            canExpand: me,
            indent: We(B) * 12,
            isGroup: ae,
            rowHeight: J.size,
            editingDays: Tt,
            setEditingDays: gt,
            onDurationChange: se,
            onTaskDoubleClick: T,
            ...z
          },
          J.key
        );
      }),
      D && f && /* @__PURE__ */ a.jsx(
        Ql,
        {
          columns: q,
          tasks: e,
          activeCPId: f,
          onTaskCreate: l,
          onCancel: v || (() => {
          }),
          isVirtualized: Y,
          virtualRowIndex: e.length
        }
      )
    ] });
    return E === "header" ? /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex flex-col select-none shrink-0",
        style: { backgroundColor: "var(--gantt-bg-primary)" },
        children: [
          /* @__PURE__ */ a.jsx(
            Ks,
            {
              viewMode: r,
              activeGroupName: I,
              activeCPName: F,
              columns: q,
              resizingIndex: de,
              selectedTaskIds: Se,
              tasks: e,
              onColumnResizeStart: he,
              onColumnResizeDoubleClick: pe,
              onTaskGroup: g,
              onTaskUngroup: p,
              onClearSelection: ge,
              dragHandleWidth: Q
            }
          ),
          /* @__PURE__ */ a.jsx(
            Qn,
            {
              columns: q,
              dragHandleWidth: Q,
              totalWidth: Te
            }
          ),
          de !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ]
      }
    ) : E === "content" ? /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: K,
        className: "relative select-none",
        style: { backgroundColor: "var(--gantt-bg-primary)" },
        onClick: ge,
        children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              style: {
                minWidth: Te,
                height: Y ? m : M,
                position: "relative"
              },
              onClick: ge,
              children: ue()
            }
          ),
          O
        ]
      }
    ) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex h-full flex-col select-none",
        style: { backgroundColor: "var(--gantt-bg-primary)" },
        children: [
          /* @__PURE__ */ a.jsx(
            Ks,
            {
              viewMode: r,
              activeGroupName: I,
              activeCPName: F,
              columns: q,
              resizingIndex: de,
              selectedTaskIds: Se,
              tasks: e,
              onColumnResizeStart: he,
              onColumnResizeDoubleClick: pe,
              onTaskGroup: g,
              onTaskUngroup: p,
              onClearSelection: ge,
              dragHandleWidth: Q
            }
          ),
          de !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: K,
              className: "relative flex-1",
              onClick: ge,
              children: [
                /* @__PURE__ */ a.jsx(
                  Qn,
                  {
                    columns: q,
                    dragHandleWidth: Q,
                    totalWidth: Te
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    style: {
                      minWidth: Te,
                      height: Y ? m : M,
                      position: "relative"
                    },
                    onClick: ge,
                    children: ue()
                  }
                )
              ]
            }
          ),
          O
        ]
      }
    );
  }
));
Jn.displayName = "GanttSidebar";
const { HEADER_HEIGHT: Mc } = ce, ro = ({
  minDate: e,
  totalDays: t,
  pixelsPerDay: r,
  zoomLevel: n,
  holidays: s,
  calendarSettings: o
}) => {
  const i = Array.from({ length: t }, (h, m) => ne(e, m)), l = t * r, c = re(() => {
    const h = [];
    let m = wn(i[0]), u = 0;
    return i.forEach((g) => {
      wn(g) !== m ? (h.push({ label: `${m}년`, days: u }), m = wn(g), u = 1) : u++;
    }), h.push({ label: `${m}년`, days: u }), h;
  }, [i]), f = re(() => {
    const h = [];
    let m = i[0], u = 0;
    return i.forEach((g) => {
      hl(g, m) ? u++ : (h.push({ label: xe(m, "M월"), days: u }), m = g, u = 1);
    }), h.push({ label: xe(m, "M월"), days: u }), h;
  }, [i]), d = re(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-[32px] items-center",
          style: { minWidth: l, backgroundColor: "var(--gantt-bg-primary)" },
          children: i.map((h, m) => {
            const u = hn(h), g = je(h, s, o), p = u === 0, b = u === 6;
            let x = "var(--gantt-text-secondary)", D = "transparent";
            const v = s.some((w) => vr(w, h));
            return p ? (x = "var(--gantt-sunday-text)", D = "var(--gantt-sunday-bg)") : v ? (x = "var(--gantt-holiday-text)", D = "var(--gantt-holiday-bg)") : b ? (x = "var(--gantt-weekend-text)", D = "var(--gantt-weekend-bg)") : g && (x = "var(--gantt-holiday-text)", D = "var(--gantt-holiday-bg)"), /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "flex h-full shrink-0 flex-col items-center justify-center font-medium",
                style: {
                  width: r,
                  minWidth: r,
                  backgroundColor: D,
                  borderRight: "1px solid var(--gantt-border)"
                },
                children: [
                  /* @__PURE__ */ a.jsx("span", { className: "text-[10px] leading-none", style: { color: x }, children: xe(h, "d") }),
                  /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 text-[9px] font-bold leading-none", style: { color: x }, children: ["일", "월", "화", "수", "목", "금", "토"][u] })
                ]
              },
              m
            );
          })
        }
      );
    {
      const h = [];
      let m = i[0], u = 0;
      return i.forEach((g) => {
        fl(g, m, { weekStartsOn: 0 }) ? u++ : (h.push({ label: `${$s(m, { weekStartsOn: 0 })}주`, days: u }), m = g, u = 1);
      }), h.push({ label: `${$s(m, { weekStartsOn: 0 })}주`, days: u }), /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-[32px] items-center",
          style: { minWidth: l, backgroundColor: "var(--gantt-bg-primary)" },
          children: h.map((g, p) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "flex h-full shrink-0 items-center justify-center text-xs font-medium",
              style: {
                width: g.days * r,
                color: "var(--gantt-text-secondary)",
                borderRight: "1px solid var(--gantt-border)"
              },
              children: g.label
            },
            p
          ))
        }
      );
    }
  }, [i, n, r, s, o, l]), y = n === "MONTH";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sticky top-0 z-5 flex shrink-0 flex-col",
      style: {
        height: Mc,
        minWidth: l,
        backgroundColor: "var(--gantt-bg-primary)",
        borderBottom: "1px solid var(--gantt-border)"
      },
      children: y ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[48px] items-center text-sm font-bold",
            style: {
              minWidth: l,
              backgroundColor: "var(--gantt-bg-tertiary)",
              borderBottom: "1px solid var(--gantt-border)",
              color: "var(--gantt-text-primary)"
            },
            children: c.map((h, m) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center",
                style: {
                  width: h.days * r,
                  borderRight: m < c.length - 1 ? "2px solid var(--gantt-grid-dark)" : "none"
                },
                children: h.label
              },
              m
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[32px] items-center text-xs font-medium",
            style: {
              minWidth: l,
              backgroundColor: "var(--gantt-bg-secondary)",
              color: "var(--gantt-text-secondary)"
            },
            children: f.map((h, m) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center",
                style: {
                  width: h.days * r,
                  borderRight: "1px solid var(--gantt-border-light)"
                },
                children: h.label
              },
              m
            ))
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center text-xs font-bold",
            style: {
              minWidth: l,
              backgroundColor: "var(--gantt-bg-tertiary)",
              borderBottom: "1px solid var(--gantt-border)",
              color: "var(--gantt-text-primary)"
            },
            children: c.map((h, m) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center pl-2",
                style: {
                  width: h.days * r,
                  borderRight: m < c.length - 1 ? "2px solid var(--gantt-grid-dark)" : "none"
                },
                children: h.label
              },
              m
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center text-xs font-medium",
            style: {
              minWidth: l,
              backgroundColor: "var(--gantt-bg-secondary)",
              borderBottom: "1px solid var(--gantt-border-light)",
              color: "var(--gantt-text-secondary)"
            },
            children: f.map((h, m) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center",
                style: {
                  width: h.days * r,
                  borderRight: "1px solid var(--gantt-border)"
                },
                children: h.label
              },
              m
            ))
          }
        ),
        d
      ] })
    }
  );
}, Sn = ({
  minDate: e,
  totalDays: t,
  chartHeight: r,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: o,
  zoomLevel: i
}) => {
  const l = re(() => {
    if (i === "MONTH") return [];
    const c = [];
    for (let f = 0; f < t; f++) {
      const d = ne(e, f), y = hn(d), h = y === 0, m = y === 6, u = je(d, s, o), g = s.some((p) => vr(p, d));
      if (u || m || g) {
        const p = f * n;
        let b = _.holiday;
        h ? b = _.sunday : g ? b = _.holiday : m && (b = _.weekend), c.push(
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: p,
              y: 0,
              width: n,
              height: r,
              fill: b,
              className: "pointer-events-none"
            },
            `weekend-${f}`
          )
        );
      }
    }
    return c;
  }, [e, t, r, n, s, o, i]);
  return /* @__PURE__ */ a.jsx("g", { children: l });
}, { MILESTONE_LANE_HEIGHT: Nc } = ce, jc = (e, t, r) => {
  if (e.length === 0) return [];
  const n = 25, s = 14, o = 12, i = e.map((d) => ({
    milestone: d,
    x: Ge(d.date, t, r),
    labelLevel: 0,
    labelWidth: d.name.length * s + n
  })).sort((d, y) => d.x - y.x), l = [], c = [], f = (d, y) => c.some(
    (h) => !(y < h.start - o || d > h.end + o)
  );
  for (const d of i) {
    const y = d.labelWidth, h = d.x - y, m = d.x - o;
    if (!f(h, m))
      c.push({ start: h, end: m }), l.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: 0
      });
    else {
      const u = d.x + o, g = d.x + y;
      f(u, g) ? l.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: -1
      }) : (c.push({ start: u, end: g }), l.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, no = ({
  milestone: e,
  x: t,
  labelLevel: r = 0,
  isDragging: n = !1,
  dragX: s,
  onMouseDown: o,
  onDoubleClick: i,
  variant: l = "header",
  lineHeight: c
}) => {
  const f = e.milestoneType === "DETAIL", d = f ? 8 : 11, y = n && s !== void 0 ? s : t, h = f ? _.milestoneDetail : _.milestone, m = f ? _.milestoneDetailHover : _.focus;
  let u, g, p;
  r === 0 ? (u = -8, g = 4, p = "end") : r === 1 ? (u = 8, g = 4, p = "start") : (u = 0, g = -12, p = "middle");
  const b = (v) => {
    o && (v.preventDefault(), v.stopPropagation(), o(v, e));
  }, x = (v) => {
    i && (v.preventDefault(), v.stopPropagation(), i(e));
  };
  if (l === "body") {
    const w = c || 1e3;
    let k, T;
    return r === 0 ? (k = -8, T = "end") : r === 1 ? (k = 8, T = "start") : (k = 0, T = "middle"), /* @__PURE__ */ a.jsxs(
      "g",
      {
        transform: `translate(${y}, 0)`,
        className: "pointer-events-none",
        children: [
          /* @__PURE__ */ a.jsx(
            "line",
            {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: w,
              stroke: h,
              strokeWidth: 1.2,
              strokeDasharray: "4, 5",
              className: "opacity-90"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "path",
            {
              d: `M ${-d / 2} ${12 - d / 2} L ${d / 2} ${12 - d / 2} L 0 ${12 + d / 2} Z`,
              fill: h,
              className: "drop-shadow-sm"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "text",
            {
              x: k,
              y: 16,
              textAnchor: T,
              className: `select-none text-[10px] ${f ? "font-medium" : "font-bold"}`,
              fill: f ? _.milestoneDetail : _.textSecondary,
              children: e.name
            }
          )
        ]
      }
    );
  }
  const D = Nc - d / 2 - 2;
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${y}, ${D})`,
      className: `group ${o ? "cursor-ew-resize" : "cursor-pointer"} ${n ? "cursor-ew-resize" : ""}`,
      onMouseDown: b,
      onDoubleClick: x,
      children: [
        /* @__PURE__ */ a.jsx(
          "path",
          {
            d: `M ${-d / 2} ${-d / 2} L ${d / 2} ${-d / 2} L 0 ${d / 2} Z`,
            fill: n ? m : h,
            className: "drop-shadow-sm transition-transform duration-150 group-hover:scale-[1.3]",
            style: {
              transformOrigin: "center",
              transformBox: "fill-box",
              transform: n ? "scale(1.3)" : void 0
            }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: 0,
            cy: 0,
            r: d,
            fill: "transparent",
            className: "cursor-ew-resize"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "text",
          {
            x: u,
            y: g,
            textAnchor: p,
            className: `select-none text-[11px] transition-colors ${f ? "font-medium" : "font-bold"}`,
            fill: n ? f ? _.milestoneDetailHover : _.focus : f ? _.milestoneDetail : _.textSecondary,
            children: e.name
          }
        )
      ]
    }
  );
}, Cn = () => /* @__PURE__ */ a.jsxs("defs", { children: [
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "arrowhead",
      markerWidth: "10",
      markerHeight: "7",
      refX: "9",
      refY: "3.5",
      orient: "auto",
      children: /* @__PURE__ */ a.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: _.dependency })
    }
  ),
  /* @__PURE__ */ a.jsxs(
    "pattern",
    {
      id: "holidayHatchPattern",
      patternUnits: "userSpaceOnUse",
      width: "6",
      height: "6",
      patternTransform: "rotate(45)",
      children: [
        /* @__PURE__ */ a.jsx("rect", { width: "6", height: "6", fill: _.bgPrimary, fillOpacity: 0.7 }),
        /* @__PURE__ */ a.jsx("line", { x1: "0", y1: "0", x2: "0", y2: "6", stroke: _.blue, strokeWidth: "2" })
      ]
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow",
      markerWidth: "5",
      markerHeight: "5",
      refX: "4",
      refY: "2.5",
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.5,0.5 L4,2.5 L0.5,4.5",
          fill: "none",
          stroke: _.textPrimary,
          strokeWidth: "1",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-selected",
      markerWidth: "5",
      markerHeight: "5",
      refX: "4",
      refY: "2.5",
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.5,0.5 L4,2.5 L0.5,4.5",
          fill: "none",
          stroke: _.focus,
          strokeWidth: "1.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-connecting",
      markerWidth: "5",
      markerHeight: "5",
      refX: "4",
      refY: "2.5",
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.5,0.5 L4,2.5 L0.5,4.5",
          fill: "none",
          stroke: _.success,
          strokeWidth: "1.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-hover",
      markerWidth: "5",
      markerHeight: "5",
      refX: "4",
      refY: "2.5",
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.5,0.5 L4,2.5 L0.5,4.5",
          fill: "none",
          stroke: _.textPrimary,
          strokeWidth: "1.2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-compact",
      markerWidth: Ce.WIDTH,
      markerHeight: Ce.HEIGHT,
      refX: Ce.REF_X,
      refY: Ce.REF_Y,
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.25,0.25 L2.5,1.5 L0.25,2.75",
          fill: "none",
          stroke: _.textPrimary,
          strokeWidth: Ce.STROKE_WIDTH,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-selected-compact",
      markerWidth: Ce.WIDTH,
      markerHeight: Ce.HEIGHT,
      refX: Ce.REF_X,
      refY: Ce.REF_Y,
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.25,0.25 L2.5,1.5 L0.25,2.75",
          fill: "none",
          stroke: _.focus,
          strokeWidth: Ce.STROKE_WIDTH * 1.2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-connecting-compact",
      markerWidth: Ce.WIDTH,
      markerHeight: Ce.HEIGHT,
      refX: Ce.REF_X,
      refY: Ce.REF_Y,
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.25,0.25 L2.5,1.5 L0.25,2.75",
          fill: "none",
          stroke: _.success,
          strokeWidth: Ce.STROKE_WIDTH * 1.2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ),
  /* @__PURE__ */ a.jsx(
    "marker",
    {
      id: "dependency-arrow-hover-compact",
      markerWidth: Ce.WIDTH,
      markerHeight: Ce.HEIGHT,
      refX: Ce.REF_X,
      refY: Ce.REF_Y,
      orient: "auto",
      children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M0.25,0.25 L2.5,1.5 L0.25,2.75",
          fill: "none",
          stroke: _.textPrimary,
          strokeWidth: Ce.STROKE_WIDTH * 1.2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  )
] }), so = 6, In = 0.3, Wc = ({ day: e, x: t, width: r, barHeight: n, barY: s }) => {
  const o = Math.max(r - In, 1), i = o * e.workDayValue, l = o * e.nonWorkDayValue;
  return /* @__PURE__ */ a.jsxs("g", { children: [
    i > 0 && /* @__PURE__ */ a.jsx(
      "rect",
      {
        x: t + In / 2,
        y: s,
        width: i,
        height: n,
        fill: _.vermilion,
        className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
      }
    ),
    l > 0 && /* @__PURE__ */ a.jsx(
      "rect",
      {
        x: t + In / 2 + i,
        y: s,
        width: l,
        height: n,
        fill: _.teal,
        className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
      }
    )
  ] });
}, ua = He.memo(({
  task: e,
  y: t,
  minDate: r,
  pixelsPerDay: n,
  renderMode: s = "full",
  allTasks: o = [],
  holidays: i = [],
  calendarSettings: l,
  dragInfo: c,
  groupDragDeltaDays: f = 0,
  groupDragInfo: d,
  isFocused: y = !1
}) => {
  const h = s === "full" || s === "bar", m = s === "full" || s === "label";
  if (e.type === "GROUP") return null;
  const { effectiveStartDate: u } = re(() => c ? { effectiveStartDate: c.startDate } : d ? { effectiveStartDate: d.startDate } : f !== 0 ? { effectiveStartDate: ne(e.startDate, f) } : { effectiveStartDate: e.startDate }, [e.startDate, c, d, f]), g = Ge(u, r, n), p = qt(e.id, o, { wbsLevel: 2 }), b = pn(
    p,
    i,
    l || { workOnSaturdays: !0, workOnSundays: !1, workOnHolidays: !1 }
  ), x = b.workDays, D = b.nonWorkDays;
  if (b.totalDays === 0) return null;
  const w = x * n, k = D * n, T = w + k, E = 0;
  return /* @__PURE__ */ a.jsxs("g", { transform: `translate(${g}, ${t})`, className: "group cursor-pointer", children: [
    y && h && /* @__PURE__ */ a.jsx(
      "rect",
      {
        x: -3,
        y: E - 3,
        width: T + 6,
        height: so + 6,
        fill: "none",
        stroke: _.focus,
        strokeWidth: 2,
        rx: 4,
        ry: 4,
        className: "animate-pulse",
        style: { filter: `drop-shadow(0 0 6px ${_.focus})` }
      }
    ),
    m && /* @__PURE__ */ a.jsx(
      "text",
      {
        x: T / 2,
        y: E - 3,
        textAnchor: "middle",
        className: "pointer-events-none select-none font-normal",
        fill: _.textSecondary,
        style: { fontSize: "11px" },
        children: e.name
      }
    ),
    h && b.dailyBreakdown.map((j, N) => {
      const P = Ge(j.date, r, n) - g;
      return /* @__PURE__ */ a.jsx(
        Wc,
        {
          day: j,
          x: P,
          width: n,
          barHeight: so,
          barY: E
        },
        N
      );
    })
  ] });
});
ua.displayName = "MasterTaskBar";
const oo = (e) => e < 0 ? "left" : "right", xn = (e, t) => Math.round(e / t), _c = (e) => e === "move" || e === "move-net" ? "grabbing" : e === "resize-pre-net" || e === "resize-net-post" ? "col-resize" : "ew-resize", Pc = (e, t, r = "grabbing") => (window.addEventListener("mousemove", e), window.addEventListener("mouseup", t), document.body.style.cursor = r, document.body.style.userSelect = "none", () => {
  window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", t), document.body.style.cursor = "", document.body.style.userSelect = "";
}), fa = (e, t, r) => {
  const n = e.filter((l) => l.type === "TASK");
  if (n.length === 0)
    return { referenceTask: null, workingDaysOffsets: /* @__PURE__ */ new Map() };
  const o = [...n].sort(
    (l, c) => l.startDate.getTime() - c.startDate.getTime()
  )[0], i = /* @__PURE__ */ new Map();
  for (const l of n) {
    const c = qn(
      o.startDate,
      l.startDate,
      t,
      r
    );
    i.set(l.id, c);
  }
  return { referenceTask: o, workingDaysOffsets: i };
}, ha = (e, t, r, n, s) => {
  const o = Math.round(e / t);
  if (o === 0) return 0;
  const i = ne(r, o);
  return o > 0 ? qn(r, i, n, s) : -qn(i, r, n, s);
}, Rc = (e, t, r, n, s, o) => {
  let i = e;
  t > 0 && (i = ne(i, t));
  const l = Xt(i, r, s, o);
  return n > 0 ? ne(ne(l, 1), n - 1) : l;
}, ma = (e, t, r, n, s, o) => {
  const i = /* @__PURE__ */ new Map();
  if (n === 0) {
    for (const c of r)
      c.type === "TASK" && i.set(c.id, {
        newStartDate: c.startDate,
        newEndDate: c.endDate
      });
    return i;
  }
  const l = Bs(
    e.startDate,
    n,
    s,
    o
  );
  for (const c of r) {
    if (c.type !== "TASK" || !c.task) continue;
    const f = t.get(c.id) ?? 0, d = f === 0 ? l : Bs(l, f, s, o), y = Rc(
      d,
      c.task.indirectWorkDaysPre,
      c.task.netWorkDays,
      c.task.indirectWorkDaysPost,
      s,
      o
    );
    i.set(c.id, { newStartDate: d, newEndDate: y });
  }
  return i;
}, Oc = {
  calculate(e, t) {
    const { deltaDays: r, direction: n, holidays: s, calendarSettings: o } = t, i = ne(e.originalStartDate, r), l = je(i, s, o) ? hs(i, n, s, o) : i;
    let c = l;
    e.originalIndirectWorkDaysPre > 0 && (c = ne(c, e.originalIndirectWorkDaysPre));
    const f = Xt(
      c,
      e.originalNetWorkDays,
      s,
      o
    );
    c = ne(f, 1);
    let d;
    return e.originalIndirectWorkDaysPost > 0 ? d = ne(c, e.originalIndirectWorkDaysPost - 1) : d = f, {
      currentStartDate: l,
      currentEndDate: d,
      currentIndirectWorkDaysPre: e.originalIndirectWorkDaysPre,
      currentNetWorkDays: e.originalNetWorkDays,
      currentIndirectWorkDaysPost: e.originalIndirectWorkDaysPost
    };
  }
}, Ac = {
  calculate(e, t) {
    const { deltaDays: r } = t, n = e.originalIndirectWorkDaysPost, s = e.originalIndirectWorkDaysPre, o = Math.max(
      -s,
      Math.min(n, r)
    ), i = e.originalIndirectWorkDaysPre + o, l = e.originalIndirectWorkDaysPost - o;
    return {
      currentStartDate: e.originalStartDate,
      currentEndDate: e.originalEndDate,
      currentIndirectWorkDaysPre: i,
      currentNetWorkDays: e.originalNetWorkDays,
      currentIndirectWorkDaysPost: l
    };
  }
}, Lc = {
  calculate(e, t) {
    const { deltaDays: r, holidays: n, calendarSettings: s } = t;
    let o = e.originalStartDate, i = e.originalIndirectWorkDaysPre, l = e.originalNetWorkDays;
    if (e.originalIndirectWorkDaysPre > 0) {
      i = Math.max(0, e.originalIndirectWorkDaysPre - r);
      const c = ne(
        e.originalStartDate,
        e.originalIndirectWorkDaysPre
      );
      o = ne(c, -i);
    } else {
      l = Math.max(1, e.originalNetWorkDays - r);
      const c = e.originalIndirectWorkDaysPost;
      let d = c > 0 ? ne(e.originalEndDate, -c) : e.originalEndDate, y = 1;
      for (; y < l; )
        d = ne(d, -1), je(d, n, s) || y++;
      for (; je(d, n, s); )
        d = ne(d, -1);
      o = d;
    }
    return {
      currentStartDate: o,
      currentEndDate: e.originalEndDate,
      // 종료일 고정
      currentIndirectWorkDaysPre: i,
      currentNetWorkDays: l,
      currentIndirectWorkDaysPost: e.originalIndirectWorkDaysPost
    };
  }
}, Hc = {
  calculate(e, t) {
    const { deltaDays: r, holidays: n, calendarSettings: s } = t;
    let o = e.originalEndDate, i = e.originalIndirectWorkDaysPost, l = e.originalNetWorkDays;
    if (e.originalIndirectWorkDaysPost > 0) {
      i = Math.max(0, e.originalIndirectWorkDaysPost + r);
      const c = ne(
        e.originalEndDate,
        -e.originalIndirectWorkDaysPost
      );
      o = ne(c, i);
    } else {
      l = Math.max(1, e.originalNetWorkDays + r);
      const c = ne(
        e.originalStartDate,
        e.originalIndirectWorkDaysPre
      );
      o = Xt(c, l, n, s);
    }
    return {
      currentStartDate: e.originalStartDate,
      // 시작일 고정
      currentEndDate: o,
      currentIndirectWorkDaysPre: e.originalIndirectWorkDaysPre,
      currentNetWorkDays: l,
      currentIndirectWorkDaysPost: i
    };
  }
}, zc = {
  calculate(e, t) {
    const { deltaDays: r } = t, n = e.originalNetWorkDays - 1, s = e.originalIndirectWorkDaysPre, o = Math.max(
      -s,
      Math.min(n, r)
    );
    return {
      currentStartDate: e.originalStartDate,
      currentEndDate: e.originalEndDate,
      currentIndirectWorkDaysPre: e.originalIndirectWorkDaysPre + o,
      currentNetWorkDays: e.originalNetWorkDays - o,
      currentIndirectWorkDaysPost: e.originalIndirectWorkDaysPost
    };
  }
}, Fc = {
  calculate(e, t) {
    const { deltaDays: r } = t, n = e.originalIndirectWorkDaysPost, s = e.originalNetWorkDays - 1, o = Math.max(
      -s,
      Math.min(n, r)
    );
    return {
      currentStartDate: e.originalStartDate,
      currentEndDate: e.originalEndDate,
      currentIndirectWorkDaysPre: e.originalIndirectWorkDaysPre,
      currentNetWorkDays: e.originalNetWorkDays + o,
      currentIndirectWorkDaysPost: e.originalIndirectWorkDaysPost - o
    };
  }
}, $c = {
  move: Oc,
  "move-net": Ac,
  "resize-pre": Lc,
  "resize-post": Hc,
  "resize-pre-net": zc,
  "resize-net-post": Fc
}, Bc = (e) => {
  const t = $c[e];
  if (!t)
    throw new Error(`Unknown drag type: ${e}`);
  return t;
}, Gc = (e, t, r) => Bc(e).calculate(t, r);
function bn({
  onMove: e,
  onEnd: t,
  cursor: r = "grabbing"
}) {
  const [n, s] = te(null), o = be(null), i = be(e), l = be(t);
  fe(() => {
    i.current = e, l.current = t;
  }, [e, t]), fe(() => {
    o.current = n;
  }, [n]);
  const c = W((h) => {
    s(h), o.current = h;
  }, []), f = W(() => {
    s(null), o.current = null;
  }, []), d = W((h) => {
    const m = o.current;
    m && i.current(h, m, s);
  }, []), y = W(() => {
    const h = o.current;
    h && l.current(h), s(null), o.current = null;
  }, []);
  return fe(() => {
    if (n)
      return Pc(d, y, r);
  }, [n, d, y, r]), {
    state: n,
    stateRef: o,
    setState: s,
    start: c,
    stop: f,
    isDragging: !!n
  };
}
function ws(e, t) {
  e((r) => r ? { ...r, ...t } : null);
}
const Vc = ({
  pixelsPerDay: e,
  holidays: t,
  calendarSettings: r,
  onBarDrag: n
}) => {
  const s = be(null), { state: o, start: i, isDragging: l } = bn({
    // 드래그 중 처리
    onMove: (d, y, h) => {
      if (!n) return;
      const m = d.clientX - y.startX, u = xn(m, e), g = oo(m), p = Gc(
        y.dragType,
        {
          originalStartDate: y.originalStartDate,
          originalEndDate: y.originalEndDate,
          originalIndirectWorkDaysPre: y.originalIndirectWorkDaysPre,
          originalNetWorkDays: y.originalNetWorkDays,
          originalIndirectWorkDaysPost: y.originalIndirectWorkDaysPost
        },
        { deltaDays: u, direction: g, holidays: t, calendarSettings: r }
      );
      h((b) => b ? {
        ...b,
        currentStartDate: p.currentStartDate,
        currentEndDate: p.currentEndDate,
        currentIndirectWorkDaysPre: p.currentIndirectWorkDaysPre,
        currentNetWorkDays: p.currentNetWorkDays,
        currentIndirectWorkDaysPost: p.currentIndirectWorkDaysPost,
        lastDeltaX: m
      } : null);
    },
    // 드래그 완료 처리
    onEnd: (d) => {
      if (!n) return;
      const y = oo(d.lastDeltaX);
      let h = d.currentStartDate, m = d.currentEndDate;
      if (d.dragType === "move" && je(h, t, r)) {
        const p = hs(h, y, t, r);
        h = p;
        let b = p;
        d.currentIndirectWorkDaysPre > 0 && (b = ne(b, d.currentIndirectWorkDaysPre));
        const x = Xt(b, d.currentNetWorkDays, t, r);
        d.currentIndirectWorkDaysPost > 0 ? m = ne(x, d.currentIndirectWorkDaysPost) : m = x;
      }
      const u = h.getTime() !== d.originalStartDate.getTime() || m.getTime() !== d.originalEndDate.getTime(), g = d.currentIndirectWorkDaysPre !== d.originalIndirectWorkDaysPre || d.currentNetWorkDays !== d.originalNetWorkDays || d.currentIndirectWorkDaysPost !== d.originalIndirectWorkDaysPost;
      (u || g) && n({
        taskId: d.taskId,
        dragType: d.dragType,
        newStartDate: h,
        newEndDate: m,
        newIndirectWorkDaysPre: d.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: d.currentIndirectWorkDaysPost,
        newNetWorkDays: d.currentNetWorkDays
      });
    },
    // 기본 커서 (동적 커서는 별도 처리)
    cursor: "grabbing"
  });
  fe(() => {
    if (o) {
      const d = _c(o.dragType);
      document.body.style.cursor = d;
    } else
      document.body.style.cursor = "";
    return () => {
      document.body.style.cursor = "", s.current && (s.current(), s.current = null);
    };
  }, [o]);
  const c = W((d, y, h, m) => {
    n && (d.preventDefault(), d.stopPropagation(), i({
      taskId: y,
      dragType: h,
      startX: d.clientX,
      originalStartDate: m.startDate,
      originalEndDate: m.endDate,
      originalIndirectWorkDaysPre: m.indirectWorkDaysPre,
      originalNetWorkDays: m.netWorkDays,
      originalIndirectWorkDaysPost: m.indirectWorkDaysPost,
      currentStartDate: m.startDate,
      currentEndDate: m.endDate,
      currentIndirectWorkDaysPre: m.indirectWorkDaysPre,
      currentNetWorkDays: m.netWorkDays,
      currentIndirectWorkDaysPost: m.indirectWorkDaysPost,
      lastDeltaX: 0
    }));
  }, [n, i]), f = W((d) => o && o.taskId === d ? {
    startDate: o.currentStartDate,
    endDate: o.currentEndDate,
    indirectWorkDaysPre: o.currentIndirectWorkDaysPre,
    indirectWorkDaysPost: o.currentIndirectWorkDaysPost,
    netWorkDays: o.currentNetWorkDays
  } : null, [o]);
  return {
    isDragging: l,
    handleBarMouseDown: c,
    getDragInfo: f
  };
}, Yc = ({
  minDate: e,
  pixelsPerDay: t,
  milestones: r,
  onMilestoneUpdate: n
}) => {
  const { state: s, start: o } = bn({
    // 드래그 중 처리
    onMove: (f, d, y) => {
      const h = f.clientX - d.startX, m = Ge(d.originalDate, e, t), u = Math.max(0, m + h);
      ws(y, { currentX: u });
    },
    // 드래그 완료 처리
    onEnd: (f) => {
      if (!n) return;
      const d = Ge(f.originalDate, e, t), y = f.currentX - d, h = xn(y, t);
      if (h !== 0) {
        const m = ne(f.originalDate, h), u = r.find((g) => g.id === f.milestoneId);
        u && n({
          ...u,
          date: m
        });
      }
    },
    cursor: "grabbing"
  }), i = W((f, d) => {
    if (!n) return;
    f.preventDefault(), f.stopPropagation();
    const y = Ge(d.date, e, t);
    o({
      milestoneId: d.id,
      startX: f.clientX,
      originalDate: d.date,
      currentX: y
    });
  }, [n, e, t, o]), l = W((f) => {
    if ((s == null ? void 0 : s.milestoneId) === f)
      return s.currentX;
  }, [s]), c = W((f) => (s == null ? void 0 : s.milestoneId) === f, [s]);
  return {
    handleMilestoneMouseDown: i,
    getMilestoneDragX: l,
    isMilestoneDragging: c
  };
}, Uc = ({
  pixelsPerDay: e,
  allTasks: t,
  holidays: r,
  calendarSettings: n,
  onGroupDrag: s
}) => {
  const { state: o, start: i, isDragging: l } = bn({
    // 드래그 중: 작업일 기준으로 크리티컬 패스 유지하며 이동
    onMove: (h, m, u) => {
      if (!s || !m.referenceTask) return;
      const g = h.clientX - m.startX, p = xn(g, e), b = ha(
        g,
        e,
        m.referenceTask.startDate,
        r,
        n
      ), x = ma(
        m.referenceTask,
        m.workingDaysOffsets,
        m.affectedTasks,
        b,
        r,
        n
      ), D = new Map(m.taskDragInfoMap);
      for (const [v, w] of x) {
        const k = m.taskDragInfoMap.get(v);
        k && D.set(v, {
          ...k,
          currentStartDate: w.newStartDate,
          currentEndDate: w.newEndDate
        });
      }
      ws(u, {
        currentDeltaDays: p,
        currentDeltaWorkingDays: b,
        taskDragInfoMap: D
      });
    },
    // 드래그 완료: 작업일 단위 이동이 0이면 무시
    onEnd: (h) => {
      if (!s || h.currentDeltaWorkingDays === 0) return;
      const m = Array.from(h.taskDragInfoMap.entries()).map(
        ([u, g]) => ({
          taskId: u,
          newStartDate: g.currentStartDate,
          newEndDate: g.currentEndDate
        })
      );
      s({
        groupId: h.groupId,
        deltaDays: h.currentDeltaDays,
        affectedTaskIds: h.affectedTasks.map((u) => u.id),
        taskUpdates: m
      });
    },
    cursor: "grabbing"
  }), c = W((h, m, u) => {
    if (!s) return;
    h.preventDefault(), h.stopPropagation();
    const g = qt(m, t), { referenceTask: p, workingDaysOffsets: b } = fa(
      g,
      r,
      n
    ), x = /* @__PURE__ */ new Map();
    for (const D of g)
      D.type === "TASK" && D.task && x.set(D.id, {
        originalStartDate: D.startDate,
        originalEndDate: D.endDate,
        indirectWorkDaysPre: D.task.indirectWorkDaysPre,
        netWorkDays: D.task.netWorkDays,
        indirectWorkDaysPost: D.task.indirectWorkDaysPost,
        currentStartDate: D.startDate,
        currentEndDate: D.endDate
      });
    i({
      groupId: m,
      startX: h.clientX,
      originalStartDate: u.startDate,
      originalEndDate: u.endDate,
      affectedTasks: g,
      currentDeltaDays: 0,
      taskDragInfoMap: x,
      referenceTask: p,
      workingDaysOffsets: b,
      currentDeltaWorkingDays: 0
    });
  }, [s, t, r, n, i]), f = W((h) => o && o.groupId === h ? o.currentDeltaDays : 0, [o]), d = W((h) => {
    if (!o) return null;
    const m = o.taskDragInfoMap.get(h);
    return m ? {
      startDate: m.currentStartDate,
      endDate: m.currentEndDate
    } : null;
  }, [o]), y = W((h) => !o || !o.affectedTasks.find((u) => u.id === h) ? 0 : o.currentDeltaDays, [o]);
  return {
    isDragging: l,
    handleGroupBarMouseDown: c,
    getGroupDragDeltaDays: f,
    getTaskGroupDragDeltaDays: y,
    getTaskDragInfo: d
    // 새 함수: 스냅된 시작일/종료일 포함
  };
}, ga = (e, t) => {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return e.forEach((o) => {
    r.set(o.id, o), n.set(o.id, []), s.set(o.id, []);
  }), t.forEach((o) => {
    const i = n.get(o.sourceTaskId), l = s.get(o.targetTaskId);
    i && i.push(o), l && l.push(o);
  }), { nodes: r, outgoingEdges: n, incomingEdges: s };
}, Kc = (e, t) => {
  const r = /* @__PURE__ */ new Set(), n = [e];
  for (; n.length > 0; ) {
    const s = n.shift();
    if (r.has(s)) continue;
    r.add(s), (t.outgoingEdges.get(s) || []).forEach((l) => {
      r.has(l.targetTaskId) || n.push(l.targetTaskId);
    }), (t.incomingEdges.get(s) || []).forEach((l) => {
      r.has(l.sourceTaskId) || n.push(l.sourceTaskId);
    });
  }
  return Array.from(r);
}, Xc = (e, t) => t.some(
  (r) => r.sourceTaskId === e || r.targetTaskId === e
), qc = (e) => {
  const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), s = (o) => {
    t.add(o), r.add(o);
    const i = e.outgoingEdges.get(o) || [];
    for (const l of i) {
      const c = l.targetTaskId;
      if (t.has(c)) {
        if (r.has(c))
          return n.set(c, o), c;
      } else {
        n.set(c, o);
        const f = s(c);
        if (f !== null)
          return f;
      }
    }
    return r.delete(o), null;
  };
  for (const o of e.nodes.keys())
    if (!t.has(o)) {
      n.set(o, null);
      const i = s(o);
      if (i !== null) {
        const l = [i];
        let c = n.get(i) ?? null;
        for (; c !== null && c !== i; )
          l.unshift(c), c = n.get(c) ?? null;
        return c === i && l.unshift(i), { hasCycle: !0, cyclePath: l };
      }
    }
  return { hasCycle: !1, cyclePath: [] };
}, Qc = (e, t, r, n) => {
  const s = {
    id: "__temp_cycle_check__",
    sourceTaskId: e,
    targetTaskId: t,
    sourceDayIndex: 0,
    targetDayIndex: 0
  }, o = ga(r, [...n, s]);
  return qc(o).hasCycle;
}, ao = (e, t) => {
  if (!e) return !1;
  if (!e.task)
    return t < 0 ? (console.warn(
      `[isValidDayIndex] Negative dayIndex ${t} is invalid for task ${e.id} without indirect work data.`
    ), !1) : !0;
  const { indirectWorkDaysPre: r, netWorkDays: n, indirectWorkDaysPost: s } = e.task;
  if (t < 0) {
    const i = -r;
    return t < i ? (console.warn(
      `[isValidDayIndex] dayIndex ${t} is out of range. Valid range for task ${e.id}: ${i} to -1`
    ), !1) : !0;
  }
  const o = n + s;
  return t > o ? (console.warn(
    `[isValidDayIndex] dayIndex ${t} is out of range. Valid range for task ${e.id}: 0 to ${o}`
  ), !1) : !0;
}, Jc = ({
  dependencies: e,
  tasks: t,
  onDependencyCreate: r,
  onDependencyDelete: n,
  onCycleDetected: s
}) => {
  const [o, i] = te(null), [l, c] = te(null), [f, d] = te(null), [y, h] = te(null), m = W(
    (v, w) => {
      if (!o)
        i({ taskId: v, dayIndex: w }), d(null);
      else {
        if (o.taskId !== v && !e.some(
          (T) => T.sourceTaskId === o.taskId && T.targetTaskId === v && T.sourceDayIndex === o.dayIndex && T.targetDayIndex === w || T.sourceTaskId === v && T.targetTaskId === o.taskId && T.sourceDayIndex === w && T.targetDayIndex === o.dayIndex
        ) && r) {
          const T = t.find((L) => L.id === o.taskId), E = t.find((L) => L.id === v), j = ao(T, o.dayIndex), N = ao(E, w);
          if (!j || !N) {
            console.warn(
              `[handleAnchorClick] Blocking dependency creation due to invalid dayIndex. Source: ${o.taskId}[${o.dayIndex}], Target: ${v}[${w}]`
            ), i(null);
            return;
          }
          if (Qc(
            o.taskId,
            v,
            t,
            e
          ))
            s == null || s({
              sourceTaskId: o.taskId,
              targetTaskId: v
            });
          else {
            const L = {
              id: `dep-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              sourceTaskId: o.taskId,
              targetTaskId: v,
              sourceDayIndex: o.dayIndex,
              targetDayIndex: w
            };
            r(L);
          }
        }
        i(null);
      }
    },
    [o, e, t, r, s]
  ), u = W(
    (v, w) => {
      c(w === null ? null : { taskId: v, dayIndex: w });
    },
    []
  ), g = W((v) => {
    d((w) => w === v ? null : v), i(null);
  }, []), p = W((v) => {
    h(v);
  }, []), b = W(() => {
    i(null);
  }, []), x = W(() => {
    d(null), i(null);
  }, []), D = W(() => {
    f && n && (n(f), d(null));
  }, [f, n]);
  return {
    connectingFrom: o,
    hoveredAnchor: l,
    selectedDepId: f,
    hoveredDepId: y,
    isConnecting: o !== null,
    handleAnchorClick: m,
    handleAnchorHover: u,
    handleDependencyClick: g,
    handleDependencyHover: p,
    cancelConnection: b,
    deleteSelectedDependency: D,
    clearSelection: x
  };
}, io = 8, lo = 30, Zc = (e, t, r, n) => {
  if (t < 0 || t > n)
    return { zone: null, showLeftHandle: !1, showRightHandle: !1 };
  const s = e < lo, o = e > r - lo;
  return e < io ? { zone: "resize-left", showLeftHandle: !0, showRightHandle: o } : e > r - io ? { zone: "resize-right", showLeftHandle: s, showRightHandle: !0 } : { zone: "move", showLeftHandle: s, showRightHandle: o };
}, ed = (e) => {
  if (!e) return "default";
  switch (e.zone) {
    case "resize-left":
    case "resize-right":
      return "ew-resize";
    case "move":
      return "grab";
    default:
      return "default";
  }
}, td = ({
  barWidth: e,
  barHeight: t,
  isDragging: r,
  onMouseLeave: n
}) => {
  const [s, o] = te(null), i = W((f) => {
    if (r) return;
    const y = f.currentTarget.getBoundingClientRect(), h = f.clientX - y.left, m = f.clientY - y.top, u = Zc(h, m, e, t);
    o(u);
  }, [e, t, r]), l = W(() => {
    o(null), n == null || n();
  }, [n]), c = ed(s);
  return {
    hoverInfo: s,
    cursor: c,
    handleMouseMove: i,
    handleMouseLeave: l
  };
}, rd = ({
  startDate: e,
  endDate: t,
  dragInfo: r,
  groupDragDeltaDays: n = 0,
  groupDragInfo: s,
  dependencyDragDeltaDays: o = 0,
  dependencyDragInfo: i
}) => {
  const { effectiveStartDate: l, effectiveEndDate: c } = re(() => r ? {
    effectiveStartDate: r.startDate,
    effectiveEndDate: r.endDate
  } : i ? {
    effectiveStartDate: i.startDate,
    effectiveEndDate: i.endDate
  } : o !== 0 ? {
    effectiveStartDate: ne(e, o),
    effectiveEndDate: ne(t, o)
  } : s ? {
    effectiveStartDate: s.startDate,
    effectiveEndDate: s.endDate
  } : n !== 0 ? {
    effectiveStartDate: ne(e, n),
    effectiveEndDate: ne(t, n)
  } : { effectiveStartDate: e, effectiveEndDate: t }, [
    e,
    t,
    r,
    i,
    o,
    s,
    n
  ]);
  return {
    effectiveStartDate: l,
    effectiveEndDate: c,
    isDependencyDragging: o !== 0 || !!i
  };
}, { BAR_HEIGHT: nd } = ce, ya = He.memo(({
  task: e,
  y: t,
  minDate: r,
  pixelsPerDay: n,
  barHeight: s,
  renderMode: o = "full",
  holidays: i = [],
  calendarSettings: l,
  isDraggable: c = !1,
  dragInfo: f,
  onDragStart: d,
  onDoubleClick: y,
  groupDragDeltaDays: h = 0,
  groupDragInfo: m,
  dependencyDragDeltaDays: u = 0,
  dependencyDragInfo: g,
  onDependencyDragStart: p,
  hasDependency: b = !1,
  onMouseEnter: x,
  onMouseLeave: D,
  isFocused: v = !1
}) => {
  const w = s ?? nd, k = o === "full" || o === "bar", T = o === "full" || o === "label";
  if (e.type === "GROUP" || !e.task) return null;
  const E = 0, j = !!f, { effectiveStartDate: N, effectiveEndDate: P, isDependencyDragging: L } = rd({
    startDate: e.startDate,
    endDate: e.endDate,
    dragInfo: f,
    groupDragDeltaDays: h,
    groupDragInfo: m,
    dependencyDragDeltaDays: u,
    dependencyDragInfo: g
  }), $ = Ge(N, r, n), R = re(() => l ? je(N, i, l) : !1, [N, i, l]), { netWorkDays: H, indirectWorkDaysPre: K, indirectWorkDaysPost: U, indirectWorkNamePre: C, indirectWorkNamePost: V } = e.task, X = (f == null ? void 0 : f.indirectWorkDaysPre) ?? K, S = (f == null ? void 0 : f.indirectWorkDaysPost) ?? U, A = (f == null ? void 0 : f.netWorkDays) ?? H, M = l ? ms(e.task, l) : { workOnSaturdays: !0, workOnSundays: !1, workOnHolidays: !1 }, F = ne(N, X), I = S > 0 ? ne(P, -S) : P, Y = l && i ? Zo(F, I, i, M) : [], G = Y.length, q = A > 0 ? A + G : 0, Q = X * n, de = q * n, he = S * n, pe = Q + de + he, Te = 0, We = Q, qe = Q + de, _e = Jr.HANDLE_WIDTH, ve = Jr.BOUNDARY_HANDLE_WIDTH, De = {
    startDate: N,
    endDate: P,
    indirectWorkDaysPre: X,
    netWorkDays: A,
    indirectWorkDaysPost: S
  }, { hoverInfo: Pe, cursor: Ve, handleMouseMove: tt, handleMouseLeave: nt } = td({
    barWidth: pe,
    barHeight: w,
    isDragging: j,
    onMouseLeave: D
  });
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${$}, ${t})`,
      className: `group ${j || L ? "opacity-90" : ""}`,
      style: { cursor: Ve },
      onDoubleClick: y,
      onMouseEnter: x,
      onMouseMove: tt,
      onMouseLeave: nt,
      children: [
        L && k && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -4,
            y: -4,
            width: pe + 8,
            height: w + 8,
            fill: "none",
            stroke: _.success,
            strokeWidth: 2,
            strokeDasharray: "6,3",
            rx: 4,
            ry: 4,
            className: "pointer-events-none",
            style: { animation: "pulse 1.5s ease-in-out infinite", opacity: 0.8 }
          }
        ),
        R && k && /* @__PURE__ */ a.jsxs("g", { className: "pointer-events-none", children: [
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: -2,
              y: -2,
              width: pe + 4,
              height: w + 4,
              fill: "none",
              stroke: "#f59e0b",
              strokeWidth: 2,
              strokeDasharray: "4,2",
              rx: 2,
              ry: 2,
              opacity: 0.9
            }
          ),
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: pe,
              height: w,
              fill: "url(#holidayHatchPattern)",
              opacity: 0.5
            }
          )
        ] }),
        v && k && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -3,
            y: -3,
            width: pe + 6,
            height: w + 6,
            fill: "none",
            stroke: _.focus,
            strokeWidth: 2,
            rx: E + 2,
            ry: E + 2,
            className: "animate-pulse",
            style: { filter: `drop-shadow(0 0 6px ${_.focus})` }
          }
        ),
        X > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          k && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: Te,
              y: 0,
              width: Q,
              height: w,
              fill: _.blue,
              rx: E,
              ry: E,
              className: `drop-shadow-sm transition-opacity ${j ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: "none" }
            }
          ),
          T && C && /* @__PURE__ */ a.jsx(
            "text",
            {
              x: Te + Q / 2,
              y: w + 11,
              textAnchor: "middle",
              className: "pointer-events-none select-none text-[9px] font-medium",
              fill: _.blue,
              children: C
            }
          )
        ] }),
        k && A > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: We,
              y: 0,
              width: de,
              height: w,
              fill: _.red,
              rx: E,
              ry: E,
              className: `drop-shadow-sm transition-opacity ${j ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: "none" }
            }
          ),
          Y.map((we, Ye) => /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: We + we.offset * n,
              y: 0,
              width: n,
              height: w,
              fill: "url(#holidayHatchPattern)",
              className: "pointer-events-none"
            },
            `holiday-${Ye}`
          ))
        ] }),
        S > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          k && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: qe,
              y: 0,
              width: he,
              height: w,
              fill: _.blue,
              rx: E,
              ry: E,
              className: `drop-shadow-sm transition-opacity ${j ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: "none" }
            }
          ),
          T && V && /* @__PURE__ */ a.jsx(
            "text",
            {
              x: qe + he / 2,
              y: -3,
              textAnchor: "middle",
              className: "pointer-events-none select-none text-[9px] font-medium",
              fill: _.blue,
              children: V
            }
          )
        ] }),
        k && c && A > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: We + ve,
            y: 0,
            width: Math.max(0, de - ve * 2),
            height: w,
            fill: "transparent",
            className: "cursor-grab active:cursor-grabbing",
            onMouseDown: (we) => {
              b && p && p(we, e.id, {
                startDate: N,
                endDate: P
              }) || d == null || d(we, e.id, "move", De);
            },
            children: /* @__PURE__ */ a.jsxs("title", { children: [
              b ? "연결된 태스크와 함께 이동" : "전체 이동",
              " (드래그)"
            ] })
          }
        ),
        k && c && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -_e / 2,
            y: 0,
            width: _e,
            height: w,
            fill: "transparent",
            className: "cursor-ew-resize",
            onMouseDown: (we) => d == null ? void 0 : d(we, e.id, "resize-pre", De),
            children: /* @__PURE__ */ a.jsxs("title", { children: [
              X > 0 ? "앞 간접작업일 조절" : "순작업일 조절",
              " (드래그)"
            ] })
          }
        ),
        k && c && X > 0 && A > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: Q - ve / 2,
            y: 0,
            width: ve,
            height: w,
            fill: "transparent",
            className: "cursor-col-resize",
            onMouseDown: (we) => d == null ? void 0 : d(we, e.id, "resize-pre-net", De),
            children: /* @__PURE__ */ a.jsx("title", { children: "앞간접-순작업 경계 조절 (드래그)" })
          }
        ),
        k && c && S > 0 && A > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: qe - ve / 2,
            y: 0,
            width: ve,
            height: w,
            fill: "transparent",
            className: "cursor-col-resize",
            onMouseDown: (we) => d == null ? void 0 : d(we, e.id, "resize-net-post", De),
            children: /* @__PURE__ */ a.jsx("title", { children: "순작업-뒤간접 경계 조절 (드래그)" })
          }
        ),
        k && c && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: pe - _e / 2,
            y: 0,
            width: _e,
            height: w,
            fill: "transparent",
            className: "cursor-ew-resize",
            onMouseDown: (we) => d == null ? void 0 : d(we, e.id, "resize-post", De),
            children: /* @__PURE__ */ a.jsxs("title", { children: [
              S > 0 ? "뒤 간접작업일 조절" : "순작업일 조절",
              " (드래그)"
            ] })
          }
        ),
        k && c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 1,
              y: w / 2 - 6,
              width: 3,
              height: 12,
              rx: 1.5,
              fill: _.textInverse,
              className: "pointer-events-none",
              style: {
                opacity: Pe != null && Pe.showLeftHandle ? 0.8 : 0,
                transition: "opacity 0.15s ease"
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: pe - 4,
              y: w / 2 - 6,
              width: 3,
              height: 12,
              rx: 1.5,
              fill: _.textInverse,
              className: "pointer-events-none",
              style: {
                opacity: Pe != null && Pe.showRightHandle ? 0.8 : 0,
                transition: "opacity 0.15s ease"
              }
            }
          )
        ] }),
        T && /* @__PURE__ */ a.jsx(
          "text",
          {
            x: -8,
            y: w / 2 + 4,
            textAnchor: "end",
            className: "pointer-events-none select-none text-[11px] font-medium",
            fill: _.textSecondary,
            children: e.name
          }
        ),
        T && j && /* @__PURE__ */ a.jsxs("g", { children: [
          /* @__PURE__ */ a.jsxs(
            "text",
            {
              x: pe / 2,
              y: -6,
              textAnchor: "middle",
              className: "pointer-events-none select-none text-[10px] font-bold",
              fill: _.focus,
              children: [
                xe(N, "MM/dd"),
                " ~ ",
                xe(P, "MM/dd")
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "text",
            {
              x: pe / 2,
              y: w + 12,
              textAnchor: "middle",
              className: "pointer-events-none select-none text-[9px]",
              fill: _.textMuted,
              children: [
                "앞",
                X,
                "일 + 순",
                A,
                "일 + 뒤",
                S,
                "일"
              ]
            }
          )
        ] })
      ]
    }
  );
});
ya.displayName = "DetailTaskBar";
const dr = He.memo((e) => {
  const { task: t, isMasterView: r, ...n } = e;
  return t.type === "GROUP" ? null : r ? /* @__PURE__ */ a.jsx(
    ua,
    {
      task: t,
      y: n.y,
      minDate: n.minDate,
      pixelsPerDay: n.pixelsPerDay,
      renderMode: n.renderMode,
      allTasks: n.allTasks,
      holidays: n.holidays,
      calendarSettings: n.calendarSettings,
      groupDragDeltaDays: n.groupDragDeltaDays,
      groupDragInfo: n.groupDragInfo,
      isFocused: n.isFocused
    }
  ) : /* @__PURE__ */ a.jsx(
    ya,
    {
      task: t,
      y: n.y,
      minDate: n.minDate,
      pixelsPerDay: n.pixelsPerDay,
      barHeight: n.barHeight,
      renderMode: n.renderMode,
      holidays: n.holidays,
      calendarSettings: n.calendarSettings,
      isDraggable: n.isDraggable,
      dragInfo: n.dragInfo,
      onDragStart: n.onDragStart,
      onDoubleClick: n.onDoubleClick,
      groupDragDeltaDays: n.groupDragDeltaDays,
      groupDragInfo: n.groupDragInfo,
      dependencyDragDeltaDays: n.dependencyDragDeltaDays,
      dependencyDragInfo: n.dependencyDragInfo,
      onDependencyDragStart: n.onDependencyDragStart,
      hasDependency: n.hasDependency,
      onMouseEnter: n.onMouseEnter,
      onMouseLeave: n.onMouseLeave,
      isFocused: n.isFocused
    }
  );
});
dr.displayName = "TaskBar";
const sd = {
  lessThanXSeconds: {
    one: "1초 미만",
    other: "{{count}}초 미만"
  },
  xSeconds: {
    one: "1초",
    other: "{{count}}초"
  },
  halfAMinute: "30초",
  lessThanXMinutes: {
    one: "1분 미만",
    other: "{{count}}분 미만"
  },
  xMinutes: {
    one: "1분",
    other: "{{count}}분"
  },
  aboutXHours: {
    one: "약 1시간",
    other: "약 {{count}}시간"
  },
  xHours: {
    one: "1시간",
    other: "{{count}}시간"
  },
  xDays: {
    one: "1일",
    other: "{{count}}일"
  },
  aboutXWeeks: {
    one: "약 1주",
    other: "약 {{count}}주"
  },
  xWeeks: {
    one: "1주",
    other: "{{count}}주"
  },
  aboutXMonths: {
    one: "약 1개월",
    other: "약 {{count}}개월"
  },
  xMonths: {
    one: "1개월",
    other: "{{count}}개월"
  },
  aboutXYears: {
    one: "약 1년",
    other: "약 {{count}}년"
  },
  xYears: {
    one: "1년",
    other: "{{count}}년"
  },
  overXYears: {
    one: "1년 이상",
    other: "{{count}}년 이상"
  },
  almostXYears: {
    one: "거의 1년",
    other: "거의 {{count}}년"
  }
}, od = (e, t, r) => {
  let n;
  const s = sd[e];
  return typeof s == "string" ? n = s : t === 1 ? n = s.one : n = s.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? n + " 후" : n + " 전" : n;
}, ad = {
  full: "y년 M월 d일 EEEE",
  long: "y년 M월 d일",
  medium: "y.MM.dd",
  short: "y.MM.dd"
}, id = {
  full: "a H시 mm분 ss초 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ld = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, cd = {
  date: Yt({
    formats: ad,
    defaultWidth: "full"
  }),
  time: Yt({
    formats: id,
    defaultWidth: "full"
  }),
  dateTime: Yt({
    formats: ld,
    defaultWidth: "full"
  })
}, dd = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: "P"
}, ud = (e, t, r, n) => dd[e], fd = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"]
}, hd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"]
}, md = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  wide: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ]
}, gd = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
}, yd = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, pd = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, xd = (e, t) => {
  const r = Number(e);
  switch (String(t == null ? void 0 : t.unit)) {
    case "minute":
    case "second":
      return String(r);
    case "date":
      return r + "일";
    default:
      return r + "번째";
  }
}, bd = {
  ordinalNumber: xd,
  era: dt({
    values: fd,
    defaultWidth: "wide"
  }),
  quarter: dt({
    values: hd,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: dt({
    values: md,
    defaultWidth: "wide"
  }),
  day: dt({
    values: gd,
    defaultWidth: "wide"
  }),
  dayPeriod: dt({
    values: yd,
    defaultWidth: "wide",
    formattingValues: pd,
    defaultFormattingWidth: "wide"
  })
}, Dd = /^(\d+)(일|번째)?/i, vd = /\d+/i, wd = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
}, kd = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
}, Ed = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
}, Td = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Sd = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
}, Cd = {
  any: [
    /^1월?$/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, Id = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
}, Md = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
}, Nd = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
}, jd = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
  }
}, Wd = {
  ordinalNumber: Xo({
    matchPattern: Dd,
    parsePattern: vd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ut({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: kd,
    defaultParseWidth: "any"
  }),
  quarter: ut({
    matchPatterns: Ed,
    defaultMatchWidth: "wide",
    parsePatterns: Td,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ut({
    matchPatterns: Sd,
    defaultMatchWidth: "wide",
    parsePatterns: Cd,
    defaultParseWidth: "any"
  }),
  day: ut({
    matchPatterns: Id,
    defaultMatchWidth: "wide",
    parsePatterns: Md,
    defaultParseWidth: "any"
  }),
  dayPeriod: ut({
    matchPatterns: Nd,
    defaultMatchWidth: "any",
    parsePatterns: jd,
    defaultParseWidth: "any"
  })
}, _d = {
  code: "ko",
  formatDistance: od,
  formatLong: cd,
  formatRelative: ud,
  localize: bd,
  match: Wd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, co = ({
  x: e,
  y: t,
  clickedDate: r,
  viewMode: n,
  onAddTask: s,
  onAddMilestone: o,
  onClose: i,
  selectedDependencyId: l,
  onDeleteDependency: c
}) => {
  const f = n === "DETAIL", d = !!l && !!c, y = 200, h = f ? 140 : 100, m = d ? h + 44 : h, u = Math.min(e, window.innerWidth - y - 10), g = Math.min(t, window.innerHeight - m - 10);
  return fe(() => {
    const p = (b) => {
      b.key === "Escape" && i();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [i]), fe(() => {
    const p = () => {
      i();
    }, b = setTimeout(() => {
      document.addEventListener("click", p);
    }, 0);
    return () => {
      clearTimeout(b), document.removeEventListener("click", p);
    };
  }, [i]), br.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "fixed z-[9999] min-w-[180px] rounded-lg py-1 shadow-lg",
        style: {
          left: u,
          top: g,
          backgroundColor: "var(--gantt-bg-primary)",
          border: "1px solid var(--gantt-border)"
        },
        onClick: (p) => p.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "px-4 py-2 text-xs",
              style: {
                color: "var(--gantt-text-muted)",
                borderBottom: "1px solid var(--gantt-border)"
              },
              children: xe(r, "yyyy-MM-dd (EEE)", { locale: _d })
            }
          ),
          d && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: () => {
                  c(l), i();
                },
                className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 dark:text-red-400",
                style: { "--hover-bg": "var(--gantt-bg-hover)" },
                children: [
                  /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                  "종속성 삭제"
                ]
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "my-1", style: { borderTop: "1px solid var(--gantt-border)" } })
          ] }),
          f && s && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => {
                s(r), i();
              },
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-primary)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4 text-blue-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" }) }),
                "Task 추가"
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => {
                o(r), i();
              },
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-primary)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4 text-purple-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" }) }),
                "마일스톤 추가"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "my-1", style: { borderTop: "1px solid var(--gantt-border)" } }),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: i,
              className: "context-menu-item flex w-full items-center gap-2 px-4 py-2 text-left text-sm",
              style: { color: "var(--gantt-text-muted)" },
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
                "취소"
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
}, pa = (e, t = [], r) => {
  if (!e.task || !r || !t.length)
    return /* @__PURE__ */ new Set();
  const { indirectWorkDaysPre: n, indirectWorkDaysPost: s } = e.task, o = ms(e.task, r), i = ne(e.startDate, n), l = s > 0 ? ne(e.endDate, -s) : e.endDate, c = Zo(
    i,
    l,
    t,
    o
  );
  return new Set(c.map((f) => n + f.offset));
}, xa = (e, t, r = [], n) => {
  const s = Math.floor(t), o = t - s;
  if (!e.task || !n)
    return t;
  const { indirectWorkDaysPre: i } = e.task, l = pa(e, r, n);
  if (s < 0) {
    const d = i + s;
    return d < 0 && console.warn(
      `[workingDayToCalendarOffset] Invalid dayIndex ${t} for task ${e.id} with indirectWorkDaysPre=${i}. Clamping to 0.`
    ), Math.max(0, d) + o;
  }
  if (l.size === 0)
    return i + t;
  let c = i, f = 0;
  for (; f < s; )
    l.has(c) || f++, c++;
  for (; l.has(c); )
    c++;
  return c + o;
}, uo = ({
  task: e,
  rowIndex: t,
  minDate: r,
  pixelsPerDay: n,
  connectingFrom: s,
  dependencies: o,
  onAnchorClick: i,
  onAnchorHover: l,
  holidays: c,
  calendarSettings: f,
  dependencyDragDeltaDays: d = 0,
  offsetY: y = ce.MILESTONE_LANE_HEIGHT,
  rowStart: h,
  rowHeight: m,
  effectiveBarHeight: u,
  isCompact: g = !1,
  isHoverActive: p = !1
}) => {
  const b = g ? ra : Nt, x = re(() => {
    const T = $e(e.startDate, r), { ROW_HEIGHT: E, BAR_HEIGHT: j } = ce, N = h ?? t * E, P = m ?? E, L = u ?? j, $ = y + N + (P - L) / 2 + L, R = [];
    if (e.task) {
      const { netWorkDays: H, indirectWorkDaysPre: K, indirectWorkDaysPost: U } = e.task, C = pa(e, c, f), V = C.size, X = K + H + V + U, S = Math.floor(X);
      for (let I = 1; I < K; I++) {
        const Y = I - 1, G = I - K;
        R.push({
          taskId: e.id,
          dayIndex: G,
          x: (T + Y) * n,
          y: $
        });
      }
      let A = 0;
      for (let I = K; I <= K + H + V; I++)
        if (!C.has(I)) {
          if (A > H)
            break;
          R.push({
            taskId: e.id,
            dayIndex: A,
            x: (T + I) * n,
            y: $
          }), A++;
        }
      const M = K + H + V;
      for (let I = 1; I <= U; I++) {
        const Y = M + I, G = H + I;
        R.push({
          taskId: e.id,
          dayIndex: G,
          x: (T + Y) * n,
          y: $
        });
      }
      if (X - S >= 0.5) {
        const I = H + U + 1;
        R.push({
          taskId: e.id,
          dayIndex: I,
          x: (T + X) * n,
          y: $
        });
      }
    } else {
      const H = $e(e.endDate, e.startDate) + 1;
      for (let U = 0; U <= Math.floor(H); U++)
        R.push({
          taskId: e.id,
          dayIndex: U,
          x: (T + U) * n,
          y: $
        });
      H - Math.floor(H) >= 0.5 && R.push({
        taskId: e.id,
        dayIndex: H,
        x: (T + H) * n,
        y: $
      });
    }
    if (d !== 0) {
      const H = d * n;
      R.forEach((K) => {
        K.x += H;
      });
    }
    return R;
  }, [e, t, r, n, c, f, d, y, h, m, u]), D = (T) => o.some(
    (E) => E.sourceTaskId === e.id && E.sourceDayIndex === T || E.targetTaskId === e.id && E.targetDayIndex === T
  ), v = re(() => {
    const T = [];
    o.forEach((N) => {
      if (N.sourceTaskId === e.id && N.targetTaskId === e.id) {
        const P = Math.min(N.sourceDayIndex, N.targetDayIndex), L = Math.max(N.sourceDayIndex, N.targetDayIndex);
        T.push({ from: P, to: L });
      }
    });
    const E = o.filter((N) => N.targetTaskId === e.id).map((N) => N.targetDayIndex), j = o.filter((N) => N.sourceTaskId === e.id).map((N) => N.sourceDayIndex);
    return E.forEach((N) => {
      j.forEach((P) => {
        if (N !== P) {
          const L = Math.min(N, P), $ = Math.max(N, P);
          T.push({ from: L, to: $ });
        }
      });
    }), T;
  }, [o, e.id]), w = (T) => v.some(
    (E) => T > E.from && T < E.to
  ), k = (T) => (s == null ? void 0 : s.taskId) === e.id && (s == null ? void 0 : s.dayIndex) === T;
  return /* @__PURE__ */ a.jsx("g", { className: "anchor-points", children: x.map((T) => {
    const E = k(T.dayIndex), j = D(T.dayIndex), N = w(T.dayIndex), P = j || N, L = j || E, $ = () => L ? 1 : p && !N ? 0.4 : 0;
    return /* @__PURE__ */ a.jsxs("g", { children: [
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: T.x - Nt.HIT_AREA,
          y: T.y,
          width: Nt.HIT_AREA * 2,
          height: Nt.HIT_AREA,
          fill: "transparent",
          style: { cursor: P ? "default" : "pointer" },
          onClick: P ? void 0 : () => i == null ? void 0 : i(e.id, T.dayIndex),
          onMouseEnter: P ? void 0 : () => l == null ? void 0 : l(e.id, T.dayIndex),
          onMouseLeave: P ? void 0 : () => l == null ? void 0 : l(e.id, null),
          pointerEvents: P ? "none" : "auto"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "circle",
        {
          cx: T.x,
          cy: T.y,
          r: E ? b.RADIUS_ACTIVE : j ? b.RADIUS_CONNECTED : b.RADIUS,
          fill: E ? _.success : j ? _.textPrimary : N ? _.dependency : _.anchorFill,
          stroke: E ? _.success : P ? "none" : _.anchorStroke,
          strokeWidth: P ? 0 : b.STROKE_WIDTH,
          opacity: $(),
          style: {
            cursor: P ? "default" : "pointer",
            transition: "all 0.15s ease",
            pointerEvents: P ? "none" : "auto"
          },
          onClick: P ? void 0 : () => i == null ? void 0 : i(e.id, T.dayIndex),
          onMouseEnter: P ? void 0 : () => l == null ? void 0 : l(e.id, T.dayIndex),
          onMouseLeave: P ? void 0 : () => l == null ? void 0 : l(e.id, null)
        }
      )
    ] }, `anchor-${e.id}-${T.dayIndex}`);
  }) });
}, Pr = (e, t, r, n, s, o = [], i, l = ce.MILESTONE_LANE_HEIGHT, c, f, d) => {
  const y = $e(e.startDate, n), h = xa(e, t, o, i), m = (y + h) * s, { ROW_HEIGHT: u, BAR_HEIGHT: g } = ce, p = c ?? r * u, b = f ?? u, x = d ?? g, D = l + p + (b - x) / 2 + x;
  return {
    taskId: e.id,
    dayIndex: t,
    x: m,
    y: D
  };
}, { ROW_HEIGHT: Mn, BAR_HEIGHT: Zr } = ce, en = (e, t, r, n, s, o = [], i, l = 0, c = ce.MILESTONE_LANE_HEIGHT, f, d = Zr) => {
  const y = $e(e.startDate, n) + l, h = xa(e, t, o, i), m = (y + h) * s, u = e.type === "GROUP", g = f == null ? void 0 : f.find((v) => v.index === r), p = (g == null ? void 0 : g.start) ?? r * Mn, b = u ? Mn : (g == null ? void 0 : g.size) ?? Mn, x = u ? Zr : d, D = c + p + (b - x) / 2 + x;
  return { x: m, y: D };
}, Pd = (e, t, r, n) => {
  const s = t + Nt.RADIUS, o = n - Nt.RADIUS, i = n - t;
  if (Math.abs(i) < 5) {
    const l = r - Nt.RADIUS;
    return `M ${e} ${s} L ${l} ${t}`;
  } else if (i > 0) {
    const l = s + (o - s) / 2;
    return `M ${e} ${s} V ${l} H ${r} V ${o}`;
  } else {
    const l = Jr.DROP_DOWN_OFFSET, c = Math.min(e, r) - Jr.PATH_OFFSET_X;
    return `M ${e} ${s} V ${s + l} H ${c} V ${o - l} H ${r} V ${o}`;
  }
}, fo = ({
  tasks: e,
  dependencies: t,
  minDate: r,
  pixelsPerDay: n,
  selectedDepId: s,
  hoveredDepId: o,
  onDependencyClick: i,
  onDependencyHover: l,
  holidays: c,
  calendarSettings: f,
  getTaskDeltaDays: d,
  offsetY: y,
  rowData: h,
  effectiveBarHeight: m = Zr,
  isCompact: u = !1
}) => {
  const g = u ? ys : gs, p = re(() => {
    const v = /* @__PURE__ */ new Map();
    return e.forEach((w, k) => {
      v.set(w.id, k);
    }), v;
  }, [e]), b = re(() => {
    const v = /* @__PURE__ */ new Map();
    return e.forEach((w) => {
      v.set(w.id, w);
    }), v;
  }, [e]), x = re(() => t.map((v) => {
    const w = b.get(v.sourceTaskId), k = b.get(v.targetTaskId), T = p.get(v.sourceTaskId), E = p.get(v.targetTaskId);
    if (!w || !k || T === void 0 || E === void 0)
      return null;
    const j = (d == null ? void 0 : d(v.sourceTaskId)) ?? 0, N = (d == null ? void 0 : d(v.targetTaskId)) ?? 0, P = en(
      w,
      v.sourceDayIndex,
      T,
      r,
      n,
      c,
      f,
      j,
      y,
      h,
      m
    ), L = en(
      k,
      v.targetDayIndex,
      E,
      r,
      n,
      c,
      f,
      N,
      y,
      h,
      m
    ), $ = Pd(
      P.x,
      P.y,
      L.x,
      L.y
    );
    return {
      id: v.id,
      path: $,
      sourceX: P.x,
      sourceY: P.y,
      targetX: L.x,
      targetY: L.y
    };
  }).filter((v) => v !== null), [t, b, p, r, n, c, f, d, y, h, m]), D = (v) => {
    const w = t.find((E) => E.id === v);
    if (!w || !d) return !1;
    const k = d(w.sourceTaskId), T = d(w.targetTaskId);
    return k !== 0 || T !== 0;
  };
  return /* @__PURE__ */ a.jsx("g", { className: "dependency-lines", children: x.map((v) => {
    const w = s === v.id, k = o === v.id, T = D(v.id), E = u ? "-compact" : "";
    let j = _.textPrimary, N = `url(#dependency-arrow${E})`, P = g.DEFAULT, L;
    return T ? (j = _.success, N = `url(#dependency-arrow-connecting${E})`, P = g.SELECTED) : w ? (j = _.focus, N = `url(#dependency-arrow-selected${E})`, P = g.SELECTED) : k && (j = _.textPrimary, N = `url(#dependency-arrow-hover${E})`, P = g.HOVER), /* @__PURE__ */ a.jsxs("g", { children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: v.path,
          fill: "none",
          stroke: "transparent",
          strokeWidth: 12,
          style: { cursor: "pointer" },
          onClick: () => i == null ? void 0 : i(v.id),
          onMouseEnter: () => l == null ? void 0 : l(v.id),
          onMouseLeave: () => l == null ? void 0 : l(null)
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: v.path,
          fill: "none",
          stroke: j,
          strokeWidth: P,
          strokeDasharray: L,
          markerEnd: N,
          style: {
            cursor: "pointer",
            transition: T ? "none" : "stroke 0.15s, stroke-width 0.15s"
          },
          onClick: () => i == null ? void 0 : i(v.id),
          onMouseEnter: () => l == null ? void 0 : l(v.id),
          onMouseLeave: () => l == null ? void 0 : l(null)
        }
      )
    ] }, `dep-${v.id}`);
  }) });
}, ho = ({
  sourceX: e,
  sourceY: t,
  targetX: r,
  targetY: n,
  isCompact: s = !1
}) => {
  const o = s ? ys : gs, i = s ? ra : Nt, l = s ? "-compact" : "";
  return /* @__PURE__ */ a.jsx(
    "line",
    {
      x1: e,
      y1: t + i.RADIUS,
      x2: r,
      y2: n + i.RADIUS,
      stroke: _.success,
      strokeWidth: o.HOVER,
      strokeDasharray: s ? "3,2" : "5,3",
      markerEnd: `url(#dependency-arrow-connecting${l})`,
      style: { pointerEvents: "none" }
    }
  );
}, mo = ({
  tasks: e,
  dependencies: t,
  minDate: r,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: o,
  getTaskDeltaDays: i,
  offsetY: l,
  rowData: c,
  effectiveBarHeight: f = Zr,
  isCompact: d = !1
}) => {
  const y = d ? ys : gs, h = re(() => {
    const u = /* @__PURE__ */ new Map();
    return e.forEach((g, p) => {
      u.set(g.id, p);
    }), u;
  }, [e]), m = re(() => {
    const u = [];
    return e.forEach((g) => {
      const p = h.get(g.id);
      if (p === void 0) return;
      const b = (i == null ? void 0 : i(g.id)) ?? 0, x = t.filter((v) => v.targetTaskId === g.id).map((v) => v.targetDayIndex), D = t.filter((v) => v.sourceTaskId === g.id).map((v) => v.sourceDayIndex);
      x.forEach((v) => {
        D.forEach((w) => {
          if (v < w) {
            const k = en(
              g,
              v,
              p,
              r,
              n,
              s,
              o,
              b,
              l,
              c,
              f
            ), T = en(
              g,
              w,
              p,
              r,
              n,
              s,
              o,
              b,
              l,
              c,
              f
            );
            u.push({
              taskId: g.id,
              fromX: k.x,
              toX: T.x,
              y: k.y
              // 같은 행이므로 Y는 동일
            });
          }
        });
      });
    }), u;
  }, [e, t, h, r, n, s, o, i, l, c, f]);
  return m.length === 0 ? null : /* @__PURE__ */ a.jsx("g", { className: "in-bar-connection-lines", children: m.map((u, g) => /* @__PURE__ */ a.jsx(
    "line",
    {
      x1: u.fromX,
      y1: u.y,
      x2: u.toX,
      y2: u.y,
      stroke: _.textPrimary,
      strokeWidth: y.DEFAULT,
      style: { pointerEvents: "none" }
    },
    `in-bar-${u.taskId}-${g}`
  )) });
}, Rd = ({
  pixelsPerDay: e,
  holidays: t,
  calendarSettings: r,
  allTasks: n,
  dependencies: s,
  onDependencyDrag: o
}) => {
  const i = re(
    () => ga(n, s),
    [n, s]
  ), l = W(
    (p) => Xc(p, s),
    [s]
  ), { state: c, start: f, isDragging: d } = bn({
    // 드래그 중 처리 (그룹 드래그와 동일한 로직)
    onMove: (p, b, x) => {
      if (!b.referenceTask) return;
      const D = p.clientX - b.startX, v = xn(D, e), w = ha(
        D,
        e,
        b.referenceTask.startDate,
        t,
        r
      ), k = ma(
        b.referenceTask,
        b.workingDaysOffsets,
        b.connectedTasks,
        w,
        t,
        r
      ), T = new Map(b.taskDragInfoMap);
      for (const [E, j] of k) {
        const N = b.taskDragInfoMap.get(E);
        N && T.set(E, {
          ...N,
          currentStartDate: j.newStartDate,
          currentEndDate: j.newEndDate
        });
      }
      ws(x, {
        currentDeltaDays: v,
        // 하위 호환성용
        currentDeltaWorkingDays: w,
        lastDeltaX: D,
        taskDragInfoMap: T
      });
    },
    // 드래그 완료 처리
    onEnd: (p) => {
      if (!o || p.currentDeltaWorkingDays === 0) return;
      const b = Array.from(p.taskDragInfoMap.entries()).map(
        ([x, D]) => ({
          taskId: x,
          newStartDate: D.currentStartDate,
          newEndDate: D.currentEndDate
        })
      );
      o({
        sourceTaskId: p.sourceTaskId,
        deltaDays: p.currentDeltaDays,
        // 참고용 (하위 호환성)
        affectedTaskIds: p.connectedTaskIds,
        taskUpdates: b
        // 신규: 각 태스크의 스냅된 날짜
      });
    },
    cursor: "grabbing"
  }), y = W(
    (p, b, x) => {
      if (!l(b)) return !1;
      p.preventDefault(), p.stopPropagation();
      const D = Kc(b, i), v = n.filter((E) => D.includes(E.id)), { referenceTask: w, workingDaysOffsets: k } = fa(
        v,
        t,
        r
      ), T = /* @__PURE__ */ new Map();
      for (const E of v)
        E.type === "TASK" && E.task && T.set(E.id, {
          originalStartDate: E.startDate,
          originalEndDate: E.endDate,
          indirectWorkDaysPre: E.task.indirectWorkDaysPre,
          netWorkDays: E.task.netWorkDays,
          indirectWorkDaysPost: E.task.indirectWorkDaysPost,
          currentStartDate: E.startDate,
          currentEndDate: E.endDate
        });
      return f({
        sourceTaskId: b,
        startX: p.clientX,
        originalStartDate: x.startDate,
        connectedTaskIds: D,
        connectedTasks: v,
        currentDeltaDays: 0,
        lastDeltaX: 0,
        taskDeltaMap: /* @__PURE__ */ new Map(),
        // 하위 호환성을 위해 유지 (deprecated)
        // 크리티컬 패스 유지를 위한 신규 필드
        taskDragInfoMap: T,
        referenceTask: w,
        workingDaysOffsets: k,
        currentDeltaWorkingDays: 0
      }), !0;
    },
    [o, l, i, n, t, r, f]
  ), h = W(
    (p) => c ? c.connectedTaskIds.includes(p) : !1,
    [c]
  ), m = W(
    (p) => !c || !c.connectedTaskIds.includes(p) ? 0 : c.currentDeltaDays,
    [c]
  ), u = W(() => c ? c.connectedTaskIds : [], [c]), g = W((p) => {
    if (!c) return null;
    const b = c.taskDragInfoMap.get(p);
    return b ? {
      startDate: b.currentStartDate,
      endDate: b.currentEndDate
    } : null;
  }, [c]);
  return {
    isDragging: d,
    taskHasDependency: l,
    handleDependencyBarMouseDown: y,
    isDraggingTask: h,
    getTaskDeltaDays: m,
    getTaskDragInfo: g,
    // 신규: 스냅된 날짜 정보 조회
    getConnectedTaskIds: u
  };
}, { ROW_HEIGHT: Rr, GROUP_ROW_HEIGHT_COMPACT: Od, MILESTONE_LANE_HEIGHT: Ad, BAR_HEIGHT: go, BOTTOM_PADDING: yo } = ce, Ld = (e) => {
  const {
    tasks: t,
    allTasks: r,
    milestones: n,
    viewMode: s,
    zoomLevel: o,
    holidays: i,
    calendarSettings: l,
    virtualRows: c,
    totalHeight: f,
    rowHeight: d,
    barHeight: y,
    onBarDrag: h,
    onGroupDrag: m,
    onMilestoneUpdate: u,
    onMilestoneDoubleClick: g,
    onContextMenuAddTask: p,
    onContextMenuAddMilestone: b,
    anchorDependencies: x = [],
    onAnchorDependencyCreate: D,
    onAnchorDependencyDelete: v,
    onAnchorDependencyDrag: w,
    onCycleDetected: k
  } = e, T = wr[o].pixelsPerDay, E = s === "MASTER", j = s === "UNIFIED", N = !!(c && c.length > 0), P = d ?? Rr, L = y ?? go, $ = L < go, R = re(
    () => new Map((r || t).map((se) => [se.id, se])),
    [r, t]
  ), H = W((se) => {
    if (se.type === "CP")
      return Rr;
    if (se.type === "GROUP") {
      const z = se.parentId ? R.get(se.parentId) : null;
      return !z || z.type !== "CP" ? Rr : $ ? Od : Rr;
    }
    return P;
  }, [P, R, $]), K = W((se) => {
    if (se.type !== "GROUP") return !1;
    if (!se.parentId) return !0;
    const z = R.get(se.parentId);
    return !z || z.type !== "CP";
  }, [R]), { selectTask: U, clearSelection: C } = yn(), [V, X] = te(null), { minDate: S, totalDays: A } = re(() => ps(r || t, n, 60), [r, t, n]), M = re(() => E ? n.filter((se) => !se.milestoneType || se.milestoneType === "MASTER") : n, [n, E]), F = re(() => jc(M, S, T), [M, S, T]), I = A * T, { rowData: Y, fullRowData: G, dynamicTotalHeight: q } = re(() => {
    let se = 0;
    const z = t.map((J, B) => {
      const ae = H(J), me = { index: B, start: se, size: ae, key: B };
      return se += ae, me;
    }), O = z.length === 0 ? yo : z[z.length - 1].start + z[z.length - 1].size + yo;
    return { rowData: N ? c : z, fullRowData: z, dynamicTotalHeight: O };
  }, [t, H, N, c]), Q = N && f || q, de = Math.max(Q + Ad + 100, 500), {
    handleBarMouseDown: he,
    getDragInfo: pe
  } = Vc({
    pixelsPerDay: T,
    holidays: i,
    calendarSettings: l,
    onBarDrag: h
  }), {
    handleMilestoneMouseDown: Te,
    getMilestoneDragX: We,
    isMilestoneDragging: qe
  } = Yc({
    minDate: S,
    pixelsPerDay: T,
    milestones: n,
    onMilestoneUpdate: u
  }), {
    handleGroupBarMouseDown: _e,
    getGroupDragDeltaDays: ve,
    getTaskGroupDragDeltaDays: De,
    getTaskDragInfo: Pe
  } = Uc({
    pixelsPerDay: T,
    allTasks: r || t,
    holidays: i,
    calendarSettings: l,
    onGroupDrag: m
  }), {
    connectingFrom: Ve,
    hoveredAnchor: tt,
    selectedDepId: nt,
    hoveredDepId: we,
    handleAnchorClick: Ye,
    handleAnchorHover: Se,
    handleDependencyClick: Qe,
    handleDependencyHover: Ke,
    clearSelection: ge
  } = Jc({
    dependencies: x,
    tasks: r || t,
    onDependencyCreate: D,
    onDependencyDelete: v,
    onCycleDetected: k
  }), {
    isDragging: Re,
    taskHasDependency: st,
    handleDependencyBarMouseDown: vt,
    getTaskDeltaDays: ot,
    getTaskDragInfo: wt,
    getConnectedTaskIds: kt
  } = Rd({
    pixelsPerDay: T,
    holidays: i,
    calendarSettings: l,
    allTasks: r || t,
    dependencies: x,
    onDependencyDrag: w
  }), Et = W((se) => {
    const z = ot(se);
    return z !== 0 ? z : De(se);
  }, [ot, De]), [ht, mt] = te(null), Ue = W((se) => {
    g && g(se);
  }, [g]), Je = W((se) => {
    if (!p && !b) return;
    se.preventDefault();
    const O = se.currentTarget.getBoundingClientRect(), ue = se.clientX - O.left, J = jl(ue, S, T);
    X({
      x: se.clientX,
      y: se.clientY,
      clickedDate: J
    });
  }, [S, T, p, b]), Tt = W(() => {
    X(null);
  }, []), gt = W((se) => {
    v == null || v(se);
  }, [v]), at = W((se) => {
    se.target === se.currentTarget && (ge(), C());
  }, [ge, C]);
  return {
    values: {
      pixelsPerDay: T,
      isMasterView: E,
      isUnifiedView: j,
      isVirtualized: N,
      isCompact: $,
      effectiveRowHeight: P,
      effectiveBarHeight: L,
      minDate: S,
      totalDays: A,
      chartWidth: I,
      chartHeight: de,
      taskAreaHeight: Q,
      dynamicTotalHeight: q,
      taskMap: R,
      rowData: Y,
      fullRowData: G,
      filteredMilestones: M,
      milestoneLayouts: F,
      getRowHeight: H,
      isBlockTask: K
    },
    dragHandlers: {
      handleBarMouseDown: he,
      getDragInfo: pe,
      handleMilestoneMouseDown: Te,
      getMilestoneDragX: We,
      isMilestoneDragging: qe,
      handleGroupBarMouseDown: _e,
      getGroupDragDeltaDays: ve,
      getTaskGroupDragDeltaDays: De,
      getTaskDragInfo: Pe,
      handleDependencyBarMouseDown: vt,
      isDependencyDragging: Re,
      taskHasDependency: st,
      getDependencyDragDeltaDays: ot,
      getDependencyDragInfo: wt,
      getConnectedTaskIds: kt,
      getCombinedTaskDeltaDays: Et,
      connectingFrom: Ve,
      hoveredAnchor: tt,
      selectedDepId: nt,
      hoveredDepId: we,
      handleAnchorClick: Ye,
      handleAnchorHover: Se,
      handleDependencyClick: Qe,
      handleDependencyHover: Ke,
      clearSelection: ge
    },
    eventHandlers: {
      selectTask: U,
      clearTaskSelection: C,
      handleMilestoneDoubleClick: Ue,
      handleContextMenu: Je,
      handleContextMenuClose: Tt,
      handleSvgClick: at,
      handleDepDelete: gt,
      setHoveredTaskId: mt
    },
    contextMenuState: {
      contextMenu: V
    }
  };
}, $r = xr(({
  minDate: e,
  totalDays: t,
  chartHeight: r,
  pixelsPerDay: n,
  zoomLevel: s
}) => /* @__PURE__ */ a.jsx(a.Fragment, { children: Array.from({ length: t }, (o, i) => {
  const l = ne(e, i), c = hn(l), f = (i + 1) * n - 0.5, d = i * n - 0.5;
  return s === "DAY" ? c === 0 ? /* @__PURE__ */ a.jsxs("g", { children: [
    /* @__PURE__ */ a.jsx(
      "line",
      {
        x1: d,
        y1: 0,
        x2: d,
        y2: r,
        stroke: _.gridDark,
        strokeWidth: 1
      }
    ),
    /* @__PURE__ */ a.jsx(
      "line",
      {
        x1: f,
        y1: 0,
        x2: f,
        y2: r,
        stroke: _.grid,
        strokeWidth: 1
      }
    )
  ] }, `vline-${i}`) : /* @__PURE__ */ a.jsx(
    "line",
    {
      x1: f,
      y1: 0,
      x2: f,
      y2: r,
      stroke: _.grid,
      strokeWidth: 1
    },
    `vline-${i}`
  ) : (s === "WEEK" || s === "MONTH") && c === 0 ? /* @__PURE__ */ a.jsx(
    "line",
    {
      x1: d,
      y1: 0,
      x2: d,
      y2: r,
      stroke: _.grid,
      strokeWidth: 1
    },
    `vline-${i}`
  ) : null;
}) }));
$r.displayName = "VerticalGridLines";
const Zn = xr(({
  rowData: e,
  chartWidth: t,
  offsetY: r = 0
}) => /* @__PURE__ */ a.jsx(a.Fragment, { children: e.map((n) => /* @__PURE__ */ a.jsx(
  "line",
  {
    x1: 0,
    y1: n.start + n.size + r,
    x2: t,
    y2: n.start + n.size + r,
    stroke: _.borderLight,
    strokeWidth: 1
  },
  `line-${n.key}`
)) }));
Zn.displayName = "HorizontalGridLines";
const es = xr(({
  tasks: e,
  rowData: t,
  chartWidth: r,
  offsetY: n = 0
}) => /* @__PURE__ */ a.jsx(a.Fragment, { children: t.map((s) => {
  const o = e[s.index];
  return !o || o.type !== "GROUP" ? null : /* @__PURE__ */ a.jsx(
    "rect",
    {
      x: 0,
      y: s.start + n,
      width: r,
      height: s.size,
      fill: _.bgSecondary,
      fillOpacity: 0.6,
      className: "pointer-events-none"
    },
    `group-bg-${s.key}`
  );
}) }));
es.displayName = "GroupRowBackground";
const ts = 9, Vt = 20, Nn = 1, Hd = ({ day: e, x: t, width: r, barY: n, onHover: s }) => {
  const o = Math.max(r - Nn, 1), i = o * e.workDayValue, l = o * e.nonWorkDayValue;
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      className: "cursor-pointer",
      onMouseEnter: () => s(e, t),
      onMouseLeave: () => s(null, t),
      children: [
        i > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: t + Nn / 2,
            y: n,
            width: i,
            height: ts,
            fill: _.vermilion,
            className: "transition-opacity hover:opacity-80"
          }
        ),
        l > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: t + Nn / 2 + i,
            y: n,
            width: l,
            height: ts,
            fill: _.teal,
            className: "transition-opacity hover:opacity-80"
          }
        )
      ]
    }
  );
}, zd = ({ day: e, x: t, containerWidth: r }) => {
  const s = Math.min(Math.max(t, 10), r - 200 - 10), o = (i) => i === 0 ? "0" : i === 1 ? "1" : i.toFixed(1);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "pointer-events-none absolute z-50 rounded px-3 py-2 text-xs shadow-lg",
      style: {
        left: s,
        top: Vt + 4,
        minWidth: 200,
        backgroundColor: "var(--gantt-tooltip-bg)",
        color: "var(--gantt-tooltip-text)"
      },
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "font-semibold", children: xe(e.date, "yyyy-MM-dd (EEE)") }),
        /* @__PURE__ */ a.jsxs("div", { className: "mt-1 space-y-0.5", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(
              "span",
              {
                className: "inline-block h-2 w-2 rounded-full",
                style: { backgroundColor: _.vermilion }
              }
            ),
            /* @__PURE__ */ a.jsxs("span", { children: [
              "작업일: ",
              o(e.workDayValue),
              "일"
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(
              "span",
              {
                className: "inline-block h-2 w-2 rounded-full",
                style: { backgroundColor: _.teal }
              }
            ),
            /* @__PURE__ */ a.jsxs("span", { children: [
              "비작업일: ",
              o(e.nonWorkDayValue),
              "일"
            ] })
          ] }),
          e.hasNetWork && /* @__PURE__ */ a.jsx("div", { className: "text-green-300", children: "순작업 진행" }),
          e.hasIndirectWork && !e.hasNetWork && /* @__PURE__ */ a.jsx("div", { className: "text-blue-300", children: "간접작업 (비작업일)" }),
          e.isHoliday && /* @__PURE__ */ a.jsx("div", { className: "text-red-300", children: "휴일" })
        ] })
      ]
    }
  );
}, po = ({
  tasks: e,
  holidays: t,
  calendarSettings: r,
  minDate: n,
  pixelsPerDay: s,
  totalWidth: o,
  activeCPId: i
}) => {
  const [l, c] = te(null), [f, d] = te(0), y = (p, b) => {
    let x = p.parentId;
    for (; x; ) {
      if (x === b) return !0;
      const D = e.find((v) => v.id === x);
      if (!D) break;
      x = D.parentId;
    }
    return !1;
  }, h = re(() => {
    const p = i ? e.filter((b) => y(b, i)) : e;
    return pn(p, t, r);
  }, [e, i, t, r]), m = (p, b) => {
    c(p), d(b);
  };
  if (h.totalDays === 0)
    return null;
  const u = (Vt - ts) / 2, g = Ge(h.startDate, n, s);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      style: {
        minWidth: o,
        height: Vt,
        backgroundColor: "var(--gantt-bg-secondary)",
        borderTop: "2px solid var(--gantt-border)"
      },
      children: [
        /* @__PURE__ */ a.jsxs(
          "svg",
          {
            width: o,
            height: Vt,
            className: "block",
            children: [
              h.dailyBreakdown.map((p, b) => {
                const x = Ge(p.date, n, s);
                return /* @__PURE__ */ a.jsx(
                  Hd,
                  {
                    day: p,
                    x,
                    width: s,
                    barY: u,
                    onHover: m
                  },
                  b
                );
              }),
              /* @__PURE__ */ a.jsx(
                "text",
                {
                  x: g - 8,
                  y: Vt / 2 + 3,
                  textAnchor: "end",
                  className: "pointer-events-none select-none text-[9px] font-bold",
                  style: { fill: "var(--gantt-text-secondary)" },
                  children: "Critical Path"
                }
              ),
              (() => {
                const p = (D) => Number.isInteger(D) ? D.toString() : D.toFixed(1), b = g + h.totalDays * s + 8, x = Vt / 2;
                return /* @__PURE__ */ a.jsxs(
                  "g",
                  {
                    className: "pointer-events-none select-none text-[9px]",
                    style: { fill: "var(--gantt-text-muted)" },
                    children: [
                      /* @__PURE__ */ a.jsxs("text", { x: b, y: x + 3, children: [
                        "총일: ",
                        h.totalDays,
                        "일 |"
                      ] }),
                      /* @__PURE__ */ a.jsx("rect", { x: b + 72, y: x - 3, width: 6, height: 6, fill: _.vermilion, rx: 1 }),
                      /* @__PURE__ */ a.jsxs("text", { x: b + 82, y: x + 3, children: [
                        "작업일: ",
                        p(h.workDays),
                        "일 |"
                      ] }),
                      /* @__PURE__ */ a.jsx("rect", { x: b + 152, y: x - 3, width: 6, height: 6, fill: _.teal, rx: 1 }),
                      /* @__PURE__ */ a.jsxs("text", { x: b + 162, y: x + 3, children: [
                        "비작업일: ",
                        p(h.nonWorkDays),
                        "일"
                      ] })
                    ]
                  }
                );
              })()
            ]
          }
        ),
        l && /* @__PURE__ */ a.jsx(zd, { day: l, x: f, containerWidth: o })
      ]
    }
  );
}, jn = 9, it = 20, xo = ({
  tasks: e,
  holidays: t,
  calendarSettings: r,
  minDate: n,
  pixelsPerDay: s,
  totalWidth: o
}) => {
  const i = re(() => pn(e, t, r), [e, t, r]), l = re(() => {
    if (i.totalDays === 0)
      return { workRatio: 0, nonWorkRatio: 0 };
    const u = i.workDays / i.totalDays * 100, g = i.nonWorkDays / i.totalDays * 100;
    return { workRatio: u, nonWorkRatio: g };
  }, [i]), c = (u) => Number.isInteger(u) ? u.toString() : u.toFixed(1);
  if (i.totalDays === 0)
    return null;
  const f = (it - jn) / 2, d = Ge(i.startDate, n, s), y = i.totalDays * s, h = y * (l.workRatio / 100), m = y * (l.nonWorkRatio / 100);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      style: {
        minWidth: o,
        height: it,
        backgroundColor: "var(--gantt-bg-tertiary)",
        borderTop: "1px solid var(--gantt-border-light)"
      },
      children: /* @__PURE__ */ a.jsxs(
        "svg",
        {
          width: o,
          height: it,
          className: "block",
          children: [
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: d,
                y: f,
                width: h,
                height: jn,
                fill: _.vermilion,
                rx: 1
              }
            ),
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: d + h,
                y: f,
                width: m,
                height: jn,
                fill: _.teal,
                rx: 1
              }
            ),
            /* @__PURE__ */ a.jsx(
              "text",
              {
                x: d - 8,
                y: it / 2 + 3,
                textAnchor: "end",
                className: "pointer-events-none select-none text-[9px] font-bold",
                style: { fill: "var(--gantt-text-secondary)" },
                children: "Work Ratio"
              }
            ),
            h >= 40 && /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: d + h / 2,
                y: it / 2 + 3,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[8px] font-semibold",
                style: { fill: "white" },
                children: [
                  l.workRatio.toFixed(1),
                  "%"
                ]
              }
            ),
            m >= 40 && /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: d + h + m / 2,
                y: it / 2 + 3,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[8px] font-semibold",
                style: { fill: "white" },
                children: [
                  l.nonWorkRatio.toFixed(1),
                  "%"
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "g",
              {
                className: "pointer-events-none select-none text-[9px]",
                style: { fill: "var(--gantt-text-muted)" },
                children: [
                  /* @__PURE__ */ a.jsx(
                    "rect",
                    {
                      x: d + y + 8,
                      y: it / 2 - 3,
                      width: 6,
                      height: 6,
                      fill: _.vermilion,
                      rx: 1
                    }
                  ),
                  /* @__PURE__ */ a.jsxs("text", { x: d + y + 18, y: it / 2 + 3, children: [
                    "작업일: ",
                    c(i.workDays),
                    "일 (",
                    l.workRatio.toFixed(1),
                    "%) |"
                  ] }),
                  /* @__PURE__ */ a.jsx(
                    "rect",
                    {
                      x: d + y + 138,
                      y: it / 2 - 3,
                      width: 6,
                      height: 6,
                      fill: _.teal,
                      rx: 1
                    }
                  ),
                  /* @__PURE__ */ a.jsxs("text", { x: d + y + 148, y: it / 2 + 3, children: [
                    "비작업일: ",
                    c(i.nonWorkDays),
                    "일 (",
                    l.nonWorkRatio.toFixed(1),
                    "%)"
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}, { BAR_HEIGHT: Fd } = ce, { BAR_HEIGHT: nr } = ta, bo = He.memo(({
  group: e,
  allTasks: t,
  y: r,
  minDate: n,
  pixelsPerDay: s,
  parentBarHeight: o,
  isDraggable: i = !1,
  currentDeltaDays: l = 0,
  onDragStart: c,
  onToggle: f,
  onClick: d,
  isFocused: y = !1,
  isCompact: h = !1
}) => {
  var P;
  const m = o ?? Fd, u = re(
    () => vs(e.id, t),
    [e.id, t]
  ), g = re(
    () => qt(e.id, t).map((L) => L.id),
    [e.id, t]
  );
  if (!u) return null;
  const { startDate: p, endDate: b, totalDays: x } = u, D = ((P = e.group) == null ? void 0 : P.progress) ?? 0, v = l !== 0 ? ne(p, l) : p, w = Ge(v, n, s), k = x * s, T = k * (D / 100), E = 0, j = (L) => {
    !i || !c || (L.preventDefault(), L.stopPropagation(), c(L, e.id, {
      startDate: p,
      endDate: b,
      affectedTaskIds: g
    }));
  }, N = (L) => {
    L.preventDefault(), L.stopPropagation(), f == null || f(e.id);
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${w}, ${r})`,
      className: i ? "cursor-grab active:cursor-grabbing" : "",
      children: [
        y && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -3,
            y: E - 3,
            width: k + 6,
            height: nr + 6,
            fill: "none",
            stroke: _.focus,
            strokeWidth: 2,
            rx: 4,
            ry: 4,
            className: "animate-pulse",
            style: { filter: `drop-shadow(0 0 6px ${_.focus})` }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: 0,
            y: E,
            width: k,
            height: nr,
            fill: _.summaryBar,
            rx: 2,
            ry: 2,
            opacity: 0.4
          }
        ),
        D > 0 && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: 0,
            y: E,
            width: T,
            height: nr,
            fill: _.summaryProgress,
            rx: 2,
            ry: 2
          }
        ),
        /* @__PURE__ */ a.jsx(
          "text",
          {
            x: h ? -5 : k / 2,
            y: h ? E + nr / 2 + 3 : E - 3,
            textAnchor: h ? "end" : "middle",
            className: "font-normal",
            fill: _.textSecondary,
            style: { fontSize: "11px" },
            children: e.name
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "text",
          {
            x: k + 8,
            y: E + nr / 2 + 3,
            fill: _.textMuted,
            style: { fontSize: "9px" },
            children: [
              D,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: 0,
            y: 0,
            width: k,
            height: m,
            fill: "transparent",
            className: i ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
            onClick: (L) => {
              L.stopPropagation(), d == null || d(L, e.id);
            },
            onMouseDown: j,
            onDoubleClick: N
          }
        )
      ]
    }
  );
}), lt = 4, Or = 3, rs = He.memo(({
  block: e,
  allTasks: t,
  y: r,
  minDate: n,
  pixelsPerDay: s,
  currentDeltaDays: o = 0,
  onToggle: i,
  onClick: l,
  isFocused: c = !1
}) => {
  const f = re(
    () => vs(e.id, t),
    [e.id, t]
  );
  if (!f) return null;
  const { startDate: d, totalDays: y } = f, h = o !== 0 ? ne(d, o) : d, m = Ge(h, n, s), u = y * s, g = 0, p = (b) => {
    b.preventDefault(), b.stopPropagation(), i == null || i(e.id);
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${m}, ${r})`,
      className: "cursor-pointer",
      children: [
        c && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -lt - 3,
            y: g - 3,
            width: u + lt * 2 + 6,
            height: lt * 2 + 6,
            fill: "none",
            stroke: _.focus,
            strokeWidth: 2,
            rx: 4,
            ry: 4,
            className: "animate-pulse",
            style: { filter: `drop-shadow(0 0 6px ${_.focus})` }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "text",
          {
            x: u / 2,
            y: g - 5,
            textAnchor: "middle",
            className: "pointer-events-none select-none font-normal",
            fill: _.textPrimary,
            style: { fontSize: "11px" },
            children: e.name
          }
        ),
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: lt,
            y1: g + Or,
            x2: u - lt,
            y2: g + Or,
            stroke: _.textMuted,
            strokeWidth: 2,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: 0,
            cy: g + Or,
            r: lt,
            fill: _.textMuted,
            stroke: _.bgPrimary,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: u,
            cy: g + Or,
            r: lt,
            fill: _.textMuted,
            stroke: _.bgPrimary,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -lt,
            y: 0,
            width: u + lt * 2,
            height: g + lt * 2 + 4,
            fill: "transparent",
            className: "cursor-pointer",
            onClick: (b) => {
              b.stopPropagation(), l == null || l(b, e.id);
            },
            onDoubleClick: p
          }
        )
      ]
    }
  );
});
rs.displayName = "BlockBar";
const { MILESTONE_LANE_HEIGHT: Ae, BAR_HEIGHT: ct } = ce, { BAR_HEIGHT: Ar } = ta, ns = un(
  (e, t) => {
    const {
      tasks: r,
      allTasks: n,
      milestones: s,
      viewMode: o,
      zoomLevel: i,
      holidays: l,
      calendarSettings: c,
      onBarDrag: f,
      onGroupDrag: d,
      onMilestoneUpdate: y,
      onMilestoneDoubleClick: h,
      onTaskDoubleClick: m,
      virtualRows: u,
      totalHeight: g,
      showCriticalPath: p = !0,
      onGroupToggle: b,
      activeCPId: x,
      onContextMenuAddTask: D,
      onContextMenuAddMilestone: v,
      anchorDependencies: w = [],
      onAnchorDependencyCreate: k,
      onAnchorDependencyDelete: T,
      onAnchorDependencyDrag: E,
      onCycleDetected: j,
      focusedTaskId: N,
      renderMode: P = "all",
      rowHeight: L,
      barHeight: $
    } = e, { values: R, dragHandlers: H, eventHandlers: K, contextMenuState: U } = Ld({
      tasks: r,
      allTasks: n,
      milestones: s,
      viewMode: o,
      zoomLevel: i,
      holidays: l,
      calendarSettings: c,
      virtualRows: u,
      totalHeight: g,
      rowHeight: L,
      barHeight: $,
      onBarDrag: f,
      onGroupDrag: d,
      onMilestoneUpdate: y,
      onMilestoneDoubleClick: h,
      onContextMenuAddTask: D,
      onContextMenuAddMilestone: v,
      anchorDependencies: w,
      onAnchorDependencyCreate: k,
      onAnchorDependencyDelete: T,
      onAnchorDependencyDrag: E,
      onCycleDetected: j
    }), {
      pixelsPerDay: C,
      isMasterView: V,
      isUnifiedView: X,
      isCompact: S,
      effectiveBarHeight: A,
      minDate: M,
      totalDays: F,
      chartWidth: I,
      chartHeight: Y,
      taskAreaHeight: G,
      rowData: q,
      fullRowData: Q,
      milestoneLayouts: de,
      isBlockTask: he
    } = R, {
      handleBarMouseDown: pe,
      getDragInfo: Te,
      handleMilestoneMouseDown: We,
      getMilestoneDragX: qe,
      isMilestoneDragging: _e,
      handleGroupBarMouseDown: ve,
      getGroupDragDeltaDays: De,
      getTaskGroupDragDeltaDays: Pe,
      getTaskDragInfo: Ve,
      handleDependencyBarMouseDown: tt,
      isDependencyDragging: nt,
      taskHasDependency: we,
      getDependencyDragDeltaDays: Ye,
      getDependencyDragInfo: Se,
      getConnectedTaskIds: Qe,
      getCombinedTaskDeltaDays: Ke,
      connectingFrom: ge,
      hoveredAnchor: Re,
      selectedDepId: st,
      hoveredDepId: vt,
      handleAnchorClick: ot,
      handleAnchorHover: wt,
      handleDependencyClick: kt,
      handleDependencyHover: Et
    } = H, {
      selectTask: ht,
      handleMilestoneDoubleClick: mt,
      handleContextMenu: Ue,
      handleContextMenuClose: Je,
      handleSvgClick: Tt,
      handleDepDelete: gt,
      setHoveredTaskId: at
    } = K, { contextMenu: se } = U;
    return P === "header" ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col shrink-0", style: { backgroundColor: "var(--gantt-bg-primary)" }, children: [
      /* @__PURE__ */ a.jsx(
        ro,
        {
          minDate: M,
          totalDays: F,
          pixelsPerDay: C,
          zoomLevel: i,
          holidays: l,
          calendarSettings: c
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "svg",
        {
          width: I,
          height: Ae,
          className: "block",
          style: {
            backgroundColor: "var(--gantt-bg-primary)",
            overflow: "visible",
            borderBottom: "1px solid var(--gantt-border-light)"
          },
          children: [
            /* @__PURE__ */ a.jsx(Cn, {}),
            /* @__PURE__ */ a.jsx(
              Sn,
              {
                minDate: M,
                totalDays: F,
                chartHeight: Ae,
                pixelsPerDay: C,
                holidays: l,
                calendarSettings: c,
                zoomLevel: i
              }
            ),
            /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: I, height: Ae, fill: "transparent" }),
            /* @__PURE__ */ a.jsx(
              $r,
              {
                minDate: M,
                totalDays: F,
                chartHeight: G + Ae,
                pixelsPerDay: C,
                zoomLevel: i
              }
            ),
            de.map((z) => {
              const O = _e(z.milestone.id);
              return /* @__PURE__ */ a.jsx(
                no,
                {
                  milestone: z.milestone,
                  x: z.x,
                  labelLevel: z.labelLevel,
                  isDragging: O,
                  dragX: qe(z.milestone.id),
                  onMouseDown: y ? We : void 0,
                  onDoubleClick: h ? mt : void 0,
                  lineHeight: G + Ae
                },
                z.milestone.id
              );
            })
          ]
        }
      )
    ] }) : P === "content" ? /* @__PURE__ */ a.jsxs("div", { ref: t, className: "relative flex-1", style: { backgroundColor: "var(--gantt-bg-primary)" }, children: [
      /* @__PURE__ */ a.jsxs(
        "svg",
        {
          width: I,
          height: G,
          className: "block",
          onContextMenu: Ue,
          onClick: Tt,
          children: [
            /* @__PURE__ */ a.jsx(Cn, {}),
            /* @__PURE__ */ a.jsx(
              Sn,
              {
                minDate: M,
                totalDays: F,
                chartHeight: G,
                pixelsPerDay: C,
                holidays: l,
                calendarSettings: c,
                zoomLevel: i
              }
            ),
            /* @__PURE__ */ a.jsx(es, { tasks: r, rowData: q, chartWidth: I }),
            /* @__PURE__ */ a.jsx(
              $r,
              {
                minDate: M,
                totalDays: F,
                chartHeight: G,
                pixelsPerDay: C,
                zoomLevel: i
              }
            ),
            /* @__PURE__ */ a.jsx(Zn, { rowData: q, chartWidth: I }),
            q.map((z) => {
              const O = r[z.index];
              if (!O) return null;
              const ue = O.type === "GROUP", J = O.type === "CP";
              let B;
              J ? B = ct : ue ? B = he(O) ? ct : Ar : B = A;
              const ae = z.start + (z.size - B) / 2;
              if (!V && ue)
                return he(O) ? /* @__PURE__ */ a.jsx(
                  rs,
                  {
                    block: O,
                    allTasks: n || r,
                    y: ae,
                    minDate: M,
                    pixelsPerDay: C,
                    currentDeltaDays: De(O.id),
                    onToggle: b,
                    onClick: (oe, Fe) => {
                      ht(Fe, {
                        ctrlKey: oe.ctrlKey || oe.metaKey,
                        shiftKey: oe.shiftKey,
                        visibleTasks: r
                      });
                    },
                    isFocused: N === O.id
                  },
                  `block-${z.key}`
                ) : /* @__PURE__ */ a.jsx(
                  bo,
                  {
                    group: O,
                    allTasks: n || r,
                    y: ae,
                    minDate: M,
                    pixelsPerDay: C,
                    isDraggable: !X && !!d,
                    currentDeltaDays: De(O.id),
                    onDragStart: ve,
                    onToggle: b,
                    onClick: (oe, Fe) => {
                      ht(Fe, {
                        ctrlKey: oe.ctrlKey || oe.metaKey,
                        shiftKey: oe.shiftKey,
                        visibleTasks: r
                      });
                    },
                    isFocused: N === O.id,
                    parentBarHeight: ct,
                    isCompact: S
                  },
                  `group-${z.key}`
                );
              const me = V || X && J;
              return /* @__PURE__ */ a.jsx(
                dr,
                {
                  task: O,
                  y: ae,
                  minDate: M,
                  pixelsPerDay: C,
                  isMasterView: me,
                  renderMode: "bar",
                  allTasks: n || r,
                  holidays: l,
                  calendarSettings: c,
                  isDraggable: !V && !me && !!f,
                  dragInfo: Te(O.id),
                  groupDragDeltaDays: Pe(O.id),
                  groupDragInfo: Ve(O.id),
                  dependencyDragDeltaDays: Ye(O.id),
                  dependencyDragInfo: Se(O.id),
                  onDragStart: pe,
                  onDependencyDragStart: tt,
                  hasDependency: we(O.id),
                  isFocused: N === O.id,
                  onDoubleClick: !V && O.type === "TASK" && m ? () => m(O) : void 0,
                  onMouseEnter: () => at(O.id),
                  onMouseLeave: () => at(null),
                  barHeight: A
                },
                z.key
              );
            }),
            !V && w.length > 0 && /* @__PURE__ */ a.jsx(
              fo,
              {
                tasks: r,
                dependencies: w,
                minDate: M,
                pixelsPerDay: C,
                selectedDepId: st,
                hoveredDepId: vt,
                onDependencyClick: kt,
                onDependencyHover: Et,
                holidays: l,
                calendarSettings: c,
                getTaskDeltaDays: Ke,
                offsetY: 0,
                rowData: Q,
                effectiveBarHeight: A,
                isCompact: S
              }
            ),
            !V && w.length > 0 && /* @__PURE__ */ a.jsx(
              mo,
              {
                tasks: r,
                dependencies: w,
                minDate: M,
                pixelsPerDay: C,
                holidays: l,
                calendarSettings: c,
                getTaskDeltaDays: Ke,
                offsetY: 0,
                rowData: Q,
                effectiveBarHeight: A,
                isCompact: S
              }
            ),
            !V && q.map((z) => {
              const O = r[z.index];
              return !O || O.type !== "TASK" ? null : /* @__PURE__ */ a.jsx(
                uo,
                {
                  task: O,
                  rowIndex: z.index,
                  minDate: M,
                  pixelsPerDay: C,
                  connectingFrom: ge,
                  dependencies: w,
                  onAnchorClick: ot,
                  onAnchorHover: wt,
                  holidays: l,
                  calendarSettings: c,
                  dependencyDragDeltaDays: Ke(O.id),
                  offsetY: 0,
                  rowStart: z.start,
                  rowHeight: z.size,
                  effectiveBarHeight: A,
                  isCompact: S,
                  isHoverActive: !1
                },
                `anchor-${z.key}`
              );
            }),
            q.map((z) => {
              const O = r[z.index];
              if (!O || !V && O.type === "GROUP") return null;
              const ue = O.type === "CP", J = O.type === "GROUP";
              let B;
              ue ? B = ct : J ? B = he(O) ? ct : Ar : B = A;
              const ae = z.start + (z.size - B) / 2, me = V || X && ue;
              return /* @__PURE__ */ a.jsx(
                dr,
                {
                  task: O,
                  y: ae,
                  minDate: M,
                  pixelsPerDay: C,
                  isMasterView: me,
                  renderMode: "label",
                  allTasks: n || r,
                  holidays: l,
                  calendarSettings: c,
                  dragInfo: Te(O.id),
                  groupDragDeltaDays: Pe(O.id),
                  groupDragInfo: Ve(O.id),
                  dependencyDragDeltaDays: Ye(O.id),
                  dependencyDragInfo: Se(O.id),
                  isFocused: N === O.id,
                  barHeight: A
                },
                `label-${z.key}`
              );
            }),
            de.map((z) => {
              const ue = z.milestone.milestoneType === "DETAIL" ? _.milestoneDetail : _.milestone;
              return /* @__PURE__ */ a.jsx(
                "line",
                {
                  x1: z.x,
                  y1: 0,
                  x2: z.x,
                  y2: G,
                  stroke: ue,
                  strokeWidth: 1.2,
                  strokeDasharray: "4, 5",
                  className: "opacity-90 pointer-events-none"
                },
                `ms-line-${z.milestone.id}`
              );
            }),
            !V && ge && Re && ge.taskId !== Re.taskId && (() => {
              const z = r.find((oe) => oe.id === ge.taskId), O = r.find((oe) => oe.id === Re.taskId), ue = r.findIndex((oe) => oe.id === ge.taskId), J = r.findIndex((oe) => oe.id === Re.taskId);
              if (!z || !O || ue < 0 || J < 0) return null;
              const B = Q.find((oe) => oe.index === ue), ae = Q.find((oe) => oe.index === J), me = Pr(
                z,
                ge.dayIndex,
                ue,
                M,
                C,
                l,
                c,
                0,
                B == null ? void 0 : B.start,
                B == null ? void 0 : B.size,
                A
              ), ke = Pr(
                O,
                Re.dayIndex,
                J,
                M,
                C,
                l,
                c,
                0,
                ae == null ? void 0 : ae.start,
                ae == null ? void 0 : ae.size,
                A
              );
              return /* @__PURE__ */ a.jsx(
                ho,
                {
                  sourceX: me.x,
                  sourceY: me.y,
                  targetX: ke.x,
                  targetY: ke.y,
                  isCompact: S
                }
              );
            })(),
            nt && (() => {
              const z = Qe();
              return z.length <= 1 ? null : /* @__PURE__ */ a.jsxs("g", { className: "dependency-drag-indicator", children: [
                /* @__PURE__ */ a.jsx("rect", { x: 10, y: 10, width: 180, height: 28, rx: 6, fill: _.success, fillOpacity: 0.9 }),
                /* @__PURE__ */ a.jsxs("text", { x: 100, y: 28, textAnchor: "middle", fill: "white", fontSize: 12, fontWeight: 600, children: [
                  "🔗 연결된 ",
                  z.length,
                  "개 태스크 이동 중"
                ] })
              ] });
            })()
          ]
        }
      ),
      p && /* @__PURE__ */ a.jsx(
        po,
        {
          tasks: n || r,
          holidays: l,
          calendarSettings: c,
          minDate: M,
          pixelsPerDay: C,
          totalWidth: I,
          activeCPId: x
        }
      ),
      V && p && /* @__PURE__ */ a.jsx(
        xo,
        {
          tasks: n || r,
          holidays: l,
          calendarSettings: c,
          minDate: M,
          pixelsPerDay: C,
          totalWidth: I
        }
      ),
      se && v && /* @__PURE__ */ a.jsx(
        co,
        {
          x: se.x,
          y: se.y,
          clickedDate: se.clickedDate,
          viewMode: o,
          onAddTask: D,
          onAddMilestone: v,
          onClose: Je,
          selectedDependencyId: st,
          onDeleteDependency: T ? gt : void 0
        }
      )
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden", style: { backgroundColor: "var(--gantt-bg-primary)" }, children: /* @__PURE__ */ a.jsxs("div", { ref: t, className: "relative flex-1", children: [
      /* @__PURE__ */ a.jsx(
        ro,
        {
          minDate: M,
          totalDays: F,
          pixelsPerDay: C,
          zoomLevel: i,
          holidays: l,
          calendarSettings: c
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "svg",
        {
          width: I,
          height: Y,
          className: "block",
          style: { backgroundColor: "var(--gantt-bg-primary)" },
          onContextMenu: Ue,
          onClick: Tt,
          children: [
            /* @__PURE__ */ a.jsx(Cn, {}),
            /* @__PURE__ */ a.jsx(
              Sn,
              {
                minDate: M,
                totalDays: F,
                chartHeight: Y,
                pixelsPerDay: C,
                holidays: l,
                calendarSettings: c,
                zoomLevel: i
              }
            ),
            /* @__PURE__ */ a.jsx(es, { tasks: r, rowData: q, chartWidth: I, offsetY: Ae }),
            /* @__PURE__ */ a.jsx(
              $r,
              {
                minDate: M,
                totalDays: F,
                chartHeight: Y,
                pixelsPerDay: C,
                zoomLevel: i
              }
            ),
            /* @__PURE__ */ a.jsx(Zn, { rowData: q, chartWidth: I, offsetY: Ae }),
            /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: I, height: Ae, fill: "transparent" }),
            de.map((z) => {
              const O = _e(z.milestone.id);
              return /* @__PURE__ */ a.jsx(
                no,
                {
                  milestone: z.milestone,
                  x: z.x,
                  labelLevel: z.labelLevel,
                  isDragging: O,
                  dragX: qe(z.milestone.id),
                  onMouseDown: y ? We : void 0,
                  onDoubleClick: h ? mt : void 0
                },
                z.milestone.id
              );
            }),
            /* @__PURE__ */ a.jsx("line", { x1: 0, y1: Ae, x2: I, y2: Ae, stroke: _.grid, strokeWidth: 1 }),
            q.map((z) => {
              const O = r[z.index];
              if (!O) return null;
              const ue = O.type === "GROUP", J = O.type === "CP";
              let B;
              J ? B = ct : ue ? B = he(O) ? ct : Ar : B = A;
              const ae = z.start + (z.size - B) / 2 + Ae;
              if (!V && ue)
                return he(O) ? /* @__PURE__ */ a.jsx(
                  rs,
                  {
                    block: O,
                    allTasks: n || r,
                    y: ae,
                    minDate: M,
                    pixelsPerDay: C,
                    currentDeltaDays: De(O.id),
                    onToggle: b,
                    onClick: (oe, Fe) => {
                      ht(Fe, {
                        ctrlKey: oe.ctrlKey || oe.metaKey,
                        shiftKey: oe.shiftKey,
                        visibleTasks: r
                      });
                    },
                    isFocused: N === O.id
                  },
                  `block-${z.key}`
                ) : /* @__PURE__ */ a.jsx(
                  bo,
                  {
                    group: O,
                    allTasks: n || r,
                    y: ae,
                    minDate: M,
                    pixelsPerDay: C,
                    isDraggable: !X && !!d,
                    currentDeltaDays: De(O.id),
                    onDragStart: ve,
                    onToggle: b,
                    onClick: (oe, Fe) => {
                      ht(Fe, {
                        ctrlKey: oe.ctrlKey || oe.metaKey,
                        shiftKey: oe.shiftKey,
                        visibleTasks: r
                      });
                    },
                    isFocused: N === O.id,
                    parentBarHeight: ct,
                    isCompact: S
                  },
                  `group-${z.key}`
                );
              const me = V || X && J;
              return /* @__PURE__ */ a.jsx(
                dr,
                {
                  task: O,
                  y: ae,
                  minDate: M,
                  pixelsPerDay: C,
                  isMasterView: me,
                  renderMode: "bar",
                  allTasks: n || r,
                  holidays: l,
                  calendarSettings: c,
                  isDraggable: !V && !me && !!f,
                  dragInfo: Te(O.id),
                  groupDragDeltaDays: Pe(O.id),
                  groupDragInfo: Ve(O.id),
                  dependencyDragDeltaDays: Ye(O.id),
                  dependencyDragInfo: Se(O.id),
                  onDragStart: pe,
                  onDependencyDragStart: tt,
                  hasDependency: we(O.id),
                  isFocused: N === O.id,
                  onDoubleClick: !V && O.type === "TASK" && m ? () => m(O) : void 0,
                  onMouseEnter: () => at(O.id),
                  onMouseLeave: () => at(null),
                  barHeight: A
                },
                z.key
              );
            }),
            !V && w.length > 0 && /* @__PURE__ */ a.jsx(
              fo,
              {
                tasks: r,
                dependencies: w,
                minDate: M,
                pixelsPerDay: C,
                selectedDepId: st,
                hoveredDepId: vt,
                onDependencyClick: kt,
                onDependencyHover: Et,
                holidays: l,
                calendarSettings: c,
                getTaskDeltaDays: Ke,
                offsetY: Ae,
                rowData: Q,
                effectiveBarHeight: A,
                isCompact: S
              }
            ),
            !V && w.length > 0 && /* @__PURE__ */ a.jsx(
              mo,
              {
                tasks: r,
                dependencies: w,
                minDate: M,
                pixelsPerDay: C,
                holidays: l,
                calendarSettings: c,
                getTaskDeltaDays: Ke,
                offsetY: Ae,
                rowData: Q,
                effectiveBarHeight: A,
                isCompact: S
              }
            ),
            !V && q.map((z) => {
              const O = r[z.index];
              return !O || O.type !== "TASK" ? null : /* @__PURE__ */ a.jsx(
                uo,
                {
                  task: O,
                  rowIndex: z.index,
                  minDate: M,
                  pixelsPerDay: C,
                  connectingFrom: ge,
                  dependencies: w,
                  onAnchorClick: ot,
                  onAnchorHover: wt,
                  holidays: l,
                  calendarSettings: c,
                  dependencyDragDeltaDays: Ke(O.id),
                  offsetY: Ae,
                  rowStart: z.start,
                  rowHeight: z.size,
                  effectiveBarHeight: A,
                  isCompact: S,
                  isHoverActive: !1
                },
                `anchor-${z.key}`
              );
            }),
            q.map((z) => {
              const O = r[z.index];
              if (!O || !V && O.type === "GROUP") return null;
              const ue = O.type === "CP", J = O.type === "GROUP";
              let B;
              ue ? B = ct : J ? B = he(O) ? ct : Ar : B = A;
              const ae = z.start + (z.size - B) / 2 + Ae, me = V || X && ue;
              return /* @__PURE__ */ a.jsx(
                dr,
                {
                  task: O,
                  y: ae,
                  minDate: M,
                  pixelsPerDay: C,
                  isMasterView: me,
                  renderMode: "label",
                  allTasks: n || r,
                  holidays: l,
                  calendarSettings: c,
                  dragInfo: Te(O.id),
                  groupDragDeltaDays: Pe(O.id),
                  groupDragInfo: Ve(O.id),
                  dependencyDragDeltaDays: Ye(O.id),
                  dependencyDragInfo: Se(O.id),
                  isFocused: N === O.id,
                  barHeight: A
                },
                `label-${z.key}`
              );
            }),
            de.map((z) => {
              const ue = z.milestone.milestoneType === "DETAIL" ? _.milestoneDetail : _.milestone;
              return /* @__PURE__ */ a.jsx(
                "line",
                {
                  x1: z.x,
                  y1: Ae,
                  x2: z.x,
                  y2: Y,
                  stroke: ue,
                  strokeWidth: 1.2,
                  strokeDasharray: "4, 5",
                  className: "opacity-90 pointer-events-none"
                },
                `ms-line-${z.milestone.id}`
              );
            }),
            !V && ge && Re && ge.taskId !== Re.taskId && (() => {
              const z = r.find((oe) => oe.id === ge.taskId), O = r.find((oe) => oe.id === Re.taskId), ue = r.findIndex((oe) => oe.id === ge.taskId), J = r.findIndex((oe) => oe.id === Re.taskId);
              if (!z || !O || ue < 0 || J < 0) return null;
              const B = Q.find((oe) => oe.index === ue), ae = Q.find((oe) => oe.index === J), me = Pr(
                z,
                ge.dayIndex,
                ue,
                M,
                C,
                l,
                c,
                Ae,
                B == null ? void 0 : B.start,
                B == null ? void 0 : B.size,
                A
              ), ke = Pr(
                O,
                Re.dayIndex,
                J,
                M,
                C,
                l,
                c,
                Ae,
                ae == null ? void 0 : ae.start,
                ae == null ? void 0 : ae.size,
                A
              );
              return /* @__PURE__ */ a.jsx(
                ho,
                {
                  sourceX: me.x,
                  sourceY: me.y,
                  targetX: ke.x,
                  targetY: ke.y,
                  isCompact: S
                }
              );
            })(),
            nt && (() => {
              const z = Qe();
              return z.length <= 1 ? null : /* @__PURE__ */ a.jsxs("g", { className: "dependency-drag-indicator", children: [
                /* @__PURE__ */ a.jsx("rect", { x: 10, y: 10, width: 180, height: 28, rx: 6, fill: _.success, fillOpacity: 0.9 }),
                /* @__PURE__ */ a.jsxs("text", { x: 100, y: 28, textAnchor: "middle", fill: "white", fontSize: 12, fontWeight: 600, children: [
                  "🔗 연결된 ",
                  z.length,
                  "개 태스크 이동 중"
                ] })
              ] });
            })()
          ]
        }
      ),
      p && /* @__PURE__ */ a.jsx(
        po,
        {
          tasks: n || r,
          holidays: l,
          calendarSettings: c,
          minDate: M,
          pixelsPerDay: C,
          totalWidth: I,
          activeCPId: x
        }
      ),
      V && p && /* @__PURE__ */ a.jsx(
        xo,
        {
          tasks: n || r,
          holidays: l,
          calendarSettings: c,
          minDate: M,
          pixelsPerDay: C,
          totalWidth: I
        }
      ),
      se && v && /* @__PURE__ */ a.jsx(
        co,
        {
          x: se.x,
          y: se.y,
          clickedDate: se.clickedDate,
          viewMode: o,
          onAddTask: D,
          onAddMilestone: v,
          onClose: Je,
          selectedDependencyId: st,
          onDeleteDependency: T ? gt : void 0
        }
      )
    ] }) });
  }
);
ns.displayName = "GanttTimeline";
const Wn = "w-full rounded-md border px-3 py-2 text-sm", _n = "focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20", Pn = {
  backgroundColor: "var(--gantt-bg-primary)",
  borderColor: "var(--gantt-border)",
  color: "var(--gantt-text-secondary)"
}, Rn = {
  backgroundColor: "var(--gantt-bg-secondary)",
  borderRadius: "0.5rem",
  padding: "1rem"
}, On = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "var(--gantt-text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "0.75rem"
}, $d = ({ milestoneName: e, onConfirm: t, onCancel: r }) => {
  const [n, s] = He.useState(!1);
  return br.createPortal(
    /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "fixed inset-0 z-[60] bg-black/50 transition-opacity",
          onClick: r
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "w-[400px] rounded-xl shadow-2xl",
          style: {
            backgroundColor: "var(--gantt-bg-primary)",
            border: "1px solid var(--gantt-border)"
          },
          onClick: (o) => o.stopPropagation(),
          children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "px-5 py-4",
                style: { borderBottom: "1px solid var(--gantt-border-light)" },
                children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ a.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
                  /* @__PURE__ */ a.jsxs("div", { children: [
                    /* @__PURE__ */ a.jsx(
                      "h3",
                      {
                        className: "text-base font-bold",
                        style: { color: "var(--gantt-text-primary)" },
                        children: "마일스톤 삭제"
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "p",
                      {
                        className: "text-sm",
                        style: { color: "var(--gantt-text-muted)" },
                        children: "이 작업은 되돌릴 수 없습니다"
                      }
                    )
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "px-5 py-4", children: /* @__PURE__ */ a.jsxs("div", { className: "rounded-lg bg-red-50 p-4", children: [
              /* @__PURE__ */ a.jsx(
                "p",
                {
                  className: "text-sm mb-2",
                  style: { color: "var(--gantt-text-secondary)" },
                  children: "다음 마일스톤을 삭제하시겠습니까?"
                }
              ),
              /* @__PURE__ */ a.jsxs(
                "p",
                {
                  className: "flex items-center gap-2 text-sm font-semibold",
                  style: { color: "var(--gantt-text-primary)" },
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "h-2 w-2 rounded-full bg-purple-500" }),
                    e
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "flex justify-end gap-3 px-5 py-4 rounded-b-xl",
                style: {
                  borderTop: "1px solid var(--gantt-border-light)",
                  backgroundColor: "var(--gantt-bg-secondary)"
                },
                children: [
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: r,
                      className: "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                      style: {
                        color: "var(--gantt-text-secondary)",
                        backgroundColor: n ? "var(--gantt-bg-hover)" : "transparent"
                      },
                      onMouseEnter: () => s(!0),
                      onMouseLeave: () => s(!1),
                      children: "취소"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: t,
                      className: "rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors shadow-sm",
                      children: "삭제"
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    document.body
  );
}, Bd = ({
  milestone: e,
  isOpen: t,
  isNew: r = !1,
  onClose: n,
  onSave: s,
  onDelete: o
}) => {
  const [i, l] = te(""), [c, f] = te(""), [d, y] = te(""), [h, m] = te("MASTER"), [u, g] = te(!1), [p, b] = te(!1), [x, D] = te(!1), v = be(null);
  fe(() => {
    e && t && (l(e.name), f(e.description || ""), y(xe(e.date, "yyyy-MM-dd")), m(e.milestoneType || "MASTER"), g(!1), setTimeout(() => {
      var P, L;
      (P = v.current) == null || P.focus(), (L = v.current) == null || L.select();
    }, 100));
  }, [e, t]), fe(() => {
    const P = (L) => {
      L.key === "Escape" && t && (u ? g(!1) : n());
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [t, u, n]);
  const w = re(() => !e || !t ? !1 : i !== e.name || c !== (e.description || "") || d !== xe(e.date, "yyyy-MM-dd") || h !== (e.milestoneType || "MASTER"), [e, t, i, c, d, h]), k = async () => {
    if (!e || !i.trim() || p) return;
    const P = {
      ...e,
      name: i.trim(),
      description: c.trim() || void 0,
      date: new Date(d),
      milestoneType: h
    };
    b(!0);
    try {
      await s(P);
    } catch (L) {
      console.error("[MilestoneEditModal] Save failed:", L);
    } finally {
      b(!1);
    }
  }, T = () => {
    g(!0);
  }, E = async () => {
    if (!(!e || !o || p)) {
      b(!0);
      try {
        await o(e.id), g(!1), n();
      } catch (P) {
        console.error("[MilestoneEditModal] Delete failed:", P), g(!1);
      } finally {
        b(!1);
      }
    }
  }, j = () => {
    g(!1);
  }, N = (P) => {
    P.key === "Enter" && !P.shiftKey && (P.preventDefault(), k());
  };
  return !t || !e ? null : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: n
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "w-full max-w-lg rounded-xl shadow-2xl",
        style: {
          backgroundColor: "var(--gantt-bg-primary)",
          border: "1px solid var(--gantt-border)"
        },
        onClick: (P) => P.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex items-center justify-between px-5 py-4",
              style: { borderBottom: "1px solid var(--gantt-border-light)" },
              children: [
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsx(
                    "h2",
                    {
                      className: "text-base font-bold",
                      style: { color: "var(--gantt-text-primary)" },
                      children: r ? "새 마일스톤" : "마일스톤 설정"
                    }
                  ),
                  !r && e && /* @__PURE__ */ a.jsx(
                    "p",
                    {
                      className: "text-sm mt-0.5",
                      style: { color: "var(--gantt-text-muted)" },
                      children: e.name
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: n,
                    className: "rounded-lg p-2 transition-colors",
                    style: {
                      color: "var(--gantt-text-muted)",
                      backgroundColor: x ? "var(--gantt-bg-hover)" : "transparent"
                    },
                    onMouseEnter: () => D(!0),
                    onMouseLeave: () => D(!1),
                    children: /* @__PURE__ */ a.jsx(gn, { size: 20 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "p-5 space-y-5", children: [
            /* @__PURE__ */ a.jsxs("div", { style: Rn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: On, children: "📌 기본 정보" }),
              /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsxs(
                    "label",
                    {
                      className: "mb-2 flex items-center gap-1.5 text-sm font-medium",
                      style: { color: "var(--gantt-text-secondary)" },
                      children: [
                        /* @__PURE__ */ a.jsx(Xl, { size: 14 }),
                        "마일스톤 이름"
                      ]
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      ref: v,
                      type: "text",
                      value: i,
                      onChange: (P) => l(P.target.value),
                      onKeyDown: N,
                      placeholder: "마일스톤 이름을 입력하세요",
                      className: `${Wn} ${_n}`,
                      style: Pn
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsxs(
                    "label",
                    {
                      className: "mb-2 flex items-center gap-1.5 text-sm font-medium",
                      style: { color: "var(--gantt-text-secondary)" },
                      children: [
                        /* @__PURE__ */ a.jsx($l, { size: 14 }),
                        "날짜"
                      ]
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "input",
                    {
                      type: "date",
                      value: d,
                      onChange: (P) => y(P.target.value),
                      onKeyDown: N,
                      className: `${Wn} ${_n} w-44`,
                      style: Pn
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { style: Rn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: On, children: "👁️ 표시 설정" }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    className: "flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all",
                    style: {
                      borderColor: h === "MASTER" ? "var(--gantt-milestone)" : "var(--gantt-border)",
                      backgroundColor: h === "MASTER" ? "var(--gantt-bg-tertiary)" : "transparent"
                    },
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "milestoneType",
                          value: "MASTER",
                          checked: h === "MASTER",
                          onChange: () => m("MASTER"),
                          className: "h-4 w-4 text-gray-600 focus:ring-gray-500"
                        }
                      ),
                      /* @__PURE__ */ a.jsxs("div", { children: [
                        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ a.jsx(
                            "span",
                            {
                              className: "h-2.5 w-2.5 rounded-full",
                              style: { backgroundColor: "var(--gantt-milestone)" }
                            }
                          ),
                          /* @__PURE__ */ a.jsx(
                            "span",
                            {
                              className: "text-sm font-medium",
                              style: { color: "var(--gantt-text-primary)" },
                              children: "Master View"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ a.jsx(
                          "p",
                          {
                            className: "text-xs mt-0.5",
                            style: { color: "var(--gantt-text-muted)" },
                            children: "전체 공정표에 표시"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ a.jsxs(
                  "label",
                  {
                    className: "flex-1 flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all",
                    style: {
                      borderColor: h === "DETAIL" ? "var(--gantt-milestone-detail)" : "var(--gantt-border)",
                      backgroundColor: h === "DETAIL" ? "color-mix(in srgb, var(--gantt-milestone-detail) 15%, transparent)" : "transparent"
                    },
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "milestoneType",
                          value: "DETAIL",
                          checked: h === "DETAIL",
                          onChange: () => m("DETAIL"),
                          className: "h-4 w-4 text-amber-500 focus:ring-amber-500"
                        }
                      ),
                      /* @__PURE__ */ a.jsxs("div", { children: [
                        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1.5", children: [
                          /* @__PURE__ */ a.jsx(
                            "span",
                            {
                              className: "h-2.5 w-2.5 rounded-full",
                              style: { backgroundColor: "var(--gantt-milestone-detail)" }
                            }
                          ),
                          /* @__PURE__ */ a.jsx(
                            "span",
                            {
                              className: "text-sm font-medium",
                              style: { color: "var(--gantt-text-primary)" },
                              children: "Detail View"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ a.jsx(
                          "p",
                          {
                            className: "text-xs mt-0.5",
                            style: { color: "var(--gantt-text-muted)" },
                            children: "상세 공정표에 표시"
                          }
                        )
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { style: Rn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: On, children: "📝 설명 (선택)" }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: c,
                  onChange: (P) => f(P.target.value),
                  placeholder: "마일스톤에 대한 설명을 입력하세요",
                  rows: 3,
                  className: `${Wn} ${_n} resize-none`,
                  style: Pn
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex justify-between items-center px-5 py-4 rounded-b-xl",
              style: {
                borderTop: "1px solid var(--gantt-border-light)",
                backgroundColor: "var(--gantt-bg-secondary)"
              },
              children: [
                /* @__PURE__ */ a.jsx("div", { children: !r && o && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: T,
                    className: "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                    children: [
                      /* @__PURE__ */ a.jsx(la, { size: 16 }),
                      "삭제"
                    ]
                  }
                ) }),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: w ? k : n,
                    disabled: w && !i.trim(),
                    className: `rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${w ? "bg-purple-600 text-white hover:bg-purple-700 shadow-purple-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none" : "bg-gray-600 text-white hover:bg-gray-700"}`,
                    children: w ? "저장" : "닫기"
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    u && /* @__PURE__ */ a.jsx(
      $d,
      {
        milestoneName: i || e.name,
        onConfirm: E,
        onCancel: j
      }
    )
  ] });
};
function ba(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ba(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Gd() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ba(e)) && (n && (n += " "), n += t);
  return n;
}
const Vd = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, Yd = (e, t) => ({
  classGroupId: e,
  validator: t
}), Da = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), tn = "-", Do = [], Ud = "arbitrary..", Kd = (e) => {
  const t = qd(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Xd(i);
      const l = i.split(tn), c = l[0] === "" && l.length > 1 ? 1 : 0;
      return va(l, c, t);
    },
    getConflictingClassGroupIds: (i, l) => {
      if (l) {
        const c = n[i], f = r[i];
        return c ? f ? Vd(f, c) : c : f || Do;
      }
      return r[i] || Do;
    }
  };
}, va = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], o = r.nextPart.get(s);
  if (o) {
    const f = va(e, t + 1, o);
    if (f) return f;
  }
  const i = r.validators;
  if (i === null)
    return;
  const l = t === 0 ? e.join(tn) : e.slice(t).join(tn), c = i.length;
  for (let f = 0; f < c; f++) {
    const d = i[f];
    if (d.validator(l))
      return d.classGroupId;
  }
}, Xd = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? Ud + n : void 0;
})(), qd = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return Qd(r, t);
}, Qd = (e, t) => {
  const r = Da();
  for (const n in e) {
    const s = e[n];
    ks(s, r, n, t);
  }
  return r;
}, ks = (e, t, r, n) => {
  const s = e.length;
  for (let o = 0; o < s; o++) {
    const i = e[o];
    Jd(i, t, r, n);
  }
}, Jd = (e, t, r, n) => {
  if (typeof e == "string") {
    Zd(e, t, r);
    return;
  }
  if (typeof e == "function") {
    eu(e, t, r, n);
    return;
  }
  tu(e, t, r, n);
}, Zd = (e, t, r) => {
  const n = e === "" ? t : wa(t, e);
  n.classGroupId = r;
}, eu = (e, t, r, n) => {
  if (ru(e)) {
    ks(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Yd(r, e));
}, tu = (e, t, r, n) => {
  const s = Object.entries(e), o = s.length;
  for (let i = 0; i < o; i++) {
    const [l, c] = s[i];
    ks(c, wa(t, l), r, n);
  }
}, wa = (e, t) => {
  let r = e;
  const n = t.split(tn), s = n.length;
  for (let o = 0; o < s; o++) {
    const i = n[o];
    let l = r.nextPart.get(i);
    l || (l = Da(), r.nextPart.set(i, l)), r = l;
  }
  return r;
}, ru = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, nu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const s = (o, i) => {
    r[o] = i, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let i = r[o];
      if (i !== void 0)
        return i;
      if ((i = n[o]) !== void 0)
        return s(o, i), i;
    },
    set(o, i) {
      o in r ? r[o] = i : s(o, i);
    }
  };
}, ss = "!", vo = ":", su = [], wo = (e, t, r, n, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: s
}), ou = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (s) => {
    const o = [];
    let i = 0, l = 0, c = 0, f;
    const d = s.length;
    for (let g = 0; g < d; g++) {
      const p = s[g];
      if (i === 0 && l === 0) {
        if (p === vo) {
          o.push(s.slice(c, g)), c = g + 1;
          continue;
        }
        if (p === "/") {
          f = g;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? l++ : p === ")" && l--;
    }
    const y = o.length === 0 ? s : s.slice(c);
    let h = y, m = !1;
    y.endsWith(ss) ? (h = y.slice(0, -1), m = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(ss) && (h = y.slice(1), m = !0)
    );
    const u = f && f > c ? f - c : void 0;
    return wo(o, m, h, u);
  };
  if (t) {
    const s = t + vo, o = n;
    n = (i) => i.startsWith(s) ? o(i.slice(s.length)) : wo(su, !1, i, void 0, !0);
  }
  if (r) {
    const s = n;
    n = (o) => r({
      className: o,
      parseClassName: s
    });
  }
  return n;
}, au = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let s = [];
    for (let o = 0; o < r.length; o++) {
      const i = r[o], l = i[0] === "[", c = t.has(i);
      l || c ? (s.length > 0 && (s.sort(), n.push(...s), s = []), n.push(i)) : s.push(i);
    }
    return s.length > 0 && (s.sort(), n.push(...s)), n;
  };
}, iu = (e) => ({
  cache: nu(e.cacheSize),
  parseClassName: ou(e),
  sortModifiers: au(e),
  ...Kd(e)
}), lu = /\s+/, cu = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: o
  } = t, i = [], l = e.trim().split(lu);
  let c = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const d = l[f], {
      isExternal: y,
      modifiers: h,
      hasImportantModifier: m,
      baseClassName: u,
      maybePostfixModifierPosition: g
    } = r(d);
    if (y) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let p = !!g, b = n(p ? u.substring(0, g) : u);
    if (!b) {
      if (!p) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (b = n(u), !b) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      p = !1;
    }
    const x = h.length === 0 ? "" : h.length === 1 ? h[0] : o(h).join(":"), D = m ? x + ss : x, v = D + b;
    if (i.indexOf(v) > -1)
      continue;
    i.push(v);
    const w = s(b, p);
    for (let k = 0; k < w.length; ++k) {
      const T = w[k];
      i.push(D + T);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
}, du = (...e) => {
  let t = 0, r, n, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = ka(r)) && (s && (s += " "), s += n);
  return s;
}, ka = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ka(e[n])) && (r && (r += " "), r += t);
  return r;
}, uu = (e, ...t) => {
  let r, n, s, o;
  const i = (c) => {
    const f = t.reduce((d, y) => y(d), e());
    return r = iu(f), n = r.cache.get, s = r.cache.set, o = l, l(c);
  }, l = (c) => {
    const f = n(c);
    if (f)
      return f;
    const d = cu(c, r);
    return s(c, d), d;
  };
  return o = i, (...c) => o(du(...c));
}, fu = [], Me = (e) => {
  const t = (r) => r[e] || fu;
  return t.isThemeGetter = !0, t;
}, Ea = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ta = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hu = /^\d+\/\d+$/, mu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, pu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Bt = (e) => hu.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), Ct = (e) => !!e && Number.isInteger(Number(e)), An = (e) => e.endsWith("%") && le(e.slice(0, -1)), yt = (e) => mu.test(e), bu = () => !0, Du = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gu.test(e) && !yu.test(e)
), Sa = () => !1, vu = (e) => pu.test(e), wu = (e) => xu.test(e), ku = (e) => !Z(e) && !ee(e), Eu = (e) => Qt(e, Ma, Sa), Z = (e) => Ea.test(e), _t = (e) => Qt(e, Na, Du), Ln = (e) => Qt(e, Mu, le), ko = (e) => Qt(e, Ca, Sa), Tu = (e) => Qt(e, Ia, wu), Lr = (e) => Qt(e, ja, vu), ee = (e) => Ta.test(e), sr = (e) => Jt(e, Na), Su = (e) => Jt(e, Nu), Eo = (e) => Jt(e, Ca), Cu = (e) => Jt(e, Ma), Iu = (e) => Jt(e, Ia), Hr = (e) => Jt(e, ja, !0), Qt = (e, t, r) => {
  const n = Ea.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Jt = (e, t, r = !1) => {
  const n = Ta.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Ca = (e) => e === "position" || e === "percentage", Ia = (e) => e === "image" || e === "url", Ma = (e) => e === "length" || e === "size" || e === "bg-size", Na = (e) => e === "length", Mu = (e) => e === "number", Nu = (e) => e === "family-name", ja = (e) => e === "shadow", ju = () => {
  const e = Me("color"), t = Me("font"), r = Me("text"), n = Me("font-weight"), s = Me("tracking"), o = Me("leading"), i = Me("breakpoint"), l = Me("container"), c = Me("spacing"), f = Me("radius"), d = Me("shadow"), y = Me("inset-shadow"), h = Me("text-shadow"), m = Me("drop-shadow"), u = Me("blur"), g = Me("perspective"), p = Me("aspect"), b = Me("ease"), x = Me("animate"), D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [...v(), ee, Z], k = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], E = () => [ee, Z, c], j = () => [Bt, "full", "auto", ...E()], N = () => [Ct, "none", "subgrid", ee, Z], P = () => ["auto", {
    span: ["full", Ct, ee, Z]
  }, Ct, ee, Z], L = () => [Ct, "auto", ee, Z], $ = () => ["auto", "min", "max", "fr", ee, Z], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...E()], U = () => [Bt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], C = () => [e, ee, Z], V = () => [...v(), Eo, ko, {
    position: [ee, Z]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], S = () => ["auto", "cover", "contain", Cu, Eu, {
    size: [ee, Z]
  }], A = () => [An, sr, _t], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    ee,
    Z
  ], F = () => ["", le, sr, _t], I = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [le, An, Eo, ko], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    u,
    ee,
    Z
  ], Q = () => ["none", le, ee, Z], de = () => ["none", le, ee, Z], he = () => [le, ee, Z], pe = () => [Bt, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [yt],
      breakpoint: [yt],
      color: [bu],
      container: [yt],
      "drop-shadow": [yt],
      ease: ["in", "out", "in-out"],
      font: [ku],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [yt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [yt],
      shadow: [yt],
      spacing: ["px", le],
      text: [yt],
      "text-shadow": [yt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Bt, Z, ee, p]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [le, Z, ee, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ct, "auto", ee, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Bt, "full", "auto", l, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [le, Bt, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, ee, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, ee, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ct, "first", "last", "none", ee, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: P()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": N()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: P()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...R(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...R()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": R()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, sr, _t]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, ee, Ln]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", An, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Su, Z, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, ee, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [le, "none", ee, Ln]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee, Z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ee, Z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", ee, _t]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [le, "auto", ee, Z]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, Z]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ee, Z]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: V()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: X()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: S()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ct, ee, Z],
          radial: ["", ee, Z],
          conic: [Ct, ee, Z]
        }, Iu, Tu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": F()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...I(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...I(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, ee, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, sr, _t]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Hr,
          Lr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Hr, Lr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: F()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [le, _t]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": F()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Hr, Lr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [le, ee, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": G()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": G()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": G()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": G()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": G()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": G()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": G()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": G()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: V()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: X()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: S()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ee, Z]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ee,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, ee, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, ee, Z]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          Hr,
          Lr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", le, ee, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, ee, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, ee, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, ee, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, ee, Z]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ee,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, ee, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, ee, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, ee, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, ee, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, ee, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, ee, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, ee, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, ee, Z]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, Z]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [le, "initial", ee, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, ee, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [le, ee, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, ee, Z]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, ee, Z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: de()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": de()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": de()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": de()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ee, Z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, Z]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ee, Z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, sr, _t, Ln]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Wu = /* @__PURE__ */ uu(ju);
function ur(...e) {
  return Wu(Gd(e));
}
const Wa = ({
  itemName: e,
  title: t = "삭제 확인",
  description: r = "이 작업은 되돌릴 수 없습니다",
  onConfirm: n,
  onCancel: s
}) => {
  const [o, i] = te(!1);
  return br.createPortal(
    /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "fixed inset-0 z-60 bg-black/50 transition-opacity",
          onClick: s
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-60 flex items-center justify-center p-4", children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "w-[400px] rounded-xl shadow-2xl",
          style: {
            backgroundColor: "var(--gantt-bg-primary)",
            border: "1px solid var(--gantt-border)"
          },
          onClick: (l) => l.stopPropagation(),
          children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "px-5 py-4",
                style: { borderBottom: "1px solid var(--gantt-border-light)" },
                children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ a.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
                  /* @__PURE__ */ a.jsxs("div", { children: [
                    /* @__PURE__ */ a.jsx(
                      "h3",
                      {
                        className: "text-base font-bold",
                        style: { color: "var(--gantt-text-primary)" },
                        children: t
                      }
                    ),
                    /* @__PURE__ */ a.jsx(
                      "p",
                      {
                        className: "text-sm",
                        style: { color: "var(--gantt-text-muted)" },
                        children: r
                      }
                    )
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "px-5 py-4", children: /* @__PURE__ */ a.jsxs("div", { className: "rounded-lg bg-red-50 p-4", children: [
              /* @__PURE__ */ a.jsx(
                "p",
                {
                  className: "text-sm mb-2",
                  style: { color: "var(--gantt-text-secondary)" },
                  children: "다음 항목을 삭제하시겠습니까?"
                }
              ),
              /* @__PURE__ */ a.jsxs(
                "p",
                {
                  className: "flex items-center gap-2 text-sm font-semibold",
                  style: { color: "var(--gantt-text-primary)" },
                  children: [
                    /* @__PURE__ */ a.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500" }),
                    e
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "flex justify-end gap-3 px-5 py-4 rounded-b-xl",
                style: {
                  borderTop: "1px solid var(--gantt-border-light)",
                  backgroundColor: "var(--gantt-bg-secondary)"
                },
                children: [
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: s,
                      className: ur(
                        "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                        o && "gantt-bg-hover"
                      ),
                      style: { color: "var(--gantt-text-secondary)" },
                      onMouseEnter: () => i(!0),
                      onMouseLeave: () => i(!1),
                      children: "취소"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: n,
                      className: "rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors shadow-sm",
                      children: "삭제"
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    document.body
  );
};
Wa.displayName = "DeleteConfirmModal";
const Br = ({
  label: e,
  checked: t,
  onChange: r,
  disabled: n = !1
}) => {
  const [s, o] = te(!1);
  return /* @__PURE__ */ a.jsxs(
    "label",
    {
      className: ur(
        "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        n && "opacity-50 cursor-not-allowed"
      ),
      style: {
        color: "var(--gantt-text-secondary)",
        backgroundColor: s && !n ? "var(--gantt-bg-hover)" : "transparent"
      },
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "checkbox",
            checked: t,
            onChange: (i) => !n && r(i.target.checked),
            disabled: n,
            className: "h-4 w-4 rounded text-blue-600 focus:ring-blue-500",
            style: { borderColor: "var(--gantt-border)" }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: e })
      ]
    }
  );
};
Br.displayName = "WorkDayCheckbox";
const To = "w-full rounded-md border px-3 py-2 text-sm", _u = "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20", Pu = "focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20", So = {
  backgroundColor: "var(--gantt-bg-primary)",
  borderColor: "var(--gantt-border)",
  color: "var(--gantt-text-secondary)"
}, Gr = ({
  label: e,
  daysValue: t,
  nameValue: r = "",
  onDaysChange: n,
  onNameChange: s,
  onKeyDown: o,
  onNumberChange: i,
  daysInputRef: l,
  color: c = "blue",
  showNameInput: f = !0
}) => {
  const d = c === "red" ? Pu : _u, y = c === "red" ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
  return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ a.jsx("span", { className: ur(
      "w-20 shrink-0 rounded-md px-2 py-1.5 text-xs font-semibold text-center",
      y
    ), children: e }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center gap-2", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            ref: l,
            type: "text",
            inputMode: "decimal",
            value: t,
            onChange: (h) => i(n, h.target.value),
            onKeyDown: o,
            placeholder: "0",
            className: ur(To, d, "w-20 text-center pr-6"),
            style: So
          }
        ),
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs",
            style: { color: "var(--gantt-text-muted)" },
            children: "일"
          }
        )
      ] }),
      f && s && /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          value: r,
          onChange: (h) => s(h.target.value),
          onKeyDown: o,
          placeholder: "작업명 (선택사항)",
          className: ur("flex-1", To, d),
          style: So
        }
      )
    ] })
  ] });
};
Gr.displayName = "CompactInputRow";
const Ru = "w-full rounded-md border px-3 py-2 text-sm", Ou = "focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20", Au = {
  backgroundColor: "var(--gantt-bg-primary)",
  borderColor: "var(--gantt-border)",
  color: "var(--gantt-text-secondary)"
}, Hn = {
  backgroundColor: "var(--gantt-bg-secondary)",
  borderRadius: "0.5rem",
  padding: "1rem"
}, zn = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "var(--gantt-text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "0.75rem"
}, Lu = ({
  task: e,
  isOpen: t,
  onClose: r,
  onSave: n,
  onDelete: s
}) => {
  const [o, i] = te("0"), [l, c] = te("1"), [f, d] = te("0"), [y, h] = te(""), [m, u] = te(""), [g, p] = te(!1), [b, x] = te(!1), [D, v] = te(!1), [w, k] = te(!1), [T, E] = te(!1), [j, N] = te(""), P = be(null), L = (F) => {
    const I = parseFloat(F) || 0;
    return Math.round(I * 2) / 2;
  }, $ = L(o), R = L(l), H = L(f);
  fe(() => {
    e && e.task && t && (i(String(e.task.indirectWorkDaysPre)), c(String(e.task.netWorkDays)), d(String(e.task.indirectWorkDaysPost)), h(e.task.indirectWorkNamePre || ""), u(e.task.indirectWorkNamePost || ""), p(e.task.workOnSaturdays === !1), x(e.task.workOnSundays === !0), v(e.task.workOnHolidays === !0), N(xe(e.startDate, "yyyy-MM-dd")), k(!1), setTimeout(() => {
      var F;
      (F = P.current) == null || F.focus();
    }, 100));
  }, [e == null ? void 0 : e.id, t]), fe(() => {
    const F = (I) => {
      I.key === "Escape" && t && (w ? k(!1) : r());
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [t, w, r]);
  const K = re(() => {
    if (!e || !e.task || !t) return !1;
    const F = L(o), I = L(l), Y = L(f);
    return F !== e.task.indirectWorkDaysPre || I !== e.task.netWorkDays || Y !== e.task.indirectWorkDaysPost || y !== (e.task.indirectWorkNamePre || "") || m !== (e.task.indirectWorkNamePost || "") || g !== (e.task.workOnSaturdays === !1) || b !== (e.task.workOnSundays === !0) || D !== (e.task.workOnHolidays === !0) || j !== xe(e.startDate, "yyyy-MM-dd");
  }, [
    e,
    t,
    o,
    l,
    f,
    y,
    m,
    g,
    b,
    D,
    j
  ]), U = async () => {
    if (!e || !e.task || T) return;
    const F = j ? /* @__PURE__ */ new Date(j + "T00:00:00") : e.startDate, I = {
      ...e.task,
      indirectWorkDaysPre: $,
      netWorkDays: R,
      indirectWorkDaysPost: H,
      indirectWorkNamePre: y.trim() || void 0,
      indirectWorkNamePost: m.trim() || void 0,
      workOnSaturdays: g ? !1 : void 0,
      workOnSundays: b ? !0 : void 0,
      workOnHolidays: D ? !0 : void 0
    }, Y = {
      ...e,
      startDate: F,
      task: I
    };
    E(!0);
    try {
      await n(Y);
    } catch (G) {
      console.error("[TaskEditModal] Save failed:", G);
    } finally {
      E(!1);
    }
  }, C = async () => {
    if (!(!e || !s || T)) {
      E(!0);
      try {
        await s(e.id), k(!1), r();
      } catch (F) {
        console.error("[TaskEditModal] Delete failed:", F), k(!1);
      } finally {
        E(!1);
      }
    }
  }, V = (F) => {
    F.key === "Enter" && !F.shiftKey && (F.preventDefault(), U());
  }, X = (F, I) => {
    const Y = I.replace(/[^0-9.]/g, ""), G = Y.split("."), q = G.length > 2 ? G[0] + "." + G.slice(1).join("") : Y;
    F(q);
  }, [S, A] = He.useState(!1);
  if (!t || !e || !e.task) return null;
  const M = $ + R + H;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
        className: "w-full max-w-lg rounded-xl shadow-2xl",
        style: {
          backgroundColor: "var(--gantt-bg-primary)",
          border: "1px solid var(--gantt-border)"
        },
        onClick: (F) => F.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex items-center justify-between px-5 py-4",
              style: { borderBottom: "1px solid var(--gantt-border-light)" },
              children: [
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsx(
                    "h2",
                    {
                      className: "text-base font-bold",
                      style: { color: "var(--gantt-text-primary)" },
                      children: "공정 설정"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "p",
                    {
                      className: "text-sm mt-0.5",
                      style: { color: "var(--gantt-text-muted)" },
                      children: e.name
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: r,
                    className: "rounded-lg p-2 transition-colors",
                    style: {
                      color: "var(--gantt-text-muted)",
                      backgroundColor: S ? "var(--gantt-bg-hover)" : "transparent"
                    },
                    onMouseEnter: () => A(!0),
                    onMouseLeave: () => A(!1),
                    children: /* @__PURE__ */ a.jsx(gn, { size: 20 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "p-5 space-y-5", children: [
            /* @__PURE__ */ a.jsxs("div", { style: Hn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: zn, children: "📅 시작일" }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "date",
                    value: j,
                    onChange: (F) => N(F.target.value),
                    onKeyDown: V,
                    className: `${Ru} ${Ou} w-44`,
                    style: Au
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "text-xs",
                    style: { color: "var(--gantt-text-muted)" },
                    children: "→ 종료일 자동 계산"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { style: Hn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: zn, children: "⏱️ 작업 기간" }),
              /* @__PURE__ */ a.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ a.jsx(
                  Gr,
                  {
                    label: "앞 간접",
                    daysValue: o,
                    nameValue: y,
                    onDaysChange: i,
                    onNameChange: h,
                    onKeyDown: V,
                    onNumberChange: X,
                    daysInputRef: P,
                    color: "blue"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Gr,
                  {
                    label: "순작업",
                    daysValue: l,
                    onDaysChange: c,
                    onKeyDown: V,
                    onNumberChange: X,
                    color: "red",
                    showNameInput: !1
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Gr,
                  {
                    label: "뒤 간접",
                    daysValue: f,
                    nameValue: m,
                    onDaysChange: d,
                    onNameChange: u,
                    onKeyDown: V,
                    onNumberChange: X,
                    color: "blue"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { style: Hn, children: [
              /* @__PURE__ */ a.jsx("h3", { style: zn, children: "📆 작업일 설정" }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-1 -mx-1", children: [
                /* @__PURE__ */ a.jsx(
                  Br,
                  {
                    label: "토요일 휴무",
                    checked: g,
                    onChange: p
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Br,
                  {
                    label: "일요일 작업",
                    checked: b,
                    onChange: x
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  Br,
                  {
                    label: "공휴일 작업",
                    checked: D,
                    onChange: v
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "flex items-center justify-between rounded-lg px-4 py-3",
                style: {
                  backgroundColor: "var(--gantt-bg-tertiary)",
                  border: "1px solid var(--gantt-border)"
                },
                children: [
                  /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-sm",
                      style: { color: "var(--gantt-text-secondary)" },
                      children: [
                        /* @__PURE__ */ a.jsx("span", { className: "font-medium text-blue-600", children: $ }),
                        /* @__PURE__ */ a.jsx("span", { style: { color: "var(--gantt-text-muted)" }, children: "+" }),
                        /* @__PURE__ */ a.jsx("span", { className: "font-medium text-red-600", children: R }),
                        /* @__PURE__ */ a.jsx("span", { style: { color: "var(--gantt-text-muted)" }, children: "+" }),
                        /* @__PURE__ */ a.jsx("span", { className: "font-medium text-blue-600", children: H })
                      ]
                    }
                  ),
                  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ a.jsx(
                      "span",
                      {
                        className: "text-sm",
                        style: { color: "var(--gantt-text-muted)" },
                        children: "="
                      }
                    ),
                    /* @__PURE__ */ a.jsxs(
                      "span",
                      {
                        className: "text-lg font-bold",
                        style: { color: "var(--gantt-text-primary)" },
                        children: [
                          M,
                          "일"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex justify-between items-center px-5 py-4 rounded-b-xl",
              style: {
                borderTop: "1px solid var(--gantt-border-light)",
                backgroundColor: "var(--gantt-bg-secondary)"
              },
              children: [
                /* @__PURE__ */ a.jsx("div", { children: s && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: () => k(!0),
                    className: "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                    children: [
                      /* @__PURE__ */ a.jsx(la, { size: 16 }),
                      "삭제"
                    ]
                  }
                ) }),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: K ? U : r,
                    className: `rounded-lg px-5 py-2.5 text-sm font-semibold transition-all shadow-sm ${K ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" : "bg-gray-600 text-white hover:bg-gray-700"}`,
                    children: K ? "저장" : "닫기"
                  }
                )
              ]
            }
          )
        ]
      }
    ) }),
    w && /* @__PURE__ */ a.jsx(
      Wa,
      {
        itemName: e.name,
        title: "공정 삭제",
        onConfirm: C,
        onCancel: () => k(!1)
      }
    )
  ] });
};
function Gt(e, t, r) {
  let n = r.initialDeps ?? [], s;
  function o() {
    var i, l, c, f;
    let d;
    r.key && ((i = r.debug) != null && i.call(r)) && (d = Date.now());
    const y = e();
    if (!(y.length !== n.length || y.some((u, g) => n[g] !== u)))
      return s;
    n = y;
    let m;
    if (r.key && ((l = r.debug) != null && l.call(r)) && (m = Date.now()), s = t(...y), r.key && ((c = r.debug) != null && c.call(r))) {
      const u = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - m) * 100) / 100, p = g / 16, b = (x, D) => {
        for (x = String(x); x.length < D; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${b(g, 5)} /${b(u, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * p, 120)
        )}deg 100% 31%);`,
        r == null ? void 0 : r.key
      );
    }
    return (f = r == null ? void 0 : r.onChange) == null || f.call(r, s), s;
  }
  return o.updateDeps = (i) => {
    n = i;
  }, o;
}
function Co(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Hu = (e, t) => Math.abs(e - t) < 1.01, zu = (e, t, r) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => t.apply(this, s), r);
  };
}, Io = (e) => {
  const { offsetWidth: t, offsetHeight: r } = e;
  return { width: t, height: r };
}, Fu = (e) => e, $u = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), r = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let s = t; s <= r; s++)
    n.push(s);
  return n;
}, Bu = (e, t) => {
  const r = e.scrollElement;
  if (!r)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: l, height: c } = i;
    t({ width: Math.round(l), height: Math.round(c) });
  };
  if (s(Io(r)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((i) => {
    const l = () => {
      const c = i[0];
      if (c != null && c.borderBoxSize) {
        const f = c.borderBoxSize[0];
        if (f) {
          s({ width: f.inlineSize, height: f.blockSize });
          return;
        }
      }
      s(Io(r));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return o.observe(r, { box: "border-box" }), () => {
    o.unobserve(r);
  };
}, Mo = {
  passive: !0
}, No = typeof window > "u" ? !0 : "onscrollend" in window, Gu = (e, t) => {
  const r = e.scrollElement;
  if (!r)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let s = 0;
  const o = e.options.useScrollendEvent && No ? () => {
  } : zu(
    n,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (d) => () => {
    const { horizontal: y, isRtl: h } = e.options;
    s = y ? r.scrollLeft * (h && -1 || 1) : r.scrollTop, o(), t(s, d);
  }, l = i(!0), c = i(!1);
  c(), r.addEventListener("scroll", l, Mo);
  const f = e.options.useScrollendEvent && No;
  return f && r.addEventListener("scrollend", c, Mo), () => {
    r.removeEventListener("scroll", l), f && r.removeEventListener("scrollend", c);
  };
}, Vu = (e, t, r) => {
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[r.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[r.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Yu = (e, {
  adjustments: t = 0,
  behavior: r
}, n) => {
  var s, o;
  const i = e + t;
  (o = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || o.call(s, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: r
  });
};
class Uu {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let r = null;
      const n = () => r || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : r = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((o) => {
          const i = () => {
            this._measureElement(o.target, o);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), r = null;
        },
        observe: (s) => {
          var o;
          return (o = n()) == null ? void 0 : o.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var o;
          return (o = n()) == null ? void 0 : o.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (r) => {
      Object.entries(r).forEach(([n, s]) => {
        typeof s > "u" && delete r[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Fu,
        rangeExtractor: $u,
        onChange: () => {
        },
        measureElement: Vu,
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
        ...r
      };
    }, this.notify = (r) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, r);
    }, this.maybeNotify = Gt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (r) => {
        this.notify(r);
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
      this.unsubs.filter(Boolean).forEach((r) => r()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var r;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((r = this.scrollElement) == null ? void 0 : r.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = o, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (r, n) => {
      const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      for (let i = n - 1; i >= 0; i--) {
        const l = r[i];
        if (s.has(l.lane))
          continue;
        const c = o.get(
          l.lane
        );
        if (c == null || l.end > c.end ? o.set(l.lane, l) : l.end < c.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Gt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (r, n, s, o, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: r,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: o,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Gt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: r, paddingStart: n, scrollMargin: s, getItemKey: o, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const f = this.measurementsCache.slice(0, c);
        for (let d = c; d < r; d++) {
          const y = o(d), h = this.options.lanes === 1 ? f[d - 1] : this.getFurthestMeasurement(f, d), m = h ? h.end + this.options.gap : n + s, u = l.get(y), g = typeof u == "number" ? u : this.options.estimateSize(d), p = m + g, b = h ? h.lane : d % this.options.lanes;
          f[d] = {
            index: d,
            start: m,
            size: g,
            end: p,
            key: y,
            lane: b
          };
        }
        return this.measurementsCache = f, f;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Gt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (r, n, s, o) => this.range = r.length > 0 && n > 0 ? Ku({
        measurements: r,
        outerSize: n,
        scrollOffset: s,
        lanes: o
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Gt(
      () => {
        let r = null, n = null;
        const s = this.calculateRange();
        return s && (r = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, r, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          r,
          n
        ];
      },
      (r, n, s, o, i) => o === null || i === null ? [] : r({
        startIndex: o,
        endIndex: i,
        overscan: n,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (r) => {
      const n = this.options.indexAttribute, s = r.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (r, n) => {
      const s = this.indexFromElement(r), o = this.measurementsCache[s];
      if (!o)
        return;
      const i = o.key, l = this.elementsCache.get(i);
      l !== r && (l && this.observer.unobserve(l), this.observer.observe(r), this.elementsCache.set(i, r)), r.isConnected && this.resizeItem(s, this.options.measureElement(r, n, this));
    }, this.resizeItem = (r, n) => {
      const s = this.measurementsCache[r];
      if (!s)
        return;
      const o = this.itemSizeCache.get(s.key) ?? s.size, i = n - o;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, n)), this.notify(!1));
    }, this.measureElement = (r) => {
      if (!r) {
        this.elementsCache.forEach((n, s) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(r, void 0);
    }, this.getVirtualItems = Gt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (r, n) => {
        const s = [];
        for (let o = 0, i = r.length; o < i; o++) {
          const l = r[o], c = n[l];
          s.push(c);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (r) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return Co(
          n[_a(
            0,
            n.length - 1,
            (s) => Co(n[s]).start,
            r
          )]
        );
    }, this.getOffsetForAlignment = (r, n, s = 0) => {
      const o = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = r >= i + o ? "end" : "start"), n === "center" ? r += (s - o) / 2 : n === "end" && (r -= o);
      const l = this.getTotalSize() + this.options.scrollMargin - o;
      return Math.max(Math.min(l, r), 0);
    }, this.getOffsetForIndex = (r, n = "auto") => {
      r = Math.max(0, Math.min(r, this.options.count - 1));
      const s = this.measurementsCache[r];
      if (!s)
        return;
      const o = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (s.end >= i + o - this.options.scrollPaddingEnd)
          n = "end";
        else if (s.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
      const l = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, s.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (r, { align: n = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(r, n), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (r, { align: n = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), r = Math.max(0, Math.min(r, this.options.count - 1));
      let o = 0;
      const i = 10, l = (f) => {
        if (!this.targetWindow) return;
        const d = this.getOffsetForIndex(r, f);
        if (!d) {
          console.warn("Failed to get offset for index:", r);
          return;
        }
        const [y, h] = d;
        this._scrollToOffset(y, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const m = this.getScrollOffset(), u = this.getOffsetForIndex(r, h);
          if (!u) {
            console.warn("Failed to get offset for index:", r);
            return;
          }
          Hu(u[0], m) || c(h);
        });
      }, c = (f) => {
        this.targetWindow && (o++, o < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", o, i), this.targetWindow.requestAnimationFrame(() => l(f))) : console.warn(
          `Failed to scroll to index ${r} after ${i} attempts.`
        ));
      };
      l(n);
    }, this.scrollBy = (r, { behavior: n } = {}) => {
      n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + r, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var r;
      const n = this.getMeasurements();
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((r = n[n.length - 1]) == null ? void 0 : r.end) ?? 0;
      else {
        const o = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && o.some((l) => l === null); ) {
          const l = n[i];
          o[l.lane] === null && (o[l.lane] = l.end), i--;
        }
        s = Math.max(...o.filter((l) => l !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (r, {
      adjustments: n,
      behavior: s
    }) => {
      this.options.scrollToFn(r, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const _a = (e, t, r, n) => {
  for (; e <= t; ) {
    const s = (e + t) / 2 | 0, o = r(s);
    if (o < n)
      e = s + 1;
    else if (o > n)
      t = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function Ku({
  measurements: e,
  outerSize: t,
  scrollOffset: r,
  lanes: n
}) {
  const s = e.length - 1, o = (c) => e[c].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = _a(
    0,
    s,
    o,
    r
  ), l = i;
  if (n === 1)
    for (; l < s && e[l].end < r + t; )
      l++;
  else if (n > 1) {
    const c = Array(n).fill(0);
    for (; l < s && c.some((d) => d < r + t); ) {
      const d = e[l];
      c[d.lane] = d.end, l++;
    }
    const f = Array(n).fill(r + t);
    for (; i >= 0 && f.some((d) => d >= r); ) {
      const d = e[i];
      f[d.lane] = d.start, i--;
    }
    i = Math.max(0, i - i % n), l = Math.min(s, l + (n - 1 - l % n));
  }
  return { startIndex: i, endIndex: l };
}
const jo = typeof document < "u" ? Ur.useLayoutEffect : Ur.useEffect;
function Xu(e) {
  const t = Ur.useReducer(() => ({}), {})[1], r = {
    ...e,
    onChange: (s, o) => {
      var i;
      o ? ri(t) : t(), (i = e.onChange) == null || i.call(e, s, o);
    }
  }, [n] = Ur.useState(
    () => new Uu(r)
  );
  return n.setOptions(r), jo(() => n._didMount(), []), jo(() => n._willUpdate()), n;
}
function qu(e) {
  return Xu({
    observeElementRect: Bu,
    observeElementOffset: Gu,
    scrollToFn: Yu,
    ...e
  });
}
const { ROW_HEIGHT: zr, ROW_HEIGHT_COMPACT: Qu, GROUP_ROW_HEIGHT_COMPACT: Ju } = ce;
function Zu({
  containerRef: e,
  count: t,
  rowHeight: r = zr,
  overscan: n = 5,
  paddingEnd: s = 50,
  tasks: o,
  allTasks: i
}) {
  const l = re(() => {
    const m = i || o;
    return m ? new Map(m.map((u) => [u.id, u])) : /* @__PURE__ */ new Map();
  }, [i, o]), c = r === Qu, f = W((m) => {
    if (!o || !o[m])
      return r;
    const u = o[m];
    if (u.type === "CP")
      return zr;
    if (u.type === "GROUP") {
      const g = u.parentId ? l.get(u.parentId) : null;
      return !g || g.type !== "CP" ? zr : c ? Ju : zr;
    }
    return r;
  }, [o, r, l, c]), d = qu({
    count: t,
    getScrollElement: () => e.current,
    estimateSize: f,
    overscan: n,
    paddingEnd: s
  });
  fe(() => {
    d.measure();
  }, [r, d]);
  const y = d.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: re(() => y.map((m) => ({
      index: m.index,
      start: m.start,
      size: m.size,
      key: m.index
      // index는 항상 number이므로 타입 안전
    })), [y]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: d.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: d
  };
}
function ef({
  scrollContainerRef: e,
  virtualizer: t,
  visibleTasks: r,
  allTasks: n,
  minDate: s,
  pixelsPerDay: o,
  sidebarWidth: i
}) {
  const l = W((h, m) => {
    if (!t) return;
    const u = r.findIndex((g) => g.id === h);
    u !== -1 && t.scrollToIndex(u, {
      align: (m == null ? void 0 : m.align) ?? "center",
      behavior: (m == null ? void 0 : m.behavior) ?? "smooth"
    });
  }, [r, t]), c = W((h, m) => {
    const u = e.current;
    if (!u) return;
    let g = h.startDate, p = h.endDate;
    if (h.type === "GROUP" && n) {
      const E = vs(h.id, n);
      E && (g = E.startDate, p = E.endDate);
    }
    const b = g.getTime() + (p.getTime() - g.getTime()) / 2, x = new Date(b), D = Ge(x, s, o), w = u.clientWidth - i - 4, k = (m == null ? void 0 : m.align) ?? "center";
    let T;
    k === "center" ? T = D - w / 2 : k === "start" ? T = D - 50 : T = D - w + 50, u.scrollTo({
      left: Math.max(0, T),
      behavior: (m == null ? void 0 : m.behavior) ?? "smooth"
    });
  }, [e, s, o, i, n]), f = W((h, m) => {
    const u = r.find((g) => g.id === h);
    u && (l(h, m), requestAnimationFrame(() => {
      c(u, m);
    }));
  }, [r, l, c]), d = W((h, m = "center") => {
    const u = e.current;
    if (!u) return;
    const g = Ge(h, s, o), b = u.clientWidth - i - 4;
    let x;
    m === "center" ? x = g - b / 2 : x = g - Math.min(200, Math.max(80, b * 0.15)), u.scrollTo({
      left: Math.max(0, x),
      behavior: "smooth"
    });
  }, [e, s, o, i]), y = W(() => {
    if (r.length === 0) return;
    const h = r[0];
    f(h.id, { behavior: "auto" });
  }, [r, f]);
  return {
    scrollToTask: l,
    scrollToTaskDate: c,
    focusTask: f,
    scrollToDate: d,
    scrollToFirstTask: y
  };
}
function tf({
  visibleTasks: e,
  viewMode: t,
  onViewChange: r,
  focusTask: n,
  onTaskEdit: s,
  enabled: o = !0
}) {
  const {
    selectedTaskIds: i,
    focusedTaskId: l,
    moveFocus: c,
    clearSelection: f,
    selectTask: d
  } = yn(), {
    expandedTaskIds: y,
    toggleTask: h
  } = da();
  fe(() => {
    l && o && n(l);
  }, [l, n, o]);
  const m = W((u) => {
    if (!o) return;
    const g = u.target;
    if (!(g.tagName === "INPUT" || g.tagName === "TEXTAREA" || g.isContentEditable))
      switch (u.key) {
        case "ArrowUp":
          u.preventDefault(), c("up", e);
          break;
        case "ArrowDown":
          u.preventDefault(), c("down", e);
          break;
        case "ArrowLeft":
          if (l) {
            const p = e.find((b) => b.id === l);
            p && (p.type === "CP" || p.type === "GROUP") && (e.some((x) => x.parentId === p.id) || y.has(p.id)) && y.has(p.id) && (u.preventDefault(), h(p.id));
          }
          break;
        case "ArrowRight":
          if (l) {
            const p = e.find((b) => b.id === l);
            p && (p.type === "CP" || p.type === "GROUP") && (y.has(p.id) || (u.preventDefault(), h(p.id)));
          }
          break;
        case "Enter":
          if (u.preventDefault(), l) {
            const p = e.find((b) => b.id === l);
            p && (t === "MASTER" && p.wbsLevel === 1 ? r("DETAIL", p.id) : s && s(p));
          }
          break;
        case "Escape":
          u.preventDefault(), f();
          break;
        case "Backspace":
          t === "DETAIL" && (u.preventDefault(), r("MASTER"));
          break;
        case "Home":
          u.preventDefault(), e.length > 0 && d(e[0].id, { visibleTasks: e });
          break;
        case "End":
          u.preventDefault(), e.length > 0 && d(e[e.length - 1].id, { visibleTasks: e });
          break;
      }
  }, [o, e, t, l, c, f, r, s, d, y, h]);
  return fe(() => (document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)), [m]), {
    focusedTaskId: l,
    selectedTaskIds: i
  };
}
const or = "flex items-center gap-1 rounded px-2.5 py-1 text-xs font-medium transition-colors", ar = {
  backgroundColor: "var(--gantt-bg-tertiary)",
  color: "var(--gantt-text-secondary)"
}, ir = {
  onMouseEnter: (e) => {
    e.currentTarget.style.backgroundColor = "var(--gantt-bg-hover)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.backgroundColor = "var(--gantt-bg-tertiary)";
  }
}, Fn = "flex rounded-md p-0.5", lr = "rounded px-2.5 py-1 text-xs font-medium transition-colors", cr = "flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium transition-colors", $n = {
  onMouseEnter: (e) => {
    e.currentTarget.style.filter = "brightness(1.1)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.filter = "brightness(1)";
  }
}, rf = ({
  viewMode: e,
  zoomLevel: t,
  isAddingTask: r,
  isAddingCP: n,
  hasUnsavedChanges: s,
  saveStatus: o,
  isCompactMode: i,
  onViewChange: l,
  onZoomChange: c,
  onToggleCompact: f,
  onStartAddTask: d,
  onStartAddCP: y,
  onStartAddMilestone: h,
  onScrollToFirst: m,
  onCollapseAll: u,
  onExpandAll: g,
  onSave: p,
  onReset: b,
  onExport: x,
  onExportExcel: D,
  onImport: v,
  loadedFileName: w,
  canCreateTask: k,
  canCreateMilestone: T
}) => {
  const [E, j] = te(!1), N = be(null);
  fe(() => {
    const $ = (R) => {
      N.current && !N.current.contains(R.target) && j(!1);
    };
    return E && document.addEventListener("mousedown", $), () => {
      document.removeEventListener("mousedown", $);
    };
  }, [E]);
  const P = W(() => j(!1), []), L = re(() => {
    const $ = [];
    return (e === "MASTER" || e === "UNIFIED") && k && y && !n && $.push({
      label: "CP 추가",
      onClick: () => {
        y(), P();
      },
      color: "var(--gantt-focus)"
    }), (e === "DETAIL" || e === "UNIFIED") && k && d && !r && $.push({
      label: "Task 추가",
      onClick: () => {
        d(), P();
      },
      color: "var(--gantt-focus)"
    }), (e === "MASTER" || e === "UNIFIED") && T && h && $.push({
      label: "마일스톤 추가",
      onClick: () => {
        h(), P();
      },
      color: "var(--gantt-milestone-detail)"
    }), $;
  }, [
    e,
    k,
    T,
    n,
    r,
    y,
    d,
    h,
    P
  ]);
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: "flex h-[60px] shrink-0 items-center justify-between px-4 shadow-sm",
      style: {
        backgroundColor: "var(--gantt-bg-primary)",
        borderBottom: "1px solid var(--gantt-border)"
      },
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
          e === "DETAIL" && /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => l("MASTER"),
              className: or,
              style: ar,
              ...ir,
              children: "← 상위 공정표로"
            }
          ),
          L.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "relative", ref: N, children: [
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: () => j(!E),
                className: or,
                style: {
                  backgroundColor: "var(--gantt-focus)",
                  color: "var(--gantt-text-inverse)"
                },
                children: [
                  /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" }) }),
                  "추가",
                  /* @__PURE__ */ a.jsx("svg", { className: `h-3 w-3 transition-transform ${E ? "rotate-180" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
                ]
              }
            ),
            E && /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "absolute left-0 top-full mt-1 min-w-[140px] rounded-md py-1 shadow-lg z-50",
                style: {
                  backgroundColor: "var(--gantt-bg-primary)",
                  border: "1px solid var(--gantt-border)"
                },
                children: L.map(($, R) => /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: $.onClick,
                    className: "flex w-full items-center gap-2 px-3 py-2 text-xs font-medium transition-colors text-left",
                    style: { color: "var(--gantt-text-secondary)" },
                    onMouseEnter: (H) => {
                      H.currentTarget.style.backgroundColor = "var(--gantt-bg-hover)";
                    },
                    onMouseLeave: (H) => {
                      H.currentTarget.style.backgroundColor = "transparent";
                    },
                    children: [
                      /* @__PURE__ */ a.jsx(
                        "span",
                        {
                          className: "h-2 w-2 rounded-full",
                          style: { backgroundColor: $.color }
                        }
                      ),
                      $.label
                    ]
                  },
                  R
                ))
              }
            )
          ] }),
          n && /* @__PURE__ */ a.jsx("span", { className: "text-xs italic", style: { color: "var(--gantt-text-muted)" }, children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
          e === "MASTER" && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => l("UNIFIED"),
              className: or,
              style: ar,
              ...ir,
              title: "CP와 Task를 계층형으로 통합하여 표시",
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) }),
                "통합 뷰"
              ]
            }
          ),
          e === "UNIFIED" && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => l("MASTER"),
              className: or,
              style: ar,
              ...ir,
              title: "마스터 뷰로 전환",
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16M4 18h16" }) }),
                "마스터 뷰"
              ]
            }
          ),
          (u || g) && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Fn,
              style: { backgroundColor: "var(--gantt-bg-tertiary)" },
              children: [
                g && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: g,
                    className: `${lr} flex items-center gap-1`,
                    style: { color: "var(--gantt-text-secondary)" },
                    onMouseEnter: ($) => {
                      $.currentTarget.style.backgroundColor = "var(--gantt-bg-hover)";
                    },
                    onMouseLeave: ($) => {
                      $.currentTarget.style.backgroundColor = "transparent";
                    },
                    title: "모든 그룹 펼치기",
                    children: [
                      /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }),
                      "펼치기"
                    ]
                  }
                ),
                u && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: u,
                    className: `${lr} flex items-center gap-1`,
                    style: { color: "var(--gantt-text-secondary)" },
                    onMouseEnter: ($) => {
                      $.currentTarget.style.backgroundColor = "var(--gantt-bg-hover)";
                    },
                    onMouseLeave: ($) => {
                      $.currentTarget.style.backgroundColor = "transparent";
                    },
                    title: "모든 그룹 접기",
                    children: [
                      /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15l7-7 7 7" }) }),
                      "접기"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: m,
              className: or,
              style: ar,
              ...ir,
              title: e === "MASTER" ? "진행 중인 CP로 스크롤" : e === "UNIFIED" ? "진행 중인 CP/Task로 스크롤" : "진행 중인 작업으로 스크롤",
              children: "Focusing"
            }
          ),
          (e === "DETAIL" || e === "UNIFIED") && f && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Fn,
              style: { backgroundColor: "var(--gantt-bg-tertiary)" },
              children: [
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: () => i && f(),
                    className: lr,
                    style: {
                      backgroundColor: i ? "transparent" : "var(--gantt-bg-primary)",
                      color: i ? "var(--gantt-text-muted)" : "var(--gantt-text-primary)",
                      boxShadow: i ? "none" : "0 1px 2px rgba(0,0,0,0.1)"
                    },
                    children: "Normal"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    onClick: () => !i && f(),
                    className: lr,
                    style: {
                      backgroundColor: i ? "var(--gantt-bg-primary)" : "transparent",
                      color: i ? "var(--gantt-text-primary)" : "var(--gantt-text-muted)",
                      boxShadow: i ? "0 1px 2px rgba(0,0,0,0.1)" : "none"
                    },
                    children: "Compact"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: Fn,
              style: { backgroundColor: "var(--gantt-bg-tertiary)" },
              children: (e === "MASTER" ? ["WEEK", "MONTH"] : e === "UNIFIED" ? ["DAY", "WEEK", "MONTH"] : ["DAY", "WEEK"]).map(($) => /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: () => c($),
                  className: lr,
                  style: {
                    backgroundColor: t === $ ? "var(--gantt-bg-primary)" : "transparent",
                    color: t === $ ? "var(--gantt-text-primary)" : "var(--gantt-text-muted)",
                    boxShadow: t === $ ? "0 1px 2px rgba(0,0,0,0.1)" : "none"
                  },
                  children: wr[$].label
                },
                $
              ))
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "text-sm", style: { color: "var(--gantt-text-muted)" }, children: [
            "기준일: ",
            xe(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
          ] }),
          w && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 rounded-md px-2 py-1",
              style: { backgroundColor: "var(--gantt-bg-tertiary)" },
              title: `로딩된 파일: ${w}`,
              children: [
                /* @__PURE__ */ a.jsx(
                  "svg",
                  {
                    className: "h-3.5 w-3.5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    style: { color: "var(--gantt-text-muted)" },
                    children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "max-w-[150px] truncate text-xs font-medium",
                    style: { color: "var(--gantt-text-secondary)" },
                    children: w
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          p && /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: p,
              disabled: !s || o === "saving",
              className: cr,
              style: {
                backgroundColor: s ? "var(--gantt-focus)" : "var(--gantt-bg-tertiary)",
                color: s ? "var(--gantt-text-inverse)" : "var(--gantt-text-muted)",
                cursor: s ? "pointer" : "not-allowed"
              },
              children: o === "saving" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
          b && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: b,
              className: cr,
              style: ar,
              ...ir,
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                "초기화"
              ]
            }
          ),
          (x || v || D) && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "h-6 w-px",
              style: { backgroundColor: "var(--gantt-border)" }
            }
          ),
          v && /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: `${cr} cursor-pointer`,
              style: {
                backgroundColor: "var(--gantt-milestone-detail)",
                color: "var(--gantt-text-inverse)"
              },
              ...$n,
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) }),
                "가져오기",
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "file",
                    accept: ".json",
                    className: "hidden",
                    onChange: ($) => {
                      var H;
                      const R = (H = $.target.files) == null ? void 0 : H[0];
                      R && v && (v(R), $.target.value = "");
                    }
                  }
                )
              ]
            }
          ),
          x && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: x,
              className: cr,
              style: {
                backgroundColor: "var(--gantt-success)",
                color: "var(--gantt-text-inverse)"
              },
              ...$n,
              title: "현재 데이터를 JSON 파일로 내보내기",
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }),
                "JSON"
              ]
            }
          ),
          D && /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: D,
              className: cr,
              style: {
                backgroundColor: "var(--gantt-excel)",
                color: "var(--gantt-text-inverse)"
              },
              ...$n,
              title: "현재 데이터를 Excel 파일로 내보내기 (간트 차트 형태)",
              children: [
                /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" }) }),
                "Excel"
              ]
            }
          )
        ] })
      ]
    }
  );
}, nf = ({
  tasks: e,
  initialView: t,
  initialZoomLevel: r,
  initialExpandedIds: n,
  setViewMode: s,
  setZoomLevel: o,
  expandAll: i,
  collapseAll: l
}) => {
  const c = be(!1), f = re(() => e.map((y) => y.id), [e]);
  fe(() => {
    c.current || (c.current = !0, s(t), o(r), l(), n && n.length > 0 ? i(n) : f.length > 0 && i(f));
  }, [f, n, t, r, s, o, i, l]);
  const d = be(/* @__PURE__ */ new Set());
  fe(() => {
    const y = new Set(e.map((u) => u.id)), h = d.current, m = [];
    e.forEach((u) => {
      u.type === "GROUP" && !h.has(u.id) && m.push(u.id);
    }), m.length > 0 && i(m), d.current = y;
  }, [e, i]);
}, sf = ({
  scrollRef: e,
  viewMode: t,
  activeCPId: r,
  zoomLevel: n,
  sidebarWidth: s,
  tasks: o,
  visibleTasks: i,
  milestones: l
}) => {
  const c = W((y, h = "left") => {
    const m = e.current;
    if (!m) return;
    const u = wr[n].pixelsPerDay, { minDate: g } = ps(o, l, 60), p = Ge(y, g, u), x = m.clientWidth - s - 4;
    let D = 0;
    h === "center" ? D = x / 2 : D = Math.min(200, Math.max(80, x * 0.15)), m.scrollTo({
      left: Math.max(0, p - D),
      behavior: "smooth"
    });
  }, [e, n, o, l, s]), f = W(() => {
    if (t === "MASTER")
      if (l.length > 0) {
        const h = [...l].sort((m, u) => m.date.getTime() - u.date.getTime())[0];
        c(h.date, "left");
      } else {
        const y = /* @__PURE__ */ new Date();
        y.setHours(0, 0, 0, 0);
        const h = i.filter((u) => u.type === "CP"), m = h.filter((u) => {
          const g = new Date(u.startDate), p = new Date(u.endDate);
          return g.setHours(0, 0, 0, 0), p.setHours(0, 0, 0, 0), g <= y && y <= p;
        });
        if (m.length > 0) {
          const u = m.reduce((g, p) => g.startDate < p.startDate ? g : p);
          c(u.startDate, "left");
        } else if (h.length > 0) {
          const u = h.reduce((g, p) => g.startDate < p.startDate ? g : p);
          c(u.startDate, "left");
        }
      }
    else if (t === "DETAIL" && r) {
      const y = (u) => {
        const g = [];
        return o.forEach((p) => {
          p.parentId === u && (g.push(p), p.type === "GROUP" && g.push(...y(p.id)));
        }), g;
      }, h = y(r), m = h.filter((u) => u.type === "TASK");
      if (m.length > 0) {
        const u = m.reduce(
          (g, p) => p.startDate < g ? p.startDate : g,
          m[0].startDate
        );
        c(u, "left");
      } else if (h.length > 0) {
        const u = h.reduce(
          (g, p) => p.startDate < g ? p.startDate : g,
          h[0].startDate
        );
        c(u, "left");
      }
    }
  }, [t, r, o, i, l, c]), d = be(null);
  return fe(() => {
    t !== "DETAIL" && (d.current = null);
  }, [t]), fe(() => {
    if (t === "DETAIL" && r && r !== d.current) {
      d.current = r;
      const y = requestAnimationFrame(() => {
        const h = setTimeout(() => {
          f();
        }, ce.SCROLL_DELAY_MS);
        return () => clearTimeout(h);
      });
      return () => cancelAnimationFrame(y);
    }
  }, [t, r, n, f]), {
    scrollToDate: c,
    scrollToFirstTask: f
  };
}, of = ({
  sidebarWidth: e,
  setSidebarWidth: t,
  viewMode: r,
  sidebarTotalWidth: n
}) => {
  const [s, o] = te(!1), i = be(!1), l = be(null), c = be(null);
  fe(() => () => {
    l.current && document.removeEventListener("mousemove", l.current), c.current && document.removeEventListener("mouseup", c.current);
  }, []);
  const f = W((y) => {
    if (y.detail >= 2) return;
    y.preventDefault(), i.current = !0, o(!0);
    const h = y.clientX, m = e, u = (p) => {
      if (!i.current) return;
      const b = p.clientX - h, x = Math.max(
        ce.SIDEBAR_MIN_WIDTH,
        Math.min(m + b, ce.SIDEBAR_MAX_WIDTH)
      );
      t(x);
    }, g = () => {
      i.current = !1, o(!1), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", g), l.current = null, c.current = null;
    };
    l.current = u, c.current = g, document.addEventListener("mousemove", u), document.addEventListener("mouseup", g);
  }, [e, t]), d = W(() => {
    if (n !== null)
      t(n);
    else {
      const y = r === "MASTER" ? ce.SIDEBAR_MASTER_WIDTH : ce.SIDEBAR_DETAIL_WIDTH;
      t(y);
    }
  }, [n, t, r]);
  return {
    isResizing: s,
    handleResizeStart: f,
    handleResizeDoubleClick: d
  };
}, af = ({
  viewMode: e,
  hasReorder: t
}) => {
  const [r, n] = te(
    Xr.map((D) => D.width)
  ), [s, o] = te(
    qr.map((D) => D.width)
  ), [i, l] = te(
    Qr.map((D) => D.width)
  ), [c, f] = te(null), d = be(!1), y = re(() => {
    switch (e) {
      case "MASTER":
        return Xr;
      case "DETAIL":
        return qr;
      case "UNIFIED":
        return Qr;
    }
  }, [e]), h = re(() => {
    switch (e) {
      case "MASTER":
        return r;
      case "DETAIL":
        return s;
      case "UNIFIED":
        return i;
    }
  }, [e, r, s, i]), m = re(() => {
    switch (e) {
      case "MASTER":
        return n;
      case "DETAIL":
        return o;
      case "UNIFIED":
        return l;
    }
  }, [e]), u = re(
    () => y.map((D, v) => ({
      ...D,
      width: h[v] ?? D.width
    })),
    [y, h]
  ), g = t ? 24 : 0, p = W((D, v) => {
    if (D.detail >= 2) return;
    D.preventDefault(), D.stopPropagation(), d.current = !0, f(v);
    const w = D.clientX, k = h[v], T = y[v].minWidth, E = (N) => {
      if (!d.current) return;
      const P = N.clientX - w, L = Math.max(T, k + P);
      m(($) => {
        const R = [...$];
        return R[v] = L, R;
      });
    }, j = () => {
      d.current = !1, f(null), document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", j);
    };
    document.addEventListener("mousemove", E), document.addEventListener("mouseup", j);
  }, [h, y, m]), b = W((D, v) => {
    D.preventDefault(), D.stopPropagation(), d.current = !1, f(null);
  }, []), x = W((D, v) => {
    m((w) => {
      const k = [...w];
      return k[D] = v, k;
    });
  }, [m]);
  return {
    columns: u,
    dragHandleWidth: g,
    resizingIndex: c,
    handleColumnResizeStart: p,
    handleColumnResizeDoubleClick: b,
    handleOptimalColumnWidth: x
  };
}, lf = ({
  tasks: e,
  viewMode: t,
  activeCPId: r,
  expandedTaskIds: n,
  setExpandedTaskIds: s
}) => {
  const o = re(
    () => new Map(e.map((y) => [y.id, y])),
    [e]
  ), i = W((y) => {
    if (t === "UNIFIED") {
      if (y.type === "GROUP") {
        const u = y.parentId ? o.get(y.parentId) : null;
        return !u || u.type !== "CP" ? 0 : 2;
      }
      return y.type === "CP" ? 1 : 2;
    }
    if (t === "DETAIL") {
      let u = 0, g = y.parentId;
      for (; g; ) {
        const p = o.get(g);
        if (!p || p.type === "CP") break;
        p.type === "GROUP" && u++, g = p.parentId;
      }
      return u;
    }
    let h = 0, m = y.parentId;
    for (; m; ) {
      const u = o.get(m);
      if (!u) break;
      u.type === "GROUP" && h++, m = u.parentId;
    }
    return h;
  }, [t, o]), l = re(() => {
    const y = (m) => t === "MASTER" ? m.wbsLevel === 1 && m.type === "GROUP" : t === "DETAIL" ? m.wbsLevel >= 2 && m.type === "GROUP" : m.type === "GROUP" || m.type === "CP", h = /* @__PURE__ */ new Map();
    return e.filter(y).forEach((m) => {
      h.set(m.id, {
        id: m.id,
        depth: i(m),
        parentId: m.parentId
      });
    }), h;
  }, [e, t, i]), c = W((y) => {
    const h = l.get(y);
    return h ? !h.parentId || t === "DETAIL" && h.parentId === r ? !0 : n.has(h.parentId) : !1;
  }, [l, t, r, n]), f = W(() => {
    const y = [];
    n.forEach((g) => {
      const p = l.get(g);
      p && y.push(p.depth);
    });
    const m = (y.length > 0 ? Math.max(...y) : -1) + 1, u = [];
    if (l.forEach((g) => {
      g.depth === m && c(g.id) && u.push(g.id);
    }), u.length > 0) {
      const g = /* @__PURE__ */ new Set([...n, ...u]);
      s(g);
    }
  }, [l, n, c, s]), d = W(() => {
    const y = [];
    if (n.forEach((u) => {
      const g = l.get(u);
      g && y.push(g.depth);
    }), y.length === 0) return;
    const h = Math.max(...y), m = new Set(
      [...n].filter((u) => {
        const g = l.get(u);
        return g ? g.depth < h : !0;
      })
    );
    s(m);
  }, [l, n, s]);
  return {
    expandNextLevel: f,
    collapseLastLevel: d,
    getDepthForTask: i
  };
}, cf = ({
  tasks: e,
  milestones: t,
  viewMode: r,
  activeCPId: n,
  holidays: s,
  calendarSettings: o,
  onTaskUpdate: i,
  onTaskCreate: l,
  onTaskDelete: c,
  onMilestoneCreate: f,
  onMilestoneUpdate: d,
  onMilestoneDelete: y,
  onGroupDrag: h,
  onViewChange: m,
  onError: u,
  setViewMode: g
}) => {
  const [p, b] = te(null), [x, D] = te(!1), [v, w] = te(!1), [k, T] = te(null), [E, j] = te(!1), N = W((I, Y) => {
    g(I, Y), m == null || m(I, Y);
  }, [g, m]), P = W((I) => {
    r === "MASTER" && I.type === "CP" && N("DETAIL", I.id);
  }, [r, N]), L = W((I) => {
    b(I), w(!1), D(!0);
  }, []), $ = W(() => {
    const I = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    b(I), w(!0), D(!0);
  }, []), R = W((I) => {
    const Y = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: I,
      description: "",
      milestoneType: r === "MASTER" ? "MASTER" : "DETAIL"
    };
    b(Y), w(!0), D(!0);
  }, [r]), H = W(() => {
    D(!1), b(null), w(!1);
  }, []), K = W((I) => {
    v && f ? (f(I), w(!1)) : d && d(I);
  }, [v, f, d]), U = W((I) => {
    y && y(I), H();
  }, [y, H]), C = W((I) => {
    T(I), j(!0);
  }, []), V = W((I) => {
    if (!n || !l) return;
    const Y = {
      id: `task-${Date.now()}`,
      parentId: n,
      wbsLevel: 2,
      type: "TASK",
      name: "새 공정",
      startDate: I,
      endDate: I,
      task: {
        netWorkDays: 1,
        indirectWorkDaysPre: 0,
        indirectWorkDaysPost: 0
      },
      dependencies: []
    };
    l(Y);
  }, [n, l]), X = W(() => {
    j(!1), T(null);
  }, []), S = W((I) => {
    i && i(I);
  }, [i]), A = W((I) => {
    c && c(I), X();
  }, [c, X]);
  fe(() => {
    if (k && E) {
      const I = e.find((Y) => Y.id === k.id);
      I && T(I);
    }
  }, [e]), fe(() => {
    if (p && x) {
      const I = t.find((Y) => Y.id === p.id);
      I && b(I);
    }
  }, [t]);
  const M = W(async (I) => {
    if (i)
      try {
        const Y = e.find((q) => q.id === I.taskId);
        if (!Y || !Y.task) return;
        const G = {
          ...Y,
          startDate: I.newStartDate,
          endDate: I.newEndDate,
          task: {
            ...Y.task,
            indirectWorkDaysPre: I.newIndirectWorkDaysPre,
            indirectWorkDaysPost: I.newIndirectWorkDaysPost,
            netWorkDays: I.newNetWorkDays
          }
        };
        await i(G);
      } catch (Y) {
        console.error("Failed to update task:", Y), u == null || u(Y, { action: "bar_drag", taskId: I.taskId });
      }
  }, [e, i, u]), F = W(async (I) => {
    if (!(!i && !h))
      try {
        if (h) {
          await h(I);
          return;
        }
        if (i)
          if (I.taskUpdates && I.taskUpdates.length > 0)
            for (const Y of I.taskUpdates) {
              const G = e.find((he) => he.id === Y.taskId);
              if (!G) continue;
              const q = $e(G.endDate, G.startDate), Q = ne(Y.newStartDate, q), de = {
                ...G,
                startDate: Y.newStartDate,
                endDate: Q
              };
              await i(de);
            }
          else {
            const Y = I.deltaDays >= 0 ? "right" : "left";
            for (const G of I.affectedTaskIds) {
              const q = e.find((Te) => Te.id === G);
              if (!q) continue;
              let Q = ne(q.startDate, I.deltaDays);
              je(Q, s, o) && (Q = hs(Q, Y, s, o));
              const de = $e(q.endDate, q.startDate), he = ne(Q, de), pe = {
                ...q,
                startDate: Q,
                endDate: he
              };
              await i(pe);
            }
          }
      } catch (Y) {
        console.error("Failed to update group tasks:", Y), u == null || u(Y, {
          action: "bar_drag",
          taskId: I.groupId,
          details: { affectedTaskIds: I.affectedTaskIds }
        });
      }
  }, [e, i, h, u, s, o]);
  return {
    // Modal States
    editingMilestone: p,
    isEditModalOpen: x,
    isNewMilestone: v,
    editingTask: k,
    isTaskEditModalOpen: E,
    // View Handlers
    handleViewChange: N,
    handleTaskClick: P,
    // Milestone Handlers
    handleMilestoneDoubleClick: L,
    handleStartAddMilestone: $,
    handleContextMenuAddMilestone: R,
    handleCloseEditModal: H,
    handleMilestoneSave: K,
    handleMilestoneDelete: U,
    // Task Handlers
    handleTaskDoubleClick: C,
    handleContextMenuAddTask: V,
    handleCloseTaskEditModal: X,
    handleTaskEditSave: S,
    handleTaskEditDelete: A,
    // Drag Handlers
    handleBarDrag: M,
    handleGroupDrag: F
  };
};
function mh({
  tasks: e,
  milestones: t = [],
  holidays: r = Wl,
  calendarSettings: n = mn,
  initialView: s = "MASTER",
  initialZoomLevel: o = "MONTH",
  initialExpandedIds: i,
  onTaskUpdate: l,
  onTaskCreate: c,
  onTaskDelete: f,
  onTaskReorder: d,
  onTaskGroup: y,
  onTaskUngroup: h,
  onTaskMove: m,
  onGroupDrag: u,
  onViewChange: g,
  anchorDependencies: p = [],
  onAnchorDependencyCreate: b,
  onAnchorDependencyDelete: x,
  onAnchorDependencyDrag: D,
  onCycleDetected: v,
  onMilestoneCreate: w,
  onMilestoneUpdate: k,
  onMilestoneDelete: T,
  onSave: E,
  onReset: j,
  hasUnsavedChanges: N,
  saveStatus: P,
  onExport: L,
  onExportExcel: $,
  onImport: R,
  loadedFileName: H,
  onError: K,
  className: U,
  style: C
}) {
  const { viewMode: V, activeCPId: X, zoomLevel: S } = gc(), { setViewMode: A, setZoomLevel: M } = yc(), { sidebarWidth: F, setSidebarWidth: I } = pc(), { expandedTaskIds: Y, toggleTask: G, expandAll: q, collapseAll: Q, setExpandedTaskIds: de } = da(), { focusedTaskId: he } = yn(), { isCompactMode: pe, toggleCompactMode: Te } = xc(), We = re(
    () => Nl((V === "DETAIL" || V === "UNIFIED") && pe),
    [V, pe]
  ), qe = be(null), _e = be(null), ve = be(null), [De, Pe] = te(!1), [Ve, tt] = te(!1), [nt, we] = te(null), {
    columns: Ye,
    dragHandleWidth: Se,
    resizingIndex: Qe,
    handleColumnResizeStart: Ke,
    handleColumnResizeDoubleClick: ge,
    handleOptimalColumnWidth: Re
  } = af({
    viewMode: V,
    hasReorder: !!d
  }), { expandNextLevel: st, collapseLastLevel: vt } = lf({
    tasks: e,
    viewMode: V,
    activeCPId: X,
    expandedTaskIds: Y,
    setExpandedTaskIds: de
  }), {
    editingMilestone: ot,
    isEditModalOpen: wt,
    isNewMilestone: kt,
    editingTask: Et,
    isTaskEditModalOpen: ht,
    handleViewChange: mt,
    handleTaskClick: Ue,
    handleMilestoneDoubleClick: Je,
    handleStartAddMilestone: Tt,
    handleContextMenuAddMilestone: gt,
    handleCloseEditModal: at,
    handleMilestoneSave: se,
    handleMilestoneDelete: z,
    handleTaskDoubleClick: O,
    handleContextMenuAddTask: ue,
    handleCloseTaskEditModal: J,
    handleTaskEditSave: B,
    handleTaskEditDelete: ae,
    handleBarDrag: me,
    handleGroupDrag: ke
  } = cf({
    tasks: e,
    milestones: t,
    viewMode: V,
    activeCPId: X,
    holidays: r,
    calendarSettings: n,
    onTaskUpdate: l,
    onTaskCreate: c,
    onTaskDelete: f,
    onMilestoneCreate: w,
    onMilestoneUpdate: k,
    onMilestoneDelete: T,
    onGroupDrag: u,
    onViewChange: g,
    onError: K,
    setViewMode: A
  }), oe = W(() => {
    _e.current && ve.current && (ve.current.scrollLeft = _e.current.scrollLeft);
  }, []);
  nf({
    tasks: e,
    initialView: s,
    initialZoomLevel: o,
    initialExpandedIds: i,
    setViewMode: A,
    setZoomLevel: M,
    expandAll: q,
    collapseAll: Q
  });
  const Fe = re(() => {
    const Oe = /* @__PURE__ */ new Map();
    return e.forEach((et) => {
      const Be = et.parentId;
      Oe.has(Be) || Oe.set(Be, []), Oe.get(Be).push(et);
    }), Oe;
  }, [e]), Ze = re(() => {
    if (V === "MASTER") {
      const Oe = [], et = (Be) => {
        (Fe.get(Be) || []).forEach((Ie) => {
          Ie.wbsLevel === 1 && (Be === null || Y.has(Be)) && (Oe.push(Ie), Ie.type === "GROUP" && et(Ie.id));
        });
      };
      return et(null), Oe;
    } else if (V === "DETAIL") {
      const Oe = [], et = (Be) => {
        (Fe.get(Be) || []).forEach((Ie) => {
          Ie.wbsLevel === 2 && (Be === X || Y.has(Be)) && (Oe.push(Ie), Ie.type === "GROUP" && et(Ie.id));
        });
      };
      return et(X), Oe;
    } else {
      const Oe = [], et = (Be) => {
        (Fe.get(Be) || []).forEach((Ie) => {
          Ie.wbsLevel === 1 ? (Be === null || Y.has(Be)) && (Oe.push(Ie), Y.has(Ie.id) && et(Ie.id)) : Ie.wbsLevel === 2 && (Oe.push(Ie), Ie.type === "GROUP" && Y.has(Ie.id) && et(Ie.id));
        });
      };
      return et(null), Oe;
    }
  }, [Fe, V, X, Y]), { virtualRows: Wt, totalHeight: Ft, virtualizer: Ua } = Zu({
    containerRef: _e,
    count: Ze.length,
    overscan: 30,
    rowHeight: We.rowHeight,
    tasks: Ze,
    allTasks: e
  }), { minDate: Ka } = re(
    () => ps(e, t, 60),
    [e, t]
  ), { focusTask: Xa } = ef({
    scrollContainerRef: _e,
    virtualizer: Ua,
    visibleTasks: Ze,
    allTasks: e,
    minDate: Ka,
    pixelsPerDay: wr[S].pixelsPerDay,
    sidebarWidth: F
  }), { isResizing: Ir, handleResizeStart: qa, handleResizeDoubleClick: Qa } = of({
    sidebarWidth: F,
    setSidebarWidth: I,
    viewMode: V,
    sidebarTotalWidth: nt
  }), { scrollToFirstTask: Ja } = sf({
    scrollRef: _e,
    viewMode: V,
    activeCPId: X,
    zoomLevel: S,
    sidebarWidth: F,
    tasks: e,
    visibleTasks: Ze,
    milestones: t
  });
  tf({
    visibleTasks: Ze,
    viewMode: V,
    onViewChange: mt,
    focusTask: Xa,
    onTaskEdit: O
  });
  const Ns = re(() => ({
    tasks: Ze,
    allTasks: e,
    viewMode: V,
    expandedIds: Y,
    onToggle: G,
    onTaskClick: Ue,
    onTaskUpdate: l,
    onTaskCreate: c,
    onTaskReorder: d,
    onTaskGroup: y,
    onTaskUngroup: h,
    onTaskDelete: f,
    onTaskMove: m,
    activeCPId: X,
    holidays: r,
    calendarSettings: n,
    virtualRows: Wt,
    totalHeight: Ft,
    onTotalWidthChange: we,
    isAddingTask: De,
    onCancelAddTask: () => Pe(!1),
    isAddingCP: Ve,
    onCancelAddCP: () => tt(!1),
    onTaskDoubleClick: O,
    rowHeight: We.rowHeight,
    externalColumns: Ye,
    externalColumnResizeStart: Ke,
    externalColumnResizeDoubleClick: ge,
    externalDragHandleWidth: Se,
    externalResizingIndex: Qe,
    onOptimalColumnWidth: Re
  }), [
    Ze,
    e,
    V,
    Y,
    G,
    Ue,
    l,
    c,
    d,
    y,
    h,
    f,
    m,
    X,
    r,
    n,
    Wt,
    Ft,
    De,
    Ve,
    O,
    We.rowHeight,
    Ye,
    Ke,
    ge,
    Se,
    Qe,
    Re
  ]), js = re(() => ({
    tasks: Ze,
    allTasks: e,
    milestones: t,
    viewMode: V,
    zoomLevel: S,
    holidays: r,
    calendarSettings: n,
    onTaskUpdate: l,
    onBarDrag: me,
    onGroupDrag: ke,
    onMilestoneUpdate: k,
    onMilestoneDoubleClick: Je,
    onTaskDoubleClick: O,
    virtualRows: Wt,
    totalHeight: Ft,
    onGroupToggle: G,
    activeCPId: X,
    anchorDependencies: p,
    onAnchorDependencyCreate: b,
    onAnchorDependencyDelete: x,
    onAnchorDependencyDrag: D,
    onCycleDetected: v,
    rowHeight: We.rowHeight,
    barHeight: We.barHeight
  }), [
    Ze,
    e,
    t,
    V,
    S,
    r,
    n,
    l,
    me,
    ke,
    k,
    Je,
    O,
    Wt,
    Ft,
    G,
    X,
    p,
    b,
    x,
    D,
    v,
    We.rowHeight,
    We.barHeight
  ]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: qe,
      className: `sa-gantt-root flex h-full w-full flex-col ${U || ""}`,
      style: { backgroundColor: "var(--gantt-bg-secondary)", ...C },
      children: [
        /* @__PURE__ */ a.jsx(
          rf,
          {
            viewMode: V,
            zoomLevel: S,
            activeCPId: X,
            isAddingTask: De,
            isAddingCP: Ve,
            hasUnsavedChanges: N,
            saveStatus: P,
            isCompactMode: V === "DETAIL" || V === "UNIFIED" ? pe : !1,
            onViewChange: mt,
            onZoomChange: M,
            onToggleCompact: V === "DETAIL" || V === "UNIFIED" ? Te : void 0,
            onStartAddTask: () => Pe(!0),
            onStartAddCP: () => tt(!0),
            onStartAddMilestone: Tt,
            onScrollToFirst: Ja,
            onCollapseAll: vt,
            onExpandAll: st,
            onSave: E,
            onReset: j,
            onExport: L,
            onExportExcel: $,
            onImport: R,
            loadedFileName: H,
            canCreateTask: !!c,
            canCreateMilestone: !!w
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute z-30 cursor-col-resize transition-colors",
              style: {
                left: F,
                top: 0,
                bottom: 0,
                width: 4,
                backgroundColor: Ir ? "var(--gantt-resizer-active)" : "var(--gantt-resizer)"
              },
              onMouseDown: qa,
              onDoubleClick: Qa,
              onMouseEnter: (Oe) => {
                Ir || (Oe.currentTarget.style.backgroundColor = "var(--gantt-resizer-hover)");
              },
              onMouseLeave: (Oe) => {
                Ir || (Oe.currentTarget.style.backgroundColor = "var(--gantt-resizer)");
              },
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "flex shrink-0 shadow-sm relative z-20",
              style: { backgroundColor: "var(--gantt-bg-primary)" },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: "shrink-0 relative",
                    style: { width: F + 4, overflow: "hidden", willChange: "width", backgroundColor: "var(--gantt-bg-primary)" },
                    children: /* @__PURE__ */ a.jsx(Jn, { ...Ns, renderMode: "header" })
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    ref: ve,
                    className: "flex-1",
                    style: { overflowX: "hidden", overflowY: "visible", backgroundColor: "var(--gantt-bg-primary)" },
                    children: /* @__PURE__ */ a.jsx(
                      ns,
                      {
                        ...js,
                        onContextMenuAddTask: V === "DETAIL" && X && c ? ue : void 0,
                        onContextMenuAddMilestone: w ? gt : void 0,
                        focusedTaskId: he,
                        renderMode: "header"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { ref: _e, className: "relative flex flex-1 overflow-auto gantt-scrollbar-hide", onScroll: oe, children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "sticky left-0 z-10 flex shrink-0",
                style: { width: F + 4, willChange: "width", alignSelf: "flex-start" },
                children: /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "flex shrink-0 flex-col",
                    style: { width: F, clipPath: "inset(0)", backgroundColor: "var(--gantt-bg-primary)" },
                    children: [
                      /* @__PURE__ */ a.jsx(Jn, { ...Ns, renderMode: "content" }),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          style: {
                            height: V === "MASTER" ? 90 : 70,
                            backgroundColor: "var(--gantt-bg-secondary)",
                            borderTop: "2px solid var(--gantt-border)"
                          }
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "relative flex flex-1 flex-col",
                style: { backgroundColor: "var(--gantt-bg-primary)" },
                children: /* @__PURE__ */ a.jsx(
                  ns,
                  {
                    ...js,
                    onContextMenuAddTask: V === "DETAIL" && X && c ? ue : void 0,
                    onContextMenuAddMilestone: w ? gt : void 0,
                    focusedTaskId: he,
                    renderMode: "content"
                  }
                )
              }
            ),
            Ir && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          Bd,
          {
            milestone: ot,
            isOpen: wt,
            isNew: kt,
            onClose: at,
            onSave: se,
            onDelete: z
          }
        ),
        /* @__PURE__ */ a.jsx(
          Lu,
          {
            task: Et,
            isOpen: ht,
            onClose: J,
            onSave: B,
            onDelete: f ? ae : void 0
          }
        )
      ]
    }
  );
}
class gh extends ti {
  constructor(r) {
    super(r);
    /**
     * 에러 상태 초기화 (재시도)
     */
    Mr(this, "handleRetry", () => {
      this.setState({
        hasError: !1,
        error: null,
        errorInfo: null
      });
    });
    this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  /**
   * 에러 발생 시 state 업데이트
   */
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  /**
   * 에러 정보 로깅 및 콜백 호출
   */
  componentDidCatch(r, n) {
    this.setState({ errorInfo: n }), this.props.onError && this.props.onError(r, n), process.env.NODE_ENV === "development" && (console.error(
      `[GanttErrorBoundary${this.props.componentName ? `: ${this.props.componentName}` : ""}] Error caught:`,
      r
    ), console.error("Component stack:", n.componentStack));
  }
  render() {
    var r, n;
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          backgroundColor: "#fef2f2",
          border: `1px solid ${_.holiday}`,
          borderRadius: "8px",
          minHeight: "200px"
        },
        children: [
          /* @__PURE__ */ a.jsxs(
            "svg",
            {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: _.red,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "h3",
            {
              style: {
                marginTop: "16px",
                marginBottom: "8px",
                fontSize: "16px",
                fontWeight: 600,
                color: "#991b1b"
              },
              children: "간트 차트 렌더링 오류"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "p",
            {
              style: {
                marginBottom: "16px",
                fontSize: "14px",
                color: "#7f1d1d",
                textAlign: "center",
                maxWidth: "400px"
              },
              children: ((r = this.state.error) == null ? void 0 : r.message) || "알 수 없는 오류가 발생했습니다."
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: this.handleRetry,
              style: {
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "white",
                backgroundColor: _.red,
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.2s"
              },
              onMouseOver: (s) => {
                s.currentTarget.style.backgroundColor = "#dc2626";
              },
              onMouseOut: (s) => {
                s.currentTarget.style.backgroundColor = _.red;
              },
              children: "다시 시도"
            }
          ),
          process.env.NODE_ENV === "development" && this.state.errorInfo && /* @__PURE__ */ a.jsxs(
            "details",
            {
              style: {
                marginTop: "20px",
                padding: "12px",
                backgroundColor: "#fee2e2",
                borderRadius: "4px",
                fontSize: "12px",
                maxWidth: "100%",
                overflow: "auto"
              },
              children: [
                /* @__PURE__ */ a.jsx("summary", { style: { cursor: "pointer", fontWeight: 500 }, children: "개발자 정보 (Development Only)" }),
                /* @__PURE__ */ a.jsx(
                  "pre",
                  {
                    style: {
                      marginTop: "8px",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word"
                    },
                    children: (n = this.state.error) == null ? void 0 : n.stack
                  }
                )
              ]
            }
          )
        ]
      }
    ) : this.props.children;
  }
}
const Es = Fo(null);
function yh({
  children: e,
  viewMode: t,
  activeCPId: r,
  holidays: n,
  calendarSettings: s,
  onTaskUpdate: o,
  onTaskCreate: i,
  onTaskDelete: l,
  onTaskReorder: c,
  onTaskGroup: f,
  onTaskUngroup: d,
  onTaskMove: y,
  onTaskDoubleClick: h
}) {
  const m = re(
    () => ({
      viewMode: t,
      activeCPId: r,
      holidays: n,
      calendarSettings: s,
      onTaskUpdate: o,
      onTaskCreate: i,
      onTaskDelete: l,
      onTaskReorder: c,
      onTaskGroup: f,
      onTaskUngroup: d,
      onTaskMove: y,
      onTaskDoubleClick: h
    }),
    [
      t,
      r,
      n,
      s,
      o,
      i,
      l,
      c,
      f,
      d,
      y,
      h
    ]
  );
  return /* @__PURE__ */ a.jsx(Es.Provider, { value: m, children: e });
}
function ph() {
  const e = fn(Es);
  if (e === null)
    throw new Error(
      "useGanttContext must be used within a GanttProvider. Make sure your component is wrapped with <GanttProvider>."
    );
  return e;
}
function xh() {
  return fn(Es);
}
const rn = Fo(void 0), df = "gantt-theme", Wo = () => typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", Bn = (e, t) => {
  if (typeof document > "u") return;
  const r = document.documentElement;
  r.classList.remove("light", "dark"), e !== "system" && r.classList.add(e);
  const n = document.querySelector('meta[name="color-scheme"]');
  n && n.setAttribute("content", t);
}, bh = ({
  children: e,
  defaultTheme: t = "system",
  storageKey: r = df
}) => {
  const [n, s] = te(t), [o, i] = te("light"), [l, c] = te(!1);
  fe(() => {
    const y = localStorage.getItem(r) || t;
    s(y);
    const h = y === "system" ? Wo() : y;
    i(h), Bn(y, h), c(!0);
  }, [t, r]), fe(() => {
    if (typeof window > "u") return;
    const d = window.matchMedia("(prefers-color-scheme: dark)"), y = (h) => {
      if (n === "system") {
        const m = h.matches ? "dark" : "light";
        i(m), Bn("system", m);
      }
    };
    return d.addEventListener("change", y), () => d.removeEventListener("change", y);
  }, [n]);
  const f = W((d) => {
    s(d), localStorage.setItem(r, d);
    const y = d === "system" ? Wo() : d;
    i(y), Bn(d, y);
  }, [r]);
  return l ? /* @__PURE__ */ a.jsx(
    rn.Provider,
    {
      value: {
        theme: n,
        resolvedTheme: o,
        setTheme: f,
        isDark: o === "dark"
      },
      children: e
    }
  ) : /* @__PURE__ */ a.jsx(
    rn.Provider,
    {
      value: {
        theme: t,
        resolvedTheme: "light",
        setTheme: () => {
        },
        isDark: !1
      },
      children: e
    }
  );
}, Pa = () => {
  const e = fn(rn);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Dh = () => {
  const e = fn(rn), [t, r] = te(!1);
  return fe(() => {
    if (e !== void 0) return;
    const n = () => {
      if (typeof document > "u") return;
      const o = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark");
      r(o);
    };
    n();
    const s = new MutationObserver((o) => {
      o.forEach((i) => {
        i.attributeName === "class" && n();
      });
    });
    return s.observe(document.documentElement, { attributes: !0 }), s.observe(document.body, { attributes: !0 }), () => s.disconnect();
  }, [e]), e === void 0 ? {
    theme: "system",
    resolvedTheme: t ? "dark" : "light",
    setTheme: () => {
      console.warn("[sa-gantt-lib] setTheme called without ThemeProvider. Use ThemeProvider or your app's theme system.");
    },
    isDark: t
  } : e;
}, Ra = ({ className: e }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "12", r: "5" }),
      /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
      /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
      /* @__PURE__ */ a.jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
      /* @__PURE__ */ a.jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
      /* @__PURE__ */ a.jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
      /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
      /* @__PURE__ */ a.jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
      /* @__PURE__ */ a.jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
    ]
  }
), Oa = ({ className: e }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ a.jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
  }
), Aa = ({ className: e }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ a.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
      /* @__PURE__ */ a.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
      /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
    ]
  }
), vh = ({
  className: e = "",
  size: t = "md",
  showLabel: r = !1
}) => {
  const { theme: n, setTheme: s, resolvedTheme: o } = Pa(), i = {
    sm: "p-1.5 text-xs",
    md: "p-2 text-sm",
    lg: "p-2.5 text-base"
  }, l = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }, c = {
    light: "라이트",
    dark: "다크",
    system: "시스템"
  }, f = {
    light: "dark",
    dark: "system",
    system: "light"
  }, d = () => {
    s(f[n]);
  }, y = () => n === "system" ? /* @__PURE__ */ a.jsx(Aa, { className: l[t] }) : o === "dark" ? /* @__PURE__ */ a.jsx(Oa, { className: l[t] }) : /* @__PURE__ */ a.jsx(Ra, { className: l[t] });
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      onClick: d,
      className: `
                inline-flex items-center gap-1.5 rounded-md border
                transition-colors duration-200
                bg-[var(--gantt-bg-primary)]
                border-[var(--gantt-border)]
                text-[var(--gantt-text-secondary)]
                hover:bg-[var(--gantt-bg-hover)]
                hover:text-[var(--gantt-text-primary)]
                focus:outline-none focus:ring-2 focus:ring-[var(--gantt-focus)] focus:ring-offset-1
                ${i[t]}
                ${e}
            `,
      title: `현재: ${c[n]} 모드 (클릭하여 ${c[f[n]]} 모드로 전환)`,
      "aria-label": `테마 전환: ${c[n]}`,
      children: [
        y(),
        r && /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: c[n] })
      ]
    }
  );
}, wh = ({
  className: e = ""
}) => {
  const { theme: t, setTheme: r } = Pa(), n = [
    { value: "light", icon: /* @__PURE__ */ a.jsx(Ra, { className: "w-4 h-4" }), label: "라이트" },
    { value: "dark", icon: /* @__PURE__ */ a.jsx(Oa, { className: "w-4 h-4" }), label: "다크" },
    { value: "system", icon: /* @__PURE__ */ a.jsx(Aa, { className: "w-4 h-4" }), label: "시스템" }
  ];
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `
                inline-flex rounded-lg border p-1
                bg-[var(--gantt-bg-secondary)]
                border-[var(--gantt-border)]
                ${e}
            `,
      role: "radiogroup",
      "aria-label": "테마 선택",
      children: n.map(({ value: s, icon: o, label: i }) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": t === s,
          onClick: () => r(s),
          className: `
                        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md
                        text-sm font-medium transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-[var(--gantt-focus)]
                        ${t === s ? "bg-[var(--gantt-bg-primary)] text-[var(--gantt-text-primary)] shadow-sm" : "text-[var(--gantt-text-muted)] hover:text-[var(--gantt-text-secondary)]"}
                    `,
          title: `${i} 모드`,
          children: [
            o,
            /* @__PURE__ */ a.jsx("span", { children: i })
          ]
        },
        s
      ))
    }
  );
};
var Ts = Symbol.for("immer-nothing"), fr = Symbol.for("immer-draftable"), ze = Symbol.for("immer-state"), La = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Le(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = La[e], n = It(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Xe = Object, Ot = Xe.getPrototypeOf, mr = "constructor", kr = "prototype", os = "configurable", nn = "enumerable", Vr = "writable", gr = "value", Dt = (e) => !!e && !!e[ze];
function ft(e) {
  var t;
  return e ? Ha(e) || Tr(e) || !!e[fr] || !!((t = e[mr]) != null && t[fr]) || Sr(e) || Cr(e) : !1;
}
var uf = Xe[kr][mr].toString(), _o = /* @__PURE__ */ new WeakMap();
function Ha(e) {
  if (!e || !Ut(e))
    return !1;
  const t = Ot(e);
  if (t === null || t === Xe[kr])
    return !0;
  const r = Xe.hasOwnProperty.call(t, mr) && t[mr];
  if (r === Object)
    return !0;
  if (!It(r))
    return !1;
  let n = _o.get(r);
  return n === void 0 && (n = Function.toString.call(r), _o.set(r, n)), n === uf;
}
function Er(e, t, r = !0) {
  At(e) === 0 ? (r ? Reflect.ownKeys(e) : Xe.keys(e)).forEach((s) => {
    t(s, e[s], e);
  }) : e.forEach((n, s) => t(s, n, e));
}
function At(e) {
  const t = e[ze];
  return t ? t.type_ : Tr(e) ? 1 : Sr(e) ? 2 : Cr(e) ? 3 : 0;
}
var hr = (e, t, r = At(e)) => r === 2 ? e.has(t) : Xe[kr].hasOwnProperty.call(e, t), pt = (e, t, r = At(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), sn = (e, t, r, n = At(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function ff(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Tr = Array.isArray, Sr = (e) => e instanceof Map, Cr = (e) => e instanceof Set, Ut = (e) => typeof e == "object", It = (e) => typeof e == "function", Gn = (e) => typeof e == "boolean";
function hf(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var mf = (e) => Ut(e) ? e == null ? void 0 : e[ze] : null, xt = (e) => e.copy_ || e.base_, Ss = (e) => e.modified_ ? e.copy_ : e.base_;
function as(e, t) {
  if (Sr(e))
    return new Map(e);
  if (Cr(e))
    return new Set(e);
  if (Tr(e))
    return Array[kr].slice.call(e);
  const r = Ha(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Xe.getOwnPropertyDescriptors(e);
    delete n[ze];
    let s = Reflect.ownKeys(n);
    for (let o = 0; o < s.length; o++) {
      const i = s[o], l = n[i];
      l[Vr] === !1 && (l[Vr] = !0, l[os] = !0), (l.get || l.set) && (n[i] = {
        [os]: !0,
        [Vr]: !0,
        // could live with !!desc.set as well here...
        [nn]: l[nn],
        [gr]: e[i]
      });
    }
    return Xe.create(Ot(e), n);
  } else {
    const n = Ot(e);
    if (n !== null && r)
      return { ...e };
    const s = Xe.create(n);
    return Xe.assign(s, e);
  }
}
function Cs(e, t = !1) {
  return Dn(e) || Dt(e) || !ft(e) || (At(e) > 1 && Xe.defineProperties(e, {
    set: Fr,
    add: Fr,
    clear: Fr,
    delete: Fr
  }), Xe.freeze(e), t && Er(
    e,
    (r, n) => {
      Cs(n, !0);
    },
    !1
  )), e;
}
function gf() {
  Le(2);
}
var Fr = {
  [gr]: gf
};
function Dn(e) {
  return e === null || !Ut(e) ? !0 : Xe.isFrozen(e);
}
var on = "MapSet", an = "Patches", Po = "ArrayMethods", ln = {};
function Lt(e) {
  const t = ln[e];
  return t || Le(0, e), t;
}
var Ro = (e) => !!ln[e];
function yf(e, t) {
  ln[e] || (ln[e] = t);
}
var yr, za = () => yr, pf = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Ro(on) ? Lt(on) : void 0,
  arrayMethodsPlugin_: Ro(Po) ? Lt(Po) : void 0
});
function Oo(e, t) {
  t && (e.patchPlugin_ = Lt(an), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function is(e) {
  ls(e), e.drafts_.forEach(xf), e.drafts_ = null;
}
function ls(e) {
  e === yr && (yr = e.parent_);
}
var Ao = (e) => yr = pf(yr, e);
function xf(e) {
  const t = e[ze];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Lo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[ze].modified_ && (is(t), Le(4)), ft(e) && (e = Ho(t, e));
    const { patchPlugin_: s } = t;
    s && s.generateReplacementPatches_(
      r[ze].base_,
      e,
      t
    );
  } else
    e = Ho(t, r);
  return bf(t, e, !0), is(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ts ? e : void 0;
}
function Ho(e, t) {
  if (Dn(t))
    return t;
  const r = t[ze];
  if (!r)
    return cn(t, e.handledSet_, e);
  if (!vn(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    Ba(r, e);
  }
  return r.copy_;
}
function bf(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Cs(t, r);
}
function Fa(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var vn = (e, t) => e.scope_ === t, Df = [];
function $a(e, t, r, n) {
  const s = xt(e), o = e.type_;
  if (n !== void 0 && pt(s, n, o) === t) {
    sn(s, n, r, o);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Er(s, (c, f) => {
      if (Dt(f)) {
        const d = l.get(f) || [];
        d.push(c), l.set(f, d);
      }
    });
  }
  const i = e.draftLocations_.get(t) ?? Df;
  for (const l of i)
    sn(s, l, r, o);
}
function vf(e, t, r) {
  e.callbacks_.push(function(s) {
    var l;
    const o = t;
    if (!o || !vn(o, s))
      return;
    (l = s.mapSetPlugin_) == null || l.fixSetContents(o);
    const i = Ss(o);
    $a(e, o.draft_ ?? o, i, r), Ba(o, s);
  });
}
function Ba(e, t) {
  var n;
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (((n = e.assigned_) == null ? void 0 : n.size) ?? 0) > 0)) {
    const { patchPlugin_: s } = t;
    if (s) {
      const o = s.getPath(e);
      o && s.generatePatches_(e, o, t);
    }
    Fa(e);
  }
}
function wf(e, t, r) {
  const { scope_: n } = e;
  if (Dt(r)) {
    const s = r[ze];
    vn(s, n) && s.callbacks_.push(function() {
      Yr(e);
      const i = Ss(s);
      $a(e, r, i, t);
    });
  } else ft(r) && e.callbacks_.push(function() {
    const o = xt(e);
    e.type_ === 3 ? o.has(r) && cn(r, n.handledSet_, n) : pt(o, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && cn(
      pt(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function cn(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Dt(e) || t.has(e) || !ft(e) || Dn(e) || (t.add(e), Er(e, (n, s) => {
    if (Dt(s)) {
      const o = s[ze];
      if (vn(o, r)) {
        const i = Ss(o);
        sn(e, n, i, e.type_), Fa(o);
      }
    } else ft(s) && cn(s, t, r);
  })), e;
}
function kf(e, t) {
  const r = Tr(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : za(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let s = n, o = dn;
  r && (s = [n], o = pr);
  const { revoke: i, proxy: l } = Proxy.revocable(s, o);
  return n.draft_ = l, n.revoke_ = i, [l, n];
}
var dn = {
  get(e, t) {
    if (t === ze)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r != null && r.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const s = xt(e);
    if (!hr(s, t, e.type_))
      return Ef(e, s, t);
    const o = s[t];
    if (e.finalized_ || !ft(o) || n && e.operationMethod && (r != null && r.isMutatingArrayMethod(
      e.operationMethod
    )) && hf(t))
      return o;
    if (o === Vn(e.base_, t)) {
      Yr(e);
      const i = e.type_ === 1 ? +t : t, l = ds(e.scope_, o, e, i);
      return e.copy_[i] = l;
    }
    return o;
  },
  has(e, t) {
    return t in xt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(xt(e));
  },
  set(e, t, r) {
    const n = Ga(xt(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const s = Vn(xt(e), t), o = s == null ? void 0 : s[ze];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (ff(r, s) && (r !== void 0 || hr(e.base_, t, e.type_)))
        return !0;
      Yr(e), cs(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), wf(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Yr(e), Vn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), cs(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = xt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Vr]: !0,
      [os]: e.type_ !== 1 || t !== "length",
      [nn]: n[nn],
      [gr]: r[t]
    };
  },
  defineProperty() {
    Le(11);
  },
  getPrototypeOf(e) {
    return Ot(e.base_);
  },
  setPrototypeOf() {
    Le(12);
  }
}, pr = {};
for (let e in dn) {
  let t = dn[e];
  pr[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
pr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Le(13), pr.set.call(this, e, t, void 0);
};
pr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Le(14), dn.set.call(this, e[0], t, r, e[0]);
};
function Vn(e, t) {
  const r = e[ze];
  return (r ? xt(r) : e)[t];
}
function Ef(e, t, r) {
  var s;
  const n = Ga(t, r);
  return n ? gr in n ? n[gr] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (s = n.get) == null ? void 0 : s.call(e.draft_)
  ) : void 0;
}
function Ga(e, t) {
  if (!(t in e))
    return;
  let r = Ot(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ot(r);
  }
}
function cs(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && cs(e.parent_));
}
function Yr(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = as(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Tf = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (t, r, n) => {
      if (It(t) && !It(r)) {
        const o = r;
        r = t;
        const i = this;
        return function(c = o, ...f) {
          return i.produce(c, (d) => r.call(this, d, ...f));
        };
      }
      It(r) || Le(6), n !== void 0 && !It(n) && Le(7);
      let s;
      if (ft(t)) {
        const o = Ao(this), i = ds(o, t, void 0);
        let l = !0;
        try {
          s = r(i), l = !1;
        } finally {
          l ? is(o) : ls(o);
        }
        return Oo(o, n), Lo(s, o);
      } else if (!t || !Ut(t)) {
        if (s = r(t), s === void 0 && (s = t), s === Ts && (s = void 0), this.autoFreeze_ && Cs(s, !0), n) {
          const o = [], i = [];
          Lt(an).generateReplacementPatches_(t, s, {
            patches_: o,
            inversePatches_: i
          }), n(o, i);
        }
        return s;
      } else
        Le(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (It(t))
        return (i, ...l) => this.produceWithPatches(i, (c) => t(c, ...l));
      let n, s;
      return [this.produce(t, r, (i, l) => {
        n = i, s = l;
      }), n, s];
    }, Gn(e == null ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Gn(e == null ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Gn(e == null ? void 0 : e.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    ft(e) || Le(8), Dt(e) && (e = Sf(e));
    const t = Ao(this), r = ds(t, e, void 0);
    return r[ze].isManual_ = !0, ls(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ze];
    (!r || !r.isManual_) && Le(9);
    const { scope_: n } = r;
    return Oo(n, t), Lo(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const s = t[r];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Lt(an).applyPatches_;
    return Dt(e) ? n(e, t) : this.produce(
      e,
      (s) => n(s, t)
    );
  }
};
function ds(e, t, r, n) {
  const [s, o] = Sr(t) ? Lt(on).proxyMap_(t, r) : Cr(t) ? Lt(on).proxySet_(t, r) : kf(t, r);
  return ((r == null ? void 0 : r.scope_) ?? za()).drafts_.push(s), o.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], o.key_ = n, r && n !== void 0 ? vf(r, o, n) : o.callbacks_.push(function(c) {
    var d;
    (d = c.mapSetPlugin_) == null || d.fixSetContents(o);
    const { patchPlugin_: f } = c;
    o.modified_ && f && f.generatePatches_(o, [], c);
  }), s;
}
function Sf(e) {
  return Dt(e) || Le(10, e), Va(e);
}
function Va(e) {
  if (!ft(e) || Dn(e))
    return e;
  const t = e[ze];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = as(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = as(e, !0);
  return Er(
    r,
    (s, o) => {
      sn(r, s, Va(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
function Cf() {
  process.env.NODE_ENV !== "production" && La.push(
    'Sets cannot have "replace" patches.',
    function(u) {
      return "Unsupported patch operation: " + u;
    },
    function(u) {
      return "Cannot apply patch, path doesn't resolve: " + u;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  function t(u, g = []) {
    if (u.key_ !== void 0) {
      const p = u.parent_.copy_ ?? u.parent_.base_, b = mf(pt(p, u.key_)), x = pt(p, u.key_);
      if (x === void 0 || x !== u.draft_ && x !== u.base_ && x !== u.copy_ || b != null && b.base_ !== u.base_)
        return null;
      const D = u.parent_.type_ === 3;
      let v;
      if (D) {
        const w = u.parent_;
        v = Array.from(w.drafts_.keys()).indexOf(u.key_);
      } else
        v = u.key_;
      if (!(D && p.size > v || hr(p, v)))
        return null;
      g.push(v);
    }
    if (u.parent_)
      return t(u.parent_, g);
    g.reverse();
    try {
      r(u.copy_, g);
    } catch {
      return null;
    }
    return g;
  }
  function r(u, g) {
    let p = u;
    for (let b = 0; b < g.length - 1; b++) {
      const x = g[b];
      if (p = pt(p, x), !Ut(p) || p === null)
        throw new Error(`Cannot resolve path at '${g.join("/")}'`);
    }
    return p;
  }
  const n = "replace", s = "add", o = "remove";
  function i(u, g, p) {
    if (u.scope_.processedForPatches_.has(u))
      return;
    u.scope_.processedForPatches_.add(u);
    const { patches_: b, inversePatches_: x } = p;
    switch (u.type_) {
      case 0:
      case 2:
        return c(
          u,
          g,
          b,
          x
        );
      case 1:
        return l(
          u,
          g,
          b,
          x
        );
      case 3:
        return f(
          u,
          g,
          b,
          x
        );
    }
  }
  function l(u, g, p, b) {
    let { base_: x, assigned_: D } = u, v = u.copy_;
    v.length < x.length && ([x, v] = [v, x], [p, b] = [b, p]);
    const w = u.allIndicesReassigned_ === !0;
    for (let k = 0; k < x.length; k++) {
      const T = v[k], E = x[k];
      if ((w || (D == null ? void 0 : D.get(k.toString()))) && T !== E) {
        const N = T == null ? void 0 : T[ze];
        if (N && N.modified_)
          continue;
        const P = g.concat([k]);
        p.push({
          op: n,
          path: P,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(T)
        }), b.push({
          op: n,
          path: P,
          value: m(E)
        });
      }
    }
    for (let k = x.length; k < v.length; k++) {
      const T = g.concat([k]);
      p.push({
        op: s,
        path: T,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(v[k])
      });
    }
    for (let k = v.length - 1; x.length <= k; --k) {
      const T = g.concat([k]);
      b.push({
        op: o,
        path: T
      });
    }
  }
  function c(u, g, p, b) {
    const { base_: x, copy_: D, type_: v } = u;
    Er(u.assigned_, (w, k) => {
      const T = pt(x, w, v), E = pt(D, w, v), j = k ? hr(x, w) ? n : s : o;
      if (T === E && j === n)
        return;
      const N = g.concat(w);
      p.push(
        j === o ? { op: j, path: N } : { op: j, path: N, value: m(E) }
      ), b.push(
        j === s ? { op: o, path: N } : j === o ? { op: s, path: N, value: m(T) } : { op: n, path: N, value: m(T) }
      );
    });
  }
  function f(u, g, p, b) {
    let { base_: x, copy_: D } = u, v = 0;
    x.forEach((w) => {
      if (!D.has(w)) {
        const k = g.concat([v]);
        p.push({
          op: o,
          path: k,
          value: w
        }), b.unshift({
          op: s,
          path: k,
          value: w
        });
      }
      v++;
    }), v = 0, D.forEach((w) => {
      if (!x.has(w)) {
        const k = g.concat([v]);
        p.push({
          op: s,
          path: k,
          value: w
        }), b.unshift({
          op: o,
          path: k,
          value: w
        });
      }
      v++;
    });
  }
  function d(u, g, p) {
    const { patches_: b, inversePatches_: x } = p;
    b.push({
      op: n,
      path: [],
      value: g === Ts ? void 0 : g
    }), x.push({
      op: n,
      path: [],
      value: u
    });
  }
  function y(u, g) {
    return g.forEach((p) => {
      const { path: b, op: x } = p;
      let D = u;
      for (let T = 0; T < b.length - 1; T++) {
        const E = At(D);
        let j = b[T];
        typeof j != "string" && typeof j != "number" && (j = "" + j), (E === 0 || E === 1) && (j === "__proto__" || j === mr) && Le(19), It(D) && j === kr && Le(19), D = pt(D, j), Ut(D) || Le(18, b.join("/"));
      }
      const v = At(D), w = h(p.value), k = b[b.length - 1];
      switch (x) {
        case n:
          switch (v) {
            case 2:
              return D.set(k, w);
            case 3:
              Le(16);
            default:
              return D[k] = w;
          }
        case s:
          switch (v) {
            case 1:
              return k === "-" ? D.push(w) : D.splice(k, 0, w);
            case 2:
              return D.set(k, w);
            case 3:
              return D.add(w);
            default:
              return D[k] = w;
          }
        case o:
          switch (v) {
            case 1:
              return D.splice(k, 1);
            case 2:
              return D.delete(k);
            case 3:
              return D.delete(p.value);
            default:
              return delete D[k];
          }
        default:
          Le(17, x);
      }
    }), u;
  }
  function h(u) {
    if (!ft(u))
      return u;
    if (Tr(u))
      return u.map(h);
    if (Sr(u))
      return new Map(
        Array.from(u.entries()).map(([p, b]) => [p, h(b)])
      );
    if (Cr(u))
      return new Set(Array.from(u).map(h));
    const g = Object.create(Ot(u));
    for (const p in u)
      g[p] = h(u[p]);
    return hr(u, fr) && (g[fr] = u[fr]), g;
  }
  function m(u) {
    return Dt(u) ? h(u) : u;
  }
  yf(an, {
    applyPatches_: y,
    generatePatches_: i,
    generateReplacementPatches_: d,
    getPath: t
  });
}
var us = new Tf(), If = us.produce, zo = /* @__PURE__ */ us.applyPatches.bind(us);
function fs(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.getTime() === t.getTime();
}
function Mf(e, t) {
  var r, n;
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s], i = t[s];
    if (o.id !== i.id || o.name !== i.name || o.parentId !== i.parentId || o.type !== i.type || o.wbsLevel !== i.wbsLevel || !fs(o.startDate, i.startDate) || !fs(o.endDate, i.endDate) || o.cp !== i.cp && (!o.cp || !i.cp || o.cp.workDaysTotal !== i.cp.workDaysTotal || o.cp.nonWorkDaysTotal !== i.cp.nonWorkDaysTotal) || o.task !== i.task && (!o.task || !i.task || o.task.netWorkDays !== i.task.netWorkDays || o.task.indirectWorkDaysPre !== i.task.indirectWorkDaysPre || o.task.indirectWorkDaysPost !== i.task.indirectWorkDaysPost || o.task.indirectWorkNamePre !== i.task.indirectWorkNamePre || o.task.indirectWorkNamePost !== i.task.indirectWorkNamePost) || ((r = o.dependencies) == null ? void 0 : r.length) !== ((n = i.dependencies) == null ? void 0 : n.length)) return !1;
  }
  return !0;
}
function Nf(e, t) {
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    const n = e[r], s = t[r];
    if (n.id !== s.id || n.name !== s.name || !fs(n.date, s.date) || n.description !== s.description || n.milestoneType !== s.milestoneType) return !1;
  }
  return !0;
}
function kh(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (const s of r)
    if (e[s] !== t[s]) return !1;
  return !0;
}
function jf(e, t) {
  if (e === t) return !0;
  if (("tasks" in e || "tasks" in t) && !Mf(e.tasks, t.tasks) || ("milestones" in e || "milestones" in t) && !Nf(e.milestones, t.milestones))
    return !1;
  const r = Object.keys(e).filter((s) => s !== "tasks" && s !== "milestones"), n = Object.keys(t).filter((s) => s !== "tasks" && s !== "milestones");
  if (r.length !== n.length) return !1;
  for (const s of r)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
Cf();
const Wf = 50;
function Mt(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Set)
    return new Set(Array.from(e).map((r) => Mt(r)));
  if (e instanceof Map)
    return new Map(Array.from(e.entries()).map(([r, n]) => [Mt(r), Mt(n)]));
  if (Array.isArray(e))
    return e.map((r) => Mt(r));
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Mt(e[r]));
  return t;
}
function Eh(e) {
  const [t, r] = te(() => ({
    past: [],
    present: Mt(e),
    future: []
  })), n = be(!1), s = W((f) => {
    r((d) => {
      const y = typeof f == "function" ? f(d.present) : f;
      if (!n.current)
        return n.current = !0, {
          past: [],
          present: Mt(y),
          future: []
        };
      if (jf(
        d.present,
        y
      ))
        return d;
      let h = [], m = [];
      const u = If(
        d.present,
        (p) => {
          Object.keys(p).forEach((b) => {
            delete p[b];
          }), Object.assign(p, y);
        },
        (p, b) => {
          h = p, m = b;
        }
      ), g = [...d.past, { undo: m, redo: h }];
      return g.length > Wf && g.shift(), {
        past: g,
        present: u,
        future: []
        // 새 변경 시 future 초기화
      };
    });
  }, []), o = W(() => {
    r((f) => {
      if (f.past.length === 0) return f;
      const d = [...f.past], y = d.pop(), h = zo(f.present, y.undo);
      return {
        past: d,
        present: h,
        future: [y, ...f.future]
      };
    });
  }, []), i = W(() => {
    r((f) => {
      if (f.future.length === 0) return f;
      const d = [...f.future], y = d.shift(), h = zo(f.present, y.redo);
      return {
        past: [...f.past, y],
        present: h,
        future: d
      };
    });
  }, []), l = W((f) => {
    n.current = !1, r({
      past: [],
      present: Mt(f),
      future: []
    });
  }, []), c = W(() => {
    r((f) => ({
      past: [],
      present: f.present,
      future: []
    }));
  }, []);
  return {
    present: t.present,
    set: s,
    undo: o,
    redo: i,
    canUndo: t.past.length > 0,
    canRedo: t.future.length > 0,
    reset: l,
    clearHistory: c,
    historyLength: {
      past: t.past.length,
      future: t.future.length
    }
  };
}
function Th(e, t) {
  const [r, n] = te(
    t || e.map((f) => f.width)
  ), [s, o] = te(null), i = be(!1), l = W((f, d) => {
    if (f.detail >= 2) return;
    f.preventDefault(), f.stopPropagation(), i.current = !0, o(d);
    const y = f.clientX, h = r[d], m = e[d].minWidth, u = (p) => {
      if (!i.current) return;
      const b = p.clientX - y, x = Math.max(m, h + b);
      n((D) => {
        const v = [...D];
        return v[d] = x, v;
      });
    }, g = () => {
      i.current = !1, o(null), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", g);
    };
    document.addEventListener("mousemove", u), document.addEventListener("mouseup", g);
  }, [r, e]);
  return {
    columns: e.map((f, d) => ({
      ...f,
      width: r[d] ?? f.width
    })),
    resizingIndex: s,
    handleResizeStart: l,
    setColumnWidths: n
  };
}
function Sh(e) {
  return e != null && e.task !== void 0 && e.task !== null;
}
function Ch(e) {
  return e != null && e.cp !== void 0 && e.cp !== null;
}
function Ih(e) {
  return e != null && e.type === "GROUP";
}
function Mh(e) {
  return e != null && e.type === "CP";
}
function Nh(e) {
  return e != null && e.type === "TASK";
}
function _f(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function jh(e) {
  return e != null && typeof e.id == "string" && typeof e.name == "string" && _f(e.date);
}
function Wh(e) {
  return e != null && typeof e.id == "string" && typeof e.predecessorId == "string" && ["FS", "SS", "FF", "SF"].includes(e.type);
}
function _h(e) {
  return e != null && e.wbsLevel === 1;
}
function Ph(e) {
  return e != null && e.wbsLevel === 2;
}
function Rh(e) {
  return e != null && e.parentId === null;
}
function Oh(e) {
  return Array.isArray(e) && e.length > 0;
}
const Is = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return (
    // 필수 문자열 필드
    typeof t.id == "string" && typeof t.name == "string" && typeof t.startDate == "string" && typeof t.endDate == "string" && // parentId: null 또는 string
    (t.parentId === null || typeof t.parentId == "string") && // wbsLevel: 1 또는 2
    (t.wbsLevel === 1 || t.wbsLevel === 2) && // type: 'GROUP', 'CP', 'TASK' 중 하나
    (t.type === "GROUP" || t.type === "CP" || t.type === "TASK")
  );
}, Ms = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return typeof t.id == "string" && typeof t.date == "string" && typeof t.name == "string";
}, Pf = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return typeof t.workDaysTotal == "number" && typeof t.nonWorkDaysTotal == "number";
}, Rf = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return typeof t.netWorkDays == "number" && typeof t.indirectWorkDaysPre == "number" && typeof t.indirectWorkDaysPost == "number";
}, Of = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return t.progress === void 0 || typeof t.progress == "number";
}, Ya = (e) => {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return typeof t.id == "string" && typeof t.sourceTaskId == "string" && typeof t.targetTaskId == "string" && typeof t.sourceDayIndex == "number" && typeof t.targetDayIndex == "number" && (t.lag === void 0 || typeof t.lag == "number");
}, Af = (e) => {
  const t = e.map((r) => ({
    ...r,
    startDate: xe(r.startDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    endDate: xe(r.endDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  }));
  return JSON.stringify(t);
}, Lf = (e) => {
  try {
    const t = JSON.parse(e);
    if (!Array.isArray(t))
      return console.error("Invalid tasks data format: expected array"), null;
    const r = t.filter(Is);
    return r.length !== t.length && console.warn(
      `[deserializeTasks] ${t.length - r.length}개의 유효하지 않은 Task가 필터링됨`
    ), r.map((n) => {
      const s = n.cp !== void 0 && Pf(n.cp) ? n.cp : void 0, o = n.task !== void 0 && Rf(n.task) ? { ...n.task } : void 0, i = n.group !== void 0 && Of(n.group) ? n.group : void 0, l = Array.isArray(n.dependencies) ? n.dependencies : [];
      return {
        id: n.id,
        parentId: n.parentId,
        wbsLevel: n.wbsLevel,
        type: n.type,
        name: n.name,
        startDate: bt(n.startDate),
        endDate: bt(n.endDate),
        cp: s,
        task: o,
        group: i,
        dependencies: l
      };
    });
  } catch (t) {
    return console.error("Failed to deserialize tasks:", t), null;
  }
}, Hf = (e) => {
  const t = e.map((r) => ({
    ...r,
    date: xe(r.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  }));
  return JSON.stringify(t);
}, zf = (e) => {
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(Ms).map((r) => ({
      ...r,
      date: bt(r.date)
    })) : (console.error("Invalid milestones data format: expected array"), null);
  } catch (t) {
    return console.error("Failed to deserialize milestones:", t), null;
  }
}, Ff = (e) => JSON.stringify(e), $f = (e) => {
  try {
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(Ya) : (console.error("Invalid anchor dependencies data format: expected array"), null);
  } catch (t) {
    return console.error("Failed to deserialize anchor dependencies:", t), null;
  }
}, Bf = (e) => e.map((t) => ({
  id: t.id,
  parentId: t.parentId,
  wbsLevel: t.wbsLevel,
  type: t.type,
  name: t.name,
  startDate: xe(t.startDate, "yyyy-MM-dd"),
  endDate: xe(t.endDate, "yyyy-MM-dd"),
  ...t.cp ? { cp: t.cp } : {},
  ...t.task ? { task: t.task } : {},
  dependencies: t.dependencies
})), Gf = (e) => e.map((t) => ({
  id: t.id,
  date: xe(t.date, "yyyy-MM-dd"),
  name: t.name,
  type: "MILESTONE",
  ...t.milestoneType ? { milestoneType: t.milestoneType } : {},
  ...t.description ? { description: t.description } : {}
})), Vf = (e) => e.map((t) => ({
  id: t.id,
  sourceTaskId: t.sourceTaskId,
  targetTaskId: t.targetTaskId,
  sourceDayIndex: t.sourceDayIndex,
  targetDayIndex: t.targetDayIndex,
  ...t.lag !== void 0 && t.lag !== 0 ? { lag: t.lag } : {}
})), Yf = (e) => {
  const t = {
    milestones: Gf(e.milestones),
    tasks: Bf(e.tasks),
    anchorDependencies: Vf(e.dependencies)
  };
  return JSON.stringify(t, null, 4);
}, Uf = (e) => {
  try {
    const t = JSON.parse(e);
    if (!t.tasks || !Array.isArray(t.tasks))
      throw new Error("유효하지 않은 파일 형식입니다. tasks 배열이 필요합니다.");
    const r = t.tasks.filter(Is).map((o) => {
      var i;
      return {
        ...o,
        wbsLevel: o.wbsLevel,
        type: o.type,
        startDate: bt(o.startDate),
        endDate: bt(o.endDate),
        dependencies: ((i = o.dependencies) == null ? void 0 : i.map((l) => ({
          ...l,
          type: l.type,
          sourceAnchor: l.sourceAnchor,
          targetAnchor: l.targetAnchor
        }))) || []
      };
    }), n = (t.milestones || []).filter(Ms).map((o) => ({
      ...o,
      date: bt(o.date)
    })), s = Array.isArray(t.anchorDependencies) ? t.anchorDependencies.filter(Ya) : [];
    if (r.length === 0)
      throw new Error("가져올 수 있는 태스크가 없습니다.");
    return { tasks: r, milestones: n, dependencies: s };
  } catch (t) {
    return console.error("Failed to parse imported data:", t), null;
  }
}, Ah = (e) => e.filter(Is).map((t) => ({
  ...t,
  wbsLevel: t.wbsLevel,
  type: t.type,
  startDate: bt(t.startDate),
  endDate: bt(t.endDate),
  cp: t.cp ? { ...t.cp } : void 0,
  task: t.task ? { ...t.task } : void 0,
  dependencies: t.dependencies || []
})), Lh = (e) => e.filter(Ms).map((t) => ({
  ...t,
  date: bt(t.date),
  milestoneType: t.milestoneType
})), Kf = "sa-gantt", Xf = (e) => ({
  TASKS: `${e}-tasks`,
  MILESTONES: `${e}-milestones`,
  ANCHOR_DEPENDENCIES: `${e}-anchor-dependencies`
});
class qf extends Error {
  constructor(t, r, n) {
    super(t), this.currentSize = r, this.attemptedKey = n, this.name = "StorageQuotaExceededError";
  }
}
class Qf {
  constructor(t) {
    Mr(this, "storageKeys");
    Mr(this, "debug");
    const r = (t == null ? void 0 : t.storagePrefix) || Kf;
    this.storageKeys = Xf(r), this.debug = (t == null ? void 0 : t.debug) ?? !1;
  }
  log(...t) {
    this.debug && console.log("[LocalStorageService]", ...t);
  }
  /**
   * localStorage에 안전하게 저장 (할당량 초과 처리 포함)
   */
  safeSetItem(t, r) {
    try {
      localStorage.setItem(t, r);
    } catch (n) {
      if (n instanceof DOMException && n.name === "QuotaExceededError") {
        const s = this.getStorageSize();
        throw new qf(
          `저장 공간이 부족합니다. 현재 사용량: ${(s / 1024).toFixed(1)}KB. 일부 데이터를 삭제하거나 내보내기 후 초기화하세요.`,
          s,
          t
        );
      }
      throw n;
    }
  }
  // ============================================
  // Tasks CRUD
  // ============================================
  async loadTasks() {
    try {
      const t = localStorage.getItem(this.storageKeys.TASKS);
      if (!t)
        return this.log("No tasks found in storage"), [];
      const r = Lf(t);
      return r ? (this.log("Loaded", r.length, "tasks"), r) : (this.log("Failed to deserialize tasks"), []);
    } catch (t) {
      return console.error("Failed to load tasks from localStorage:", t), [];
    }
  }
  async saveTasks(t) {
    this.safeSetItem(this.storageKeys.TASKS, Af(t)), this.log("Saved", t.length, "tasks");
  }
  async updateTask(t, r) {
    const n = await this.loadTasks(), s = n.findIndex((i) => i.id === t);
    if (s === -1)
      return this.log("Task not found:", t), null;
    const o = { ...n[s], ...r };
    return n[s] = o, await this.saveTasks(n), this.log("Updated task:", t), o;
  }
  async createTask(t) {
    const r = await this.loadTasks(), n = {
      ...t,
      id: `task-${Date.now()}`
    };
    return r.push(n), await this.saveTasks(r), this.log("Created task:", n.id), n;
  }
  async deleteTask(t) {
    const r = await this.loadTasks(), n = r.filter((s) => s.id !== t);
    return n.length === r.length ? (this.log("Task not found for deletion:", t), !1) : (await this.saveTasks(n), this.log("Deleted task:", t), !0);
  }
  // ============================================
  // Milestones CRUD
  // ============================================
  async loadMilestones() {
    try {
      const t = localStorage.getItem(this.storageKeys.MILESTONES);
      if (!t)
        return this.log("No milestones found in storage"), [];
      const r = zf(t);
      return r ? (this.log("Loaded", r.length, "milestones"), r) : (this.log("Failed to deserialize milestones"), []);
    } catch (t) {
      return console.error("Failed to load milestones from localStorage:", t), [];
    }
  }
  async saveMilestones(t) {
    this.safeSetItem(this.storageKeys.MILESTONES, Hf(t)), this.log("Saved", t.length, "milestones");
  }
  async updateMilestone(t, r) {
    const n = await this.loadMilestones(), s = n.findIndex((i) => i.id === t);
    if (s === -1)
      return this.log("Milestone not found:", t), null;
    const o = { ...n[s], ...r };
    return n[s] = o, await this.saveMilestones(n), this.log("Updated milestone:", t), o;
  }
  async createMilestone(t) {
    const r = await this.loadMilestones(), n = {
      ...t,
      id: `milestone-${Date.now()}`
    };
    return r.push(n), await this.saveMilestones(r), this.log("Created milestone:", n.id), n;
  }
  async deleteMilestone(t) {
    const r = await this.loadMilestones(), n = r.filter((s) => s.id !== t);
    return n.length === r.length ? (this.log("Milestone not found for deletion:", t), !1) : (await this.saveMilestones(n), this.log("Deleted milestone:", t), !0);
  }
  // ============================================
  // Dependencies CRUD
  // ============================================
  async loadDependencies() {
    try {
      const t = localStorage.getItem(this.storageKeys.ANCHOR_DEPENDENCIES);
      if (!t)
        return this.log("No dependencies found in storage"), [];
      const r = $f(t);
      return r ? (this.log("Loaded", r.length, "dependencies"), r) : (this.log("Failed to deserialize dependencies"), []);
    } catch (t) {
      return console.error("Failed to load dependencies from localStorage:", t), [];
    }
  }
  async saveDependencies(t) {
    this.safeSetItem(
      this.storageKeys.ANCHOR_DEPENDENCIES,
      Ff(t)
    ), this.log("Saved", t.length, "dependencies");
  }
  async createDependency(t) {
    const r = await this.loadDependencies();
    return r.push(t), await this.saveDependencies(r), this.log("Created dependency:", t.id), t;
  }
  async deleteDependency(t) {
    const r = await this.loadDependencies(), n = r.filter((s) => s.id !== t);
    return n.length === r.length ? (this.log("Dependency not found for deletion:", t), !1) : (await this.saveDependencies(n), this.log("Deleted dependency:", t), !0);
  }
  // ============================================
  // Bulk Operations
  // ============================================
  async loadAll() {
    const [t, r, n] = await Promise.all([
      this.loadTasks(),
      this.loadMilestones(),
      this.loadDependencies()
    ]);
    return this.log("Loaded all data:", {
      tasks: t.length,
      milestones: r.length,
      dependencies: n.length
    }), { tasks: t, milestones: r, dependencies: n };
  }
  async saveAll(t) {
    await Promise.all([
      this.saveTasks(t.tasks),
      this.saveMilestones(t.milestones),
      this.saveDependencies(t.dependencies)
    ]), this.log("Saved all data");
  }
  // ============================================
  // Import/Export
  // ============================================
  async exportToJSON() {
    const t = await this.loadAll();
    return Yf(t);
  }
  async importFromJSON(t) {
    const r = Uf(t);
    if (!r)
      throw new Error("Failed to parse imported JSON data");
    return await this.saveAll(r), this.log("Imported data from JSON"), r;
  }
  async reset() {
    localStorage.removeItem(this.storageKeys.TASKS), localStorage.removeItem(this.storageKeys.MILESTONES), localStorage.removeItem(this.storageKeys.ANCHOR_DEPENDENCIES), this.log("Storage reset");
  }
  // ============================================
  // Utility Methods
  // ============================================
  /**
   * 데이터 존재 여부 확인
   */
  hasData() {
    return localStorage.getItem(this.storageKeys.TASKS) !== null;
  }
  /**
   * 스토리지 사용량 확인 (바이트)
   */
  getStorageSize() {
    let t = 0;
    return Object.values(this.storageKeys).forEach((r) => {
      const n = localStorage.getItem(r);
      n && (t += n.length * 2);
    }), t;
  }
}
const Hh = (e) => new Qf(e), ie = {
  // CP 바 색상
  CP_WORK: "FFE64A19",
  // Teal (비작업일)
  // Task 바 색상
  TASK_NET_WORK: "FFF44336",
  // Red (순작업일)
  TASK_INDIRECT: "FF2196F3",
  // Blue (간접작업일)
  // GROUP 색상
  GROUP_BAR: "FF9E9E9E",
  // Gray
  // 마일스톤 색상
  MILESTONE: "FFFF9800",
  // Orange
  // 헤더 배경색
  HEADER_BG: "FF424242",
  // Dark Gray
  HEADER_TEXT: "FFFFFFFF",
  // White
  // 주말/휴일 배경색
  WEEKEND_BG: "FFF5F5F5",
  // Light Gray
  // 테두리 색상
  BORDER: "FFE0E0E0"
  // Light Gray
}, Jf = (e, t) => {
  if (e.length === 0) {
    const o = /* @__PURE__ */ new Date();
    return { minDate: o, maxDate: o, totalDays: 1 };
  }
  let r = e[0].startDate, n = e[0].endDate;
  e.forEach((o) => {
    o.startDate < r && (r = o.startDate), o.endDate > n && (n = o.endDate);
  }), t.forEach((o) => {
    o.date < r && (r = o.date), o.date > n && (n = o.date);
  }), r = new Date(r), r.setDate(r.getDate() - 7), n = new Date(n), n.setDate(n.getDate() + 7);
  const s = $e(n, r) + 1;
  return { minDate: r, maxDate: n, totalDays: s };
}, Zf = (e, t) => {
  let r = 0, n = e;
  for (; n.parentId; ) {
    r++;
    const s = t.get(n.parentId);
    if (!s) break;
    n = s;
  }
  return r;
}, eh = (e) => {
  const t = [], r = /* @__PURE__ */ new Set(), n = (s) => {
    r.has(s.id) || (r.add(s.id), t.push(s), e.filter((o) => o.parentId === s.id).forEach((o) => n(o)));
  };
  return e.filter((s) => s.parentId === null).forEach((s) => n(s)), e.forEach((s) => {
    r.has(s.id) || n(s);
  }), t;
}, Yn = (e) => {
  const t = e.getDay();
  return t === 0 || t === 6;
}, th = (e, t) => {
  const r = [], n = (s) => {
    t.forEach((o) => {
      o.parentId === s && (r.push(o), n(o.id));
    });
  };
  return n(e), r;
}, Un = (e, t) => {
  const { sheetName: r, tasks: n, milestones: s, showMilestones: o = !0 } = t;
  if (n.length === 0) return;
  const i = e.addWorksheet(r, {
    views: [{ state: "frozen", xSplit: 4, ySplit: 2 }]
  }), l = new Map(n.map((x) => [x.id, x])), c = eh(n), { minDate: f, maxDate: d } = Jf(n, s), y = ui({ start: f, end: d }), h = ["WBS", "공정명", "시작일", "종료일"], m = i.getRow(1);
  h.forEach((x, D) => {
    const v = m.getCell(D + 1);
    v.value = x, v.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: ie.HEADER_BG }
    }, v.font = { bold: !0, color: { argb: ie.HEADER_TEXT } }, v.alignment = { horizontal: "center", vertical: "middle" }, v.border = {
      top: { style: "thin", color: { argb: ie.BORDER } },
      bottom: { style: "thin", color: { argb: ie.BORDER } },
      left: { style: "thin", color: { argb: ie.BORDER } },
      right: { style: "thin", color: { argb: ie.BORDER } }
    };
  });
  let u = "", g = h.length + 1;
  y.forEach((x, D) => {
    const v = h.length + 1 + D, w = xe(x, "yyyy-MM");
    if (w !== u) {
      u !== "" && v > g + 1 && i.mergeCells(1, g, 1, v - 1), u = w, g = v;
      const k = m.getCell(v);
      k.value = xe(x, "yyyy년 MM월"), k.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: ie.HEADER_BG }
      }, k.font = { bold: !0, color: { argb: ie.HEADER_TEXT } }, k.alignment = { horizontal: "center", vertical: "middle" };
    }
  }), g < h.length + y.length && i.mergeCells(1, g, 1, h.length + y.length);
  const p = i.getRow(2);
  h.forEach((x, D) => {
    const v = p.getCell(D + 1);
    v.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: ie.HEADER_BG }
    }, v.border = {
      top: { style: "thin", color: { argb: ie.BORDER } },
      bottom: { style: "thin", color: { argb: ie.BORDER } },
      left: { style: "thin", color: { argb: ie.BORDER } },
      right: { style: "thin", color: { argb: ie.BORDER } }
    };
  }), h.forEach((x, D) => {
    i.mergeCells(1, D + 1, 2, D + 1);
  }), y.forEach((x, D) => {
    const v = h.length + 1 + D, w = p.getCell(v);
    w.value = xe(x, "d");
    const k = Yn(x) ? ie.WEEKEND_BG : ie.HEADER_BG, T = Yn(x) ? "FF999999" : ie.HEADER_TEXT;
    w.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: k }
    }, w.font = {
      bold: !1,
      color: { argb: T },
      size: 9
    }, w.alignment = { horizontal: "center", vertical: "middle" }, w.border = {
      top: { style: "thin", color: { argb: ie.BORDER } },
      bottom: { style: "thin", color: { argb: ie.BORDER } },
      left: { style: "thin", color: { argb: ie.BORDER } },
      right: { style: "thin", color: { argb: ie.BORDER } }
    };
  });
  let b = 3;
  if (o && s.length > 0) {
    const x = i.getRow(3);
    x.getCell(1).value = "", x.getCell(2).value = "Milestones", x.getCell(2).font = { bold: !0, italic: !0 }, x.getCell(3).value = "", x.getCell(4).value = "";
    for (let D = 1; D <= 4; D++)
      x.getCell(D).border = {
        top: { style: "thin", color: { argb: ie.BORDER } },
        bottom: { style: "thin", color: { argb: ie.BORDER } },
        left: { style: "thin", color: { argb: ie.BORDER } },
        right: { style: "thin", color: { argb: ie.BORDER } }
      };
    y.forEach((D, v) => {
      const w = h.length + 1 + v, k = x.getCell(w), T = s.filter((E) => vr(E.date, D));
      T.length > 0 && (k.value = T.map((E) => E.name).join(", "), k.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: ie.MILESTONE }
      }, k.font = { bold: !0, size: 8 }, k.alignment = { horizontal: "center", vertical: "middle", wrapText: !0 }), k.border = {
        top: { style: "thin", color: { argb: ie.BORDER } },
        bottom: { style: "thin", color: { argb: ie.BORDER } },
        left: { style: "thin", color: { argb: ie.BORDER } },
        right: { style: "thin", color: { argb: ie.BORDER } }
      };
    }), b = 4;
  }
  c.forEach((x, D) => {
    const v = b + D, w = i.getRow(v), k = Zf(x, l);
    w.getCell(1).value = D + 1, w.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
    const T = "  ".repeat(k), E = x.type === "GROUP" ? "[-] " : x.type === "CP" ? "[CP] " : "";
    w.getCell(2).value = T + E + x.name, w.getCell(2).alignment = { horizontal: "left", vertical: "middle" }, (x.type === "GROUP" || x.type === "CP") && (w.getCell(2).font = { bold: !0 }), w.getCell(3).value = xe(x.startDate, "yyyy-MM-dd"), w.getCell(3).alignment = { horizontal: "center", vertical: "middle" }, w.getCell(4).value = xe(x.endDate, "yyyy-MM-dd"), w.getCell(4).alignment = { horizontal: "center", vertical: "middle" };
    for (let j = 1; j <= 4; j++)
      w.getCell(j).border = {
        top: { style: "thin", color: { argb: ie.BORDER } },
        bottom: { style: "thin", color: { argb: ie.BORDER } },
        left: { style: "thin", color: { argb: ie.BORDER } },
        right: { style: "thin", color: { argb: ie.BORDER } }
      };
    y.forEach((j, N) => {
      const P = h.length + 1 + N, L = w.getCell(P);
      if (L.border = {
        top: { style: "thin", color: { argb: ie.BORDER } },
        bottom: { style: "thin", color: { argb: ie.BORDER } },
        left: { style: "thin", color: { argb: ie.BORDER } },
        right: { style: "thin", color: { argb: ie.BORDER } }
      }, j >= x.startDate && j <= x.endDate) {
        let $ = ie.GROUP_BAR;
        if (x.type === "CP" && x.cp)
          $ = ie.CP_WORK;
        else if (x.type === "TASK" && x.task) {
          const R = $e(j, x.startDate), { netWorkDays: H, indirectWorkDaysPre: K, indirectWorkDaysPost: U } = x.task, C = K + H + U;
          R < K ? $ = ie.TASK_INDIRECT : R < K + H ? $ = ie.TASK_NET_WORK : R < C && ($ = ie.TASK_INDIRECT);
        } else x.type === "GROUP" && ($ = ie.GROUP_BAR);
        L.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: $ }
        };
      } else Yn(j) && (L.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: ie.WEEKEND_BG }
      });
    });
  }), i.getColumn(1).width = 6, i.getColumn(2).width = 30, i.getColumn(3).width = 12, i.getColumn(4).width = 12;
  for (let x = 0; x < y.length; x++)
    i.getColumn(h.length + 1 + x).width = 3;
  i.getRow(1).height = 20, i.getRow(2).height = 18, o && s.length > 0 && (i.getRow(3).height = 25);
  for (let x = b; x <= c.length + b - 1; x++)
    i.getRow(x).height = 22;
}, zh = async (e) => {
  const { tasks: t, milestones: r, fileName: n } = e, s = (await import("./exceljs.min-DXK3OYAJ.js").then((g) => g.e)).default, o = new s.Workbook();
  o.creator = "SA-Gantt-Lib", o.created = /* @__PURE__ */ new Date(), Un(o, {
    sheetName: "전체",
    tasks: t,
    milestones: r,
    showMilestones: !0
  });
  const i = t.filter((g) => g.wbsLevel === 1), l = r.filter((g) => g.milestoneType === "MASTER" || !g.milestoneType);
  i.length > 0 && Un(o, {
    sheetName: "Master",
    tasks: i,
    milestones: l,
    showMilestones: !0
  });
  const c = t.filter((g) => g.wbsLevel === 1 && g.type === "CP"), f = /* @__PURE__ */ new Set(["전체", "Master"]);
  c.forEach((g) => {
    const b = th(g.id, t).filter((x) => x.wbsLevel === 2);
    if (b.length > 0) {
      const x = g.name.replace(/[\\/*?:\[\]]/g, "").substring(0, 28);
      let D = x, v = 2;
      for (; f.has(D); ) {
        const k = ` (${v})`;
        D = x.substring(0, 28 - k.length) + k, v++;
      }
      f.add(D);
      const w = r.filter((k) => k.milestoneType === "DETAIL");
      Un(o, {
        sheetName: D,
        tasks: b,
        milestones: w,
        showMilestones: w.length > 0
      });
    }
  });
  const d = await o.xlsx.writeBuffer(), y = new Blob([d], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  }), h = n ? n.replace(/\.json$/i, ".xlsx") : `gantt-chart-${xe(/* @__PURE__ */ new Date(), "yyyy-MM-dd")}.xlsx`, m = URL.createObjectURL(y), u = document.createElement("a");
  u.href = m, u.download = h, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(m), console.log("Excel exported successfully:", h);
};
export {
  rs as BlockBar,
  po as CriticalPathBar,
  qr as DEFAULT_DETAIL_COLUMNS,
  Xr as DEFAULT_MASTER_COLUMNS,
  Nt as GANTT_ANCHOR,
  _ as GANTT_COLORS,
  lh as GANTT_COLORS_STATIC,
  Jr as GANTT_DRAG,
  ce as GANTT_LAYOUT,
  gs as GANTT_STROKE,
  ta as GANTT_SUMMARY,
  mh as GanttChart,
  gh as GanttErrorBoundary,
  yh as GanttProvider,
  Jn as GanttSidebar,
  ns as GanttTimeline,
  bo as GroupSummaryBar,
  na as KOREAN_HOLIDAYS_2025,
  sa as KOREAN_HOLIDAYS_2026,
  oa as KOREAN_HOLIDAYS_2027,
  Wl as KOREAN_HOLIDAYS_ALL,
  Qf as LocalStorageService,
  Lu as TaskEditModal,
  bh as ThemeProvider,
  vh as ThemeToggle,
  wh as ThemeToggleGroup,
  xo as WorkDaysRatioBar,
  wr as ZOOM_CONFIG,
  Gs as addCalendarDays,
  Xt as addWorkingDays,
  Ec as buildChildrenMap,
  pn as calculateCriticalPath,
  ps as calculateDateRange,
  Ml as calculateDualCalendarDates,
  vs as calculateGroupDateRange,
  ur as cn,
  qt as collectDescendantTasks,
  Hh as createLocalStorageService,
  Ge as dateToX,
  zh as exportToExcel,
  hh as formatCriticalPathSummary,
  ah as getAnchorDate,
  ch as getDateRangeWidth,
  ih as getGanttColor,
  _l as getKoreanHolidaysByYear,
  uh as getKoreanHolidaysForYears,
  dh as getPixelsPerDay,
  Mh as isCPTask,
  Ih as isGroupTask,
  je as isHoliday,
  _h as isLevel1Task,
  Ph as isLevel2Task,
  Oh as isNonEmptyArray,
  Nh as isRegularTask,
  Rh as isRootTask,
  Ch as isTaskWithCP,
  Sh as isTaskWithDetails,
  Ya as isValidAnchorDependencyData,
  _f as isValidDate,
  Wh as isValidDependency,
  jh as isValidMilestone,
  Ms as isValidMilestoneData,
  Is as isValidTaskData,
  oh as isWeekend,
  Uf as parseImportedData,
  Lh as parseMockMilestones,
  Ah as parseMockTasks,
  Yf as serializeGanttDataForExport,
  kh as shallowEqual,
  jf as shallowEqualHistoryState,
  Nf as shallowEqualMilestones,
  Mf as shallowEqualTasks,
  ea as subtractWorkingDays,
  Th as useColumnResizer,
  ph as useGanttContext,
  xh as useGanttContextOptional,
  fh as useGanttDrag,
  da as useGanttExpansion,
  yn as useGanttSelection,
  pc as useGanttSidebar,
  zt as useGanttStore,
  yc as useGanttViewActions,
  gc as useGanttViewState,
  Zu as useGanttVirtualization,
  Eh as useHistory,
  Pa as useTheme,
  Dh as useThemeSafe,
  jl as xToDate
};
