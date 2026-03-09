! function() {
    "use strict";
    var e = {
            107: function(e, t, n) {
                function r() {
                    return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
                }

                function o() {
                    return "npm"
                }
                n.d(t, {
                    Z: function() {
                        return r
                    },
                    e: function() {
                        return o
                    }
                })
            },
            494: function(e, t, n) {
                n.d(t, {
                    w: function() {
                        return a
                    }
                });
                var r = n(107);
                e = n.hmd(e);
                var o = n(964);

                function a() {
                    return !(0, r.Z)() && "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0)
                }
            },
            964: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, r, o, a = {
                        exports: {}
                    },
                    i = a.exports = {};

                function c() {
                    throw Error("setTimeout has not been defined")
                }

                function s() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    n = "function" == typeof setTimeout ? setTimeout : c
                } catch (e) {
                    n = c
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    r = s
                }

                function u(e) {
                    if (n === setTimeout) return setTimeout(e, 0);
                    if ((n === c || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                    try {
                        return n(e, 0)
                    } catch (t) {
                        try {
                            return n.call(null, e, 0)
                        } catch (t) {
                            return n.call(this, e, 0)
                        }
                    }
                }
                var l = [],
                    f = !1,
                    p = -1;

                function d() {
                    f && o && (f = !1, o.length ? l = o.concat(l) : p = -1, l.length && v())
                }

                function v() {
                    if (!f) {
                        var e = u(d);
                        f = !0;
                        for (var t = l.length; t;) {
                            for (o = l, l = []; ++p < t;) o && o[p].run();
                            p = -1, t = l.length
                        }
                        o = null, f = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function y(e, t) {
                    this.fun = e, this.array = t
                }

                function m() {}

                function h() {}
                i.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    l.push(new y(e, t)), 1 !== l.length || f || u(v)
                }, y.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
                    return []
                }, i.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, i.cwd = function() {
                    return "/"
                }, i.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, i.umask = function() {
                    return 0
                };
                var b = a.exports.browser,
                    g = a.exports.binding,
                    _ = {},
                    S = "browser",
                    O = "browser",
                    w = "browser",
                    j = [],
                    P = {
                        nextTick: a.exports.nextTick,
                        title: a.exports.title,
                        browser: b,
                        env: a.exports.env,
                        argv: a.exports.argv,
                        version: a.exports.version,
                        versions: a.exports.versions,
                        on: a.exports.on,
                        addListener: a.exports.addListener,
                        once: a.exports.once,
                        off: a.exports.off,
                        removeListener: a.exports.removeListener,
                        removeAllListeners: a.exports.removeAllListeners,
                        emit: a.exports.emit,
                        emitWarning: h,
                        prependListener: a.exports.prependListener,
                        prependOnceListener: a.exports.prependOnceListener,
                        listeners: a.exports.listeners,
                        binding: g,
                        cwd: a.exports.cwd,
                        chdir: a.exports.chdir,
                        umask: a.exports.umask,
                        exit: h,
                        pid: 1,
                        features: _,
                        kill: h,
                        dlopen: h,
                        uptime: h,
                        memoryUsage: h,
                        uvCounters: h,
                        platform: S,
                        arch: O,
                        execPath: w,
                        execArgv: j
                    };
                t.addListener = a.exports.addListener, t.arch = O, t.argv = a.exports.argv, t.binding = g, t.browser = b, t.chdir = a.exports.chdir, t.cwd = a.exports.cwd, t.default = P, t.dlopen = h, t.emit = a.exports.emit, t.emitWarning = h, t.env = a.exports.env, t.execArgv = j, t.execPath = w, t.exit = h, t.features = _, t.kill = h, t.listeners = a.exports.listeners, t.memoryUsage = h, t.nextTick = a.exports.nextTick, t.off = a.exports.off, t.on = a.exports.on, t.once = a.exports.once, t.pid = 1, t.platform = S, t.prependListener = a.exports.prependListener, t.prependOnceListener = a.exports.prependOnceListener, t.removeAllListeners = a.exports.removeAllListeners, t.removeListener = a.exports.removeListener, t.title = a.exports.title, t.umask = a.exports.umask, t.uptime = h, t.uvCounters = h, t.version = a.exports.version, t.versions = a.exports.versions, t = e.exports = P
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](a, a.exports, n), a.loaded = !0, a.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.hmd = function(e) {
            return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: function() {
                    throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                }
            }), e
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.rv = function() {
            return "1.5.7"
        }, n.ruid = "bundler=rspack@1.5.7",
        function() {
            var e, t, r, o, a, i, c, s, u, l, f, p, d, v, y, m, h, b, g, _, S, O, w = "10.37.0",
                j = globalThis;

            function P() {
                return k(j), j
            }

            function k(e) {
                var t = e.__SENTRY__ = e.__SENTRY__ || {};
                return t.version = t.version || w, t[w] = t[w] || {}
            }

            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j,
                    r = n.__SENTRY__ = n.__SENTRY__ || {},
                    o = r[w] = r[w] || {};
                return o[e] || (o[e] = t())
            }
            var x = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function T(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }
            var A = Object.prototype.toString;

            function I(e) {
                switch (A.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                    case "[object WebAssembly.Exception]":
                        return !0;
                    default:
                        return B(e, Error)
                }
            }

            function D(e, t) {
                return A.call(e) === "[object ".concat(t, "]")
            }

            function C(e) {
                return D(e, "ErrorEvent")
            }

            function R(e) {
                return D(e, "DOMError")
            }

            function L(e) {
                return D(e, "String")
            }

            function M(e) {
                return (void 0 === e ? "undefined" : T(e)) === "object" && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
            }

            function N(e) {
                return null === e || M(e) || (void 0 === e ? "undefined" : T(e)) !== "object" && "function" != typeof e
            }

            function U(e) {
                return D(e, "Object")
            }

            function q(e) {
                return "undefined" != typeof Event && B(e, Event)
            }

            function F(e) {
                return !!((null == e ? void 0 : e.then) && "function" == typeof e.then)
            }

            function B(e, t) {
                try {
                    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
                } catch (e) {
                    return !1
                }
            }

            function H(e) {
                return !!((void 0 === e ? "undefined" : T(e)) === "object" && null !== e && (e.__isVue || e._isVue || e.__v_isVNode))
            }

            function $(e) {
                return "undefined" != typeof Request && B(e, Request)
            }

            function z(e, t) {
                return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }

            function W(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) return "<unknown>";
                try {
                    for (var n, r = e, o = [], a = 0, i = 0, c = Array.isArray(t) ? t : t.keyAttrs, s = !Array.isArray(t) && t.maxStringLength || 80; r && a++ < 5 && (n = function(e, t) {
                            var n = [];
                            if (!(null == e ? void 0 : e.tagName)) return "";
                            if (j.HTMLElement && z(e, HTMLElement) && e.dataset) {
                                if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                                if (e.dataset.sentryElement) return e.dataset.sentryElement
                            }
                            n.push(e.tagName.toLowerCase());
                            var r = (null == t ? void 0 : t.length) ? t.filter(function(t) {
                                return e.getAttribute(t)
                            }).map(function(t) {
                                return [t, e.getAttribute(t)]
                            }) : null;
                            if (null == r ? void 0 : r.length) r.forEach(function(e) {
                                n.push("[".concat(e[0], '="').concat(e[1], '"]'))
                            });
                            else {
                                e.id && n.push("#".concat(e.id));
                                var o = e.className;
                                if (o && L(o)) {
                                    var a = o.split(/\s+/),
                                        i = !0,
                                        c = !1,
                                        s = void 0;
                                    try {
                                        for (var u, l = a[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                                            var f = u.value;
                                            n.push(".".concat(f))
                                        }
                                    } catch (e) {
                                        c = !0, s = e
                                    } finally {
                                        try {
                                            i || null == l.return || l.return()
                                        } finally {
                                            if (c) throw s
                                        }
                                    }
                                }
                            }
                            var p = !0,
                                d = !1,
                                v = void 0;
                            try {
                                for (var y, m = ["aria-label", "type", "name", "title", "alt"][Symbol.iterator](); !(p = (y = m.next()).done); p = !0) {
                                    var h = y.value,
                                        b = e.getAttribute(h);
                                    b && n.push("[".concat(h, '="').concat(b, '"]'))
                                }
                            } catch (e) {
                                d = !0, v = e
                            } finally {
                                try {
                                    p || null == m.return || m.return()
                                } finally {
                                    if (d) throw v
                                }
                            }
                            return n.join("")
                        }(r, c), "html" !== n && (!(a > 1) || !(i + 3 * o.length + n.length >= s)));) o.push(n), i += n.length, r = r.parentNode;
                    return o.reverse().join(" > ")
                } catch (e) {
                    return "<unknown>"
                }
            }

            function G() {
                try {
                    return j.document.location.href
                } catch (e) {
                    return ""
                }
            }

            function V(e) {
                if (!j.HTMLElement) return null;
                for (var t = e, n = 0; n < 5 && t; n++) {
                    if (z(t, HTMLElement)) {
                        if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                        if (t.dataset.sentryElement) return t.dataset.sentryElement
                    }
                    t = t.parentNode
                }
                return null
            }

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Y(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return J(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var K = ["debug", "info", "warn", "error", "log", "assert", "trace"],
                X = {};

            function Z(e) {
                if (!("console" in j)) return e();
                var t = j.console,
                    n = {},
                    r = Object.keys(X);
                r.forEach(function(e) {
                    var r = X[e];
                    n[e] = t[e], t[e] = r
                });
                try {
                    return e()
                } finally {
                    r.forEach(function(e) {
                        t[e] = n[e]
                    })
                }
            }

            function Q() {
                return et().enabled
            }

            function ee(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                x && Q() && Z(function() {
                    var t;
                    (t = j.console)[e].apply(t, ["".concat("Sentry Logger ", "[").concat(e, "]:")].concat(Y(n)))
                })
            }

            function et() {
                return x ? E("loggerSettings", function() {
                    return {
                        enabled: !1
                    }
                }) : {
                    enabled: !1
                }
            }
            var en = {
                enable: function() {
                    et().enabled = !0
                },
                disable: function() {
                    et().enabled = !1
                },
                isEnabled: Q,
                log: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    ee.apply(void 0, ["log"].concat(Y(t)))
                },
                warn: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    ee.apply(void 0, ["warn"].concat(Y(t)))
                },
                error: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    ee.apply(void 0, ["error"].concat(Y(t)))
                }
            };

            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function eo(e, t, n) {
                if (t in e) {
                    var r = e[t];
                    if ("function" == typeof r) {
                        var o = n(r);
                        "function" == typeof o && ei(o, r);
                        try {
                            e[t] = o
                        } catch (n) {
                            x && en.log('Failed to replace method "'.concat(t, '" in object'), e)
                        }
                    }
                }
            }

            function ea(e, t, n) {
                try {
                    Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch (n) {
                    x && en.log('Failed to add non-enumerable property "'.concat(t, '" to object'), e)
                }
            }

            function ei(e, t) {
                try {
                    var n = t.prototype || {};
                    e.prototype = t.prototype = n, ea(e, "__sentry_original__", t)
                } catch (e) {}
            }

            function ec(e) {
                return e.__sentry_original__
            }

            function es(e) {
                if (I(e)) return er({
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                }, el(e));
                if (!q(e)) return e;
                var t = er({
                    type: e.type,
                    target: eu(e.target),
                    currentTarget: eu(e.currentTarget)
                }, el(e));
                return "undefined" != typeof CustomEvent && B(e, CustomEvent) && (t.detail = e.detail), t
            }

            function eu(e) {
                try {
                    return "undefined" != typeof Element && B(e, Element) ? W(e) : Object.prototype.toString.call(e)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function el(e) {
                if ((void 0 === e ? "undefined" : e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) != "object" || null === e) return {};
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }

            function ef(e) {
                if (void 0 !== r) return r ? r(e) : e();
                var t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
                return t in j && "function" == typeof j[t] ? (r = j[t])(e) : (r = null, e())
            }

            function ep() {
                return ef(function() {
                    return Math.random()
                })
            }

            function ed() {
                return ef(function() {
                    return Date.now()
                })
            }

            function ev(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function ey() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.crypto || j.msCrypto;
                try {
                    if (null == e ? void 0 : e.randomUUID) return ef(function() {
                        return e.randomUUID()
                    }).replace(/-/g, "")
                } catch (e) {}
                return o || (o = "10000000100040008000100000000000"), o.replace(/[018]/g, function(e) {
                    return (e ^ (15 & 16 * ep()) >> e / 4).toString(16)
                })
            }

            function em(e) {
                var t, n;
                return null == (n = e.exception) || null == (t = n.values) ? void 0 : t[0]
            }

            function eh(e) {
                var t = e.message,
                    n = e.event_id;
                if (t) return t;
                var r = em(e);
                return r ? r.type && r.value ? "".concat(r.type, ": ").concat(r.value) : r.type || r.value || n || "<unknown>" : n || "<unknown>"
            }

            function eb(e, t, n) {
                var r = e.exception = e.exception || {},
                    o = r.values = r.values || [],
                    a = o[0] = o[0] || {};
                a.value || (a.value = t || ""), a.type || (a.type = n || "Error")
            }

            function eg(e, t) {
                var n = em(e);
                if (n) {
                    var r = n.mechanism;
                    if (n.mechanism = ev({}, {
                            type: "generic",
                            handled: !0
                        }, r, t), t && "data" in t) {
                        var o = ev({}, null == r ? void 0 : r.data, t.data);
                        n.mechanism.data = o
                    }
                }
            }

            function e_(e) {
                if (function(e) {
                        try {
                            return e.__sentry_captured__
                        } catch (e) {}
                    }(e)) return !0;
                try {
                    ea(e, "__sentry_captured__", !0)
                } catch (e) {}
                return !1
            }

            function eS() {
                return ed() / 1e3
            }

            function eO() {
                return (null != a ? a : a = function() {
                    var e = j.performance;
                    if (!(null == e ? void 0 : e.now) || !e.timeOrigin) return eS;
                    var t = e.timeOrigin;
                    return function() {
                        return (t + ef(function() {
                            return e.now()
                        })) / 1e3
                    }
                }())()
            }
            var ew = null;

            function ej() {
                return null === ew && (ew = function() {
                    var e, t = j.performance;
                    if (null == t ? void 0 : t.now) {
                        var n = ef(function() {
                                return t.now()
                            }),
                            r = ed(),
                            o = t.timeOrigin;
                        if ("number" == typeof o && 3e5 > Math.abs(o + n - r)) return o;
                        var a = null == (e = t.timing) ? void 0 : e.navigationStart;
                        return "number" == typeof a && 3e5 > Math.abs(a + n - r) ? a : r - n
                    }
                }()), ew
            }

            function eP(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || eO(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : ey()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = "".concat(t.did)), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                else if ("number" == typeof t.duration) e.duration = t.duration;
                else {
                    var n = e.timestamp - e.started;
                    e.duration = n >= 0 ? n : 0
                }
                t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
            }

            function ek(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                if (!t || (void 0 === t ? "undefined" : t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t) != "object" || n <= 0) return t;
                if (e && 0 === Object.keys(t).length) return e;
                var r = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, e);
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = ek(r[o], t[o], n - 1));
                return r
            }

            function eE() {
                return ey().substring(16)
            }
            var ex = "_sentrySpan";

            function eT(e, t) {
                t ? ea(e, ex, t) : delete e[ex]
            }

            function eA(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function eI(e) {
                return function(e) {
                    if (Array.isArray(e)) return eA(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return eA(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eA(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var eD = /\(error: (.*)\)/,
                eC = /captureMessage|captureException/;

            function eR() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = t.sort(function(e, t) {
                    return e[0] - t[0]
                }).map(function(e) {
                    return e[1]
                });
                return function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = [], a = e.split("\n"), i = t; i < a.length; i++) {
                        var c = a[i];
                        c.length > 1024 && (c = c.slice(0, 1024));
                        var s = eD.test(c) ? c.replace(eD, "$1") : c;
                        if (!s.match(/\S*Error: /)) {
                            var u = !0,
                                l = !1,
                                f = void 0;
                            try {
                                for (var p, d = r[Symbol.iterator](); !(u = (p = d.next()).done); u = !0) {
                                    var v = (0, p.value)(s);
                                    if (v) {
                                        o.push(v);
                                        break
                                    }
                                }
                            } catch (e) {
                                l = !0, f = e
                            } finally {
                                try {
                                    u || null == d.return || d.return()
                                } finally {
                                    if (l) throw f
                                }
                            }
                            if (o.length >= 50 + n) break
                        }
                    }
                    var y = o.slice(n);
                    if (!y.length) return [];
                    var m = Array.from(y);
                    return /sentryWrapped/.test(eL(m).function || "") && m.pop(), m.reverse(), eC.test(eL(m).function || "") && (m.pop(), eC.test(eL(m).function || "") && m.pop()), m.slice(0, 50).map(function(e) {
                        var t, n;
                        return t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r;
                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r
                                })
                            }
                            return e
                        }({}, e), n = n = {
                            filename: e.filename || eL(m).filename,
                            function: e.function || "?"
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t
                    })
                }
            }

            function eL(e) {
                return e[e.length - 1] || {}
            }
            var eM = "<anonymous>";

            function eN(e) {
                try {
                    if (!e || "function" != typeof e) return eM;
                    return e.name || eM
                } catch (e) {
                    return eM
                }
            }

            function eU(e) {
                var t = e.exception;
                if (t) {
                    var n = [];
                    try {
                        return t.values.forEach(function(e) {
                            e.stacktrace.frames && n.push.apply(n, eI(e.stacktrace.frames))
                        }), n
                    } catch (e) {}
                }
            }

            function eq(e) {
                return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]"
            }

            function eF(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return "string" != typeof e || 0 === t || e.length <= t ? e : "".concat(e.slice(0, t), "...")
            }

            function eB(e, t) {
                if (!Array.isArray(e)) return "";
                for (var n = [], r = 0; r < e.length; r++) {
                    var o = e[r];
                    try {
                        H(o) ? n.push(eq(o)) : n.push(String(o))
                    } catch (e) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }

            function eH(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !!L(e) && (D(t, "RegExp") ? t.test(e) : !!L(t) && (n ? e === t : e.includes(t)))
            }

            function e$(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return t.some(function(t) {
                    return eH(e, t, n)
                })
            }

            function ez(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function eW(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function eG(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        eW(e, t, n[t])
                    })
                }
                return e
            }

            function eV(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }

            function eJ(e) {
                return function(e) {
                    if (Array.isArray(e)) return ez(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ez(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ez(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var eY = function() {
                    var e;

                    function t() {
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                            traceId: ey(),
                            sampleRand: ep()
                        }
                    }
                    return e = [{
                            key: "clone",
                            value: function() {
                                var e = new t;
                                return e._breadcrumbs = eJ(this._breadcrumbs), e._tags = eG({}, this._tags), e._attributes = eG({}, this._attributes), e._extra = eG({}, this._extra), e._contexts = eG({}, this._contexts), this._contexts.flags && (e._contexts.flags = {
                                    values: eJ(this._contexts.flags.values)
                                }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = eJ(this._eventProcessors), e._attachments = eJ(this._attachments), e._sdkProcessingMetadata = eG({}, this._sdkProcessingMetadata), e._propagationContext = eG({}, this._propagationContext), e._client = this._client, e._lastEventId = this._lastEventId, e._conversationId = this._conversationId, eT(e, this[ex]), e
                            }
                        }, {
                            key: "setClient",
                            value: function(e) {
                                this._client = e
                            }
                        }, {
                            key: "setLastEventId",
                            value: function(e) {
                                this._lastEventId = e
                            }
                        }, {
                            key: "getClient",
                            value: function() {
                                return this._client
                            }
                        }, {
                            key: "lastEventId",
                            value: function() {
                                return this._lastEventId
                            }
                        }, {
                            key: "addScopeListener",
                            value: function(e) {
                                this._scopeListeners.push(e)
                            }
                        }, {
                            key: "addEventProcessor",
                            value: function(e) {
                                return this._eventProcessors.push(e), this
                            }
                        }, {
                            key: "setUser",
                            value: function(e) {
                                return this._user = e || {
                                    email: void 0,
                                    id: void 0,
                                    ip_address: void 0,
                                    username: void 0
                                }, this._session && eP(this._session, {
                                    user: e
                                }), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "getUser",
                            value: function() {
                                return this._user
                            }
                        }, {
                            key: "setConversationId",
                            value: function(e) {
                                return this._conversationId = e || void 0, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setTags",
                            value: function(e) {
                                return this._tags = eG({}, this._tags, e), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setTag",
                            value: function(e, t) {
                                return this.setTags(eW({}, e, t))
                            }
                        }, {
                            key: "setAttributes",
                            value: function(e) {
                                return this._attributes = eG({}, this._attributes, e), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setAttribute",
                            value: function(e, t) {
                                return this.setAttributes(eW({}, e, t))
                            }
                        }, {
                            key: "removeAttribute",
                            value: function(e) {
                                return e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
                            }
                        }, {
                            key: "setExtras",
                            value: function(e) {
                                return this._extra = eG({}, this._extra, e), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setExtra",
                            value: function(e, t) {
                                return this._extra = eV(eG({}, this._extra), eW({}, e, t)), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setFingerprint",
                            value: function(e) {
                                return this._fingerprint = e, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setLevel",
                            value: function(e) {
                                return this._level = e, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setTransactionName",
                            value: function(e) {
                                return this._transactionName = e, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setContext",
                            value: function(e, t) {
                                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "setSession",
                            value: function(e) {
                                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "getSession",
                            value: function() {
                                return this._session
                            }
                        }, {
                            key: "update",
                            value: function(e) {
                                if (!e) return this;
                                var n = "function" == typeof e ? e(this) : e,
                                    r = ((null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](n) : n instanceof t) ? n.getScopeData() : U(n) ? e : void 0) || {},
                                    o = r.tags,
                                    a = r.attributes,
                                    i = r.extra,
                                    c = r.user,
                                    s = r.contexts,
                                    u = r.level,
                                    l = r.fingerprint,
                                    f = void 0 === l ? [] : l,
                                    p = r.propagationContext,
                                    d = r.conversationId;
                                return this._tags = eG({}, this._tags, o), this._attributes = eG({}, this._attributes, a), this._extra = eG({}, this._extra, i), this._contexts = eG({}, this._contexts, s), c && Object.keys(c).length && (this._user = c), u && (this._level = u), f.length && (this._fingerprint = f), p && (this._propagationContext = p), d && (this._conversationId = d), this
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, eT(this, void 0), this._attachments = [], this.setPropagationContext({
                                    traceId: ey(),
                                    sampleRand: ep()
                                }), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "addBreadcrumb",
                            value: function(e, t) {
                                var n, r = "number" == typeof t ? t : 100;
                                if (r <= 0) return this;
                                var o = eV(eG({
                                    timestamp: eS()
                                }, e), {
                                    message: e.message ? eF(e.message, 2048) : e.message
                                });
                                return this._breadcrumbs.push(o), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), null == (n = this._client) || n.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "getLastBreadcrumb",
                            value: function() {
                                return this._breadcrumbs[this._breadcrumbs.length - 1]
                            }
                        }, {
                            key: "clearBreadcrumbs",
                            value: function() {
                                return this._breadcrumbs = [], this._notifyScopeListeners(), this
                            }
                        }, {
                            key: "addAttachment",
                            value: function(e) {
                                return this._attachments.push(e), this
                            }
                        }, {
                            key: "clearAttachments",
                            value: function() {
                                return this._attachments = [], this
                            }
                        }, {
                            key: "getScopeData",
                            value: function() {
                                return {
                                    breadcrumbs: this._breadcrumbs,
                                    attachments: this._attachments,
                                    contexts: this._contexts,
                                    tags: this._tags,
                                    attributes: this._attributes,
                                    extra: this._extra,
                                    user: this._user,
                                    level: this._level,
                                    fingerprint: this._fingerprint || [],
                                    eventProcessors: this._eventProcessors,
                                    propagationContext: this._propagationContext,
                                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                                    transactionName: this._transactionName,
                                    span: this[ex],
                                    conversationId: this._conversationId
                                }
                            }
                        }, {
                            key: "setSDKProcessingMetadata",
                            value: function(e) {
                                return this._sdkProcessingMetadata = ek(this._sdkProcessingMetadata, e, 2), this
                            }
                        }, {
                            key: "setPropagationContext",
                            value: function(e) {
                                return this._propagationContext = e, this
                            }
                        }, {
                            key: "getPropagationContext",
                            value: function() {
                                return this._propagationContext
                            }
                        }, {
                            key: "captureException",
                            value: function(e, t) {
                                var n = (null == t ? void 0 : t.event_id) || ey();
                                if (!this._client) return x && en.warn("No client configured on scope - will not capture exception!"), n;
                                var r = Error("Sentry syntheticException");
                                return this._client.captureException(e, eV(eG({
                                    originalException: e,
                                    syntheticException: r
                                }, t), {
                                    event_id: n
                                }), this), n
                            }
                        }, {
                            key: "captureMessage",
                            value: function(e, t, n) {
                                var r, o = (null == n ? void 0 : n.event_id) || ey();
                                if (!this._client) return x && en.warn("No client configured on scope - will not capture message!"), o;
                                var a = null != (r = null == n ? void 0 : n.syntheticException) ? r : Error(e);
                                return this._client.captureMessage(e, t, eV(eG({
                                    originalException: e,
                                    syntheticException: a
                                }, n), {
                                    event_id: o
                                }), this), o
                            }
                        }, {
                            key: "captureEvent",
                            value: function(e, t) {
                                var n = (null == t ? void 0 : t.event_id) || ey();
                                return this._client ? this._client.captureEvent(e, eV(eG({}, t), {
                                    event_id: n
                                }), this) : x && en.warn("No client configured on scope - will not capture event!"), n
                            }
                        }, {
                            key: "_notifyScopeListeners",
                            value: function() {
                                var e = this;
                                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(t) {
                                    t(e)
                                }), this._notifyingListeners = !1)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), t
                }(),
                eK = function() {
                    var e;

                    function t(e, n) {
                        var r, o;
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                        r = e || new eY, o = n || new eY, this._stack = [{
                            scope: r
                        }], this._isolationScope = o
                    }
                    return e = [{
                            key: "withScope",
                            value: function(e) {
                                var t, n = this,
                                    r = this._pushScope();
                                try {
                                    t = e(r)
                                } catch (e) {
                                    throw this._popScope(), e
                                }
                                return F(t) ? t.then(function(e) {
                                    return n._popScope(), e
                                }, function(e) {
                                    throw n._popScope(), e
                                }) : (this._popScope(), t)
                            }
                        }, {
                            key: "getClient",
                            value: function() {
                                return this.getStackTop().client
                            }
                        }, {
                            key: "getScope",
                            value: function() {
                                return this.getStackTop().scope
                            }
                        }, {
                            key: "getIsolationScope",
                            value: function() {
                                return this._isolationScope
                            }
                        }, {
                            key: "getStackTop",
                            value: function() {
                                return this._stack[this._stack.length - 1]
                            }
                        }, {
                            key: "_pushScope",
                            value: function() {
                                var e = this.getScope().clone();
                                return this._stack.push({
                                    client: this.getClient(),
                                    scope: e
                                }), e
                            }
                        }, {
                            key: "_popScope",
                            value: function() {
                                return !(this._stack.length <= 1) && !!this._stack.pop()
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), t
                }();

            function eX() {
                var e = k(P());
                return e.stack = e.stack || new eK(E("defaultCurrentScope", function() {
                    return new eY
                }), E("defaultIsolationScope", function() {
                    return new eY
                }))
            }

            function eZ(e) {
                return eX().withScope(e)
            }

            function eQ(e, t) {
                var n = eX();
                return n.withScope(function() {
                    return n.getStackTop().scope = e, t(e)
                })
            }

            function e0(e) {
                return eX().withScope(function() {
                    return e(eX().getIsolationScope())
                })
            }

            function e1(e) {
                var t = k(e);
                return t.acs ? t.acs : {
                    withIsolationScope: e0,
                    withScope: eZ,
                    withSetScope: eQ,
                    withSetIsolationScope: function(e, t) {
                        return e0(t)
                    },
                    getCurrentScope: function() {
                        return eX().getScope()
                    },
                    getIsolationScope: function() {
                        return eX().getIsolationScope()
                    }
                }
            }

            function e2(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function e3() {
                return e1(P()).getCurrentScope()
            }

            function e4() {
                return e1(P()).getIsolationScope()
            }

            function e8() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = e1(P());
                if (2 === t.length) {
                    var o = function(e) {
                            if (Array.isArray(e)) return e
                        }(t) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var a = [],
                                    i = !0,
                                    c = !1;
                                try {
                                    for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                } catch (e) {
                                    c = !0, r = e
                                } finally {
                                    try {
                                        i || null == o.return || o.return()
                                    } finally {
                                        if (c) throw r
                                    }
                                }
                                return a
                            }
                        }(t, 2) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return e2(e, 2);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e2(e, t)
                            }
                        }(t, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        a = o[0],
                        i = o[1];
                    return a ? r.withSetScope(a, i) : r.withScope(i)
                }
                return r.withScope(t[0])
            }

            function e6() {
                return e3().getClient()
            }
            var e5 = "sentry.source",
                e9 = "sentry.sample_rate",
                e7 = "sentry.previous_trace_sample_rate",
                te = "sentry.op",
                tt = "sentry.origin",
                tn = "sentry.idle_span_finish_reason",
                tr = "sentry.measurement_unit",
                to = "sentry.measurement_value",
                ta = "sentry.custom_span_name",
                ti = "sentry.profile_id",
                tc = "sentry.exclusive_time";

            function ts(e) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                var t, n = e || (null == (t = e6()) ? void 0 : t.getOptions());
                return !!n && (null != n.tracesSampleRate || !!n.tracesSampler)
            }

            function tu(e) {
                if ("boolean" == typeof e) return Number(e);
                var t = "string" == typeof e ? parseFloat(e) : e;
                if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
            }

            function tl(e, t) {
                e.setAttribute("http.response.status_code", t);
                var n = function(e) {
                    if (e < 400 && e >= 100) return {
                        code: 1
                    };
                    if (e >= 400 && e < 500) switch (e) {
                        case 401:
                            return {
                                code: 2,
                                message: "unauthenticated"
                            };
                        case 403:
                            return {
                                code: 2,
                                message: "permission_denied"
                            };
                        case 404:
                            return {
                                code: 2,
                                message: "not_found"
                            };
                        case 409:
                            return {
                                code: 2,
                                message: "already_exists"
                            };
                        case 413:
                            return {
                                code: 2,
                                message: "failed_precondition"
                            };
                        case 429:
                            return {
                                code: 2,
                                message: "resource_exhausted"
                            };
                        case 499:
                            return {
                                code: 2,
                                message: "cancelled"
                            };
                        default:
                            return {
                                code: 2,
                                message: "invalid_argument"
                            }
                    }
                    if (e >= 500 && e < 600) switch (e) {
                        case 501:
                            return {
                                code: 2,
                                message: "unimplemented"
                            };
                        case 503:
                            return {
                                code: 2,
                                message: "unavailable"
                            };
                        case 504:
                            return {
                                code: 2,
                                message: "deadline_exceeded"
                            }
                    }
                    return {
                        code: 2,
                        message: "internal_error"
                    }
                }(t);
                "unknown_error" !== n.message && e.setStatus(n)
            }
            var tf = "_sentryScope",
                tp = "_sentryIsolationScope";

            function td(e) {
                return {
                    scope: e[tf],
                    isolationScope: function(e) {
                        if (e) {
                            if ((void 0 === e ? "undefined" : e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object" && "deref" in e && "function" == typeof e.deref) try {
                                return e.deref()
                            } catch (e) {
                                return
                            }
                            return e
                        }
                    }(e[tp])
                }
            }

            function tv(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ty(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return tv(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tv(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tm = "sentry-",
                th = /^sentry-/;

            function tb(e) {
                var t = function(e) {
                    if (e && (L(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce(function(e, t) {
                        return Object.entries(tg(t)).forEach(function(t) {
                            var n = ty(t, 2),
                                r = n[0],
                                o = n[1];
                            e[r] = o
                        }), e
                    }, {}) : tg(e)
                }(e);
                if (t) {
                    var n = Object.entries(t).reduce(function(e, t) {
                        var n = ty(t, 2),
                            r = n[0],
                            o = n[1];
                        return r.match(th) && (e[r.slice(tm.length)] = o), e
                    }, {});
                    return Object.keys(n).length > 0 ? n : void 0
                }
            }

            function tg(e) {
                return e.split(",").map(function(e) {
                    var t = e.indexOf("=");
                    return -1 === t ? [] : [e.slice(0, t), e.slice(t + 1)].map(function(e) {
                        try {
                            return decodeURIComponent(e.trim())
                        } catch (e) {
                            return
                        }
                    })
                }).reduce(function(e, t) {
                    var n = ty(t, 2),
                        r = n[0],
                        o = n[1];
                    return r && o && (e[r] = o), e
                }, {})
            }
            var t_ = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function tS() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey(),
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE(),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(e, "-").concat(t).concat(r)
            }

            function tO() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey(),
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE(),
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "00-".concat(e, "-").concat(t, "-").concat(n ? "01" : "00")
            }
            var tw = !1;

            function tj(e) {
                return e && e.length > 0 ? e.map(function(e) {
                    var t = e.context;
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({
                        span_id: t.spanId,
                        trace_id: t.traceId,
                        sampled: 1 === t.traceFlags,
                        attributes: e.attributes
                    }, function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e.context, ["spanId", "traceId", "traceFlags"]))
                }) : void 0
            }

            function tP(e) {
                var t;
                return "number" == typeof e ? tk(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : (null != (t = Date) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t) ? tk(e.getTime()) : eO()
            }

            function tk(e) {
                return e > 0x2540be3ff ? e / 1e3 : e
            }

            function tE(e) {
                if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
                var t = e.spanContext(),
                    n = t.spanId,
                    r = t.traceId;
                if ((o = e).attributes && o.startTime && o.name && o.endTime && o.status) {
                    var o, a, i = e.attributes,
                        c = e.startTime,
                        s = e.name,
                        u = e.endTime,
                        l = e.status,
                        f = e.links;
                    return {
                        span_id: n,
                        trace_id: r,
                        data: i,
                        description: s,
                        parent_span_id: "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? null == (a = e.parentSpanContext) ? void 0 : a.spanId : void 0,
                        start_timestamp: tP(c),
                        timestamp: tP(u) || void 0,
                        status: tT(l),
                        op: i[te],
                        origin: i[tt],
                        links: tj(f)
                    }
                }
                return {
                    span_id: n,
                    trace_id: r,
                    start_timestamp: 0,
                    data: {}
                }
            }

            function tx(e) {
                return 1 === e.spanContext().traceFlags
            }

            function tT(e) {
                if (e && 0 !== e.code) return 1 === e.code ? "ok" : e.message || "internal_error"
            }
            var tA = "_sentryChildSpans",
                tI = "_sentryRootSpan";

            function tD(e, t) {
                var n = e[tI] || e;
                ea(t, tI, n), e[tA] ? e[tA].add(t) : ea(e, tA, new Set([t]))
            }

            function tC(e) {
                var t = new Set;
                return ! function e(n) {
                    if (!t.has(n) && tx(n)) {
                        t.add(n);
                        var r = n[tA] ? Array.from(n[tA]) : [],
                            o = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var c, s = r[Symbol.iterator](); !(o = (c = s.next()).done); o = !0) {
                                var u = c.value;
                                e(u)
                            }
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    }
                }(e), Array.from(t)
            }

            function tR(e) {
                return e[tI] || e
            }

            function tL() {
                var e = e1(P());
                return e.getActiveSpan ? e.getActiveSpan() : e3()[ex]
            }

            function tM() {
                tw || (Z(function() {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.")
                }), tw = !0)
            }
            var tN = "production";

            function tU(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var tq = /^o(\d+)\./,
                tF = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

            function tB(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.host,
                    r = e.path,
                    o = e.pass,
                    a = e.port,
                    i = e.projectId,
                    c = e.protocol,
                    s = e.publicKey;
                return "".concat(c, "://").concat(s).concat(t && o ? ":".concat(o) : "") + "@".concat(n).concat(a ? ":".concat(a) : "", "/").concat(r ? "".concat(r, "/") : r).concat(i)
            }

            function tH(e) {
                return {
                    protocol: e.protocol,
                    publicKey: e.publicKey || "",
                    pass: e.pass || "",
                    host: e.host,
                    port: e.port || "",
                    path: e.path || "",
                    projectId: e.projectId
                }
            }
            var t$ = "_frozenDsc";

            function tz(e, t) {
                var n, r, o, a, i, c = t.getOptions(),
                    s = (t.getDsn() || {}).publicKey,
                    u = {
                        environment: c.environment || tN,
                        release: c.release,
                        public_key: s,
                        trace_id: e,
                        org_id: (a = (n = t).getOptions(), i = (n.getDsn() || {}).host, a.orgId ? o = String(a.orgId) : i && (o = null == (r = i.match(tq)) ? void 0 : r[1]), o)
                    };
                return t.emit("createDsc", u), u
            }

            function tW(e, t) {
                var n = t.getPropagationContext();
                return n.dsc || tz(n.traceId, e)
            }

            function tG(e) {
                var t, n, r, o, a = e6();
                if (!a) return {};
                var i = tR(e),
                    c = tE(i),
                    s = c.data,
                    u = i.spanContext().traceState,
                    l = null != (n = null != (t = null == u ? void 0 : u.get("sentry.sample_rate")) ? t : s[e9]) ? n : s[e7];

                function f(e) {
                    return ("number" == typeof l || "string" == typeof l) && (e.sample_rate = "".concat(l)), e
                }
                var p = i[t$];
                if (p) return f(p);
                var d = null == u ? void 0 : u.get("sentry.dsc"),
                    v = d && tb(d);
                if (v) return f(v);
                var y = tz(e.spanContext().traceId, a),
                    m = s[e5],
                    h = c.description;
                return "url" !== m && h && (y.transaction = h), ts() && (y.sampled = String(tx(i)), y.sample_rand = null != (o = null == u ? void 0 : u.get("sentry.sample_rand")) ? o : null == (r = td(i).scope) ? void 0 : r.getPropagationContext().sampleRand.toString()), f(y), a.emit("createDsc", y, i), y
            }
            var tV = function() {
                var e;

                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                    this._traceId = e.traceId || ey(), this._spanId = e.spanId || eE()
                }
                return e = [{
                        key: "spanContext",
                        value: function() {
                            return {
                                spanId: this._spanId,
                                traceId: this._traceId,
                                traceFlags: 0
                            }
                        }
                    }, {
                        key: "end",
                        value: function(e) {}
                    }, {
                        key: "setAttribute",
                        value: function(e, t) {
                            return this
                        }
                    }, {
                        key: "setAttributes",
                        value: function(e) {
                            return this
                        }
                    }, {
                        key: "setStatus",
                        value: function(e) {
                            return this
                        }
                    }, {
                        key: "updateName",
                        value: function(e) {
                            return this
                        }
                    }, {
                        key: "isRecording",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "addEvent",
                        value: function(e, t, n) {
                            return this
                        }
                    }, {
                        key: "addLink",
                        value: function(e) {
                            return this
                        }
                    }, {
                        key: "addLinks",
                        value: function(e) {
                            return this
                        }
                    }, {
                        key: "recordException",
                        value: function(e, t) {}
                    }],
                    function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, e), t
            }();

            function tJ(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function tY(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }

            function tK(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Infinity;
                try {
                    return function e(t, r) {
                        var o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Infinity,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Infinity,
                            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (o = new WeakSet, [function(e) {
                                return !!o.has(e) || (o.add(e), !1)
                            }, function(e) {
                                o.delete(e)
                            }]),
                            s = function(e) {
                                if (Array.isArray(e)) return e
                            }(c) || function(e, t) {
                                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var a = [],
                                        i = !0,
                                        c = !1;
                                    try {
                                        for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                    } catch (e) {
                                        c = !0, r = e
                                    } finally {
                                        try {
                                            i || null == o.return || o.return()
                                        } finally {
                                            if (c) throw r
                                        }
                                    }
                                    return a
                                }
                            }(c, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return tJ(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tJ(e, t)
                                }
                            }(c, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            u = s[0],
                            l = s[1];
                        if (null == r || ["boolean", "string"].includes(void 0 === r ? "undefined" : tY(r)) || "number" == typeof r && Number.isFinite(r)) return r;
                        var f = function(e, t) {
                            try {
                                if ("domain" === e && t && (void 0 === t ? "undefined" : tY(t)) === "object" && t._events) return "[Domain]";
                                if ("domainEmitter" === e) return "[DomainEmitter]";
                                if (void 0 !== n.g && t === n.g) return "[Global]";
                                if ("undefined" != typeof window && t === window) return "[Window]";
                                if ("undefined" != typeof document && t === document) return "[Document]";
                                if (H(t)) return eq(t);
                                if (U(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t) return "[SyntheticEvent]";
                                if ("number" == typeof t && !Number.isFinite(t)) return "[".concat(t, "]");
                                if ("function" == typeof t) return "[Function: ".concat(eN(t), "]");
                                if ((void 0 === t ? "undefined" : tY(t)) === "symbol") return "[".concat(String(t), "]");
                                if ((void 0 === t ? "undefined" : tY(t)) === "bigint") return "[BigInt: ".concat(String(t), "]");
                                var r, o, a = (r = t, o = Object.getPrototypeOf(r), (null == o ? void 0 : o.constructor) ? o.constructor.name : "null prototype");
                                if (/^HTML(\w*)Element$/.test(a)) return "[HTMLElement: ".concat(a, "]");
                                return "[object ".concat(a, "]")
                            } catch (e) {
                                return "**non-serializable** (".concat(e, ")")
                            }
                        }(t, r);
                        if (!f.startsWith("[object ")) return f;
                        if (r.__sentry_skip_normalization__) return r;
                        var p = "number" == typeof r.__sentry_override_normalization_depth__ ? r.__sentry_override_normalization_depth__ : a;
                        if (0 === p) return f.replace("object ", "");
                        if (u(r)) return "[Circular ~]";
                        if (r && "function" == typeof r.toJSON) try {
                            var d = r.toJSON();
                            return e("", d, p - 1, i, c)
                        } catch (e) {}
                        var v = Array.isArray(r) ? [] : {},
                            y = 0,
                            m = es(r);
                        for (var h in m)
                            if (Object.prototype.hasOwnProperty.call(m, h)) {
                                if (y >= i) {
                                    v[h] = "[MaxProperties ~]";
                                    break
                                }
                                var b = m[h];
                                v[h] = e(h, b, p - 1, i, c), y++
                            }
                        return l(r), v
                    }("", e, t, r)
                } catch (e) {
                    return {
                        ERROR: "**non-serializable** (".concat(e, ")")
                    }
                }
            }

            function tX(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function tZ(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || tQ(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tQ(e, t) {
                if (e) {
                    if ("string" == typeof e) return tX(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tX(e, t)
                }
            }

            function t0(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [e, t]
            }

            function t1(e, t) {
                var n = e[1],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = n[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                        var s = i.value,
                            u = s[0].type;
                        if (t(s, u)) return !0
                    }
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return !1
            }

            function t2(e, t) {
                return t1(e, function(e, n) {
                    return t.includes(n)
                })
            }

            function t3(e) {
                var t = k(j);
                return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
            }

            function t4(e) {
                var t = tZ(e, 2),
                    n = t[0],
                    r = t[1],
                    o = JSON.stringify(n);

                function a(e) {
                    "string" == typeof o ? o = "string" == typeof e ? o + e : [t3(o), e] : o.push("string" == typeof e ? t3(e) : e)
                }
                var i = !0,
                    c = !1,
                    s = void 0;
                try {
                    for (var u, l = r[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                        var f, p = u.value,
                            d = tZ(p, 2),
                            v = d[0],
                            y = d[1];
                        if (a("\n".concat(JSON.stringify(v), "\n")), "string" == typeof y || (f = Uint8Array, null != f && "undefined" != typeof Symbol && f[Symbol.hasInstance] ? !!f[Symbol.hasInstance](y) : y instanceof f)) a(y);
                        else {
                            var m = void 0;
                            try {
                                m = JSON.stringify(y)
                            } catch (e) {
                                m = JSON.stringify(tK(y))
                            }
                            a(m)
                        }
                    }
                } catch (e) {
                    c = !0, s = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (c) throw s
                    }
                }
                return "string" == typeof o ? o : function(e) {
                    var t = new Uint8Array(e.reduce(function(e, t) {
                            return e + t.length
                        }, 0)),
                        n = 0,
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                            var s = i.value;
                            t.set(s, n), n += s.length
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return t
                }(o)
            }
            var t8 = {
                session: "session",
                sessions: "session",
                attachment: "attachment",
                transaction: "transaction",
                event: "error",
                client_report: "internal",
                user_report: "default",
                profile: "profile",
                profile_chunk: "profile",
                replay_event: "replay",
                replay_recording: "replay",
                check_in: "monitor",
                feedback: "feedback",
                span: "span",
                raw_security: "security",
                log: "log_item",
                metric: "metric",
                trace_metric: "metric"
            };

            function t6(e) {
                if (null == e ? void 0 : e.sdk) {
                    var t = e.sdk;
                    return {
                        name: t.name,
                        version: t.version
                    }
                }
            }

            function t5(e) {
                en.log("Ignoring span ".concat(e.op, " - ").concat(e.description, " because it matches `ignoreSpans`."))
            }

            function t9(e, t) {
                if (!(null == t ? void 0 : t.length) || !e.description) return !1;
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, i = t[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var c = a.value;
                        if (function(e) {
                                var t;
                                return "string" == typeof e || (null != (t = RegExp) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t)
                            }(c)) {
                            if (eH(e.description, c)) return x && t5(e), !0;
                            continue
                        }
                        if (c.name || c.op) {
                            var s = !c.name || eH(e.description, c.name),
                                u = !c.op || e.op && eH(e.op, c.op);
                            if (s && u) return x && t5(e), !0
                        }
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return !1
            }

            function t7(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function nt(e) {
                return function(e) {
                    if (Array.isArray(e)) return t7(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return t7(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t7(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nn(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function nr(e) {
                if (e && 0 !== e.length) {
                    var t = {};
                    return e.forEach(function(e) {
                        var n = e.attributes || {},
                            r = n[tr],
                            o = n[to];
                        "string" == typeof r && "number" == typeof o && (t[e.name] = {
                            value: o,
                            unit: r
                        })
                    }), t
                }
            }

            function no(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function na(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ni(e, t) {
                return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }

            function nc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        na(e, t, n[t])
                    })
                }
                return e
            }
            var ns = function() {
                var e;

                function t() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                    this._traceId = n.traceId || ey(), this._spanId = n.spanId || eE(), this._startTime = n.startTimestamp || eO(), this._links = n.links, this._attributes = {}, this.setAttributes(nc((na(e = {}, tt, "manual"), na(e, te, n.op), e), n.attributes)), this._name = n.name, n.parentSpanId && (this._parentSpanId = n.parentSpanId), "sampled" in n && (this._sampled = n.sampled), n.endTimestamp && (this._endTime = n.endTimestamp), this._events = [], this._isStandaloneSpan = n.isStandalone, this._endTime && this._onSpanEnded()
                }
                return e = [{
                        key: "addLink",
                        value: function(e) {
                            return this._links ? this._links.push(e) : this._links = [e], this
                        }
                    }, {
                        key: "addLinks",
                        value: function(e) {
                            if (this._links) {
                                var t;
                                (t = this._links).push.apply(t, function(e) {
                                    if (Array.isArray(e)) return no(e)
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(e) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return no(e, void 0);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return no(e, t)
                                    }
                                }(e) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())
                            } else this._links = e;
                            return this
                        }
                    }, {
                        key: "recordException",
                        value: function(e, t) {}
                    }, {
                        key: "spanContext",
                        value: function() {
                            return {
                                spanId: this._spanId,
                                traceId: this._traceId,
                                traceFlags: +!!this._sampled
                            }
                        }
                    }, {
                        key: "setAttribute",
                        value: function(e, t) {
                            return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, this
                        }
                    }, {
                        key: "setAttributes",
                        value: function(e) {
                            var t = this;
                            return Object.keys(e).forEach(function(n) {
                                return t.setAttribute(n, e[n])
                            }), this
                        }
                    }, {
                        key: "updateStartTime",
                        value: function(e) {
                            this._startTime = tP(e)
                        }
                    }, {
                        key: "setStatus",
                        value: function(e) {
                            return this._status = e, this
                        }
                    }, {
                        key: "updateName",
                        value: function(e) {
                            return this._name = e, this.setAttribute(e5, "custom"), this
                        }
                    }, {
                        key: "end",
                        value: function(e) {
                            this._endTime || (this._endTime = tP(e), function(e) {
                                if (x) {
                                    var t = tE(e),
                                        n = t.description,
                                        r = t.op,
                                        o = e.spanContext().spanId,
                                        a = tR(e) === e,
                                        i = '[Tracing] Finishing "'.concat(void 0 === r ? "< unknown op >" : r, '" ').concat(a ? "root " : "", 'span "').concat(void 0 === n ? "< unknown name >" : n, '" with ID ').concat(o);
                                    en.log(i)
                                }
                            }(this), this._onSpanEnded())
                        }
                    }, {
                        key: "getSpanJSON",
                        value: function() {
                            return {
                                data: this._attributes,
                                description: this._name,
                                op: this._attributes[te],
                                parent_span_id: this._parentSpanId,
                                span_id: this._spanId,
                                start_timestamp: this._startTime,
                                status: tT(this._status),
                                timestamp: this._endTime,
                                trace_id: this._traceId,
                                origin: this._attributes[tt],
                                profile_id: this._attributes[ti],
                                exclusive_time: this._attributes[tc],
                                measurements: nr(this._events),
                                is_segment: this._isStandaloneSpan && tR(this) === this || void 0,
                                segment_id: this._isStandaloneSpan ? tR(this).spanContext().spanId : void 0,
                                links: tj(this._links)
                            }
                        }
                    }, {
                        key: "isRecording",
                        value: function() {
                            return !this._endTime && !!this._sampled
                        }
                    }, {
                        key: "addEvent",
                        value: function(e, t, n) {
                            x && en.log("[Tracing] Adding an event to span:", e);
                            var r = nu(t) ? t : n || eO(),
                                o = nu(t) ? {} : t || {},
                                a = {
                                    name: e,
                                    time: tP(r),
                                    attributes: o
                                };
                            return this._events.push(a), this
                        }
                    }, {
                        key: "isStandaloneSpan",
                        value: function() {
                            return !!this._isStandaloneSpan
                        }
                    }, {
                        key: "_onSpanEnded",
                        value: function() {
                            var e = e6();
                            if (e && e.emit("spanEnd", this), this._isStandaloneSpan || this === tR(this)) {
                                if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
                                    var t = e6();
                                    if (t) {
                                        var n = e[1];
                                        if (!n || 0 === n.length) return t.recordDroppedEvent("before_send", "span");
                                        t.sendEnvelope(e)
                                    }
                                }(function(e, t) {
                                    var n = tG(e[0]),
                                        r = null == t ? void 0 : t.getDsn(),
                                        o = null == t ? void 0 : t.getOptions().tunnel,
                                        a = ne({
                                            sent_at: new Date().toISOString()
                                        }, !!n.trace_id && !!n.public_key && {
                                            trace: n
                                        }, !!o && r && {
                                            dsn: tB(r)
                                        }),
                                        i = (null == t ? void 0 : t.getOptions()) || {},
                                        c = i.beforeSendSpan,
                                        s = i.ignoreSpans,
                                        u = (null == s ? void 0 : s.length) ? e.filter(function(e) {
                                            return !t9(tE(e), s)
                                        }) : e,
                                        l = e.length - u.length;
                                    l && (null == t || t.recordDroppedEvent("before_send", "span", l));
                                    var f = c ? function(e) {
                                            var t = tE(e),
                                                n = c(t);
                                            return n || (tM(), t)
                                        } : tE,
                                        p = [],
                                        d = !0,
                                        v = !1,
                                        y = void 0;
                                    try {
                                        for (var m, h = u[Symbol.iterator](); !(d = (m = h.next()).done); d = !0) {
                                            var b = m.value,
                                                g = f(b);
                                            g && p.push([{
                                                type: "span"
                                            }, g])
                                        }
                                    } catch (e) {
                                        v = !0, y = e
                                    } finally {
                                        try {
                                            d || null == h.return || h.return()
                                        } finally {
                                            if (v) throw y
                                        }
                                    }
                                    return t0(a, p)
                                }([this], e)) : (x && en.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
                                var t = this._convertSpanToTransaction();
                                t && (td(this).scope || e3()).captureEvent(t)
                            }
                        }
                    }, {
                        key: "_convertSpanToTransaction",
                        value: function() {
                            var e, t = this;
                            if (nl(tE(this))) {
                                this._name || (x && en.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
                                var n = td(this),
                                    r = n.scope,
                                    o = n.isolationScope,
                                    a = null == r || null == (e = r.getScopeData().sdkProcessingMetadata) ? void 0 : e.normalizedRequest;
                                if (!0 === this._sampled) {
                                    var i, c, s, u, l, f, p = tC(this).filter(function(e) {
                                            var n;
                                            return e !== t && !(ni(n = e, ns) && n.isStandaloneSpan())
                                        }).map(function(e) {
                                            return tE(e)
                                        }).filter(nl),
                                        d = this._attributes[e5];
                                    delete this._attributes[ta], p.forEach(function(e) {
                                        delete e.data[ta]
                                    });
                                    var v = nc({
                                            contexts: {
                                                trace: (c = (i = this.spanContext()).spanId, s = i.traceId, l = (u = tE(this)).data, f = u.op, {
                                                    parent_span_id: u.parent_span_id,
                                                    span_id: c,
                                                    trace_id: s,
                                                    data: l,
                                                    op: f,
                                                    status: u.status,
                                                    origin: u.origin,
                                                    links: u.links
                                                })
                                            },
                                            spans: p.length > 1e3 ? p.sort(function(e, t) {
                                                return e.start_timestamp - t.start_timestamp
                                            }).slice(0, 1e3) : p,
                                            start_timestamp: this._startTime,
                                            timestamp: this._endTime,
                                            transaction: this._name,
                                            type: "transaction",
                                            sdkProcessingMetadata: {
                                                capturedSpanScope: r,
                                                capturedSpanIsolationScope: o,
                                                dynamicSamplingContext: tG(this)
                                            },
                                            request: a
                                        }, d && {
                                            transaction_info: {
                                                source: d
                                            }
                                        }),
                                        y = nr(this._events);
                                    return y && Object.keys(y).length && (x && en.log("[Measurements] Adding measurements to transaction event", JSON.stringify(y, void 0, 2)), v.measurements = y), v
                                }
                            }
                        }
                    }],
                    function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, e), t
            }();

            function nu(e) {
                return e && "number" == typeof e || ni(e, Date) || Array.isArray(e)
            }

            function nl(e) {
                return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
            }

            function nf(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function np(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function nd(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        np(e, t, n[t])
                    })
                }
                return e
            }

            function nv(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
            var ny = "__SENTRY_SUPPRESS_TRACING__";

            function nm(e, t) {
                var n = e1(P());
                if (n.startSpan) return n.startSpan(e, t);
                var r = n_(e),
                    o = e.forceTransaction,
                    a = e.parentSpan,
                    i = e.scope;
                return e8(null == i ? void 0 : i.clone(), function() {
                    var n;
                    return (void 0 !== (n = a) ? function(e) {
                        return nb(n, e)
                    } : function(e) {
                        return e()
                    })(function() {
                        var n = e3(),
                            i = nO(n, a),
                            c = e.onlyIfParent && !i ? new tV : ng({
                                parentSpan: i,
                                spanArguments: r,
                                forceTransaction: o,
                                scope: n
                            });
                        return eT(n, c),
                            function(e, t) {
                                var n, r, o, a, i, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                                try {
                                    i = e()
                                } catch (e) {
                                    throw t(e), c(), e
                                }
                                return n = i, r = t, o = c, a = s, F(n) ? n.then(function(e) {
                                    return o(), a(e), e
                                }, function(e) {
                                    throw r(e), o(), e
                                }) : (o(), a(n), n)
                            }(function() {
                                return t(c)
                            }, function() {
                                var e = tE(c).status;
                                c.isRecording() && (!e || "ok" === e) && c.setStatus({
                                    code: 2,
                                    message: "internal_error"
                                })
                            }, function() {
                                c.end()
                            })
                    })
                })
            }

            function nh(e) {
                var t = e1(P());
                if (t.startInactiveSpan) return t.startInactiveSpan(e);
                var n = n_(e),
                    r = e.forceTransaction,
                    o = e.parentSpan;
                return (e.scope ? function(t) {
                    return e8(e.scope, t)
                } : void 0 !== o ? function(e) {
                    return nb(o, e)
                } : function(e) {
                    return e()
                })(function() {
                    var t = e3(),
                        a = nO(t, o);
                    return e.onlyIfParent && !a ? new tV : ng({
                        parentSpan: a,
                        spanArguments: n,
                        forceTransaction: r,
                        scope: t
                    })
                })
            }

            function nb(e, t) {
                var n = e1(P());
                return n.withActiveSpan ? n.withActiveSpan(e, t) : e8(function(n) {
                    return eT(n, e || void 0), t(n)
                })
            }

            function ng(e) {
                var t, n, r, o, a, i, c, s, u, l, f, p = e.parentSpan,
                    d = e.spanArguments,
                    v = e.forceTransaction,
                    y = e.scope;
                if (!ts()) {
                    var m = new tV;
                    if (v || !p) {
                        var h = nd({
                            sampled: "false",
                            sample_rate: "0",
                            transaction: d.name
                        }, tG(m));
                        ea(m, t$, h)
                    }
                    return m
                }
                var b = e4();
                if (p && !v) {
                    t = p, n = y, r = d, a = (o = t.spanContext()).spanId, i = o.traceId, s = (c = !n.getScopeData().sdkProcessingMetadata[ny] && tx(t)) ? new ns(nv(nd({}, r), {
                        parentSpanId: a,
                        traceId: i,
                        sampled: c
                    })) : new tV({
                        traceId: i
                    }), tD(t, s), (u = e6()) && (u.emit("spanStart", s), r.endTimestamp && u.emit("spanEnd", s)), tD(p, f = s)
                } else if (p) {
                    var g = tG(p),
                        _ = p.spanContext(),
                        S = _.traceId,
                        O = _.spanId,
                        w = tx(p);
                    ea(f = nS(nd({
                        traceId: S,
                        parentSpanId: O
                    }, d), y, w), t$, g)
                } else {
                    var P = nd({}, b.getPropagationContext(), y.getPropagationContext()),
                        k = P.traceId,
                        E = P.dsc,
                        T = P.parentSpanId,
                        A = P.sampled;
                    f = nS(nd({
                        traceId: k,
                        parentSpanId: T
                    }, d), y, A), E && ea(f, t$, E)
                }
                return ! function(e) {
                    if (x) {
                        var t = tE(e),
                            n = t.description,
                            r = t.op,
                            o = t.parent_span_id,
                            a = e.spanContext().spanId,
                            i = tx(e),
                            c = tR(e),
                            s = c === e,
                            u = "[Tracing] Starting ".concat(i ? "sampled" : "unsampled", " ").concat(s ? "root " : "", "span"),
                            l = ["op: ".concat(void 0 === r ? "< unknown op >" : r), "name: ".concat(void 0 === n ? "< unknown name >" : n), "ID: ".concat(a)];
                        if (o && l.push("parent ID: ".concat(o)), !s) {
                            var f = tE(c),
                                p = f.op,
                                d = f.description;
                            l.push("root ID: ".concat(c.spanContext().spanId)), p && l.push("root op: ".concat(p)), d && l.push("root description: ".concat(d))
                        }
                        en.log("".concat(u, "\n  ").concat(l.join("\n  ")))
                    }
                }(f), (l = f) && (ea(l, tp, function(e) {
                    try {
                        var t = j.WeakRef;
                        if ("function" == typeof t) return new t(e)
                    } catch (e) {}
                    return e
                }(b)), ea(l, tf, y)), f
            }

            function n_(e) {
                var t = nd({
                    isStandalone: (e.experimental || {}).standalone
                }, e);
                if (e.startTime) {
                    var n = nd({}, t);
                    return n.startTimestamp = tP(e.startTime), delete n.startTime, n
                }
                return t
            }

            function nS(e, t, n) {
                var r, o, a, i, c = e6(),
                    s = (null == c ? void 0 : c.getOptions()) || {},
                    u = e.name,
                    l = void 0 === u ? "" : u,
                    f = {
                        spanAttributes: nd({}, e.attributes),
                        spanName: l,
                        parentSampled: n
                    };
                null == c || c.emit("beforeSampling", f, {
                    decision: !1
                });
                var p = null != (a = f.parentSampled) ? a : n,
                    d = f.spanAttributes,
                    v = t.getPropagationContext(),
                    y = (r = t.getScopeData().sdkProcessingMetadata[ny] ? [!1] : function(e, t, n) {
                        if (!ts(e)) return [!1];
                        var r, o, a, i, c = void 0;
                        "function" == typeof e.tracesSampler ? (i = e.tracesSampler((r = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r;
                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r
                                })
                            }
                            return e
                        }({}, t), o = o = {
                            inheritOrSampleWith: function(e) {
                                return "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
                            }
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                        }), r)), c = !0) : void 0 !== t.parentSampled ? i = t.parentSampled : void 0 !== e.tracesSampleRate && (i = e.tracesSampleRate, c = !0);
                        var s = tu(i);
                        if (void 0 === s) return x && en.warn("[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(i), " of type ").concat(JSON.stringify(void 0 === i ? "undefined" : (a = i) && "undefined" != typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a), ".")), [!1];
                        if (!s) return x && en.log("[Tracing] Discarding transaction because ".concat("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, s, c];
                        var u = n < s;
                        return !u && x && en.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(Number(i), ")")), [u, s, c]
                    }(s, {
                        name: l,
                        parentSampled: p,
                        attributes: d,
                        parentSampleRate: tu(null == (o = v.dsc) ? void 0 : o.sample_rate)
                    }, v.sampleRand), function(e) {
                        if (Array.isArray(e)) return e
                    }(r) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var a = [],
                                i = !0,
                                c = !1;
                            try {
                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    i || null == o.return || o.return()
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return a
                        }
                    }(r, 3) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return nf(e, 3);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nf(e, t)
                        }
                    }(r, 3) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    m = y[0],
                    h = y[1],
                    b = y[2],
                    g = new ns(nv(nd({}, e), {
                        attributes: nd((np(i = {}, e5, "custom"), np(i, e9, void 0 !== h && b ? h : void 0), i), d),
                        sampled: m
                    }));
                return !m && c && (x && en.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), c.recordDroppedEvent("sample_rate", "transaction")), c && c.emit("spanStart", g), g
            }

            function nO(e, t) {
                if (t) return t;
                if (null !== t) {
                    var n = e[ex];
                    if (n) {
                        var r = e6();
                        return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? tR(n) : n
                    }
                }
            }

            function nw(e) {
                return new nP(function(t) {
                    t(e)
                })
            }

            function nj(e) {
                return new nP(function(t, n) {
                    n(e)
                })
            }
            var nP = function() {
                var e;

                function t(e) {
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                    this._state = 0, this._handlers = [], this._runExecutor(e)
                }
                return e = [{
                        key: "then",
                        value: function(e, n) {
                            var r = this;
                            return new t(function(t, o) {
                                r._handlers.push([!1, function(n) {
                                    if (e) try {
                                        t(e(n))
                                    } catch (e) {
                                        o(e)
                                    } else t(n)
                                }, function(e) {
                                    if (n) try {
                                        t(n(e))
                                    } catch (e) {
                                        o(e)
                                    } else o(e)
                                }]), r._executeHandlers()
                            })
                        }
                    }, {
                        key: "catch",
                        value: function(e) {
                            return this.then(function(e) {
                                return e
                            }, e)
                        }
                    }, {
                        key: "finally",
                        value: function(e) {
                            var n = this;
                            return new t(function(t, r) {
                                var o, a;
                                return n.then(function(t) {
                                    a = !1, o = t, e && e()
                                }, function(t) {
                                    a = !0, o = t, e && e()
                                }).then(function() {
                                    a ? r(o) : t(o)
                                })
                            })
                        }
                    }, {
                        key: "_executeHandlers",
                        value: function() {
                            var e = this;
                            if (0 !== this._state) {
                                var t = this._handlers.slice();
                                this._handlers = [], t.forEach(function(t) {
                                    t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0)
                                })
                            }
                        }
                    }, {
                        key: "_runExecutor",
                        value: function(e) {
                            var t = this,
                                n = function(e, n) {
                                    if (0 === t._state) {
                                        if (F(n)) return void n.then(r, o);
                                        t._state = e, t._value = n, t._executeHandlers()
                                    }
                                },
                                r = function(e) {
                                    n(1, e)
                                },
                                o = function(e) {
                                    n(2, e)
                                };
                            try {
                                e(r, o)
                            } catch (e) {
                                o(e)
                            }
                        }
                    }],
                    function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, e), t
            }();

            function nk(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nE(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function nx(e) {
                return function(e) {
                    if (Array.isArray(e)) return nk(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return nk(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nk(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nT(e, t) {
                var n = t.extra,
                    r = t.tags,
                    o = t.attributes,
                    a = t.user,
                    i = t.contexts,
                    c = t.level,
                    s = t.sdkProcessingMetadata,
                    u = t.breadcrumbs,
                    l = t.fingerprint,
                    f = t.eventProcessors,
                    p = t.attachments,
                    d = t.propagationContext,
                    v = t.transactionName,
                    y = t.span;
                nA(e, "extra", n), nA(e, "tags", r), nA(e, "attributes", o), nA(e, "user", a), nA(e, "contexts", i), e.sdkProcessingMetadata = ek(e.sdkProcessingMetadata, s, 2), c && (e.level = c), v && (e.transactionName = v), y && (e.span = y), u.length && (e.breadcrumbs = nx(e.breadcrumbs).concat(nx(u))), l.length && (e.fingerprint = nx(e.fingerprint).concat(nx(l))), f.length && (e.eventProcessors = nx(e.eventProcessors).concat(nx(f))), p.length && (e.attachments = nx(e.attachments).concat(nx(p))), e.propagationContext = nE({}, e.propagationContext, d)
            }

            function nA(e, t, n) {
                e[t] = ek(e[t], n, 1)
            }

            function nI(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nD(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function nC(e) {
                return function(e) {
                    if (Array.isArray(e)) return nI(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || nR(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nR(e, t) {
                if (e) {
                    if ("string" == typeof e) return nI(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nI(e, t)
                }
            }
            var nL = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

            function nM(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function nN(e, t) {
                return e3().captureEvent(e, t)
            }

            function nU(e, t) {
                e4().setTag(e, t)
            }

            function nq(e) {
                var t, n, r, o = e4(),
                    a = e3(),
                    i = (j.navigator || {}).userAgent,
                    c = (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({
                        user: a.getUser() || o.getUser()
                    }, i && {
                        userAgent: i
                    }, e), n = eO(), r = {
                        sid: ey(),
                        init: !0,
                        timestamp: n,
                        started: n,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: function() {
                            var e;
                            return e = r, {
                                sid: "".concat(e.sid),
                                init: e.init,
                                started: new Date(1e3 * e.started).toISOString(),
                                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                status: e.status,
                                errors: e.errors,
                                did: "number" == typeof e.did || "string" == typeof e.did ? "".concat(e.did) : void 0,
                                duration: e.duration,
                                abnormal_mechanism: e.abnormal_mechanism,
                                attrs: {
                                    release: e.release,
                                    environment: e.environment,
                                    ip_address: e.ipAddress,
                                    user_agent: e.userAgent
                                }
                            }
                        }
                    }, t && eP(r, t), r),
                    s = o.getSession();
                return (null == s ? void 0 : s.status) === "ok" && eP(s, {
                    status: "exited"
                }), nF(), o.setSession(c), c
            }

            function nF() {
                var e, t = e4(),
                    n = e3().getSession() || t.getSession();
                n && (e = {}, "ok" === n.status && (e = {
                    status: "exited"
                }), eP(n, e)), nB(), t.setSession()
            }

            function nB() {
                var e = e4(),
                    t = e6(),
                    n = e.getSession();
                n && t && t.captureSession(n)
            }

            function nH() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e ? nF() : nB()
            }

            function n$(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nz(e) {
                return function(e) {
                    if (Array.isArray(e)) return n$(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return n$(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return n$(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var nW = [];

            function nG(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, i = t[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var c = a.value;
                        (null == c ? void 0 : c.afterAllSetup) && c.afterAllSetup(e)
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }

            function nV(e, t, n) {
                if (n[t.name]) {
                    x && en.log("Integration skipped because it was already installed: ".concat(t.name));
                    return
                }
                if (n[t.name] = t, nW.includes(t.name) || "function" != typeof t.setupOnce || (t.setupOnce(), nW.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                    var r = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", function(t, n) {
                        return r(t, n, e)
                    })
                }
                if ("function" == typeof t.processEvent) {
                    var o = t.processEvent.bind(t),
                        a = Object.assign(function(t, n) {
                            return o(t, n, e)
                        }, {
                            id: t.name
                        });
                    e.addEventProcessor(a)
                }
                x && en.log("Integration installed: ".concat(t.name))
            }

            function nJ(e) {
                var t = [];
                e.message && t.push(e.message);
                try {
                    var n = e.exception.values[e.exception.values.length - 1];
                    (null == n ? void 0 : n.value) && (t.push(n.value), n.type && t.push("".concat(n.type, ": ").concat(n.value)))
                } catch (e) {}
                return t
            }

            function nY(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nK(e) {
                return function(e) {
                    if (Array.isArray(e)) return nY(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return nY(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nY(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var nX = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/],
                nZ = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        name: "EventFilters",
                        setup: function(n) {
                            e = n0(t, n.getOptions())
                        },
                        processEvent: function(n, r, o) {
                            return e || (e = n0(t, o.getOptions())), ! function(e, t) {
                                if (e.type) {
                                    if ("transaction" === e.type && function(e, t) {
                                            if (!(null == t ? void 0 : t.length)) return !1;
                                            var n = e.transaction;
                                            return !!n && e$(n, t)
                                        }(e, t.ignoreTransactions)) return x && en.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat(eh(e))), !0
                                } else {
                                    var n, r, o, a, i;
                                    if (n = e, (null == (r = t.ignoreErrors) ? void 0 : r.length) && nJ(n).some(function(e) {
                                            return e$(e, r)
                                        })) return x && en.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat(eh(e))), !0;
                                    if ((null == (i = (o = e).exception) || null == (a = i.values) ? void 0 : a.length) && !o.message && !o.exception.values.some(function(e) {
                                            return e.stacktrace || e.type && "Error" !== e.type || e.value
                                        })) return x && en.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: ".concat(eh(e))), !0;
                                    if (function(e, t) {
                                            if (!(null == t ? void 0 : t.length)) return !1;
                                            var n = n1(e);
                                            return !!n && e$(n, t)
                                        }(e, t.denyUrls)) return x && en.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat(eh(e), ".\nUrl: ").concat(n1(e))), !0;
                                    if (! function(e, t) {
                                            if (!(null == t ? void 0 : t.length)) return !0;
                                            var n = n1(e);
                                            return !n || e$(n, t)
                                        }(e, t.allowUrls)) return x && en.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat(eh(e), ".\nUrl: ").concat(n1(e))), !0
                                }
                                return !1
                            }(n, e) ? n : null
                        }
                    }
                },
                nQ = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, nZ(n)), t = t = {
                        name: "InboundFilters"
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e
                };

            function n0() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return {
                    allowUrls: nK(e.allowUrls || []).concat(nK(t.allowUrls || [])),
                    denyUrls: nK(e.denyUrls || []).concat(nK(t.denyUrls || [])),
                    ignoreErrors: nK(e.ignoreErrors || []).concat(nK(t.ignoreErrors || []), nK(e.disableErrorDefaults ? [] : nX)),
                    ignoreTransactions: nK(e.ignoreTransactions || []).concat(nK(t.ignoreTransactions || []))
                }
            }

            function n1(e) {
                try {
                    var t, n, r, o = nK(null != (r = null == (t = e.exception) ? void 0 : t.values) ? r : []).reverse().find(function(e) {
                            var t, n, r;
                            return (null == (t = e.mechanism) ? void 0 : t.parent_id) === void 0 && (null == (r = e.stacktrace) || null == (n = r.frames) ? void 0 : n.length)
                        }),
                        a = null == o || null == (n = o.stacktrace) ? void 0 : n.frames;
                    return a ? function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(a) : null
                } catch (t) {
                    return x && en.error("Cannot extract url for event ".concat(eh(e))), null
                }
            }
            var n2 = new WeakMap,
                n3 = function() {
                    var e;
                    return {
                        name: "Dedupe",
                        processEvent: function(t) {
                            if (t.type) return t;
                            try {
                                var n, r, o, a, i, c, s, u, l, f;
                                if (n = t, (r = e) && (o = n, a = r, i = o.message, c = a.message, (i || c) && (!i || c) && (i || !c) && i === c && n8(o, a) && n4(o, a) && 1 || (s = n, u = r, l = n6(u), f = n6(s), l && f && l.type === f.type && l.value === f.value && n8(s, u) && n4(s, u)))) return x && en.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (e) {}
                            return e = t
                        }
                    }
                };

            function n4(e, t) {
                var n = eU(e),
                    r = eU(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r || r.length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var a = r[o],
                        i = n[o];
                    if (a.filename !== i.filename || a.lineno !== i.lineno || a.colno !== i.colno || a.function !== i.function) return !1
                }
                return !0
            }

            function n8(e, t) {
                var n = e.fingerprint,
                    r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return n.join("") === r.join("")
                } catch (e) {
                    return !1
                }
            }

            function n6(e) {
                var t, n;
                return null == (n = e.exception) || null == (t = n.values) ? void 0 : t[0]
            }
            var n5 = n(107);

            function n9(e, t) {
                var n, r, o = null != (r = null != t ? t : (n = e, n7().get(n))) ? r : [];
                if (0 !== o.length) {
                    var a, i, c, s, u = e.getOptions(),
                        l = (a = u._metadata, i = u.tunnel, c = e.getDsn(), s = {}, (null == a ? void 0 : a.sdk) && (s.sdk = {
                            name: a.sdk.name,
                            version: a.sdk.version
                        }), i && c && (s.dsn = tB(c)), t0(s, [
                            [{
                                type: "log",
                                item_count: o.length,
                                content_type: "application/vnd.sentry.items.log+json"
                            }, {
                                items: o
                            }]
                        ]));
                    n7().set(e, []), e.emit("flushLogs"), e.sendEnvelope(l)
                }
            }

            function n7() {
                return E("clientToLogBufferMap", function() {
                    return new WeakMap
                })
            }

            function re(e, t) {
                var n, r, o = null != (r = null != t ? t : (n = e, rt().get(n))) ? r : [];
                if (0 !== o.length) {
                    var a, i, c, s, u = e.getOptions(),
                        l = (a = u._metadata, i = u.tunnel, c = e.getDsn(), s = {}, (null == a ? void 0 : a.sdk) && (s.sdk = {
                            name: a.sdk.name,
                            version: a.sdk.version
                        }), i && c && (s.dsn = tB(c)), t0(s, [
                            [{
                                type: "trace_metric",
                                item_count: o.length,
                                content_type: "application/vnd.sentry.items.trace-metric+json"
                            }, {
                                items: o
                            }]
                        ]));
                    rt().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(l)
                }
            }

            function rt() {
                return E("clientToMetricBufferMap", function() {
                    return new WeakMap
                })
            }

            function rn(e) {
                if ("aggregates" in e) {
                    var t, n, r;
                    (null == (t = e.attrs) ? void 0 : t.ip_address) === void 0 && (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, e.attrs), r = r = {
                        ip_address: "{{auto}}"
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }), e.attrs = n)
                } else void 0 === e.ipAddress && (e.ipAddress = "{{auto}}")
            }
            var rr = Symbol.for("SentryBufferFullError");

            function ro() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                    t = new Set;
                return {
                    get $() {
                        return Array.from(t)
                    },
                    add: function(n) {
                        if (!(t.size < e)) return nj(rr);
                        var r = n();
                        return t.add(r), r.then(function() {
                            t.delete(r)
                        }, function() {
                            t.delete(r)
                        }), r
                    },
                    drain: function(e) {
                        if (!t.size) return nw(!0);
                        var n = Promise.allSettled(Array.from(t)).then(function() {
                            return !0
                        });
                        return e ? Promise.race([n, new Promise(function(t) {
                            return setTimeout(function() {
                                return t(!1)
                            }, e)
                        })]) : n
                    }
                }
            }

            function ra(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ri(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ed(),
                    n = parseInt("".concat(e), 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("".concat(e));
                return isNaN(r) ? 6e4 : r - t
            }

            function rc(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function rs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ru(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function rl(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            ru(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            ru(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function rf(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function rp(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        rf(e, t, n[t])
                    })
                }
                return e
            }

            function rd(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }

            function rv(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || rh(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ry(e) {
                return function(e) {
                    if (Array.isArray(e)) return rs(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || rh(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rm(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }

            function rh(e, t) {
                if (e) {
                    if ("string" == typeof e) return rs(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rs(e, t)
                }
            }

            function rb(e, t) {
                var n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(c) {
                    return function(s) {
                        var u = [c, s];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                            if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                            switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        a.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && a.label < o[1]) {
                                        a.label = o[1], o = u;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(u);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            u = t.call(e, a)
                        } catch (e) {
                            u = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var rg = "Not capturing exception because it's already been captured.",
                r_ = "Discarded session because of missing or non-string release",
                rS = Symbol.for("SentryInternalError"),
                rO = Symbol.for("SentryDoNotSendEventError");

            function rw(e) {
                return rf({
                    message: e
                }, rS, !0)
            }

            function rj(e) {
                return rf({
                    message: e
                }, rO, !0)
            }

            function rP(e) {
                return !!e && (void 0 === e ? "undefined" : rm(e)) === "object" && rS in e
            }

            function rk(e) {
                return !!e && (void 0 === e ? "undefined" : rm(e)) === "object" && rO in e
            }

            function rE(e, t, n, r, o) {
                var a, i = 0,
                    c = !1;
                e.on(n, function() {
                    i = 0, clearTimeout(a), c = !1
                }), e.on(t, function(t) {
                    (i += r(t)) >= 8e5 ? o(e) : c || (c = !0, a = setTimeout(function() {
                        o(e)
                    }, 5e3))
                }), e.on("flush", function() {
                    o(e)
                })
            }
            var rx = function() {
                var e;

                function t(e) {
                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = ro(null != (f = null == (s = e.transportOptions) ? void 0 : s.bufferSize) ? f : 64), e.dsn ? this._dsn = function(e) {
                            var t = "string" == typeof e ? function(e) {
                                var t, n = tF.exec(e);
                                if (!n) return void Z(function() {
                                    console.error("Invalid Sentry Dsn: ".concat(e))
                                });
                                var r = (t = n.slice(1), function(e) {
                                        if (Array.isArray(e)) return e
                                    }(t) || function(e, t) {
                                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != o) {
                                            var a = [],
                                                i = !0,
                                                c = !1;
                                            try {
                                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                            } catch (e) {
                                                c = !0, r = e
                                            } finally {
                                                try {
                                                    i || null == o.return || o.return()
                                                } finally {
                                                    if (c) throw r
                                                }
                                            }
                                            return a
                                        }
                                    }(t, 6) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return tU(e, 6);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tU(e, t)
                                        }
                                    }(t, 6) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    o = r[0],
                                    a = r[1],
                                    i = r[2],
                                    c = r[3],
                                    s = r[4],
                                    u = r[5],
                                    l = "",
                                    f = void 0 === u ? "" : u,
                                    p = f.split("/");
                                if (p.length > 1 && (l = p.slice(0, -1).join("/"), f = p.pop()), f) {
                                    var d = f.match(/^\d+/);
                                    d && (f = d[0])
                                }
                                return tH({
                                    host: void 0 === c ? "" : c,
                                    pass: void 0 === i ? "" : i,
                                    path: l,
                                    projectId: f,
                                    port: void 0 === s ? "" : s,
                                    protocol: o,
                                    publicKey: a
                                })
                            }(e) : tH(e);
                            if (t && function(e) {
                                    if (!x) return !0;
                                    var t = e.port,
                                        n = e.projectId,
                                        r = e.protocol;
                                    return !["protocol", "publicKey", "host", "projectId"].find(function(t) {
                                        return !e[t] && (en.error("Invalid Sentry Dsn: ".concat(t, " missing")), !0)
                                    }) && (n.match(/^\d+$/) ? "http" !== r && "https" !== r ? (en.error("Invalid Sentry Dsn: Invalid protocol ".concat(r)), !1) : !(t && isNaN(parseInt(t, 10))) || (en.error("Invalid Sentry Dsn: Invalid port ".concat(t)), !1) : (en.error("Invalid Sentry Dsn: Invalid projectId ".concat(n)), !1))
                                }(t)) return t
                        }(e.dsn) : x && en.warn("No DSN provided, client will not send events."), this._dsn) {
                        var n, r, o, a, i, c, s, u, l, f, p, d, v, y = (n = this._dsn, r = e.tunnel, o = e._metadata ? e._metadata.sdk : void 0, r || "".concat("".concat((a = n.protocol ? "".concat(n.protocol, ":") : "", i = n.port ? ":".concat(n.port) : "", "".concat(a, "//").concat(n.host).concat(i).concat(n.path ? "/".concat(n.path) : "", "/api/"))).concat(n.projectId, "/envelope/"), "?").concat((c = {
                            sentry_version: "7"
                        }, n.publicKey && (c.sentry_key = n.publicKey), o && (c.sentry_client = "".concat(o.name, "/").concat(o.version)), new URLSearchParams(c).toString())));
                        this._transport = e.transport(rd(rp({
                            tunnel: this._options.tunnel,
                            recordDroppedEvent: this.recordDroppedEvent.bind(this)
                        }, e.transportOptions), {
                            url: y
                        }))
                    }
                    this._options.enableLogs = null != (p = this._options.enableLogs) ? p : null == (u = this._options._experiments) ? void 0 : u.enableLogs, this._options.enableLogs && rE(this, "afterCaptureLog", "flushLogs", rC, n9), (null == (v = null != (d = this._options.enableMetrics) ? d : null == (l = this._options._experiments) ? void 0 : l.enableMetrics) || v) && rE(this, "afterCaptureMetric", "flushMetrics", rD, re)
                }
                return e = [{
                        key: "captureException",
                        value: function(e, t, n) {
                            var r = this,
                                o = ey();
                            if (e_(e)) return x && en.log(rg), o;
                            var a = rp({
                                event_id: o
                            }, t);
                            return this._process(function() {
                                return r.eventFromException(e, a).then(function(e) {
                                    return r._captureEvent(e, a, n)
                                }).then(function(e) {
                                    return e
                                })
                            }, "error"), a.event_id
                        }
                    }, {
                        key: "captureMessage",
                        value: function(e, t, n, r) {
                            var o = this,
                                a = rp({
                                    event_id: ey()
                                }, n),
                                i = M(e) ? e : String(e),
                                c = N(e),
                                s = c ? this.eventFromMessage(i, t, a) : this.eventFromException(e, a);
                            return this._process(function() {
                                return s.then(function(e) {
                                    return o._captureEvent(e, a, r)
                                })
                            }, c ? "unknown" : "error"), a.event_id
                        }
                    }, {
                        key: "captureEvent",
                        value: function(e, t, n) {
                            var r = this,
                                o = ey();
                            if ((null == t ? void 0 : t.originalException) && e_(t.originalException)) return x && en.log(rg), o;
                            var a = rp({
                                    event_id: o
                                }, t),
                                i = e.sdkProcessingMetadata || {},
                                c = i.capturedSpanScope,
                                s = i.capturedSpanIsolationScope,
                                u = rT(e.type);
                            return this._process(function() {
                                return r._captureEvent(e, a, c || n, s)
                            }, u), a.event_id
                        }
                    }, {
                        key: "captureSession",
                        value: function(e) {
                            this.sendSession(e), eP(e, {
                                init: !1
                            })
                        }
                    }, {
                        key: "getDsn",
                        value: function() {
                            return this._dsn
                        }
                    }, {
                        key: "getOptions",
                        value: function() {
                            return this._options
                        }
                    }, {
                        key: "getSdkMetadata",
                        value: function() {
                            return this._options._metadata
                        }
                    }, {
                        key: "getTransport",
                        value: function() {
                            return this._transport
                        }
                    }, {
                        key: "flush",
                        value: function(e) {
                            return rl(function() {
                                var t, n, r;
                                return rb(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!(t = this._transport)) return [2, !0];
                                            return this.emit("flush"), [4, this._isClientDoneProcessing(e)];
                                        case 1:
                                            return n = o.sent(), [4, t.flush(e)];
                                        case 2:
                                            return r = o.sent(), [2, n && r]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            return rl(function() {
                                var t;
                                return rb(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.flush(e)];
                                        case 1:
                                            return t = n.sent(), this.getOptions().enabled = !1, this.emit("close"), [2, t]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "getEventProcessors",
                        value: function() {
                            return this._eventProcessors
                        }
                    }, {
                        key: "addEventProcessor",
                        value: function(e) {
                            this._eventProcessors.push(e)
                        }
                    }, {
                        key: "init",
                        value: function() {
                            (this._isEnabled() || this._options.integrations.some(function(e) {
                                return e.name.startsWith("Spotlight")
                            })) && this._setupIntegrations()
                        }
                    }, {
                        key: "getIntegrationByName",
                        value: function(e) {
                            return this._integrations[e]
                        }
                    }, {
                        key: "addIntegration",
                        value: function(e) {
                            var t = this._integrations[e.name];
                            nV(this, e, this._integrations), t || nG(this, [e])
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.emit("beforeSendEvent", e, n);
                            var r = (c = this._dsn, s = this._options._metadata, u = this._options.tunnel, l = t6(s), f = e.type && "replay_event" !== e.type ? e.type : "event", ! function(e, t) {
                                    if (t) {
                                        var n, r, o, a, i, c, s = e.sdk || {};
                                        n = ne({}, s), r = r = {
                                            name: s.name || t.name,
                                            version: s.version || t.version,
                                            integrations: nt((null == (o = e.sdk) ? void 0 : o.integrations) || []).concat(nt(t.integrations || [])),
                                            packages: nt((null == (a = e.sdk) ? void 0 : a.packages) || []).concat(nt(t.packages || [])),
                                            settings: (null == (i = e.sdk) ? void 0 : i.settings) || t.settings ? ne({}, null == (c = e.sdk) ? void 0 : c.settings, t.settings) : void 0
                                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r)
                                            }
                                            return n
                                        })(Object(r)).forEach(function(e) {
                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                                        }), e.sdk = n
                                    }
                                }(e, null == s ? void 0 : s.sdk), d = null == (p = e.sdkProcessingMetadata) ? void 0 : p.dynamicSamplingContext, v = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            var r;
                                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : e[t] = r
                                        })
                                    }
                                    return e
                                }({
                                    event_id: e.event_id,
                                    sent_at: new Date().toISOString()
                                }, l && {
                                    sdk: l
                                }, !!u && c && {
                                    dsn: tB(c)
                                }, d && {
                                    trace: d
                                }), delete e.sdkProcessingMetadata, t0(v, [
                                    [{
                                        type: f
                                    }, e]
                                ])),
                                o = !0,
                                a = !1,
                                i = void 0;
                            try {
                                for (var c, s, u, l, f, p, d, v, y, m = (n.attachments || [])[Symbol.iterator](); !(o = (y = m.next()).done); o = !0) {
                                    var h = y.value;
                                    r = function(e, t) {
                                        var n, r = tZ(e, 2);
                                        return [r[0], ((function(e) {
                                            if (Array.isArray(e)) return tX(e)
                                        })(n = r[1]) || function(e) {
                                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                        }(n) || tQ(n) || function() {
                                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }()).concat([t])]
                                    }(r, function(e) {
                                        var t = "string" == typeof e.data ? t3(e.data) : e.data;
                                        return [{
                                            type: "attachment",
                                            length: t.length,
                                            filename: e.filename,
                                            content_type: e.contentType,
                                            attachment_type: e.attachmentType
                                        }, t]
                                    }(h))
                                }
                            } catch (e) {
                                a = !0, i = e
                            } finally {
                                try {
                                    o || null == m.return || m.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            this.sendEnvelope(r).then(function(n) {
                                return t.emit("afterSendEvent", e, n)
                            })
                        }
                    }, {
                        key: "sendSession",
                        value: function(e) {
                            var t, n, r, o, a = this._options,
                                i = a.release,
                                c = a.environment,
                                s = void 0 === c ? tN : c;
                            if ("aggregates" in e) {
                                var u = e.attrs || {};
                                if (!u.release && !i) {
                                    x && en.warn(r_);
                                    return
                                }
                                u.release = u.release || i, u.environment = u.environment || s, e.attrs = u
                            } else {
                                if (!e.release && !i) {
                                    x && en.warn(r_);
                                    return
                                }
                                e.release = e.release || i, e.environment = e.environment || s
                            }
                            this.emit("beforeSendSession", e);
                            var l = (t = this._dsn, n = this._options._metadata, r = this._options.tunnel, o = t6(n), t0(ne({
                                sent_at: new Date().toISOString()
                            }, o && {
                                sdk: o
                            }, !!r && t && {
                                dsn: tB(t)
                            }), ["aggregates" in e ? [{
                                type: "sessions"
                            }, e] : [{
                                type: "session"
                            }, e.toJSON()]]));
                            this.sendEnvelope(l)
                        }
                    }, {
                        key: "recordDroppedEvent",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            if (this._options.sendClientReports) {
                                var r = "".concat(e, ":").concat(t);
                                x && en.log('Recording outcome: "'.concat(r, '"').concat(n > 1 ? " (".concat(n, " times)") : "")), this._outcomes[r] = (this._outcomes[r] || 0) + n
                            }
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this._hooks[e] = this._hooks[e] || new Set,
                                r = function() {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return t.apply(void 0, ry(n))
                                };
                            return n.add(r),
                                function() {
                                    n.delete(r)
                                }
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            var o = this._hooks[e];
                            o && o.forEach(function(e) {
                                return e.apply(void 0, ry(n))
                            })
                        }
                    }, {
                        key: "sendEnvelope",
                        value: function(e) {
                            return rl(function() {
                                var t;
                                return rb(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.emit("beforeEnvelope", e), !(this._isEnabled() && this._transport)) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this._transport.send(e)];
                                        case 2:
                                            return [2, n.sent()];
                                        case 3:
                                            return t = n.sent(), x && en.error("Error while sending envelope:", t), [2, {}];
                                        case 4:
                                            return x && en.error("Transport disabled"), [2, {}]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "_setupIntegrations",
                        value: function() {
                            var e, t, n = this._options.integrations;
                            this._integrations = (e = this, t = {}, n.forEach(function(n) {
                                n && nV(e, n, t)
                            }), t), nG(this, n)
                        }
                    }, {
                        key: "_updateSessionFromEvent",
                        value: function(e, t) {
                            var n = "fatal" === t.level,
                                r = !1,
                                o = null == (u = t.exception) ? void 0 : u.values;
                            if (o) {
                                r = !0, n = !1;
                                var a = !0,
                                    i = !1,
                                    c = void 0;
                                try {
                                    for (var s, u, l, f = o[Symbol.iterator](); !(a = (l = f.next()).done); a = !0)
                                        if ((null == (s = l.value.mechanism) ? void 0 : s.handled) === !1) {
                                            n = !0;
                                            break
                                        }
                                } catch (e) {
                                    i = !0, c = e
                                } finally {
                                    try {
                                        a || null == f.return || f.return()
                                    } finally {
                                        if (i) throw c
                                    }
                                }
                            }
                            var p = "ok" === e.status;
                            (p && 0 === e.errors || p && n) && (eP(e, rd(rp({}, n && {
                                status: "crashed"
                            }), {
                                errors: e.errors || Number(r || n)
                            })), this.captureSession(e))
                        }
                    }, {
                        key: "_isClientDoneProcessing",
                        value: function(e) {
                            return rl(function() {
                                var t;
                                return rb(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            t = 0, n.label = 1;
                                        case 1:
                                            if (!(!e || t < e)) return [3, 3];
                                            return [4, new Promise(function(e) {
                                                return setTimeout(e, 1)
                                            })];
                                        case 2:
                                            if (n.sent(), !this._numProcessing) return [2, !0];
                                            return t++, [3, 1];
                                        case 3:
                                            return [2, !1]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "_isEnabled",
                        value: function() {
                            return !1 !== this.getOptions().enabled && void 0 !== this._transport
                        }
                    }, {
                        key: "_prepareEvent",
                        value: function(e, t, n, r) {
                            var o, a, l, f, p, d, v, y, m, h, b, g, _, S, O, w, P, k, T, A, I, D, C, R, L, M, N, U, q, B, H, $, z, W, G, V, J, Y, K, X, Z, Q, ee, et, er, eo, ea, ei = this,
                                ec = this.getOptions(),
                                es = Object.keys(this._integrations);
                            return !t.integrations && (null == es ? void 0 : es.length) && (t.integrations = es), this.emit("preprocessEvent", e, t), e.type || r.setLastEventId(e.event_id || t.event_id), ($ = void 0 === (H = ec.normalizeDepth) ? 3 : H, W = void 0 === (z = ec.normalizeMaxBreadth) ? 1e3 : z, G = nD({}, e), V = V = {
                                event_id: e.event_id || t.event_id || ey(),
                                timestamp: e.timestamp || eS()
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(V)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(V)).forEach(function(e) {
                                Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(V, e))
                            }), J = G, Y = t.integrations || ec.integrations.map(function(e) {
                                return e.name
                            }), o = J, p = (a = ec).environment, d = a.release, v = a.dist, y = a.maxValueLength, o.environment = o.environment || p || tN, !o.release && d && (o.release = d), !o.dist && v && (o.dist = v), (null == (m = o.request) ? void 0 : m.url) && y && (m.url = eF(m.url, y)), y && (null == (f = o.exception) || null == (l = f.values) || l.forEach(function(e) {
                                e.value && (e.value = eF(e.value, y))
                            })), h = J, (b = Y).length > 0 && (h.sdk = h.sdk || {}, h.sdk.integrations = nC(h.sdk.integrations || []).concat(nC(b))), this && this.emit("applyFrameMetadata", e), void 0 === e.type && (g = J, O = function(e) {
                                var t = j._sentryDebugIds,
                                    n = j._debugIds;
                                if (!t && !n) return {};
                                var r = t ? Object.keys(t) : [],
                                    o = n ? Object.keys(n) : [];
                                if (u && r.length === c && o.length === s) return u;
                                c = r.length, s = o.length, u = {}, i || (i = {});
                                var a = function(t, n) {
                                    var r = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (var c, s = t[Symbol.iterator](); !(r = (c = s.next()).done); r = !0) {
                                            var l = c.value,
                                                f = n[l],
                                                p = null == i ? void 0 : i[l];
                                            if (p && u && f) u[p[0]] = f, i && (i[l] = [p[0], f]);
                                            else if (f)
                                                for (var d = e(l), v = d.length - 1; v >= 0; v--) {
                                                    var y = d[v],
                                                        m = null == y ? void 0 : y.filename;
                                                    if (m && u && i) {
                                                        u[m] = f, i[l] = [m, f];
                                                        break
                                                    }
                                                }
                                        }
                                    } catch (e) {
                                        o = !0, a = e
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (o) throw a
                                        }
                                    }
                                };
                                return t && a(r, t), n && a(o, n), u
                            }(ec.stackParser), null == (S = g.exception) || null == (_ = S.values) || _.forEach(function(e) {
                                var t, n;
                                null == (n = e.stacktrace) || null == (t = n.frames) || t.forEach(function(e) {
                                    e.filename && (e.debug_id = O[e.filename])
                                })
                            })), K = function(e, t) {
                                if (!t) return e;
                                var n = e ? e.clone() : new eY;
                                return n.update(t), n
                            }(n, t.captureContext), t.mechanism && eg(J, t.mechanism), X = this ? this.getEventProcessors() : [], Z = E("globalScope", function() {
                                return new eY
                            }).getScopeData(), r && nT(Z, r.getScopeData()), K && nT(Z, K.getScopeData()), Q = Z, (ee = nC(t.attachments || []).concat(nC(Q.attachments))).length && (t.attachments = ee), et = Q.fingerprint, er = Q.span, eo = Q.breadcrumbs, ea = Q.sdkProcessingMetadata, w = J, k = (P = Q).extra, T = P.tags, A = P.user, I = P.contexts, D = P.level, C = P.transactionName, Object.keys(k).length && (w.extra = nE({}, k, w.extra)), Object.keys(T).length && (w.tags = nE({}, T, w.tags)), Object.keys(A).length && (w.user = nE({}, A, w.user)), Object.keys(I).length && (w.contexts = nE({}, I, w.contexts)), D && (w.level = D), C && "transaction" !== w.type && (w.transaction = C), er && function(e, t) {
                                e.contexts = nE({
                                    trace: (r = (n = t.spanContext()).spanId, o = n.traceId, i = (a = n.isRemote) ? r : tE(t).parent_span_id, c = td(t).scope, {
                                        parent_span_id: i,
                                        span_id: a ? (null == c ? void 0 : c.getPropagationContext().propagationSpanId) || eE() : r,
                                        trace_id: o
                                    })
                                }, e.contexts), e.sdkProcessingMetadata = nE({
                                    dynamicSamplingContext: tG(t)
                                }, e.sdkProcessingMetadata);
                                var n, r, o, a, i, c, s = tE(tR(t)).description;
                                s && !e.transaction && "transaction" === e.type && (e.transaction = s)
                            }(J, er), R = J, L = et, R.fingerprint = R.fingerprint ? Array.isArray(R.fingerprint) ? R.fingerprint : [R.fingerprint] : [], L && (R.fingerprint = R.fingerprint.concat(L)), R.fingerprint.length || delete R.fingerprint, M = J, N = eo, U = nx(M.breadcrumbs || []).concat(nx(N)), M.breadcrumbs = U.length ? U : void 0, q = J, B = ea, q.sdkProcessingMetadata = nE({}, q.sdkProcessingMetadata, B), (function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                                try {
                                    var o = function e(t, n, r, o) {
                                        var a = r[o];
                                        if (!t || !a) return t;
                                        var i = a(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))), r.forEach(function(t) {
                                                    var r;
                                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : e[t] = r
                                                })
                                            }
                                            return e
                                        }({}, t), n);
                                        return (x && null === i && en.log('Event processor "'.concat(a.id || "?", '" dropped event')), F(i)) ? i.then(function(t) {
                                            return e(t, n, r, o + 1)
                                        }) : e(i, n, r, o + 1)
                                    }(t, n, e, r);
                                    return F(o) ? o : nw(o)
                                } catch (e) {
                                    return nj(e)
                                }
                            })(nC(X).concat(nC(Q.eventProcessors)), J, t).then(function(e) {
                                return (e && function(e) {
                                    var t, n, r = {};
                                    if (null == (n = e.exception) || null == (t = n.values) || t.forEach(function(e) {
                                            var t, n;
                                            null == (n = e.stacktrace) || null == (t = n.frames) || t.forEach(function(e) {
                                                e.debug_id && (e.abs_path ? r[e.abs_path] = e.debug_id : e.filename && (r[e.filename] = e.debug_id), delete e.debug_id)
                                            })
                                        }), 0 !== Object.keys(r).length) {
                                        e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                                        var o = e.debug_meta.images;
                                        Object.entries(r).forEach(function(e) {
                                            var t = function(e) {
                                                    if (Array.isArray(e)) return e
                                                }(e) || function(e, t) {
                                                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                    if (null != o) {
                                                        var a = [],
                                                            i = !0,
                                                            c = !1;
                                                        try {
                                                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                                        } catch (e) {
                                                            c = !0, r = e
                                                        } finally {
                                                            try {
                                                                i || null == o.return || o.return()
                                                            } finally {
                                                                if (c) throw r
                                                            }
                                                        }
                                                        return a
                                                    }
                                                }(e, 2) || nR(e, 2) || function() {
                                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                }(),
                                                n = t[0],
                                                r = t[1];
                                            o.push({
                                                type: "sourcemap",
                                                code_file: n,
                                                debug_id: r
                                            })
                                        })
                                    }
                                }(e), "number" == typeof $ && $ > 0) ? function(e, t, n) {
                                    if (!e) return null;
                                    var r, o, a = nD({}, e, e.breadcrumbs && {
                                        breadcrumbs: e.breadcrumbs.map(function(e) {
                                            return nD({}, e, e.data && {
                                                data: tK(e.data, t, n)
                                            })
                                        })
                                    }, e.user && {
                                        user: tK(e.user, t, n)
                                    }, e.contexts && {
                                        contexts: tK(e.contexts, t, n)
                                    }, e.extra && {
                                        extra: tK(e.extra, t, n)
                                    });
                                    return (null == (r = e.contexts) ? void 0 : r.trace) && a.contexts && (a.contexts.trace = e.contexts.trace, e.contexts.trace.data && (a.contexts.trace.data = tK(e.contexts.trace.data, t, n))), e.spans && (a.spans = e.spans.map(function(e) {
                                        return nD({}, e, e.data && {
                                            data: tK(e.data, t, n)
                                        })
                                    })), (null == (o = e.contexts) ? void 0 : o.flags) && a.contexts && (a.contexts.flags = tK(e.contexts.flags, 3, n)), a
                                }(e, $, W) : e
                            })).then(function(e) {
                                var r, o, a, i;
                                return null === e ? e : (ei.emit("postprocessEvent", e, t), e.contexts = rp({
                                    trace: (o = (r = n.getPropagationContext()).traceId, a = r.parentSpanId, i = {
                                        trace_id: o,
                                        span_id: r.propagationSpanId || eE()
                                    }, a && (i.parent_span_id = a), i)
                                }, e.contexts), e.sdkProcessingMetadata = rp({
                                    dynamicSamplingContext: tW(ei, n)
                                }, e.sdkProcessingMetadata), e)
                            })
                        }
                    }, {
                        key: "_captureEvent",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3(),
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e4();
                            return x && rA(e) && en.log("Captured error event `".concat(nJ(e)[0] || "<unknown>", "`")), this._processEvent(e, t, n, r).then(function(e) {
                                return e.event_id
                            }, function(e) {
                                x && (rk(e) ? en.log(e.message) : rP(e) ? en.warn(e.message) : en.warn(e))
                            })
                        }
                    }, {
                        key: "_processEvent",
                        value: function(e, t, n, r) {
                            var o = this,
                                a = this.getOptions(),
                                i = a.sampleRate,
                                c = rI(e),
                                s = rA(e),
                                u = e.type || "error",
                                l = "before send for type `".concat(u, "`"),
                                f = void 0 === i ? void 0 : tu(i);
                            if (s && "number" == typeof f && ep() > f) return this.recordDroppedEvent("sample_rate", "error"), nj(rj("Discarding event because it's not included in the random sample (sampling rate = ".concat(i, ")")));
                            var p = rT(e.type);
                            return this._prepareEvent(e, t, n, r).then(function(e) {
                                if (null === e) throw o.recordDroppedEvent("event_processor", p), rj("An event processor returned `null`, will not send event.");
                                return t.data && !0 === t.data.__sentry__ ? e : function(e, t) {
                                    var n = "".concat(t, " must return `null` or a valid event.");
                                    if (F(e)) return e.then(function(e) {
                                        if (!U(e) && null !== e) throw rw(n);
                                        return e
                                    }, function(e) {
                                        throw rw("".concat(t, " rejected with ").concat(e))
                                    });
                                    if (!U(e) && null !== e) throw rw(n);
                                    return e
                                }(function(e, t, n, r) {
                                    var o = t.beforeSend,
                                        a = t.beforeSendTransaction,
                                        i = t.beforeSendSpan,
                                        c = t.ignoreSpans,
                                        s = n;
                                    if (rA(s) && o) return o(s, r);
                                    if (rI(s)) {
                                        if (i || c) {
                                            var u = (y = (v = null != (p = null == (f = (l = s).contexts) ? void 0 : f.trace) ? p : {}).trace_id, m = v.parent_span_id, h = v.span_id, b = v.status, g = v.origin, _ = v.data, S = v.op, {
                                                data: null != _ ? _ : {},
                                                description: l.transaction,
                                                op: S,
                                                parent_span_id: m,
                                                span_id: null != h ? h : "",
                                                start_timestamp: null != (d = l.start_timestamp) ? d : 0,
                                                status: b,
                                                timestamp: l.timestamp,
                                                trace_id: null != y ? y : "",
                                                origin: g,
                                                profile_id: null == _ ? void 0 : _[ti],
                                                exclusive_time: null == _ ? void 0 : _[tc],
                                                measurements: l.measurements,
                                                is_segment: !0
                                            });
                                            if ((null == c ? void 0 : c.length) && t9(u, c)) return null;
                                            if (i) {
                                                var l, f, p, d, v, y, m, h, b, g, _, S, O = i(u);
                                                O ? s = ek(n, {
                                                    type: "transaction",
                                                    timestamp: O.timestamp,
                                                    start_timestamp: O.start_timestamp,
                                                    transaction: O.description,
                                                    contexts: {
                                                        trace: {
                                                            trace_id: O.trace_id,
                                                            span_id: O.span_id,
                                                            parent_span_id: O.parent_span_id,
                                                            op: O.op,
                                                            status: O.status,
                                                            origin: O.origin,
                                                            data: function(e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                    }))), r.forEach(function(t) {
                                                                        rc(e, t, n[t])
                                                                    })
                                                                }
                                                                return e
                                                            }({}, O.data, O.profile_id && rc({}, ti, O.profile_id), O.exclusive_time && rc({}, tc, O.exclusive_time))
                                                        }
                                                    },
                                                    measurements: O.measurements
                                                }) : tM()
                                            }
                                            if (s.spans) {
                                                var w = [],
                                                    j = s.spans,
                                                    P = !0,
                                                    k = !1,
                                                    E = void 0;
                                                try {
                                                    for (var x, T = j[Symbol.iterator](); !(P = (x = T.next()).done); P = !0) {
                                                        var A = x.value;
                                                        if ((null == c ? void 0 : c.length) && t9(A, c)) {
                                                            ! function(e, t) {
                                                                var n = t.parent_span_id,
                                                                    r = t.span_id;
                                                                if (n) {
                                                                    var o = !0,
                                                                        a = !1,
                                                                        i = void 0;
                                                                    try {
                                                                        for (var c, s = e[Symbol.iterator](); !(o = (c = s.next()).done); o = !0) {
                                                                            var u = c.value;
                                                                            u.parent_span_id === r && (u.parent_span_id = n)
                                                                        }
                                                                    } catch (e) {
                                                                        a = !0, i = e
                                                                    } finally {
                                                                        try {
                                                                            o || null == s.return || s.return()
                                                                        } finally {
                                                                            if (a) throw i
                                                                        }
                                                                    }
                                                                }
                                                            }(j, A);
                                                            continue
                                                        }
                                                        if (i) {
                                                            var I = i(A);
                                                            I ? w.push(I) : (tM(), w.push(A))
                                                        } else w.push(A)
                                                    }
                                                } catch (e) {
                                                    k = !0, E = e
                                                } finally {
                                                    try {
                                                        P || null == T.return || T.return()
                                                    } finally {
                                                        if (k) throw E
                                                    }
                                                }
                                                var D = s.spans.length - w.length;
                                                D && e.recordDroppedEvent("before_send", "span", D), s.spans = w
                                            }
                                        }
                                        if (a) {
                                            if (s.spans) {
                                                var C = s.spans.length;
                                                s.sdkProcessingMetadata = rd(rp({}, n.sdkProcessingMetadata), {
                                                    spanCountBeforeProcessing: C
                                                })
                                            }
                                            return a(s, r)
                                        }
                                    }
                                    return s
                                }(o, a, e, t), l)
                            }).then(function(a) {
                                if (null === a) {
                                    if (o.recordDroppedEvent("before_send", p), c) {
                                        var i = 1 + (e.spans || []).length;
                                        o.recordDroppedEvent("before_send", "span", i)
                                    }
                                    throw rj("".concat(l, " returned `null`, will not send event."))
                                }
                                var u = n.getSession() || r.getSession();
                                if (s && u && o._updateSessionFromEvent(u, a), c) {
                                    var f, d = ((null == (f = a.sdkProcessingMetadata) ? void 0 : f.spanCountBeforeProcessing) || 0) - (a.spans ? a.spans.length : 0);
                                    d > 0 && o.recordDroppedEvent("before_send", "span", d)
                                }
                                var v = a.transaction_info;
                                return c && v && a.transaction !== e.transaction && (a.transaction_info = rd(rp({}, v), {
                                    source: "custom"
                                })), o.sendEvent(a, t), a
                            }).then(null, function(e) {
                                if (rk(e) || rP(e)) throw e;
                                throw o.captureException(e, {
                                    mechanism: {
                                        handled: !1,
                                        type: "internal"
                                    },
                                    data: {
                                        __sentry__: !0
                                    },
                                    originalException: e
                                }), rw("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(e))
                            })
                        }
                    }, {
                        key: "_process",
                        value: function(e, t) {
                            var n = this;
                            this._numProcessing++, this._promiseBuffer.add(e).then(function(e) {
                                return n._numProcessing--, e
                            }, function(e) {
                                return n._numProcessing--, e === rr && n.recordDroppedEvent("queue_overflow", t), e
                            })
                        }
                    }, {
                        key: "_clearOutcomes",
                        value: function() {
                            var e = this._outcomes;
                            return this._outcomes = {}, Object.entries(e).map(function(e) {
                                var t = rv(e, 2),
                                    n = t[0],
                                    r = t[1],
                                    o = rv(n.split(":"), 2);
                                return {
                                    reason: o[0],
                                    category: o[1],
                                    quantity: r
                                }
                            })
                        }
                    }, {
                        key: "_flushOutcomes",
                        value: function() {
                            x && en.log("Flushing outcomes...");
                            var e, t = this._clearOutcomes();
                            if (0 === t.length) {
                                x && en.log("No outcomes to send");
                                return
                            }
                            if (!this._dsn) {
                                x && en.log("No dsn provided, will not send outcomes");
                                return
                            }
                            x && en.log("Sending outcomes:", t);
                            var n = t0((e = this._options.tunnel && tB(this._dsn)) ? {
                                dsn: e
                            } : {}, [
                                [{
                                    type: "client_report"
                                }, {
                                    timestamp: eS(),
                                    discarded_events: t
                                }]
                            ]);
                            this.sendEnvelope(n)
                        }
                    }],
                    function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, e), t
            }();

            function rT(e) {
                return "replay_event" === e ? "replay" : e || "error"
            }

            function rA(e) {
                return void 0 === e.type
            }

            function rI(e) {
                return "transaction" === e.type
            }

            function rD(e) {
                var t = 0;
                return e.name && (t += 2 * e.name.length), (t += 8) + rR(e.attributes)
            }

            function rC(e) {
                var t = 0;
                return e.message && (t += 2 * e.message.length), t + rR(e.attributes)
            }

            function rR(e) {
                if (!e) return 0;
                var t = 0;
                return Object.values(e).forEach(function(e) {
                    Array.isArray(e) ? t += e.length * rL(e[0]) : N(e) ? t += rL(e) : t += 100
                }), t
            }

            function rL(e) {
                return "string" == typeof e ? 2 * e.length : "number" == typeof e ? 8 : 4 * ("boolean" == typeof e)
            }

            function rM(e) {
                return I(e) && "__sentry_fetch_url_host__" in e && "string" == typeof e.__sentry_fetch_url_host__ ? "".concat(e.message, " (").concat(e.__sentry_fetch_url_host__, ")") : e.message
            }

            function rN(e, t) {
                return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }

            function rU(e, t) {
                var n, r, o, a, i = rF(e, t),
                    c = {
                        type: !(r = null == (n = t) ? void 0 : n.name) && rH(n) ? n.message && Array.isArray(n.message) && 2 == n.message.length ? n.message[0] : "WebAssembly.Exception" : r,
                        value: (a = null == (o = t) ? void 0 : o.message, rH(o) ? Array.isArray(o.message) && 2 == o.message.length ? o.message[1] : "wasm exception" : a ? a.error && "string" == typeof a.error.message ? rM(a.error) : rM(o) : "No error message")
                    };
                return i.length && (c.stacktrace = {
                    frames: i
                }), void 0 === c.type && "" === c.value && (c.value = "Unrecoverable error caught"), c
            }

            function rq(e, t) {
                return {
                    exception: {
                        values: [rU(e, t)]
                    }
                }
            }

            function rF(e, t) {
                var n, r, o = t.stacktrace || t.stack || "",
                    a = (n = t) && rB.test(n.message) ? 1 : 0,
                    i = "number" == typeof(r = t).framesToPop ? r.framesToPop : 0;
                try {
                    return e(o, a, i)
                } catch (e) {}
                return []
            }
            var rB = /Minified React error #\d+;/i;

            function rH(e) {
                return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && rN(e, WebAssembly.Exception)
            }

            function r$(e, t, n, r, o) {
                var a;
                if (C(t) && t.error) return rq(e, t.error);
                if (R(t) || D(t, "DOMException")) {
                    if ("stack" in t) a = rq(e, t);
                    else {
                        var i, c, s = t.name || (R(t) ? "DOMError" : "DOMException"),
                            u = t.message ? "".concat(s, ": ").concat(t.message) : s;
                        eb(a = rz(e, u, n, r), u)
                    }
                    return "code" in t && (a.tags = (i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, a.tags), c = c = {
                        "DOMException.code": "".concat(t.code)
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(c)).forEach(function(e) {
                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
                    }), i)), a
                }
                return I(t) ? rq(e, t) : (U(t) || q(t) ? eg(a = function(e, t, n, r) {
                    var o = e6(),
                        a = null == o ? void 0 : o.getOptions().normalizeDepth,
                        i = function(e) {
                            for (var t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    var n = e[t];
                                    if (rN(n, Error)) return n
                                }
                        }(t),
                        c = {
                            __serialized__: function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                                    o = tK(t, n);
                                return ~-encodeURI(JSON.stringify(o)).split(/%..|./).length > r ? e(t, n - 1, r) : o
                            }(t, a)
                        };
                    if (i) return {
                        exception: {
                            values: [rU(e, i)]
                        },
                        extra: c
                    };
                    var s = {
                        exception: {
                            values: [{
                                type: q(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                                value: function(e, t) {
                                    var n, r = t.isUnhandledRejection,
                                        o = ((n = Object.keys(es(e))).sort(), n[0] ? n.join(", ") : "[object has no keys]"),
                                        a = r ? "promise rejection" : "exception";
                                    if (C(e)) return "Event `ErrorEvent` captured as ".concat(a, " with message `").concat(e.message, "`");
                                    if (q(e)) {
                                        var i = function(e) {
                                            try {
                                                var t = Object.getPrototypeOf(e);
                                                return t ? t.constructor.name : void 0
                                            } catch (e) {}
                                        }(e);
                                        return "Event `".concat(i, "` (type=").concat(e.type, ") captured as ").concat(a)
                                    }
                                    return "Object captured as ".concat(a, " with keys: ").concat(o)
                                }(t, {
                                    isUnhandledRejection: r
                                })
                            }]
                        },
                        extra: c
                    };
                    if (n) {
                        var u = rF(e, n);
                        u.length && (s.exception.values[0].stacktrace = {
                            frames: u
                        })
                    }
                    return s
                }(e, t, n, o), {
                    synthetic: !0
                }) : (eb(a = rz(e, t, n, r), "".concat(t), void 0), eg(a, {
                    synthetic: !0
                })), a)
            }

            function rz(e, t, n, r) {
                var o = {};
                if (r && n) {
                    var a = rF(e, n);
                    a.length && (o.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: a
                            }
                        }]
                    }), eg(o, {
                        synthetic: !0
                    })
                }
                return M(t) ? o.logentry = {
                    message: t.__sentry_template_string__,
                    params: t.__sentry_template_values__
                } : o.message = t, o
            }

            function rW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }
            var rG = 0;

            function rV(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("function" != typeof e) return e;
                try {
                    var n = e.__sentry_wrapped__;
                    if (n)
                        if ("function" == typeof n) return n;
                        else return e;
                    if (ec(e)) return e
                } catch (t) {
                    return e
                }
                var r = function() {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    try {
                        var a = r.map(function(e) {
                            return rV(e, t)
                        });
                        return e.apply(this, a)
                    } catch (e) {
                        throw rG++, setTimeout(function() {
                            rG--
                        }), e8(function(n) {
                            n.addEventProcessor(function(e) {
                                var n, o;
                                return t.mechanism && (eb(e, void 0, void 0), eg(e, t.mechanism)), n = rW({}, e.extra), o = o = {
                                    arguments: r
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(o)).forEach(function(e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                }), e.extra = n, e
                            }), e3().captureException(e, function(e) {
                                if (e) return function(e) {
                                    return (null != eY && "undefined" != typeof Symbol && eY[Symbol.hasInstance] ? !!eY[Symbol.hasInstance](e) : e instanceof eY) || "function" == typeof e
                                }(e) || Object.keys(e).some(function(e) {
                                    return nL.includes(e)
                                }) ? {
                                    captureContext: e
                                } : e
                            }(void 0))
                        }), e
                    }
                };
                try {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
                } catch (e) {}
                ei(r, e), ea(e, "__sentry_wrapped__", r);
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: function() {
                            return e.name
                        }
                    })
                } catch (e) {}
                return r
            }

            function rJ() {
                var e = G(),
                    t = (j.document || {}).referrer,
                    n = (j.navigator || {}).userAgent;
                return {
                    url: e,
                    headers: rW({}, t && {
                        Referer: t
                    }, n && {
                        "User-Agent": n
                    })
                }
            }

            function rY(e, t, n) {
                return (rY = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = rK(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(n || e) : o.value
                    }
                })(e, t, n || e)
            }

            function rK(e) {
                return (rK = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function rX(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function rZ(e, t) {
                return (rZ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function rQ() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (rQ = function() {
                    return !!e
                })()
            }
            var r0 = function(e) {
                    var t;
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");

                    function n(e) {
                        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
                        var t, r, o, a, i, c, s, u = (o = e, rX({
                            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : null == (a = j.SENTRY_RELEASE) ? void 0 : a.id,
                            sendClientReports: !0,
                            parentSpanIsAlwaysRootSpan: !0
                        }, o));
                        ! function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [t],
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "npm",
                                o = e._metadata || {};
                            o.sdk || (o.sdk = {
                                name: "sentry.javascript.".concat(t),
                                packages: n.map(function(e) {
                                    return {
                                        name: "".concat(r, ":@sentry/").concat(e),
                                        version: w
                                    }
                                }),
                                version: w
                            }), e._metadata = o
                        }(u, "browser", ["browser"], j.SENTRY_SDK_SOURCE || (0, n5.e)()), (null == (c = u._metadata) ? void 0 : c.sdk) && (u._metadata.sdk.settings = rX({
                            infer_ip: u.sendDefaultPii ? "auto" : "never"
                        }, u._metadata.sdk.settings)), t = n, r = [u], t = rK(t);
                        var l = (i = function(e, t) {
                                var n;
                                if (t && ("object" == ((n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) || "function" == typeof t)) return t;
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(this, rQ() ? Reflect.construct(t, r || [], rK(this).constructor) : t.apply(this, r)))._options,
                            f = l.sendDefaultPii,
                            p = l.sendClientReports,
                            d = l.enableLogs,
                            v = l._experiments,
                            y = l.enableMetrics,
                            m = null == (s = null != y ? y : null == v ? void 0 : v.enableMetrics) || s;
                        return j.document && (p || d || m) && j.document.addEventListener("visibilitychange", function() {
                            "hidden" === j.document.visibilityState && (p && i._flushOutcomes(), d && n9(i), m && re(i))
                        }), f && i.on("beforeSendSession", rn), i
                    }
                    return n.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && rZ(n, e), t = [{
                            key: "eventFromException",
                            value: function(e, t) {
                                var n, r, o;
                                return n = this._options.stackParser, r = this._options.attachStacktrace, eg(o = r$(n, e, (null == t ? void 0 : t.syntheticException) || void 0, r)), o.level = "error", (null == t ? void 0 : t.event_id) && (o.event_id = t.event_id), nw(o)
                            }
                        }, {
                            key: "eventFromMessage",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info",
                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                        o = arguments.length > 4 ? arguments[4] : void 0,
                                        a = rz(e, t, (null == r ? void 0 : r.syntheticException) || void 0, o);
                                    return a.level = n, (null == r ? void 0 : r.event_id) && (a.event_id = r.event_id), nw(a)
                                }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
                            }
                        }, {
                            key: "_prepareEvent",
                            value: function(e, t, r, o) {
                                return e.platform = e.platform || "javascript", rY(rK(n.prototype), "_prepareEvent", this).call(this, e, t, r, o)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(n.prototype, t), n
                }(rx),
                r1 = {},
                r2 = {};

            function r3(e, t) {
                r1[e] = r1[e] || [], r1[e].push(t)
            }

            function r4(e, t) {
                if (!r2[e]) {
                    r2[e] = !0;
                    try {
                        t()
                    } catch (t) {
                        x && en.error("Error while instrumenting ".concat(e), t)
                    }
                }
            }

            function r8(e, t) {
                var n = e && r1[e];
                if (n) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = n[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                            var s = i.value;
                            try {
                                s(t)
                            } catch (t) {
                                x && en.error("Error while triggering instrumentation handler.\nType: ".concat(e, "\nName: ").concat(eN(s), "\nError:"), t)
                            }
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
            }

            function r6() {
                "console" in j && K.forEach(function(e) {
                    e in j.console && eo(j.console, e, function(t) {
                        return X[e] = t,
                            function() {
                                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                r8("console", {
                                    args: n,
                                    level: e
                                });
                                var o = X[e];
                                null == o || o.apply(j.console, n)
                            }
                    })
                })
            }

            function r5(e) {
                return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
            }

            function r9(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function r7(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function oe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            r7(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            r7(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function on(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }

            function or(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r9(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r9(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oo(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }

            function oa(e, t) {
                var n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(c) {
                    return function(s) {
                        var u = [c, s];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                            if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                            switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        a.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && a.label < o[1]) {
                                        a.label = o[1], o = u;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(u);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            u = t.call(e, a)
                        } catch (e) {
                            u = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function oi(e, t) {
                var n = "fetch";
                r3(n, e), r4(n, function() {
                    return oc(void 0, t)
                })
            }

            function oc(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                (!t || function() {
                    if ("string" == typeof EdgeRuntime) return !0;
                    if (! function() {
                            if (!("fetch" in j)) return !1;
                            try {
                                return new Headers, new Request("data:,"), new Response, !0
                            } catch (e) {
                                return !1
                            }
                        }()) return !1;
                    if (r5(j.fetch)) return !0;
                    var e = !1,
                        t = j.document;
                    if (t && "function" == typeof t.createElement) try {
                        var n, r = t.createElement("iframe");
                        r.hidden = !0, t.head.appendChild(r), (null == (n = r.contentWindow) ? void 0 : n.fetch) && (e = r5(r.contentWindow.fetch)), t.head.removeChild(r)
                    } catch (e) {
                        x && en.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                    }
                    return e
                }()) && eo(j, "fetch", function(t) {
                    return function() {
                        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        var a = Error(),
                            i = function(e) {
                                if (0 === e.length) return {
                                    method: "GET",
                                    url: ""
                                };
                                if (2 === e.length) {
                                    var t = or(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    return {
                                        url: ol(n),
                                        method: ou(r, "method") ? String(r.method).toUpperCase() : $(n) && ou(n, "method") ? String(n.method).toUpperCase() : "GET"
                                    }
                                }
                                var o = e[0];
                                return {
                                    url: ol(o),
                                    method: ou(o, "method") ? String(o.method).toUpperCase() : "GET"
                                }
                            }(r),
                            c = {
                                args: r,
                                fetchData: {
                                    method: i.method,
                                    url: i.url
                                },
                                startTimestamp: 1e3 * eO(),
                                virtualError: a,
                                headers: function(e) {
                                    var t = or(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    try {
                                        if ((void 0 === r ? "undefined" : oo(r)) === "object" && null !== r && "headers" in r && r.headers) return new Headers(r.headers);
                                        if ($(n)) return new Headers(n.headers)
                                    } catch (e) {}
                                }(r)
                            };
                        return e || r8("fetch", ot({}, c)), t.apply(j, r).then(function(t) {
                            return oe(function() {
                                return oa(this, function(n) {
                                    return e ? e(t) : r8("fetch", on(ot({}, c), {
                                        endTimestamp: 1e3 * eO(),
                                        response: t
                                    })), [2, t]
                                })
                            })()
                        }, function(e) {
                            r8("fetch", on(ot({}, c), {
                                endTimestamp: 1e3 * eO(),
                                error: e
                            })), I(e) && void 0 === e.stack && (e.stack = a.stack, ea(e, "framesToPop", 1));
                            var t, n, r = e6(),
                                o = null != (n = null == r ? void 0 : r.getOptions().enhanceFetchErrorMessages) ? n : "always";
                            if (!1 !== o && (null != (t = TypeError) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t) && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                                var i = new URL(c.fetchData.url).host;
                                "always" === o ? e.message = "".concat(e.message, " (").concat(i, ")") : ea(e, "__sentry_fetch_url_host__", i)
                            } catch (e) {}
                            throw e
                        })
                    }
                })
            }

            function os(e) {
                var t, n, r;
                try {
                    t = e.clone()
                } catch (e) {
                    return
                }
                n = t, r = function() {
                    r8("fetch-body-resolved", {
                        endTimestamp: 1e3 * eO(),
                        response: e
                    })
                }, oe(function() {
                    var e, t, o, a, i, c;
                    return oa(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (!(null == n ? void 0 : n.body)) return [3, 8];
                                t = (e = n.body).getReader(), o = setTimeout(function() {
                                    e.cancel().then(null, function() {})
                                }, 9e4), a = !0, s.label = 1;
                            case 1:
                                if (!a) return [3, 7];
                                i = void 0, s.label = 2;
                            case 2:
                                return s.trys.push([2, 4, 5, 6]), i = setTimeout(function() {
                                    e.cancel().then(null, function() {})
                                }, 5e3), [4, t.read()];
                            case 3:
                                return c = s.sent().done, clearTimeout(i), c && (r(), a = !1), [3, 6];
                            case 4:
                                return s.sent(), a = !1, [3, 6];
                            case 5:
                                return clearTimeout(i), [7];
                            case 6:
                                return [3, 1];
                            case 7:
                                clearTimeout(o), t.releaseLock(), e.cancel().then(null, function() {}), s.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })()
            }

            function ou(e, t) {
                return !!e && (void 0 === e ? "undefined" : oo(e)) === "object" && !!e[t]
            }

            function ol(e) {
                return "string" == typeof e ? e : e ? ou(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
            }

            function of (e, t) {
                var n = e6(),
                    r = e4();
                if (n) {
                    var o = n.getOptions(),
                        a = o.beforeBreadcrumb,
                        i = void 0 === a ? null : a,
                        c = o.maxBreadcrumbs,
                        s = void 0 === c ? 100 : c;
                    if (!(s <= 0)) {
                        var u = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({
                                timestamp: eS()
                            }, e),
                            l = i ? Z(function() {
                                return i(u, t)
                            }) : u;
                        null !== l && (n.emit && n.emit("beforeAddBreadcrumb", l, t), r.addBreadcrumb(l, s))
                    }
                }
            }

            function op(e) {
                if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
            }

            function od(e) {
                return "isRelative" in e
            }

            function ov(e, t) {
                var n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
                    r = null != t ? t : n ? "thismessage:/" : void 0;
                try {
                    if ("canParse" in URL && !URL.canParse(e, r)) return;
                    var o = new URL(e, r);
                    if (n) return {
                        isRelative: n,
                        pathname: o.pathname,
                        search: o.search,
                        hash: o.hash
                    };
                    return o
                } catch (e) {}
            }

            function oy(e) {
                if (!e) return {};
                var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "",
                    r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    search: n,
                    hash: r,
                    relative: t[5] + n + r
                }
            }

            function om(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (e.startsWith("data:")) {
                    var n = e.match(/^data:([^;,]+)/),
                        r = n ? n[1] : "text/plain",
                        o = e.includes(";base64,"),
                        a = e.indexOf(","),
                        i = "";
                    if (t && -1 !== a) {
                        var c = e.slice(a + 1);
                        i = c.length > 10 ? "".concat(c.slice(0, 10), "... [truncated]") : c
                    }
                    return "data:".concat(r).concat(o ? ",base64" : "").concat(i ? ",".concat(i) : "")
                }
                return e
            }

            function oh() {
                if (j.document) {
                    var e = r8.bind(null, "dom"),
                        t = ob(e, !0);
                    j.document.addEventListener("click", t, !1), j.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(function(t) {
                        var n, r, o = null == (n = j[t]) ? void 0 : n.prototype;
                        (null == o || null == (r = o.hasOwnProperty) ? void 0 : r.call(o, "addEventListener")) && (eo(o, "addEventListener", function(t) {
                            return function(n, r, o) {
                                if ("click" === n || "keypress" == n) try {
                                    var a = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                        i = a[n] = a[n] || {
                                            refCount: 0
                                        };
                                    if (!i.handler) {
                                        var c = ob(e);
                                        i.handler = c, t.call(this, n, c, o)
                                    }
                                    i.refCount++
                                } catch (e) {}
                                return t.call(this, n, r, o)
                            }
                        }), eo(o, "removeEventListener", function(e) {
                            return function(t, n, r) {
                                if ("click" === t || "keypress" == t) try {
                                    var o = this.__sentry_instrumentation_handlers__ || {},
                                        a = o[t];
                                    a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete o[t]), 0 === Object.keys(o).length && delete this.__sentry_instrumentation_handlers__)
                                } catch (e) {}
                                return e.call(this, t, n, r)
                            }
                        }))
                    })
                }
            }

            function ob(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return function(n) {
                    if (n && !n._sentryCaptured) {
                        var r, o = function(e) {
                            try {
                                return e.target
                            } catch (e) {
                                return null
                            }
                        }(n);
                        if (r = n.type, "keypress" !== r || null != o && o.tagName && ("INPUT" === o.tagName || "TEXTAREA" === o.tagName || o.isContentEditable || 0)) {
                            ea(n, "_sentryCaptured", !0), o && !o._sentryId && ea(o, "_sentryId", ey());
                            var a = "keypress" === n.type ? "input" : n.type;
                            ! function(e) {
                                if (e.type !== p) return !1;
                                try {
                                    if (!e.target || e.target._sentryId !== d) return !1
                                } catch (e) {}
                                return !0
                            }(n) && (e({
                                event: n,
                                name: a,
                                global: t
                            }), p = n.type, d = o ? o._sentryId : void 0), clearTimeout(f), f = j.setTimeout(function() {
                                d = void 0, p = void 0
                            }, 1e3)
                        }
                    }
                }
            }

            function og(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var o_ = "__sentry_xhr_v3__";

            function oS(e) {
                r3("xhr", e), r4("xhr", oO)
            }

            function oO() {
                if (j.XMLHttpRequest) {
                    var e = XMLHttpRequest.prototype;
                    e.open = new Proxy(e.open, {
                        apply: function(e, t, n) {
                            var r = Error(),
                                o = 1e3 * eO(),
                                a = L(n[0]) ? n[0].toUpperCase() : void 0,
                                i = function(e) {
                                    if (L(e)) return e;
                                    try {
                                        return e.toString()
                                    } catch (e) {}
                                }(n[1]);
                            if (!a || !i) return e.apply(t, n);
                            t[o_] = {
                                method: a,
                                url: i,
                                request_headers: {}
                            }, "POST" === a && i.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                            var c = function() {
                                var e = t[o_];
                                if (e && 4 === t.readyState) {
                                    try {
                                        e.status_code = t.status
                                    } catch (e) {}
                                    r8("xhr", {
                                        endTimestamp: 1e3 * eO(),
                                        startTimestamp: o,
                                        xhr: t,
                                        virtualError: r
                                    })
                                }
                            };
                            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                                apply: function(e, t, n) {
                                    return c(), e.apply(t, n)
                                }
                            }) : t.addEventListener("readystatechange", c), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                                apply: function(e, t, n) {
                                    var r = function(e) {
                                            if (Array.isArray(e)) return e
                                        }(n) || function(e, t) {
                                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != o) {
                                                var a = [],
                                                    i = !0,
                                                    c = !1;
                                                try {
                                                    for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                                } catch (e) {
                                                    c = !0, r = e
                                                } finally {
                                                    try {
                                                        i || null == o.return || o.return()
                                                    } finally {
                                                        if (c) throw r
                                                    }
                                                }
                                                return a
                                            }
                                        }(n, 2) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return og(e, 2);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return og(e, t)
                                            }
                                        }(n, 2) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(),
                                        o = r[0],
                                        a = r[1],
                                        i = t[o_];
                                    return i && L(o) && L(a) && (i.request_headers[o.toLowerCase()] = a), e.apply(t, n)
                                }
                            }), e.apply(t, n)
                        }
                    }), e.send = new Proxy(e.send, {
                        apply: function(e, t, n) {
                            var r = t[o_];
                            return r && (void 0 !== n[0] && (r.body = n[0]), r8("xhr", {
                                startTimestamp: 1e3 * eO(),
                                xhr: t
                            })), e.apply(t, n)
                        }
                    })
                }
            }

            function ow(e) {
                var t = "history";
                r3(t, e), r4(t, oj)
            }

            function oj() {
                function e(e) {
                    return function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var o = n.length > 2 ? n[2] : void 0;
                        if (o) {
                            var a = v,
                                i = function(e) {
                                    try {
                                        return new URL(e, j.location.origin).toString()
                                    } catch (t) {
                                        return e
                                    }
                                }(String(o));
                            if (v = i, a === i) return e.apply(this, n);
                            r8("history", {
                                from: a,
                                to: i
                            })
                        }
                        return e.apply(this, n)
                    }
                }
                j.addEventListener("popstate", function() {
                    var e = j.location.href,
                        t = v;
                    v = e, t !== e && r8("history", {
                        from: t,
                        to: e
                    })
                }), "history" in j && j.history && (eo(j.history, "pushState", e), eo(j.history, "replaceState", e))
            }
            var oP = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

            function ok(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function oE(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }
            var ox = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = ok({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e);
                    return {
                        name: "Breadcrumbs",
                        setup: function(e) {
                            var n, r, o, a, i, c, s;
                            t.console && (n = e, r3("console", function(e) {
                                if (e6() === n) {
                                    var t, r = {
                                        category: "console",
                                        data: {
                                            arguments: e.args,
                                            logger: "console"
                                        },
                                        level: "warn" === (t = e.level) ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log",
                                        message: eB(e.args, " ")
                                    };
                                    if ("assert" === e.level)
                                        if (!1 !== e.args[0]) return;
                                        else r.message = "Assertion failed: ".concat(eB(e.args.slice(1), " ") || "console.assert"), r.data.arguments = e.args.slice(1); of (r, {
                                        input: e.args,
                                        level: e.level
                                    })
                                }
                            }), r4("console", r6)), t.dom && (r3("dom", (r = e, o = t.dom, function(e) {
                                if (e6() === r) {
                                    var t, n, a = (void 0 === o ? "undefined" : oE(o)) === "object" ? o.serializeAttribute : void 0,
                                        i = (void 0 === o ? "undefined" : oE(o)) === "object" && "number" == typeof o.maxStringLength ? o.maxStringLength : void 0;
                                    i && i > 1024 && (oP && en.warn("`dom.maxStringLength` cannot exceed ".concat(1024, ", but a value of ").concat(i, " was configured. Sentry will use ").concat(1024, " instead.")), i = 1024), "string" == typeof a && (a = [a]);
                                    try {
                                        var c, s = e.event,
                                            u = (c = s) && c.target ? s.target : s;
                                        t = W(u, {
                                            keyAttrs: a,
                                            maxStringLength: i
                                        }), n = V(u)
                                    } catch (e) {
                                        t = "<unknown>"
                                    }
                                    if (0 !== t.length) {
                                        var l = {
                                            category: "ui.".concat(e.name),
                                            message: t
                                        };
                                        n && (l.data = {
                                            "ui.component_name": n
                                        }), of (l, {
                                            event: e.event,
                                            name: e.name,
                                            global: e.global
                                        })
                                    }
                                }
                            })), r4("dom", oh)), t.xhr && oS((a = e, function(e) {
                                if (e6() === a) {
                                    var t = e.startTimestamp,
                                        n = e.endTimestamp,
                                        r = e.xhr[o_];
                                    if (t && n && r) {
                                        var o = r.method,
                                            i = r.url,
                                            c = r.status_code,
                                            s = r.body,
                                            u = {
                                                xhr: e.xhr,
                                                input: s,
                                                startTimestamp: t,
                                                endTimestamp: n
                                            },
                                            l = {
                                                category: "xhr",
                                                data: {
                                                    method: o,
                                                    url: i,
                                                    status_code: c
                                                },
                                                type: "http",
                                                level: op(c)
                                            };
                                        a.emit("beforeOutgoingRequestBreadcrumb", l, u), of (l, u)
                                    }
                                }
                            })), t.fetch && oi((i = e, function(e) {
                                if (e6() === i) {
                                    var t = e.startTimestamp,
                                        n = e.endTimestamp;
                                    if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                                        if (e.fetchData.method, e.fetchData.url, e.error) {
                                            var r = e.fetchData,
                                                o = {
                                                    data: e.error,
                                                    input: e.args,
                                                    startTimestamp: t,
                                                    endTimestamp: n
                                                },
                                                a = {
                                                    category: "fetch",
                                                    data: r,
                                                    level: "error",
                                                    type: "http"
                                                };
                                            i.emit("beforeOutgoingRequestBreadcrumb", a, o), of (a, o)
                                        } else {
                                            var c, s, u = e.response,
                                                l = (c = ok({}, e.fetchData), s = s = {
                                                    status_code: null == u ? void 0 : u.status
                                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, r)
                                                    }
                                                    return n
                                                })(Object(s)).forEach(function(e) {
                                                    Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(s, e))
                                                }), c);
                                            e.fetchData.request_body_size, e.fetchData.response_body_size, null == u || u.status;
                                            var f = {
                                                    input: e.args,
                                                    response: u,
                                                    startTimestamp: t,
                                                    endTimestamp: n
                                                },
                                                p = {
                                                    category: "fetch",
                                                    data: l,
                                                    type: "http",
                                                    level: op(l.status_code)
                                                };
                                            i.emit("beforeOutgoingRequestBreadcrumb", p, f), of (p, f)
                                        }
                                }
                            })), t.history && ow((c = e, function(e) {
                                if (e6() === c) {
                                    var t = e.from,
                                        n = e.to,
                                        r = oy(j.location.href),
                                        o = t ? oy(t) : void 0,
                                        a = oy(n);
                                    (null == o ? void 0 : o.path) || (o = r), r.protocol === a.protocol && r.host === a.host && (n = a.relative), r.protocol === o.protocol && r.host === o.host && (t = o.relative), of ({
                                        category: "navigation",
                                        data: {
                                            from: t,
                                            to: n
                                        }
                                    })
                                }
                            })), t.sentry && e.on("beforeSendEvent", (s = e, function(e) {
                                e6() === s && of ({
                                    category: "sentry.".concat("transaction" === e.type ? "transaction" : "event"),
                                    event_id: e.event_id,
                                    level: e.level,
                                    message: eh(e)
                                }, {
                                    event: e
                                })
                            }))
                        }
                    }
                },
                oT = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                oA = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r;
                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r
                                })
                            }
                            return e
                        }({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0,
                            unregisterOriginalCallbacks: !1
                        }, e);
                    return {
                        name: "BrowserApiErrors",
                        setupOnce: function() {
                            t.setTimeout && eo(j, "setTimeout", oI), t.setInterval && eo(j, "setInterval", oI), t.requestAnimationFrame && eo(j, "requestAnimationFrame", oD), t.XMLHttpRequest && "XMLHttpRequest" in j && eo(XMLHttpRequest.prototype, "send", oC);
                            var e = t.eventTarget;
                            e && (Array.isArray(e) ? e : oT).forEach(function(e) {
                                var n, r, o, a, i;
                                return n = e, r = t, void((null == (i = null == (o = j[n]) ? void 0 : o.prototype) || null == (a = i.hasOwnProperty) ? void 0 : a.call(i, "addEventListener")) && (eo(i, "addEventListener", function(e) {
                                    return function(t, o, a) {
                                        try {
                                            var i;
                                            i = o, "function" == typeof i.handleEvent && (o.handleEvent = rV(o.handleEvent, {
                                                mechanism: {
                                                    data: {
                                                        handler: eN(o),
                                                        target: n
                                                    },
                                                    handled: !1,
                                                    type: "auto.browser.browserapierrors.handleEvent"
                                                }
                                            }))
                                        } catch (e) {}
                                        return r.unregisterOriginalCallbacks && function(e, t, n) {
                                            e && (void 0 === e ? "undefined" : e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object" && "removeEventListener" in e && "function" == typeof e.removeEventListener && e.removeEventListener(t, n)
                                        }(this, t, o), e.apply(this, [t, rV(o, {
                                            mechanism: {
                                                data: {
                                                    handler: eN(o),
                                                    target: n
                                                },
                                                handled: !1,
                                                type: "auto.browser.browserapierrors.addEventListener"
                                            }
                                        }), a])
                                    }
                                }), eo(i, "removeEventListener", function(e) {
                                    return function(t, n, r) {
                                        try {
                                            var o = n.__sentry_wrapped__;
                                            o && e.call(this, t, o, r)
                                        } catch (e) {}
                                        return e.call(this, t, n, r)
                                    }
                                })))
                            })
                        }
                    }
                };

            function oI(e) {
                return function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = n[0];
                    return n[0] = rV(o, {
                        mechanism: {
                            handled: !1,
                            type: "auto.browser.browserapierrors.".concat(eN(e))
                        }
                    }), e.apply(this, n)
                }
            }

            function oD(e) {
                return function(t) {
                    return e.apply(this, [rV(t, {
                        mechanism: {
                            data: {
                                handler: eN(e)
                            },
                            handled: !1,
                            type: "auto.browser.browserapierrors.requestAnimationFrame"
                        }
                    })])
                }
            }

            function oC(e) {
                return function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(e) {
                        e in o && "function" == typeof o[e] && eo(o, e, function(t) {
                            var n = {
                                    mechanism: {
                                        data: {
                                            handler: eN(t)
                                        },
                                        handled: !1,
                                        type: "auto.browser.browserapierrors.xhr.".concat(e)
                                    }
                                },
                                r = ec(t);
                            return r && (n.mechanism.data.handler = eN(r)), rV(t, n)
                        })
                    }), e.apply(this, n)
                }
            }
            var oR = null;

            function oL(e) {
                var t = "error";
                r3(t, e), r4(t, oM)
            }

            function oM() {
                oR = j.onerror, j.onerror = function(e, t, n, r, o) {
                    return r8("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: e,
                        url: t
                    }), !!oR && oR.apply(this, arguments)
                }, j.onerror.__SENTRY_INSTRUMENTED__ = !0
            }
            var oN = null;

            function oU(e) {
                var t = "unhandledrejection";
                r3(t, e), r4(t, oq)
            }

            function oq() {
                oN = j.onunhandledrejection, j.onunhandledrejection = function(e) {
                    return r8("unhandledrejection", e), !oN || oN.apply(this, arguments)
                }, j.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
            }
            var oF = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, e);
                return {
                    name: "GlobalHandlers",
                    setupOnce: function() {
                        Error.stackTraceLimit = 50
                    },
                    setup: function(e) {
                        var n, r;
                        t.onerror && (n = e, oL(function(e) {
                            var t = oH(),
                                r = t.stackParser,
                                o = t.attachStacktrace;
                            if (!(e6() !== n || rG > 0)) {
                                var a, i, c, s, u, l, f, p, d, v, y, m = e.msg,
                                    h = e.url,
                                    b = e.line,
                                    g = e.column,
                                    _ = e.error,
                                    S = (a = r$(r, _ || m, void 0, o, !1), i = h, c = b, s = g, v = (d = (p = (f = (l = a.exception = a.exception || {}).values = l.values || [])[0] = f[0] || {}).stacktrace = p.stacktrace || {}).frames = d.frames || [], y = null != (u = function(e) {
                                        if (L(e) && 0 !== e.length) return e.startsWith("data:") ? "<".concat(om(e, !1), ">") : e
                                    }(i)) ? u : G(), 0 === v.length && v.push({
                                        colno: s,
                                        filename: y,
                                        function: "?",
                                        in_app: !0,
                                        lineno: c
                                    }), a);
                                S.level = "error", nN(S, {
                                    originalException: _,
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.browser.global_handlers.onerror"
                                    }
                                })
                            }
                        }), oB("onerror")), t.onunhandledrejection && (r = e, oU(function(e) {
                            var t = oH(),
                                n = t.stackParser,
                                o = t.attachStacktrace;
                            if (!(e6() !== r || rG > 0)) {
                                var a, i = function(e) {
                                        if (N(e)) return e;
                                        try {
                                            if ("reason" in e) return e.reason;
                                            if ("detail" in e && "reason" in e.detail) return e.detail.reason
                                        } catch (e) {}
                                        return e
                                    }(e),
                                    c = N(i) ? (a = i, {
                                        exception: {
                                            values: [{
                                                type: "UnhandledRejection",
                                                value: "Non-Error promise rejection captured with value: ".concat(String(a))
                                            }]
                                        }
                                    }) : r$(n, i, void 0, o, !0);
                                c.level = "error", nN(c, {
                                    originalException: i,
                                    mechanism: {
                                        handled: !1,
                                        type: "auto.browser.global_handlers.onunhandledrejection"
                                    }
                                })
                            }
                        }), oB("onunhandledrejection"))
                    }
                }
            };

            function oB(e) {
                oP && en.log("Global Handler attached: ".concat(e))
            }

            function oH() {
                var e = e6();
                return (null == e ? void 0 : e.getOptions()) || {
                    stackParser: function() {
                        return []
                    },
                    attachStacktrace: !1
                }
            }

            function o$(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function oz(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function oW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function oG(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }

            function oV(e) {
                return function(e) {
                    if (Array.isArray(e)) return oz(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return oz(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oz(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oJ(e, t) {
                e.mechanism = oG(oW({
                    handled: !0,
                    type: "auto.core.linked_errors"
                }, e.mechanism, "AggregateError" === e.type && {
                    is_exception_group: !0
                }), {
                    exception_id: t
                })
            }

            function oY(e, t, n, r) {
                e.mechanism = oG(oW({
                    handled: !0
                }, e.mechanism), {
                    type: "chained",
                    source: t,
                    exception_id: n,
                    parent_id: r
                })
            }
            var oK = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.limit || 5,
                    n = e.key || "cause";
                return {
                    name: "LinkedErrors",
                    preprocessEvent: function(e, r, o) {
                        var a = o.getOptions().stackParser;
                        if ((null == (i = e.exception) ? void 0 : i.values) && r && B(r.originalException, Error)) {
                            var i, c = e.exception.values.length > 0 ? e.exception.values[e.exception.values.length - 1] : void 0;
                            c && (e.exception.values = function e(t, n, r, o, a, i, c, s) {
                                if (i.length >= r + 1) return i;
                                var u = oV(i);
                                if (B(o[a], Error)) {
                                    oJ(c, s);
                                    var l = t(n, o[a]),
                                        f = u.length;
                                    oY(l, a, f, s), u = e(t, n, r, o[a], a, [l].concat(oV(u)), l, f)
                                }
                                return Array.isArray(o.errors) && o.errors.forEach(function(o, i) {
                                    if (B(o, Error)) {
                                        oJ(c, s);
                                        var l = t(n, o),
                                            f = u.length;
                                        oY(l, "errors[".concat(i, "]"), f, s), u = e(t, n, r, o, a, [l].concat(oV(u)), l, f)
                                    }
                                }), u
                            }(rU, a, t, r.originalException, n, e.exception.values, c, 0))
                        }
                    }
                }
            };

            function oX(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function oZ(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || oQ(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oQ(e, t) {
                if (e) {
                    if ("string" == typeof e) return oX(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oX(e, t)
                }
            }

            function o0(e, t, n, r) {
                var o = {
                    filename: e,
                    function: "<anonymous>" === t ? "?" : t,
                    in_app: !0
                };
                return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
            }
            var o1 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
                o2 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                o3 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                o4 = /at (.+?) ?\(data:(.+?),/,
                o8 = [30, function(e) {
                    var t = e.match(o4);
                    if (t) return {
                        filename: "<data:".concat(t[2], ">"),
                        function: t[1]
                    };
                    var n = o1.exec(e);
                    if (n) {
                        var r = oZ(n, 4);
                        return o0(r[1], "?", +r[2], +r[3])
                    }
                    var o = o2.exec(e);
                    if (o) {
                        if (o[2] && 0 === o[2].indexOf("eval")) {
                            var a = o3.exec(o[2]);
                            a && (o[2] = a[1], o[3] = a[2], o[4] = a[3])
                        }
                        var i = oZ(ae(o[1] || "?", o[2]), 2),
                            c = i[0];
                        return o0(i[1], c, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0)
                    }
                }],
                o6 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                o5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                o9 = [50, function(e) {
                    var t = o6.exec(e);
                    if (t) {
                        if (t[3] && t[3].indexOf(" > eval") > -1) {
                            var n, r = o5.exec(t[3]);
                            r && (t[1] = t[1] || "eval", t[3] = r[1], t[4] = r[2], t[5] = "")
                        }
                        var o = t[3],
                            a = t[1] || "?";
                        return a = (n = oZ(ae(a, o), 2))[0], o0(o = n[1], a, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                    }
                }],
                o7 = eR.apply(void 0, function(e) {
                    if (Array.isArray(e)) return oX(e)
                }(e = [o8, o9]) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || oQ(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                ae = function(e, t) {
                    var n = -1 !== e.indexOf("safari-extension"),
                        r = -1 !== e.indexOf("safari-web-extension");
                    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? "safari-extension:".concat(t) : "safari-web-extension:".concat(t)] : [e, t]
                },
                at = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
                an = {};

            function ar(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function ao(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                        var t = an[e];
                        if (t) return t;
                        var n = j[e];
                        if (r5(n)) return an[e] = n.bind(j);
                        var r = j.document;
                        if (r && "function" == typeof r.createElement) try {
                            var o = r.createElement("iframe");
                            o.hidden = !0, r.head.appendChild(o);
                            var a = o.contentWindow;
                            (null == a ? void 0 : a[e]) && (n = a[e]), r.head.removeChild(o)
                        } catch (t) {
                            at && en.warn("Could not create sandbox iframe for ".concat(e, " check, bailing to window.").concat(e, ": "), t)
                        }
                        return n ? an[e] = n.bind(j) : n
                    }("fetch"),
                    n = 0,
                    r = 0;
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ro(e.bufferSize || 64),
                        r = {};
                    return {
                        send: function(o) {
                            var a = [];
                            if (t1(o, function(t, n) {
                                    var o = t8[n];
                                    ! function(e, t) {
                                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed();
                                        return (e[t] || e.all || 0) > n
                                    }(r, o) ? a.push(t): e.recordDroppedEvent("ratelimit_backoff", o)
                                }), 0 === a.length) return Promise.resolve({});
                            var i = t0(o[0], a),
                                c = function(t) {
                                    if (t2(i, ["client_report"])) {
                                        x && en.warn("Dropping client report. Will not send outcomes (reason: ".concat(t, ")."));
                                        return
                                    }
                                    t1(i, function(n, r) {
                                        e.recordDroppedEvent(t, t8[r])
                                    })
                                };
                            return n.add(function() {
                                return t({
                                    body: t4(i)
                                }).then(function(e) {
                                    return void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && x && en.warn("Sentry responded with status code ".concat(e.statusCode, " to sent event.")), r = function(e, t) {
                                        var n = t.statusCode,
                                            r = t.headers,
                                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed(),
                                            a = function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))), r.forEach(function(t) {
                                                        var r;
                                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        }) : e[t] = r
                                                    })
                                                }
                                                return e
                                            }({}, e),
                                            i = null == r ? void 0 : r["x-sentry-rate-limits"],
                                            c = null == r ? void 0 : r["retry-after"];
                                        if (i) {
                                            var s = !0,
                                                u = !1,
                                                l = void 0;
                                            try {
                                                for (var f, p = i.trim().split(",")[Symbol.iterator](); !(s = (f = p.next()).done); s = !0) {
                                                    var d = (O = f.value.split(":", 5), function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(O) || function(e, t) {
                                                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (null != o) {
                                                                var a = [],
                                                                    i = !0,
                                                                    c = !1;
                                                                try {
                                                                    for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                                                } catch (e) {
                                                                    c = !0, r = e
                                                                } finally {
                                                                    try {
                                                                        i || null == o.return || o.return()
                                                                    } finally {
                                                                        if (c) throw r
                                                                    }
                                                                }
                                                                return a
                                                            }
                                                        }(O, 5) || function(e, t) {
                                                            if (e) {
                                                                if ("string" == typeof e) return ra(e, 5);
                                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ra(e, t)
                                                            }
                                                        }(O, 5) || function() {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }()),
                                                        v = d[0],
                                                        y = d[1],
                                                        m = d[4],
                                                        h = parseInt(v, 10),
                                                        b = (isNaN(h) ? 60 : h) * 1e3;
                                                    if (y) {
                                                        var g = !0,
                                                            _ = !1,
                                                            S = void 0;
                                                        try {
                                                            for (var O, w, j = y.split(";")[Symbol.iterator](); !(g = (w = j.next()).done); g = !0) {
                                                                var P = w.value;
                                                                "metric_bucket" === P ? (!m || m.split(";").includes("custom")) && (a[P] = o + b) : a[P] = o + b
                                                            }
                                                        } catch (e) {
                                                            _ = !0, S = e
                                                        } finally {
                                                            try {
                                                                g || null == j.return || j.return()
                                                            } finally {
                                                                if (_) throw S
                                                            }
                                                        }
                                                    } else a.all = o + b
                                                }
                                            } catch (e) {
                                                u = !0, l = e
                                            } finally {
                                                try {
                                                    s || null == p.return || p.return()
                                                } finally {
                                                    if (u) throw l
                                                }
                                            }
                                        } else c ? a.all = o + ri(c, o) : 429 === n && (a.all = o + 6e4);
                                        return a
                                    }(r, e), e
                                }, function(e) {
                                    throw c("network_error"), x && en.error("Encountered error running transport request:", e), e
                                })
                            }).then(function(e) {
                                return e
                            }, function(e) {
                                if (e === rr) return x && en.error("Skipped sending event because buffer is full."), c("queue_overflow"), Promise.resolve({});
                                throw e
                            })
                        },
                        flush: function(e) {
                            return n.drain(e)
                        }
                    }
                }(e, function(o) {
                    var a;
                    return (a = function() {
                        var a, i, c, s;
                        return function(e, t) {
                            var n, r, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                },
                                i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                            return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(s) {
                                    var u = [c, s];
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                                        if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                        switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                            case 0:
                                            case 1:
                                                o = u;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: u[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = u[1], u = [0];
                                                continue;
                                            case 7:
                                                u = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                                    a.label = u[1];
                                                    break
                                                }
                                                if (6 === u[0] && a.label < o[1]) {
                                                    a.label = o[1], o = u;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(u);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        u = t.call(e, a)
                                    } catch (e) {
                                        u = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & u[0]) throw u[1];
                                    return {
                                        value: u[0] ? u[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    a = o.body.length, n += a, r++, i = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))), r.forEach(function(t) {
                                                var r;
                                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = r
                                            })
                                        }
                                        return e
                                    }({
                                        body: o.body,
                                        method: "POST",
                                        referrerPolicy: "strict-origin",
                                        headers: e.headers,
                                        keepalive: n <= 6e4 && r < 15
                                    }, e.fetchOptions), u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, 4, 5]), [4, t(e.url, i)];
                                case 2:
                                    return [2, {
                                        statusCode: (c = u.sent()).status,
                                        headers: {
                                            "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                                            "retry-after": c.headers.get("Retry-After")
                                        }
                                    }];
                                case 3:
                                    throw s = u.sent(), an.fetch = void 0, s;
                                case 4:
                                    return n -= a, r--, [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, r) {
                            var o = a.apply(e, t);

                            function i(e) {
                                ar(o, n, r, i, c, "next", e)
                            }

                            function c(e) {
                                ar(o, n, r, i, c, "throw", e)
                            }
                            i(void 0)
                        })
                    })()
                }, ro(e.bufferSize || 40))
            }

            function aa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ai(e, t) {
                return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
            }

            function ac(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }

            function as(e) {
                return function(e) {
                    if (Array.isArray(e)) return aa(e)
                }(e) || ac(e) || au(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function au(e, t) {
                if (e) {
                    if ("string" == typeof e) return aa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aa(e, t)
                }
            }
            var al = {
                idleTimeout: 1e3,
                finalTimeout: 3e4,
                childSpanTimeout: 15e3
            };

            function af(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = new Map,
                    a = !1,
                    i = "externalFinish",
                    c = !r.disableAutoFinish,
                    s = [],
                    u = r.idleTimeout,
                    l = void 0 === u ? al.idleTimeout : u,
                    f = r.finalTimeout,
                    p = void 0 === f ? al.finalTimeout : f,
                    d = r.childSpanTimeout,
                    v = void 0 === d ? al.childSpanTimeout : d,
                    y = r.beforeSpanEnd,
                    m = r.trimIdleSpanEndTimestamp,
                    h = void 0 === m || m,
                    b = e6();
                if (!b || !ts()) {
                    var g = new tV,
                        _ = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r;
                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r
                                })
                            }
                            return e
                        }({
                            sample_rate: "0",
                            sampled: "false"
                        }, tG(g));
                    return ea(g, t$, _), g
                }
                var S = e3(),
                    O = tL(),
                    w = (t = nh(e), eT(e3(), t), x && en.log("[Tracing] Started span is an idle span"), t);

                function j() {
                    n && (clearTimeout(n), n = void 0)
                }

                function P(e) {
                    j(), n = setTimeout(function() {
                        !a && 0 === o.size && c && (i = "idleTimeout", w.end(e))
                    }, l)
                }

                function k(e) {
                    n = setTimeout(function() {
                        !a && c && (i = "heartbeatFailed", w.end(e))
                    }, v)
                }

                function E(e) {
                    a = !0, o.clear(), s.forEach(function(e) {
                        return e()
                    }), eT(S, O);
                    var t = tE(w);
                    if (t.start_timestamp) {
                        t.data[tn] || w.setAttribute(tn, i);
                        var n = t.status;
                        n && "unknown" !== n || w.setStatus({
                            code: 1
                        }), en.log('[Tracing] Idle span "'.concat(t.op, '" finished'));
                        var r = tC(w).filter(function(e) {
                                return e !== w
                            }),
                            c = 0;
                        r.forEach(function(t) {
                            t.isRecording() && (t.setStatus({
                                code: 2,
                                message: "cancelled"
                            }), t.end(e), x && en.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                            var n = tE(t),
                                r = n.timestamp,
                                o = n.start_timestamp,
                                a = void 0 === o ? 0 : o,
                                i = a <= e,
                                s = (void 0 === r ? 0 : r) - a <= (p + l) / 1e3;
                            if (x) {
                                var u = JSON.stringify(t, void 0, 2);
                                i ? s || en.log("[Tracing] Discarding span since it finished after idle span final timeout", u) : en.log("[Tracing] Discarding span since it happened after idle span was finished", u)
                            }(!s || !i) && (w[tA] && w[tA].delete(t), c++)
                        }), c > 0 && w.setAttribute("sentry.idle_span_discarded_spans", c)
                    }
                }
                return w.end = new Proxy(w.end, {
                    apply: function(e, t, n) {
                        if (y && y(w), !ai(t, tV)) {
                            var r = function(e) {
                                    if (Array.isArray(e)) return e
                                }(n) || ac(n) || au(n) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(),
                                o = r[0],
                                a = r.slice(1),
                                i = tP(o || eO()),
                                c = tC(w).filter(function(e) {
                                    return e !== w
                                }),
                                s = tE(w);
                            if (!c.length || !h) return E(i), Reflect.apply(e, t, [i].concat(as(a)));
                            var u = b.getOptions().ignoreSpans,
                                l = null == c ? void 0 : c.reduce(function(e, t) {
                                    var n = tE(t);
                                    return !n.timestamp || u && t9(n, u) ? e : e ? Math.max(e, n.timestamp) : n.timestamp
                                }, void 0),
                                f = s.start_timestamp,
                                d = Math.min(f ? f + p / 1e3 : 1 / 0, Math.max(f || -1 / 0, Math.min(i, l || 1 / 0)));
                            return E(d), Reflect.apply(e, t, [d].concat(as(a)))
                        }
                    }
                }), s.push(b.on("spanStart", function(e) {
                    if (!(a || e === w || tE(e).timestamp || ai(e, ns) && e.isStandaloneSpan())) {
                        var t;
                        tC(w).includes(e) && (t = e.spanContext().spanId, j(), o.set(t, !0), k(eO() + v / 1e3))
                    }
                })), s.push(b.on("spanEnd", function(e) {
                    if (!a) {
                        var t;
                        t = e.spanContext().spanId, o.has(t) && o.delete(t), 0 === o.size && P(eO() + l / 1e3)
                    }
                })), s.push(b.on("idleSpanEnableAutoFinish", function(e) {
                    e === w && (c = !0, P(), o.size && k())
                })), r.disableAutoFinish || P(), setTimeout(function() {
                    a || (w.setStatus({
                        code: 2,
                        message: "deadline_exceeded"
                    }), i = "finalTimeout", w.end())
                }, p), w
            }
            var ap = !1,
                ad = function(e, t, n, r) {
                    var o, a;
                    return function(i) {
                        if (t.value >= 0 && (i || r) && ((a = t.value - (null != o ? o : 0)) || void 0 === o)) {
                            var c;
                            o = t.value, t.delta = a, c = t.value, t.rating = c > n[1] ? "poor" : c > n[0] ? "needs-improvement" : "good", e(t)
                        }
                    }
                },
                av = function() {
                    var e, t, n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        r = null == (t = j.performance) || null == (e = t.getEntriesByType) ? void 0 : e.call(t, "navigation")[0];
                    if (!n || r && r.responseStart > 0 && r.responseStart < performance.now()) return r
                },
                ay = function() {
                    var e, t = av();
                    return null != (e = null == t ? void 0 : t.activationStart) ? e : 0
                };

            function am(e, t, n) {
                j.document && j.addEventListener(e, t, n)
            }

            function ah(e, t, n) {
                j.document && j.removeEventListener(e, t, n)
            }
            var ab = -1,
                ag = new Set,
                a_ = function() {
                    var e, t;
                    return (null == (e = j.document) ? void 0 : e.visibilityState) !== "hidden" || (null == (t = j.document) ? void 0 : t.prerendering) ? 1 / 0 : 0
                },
                aS = function(e) {
                    var t;
                    if (("pagehide" === e.type || (null == (t = j.document) ? void 0 : t.visibilityState) === "hidden") && ab > -1) {
                        if ("visibilitychange" === e.type || "pagehide" === e.type) {
                            var n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, i = ag[Symbol.iterator](); !(n = (a = i.next()).done); n = !0)(0, a.value)()
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    n || null == i.return || i.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        }
                        isFinite(ab) || (ab = "visibilitychange" === e.type ? e.timeStamp : 0, ah("prerenderingchange", aS, !0))
                    }
                },
                aO = function() {
                    if (j.document && ab < 0) {
                        var e, t = ay(),
                            n = j.document.prerendering || null == (e = globalThis.performance.getEntriesByType("visibility-state").filter(function(e) {
                                return "hidden" === e.name && e.startTime > t
                            })[0]) ? void 0 : e.startTime;
                        ab = null != n ? n : a_(), am("visibilitychange", aS, !0), am("pagehide", aS, !0), am("prerenderingchange", aS, !0)
                    }
                    return {
                        get firstHiddenTime() {
                            return ab
                        },
                        onHidden: function(e) {
                            ag.add(e)
                        }
                    }
                },
                aw = function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        o = av(),
                        a = "navigate";
                    return o && ((null == (t = j.document) ? void 0 : t.prerendering) || ay() > 0 ? a = "prerender" : (null == (n = j.document) ? void 0 : n.wasDiscarded) ? a = "restore" : o.type && (a = o.type.replace(/_/g, "-"))), {
                        name: e,
                        value: r,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v5-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12),
                        navigationType: a
                    }
                },
                aj = new WeakMap;

            function aP(e, t) {
                try {
                    return aj.get(e) || aj.set(e, new t), aj.get(e)
                } catch (e) {
                    return new t
                }
            }
            var ak = function() {
                    var e;

                    function t() {
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                        t.prototype.__init.call(this), t.prototype.__init2.call(this)
                    }
                    return e = [{
                            key: "__init",
                            value: function() {
                                this._sessionValue = 0
                            }
                        }, {
                            key: "__init2",
                            value: function() {
                                this._sessionEntries = []
                            }
                        }, {
                            key: "_processEntry",
                            value: function(e) {
                                if (!e.hadRecentInput) {
                                    var t, n = this._sessionEntries[0],
                                        r = this._sessionEntries[this._sessionEntries.length - 1];
                                    this._sessionValue && n && r && e.startTime - r.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), null == (t = this._onAfterProcessingUnexpectedShift) || t.call(this, e)
                                }
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), t
                }(),
                aE = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver(function(e) {
                                Promise.resolve().then(function() {
                                    t(e.getEntries())
                                })
                            });
                            return r.observe(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({
                                type: e,
                                buffered: !0
                            }, n)), r
                        }
                    } catch (e) {}
                },
                ax = function(e) {
                    var t = !1;
                    return function() {
                        t || (e(), t = !0)
                    }
                },
                aT = function(e) {
                    var t;
                    (null == (t = j.document) ? void 0 : t.prerendering) ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0): e()
                },
                aA = [1800, 3e3],
                aI = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    aT(function() {
                        var n, r = aO(),
                            o = aw("FCP"),
                            a = aE("paint", function(e) {
                                var t = !0,
                                    i = !1,
                                    c = void 0;
                                try {
                                    for (var s, u = e[Symbol.iterator](); !(t = (s = u.next()).done); t = !0) {
                                        var l = s.value;
                                        "first-contentful-paint" === l.name && (a.disconnect(), l.startTime < r.firstHiddenTime && (o.value = Math.max(l.startTime - ay(), 0), o.entries.push(l), n(!0)))
                                    }
                                } catch (e) {
                                    i = !0, c = e
                                } finally {
                                    try {
                                        t || null == u.return || u.return()
                                    } finally {
                                        if (i) throw c
                                    }
                                }
                            });
                        a && (n = ad(e, o, aA, t.reportAllChanges))
                    })
                },
                aD = [.1, .25],
                aC = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    aI(ax(function() {
                        var n, r, o = aw("CLS", 0),
                            a = aO(),
                            i = aP(t, ak),
                            c = function(e) {
                                var t = !0,
                                    r = !1,
                                    a = void 0;
                                try {
                                    for (var c, s = e[Symbol.iterator](); !(t = (c = s.next()).done); t = !0) {
                                        var u = c.value;
                                        i._processEntry(u)
                                    }
                                } catch (e) {
                                    r = !0, a = e
                                } finally {
                                    try {
                                        t || null == s.return || s.return()
                                    } finally {
                                        if (r) throw a
                                    }
                                }
                                i._sessionValue > o.value && (o.value = i._sessionValue, o.entries = i._sessionEntries, n())
                            },
                            s = aE("layout-shift", c);
                        s && (n = ad(e, o, aD, t.reportAllChanges), a.onHidden(function() {
                            c(s.takeRecords()), n(!0)
                        }), null == j || null == (r = j.setTimeout) || r.call(j, n))
                    }))
                },
                aR = 0,
                aL = 1 / 0,
                aM = 0,
                aN = function(e) {
                    e.forEach(function(e) {
                        e.interactionId && (aL = Math.min(aL, e.interactionId), aR = (aM = Math.max(aM, e.interactionId)) ? (aM - aL) / 7 + 1 : 0)
                    })
                },
                aU = function() {
                    return y ? aR : performance.interactionCount || 0
                },
                aq = function() {
                    "interactionCount" in performance || y || (y = aE("event", aN, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                aF = 0,
                aB = function() {
                    var e;

                    function t() {
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                        t.prototype.__init.call(this), t.prototype.__init2.call(this)
                    }
                    return e = [{
                            key: "__init",
                            value: function() {
                                this._longestInteractionList = []
                            }
                        }, {
                            key: "__init2",
                            value: function() {
                                this._longestInteractionMap = new Map
                            }
                        }, {
                            key: "_resetInteractions",
                            value: function() {
                                aF = aU(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
                            }
                        }, {
                            key: "_estimateP98LongestInteraction",
                            value: function() {
                                var e = Math.min(this._longestInteractionList.length - 1, Math.floor((aU() - aF) / 50));
                                return this._longestInteractionList[e]
                            }
                        }, {
                            key: "_processEntry",
                            value: function(e) {
                                if (null == (c = this._onBeforeProcessingEntry) || c.call(this, e), e.interactionId || "first-input" === e.entryType) {
                                    var t = this._longestInteractionList.at(-1),
                                        n = this._longestInteractionMap.get(e.interactionId);
                                    if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
                                        if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                                                id: e.interactionId,
                                                entries: [e],
                                                _latency: e.duration
                                            }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort(function(e, t) {
                                                return t._latency - e._latency
                                            }), this._longestInteractionList.length > 10) {
                                            var r = this._longestInteractionList.splice(10),
                                                o = !0,
                                                a = !1,
                                                i = void 0;
                                            try {
                                                for (var c, s, u, l = r[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                                                    var f = u.value;
                                                    this._longestInteractionMap.delete(f.id)
                                                }
                                            } catch (e) {
                                                a = !0, i = e
                                            } finally {
                                                try {
                                                    o || null == l.return || l.return()
                                                } finally {
                                                    if (a) throw i
                                                }
                                            }
                                        }
                                        null == (s = this._onAfterProcessingINPCandidate) || s.call(this, n)
                                    }
                                }
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), t
                }(),
                aH = function(e) {
                    var t, n = j.requestIdleCallback || j.setTimeout;
                    (null == (t = j.document) ? void 0 : t.visibilityState) === "hidden" ? e(): (am("visibilitychange", e = ax(e), {
                        once: !0,
                        capture: !0
                    }), am("pagehide", e, {
                        once: !0,
                        capture: !0
                    }), n(function() {
                        e(), ah("visibilitychange", e, {
                            capture: !0
                        }), ah("pagehide", e, {
                            capture: !0
                        })
                    }))
                },
                a$ = [200, 500],
                az = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype) {
                        var n = aO();
                        aT(function() {
                            aq();
                            var r, o, a = aw("INP"),
                                i = aP(t, aB),
                                c = function(e) {
                                    aH(function() {
                                        var t = !0,
                                            n = !1,
                                            o = void 0;
                                        try {
                                            for (var c, s = e[Symbol.iterator](); !(t = (c = s.next()).done); t = !0) {
                                                var u = c.value;
                                                i._processEntry(u)
                                            }
                                        } catch (e) {
                                            n = !0, o = e
                                        } finally {
                                            try {
                                                t || null == s.return || s.return()
                                            } finally {
                                                if (n) throw o
                                            }
                                        }
                                        var l = i._estimateP98LongestInteraction();
                                        l && l._latency !== a.value && (a.value = l._latency, a.entries = l.entries, r())
                                    })
                                },
                                s = aE("event", c, {
                                    durationThreshold: null != (o = t.durationThreshold) ? o : 40
                                });
                            r = ad(e, a, a$, t.reportAllChanges), s && (s.observe({
                                type: "first-input",
                                buffered: !0
                            }), n.onHidden(function() {
                                c(s.takeRecords()), r(!0)
                            }))
                        })
                    }
                },
                aW = function() {
                    var e;

                    function t() {
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function")
                    }
                    return e = [{
                            key: "_processEntry",
                            value: function(e) {
                                var t;
                                null == (t = this._onBeforeProcessingEntry) || t.call(this, e)
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(t.prototype, e), t
                }(),
                aG = [2500, 4e3],
                aV = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    aT(function() {
                        var n, r = aO(),
                            o = aw("LCP"),
                            a = aP(t, aW),
                            i = function(e) {
                                t.reportAllChanges || (e = e.slice(-1));
                                var i = !0,
                                    c = !1,
                                    s = void 0;
                                try {
                                    for (var u, l = e[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                                        var f = u.value;
                                        a._processEntry(f), f.startTime < r.firstHiddenTime && (o.value = Math.max(f.startTime - ay(), 0), o.entries = [f], n())
                                    }
                                } catch (e) {
                                    c = !0, s = e
                                } finally {
                                    try {
                                        i || null == l.return || l.return()
                                    } finally {
                                        if (c) throw s
                                    }
                                }
                            },
                            c = aE("largest-contentful-paint", i);
                        if (c) {
                            n = ad(e, o, aG, t.reportAllChanges);
                            for (var s = ax(function() {
                                    i(c.takeRecords()), c.disconnect(), n(!0)
                                }), u = function(e) {
                                    e.isTrusted && (aH(s), ah(e.type, u, {
                                        capture: !0
                                    }))
                                }, l = 0, f = ["keydown", "click", "visibilitychange"]; l < f.length; l++) am(f[l], u, {
                                capture: !0
                            })
                        }
                    })
                },
                aJ = [800, 1800],
                aY = function(e) {
                    var t, n;
                    (null == (t = j.document) ? void 0 : t.prerendering) ? aT(function() {
                        return aY(e)
                    }): (null == (n = j.document) ? void 0 : n.readyState) !== "complete" ? addEventListener("load", function() {
                        return aY(e)
                    }, !0) : setTimeout(e)
                },
                aK = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = aw("TTFB"),
                        r = ad(e, n, aJ, t.reportAllChanges);
                    aY(function() {
                        var e = av();
                        e && (n.value = Math.max(e.responseStart - ay(), 0), n.entries = [e], r(!0))
                    })
                },
                aX = {},
                aZ = {};

            function aQ(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a5("cls", e, a3, m, t)
            }

            function a0(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a5("lcp", e, a4, h, t)
            }

            function a1(e, t) {
                var n, r;
                return a9(e, t), aZ[e] || (r = {}, "event" === (n = e) && (r.durationThreshold = 0), aE(n, function(e) {
                    a2(n, {
                        entries: e
                    })
                }, r), aZ[e] = !0), a7(e, t)
            }

            function a2(e, t) {
                var n = aX[e];
                if (null == n ? void 0 : n.length) {
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = n[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                            var s = i.value;
                            try {
                                s(t)
                            } catch (t) {
                                at && en.error("Error while triggering instrumentation handler.\nType: ".concat(e, "\nName: ").concat(eN(s), "\nError:"), t)
                            }
                        }
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
            }

            function a3() {
                return aC(function(e) {
                    a2("cls", {
                        metric: e
                    }), m = e
                }, {
                    reportAllChanges: !0
                })
            }

            function a4() {
                return aV(function(e) {
                    a2("lcp", {
                        metric: e
                    }), h = e
                }, {
                    reportAllChanges: !0
                })
            }

            function a8() {
                return aK(function(e) {
                    a2("ttfb", {
                        metric: e
                    }), b = e
                })
            }

            function a6() {
                return az(function(e) {
                    a2("inp", {
                        metric: e
                    }), g = e
                })
            }

            function a5(e, t, n, r) {
                var o, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return a9(e, t), aZ[e] || (o = n(), aZ[e] = !0), r && t({
                    metric: r
                }), a7(e, t, a ? o : void 0)
            }

            function a9(e, t) {
                aX[e] = aX[e] || [], aX[e].push(t)
            }

            function a7(e, t, n) {
                return function() {
                    n && n();
                    var r = aX[e];
                    if (r) {
                        var o = r.indexOf(t); - 1 !== o && r.splice(o, 1)
                    }
                }
            }
            var ie = function(e) {
                var t = function(t) {
                    var n;
                    ("pagehide" === t.type || (null == (n = j.document) ? void 0 : n.visibilityState) === "hidden") && e(t)
                };
                am("visibilitychange", t, {
                    capture: !0,
                    once: !0
                }), am("pagehide", t, {
                    capture: !0,
                    once: !0
                })
            };

            function it(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ir() {
                return (ir = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function io(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }

            function ia(e) {
                return "number" == typeof e && isFinite(e)
            }

            function ii(e, t, n, r) {
                var o = ir({}, function(e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e
                    }(r)),
                    a = tE(e).start_timestamp;
                return a && a > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), nb(e, function() {
                    var e = nh(io({
                        startTime: t
                    }, o));
                    return e && e.end(n), e
                })
            }

            function ic(e) {
                var t, n, r = e6();
                if (r) {
                    var o = e.name,
                        a = e.transaction,
                        i = e.attributes,
                        c = e.startTime,
                        s = r.getOptions(),
                        u = s.release,
                        l = s.environment,
                        f = s.sendDefaultPii,
                        p = r.getIntegrationByName("Replay"),
                        d = null == p ? void 0 : p.getReplayId(),
                        v = e3(),
                        y = v.getUser(),
                        m = void 0 !== y ? y.email || y.id || y.ip_address : void 0;
                    try {
                        n = v.getScopeData().contexts.profile.profile_id
                    } catch (e) {}
                    return nh({
                        name: o,
                        attributes: io({
                            release: u,
                            environment: l,
                            user: m || void 0,
                            profile_id: n || void 0,
                            replay_id: d || void 0,
                            transaction: a,
                            "user_agent.original": null == (t = j.navigator) ? void 0 : t.userAgent,
                            "client.address": f ? "{{auto}}" : void 0
                        }, i),
                        startTime: c,
                        experimental: {
                            standalone: !0
                        }
                    })
                }
            }

            function is() {
                return j.addEventListener && j.performance
            }

            function iu(e) {
                return e / 1e3
            }

            function il(e) {
                try {
                    return PerformanceObserver.supportedEntryTypes.includes(e)
                } catch (e) {
                    return !1
                }
            }

            function ip(e, t) {
                var n, r = !1;

                function o(e) {
                    !r && n && t(e, n), r = !0
                }
                ie(function() {
                    o("pagehide")
                });
                var a = e.on("beforeStartNavigationSpan", function(e, t) {
                        (null == t ? void 0 : t.isRedirect) || (o("navigation"), a(), i())
                    }),
                    i = e.on("afterStartPageLoadSpan", function(e) {
                        n = e.spanContext().spanId, i()
                    })
            }

            function id(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function iv(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function iy(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function im(e) {
                return e ? ((ej() || performance.timeOrigin) + e) / 1e3 : e
            }

            function ih(e) {
                var t, n, r, o = {};
                if (void 0 != e.nextHopProtocol) {
                    var a = function(e) {
                            var t = "unknown",
                                n = "unknown",
                                r = "",
                                o = !0,
                                a = !1,
                                i = void 0;
                            try {
                                for (var c, s = e[Symbol.iterator](); !(o = (c = s.next()).done); o = !0) {
                                    var u, l, f = c.value;
                                    if ("/" === f) {
                                        u = e.split("/"), t = (l = function(e) {
                                            if (Array.isArray(e)) return e
                                        }(u) || function(e, t) {
                                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != o) {
                                                var a = [],
                                                    i = !0,
                                                    c = !1;
                                                try {
                                                    for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                                } catch (e) {
                                                    c = !0, r = e
                                                } finally {
                                                    try {
                                                        i || null == o.return || o.return()
                                                    } finally {
                                                        if (c) throw r
                                                    }
                                                }
                                                return a
                                            }
                                        }(u, 2) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return it(e, 2);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return it(e, t)
                                            }
                                        }(u, 2) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }())[0], n = l[1];
                                        break
                                    }
                                    if (!isNaN(Number(f))) {
                                        t = "h" === r ? "http" : r, n = e.split(r)[1];
                                        break
                                    }
                                    r += f
                                }
                            } catch (e) {
                                a = !0, i = e
                            } finally {
                                try {
                                    o || null == s.return || s.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            return r === e && (t = r), {
                                name: t,
                                version: n
                            }
                        }(e.nextHopProtocol),
                        i = a.name,
                        c = a.version;
                    o["network.protocol.version"] = c, o["network.protocol.name"] = i
                }
                if (!(ej() || (null == (r = is()) ? void 0 : r.timeOrigin))) return o;
                return Object.fromEntries(Object.entries((t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, o), n = n = {
                    "http.request.redirect_start": im(e.redirectStart),
                    "http.request.redirect_end": im(e.redirectEnd),
                    "http.request.worker_start": im(e.workerStart),
                    "http.request.fetch_start": im(e.fetchStart),
                    "http.request.domain_lookup_start": im(e.domainLookupStart),
                    "http.request.domain_lookup_end": im(e.domainLookupEnd),
                    "http.request.connect_start": im(e.connectStart),
                    "http.request.secure_connection_start": im(e.secureConnectionStart),
                    "http.request.connection_end": im(e.connectEnd),
                    "http.request.request_start": im(e.requestStart),
                    "http.request.response_start": im(e.responseStart),
                    "http.request.response_end": im(e.responseEnd),
                    "http.request.time_to_first_byte": null != e.responseStart ? e.responseStart / 1e3 : void 0
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)).filter(function(e) {
                    return null != (function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var a = [],
                                i = !0,
                                c = !1;
                            try {
                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    i || null == o.return || o.return()
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return a
                        }
                    }(e, 2) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return iy(e, 2);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iy(e, t)
                        }
                    }(e, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[1]
                }))
            }

            function ib(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ig(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i_(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        ig(e, t, n[t])
                    })
                }
                return e
            }

            function iS(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return ib(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ib(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var iO = 0,
                iw = {};

            function ij(e, t, n, r) {
                var o, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n,
                    i = t["secureConnection" === (o = n) ? "connectEnd" : "fetch" === o ? "domainLookupStart" : "".concat(o, "End")],
                    c = t["".concat(n, "Start")];
                c && i && ii(e, r + iu(c), r + iu(i), {
                    op: "browser.".concat(a),
                    name: t.name,
                    attributes: i_(ig({}, tt, "auto.ui.browser.metrics"), "redirect" === n && null != t.redirectCount ? {
                        "http.redirect_count": t.redirectCount
                    } : {})
                })
            }
            var iP = n(494);

            function ik(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var iE = [],
                ix = new Map,
                iT = new Map,
                iA = {
                    click: "click",
                    pointerdown: "click",
                    pointerup: "click",
                    mousedown: "click",
                    mouseup: "click",
                    touchstart: "click",
                    touchend: "click",
                    mouseover: "hover",
                    mouseout: "hover",
                    mouseenter: "hover",
                    mouseleave: "hover",
                    pointerover: "hover",
                    pointerout: "hover",
                    pointerenter: "hover",
                    pointerleave: "hover",
                    dragstart: "drag",
                    dragend: "drag",
                    drag: "drag",
                    dragenter: "drag",
                    dragleave: "drag",
                    dragover: "drag",
                    drop: "drag",
                    keydown: "press",
                    keyup: "press",
                    keypress: "press",
                    input: "press"
                },
                iI = function(e) {
                    var t, n, r = e.metric;
                    if (void 0 != r.value) {
                        var o = iu(r.value);
                        if (!(o > 60)) {
                            var a = r.entries.find(function(e) {
                                return e.duration === r.value && iA[e.name]
                            });
                            if (a) {
                                var i = a.interactionId,
                                    c = iA[a.name],
                                    s = iu(ej() + a.startTime),
                                    u = tL(),
                                    l = u ? tR(u) : void 0,
                                    f = null != i ? ix.get(i) : void 0,
                                    p = (null == f ? void 0 : f.span) || l,
                                    d = p ? tE(p).description : e3().getScopeData().transactionName,
                                    v = ic({
                                        name: (null == f ? void 0 : f.elementName) || W(a.target),
                                        transaction: d,
                                        attributes: (ik(t = {}, tt, "auto.http.browser.inp"), ik(t, te, "ui.interaction.".concat(c)), ik(t, tc, a.duration), t),
                                        startTime: s
                                    });
                                v && (v.addEvent("inp", (ik(n = {}, tr, "millisecond"), ik(n, to, r.value), n)), v.end(s + o))
                            }
                        }
                    }
                };

            function iD(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function iC(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var iR = function(e) {
                var t = e.entries,
                    n = tL(),
                    r = n ? tR(n) : void 0,
                    o = r ? tE(r).description : e3().getScopeData().transactionName;
                t.forEach(function(e) {
                    var t, n, r;
                    if (e.identifier) {
                        var a, i = e.name,
                            c = e.renderTime,
                            s = e.loadTime,
                            u = (a = s ? [iu(s), "load-time"] : c ? [iu(c), "render-time"] : [eO(), "entry-emission"], function(e) {
                                if (Array.isArray(e)) return e
                            }(a) || function(e, t) {
                                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != o) {
                                    var a = [],
                                        i = !0,
                                        c = !1;
                                    try {
                                        for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                    } catch (e) {
                                        c = !0, r = e
                                    } finally {
                                        try {
                                            i || null == o.return || o.return()
                                        } finally {
                                            if (c) throw r
                                        }
                                    }
                                    return a
                                }
                            }(a, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return iD(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iD(e, t)
                                }
                            }(a, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            l = u[0],
                            f = u[1],
                            p = "image-paint" === i ? iu(Math.max(0, (null != c ? c : 0) - (null != s ? s : 0))) : 0,
                            d = (iC(r = {}, tt, "auto.ui.browser.elementtiming"), iC(r, te, "ui.elementtiming"), iC(r, e5, "component"), iC(r, "sentry.span_start_time_source", f), iC(r, "sentry.transaction_name", o), iC(r, "element.id", e.id), iC(r, "element.type", (null == (n = e.element) || null == (t = n.tagName) ? void 0 : t.toLowerCase()) || "unknown"), iC(r, "element.size", e.naturalWidth && e.naturalHeight ? "".concat(e.naturalWidth, "x").concat(e.naturalHeight) : void 0), iC(r, "element.render_time", c), iC(r, "element.load_time", s), iC(r, "element.url", e.url || void 0), iC(r, "element.identifier", e.identifier), iC(r, "element.paint_type", i), r);
                        nm({
                            name: "element[".concat(e.identifier, "]"),
                            attributes: d,
                            startTime: l,
                            onlyIfParent: !0
                        }, function(e) {
                            e.end(l + p)
                        })
                    }
                })
            };

            function iL(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function iM(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        iL(e, t, n[t])
                    })
                }
                return e
            }

            function iN(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
            var iU = "sentry_previous_trace";

            function iq(e) {
                return 1 === e.traceFlags
            }

            function iF() {
                var e, t, n, r, o, a, i, c, s, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    l = u.client || e6();
                if (!((null == (i = e6()) ? void 0 : i.getOptions().enabled) !== !1 && (null == i ? void 0 : i.getTransport())) || !l) return {};
                var f = e1(P());
                if (f.getTraceData) return f.getTraceData(u);
                var p = u.scope || e3(),
                    d = u.span || tL(),
                    v = d ? tS((c = d.spanContext()).traceId, c.spanId, tx(d)) : (t = (e = p.getPropagationContext()).traceId, n = e.sampled, tS(t, e.propagationSpanId, n)),
                    y = function(e) {
                        if (e) {
                            var t = Object.entries(e).reduce(function(e, t) {
                                var n = ty(t, 2),
                                    r = n[0],
                                    o = n[1];
                                return o && (e["".concat(tm).concat(r)] = o), e
                            }, {});
                            return 0 !== Object.keys(t).length ? Object.entries(t).reduce(function(e, t, n) {
                                var r = ty(t, 2),
                                    o = r[0],
                                    a = r[1],
                                    i = "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(a)),
                                    c = 0 === n ? i : "".concat(e, ",").concat(i);
                                return c.length > 8192 ? (x && en.warn("Not adding key: ".concat(o, " with val: ").concat(a, " to baggage header due to exceeding baggage size limits.")), e) : c
                            }, "") : void 0
                        }
                    }(d ? tG(d) : tW(l, p));
                if (!t_.test(v)) return en.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
                var m = {
                    "sentry-trace": v,
                    baggage: y
                };
                return u.propagateTraceparent && (m.traceparent = d ? tO((s = d.spanContext()).traceId, s.spanId, tx(d)) : (o = (r = p.getPropagationContext()).traceId, a = r.sampled, tO(o, r.propagationSpanId, a))), m
            }

            function iB(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function iH(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i$(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        iH(e, t, n[t])
                    })
                }
                return e
            }

            function iz(e) {
                return function(e) {
                    if (Array.isArray(e)) return iB(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return iB(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iB(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function iW(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }

            function iG(e) {
                return e.split(",").some(function(e) {
                    return e.trim().startsWith(tm)
                })
            }

            function iV(e, t, n, r) {
                var o, a = (iH(o = {
                    url: om(e),
                    type: "fetch",
                    "http.method": n
                }, tt, r), iH(o, te, "http.client"), o);
                return t && (od(t) || (a["http.url"] = om(t.href), a["server.address"] = t.host), t.search && (a["http.query"] = t.search), t.hash && (a["http.fragment"] = t.hash)), a
            }

            function iJ(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function iY(e) {
                try {
                    return new URL(e, j.location.origin).href
                } catch (e) {
                    return
                }
            }

            function iK(e) {
                try {
                    return new Headers(e)
                } catch (e) {
                    return
                }
            }

            function iX(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function iZ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        iX(e, t, n[t])
                    })
                }
                return e
            }
            Symbol.for("sentry__originalRequestBody");
            var iQ = new WeakMap,
                i0 = new Map,
                i1 = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    trackFetchStreamPerformance: !1
                };

            function i2(e) {
                var t = tE(e).data.url;
                if (t && "string" == typeof t) var n = a1("resource", function(r) {
                    r.entries.forEach(function(r) {
                        "resource" === r.entryType && "initiatorType" in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t) && (e.setAttributes(ih(r)), setTimeout(n))
                    })
                })
            }

            function i3(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i4(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        i3(e, t, n[t])
                    })
                }
                return e
            }

            function i8(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
            var i6 = i4(i8(i4({}, al), {
                instrumentNavigation: !0,
                instrumentPageLoad: !0,
                markBackgroundSpan: !0,
                enableLongTask: !0,
                enableLongAnimationFrame: !0,
                enableInp: !0,
                enableElementTiming: !0,
                ignoreResourceSpans: [],
                ignorePerformanceApiSpans: [],
                detectRedirects: !0,
                linkPreviousTrace: "in-memory",
                consistentTraceSampling: !1,
                enableReportPageLoaded: !1,
                _experiments: {}
            }), i1);

            function i5(e) {
                var t = j.document,
                    n = null == t ? void 0 : t.querySelector("meta[name=".concat(e, "]"));
                return (null == n ? void 0 : n.getAttribute("content")) || void 0
            }
            var i9 = "_sentry_idleSpan";

            function i7(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ce(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function ct(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            ce(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            ce(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function cn(e, t) {
                var n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(c) {
                    return function(s) {
                        var u = [c, s];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                            if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                            switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        a.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && a.label < o[1]) {
                                        a.label = o[1], o = u;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(u);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            u = t.call(e, a)
                        } catch (e) {
                            u = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function cr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function co(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        s = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function ca(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            co(a, r, o, i, c, "next", e)
                        }

                        function c(e) {
                            co(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }

            function ci(e) {
                return function(e) {
                    if (Array.isArray(e)) return cr(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return cr(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cr(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function cc(e, t) {
                var n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(c) {
                    return function(s) {
                        var u = [c, s];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                            if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                            switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        a.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && a.label < o[1]) {
                                        a.label = o[1], o = u;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(u);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            u = t.call(e, a)
                        } catch (e) {
                            u = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function cs(e) {
                return new Promise(function(t, n) {
                    e.oncomplete = e.onsuccess = function() {
                        return t(e.result)
                    }, e.onabort = e.onerror = function() {
                        return n(e.error)
                    }
                })
            }

            function cu(e) {
                return cs(e.getAllKeys())
            }

            function cl(e) {
                var t;

                function n() {
                    var n, r, o, a;
                    return void 0 == t && (n = e.dbName || "sentry-offline", r = e.storeName || "queue", (o = indexedDB.open(n)).onupgradeneeded = function() {
                        return o.result.createObjectStore(r)
                    }, a = cs(o), t = function(e) {
                        return a.then(function(t) {
                            return e(t.transaction(r, "readwrite").objectStore(r))
                        })
                    }), t
                }
                return {
                    push: function(t) {
                        return ca(function() {
                            var r;
                            return cc(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 3, , 4]), [4, t4(t)];
                                    case 1:
                                        var a, i;
                                        return r = o.sent(), [4, (a = n(), i = e.maxQueueSize || 30, a(function(e) {
                                            return cu(e).then(function(t) {
                                                var n;
                                                if (!(t.length >= i)) return e.put(r, (n = Math).max.apply(n, ci(t).concat([0])) + 1), cs(e.transaction)
                                            })
                                        }))];
                                    case 2:
                                    case 3:
                                        return o.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })()
                    },
                    unshift: function(t) {
                        return ca(function() {
                            var r;
                            return cc(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 3, , 4]), [4, t4(t)];
                                    case 1:
                                        var a, i;
                                        return r = o.sent(), [4, (a = n(), i = e.maxQueueSize || 30, a(function(e) {
                                            return cu(e).then(function(t) {
                                                var n;
                                                if (!(t.length >= i)) return e.put(r, (n = Math).min.apply(n, ci(t).concat([0])) - 1), cs(e.transaction)
                                            })
                                        }))];
                                    case 2:
                                    case 3:
                                        return o.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })()
                    },
                    shift: function() {
                        return ca(function() {
                            var e;
                            return cc(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, n()(function(e) {
                                            return cu(e).then(function(t) {
                                                var n = t[0];
                                                if (null != n) return cs(e.get(n)).then(function(t) {
                                                    return e.delete(n), cs(e.transaction).then(function() {
                                                        return t
                                                    })
                                                })
                                            })
                                        })];
                                    case 1:
                                        if (e = t.sent()) return [2, function(e) {
                                            var t = "string" == typeof e ? t3(e) : e;

                                            function n(e) {
                                                var n = t.subarray(0, e);
                                                return t = t.subarray(e + 1), n
                                            }

                                            function r() {
                                                var e, r, o = t.indexOf(10);
                                                return o < 0 && (o = t.length), JSON.parse((e = n(o), (r = k(j)).decodePolyfill ? r.decodePolyfill(e) : new TextDecoder().decode(e)))
                                            }
                                            for (var o = r(), a = []; t.length;) {
                                                var i = r(),
                                                    c = "number" == typeof i.length ? i.length : void 0;
                                                a.push([i, c ? n(c) : r()])
                                            }
                                            return [o, a]
                                        }(e)];
                                        return [3, 3];
                                    case 2:
                                        return t.sent(), [3, 3];
                                    case 3:
                                        return [2, void 0]
                                }
                            })
                        })()
                    }
                }
            }
            var cf = window.Roblox["core-scripts"].environmentUrls,
                cp = n.n(cf),
                cd = window.HeaderScripts,
                cv = /^\/[a-z]{2}(?:-[a-z]{2})\//i,
                cy = /^\/home\/?$/i,
                cm = /^\/users\/[^/]+\/profile/i,
                ch = /^\/users\/[^/]+\/friends/i,
                cb = /^\/communities\/[^/]+\/[^/]+/i,
                cg = /^\/mobile-app-upgrades\/.*/i,
                c_ = /^\/upgrades\/.*/i,
                cS = /^\/login-redirect(?:\/[^?]*)?(?:\?.*)?$/i,
                cO = function(e) {
                    return e < 0 ? 0 : e > 1 ? 1 : e
                },
                cw = ["css.rbxcdn.com", "static.rbxcdn.com", "js.rbxcdn.com", "tr.rbxcdn.com", "metrics.roblox.com", "images.rbxcdn.com"];

            function cj(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function cP(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (c) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return cj(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cj(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ck(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }

            function cE(e) {
                return null == e || Number.isNaN(e) ? String(Math.trunc(1e6 * performance.timeOrigin + 1e6 * performance.now())) : String(Math.trunc(1e9 * e))
            }

            function cx(e) {
                var t = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, i = e[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var c = a.value,
                            s = !0,
                            u = !1,
                            l = void 0;
                        try {
                            for (var f, p = (null == c || (void 0 === c ? "undefined" : ck(c)) !== "object" ? [] : Object.entries(c))[Symbol.iterator](); !(s = (f = p.next()).done); s = !0) {
                                var d = cP(f.value, 2),
                                    v = d[0],
                                    y = d[1];
                                null != y && t.push({
                                    key: v,
                                    value: function e(t) {
                                        switch (void 0 === t ? "undefined" : ck(t)) {
                                            case "string":
                                                return {
                                                    stringValue: t
                                                };
                                            case "boolean":
                                                return {
                                                    boolValue: t
                                                };
                                            case "number":
                                                return Number.isInteger(t) ? {
                                                    intValue: String(t)
                                                } : {
                                                    doubleValue: t
                                                };
                                            case "object":
                                                if (null === t) return {
                                                    stringValue: "null"
                                                };
                                                if (Array.isArray(t)) return {
                                                    arrayValue: {
                                                        values: t.map(e)
                                                    }
                                                };
                                                return {
                                                    kvlistValue: {
                                                        values: Object.entries(t).map(function(t) {
                                                            var n = cP(t, 2);
                                                            return {
                                                                key: n[0],
                                                                value: e(n[1])
                                                            }
                                                        })
                                                    }
                                                };
                                            case "bigint":
                                                return {
                                                    intValue: String(t)
                                                };
                                            case "symbol":
                                            default:
                                                return {
                                                    stringValue: String(t)
                                                };
                                            case "undefined":
                                                return {
                                                    stringValue: "undefined"
                                                };
                                            case "function":
                                                return {
                                                    stringValue: "[Function]"
                                                }
                                        }
                                    }(y)
                                })
                            }
                        } catch (e) {
                            u = !0, l = e
                        } finally {
                            try {
                                s || null == p.return || p.return()
                            } finally {
                                if (u) throw l
                            }
                        }
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return t
            }

            function cT(e) {
                if (!e) return {
                    code: 0
                };
                var t = e.toLowerCase();
                return "ok" === t ? {
                    code: 1
                } : ["cancelled", "unknown_error", "invalid_argument", "deadline_exceeded", "not_found", "already_exists", "permission_denied", "resource_exhausted", "failed_precondition", "aborted", "out_of_range", "unimplemented", "internal_error", "unavailable", "data_loss", "unauthenticated"].includes(t) ? {
                    code: 2,
                    message: e
                } : {
                    code: 0
                }
            }

            function cA(e) {
                if (!e) return 1;
                var t = e.toLowerCase();
                return t.includes("http") || t.includes("fetch") || t.includes("xhr") || t.includes("db") || t.includes("query") || t.includes("sql") ? 3 : t.includes("server") || t.includes("request") ? 2 : t.includes("publish") || t.includes("send") || t.includes("produce") ? 4 : t.includes("consume") || t.includes("receive") || t.includes("process") ? 5 : 1
            }
            "undefined" != typeof window && (window.Sentry = {
                startSpan: nm,
                getActiveSpan: tL,
                flush: function(e) {
                    var t;
                    return (t = function() {
                        var t;
                        return function(e, t) {
                            var n, r, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                },
                                i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                            return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(s) {
                                    var u = [c, s];
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; i && (i = 0, u[0] && (a = 0)), a;) try {
                                        if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                        switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                            case 0:
                                            case 1:
                                                o = u;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: u[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = u[1], u = [0];
                                                continue;
                                            case 7:
                                                u = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                                    a.label = u[1];
                                                    break
                                                }
                                                if (6 === u[0] && a.label < o[1]) {
                                                    a.label = o[1], o = u;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(u);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        u = t.call(e, a)
                                    } catch (e) {
                                        u = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & u[0]) throw u[1];
                                    return {
                                        value: u[0] ? u[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(n) {
                            return (t = e6()) ? [2, t.flush(e)] : (x && en.warn("Cannot flush events. No client defined."), [2, Promise.resolve(!1)])
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var a = t.apply(e, n);

                            function i(e) {
                                nM(a, r, o, i, c, "next", e)
                            }

                            function c(e) {
                                nM(a, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        })
                    })()
                }
            });
            var cI = document.querySelector('meta[name="sentry-meta"]'),
                cD = null != (O = null == cI ? void 0 : cI.dataset) ? O : {},
                cC = cD.dsn,
                cR = cD.envName,
                cL = cD.sampleRate,
                cM = cp().otelCollectorTracesEndpoint || "https://otel-collector-otlp-http-sitetest3.simulpong.com/v1/traces",
                cN = null == cL ? .001 : parseFloat(cL),
                cU = Math.min(cN, 5e-4);
            ! function() {
                var e, t, n, r, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = !a.skipBrowserExtensionCheck && !! function() {
                        if (void 0 === j.window || j.nw) return !1;
                        var e, t = j.chrome || j.browser;
                        if (!(null == t || null == (e = t.runtime) ? void 0 : e.id)) return !1;
                        var n = G();
                        return !(j === j.top && ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"].some(function(e) {
                            return n.startsWith("".concat(e, "://"))
                        }))
                    }() && (oP && Z(function() {
                        console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                    }), !0),
                    c = null == a.defaultIntegrations ? [nQ(), {
                        name: "FunctionToString",
                        setupOnce: function() {
                            l = Function.prototype.toString;
                            try {
                                Function.prototype.toString = function() {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    var r = ec(this),
                                        o = n2.has(e6()) && void 0 !== r ? r : this;
                                    return l.apply(o, t)
                                }
                            } catch (e) {}
                        },
                        setup: function(e) {
                            n2.set(e, !0)
                        }
                    }, {
                        name: "ConversationId",
                        setup: function(e) {
                            e.on("spanStart", function(e) {
                                var t = e3().getScopeData(),
                                    n = e4().getScopeData(),
                                    r = t.conversationId || n.conversationId;
                                r && e.setAttribute("gen_ai.conversation.id", r)
                            })
                        }
                    }, oA(), ox(), oF(), oK(), n3(), {
                        name: "HttpContext",
                        preprocessEvent: function(e) {
                            if (j.navigator || j.location || j.document) {
                                var t, n, r, o = rJ(),
                                    a = o$({}, o.headers, null == (r = e.request) ? void 0 : r.headers);
                                t = o$({}, o, e.request), n = n = {
                                    headers: a
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }), e.request = t
                            }
                        }
                    }, {
                        name: "BrowserSession",
                        setupOnce: function() {
                            if (void 0 === j.document) {
                                oP && en.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                                return
                            }
                            nq({
                                ignoreDuration: !0
                            }), nH(), ow(function(e) {
                                var t = e.from,
                                    n = e.to;
                                void 0 !== t && t !== n && (nq({
                                    ignoreDuration: !0
                                }), nH())
                            })
                        }
                    }] : a.defaultIntegrations,
                    s = (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, a), r = r = {
                        enabled: !i && a.enabled,
                        stackParser: Array.isArray(t = a.stackParser || o7) ? eR.apply(void 0, eI(t)) : t,
                        integrations: function(e) {
                            var t, n, r = e.defaultIntegrations || [],
                                o = e.integrations;
                            if (r.forEach(function(e) {
                                    e.isDefaultInstance = !0
                                }), Array.isArray(o)) n = nz(r).concat(nz(o));
                            else if ("function" == typeof o) {
                                var a = o(r);
                                n = Array.isArray(a) ? a : [a]
                            } else n = r;
                            return t = {}, n.forEach(function(e) {
                                var n = e.name,
                                    r = t[n];
                                r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
                            }), Object.values(t)
                        }({
                            integrations: a.integrations,
                            defaultIntegrations: c
                        }),
                        transport: a.transport || ao
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }), n);
                !0 === s.debug && (x ? en.enable() : Z(function() {
                    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                })), e3().update(s.initialScope), e = o = new r0(s), e3().setClient(e), o.init()
            }({
                dsn: null != cC ? cC : "https://24df60727c94bd0aa14ab1269d104a21@o293668.ingest.us.sentry.io/4509158985826304",
                integrations: [function() {
                    var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = function(t, r) {
                            var o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                c = "pageload" === r.op,
                                s = r.name,
                                u = m ? m(r) : r,
                                l = u.attributes || {};
                            if (s !== u.name && (l[e5] = "custom", u.attributes = l), !o) {
                                var f = eS();
                                nh(i8(i4({}, u), {
                                    startTime: f
                                })).end(f);
                                return
                            }
                            a.name = u.name, a.source = l[e5];
                            var p = af(u, {
                                idleTimeout: h,
                                finalTimeout: O,
                                childSpanTimeout: w,
                                disableAutoFinish: c,
                                beforeSpanEnd: function(r) {
                                    null == e || e(),
                                        function(e, t) {
                                            var n = is(),
                                                r = ej();
                                            if ((null == n ? void 0 : n.getEntries) && r) {
                                                var o, a, i = iu(r),
                                                    c = n.getEntries(),
                                                    s = tE(e),
                                                    u = s.op,
                                                    l = s.start_timestamp;
                                                c.slice(iO).forEach(function(n) {
                                                        var r, o, a, c, s, f, p, d, v, y = iu(n.startTime),
                                                            m = iu(Math.max(0, n.duration));
                                                        if ("navigation" !== u || !l || !(i + y < l)) switch (n.entryType) {
                                                            case "navigation":
                                                                r = e, o = n, a = i, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function(e) {
                                                                    ij(r, o, e, a)
                                                                }), ij(r, o, "secureConnection", a, "TLS/SSL"), ij(r, o, "fetch", a, "cache"), ij(r, o, "domainLookup", a, "DNS"), c = r, s = o, p = (f = a) + iu(s.requestStart), d = f + iu(s.responseEnd), v = f + iu(s.responseStart), s.responseEnd && (ii(c, p, d, {
                                                                    op: "browser.request",
                                                                    name: s.name,
                                                                    attributes: ig({}, tt, "auto.ui.browser.metrics")
                                                                }), ii(c, v, d, {
                                                                    op: "browser.response",
                                                                    name: s.name,
                                                                    attributes: ig({}, tt, "auto.ui.browser.metrics")
                                                                }));
                                                                break;
                                                            case "mark":
                                                            case "paint":
                                                            case "measure":
                                                                ! function(e, t, n, r, o, a) {
                                                                    if (! function(e) {
                                                                            if ((null == e ? void 0 : e.entryType) === "measure") try {
                                                                                return "Components ⚛" === e.detail.devtools.track
                                                                            } catch (e) {
                                                                                return
                                                                            }
                                                                        }(t) && !(["mark", "measure"].includes(t.entryType) && e$(t.name, a))) {
                                                                        var i = av(!1),
                                                                            c = o + Math.max(n, iu(i ? i.requestStart : 0)),
                                                                            s = o + n,
                                                                            u = s + r,
                                                                            l = ig({}, tt, "auto.resource.browser.metrics");
                                                                        c !== s && (l["sentry.browser.measure_happened_before_request"] = !0, l["sentry.browser.measure_start_time"] = c),
                                                                            function(e, t) {
                                                                                try {
                                                                                    var n = t.detail;
                                                                                    if (!n) return;
                                                                                    if ((void 0 === n ? "undefined" : n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) == "object") {
                                                                                        var r = !0,
                                                                                            o = !1,
                                                                                            a = void 0;
                                                                                        try {
                                                                                            for (var i, c = Object.entries(n)[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                                                                                                var s = iS(i.value, 2),
                                                                                                    u = s[0],
                                                                                                    l = s[1];
                                                                                                if (l && N(l)) e["sentry.browser.measure.detail.".concat(u)] = l;
                                                                                                else if (void 0 !== l) try {
                                                                                                    e["sentry.browser.measure.detail.".concat(u)] = JSON.stringify(l)
                                                                                                } catch (e) {}
                                                                                            }
                                                                                        } catch (e) {
                                                                                            o = !0, a = e
                                                                                        } finally {
                                                                                            try {
                                                                                                r || null == c.return || c.return()
                                                                                            } finally {
                                                                                                if (o) throw a
                                                                                            }
                                                                                        }
                                                                                        return
                                                                                    }
                                                                                    if (N(n)) {
                                                                                        e["sentry.browser.measure.detail"] = n;
                                                                                        return
                                                                                    }
                                                                                    try {
                                                                                        e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                                                                    } catch (e) {}
                                                                                } catch (e) {}
                                                                            }(l, t), c <= u && ii(e, c, u, {
                                                                                name: t.name,
                                                                                op: t.entryType,
                                                                                attributes: l
                                                                            })
                                                                    }
                                                                }(e, n, y, m, i, t.ignorePerformanceApiSpans);
                                                                var h = aO(),
                                                                    b = n.startTime < h.firstHiddenTime;
                                                                "first-paint" === n.name && b && (iw.fp = {
                                                                    value: n.startTime,
                                                                    unit: "millisecond"
                                                                }), "first-contentful-paint" === n.name && b && (iw.fcp = {
                                                                    value: n.startTime,
                                                                    unit: "millisecond"
                                                                });
                                                                break;
                                                            case "resource":
                                                                ! function(e, t, n, r, o, a, i) {
                                                                    if ("xmlhttprequest" !== t.initiatorType && "fetch" !== t.initiatorType) {
                                                                        var c = t.initiatorType ? "resource.".concat(t.initiatorType) : "resource.other";
                                                                        if (null == i || !i.includes(c)) {
                                                                            var s, u, l = ig({}, tt, "auto.resource.browser.metrics"),
                                                                                f = oy(n);
                                                                            f.protocol && (l["url.scheme"] = f.protocol.split(":").pop()), f.host && (l["server.address"] = f.host), l["url.same_origin"] = n.includes(j.location.origin), s = t, u = l, [
                                                                                ["responseStatus", "http.response.status_code"],
                                                                                ["transferSize", "http.response_transfer_size"],
                                                                                ["encodedBodySize", "http.response_content_length"],
                                                                                ["decodedBodySize", "http.decoded_response_content_length"],
                                                                                ["renderBlockingStatus", "resource.render_blocking_status"],
                                                                                ["deliveryType", "http.response_delivery_type"]
                                                                            ].forEach(function(e) {
                                                                                var t = iS(e, 2),
                                                                                    n = t[0],
                                                                                    r = t[1],
                                                                                    o = s[n];
                                                                                null != o && ("number" == typeof o && o < 0x7fffffff || "string" == typeof o) && (u[r] = o)
                                                                            });
                                                                            var p = i_({}, l, ih(t)),
                                                                                d = a + r;
                                                                            ii(e, d, d + o, {
                                                                                name: n.replace(j.location.origin, ""),
                                                                                op: c,
                                                                                attributes: p
                                                                            })
                                                                        }
                                                                    }
                                                                }(e, n, n.name, y, m, i, t.ignoreResourceSpans)
                                                        }
                                                    }), iO = Math.max(c.length - 1, 0),
                                                    function(e) {
                                                        var t = j.navigator;
                                                        if (t) {
                                                            var n = t.connection;
                                                            n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), ia(n.rtt) && (iw["connection.rtt"] = {
                                                                value: n.rtt,
                                                                unit: "millisecond"
                                                            })), ia(t.deviceMemory) && e.setAttribute("deviceMemory", "".concat(t.deviceMemory, " GB")), ia(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                                                        }
                                                    }(e), "pageload" === u && (function(e) {
                                                        var t = av(!1);
                                                        if (t) {
                                                            var n = t.responseStart,
                                                                r = t.requestStart;
                                                            r <= n && (e["ttfb.requestTime"] = {
                                                                value: n - r,
                                                                unit: "millisecond"
                                                            })
                                                        }
                                                    }(iw), t.recordClsOnPageloadSpan || delete iw.cls, t.recordLcpOnPageloadSpan || delete iw.lcp, Object.entries(iw).forEach(function(e) {
                                                        var t = iS(e, 2),
                                                            n = t[0],
                                                            r = t[1];
                                                        ! function(e, t, n) {
                                                            var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tL(),
                                                                a = o && tR(o);
                                                            a && (x && en.log("[Measurement] Setting measurement on root span: ".concat(e, " = ").concat(t, " ").concat(n)), a.addEvent(e, (nn(r = {}, to, t), nn(r, tr, n), r)))
                                                        }(n, r.value, r.unit)
                                                    }), e.setAttribute("performance.timeOrigin", i), e.setAttribute("performance.activationStart", ay()), o = e, a = t, _ && a.recordLcpOnPageloadSpan && (_.element && o.setAttribute("lcp.element", W(_.element)), _.id && o.setAttribute("lcp.id", _.id), _.url && o.setAttribute("lcp.url", _.url.trim().slice(0, 200)), null != _.loadTime && o.setAttribute("lcp.loadTime", _.loadTime), null != _.renderTime && o.setAttribute("lcp.renderTime", _.renderTime), o.setAttribute("lcp.size", _.size)), (null == S ? void 0 : S.sources) && a.recordClsOnPageloadSpan && S.sources.forEach(function(e, t) {
                                                        return o.setAttribute("cls.source.".concat(t + 1), W(e.node))
                                                    })), _ = void 0, S = void 0, iw = {}
                                            }
                                        }(r, {
                                            recordClsOnPageloadSpan: !v,
                                            recordLcpOnPageloadSpan: !y,
                                            ignoreResourceSpans: D,
                                            ignorePerformanceApiSpans: C
                                        }), ea(t, i9, void 0);
                                    var o = e3(),
                                        a = o.getPropagationContext();
                                    o.setPropagationContext(i8(i4({}, a), {
                                        traceId: p.spanContext().traceId,
                                        sampled: tx(p),
                                        dsc: tG(r)
                                    })), c && (n = void 0)
                                },
                                trimIdleSpanEndTimestamp: !F
                            });

                            function d() {
                                i && ["interactive", "complete"].includes(i.readyState) && t.emit("idleSpanEnableAutoFinish", p)
                            }
                            c && F && (n = p), ea(t, i9, p), c && !F && i && (i.addEventListener("readystatechange", function() {
                                d()
                            }), d())
                        },
                        a = {
                            name: void 0,
                            source: void 0
                        },
                        i = j.document,
                        c = i4({}, i6, r),
                        s = c.enableInp,
                        u = c.enableElementTiming,
                        l = c.enableLongTask,
                        f = c.enableLongAnimationFrame,
                        p = c._experiments,
                        d = p.enableInteractions,
                        v = p.enableStandaloneClsSpans,
                        y = p.enableStandaloneLcpSpans,
                        m = c.beforeStartSpan,
                        h = c.idleTimeout,
                        O = c.finalTimeout,
                        w = c.childSpanTimeout,
                        P = c.markBackgroundSpan,
                        k = c.traceFetch,
                        E = c.traceXHR,
                        T = c.trackFetchStreamPerformance,
                        A = c.shouldCreateSpanForRequest,
                        I = c.enableHTTPTimings,
                        D = c.ignoreResourceSpans,
                        C = c.ignorePerformanceApiSpans,
                        R = c.instrumentPageLoad,
                        L = c.instrumentNavigation,
                        M = c.detectRedirects,
                        U = c.linkPreviousTrace,
                        q = c.consistentTraceSampling,
                        F = c.enableReportPageLoaded,
                        H = c.onRequestSpanStart,
                        z = c.onRequestSpanEnd;
                    return {
                        name: "BrowserTracing",
                        setup: function(r) {
                            function a() {
                                var e = tL(),
                                    t = e && tR(e);
                                if (t) {
                                    var n = "internal_error";
                                    x && en.log("[Tracing] Root span: ".concat(n, " -> Global error occurred")), t.setStatus({
                                        code: 2,
                                        message: n
                                    })
                                }
                            }
                            if (ap || (a.tag = "sentry_tracingErrorCallback", ap = !0, oL(a), oU(a)), e = function(e) {
                                    var t = e.recordClsStandaloneSpans,
                                        n = e.recordLcpStandaloneSpans,
                                        r = e.client,
                                        o = is();
                                    if (o && ej()) {
                                        o.mark && j.performance.mark("sentry-tracing-init");
                                        var a = n ? function(e) {
                                                var t, n = 0;
                                                if (il("largest-contentful-paint")) {
                                                    var r = a0(function(e) {
                                                        var r = e.metric,
                                                            o = r.entries[r.entries.length - 1];
                                                        o && (n = r.value, t = o)
                                                    }, !0);
                                                    ip(e, function(e, o) {
                                                        var a, i, c, s, u, l, f, p, d, v, y;
                                                        a = n, i = t, c = o, s = e, at && en.log("Sending LCP span (".concat(a, ")")), f = iu((ej() || 0) + ((null == i ? void 0 : i.startTime) || 0)), p = e3().getScopeData().transactionName, d = i ? W(i.element) : "Largest contentful paint", v = (iv(u = {}, tt, "auto.http.browser.lcp"), iv(u, te, "ui.webvital.lcp"), iv(u, tc, 0), iv(u, "sentry.pageload.span_id", c), iv(u, "sentry.report_event", s), u), i && (i.element && (v["lcp.element"] = W(i.element)), i.id && (v["lcp.id"] = i.id), i.url && (v["lcp.url"] = i.url), null != i.loadTime && (v["lcp.loadTime"] = i.loadTime), null != i.renderTime && (v["lcp.renderTime"] = i.renderTime), null != i.size && (v["lcp.size"] = i.size)), (y = ic({
                                                            name: d,
                                                            transaction: p,
                                                            attributes: v,
                                                            startTime: f
                                                        })) && (y.addEvent("lcp", (iv(l = {}, tr, "millisecond"), iv(l, to, a), l)), y.end(f)), r()
                                                    })
                                                }
                                            }(r) : a0(function(e) {
                                                var t = e.metric,
                                                    n = t.entries[t.entries.length - 1];
                                                n && (iw.lcp = {
                                                    value: t.value,
                                                    unit: "millisecond"
                                                }, _ = n)
                                            }, !0),
                                            i = a5("ttfb", function(e) {
                                                var t = e.metric;
                                                t.entries[t.entries.length - 1] && (iw.ttfb = {
                                                    value: t.value,
                                                    unit: "millisecond"
                                                })
                                            }, a8, b),
                                            c = t ? function(e) {
                                                var t, n = 0;
                                                if (il("layout-shift")) {
                                                    var r = aQ(function(e) {
                                                        var r = e.metric,
                                                            o = r.entries[r.entries.length - 1];
                                                        o && (n = r.value, t = o)
                                                    }, !0);
                                                    ip(e, function(e, o) {
                                                        var a, i, c, s, u, l, f, p, d, v, y, m;
                                                        a = n, i = t, c = o, s = e, at && en.log("Sending CLS span (".concat(a, ")")), p = i ? iu((ej() || 0) + i.startTime) : eO(), d = e3().getScopeData().transactionName, v = i ? W(null == (u = i.sources[0]) ? void 0 : u.node) : "Layout shift", y = (id(l = {}, tt, "auto.http.browser.cls"), id(l, te, "ui.webvital.cls"), id(l, tc, 0), id(l, "sentry.pageload.span_id", c), id(l, "sentry.report_event", s), l), (null == i ? void 0 : i.sources) && i.sources.forEach(function(e, t) {
                                                            y["cls.source.".concat(t + 1)] = W(e.node)
                                                        }), (m = ic({
                                                            name: v,
                                                            transaction: d,
                                                            attributes: y,
                                                            startTime: p
                                                        })) && (m.addEvent("cls", (id(f = {}, tr, ""), id(f, to, a), f)), m.end(p)), r()
                                                    })
                                                }
                                            }(r) : aQ(function(e) {
                                                var t = e.metric,
                                                    n = t.entries[t.entries.length - 1];
                                                n && (iw.cls = {
                                                    value: t.value,
                                                    unit: ""
                                                }, S = n)
                                            }, !0);
                                        return function() {
                                            null == a || a(), i(), null == c || c()
                                        }
                                    }
                                    return function() {}
                                }({
                                    recordClsStandaloneSpans: v || !1,
                                    recordLcpStandaloneSpans: y || !1,
                                    client: r
                                }), s && function() {
                                    if (is() && ej()) void a5("inp", iI, a6, g)
                                }(), u && is() && ej() && a1("element", iR), f && j.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? new PerformanceObserver(function(e) {
                                    var t = tL();
                                    if (t) {
                                        var n = !0,
                                            r = !1,
                                            o = void 0;
                                        try {
                                            for (var a, i = e.getEntries()[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                                                var c = a.value;
                                                if (c.scripts[0]) {
                                                    var s = iu(ej() + c.startTime),
                                                        u = tE(t),
                                                        l = u.start_timestamp,
                                                        f = u.op;
                                                    if ("navigation" !== f || !l || !(s < l)) {
                                                        var p = iu(c.duration),
                                                            d = ig({}, tt, "auto.ui.browser.metrics"),
                                                            v = c.scripts[0],
                                                            y = v.invoker,
                                                            m = v.invokerType,
                                                            h = v.sourceURL,
                                                            b = v.sourceFunctionName,
                                                            g = v.sourceCharPosition;
                                                        d["browser.script.invoker"] = y, d["browser.script.invoker_type"] = m, h && (d["code.filepath"] = h), b && (d["code.function"] = b), -1 !== g && (d["browser.script.source_char_position"] = g), ii(t, s, s + p, {
                                                            name: "Main UI thread blocked",
                                                            op: "ui.long-animation-frame",
                                                            attributes: d
                                                        })
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            r = !0, o = e
                                        } finally {
                                            try {
                                                n || null == i.return || i.return()
                                            } finally {
                                                if (r) throw o
                                            }
                                        }
                                    }
                                }).observe({
                                    type: "long-animation-frame",
                                    buffered: !0
                                }) : l && a1("longtask", function(e) {
                                    var t = e.entries,
                                        n = tL();
                                    if (n) {
                                        var r = tE(n),
                                            o = r.op,
                                            a = r.start_timestamp,
                                            i = !0,
                                            c = !1,
                                            s = void 0;
                                        try {
                                            for (var u, l = t[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                                                var f = u.value,
                                                    p = iu(ej() + f.startTime),
                                                    d = iu(f.duration);
                                                "navigation" === o && a && p < a || ii(n, p, p + d, {
                                                    name: "Main UI thread blocked",
                                                    op: "ui.long-task",
                                                    attributes: ig({}, tt, "auto.ui.browser.metrics")
                                                })
                                            }
                                        } catch (e) {
                                            c = !0, s = e
                                        } finally {
                                            try {
                                                i || null == l.return || l.return()
                                            } finally {
                                                if (c) throw s
                                            }
                                        }
                                    }
                                }), d && a1("event", function(e) {
                                    var t = e.entries,
                                        n = tL();
                                    if (n) {
                                        var r = !0,
                                            o = !1,
                                            a = void 0;
                                        try {
                                            for (var i, c = t[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                                                var s = i.value;
                                                if ("click" === s.name) {
                                                    var u = iu(ej() + s.startTime),
                                                        l = iu(s.duration),
                                                        f = {
                                                            name: W(s.target),
                                                            op: "ui.interaction.".concat(s.name),
                                                            startTime: u,
                                                            attributes: ig({}, tt, "auto.ui.browser.metrics")
                                                        },
                                                        p = V(s.target);
                                                    p && (f.attributes["ui.component_name"] = p), ii(n, u, u + l, f)
                                                }
                                            }
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                r || null == c.return || c.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                    }
                                }), M && i) {
                                var c = function() {
                                    t = eO()
                                };
                                addEventListener("click", c, {
                                    capture: !0
                                }), addEventListener("keydown", c, {
                                    capture: !0,
                                    passive: !0
                                })
                            }

                            function p() {
                                var e = r[i9];
                                e && !tE(e).timestamp && (oP && en.log("[Tracing] Finishing current active span with op: ".concat(tE(e).op)), e.setAttribute(tn, "cancelled"), e.end())
                            }
                            r.on("startNavigationSpan", function(e, n) {
                                if (e6() === r) {
                                    if (null == n ? void 0 : n.isRedirect) {
                                        oP && en.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), o(r, i4({
                                            op: "navigation.redirect"
                                        }, e), !1);
                                        return
                                    }
                                    t = void 0, p(), e4().setPropagationContext({
                                        traceId: ey(),
                                        sampleRand: Math.random(),
                                        propagationSpanId: ts() ? void 0 : eE()
                                    });
                                    var a = e3();
                                    a.setPropagationContext({
                                        traceId: ey(),
                                        sampleRand: Math.random(),
                                        propagationSpanId: ts() ? void 0 : eE()
                                    }), a.setSDKProcessingMetadata({
                                        normalizedRequest: void 0
                                    }), o(r, i8(i4({
                                        op: "navigation"
                                    }, e), {
                                        parentSpan: null,
                                        forceTransaction: !0
                                    }))
                                }
                            }), r.on("startPageLoadSpan", function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (e6() === r) {
                                    p();
                                    var n = function(e, t) {
                                            var n = function(e) {
                                                    if (e) {
                                                        var t, n = e.match(t_);
                                                        if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                                                            traceId: n[1],
                                                            parentSampled: t,
                                                            parentSpanId: n[2]
                                                        }
                                                    }
                                                }(e),
                                                r = tb(t);
                                            if (!(null == n ? void 0 : n.traceId)) return {
                                                traceId: ey(),
                                                sampleRand: ep()
                                            };
                                            var o = function(e, t) {
                                                var n = tu(null == t ? void 0 : t.sample_rand);
                                                if (void 0 !== n) return n;
                                                var r = tu(null == t ? void 0 : t.sample_rate);
                                                return r && (null == e ? void 0 : e.parentSampled) !== void 0 ? e.parentSampled ? ep() * r : r + ep() * (1 - r) : ep()
                                            }(n, r);
                                            return r && (r.sample_rand = o.toString()), {
                                                traceId: n.traceId,
                                                parentSpanId: n.parentSpanId,
                                                sampled: n.parentSampled,
                                                dsc: r || {},
                                                sampleRand: o
                                            }
                                        }(t.sentryTrace || i5("sentry-trace"), t.baggage || i5("baggage")),
                                        a = e3();
                                    a.setPropagationContext(n), ts() || (a.getPropagationContext().propagationSpanId = eE()), a.setSDKProcessingMetadata({
                                        normalizedRequest: rJ()
                                    }), o(r, i4({
                                        op: "pageload"
                                    }, e))
                                }
                            }), r.on("endPageloadSpan", function() {
                                F && n && (n.setAttribute(tn, "reportPageLoaded"), n.end())
                            })
                        },
                        afterAllSetup: function(e) {
                            var n, r, o, i, c, u, l = G();
                            if ("off" !== U && (m = (y = {
                                    linkPreviousTrace: U,
                                    consistentTraceSampling: q
                                }).linkPreviousTrace, b = y.consistentTraceSampling, _ = (g = "session-storage" === m) ? function() {
                                    try {
                                        var e, t = null == (e = j.sessionStorage) ? void 0 : e.getItem(iU);
                                        return JSON.parse(t)
                                    } catch (e) {
                                        return
                                    }
                                }() : void 0, e.on("spanStart", function(e) {
                                    if (tR(e) === e) {
                                        var t = e3().getPropagationContext();
                                        _ = function(e, t, n) {
                                            var r = tE(t),
                                                o = {
                                                    spanContext: t.spanContext(),
                                                    startTimestamp: r.start_timestamp,
                                                    sampleRate: function() {
                                                        try {
                                                            var e, t, o;
                                                            return null != (o = Number(null == (e = n.dsc) ? void 0 : e.sample_rate)) ? o : Number(null == (t = r.data) ? void 0 : t[e9])
                                                        } catch (e) {
                                                            return 0
                                                        }
                                                    }(),
                                                    sampleRand: n.sampleRand
                                                };
                                            if (!e) return o;
                                            var a = e.spanContext;
                                            return a.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (oP && en.log("Adding previous_trace `".concat(JSON.stringify(a), "` link to span `").concat(JSON.stringify(iM({
                                                op: r.op
                                            }, t.spanContext())), "`")), t.addLink({
                                                context: a,
                                                attributes: iL({}, "sentry.link.type", "previous_trace")
                                            }), t.setAttribute("sentry.previous_trace", "".concat(a.traceId, "-").concat(a.spanId, "-").concat(+!!iq(a)))), o)
                                        }(_, e, t), g && function(e) {
                                            try {
                                                j.sessionStorage.setItem(iU, JSON.stringify(e))
                                            } catch (e) {
                                                oP && en.warn("Could not store previous trace in sessionStorage", e)
                                            }
                                        }(_)
                                    }
                                }), S = !0, b && e.on("beforeSampling", function(e) {
                                    if (_) {
                                        var t = e3(),
                                            n = t.getPropagationContext();
                                        if (S && n.parentSpanId) {
                                            S = !1;
                                            return
                                        }
                                        t.setPropagationContext(iN(iM({}, n), {
                                            dsc: iN(iM({}, n.dsc), {
                                                sample_rate: String(_.sampleRate),
                                                sampled: String(iq(_.spanContext))
                                            }),
                                            sampleRand: _.sampleRand
                                        })), e.parentSampled = iq(_.spanContext), e.parentSampleRate = _.sampleRate, e.spanAttributes = iN(iM({}, e.spanAttributes), iL({}, e7, _.sampleRate))
                                    }
                                })), j.location) {
                                if (R) {
                                    var f, p, v, y, m, b, g, _, S, x, D = ej();
                                    f = e, p = {
                                        name: j.location.pathname,
                                        startTime: D ? D / 1e3 : void 0,
                                        attributes: (i3(x = {}, e5, "url"), i3(x, tt, "auto.pageload.browser"), x)
                                    }, f.emit("startPageLoadSpan", p, void 0), e3().setTransactionName(p.name), (v = f[i9]) && f.emit("afterStartPageLoadSpan", v)
                                }
                                L && ow(function(n) {
                                    var r, o, a, i, c, s, u, f, p, d, v, y = n.to;
                                    if (void 0 === n.from && (null == l ? void 0 : l.indexOf(y)) !== -1) {
                                        l = void 0;
                                        return
                                    }
                                    l = void 0;
                                    var m = ov(y),
                                        h = e[i9],
                                        b = h && M && (r = h, o = t, a = tE(r), !((i = eS()) - a.start_timestamp > 1.5) && (!o || !(i - o <= 1.5)));
                                    c = e, s = {
                                        name: (null == m ? void 0 : m.pathname) || j.location.pathname,
                                        attributes: (i3(v = {}, e5, "url"), i3(v, tt, "auto.navigation.browser"), v)
                                    }, f = (u = {
                                        url: y,
                                        isRedirect: b
                                    }).url, p = u.isRedirect, c.emit("beforeStartNavigationSpan", s, {
                                        isRedirect: p
                                    }), c.emit("startNavigationSpan", s, {
                                        isRedirect: p
                                    }), (d = e3()).setTransactionName(s.name), f && !p && d.setSDKProcessingMetadata({
                                        normalizedRequest: i8(i4({}, rJ()), {
                                            url: f
                                        })
                                    }), c[i9]
                                })
                            }
                            P && (j.document ? j.document.addEventListener("visibilitychange", function() {
                                    var e = tL();
                                    if (e) {
                                        var t = tR(e);
                                        if (j.document.hidden && t) {
                                            var n = "cancelled",
                                                r = tE(t),
                                                o = r.op,
                                                a = r.status;
                                            oP && en.log("[Tracing] Transaction: ".concat(n, " -> since tab moved to the background, op: ").concat(o)), a || t.setStatus({
                                                code: 2,
                                                message: n
                                            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                                        }
                                    }
                                }) : oP && en.warn("[Tracing] Could not set up background tab detection due to lack of global document")), d && (n = e, r = h, o = O, i = w, c = a, j.document && addEventListener("click", function() {
                                    var e = "ui.action.click",
                                        t = n[i9];
                                    if (t && ["navigation", "pageload"].includes(tE(t).op)) {
                                        oP && en.warn("[Tracing] Did not create ".concat(e, " span because a pageload or navigation span is in progress."));
                                        return
                                    }
                                    if (u && (u.setAttribute(tn, "interactionInterrupted"), u.end(), u = void 0), !c.name) {
                                        oP && en.warn("[Tracing] Did not create ".concat(e, " transaction because _latestRouteName is missing."));
                                        return
                                    }
                                    u = af({
                                        name: c.name,
                                        op: e,
                                        attributes: i3({}, e5, c.source || "url")
                                    }, {
                                        idleTimeout: r,
                                        finalTimeout: o,
                                        childSpanTimeout: i
                                    })
                                }, {
                                    capture: !0
                                })), s && function() {
                                    var e, t = Object.keys(iA);

                                    function n(e) {
                                        var t = e.target;
                                        if (t) {
                                            var n = W(t),
                                                r = Math.round(e.timeStamp);
                                            if (iT.set(r, n), iT.size > 50) {
                                                var o = iT.keys().next().value;
                                                void 0 !== o && iT.delete(o)
                                            }
                                        }
                                    }
                                    "undefined" == typeof window || (0, iP.w)() && (null == (e = j.process) ? void 0 : e.type) !== "renderer" || t.forEach(function(e) {
                                        j.addEventListener(e, n, {
                                            capture: !0,
                                            passive: !0
                                        })
                                    });
                                    var r = function(e) {
                                        var t = e.entries,
                                            n = tL(),
                                            r = n && tR(n);
                                        t.forEach(function(e) {
                                            if ("duration" in e) {
                                                var t = e.interactionId;
                                                if (null != t && !ix.has(t)) {
                                                    var n = e.target ? W(e.target) : function(e) {
                                                        var t = Math.round(e.startTime),
                                                            n = iT.get(t);
                                                        if (!n)
                                                            for (var r = -5; r <= 5; r++) {
                                                                var o = iT.get(t + r);
                                                                if (o) {
                                                                    n = o;
                                                                    break
                                                                }
                                                            }
                                                        return n || "<unknown>"
                                                    }(e);
                                                    if (iE.length > 10) {
                                                        var o = iE.shift();
                                                        ix.delete(o)
                                                    }
                                                    iE.push(t), ix.set(t, {
                                                        span: r,
                                                        elementName: n
                                                    })
                                                }
                                            }
                                        })
                                    };
                                    a1("event", r), a1("first-input", r)
                                }(),
                                function(e, t) {
                                    var n = iZ({}, i1, t),
                                        r = n.traceFetch,
                                        o = n.traceXHR,
                                        a = n.trackFetchStreamPerformance,
                                        i = n.shouldCreateSpanForRequest,
                                        c = n.enableHTTPTimings,
                                        s = n.tracePropagationTargets,
                                        u = n.onRequestSpanStart,
                                        l = n.onRequestSpanEnd,
                                        f = "function" == typeof i ? i : function(e) {
                                            return !0
                                        },
                                        p = function(e) {
                                            return function(e, t) {
                                                var n = G();
                                                if (n) {
                                                    try {
                                                        r = new URL(e, n), o = new URL(n).origin
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                    var r, o, a = r.origin === o;
                                                    return t ? e$(r.toString(), t) || a && e$(r.pathname, t) : a
                                                }
                                                var i = !!e.match(/^\/(?!\/)/);
                                                return t ? e$(e, t) : i
                                            }(e, s)
                                        },
                                        d = {},
                                        v = e.getOptions().propagateTraceparent;
                                    r && (e.addEventProcessor(function(e) {
                                        return "transaction" === e.type && e.spans && e.spans.forEach(function(e) {
                                            if ("http.client" === e.op) {
                                                var t = i0.get(e.span_id);
                                                t && (e.timestamp = t / 1e3, i0.delete(e.span_id))
                                            }
                                        }), e
                                    }), a && (r3("fetch-body-resolved", function(e) {
                                        if (e.response) {
                                            var t = iQ.get(e.response);
                                            t && e.endTimestamp && i0.set(t, e.endTimestamp)
                                        }
                                    }), r4("fetch-body-resolved", function() {
                                        return oc(os)
                                    })), oi(function(e) {
                                        var t = function(e, t, n, r, o) {
                                            if (e.fetchData) {
                                                var a = e.fetchData,
                                                    i = a.method,
                                                    c = a.url,
                                                    s = ts() && t(c);
                                                if (e.endTimestamp && s) {
                                                    var u, l, f, p, d, v = e.fetchData.__span;
                                                    if (!v) return;
                                                    var y = r[v];
                                                    y && (function(e, t) {
                                                        if (t.response) {
                                                            tl(e, t.response.status);
                                                            var n, r, o = null == (r = t.response) || null == (n = r.headers) ? void 0 : n.get("content-length");
                                                            if (o) {
                                                                var a = parseInt(o);
                                                                a > 0 && e.setAttribute("http.response_content_length", a)
                                                            }
                                                        } else t.error && e.setStatus({
                                                            code: 2,
                                                            message: "internal_error"
                                                        });
                                                        e.end()
                                                    }(y, e), u = y, l = e, null == (d = (void 0 === (f = o) ? "undefined" : iW(f)) === "object" && null !== f ? f.onRequestSpanEnd : void 0) || d(u, {
                                                        headers: null == (p = l.response) ? void 0 : p.headers,
                                                        error: l.error
                                                    }), delete r[v]);
                                                    return
                                                }
                                                var m = (void 0 === o ? "undefined" : iW(o)) === "object" ? o : {
                                                        spanOrigin: o
                                                    },
                                                    h = m.spanOrigin,
                                                    b = m.propagateTraceparent,
                                                    g = !!tL(),
                                                    _ = s && g ? nh(function(e, t, n) {
                                                        if (e.startsWith("data:")) {
                                                            var r = om(e);
                                                            return {
                                                                name: "".concat(t, " ").concat(r),
                                                                attributes: iV(e, void 0, t, n)
                                                            }
                                                        }
                                                        var o = ov(e),
                                                            a = o ? function(e) {
                                                                if (od(e)) return e.pathname;
                                                                var t = new URL(e);
                                                                return t.search = "", t.hash = "", ["80", "443"].includes(t.port) && (t.port = ""), t.password && (t.password = "%filtered%"), t.username && (t.username = "%filtered%"), t.toString()
                                                            }(o) : e;
                                                        return {
                                                            name: "".concat(t, " ").concat(a),
                                                            attributes: iV(e, o, t, n)
                                                        }
                                                    }(c, i, void 0 === h ? "auto.http.browser" : h)) : new tV;
                                                if (e.fetchData.__span = _.spanContext().spanId, r[_.spanContext().spanId] = _, n(e.fetchData.url)) {
                                                    var S = e.args[0],
                                                        O = i$({}, e.args[1] || {}),
                                                        w = function(e, t, n, r) {
                                                            var o = iF({
                                                                    span: n,
                                                                    propagateTraceparent: r
                                                                }),
                                                                a = o["sentry-trace"],
                                                                i = o.baggage,
                                                                c = o.traceparent;
                                                            if (a) {
                                                                var s = t.headers || ($(e) ? e.headers : void 0);
                                                                if (!s) return i$({}, o);
                                                                if (d = s, "undefined" != typeof Headers && B(d, Headers)) {
                                                                    var u = new Headers(s);
                                                                    if (u.get("sentry-trace") || u.set("sentry-trace", a), r && c && !u.get("traceparent") && u.set("traceparent", c), i) {
                                                                        var l = u.get("baggage");
                                                                        l ? iG(l) || u.set("baggage", "".concat(l, ",").concat(i)) : u.set("baggage", i)
                                                                    }
                                                                    return u
                                                                }
                                                                if (Array.isArray(s)) {
                                                                    var f = iz(s);
                                                                    s.find(function(e) {
                                                                        return "sentry-trace" === e[0]
                                                                    }) || f.push(["sentry-trace", a]), r && c && !s.find(function(e) {
                                                                        return "traceparent" === e[0]
                                                                    }) && f.push(["traceparent", c]);
                                                                    var p = s.find(function(e) {
                                                                        return "baggage" === e[0] && iG(e[1])
                                                                    });
                                                                    return i && !p && f.push(["baggage", i]), f
                                                                } else {
                                                                    var d, v, y, m = "sentry-trace" in s ? s["sentry-trace"] : void 0,
                                                                        h = "traceparent" in s ? s.traceparent : void 0,
                                                                        b = "baggage" in s ? s.baggage : void 0,
                                                                        g = b ? Array.isArray(b) ? iz(b) : [b] : [],
                                                                        _ = b && (Array.isArray(b) ? b.find(function(e) {
                                                                            return iG(e)
                                                                        }) : iG(b));
                                                                    i && !_ && g.push(i);
                                                                    var S = (v = i$({}, s), y = y = {
                                                                        "sentry-trace": null != m ? m : a,
                                                                        baggage: g.length > 0 ? g.join(",") : void 0
                                                                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
                                                                        var n = Object.keys(e);
                                                                        if (Object.getOwnPropertySymbols) {
                                                                            var r = Object.getOwnPropertySymbols(e);
                                                                            n.push.apply(n, r)
                                                                        }
                                                                        return n
                                                                    })(Object(y)).forEach(function(e) {
                                                                        Object.defineProperty(v, e, Object.getOwnPropertyDescriptor(y, e))
                                                                    }), v);
                                                                    return r && c && !h && (S.traceparent = c), S
                                                                }
                                                            }
                                                        }(S, O, ts() && g ? _ : void 0, void 0 !== b && b);
                                                    w && (e.args[1] = O, O.headers = w)
                                                }
                                                var j = e6();
                                                if (j) {
                                                    var P = {
                                                        input: e.args,
                                                        response: e.response,
                                                        startTimestamp: e.startTimestamp,
                                                        endTimestamp: e.endTimestamp
                                                    };
                                                    j.emit("beforeOutgoingRequestSpan", _, P)
                                                }
                                                return _
                                            }
                                        }(e, f, p, d, {
                                            propagateTraceparent: v,
                                            onRequestSpanEnd: l
                                        });
                                        if (e.response && e.fetchData.__span && iQ.set(e.response, e.fetchData.__span), t) {
                                            var n = iY(e.fetchData.url),
                                                r = n ? oy(n).host : void 0;
                                            t.setAttributes({
                                                "http.url": n ? om(n) : void 0,
                                                "server.address": r
                                            }), c && i2(t), null == u || u(t, {
                                                headers: e.headers
                                            })
                                        }
                                    })), o && oS(function(e) {
                                        var t, n = function(e, t, n, r, o, a) {
                                            var i, c = e.xhr,
                                                s = null == c ? void 0 : c[o_];
                                            if (c && !c.__sentry_own_request__ && s) {
                                                var u, l, f, p, d, v, y = s.url,
                                                    m = s.method,
                                                    h = ts() && t(y);
                                                if (e.endTimestamp && h) {
                                                    var b = c.__sentry_xhr_span_id__;
                                                    if (!b) return;
                                                    var g = r[b];
                                                    g && void 0 !== s.status_code && (tl(g, s.status_code), g.end(), null == a || a(g, {
                                                        headers: iK(function(e) {
                                                            var t;
                                                            try {
                                                                t = e.getAllResponseHeaders()
                                                            } catch (t) {
                                                                return at && en.error(t, "Failed to get xhr response headers", e), {}
                                                            }
                                                            return t ? t.split("\r\n").reduce(function(e, t) {
                                                                var n, r = (n = t.split(": "), function(e) {
                                                                        if (Array.isArray(e)) return e
                                                                    }(n) || function(e, t) {
                                                                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                                        if (null != o) {
                                                                            var a = [],
                                                                                i = !0,
                                                                                c = !1;
                                                                            try {
                                                                                for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), a.length !== t); i = !0);
                                                                            } catch (e) {
                                                                                c = !0, r = e
                                                                            } finally {
                                                                                try {
                                                                                    i || null == o.return || o.return()
                                                                                } finally {
                                                                                    if (c) throw r
                                                                                }
                                                                            }
                                                                            return a
                                                                        }
                                                                    }(n, 2) || function(e, t) {
                                                                        if (e) {
                                                                            if ("string" == typeof e) return iJ(e, 2);
                                                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iJ(e, t)
                                                                        }
                                                                    }(n, 2) || function() {
                                                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                                    }()),
                                                                    o = r[0],
                                                                    a = r[1];
                                                                return a && (e[o.toLowerCase()] = a), e
                                                            }, {}) : {}
                                                        }(c)),
                                                        error: e.error
                                                    }), delete r[b]);
                                                    return
                                                }
                                                var _ = iY(y),
                                                    S = _ ? oy(_) : oy(y),
                                                    O = om(y.split(/[?#]/, 1)[0]),
                                                    w = !!tL(),
                                                    j = h && w ? nh({
                                                        name: "".concat(m, " ").concat(O),
                                                        attributes: iZ((iX(i = {
                                                            url: om(y),
                                                            type: "xhr",
                                                            "http.method": m,
                                                            "http.url": _ ? om(_) : void 0,
                                                            "server.address": null == S ? void 0 : S.host
                                                        }, tt, "auto.http.browser"), iX(i, te, "http.client"), i), (null == S ? void 0 : S.search) && {
                                                            "http.query": null == S ? void 0 : S.search
                                                        }, (null == S ? void 0 : S.hash) && {
                                                            "http.fragment": null == S ? void 0 : S.hash
                                                        })
                                                    }) : new tV;
                                                c.__sentry_xhr_span_id__ = j.spanContext().spanId, r[c.__sentry_xhr_span_id__] = j, n(y) && (u = c, l = ts() && w ? j : void 0, p = (f = iF({
                                                    span: l,
                                                    propagateTraceparent: o
                                                }))["sentry-trace"], d = f.baggage, v = f.traceparent, p && function(e, t, n, r) {
                                                    var o, a = null == (o = e.__sentry_xhr_v3__) ? void 0 : o.request_headers;
                                                    if ((null == a || !a["sentry-trace"]) && e.setRequestHeader) try {
                                                        if (e.setRequestHeader("sentry-trace", t), !r || (null == a ? void 0 : a.traceparent) || e.setRequestHeader("traceparent", r), n) {
                                                            var i = null == a ? void 0 : a.baggage;
                                                            i && i.split(",").some(function(e) {
                                                                return e.trim().startsWith("sentry-")
                                                            }) || e.setRequestHeader("baggage", n)
                                                        }
                                                    } catch (e) {}
                                                }(u, p, d, v));
                                                var P = e6();
                                                return P && P.emit("beforeOutgoingRequestSpan", j, e), j
                                            }
                                        }(e, f, p, d, v, l);
                                        n && (c && i2(n), null == u || u(n, {
                                            headers: iK(null == (t = e.xhr.__sentry_xhr_v3__) ? void 0 : t.request_headers)
                                        }))
                                    })
                                }(e, {
                                    traceFetch: k,
                                    traceXHR: E,
                                    trackFetchStreamPerformance: T,
                                    tracePropagationTargets: e.getOptions().tracePropagationTargets,
                                    shouldCreateSpanForRequest: A,
                                    enableHTTPTimings: I,
                                    onRequestSpanStart: H,
                                    onRequestSpanEnd: z
                                })
                        }
                    }
                }({
                    detectRedirects: !0
                })],
                environment: null != cR ? cR : "staging",
                tracesSampleRate: cU,
                tracesSampler: (t = cO(cU), function(e) {
                    if (void 0 !== e.parentSampled) return +!!e.parentSampled;
                    var n, r = (e.name || ("undefined" != typeof window ? window.location.pathname : "") || "").toLowerCase().replace(cv, "/");
                    return cy.test(r) && (n = cO(.1 * t)), cm.test(r) && (n = cO(.2 * t)), ch.test(r) && (n = cO(.2 * t)), cb.test(r) && (n = cO(.2 * t)), cg.test(r) && (n = .005), c_.test(r) && (n = .005), cS.test(r) && (n = 1), null != n ? n : t
                }),
                sampleRate: cN,
                replaysOnErrorSampleRate: cN,
                beforeSendTransaction: function(e) {
                    if (! function(e, t) {
                            try {
                                var n = function(e) {
                                    var t = null != (O = null == (y = e.contexts) ? void 0 : y.trace) ? O : {},
                                        n = null == (m = e.contexts) ? void 0 : m.otel,
                                        r = t.trace_id,
                                        o = t.span_id,
                                        a = t.parent_span_id;
                                    if (!r) return null;
                                    var i = (null == n ? void 0 : n.resource) ? cx([n.resource]) : cx([{
                                            "service.name": "web"
                                        }, e.environment ? {
                                            "deployment.environment": e.environment
                                        } : void 0, {
                                            "telemetry.sdk.name": "@sentry/browser"
                                        }, e.release ? {
                                            "telemetry.sdk.version": e.release
                                        } : void 0]),
                                        c = [],
                                        s = null == (b = e.contexts) || null == (h = b.trace) ? void 0 : h.op,
                                        u = null == (_ = e.contexts) || null == (g = _.trace) ? void 0 : g.status,
                                        l = (null == n ? void 0 : n.attributes) ? cx([n.attributes]) : cx([e.tags, {
                                            "sentry.transaction": e.transaction
                                        }, {
                                            "sentry.op": s
                                        }, s ? {
                                            op: s
                                        } : void 0, e.platform ? {
                                            platform: e.platform
                                        } : void 0, e.release ? {
                                            release: e.release
                                        } : void 0, "boolean" == typeof t.sampled ? {
                                            sampled: t.sampled
                                        } : void 0]);
                                    c.push({
                                        traceId: r,
                                        spanId: null != o ? o : "0000000000000000",
                                        parentSpanId: a,
                                        name: null != (w = e.transaction) ? w : "unknown",
                                        kind: cA(s),
                                        startTimeUnixNano: cE(e.start_timestamp),
                                        endTimeUnixNano: cE(e.timestamp),
                                        attributes: l,
                                        status: cT(u)
                                    });
                                    var f = Array.isArray(e.spans) ? e.spans : [],
                                        p = !0,
                                        d = !1,
                                        v = void 0;
                                    try {
                                        for (var y, m, h, b, g, _, S, O, w, j, P = f[Symbol.iterator](); !(p = (j = P.next()).done); p = !0) {
                                            var k, E, x, T, A = j.value,
                                                I = null != (E = null != (k = A.description) ? k : A.op) ? E : "unknown",
                                                D = A.op,
                                                C = A.status,
                                                R = cx([A.data, A.tags, D ? {
                                                    op: D
                                                } : void 0, {
                                                    "sentry.op": D
                                                }]),
                                                L = {
                                                    traceId: r,
                                                    spanId: null != (x = A.span_id) ? x : "0000000000000000",
                                                    parentSpanId: null != (T = A.parent_span_id) ? T : o,
                                                    name: I,
                                                    kind: cA(D),
                                                    startTimeUnixNano: cE(A.start_timestamp),
                                                    endTimeUnixNano: cE(A.timestamp),
                                                    attributes: R,
                                                    status: cT(C)
                                                };
                                            c.push(L)
                                        }
                                    } catch (e) {
                                        d = !0, v = e
                                    } finally {
                                        try {
                                            p || null == P.return || P.return()
                                        } finally {
                                            if (d) throw v
                                        }
                                    }
                                    return {
                                        resourceSpans: [{
                                            resource: {
                                                attributes: i
                                            },
                                            scopeSpans: [{
                                                scope: {
                                                    name: "@sentry/browser",
                                                    version: null == (S = e.sdk) ? void 0 : S.version
                                                },
                                                spans: c
                                            }]
                                        }]
                                    }
                                }(t);
                                if (null == n) return;
                                fetch(e, {
                                    method: "POST",
                                    body: JSON.stringify(n),
                                    headers: {
                                        "content-type": "application/json"
                                    }
                                }).then(function(e) {
                                    e.ok || console.error("[OTEL DEBUG] Failed to send:", e.status, e.statusText)
                                }, function(e) {
                                    console.error("[OTEL DEBUG] Fetch error:", e)
                                }).catch(function(e) {
                                    console.error("[OTEL DEBUG] Catch error:", e)
                                })
                            } catch (e) {
                                console.error("[OTEL DEBUG] sendToOtel error:", e)
                            }
                        }(cM, e), !e.spans) return e;
                    var t, n, r = e.spans.filter(function(e) {
                        var t;
                        if ("http.client" === e.op || (null == (t = e.op) ? void 0 : t.startsWith("resource."))) {
                            var n, r = null != (n = e.description) ? n : e.data.url;
                            if ("string" == typeof r) return !cw.some(function(e) {
                                return r.includes(e)
                            })
                        }
                        return !0
                    });
                    return t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, e), n = n = {
                        spans: r
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t
                },
                transport: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao;
                    return e = function(e) {
                            function t() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                x && en.log.apply(en, ["[Offline]:"].concat(function(e) {
                                    if (Array.isArray(e)) return i7(e)
                                }(t) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return i7(e, void 0);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i7(e, t)
                                    }
                                }(t) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()))
                            }
                            return function(n) {
                                var r, o = function(e) {
                                        r && clearTimeout(r), "number" != typeof(r = setTimeout(function() {
                                            return ct(function() {
                                                var e;
                                                return cn(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return r = void 0, [4, s.shift()];
                                                        case 1:
                                                            return (e = n.sent()) && (t("Attempting to send previously queued event"), e[0].sent_at = new Date().toISOString(), i(e, !0).catch(function(e) {
                                                                t("Failed to retry sending", e)
                                                            })), [2]
                                                    }
                                                })
                                            })()
                                        }, e)) && r.unref && r.unref()
                                    },
                                    a = function() {
                                        r || (o(u), u = Math.min(2 * u, 36e5))
                                    },
                                    i = function(e) {
                                        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                        return ct(function() {
                                            var i, l, f, p, d, v;
                                            return cn(this, function(y) {
                                                switch (y.label) {
                                                    case 0:
                                                        if (!(!r && t2(e, ["replay_event", "replay_recording"]))) return [3, 2];
                                                        return [4, s.push(e)];
                                                    case 1:
                                                        return y.sent(), o(100), [2, {}];
                                                    case 2:
                                                        if (y.trys.push([2, 6, , 14]), !(i = n.shouldSend)) return [3, 4];
                                                        return [4, n.shouldSend(e)];
                                                    case 3:
                                                        i = !1 === y.sent(), y.label = 4;
                                                    case 4:
                                                        if (i) throw Error("Envelope not sent because `shouldSend` callback returned false");
                                                        return [4, c.send(e)];
                                                    case 5:
                                                        if (l = y.sent(), f = 100, l) {
                                                            if (null == (p = l.headers) ? void 0 : p["retry-after"]) f = ri(l.headers["retry-after"]);
                                                            else if (null == (d = l.headers) ? void 0 : d["x-sentry-rate-limits"]) f = 6e4;
                                                            else if ((l.statusCode || 0) >= 400) return [2, l]
                                                        }
                                                        return o(f), u = 5e3, [2, l];
                                                    case 6:
                                                        var m, h;
                                                        return [4, (m = v = y.sent(), h = u, !t2(e, ["client_report"]) && (!n.shouldStore || n.shouldStore(e, m, h)))];
                                                    case 7:
                                                        if (!y.sent()) return [3, 12];
                                                        if (!r) return [3, 9];
                                                        return [4, s.unshift(e)];
                                                    case 8:
                                                        return y.sent(), [3, 11];
                                                    case 9:
                                                        return [4, s.push(e)];
                                                    case 10:
                                                        y.sent(), y.label = 11;
                                                    case 11:
                                                        return a(), t("Error sending. Event queued.", v), [2, {}];
                                                    case 12:
                                                        throw v;
                                                    case 13:
                                                        return [3, 14];
                                                    case 14:
                                                        return [2]
                                                }
                                            })
                                        })()
                                    },
                                    c = e(n);
                                if (!n.createStore) throw Error("No `createStore` function was provided");
                                var s = n.createStore(n),
                                    u = 5e3;
                                return n.flushAtStartup && a(), {
                                    send: i,
                                    flush: function(e) {
                                        return void 0 === e && (u = 5e3, o(100)), c.flush(e)
                                    }
                                }
                            }
                        }(t),
                        function(t) {
                            var n, r, o = e((n = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({}, t), r = r = {
                                createStore: cl
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(r)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                            }), n));
                            return j.addEventListener("online", function(e) {
                                return ca(function() {
                                    return cc(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, o.flush()];
                                            case 1:
                                                return e.sent(), [2]
                                        }
                                    })
                                })()
                            }), o
                        }
                }(ao)
            }), document.addEventListener("DOMContentLoaded", function() {
                e = {
                    id: null != (n = null == (t = cd.authenticatedUser.id) ? void 0 : t.toString()) ? n : "1",
                    username: null != (r = cd.authenticatedUser.name) ? r : "unknown"
                }, e4().setUser(e);
                var e, t, n, r, o = document.querySelector('meta[name="page-meta"]');
                (null == o ? void 0 : o.dataset.internalPageName) && nU("internal-page-name", o.dataset.internalPageName);
                var a = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        var t, n;
                        if ("attributes" === e.type && "data-internal-page-name" === e.attributeName && (t = e.target, null != (n = HTMLMetaElement) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n)) {
                            var r = e.target.dataset.internalPageName;
                            r && nU("internal-page-name", r)
                        }
                    })
                });
                o && a.observe(o, {
                    attributes: !0,
                    attributeFilter: ["data-internal-page-name"]
                })
            })
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Sentry");
//# debugId=d7f10282-9499-43a0-83e7-0613a9a23d54
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/sentry-857b80bd10cd0fc6.js.map