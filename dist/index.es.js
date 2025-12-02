"use client";
import * as Be from "react";
import ke, { forwardRef as Qe, createElement as nt, useRef as fe, useEffect as ge, useCallback as F, useState as ne, useMemo as ye } from "react";
import { flushSync as Ut } from "react-dom";
var st = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Kt() {
  if (ct) return Re;
  ct = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var c in s)
        c !== "key" && (a[c] = s[c]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Re.Fragment = r, Re.jsx = t, Re.jsxs = t, Re;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Qt() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === _ ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case W:
          return "Fragment";
        case j:
          return "Profiler";
        case N:
          return "StrictMode";
        case B:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case b:
            return "Portal";
          case Y:
            return d.displayName || "Context";
          case E:
            return (d._context.displayName || "Context") + ".Consumer";
          case J:
            var D = d.render;
            return d = d.displayName, d || (d = D.displayName || D.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case v:
            return D = d.displayName || null, D !== null ? D : e(d.type) || "Memo";
          case w:
            D = d._payload, d = d._init;
            try {
              return e(d(D));
            } catch {
            }
        }
      return null;
    }
    function r(d) {
      return "" + d;
    }
    function t(d) {
      try {
        r(d);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var C = D.error, L = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return C.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), r(d);
      }
    }
    function n(d) {
      if (d === W) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === w)
        return "<...>";
      try {
        var D = e(d);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = H.A;
      return d === null ? null : d.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (P.call(d, "key")) {
        var D = Object.getOwnPropertyDescriptor(d, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function c(d, D) {
      function C() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: C,
        configurable: !0
      });
    }
    function u() {
      var d = e(this.type);
      return be[d] || (be[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function h(d, D, C, L, z, se) {
      var I = C.ref;
      return d = {
        $$typeof: y,
        type: d,
        key: D,
        props: C,
        _owner: L
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, D, C, L, z, se) {
      var I = D.children;
      if (I !== void 0)
        if (L)
          if (U(I)) {
            for (L = 0; L < I.length; L++)
              p(I[L]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(I);
      if (P.call(D, "key")) {
        I = e(d);
        var ae = Object.keys(D).filter(function(Se) {
          return Se !== "key";
        });
        L = 0 < ae.length ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}", ue[I + L] || (ae = 0 < ae.length ? "{" + ae.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          I,
          ae,
          I
        ), ue[I + L] = !0);
      }
      if (I = null, C !== void 0 && (t(C), I = "" + C), i(D) && (t(D.key), I = "" + D.key), "key" in D) {
        C = {};
        for (var ie in D)
          ie !== "key" && (C[ie] = D[ie]);
      } else C = D;
      return I && c(
        C,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), h(
        d,
        I,
        C,
        s(),
        z,
        se
      );
    }
    function p(d) {
      x(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === w && (d._payload.status === "fulfilled" ? x(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function x(d) {
      return typeof d == "object" && d !== null && d.$$typeof === y;
    }
    var g = ke, y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), H = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, U = Array.isArray, te = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var Z, be = {}, ve = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), de = te(n(a)), ue = {};
    Ae.Fragment = W, Ae.jsx = function(d, D, C) {
      var L = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        d,
        D,
        C,
        !1,
        L ? Error("react-stack-top-frame") : ve,
        L ? te(n(d)) : de
      );
    }, Ae.jsxs = function(d, D, C) {
      var L = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        d,
        D,
        C,
        !0,
        L ? Error("react-stack-top-frame") : ve,
        L ? te(n(d)) : de
      );
    };
  }()), Ae;
}
process.env.NODE_ENV === "production" ? st.exports = Kt() : st.exports = Qt();
var o = st.exports;
const At = 6048e5, Jt = 864e5, dt = Symbol.for("constructDateFrom");
function xe(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && dt in e ? e[dt](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Q(e, r) {
  return xe(r || e, e);
}
function G(e, r, t) {
  const n = Q(e, t == null ? void 0 : t.in);
  return isNaN(r) ? xe(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function zt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 6;
}
function Ft(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 0;
}
let Zt = {};
function He() {
  return Zt;
}
function Ee(e, r) {
  var c, u, h, f;
  const t = He(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((f = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = Q(e, r == null ? void 0 : r.in), a = s.getDay(), i = (a < n ? 7 : 0) + a - n;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function Ue(e, r) {
  return Ee(e, { ...r, weekStartsOn: 1 });
}
function Lt(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = xe(t, 0);
  s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Ue(s), i = xe(t, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const c = Ue(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
function ut(e) {
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
function Ye(e, ...r) {
  const t = xe.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function Le(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Ht(e, r, t) {
  const [n, s] = Ye(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = Le(n), i = Le(s), c = +a - ut(a), u = +i - ut(i);
  return Math.round((c - u) / Jt);
}
function er(e, r) {
  const t = Lt(e, r), n = xe(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Ue(n);
}
function tr(e, r, t) {
  const [n, s] = Ye(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +Le(n) == +Le(s);
}
function rr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nr(e) {
  return !(!rr(e) && typeof e != "number" || isNaN(+Q(e)));
}
function at(e, r, t) {
  const [n, s] = Ye(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = ht(n, s), i = Math.abs(
    Ht(n, s)
  );
  n.setDate(n.getDate() - a * i);
  const c = +(ht(n, s) === -a), u = a * (i - c);
  return u === 0 ? 0 : u;
}
function ht(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function sr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ar(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const ir = {
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
}, or = (e, r, t) => {
  let n;
  const s = ir[e];
  return typeof s == "string" ? n = s : r === 1 ? n = s.one : n = s.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function tt(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const cr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, lr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ur = {
  date: tt({
    formats: cr,
    defaultWidth: "full"
  }),
  time: tt({
    formats: lr,
    defaultWidth: "full"
  }),
  dateTime: tt({
    formats: dr,
    defaultWidth: "full"
  })
}, hr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, fr = (e, r, t, n) => hr[e];
function ze(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, c = t != null && t.width ? String(t.width) : i;
      s = e.formattingValues[c] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, c = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[c] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[a];
  };
}
const mr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, gr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yr = {
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
}, xr = {
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
}, br = {
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
}, wr = {
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
}, pr = (e, r) => {
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
}, vr = {
  ordinalNumber: pr,
  era: ze({
    values: mr,
    defaultWidth: "wide"
  }),
  quarter: ze({
    values: gr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ze({
    values: yr,
    defaultWidth: "wide"
  }),
  day: ze({
    values: xr,
    defaultWidth: "wide"
  }),
  dayPeriod: ze({
    values: br,
    defaultWidth: "wide",
    formattingValues: wr,
    defaultFormattingWidth: "wide"
  })
};
function Fe(e) {
  return (r, t = {}) => {
    const n = t.width, s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(s);
    if (!a)
      return null;
    const i = a[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(c) ? kr(c, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Dr(c, (p) => p.test(i))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(u) : u, h = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(h)
    ) : h;
    const f = r.slice(i.length);
    return { value: h, rest: f };
  };
}
function Dr(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function kr(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function Er(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const s = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const c = r.slice(s.length);
    return { value: i, rest: c };
  };
}
const Sr = /^(\d+)(th|st|nd|rd)?/i, Mr = /\d+/i, Wr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Tr = {
  any: [/^b/i, /^(a|c)/i]
}, jr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Or = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Nr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Pr = {
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
}, _r = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Cr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ir = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Rr = {
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
}, Ar = {
  ordinalNumber: Er({
    matchPattern: Sr,
    parsePattern: Mr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Fe({
    matchPatterns: Wr,
    defaultMatchWidth: "wide",
    parsePatterns: Tr,
    defaultParseWidth: "any"
  }),
  quarter: Fe({
    matchPatterns: jr,
    defaultMatchWidth: "wide",
    parsePatterns: Or,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Fe({
    matchPatterns: Nr,
    defaultMatchWidth: "wide",
    parsePatterns: Pr,
    defaultParseWidth: "any"
  }),
  day: Fe({
    matchPatterns: _r,
    defaultMatchWidth: "wide",
    parsePatterns: Cr,
    defaultParseWidth: "any"
  }),
  dayPeriod: Fe({
    matchPatterns: Ir,
    defaultMatchWidth: "any",
    parsePatterns: Rr,
    defaultParseWidth: "any"
  })
}, zr = {
  code: "en-US",
  formatDistance: or,
  formatLong: ur,
  formatRelative: fr,
  localize: vr,
  match: Ar,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return Ht(t, ar(t)) + 1;
}
function Lr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +Ue(t) - +er(t);
  return Math.round(n / At) + 1;
}
function Yt(e, r) {
  var f, p, x, g;
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = He(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((p = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((g = (x = s.locale) == null ? void 0 : x.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, i = xe((r == null ? void 0 : r.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const c = Ee(i, r), u = xe((r == null ? void 0 : r.in) || e, 0);
  u.setFullYear(n, 0, a), u.setHours(0, 0, 0, 0);
  const h = Ee(u, r);
  return +t >= +c ? n + 1 : +t >= +h ? n : n - 1;
}
function Hr(e, r) {
  var c, u, h, f;
  const t = He(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((u = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = Yt(e, r), a = xe((r == null ? void 0 : r.in) || e, 0);
  return a.setFullYear(s, 0, n), a.setHours(0, 0, 0, 0), Ee(a, r);
}
function Yr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +Ee(t, r) - +Hr(t, r);
  return Math.round(n / At) + 1;
}
function R(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const we = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return R(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : R(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return R(e.getDate(), r.length);
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
    return R(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return R(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return R(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return R(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), s = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return R(s, r.length);
  }
}, je = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ft = {
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
    return we.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const s = Yt(e, n), a = s > 0 ? s : 1 - s;
    if (r === "YY") {
      const i = a % 100;
      return R(i, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : R(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = Lt(e);
    return R(t, r.length);
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
    return R(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return R(n, 2);
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
        return R(n, 2);
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
        return we.M(e, r);
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
        return R(n + 1, 2);
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
    const s = Yr(e, n);
    return r === "wo" ? t.ordinalNumber(s, { unit: "week" }) : R(s, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = Lr(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : R(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : we.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Fr(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : R(n, r.length);
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
        return R(a, 2);
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
        return R(a, r.length);
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
        return R(s, r.length);
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
    switch (n === 12 ? s = je.noon : n === 0 ? s = je.midnight : s = n / 12 >= 1 ? "pm" : "am", r) {
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
    switch (n >= 17 ? s = je.evening : n >= 12 ? s = je.afternoon : n >= 4 ? s = je.morning : s = je.night, r) {
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
    return we.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : we.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : R(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : R(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : we.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : we.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return we.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return gt(n);
      case "XXXX":
      case "XX":
        return De(n);
      case "XXXXX":
      case "XXX":
      default:
        return De(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return gt(n);
      case "xxxx":
      case "xx":
        return De(n);
      case "xxxxx":
      case "xxx":
      default:
        return De(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + mt(n, ":");
      case "OOOO":
      default:
        return "GMT" + De(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + mt(n, ":");
      case "zzzz":
      default:
        return "GMT" + De(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return R(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return R(+e, r.length);
  }
};
function mt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(s) : t + String(s) + r + R(a, 2);
}
function gt(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + R(Math.abs(e) / 60, 2) : De(e, r);
}
function De(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = R(Math.trunc(n / 60), 2), a = R(n % 60, 2);
  return t + s + r + a;
}
const yt = (e, r) => {
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
}, $t = (e, r) => {
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
}, $r = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], s = t[2];
  if (!s)
    return yt(e, r);
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
  return a.replace("{{date}}", yt(n, r)).replace("{{time}}", $t(s, r));
}, Gr = {
  p: $t,
  P: $r
}, Vr = /^D+$/, qr = /^Y+$/, Xr = ["D", "DD", "YY", "YYYY"];
function Br(e) {
  return Vr.test(e);
}
function Ur(e) {
  return qr.test(e);
}
function Kr(e, r, t) {
  const n = Qr(e, r, t);
  if (console.warn(n), Xr.includes(e)) throw new RangeError(n);
}
function Qr(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Jr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, en = /^'([^]*?)'?$/, tn = /''/g, rn = /[a-zA-Z]/;
function le(e, r, t) {
  var f, p, x, g;
  const n = He(), s = n.locale ?? zr, a = n.firstWeekContainsDate ?? ((p = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = n.weekStartsOn ?? ((g = (x = n.locale) == null ? void 0 : x.options) == null ? void 0 : g.weekStartsOn) ?? 0, c = Q(e, t == null ? void 0 : t.in);
  if (!nr(c))
    throw new RangeError("Invalid time value");
  let u = r.match(Zr).map((y) => {
    const b = y[0];
    if (b === "p" || b === "P") {
      const W = Gr[b];
      return W(y, s.formatLong);
    }
    return y;
  }).join("").match(Jr).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const b = y[0];
    if (b === "'")
      return { isToken: !1, value: nn(y) };
    if (ft[b])
      return { isToken: !0, value: y };
    if (b.match(rn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: y };
  });
  s.localize.preprocessor && (u = s.localize.preprocessor(c, u));
  const h = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: s
  };
  return u.map((y) => {
    if (!y.isToken) return y.value;
    const b = y.value;
    (Ur(b) || Br(b)) && Kr(b, r, String(e));
    const W = ft[b[0]];
    return W(c, b, s.localize, h);
  }).join("");
}
function nn(e) {
  const r = e.match(en);
  return r ? r[1].replace(tn, "'") : e;
}
function sn(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDate();
}
function Je(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay();
}
function xt(e, r) {
  var u, h, f, p;
  const t = He(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((p = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = sn(Q(e, r == null ? void 0 : r.in));
  if (isNaN(s)) return NaN;
  const a = Je(sr(e, r));
  let i = n - a;
  i <= 0 && (i += 7);
  const c = s - i;
  return Math.ceil(c / 7) + 1;
}
function rt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getFullYear();
}
function an(e, r, t) {
  const [n, s] = Ye(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +Ee(n, t) == +Ee(s, t);
}
function on(e, r, t) {
  const [n, s] = Ye(
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
const cn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ln = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), bt = (e) => {
  const r = ln(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Gt = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), dn = (e) => {
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
var un = {
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
const hn = Qe(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...c
  }, u) => nt(
    "svg",
    {
      ref: u,
      ...un,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: Gt("lucide", s),
      ...!a && !dn(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([h, f]) => nt(h, f)),
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
const $e = (e, r) => {
  const t = Qe(
    ({ className: n, ...s }, a) => nt(hn, {
      ref: a,
      iconNode: r,
      className: Gt(
        `lucide-${cn(bt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return t.displayName = bt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], mn = $e("check", fn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], yn = $e("chevron-down", gn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], bn = $e("chevron-right", xn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], wt = $e("grip-vertical", wn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], vn = $e("x", pn), me = {
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
}, pe = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, Ke = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, pt = ({
  x: e,
  y: r,
  taskId: t,
  // 사용되지 않지만 props 유지
  selectedTaskIds: n,
  tasks: s,
  onTaskGroup: a,
  onTaskUngroup: i,
  onClose: c,
  onDeselect: u
}) => {
  const h = () => {
    n.size >= 2 && a && (a(Array.from(n)), c());
  }, f = () => {
    if (n.size === 1 && i) {
      const x = Array.from(n)[0], g = s.find((y) => y.id === x);
      (g == null ? void 0 : g.type) === "GROUP" && (i(x), c());
    }
  }, p = n.size === 1 && (() => {
    const x = Array.from(n)[0], g = s.find((y) => y.id === x);
    return (g == null ? void 0 : g.type) === "GROUP";
  })();
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: r },
      onClick: (x) => x.stopPropagation(),
      children: [
        n.size >= 2 && a && /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: h,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
              "그룹화 (",
              n.size,
              "개 선택됨)"
            ]
          }
        ),
        p && i && /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: f,
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
              "그룹 해제"
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => {
              u(), c();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: vt } = pe, Xe = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Dn = ({
  columns: e,
  tasks: r,
  activeCPId: t,
  onTaskCreate: n,
  onCancel: s,
  isVirtualized: a = !1,
  virtualRowIndex: i
}) => {
  const [c, u] = ke.useState(Xe), h = fe(null);
  ge(() => {
    u(Xe), setTimeout(() => {
      var y;
      (y = h.current) == null || y.focus();
    }, 0);
  }, []);
  const f = F(() => {
    u(Xe), s();
  }, [s]), p = F(async () => {
    if (!(!c.name.trim() || !n || !t))
      try {
        const y = r[r.length - 1], b = y ? G(y.endDate, 1) : /* @__PURE__ */ new Date(), W = c.indirectWorkDaysPre + c.netWorkDays + c.indirectWorkDaysPost, N = G(b, Math.max(W - 1, 0)), j = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: c.name.trim(),
          startDate: b,
          endDate: N,
          task: {
            netWorkDays: c.netWorkDays,
            indirectWorkDaysPre: c.indirectWorkDaysPre,
            indirectWorkDaysPost: c.indirectWorkDaysPost
          },
          dependencies: []
        };
        await n(j), u(Xe), s();
      } catch (y) {
        console.error("Failed to create task:", y), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [c, n, t, r, s]), x = F((y) => {
    y.key === "Enter" ? (y.preventDefault(), p()) : y.key === "Escape" && (y.preventDefault(), f());
  }, [p, f]), g = a && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${r.length * vt}px)`
  } : {};
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: vt,
        ...g
      },
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: e[0].width },
            children: /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: h,
                type: "text",
                placeholder: "공정명...",
                className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: c.name,
                onChange: (y) => u((b) => ({ ...b, name: y.target.value })),
                onKeyDown: x
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[1].width },
            children: /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: c.indirectWorkDaysPre,
                onChange: (y) => {
                  const b = y.target.value.replace(/[^0-9]/g, ""), W = parseInt(b) || 0;
                  u((N) => ({ ...N, indirectWorkDaysPre: W }));
                },
                onKeyDown: x,
                title: "선 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[2].width },
            children: /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: c.netWorkDays,
                onChange: (y) => {
                  const b = y.target.value.replace(/[^0-9]/g, ""), W = parseInt(b) || 0;
                  u((N) => ({ ...N, netWorkDays: W }));
                },
                onKeyDown: x,
                title: "순작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
            style: { width: e[3].width },
            children: /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                value: c.indirectWorkDaysPost,
                onChange: (y) => {
                  const b = y.target.value.replace(/[^0-9]/g, ""), W = parseInt(b) || 0;
                  u((N) => ({ ...N, indirectWorkDaysPost: W }));
                },
                onKeyDown: x,
                title: "후 간접작업일"
              }
            )
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center justify-center gap-1 px-2",
            style: { width: e[4].width + e[5].width },
            children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: p,
                  disabled: !c.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ o.jsx(mn, { size: 14 })
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: f,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ o.jsx(vn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Oe, HEADER_HEIGHT: Dt, MILESTONE_LANE_HEIGHT: kt } = pe, Et = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], St = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Vt = Qe(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: s, onTaskClick: a, onTaskUpdate: i, onTaskCreate: c, onTaskReorder: u, activeCPId: h, virtualRows: f, totalHeight: p, onTotalWidthChange: x, onTaskGroup: g, onTaskUngroup: y, isAddingTask: b = !1, onCancelAddTask: W }, N) => {
    const j = f && f.length > 0, [E, Y] = ne(null), [J, B] = ne(null), [ee, v] = ne(null), [w, A] = ne(/* @__PURE__ */ new Set()), [_, H] = ne(null), [P, U] = ne(null), [te, Z] = ne(
      Et.map((m) => m.width)
    ), [be, ve] = ne(
      St.map((m) => m.width)
    ), [de, ue] = ne(null), d = fe(!1), D = t === "MASTER" ? Et : St, C = t === "MASTER" ? te : be, L = t === "MASTER" ? Z : ve, z = ye(
      () => D.map((m, l) => ({
        ...m,
        width: C[l] ?? m.width
      })),
      [D, C]
    ), se = u ? 24 : 0, I = z.reduce((m, l) => m + l.width, 0) + se;
    ge(() => {
      x && x(I);
    }, [I, x]);
    const ae = F((m, l) => {
      if (m.detail >= 2) return;
      m.preventDefault(), m.stopPropagation(), d.current = !0, ue(l);
      const M = m.clientX, q = C[l], X = D[l].minWidth, S = ($) => {
        if (!d.current) return;
        const he = $.clientX - M, V = Math.max(X, q + he);
        L((ot) => {
          const qe = [...ot];
          return qe[l] = V, qe;
        });
      }, O = () => {
        d.current = !1, ue(null), document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", O);
      };
      document.addEventListener("mousemove", S), document.addEventListener("mouseup", O);
    }, [C, D, L]), ie = F((m, l = 12, M = "normal") => {
      const X = document.createElement("canvas").getContext("2d");
      return X ? (X.font = `${M} ${l}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, X.measureText(m).width) : 0;
    }, []), Se = F((m) => {
      const l = D[m].minWidth, M = m === 0, q = M ? 48 : 20, X = D[m].label;
      let S = ie(X, 12, "500") + 16;
      return e.forEach((O) => {
        let $ = "", he = 0;
        if (t === "MASTER") {
          const et = O.type === "GROUP";
          switch (M && O.parentId && (he = 20), m) {
            case 0:
              $ = O.name;
              break;
            case 1:
              $ = et ? "-" : O.cp ? `${O.cp.workDaysTotal + O.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              $ = et ? "-" : O.cp ? `${O.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              $ = et ? "-" : O.cp ? `${O.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (m) {
            case 0:
              $ = O.name;
              break;
            case 1:
              $ = O.task ? String(O.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              $ = O.task ? String(O.task.netWorkDays) : "-";
              break;
            case 3:
              $ = O.task ? String(O.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              $ = le(O.startDate, "yyyy-MM-dd");
              break;
            case 5:
              $ = le(O.endDate, "yyyy-MM-dd");
              break;
          }
        const qe = ie($, M ? 14 : 12, M ? "500" : "normal") + q + he;
        S = Math.max(S, qe);
      }), Math.max(l, Math.ceil(S));
    }, [e, t, D, ie]), Ze = F((m, l) => {
      m.preventDefault(), m.stopPropagation(), d.current = !1, ue(null);
      const M = Se(l);
      L((q) => {
        const X = [...q];
        return X[l] = M, X;
      });
    }, [Se, L]), Ie = F((m, l, M) => {
      if (!m.task || !i) return;
      const q = {
        ...m,
        task: {
          ...m.task,
          [l]: M
        }
      };
      i(q);
    }, [i]), Me = F((m, l) => {
      m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", l), Y(l);
      const M = document.createElement("div");
      M.style.opacity = "0", document.body.appendChild(M), m.dataTransfer.setDragImage(M, 0, 0), setTimeout(() => document.body.removeChild(M), 0);
    }, []), We = F((m, l) => {
      if (m.preventDefault(), m.dataTransfer.dropEffect = "move", l === E) return;
      const M = m.currentTarget.getBoundingClientRect(), q = M.top + M.height / 2, X = m.clientY < q ? "before" : "after";
      B(l), v(X);
    }, [E]), Te = F(() => {
      B(null), v(null);
    }, []), Ge = F((m, l) => {
      if (m.preventDefault(), !E || !u || E === l) {
        Y(null), B(null), v(null);
        return;
      }
      const M = e.findIndex((X) => X.id === l), q = ee === "after" ? M + 1 : M;
      u(E, q), Y(null), B(null), v(null);
    }, [E, ee, u, e]), Ve = F(() => {
      Y(null), B(null), v(null);
    }, []), k = F((m, l, M) => {
      if (E) return;
      const q = m.ctrlKey || m.metaKey, X = m.shiftKey;
      if (q)
        A((S) => {
          const O = new Set(S);
          return O.has(l.id) ? O.delete(l.id) : O.add(l.id), O;
        }), H(M);
      else if (X && _ !== null) {
        const S = Math.min(_, M), O = Math.max(_, M);
        A(($) => {
          const he = new Set($);
          for (let V = S; V <= O; V++)
            e[V] && he.add(e[V].id);
          return he;
        });
      } else
        A(/* @__PURE__ */ new Set([l.id])), H(M);
    }, [E, _, e]), T = F((m, l) => {
      m.preventDefault(), w.has(l.id) || A(/* @__PURE__ */ new Set([l.id])), U({
        x: m.clientX,
        y: m.clientY,
        taskId: l.id
      });
    }, [w]);
    ge(() => {
      const m = () => {
        U(null);
      };
      if (P)
        return document.addEventListener("click", m), () => document.removeEventListener("click", m);
    }, [P]), ge(() => {
      const m = (l) => {
        l.key === "Escape" && (A(/* @__PURE__ */ new Set()), U(null));
      };
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
    }, []);
    const K = () => /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: z.map((m, l) => /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: m.width },
        children: [
          m.label,
          l < z.length - 1 && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${de === l ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (M) => ae(M, l),
              onDoubleClick: (M) => Ze(M, l),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          l < z.length - 1 && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      m.id
    )) });
    return t === "MASTER" ? /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Dt },
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 items-center px-4 font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
            K()
          ]
        }
      ),
      de !== null && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ o.jsxs("div", { ref: N, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: kt, minWidth: I },
            children: z.map((m, l) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: m.width },
                children: l === 0 && "Milestone"
              },
              m.id
            ))
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            style: {
              minWidth: I,
              height: j ? p : void 0,
              position: "relative"
            },
            children: (j ? f : e.map((m, l) => ({ index: l, start: l * Oe, size: Oe, key: l }))).map((m) => {
              const l = e[m.index];
              if (!l) return null;
              const M = l.type === "GROUP", q = M && r.some((V) => V.parentId === l.id), X = n.has(l.id), S = l.parentId ? 20 : 0, O = E === l.id, $ = J === l.id, he = w.has(l.id);
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  draggable: !!u,
                  onDragStart: (V) => Me(V, l.id),
                  onDragOver: (V) => We(V, l.id),
                  onDragLeave: Te,
                  onDrop: (V) => Ge(V, l.id),
                  onDragEnd: Ve,
                  onClick: (V) => k(V, l, m.index),
                  onContextMenu: (V) => T(V, l),
                  className: `box-border flex items-center border-b transition-all duration-150 ${O ? "opacity-50 bg-blue-50" : $ ? ee === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : he ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : M ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                  style: {
                    height: Oe,
                    ...j ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${m.start}px)`
                    } : {}
                  },
                  onDoubleClick: () => !M && a(l),
                  title: M ? void 0 : "더블클릭하여 상세 공정표 보기",
                  children: [
                    u && /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                        style: { width: 24 },
                        children: /* @__PURE__ */ o.jsx(wt, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                        style: { width: u ? z[0].width - 24 : z[0].width, paddingLeft: S + 8 },
                        children: [
                          q ? /* @__PURE__ */ o.jsx(
                            "button",
                            {
                              onClick: (V) => {
                                V.stopPropagation(), s(l.id);
                              },
                              className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                              children: X ? /* @__PURE__ */ o.jsx(yn, { size: 14 }) : /* @__PURE__ */ o.jsx(bn, { size: 14 })
                            }
                          ) : /* @__PURE__ */ o.jsx("div", { className: "w-6 shrink-0" }),
                          /* @__PURE__ */ o.jsx(
                            "span",
                            {
                              className: `truncate text-sm ${M ? "font-bold text-gray-700" : "font-medium text-gray-800"}`,
                              children: l.name
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                        style: { width: z[1].width },
                        children: M ? "-" : l.cp ? `${l.cp.workDaysTotal + l.cp.nonWorkDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                        style: { width: z[2].width },
                        children: M ? "-" : l.cp ? `${l.cp.workDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center text-xs text-teal",
                        style: { width: z[3].width },
                        children: M ? "-" : l.cp ? `${l.cp.nonWorkDaysTotal}일` : "-"
                      }
                    )
                  ]
                },
                m.key
              );
            })
          }
        )
      ] }),
      P && /* @__PURE__ */ o.jsx(
        pt,
        {
          x: P.x,
          y: P.y,
          taskId: P.taskId,
          selectedTaskIds: w,
          tasks: e,
          onTaskGroup: g,
          onTaskUngroup: y,
          onClose: () => U(null),
          onDeselect: () => A(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Dt },
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 items-center px-4", children: /* @__PURE__ */ o.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }) }),
            K()
          ]
        }
      ),
      de !== null && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ o.jsxs("div", { ref: N, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: kt, minWidth: I },
            children: z.map((m, l) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: m.width },
                children: l === 0 && "Milestone"
              },
              m.id
            ))
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            style: {
              minWidth: I,
              height: j ? p : void 0,
              position: "relative"
            },
            children: [
              (j ? f : e.map((m, l) => ({ index: l, start: l * Oe, size: Oe, key: l }))).map((m) => {
                const l = e[m.index];
                if (!l) return null;
                const M = E === l.id, q = J === l.id, X = w.has(l.id);
                return /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    draggable: !!u,
                    onDragStart: (S) => Me(S, l.id),
                    onDragOver: (S) => We(S, l.id),
                    onDragLeave: Te,
                    onDrop: (S) => Ge(S, l.id),
                    onDragEnd: Ve,
                    onClick: (S) => k(S, l, m.index),
                    onContextMenu: (S) => T(S, l),
                    className: `box-border flex items-center border-b transition-colors ${M ? "opacity-50 bg-blue-50" : q ? ee === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : X ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: Oe,
                      ...j ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${m.start}px)`
                      } : {}
                    },
                    children: [
                      u && /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ o.jsx(wt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: u ? z[0].width - 24 : z[0].width },
                          children: /* @__PURE__ */ o.jsx("span", { className: "truncate text-sm text-gray-700", children: l.name })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: z[1].width },
                          children: l.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: l.task.indirectWorkDaysPre,
                              onChange: (S) => {
                                const O = S.target.value.replace(/[^0-9]/g, ""), $ = parseInt(O) || 0;
                                Ie(l, "indirectWorkDaysPre", $);
                              },
                              onKeyDown: (S) => {
                                (S.key === "-" || S.key === "e" || S.key === "+" || S.key === ".") && S.preventDefault();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: z[2].width },
                          children: l.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: l.task.netWorkDays,
                              onChange: (S) => {
                                const O = S.target.value.replace(/[^0-9]/g, ""), $ = parseInt(O) || 0;
                                Ie(l, "netWorkDays", $);
                              },
                              onKeyDown: (S) => {
                                (S.key === "-" || S.key === "e" || S.key === "+" || S.key === ".") && S.preventDefault();
                              },
                              title: "순작업일"
                            }
                          ) : /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: z[3].width },
                          children: l.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: l.task.indirectWorkDaysPost,
                              onChange: (S) => {
                                const O = S.target.value.replace(/[^0-9]/g, ""), $ = parseInt(O) || 0;
                                Ie(l, "indirectWorkDaysPost", $);
                              },
                              onKeyDown: (S) => {
                                (S.key === "-" || S.key === "e" || S.key === "+" || S.key === ".") && S.preventDefault();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ o.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: z[4].width },
                          children: le(l.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: z[5].width },
                          children: le(l.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  m.key
                );
              }),
              b && h && /* @__PURE__ */ o.jsx(
                Dn,
                {
                  columns: z,
                  tasks: e,
                  activeCPId: h,
                  onTaskCreate: c,
                  onCancel: W || (() => {
                  }),
                  isVirtualized: j,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      P && /* @__PURE__ */ o.jsx(
        pt,
        {
          x: P.x,
          y: P.y,
          taskId: P.taskId,
          selectedTaskIds: w,
          tasks: e,
          onTaskGroup: g,
          onTaskUngroup: y,
          onClose: () => U(null),
          onDeselect: () => A(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
Vt.displayName = "GanttSidebar";
const Pe = (e, r = [], t) => !!(!t.workOnSaturdays && zt(e) || !t.workOnSundays && Ft(e) || !t.workOnHolidays && r.some((n) => tr(n, e))), ns = (e) => zt(e) || Ft(e), kn = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; Pe(s, t, n); )
    s = G(s, 1);
  for (; a < r; )
    Pe(s, t, n) || a++, a < r && (s = G(s, 1));
  return s;
}, ss = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; a < r; )
    s = G(s, -1), Pe(s, t, n) || a++;
  return s;
}, Mt = (e, r) => r <= 0 ? e : G(e, r - 1), as = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: s, indirectWorkDaysPost: a } = e.task, i = Le(new Date(e.startDate));
  let c = i, u, h;
  s > 0 && (u = c, h = Mt(c, s), c = G(h, 1));
  let f = c, p = f;
  if (n > 0) {
    for (; Pe(f, r, t); )
      f = G(f, 1);
    p = kn(f, n, r, t), c = G(p, 1);
  } else s === 0 && (f = i, p = i);
  let x, g;
  return a > 0 && (x = c, g = Mt(c, a)), {
    startDate: u || f,
    endDate: g || p,
    netWorkStartDate: f,
    netWorkEndDate: p,
    indirectPreStartDate: u,
    indirectPreEndDate: h,
    indirectPostStartDate: x,
    indirectPostEndDate: g
  };
}, is = (e, r, t) => {
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
}, it = (e, r, t) => at(e, r) * t, os = (e, r, t) => {
  const n = Math.round(e / t);
  return G(r, n);
}, cs = (e, r, t) => (at(r, e) + 1) * t, ls = (e) => Ke[e].pixelsPerDay, qt = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((h) => [h.startDate, h.endDate].filter(Boolean)),
    ...r.map((h) => h.date)
  ];
  if (n.length === 0) {
    const h = /* @__PURE__ */ new Date();
    return {
      minDate: h,
      maxDate: G(h, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...n.map((h) => h.getTime()))), a = new Date(Math.max(...n.map((h) => h.getTime()))), i = G(s, -t), c = G(a, t), u = at(c, i);
  return {
    minDate: i,
    maxDate: c,
    totalDays: u
  };
}, { ROW_HEIGHT: oe, HEADER_HEIGHT: En, MILESTONE_LANE_HEIGHT: ce, BAR_HEIGHT: re } = pe, Sn = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: s,
  calendarSettings: a
}) => {
  const i = Array.from({ length: r }, (x, g) => G(e, g)), c = r * t, u = ye(() => {
    const x = [];
    let g = rt(i[0]), y = 0;
    return i.forEach((b) => {
      rt(b) !== g ? (x.push({ label: `${g}년`, days: y }), g = rt(b), y = 1) : y++;
    }), x.push({ label: `${g}년`, days: y }), x;
  }, [i]), h = ye(() => {
    const x = [];
    let g = i[0], y = 0;
    return i.forEach((b) => {
      on(b, g) ? y++ : (x.push({ label: le(g, "M월"), days: y }), g = b, y = 1);
    }), x.push({ label: le(g, "M월"), days: y }), x;
  }, [i]), f = ye(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: c }, children: i.map((x, g) => {
        const y = Je(x), b = Pe(x, s, a), W = y === 0, N = y === 6;
        let j = "text-gray-600";
        W && (j = "text-red-500"), N && (j = "text-blue-500"), b && !W && !N && (j = "text-red-500");
        let E = "";
        return W || b && !N ? E = "bg-red-50/50" : N && (E = "bg-blue-50/50"), /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${E}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `text-[10px] leading-none ${j}`, children: le(x, "d") }),
              /* @__PURE__ */ o.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${j}`, children: ["일", "월", "화", "수", "목", "금", "토"][y] })
            ]
          },
          g
        );
      }) });
    {
      const x = [];
      let g = i[0], y = 0;
      return i.forEach((b) => {
        an(b, g, { weekStartsOn: 0 }) ? y++ : (x.push({ label: `${xt(g, { weekStartsOn: 0 })}주`, days: y }), g = b, y = 1);
      }), x.push({ label: `${xt(g, { weekStartsOn: 0 })}주`, days: y }), /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: c }, children: x.map((b, W) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: b.days * t },
          children: b.label
        },
        W
      )) });
    }
  }, [i, n, t, s, a, c]), p = n === "MONTH";
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: En, minWidth: c },
      children: p ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: c },
            children: u.map((x, g) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: x.days * t },
                children: x.label
              },
              g
            ))
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: c },
            children: h.map((x, g) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: x.days * t },
                children: x.label
              },
              g
            ))
          }
        )
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: c },
            children: u.map((x, g) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: x.days * t },
                children: x.label
              },
              g
            ))
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: c },
            children: h.map((x, g) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: x.days * t },
                children: x.label
              },
              g
            ))
          }
        ),
        f
      ] })
    }
  );
}, Mn = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: a,
  zoomLevel: i
}) => {
  const c = ye(() => {
    if (i === "MONTH") return [];
    const u = [];
    for (let h = 0; h < r; h++) {
      const f = G(e, h), p = Je(f), x = p === 0, g = p === 6;
      if (Pe(f, s, a) || g) {
        const b = h * n;
        let W = "rgba(254, 242, 242, 0.5)";
        g && !x && (W = "rgba(239, 246, 255, 0.5)"), x && (W = "rgba(254, 242, 242, 0.5)"), u.push(
          /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: b,
              y: 0,
              width: n,
              height: t,
              fill: W,
              className: "pointer-events-none"
            },
            `weekend-${h}`
          )
        );
      }
    }
    return u;
  }, [e, r, t, n, s, a, i]);
  return /* @__PURE__ */ o.jsx("g", { children: c });
}, Wn = ({ milestone: e, x: r }) => {
  const n = ce / 2;
  return /* @__PURE__ */ o.jsxs("g", { transform: `translate(${r}, ${n})`, className: "group cursor-pointer", children: [
    /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
      "path",
      {
        d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
        fill: me.milestone,
        stroke: "white",
        strokeWidth: 1,
        className: "drop-shadow-sm transition-all duration-150 group-hover:opacity-0 group-hover:scale-0"
      }
    ),
    /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
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
}, Tn = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: s,
  isDraggable: a = !1,
  dragInfo: i,
  onDragStart: c
}) => {
  var g, y;
  if (e.type === "GROUP") return null;
  const u = 4, h = !!i, f = (i == null ? void 0 : i.startDate) || e.startDate, p = (i == null ? void 0 : i.endDate) || e.endDate, x = it(f, t, n);
  if (s) {
    const b = ((g = e.cp) == null ? void 0 : g.workDaysTotal) || 0, W = ((y = e.cp) == null ? void 0 : y.nonWorkDaysTotal) || 0;
    if (b + W === 0) return null;
    const j = b * n, E = W * n;
    return /* @__PURE__ */ o.jsxs("g", { transform: `translate(${x}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ o.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: j,
          height: re,
          fill: me.vermilion,
          rx: u,
          ry: u,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "rect",
        {
          x: j,
          y: 0,
          width: E,
          height: re,
          fill: me.teal,
          rx: u,
          ry: u,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "text",
        {
          x: -8,
          y: re / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: b, indirectWorkDaysPre: W, indirectWorkDaysPost: N } = e.task, j = (i == null ? void 0 : i.indirectWorkDaysPre) ?? W, E = (i == null ? void 0 : i.indirectWorkDaysPost) ?? N, Y = j * n, J = b * n, B = E * n, ee = Y + J + B, v = 0, w = Y, A = Y + J, _ = 8, H = {
      startDate: f,
      endDate: p,
      indirectWorkDaysPre: j,
      netWorkDays: b,
      indirectWorkDaysPost: E
    };
    return /* @__PURE__ */ o.jsxs(
      "g",
      {
        transform: `translate(${x}, ${r})`,
        className: `group ${h ? "opacity-90" : ""}`,
        children: [
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: Y,
              y: 0,
              width: J,
              height: re,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (P) => c == null ? void 0 : c(P, e.id, "move", H)
            }
          ),
          j > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: v,
              y: 0,
              width: Y,
              height: re,
              fill: me.blue,
              rx: u,
              ry: u,
              className: `drop-shadow-sm transition-opacity ${h ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          b > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: w,
              y: 0,
              width: J,
              height: re,
              fill: me.red,
              rx: u,
              ry: u,
              className: `drop-shadow-sm transition-opacity ${h ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          E > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: A,
              y: 0,
              width: B,
              height: re,
              fill: me.blue,
              rx: u,
              ry: u,
              className: `drop-shadow-sm transition-opacity ${h ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: -_ / 2,
              y: 0,
              width: _,
              height: re,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (P) => c == null ? void 0 : c(P, e.id, "resize-pre", H),
              children: /* @__PURE__ */ o.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: ee - _ / 2,
              y: 0,
              width: _,
              height: re,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (P) => c == null ? void 0 : c(P, e.id, "resize-post", H),
              children: /* @__PURE__ */ o.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: 1,
                y: re / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: ee - 4,
                y: re / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx(
            "text",
            {
              x: -8,
              y: re / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          h && /* @__PURE__ */ o.jsxs("g", { children: [
            /* @__PURE__ */ o.jsxs(
              "text",
              {
                x: ee / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  le(f, "MM/dd"),
                  " ~ ",
                  le(p, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "text",
              {
                x: ee / 2,
                y: re + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  j,
                  "일 + 순",
                  b,
                  "일 + 뒤",
                  E,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, jn = () => /* @__PURE__ */ o.jsx("defs", { children: /* @__PURE__ */ o.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ o.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: me.dependency })
  }
) }), Xt = Qe(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: s, calendarSettings: a, onBarDrag: i, virtualRows: c, totalHeight: u }, h) => {
    const f = Ke[n].pixelsPerDay, p = t === "MASTER", x = c && c.length > 0, [g, y] = ne(null), { minDate: b, totalDays: W } = ye(() => qt(e, r, 60), [e, r]), N = W * f, j = Math.max(x ? (u || 0) + ce + 100 : e.length * oe + ce + 100, 500), E = fe(null);
    ge(() => {
      E.current = g;
    }, [g]);
    const Y = F((v, w, A, _) => {
      if (!i) return;
      v.preventDefault(), v.stopPropagation();
      const H = {
        taskId: w,
        dragType: A,
        startX: v.clientX,
        originalStartDate: _.startDate,
        originalEndDate: _.endDate,
        originalIndirectWorkDaysPre: _.indirectWorkDaysPre,
        originalNetWorkDays: _.netWorkDays,
        originalIndirectWorkDaysPost: _.indirectWorkDaysPost,
        currentStartDate: _.startDate,
        currentEndDate: _.endDate,
        currentIndirectWorkDaysPre: _.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: _.indirectWorkDaysPost
      };
      y(H), E.current = H;
    }, [i]), J = F((v) => {
      const w = E.current;
      if (!w || !i) return;
      const A = v.clientX - w.startX, _ = Math.round(A / f);
      let H = w.originalStartDate, P = w.originalEndDate, U = w.originalIndirectWorkDaysPre, te = w.originalIndirectWorkDaysPost;
      if (w.dragType === "move")
        H = G(w.originalStartDate, _), P = G(w.originalEndDate, _);
      else if (w.dragType === "resize-pre") {
        U = Math.max(0, w.originalIndirectWorkDaysPre - _);
        const Z = G(w.originalStartDate, w.originalIndirectWorkDaysPre);
        H = G(Z, -U), P = w.originalEndDate;
      } else if (w.dragType === "resize-post") {
        te = Math.max(0, w.originalIndirectWorkDaysPost + _);
        const Z = G(w.originalEndDate, -w.originalIndirectWorkDaysPost);
        P = G(Z, te), H = w.originalStartDate;
      }
      y((Z) => Z ? {
        ...Z,
        currentStartDate: H,
        currentEndDate: P,
        currentIndirectWorkDaysPre: U,
        currentIndirectWorkDaysPost: te
      } : null);
    }, [i, f]), B = F(() => {
      const v = E.current;
      if (!v || !i) {
        y(null), E.current = null;
        return;
      }
      const w = v.currentStartDate.getTime() !== v.originalStartDate.getTime() || v.currentEndDate.getTime() !== v.originalEndDate.getTime(), A = v.currentIndirectWorkDaysPre !== v.originalIndirectWorkDaysPre || v.currentIndirectWorkDaysPost !== v.originalIndirectWorkDaysPost;
      (w || A) && i({
        taskId: v.taskId,
        dragType: v.dragType,
        newStartDate: v.currentStartDate,
        newEndDate: v.currentEndDate,
        newIndirectWorkDaysPre: v.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: v.currentIndirectWorkDaysPost
      }), y(null), E.current = null;
    }, [i]);
    ge(() => {
      if (g)
        return window.addEventListener("mousemove", J), window.addEventListener("mouseup", B), document.body.style.cursor = g.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", B), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [g, J, B]);
    const ee = F((v) => g && g.taskId === v ? {
      startDate: g.currentStartDate,
      endDate: g.currentEndDate,
      indirectWorkDaysPre: g.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: g.currentIndirectWorkDaysPost
    } : null, [g]);
    return /* @__PURE__ */ o.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ o.jsxs("div", { ref: h, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ o.jsx(
        Sn,
        {
          minDate: b,
          totalDays: W,
          pixelsPerDay: f,
          zoomLevel: n,
          holidays: s,
          calendarSettings: a
        }
      ),
      /* @__PURE__ */ o.jsxs("svg", { width: N, height: j, className: "block bg-white", children: [
        /* @__PURE__ */ o.jsx(jn, {}),
        /* @__PURE__ */ o.jsx(
          Mn,
          {
            minDate: b,
            totalDays: W,
            chartHeight: j,
            pixelsPerDay: f,
            holidays: s,
            calendarSettings: a,
            zoomLevel: n
          }
        ),
        (x ? c : e.map((v, w) => ({ index: w, start: w * oe, size: oe, key: w }))).map((v) => {
          const w = e[v.index];
          if (!w || w.type !== "GROUP") return null;
          const A = v.start + ce;
          return /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: 0,
              y: A,
              width: N,
              height: oe,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${v.key}`
          );
        }),
        Array.from({ length: W }, (v, w) => {
          const A = (w + 1) * f, _ = G(b, w), H = Je(_);
          let P = !1, U = "#f0f0f0";
          return n === "DAY" ? (P = !0, U = H === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (P = H === 0, U = "#e5e7eb") : n === "MONTH" && (P = H === 0, U = "#f0f0f0"), P ? /* @__PURE__ */ o.jsx(
            "line",
            {
              x1: A,
              y1: 0,
              x2: A,
              y2: j,
              stroke: U,
              strokeWidth: 1
            },
            `vline-${w}`
          ) : null;
        }),
        (x ? c : e.map((v, w) => ({ index: w, start: w * oe, size: oe, key: w }))).map((v) => /* @__PURE__ */ o.jsx(
          "line",
          {
            x1: 0,
            y1: v.start + oe + ce,
            x2: N,
            y2: v.start + oe + ce,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${v.key}`
        )),
        /* @__PURE__ */ o.jsx("rect", { x: 0, y: 0, width: N, height: ce, fill: "transparent" }),
        r.map((v) => /* @__PURE__ */ o.jsx(
          Wn,
          {
            milestone: v,
            x: it(v.date, b, f)
          },
          v.id
        )),
        /* @__PURE__ */ o.jsx(
          "line",
          {
            x1: 0,
            y1: ce,
            x2: N,
            y2: ce,
            stroke: me.grid,
            strokeWidth: 1
          }
        ),
        (x ? c : e.map((v, w) => ({ index: w, start: w * oe, size: oe, key: w }))).map((v) => {
          const w = e[v.index];
          if (!w) return null;
          const A = v.start + (oe - re) / 2 + ce;
          return /* @__PURE__ */ o.jsx(
            Tn,
            {
              task: w,
              y: A,
              minDate: b,
              pixelsPerDay: f,
              isMasterView: p,
              isDraggable: !p && !!i,
              dragInfo: ee(w.id),
              onDragStart: Y
            },
            v.key
          );
        })
      ] })
    ] }) });
  }
);
Xt.displayName = "GanttTimeline";
const Wt = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (h, f) => {
    const p = typeof h == "function" ? h(r) : h;
    if (!Object.is(p, r)) {
      const x = r;
      r = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, r, p), t.forEach((g) => g(r, x));
    }
  }, s = () => r, c = { setState: n, getState: s, getInitialState: () => u, subscribe: (h) => (t.add(h), () => t.delete(h)) }, u = r = e(n, s, c);
  return c;
}, On = (e) => e ? Wt(e) : Wt, Nn = (e) => e;
function Pn(e, r = Nn) {
  const t = ke.useSyncExternalStore(
    e.subscribe,
    ke.useCallback(() => r(e.getState()), [e, r]),
    ke.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return ke.useDebugValue(t), t;
}
const Tt = (e) => {
  const r = On(e), t = (n) => Pn(r, n);
  return Object.assign(t, r), t;
}, _n = (e) => e ? Tt(e) : Tt, jt = (e) => Symbol.iterator in e, Ot = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Nt = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [s, a] of t)
    if (!n.has(s) || !Object.is(a, n.get(s)))
      return !1;
  return !0;
}, Cn = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let s = t.next(), a = n.next();
  for (; !s.done && !a.done; ) {
    if (!Object.is(s.value, a.value))
      return !1;
    s = t.next(), a = n.next();
  }
  return !!s.done && !!a.done;
};
function In(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : jt(e) && jt(r) ? Ot(e) && Ot(r) ? Nt(e, r) : Cn(e, r) : Nt(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function _e(e) {
  const r = ke.useRef(void 0);
  return (t) => {
    const n = e(t);
    return In(r.current, n) ? r.current : r.current = n;
  };
}
const Ce = _n((e, r) => ({
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
  sidebarWidth: pe.SIDEBAR_WIDTH,
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
      pe.SIDEBAR_MIN_WIDTH,
      Math.min(t, pe.SIDEBAR_MAX_WIDTH)
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
})), Rn = () => Ce(
  _e((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), An = () => Ce(
  _e((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), ds = () => Ce(
  _e((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), zn = () => Ce(
  _e((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Fn = () => Ce(
  _e((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), us = () => Ce(
  _e((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Ne(e, r, t) {
  let n = t.initialDeps ?? [], s;
  function a() {
    var i, c, u, h;
    let f;
    t.key && ((i = t.debug) != null && i.call(t)) && (f = Date.now());
    const p = e();
    if (!(p.length !== n.length || p.some((y, b) => n[b] !== y)))
      return s;
    n = p;
    let g;
    if (t.key && ((c = t.debug) != null && c.call(t)) && (g = Date.now()), s = r(...p), t.key && ((u = t.debug) != null && u.call(t))) {
      const y = Math.round((Date.now() - f) * 100) / 100, b = Math.round((Date.now() - g) * 100) / 100, W = b / 16, N = (j, E) => {
        for (j = String(j); j.length < E; )
          j = " " + j;
        return j;
      };
      console.info(
        `%c⏱ ${N(b, 5)} /${N(y, 5)} ms`,
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
    return (h = t == null ? void 0 : t.onChange) == null || h.call(t, s), s;
  }
  return a.updateDeps = (i) => {
    n = i;
  }, a;
}
function Pt(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ln = (e, r) => Math.abs(e - r) < 1.01, Hn = (e, r, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, s), t);
  };
}, _t = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Yn = (e) => e, $n = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let s = r; s <= t; s++)
    n.push(s);
  return n;
}, Gn = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: c, height: u } = i;
    r({ width: Math.round(c), height: Math.round(u) });
  };
  if (s(_t(t)), !n.ResizeObserver)
    return () => {
    };
  const a = new n.ResizeObserver((i) => {
    const c = () => {
      const u = i[0];
      if (u != null && u.borderBoxSize) {
        const h = u.borderBoxSize[0];
        if (h) {
          s({ width: h.inlineSize, height: h.blockSize });
          return;
        }
      }
      s(_t(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, Ct = {
  passive: !0
}, It = typeof window > "u" ? !0 : "onscrollend" in window, Vn = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && It ? () => {
  } : Hn(
    n,
    () => {
      r(s, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (f) => () => {
    const { horizontal: p, isRtl: x } = e.options;
    s = p ? t.scrollLeft * (x && -1 || 1) : t.scrollTop, a(), r(s, f);
  }, c = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", c, Ct);
  const h = e.options.useScrollendEvent && It;
  return h && t.addEventListener("scrollend", u, Ct), () => {
    t.removeEventListener("scroll", c), h && t.removeEventListener("scrollend", u);
  };
}, qn = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Xn = (e, {
  adjustments: r = 0,
  behavior: t
}, n) => {
  var s, a;
  const i = e + r;
  (a = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || a.call(s, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class Bn {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
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
        getItemKey: Yn,
        rangeExtractor: $n,
        onChange: () => {
        },
        measureElement: qn,
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
    }, this.maybeNotify = Ne(
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
      for (let i = n - 1; i >= 0; i--) {
        const c = t[i];
        if (s.has(c.lane))
          continue;
        const u = a.get(
          c.lane
        );
        if (u == null || c.end > u.end ? a.set(c.lane, c) : c.end < u.end && s.set(c.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((i, c) => i.end === c.end ? i.index - c.index : i.end - c.end)[0] : void 0;
    }, this.getMeasurementOptions = Ne(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, s, a, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: a,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ne(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: a, enabled: i }, c) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const h = this.measurementsCache.slice(0, u);
        for (let f = u; f < t; f++) {
          const p = a(f), x = this.options.lanes === 1 ? h[f - 1] : this.getFurthestMeasurement(h, f), g = x ? x.end + this.options.gap : n + s, y = c.get(p), b = typeof y == "number" ? y : this.options.estimateSize(f), W = g + b, N = x ? x.lane : f % this.options.lanes;
          h[f] = {
            index: f,
            start: g,
            size: b,
            end: W,
            key: p,
            lane: N
          };
        }
        return this.measurementsCache = h, h;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ne(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, a) => this.range = t.length > 0 && n > 0 ? Un({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ne(
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
      (t, n, s, a, i) => a === null || i === null ? [] : t({
        startIndex: a,
        endIndex: i,
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
      const i = a.key, c = this.elementsCache.get(i);
      c !== t && (c && this.observer.unobserve(c), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.itemSizeCache.get(s.key) ?? s.size, i = n - a;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", i), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
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
    }, this.getVirtualItems = Ne(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let a = 0, i = t.length; a < i; a++) {
          const c = t[a], u = n[c];
          s.push(u);
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
        return Pt(
          n[Bt(
            0,
            n.length - 1,
            (s) => Pt(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const a = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + a ? "end" : "start"), n === "center" ? t += (s - a) / 2 : n === "end" && (t -= a);
      const c = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(c, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const a = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (s.end >= i + a - this.options.scrollPaddingEnd)
          n = "end";
        else if (s.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
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
      const i = 10, c = (h) => {
        if (!this.targetWindow) return;
        const f = this.getOffsetForIndex(t, h);
        if (!f) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [p, x] = f;
        this._scrollToOffset(p, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const g = this.getScrollOffset(), y = this.getOffsetForIndex(t, x);
          if (!y) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Ln(y[0], g) || u(x);
        });
      }, u = (h) => {
        this.targetWindow && (a++, a < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, i), this.targetWindow.requestAnimationFrame(() => c(h))) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
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
        let i = n.length - 1;
        for (; i >= 0 && a.some((c) => c === null); ) {
          const c = n[i];
          a[c.lane] === null && (a[c.lane] = c.end), i--;
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
const Bt = (e, r, t, n) => {
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
function Un({
  measurements: e,
  outerSize: r,
  scrollOffset: t,
  lanes: n
}) {
  const s = e.length - 1, a = (u) => e[u].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = Bt(
    0,
    s,
    a,
    t
  ), c = i;
  if (n === 1)
    for (; c < s && e[c].end < t + r; )
      c++;
  else if (n > 1) {
    const u = Array(n).fill(0);
    for (; c < s && u.some((f) => f < t + r); ) {
      const f = e[c];
      u[f.lane] = f.end, c++;
    }
    const h = Array(n).fill(t + r);
    for (; i >= 0 && h.some((f) => f >= t); ) {
      const f = e[i];
      h[f.lane] = f.start, i--;
    }
    i = Math.max(0, i - i % n), c = Math.min(s, c + (n - 1 - c % n));
  }
  return { startIndex: i, endIndex: c };
}
const Rt = typeof document < "u" ? Be.useLayoutEffect : Be.useEffect;
function Kn(e) {
  const r = Be.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, a) => {
      var i;
      a ? Ut(r) : r(), (i = e.onChange) == null || i.call(e, s, a);
    }
  }, [n] = Be.useState(
    () => new Bn(t)
  );
  return n.setOptions(t), Rt(() => n._didMount(), []), Rt(() => n._willUpdate()), n;
}
function Qn(e) {
  return Kn({
    observeElementRect: Gn,
    observeElementOffset: Vn,
    scrollToFn: Xn,
    ...e
  });
}
const { ROW_HEIGHT: Jn } = pe;
function Zn({
  containerRef: e,
  count: r,
  rowHeight: t = Jn,
  overscan: n = 5
}) {
  const s = Qn({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  }), a = s.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: ye(() => a.map((c) => ({
      index: c.index,
      start: c.start,
      size: c.size,
      key: c.index
      // index는 항상 number이므로 타입 안전
    })), [a]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: s.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: s
  };
}
const es = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function hs({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = es,
  initialView: s = "MASTER",
  initialZoomLevel: a = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: i,
  onTaskUpdate: c,
  onTaskCreate: u,
  onTaskReorder: h,
  onTaskGroup: f,
  onTaskUngroup: p,
  onViewChange: x,
  onSave: g,
  onReset: y,
  hasUnsavedChanges: b,
  saveStatus: W,
  className: N,
  style: j
}) {
  const { viewMode: E, activeCPId: Y, zoomLevel: J } = Rn(), { setViewMode: B, setZoomLevel: ee } = An(), { sidebarWidth: v, setSidebarWidth: w } = Fn(), { expandedTaskIds: A, toggleTask: _, expandAll: H } = zn(), P = fe(null), U = fe(null), te = fe(null), Z = fe(!1), be = fe(!1), [ve, de] = ne(!1), [ue, d] = ne(!1), D = F(() => {
    d(!0);
  }, []), C = F(() => {
    d(!1);
  }, []), L = fe(!1), z = ye(() => e.map((k) => k.id), [e]);
  ge(() => {
    L.current || (L.current = !0, B(s), ee(a), i && i.length > 0 ? H(i) : z.length > 0 && H(z));
  }, [z, i, s, a, B, ee, H]);
  const se = ye(() => {
    if (E === "MASTER") {
      const k = [];
      return e.forEach((T) => {
        (T.wbsLevel === 1 && !T.parentId || T.wbsLevel === 1 && T.parentId && A.has(T.parentId)) && k.push(T);
      }), k;
    } else
      return e.filter((k) => k.wbsLevel === 2 && k.parentId === Y);
  }, [e, E, Y, A]), { virtualRows: I, totalHeight: ae } = Zn({
    containerRef: te,
    count: se.length
  });
  ge(() => {
    const k = U.current, T = te.current;
    if (!k || !T) return;
    const K = () => {
      Z.current || (Z.current = !0, T.scrollTop = k.scrollTop, requestAnimationFrame(() => {
        Z.current = !1;
      }));
    }, m = () => {
      Z.current || (Z.current = !0, k.scrollTop = T.scrollTop, requestAnimationFrame(() => {
        Z.current = !1;
      }));
    };
    return k.addEventListener("scroll", K), T.addEventListener("scroll", m), () => {
      k.removeEventListener("scroll", K), T.removeEventListener("scroll", m);
    };
  }, []);
  const [ie, Se] = ne(null), Ze = F((k) => {
    if (k.detail >= 2) return;
    k.preventDefault(), be.current = !0, de(!0);
    const T = k.clientX, K = v, m = (M) => {
      if (!be.current) return;
      const q = M.clientX - T;
      w(K + q);
    }, l = () => {
      be.current = !1, de(!1), document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", l);
    };
    document.addEventListener("mousemove", m), document.addEventListener("mouseup", l);
  }, [v, w]), Ie = F(() => {
    w(ie !== null ? ie : pe.SIDEBAR_WIDTH);
  }, [ie, w]), Me = F((k, T) => {
    B(k, T), x == null || x(k, T);
  }, [B, x]), We = F((k) => {
    const T = te.current;
    if (!T) return;
    const K = Ke[J].pixelsPerDay, { minDate: m } = qt(e, r, 60), l = it(k, m, K);
    T.scrollLeft = Math.max(0, l - 50);
  }, [J, e, r]), Te = F(() => {
    if (E === "MASTER") {
      const k = se.filter((T) => T.type === "CP");
      if (k.length > 0) {
        const T = k.reduce(
          (m, l) => m.startDate < l.startDate ? m : l
        ), K = new Date(T.startDate);
        K.setDate(K.getDate() - 5), We(K);
      }
    } else if (E === "DETAIL" && Y) {
      const k = e.filter((T) => T.parentId === Y);
      if (k.length > 0) {
        const T = k.reduce(
          (m, l) => m.startDate < l.startDate ? m : l
        ), K = new Date(T.startDate);
        K.setDate(K.getDate() - 5), We(K);
      }
    }
  }, [E, Y, e, se, We]), Ge = F((k) => {
    E === "MASTER" && k.type === "CP" && Me("DETAIL", k.id);
  }, [E, Me]);
  ge(() => {
    if (E === "DETAIL" && Y) {
      const k = setTimeout(() => {
        Te();
      }, 100);
      return () => clearTimeout(k);
    }
  }, [E, Y, Te]);
  const Ve = F(async (k) => {
    if (c)
      try {
        const T = e.find((m) => m.id === k.taskId);
        if (!T || !T.task) return;
        const K = {
          ...T,
          startDate: k.newStartDate,
          endDate: k.newEndDate,
          task: {
            ...T.task,
            indirectWorkDaysPre: k.newIndirectWorkDaysPre,
            indirectWorkDaysPost: k.newIndirectWorkDaysPost
          }
        };
        await c(K);
      } catch (T) {
        console.error("Failed to update task:", T);
      }
  }, [e, c]);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: P,
      className: `flex h-full w-full flex-col bg-gray-50 ${N || ""}`,
      style: j,
      children: [
        /* @__PURE__ */ o.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-3 shrink-0", children: E === "DETAIL" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => Me("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            u && !ue && /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: D,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ o.jsx("div", { className: "w-[180px]" }) }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: Te,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: E === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (E === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((k) => /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => ee(k),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${J === k ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Ke[k].label
              },
              k
            )) }),
            /* @__PURE__ */ o.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              le(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
            g && /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: g,
                disabled: !b || W === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${b ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: W === "saving" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  /* @__PURE__ */ o.jsxs("svg", { className: "h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ o.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ o.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                  ] }),
                  "저장 중..."
                ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" }) }),
                  "저장"
                ] })
              }
            ),
            y && /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: y,
                className: "flex items-center gap-1.5 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 active:bg-gray-300",
                children: [
                  /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }),
                  "초기화"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: v },
              children: /* @__PURE__ */ o.jsx(
                Vt,
                {
                  ref: U,
                  tasks: se,
                  allTasks: e,
                  viewMode: E,
                  expandedIds: A,
                  onToggle: _,
                  onTaskClick: Ge,
                  onTaskUpdate: c,
                  onTaskCreate: u,
                  onTaskReorder: h,
                  onTaskGroup: f,
                  onTaskUngroup: p,
                  activeCPId: Y,
                  virtualRows: I,
                  totalHeight: ae,
                  onTotalWidthChange: Se,
                  isAddingTask: ue,
                  onCancelAddTask: C
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${ve ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: Ze,
              onDoubleClick: Ie,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ o.jsx(
            Xt,
            {
              ref: te,
              tasks: se,
              milestones: r,
              viewMode: E,
              zoomLevel: J,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: c,
              onBarDrag: Ve,
              virtualRows: I,
              totalHeight: ae
            }
          ) }),
          ve && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] })
      ]
    }
  );
}
export {
  me as GANTT_COLORS,
  pe as GANTT_LAYOUT,
  hs as GanttChart,
  Vt as GanttSidebar,
  Xt as GanttTimeline,
  Ke as ZOOM_CONFIG,
  Mt as addCalendarDays,
  kn as addWorkingDays,
  qt as calculateDateRange,
  as as calculateDualCalendarDates,
  it as dateToX,
  is as getAnchorDate,
  cs as getDateRangeWidth,
  ls as getPixelsPerDay,
  Pe as isHoliday,
  ns as isWeekend,
  ss as subtractWorkingDays,
  us as useGanttDrag,
  zn as useGanttExpansion,
  ds as useGanttSelection,
  Fn as useGanttSidebar,
  Ce as useGanttStore,
  An as useGanttViewActions,
  Rn as useGanttViewState,
  Zn as useGanttVirtualization,
  os as xToDate
};
