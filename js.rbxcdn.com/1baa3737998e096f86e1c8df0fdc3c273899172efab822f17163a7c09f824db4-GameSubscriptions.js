! function() {
    var n = {
            717: function(e, t) {
                "use strict";

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function c(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
                    if ((e = document.createElement("script")).src = "".concat(u).concat(t), !(t = document.head || document.body)) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return t.appendChild(e), e
                }

                function i(s) {
                    return null !== p ? p : (p = new Promise(function(e, t) {
                        var n, r, i;
                        if ("undefined" != typeof window && "undefined" != typeof document)
                            if (window.Stripe && s && console.warn(d), window.Stripe) e(window.Stripe);
                            else try {
                                var o, a = function() {
                                    for (var e = document.querySelectorAll('script[src^="'.concat(u, '"]')), t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        if (l.test(n.src)) return n
                                    }
                                    return null
                                }();
                                a && s ? console.warn(d) : a ? a && null !== m && null !== f && (a.removeEventListener("load", m), a.removeEventListener("error", f), null !== (o = a.parentNode) && void 0 !== o && o.removeChild(a), a = c(s)) : a = c(s), r = e, m = function() {
                                    window.Stripe ? r(window.Stripe) : i(new Error("Stripe.js not available"))
                                }, n = i = t, f = function() {
                                    n(new Error("Failed to load Stripe.js"))
                                }, a.addEventListener("load", m), a.addEventListener("error", f)
                            } catch (e) {
                                return void t(e)
                            } else e(null)
                    })).catch(function(e) {
                        return p = null, Promise.reject(e)
                    })
                }

                function r(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== n(e)) throw new Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw new Error(t)
                }

                function o() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    s = !0;
                    var r = Date.now();
                    return i(a).then(function(e) {
                        return function(e, t, n) {
                            if (null === e) return null;
                            e = e.apply(void 0, t);
                            return t = n, (n = e) && n._registerWrapper && n._registerWrapper({
                                name: "stripe-js",
                                version: "3.4.1",
                                startTime: t
                            }), e
                        }(e, t, r)
                    })
                }
                var a, u = "https://js.stripe.com/v3",
                    l = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                    d = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                    p = null,
                    f = null,
                    m = null,
                    s = !{
                        value: !0
                    };
                o.setLoadParameters = function(n) {
                    if (s && a) {
                        var e = r(n);
                        if (Object.keys(e).reduce(function(e, t) {
                                return e && n[t] === (null === a || void 0 === a ? void 0 : a[t])
                            }, !0)) return
                    }
                    if (s) throw new Error("You cannot change load parameters after calling loadStripe");
                    a = r(n)
                }, t.loadStripe = o
            },
            949: function(e, t, n) {
                e.exports = n(717)
            },
            912: function(e, t, n) {
                var r;

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                r = function(e, _) {
                    "use strict";

                    function r(t, e) {
                        var n, r = Object.keys(t);
                        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), r.push.apply(r, n)), r
                    }

                    function f(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? r(Object(n), !0).forEach(function(e) {
                                a(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }

                    function t(e) {
                        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function a(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function m(e, t) {
                        if (null == e) return {};
                        var n, r = function(e, t) {
                            if (null == e) return {};
                            for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols)
                            for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                        return r
                    }

                    function I(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null == n) return;
                            var r, i, o = [],
                                a = !0,
                                s = !1;
                            try {
                                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                            } catch (e) {
                                s = !0, i = e
                            } finally {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                            return o
                        }(e, t) || function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function n(e) {
                        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                    }
                    var o, s, c, u, l = {
                        exports: {}
                    };
                    l.exports = function() {
                        if (u) return c;
                        u = 1;
                        var a = s ? o : (s = 1, o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");

                        function r() {}

                        function i() {}
                        return i.resetWarningCache = r, c = function() {
                            function e(e, t, n, r, i, o) {
                                if (o !== a) {
                                    o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw o.name = "Invariant Violation", o
                                }
                            }

                            function t() {
                                return e
                            }
                            var n = {
                                array: e.isRequired = e,
                                bool: e,
                                func: e,
                                number: e,
                                object: e,
                                string: e,
                                symbol: e,
                                any: e,
                                arrayOf: t,
                                element: e,
                                elementType: e,
                                instanceOf: t,
                                node: e,
                                objectOf: t,
                                oneOf: t,
                                oneOfType: t,
                                shape: t,
                                exact: t,
                                checkPropTypes: i,
                                resetWarningCache: r
                            };
                            return n.PropTypes = n
                        }
                    }()();

                    function R(t, n, e) {
                        var r = !!e,
                            i = _.useRef(e);
                        _.useEffect(function() {
                            i.current = e
                        }, [e]), _.useEffect(function() {
                            if (!r || !t) return function() {};

                            function e() {
                                i.current && i.current.apply(i, arguments)
                            }
                            return t.on(n, e),
                                function() {
                                    t.off(n, e)
                                }
                        }, [r, n, t, i])
                    }

                    function D(e) {
                        var t = _.useRef(e);
                        return _.useEffect(function() {
                            t.current = e
                        }, [e]), t.current
                    }

                    function h(e) {
                        return null !== e && "object" === t(e)
                    }

                    function b(e, t) {
                        if (!h(e) || !h(t)) return e === t;
                        var n = Array.isArray(e);
                        if (n !== Array.isArray(t)) return !1;
                        var r = Object.prototype.toString.call(e) === y;
                        if (r != (Object.prototype.toString.call(t) === y)) return !1;
                        if (!r && !n) return e === t;
                        var i = Object.keys(e),
                            o = Object.keys(t);
                        if (i.length !== o.length) return !1;
                        for (var a = {}, s = 0; s < i.length; s += 1) a[i[s]] = !0;
                        for (var c = 0; c < o.length; c += 1) a[o[c]] = !0;
                        if ((n = Object.keys(a)).length !== i.length) return !1;
                        var u = e,
                            l = t;
                        return n.every(function(e) {
                            return b(u[e], l[e])
                        })
                    }

                    function O(r, i, o) {
                        return h(r) ? Object.keys(r).reduce(function(e, t) {
                            var n = !h(i) || !b(r[t], i[t]);
                            return o.includes(t) ? (n && console.warn("Unsupported prop change: options.".concat(t, " is not a mutable property.")), e) : n ? f(f({}, e || {}), {}, a({}, t, r[t])) : e
                        }, null) : null
                    }

                    function d(e, t) {
                        var n = 1 < arguments.length && void 0 !== t ? t : S;
                        if (null === e || h(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
                        throw new Error(n)
                    }

                    function E(e, t) {
                        var n = 1 < arguments.length && void 0 !== t ? t : S;
                        return h(t = e) && "function" == typeof t.then ? {
                            tag: "async",
                            stripePromise: Promise.resolve(e).then(function(e) {
                                return d(e, n)
                            })
                        } : null === (e = d(e, n)) ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: e
                        }
                    }

                    function v(e) {
                        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
                            name: "react-stripe-js",
                            version: "2.8.1"
                        }), e.registerAppInfo({
                            name: "react-stripe-js",
                            version: "2.8.1",
                            url: "https://stripe.com/docs/stripe-js/react"
                        }))
                    }
                    var p = n(l.exports),
                        y = "[object Object]",
                        S = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        g = _.createContext(null);
                    g.displayName = "ElementsContext";

                    function P(e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    }

                    function C(e) {
                        var t = e.stripe,
                            r = e.options,
                            n = e.children,
                            i = _.useMemo(function() {
                                return E(t)
                            }, [t]),
                            o = (e = I(_.useState(function() {
                                return {
                                    stripe: "sync" === i.tag ? i.stripe : null,
                                    elements: "sync" === i.tag ? i.stripe.elements(r) : null
                                }
                            }), 2))[0],
                            a = e[1];
                        _.useEffect(function() {
                            function t(t) {
                                a(function(e) {
                                    return e.stripe ? e : {
                                        stripe: t,
                                        elements: t.elements(r)
                                    }
                                })
                            }
                            var n = !0;
                            return "async" !== i.tag || o.stripe ? "sync" !== i.tag || o.stripe || t(i.stripe) : i.stripePromise.then(function(e) {
                                    e && n && t(e)
                                }),
                                function() {
                                    n = !1
                                }
                        }, [i, o, r]);
                        var s = D(t);
                        _.useEffect(function() {
                            null !== s && s !== t && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }, [s, t]);
                        var c = D(r);
                        return _.useEffect(function() {
                            var e;
                            !o.elements || (e = O(r, c, ["clientSecret", "fonts"])) && o.elements.update(e)
                        }, [r, c, o.elements]), _.useEffect(function() {
                            v(o.stripe)
                        }, [o.stripe]), _.createElement(g.Provider, {
                            value: o
                        }, n)
                    }
                    C.propTypes = {
                        stripe: p.any,
                        options: p.object
                    };

                    function w(e) {
                        var t = _.useContext(g);
                        return P(t, e)
                    }

                    function T(e) {
                        return (0, e.children)(w("mounts <ElementsConsumer>"))
                    }
                    T.propTypes = {
                        children: p.func.isRequired
                    };
                    var A = ["on", "session"],
                        N = _.createContext(null);
                    N.displayName = "CustomCheckoutSdkContext";

                    function U(e, t) {
                        if (!e) throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CustomCheckoutProvider> provider."));
                        return e
                    }
                    var M = _.createContext(null);
                    M.displayName = "CustomCheckoutContext";

                    function L(e) {
                        function n(t, n) {
                            u(function(e) {
                                return e.stripe && e.customCheckoutSdk ? e : {
                                    stripe: t,
                                    customCheckoutSdk: n
                                }
                            })
                        }
                        var t = e.stripe,
                            r = e.options,
                            i = e.children,
                            o = _.useMemo(function() {
                                return E(t, "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                            }, [t]),
                            a = (e = I(_.useState(null), 2))[0],
                            s = e[1],
                            c = (e = I(_.useState(function() {
                                return {
                                    stripe: "sync" === o.tag ? o.stripe : null,
                                    customCheckoutSdk: null
                                }
                            }), 2))[0],
                            u = e[1],
                            l = _.useRef(!1);
                        _.useEffect(function() {
                            var e = !0;
                            return "async" !== o.tag || c.stripe ? "sync" === o.tag && o.stripe && !l.current && (l.current = !0, o.stripe.initCustomCheckout(r).then(function(e) {
                                    e && (n(o.stripe, e), e.on("change", s))
                                })) : o.stripePromise.then(function(t) {
                                    t && e && !l.current && (l.current = !0, t.initCustomCheckout(r).then(function(e) {
                                        e && (n(t, e), e.on("change", s))
                                    }))
                                }),
                                function() {
                                    e = !1
                                }
                        }, [o, c, r, s]);
                        var d = D(t);
                        _.useEffect(function() {
                            null !== d && d !== t && console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")
                        }, [d, t]);
                        var p = D(r);
                        return _.useEffect(function() {
                            var e, t;
                            c.customCheckoutSdk && (!r.clientSecret || h(p) || b(r.clientSecret, p.clientSecret) || console.warn("Unsupported prop change: options.client_secret is not a mutable property."), e = null == p || null === (e = p.elementsOptions) || void 0 === e ? void 0 : e.appearance, (t = null == r || null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance) && !b(t, e) && c.customCheckoutSdk.changeAppearance(t))
                        }, [r, p, c.customCheckoutSdk]), _.useEffect(function() {
                            v(c.stripe)
                        }, [c.stripe]), e = _.useMemo(function() {
                            return function(e, t) {
                                if (!e) return null;
                                e.on, e.session;
                                var n = m(e, A);
                                return f(f({}, n), t || e.session())
                            }(c.customCheckoutSdk, a)
                        }, [c.customCheckoutSdk, a]), c.customCheckoutSdk ? _.createElement(N.Provider, {
                            value: c
                        }, _.createElement(M.Provider, {
                            value: e
                        }, i)) : null
                    }
                    L.propTypes = {
                        stripe: p.any,
                        options: p.shape({
                            clientSecret: p.string.isRequired,
                            elementsOptions: p.object
                        }).isRequired
                    };

                    function x(e) {
                        var t = _.useContext(N),
                            n = _.useContext(g);
                        if (t && n) throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CustomCheckoutProvider> and <Elements> providers."));
                        return t ? U(t, e) : P(n, e)
                    }

                    function k(T, e) {
                        var t, A = "".concat((t = T).charAt(0).toUpperCase() + t.slice(1), "Element");
                        return (e = e ? function(e) {
                            x("mounts <".concat(A, ">"));
                            var t = e.id,
                                e = e.className;
                            return _.createElement("div", {
                                id: t,
                                className: e
                            })
                        } : function(e) {
                            var t, n = e.id,
                                r = e.className,
                                i = e.options,
                                o = void 0 === i ? {} : i,
                                a = e.onBlur,
                                s = e.onFocus,
                                c = e.onReady,
                                u = e.onChange,
                                l = e.onEscape,
                                d = e.onClick,
                                p = e.onLoadError,
                                f = e.onLoaderStart,
                                m = e.onNetworksChange,
                                h = e.onConfirm,
                                b = e.onCancel,
                                E = e.onShippingAddressChange,
                                i = e.onShippingRateChange,
                                e = x("mounts <".concat(A, ">")),
                                v = "elements" in e ? e.elements : null,
                                y = "customCheckoutSdk" in e ? e.customCheckoutSdk : null,
                                e = I(_.useState(null), 2),
                                S = e[0],
                                g = e[1],
                                P = _.useRef(null),
                                C = _.useRef(null);
                            R(S, "blur", a), R(S, "focus", s), R(S, "escape", l), R(S, "click", d), R(S, "loaderror", p), R(S, "loaderstart", f), R(S, "networkschange", m), R(S, "confirm", h), R(S, "cancel", b), R(S, "shippingaddresschange", E), R(S, "shippingratechange", i), R(S, "change", u), c && (t = "expressCheckout" === T ? c : function() {
                                c(S)
                            }), R(S, "ready", t), _.useLayoutEffect(function() {
                                var e;
                                null === P.current && null !== C.current && (v || y) && (e = null, y ? e = y.createElement(T, o) : v && (e = v.create(T, o)), P.current = e, g(e), e && e.mount(C.current))
                            }, [v, y, o]);
                            var w = D(o);
                            return _.useEffect(function() {
                                var e;
                                !P.current || (e = O(o, w, ["paymentRequest"])) && "update" in P.current && P.current.update(e)
                            }, [o, w]), _.useLayoutEffect(function() {
                                return function() {
                                    if (P.current && "function" == typeof P.current.destroy) try {
                                        P.current.destroy(), P.current = null
                                    } catch (e) {}
                                }
                            }, []), _.createElement("div", {
                                id: n,
                                className: r,
                                ref: C
                            })
                        }).propTypes = {
                            id: p.string,
                            className: p.string,
                            onChange: p.func,
                            onBlur: p.func,
                            onFocus: p.func,
                            onReady: p.func,
                            onEscape: p.func,
                            onClick: p.func,
                            onLoadError: p.func,
                            onLoaderStart: p.func,
                            onNetworksChange: p.func,
                            onConfirm: p.func,
                            onCancel: p.func,
                            onShippingAddressChange: p.func,
                            onShippingRateChange: p.func,
                            options: p.object
                        }, e.displayName = A, e.__elementType = T, e
                    }
                    var F = "undefined" == typeof window,
                        B = _.createContext(null);
                    B.displayName = "EmbeddedCheckoutProviderContext";

                    function V() {
                        var e = _.useContext(B);
                        if (!e) throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
                        return e
                    }
                    var G = F ? function(e) {
                            var t = e.id,
                                e = e.className;
                            return V(), _.createElement("div", {
                                id: t,
                                className: e
                            })
                        } : function(e) {
                            var t = e.id,
                                e = e.className,
                                n = V().embeddedCheckout,
                                r = _.useRef(!1),
                                i = _.useRef(null);
                            return _.useLayoutEffect(function() {
                                return !r.current && n && null !== i.current && (n.mount(i.current), r.current = !0),
                                    function() {
                                        if (r.current && n) try {
                                            n.unmount(), r.current = !1
                                        } catch (e) {}
                                    }
                            }, [n]), _.createElement("div", {
                                ref: i,
                                id: t,
                                className: e
                            })
                        },
                        j = k("auBankAccount", F),
                        H = k("card", F),
                        Y = k("cardNumber", F),
                        z = k("cardExpiry", F),
                        K = k("cardCvc", F),
                        q = k("fpxBank", F),
                        W = k("iban", F),
                        X = k("idealBank", F),
                        J = k("p24Bank", F),
                        Q = k("epsBank", F),
                        $ = k("payment", F),
                        Z = k("expressCheckout", F),
                        ee = k("currencySelector", F),
                        te = k("paymentRequestButton", F),
                        ne = k("linkAuthentication", F),
                        re = k("address", F),
                        ie = k("shippingAddress", F),
                        oe = k("paymentMethodMessaging", F),
                        l = k("affirmMessage", F),
                        F = k("afterpayClearpayMessage", F);
                    e.AddressElement = re, e.AffirmMessageElement = l, e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = j, e.CardCvcElement = K, e.CardElement = H, e.CardExpiryElement = z, e.CardNumberElement = Y, e.CurrencySelectorElement = ee, e.CustomCheckoutProvider = L, e.Elements = C, e.ElementsConsumer = T, e.EmbeddedCheckout = G, e.EmbeddedCheckoutProvider = function(e) {
                        var t = e.stripe,
                            n = e.options,
                            r = e.children,
                            i = _.useMemo(function() {
                                return E(t, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                            }, [t]),
                            o = _.useRef(null),
                            a = _.useRef(null),
                            e = I(_.useState({
                                embeddedCheckout: null
                            }), 2),
                            s = e[0],
                            c = e[1];
                        _.useEffect(function() {
                            var t;
                            a.current || o.current || (t = function(e) {
                                a.current || o.current || (a.current = e, o.current = a.current.initEmbeddedCheckout(n).then(function(e) {
                                    c({
                                        embeddedCheckout: e
                                    })
                                }))
                            }, "async" !== i.tag || a.current || !n.clientSecret && !n.fetchClientSecret ? "sync" !== i.tag || a.current || !n.clientSecret && !n.fetchClientSecret || t(i.stripe) : i.stripePromise.then(function(e) {
                                e && t(e)
                            }))
                        }, [i, n, s, a]), _.useEffect(function() {
                            return function() {
                                s.embeddedCheckout ? (o.current = null, s.embeddedCheckout.destroy()) : o.current && o.current.then(function() {
                                    o.current = null, s.embeddedCheckout && s.embeddedCheckout.destroy()
                                })
                            }
                        }, [s.embeddedCheckout]), _.useEffect(function() {
                            v(a)
                        }, [a]);
                        var u = D(t);
                        _.useEffect(function() {
                            null !== u && u !== t && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")
                        }, [u, t]);
                        var l = D(n);
                        return _.useEffect(function() {
                            null != l && (null != n ? (void 0 === n.clientSecret && void 0 === n.fetchClientSecret && console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."), null != l.clientSecret && n.clientSecret !== l.clientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != l.fetchClientSecret && n.fetchClientSecret !== l.fetchClientSecret && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."), null != l.onComplete && n.onComplete !== l.onComplete && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."), null != l.onShippingDetailsChange && n.onShippingDetailsChange !== l.onShippingDetailsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."), null != l.onLineItemsChange && n.onLineItemsChange !== l.onLineItemsChange && console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.")) : console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them."))
                        }, [l, n]), _.createElement(B.Provider, {
                            value: s
                        }, r)
                    }, e.EpsBankElement = Q, e.ExpressCheckoutElement = Z, e.FpxBankElement = q, e.IbanElement = W, e.IdealBankElement = X, e.LinkAuthenticationElement = ne, e.P24BankElement = J, e.PaymentElement = $, e.PaymentMethodMessagingElement = oe, e.PaymentRequestButtonElement = te, e.ShippingAddressElement = ie, e.useCustomCheckout = function() {
                        var e;
                        t = "calls useCustomCheckout()", e = _.useContext(N), U(e, t);
                        var t = _.useContext(M);
                        if (!t) throw new Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");
                        return t
                    }, e.useElements = function() {
                        return w("calls useElements()").elements
                    }, e.useStripe = function() {
                        return x("calls useStripe()").stripe
                    }
                }, "object" === i(t) ? r(t, n(594)) : (n = [t, n(594)], void 0 === (r = "function" == typeof(r = r) ? r.apply(t, n) : r) || (e.exports = r))
            },
            594: function(e) {
                "use strict";
                e.exports = React
            }
        },
        r = {};

    function Tr(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        t = r[e] = {
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, Tr), t.exports
    }
    Tr.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return Tr.d(t, {
                a: t
            }), t
        }, Tr.d = function(e, t) {
            for (var n in t) Tr.o(t, n) && !Tr.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, Tr.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var m, D, O, N = Tr(594),
                U = Tr.n(N),
                e = ReactDOM,
                P = Tr.n(e),
                M = ReactUtilities,
                h = HeaderScripts,
                b = CoreUtilities,
                E = ReactRouterDOM,
                L = Roblox;

            function t() {
                return document.getElementById(n)
            }(se = {}).SUBSCRIPTION = "Subscription", se.PRIVATE_SERVER = "PrivateServer", (ue = {}).INVALID = "Invalid", ue.MONTH = "Month", ue.YEAR = "Year", (de = {}).INVALID = "Invalid", de.DESKTOP = "Desktop", de.APPLE = "Apple", de.GOOGLE = "Google", (Mt = m = m || {})[Mt.INVALID = 0] = "INVALID", Mt[Mt.DEVELOPER_SUBSCRIPTION_PRODUCT = 1] = "DEVELOPER_SUBSCRIPTION_PRODUCT", (se = D = D || {})[se.INVALID = 0] = "INVALID", se[se.UNKNOWN = 1] = "UNKNOWN", se[se.INVALID_PRODUCT = 2] = "INVALID_PRODUCT", se[se.PRODUCT_NOT_FOR_SALE = 3] = "PRODUCT_NOT_FOR_SALE", se[se.USER_ALREADY_SUBSCRIBED = 4] = "USER_ALREADY_SUBSCRIBED", se[se.SAVED_CC_REQUIRED = 5] = "SAVED_CC_REQUIRED", se[se.VPC_REQUIRED = 6] = "VPC_REQUIRED", se[se.VPC_PENDING_APPROVAL = 7] = "VPC_PENDING_APPROVAL", se[se.INVALID_INPUT = 8] = "INVALID_INPUT", se[se.PURCHASE_PLATFORM_NOT_SUPPORTED = 9] = "PURCHASE_PLATFORM_NOT_SUPPORTED", se[se.INVALID_SALE_LOCATION = 10] = "INVALID_SALE_LOCATION", se[se.USER_HAS_SPEND_LIMIT_SET = 11] = "USER_HAS_SPEND_LIMIT_SET", se[se.RESTRICTED_USER = 12] = "RESTRICTED_USER", se[se.UNSUPPORTED_LOCALE = 13] = "UNSUPPORTED_LOCALE", se[se.UNAUTHORIZED = 14] = "UNAUTHORIZED", se[se.EXCEED_PARENTAL_SPEND_LIMIT = 15] = "EXCEED_PARENTAL_SPEND_LIMIT", (ue = O = O || {}).INVALID = "Invalid", ue.STRIPE = "Stripe", ue.APPLEAPPSTORE = "AppleAppStore", ue.GOOGLEPLAYSTORE = "GooglePlayStore", ue.CREDITBALANCE = "CreditBalance";
            var x = {
                    HeadingSubscriptions: "Heading.Subscriptions",
                    LabelPerMonth: "Text.PerMonth",
                    ActionReportSubscription: "Action.ReportSubscription",
                    HeadingGetSubscription: "Heading.GetSubscription",
                    ActionSubscribe: "Action.Subscribe",
                    ActionSubscribeWithRobloxCredit: "Action.SubscribeWithRobloxCredit",
                    ActionSubscribeWithCreditDebitCard: "Action.SubscribeWithCreditDebitCard",
                    ActionSubscribePayAnotherWay: "Action.SubscribePayAnotherWay",
                    MessageMonthlyCadenceDisclaimer: "Text.DisclaimerMonthly",
                    MessageRecurringMonthlyDisclaimer: "Text.DisclaimerRecurMonthly",
                    MessageNoSubscriptionsAvailable: "Message.NoSubscriptionsAvailable",
                    LabelSubscribed: "Text.Subscribed",
                    HeadingAddPaymentMethod: "Heading.AddPaymentMethod",
                    MessageStripeEmailInputSubText: "Message.StripeEmailInputSubText",
                    MessageStripeAddPaymentMethodDisclosure: "Message.StripeAddPaymentMethodDisclosure",
                    ErrorStripeCardDeclined: "Error.StripeCardDeclined",
                    ErrorStripeCardExpired: "Error.StripeCardExpired",
                    ErrorStripeIncorrectCVC: "Error.StripeIncorrectCVC",
                    ErrorStripeSaveCardGeneralError: "Error.StripeSaveCardGeneralError",
                    ErrorGenericError: "Error.GenericError",
                    ErrorStripeSavedCardSomethingWentWrong: "Error.StripeSavedCardSomethingWentWrong",
                    HeadingStripeFormAddPaymentMethod: "Heading.StripeFormAddPaymentMethodNote",
                    HeadingBillingEmail: "Heading.BillingEmail",
                    HeadingBillingAddress: "Heading.BillingAddress",
                    HeadingParentPermissionNeeded: "Heading.ParentPermissionNeeded",
                    MessageParentPermissionVPC: "Message.ParentPermissionVPC",
                    ActionParentOrGuardian: "Action.ParentOrGuardian",
                    HeadingCannotSubscribe: "Heading.CannotSubscribe",
                    MessageMonthlySpendRestrictionsSubscriptionUnavailable: "Message.MonthlySpendRestrictions.SubscriptionUnavailable",
                    MessageMonthlySpendLimitExceed: "Message.MonthlySpendRestrictionsMonthlyLimitExceed",
                    MessageSubscriptionNotAvailableInCountry: "Message.SubscriptionNotAvailableInCountry",
                    MessageSubscriptionNotAvailableAgeRestriction: "Message.SubscriptionNotAvailableExperienceOver17",
                    MessageCannotPlayInExperience: "Message.CannotPlayInExperience",
                    ErrorParentalRestriction: "Error.ParentalRestriction",
                    MessageReportSubmitted: "Message.ReportSubmitted",
                    ActionSeeMore: "Action.SeeMore",
                    ActionReport: "Action.Report",
                    ActionShare: "Action.Share",
                    MessageLinkCopied: "Message.LinkCopied"
                },
                k = "Label.AskParent",
                F = "Description.SpendingRestrictionWithSettings",
                B = "Action.GoToSettings",
                V = "Action.Cancel",
                G = ((de = {})[D.INVALID] = x.ErrorGenericError, de[D.INVALID_INPUT] = x.ErrorGenericError, de[D.INVALID_PRODUCT] = x.ErrorGenericError, de[D.INVALID_SALE_LOCATION] = x.ErrorGenericError, de[D.PURCHASE_PLATFORM_NOT_SUPPORTED] = x.ErrorGenericError, de[D.RESTRICTED_USER] = x.MessageCannotPlayInExperience, de[D.SAVED_CC_REQUIRED] = x.ErrorGenericError, de[D.UNKNOWN] = x.ErrorGenericError, de[D.UNSUPPORTED_LOCALE] = x.MessageSubscriptionNotAvailableInCountry, de[D.USER_ALREADY_SUBSCRIBED] = x.ErrorGenericError, de[D.USER_HAS_SPEND_LIMIT_SET] = x.MessageMonthlySpendRestrictionsSubscriptionUnavailable, de[D.EXCEED_PARENTAL_SPEND_LIMIT] = x.MessageMonthlySpendLimitExceed, de[D.VPC_PENDING_APPROVAL] = x.ErrorGenericError, de[D.VPC_REQUIRED] = x.MessageParentPermissionVPC, de),
                n = "game-detail-meta-data",
                j = function() {
                    var e, r = (null === (e = t()) || void 0 === e ? void 0 : e.dataset) || {};
                    return Object.keys(r).reduce(function(e, t) {
                        var n = r[t].toLowerCase();
                        return e[t] = "true" === n || "false" !== n && r[t], e
                    }, {})
                };

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            };

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var v = function() {
                return (v = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function p(e, a, s, c) {
                return new(s = s || Promise)(function(n, t) {
                    function r(e) {
                        try {
                            o(c.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(c.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(r, i)
                    }
                    o((c = c.apply(e, a || [])).next())
                })
            }

            function y(n, r) {
                var i, o, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return c.next = e(0), c.throw = e(1), c.return = e(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function e(t) {
                    return function(e) {
                        return function(t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; c && (t[c = 0] && (s = 0)), s;) try {
                                if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, o = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((a = 0 < (a = s.trys).length && a[a.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = r.call(n, s)
                            } catch (e) {
                                t = [6, e], o = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function a(e) {
                return e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/\d+/, "/number")
            }

            function s(t) {
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '@sentry/nextjs'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }).then(function(e) {
                    e = e.captureException;
                    return !1 === t.ok && !1 === [401, 403, 404].includes(t.status) && e(new Error("Network error"), {
                        tags: {
                            apiUrl: a(t.url),
                            apiStatus: null == t ? void 0 : t.status,
                            cors: !1
                        }
                    }), t
                })
            }

            function c(t) {
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '@sentry/nextjs'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }).then(function(e) {
                    (0, e.captureException)(new Error("Network error"), {
                        tags: {
                            apiUrl: a(t),
                            cors: !0
                        }
                    })
                })
            }

            function f(e) {
                if (document) {
                    var t = document.getElementById("hba-frame");
                    return null === t && (n = e, (e = document.createElement("iframe")).id = "hba-frame", e.style.cssText = "position: fixed; top: 0; left: 0; width: 0%; height: 0%; z-index: -1", e.src = "https://www.".concat(n, "/hba/iframe"), e = e, t = null !== document && void 0 !== document && document.body ? document.body.appendChild(e) : null), t
                }
                var n;
                return null
            }

            function S() {
                var e = window.location.hostname.split(".").slice(0, -2).join(".");
                return !e.includes("create") && e.includes("advertise") ? "ads_manager" : "creator_hub"
            }

            function d(e, t) {
                var n = "https://apis.".concat(e, "/account-security-service/v1/metrics/record");
                try {
                    fetch(n, {
                        method: "POST",
                        body: JSON.stringify({
                            name: "load_time_hba_frame",
                            value: t,
                            labelValues: {
                                origin_site: S()
                            }
                        })
                    })
                } catch (e) {}
            }

            function g(e, t) {
                var n = "https://apis.".concat(e, "/account-security-service/v1/metrics/record");
                try {
                    fetch(n, {
                        method: "POST",
                        body: JSON.stringify({
                            name: "response_time_hba_frame",
                            value: t,
                            labelValues: {
                                origin_site: S()
                            }
                        })
                    })
                } catch (e) {}
            }

            function C(c, u, l) {
                return void 0 === l && (l = 1500), new Promise(function(e, t) {
                    var r, i, o, a, n = performance.now(),
                        s = window.setTimeout(function() {
                            d(c, performance.now() - n),
                                function() {
                                    var e = "https://apis.".concat(c, "/account-security-service/v1/metrics/record");
                                    try {
                                        fetch(e, {
                                            method: "POST",
                                            body: JSON.stringify({
                                                name: "event_hba_frame",
                                                value: 1,
                                                labelValues: {
                                                    event_type: "FrameLoadTimedOut",
                                                    origin_site: S()
                                                }
                                            })
                                        })
                                    } catch (e) {}
                                }(), t(new Error("Promise timed out after ".concat(l, " ms")))
                        }, l),
                        s = (r = e, i = c, o = s, a = n, function e(t) {
                            var n = t.data;
                            t.origin === "https://www.".concat(i) && "dataFromHbaFrame" === n.msg && "loaded" === n.data.type && (window.removeEventListener("message", e, !1), window.clearTimeout(o), d(i, performance.now() - a), r())
                        });
                    window.addEventListener("message", s, !1), null === (s = u.contentWindow) || void 0 === s || s.postMessage({
                        msg: "checkLoadedRequest"
                    }, "https://www.".concat(c))
                })
            }

            function w(e, t, n, r, i, o, a) {
                var s, c, u, l, d, p, f;
                void 0 === a && (a = 100), window && (s = performance.now(), a = window.setTimeout(function() {
                    g(n, performance.now() - s),
                        function() {
                            var e = "https://apis.".concat(n, "/account-security-service/v1/metrics/record");
                            try {
                                fetch(e, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        name: "event_hba_frame",
                                        value: 1,
                                        labelValues: {
                                            event_type: "FrameResponseTimedOut",
                                            origin_site: S()
                                        }
                                    })
                                })
                            } catch (e) {}
                        }(), e({
                            url: i.url,
                            init: i.init
                        })
                }, a), c = e, u = n, l = i, d = o, p = a, f = s, a = function e(t) {
                    var n = t.data,
                        r = l.url,
                        i = l.init;
                    t.origin !== "https://www.".concat(u) || "dataFromHbaFrame" !== n.msg || "batHeader" !== n.data.type || n.data.identifier && n.data.identifier !== d || (!n.data.isError && n.data.batHeader ? (window.clearTimeout(p), window.removeEventListener("message", e, !1), g(u, performance.now() - f), n = n.data.batHeader, c({
                        url: r,
                        init: v(v({}, i), {
                            headers: v(v({}, i.headers), {
                                "x-bound-auth-token": n["x-bound-auth-token"]
                            })
                        })
                    })) : (window.clearTimeout(p), window.removeEventListener("message", e, !1), g(u, performance.now() - f), c({
                        url: r,
                        init: i
                    })))
                }, window.addEventListener("message", a, !1), null === (r = r.contentWindow) || void 0 === r || r.postMessage({
                    msg: "signSubdomainRequest",
                    identifier: o,
                    serializedSubdomainRequestData: JSON.stringify({
                        url: i.url,
                        requestInit: i.init
                    })
                }, "https://www.".concat(n)))
            }

            function T() {
                return crypto.randomUUID()
            }
            var A, u = (I.prototype.post = function(e) {
                    return s(e.response)
                }, I.prototype.onError = function(e) {
                    return c(e.url)
                }, I),
                l = (_.prototype.getOrCreateHbaFrame = function() {
                    return f(this.robloxSiteDomain)
                }, _.prototype.pre = function(o) {
                    var a = this;
                    return new Promise(function(e, t) {
                        var n, r = o.url,
                            i = o.init;
                        a.hbaFrame = a.getOrCreateHbaFrame(), null !== a.hbaFrame ? (n = T(), a.hbaFrameAlreadyLoaded ? w(e, 0, a.robloxSiteDomain, a.hbaFrame, o, n, a.dataTimeOut) : a.hbaFrameLoadFailed ? e({
                            url: r,
                            init: i
                        }) : C(a.robloxSiteDomain, a.hbaFrame, a.loadTimeOut).then(function() {
                            a.hbaFrame ? (a.hbaFrameAlreadyLoaded = !0, w(e, 0, a.robloxSiteDomain, a.hbaFrame, o, n, a.dataTimeOut)) : e({
                                url: r,
                                init: i
                            })
                        }).catch(function() {
                            a.hbaFrameLoadFailed = !0, e({
                                url: r,
                                init: i
                            })
                        })) : e({
                            url: r,
                            init: i
                        })
                    })
                }, _);

            function _(e, t, n) {
                void 0 === t && (t = 1500), void 0 === n && (n = 100), this.robloxSiteDomain = e, this.hbaFrameAlreadyLoaded = !1, this.hbaFrameLoadFailed = !1, this.hbaFrame = null, this.loadTimeOut = t, this.dataTimeOut = n
            }

            function I() {}

            function R(u, l, d, p, f) {
                return function(e) {
                    var t, n, r, i, o, a, s, c;
                    if (e.data && e.data.genericChallengeResponse) switch (e.data.genericChallengeResponse.type) {
                        case "challengeAbandoned":
                            f(new Q({
                                kind: A.ABANDONED,
                                data: {
                                    challengeType: null !== (c = d.headers.get(Z)) && void 0 !== c ? c : ""
                                }
                            }));
                            break;
                        case "challengeDisplayed":
                            break;
                        case "challengeCompleted":
                            (r = e.data.genericChallengeResponse.data).challengeType && r.metadata ? p((i = u, o = l, a = d, s = r.metadata, c = v(v({}, o), {
                                headers: v(v({}, o.headers), ((c = {})[$] = null !== (o = a.headers.get($)) && void 0 !== o ? o : "", c[ee] = btoa(JSON.stringify(s)), c[Z] = null !== (a = a.headers.get(Z)) && void 0 !== a ? a : "", c))
                            }), fetch(i, c))) : f(new Q({
                                kind: A.UNKNOWN,
                                data: {
                                    challengeType: null !== (t = d.headers.get(Z)) && void 0 !== t ? t : ""
                                }
                            }));
                            break;
                        case "challengeInvalidated":
                            (r = e.data.genericChallengeResponse.data) && r.challengeType && r.metadata ? f(new Q({
                                kind: A.INVALIDATED,
                                data: r
                            })) : f(new Q({
                                kind: A.INVALIDATED,
                                data: {
                                    challengeType: null !== (t = d.headers.get(Z)) && void 0 !== t ? t : ""
                                }
                            }));
                            break;
                        case "challengeParsed":
                            !1 === (r = e.data.genericChallengeResponse.data).parsed && f(new Q({
                                kind: A.UNKNOWN,
                                data: {
                                    challengeType: null !== (n = d.headers.get(Z)) && void 0 !== n ? n : ""
                                }
                            }));
                            break;
                        case "challengeInitialized":
                            !1 === (r = e.data.genericChallengeResponse.data).initialized && f(new Q({
                                kind: A.UNKNOWN,
                                data: {
                                    challengeType: null !== (n = d.headers.get(Z)) && void 0 !== n ? n : ""
                                }
                            }));
                            break;
                        case "challengePageLoaded":
                            !1 === (r = e.data.genericChallengeResponse.data).pageLoaded && f(new Q({
                                kind: A.LOADFAILED,
                                data: {
                                    challengeType: null !== (r = d.headers.get(Z)) && void 0 !== r ? r : ""
                                }
                            }))
                    }
                }
            }

            function H(e, t) {
                return 403 === e.status && e.headers.has($) && e.headers.has(Z) && e.headers.has(ee) && "iframe" === t
            }

            function Y(e) {
                var n, t, r, i = e.url,
                    o = e.request,
                    a = e.response,
                    s = e.robloxSiteDomain,
                    c = (r = r = (r = a, e = s, r = new URLSearchParams([
                        ["challenge-type", "generic"],
                        ["dark-mode", "true"],
                        ["barista-mode", "true"],
                        ["generic-challenge-type", null !== (s = r.headers.get(Z)) && void 0 !== s ? s : ""],
                        ["generic-challenge-id", null !== (s = r.headers.get($)) && void 0 !== s ? s : ""],
                        ["challenge-metadata-json", null !== (r = r.headers.get(ee)) && void 0 !== r ? r : ""],
                        ["origin", null !== (r = window.location.hostname.split(".").slice(0, -2).join(".")) && void 0 !== r ? r : ""]
                    ]), new URL("https://www.".concat(e, "/challenge/cdn/hybrid?").concat(r.toString()))), (t = document.createElement("iframe")).id = "challenge-frame", t.allowFullscreen = !0, t.setAttribute("allowtransparency", "true"), t.setAttribute("allow", "publickey-credentials-get;publickey-credentials-create"), t.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; visibility: hidden; color-scheme: normal; border: none; z-index: 2147483647;", t.src = r.toString(), t.onload = function() {
                        t.style.visibility = "visible"
                    }, r = t, document && document.body ? document.body.appendChild(r) : null);
                return new Promise(function(e, t) {
                    window && c && (n = R(i, o, a, e, t), window.addEventListener("message", n, !1))
                }).finally(function() {
                    null == c || c.remove(), n && window.removeEventListener("message", n, !1)
                })
            }

            function z(e) {
                var t = e.elapsedTime,
                    n = e.url,
                    e = e.status;
                return {
                    eventName: "apiVitals",
                    parameters: {
                        elapsedTime: String(t),
                        apiUrl: n,
                        statusCode: String(e)
                    }
                }
            }

            function K() {
                var e, t = "";
                try {
                    "undefined" != typeof window && (t = null !== (e = localStorage.getItem(ie)) && void 0 !== e ? e : "")
                } catch (e) {
                    console.warn("Error reading localStorage key “".concat(ie, "”:"), e)
                }
                return t
            }

            function q(e) {
                try {
                    ae = e, "undefined" != typeof window && localStorage.setItem(ie, e)
                } catch (e) {
                    console.warn("Error setting localStorage key “".concat(ie, "”:"), e)
                }
            }

            function W(t) {
                ce = ce.filter(function(e) {
                    return e !== t
                })
            }

            function X(e) {
                var t = e.url;
                503 === e.status && ce.forEach(function(e) {
                    return e(t)
                })
            }(Mt = A = A || {}).UNKNOWN = "unknown", Mt.INVALIDATED = "invalidated", Mt.ABANDONED = "abandoned", Mt.LOADFAILED = "loadfailed";
            var J, Q = (o(Se, J = Error), Se.prototype.match = function(e) {
                    return this.parameters.kind === e.parameters.kind && JSON.stringify(this.parameters.data) === JSON.stringify(e.parameters.data)
                }, Se.prototype.matchAbandoned = function(e) {
                    return this.match(e) && e.parameters.kind === A.ABANDONED
                }, Se),
                $ = "rblx-challenge-id",
                Z = "rblx-challenge-type",
                ee = "rblx-challenge-metadata",
                te = (ye.prototype.post = function(e) {
                    var t = e.url,
                        n = e.init,
                        e = e.response;
                    return H(e, this.genericChallengeMiddlewareType) ? Y({
                        url: t,
                        request: n,
                        response: e,
                        robloxSiteDomain: this.robloxSiteDomain
                    }) : Promise.resolve(e)
                }, ye),
                ne = (ve.prototype.post = function(e) {
                    return this.unifiedLogger.logApiVitalsEvent(z({
                        elapsedTime: e.elapsedTime,
                        url: e.url,
                        status: e.response.status
                    })), Promise.resolve(e.response)
                }, ve),
                re = "x-csrf-token",
                ie = re,
                oe = ["POST", "PATCH", "DELETE", "PUT"],
                ae = K(),
                se = (Ee.prototype.pre = function(e) {
                    var t = e.url,
                        n = e.init,
                        e = this.currentToken;
                    return n.headers && "object" == r(n.headers) && re in n.headers && (e = n.headers[re]) && (this.currentToken = e, q(e)), n.method && oe.includes(n.method) ? Promise.resolve({
                        url: t,
                        init: this.prepareRequestInit(n)
                    }) : Promise.resolve({
                        url: t,
                        init: n
                    })
                }, Ee.prototype.post = function(e) {
                    var t = e.fetch,
                        n = e.url,
                        r = e.init,
                        i = e.response,
                        e = i.headers.get(re);
                    return 403 === i.status && i.headers.has(re) && null !== e ? (this.currentToken = e, q(e), t(n, this.prepareRequestInit(r))) : Promise.resolve(i)
                }, Ee.prototype.prepareRequestInit = function(e) {
                    return v(v({}, e), {
                        headers: v(v({}, e.headers), ((e = {})[re] = this.currentToken, e))
                    })
                }, Ee),
                ce = [],
                ue = (be.prototype.subscribe = function(e) {
                    return t = e, ce.push(t),
                        function() {
                            return W(t)
                        };
                    var t
                }, be.prototype.unsubscribe = W, be.prototype.post = function(e) {
                    e = e.response;
                    return X(e), Promise.resolve(e)
                }, be),
                le = {
                    onResponse: function(e) {
                        e = e.response;
                        return s(e)
                    },
                    onError: function(e) {
                        e = e.request;
                        return c(e.url)
                    }
                },
                de = function() {
                    var i = {};
                    return {
                        onRequest: function(e) {
                            var t = e.request,
                                e = e.id;
                            return i[e] = t.clone(), (t = (e = t).headers.get(re)) && q(t), oe.includes(e.method) && e.headers.set(re, ae), e
                        },
                        onResponse: function(e) {
                            var t = e.response,
                                n = e.id,
                                r = t.headers.get(re);
                            if (403 === t.status && t.headers.has(re) && null !== r) {
                                q(r);
                                e = i[n];
                                return delete i[n], e.headers.set(re, r), fetch(e)
                            }
                            return delete i[n], t
                        }
                    }
                },
                pe = {
                    onResponse: function(e) {
                        e = e.response;
                        X(e)
                    }
                },
                fe = new se,
                me = new ue,
                he = {
                    generator: [function(e) {
                        return !0 === e.enableSentry ? new u : void 0
                    }, function(e) {
                        return e.robloxSiteDomain && e.enableBoundAuthToken ? new l(e.robloxSiteDomain, e.boundAuthTokenLoadTimeout, e.boundAuthTokenDataTimeout) : void 0
                    }, function(e) {
                        return e.robloxSiteDomain ? new te(e.robloxSiteDomain, e.genericChallengeMiddlewareType) : void 0
                    }, function(e) {
                        return e.unifiedLogger ? new ne(e.unifiedLogger) : void 0
                    }, function() {
                        return fe
                    }, function() {
                        return me
                    }],
                    ts: [function(e) {
                        return !0 === e.enableSentry ? le : void 0
                    }, function(e) {
                        return e.robloxSiteDomain && e.enableBoundAuthToken ? (t = {
                            robloxSiteDomain: e.robloxSiteDomain,
                            loadTimeOut: e.boundAuthTokenLoadTimeout,
                            dataTimeOut: e.boundAuthTokenDataTimeout
                        }, a = t.robloxSiteDomain, s = void 0 === (e = t.loadTimeOut) ? 1500 : e, c = void 0 === (t = t.dataTimeOut) ? 100 : t, l = u = !1, {
                            onRequest: function(e) {
                                return p(void 0, [e], void 0, function(e) {
                                    var o, t, n = e.request,
                                        r = e.options.fetch;
                                    return y(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return o = {
                                                    url: n.url,
                                                    init: n,
                                                    fetch: r
                                                }, [4, new Promise(function(e, t) {
                                                    var n, r = o.url,
                                                        i = o.init;
                                                    null !== (d = f(a)) ? (n = T(), u ? w(e, 0, a, d, o, n, c) : l ? e({
                                                        url: r,
                                                        init: i
                                                    }) : C(a, d, s).then(function() {
                                                        d ? (u = !0, w(e, 0, a, d, o, n, c)) : e({
                                                            url: r,
                                                            init: i
                                                        })
                                                    }).catch(function() {
                                                        l = !0, e({
                                                            url: r,
                                                            init: i
                                                        })
                                                    })) : e({
                                                        url: r,
                                                        init: i
                                                    })
                                                })];
                                            case 1:
                                                return t = e.sent(), [2, new Response(t.url, t.init)]
                                        }
                                    })
                                })
                            }
                        }) : void 0;
                        var a, s, t, c, u, l, d
                    }, function(e) {
                        return e.robloxSiteDomain ? (e = {
                            robloxSiteDomain: e.robloxSiteDomain,
                            genericChallengeMiddlewareType: e.genericChallengeMiddlewareType
                        }, r = e.robloxSiteDomain, i = void 0 === (e = e.genericChallengeMiddlewareType) ? "iframe" : e, o = {}, {
                            onRequest: function(e) {
                                var t = e.id,
                                    e = e.request;
                                o[t] = e.clone()
                            },
                            onResponse: function(e) {
                                var t = e.response,
                                    n = e.id;
                                if (H(t, i)) {
                                    e = o[n];
                                    return Y({
                                        url: e.url,
                                        request: e,
                                        response: t,
                                        robloxSiteDomain: r
                                    })
                                }
                                return delete o[n], t
                            },
                            onError: function(e) {
                                e = e.id;
                                delete o[e]
                            }
                        }) : void 0;
                        var r, i, o
                    }, function(e) {
                        return e.unifiedLogger ? (r = e.unifiedLogger, i = {}, {
                            onRequest: function(e) {
                                e = e.id;
                                i[e] = performance.now()
                            },
                            onResponse: function(e) {
                                var t = e.id,
                                    n = e.response,
                                    e = performance.now() - i[t];
                                delete i[t], r.logApiVitalsEvent(z({
                                    elapsedTime: e,
                                    url: n.url,
                                    status: n.status
                                }))
                            }
                        }) : void 0;
                        var r, i
                    }, de, function() {
                        return pe
                    }]
                };

            function be() {}

            function Ee() {
                this.currentToken = K()
            }

            function ve(e) {
                this.unifiedLogger = e
            }

            function ye(e, t) {
                void 0 === t && (t = "iframe"), this.robloxSiteDomain = e, this.genericChallengeMiddlewareType = t
            }

            function Se(e) {
                var t = J.call(this, "challenge error for challenge kind ".concat(e.kind)) || this;
                return t.parameters = e, t
            }

            function ge(t, e) {
                return he[e].map(function(e) {
                    return e(t)
                }).filter(function(e) {
                    return e
                })
            }
            var Pe = new(Mt = (Object.defineProperty(we.prototype, "config", {
                    set: function(e) {
                        this.configuration = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "basePath", {
                    get: function() {
                        return this.configuration.basePath
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "fetchApi", {
                    get: function() {
                        return this.configuration.fetchApi || window.fetch.bind(window)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "middleware", {
                    get: function() {
                        return this.configuration.middleware || []
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "queryParamsStringify", {
                    get: function() {
                        return this.configuration.queryParamsStringify || Le
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "username", {
                    get: function() {
                        return this.configuration.username
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "password", {
                    get: function() {
                        return this.configuration.password
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "apiKey", {
                    get: function() {
                        var e = this.configuration.apiKey;
                        if (e) return "function" == typeof e ? e : function() {
                            return e
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "accessToken", {
                    get: function() {
                        var e = this,
                            t = this.configuration.accessToken;
                        if (t) return "function" == typeof t ? t : function() {
                            return p(e, void 0, void 0, function() {
                                return y(this, function(e) {
                                    return [2, t]
                                })
                            })
                        }
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "headers", {
                    get: function() {
                        return this.configuration.headers
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(we.prototype, "credentials", {
                    get: function() {
                        return this.configuration.credentials
                    },
                    enumerable: !1,
                    configurable: !0
                }), we)),
                se = (Ce.prototype.withMiddleware = function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this.clone();
                    return r.middleware = (e = r.middleware).concat.apply(e, t), r
                }, Ce.prototype.withPreMiddleware = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e.map(function(e) {
                        return {
                            pre: e
                        }
                    });
                    return this.withMiddleware.apply(this, n)
                }, Ce.prototype.withPostMiddleware = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e.map(function(e) {
                        return {
                            post: e
                        }
                    });
                    return this.withMiddleware.apply(this, n)
                }, Ce.prototype.isJsonMime = function(e) {
                    return !!e && Ce.jsonRegex.test(e)
                }, Ce.prototype.request = function(r, i) {
                    return p(this, void 0, void 0, function() {
                        var t, n;
                        return y(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.createFetchParams(r, i)];
                                case 1:
                                    return n = e.sent(), t = n.url, n = n.init, [4, this.fetchApi(t, n)];
                                case 2:
                                    if ((n = e.sent()) && 200 <= n.status && n.status < 300) return [2, n];
                                    throw new Ie(n, "Response from ".concat(n.url, " returned an error code ").concat(n.status))
                            }
                        })
                    })
                }, Ce.prototype.createFetchParams = function(c, u) {
                    return p(this, void 0, void 0, function() {
                        var n, r, i, o, a, s = this;
                        return y(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return n = this.configuration.basePath + c.path, void 0 !== c.query && 0 !== Object.keys(c.query).length && (n += "?" + this.configuration.queryParamsStringify(c.query)), r = Object.assign({}, this.configuration.headers, c.headers), Object.keys(r).forEach(function(e) {
                                        return void 0 === r[e] ? delete r[e] : {}
                                    }), i = "function" == typeof u ? u : function() {
                                        return p(s, void 0, void 0, function() {
                                            return y(this, function(e) {
                                                return [2, u]
                                            })
                                        })
                                    }, o = {
                                        method: c.method,
                                        headers: r,
                                        body: c.body,
                                        credentials: this.configuration.credentials
                                    }, a = [v({}, o)], [4, i({
                                        init: o,
                                        context: c
                                    })];
                                case 1:
                                    return a = v.apply(void 0, a.concat([e.sent()])), a = v(v({}, a), {
                                        body: (t = a.body, "undefined" != typeof FormData && t instanceof FormData || a.body instanceof URLSearchParams || (t = a.body, "undefined" != typeof Blob && t instanceof Blob) ? a.body : JSON.stringify(a.body))
                                    }), [2, {
                                        url: n,
                                        init: a
                                    }]
                            }
                            var t
                        })
                    })
                }, Ce.prototype.clone = function() {
                    var e = new this.constructor(this.configuration);
                    return e.middleware = this.middleware.slice(), e
                }, Ce.jsonRegex = new RegExp("^(:?application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$", "i"), Ce);

            function Ce(e) {
                void 0 === e && (e = Pe);
                var t = this;
                this.configuration = e, this.fetchApi = function(f, m) {
                    return p(t, void 0, void 0, function() {
                        var t, n, r, i, o, a, s, c, u, l, d, p;
                        return y(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    t = {
                                        url: f,
                                        init: m
                                    }, n = 0, r = this.middleware, e.label = 1;
                                case 1:
                                    return n < r.length ? (p = r[n]).pre ? [4, p.pre(v({
                                        fetch: this.fetchApi
                                    }, t))] : [3, 3] : [3, 4];
                                case 2:
                                    t = e.sent() || t, e.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    i = void 0, o = performance.now(), e.label = 5;
                                case 5:
                                    return e.trys.push([5, 7, , 12]), [4, (this.configuration.fetchApi || fetch)(t.url, t.init)];
                                case 6:
                                    return i = e.sent(), a = performance.now(), [3, 12];
                                case 7:
                                    s = e.sent(), a = performance.now(), c = 0, u = this.middleware, e.label = 8;
                                case 8:
                                    return c < u.length ? (p = u[c]).onError ? [4, p.onError({
                                        fetch: this.fetchApi,
                                        url: t.url,
                                        init: t.init,
                                        error: s,
                                        response: i ? i.clone() : void 0
                                    })] : [3, 10] : [3, 11];
                                case 9:
                                    i = e.sent() || i, e.label = 10;
                                case 10:
                                    return c++, [3, 8];
                                case 11:
                                    if (void 0 === i) throw s instanceof Error ? new Re(s, "The request failed and the interceptors did not return an alternative response") : s;
                                    return [3, 12];
                                case 12:
                                    l = 0, d = this.middleware, e.label = 13;
                                case 13:
                                    return l < d.length ? (p = d[l]).post ? [4, p.post({
                                        fetch: this.fetchApi,
                                        url: t.url,
                                        init: t.init,
                                        response: i.clone(),
                                        elapsedTime: a - o
                                    })] : [3, 15] : [3, 16];
                                case 14:
                                    i = e.sent() || i, e.label = 15;
                                case 15:
                                    return l++, [3, 13];
                                case 16:
                                    return [2, i]
                            }
                        })
                    })
                }, this.middleware = e.middleware
            }

            function we(e) {
                void 0 === e && (e = {}), this.configuration = e
            }
            var Te, Ae, _e, Ie = (o(Ue, _e = Error), Ue),
                Re = (o(Ne, Ae = Error), Ne),
                De = (o(Oe, Te = Error), Oe);

            function Oe(e, t) {
                t = Te.call(this, t) || this;
                return t.field = e, t.name = "RequiredError", t
            }

            function Ne(e, t) {
                t = Ae.call(this, t) || this;
                return t.cause = e, t.name = "FetchError", t
            }

            function Ue(e, t) {
                t = _e.call(this, t) || this;
                return t.response = e, t.name = "ResponseError", t
            }

            function Me(e, t) {
                return null != e[t]
            }

            function Le(t, n) {
                return void 0 === n && (n = ""), Object.keys(t).map(function(e) {
                    return function e(t, n, r) {
                        void 0 === r && (r = "");
                        var i = r + (r.length ? "[".concat(t, "]") : t);
                        if (n instanceof Array) {
                            var o = n.map(function(e) {
                                return encodeURIComponent(String(e))
                            }).join("&".concat(encodeURIComponent(i), "="));
                            return "".concat(encodeURIComponent(i), "=").concat(o)
                        }
                        return n instanceof Set ? e(t, Array.from(n), r) : n instanceof Date ? "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(n.toISOString())) : n instanceof Object ? Le(n, i) : "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(String(n)))
                    }(e, t[e], n)
                }).filter(function(e) {
                    return 0 < e.length
                }).join("&")
            }
            var xe, ke = (Be.prototype.value = function() {
                    return p(this, void 0, void 0, function() {
                        var t;
                        return y(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = this.transformer, [4, this.raw.json()];
                                case 1:
                                    return [2, t.apply(this, [e.sent()])]
                            }
                        })
                    })
                }, Be),
                ue = (o(Fe, xe = Mt), Fe);

            function Fe(e) {
                void 0 === e && (e = {});
                var t = v({}, e),
                    n = t.middleware || [];
                return n.unshift.apply(n, ge(e, "generator")), t.middleware = n, xe.call(this, t) || this
            }

            function Be(e, t) {
                void 0 === t && (t = function(e) {
                    return e
                }), this.raw = e, this.transformer = t
            }
            var Ve = function(e, t) {
                return (Ve = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    })(e, t)
            };

            function Ge(e, a, s, c) {
                return new(s = s || Promise)(function(n, t) {
                    function r(e) {
                        try {
                            o(c.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(c.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(r, i)
                    }
                    o((c = c.apply(e, a || [])).next())
                })
            }

            function je(n, r) {
                var i, o, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return c.next = e(0), c.throw = e(1), c.return = e(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function e(t) {
                    return function(e) {
                        return function(t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; c && (t[c = 0] && (s = 0)), s;) try {
                                if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, o = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((a = 0 < (a = s.trys).length && a[a.length - 1]) || 6 !== t[0] && 2 !== t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = r.call(n, s)
                            } catch (e) {
                                t = [6, e], o = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function He(e) {
                return null == (e = e) ? e : {
                    currencyType: e.currencyType,
                    entitledAmountMicros: e.entitledAmountMicros
                }
            }

            function Ye(e) {
                return null == (e = e) ? e : {
                    currencyCode: e.currencyCode,
                    units: e.units,
                    nanos: e.nanos
                }
            }

            function ze(e) {
                return null == (e = e) ? e : {
                    displayPrice: Ye(e.displayPrice)
                }
            }

            function Ke(e) {
                return e
            }

            function qe(e) {
                return e
            }

            function We(e) {
                return null == (e = e) ? e : {
                    paymentMethods: e.paymentMethods.map(Ke),
                    paymentProviders: e.paymentProviders.map(qe)
                }
            }

            function Xe(e) {
                return null == (e = e) ? e : {
                    type: e.type,
                    id: e.id
                }
            }

            function Je(e) {
                return null == (e = e) ? e : {
                    subscriptionProductKey: Xe(e.subscriptionProductKey),
                    periodType: e.periodType,
                    localizedPrice: Ye(e.localizedPrice)
                }
            }

            function Qe(e) {
                return null == (e = e) ? e : {
                    tierId: e.tierId,
                    periodIndex: e.periodIndex,
                    discountPercent: e.discountPercent
                }
            }

            function $e(e) {
                return null == (e = e) ? e : {
                    virtualTransactionDiscounts: null === e.virtualTransactionDiscounts ? null : e.virtualTransactionDiscounts.map(Qe),
                    isRobuxTransferEnabled: e.isRobuxTransferEnabled,
                    isTradingEnabled: e.isTradingEnabled,
                    isUgcPublishingEnabled: e.isUgcPublishingEnabled
                }
            }

            function Ze(e) {
                return null == (e = e) ? e : {
                    featureConfig: $e(e.featureConfig)
                }
            }

            function et(e) {
                return null == (e = e) ? e : {
                    currencySubscriptionProductDetails: Me(e, "currencySubscriptionProductDetails") ? He(e.currencySubscriptionProductDetails) : void 0,
                    developerSubscriptionProductDetails: Me(e, "developerSubscriptionProductDetails") ? function(e) {
                        return null == (e = e) ? e : {
                            universeId: e.universeId,
                            imageAssetId: e.imageAssetId,
                            localizedName: e.localizedName,
                            localizedDescription: e.localizedDescription
                        }
                    }(e.developerSubscriptionProductDetails) : void 0,
                    robloxSubscriptionProductDetails: Me(e, "robloxSubscriptionProductDetails") ? Ze(e.robloxSubscriptionProductDetails) : void 0
                }
            }

            function tt(e) {
                return null == (e = e) ? e : {
                    subscriptionProductDisplayInfo: Je(e.subscriptionProductDisplayInfo),
                    subscriptionProductTypeDetails: et(e.subscriptionProductTypeDetails)
                }
            }

            function nt(e) {
                return null == (e = e) ? e : {
                    subscriptionProductInfo: tt(e.subscriptionProductInfo)
                }
            }

            function rt(e) {
                return null == (e = e) ? e : {
                    productKeys: e.productKeys.map(Xe)
                }
            }

            function it(e) {
                return null == (e = e) ? e : {
                    id: e.id,
                    cardInfo: function(e) {
                        return null == (e = e) ? e : {
                            cardNetwork: e.cardNetwork,
                            lastFourDigits: e.lastFourDigits,
                            expirationMonth: e.expirationMonth,
                            expirationYear: e.expirationYear
                        }
                    }(e.cardInfo)
                }
            }

            function ot(e) {
                return null == (e = e) ? e : {
                    productKey: Xe(e.productKey),
                    periodType: e.periodType,
                    displayPrice: Ye(e.displayPrice),
                    activationTimestampMs: e.activationTimestampMs,
                    expirationTimestampMs: e.expirationTimestampMs,
                    nextRenewalTimestampMs: e.nextRenewalTimestampMs,
                    paymentProvider: e.paymentProvider,
                    purchasePlatform: e.purchasePlatform,
                    paymentProfile: it(e.paymentProfile)
                }
            }

            function at(e) {
                return null == (e = e) ? e : {
                    subscriptions: e.subscriptions.map(ot),
                    hasMore: e.hasMore,
                    cursor: e.cursor
                }
            }

            function st(e) {
                if (void 0 !== e) return null === e ? null : {
                    stripePurchaseOptions: function(e) {
                        if (void 0 !== e) return null === e ? null : {
                            cancelUrlPathName: e.cancelUrlPathName
                        }
                    }(e.stripePurchaseOptions),
                    appleAppStorePurchaseOptions: function(e) {
                        if (void 0 !== e) return null === e ? null : {
                            providerCountryCode: e.providerCountryCode
                        }
                    }(e.appleAppStorePurchaseOptions)
                }
            }

            function ct(e) {
                return null == (e = e) ? e : {
                    stripePurchasePayload: Me(e, "stripePurchasePayload") ? function(e) {
                        return null == (e = e) ? e : {
                            checkoutUrl: e.checkoutUrl
                        }
                    }(e.stripePurchasePayload) : void 0,
                    appleAppStorePurchasePayload: Me(e, "appleAppStorePurchasePayload") ? function(e) {
                        return null == (e = e) ? e : {
                            appAccountToken: e.appAccountToken,
                            partnerBillingJwtToken: e.partnerBillingJwtToken,
                            partnerBillingGenericProductId: e.partnerBillingGenericProductId
                        }
                    }(e.appleAppStorePurchasePayload) : void 0,
                    googlePlayStorePurchasePayload: Me(e, "googlePlayStorePurchasePayload") ? function(e) {
                        return null == (e = e) ? e : {
                            providerProductId: e.providerProductId,
                            providerProductType: e.providerProductType,
                            chargeRequestId: e.chargeRequestId
                        }
                    }(e.googlePlayStorePurchasePayload) : void 0,
                    creditBalancePurchasePayload: Me(e, "creditBalancePurchasePayload") ? function(e) {
                        return null == (e = e) ? e : {
                            checkoutUrl: e.checkoutUrl
                        }
                    }(e.creditBalancePurchasePayload) : void 0
                }
            }

            function ut(e) {
                return null == (e = e) ? e : {
                    paymentProvider: e.paymentProvider,
                    providerPurchasePayload: ct(e.providerPurchasePayload)
                }
            }
            var lt, de = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                Ve(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }(dt, lt = se), dt.prototype.subscriptionsV2GetProductDisplayPriceRaw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null === r.subscriptionProductType || void 0 === r.subscriptionProductType) throw new De("subscriptionProductType", "Required parameter requestParameters.subscriptionProductType was null or undefined when calling subscriptionsV2GetProductDisplayPrice.");
                                if (null === r.subscriptionProductId || void 0 === r.subscriptionProductId) throw new De("subscriptionProductId", "Required parameter requestParameters.subscriptionProductId was null or undefined when calling subscriptionsV2GetProductDisplayPrice.");
                                return n = {}, t = {}, void 0 !== r.robloxPlaceId && null !== r.robloxPlaceId && (t["Roblox-Place-Id"] = String(r.robloxPlaceId)), [4, this.request({
                                    path: "/v2/products/{subscriptionProductType}/{subscriptionProductId}/display-price".replace("{".concat("subscriptionProductType", "}"), encodeURIComponent(String(r.subscriptionProductType))).replace("{".concat("subscriptionProductId", "}"), encodeURIComponent(String(r.subscriptionProductId))),
                                    method: "GET",
                                    headers: t,
                                    query: n
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, ze)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2GetProductDisplayPrice = function(t, n) {
                return Ge(this, void 0, void 0, function() {
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2GetProductDisplayPriceRaw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2GetProductPaymentMetadataRaw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null === r.subscriptionProductType || void 0 === r.subscriptionProductType) throw new De("subscriptionProductType", "Required parameter requestParameters.subscriptionProductType was null or undefined when calling subscriptionsV2GetProductPaymentMetadata.");
                                if (null === r.subscriptionProductId || void 0 === r.subscriptionProductId) throw new De("subscriptionProductId", "Required parameter requestParameters.subscriptionProductId was null or undefined when calling subscriptionsV2GetProductPaymentMetadata.");
                                return n = {}, t = {}, [4, this.request({
                                    path: "/v2/products/{subscriptionProductType}/{subscriptionProductId}/payment-metadata".replace("{".concat("subscriptionProductType", "}"), encodeURIComponent(String(r.subscriptionProductType))).replace("{".concat("subscriptionProductId", "}"), encodeURIComponent(String(r.subscriptionProductId))),
                                    method: "GET",
                                    headers: t,
                                    query: n
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, We)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2GetProductPaymentMetadata = function(t, n) {
                return Ge(this, void 0, void 0, function() {
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2GetProductPaymentMetadataRaw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2GetSubscriptionProductInfoRaw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null === r.subscriptionProductType || void 0 === r.subscriptionProductType) throw new De("subscriptionProductType", "Required parameter requestParameters.subscriptionProductType was null or undefined when calling subscriptionsV2GetSubscriptionProductInfo.");
                                if (null === r.subscriptionProductId || void 0 === r.subscriptionProductId) throw new De("subscriptionProductId", "Required parameter requestParameters.subscriptionProductId was null or undefined when calling subscriptionsV2GetSubscriptionProductInfo.");
                                return n = {}, t = {}, [4, this.request({
                                    path: "/v2/products/{subscriptionProductType}/{subscriptionProductId}".replace("{".concat("subscriptionProductType", "}"), encodeURIComponent(String(r.subscriptionProductType))).replace("{".concat("subscriptionProductId", "}"), encodeURIComponent(String(r.subscriptionProductId))),
                                    method: "GET",
                                    headers: t,
                                    query: n
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, nt)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2GetSubscriptionProductInfo = function(t, n) {
                return Ge(this, void 0, void 0, function() {
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2GetSubscriptionProductInfoRaw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2ListAvailableSubscriptionProductsRaw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n = {}, void 0 !== r.productType && (n.ProductType = r.productType), void 0 !== r.includePurchased && (n.IncludePurchased = r.includePurchased), t = {}, [4, this.request({
                                    path: "/v2/products",
                                    method: "GET",
                                    headers: t,
                                    query: n
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, rt)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2ListAvailableSubscriptionProducts = function() {
                return Ge(this, arguments, void 0, function(t, n) {
                    return void 0 === t && (t = {}), je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2ListAvailableSubscriptionProductsRaw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2ListSubscriptionsRaw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n = {}, void 0 !== r.productType && (n.ProductType = r.productType), void 0 !== r.expirationTimestampMsStart && (n.ExpirationTimestampMsStart = r.expirationTimestampMsStart), void 0 !== r.expirationTimestampMsEnd && (n.ExpirationTimestampMsEnd = r.expirationTimestampMsEnd), void 0 !== r.cursor && (n.Cursor = r.cursor), void 0 !== r.resultsPerPage && (n.ResultsPerPage = r.resultsPerPage), t = {}, [4, this.request({
                                    path: "/v2/user/subscriptions",
                                    method: "GET",
                                    headers: t,
                                    query: n
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, at)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2ListSubscriptions = function() {
                return Ge(this, arguments, void 0, function(t, n) {
                    return void 0 === t && (t = {}), je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2ListSubscriptionsRaw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2PreparePurchaseV2Raw = function(r, i) {
                return Ge(this, void 0, void 0, function() {
                    var t, n;
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null === r.subscriptionProductType || void 0 === r.subscriptionProductType) throw new De("subscriptionProductType", "Required parameter requestParameters.subscriptionProductType was null or undefined when calling subscriptionsV2PreparePurchaseV2.");
                                if (null === r.subscriptionProductId || void 0 === r.subscriptionProductId) throw new De("subscriptionProductId", "Required parameter requestParameters.subscriptionProductId was null or undefined when calling subscriptionsV2PreparePurchaseV2.");
                                return n = {}, (t = {})["Content-Type"] = "application/json-patch+json", void 0 !== r.robloxUniverseId && null !== r.robloxUniverseId && (t["Roblox-Universe-Id"] = String(r.robloxUniverseId)), [4, this.request({
                                    path: "/v2/products/{subscriptionProductType}/{subscriptionProductId}/prepare-purchase".replace("{".concat("subscriptionProductType", "}"), encodeURIComponent(String(r.subscriptionProductType))).replace("{".concat("subscriptionProductId", "}"), encodeURIComponent(String(r.subscriptionProductId))),
                                    method: "POST",
                                    headers: t,
                                    query: n,
                                    body: function(e) {
                                        if (void 0 !== e) return null === e ? null : {
                                            paymentProvider: e.paymentProvider,
                                            universeId: e.universeId,
                                            paymentProviderPurchaseOptions: st(e.paymentProviderPurchaseOptions),
                                            paymentSessionId: e.paymentSessionId
                                        }
                                    }(r.preparePurchaseV2Request)
                                }, i)];
                            case 1:
                                return n = e.sent(), [2, new ke(n, ut)]
                        }
                    })
                })
            }, dt.prototype.subscriptionsV2PreparePurchaseV2 = function(t, n) {
                return Ge(this, void 0, void 0, function() {
                    return je(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscriptionsV2PreparePurchaseV2Raw(t, n)];
                            case 1:
                                return [4, e.sent().value()];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, dt);

            function dt() {
                return null !== lt && lt.apply(this, arguments) || this
            }

            function pt(t) {
                return gt(void 0, void 0, Promise, function() {
                    return Pt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, b.httpService.get(yt.url.getSubscriptions, St({}, t))];
                            case 1:
                                return [2, e.sent().data];
                            case 2:
                                return e.sent(), [2, {
                                    subscriptionProductsInfo: []
                                }];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function ft(t) {
                return gt(void 0, void 0, Promise, function() {
                    return Pt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, b.httpService.get(yt.url.getSubscriptionStatuses(t.subscriptionProductTargetKeys))];
                            case 1:
                                return [2, e.sent().data];
                            case 2:
                                return e.sent(), [2, {
                                    subscriptionStatuses: {}
                                }];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function mt(t) {
                return gt(void 0, void 0, Promise, function() {
                    return Pt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, b.httpService.post(yt.url.purchaseSubscription(t.targetKey), St({}, t))];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }

            function ht(i) {
                return gt(void 0, void 0, Promise, function() {
                    var t, n, r;
                    return Pt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = i.subscriptionProductTargetKey, r = i.placeId, n = i.priceInRobux, r = yt.url.purchaseWithRobux(t, r), [4, b.httpService.post(r, {
                                    priceInRobux: n
                                })];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }

            function bt(t) {
                return gt(void 0, void 0, Promise, function() {
                    return Pt(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, b.httpService.get(yt.url.getSubscriptionPaymentMethods(t))];
                            case 1:
                                return [2, e.sent().data]
                        }
                    })
                })
            }
            var Et = L.EnvironmentUrls.apiGatewayUrl,
                vt = L.EnvironmentUrls.premiumFeaturesApi,
                yt = {
                    url: {
                        getAbuseReportRevampUrl: function(e) {
                            var t = e.abuseVector,
                                n = e.submitterId,
                                r = e.targetId,
                                e = e.custom;
                            return "/report-abuse/?" + new URLSearchParams({
                                abuseVector: t,
                                submitterId: n,
                                targetId: r,
                                custom: e || ""
                            }).toString()
                        },
                        getSubscriptions: {
                            url: Et + "/v1/subscriptions/active-subscription-products",
                            withCredentials: !0
                        },
                        getSubscriptionStatuses: function(e) {
                            return {
                                url: Et + "/v1/subscriptions/statuses?" + e.map(function(e) {
                                    return "subscriptionProductTargetKeys=" + e
                                }).join("&"),
                                withCredentials: !0
                            }
                        },
                        getSubscriptionMetadata: {
                            url: Et + "/v1/subscriptions/metadata",
                            withCredentials: !0
                        },
                        getSubscriptionPaymentMethods: function(e) {
                            return {
                                url: Et + "/v1/subscriptions/payment-methods/" + e,
                                withCredentials: !0
                            }
                        },
                        purchaseSubscription: function(e) {
                            return {
                                url: Et + "/v1/subscriptions/prepare-purchase/" + e + "/web",
                                withCredentials: !0
                            }
                        },
                        purchaseWithRobux: function(e, t) {
                            return {
                                url: Et + "/v1/subscriptions/purchase-with-robux/" + e,
                                withCredentials: !0,
                                headers: {
                                    "Roblox-Place-Id": t
                                }
                            }
                        },
                        getUserPremiumSubscription: function(e) {
                            return {
                                url: vt + "/v1/users/" + e + "/subscriptions/details",
                                withCredentials: !0
                            }
                        },
                        getUserSubscriptions: {
                            url: Et + "/v1/subscriptions/user",
                            withCredentials: !0
                        },
                        cancelSubscription: function(e) {
                            return {
                                url: Et + "/v1/subscriptions/" + e + "/cancel",
                                withCredentials: !0
                            }
                        },
                        cancelPremiumSubscription: function(e) {
                            return {
                                url: vt + "/v1/users/" + e + "/subscriptions/cancel",
                                withCredentials: !0
                            }
                        },
                        dismissSubscriptionNotification: function(e) {
                            return {
                                url: Et + "/v1/subscriptions/" + e + "/dismiss-notification",
                                withCredentials: !0
                            }
                        },
                        updateSubscriptionPaymentProfile: function(e) {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.apiGatewayUrl + "/v1/subscriptions/" + e + "/payment-methods"
                            }
                        },
                        verifyPaymentProfileCreation: function(e) {
                            return {
                                url: Et + "/payments-gateway/v1/payment-profile/by-provider-id/" + O.STRIPE + "/" + e,
                                withCredentials: !0
                            }
                        },
                        getSavedPaymentProfiles: function() {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/payment-profiles"
                            }
                        },
                        getPaymentProfileSetupUrlConfig: function() {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/payment-profile/prepare"
                            }
                        },
                        getStripeEnabledForUserConfig: function() {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.apiGatewayUrl + "/payments-gateway/v1/stripe/enabled-for-user"
                            }
                        },
                        updatePaymentProfile: function(e) {
                            return {
                                url: Et + "/payments-gateway/v1/payment-profile/" + e,
                                withCredentials: !0
                            }
                        },
                        submitSafetyEvent: {
                            url: Et + "/abuse-reporting/v1/safety-event",
                            retryable: !0,
                            withCredentials: !0
                        },
                        getUserCreditBalance: function() {
                            return {
                                url: Et + "/credit-balance/v1/get-credit-balance",
                                withCredentials: !0
                            }
                        },
                        getUserBirthdateUrlConfig: function() {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.usersApi + "/v1/birthdate"
                            }
                        },
                        getSubscriptionResubscribeEligibility: function(e) {
                            return {
                                withCredentials: !0,
                                url: Et + "/v1/subscriptions/" + e + "/eligibility"
                            }
                        },
                        resubscribeSubscription: function(e) {
                            return {
                                withCredentials: !0,
                                url: Et + "/v1/subscriptions/" + e + "/resubscribe"
                            }
                        },
                        updateVipServerSubscription: function(e) {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.gamesApi + "/v1/vip-servers/" + e + "/subscription"
                            }
                        },
                        getMyPrivateServers: function() {
                            return {
                                withCredentials: !0,
                                url: L.EnvironmentUrls.gamesApi + "/v1/private-servers/my-private-servers"
                            }
                        }
                    }
                },
                St = function() {
                    return (St = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                gt = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                Pt = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Ct = (new de(new ue({
                    basePath: L.EnvironmentUrls.apiGatewayUrl + "/subscriptions",
                    credentials: "include"
                })), ReactStyleGuide),
                wt = window.EventTracker ? EventTracker : {
                    fireEvent: console.log,
                    start: console.log,
                    endSuccess: console.log,
                    endCancel: console.log,
                    endFailure: console.log
                },
                Tt = RobloxThumbnails;

            function At(e, t) {
                var n = {};
                for (i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                return n
            }
            var _t = function() {
                    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
                        var n, r = "";
                        if ("string" == typeof t || "number" == typeof t) r += t;
                        else if ("object" == typeof t)
                            if (Array.isArray(t))
                                for (var i = t.length, o = 0; o < i; o++) t[o] && (n = e(t[o])) && (r && (r += " "), r += n);
                            else
                                for (n in t) t[n] && (r && (r += " "), r += n);
                        return r
                    }(e)) && (r && (r += " "), r += t);
                    return r
                },
                It = {
                    XSmall: "size-[var(--icon-size-xsmall)]",
                    Small: "size-[var(--icon-size-small)]",
                    Medium: "size-[var(--icon-size-medium)]",
                    Large: "size-[var(--icon-size-large)]",
                    XLarge: "size-[var(--icon-size-xlarge)]"
                },
                Rt = U().forwardRef(function(e, t) {
                    var n = e.name,
                        r = e.size,
                        i = void 0 === r ? "Medium" : r,
                        r = e.className,
                        e = (e.children, At(e, ["name", "size", "className", "children"]));
                    return U().createElement("span", Object.assign({
                        ref: t,
                        role: "presentation",
                        className: _t("grow-0 shrink-0 basis-auto icon", n, It[i], r)
                    }, e))
                });

            function Dt() {
                return U().createElement("div", {
                    role: "presentation",
                    className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
                })
            }
            Rt.displayName = "Icon";
            var Ot = "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
                Nt = "opacity-[0.5]";

            function Ut(e) {
                var t = e.width,
                    e = e.height;
                return U().createElement("svg", {
                    className: "foundation-web-loading-spinner",
                    width: t,
                    height: e,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, U().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "currentColor",
                    d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
                }))
            }! function(e, t) {
                void 0 === t && (t = {});
                var n, r = t.insertAt;
                e && "undefined" != typeof document && (n = document.head || document.getElementsByTagName("head")[0], (t = document.createElement("style")).type = "text/css", "top" === r && n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)))
            }("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}");
            var Mt, Lt = {
                    Large: 24,
                    Medium: 20,
                    Small: 16,
                    XSmall: 12
                },
                xt = {
                    Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-medium"],
                    Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
                    Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
                    XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
                },
                kt = {
                    Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-alert", "content-action-alert"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                Ft = {
                    Emphasis: ["bg-action-standard", "content-action-standard"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-standard", "content-action-standard"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-standard", "content-action-standard"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                Bt = (0, N.forwardRef)(function(e, t) {
                    var n = e.children,
                        r = e.className,
                        i = e.style,
                        o = e.isDisabled,
                        a = void 0 !== o && o,
                        s = e.isLoading,
                        c = void 0 !== s && s,
                        u = e.icon,
                        o = e.size,
                        s = void 0 === o ? "Large" : o,
                        o = e.variant,
                        o = void 0 === o ? "Emphasis" : o,
                        e = At(e, ["children", "className", "style", "isDisabled", "isLoading", "icon", "size", "variant"]),
                        r = _t("foundation-web-button", a ? Nt : [Ot, "cursor-pointer"], "relative flex items-center justify-center stroke-none padding-y-none select-none", xt[s], (a ? Ft : kt)[o], r),
                        u = U().createElement(U().Fragment, null, U().createElement(Dt, null), c && U().createElement("div", {
                            "aria-hidden": "true",
                            className: "absolute flex"
                        }, U().createElement(Ut, {
                            width: Lt[s],
                            height: Lt[s]
                        })), U().createElement("span", {
                            className: _t("flex items-center min-width-0", "Large" === s || "Medium" === s ? "gap-small" : "gap-xsmall", c && "invisible")
                        }, u && U().createElement(Rt, {
                            name: u,
                            size: s
                        }), U().createElement("span", {
                            className: "padding-y-xsmall text-truncate-end text-no-wrap"
                        }, n))),
                        s = Object.assign({
                            textDecoration: "none"
                        }, i);
                    if ("a" === e.as) {
                        e.as;
                        n = e.href, i = At(e, ["as", "href"]);
                        return U().createElement("a", Object.assign({
                            ref: t
                        }, i, {
                            "aria-disabled": a,
                            href: a ? void 0 : n,
                            className: r,
                            style: s
                        }), u)
                    }
                    e = At(e, ["as"]);
                    return U().createElement("button", Object.assign({
                        ref: t,
                        type: "button"
                    }, e, {
                        disabled: a,
                        className: r,
                        style: s
                    }), u)
                }),
                Vt = RobloxItemPurchase,
                Gt = b.urlService.getAbsoluteUrl("/parents/account-setup?consentType=SavePaymentMethods"),
                jt = b.urlService.getAbsoluteUrl("/upgrades/redeem?ap=0&subscriptionTargetKey="),
                Ht = (b.urlService.getAbsoluteUrl("/upgrades/checkout/success"), b.urlService.getAbsoluteUrl("/redeem"), b.urlService.getAbsoluteUrl("/giftcards"), b.urlService.getAbsoluteUrl("/my/account#!/billing")),
                Yt = (0, N.createContext)(null),
                zt = function() {
                    var e = (0, N.useContext)(Yt);
                    if (null === e) throw new Error("System feedback context was not provided in the current scope!");
                    return e
                };
            (Mt = (0, N.createContext)({
                openModal: function() {
                    return {}
                },
                closeModal: function() {
                    return {}
                },
                updateModalContent: function(e, t, n, r, i, o) {
                    return {}
                }
            })).displayName = "singleButtonModal";
            var Kt, qt = Mt;

            function Wt() {
                return (0, N.useContext)(qt)
            }

            function Xt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }(se = Kt = Kt || {}).LOAD_SUBSCRIPTIONS = "LOAD_SUBSCRIPTIONS", se.OPEN_STRIPE_MODAL = "OPEN_STRIPE_MODAL", se.CLOSE_STRIPE_MODAL = "CLOSE_STRIPE_MODAL", se.SEND_STORE_PAGE_LOAD_EVENT = "SEND_STORE_PAGE_LOAD_EVENT", se.MARK_SUBSCRIBED = "MARK_SUBSCRIBED";
            var Jt = function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    baseUrl: ""
                };
                if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                Xt(this, "configuration", void 0), Xt(this, "baseUrl", void 0), this.configuration = t, this.baseUrl = this.configuration.baseUrl
            };

            function Qt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function $t() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new Jt;
                if (!(this instanceof $t)) throw TypeError("Cannot call a class as a function");
                Qt(this, "configuration", void 0), Qt(this, "baseUrl", void 0), this.configuration = e, this.baseUrl = e.baseUrl
            }(function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            })($t.prototype, [{
                key: "sendEvent",
                value: function(e) {
                    var t = e.localTime,
                        n = e.target,
                        r = e.eventType,
                        i = e.context,
                        o = e.additionalProperties,
                        a = e.currentUrl,
                        s = e.guestId,
                        e = e.sessionId,
                        t = t.toISOString(),
                        c = new URL("".concat(this.baseUrl, "/pe"));
                    return c.searchParams.append("t", n), c.searchParams.append("evt", r), c.searchParams.append("ctx", i), c.searchParams.append("lt", t), c.searchParams.append("url", a || window.location.href), void 0 !== s && c.searchParams.append("gid", s), void 0 !== e && c.searchParams.append("sid", e), void 0 !== o && Object.keys(o).forEach(function(e) {
                        c.searchParams.append(e, (null != (e = o[e]) ? e : "").toString())
                    }), fetch(c.href, {
                        credentials: "same-origin"
                    })
                }
            }, {
                key: "sendEventViaImg",
                value: function(e, t) {
                    var n = e.localTime,
                        r = e.target,
                        i = e.eventType,
                        o = e.context,
                        a = e.additionalProperties,
                        s = e.currentUrl,
                        c = e.guestId,
                        e = e.sessionId,
                        n = n.toISOString(),
                        u = new URL("".concat(this.baseUrl, "/e.png"));
                    u.searchParams.append("t", r), u.searchParams.append("evt", i), u.searchParams.append("ctx", o), u.searchParams.append("lt", n), u.searchParams.append("url", s || window.location.href), void 0 !== c && u.searchParams.append("gid", c), void 0 !== e && u.searchParams.append("sid", e), void 0 !== a && Object.keys(a).forEach(function(e) {
                        u.searchParams.append(e, (null != (e = a[e]) ? e : "").toString())
                    });
                    e = new Image;
                    return e.src = u.href, e.onload = function() {
                        void 0 !== t && t(!0)
                    }, e.onerror = function(e) {
                        void 0 !== t && t(!1), console.error(e)
                    }, e
                }
            }]), de = $t;
            var Zt, en, tn, nn = function() {
                    return (nn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                ue = L.EnvironmentUrls.domain;
            (Mt = Zt = Zt || {}).IMPRESSION = "Impression", Mt.USER_INPUT = "UserInput", Mt.VIEW_SHOWN = "ViewShown", (se = en = en || {}).SUBSCRIBE = "Subscribe", se.OPEN_PURCHASE_MODAL = "OpenPurchaseModal", se.CANCEL = "Cancel", se.I_AM_A_PARENT_OR_GUARDIAN_BUTTON = "IAmAParentOrGuardianButton", se.SAVE_NEW_PAYMENT_METHOD = "SaveNewPaymentMethod", se.ASK_PARENT_BUTTON = "AskParentButton", (Mt = tn = tn || {}).GAME_DETAILS = "GameDetails", Mt.PURCHASE_MODAL = "PurchaseModal", Mt.PARENT_PERMISSION_NEEDED_MODAL = "ParentPermissionNeededModal", Mt.VPC_NEW_PAYMENT_MODAL = "VPCNewPaymentModal", Mt.PURCHASE_DISABLED_PAYMENT_MODAL = "PurchaseDisabledPaymentModal", Mt.DEVSUB_CARD = "DevSubCard", Mt.STRIPE_CHECKOUT = "StripeCheckout", Mt.CREDIT_BALANCE_CHECKOUT = "CreditBalanceCheckout", Mt.ERROR = "Error";
            var rn = new de(new Jt({
                    baseUrl: "https://ecsv2." + ue + "/www"
                })),
                on = ((se = {})[Zt.USER_INPUT] = ((Mt = {})[tn.PURCHASE_MODAL] = ((ue = {})[en.SUBSCRIBE] = "GameSubscriptionsPurchaseModalSubscribeClicked", ue[en.CANCEL] = "GameSubscriptionsPurchaseModalCancelClicked", ue), Mt[tn.DEVSUB_CARD] = ((ue = {})[en.OPEN_PURCHASE_MODAL] = "GameSubscriptionsDevSubCardOpenPurchaseModalClicked", ue), Mt), se),
                an = {
                    sendExperienceSubscriptionEvent: function(e, t, n, r, i) {
                        if (e) {
                            var t = {
                                purchaseFlowUuid: e,
                                purchaseFlowEventType: t,
                                viewName: n
                            };
                            i && (t.inputType = i), t.subscriptionProviderId = r.subscriptionProviderId;
                            var n = r.subscriptionTargetKey.split("-"),
                                i = n[0],
                                n = n[1];
                            t.subscriptionProductTypePrefix = i, t.subscriptionId = n, t.localizedSubscriptionName = r.name, t.localizedSubscriptionDescription = r.description, t.priceInCentsUsd = r.priceTier, t.displayPrice = r.displayPrice;
                            i = {
                                target: "www",
                                localTime: new Date,
                                eventType: "SubscriptionPurchase",
                                context: "",
                                additionalProperties: nn({}, t)
                            };
                            return (n = t).purchaseFlowEventType && n.viewName && n.inputType && (r = n.purchaseFlowEventType, t = n.viewName, n = n.inputType, (n = null === (t = null === (r = on[r]) || void 0 === r ? void 0 : r[t]) || void 0 === t ? void 0 : t[n]) && (0, wt.fireEvent)(n)), rn.sendEventViaImg(i)
                        }
                        return null
                    }
                },
                sn = function() {
                    return (sn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                cn = {
                    subscriptions: [],
                    impressionsSent: !1,
                    stripeClientSecret: "",
                    showStripeModal: !1,
                    purchaseFlowUuid: b.uuidService.generateRandomUuid(),
                    selectedSubscription: null,
                    pathName: function() {
                        var e = window.location.pathname;
                        L.Endpoints && L.Endpoints.supportLocalizedUrls && (e = L.Endpoints.removeUrlLocale(e));
                        e = e.substring(1);
                        return e.startsWith("games/store-section") ? e : e + "#!/store"
                    }()
                };

            function un(e, t) {
                switch (t.type) {
                    case Kt.LOAD_SUBSCRIPTIONS:
                        return sn(sn({}, e), {
                            subscriptions: t.subscriptions
                        });
                    case Kt.OPEN_STRIPE_MODAL:
                        return sn(sn({}, e), {
                            showStripeModal: !0,
                            stripeClientSecret: t.clientSecret,
                            selectedSubscription: t.subscription
                        });
                    case Kt.CLOSE_STRIPE_MODAL:
                        return sn(sn({}, e), {
                            showStripeModal: !1
                        });
                    case Kt.MARK_SUBSCRIBED:
                        var n = e.subscriptions.map(function(e) {
                            return e.subscriptionTargetKey === t.subscriptionTargetKey ? sn(sn({}, e), {
                                isForSale: !1
                            }) : e
                        });
                        return sn(sn({}, e), {
                            subscriptions: n
                        });
                    case Kt.SEND_STORE_PAGE_LOAD_EVENT:
                        return e.impressionsSent ? e : ((r = e).subscriptions.forEach(function(e) {
                            an.sendExperienceSubscriptionEvent(r.purchaseFlowUuid, Zt.IMPRESSION, tn.GAME_DETAILS, e)
                        }), sn(sn({}, e), {
                            impressionsSent: !0
                        }));
                    default:
                        return e
                }
                var r
            }
            var ln, dn = (0, N.createContext)(null);

            function pn() {
                var e = (0, N.useContext)(dn);
                if (null == e) throw new Error("GameSubscriptionsContext was not provided in the current scope.");
                return e
            }

            function fn(e, t) {
                switch (t) {
                    case ln.FraudPaymentAuthorizationAttempt:
                        return e("Label.Sublabel.FraudPaymentAbuse");
                    case ln.FraudVirtualEconomyAbuse:
                        return e("Label.Sublabel.FraudVirtualEconomyAbuse");
                    case ln.FraudAbuseOfAffiliateSystem:
                        return e("Label.Sublabel.FraudAbuseOfTheAffiliateSystem");
                    case ln.FraudAttemptedUnauthorizedPaymentMethodUse:
                        return e("Label.Sublabel.FraudAttemptedUnauthorizedPaymentMethodUse");
                    case ln.FraudRepeatedRefundRequests:
                        return e("Label.Sublabel.FraudRepeatedRefundRequests");
                    case ln.FraudSuspiciousRefundRequests:
                        return e("Label.Sublabel.FraudSuspiciousRefundRequests");
                    case ln.FraudUnauthorizedPurchase:
                        return e("Label.Sublabel.FraudUnauthorizedPurchase");
                    case ln.FraudUseOfUnauthorizedOffPlatformTransactions:
                        return e("Label.Sublabel.FraudUseOfUnauthorizedOffPlatformTransactions");
                    case ln.FraudUseOfUnauthorizedPaymentMethod:
                        return e("Label.Sublabel.FraudUseOfUnauthorizedPaymentMethod");
                    case ln.FraudSuspiciousAccountPatterns:
                        return e("Label.Sublabel.FraudSuspiciousAccountPatterns");
                    case ln.FraudChargeback:
                        return e("Label.AbuseType.Chargeback");
                    default:
                        return e("Label.Sublabel.FraudPaymentAbuse")
                }
            }

            function mn(e, t, n) {
                var r = Math.ceil(n / 60);
                if (24 < r) {
                    n = Math.ceil(r / 24);
                    return e("Text.EconomicRestrictionsDays", {
                        violation: fn(e, t),
                        day: n
                    })
                }
                return e("Text.EconomicRestrictionsHours", {
                    violation: fn(e, t),
                    hour: r
                })
            }

            function hn(e) {
                return null != e.priceInRobux && 0 < e.priceInRobux
            }

            function bn(s, c, u, l, d, p, f, m) {
                return vn(void 0, void 0, Promise, function() {
                    var n, r, i, o, a;
                    return yn(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, mt({
                                    targetKey: d.subscriptionTargetKey,
                                    stripeCancelUrlPathName: f,
                                    paymentProvider: m
                                })];
                            case 1:
                                return void 0 !== (a = e.sent()).invalidReason && null !== a.invalidReason ? (i = a.invalidReason, r = i.split("/"), n = r[0], i = r[1], r = r[2], "EconomicRestrictions" === n && Object.values(ln).includes(i) && void 0 !== r && (i = i, o = parseInt(r, 10), u({
                                    failureReason: i,
                                    expirationTimeInMinutes: o
                                })), [2]) : (m === O.STRIPE && a.providerPayload ? (o = JSON.parse(a.providerPayload)).CheckoutUrl && (an.sendExperienceSubscriptionEvent(p, Zt.VIEW_SHOWN, tn.STRIPE_CHECKOUT, d, en.SUBSCRIBE), l(), window.location.href = o.CheckoutUrl) : m === O.CREDITBALANCE && a.providerPayload ? (an.sendExperienceSubscriptionEvent(p, Zt.VIEW_SHOWN, tn.CREDIT_BALANCE_CHECKOUT, d, en.SUBSCRIBE), l(), window.location.href = (t = d.subscriptionTargetKey, "" + jt + t)) : s(), [3, 3]);
                            case 2:
                                return a = e.sent(), 500 === (a = a).status && s(), c(a), [3, 3];
                            case 3:
                                return [2]
                        }
                        var t
                    })
                })
            }

            function En(e) {
                var t = e.title,
                    n = e.show,
                    r = e.assetId,
                    i = e.provider,
                    o = e.name,
                    a = e.displayPrice,
                    s = e.description,
                    c = e.isForSale,
                    u = e.cadence,
                    l = e.cadenceDisclaimer,
                    d = e.closeModal,
                    p = e.primaryPaymentProviderType,
                    f = e.allPaymentProviderTypes,
                    m = e.subscription,
                    h = zt().systemFeedbackService,
                    b = Wt(),
                    E = b.updateModalContent,
                    v = b.openModal,
                    y = b.closeModal,
                    e = (P = (0, N.useState)(!0))[0],
                    S = P[1],
                    g = (0, M.useTranslation)().translate,
                    P = (b = pn()).state,
                    C = b.dispatch,
                    w = P.purchaseFlowUuid,
                    T = P.pathName,
                    A = 1 < f.length,
                    P = (0, N.useCallback)(function() {
                        an.sendExperienceSubscriptionEvent(w, Zt.USER_INPUT, tn.PARENT_PERMISSION_NEEDED_MODAL, m, en.I_AM_A_PARENT_OR_GUARDIAN_BUTTON), window.location.href = Gt
                    }, [w, m]),
                    _ = (0, N.useCallback)(function() {
                        an.sendExperienceSubscriptionEvent(w, Zt.USER_INPUT, tn.PURCHASE_DISABLED_PAYMENT_MODAL, m, en.ASK_PARENT_BUTTON), window.location.href = Ht
                    }, [w, m]),
                    I = hn(m),
                    R = (0, N.useCallback)(function(e, t) {
                        if (an.sendExperienceSubscriptionEvent(w, Zt.USER_INPUT, tn.PURCHASE_MODAL, m, en.SUBSCRIBE), e.stopPropagation(), S(!0), I) {
                            var e = j().placeId,
                                n = function() {
                                    S(!1), d()
                                },
                                r = function(e) {
                                    h.warning(e || g(x.ErrorGenericError)), n()
                                };
                            return i = function() {
                                C({
                                    type: Kt.MARK_SUBSCRIBED,
                                    subscriptionTargetKey: m.subscriptionTargetKey
                                }), n()
                            }, o = r, a = function(e) {
                                e = e.data.errorMessage;
                                r(e)
                            }, s = m, c = parseInt(null != e ? e : "0", 10), u = w, void vn(void 0, void 0, Promise, function() {
                                var t, n;
                                return yn(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, ht({
                                                subscriptionProductTargetKey: s.subscriptionTargetKey,
                                                placeId: c,
                                                priceInRobux: null !== (n = s.priceInRobux) && void 0 !== n ? n : 0
                                            })];
                                        case 1:
                                            return (t = e.sent()).isSuccess ? (an.sendExperienceSubscriptionEvent(u, Zt.VIEW_SHOWN, tn.PURCHASE_MODAL, s, en.SUBSCRIBE), i()) : o(t.errorMessage), [3, 3];
                                        case 2:
                                            return t = e.sent(), 500 === (t = t).status && o(""), a(t), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                        var i, o, a, s, c, u;
                        bn(function() {
                            h.warning(g(x.ErrorGenericError)), d()
                        }, function(e) {
                            var t, e = e.data,
                                n = e.clientHint,
                                r = e.errorCode;
                            switch (S(!1), r) {
                                case D.SAVED_CC_REQUIRED:
                                    d(), n ? C({
                                        type: Kt.OPEN_STRIPE_MODAL,
                                        clientSecret: n,
                                        subscription: m
                                    }) : h.warning(g(x.ErrorGenericError));
                                    break;
                                case D.VPC_REQUIRED:
                                    an.sendExperienceSubscriptionEvent(w, Zt.VIEW_SHOWN, tn.PURCHASE_DISABLED_PAYMENT_MODAL, m, en.SUBSCRIBE), E(g(k), g(F), g(B), !1, function() {
                                        return _
                                    }, g(V)), d(), v();
                                    break;
                                case D.EXCEED_PARENTAL_SPEND_LIMIT:
                                case D.USER_HAS_SPEND_LIMIT_SET:
                                case D.RESTRICTED_USER:
                                case D.UNSUPPORTED_LOCALE:
                                    E(g(x.HeadingCannotSubscribe), null !== (t = g(null !== (t = G[r]) && void 0 !== t ? t : "")) && void 0 !== t ? t : g(x.ErrorGenericError), g("Action.OK"), !0, function() {
                                        return y
                                    }), d(), v();
                                    break;
                                default:
                                    h.warning(g(x.ErrorGenericError))
                            }
                            d()
                        }, function(e) {
                            S(!1), E(g(x.HeadingCannotSubscribe), mn(g, e.failureReason, e.expirationTimeInMinutes), g("Action.OK"), !0, function() {
                                return y
                            }), d(), v()
                        }, function() {
                            return S(!1)
                        }, m, w, T, t)
                    }, [y, d, C, P, I, v, T, w, m, h, g, E]);
                return (0, N.useEffect)(function() {
                    (I || p) && S(!1)
                }, [I, p]), P = (0, N.useMemo)(function() {
                    if (!c) return U().createElement(Ct.Button, {
                        width: Ct.Button.widths.full,
                        size: Ct.Button.sizes.large,
                        onClick: function(e) {
                            return R(e, p)
                        },
                        isDisabled: !0
                    }, g(x.LabelSubscribed));
                    if (!A) return U().createElement(Ct.Button, {
                        width: Ct.Button.widths.full,
                        size: Ct.Button.sizes.large,
                        onClick: function(e) {
                            return R(e, O.STRIPE)
                        }
                    }, g(x.ActionSubscribe));
                    var e = x.ActionSubscribeWithCreditDebitCard,
                        t = x.ActionSubscribePayAnotherWay,
                        n = f[1];
                    return p === O.CREDITBALANCE && (e = x.ActionSubscribeWithRobloxCredit), U().createElement("div", null, U().createElement(Ct.Button, {
                        width: Ct.Button.widths.full,
                        size: Ct.Button.sizes.large,
                        onClick: function(e) {
                            return R(e, p)
                        }
                    }, g(e) || p), U().createElement(Ct.Button, {
                        width: Ct.Button.widths.full,
                        size: Ct.Button.sizes.large,
                        className: "btn-secondary-lg btn-secondary-margin",
                        onClick: function(e) {
                            return R(e, n || "")
                        }
                    }, g(t) || n))
                }, [c, A, f, p, g, R]), U().createElement(Ct.Modal, {
                    show: n,
                    onHide: d,
                    size: "md",
                    className: "rbx-subscription-modal",
                    centered: !0,
                    scrollable: !1
                }, U().createElement(Ct.Modal.Header, {
                    title: t,
                    showCloseButton: !0,
                    onClose: d
                }), U().createElement(Ct.Modal.Body, null, U().createElement("div", {
                    className: "modal-body-sub-info"
                }, U().createElement("div", {
                    className: "thumbnail-container"
                }, U().createElement(Tt.Thumbnail2d, {
                    type: Tt.ThumbnailTypes.assetThumbnail,
                    targetId: r,
                    altName: o,
                    imgClassName: "subscription-thumbnail",
                    containerClass: "subscription-thumbnail"
                })), U().createElement("span", {
                    className: "font-header-2 text-emphasis sub-info sub-text-normal"
                }, i), U().createElement("span", {
                    className: "font-header-1 text-emphasis sub-info sub-text-title"
                }, o), U().createElement("span", {
                    className: "sub-info"
                }, U().createElement("span", {
                    className: "font-header-2 text-emphasis sub-text-normal"
                }, a), U().createElement("span", {
                    className: "font-header-2 text-default sub-text-normal"
                }, u)), U().createElement("span", {
                    className: "font-header-2 text-default sub-info sub-text-normal"
                }, l)), U().createElement("div", {
                    className: "font-header-2 text-default description sub-info sub-text-normal"
                }, s)), U().createElement(Ct.Modal.Footer, {
                    className: A ? "modal-footer-2-button" : ""
                }, e ? U().createElement("span", {
                    className: "spinner spinner-default"
                }) : P))
            }(Mt = ln = ln || {}).FraudPaymentAuthorizationAttempt = "FraudPaymentAuthorizationAttempt", Mt.FraudVirtualEconomyAbuse = "FraudVirtualEconomyAbuse", Mt.FraudAbuseOfAffiliateSystem = "FraudAbuseOfAffiliateSystem", Mt.FraudAttemptedUnauthorizedPaymentMethodUse = "FraudAttemptedUnauthorizedPaymentMethodUse", Mt.FraudRepeatedRefundRequests = "FraudRepeatedRefundRequests", Mt.FraudSuspiciousRefundRequests = "FraudSuspiciousRefundRequests", Mt.FraudUnauthorizedPurchase = "FraudUnauthorizedPurchase", Mt.FraudUseOfUnauthorizedOffPlatformTransactions = "FraudUseOfUnauthorizedOffPlatformTransactions", Mt.FraudUseOfUnauthorizedPaymentMethod = "FraudUseOfUnauthorizedPaymentMethod", Mt.FraudSuspiciousAccountPatterns = "FraudSuspiciousAccountPatterns", Mt.FraudChargeback = "FraudChargeback";
            var vn = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                yn = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Sn = {
                    Small: "XSmall",
                    Medium: "Small",
                    Large: "Medium"
                },
                gn = {
                    Small: ["height-600", "text-label-small"],
                    Medium: ["height-800", "text-label-medium"],
                    Large: ["height-1000", "text-label-medium"]
                },
                Pn = {
                    Small: "padding-left-small",
                    Medium: "padding-left-medium",
                    Large: "padding-left-large"
                },
                Cn = {
                    Small: "padding-left-small",
                    Medium: "padding-left-medium",
                    Large: "padding-left-medium"
                },
                wn = {
                    Small: "padding-right-small",
                    Medium: "padding-right-medium",
                    Large: "padding-right-large"
                },
                Tn = {
                    Small: "padding-right-small",
                    Medium: "padding-right-medium",
                    Large: "padding-right-medium"
                },
                An = {
                    Small: "padding-left-xsmall",
                    Medium: "padding-left-[var(--size-150)]",
                    Large: "padding-left-small"
                },
                _n = {
                    Small: "padding-right-[var(--size-150)]",
                    Medium: "padding-right-small",
                    Large: "padding-right-[var(--size-250)]"
                },
                In = {
                    Standard: "bg-shift-300",
                    Utility: "bg-none"
                },
                Rn = (0, N.forwardRef)(function(e, t) {
                    var n = e.className,
                        r = e.style,
                        i = e.text,
                        o = e.isDisabled,
                        a = void 0 !== o && o,
                        s = e.size,
                        c = void 0 === s ? "Medium" : s,
                        u = e.variant,
                        o = void 0 === u ? "Standard" : u,
                        s = e.leading,
                        u = e.trailing,
                        e = At(e, ["className", "style", "text", "isDisabled", "size", "variant", "leading", "trailing"]),
                        n = _t(a ? Nt : [Ot, "cursor-pointer"], "relative flex justify-center items-center radius-circle stroke-none", (null == s ? Pn : Cn)[c], (null == u ? wn : Tn)[c], gn[c], n),
                        i = U().createElement(U().Fragment, null, U().createElement(Dt, null), s && U().createElement(Rt, {
                            name: s,
                            size: Sn[c]
                        }), U().createElement("span", {
                            className: _t("padding-y-xsmall text-no-wrap text-truncate-end", null != s && An[c], null != u && _n[c])
                        }, i), u && U().createElement(Rt, {
                            name: u,
                            size: Sn[c]
                        })),
                        u = Object.assign({
                            textDecoration: "none"
                        }, r);
                    if ("a" === e.as) {
                        e.as;
                        c = e.href, r = At(e, ["as", "href"]);
                        return U().createElement("a", Object.assign({
                            ref: t
                        }, r, {
                            "aria-disabled": a,
                            href: a ? void 0 : c,
                            className: _t(n, In[o], "content-action-utility"),
                            style: u
                        }), i)
                    }
                    e.as;
                    var l = e.isChecked,
                        d = e.onCheckedChange,
                        e = At(e, ["as", "isChecked", "onCheckedChange"]);
                    return U().createElement("button", Object.assign({
                        ref: t,
                        type: "button"
                    }, e, {
                        className: _t(l ? "bg-inverse-surface-0" : In[o], l ? "content-inverse-emphasis" : "content-action-utility", n),
                        style: u,
                        "aria-pressed": l,
                        disabled: a,
                        onClick: null == d ? void 0 : function() {
                            return d(!l)
                        }
                    }), i)
                }),
                Dn = (0, N.forwardRef)(function(e, t) {
                    var n = e.className,
                        r = e.style,
                        i = e.orientation,
                        o = void 0 === i ? "horizontal" : i,
                        a = e.variant,
                        s = void 0 === a ? "Standard" : a,
                        c = At(e, ["className", "style", "orientation", "variant"]),
                        i = "vertical" === o,
                        a = i ? {
                            height: "100%",
                            width: 0,
                            borderLeftWidth: "var(--stroke-standard)",
                            borderTopWidth: 0
                        } : "Thick" === s ? {
                            height: "var(--size-250)",
                            borderTop: "var(--stroke-standard)",
                            borderLeftWidth: 0,
                            background: "var(--color-common-heavydivider, rgba(0, 0, 0, 0.50))"
                        } : {
                            height: 0,
                            borderTopWidth: "var(--stroke-standard)",
                            borderLeftWidth: 0
                        },
                        e = {};
                    return i || "Inset" !== s ? i || "InsetLeft" !== s ? i || "InsetRight" !== s || (e = {
                        marginRight: "var(--padding-xlarge)"
                    }) : e = {
                        marginLeft: "var(--padding-xlarge)"
                    } : e = {
                        marginLeft: "var(--padding-xlarge)",
                        marginRight: "var(--padding-xlarge)"
                    }, U().createElement("div", Object.assign({
                        ref: t
                    }, c, {
                        role: "separator",
                        "data-orientation": o,
                        "aria-orientation": o,
                        style: Object.assign(Object.assign(Object.assign({
                            borderRightWidth: 0,
                            borderBottomWidth: 0,
                            boxSizing: "border-box",
                            borderStyle: "solid"
                        }, a), e), r),
                        className: _t("stroke-default self-stretch", n)
                    }))
                });

            function On(e) {
                var t = e.variant,
                    n = e.size,
                    r = e.isCircular,
                    i = e.className,
                    e = At(e, ["variant", "size", "isCircular", "className"]);
                return U().createElement("button", Object.assign({
                    type: "button",
                    className: _t("foundation-web-close-affordance flex stroke-none bg-none cursor-pointer", Ot, Un[t], Nn[n], r && "radius-circle", i)
                }, e), U().createElement(Dt, null), U().createElement(Rt, {
                    name: "icon-regular-x",
                    size: n
                }))
            }
            Dn.displayName = "Divider";
            var Nn = {
                    Small: "padding-xsmall",
                    Medium: "padding-small",
                    Large: "padding-medium"
                },
                Un = {
                    Utility: "bg-action-link",
                    OverMedia: "bg-over-media-100"
                };

            function Mn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ln(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ln(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ln(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function xn(e) {
                var t = e.show,
                    n = e.subscription,
                    r = e.onClose,
                    i = e.onSubscribe,
                    o = e.onReport,
                    a = e.translate,
                    s = n.name,
                    c = n.subscriptionProviderName,
                    u = n.description,
                    l = n.displayPrice,
                    d = n.iconImageAssetId,
                    p = n.isForSale,
                    f = hn(n),
                    m = (0, N.useState)(!1),
                    h = m[0],
                    b = m[1],
                    E = (0, N.useState)(!1),
                    e = E[0],
                    v = E[1],
                    y = (0, N.useRef)(null),
                    S = (0, N.useCallback)(function() {
                        var e = y.current;
                        e && v(e.scrollHeight - e.scrollTop - e.clientHeight <= 2)
                    }, []),
                    g = (0, N.useCallback)(function(e) {
                        "Escape" === e.key && r()
                    }, [r]);
                return (0, N.useEffect)(function() {
                    return t ? (document.addEventListener("keydown", g), document.body.style.overflow = "hidden", requestAnimationFrame(S)) : v(!1),
                        function() {
                            document.removeEventListener("keydown", g), document.body.style.overflow = ""
                        }
                }, [t, g, S]), m = (0, N.useCallback)(function() {
                    return Vn(void 0, void 0, void 0, function() {
                        var t;
                        return Gn(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), t = "" + window.location.origin + window.location.pathname, t = t + "#!/store?subscription=" + encodeURIComponent(n.subscriptionTargetKey), [4, navigator.clipboard.writeText(t)];
                                case 1:
                                    return e.sent(), b(!0), [3, 3];
                                case 2:
                                    return e.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, [n.subscriptionTargetKey]), E = (0, N.useCallback)(function(e) {
                    e.target === e.currentTarget && r()
                }, [r]), a = U().createElement(U().Fragment, null, U().createElement("div", {
                    className: "subscription-drawer-overlay" + (t ? " open" : ""),
                    onClick: E
                }), U().createElement("div", {
                    className: "subscription-drawer" + (t ? " open" : "")
                }, U().createElement("div", {
                    className: "subscription-drawer-header"
                }, U().createElement(Rt, {
                    name: "icon-filled-x",
                    size: "Large",
                    onClick: r
                })), U().createElement("div", {
                    className: "subscription-drawer-body",
                    ref: y,
                    onScroll: S
                }, U().createElement("div", {
                    className: "drawer-thumbnail-container-wrapper"
                }, U().createElement("div", {
                    className: "drawer-thumbnail-container"
                }, U().createElement(Tt.Thumbnail2d, {
                    type: Tt.ThumbnailTypes.assetThumbnail,
                    size: Tt.DefaultThumbnailSize,
                    targetId: d,
                    altName: s,
                    imgClassName: "subscription-thumbnail",
                    containerClass: "subscription-thumbnail"
                }))), U().createElement("span", {
                    className: "text-heading-small content-emphasis drawer-sub-name"
                }, s), U().createElement("p", {
                    className: "text-body-large content-default drawer-provider-name"
                }, c), U().createElement("div", {
                    className: "drawer-price-row"
                }, f ? U().createElement(U().Fragment, null, U().createElement(Rt, {
                    name: "icon-filled-robux",
                    size: "Small",
                    className: "content-emphasis"
                }), U().createElement("span", {
                    className: "text-title-large content-emphasis"
                }, l)) : U().createElement("span", {
                    className: "text-title-large content-emphasis"
                }, l), U().createElement("span", {
                    className: "text-title-large content-emphasis drawer-price-cadence"
                }, a(x.LabelPerMonth))), U().createElement("div", {
                    className: "drawer-chips-row"
                }, U().createElement(Rn, {
                    size: "Medium",
                    text: a(x.ActionShare),
                    variant: "Standard",
                    isChecked: !1,
                    leading: "icon-regular-arrow-thick-to-right",
                    onCheckedChange: m
                }), U().createElement(Rn, {
                    size: "Medium",
                    text: a(x.ActionReport),
                    variant: "Standard",
                    isChecked: !1,
                    leading: "icon-regular-flag",
                    onCheckedChange: o
                })), U().createElement("div", {
                    className: "font-body drawer-description"
                }, u)), U().createElement("div", {
                    className: "subscription-drawer-footer"
                }, !e && U().createElement(Dn, {
                    orientation: "horizontal",
                    variant: "Standard"
                }), U().createElement(Bt, {
                    as: "button",
                    size: "Large",
                    variant: "Emphasis",
                    isDisabled: !p,
                    onClick: i
                }, a(p ? x.ActionSubscribe : x.LabelSubscribed)))), h && U().createElement("div", {
                    className: "subscription-drawer-snackbar"
                }, U().createElement(Bn, {
                    title: a(x.MessageLinkCopied),
                    shouldAutoDismiss: !0,
                    onClose: function() {
                        return b(!1)
                    }
                }))), P().createPortal(a, document.body)
            }

            function kn(t) {
                return jn(void 0, void 0, Promise, function() {
                    return Hn(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, b.httpService.post(yt.url.submitSafetyEvent, {
                                    safetyEvent: {
                                        eventTime: Date.now(),
                                        idempotencyKey: "subscriptions/" + t.subscriptionTargetKey + "/" + t.reporterId,
                                        tags: {
                                            SUBMITTER_USER_ID: {
                                                valueList: [{
                                                    data: t.reporterId
                                                }]
                                            },
                                            REPORTED_ABUSE_VECTOR: {
                                                valueList: [{
                                                    data: "subscriptions"
                                                }]
                                            },
                                            REPORT_TARGET_SUBSCRIPTION_TARGET_KEY: {
                                                valueList: [{
                                                    data: t.subscriptionTargetKey
                                                }]
                                            },
                                            REPORT_TARGET_ASSET_ID: {
                                                valueList: [{
                                                    data: t.imageAssetId
                                                }]
                                            },
                                            ENTRY_POINT: {
                                                valueList: [{
                                                    data: "website"
                                                }]
                                            },
                                            REPORTED_ABUSE_CATEGORY: {
                                                valueList: [{
                                                    data: "ABUSE_TYPE_OTHER"
                                                }]
                                            },
                                            REPORTER_COMMENT: {
                                                valueList: [{
                                                    data: ""
                                                }]
                                            }
                                        }
                                    }
                                })];
                            case 1:
                                return [2, e.sent().data.id]
                        }
                    })
                })
            }
            var Fn, Bn = (0, N.forwardRef)(function(e, t) {
                    var n = e.title,
                        r = e.icon,
                        i = e.actionLabel,
                        o = e.onAction,
                        a = e.actions,
                        s = e.onClose,
                        c = e.closeIconAriaLabel,
                        u = void 0 === c ? "Dismiss snackbar" : c,
                        l = e.shouldAutoDismiss,
                        d = e.autoDismissDurationMs,
                        p = e.className,
                        c = At(e, ["title", "icon", "actionLabel", "onAction", "actions", "onClose", "closeIconAriaLabel", "shouldAutoDismiss", "autoDismissDurationMs", "className"]),
                        e = Mn((0, N.useState)("enter"), 2),
                        f = e[0],
                        m = e[1],
                        h = (0, N.useRef)(void 0),
                        b = (0, N.useRef)(void 0),
                        E = (0, N.useRef)(void 0),
                        v = (0, N.useRef)(null),
                        o = null != a ? a : i && o && U().createElement(Bt, {
                            size: "Small",
                            variant: "Utility",
                            className: "content-inverse-emphasis",
                            onClick: o,
                            ref: v
                        }, i),
                        y = Boolean(o),
                        i = 80 < n.length,
                        S = null == l || l,
                        l = 4e3;
                    y && (l = i ? 1e4 : 7e3);
                    var g = null != d ? d : l,
                        P = (0, N.useCallback)(function() {
                            "exit" !== f && (m("exit"), void 0 !== b.current && (window.clearTimeout(b.current), b.current = void 0), E.current = window.setTimeout(function() {
                                null == s || s()
                            }, 150))
                        }, [s, f]);
                    (0, N.useEffect)(function() {
                        return h.current = window.requestAnimationFrame(function() {
                                m("idle")
                            }),
                            function() {
                                void 0 !== h.current && window.cancelAnimationFrame(h.current)
                            }
                    }, []), (0, N.useEffect)(function() {
                        void 0 !== b.current && (window.clearTimeout(b.current), b.current = void 0), S && "exit" !== f && (b.current = window.setTimeout(function() {
                            P()
                        }, g))
                    }, [g, S, f, P]), (0, N.useEffect)(function() {
                        var e;
                        y && (null === (e = v.current) || void 0 === e || e.focus())
                    }, [y]), (0, N.useEffect)(function() {
                        return function() {
                            void 0 !== b.current && window.clearTimeout(b.current), void 0 !== E.current && window.clearTimeout(E.current), void 0 !== h.current && window.cancelAnimationFrame(h.current)
                        }
                    }, []);
                    l = {
                        position: "fixed",
                        left: "50%",
                        bottom: "max(var(--padding-xxlarge, 32px), env(safe-area-inset-bottom))",
                        transform: "translate(-50%, ".concat("idle" === f ? "0" : "120%", ")"),
                        zIndex: "var(--foundation-portal-zindex, 9999)"
                    }, l = c.style ? Object.assign(Object.assign({}, l), c.style) : l;
                    return U().createElement("div", Object.assign({
                        ref: t,
                        role: "status",
                        "aria-live": "polite",
                        className: _t("flex items-center gap-xxlarge radius-medium shadow-transient-low bg-inverse-surface-0 padding-x-medium padding-y-medium stroke-standard shrink-0", "max-width-[480px] min-height-[48px]", "min-width-[min(100%-max(2_*_var(--margin-small),env(safe-area-inset-left)+env(safe-area-inset-right)),393px)]", "foundation-web-portal-zindex pointer-events-auto", "exit" === f ? "ease-standard-in" : "ease-standard-out", p),
                        style: Object.assign(Object.assign({}, l), {
                            transitionDuration: ("exit" === f ? 150 : 200) + "ms",
                            transitionProperty: "transform"
                        })
                    }, c), U().createElement("div", {
                        className: "flex items-center gap-medium grow-1 basis-0 min-h-[40px]"
                    }, r && U().createElement(Rt, {
                        name: r,
                        size: "Small",
                        className: "shrink-0 content-inverse-emphasis"
                    }), U().createElement("div", {
                        className: "grow-1 basis-0 text-caption-large content-inverse-emphasis text-truncate-end"
                    }, n)), U().createElement("div", {
                        className: "flex items-center justify-end gap-small shrink-0"
                    }, o, s && U().createElement(On, {
                        variant: "Utility",
                        size: "Small",
                        isCircular: !0,
                        className: "content-inverse-emphasis",
                        "aria-label": u,
                        onClick: P
                    })))
                }),
                Vn = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                Gn = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                jn = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                Hn = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                se = L.EnvironmentUrls.domain;
            (Mt = Fn = Fn || {}).INVALID = "INVALID", Mt.PAGE_LOAD = "PAGE_LOAD", Mt.VIEW_ACTIVE = "VIEW_ACTIVE", Mt.VIEW_INACTIVE = "VIEW_INACTIVE", Mt.CLICK_CANCEL = "CLICK_CANCEL", Mt.CANCEL_SUCCESS = "CANCEL_SUCCESS", Mt.EMAIL_REFERER_PAGE_LOAD = "EMAIL_REFERER_PAGE_LOAD", Mt.CLICK_EDIT_PAYMENT_METHOD = "CLICK_EDIT_PAYMENT_METHOD", Mt.CLICK_UPDATE_PAYMENT_METHOD = "CLICK_UPDATE_PAYMENT_METHOD", Mt.UPDATE_PAYMENT_METHOD_SUCCESS = "UPDATE_PAYMENT_METHOD_SUCCESS", Mt.UPDATE_PAYMENT_METHOD_EXPIRATION_SUCCESS = "UPDATE_PAYMENT_METHOD_EXPIRATION_SUCCESS", Mt.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED = "UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED", Mt.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS = "UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS", Mt.UPDATE_PAYMENT_METHOD_FAILURE = "UPDATE_PAYMENT_METHOD_FAILURE", Mt.UPDATE_PAYMENT_METHOD_EXPIRATION_FAILURE = "UPDATE_PAYMENT_METHOD_EXPIRATION_FAILURE", Mt.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE = "UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE", Mt.RESUBSCRIBE_SUCCESS = "RESUBSCRIBE_SUCCESS", Mt.CLICK_RESUBSCRIBE = "CLICK_RESUBSCRIBE", new de(new Jt({
                baseUrl: "https://ecsv2." + se + "/www"
            }));
            var se = {
                    NO_EXISTING_SUBSCRIPTION: "UserHasNoSubscription",
                    CANCEL_CLICKED: "CancelSubscriptionButtonClicked",
                    PAYMENT_FAILURE_EMAIL_DIRECT_LINK: "PaymentFailureEmailDirectLink",
                    CLICK_UPDATE_PAYMENT_METHOD: "SubscriptionsClickUpdatePaymentMethod",
                    UPDATE_PAYMENT_METHOD_SUCCESS: "SubscriptionsUpdatePaymentMethodSuccess",
                    UPDATE_PAYMENT_METHOD_FAILURE: "SubscriptionsUpdatePaymentMethodFailure",
                    UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED: "SubscriptionsUpdatePaymentMethodAddCardClicked",
                    UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS: "SubscriptionsUpdatePaymentMethodAddCardSuccess",
                    UPDATE_PAYMENT_METHOD_ADD_CARD_FAILED: "SubscriptionsUpdatePaymentMethodAddCardFailed",
                    UPDATE_PAYMENT_METHOD_ADD_LIMITED_CARD_SUCCESS: "SubscriptionsUpdatePaymentMethodAddLimitedCardSuccess",
                    CLICK_RESUBSCRIBE: "SubscriptionsClickResubscribe",
                    RESUBSCRIBE_SUCCESS: "SubscriptionsResubscribeSuccess"
                },
                Yn = {
                    GET_USER_PREMIUM_SUBSCRIPTION_CALLED: "GetUserPremiumSubscriptionCalled",
                    GET_USER_PREMIUM_SUBSCRIPTION_SUCCEEDED: "GetUserPremiumSubscriptionSucceeded",
                    GET_USER_PREMIUM_SUBSCRIPTION_FAILED: "GetUserPremiumSubscriptionFailed",
                    GET_PAYMENT_METHODS_FAILED: "GetPaymentMethodsFailed",
                    GET_SAVED_PAYMENT_PROFILES_CALLED: "GetSavedPaymentProfilesCalled",
                    GET_SAVED_PAYMENT_PROFILES_SUCCEEDED: "GetSavedPaymentProfilesSucceeded",
                    GET_SAVED_PAYMENT_PROFILES_FAILED: "GetSavedPaymentProfilesFailed",
                    GET_SAVED_PAYMENT_PROFILES_RETURNS_NONE: "GetSavedPaymentProfilesReturnsNone",
                    GET_PAYMENT_PROFILE_SETUP_CALLED: "GetPaymentProfileSetupCalled",
                    GET_PAYMENT_PROFILE_SETUP_SUCCEEDED: "GetPaymentProfileSetupSucceeded",
                    GET_PAYMENT_PROFILE_SETUP_FAILED: "GetPaymentProfileSetupFailed",
                    GET_USER_BIRTHDATE_CALLED: "GetUserBirthdateCalled",
                    GET_USER_BIRTHDATE_SUCCEEDED: "GetUserBirthdateSucceeded",
                    GET_USER_BIRTHDATE_FAILED: "GetUserBirthdateFailed",
                    DELETE_SAVED_PAYMENT_PROFILE_CALLED: "DeleteSavedPaymentProfileCalled",
                    DELETE_SAVED_PAYMENT_PROFILE_SUCCEEDED: "DeleteSavedPaymentProfileSucceeded",
                    DELETE_SAVED_PAYMENT_PROFILE_FAILED: "DeleteSavedPaymentProfileFailed",
                    GET_EXP_VARIANT_CALLED: "GetExperimentVariantCalled",
                    GET_EXP_VARIANT_SUCCEEDED: "GetExperimentVariantSucceeded",
                    GET_EXP_VARIANT_FAILED: "GetExperimentVariantFailed",
                    CONVERT_CREDIT_TO_ROBUX_CALLED: "ConvertCreditToRobuxCalled",
                    CONVERT_CREDIT_TO_ROBUX_SUCCEEDED: "ConvertCreditToRobuxSucceeded",
                    CONVERT_CREDIT_TO_ROBUX_FAILED: "ConvertCreditToRobuxFailed",
                    GET_CREDIT_CONVERSION_METADATA_CALLED: "GetCreditConversionMetadataCalled",
                    GET_CREDIT_CONVERSION_METADATA_SUCCEEDED: "GetCreditConversionMetadataSucceeded",
                    GET_CREDIT_CONVERSION_METADATA_FAILED: "GetCreditConversionMetadataFailed",
                    GET_CREDIT_CONVERSION_METADATA_CURRENCY_CODE_NULL: "GetCreditConversionMetadataCurrencyCodeNull",
                    VERIFY_PAYMENT_PROFILE_CALLED: "VerifyPaymentProfileCreationCalled",
                    VERIFY_PAYMENT_PROFILE_SUCCEEDED: "VerifyPaymentProfileCreationSucceeded",
                    VERIFY_PAYMENT_PROFILE_FAILED: "VerifyPaymentProfileCreationFailed",
                    UPDATE_SAVED_PAYMENT_PROFILE_CALLED: "UpdateSavedPaymentProfileCalled",
                    UPDATE_SAVED_PAYMENT_PROFILE_SUCCEEDED: "UpdateSavedPaymentProfileSucceeded",
                    UPDATE_SAVED_PAYMENT_PROFILE_FAILED: "UpdateSavedPaymentProfileFailed",
                    UPDATE_SUBSCRIPTION_PAYMENT_METHOD_CALLED: "UpdateSubscriptionPaymentMethodCalled",
                    UPDATE_SUBSCRIPTION_PAYMENT_METHOD_SUCCEEDED: "UpdateSubscriptionPaymentMethodSucceeded",
                    UPDATE_SUBSCRIPTION_PAYMENT_METHOD_FAILED: "UpdateSubscriptionPaymentMethodFailed"
                },
                zn = (new Map([
                    [Fn.CLICK_UPDATE_PAYMENT_METHOD, se.CLICK_UPDATE_PAYMENT_METHOD],
                    [Fn.UPDATE_PAYMENT_METHOD_SUCCESS, se.UPDATE_PAYMENT_METHOD_SUCCESS],
                    [Fn.UPDATE_PAYMENT_METHOD_FAILURE, se.UPDATE_PAYMENT_METHOD_FAILURE],
                    [Fn.EMAIL_REFERER_PAGE_LOAD, se.PAYMENT_FAILURE_EMAIL_DIRECT_LINK],
                    [Fn.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED, se.UPDATE_PAYMENT_METHOD_ADD_CARD_CLICKED],
                    [Fn.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS, se.UPDATE_PAYMENT_METHOD_ADD_CARD_SUCCESS],
                    [Fn.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILURE, se.UPDATE_PAYMENT_METHOD_ADD_CARD_FAILED],
                    [Fn.CLICK_RESUBSCRIBE, se.CLICK_RESUBSCRIBE],
                    [Fn.RESUBSCRIBE_SUCCESS, se.RESUBSCRIBE_SUCCESS]
                ]), function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                }),
                Kn = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                qn = null;

            function Wn(e) {
                var t = e.subscription,
                    n = (w = (0, N.useState)(!1))[0],
                    r = w[1],
                    i = (T = (0, N.useState)(!1))[0],
                    o = T[1],
                    a = (R = (0, N.useState)(""))[0],
                    s = R[1],
                    c = (A = (0, N.useState)([""]))[0],
                    u = A[1],
                    l = zt().systemFeedbackService,
                    d = (0, M.useTranslation)().translate,
                    p = (I = pn()).state,
                    f = I.dispatch,
                    m = p.purchaseFlowUuid,
                    h = p.pathName,
                    b = t.name,
                    E = t.subscriptionProviderName,
                    v = t.description,
                    y = t.displayPrice,
                    S = t.iconImageAssetId,
                    g = t.subscriptionTargetKey,
                    P = t.isForSale,
                    e = t.priceInRobux,
                    C = hn(t);
                (0, N.useEffect)(function() {
                    var e = window.location,
                        t = e.hash,
                        n = e.pathname,
                        r = e.search,
                        e = t.indexOf("?"); - 1 !== e && new URLSearchParams(t.substring(e)).get("subscription") === g && (o(!0), e = t.substring(0, e), window.history.replaceState(null, "", "" + n + r + e))
                }, [g]);
                var w = (0, N.useMemo)(function() {
                        return U().createElement(Tt.Thumbnail2d, {
                            type: Tt.ThumbnailTypes.assetThumbnail,
                            size: Tt.DefaultThumbnailSize,
                            targetId: S,
                            altName: b,
                            imgClassName: "subscription-thumbnail",
                            containerClass: "subscription-thumbnail-container-class"
                        })
                    }, [S, b]),
                    T = (0, N.useCallback)(function() {
                        return tr(void 0, void 0, void 0, function() {
                            var t;
                            return nr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, er.loadGuacConfigNonThrowing()];
                                    case 1:
                                        return null != (t = e.sent()) && t.EnableSubscriptions ? (t = yt.url.getAbuseReportRevampUrl({
                                            abuseVector: "subscriptions",
                                            submitterId: L.CurrentUser.userId,
                                            targetId: g,
                                            custom: JSON.stringify({
                                                stringId: S.toString()
                                            })
                                        }), window.location.href = t, [2]) : (kn({
                                            subscriptionTargetKey: g,
                                            imageAssetId: S.toString(),
                                            reporterId: L.CurrentUser.userId
                                        }).then(function() {
                                            return l.success(d(x.MessageReportSubmitted))
                                        }).catch(function() {
                                            return l.warning(d(x.ErrorGenericError))
                                        }), [2])
                                }
                            })
                        })
                    }, []),
                    A = (R = (0, N.useMemo)(function() {
                        return (0, Vt.createItemPurchase)({
                            forceUnifiedModal: !0
                        })
                    }, []))[0],
                    _ = R[1],
                    I = j().placeId,
                    p = parseInt(null != I ? I : "0", 10),
                    R = (0, N.useCallback)(function() {
                        return an.sendExperienceSubscriptionEvent(m, Zt.USER_INPUT, tn.DEVSUB_CARD, t, en.OPEN_PURCHASE_MODAL), _ ? (C ? s("Robux") : bt(t.subscriptionTargetKey).then(function(e) {
                            s(e.primaryPaymentProviderType), u(e.allPaymentProviderTypes)
                        }).catch(function() {
                            (0, wt.fireEvent)(Yn.GET_PAYMENT_METHODS_FAILED), s(O.STRIPE), u([O.STRIPE])
                        }), void _.start()) : (C ? (s("Robux"), u(["Robux"])) : bt(t.subscriptionTargetKey).then(function(e) {
                            s(e.primaryPaymentProviderType), u(e.allPaymentProviderTypes)
                        }).catch(function() {
                            (0, wt.fireEvent)(Yn.GET_PAYMENT_METHODS_FAILED), s(O.STRIPE), u([O.STRIPE])
                        }), void r(!0))
                    }, [C, _, m, t]),
                    I = (0, N.useCallback)(function() {
                        f({
                            type: Kt.MARK_SUBSCRIBED,
                            subscriptionTargetKey: g
                        })
                    }, [f, g]);
                return U().createElement("div", {
                    className: "subscription-card-item bg-shift-200"
                }, U().createElement("div", {
                    className: "subscription-card-info",
                    onClick: function() {
                        return o(!0)
                    }
                }, U().createElement("div", {
                    className: "subscription-card-thumbnail"
                }, w), U().createElement("div", {
                    className: "subscription-card-text"
                }, U().createElement("span", {
                    className: "text-title-medium content-emphasis subscription-card-title"
                }, b), U().createElement("div", {
                    className: "subscription-card-price"
                }, C && U().createElement(Rt, {
                    name: "icon-filled-robux",
                    size: "Small",
                    className: "content-default"
                }), U().createElement("span", {
                    className: "text-body-medium content-default"
                }, y, d(x.LabelPerMonth))))), U().createElement(Bt, {
                    as: "button",
                    size: "Medium",
                    variant: "Standard",
                    isDisabled: !P,
                    onClick: R
                }, d(P ? x.ActionSubscribe : x.LabelSubscribed)), U().createElement("div", {
                    className: "subscription-card-overlays"
                }, A ? U().createElement(A, {
                    translate: d,
                    thumbnail: w,
                    assetName: b,
                    assetType: "Subscription",
                    sellerName: E,
                    expectedCurrency: 1,
                    expectedSellerId: parseInt(t.subscriptionProviderId, 10) || 0,
                    expectedPrice: null != e ? e : 0,
                    displayPrice: C ? void 0 : y,
                    showSuccessBanner: !0,
                    onPurchaseSuccess: I,
                    subscriptionTargetKey: g,
                    subscriptionPlaceId: p,
                    subscriptionPaymentProvider: a || "Robux",
                    subscriptionTitle: d(x.HeadingGetSubscription),
                    primaryActionButtonText: C ? d(x.ActionSubscribe) : a === O.CREDITBALANCE ? d(x.ActionSubscribeWithRobloxCredit) : d(x.ActionSubscribeWithCreditDebitCard),
                    subscriptionSecondaryPaymentProvider: !C && 1 < c.length ? c[1] : void 0,
                    secondaryActionButtonText: !C && 1 < c.length ? d(x.ActionSubscribePayAnotherWay) : void 0,
                    subscriptionFooterDisclaimer: d(x.MessageRecurringMonthlyDisclaimer),
                    subscriptionCancelPath: h,
                    priceSuffix: d(x.LabelPerMonth)
                }) : U().createElement(En, {
                    title: d(x.HeadingGetSubscription),
                    show: n,
                    assetId: S,
                    provider: E,
                    name: b,
                    displayPrice: y,
                    description: v,
                    isForSale: P,
                    cadence: d(x.LabelPerMonth),
                    cadenceDisclaimer: d(x.MessageMonthlyCadenceDisclaimer),
                    closeModal: function() {
                        return r(!1)
                    },
                    primaryPaymentProviderType: a,
                    allPaymentProviderTypes: c,
                    subscription: t
                }), U().createElement(xn, {
                    show: i,
                    subscription: t,
                    onClose: function() {
                        return o(!1)
                    },
                    onSubscribe: R,
                    onReport: T,
                    translate: d
                })))
            }

            function Xn(e) {
                var t = e.subscriptions,
                    n = (0, M.useTranslation)().translate,
                    r = (0, N.useRef)(null),
                    i = (0, N.useRef)(!1),
                    o = (0, N.useRef)(0),
                    a = (0, N.useRef)(0),
                    s = (0, N.useCallback)(function(e) {
                        r.current && (i.current = !0, o.current = e.pageX - r.current.offsetLeft, a.current = r.current.scrollLeft, r.current.style.scrollSnapType = "none", r.current.style.cursor = "grabbing")
                    }, []),
                    c = (0, N.useCallback)(function(e) {
                        i.current && r.current && (e.preventDefault(), e = 1.5 * (e.pageX - r.current.offsetLeft - o.current), r.current.scrollLeft = a.current - e)
                    }, []),
                    e = (0, N.useCallback)(function() {
                        r.current && (i.current = !1, r.current.style.scrollSnapType = "x mandatory", r.current.style.cursor = "")
                    }, []);
                return t ? 0 === t.length ? U().createElement("p", {
                    className: "section-content-off"
                }, n(x.MessageNoSubscriptionsAvailable)) : (n = 2 < t.length, U().createElement("div", {
                    ref: r,
                    className: "subscriptions-scroll-container" + (n ? " has-peek" : ""),
                    onMouseDown: s,
                    onMouseMove: c,
                    onMouseUp: e,
                    onMouseLeave: e,
                    role: "list"
                }, t.map(function(e) {
                    return U().createElement(Wn, {
                        key: e.name,
                        subscription: e
                    })
                }))) : U().createElement(Ct.Loading, null)
            }

            function Jn() {
                return L.EnvironmentUrls.websiteUrl.includes("sitetest1") ? "pk_test_51LNM0XG5RADBkfjhYJlpADA2ArzWIh7gTWTodYNbpEzSiT55dul3VJhaBIVHL0CNyO0gECOz1vPnWArAkjwQ8NBO00Cdf2PxED" : L.EnvironmentUrls.websiteUrl.includes("sitetest3") ? "pk_test_51LNOeQHDRNiW7vlLcKH8TGCpJ7zhaidLdSegE22GCuvQbVUX2xDiGJY6WYaldYyo6qgVxmy1SnSVpSdaqyjfqclU00NQwWntIe" : "pk_live_51LKpO9C8tJWGhK4HEHtny9Dg7xXiQJ1i349cq6KBDusbl8bRHO7QmCKKhX18LPjSirMNTvj3tesq6mhIQuPioeAd0062ZCgoF3"
            }

            function Qn(e) {
                return {
                    clientSecret: e,
                    appearance: {
                        theme: document.body.classList.contains("dark-theme") ? "night" : "stripe",
                        labels: "above",
                        rules: {
                            ".Input": {
                                backgroundColor: document.body.classList.contains("dark-theme") ? "black" : "white"
                            }
                        }
                    }
                }
            }

            function $n(e) {
                var e = e.errorCode,
                    t = (0, M.useTranslation)().translate,
                    n = "";
                switch (e) {
                    case or:
                        n = t(x.ErrorStripeIncorrectCVC);
                        break;
                    case sr:
                        n = t(x.ErrorStripeCardExpired);
                        break;
                    default:
                        return null
                }
                return U().createElement("div", {
                    className: "alert-warning small-oneline form-error-banner"
                }, n)
            }

            function Zn(e) {
                var t = e.onFormStatusChange,
                    n = e.inputEmail,
                    r = e.setInputEmail,
                    i = e.stripeErrorCode,
                    o = e.elements,
                    a = (m = (0, N.useState)(!1))[0],
                    s = m[1],
                    e = (0, M.useTranslation)().translate,
                    c = (0, N.useRef)(null),
                    u = (0, N.useRef)(null),
                    l = (m = (0, N.useState)(!1))[0],
                    d = m[1],
                    p = (m = (0, N.useState)(!1))[0],
                    f = m[1],
                    m = {
                        __html: e(x.MessageStripeAddPaymentMethodDisclosure, {
                            stripeTermsOfUseLinkStart: '<a href="https://stripe.com/legal/end-users" class="text-link" target="_blank">',
                            stripeTermsOfUseLinkEnd: "</a>",
                            stripePrivacyPolicyLinkStart: '<a href=\'https://stripe.com/privacy\' class="text-link" target="_blank">',
                            stripePrivacyPolicyLinkEnd: "</a>"
                        })
                    },
                    h = (0, N.useCallback)(function(e) {
                        var t = e.target.value.trim().replace(/\s/g, ""),
                            e = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
                        s("" !== t && null === e.exec(t)), r(t)
                    }, [r]);
                return (0, N.useEffect)(function() {
                    var e;
                    c.current || (c.current = null == o ? void 0 : o.getElement("payment"), c.current && (c.current.on("ready", function() {
                        var e;
                        null !== (e = c.current) && void 0 !== e && e.clear()
                    }), null !== (e = c.current) && void 0 !== e && e.on("change", function(e) {
                        d(e.complete)
                    }))), u.current || (u.current = null == o ? void 0 : o.getElement("address"), u.current && (u.current.on("ready", function() {
                        var e;
                        null !== (e = u.current) && void 0 !== e && e.clear()
                    }), u.current.on("change", function(e) {
                        f(e.complete)
                    })))
                }, [o]), (0, N.useEffect)(function() {
                    t(l && p && !a && "" !== n)
                }, [l, p, n, a, t]), U().createElement("div", null, U().createElement("div", {
                    className: "font-header-2 text-emphasis stripe-header"
                }, e(x.HeadingStripeFormAddPaymentMethod)), U().createElement(ir.PaymentElement, {
                    options: {
                        wallets: {
                            applePay: "never",
                            googlePay: "never"
                        }
                    }
                }), U().createElement("div", {
                    className: "font-header-2 text-emphasis stripe-header billing-email-header"
                }, e(x.HeadingBillingEmail)), U().createElement("div", null, U().createElement("div", {
                    className: "form-group form-has-feedback " + (a ? "form-has-error" : "")
                }, U().createElement("input", {
                    className: "form-control input-field billing-email-input",
                    type: "email",
                    name: "email",
                    value: n,
                    onChange: function(e) {
                        return h(e)
                    }
                })), U().createElement("div", {
                    className: "form-group form-has-feedback"
                }, U().createElement("div", {
                    className: "form-control-label small text email-label"
                }, e(x.MessageStripeEmailInputSubText)))), U().createElement("div", {
                    className: "font-header-2 text-emphasis stripe-header"
                }, e(x.HeadingBillingAddress)), U().createElement(ir.AddressElement, {
                    options: {
                        mode: "billing"
                    }
                }), U().createElement("div", {
                    className: "form-control-label small text stripe-form-disclosure",
                    dangerouslySetInnerHTML: m
                }), i ? U().createElement($n, {
                    errorCode: i
                }) : null)
            }
            var er = {
                    loadGuacConfigNonThrowing: function() {
                        return zn(this, void 0, Promise, function() {
                            var t;
                            return Kn(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (qn) return [2, qn];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, L.Guac.callBehaviour("abuse-reporting-revamp")];
                                    case 2:
                                        return (t = e.sent()) ? [2, qn = Promise.resolve({
                                            EnableSubscriptions: Boolean(t.EnableSubscriptions)
                                        })] : [2, {
                                            EnableSubscriptions: !1
                                        }];
                                    case 3:
                                        return e.sent(), [2, {
                                            EnableSubscriptions: !1
                                        }];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                },
                tr = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                nr = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                rr = Tr(949),
                ir = Tr(912),
                or = "incorrect_cvc",
                ar = "card_declined",
                sr = "expired_card",
                cr = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                ur = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                };

            function lr(n) {
                return cr(void 0, void 0, Promise, function() {
                    var t;
                    return ur(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, b.httpService.get(yt.url.verifyPaymentProfileCreation(n))];
                            case 1:
                                return t = e.sent(), [2, null === (t = null == t ? void 0 : t.data) || void 0 === t ? void 0 : t.id]
                        }
                    })
                })
            }

            function dr(e) {
                function o() {
                    return vr(void 0, void 0, void 0, function() {
                        return yr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, lr(p.current)];
                                case 1:
                                    return e.sent() ? [2, !0] : [3, 3];
                                case 2:
                                    return e.sent(), [3, 3];
                                case 3:
                                    return [2, !1]
                            }
                        })
                    })
                }
                var t = e.showStripeModal,
                    a = e.closeStripeModal,
                    n = (w = (0, N.useState)(!1))[0],
                    r = w[1],
                    i = (m = (0, N.useState)(null))[0],
                    s = m[1],
                    c = (A = (0, N.useState)(""))[0],
                    e = A[1],
                    u = (0, M.useTranslation)().translate,
                    l = (0, ir.useStripe)(),
                    d = (0, ir.useElements)(),
                    p = (0, N.useRef)(""),
                    f = zt().systemFeedbackService,
                    m = (w = (0, N.useState)(!1))[0],
                    h = w[1],
                    b = (A = pn().state).purchaseFlowUuid,
                    E = A.selectedSubscription,
                    v = A.pathName,
                    y = (w = Wt()).updateModalContent,
                    S = w.openModal,
                    g = w.closeModal,
                    P = (A = (0, N.useState)(""))[0],
                    C = A[1],
                    w = (0, N.useCallback)(function(e) {
                        r(e)
                    }, []),
                    T = (0, N.useCallback)(function(t, n, r) {
                        return vr(void 0, void 0, void 0, function() {
                            return yr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, t()];
                                    case 1:
                                        return e.sent() && E ? (bn(function() {
                                            f.warning(u(x.ErrorGenericError)), a()
                                        }, function(e) {
                                            var t, n = e.data.errorCode;
                                            switch (h(!1), n) {
                                                case D.USER_HAS_SPEND_LIMIT_SET:
                                                case D.RESTRICTED_USER:
                                                case D.UNSUPPORTED_LOCALE:
                                                    y(u(x.HeadingCannotSubscribe), null !== (t = u(null !== (t = G[n]) && void 0 !== t ? t : "")) && void 0 !== t ? t : u(x.ErrorGenericError), u("Action.OK"), !0, function() {
                                                        return g
                                                    }), S();
                                                    break;
                                                default:
                                                    f.warning(u(x.ErrorGenericError))
                                            }
                                            a()
                                        }, function(e) {
                                            h(!1), y(u(x.HeadingCannotSubscribe), mn(u, e.failureReason, e.expirationTimeInMinutes), u("Action.OK"), !0, function() {
                                                return g
                                            }), a(), S()
                                        }, function() {
                                            h(!1), a()
                                        }, E, b, v, O.STRIPE), h(!1), a(), [2]) : 0 === r ? (f.warning(u(x.ErrorStripeSavedCardSomethingWentWrong)), h(!1), a(), [2]) : (setTimeout(function() {
                                            T(t, n, r - 1)
                                        }, n), [3, 3]);
                                    case 2:
                                        return e.sent(), f.warning(u(x.ErrorGenericError)), a(), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, [g, a, S, v, b, E, f, u, y]),
                    A = (0, N.useCallback)(function() {
                        return vr(void 0, void 0, void 0, function() {
                            var t, n, r, i;
                            return yr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!l || !d) return a(), [2];
                                        h(!0), s(null), E && an.sendExperienceSubscriptionEvent(b, Zt.USER_INPUT, tn.VPC_NEW_PAYMENT_MODAL, E, en.SAVE_NEW_PAYMENT_METHOD), n = {
                                            return_url: P,
                                            payment_method_data: {
                                                billing_details: {
                                                    email: c
                                                },
                                                allow_redisplay: "always"
                                            }
                                        }, e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, l.confirmSetup({
                                            elements: d,
                                            confirmParams: n,
                                            redirect: "if_required"
                                        })];
                                    case 2:
                                        if (t = e.sent(), "succeeded" === (null === (n = null == t ? void 0 : t.setupIntent) || void 0 === n ? void 0 : n.status)) p.current = null !== (r = null === (r = null === (r = null == t ? void 0 : t.setupIntent) || void 0 === r ? void 0 : r.payment_method) || void 0 === r ? void 0 : r.toString()) && void 0 !== r ? r : "", p.current && T(o, 3e3, 3);
                                        else if (null !== (r = null == t ? void 0 : t.error) && void 0 !== r && r.code) {
                                            switch (t.error.code) {
                                                case or:
                                                case sr:
                                                    s(null === (i = null == t ? void 0 : t.error) || void 0 === i ? void 0 : i.code);
                                                    break;
                                                case ar:
                                                    f.warning(u(x.ErrorStripeCardDeclined)), a();
                                                    break;
                                                default:
                                                    f.warning(u(x.ErrorStripeSaveCardGeneralError)), a()
                                            }
                                            h(!1)
                                        }
                                        return [3, 4];
                                    case 3:
                                        return e.sent(), a(), h(!1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, [l, d, E, P, c, a, b, T, f, u]);
                return (0, N.useEffect)(function() {
                    C(L.EnvironmentUrls.websiteUrl + "/" + v)
                }, [v]), U().createElement(Ct.Modal, {
                    show: t,
                    onHide: a,
                    size: "md",
                    className: "rbx-stripe-modal"
                }, U().createElement(Ct.Modal.Header, {
                    title: u(x.HeadingAddPaymentMethod),
                    onClose: a
                }), U().createElement(Ct.Modal.Body, null, U().createElement(Zn, {
                    onFormStatusChange: w,
                    elements: d,
                    inputEmail: c,
                    setInputEmail: e,
                    stripeErrorCode: i
                })), U().createElement(Ct.Modal.Footer, null, m ? U().createElement("span", {
                    className: "spinner spinner-default"
                }) : U().createElement("div", {
                    className: "modal-buttons"
                }, U().createElement("button", {
                    type: "button",
                    className: "modal-button btn-primary-md btn-min-width",
                    disabled: !n,
                    onClick: A
                }, u("Action.Save")), U().createElement("button", {
                    type: "button",
                    className: "modal-button btn-control-md btn-min-width",
                    onClick: a
                }, u("Action.Cancel")))))
            }

            function pr() {
                var e = (t = (0, N.useState)(null))[0],
                    n = t[1],
                    r = zt().systemFeedbackService,
                    i = (0, M.useTranslation)().translate,
                    t = (a = pn()).state,
                    o = a.dispatch,
                    a = t.showStripeModal,
                    s = t.stripeClientSecret,
                    c = t.purchaseFlowUuid,
                    u = t.selectedSubscription;
                return (0, N.useEffect)(function() {
                    Sr(void 0, void 0, void 0, function() {
                        var t;
                        return gr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), t = Jn(), [4, (0, rr.loadStripe)(t)];
                                case 1:
                                    return t = e.sent(), n(t), [3, 3];
                                case 2:
                                    return e.sent(), r.warning(i(x.ErrorGenericError)), o({
                                        type: Kt.CLOSE_STRIPE_MODAL
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, [o, r, i]), (0, N.useEffect)(function() {
                    s && e && u && an.sendExperienceSubscriptionEvent(c, Zt.VIEW_SHOWN, tn.VPC_NEW_PAYMENT_MODAL, u, en.SUBSCRIBE)
                }, [e, s, u, c]), e && s ? U().createElement(ir.Elements, {
                    key: s,
                    stripe: e && s ? e : null,
                    options: e && s ? Qn(s) : void 0
                }, U().createElement(dr, {
                    showStripeModal: a,
                    closeStripeModal: function() {
                        return o({
                            type: Kt.CLOSE_STRIPE_MODAL
                        })
                    }
                })) : U().createElement(N.Fragment, null)
            }

            function fr() {
                function t() {}
                var e = (j() || {}).universeId,
                    o = void 0 === e ? "" : e,
                    n = zt().SystemFeedback,
                    r = (0, M.useTranslation)().translate,
                    i = (p = pn()).state,
                    a = p.dispatch,
                    s = i.subscriptions,
                    c = (e = (0, N.useState)(!1))[0],
                    u = e[1],
                    i = (p = (0, N.useState)(!1))[0],
                    l = p[1],
                    d = (0, E.useLocation)(),
                    p = (e = (0, N.useState)(!1))[0],
                    f = e[1];
                return (0, N.useEffect)(function() {
                    var e, t, n;
                    (null !== (e = null == d ? void 0 : d.hash) && void 0 !== e && e.startsWith("#!/store") || null !== (e = h.deviceMeta.getDeviceMeta()) && void 0 !== e && e.isUniversalApp && null !== (t = h.deviceMeta.getDeviceMeta()) && void 0 !== t && t.isDesktop || null !== (n = h.deviceMeta.getDeviceMeta()) && void 0 !== n && n.isPhone || null !== (n = h.deviceMeta.getDeviceMeta()) && void 0 !== n && n.isTablet && (null === (n = h.deviceMeta.getDeviceMeta()) || void 0 === n || !n.isUniversalApp)) && (u(!0), a({
                        type: Kt.SEND_STORE_PAGE_LOAD_EVENT
                    }))
                }, [a, d, null == d ? void 0 : d.hash, u]), (0, N.useEffect)(function() {
                    c && Pr(void 0, void 0, Promise, function() {
                        return Cr(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, gt(void 0, void 0, Promise, function() {
                                        return Pt(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, b.httpService.get(yt.url.getSubscriptionMetadata)];
                                                case 1:
                                                    return [2, e.sent().data]
                                            }
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().isWebPurchasingEnabled]
                            }
                        })
                    }).then(function(e) {
                        f(e), e && Pr(void 0, void 0, void 0, function() {
                            var r, i, t, n;
                            return Cr(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return l(!0), n = "0", o ? n = o : null !== (t = h.deviceMeta.getDeviceMeta()) && void 0 !== t && t.isUniversalApp && (t = d.pathname, L.Endpoints && L.Endpoints.supportLocalizedUrls && (t = L.Endpoints.removeUrlLocale(t)), t = t.split("/"), (t = t[3]) && (n = t)), [4, pt({
                                            subscriptionProductType: m.DEVELOPER_SUBSCRIPTION_PRODUCT,
                                            subscriptionProviderId: null !== (n = parseInt(n, 10)) && void 0 !== n ? n : 0
                                        })];
                                    case 1:
                                        return 0 < (r = e.sent().subscriptionProductsInfo).length ? (n = r.map(function(e) {
                                            return e.subscriptionTargetKey
                                        }), [4, ft({
                                            subscriptionProductTargetKeys: n
                                        })]) : [3, 3];
                                    case 2:
                                        i = e.sent().subscriptionStatuses, r.forEach(function(e, t) {
                                            var n = i[e.subscriptionTargetKey],
                                                e = r[t];
                                            n && e && (e.isForSale = !n.isSubscribed, r[t] = e)
                                        }), e.label = 3;
                                    case 3:
                                        return a({
                                            type: Kt.LOAD_SUBSCRIPTIONS,
                                            subscriptions: r
                                        }), l(!1), [2]
                                }
                            })
                        }).catch(t)
                    }).catch(t)
                }, [a, c, d.pathname, o]), !p || i || 0 === s.length ? U().createElement(N.Fragment, null) : U().createElement("div", {
                    id: "rbx-subscriptions-container-content"
                }, U().createElement("div", {
                    className: "container-header"
                }, U().createElement("h3", null, r(x.HeadingSubscriptions))), U().createElement(N.Fragment, null, U().createElement(Xn, {
                    subscriptions: s
                }), U().createElement(pr, null), U().createElement(n, null)))
            }

            function mr() {
                return document.getElementById("rbx-subscriptions-container")
            }

            function hr(e) {
                var t = e.children,
                    e = {
                        SystemFeedback: (e = (0, Ct.createSystemFeedback)())[0],
                        systemFeedbackService: e[1]
                    };
                return U().createElement(Yt.Provider, {
                    value: e
                }, t)
            }

            function br(e) {
                var t = e.children,
                    n = (h = (0, N.useState)(""))[0],
                    a = h[1],
                    r = (u = (0, N.useState)(""))[0],
                    s = u[1],
                    i = (f = (0, N.useState)(!1))[0],
                    c = f[1],
                    e = (d = (0, N.useState)(!1))[0],
                    o = d[1],
                    u = (h = (0, N.useState)(""))[0],
                    l = h[1],
                    d = (f = (0, N.useState)(function() {
                        return {}
                    }))[0],
                    p = f[1],
                    f = (h = (0, N.useState)(""))[0],
                    m = h[1],
                    h = function() {
                        return o(!1)
                    };
                return U().createElement(U().Fragment, null, U().createElement(qt.Provider, {
                    value: {
                        openModal: function() {
                            return o(!0)
                        },
                        closeModal: h,
                        updateModalContent: function(e, t, n, r, i, o) {
                            a(e), s(t), c(r), l(n), p(i), o && m(o)
                        }
                    }
                }, t, U().createElement(Ct.Modal, {
                    show: e,
                    hide: h,
                    size: "md",
                    className: "error-modal"
                }, U().createElement(Ct.Modal.Header, {
                    title: n,
                    showCloseButton: !0,
                    onClose: h
                }), U().createElement(Ct.Modal.Body, null, r, i && U().createElement("div", {
                    className: "icon-warning"
                })), U().createElement(Ct.Modal.Footer, null, U().createElement(Ct.Button, {
                    size: f ? Ct.Button.sizes.medium : Ct.Button.sizes.large,
                    width: f ? void 0 : Ct.Button.widths.full,
                    onClick: d
                }, u), f && U().createElement(Ct.Button, {
                    size: Ct.Button.sizes.medium,
                    className: "btn-control-md",
                    onClick: h
                }, f)))))
            }

            function Er(e) {
                var t = e.children,
                    e = (n = (0, N.useReducer)(un, cn))[0],
                    n = n[1];
                return U().createElement(dn.Provider, {
                    value: {
                        state: e,
                        dispatch: n
                    }
                }, t)
            }
            var vr = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                yr = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Sr = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                gr = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                Pr = function(e, a, s, c) {
                    return new(s = s || Promise)(function(n, t) {
                        function r(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                                e(t)
                            })).then(r, i)
                        }
                        o((c = c.apply(e, a || [])).next())
                    })
                },
                Cr = function(n, r) {
                    var i, o, a, s = {
                            label: 0,
                            sent: function() {
                                if (1 & a[0]) throw a[1];
                                return a[1]
                            },
                            trys: [],
                            ops: []
                        },
                        e = {
                            next: t(0),
                            throw: t(1),
                            return: t(2)
                        };
                    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                        return this
                    }), e;

                    function t(t) {
                        return function(e) {
                            return function(t) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                    switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: t[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, o = t[1], t = [0];
                                            continue;
                                        case 7:
                                            t = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                                s.label = t[1];
                                                break
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                s.label = a[1], a = t;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(t);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    t = r.call(n, s)
                                } catch (e) {
                                    t = [6, e], o = 0
                                } finally {
                                    i = a = 0
                                }
                                if (5 & t[0]) throw t[1];
                                return {
                                    value: t[0] ? t[1] : void 0,
                                    done: !0
                                }
                            }([t, e])
                        }
                    }
                },
                wr = {
                    common: ["CommonUI.Controls", "CommonUI.Features", "Common.VerifiedParentalConsent", "IAPExperience.PurchaseError", "Feature.NotApproved"],
                    feature: "Feature.Subscription"
                };
            (0, b.ready)(function() {
                mr() && h.authenticatedUser.isAuthenticated && (0, e.render)(U().createElement(hr, null, U().createElement(M.TranslationProvider, {
                    config: wr
                }, U().createElement(Er, null, U().createElement(br, null, U().createElement(E.BrowserRouter, null, U().createElement(fr, null)))))), mr())
            })
        }()
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/fd9ea3d6ee062a9acd75c1bf93b92717-gameSubscriptions.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameSubscriptions");