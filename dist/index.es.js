"use client";
import * as vt from "react";
import Ce, { forwardRef as jt, createElement as Ct, useState as Y, useRef as ue, useEffect as ce, useCallback as W, useMemo as ve } from "react";
import It, { flushSync as Sr } from "react-dom";
var Ot = { exports: {} }, nt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Pr() {
  if (At) return nt;
  At = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      i = {};
      for (var l in a)
        l !== "key" && (i[l] = a[l]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return nt.Fragment = r, nt.jsx = t, nt.jsxs = t, nt;
}
var st = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function Tr() {
  return zt || (zt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === ae ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case k:
          return "Fragment";
        case I:
          return "Profiler";
        case O:
          return "StrictMode";
        case F:
          return "Suspense";
        case L:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case b:
            return "Portal";
          case z:
            return h.displayName || "Context";
          case G:
            return (h._context.displayName || "Context") + ".Consumer";
          case H:
            var D = h.render;
            return h = h.displayName, h || (h = D.displayName || D.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case C:
            return D = h.displayName || null, D !== null ? D : e(h.type) || "Memo";
          case B:
            D = h._payload, h = h._init;
            try {
              return e(h(D));
            } catch {
            }
        }
      return null;
    }
    function r(h) {
      return "" + h;
    }
    function t(h) {
      try {
        r(h);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var P = D.error, R = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return P.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), r(h);
      }
    }
    function n(h) {
      if (h === k) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === B)
        return "<...>";
      try {
        var D = e(h);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var h = te.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(h) {
      if (A.call(h, "key")) {
        var D = Object.getOwnPropertyDescriptor(h, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function l(h, D) {
      function P() {
        re || (re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: P,
        configurable: !0
      });
    }
    function f() {
      var h = e(this.type);
      return ie[h] || (ie[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function c(h, D, P, R, S, ne) {
      var V = P.ref;
      return h = {
        $$typeof: m,
        type: h,
        key: D,
        props: P,
        _owner: R
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function u(h, D, P, R, S, ne) {
      var V = D.children;
      if (V !== void 0)
        if (R)
          if (X(V)) {
            for (R = 0; R < V.length; R++)
              w(V[R]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(V);
      if (A.call(D, "key")) {
        V = e(h);
        var Z = Object.keys(D).filter(function(fe) {
          return fe !== "key";
        });
        R = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", x[V + R] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          V,
          Z,
          V
        ), x[V + R] = !0);
      }
      if (V = null, P !== void 0 && (t(P), V = "" + P), o(D) && (t(D.key), V = "" + D.key), "key" in D) {
        P = {};
        for (var he in D)
          he !== "key" && (P[he] = D[he]);
      } else P = D;
      return V && l(
        P,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), c(
        h,
        V,
        P,
        a(),
        S,
        ne
      );
    }
    function w(h) {
      p(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === B && (h._payload.status === "fulfilled" ? p(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function p(h) {
      return typeof h == "object" && h !== null && h.$$typeof === m;
    }
    var y = Ce, m = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), z = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), te = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, X = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var re, ie = {}, J = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), N = Q(n(i)), x = {};
    st.Fragment = k, st.jsx = function(h, D, P) {
      var R = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        h,
        D,
        P,
        !1,
        R ? Error("react-stack-top-frame") : J,
        R ? Q(n(h)) : N
      );
    }, st.jsxs = function(h, D, P) {
      var R = 1e4 > te.recentlyCreatedOwnerStacks++;
      return u(
        h,
        D,
        P,
        !0,
        R ? Error("react-stack-top-frame") : J,
        R ? Q(n(h)) : N
      );
    };
  }()), st;
}
process.env.NODE_ENV === "production" ? Ot.exports = Pr() : Ot.exports = Tr();
var s = Ot.exports;
const xr = 6048e5, Cr = 864e5, Lt = Symbol.for("constructDateFrom");
function Ee(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && Lt in e ? e[Lt](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function le(e, r) {
  return Ee(r || e, e);
}
function U(e, r, t) {
  const n = le(e, t == null ? void 0 : t.in);
  return isNaN(r) ? Ee(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function gr(e, r) {
  return le(e, r == null ? void 0 : r.in).getDay() === 6;
}
function yr(e, r) {
  return le(e, r == null ? void 0 : r.in).getDay() === 0;
}
let Or = {};
function ct() {
  return Or;
}
function _e(e, r) {
  var l, f, c, u;
  const t = ct(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? t.weekStartsOn ?? ((u = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = le(e, r == null ? void 0 : r.in), i = a.getDay(), o = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function kt(e, r) {
  return _e(e, { ...r, weekStartsOn: 1 });
}
function br(e, r) {
  const t = le(e, r == null ? void 0 : r.in), n = t.getFullYear(), a = Ee(t, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = kt(a), o = Ee(t, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const l = kt(o);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Ft(e) {
  const r = le(e), t = new Date(
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
function dt(e, ...r) {
  const t = Ee.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function ot(e, r) {
  const t = le(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function pr(e, r, t) {
  const [n, a] = dt(
    t == null ? void 0 : t.in,
    e,
    r
  ), i = ot(n), o = ot(a), l = +i - Ft(i), f = +o - Ft(o);
  return Math.round((l - f) / Cr);
}
function _r(e, r) {
  const t = br(e, r), n = Ee(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), kt(n);
}
function Ir(e, r, t) {
  const [n, a] = dt(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +ot(n) == +ot(a);
}
function Rr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ar(e) {
  return !(!Rr(e) && typeof e != "number" || isNaN(+le(e)));
}
function Rt(e, r, t) {
  const [n, a] = dt(
    t == null ? void 0 : t.in,
    e,
    r
  ), i = Ht(n, a), o = Math.abs(
    pr(n, a)
  );
  n.setDate(n.getDate() - i * o);
  const l = +(Ht(n, a) === -i), f = i * (o - l);
  return f === 0 ? 0 : f;
}
function Ht(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function zr(e, r) {
  const t = le(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Lr(e, r) {
  const t = le(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const Fr = {
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
}, Hr = (e, r, t) => {
  let n;
  const a = Fr[e];
  return typeof a == "string" ? n = a : r === 1 ? n = a.one : n = a.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function St(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const $r = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Gr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xr = {
  date: St({
    formats: $r,
    defaultWidth: "full"
  }),
  time: St({
    formats: Yr,
    defaultWidth: "full"
  }),
  dateTime: St({
    formats: Gr,
    defaultWidth: "full"
  })
}, Vr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Br = (e, r, t, n) => Vr[e];
function at(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : o;
      a = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      a = e.values[l] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(r) : r;
    return a[i];
  };
}
const qr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Qr = {
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
}, Jr = {
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
}, Ur = {
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
}, Zr = {
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
}, en = (e, r) => {
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
}, tn = {
  ordinalNumber: en,
  era: at({
    values: qr,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: Kr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: at({
    values: Qr,
    defaultWidth: "wide"
  }),
  day: at({
    values: Jr,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: Ur,
    defaultWidth: "wide",
    formattingValues: Zr,
    defaultFormattingWidth: "wide"
  })
};
function it(e) {
  return (r, t = {}) => {
    const n = t.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = r.match(a);
    if (!i)
      return null;
    const o = i[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(l) ? nn(l, (w) => w.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      rn(l, (w) => w.test(o))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(f) : f, c = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(c)
    ) : c;
    const u = r.slice(o.length);
    return { value: c, rest: u };
  };
}
function rn(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function nn(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function sn(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = r.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = t.valueCallback ? t.valueCallback(o) : o;
    const l = r.slice(a.length);
    return { value: o, rest: l };
  };
}
const an = /^(\d+)(th|st|nd|rd)?/i, on = /\d+/i, ln = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, cn = {
  any: [/^b/i, /^(a|c)/i]
}, dn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, un = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fn = {
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
}, mn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, xn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yn = {
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
}, bn = {
  ordinalNumber: sn({
    matchPattern: an,
    parsePattern: on,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: it({
    matchPatterns: ln,
    defaultMatchWidth: "wide",
    parsePatterns: cn,
    defaultParseWidth: "any"
  }),
  quarter: it({
    matchPatterns: dn,
    defaultMatchWidth: "wide",
    parsePatterns: un,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: it({
    matchPatterns: hn,
    defaultMatchWidth: "wide",
    parsePatterns: fn,
    defaultParseWidth: "any"
  }),
  day: it({
    matchPatterns: mn,
    defaultMatchWidth: "wide",
    parsePatterns: xn,
    defaultParseWidth: "any"
  }),
  dayPeriod: it({
    matchPatterns: gn,
    defaultMatchWidth: "any",
    parsePatterns: yn,
    defaultParseWidth: "any"
  })
}, pn = {
  code: "en-US",
  formatDistance: Hr,
  formatLong: Xr,
  formatRelative: Br,
  localize: tn,
  match: bn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function wn(e, r) {
  const t = le(e, r == null ? void 0 : r.in);
  return pr(t, Lr(t)) + 1;
}
function vn(e, r) {
  const t = le(e, r == null ? void 0 : r.in), n = +kt(t) - +_r(t);
  return Math.round(n / xr) + 1;
}
function wr(e, r) {
  var u, w, p, y;
  const t = le(e, r == null ? void 0 : r.in), n = t.getFullYear(), a = ct(), i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((w = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : w.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((y = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, o = Ee((r == null ? void 0 : r.in) || e, 0);
  o.setFullYear(n + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = _e(o, r), f = Ee((r == null ? void 0 : r.in) || e, 0);
  f.setFullYear(n, 0, i), f.setHours(0, 0, 0, 0);
  const c = _e(f, r);
  return +t >= +l ? n + 1 : +t >= +c ? n : n - 1;
}
function kn(e, r) {
  var l, f, c, u;
  const t = ct(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((f = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = wr(e, r), i = Ee((r == null ? void 0 : r.in) || e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), _e(i, r);
}
function Dn(e, r) {
  const t = le(e, r == null ? void 0 : r.in), n = +_e(t, r) - +kn(t, r);
  return Math.round(n / xr) + 1;
}
function K(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const Pe = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return K(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : K(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return K(e.getDate(), r.length);
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
    return K(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return K(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return K(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return K(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return K(a, r.length);
  }
}, He = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $t = {
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
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return t.ordinalNumber(a, { unit: "year" });
    }
    return Pe.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const a = wr(e, n), i = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const o = i % 100;
      return K(o, 2);
    }
    return r === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : K(i, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = br(e);
    return K(t, r.length);
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
    return K(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return K(n, 2);
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
        return K(n, 2);
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
        return Pe.M(e, r);
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
        return K(n + 1, 2);
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
    const a = Dn(e, n);
    return r === "wo" ? t.ordinalNumber(a, { unit: "week" }) : K(a, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = vn(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : K(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Pe.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = wn(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : K(n, r.length);
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
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(i);
      case "ee":
        return K(i, 2);
      case "eo":
        return t.ordinalNumber(i, { unit: "day" });
      case "eee":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(i);
      case "cc":
        return K(i, r.length);
      case "co":
        return t.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return t.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return K(a, r.length);
      case "io":
        return t.ordinalNumber(a, { unit: "day" });
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
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = He.noon : n === 0 ? a = He.midnight : a = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = He.evening : n >= 12 ? a = He.afternoon : n >= 4 ? a = He.morning : a = He.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(a, {
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
    return Pe.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Pe.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : K(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : K(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pe.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pe.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return Pe.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return Gt(n);
      case "XXXX":
      case "XX":
        return Oe(n);
      case "XXXXX":
      case "XXX":
      default:
        return Oe(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return Gt(n);
      case "xxxx":
      case "xx":
        return Oe(n);
      case "xxxxx":
      case "xxx":
      default:
        return Oe(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yt(n, ":");
      case "OOOO":
      default:
        return "GMT" + Oe(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yt(n, ":");
      case "zzzz":
      default:
        return "GMT" + Oe(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return K(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return K(+e, r.length);
  }
};
function Yt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? t + String(a) : t + String(a) + r + K(i, 2);
}
function Gt(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : Oe(e, r);
}
function Oe(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), a = K(Math.trunc(n / 60), 2), i = K(n % 60, 2);
  return t + a + r + i;
}
const Xt = (e, r) => {
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
}, vr = (e, r) => {
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
}, jn = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], a = t[2];
  if (!a)
    return Xt(e, r);
  let i;
  switch (n) {
    case "P":
      i = r.dateTime({ width: "short" });
      break;
    case "PP":
      i = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = r.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Xt(n, r)).replace("{{time}}", vr(a, r));
}, Nn = {
  p: vr,
  P: jn
}, En = /^D+$/, Mn = /^Y+$/, Wn = ["D", "DD", "YY", "YYYY"];
function Sn(e) {
  return En.test(e);
}
function Pn(e) {
  return Mn.test(e);
}
function Tn(e, r, t) {
  const n = Cn(e, r, t);
  if (console.warn(n), Wn.includes(e)) throw new RangeError(n);
}
function Cn(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const On = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _n = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, In = /^'([^]*?)'?$/, Rn = /''/g, An = /[a-zA-Z]/;
function ye(e, r, t) {
  var u, w, p, y;
  const n = ct(), a = n.locale ?? pn, i = n.firstWeekContainsDate ?? ((w = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = n.weekStartsOn ?? ((y = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : y.weekStartsOn) ?? 0, l = le(e, t == null ? void 0 : t.in);
  if (!Ar(l))
    throw new RangeError("Invalid time value");
  let f = r.match(_n).map((m) => {
    const b = m[0];
    if (b === "p" || b === "P") {
      const k = Nn[b];
      return k(m, a.formatLong);
    }
    return m;
  }).join("").match(On).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const b = m[0];
    if (b === "'")
      return { isToken: !1, value: zn(m) };
    if ($t[b])
      return { isToken: !0, value: m };
    if (b.match(An))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: m };
  });
  a.localize.preprocessor && (f = a.localize.preprocessor(l, f));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: a
  };
  return f.map((m) => {
    if (!m.isToken) return m.value;
    const b = m.value;
    (Pn(b) || Sn(b)) && Tn(b, r, String(e));
    const k = $t[b[0]];
    return k(l, b, a.localize, c);
  }).join("");
}
function zn(e) {
  const r = e.match(In);
  return r ? r[1].replace(Rn, "'") : e;
}
function Ln(e, r) {
  return le(e, r == null ? void 0 : r.in).getDate();
}
function Nt(e, r) {
  return le(e, r == null ? void 0 : r.in).getDay();
}
function Vt(e, r) {
  var f, c, u, w;
  const t = ct(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((c = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((w = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : w.weekStartsOn) ?? 0, a = Ln(le(e, r == null ? void 0 : r.in));
  if (isNaN(a)) return NaN;
  const i = Nt(zr(e, r));
  let o = n - i;
  o <= 0 && (o += 7);
  const l = a - o;
  return Math.ceil(l / 7) + 1;
}
function Pt(e, r) {
  return le(e, r == null ? void 0 : r.in).getFullYear();
}
function Fn(e, r, t) {
  const [n, a] = dt(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +_e(n, t) == +_e(a, t);
}
function Hn(e, r, t) {
  const [n, a] = dt(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth();
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), Bt = (e) => {
  const r = Yn(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, kr = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), Gn = (e) => {
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
var Xn = {
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
const Vn = jt(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: o,
    ...l
  }, f) => Ct(
    "svg",
    {
      ref: f,
      ...Xn,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: kr("lucide", a),
      ...!i && !Gn(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([c, u]) => Ct(c, u)),
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
const ke = (e, r) => {
  const t = jt(
    ({ className: n, ...a }, i) => Ct(Vn, {
      ref: i,
      iconNode: r,
      className: kr(
        `lucide-${$n(Bt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return t.displayName = Bt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], qn = ke("calendar", Bn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Dr = ke("check", Kn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qt = ke("chevron-down", Qn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Kt = ke("chevron-right", Jn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Tt = ke("clock", Un);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
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
], es = ke("file-text", Zn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Qt = ke("grip-vertical", ts);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], jr = ke("trash-2", rs);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], _t = ke("type", ns);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Et = ke("x", ss), Te = {
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
}, Ne = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, Dt = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, as = ({ taskNames: e, onConfirm: r, onCancel: t }) => It.createPortal(
  /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "w-[360px] rounded-lg bg-white p-6 shadow-xl",
        onClick: (n) => n.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ s.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ s.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "삭제 확인" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "이 작업은 되돌릴 수 없습니다" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "mb-6 rounded-md bg-gray-50 p-3", children: [
            /* @__PURE__ */ s.jsxs("p", { className: "mb-2 text-sm text-gray-600", children: [
              "다음 ",
              e.length,
              "개 항목을 삭제하시겠습니까?"
            ] }),
            /* @__PURE__ */ s.jsx("ul", { className: "max-h-[120px] overflow-auto", children: e.map((n, a) => /* @__PURE__ */ s.jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ s.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-400" }),
              n
            ] }, a)) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: r,
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
), Jt = ({
  x: e,
  y: r,
  taskId: t,
  selectedTaskIds: n,
  tasks: a,
  onTaskGroup: i,
  onTaskUngroup: o,
  onTaskDelete: l,
  onStartRename: f,
  onClose: c,
  onDeselect: u
}) => {
  var H;
  const [w, p] = Y(!1), y = Array.from(n).some((F) => {
    const L = a.find((C) => C.id === F);
    return (L == null ? void 0 : L.type) === "GROUP";
  }), m = () => {
    n.size >= 1 && !y && i && (i(Array.from(n)), c());
  }, b = () => {
    if (n.size === 1 && o) {
      const F = Array.from(n)[0], L = a.find((C) => C.id === F);
      (L == null ? void 0 : L.type) === "GROUP" && (o(F), c());
    }
  }, k = () => {
    p(!0);
  }, O = () => {
    l && (n.size > 0 ? Array.from(n) : [t]).forEach((L) => {
      l(L);
    }), p(!1), u(), c();
  }, I = () => {
    p(!1);
  }, G = n.size === 1 && (() => {
    const F = Array.from(n)[0], L = a.find((C) => C.id === F);
    return (L == null ? void 0 : L.type) === "GROUP";
  })(), z = n.size > 0 ? Array.from(n).map((F) => {
    var L;
    return ((L = a.find((C) => C.id === F)) == null ? void 0 : L.name) || F;
  }) : [((H = a.find((F) => F.id === t)) == null ? void 0 : H.name) || t];
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: r },
      onClick: (F) => F.stopPropagation(),
      children: [
        n.size >= 1 && !y && i && /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: m,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
              "그룹화 (",
              n.size,
              "개 선택됨)"
            ]
          }
        ),
        G && o && /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: b,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
              "그룹 해제"
            ]
          }
        ),
        n.size === 1 && f && /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              const F = Array.from(n)[0];
              f(F), c();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
              "이름 변경"
            ]
          }
        ),
        l && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "my-1 border-t border-gray-200" }),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              onClick: k,
              className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50",
              children: [
                /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                "삭제 ",
                n.size > 1 ? `(${n.size}개)` : ""
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "my-1 border-t border-gray-200" }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              u(), c();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        ),
        w && /* @__PURE__ */ s.jsx(
          as,
          {
            taskNames: z,
            onConfirm: O,
            onCancel: I
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Ut } = Ne, pt = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, is = ({
  columns: e,
  tasks: r,
  activeCPId: t,
  onTaskCreate: n,
  onCancel: a,
  isVirtualized: i = !1,
  virtualRowIndex: o
}) => {
  const [l, f] = Ce.useState(pt), c = ue(null);
  ce(() => {
    f(pt), setTimeout(() => {
      var m;
      (m = c.current) == null || m.focus();
    }, 0);
  }, []);
  const u = W(() => {
    f(pt), a();
  }, [a]), w = W(async () => {
    if (!(!l.name.trim() || !n || !t))
      try {
        const m = r[r.length - 1], b = m ? U(m.endDate, 1) : /* @__PURE__ */ new Date(), k = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, O = U(b, Math.max(k - 1, 0)), I = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: b,
          endDate: O,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await n(I), f(pt), a();
      } catch (m) {
        console.error("Failed to create task:", m), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, n, t, r, a]), p = W((m) => {
    m.key === "Enter" ? (m.preventDefault(), w()) : m.key === "Escape" && (m.preventDefault(), u());
  }, [w, u]), y = i && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${r.length * Ut}px)`
  } : {};
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Ut,
        ...y
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: e[0].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                ref: c,
                type: "text",
                placeholder: "공정명...",
                className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.name,
                onChange: (m) => f((b) => ({ ...b, name: m.target.value })),
                onKeyDown: p
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[1].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.indirectWorkDaysPre,
                onChange: (m) => {
                  const b = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(b) || 0;
                  f((O) => ({ ...O, indirectWorkDaysPre: k }));
                },
                onKeyDown: p,
                title: "선 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[2].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.netWorkDays,
                onChange: (m) => {
                  const b = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(b) || 0;
                  f((O) => ({ ...O, netWorkDays: k }));
                },
                onKeyDown: p,
                title: "순작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[3].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: l.indirectWorkDaysPost,
                onChange: (m) => {
                  const b = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(b) || 0;
                  f((O) => ({ ...O, indirectWorkDaysPost: k }));
                },
                onKeyDown: p,
                title: "후 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center justify-center gap-1 px-2",
            style: { width: e[4].width + e[5].width },
            children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: w,
                  disabled: !l.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ s.jsx(Dr, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: u,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ s.jsx(Et, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Zt } = Ne, wt = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, os = ({
  columns: e,
  tasks: r,
  onTaskCreate: t,
  onCancel: n,
  isVirtualized: a = !1,
  virtualRowIndex: i,
  dragHandleWidth: o = 0
}) => {
  const [l, f] = Ce.useState(wt), c = ue(null);
  ce(() => {
    f(wt), setTimeout(() => {
      var m;
      (m = c.current) == null || m.focus();
    }, 0);
  }, []);
  const u = W(() => {
    f(wt), n();
  }, [n]), w = W(async () => {
    if (!(!l.name.trim() || !t))
      try {
        const m = r.filter((z) => z.type === "CP" && !z.parentId), b = m[m.length - 1], k = b ? U(b.endDate, 1) : /* @__PURE__ */ new Date(), O = l.workDaysTotal + l.nonWorkDaysTotal, I = U(k, Math.max(O - 1, 0)), G = {
          id: `cp-${Date.now()}`,
          parentId: null,
          wbsLevel: 1,
          type: "CP",
          name: l.name.trim(),
          startDate: k,
          endDate: I,
          cp: {
            workDaysTotal: l.workDaysTotal,
            nonWorkDaysTotal: l.nonWorkDaysTotal
          },
          dependencies: []
        };
        await t(G), f(wt), n();
      } catch (m) {
        console.error("Failed to create CP:", m), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, t, r, n]), p = W((m) => {
    m.key === "Enter" ? (m.preventDefault(), w()) : m.key === "Escape" && (m.preventDefault(), u());
  }, [w, u]), y = a && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${r.length * Zt}px)`
  } : {};
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Zt,
        ...y
      },
      children: [
        o > 0 && /* @__PURE__ */ s.jsx("div", { style: { width: o }, className: "shrink-0" }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: o > 0 ? e[0].width - o : e[0].width },
            children: [
              /* @__PURE__ */ s.jsx("div", { className: "w-6 shrink-0" }),
              " ",
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  ref: c,
                  type: "text",
                  placeholder: "CP명...",
                  className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                  value: l.name,
                  onChange: (m) => f((b) => ({ ...b, name: m.target.value })),
                  onKeyDown: p
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
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
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[2].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[50px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-vermilion focus:border-vermilion focus:outline-none focus:ring-1 focus:ring-vermilion",
                value: l.workDaysTotal,
                onChange: (m) => {
                  const b = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(b) || 0;
                  f((O) => ({ ...O, workDaysTotal: k }));
                },
                onKeyDown: p,
                title: "작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center px-1",
            style: { width: e[3].width },
            children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[50px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-teal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal",
                value: l.nonWorkDaysTotal,
                onChange: (m) => {
                  const b = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(b) || 0;
                  f((O) => ({ ...O, nonWorkDaysTotal: k }));
                },
                onKeyDown: p,
                title: "비작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "flex shrink-0 items-center justify-center gap-1 px-2", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: w,
              disabled: !l.name.trim(),
              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
              title: "저장 (Enter)",
              children: /* @__PURE__ */ s.jsx(Dr, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: u,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ s.jsx(Et, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: $e, HEADER_HEIGHT: er, MILESTONE_LANE_HEIGHT: tr } = Ne, rr = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], nr = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Nr = jt(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: a, onTaskClick: i, onTaskUpdate: o, onTaskCreate: l, onTaskReorder: f, activeCPId: c, virtualRows: u, totalHeight: w, onTotalWidthChange: p, onTaskGroup: y, onTaskUngroup: m, onTaskDelete: b, onTaskMove: k, isAddingTask: O = !1, onCancelAddTask: I, isAddingCP: G = !1, onCancelAddCP: z, onTaskDoubleClick: H }, F) => {
    const L = u && u.length > 0, [C, B] = Y(null), [ee, ae] = Y(null), [te, A] = Y(null), [X, Q] = Y(/* @__PURE__ */ new Set()), [re, ie] = Y(null), [J, N] = Y(null), [x, h] = Y(null), [D, P] = Y(""), R = ue(null), [S, ne] = Y(null), [V, Z] = Y(
      rr.map((g) => g.width)
    ), [he, fe] = Y(
      nr.map((g) => g.width)
    ), [Be, qe] = Y(null), Ie = ue(!1), De = t === "MASTER" ? rr : nr, Me = t === "MASTER" ? V : he, Re = t === "MASTER" ? Z : fe, se = ve(
      () => De.map((g, d) => ({
        ...g,
        width: Me[d] ?? g.width
      })),
      [De, Me]
    ), Ae = f ? 24 : 0, be = se.reduce((g, d) => g + d.width, 0) + Ae;
    ce(() => {
      p && p(be);
    }, [be, p]);
    const Mt = W((g, d) => {
      if (g.detail >= 2) return;
      g.preventDefault(), g.stopPropagation(), Ie.current = !0, qe(d);
      const M = g.clientX, $ = Me[d], v = De[d].minWidth, T = (_) => {
        if (!Ie.current) return;
        const q = _.clientX - M, me = Math.max(v, $ + q);
        Re((j) => {
          const de = [...j];
          return de[d] = me, de;
        });
      }, E = () => {
        Ie.current = !1, qe(null), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", E);
      };
      document.addEventListener("mousemove", T), document.addEventListener("mouseup", E);
    }, [Me, De, Re]), Ke = W((g, d = 12, M = "normal") => {
      const v = document.createElement("canvas").getContext("2d");
      return v ? (v.font = `${M} ${d}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, v.measureText(g).width) : 0;
    }, []), ze = W((g) => {
      if (!c || g.parentId === c) return 0;
      let d = 0, M = g.parentId;
      for (; M && M !== c; ) {
        const $ = r.find((v) => v.id === M);
        ($ == null ? void 0 : $.type) === "GROUP" && d++, M = ($ == null ? void 0 : $.parentId) || null;
      }
      return d;
    }, [c, r]), Qe = W((g) => {
      if (!g.parentId) return 0;
      let d = 0, M = g.parentId;
      for (; M; ) {
        const $ = r.find((v) => v.id === M);
        ($ == null ? void 0 : $.type) === "GROUP" && d++, M = $ == null ? void 0 : $.parentId;
      }
      return d;
    }, [r]), Je = W((g) => {
      const d = De[g].minWidth, M = g === 0, $ = M ? 72 : 20, v = De[g].label;
      let T = Ke(v, 12, "500") + 16;
      return e.forEach((E) => {
        let _ = "", q = 0;
        if (t === "MASTER") {
          const bt = E.type === "GROUP";
          switch (M && (q = Qe(E) * 12), g) {
            case 0:
              _ = E.name;
              break;
            case 1:
              _ = bt ? "-" : E.cp ? `${E.cp.workDaysTotal + E.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              _ = bt ? "-" : E.cp ? `${E.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              _ = bt ? "-" : E.cp ? `${E.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (M && (q = ze(E) * 12), g) {
            case 0:
              _ = E.name;
              break;
            case 1:
              _ = E.task ? String(E.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              _ = E.task ? String(E.task.netWorkDays) : "-";
              break;
            case 3:
              _ = E.task ? String(E.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              _ = ye(E.startDate, "yyyy-MM-dd");
              break;
            case 5:
              _ = ye(E.endDate, "yyyy-MM-dd");
              break;
          }
        const de = Ke(_, M ? 14 : 12, M ? "500" : "normal") + $ + q;
        T = Math.max(T, de);
      }), Math.max(d, Math.ceil(T));
    }, [e, t, De, Ke, Qe, ze]), ut = W((g, d) => {
      g.preventDefault(), g.stopPropagation(), Ie.current = !1, qe(null);
      const M = Je(d);
      Re(($) => {
        const v = [...$];
        return v[d] = M, v;
      });
    }, [Je, Re]), je = W((g, d, M) => {
      if (!g.task || !o) return;
      const $ = {
        ...g,
        task: {
          ...g.task,
          [d]: M
        }
      };
      o($);
    }, [o]), ht = W((g, d) => {
      g.dataTransfer.effectAllowed = "move", g.dataTransfer.setData("text/plain", d), B(d);
      const M = document.createElement("div");
      M.style.opacity = "0", document.body.appendChild(M), g.dataTransfer.setDragImage(M, 0, 0), setTimeout(() => document.body.removeChild(M), 0);
    }, []), ft = W((g, d, M) => {
      if (g.preventDefault(), g.dataTransfer.dropEffect = "move", d === C) return;
      const $ = g.currentTarget.getBoundingClientRect(), v = g.clientY - $.top, T = $.height;
      let E;
      M ? v < T / 3 ? E = "before" : v < T * 2 / 3 ? E = "into" : E = "after" : E = v < T / 2 ? "before" : "after", ae(d), A(E);
    }, [C]), mt = W(() => {
      ae(null), A(null);
    }, []), We = W((g, d) => {
      if (g.preventDefault(), !C || C === d || !te) {
        B(null), ae(null), A(null);
        return;
      }
      if (k)
        k(C, d, te);
      else if (f && te !== "into") {
        const M = e.findIndex((v) => v.id === d), $ = te === "after" ? M + 1 : M;
        f(C, $);
      }
      B(null), ae(null), A(null);
    }, [C, te, k, f, e]), xt = W(() => {
      B(null), ae(null), A(null);
    }, []), gt = W((g, d, M) => {
      if (C) return;
      const $ = g.ctrlKey || g.metaKey, v = g.shiftKey;
      if ($)
        Q((T) => {
          const E = new Set(T);
          return E.has(d.id) ? E.delete(d.id) : E.add(d.id), E;
        }), ie(M);
      else if (v && re !== null) {
        const T = Math.min(re, M), E = Math.max(re, M);
        Q((_) => {
          const q = new Set(_);
          for (let me = T; me <= E; me++)
            e[me] && q.add(e[me].id);
          return q;
        });
      } else
        Q(/* @__PURE__ */ new Set([d.id])), ie(M);
    }, [C, re, e]), Ue = W((g, d) => {
      g.preventDefault(), X.has(d.id) || Q(/* @__PURE__ */ new Set([d.id])), N({
        x: g.clientX,
        y: g.clientY,
        taskId: d.id
      });
    }, [X]);
    ce(() => {
      const g = () => {
        N(null);
      };
      if (J)
        return document.addEventListener("click", g), () => document.removeEventListener("click", g);
    }, [J]), ce(() => {
      const g = (d) => {
        d.key === "Escape" && (Q(/* @__PURE__ */ new Set()), N(null), h(null));
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, []);
    const Se = W((g) => {
      h(g.id), P(g.name), setTimeout(() => {
        var d, M;
        (d = R.current) == null || d.focus(), (M = R.current) == null || M.select();
      }, 0);
    }, []), Ze = W((g) => {
      const d = e.find((M) => M.id === g);
      d && o && Se(d);
    }, [e, o, Se]), pe = W(() => {
      if (!x || !o) {
        h(null);
        return;
      }
      const g = e.find((d) => d.id === x);
      g && D.trim() && D !== g.name && o({
        ...g,
        name: D.trim()
      }), h(null), P("");
    }, [x, D, e, o]), et = W(() => {
      h(null), P("");
    }, []), tt = W((g) => {
      g.key === "Enter" ? (g.preventDefault(), pe()) : g.key === "Escape" && (g.preventDefault(), et());
    }, [pe, et]), Le = () => /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: se.map((g, d) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: g.width },
        children: [
          g.label,
          d < se.length - 1 && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${Be === d ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (M) => Mt(M, d),
              onDoubleClick: (M) => ut(M, d),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          d < se.length - 1 && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      g.id
    )) }), rt = X.size === 1 ? e.find((g) => g.id === Array.from(X)[0] && g.type === "GROUP") : null, Wt = X.size >= 1 && y && !rt, yt = rt && m, Fe = () => !Wt && !yt && X.size === 0 ? null : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      X.size > 0 && /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500", children: [
        X.size,
        "개 선택"
      ] }),
      yt && /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: () => {
            m(rt.id), Q(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors",
          title: "그룹 해제",
          children: [
            /* @__PURE__ */ s.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
            "해제"
          ]
        }
      ),
      X.size > 0 && /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: () => Q(/* @__PURE__ */ new Set()),
          className: "flex items-center justify-center rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors",
          title: "선택 해제 (ESC)",
          children: /* @__PURE__ */ s.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] });
    return t === "MASTER" ? /* @__PURE__ */ s.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: er },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ s.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              Fe()
            ] }),
            Le()
          ]
        }
      ),
      Be !== null && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ s.jsxs("div", { ref: F, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: tr, minWidth: be },
            children: se.map((g, d) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: g.width },
                children: d === 0 && "Milestone"
              },
              g.id
            ))
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              minWidth: be,
              height: L ? w : void 0,
              position: "relative"
            },
            children: [
              (L ? u : e.map((g, d) => ({ index: d, start: d * $e, size: $e, key: d }))).map((g) => {
                const d = e[g.index];
                if (!d) return null;
                const M = d.type === "GROUP", $ = M && r.some((j) => j.parentId === d.id), v = n.has(d.id), E = Qe(d) * 12, _ = C === d.id, q = ee === d.id, me = X.has(d.id);
                return /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    draggable: !!(f || k),
                    onDragStart: (j) => ht(j, d.id),
                    onDragOver: (j) => ft(j, d.id, M),
                    onDragLeave: mt,
                    onDrop: (j) => We(j, d.id),
                    onDragEnd: xt,
                    onClick: (j) => gt(j, d, g.index),
                    onContextMenu: (j) => Ue(j, d),
                    className: `box-border flex items-center border-b transition-all duration-150 ${_ ? "opacity-50 bg-blue-50" : q ? te === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : te === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : me ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : M ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: $e,
                      ...L ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${g.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !M && i(d),
                    title: M ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      f && /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ s.jsx(Qt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? se[0].width - 24 : se[0].width, paddingLeft: E + 8 },
                          children: [
                            $ ? /* @__PURE__ */ s.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), a(d.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: v ? /* @__PURE__ */ s.jsx(qt, { size: 14 }) : /* @__PURE__ */ s.jsx(Kt, { size: 14 })
                              }
                            ) : /* @__PURE__ */ s.jsx("div", { className: "w-6 shrink-0" }),
                            x === d.id ? /* @__PURE__ */ s.jsx(
                              "input",
                              {
                                ref: R,
                                type: "text",
                                value: D,
                                onChange: (j) => P(j.target.value),
                                onKeyDown: tt,
                                onBlur: pe,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${M ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), Se(d));
                                },
                                title: o ? "더블클릭하여 이름 편집" : void 0,
                                children: d.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: se[1].width },
                          children: M ? "-" : d.cp ? `${d.cp.workDaysTotal + d.cp.nonWorkDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                          style: { width: se[2].width },
                          children: M ? "-" : d.cp ? `${d.cp.workDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-teal",
                          style: { width: se[3].width },
                          children: M ? "-" : d.cp ? `${d.cp.nonWorkDaysTotal}일` : "-"
                        }
                      )
                    ]
                  },
                  g.key
                );
              }),
              G && /* @__PURE__ */ s.jsx(
                os,
                {
                  columns: se,
                  tasks: e,
                  onTaskCreate: l,
                  onCancel: z || (() => {
                  }),
                  isVirtualized: L,
                  virtualRowIndex: e.length,
                  dragHandleWidth: Ae
                }
              )
            ]
          }
        )
      ] }),
      J && /* @__PURE__ */ s.jsx(
        Jt,
        {
          x: J.x,
          y: J.y,
          taskId: J.taskId,
          selectedTaskIds: X,
          tasks: e,
          onTaskGroup: y,
          onTaskUngroup: m,
          onTaskDelete: b,
          onStartRename: Ze,
          onClose: () => N(null),
          onDeselect: () => Q(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: er },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ s.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              Fe()
            ] }),
            Le()
          ]
        }
      ),
      Be !== null && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ s.jsxs("div", { ref: F, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: tr, minWidth: be },
            children: se.map((g, d) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: g.width },
                children: d === 0 && "Milestone"
              },
              g.id
            ))
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              minWidth: be,
              height: L ? w : void 0,
              position: "relative"
            },
            children: [
              (L ? u : e.map((g, d) => ({ index: d, start: d * $e, size: $e, key: d }))).map((g) => {
                const d = e[g.index];
                if (!d) return null;
                const M = d.type === "GROUP", $ = M && r.some((j) => j.parentId === d.id), v = n.has(d.id), E = ze(d) * 12, _ = C === d.id, q = ee === d.id, me = X.has(d.id);
                return /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    draggable: !!(f || k),
                    onDragStart: (j) => ht(j, d.id),
                    onDragOver: (j) => ft(j, d.id, M),
                    onDragLeave: mt,
                    onDrop: (j) => We(j, d.id),
                    onDragEnd: xt,
                    onClick: (j) => gt(j, d, g.index),
                    onDoubleClick: () => {
                      !M && d.type === "TASK" && H && H(d);
                    },
                    onContextMenu: (j) => Ue(j, d),
                    className: `box-border flex items-center border-b transition-colors ${_ ? "opacity-50 bg-blue-50" : q ? te === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : te === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : me ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : M ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50 cursor-pointer"}`,
                    style: {
                      height: $e,
                      ...L ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${g.start}px)`
                      } : {}
                    },
                    title: !M && d.type === "TASK" ? "더블클릭하여 공정 설정" : void 0,
                    children: [
                      f && /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ s.jsx(Qt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? se[0].width - 24 : se[0].width, paddingLeft: E + 8 },
                          children: [
                            $ ? /* @__PURE__ */ s.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), a(d.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: v ? /* @__PURE__ */ s.jsx(qt, { size: 14 }) : /* @__PURE__ */ s.jsx(Kt, { size: 14 })
                              }
                            ) : /* @__PURE__ */ s.jsx("div", { className: "w-6 shrink-0" }),
                            x === d.id ? /* @__PURE__ */ s.jsx(
                              "input",
                              {
                                ref: R,
                                type: "text",
                                value: D,
                                onChange: (j) => P(j.target.value),
                                onKeyDown: tt,
                                onBlur: pe,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${M ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), Se(d));
                                },
                                title: o ? "더블클릭하여 이름 편집" : void 0,
                                children: d.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: se[1].width },
                          children: d.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "decimal",
                              pattern: "[0-9]*\\.?[0-9]?",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: (S == null ? void 0 : S.taskId) === d.id && (S == null ? void 0 : S.field) === "pre" ? S.value : d.task.indirectWorkDaysPre,
                              onFocus: () => ne({ taskId: d.id, field: "pre", value: String(d.task.indirectWorkDaysPre) }),
                              onChange: (j) => {
                                const de = j.target.value.replace(/[^0-9.]/g, "");
                                ne({ taskId: d.id, field: "pre", value: de });
                              },
                              onBlur: () => {
                                if (S && S.taskId === d.id && S.field === "pre") {
                                  const j = parseFloat(S.value) || 0, de = Math.round(j * 10) / 10;
                                  je(d, "indirectWorkDaysPre", de), ne(null);
                                }
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+") && j.preventDefault(), j.key === "Enter" && j.target.blur();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: se[2].width },
                          children: d.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "decimal",
                              pattern: "[0-9]*\\.?[0-9]?",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: (S == null ? void 0 : S.taskId) === d.id && (S == null ? void 0 : S.field) === "net" ? S.value : d.task.netWorkDays,
                              onFocus: () => ne({ taskId: d.id, field: "net", value: String(d.task.netWorkDays) }),
                              onChange: (j) => {
                                const de = j.target.value.replace(/[^0-9.]/g, "");
                                ne({ taskId: d.id, field: "net", value: de });
                              },
                              onBlur: () => {
                                if (S && S.taskId === d.id && S.field === "net") {
                                  const j = parseFloat(S.value) || 0, de = Math.round(j * 10) / 10;
                                  je(d, "netWorkDays", de), ne(null);
                                }
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+") && j.preventDefault(), j.key === "Enter" && j.target.blur();
                              },
                              title: "순작업일 (0.1 단위)"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: se[3].width },
                          children: d.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "decimal",
                              pattern: "[0-9]*\\.?[0-9]?",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: (S == null ? void 0 : S.taskId) === d.id && (S == null ? void 0 : S.field) === "post" ? S.value : d.task.indirectWorkDaysPost,
                              onFocus: () => ne({ taskId: d.id, field: "post", value: String(d.task.indirectWorkDaysPost) }),
                              onChange: (j) => {
                                const de = j.target.value.replace(/[^0-9.]/g, "");
                                ne({ taskId: d.id, field: "post", value: de });
                              },
                              onBlur: () => {
                                if (S && S.taskId === d.id && S.field === "post") {
                                  const j = parseFloat(S.value) || 0, de = Math.round(j * 10) / 10;
                                  je(d, "indirectWorkDaysPost", de), ne(null);
                                }
                              },
                              onKeyDown: (j) => {
                                (j.key === "-" || j.key === "e" || j.key === "+") && j.preventDefault(), j.key === "Enter" && j.target.blur();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능, 0.1 단위)"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: se[4].width },
                          children: ye(d.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: se[5].width },
                          children: ye(d.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  g.key
                );
              }),
              O && c && /* @__PURE__ */ s.jsx(
                is,
                {
                  columns: se,
                  tasks: e,
                  activeCPId: c,
                  onTaskCreate: l,
                  onCancel: I || (() => {
                  }),
                  isVirtualized: L,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      J && /* @__PURE__ */ s.jsx(
        Jt,
        {
          x: J.x,
          y: J.y,
          taskId: J.taskId,
          selectedTaskIds: X,
          tasks: e,
          onTaskGroup: y,
          onTaskUngroup: m,
          onTaskDelete: b,
          onStartRename: Ze,
          onClose: () => N(null),
          onDeselect: () => Q(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
Nr.displayName = "GanttSidebar";
const Ge = (e, r = [], t) => !!(!t.workOnSaturdays && gr(e) || !t.workOnSundays && yr(e) || !t.workOnHolidays && r.some((n) => Ir(n, e))), Ks = (e) => gr(e) || yr(e), ls = (e, r, t = [], n) => {
  let a = new Date(e), i = 0;
  if (r <= 0) return a;
  const o = Math.ceil(r);
  for (; Ge(a, t, n); )
    a = U(a, 1);
  for (; i < o; )
    Ge(a, t, n) || i++, i < o && (a = U(a, 1));
  return a;
}, Qs = (e, r, t = [], n) => {
  let a = new Date(e), i = 0;
  if (r <= 0) return a;
  for (; i < r; )
    a = U(a, -1), Ge(a, t, n) || i++;
  return a;
}, sr = (e, r) => {
  if (r <= 0) return e;
  const t = Math.ceil(r);
  return U(e, t - 1);
}, Js = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: a, indirectWorkDaysPost: i } = e.task, o = ot(new Date(e.startDate));
  let l = o, f, c;
  a > 0 && (f = l, c = sr(l, a), l = U(c, 1));
  let u = l, w = u;
  if (n > 0) {
    for (; Ge(u, r, t); )
      u = U(u, 1);
    w = ls(u, n, r, t), l = U(w, 1);
  } else a === 0 && (u = o, w = o);
  let p, y;
  return i > 0 && (p = l, y = sr(l, i)), {
    startDate: f || u,
    endDate: y || w,
    netWorkStartDate: u,
    netWorkEndDate: w,
    indirectPreStartDate: f,
    indirectPreEndDate: c,
    indirectPostStartDate: p,
    indirectPostEndDate: y
  };
}, Us = (e, r, t) => {
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
}, lt = (e, r, t) => Rt(e, r) * t, Zs = (e, r, t) => {
  const n = Math.round(e / t);
  return U(r, n);
}, ea = (e, r, t) => (Rt(r, e) + 1) * t, ta = (e) => Dt[e].pixelsPerDay, Er = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((c) => [c.startDate, c.endDate].filter(Boolean)),
    ...r.map((c) => c.date)
  ];
  if (n.length === 0) {
    const c = /* @__PURE__ */ new Date();
    return {
      minDate: c,
      maxDate: U(c, 30),
      totalDays: 30
    };
  }
  const a = new Date(Math.min(...n.map((c) => c.getTime()))), i = new Date(Math.max(...n.map((c) => c.getTime()))), o = U(a, -t), l = U(i, t), f = Rt(l, o);
  return {
    minDate: o,
    maxDate: l,
    totalDays: f
  };
}, { ROW_HEIGHT: ge, HEADER_HEIGHT: cs, MILESTONE_LANE_HEIGHT: we, BAR_HEIGHT: oe } = Ne, ds = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: a,
  calendarSettings: i
}) => {
  const o = Array.from({ length: r }, (p, y) => U(e, y)), l = r * t, f = ve(() => {
    const p = [];
    let y = Pt(o[0]), m = 0;
    return o.forEach((b) => {
      Pt(b) !== y ? (p.push({ label: `${y}년`, days: m }), y = Pt(b), m = 1) : m++;
    }), p.push({ label: `${y}년`, days: m }), p;
  }, [o]), c = ve(() => {
    const p = [];
    let y = o[0], m = 0;
    return o.forEach((b) => {
      Hn(b, y) ? m++ : (p.push({ label: ye(y, "M월"), days: m }), y = b, m = 1);
    }), p.push({ label: ye(y, "M월"), days: m }), p;
  }, [o]), u = ve(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: o.map((p, y) => {
        const m = Nt(p), b = Ge(p, a, i), k = m === 0, O = m === 6;
        let I = "text-gray-600";
        k && (I = "text-red-500"), O && (I = "text-blue-500"), b && !k && !O && (I = "text-red-500");
        let G = "";
        return k || b && !O ? G = "bg-red-50/50" : O && (G = "bg-blue-50/50"), /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${G}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ s.jsx("span", { className: `text-[10px] leading-none ${I}`, children: ye(p, "d") }),
              /* @__PURE__ */ s.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${I}`, children: ["일", "월", "화", "수", "목", "금", "토"][m] })
            ]
          },
          y
        );
      }) });
    {
      const p = [];
      let y = o[0], m = 0;
      return o.forEach((b) => {
        Fn(b, y, { weekStartsOn: 0 }) ? m++ : (p.push({ label: `${Vt(y, { weekStartsOn: 0 })}주`, days: m }), y = b, m = 1);
      }), p.push({ label: `${Vt(y, { weekStartsOn: 0 })}주`, days: m }), /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: p.map((b, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: b.days * t },
          children: b.label
        },
        k
      )) });
    }
  }, [o, n, t, a, i, l]), w = n === "MONTH";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: cs, minWidth: l },
      children: w ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: f.map((p, y) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: p.days * t },
                children: p.label
              },
              y
            ))
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: c.map((p, y) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: p.days * t },
                children: p.label
              },
              y
            ))
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: f.map((p, y) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: p.days * t },
                children: p.label
              },
              y
            ))
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: c.map((p, y) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: p.days * t },
                children: p.label
              },
              y
            ))
          }
        ),
        u
      ] })
    }
  );
}, us = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: a,
  calendarSettings: i,
  zoomLevel: o
}) => {
  const l = ve(() => {
    if (o === "MONTH") return [];
    const f = [];
    for (let c = 0; c < r; c++) {
      const u = U(e, c), w = Nt(u), p = w === 0, y = w === 6;
      if (Ge(u, a, i) || y) {
        const b = c * n;
        let k = "rgba(254, 242, 242, 0.5)";
        y && !p && (k = "rgba(239, 246, 255, 0.5)"), p && (k = "rgba(254, 242, 242, 0.5)"), f.push(
          /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: b,
              y: 0,
              width: n,
              height: t,
              fill: k,
              className: "pointer-events-none"
            },
            `weekend-${c}`
          )
        );
      }
    }
    return f;
  }, [e, r, t, n, a, i, o]);
  return /* @__PURE__ */ s.jsx("g", { children: l });
}, hs = (e, r, t) => {
  if (e.length === 0) return [];
  const n = 25, a = 12, i = 8, o = e.map((u) => ({
    milestone: u,
    x: lt(u.date, r, t),
    labelLevel: 0,
    labelWidth: u.name.length * a + n
  })).sort((u, w) => u.x - w.x), l = [], f = [], c = [];
  for (const u of o) {
    const w = u.labelWidth, p = u.x - w, y = u.x - i;
    if (!f.some((b) => p < b + i))
      f.push(y), l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: 0
      });
    else {
      const b = u.x + i, k = u.x + w;
      c.some(
        (I) => !(k < I.start || b > I.end)
      ) ? l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: -1
      }) : (c.push({ start: b, end: k }), l.push({
        milestone: u.milestone,
        x: u.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, fs = ({
  milestone: e,
  x: r,
  labelLevel: t = 0,
  isDragging: n = !1,
  dragX: a,
  onMouseDown: i,
  onDoubleClick: o
}) => {
  const f = we / 2, c = n && a !== void 0 ? a : r;
  let u, w, p;
  t === 0 ? (u = -8, w = 4, p = "end") : t === 1 ? (u = 8, w = 4, p = "start") : (u = 0, w = 18, p = "middle");
  const y = (b) => {
    i && (b.preventDefault(), b.stopPropagation(), i(b, e));
  }, m = (b) => {
    o && (b.preventDefault(), b.stopPropagation(), o(e));
  };
  return /* @__PURE__ */ s.jsxs(
    "g",
    {
      transform: `translate(${c}, ${f})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${n ? "cursor-ew-resize" : ""}`,
      onMouseDown: y,
      onDoubleClick: m,
      children: [
        /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1e3,
            stroke: n ? "#3B82F6" : "#9CA3AF",
            strokeWidth: n ? 3 : 2,
            strokeDasharray: "4, 4",
            className: n ? "opacity-100" : "opacity-80"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
            fill: n ? "#3B82F6" : Te.milestone,
            stroke: "white",
            strokeWidth: 1,
            className: "drop-shadow-sm transition-transform duration-150 group-hover:scale-[1.3]",
            style: {
              transformOrigin: "center",
              transformBox: "fill-box",
              transform: n ? "scale(1.3)" : void 0
            }
          }
        ),
        /* @__PURE__ */ s.jsx(
          "circle",
          {
            cx: 0,
            cy: 0,
            r: 12,
            fill: "transparent",
            className: "cursor-ew-resize"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "text",
          {
            x: u,
            y: w,
            textAnchor: p,
            className: `select-none text-[11px] font-bold transition-colors ${n ? "fill-blue-700" : "fill-gray-600 group-hover:fill-blue-700"}`,
            children: e.name
          }
        )
      ]
    }
  );
}, ms = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: a,
  isDraggable: i = !1,
  dragInfo: o,
  onDragStart: l,
  onDoubleClick: f
}) => {
  var m, b;
  if (e.type === "GROUP") return null;
  const c = 4, u = !!o, w = (o == null ? void 0 : o.startDate) || e.startDate, p = (o == null ? void 0 : o.endDate) || e.endDate, y = lt(w, t, n);
  if (a) {
    const k = ((m = e.cp) == null ? void 0 : m.workDaysTotal) || 0, O = ((b = e.cp) == null ? void 0 : b.nonWorkDaysTotal) || 0;
    if (k + O === 0) return null;
    const G = k * n, z = O * n;
    return /* @__PURE__ */ s.jsxs("g", { transform: `translate(${y}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: G,
          height: oe,
          fill: Te.vermilion,
          rx: c,
          ry: c,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: G,
          y: 0,
          width: z,
          height: oe,
          fill: Te.teal,
          rx: c,
          ry: c,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "text",
        {
          x: -8,
          y: oe / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: k, indirectWorkDaysPre: O, indirectWorkDaysPost: I, indirectWorkNamePre: G, indirectWorkNamePost: z } = e.task, H = (o == null ? void 0 : o.indirectWorkDaysPre) ?? O, F = (o == null ? void 0 : o.indirectWorkDaysPost) ?? I, L = (o == null ? void 0 : o.netWorkDays) ?? k, C = H * n, B = L * n, ee = F * n, ae = C + B + ee, te = 0, A = C, X = C + B, Q = 8, re = 6, ie = {
      startDate: w,
      endDate: p,
      indirectWorkDaysPre: H,
      netWorkDays: L,
      indirectWorkDaysPost: F
    };
    return /* @__PURE__ */ s.jsxs(
      "g",
      {
        transform: `translate(${y}, ${r})`,
        className: `group ${u ? "opacity-90" : ""} ${f ? "cursor-pointer" : ""}`,
        onDoubleClick: f,
        children: [
          H > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: te,
                y: 0,
                width: C,
                height: oe,
                fill: Te.blue,
                rx: c,
                ry: c,
                className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
                style: { pointerEvents: "none" }
              }
            ),
            G && /* @__PURE__ */ s.jsx(
              "text",
              {
                x: te + C / 2,
                y: oe + 11,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-blue-600 font-medium",
                children: G
              }
            )
          ] }),
          L > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: A,
              y: 0,
              width: B,
              height: oe,
              fill: Te.red,
              rx: c,
              ry: c,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: "none" }
            }
          ),
          F > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: X,
                y: 0,
                width: ee,
                height: oe,
                fill: Te.blue,
                rx: c,
                ry: c,
                className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
                style: { pointerEvents: "none" }
              }
            ),
            z && /* @__PURE__ */ s.jsx(
              "text",
              {
                x: X + ee / 2,
                y: oe + 11,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-blue-600 font-medium",
                children: z
              }
            )
          ] }),
          i && L > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: A + re,
              y: 0,
              width: Math.max(0, B - re * 2),
              height: oe,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (J) => l == null ? void 0 : l(J, e.id, "move", ie),
              children: /* @__PURE__ */ s.jsx("title", { children: "전체 이동 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: -Q / 2,
              y: 0,
              width: Q,
              height: oe,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (J) => l == null ? void 0 : l(J, e.id, "resize-pre", ie),
              children: /* @__PURE__ */ s.jsxs("title", { children: [
                H > 0 ? "앞 간접작업일 조절" : "순작업일 조절",
                " (드래그)"
              ] })
            }
          ),
          i && H > 0 && L > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: C - re / 2,
              y: 0,
              width: re,
              height: oe,
              fill: "transparent",
              className: "cursor-col-resize",
              onMouseDown: (J) => l == null ? void 0 : l(J, e.id, "resize-pre-net", ie),
              children: /* @__PURE__ */ s.jsx("title", { children: "앞간접-순작업 경계 조절 (드래그)" })
            }
          ),
          i && F > 0 && L > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: X - re / 2,
              y: 0,
              width: re,
              height: oe,
              fill: "transparent",
              className: "cursor-col-resize",
              onMouseDown: (J) => l == null ? void 0 : l(J, e.id, "resize-net-post", ie),
              children: /* @__PURE__ */ s.jsx("title", { children: "순작업-뒤간접 경계 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: ae - Q / 2,
              y: 0,
              width: Q,
              height: oe,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (J) => l == null ? void 0 : l(J, e.id, "resize-post", ie),
              children: /* @__PURE__ */ s.jsxs("title", { children: [
                F > 0 ? "뒤 간접작업일 조절" : "순작업일 조절",
                " (드래그)"
              ] })
            }
          ),
          i && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: 1,
                y: oe / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: ae - 4,
                y: oe / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            H > 0 && L > 0 && /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: C - 1.5,
                y: oe / 2 - 4,
                width: 3,
                height: 8,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
              }
            ),
            F > 0 && L > 0 && /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: X - 1.5,
                y: oe / 2 - 4,
                width: 3,
                height: 8,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            "text",
            {
              x: -8,
              y: oe / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          u && /* @__PURE__ */ s.jsxs("g", { children: [
            /* @__PURE__ */ s.jsxs(
              "text",
              {
                x: ae / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  ye(w, "MM/dd"),
                  " ~ ",
                  ye(p, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "text",
              {
                x: ae / 2,
                y: oe + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  H,
                  "일 + 순",
                  L,
                  "일 + 뒤",
                  F,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, xs = () => /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ s.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: Te.dependency })
  }
) }), Mr = jt(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: a, calendarSettings: i, onBarDrag: o, onMilestoneUpdate: l, onMilestoneDoubleClick: f, onTaskDoubleClick: c, virtualRows: u, totalHeight: w }, p) => {
    const y = Dt[n].pixelsPerDay, m = t === "MASTER", b = u && u.length > 0, [k, O] = Y(null), [I, G] = Y(null), z = ue(null);
    ce(() => {
      z.current = I;
    }, [I]);
    const { minDate: H, totalDays: F } = ve(() => Er(e, r, 60), [e, r]), L = ve(() => hs(r, H, y), [r, H, y]), C = F * y, B = Math.max(b ? (w || 0) + we + 100 : e.length * ge + we + 100, 500), ee = ue(null);
    ce(() => {
      ee.current = k;
    }, [k]);
    const ae = W((N, x) => {
      if (!l) return;
      N.preventDefault(), N.stopPropagation();
      const h = lt(x.date, H, y), D = {
        milestoneId: x.id,
        startX: N.clientX,
        originalDate: x.date,
        currentX: h
      };
      G(D);
    }, [l, H, y]), te = W((N) => {
      const x = z.current;
      if (!x) return;
      const h = N.clientX - x.startX, D = lt(x.originalDate, H, y), P = Math.max(0, D + h);
      G((R) => R ? { ...R, currentX: P } : null);
    }, [H, y]), A = W((N) => {
      const x = z.current;
      if (!x || !l) {
        G(null);
        return;
      }
      const h = N.clientX - x.startX, D = Math.round(h / y);
      if (D !== 0) {
        const P = U(x.originalDate, D), R = r.find((S) => S.id === x.milestoneId);
        R && l({
          ...R,
          date: P
        });
      }
      G(null);
    }, [l, y, r]);
    ce(() => {
      if (I)
        return window.addEventListener("mousemove", te), window.addEventListener("mouseup", A), () => {
          window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", A);
        };
    }, [I, te, A]);
    const X = W((N) => {
      f && f(N);
    }, [f]), Q = W((N, x, h, D) => {
      if (!o) return;
      N.preventDefault(), N.stopPropagation();
      const P = {
        taskId: x,
        dragType: h,
        startX: N.clientX,
        originalStartDate: D.startDate,
        originalEndDate: D.endDate,
        originalIndirectWorkDaysPre: D.indirectWorkDaysPre,
        originalNetWorkDays: D.netWorkDays,
        originalIndirectWorkDaysPost: D.indirectWorkDaysPost,
        currentStartDate: D.startDate,
        currentEndDate: D.endDate,
        currentIndirectWorkDaysPre: D.indirectWorkDaysPre,
        currentNetWorkDays: D.netWorkDays,
        currentIndirectWorkDaysPost: D.indirectWorkDaysPost
      };
      O(P), ee.current = P;
    }, [o]), re = W((N) => {
      const x = ee.current;
      if (!x || !o) return;
      const h = N.clientX - x.startX, D = Math.round(h / y * 10) / 10;
      let P = x.originalStartDate, R = x.originalEndDate, S = x.originalIndirectWorkDaysPre, ne = x.originalNetWorkDays, V = x.originalIndirectWorkDaysPost;
      if (x.dragType === "move")
        P = U(x.originalStartDate, D), R = U(x.originalEndDate, D);
      else if (x.dragType === "move-net") {
        const Z = x.originalIndirectWorkDaysPost, he = x.originalIndirectWorkDaysPre, fe = Math.max(-he, Math.min(Z, D));
        S = x.originalIndirectWorkDaysPre + fe, V = x.originalIndirectWorkDaysPost - fe, P = x.originalStartDate, R = x.originalEndDate;
      } else if (x.dragType === "resize-pre")
        if (x.originalIndirectWorkDaysPre > 0) {
          S = Math.max(0, x.originalIndirectWorkDaysPre - D);
          const Z = U(x.originalStartDate, x.originalIndirectWorkDaysPre);
          P = U(Z, -S), R = x.originalEndDate;
        } else {
          ne = Math.max(1, x.originalNetWorkDays - D);
          const Z = U(
            x.originalStartDate,
            x.originalNetWorkDays - 1
          );
          P = U(Z, -(ne - 1)), R = x.originalEndDate;
        }
      else if (x.dragType === "resize-post")
        if (x.originalIndirectWorkDaysPost > 0) {
          V = Math.max(0, x.originalIndirectWorkDaysPost + D);
          const Z = U(x.originalEndDate, -x.originalIndirectWorkDaysPost);
          R = U(Z, V), P = x.originalStartDate;
        } else
          ne = Math.max(1, x.originalNetWorkDays + D), R = U(x.originalStartDate, ne - 1), P = x.originalStartDate;
      else if (x.dragType === "resize-pre-net") {
        const Z = x.originalNetWorkDays - 1, he = x.originalIndirectWorkDaysPre, fe = Math.max(-he, Math.min(Z, D));
        S = x.originalIndirectWorkDaysPre + fe, ne = x.originalNetWorkDays - fe, P = x.originalStartDate, R = x.originalEndDate;
      } else if (x.dragType === "resize-net-post") {
        const Z = x.originalIndirectWorkDaysPost, he = x.originalNetWorkDays - 1, fe = Math.max(-he, Math.min(Z, D));
        ne = x.originalNetWorkDays + fe, V = x.originalIndirectWorkDaysPost - fe, P = x.originalStartDate, R = x.originalEndDate;
      }
      O((Z) => Z ? {
        ...Z,
        currentStartDate: P,
        currentEndDate: R,
        currentIndirectWorkDaysPre: S,
        currentNetWorkDays: ne,
        currentIndirectWorkDaysPost: V
      } : null);
    }, [o, y]), ie = W(() => {
      const N = ee.current;
      if (!N || !o) {
        O(null), ee.current = null;
        return;
      }
      const x = N.currentStartDate.getTime() !== N.originalStartDate.getTime() || N.currentEndDate.getTime() !== N.originalEndDate.getTime(), h = N.currentIndirectWorkDaysPre !== N.originalIndirectWorkDaysPre || N.currentNetWorkDays !== N.originalNetWorkDays || N.currentIndirectWorkDaysPost !== N.originalIndirectWorkDaysPost;
      (x || h) && o({
        taskId: N.taskId,
        dragType: N.dragType,
        newStartDate: N.currentStartDate,
        newEndDate: N.currentEndDate,
        newIndirectWorkDaysPre: N.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: N.currentIndirectWorkDaysPost,
        newNetWorkDays: N.currentNetWorkDays
      }), O(null), ee.current = null;
    }, [o]);
    ce(() => {
      if (k) {
        window.addEventListener("mousemove", re), window.addEventListener("mouseup", ie);
        let N = "ew-resize";
        return k.dragType === "move" || k.dragType === "move-net" ? N = "grabbing" : (k.dragType === "resize-pre-net" || k.dragType === "resize-net-post") && (N = "col-resize"), document.body.style.cursor = N, document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", re), window.removeEventListener("mouseup", ie), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
      }
    }, [k, re, ie]);
    const J = W((N) => k && k.taskId === N ? {
      startDate: k.currentStartDate,
      endDate: k.currentEndDate,
      indirectWorkDaysPre: k.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: k.currentIndirectWorkDaysPost,
      netWorkDays: k.currentNetWorkDays
    } : null, [k]);
    return /* @__PURE__ */ s.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ s.jsxs("div", { ref: p, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ s.jsx(
        ds,
        {
          minDate: H,
          totalDays: F,
          pixelsPerDay: y,
          zoomLevel: n,
          holidays: a,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ s.jsxs("svg", { width: C, height: B, className: "block bg-white", children: [
        /* @__PURE__ */ s.jsx(xs, {}),
        /* @__PURE__ */ s.jsx(
          us,
          {
            minDate: H,
            totalDays: F,
            chartHeight: B,
            pixelsPerDay: y,
            holidays: a,
            calendarSettings: i,
            zoomLevel: n
          }
        ),
        (b ? u : e.map((N, x) => ({ index: x, start: x * ge, size: ge, key: x }))).map((N) => {
          const x = e[N.index];
          if (!x || x.type !== "GROUP") return null;
          const h = N.start + we;
          return /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: 0,
              y: h,
              width: C,
              height: ge,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${N.key}`
          );
        }),
        Array.from({ length: F }, (N, x) => {
          const h = (x + 1) * y, D = U(H, x), P = Nt(D);
          let R = !1, S = "#f0f0f0";
          return n === "DAY" ? (R = !0, S = P === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (R = P === 0, S = "#e5e7eb") : n === "MONTH" && (R = P === 0, S = "#f0f0f0"), R ? /* @__PURE__ */ s.jsx(
            "line",
            {
              x1: h,
              y1: 0,
              x2: h,
              y2: B,
              stroke: S,
              strokeWidth: 1
            },
            `vline-${x}`
          ) : null;
        }),
        (b ? u : e.map((N, x) => ({ index: x, start: x * ge, size: ge, key: x }))).map((N) => /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: 0,
            y1: N.start + ge + we,
            x2: C,
            y2: N.start + ge + we,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${N.key}`
        )),
        /* @__PURE__ */ s.jsx("rect", { x: 0, y: 0, width: C, height: we, fill: "transparent" }),
        L.map((N) => {
          const x = (I == null ? void 0 : I.milestoneId) === N.milestone.id;
          return /* @__PURE__ */ s.jsx(
            fs,
            {
              milestone: N.milestone,
              x: N.x,
              labelLevel: N.labelLevel,
              isDragging: x,
              dragX: x ? I == null ? void 0 : I.currentX : void 0,
              onMouseDown: l ? ae : void 0,
              onDoubleClick: f ? X : void 0
            },
            N.milestone.id
          );
        }),
        /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: 0,
            y1: we,
            x2: C,
            y2: we,
            stroke: Te.grid,
            strokeWidth: 1
          }
        ),
        (b ? u : e.map((N, x) => ({ index: x, start: x * ge, size: ge, key: x }))).map((N) => {
          const x = e[N.index];
          if (!x) return null;
          const h = N.start + (ge - oe) / 2 + we;
          return /* @__PURE__ */ s.jsx(
            ms,
            {
              task: x,
              y: h,
              minDate: H,
              pixelsPerDay: y,
              isMasterView: m,
              isDraggable: !m && !!o,
              dragInfo: J(x.id),
              onDragStart: Q,
              onDoubleClick: !m && x.type === "TASK" && c ? () => c(x) : void 0
            },
            N.key
          );
        })
      ] })
    ] }) });
  }
);
Mr.displayName = "GanttTimeline";
const gs = ({ milestoneName: e, onConfirm: r, onCancel: t }) => It.createPortal(
  /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "w-[360px] rounded-lg bg-white p-6 shadow-xl",
        onClick: (n) => n.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ s.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ s.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "마일스톤 삭제" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "이 작업은 되돌릴 수 없습니다" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "mb-6 rounded-md bg-gray-50 p-3", children: [
            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-600", children: "다음 마일스톤을 삭제하시겠습니까?" }),
            /* @__PURE__ */ s.jsxs("p", { className: "mt-1 flex items-center gap-2 text-sm font-medium text-gray-700", children: [
              /* @__PURE__ */ s.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-400" }),
              e
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: r,
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
), ys = ({
  milestone: e,
  isOpen: r,
  isNew: t = !1,
  onClose: n,
  onSave: a,
  onDelete: i
}) => {
  const [o, l] = Y(""), [f, c] = Y(""), [u, w] = Y(""), [p, y] = Y(!1), m = ue(null);
  ce(() => {
    e && r && (l(e.name), c(e.description || ""), w(ye(e.date, "yyyy-MM-dd")), y(!1), setTimeout(() => {
      var z, H;
      (z = m.current) == null || z.focus(), (H = m.current) == null || H.select();
    }, 100));
  }, [e, r]), ce(() => {
    const z = (H) => {
      H.key === "Escape" && r && (p ? y(!1) : n());
    };
    return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
  }, [r, p, n]);
  const b = () => {
    if (!e || !o.trim()) return;
    const z = {
      ...e,
      name: o.trim(),
      description: f.trim() || void 0,
      date: new Date(u)
    };
    a(z), n();
  }, k = () => {
    y(!0);
  }, O = () => {
    e && i && i(e.id), y(!1);
  }, I = () => {
    y(!1);
  }, G = (z) => {
    z.key === "Enter" && !z.shiftKey && (z.preventDefault(), b());
  };
  return !r || !e ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: n
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "w-full max-w-md rounded-lg bg-white shadow-xl",
        onClick: (z) => z.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: t ? "새 마일스톤" : "마일스톤 설정" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: n,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ s.jsx(Et, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(_t, { size: 14 }),
                "마일스톤 이름"
              ] }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  ref: m,
                  type: "text",
                  value: o,
                  onChange: (z) => l(z.target.value),
                  onKeyDown: G,
                  placeholder: "마일스톤 이름을 입력하세요",
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(qn, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "date",
                  value: u,
                  onChange: (z) => w(z.target.value),
                  onKeyDown: G,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(es, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  value: f,
                  onChange: (z) => c(z.target.value),
                  placeholder: "마일스톤에 대한 설명을 입력하세요",
                  rows: 3,
                  className: "w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between border-t border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsx("div", { children: !t && i && /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: k,
                className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                children: [
                  /* @__PURE__ */ s.jsx(jr, { size: 16 }),
                  "삭제"
                ]
              }
            ) }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: n,
                  className: "rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors",
                  children: "취소"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: b,
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
    p && /* @__PURE__ */ s.jsx(
      gs,
      {
        milestoneName: o || e.name,
        onConfirm: O,
        onCancel: I
      }
    )
  ] });
}, bs = ({ taskName: e, onConfirm: r, onCancel: t }) => It.createPortal(
  /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "w-[360px] rounded-lg bg-white p-6 shadow-xl",
        onClick: (n) => n.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ s.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ s.jsx("svg", { className: "h-5 w-5 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }) }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "공정 삭제" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "이 작업은 되돌릴 수 없습니다" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "mb-6 rounded-md bg-gray-50 p-3", children: [
            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-600", children: "다음 공정을 삭제하시겠습니까?" }),
            /* @__PURE__ */ s.jsxs("p", { className: "mt-1 flex items-center gap-2 text-sm font-medium text-gray-700", children: [
              /* @__PURE__ */ s.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-400" }),
              e
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end gap-3", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: t,
                className: "rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors",
                children: "취소"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: r,
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
), ps = ({
  task: e,
  isOpen: r,
  onClose: t,
  onSave: n,
  onDelete: a
}) => {
  const [i, o] = Y("0"), [l, f] = Y("1"), [c, u] = Y("0"), [w, p] = Y(""), [y, m] = Y(""), [b, k] = Y(!1), O = ue(null), I = (A) => {
    const X = parseFloat(A) || 0;
    return Math.round(X * 10) / 10;
  }, G = I(i), z = I(l), H = I(c);
  ce(() => {
    e && e.task && r && (o(String(e.task.indirectWorkDaysPre)), f(String(e.task.netWorkDays)), u(String(e.task.indirectWorkDaysPost)), p(e.task.indirectWorkNamePre || ""), m(e.task.indirectWorkNamePost || ""), k(!1), setTimeout(() => {
      var A;
      (A = O.current) == null || A.focus();
    }, 100));
  }, [e, r]), ce(() => {
    const A = (X) => {
      X.key === "Escape" && r && (b ? k(!1) : t());
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [r, b, t]);
  const F = () => {
    if (!e || !e.task) return;
    const A = {
      ...e,
      task: {
        ...e.task,
        indirectWorkDaysPre: G,
        netWorkDays: z,
        indirectWorkDaysPost: H,
        indirectWorkNamePre: w.trim() || void 0,
        indirectWorkNamePost: y.trim() || void 0
      }
    };
    n(A), t();
  }, L = () => {
    k(!0);
  }, C = () => {
    e && a && a(e.id), k(!1), t();
  }, B = () => {
    k(!1);
  }, ee = (A) => {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), F());
  }, ae = (A, X) => {
    const Q = X.replace(/[^0-9.]/g, ""), re = Q.split("."), ie = re.length > 2 ? re[0] + "." + re.slice(1).join("") : Q;
    A(ie);
  };
  if (!r || !e || !e.task) return null;
  const te = G + z + H;
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/50 transition-opacity",
        onClick: t
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "w-full max-w-lg rounded-lg bg-white shadow-xl",
        onClick: (A) => A.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: "공정 설정" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: e.name })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: t,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ s.jsx(Et, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-5 p-4", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700", children: [
                /* @__PURE__ */ s.jsx(Tt, { size: 14 }),
                "앞 간접작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: O,
                      type: "text",
                      inputMode: "decimal",
                      value: i,
                      onChange: (A) => ae(o, A.target.value),
                      onKeyDown: ee,
                      placeholder: "0.1 단위",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsxs("label", { className: "mb-1 flex items-center gap-1 text-xs font-medium text-gray-600", children: [
                    /* @__PURE__ */ s.jsx(_t, { size: 12 }),
                    "작업명"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      value: w,
                      onChange: (A) => p(A.target.value),
                      onKeyDown: ee,
                      placeholder: "예: 양생, 대기",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-red-700", children: [
                /* @__PURE__ */ s.jsx(Tt, { size: 14 }),
                "순작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    inputMode: "decimal",
                    value: l,
                    onChange: (A) => ae(f, A.target.value),
                    onKeyDown: ee,
                    placeholder: "0.1 단위",
                    className: "w-full max-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700", children: [
                /* @__PURE__ */ s.jsx(Tt, { size: 14 }),
                "뒤 간접작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "decimal",
                      value: c,
                      onChange: (A) => ae(u, A.target.value),
                      onKeyDown: ee,
                      placeholder: "0.1 단위",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsxs("label", { className: "mb-1 flex items-center gap-1 text-xs font-medium text-gray-600", children: [
                    /* @__PURE__ */ s.jsx(_t, { size: 12 }),
                    "작업명"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      value: y,
                      onChange: (A) => m(A.target.value),
                      onKeyDown: ee,
                      placeholder: "예: 양생, 대기",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-md bg-gray-100 p-3 text-center", children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-600", children: "총 기간: " }),
              /* @__PURE__ */ s.jsxs("span", { className: "text-sm font-semibold text-gray-800", children: [
                te,
                "일"
              ] }),
              /* @__PURE__ */ s.jsxs("span", { className: "ml-2 text-xs text-gray-500", children: [
                "(앞",
                G,
                " + 순",
                z,
                " + 뒤",
                H,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between border-t border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsx("div", { children: a && /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: L,
                className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                children: [
                  /* @__PURE__ */ s.jsx(jr, { size: 16 }),
                  "삭제"
                ]
              }
            ) }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: t,
                  className: "rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors",
                  children: "취소"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: F,
                  className: "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors",
                  children: "저장"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    b && /* @__PURE__ */ s.jsx(
      bs,
      {
        taskName: e.name,
        onConfirm: C,
        onCancel: B
      }
    )
  ] });
}, ar = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (c, u) => {
    const w = typeof c == "function" ? c(r) : c;
    if (!Object.is(w, r)) {
      const p = r;
      r = u ?? (typeof w != "object" || w === null) ? w : Object.assign({}, r, w), t.forEach((y) => y(r, p));
    }
  }, a = () => r, l = { setState: n, getState: a, getInitialState: () => f, subscribe: (c) => (t.add(c), () => t.delete(c)) }, f = r = e(n, a, l);
  return l;
}, ws = (e) => e ? ar(e) : ar, vs = (e) => e;
function ks(e, r = vs) {
  const t = Ce.useSyncExternalStore(
    e.subscribe,
    Ce.useCallback(() => r(e.getState()), [e, r]),
    Ce.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return Ce.useDebugValue(t), t;
}
const ir = (e) => {
  const r = ws(e), t = (n) => ks(r, n);
  return Object.assign(t, r), t;
}, Ds = (e) => e ? ir(e) : ir, or = (e) => Symbol.iterator in e, lr = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), cr = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [a, i] of t)
    if (!n.has(a) || !Object.is(i, n.get(a)))
      return !1;
  return !0;
}, js = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let a = t.next(), i = n.next();
  for (; !a.done && !i.done; ) {
    if (!Object.is(a.value, i.value))
      return !1;
    a = t.next(), i = n.next();
  }
  return !!a.done && !!i.done;
};
function Ns(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : or(e) && or(r) ? lr(e) && lr(r) ? cr(e, r) : js(e, r) : cr(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function Xe(e) {
  const r = Ce.useRef(void 0);
  return (t) => {
    const n = e(t);
    return Ns(r.current, n) ? r.current : r.current = n;
  };
}
const Ve = Ds((e, r) => ({
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
  sidebarWidth: Ne.SIDEBAR_WIDTH,
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
    const { expandedTaskIds: n } = r(), a = new Set(n);
    a.has(t) ? a.delete(t) : a.add(t), e({ expandedTaskIds: a });
  },
  expandAll: (t) => {
    const { expandedTaskIds: n } = r(), a = /* @__PURE__ */ new Set([...n, ...t]);
    e({ expandedTaskIds: a });
  },
  collapseAll: () => {
    e({ expandedTaskIds: /* @__PURE__ */ new Set() });
  },
  // ====================================
  // Sidebar Actions
  // ====================================
  setSidebarWidth: (t) => {
    const n = Math.max(
      Ne.SIDEBAR_MIN_WIDTH,
      Math.min(t, Ne.SIDEBAR_MAX_WIDTH)
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
})), Es = () => Ve(
  Xe((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), Ms = () => Ve(
  Xe((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), ra = () => Ve(
  Xe((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), Ws = () => Ve(
  Xe((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Ss = () => Ve(
  Xe((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), na = () => Ve(
  Xe((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Ye(e, r, t) {
  let n = t.initialDeps ?? [], a;
  function i() {
    var o, l, f, c;
    let u;
    t.key && ((o = t.debug) != null && o.call(t)) && (u = Date.now());
    const w = e();
    if (!(w.length !== n.length || w.some((m, b) => n[b] !== m)))
      return a;
    n = w;
    let y;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (y = Date.now()), a = r(...w), t.key && ((f = t.debug) != null && f.call(t))) {
      const m = Math.round((Date.now() - u) * 100) / 100, b = Math.round((Date.now() - y) * 100) / 100, k = b / 16, O = (I, G) => {
        for (I = String(I); I.length < G; )
          I = " " + I;
        return I;
      };
      console.info(
        `%c⏱ ${O(b, 5)} /${O(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * k, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (c = t == null ? void 0 : t.onChange) == null || c.call(t, a), a;
  }
  return i.updateDeps = (o) => {
    n = o;
  }, i;
}
function dr(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ps = (e, r) => Math.abs(e - r) < 1.01, Ts = (e, r, t) => {
  let n;
  return function(...a) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, a), t);
  };
}, ur = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Cs = (e) => e, Os = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let a = r; a <= t; a++)
    n.push(a);
  return n;
}, _s = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const a = (o) => {
    const { width: l, height: f } = o;
    r({ width: Math.round(l), height: Math.round(f) });
  };
  if (a(ur(t)), !n.ResizeObserver)
    return () => {
    };
  const i = new n.ResizeObserver((o) => {
    const l = () => {
      const f = o[0];
      if (f != null && f.borderBoxSize) {
        const c = f.borderBoxSize[0];
        if (c) {
          a({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      a(ur(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, hr = {
  passive: !0
}, fr = typeof window > "u" ? !0 : "onscrollend" in window, Is = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let a = 0;
  const i = e.options.useScrollendEvent && fr ? () => {
  } : Ts(
    n,
    () => {
      r(a, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (u) => () => {
    const { horizontal: w, isRtl: p } = e.options;
    a = w ? t.scrollLeft * (p && -1 || 1) : t.scrollTop, i(), r(a, u);
  }, l = o(!0), f = o(!1);
  f(), t.addEventListener("scroll", l, hr);
  const c = e.options.useScrollendEvent && fr;
  return c && t.addEventListener("scrollend", f, hr), () => {
    t.removeEventListener("scroll", l), c && t.removeEventListener("scrollend", f);
  };
}, Rs = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, As = (e, {
  adjustments: r = 0,
  behavior: t
}, n) => {
  var a, i;
  const o = e + r;
  (i = (a = n.scrollElement) == null ? void 0 : a.scrollTo) == null || i.call(a, {
    [n.options.horizontal ? "left" : "top"]: o,
    behavior: t
  });
};
class zs {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((a) => {
        a.forEach((i) => {
          const o = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var a;
          (a = n()) == null || a.disconnect(), t = null;
        },
        observe: (a) => {
          var i;
          return (i = n()) == null ? void 0 : i.observe(a, { box: "border-box" });
        },
        unobserve: (a) => {
          var i;
          return (i = n()) == null ? void 0 : i.unobserve(a);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, a]) => {
        typeof a > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Cs,
        rangeExtractor: Os,
        onChange: () => {
        },
        measureElement: Rs,
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
      var n, a;
      (a = (n = this.options).onChange) == null || a.call(n, this, t);
    }, this.maybeNotify = Ye(
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
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((a) => {
          this.observer.observe(a);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (a) => {
            this.scrollRect = a, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (a, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < a ? "forward" : "backward" : null, this.scrollOffset = a, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = n - 1; o >= 0; o--) {
        const l = t[o];
        if (a.has(l.lane))
          continue;
        const f = i.get(
          l.lane
        );
        if (f == null || l.end > f.end ? i.set(l.lane, l) : l.end < f.end && a.set(l.lane, !0), a.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, l) => o.end === l.end ? o.index - l.index : o.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Ye(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, a, i, o) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: a,
        getItemKey: i,
        enabled: o
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ye(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: a, getItemKey: i, enabled: o }, l) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const f = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, f);
        for (let u = f; u < t; u++) {
          const w = i(u), p = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), y = p ? p.end + this.options.gap : n + a, m = l.get(w), b = typeof m == "number" ? m : this.options.estimateSize(u), k = y + b, O = p ? p.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: y,
            size: b,
            end: k,
            key: w,
            lane: O
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ye(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, a, i) => this.range = t.length > 0 && n > 0 ? Ls({
        measurements: t,
        outerSize: n,
        scrollOffset: a,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ye(
      () => {
        let t = null, n = null;
        const a = this.calculateRange();
        return a && (t = a.startIndex, n = a.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, a, i, o) => i === null || o === null ? [] : t({
        startIndex: i,
        endIndex: o,
        overscan: n,
        count: a
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, a = t.getAttribute(n);
      return a ? parseInt(a, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const a = this.indexFromElement(t), i = this.measurementsCache[a];
      if (!i)
        return;
      const o = i.key, l = this.elementsCache.get(o);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(o, t)), t.isConnected && this.resizeItem(a, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const a = this.measurementsCache[t];
      if (!a)
        return;
      const i = this.itemSizeCache.get(a.key) ?? a.size, o = n - i;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(a, o, this) : a.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(a.index), this.itemSizeCache = new Map(this.itemSizeCache.set(a.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, a) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(a));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = Ye(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const a = [];
        for (let i = 0, o = t.length; i < o; i++) {
          const l = t[i], f = n[l];
          a.push(f);
        }
        return a;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return dr(
          n[Wr(
            0,
            n.length - 1,
            (a) => dr(n[a]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, a = 0) => {
      const i = this.getSize(), o = this.getScrollOffset();
      n === "auto" && (n = t >= o + i ? "end" : "start"), n === "center" ? t += (a - i) / 2 : n === "end" && (t -= i);
      const l = this.getTotalSize() + this.options.scrollMargin - i;
      return Math.max(Math.min(l, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const a = this.measurementsCache[t];
      if (!a)
        return;
      const i = this.getSize(), o = this.getScrollOffset();
      if (n === "auto")
        if (a.end >= o + i - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      const l = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, a.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: n = "start", behavior: a } = {}) => {
      a === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: a
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: a } = {}) => {
      a === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let i = 0;
      const o = 10, l = (c) => {
        if (!this.targetWindow) return;
        const u = this.getOffsetForIndex(t, c);
        if (!u) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [w, p] = u;
        this._scrollToOffset(w, { adjustments: void 0, behavior: a }), this.targetWindow.requestAnimationFrame(() => {
          const y = this.getScrollOffset(), m = this.getOffsetForIndex(t, p);
          if (!m) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Ps(m[0], y) || f(p);
        });
      }, f = (c) => {
        this.targetWindow && (i++, i < o ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", i, o), this.targetWindow.requestAnimationFrame(() => l(c))) : console.warn(
          `Failed to scroll to index ${t} after ${o} attempts.`
        ));
      };
      l(n);
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
      let a;
      if (n.length === 0)
        a = this.options.paddingStart;
      else if (this.options.lanes === 1)
        a = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let o = n.length - 1;
        for (; o >= 0 && i.some((l) => l === null); ) {
          const l = n[o];
          i[l.lane] === null && (i[l.lane] = l.end), o--;
        }
        a = Math.max(...i.filter((l) => l !== null));
      }
      return Math.max(
        a - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: a
    }) => {
      this.options.scrollToFn(t, { behavior: a, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(r);
  }
}
const Wr = (e, r, t, n) => {
  for (; e <= r; ) {
    const a = (e + r) / 2 | 0, i = t(a);
    if (i < n)
      e = a + 1;
    else if (i > n)
      r = a - 1;
    else
      return a;
  }
  return e > 0 ? e - 1 : 0;
};
function Ls({
  measurements: e,
  outerSize: r,
  scrollOffset: t,
  lanes: n
}) {
  const a = e.length - 1, i = (f) => e[f].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: a
    };
  let o = Wr(
    0,
    a,
    i,
    t
  ), l = o;
  if (n === 1)
    for (; l < a && e[l].end < t + r; )
      l++;
  else if (n > 1) {
    const f = Array(n).fill(0);
    for (; l < a && f.some((u) => u < t + r); ) {
      const u = e[l];
      f[u.lane] = u.end, l++;
    }
    const c = Array(n).fill(t + r);
    for (; o >= 0 && c.some((u) => u >= t); ) {
      const u = e[o];
      c[u.lane] = u.start, o--;
    }
    o = Math.max(0, o - o % n), l = Math.min(a, l + (n - 1 - l % n));
  }
  return { startIndex: o, endIndex: l };
}
const mr = typeof document < "u" ? vt.useLayoutEffect : vt.useEffect;
function Fs(e) {
  const r = vt.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (a, i) => {
      var o;
      i ? Sr(r) : r(), (o = e.onChange) == null || o.call(e, a, i);
    }
  }, [n] = vt.useState(
    () => new zs(t)
  );
  return n.setOptions(t), mr(() => n._didMount(), []), mr(() => n._willUpdate()), n;
}
function Hs(e) {
  return Fs({
    observeElementRect: _s,
    observeElementOffset: Is,
    scrollToFn: As,
    ...e
  });
}
const { ROW_HEIGHT: $s } = Ne;
function Ys({
  containerRef: e,
  count: r,
  rowHeight: t = $s,
  overscan: n = 5
}) {
  const a = Hs({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  }), i = a.getVirtualItems();
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
    totalHeight: a.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: a
  };
}
const Gs = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function sa({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = Gs,
  initialView: a = "MASTER",
  initialZoomLevel: i = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: o,
  onTaskUpdate: l,
  onTaskCreate: f,
  onTaskDelete: c,
  onTaskReorder: u,
  onTaskGroup: w,
  onTaskUngroup: p,
  onTaskMove: y,
  onViewChange: m,
  onMilestoneCreate: b,
  onMilestoneUpdate: k,
  onMilestoneDelete: O,
  onSave: I,
  onReset: G,
  hasUnsavedChanges: z,
  saveStatus: H,
  className: F,
  style: L
}) {
  const { viewMode: C, activeCPId: B, zoomLevel: ee } = Es(), { setViewMode: ae, setZoomLevel: te } = Ms(), { sidebarWidth: A, setSidebarWidth: X } = Ss(), { expandedTaskIds: Q, toggleTask: re, expandAll: ie, collapseAll: J } = Ws(), N = ue(null), x = ue(null), h = ue(null), D = ue(!1), P = ue(!1), [R, S] = Y(!1), [ne, V] = Y(!1), [Z, he] = Y(!1), fe = W(() => {
    V(!0);
  }, []), Be = W(() => {
    V(!1);
  }, []), qe = W(() => {
    he(!0);
  }, []), Ie = W(() => {
    he(!1);
  }, []), [De, Me] = Y(null), [Re, se] = Y(!1), [Ae, be] = Y(!1), Mt = W((v) => {
    Me(v), be(!1), se(!0);
  }, []), [Ke, ze] = Y(null), [Qe, Je] = Y(!1), ut = W((v) => {
    ze(v), Je(!0);
  }, []), je = W(() => {
    Je(!1), ze(null);
  }, []), ht = W((v) => {
    l && l(v), je();
  }, [l, je]), ft = W((v) => {
    c && c(v), je();
  }, [c, je]), mt = W(() => {
    const v = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    Me(v), be(!0), se(!0);
  }, []), We = W(() => {
    se(!1), Me(null), be(!1);
  }, []), xt = W((v) => {
    Ae && b ? b(v) : k && k(v), We();
  }, [Ae, b, k, We]), gt = W((v) => {
    O && O(v), We();
  }, [O, We]), Ue = ue(!1), Se = ve(() => e.map((v) => v.id), [e]);
  ce(() => {
    Ue.current || (Ue.current = !0, ae(a), te(i), J(), o && o.length > 0 ? ie(o) : Se.length > 0 && ie(Se));
  }, [Se, o, a, i, ae, te, ie, J]);
  const Ze = ue(/* @__PURE__ */ new Set());
  ce(() => {
    const v = new Set(e.map((_) => _.id)), T = Ze.current, E = [];
    e.forEach((_) => {
      _.type === "GROUP" && !T.has(_.id) && E.push(_.id);
    }), E.length > 0 && ie(E), Ze.current = v;
  }, [e, ie]);
  const pe = ve(() => {
    if (C === "MASTER") {
      const v = [], T = (E, _ = 0) => {
        e.forEach((q) => {
          q.wbsLevel === 1 && q.parentId === E && (E === null || Q.has(E)) && (v.push(q), q.type === "GROUP" && T(q.id, _ + 1));
        });
      };
      return T(null), v;
    } else {
      const v = [], T = (E) => {
        e.forEach((_) => {
          _.wbsLevel === 2 && _.parentId === E && (E === B || Q.has(E)) && (v.push(_), _.type === "GROUP" && T(_.id));
        });
      };
      return T(B), v;
    }
  }, [e, C, B, Q]), { virtualRows: et, totalHeight: tt } = Ys({
    containerRef: h,
    count: pe.length
  });
  ce(() => {
    const v = x.current, T = h.current;
    if (!v || !T) return;
    const E = () => {
      D.current || (D.current = !0, T.scrollTop = v.scrollTop, requestAnimationFrame(() => {
        D.current = !1;
      }));
    }, _ = () => {
      D.current || (D.current = !0, v.scrollTop = T.scrollTop, requestAnimationFrame(() => {
        D.current = !1;
      }));
    };
    return v.addEventListener("scroll", E), T.addEventListener("scroll", _), () => {
      v.removeEventListener("scroll", E), T.removeEventListener("scroll", _);
    };
  }, []);
  const [Le, rt] = Y(null), Wt = W((v) => {
    if (v.detail >= 2) return;
    v.preventDefault(), P.current = !0, S(!0);
    const T = v.clientX, E = A, _ = (me) => {
      if (!P.current) return;
      const j = me.clientX - T;
      X(E + j);
    }, q = () => {
      P.current = !1, S(!1), document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", q);
    };
    document.addEventListener("mousemove", _), document.addEventListener("mouseup", q);
  }, [A, X]), yt = W(() => {
    X(Le !== null ? Le : Ne.SIDEBAR_WIDTH);
  }, [Le, X]), Fe = W((v, T) => {
    ae(v, T), m == null || m(v, T);
  }, [ae, m]), g = W((v) => {
    const T = h.current;
    if (!T) return;
    const E = Dt[ee].pixelsPerDay, { minDate: _ } = Er(e, r, 60), q = lt(v, _, E);
    T.scrollLeft = Math.max(0, q - 50);
  }, [ee, e, r]), d = W(() => {
    if (C === "MASTER") {
      const v = pe.filter((T) => T.type === "CP");
      if (v.length > 0) {
        const T = v.reduce(
          (_, q) => _.startDate < q.startDate ? _ : q
        ), E = new Date(T.startDate);
        E.setDate(E.getDate() - 5), g(E);
      }
    } else if (C === "DETAIL" && B) {
      const v = e.filter((T) => T.parentId === B);
      if (v.length > 0) {
        const T = v.reduce(
          (_, q) => _.startDate < q.startDate ? _ : q
        ), E = new Date(T.startDate);
        E.setDate(E.getDate() - 5), g(E);
      }
    }
  }, [C, B, e, pe, g]), M = W((v) => {
    C === "MASTER" && v.type === "CP" && Fe("DETAIL", v.id);
  }, [C, Fe]);
  ce(() => {
    if (C === "DETAIL" && B) {
      const v = setTimeout(() => {
        d();
      }, 100);
      return () => clearTimeout(v);
    }
  }, [C, B, d]);
  const $ = W(async (v) => {
    if (l)
      try {
        const T = e.find((_) => _.id === v.taskId);
        if (!T || !T.task) return;
        const E = {
          ...T,
          startDate: v.newStartDate,
          endDate: v.newEndDate,
          task: {
            ...T.task,
            indirectWorkDaysPre: v.newIndirectWorkDaysPre,
            indirectWorkDaysPost: v.newIndirectWorkDaysPost,
            netWorkDays: v.newNetWorkDays
          }
        };
        await l(E);
      } catch (T) {
        console.error("Failed to update task:", T);
      }
  }, [e, l]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: N,
      className: `flex h-full w-full flex-col bg-gray-50 ${F || ""}`,
      style: L,
      children: [
        /* @__PURE__ */ s.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-3 shrink-0", children: C === "DETAIL" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => Fe("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            f && !ne && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: fe,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            f && !Z && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: qe,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            b && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: mt,
                className: "flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors",
                title: "새 마일스톤 추가",
                children: "+ 마일스톤"
              }
            ),
            Z && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: d,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: C === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (C === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((v) => /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => te(v),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${ee === v ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Dt[v].label
              },
              v
            )) }),
            /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              ye(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            I && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: I,
                disabled: !z || H === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${z ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: H === "saving" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsxs("svg", { className: "h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ s.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ s.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                  ] }),
                  "저장 중..."
                ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" }) }),
                  "저장"
                ] })
              }
            ),
            G && /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: G,
                className: "flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300",
                children: [
                  /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                  "초기화"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: A },
              children: /* @__PURE__ */ s.jsx(
                Nr,
                {
                  ref: x,
                  tasks: pe,
                  allTasks: e,
                  viewMode: C,
                  expandedIds: Q,
                  onToggle: re,
                  onTaskClick: M,
                  onTaskUpdate: l,
                  onTaskCreate: f,
                  onTaskReorder: u,
                  onTaskGroup: w,
                  onTaskUngroup: p,
                  onTaskDelete: c,
                  onTaskMove: y,
                  activeCPId: B,
                  virtualRows: et,
                  totalHeight: tt,
                  onTotalWidthChange: rt,
                  isAddingTask: ne,
                  onCancelAddTask: Be,
                  isAddingCP: Z,
                  onCancelAddCP: Ie,
                  onTaskDoubleClick: ut
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${R ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: Wt,
              onDoubleClick: yt,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ s.jsx(
            Mr,
            {
              ref: h,
              tasks: pe,
              milestones: r,
              viewMode: C,
              zoomLevel: ee,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: l,
              onBarDrag: $,
              onMilestoneUpdate: k,
              onMilestoneDoubleClick: Mt,
              onTaskDoubleClick: ut,
              virtualRows: et,
              totalHeight: tt
            }
          ) }),
          R && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ s.jsx(
          ys,
          {
            milestone: De,
            isOpen: Re,
            isNew: Ae,
            onClose: We,
            onSave: xt,
            onDelete: gt
          }
        ),
        /* @__PURE__ */ s.jsx(
          ps,
          {
            task: Ke,
            isOpen: Qe,
            onClose: je,
            onSave: ht,
            onDelete: c ? ft : void 0
          }
        )
      ]
    }
  );
}
const Xs = 50;
function xe(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof Set)
    return new Set(Array.from(e).map((t) => xe(t)));
  if (e instanceof Map)
    return new Map(Array.from(e.entries()).map(([t, n]) => [xe(t), xe(n)]));
  if (Array.isArray(e))
    return e.map((t) => xe(t));
  const r = {};
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = xe(e[t]));
  return r;
}
function aa(e) {
  const [r, t] = Y(() => ({
    past: [],
    present: xe(e),
    future: []
  })), n = ue(!1), a = W((c) => {
    t((u) => {
      const w = typeof c == "function" ? c(u.present) : c;
      if (!n.current)
        return n.current = !0, {
          past: [],
          present: xe(w),
          future: []
        };
      if (JSON.stringify(u.present) === JSON.stringify(w))
        return u;
      const p = [...u.past, xe(u.present)];
      return p.length > Xs && p.shift(), {
        past: p,
        present: xe(w),
        future: []
        // 새 변경 시 future 초기화
      };
    });
  }, []), i = W(() => {
    t((c) => {
      if (c.past.length === 0) return c;
      const u = [...c.past], w = u.pop();
      return {
        past: u,
        present: w,
        future: [xe(c.present), ...c.future]
      };
    });
  }, []), o = W(() => {
    t((c) => {
      if (c.future.length === 0) return c;
      const u = [...c.future], w = u.shift();
      return {
        past: [...c.past, xe(c.present)],
        present: w,
        future: u
      };
    });
  }, []), l = W((c) => {
    n.current = !1, t({
      past: [],
      present: xe(c),
      future: []
    });
  }, []), f = W(() => {
    t((c) => ({
      past: [],
      present: c.present,
      future: []
    }));
  }, []);
  return {
    present: r.present,
    set: a,
    undo: i,
    redo: o,
    canUndo: r.past.length > 0,
    canRedo: r.future.length > 0,
    reset: l,
    clearHistory: f,
    historyLength: {
      past: r.past.length,
      future: r.future.length
    }
  };
}
export {
  Te as GANTT_COLORS,
  Ne as GANTT_LAYOUT,
  sa as GanttChart,
  Nr as GanttSidebar,
  Mr as GanttTimeline,
  ps as TaskEditModal,
  Dt as ZOOM_CONFIG,
  sr as addCalendarDays,
  ls as addWorkingDays,
  Er as calculateDateRange,
  Js as calculateDualCalendarDates,
  lt as dateToX,
  Us as getAnchorDate,
  ea as getDateRangeWidth,
  ta as getPixelsPerDay,
  Ge as isHoliday,
  Ks as isWeekend,
  Qs as subtractWorkingDays,
  na as useGanttDrag,
  Ws as useGanttExpansion,
  ra as useGanttSelection,
  Ss as useGanttSidebar,
  Ve as useGanttStore,
  Ms as useGanttViewActions,
  Es as useGanttViewState,
  Ys as useGanttVirtualization,
  aa as useHistory,
  Zs as xToDate
};
