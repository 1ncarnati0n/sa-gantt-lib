"use client";
import * as yt from "react";
import Pe, { forwardRef as wt, createElement as Mt, useState as $, useRef as ae, useEffect as ie, useCallback as M, useMemo as pe } from "react";
import dn, { flushSync as jn } from "react-dom";
var St = { exports: {} }, nt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function En() {
  if (Ot) return nt;
  Ot = 1;
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
  return nt.Fragment = n, nt.jsx = t, nt.jsxs = t, nt;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Nn() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === V ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case E:
          return "Fragment";
        case P:
          return "Profiler";
        case S:
          return "StrictMode";
        case A:
          return "Suspense";
        case C:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case y:
            return "Portal";
          case T:
            return u.displayName || "Context";
          case z:
            return (u._context.displayName || "Context") + ".Consumer";
          case G:
            var k = u.render;
            return u = u.displayName, u || (u = k.displayName || k.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case R:
            return k = u.displayName || null, k !== null ? k : e(u.type) || "Memo";
          case X:
            k = u._payload, u = u._init;
            try {
              return e(u(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var O = k.error, I = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return O.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), n(u);
      }
    }
    function r(u) {
      if (u === E) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === X)
        return "<...>";
      try {
        var k = e(u);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = Q.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(u) {
      if (H.call(u, "key")) {
        var k = Object.getOwnPropertyDescriptor(u, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, k) {
      function O() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: O,
        configurable: !0
      });
    }
    function m() {
      var u = e(this.type);
      return U[u] || (U[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function d(u, k, O, I, ce, se) {
      var q = O.ref;
      return u = {
        $$typeof: g,
        type: u,
        key: k,
        props: O,
        _owner: I
      }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: m
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
        value: ce
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function f(u, k, O, I, ce, se) {
      var q = k.children;
      if (q !== void 0)
        if (I)
          if (J(q)) {
            for (I = 0; I < q.length; I++)
              p(q[I]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(q);
      if (H.call(k, "key")) {
        q = e(u);
        var oe = Object.keys(k).filter(function(Ee) {
          return Ee !== "key";
        });
        I = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", L[q + I] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          q,
          oe,
          q
        ), L[q + I] = !0);
      }
      if (q = null, O !== void 0 && (t(O), q = "" + O), o(k) && (t(k.key), q = "" + k.key), "key" in k) {
        O = {};
        for (var xe in k)
          xe !== "key" && (O[xe] = k[xe]);
      } else O = k;
      return q && l(
        O,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), d(
        u,
        q,
        O,
        s(),
        ce,
        se
      );
    }
    function p(u) {
      x(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === X && (u._payload.status === "fulfilled" ? x(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function x(u) {
      return typeof u == "object" && u !== null && u.$$typeof === g;
    }
    var w = Pe, g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), T = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), Q = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, J = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var ue, U = {}, D = w.react_stack_bottom_frame.bind(
      w,
      i
    )(), v = ne(r(i)), L = {};
    rt.Fragment = E, rt.jsx = function(u, k, O) {
      var I = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return f(
        u,
        k,
        O,
        !1,
        I ? Error("react-stack-top-frame") : D,
        I ? ne(r(u)) : v
      );
    }, rt.jsxs = function(u, k, O) {
      var I = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return f(
        u,
        k,
        O,
        !0,
        I ? Error("react-stack-top-frame") : D,
        I ? ne(r(u)) : v
      );
    };
  }()), rt;
}
process.env.NODE_ENV === "production" ? St.exports = En() : St.exports = Nn();
var a = St.exports;
const un = 6048e5, Mn = 864e5, Ct = Symbol.for("constructDateFrom");
function ke(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && Ct in e ? e[Ct](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ee(e, n) {
  return ke(n || e, e);
}
function B(e, n, t) {
  const r = ee(e, t == null ? void 0 : t.in);
  return isNaN(n) ? ke(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function hn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 6;
}
function fn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 0;
}
let Sn = {};
function lt() {
  return Sn;
}
function Ae(e, n) {
  var l, m, d, f;
  const t = lt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((f = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = ee(e, n == null ? void 0 : n.in), i = s.getDay(), o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function bt(e, n) {
  return Ae(e, { ...n, weekStartsOn: 1 });
}
function mn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = ke(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const i = bt(s), o = ke(t, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const l = bt(o);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function _t(e) {
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
function ct(e, ...n) {
  const t = ke.bind(
    null,
    e || n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function it(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function gn(e, n, t) {
  const [r, s] = ct(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = it(r), o = it(s), l = +i - _t(i), m = +o - _t(o);
  return Math.round((l - m) / Mn);
}
function Wn(e, n) {
  const t = mn(e, n), r = ke(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), bt(r);
}
function Tn(e, n, t) {
  const [r, s] = ct(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +it(r) == +it(s);
}
function On(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Pn(e) {
  return !(!On(e) && typeof e != "number" || isNaN(+ee(e)));
}
function Wt(e, n, t) {
  const [r, s] = ct(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = Rt(r, s), o = Math.abs(
    gn(r, s)
  );
  r.setDate(r.getDate() - i * o);
  const l = +(Rt(r, s) === -i), m = i * (o - l);
  return m === 0 ? 0 : m;
}
function Rt(e, n) {
  const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Cn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function _n(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Rn = {
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
}, In = (e, n, t) => {
  let r;
  const s = Rn[e];
  return typeof s == "string" ? r = s : n === 1 ? r = s.one : r = s.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Et(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const An = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, zn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ln = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fn = {
  date: Et({
    formats: An,
    defaultWidth: "full"
  }),
  time: Et({
    formats: zn,
    defaultWidth: "full"
  }),
  dateTime: Et({
    formats: Ln,
    defaultWidth: "full"
  })
}, Hn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Yn = (e, n, t, r) => Hn[e];
function st(e) {
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
const $n = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Gn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xn = {
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
}, Vn = {
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
}, Bn = {
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
}, qn = {
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
}, Kn = (e, n) => {
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
}, Qn = {
  ordinalNumber: Kn,
  era: st({
    values: $n,
    defaultWidth: "wide"
  }),
  quarter: st({
    values: Gn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: st({
    values: Xn,
    defaultWidth: "wide"
  }),
  day: st({
    values: Vn,
    defaultWidth: "wide"
  }),
  dayPeriod: st({
    values: Bn,
    defaultWidth: "wide",
    formattingValues: qn,
    defaultFormattingWidth: "wide"
  })
};
function at(e) {
  return (n, t = {}) => {
    const r = t.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(s);
    if (!i)
      return null;
    const o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(l) ? Jn(l, (p) => p.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Un(l, (p) => p.test(o))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(m) : m, d = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(d)
    ) : d;
    const f = n.slice(o.length);
    return { value: d, rest: f };
  };
}
function Un(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Jn(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Zn(e) {
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
const er = /^(\d+)(th|st|nd|rd)?/i, tr = /\d+/i, nr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, rr = {
  any: [/^b/i, /^(a|c)/i]
}, sr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ar = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ir = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, or = {
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
}, lr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, cr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ur = {
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
}, hr = {
  ordinalNumber: Zn({
    matchPattern: er,
    parsePattern: tr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: at({
    matchPatterns: nr,
    defaultMatchWidth: "wide",
    parsePatterns: rr,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ar,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: ir,
    defaultMatchWidth: "wide",
    parsePatterns: or,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: lr,
    defaultMatchWidth: "wide",
    parsePatterns: cr,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: dr,
    defaultMatchWidth: "any",
    parsePatterns: ur,
    defaultParseWidth: "any"
  })
}, fr = {
  code: "en-US",
  formatDistance: In,
  formatLong: Fn,
  formatRelative: Yn,
  localize: Qn,
  match: hr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return gn(t, _n(t)) + 1;
}
function gr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +bt(t) - +Wn(t);
  return Math.round(r / un) + 1;
}
function xn(e, n) {
  var f, p, x, w;
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = lt(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((w = (x = s.locale) == null ? void 0 : x.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = ke((n == null ? void 0 : n.in) || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = Ae(o, n), m = ke((n == null ? void 0 : n.in) || e, 0);
  m.setFullYear(r, 0, i), m.setHours(0, 0, 0, 0);
  const d = Ae(m, n);
  return +t >= +l ? r + 1 : +t >= +d ? r : r - 1;
}
function xr(e, n) {
  var l, m, d, f;
  const t = lt(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = xn(e, n), i = ke((n == null ? void 0 : n.in) || e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), Ae(i, n);
}
function yr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +Ae(t, n) - +xr(t, n);
  return Math.round(r / un) + 1;
}
function F(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const Te = {
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
}, Ge = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, It = {
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
    return Te.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const s = xn(e, r), i = s > 0 ? s : 1 - s;
    if (n === "YY") {
      const o = i % 100;
      return F(o, 2);
    }
    return n === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : F(i, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = mn(e);
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
        return Te.M(e, n);
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
    const s = yr(e, r);
    return n === "wo" ? t.ordinalNumber(s, { unit: "week" }) : F(s, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = gr(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : F(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Te.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = mr(e);
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
    switch (r === 12 ? s = Ge.noon : r === 0 ? s = Ge.midnight : s = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? s = Ge.evening : r >= 12 ? s = Ge.afternoon : r >= 4 ? s = Ge.morning : s = Ge.night, n) {
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
    return Te.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Te.H(e, n);
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
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Te.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Te.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Te.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return zt(r);
      case "XXXX":
      case "XX":
        return Ie(r);
      case "XXXXX":
      case "XXX":
      default:
        return Ie(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return zt(r);
      case "xxxx":
      case "xx":
        return Ie(r);
      case "xxxxx":
      case "xxx":
      default:
        return Ie(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + At(r, ":");
      case "OOOO":
      default:
        return "GMT" + Ie(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + At(r, ":");
      case "zzzz":
      default:
        return "GMT" + Ie(r, ":");
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
function At(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(s) : t + String(s) + n + F(i, 2);
}
function zt(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + F(Math.abs(e) / 60, 2) : Ie(e, n);
}
function Ie(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = F(Math.trunc(r / 60), 2), i = F(r % 60, 2);
  return t + s + n + i;
}
const Lt = (e, n) => {
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
}, yn = (e, n) => {
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
}, br = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], s = t[2];
  if (!s)
    return Lt(e, n);
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
  return i.replace("{{date}}", Lt(r, n)).replace("{{time}}", yn(s, n));
}, pr = {
  p: yn,
  P: br
}, wr = /^D+$/, vr = /^Y+$/, Dr = ["D", "DD", "YY", "YYYY"];
function kr(e) {
  return wr.test(e);
}
function jr(e) {
  return vr.test(e);
}
function Er(e, n, t) {
  const r = Nr(e, n, t);
  if (console.warn(r), Dr.includes(e)) throw new RangeError(r);
}
function Nr(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Mr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wr = /^'([^]*?)'?$/, Tr = /''/g, Or = /[a-zA-Z]/;
function ge(e, n, t) {
  var f, p, x, w;
  const r = lt(), s = r.locale ?? fr, i = r.firstWeekContainsDate ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = r.weekStartsOn ?? ((w = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : w.weekStartsOn) ?? 0, l = ee(e, t == null ? void 0 : t.in);
  if (!Pn(l))
    throw new RangeError("Invalid time value");
  let m = n.match(Sr).map((g) => {
    const y = g[0];
    if (y === "p" || y === "P") {
      const E = pr[y];
      return E(g, s.formatLong);
    }
    return g;
  }).join("").match(Mr).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const y = g[0];
    if (y === "'")
      return { isToken: !1, value: Pr(g) };
    if (It[y])
      return { isToken: !0, value: g };
    if (y.match(Or))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: g };
  });
  s.localize.preprocessor && (m = s.localize.preprocessor(l, m));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: s
  };
  return m.map((g) => {
    if (!g.isToken) return g.value;
    const y = g.value;
    (jr(y) || kr(y)) && Er(y, n, String(e));
    const E = It[y[0]];
    return E(l, y, s.localize, d);
  }).join("");
}
function Pr(e) {
  const n = e.match(Wr);
  return n ? n[1].replace(Tr, "'") : e;
}
function Cr(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDate();
}
function vt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay();
}
function Ft(e, n) {
  var m, d, f, p;
  const t = lt(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((d = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : d.weekStartsOn) ?? t.weekStartsOn ?? ((p = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = Cr(ee(e, n == null ? void 0 : n.in));
  if (isNaN(s)) return NaN;
  const i = vt(Cn(e, n));
  let o = r - i;
  o <= 0 && (o += 7);
  const l = s - o;
  return Math.ceil(l / 7) + 1;
}
function Nt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getFullYear();
}
function _r(e, n, t) {
  const [r, s] = ct(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Ae(r, t) == +Ae(s, t);
}
function Rr(e, n, t) {
  const [r, s] = ct(
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
const Ir = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ar = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ht = (e) => {
  const n = Ar(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, bn = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), zr = (e) => {
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
var Lr = {
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
const Fr = wt(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: o,
    ...l
  }, m) => Mt(
    "svg",
    {
      ref: m,
      ...Lr,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: bn("lucide", s),
      ...!i && !zr(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([d, f]) => Mt(d, f)),
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
const je = (e, n) => {
  const t = wt(
    ({ className: r, ...s }, i) => Mt(Fr, {
      ref: i,
      iconNode: n,
      className: bn(
        `lucide-${Ir(Ht(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return t.displayName = Ht(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Yr = je("calendar", Hr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pn = je("check", $r);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Yt = je("chevron-down", Gr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $t = je("chevron-right", Xr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
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
], Br = je("file-text", Vr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Gt = je("grip-vertical", qr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Qr = je("trash-2", Kr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Jr = je("type", Ur);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Tt = je("x", Zr), Oe = {
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
}, De = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, pt = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, es = ({ taskNames: e, onConfirm: n, onCancel: t }) => dn.createPortal(
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
), Xt = ({
  x: e,
  y: n,
  taskId: t,
  selectedTaskIds: r,
  tasks: s,
  onTaskGroup: i,
  onTaskUngroup: o,
  onTaskDelete: l,
  onStartRename: m,
  onClose: d,
  onDeselect: f
}) => {
  var G;
  const [p, x] = $(!1), w = Array.from(r).some((A) => {
    const C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  }), g = () => {
    r.size >= 1 && !w && i && (i(Array.from(r)), d());
  }, y = () => {
    if (r.size === 1 && o) {
      const A = Array.from(r)[0], C = s.find((R) => R.id === A);
      (C == null ? void 0 : C.type) === "GROUP" && (o(A), d());
    }
  }, E = () => {
    x(!0);
  }, S = () => {
    l && (r.size > 0 ? Array.from(r) : [t]).forEach((C) => {
      l(C);
    }), x(!1), f(), d();
  }, P = () => {
    x(!1);
  }, z = r.size === 1 && (() => {
    const A = Array.from(r)[0], C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  })(), T = r.size > 0 ? Array.from(r).map((A) => {
    var C;
    return ((C = s.find((R) => R.id === A)) == null ? void 0 : C.name) || A;
  }) : [((G = s.find((A) => A.id === t)) == null ? void 0 : G.name) || t];
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: n },
      onClick: (A) => A.stopPropagation(),
      children: [
        r.size >= 1 && !w && i && /* @__PURE__ */ a.jsxs(
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
        z && o && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: y,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
              "그룹 해제"
            ]
          }
        ),
        r.size === 1 && m && /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: () => {
              const A = Array.from(r)[0];
              m(A), d();
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
              onClick: E,
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
              f(), d();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ a.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        ),
        p && /* @__PURE__ */ a.jsx(
          es,
          {
            taskNames: T,
            onConfirm: S,
            onCancel: P
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Vt } = De, gt = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, ts = ({
  columns: e,
  tasks: n,
  activeCPId: t,
  onTaskCreate: r,
  onCancel: s,
  isVirtualized: i = !1,
  virtualRowIndex: o
}) => {
  const [l, m] = Pe.useState(gt), d = ae(null);
  ie(() => {
    m(gt), setTimeout(() => {
      var g;
      (g = d.current) == null || g.focus();
    }, 0);
  }, []);
  const f = M(() => {
    m(gt), s();
  }, [s]), p = M(async () => {
    if (!(!l.name.trim() || !r || !t))
      try {
        const g = n[n.length - 1], y = g ? B(g.endDate, 1) : /* @__PURE__ */ new Date(), E = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, S = B(y, Math.max(E - 1, 0)), P = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: y,
          endDate: S,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await r(P), m(gt), s();
      } catch (g) {
        console.error("Failed to create task:", g), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, r, t, n, s]), x = M((g) => {
    g.key === "Enter" ? (g.preventDefault(), p()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [p, f]), w = i && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Vt}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Vt,
        ...w
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
                ref: d,
                type: "text",
                placeholder: "공정명...",
                className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.name,
                onChange: (g) => m((y) => ({ ...y, name: g.target.value })),
                onKeyDown: x
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
                  const y = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(y) || 0;
                  m((S) => ({ ...S, indirectWorkDaysPre: E }));
                },
                onKeyDown: x,
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
                  const y = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(y) || 0;
                  m((S) => ({ ...S, netWorkDays: E }));
                },
                onKeyDown: x,
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
                  const y = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(y) || 0;
                  m((S) => ({ ...S, indirectWorkDaysPost: E }));
                },
                onKeyDown: x,
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
                  children: /* @__PURE__ */ a.jsx(pn, { size: 14 })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: f,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ a.jsx(Tt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Bt } = De, xt = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, ns = ({
  columns: e,
  tasks: n,
  onTaskCreate: t,
  onCancel: r,
  isVirtualized: s = !1,
  virtualRowIndex: i,
  dragHandleWidth: o = 0
}) => {
  const [l, m] = Pe.useState(xt), d = ae(null);
  ie(() => {
    m(xt), setTimeout(() => {
      var g;
      (g = d.current) == null || g.focus();
    }, 0);
  }, []);
  const f = M(() => {
    m(xt), r();
  }, [r]), p = M(async () => {
    if (!(!l.name.trim() || !t))
      try {
        const g = n.filter((T) => T.type === "CP" && !T.parentId), y = g[g.length - 1], E = y ? B(y.endDate, 1) : /* @__PURE__ */ new Date(), S = l.workDaysTotal + l.nonWorkDaysTotal, P = B(E, Math.max(S - 1, 0)), z = {
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
        await t(z), m(xt), r();
      } catch (g) {
        console.error("Failed to create CP:", g), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, t, n, r]), x = M((g) => {
    g.key === "Enter" ? (g.preventDefault(), p()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [p, f]), w = s && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Bt}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Bt,
        ...w
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
                  ref: d,
                  type: "text",
                  placeholder: "CP명...",
                  className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: l.name,
                  onChange: (g) => m((y) => ({ ...y, name: g.target.value })),
                  onKeyDown: x
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
                  const y = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(y) || 0;
                  m((S) => ({ ...S, workDaysTotal: E }));
                },
                onKeyDown: x,
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
                  const y = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(y) || 0;
                  m((S) => ({ ...S, nonWorkDaysTotal: E }));
                },
                onKeyDown: x,
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
              children: /* @__PURE__ */ a.jsx(pn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: f,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ a.jsx(Tt, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: Xe, HEADER_HEIGHT: qt, MILESTONE_LANE_HEIGHT: Kt } = De, Qt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], Ut = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], wn = wt(
  ({ tasks: e, allTasks: n, viewMode: t, expandedIds: r, onToggle: s, onTaskClick: i, onTaskUpdate: o, onTaskCreate: l, onTaskReorder: m, activeCPId: d, virtualRows: f, totalHeight: p, onTotalWidthChange: x, onTaskGroup: w, onTaskUngroup: g, onTaskDelete: y, onTaskMove: E, isAddingTask: S = !1, onCancelAddTask: P, isAddingCP: z = !1, onCancelAddCP: T }, G) => {
    const A = f && f.length > 0, [C, R] = $(null), [X, re] = $(null), [V, Q] = $(null), [H, J] = $(/* @__PURE__ */ new Set()), [ne, ue] = $(null), [U, D] = $(null), [v, L] = $(null), [u, k] = $(""), O = ae(null), [I, ce] = $(
      Qt.map((h) => h.width)
    ), [se, q] = $(
      Ut.map((h) => h.width)
    ), [oe, xe] = $(null), Ee = ae(!1), we = t === "MASTER" ? Qt : Ut, ze = t === "MASTER" ? I : se, Le = t === "MASTER" ? ce : q, K = pe(
      () => we.map((h, c) => ({
        ...h,
        width: ze[c] ?? h.width
      })),
      [we, ze]
    ), Fe = m ? 24 : 0, Ne = K.reduce((h, c) => h + c.width, 0) + Fe;
    ie(() => {
      x && x(Ne);
    }, [Ne, x]);
    const Qe = M((h, c) => {
      if (h.detail >= 2) return;
      h.preventDefault(), h.stopPropagation(), Ee.current = !0, xe(c);
      const b = h.clientX, W = ze[c], Y = we[c].minWidth, te = (Z) => {
        if (!Ee.current) return;
        const he = Z.clientX - b, fe = Math.max(Y, W + he);
        Le((j) => {
          const ye = [...j];
          return ye[c] = fe, ye;
        });
      }, _ = () => {
        Ee.current = !1, xe(null), document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", _);
      };
      document.addEventListener("mousemove", te), document.addEventListener("mouseup", _);
    }, [ze, we, Le]), Ce = M((h, c = 12, b = "normal") => {
      const Y = document.createElement("canvas").getContext("2d");
      return Y ? (Y.font = `${b} ${c}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, Y.measureText(h).width) : 0;
    }, []), He = M((h) => {
      const c = we[h].minWidth, b = h === 0, W = b ? 48 : 20, Y = we[h].label;
      let te = Ce(Y, 12, "500") + 16;
      return e.forEach((_) => {
        let Z = "", he = 0;
        if (t === "MASTER") {
          const ve = _.type === "GROUP";
          switch (b && _.parentId && (he = 20), h) {
            case 0:
              Z = _.name;
              break;
            case 1:
              Z = ve ? "-" : _.cp ? `${_.cp.workDaysTotal + _.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              Z = ve ? "-" : _.cp ? `${_.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              Z = ve ? "-" : _.cp ? `${_.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (h) {
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
              Z = ge(_.startDate, "yyyy-MM-dd");
              break;
            case 5:
              Z = ge(_.endDate, "yyyy-MM-dd");
              break;
          }
        const ye = Ce(Z, b ? 14 : 12, b ? "500" : "normal") + W + he;
        te = Math.max(te, ye);
      }), Math.max(c, Math.ceil(te));
    }, [e, t, we, Ce]), Dt = M((h, c) => {
      h.preventDefault(), h.stopPropagation(), Ee.current = !1, xe(null);
      const b = He(c);
      Le((W) => {
        const Y = [...W];
        return Y[c] = b, Y;
      });
    }, [He, Le]), Ue = M((h, c, b) => {
      if (!h.task || !o) return;
      const W = {
        ...h,
        task: {
          ...h.task,
          [c]: b
        }
      };
      o(W);
    }, [o]), Me = M((h, c) => {
      h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("text/plain", c), R(c);
      const b = document.createElement("div");
      b.style.opacity = "0", document.body.appendChild(b), h.dataTransfer.setDragImage(b, 0, 0), setTimeout(() => document.body.removeChild(b), 0);
    }, []), dt = M((h, c, b) => {
      if (h.preventDefault(), h.dataTransfer.dropEffect = "move", c === C) return;
      const W = h.currentTarget.getBoundingClientRect(), Y = h.clientY - W.top, te = W.height;
      let _;
      b ? Y < te / 3 ? _ = "before" : Y < te * 2 / 3 ? _ = "into" : _ = "after" : _ = Y < te / 2 ? "before" : "after", re(c), Q(_);
    }, [C]), ut = M(() => {
      re(null), Q(null);
    }, []), Je = M((h, c) => {
      if (h.preventDefault(), !C || C === c || !V) {
        R(null), re(null), Q(null);
        return;
      }
      if (E)
        E(C, c, V);
      else if (m && V !== "into") {
        const b = e.findIndex((Y) => Y.id === c), W = V === "after" ? b + 1 : b;
        m(C, W);
      }
      R(null), re(null), Q(null);
    }, [C, V, E, m, e]), Ye = M(() => {
      R(null), re(null), Q(null);
    }, []), Ze = M((h, c, b) => {
      if (C) return;
      const W = h.ctrlKey || h.metaKey, Y = h.shiftKey;
      if (W)
        J((te) => {
          const _ = new Set(te);
          return _.has(c.id) ? _.delete(c.id) : _.add(c.id), _;
        }), ue(b);
      else if (Y && ne !== null) {
        const te = Math.min(ne, b), _ = Math.max(ne, b);
        J((Z) => {
          const he = new Set(Z);
          for (let fe = te; fe <= _; fe++)
            e[fe] && he.add(e[fe].id);
          return he;
        });
      } else
        J(/* @__PURE__ */ new Set([c.id])), ue(b);
    }, [C, ne, e]), Se = M((h, c) => {
      h.preventDefault(), H.has(c.id) || J(/* @__PURE__ */ new Set([c.id])), D({
        x: h.clientX,
        y: h.clientY,
        taskId: c.id
      });
    }, [H]);
    ie(() => {
      const h = () => {
        D(null);
      };
      if (U)
        return document.addEventListener("click", h), () => document.removeEventListener("click", h);
    }, [U]), ie(() => {
      const h = (c) => {
        c.key === "Escape" && (J(/* @__PURE__ */ new Set()), D(null), L(null));
      };
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, []);
    const _e = M((h) => {
      L(h.id), k(h.name), setTimeout(() => {
        var c, b;
        (c = O.current) == null || c.focus(), (b = O.current) == null || b.select();
      }, 0);
    }, []), et = M((h) => {
      const c = e.find((b) => b.id === h);
      c && o && _e(c);
    }, [e, o, _e]), We = M(() => {
      if (!v || !o) {
        L(null);
        return;
      }
      const h = e.find((c) => c.id === v);
      h && u.trim() && u !== h.name && o({
        ...h,
        name: u.trim()
      }), L(null), k("");
    }, [v, u, e, o]), ht = M(() => {
      L(null), k("");
    }, []), ft = M((h) => {
      h.key === "Enter" ? (h.preventDefault(), We()) : h.key === "Escape" && (h.preventDefault(), ht());
    }, [We, ht]), kt = M((h) => {
      if (!d || h.parentId === d) return 0;
      let c = 0, b = h.parentId;
      for (; b && b !== d; ) {
        const W = n.find((Y) => Y.id === b);
        (W == null ? void 0 : W.type) === "GROUP" && c++, b = (W == null ? void 0 : W.parentId) || null;
      }
      return c;
    }, [d, n]), tt = M((h) => {
      if (!h.parentId) return 0;
      let c = 0, b = h.parentId;
      for (; b; ) {
        const W = n.find((Y) => Y.id === b);
        (W == null ? void 0 : W.type) === "GROUP" && c++, b = W == null ? void 0 : W.parentId;
      }
      return c;
    }, [n]), $e = () => /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: K.map((h, c) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: h.width },
        children: [
          h.label,
          c < K.length - 1 && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${oe === c ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (b) => Qe(b, c),
              onDoubleClick: (b) => Dt(b, c),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          c < K.length - 1 && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      h.id
    )) }), Re = H.size === 1 ? e.find((h) => h.id === Array.from(H)[0] && h.type === "GROUP") : null, jt = H.size >= 1 && w && !Re, mt = Re && g, N = () => !jt && !mt && H.size === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      H.size > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-500", children: [
        H.size,
        "개 선택"
      ] }),
      mt && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            g(Re.id), J(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors",
          title: "그룹 해제",
          children: [
            /* @__PURE__ */ a.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
            "해제"
          ]
        }
      ),
      H.size > 0 && /* @__PURE__ */ a.jsx(
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
          style: { height: qt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              N()
            ] }),
            $e()
          ]
        }
      ),
      oe !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: G, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Kt, minWidth: Ne },
            children: K.map((h, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: h.width },
                children: c === 0 && "Milestone"
              },
              h.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: Ne,
              height: A ? p : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((h, c) => ({ index: c, start: c * Xe, size: Xe, key: c }))).map((h) => {
                const c = e[h.index];
                if (!c) return null;
                const b = c.type === "GROUP", W = b && n.some((j) => j.parentId === c.id), Y = r.has(c.id), _ = tt(c) * 12, Z = C === c.id, he = X === c.id, fe = H.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(m || E),
                    onDragStart: (j) => Me(j, c.id),
                    onDragOver: (j) => dt(j, c.id, b),
                    onDragLeave: ut,
                    onDrop: (j) => Je(j, c.id),
                    onDragEnd: Ye,
                    onClick: (j) => Ze(j, c, h.index),
                    onContextMenu: (j) => Se(j, c),
                    className: `box-border flex items-center border-b transition-all duration-150 ${Z ? "opacity-50 bg-blue-50" : he ? V === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : V === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : fe ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : b ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: Xe,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${h.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !b && i(c),
                    title: b ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      m && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(Gt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: m ? K[0].width - 24 : K[0].width, paddingLeft: _ + 8 },
                          children: [
                            W ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: Y ? /* @__PURE__ */ a.jsx(Yt, { size: 14 }) : /* @__PURE__ */ a.jsx($t, { size: 14 })
                              }
                            ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: u,
                                onChange: (j) => k(j.target.value),
                                onKeyDown: ft,
                                onBlur: We,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${b ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), _e(c));
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
                          style: { width: K[1].width },
                          children: b ? "-" : c.cp ? `${c.cp.workDaysTotal + c.cp.nonWorkDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                          style: { width: K[2].width },
                          children: b ? "-" : c.cp ? `${c.cp.workDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-teal",
                          style: { width: K[3].width },
                          children: b ? "-" : c.cp ? `${c.cp.nonWorkDaysTotal}일` : "-"
                        }
                      )
                    ]
                  },
                  h.key
                );
              }),
              z && /* @__PURE__ */ a.jsx(
                ns,
                {
                  columns: K,
                  tasks: e,
                  onTaskCreate: l,
                  onCancel: T || (() => {
                  }),
                  isVirtualized: A,
                  virtualRowIndex: e.length,
                  dragHandleWidth: Fe
                }
              )
            ]
          }
        )
      ] }),
      U && /* @__PURE__ */ a.jsx(
        Xt,
        {
          x: U.x,
          y: U.y,
          taskId: U.taskId,
          selectedTaskIds: H,
          tasks: e,
          onTaskGroup: w,
          onTaskUngroup: g,
          onTaskDelete: y,
          onStartRename: et,
          onClose: () => D(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: qt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              N()
            ] }),
            $e()
          ]
        }
      ),
      oe !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: G, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Kt, minWidth: Ne },
            children: K.map((h, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: h.width },
                children: c === 0 && "Milestone"
              },
              h.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: Ne,
              height: A ? p : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((h, c) => ({ index: c, start: c * Xe, size: Xe, key: c }))).map((h) => {
                const c = e[h.index];
                if (!c) return null;
                const b = c.type === "GROUP", W = b && n.some((j) => j.parentId === c.id), Y = r.has(c.id), _ = kt(c) * 12, Z = C === c.id, he = X === c.id, fe = H.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(m || E),
                    onDragStart: (j) => Me(j, c.id),
                    onDragOver: (j) => dt(j, c.id, b),
                    onDragLeave: ut,
                    onDrop: (j) => Je(j, c.id),
                    onDragEnd: Ye,
                    onClick: (j) => Ze(j, c, h.index),
                    onContextMenu: (j) => Se(j, c),
                    className: `box-border flex items-center border-b transition-colors ${Z ? "opacity-50 bg-blue-50" : he ? V === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : V === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : fe ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : b ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: Xe,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${h.start}px)`
                      } : {}
                    },
                    children: [
                      m && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx(Gt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: m ? K[0].width - 24 : K[0].width, paddingLeft: _ + 8 },
                          children: [
                            W ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: Y ? /* @__PURE__ */ a.jsx(Yt, { size: 14 }) : /* @__PURE__ */ a.jsx($t, { size: 14 })
                              }
                            ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: u,
                                onChange: (j) => k(j.target.value),
                                onKeyDown: ft,
                                onBlur: We,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${b ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), _e(c));
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
                          style: { width: K[1].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPre,
                              onChange: (j) => {
                                const ye = j.target.value.replace(/[^0-9]/g, ""), ve = parseInt(ye) || 0;
                                Ue(c, "indirectWorkDaysPre", ve);
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+" || j.key === ".") && j.preventDefault();
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
                          style: { width: K[2].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: c.task.netWorkDays,
                              onChange: (j) => {
                                const ye = j.target.value.replace(/[^0-9]/g, ""), ve = parseInt(ye) || 0;
                                Ue(c, "netWorkDays", ve);
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+" || j.key === ".") && j.preventDefault();
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
                          style: { width: K[3].width },
                          children: c.task ? /* @__PURE__ */ a.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPost,
                              onChange: (j) => {
                                const ye = j.target.value.replace(/[^0-9]/g, ""), ve = parseInt(ye) || 0;
                                Ue(c, "indirectWorkDaysPost", ve);
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+" || j.key === ".") && j.preventDefault();
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
                          style: { width: K[4].width },
                          children: ge(c.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: K[5].width },
                          children: ge(c.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  h.key
                );
              }),
              S && d && /* @__PURE__ */ a.jsx(
                ts,
                {
                  columns: K,
                  tasks: e,
                  activeCPId: d,
                  onTaskCreate: l,
                  onCancel: P || (() => {
                  }),
                  isVirtualized: A,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      U && /* @__PURE__ */ a.jsx(
        Xt,
        {
          x: U.x,
          y: U.y,
          taskId: U.taskId,
          selectedTaskIds: H,
          tasks: e,
          onTaskGroup: w,
          onTaskUngroup: g,
          onTaskDelete: y,
          onStartRename: et,
          onClose: () => D(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
wn.displayName = "GanttSidebar";
const Be = (e, n = [], t) => !!(!t.workOnSaturdays && hn(e) || !t.workOnSundays && fn(e) || !t.workOnHolidays && n.some((r) => Tn(r, e))), Hs = (e) => hn(e) || fn(e), rs = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; Be(s, t, r); )
    s = B(s, 1);
  for (; i < n; )
    Be(s, t, r) || i++, i < n && (s = B(s, 1));
  return s;
}, Ys = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; i < n; )
    s = B(s, -1), Be(s, t, r) || i++;
  return s;
}, Jt = (e, n) => n <= 0 ? e : B(e, n - 1), $s = (e, n = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: r, indirectWorkDaysPre: s, indirectWorkDaysPost: i } = e.task, o = it(new Date(e.startDate));
  let l = o, m, d;
  s > 0 && (m = l, d = Jt(l, s), l = B(d, 1));
  let f = l, p = f;
  if (r > 0) {
    for (; Be(f, n, t); )
      f = B(f, 1);
    p = rs(f, r, n, t), l = B(p, 1);
  } else s === 0 && (f = o, p = o);
  let x, w;
  return i > 0 && (x = l, w = Jt(l, i)), {
    startDate: m || f,
    endDate: w || p,
    netWorkStartDate: f,
    netWorkEndDate: p,
    indirectPreStartDate: m,
    indirectPreEndDate: d,
    indirectPostStartDate: x,
    indirectPostEndDate: w
  };
}, Gs = (e, n, t) => {
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
}, ot = (e, n, t) => Wt(e, n) * t, Xs = (e, n, t) => {
  const r = Math.round(e / t);
  return B(n, r);
}, Vs = (e, n, t) => (Wt(n, e) + 1) * t, Bs = (e) => pt[e].pixelsPerDay, vn = (e, n = [], t = 5) => {
  const r = [
    ...e.flatMap((d) => [d.startDate, d.endDate].filter(Boolean)),
    ...n.map((d) => d.date)
  ];
  if (r.length === 0) {
    const d = /* @__PURE__ */ new Date();
    return {
      minDate: d,
      maxDate: B(d, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...r.map((d) => d.getTime()))), i = new Date(Math.max(...r.map((d) => d.getTime()))), o = B(s, -t), l = B(i, t), m = Wt(l, o);
  return {
    minDate: o,
    maxDate: l,
    totalDays: m
  };
}, { ROW_HEIGHT: me, HEADER_HEIGHT: ss, MILESTONE_LANE_HEIGHT: be, BAR_HEIGHT: le } = De, as = ({
  minDate: e,
  totalDays: n,
  pixelsPerDay: t,
  zoomLevel: r,
  holidays: s,
  calendarSettings: i
}) => {
  const o = Array.from({ length: n }, (x, w) => B(e, w)), l = n * t, m = pe(() => {
    const x = [];
    let w = Nt(o[0]), g = 0;
    return o.forEach((y) => {
      Nt(y) !== w ? (x.push({ label: `${w}년`, days: g }), w = Nt(y), g = 1) : g++;
    }), x.push({ label: `${w}년`, days: g }), x;
  }, [o]), d = pe(() => {
    const x = [];
    let w = o[0], g = 0;
    return o.forEach((y) => {
      Rr(y, w) ? g++ : (x.push({ label: ge(w, "M월"), days: g }), w = y, g = 1);
    }), x.push({ label: ge(w, "M월"), days: g }), x;
  }, [o]), f = pe(() => {
    if (r === "MONTH")
      return null;
    if (r === "DAY")
      return /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: o.map((x, w) => {
        const g = vt(x), y = Be(x, s, i), E = g === 0, S = g === 6;
        let P = "text-gray-600";
        E && (P = "text-red-500"), S && (P = "text-blue-500"), y && !E && !S && (P = "text-red-500");
        let z = "";
        return E || y && !S ? z = "bg-red-50/50" : S && (z = "bg-blue-50/50"), /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${z}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: `text-[10px] leading-none ${P}`, children: ge(x, "d") }),
              /* @__PURE__ */ a.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${P}`, children: ["일", "월", "화", "수", "목", "금", "토"][g] })
            ]
          },
          w
        );
      }) });
    {
      const x = [];
      let w = o[0], g = 0;
      return o.forEach((y) => {
        _r(y, w, { weekStartsOn: 0 }) ? g++ : (x.push({ label: `${Ft(w, { weekStartsOn: 0 })}주`, days: g }), w = y, g = 1);
      }), x.push({ label: `${Ft(w, { weekStartsOn: 0 })}주`, days: g }), /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: x.map((y, E) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: y.days * t },
          children: y.label
        },
        E
      )) });
    }
  }, [o, r, t, s, i, l]), p = r === "MONTH";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: ss, minWidth: l },
      children: p ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: m.map((x, w) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: x.days * t },
                children: x.label
              },
              w
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: d.map((x, w) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: x.days * t },
                children: x.label
              },
              w
            ))
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: m.map((x, w) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: x.days * t },
                children: x.label
              },
              w
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: d.map((x, w) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: x.days * t },
                children: x.label
              },
              w
            ))
          }
        ),
        f
      ] })
    }
  );
}, is = ({
  minDate: e,
  totalDays: n,
  chartHeight: t,
  pixelsPerDay: r,
  holidays: s,
  calendarSettings: i,
  zoomLevel: o
}) => {
  const l = pe(() => {
    if (o === "MONTH") return [];
    const m = [];
    for (let d = 0; d < n; d++) {
      const f = B(e, d), p = vt(f), x = p === 0, w = p === 6;
      if (Be(f, s, i) || w) {
        const y = d * r;
        let E = "rgba(254, 242, 242, 0.5)";
        w && !x && (E = "rgba(239, 246, 255, 0.5)"), x && (E = "rgba(254, 242, 242, 0.5)"), m.push(
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: y,
              y: 0,
              width: r,
              height: t,
              fill: E,
              className: "pointer-events-none"
            },
            `weekend-${d}`
          )
        );
      }
    }
    return m;
  }, [e, n, t, r, s, i, o]);
  return /* @__PURE__ */ a.jsx("g", { children: l });
}, os = (e, n, t) => {
  if (e.length === 0) return [];
  const r = 25, s = 12, i = 8, o = e.map((f) => ({
    milestone: f,
    x: ot(f.date, n, t),
    labelLevel: 0,
    labelWidth: f.name.length * s + r
  })).sort((f, p) => f.x - p.x), l = [], m = [], d = [];
  for (const f of o) {
    const p = f.labelWidth, x = f.x - p, w = f.x - i;
    if (!m.some((y) => x < y + i))
      m.push(w), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 0
      });
    else {
      const y = f.x + i, E = f.x + p;
      d.some(
        (P) => !(E < P.start || y > P.end)
      ) ? l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: -1
      }) : (d.push({ start: y, end: E }), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, ls = ({
  milestone: e,
  x: n,
  labelLevel: t = 0,
  isDragging: r = !1,
  dragX: s,
  onMouseDown: i,
  onDoubleClick: o
}) => {
  const m = be / 2, d = r && s !== void 0 ? s : n;
  let f, p, x;
  t === 0 ? (f = -8, p = 4, x = "end") : t === 1 ? (f = 8, p = 4, x = "start") : (f = 0, p = 18, x = "middle");
  const w = (y) => {
    i && (y.preventDefault(), y.stopPropagation(), i(y, e));
  }, g = (y) => {
    o && (y.preventDefault(), y.stopPropagation(), o(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${d}, ${m})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${r ? "cursor-ew-resize" : ""}`,
      onMouseDown: w,
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
            fill: r ? "#3B82F6" : Oe.milestone,
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
            y: p,
            textAnchor: x,
            className: `select-none text-[11px] font-bold transition-colors ${r ? "fill-blue-700" : "fill-gray-600 group-hover:fill-blue-700"}`,
            children: e.name
          }
        )
      ]
    }
  );
}, cs = ({
  task: e,
  y: n,
  minDate: t,
  pixelsPerDay: r,
  isMasterView: s,
  isDraggable: i = !1,
  dragInfo: o,
  onDragStart: l
}) => {
  var w, g;
  if (e.type === "GROUP") return null;
  const m = 4, d = !!o, f = (o == null ? void 0 : o.startDate) || e.startDate, p = (o == null ? void 0 : o.endDate) || e.endDate, x = ot(f, t, r);
  if (s) {
    const y = ((w = e.cp) == null ? void 0 : w.workDaysTotal) || 0, E = ((g = e.cp) == null ? void 0 : g.nonWorkDaysTotal) || 0;
    if (y + E === 0) return null;
    const P = y * r, z = E * r;
    return /* @__PURE__ */ a.jsxs("g", { transform: `translate(${x}, ${n})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: P,
          height: le,
          fill: Oe.vermilion,
          rx: m,
          ry: m,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: P,
          y: 0,
          width: z,
          height: le,
          fill: Oe.teal,
          rx: m,
          ry: m,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "text",
        {
          x: -8,
          y: le / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: y, indirectWorkDaysPre: E, indirectWorkDaysPost: S } = e.task, P = (o == null ? void 0 : o.indirectWorkDaysPre) ?? E, z = (o == null ? void 0 : o.indirectWorkDaysPost) ?? S, T = P * r, G = y * r, A = z * r, C = T + G + A, R = 0, X = T, re = T + G, V = 8, Q = {
      startDate: f,
      endDate: p,
      indirectWorkDaysPre: P,
      netWorkDays: y,
      indirectWorkDaysPost: z
    };
    return /* @__PURE__ */ a.jsxs(
      "g",
      {
        transform: `translate(${x}, ${n})`,
        className: `group ${d ? "opacity-90" : ""}`,
        children: [
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: T,
              y: 0,
              width: G,
              height: le,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (H) => l == null ? void 0 : l(H, e.id, "move", Q)
            }
          ),
          P > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: R,
              y: 0,
              width: T,
              height: le,
              fill: Oe.blue,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          y > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: X,
              y: 0,
              width: G,
              height: le,
              fill: Oe.red,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          z > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: re,
              y: 0,
              width: A,
              height: le,
              fill: Oe.blue,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: -V / 2,
              y: 0,
              width: V,
              height: le,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (H) => l == null ? void 0 : l(H, e.id, "resize-pre", Q),
              children: /* @__PURE__ */ a.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: C - V / 2,
              y: 0,
              width: V,
              height: le,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (H) => l == null ? void 0 : l(H, e.id, "resize-post", Q),
              children: /* @__PURE__ */ a.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "rect",
              {
                x: 1,
                y: le / 2 - 6,
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
                y: le / 2 - 6,
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
              y: le / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          d && /* @__PURE__ */ a.jsxs("g", { children: [
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: C / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  ge(f, "MM/dd"),
                  " ~ ",
                  ge(p, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: C / 2,
                y: le + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  P,
                  "일 + 순",
                  y,
                  "일 + 뒤",
                  z,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, ds = () => /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ a.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: Oe.dependency })
  }
) }), Dn = wt(
  ({ tasks: e, milestones: n, viewMode: t, zoomLevel: r, holidays: s, calendarSettings: i, onBarDrag: o, onMilestoneUpdate: l, onMilestoneDoubleClick: m, virtualRows: d, totalHeight: f }, p) => {
    const x = pt[r].pixelsPerDay, w = t === "MASTER", g = d && d.length > 0, [y, E] = $(null), [S, P] = $(null), z = ae(null);
    ie(() => {
      z.current = S;
    }, [S]);
    const { minDate: T, totalDays: G } = pe(() => vn(e, n, 60), [e, n]), A = pe(() => os(n, T, x), [n, T, x]), C = G * x, R = Math.max(g ? (f || 0) + be + 100 : e.length * me + be + 100, 500), X = ae(null);
    ie(() => {
      X.current = y;
    }, [y]);
    const re = M((D, v) => {
      if (!l) return;
      D.preventDefault(), D.stopPropagation();
      const L = ot(v.date, T, x), u = {
        milestoneId: v.id,
        startX: D.clientX,
        originalDate: v.date,
        currentX: L
      };
      P(u);
    }, [l, T, x]), V = M((D) => {
      const v = z.current;
      if (!v) return;
      const L = D.clientX - v.startX, u = ot(v.originalDate, T, x), k = Math.max(0, u + L);
      P((O) => O ? { ...O, currentX: k } : null);
    }, [T, x]), Q = M((D) => {
      const v = z.current;
      if (!v || !l) {
        P(null);
        return;
      }
      const L = D.clientX - v.startX, u = Math.round(L / x);
      if (u !== 0) {
        const k = B(v.originalDate, u), O = n.find((I) => I.id === v.milestoneId);
        O && l({
          ...O,
          date: k
        });
      }
      P(null);
    }, [l, x, n]);
    ie(() => {
      if (S)
        return window.addEventListener("mousemove", V), window.addEventListener("mouseup", Q), () => {
          window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", Q);
        };
    }, [S, V, Q]);
    const H = M((D) => {
      m && m(D);
    }, [m]), J = M((D, v, L, u) => {
      if (!o) return;
      D.preventDefault(), D.stopPropagation();
      const k = {
        taskId: v,
        dragType: L,
        startX: D.clientX,
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
      E(k), X.current = k;
    }, [o]), ne = M((D) => {
      const v = X.current;
      if (!v || !o) return;
      const L = D.clientX - v.startX, u = Math.round(L / x);
      let k = v.originalStartDate, O = v.originalEndDate, I = v.originalIndirectWorkDaysPre, ce = v.originalIndirectWorkDaysPost;
      if (v.dragType === "move")
        k = B(v.originalStartDate, u), O = B(v.originalEndDate, u);
      else if (v.dragType === "resize-pre") {
        I = Math.max(0, v.originalIndirectWorkDaysPre - u);
        const se = B(v.originalStartDate, v.originalIndirectWorkDaysPre);
        k = B(se, -I), O = v.originalEndDate;
      } else if (v.dragType === "resize-post") {
        ce = Math.max(0, v.originalIndirectWorkDaysPost + u);
        const se = B(v.originalEndDate, -v.originalIndirectWorkDaysPost);
        O = B(se, ce), k = v.originalStartDate;
      }
      E((se) => se ? {
        ...se,
        currentStartDate: k,
        currentEndDate: O,
        currentIndirectWorkDaysPre: I,
        currentIndirectWorkDaysPost: ce
      } : null);
    }, [o, x]), ue = M(() => {
      const D = X.current;
      if (!D || !o) {
        E(null), X.current = null;
        return;
      }
      const v = D.currentStartDate.getTime() !== D.originalStartDate.getTime() || D.currentEndDate.getTime() !== D.originalEndDate.getTime(), L = D.currentIndirectWorkDaysPre !== D.originalIndirectWorkDaysPre || D.currentIndirectWorkDaysPost !== D.originalIndirectWorkDaysPost;
      (v || L) && o({
        taskId: D.taskId,
        dragType: D.dragType,
        newStartDate: D.currentStartDate,
        newEndDate: D.currentEndDate,
        newIndirectWorkDaysPre: D.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: D.currentIndirectWorkDaysPost
      }), E(null), X.current = null;
    }, [o]);
    ie(() => {
      if (y)
        return window.addEventListener("mousemove", ne), window.addEventListener("mouseup", ue), document.body.style.cursor = y.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", ne), window.removeEventListener("mouseup", ue), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [y, ne, ue]);
    const U = M((D) => y && y.taskId === D ? {
      startDate: y.currentStartDate,
      endDate: y.currentEndDate,
      indirectWorkDaysPre: y.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: y.currentIndirectWorkDaysPost
    } : null, [y]);
    return /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsxs("div", { ref: p, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ a.jsx(
        as,
        {
          minDate: T,
          totalDays: G,
          pixelsPerDay: x,
          zoomLevel: r,
          holidays: s,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ a.jsxs("svg", { width: C, height: R, className: "block bg-white", children: [
        /* @__PURE__ */ a.jsx(ds, {}),
        /* @__PURE__ */ a.jsx(
          is,
          {
            minDate: T,
            totalDays: G,
            chartHeight: R,
            pixelsPerDay: x,
            holidays: s,
            calendarSettings: i,
            zoomLevel: r
          }
        ),
        (g ? d : e.map((D, v) => ({ index: v, start: v * me, size: me, key: v }))).map((D) => {
          const v = e[D.index];
          if (!v || v.type !== "GROUP") return null;
          const L = D.start + be;
          return /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 0,
              y: L,
              width: C,
              height: me,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${D.key}`
          );
        }),
        Array.from({ length: G }, (D, v) => {
          const L = (v + 1) * x, u = B(T, v), k = vt(u);
          let O = !1, I = "#f0f0f0";
          return r === "DAY" ? (O = !0, I = k === 0 ? "#e0e0e0" : "#f0f0f0") : r === "WEEK" ? (O = k === 0, I = "#e5e7eb") : r === "MONTH" && (O = k === 0, I = "#f0f0f0"), O ? /* @__PURE__ */ a.jsx(
            "line",
            {
              x1: L,
              y1: 0,
              x2: L,
              y2: R,
              stroke: I,
              strokeWidth: 1
            },
            `vline-${v}`
          ) : null;
        }),
        (g ? d : e.map((D, v) => ({ index: v, start: v * me, size: me, key: v }))).map((D) => /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: D.start + me + be,
            x2: C,
            y2: D.start + me + be,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${D.key}`
        )),
        /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: C, height: be, fill: "transparent" }),
        A.map((D) => {
          const v = (S == null ? void 0 : S.milestoneId) === D.milestone.id;
          return /* @__PURE__ */ a.jsx(
            ls,
            {
              milestone: D.milestone,
              x: D.x,
              labelLevel: D.labelLevel,
              isDragging: v,
              dragX: v ? S == null ? void 0 : S.currentX : void 0,
              onMouseDown: l ? re : void 0,
              onDoubleClick: m ? H : void 0
            },
            D.milestone.id
          );
        }),
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: be,
            x2: C,
            y2: be,
            stroke: Oe.grid,
            strokeWidth: 1
          }
        ),
        (g ? d : e.map((D, v) => ({ index: v, start: v * me, size: me, key: v }))).map((D) => {
          const v = e[D.index];
          if (!v) return null;
          const L = D.start + (me - le) / 2 + be;
          return /* @__PURE__ */ a.jsx(
            cs,
            {
              task: v,
              y: L,
              minDate: T,
              pixelsPerDay: x,
              isMasterView: w,
              isDraggable: !w && !!o,
              dragInfo: U(v.id),
              onDragStart: J
            },
            D.key
          );
        })
      ] })
    ] }) });
  }
);
Dn.displayName = "GanttTimeline";
const us = ({ milestoneName: e, onConfirm: n, onCancel: t }) => dn.createPortal(
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
), hs = ({
  milestone: e,
  isOpen: n,
  isNew: t = !1,
  onClose: r,
  onSave: s,
  onDelete: i
}) => {
  const [o, l] = $(""), [m, d] = $(""), [f, p] = $(""), [x, w] = $(!1), g = ae(null);
  ie(() => {
    e && n && (l(e.name), d(e.description || ""), p(ge(e.date, "yyyy-MM-dd")), w(!1), setTimeout(() => {
      var T, G;
      (T = g.current) == null || T.focus(), (G = g.current) == null || G.select();
    }, 100));
  }, [e, n]), ie(() => {
    const T = (G) => {
      G.key === "Escape" && n && (x ? w(!1) : r());
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [n, x, r]);
  const y = () => {
    if (!e || !o.trim()) return;
    const T = {
      ...e,
      name: o.trim(),
      description: m.trim() || void 0,
      date: new Date(f)
    };
    s(T), r();
  }, E = () => {
    w(!0);
  }, S = () => {
    e && i && i(e.id), w(!1);
  }, P = () => {
    w(!1);
  }, z = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), y());
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
        onClick: (T) => T.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ a.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: t ? "새 마일스톤" : "마일스톤 설정" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: r,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ a.jsx(Tt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Jr, { size: 14 }),
                "마일스톤 이름"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  ref: g,
                  type: "text",
                  value: o,
                  onChange: (T) => l(T.target.value),
                  onKeyDown: z,
                  placeholder: "마일스톤 이름을 입력하세요",
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Yr, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "date",
                  value: f,
                  onChange: (T) => p(T.target.value),
                  onKeyDown: z,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Br, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: m,
                  onChange: (T) => d(T.target.value),
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
                onClick: E,
                className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                children: [
                  /* @__PURE__ */ a.jsx(Qr, { size: 16 }),
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
                  onClick: y,
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
    x && /* @__PURE__ */ a.jsx(
      us,
      {
        milestoneName: o || e.name,
        onConfirm: S,
        onCancel: P
      }
    )
  ] });
}, Zt = (e) => {
  let n;
  const t = /* @__PURE__ */ new Set(), r = (d, f) => {
    const p = typeof d == "function" ? d(n) : d;
    if (!Object.is(p, n)) {
      const x = n;
      n = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, n, p), t.forEach((w) => w(n, x));
    }
  }, s = () => n, l = { setState: r, getState: s, getInitialState: () => m, subscribe: (d) => (t.add(d), () => t.delete(d)) }, m = n = e(r, s, l);
  return l;
}, fs = (e) => e ? Zt(e) : Zt, ms = (e) => e;
function gs(e, n = ms) {
  const t = Pe.useSyncExternalStore(
    e.subscribe,
    Pe.useCallback(() => n(e.getState()), [e, n]),
    Pe.useCallback(() => n(e.getInitialState()), [e, n])
  );
  return Pe.useDebugValue(t), t;
}
const en = (e) => {
  const n = fs(e), t = (r) => gs(n, r);
  return Object.assign(t, n), t;
}, xs = (e) => e ? en(e) : en, tn = (e) => Symbol.iterator in e, nn = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), rn = (e, n) => {
  const t = e instanceof Map ? e : new Map(e.entries()), r = n instanceof Map ? n : new Map(n.entries());
  if (t.size !== r.size)
    return !1;
  for (const [s, i] of t)
    if (!r.has(s) || !Object.is(i, r.get(s)))
      return !1;
  return !0;
}, ys = (e, n) => {
  const t = e[Symbol.iterator](), r = n[Symbol.iterator]();
  let s = t.next(), i = r.next();
  for (; !s.done && !i.done; ) {
    if (!Object.is(s.value, i.value))
      return !1;
    s = t.next(), i = r.next();
  }
  return !!s.done && !!i.done;
};
function bs(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) ? !1 : tn(e) && tn(n) ? nn(e) && nn(n) ? rn(e, n) : ys(e, n) : rn(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  );
}
function qe(e) {
  const n = Pe.useRef(void 0);
  return (t) => {
    const r = e(t);
    return bs(n.current, r) ? n.current : n.current = r;
  };
}
const Ke = xs((e, n) => ({
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
  sidebarWidth: De.SIDEBAR_WIDTH,
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
    const { expandedTaskIds: r } = n(), s = /* @__PURE__ */ new Set([...r, ...t]);
    e({ expandedTaskIds: s });
  },
  collapseAll: () => {
    e({ expandedTaskIds: /* @__PURE__ */ new Set() });
  },
  // ====================================
  // Sidebar Actions
  // ====================================
  setSidebarWidth: (t) => {
    const r = Math.max(
      De.SIDEBAR_MIN_WIDTH,
      Math.min(t, De.SIDEBAR_MAX_WIDTH)
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
})), ps = () => Ke(
  qe((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), ws = () => Ke(
  qe((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), qs = () => Ke(
  qe((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), vs = () => Ke(
  qe((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Ds = () => Ke(
  qe((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), Ks = () => Ke(
  qe((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Ve(e, n, t) {
  let r = t.initialDeps ?? [], s;
  function i() {
    var o, l, m, d;
    let f;
    t.key && ((o = t.debug) != null && o.call(t)) && (f = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((g, y) => r[y] !== g)))
      return s;
    r = p;
    let w;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (w = Date.now()), s = n(...p), t.key && ((m = t.debug) != null && m.call(t))) {
      const g = Math.round((Date.now() - f) * 100) / 100, y = Math.round((Date.now() - w) * 100) / 100, E = y / 16, S = (P, z) => {
        for (P = String(P); P.length < z; )
          P = " " + P;
        return P;
      };
      console.info(
        `%c⏱ ${S(y, 5)} /${S(g, 5)} ms`,
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
    return (d = t == null ? void 0 : t.onChange) == null || d.call(t, s), s;
  }
  return i.updateDeps = (o) => {
    r = o;
  }, i;
}
function sn(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ks = (e, n) => Math.abs(e - n) < 1.01, js = (e, n, t) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, s), t);
  };
}, an = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, Es = (e) => e, Ns = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = n; s <= t; s++)
    r.push(s);
  return r;
}, Ms = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: l, height: m } = o;
    n({ width: Math.round(l), height: Math.round(m) });
  };
  if (s(an(t)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((o) => {
    const l = () => {
      const m = o[0];
      if (m != null && m.borderBoxSize) {
        const d = m.borderBoxSize[0];
        if (d) {
          s({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      s(an(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, on = {
  passive: !0
}, ln = typeof window > "u" ? !0 : "onscrollend" in window, Ss = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && ln ? () => {
  } : js(
    r,
    () => {
      n(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (f) => () => {
    const { horizontal: p, isRtl: x } = e.options;
    s = p ? t.scrollLeft * (x && -1 || 1) : t.scrollTop, i(), n(s, f);
  }, l = o(!0), m = o(!1);
  m(), t.addEventListener("scroll", l, on);
  const d = e.options.useScrollendEvent && ln;
  return d && t.addEventListener("scrollend", m, on), () => {
    t.removeEventListener("scroll", l), d && t.removeEventListener("scrollend", m);
  };
}, Ws = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ts = (e, {
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
class Os {
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
        getItemKey: Es,
        rangeExtractor: Ns,
        onChange: () => {
        },
        measureElement: Ws,
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
    }, this.maybeNotify = Ve(
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
        const m = i.get(
          l.lane
        );
        if (m == null || l.end > m.end ? i.set(l.lane, l) : l.end < m.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, l) => o.end === l.end ? o.index - l.index : o.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Ve(
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
    ), this.getMeasurements = Ve(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: r, scrollMargin: s, getItemKey: i, enabled: o }, l) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const m = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const d = this.measurementsCache.slice(0, m);
        for (let f = m; f < t; f++) {
          const p = i(f), x = this.options.lanes === 1 ? d[f - 1] : this.getFurthestMeasurement(d, f), w = x ? x.end + this.options.gap : r + s, g = l.get(p), y = typeof g == "number" ? g : this.options.estimateSize(f), E = w + y, S = x ? x.lane : f % this.options.lanes;
          d[f] = {
            index: f,
            start: w,
            size: y,
            end: E,
            key: p,
            lane: S
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ve(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, r, s, i) => this.range = t.length > 0 && r > 0 ? Ps({
        measurements: t,
        outerSize: r,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ve(
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
    }, this.getVirtualItems = Ve(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, r) => {
        const s = [];
        for (let i = 0, o = t.length; i < o; i++) {
          const l = t[i], m = r[l];
          s.push(m);
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
        return sn(
          r[kn(
            0,
            r.length - 1,
            (s) => sn(r[s]).start,
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
      const o = 10, l = (d) => {
        if (!this.targetWindow) return;
        const f = this.getOffsetForIndex(t, d);
        if (!f) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [p, x] = f;
        this._scrollToOffset(p, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const w = this.getScrollOffset(), g = this.getOffsetForIndex(t, x);
          if (!g) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          ks(g[0], w) || m(x);
        });
      }, m = (d) => {
        this.targetWindow && (i++, i < o ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", i, o), this.targetWindow.requestAnimationFrame(() => l(d))) : console.warn(
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
const kn = (e, n, t, r) => {
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
function Ps({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: r
}) {
  const s = e.length - 1, i = (m) => e[m].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = kn(
    0,
    s,
    i,
    t
  ), l = o;
  if (r === 1)
    for (; l < s && e[l].end < t + n; )
      l++;
  else if (r > 1) {
    const m = Array(r).fill(0);
    for (; l < s && m.some((f) => f < t + n); ) {
      const f = e[l];
      m[f.lane] = f.end, l++;
    }
    const d = Array(r).fill(t + n);
    for (; o >= 0 && d.some((f) => f >= t); ) {
      const f = e[o];
      d[f.lane] = f.start, o--;
    }
    o = Math.max(0, o - o % r), l = Math.min(s, l + (r - 1 - l % r));
  }
  return { startIndex: o, endIndex: l };
}
const cn = typeof document < "u" ? yt.useLayoutEffect : yt.useEffect;
function Cs(e) {
  const n = yt.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? jn(n) : n(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = yt.useState(
    () => new Os(t)
  );
  return r.setOptions(t), cn(() => r._didMount(), []), cn(() => r._willUpdate()), r;
}
function _s(e) {
  return Cs({
    observeElementRect: Ms,
    observeElementOffset: Ss,
    scrollToFn: Ts,
    ...e
  });
}
const { ROW_HEIGHT: Rs } = De;
function Is({
  containerRef: e,
  count: n,
  rowHeight: t = Rs,
  overscan: r = 5
}) {
  const s = _s({
    count: n,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: r
  }), i = s.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: pe(() => i.map((l) => ({
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
const As = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function Qs({
  tasks: e,
  milestones: n = [],
  holidays: t = [],
  calendarSettings: r = As,
  initialView: s = "MASTER",
  initialZoomLevel: i = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: o,
  onTaskUpdate: l,
  onTaskCreate: m,
  onTaskDelete: d,
  onTaskReorder: f,
  onTaskGroup: p,
  onTaskUngroup: x,
  onTaskMove: w,
  onViewChange: g,
  onMilestoneCreate: y,
  onMilestoneUpdate: E,
  onMilestoneDelete: S,
  onSave: P,
  onReset: z,
  hasUnsavedChanges: T,
  saveStatus: G,
  className: A,
  style: C
}) {
  const { viewMode: R, activeCPId: X, zoomLevel: re } = ps(), { setViewMode: V, setZoomLevel: Q } = ws(), { sidebarWidth: H, setSidebarWidth: J } = Ds(), { expandedTaskIds: ne, toggleTask: ue, expandAll: U, collapseAll: D } = vs(), v = ae(null), L = ae(null), u = ae(null), k = ae(!1), O = ae(!1), [I, ce] = $(!1), [se, q] = $(!1), [oe, xe] = $(!1), Ee = M(() => {
    q(!0);
  }, []), we = M(() => {
    q(!1);
  }, []), ze = M(() => {
    xe(!0);
  }, []), Le = M(() => {
    xe(!1);
  }, []), [K, Fe] = $(null), [Ne, Qe] = $(!1), [Ce, He] = $(!1), Dt = M((N) => {
    Fe(N), He(!1), Qe(!0);
  }, []), Ue = M(() => {
    const N = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    Fe(N), He(!0), Qe(!0);
  }, []), Me = M(() => {
    Qe(!1), Fe(null), He(!1);
  }, []), dt = M((N) => {
    Ce && y ? y(N) : E && E(N), Me();
  }, [Ce, y, E, Me]), ut = M((N) => {
    S && S(N), Me();
  }, [S, Me]), Je = ae(!1), Ye = pe(() => e.map((N) => N.id), [e]);
  ie(() => {
    Je.current || (Je.current = !0, V(s), Q(i), D(), o && o.length > 0 ? U(o) : Ye.length > 0 && U(Ye));
  }, [Ye, o, s, i, V, Q, U, D]);
  const Ze = ae(/* @__PURE__ */ new Set());
  ie(() => {
    const N = new Set(e.map((b) => b.id)), h = Ze.current, c = [];
    e.forEach((b) => {
      b.type === "GROUP" && !h.has(b.id) && c.push(b.id);
    }), c.length > 0 && U(c), Ze.current = N;
  }, [e, U]);
  const Se = pe(() => {
    if (R === "MASTER") {
      const N = [], h = (c, b = 0) => {
        e.forEach((W) => {
          W.wbsLevel === 1 && W.parentId === c && (c === null || ne.has(c)) && (N.push(W), W.type === "GROUP" && h(W.id, b + 1));
        });
      };
      return h(null), N;
    } else {
      const N = [], h = (c) => {
        e.forEach((b) => {
          b.wbsLevel === 2 && b.parentId === c && (c === X || ne.has(c)) && (N.push(b), b.type === "GROUP" && h(b.id));
        });
      };
      return h(X), N;
    }
  }, [e, R, X, ne]), { virtualRows: _e, totalHeight: et } = Is({
    containerRef: u,
    count: Se.length
  });
  ie(() => {
    const N = L.current, h = u.current;
    if (!N || !h) return;
    const c = () => {
      k.current || (k.current = !0, h.scrollTop = N.scrollTop, requestAnimationFrame(() => {
        k.current = !1;
      }));
    }, b = () => {
      k.current || (k.current = !0, N.scrollTop = h.scrollTop, requestAnimationFrame(() => {
        k.current = !1;
      }));
    };
    return N.addEventListener("scroll", c), h.addEventListener("scroll", b), () => {
      N.removeEventListener("scroll", c), h.removeEventListener("scroll", b);
    };
  }, []);
  const [We, ht] = $(null), ft = M((N) => {
    if (N.detail >= 2) return;
    N.preventDefault(), O.current = !0, ce(!0);
    const h = N.clientX, c = H, b = (Y) => {
      if (!O.current) return;
      const te = Y.clientX - h;
      J(c + te);
    }, W = () => {
      O.current = !1, ce(!1), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", W);
    };
    document.addEventListener("mousemove", b), document.addEventListener("mouseup", W);
  }, [H, J]), kt = M(() => {
    J(We !== null ? We : De.SIDEBAR_WIDTH);
  }, [We, J]), tt = M((N, h) => {
    V(N, h), g == null || g(N, h);
  }, [V, g]), $e = M((N) => {
    const h = u.current;
    if (!h) return;
    const c = pt[re].pixelsPerDay, { minDate: b } = vn(e, n, 60), W = ot(N, b, c);
    h.scrollLeft = Math.max(0, W - 50);
  }, [re, e, n]), Re = M(() => {
    if (R === "MASTER") {
      const N = Se.filter((h) => h.type === "CP");
      if (N.length > 0) {
        const h = N.reduce(
          (b, W) => b.startDate < W.startDate ? b : W
        ), c = new Date(h.startDate);
        c.setDate(c.getDate() - 5), $e(c);
      }
    } else if (R === "DETAIL" && X) {
      const N = e.filter((h) => h.parentId === X);
      if (N.length > 0) {
        const h = N.reduce(
          (b, W) => b.startDate < W.startDate ? b : W
        ), c = new Date(h.startDate);
        c.setDate(c.getDate() - 5), $e(c);
      }
    }
  }, [R, X, e, Se, $e]), jt = M((N) => {
    R === "MASTER" && N.type === "CP" && tt("DETAIL", N.id);
  }, [R, tt]);
  ie(() => {
    if (R === "DETAIL" && X) {
      const N = setTimeout(() => {
        Re();
      }, 100);
      return () => clearTimeout(N);
    }
  }, [R, X, Re]);
  const mt = M(async (N) => {
    if (l)
      try {
        const h = e.find((b) => b.id === N.taskId);
        if (!h || !h.task) return;
        const c = {
          ...h,
          startDate: N.newStartDate,
          endDate: N.newEndDate,
          task: {
            ...h.task,
            indirectWorkDaysPre: N.newIndirectWorkDaysPre,
            indirectWorkDaysPost: N.newIndirectWorkDaysPost
          }
        };
        await l(c);
      } catch (h) {
        console.error("Failed to update task:", h);
      }
  }, [e, l]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: v,
      className: `flex h-full w-full flex-col bg-gray-50 ${A || ""}`,
      style: C,
      children: [
        /* @__PURE__ */ a.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-3 shrink-0", children: R === "DETAIL" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => tt("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            m && !se && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Ee,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            m && !oe && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: ze,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            y && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Ue,
                className: "flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors",
                title: "새 마일스톤 추가",
                children: "+ 마일스톤"
              }
            ),
            oe && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Re,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: R === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ a.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (R === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((N) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => Q(N),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${re === N ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: pt[N].label
              },
              N
            )) }),
            /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              ge(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            P && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: P,
                disabled: !T || G === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${T ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: G === "saving" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
            z && /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: z,
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
              style: { width: H },
              children: /* @__PURE__ */ a.jsx(
                wn,
                {
                  ref: L,
                  tasks: Se,
                  allTasks: e,
                  viewMode: R,
                  expandedIds: ne,
                  onToggle: ue,
                  onTaskClick: jt,
                  onTaskUpdate: l,
                  onTaskCreate: m,
                  onTaskReorder: f,
                  onTaskGroup: p,
                  onTaskUngroup: x,
                  onTaskDelete: d,
                  onTaskMove: w,
                  activeCPId: X,
                  virtualRows: _e,
                  totalHeight: et,
                  onTotalWidthChange: ht,
                  isAddingTask: se,
                  onCancelAddTask: we,
                  isAddingCP: oe,
                  onCancelAddCP: Le
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${I ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: ft,
              onDoubleClick: kt,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsx(
            Dn,
            {
              ref: u,
              tasks: Se,
              milestones: n,
              viewMode: R,
              zoomLevel: re,
              holidays: t,
              calendarSettings: r,
              onTaskUpdate: l,
              onBarDrag: mt,
              onMilestoneUpdate: E,
              onMilestoneDoubleClick: Dt,
              virtualRows: _e,
              totalHeight: et
            }
          ) }),
          I && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ a.jsx(
          hs,
          {
            milestone: K,
            isOpen: Ne,
            isNew: Ce,
            onClose: Me,
            onSave: dt,
            onDelete: ut
          }
        )
      ]
    }
  );
}
const zs = 50;
function de(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Set)
    return new Set(Array.from(e).map((t) => de(t)));
  if (e instanceof Map)
    return new Map(Array.from(e.entries()).map(([t, r]) => [de(t), de(r)]));
  if (Array.isArray(e))
    return e.map((t) => de(t));
  const n = {};
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (n[t] = de(e[t]));
  return n;
}
function Us(e) {
  const [n, t] = $(() => ({
    past: [],
    present: de(e),
    future: []
  })), r = ae(!1), s = M((d) => {
    t((f) => {
      const p = typeof d == "function" ? d(f.present) : d;
      if (!r.current)
        return r.current = !0, {
          past: [],
          present: de(p),
          future: []
        };
      if (JSON.stringify(f.present) === JSON.stringify(p))
        return f;
      const x = [...f.past, de(f.present)];
      return x.length > zs && x.shift(), {
        past: x,
        present: de(p),
        future: []
        // 새 변경 시 future 초기화
      };
    });
  }, []), i = M(() => {
    t((d) => {
      if (d.past.length === 0) return d;
      const f = [...d.past], p = f.pop();
      return {
        past: f,
        present: p,
        future: [de(d.present), ...d.future]
      };
    });
  }, []), o = M(() => {
    t((d) => {
      if (d.future.length === 0) return d;
      const f = [...d.future], p = f.shift();
      return {
        past: [...d.past, de(d.present)],
        present: p,
        future: f
      };
    });
  }, []), l = M((d) => {
    r.current = !1, t({
      past: [],
      present: de(d),
      future: []
    });
  }, []), m = M(() => {
    t((d) => ({
      past: [],
      present: d.present,
      future: []
    }));
  }, []);
  return {
    present: n.present,
    set: s,
    undo: i,
    redo: o,
    canUndo: n.past.length > 0,
    canRedo: n.future.length > 0,
    reset: l,
    clearHistory: m,
    historyLength: {
      past: n.past.length,
      future: n.future.length
    }
  };
}
export {
  Oe as GANTT_COLORS,
  De as GANTT_LAYOUT,
  Qs as GanttChart,
  wn as GanttSidebar,
  Dn as GanttTimeline,
  pt as ZOOM_CONFIG,
  Jt as addCalendarDays,
  rs as addWorkingDays,
  vn as calculateDateRange,
  $s as calculateDualCalendarDates,
  ot as dateToX,
  Gs as getAnchorDate,
  Vs as getDateRangeWidth,
  Bs as getPixelsPerDay,
  Be as isHoliday,
  Hs as isWeekend,
  Ys as subtractWorkingDays,
  Ks as useGanttDrag,
  vs as useGanttExpansion,
  qs as useGanttSelection,
  Ds as useGanttSidebar,
  Ke as useGanttStore,
  ws as useGanttViewActions,
  ps as useGanttViewState,
  Is as useGanttVirtualization,
  Us as useHistory,
  Xs as xToDate
};
