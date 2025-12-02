"use client";
import * as Ye from "react";
import Ee, { forwardRef as Ge, createElement as Be, useState as re, useRef as ye, useMemo as xe, useEffect as Ie, useCallback as z } from "react";
import { flushSync as Vt } from "react-dom";
var Ue = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function qt() {
  if (rt) return Ne;
  rt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var o in s)
        o !== "key" && (a[o] = s[o]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Ne.Fragment = r, Ne.jsx = t, Ne.jsxs = t, Ne;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Xt() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === A ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case E:
          return "Fragment";
        case O:
          return "Profiler";
        case C:
          return "StrictMode";
        case q:
          return "Suspense";
        case T:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case w:
            return "Portal";
          case L:
            return d.displayName || "Context";
          case W:
            return (d._context.displayName || "Context") + ".Consumer";
          case B:
            var b = d.render;
            return d = d.displayName, d || (d = b.displayName || b.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case M:
            return b = d.displayName || null, b !== null ? b : e(d.type) || "Memo";
          case j:
            b = d._payload, d = d._init;
            try {
              return e(d(b));
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
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var R = b.error, _ = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return R.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), r(d);
      }
    }
    function n(d) {
      if (d === E) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === j)
        return "<...>";
      try {
        var b = e(d);
        return b ? "<" + b + ">" : "<...>";
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
      if ($.call(d, "key")) {
        var b = Object.getOwnPropertyDescriptor(d, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function o(d, b) {
      function R() {
        ie || (ie = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: R,
        configurable: !0
      });
    }
    function h() {
      var d = e(this.type);
      return oe[d] || (oe[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function u(d, b, R, _, he, le) {
      var p = R.ref;
      return d = {
        $$typeof: x,
        type: d,
        key: b,
        props: R,
        _owner: _
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(d, "ref", {
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
        value: he
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, b, R, _, he, le) {
      var p = b.children;
      if (p !== void 0)
        if (_)
          if (K(p)) {
            for (_ = 0; _ < p.length; _++)
              v(p[_]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(p);
      if ($.call(b, "key")) {
        p = e(d);
        var S = Object.keys(b).filter(function(X) {
          return X !== "key";
        });
        _ = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", ce[p + _] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          p,
          S,
          p
        ), ce[p + _] = !0);
      }
      if (p = null, R !== void 0 && (t(R), p = "" + R), i(b) && (t(b.key), p = "" + b.key), "key" in b) {
        R = {};
        for (var G in b)
          G !== "key" && (R[G] = b[G]);
      } else R = b;
      return p && o(
        R,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), u(
        d,
        p,
        R,
        s(),
        he,
        le
      );
    }
    function v(d) {
      y(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === j && (d._payload.status === "fulfilled" ? y(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function y(d) {
      return typeof d == "object" && d !== null && d.$$typeof === x;
    }
    var l = Ee, x = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), L = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), H = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, K = Array.isArray, ae = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var ie, oe = {}, ee = l.react_stack_bottom_frame.bind(
      l,
      a
    )(), J = ae(n(a)), ce = {};
    je.Fragment = E, je.jsx = function(d, b, R) {
      var _ = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        d,
        b,
        R,
        !1,
        _ ? Error("react-stack-top-frame") : ee,
        _ ? ae(n(d)) : J
      );
    }, je.jsxs = function(d, b, R) {
      var _ = 1e4 > H.recentlyCreatedOwnerStacks++;
      return f(
        d,
        b,
        R,
        !0,
        _ ? Error("react-stack-top-frame") : ee,
        _ ? ae(n(d)) : J
      );
    };
  }()), je;
}
process.env.NODE_ENV === "production" ? Ue.exports = qt() : Ue.exports = Xt();
var c = Ue.exports;
const Mt = 6048e5, Bt = 864e5, st = Symbol.for("constructDateFrom");
function ue(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && st in e ? e[st](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function V(e, r) {
  return ue(r || e, e);
}
function Y(e, r, t) {
  const n = V(e, t == null ? void 0 : t.in);
  return isNaN(r) ? ue(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ot(e, r) {
  return V(e, r == null ? void 0 : r.in).getDay() === 6;
}
function Nt(e, r) {
  return V(e, r == null ? void 0 : r.in).getDay() === 0;
}
let Ut = {};
function Ce() {
  return Ut;
}
function pe(e, r) {
  var o, h, u, f;
  const t = Ce(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((h = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : h.weekStartsOn) ?? t.weekStartsOn ?? ((f = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, s = V(e, r == null ? void 0 : r.in), a = s.getDay(), i = (a < n ? 7 : 0) + a - n;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function He(e, r) {
  return pe(e, { ...r, weekStartsOn: 1 });
}
function jt(e, r) {
  const t = V(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = ue(t, 0);
  s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = He(s), i = ue(t, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = He(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function at(e) {
  const r = V(e), t = new Date(
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
function Ae(e, ...r) {
  const t = ue.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function Re(e, r) {
  const t = V(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Pt(e, r, t) {
  const [n, s] = Ae(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = Re(n), i = Re(s), o = +a - at(a), h = +i - at(i);
  return Math.round((o - h) / Bt);
}
function Qt(e, r) {
  const t = jt(e, r), n = ue(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), He(n);
}
function Kt(e, r, t) {
  const [n, s] = Ae(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +Re(n) == +Re(s);
}
function Jt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Zt(e) {
  return !(!Jt(e) && typeof e != "number" || isNaN(+V(e)));
}
function Qe(e, r, t) {
  const [n, s] = Ae(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = it(n, s), i = Math.abs(
    Pt(n, s)
  );
  n.setDate(n.getDate() - a * i);
  const o = +(it(n, s) === -a), h = a * (i - o);
  return h === 0 ? 0 : h;
}
function it(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function er(e, r) {
  const t = V(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function tr(e, r) {
  const t = V(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const rr = {
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
}, nr = (e, r, t) => {
  let n;
  const s = rr[e];
  return typeof s == "string" ? n = s : r === 1 ? n = s.one : n = s.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function qe(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const sr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ar = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ir = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, or = {
  date: qe({
    formats: sr,
    defaultWidth: "full"
  }),
  time: qe({
    formats: ar,
    defaultWidth: "full"
  }),
  dateTime: qe({
    formats: ir,
    defaultWidth: "full"
  })
}, cr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, lr = (e, r, t, n) => cr[e];
function Pe(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : i;
      s = e.formattingValues[o] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[o] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[a];
  };
}
const dr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ur = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, hr = {
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
}, fr = {
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
}, mr = {
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
}, gr = {
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
}, yr = (e, r) => {
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
}, xr = {
  ordinalNumber: yr,
  era: Pe({
    values: dr,
    defaultWidth: "wide"
  }),
  quarter: Pe({
    values: ur,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Pe({
    values: hr,
    defaultWidth: "wide"
  }),
  day: Pe({
    values: fr,
    defaultWidth: "wide"
  }),
  dayPeriod: Pe({
    values: mr,
    defaultWidth: "wide",
    formattingValues: gr,
    defaultFormattingWidth: "wide"
  })
};
function _e(e) {
  return (r, t = {}) => {
    const n = t.width, s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(s);
    if (!a)
      return null;
    const i = a[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(o) ? wr(o, (v) => v.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      br(o, (v) => v.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(h) : h, u = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(u)
    ) : u;
    const f = r.slice(i.length);
    return { value: u, rest: f };
  };
}
function br(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function wr(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function pr(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const s = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const o = r.slice(s.length);
    return { value: i, rest: o };
  };
}
const vr = /^(\d+)(th|st|nd|rd)?/i, Dr = /\d+/i, kr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Er = {
  any: [/^b/i, /^(a|c)/i]
}, Tr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Sr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mr = {
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
}, Or = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Nr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Pr = {
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
}, _r = {
  ordinalNumber: pr({
    matchPattern: vr,
    parsePattern: Dr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: _e({
    matchPatterns: kr,
    defaultMatchWidth: "wide",
    parsePatterns: Er,
    defaultParseWidth: "any"
  }),
  quarter: _e({
    matchPatterns: Tr,
    defaultMatchWidth: "wide",
    parsePatterns: Sr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: _e({
    matchPatterns: Wr,
    defaultMatchWidth: "wide",
    parsePatterns: Mr,
    defaultParseWidth: "any"
  }),
  day: _e({
    matchPatterns: Or,
    defaultMatchWidth: "wide",
    parsePatterns: Nr,
    defaultParseWidth: "any"
  }),
  dayPeriod: _e({
    matchPatterns: jr,
    defaultMatchWidth: "any",
    parsePatterns: Pr,
    defaultParseWidth: "any"
  })
}, Ir = {
  code: "en-US",
  formatDistance: nr,
  formatLong: or,
  formatRelative: lr,
  localize: xr,
  match: _r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Rr(e, r) {
  const t = V(e, r == null ? void 0 : r.in);
  return Pt(t, tr(t)) + 1;
}
function Cr(e, r) {
  const t = V(e, r == null ? void 0 : r.in), n = +He(t) - +Qt(t);
  return Math.round(n / Mt) + 1;
}
function _t(e, r) {
  var f, v, y, l;
  const t = V(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = Ce(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((v = (f = r == null ? void 0 : r.locale) == null ? void 0 : f.options) == null ? void 0 : v.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((l = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, i = ue((r == null ? void 0 : r.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const o = pe(i, r), h = ue((r == null ? void 0 : r.in) || e, 0);
  h.setFullYear(n, 0, a), h.setHours(0, 0, 0, 0);
  const u = pe(h, r);
  return +t >= +o ? n + 1 : +t >= +u ? n : n - 1;
}
function Ar(e, r) {
  var o, h, u, f;
  const t = Ce(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((h = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : h.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = _t(e, r), a = ue((r == null ? void 0 : r.in) || e, 0);
  return a.setFullYear(s, 0, n), a.setHours(0, 0, 0, 0), pe(a, r);
}
function zr(e, r) {
  const t = V(e, r == null ? void 0 : r.in), n = +pe(t, r) - +Ar(t, r);
  return Math.round(n / Mt) + 1;
}
function I(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const me = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return I(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : I(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return I(e.getDate(), r.length);
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
    return I(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return I(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return I(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return I(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), s = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return I(s, r.length);
  }
}, De = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ot = {
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
    return me.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const s = _t(e, n), a = s > 0 ? s : 1 - s;
    if (r === "YY") {
      const i = a % 100;
      return I(i, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : I(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = jt(e);
    return I(t, r.length);
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
    return I(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return I(n, 2);
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
        return I(n, 2);
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
        return me.M(e, r);
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
        return I(n + 1, 2);
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
    const s = zr(e, n);
    return r === "wo" ? t.ordinalNumber(s, { unit: "week" }) : I(s, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = Cr(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : I(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : me.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Rr(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : I(n, r.length);
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
  c: function(e, r, t, n) {
    const s = e.getDay(), a = (s - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(a);
      case "cc":
        return I(a, r.length);
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
        return I(s, r.length);
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
    switch (n === 12 ? s = De.noon : n === 0 ? s = De.midnight : s = n / 12 >= 1 ? "pm" : "am", r) {
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
    switch (n >= 17 ? s = De.evening : n >= 12 ? s = De.afternoon : n >= 4 ? s = De.morning : s = De.night, r) {
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
    return me.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : me.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : I(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : I(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : me.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : me.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return me.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return lt(n);
      case "XXXX":
      case "XX":
        return be(n);
      case "XXXXX":
      case "XXX":
      default:
        return be(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return lt(n);
      case "xxxx":
      case "xx":
        return be(n);
      case "xxxxx":
      case "xxx":
      default:
        return be(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ct(n, ":");
      case "OOOO":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ct(n, ":");
      case "zzzz":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return I(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return I(+e, r.length);
  }
};
function ct(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(s) : t + String(s) + r + I(a, 2);
}
function lt(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + I(Math.abs(e) / 60, 2) : be(e, r);
}
function be(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = I(Math.trunc(n / 60), 2), a = I(n % 60, 2);
  return t + s + r + a;
}
const dt = (e, r) => {
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
}, It = (e, r) => {
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
}, Fr = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], s = t[2];
  if (!s)
    return dt(e, r);
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
  return a.replace("{{date}}", dt(n, r)).replace("{{time}}", It(s, r));
}, Lr = {
  p: It,
  P: Fr
}, Yr = /^D+$/, Hr = /^Y+$/, $r = ["D", "DD", "YY", "YYYY"];
function Gr(e) {
  return Yr.test(e);
}
function Vr(e) {
  return Hr.test(e);
}
function qr(e, r, t) {
  const n = Xr(e, r, t);
  if (console.warn(n), $r.includes(e)) throw new RangeError(n);
}
function Xr(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Br = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ur = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qr = /^'([^]*?)'?$/, Kr = /''/g, Jr = /[a-zA-Z]/;
function se(e, r, t) {
  var f, v, y, l;
  const n = Ce(), s = n.locale ?? Ir, a = n.firstWeekContainsDate ?? ((v = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = n.weekStartsOn ?? ((l = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : l.weekStartsOn) ?? 0, o = V(e, t == null ? void 0 : t.in);
  if (!Zt(o))
    throw new RangeError("Invalid time value");
  let h = r.match(Ur).map((x) => {
    const w = x[0];
    if (w === "p" || w === "P") {
      const E = Lr[w];
      return E(x, s.formatLong);
    }
    return x;
  }).join("").match(Br).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const w = x[0];
    if (w === "'")
      return { isToken: !1, value: Zr(x) };
    if (ot[w])
      return { isToken: !0, value: x };
    if (w.match(Jr))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
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
    const w = x.value;
    (Vr(w) || Gr(w)) && qr(w, r, String(e));
    const E = ot[w[0]];
    return E(o, w, s.localize, u);
  }).join("");
}
function Zr(e) {
  const r = e.match(Qr);
  return r ? r[1].replace(Kr, "'") : e;
}
function en(e, r) {
  return V(e, r == null ? void 0 : r.in).getDate();
}
function Ve(e, r) {
  return V(e, r == null ? void 0 : r.in).getDay();
}
function ut(e, r) {
  var h, u, f, v;
  const t = Ce(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (h = r == null ? void 0 : r.locale) == null ? void 0 : h.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((v = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = en(V(e, r == null ? void 0 : r.in));
  if (isNaN(s)) return NaN;
  const a = Ve(er(e, r));
  let i = n - a;
  i <= 0 && (i += 7);
  const o = s - i;
  return Math.ceil(o / 7) + 1;
}
function Xe(e, r) {
  return V(e, r == null ? void 0 : r.in).getFullYear();
}
function tn(e, r, t) {
  const [n, s] = Ae(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +pe(n, t) == +pe(s, t);
}
function rn(e, r, t) {
  const [n, s] = Ae(
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
const nn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), ht = (e) => {
  const r = sn(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Rt = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), an = (e) => {
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
var on = {
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
const cn = Ge(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...o
  }, h) => Be(
    "svg",
    {
      ref: h,
      ...on,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: Rt("lucide", s),
      ...!a && !an(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...i.map(([u, f]) => Be(u, f)),
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
const Se = (e, r) => {
  const t = Ge(
    ({ className: n, ...s }, a) => Be(cn, {
      ref: a,
      iconNode: r,
      className: Rt(
        `lucide-${nn(ht(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return t.displayName = ht(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], dn = Se("check", ln);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], hn = Se("chevron-down", un);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], mn = Se("chevron-right", fn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], yn = Se("grip-vertical", gn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], bn = Se("plus", xn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], pn = Se("x", wn), de = {
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
}, $e = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, { ROW_HEIGHT: ge, HEADER_HEIGHT: ft, MILESTONE_LANE_HEIGHT: mt } = we, gt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 }
], yt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Le = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Ct = Ge(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: s, onTaskClick: a, onBackToMaster: i, onTaskUpdate: o, onTaskCreate: h, onTaskReorder: u, onScrollToFirstTask: f, activeCPId: v, virtualRows: y, totalHeight: l, onTotalWidthChange: x }, w) => {
    const E = y && y.length > 0, [C, O] = re(!1), [W, L] = re(Le), B = ye(null), [q, T] = re(null), [M, j] = re(null), [N, A] = re(null), [H, $] = re(
      gt.map((g) => g.width)
    ), [K, ae] = re(
      yt.map((g) => g.width)
    ), [ie, oe] = re(null), ee = ye(!1), J = t === "MASTER" ? gt : yt, ce = t === "MASTER" ? H : K, d = t === "MASTER" ? $ : ae, b = xe(
      () => J.map((g, m) => ({
        ...g,
        width: ce[m] ?? g.width
      })),
      [J, ce]
    ), R = t === "DETAIL" && u ? 24 : 0, _ = b.reduce((g, m) => g + m.width, 0) + R;
    Ie(() => {
      x && x(_);
    }, [_, x]);
    const he = z((g, m) => {
      if (g.detail >= 2) return;
      g.preventDefault(), g.stopPropagation(), ee.current = !0, oe(m);
      const k = g.clientX, F = ce[m], D = J[m].minWidth, U = (Z) => {
        if (!ee.current) return;
        const ze = Z.clientX - k, Ze = Math.max(D, F + ze);
        d((et) => {
          const Fe = [...et];
          return Fe[m] = Ze, Fe;
        });
      }, P = () => {
        ee.current = !1, oe(null), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", U), document.addEventListener("mouseup", P);
    }, [ce, J, d]), le = z((g, m = 12, k = "normal") => {
      const D = document.createElement("canvas").getContext("2d");
      return D ? (D.font = `${k} ${m}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, D.measureText(g).width) : 0;
    }, []), p = z((g) => {
      const m = J[g].minWidth, k = g === 0, F = k ? 48 : 20, D = J[g].label;
      let U = le(D, 12, "500") + 16;
      return e.forEach((P) => {
        let Z = "", ze = 0;
        if (t === "MASTER") {
          const tt = P.type === "GROUP";
          switch (k && P.parentId && (ze = 20), g) {
            case 0:
              Z = P.name;
              break;
            case 1:
              Z = tt ? "-" : P.cp ? `${P.cp.workDaysTotal + P.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              Z = tt ? "-" : P.cp ? `${P.cp.workDaysTotal}일` : "-";
              break;
          }
        } else
          switch (g) {
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
              Z = se(P.startDate, "yyyy-MM-dd");
              break;
            case 5:
              Z = se(P.endDate, "yyyy-MM-dd");
              break;
          }
        const Fe = le(Z, k ? 14 : 12, k ? "500" : "normal") + F + ze;
        U = Math.max(U, Fe);
      }), Math.max(m, Math.ceil(U));
    }, [e, t, J, le]), S = z((g, m) => {
      g.preventDefault(), g.stopPropagation(), ee.current = !1, oe(null);
      const k = p(m);
      d((F) => {
        const D = [...F];
        return D[m] = k, D;
      });
    }, [p, d]), G = z((g, m, k) => {
      if (!g.task || !o) return;
      const F = {
        ...g,
        task: {
          ...g.task,
          [m]: k
        }
      };
      o(F);
    }, [o]), X = z(() => {
      O(!0), L(Le), setTimeout(() => {
        var g;
        (g = B.current) == null || g.focus();
      }, 0);
    }, []), fe = z(() => {
      O(!1), L(Le);
    }, []), Oe = z(() => {
      if (!W.name.trim() || !h || !v) return;
      const g = e[e.length - 1], m = g ? Y(g.endDate, 1) : /* @__PURE__ */ new Date(), k = W.indirectWorkDaysPre + W.netWorkDays + W.indirectWorkDaysPost, F = Y(m, Math.max(k - 1, 0)), D = {
        id: `task-${Date.now()}`,
        // 임시 ID (서버에서 재할당 가능)
        parentId: v,
        wbsLevel: 2,
        type: "TASK",
        name: W.name.trim(),
        startDate: m,
        endDate: F,
        task: {
          netWorkDays: W.netWorkDays,
          indirectWorkDaysPre: W.indirectWorkDaysPre,
          indirectWorkDaysPost: W.indirectWorkDaysPost
        },
        dependencies: []
      };
      h(D), O(!1), L(Le);
    }, [W, h, v, e]), ve = z((g) => {
      g.key === "Enter" ? (g.preventDefault(), Oe()) : g.key === "Escape" && (g.preventDefault(), fe());
    }, [Oe, fe]), Lt = z((g, m) => {
      g.dataTransfer.effectAllowed = "move", g.dataTransfer.setData("text/plain", m), T(m);
      const k = document.createElement("div");
      k.style.opacity = "0", document.body.appendChild(k), g.dataTransfer.setDragImage(k, 0, 0), setTimeout(() => document.body.removeChild(k), 0);
    }, []), Yt = z((g, m) => {
      if (g.preventDefault(), g.dataTransfer.dropEffect = "move", m === q) return;
      const k = g.currentTarget.getBoundingClientRect(), F = k.top + k.height / 2, D = g.clientY < F ? "before" : "after";
      j(m), A(D);
    }, [q]), Ht = z(() => {
      j(null), A(null);
    }, []), $t = z((g, m) => {
      if (g.preventDefault(), !q || !u || q === m) {
        T(null), j(null), A(null);
        return;
      }
      const k = e.findIndex((D) => D.id === m), F = N === "after" ? k + 1 : k;
      u(q, F), T(null), j(null), A(null);
    }, [q, N, u, e]), Gt = z(() => {
      T(null), j(null), A(null);
    }, []), Je = () => /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: b.map((g, m) => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: g.width },
        children: [
          g.label,
          m < b.length - 1 && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${ie === m ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (k) => he(k, m),
              onDoubleClick: (k) => S(k, m),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          m < b.length - 1 && /* @__PURE__ */ c.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      g.id
    )) });
    return t === "MASTER" ? /* @__PURE__ */ c.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: ft },
          children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex flex-1 items-center px-4 font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
            Je()
          ]
        }
      ),
      ie !== null && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ c.jsxs("div", { ref: w, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: mt, minWidth: _ },
            children: b.map((g, m) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: g.width },
                children: m === 0 && "Milestone"
              },
              g.id
            ))
          }
        ),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            style: {
              minWidth: _,
              height: E ? l : void 0,
              position: "relative"
            },
            children: (E ? y : e.map((g, m) => ({ index: m, start: m * ge, size: ge, key: m }))).map((g) => {
              const m = e[g.index];
              if (!m) return null;
              const k = m.type === "GROUP", F = k && r.some((P) => P.parentId === m.id), D = n.has(m.id), U = m.parentId ? 20 : 0;
              return /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `box-border flex items-center border-b border-gray-100 transition-all duration-150 ${k ? "bg-gray-50" : "cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)] hover:pl-1"}`,
                  style: {
                    height: ge,
                    ...E ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${g.start}px)`
                    } : {}
                  },
                  onDoubleClick: () => !k && a(m),
                  title: k ? void 0 : "더블클릭하여 상세 공정표 보기",
                  children: [
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                        style: { width: b[0].width, paddingLeft: U + 8 },
                        children: [
                          F ? /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: (P) => {
                                P.stopPropagation(), s(m.id);
                              },
                              className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                              children: D ? /* @__PURE__ */ c.jsx(hn, { size: 14 }) : /* @__PURE__ */ c.jsx(mn, { size: 14 })
                            }
                          ) : /* @__PURE__ */ c.jsx("div", { className: "w-6 shrink-0" }),
                          /* @__PURE__ */ c.jsx(
                            "span",
                            {
                              className: `truncate text-sm ${k ? "font-bold text-gray-700" : "font-medium text-gray-800"}`,
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
                        style: { width: b[1].width },
                        children: k ? "-" : m.cp ? `${m.cp.workDaysTotal + m.cp.nonWorkDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center text-xs text-vermilion",
                        style: { width: b[2].width },
                        children: k ? "-" : m.cp ? `${m.cp.workDaysTotal}일` : "-"
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
          style: { height: ft },
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
                h && !C && /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    onClick: X,
                    className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                    title: "새 공정 추가",
                    children: [
                      /* @__PURE__ */ c.jsx(bn, { size: 12 }),
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
            Je()
          ]
        }
      ),
      ie !== null && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ c.jsxs("div", { ref: w, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: mt, minWidth: _ },
            children: b.map((g, m) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                style: { width: g.width },
                children: m === 0 && "Milestone"
              },
              g.id
            ))
          }
        ),
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            style: {
              minWidth: _,
              height: E ? l : void 0,
              position: "relative"
            },
            children: [
              (E ? y : e.map((g, m) => ({ index: m, start: m * ge, size: ge, key: m }))).map((g) => {
                const m = e[g.index];
                if (!m) return null;
                const k = q === m.id, F = M === m.id;
                return /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    draggable: !!u,
                    onDragStart: (D) => Lt(D, m.id),
                    onDragOver: (D) => Yt(D, m.id),
                    onDragLeave: Ht,
                    onDrop: (D) => $t(D, m.id),
                    onDragEnd: Gt,
                    className: `box-border flex items-center border-b transition-colors ${k ? "opacity-50 bg-blue-50" : F ? N === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: ge,
                      ...E ? {
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
                          children: /* @__PURE__ */ c.jsx(yn, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: u ? b[0].width - 24 : b[0].width },
                          children: /* @__PURE__ */ c.jsx("span", { className: "truncate text-sm text-gray-700", children: m.name })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: b[1].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: m.task.indirectWorkDaysPre,
                              onChange: (D) => {
                                const U = D.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                G(m, "indirectWorkDaysPre", P);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
                              },
                              title: "선 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: b[2].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: m.task.netWorkDays,
                              onChange: (D) => {
                                const U = D.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                G(m, "netWorkDays", P);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
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
                          style: { width: b[3].width },
                          children: m.task ? /* @__PURE__ */ c.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: m.task.indirectWorkDaysPost,
                              onChange: (D) => {
                                const U = D.target.value.replace(/[^0-9]/g, ""), P = parseInt(U) || 0;
                                G(m, "indirectWorkDaysPost", P);
                              },
                              onKeyDown: (D) => {
                                (D.key === "-" || D.key === "e" || D.key === "+" || D.key === ".") && D.preventDefault();
                              },
                              title: "후 간접작업일 (바 드래그로도 조절 가능)"
                            }
                          ) : /* @__PURE__ */ c.jsx("span", { className: "text-xs text-gray-400", children: "-" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                          style: { width: b[4].width },
                          children: se(m.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: b[5].width },
                          children: se(m.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  g.key
                );
              }),
              C && /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
                  style: {
                    height: ge,
                    ...E ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${e.length * ge}px)`
                    } : {}
                  },
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
                        style: { width: b[0].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            ref: B,
                            type: "text",
                            placeholder: "공정명...",
                            className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: W.name,
                            onChange: (g) => L((m) => ({ ...m, name: g.target.value })),
                            onKeyDown: ve
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: b[1].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: W.indirectWorkDaysPre,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), k = parseInt(m) || 0;
                              L((F) => ({ ...F, indirectWorkDaysPre: k }));
                            },
                            onKeyDown: ve,
                            title: "선 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: b[2].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: W.netWorkDays,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), k = parseInt(m) || 0;
                              L((F) => ({ ...F, netWorkDays: k }));
                            },
                            onKeyDown: ve,
                            title: "순작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: b[3].width },
                        children: /* @__PURE__ */ c.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: W.indirectWorkDaysPost,
                            onChange: (g) => {
                              const m = g.target.value.replace(/[^0-9]/g, ""), k = parseInt(m) || 0;
                              L((F) => ({ ...F, indirectWorkDaysPost: k }));
                            },
                            onKeyDown: ve,
                            title: "후 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center gap-1 px-2",
                        style: { width: b[4].width + b[5].width },
                        children: [
                          /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: Oe,
                              disabled: !W.name.trim(),
                              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                              title: "저장 (Enter)",
                              children: /* @__PURE__ */ c.jsx(dn, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
                            "button",
                            {
                              onClick: fe,
                              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                              title: "취소 (Esc)",
                              children: /* @__PURE__ */ c.jsx(pn, { size: 14 })
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
Ct.displayName = "GanttSidebar";
const Te = (e, r = [], t) => !!(!t.workOnSaturdays && Ot(e) || !t.workOnSundays && Nt(e) || !t.workOnHolidays && r.some((n) => Kt(n, e))), ts = (e) => Ot(e) || Nt(e), vn = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; Te(s, t, n); )
    s = Y(s, 1);
  for (; a < r; )
    Te(s, t, n) || a++, a < r && (s = Y(s, 1));
  return s;
}, rs = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; a < r; )
    s = Y(s, -1), Te(s, t, n) || a++;
  return s;
}, xt = (e, r) => r <= 0 ? e : Y(e, r - 1), ns = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: s, indirectWorkDaysPost: a } = e.task, i = Re(new Date(e.startDate));
  let o = i, h, u;
  s > 0 && (h = o, u = xt(o, s), o = Y(u, 1));
  let f = o, v = f;
  if (n > 0) {
    for (; Te(f, r, t); )
      f = Y(f, 1);
    v = vn(f, n, r, t), o = Y(v, 1);
  } else s === 0 && (f = i, v = i);
  let y, l;
  return a > 0 && (y = o, l = xt(o, a)), {
    startDate: h || f,
    endDate: l || v,
    netWorkStartDate: f,
    netWorkEndDate: v,
    indirectPreStartDate: h,
    indirectPreEndDate: u,
    indirectPostStartDate: y,
    indirectPostEndDate: l
  };
}, ss = (e, r, t) => {
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
}, Ke = (e, r, t) => Qe(e, r) * t, as = (e, r, t) => {
  const n = Math.round(e / t);
  return Y(r, n);
}, is = (e, r, t) => (Qe(r, e) + 1) * t, os = (e) => $e[e].pixelsPerDay, At = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((u) => [u.startDate, u.endDate].filter(Boolean)),
    ...r.map((u) => u.date)
  ];
  if (n.length === 0) {
    const u = /* @__PURE__ */ new Date();
    return {
      minDate: u,
      maxDate: Y(u, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...n.map((u) => u.getTime()))), a = new Date(Math.max(...n.map((u) => u.getTime()))), i = Y(s, -t), o = Y(a, t), h = Qe(o, i);
  return {
    minDate: i,
    maxDate: o,
    totalDays: h
  };
}, { ROW_HEIGHT: te, HEADER_HEIGHT: Dn, MILESTONE_LANE_HEIGHT: ne, BAR_HEIGHT: Q } = we, kn = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: s,
  calendarSettings: a
}) => {
  const i = Array.from({ length: r }, (y, l) => Y(e, l)), o = r * t, h = xe(() => {
    const y = [];
    let l = Xe(i[0]), x = 0;
    return i.forEach((w) => {
      Xe(w) !== l ? (y.push({ label: `${l}년`, days: x }), l = Xe(w), x = 1) : x++;
    }), y.push({ label: `${l}년`, days: x }), y;
  }, [i]), u = xe(() => {
    const y = [];
    let l = i[0], x = 0;
    return i.forEach((w) => {
      rn(w, l) ? x++ : (y.push({ label: se(l, "M월"), days: x }), l = w, x = 1);
    }), y.push({ label: se(l, "M월"), days: x }), y;
  }, [i]), f = xe(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: i.map((y, l) => {
        const x = Ve(y), w = Te(y, s, a), E = x === 0, C = x === 6;
        let O = "text-gray-600";
        E && (O = "text-red-500"), C && (O = "text-blue-500"), w && !E && !C && (O = "text-red-500");
        let W = "";
        return E || w && !C ? W = "bg-red-50/50" : C && (W = "bg-blue-50/50"), /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${W}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ c.jsx("span", { className: `text-[10px] leading-none ${O}`, children: se(y, "d") }),
              /* @__PURE__ */ c.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${O}`, children: ["일", "월", "화", "수", "목", "금", "토"][x] })
            ]
          },
          l
        );
      }) });
    {
      const y = [];
      let l = i[0], x = 0;
      return i.forEach((w) => {
        tn(w, l, { weekStartsOn: 0 }) ? x++ : (y.push({ label: `${ut(l, { weekStartsOn: 0 })}주`, days: x }), l = w, x = 1);
      }), y.push({ label: `${ut(l, { weekStartsOn: 0 })}주`, days: x }), /* @__PURE__ */ c.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: o }, children: y.map((w, E) => /* @__PURE__ */ c.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: w.days * t },
          children: w.label
        },
        E
      )) });
    }
  }, [i, n, t, s, a, o]), v = n === "MONTH";
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: Dn, minWidth: o },
      children: v ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: o },
            children: h.map((y, l) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              l
            ))
          }
        ),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: u.map((y, l) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex h-full shrink-0 items-center justify-center border-r border-gray-200",
                style: { width: y.days * t },
                children: y.label
              },
              l
            ))
          }
        )
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: o },
            children: h.map((y, l) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex shrink-0 items-center border-r border-gray-300 pl-2",
                style: { width: y.days * t },
                children: y.label
              },
              l
            ))
          }
        ),
        /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: o },
            children: u.map((y, l) => /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "flex shrink-0 items-center justify-center border-r border-gray-300",
                style: { width: y.days * t },
                children: y.label
              },
              l
            ))
          }
        ),
        f
      ] })
    }
  );
}, En = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: a,
  zoomLevel: i
}) => {
  const o = xe(() => {
    if (i === "MONTH") return [];
    const h = [];
    for (let u = 0; u < r; u++) {
      const f = Y(e, u), v = Ve(f), y = v === 0, l = v === 6;
      if (Te(f, s, a) || l) {
        const w = u * n;
        let E = "rgba(254, 242, 242, 0.5)";
        l && !y && (E = "rgba(239, 246, 255, 0.5)"), y && (E = "rgba(254, 242, 242, 0.5)"), h.push(
          /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: w,
              y: 0,
              width: n,
              height: t,
              fill: E,
              className: "pointer-events-none"
            },
            `weekend-${u}`
          )
        );
      }
    }
    return h;
  }, [e, r, t, n, s, a, i]);
  return /* @__PURE__ */ c.jsx("g", { children: o });
}, Tn = ({ milestone: e, x: r }) => {
  const n = ne / 2;
  return /* @__PURE__ */ c.jsxs("g", { transform: `translate(${r}, ${n})`, className: "group cursor-pointer", children: [
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
        x: -8,
        y: 4,
        textAnchor: "end",
        className: "select-none text-[11px] font-bold fill-gray-600 transition-colors group-hover:fill-blue-700",
        children: e.name
      }
    )
  ] });
}, Sn = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: s,
  isDraggable: a = !1,
  dragInfo: i,
  onDragStart: o
}) => {
  var l, x;
  if (e.type === "GROUP") return null;
  const h = 4, u = !!i, f = (i == null ? void 0 : i.startDate) || e.startDate, v = (i == null ? void 0 : i.endDate) || e.endDate, y = Ke(f, t, n);
  if (s) {
    const w = ((l = e.cp) == null ? void 0 : l.workDaysTotal) || 0, E = ((x = e.cp) == null ? void 0 : x.nonWorkDaysTotal) || 0;
    if (w + E === 0) return null;
    const O = w * n, W = E * n;
    return /* @__PURE__ */ c.jsxs("g", { transform: `translate(${y}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ c.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: O,
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
          x: O,
          y: 0,
          width: W,
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
          x: -8,
          y: Q / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: w, indirectWorkDaysPre: E, indirectWorkDaysPost: C } = e.task, O = (i == null ? void 0 : i.indirectWorkDaysPre) ?? E, W = (i == null ? void 0 : i.indirectWorkDaysPost) ?? C, L = O * n, B = w * n, q = W * n, T = L + B + q, M = 0, j = L, N = L + B, A = 8, H = {
      startDate: f,
      endDate: v,
      indirectWorkDaysPre: O,
      netWorkDays: w,
      indirectWorkDaysPost: W
    };
    return /* @__PURE__ */ c.jsxs(
      "g",
      {
        transform: `translate(${y}, ${r})`,
        className: `group ${u ? "opacity-90" : ""}`,
        children: [
          a && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: L,
              y: 0,
              width: B,
              height: Q,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: ($) => o == null ? void 0 : o($, e.id, "move", H)
            }
          ),
          O > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: M,
              y: 0,
              width: L,
              height: Q,
              fill: de.blue,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          w > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: j,
              y: 0,
              width: B,
              height: Q,
              fill: de.red,
              rx: h,
              ry: h,
              className: `drop-shadow-sm transition-opacity ${u ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          W > 0 && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: N,
              y: 0,
              width: q,
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
              x: -A / 2,
              y: 0,
              width: A,
              height: Q,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: ($) => o == null ? void 0 : o($, e.id, "resize-pre", H),
              children: /* @__PURE__ */ c.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: T - A / 2,
              y: 0,
              width: A,
              height: Q,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: ($) => o == null ? void 0 : o($, e.id, "resize-post", H),
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
              x: -8,
              y: Q / 2 + 4,
              textAnchor: "end",
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
                  se(f, "MM/dd"),
                  " ~ ",
                  se(v, "MM/dd")
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
                  O,
                  "일 + 순",
                  w,
                  "일 + 뒤",
                  W,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, Wn = () => /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx(
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
) }), zt = Ge(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: s, calendarSettings: a, onBarDrag: i, virtualRows: o, totalHeight: h }, u) => {
    const f = $e[n].pixelsPerDay, v = t === "MASTER", y = o && o.length > 0, [l, x] = re(null), { minDate: w, totalDays: E } = xe(() => At(e, r, 60), [e, r]), C = E * f, O = Math.max(y ? (h || 0) + ne + 100 : e.length * te + ne + 100, 500), W = z((T, M, j, N) => {
      i && (T.preventDefault(), T.stopPropagation(), x({
        taskId: M,
        dragType: j,
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
    }, [i]), L = z((T) => {
      if (!l || !i) return;
      const M = T.clientX - l.startX, j = Math.round(M / f);
      let N = l.originalStartDate, A = l.originalEndDate, H = l.originalIndirectWorkDaysPre, $ = l.originalIndirectWorkDaysPost;
      if (l.dragType === "move")
        N = Y(l.originalStartDate, j), A = Y(l.originalEndDate, j);
      else if (l.dragType === "resize-pre") {
        H = Math.max(0, l.originalIndirectWorkDaysPre - j), N = Y(l.originalStartDate, -(-j + (H - l.originalIndirectWorkDaysPre)));
        const K = Y(l.originalStartDate, l.originalIndirectWorkDaysPre);
        N = Y(K, -H), A = l.originalEndDate;
      } else if (l.dragType === "resize-post") {
        $ = Math.max(0, l.originalIndirectWorkDaysPost + j);
        const K = Y(l.originalEndDate, -l.originalIndirectWorkDaysPost);
        A = Y(K, $), N = l.originalStartDate;
      }
      x((K) => K ? {
        ...K,
        currentStartDate: N,
        currentEndDate: A,
        currentIndirectWorkDaysPre: H,
        currentIndirectWorkDaysPost: $
      } : null);
    }, [l, i, f]), B = z(() => {
      if (!l || !i) {
        x(null);
        return;
      }
      const T = l.currentStartDate.getTime() !== l.originalStartDate.getTime() || l.currentEndDate.getTime() !== l.originalEndDate.getTime(), M = l.currentIndirectWorkDaysPre !== l.originalIndirectWorkDaysPre || l.currentIndirectWorkDaysPost !== l.originalIndirectWorkDaysPost;
      (T || M) && i({
        taskId: l.taskId,
        dragType: l.dragType,
        newStartDate: l.currentStartDate,
        newEndDate: l.currentEndDate,
        newIndirectWorkDaysPre: l.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: l.currentIndirectWorkDaysPost
      }), x(null);
    }, [l, i]);
    Ie(() => {
      if (l)
        return window.addEventListener("mousemove", L), window.addEventListener("mouseup", B), document.body.style.cursor = l.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", B), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [l, L, B]);
    const q = z((T) => l && l.taskId === T ? {
      startDate: l.currentStartDate,
      endDate: l.currentEndDate,
      indirectWorkDaysPre: l.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: l.currentIndirectWorkDaysPost
    } : null, [l]);
    return /* @__PURE__ */ c.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ c.jsxs("div", { ref: u, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ c.jsx(
        kn,
        {
          minDate: w,
          totalDays: E,
          pixelsPerDay: f,
          zoomLevel: n,
          holidays: s,
          calendarSettings: a
        }
      ),
      /* @__PURE__ */ c.jsxs("svg", { width: C, height: O, className: "block bg-white", children: [
        /* @__PURE__ */ c.jsx(Wn, {}),
        /* @__PURE__ */ c.jsx(
          En,
          {
            minDate: w,
            totalDays: E,
            chartHeight: O,
            pixelsPerDay: f,
            holidays: s,
            calendarSettings: a,
            zoomLevel: n
          }
        ),
        (y ? o : e.map((T, M) => ({ index: M, start: M * te, size: te, key: M }))).map((T) => {
          const M = e[T.index];
          if (!M || M.type !== "GROUP") return null;
          const j = T.start + ne;
          return /* @__PURE__ */ c.jsx(
            "rect",
            {
              x: 0,
              y: j,
              width: C,
              height: te,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${T.key}`
          );
        }),
        Array.from({ length: E }, (T, M) => {
          const j = (M + 1) * f, N = Y(w, M), A = Ve(N);
          let H = !1, $ = "#f0f0f0";
          return n === "DAY" ? (H = !0, $ = A === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (H = A === 0, $ = "#e5e7eb") : n === "MONTH" && (H = A === 0, $ = "#f0f0f0"), H ? /* @__PURE__ */ c.jsx(
            "line",
            {
              x1: j,
              y1: 0,
              x2: j,
              y2: O,
              stroke: $,
              strokeWidth: 1
            },
            `vline-${M}`
          ) : null;
        }),
        (y ? o : e.map((T, M) => ({ index: M, start: M * te, size: te, key: M }))).map((T) => /* @__PURE__ */ c.jsx(
          "line",
          {
            x1: 0,
            y1: T.start + te + ne,
            x2: C,
            y2: T.start + te + ne,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${T.key}`
        )),
        /* @__PURE__ */ c.jsx("rect", { x: 0, y: 0, width: C, height: ne, fill: "transparent" }),
        r.map((T) => /* @__PURE__ */ c.jsx(
          Tn,
          {
            milestone: T,
            x: Ke(T.date, w, f)
          },
          T.id
        )),
        /* @__PURE__ */ c.jsx(
          "line",
          {
            x1: 0,
            y1: ne,
            x2: C,
            y2: ne,
            stroke: de.grid,
            strokeWidth: 1
          }
        ),
        (y ? o : e.map((T, M) => ({ index: M, start: M * te, size: te, key: M }))).map((T) => {
          const M = e[T.index];
          if (!M) return null;
          const j = T.start + (te - Q) / 2 + ne;
          return /* @__PURE__ */ c.jsx(
            Sn,
            {
              task: M,
              y: j,
              minDate: w,
              pixelsPerDay: f,
              isMasterView: v,
              isDraggable: !v && !!i,
              dragInfo: q(M.id),
              onDragStart: W
            },
            T.key
          );
        })
      ] })
    ] }) });
  }
);
zt.displayName = "GanttTimeline";
const bt = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (u, f) => {
    const v = typeof u == "function" ? u(r) : u;
    if (!Object.is(v, r)) {
      const y = r;
      r = f ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), t.forEach((l) => l(r, y));
    }
  }, s = () => r, o = { setState: n, getState: s, getInitialState: () => h, subscribe: (u) => (t.add(u), () => t.delete(u)) }, h = r = e(n, s, o);
  return o;
}, Mn = (e) => e ? bt(e) : bt, On = (e) => e;
function Nn(e, r = On) {
  const t = Ee.useSyncExternalStore(
    e.subscribe,
    Ee.useCallback(() => r(e.getState()), [e, r]),
    Ee.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return Ee.useDebugValue(t), t;
}
const wt = (e) => {
  const r = Mn(e), t = (n) => Nn(r, n);
  return Object.assign(t, r), t;
}, jn = (e) => e ? wt(e) : wt, pt = (e) => Symbol.iterator in e, vt = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), Dt = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [s, a] of t)
    if (!n.has(s) || !Object.is(a, n.get(s)))
      return !1;
  return !0;
}, Pn = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let s = t.next(), a = n.next();
  for (; !s.done && !a.done; ) {
    if (!Object.is(s.value, a.value))
      return !1;
    s = t.next(), a = n.next();
  }
  return !!s.done && !!a.done;
};
function _n(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : pt(e) && pt(r) ? vt(e) && vt(r) ? Dt(e, r) : Pn(e, r) : Dt(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function We(e) {
  const r = Ee.useRef(void 0);
  return (t) => {
    const n = e(t);
    return _n(r.current, n) ? r.current : r.current = n;
  };
}
const Me = jn((e, r) => ({
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
      we.SIDEBAR_MIN_WIDTH,
      Math.min(t, we.SIDEBAR_MAX_WIDTH)
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
})), In = () => Me(
  We((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), Rn = () => Me(
  We((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), cs = () => Me(
  We((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), Cn = () => Me(
  We((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), An = () => Me(
  We((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), ls = () => Me(
  We((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function ke(e, r, t) {
  let n = t.initialDeps ?? [], s;
  function a() {
    var i, o, h, u;
    let f;
    t.key && ((i = t.debug) != null && i.call(t)) && (f = Date.now());
    const v = e();
    if (!(v.length !== n.length || v.some((x, w) => n[w] !== x)))
      return s;
    n = v;
    let l;
    if (t.key && ((o = t.debug) != null && o.call(t)) && (l = Date.now()), s = r(...v), t.key && ((h = t.debug) != null && h.call(t))) {
      const x = Math.round((Date.now() - f) * 100) / 100, w = Math.round((Date.now() - l) * 100) / 100, E = w / 16, C = (O, W) => {
        for (O = String(O); O.length < W; )
          O = " " + O;
        return O;
      };
      console.info(
        `%c⏱ ${C(w, 5)} /${C(x, 5)} ms`,
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
    return (u = t == null ? void 0 : t.onChange) == null || u.call(t, s), s;
  }
  return a.updateDeps = (i) => {
    n = i;
  }, a;
}
function kt(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const zn = (e, r) => Math.abs(e - r) < 1.01, Fn = (e, r, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, s), t);
  };
}, Et = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Ln = (e) => e, Yn = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let s = r; s <= t; s++)
    n.push(s);
  return n;
}, Hn = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: o, height: h } = i;
    r({ width: Math.round(o), height: Math.round(h) });
  };
  if (s(Et(t)), !n.ResizeObserver)
    return () => {
    };
  const a = new n.ResizeObserver((i) => {
    const o = () => {
      const h = i[0];
      if (h != null && h.borderBoxSize) {
        const u = h.borderBoxSize[0];
        if (u) {
          s({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      s(Et(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, Tt = {
  passive: !0
}, St = typeof window > "u" ? !0 : "onscrollend" in window, $n = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && St ? () => {
  } : Fn(
    n,
    () => {
      r(s, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (f) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    s = v ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, a(), r(s, f);
  }, o = i(!0), h = i(!1);
  h(), t.addEventListener("scroll", o, Tt);
  const u = e.options.useScrollendEvent && St;
  return u && t.addEventListener("scrollend", h, Tt), () => {
    t.removeEventListener("scroll", o), u && t.removeEventListener("scrollend", h);
  };
}, Gn = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Vn = (e, {
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
class qn {
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
        getItemKey: Ln,
        rangeExtractor: Yn,
        onChange: () => {
        },
        measureElement: Gn,
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
    }, this.maybeNotify = ke(
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
    }, this.getMeasurementOptions = ke(
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
    ), this.getMeasurements = ke(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: a, enabled: i }, o) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const h = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, h);
        for (let f = h; f < t; f++) {
          const v = a(f), y = this.options.lanes === 1 ? u[f - 1] : this.getFurthestMeasurement(u, f), l = y ? y.end + this.options.gap : n + s, x = o.get(v), w = typeof x == "number" ? x : this.options.estimateSize(f), E = l + w, C = y ? y.lane : f % this.options.lanes;
          u[f] = {
            index: f,
            start: l,
            size: w,
            end: E,
            key: v,
            lane: C
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = ke(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, a) => this.range = t.length > 0 && n > 0 ? Xn({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = ke(
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
      const i = a.key, o = this.elementsCache.get(i);
      o !== t && (o && this.observer.unobserve(o), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
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
    }, this.getVirtualItems = ke(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let a = 0, i = t.length; a < i; a++) {
          const o = t[a], h = n[o];
          s.push(h);
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
        return kt(
          n[Ft(
            0,
            n.length - 1,
            (s) => kt(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const a = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + a ? "end" : "start"), n === "center" ? t += (s - a) / 2 : n === "end" && (t -= a);
      const o = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(o, t), 0);
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
      const o = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(o, n, s.size),
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
      const i = 10, o = (u) => {
        if (!this.targetWindow) return;
        const f = this.getOffsetForIndex(t, u);
        if (!f) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [v, y] = f;
        this._scrollToOffset(v, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const l = this.getScrollOffset(), x = this.getOffsetForIndex(t, y);
          if (!x) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          zn(x[0], l) || h(y);
        });
      }, h = (u) => {
        this.targetWindow && (a++, a < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, i), this.targetWindow.requestAnimationFrame(() => o(u))) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
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
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && a.some((o) => o === null); ) {
          const o = n[i];
          a[o.lane] === null && (a[o.lane] = o.end), i--;
        }
        s = Math.max(...a.filter((o) => o !== null));
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
const Ft = (e, r, t, n) => {
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
function Xn({
  measurements: e,
  outerSize: r,
  scrollOffset: t,
  lanes: n
}) {
  const s = e.length - 1, a = (h) => e[h].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = Ft(
    0,
    s,
    a,
    t
  ), o = i;
  if (n === 1)
    for (; o < s && e[o].end < t + r; )
      o++;
  else if (n > 1) {
    const h = Array(n).fill(0);
    for (; o < s && h.some((f) => f < t + r); ) {
      const f = e[o];
      h[f.lane] = f.end, o++;
    }
    const u = Array(n).fill(t + r);
    for (; i >= 0 && u.some((f) => f >= t); ) {
      const f = e[i];
      u[f.lane] = f.start, i--;
    }
    i = Math.max(0, i - i % n), o = Math.min(s, o + (n - 1 - o % n));
  }
  return { startIndex: i, endIndex: o };
}
const Wt = typeof document < "u" ? Ye.useLayoutEffect : Ye.useEffect;
function Bn(e) {
  const r = Ye.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, a) => {
      var i;
      a ? Vt(r) : r(), (i = e.onChange) == null || i.call(e, s, a);
    }
  }, [n] = Ye.useState(
    () => new qn(t)
  );
  return n.setOptions(t), Wt(() => n._didMount(), []), Wt(() => n._willUpdate()), n;
}
function Un(e) {
  return Bn({
    observeElementRect: Hn,
    observeElementOffset: $n,
    scrollToFn: Vn,
    ...e
  });
}
const { ROW_HEIGHT: Qn } = we;
function Kn({
  containerRef: e,
  count: r,
  rowHeight: t = Qn,
  overscan: n = 5
}) {
  const s = Un({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  });
  return {
    /** 가상화된 행 목록 */
    virtualRows: xe(() => s.getVirtualItems().map((i) => ({
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
const Jn = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function ds({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = Jn,
  initialView: s = "MASTER",
  initialZoomLevel: a = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: i,
  onTaskUpdate: o,
  onTaskCreate: h,
  onTaskReorder: u,
  onViewChange: f,
  className: v,
  style: y
}) {
  const { viewMode: l, activeCPId: x, zoomLevel: w } = In(), { setViewMode: E, setZoomLevel: C } = Rn(), { sidebarWidth: O, setSidebarWidth: W } = An(), { expandedTaskIds: L, toggleTask: B, expandAll: q } = Cn(), T = ye(null), M = ye(null), j = ye(null), N = ye(!1), A = ye(!1), [H, $] = re(!1), K = ye(!1);
  Ie(() => {
    K.current || (K.current = !0, E(s), C(a), i && i.length > 0 ? q(i) : e.length > 0 && q(e.map((p) => p.id)));
  }, [e.length]);
  const ae = xe(() => {
    if (l === "MASTER") {
      const p = [];
      return e.forEach((S) => {
        (S.wbsLevel === 1 && !S.parentId || S.wbsLevel === 1 && S.parentId && L.has(S.parentId)) && p.push(S);
      }), p;
    } else
      return e.filter((p) => p.wbsLevel === 2 && p.parentId === x);
  }, [e, l, x, L]), { virtualRows: ie, totalHeight: oe } = Kn({
    containerRef: j,
    count: ae.length
  });
  Ie(() => {
    const p = M.current, S = j.current;
    if (!p || !S) return;
    const G = () => {
      N.current || (N.current = !0, S.scrollTop = p.scrollTop, requestAnimationFrame(() => {
        N.current = !1;
      }));
    }, X = () => {
      N.current || (N.current = !0, p.scrollTop = S.scrollTop, requestAnimationFrame(() => {
        N.current = !1;
      }));
    };
    return p.addEventListener("scroll", G), S.addEventListener("scroll", X), () => {
      p.removeEventListener("scroll", G), S.removeEventListener("scroll", X);
    };
  }, []);
  const [ee, J] = re(null), ce = z((p) => {
    p.preventDefault(), A.current = !0, $(!0);
    const S = p.clientX, G = O, X = (Oe) => {
      if (!A.current) return;
      const ve = Oe.clientX - S;
      W(G + ve);
    }, fe = () => {
      A.current = !1, $(!1), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", fe);
    };
    document.addEventListener("mousemove", X), document.addEventListener("mouseup", fe);
  }, [O, W]), d = z(() => {
    W(ee !== null ? ee : we.SIDEBAR_WIDTH);
  }, [ee, W]), b = z((p, S) => {
    E(p, S), f == null || f(p, S);
  }, [E, f]), R = z((p) => {
    const S = j.current;
    if (!S) return;
    const G = $e[w].pixelsPerDay, { minDate: X } = At(e, r, 60), fe = Ke(p, X, G);
    S.scrollLeft = Math.max(0, fe - 50);
  }, [w, e, r]), _ = z(() => {
    if (l !== "DETAIL" || !x) return;
    const p = e.filter((S) => S.parentId === x);
    if (p.length > 0) {
      const S = p.reduce(
        (G, X) => G.startDate < X.startDate ? G : X
      );
      R(S.startDate);
    }
  }, [l, x, e, R]), he = z((p) => {
    l === "MASTER" && p.type === "CP" && b("DETAIL", p.id);
  }, [l, b]);
  Ie(() => {
    if (l === "DETAIL" && x) {
      const p = setTimeout(() => {
        _();
      }, 100);
      return () => clearTimeout(p);
    }
  }, [l, x]);
  const le = z((p) => {
    if (!o) return;
    const S = e.find((X) => X.id === p.taskId);
    if (!S || !S.task) return;
    const G = {
      ...S,
      startDate: p.newStartDate,
      endDate: p.newEndDate,
      task: {
        ...S.task,
        indirectWorkDaysPre: p.newIndirectWorkDaysPre,
        indirectWorkDaysPost: p.newIndirectWorkDaysPost
      }
    };
    o(G);
  }, [e, o]);
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: T,
      className: `flex h-full w-full flex-col bg-gray-50 ${v || ""}`,
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
            /* @__PURE__ */ c.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (l === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((p) => /* @__PURE__ */ c.jsx(
              "button",
              {
                onClick: () => C(p),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${w === p ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: $e[p].label
              },
              p
            )) }),
            /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              se(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: O },
              children: /* @__PURE__ */ c.jsx(
                Ct,
                {
                  ref: M,
                  tasks: ae,
                  allTasks: e,
                  viewMode: l,
                  expandedIds: L,
                  onToggle: B,
                  onTaskClick: he,
                  onBackToMaster: () => b("MASTER"),
                  onTaskUpdate: o,
                  onTaskCreate: h,
                  onTaskReorder: u,
                  onScrollToFirstTask: _,
                  activeCPId: x,
                  virtualRows: ie,
                  totalHeight: oe,
                  onTotalWidthChange: J
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${H ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: ce,
              onDoubleClick: d,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ c.jsx(
            zt,
            {
              ref: j,
              tasks: ae,
              milestones: r,
              viewMode: l,
              zoomLevel: w,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: o,
              onBarDrag: le,
              virtualRows: ie,
              totalHeight: oe
            }
          ) }),
          H && /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] })
      ]
    }
  );
}
export {
  de as GANTT_COLORS,
  we as GANTT_LAYOUT,
  ds as GanttChart,
  Ct as GanttSidebar,
  zt as GanttTimeline,
  $e as ZOOM_CONFIG,
  xt as addCalendarDays,
  vn as addWorkingDays,
  At as calculateDateRange,
  ns as calculateDualCalendarDates,
  Ke as dateToX,
  ss as getAnchorDate,
  is as getDateRangeWidth,
  os as getPixelsPerDay,
  Te as isHoliday,
  ts as isWeekend,
  rs as subtractWorkingDays,
  ls as useGanttDrag,
  Cn as useGanttExpansion,
  cs as useGanttSelection,
  An as useGanttSidebar,
  Me as useGanttStore,
  Rn as useGanttViewActions,
  In as useGanttViewState,
  Kn as useGanttVirtualization,
  as as xToDate
};
