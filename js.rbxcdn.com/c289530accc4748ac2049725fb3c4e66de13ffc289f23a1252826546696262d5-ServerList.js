! function() {
    var e = {
            942: function(e) {
                function r(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }!
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                function() {
                    "use strict";
                    var t = {}.hasOwnProperty;

                    function n() {
                        for (var e = "", a = 0; a < arguments.length; a++) {
                            var o = arguments[a];
                            o && (e = i(e, function(e) {
                                if ("string" == typeof e || "number" == typeof e) return e;
                                if ((void 0 === e ? "undefined" : r(e)) !== "object") return "";
                                if (Array.isArray(e)) return n.apply(null, e);
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                                var a = "";
                                for (var o in e) t.call(e, o) && e[o] && (a = i(a, o));
                                return a
                            }(o)))
                        }
                        return e
                    }

                    function i(e, r) {
                        return r ? e ? e + " " + r : e + r : e
                    }
                    e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" === r(define.amd) && define.amd ? define("classnames", [], function() {
                        return n
                    }) : window.classNames = n
                }()
            },
            821: function() {
                ! function() {
                    "use strict";
                    var e;
                    if (("undefined" == typeof window ? "undefined" : (e = window) && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object") {
                        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
                            "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                                get: function() {
                                    return this.intersectionRatio > 0
                                }
                            });
                            return
                        }
                        var r = function(e) {
                                for (var r = e, t = a(r); t;) t = a(r = t.ownerDocument);
                                return r
                            }(window.document),
                            t = [],
                            n = null,
                            i = null;
                        s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function() {
                            return n || (n = function(e, r) {
                                i = e && r ? m(e, r) : d(), t.forEach(function(e) {
                                    e._checkForIntersections()
                                })
                            }), n
                        }, s._resetCrossOriginUpdater = function() {
                            n = null, i = null
                        }, s.prototype.observe = function(e) {
                            if (!this._observationTargets.some(function(r) {
                                    return r.element == e
                                })) {
                                if (!(e && 1 == e.nodeType)) throw Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: e,
                                    entry: null
                                }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections()
                            }
                        }, s.prototype.unobserve = function(e) {
                            this._observationTargets = this._observationTargets.filter(function(r) {
                                return r.element != e
                            }), this._unmonitorIntersections(e.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                        }, s.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                        }, s.prototype.takeRecords = function() {
                            var e = this._queuedEntries.slice();
                            return this._queuedEntries = [], e
                        }, s.prototype._initThresholds = function(e) {
                            var r = e || [0];
                            return Array.isArray(r) || (r = [r]), r.sort().filter(function(e, r, t) {
                                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== t[r - 1]
                            })
                        }, s.prototype._parseRootMargin = function(e) {
                            var r = (e || "0px").split(/\s+/).map(function(e) {
                                var r = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                                if (!r) throw Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(r[1]),
                                    unit: r[2]
                                }
                            });
                            return r[1] = r[1] || r[0], r[2] = r[2] || r[0], r[3] = r[3] || r[1], r
                        }, s.prototype._monitorIntersections = function(e) {
                            var t = e.defaultView;
                            if (t && -1 == this._monitoringDocuments.indexOf(e)) {
                                var n = this._checkForIntersections,
                                    i = null,
                                    o = null;
                                if (this.POLL_INTERVAL ? i = t.setInterval(n, this.POLL_INTERVAL) : (c(t, "resize", n, !0), c(e, "scroll", n, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (o = new t.MutationObserver(n)).observe(e, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push(function() {
                                        var r = e.defaultView;
                                        r && (i && r.clearInterval(i), l(r, "resize", n, !0)), l(e, "scroll", n, !0), o && o.disconnect()
                                    }), e != (this.root && (this.root.ownerDocument || this.root) || r)) {
                                    var s = a(e);
                                    s && this._monitorIntersections(s.ownerDocument)
                                }
                            }
                        }, s.prototype._unmonitorIntersections = function(e) {
                            var t = this._monitoringDocuments.indexOf(e);
                            if (-1 != t) {
                                var n = this.root && (this.root.ownerDocument || this.root) || r;
                                if (!this._observationTargets.some(function(r) {
                                        var t = r.element.ownerDocument;
                                        if (t == e) return !0;
                                        for (; t && t != n;) {
                                            var i = a(t);
                                            if ((t = i && i.ownerDocument) == e) return !0
                                        }
                                        return !1
                                    })) {
                                    var i = this._monitoringUnsubscribes[t];
                                    if (this._monitoringDocuments.splice(t, 1), this._monitoringUnsubscribes.splice(t, 1), i(), e != n) {
                                        var o = a(e);
                                        o && this._unmonitorIntersections(o.ownerDocument)
                                    }
                                }
                            }
                        }, s.prototype._unmonitorAllIntersections = function() {
                            var e = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var r = 0; r < e.length; r++) e[r]()
                        }, s.prototype._checkForIntersections = function() {
                            if (this.root || !n || i) {
                                var e = this._rootIsInDom(),
                                    r = e ? this._getRootRect() : d();
                                this._observationTargets.forEach(function(t) {
                                    var i = t.element,
                                        a = u(i),
                                        s = this._rootContainsTarget(i),
                                        c = t.entry,
                                        l = e && s && this._computeTargetAndRootIntersection(i, a, r),
                                        v = null;
                                    this._rootContainsTarget(i) ? (!n || this.root) && (v = r) : v = d();
                                    var m = t.entry = new o({
                                        time: window.performance && performance.now && performance.now(),
                                        target: i,
                                        boundingClientRect: a,
                                        rootBounds: v,
                                        intersectionRect: l
                                    });
                                    c ? e && s ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
                                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, s.prototype._computeTargetAndRootIntersection = function(e, t, a) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var o = t, s = p(e), c = !1; !c && s;) {
                                    var l = null,
                                        d = 1 == s.nodeType ? window.getComputedStyle(s) : {};
                                    if ("none" == d.display) return null;
                                    if (s == this.root || 9 == s.nodeType)
                                        if (c = !0, s == this.root || s == r) n && !this.root ? i && (0 != i.width || 0 != i.height) ? l = i : (s = null, l = null, o = null) : l = a;
                                        else {
                                            var v = p(s),
                                                f = v && u(v),
                                                h = v && this._computeTargetAndRootIntersection(v, f, a);
                                            f && h ? (s = v, l = m(f, h)) : (s = null, o = null)
                                        }
                                    else {
                                        var g = s.ownerDocument;
                                        s != g.body && s != g.documentElement && "visible" != d.overflow && (l = u(s))
                                    }
                                    if (l && (o = function(e, r) {
                                            var t = Math.max(e.top, r.top),
                                                n = Math.min(e.bottom, r.bottom),
                                                i = Math.max(e.left, r.left),
                                                a = Math.min(e.right, r.right),
                                                o = a - i,
                                                s = n - t;
                                            return o >= 0 && s >= 0 && {
                                                top: t,
                                                bottom: n,
                                                left: i,
                                                right: a,
                                                width: o,
                                                height: s
                                            } || null
                                        }(l, o)), !o) break;
                                    s = s && p(s)
                                }
                                return o
                            }
                        }, s.prototype._getRootRect = function() {
                            var e;
                            if (this.root && !h(this.root)) e = u(this.root);
                            else {
                                var t = h(this.root) ? this.root : r,
                                    n = t.documentElement,
                                    i = t.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: n.clientWidth || i.clientWidth,
                                    width: n.clientWidth || i.clientWidth,
                                    bottom: n.clientHeight || i.clientHeight,
                                    height: n.clientHeight || i.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, s.prototype._expandRectByRootMargin = function(e) {
                            var r = this._rootMarginValues.map(function(r, t) {
                                    return "px" == r.unit ? r.value : r.value * (t % 2 ? e.width : e.height) / 100
                                }),
                                t = {
                                    top: e.top - r[0],
                                    right: e.right + r[1],
                                    bottom: e.bottom + r[2],
                                    left: e.left - r[3]
                                };
                            return t.width = t.right - t.left, t.height = t.bottom - t.top, t
                        }, s.prototype._hasCrossedThreshold = function(e, r) {
                            var t = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                n = r.isIntersecting ? r.intersectionRatio || 0 : -1;
                            if (t !== n)
                                for (var i = 0; i < this.thresholds.length; i++) {
                                    var a = this.thresholds[i];
                                    if (a == t || a == n || a < t != a < n) return !0
                                }
                        }, s.prototype._rootIsInDom = function() {
                            return !this.root || f(r, this.root)
                        }, s.prototype._rootContainsTarget = function(e) {
                            var t = this.root && (this.root.ownerDocument || this.root) || r;
                            return f(t, e) && (!this.root || t == e.ownerDocument)
                        }, s.prototype._registerInstance = function() {
                            0 > t.indexOf(this) && t.push(this)
                        }, s.prototype._unregisterInstance = function() {
                            var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                        }, window.IntersectionObserver = s, window.IntersectionObserverEntry = o
                    }

                    function a(e) {
                        try {
                            return e.defaultView && e.defaultView.frameElement || null
                        } catch (e) {
                            return null
                        }
                    }

                    function o(e) {
                        this.time = e.time, this.target = e.target, this.rootBounds = v(e.rootBounds), this.boundingClientRect = v(e.boundingClientRect), this.intersectionRect = v(e.intersectionRect || d()), this.isIntersecting = !!e.intersectionRect;
                        var r = this.boundingClientRect,
                            t = r.width * r.height,
                            n = this.intersectionRect,
                            i = n.width * n.height;
                        t ? this.intersectionRatio = Number((i / t).toFixed(4)) : this.intersectionRatio = +!!this.isIntersecting
                    }

                    function s(e, r) {
                        var t, n, i, a = r || {};
                        if ("function" != typeof e) throw Error("callback must be a function");
                        if (a.root && 1 != a.root.nodeType && 9 != a.root.nodeType) throw Error("root must be a Document or Element");
                        this._checkForIntersections = (t = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function() {
                            i || (i = setTimeout(function() {
                                t(), i = null
                            }, n))
                        }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(a.rootMargin), this.thresholds = this._initThresholds(a.threshold), this.root = a.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                            return e.value + e.unit
                        }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                    }

                    function c(e, r, t, n) {
                        "function" == typeof e.addEventListener ? e.addEventListener(r, t, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + r, t)
                    }

                    function l(e, r, t, n) {
                        "function" == typeof e.removeEventListener ? e.removeEventListener(r, t, n || !1) : "function" == typeof e.detachEvent && e.detachEvent("on" + r, t)
                    }

                    function u(e) {
                        var r;
                        try {
                            r = e.getBoundingClientRect()
                        } catch (e) {}
                        return r ? (r.width && r.height || (r = {
                            top: r.top,
                            right: r.right,
                            bottom: r.bottom,
                            left: r.left,
                            width: r.right - r.left,
                            height: r.bottom - r.top
                        }), r) : d()
                    }

                    function d() {
                        return {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        }
                    }

                    function v(e) {
                        return !e || "x" in e ? e : {
                            top: e.top,
                            y: e.top,
                            bottom: e.bottom,
                            left: e.left,
                            x: e.left,
                            right: e.right,
                            width: e.width,
                            height: e.height
                        }
                    }

                    function m(e, r) {
                        var t = r.top - e.top,
                            n = r.left - e.left;
                        return {
                            top: t,
                            left: n,
                            height: r.height,
                            width: r.width,
                            bottom: t + r.height,
                            right: n + r.width
                        }
                    }

                    function f(e, r) {
                        for (var t = r; t;) {
                            if (t == e) return !0;
                            t = p(t)
                        }
                        return !1
                    }

                    function p(e) {
                        var t = e.parentNode;
                        return 9 == e.nodeType && e != r ? a(e) : (t && t.assignedSlot && (t = t.assignedSlot.parentNode), t && 11 == t.nodeType && t.host) ? t.host : t
                    }

                    function h(e) {
                        return e && 9 === e.nodeType
                    }
                }()
            },
            792: function(e, r, t) {
                function n(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }
                var i = 0 / 0,
                    a = /^\s+|\s+$/g,
                    o = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    l = parseInt,
                    u = (void 0 === t.g ? "undefined" : n(t.g)) == "object" && t.g && t.g.Object === Object && t.g,
                    d = ("undefined" == typeof self ? "undefined" : n(self)) == "object" && self && self.Object === Object && self,
                    v = u || d || Function("return this")(),
                    m = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    h = function() {
                        return v.Date.now()
                    };

                function g(e) {
                    var r = void 0 === e ? "undefined" : n(e);
                    return !!e && ("object" == r || "function" == r)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if ((void 0 === (r = e) ? "undefined" : n(r)) == "symbol" || r && (void 0 === r ? "undefined" : n(r)) == "object" && "[object Symbol]" == m.call(r)) return i;
                    if (g(e)) {
                        var r, t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = g(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(a, "");
                    var u = s.test(e);
                    return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? i : +e
                }
                e.exports = function(e, r, t) {
                    var n, i, a, o, s, c, l = 0,
                        u = !1,
                        d = !1,
                        v = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function m(r) {
                        var t = n,
                            a = i;
                        return n = i = void 0, l = r, o = e.apply(a, t)
                    }

                    function y(e) {
                        var t = e - c,
                            n = e - l;
                        return void 0 === c || t >= r || t < 0 || d && n >= a
                    }

                    function S() {
                        var e, t, n, i = h();
                        if (y(i)) return w(i);
                        s = setTimeout(S, (e = i - c, t = i - l, n = r - e, d ? p(n, a - t) : n))
                    }

                    function w(e) {
                        return (s = void 0, v && n) ? m(e) : (n = i = void 0, o)
                    }

                    function x() {
                        var e, t = h(),
                            a = y(t);
                        if (n = arguments, i = this, c = t, a) {
                            if (void 0 === s) return l = e = c, s = setTimeout(S, r), u ? m(e) : o;
                            if (d) return s = setTimeout(S, r), m(c)
                        }
                        return void 0 === s && (s = setTimeout(S, r)), o
                    }
                    return r = b(r) || 0, g(t) && (u = !!t.leading, a = (d = "maxWait" in t) ? f(b(t.maxWait) || 0, r) : a, v = "trailing" in t ? !!t.trailing : v), x.cancel = function() {
                        void 0 !== s && clearTimeout(s), l = 0, n = c = i = s = void 0
                    }, x.flush = function() {
                        return void 0 === s ? o : w(h())
                    }, x
                }
            },
            228: function(e, r, t) {
                "use strict";
                e.exports = {}
            },
            412: function(e, r, t) {
                "use strict";
                e.exports = {}
            },
            945: function(e, r, t) {
                "use strict";
                e.exports = {}
            }
        },
        r = {};

    function t(n) {
        var i = r[n];
        if (void 0 !== i) return i.exports;
        var a = r[n] = {
            exports: {}
        };
        return e[n](a, a.exports, t), a.exports
    }
    t.m = e, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, {
            a: r
        }), r
    }, t.d = function(e, r) {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.k = function(e) {
        return "" + e + ".css"
    }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.rv = function() {
        return "1.5.7"
    }, t.g.importScripts && (n = t.g.location + "");
    var n, i = t.g.document;
    if (!n && i && (i.currentScript && "SCRIPT" === i.currentScript.tagName.toUpperCase() && (n = i.currentScript.src), !n)) {
        var a = i.getElementsByTagName("script");
        if (a.length)
            for (var o = a.length - 1; o > -1 && (!n || !/^http(s?):/.test(n));) n = a[o--].src
    }
    if (!n) throw Error("Automatic publicPath is not supported in this browser");
    t.p = n.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.ruid = "bundler=rspack@1.5.7",
        function() {
            "use strict";
            var e, r, n, i, a, o, s, c, l, u, d, v, m, f, p, h, g, b, y, S, w, x, I, P, T, j, R, C, N, E, A, M = window.ReactJSX,
                L = window.TanstackQuery,
                O = window.Roblox["core-scripts"].util.ready,
                D = t.n(O),
                k = window.Roblox["core-scripts"].react,
                F = window.React,
                q = t.n(F),
                U = {
                    about: "tab-about",
                    store: "tab-store",
                    servers: "tab-game-instances"
                },
                _ = {
                    "#!/about": U.about,
                    "#!/store": U.store,
                    "#!/game-instances": U.servers
                };

            function G(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var B = function() {
                    var e = document.getElementById("horizontal-tabs");
                    if (e) {
                        var r = Object.values(U);
                        try {
                            r.forEach(function(r) {
                                if (!e.querySelector("#".concat(r))) throw Error("Unable to find horizontal tab with id ".concat(r))
                            })
                        } catch (e) {
                            return console.log(e.message), !1
                        }
                        return !0
                    }
                    return !1
                },
                V = function() {
                    if (!B()) return null;
                    var e = _[window.location.hash];
                    return e || U.about
                },
                z = function() {
                    var e, r = (e = (0, F.useState)(V()), function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, r) {
                            var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != i) {
                                var a = [],
                                    o = !0,
                                    s = !1;
                                try {
                                    for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), a.length !== r); o = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        o || null == i.return || i.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return a
                            }
                        }(e, 2) || function(e, r) {
                            if (e) {
                                if ("string" == typeof e) return G(e, 2);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return G(e, r)
                            }
                        }(e, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        t = r[0],
                        n = r[1],
                        i = function() {
                            n(V())
                        };
                    return (0, F.useEffect)(function() {
                        return window.addEventListener("hashchange", i),
                            function() {
                                window.removeEventListener("hashchange", i)
                            }
                    }, []), t
                },
                H = window.ReactStyleGuide;

            function W(e, r) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > r.indexOf(n) && (t[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > r.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]])
                }
                return t
            }
            var J = function() {
                    for (var e, r, t = 0, n = "", i = arguments.length; t < i; t++)(e = arguments[t]) && (r = function e(r) {
                        var t, n, i = "";
                        if ("string" == typeof r || "number" == typeof r) i += r;
                        else if ("object" == (void 0 === r ? "undefined" : r && "undefined" != typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r))
                            if (Array.isArray(r)) {
                                var a = r.length;
                                for (t = 0; t < a; t++) r[t] && (n = e(r[t])) && (i && (i += " "), i += n)
                            } else
                                for (n in r) r[n] && (i && (i += " "), i += n);
                        return i
                    }(e)) && (n && (n += " "), n += r);
                    return n
                },
                Z = function() {
                    return q().createElement("div", {
                        role: "presentation",
                        className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
                    })
                };
            ! function(e, r) {
                void 0 === r && (r = {});
                var t = r.insertAt;
                if (e && "undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === t && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}");
            var Q = function(e) {
                    var r = e.width,
                        t = e.height;
                    return q().createElement("svg", {
                        className: "foundation-web-loading-spinner",
                        width: r,
                        height: t,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, q().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentColor",
                        d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
                    }))
                },
                $ = {
                    XSmall: "size-[var(--icon-size-xsmall)]",
                    Small: "size-[var(--icon-size-small)]",
                    Medium: "size-[var(--icon-size-medium)]",
                    Large: "size-[var(--icon-size-large)]",
                    XLarge: "size-[var(--icon-size-xlarge)]"
                },
                Y = q().forwardRef(function(e, r) {
                    var t = e.name,
                        n = e.size,
                        i = e.className,
                        a = (e.children, W(e, ["name", "size", "className", "children"]));
                    return q().createElement("span", Object.assign({
                        ref: r,
                        role: "presentation",
                        className: J("grow-0 shrink-0 basis-auto icon", t, $[void 0 === n ? "Medium" : n], i)
                    }, a))
                });
            Y.displayName = "Icon";
            var X = {
                    Large: 24,
                    Medium: 20,
                    Small: 16,
                    XSmall: 12
                },
                K = {
                    Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-medium"],
                    Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
                    Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
                    XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
                },
                ee = {
                    Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-alert", "content-action-alert"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                er = {
                    Emphasis: ["bg-action-standard", "content-action-standard"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-standard", "content-action-standard"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-standard", "content-action-standard"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                et = (0, F.forwardRef)(function(e, r) {
                    var t = e.children,
                        n = e.className,
                        i = e.style,
                        a = e.isDisabled,
                        o = void 0 !== a && a,
                        s = e.isLoading,
                        c = void 0 !== s && s,
                        l = e.icon,
                        u = e.size,
                        d = void 0 === u ? "Large" : u,
                        v = e.variant,
                        m = void 0 === v ? "Emphasis" : v,
                        f = W(e, ["children", "className", "style", "isDisabled", "isLoading", "icon", "size", "variant"]),
                        p = J("foundation-web-button", o ? "opacity-[0.5]" : ["relative clip group/interactable focus-visible:outline-focus disabled:outline-none", "cursor-pointer"], "relative flex items-center justify-center stroke-none padding-y-none select-none", K[d], o ? er[m] : ee[m], n),
                        h = q().createElement(q().Fragment, null, q().createElement(Z, null), c && q().createElement("div", {
                            "aria-hidden": "true",
                            className: "absolute flex"
                        }, q().createElement(Q, {
                            width: X[d],
                            height: X[d]
                        })), q().createElement("span", {
                            className: J("flex items-center min-width-0", "Large" === d || "Medium" === d ? "gap-small" : "gap-xsmall", c && "invisible")
                        }, l && q().createElement(Y, {
                            name: l,
                            size: d
                        }), q().createElement("span", {
                            className: "padding-y-xsmall text-truncate-end text-no-wrap"
                        }, t))),
                        g = Object.assign({
                            textDecoration: "none"
                        }, i);
                    if ("a" === f.as) {
                        f.as;
                        var b = f.href,
                            y = W(f, ["as", "href"]);
                        return q().createElement("a", Object.assign({
                            ref: r
                        }, y, {
                            "aria-disabled": o,
                            href: o ? void 0 : b,
                            className: p,
                            style: g
                        }), h)
                    }
                    var S = W(f, ["as"]);
                    return q().createElement("button", Object.assign({
                        ref: r,
                        type: "button"
                    }, S, {
                        disabled: o,
                        className: p,
                        style: g
                    }), h)
                }),
                en = "NoMatchingEventContextFound";
            t(945);
            var ei = (0, k.withTranslations)(function(e) {
                    var r = e.errorSubtext,
                        t = e.onRefresh,
                        n = e.translate,
                        i = (0, k.useTheme)();
                    return (0, M.jsxs)("div", {
                        "data-testid": "error-container",
                        className: "discovery-error-container",
                        children: [(0, M.jsxs)("div", {
                            className: "error-container-content",
                            children: [(0, M.jsx)("img", {
                                "data-testid": "error-container-image",
                                className: "error-container-content-image",
                                src: "dark" === i ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggc3Ryb2tlPSIjZjdmN2Y4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTQ3Ljc3NyAyNi4yMzhjLjk4OC0xLjY1IDMuNDU4LTEuNjUgNC40NDYgMGwyNi42OCA0NC41NWMuOTg3IDEuNjUtLjI0OCAzLjcxMi0yLjIyNCAzLjcxMkgyMy4zMjFjLTEuOTc2IDAtMy4yMTEtMi4wNjItMi4yMjMtMy43MTN6Ii8+PGNpcmNsZSBjeD0iNDkuOTI1IiBjeT0iNjIuMzUyIiByPSIyLjM3NSIgZmlsbD0iI2Y3ZjdmOCIvPjxwYXRoIHN0cm9rZT0iI2Y3ZjdmOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik00OS45MjUgNTQuMjVWNDMiLz48L3N2Zz4=" : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggc3Ryb2tlPSIjMjAyMjI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTQ3Ljc3NyAyNi4yMzhjLjk4OC0xLjY1IDMuNDU4LTEuNjUgNC40NDYgMGwyNi42OCA0NC41NWMuOTg3IDEuNjUtLjI0OCAzLjcxMi0yLjIyNCAzLjcxMkgyMy4zMjFjLTEuOTc2IDAtMy4yMTEtMi4wNjItMi4yMjMtMy43MTN6Ii8+PGNpcmNsZSBjeD0iNDkuOTI1IiBjeT0iNjIuMzUyIiByPSIyLjM3NSIgZmlsbD0iIzIwMjIyNyIvPjxwYXRoIHN0cm9rZT0iIzIwMjIyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik00OS45MjUgNTQuMjVWNDMiLz48L3N2Zz4=",
                                alt: ""
                            }), (0, M.jsx)("h2", {
                                children: n("Response.SomethingWentWrong")
                            }), (0, M.jsx)("p", {
                                className: "error-container-content-subtext",
                                children: r
                            })]
                        }), t && (0, M.jsx)(et, {
                            "data-testid": "error-refresh-button",
                            variant: "Standard",
                            size: "Medium",
                            onClick: t,
                            children: (0, M.jsx)("span", {
                                children: n("Action.Retry")
                            })
                        })]
                    })
                }, {
                    common: ["CommonUI.Messages", "CommonUI.Controls"],
                    feature: ""
                }),
                ea = window.Roblox["core-scripts"].meta.user,
                eo = window.Roblox["core-scripts"].http.http,
                es = window.Roblox["core-scripts"].dataStore,
                ec = t.n(es),
                el = window.Roblox["core-scripts"].environmentUrls,
                eu = t.n(el),
                ed = eu().gamesApi,
                ev = {
                    getOmniRecommendations: function(e, r) {
                        return {
                            url: "".concat(ed, "/v1/games/omni-recommendations?model.pageType=").concat(e).concat(void 0 !== r ? "&model.sessionId=".concat(r) : ""),
                            withCredentials: !0
                        }
                    },
                    getOmniRecommendationsMetadata: {
                        url: "".concat(ed, "/v1/games/omni-recommendations-metadata"),
                        withCredentials: !0
                    },
                    getGameList: {
                        url: "".concat(ed, "/v1/games/list"),
                        withCredentials: !0
                    },
                    getGamePasses: function(e, r) {
                        return {
                            url: "".concat(ed, "/v1/games/").concat(e, "/game-passes?limit=").concat(r),
                            withCredentials: !0
                        }
                    },
                    getGameRecommendations: function(e) {
                        return {
                            url: "".concat(ed, "/v1/games/recommendations/game/").concat(e),
                            withCredentials: !0
                        }
                    },
                    getGameSorts: {
                        url: "".concat(ed, "/v1/games/sorts"),
                        withCredentials: !0
                    },
                    getUniverseVoiceStatus: function(e) {
                        return {
                            withCredentials: !0,
                            url: "".concat(eu().voiceApi, "/v1/settings/universe/").concat(e)
                        }
                    },
                    getVoiceOptInStatus: {
                        withCredentials: !0,
                        url: "".concat(eu().voiceApi, "/v1/settings/user-opt-in")
                    },
                    getAssetDataFromAssetId: function(e) {
                        return {
                            url: "".concat(eu().assetDeliveryApi, "/v2/assetId/").concat(e),
                            withCredentials: !0
                        }
                    }
                },
                em = {
                    refreshCache: !1,
                    expirationWindowMS: 3e4,
                    useCache: !0
                };

            function ef(e, r, t, n, i, a, o) {
                try {
                    var s = e[a](o),
                        c = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? r(c) : Promise.resolve(c).then(n, i)
            }

            function ep(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise(function(n, i) {
                        var a = e.apply(r, t);

                        function o(e) {
                            ef(a, n, i, o, s, "next", e)
                        }

                        function s(e) {
                            ef(a, n, i, o, s, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }

            function eh(e, r) {
                var t, n, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(c) {
                        var l = [s, c];
                        if (t) throw TypeError("Generator is already executing.");
                        for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                            switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = r.call(e, a)
                        } catch (e) {
                            l = [6, e], n = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var eg = ec().gamesDataStore,
                eb = ec().userDataStoreV2,
                ey = ec().localeDataStore,
                eS = ec().userDataStore.FriendsUserSortType,
                ew = window.Roblox["core-scripts"].guac,
                ex = eu().apiGatewayUrl,
                eI = eu().apiGatewayUrl,
                eP = {
                    url: {
                        getOmniRecommendations: {
                            url: "".concat(eI, "/discovery-api/omni-recommendation"),
                            withCredentials: !0
                        },
                        getOmniRecommendationsMetadata: {
                            url: "".concat(eI, "/discovery-api/omni-recommendation-metadata"),
                            withCredentials: !0
                        },
                        getOmniSearch: {
                            url: "".concat(eI, "/search-api/omni-search"),
                            withCredentials: !0
                        },
                        getExploreSorts: {
                            url: "".concat(eI, "/explore-api/v1/get-sorts"),
                            withCredentials: !0
                        },
                        getExploreSortContents: {
                            url: "".concat(eI, "/explore-api/v1/get-sort-content"),
                            withCredentials: !0
                        },
                        getSearchLandingPage: {
                            url: "".concat(eI, "/search-api/search-landing-page"),
                            withCredentials: !0
                        },
                        getSurvey: function(e) {
                            return {
                                url: "".concat(eI, "/rocap/v1/locations/").concat(e, "/prompts"),
                                withCredentials: !0
                            }
                        },
                        postSurveyResults: function(e) {
                            return {
                                url: "".concat(eI, "/rocap/v1/locations/").concat(e, "/annotations"),
                                withCredentials: !0
                            }
                        },
                        getLandingPageData: function() {
                            return {
                                url: "".concat(eI, "/landing-page-api/landing-page"),
                                withCredentials: !0
                            }
                        },
                        postUserSignal: function() {
                            return {
                                url: "".concat(eI, "/user-signal-http-gateway/v1/user-signal/ingest"),
                                withCredentials: !0
                            }
                        }
                    }
                },
                eT = ((e = {}).Carousel = "Carousel", e.AvatarCarousel = "AvatarCarousel", e.SortlessGrid = "SortlessGrid", e.FriendCarousel = "FriendCarousel", e.InterestGrid = "InterestGrid", e.Pills = "Pills", e.Sdui = "sdui", e.SongCarousel = "SongCarousel", e.SearchPillCarousel = "SearchPillCarousel", e),
                ej = ((r = {}).Game = "Game", r.Text = "Text", r),
                eR = window.Roblox["core-scripts"].intl.intl,
                eC = t.n(eR);
            window.Roblox["core-scripts"].format.number;
            var eN = window.Roblox["core-scripts"].util.url;

            function eE(e, r, t, n, i, a, o) {
                try {
                    var s = e[a](o),
                        c = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? r(c) : Promise.resolve(c).then(n, i)
            }

            function eA(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise(function(n, i) {
                        var a = e.apply(r, t);

                        function o(e) {
                            eE(a, n, i, o, s, "next", e)
                        }

                        function s(e) {
                            eE(a, n, i, o, s, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }

            function eM(e, r) {
                var t, n, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(c) {
                        var l = [s, c];
                        if (t) throw TypeError("Generator is already executing.");
                        for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                            switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = r.call(e, a)
                        } catch (e) {
                            l = [6, e], n = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            window.RobloxPresence, new(eC())().getDateTimeFormatter();
            var eL = function(e) {
                var r = /\/games\/servers-section\/(\d+)/.exec(e);
                if (r) return parseInt(r[1], 10);
                var t = /\/games\/servers-section-preopen-create-vip\/(\d+)/.exec(e);
                if (t) return parseInt(t[1], 10)
            };

            function eO(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function eD(e, r, t, n, i, a, o) {
                try {
                    var s = e[a](o),
                        c = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? r(c) : Promise.resolve(c).then(n, i)
            }

            function ek(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return eO(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eO(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var eF = function(e) {
                    var r;
                    return (r = function() {
                        var r, t, n, i, a, o, s, c, l;
                        return function(e, r) {
                            var t, n, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                },
                                o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                            return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function s(s) {
                                return function(c) {
                                    var l = [s, c];
                                    if (t) throw TypeError("Generator is already executing.");
                                    for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                                        if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                                        switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                            case 0:
                                            case 1:
                                                i = l;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: l[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = l[1], l = [0];
                                                continue;
                                            case 7:
                                                l = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                                    a.label = l[1];
                                                    break
                                                }
                                                if (6 === l[0] && a.label < i[1]) {
                                                    a.label = i[1], i = l;
                                                    break
                                                }
                                                if (i && a.label < i[2]) {
                                                    a.label = i[2], a.ops.push(l);
                                                    break
                                                }
                                                i[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        l = r.call(e, a)
                                    } catch (e) {
                                        l = [6, e], n = 0
                                    } finally {
                                        t = i = 0
                                    }
                                    if (5 & l[0]) throw l[1];
                                    return {
                                        value: l[0] ? l[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(u) {
                            var d, v, m, f, p;
                            switch (u.label) {
                                case 0:
                                    if (!e) return [2, Promise.reject(Error("Universe ID is required"))];
                                    u.label = 1;
                                case 1:
                                    return u.trys.push([1, 4, , 5]), d = e.toString(), r = ep(function() {
                                        var e;
                                        return eh(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, eg.getPlayabilityStatus([d])];
                                                case 1:
                                                    return [2, (void 0 === (e = r.sent().data) ? [] : e)[0]]
                                            }
                                        })
                                    })(), [4, (v = e, eA(function() {
                                        var e;
                                        return eM(this, function(r) {
                                            return e = {
                                                url: "".concat(eu().apiGatewayUrl, "/private-servers-api/Universe-Private-Server-Settings"),
                                                retryable: !0
                                            }, [2, eo.get(e, {
                                                universeId: v
                                            }).then(function(e) {
                                                return e.data
                                            }).catch(function() {
                                                return Promise.reject()
                                            })]
                                        })
                                    })())];
                                case 2:
                                    if (!(t = u.sent())) return [2, Promise.reject(Error("Private server settings is undefined"))];
                                    return m = (n = t.rootPlaceId).toString(), [4, Promise.all([ep(function() {
                                        var e;
                                        return eh(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, eg.getPlaceDetails([m])];
                                                case 1:
                                                    return [2, (void 0 === (e = r.sent().data) ? [] : e)[0]]
                                            }
                                        })
                                    })(), (f = n, p = (0, ea.authenticatedUser)().id.toString(), eA(function() {
                                        var e, r;
                                        return eM(this, function(t) {
                                            return e = {
                                                url: "".concat(eu().apiGatewayUrl, "/asset-permissions-api/v1/assets/check-permissions"),
                                                retryable: !0,
                                                withCredentials: !0
                                            }, r = {
                                                requests: [{
                                                    subject: {
                                                        subjectType: "User",
                                                        subjectId: p
                                                    },
                                                    action: "Edit",
                                                    assetId: f
                                                }]
                                            }, [2, eo.post(e, r).then(function(e) {
                                                var r, t, n, i;
                                                return (null == e || null == (i = e.data) || null == (n = i.results) || null == (t = n[0]) || null == (r = t.value) ? void 0 : r.status) === "HasPermission"
                                            })]
                                        })
                                    })()).catch(function() {
                                        return !1
                                    }), r])];
                                case 3:
                                    if (a = (i = ek.apply(void 0, [u.sent(), 3]))[0], o = i[1], s = i[2], !a || !s) return [2, Promise.reject(Error("Place details or playability status is undefined"))];
                                    return c = t.privateServerData.isAvailable && s.isPlayable, l = window.location.pathname.includes("servers-section-preopen-create-vip"), [2, {
                                        canCreateServer: c,
                                        placeId: a.placeId,
                                        placeName: a.name,
                                        price: t.privateServerData.price,
                                        privateServerProductId: t.privateServerData.privateServerProductId,
                                        privateServerLimit: t.privateServerData.privateServerLimit,
                                        sellerId: a.builderId,
                                        sellerName: a.builder,
                                        universeId: e,
                                        userCanManagePlace: o,
                                        preopenCreatePrivateGame: l
                                    }];
                                case 4:
                                    return [2, Promise.reject(u.sent())];
                                case 5:
                                    return [2]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, i) {
                            var a = r.apply(e, t);

                            function o(e) {
                                eD(a, n, i, o, s, "next", e)
                            }

                            function s(e) {
                                eD(a, n, i, o, s, "throw", e)
                            }
                            o(void 0)
                        })
                    })()
                },
                eq = function() {
                    var e = document.getElementById("game-detail-meta-data");
                    return e ? {
                        gameDetailUniverseId: parseInt(e.getAttribute("data-universe-id"), 10),
                        gameDetailPlaceName: e.getAttribute("data-place-name"),
                        gameDetailPlaceId: parseInt(e.getAttribute("data-place-id"), 10),
                        gameDetailPageId: e.getAttribute("data-page-id"),
                        gameDetailGameInstanceId: e.getAttribute("data-game-instance-id"),
                        gameDetailShowShutdownAllButton: "True" === e.getAttribute("data-show-shut-down-all-button"),
                        gameDetailUserCanManagePlace: "True" === e.getAttribute("data-user-can-manage-place"),
                        gameDetailPrivateServerPrice: parseInt(e.getAttribute("data-private-server-price"), 10),
                        gameDetailCanCreateServer: "True" === e.getAttribute("data-can-create-server"),
                        gameDetailPrivateServerLimit: parseInt(e.getAttribute("data-private-server-limit"), 10) || 0,
                        gameDetailSellerName: e.getAttribute("data-seller-name"),
                        gameDetailSellerId: parseInt(e.getAttribute("data-seller-id"), 10),
                        gameDetailPrivateServerProductId: parseInt(e.getAttribute("data-private-server-product-id"), 10),
                        gameDetailPreopenCreatePrivateServerModal: "True" === e.getAttribute("data-preopen-create-private-server-modal"),
                        gameDetailExperienceInviteLinkId: e.getAttribute("data-experience-invite-link-id"),
                        gameDetailExperienceInviteStatus: e.getAttribute("data-experience-invite-status")
                    } : null
                },
                eU = function() {
                    var e = (0, F.useMemo)(function() {
                            var e = eq();
                            if (e && "boolean" == typeof e.gameDetailCanCreateServer && "number" == typeof e.gameDetailPlaceId && "string" == typeof e.gameDetailPlaceName && "number" == typeof e.gameDetailPrivateServerPrice && "number" == typeof e.gameDetailPrivateServerProductId && "number" == typeof e.gameDetailSellerId && "string" == typeof e.gameDetailSellerName && "number" == typeof e.gameDetailUniverseId && "boolean" == typeof e.gameDetailUserCanManagePlace && "boolean" == typeof e.gameDetailPreopenCreatePrivateServerModal && "number" == typeof e.gameDetailPrivateServerLimit) return {
                                canCreateServer: e.gameDetailCanCreateServer,
                                placeId: e.gameDetailPlaceId,
                                placeName: e.gameDetailPlaceName,
                                price: e.gameDetailPrivateServerPrice,
                                privateServerProductId: e.gameDetailPrivateServerProductId,
                                sellerId: e.gameDetailSellerId,
                                sellerName: e.gameDetailSellerName,
                                universeId: e.gameDetailUniverseId,
                                userCanManagePlace: e.gameDetailUserCanManagePlace,
                                preopenCreatePrivateGame: e.gameDetailPreopenCreatePrivateServerModal,
                                privateServerLimit: e.gameDetailPrivateServerLimit
                            }
                        }, []),
                        r = (0, F.useMemo)(function() {
                            if (null == e ? void 0 : e.universeId) return e.universeId;
                            var r, t = eL(window.location.pathname);
                            if (t) return t;
                            null == (r = window.EventTracker) || r.fireEvent("UseServerListMetadataNoUniverseId")
                        }, [null == e ? void 0 : e.universeId]),
                        t = !!r && !e,
                        n = (0, L.useQuery)({
                            queryKey: ["serverListMetadata", r],
                            queryFn: function() {
                                return eF(r)
                            },
                            enabled: t,
                            onError: function() {
                                var e;
                                null == (e = window.EventTracker) || e.fireEvent("UseServerListMetadataFetchError")
                            }
                        }),
                        i = n.data,
                        a = n.isLoading,
                        o = n.isError,
                        s = n.refetch;
                    return (0, F.useMemo)(function() {
                        return e ? {
                            serverListMetadata: e,
                            isLoading: !1,
                            hasError: !1,
                            refetchServerListMetadata: void 0
                        } : r ? {
                            serverListMetadata: i,
                            isLoading: a,
                            hasError: o,
                            refetchServerListMetadata: s
                        } : {
                            serverListMetadata: void 0,
                            isLoading: !1,
                            hasError: !0,
                            refetchServerListMetadata: void 0
                        }
                    }, [e, r, i, a, o, s])
                },
                e_ = {
                    friend: {
                        key: "friends",
                        value: "Friend"
                    },
                    public: {
                        key: "public",
                        value: "Public"
                    },
                    Vip: {
                        key: "private",
                        value: "VIP"
                    }
                },
                eG = {
                    sortOrder: "Desc",
                    excludeFullGames: !1
                },
                eB = {
                    ascending: "Action.Ascending",
                    atCapacityError: "Message.PrivateServersAtCapacity",
                    buyNowText: "Action.BuyNow",
                    cancelAction: "Action.Cancel",
                    cancelPrivateServerText: "Action.CancelPrivateServer",
                    cancelServerText: "Message.CancelServerConfirmation",
                    cancelText: "Label.Cancel",
                    cantJoinPrivacySettingText: "Label.NoOneCanJoinServerDueToPrivacySettings",
                    configureServerText: "Action.ConfigureServer",
                    confirmCancelText: "Action.ConfirmCancel",
                    confirmEnableFuturePaymentsText: "Label.ConfirmEnableFuturePayments",
                    createPrivateServerPriceText: "Label.CreatePrivateServerFor",
                    createPrivateServerText: "Action.CreatePrivateServer",
                    createPrivateServerTitle: "Action.CreatePrivateServer",
                    createServerFooterDescription: "Description.RecurringSubscriptionRenewal",
                    createServerFooterText: "Label.FooterText",
                    descending: "Action.Descending",
                    doNotCancelText: "Action.DoNotCancel",
                    freeGameText: "Label.Free",
                    connectionInServerLabel: "Label.ConnectionInServer",
                    connectionsServersTitle: "Heading.ServersMyConnectionsAreIn",
                    gameNameText: "Label.GameName",
                    hideFullServers: "Label.ExcludeFullServers",
                    inactiveServerText: "Label.Inactive",
                    insufficientFunds: "Label.InsufficientFunds",
                    joinServerText: "Label.ServerListJoin",
                    loadMoreButtonText: "Action.LoadMore",
                    loadServersError: "Message.LoadServersFailure",
                    manyConnectionsInServerLabel: "Label.ManyConnectionsInServer",
                    maxFreePrivateServersText: "Description.MaxFreePrivateServers",
                    noServersFoundText: "Label.NoServersFound",
                    numberOfPlayers: "Label.NumberOfPlayers",
                    perMonthText: "Label.PerMonth",
                    playerCountText: "Label.CurrentPlayerCount",
                    privacySettingsText: "Label.PrivacySettings",
                    privateServerHeader: "Heading.PrivateServers",
                    privateServerLabel: "Label.PrivateServer",
                    privateServerPlayWithOthers: "Label.PlayWithOthers",
                    privateServerPlayWithConnections: "Label.PlayWithConnections",
                    privateServerPrice: "Label.Price",
                    privateServerRefreshText: "Action.Refresh",
                    privateServersNotSupported: "Label.VipServersNotSupported",
                    privateServerTooltip: "Label.PrivateServersAbout",
                    privateServerTooltipConnections: "Label.PrivateServersAboutConnections",
                    publicServersTitle: "Heading.OtherServers",
                    purchaseError: "Message.InternalErrorPurchaseError",
                    renewalCanceledText: "Label.RenewalCanceled",
                    renewPrivateServerTitle: "Label.RenewPrivateServer",
                    renewServerListText: "Label.Renew",
                    renewsMonthlyText: "Label.RenewsMonthlyCancelAnytime",
                    renewSubscriptionError: "Message.RenewSubscriptionError",
                    renewSubscriptionSuccess: "Message.RenewSubscriptionSuccess",
                    serverCancellationSuccess: "Message.ServerCancellationSuccess",
                    serverNameText: "Label.ServerName",
                    serverIdText: "Label.ServerId",
                    serversFailedToLoadText: "Message.LoadServersFailure",
                    shutdownServerError: "Message.ShutdownServerError",
                    shutdownServerSuccess: "Message.ShutdownServerSuccess",
                    shutdownServerText: "Label.ShutDownServer",
                    slowGameWarning: "Label.SlowGame",
                    startRenewingPrivateServerPrice: "Label.StartRenewingPrivateServerPrice",
                    subscribeText: "Action.Subscribe",
                    transactionFailedHeading: "Heading.TransactionFailed",
                    twoConnectionsInServerLabel: "Label.TwoConnectionsInServer",
                    headingInsufficientFunds: "Heading.InsufficientFunds",
                    economicRestrictionsErrorHeading: "Heading.EconomicRestrictionsError"
                },
                eV = window.ReactDOMServer,
                ez = window.PropTypes,
                eH = t.n(ez),
                eW = window.RobloxThumbnails,
                eJ = {
                    FraudPaymentAuthorizationAttempt: "Label.Sublabel.FraudPaymentAbuse",
                    FraudVirtualEconomyAbuse: "Label.Sublabel.FraudVirtualEconomyAbuse",
                    FraudAbuseOfAffiliateSystem: "Label.Sublabel.FraudAbuseOfTheAffiliateSystem",
                    FraudAttemptedUnauthorizedPaymentMethodUse: "Label.Sublabel.FraudAttemptedUnauthorizedPaymentMethodUse",
                    FraudRepeatedRefundRequests: "Label.Sublabel.FraudRepeatedRefundRequests",
                    FraudSuspiciousRefundRequests: "Label.Sublabel.FraudSuspiciousRefundRequests",
                    FraudUnauthorizedPurchase: "Label.Sublabel.FraudUnauthorizedPurchase",
                    FraudUseOfUnauthorizedOffPlatformTransactions: "Label.Sublabel.FraudUseOfUnauthorizedOffPlatformTransactions",
                    FraudUseOfUnauthorizedPaymentMethod: "Label.Sublabel.FraudUseOfUnauthorizedPaymentMethod",
                    FraudSuspiciousAccountPatterns: "Label.Sublabel.FraudSuspiciousAccountPatterns",
                    FraudChargeback: "Label.AbuseType.Chargeback"
                },
                eZ = function(e, r, t) {
                    var n, i = Math.ceil(t / 60);
                    if (i > 24) {
                        var a, o = Math.ceil(i / 24);
                        return e("Text.EconomicRestrictionsDaysGeneral", {
                            violation: e(null != (a = eJ[r]) ? a : "Label.Sublabel.FraudPaymentAbuse"),
                            day: o
                        })
                    }
                    return e("Text.EconomicRestrictionsHoursGeneral", {
                        violation: e(null != (n = eJ[r]) ? n : "Label.Sublabel.FraudPaymentAbuse"),
                        hour: i
                    })
                },
                eQ = window.RobloxItemPurchase,
                e$ = window.Roblox,
                eY = {
                    common: ["CommonUI.Controls", "Feature.PrivateServers", "CommonUI.Messages", "Purchasing.PurchaseDialog"],
                    feature: "Feature.ServerList"
                },
                eX = {
                    common: [],
                    feature: "Feature.PrivateServers"
                },
                eK = eu().gamesApi,
                e0 = eu().apiGatewayUrl,
                e1 = eu().matchmakingApi,
                e2 = eu().economyApi,
                e4 = function(e) {
                    return (0, eN.getAbsoluteUrl)("/users/".concat(e, "/profile"))
                },
                e3 = function(e, r) {
                    return (0, eN.getUrlWithQueries)("/private-server/configure", {
                        privateServerId: e,
                        serverListId: r
                    })
                };

            function e5(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.forEach(function(r) {
                        var n;
                        n = t[r], r in e ? Object.defineProperty(e, r, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = n
                    })
                }
                return e
            }
            var e8 = function(e, r) {
                    return (0, eN.getAbsoluteUrl)("".concat(eK, "/v1/games/").concat(e, "/servers/").concat(r))
                },
                e9 = function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = {
                            url: e8(e, e_.public.value),
                            retryable: !0,
                            withCredentials: !0
                        },
                        i = e5({
                            cursor: r
                        }, t);
                    return eo.get(n, i)
                },
                e6 = function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = {
                            url: e8(e, e_.friend.value),
                            retryable: !1,
                            withCredentials: !0
                        },
                        i = e5({
                            cursor: r
                        }, t);
                    return eo.get(n, i)
                },
                e7 = function(e, r) {
                    var t, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = {
                            url: (t = e, (0, eN.getAbsoluteUrl)("".concat(eK, "/v1/games/").concat(t, "/private-servers"))),
                            retryable: !1,
                            withCredentials: !0
                        },
                        a = e5({
                            cursor: r
                        }, n);
                    return eo.get(i, a)
                },
                re = function(e, r, t) {
                    var n, i = null == (n = document.getElementsByName("__RequestVerificationToken")[0]) ? void 0 : n.value,
                        a = {
                            url: (0, eN.getAbsoluteUrl)("".concat(e1, "/v1/game-instances/shutdown")),
                            retryable: !0,
                            withCredentials: !0
                        },
                        o = {
                            __RequestVerificationToken: i,
                            placeId: e,
                            gameId: r
                        };
                    return t && (o.privateServerId = t), eo.post(a, o)
                },
                rr = function(e, r, t) {
                    var n, i = {
                        url: (n = e, "".concat(eK, "/v1/games/vip-servers/").concat(n)),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return eo.post(i, {
                        name: r,
                        expectedPrice: t
                    })
                },
                rt = function(e) {
                    var r, t = {
                        url: (r = e, "".concat(eK, "/v1/vip-servers/").concat(r)),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return eo.get(t)
                },
                rn = function(e, r, t) {
                    var n, i = {
                        url: (n = e, "".concat(eK, "/v1/vip-servers/").concat(n, "/subscription")),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return eo.patch(i, {
                        active: r,
                        price: t
                    })
                },
                ri = function(e) {
                    var r, t = {
                        url: (r = e, "".concat(e2, "/v1/users/").concat(r, "/currency")),
                        retryable: !0,
                        withCredentials: !0
                    };
                    return eo.get(t).then(function(e) {
                        return e.data
                    })
                };

            function ra(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function ro(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return ra(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ra(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var rs = ro((0, H.createModal)(), 2),
                rc = rs[0],
                rl = rs[1],
                ru = function(e) {
                    void 0 === e && (e = {
                        baseUrl: ""
                    }), this.configuration = e, this.baseUrl = this.configuration.baseUrl
                },
                rd = function() {
                    function e(e) {
                        void 0 === e && (e = new ru), this.configuration = e, this.baseUrl = e.baseUrl
                    }
                    return e.prototype.sendEvent = function(e) {
                        var r = e.localTime,
                            t = e.target,
                            n = e.eventType,
                            i = e.context,
                            a = e.additionalProperties,
                            o = e.currentUrl,
                            s = e.guestId,
                            c = e.sessionId,
                            l = r.toISOString(),
                            u = new URL("".concat(this.baseUrl, "/pe"));
                        return u.searchParams.append("t", t), u.searchParams.append("evt", n), u.searchParams.append("ctx", i), u.searchParams.append("lt", l), u.searchParams.append("url", o || window.location.href), void 0 !== s && u.searchParams.append("gid", s), void 0 !== c && u.searchParams.append("sid", c), void 0 !== a && Object.keys(a).forEach(function(e) {
                            var r;
                            u.searchParams.append(e, (null != (r = a[e]) ? r : "").toString())
                        }), fetch(u.href, {
                            credentials: "same-origin"
                        })
                    }, e.prototype.sendEventViaImg = function(e, r) {
                        var t = e.localTime,
                            n = e.target,
                            i = e.eventType,
                            a = e.context,
                            o = e.additionalProperties,
                            s = e.currentUrl,
                            c = e.guestId,
                            l = e.sessionId,
                            u = t.toISOString(),
                            d = new URL("".concat(this.baseUrl, "/e.png"));
                        d.searchParams.append("t", n), d.searchParams.append("evt", i), d.searchParams.append("ctx", a), d.searchParams.append("lt", u), d.searchParams.append("url", s || window.location.href), void 0 !== c && d.searchParams.append("gid", c), void 0 !== l && d.searchParams.append("sid", l), void 0 !== o && Object.keys(o).forEach(function(e) {
                            var r;
                            d.searchParams.append(e, (null != (r = o[e]) ? r : "").toString())
                        });
                        var v = new Image;
                        return v.src = d.href, v.onload = function() {
                            void 0 !== r && r(!0)
                        }, v.onerror = function(e) {
                            void 0 !== r && r(!1), console.error(e)
                        }, v
                    }, e
                }(),
                rv = eu().domain,
                rm = ((n = {}).PRIVATE_SERVER_JOIN = "privateServerJoin", n.PRIVATE_SERVER_LOAD = "privateServerLoad", n),
                rf = ((i = {}).GAME_TAB = "gameTab", i),
                rp = new rd(new ru({
                    baseUrl: "https://ecsv2.".concat(rv, "/www")
                })),
                rh = function(e, r, t) {
                    var n = {
                        target: "www",
                        localTime: new Date,
                        eventType: e,
                        context: r,
                        additionalProperties: {
                            latency: t
                        }
                    };
                    return rp.sendEventViaImg(n)
                };

            function rg(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function rb(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return rg(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rg(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ry = window.RobloxItemPurchase,
                rS = ry.createItemPurchase,
                rw = ry.errorTypeIds,
                rx = ry.TransactionVerb,
                rI = ry.ASSET_TYPE_ENUM,
                rP = rb(((a = function(e) {
                    var r = e.translate,
                        t = e.privateServerTranslate,
                        n = e.assetName,
                        i = e.expectedPrice,
                        a = e.thumbnail,
                        o = e.serverName,
                        s = e.onAction,
                        c = e.onServerNameChange,
                        l = e.clearForm,
                        u = e.loading,
                        d = t(eB.perMonthText) || "/month",
                        v = (0, F.useMemo)(function() {
                            return 0 !== i ? r(eB.subscribeText) || "Subscribe" : r(eB.buyNowText)
                        }, [i, r]),
                        m = (0, M.jsxs)("span", {
                            className: "purchase-private-server-modal-footer-text",
                            children: [(0, M.jsx)(eQ.BalanceAfterSaleText, {
                                expectedPrice: i
                            }), " ", t(eB.createServerFooterDescription) || "This is a subscription-based feature. It will auto-renew once a month until you cancel the subscription."]
                        }),
                        f = ro((0, F.useState)(!1), 2),
                        p = f[0],
                        h = f[1],
                        g = ro((0, F.useState)(!1), 2),
                        b = g[0],
                        y = g[1],
                        S = ro((0, F.useState)(!1), 2),
                        w = S[0],
                        x = S[1],
                        I = "<a id='redirect-link' href=".concat((0, eN.getAbsoluteUrl)("/my/account#!/privacy"), ">").concat(t(eB.privacySettingsText), "</a>");
                    (0, F.useEffect)(function() {
                        e$.CurrentUser.isUnder13 && eo.get({
                            retryable: !0,
                            withCredentials: !0,
                            url: "".concat(e0, "/user-settings-api/v1/user-settings")
                        }).then(function(e) {
                            return e.data
                        }, function(e) {
                            return null
                        }).then(function(e) {
                            e && y((null == e ? void 0 : e.privateServerPrivacy) === "NoOne")
                        }, function() {})
                    }, []), (0, F.useEffect)(function() {
                        (0, ew.callBehaviour)("account-settings-ui").catch(function() {
                            return null
                        }).then(function(e) {
                            e && x(null == e ? void 0 : e.isPrivateServerPrivacyV2Enabled)
                        }, function() {})
                    }, []);
                    var P = (0, M.jsxs)("div", {
                        className: "private-server-purchase",
                        children: [(0, M.jsx)("div", {
                            className: "modal-list-item private-server-main-text",
                            dangerouslySetInnerHTML: {
                                __html: t(eB.createPrivateServerPriceText, {
                                    target: "".concat((0, eV.renderToString)((0, M.jsx)(eQ.PriceLabel, {
                                        price: i
                                    }))).concat(0 !== i ? d : "")
                                })
                            }
                        }), (0, M.jsxs)("div", {
                            className: "modal-list-item",
                            children: [(0, M.jsx)("span", {
                                className: "text-label private-server-game-name",
                                children: t(eB.gameNameText)
                            }), (0, M.jsx)("span", {
                                className: "game-name",
                                children: n
                            })]
                        }), (0, M.jsxs)("div", {
                            className: "modal-list-item private-server-name-input",
                            children: [(0, M.jsx)("span", {
                                className: "text-label",
                                children: t(eB.serverNameText)
                            }), (0, M.jsxs)("div", {
                                className: "form-group form-has-feedback",
                                children: [(0, M.jsx)("input", {
                                    type: "text",
                                    value: o,
                                    onChange: c,
                                    maxLength: 50,
                                    className: "form-control input-field private-server-name",
                                    id: "private-server-name-text-box"
                                }), o.length > 0 && (0, M.jsxs)("p", {
                                    className: "form-control-label text-secondary",
                                    children: [o.length, "/", 50]
                                })]
                            })]
                        }), (0, M.jsx)("div", {
                            className: "modal-image-container",
                            children: a
                        }), 0 !== i && (0, M.jsx)("p", {
                            className: "rbx-private-server-renewal-disclosure",
                            children: t(eB.renewsMonthlyText) || "Renews monthly. Cancel anytime."
                        }), w && b && (0, M.jsxs)("div", {
                            children: [(0, M.jsx)("br", {}), (0, M.jsxs)("div", {
                                className: "private-settings-disclaimer",
                                children: [(0, M.jsx)("span", {
                                    className: "private-settings-disclaimer-checkbox",
                                    children: (0, M.jsx)("input", {
                                        id: "privacy-settings-disclaimer-checkbox",
                                        type: "checkbox",
                                        checked: p,
                                        onClick: function() {
                                            return h(!p)
                                        }
                                    })
                                }), (0, M.jsx)("b", {
                                    children: (0, M.jsx)("span", {
                                        className: "private-servers-disclaimer-text",
                                        dangerouslySetInnerHTML: {
                                            __html: t(eB.cantJoinPrivacySettingText, {
                                                privacySettingsLink: I
                                            })
                                        }
                                    })
                                })]
                            })]
                        })]
                    });
                    return (0, M.jsx)(rc, {
                        id: "purchase-private-server-modal",
                        title: t(eB.createPrivateServerTitle),
                        body: P,
                        actionButtonText: v,
                        neutralButtonText: r(eB.cancelAction),
                        footerText: m,
                        onAction: s,
                        onNeutral: l,
                        loading: u,
                        actionButtonShow: !0,
                        disableActionButton: 0 === o.length || b && w && !p
                    })
                }).defaultProps = {
                    serverName: "",
                    createServerError: !1,
                    loading: !1
                }, a.propTypes = {
                    translate: eH().func.isRequired,
                    privateServerTranslate: eH().func.isRequired,
                    thumbnail: eH().node.isRequired,
                    assetName: eH().string.isRequired,
                    expectedPrice: eH().number.isRequired,
                    serverName: eH().string,
                    onAction: eH().func.isRequired,
                    onServerNameChange: eH().func.isRequired,
                    createServerError: eH().bool,
                    loading: eH().bool,
                    clearForm: eH().func.isRequired
                }, [(0, k.withTranslations)(a, {
                    common: [],
                    feature: "Purchasing.PurchaseDialog"
                }), rl]), 2),
                rT = rb(rS({
                    customPurchaseVerificationModal: rP[0],
                    customPurchaseVerificationModalService: rP[1]
                }), 2),
                rj = rT[0],
                rR = rT[1];

            function rC(e) {
                var r = e.canCreatePrivateServer,
                    t = e.currency,
                    n = e.placeName,
                    i = e.price,
                    a = e.privateServerTranslate,
                    o = e.productId,
                    s = e.refreshServers,
                    c = e.sellerId,
                    l = e.sellerName,
                    u = e.translate,
                    d = e.universeId,
                    v = e.disabled,
                    m = e.preopenCreatePrivateGame,
                    f = rb((0, F.useState)(""), 2),
                    p = f[0],
                    h = f[1];
                m && rR.start();
                var g = function() {
                        return h(""), !0
                    },
                    b = (0, M.jsx)(eW.Thumbnail2d, {
                        containerClass: "modal-thumb",
                        format: eW.ThumbnailFormat.jpeg,
                        imgClassName: "original-image",
                        size: eW.DefaultThumbnailSize,
                        targetId: d,
                        type: eW.ThumbnailTypes.gameIcon
                    });
                return (0, M.jsxs)("span", {
                    className: "rbx-private-server-create",
                    children: [(0, M.jsx)(H.Button, {
                        className: "btn-more rbx-private-server-create-button",
                        isDisabled: v || !r,
                        onClick: rR.start,
                        size: H.Button.sizes.medium,
                        variant: H.Button.variants.secondary,
                        children: a(eB.createPrivateServerTitle)
                    }), (0, M.jsx)(rj, {
                        assetName: n,
                        assetType: rI.PRIVATE_SERVER,
                        customProps: {
                            privateServerTranslate: a,
                            serverName: p,
                            onServerNameChange: function(e) {
                                return h(e.target.value)
                            },
                            clearForm: g
                        },
                        expectedCurrency: t,
                        expectedPrice: i,
                        expectedSellerId: c,
                        handlePurchase: function(e) {
                            var r = e.handleError,
                                t = e.setLoading,
                                n = e.openConfirmation,
                                a = e.closeAll;
                            t(!0), rr(d, p, i).then(function(e) {
                                var i = e.data;
                                if (t(!1), a(), void 0 !== i.FailureReason && void 0 !== i.ExpirationTimeInMinutes) return void r({
                                    title: u(eB.economicRestrictionsErrorHeading),
                                    onDecline: function() {
                                        return !0
                                    },
                                    errorMsg: eZ(u, i.FailureReason, i.ExpirationTimeInMinutes),
                                    showDivId: rw.transactionFailure
                                });
                                var o = i.vipServerId;
                                n({
                                    transactionVerb: rx.Bought,
                                    onAccept: function() {
                                        window.location.href = e3(o)
                                    },
                                    onDecline: function() {
                                        var e;
                                        return null == (e = window.EventTracker) || e.start(rm.PRIVATE_SERVER_LOAD), s({
                                            startTime: performance.now()
                                        }), g(), !0
                                    }
                                })
                            }, function(e) {
                                var n, i, o = e.data;
                                t(!1), a(), r({
                                    errorMsg: null != (i = null == (n = o.errors) ? void 0 : n[0].userFacingMessage) ? i : u(eB.purchaseError),
                                    onDecline: function() {
                                        var e;
                                        return null == (e = window.EventTracker) || e.start(rm.PRIVATE_SERVER_LOAD), s({
                                            startTime: performance.now()
                                        }), !0
                                    },
                                    showDivId: rw.transactionFailure,
                                    title: u(eB.transactionFailedHeading)
                                })
                            })
                        },
                        productId: o,
                        sellerName: l,
                        thumbnail: b,
                        isPrivateServer: !0
                    }), !r && (0, M.jsx)("span", {
                        className: "text-footer rbx-private-server-create-disabled-text",
                        children: u(eB.maxFreePrivateServersText)
                    })]
                })
            }
            rC.defaultProps = {
                canCreatePrivateServer: !0,
                currency: 1,
                disabled: !1,
                preopenCreatePrivateGame: !1
            }, rC.propTypes = {
                canCreatePrivateServer: eH().bool,
                currency: eH().number,
                placeName: eH().string.isRequired,
                price: eH().number.isRequired,
                privateServerTranslate: eH().func.isRequired,
                productId: eH().number.isRequired,
                refreshServers: eH().func.isRequired,
                sellerId: eH().number.isRequired,
                sellerName: eH().string.isRequired,
                translate: eH().func.isRequired,
                universeId: eH().number.isRequired,
                disabled: eH().bool,
                preopenCreatePrivateGame: eH().bool
            };
            var rN = (0, k.withTranslations)(rC, {
                    common: ["IAPExperience.PurchaseError", "Feature.NotApproved", "Purchasing.PurchaseDialog"],
                    feature: "Feature.VIPServer"
                }),
                rE = t(942),
                rA = t.n(rE),
                rM = window.HeaderScripts,
                rL = window.CoreUtilities,
                rO = window.Roblox["core-scripts"].eventStream,
                rD = window.Roblox["core-scripts"].meta.device,
                rk = "robloxAttributionIds",
                rF = ((o = {}).GameDetailReferral = "gameDetailReferral", o),
                rq = function(e) {
                    var r = window,
                        t = r[rk];
                    t || (t = {}, r[rk] = t);
                    var n = t[e];
                    return n || (n = rL.uuidService.generateRandomUuid(), t[e] = n), n
                };
            t(792), t(821);
            (s = S || (S = {})).ItemImpressions = "itemImpressions", s.ItemAction = "itemAction", (c = w || (w = {})).Games = "Games", c.Home = "Home", c.SearchLanding = "SearchLanding", c.Spotlight = "Spotlight", c.UserProfile = "UserProfile", (l = x || (x = {})).HomePageSessionInfo = "homePageSessionInfo", l.DiscoverPageSessionInfo = "discoverPageSessionInfo", l.GameSearchSessionInfo = "gameSearchSessionInfo", l.SpotlightPageSessionInfo = "spotlightPageSessionInfo", (u = I || (I = {})).ContentType = "contentType", u.Context = "context", u.CollectionId = "collectionId", u.CollectionPosition = "collectionPosition", u.CollectionComponentType = "collectionComponentType", (d = P || (P = {})).User = "User", d.Game = "Game", (v = T || (T = {})).Online = "online", v.InGame = "inGame", v.InStudio = "inStudio", v.Offline = "offline", (m = j || (j = {})).Friend = "friend", m.NotFriend = "notFriend", (f = R || (R = {})).ItemIds = "itemIds", f.ItemPositions = "itemPositions", f.RowNumbers = "rowNumbers", f.FeedRowNumbers = "feedRowNumbers", f.PositionsInRow = "positionsInRow", f.PositionsInTopic = "positionsInTopic", f.TotalNumberOfItems = "totalNumberOfItems", (p = C || (C = {})).Presences = "presences", p.PresenceUniverseIds = "presenceUniverseIds", p.FriendStatuses = "friendStatuses", p.SourceCarousel = "sourceCarousel", (h = N || (N = {})).ItemId = "itemId", h.ItemPosition = "itemPosition", h.ItemComponentType = "itemComponentType", h.RowNumber = "rowNumber", h.FeedRowNumber = "feedRowNumber", h.PositionInRow = "positionInRow", h.PositionInTopic = "positionInTopic", h.TotalNumberOfItems = "totalNumberOfItems", h.ActionType = "actionType", (g = E || (E = {})).Presence = "presence", g.PresenceUniverseId = "presenceUniverseId", g.FriendStatus = "friendStatus", g.SourceCarousel = "sourceCarousel";
            var rU = function(e, r) {
                    return Array.isArray(e) && !r ? e.join(",") : (void 0 === e ? "undefined" : e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object" && e ? JSON.stringify(e) : "number" == typeof e || "string" == typeof e ? e : "boolean" == typeof e ? +!!e : void 0
                },
                r_ = function(e) {
                    return Object.keys(e).reduce(function(r, t) {
                        var n = rU(e[t], !1);
                        return void 0 !== n && (r[t] = n), r
                    }, {})
                };
            window.Roblox["core-scripts"].endpoints, window.Roblox["core-scripts"].entityUrl, window.Roblox["core-scripts"].format.string;
            var rG = ((b = {}).SearchPage = "searchPage", b.SortDetailPageDiscover = "sortDetailPageDiscover", b.SortDetailPageHome = "sortDetailPageHome", b.GameDetailPage = "gameDetailPage", b.GamesPage = "gamesPage", b.HomePage = "homePage", b.PeopleListInHomePage = "peopleListInHomePage", b.InterestCatcher = "interestCatcher", b.SearchLandingPage = "searchLandingPage", b.SpotlightPage = "spotlightPage", b);

            function rB(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function rV() {
                return (rV = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function rz(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.forEach(function(r) {
                        rB(e, r, t[r])
                    })
                }
                return e
            }
            var rH = function(e) {
                    switch (e) {
                        case rG.HomePage:
                            return w.Home;
                        case rG.GamesPage:
                            return w.Games;
                        case rG.SpotlightPage:
                            return w.Spotlight;
                        case rG.SearchLandingPage:
                            return w.SearchLanding;
                        default:
                            var r;
                            return null == (r = window.EventTracker) || r.fireEvent(en), "UNKNOWN"
                    }
                },
                rW = function(e) {
                    return Object.keys(e).reduce(function(r, t) {
                        var n;
                        return "object" == ((n = e[t]) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) && e[t] && (r[t] = JSON.stringify(e[t])), "number" == typeof e[t] && (r[t] = e[t]), "string" == typeof e[t] && (r[t] = encodeURIComponent(e[t])), "boolean" == typeof e[t] && (r[t] = +!!e[t]), r
                    }, {})
                },
                rJ = rO.eventTypes.pageLoad,
                rZ = rO.eventTypes.formInteraction,
                rQ = ((y = {}).GameImpressions = "gameImpressions", y.GameDetailReferral = "gameDetailReferral", y.SortDetailReferral = "sortDetailReferral", y.FeedScroll = "feedScroll", y.NavigateToSortLink = "navigateToSortLink", y.SurveyInteraction = "surveyInteraction", y.SurveyImpression = "surveyImpression", y.InterestCatcherClick = "interestCatcherClick", y.FilterImpressions = "filterImpressions", y.GamesFilterClick = "gamesFilterClick", y.RequestRefundClick = "requestRefundClick", y.GameTileOverflowMenuAction = "gameTileOverflowMenuAction", y.NotInterestedFeedbackFormAction = "notInterestedFeedbackFormAction", y.MediaGalleryMediaChanged = "mediaGalleryMediaChanged", y.QuerySuggestionClicked = "querySuggestionClicked", y.QueryImpressions = "queryImpressions", y);

            function r$(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.forEach(function(r) {
                        var n;
                        n = t[r], r in e ? Object.defineProperty(e, r, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = n
                    })
                }
                return e
            }
            rB(A = {}, "gameImpressions", function(e) {
                return [{
                    name: "gameImpressions",
                    type: "gameImpressions",
                    context: rZ
                }, rW(rz({}, rV({}, function(e) {
                    if (null == e) throw TypeError("Cannot destructure " + e);
                    return e
                }(e))))]
            }), rB(A, "gameDetailReferral", function() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "gameDetailReferral",
                    type: "gameDetailReferral",
                    context: rJ
                }, rW(rz((rB(e = {}, "attributionId", rq(rF.GameDetailReferral)), rB(e, "httpReferrer", document.referrer), rB(e, "contentType", P.Game), rB(e, "actionType", "OpenGameDetails"), rB(e, "interactionUuid", rL.uuidService.generateRandomUuid()), e), r))]
            }), rB(A, "sortDetailReferral", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "sortDetailReferral",
                    type: "sortDetailReferral",
                    context: rJ
                }, rW(rz({}, e))]
            }), rB(A, "navigateToSortLink", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "navigateToSortLink",
                    type: "navigateToSortLink",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "surveyInteraction", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "surveyInteraction",
                    type: "surveyInteraction",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "surveyImpression", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "surveyImpression",
                    type: "surveyImpression",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "interestCatcherClick", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "interestCatcherClick",
                    type: "interestCatcherClick",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "filterImpressions", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "filterImpressions",
                    type: "filterImpressions",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "gamesFilterClick", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return [{
                    name: "gamesFilterClick",
                    type: "gamesFilterClick",
                    context: rZ
                }, rW(rz({}, e))]
            }), rB(A, "requestRefundClick", function(e) {
                return [{
                    name: "requestRefundClick",
                    type: "requestRefundClick",
                    context: rZ
                }, rW(rB({}, "placeId", e.placeId))]
            }), rB(A, "gameTileOverflowMenuAction", function(e, r) {
                return [{
                    name: "gameTileOverflowMenuAction",
                    type: "gameTileOverflowMenuAction",
                    context: rH(r)
                }, r_(rz({}, e))]
            }), rB(A, "notInterestedFeedbackFormAction", function(e, r) {
                return [{
                    name: "notInterestedFeedbackFormAction",
                    type: "notInterestedFeedbackFormAction",
                    context: rH(r)
                }, r_(rz({}, e))]
            }), rB(A, "mediaGalleryMediaChanged", function(e) {
                return [{
                    name: "mediaGalleryMediaChanged",
                    type: "mediaGalleryMediaChanged",
                    context: rZ
                }, r_(rz({}, e))]
            }), rB(A, "querySuggestionClicked", function(e) {
                return [{
                    name: "querySuggestionClicked",
                    type: "querySuggestionClicked",
                    context: rZ
                }, r_(rz({}, e))]
            }), rB(A, "queryImpressions", function(e) {
                return [{
                    name: "queryImpressions",
                    type: "queryImpressions",
                    context: rZ
                }, r_(rz({}, e))]
            });
            var rY = rM.jsClientDeviceIdentifier.isIE11,
                rX = (0, rD.getDeviceMeta)(),
                rK = rX.deviceType,
                r0 = rX.isUWPApp,
                r1 = rX.isInApp,
                r2 = rX.isChromeOs,
                r4 = function() {
                    var e = /\/games\/(\d+)\//g.exec(window.location.pathname);
                    return e ? +e[1] : null
                },
                r3 = function(e, r, t, n, i, a) {
                    var o, s, c, l = r.instanceId,
                        u = r.accessCode,
                        d = performance.now();
                    null == (o = window.EventTracker) || o.start(rm.PRIVATE_SERVER_JOIN);
                    var v = (null == (s = window.Roblox.GameLauncher) ? void 0 : s.isJoinAttemptIdEnabled()) ? rL.uuidService.generateRandomUuid() : void 0,
                        m = "".concat(t, "ServerListJoin"),
                        f = {
                            universeId: a,
                            placeId: e,
                            pid: e,
                            joinAttemptId: v
                        },
                        p = function() {
                            var e = t === e_.Vip.key ? {
                                    isPrivateServerJoin: !0,
                                    isServerOwnedByPlayer: i
                                } : {},
                                r = r$({
                                    attributionId: rq(rQ.GameDetailReferral)
                                }, f, e);
                            (0, rO.sendEventWithTarget)("playGameClicked", m, r, rO.targetTypes.WWW)
                        };
                    if ("computer" === rK && !r0 && !r2 || "tablet" === rK && rY || r0) return function() {
                        var r, i, a, o, s, c, h, g;
                        if (p(), (0, rO.sendEventWithTarget)("gamePlayIntent", m, r$({
                                lType: "protocol",
                                refuid: null,
                                pg: "gameDetail"
                            }, f), rO.targetTypes.WWW), t === e_.friend.key) {
                            rh(rm.PRIVATE_SERVER_JOIN, rf.GAME_TAB, performance.now() - d), null == (r = window.EventTracker) || r.endSuccess(rm.PRIVATE_SERVER_JOIN), null == (i = window.Roblox.GameLauncher) || i.followPlayerIntoGame(n.filter(function(e) {
                                return null !== e.id && e.id !== rM.authenticatedUser.id
                            })[0].id, v, m);
                            return
                        }
                        if (u) {
                            rh(rm.PRIVATE_SERVER_JOIN, rf.GAME_TAB, performance.now() - d), null == (a = window.EventTracker) || a.endSuccess(rm.PRIVATE_SERVER_JOIN), null == (s = window.Roblox.GameLauncher) || s.joinPrivateGame(e, u, void 0, v, (null == (o = window.Roblox.GameLauncher) ? void 0 : o.isJoinAttemptIdEnabled()) ? m : void 0);
                            return
                        }
                        l && (rh(rm.PRIVATE_SERVER_JOIN, rf.GAME_TAB, performance.now() - d), null == (c = window.EventTracker) || c.endSuccess(rm.PRIVATE_SERVER_JOIN), null == (g = window.Roblox.GameLauncher) || g.joinGameInstance(e, l, !1, !1, v, (null == (h = window.Roblox.GameLauncher) ? void 0 : h.isJoinAttemptIdEnabled()) ? m : void 0))
                    };
                    var h = "";
                    return h = r1 ? (0, eN.getUrlWithQueries)("/games/start", {
                            placeId: e
                        }) : "robloxmobile://placeID=".concat(e), l && (h += "&gameInstanceId=".concat(l)), u && (h += "&accessCode=".concat(u)), (null == (c = window.Roblox.GameLauncher) ? void 0 : c.isJoinAttemptIdEnabled()) && v && (h += "&joinAttemptId=".concat(v, "&joinAttemptOrigin=").concat(m)),
                        function() {
                            p(), window.location.href = h
                        }
                },
                r5 = function(e, r) {
                    var t = r;
                    return e.forEach(function(e) {
                        e.owner.id === rM.authenticatedUser.id && (t -= 1)
                    }), t > 0
                };

            function r8(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function r9(e) {
                var r, t = e.translate,
                    n = e.showModal,
                    i = e.closeModal,
                    a = e.expirationDate,
                    o = e.cancelPrivateServer,
                    s = e.systemFeedbackService,
                    c = e.setSubscription,
                    l = (r = (0, F.useState)(!1), function(e) {
                        if (Array.isArray(e)) return e
                    }(r) || function(e, r) {
                        var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var a = [],
                                o = !0,
                                s = !1;
                            try {
                                for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), a.length !== r); o = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    o || null == i.return || i.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return a
                        }
                    }(r, 2) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e) return r8(e, 2);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r8(e, r)
                        }
                    }(r, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = l[0],
                    d = l[1],
                    v = (0, M.jsx)("p", {
                        children: t(eB.cancelServerText, {
                            date: a
                        })
                    }),
                    m = (0, F.useCallback)(function() {
                        d(!0), o().then(function(e) {
                            c(e.data), s.success(t(eB.serverCancellationSuccess) || "Server renewal successfully canceled")
                        }).catch(function(e) {
                            var r = e.data;
                            if ((null == (t = r.errors) ? void 0 : t.length) > 0) {
                                var t, n, i = r.errors[0];
                                s.warning(null != (n = i.userFacingMessage) ? n : i.message)
                            }
                        }).finally(function() {
                            d(!1), i(!0)
                        })
                    }, [o, i, c, s, t]);
                return (0, M.jsx)(H.SimpleModal, {
                    show: n,
                    title: t(eB.cancelPrivateServerText),
                    body: v,
                    actionButtonText: t(eB.confirmCancelText),
                    neutralButtonText: t(eB.doNotCancelText),
                    onAction: m,
                    onClose: i,
                    onNeutral: i,
                    actionButtonShow: !0,
                    loading: u
                })
            }
            r9.propTypes = {
                translate: eH().func.isRequired,
                showModal: eH().bool.isRequired,
                closeModal: eH().func.isRequired,
                expirationDate: eH().string.isRequired,
                cancelPrivateServer: eH().func.isRequired,
                systemFeedbackService: eH().shape({
                    success: eH().func.isRequired,
                    warning: eH().func.isRequired
                }).isRequired,
                setSubscription: eH().func.isRequired
            };
            var r6 = (0, k.withTranslations)(r9, eX);

            function r7(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function te(e) {
                var r, t = e.className,
                    n = e.translate,
                    i = e.gameId,
                    a = e.vipServerId,
                    o = e.isOwner,
                    s = e.canManagePlace,
                    c = e.shutdownServer,
                    l = e.subscription,
                    u = e.setSubscription,
                    d = e.isLoading,
                    v = e.systemFeedbackService,
                    m = e.universeId,
                    f = (r = (0, F.useState)(!1), function(e) {
                        if (Array.isArray(e)) return e
                    }(r) || function(e, r) {
                        var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var a = [],
                                o = !0,
                                s = !1;
                            try {
                                for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), a.length !== r); o = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    o || null == i.return || i.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return a
                        }
                    }(r, 2) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e) return r7(e, 2);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r7(e, r)
                        }
                    }(r, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    p = f[0],
                    h = f[1],
                    g = a > 0,
                    b = g && o,
                    y = null == z(),
                    S = null !== i && (!g && s || b),
                    w = b && l.active;
                return b || S ? (0, M.jsxs)("div", {
                    className: t,
                    children: [(0, M.jsx)(H.Popover, {
                        id: "game-instance-dropdown-menu",
                        button: (0, M.jsx)(H.IconButton, {
                            iconName: "more",
                            size: H.IconButton.sizes.small,
                            isDisabled: d
                        }),
                        trigger: "click",
                        placement: "bottom",
                        children: (0, M.jsxs)("ul", {
                            className: "dropdown-menu",
                            role: "menu",
                            children: [b && (0, M.jsx)("li", {
                                children: (0, M.jsx)(H.Link, {
                                    url: e3(a, y ? m : void 0),
                                    className: "rbx-private-server-configure",
                                    children: n(eB.configureServerText)
                                })
                            }), S && (0, M.jsx)("li", {
                                children: (0, M.jsx)("button", {
                                    type: "button",
                                    onClick: c,
                                    className: "rbx-private-server-shutdown rbx-private-server-shutdown",
                                    children: n(eB.shutdownServerText)
                                })
                            }), w && (0, M.jsx)("li", {
                                children: (0, M.jsx)(H.Button, {
                                    className: "rbx-private-server-cancel",
                                    onClick: function() {
                                        return h(!0)
                                    },
                                    size: H.Button.sizes.default,
                                    width: H.Button.widths.full,
                                    variant: H.Button.variants.default,
                                    isDisabled: d,
                                    children: n(eB.cancelText)
                                })
                            })]
                        })
                    }), w && (0, M.jsx)(r6, {
                        translate: n,
                        showModal: p,
                        closeModal: function() {
                            return h(!1)
                        },
                        expirationDate: new Date(l.expirationDate).toLocaleString("default", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }),
                        cancelPrivateServer: function() {
                            return rn(a, !1, l.price)
                        },
                        systemFeedbackService: v,
                        setSubscription: u
                    })]
                }) : (0, M.jsx)(F.Fragment, {})
            }

            function tr(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function tt(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return tr(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tr(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            te.defaultProps = {
                className: "",
                gameId: null,
                vipServerId: 0,
                isOwner: !1,
                canManagePlace: !1,
                subscription: {},
                universeId: void 0
            }, te.propTypes = {
                className: eH().string,
                translate: eH().func.isRequired,
                gameId: eH().string,
                vipServerId: eH().number,
                isOwner: eH().bool,
                canManagePlace: eH().bool,
                shutdownServer: eH().func.isRequired,
                subscription: eH().shape({
                    active: eH().bool,
                    expired: eH().bool,
                    expirationDate: eH().string,
                    price: eH().number,
                    canRenew: eH().bool,
                    hasInsufficientFunds: eH().bool,
                    hasRecurringProfile: eH().bool,
                    hasPriceChanged: eH().bool
                }),
                setSubscription: eH().func.isRequired,
                isLoading: eH().bool.isRequired,
                systemFeedbackService: eH().shape({
                    success: eH().func.isRequired,
                    warning: eH().func.isRequired
                }).isRequired,
                universeId: eH().number
            };
            var tn = window.RobloxItemPurchase.PriceLabel;

            function ti(e) {
                var r = e.translate,
                    t = e.placeName,
                    n = e.creatorName,
                    i = e.price,
                    a = e.renewPrivateServer,
                    o = e.isLoading,
                    s = e.isDisabled,
                    c = tt((0, F.useState)(!1), 2),
                    l = c[0],
                    u = c[1],
                    d = tt((0, F.useState)(!1), 2),
                    v = d[0],
                    m = d[1],
                    f = (0, M.jsxs)(F.Fragment, {
                        children: [(0, M.jsx)("p", {
                            className: "renew-server-modal-body-text",
                            children: r(eB.confirmEnableFuturePaymentsText, {
                                placeName: t,
                                creatorName: n
                            })
                        }), (0, M.jsx)("p", {
                            className: "renew-server-modal-body-text",
                            dangerouslySetInnerHTML: {
                                __html: r(eB.startRenewingPrivateServerPrice, {
                                    price: (0, eV.renderToString)((0, M.jsx)(tn, {
                                        price: i
                                    }))
                                })
                            }
                        })]
                    }),
                    p = (0, F.useCallback)(function() {
                        u(!1)
                    }, []),
                    h = (0, F.useCallback)(function() {
                        p(), m(!0), a().finally(function() {
                            m(!1)
                        })
                    }, [a]);
                return (0, M.jsxs)(F.Fragment, {
                    children: [(0, M.jsx)(H.Button, {
                        className: "rbx-private-server-renew",
                        onClick: function() {
                            return u(!0)
                        },
                        size: H.Button.sizes.extraSmall,
                        width: H.Button.widths.full,
                        variant: H.Button.variants.control,
                        isDisabled: s || o || v,
                        children: r(eB.renewServerListText)
                    }), (0, M.jsx)(H.SimpleModal, {
                        show: l,
                        title: r(eB.renewPrivateServerTitle),
                        body: f,
                        actionButtonText: r(eB.renewServerListText),
                        neutralButtonText: r(eB.cancelText),
                        onAction: h,
                        onClose: p,
                        onNeutral: p,
                        actionButtonShow: !0
                    })]
                })
            }
            ti.propTypes = {
                translate: eH().func.isRequired,
                placeName: eH().string.isRequired,
                creatorName: eH().string.isRequired,
                price: eH().number.isRequired,
                renewPrivateServer: eH().func.isRequired,
                isLoading: eH().bool.isRequired,
                isDisabled: eH().bool
            }, ti.defaultProps = {
                isDisabled: !1
            };
            var ta = (0, k.withTranslations)(ti, eX);

            function to(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function ts(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return to(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return to(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tc(e) {
                var r = e.translate,
                    t = e.privateServerId,
                    n = e.isPaymentCancelled,
                    i = e.isInsufficientFunds,
                    a = e.isServerInactive,
                    o = e.canRenew,
                    s = e.setSubscription,
                    c = e.isLoading,
                    l = e.systemFeedbackService,
                    u = e.placeName,
                    d = e.price,
                    v = e.creatorName,
                    m = document.getElementById("ItemPurchaseAjaxData"),
                    f = null == m ? void 0 : m.getAttribute("data-user-balance-robux"),
                    p = ts((0, F.useState)(null != f ? f : null), 2),
                    h = p[0],
                    g = p[1],
                    b = ts((0, F.useState)(!0), 2),
                    y = b[0],
                    S = b[1];
                (0, F.useEffect)(function() {
                    null === h && (null === rM.authenticatedUser || void 0 === rM.authenticatedUser ? void 0 : rM.authenticatedUser.id) ? ri(rM.authenticatedUser.id).then(function(e) {
                        g(e.robux), S(!1)
                    }, function() {
                        S(!1)
                    }) : S(!1)
                }, []);
                var w = null !== h && h < d,
                    x = (0, F.useCallback)(function() {
                        return new Promise(function(e) {
                            rn(t, !0, d).then(function(e) {
                                s(e.data), l.success(r(eB.renewSubscriptionSuccess) || "Successfully renewed private server")
                            }, function(e) {
                                var t = e.data;
                                if ((null == (n = t.errors) ? void 0 : n.length) > 0) {
                                    var n, i, a = t.errors[0];
                                    l.warning(null != (i = a.userFacingMessage) ? i : a.message)
                                } else l.warning(r(eB.renewSubscriptionError) || "Unable to renew subscription.")
                            }).finally(function() {
                                e()
                            })
                        })
                    }, [t, d, s, r, l]);
                return (0, M.jsxs)(F.Fragment, {
                    children: [n && (0, M.jsx)("div", {
                        className: "rbx-private-server-subscription-alert text-alert",
                        children: (0, M.jsx)("span", {
                            className: "rbx-private-server-subscription-alert-text",
                            children: r(eB.renewalCanceledText) || "Renewal Canceled"
                        })
                    }), i && (0, M.jsxs)("div", {
                        className: "rbx-private-server-insufficient-funds text-alert",
                        children: [(0, M.jsx)("span", {
                            className: "icon-remove"
                        }), r(eB.insufficientFunds)]
                    }), w && !i && (0, M.jsxs)("div", {
                        className: "rbx-private-server-subscription-alert text-alert",
                        children: [(0, M.jsx)("span", {
                            className: "icon-remove"
                        }), r(eB.headingInsufficientFunds)]
                    }), a && (0, M.jsxs)("div", {
                        className: "rbx-private-server-inactive",
                        children: [(0, M.jsx)("span", {
                            className: "icon-turn-off"
                        }), r(eB.inactiveServerText)]
                    }), o && (0, M.jsx)(ta, {
                        placeName: u,
                        creatorName: v,
                        price: d,
                        renewPrivateServer: x,
                        isLoading: c,
                        isDisabled: y || w
                    })]
                })
            }
            tc.propTypes = {
                translate: eH().func.isRequired,
                privateServerId: eH().number.isRequired,
                isPaymentCancelled: eH().bool.isRequired,
                isInsufficientFunds: eH().bool.isRequired,
                isServerInactive: eH().bool.isRequired,
                canRenew: eH().bool.isRequired,
                setSubscription: eH().func.isRequired,
                isLoading: eH().bool.isRequired,
                systemFeedbackService: eH().shape({
                    success: eH().func.isRequired,
                    warning: eH().func.isRequired
                }).isRequired,
                placeName: eH().string.isRequired,
                price: eH().number.isRequired,
                creatorName: eH().string.isRequired
            };
            var tl = (0, k.withTranslations)(tc, eY),
                tu = window.RobloxBadges;

            function td(e) {
                var r = e.ownerUserId,
                    t = e.ownerName,
                    n = e.ownerHasVerifiedBadge;
                return (0, M.jsxs)("div", {
                    className: "rbx-private-owner",
                    children: [(0, M.jsx)(H.Link, {
                        title: t,
                        url: e4(r),
                        className: "avatar avatar-card-fullbody owner-avatar",
                        children: (0, M.jsx)(eW.Thumbnail2d, {
                            type: eW.ThumbnailTypes.avatarHeadshot,
                            size: eW.DefaultThumbnailSize,
                            targetId: r,
                            containerClass: "avatar-card-image"
                        })
                    }), (0, M.jsx)(H.Link, {
                        url: e4(r),
                        className: "text-name text-overflow",
                        children: (0, M.jsx)(tu.VerifiedBadgeStringContainer, {
                            size: tu.BadgeSizes.CAPTIONHEADER,
                            showVerifiedBadge: n,
                            text: t
                        })
                    })]
                })
            }
            td.propTypes = {
                ownerUserId: eH().number.isRequired,
                ownerName: eH().string.isRequired,
                ownerHasVerifiedBadge: eH().bool.isRequired
            };

            function tv(e) {
                var r = e.translate,
                    t = e.players,
                    n = (0, F.useMemo)(function() {
                        return t.filter(function(e) {
                            return null !== e.id && e.id !== rM.authenticatedUser.id
                        })
                    }, [t]),
                    i = function(e) {
                        return void 0 === e ? (0, M.jsx)(F.Fragment, {}) : (0, M.jsx)(H.Link, {
                            href: e4(e.id),
                            className: "text-name",
                            children: e.displayName
                        })
                    },
                    a = (0, F.useMemo)(function() {
                        if (0 === n.length) return "";
                        var e = (0, eV.renderToString)(i(n[0]));
                        if (1 === n.length) return r(eB.connectionInServerLabel, {
                            friend: e
                        }) || "Connection in this server: ".concat(e);
                        var t = (0, eV.renderToString)(i(n[1]));
                        if (2 === n.length) return r(eB.twoConnectionsInServerLabel, {
                            firstFriend: e,
                            secondFriend: t
                        }) || "Connections in this server: ".concat(e, " and ").concat(t);
                        var a = n.length - 2;
                        return r(eB.manyConnectionsInServerLabel, {
                            firstFriend: e,
                            secondFriend: t,
                            numOtherFriends: a
                        })
                    }, [n, r]);
                return 0 === n.length ? (0, M.jsx)(F.Fragment, {}) : (0, M.jsx)("div", {
                    className: "text friends-in-server-label",
                    "aria-label": a.replace(/<[^>]*>/g, ""),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            }

            function tm(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            tv.propTypes = {
                translate: eH().func.isRequired,
                players: eH().arrayOf(eH().any).isRequired
            };

            function tf(e) {
                var r = e.maxPlayerCount,
                    t = e.currentPlayerCount;
                if (!r) return (0, M.jsx)(F.Fragment, {});
                var n = Math.round(t / r * 100);
                return (0, M.jsx)("div", {
                    className: "server-player-count-gauge border",
                    children: (0, M.jsx)("div", {
                        className: "gauge-inner-bar border",
                        style: {
                            width: "".concat(n, "%")
                        }
                    })
                })
            }

            function tp(e) {
                var r = e.player;
                return (0, M.jsx)("span", {
                    className: "avatar avatar-headshot-md player-avatar",
                    children: null == r.id ? (0, M.jsx)(eW.Thumbnail2d, {
                        type: eW.ThumbnailTypes.avatarHeadshot,
                        token: r.playerToken,
                        containerClass: "avatar-card-image"
                    }) : (0, M.jsx)(H.Link, {
                        className: "avatar-card-link",
                        href: e4(r.id),
                        children: (0, M.jsx)(eW.Thumbnail2d, {
                            type: eW.ThumbnailTypes.avatarHeadshot,
                            targetId: r.id,
                            containerClass: "avatar-card-image",
                            altName: r.displayName
                        })
                    })
                }, r.playerToken)
            }

            function th(e) {
                var r, t = e.id,
                    n = e.translate,
                    i = e.cssKey,
                    a = e.serverListType,
                    o = e.placeId,
                    s = e.gameServerStatus,
                    c = e.canManagePlace,
                    l = e.name,
                    u = e.vipServerId,
                    d = e.vipServerSubscription,
                    v = e.accessCode,
                    m = e.showSlowGameMessage,
                    f = e.owner,
                    p = e.players,
                    h = e.onShutdownServerSuccess,
                    g = e.systemFeedbackService,
                    b = e.isLoading,
                    y = e.setIsLoading,
                    S = e.maxPlayers,
                    w = e.currentPlayersCount,
                    x = e.privateServerNewJoinsDisallowed,
                    I = e.placeName,
                    P = e.price,
                    T = e.creatorName,
                    j = e.universeId,
                    R = (r = (0, F.useState)(d), function(e) {
                        if (Array.isArray(e)) return e
                    }(r) || function(e, r) {
                        var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var a = [],
                                o = !0,
                                s = !1;
                            try {
                                for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), a.length !== r); o = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    o || null == i.return || i.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return a
                        }
                    }(r, 2) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e) return tm(e, 2);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tm(e, r)
                        }
                    }(r, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    C = R[0],
                    N = R[1],
                    E = (null == f ? void 0 : f.id) === rM.authenticatedUser.id,
                    A = !!u,
                    L = A && !v;
                (0, F.useEffect)(function() {
                    N(d)
                }, [d]);
                var O = null == p ? void 0 : p.slice(0, 5),
                    D = u > 0,
                    k = D && E,
                    q = null !== t,
                    U = q && (!D && c || k),
                    _ = w - O.length > 0 && "+".concat(w - O.length),
                    G = q ? t.substring(9, 18) : "",
                    B = n(eB.serverIdText, {
                        serverId: G
                    }) || "ID: ".concat(G);
                return (0, M.jsx)("li", {
                    className: "rbx-".concat(i, "game-server-item col-md-3 col-sm-4 col-xs-6"),
                    children: (0, M.jsxs)("div", {
                        className: "card-item card-item-".concat(i, "server"),
                        children: [(0, M.jsxs)("div", {
                            className: "player-thumbnails-container",
                            children: [O.map(function(e) {
                                return (0, M.jsx)(tp, {
                                    player: e
                                }, e.playerToken)
                            }), !!_ && (0, M.jsx)("span", {
                                className: "avatar avatar-headshot-md player-avatar hidden-players-placeholder",
                                children: _
                            })]
                        }), (0, M.jsxs)("div", {
                            className: rA()("rbx-".concat(i, "game-server-details"), "game-server-details", {
                                "border-right": a === e_.Vip.key
                            }),
                            children: [(!!l || !!(k || U)) && (0, M.jsxs)("div", {
                                className: "section-header",
                                children: [l && (0, M.jsx)("span", {
                                    className: "font-bold",
                                    children: l
                                }), (0, M.jsx)(te, {
                                    className: "link-menu rbx-".concat(i, "game-server-menu"),
                                    translate: n,
                                    placeId: o,
                                    gameId: t,
                                    vipServerId: u,
                                    isOwner: E,
                                    canManagePlace: c,
                                    shutdownServer: function() {
                                        b && g.warning(n(eB.shutdownServerError)), y(!0), re(o, t, u).then(function() {
                                            g.success(n(eB.shutdownServerSuccess)), h()
                                        }, function() {
                                            g.warning(n(eB.shutdownServerError))
                                        }).finally(function() {
                                            y(!1)
                                        })
                                    },
                                    subscription: C,
                                    setSubscription: N,
                                    isLoading: b,
                                    systemFeedbackService: g,
                                    universeId: j
                                })]
                            }), A && (0, M.jsx)(td, {
                                ownerUserId: f.id,
                                ownerName: f.displayName,
                                ownerHasVerifiedBadge: f.hasVerifiedBadge
                            }), (0, M.jsx)("div", {
                                className: "text-info rbx-game-status rbx-".concat(i, "game-server-status text-overflow"),
                                children: s
                            }), (0, M.jsx)(tf, {
                                maxPlayerCount: S,
                                currentPlayerCount: w
                            }), a === e_.friend.key && (0, M.jsx)(tv, {
                                translate: n,
                                players: p
                            }), m && (0, M.jsxs)("div", {
                                className: "rbx-".concat(i, "game-server-alert"),
                                children: [(0, M.jsx)("span", {
                                    className: "icon-remove"
                                }), n(eB.slowGameWarning)]
                            }), A && (0, M.jsx)(tl, {
                                privateServerId: u,
                                isPaymentCancelled: !(null == C ? void 0 : C.active) && (null == C ? void 0 : C.price) > 0,
                                isInsufficientFunds: null == C ? void 0 : C.hasInsufficientFunds,
                                isServerInactive: L,
                                canRenew: (null == C ? void 0 : C.canRenew) && !(null == C ? void 0 : C.active),
                                setSubscription: N,
                                isLoading: b,
                                systemFeedbackService: g,
                                placeName: I,
                                price: P,
                                creatorName: T
                            }), !L && !(null == C ? void 0 : C.isExpired) && (0, M.jsx)("span", {
                                "data-placeid": o,
                                children: (0, M.jsx)(H.Button, {
                                    className: "btn-full-width btn-control-xs rbx-".concat(i, "game-server-join game-server-join-btn"),
                                    onClick: x && 0 === w ? function() {
                                        g.warning(n(eB.atCapacityError))
                                    } : r3(o, {
                                        instanceId: t,
                                        accessCode: v
                                    }, a, p, E, j),
                                    isDisabled: b,
                                    children: n(eB.joinServerText)
                                })
                            }), a === e_.public.key && (0, M.jsx)("div", {
                                className: "server-id-text text-info xsmall",
                                children: B
                            })]
                        })]
                    })
                })
            }

            function tg(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.forEach(function(r) {
                        var n;
                        n = t[r], r in e ? Object.defineProperty(e, r, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = n
                    })
                }
                return e
            }

            function tb(e, r) {
                return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, n)
                    }
                    return t
                })(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }), e
            }
            th.defaultProps = {
                id: null,
                cssKey: "",
                canManagePlace: !1,
                name: "",
                vipServerId: 0,
                accessCode: "",
                showSlowGameMessage: !1,
                owner: void 0,
                vipServerSubscription: void 0,
                players: [],
                maxPlayers: 0,
                currentPlayersCount: 0,
                privateServerNewJoinsDisallowed: !1
            }, th.propTypes = {
                id: eH().string,
                translate: eH().func.isRequired,
                cssKey: eH().string,
                serverListType: eH().string.isRequired,
                placeId: eH().number.isRequired,
                name: eH().string,
                vipServerId: eH().number,
                maxPlayers: eH().number,
                currentPlayersCount: eH().number,
                vipServerSubscription: {
                    canRenew: eH().bool.isRequired,
                    active: eH().bool.isRequired,
                    hasInsufficientFunds: eH().bool.isRequired,
                    price: eH().number.isRequired,
                    expired: eH().bool.isRequired
                },
                accessCode: eH().string,
                gameServerStatus: eH().string.isRequired,
                canManagePlace: eH().bool,
                showSlowGameMessage: eH().bool,
                owner: {
                    id: eH().number.isRequired,
                    name: eH().string.isRequired,
                    displayName: eH().string.isRequired,
                    hasVerifiedBadge: eH().bool.isRequired
                },
                players: eH().arrayOf(eH().any),
                onShutdownServerSuccess: eH().func.isRequired,
                isLoading: eH().bool.isRequired,
                setIsLoading: eH().func.isRequired,
                systemFeedbackService: eH().shape({
                    success: eH().func.isRequired,
                    warning: eH().func.isRequired
                }).isRequired,
                privateServerNewJoinsDisallowed: eH().bool,
                placeName: eH().string.isRequired,
                price: eH().number.isRequired,
                creatorName: eH().string.isRequired,
                universeId: eH().number.isRequired
            };
            var ty = "Desc",
                tS = "Asc",
                tw = (0, k.withTranslations)(function(e) {
                    var r = e.translate,
                        t = e.options,
                        n = e.setOptions,
                        i = e.isLoading,
                        a = void 0 !== i && i;
                    return (0, M.jsxs)("div", {
                        className: "server-list-options",
                        children: [(0, M.jsxs)("div", {
                            className: "select-group",
                            children: [(0, M.jsx)("label", {
                                className: "select-label text-label",
                                htmlFor: "sort-select",
                                children: r(eB.numberOfPlayers) || "Number of Players"
                            }), (0, M.jsxs)("div", {
                                className: "rbx-select-group select-group",
                                children: [(0, M.jsxs)("select", {
                                    onChange: function(e) {
                                        (0, rO.sendEventWithTarget)("serverListOptionsInteraction", "sortSelect", {
                                            pid: r4(),
                                            sort: e.currentTarget.value
                                        }, rO.targetTypes.WWW), n(function(r) {
                                            return tb(tg({}, r), {
                                                sortOrder: e.currentTarget.value
                                            })
                                        })
                                    },
                                    onFocus: function() {
                                        (0, rO.sendEventWithTarget)("serverListOptionsInteraction", "sortDropdown", {
                                            pid: r4()
                                        }, rO.targetTypes.WWW)
                                    },
                                    disabled: a,
                                    value: t.sortOrder,
                                    id: "sort-select",
                                    "data-testid": "sort-select",
                                    className: "input-field rbx-select select-option",
                                    children: [(0, M.jsx)("option", {
                                        value: ty,
                                        children: r(eB.descending) || "Descending"
                                    }), (0, M.jsx)("option", {
                                        value: tS,
                                        children: r(eB.ascending) || "Ascending"
                                    })]
                                }), (0, M.jsx)("span", {
                                    className: "icon-arrow icon-down-16x16"
                                })]
                            })]
                        }), (0, M.jsxs)("div", {
                            className: "checkbox",
                            children: [(0, M.jsx)("input", {
                                onChange: function(e) {
                                    (0, rO.sendEventWithTarget)("serverListOptionsInteraction", "filterSelect", {
                                        pid: r4(),
                                        checked: e.currentTarget.checked
                                    }, rO.targetTypes.WWW), n(function(r) {
                                        return tb(tg({}, r), {
                                            excludeFullGames: e.currentTarget.checked
                                        })
                                    })
                                },
                                disabled: a,
                                type: "checkbox",
                                id: "filter-checkbox",
                                "data-testid": "filter-checkbox",
                                checked: t.excludeFullGames
                            }), (0, M.jsx)("label", {
                                className: "checkbox-label text-label",
                                htmlFor: "filter-checkbox",
                                children: r(eB.hideFullServers) || "Hide Full Servers"
                            })]
                        })]
                    })
                }, eY);

            function tx(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function tI(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return tx(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tx(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tP = tI((0, H.createSystemFeedback)(), 2),
                tT = tP[0],
                tj = tP[1];

            function tR(e) {
                var r = e.gameInstances,
                    t = e.handleGameInstanceShutdownAtIndex,
                    n = e.headerTitle,
                    i = e.isLoading,
                    a = e.loadMoreGameInstances,
                    o = e.loadingError,
                    s = e.placeId,
                    c = e.refreshGameInstances,
                    l = e.setIsLoading,
                    u = e.showLoadMoreButton,
                    d = e.translate,
                    v = e.type,
                    m = e.userCanManagePlace,
                    f = e.privateServerNewJoinsDisallowed,
                    p = e.placeName,
                    h = e.price,
                    g = e.creatorName,
                    b = e.universeId,
                    y = "".concat(v, "-"),
                    S = 0 === r.length,
                    w = "rbx-".concat(y, "running-games-footer"),
                    x = "rbx-".concat(y, "running-games"),
                    I = "card-list rbx-".concat(y, "game-server-item-container"),
                    P = "rbx-".concat(y, "game-server-item-container"),
                    T = (0, F.useMemo)(function() {
                        var e = r.length % 4;
                        return e > 0 && u ? r.slice(0, -1 * e) : r
                    }, [r, u]),
                    j = tI((0, F.useState)(eG), 2),
                    R = j[0],
                    C = j[1];
                return (0, F.useEffect)(function() {
                    null == c || c(R)
                }, [R]), (0, M.jsxs)(F.Fragment, {
                    children: [(0, M.jsx)(tT, {}), (0, M.jsxs)("div", {
                        id: x,
                        className: "stack server-list-section",
                        "data-placeid": s,
                        "data-showshutdown": !0,
                        children: [n && (0, M.jsxs)("div", {
                            className: "container-header",
                            children: [(0, M.jsxs)("div", {
                                className: "server-list-container-header",
                                children: [(0, M.jsx)("h2", {
                                    className: "server-list-header",
                                    children: n
                                }), (0, M.jsx)(H.Button, {
                                    className: "btn-more rbx-refresh refresh-link-icon",
                                    isDisabled: i,
                                    onClick: function() {
                                        return c(R)
                                    },
                                    size: H.Button.sizes.extraSmall,
                                    variant: H.Button.variants.control,
                                    children: d(eB.privateServerRefreshText) || "Refresh"
                                })]
                            }), v === e_.public.key && (0, M.jsx)(tw, {
                                isLoading: i,
                                options: R,
                                setOptions: C,
                                translate: d
                            })]
                        }), S ? (0, M.jsx)("div", {
                            className: "section-content-off empty-game-instances-container",
                            children: i ? (0, M.jsx)(H.Loading, {}) : (0, M.jsx)("p", {
                                className: "no-servers-message",
                                children: o ? d(eB.loadServersError) || "Unable to load servers." : d(eB.noServersFoundText)
                            })
                        }) : (0, M.jsxs)(F.Fragment, {
                            children: [(0, M.jsx)("ul", {
                                id: P,
                                className: I,
                                children: T.map(function(e, r) {
                                    var n = e.accessCode,
                                        a = e.id,
                                        o = e.maxPlayers,
                                        c = e.name,
                                        u = e.owner,
                                        S = e.pfs,
                                        w = e.players,
                                        x = e.playing,
                                        I = e.vipServerId,
                                        P = e.vipServerSubscription;
                                    return (0, M.jsx)(th, {
                                        accessCode: n,
                                        canManagePlace: m,
                                        cssKey: y,
                                        currentPlayersCount: x || w.length,
                                        gameServerStatus: d(eB.playerCountText, {
                                            currentPlayers: x || w.length,
                                            maximumAllowedPlayers: o
                                        }),
                                        id: a,
                                        isLoading: i,
                                        maxPlayers: o,
                                        name: c,
                                        onShutdownServerSuccess: function() {
                                            t(r)
                                        },
                                        owner: u,
                                        placeId: s,
                                        players: w,
                                        serverListType: v,
                                        setIsLoading: l,
                                        showSlowGameMessage: S < 15,
                                        systemFeedbackService: tj,
                                        translate: d,
                                        vipServerId: I,
                                        vipServerSubscription: P,
                                        privateServerNewJoinsDisallowed: f,
                                        placeName: p,
                                        price: h,
                                        creatorName: g,
                                        universeId: b
                                    }, I)
                                })
                            }), (0, M.jsx)("div", {
                                className: w,
                                children: u && (0, M.jsx)(H.Button, {
                                    className: "rbx-running-games-load-more",
                                    isDisabled: i,
                                    onClick: function() {
                                        return a(R)
                                    },
                                    type: "button",
                                    variant: H.Button.variants.control,
                                    width: H.Button.widths.full,
                                    children: d(eB.loadMoreButtonText)
                                })
                            })]
                        })]
                    })]
                })
            }
            tR.defaultProps = {
                showLoadMoreButton: !1,
                loadMoreButtonText: "",
                headerTitle: "",
                gameInstances: [],
                privateServerNewJoinsDisallowed: !1
            }, tR.propTypes = {
                translate: eH().func.isRequired,
                type: eH().string.isRequired,
                placeId: eH().number.isRequired,
                headerTitle: eH().string,
                loadMoreGameInstances: eH().func.isRequired,
                showLoadMoreButton: eH().bool,
                loadMoreButtonText: eH().string,
                gameInstances: eH().arrayOf(eH().any),
                refreshGameInstances: eH().func.isRequired,
                handleGameInstanceShutdownAtIndex: eH().func.isRequired,
                userCanManagePlace: eH().bool.isRequired,
                isLoading: eH().bool.isRequired,
                setIsLoading: eH().func.isRequired,
                loadingError: eH().bool.isRequired,
                privateServerNewJoinsDisallowed: eH().bool,
                placeName: eH().string.isRequired,
                price: eH().number.isRequired,
                creatorName: eH().string.isRequired,
                universeId: eH().number.isRequired
            };
            var tC = (0, k.withTranslations)(tR, eY);

            function tN(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function tE(e, r, t, n, i, a, o) {
                try {
                    var s = e[a](o),
                        c = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? r(c) : Promise.resolve(c).then(n, i)
            }

            function tA(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise(function(n, i) {
                        var a = e.apply(r, t);

                        function o(e) {
                            tE(a, n, i, o, s, "next", e)
                        }

                        function s(e) {
                            tE(a, n, i, o, s, "throw", e)
                        }
                        o(void 0)
                    })
                }
            }

            function tM(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), !r || a.length !== r); o = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return a
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return tN(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tN(e, r)
                    }
                }(e, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tL(e, r) {
                var t, n, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(c) {
                        var l = [s, c];
                        if (t) throw TypeError("Generator is already executing.");
                        for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                            if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                            switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                case 0:
                                case 1:
                                    i = l;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: l[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, n = l[1], l = [0];
                                    continue;
                                case 7:
                                    l = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                        a.label = l[1];
                                        break
                                    }
                                    if (6 === l[0] && a.label < i[1]) {
                                        a.label = i[1], i = l;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(l);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            l = r.call(e, a)
                        } catch (e) {
                            l = [6, e], n = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & l[0]) throw l[1];
                        return {
                            value: l[0] ? l[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var tO = function(e) {
                    return JSON.parse(JSON.stringify(e))
                },
                tD = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 ? arguments[2] : void 0,
                        n = tM((0, F.useState)(!1), 2),
                        i = n[0],
                        a = n[1],
                        o = tM((0, F.useState)(!1), 2),
                        s = o[0],
                        c = o[1],
                        l = tM((0, F.useState)([]), 2),
                        u = l[0],
                        d = l[1],
                        v = tM((0, F.useState)(null), 2),
                        m = v[0],
                        f = v[1],
                        p = tM((0, F.useState)(""), 2),
                        h = p[0],
                        g = p[1],
                        b = tM((0, F.useState)(!1), 2),
                        y = b[0],
                        S = b[1],
                        w = function(e, r) {
                            var t = tO(e),
                                n = {};
                            return t.forEach(function(e) {
                                void 0 !== e.id && (n[e.id] = e)
                            }), r.forEach(function(e) {
                                var r = n[e.id];
                                r ? Object.assign(r, e) : t.push(e)
                            }), t
                        },
                        x = (0, F.useCallback)(function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return tA(function() {
                                var s, l, v, m, p;
                                return tL(this, function(b) {
                                    switch (b.label) {
                                        case 0:
                                            if (i) throw Error("Cannot load more servers while a request is in flight");
                                            a(!0), c(!1), b.label = 1;
                                        case 1:
                                            return b.trys.push([1, 4, 5, 6]), [4, e(t, o ? "" : h, n)];
                                        case 2:
                                            return l = (s = b.sent().data).data, v = s.nextPageCursor, f(s.gameJoinRestricted), [4, Promise.all(l.map(function(e) {
                                                return tA(function() {
                                                    var t, n, i, a, o;
                                                    return tL(this, function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                if (void 0 === e.players && (e.players = []), n = e.players, i = e.playerTokens, a = {}, n.forEach(function(e) {
                                                                        a[e.playerToken] = e
                                                                    }), i.forEach(function(e) {
                                                                        null == a[e] && n.push({
                                                                            id: null,
                                                                            name: null,
                                                                            playerToken: e,
                                                                            displayName: null
                                                                        })
                                                                    }), !(r && e.vipServerId && (null == (t = e.owner) ? void 0 : t.id) === rM.authenticatedUser.id)) return [3, 4];
                                                                o = e.vipServerId, s.label = 1;
                                                            case 1:
                                                                return s.trys.push([1, 3, , 4]), [4, rt(o)];
                                                            case 2:
                                                                return e.vipServerSubscription = s.sent().data.subscription, [3, 4];
                                                            case 3:
                                                                return s.sent(), [3, 4];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    })
                                                })()
                                            }))];
                                        case 3:
                                            return b.sent(), d(o ? l : w(u, l)), g(v), S(!0), [3, 6];
                                        case 4:
                                            return b.sent(), d([]), g(""), c(!0), [3, 6];
                                        case 5:
                                            return n.startTime && (p = performance.now() - n.startTime, null == (m = window.EventTracker) || m.endSuccess(rm.PRIVATE_SERVER_LOAD), rh(rm.PRIVATE_SERVER_LOAD, rf.GAME_TAB, p)), a(!1), [7];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })()
                        }, [i, t, h, u, e, r]),
                        I = (0, F.useCallback)(function(e) {
                            if (i) throw Error("Cannot remove server from list while a request is in flight");
                            var r = tO(u);
                            r.splice(e, 1), d(r)
                        }, [i, u]),
                        P = (0, F.useCallback)(function(e) {
                            if (i) throw Error("Cannot clear server while a request is in flight");
                            var r = tO(u),
                                t = r[e];
                            t.playerTokens = [], t.players = [], t.playing = 0, t.id = null, d(r)
                        }, [i, u]),
                        T = (0, F.useCallback)(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (i) throw Error("Cannot refresh server list while a request is in flight");
                            x(e, !0)
                        }, [i, x]);
                    return {
                        servers: u,
                        loadMoreServers: x,
                        removeServerAtIndex: I,
                        clearServerAtIndex: P,
                        refreshServers: T,
                        hasNext: !!h,
                        isBusy: i,
                        setIsBusy: a,
                        hasError: s,
                        isReady: y,
                        joinRestricted: m
                    }
                },
                tk = eH().shape({
                    canCreateServer: eH().bool.isRequired,
                    placeId: eH().number.isRequired,
                    placeName: eH().string.isRequired,
                    price: eH().number.isRequired,
                    privateServerProductId: eH().number.isRequired,
                    privateServerLimit: eH().number.isRequired,
                    sellerId: eH().number.isRequired,
                    sellerName: eH().string.isRequired,
                    universeId: eH().number.isRequired,
                    userCanManagePlace: eH().bool.isRequired,
                    preopenCreatePrivateGame: eH().bool.isRequired
                }),
                tF = window.RobloxItemPurchase.PriceLabel;

            function tq(e) {
                var r, t = e.translate,
                    n = e.intl,
                    i = e.serverListMetadata,
                    a = i.canCreateServer,
                    o = i.placeId,
                    s = i.placeName,
                    c = i.price,
                    l = i.privateServerProductId,
                    u = i.sellerId,
                    d = i.sellerName,
                    v = i.universeId,
                    m = i.userCanManagePlace,
                    f = i.preopenCreatePrivateGame,
                    p = i.privateServerLimit,
                    h = tD(e7, !!c, o),
                    g = h.clearServerAtIndex,
                    b = h.hasError,
                    y = h.hasNext,
                    S = h.isBusy,
                    w = h.loadMoreServers,
                    x = h.refreshServers,
                    I = h.servers,
                    P = h.setIsBusy,
                    T = h.isReady,
                    j = h.joinRestricted;
                (0, F.useEffect)(function() {
                    x(eG)
                }, []);
                var R = r5(I, p),
                    C = 0 !== l,
                    N = '<a class="text-link" href="'.concat((r = n.getRobloxLocale(), (0, eN.getUrlWithLocale)("/info/vip-server", r)), '">').concat(t(eB.privateServerHeader), "</a>");
                return (0, M.jsxs)("div", {
                    id: "rbx-private-servers",
                    className: "stack",
                    children: [(0, M.jsxs)("div", {
                        className: "container-header",
                        children: [(0, M.jsx)("h2", {
                            children: t(eB.privateServerHeader)
                        }), C && (0, M.jsx)(H.Button, {
                            className: "btn-more rbx-refresh refresh-link-icon",
                            isDisabled: S,
                            onClick: function() {
                                return x()
                            },
                            size: H.Button.sizes.extraSmall,
                            variant: H.Button.variants.control,
                            children: t(eB.privateServerRefreshText)
                        }), (0, M.jsx)(H.Tooltip, {
                            content: t(eB.privateServerTooltipConnections),
                            id: "private-server-tooltip",
                            placement: "bottom",
                            children: (0, M.jsx)("span", {
                                className: "icon-moreinfo"
                            })
                        })]
                    }), C ? (0, M.jsxs)(F.Fragment, {
                        children: [(0, M.jsxs)("div", {
                            className: "create-server-banner section-content remove-panel",
                            children: [(0, M.jsxs)("div", {
                                className: "create-server-banner-text text",
                                children: [a && (0, M.jsx)("span", {
                                    className: "private-server-price",
                                    dangerouslySetInnerHTML: {
                                        __html: t(eB.privateServerPrice, {
                                            price: (0, eV.renderToString)((0, M.jsx)(tF, {
                                                price: c
                                            }))
                                        })
                                    }
                                }), (0, M.jsxs)("span", {
                                    className: "play-with-others-text",
                                    children: [t(eB.privateServerPlayWithConnections), (0, M.jsx)("br", {})]
                                })]
                            }), a && (0, M.jsx)(rN, {
                                privateServerTranslate: t,
                                refreshServers: x,
                                disabled: !T,
                                placeName: s,
                                universeId: v,
                                price: c,
                                canCreatePrivateServer: R,
                                sellerId: u,
                                sellerName: d,
                                productId: l,
                                preopenCreatePrivateGame: f
                            })]
                        }), (0, M.jsx)("div", {
                            className: "section tab-server-only",
                            children: (0, M.jsx)(tC, {
                                gameInstances: I,
                                handleGameInstanceShutdownAtIndex: g,
                                isLoading: S,
                                loadMoreGameInstances: w,
                                loadingError: b,
                                placeId: o,
                                setIsLoading: P,
                                showLoadMoreButton: y,
                                type: e_.Vip.key,
                                userCanManagePlace: m,
                                privateServerNewJoinsDisallowed: null != j && j,
                                placeName: s,
                                price: c,
                                creatorName: d,
                                universeId: v
                            })
                        })]
                    }) : (0, M.jsx)("div", {
                        className: "section-content-off",
                        dangerouslySetInnerHTML: {
                            __html: t(eB.privateServersNotSupported, {
                                vipServersLink: N
                            })
                        }
                    })]
                })
            }
            tq.propTypes = {
                intl: eH().shape({
                    getRobloxLocale: eH().func.isRequired
                }).isRequired,
                translate: eH().func.isRequired,
                serverListMetadata: tk.isRequired
            };
            var tU = (0, k.withTranslations)(tq, eX);

            function t_(e) {
                var r = e.type,
                    t = e.translate,
                    n = e.headerTitleResource,
                    i = e.getGameServers,
                    a = e.serverListMetadata,
                    o = a.placeId,
                    s = a.placeName,
                    c = a.price,
                    l = a.sellerName,
                    u = a.universeId,
                    d = a.userCanManagePlace,
                    v = tD(i, !1, o),
                    m = v.servers,
                    f = v.loadMoreServers,
                    p = v.refreshServers,
                    h = v.removeServerAtIndex,
                    g = v.hasNext,
                    b = v.isBusy,
                    y = v.setIsBusy,
                    S = v.hasError;
                return (0, M.jsx)(tC, {
                    type: r,
                    placeId: o,
                    gameInstances: m,
                    headerTitle: t(n),
                    showLoadMoreButton: g,
                    loadMoreGameInstances: f,
                    refreshGameInstances: p,
                    handleGameInstanceShutdownAtIndex: h,
                    userCanManagePlace: d,
                    isLoading: b,
                    setIsLoading: y,
                    loadingError: S,
                    placeName: s,
                    price: c,
                    creatorName: l,
                    universeId: u
                })
            }
            t_.propTypes = {
                type: eH().string.isRequired,
                translate: eH().func.isRequired,
                headerTitleResource: eH().string.isRequired,
                getGameServers: eH().func.isRequired,
                serverListMetadata: tk.isRequired
            };
            var tG = (0, k.withTranslations)(t_, eY),
                tB = (0, k.withTranslations)(function(e) {
                    var r = e.translate,
                        t = eU(),
                        n = t.serverListMetadata,
                        i = t.isLoading,
                        a = t.hasError,
                        o = t.refetchServerListMetadata;
                    return i ? (0, M.jsx)(H.Loading, {}) : a || !n ? (0, M.jsx)(ei, {
                        errorSubtext: r(eB.serversFailedToLoadText),
                        onRefresh: o
                    }) : (0, M.jsxs)(q().Fragment, {
                        children: [(0, M.jsx)(tU, {
                            serverListMetadata: n,
                            translate: void 0,
                            intl: void 0
                        }), (0, M.jsx)(tG, {
                            type: e_.friend.key,
                            getGameServers: e6,
                            headerTitleResource: eB.connectionsServersTitle,
                            serverListMetadata: n,
                            translate: void 0
                        }), (0, M.jsx)(tG, {
                            type: e_.public.key,
                            getGameServers: e9,
                            headerTitleResource: eB.publicServersTitle,
                            serverListMetadata: n,
                            translate: void 0
                        })]
                    })
                }, eY);

            function tV(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function tz() {
                var e, r = (e = (0, F.useState)(!1), function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, r) {
                        var t, n, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var a = [],
                                o = !0,
                                s = !1;
                            try {
                                for (i = i.call(e); !(o = (t = i.next()).done) && (a.push(t.value), a.length !== r); o = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    o || null == i.return || i.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return a
                        }
                    }(e, 2) || function(e, r) {
                        if (e) {
                            if ("string" == typeof e) return tV(e, 2);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(t);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return tV(e, r)
                        }
                    }(e, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    t = r[0],
                    n = r[1],
                    i = z();
                return ((0, F.useEffect)(function() {
                    t || i !== U.servers || n(!0)
                }, [i, t]), i && !t) ? (0, M.jsx)(F.Fragment, {}) : (0, M.jsx)(tB, {})
            }
            tz.propTypes = {};
            var tH = JSON.parse('{"P":["CommonUI.Messages","CommonUI.Controls","Feature.ServerList","Feature.VIPServer","Feature.PrivateServers","Feature.NotApproved","IAPExperience.PurchaseError","Purchasing.PurchaseDialog"]}');
            t(412), t(228), D()(function() {
                var e, r = document.getElementById("running-game-instances-container"),
                    t = document.getElementById("server-list-web-app");
                r ? (0, k.renderWithErrorBoundary)((0, M.jsx)(L.QueryClientProvider, {
                    client: k.queryClient,
                    children: (0, M.jsx)(k.TranslationProvider, {
                        config: tH.P,
                        children: (0, M.jsx)(tz, {})
                    })
                }), r) : t ? (0, k.renderWithErrorBoundary)((0, M.jsx)(L.QueryClientProvider, {
                    client: k.queryClient,
                    children: (0, M.jsx)(k.TranslationProvider, {
                        config: tH.P,
                        children: (0, M.jsx)("div", {
                            id: "all-servers-lists",
                            children: (0, M.jsx)("div", {
                                id: "running-game-instances-container",
                                children: (0, M.jsx)(tz, {})
                            })
                        })
                    })
                }), t) : null == (e = window.EventTracker) || e.fireEvent("ServerListEntryNoDomNodeFound")
            })
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ServerList");
//# debugId=b8960ca0-0227-43e5-8242-a681df24f94b
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/serverList-c64cf3d08a1ba13a.js.map