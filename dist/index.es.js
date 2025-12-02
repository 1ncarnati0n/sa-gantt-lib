"use client";
import * as Ve from "react";
import Te, { forwardRef as Be, createElement as rt, useState as re, useRef as pe, useMemo as we, useEffect as De, useCallback as C } from "react";
import { flushSync as sr } from "react-dom";
var nt = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function ar() {
  if (xt) return Ce;
  xt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var l in s)
        l !== "key" && (a[l] = s[l]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return Ce.Fragment = r, Ce.jsx = t, Ce.jsxs = t, Ce;
}
var Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function ir() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === H ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case k:
          return "Fragment";
        case T:
          return "Profiler";
        case R:
          return "StrictMode";
        case J:
          return "Suspense";
        case W:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case x:
            return "Portal";
          case U:
            return u.displayName || "Context";
          case q:
            return (u._context.displayName || "Context") + ".Consumer";
          case O:
            var S = u.render;
            return u = u.displayName, u || (u = S.displayName || S.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case E:
            return S = u.displayName || null, S !== null ? S : e(u.type) || "Memo";
          case A:
            S = u._payload, u = u._init;
            try {
              return e(u(S));
            } catch {
            }
        }
      return null;
    }
    function r(u) {
      return "" + u;
    }
    function t(u) {
      try {
        r(u);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var Y = S.error, F = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return Y.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), r(u);
      }
    }
    function n(u) {
      if (u === k) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === A)
        return "<...>";
      try {
        var S = e(u);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = P.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (L.call(u, "key")) {
        var S = Object.getOwnPropertyDescriptor(u, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, S) {
      function Y() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: Y,
        configurable: !0
      });
    }
    function m() {
      var u = e(this.type);
      return he[u] || (he[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, S, Y, F, ie, oe) {
      var _ = Y.ref;
      return u = {
        $$typeof: b,
        type: u,
        key: S,
        props: Y,
        _owner: F
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(u, "ref", {
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
        value: ie
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function g(u, S, Y, F, ie, oe) {
      var _ = S.children;
      if (_ !== void 0)
        if (F)
          if (N(_)) {
            for (F = 0; F < _.length; F++)
              v(_[F]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(_);
      if (L.call(S, "key")) {
        _ = e(u);
        var se = Object.keys(S).filter(function(p) {
          return p !== "key";
        });
        F = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", ye[_ + F] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          _,
          se,
          _
        ), ye[_ + F] = !0);
      }
      if (_ = null, Y !== void 0 && (t(Y), _ = "" + Y), i(S) && (t(S.key), _ = "" + S.key), "key" in S) {
        Y = {};
        for (var D in S)
          D !== "key" && (Y[D] = S[D]);
      } else Y = S;
      return _ && l(
        Y,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        _,
        Y,
        s(),
        ie,
        oe
      );
    }
    function v(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === A && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === b;
    }
    var d = Te, b = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), U = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), P = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, N = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var ce, he = {}, ee = d.react_stack_bottom_frame.bind(
      d,
      a
    )(), ne = Z(n(a)), ye = {};
    Ie.Fragment = k, Ie.jsx = function(u, S, Y) {
      var F = 1e4 > P.recentlyCreatedOwnerStacks++;
      return g(
        u,
        S,
        Y,
        !1,
        F ? Error("react-stack-top-frame") : ee,
        F ? Z(n(u)) : ne
      );
    }, Ie.jsxs = function(u, S, Y) {
      var F = 1e4 > P.recentlyCreatedOwnerStacks++;
      return g(
        u,
        S,
        Y,
        !0,
        F ? Error("react-stack-top-frame") : ee,
        F ? Z(n(u)) : ne
      );
    };
  }()), Ie;
}
process.env.NODE_ENV === "production" ? nt.exports = ar() : nt.exports = ir();
var o = nt.exports;
const Gt = 6048e5, or = 864e5, pt = Symbol.for("constructDateFrom");
function ge(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && pt in e ? e[pt](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Q(e, r) {
  return ge(r || e, e);
}
function V(e, r, t) {
  const n = Q(e, t == null ? void 0 : t.in);
  return isNaN(r) ? ge(e, NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Vt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 6;
}
function qt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay() === 0;
}
let lr = {};
function Le() {
  return lr;
}
function Ee(e, r) {
  var l, m, f, g;
  const t = Le(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((m = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : m.weekStartsOn) ?? t.weekStartsOn ?? ((g = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : g.weekStartsOn) ?? 0, s = Q(e, r == null ? void 0 : r.in), a = s.getDay(), i = (a < n ? 7 : 0) + a - n;
  return s.setDate(s.getDate() - i), s.setHours(0, 0, 0, 0), s;
}
function qe(e, r) {
  return Ee(e, { ...r, weekStartsOn: 1 });
}
function Xt(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = ge(t, 0);
  s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
  const a = qe(s), i = ge(t, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const l = qe(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function wt(e) {
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
function Fe(e, ...r) {
  const t = ge.bind(
    null,
    e || r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function ze(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Bt(e, r, t) {
  const [n, s] = Fe(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = ze(n), i = ze(s), l = +a - wt(a), m = +i - wt(i);
  return Math.round((l - m) / or);
}
function cr(e, r) {
  const t = Xt(e, r), n = ge(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), qe(n);
}
function dr(e, r, t) {
  const [n, s] = Fe(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +ze(n) == +ze(s);
}
function ur(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function hr(e) {
  return !(!ur(e) && typeof e != "number" || isNaN(+Q(e)));
}
function st(e, r, t) {
  const [n, s] = Fe(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = vt(n, s), i = Math.abs(
    Bt(n, s)
  );
  n.setDate(n.getDate() - a * i);
  const l = +(vt(n, s) === -a), m = a * (i - l);
  return m === 0 ? 0 : m;
}
function vt(e, r) {
  const t = e.getFullYear() - r.getFullYear() || e.getMonth() - r.getMonth() || e.getDate() - r.getDate() || e.getHours() - r.getHours() || e.getMinutes() - r.getMinutes() || e.getSeconds() - r.getSeconds() || e.getMilliseconds() - r.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function fr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function mr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const gr = {
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
}, yr = (e, r, t) => {
  let n;
  const s = gr[e];
  return typeof s == "string" ? n = s : r === 1 ? n = s.one : n = s.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function et(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const xr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, br = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, pr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wr = {
  date: et({
    formats: xr,
    defaultWidth: "full"
  }),
  time: et({
    formats: br,
    defaultWidth: "full"
  }),
  dateTime: et({
    formats: pr,
    defaultWidth: "full"
  })
}, vr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dr = (e, r, t, n) => vr[e];
function Re(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let s;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : i;
      s = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      s = e.values[l] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return s[a];
  };
}
const kr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Er = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Mr = {
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
}, Sr = {
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
}, Wr = {
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
}, Tr = {
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
}, jr = (e, r) => {
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
}, Or = {
  ordinalNumber: jr,
  era: Re({
    values: kr,
    defaultWidth: "wide"
  }),
  quarter: Re({
    values: Er,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Re({
    values: Mr,
    defaultWidth: "wide"
  }),
  day: Re({
    values: Sr,
    defaultWidth: "wide"
  }),
  dayPeriod: Re({
    values: Wr,
    defaultWidth: "wide",
    formattingValues: Tr,
    defaultFormattingWidth: "wide"
  })
};
function Ae(e) {
  return (r, t = {}) => {
    const n = t.width, s = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(s);
    if (!a)
      return null;
    const i = a[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(l) ? Pr(l, (v) => v.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Nr(l, (v) => v.test(i))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(m) : m, f = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(f)
    ) : f;
    const g = r.slice(i.length);
    return { value: f, rest: g };
  };
}
function Nr(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function Pr(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function _r(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const s = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const l = r.slice(s.length);
    return { value: i, rest: l };
  };
}
const Cr = /^(\d+)(th|st|nd|rd)?/i, Ir = /\d+/i, Rr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ar = {
  any: [/^b/i, /^(a|c)/i]
}, zr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Lr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Fr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hr = {
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
}, Yr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $r = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Gr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Vr = {
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
}, qr = {
  ordinalNumber: _r({
    matchPattern: Cr,
    parsePattern: Ir,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ae({
    matchPatterns: Rr,
    defaultMatchWidth: "wide",
    parsePatterns: Ar,
    defaultParseWidth: "any"
  }),
  quarter: Ae({
    matchPatterns: zr,
    defaultMatchWidth: "wide",
    parsePatterns: Lr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ae({
    matchPatterns: Fr,
    defaultMatchWidth: "wide",
    parsePatterns: Hr,
    defaultParseWidth: "any"
  }),
  day: Ae({
    matchPatterns: Yr,
    defaultMatchWidth: "wide",
    parsePatterns: $r,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ae({
    matchPatterns: Gr,
    defaultMatchWidth: "any",
    parsePatterns: Vr,
    defaultParseWidth: "any"
  })
}, Xr = {
  code: "en-US",
  formatDistance: yr,
  formatLong: wr,
  formatRelative: Dr,
  localize: Or,
  match: qr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Br(e, r) {
  const t = Q(e, r == null ? void 0 : r.in);
  return Bt(t, mr(t)) + 1;
}
function Ur(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +qe(t) - +cr(t);
  return Math.round(n / Gt) + 1;
}
function Ut(e, r) {
  var g, v, y, d;
  const t = Q(e, r == null ? void 0 : r.in), n = t.getFullYear(), s = Le(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((v = (g = r == null ? void 0 : r.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((d = (y = s.locale) == null ? void 0 : y.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = ge((r == null ? void 0 : r.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const l = Ee(i, r), m = ge((r == null ? void 0 : r.in) || e, 0);
  m.setFullYear(n, 0, a), m.setHours(0, 0, 0, 0);
  const f = Ee(m, r);
  return +t >= +l ? n + 1 : +t >= +f ? n : n - 1;
}
function Kr(e, r) {
  var l, m, f, g;
  const t = Le(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((m = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((g = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Ut(e, r), a = ge((r == null ? void 0 : r.in) || e, 0);
  return a.setFullYear(s, 0, n), a.setHours(0, 0, 0, 0), Ee(a, r);
}
function Qr(e, r) {
  const t = Q(e, r == null ? void 0 : r.in), n = +Ee(t, r) - +Kr(t, r);
  return Math.round(n / Gt) + 1;
}
function I(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const xe = {
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
}, Se = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Dt = {
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
    return xe.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const s = Ut(e, n), a = s > 0 ? s : 1 - s;
    if (r === "YY") {
      const i = a % 100;
      return I(i, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : I(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = Xt(e);
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
        return xe.M(e, r);
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
    const s = Qr(e, n);
    return r === "wo" ? t.ordinalNumber(s, { unit: "week" }) : I(s, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = Ur(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : I(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : xe.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Br(e);
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
    switch (n === 12 ? s = Se.noon : n === 0 ? s = Se.midnight : s = n / 12 >= 1 ? "pm" : "am", r) {
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
    switch (n >= 17 ? s = Se.evening : n >= 12 ? s = Se.afternoon : n >= 4 ? s = Se.morning : s = Se.night, r) {
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
    return xe.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : xe.H(e, r);
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
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : xe.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : xe.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return xe.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return Et(n);
      case "XXXX":
      case "XX":
        return ve(n);
      case "XXXXX":
      case "XXX":
      default:
        return ve(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return Et(n);
      case "xxxx":
      case "xx":
        return ve(n);
      case "xxxxx":
      case "xxx":
      default:
        return ve(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + kt(n, ":");
      case "OOOO":
      default:
        return "GMT" + ve(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + kt(n, ":");
      case "zzzz":
      default:
        return "GMT" + ve(n, ":");
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
function kt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(s) : t + String(s) + r + I(a, 2);
}
function Et(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + I(Math.abs(e) / 60, 2) : ve(e, r);
}
function ve(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), s = I(Math.trunc(n / 60), 2), a = I(n % 60, 2);
  return t + s + r + a;
}
const Mt = (e, r) => {
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
}, Kt = (e, r) => {
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
}, Jr = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], s = t[2];
  if (!s)
    return Mt(e, r);
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
  return a.replace("{{date}}", Mt(n, r)).replace("{{time}}", Kt(s, r));
}, Zr = {
  p: Kt,
  P: Jr
}, en = /^D+$/, tn = /^Y+$/, rn = ["D", "DD", "YY", "YYYY"];
function nn(e) {
  return en.test(e);
}
function sn(e) {
  return tn.test(e);
}
function an(e, r, t) {
  const n = on(e, r, t);
  if (console.warn(n), rn.includes(e)) throw new RangeError(n);
}
function on(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ln = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, cn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, dn = /^'([^]*?)'?$/, un = /''/g, hn = /[a-zA-Z]/;
function ue(e, r, t) {
  var g, v, y, d;
  const n = Le(), s = n.locale ?? Xr, a = n.firstWeekContainsDate ?? ((v = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = n.weekStartsOn ?? ((d = (y = n.locale) == null ? void 0 : y.options) == null ? void 0 : d.weekStartsOn) ?? 0, l = Q(e, t == null ? void 0 : t.in);
  if (!hr(l))
    throw new RangeError("Invalid time value");
  let m = r.match(cn).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const k = Zr[x];
      return k(b, s.formatLong);
    }
    return b;
  }).join("").match(ln).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: fn(b) };
    if (Dt[x])
      return { isToken: !0, value: b };
    if (x.match(hn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: b };
  });
  s.localize.preprocessor && (m = s.localize.preprocessor(l, m));
  const f = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: s
  };
  return m.map((b) => {
    if (!b.isToken) return b.value;
    const x = b.value;
    (sn(x) || nn(x)) && an(x, r, String(e));
    const k = Dt[x[0]];
    return k(l, x, s.localize, f);
  }).join("");
}
function fn(e) {
  const r = e.match(dn);
  return r ? r[1].replace(un, "'") : e;
}
function mn(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDate();
}
function Ue(e, r) {
  return Q(e, r == null ? void 0 : r.in).getDay();
}
function St(e, r) {
  var m, f, g, v;
  const t = Le(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? t.weekStartsOn ?? ((v = (g = t.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = mn(Q(e, r == null ? void 0 : r.in));
  if (isNaN(s)) return NaN;
  const a = Ue(fr(e, r));
  let i = n - a;
  i <= 0 && (i += 7);
  const l = s - i;
  return Math.ceil(l / 7) + 1;
}
function tt(e, r) {
  return Q(e, r == null ? void 0 : r.in).getFullYear();
}
function gn(e, r, t) {
  const [n, s] = Fe(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +Ee(n, t) == +Ee(s, t);
}
function yn(e, r, t) {
  const [n, s] = Fe(
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
const xn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), bn = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), Wt = (e) => {
  const r = bn(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Qt = (...e) => e.filter((r, t, n) => !!r && r.trim() !== "" && n.indexOf(r) === t).join(" ").trim(), pn = (e) => {
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
var wn = {
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
const vn = Be(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...l
  }, m) => rt(
    "svg",
    {
      ref: m,
      ...wn,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: Qt("lucide", s),
      ...!a && !pn(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([f, g]) => rt(f, g)),
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
const Oe = (e, r) => {
  const t = Be(
    ({ className: n, ...s }, a) => rt(vn, {
      ref: a,
      iconNode: r,
      className: Qt(
        `lucide-${xn(Wt(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return t.displayName = Wt(e), t;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], kn = Oe("check", Dn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Mn = Oe("chevron-down", En);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Wn = Oe("chevron-right", Sn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], Tt = Oe("grip-vertical", Tn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], On = Oe("plus", jn);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Pn = Oe("x", Nn), me = {
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
}, ke = {
  ROW_HEIGHT: 40,
  HEADER_HEIGHT: 80,
  MILESTONE_LANE_HEIGHT: 40,
  BAR_HEIGHT: 24,
  SIDEBAR_WIDTH: 400,
  SIDEBAR_MIN_WIDTH: 250,
  SIDEBAR_MAX_WIDTH: 800
}, Xe = {
  DAY: { pixelsPerDay: 30, label: "일" },
  WEEK: { pixelsPerDay: 10, label: "주" },
  MONTH: { pixelsPerDay: 2, label: "월" }
}, { ROW_HEIGHT: be, HEADER_HEIGHT: jt, MILESTONE_LANE_HEIGHT: Ot } = ke, Nt = [
  { id: "name", label: "CP명", width: 180, minWidth: 100 },
  { id: "total", label: "총 공기", width: 80, minWidth: 50 },
  { id: "workDays", label: "작업일수", width: 80, minWidth: 50 },
  { id: "nonWorkDays", label: "비작업일수", width: 80, minWidth: 50 }
], Pt = [
  { id: "name", label: "단위공정명", width: 150, minWidth: 80 },
  { id: "indirectPre", label: "선간접", width: 60, minWidth: 45 },
  { id: "netWork", label: "순작업", width: 60, minWidth: 45 },
  { id: "indirectPost", label: "후간접", width: 60, minWidth: 45 },
  { id: "startDate", label: "시작일", width: 90, minWidth: 70 },
  { id: "endDate", label: "종료일", width: 90, minWidth: 70 }
], Ge = {
  name: "",
  indirectWorkDaysPre: 0,
  netWorkDays: 1,
  indirectWorkDaysPost: 0
}, Jt = Be(
  ({ tasks: e, allTasks: r, viewMode: t, expandedIds: n, onToggle: s, onTaskClick: a, onBackToMaster: i, onTaskUpdate: l, onTaskCreate: m, onTaskReorder: f, onScrollToFirstTask: g, activeCPId: v, virtualRows: y, totalHeight: d, onTotalWidthChange: b, onTaskGroup: x, onTaskUngroup: k }, R) => {
    const T = y && y.length > 0, [q, U] = re(!1), [O, J] = re(Ge), W = pe(null), [E, A] = re(null), [z, H] = re(null), [P, L] = re(null), [N, Z] = re(/* @__PURE__ */ new Set()), [ce, he] = re(null), [ee, ne] = re(null), [ye, u] = re(
      Nt.map((h) => h.width)
    ), [S, Y] = re(
      Pt.map((h) => h.width)
    ), [F, ie] = re(null), oe = pe(!1), _ = t === "MASTER" ? Nt : Pt, se = t === "MASTER" ? ye : S, D = t === "MASTER" ? u : Y, p = we(
      () => _.map((h, c) => ({
        ...h,
        width: se[c] ?? h.width
      })),
      [_, se]
    ), ae = f ? 24 : 0, K = p.reduce((h, c) => h + c.width, 0) + ae;
    De(() => {
      b && b(K);
    }, [K, b]);
    const Me = C((h, c) => {
      if (h.detail >= 2) return;
      h.preventDefault(), h.stopPropagation(), oe.current = !0, ie(c);
      const w = h.clientX, $ = se[c], X = _[c].minWidth, M = (G) => {
        if (!oe.current) return;
        const fe = G.clientX - w, B = Math.max(X, $ + fe);
        D((yt) => {
          const $e = [...yt];
          return $e[c] = B, $e;
        });
      }, j = () => {
        oe.current = !1, ie(null), document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", j);
      };
      document.addEventListener("mousemove", M), document.addEventListener("mouseup", j);
    }, [se, _, D]), _e = C((h, c = 12, w = "normal") => {
      const X = document.createElement("canvas").getContext("2d");
      return X ? (X.font = `${w} ${c}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`, X.measureText(h).width) : 0;
    }, []), He = C((h) => {
      const c = _[h].minWidth, w = h === 0, $ = w ? 48 : 20, X = _[h].label;
      let M = _e(X, 12, "500") + 16;
      return e.forEach((j) => {
        let G = "", fe = 0;
        if (t === "MASTER") {
          const Ze = j.type === "GROUP";
          switch (w && j.parentId && (fe = 20), h) {
            case 0:
              G = j.name;
              break;
            case 1:
              G = Ze ? "-" : j.cp ? `${j.cp.workDaysTotal + j.cp.nonWorkDaysTotal}일` : "-";
              break;
            case 2:
              G = Ze ? "-" : j.cp ? `${j.cp.workDaysTotal}일` : "-";
              break;
            case 3:
              G = Ze ? "-" : j.cp ? `${j.cp.nonWorkDaysTotal}일` : "-";
              break;
          }
        } else
          switch (h) {
            case 0:
              G = j.name;
              break;
            case 1:
              G = j.task ? String(j.task.indirectWorkDaysPre) : "-";
              break;
            case 2:
              G = j.task ? String(j.task.netWorkDays) : "-";
              break;
            case 3:
              G = j.task ? String(j.task.indirectWorkDaysPost) : "-";
              break;
            case 4:
              G = ue(j.startDate, "yyyy-MM-dd");
              break;
            case 5:
              G = ue(j.endDate, "yyyy-MM-dd");
              break;
          }
        const $e = _e(G, w ? 14 : 12, w ? "500" : "normal") + $ + fe;
        M = Math.max(M, $e);
      }), Math.max(c, Math.ceil(M));
    }, [e, t, _, _e]), rr = C((h, c) => {
      h.preventDefault(), h.stopPropagation(), oe.current = !1, ie(null);
      const w = He(c);
      D(($) => {
        const X = [...$];
        return X[c] = w, X;
      });
    }, [He, D]), Ke = C((h, c, w) => {
      if (!h.task || !l) return;
      const $ = {
        ...h,
        task: {
          ...h.task,
          [c]: w
        }
      };
      l($);
    }, [l]), nr = C(() => {
      U(!0), J(Ge), setTimeout(() => {
        var h;
        (h = W.current) == null || h.focus();
      }, 0);
    }, []), Qe = C(() => {
      U(!1), J(Ge);
    }, []), Je = C(() => {
      if (!O.name.trim() || !m || !v) return;
      const h = e[e.length - 1], c = h ? V(h.endDate, 1) : /* @__PURE__ */ new Date(), w = O.indirectWorkDaysPre + O.netWorkDays + O.indirectWorkDaysPost, $ = V(c, Math.max(w - 1, 0)), X = {
        id: `task-${Date.now()}`,
        // 임시 ID (서버에서 재할당 가능)
        parentId: v,
        wbsLevel: 2,
        type: "TASK",
        name: O.name.trim(),
        startDate: c,
        endDate: $,
        task: {
          netWorkDays: O.netWorkDays,
          indirectWorkDaysPre: O.indirectWorkDaysPre,
          indirectWorkDaysPost: O.indirectWorkDaysPost
        },
        dependencies: []
      };
      m(X), U(!1), J(Ge);
    }, [O, m, v, e]), Ye = C((h) => {
      h.key === "Enter" ? (h.preventDefault(), Je()) : h.key === "Escape" && (h.preventDefault(), Qe());
    }, [Je, Qe]), it = C((h, c) => {
      h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("text/plain", c), A(c);
      const w = document.createElement("div");
      w.style.opacity = "0", document.body.appendChild(w), h.dataTransfer.setDragImage(w, 0, 0), setTimeout(() => document.body.removeChild(w), 0);
    }, []), ot = C((h, c) => {
      if (h.preventDefault(), h.dataTransfer.dropEffect = "move", c === E) return;
      const w = h.currentTarget.getBoundingClientRect(), $ = w.top + w.height / 2, X = h.clientY < $ ? "before" : "after";
      H(c), L(X);
    }, [E]), lt = C(() => {
      H(null), L(null);
    }, []), ct = C((h, c) => {
      if (h.preventDefault(), !E || !f || E === c) {
        A(null), H(null), L(null);
        return;
      }
      const w = e.findIndex((X) => X.id === c), $ = P === "after" ? w + 1 : w;
      f(E, $), A(null), H(null), L(null);
    }, [E, P, f, e]), dt = C(() => {
      A(null), H(null), L(null);
    }, []), ut = C((h, c, w) => {
      if (E) return;
      const $ = h.ctrlKey || h.metaKey, X = h.shiftKey;
      if ($)
        Z((M) => {
          const j = new Set(M);
          return j.has(c.id) ? j.delete(c.id) : j.add(c.id), j;
        }), he(w);
      else if (X && ce !== null) {
        const M = Math.min(ce, w), j = Math.max(ce, w);
        Z((G) => {
          const fe = new Set(G);
          for (let B = M; B <= j; B++)
            e[B] && fe.add(e[B].id);
          return fe;
        });
      } else
        Z(/* @__PURE__ */ new Set([c.id])), he(w);
    }, [E, ce, e]), ht = C((h, c) => {
      h.preventDefault(), N.has(c.id) || Z(/* @__PURE__ */ new Set([c.id])), ne({
        x: h.clientX,
        y: h.clientY,
        taskId: c.id
      });
    }, [N]);
    De(() => {
      const h = () => {
        ne(null);
      };
      if (ee)
        return document.addEventListener("click", h), () => document.removeEventListener("click", h);
    }, [ee]);
    const ft = C(() => {
      N.size < 2 || !x || (x(Array.from(N)), Z(/* @__PURE__ */ new Set()), ne(null));
    }, [N, x]), mt = C(() => {
      if (N.size !== 1 || !k) return;
      const h = Array.from(N)[0], c = e.find((w) => w.id === h);
      (c == null ? void 0 : c.type) === "GROUP" && (k(h), Z(/* @__PURE__ */ new Set()), ne(null));
    }, [N, e, k]);
    De(() => {
      const h = (c) => {
        c.key === "Escape" && (Z(/* @__PURE__ */ new Set()), ne(null));
      };
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
    }, []);
    const gt = () => /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] border-t border-gray-200", children: p.map((h, c) => /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "relative flex shrink-0 items-center justify-center text-xs font-medium text-gray-600",
        style: { width: h.width },
        children: [
          h.label,
          c < p.length - 1 && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `absolute right-0 top-0 z-10 h-full w-[5px] cursor-col-resize transition-colors ${F === c ? "bg-blue-500" : "hover:bg-blue-300"}`,
              style: { transform: "translateX(50%)" },
              onMouseDown: (w) => Me(w, c),
              onDoubleClick: (w) => rr(w, c),
              title: "드래그하여 컬럼 너비 조절 / 더블클릭으로 내용에 맞게 자동 조절"
            }
          ),
          c < p.length - 1 && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 top-0 h-full w-px bg-gray-200" })
        ]
      },
      h.id
    )) });
    return t === "MASTER" ? /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: jt },
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 items-center px-4 font-bold text-gray-700", children: "공구 공정표 (Level 1)" }),
            gt()
          ]
        }
      ),
      F !== null && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ o.jsxs("div", { ref: R, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Ot, minWidth: K },
            children: p.map((h, c) => /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx(
          "div",
          {
            style: {
              minWidth: K,
              height: T ? d : void 0,
              position: "relative"
            },
            children: (T ? y : e.map((h, c) => ({ index: c, start: c * be, size: be, key: c }))).map((h) => {
              const c = e[h.index];
              if (!c) return null;
              const w = c.type === "GROUP", $ = w && r.some((B) => B.parentId === c.id), X = n.has(c.id), M = c.parentId ? 20 : 0, j = E === c.id, G = z === c.id, fe = N.has(c.id);
              return /* @__PURE__ */ o.jsxs(
                "div",
                {
                  draggable: !!f,
                  onDragStart: (B) => it(B, c.id),
                  onDragOver: (B) => ot(B, c.id),
                  onDragLeave: lt,
                  onDrop: (B) => ct(B, c.id),
                  onDragEnd: dt,
                  onClick: (B) => ut(B, c, h.index),
                  onContextMenu: (B) => ht(B, c),
                  className: `box-border flex items-center border-b transition-all duration-150 ${j ? "opacity-50 bg-blue-50" : G ? P === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : fe ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : w ? "bg-gray-50 border-gray-100 hover:bg-gray-100" : "border-gray-100 cursor-pointer hover:bg-blue-50 hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"}`,
                  style: {
                    height: be,
                    ...T ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${h.start}px)`
                    } : {}
                  },
                  onDoubleClick: () => !w && a(c),
                  title: w ? void 0 : "더블클릭하여 상세 공정표 보기",
                  children: [
                    f && /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                        style: { width: 24 },
                        children: /* @__PURE__ */ o.jsx(Tt, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                        style: { width: f ? p[0].width - 24 : p[0].width, paddingLeft: M + 8 },
                        children: [
                          $ ? /* @__PURE__ */ o.jsx(
                            "button",
                            {
                              onClick: (B) => {
                                B.stopPropagation(), s(c.id);
                              },
                              className: "mr-1 shrink-0 rounded p-1 text-gray-500 hover:bg-gray-200",
                              children: X ? /* @__PURE__ */ o.jsx(Mn, { size: 14 }) : /* @__PURE__ */ o.jsx(Wn, { size: 14 })
                            }
                          ) : /* @__PURE__ */ o.jsx("div", { className: "w-6 shrink-0" }),
                          /* @__PURE__ */ o.jsx(
                            "span",
                            {
                              className: `truncate text-sm ${w ? "font-bold text-gray-700" : "font-medium text-gray-800"}`,
                              children: c.name
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-gray-500",
                        style: { width: p[1].width },
                        children: w ? "-" : c.cp ? `${c.cp.workDaysTotal + c.cp.nonWorkDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-gray-100 text-xs text-vermilion",
                        style: { width: p[2].width },
                        children: w ? "-" : c.cp ? `${c.cp.workDaysTotal}일` : "-"
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center text-xs text-teal",
                        style: { width: p[3].width },
                        children: w ? "-" : c.cp ? `${c.cp.nonWorkDaysTotal}일` : "-"
                      }
                    )
                  ]
                },
                h.key
              );
            })
          }
        )
      ] }),
      ee && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
          style: { left: ee.x, top: ee.y },
          onClick: (h) => h.stopPropagation(),
          children: [
            N.size >= 2 && x && /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: ft,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
                  "그룹화 (",
                  N.size,
                  "개 선택됨)"
                ]
              }
            ),
            N.size === 1 && k && (() => {
              const h = Array.from(N)[0], c = e.find((w) => w.id === h);
              return (c == null ? void 0 : c.type) === "GROUP";
            })() && /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: mt,
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
                  Z(/* @__PURE__ */ new Set()), ne(null);
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
      )
    ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex h-full flex-col bg-white select-none", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex flex-col border-b border-gray-300 bg-gray-50",
          style: { height: jt },
          children: [
            /* @__PURE__ */ o.jsxs("div", { className: "flex flex-1 items-center justify-between px-4", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o.jsx("span", { className: "font-bold text-gray-700", children: "주공정표 (Level 2)" }),
                g && /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: g,
                    className: "flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors",
                    title: "첫 번째 작업으로 스크롤",
                    children: "◀ 첫 작업"
                  }
                ),
                m && !q && /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: nr,
                    className: "flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors",
                    title: "새 공정 추가",
                    children: [
                      /* @__PURE__ */ o.jsx(On, { size: 12 }),
                      "추가"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: i,
                  className: "rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300",
                  children: "← 공구 공정표로"
                }
              )
            ] }),
            gt()
          ]
        }
      ),
      F !== null && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" }),
      /* @__PURE__ */ o.jsxs("div", { ref: R, className: "relative flex-1 overflow-auto", children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex items-center border-b border-gray-200 bg-gray-50/50",
            style: { height: Ot, minWidth: K },
            children: p.map((h, c) => /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            style: {
              minWidth: K,
              height: T ? d : void 0,
              position: "relative"
            },
            children: [
              (T ? y : e.map((h, c) => ({ index: c, start: c * be, size: be, key: c }))).map((h) => {
                const c = e[h.index];
                if (!c) return null;
                const w = E === c.id, $ = z === c.id, X = N.has(c.id);
                return /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    draggable: !!f,
                    onDragStart: (M) => it(M, c.id),
                    onDragOver: (M) => ot(M, c.id),
                    onDragLeave: lt,
                    onDrop: (M) => ct(M, c.id),
                    onDragEnd: dt,
                    onClick: (M) => ut(M, c, h.index),
                    onContextMenu: (M) => ht(M, c),
                    className: `box-border flex items-center border-b transition-colors ${w ? "opacity-50 bg-blue-50" : $ ? P === "before" ? "border-t-2 border-t-blue-500 border-b-gray-100" : "border-b-2 border-b-blue-500" : X ? "bg-blue-100 border-gray-100 shadow-[inset_0_0_0_2px_rgba(59,130,246,0.5)]" : "border-gray-100 hover:bg-gray-50"}`,
                    style: {
                      height: be,
                      ...T ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${h.start}px)`
                      } : {}
                    },
                    children: [
                      f && /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600",
                          style: { width: 24 },
                          children: /* @__PURE__ */ o.jsx(Tt, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center overflow-hidden border-r border-gray-100 px-2",
                          style: { width: f ? p[0].width - 24 : p[0].width },
                          children: /* @__PURE__ */ o.jsx("span", { className: "truncate text-sm text-gray-700", children: c.name })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center border-r border-gray-100 px-1",
                          style: { width: p[1].width },
                          children: c.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPre,
                              onChange: (M) => {
                                const j = M.target.value.replace(/[^0-9]/g, ""), G = parseInt(j) || 0;
                                Ke(c, "indirectWorkDaysPre", G);
                              },
                              onKeyDown: (M) => {
                                (M.key === "-" || M.key === "e" || M.key === "+" || M.key === ".") && M.preventDefault();
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
                          style: { width: p[2].width },
                          children: c.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-red-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500",
                              value: c.task.netWorkDays,
                              onChange: (M) => {
                                const j = M.target.value.replace(/[^0-9]/g, ""), G = parseInt(j) || 0;
                                Ke(c, "netWorkDays", G);
                              },
                              onKeyDown: (M) => {
                                (M.key === "-" || M.key === "e" || M.key === "+" || M.key === ".") && M.preventDefault();
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
                          style: { width: p[3].width },
                          children: c.task ? /* @__PURE__ */ o.jsx(
                            "input",
                            {
                              type: "text",
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              className: "w-full max-w-[45px] rounded border border-gray-300 bg-blue-50 px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                              value: c.task.indirectWorkDaysPost,
                              onChange: (M) => {
                                const j = M.target.value.replace(/[^0-9]/g, ""), G = parseInt(j) || 0;
                                Ke(c, "indirectWorkDaysPost", G);
                              },
                              onKeyDown: (M) => {
                                (M.key === "-" || M.key === "e" || M.key === "+" || M.key === ".") && M.preventDefault();
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
                          style: { width: p[4].width },
                          children: ue(c.startDate, "yyyy-MM-dd")
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "flex shrink-0 items-center justify-center text-xs text-gray-500",
                          style: { width: p[5].width },
                          children: ue(c.endDate, "yyyy-MM-dd")
                        }
                      )
                    ]
                  },
                  h.key
                );
              }),
              q && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: "box-border flex items-center border-b-2 border-blue-300 bg-blue-50 transition-colors",
                  style: {
                    height: be,
                    ...T ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${e.length * be}px)`
                    } : {}
                  },
                  children: [
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center overflow-hidden border-r border-blue-200 px-2",
                        style: { width: p[0].width },
                        children: /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            ref: W,
                            type: "text",
                            placeholder: "공정명...",
                            className: "w-full rounded border border-blue-300 bg-white px-2 py-1 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: O.name,
                            onChange: (h) => J((c) => ({ ...c, name: h.target.value })),
                            onKeyDown: Ye
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: p[1].width },
                        children: /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: O.indirectWorkDaysPre,
                            onChange: (h) => {
                              const c = h.target.value.replace(/[^0-9]/g, ""), w = parseInt(c) || 0;
                              J(($) => ({ ...$, indirectWorkDaysPre: w }));
                            },
                            onKeyDown: Ye,
                            title: "선 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: p[2].width },
                        children: /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: O.netWorkDays,
                            onChange: (h) => {
                              const c = h.target.value.replace(/[^0-9]/g, ""), w = parseInt(c) || 0;
                              J(($) => ({ ...$, netWorkDays: w }));
                            },
                            onKeyDown: Ye,
                            title: "순작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center border-r border-blue-200 px-1",
                        style: { width: p[3].width },
                        children: /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            className: "w-full max-w-[40px] rounded border border-blue-300 bg-white px-1 py-1 text-center text-xs text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            value: O.indirectWorkDaysPost,
                            onChange: (h) => {
                              const c = h.target.value.replace(/[^0-9]/g, ""), w = parseInt(c) || 0;
                              J(($) => ({ ...$, indirectWorkDaysPost: w }));
                            },
                            onKeyDown: Ye,
                            title: "후 간접작업일"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        className: "flex shrink-0 items-center justify-center gap-1 px-2",
                        style: { width: p[4].width + p[5].width },
                        children: [
                          /* @__PURE__ */ o.jsx(
                            "button",
                            {
                              onClick: Je,
                              disabled: !O.name.trim(),
                              className: "flex items-center justify-center rounded bg-blue-500 p-1.5 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                              title: "저장 (Enter)",
                              children: /* @__PURE__ */ o.jsx(kn, { size: 14 })
                            }
                          ),
                          /* @__PURE__ */ o.jsx(
                            "button",
                            {
                              onClick: Qe,
                              className: "flex items-center justify-center rounded bg-gray-400 p-1.5 text-white hover:bg-gray-500 transition-colors",
                              title: "취소 (Esc)",
                              children: /* @__PURE__ */ o.jsx(Pn, { size: 14 })
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
      ] }),
      ee && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "fixed z-[100] min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
          style: { left: ee.x, top: ee.y },
          onClick: (h) => h.stopPropagation(),
          children: [
            N.size >= 2 && x && /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: ft,
                className: "flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ o.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }) }),
                  "그룹화 (",
                  N.size,
                  "개 선택됨)"
                ]
              }
            ),
            N.size === 1 && k && (() => {
              const h = Array.from(N)[0], c = e.find((w) => w.id === h);
              return (c == null ? void 0 : c.type) === "GROUP";
            })() && /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: mt,
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
                  Z(/* @__PURE__ */ new Set()), ne(null);
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
      )
    ] });
  }
);
Jt.displayName = "GanttSidebar";
const je = (e, r = [], t) => !!(!t.workOnSaturdays && Vt(e) || !t.workOnSundays && qt(e) || !t.workOnHolidays && r.some((n) => dr(n, e))), fs = (e) => Vt(e) || qt(e), _n = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; je(s, t, n); )
    s = V(s, 1);
  for (; a < r; )
    je(s, t, n) || a++, a < r && (s = V(s, 1));
  return s;
}, ms = (e, r, t = [], n) => {
  let s = new Date(e), a = 0;
  if (r <= 0) return s;
  for (; a < r; )
    s = V(s, -1), je(s, t, n) || a++;
  return s;
}, _t = (e, r) => r <= 0 ? e : V(e, r - 1), gs = (e, r = [], t) => {
  if (!e.task)
    return {
      startDate: e.startDate,
      endDate: e.endDate,
      netWorkStartDate: e.startDate,
      netWorkEndDate: e.endDate
    };
  const { netWorkDays: n, indirectWorkDaysPre: s, indirectWorkDaysPost: a } = e.task, i = ze(new Date(e.startDate));
  let l = i, m, f;
  s > 0 && (m = l, f = _t(l, s), l = V(f, 1));
  let g = l, v = g;
  if (n > 0) {
    for (; je(g, r, t); )
      g = V(g, 1);
    v = _n(g, n, r, t), l = V(v, 1);
  } else s === 0 && (g = i, v = i);
  let y, d;
  return a > 0 && (y = l, d = _t(l, a)), {
    startDate: m || g,
    endDate: d || v,
    netWorkStartDate: g,
    netWorkEndDate: v,
    indirectPreStartDate: m,
    indirectPreEndDate: f,
    indirectPostStartDate: y,
    indirectPostEndDate: d
  };
}, ys = (e, r, t) => {
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
}, at = (e, r, t) => st(e, r) * t, xs = (e, r, t) => {
  const n = Math.round(e / t);
  return V(r, n);
}, bs = (e, r, t) => (st(r, e) + 1) * t, ps = (e) => Xe[e].pixelsPerDay, Zt = (e, r = [], t = 5) => {
  const n = [
    ...e.flatMap((f) => [f.startDate, f.endDate].filter(Boolean)),
    ...r.map((f) => f.date)
  ];
  if (n.length === 0) {
    const f = /* @__PURE__ */ new Date();
    return {
      minDate: f,
      maxDate: V(f, 30),
      totalDays: 30
    };
  }
  const s = new Date(Math.min(...n.map((f) => f.getTime()))), a = new Date(Math.max(...n.map((f) => f.getTime()))), i = V(s, -t), l = V(a, t), m = st(l, i);
  return {
    minDate: i,
    maxDate: l,
    totalDays: m
  };
}, { ROW_HEIGHT: le, HEADER_HEIGHT: Cn, MILESTONE_LANE_HEIGHT: de, BAR_HEIGHT: te } = ke, In = ({
  minDate: e,
  totalDays: r,
  pixelsPerDay: t,
  zoomLevel: n,
  holidays: s,
  calendarSettings: a
}) => {
  const i = Array.from({ length: r }, (y, d) => V(e, d)), l = r * t, m = we(() => {
    const y = [];
    let d = tt(i[0]), b = 0;
    return i.forEach((x) => {
      tt(x) !== d ? (y.push({ label: `${d}년`, days: b }), d = tt(x), b = 1) : b++;
    }), y.push({ label: `${d}년`, days: b }), y;
  }, [i]), f = we(() => {
    const y = [];
    let d = i[0], b = 0;
    return i.forEach((x) => {
      yn(x, d) ? b++ : (y.push({ label: ue(d, "M월"), days: b }), d = x, b = 1);
    }), y.push({ label: ue(d, "M월"), days: b }), y;
  }, [i]), g = we(() => {
    if (n === "MONTH")
      return null;
    if (n === "DAY")
      return /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: i.map((y, d) => {
        const b = Ue(y), x = je(y, s, a), k = b === 0, R = b === 6;
        let T = "text-gray-600";
        k && (T = "text-red-500"), R && (T = "text-blue-500"), x && !k && !R && (T = "text-red-500");
        let q = "";
        return k || x && !R ? q = "bg-red-50/50" : R && (q = "bg-blue-50/50"), /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `flex h-full shrink-0 flex-col items-center justify-center border-r border-gray-100 font-medium ${q}`,
            style: { width: t, minWidth: t },
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `text-[10px] leading-none ${T}`, children: ue(y, "d") }),
              /* @__PURE__ */ o.jsx("span", { className: `mt-0.5 text-[9px] font-bold leading-none ${T}`, children: ["일", "월", "화", "수", "목", "금", "토"][b] })
            ]
          },
          d
        );
      }) });
    {
      const y = [];
      let d = i[0], b = 0;
      return i.forEach((x) => {
        gn(x, d, { weekStartsOn: 0 }) ? b++ : (y.push({ label: `${St(d, { weekStartsOn: 0 })}주`, days: b }), d = x, b = 1);
      }), y.push({ label: `${St(d, { weekStartsOn: 0 })}주`, days: b }), /* @__PURE__ */ o.jsx("div", { className: "flex h-[32px] items-center bg-white", style: { minWidth: l }, children: y.map((x, k) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "flex h-full shrink-0 items-center justify-center border-r border-gray-100 text-xs font-medium text-gray-600",
          style: { width: x.days * t },
          children: x.label
        },
        k
      )) });
    }
  }, [i, n, t, s, a, l]), v = n === "MONTH";
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "sticky top-0 z-20 flex flex-col border-b border-gray-300 bg-white shadow-sm",
      style: { height: Cn, minWidth: l },
      children: v ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[48px] items-center border-b border-gray-300 bg-gray-100 text-sm font-bold text-gray-800",
            style: { minWidth: l },
            children: m.map((y, d) => /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[32px] items-center bg-white text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: f.map((y, d) => /* @__PURE__ */ o.jsx(
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
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-300 bg-gray-100 text-xs font-bold text-gray-800",
            style: { minWidth: l },
            children: m.map((y, d) => /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "flex h-[24px] items-center border-b border-gray-200 bg-gray-100 text-xs font-medium text-gray-700",
            style: { minWidth: l },
            children: f.map((y, d) => /* @__PURE__ */ o.jsx(
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
        g
      ] })
    }
  );
}, Rn = ({
  minDate: e,
  totalDays: r,
  chartHeight: t,
  pixelsPerDay: n,
  holidays: s,
  calendarSettings: a,
  zoomLevel: i
}) => {
  const l = we(() => {
    if (i === "MONTH") return [];
    const m = [];
    for (let f = 0; f < r; f++) {
      const g = V(e, f), v = Ue(g), y = v === 0, d = v === 6;
      if (je(g, s, a) || d) {
        const x = f * n;
        let k = "rgba(254, 242, 242, 0.5)";
        d && !y && (k = "rgba(239, 246, 255, 0.5)"), y && (k = "rgba(254, 242, 242, 0.5)"), m.push(
          /* @__PURE__ */ o.jsx(
            "rect",
            {
              x,
              y: 0,
              width: n,
              height: t,
              fill: k,
              className: "pointer-events-none"
            },
            `weekend-${f}`
          )
        );
      }
    }
    return m;
  }, [e, r, t, n, s, a, i]);
  return /* @__PURE__ */ o.jsx("g", { children: l });
}, An = ({ milestone: e, x: r }) => {
  const n = de / 2;
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
        className: "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "path",
      {
        d: `M ${-12 / 2} ${-12 / 2} L ${12 / 2} ${-12 / 2} L 0 ${12 / 2} Z`,
        fill: me.milestone,
        stroke: "white",
        strokeWidth: 1,
        className: "drop-shadow-sm transition-all duration-150 group-hover:scale-125 group-hover:fill-blue-600"
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
}, zn = ({
  task: e,
  y: r,
  minDate: t,
  pixelsPerDay: n,
  isMasterView: s,
  isDraggable: a = !1,
  dragInfo: i,
  onDragStart: l
}) => {
  var d, b;
  if (e.type === "GROUP") return null;
  const m = 4, f = !!i, g = (i == null ? void 0 : i.startDate) || e.startDate, v = (i == null ? void 0 : i.endDate) || e.endDate, y = at(g, t, n);
  if (s) {
    const x = ((d = e.cp) == null ? void 0 : d.workDaysTotal) || 0, k = ((b = e.cp) == null ? void 0 : b.nonWorkDaysTotal) || 0;
    if (x + k === 0) return null;
    const T = x * n, q = k * n;
    return /* @__PURE__ */ o.jsxs("g", { transform: `translate(${y}, ${r})`, className: "group cursor-pointer", children: [
      /* @__PURE__ */ o.jsx(
        "rect",
        {
          x: 0,
          y: 0,
          width: T,
          height: te,
          fill: me.vermilion,
          rx: m,
          ry: m,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "rect",
        {
          x: T,
          y: 0,
          width: q,
          height: te,
          fill: me.teal,
          rx: m,
          ry: m,
          className: "drop-shadow-sm opacity-90 transition-opacity hover:opacity-100"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "text",
        {
          x: -8,
          y: te / 2 + 4,
          textAnchor: "end",
          className: "pointer-events-none select-none text-[11px] font-bold fill-gray-700",
          children: e.name
        }
      )
    ] });
  } else {
    if (!e.task) return null;
    const { netWorkDays: x, indirectWorkDaysPre: k, indirectWorkDaysPost: R } = e.task, T = (i == null ? void 0 : i.indirectWorkDaysPre) ?? k, q = (i == null ? void 0 : i.indirectWorkDaysPost) ?? R, U = T * n, O = x * n, J = q * n, W = U + O + J, E = 0, A = U, z = U + O, H = 8, P = {
      startDate: g,
      endDate: v,
      indirectWorkDaysPre: T,
      netWorkDays: x,
      indirectWorkDaysPost: q
    };
    return /* @__PURE__ */ o.jsxs(
      "g",
      {
        transform: `translate(${y}, ${r})`,
        className: `group ${f ? "opacity-90" : ""}`,
        children: [
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: U,
              y: 0,
              width: O,
              height: te,
              fill: "transparent",
              className: "cursor-grab active:cursor-grabbing",
              onMouseDown: (L) => l == null ? void 0 : l(L, e.id, "move", P)
            }
          ),
          T > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: E,
              y: 0,
              width: U,
              height: te,
              fill: me.blue,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${f ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          x > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: A,
              y: 0,
              width: O,
              height: te,
              fill: me.red,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${f ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          q > 0 && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: z,
              y: 0,
              width: J,
              height: te,
              fill: me.blue,
              rx: m,
              ry: m,
              className: `drop-shadow-sm transition-opacity ${f ? "opacity-100" : "opacity-90 hover:opacity-100"}`,
              style: { pointerEvents: a ? "none" : "auto" }
            }
          ),
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: -H / 2,
              y: 0,
              width: H,
              height: te,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (L) => l == null ? void 0 : l(L, e.id, "resize-pre", P),
              children: /* @__PURE__ */ o.jsx("title", { children: "앞 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: W - H / 2,
              y: 0,
              width: H,
              height: te,
              fill: "transparent",
              className: "cursor-ew-resize",
              onMouseDown: (L) => l == null ? void 0 : l(L, e.id, "resize-post", P),
              children: /* @__PURE__ */ o.jsx("title", { children: "뒤 간접작업일 조절 (드래그)" })
            }
          ),
          a && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx(
              "rect",
              {
                x: 1,
                y: te / 2 - 6,
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
                x: W - 4,
                y: te / 2 - 6,
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
              y: te / 2 + 4,
              textAnchor: "end",
              className: "pointer-events-none select-none text-[11px] font-medium fill-gray-700",
              children: e.name
            }
          ),
          f && /* @__PURE__ */ o.jsxs("g", { children: [
            /* @__PURE__ */ o.jsxs(
              "text",
              {
                x: W / 2,
                y: -6,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[10px] font-bold fill-blue-600",
                children: [
                  ue(g, "MM/dd"),
                  " ~ ",
                  ue(v, "MM/dd")
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "text",
              {
                x: W / 2,
                y: te + 12,
                textAnchor: "middle",
                className: "pointer-events-none select-none text-[9px] fill-gray-500",
                children: [
                  "앞",
                  T,
                  "일 + 순",
                  x,
                  "일 + 뒤",
                  q,
                  "일"
                ]
              }
            )
          ] })
        ]
      }
    );
  }
}, Ln = () => /* @__PURE__ */ o.jsx("defs", { children: /* @__PURE__ */ o.jsx(
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
) }), er = Be(
  ({ tasks: e, milestones: r, viewMode: t, zoomLevel: n, holidays: s, calendarSettings: a, onBarDrag: i, virtualRows: l, totalHeight: m }, f) => {
    const g = Xe[n].pixelsPerDay, v = t === "MASTER", y = l && l.length > 0, [d, b] = re(null), { minDate: x, totalDays: k } = we(() => Zt(e, r, 60), [e, r]), R = k * g, T = Math.max(y ? (m || 0) + de + 100 : e.length * le + de + 100, 500), q = C((W, E, A, z) => {
      i && (W.preventDefault(), W.stopPropagation(), b({
        taskId: E,
        dragType: A,
        startX: W.clientX,
        originalStartDate: z.startDate,
        originalEndDate: z.endDate,
        originalIndirectWorkDaysPre: z.indirectWorkDaysPre,
        originalNetWorkDays: z.netWorkDays,
        originalIndirectWorkDaysPost: z.indirectWorkDaysPost,
        currentStartDate: z.startDate,
        currentEndDate: z.endDate,
        currentIndirectWorkDaysPre: z.indirectWorkDaysPre,
        currentIndirectWorkDaysPost: z.indirectWorkDaysPost
      }));
    }, [i]), U = C((W) => {
      if (!d || !i) return;
      const E = W.clientX - d.startX, A = Math.round(E / g);
      let z = d.originalStartDate, H = d.originalEndDate, P = d.originalIndirectWorkDaysPre, L = d.originalIndirectWorkDaysPost;
      if (d.dragType === "move")
        z = V(d.originalStartDate, A), H = V(d.originalEndDate, A);
      else if (d.dragType === "resize-pre") {
        P = Math.max(0, d.originalIndirectWorkDaysPre - A), z = V(d.originalStartDate, -(-A + (P - d.originalIndirectWorkDaysPre)));
        const N = V(d.originalStartDate, d.originalIndirectWorkDaysPre);
        z = V(N, -P), H = d.originalEndDate;
      } else if (d.dragType === "resize-post") {
        L = Math.max(0, d.originalIndirectWorkDaysPost + A);
        const N = V(d.originalEndDate, -d.originalIndirectWorkDaysPost);
        H = V(N, L), z = d.originalStartDate;
      }
      b((N) => N ? {
        ...N,
        currentStartDate: z,
        currentEndDate: H,
        currentIndirectWorkDaysPre: P,
        currentIndirectWorkDaysPost: L
      } : null);
    }, [d, i, g]), O = C(() => {
      if (!d || !i) {
        b(null);
        return;
      }
      const W = d.currentStartDate.getTime() !== d.originalStartDate.getTime() || d.currentEndDate.getTime() !== d.originalEndDate.getTime(), E = d.currentIndirectWorkDaysPre !== d.originalIndirectWorkDaysPre || d.currentIndirectWorkDaysPost !== d.originalIndirectWorkDaysPost;
      (W || E) && i({
        taskId: d.taskId,
        dragType: d.dragType,
        newStartDate: d.currentStartDate,
        newEndDate: d.currentEndDate,
        newIndirectWorkDaysPre: d.currentIndirectWorkDaysPre,
        newIndirectWorkDaysPost: d.currentIndirectWorkDaysPost
      }), b(null);
    }, [d, i]);
    De(() => {
      if (d)
        return window.addEventListener("mousemove", U), window.addEventListener("mouseup", O), document.body.style.cursor = d.dragType === "move" ? "grabbing" : "ew-resize", document.body.style.userSelect = "none", () => {
          window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", O), document.body.style.cursor = "", document.body.style.userSelect = "";
        };
    }, [d, U, O]);
    const J = C((W) => d && d.taskId === W ? {
      startDate: d.currentStartDate,
      endDate: d.currentEndDate,
      indirectWorkDaysPre: d.currentIndirectWorkDaysPre,
      indirectWorkDaysPost: d.currentIndirectWorkDaysPost
    } : null, [d]);
    return /* @__PURE__ */ o.jsx("div", { className: "flex h-full w-full flex-col overflow-hidden bg-white", children: /* @__PURE__ */ o.jsxs("div", { ref: f, className: "relative flex-1 overflow-auto", children: [
      /* @__PURE__ */ o.jsx(
        In,
        {
          minDate: x,
          totalDays: k,
          pixelsPerDay: g,
          zoomLevel: n,
          holidays: s,
          calendarSettings: a
        }
      ),
      /* @__PURE__ */ o.jsxs("svg", { width: R, height: T, className: "block bg-white", children: [
        /* @__PURE__ */ o.jsx(Ln, {}),
        /* @__PURE__ */ o.jsx(
          Rn,
          {
            minDate: x,
            totalDays: k,
            chartHeight: T,
            pixelsPerDay: g,
            holidays: s,
            calendarSettings: a,
            zoomLevel: n
          }
        ),
        (y ? l : e.map((W, E) => ({ index: E, start: E * le, size: le, key: E }))).map((W) => {
          const E = e[W.index];
          if (!E || E.type !== "GROUP") return null;
          const A = W.start + de;
          return /* @__PURE__ */ o.jsx(
            "rect",
            {
              x: 0,
              y: A,
              width: R,
              height: le,
              fill: "rgba(249, 250, 251, 0.6)",
              className: "pointer-events-none"
            },
            `group-bg-${W.key}`
          );
        }),
        Array.from({ length: k }, (W, E) => {
          const A = (E + 1) * g, z = V(x, E), H = Ue(z);
          let P = !1, L = "#f0f0f0";
          return n === "DAY" ? (P = !0, L = H === 0 ? "#e0e0e0" : "#f0f0f0") : n === "WEEK" ? (P = H === 0, L = "#e5e7eb") : n === "MONTH" && (P = H === 0, L = "#f0f0f0"), P ? /* @__PURE__ */ o.jsx(
            "line",
            {
              x1: A,
              y1: 0,
              x2: A,
              y2: T,
              stroke: L,
              strokeWidth: 1
            },
            `vline-${E}`
          ) : null;
        }),
        (y ? l : e.map((W, E) => ({ index: E, start: E * le, size: le, key: E }))).map((W) => /* @__PURE__ */ o.jsx(
          "line",
          {
            x1: 0,
            y1: W.start + le + de,
            x2: R,
            y2: W.start + le + de,
            stroke: "#f3f4f6",
            strokeWidth: 1
          },
          `line-${W.key}`
        )),
        /* @__PURE__ */ o.jsx("rect", { x: 0, y: 0, width: R, height: de, fill: "transparent" }),
        r.map((W) => /* @__PURE__ */ o.jsx(
          An,
          {
            milestone: W,
            x: at(W.date, x, g)
          },
          W.id
        )),
        /* @__PURE__ */ o.jsx(
          "line",
          {
            x1: 0,
            y1: de,
            x2: R,
            y2: de,
            stroke: me.grid,
            strokeWidth: 1
          }
        ),
        (y ? l : e.map((W, E) => ({ index: E, start: E * le, size: le, key: E }))).map((W) => {
          const E = e[W.index];
          if (!E) return null;
          const A = W.start + (le - te) / 2 + de;
          return /* @__PURE__ */ o.jsx(
            zn,
            {
              task: E,
              y: A,
              minDate: x,
              pixelsPerDay: g,
              isMasterView: v,
              isDraggable: !v && !!i,
              dragInfo: J(E.id),
              onDragStart: q
            },
            W.key
          );
        })
      ] })
    ] }) });
  }
);
er.displayName = "GanttTimeline";
const Ct = (e) => {
  let r;
  const t = /* @__PURE__ */ new Set(), n = (f, g) => {
    const v = typeof f == "function" ? f(r) : f;
    if (!Object.is(v, r)) {
      const y = r;
      r = g ?? (typeof v != "object" || v === null) ? v : Object.assign({}, r, v), t.forEach((d) => d(r, y));
    }
  }, s = () => r, l = { setState: n, getState: s, getInitialState: () => m, subscribe: (f) => (t.add(f), () => t.delete(f)) }, m = r = e(n, s, l);
  return l;
}, Fn = (e) => e ? Ct(e) : Ct, Hn = (e) => e;
function Yn(e, r = Hn) {
  const t = Te.useSyncExternalStore(
    e.subscribe,
    Te.useCallback(() => r(e.getState()), [e, r]),
    Te.useCallback(() => r(e.getInitialState()), [e, r])
  );
  return Te.useDebugValue(t), t;
}
const It = (e) => {
  const r = Fn(e), t = (n) => Yn(r, n);
  return Object.assign(t, r), t;
}, $n = (e) => e ? It(e) : It, Rt = (e) => Symbol.iterator in e, At = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), zt = (e, r) => {
  const t = e instanceof Map ? e : new Map(e.entries()), n = r instanceof Map ? r : new Map(r.entries());
  if (t.size !== n.size)
    return !1;
  for (const [s, a] of t)
    if (!n.has(s) || !Object.is(a, n.get(s)))
      return !1;
  return !0;
}, Gn = (e, r) => {
  const t = e[Symbol.iterator](), n = r[Symbol.iterator]();
  let s = t.next(), a = n.next();
  for (; !s.done && !a.done; ) {
    if (!Object.is(s.value, a.value))
      return !1;
    s = t.next(), a = n.next();
  }
  return !!s.done && !!a.done;
};
function Vn(e, r) {
  return Object.is(e, r) ? !0 : typeof e != "object" || e === null || typeof r != "object" || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r) ? !1 : Rt(e) && Rt(r) ? At(e) && At(r) ? zt(e, r) : Gn(e, r) : zt(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(r) }
  );
}
function Ne(e) {
  const r = Te.useRef(void 0);
  return (t) => {
    const n = e(t);
    return Vn(r.current, n) ? r.current : r.current = n;
  };
}
const Pe = $n((e, r) => ({
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
  sidebarWidth: ke.SIDEBAR_WIDTH,
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
      ke.SIDEBAR_MIN_WIDTH,
      Math.min(t, ke.SIDEBAR_MAX_WIDTH)
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
})), qn = () => Pe(
  Ne((e) => ({
    viewMode: e.viewMode,
    activeCPId: e.activeCPId,
    zoomLevel: e.zoomLevel
  }))
), Xn = () => Pe(
  Ne((e) => ({
    setViewMode: e.setViewMode,
    setZoomLevel: e.setZoomLevel
  }))
), ws = () => Pe(
  Ne((e) => ({
    selectedTaskId: e.selectedTaskId,
    hoveredTaskId: e.hoveredTaskId,
    selectTask: e.selectTask,
    hoverTask: e.hoverTask
  }))
), Bn = () => Pe(
  Ne((e) => ({
    expandedTaskIds: e.expandedTaskIds,
    toggleTask: e.toggleTask,
    expandAll: e.expandAll,
    collapseAll: e.collapseAll
  }))
), Un = () => Pe(
  Ne((e) => ({
    sidebarWidth: e.sidebarWidth,
    setSidebarWidth: e.setSidebarWidth
  }))
), vs = () => Pe(
  Ne((e) => ({
    isDragging: e.isDragging,
    dragType: e.dragType,
    dragTaskId: e.dragTaskId,
    startDrag: e.startDrag,
    endDrag: e.endDrag
  }))
);
function We(e, r, t) {
  let n = t.initialDeps ?? [], s;
  function a() {
    var i, l, m, f;
    let g;
    t.key && ((i = t.debug) != null && i.call(t)) && (g = Date.now());
    const v = e();
    if (!(v.length !== n.length || v.some((b, x) => n[x] !== b)))
      return s;
    n = v;
    let d;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (d = Date.now()), s = r(...v), t.key && ((m = t.debug) != null && m.call(t))) {
      const b = Math.round((Date.now() - g) * 100) / 100, x = Math.round((Date.now() - d) * 100) / 100, k = x / 16, R = (T, q) => {
        for (T = String(T); T.length < q; )
          T = " " + T;
        return T;
      };
      console.info(
        `%c⏱ ${R(x, 5)} /${R(b, 5)} ms`,
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
    return (f = t == null ? void 0 : t.onChange) == null || f.call(t, s), s;
  }
  return a.updateDeps = (i) => {
    n = i;
  }, a;
}
function Lt(e, r) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Kn = (e, r) => Math.abs(e - r) < 1.01, Qn = (e, r, t) => {
  let n;
  return function(...s) {
    e.clearTimeout(n), n = e.setTimeout(() => r.apply(this, s), t);
  };
}, Ft = (e) => {
  const { offsetWidth: r, offsetHeight: t } = e;
  return { width: r, height: t };
}, Jn = (e) => e, Zn = (e) => {
  const r = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), n = [];
  for (let s = r; s <= t; s++)
    n.push(s);
  return n;
}, es = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: l, height: m } = i;
    r({ width: Math.round(l), height: Math.round(m) });
  };
  if (s(Ft(t)), !n.ResizeObserver)
    return () => {
    };
  const a = new n.ResizeObserver((i) => {
    const l = () => {
      const m = i[0];
      if (m != null && m.borderBoxSize) {
        const f = m.borderBoxSize[0];
        if (f) {
          s({ width: f.inlineSize, height: f.blockSize });
          return;
        }
      }
      s(Ft(t));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, Ht = {
  passive: !0
}, Yt = typeof window > "u" ? !0 : "onscrollend" in window, ts = (e, r) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const n = e.targetWindow;
  if (!n)
    return;
  let s = 0;
  const a = e.options.useScrollendEvent && Yt ? () => {
  } : Qn(
    n,
    () => {
      r(s, !1);
    },
    e.options.isScrollingResetDelay
  ), i = (g) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    s = v ? t.scrollLeft * (y && -1 || 1) : t.scrollTop, a(), r(s, g);
  }, l = i(!0), m = i(!1);
  m(), t.addEventListener("scroll", l, Ht);
  const f = e.options.useScrollendEvent && Yt;
  return f && t.addEventListener("scrollend", m, Ht), () => {
    t.removeEventListener("scroll", l), f && t.removeEventListener("scrollend", m);
  };
}, rs = (e, r, t) => {
  if (r != null && r.borderBoxSize) {
    const n = r.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ns = (e, {
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
class ss {
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
        getItemKey: Jn,
        rangeExtractor: Zn,
        onChange: () => {
        },
        measureElement: rs,
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
    }, this.maybeNotify = We(
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
        const l = t[i];
        if (s.has(l.lane))
          continue;
        const m = a.get(
          l.lane
        );
        if (m == null || l.end > m.end ? a.set(l.lane, l) : l.end < m.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = We(
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
    ), this.getMeasurements = We(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: a, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const m = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const f = this.measurementsCache.slice(0, m);
        for (let g = m; g < t; g++) {
          const v = a(g), y = this.options.lanes === 1 ? f[g - 1] : this.getFurthestMeasurement(f, g), d = y ? y.end + this.options.gap : n + s, b = l.get(v), x = typeof b == "number" ? b : this.options.estimateSize(g), k = d + x, R = y ? y.lane : g % this.options.lanes;
          f[g] = {
            index: g,
            start: d,
            size: x,
            end: k,
            key: v,
            lane: R
          };
        }
        return this.measurementsCache = f, f;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = We(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, a) => this.range = t.length > 0 && n > 0 ? as({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = We(
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
      const i = a.key, l = this.elementsCache.get(i);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
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
    }, this.getVirtualItems = We(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let a = 0, i = t.length; a < i; a++) {
          const l = t[a], m = n[l];
          s.push(m);
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
        return Lt(
          n[tr(
            0,
            n.length - 1,
            (s) => Lt(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const a = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + a ? "end" : "start"), n === "center" ? t += (s - a) / 2 : n === "end" && (t -= a);
      const l = this.getTotalSize() + this.options.scrollMargin - a;
      return Math.max(Math.min(l, t), 0);
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
      const l = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, s.size),
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
      const i = 10, l = (f) => {
        if (!this.targetWindow) return;
        const g = this.getOffsetForIndex(t, f);
        if (!g) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [v, y] = g;
        this._scrollToOffset(v, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const d = this.getScrollOffset(), b = this.getOffsetForIndex(t, y);
          if (!b) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Kn(b[0], d) || m(y);
        });
      }, m = (f) => {
        this.targetWindow && (a++, a < i ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", a, i), this.targetWindow.requestAnimationFrame(() => l(f))) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
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
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && a.some((l) => l === null); ) {
          const l = n[i];
          a[l.lane] === null && (a[l.lane] = l.end), i--;
        }
        s = Math.max(...a.filter((l) => l !== null));
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
const tr = (e, r, t, n) => {
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
function as({
  measurements: e,
  outerSize: r,
  scrollOffset: t,
  lanes: n
}) {
  const s = e.length - 1, a = (m) => e[m].start;
  if (e.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = tr(
    0,
    s,
    a,
    t
  ), l = i;
  if (n === 1)
    for (; l < s && e[l].end < t + r; )
      l++;
  else if (n > 1) {
    const m = Array(n).fill(0);
    for (; l < s && m.some((g) => g < t + r); ) {
      const g = e[l];
      m[g.lane] = g.end, l++;
    }
    const f = Array(n).fill(t + r);
    for (; i >= 0 && f.some((g) => g >= t); ) {
      const g = e[i];
      f[g.lane] = g.start, i--;
    }
    i = Math.max(0, i - i % n), l = Math.min(s, l + (n - 1 - l % n));
  }
  return { startIndex: i, endIndex: l };
}
const $t = typeof document < "u" ? Ve.useLayoutEffect : Ve.useEffect;
function is(e) {
  const r = Ve.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (s, a) => {
      var i;
      a ? sr(r) : r(), (i = e.onChange) == null || i.call(e, s, a);
    }
  }, [n] = Ve.useState(
    () => new ss(t)
  );
  return n.setOptions(t), $t(() => n._didMount(), []), $t(() => n._willUpdate()), n;
}
function os(e) {
  return is({
    observeElementRect: es,
    observeElementOffset: ts,
    scrollToFn: ns,
    ...e
  });
}
const { ROW_HEIGHT: ls } = ke;
function cs({
  containerRef: e,
  count: r,
  rowHeight: t = ls,
  overscan: n = 5
}) {
  const s = os({
    count: r,
    getScrollElement: () => e.current,
    estimateSize: () => t,
    overscan: n
  });
  return {
    /** 가상화된 행 목록 */
    virtualRows: we(() => s.getVirtualItems().map((i) => ({
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
const ds = {
  workOnSaturdays: !1,
  workOnSundays: !1,
  workOnHolidays: !1
};
function Ds({
  tasks: e,
  milestones: r = [],
  holidays: t = [],
  calendarSettings: n = ds,
  initialView: s = "MASTER",
  initialZoomLevel: a = "MONTH",
  // Master View 기본: 월
  initialExpandedIds: i,
  onTaskUpdate: l,
  onTaskCreate: m,
  onTaskReorder: f,
  onTaskGroup: g,
  onTaskUngroup: v,
  onViewChange: y,
  className: d,
  style: b
}) {
  const { viewMode: x, activeCPId: k, zoomLevel: R } = qn(), { setViewMode: T, setZoomLevel: q } = Xn(), { sidebarWidth: U, setSidebarWidth: O } = Un(), { expandedTaskIds: J, toggleTask: W, expandAll: E } = Bn(), A = pe(null), z = pe(null), H = pe(null), P = pe(!1), L = pe(!1), [N, Z] = re(!1), ce = pe(!1);
  De(() => {
    ce.current || (ce.current = !0, T(s), q(a), i && i.length > 0 ? E(i) : e.length > 0 && E(e.map((D) => D.id)));
  }, [e.length]);
  const he = we(() => {
    if (x === "MASTER") {
      const D = [];
      return e.forEach((p) => {
        (p.wbsLevel === 1 && !p.parentId || p.wbsLevel === 1 && p.parentId && J.has(p.parentId)) && D.push(p);
      }), D;
    } else
      return e.filter((D) => D.wbsLevel === 2 && D.parentId === k);
  }, [e, x, k, J]), { virtualRows: ee, totalHeight: ne } = cs({
    containerRef: H,
    count: he.length
  });
  De(() => {
    const D = z.current, p = H.current;
    if (!D || !p) return;
    const ae = () => {
      P.current || (P.current = !0, p.scrollTop = D.scrollTop, requestAnimationFrame(() => {
        P.current = !1;
      }));
    }, K = () => {
      P.current || (P.current = !0, D.scrollTop = p.scrollTop, requestAnimationFrame(() => {
        P.current = !1;
      }));
    };
    return D.addEventListener("scroll", ae), p.addEventListener("scroll", K), () => {
      D.removeEventListener("scroll", ae), p.removeEventListener("scroll", K);
    };
  }, []);
  const [ye, u] = re(null), S = C((D) => {
    if (D.detail >= 2) return;
    D.preventDefault(), L.current = !0, Z(!0);
    const p = D.clientX, ae = U, K = (_e) => {
      if (!L.current) return;
      const He = _e.clientX - p;
      O(ae + He);
    }, Me = () => {
      L.current = !1, Z(!1), document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", Me);
    };
    document.addEventListener("mousemove", K), document.addEventListener("mouseup", Me);
  }, [U, O]), Y = C(() => {
    O(ye !== null ? ye : ke.SIDEBAR_WIDTH);
  }, [ye, O]), F = C((D, p) => {
    T(D, p), y == null || y(D, p);
  }, [T, y]), ie = C((D) => {
    const p = H.current;
    if (!p) return;
    const ae = Xe[R].pixelsPerDay, { minDate: K } = Zt(e, r, 60), Me = at(D, K, ae);
    p.scrollLeft = Math.max(0, Me - 50);
  }, [R, e, r]), oe = C(() => {
    if (x !== "DETAIL" || !k) return;
    const D = e.filter((p) => p.parentId === k);
    if (D.length > 0) {
      const p = D.reduce(
        (ae, K) => ae.startDate < K.startDate ? ae : K
      );
      ie(p.startDate);
    }
  }, [x, k, e, ie]), _ = C((D) => {
    x === "MASTER" && D.type === "CP" && F("DETAIL", D.id);
  }, [x, F]);
  De(() => {
    if (x === "DETAIL" && k) {
      const D = setTimeout(() => {
        oe();
      }, 100);
      return () => clearTimeout(D);
    }
  }, [x, k]);
  const se = C((D) => {
    if (!l) return;
    const p = e.find((K) => K.id === D.taskId);
    if (!p || !p.task) return;
    const ae = {
      ...p,
      startDate: D.newStartDate,
      endDate: D.newEndDate,
      task: {
        ...p.task,
        indirectWorkDaysPre: D.newIndirectWorkDaysPre,
        indirectWorkDaysPost: D.newIndirectWorkDaysPost
      }
    };
    l(ae);
  }, [e, l]);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: A,
      className: `flex h-full w-full flex-col bg-gray-50 ${d || ""}`,
      style: b,
      children: [
        /* @__PURE__ */ o.jsxs("header", { className: "flex h-[60px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm", children: [
          /* @__PURE__ */ o.jsx("h1", { className: "flex items-center gap-2 text-xl font-extrabold text-gray-800", children: /* @__PURE__ */ o.jsxs("span", { children: [
            /* @__PURE__ */ o.jsx("span", { className: "text-teal", children: "건설" }),
            " ",
            /* @__PURE__ */ o.jsx("span", { className: "text-vermilion", children: "표준공정표" }),
            " 관리 시스템"
          ] }) }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex rounded bg-gray-100 p-1", children: (x === "MASTER" ? ["WEEK", "MONTH"] : ["DAY", "WEEK"]).map((D) => /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => q(D),
                className: `rounded px-3 py-1 text-xs font-medium transition-colors ${R === D ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                children: Xe[D].label
              },
              D
            )) }),
            /* @__PURE__ */ o.jsxs("div", { className: "text-sm text-gray-500", children: [
              "기준일: ",
              ue(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "relative flex flex-1 overflow-hidden", children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "z-10 flex shrink-0 flex-col bg-white",
              style: { width: U },
              children: /* @__PURE__ */ o.jsx(
                Jt,
                {
                  ref: z,
                  tasks: he,
                  allTasks: e,
                  viewMode: x,
                  expandedIds: J,
                  onToggle: W,
                  onTaskClick: _,
                  onBackToMaster: () => F("MASTER"),
                  onTaskUpdate: l,
                  onTaskCreate: m,
                  onTaskReorder: f,
                  onTaskGroup: g,
                  onTaskUngroup: v,
                  onScrollToFirstTask: oe,
                  activeCPId: k,
                  virtualRows: ee,
                  totalHeight: ne,
                  onTotalWidthChange: u
                }
              )
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `z-20 w-1 shrink-0 cursor-col-resize transition-colors ${N ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`,
              onMouseDown: S,
              onDoubleClick: Y,
              title: "드래그하여 너비 조절 / 더블클릭으로 초기화"
            }
          ),
          /* @__PURE__ */ o.jsx("div", { className: "relative flex flex-1 flex-col overflow-hidden bg-white", children: /* @__PURE__ */ o.jsx(
            er,
            {
              ref: H,
              tasks: he,
              milestones: r,
              viewMode: x,
              zoomLevel: R,
              holidays: t,
              calendarSettings: n,
              onTaskUpdate: l,
              onBarDrag: se,
              virtualRows: ee,
              totalHeight: ne
            }
          ) }),
          N && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 cursor-col-resize" })
        ] })
      ]
    }
  );
}
export {
  me as GANTT_COLORS,
  ke as GANTT_LAYOUT,
  Ds as GanttChart,
  Jt as GanttSidebar,
  er as GanttTimeline,
  Xe as ZOOM_CONFIG,
  _t as addCalendarDays,
  _n as addWorkingDays,
  Zt as calculateDateRange,
  gs as calculateDualCalendarDates,
  at as dateToX,
  ys as getAnchorDate,
  bs as getDateRangeWidth,
  ps as getPixelsPerDay,
  je as isHoliday,
  fs as isWeekend,
  ms as subtractWorkingDays,
  vs as useGanttDrag,
  Bn as useGanttExpansion,
  ws as useGanttSelection,
  Un as useGanttSidebar,
  Pe as useGanttStore,
  Xn as useGanttViewActions,
  qn as useGanttViewState,
  cs as useGanttVirtualization,
  xs as xToDate
};
