"use client";
import * as wt from "react";
import Pe, { forwardRef as kt, createElement as Pt, useState as $, useRef as fe, useEffect as ce, useCallback as M, useMemo as De } from "react";
import Ot, { flushSync as Mr } from "react-dom";
var Tt = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function Wr() {
  if (It) return et;
  It = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      i = {};
      for (var o in a)
        o !== "key" && (i[o] = a[o]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: l,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return et.Fragment = r, et.jsx = t, et.jsxs = t, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Sr() {
  return Rt || (Rt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === re ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case k:
          return "Fragment";
        case _:
          return "Profiler";
        case C:
          return "StrictMode";
        case A:
          return "Suspense";
        case I:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case p:
            return "Portal";
          case R:
            return h.displayName || "Context";
          case Y:
            return (h._context.displayName || "Context") + ".Consumer";
          case H:
            var j = h.render;
            return h = h.displayName, h || (h = j.displayName || j.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case T:
            return j = h.displayName || null, j !== null ? j : e(h.type) || "Memo";
          case S:
            j = h._payload, h = h._init;
            try {
              return e(h(j));
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
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var P = j.error, O = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return P.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), r(h);
      }
    }
    function n(h) {
      if (h === k) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === S)
        return "<...>";
      try {
        var j = e(h);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var h = J.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(h) {
      if (ie.call(h, "key")) {
        var j = Object.getOwnPropertyDescriptor(h, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function o(h, j) {
      function P() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: P,
        configurable: !0
      });
    }
    function f() {
      var h = e(this.type);
      return ne[h] || (ne[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function c(h, j, P, O, te, de) {
      var G = P.ref;
      return h = {
        $$typeof: m,
        type: h,
        key: j,
        props: P,
        _owner: O
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(h, "ref", {
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
        value: te
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function d(h, j, P, O, te, de) {
      var G = j.children;
      if (G !== void 0)
        if (O)
          if (V(G)) {
            for (O = 0; O < G.length; O++)
              v(G[O]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(G);
      if (ie.call(j, "key")) {
        G = e(h);
        var Q = Object.keys(j).filter(function(he) {
          return he !== "key";
        });
        O = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", x[G + O] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          G,
          Q,
          G
        ), x[G + O] = !0);
      }
      if (G = null, P !== void 0 && (t(P), G = "" + P), l(j) && (t(j.key), G = "" + j.key), "key" in j) {
        P = {};
        for (var ue in j)
          ue !== "key" && (P[ue] = j[ue]);
      } else P = j;
      return G && o(
        P,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), c(
        h,
        G,
        P,
        a(),
        te,
        de
      );
    }
    function v(h) {
      w(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === S && (h._payload.status === "fulfilled" ? w(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function w(h) {
      return typeof h == "object" && h !== null && h.$$typeof === m;
    }
    var b = Pe, m = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), R = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), J = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, V = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var se, ne = {}, B = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), N = U(n(i)), x = {};
    tt.Fragment = k, tt.jsx = function(h, j, P) {
      var O = 1e4 > J.recentlyCreatedOwnerStacks++;
      return d(
        h,
        j,
        P,
        !1,
        O ? Error("react-stack-top-frame") : B,
        O ? U(n(h)) : N
      );
    }, tt.jsxs = function(h, j, P) {
      var O = 1e4 > J.recentlyCreatedOwnerStacks++;
      return d(
        h,
        j,
        P,
        !0,
        O ? Error("react-stack-top-frame") : B,
        O ? U(n(h)) : N
      );
    };
  }()), tt;
}
process.env.NODE_ENV === "production" ? Tt.exports = Wr() : Tt.exports = Sr();
var s = Tt.exports;
const fr = 6048e5, Pr = 864e5, At = Symbol.for("constructDateFrom");
function Ee(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && At in e ? e[At](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function oe(e, r) {
  return Ee(r || e, e);
}
function K(e, r, t) {
  const n = oe(e, t == null ? void 0 : t.in);
  return isNaN(r) ? Ee(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function mr(e, r) {
  return oe(e, r == null ? void 0 : r.in).getDay() === 6;
}
function xr(e, r) {
  return oe(e, r == null ? void 0 : r.in).getDay() === 0;
}
let Tr = {};
function it() {
  return Tr;
}
function _e(e, r) {
  var o, f, c, d;
  const t = it(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : f.weekStartsOn) ?? t.weekStartsOn ?? ((d = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = oe(e, r == null ? void 0 : r.in), i = a.getDay(), l = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function vt(e, r) {
  return _e(e, { ...r, weekStartsOn: 1 });
}
function gr(e, r) {
  const t = oe(e, r == null ? void 0 : r.in), n = t.getFullYear(), a = Ee(t, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = vt(a), l = Ee(t, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const o = vt(l);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function zt(e) {
  const r = oe(e), t = new Date(
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
function ot(e, ...r) {
  const t = Ee.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function st(e, r) {
  const t = oe(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function yr(e, r, t) {
  const [n, a] = ot(
    t == null ? void 0 : t.in,
    e,
    r
  ), i = st(n), l = st(a), o = +i - zt(i), f = +l - zt(l);
  return Math.round((o - f) / Pr);
}
function Cr(e, r) {
  const t = gr(e, r), n = Ee(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), vt(n);
}
function Or(e, r, t) {
  const [n, a] = ot(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +st(n) == +st(a);
}
function _r(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ir(e) {
  return !(!_r(e) && typeof e != "number" || isNaN(+oe(e)));
}
function _t(e, r, t) {
  const [n, a] = ot(
    t == null ? void 0 : t.in,
    e,
    r
  ), i = Lt(n, a), l = Math.abs(
    yr(n, a)
  );
  n.setDate(n.getDate() - i * l);
  const o = +(Lt(n, a) === -i), f = i * (l - o);
  return f === 0 ? 0 : f;
}
function Lt(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Rr(e, r) {
  const t = oe(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ar(e, r) {
  const t = oe(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const zr = {
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
}, Lr = (e, r, t) => {
  let n;
  const a = zr[e];
  return typeof a == "string" ? n = a : r === 1 ? n = a.one : n = a.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Mt(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const Fr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Hr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $r = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Yr = {
  date: Mt({
    formats: Fr,
    defaultWidth: "full"
  }),
  time: Mt({
    formats: Hr,
    defaultWidth: "full"
  }),
  dateTime: Mt({
    formats: $r,
    defaultWidth: "full"
  })
}, Gr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xr = (e, r, t, n) => Gr[e];
function rt(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : l;
      a = e.formattingValues[o] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      a = e.values[o] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(r) : r;
    return a[i];
  };
}
const Vr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Br = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qr = {
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
}, Kr = {
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
}, Qr = {
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
}, Jr = {
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
}, Ur = (e, r) => {
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
}, Zr = {
  ordinalNumber: Ur,
  era: rt({
    values: Vr,
    defaultWidth: "wide"
  }),
  quarter: rt({
    values: Br,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: rt({
    values: qr,
    defaultWidth: "wide"
  }),
  day: rt({
    values: Kr,
    defaultWidth: "wide"
  }),
  dayPeriod: rt({
    values: Qr,
    defaultWidth: "wide",
    formattingValues: Jr,
    defaultFormattingWidth: "wide"
  })
};
function nt(e) {
  return (r, t = {}) => {
    const n = t.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = r.match(a);
    if (!i)
      return null;
    const l = i[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(o) ? tn(o, (v) => v.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      en(o, (v) => v.test(l))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(f) : f, c = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(c)
    ) : c;
    const d = r.slice(l.length);
    return { value: c, rest: d };
  };
}
function en(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function tn(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function rn(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = r.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = t.valueCallback ? t.valueCallback(l) : l;
    const o = r.slice(a.length);
    return { value: l, rest: o };
  };
}
const nn = /^(\d+)(th|st|nd|rd)?/i, sn = /\d+/i, an = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, on = {
  any: [/^b/i, /^(a|c)/i]
}, ln = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, cn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, dn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, un = {
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
}, hn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xn = {
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
}, gn = {
  ordinalNumber: rn({
    matchPattern: nn,
    parsePattern: sn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nt({
    matchPatterns: an,
    defaultMatchWidth: "wide",
    parsePatterns: on,
    defaultParseWidth: "any"
  }),
  quarter: nt({
    matchPatterns: ln,
    defaultMatchWidth: "wide",
    parsePatterns: cn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nt({
    matchPatterns: dn,
    defaultMatchWidth: "wide",
    parsePatterns: un,
    defaultParseWidth: "any"
  }),
  day: nt({
    matchPatterns: hn,
    defaultMatchWidth: "wide",
    parsePatterns: fn,
    defaultParseWidth: "any"
  }),
  dayPeriod: nt({
    matchPatterns: mn,
    defaultMatchWidth: "any",
    parsePatterns: xn,
    defaultParseWidth: "any"
  })
}, yn = {
  code: "en-US",
  formatDistance: Lr,
  formatLong: Yr,
  formatRelative: Xr,
  localize: Zr,
  match: gn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function bn(e, r) {
  const t = oe(e, r == null ? void 0 : r.in);
  return yr(t, Ar(t)) + 1;
}
function pn(e, r) {
  const t = oe(e, r == null ? void 0 : r.in), n = +vt(t) - +Cr(t);
  return Math.round(n / fr) + 1;
}
function br(e, r) {
  var d, v, w, b;
  const t = oe(e, r == null ? void 0 : r.in), n = t.getFullYear(), a = it(), i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((v = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : v.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (w = a.locale) == null ? void 0 : w.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, l = Ee((r == null ? void 0 : r.in) || e, 0);
  l.setFullYear(n + 1, 0, i), l.setHours(0, 0, 0, 0);
  const o = _e(l, r), f = Ee((r == null ? void 0 : r.in) || e, 0);
  f.setFullYear(n, 0, i), f.setHours(0, 0, 0, 0);
  const c = _e(f, r);
  return +t >= +o ? n + 1 : +t >= +c ? n : n - 1;
}
function wn(e, r) {
  var o, f, c, d;
  const t = it(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((f = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : f.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((d = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = br(e, r), i = Ee((r == null ? void 0 : r.in) || e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), _e(i, r);
}
function vn(e, r) {
  const t = oe(e, r == null ? void 0 : r.in), n = +_e(t, r) - +wn(t, r);
  return Math.round(n / fr) + 1;
}
function X(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const We = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return X(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : X(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return X(e.getDate(), r.length);
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
    return X(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return X(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return X(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return X(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return X(a, r.length);
  }
}, $e = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ft = {
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
    return We.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const a = br(e, n), i = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const l = i % 100;
      return X(l, 2);
    }
    return r === "Yo" ? t.ordinalNumber(i, { unit: "year" }) : X(i, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = gr(e);
    return X(t, r.length);
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
    return X(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return X(n, 2);
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
        return X(n, 2);
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
        return We.M(e, r);
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
        return X(n + 1, 2);
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
    const a = vn(e, n);
    return r === "wo" ? t.ordinalNumber(a, { unit: "week" }) : X(a, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = pn(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : X(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : We.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = bn(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : X(n, r.length);
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
        return X(i, 2);
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
        return X(i, r.length);
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
        return X(a, r.length);
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
    switch (n === 12 ? a = $e.noon : n === 0 ? a = $e.midnight : a = n / 12 >= 1 ? "pm" : "am", r) {
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
    switch (n >= 17 ? a = $e.evening : n >= 12 ? a = $e.afternoon : n >= 4 ? a = $e.morning : a = $e.night, r) {
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
    return We.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : We.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : X(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : X(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : We.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : We.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return We.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return $t(n);
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
        return $t(n);
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
        return "GMT" + Ht(n, ":");
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
        return "GMT" + Ht(n, ":");
      case "zzzz":
      default:
        return "GMT" + Oe(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return X(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return X(+e, r.length);
  }
};
function Ht(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? t + String(a) : t + String(a) + r + X(i, 2);
}
function $t(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + X(Math.abs(e) / 60, 2) : Oe(e, r);
}
function Oe(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), a = X(Math.trunc(n / 60), 2), i = X(n % 60, 2);
  return t + a + r + i;
}
const Yt = (e, r) => {
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
}, pr = (e, r) => {
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
}, Dn = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], a = t[2];
  if (!a)
    return Yt(e, r);
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
  return i.replace("{{date}}", Yt(n, r)).replace("{{time}}", pr(a, r));
}, kn = {
  p: pr,
  P: Dn
}, jn = /^D+$/, Nn = /^Y+$/, En = ["D", "DD", "YY", "YYYY"];
function Mn(e) {
  return jn.test(e);
}
function Wn(e) {
  return Nn.test(e);
}
function Sn(e, r, t) {
  const n = Pn(e, r, t);
  if (console.warn(n), En.includes(e)) throw new RangeError(n);
}
function Pn(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Tn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Cn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, On = /^'([^]*?)'?$/, _n = /''/g, In = /[a-zA-Z]/;
function be(e, r, t) {
  var d, v, w, b;
  const n = it(), a = n.locale ?? yn, i = n.firstWeekContainsDate ?? ((v = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, l = n.weekStartsOn ?? ((b = (w = n.locale) == null ? void 0 : w.options) == null ? void 0 : b.weekStartsOn) ?? 0, o = oe(e, t == null ? void 0 : t.in);
  if (!Ir(o))
    throw new RangeError("Invalid time value");
  let f = r.match(Cn).map((m) => {
    const p = m[0];
    if (p === "p" || p === "P") {
      const k = kn[p];
      return k(m, a.formatLong);
    }
    return m;
  }).join("").match(Tn).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const p = m[0];
    if (p === "'")
      return { isToken: !1, value: Rn(m) };
    if (Ft[p])
      return { isToken: !0, value: m };
    if (p.match(In))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: m };
  });
  a.localize.preprocessor && (f = a.localize.preprocessor(o, f));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: a
  };
  return f.map((m) => {
    if (!m.isToken) return m.value;
    const p = m.value;
    (Wn(p) || Mn(p)) && Sn(p, r, String(e));
    const k = Ft[p[0]];
    return k(o, p, a.localize, c);
  }).join("");
}
function Rn(e) {
  const r = e.match(On);
  return r ? r[1].replace(_n, "'") : e;
}
function An(e, r) {
  return oe(e, r == null ? void 0 : r.in).getDate();
}
function jt(e, r) {
  return oe(e, r == null ? void 0 : r.in).getDay();
}
function Gt(e, r) {
  var f, c, d, v;
  const t = it(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((c = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((v = (d = t.locale) == null ? void 0 : d.options) == null ? void 0 : v.weekStartsOn) ?? 0, a = An(oe(e, r == null ? void 0 : r.in));
  if (isNaN(a)) return NaN;
  const i = jt(Rr(e, r));
  let l = n - i;
  l <= 0 && (l += 7);
  const o = a - l;
  return Math.ceil(o / 7) + 1;
}
function Wt(e, r) {
  return oe(e, r == null ? void 0 : r.in).getFullYear();
}
function zn(e, r, t) {
  const [n, a] = ot(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +_e(n, t) == +_e(a, t);
}
function Ln(e, r, t) {
  const [n, a] = ot(
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
const Fn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), Xt = (e) => {
  const r = Hn(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, wr = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), $n = (e) => {
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
var Yn = {
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
const Gn = kt(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: l,
    ...o
  }, f) => Pt(
    "svg",
    {
      ref: f,
      ...Yn,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: wr("lucide", a),
      ...!i && !$n(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...l.map(([c, d]) => Pt(c, d)),
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
  const t = kt(
    ({ className: n, ...a }, i) => Pt(Gn, {
      ref: i,
      iconNode: r,
      className: wr(
        `lucide-${Fn(Xt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...a
    })
  );
  return t.displayName = Xt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Vn = ke("calendar", Xn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], vr = ke("check", Bn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Vt = ke("chevron-down", qn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Bt = ke("chevron-right", Kn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], St = ke("clock", Qn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [
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
], Un = ke("file-text", Jn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], qt = ke("grip-vertical", Zn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Dr = ke("trash-2", es);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Ct = ke("type", ts);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Nt = ke("x", rs), Se = {
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
}, ns = ({ taskNames: e, onConfirm: r, onCancel: t }) => Ot.createPortal(
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
), Kt = ({
  x: e,
  y: r,
  taskId: t,
  selectedTaskIds: n,
  tasks: a,
  onTaskGroup: i,
  onTaskUngroup: l,
  onTaskDelete: o,
  onStartRename: f,
  onClose: c,
  onDeselect: d
}) => {
  var H;
  const [v, w] = $(!1), b = Array.from(n).some((A) => {
    const I = a.find((T) => T.id === A);
    return (I == null ? void 0 : I.type) === "GROUP";
  }), m = () => {
    n.size >= 1 && !b && i && (i(Array.from(n)), c());
  }, p = () => {
    if (n.size === 1 && l) {
      const A = Array.from(n)[0], I = a.find((T) => T.id === A);
      (I == null ? void 0 : I.type) === "GROUP" && (l(A), c());
    }
  }, k = () => {
    w(!0);
  }, C = () => {
    o && (n.size > 0 ? Array.from(n) : [t]).forEach((I) => {
      o(I);
    }), w(!1), d(), c();
  }, _ = () => {
    w(!1);
  }, Y = n.size === 1 && (() => {
    const A = Array.from(n)[0], I = a.find((T) => T.id === A);
    return (I == null ? void 0 : I.type) === "GROUP";
  })(), R = n.size > 0 ? Array.from(n).map((A) => {
    var I;
    return ((I = a.find((T) => T.id === A)) == null ? void 0 : I.name) || A;
  }) : [((H = a.find((A) => A.id === t)) == null ? void 0 : H.name) || t];
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: { left: e, top: r },
      onClick: (A) => A.stopPropagation(),
      children: [
        n.size >= 1 && !b && i && /* @__PURE__ */ s.jsxs(
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
        Y && l && /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: p,
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
              const A = Array.from(n)[0];
              f(A), c();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
              "이름 변경"
            ]
          }
        ),
        o && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
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
              d(), c();
            },
            className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-500 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
              "선택 해제"
            ]
          }
        ),
        v && /* @__PURE__ */ s.jsx(
          ns,
          {
            taskNames: R,
            onConfirm: C,
            onCancel: _
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Qt } = Ne, bt = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, ss = ({
  columns: e,
  tasks: r,
  activeCPId: t,
  onTaskCreate: n,
  onCancel: a,
  isVirtualized: i = !1,
  virtualRowIndex: l
}) => {
  const [o, f] = Pe.useState(bt), c = fe(null);
  ce(() => {
    f(bt), setTimeout(() => {
      var m;
      (m = c.current) == null || m.focus();
    }, 0);
  }, []);
  const d = M(() => {
    f(bt), a();
  }, [a]), v = M(async () => {
    if (!(!o.name.trim() || !n || !t))
      try {
        const m = r[r.length - 1], p = m ? K(m.endDate, 1) : /* @__PURE__ */ new Date(), k = o.indirectWorkDaysPre + o.netWorkDays + o.indirectWorkDaysPost, C = K(p, Math.max(k - 1, 0)), _ = {
          id: `task-${Date.now()}`,
          parentId: t,
          wbsLevel: 2,
          type: "TASK",
          name: o.name.trim(),
          startDate: p,
          endDate: C,
          task: {
            netWorkDays: o.netWorkDays,
            indirectWorkDaysPre: o.indirectWorkDaysPre,
            indirectWorkDaysPost: o.indirectWorkDaysPost
          },
          dependencies: []
        };
        await n(_), f(bt), a();
      } catch (m) {
        console.error("Failed to create task:", m), alert("태스크 생성 중 오류가 발생했습니다.");
      }
  }, [o, n, t, r, a]), w = M((m) => {
    m.key === "Enter" ? (m.preventDefault(), v()) : m.key === "Escape" && (m.preventDefault(), d());
  }, [v, d]), b = i && l !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${r.length * Qt}px)`
  } : {};
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Qt,
        ...b
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
                value: o.name,
                onChange: (m) => f((p) => ({ ...p, name: m.target.value })),
                onKeyDown: w
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
                value: o.indirectWorkDaysPre,
                onChange: (m) => {
                  const p = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(p) || 0;
                  f((C) => ({ ...C, indirectWorkDaysPre: k }));
                },
                onKeyDown: w,
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
                value: o.netWorkDays,
                onChange: (m) => {
                  const p = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(p) || 0;
                  f((C) => ({ ...C, netWorkDays: k }));
                },
                onKeyDown: w,
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
                value: o.indirectWorkDaysPost,
                onChange: (m) => {
                  const p = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(p) || 0;
                  f((C) => ({ ...C, indirectWorkDaysPost: k }));
                },
                onKeyDown: w,
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
                  onClick: v,
                  disabled: !o.name.trim(),
                  className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  title: "저장 (Enter)",
                  children: /* @__PURE__ */ s.jsx(vr, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: d,
                  className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                  title: "취소 (Esc)",
                  children: /* @__PURE__ */ s.jsx(Nt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, { ROW_HEIGHT: Jt } = Ne, pt = {
  name: "",
  workDaysTotal: 30,
  nonWorkDaysTotal: 10
}, as = ({
  columns: e,
  tasks: r,
  onTaskCreate: t,
  onCancel: n,
  isVirtualized: a = !1,
  virtualRowIndex: i,
  dragHandleWidth: l = 0
}) => {
  const [o, f] = Pe.useState(pt), c = fe(null);
  ce(() => {
    f(pt), setTimeout(() => {
      var m;
      (m = c.current) == null || m.focus();
    }, 0);
  }, []);
  const d = M(() => {
    f(pt), n();
  }, [n]), v = M(async () => {
    if (!(!o.name.trim() || !t))
      try {
        const m = r.filter((R) => R.type === "CP" && !R.parentId), p = m[m.length - 1], k = p ? K(p.endDate, 1) : /* @__PURE__ */ new Date(), C = o.workDaysTotal + o.nonWorkDaysTotal, _ = K(k, Math.max(C - 1, 0)), Y = {
          id: `cp-${Date.now()}`,
          parentId: null,
          wbsLevel: 1,
          type: "CP",
          name: o.name.trim(),
          startDate: k,
          endDate: _,
          cp: {
            workDaysTotal: o.workDaysTotal,
            nonWorkDaysTotal: o.nonWorkDaysTotal
          },
          dependencies: []
        };
        await t(Y), f(pt), n();
      } catch (m) {
        console.error("Failed to create CP:", m), alert("CP 생성 중 오류가 발생했습니다.");
      }
  }, [o, t, r, n]), w = M((m) => {
    m.key === "Enter" ? (m.preventDefault(), v()) : m.key === "Escape" && (m.preventDefault(), d());
  }, [v, d]), b = a && i !== void 0 ? {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transform: `translateY(${r.length * Jt}px)`
  } : {};
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
      style: {
        height: Jt,
        ...b
      },
      children: [
        l > 0 && /* @__PURE__ */ s.jsx("div", { style: { width: l }, className: "shrink-0" }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
            style: { width: l > 0 ? e[0].width - l : e[0].width },
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
                  value: o.name,
                  onChange: (m) => f((p) => ({ ...p, name: m.target.value })),
                  onKeyDown: w
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
              o.workDaysTotal + o.nonWorkDaysTotal,
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
                value: o.workDaysTotal,
                onChange: (m) => {
                  const p = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(p) || 0;
                  f((C) => ({ ...C, workDaysTotal: k }));
                },
                onKeyDown: w,
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
                value: o.nonWorkDaysTotal,
                onChange: (m) => {
                  const p = m.target.value.replace(/[^0-9]/g, ""), k = parseInt(p) || 0;
                  f((C) => ({ ...C, nonWorkDaysTotal: k }));
                },
                onKeyDown: w,
                title: "비작업일수"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "flex shrink-0 items-center justify-center gap-1 px-2", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: v,
              disabled: !o.name.trim(),
              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
              title: "저장 (Enter)",
              children: /* @__PURE__ */ s.jsx(vr, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: d,
              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
              title: "취소 (Esc)",
              children: /* @__PURE__ */ s.jsx(Nt, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, { ROW_HEIGHT: Ye, HEADER_HEIGHT: Ut, MILESTONE_LANE_HEIGHT: Zt } = Ne, er = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], tr = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], kr = kt(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: a, onTaskClick: i, onTaskUpdate: l, onTaskCreate: o, onTaskReorder: f, activeCPId: c, virtualRows: d, totalHeight: v, onTotalWidthChange: w, onTaskGroup: b, onTaskUngroup: m, onTaskDelete: p, onTaskMove: k, isAddingTask: C = !1, onCancelAddTask: _, isAddingCP: Y = !1, onCancelAddCP: R, onTaskDoubleClick: H }, A) => {
    const I = d && d.length > 0, [T, S] = $(null), [Z, re] = $(null), [J, ie] = $(null), [V, U] = $(/* @__PURE__ */ new Set()), [se, ne] = $(null), [B, N] = $(null), [x, h] = $(null), [j, P] = $(""), O = fe(null), [te, de] = $(
      er.map((y) => y.width)
    ), [G, Q] = $(
      tr.map((y) => y.width)
    ), [ue, he] = $(null), Ie = fe(!1), je = t === "MASTER" ? er : tr, Re = t === "MASTER" ? te : G, Ae = t === "MASTER" ? de : Q, ee = De(
      () => je.map((y, u) => ({
        ...y,
        width: Re[u] ?? y.width
      })),
      [je, Re]
    ), lt = f ? 24 : 0, pe = ee.reduce((y, u) => y + u.width, 0) + lt;
    ce(() => {
      w && w(pe);
    }, [pe, w]);
    const qe = M((y, u) => {
      if (y.detail >= 2) return;
      y.preventDefault(), y.stopPropagation(), Ie.current = !0, he(u);
      const E = y.clientX, F = Re[u], q = je[u].minWidth, le = (W) => {
        if (!Ie.current) return;
        const L = W.clientX - E, z = Math.max(q, F + L);
        Ae((D) => {
          const me = [...D];
          return me[u] = z, me;
        });
      }, g = () => {
        Ie.current = !1, he(null), document.removeEventListener("mousemove", le), document.removeEventListener("mouseup", g);
      };
      document.addEventListener("mousemove", le), document.addEventListener("mouseup", g);
    }, [Re, je, Ae]), Te = M((y, u = 12, E = "normal") => {
      const q = document.createElement("canvas").getContext("2d");
      return q ? (q.font = `${E} ${u}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, q.measureText(y).width) : 0;
    }, []), ct = M((y) => {
      const u = je[y].minWidth, E = y === 0, F = E ? 48 : 20, q = je[y].label;
      let le = Te(q, 12, "500") + 16;
      return e.forEach((g) => {
        let W = "", L = 0;
        if (t === "MASTER") {
          const ge = g.type === "GROUP";
          switch (E && g.parentId && (L = 20), y) {
            case 0:
              W = g.name;
              break;
            case 1:
              W = ge ? "-" : g.cp ? `${g.cp.workDaysTotal + g.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              W = ge ? "-" : g.cp ? `${g.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              W = ge ? "-" : g.cp ? `${g.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (y) {
            case 0:
              W = g.name;
              break;
            case 1:
              W = g.task ? String(g.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              W = g.task ? String(g.task.netWorkDays) : "-";
              break;
            case 3:
              W = g.task ? String(g.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              W = be(g.startDate, "yyyy-MM-dd");
              break;
            case 5:
              W = be(g.endDate, "yyyy-MM-dd");
              break;
          }
        const me = Te(W, E ? 14 : 12, E ? "500" : "normal") + F + L;
        le = Math.max(le, me);
      }), Math.max(u, Math.ceil(le));
    }, [e, t, je, Te]), Et = M((y, u) => {
      y.preventDefault(), y.stopPropagation(), Ie.current = !1, he(null);
      const E = ct(u);
      Ae((F) => {
        const q = [...F];
        return q[u] = E, q;
      });
    }, [ct, Ae]), ze = M((y, u, E) => {
      if (!y.task || !l) return;
      const F = {
        ...y,
        task: {
          ...y.task,
          [u]: E
        }
      };
      l(F);
    }, [l]), dt = M((y, u) => {
      y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", u), S(u);
      const E = document.createElement("div");
      E.style.opacity = "0", document.body.appendChild(E), y.dataTransfer.setDragImage(E, 0, 0), setTimeout(() => document.body.removeChild(E), 0);
    }, []), Ke = M((y, u, E) => {
      if (y.preventDefault(), y.dataTransfer.dropEffect = "move", u === T) return;
      const F = y.currentTarget.getBoundingClientRect(), q = y.clientY - F.top, le = F.height;
      let g;
      E ? q < le / 3 ? g = "before" : q < le * 2 / 3 ? g = "into" : g = "after" : g = q < le / 2 ? "before" : "after", re(u), ie(g);
    }, [T]), Qe = M(() => {
      re(null), ie(null);
    }, []), Me = M((y, u) => {
      if (y.preventDefault(), !T || T === u || !J) {
        S(null), re(null), ie(null);
        return;
      }
      if (k)
        k(T, u, J);
      else if (f && J !== "into") {
        const E = e.findIndex((q) => q.id === u), F = J === "after" ? E + 1 : E;
        f(T, F);
      }
      S(null), re(null), ie(null);
    }, [T, J, k, f, e]), ut = M(() => {
      S(null), re(null), ie(null);
    }, []), ht = M((y, u, E) => {
      if (T) return;
      const F = y.ctrlKey || y.metaKey, q = y.shiftKey;
      if (F)
        U((le) => {
          const g = new Set(le);
          return g.has(u.id) ? g.delete(u.id) : g.add(u.id), g;
        }), ne(E);
      else if (q && se !== null) {
        const le = Math.min(se, E), g = Math.max(se, E);
        U((W) => {
          const L = new Set(W);
          for (let z = le; z <= g; z++)
            e[z] && L.add(e[z].id);
          return L;
        });
      } else
        U(/* @__PURE__ */ new Set([u.id])), ne(E);
    }, [T, se, e]), ft = M((y, u) => {
      y.preventDefault(), V.has(u.id) || U(/* @__PURE__ */ new Set([u.id])), N({
        x: y.clientX,
        y: y.clientY,
        taskId: u.id
      });
    }, [V]);
    ce(() => {
      const y = () => {
        N(null);
      };
      if (B)
        return document.addEventListener("click", y), () => document.removeEventListener("click", y);
    }, [B]), ce(() => {
      const y = (u) => {
        u.key === "Escape" && (U(/* @__PURE__ */ new Set()), N(null), h(null));
      };
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, []);
    const we = M((y) => {
      h(y.id), P(y.name), setTimeout(() => {
        var u, E;
        (u = O.current) == null || u.focus(), (E = O.current) == null || E.select();
      }, 0);
    }, []), mt = M((y) => {
      const u = e.find((E) => E.id === y);
      u && l && we(u);
    }, [e, l, we]), Le = M(() => {
      if (!x || !l) {
        h(null);
        return;
      }
      const y = e.find((u) => u.id === x);
      y && j.trim() && j !== y.name && l({
        ...y,
        name: j.trim()
      }), h(null), P("");
    }, [x, j, e, l]), Je = M(() => {
      h(null), P("");
    }, []), Fe = M((y) => {
      y.key === "Enter" ? (y.preventDefault(), Le()) : y.key === "Escape" && (y.preventDefault(), Je());
    }, [Le, Je]), xt = M((y) => {
      if (!c || y.parentId === c) return 0;
      let u = 0, E = y.parentId;
      for (; E && E !== c; ) {
        const F = r.find((q) => q.id === E);
        (F == null ? void 0 : F.type) === "GROUP" && u++, E = (F == null ? void 0 : F.parentId) || null;
      }
      return u;
    }, [c, r]), Ce = M((y) => {
      if (!y.parentId) return 0;
      let u = 0, E = y.parentId;
      for (; E; ) {
        const F = r.find((q) => q.id === E);
        (F == null ? void 0 : F.type) === "GROUP" && u++, E = F == null ? void 0 : F.parentId;
      }
      return u;
    }, [r]), Ue = () => /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: ee.map((y, u) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: y.width },
        children: [
          y.label,
          u < ee.length - 1 && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${ue === u ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (E) => qe(E, u),
              onDoubleClick: (E) => Et(E, u),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          u < ee.length - 1 && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      y.id
    )) }), He = V.size === 1 ? e.find((y) => y.id === Array.from(V)[0] && y.type === "GROUP") : null, Ze = V.size >= 1 && b && !He, gt = He && m, yt = () => !Ze && !gt && V.size === 0 ? null : /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
      V.size > 0 && /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500", children: [
        V.size,
        "개 선택"
      ] }),
      gt && /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: () => {
            m(He.id), U(/* @__PURE__ */ new Set());
          },
          className: "flex items-center gap-1 rounded bg-gray-500 px-2 py-1 text-xs font-medium text-white hover:bg-gray-600 transition-colors",
          title: "그룹 해제",
          children: [
            /* @__PURE__ */ s.jsx("svg", { className: "h-3.5 w-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 6h16M4 12h16m-7 6h7" }) }),
            "해제"
          ]
        }
      ),
      V.size > 0 && /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: () => U(/* @__PURE__ */ new Set()),
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
          style: { height: Ut },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ s.jsx("span", { className: "font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
              yt()
            ] }),
            Ue()
          ]
        }
      ),
      ue !== null && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ s.jsxs("div", { ref: A, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Zt, minWidth: pe },
            children: ee.map((y, u) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: y.width },
                children: u === 0 && "Milestone"
              },
              y.id
            ))
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              minWidth: pe,
              height: I ? v : void 0,
              position: "relative"
            },
            children: [
              (I ? d : e.map((y, u) => ({ index: u, start: u * Ye, size: Ye, key: u }))).map((y) => {
                const u = e[y.index];
                if (!u) return null;
                const E = u.type === "GROUP", F = E && r.some((D) => D.parentId === u.id), q = n.has(u.id), g = Ce(u) * 12, W = T === u.id, L = Z === u.id, z = V.has(u.id);
                return /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    draggable: !!(f || k),
                    onDragStart: (D) => dt(D, u.id),
                    onDragOver: (D) => Ke(D, u.id, E),
                    onDragLeave: Qe,
                    onDrop: (D) => Me(D, u.id),
                    onDragEnd: ut,
                    onClick: (D) => ht(D, u, y.index),
                    onContextMenu: (D) => ft(D, u),
                    className: `box-border flex items-center border-b transition-all duration-150 ${W ? "opacity-50 bg-blue-50" : L ? J === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : J === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : z ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : E ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                    style: {
                      height: Ye,
                      ...I ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${y.start}px)`
                      } : {}
                    },
                    onDoubleClick: () => !E && i(u),
                    title: E ? void 0 : "더블클릭하여 상세 공정표 보기",
                    children: [
                      f && /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ s.jsx(qt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? ee[0].width - 24 : ee[0].width, paddingLeft: g + 8 },
                          children: [
                            F ? /* @__PURE__ */ s.jsx(
                              "button",
                              {
                                onClick: (D) => {
                                  D.stopPropagation(), a(u.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: q ? /* @__PURE__ */ s.jsx(Vt, { size: 14 }) : /* @__PURE__ */ s.jsx(Bt, { size: 14 })
                              }
                            ) : /* @__PURE__ */ s.jsx("div", { className: "w-6 shrink-0" }),
                            x === u.id ? /* @__PURE__ */ s.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: j,
                                onChange: (D) => P(D.target.value),
                                onKeyDown: Fe,
                                onBlur: Le,
                                onClick: (D) => D.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${E ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (D) => {
                                  l && (D.stopPropagation(), we(u));
                                },
                                title: l ? "더블클릭하여 이름 편집" : void 0,
                                children: u.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: ee[1].width },
                          children: E ? "-" : u.cp ? `${u.cp.workDaysTotal + u.cp.nonWorkDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                          style: { width: ee[2].width },
                          children: E ? "-" : u.cp ? `${u.cp.workDaysTotal}일` : "-"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-teal",
                          style: { width: ee[3].width },
                          children: E ? "-" : u.cp ? `${u.cp.nonWorkDaysTotal}일` : "-"
                        }
                      )
                    ]
                  },
                  y.key
                );
              }),
              Y && /* @__PURE__ */ s.jsx(
                as,
                {
                  columns: ee,
                  tasks: e,
                  onTaskCreate: o,
                  onCancel: R || (() => {
                  }),
                  isVirtualized: I,
                  virtualRowIndex: e.length,
                  dragHandleWidth: lt
                }
              )
            ]
          }
        )
      ] }),
      B && /* @__PURE__ */ s.jsx(
        Kt,
        {
          x: B.x,
          y: B.y,
          taskId: B.taskId,
          selectedTaskIds: V,
          tasks: e,
          onTaskGroup: b,
          onTaskUngroup: m,
          onTaskDelete: p,
          onStartRename: mt,
          onClose: () => N(null),
          onDeselect: () => U(/* @__PURE__ */ new Set())
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: Ut },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ s.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
              yt()
            ] }),
            Ue()
          ]
        }
      ),
      ue !== null && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ s.jsxs("div", { ref: A, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Zt, minWidth: pe },
            children: ee.map((y, u) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: y.width },
                children: u === 0 && "Milestone"
              },
              y.id
            ))
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              minWidth: pe,
              height: I ? v : void 0,
              position: "relative"
            },
            children: [
              (I ? d : e.map((y, u) => ({ index: u, start: u * Ye, size: Ye, key: u }))).map((y) => {
                const u = e[y.index];
                if (!u) return null;
                const E = u.type === "GROUP", F = E && r.some((D) => D.parentId === u.id), q = n.has(u.id), g = xt(u) * 12, W = T === u.id, L = Z === u.id, z = V.has(u.id);
                return /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    draggable: !!(f || k),
                    onDragStart: (D) => dt(D, u.id),
                    onDragOver: (D) => Ke(D, u.id, E),
                    onDragLeave: Qe,
                    onDrop: (D) => Me(D, u.id),
                    onDragEnd: ut,
                    onClick: (D) => ht(D, u, y.index),
                    onDoubleClick: () => {
                      !E && u.type === "TASK" && H && H(u);
                    },
                    onContextMenu: (D) => ft(D, u),
                    className: `box-border flex items-center border-b transition-colors ${W ? "opacity-50 bg-blue-50" : L ? J === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : J === "into" ? "bg-blue-200 border-blue-400 border-2 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.6)]" : "border-b-2 border-b-blue-500" : z ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : E ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 hover:bg-gray-50 cursor-pointer"}`,
                    style: {
                      height: Ye,
                      ...I ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${y.start}px)`
                      } : {}
                    },
                    title: !E && u.type === "TASK" ? "더블클릭하여 공정 설정" : void 0,
                    children: [
                      f && /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ s.jsx(qt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? ee[0].width - 24 : ee[0].width, paddingLeft: g + 8 },
                          children: [
                            F ? /* @__PURE__ */ s.jsx(
                              "button",
                              {
                                onClick: (D) => {
                                  D.stopPropagation(), a(u.id);
                                },
                                className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                                children: q ? /* @__PURE__ */ s.jsx(Vt, { size: 14 }) : /* @__PURE__ */ s.jsx(Bt, { size: 14 })
                              }
                            ) : /* @__PURE__ */ s.jsx("div", { className: "w-6 shrink-0" }),
                            x === u.id ? /* @__PURE__ */ s.jsx(
                              "input",
                              {
                                ref: O,
                                type: "text",
                                value: j,
                                onChange: (D) => P(D.target.value),
                                onKeyDown: Fe,
                                onBlur: Le,
                                onClick: (D) => D.stopPropagation(),
                                className: "w-full rounded border border-blue-400 bg-white px-1 py-0.5 text-sm font-normal text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                              }
                            ) : /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `truncate text-sm ${E ? "font-normal text-gray-500 cursor-text" : "font-medium text-gray-800"}`,
                                onDoubleClick: (D) => {
                                  l && (D.stopPropagation(), we(u));
                                },
                                title: l ? "더블클릭하여 이름 편집" : void 0,
                                children: u.name
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: ee[1].width },
                          children: u.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: u.task.indirectWorkDaysPre,
                              onChange: (D) => {
                                const me = D.target.value.replace(/[^0-9]/g, ""), ge = parseInt(me) || 0;
                                ze(u, "indirectWorkDaysPre", ge);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: ee[2].width },
                          children: u.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: u.task.netWorkDays,
                              onChange: (D) => {
                                const me = D.target.value.replace(/[^0-9]/g, ""), ge = parseInt(me) || 0;
                                ze(u, "netWorkDays", ge);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
                              },
                              title: "순작업일"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: ee[3].width },
                          children: u.task ? /* @__PURE__ */ s.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: u.task.indirectWorkDaysPost,
                              onChange: (D) => {
                                const me = D.target.value.replace(/[^0-9]/g, ""), ge = parseInt(me) || 0;
                                ze(u, "indirectWorkDaysPost", ge);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: ee[4].width },
                          children: be(u.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: ee[5].width },
                          children: be(u.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  y.key
                );
              }),
              C && c && /* @__PURE__ */ s.jsx(
                ss,
                {
                  columns: ee,
                  tasks: e,
                  activeCPId: c,
                  onTaskCreate: o,
                  onCancel: _ || (() => {
                  }),
                  isVirtualized: I,
                  virtualRowIndex: e.length
                }
              )
            ]
          }
        )
      ] }),
      B && /* @__PURE__ */ s.jsx(
        Kt,
        {
          x: B.x,
          y: B.y,
          taskId: B.taskId,
          selectedTaskIds: V,
          tasks: e,
          onTaskGroup: b,
          onTaskUngroup: m,
          onTaskDelete: p,
          onStartRename: mt,
          onClose: () => N(null),
          onDeselect: () => U(/* @__PURE__ */ new Set())
        }
      )
    ] });
  }
);
kr.displayName = "GanttSidebar";
const Xe = (e, r = [], t) => !!(!t.workOnSaturdays && mr(e) || !t.workOnSundays && xr(e) || !t.workOnHolidays && r.some((n) => Or(n, e))), Vs = (e) => mr(e) || xr(e), is = (e, r, t = [], n) => {
  let a = new Date(e), i = 0;
  if (r <= 0) return a;
  for (; Xe(a, t, n); )
    a = K(a, 1);
  for (; i < r; )
    Xe(a, t, n) || i++, i < r && (a = K(a, 1));
  return a;
}, Bs = (e, r, t = [], n) => {
  let a = new Date(e), i = 0;
  if (r <= 0) return a;
  for (; i < r; )
    a = K(a, -1), Xe(a, t, n) || i++;
  return a;
}, rr = (e, r) => r <= 0 ? e : K(e, r - 1), qs = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: a, indirectWorkDaysPost: i } = e.task, l = st(new Date(e.startDate));
  let o = l, f, c;
  a > 0 && (f = o, c = rr(o, a), o = K(c, 1));
  let d = o, v = d;
  if (n > 0) {
    for (; Xe(d, r, t); )
      d = K(d, 1);
    v = is(d, n, r, t), o = K(v, 1);
  } else a === 0 && (d = l, v = l);
  let w, b;
  return i > 0 && (w = o, b = rr(o, i)), {
    startDate: f || d,
    endDate: b || v,
    netWorkStartDate: d,
    netWorkEndDate: v,
    indirectPreStartDate: f,
    indirectPreEndDate: c,
    indirectPostStartDate: w,
    indirectPostEndDate: b
  };
}, Ks = (e, r, t) => {
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
}, at = (e, r, t) => _t(e, r) * t, Qs = (e, r, t) => {
  const n = Math.round(e / t);
  return K(r, n);
}, Js = (e, r, t) => (_t(r, e) + 1) * t, Us = (e) => Dt[e].pixelsPerDay, jr = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((c) => [c.startDate, c.endDate].filter(Boolean)),
    ...r.map((c) => c.date)
  ];
  if (n.length === 0) {
    const c = /* @__PURE__ */ new Date();
    return {
      minDate: c,
      maxDate: K(c, 30),
      totalDays: 30
    };
  }
  const a = new Date(Math.min(...n.map((c) => c.getTime()))), i = new Date(Math.max(...n.map((c) => c.getTime()))), l = K(a, -t), o = K(i, t), f = _t(o, l);
  return {
    minDate: l,
    maxDate: o,
    totalDays: f
  };
}, { ROW_HEIGHT: ye, HEADER_HEIGHT: os, MILESTONE_LANE_HEIGHT: ve, BAR_HEIGHT: ae } = Ne, ls = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: a,
  calendarSettings: i
}) => {
  const l = Array.from({ length: r }, (w, b) => K(e, b)), o = r * t, f = De(() => {
    const w = [];
    let b = Wt(l[0]), m = 0;
    return l.forEach((p) => {
      Wt(p) !== b ? (w.push({ label: `${b}년`, days: m }), b = Wt(p), m = 1) : m++;
    }), w.push({ label: `${b}년`, days: m }), w;
  }, [l]), c = De(() => {
    const w = [];
    let b = l[0], m = 0;
    return l.forEach((p) => {
      Ln(p, b) ? m++ : (w.push({ label: be(b, "M월"), days: m }), b = p, m = 1);
    }), w.push({ label: be(b, "M월"), days: m }), w;
  }, [l]), d = De(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: l.map((w, b) => {
        const m = jt(w), p = Xe(w, a, i), k = m === 0, C = m === 6;
        let _ = "text-gray-600";
        k && (_ = "text-red-500"), C && (_ = "text-blue-500"), p && !k && !C && (_ = "text-red-500");
        let Y = "";
        return k || p && !C ? Y = "bg-red-50/50" : C && (Y = "bg-blue-50/50"), /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${Y}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ s.jsx("span", { className: `text-[10px] leading-none ${_}`, children: be(w, "d") }),
              /* @__PURE__ */ s.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${_}`, children: ["일", "월", "화", "수", "목", "금", "토"][m] })
            ]
          },
          b
        );
      }) });
    {
      const w = [];
      let b = l[0], m = 0;
      return l.forEach((p) => {
        zn(p, b, { weekStartsOn: 0 }) ? m++ : (w.push({ label: `${Gt(b, { weekStartsOn: 0 })}주`, days: m }), b = p, m = 1);
      }), w.push({ label: `${Gt(b, { weekStartsOn: 0 })}주`, days: m }), /* @__PURE__ */ s.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: w.map((p, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: p.days * t },
          children: p.label
        },
        k
      )) });
    }
  }, [l, n, t, a, i, o]), v = n === "MONTH";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: os, minWidth: o },
      children: v ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: o },
            children: f.map((w, b) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: w.days * t },
                children: w.label
              },
              b
            ))
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: c.map((w, b) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: w.days * t },
                children: w.label
              },
              b
            ))
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: o },
            children: f.map((w, b) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: w.days * t },
                children: w.label
              },
              b
            ))
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: c.map((w, b) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: w.days * t },
                children: w.label
              },
              b
            ))
          }
        ),
        d
      ] })
    }
  );
}, cs = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: a,
  calendarSettings: i,
  zoomLevel: l
}) => {
  const o = De(() => {
    if (l === "MONTH") return [];
    const f = [];
    for (let c = 0; c < r; c++) {
      const d = K(e, c), v = jt(d), w = v === 0, b = v === 6;
      if (Xe(d, a, i) || b) {
        const p = c * n;
        let k = "rgba(254, 242, 242, 0.5)";
        b && !w && (k = "rgba(239, 246, 255, 0.5)"), w && (k = "rgba(254, 242, 242, 0.5)"), f.push(
          /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: p,
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
  }, [e, r, t, n, a, i, l]);
  return /* @__PURE__ */ s.jsx("g", { children: o });
}, ds = (e, r, t) => {
  if (e.length === 0) return [];
  const n = 25, a = 12, i = 8, l = e.map((d) => ({
    milestone: d,
    x: at(d.date, r, t),
    labelLevel: 0,
    labelWidth: d.name.length * a + n
  })).sort((d, v) => d.x - v.x), o = [], f = [], c = [];
  for (const d of l) {
    const v = d.labelWidth, w = d.x - v, b = d.x - i;
    if (!f.some((p) => w < p + i))
      f.push(b), o.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: 0
      });
    else {
      const p = d.x + i, k = d.x + v;
      c.some(
        (_) => !(k < _.start || p > _.end)
      ) ? o.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: -1
      }) : (c.push({ start: p, end: k }), o.push({
        milestone: d.milestone,
        x: d.x,
        labelLevel: 1
      }));
    }
  }
  return o;
}, us = ({
  milestone: e,
  x: r,
  labelLevel: t = 0,
  isDragging: n = !1,
  dragX: a,
  onMouseDown: i,
  onDoubleClick: l
}) => {
  const f = ve / 2, c = n && a !== void 0 ? a : r;
  let d, v, w;
  t === 0 ? (d = -8, v = 4, w = "end") : t === 1 ? (d = 8, v = 4, w = "start") : (d = 0, v = 18, w = "middle");
  const b = (p) => {
    i && (p.preventDefault(), p.stopPropagation(), i(p, e));
  }, m = (p) => {
    l && (p.preventDefault(), p.stopPropagation(), l(e));
  };
  return /* @__PURE__ */ s.jsxs(
    "g",
    {
      transform: `translate(${c}, ${f})`,
      className: `group ${i ? "cursor-ew-resize" : "cursor-pointer"} ${n ? "cursor-ew-resize" : ""}`,
      onMouseDown: b,
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
            fill: n ? "#3B82F6" : Se.milestone,
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
            x: d,
            y: v,
            textAnchor: w,
            className: `select-none text-[11px] font-bold transition-colors ${n ? "fill-blue-700" : "fill-gray-600 group-hover:fill-blue-700"}`,
            children: e.name
          }
        )
      ]
    }
  );
}, hs = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: a,
  isDraggable: i = !1,
  dragInfo: l,
  onDragStart: o,
  onDoubleClick: f
}) => {
  var m, p;
  if (e.type === "GROUP") return null;
  const c = 4, d = !!l, v = (l == null ? void 0 : l.startDate) || e.startDate, w = (l == null ? void 0 : l.endDate) || e.endDate, b = at(v, t, n);
  if (a) {
    const k = ((m = e.cp) == null ? void 0 : m.workDaysTotal) || 0, C = ((p = e.cp) == null ? void 0 : p.nonWorkDaysTotal) || 0;
    if (k + C === 0) return null;
    const Y = k * n, R = C * n;
    return /* @__PURE__ */ s.jsxs("g", { transform: `translate(${b}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: Y,
          height: ae,
          fill: Se.vermilion,
          rx: c,
          ry: c,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: Y,
          y: 0,
          width: R,
          height: ae,
          fill: Se.teal,
          rx: c,
          ry: c,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
    const { netWorkDays: k, indirectWorkDaysPre: C, indirectWorkDaysPost: _, indirectWorkNamePre: Y, indirectWorkNamePost: R } = e.task, H = (l == null ? void 0 : l.indirectWorkDaysPre) ?? C, A = (l == null ? void 0 : l.indirectWorkDaysPost) ?? _, I = (l == null ? void 0 : l.netWorkDays) ?? k, T = H * n, S = I * n, Z = A * n, re = T + S + Z, J = 0, ie = T, V = T + S, U = 8, se = 6, ne = {
      startDate: v,
      endDate: w,
      indirectWorkDaysPre: H,
      netWorkDays: I,
      indirectWorkDaysPost: A
    };
    return /* @__PURE__ */ s.jsxs(
      "g",
      {
        transform: `translate(${b}, ${r})`,
        className: `group ${d ? "opacity-90" : ""} ${f ? "cursor-pointer" : ""}`,
        onDoubleClick: f,
        children: [
          H > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: J,
                y: 0,
                width: T,
                height: ae,
                fill: Se.blue,
                rx: c,
                ry: c,
                className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
                style: { pointerEvents: "none" }
              }
            ),
            Y && /* @__PURE__ */ s.jsx(
              "text",
              {
                x: J + T / 2,
                y: ae + 11,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-blue-600 font-medium",
                children: Y
              }
            )
          ] }),
          I > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: ie,
              y: 0,
              width: S,
              height: ae,
              fill: Se.red,
              rx: c,
              ry: c,
              className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: "none" }
            }
          ),
          A > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: V,
                y: 0,
                width: Z,
                height: ae,
                fill: Se.blue,
                rx: c,
                ry: c,
                className: `drop-shadow-sm transition-opacity ${d ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
                style: { pointerEvents: "none" }
              }
            ),
            R && /* @__PURE__ */ s.jsx(
              "text",
              {
                x: V + Z / 2,
                y: ae + 11,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-blue-600 font-medium",
                children: R
              }
            )
          ] }),
          i && I > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: ie + se,
              y: 0,
              width: Math.max(0, S - se * 2),
              height: ae,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (B) => o == null ? void 0 : o(B, e.id, "move", ne),
              children: /* @__PURE__ */ s.jsx("title", { children: "전체 이동 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: -U / 2,
              y: 0,
              width: U,
              height: ae,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (B) => o == null ? void 0 : o(B, e.id, "resize-pre", ne),
              children: /* @__PURE__ */ s.jsxs("title", { children: [
                H > 0 ? "앞 간접작업일 조절" : "순작업일 조절",
                " (드래그)"
              ] })
            }
          ),
          i && H > 0 && I > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: T - se / 2,
              y: 0,
              width: se,
              height: ae,
              fill: "transparent",
              className: "cursor-col-resize",
              onMouseDown: (B) => o == null ? void 0 : o(B, e.id, "resize-pre-net", ne),
              children: /* @__PURE__ */ s.jsx("title", { children: "앞간접-순작업 경계 조절 (드래그)" })
            }
          ),
          i && A > 0 && I > 0 && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: V - se / 2,
              y: 0,
              width: se,
              height: ae,
              fill: "transparent",
              className: "cursor-col-resize",
              onMouseDown: (B) => o == null ? void 0 : o(B, e.id, "resize-net-post", ne),
              children: /* @__PURE__ */ s.jsx("title", { children: "순작업-뒤간접 경계 조절 (드래그)" })
            }
          ),
          i && /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: re - U / 2,
              y: 0,
              width: U,
              height: ae,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (B) => o == null ? void 0 : o(B, e.id, "resize-post", ne),
              children: /* @__PURE__ */ s.jsxs("title", { children: [
                A > 0 ? "뒤 간접작업일 조절" : "순작업일 조절",
                " (드래그)"
              ] })
            }
          ),
          i && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
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
            /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: re - 4,
                y: ae / 2 - 6,
                width: 3,
                height: 12,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
              }
            ),
            H > 0 && I > 0 && /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: T - 1.5,
                y: ae / 2 - 4,
                width: 3,
                height: 8,
                rx: 1,
                fill: "white",
                className: "pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity"
              }
            ),
            A > 0 && I > 0 && /* @__PURE__ */ s.jsx(
              "rect",
              {
                x: V - 1.5,
                y: ae / 2 - 4,
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
              y: ae / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          d && /* @__PURE__ */ s.jsxs("g", { children: [
            /* @__PURE__ */ s.jsxs(
              "text",
              {
                x: re / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  be(v, "MM/dd"),
                  " ~ ",
                  be(w, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "text",
              {
                x: re / 2,
                y: ae + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  H,
                  "일 + 순",
                  I,
                  "일 + 뒤",
                  A,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, fs = () => /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx(
  "marker",
  {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto",
    children: /* @__PURE__ */ s.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: Se.dependency })
  }
) }), Nr = kt(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: a, calendarSettings: i, onBarDrag: l, onMilestoneUpdate: o, onMilestoneDoubleClick: f, onTaskDoubleClick: c, virtualRows: d, totalHeight: v }, w) => {
    const b = Dt[n].pixelsPerDay, m = t === "MASTER", p = d && d.length > 0, [k, C] = $(null), [_, Y] = $(null), R = fe(null);
    ce(() => {
      R.current = _;
    }, [_]);
    const { minDate: H, totalDays: A } = De(() => jr(e, r, 60), [e, r]), I = De(() => ds(r, H, b), [r, H, b]), T = A * b, S = Math.max(p ? (v || 0) + ve + 100 : e.length * ye + ve + 100, 500), Z = fe(null);
    ce(() => {
      Z.current = k;
    }, [k]);
    const re = M((N, x) => {
      if (!o) return;
      N.preventDefault(), N.stopPropagation();
      const h = at(x.date, H, b), j = {
        milestoneId: x.id,
        startX: N.clientX,
        originalDate: x.date,
        currentX: h
      };
      Y(j);
    }, [o, H, b]), J = M((N) => {
      const x = R.current;
      if (!x) return;
      const h = N.clientX - x.startX, j = at(x.originalDate, H, b), P = Math.max(0, j + h);
      Y((O) => O ? { ...O, currentX: P } : null);
    }, [H, b]), ie = M((N) => {
      const x = R.current;
      if (!x || !o) {
        Y(null);
        return;
      }
      const h = N.clientX - x.startX, j = Math.round(h / b);
      if (j !== 0) {
        const P = K(x.originalDate, j), O = r.find((te) => te.id === x.milestoneId);
        O && o({
          ...O,
          date: P
        });
      }
      Y(null);
    }, [o, b, r]);
    ce(() => {
      if (_)
        return window.addEventListener("mousemove", J), window.addEventListener("mouseup", ie), () => {
          window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", ie);
        };
    }, [_, J, ie]);
    const V = M((N) => {
      f && f(N);
    }, [f]), U = M((N, x, h, j) => {
      if (!l) return;
      N.preventDefault(), N.stopPropagation();
      const P = {
        taskId: x,
        dragType: h,
        startX: N.clientX,
        originalStartDate: j.startDate,
        originalEndDate: j.endDate,
        originalIndirectWorkDaysPre: j.indirectWorkDaysPre,
        originalNetWorkDays: j.netWorkDays,
        originalIndirectWorkDaysPost: j.indirectWorkDaysPost,
        currentStartDate: j.startDate,
        currentEndDate: j.endDate,
        currentIndirectWorkDaysPre: j.indirectWorkDaysPre,
        currentNetWorkDays: j.netWorkDays,
        currentIndirectWorkDaysPost: j.indirectWorkDaysPost
      };
      C(P), Z.current = P;
    }, [l]), se = M((N) => {
      const x = Z.current;
      if (!x || !l) return;
      const h = N.clientX - x.startX, j = Math.round(h / b);
      let P = x.originalStartDate, O = x.originalEndDate, te = x.originalIndirectWorkDaysPre, de = x.originalNetWorkDays, G = x.originalIndirectWorkDaysPost;
      if (x.dragType === "move")
        P = K(x.originalStartDate, j), O = K(x.originalEndDate, j);
      else if (x.dragType === "move-net") {
        const Q = x.originalIndirectWorkDaysPost, ue = x.originalIndirectWorkDaysPre, he = Math.max(-ue, Math.min(Q, j));
        te = x.originalIndirectWorkDaysPre + he, G = x.originalIndirectWorkDaysPost - he, P = x.originalStartDate, O = x.originalEndDate;
      } else if (x.dragType === "resize-pre")
        if (x.originalIndirectWorkDaysPre > 0) {
          te = Math.max(0, x.originalIndirectWorkDaysPre - j);
          const Q = K(x.originalStartDate, x.originalIndirectWorkDaysPre);
          P = K(Q, -te), O = x.originalEndDate;
        } else {
          de = Math.max(1, x.originalNetWorkDays - j);
          const Q = K(
            x.originalStartDate,
            x.originalNetWorkDays - 1
          );
          P = K(Q, -(de - 1)), O = x.originalEndDate;
        }
      else if (x.dragType === "resize-post")
        if (x.originalIndirectWorkDaysPost > 0) {
          G = Math.max(0, x.originalIndirectWorkDaysPost + j);
          const Q = K(x.originalEndDate, -x.originalIndirectWorkDaysPost);
          O = K(Q, G), P = x.originalStartDate;
        } else
          de = Math.max(1, x.originalNetWorkDays + j), O = K(x.originalStartDate, de - 1), P = x.originalStartDate;
      else if (x.dragType === "resize-pre-net") {
        const Q = x.originalNetWorkDays - 1, ue = x.originalIndirectWorkDaysPre, he = Math.max(-ue, Math.min(Q, j));
        te = x.originalIndirectWorkDaysPre + he, de = x.originalNetWorkDays - he, P = x.originalStartDate, O = x.originalEndDate;
      } else if (x.dragType === "resize-net-post") {
        const Q = x.originalIndirectWorkDaysPost, ue = x.originalNetWorkDays - 1, he = Math.max(-ue, Math.min(Q, j));
        de = x.originalNetWorkDays + he, G = x.originalIndirectWorkDaysPost - he, P = x.originalStartDate, O = x.originalEndDate;
      }
      C((Q) => Q ? {
        ...Q,
        currentStartDate: P,
        currentEndDate: O,
        currentIndirectWorkDaysPre: te,
        currentNetWorkDays: de,
        currentIndirectWorkDaysPost: G
      } : null);
    }, [l, b]), ne = M(() => {
      const N = Z.current;
      if (!N || !l) {
        C(null), Z.current = null;
        return;
      }
      const x = N.currentStartDate.getTime() !== N.originalStartDate.getTime() || N.currentEndDate.getTime() !== N.originalEndDate.getTime(), h = N.currentIndirectWorkDaysPre !== N.originalIndirectWorkDaysPre || N.currentNetWorkDays !== N.originalNetWorkDays || N.currentIndirectWorkDaysPost !== N.originalIndirectWorkDaysPost;
      (x || h) && l({
        taskId: N.taskId,
        dragType: N.dragType,
        newStartDate: N.currentStartDate,
        newEndDate: N.currentEndDate,
        newIndirectWorkDaysPre: N.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: N.currentIndirectWorkDaysPost,
        newNetWorkDays: N.currentNetWorkDays
      }), C(null), Z.current = null;
    }, [l]);
    ce(() => {
      if (k) {
        window.addEventListener("mousemove", se), window.addEventListener("mouseup", ne);
        let N = "ew-resize";
        return k.dragType === "move" || k.dragType === "move-net" ? N = "grabbing" : (k.dragType === "resize-pre-net" || k.dragType === "resize-net-post") && (N = "col-resize"), document.body.style.cursor = N, document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", ne), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
      }
    }, [k, se, ne]);
    const B = M((N) => k && k.taskId === N ? {
      startDate: k.currentStartDate,
      endDate: k.currentEndDate,
      indirectWorkDaysPre: k.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: k.currentIndirectWorkDaysPost,
      netWorkDays: k.currentNetWorkDays
    } : null, [k]);
    return /* @__PURE__ */ s.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ s.jsxs("div", { ref: w, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ s.jsx(
        ls,
        {
          minDate: H,
          totalDays: A,
          pixelsPerDay: b,
          zoomLevel: n,
          holidays: a,
          calendarSettings: i
        }
      ),
      /* @__PURE__ */ s.jsxs("svg", { width: T, height: S, className: "block bg-white", children: [
        /* @__PURE__ */ s.jsx(fs, {}),
        /* @__PURE__ */ s.jsx(
          cs,
          {
            minDate: H,
            totalDays: A,
            chartHeight: S,
            pixelsPerDay: b,
            holidays: a,
            calendarSettings: i,
            zoomLevel: n
          }
        ),
        (p ? d : e.map((N, x) => ({ index: x, start: x * ye, size: ye, key: x }))).map((N) => {
          const x = e[N.index];
          if (!x || x.type !== "GROUP") return null;
          const h = N.start + ve;
          return /* @__PURE__ */ s.jsx(
            "rect",
            {
              x: 0,
              y: h,
              width: T,
              height: ye,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${N.key}`
          );
        }),
        Array.from({ length: A }, (N, x) => {
          const h = (x + 1) * b, j = K(H, x), P = jt(j);
          let O = !1, te = "#f0f0f0";
          return n === "DAY" ? (O = !0, te = P === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (O = P === 0, te = "#e5e7eb") : n === "MONTH" && (O = P === 0, te = "#f0f0f0"), O ? /* @__PURE__ */ s.jsx(
            "line",
            {
              x1: h,
              y1: 0,
              x2: h,
              y2: S,
              stroke: te,
              strokeWidth: 1
            },
            `vline-${x}`
          ) : null;
        }),
        (p ? d : e.map((N, x) => ({ index: x, start: x * ye, size: ye, key: x }))).map((N) => /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: 0,
            y1: N.start + ye + ve,
            x2: T,
            y2: N.start + ye + ve,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${N.key}`
        )),
        /* @__PURE__ */ s.jsx("rect", { x: 0, y: 0, width: T, height: ve, fill: "transparent" }),
        I.map((N) => {
          const x = (_ == null ? void 0 : _.milestoneId) === N.milestone.id;
          return /* @__PURE__ */ s.jsx(
            us,
            {
              milestone: N.milestone,
              x: N.x,
              labelLevel: N.labelLevel,
              isDragging: x,
              dragX: x ? _ == null ? void 0 : _.currentX : void 0,
              onMouseDown: o ? re : void 0,
              onDoubleClick: f ? V : void 0
            },
            N.milestone.id
          );
        }),
        /* @__PURE__ */ s.jsx(
          "line",
          {
            x1: 0,
            y1: ve,
            x2: T,
            y2: ve,
            stroke: Se.grid,
            strokeWidth: 1
          }
        ),
        (p ? d : e.map((N, x) => ({ index: x, start: x * ye, size: ye, key: x }))).map((N) => {
          const x = e[N.index];
          if (!x) return null;
          const h = N.start + (ye - ae) / 2 + ve;
          return /* @__PURE__ */ s.jsx(
            hs,
            {
              task: x,
              y: h,
              minDate: H,
              pixelsPerDay: b,
              isMasterView: m,
              isDraggable: !m && !!l,
              dragInfo: B(x.id),
              onDragStart: U,
              onDoubleClick: !m && x.type === "TASK" && c ? () => c(x) : void 0
            },
            N.key
          );
        })
      ] })
    ] }) });
  }
);
Nr.displayName = "GanttTimeline";
const ms = ({ milestoneName: e, onConfirm: r, onCancel: t }) => Ot.createPortal(
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
), xs = ({
  milestone: e,
  isOpen: r,
  isNew: t = !1,
  onClose: n,
  onSave: a,
  onDelete: i
}) => {
  const [l, o] = $(""), [f, c] = $(""), [d, v] = $(""), [w, b] = $(!1), m = fe(null);
  ce(() => {
    e && r && (o(e.name), c(e.description || ""), v(be(e.date, "yyyy-MM-dd")), b(!1), setTimeout(() => {
      var R, H;
      (R = m.current) == null || R.focus(), (H = m.current) == null || H.select();
    }, 100));
  }, [e, r]), ce(() => {
    const R = (H) => {
      H.key === "Escape" && r && (w ? b(!1) : n());
    };
    return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [r, w, n]);
  const p = () => {
    if (!e || !l.trim()) return;
    const R = {
      ...e,
      name: l.trim(),
      description: f.trim() || void 0,
      date: new Date(d)
    };
    a(R), n();
  }, k = () => {
    b(!0);
  }, C = () => {
    e && i && i(e.id), b(!1);
  }, _ = () => {
    b(!1);
  }, Y = (R) => {
    R.key === "Enter" && !R.shiftKey && (R.preventDefault(), p());
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
        onClick: (R) => R.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: t ? "새 마일스톤" : "마일스톤 설정" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: n,
                className: "rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ s.jsx(Nt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-4 p-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(Ct, { size: 14 }),
                "마일스톤 이름"
              ] }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  ref: m,
                  type: "text",
                  value: l,
                  onChange: (R) => o(R.target.value),
                  onKeyDown: Y,
                  placeholder: "마일스톤 이름을 입력하세요",
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(Vn, { size: 14 }),
                "날짜"
              ] }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "date",
                  value: d,
                  onChange: (R) => v(R.target.value),
                  onKeyDown: Y,
                  className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700", children: [
                /* @__PURE__ */ s.jsx(Un, { size: 14 }),
                "설명 (선택)"
              ] }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  value: f,
                  onChange: (R) => c(R.target.value),
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
                  /* @__PURE__ */ s.jsx(Dr, { size: 16 }),
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
                  onClick: p,
                  disabled: !l.trim(),
                  className: "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                  children: "저장"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    w && /* @__PURE__ */ s.jsx(
      ms,
      {
        milestoneName: l || e.name,
        onConfirm: C,
        onCancel: _
      }
    )
  ] });
}, gs = ({ taskName: e, onConfirm: r, onCancel: t }) => Ot.createPortal(
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
), ys = ({
  task: e,
  isOpen: r,
  onClose: t,
  onSave: n,
  onDelete: a
}) => {
  const [i, l] = $(0), [o, f] = $(1), [c, d] = $(0), [v, w] = $(""), [b, m] = $(""), [p, k] = $(!1), C = fe(null);
  ce(() => {
    e && e.task && r && (l(e.task.indirectWorkDaysPre), f(e.task.netWorkDays), d(e.task.indirectWorkDaysPost), w(e.task.indirectWorkNamePre || ""), m(e.task.indirectWorkNamePost || ""), k(!1), setTimeout(() => {
      var S;
      (S = C.current) == null || S.focus();
    }, 100));
  }, [e, r]), ce(() => {
    const S = (Z) => {
      Z.key === "Escape" && r && (p ? k(!1) : t());
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [r, p, t]);
  const _ = () => {
    if (!e || !e.task) return;
    const S = {
      ...e,
      task: {
        ...e.task,
        indirectWorkDaysPre: i,
        netWorkDays: o,
        indirectWorkDaysPost: c,
        indirectWorkNamePre: v.trim() || void 0,
        indirectWorkNamePost: b.trim() || void 0
      }
    };
    n(S), t();
  }, Y = () => {
    k(!0);
  }, R = () => {
    e && a && a(e.id), k(!1), t();
  }, H = () => {
    k(!1);
  }, A = (S) => {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), _());
  }, I = (S, Z, re = 0) => {
    const J = parseInt(Z.replace(/[^0-9]/g, "")) || 0;
    S(Math.max(re, J));
  };
  if (!r || !e || !e.task) return null;
  const T = i + o + c;
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
        onClick: (S) => S.stopPropagation(),
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
                children: /* @__PURE__ */ s.jsx(Nt, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-5 p-4", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700", children: [
                /* @__PURE__ */ s.jsx(St, { size: 14 }),
                "앞 간접작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: C,
                      type: "text",
                      inputMode: "numeric",
                      value: i,
                      onChange: (S) => I(l, S.target.value),
                      onKeyDown: A,
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsxs("label", { className: "mb-1 flex items-center gap-1 text-xs font-medium text-gray-600", children: [
                    /* @__PURE__ */ s.jsx(Ct, { size: 12 }),
                    "작업명"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (S) => w(S.target.value),
                      onKeyDown: A,
                      placeholder: "예: 양생, 대기",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-red-700", children: [
                /* @__PURE__ */ s.jsx(St, { size: 14 }),
                "순작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    inputMode: "numeric",
                    value: o,
                    onChange: (S) => I(f, S.target.value, 0),
                    onKeyDown: A,
                    className: "w-full max-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "rounded-lg border border-blue-200 bg-blue-50/50 p-4", children: [
              /* @__PURE__ */ s.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-blue-700", children: [
                /* @__PURE__ */ s.jsx(St, { size: 14 }),
                "뒤 간접작업"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-gray-600", children: "일수" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      value: c,
                      onChange: (S) => I(d, S.target.value),
                      onKeyDown: A,
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsxs("label", { className: "mb-1 flex items-center gap-1 text-xs font-medium text-gray-600", children: [
                    /* @__PURE__ */ s.jsx(Ct, { size: 12 }),
                    "작업명"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      value: b,
                      onChange: (S) => m(S.target.value),
                      onKeyDown: A,
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
                T,
                "일"
              ] }),
              /* @__PURE__ */ s.jsxs("span", { className: "ml-2 text-xs text-gray-500", children: [
                "(앞",
                i,
                " + 순",
                o,
                " + 뒤",
                c,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between border-t border-gray-200 px-4 py-3", children: [
            /* @__PURE__ */ s.jsx("div", { children: a && /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: Y,
                className: "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
                children: [
                  /* @__PURE__ */ s.jsx(Dr, { size: 16 }),
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
                  onClick: _,
                  className: "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors",
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
        taskName: e.name,
        onConfirm: R,
        onCancel: H
      }
    )
  ] });
}, nr = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (c, d) => {
    const v = typeof c == "function" ? c(r) : c;
    if (!Object.is(v, r)) {
      const w = r;
      r = d ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), t.forEach((b) => b(r, w));
    }
  }, a = () => r, o = { setState: n, getState: a, getInitialState: () => f, subscribe: (c) => (t.add(c), () => t.delete(c)) }, f = r = e(n, a, o);
  return o;
}, bs = (e) => e ? nr(e) : nr, ps = (e) => e;
function ws(e, r = ps) {
  const t = Pe.useSyncExternalStore(
    e.subscribe,
    Pe.useCallback(() => r(e.getState()), [e, r]),
    Pe.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return Pe.useDebugValue(t), t;
}
const sr = (e) => {
  const r = bs(e), t = (n) => ws(r, n);
  return Object.assign(t, r), t;
}, vs = (e) => e ? sr(e) : sr, ar = (e) => Symbol.iterator in e, ir = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), or = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [a, i] of t)
    if (!n.has(a) || !Object.is(i, n.get(a)))
      return !1;
  return !0;
}, Ds = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let a = t.next(), i = n.next();
  for (; !a.done && !i.done; ) {
    if (!Object.is(a.value, i.value))
      return !1;
    a = t.next(), i = n.next();
  }
  return !!a.done && !!i.done;
};
function ks(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : ar(e) && ar(r) ? ir(e) && ir(r) ? or(e, r) : Ds(e, r) : or(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function Ve(e) {
  const r = Pe.useRef(void 0);
  return (t) => {
    const n = e(t);
    return ks(r.current, n) ? r.current : r.current = n;
  };
}
const Be = vs((e, r) => ({
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
})), js = () => Be(
  Ve((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), Ns = () => Be(
  Ve((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), Zs = () => Be(
  Ve((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), Es = () => Be(
  Ve((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Ms = () => Be(
  Ve((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), ea = () => Be(
  Ve((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function Ge(e, r, t) {
  let n = t.initialDeps ?? [], a;
  function i() {
    var l, o, f, c;
    let d;
    t.key && ((l = t.debug) != null && l.call(t)) && (d = Date.now());
    const v = e();
    if (!(v.length !== n.length || v.some((m, p) => n[p] !== m)))
      return a;
    n = v;
    let b;
    if (t.key && ((o = t.debug) != null && o.call(t)) && (b = Date.now()), a = r(...v), t.key && ((f = t.debug) != null && f.call(t))) {
      const m = Math.round((Date.now() - d) * 100) / 100, p = Math.round((Date.now() - b) * 100) / 100, k = p / 16, C = (_, Y) => {
        for (_ = String(_); _.length < Y; )
          _ = " " + _;
        return _;
      };
      console.info(
        `%c⏱ ${C(p, 5)} /${C(m, 5)} ms`,
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
  return i.updateDeps = (l) => {
    n = l;
  }, i;
}
function lr(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Ws = (e, r) => Math.abs(e - r) < 1.01, Ss = (e, r, t) => {
  let n;
  return function(...a) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, a), t);
  };
}, cr = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Ps = (e) => e, Ts = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let a = r; a <= t; a++)
    n.push(a);
  return n;
}, Cs = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const a = (l) => {
    const { width: o, height: f } = l;
    r({ width: Math.round(o), height: Math.round(f) });
  };
  if (a(cr(t)), !n.ResizeObserver)
    return () => {
    };
  const i = new n.ResizeObserver((l) => {
    const o = () => {
      const f = l[0];
      if (f != null && f.borderBoxSize) {
        const c = f.borderBoxSize[0];
        if (c) {
          a({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      a(cr(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return i.observe(t, { box: "border-box" }), () => {
    i.unobserve(t);
  };
}, dr = {
  passive: !0
}, ur = typeof window > "u" ? !0 : "onscrollend" in window, Os = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let a = 0;
  const i = e.options.useScrollendEvent && ur ? () => {
  } : Ss(
    n,
    () => {
      r(a, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (d) => () => {
    const { horizontal: v, isRtl: w } = e.options;
    a = v ? t.scrollLeft * (w && -1 || 1) : t.scrollTop, i(), r(a, d);
  }, o = l(!0), f = l(!1);
  f(), t.addEventListener("scroll", o, dr);
  const c = e.options.useScrollendEvent && ur;
  return c && t.addEventListener("scrollend", f, dr), () => {
    t.removeEventListener("scroll", o), c && t.removeEventListener("scrollend", f);
  };
}, _s = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Is = (e, {
  adjustments: r = 0,
  behavior: t
}, n) => {
  var a, i;
  const l = e + r;
  (i = (a = n.scrollElement) == null ? void 0 : a.scrollTo) == null || i.call(a, {
    [n.options.horizontal ? "left" : "top"]: l,
    behavior: t
  });
};
class Rs {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((a) => {
        a.forEach((i) => {
          const l = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
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
        getItemKey: Ps,
        rangeExtractor: Ts,
        onChange: () => {
        },
        measureElement: _s,
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
    }, this.maybeNotify = Ge(
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
      for (let l = n - 1; l >= 0; l--) {
        const o = t[l];
        if (a.has(o.lane))
          continue;
        const f = i.get(
          o.lane
        );
        if (f == null || o.end > f.end ? i.set(o.lane, o) : o.end < f.end && a.set(o.lane, !0), a.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((l, o) => l.end === o.end ? l.index - o.index : l.end - o.end)[0] : void 0;
    }, this.getMeasurementOptions = Ge(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, a, i, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: a,
        getItemKey: i,
        enabled: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ge(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: a, getItemKey: i, enabled: l }, o) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const f = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, f);
        for (let d = f; d < t; d++) {
          const v = i(d), w = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), b = w ? w.end + this.options.gap : n + a, m = o.get(v), p = typeof m == "number" ? m : this.options.estimateSize(d), k = b + p, C = w ? w.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: b,
            size: p,
            end: k,
            key: v,
            lane: C
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ge(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, a, i) => this.range = t.length > 0 && n > 0 ? As({
        measurements: t,
        outerSize: n,
        scrollOffset: a,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ge(
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
      (t, n, a, i, l) => i === null || l === null ? [] : t({
        startIndex: i,
        endIndex: l,
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
      const l = i.key, o = this.elementsCache.get(l);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(l, t)), t.isConnected && this.resizeItem(a, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const a = this.measurementsCache[t];
      if (!a)
        return;
      const i = this.itemSizeCache.get(a.key) ?? a.size, l = n - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(a, l, this) : a.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
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
    }, this.getVirtualItems = Ge(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const a = [];
        for (let i = 0, l = t.length; i < l; i++) {
          const o = t[i], f = n[o];
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
        return lr(
          n[Er(
            0,
            n.length - 1,
            (a) => lr(n[a]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, a = 0) => {
      const i = this.getSize(), l = this.getScrollOffset();
      n === "auto" && (n = t >= l + i ? "end" : "start"), n === "center" ? t += (a - i) / 2 : n === "end" && (t -= i);
      const o = this.getTotalSize() + this.options.scrollMargin - i;
      return Math.max(Math.min(o, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const a = this.measurementsCache[t];
      if (!a)
        return;
      const i = this.getSize(), l = this.getScrollOffset();
      if (n === "auto")
        if (a.end >= l + i - this.options.scrollPaddingEnd)
          n = "end";
        else if (a.start <= l + this.options.scrollPaddingStart)
          n = "start";
        else
          return [l, n];
      const o = n === "end" ? a.end + this.options.scrollPaddingEnd : a.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, n, a.size),
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
      const l = 10, o = (c) => {
        if (!this.targetWindow) return;
        const d = this.getOffsetForIndex(t, c);
        if (!d) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [v, w] = d;
        this._scrollToOffset(v, { adjustments: void 0, behavior: a }), this.targetWindow.requestAnimationFrame(() => {
          const b = this.getScrollOffset(), m = this.getOffsetForIndex(t, w);
          if (!m) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Ws(m[0], b) || f(w);
        });
      }, f = (c) => {
        this.targetWindow && (i++, i < l ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", i, l), this.targetWindow.requestAnimationFrame(() => o(c))) : console.warn(
          `Failed to scroll to index ${t} after ${l} attempts.`
        ));
      };
      o(n);
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
        let l = n.length - 1;
        for (; l >= 0 && i.some((o) => o === null); ) {
          const o = n[l];
          i[o.lane] === null && (i[o.lane] = o.end), l--;
        }
        a = Math.max(...i.filter((o) => o !== null));
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
const Er = (e, r, t, n) => {
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
function As({
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
  let l = Er(
    0,
    a,
    i,
    t
  ), o = l;
  if (n === 1)
    for (; o < a && e[o].end < t + r; )
      o++;
  else if (n > 1) {
    const f = Array(n).fill(0);
    for (; o < a && f.some((d) => d < t + r); ) {
      const d = e[o];
      f[d.lane] = d.end, o++;
    }
    const c = Array(n).fill(t + r);
    for (; l >= 0 && c.some((d) => d >= t); ) {
      const d = e[l];
      c[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % n), o = Math.min(a, o + (n - 1 - o % n));
  }
  return { startIndex: l, endIndex: o };
}
const hr = typeof document < "u" ? wt.useLayoutEffect : wt.useEffect;
function zs(e) {
  const r = wt.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (a, i) => {
      var l;
      i ? Mr(r) : r(), (l = e.onChange) == null || l.call(e, a, i);
    }
  }, [n] = wt.useState(
    () => new Rs(t)
  );
  return n.setOptions(t), hr(() => n._didMount(), []), hr(() => n._willUpdate()), n;
}
function Ls(e) {
  return zs({
    observeElementRect: Cs,
    observeElementOffset: Os,
    scrollToFn: Is,
    ...e
  });
}
const { ROW_HEIGHT: Fs } = Ne;
function Hs({
  containerRef: e,
  count: r,
  rowHeight: t = Fs,
  overscan: n = 5
}) {
  const a = Ls({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  }), i = a.getVirtualItems();
  return {
    /** 가상화된 행 목록 */
    virtualRows: De(() => i.map((o) => ({
      index: o.index,
      start: o.start,
      size: o.size,
      key: o.index
      // index는 항상 number이므로 타입 안전
    })), [i]),
    /** 전체 높이 (스크롤 영역) */
    totalHeight: a.getTotalSize(),
    /** 원본 virtualizer 인스턴스 */
    virtualizer: a
  };
}
const $s = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function ta({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = $s,
  initialView: a = "MASTER",
  initialZoomLevel: i = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: l,
  onTaskUpdate: o,
  onTaskCreate: f,
  onTaskDelete: c,
  onTaskReorder: d,
  onTaskGroup: v,
  onTaskUngroup: w,
  onTaskMove: b,
  onViewChange: m,
  onMilestoneCreate: p,
  onMilestoneUpdate: k,
  onMilestoneDelete: C,
  onSave: _,
  onReset: Y,
  hasUnsavedChanges: R,
  saveStatus: H,
  className: A,
  style: I
}) {
  const { viewMode: T, activeCPId: S, zoomLevel: Z } = js(), { setViewMode: re, setZoomLevel: J } = Ns(), { sidebarWidth: ie, setSidebarWidth: V } = Ms(), { expandedTaskIds: U, toggleTask: se, expandAll: ne, collapseAll: B } = Es(), N = fe(null), x = fe(null), h = fe(null), j = fe(!1), P = fe(!1), [O, te] = $(!1), [de, G] = $(!1), [Q, ue] = $(!1), he = M(() => {
    G(!0);
  }, []), Ie = M(() => {
    G(!1);
  }, []), je = M(() => {
    ue(!0);
  }, []), Re = M(() => {
    ue(!1);
  }, []), [Ae, ee] = $(null), [lt, pe] = $(!1), [qe, Te] = $(!1), ct = M((g) => {
    ee(g), Te(!1), pe(!0);
  }, []), [Et, ze] = $(null), [dt, Ke] = $(!1), Qe = M((g) => {
    ze(g), Ke(!0);
  }, []), Me = M(() => {
    Ke(!1), ze(null);
  }, []), ut = M((g) => {
    o && o(g), Me();
  }, [o, Me]), ht = M((g) => {
    c && c(g), Me();
  }, [c, Me]), ft = M(() => {
    const g = {
      id: `milestone-${Date.now()}`,
      name: "",
      date: /* @__PURE__ */ new Date(),
      description: ""
    };
    ee(g), Te(!0), pe(!0);
  }, []), we = M(() => {
    pe(!1), ee(null), Te(!1);
  }, []), mt = M((g) => {
    qe && p ? p(g) : k && k(g), we();
  }, [qe, p, k, we]), Le = M((g) => {
    C && C(g), we();
  }, [C, we]), Je = fe(!1), Fe = De(() => e.map((g) => g.id), [e]);
  ce(() => {
    Je.current || (Je.current = !0, re(a), J(i), B(), l && l.length > 0 ? ne(l) : Fe.length > 0 && ne(Fe));
  }, [Fe, l, a, i, re, J, ne, B]);
  const xt = fe(/* @__PURE__ */ new Set());
  ce(() => {
    const g = new Set(e.map((z) => z.id)), W = xt.current, L = [];
    e.forEach((z) => {
      z.type === "GROUP" && !W.has(z.id) && L.push(z.id);
    }), L.length > 0 && ne(L), xt.current = g;
  }, [e, ne]);
  const Ce = De(() => {
    if (T === "MASTER") {
      const g = [], W = (L, z = 0) => {
        e.forEach((D) => {
          D.wbsLevel === 1 && D.parentId === L && (L === null || U.has(L)) && (g.push(D), D.type === "GROUP" && W(D.id, z + 1));
        });
      };
      return W(null), g;
    } else {
      const g = [], W = (L) => {
        e.forEach((z) => {
          z.wbsLevel === 2 && z.parentId === L && (L === S || U.has(L)) && (g.push(z), z.type === "GROUP" && W(z.id));
        });
      };
      return W(S), g;
    }
  }, [e, T, S, U]), { virtualRows: Ue, totalHeight: He } = Hs({
    containerRef: h,
    count: Ce.length
  });
  ce(() => {
    const g = x.current, W = h.current;
    if (!g || !W) return;
    const L = () => {
      j.current || (j.current = !0, W.scrollTop = g.scrollTop, requestAnimationFrame(() => {
        j.current = !1;
      }));
    }, z = () => {
      j.current || (j.current = !0, g.scrollTop = W.scrollTop, requestAnimationFrame(() => {
        j.current = !1;
      }));
    };
    return g.addEventListener("scroll", L), W.addEventListener("scroll", z), () => {
      g.removeEventListener("scroll", L), W.removeEventListener("scroll", z);
    };
  }, []);
  const [Ze, gt] = $(null), yt = M((g) => {
    if (g.detail >= 2) return;
    g.preventDefault(), P.current = !0, te(!0);
    const W = g.clientX, L = ie, z = (me) => {
      if (!P.current) return;
      const ge = me.clientX - W;
      V(L + ge);
    }, D = () => {
      P.current = !1, te(!1), document.removeEventListener("mousemove", z), document.removeEventListener("mouseup", D);
    };
    document.addEventListener("mousemove", z), document.addEventListener("mouseup", D);
  }, [ie, V]), y = M(() => {
    V(Ze !== null ? Ze : Ne.SIDEBAR_WIDTH);
  }, [Ze, V]), u = M((g, W) => {
    re(g, W), m == null || m(g, W);
  }, [re, m]), E = M((g) => {
    const W = h.current;
    if (!W) return;
    const L = Dt[Z].pixelsPerDay, { minDate: z } = jr(e, r, 60), D = at(g, z, L);
    W.scrollLeft = Math.max(0, D - 50);
  }, [Z, e, r]), F = M(() => {
    if (T === "MASTER") {
      const g = Ce.filter((W) => W.type === "CP");
      if (g.length > 0) {
        const W = g.reduce(
          (z, D) => z.startDate < D.startDate ? z : D
        ), L = new Date(W.startDate);
        L.setDate(L.getDate() - 5), E(L);
      }
    } else if (T === "DETAIL" && S) {
      const g = e.filter((W) => W.parentId === S);
      if (g.length > 0) {
        const W = g.reduce(
          (z, D) => z.startDate < D.startDate ? z : D
        ), L = new Date(W.startDate);
        L.setDate(L.getDate() - 5), E(L);
      }
    }
  }, [T, S, e, Ce, E]), q = M((g) => {
    T === "MASTER" && g.type === "CP" && u("DETAIL", g.id);
  }, [T, u]);
  ce(() => {
    if (T === "DETAIL" && S) {
      const g = setTimeout(() => {
        F();
      }, 100);
      return () => clearTimeout(g);
    }
  }, [T, S, F]);
  const le = M(async (g) => {
    if (o)
      try {
        const W = e.find((z) => z.id === g.taskId);
        if (!W || !W.task) return;
        const L = {
          ...W,
          startDate: g.newStartDate,
          endDate: g.newEndDate,
          task: {
            ...W.task,
            indirectWorkDaysPre: g.newIndirectWorkDaysPre,
            indirectWorkDaysPost: g.newIndirectWorkDaysPost,
            netWorkDays: g.newNetWorkDays
          }
        };
        await o(L);
      } catch (W) {
        console.error("Failed to update task:", W);
      }
  }, [e, o]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: N,
      className: `flex h-full w-full flex-col bg-gray-50 ${A || ""}`,
      style: I,
      children: [
        /* @__PURE__ */ s.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-3 shrink-0", children: T === "DETAIL" ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => u("MASTER"),
                className: "rounded bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300 transition-colors",
                children: "← 상위 공정표로"
              }
            ),
            f && !de && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: he,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 공정 추가",
                children: "+ Task 추가"
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            f && !Q && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: je,
                className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                title: "새 CP 추가",
                children: "+ CP 추가"
              }
            ),
            p && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: ft,
                className: "flex items-center gap-1 rounded bg-purple-500 px-2 py-1.5 text-xs font-medium text-white hover:bg-purple-600 transition-colors",
                title: "새 마일스톤 추가",
                children: "+ 마일스톤"
              }
            ),
            Q && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-500 italic", children: "CP 추가 중... (Enter 저장 / Esc 취소)" })
          ] }) }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: F,
                className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                title: T === "MASTER" ? "첫 번째 CP로 스크롤" : "첫 번째 작업으로 스크롤",
                children: "Focusing"
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (T === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((g) => /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => J(g),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${Z === g ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Dt[g].label
              },
              g
            )) }),
            /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              be(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            _ && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: _,
                disabled: !R || H === "saving",
                className: `flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${R ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
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
            Y && /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: Y,
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
              style: { width: ie },
              children: /* @__PURE__ */ s.jsx(
                kr,
                {
                  ref: x,
                  tasks: Ce,
                  allTasks: e,
                  viewMode: T,
                  expandedIds: U,
                  onToggle: se,
                  onTaskClick: q,
                  onTaskUpdate: o,
                  onTaskCreate: f,
                  onTaskReorder: d,
                  onTaskGroup: v,
                  onTaskUngroup: w,
                  onTaskDelete: c,
                  onTaskMove: b,
                  activeCPId: S,
                  virtualRows: Ue,
                  totalHeight: He,
                  onTotalWidthChange: gt,
                  isAddingTask: de,
                  onCancelAddTask: Ie,
                  isAddingCP: Q,
                  onCancelAddCP: Re,
                  onTaskDoubleClick: Qe
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${O ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: yt,
              onDoubleClick: y,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ s.jsx(
            Nr,
            {
              ref: h,
              tasks: Ce,
              milestones: r,
              viewMode: T,
              zoomLevel: Z,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: o,
              onBarDrag: le,
              onMilestoneUpdate: k,
              onMilestoneDoubleClick: ct,
              onTaskDoubleClick: Qe,
              virtualRows: Ue,
              totalHeight: He
            }
          ) }),
          O && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] }),
        /* @__PURE__ */ s.jsx(
          xs,
          {
            milestone: Ae,
            isOpen: lt,
            isNew: qe,
            onClose: we,
            onSave: mt,
            onDelete: Le
          }
        ),
        /* @__PURE__ */ s.jsx(
          ys,
          {
            task: Et,
            isOpen: dt,
            onClose: Me,
            onSave: ut,
            onDelete: c ? ht : void 0
          }
        )
      ]
    }
  );
}
const Ys = 50;
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
function ra(e) {
  const [r, t] = $(() => ({
    past: [],
    present: xe(e),
    future: []
  })), n = fe(!1), a = M((c) => {
    t((d) => {
      const v = typeof c == "function" ? c(d.present) : c;
      if (!n.current)
        return n.current = !0, {
          past: [],
          present: xe(v),
          future: []
        };
      if (JSON.stringify(d.present) === JSON.stringify(v))
        return d;
      const w = [...d.past, xe(d.present)];
      return w.length > Ys && w.shift(), {
        past: w,
        present: xe(v),
        future: []
        // 새 변경 시 future 초기화
      };
    });
  }, []), i = M(() => {
    t((c) => {
      if (c.past.length === 0) return c;
      const d = [...c.past], v = d.pop();
      return {
        past: d,
        present: v,
        future: [xe(c.present), ...c.future]
      };
    });
  }, []), l = M(() => {
    t((c) => {
      if (c.future.length === 0) return c;
      const d = [...c.future], v = d.shift();
      return {
        past: [...c.past, xe(c.present)],
        present: v,
        future: d
      };
    });
  }, []), o = M((c) => {
    n.current = !1, t({
      past: [],
      present: xe(c),
      future: []
    });
  }, []), f = M(() => {
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
    redo: l,
    canUndo: r.past.length > 0,
    canRedo: r.future.length > 0,
    reset: o,
    clearHistory: f,
    historyLength: {
      past: r.past.length,
      future: r.future.length
    }
  };
}
export {
  Se as GANTT_COLORS,
  Ne as GANTT_LAYOUT,
  ta as GanttChart,
  kr as GanttSidebar,
  Nr as GanttTimeline,
  ys as TaskEditModal,
  Dt as ZOOM_CONFIG,
  rr as addCalendarDays,
  is as addWorkingDays,
  jr as calculateDateRange,
  qs as calculateDualCalendarDates,
  at as dateToX,
  Ks as getAnchorDate,
  Js as getDateRangeWidth,
  Us as getPixelsPerDay,
  Xe as isHoliday,
  Vs as isWeekend,
  Bs as subtractWorkingDays,
  ea as useGanttDrag,
  Es as useGanttExpansion,
  Zs as useGanttSelection,
  Ms as useGanttSidebar,
  Be as useGanttStore,
  Ns as useGanttViewActions,
  js as useGanttViewState,
  Hs as useGanttVirtualization,
  ra as useHistory,
  Qs as xToDate
};
