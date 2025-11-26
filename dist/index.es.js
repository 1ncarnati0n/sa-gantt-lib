"use client";
import * as Q from "react";
import q, { useState as ie, useRef as U, useEffect as oe } from "react";
import { flushSync as qe } from "react-dom";
var ce = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Be() {
  if (we) return H;
  we = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function e(r, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var o in a)
        o !== "key" && (s[o] = a[o]);
    } else s = a;
    return a = s.ref, {
      $$typeof: t,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return H.Fragment = n, H.jsx = e, H.jsxs = e, H;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ge() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function t(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === Ve ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case O:
          return "Fragment";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case I:
          return "Suspense";
        case T:
          return "SuspenseList";
        case Le:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case k:
            return "Portal";
          case R:
            return c.displayName || "Context";
          case x:
            return (c._context.displayName || "Context") + ".Consumer";
          case j:
            var f = c.render;
            return c = c.displayName, c || (c = f.displayName || f.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case z:
            return f = c.displayName || null, f !== null ? f : t(c.type) || "Memo";
          case te:
            f = c._payload, c = c._init;
            try {
              return t(c(f));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function e(c) {
      try {
        n(c);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var p = f.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return p.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), n(c);
      }
    }
    function r(c) {
      if (c === O) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === te)
        return "<...>";
      try {
        var f = t(c);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var c = ne.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (de.call(c, "key")) {
        var f = Object.getOwnPropertyDescriptor(c, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function o(c, f) {
      function p() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: p,
        configurable: !0
      });
    }
    function u() {
      var c = t(this.type);
      return fe[c] || (fe[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function l(c, f, p, M, G, ae) {
      var S = p.ref;
      return c = {
        $$typeof: E,
        type: c,
        key: f,
        props: p,
        _owner: M
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: u
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
        value: G
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function d(c, f, p, M, G, ae) {
      var S = f.children;
      if (S !== void 0)
        if (M)
          if (He(S)) {
            for (M = 0; M < S.length; M++)
              h(S[M]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(S);
      if (de.call(f, "key")) {
        S = t(c);
        var $ = Object.keys(f).filter(function(Xe) {
          return Xe !== "key";
        });
        M = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", be[S + M] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          S,
          $,
          S
        ), be[S + M] = !0);
      }
      if (S = null, p !== void 0 && (e(p), S = "" + p), i(f) && (e(f.key), S = "" + f.key), "key" in f) {
        p = {};
        for (var se in f)
          se !== "key" && (p[se] = f[se]);
      } else p = f;
      return S && o(
        p,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), l(
        c,
        S,
        p,
        a(),
        G,
        ae
      );
    }
    function h(c) {
      g(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === te && (c._payload.status === "fulfilled" ? g(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function g(c) {
      return typeof c == "object" && c !== null && c.$$typeof === E;
    }
    var b = q, E = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), R = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), Le = Symbol.for("react.activity"), Ve = Symbol.for("react.client.reference"), ne = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, He = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var he, fe = {}, me = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), ge = re(r(s)), be = {};
    X.Fragment = O, X.jsx = function(c, f, p) {
      var M = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        c,
        f,
        p,
        !1,
        M ? Error("react-stack-top-frame") : me,
        M ? re(r(c)) : ge
      );
    }, X.jsxs = function(c, f, p) {
      var M = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return d(
        c,
        f,
        p,
        !0,
        M ? Error("react-stack-top-frame") : me,
        M ? re(r(c)) : ge
      );
    };
  }()), X;
}
process.env.NODE_ENV === "production" ? ce.exports = Be() : ce.exports = Ge();
var m = ce.exports;
const ve = (t) => {
  let n;
  const e = /* @__PURE__ */ new Set(), r = (l, d) => {
    const h = typeof l == "function" ? l(n) : l;
    if (!Object.is(h, n)) {
      const g = n;
      n = d ?? (typeof h != "object" || h === null) ? h : Object.assign({}, n, h), e.forEach((b) => b(n, g));
    }
  }, a = () => n, o = { setState: r, getState: a, getInitialState: () => u, subscribe: (l) => (e.add(l), () => e.delete(l)) }, u = n = t(r, a, o);
  return o;
}, Qe = (t) => t ? ve(t) : ve, Ue = (t) => t;
function Je(t, n = Ue) {
  const e = q.useSyncExternalStore(
    t.subscribe,
    q.useCallback(() => n(t.getState()), [t, n]),
    q.useCallback(() => n(t.getInitialState()), [t, n])
  );
  return q.useDebugValue(e), e;
}
const xe = (t) => {
  const n = Qe(t), e = (r) => Je(n, r);
  return Object.assign(e, n), e;
}, Ke = (t) => t ? xe(t) : xe, Ce = 6048e5, Ze = 864e5, pe = Symbol.for("constructDateFrom");
function N(t, n) {
  return typeof t == "function" ? t(n) : t && typeof t == "object" && pe in t ? t[pe](n) : t instanceof Date ? new t.constructor(n) : new Date(n);
}
function P(t, n) {
  return N(n || t, t);
}
function D(t, n, e) {
  const r = P(t, e == null ? void 0 : e.in);
  return isNaN(n) ? N(t, NaN) : (n && r.setDate(r.getDate() + n), r);
}
let et = {};
function ee() {
  return et;
}
function B(t, n) {
  var o, u, l, d;
  const e = ee(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : u.weekStartsOn) ?? e.weekStartsOn ?? ((d = (l = e.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = P(t, n == null ? void 0 : n.in), s = a.getDay(), i = (s < r ? 7 : 0) + s - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function J(t, n) {
  return B(t, { ...n, weekStartsOn: 1 });
}
function je(t, n) {
  const e = P(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = N(e, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = J(a), i = N(e, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const o = J(i);
  return e.getTime() >= s.getTime() ? r + 1 : e.getTime() >= o.getTime() ? r : r - 1;
}
function Ee(t) {
  const n = P(t), e = new Date(
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
  return e.setUTCFullYear(n.getFullYear()), +t - +e;
}
function ue(t, ...n) {
  const e = N.bind(
    null,
    n.find((r) => typeof r == "object")
  );
  return n.map(e);
}
function K(t, n) {
  const e = P(t, n == null ? void 0 : n.in);
  return e.setHours(0, 0, 0, 0), e;
}
function ze(t, n, e) {
  const [r, a] = ue(
    e == null ? void 0 : e.in,
    t,
    n
  ), s = K(r), i = K(a), o = +s - Ee(s), u = +i - Ee(i);
  return Math.round((o - u) / Ze);
}
function tt(t, n) {
  const e = je(t, n), r = N(t, 0);
  return r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), J(r);
}
function nt(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function rt(t) {
  return !(!nt(t) && typeof t != "number" || isNaN(+P(t)));
}
function le(t, n, e) {
  const [r, a] = ue(
    e == null ? void 0 : e.in,
    t,
    n
  ), s = Me(r, a), i = Math.abs(
    ze(r, a)
  );
  r.setDate(r.getDate() - s * i);
  const o = +(Me(r, a) === -s), u = s * (i - o);
  return u === 0 ? 0 : u;
}
function Me(t, n) {
  const e = t.getFullYear() - n.getFullYear() || t.getMonth() - n.getMonth() || t.getDate() - n.getDate() || t.getHours() - n.getHours() || t.getMinutes() - n.getMinutes() || t.getSeconds() - n.getSeconds() || t.getMilliseconds() - n.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function at(t, n) {
  const e = P(t, n == null ? void 0 : n.in), r = e.getMonth();
  return e.setFullYear(e.getFullYear(), r + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function st(t, n) {
  const [e, r] = ue(t, n.start, n.end);
  return { start: e, end: r };
}
function Ye(t, n) {
  const { start: e, end: r } = st(n == null ? void 0 : n.in, t);
  let a = +e > +r;
  const s = a ? +e : +r, i = a ? r : e;
  i.setHours(0, 0, 0, 0);
  let o = 1;
  const u = [];
  for (; +i <= s; )
    u.push(N(e, i)), i.setDate(i.getDate() + o), i.setHours(0, 0, 0, 0);
  return a ? u.reverse() : u;
}
function it(t, n) {
  const e = P(t, n == null ? void 0 : n.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const ot = {
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
}, ct = (t, n, e) => {
  let r;
  const a = ot[t];
  return typeof a == "string" ? r = a : n === 1 ? r = a.one : r = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r;
};
function V(t) {
  return (n = {}) => {
    const e = n.width ? String(n.width) : t.defaultWidth;
    return t.formats[e] || t.formats[t.defaultWidth];
  };
}
const ut = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, lt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dt = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ht = {
  date: V({
    formats: ut,
    defaultWidth: "full"
  }),
  time: V({
    formats: lt,
    defaultWidth: "full"
  }),
  dateTime: V({
    formats: dt,
    defaultWidth: "full"
  })
}, ft = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, mt = (t, n, e, r) => ft[t];
function _(t) {
  return (n, e) => {
    const r = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const i = t.defaultFormattingWidth || t.defaultWidth, o = e != null && e.width ? String(e.width) : i;
      a = t.formattingValues[o] || t.formattingValues[i];
    } else {
      const i = t.defaultWidth, o = e != null && e.width ? String(e.width) : t.defaultWidth;
      a = t.values[o] || t.values[i];
    }
    const s = t.argumentCallback ? t.argumentCallback(n) : n;
    return a[s];
  };
}
const gt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, bt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, wt = {
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
}, yt = {
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
}, vt = {
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
}, xt = {
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
}, pt = (t, n) => {
  const e = Number(t), r = e % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, Et = {
  ordinalNumber: pt,
  era: _({
    values: gt,
    defaultWidth: "wide"
  }),
  quarter: _({
    values: bt,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: _({
    values: wt,
    defaultWidth: "wide"
  }),
  day: _({
    values: yt,
    defaultWidth: "wide"
  }),
  dayPeriod: _({
    values: vt,
    defaultWidth: "wide",
    formattingValues: xt,
    defaultFormattingWidth: "wide"
  })
};
function W(t) {
  return (n, e = {}) => {
    const r = e.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], s = n.match(a);
    if (!s)
      return null;
    const i = s[0], o = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(o) ? St(o, (h) => h.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Mt(o, (h) => h.test(i))
    );
    let l;
    l = t.valueCallback ? t.valueCallback(u) : u, l = e.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      e.valueCallback(l)
    ) : l;
    const d = n.slice(i.length);
    return { value: l, rest: d };
  };
}
function Mt(t, n) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && n(t[e]))
      return e;
}
function St(t, n) {
  for (let e = 0; e < t.length; e++)
    if (n(t[e]))
      return e;
}
function Fe(t) {
  return (n, e = {}) => {
    const r = n.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], s = n.match(t.parsePattern);
    if (!s) return null;
    let i = t.valueCallback ? t.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const o = n.slice(a.length);
    return { value: i, rest: o };
  };
}
const kt = /^(\d+)(th|st|nd|rd)?/i, Ot = /\d+/i, Pt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Tt = {
  any: [/^b/i, /^(a|c)/i]
}, Dt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _t = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Nt = {
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
}, Rt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ct = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, zt = {
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
}, Yt = {
  ordinalNumber: Fe({
    matchPattern: kt,
    parsePattern: Ot,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: W({
    matchPatterns: Pt,
    defaultMatchWidth: "wide",
    parsePatterns: Tt,
    defaultParseWidth: "any"
  }),
  quarter: W({
    matchPatterns: Dt,
    defaultMatchWidth: "wide",
    parsePatterns: _t,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: W({
    matchPatterns: Wt,
    defaultMatchWidth: "wide",
    parsePatterns: Nt,
    defaultParseWidth: "any"
  }),
  day: W({
    matchPatterns: Rt,
    defaultMatchWidth: "wide",
    parsePatterns: Ct,
    defaultParseWidth: "any"
  }),
  dayPeriod: W({
    matchPatterns: jt,
    defaultMatchWidth: "any",
    parsePatterns: zt,
    defaultParseWidth: "any"
  })
}, Ft = {
  code: "en-US",
  formatDistance: ct,
  formatLong: ht,
  formatRelative: mt,
  localize: Et,
  match: Yt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function It(t, n) {
  const e = P(t, n == null ? void 0 : n.in);
  return ze(e, it(e)) + 1;
}
function $t(t, n) {
  const e = P(t, n == null ? void 0 : n.in), r = +J(e) - +tt(e);
  return Math.round(r / Ce) + 1;
}
function Ie(t, n) {
  var d, h, g, b;
  const e = P(t, n == null ? void 0 : n.in), r = e.getFullYear(), a = ee(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, i = N((n == null ? void 0 : n.in) || t, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const o = B(i, n), u = N((n == null ? void 0 : n.in) || t, 0);
  u.setFullYear(r, 0, s), u.setHours(0, 0, 0, 0);
  const l = B(u, n);
  return +e >= +o ? r + 1 : +e >= +l ? r : r - 1;
}
function At(t, n) {
  var o, u, l, d;
  const e = ee(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : u.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((d = (l = e.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = Ie(t, n), s = N((n == null ? void 0 : n.in) || t, 0);
  return s.setFullYear(a, 0, r), s.setHours(0, 0, 0, 0), B(s, n);
}
function Lt(t, n) {
  const e = P(t, n == null ? void 0 : n.in), r = +B(e, n) - +At(e, n);
  return Math.round(r / Ce) + 1;
}
function w(t, n) {
  const e = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(n, "0");
  return e + r;
}
const Y = {
  // Year
  y(t, n) {
    const e = t.getFullYear(), r = e > 0 ? e : 1 - e;
    return w(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(t, n) {
    const e = t.getMonth();
    return n === "M" ? String(e + 1) : w(e + 1, 2);
  },
  // Day of the month
  d(t, n) {
    return w(t.getDate(), n.length);
  },
  // AM or PM
  a(t, n) {
    const e = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, n) {
    return w(t.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(t, n) {
    return w(t.getHours(), n.length);
  },
  // Minute
  m(t, n) {
    return w(t.getMinutes(), n.length);
  },
  // Second
  s(t, n) {
    return w(t.getSeconds(), n.length);
  },
  // Fraction of second
  S(t, n) {
    const e = n.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, e - 3)
    );
    return w(a, n.length);
  }
}, A = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Se = {
  // Era
  G: function(t, n, e) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(r, { width: "abbreviated" });
      case "GGGGG":
        return e.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, n, e) {
    if (n === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return Y.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, e, r) {
    const a = Ie(t, r), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = s % 100;
      return w(i, 2);
    }
    return n === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : w(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    const e = je(t);
    return w(e, n.length);
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
  u: function(t, n) {
    const e = t.getFullYear();
    return w(e, n.length);
  },
  // Quarter
  Q: function(t, n, e) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return w(r, 2);
      case "Qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return e.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, e) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(r);
      case "qq":
        return w(r, 2);
      case "qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return e.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, e) {
    const r = t.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return Y.M(t, n);
      case "Mo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return e.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, n, e) {
    const r = t.getMonth();
    switch (n) {
      case "L":
        return String(r + 1);
      case "LL":
        return w(r + 1, 2);
      case "Lo":
        return e.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return e.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, n, e, r) {
    const a = Lt(t, r);
    return n === "wo" ? e.ordinalNumber(a, { unit: "week" }) : w(a, n.length);
  },
  // ISO week of year
  I: function(t, n, e) {
    const r = $t(t);
    return n === "Io" ? e.ordinalNumber(r, { unit: "week" }) : w(r, n.length);
  },
  // Day of the month
  d: function(t, n, e) {
    return n === "do" ? e.ordinalNumber(t.getDate(), { unit: "date" }) : Y.d(t, n);
  },
  // Day of year
  D: function(t, n, e) {
    const r = It(t);
    return n === "Do" ? e.ordinalNumber(r, { unit: "dayOfYear" }) : w(r, n.length);
  },
  // Day of week
  E: function(t, n, e) {
    const r = t.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, e, r) {
    const a = t.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return w(s, 2);
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, e, r) {
    const a = t.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return w(s, n.length);
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, e) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return w(a, n.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, e) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, e) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = A.noon : r === 0 ? a = A.midnight : a = r / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, e) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = A.evening : r >= 12 ? a = A.afternoon : r >= 4 ? a = A.morning : a = A.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, e) {
    if (n === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), e.ordinalNumber(r, { unit: "hour" });
    }
    return Y.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, e) {
    return n === "Ho" ? e.ordinalNumber(t.getHours(), { unit: "hour" }) : Y.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, e) {
    const r = t.getHours() % 12;
    return n === "Ko" ? e.ordinalNumber(r, { unit: "hour" }) : w(r, n.length);
  },
  // Hour [1-24]
  k: function(t, n, e) {
    let r = t.getHours();
    return r === 0 && (r = 24), n === "ko" ? e.ordinalNumber(r, { unit: "hour" }) : w(r, n.length);
  },
  // Minute
  m: function(t, n, e) {
    return n === "mo" ? e.ordinalNumber(t.getMinutes(), { unit: "minute" }) : Y.m(t, n);
  },
  // Second
  s: function(t, n, e) {
    return n === "so" ? e.ordinalNumber(t.getSeconds(), { unit: "second" }) : Y.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Y.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, e) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return Oe(r);
      case "XXXX":
      case "XX":
        return F(r);
      case "XXXXX":
      case "XXX":
      default:
        return F(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, e) {
    const r = t.getTimezoneOffset();
    switch (n) {
      case "x":
        return Oe(r);
      case "xxxx":
      case "xx":
        return F(r);
      case "xxxxx":
      case "xxx":
      default:
        return F(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, e) {
    const r = t.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ke(r, ":");
      case "OOOO":
      default:
        return "GMT" + F(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, e) {
    const r = t.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ke(r, ":");
      case "zzzz":
      default:
        return "GMT" + F(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, e) {
    const r = Math.trunc(+t / 1e3);
    return w(r, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, e) {
    return w(+t, n.length);
  }
};
function ke(t, n = "") {
  const e = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? e + String(a) : e + String(a) + n + w(s, 2);
}
function Oe(t, n) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + w(Math.abs(t) / 60, 2) : F(t, n);
}
function F(t, n = "") {
  const e = t > 0 ? "-" : "+", r = Math.abs(t), a = w(Math.trunc(r / 60), 2), s = w(r % 60, 2);
  return e + a + n + s;
}
const Pe = (t, n) => {
  switch (t) {
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
}, $e = (t, n) => {
  switch (t) {
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
}, Vt = (t, n) => {
  const e = t.match(/(P+)(p+)?/) || [], r = e[1], a = e[2];
  if (!a)
    return Pe(t, n);
  let s;
  switch (r) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Pe(r, n)).replace("{{time}}", $e(a, n));
}, Ht = {
  p: $e,
  P: Vt
}, Xt = /^D+$/, qt = /^Y+$/, Bt = ["D", "DD", "YY", "YYYY"];
function Gt(t) {
  return Xt.test(t);
}
function Qt(t) {
  return qt.test(t);
}
function Ut(t, n, e) {
  const r = Jt(t, n, e);
  if (console.warn(r), Bt.includes(t)) throw new RangeError(r);
}
function Jt(t, n, e) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Kt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, en = /^'([^]*?)'?$/, tn = /''/g, nn = /[a-zA-Z]/;
function Te(t, n, e) {
  var d, h, g, b, E, k, O, v;
  const r = ee(), a = (e == null ? void 0 : e.locale) ?? r.locale ?? Ft, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((h = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((k = (E = e == null ? void 0 : e.locale) == null ? void 0 : E.options) == null ? void 0 : k.weekStartsOn) ?? r.weekStartsOn ?? ((v = (O = r.locale) == null ? void 0 : O.options) == null ? void 0 : v.weekStartsOn) ?? 0, o = P(t, e == null ? void 0 : e.in);
  if (!rt(o))
    throw new RangeError("Invalid time value");
  let u = n.match(Zt).map((y) => {
    const x = y[0];
    if (x === "p" || x === "P") {
      const R = Ht[x];
      return R(y, a.formatLong);
    }
    return y;
  }).join("").match(Kt).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const x = y[0];
    if (x === "'")
      return { isToken: !1, value: rn(y) };
    if (Se[x])
      return { isToken: !0, value: y };
    if (x.match(nn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(o, u));
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return u.map((y) => {
    if (!y.isToken) return y.value;
    const x = y.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Qt(x) || !(e != null && e.useAdditionalDayOfYearTokens) && Gt(x)) && Ut(x, n, String(t));
    const R = Se[x[0]];
    return R(o, x, a.localize, l);
  }).join("");
}
function rn(t) {
  const n = t.match(en);
  return n ? n[1].replace(tn, "'") : t;
}
const C = Ke((t, n) => ({
  tasks: [],
  links: [],
  viewMode: "day",
  columnWidth: 50,
  rowHeight: 40,
  startDate: null,
  endDate: null,
  scrollX: 0,
  scrollY: 0,
  selectedTaskId: null,
  expandedTaskIds: /* @__PURE__ */ new Set(),
  setTasks: (e) => {
    if (e.length === 0) {
      t({ tasks: e, startDate: /* @__PURE__ */ new Date(), endDate: D(/* @__PURE__ */ new Date(), 30) });
      return;
    }
    const r = e.map((o) => o.start_date.getTime()), a = e.map((o) => o.end_date.getTime()), s = K(new Date(Math.min(...r))), i = K(new Date(Math.max(...a)));
    t({
      tasks: e,
      startDate: D(s, -7),
      endDate: D(i, 7)
    });
  },
  setLinks: (e) => t({ links: e }),
  setViewMode: (e) => {
    let r = 50;
    switch (e) {
      case "day":
        r = 50;
        break;
      case "week":
        r = 40;
        break;
      case "month":
        r = 30;
        break;
    }
    t({ viewMode: e, columnWidth: r });
  },
  toggleTask: (e) => t((r) => {
    const a = new Set(r.expandedTaskIds);
    return a.has(e) ? a.delete(e) : a.add(e), { expandedTaskIds: a };
  }),
  updateTask: (e, r) => t((a) => ({
    tasks: a.tasks.map((s) => s.id === e ? { ...s, ...r } : s)
  })),
  getVisibleTasks: () => {
    const e = n(), { tasks: r, expandedTaskIds: a } = e, s = (i) => {
      const o = r.find((u) => u.id === i);
      return o ? o.parent === 0 || o.parent === "0" ? !0 : a.has(o.parent) && s(o.parent) : !1;
    };
    return r.filter((i) => i.parent === 0 || i.parent === "0" ? !0 : a.has(i.parent) && s(i.parent));
  }
})), an = {
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
}, sn = (t, n, e) => {
  let r;
  const a = an[t];
  return typeof a == "string" ? r = a : n === 1 ? r = a.one : r = a.other.replace("{{count}}", n.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? r + " 후" : r + " 전" : r;
}, on = {
  full: "y년 M월 d일 EEEE",
  long: "y년 M월 d일",
  medium: "y.MM.dd",
  short: "y.MM.dd"
}, cn = {
  full: "a H시 mm분 ss초 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, un = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, ln = {
  date: V({
    formats: on,
    defaultWidth: "full"
  }),
  time: V({
    formats: cn,
    defaultWidth: "full"
  }),
  dateTime: V({
    formats: un,
    defaultWidth: "full"
  })
}, dn = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: "P"
}, hn = (t, n, e, r) => dn[t], fn = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"]
}, mn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"]
}, gn = {
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
}, bn = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
}, wn = {
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
}, yn = {
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
}, vn = (t, n) => {
  const e = Number(t);
  switch (String(n == null ? void 0 : n.unit)) {
    case "minute":
    case "second":
      return String(e);
    case "date":
      return e + "일";
    default:
      return e + "번째";
  }
}, xn = {
  ordinalNumber: vn,
  era: _({
    values: fn,
    defaultWidth: "wide"
  }),
  quarter: _({
    values: mn,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: _({
    values: gn,
    defaultWidth: "wide"
  }),
  day: _({
    values: bn,
    defaultWidth: "wide"
  }),
  dayPeriod: _({
    values: wn,
    defaultWidth: "wide",
    formattingValues: yn,
    defaultFormattingWidth: "wide"
  })
}, pn = /^(\d+)(일|번째)?/i, En = /\d+/i, Mn = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
}, Sn = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
}, kn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
}, On = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Pn = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
}, Tn = {
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
}, Dn = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
}, _n = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
}, Wn = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
}, Nn = {
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
}, Rn = {
  ordinalNumber: Fe({
    matchPattern: pn,
    parsePattern: En,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: W({
    matchPatterns: Mn,
    defaultMatchWidth: "wide",
    parsePatterns: Sn,
    defaultParseWidth: "any"
  }),
  quarter: W({
    matchPatterns: kn,
    defaultMatchWidth: "wide",
    parsePatterns: On,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: W({
    matchPatterns: Pn,
    defaultMatchWidth: "wide",
    parsePatterns: Tn,
    defaultParseWidth: "any"
  }),
  day: W({
    matchPatterns: Dn,
    defaultMatchWidth: "wide",
    parsePatterns: _n,
    defaultParseWidth: "any"
  }),
  dayPeriod: W({
    matchPatterns: Wn,
    defaultMatchWidth: "any",
    parsePatterns: Nn,
    defaultParseWidth: "any"
  })
}, Cn = {
  code: "ko",
  formatDistance: sn,
  formatLong: ln,
  formatRelative: hn,
  localize: xn,
  match: Rn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function jn() {
  const { columnWidth: t, startDate: n, endDate: e } = C();
  if (!n || !e) return null;
  const r = Ye({ start: n, end: e }), a = [];
  let s = n;
  for (; s <= e; ) {
    const i = at(s), o = i > e ? e : i, u = le(o, s) + 1;
    a.push({
      date: s,
      width: u * t,
      label: Te(s, "yyyy년 M월", { locale: Cn })
    }), s = D(i, 1);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col bg-white text-xs text-gray-500 select-none", children: [
    /* @__PURE__ */ m.jsx("div", { className: "flex border-b border-gray-200 h-8 items-center", children: a.map((i, o) => /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "flex items-center justify-center border-r border-gray-200 truncate px-2 font-medium",
        style: { width: i.width, height: "100%" },
        children: i.label
      },
      o
    )) }),
    /* @__PURE__ */ m.jsx("div", { className: "flex h-8 items-center", children: r.map((i, o) => {
      const u = i.getDay() === 0 || i.getDay() === 6;
      return /* @__PURE__ */ m.jsx(
        "div",
        {
          className: `flex items-center justify-center border-r border-gray-100 shrink-0 ${u ? "text-red-400 bg-red-50/30" : ""}`,
          style: { width: t, height: "100%" },
          children: Te(i, "d")
        },
        o
      );
    }) })
  ] });
}
function zn() {
  const { startDate: t, endDate: n, columnWidth: e, tasks: r, rowHeight: a } = C();
  if (!t || !n) return null;
  const s = Ye({ start: t, end: n }), i = Math.max(r.length * a, 500);
  return /* @__PURE__ */ m.jsx("div", { className: "absolute inset-0 flex pointer-events-none z-0", style: { height: i }, children: s.map((o, u) => {
    const l = o.getDay() === 0 || o.getDay() === 6;
    return /* @__PURE__ */ m.jsx(
      "div",
      {
        className: `border-r border-gray-100 h-full shrink-0 ${l ? "bg-red-50/30" : ""}`,
        style: { width: e }
      },
      u
    );
  }) });
}
const Z = (t, n, e) => le(t, n) * e, Yn = (t, n, e) => le(n, t) * e, Fn = ({ task: t, virtualRow: n, startDate: e, columnWidth: r, onUpdate: a }) => {
  const [s, i] = ie(!1), [o, u] = ie(null), [l, d] = ie(null), h = U(0), g = U(0), b = l ?? Z(t.start_date, e, r), E = Yn(t.start_date, t.end_date, r);
  oe(() => {
    if (s || o) {
      const v = (x) => {
        const R = x.clientX - g.current;
        s && d(h.current + R);
      }, y = (x) => {
        const R = x.clientX - g.current, j = Math.round(R / r);
        if (s) {
          if (i(!1), d(null), j !== 0) {
            const I = D(t.start_date, j), T = D(t.end_date, j);
            a(t.id, I, T);
          }
        } else if (o) {
          const I = o;
          if (u(null), j !== 0) {
            let T = t.start_date, z = t.end_date;
            I === "right" ? (z = D(t.end_date, j), z <= T && (z = D(T, 1))) : I === "left" && (T = D(t.start_date, j), T >= z && (T = D(z, -1))), a(t.id, T, z);
          }
        }
      };
      return window.addEventListener("mousemove", v), window.addEventListener("mouseup", y), () => {
        window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", y);
      };
    }
  }, [s, o, r, t, a]);
  const k = (v) => {
    v.stopPropagation(), i(!0), h.current = Z(t.start_date, e, r), g.current = v.clientX;
  }, O = (v, y) => {
    v.stopPropagation(), u(y), g.current = v.clientX;
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "absolute top-0 left-0 h-full flex items-center pointer-events-auto group",
      style: {
        height: `${n.size}px`,
        transform: `translateY(${n.start}px)`,
        zIndex: s || o ? 50 : 10
      },
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: `h-3/5 rounded-full relative shadow-sm transition-colors cursor-pointer ${s ? "bg-blue-600 shadow-lg" : "bg-blue-500 hover:bg-blue-600"}`,
          style: {
            marginLeft: `${b}px`,
            width: `${E}px`
          },
          onMouseDown: k,
          children: [
            /* @__PURE__ */ m.jsx(
              "div",
              {
                className: "absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/10 rounded-l-full",
                onMouseDown: (v) => O(v, "left")
              }
            ),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                className: "absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/10 rounded-r-full",
                onMouseDown: (v) => O(v, "right")
              }
            ),
            /* @__PURE__ */ m.jsx("span", { className: "absolute left-full ml-2 text-xs text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity select-none", children: t.text })
          ]
        }
      )
    }
  );
};
function In({ virtualizer: t }) {
  const { getVisibleTasks: n, startDate: e, endDate: r, columnWidth: a, updateTask: s } = C(), i = n ? n() : [], o = t.getVirtualItems();
  return !e || !r ? null : /* @__PURE__ */ m.jsx("div", { className: "absolute top-0 left-0 w-full z-10 pointer-events-none", style: { height: `${t.getTotalSize()}px` }, children: o.map((u) => {
    const l = i[u.index];
    return l ? /* @__PURE__ */ m.jsx(
      Fn,
      {
        task: l,
        virtualRow: u,
        startDate: e,
        columnWidth: a,
        onUpdate: (d, h, g) => s(d, { start_date: h, end_date: g })
      },
      u.key
    ) : null;
  }) });
}
function $n() {
  const { getVisibleTasks: t, links: n, startDate: e, columnWidth: r, rowHeight: a } = C(), s = t ? t() : [];
  if (!e) return null;
  const i = (o) => {
    const u = s.findIndex((b) => String(b.id) === String(o));
    if (u === -1) return null;
    const l = s[u], d = Z(l.end_date, e, r), h = u * a + a / 2, g = Z(l.start_date, e, r);
    return { x: d, y: h, startX: g, index: u };
  };
  return /* @__PURE__ */ m.jsx("svg", { className: "absolute inset-0 pointer-events-none z-0 overflow-visible", style: { width: "100%", height: "100%" }, children: n.map((o) => {
    const u = i(o.source), l = i(o.target);
    if (!u || !l) return null;
    const d = u.x, h = u.y, g = l.startX, b = l.y, E = `M ${d} ${h} 
                      L ${d + 10} ${h} 
                      L ${d + 10} ${b} 
                      L ${g} ${b}`;
    return /* @__PURE__ */ m.jsxs("g", { children: [
      /* @__PURE__ */ m.jsx("path", { d: E, stroke: "#cbd5e1", strokeWidth: "2", fill: "none" }),
      /* @__PURE__ */ m.jsx("polygon", { points: `${g},${b} ${g - 4},${b - 4} ${g - 4},${b + 4}`, fill: "#cbd5e1" })
    ] }, o.id);
  }) });
}
function An({ containerRef: t, virtualizer: n }) {
  return /* @__PURE__ */ m.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "flex-shrink-0 z-20 bg-white border-b border-gray-200 sticky top-0", children: /* @__PURE__ */ m.jsx(jn, {}) }),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: t,
        className: "flex-1 relative overflow-auto",
        children: /* @__PURE__ */ m.jsxs("div", { className: "relative min-h-full", children: [
          /* @__PURE__ */ m.jsx(zn, {}),
          /* @__PURE__ */ m.jsx($n, {}),
          /* @__PURE__ */ m.jsx(In, { virtualizer: n })
        ] })
      }
    )
  ] });
}
function Ln({ virtualizer: t }) {
  const { getVisibleTasks: n } = C(), e = n ? n() : [], r = t.getVirtualItems();
  return /* @__PURE__ */ m.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ m.jsx("div", { className: "h-8 border-b border-gray-200 flex items-center px-4 font-semibold text-xs text-gray-700 bg-gray-50 shrink-0", children: "Task Name" }),
    /* @__PURE__ */ m.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ m.jsx(
      "div",
      {
        style: {
          height: `${t.getTotalSize()}px`,
          width: "100%",
          position: "relative"
        },
        children: r.map((a) => {
          const s = e[a.index];
          if (!s) return null;
          const o = (s.parent === 0 || s.parent === "0" ? 0 : 1) * 20 + 16;
          return /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: "absolute top-0 left-0 w-full flex items-center border-b border-gray-100 text-sm text-gray-700 truncate hover:bg-gray-50",
              style: {
                height: `${a.size}px`,
                transform: `translateY(${a.start}px)`,
                paddingLeft: `${o}px`
              },
              children: [
                s.type === "project" && /* @__PURE__ */ m.jsx(
                  "button",
                  {
                    className: "mr-1 p-0.5 hover:bg-gray-200 rounded cursor-pointer",
                    onClick: (u) => {
                      u.stopPropagation(), C.getState().toggleTask(s.id);
                    },
                    children: C.getState().expandedTaskIds.has(s.id) ? "▼" : "▶"
                  }
                ),
                s.text
              ]
            },
            a.key
          );
        })
      }
    ) })
  ] });
}
function L(t, n, e) {
  let r = e.initialDeps ?? [], a;
  function s() {
    var i, o, u, l;
    let d;
    e.key && ((i = e.debug) != null && i.call(e)) && (d = Date.now());
    const h = t();
    if (!(h.length !== r.length || h.some((E, k) => r[k] !== E)))
      return a;
    r = h;
    let b;
    if (e.key && ((o = e.debug) != null && o.call(e)) && (b = Date.now()), a = n(...h), e.key && ((u = e.debug) != null && u.call(e))) {
      const E = Math.round((Date.now() - d) * 100) / 100, k = Math.round((Date.now() - b) * 100) / 100, O = k / 16, v = (y, x) => {
        for (y = String(y); y.length < x; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${v(k, 5)} /${v(E, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * O, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (l = e == null ? void 0 : e.onChange) == null || l.call(e, a), a;
  }
  return s.updateDeps = (i) => {
    r = i;
  }, s;
}
function De(t, n) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Vn = (t, n) => Math.abs(t - n) < 1.01, Hn = (t, n, e) => {
  let r;
  return function(...a) {
    t.clearTimeout(r), r = t.setTimeout(() => n.apply(this, a), e);
  };
}, _e = (t) => {
  const { offsetWidth: n, offsetHeight: e } = t;
  return { width: n, height: e };
}, Xn = (t) => t, qn = (t) => {
  const n = Math.max(t.startIndex - t.overscan, 0), e = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let a = n; a <= e; a++)
    r.push(a);
  return r;
}, Bn = (t, n) => {
  const e = t.scrollElement;
  if (!e)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  const a = (i) => {
    const { width: o, height: u } = i;
    n({ width: Math.round(o), height: Math.round(u) });
  };
  if (a(_e(e)), !r.ResizeObserver)
    return () => {
    };
  const s = new r.ResizeObserver((i) => {
    const o = () => {
      const u = i[0];
      if (u != null && u.borderBoxSize) {
        const l = u.borderBoxSize[0];
        if (l) {
          a({ width: l.inlineSize, height: l.blockSize });
          return;
        }
      }
      a(_e(e));
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return s.observe(e, { box: "border-box" }), () => {
    s.unobserve(e);
  };
}, We = {
  passive: !0
}, Ne = typeof window > "u" ? !0 : "onscrollend" in window, Gn = (t, n) => {
  const e = t.scrollElement;
  if (!e)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let a = 0;
  const s = t.options.useScrollendEvent && Ne ? () => {
  } : Hn(
    r,
    () => {
      n(a, !1);
    },
    t.options.isScrollingResetDelay
  ), i = (d) => () => {
    const { horizontal: h, isRtl: g } = t.options;
    a = h ? e.scrollLeft * (g && -1 || 1) : e.scrollTop, s(), n(a, d);
  }, o = i(!0), u = i(!1);
  u(), e.addEventListener("scroll", o, We);
  const l = t.options.useScrollendEvent && Ne;
  return l && e.addEventListener("scrollend", u, We), () => {
    e.removeEventListener("scroll", o), l && e.removeEventListener("scrollend", u);
  };
}, Qn = (t, n, e) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return t[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Un = (t, {
  adjustments: n = 0,
  behavior: e
}, r) => {
  var a, s;
  const i = t + n;
  (s = (a = r.scrollElement) == null ? void 0 : a.scrollTo) == null || s.call(a, {
    [r.options.horizontal ? "left" : "top"]: i,
    behavior: e
  });
};
class Jn {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const r = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((a) => {
        a.forEach((s) => {
          const i = () => {
            this._measureElement(s.target, s);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var a;
          (a = r()) == null || a.disconnect(), e = null;
        },
        observe: (a) => {
          var s;
          return (s = r()) == null ? void 0 : s.observe(a, { box: "border-box" });
        },
        unobserve: (a) => {
          var s;
          return (s = r()) == null ? void 0 : s.unobserve(a);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([r, a]) => {
        typeof a > "u" && delete e[r];
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
        rangeExtractor: qn,
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
        ...e
      };
    }, this.notify = (e) => {
      var r, a;
      (a = (r = this.options).onChange) == null || a.call(r, this, e);
    }, this.maybeNotify = L(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
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
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((a) => {
          this.observer.observe(a);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (a) => {
            this.scrollRect = a, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (a, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < a ? "forward" : "backward" : null, this.scrollOffset = a, this.isScrolling = s, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, r) => {
      const a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let i = r - 1; i >= 0; i--) {
        const o = e[i];
        if (a.has(o.lane))
          continue;
        const u = s.get(
          o.lane
        );
        if (u == null || o.end > u.end ? s.set(o.lane, o) : o.end < u.end && a.set(o.lane, !0), a.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((i, o) => i.end === o.end ? i.index - o.index : i.end - o.end)[0] : void 0;
    }, this.getMeasurementOptions = L(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, r, a, s, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: r,
        scrollMargin: a,
        getItemKey: s,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = L(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: r, scrollMargin: a, getItemKey: s, enabled: i }, o) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const l = this.measurementsCache.slice(0, u);
        for (let d = u; d < e; d++) {
          const h = s(d), g = this.options.lanes === 1 ? l[d - 1] : this.getFurthestMeasurement(l, d), b = g ? g.end + this.options.gap : r + a, E = o.get(h), k = typeof E == "number" ? E : this.options.estimateSize(d), O = b + k, v = g ? g.lane : d % this.options.lanes;
          l[d] = {
            index: d,
            start: b,
            size: k,
            end: O,
            key: h,
            lane: v
          };
        }
        return this.measurementsCache = l, l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = L(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, r, a, s) => this.range = e.length > 0 && r > 0 ? Kn({
        measurements: e,
        outerSize: r,
        scrollOffset: a,
        lanes: s
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = L(
      () => {
        let e = null, r = null;
        const a = this.calculateRange();
        return a && (e = a.startIndex, r = a.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          r
        ];
      },
      (e, r, a, s, i) => s === null || i === null ? [] : e({
        startIndex: s,
        endIndex: i,
        overscan: r,
        count: a
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const r = this.options.indexAttribute, a = e.getAttribute(r);
      return a ? parseInt(a, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, r) => {
      const a = this.indexFromElement(e), s = this.measurementsCache[a];
      if (!s)
        return;
      const i = s.key, o = this.elementsCache.get(i);
      o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(i, e)), e.isConnected && this.resizeItem(a, this.options.measureElement(e, r, this));
    }, this.resizeItem = (e, r) => {
      const a = this.measurementsCache[e];
      if (!a)
        return;
      const s = this.itemSizeCache.get(a.key) ?? a.size, i = r - s;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(a, i, this) : a.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(a.index), this.itemSizeCache = new Map(this.itemSizeCache.set(a.key, r)), this.notify(!1));
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((r, a) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(a));
        });
        return;
      }
      this._measureElement(e, void 0);
    }, this.getVirtualItems = L(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, r) => {
        const a = [];
        for (let s = 0, i = e.length; s < i; s++) {
          const o = e[s], u = r[o];
          a.push(u);
        }
        return a;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return De(
          r[Ae(
            0,
            r.length - 1,
            (a) => De(r[a]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, r, a = 0) => {
      const s = this.getSize(), i = this.getScrollOffset();
      r === "auto" && (r = e >= i + s ? "end" : "start"), r === "center" ? e += (a - s) / 2 : r === "end" && (e -= s);
      const o = this.getTotalSize() + this.options.scrollMargin - s;
      return Math.max(Math.min(o, e), 0);
    }, this.getOffsetForIndex = (e, r = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const a = this.measurementsCache[e];
      if (!a)
        return;
      const s = this.getSize(), i = this.getScrollOffset();
      if (r === "auto")
        if (a.end >= i + s - this.options.scrollPaddingEnd)
          r = "end";
        else if (a.start <= i + this.options.scrollPaddingStart)
          r = "start";
        else
          return [i, r];
      const o = r === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, r, a.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (e, { align: r = "start", behavior: a } = {}) => {
      a === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, r), {
        adjustments: void 0,
        behavior: a
      });
    }, this.scrollToIndex = (e, { align: r = "auto", behavior: a } = {}) => {
      a === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), e = Math.max(0, Math.min(e, this.options.count - 1));
      let s = 0;
      const i = 10, o = (l) => {
        if (!this.targetWindow) return;
        const d = this.getOffsetForIndex(e, l);
        if (!d) {
          console.warn("Failed to get offset for index:", e);
          return;
        }
        const [h, g] = d;
        this._scrollToOffset(h, { adjustments: void 0, behavior: a }), this.targetWindow.requestAnimationFrame(() => {
          const b = this.getScrollOffset(), E = this.getOffsetForIndex(e, g);
          if (!E) {
            console.warn("Failed to get offset for index:", e);
            return;
          }
          Vn(E[0], b) || u(g);
        });
      }, u = (l) => {
        this.targetWindow && (s++, s < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", s, i), this.targetWindow.requestAnimationFrame(() => o(l))) : console.warn(
          `Failed to scroll to index ${e} after ${i} attempts.`
        ));
      };
      o(r);
    }, this.scrollBy = (e, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var e;
      const r = this.getMeasurements();
      let a;
      if (r.length === 0)
        a = this.options.paddingStart;
      else if (this.options.lanes === 1)
        a = ((e = r[r.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const s = Array(this.options.lanes).fill(null);
        let i = r.length - 1;
        for (; i >= 0 && s.some((o) => o === null); ) {
          const o = r[i];
          s[o.lane] === null && (s[o.lane] = o.end), i--;
        }
        a = Math.max(...s.filter((o) => o !== null));
      }
      return Math.max(
        a - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e, {
      adjustments: r,
      behavior: a
    }) => {
      this.options.scrollToFn(e, { behavior: a, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const Ae = (t, n, e, r) => {
  for (; t <= n; ) {
    const a = (t + n) / 2 | 0, s = e(a);
    if (s < r)
      t = a + 1;
    else if (s > r)
      n = a - 1;
    else
      return a;
  }
  return t > 0 ? t - 1 : 0;
};
function Kn({
  measurements: t,
  outerSize: n,
  scrollOffset: e,
  lanes: r
}) {
  const a = t.length - 1, s = (u) => t[u].start;
  if (t.length <= r)
    return {
      startIndex: 0,
      endIndex: a
    };
  let i = Ae(
    0,
    a,
    s,
    e
  ), o = i;
  if (r === 1)
    for (; o < a && t[o].end < e + n; )
      o++;
  else if (r > 1) {
    const u = Array(r).fill(0);
    for (; o < a && u.some((d) => d < e + n); ) {
      const d = t[o];
      u[d.lane] = d.end, o++;
    }
    const l = Array(r).fill(e + n);
    for (; i >= 0 && l.some((d) => d >= e); ) {
      const d = t[i];
      l[d.lane] = d.start, i--;
    }
    i = Math.max(0, i - i % r), o = Math.min(a, o + (r - 1 - o % r));
  }
  return { startIndex: i, endIndex: o };
}
const Re = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
function Zn(t) {
  const n = Q.useReducer(() => ({}), {})[1], e = {
    ...t,
    onChange: (a, s) => {
      var i;
      s ? qe(n) : n(), (i = t.onChange) == null || i.call(t, a, s);
    }
  }, [r] = Q.useState(
    () => new Jn(e)
  );
  return r.setOptions(e), Re(() => r._didMount(), []), Re(() => r._willUpdate()), r;
}
function er(t) {
  return Zn({
    observeElementRect: Bn,
    observeElementOffset: Gn,
    scrollToFn: Un,
    ...t
  });
}
function tr(t) {
  const { getVisibleTasks: n, rowHeight: e } = C(), r = n ? n() : [];
  return er({
    count: r.length,
    getScrollElement: () => t.current,
    estimateSize: () => e,
    overscan: 5
  });
}
function ar({ tasks: t, links: n = [] }) {
  const { setTasks: e, setLinks: r } = C(), a = U(null), s = U(null);
  oe(() => {
    e(t), r(n);
  }, [t, n, e, r]);
  const i = tr(s);
  return oe(() => {
    const o = s.current, u = a.current;
    if (!o || !u) return;
    const l = () => {
      u.scrollTop = o.scrollTop;
    };
    return o.addEventListener("scroll", l), () => o.removeEventListener("scroll", l);
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "flex h-full w-full border border-gray-200 rounded-lg overflow-hidden bg-white", children: [
    /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: a,
        className: "w-[300px] shrink-0 border-r border-gray-200 bg-white z-10 overflow-hidden",
        children: /* @__PURE__ */ m.jsx(Ln, { virtualizer: i })
      }
    ),
    /* @__PURE__ */ m.jsx("div", { className: "flex-1 relative overflow-hidden", children: /* @__PURE__ */ m.jsx(An, { containerRef: s, virtualizer: i }) })
  ] });
}
export {
  ar as GanttRoot,
  C as useGanttStore
};
