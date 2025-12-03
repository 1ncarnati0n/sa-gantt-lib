"use client";
import * as xt from "react";
import Oe, { forwardRef as pt, createElement as Nt, useState as V, useRef as le, useEffect as ae, useCallback as W, useMemo as be } from "react";
import cn, { flushSync as kn } from "react-dom";
var Mt = { exports: {} }, tt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function jn() {
  if (Tt) return tt;
  Tt = 1;
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
  return tt.Fragment = n, tt.jsx = t, tt.jsxs = t, tt;
}
var nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function En() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === X ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case E:
          return "Fragment";
        case P:
          return "Profiler";
        case M:
          return "StrictMode";
        case A:
          return "Suspense";
        case C:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case x:
            return "Portal";
          case T:
            return d.displayName || "Context";
          case z:
            return (d._context.displayName || "Context") + ".Consumer";
          case $:
            var k = d.render;
            return d = d.displayName, d || (d = k.displayName || k.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case R:
            return k = d.displayName || null, k !== null ? k : e(d.type) || "Memo";
          case G:
            k = d._payload, d = d._init;
            try {
              return e(d(k));
            } catch {
            }
        }
      return null;
    }
    function n(d) {
      return "" + d;
    }
    function t(d) {
      try {
        n(d);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var O = k.error, I = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return O.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), n(d);
      }
    }
    function r(d) {
      if (d === E) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === G)
        return "<...>";
      try {
        var k = e(d);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var d = Q.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(d) {
      if (H.call(d, "key")) {
        var k = Object.getOwnPropertyDescriptor(d, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function l(d, k) {
      function O() {
        de || (de = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: O,
        configurable: !0
      });
    }
    function h() {
      var d = e(this.type);
      return U[d] || (U[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function m(d, k, O, I, ce, se) {
      var q = O.ref;
      return d = {
        $$typeof: g,
        type: d,
        key: k,
        props: O,
        _owner: I
      }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: h
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
        value: ce
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, k, O, I, ce, se) {
      var q = k.children;
      if (q !== void 0)
        if (I)
          if (J(q)) {
            for (I = 0; I < q.length; I++)
              w(q[I]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(q);
      if (H.call(k, "key")) {
        q = e(d);
        var ie = Object.keys(k).filter(function(je) {
          return je !== "key";
        });
        I = 0 < ie.length ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}", L[q + I] || (ie = 0 < ie.length ? "{" + ie.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          q,
          ie,
          q
        ), L[q + I] = !0);
      }
      if (q = null, O !== void 0 && (t(O), q = "" + O), o(k) && (t(k.key), q = "" + k.key), "key" in k) {
        O = {};
        for (var ge in k)
          ge !== "key" && (O[ge] = k[ge]);
      } else O = k;
      return q && l(
        O,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), m(
        d,
        q,
        O,
        s(),
        ce,
        se
      );
    }
    function w(d) {
      y(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === G && (d._payload.status === "fulfilled" ? y(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function y(d) {
      return typeof d == "object" && d !== null && d.$$typeof === g;
    }
    var p = Oe, g = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), T = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), Q = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, J = Array.isArray, ne = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var de, U = {}, D = p.react_stack_bottom_frame.bind(
      p,
      i
    )(), v = ne(r(i)), L = {};
    nt.Fragment = E, nt.jsx = function(d, k, O) {
      var I = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return f(
        d,
        k,
        O,
        !1,
        I ? Error("react-stack-top-frame") : D,
        I ? ne(r(d)) : v
      );
    }, nt.jsxs = function(d, k, O) {
      var I = 1e4 > Q.recentlyCreatedOwnerStacks++;
      return f(
        d,
        k,
        O,
        !0,
        I ? Error("react-stack-top-frame") : D,
        I ? ne(r(d)) : v
      );
    };
  }()), nt;
}
process.env.NODE_ENV === "production" ? Mt.exports = jn() : Mt.exports = En();
var a = Mt.exports;
const dn = 6048e5, Nn = 864e5, Pt = Symbol.for("constructDateFrom");
function De(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && Pt in e ? e[Pt](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ee(e, n) {
  return De(n || e, e);
}
function B(e, n, t) {
  const r = ee(e, t == null ? void 0 : t.in);
  return isNaN(n) ? De(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function un(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 6;
}
function hn(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay() === 0;
}
let Mn = {};
function ot() {
  return Mn;
}
function Ie(e, n) {
  var l, h, m, f;
  const t = ot(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = ee(e, n == null ? void 0 : n.in), i = s.getDay(), o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function yt(e, n) {
  return Ie(e, { ...n, weekStartsOn: 1 });
}
function fn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = De(t, 0);
  s.setFullYear(r + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const i = yt(s), o = De(t, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const l = yt(o);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function Ct(e) {
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
function lt(e, ...n) {
  const t = De.bind(
    null,
    e || n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function at(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function mn(e, n, t) {
  const [r, s] = lt(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = at(r), o = at(s), l = +i - Ct(i), h = +o - Ct(o);
  return Math.round((l - h) / Nn);
}
function Sn(e, n) {
  const t = fn(e, n), r = De(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), yt(r);
}
function Wn(e, n, t) {
  const [r, s] = lt(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +at(r) == +at(s);
}
function Tn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function On(e) {
  return !(!Tn(e) && typeof e != "number" || isNaN(+ee(e)));
}
function St(e, n, t) {
  const [r, s] = lt(
    t == null ? void 0 : t.in,
    e,
    n
  ), i = _t(r, s), o = Math.abs(
    mn(r, s)
  );
  r.setDate(r.getDate() - i * o);
  const l = +(_t(r, s) === -i), h = i * (o - l);
  return h === 0 ? 0 : h;
}
function _t(e, n) {
  const t = e.getFullYear() - n.getFullYear() || e.getMonth() - n.getMonth() || e.getDate() - n.getDate() || e.getHours() - n.getHours() || e.getMinutes() - n.getMinutes() || e.getSeconds() - n.getSeconds() || e.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Pn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Cn(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const _n = {
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
}, Rn = (e, n, t) => {
  let r;
  const s = _n[e];
  return typeof s == "string" ? r = s : n === 1 ? r = s.one : r = s.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jt(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const In = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, An = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ln = {
  date: jt({
    formats: In,
    defaultWidth: "full"
  }),
  time: jt({
    formats: An,
    defaultWidth: "full"
  }),
  dateTime: jt({
    formats: zn,
    defaultWidth: "full"
  })
}, Fn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Hn = (e, n, t, r) => Fn[e];
function rt(e) {
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
const Yn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gn = {
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
}, Xn = {
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
}, Vn = {
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
}, Bn = {
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
}, qn = (e, n) => {
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
}, Kn = {
  ordinalNumber: qn,
  era: rt({
    values: Yn,
    defaultWidth: "wide"
  }),
  quarter: rt({
    values: $n,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: rt({
    values: Gn,
    defaultWidth: "wide"
  }),
  day: rt({
    values: Xn,
    defaultWidth: "wide"
  }),
  dayPeriod: rt({
    values: Vn,
    defaultWidth: "wide",
    formattingValues: Bn,
    defaultFormattingWidth: "wide"
  })
};
function st(e) {
  return (n, t = {}) => {
    const r = t.width, s = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(s);
    if (!i)
      return null;
    const o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(l) ? Un(l, (w) => w.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Qn(l, (w) => w.test(o))
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
function Qn(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Un(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Jn(e) {
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
const Zn = /^(\d+)(th|st|nd|rd)?/i, er = /\d+/i, tr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, nr = {
  any: [/^b/i, /^(a|c)/i]
}, rr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ar = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ir = {
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
}, or = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, lr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, cr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, dr = {
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
}, ur = {
  ordinalNumber: Jn({
    matchPattern: Zn,
    parsePattern: er,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: st({
    matchPatterns: tr,
    defaultMatchWidth: "wide",
    parsePatterns: nr,
    defaultParseWidth: "any"
  }),
  quarter: st({
    matchPatterns: rr,
    defaultMatchWidth: "wide",
    parsePatterns: sr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: st({
    matchPatterns: ar,
    defaultMatchWidth: "wide",
    parsePatterns: ir,
    defaultParseWidth: "any"
  }),
  day: st({
    matchPatterns: or,
    defaultMatchWidth: "wide",
    parsePatterns: lr,
    defaultParseWidth: "any"
  }),
  dayPeriod: st({
    matchPatterns: cr,
    defaultMatchWidth: "any",
    parsePatterns: dr,
    defaultParseWidth: "any"
  })
}, hr = {
  code: "en-US",
  formatDistance: Rn,
  formatLong: Ln,
  formatRelative: Hn,
  localize: Kn,
  match: ur,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function fr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in);
  return mn(t, Cn(t)) + 1;
}
function mr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +yt(t) - +Sn(t);
  return Math.round(r / dn) + 1;
}
function gn(e, n) {
  var f, w, y, p;
  const t = ee(e, n == null ? void 0 : n.in), r = t.getFullYear(), s = ot(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((w = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((p = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, o = De((n == null ? void 0 : n.in) || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = Ie(o, n), h = De((n == null ? void 0 : n.in) || e, 0);
  h.setFullYear(r, 0, i), h.setHours(0, 0, 0, 0);
  const m = Ie(h, n);
  return +t >= +l ? r + 1 : +t >= +m ? r : r - 1;
}
function gr(e, n) {
  var l, h, m, f;
  const t = ot(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : h.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = gn(e, n), i = De((n == null ? void 0 : n.in) || e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), Ie(i, n);
}
function xr(e, n) {
  const t = ee(e, n == null ? void 0 : n.in), r = +Ie(t, n) - +gr(t, n);
  return Math.round(r / dn) + 1;
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
}, $e = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Rt = {
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
    const s = gn(e, r), i = s > 0 ? s : 1 - s;
    if (n === "YY") {
      const o = i % 100;
      return F(o, 2);
    }
    return n === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : F(i, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = fn(e);
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
    const s = xr(e, r);
    return n === "wo" ? t.ordinalNumber(s, { unit: "week" }) : F(s, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = mr(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : F(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : We.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = fr(e);
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
    switch (r === 12 ? s = $e.noon : r === 0 ? s = $e.midnight : s = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? s = $e.evening : r >= 12 ? s = $e.afternoon : r >= 4 ? s = $e.morning : s = $e.night, n) {
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
        return At(r);
      case "XXXX":
      case "XX":
        return Re(r);
      case "XXXXX":
      case "XXX":
      default:
        return Re(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return At(r);
      case "xxxx":
      case "xx":
        return Re(r);
      case "xxxxx":
      case "xxx":
      default:
        return Re(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + It(r, ":");
      case "OOOO":
      default:
        return "GMT" + Re(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + It(r, ":");
      case "zzzz":
      default:
        return "GMT" + Re(r, ":");
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
function It(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? t + String(s) : t + String(s) + n + F(i, 2);
}
function At(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + F(Math.abs(e) / 60, 2) : Re(e, n);
}
function Re(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), s = F(Math.trunc(r / 60), 2), i = F(r % 60, 2);
  return t + s + n + i;
}
const zt = (e, n) => {
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
}, xn = (e, n) => {
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
}, yr = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], s = t[2];
  if (!s)
    return zt(e, n);
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
  return i.replace("{{date}}", zt(r, n)).replace("{{time}}", xn(s, n));
}, br = {
  p: xn,
  P: yr
}, pr = /^D+$/, wr = /^Y+$/, vr = ["D", "DD", "YY", "YYYY"];
function Dr(e) {
  return pr.test(e);
}
function kr(e) {
  return wr.test(e);
}
function jr(e, n, t) {
  const r = Er(e, n, t);
  if (console.warn(r), vr.includes(e)) throw new RangeError(r);
}
function Er(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Nr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Mr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Sr = /^'([^]*?)'?$/, Wr = /''/g, Tr = /[a-zA-Z]/;
function me(e, n, t) {
  var f, w, y, p;
  const r = ot(), s = r.locale ?? hr, i = r.firstWeekContainsDate ?? ((w = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, o = r.weekStartsOn ?? ((p = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : p.weekStartsOn) ?? 0, l = ee(e, t == null ? void 0 : t.in);
  if (!On(l))
    throw new RangeError("Invalid time value");
  let h = n.match(Mr).map((g) => {
    const x = g[0];
    if (x === "p" || x === "P") {
      const E = br[x];
      return E(g, s.formatLong);
    }
    return g;
  }).join("").match(Nr).map((g) => {
    if (g === "''")
      return { isToken: !1, value: "'" };
    const x = g[0];
    if (x === "'")
      return { isToken: !1, value: Or(g) };
    if (Rt[x])
      return { isToken: !0, value: g };
    if (x.match(Tr))
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
    (kr(x) || Dr(x)) && jr(x, n, String(e));
    const E = Rt[x[0]];
    return E(l, x, s.localize, m);
  }).join("");
}
function Or(e) {
  const n = e.match(Sr);
  return n ? n[1].replace(Wr, "'") : e;
}
function Pr(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDate();
}
function wt(e, n) {
  return ee(e, n == null ? void 0 : n.in).getDay();
}
function Lt(e, n) {
  var h, m, f, w;
  const t = ot(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((w = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = Pr(ee(e, n == null ? void 0 : n.in));
  if (isNaN(s)) return NaN;
  const i = wt(Pn(e, n));
  let o = r - i;
  o <= 0 && (o += 7);
  const l = s - o;
  return Math.ceil(l / 7) + 1;
}
function Et(e, n) {
  return ee(e, n == null ? void 0 : n.in).getFullYear();
}
function Cr(e, n, t) {
  const [r, s] = lt(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Ie(r, t) == +Ie(s, t);
}
function _r(e, n, t) {
  const [r, s] = lt(
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
const Rr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ir = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Ft = (e) => {
  const n = Ir(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, yn = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Ar = (e) => {
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
var zr = {
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
const Lr = pt(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: o,
    ...l
  }, h) => Nt(
    "svg",
    {
      ref: h,
      ...zr,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: yn("lucide", s),
      ...!i && !Ar(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...o.map(([m, f]) => Nt(m, f)),
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
const ke = (e, n) => {
  const t = pt(
    ({ className: r, ...s }, i) => Nt(Lr, {
      ref: i,
      iconNode: n,
      className: yn(
        `lucide-${Rr(Ft(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return t.displayName = Ft(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Hr = ke("calendar", Fr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], bn = ke("check", Yr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ht = ke("chevron-down", $r);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Yt = ke("chevron-right", Gr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [
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
], Vr = ke("file-text", Xr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], $t = ke("grip-vertical", Br);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Kr = ke("trash-2", qr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Ur = ke("type", Qr);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Wt = ke("x", Jr), Te = {
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
}, ve = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, bt = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, Zr = ({ taskNames: e, onConfirm: n, onCancel: t }) => cn.createPortal(
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
), Gt = ({
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
  var $;
  const [w, y] = V(!1), p = Array.from(r).some((A) => {
    const C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  }), g = () => {
    r.size >= 1 && !p && i && (i(Array.from(r)), m());
  }, x = () => {
    if (r.size === 1 && o) {
      const A = Array.from(r)[0], C = s.find((R) => R.id === A);
      (C == null ? void 0 : C.type) === "GROUP" && (o(A), m());
    }
  }, E = () => {
    y(!0);
  }, M = () => {
    l && (r.size > 0 ? Array.from(r) : [t]).forEach((C) => {
      l(C);
    }), y(!1), f(), m();
  }, P = () => {
    y(!1);
  }, z = r.size === 1 && (() => {
    const A = Array.from(r)[0], C = s.find((R) => R.id === A);
    return (C == null ? void 0 : C.type) === "GROUP";
  })(), T = r.size > 0 ? Array.from(r).map((A) => {
    var C;
    return ((C = s.find((R) => R.id === A)) == null ? void 0 : C.name) || A;
  }) : [(($ = s.find((A) => A.id === t)) == null ? void 0 : $.name) || t];
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: n },
      onClick: (A) => A.stopPropagation(),
      children: [
        r.size >= 1 && !p && i && /* @__PURE__ */ a.jsxs(
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
          Zr,
          {
            taskNames: T,
            onConfirm: M,
            onCancel: P
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Xt } = ve, mt = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, es = ({
  columns: e,
  tasks: n,
  activeCPId: t,
  onTaskCreate: r,
  onCancel: s,
  isVirtualized: i = !1,
  virtualRowIndex: o
}) => {
  const [l, h] = Oe.useState(mt), m = le(null);
  ae(() => {
    h(mt), setTimeout(() => {
      var g;
      (g = m.current) == null || g.focus();
    }, 0);
  }, []);
  const f = W(() => {
    h(mt), s();
  }, [s]), w = W(async () => {
    if (!(!l.name.trim() || !r || !t))
      try {
        const g = n[n.length - 1], x = g ? B(g.endDate, 1) : /* @__PURE__ */ new Date(), E = l.indirectWorkDaysPre + l.netWorkDays + l.indirectWorkDaysPost, M = B(x, Math.max(E - 1, 0)), P = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: l.name.trim(),
          startDate: x,
          endDate: M,
          task: {
            netWorkDays: l.netWorkDays,
            indirectWorkDaysPre: l.indirectWorkDaysPre,
            indirectWorkDaysPost: l.indirectWorkDaysPost
          },
          dependencies: []
        };
        await r(P), h(mt), s();
      } catch (g) {
        console.error("Failed to create task:", g), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [l, r, t, n, s]), y = W((g) => {
    g.key === "Enter" ? (g.preventDefault(), w()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [w, f]), p = i && o !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${n.length * Xt}px)`
  } : {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Xt,
        ...p
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
                  const x = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  h((M) => ({ ...M, indirectWorkDaysPre: E }));
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
                  const x = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  h((M) => ({ ...M, netWorkDays: E }));
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
                  const x = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  h((M) => ({ ...M, indirectWorkDaysPost: E }));
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
                  children: /* @__PURE__ */ a.jsx(bn, { size: 14 })
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: f,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ a.jsx(Wt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Vt } = ve, gt = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, ts = ({
  columns: e,
  tasks: n,
  onTaskCreate: t,
  onCancel: r,
  isVirtualized: s = !1,
  virtualRowIndex: i,
  dragHandleWidth: o = 0
}) => {
  const [l, h] = Oe.useState(gt), m = le(null);
  ae(() => {
    h(gt), setTimeout(() => {
      var g;
      (g = m.current) == null || g.focus();
    }, 0);
  }, []);
  const f = W(() => {
    h(gt), r();
  }, [r]), w = W(async () => {
    if (!(!l.name.trim() || !t))
      try {
        const g = n.filter((T) => T.type === "CP" && !T.parentId), x = g[g.length - 1], E = x ? B(x.endDate, 1) : /* @__PURE__ */ new Date(), M = l.workDaysTotal + l.nonWorkDaysTotal, P = B(E, Math.max(M - 1, 0)), z = {
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
        await t(z), h(gt), r();
      } catch (g) {
        console.error("Failed to create CP:", g), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [l, t, n, r]), y = W((g) => {
    g.key === "Enter" ? (g.preventDefault(), w()) : g.key === "Escape" && (g.preventDefault(), f());
  }, [w, f]), p = s && i !== void 0 ? {
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
        ...p
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
                  const x = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  h((M) => ({ ...M, workDaysTotal: E }));
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
                  const x = g.target.value.replace(/[^0-9]/g, ""), E = parseInt(x) || 0;
                  h((M) => ({ ...M, nonWorkDaysTotal: E }));
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
              children: /* @__PURE__ */ a.jsx(bn, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: f,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ a.jsx(Wt, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: Ge, HEADER_HEIGHT: Bt, MILESTONE_LANE_HEIGHT: qt } = ve, Kt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], Qt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], pn = pt(
  ({ tasks: e, allTasks: n, viewMode: t, expandedIds: r, onToggle: s, onTaskClick: i, onTaskUpdate: o, onTaskCreate: l, onTaskReorder: h, activeCPId: m, virtualRows: f, totalHeight: w, onTotalWidthChange: y, onTaskGroup: p, onTaskUngroup: g, onTaskDelete: x, onTaskMove: E, isAddingTask: M = !1, onCancelAddTask: P, isAddingCP: z = !1, onCancelAddCP: T }, $) => {
    const A = f && f.length > 0, [C, R] = V(null), [G, re] = V(null), [X, Q] = V(null), [H, J] = V(/* @__PURE__ */ new Set()), [ne, de] = V(null), [U, D] = V(null), [v, L] = V(null), [d, k] = V(""), O = le(null), [I, ce] = V(
      Kt.map((u) => u.width)
    ), [se, q] = V(
      Qt.map((u) => u.width)
    ), [ie, ge] = V(null), je = le(!1), pe = t === "MASTER" ? Kt : Qt, Ae = t === "MASTER" ? I : se, ze = t === "MASTER" ? ce : q, K = be(
      () => pe.map((u, c) => ({
        ...u,
        width: Ae[c] ?? u.width
      })),
      [pe, Ae]
    ), Le = h ? 24 : 0, Ee = K.reduce((u, c) => u + c.width, 0) + Le;
    ae(() => {
      y && y(Ee);
    }, [Ee, y]);
    const Ke = W((u, c) => {
      if (u.detail >= 2) return;
      u.preventDefault(), u.stopPropagation(), je.current = !0, ge(c);
      const b = u.clientX, S = Ae[c], Y = pe[c].minWidth, te = (Z) => {
        if (!je.current) return;
        const ue = Z.clientX - b, he = Math.max(Y, S + ue);
        ze((j) => {
          const xe = [...j];
          return xe[c] = he, xe;
        });
      }, _ = () => {
        je.current = !1, ge(null), document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", _);
      };
      document.addEventListener("mousemove", te), document.addEventListener("mouseup", _);
    }, [Ae, pe, ze]), Pe = W((u, c = 12, b = "normal") => {
      const Y = document.createElement("canvas").getContext("2d");
      return Y ? (Y.font = `${b} ${c}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, Y.measureText(u).width) : 0;
    }, []), Fe = W((u) => {
      const c = pe[u].minWidth, b = u === 0, S = b ? 48 : 20, Y = pe[u].label;
      let te = Pe(Y, 12, "500") + 16;
      return e.forEach((_) => {
        let Z = "", ue = 0;
        if (t === "MASTER") {
          const we = _.type === "GROUP";
          switch (b && _.parentId && (ue = 20), u) {
            case 0:
              Z = _.name;
              break;
            case 1:
              Z = we ? "-" : _.cp ? `${_.cp.workDaysTotal + _.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              Z = we ? "-" : _.cp ? `${_.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              Z = we ? "-" : _.cp ? `${_.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (u) {
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
              Z = me(_.startDate, "yyyy-MM-dd");
              break;
            case 5:
              Z = me(_.endDate, "yyyy-MM-dd");
              break;
          }
        const xe = Pe(Z, b ? 14 : 12, b ? "500" : "normal") + S + ue;
        te = Math.max(te, xe);
      }), Math.max(c, Math.ceil(te));
    }, [e, t, pe, Pe]), vt = W((u, c) => {
      u.preventDefault(), u.stopPropagation(), je.current = !1, ge(null);
      const b = Fe(c);
      ze((S) => {
        const Y = [...S];
        return Y[c] = b, Y;
      });
    }, [Fe, ze]), Qe = W((u, c, b) => {
      if (!u.task || !o) return;
      const S = {
        ...u,
        task: {
          ...u.task,
          [c]: b
        }
      };
      o(S);
    }, [o]), Ne = W((u, c) => {
      u.dataTransfer.effectAllowed = "move", u.dataTransfer.setData("text/plain", c), R(c);
      const b = document.createElement("div");
      b.style.opacity = "0", document.body.appendChild(b), u.dataTransfer.setDragImage(b, 0, 0), setTimeout(() => document.body.removeChild(b), 0);
    }, []), ct = W((u, c, b) => {
      if (u.preventDefault(), u.dataTransfer.dropEffect = "move", c === C) return;
      const S = u.currentTarget.getBoundingClientRect(), Y = u.clientY - S.top, te = S.height;
      let _;
      b ? Y < te / 3 ? _ = "before" : Y < te * 2 / 3 ? _ = "into" : _ = "after" : _ = Y < te / 2 ? "before" : "after", re(c), Q(_);
    }, [C]), dt = W(() => {
      re(null), Q(null);
    }, []), Ue = W((u, c) => {
      if (u.preventDefault(), !C || C === c || !X) {
        R(null), re(null), Q(null);
        return;
      }
      if (E)
        E(C, c, X);
      else if (h && X !== "into") {
        const b = e.findIndex((Y) => Y.id === c), S = X === "after" ? b + 1 : b;
        h(C, S);
      }
      R(null), re(null), Q(null);
    }, [C, X, E, h, e]), He = W(() => {
      R(null), re(null), Q(null);
    }, []), Je = W((u, c, b) => {
      if (C) return;
      const S = u.ctrlKey || u.metaKey, Y = u.shiftKey;
      if (S)
        J((te) => {
          const _ = new Set(te);
          return _.has(c.id) ? _.delete(c.id) : _.add(c.id), _;
        }), de(b);
      else if (Y && ne !== null) {
        const te = Math.min(ne, b), _ = Math.max(ne, b);
        J((Z) => {
          const ue = new Set(Z);
          for (let he = te; he <= _; he++)
            e[he] && ue.add(e[he].id);
          return ue;
        });
      } else
        J(/* @__PURE__ */ new Set([c.id])), de(b);
    }, [C, ne, e]), Me = W((u, c) => {
      u.preventDefault(), H.has(c.id) || J(/* @__PURE__ */ new Set([c.id])), D({
        x: u.clientX,
        y: u.clientY,
        taskId: c.id
      });
    }, [H]);
    ae(() => {
      const u = () => {
        D(null);
      };
      if (U)
        return document.addEventListener("click", u), () => document.removeEventListener("click", u);
    }, [U]), ae(() => {
      const u = (c) => {
        c.key === "Escape" && (J(/* @__PURE__ */ new Set()), D(null), L(null));
      };
      return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
    }, []);
    const Ce = W((u) => {
      L(u.id), k(u.name), setTimeout(() => {
        var c, b;
        (c = O.current) == null || c.focus(), (b = O.current) == null || b.select();
      }, 0);
    }, []), Ze = W((u) => {
      const c = e.find((b) => b.id === u);
      c && o && Ce(c);
    }, [e, o, Ce]), Se = W(() => {
      if (!v || !o) {
        L(null);
        return;
      }
      const u = e.find((c) => c.id === v);
      u && d.trim() && d !== u.name && o({
        ...u,
        name: d.trim()
      }), L(null), k("");
    }, [v, d, e, o]), ut = W(() => {
      L(null), k("");
    }, []), ht = W((u) => {
      u.key === "Enter" ? (u.preventDefault(), Se()) : u.key === "Escape" && (u.preventDefault(), ut());
    }, [Se, ut]), Dt = W((u) => {
      if (!m || u.parentId === m) return 0;
      let c = 0, b = u.parentId;
      for (; b && b !== m; ) {
        const S = n.find((Y) => Y.id === b);
        (S == null ? void 0 : S.type) === "GROUP" && c++, b = (S == null ? void 0 : S.parentId) || null;
      }
      return c;
    }, [m, n]), et = W((u) => {
      if (!u.parentId) return 0;
      let c = 0, b = u.parentId;
      for (; b; ) {
        const S = n.find((Y) => Y.id === b);
        (S == null ? void 0 : S.type) === "GROUP" && c++, b = S == null ? void 0 : S.parentId;
      }
      return c;
    }, [n]), Ye = () => /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: K.map((u, c) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: u.width },
        children: [
          u.label,
          c < K.length - 1 && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${ie === c ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (b) => Ke(b, c),
              onDoubleClick: (b) => vt(b, c),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          c < K.length - 1 && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      u.id
    )) }), _e = H.size === 1 ? e.find((u) => u.id === Array.from(H)[0] && u.type === "GROUP") : null, kt = H.size >= 1 && p && !_e, ft = _e && g, N = () => !kt && !ft && H.size === 0 ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      H.size > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-500", children: [
        H.size,
        "개 선택"
      ] }),
      ft && /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            g(_e.id), J(/* @__PURE__ */ new Set());
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
          style: { height: Bt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              N()
            ] }),
            Ye()
          ]
        }
      ),
      ie !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: $, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: qt, minWidth: Ee },
            children: K.map((u, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: u.width },
                children: c === 0 && "Milestone"
              },
              u.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: Ee,
              height: A ? w : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((u, c) => ({ index: c, start: c * Ge, size: Ge, key: c }))).map((u) => {
                const c = e[u.index];
                if (!c) return null;
                const b = c.type === "GROUP", S = b && n.some((j) => j.parentId === c.id), Y = r.has(c.id), _ = et(c) * 12, Z = C === c.id, ue = G === c.id, he = H.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(h || E),
                    onDragStart: (j) => Ne(j, c.id),
                    onDragOver: (j) => ct(j, c.id, b),
                    onDragLeave: dt,
                    onDrop: (j) => Ue(j, c.id),
                    onDragEnd: He,
                    onClick: (j) => Je(j, c, u.index),
                    onContextMenu: (j) => Me(j, c),
                    className: `box-border flex items-center border-b transition-all duration-150 ${Z ? "opacity-50 bg-blue-50" : ue ? X === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : X === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : he ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : b ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: Ge,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${u.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !b && i(c),
                    title: b ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      h && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx($t, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: h ? K[0].width - 24 : K[0].width, paddingLeft: _ + 8 },
                          children: [
                            S ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: Y ? /* @__PURE__ */ a.jsx(Ht, { size: 14 }) : /* @__PURE__ */ a.jsx(Yt, { size: 14 })
                              }
                            ) : /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }),
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: d,
                                onChange: (j) => k(j.target.value),
                                onKeyDown: ht,
                                onBlur: Se,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${b ? "font-normal text-gray-500 italic cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), Ce(c));
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
                  u.key
                );
              }),
              z && /* @__PURE__ */ a.jsx(
                ts,
                {
                  columns: K,
                  tasks: e,
                  onTaskCreate: l,
                  onCancel: T || (() => {
                  }),
                  isVirtualized: A,
                  virtualRowIndex: e.length,
                  dragHandleWidth: Le
                }
              )
            ]
          }
        )
      ] }),
      U && /* @__PURE__ */ a.jsx(
        Gt,
        {
          x: U.x,
          y: U.y,
          taskId: U.taskId,
          selectedTaskIds: H,
          tasks: e,
          onTaskGroup: p,
          onTaskUngroup: g,
          onTaskDelete: x,
          onStartRename: Ze,
          onClose: () => D(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Bt },
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              N()
            ] }),
            Ye()
          ]
        }
      ),
      ie !== null && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ a.jsxs("div", { ref: $, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: qt, minWidth: Ee },
            children: K.map((u, c) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: u.width },
                children: c === 0 && "Milestone"
              },
              u.id
            ))
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            style: {
              minWidth: Ee,
              height: A ? w : void 0,
              position: "relative"
            },
            children: [
              (A ? f : e.map((u, c) => ({ index: c, start: c * Ge, size: Ge, key: c }))).map((u) => {
                const c = e[u.index];
                if (!c) return null;
                const b = c.type === "GROUP", S = b && n.some((j) => j.parentId === c.id), Y = r.has(c.id), _ = Dt(c) * 12, Z = C === c.id, ue = G === c.id, he = H.has(c.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    draggable: !!(h || E),
                    onDragStart: (j) => Ne(j, c.id),
                    onDragOver: (j) => ct(j, c.id, b),
                    onDragLeave: dt,
                    onDrop: (j) => Ue(j, c.id),
                    onDragEnd: He,
                    onClick: (j) => Je(j, c, u.index),
                    onContextMenu: (j) => Me(j, c),
                    className: `box-border flex items-center border-b transition-colors ${Z ? "opacity-50 bg-blue-50" : ue ? X === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : X === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : he ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : b ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: Ge,
                      ...A ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${u.start}px)`
                      } : {}
                    },
                    children: [
                      h && /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ a.jsx($t, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: h ? K[0].width - 24 : K[0].width, paddingLeft: _ + 8 },
                          children: [
                            S ? /* @__PURE__ */ a.jsx(
                              "button",
                              {
                                onClick: (j) => {
                                  j.stopPropagation(), s(c.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: Y ? /* @__PURE__ */ a.jsx(Ht, { size: 14 }) : /* @__PURE__ */ a.jsx(Yt, { size: 14 })
                              }
                            ) : b ? /* @__PURE__ */ a.jsx("div", { className: "w-6 shrink-0" }) : null,
                            v === c.id ? /* @__PURE__ */ a.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: d,
                                onChange: (j) => k(j.target.value),
                                onKeyDown: ht,
                                onBlur: Se,
                                onClick: (j) => j.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${b ? "font-normal text-gray-500 italic cursor-text" : "text-gray-700"}`,
                                onDoubleClick: (j) => {
                                  o && (j.stopPropagation(), Ce(c));
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
                                const xe = j.target.value.replace(/[^0-9]/g, ""), we = parseInt(xe) || 0;
                                Qe(c, "indirectWorkDaysPre", we);
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
                                const xe = j.target.value.replace(/[^0-9]/g, ""), we = parseInt(xe) || 0;
                                Qe(c, "netWorkDays", we);
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
                                const xe = j.target.value.replace(/[^0-9]/g, ""), we = parseInt(xe) || 0;
                                Qe(c, "indirectWorkDaysPost", we);
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
                          children: me(c.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: K[5].width },
                          children: me(c.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  u.key
                );
              }),
              M && m && /* @__PURE__ */ a.jsx(
                es,
                {
                  columns: K,
                  tasks: e,
                  activeCPId: m,
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
        Gt,
        {
          x: U.x,
          y: U.y,
          taskId: U.taskId,
          selectedTaskIds: H,
          tasks: e,
          onTaskGroup: p,
          onTaskUngroup: g,
          onTaskDelete: x,
          onStartRename: Ze,
          onClose: () => D(null),
          onDeselect: () => J(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
pn.displayName = "GanttSidebar";
const Ve = (e, n = [], t) => !!(!t.workOnSaturdays && un(e) || !t.workOnSundays && hn(e) || !t.workOnHolidays && n.some((r) => Wn(r, e))), Ls = (e) => un(e) || hn(e), ns = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; Ve(s, t, r); )
    s = B(s, 1);
  for (; i < n; )
    Ve(s, t, r) || i++, i < n && (s = B(s, 1));
  return s;
}, Fs = (e, n, t = [], r) => {
  let s = new Date(e), i = 0;
  if (n <= 0) return s;
  for (; i < n; )
    s = B(s, -1), Ve(s, t, r) || i++;
  return s;
}, Ut = (e, n) => n <= 0 ? e : B(e, n - 1), Hs = (e, n = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: r, indirectWorkDaysPre: s, indirectWorkDaysPost: i } = e.task, o = at(new Date(e.startDate));
  let l = o, h, m;
  s > 0 && (h = l, m = Ut(l, s), l = B(m, 1));
  let f = l, w = f;
  if (r > 0) {
    for (; Ve(f, n, t); )
      f = B(f, 1);
    w = ns(f, r, n, t), l = B(w, 1);
  } else s === 0 && (f = o, w = o);
  let y, p;
  return i > 0 && (y = l, p = Ut(l, i)), {
    startDate: h || f,
    endDate: p || w,
    netWorkStartDate: f,
    netWorkEndDate: w,
    indirectPreStartDate: h,
    indirectPreEndDate: m,
    indirectPostStartDate: y,
    indirectPostEndDate: p
  };
}, Ys = (e, n, t) => {
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
}, it = (e, n, t) => St(e, n) * t, $s = (e, n, t) => {
  const r = Math.round(e / t);
  return B(n, r);
}, Gs = (e, n, t) => (St(n, e) + 1) * t, Xs = (e) => bt[e].pixelsPerDay, wn = (e, n = [], t = 5) => {
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
  const s = new Date(Math.min(...r.map((m) => m.getTime()))), i = new Date(Math.max(...r.map((m) => m.getTime()))), o = B(s, -t), l = B(i, t), h = St(l, o);
  return {
    minDate: o,
    maxDate: l,
    totalDays: h
  };
}, { ROW_HEIGHT: fe, HEADER_HEIGHT: rs, MILESTONE_LANE_HEIGHT: ye, BAR_HEIGHT: oe } = ve, ss = ({
  minDate: e,
  totalDays: n,
  pixelsPerDay: t,
  zoomLevel: r,
  holidays: s,
  calendarSettings: i
}) => {
  const o = Array.from({ length: n }, (y, p) => B(e, p)), l = n * t, h = be(() => {
    const y = [];
    let p = Et(o[0]), g = 0;
    return o.forEach((x) => {
      Et(x) !== p ? (y.push({ label: `${p}년`, days: g }), p = Et(x), g = 1) : g++;
    }), y.push({ label: `${p}년`, days: g }), y;
  }, [o]), m = be(() => {
    const y = [];
    let p = o[0], g = 0;
    return o.forEach((x) => {
      _r(x, p) ? g++ : (y.push({ label: me(p, "M월"), days: g }), p = x, g = 1);
    }), y.push({ label: me(p, "M월"), days: g }), y;
  }, [o]), f = be(() => {
    if (r === "MONTH")
      return null;
    if (r === "DAY")
      return /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: o.map((y, p) => {
        const g = wt(y), x = Ve(y, s, i), E = g === 0, M = g === 6;
        let P = "text-gray-600";
        E && (P = "text-red-500"), M && (P = "text-blue-500"), x && !E && !M && (P = "text-red-500");
        let z = "";
        return E || x && !M ? z = "bg-red-50/50" : M && (z = "bg-blue-50/50"), /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${z}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ a.jsx("span", { className: `text-[10px] leading-none ${P}`, children: me(y, "d") }),
              /* @__PURE__ */ a.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${P}`, children: ["일", "월", "화", "수", "목", "금", "토"][g] })
            ]
          },
          p
        );
      }) });
    {
      const y = [];
      let p = o[0], g = 0;
      return o.forEach((x) => {
        Cr(x, p, { weekStartsOn: 0 }) ? g++ : (y.push({ label: `${Lt(p, { weekStartsOn: 0 })}주`, days: g }), p = x, g = 1);
      }), y.push({ label: `${Lt(p, { weekStartsOn: 0 })}주`, days: g }), /* @__PURE__ */ a.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: y.map((x, E) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: x.days * t },
          children: x.label
        },
        E
      )) });
    }
  }, [o, r, t, s, i, l]), w = r === "MONTH";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: rs, minWidth: l },
      children: w ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: h.map((y, p) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((y, p) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: y.days * t },
                children: y.label
              },
              p
            ))
          }
        )
      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: h.map((y, p) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: y.days * t },
                children: y.label
              },
              p
            ))
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: m.map((y, p) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              p
            ))
          }
        ),
        f
      ] })
    }
  );
}, as = ({
  minDate: e,
  totalDays: n,
  chartHeight: t,
  pixelsPerDay: r,
  holidays: s,
  calendarSettings: i,
  zoomLevel: o
}) => {
  const l = be(() => {
    if (o === "MONTH") return [];
    const h = [];
    for (let m = 0; m < n; m++) {
      const f = B(e, m), w = wt(f), y = w === 0, p = w === 6;
      if (Ve(f, s, i) || p) {
        const x = m * r;
        let E = "rgba(254, 242, 242, 0.5)";
        p && !y && (E = "rgba(239, 246, 255, 0.5)"), y && (E = "rgba(254, 242, 242, 0.5)"), h.push(
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
    return h;
  }, [e, n, t, r, s, i, o]);
  return /* @__PURE__ */ a.jsx("g", { children: l });
}, is = (e, n, t) => {
  if (e.length === 0) return [];
  const r = 25, s = 12, i = 8, o = e.map((f) => ({
    milestone: f,
    x: it(f.date, n, t),
    labelLevel: 0,
    labelWidth: f.name.length * s + r
  })).sort((f, w) => f.x - w.x), l = [], h = [], m = [];
  for (const f of o) {
    const w = f.labelWidth, y = f.x - w, p = f.x - i;
    if (!h.some((x) => y < x + i))
      h.push(p), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 0
      });
    else {
      const x = f.x + i, E = f.x + w;
      m.some(
        (P) => !(E < P.start || x > P.end)
      ) ? l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: -1
      }) : (m.push({ start: x, end: E }), l.push({
        milestone: f.milestone,
        x: f.x,
        labelLevel: 1
      }));
    }
  }
  return l;
}, os = ({
  milestone: e,
  x: n,
  labelLevel: t = 0,
  isDragging: r = !1,
  dragX: s,
  onMouseDown: i,
  onDoubleClick: o
}) => {
  const h = ye / 2, m = r && s !== void 0 ? s : n;
  let f, w, y;
  t === 0 ? (f = -8, w = 4, y = "end") : t === 1 ? (f = 8, w = 4, y = "start") : (f = 0, w = 18, y = "middle");
  const p = (x) => {
    i && (x.preventDefault(), x.stopPropagation(), i(x, e));
  }, g = (x) => {
    o && (x.preventDefault(), x.stopPropagation(), o(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${m}, ${h})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${r ? "cursor-ew-resize" : ""}`,
      onMouseDown: p,
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
}, ls = ({
  task: e,
  y: n,
  minDate: t,
  pixelsPerDay: r,
  isMasterView: s,
  isDraggable: i = !1,
  dragInfo: o,
  onDragStart: l
}) => {
  var p, g;
  if (e.type === "GROUP") return null;
  const h = 4, m = !!o, f = (o == null ? void 0 : o.startDate) || e.startDate, w = (o == null ? void 0 : o.endDate) || e.endDate, y = it(f, t, r);
  if (s) {
    const x = ((p = e.cp) == null ? void 0 : p.workDaysTotal) || 0, E = ((g = e.cp) == null ? void 0 : g.nonWorkDaysTotal) || 0;
    if (x + E === 0) return null;
    const P = x * r, z = E * r;
    return /* @__PURE__ */ a.jsxs("g", { transform: `translate(${y}, ${n})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: P,
          height: oe,
          fill: Te.vermilion,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "rect",
        {
          x: P,
          y: 0,
          width: z,
          height: oe,
          fill: Te.teal,
          rx: h,
          ry: h,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ a.jsx(
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
    const { netWorkDays: x, indirectWorkDaysPre: E, indirectWorkDaysPost: M } = e.task, P = (o == null ? void 0 : o.indirectWorkDaysPre) ?? E, z = (o == null ? void 0 : o.indirectWorkDaysPost) ?? M, T = P * r, $ = x * r, A = z * r, C = T + $ + A, R = 0, G = T, re = T + $, X = 8, Q = {
      startDate: f,
      endDate: w,
      indirectWorkDaysPre: P,
      netWorkDays: x,
      indirectWorkDaysPost: z
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
              x: T,
              y: 0,
              width: $,
              height: oe,
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
              height: oe,
              fill: Te.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          x > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: G,
              y: 0,
              width: $,
              height: oe,
              fill: Te.red,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          z > 0 && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: re,
              y: 0,
              width: A,
              height: oe,
              fill: Te.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${m ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: i ? "none" : "auto" }
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: -X / 2,
              y: 0,
              width: X,
              height: oe,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (H) => l == null ? void 0 : l(H, e.id, "resize-pre", Q),
              children: /* @__PURE__ */ a.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: C - X / 2,
              y: 0,
              width: X,
              height: oe,
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
                y: oe / 2 - 6,
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
                y: oe / 2 - 6,
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
              y: oe / 2 + 4,
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
                  me(f, "MM/dd"),
                  " ~ ",
                  me(w, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "text",
              {
                x: C / 2,
                y: oe + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  P,
                  "일 + 순",
                  x,
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
}, cs = () => /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx(
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
) }), vn = pt(
  ({ tasks: e, milestones: n, viewMode: t, zoomLevel: r, holidays: s, calendarSettings: i, onBarDrag: o, onMilestoneUpdate: l, onMilestoneDoubleClick: h, virtualRows: m, totalHeight: f }, w) => {
    const y = bt[r].pixelsPerDay, p = t === "MASTER", g = m && m.length > 0, [x, E] = V(null), [M, P] = V(null), z = le(null);
    ae(() => {
      z.current = M;
    }, [M]);
    const { minDate: T, totalDays: $ } = be(() => wn(e, n, 60), [e, n]), A = be(() => is(n, T, y), [n, T, y]), C = $ * y, R = Math.max(g ? (f || 0) + ye + 100 : e.length * fe + ye + 100, 500), G = le(null);
    ae(() => {
      G.current = x;
    }, [x]);
    const re = W((D, v) => {
      if (!l) return;
      D.preventDefault(), D.stopPropagation();
      const L = it(v.date, T, y), d = {
        milestoneId: v.id,
        startX: D.clientX,
        originalDate: v.date,
        currentX: L
      };
      P(d);
    }, [l, T, y]), X = W((D) => {
      const v = z.current;
      if (!v) return;
      const L = D.clientX - v.startX, d = it(v.originalDate, T, y), k = Math.max(0, d + L);
      P((O) => O ? { ...O, currentX: k } : null);
    }, [T, y]), Q = W((D) => {
      const v = z.current;
      if (!v || !l) {
        P(null);
        return;
      }
      const L = D.clientX - v.startX, d = Math.round(L / y);
      if (d !== 0) {
        const k = B(v.originalDate, d), O = n.find((I) => I.id === v.milestoneId);
        O && l({
          ...O,
          date: k
        });
      }
      P(null);
    }, [l, y, n]);
    ae(() => {
      if (M)
        return window.addEventListener("mousemove", X), window.addEventListener("mouseup", Q), () => {
          window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", Q);
        };
    }, [M, X, Q]);
    const H = W((D) => {
      h && h(D);
    }, [h]), J = W((D, v, L, d) => {
      if (!o) return;
      D.preventDefault(), D.stopPropagation();
      const k = {
        taskId: v,
        dragType: L,
        startX: D.clientX,
        originalStartDate: d.startDate,
        originalEndDate: d.endDate,
        originalIndirectWorkDaysPre: d.indirectWorkDaysPre,
        originalNetWorkDays: d.netWorkDays,
        originalIndirectWorkDaysPost: d.indirectWorkDaysPost,
        currentStartDate: d.startDate,
        currentEndDate: d.endDate,
        currentIndirectWorkDaysPre: d.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: d.indirectWorkDaysPost
      };
      E(k), G.current = k;
    }, [o]), ne = W((D) => {
      const v = G.current;
      if (!v || !o) return;
      const L = D.clientX - v.startX, d = Math.round(L / y);
      let k = v.originalStartDate, O = v.originalEndDate, I = v.originalIndirectWorkDaysPre, ce = v.originalIndirectWorkDaysPost;
      if (v.dragType === "move")
        k = B(v.originalStartDate, d), O = B(v.originalEndDate, d);
      else if (v.dragType === "resize-pre") {
        I = Math.max(0, v.originalIndirectWorkDaysPre - d);
        const se = B(v.originalStartDate, v.originalIndirectWorkDaysPre);
        k = B(se, -I), O = v.originalEndDate;
      } else if (v.dragType === "resize-post") {
        ce = Math.max(0, v.originalIndirectWorkDaysPost + d);
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
    }, [o, y]), de = W(() => {
      const D = G.current;
      if (!D || !o) {
        E(null), G.current = null;
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
      }), E(null), G.current = null;
    }, [o]);
    ae(() => {
      if (x)
        return window.addEventListener("mousemove", ne), window.addEventListener("mouseup", de), document.body.style.cursor = x.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", ne), window.removeEventListener("mouseup", de), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [x, ne, de]);
    const U = W((D) => x && x.taskId === D ? {
      startDate: x.currentStartDate,
      endDate: x.currentEndDate,
      indirectWorkDaysPre: x.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: x.currentIndirectWorkDaysPost
    } : null, [x]);
    return /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsxs("div", { ref: w, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ a.jsx(
        ss,
        {
          minDate: T,
          totalDays: $,
          pixelsPerDay: y,
          zoomLevel: r,
          holidays: s,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ a.jsxs("svg", { width: C, height: R, className: "block bg-white", children: [
        /* @__PURE__ */ a.jsx(cs, {}),
        /* @__PURE__ */ a.jsx(
          as,
          {
            minDate: T,
            totalDays: $,
            chartHeight: R,
            pixelsPerDay: y,
            holidays: s,
            calendarSettings: i,
            zoomLevel: r
          }
        ),
        (g ? m : e.map((D, v) => ({ index: v, start: v * fe, size: fe, key: v }))).map((D) => {
          const v = e[D.index];
          if (!v || v.type !== "GROUP") return null;
          const L = D.start + ye;
          return /* @__PURE__ */ a.jsx(
            "rect",
            {
              x: 0,
              y: L,
              width: C,
              height: fe,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${D.key}`
          );
        }),
        Array.from({ length: $ }, (D, v) => {
          const L = (v + 1) * y, d = B(T, v), k = wt(d);
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
        (g ? m : e.map((D, v) => ({ index: v, start: v * fe, size: fe, key: v }))).map((D) => /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: D.start + fe + ye,
            x2: C,
            y2: D.start + fe + ye,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${D.key}`
        )),
        /* @__PURE__ */ a.jsx("rect", { x: 0, y: 0, width: C, height: ye, fill: "transparent" }),
        A.map((D) => {
          const v = (M == null ? void 0 : M.milestoneId) === D.milestone.id;
          return /* @__PURE__ */ a.jsx(
            os,
            {
              milestone: D.milestone,
              x: D.x,
              labelLevel: D.labelLevel,
              isDragging: v,
              dragX: v ? M == null ? void 0 : M.currentX : void 0,
              onMouseDown: l ? re : void 0,
              onDoubleClick: h ? H : void 0
            },
            D.milestone.id
          );
        }),
        /* @__PURE__ */ a.jsx(
          "line",
          {
            x1: 0,
            y1: ye,
            x2: C,
            y2: ye,
            stroke: Te.grid,
            strokeWidth: 1
          }
        ),
        (g ? m : e.map((D, v) => ({ index: v, start: v * fe, size: fe, key: v }))).map((D) => {
          const v = e[D.index];
          if (!v) return null;
          const L = D.start + (fe - oe) / 2 + ye;
          return /* @__PURE__ */ a.jsx(
            ls,
            {
              task: v,
              y: L,
              minDate: T,
              pixelsPerDay: y,
              isMasterView: p,
              isDraggable: !p && !!o,
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
vn.displayName = "GanttTimeline";
const ds = ({ milestoneName: e, onConfirm: n, onCancel: t }) => cn.createPortal(
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
), us = ({
  milestone: e,
  isOpen: n,
  isNew: t = !1,
  onClose: r,
  onSave: s,
  onDelete: i
}) => {
  const [o, l] = V(""), [h, m] = V(""), [f, w] = V(""), [y, p] = V(!1), g = le(null);
  ae(() => {
    e && n && (l(e.name), m(e.description || ""), w(me(e.date, "yyyy-MM-dd")), p(!1), setTimeout(() => {
      var T, $;
      (T = g.current) == null || T.focus(), ($ = g.current) == null || $.select();
    }, 100));
  }, [e, n]), ae(() => {
    const T = ($) => {
      $.key === "Escape" && n && (y ? p(!1) : r());
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [n, y, r]);
  const x = () => {
    if (!e || !o.trim()) return;
    const T = {
      ...e,
      name: o.trim(),
      description: h.trim() || void 0,
      date: new Date(f)
    };
    s(T), r();
  }, E = () => {
    p(!0);
  }, M = () => {
    e && i && i(e.id), p(!1);
  }, P = () => {
    p(!1);
  }, z = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), x());
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
                children: /* @__PURE__ */ a.jsx(Wt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Ur, { size: 14 }),
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
                /* @__PURE__ */ a.jsx(Hr, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "date",
                  value: f,
                  onChange: (T) => w(T.target.value),
                  onKeyDown: z,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ a.jsx(Vr, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: h,
                  onChange: (T) => m(T.target.value),
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
                  /* @__PURE__ */ a.jsx(Kr, { size: 16 }),
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
      ds,
      {
        milestoneName: o || e.name,
        onConfirm: M,
        onCancel: P
      }
    )
  ] });
}, Jt = (e) => {
  let n;
  const t = /* @__PURE__ */ new Set(), r = (m, f) => {
    const w = typeof m == "function" ? m(n) : m;
    if (!Object.is(w, n)) {
      const y = n;
      n = f ?? (typeof w != "object" || w === null) ? w : Object.assign({}, n, w), t.forEach((p) => p(n, y));
    }
  }, s = () => n, l = { setState: r, getState: s, getInitialState: () => h, subscribe: (m) => (t.add(m), () => t.delete(m)) }, h = n = e(r, s, l);
  return l;
}, hs = (e) => e ? Jt(e) : Jt, fs = (e) => e;
function ms(e, n = fs) {
  const t = Oe.useSyncExternalStore(
    e.subscribe,
    Oe.useCallback(() => n(e.getState()), [e, n]),
    Oe.useCallback(() => n(e.getInitialState()), [e, n])
  );
  return Oe.useDebugValue(t), t;
}
const Zt = (e) => {
  const n = hs(e), t = (r) => ms(n, r);
  return Object.assign(t, n), t;
}, gs = (e) => e ? Zt(e) : Zt, en = (e) => Symbol.iterator in e, tn = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), nn = (e, n) => {
  const t = e instanceof Map ? e : new Map(e.entries()), r = n instanceof Map ? n : new Map(n.entries());
  if (t.size !== r.size)
    return !1;
  for (const [s, i] of t)
    if (!r.has(s) || !Object.is(i, r.get(s)))
      return !1;
  return !0;
}, xs = (e, n) => {
  const t = e[Symbol.iterator](), r = n[Symbol.iterator]();
  let s = t.next(), i = r.next();
  for (; !s.done && !i.done; ) {
    if (!Object.is(s.value, i.value))
      return !1;
    s = t.next(), i = r.next();
  }
  return !!s.done && !!i.done;
};
function ys(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) ? !1 : en(e) && en(n) ? tn(e) && tn(n) ? nn(e, n) : xs(e, n) : nn(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  );
}
function Be(e) {
  const n = Oe.useRef(void 0);
  return (t) => {
    const r = e(t);
    return ys(n.current, r) ? n.current : n.current = r;
  };
}
const qe = gs((e, n) => ({
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
  sidebarWidth: ve.SIDEBAR_WIDTH,
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
      ve.SIDEBAR_MIN_WIDTH,
      Math.min(t, ve.SIDEBAR_MAX_WIDTH)
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
})), bs = () => qe(
  Be((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), ps = () => qe(
  Be((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), Vs = () => qe(
  Be((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), ws = () => qe(
  Be((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), vs = () => qe(
  Be((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), Bs = () => qe(
  Be((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Xe(e, n, t) {
  let r = t.initialDeps ?? [], s;
  function i() {
    var o, l, h, m;
    let f;
    t.key && ((o = t.debug) != null && o.call(t)) && (f = Date.now());
    const w = e();
    if (!(w.length !== r.length || w.some((g, x) => r[x] !== g)))
      return s;
    r = w;
    let p;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (p = Date.now()), s = n(...w), t.key && ((h = t.debug) != null && h.call(t))) {
      const g = Math.round((Date.now() - f) * 100) / 100, x = Math.round((Date.now() - p) * 100) / 100, E = x / 16, M = (P, z) => {
        for (P = String(P); P.length < z; )
          P = " " + P;
        return P;
      };
      console.info(
        `%c⏱ ${M(x, 5)} /${M(g, 5)} ms`,
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
function rn(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ds = (e, n) => Math.abs(e - n) < 1.01, ks = (e, n, t) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, s), t);
  };
}, sn = (e) => {
  const { offsetWidth: n, offsetHeight: t } = e;
  return { width: n, height: t };
}, js = (e) => e, Es = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = n; s <= t; s++)
    r.push(s);
  return r;
}, Ns = (e, n) => {
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
  if (s(sn(t)), !r.ResizeObserver)
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
      s(sn(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, an = {
  passive: !0
}, on = typeof window > "u" ? !0 : "onscrollend" in window, Ms = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && on ? () => {
  } : ks(
    r,
    () => {
      n(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (f) => () => {
    const { horizontal: w, isRtl: y } = e.options;
    s = w ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, i(), n(s, f);
  }, l = o(!0), h = o(!1);
  h(), t.addEventListener("scroll", l, an);
  const m = e.options.useScrollendEvent && on;
  return m && t.addEventListener("scrollend", h, an), () => {
    t.removeEventListener("scroll", l), m && t.removeEventListener("scrollend", h);
  };
}, Ss = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ws = (e, {
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
class Ts {
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
        getItemKey: js,
        rangeExtractor: Es,
        onChange: () => {
        },
        measureElement: Ss,
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
    }, this.maybeNotify = Xe(
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
    }, this.getMeasurementOptions = Xe(
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
    ), this.getMeasurements = Xe(
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
          const w = i(f), y = this.options.lanes === 1 ? m[f - 1] : this.getFurthestMeasurement(m, f), p = y ? y.end + this.options.gap : r + s, g = l.get(w), x = typeof g == "number" ? g : this.options.estimateSize(f), E = p + x, M = y ? y.lane : f % this.options.lanes;
          m[f] = {
            index: f,
            start: p,
            size: x,
            end: E,
            key: w,
            lane: M
          };
        }
        return this.measurementsCache = m, m;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Xe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, r, s, i) => this.range = t.length > 0 && r > 0 ? Os({
        measurements: t,
        outerSize: r,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Xe(
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
    }, this.getVirtualItems = Xe(
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
        return rn(
          r[Dn(
            0,
            r.length - 1,
            (s) => rn(r[s]).start,
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
          const p = this.getScrollOffset(), g = this.getOffsetForIndex(t, y);
          if (!g) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Ds(g[0], p) || h(y);
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
const Dn = (e, n, t, r) => {
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
function Os({
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
  let o = Dn(
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
const ln = typeof document < "u" ? xt.useLayoutEffect : xt.useEffect;
function Ps(e) {
  const n = xt.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? kn(n) : n(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = xt.useState(
    () => new Ts(t)
  );
  return r.setOptions(t), ln(() => r._didMount(), []), ln(() => r._willUpdate()), r;
}
function Cs(e) {
  return Ps({
    observeElementRect: Ns,
    observeElementOffset: Ms,
    scrollToFn: Ws,
    ...e
  });
}
const { ROW_HEIGHT: _s } = ve;
function Rs({
  containerRef: e,
  count: n,
  rowHeight: t = _s,
  overscan: r = 5
}) {
  const s = Cs({
    count: n,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: r
  }), i = s.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: be(() => i.map((l) => ({
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
const Is = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function qs({
  tasks: e,
  milestones: n = [],
  holidays: t = [],
  calendarSettings: r = Is,
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
  onTaskMove: p,
  onViewChange: g,
  onMilestoneCreate: x,
  onMilestoneUpdate: E,
  onMilestoneDelete: M,
  onSave: P,
  onReset: z,
  hasUnsavedChanges: T,
  saveStatus: $,
  className: A,
  style: C
}) {
  const { viewMode: R, activeCPId: G, zoomLevel: re } = bs(), { setViewMode: X, setZoomLevel: Q } = ps(), { sidebarWidth: H, setSidebarWidth: J } = vs(), { expandedTaskIds: ne, toggleTask: de, expandAll: U, collapseAll: D } = ws(), v = le(null), L = le(null), d = le(null), k = le(!1), O = le(!1), [I, ce] = V(!1), [se, q] = V(!1), [ie, ge] = V(!1), je = W(() => {
    q(!0);
  }, []), pe = W(() => {
    q(!1);
  }, []), Ae = W(() => {
    ge(!0);
  }, []), ze = W(() => {
    ge(!1);
  }, []), [K, Le] = V(null), [Ee, Ke] = V(!1), [Pe, Fe] = V(!1), vt = W((N) => {
    Le(N), Fe(!1), Ke(!0);
  }, []), Qe = W(() => {
    const N = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    Le(N), Fe(!0), Ke(!0);
  }, []), Ne = W(() => {
    Ke(!1), Le(null), Fe(!1);
  }, []), ct = W((N) => {
    Pe && x ? x(N) : E && E(N), Ne();
  }, [Pe, x, E, Ne]), dt = W((N) => {
    M && M(N), Ne();
  }, [M, Ne]), Ue = le(!1), He = be(() => e.map((N) => N.id), [e]);
  ae(() => {
    Ue.current || (Ue.current = !0, X(s), Q(i), D(), o && o.length > 0 ? U(o) : He.length > 0 && U(He));
  }, [He, o, s, i, X, Q, U, D]);
  const Je = le(/* @__PURE__ */ new Set());
  ae(() => {
    const N = new Set(e.map((b) => b.id)), u = Je.current, c = [];
    e.forEach((b) => {
      b.type === "GROUP" && !u.has(b.id) && c.push(b.id);
    }), c.length > 0 && U(c), Je.current = N;
  }, [e, U]);
  const Me = be(() => {
    if (R === "MASTER") {
      const N = [], u = (c, b = 0) => {
        e.forEach((S) => {
          S.wbsLevel === 1 && S.parentId === c && (c === null || ne.has(c)) && (N.push(S), S.type === "GROUP" && u(S.id, b + 1));
        });
      };
      return u(null), N;
    } else {
      const N = [], u = (c) => {
        e.forEach((b) => {
          b.wbsLevel === 2 && b.parentId === c && (c === G || ne.has(c)) && (N.push(b), b.type === "GROUP" && u(b.id));
        });
      };
      return u(G), N;
    }
  }, [e, R, G, ne]), { virtualRows: Ce, totalHeight: Ze } = Rs({
    containerRef: d,
    count: Me.length
  });
  ae(() => {
    const N = L.current, u = d.current;
    if (!N || !u) return;
    const c = () => {
      k.current || (k.current = !0, u.scrollTop = N.scrollTop, requestAnimationFrame(() => {
        k.current = !1;
      }));
    }, b = () => {
      k.current || (k.current = !0, N.scrollTop = u.scrollTop, requestAnimationFrame(() => {
        k.current = !1;
      }));
    };
    return N.addEventListener("scroll", c), u.addEventListener("scroll", b), () => {
      N.removeEventListener("scroll", c), u.removeEventListener("scroll", b);
    };
  }, []);
  const [Se, ut] = V(null), ht = W((N) => {
    if (N.detail >= 2) return;
    N.preventDefault(), O.current = !0, ce(!0);
    const u = N.clientX, c = H, b = (Y) => {
      if (!O.current) return;
      const te = Y.clientX - u;
      J(c + te);
    }, S = () => {
      O.current = !1, ce(!1), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S);
    };
    document.addEventListener("mousemove", b), document.addEventListener("mouseup", S);
  }, [H, J]), Dt = W(() => {
    J(Se !== null ? Se : ve.SIDEBAR_WIDTH);
  }, [Se, J]), et = W((N, u) => {
    X(N, u), g == null || g(N, u);
  }, [X, g]), Ye = W((N) => {
    const u = d.current;
    if (!u) return;
    const c = bt[re].pixelsPerDay, { minDate: b } = wn(e, n, 60), S = it(N, b, c);
    u.scrollLeft = Math.max(0, S - 50);
  }, [re, e, n]), _e = W(() => {
    if (R === "MASTER") {
      const N = Me.filter((u) => u.type === "CP");
      if (N.length > 0) {
        const u = N.reduce(
          (b, S) => b.startDate < S.startDate ? b : S
        ), c = new Date(u.startDate);
        c.setDate(c.getDate() - 5), Ye(c);
      }
    } else if (R === "DETAIL" && G) {
      const N = e.filter((u) => u.parentId === G);
      if (N.length > 0) {
        const u = N.reduce(
          (b, S) => b.startDate < S.startDate ? b : S
        ), c = new Date(u.startDate);
        c.setDate(c.getDate() - 5), Ye(c);
      }
    }
  }, [R, G, e, Me, Ye]), kt = W((N) => {
    R === "MASTER" && N.type === "CP" && et("DETAIL", N.id);
  }, [R, et]);
  ae(() => {
    if (R === "DETAIL" && G) {
      const N = setTimeout(() => {
        _e();
      }, 100);
      return () => clearTimeout(N);
    }
  }, [R, G, _e]);
  const ft = W(async (N) => {
    if (l)
      try {
        const u = e.find((b) => b.id === N.taskId);
        if (!u || !u.task) return;
        const c = {
          ...u,
          startDate: N.newStartDate,
          endDate: N.newEndDate,
          task: {
            ...u.task,
            indirectWorkDaysPre: N.newIndirectWorkDaysPre,
            indirectWorkDaysPost: N.newIndirectWorkDaysPost
          }
        };
        await l(c);
      } catch (u) {
        console.error("Failed to update task:", u);
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
                onClick: () => et("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            h && !se && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: je,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            h && !ie && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Ae,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            x && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: Qe,
                className: "flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors",
                title: "새 마일스톤 추가",
                children: "+ 마일스톤"
              }
            ),
            ie && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: _e,
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
                children: bt[N].label
              },
              N
            )) }),
            /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              me(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            P && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: P,
                disabled: !T || $ === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${T ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                children: $ === "saving" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
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
                pn,
                {
                  ref: L,
                  tasks: Me,
                  allTasks: e,
                  viewMode: R,
                  expandedIds: ne,
                  onToggle: de,
                  onTaskClick: kt,
                  onTaskUpdate: l,
                  onTaskCreate: h,
                  onTaskReorder: f,
                  onTaskGroup: w,
                  onTaskUngroup: y,
                  onTaskDelete: m,
                  onTaskMove: p,
                  activeCPId: G,
                  virtualRows: Ce,
                  totalHeight: Ze,
                  onTotalWidthChange: ut,
                  isAddingTask: se,
                  onCancelAddTask: pe,
                  isAddingCP: ie,
                  onCancelAddCP: ze
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${I ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: ht,
              onDoubleClick: Dt,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ a.jsx(
            vn,
            {
              ref: d,
              tasks: Me,
              milestones: n,
              viewMode: R,
              zoomLevel: re,
              holidays: t,
              calendarSettings: r,
              onTaskUpdate: l,
              onBarDrag: ft,
              onMilestoneUpdate: E,
              onMilestoneDoubleClick: vt,
              virtualRows: Ce,
              totalHeight: Ze
            }
          ) }),
          I && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ a.jsx(
          us,
          {
            milestone: K,
            isOpen: Ee,
            isNew: Pe,
            onClose: Ne,
            onSave: ct,
            onDelete: dt
          }
        )
      ]
    }
  );
}
export {
  Te as GANTT_COLORS,
  ve as GANTT_LAYOUT,
  qs as GanttChart,
  pn as GanttSidebar,
  vn as GanttTimeline,
  bt as ZOOM_CONFIG,
  Ut as addCalendarDays,
  ns as addWorkingDays,
  wn as calculateDateRange,
  Hs as calculateDualCalendarDates,
  it as dateToX,
  Ys as getAnchorDate,
  Gs as getDateRangeWidth,
  Xs as getPixelsPerDay,
  Ve as isHoliday,
  Ls as isWeekend,
  Fs as subtractWorkingDays,
  Bs as useGanttDrag,
  ws as useGanttExpansion,
  Vs as useGanttSelection,
  vs as useGanttSidebar,
  qe as useGanttStore,
  ps as useGanttViewActions,
  bs as useGanttViewState,
  Rs as useGanttVirtualization,
  $s as xToDate
};
