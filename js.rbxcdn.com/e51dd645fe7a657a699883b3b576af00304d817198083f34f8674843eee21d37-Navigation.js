! function() {
    var t = {
            942: function(t) {
                function n(t) {
                    return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                }!
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function o() {
                        for (var t = "", i = 0; i < arguments.length; i++) {
                            var l = arguments[i];
                            l && (t = a(t, function(t) {
                                if ("string" == typeof t || "number" == typeof t) return t;
                                if ((void 0 === t ? "undefined" : n(t)) !== "object") return "";
                                if (Array.isArray(t)) return o.apply(null, t);
                                if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                                var i = "";
                                for (var l in t) r.call(t, l) && t[l] && (i = a(i, l));
                                return i
                            }(l)))
                        }
                        return t
                    }

                    function a(t, n) {
                        return n ? t ? t + " " + n : t + n : t
                    }
                    t.exports ? (o.default = o, t.exports = o) : "function" == typeof define && "object" === n(define.amd) && define.amd ? define("classnames", [], function() {
                        return o
                    }) : window.classNames = o
                }()
            },
            5: function(t, n, r) {
                "use strict";
                t.exports = {}
            },
            2: function(t, n, r) {
                "use strict";
                t.exports = {}
            }
        },
        n = {};

    function r(o) {
        var a = n[o];
        if (void 0 !== a) return a.exports;
        var i = n[o] = {
            exports: {}
        };
        return t[o](i, i.exports, r), i.exports
    }
    r.m = t, r.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(n, {
            a: n
        }), n
    }, r.d = function(t, n) {
        for (var o in n) r.o(n, o) && !r.o(t, o) && Object.defineProperty(t, o, {
            enumerable: !0,
            get: n[o]
        })
    }, r.k = function(t) {
        return "" + t + ".css"
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.nc = void 0, r.rv = function() {
        return "1.5.7"
    }, r.g.importScripts && (o = r.g.location + "");
    var o, a = r.g.document;
    if (!o && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (o = a.currentScript.src), !o)) {
        var i = a.getElementsByTagName("script");
        if (i.length)
            for (var l = i.length - 1; l > -1 && (!o || !/^http(s?):/.test(o));) o = i[l--].src
    }
    if (!o) throw Error("Automatic publicPath is not supported in this browser");
    r.p = o.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.ruid = "bundler=rspack@1.5.7",
        function() {
            "use strict";
            var t, n, o, a, i, l, c, u, s, d, f, p, m, v = {};
            r.r(v), r.d(v, {
                getIsVNGLandingRedirectEnabled: function() {
                    return im
                },
                getSignupUrl: function() {
                    return ii
                },
                logoutAndRedirect: function() {
                    return ic
                },
                navigateToLoginWithRedirect: function() {
                    return iu
                }
            });
            var h = window.ReactJSX,
                b = window.TanstackQuery,
                y = window.Roblox["core-scripts"].util.ready,
                g = r.n(y),
                S = window.Roblox["core-scripts"].react;

            function w(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var x = window.Roblox["core-scripts"].meta.user,
                E = window.React,
                j = r.n(E),
                C = r(942),
                A = r.n(C),
                O = window.ReactStyleGuide,
                N = window.RobloxThumbnails,
                I = window.HeaderScripts,
                R = window.RobloxBadges,
                T = window.Roblox["core-scripts"].endpoints,
                P = window.Roblox["core-scripts"].environmentUrls,
                k = r.n(P);

            function L(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var U = {
                    url: (0, T.getAbsoluteUrl)("/discover/?Keyword="),
                    label: "Label.Experience",
                    pageSort: ["home", "games", "discover"],
                    icon: "icon-menu-games-off"
                },
                D = {
                    url: (0, T.getAbsoluteUrl)("/catalog?CatalogContext=1&Keyword="),
                    label: "Heading.Marketplace",
                    pageSort: ["catalog", "inventory", "bundles", "my/avatar", "trades"],
                    icon: "icon-menu-shop"
                },
                M = [{
                    url: (0, T.getAbsoluteUrl)("/search/users?keyword="),
                    label: "Label.Players",
                    pageSort: ["users"],
                    icon: "icon-menu-profile"
                }, D, {
                    url: (0, T.getAbsoluteUrl)("/search/communities?keyword="),
                    label: "Label.sGroups",
                    pageSort: ["groups"],
                    icon: "icon-menu-groups"
                }, {
                    url: (0, T.getAbsoluteUrl)("/develop/library?CatalogContext=2&Category=6&Keyword="),
                    label: "Label.CreatorStore",
                    pageSort: ["develop"],
                    icon: "icon-menu-library"
                }],
                _ = {
                    creatorStoreUrl: "https://create.".concat(k().domain, "/store/models?keyword="),
                    scrollListItems: {
                        home: {
                            url: (0, T.getAbsoluteUrl)("/home"),
                            idSelector: "nav-home",
                            iconClass: "icon-nav-home",
                            name: "home",
                            labelTranslationKey: "Label.sHome"
                        },
                        profile: {
                            url: (0, T.getAbsoluteUrl)("/users/".concat(I.authenticatedUser.id, "/profile")),
                            idSelector: "nav-profile",
                            iconClass: "icon-nav-profile",
                            name: "profile",
                            labelTranslationKey: "Label.sProfile"
                        },
                        messages: {
                            url: (0, T.getAbsoluteUrl)("/my/messages/#!/inbox"),
                            urlForNotification: (0, T.getAbsoluteUrl)("/my/messages/#!/inbox"),
                            idSelector: "nav-message",
                            iconClass: "icon-nav-message",
                            name: "messages",
                            labelTranslationKey: "Label.sMessages"
                        },
                        friends: {
                            url: (0, T.getAbsoluteUrl)("/users/friends"),
                            urlForNotification: (0, T.getAbsoluteUrl)("/users/friends#!/friend-requests"),
                            idSelector: "nav-friends",
                            iconClass: "icon-nav-friends",
                            name: "friends",
                            labelTranslationKey: "Label.Connect"
                        },
                        avatar: {
                            url: (0, T.getAbsoluteUrl)("/my/avatar"),
                            idSelector: "nav-character",
                            iconClass: "icon-nav-charactercustomizer",
                            name: "avatar",
                            labelTranslationKey: "Label.sAvatar"
                        },
                        inventory: {
                            url: (0, T.getAbsoluteUrl)("/users/".concat(I.authenticatedUser.id, "/inventory")),
                            idSelector: "nav-inventory",
                            iconClass: "icon-nav-inventory",
                            name: "inventory",
                            labelTranslationKey: "Label.sInventory"
                        },
                        trade: {
                            url: (0, T.getAbsoluteUrl)("/trades"),
                            urlForNotification: (0, T.getAbsoluteUrl)("/trades"),
                            idSelector: "nav-trade",
                            iconClass: "icon-nav-trade",
                            name: "trade",
                            labelTranslationKey: "Label.sTrade"
                        },
                        groups: {
                            url: (0, T.getAbsoluteUrl)("/my/communities"),
                            idSelector: "nav-group",
                            iconClass: "icon-nav-group",
                            name: "groups",
                            labelTranslationKey: "Label.sGroups"
                        },
                        blog: {
                            url: (0, T.getAbsoluteUrl)("https://blog.roblox.com"),
                            idSelector: "nav-blog",
                            iconClass: "icon-nav-blog",
                            name: "blog",
                            labelTranslationKey: "Label.sBlog",
                            blankTarget: !0
                        },
                        shop: {
                            isModal: !0,
                            idSelector: "nav-shop",
                            iconClass: "icon-nav-shop",
                            name: "shop",
                            labelTranslationKey: "Label.OfficialStore"
                        },
                        giftcards: {
                            url: (0, T.getAbsoluteUrl)("/giftcards-us"),
                            idSelector: "nav-giftcards",
                            iconClass: "icon-nav-giftcards",
                            name: "giftcards",
                            labelTranslationKey: "Label.GiftCards"
                        }
                    },
                    upgradeButton: {
                        url: (0, T.getAbsoluteUrl)("/premium/membership?ctx=leftnav"),
                        labelTranslationKey: I.authenticatedUser.isPremiumUser ? "ActionsPremium" : "ActionsGetPremium"
                    },
                    sponsorEvents: {
                        label: {
                            labelTranslationKey: "Label.sEvents"
                        },
                        events: {}
                    },
                    gameSearchLink: U,
                    avatarSearchLink: D,
                    miscSearchLink: M,
                    universalSearchUrls: [{
                        url: (0, T.getAbsoluteUrl)("/search/users?keyword="),
                        label: "Label.Players",
                        pageSort: []
                    }, {
                        url: (0, T.getAbsoluteUrl)("/discover/?Keyword="),
                        label: "Label.Experience",
                        pageSort: ["home", "games", "discover"]
                    }, {
                        url: (0, T.getAbsoluteUrl)("/catalog?CatalogContext=1&Keyword="),
                        label: "Label.sCatalog",
                        pageSort: ["catalog", "inventory", "bundles"]
                    }, {
                        url: (0, T.getAbsoluteUrl)("/search/communities?keyword="),
                        label: "Label.sGroups",
                        pageSort: ["groups"]
                    }, {
                        url: (0, T.getAbsoluteUrl)("/develop/library?CatalogContext=2&Category=6&Keyword="),
                        label: "Label.CreatorStore",
                        pageSort: ["develop"]
                    }],
                    newUniversalSearchUrls: [U].concat(function(t) {
                        if (Array.isArray(t)) return L(t)
                    }(M) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(M) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return L(t, void 0);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return L(t, n)
                        }
                    }(M) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    settingsUrl: {
                        settings: {
                            url: (0, T.getAbsoluteUrl)("/my/account"),
                            label: "Label.sSettings"
                        },
                        quickLogin: {
                            url: (0, T.getAbsoluteUrl)("/home"),
                            label: "Label.sQuickLogin"
                        },
                        safetySupport: {
                            url: (0, T.getAbsoluteUrl)("/help-safety"),
                            label: "Label.HelpAndSafety"
                        },
                        switchAccountKey: {
                            url: (0, T.getAbsoluteUrl)("/home"),
                            label: "Label.sSwitchAccount"
                        },
                        logout: {
                            url: "".concat(k().authApi, "/v2/logout"),
                            label: "Label.sLogout"
                        }
                    },
                    buyRobuxUrl: {
                        myTransactions: {
                            url: (0, T.getAbsoluteUrl)("/transactions"),
                            label: "Label.MyMoney"
                        },
                        buyRobux: {
                            url: (0, T.getAbsoluteUrl)("/upgrades/robux?ctx=navpopover"),
                            label: "Label.sBuyRobux",
                            name: "Label.sRobux"
                        },
                        buyRobuxOnVng: {
                            url: k().vngGamesShopUrl,
                            label: "Label.sBuyRobux",
                            cacheKey: "isEligibleForVng"
                        }
                    },
                    userDataUrl: (0, T.getAbsoluteUrl)("/navigation/userData"),
                    quickLoginUrl: (0, T.getAbsoluteUrl)("/crossdevicelogin/ConfirmCode"),
                    redeemUrl: {
                        url: (0, T.getAbsoluteUrl)("/redeem"),
                        label: "Heading.RedeemRobloxCodes"
                    },
                    buyGiftCardUrl: {
                        url: "https://roblox.cashstar.com/gift-card/buy/?ref=1023buygc",
                        label: "Label.sBuyGiftCard",
                        cacheKey: "giftCardExp"
                    }
                },
                B = window.Roblox["core-scripts"].guac,
                F = window.CoreUtilities,
                q = function() {
                    return (0, T.getAbsoluteUrl)("/login")
                },
                W = function() {
                    var t = {
                        url: "".concat(k().privateMessagesApi, "/v1/messages/unread/count"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                z = function(t) {
                    var n, r = {
                        url: (n = t, "".concat(k().economyApi, "/v1/users/").concat(n, "/currency")),
                        withCredentials: !0
                    };
                    return F.httpService.get(r)
                },
                V = function() {
                    return (0, B.callBehaviour)("navigation-header-ui")
                },
                G = function() {
                    var t = {
                        url: "".concat(k().tradesApi, "/v1/trades/inbound/count"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                K = function() {
                    var t = {
                        url: "".concat(k().friendsApi, "/v1/user/friend-requests/count"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                H = function() {
                    var t = {
                        url: "".concat(k().authApi, "/v2/logout"),
                        withCredentials: !0
                    };
                    return F.httpService.post(t)
                },
                $ = function() {
                    var t = {
                        url: "".concat(k().apiGatewayUrl, "/credit-balance/v1/get-credit-balance-for-navigation"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                Q = function() {
                    var t = {
                        url: "".concat(k().apiGatewayUrl, "/credit-balance/v1/get-gift-card-visibility"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                X = function() {
                    var t = {
                        url: "".concat(k().apiGatewayUrl, "/vng-payments/v1/getVngShopUrl"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                Z = function() {
                    var t = {
                        url: "".concat(k().apiGatewayUrl, "/robuxbadge/v1/robuxbadge"),
                        withCredentials: !0
                    };
                    return F.httpService.get(t)
                },
                Y = window.PropTypes,
                J = r.n(Y),
                ee = window.Roblox,
                et = window.CoreRobloxUtilities,
                en = {
                    arrowUp: 38,
                    arrowDown: 40,
                    tab: 9,
                    enter: 13
                },
                er = "Roblox.Logout",
                eo = "FriendshipNotifications",
                ea = "Roblox.Friends.CountChanged",
                ei = {
                    name: "Roblox.Messages.CountChanged"
                },
                el = "Response.InternalServerErrorDescription",
                ec = {
                    name: "headerMenuIconClick"
                },
                eu = 1e4,
                es = 1e4,
                ed = "control",
                ef = "hideCreditAndRobux",
                ep = "showCreditAndRobux",
                em = "RBXASAccountSwitched",
                ev = "Description.AccountSwitchedConfirmationBannerText";

            function eh(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }
            var eb = et.dataStores.userDataStore.maxFriendRequestNotificationCount,
                ey = et.dataStores.userDataStore.maxMessagesNotificationCount;

            function eg(t) {
                var n, r, o = t.translate,
                    a = t.idSelector,
                    i = t.isModal,
                    l = t.name,
                    c = t.iconClass,
                    u = t.labelTranslationKey,
                    s = t.url,
                    d = t.urlForNotification,
                    f = t.onClickShopLink,
                    p = t.friendsData,
                    m = t.messagesData,
                    v = t.tradeData,
                    b = t.blankTarget,
                    y = (eh(r = {}, _.scrollListItems.friends.name, p), eh(r, _.scrollListItems.messages.name, m), eh(r, _.scrollListItems.trade.name, v), r)[l],
                    g = (null == y ? void 0 : y.count) ? d : s;
                return i ? (0, h.jsx)("li", {
                    children: (0, h.jsxs)("button", {
                        id: a,
                        type: "button",
                        onClick: f,
                        className: "dynamic-overflow-container text-nav",
                        children: [(0, h.jsx)("div", {
                            children: (0, h.jsx)("span", {
                                className: c
                            })
                        }), (0, h.jsx)("span", {
                            className: "font-header-2 dynamic-ellipsis-item",
                            title: o(u),
                            children: o(u)
                        })]
                    })
                }, l) : (0, h.jsx)("li", {
                    children: (0, h.jsxs)(O.Link, {
                        url: g,
                        id: a,
                        className: "dynamic-overflow-container text-nav",
                        target: b ? "_blank" : "_self",
                        children: [(0, h.jsx)("div", {
                            children: (0, h.jsx)("span", {
                                className: c
                            })
                        }), (0, h.jsx)("span", {
                            className: "font-header-2 dynamic-ellipsis-item",
                            title: o(u),
                            children: o(u)
                        }), y && y.count > 0 && (0, h.jsx)("div", {
                            className: "dynamic-width-item align-right",
                            children: (0, h.jsx)("span", {
                                className: "notification-blue notification",
                                title: F.numberFormat.getNumberFormat(y.count),
                                children: (n = y.count, l === _.scrollListItems.friends.name && n >= eb ? "".concat(eb, "+") : l === _.scrollListItems.messages.name && n >= ey ? "".concat(ey, "+") : F.abbreviateNumber.getTruncValue(n, 1e3))
                            })
                        })]
                    })
                }, l)
            }
            eg.defaultProps = {
                idSelector: "",
                url: "",
                urlForNotification: "",
                isModal: !1,
                blankTarget: !1,
                friendsData: {
                    count: 0
                },
                messagesData: {
                    count: 0
                },
                tradeData: {
                    count: 0
                }
            }, eg.propTypes = {
                idSelector: J().string,
                translate: J().func.isRequired,
                isModal: J().bool,
                name: J().string.isRequired,
                iconClass: J().string.isRequired,
                labelTranslationKey: J().string.isRequired,
                url: J().string,
                urlForNotification: J().string,
                onClickShopLink: J().func.isRequired,
                blankTarget: J().bool,
                friendsData: J().shape({
                    count: J().number
                }),
                messagesData: J().shape({
                    count: J().number
                }),
                tradeData: J().shape({
                    count: J().number
                })
            };
            var eS = {
                name: "sponsoredEventClicked",
                type: et.eventStreamService.eventTypes.pageLoad,
                context: "click"
            };

            function ew(t) {
                var n = t.translate,
                    r = t.sponsoredPagesData.map(function(t) {
                        var n, r, o = t.title,
                            a = t.name,
                            i = t.pageType,
                            l = t.logoImageUrl;
                        return l ? (0, h.jsx)("li", {
                            className: "rbx-nav-sponsor",
                            children: (0, h.jsx)("a", {
                                className: "text-nav menu-item",
                                href: (n = i, r = a, (0, T.getAbsoluteUrl)("/".concat(n.toLowerCase(), "/").concat(r))),
                                title: o,
                                onClick: function() {
                                    et.eventStreamService && et.eventStreamService.sendEvent(eS, {
                                        sponsoredPageName: o
                                    })
                                },
                                children: l ? (0, h.jsx)("img", {
                                    src: l,
                                    alt: ""
                                }) : (0, h.jsx)("span", {
                                    children: o
                                })
                            })
                        }, a) : null
                    }),
                    o = r.some(function(t) {
                        return null !== t
                    });
                return (0, h.jsxs)(j().Fragment, {
                    children: [o && (0, h.jsxs)("li", {
                        className: "font-bold small text-nav",
                        children: [" ", n("Label.sEvents")]
                    }), r]
                })
            }
            ew.defaultProps = {
                sponsoredPagesData: []
            }, ew.propTypes = {
                translate: J().func.isRequired,
                sponsoredPagesData: J().instanceOf(Array)
            };

            function ex(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function eE(t) {
                return function(t) {
                    if (Array.isArray(t)) return ex(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || ej(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ej(t, n) {
                if (t) {
                    if ("string" == typeof t) return ex(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ex(t, n)
                }
            }
            var eC = _.universalSearchUrls,
                eA = _.newUniversalSearchUrls,
                eO = _.avatarSearchLink,
                eN = !I.authenticatedUser.isAuthenticated,
                eI = function(t) {
                    ee.EventStream && ee.EventStream.SendEventWithTarget(t, "click", {}, ee.EventStream.TargetTypes.WWW)
                },
                eR = function(t) {
                    if (eN || !ee.RealTime) return function() {};
                    document.addEventListener(ea, t);
                    var n = ee.RealTime.Factory.GetClient();
                    return n.Subscribe(eo, t),
                        function() {
                            document.removeEventListener(ea, t), n.Unsubscribe(eo, t)
                        }
                },
                eT = function() {
                    return window.innerWidth < 543
                },
                eP = function() {
                    var t = eE(eC);
                    return t.sort(function(t) {
                        return t.pageSort.reduce(function(t, n) {
                            return t || window.location.href.indexOf(n) > -1
                        }, !1) ? -1 : 1
                    }), t
                },
                ek = function() {
                    var t = eE(eA),
                        n = t.filter(function(t) {
                            return t.pageSort.some(function(t) {
                                return window.location.pathname.indexOf(t) > -1
                            })
                        }),
                        r = t.filter(function(t) {
                            return t.pageSort.every(function(t) {
                                return -1 === window.location.pathname.indexOf(t)
                            })
                        });
                    return eE(n).concat(eE(r))
                },
                eL = function() {
                    return document.getElementById("navigation-container") && document.getElementById("navigation-container").className
                },
                eU = function(t) {
                    var n = {};
                    return ("?" === t[0] ? t.substr(1) : t).split("&").forEach(function(t) {
                        if (t.includes("=")) {
                            var r, o, a = (r = t.split("="), function(t) {
                                    if (Array.isArray(t)) return t
                                }(r) || function(t, n) {
                                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != a) {
                                        var i = [],
                                            l = !0,
                                            c = !1;
                                        try {
                                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                        } catch (t) {
                                            c = !0, o = t
                                        } finally {
                                            try {
                                                l || null == a.return || a.return()
                                            } finally {
                                                if (c) throw o
                                            }
                                        }
                                        return i
                                    }
                                }(r, 2) || ej(r, 2) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                i = a[0],
                                l = a[1];
                            n[null == (o = decodeURIComponent(i)) ? void 0 : o.toLowerCase()] = decodeURIComponent(l)
                        }
                    }), n
                };

            function eD(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var eM = function() {
                    return document.getElementById("navigation-container")
                },
                e_ = {
                    debounceTimeout: 100,
                    debouncedSearchInputMaxLength: 35,
                    expiryTimeout: 5e3,
                    variationId: 1,
                    trendingVariationId: 0,
                    avatarAutocompleteQueryPaddingAmount: 10,
                    requestSuggestionUrl: {
                        url: "".concat(k().apiGatewayUrl, "/games-autocomplete/v1/request-suggestion"),
                        withCredentials: !0
                    },
                    getSuggestionUrl: {
                        url: "".concat(k().apiGatewayUrl, "/games-autocomplete/v1/get-suggestion/"),
                        withCredentials: !0
                    },
                    avatarRequestSuggestionUrl: {
                        url: "".concat(k().apiGatewayUrl, "/autocomplete-avatar/v2/suggest"),
                        withCredentials: !0
                    },
                    avatarRequestSuggestionCdnUrl: {
                        url: "".concat(k().apiGatewayCdnUrl, "/autocomplete-avatar/v2/suggest"),
                        withCredentials: !0
                    },
                    englishLanguageCode: "en",
                    avatarAutocompleteUrlLocations: ["Catalog", "Trades", "Inventory", "Avatar", "CatalogItem"],
                    avatarAutocompleteSuggestionLimit: 5,
                    isSpecialTreatmentAutocompleteRestricted: function() {
                        var t, n;
                        return 7 === parseInt(null != (n = null == (t = eM()) ? void 0 : t.dataset.numberOfAutocompleteSuggestions) ? n : "", 10) && _.miscSearchLink.reduce(function(t, n) {
                            var r;
                            return t.push.apply(t, function(t) {
                                if (Array.isArray(t)) return eD(t)
                            }(r = n.pageSort) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(r) || function(t, n) {
                                if (t) {
                                    if ("string" == typeof t) return eD(t, void 0);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eD(t, n)
                                }
                            }(r) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()), t
                        }, []).reduce(function(t, n) {
                            return t || window.location.pathname.includes(n)
                        }, !1)
                    },
                    isSpecialTreatment: function() {
                        var t, n;
                        return 7 === parseInt(null != (n = null == (t = eM()) ? void 0 : t.dataset.numberOfAutocompleteSuggestions) ? n : "", 10)
                    },
                    numberOfSpecialTreatmentAutocompleteSuggestions: 3,
                    isAutocompleteSuggestionsIXPTestEnabled: function() {
                        var t, n;
                        return parseInt(null != (n = null == (t = eM()) ? void 0 : t.dataset.numberOfAutocompleteSuggestions) ? n : "", 10) > 0
                    },
                    numberOfAutocompleteSuggestions: function() {
                        var t, n;
                        return parseInt(null != (n = null == (t = eM()) ? void 0 : t.dataset.numberOfAutocompleteSuggestions) ? n : "", 10) || 0
                    }
                },
                eB = "https://images.rbxcdn.com/24bc2624bc490bd7.webp",
                eF = {
                    vi_vn: "https://images.rbxcdn.com/7ded3a0edd1b5f6e.webp",
                    tr_tr: "https://images.rbxcdn.com/f8bdffbde50ba31c.webp",
                    th_th: "https://images.rbxcdn.com/0f349959ac71bf61.webp",
                    pt_br: "https://images.rbxcdn.com/35fb8c7a0be59737.webp",
                    pl_pl: "https://images.rbxcdn.com/0d369379aad95eba.webp",
                    ko_kr: "https://images.rbxcdn.com/e97febdd0b128e91.webp",
                    ja_jp: "https://images.rbxcdn.com/de1e41c39b61b997.webp",
                    it_it: "https://images.rbxcdn.com/a800a57dae4d1bde.webp",
                    id_id: "https://images.rbxcdn.com/cf889b00fa82ba5f.webp",
                    fr_fr: "https://images.rbxcdn.com/2c3fd9067ca77667.webp",
                    es_es: "https://images.rbxcdn.com/1864f7ddcb60a705.webp",
                    en_us: eB,
                    de_de: "https://images.rbxcdn.com/ec1cc5808c0993ff.webp",
                    zh_tw: "https://images.rbxcdn.com/b8fff0db503b8b8c.webp",
                    zh_cn: "https://images.rbxcdn.com/8955d114e96c985e.webp",
                    ar_001: "https://images.rbxcdn.com/0091fa137c97b27a.webp"
                },
                eq = function() {
                    var t, n;
                    return new Date((null == (t = eM()) ? void 0 : t.dataset.platformEventLeftNavEntryStartTime) ? Date.parse("".concat(null == (n = eM()) ? void 0 : n.dataset.platformEventLeftNavEntryStartTime, " UTC")) : "01/01/2001")
                },
                eW = function() {
                    var t, n;
                    return new Date((null == (t = eM()) ? void 0 : t.dataset.platformEventLeftNavEntryEndTime) ? Date.parse("".concat(null == (n = eM()) ? void 0 : n.dataset.platformEventLeftNavEntryEndTime, " UTC")) : "01/01/2001")
                },
                ez = function() {
                    var t, n;
                    return (null == (t = eM()) ? void 0 : t.dataset.platformEventLeftNavUrl) ? null == (n = eM()) ? void 0 : n.dataset.platformEventLeftNavUrl : ""
                };

            function eV(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var eG = "clickMerchandiseInLeftNav",
                eK = "clickContinueToAmazonStore";

            function eH(t) {
                var n, r, o = t.translate,
                    a = function(t, n) {
                        if (null == t) return {};
                        var r, o, a = function(t, n) {
                            if (null == t) return {};
                            var r, o, a = {},
                                i = Object.keys(t);
                            for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (a[r] = t[r]);
                            return a
                        }(t, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (o = 0; o < i.length; o++) r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
                        }
                        return a
                    }(t, ["translate"]),
                    i = (r = (0, E.useState)(!1), function(t) {
                        if (Array.isArray(t)) return t
                    }(r) || function(t, n) {
                        var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    l || null == a.return || a.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return i
                        }
                    }(r, 2) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return eV(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eV(t, n)
                        }
                    }(r, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    l = i[0],
                    c = i[1],
                    u = (0, E.useCallback)(function() {
                        c(function(t) {
                            return !t
                        }), eI(eG)
                    }, []),
                    s = function() {
                        c(!1)
                    },
                    d = Object.values(_.scrollListItems).map(function(t) {
                        return (0, h.jsx)(eg, function(t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    o = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                                }))), o.forEach(function(n) {
                                    var o;
                                    o = r[n], n in t ? Object.defineProperty(t, n, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = o
                                })
                            }
                            return t
                        }({
                            translate: o,
                            onClickShopLink: u
                        }, t, a), t.name)
                    }),
                    f = (0, h.jsx)("li", {
                        className: "rbx-upgrade-now",
                        children: (0, h.jsx)("a", {
                            href: _.upgradeButton.url,
                            className: "btn-growth-md btn-secondary-md",
                            onClick: function() {
                                et.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(et.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, et.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEFT_NAVIGATION_BAR, et.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, I.authenticatedUser.isPremiumUser ? et.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.PREMIUM : et.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GET_PREMIUM)
                            },
                            id: "upgrade-now-button",
                            children: o(_.upgradeButton.labelTranslationKey)
                        })
                    }),
                    p = (0, h.jsxs)(j().Fragment, {
                        children: [(0, h.jsx)("p", {
                            className: "shop-description",
                            children: o("Description.RetailWebsiteRedirect")
                        }), (0, h.jsx)("p", {
                            className: "shop-warning",
                            children: o("Description.PurchaseAgeWarning")
                        })]
                    }),
                    m = (0, h.jsx)(O.SimpleModal, {
                        title: o("Heading.LeavingRoblox"),
                        body: p,
                        show: l,
                        actionButtonShow: !0,
                        actionButtonText: o("Action.Continue"),
                        neutralButtonText: o("Action.Cancel"),
                        onAction: function() {
                            var t = decodeURIComponent(k().amazonWebStoreLink);
                            window.open(t, "_blank"), eI(eK)
                        },
                        onNeutral: s,
                        onClose: s
                    }),
                    v = new Date,
                    b = eq(),
                    y = eW(),
                    g = ez(),
                    S = eF[n = (ee.Intl && new ee.Intl).getRobloxLocale()] ? eF[n] : eB,
                    w = (0, h.jsxs)("a", {
                        href: g,
                        className: "rbx-platform-event-container",
                        children: [(0, h.jsxs)("div", {
                            className: "rbx-platform-event-header dynamic-overflow-container",
                            children: [(0, h.jsx)("span", {
                                className: "rbx-event-icon"
                            }), (0, h.jsx)("span", {
                                className: "rbx-event-header-text dynamic-ellipsis-item",
                                children: o("Label.sEvents")
                            })]
                        }), (0, h.jsx)("img", {
                            className: "rbx-platform-event-thumbnail",
                            src: S,
                            alt: o("Label.TheHunt")
                        })]
                    });
                return (0, h.jsxs)("ul", {
                    className: "left-col-list",
                    children: [d, f, !1, m, v > b && v < y && g && w]
                })
            }

            function e$(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function eQ(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return e$(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e$(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            eH.propTypes = {
                translate: J().func.isRequired
            };
            var eX = function(t) {
                    var n = I.authenticatedUser.isAuthenticated,
                        r = eQ((0, E.useState)({}), 2),
                        o = r[0],
                        a = r[1],
                        i = eQ((0, E.useState)({}), 2),
                        l = i[0],
                        c = i[1],
                        u = eQ((0, E.useState)({}), 2),
                        s = u[0],
                        d = u[1];
                    return (0, E.useEffect)(function() {
                        var t, r = function() {},
                            o = function() {};
                        return n && (r = eR(function() {
                                K().then(function(t) {
                                    a(t.data)
                                }, function(t) {
                                    console.error(t)
                                })
                            }), t = function() {
                                W().then(function(t) {
                                    c(t.data)
                                })
                            }, o = eN || !ee.RealTime ? function() {} : (document.addEventListener(ei, t), function() {
                                document.removeEventListener(ei, t)
                            }), K().then(function(t) {
                                a(t.data)
                            }, function(t) {
                                console.error(t)
                            }), W().then(function(t) {
                                c(t.data)
                            }, function(t) {
                                console.error(t)
                            }), G().then(function(t) {
                                d(t.data)
                            }, function(t) {
                                console.error(t)
                            })),
                            function() {
                                r(), o()
                            }
                    }, []), (0, h.jsx)(eH, function(t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                o = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable
                            }))), o.forEach(function(n) {
                                var o;
                                o = r[n], n in t ? Object.defineProperty(t, n, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = o
                            })
                        }
                        return t
                    }({
                        friendsData: o,
                        messagesData: l,
                        tradeData: s
                    }, t))
                },
                eZ = I.authenticatedUser.name,
                eY = I.authenticatedUser.displayName,
                eJ = {
                    nameForDisplay: (null === ee.DisplayNames || void 0 === ee.DisplayNames ? void 0 : ee.DisplayNames.Enabled()) ? eY : eZ
                };

            function e0(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function e1() {
                return (e1 = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
                    }
                    return t
                }).apply(this, arguments)
            }
            var e2 = function(t) {
                    var n, r = e1({}, function(t) {
                            if (null == t) throw TypeError("Cannot destructure " + t);
                            return t
                        }(t)),
                        o = (0, S.useTranslation)().translate,
                        a = (n = (0, E.useState)(!1), function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != a) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, o = t
                                } finally {
                                    try {
                                        l || null == a.return || a.return()
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return e0(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e0(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = a[0],
                        l = a[1],
                        c = (0, E.useCallback)(function() {
                            l(!i)
                        }, [i]);
                    (0, E.useEffect)(function() {
                        return document.addEventListener(ec.name, c),
                            function() {
                                document.removeEventListener(ec.name, c)
                            }
                    }, [c]);
                    var u = (0, R.currentUserHasVerifiedBadge)(),
                        s = (0, E.useRef)(null),
                        d = u && R.VerifiedBadgeIconContainer ? (0, h.jsx)("section", {
                            ref: function(t) {
                                s.current = t
                            },
                            children: (0, h.jsx)(R.VerifiedBadgeIconContainer, {
                                overrideImgClass: "verified-badge-icon-header",
                                size: R.BadgeSizes.CAPTIONHEADER
                            })
                        }) : null,
                        f = A()("rbx-left-col", {
                            "nav-show": i
                        }),
                        p = A()("font-header-2 dynamic-ellipsis-item", {
                            "verified-badge-left-nav": u
                        });
                    return (0, h.jsxs)("div", {
                        id: "navigation",
                        className: f,
                        children: [(0, h.jsxs)("ul", {
                            children: [(0, h.jsx)("li", {
                                children: (0, h.jsxs)(O.Link, {
                                    className: "dynamic-overflow-container text-nav",
                                    role: "link",
                                    url: _.scrollListItems.profile.url,
                                    children: [(0, h.jsx)("span", {
                                        className: "avatar avatar-headshot-xs",
                                        children: (0, h.jsx)(N.Thumbnail2d, {
                                            containerClass: "avatar-card-image",
                                            targetId: I.authenticatedUser.id,
                                            type: N.ThumbnailTypes.avatarHeadshot,
                                            altName: I.authenticatedUser.name
                                        })
                                    }), (0, h.jsx)("div", {
                                        className: p,
                                        children: eJ.nameForDisplay
                                    }), d]
                                })
                            }, "username"), (0, h.jsx)("li", {
                                className: "rbx-divider"
                            }, "divider")]
                        }), (0, h.jsx)(O.ScrollBar, {
                            className: "rbx-scrollbar",
                            children: (0, h.jsx)(eX, function(t) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var r = null != arguments[n] ? arguments[n] : {},
                                        o = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                                    }))), o.forEach(function(n) {
                                        var o;
                                        o = r[n], n in t ? Object.defineProperty(t, n, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[n] = o
                                    })
                                }
                                return t
                            }({
                                translate: o
                            }, r))
                        })]
                    })
                },
                e8 = function() {
                    return (e8 = Object.assign || function(t) {
                        for (var n, r = 1, o = arguments.length; r < o; r++)
                            for (var a in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
                        return t
                    }).apply(this, arguments)
                };

            function e5(t, n) {
                var r = {};
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && 0 > n.indexOf(o) && (r[o] = t[o]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (o = Object.getOwnPropertySymbols(t); a < o.length; a++) 0 > n.indexOf(o[a]) && Object.prototype.propertyIsEnumerable.call(t, o[a]) && (r[o[a]] = t[o[a]])
                }
                return r
            }
            var e3 = function() {
                    for (var t, n, r = 0, o = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (n = function t(n) {
                        var r, o, a = "";
                        if ("string" == typeof n || "number" == typeof n) a += n;
                        else if ("object" == (void 0 === n ? "undefined" : n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n))
                            if (Array.isArray(n)) {
                                var i = n.length;
                                for (r = 0; r < i; r++) n[r] && (o = t(n[r])) && (a && (a += " "), a += o)
                            } else
                                for (o in n) n[o] && (a && (a += " "), a += o);
                        return a
                    }(t)) && (o && (o += " "), o += n);
                    return o
                },
                e6 = (0, E.forwardRef)(function(t, n) {
                    var r = t.className,
                        o = t.style,
                        a = t.orientation,
                        i = void 0 === a ? "horizontal" : a,
                        l = t.variant,
                        c = void 0 === l ? "Standard" : l,
                        u = e5(t, ["className", "style", "orientation", "variant"]),
                        s = "vertical" === i,
                        d = {};
                    return s || "Inset" !== c ? s || "InsetLeft" !== c ? s || "InsetRight" !== c || (d = {
                        marginRight: "var(--padding-xlarge)"
                    }) : d = {
                        marginLeft: "var(--padding-xlarge)"
                    } : d = {
                        marginLeft: "var(--padding-xlarge)",
                        marginRight: "var(--padding-xlarge)"
                    }, j().createElement("div", Object.assign({
                        ref: n
                    }, u, {
                        role: "separator",
                        "data-orientation": i,
                        "aria-orientation": i,
                        style: Object.assign(Object.assign(Object.assign({
                            borderRightWidth: 0,
                            borderBottomWidth: 0,
                            boxSizing: "border-box",
                            borderStyle: "solid"
                        }, s ? {
                            height: "100%",
                            width: 0,
                            borderLeftWidth: "var(--stroke-standard)",
                            borderTopWidth: 0
                        } : "Thick" === c ? {
                            height: "var(--size-250)",
                            borderTop: "var(--stroke-standard)",
                            borderLeftWidth: 0,
                            background: "var(--color-common-heavydivider, rgba(0, 0, 0, 0.50))"
                        } : {
                            height: 0,
                            borderTopWidth: "var(--stroke-standard)",
                            borderLeftWidth: 0
                        }), d), o),
                        className: e3("stroke-default self-stretch", r)
                    }))
                });
            e6.displayName = "Divider";
            var e4 = window.Roblox["core-scripts"].http.http,
                e7 = window.Roblox["core-scripts"].eventStream,
                e9 = window.Roblox["core-scripts"].paymentsFlow,
                te = r.n(e9),
                tt = {
                    XSmall: "size-[var(--icon-size-xsmall)]",
                    Small: "size-[var(--icon-size-small)]",
                    Medium: "size-[var(--icon-size-medium)]",
                    Large: "size-[var(--icon-size-large)]",
                    XLarge: "size-[var(--icon-size-xlarge)]"
                },
                tn = j().forwardRef(function(t, n) {
                    var r = t.name,
                        o = t.size,
                        a = t.className,
                        i = (t.children, e5(t, ["name", "size", "className", "children"]));
                    return j().createElement("span", Object.assign({
                        ref: n,
                        role: "presentation",
                        className: e3("grow-0 shrink-0 basis-auto icon", r, tt[void 0 === o ? "Medium" : o], a)
                    }, i))
                });
            tn.displayName = "Icon";
            var tr = {
                    Neutral: "bg-shift-300",
                    Contrast: "bg-system-contrast",
                    Success: "bg-system-success",
                    Warning: "bg-system-warning",
                    Alert: "bg-system-alert",
                    OverMedia: "bg-[var(--light-mode-surface-100)]"
                },
                to = {
                    Neutral: "content-emphasis",
                    Contrast: "content-inverse-emphasis",
                    Success: "content-[var(--light-mode-content-emphasis)]",
                    Warning: "content-[var(--light-mode-content-emphasis)]",
                    Alert: "content-[var(--dark-mode-content-emphasis)]",
                    OverMedia: "content-[var(--light-mode-content-emphasis)]"
                },
                ta = {
                    Neutral: "stroke-none",
                    Contrast: "stroke-none",
                    Success: "stroke-none",
                    Warning: "stroke-none",
                    Alert: "stroke-none",
                    OverMedia: "stroke-standard"
                },
                ti = j().forwardRef(function(t, n) {
                    var r = t.className,
                        o = t.label,
                        a = t.variant,
                        i = void 0 === a ? "Neutral" : a,
                        l = t.icon,
                        c = e5(t, ["className", "label", "variant", "icon"]),
                        u = l && !o;
                    return j().createElement("div", Object.assign({
                        ref: n
                    }, c, {
                        className: e3("foundation-web-badge flex items-center radius-circle select-none height-600 gap-xsmall", u ? "width-600 justify-center" : "width-[fit-content] padding-x-small", tr[i], to[i], ta[i], r),
                        style: {
                            borderColor: "var(--light-mode-stroke-default)"
                        }
                    }), l && j().createElement(tn, {
                        name: l,
                        size: "XSmall"
                    }), o && j().createElement("span", {
                        className: e3("padding-y-xsmall text-no-wrap text-truncate-split text-label-small", to[i])
                    }, o))
                });

            function tl(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            ti.displayName = "Badge";
            var tc = (null == (tT = globalThis) ? void 0 : tT.document) ? E.useLayoutEffect : function() {},
                tu = E[" useId ".trim().toString()] || function() {},
                ts = 0;

            function td(t) {
                var n, r = (n = E.useState(tu()), function(t) {
                        if (Array.isArray(t)) return t
                    }(n) || function(t, n) {
                        var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    l || null == a.return || a.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return i
                        }
                    }(n, 2) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return tl(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tl(t, n)
                        }
                    }(n, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    o = r[0],
                    a = r[1];
                return tc(function() {
                    t || a(function(t) {
                        return null != t ? t : String(ts++)
                    })
                }, [t]), t || (o ? "radix-".concat(o) : "")
            }
            var tf = window.ReactDOM,
                tp = r.n(tf);

            function tm(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function tv(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function th(t, n) {
                return null != n && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n
            }

            function tb(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        tv(t, n, r[n])
                    })
                }
                return t
            }

            function ty(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, o)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function tg(t, n) {
                if (null == t) return {};
                var r, o, a = function(t, n) {
                    if (null == t) return {};
                    var r, o, a = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (a[r] = t[r]);
                    return a
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
                }
                return a
            }

            function tS(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || tx(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tw(t) {
                return function(t) {
                    if (Array.isArray(t)) return tm(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || tx(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tx(t, n) {
                if (t) {
                    if ("string" == typeof t) return tm(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tm(t, n)
                }
            }

            function tE(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = r.checkForDefaultPrevented,
                    a = void 0 === o || o;
                return function(r) {
                    if (null == t || t(r), !1 === a || !r.defaultPrevented) return null == n ? void 0 : n(r)
                }
            }

            function tj(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function tC() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        o = n.map(function(n) {
                            var o = tj(n, t);
                            return r || "function" != typeof o || (r = !0), o
                        });
                    if (r) return function() {
                        for (var t = 0; t < o.length; t++) {
                            var r = o[t];
                            "function" == typeof r ? r() : tj(n[t], null)
                        }
                    }
                }
            }

            function tA() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return E.useCallback(tC.apply(void 0, tw(n)), n)
            }
            var tO = Symbol("radix.slottable");

            function tN(t) {
                return E.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === tO
            }
            var tI = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                var r, o, a, i, l, c = (o = r = "Primitive.".concat(n), (a = E.forwardRef(function(t, n) {
                        var r = t.children,
                            o = tg(t, ["children"]);
                        if (E.isValidElement(r)) {
                            var a, i, l, c = (l = null == (a = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : a.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                u = function(t, n) {
                                    var r = tb({}, n);
                                    for (var o in n) ! function(o) {
                                        var a = t[o],
                                            i = n[o];
                                        /^on[A-Z]/.test(o) ? a && i ? r[o] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, tw(n)), a.apply(void 0, tw(n))
                                        } : a && (r[o] = a) : "style" === o ? r[o] = tb({}, a, i) : "className" === o && (r[o] = [a, i].filter(Boolean).join(" "))
                                    }(o);
                                    return tb({}, t, r)
                                }(o, r.props);
                            return r.type !== E.Fragment && (u.ref = n ? tC(n, c) : c), E.cloneElement(r, u)
                        }
                        return E.Children.count(r) > 1 ? E.Children.only(null) : null
                    })).displayName = "".concat(o, ".SlotClone"), i = a, (l = E.forwardRef(function(t, n) {
                        var r = t.children,
                            o = tg(t, ["children"]),
                            a = E.Children.toArray(r),
                            l = a.find(tN);
                        if (l) {
                            var c = l.props.children,
                                u = a.map(function(t) {
                                    return t === l ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, h.jsx)(i, ty(tb({}, o), {
                                ref: n,
                                children: E.isValidElement(c) ? E.cloneElement(c, void 0, u) : null
                            }))
                        }
                        return (0, h.jsx)(i, ty(tb({}, o), {
                            ref: n,
                            children: r
                        }))
                    })).displayName = "".concat(r, ".Slot"), l),
                    u = E.forwardRef(function(t, r) {
                        var o = t.asChild,
                            a = tg(t, ["asChild"]),
                            i = o ? c : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, h.jsx)(i, ty(tb({}, a), {
                            ref: r
                        }))
                    });
                return u.displayName = "Primitive.".concat(n), ty(tb({}, t), tv({}, n, u))
            }, {});

            function tR(t) {
                var n = E.useRef(t);
                return E.useEffect(function() {
                    n.current = t
                }), E.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(tw(o)))
                    }
                }, [])
            }
            var tT, tP, tk, tL = "dismissableLayer.update",
                tU = E.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                tD = E.forwardRef(function(t, n) {
                    var r, o, a = t.disableOutsidePointerEvents,
                        i = void 0 !== a && a,
                        l = t.onEscapeKeyDown,
                        c = t.onPointerDownOutside,
                        u = t.onFocusOutside,
                        s = t.onInteractOutside,
                        d = t.onDismiss,
                        f = tg(t, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]),
                        p = E.useContext(tU),
                        m = tS(E.useState(null), 2),
                        v = m[0],
                        b = m[1],
                        y = null != (o = null == v ? void 0 : v.ownerDocument) ? o : null == (r = globalThis) ? void 0 : r.document,
                        g = tS(E.useState({}), 2)[1],
                        S = tA(n, function(t) {
                            return b(t)
                        }),
                        w = Array.from(p.layers),
                        x = tS(tw(p.layersWithOutsidePointerEventsDisabled).slice(-1), 1)[0],
                        j = w.indexOf(x),
                        C = v ? w.indexOf(v) : -1,
                        A = p.layersWithOutsidePointerEventsDisabled.size > 0,
                        O = C >= j,
                        N = function(t) {
                            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                                o = tR(t),
                                a = E.useRef(!1),
                                i = E.useRef(function() {});
                            return E.useEffect(function() {
                                var t = function(t) {
                                        if (t.target && !a.current) {
                                            var n = function() {
                                                    t_("dismissableLayer.pointerDownOutside", o, l, {
                                                        discrete: !0
                                                    })
                                                },
                                                l = {
                                                    originalEvent: t
                                                };
                                            "touch" === t.pointerType ? (r.removeEventListener("click", i.current), i.current = n, r.addEventListener("click", i.current, {
                                                once: !0
                                            })) : n()
                                        } else r.removeEventListener("click", i.current);
                                        a.current = !1
                                    },
                                    n = window.setTimeout(function() {
                                        r.addEventListener("pointerdown", t)
                                    }, 0);
                                return function() {
                                    window.clearTimeout(n), r.removeEventListener("pointerdown", t), r.removeEventListener("click", i.current)
                                }
                            }, [r, o]), {
                                onPointerDownCapture: function() {
                                    return a.current = !0
                                }
                            }
                        }(function(t) {
                            var n = t.target,
                                r = tw(p.branches).some(function(t) {
                                    return t.contains(n)
                                });
                            O && !r && (null == c || c(t), null == s || s(t), t.defaultPrevented || null == d || d())
                        }, y),
                        I = function(t) {
                            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                                o = tR(t),
                                a = E.useRef(!1);
                            return E.useEffect(function() {
                                var t = function(t) {
                                    t.target && !a.current && t_("dismissableLayer.focusOutside", o, {
                                        originalEvent: t
                                    }, {
                                        discrete: !1
                                    })
                                };
                                return r.addEventListener("focusin", t),
                                    function() {
                                        return r.removeEventListener("focusin", t)
                                    }
                            }, [r, o]), {
                                onFocusCapture: function() {
                                    return a.current = !0
                                },
                                onBlurCapture: function() {
                                    return a.current = !1
                                }
                            }
                        }(function(t) {
                            var n = t.target;
                            tw(p.branches).some(function(t) {
                                return t.contains(n)
                            }) || (null == u || u(t), null == s || s(t), t.defaultPrevented || null == d || d())
                        }, y);
                    return function(t) {
                        var n, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                            a = (r = E.useRef(t), E.useEffect(function() {
                                r.current = t
                            }), E.useMemo(function() {
                                return function() {
                                    for (var t, n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                                    return null == (t = r.current) ? void 0 : t.call.apply(t, [r].concat(tw(o)))
                                }
                            }, []));
                        E.useEffect(function() {
                            var t = function(t) {
                                "Escape" === t.key && a(t)
                            };
                            return o.addEventListener("keydown", t, {
                                    capture: !0
                                }),
                                function() {
                                    return o.removeEventListener("keydown", t, {
                                        capture: !0
                                    })
                                }
                        }, [a, o])
                    }(function(t) {
                        C === p.layers.size - 1 && (null == l || l(t), !t.defaultPrevented && d && (t.preventDefault(), d()))
                    }, y), E.useEffect(function() {
                        if (v) return i && (0 === p.layersWithOutsidePointerEventsDisabled.size && (tk = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(v)), p.layers.add(v), tM(),
                            function() {
                                i && 1 === p.layersWithOutsidePointerEventsDisabled.size && (y.body.style.pointerEvents = tk)
                            }
                    }, [v, y, i, p]), E.useEffect(function() {
                        return function() {
                            v && (p.layers.delete(v), p.layersWithOutsidePointerEventsDisabled.delete(v), tM())
                        }
                    }, [v, p]), E.useEffect(function() {
                        var t = function() {
                            return g({})
                        };
                        return document.addEventListener(tL, t),
                            function() {
                                return document.removeEventListener(tL, t)
                            }
                    }, []), (0, h.jsx)(tI.div, ty(tb({}, f), {
                        ref: S,
                        style: tb({
                            pointerEvents: A ? O ? "auto" : "none" : void 0
                        }, t.style),
                        onFocusCapture: tE(t.onFocusCapture, I.onFocusCapture),
                        onBlurCapture: tE(t.onBlurCapture, I.onBlurCapture),
                        onPointerDownCapture: tE(t.onPointerDownCapture, N.onPointerDownCapture)
                    }))
                });

            function tM() {
                var t = new CustomEvent(tL);
                document.dispatchEvent(t)
            }

            function t_(t, n, r, o) {
                var a = o.discrete,
                    i = r.originalEvent.target,
                    l = new CustomEvent(t, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                n && i.addEventListener(t, n, {
                    once: !0
                }), a ? i && tf.flushSync(function() {
                    return i.dispatchEvent(l)
                }) : i.dispatchEvent(l)
            }

            function tB(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function tF() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        o = n.map(function(n) {
                            var o = tB(n, t);
                            return r || "function" != typeof o || (r = !0), o
                        });
                    if (r) return function() {
                        for (var t = 0; t < o.length; t++) {
                            var r = o[t];
                            "function" == typeof r ? r() : tB(n[t], null)
                        }
                    }
                }
            }
            tD.displayName = "DismissableLayer", E.forwardRef(function(t, n) {
                var r = E.useContext(tU),
                    o = E.useRef(null),
                    a = tA(n, o);
                return E.useEffect(function() {
                    var t = o.current;
                    if (t) return r.branches.add(t),
                        function() {
                            r.branches.delete(t)
                        }
                }, [r.branches]), (0, h.jsx)(tI.div, ty(tb({}, t), {
                    ref: a
                }))
            }).displayName = "DismissableLayerBranch";
            var tq = Symbol("radix.slottable");

            function tW(t) {
                return E.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === tq
            }
            var tz = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                var r, o, a, i, l, c = (o = r = "Primitive.".concat(n), (a = E.forwardRef(function(t, n) {
                        var r = t.children,
                            o = tg(t, ["children"]);
                        if (E.isValidElement(r)) {
                            var a, i, l, c = (l = null == (a = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : a.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                u = function(t, n) {
                                    var r = tb({}, n);
                                    for (var o in n) ! function(o) {
                                        var a = t[o],
                                            i = n[o];
                                        /^on[A-Z]/.test(o) ? a && i ? r[o] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, tw(n)), a.apply(void 0, tw(n))
                                        } : a && (r[o] = a) : "style" === o ? r[o] = tb({}, a, i) : "className" === o && (r[o] = [a, i].filter(Boolean).join(" "))
                                    }(o);
                                    return tb({}, t, r)
                                }(o, r.props);
                            return r.type !== E.Fragment && (u.ref = n ? tF(n, c) : c), E.cloneElement(r, u)
                        }
                        return E.Children.count(r) > 1 ? E.Children.only(null) : null
                    })).displayName = "".concat(o, ".SlotClone"), i = a, (l = E.forwardRef(function(t, n) {
                        var r = t.children,
                            o = tg(t, ["children"]),
                            a = E.Children.toArray(r),
                            l = a.find(tW);
                        if (l) {
                            var c = l.props.children,
                                u = a.map(function(t) {
                                    return t === l ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, h.jsx)(i, ty(tb({}, o), {
                                ref: n,
                                children: E.isValidElement(c) ? E.cloneElement(c, void 0, u) : null
                            }))
                        }
                        return (0, h.jsx)(i, ty(tb({}, o), {
                            ref: n,
                            children: r
                        }))
                    })).displayName = "".concat(r, ".Slot"), l),
                    u = E.forwardRef(function(t, r) {
                        var o = t.asChild,
                            a = tg(t, ["asChild"]),
                            i = o ? c : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, h.jsx)(i, ty(tb({}, a), {
                            ref: r
                        }))
                    });
                return u.displayName = "Primitive.".concat(n), ty(tb({}, t), tv({}, n, u))
            }, {});

            function tV(t) {
                var n = E.useRef(t);
                return E.useEffect(function() {
                    n.current = t
                }), E.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(tw(o)))
                    }
                }, [])
            }
            var tG = "focusScope.autoFocusOnMount",
                tK = "focusScope.autoFocusOnUnmount",
                tH = {
                    bubbles: !1,
                    cancelable: !0
                },
                t$ = E.forwardRef(function(t, n) {
                    var r = t.loop,
                        o = void 0 !== r && r,
                        a = t.trapped,
                        i = void 0 !== a && a,
                        l = t.onMountAutoFocus,
                        c = t.onUnmountAutoFocus,
                        u = tg(t, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]),
                        s = tS(E.useState(null), 2),
                        d = s[0],
                        f = s[1],
                        p = tV(l),
                        m = tV(c),
                        v = E.useRef(null),
                        b = function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return E.useCallback(tF.apply(void 0, tw(n)), n)
                        }(n, function(t) {
                            return f(t)
                        }),
                        y = E.useRef({
                            paused: !1,
                            pause: function() {
                                this.paused = !0
                            },
                            resume: function() {
                                this.paused = !1
                            }
                        }).current;
                    E.useEffect(function() {
                        if (i) {
                            var t = function(t) {
                                    if (!y.paused && d) {
                                        var n = t.target;
                                        d.contains(n) ? v.current = n : tZ(v.current, {
                                            select: !0
                                        })
                                    }
                                },
                                n = function(t) {
                                    if (!y.paused && d) {
                                        var n = t.relatedTarget;
                                        null !== n && (d.contains(n) || tZ(v.current, {
                                            select: !0
                                        }))
                                    }
                                };
                            document.addEventListener("focusin", t), document.addEventListener("focusout", n);
                            var r = new MutationObserver(function(t) {
                                var n = !0,
                                    r = !1,
                                    o = void 0;
                                if (document.activeElement === document.body) try {
                                    for (var a, i = t[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) a.value.removedNodes.length > 0 && tZ(d)
                                } catch (t) {
                                    r = !0, o = t
                                } finally {
                                    try {
                                        n || null == i.return || i.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                            });
                            return d && r.observe(d, {
                                    childList: !0,
                                    subtree: !0
                                }),
                                function() {
                                    document.removeEventListener("focusin", t), document.removeEventListener("focusout", n), r.disconnect()
                                }
                        }
                    }, [i, d, y.paused]), E.useEffect(function() {
                        if (d) {
                            tY.add(y);
                            var t = document.activeElement;
                            if (!d.contains(t)) {
                                var n = new CustomEvent(tG, tH);
                                d.addEventListener(tG, p), d.dispatchEvent(n), n.defaultPrevented || (! function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = n.select,
                                        o = void 0 !== r && r,
                                        a = document.activeElement,
                                        i = !0,
                                        l = !1,
                                        c = void 0;
                                    try {
                                        for (var u, s = t[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) {
                                            var d = u.value;
                                            if (tZ(d, {
                                                    select: o
                                                }), document.activeElement !== a) return
                                        }
                                    } catch (t) {
                                        l = !0, c = t
                                    } finally {
                                        try {
                                            i || null == s.return || s.return()
                                        } finally {
                                            if (l) throw c
                                        }
                                    }
                                }(tQ(d).filter(function(t) {
                                    return "A" !== t.tagName
                                }), {
                                    select: !0
                                }), document.activeElement === t && tZ(d))
                            }
                            return function() {
                                d.removeEventListener(tG, p), setTimeout(function() {
                                    var n = new CustomEvent(tK, tH);
                                    d.addEventListener(tK, m), d.dispatchEvent(n), n.defaultPrevented || tZ(null != t ? t : document.body, {
                                        select: !0
                                    }), d.removeEventListener(tK, m), tY.remove(y)
                                }, 0)
                            }
                        }
                    }, [d, p, m, y]);
                    var g = E.useCallback(function(t) {
                        if ((o || i) && !y.paused) {
                            var n = "Tab" === t.key && !t.altKey && !t.ctrlKey && !t.metaKey,
                                r = document.activeElement;
                            if (n && r) {
                                var a, l = t.currentTarget,
                                    c = tS([tX(a = tQ(l), l), tX(a.reverse(), l)], 2),
                                    u = c[0],
                                    s = c[1];
                                u && s ? t.shiftKey || r !== s ? t.shiftKey && r === u && (t.preventDefault(), o && tZ(s, {
                                    select: !0
                                })) : (t.preventDefault(), o && tZ(u, {
                                    select: !0
                                })) : r === l && t.preventDefault()
                            }
                        }
                    }, [o, i, y.paused]);
                    return (0, h.jsx)(tz.div, ty(tb({
                        tabIndex: -1
                    }, u), {
                        ref: b,
                        onKeyDown: g
                    }))
                });

            function tQ(t) {
                for (var n = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: function(t) {
                            var n = "INPUT" === t.tagName && "hidden" === t.type;
                            return t.disabled || t.hidden || n ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    }); r.nextNode();) n.push(r.currentNode);
                return n
            }

            function tX(t, n) {
                var r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, l = t[Symbol.iterator](); !(r = (i = l.next()).done); r = !0) {
                        var c = i.value;
                        if (! function(t, n) {
                                var r = n.upTo;
                                if ("hidden" === getComputedStyle(t).visibility) return !0;
                                for (; t && (void 0 === r || t !== r);) {
                                    if ("none" === getComputedStyle(t).display) return !0;
                                    t = t.parentElement
                                }
                                return !1
                            }(c, {
                                upTo: n
                            })) return c
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        r || null == l.return || l.return()
                    } finally {
                        if (o) throw a
                    }
                }
            }

            function tZ(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.select;
                if (t && t.focus) {
                    var o, a = document.activeElement;
                    t.focus({
                        preventScroll: !0
                    }), t !== a && th(o = t, HTMLInputElement) && "select" in o && void 0 !== r && r && t.select()
                }
            }
            t$.displayName = "FocusScope";
            var tY = (ng = [], {
                add: function(t) {
                    var n = ng[0];
                    t !== n && (null == n || n.pause()), (ng = tJ(ng, t)).unshift(t)
                },
                remove: function(t) {
                    var n;
                    null == (n = (ng = tJ(ng, t))[0]) || n.resume()
                }
            });

            function tJ(t, n) {
                var r = tw(t),
                    o = r.indexOf(n);
                return -1 !== o && r.splice(o, 1), r
            }

            function t0(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }
            var t1 = Symbol("radix.slottable");

            function t2(t) {
                return E.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === t1
            }
            var t8 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                    var r, o, a, i, l, c = (o = r = "Primitive.".concat(n), (a = E.forwardRef(function(t, n) {
                            var r = t.children,
                                o = tg(t, ["children"]);
                            if (E.isValidElement(r)) {
                                var a, i, l, c = (l = null == (a = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : a.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                    u = function(t, n) {
                                        var r = tb({}, n);
                                        for (var o in n) ! function(o) {
                                            var a = t[o],
                                                i = n[o];
                                            /^on[A-Z]/.test(o) ? a && i ? r[o] = function() {
                                                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                i.apply(void 0, tw(n)), a.apply(void 0, tw(n))
                                            } : a && (r[o] = a) : "style" === o ? r[o] = tb({}, a, i) : "className" === o && (r[o] = [a, i].filter(Boolean).join(" "))
                                        }(o);
                                        return tb({}, t, r)
                                    }(o, r.props);
                                return r.type !== E.Fragment && (u.ref = n ? function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return function(t) {
                                        var r = !1,
                                            o = n.map(function(n) {
                                                var o = t0(n, t);
                                                return r || "function" != typeof o || (r = !0), o
                                            });
                                        if (r) return function() {
                                            for (var t = 0; t < o.length; t++) {
                                                var r = o[t];
                                                "function" == typeof r ? r() : t0(n[t], null)
                                            }
                                        }
                                    }
                                }(n, c) : c), E.cloneElement(r, u)
                            }
                            return E.Children.count(r) > 1 ? E.Children.only(null) : null
                        })).displayName = "".concat(o, ".SlotClone"), i = a, (l = E.forwardRef(function(t, n) {
                            var r = t.children,
                                o = tg(t, ["children"]),
                                a = E.Children.toArray(r),
                                l = a.find(t2);
                            if (l) {
                                var c = l.props.children,
                                    u = a.map(function(t) {
                                        return t === l ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : t
                                    });
                                return (0, h.jsx)(i, ty(tb({}, o), {
                                    ref: n,
                                    children: E.isValidElement(c) ? E.cloneElement(c, void 0, u) : null
                                }))
                            }
                            return (0, h.jsx)(i, ty(tb({}, o), {
                                ref: n,
                                children: r
                            }))
                        })).displayName = "".concat(r, ".Slot"), l),
                        u = E.forwardRef(function(t, r) {
                            var o = t.asChild,
                                a = tg(t, ["asChild"]),
                                i = o ? c : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, h.jsx)(i, ty(tb({}, a), {
                                ref: r
                            }))
                        });
                    return u.displayName = "Primitive.".concat(n), ty(tb({}, t), tv({}, n, u))
                }, {}),
                t5 = (null == (tP = globalThis) ? void 0 : tP.document) ? E.useLayoutEffect : function() {},
                t3 = E.forwardRef(function(t, n) {
                    var r, o, a = t.container,
                        i = tg(t, ["container"]),
                        l = tS(E.useState(!1), 2),
                        c = l[0],
                        u = l[1];
                    t5(function() {
                        return u(!0)
                    }, []);
                    var s = a || c && (null == (o = globalThis) || null == (r = o.document) ? void 0 : r.body);
                    return s ? tp().createPortal((0, h.jsx)(t8.div, ty(tb({}, i), {
                        ref: n
                    })), s) : null
                });
            t3.displayName = "Portal";
            var t6 = 0;

            function t4() {
                var t = document.createElement("span");
                return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t
            }
            var t7 = "right-scroll-bar-position",
                t9 = "width-before-scroll-bar";

            function ne(t, n) {
                return "function" == typeof t ? t(n) : t && (t.current = n), t
            }
            var nt = "undefined" != typeof window ? E.useLayoutEffect : E.useEffect,
                nn = new WeakMap,
                nr = function(t) {
                    var n = t.sideCar,
                        r = e5(t, ["sideCar"]);
                    if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                    var o = n.read();
                    if (!o) throw Error("Sidecar medium not found");
                    return E.createElement(o, e8({}, r))
                };
            nr.isSideCarExport = !0;
            var no = (void 0 === nS && (nS = {}), (void 0 === nw && (nw = function(t) {
                    return t
                }), nx = [], nE = !1, nj = {
                    read: function() {
                        if (nE) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return nx.length ? nx[nx.length - 1] : null
                    },
                    useMedium: function(t) {
                        var n = nw(t, nE);
                        return nx.push(n),
                            function() {
                                nx = nx.filter(function(t) {
                                    return t !== n
                                })
                            }
                    },
                    assignSyncMedium: function(t) {
                        for (nE = !0; nx.length;) {
                            var n = nx;
                            nx = [], n.forEach(t)
                        }
                        nx = {
                            push: function(n) {
                                return t(n)
                            },
                            filter: function() {
                                return nx
                            }
                        }
                    },
                    assignMedium: function(t) {
                        nE = !0;
                        var n = [];
                        if (nx.length) {
                            var r = nx;
                            nx = [], r.forEach(t), n = nx
                        }
                        var o = function() {
                                var r = n;
                                n = [], r.forEach(t)
                            },
                            a = function() {
                                return Promise.resolve().then(o)
                            };
                        a(), nx = {
                            push: function(t) {
                                n.push(t), a()
                            },
                            filter: function(t) {
                                return n = n.filter(t), nx
                            }
                        }
                    }
                }).options = e8({
                    async: !0,
                    ssr: !1
                }, nS), nj),
                na = function() {},
                ni = E.forwardRef(function(t, n) {
                    var r, o, a, i, l = E.useRef(null),
                        c = E.useState({
                            onScrollCapture: na,
                            onWheelCapture: na,
                            onTouchMoveCapture: na
                        }),
                        u = c[0],
                        s = c[1],
                        d = t.forwardProps,
                        f = t.children,
                        p = t.className,
                        m = t.removeScrollBar,
                        v = t.enabled,
                        h = t.shards,
                        b = t.sideCar,
                        y = t.noIsolation,
                        g = t.inert,
                        S = t.allowPinchZoom,
                        w = t.as,
                        x = t.gapMode,
                        j = e5(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        C = (r = [l, n], o = function(t) {
                            return r.forEach(function(n) {
                                return ne(n, t)
                            })
                        }, (a = (0, E.useState)(function() {
                            return {
                                value: null,
                                callback: o,
                                facade: {
                                    get current() {
                                        return a.value
                                    },
                                    set current(e) {
                                        var t = a.value;
                                        t !== e && (a.value = e, a.callback(e, t))
                                    }
                                }
                            }
                        })[0]).callback = o, i = a.facade, nt(function() {
                            var t = nn.get(i);
                            if (t) {
                                var n = new Set(t),
                                    o = new Set(r),
                                    a = i.current;
                                n.forEach(function(t) {
                                    o.has(t) || ne(t, null)
                                }), o.forEach(function(t) {
                                    n.has(t) || ne(t, a)
                                })
                            }
                            nn.set(i, r)
                        }, [r]), i),
                        A = e8(e8({}, j), u);
                    return E.createElement(E.Fragment, null, v && E.createElement(b, {
                        sideCar: no,
                        removeScrollBar: m,
                        shards: h,
                        noIsolation: y,
                        inert: g,
                        setCallbacks: s,
                        allowPinchZoom: !!S,
                        lockRef: l,
                        gapMode: x
                    }), d ? E.cloneElement(E.Children.only(f), e8(e8({}, A), {
                        ref: C
                    })) : E.createElement(void 0 === w ? "div" : w, e8({}, A, {
                        className: p,
                        ref: C
                    }), f))
                });
            ni.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, ni.classNames = {
                fullWidth: t9,
                zeroRight: t7
            };
            var nl = function() {
                    var t = 0,
                        n = null;
                    return {
                        add: function(o) {
                            var a, i;
                            0 == t && (n = function() {
                                if (!document) return null;
                                var t = document.createElement("style");
                                t.type = "text/css";
                                var n = r.nc;
                                return n && t.setAttribute("nonce", n), t
                            }()) && ((a = n).styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o)), i = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)), t++
                        },
                        remove: function() {
                            --t || !n || (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                nc = function() {
                    var t, n = (t = nl(), function(n, r) {
                        E.useEffect(function() {
                            return t.add(n),
                                function() {
                                    t.remove()
                                }
                        }, [n && r])
                    });
                    return function(t) {
                        return n(t.styles, t.dynamic), null
                    }
                },
                nu = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                ns = function(t) {
                    return parseInt(t || "", 10) || 0
                },
                nd = function(t) {
                    if (void 0 === t && (t = "margin"), "undefined" == typeof window) return nu;
                    var n, r, o, a, i, l = (n = t, o = (r = window.getComputedStyle(document.body))["padding" === n ? "paddingLeft" : "marginLeft"], a = r["padding" === n ? "paddingTop" : "marginTop"], i = r["padding" === n ? "paddingRight" : "marginRight"], [ns(o), ns(a), ns(i)]),
                        c = document.documentElement.clientWidth,
                        u = window.innerWidth;
                    return {
                        left: l[0],
                        top: l[1],
                        right: l[2],
                        gap: Math.max(0, u - c + l[2] - l[0])
                    }
                },
                nf = nc(),
                np = "data-scroll-locked",
                nm = function(t, n, r, o) {
                    var a = t.left,
                        i = t.top,
                        l = t.right,
                        c = t.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(o, ";\n   padding-right: ").concat(c, "px ").concat(o, ";\n  }\n  body[").concat(np, "] {\n    overflow: hidden ").concat(o, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(o, ";"), "margin" === r && "\n    padding-left: ".concat(a, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(o, ";\n    "), "padding" === r && "padding-right: ".concat(c, "px ").concat(o, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(t7, " {\n    right: ").concat(c, "px ").concat(o, ";\n  }\n  \n  .").concat(t9, " {\n    margin-right: ").concat(c, "px ").concat(o, ";\n  }\n  \n  .").concat(t7, " .").concat(t7, " {\n    right: 0 ").concat(o, ";\n  }\n  \n  .").concat(t9, " .").concat(t9, " {\n    margin-right: 0 ").concat(o, ";\n  }\n  \n  body[").concat(np, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
                },
                nv = function() {
                    var t = parseInt(document.body.getAttribute(np) || "0", 10);
                    return isFinite(t) ? t : 0
                },
                nh = function(t) {
                    var n = t.noRelative,
                        r = t.noImportant,
                        o = t.gapMode,
                        a = void 0 === o ? "margin" : o;
                    E.useEffect(function() {
                        return document.body.setAttribute(np, (nv() + 1).toString()),
                            function() {
                                var t = nv() - 1;
                                t <= 0 ? document.body.removeAttribute(np) : document.body.setAttribute(np, t.toString())
                            }
                    }, []);
                    var i = E.useMemo(function() {
                        return nd(a)
                    }, [a]);
                    return E.createElement(nf, {
                        styles: nm(i, !n, a, r ? "" : "!important")
                    })
                },
                nb = !1;
            if ("undefined" != typeof window) try {
                var ny = Object.defineProperty({}, "passive", {
                    get: function() {
                        return nb = !0, !0
                    }
                });
                window.addEventListener("test", ny, ny), window.removeEventListener("test", ny, ny)
            } catch (t) {
                nb = !1
            }
            var ng, nS, nw, nx, nE, nj, nC, nA = !!nb && {
                    passive: !1
                },
                nO = function(t, n) {
                    if (!th(t, Element)) return !1;
                    var r = window.getComputedStyle(t);
                    return "hidden" !== r[n] && (r.overflowY !== r.overflowX || "TEXTAREA" === t.tagName || "visible" !== r[n])
                },
                nN = function(t, n) {
                    var r = n.ownerDocument,
                        o = n;
                    do {
                        if ("undefined" != typeof ShadowRoot && th(o, ShadowRoot) && (o = o.host), nI(t, o)) {
                            var a = nR(t, o);
                            if (a[1] > a[2]) return !0
                        }
                        o = o.parentNode
                    } while (o && o !== r.body);
                    return !1
                },
                nI = function(t, n) {
                    return "v" === t ? nO(n, "overflowY") : nO(n, "overflowX")
                },
                nR = function(t, n) {
                    return "v" === t ? [n.scrollTop, n.scrollHeight, n.clientHeight] : [n.scrollLeft, n.scrollWidth, n.clientWidth]
                },
                nT = function(t, n, r, o, a) {
                    var i, l = (i = window.getComputedStyle(n).direction, "h" === t && "rtl" === i ? -1 : 1),
                        c = l * o,
                        u = r.target,
                        s = n.contains(u),
                        d = !1,
                        f = c > 0,
                        p = 0,
                        m = 0;
                    do {
                        var v = nR(t, u),
                            h = v[0],
                            b = v[1] - v[2] - l * h;
                        (h || b) && nI(t, u) && (p += b, m += h), u = th(u, ShadowRoot) ? u.host : u.parentNode
                    } while (!s && u !== document.body || s && (n.contains(u) || n === u));
                    return (f && (a && 1 > Math.abs(p) || !a && c > p) || !f && (a && 1 > Math.abs(m) || !a && -c > m)) && (d = !0), d
                },
                nP = function(t) {
                    return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
                },
                nk = function(t) {
                    return [t.deltaX, t.deltaY]
                },
                nL = function(t) {
                    return t && "current" in t ? t.current : t
                },
                nU = 0,
                nD = [],
                nM = (nC = function(t) {
                    var n = E.useRef([]),
                        r = E.useRef([0, 0]),
                        o = E.useRef(),
                        a = E.useState(nU++)[0],
                        i = E.useState(nc)[0],
                        l = E.useRef(t);
                    E.useEffect(function() {
                        l.current = t
                    }, [t]), E.useEffect(function() {
                        if (t.inert) {
                            document.body.classList.add("block-interactivity-".concat(a));
                            var n = (function(t, n, r) {
                                if (r || 2 == arguments.length)
                                    for (var o, a = 0, i = n.length; a < i; a++) !o && a in n || (o || (o = Array.prototype.slice.call(n, 0, a)), o[a] = n[a]);
                                return t.concat(o || Array.prototype.slice.call(n))
                            })([t.lockRef.current], (t.shards || []).map(nL), !0).filter(Boolean);
                            return n.forEach(function(t) {
                                    return t.classList.add("allow-interactivity-".concat(a))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(a)), n.forEach(function(t) {
                                        return t.classList.remove("allow-interactivity-".concat(a))
                                    })
                                }
                        }
                    }, [t.inert, t.lockRef.current, t.shards]);
                    var c = E.useCallback(function(t, n) {
                            if ("touches" in t && 2 === t.touches.length || "wheel" === t.type && t.ctrlKey) return !l.current.allowPinchZoom;
                            var a, i = nP(t),
                                c = r.current,
                                u = "deltaX" in t ? t.deltaX : c[0] - i[0],
                                s = "deltaY" in t ? t.deltaY : c[1] - i[1],
                                d = t.target,
                                f = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in t && "h" === f && "range" === d.type) return !1;
                            var p = nN(f, d);
                            if (!p) return !0;
                            if (p ? a = f : (a = "v" === f ? "h" : "v", p = nN(f, d)), !p) return !1;
                            if (!o.current && "changedTouches" in t && (u || s) && (o.current = a), !a) return !0;
                            var m = o.current || a;
                            return nT(m, n, t, "h" === m ? u : s, !0)
                        }, []),
                        u = E.useCallback(function(t) {
                            if (nD.length && nD[nD.length - 1] === i) {
                                var r = "deltaY" in t ? nk(t) : nP(t),
                                    o = n.current.filter(function(n) {
                                        var o;
                                        return n.name === t.type && (n.target === t.target || t.target === n.shadowParent) && (o = n.delta, o[0] === r[0] && o[1] === r[1])
                                    })[0];
                                if (o && o.should) t.cancelable && t.preventDefault();
                                else if (!o) {
                                    var a = (l.current.shards || []).map(nL).filter(Boolean).filter(function(n) {
                                        return n.contains(t.target)
                                    });
                                    (a.length > 0 ? c(t, a[0]) : !l.current.noIsolation) && t.cancelable && t.preventDefault()
                                }
                            }
                        }, []),
                        s = E.useCallback(function(t, r, o, a) {
                            var i = {
                                name: t,
                                delta: r,
                                target: o,
                                should: a,
                                shadowParent: function(t) {
                                    for (var n = null; null !== t;) th(t, ShadowRoot) && (n = t.host, t = t.host), t = t.parentNode;
                                    return n
                                }(o)
                            };
                            n.current.push(i), setTimeout(function() {
                                n.current = n.current.filter(function(t) {
                                    return t !== i
                                })
                            }, 1)
                        }, []),
                        d = E.useCallback(function(t) {
                            r.current = nP(t), o.current = void 0
                        }, []),
                        f = E.useCallback(function(n) {
                            s(n.type, nk(n), n.target, c(n, t.lockRef.current))
                        }, []),
                        p = E.useCallback(function(n) {
                            s(n.type, nP(n), n.target, c(n, t.lockRef.current))
                        }, []);
                    E.useEffect(function() {
                        return nD.push(i), t.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", u, nA), document.addEventListener("touchmove", u, nA), document.addEventListener("touchstart", d, nA),
                            function() {
                                nD = nD.filter(function(t) {
                                    return t !== i
                                }), document.removeEventListener("wheel", u, nA), document.removeEventListener("touchmove", u, nA), document.removeEventListener("touchstart", d, nA)
                            }
                    }, []);
                    var m = t.removeScrollBar,
                        v = t.inert;
                    return E.createElement(E.Fragment, null, v ? E.createElement(i, {
                        styles: "\n  .block-interactivity-".concat(a, " {pointer-events: none;}\n  .allow-interactivity-").concat(a, " {pointer-events: all;}\n")
                    }) : null, m ? E.createElement(nh, {
                        gapMode: t.gapMode
                    }) : null)
                }, no.useMedium(nC), nr),
                n_ = E.forwardRef(function(t, n) {
                    return E.createElement(ni, e8({}, t, {
                        ref: n,
                        sideCar: nM
                    }))
                });
            n_.classNames = ni.classNames;
            var nB = new WeakMap,
                nF = new WeakMap,
                nq = {},
                nW = 0,
                nz = function(t) {
                    return t && (t.host || nz(t.parentNode))
                },
                nV = function(t, n, r, o) {
                    var a = (Array.isArray(t) ? t : [t]).map(function(t) {
                        if (n.contains(t)) return t;
                        var r = nz(t);
                        return r && n.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", n, ". Doing nothing"), null)
                    }).filter(function(t) {
                        return !!t
                    });
                    nq[r] || (nq[r] = new WeakMap);
                    var i = nq[r],
                        l = [],
                        c = new Set,
                        u = new Set(a),
                        s = function(t) {
                            t && !c.has(t) && (c.add(t), s(t.parentNode))
                        };
                    a.forEach(s);
                    var d = function(t) {
                        t && !u.has(t) && Array.prototype.forEach.call(t.children, function(t) {
                            if (c.has(t)) d(t);
                            else try {
                                var n = t.getAttribute(o),
                                    a = null !== n && "false" !== n,
                                    u = (nB.get(t) || 0) + 1,
                                    s = (i.get(t) || 0) + 1;
                                nB.set(t, u), i.set(t, s), l.push(t), 1 === u && a && nF.set(t, !0), 1 === s && t.setAttribute(r, "true"), a || t.setAttribute(o, "true")
                            } catch (n) {
                                console.error("aria-hidden: cannot operate on ", t, n)
                            }
                        })
                    };
                    return d(n), c.clear(), nW++,
                        function() {
                            l.forEach(function(t) {
                                var n = nB.get(t) - 1,
                                    a = i.get(t) - 1;
                                nB.set(t, n), i.set(t, a), n || (nF.has(t) || t.removeAttribute(o), nF.delete(t)), a || t.removeAttribute(r)
                            }), --nW || (nB = new WeakMap, nB = new WeakMap, nF = new WeakMap, nq = {})
                        }
                },
                nG = function(t, n, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var o = Array.from(Array.isArray(t) ? t : [t]),
                        a = n || ("undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body);
                    return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), nV(o, a, r, "aria-hidden")) : function() {
                        return null
                    }
                };

            function nK(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function nH(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function n$(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        nH(t, n, r[n])
                    })
                }
                return t
            }

            function nQ(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, o)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function nX(t, n) {
                if (null == t) return {};
                var r, o, a = function(t, n) {
                    if (null == t) return {};
                    var r, o, a = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (a[r] = t[r]);
                    return a
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
                }
                return a
            }

            function nZ(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || nJ(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nY(t) {
                return function(t) {
                    if (Array.isArray(t)) return nK(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || nJ(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nJ(t, n) {
                if (t) {
                    if ("string" == typeof t) return nK(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nK(t, n)
                }
            }

            function n0(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = r.checkForDefaultPrevented,
                    a = void 0 === o || o;
                return function(r) {
                    if (null == t || t(r), !1 === a || !r.defaultPrevented) return null == n ? void 0 : n(r)
                }
            }

            function n1(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function n2() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        o = n.map(function(n) {
                            var o = n1(n, t);
                            return r || "function" != typeof o || (r = !0), o
                        });
                    if (r) return function() {
                        for (var t = 0; t < o.length; t++) {
                            var r = o[t];
                            "function" == typeof r ? r() : n1(n[t], null)
                        }
                    }
                }
            }

            function n8() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return E.useCallback(n2.apply(void 0, nY(n)), n)
            }

            function n5() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var o = n[0];
                if (1 === n.length) return o;
                var a = function() {
                    var t = n.map(function(t) {
                        return {
                            useScope: t(),
                            scopeName: t.scopeName
                        }
                    });
                    return function(n) {
                        var r = t.reduce(function(t, r) {
                            var o = r.useScope,
                                a = r.scopeName;
                            return n$({}, t, o(n)["__scope".concat(a)])
                        }, {});
                        return E.useMemo(function() {
                            return nH({}, "__scope".concat(o.scopeName), r)
                        }, [r])
                    }
                };
                return a.scopeName = o.scopeName, a
            }

            function n3(t) {
                var n = E.useRef(t);
                return E.useEffect(function() {
                    n.current = t
                }), E.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(nY(o)))
                    }
                }, [])
            }
            var n6 = (null == (m = globalThis) ? void 0 : m.document) ? E.useLayoutEffect : function() {},
                n4 = function(t) {
                    var n, r, o, a, i, l, c, u, s, d, f, p, m, v, h = t.present,
                        b = t.children,
                        y = (a = (o = nZ(E.useState(), 2))[0], i = o[1], l = E.useRef({}), c = E.useRef(h), u = E.useRef("none"), d = (s = nZ((n = h ? "mounted" : "unmounted", r = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, E.useReducer(function(t, n) {
                            var o;
                            return null != (o = r[t][n]) ? o : t
                        }, n)), 2))[0], f = s[1], E.useEffect(function() {
                            var t = n7(l.current);
                            u.current = "mounted" === d ? t : "none"
                        }, [d]), n6(function() {
                            var t = l.current,
                                n = c.current;
                            if (n !== h) {
                                var r = u.current,
                                    o = n7(t);
                                h ? f("MOUNT") : "none" === o || "none" === (null == t ? void 0 : t.display) ? f("UNMOUNT") : f(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), c.current = h
                            }
                        }, [h, f]), n6(function() {
                            if (a) {
                                var t, n, r = null != (n = a.ownerDocument.defaultView) ? n : window,
                                    o = function(n) {
                                        var o = n7(l.current).includes(n.animationName);
                                        if (n.target === a && o && (f("ANIMATION_END"), !c.current)) {
                                            var i = a.style.animationFillMode;
                                            a.style.animationFillMode = "forwards", t = r.setTimeout(function() {
                                                "forwards" === a.style.animationFillMode && (a.style.animationFillMode = i)
                                            })
                                        }
                                    },
                                    i = function(t) {
                                        t.target === a && (u.current = n7(l.current))
                                    };
                                return a.addEventListener("animationstart", i), a.addEventListener("animationcancel", o), a.addEventListener("animationend", o),
                                    function() {
                                        r.clearTimeout(t), a.removeEventListener("animationstart", i), a.removeEventListener("animationcancel", o), a.removeEventListener("animationend", o)
                                    }
                            }
                            f("ANIMATION_END")
                        }, [a, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(d),
                            ref: E.useCallback(function(t) {
                                t && (l.current = getComputedStyle(t)), i(t)
                            }, [])
                        }),
                        g = "function" == typeof b ? b({
                            present: y.isPresent
                        }) : E.Children.only(b),
                        S = n8(y.ref, (v = null == (p = Object.getOwnPropertyDescriptor(g.props, "ref")) ? void 0 : p.get) && "isReactWarning" in v && v.isReactWarning ? g.ref : (v = null == (m = Object.getOwnPropertyDescriptor(g, "ref")) ? void 0 : m.get) && "isReactWarning" in v && v.isReactWarning ? g.props.ref : g.props.ref || g.ref);
                    return "function" == typeof b || y.isPresent ? E.cloneElement(g, {
                        ref: S
                    }) : null
                };

            function n7(t) {
                return (null == t ? void 0 : t.animationName) || "none"
            }

            function n9(t) {
                var n, r, o = (n = t, (r = E.forwardRef(function(t, n) {
                        var r = t.children,
                            o = nX(t, ["children"]);
                        if (E.isValidElement(r)) {
                            var a, i, l, c = (l = null == (a = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : a.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                u = function(t, n) {
                                    var r = n$({}, n);
                                    for (var o in n) ! function(o) {
                                        var a = t[o],
                                            i = n[o];
                                        /^on[A-Z]/.test(o) ? a && i ? r[o] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, nY(n)), a.apply(void 0, nY(n))
                                        } : a && (r[o] = a) : "style" === o ? r[o] = n$({}, a, i) : "className" === o && (r[o] = [a, i].filter(Boolean).join(" "))
                                    }(o);
                                    return n$({}, t, r)
                                }(o, r.props);
                            return r.type !== E.Fragment && (u.ref = n ? n2(n, c) : c), E.cloneElement(r, u)
                        }
                        return E.Children.count(r) > 1 ? E.Children.only(null) : null
                    })).displayName = "".concat(n, ".SlotClone"), r),
                    a = E.forwardRef(function(t, n) {
                        var r = t.children,
                            a = nX(t, ["children"]),
                            i = E.Children.toArray(r),
                            l = i.find(rt);
                        if (l) {
                            var c = l.props.children,
                                u = i.map(function(t) {
                                    return t === l ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, h.jsx)(o, nQ(n$({}, a), {
                                ref: n,
                                children: E.isValidElement(c) ? E.cloneElement(c, void 0, u) : null
                            }))
                        }
                        return (0, h.jsx)(o, nQ(n$({}, a), {
                            ref: n,
                            children: r
                        }))
                    });
                return a.displayName = "".concat(t, ".Slot"), a
            }
            n4.displayName = "Presence";
            var re = Symbol("radix.slottable");

            function rt(t) {
                return E.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === re
            }
            var rn = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                    var r = n9("Primitive.".concat(n)),
                        o = E.forwardRef(function(t, o) {
                            var a = t.asChild,
                                i = nX(t, ["asChild"]),
                                l = a ? r : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, h.jsx)(l, nQ(n$({}, i), {
                                ref: o
                            }))
                        });
                    return o.displayName = "Primitive.".concat(n), nQ(n$({}, t), nH({}, n, o))
                }, {}),
                rr = "Dialog",
                ro = nZ(function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = [],
                        o = function() {
                            var n = r.map(function(t) {
                                return E.createContext(t)
                            });
                            return function(r) {
                                var o = (null == r ? void 0 : r[t]) || n;
                                return E.useMemo(function() {
                                    return nH({}, "__scope".concat(t), nQ(n$({}, r), nH({}, t, o)))
                                }, [r, o])
                            }
                        };
                    return o.scopeName = t, [function(n, o) {
                        var a = E.createContext(o),
                            i = r.length;
                        r = nY(r).concat([o]);
                        var l = function(n) {
                            var r, o = n.scope,
                                l = n.children,
                                c = nX(n, ["scope", "children"]),
                                u = (null == o || null == (r = o[t]) ? void 0 : r[i]) || a,
                                s = E.useMemo(function() {
                                    return c
                                }, Object.values(c));
                            return (0, h.jsx)(u.Provider, {
                                value: s,
                                children: l
                            })
                        };
                        return l.displayName = n + "Provider", [l, function(r, l) {
                            var c, u = (null == l || null == (c = l[t]) ? void 0 : c[i]) || a,
                                s = E.useContext(u);
                            if (s) return s;
                            if (void 0 !== o) return o;
                            throw Error("`".concat(r, "` must be used within `").concat(n, "`"))
                        }]
                    }, n5.apply(void 0, [o].concat(nY(n)))]
                }(rr), 2),
                ra = ro[0],
                ri = (ro[1], nZ(ra(rr), 2)),
                rl = ri[0],
                rc = ri[1],
                ru = function(t) {
                    var n, r, o, a, i, l, c, u, s, d, f, p, m, v, b, y, g, S = t.__scopeDialog,
                        w = t.children,
                        x = t.open,
                        j = t.defaultOpen,
                        C = t.onOpenChange,
                        A = t.modal,
                        O = E.useRef(null),
                        N = E.useRef(null),
                        I = nZ((r = (n = {
                            prop: x,
                            defaultProp: j,
                            onChange: C
                        }).prop, m = (p = nZ((l = (i = {
                            defaultProp: n.defaultProp,
                            onChange: a = void 0 === (o = n.onChange) ? function() {} : o
                        }).defaultProp, c = i.onChange, s = nZ(u = E.useState(l), 1)[0], d = E.useRef(s), f = n3(c), E.useEffect(function() {
                            d.current !== s && (f(s), d.current = s)
                        }, [s, d, f]), u), 2))[0], v = p[1], y = (b = void 0 !== r) ? r : m, g = n3(a), [y, E.useCallback(function(t) {
                            if (b) {
                                var n = "function" == typeof t ? t(r) : t;
                                n !== r && g(n)
                            } else v(t)
                        }, [b, r, v, g])]), 2),
                        R = I[0],
                        T = I[1];
                    return (0, h.jsx)(rl, {
                        scope: S,
                        triggerRef: O,
                        contentRef: N,
                        contentId: td(),
                        titleId: td(),
                        descriptionId: td(),
                        open: void 0 !== R && R,
                        onOpenChange: T,
                        onOpenToggle: E.useCallback(function() {
                            return T(function(t) {
                                return !t
                            })
                        }, [T]),
                        modal: void 0 === A || A,
                        children: w
                    })
                };
            ru.displayName = rr;
            var rs = "DialogTrigger";
            E.forwardRef(function(t, n) {
                var r = t.__scopeDialog,
                    o = nX(t, ["__scopeDialog"]),
                    a = rc(rs, r),
                    i = n8(n, a.triggerRef);
                return (0, h.jsx)(rn.button, nQ(n$({
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": a.open,
                    "aria-controls": a.contentId,
                    "data-state": rR(a.open)
                }, o), {
                    ref: i,
                    onClick: n0(t.onClick, a.onOpenToggle)
                }))
            }).displayName = rs;
            var rd = "DialogPortal",
                rf = nZ(ra(rd, {
                    forceMount: void 0
                }), 2),
                rp = rf[0],
                rm = rf[1],
                rv = function(t) {
                    var n = t.__scopeDialog,
                        r = t.forceMount,
                        o = t.children,
                        a = t.container,
                        i = rc(rd, n);
                    return (0, h.jsx)(rp, {
                        scope: n,
                        forceMount: r,
                        children: E.Children.map(o, function(t) {
                            return (0, h.jsx)(n4, {
                                present: r || i.open,
                                children: (0, h.jsx)(t3, {
                                    asChild: !0,
                                    container: a,
                                    children: t
                                })
                            })
                        })
                    })
                };
            rv.displayName = rd;
            var rh = "DialogOverlay",
                rb = E.forwardRef(function(t, n) {
                    var r = rm(rh, t.__scopeDialog),
                        o = t.forceMount,
                        a = void 0 === o ? r.forceMount : o,
                        i = nX(t, ["forceMount"]),
                        l = rc(rh, t.__scopeDialog);
                    return l.modal ? (0, h.jsx)(n4, {
                        present: a || l.open,
                        children: (0, h.jsx)(rg, nQ(n$({}, i), {
                            ref: n
                        }))
                    }) : null
                });
            rb.displayName = rh;
            var ry = n9("DialogOverlay.RemoveScroll"),
                rg = E.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        o = nX(t, ["__scopeDialog"]),
                        a = rc(rh, r);
                    return (0, h.jsx)(n_, {
                        as: ry,
                        allowPinchZoom: !0,
                        shards: [a.contentRef],
                        children: (0, h.jsx)(rn.div, nQ(n$({
                            "data-state": rR(a.open)
                        }, o), {
                            ref: n,
                            style: n$({
                                pointerEvents: "auto"
                            }, o.style)
                        }))
                    })
                }),
                rS = "DialogContent",
                rw = E.forwardRef(function(t, n) {
                    var r = rm(rS, t.__scopeDialog),
                        o = t.forceMount,
                        a = void 0 === o ? r.forceMount : o,
                        i = nX(t, ["forceMount"]),
                        l = rc(rS, t.__scopeDialog);
                    return (0, h.jsx)(n4, {
                        present: a || l.open,
                        children: l.modal ? (0, h.jsx)(rx, nQ(n$({}, i), {
                            ref: n
                        })) : (0, h.jsx)(rE, nQ(n$({}, i), {
                            ref: n
                        }))
                    })
                });
            rw.displayName = rS;
            var rx = E.forwardRef(function(t, n) {
                    var r = rc(rS, t.__scopeDialog),
                        o = E.useRef(null),
                        a = n8(n, r.contentRef, o);
                    return E.useEffect(function() {
                        var t = o.current;
                        if (t) return nG(t)
                    }, []), (0, h.jsx)(rj, nQ(n$({}, t), {
                        ref: a,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: n0(t.onCloseAutoFocus, function(t) {
                            var n;
                            t.preventDefault(), null == (n = r.triggerRef.current) || n.focus()
                        }),
                        onPointerDownOutside: n0(t.onPointerDownOutside, function(t) {
                            var n = t.detail.originalEvent,
                                r = 0 === n.button && !0 === n.ctrlKey;
                            (2 === n.button || r) && t.preventDefault()
                        }),
                        onFocusOutside: n0(t.onFocusOutside, function(t) {
                            return t.preventDefault()
                        })
                    }))
                }),
                rE = E.forwardRef(function(t, n) {
                    var r = rc(rS, t.__scopeDialog),
                        o = E.useRef(!1),
                        a = E.useRef(!1);
                    return (0, h.jsx)(rj, nQ(n$({}, t), {
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: function(n) {
                            var i, l;
                            null == (i = t.onCloseAutoFocus) || i.call(t, n), n.defaultPrevented || (o.current || null == (l = r.triggerRef.current) || l.focus(), n.preventDefault()), o.current = !1, a.current = !1
                        },
                        onInteractOutside: function(n) {
                            null == (i = t.onInteractOutside) || i.call(t, n), n.defaultPrevented || (o.current = !0, "pointerdown" === n.detail.originalEvent.type && (a.current = !0));
                            var i, l, c = n.target;
                            (null == (l = r.triggerRef.current) ? void 0 : l.contains(c)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && a.current && n.preventDefault()
                        }
                    }))
                }),
                rj = E.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        o = t.trapFocus,
                        a = t.onOpenAutoFocus,
                        i = t.onCloseAutoFocus,
                        l = nX(t, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]),
                        c = rc(rS, r),
                        u = E.useRef(null),
                        s = n8(n, u);
                    return E.useEffect(function() {
                        var t, n, r = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null != (t = r[0]) ? t : t4()), document.body.insertAdjacentElement("beforeend", null != (n = r[1]) ? n : t4()), t6++,
                            function() {
                                1 === t6 && document.querySelectorAll("[data-radix-focus-guard]").forEach(function(t) {
                                    return t.remove()
                                }), t6--
                            }
                    }, []), (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(t$, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: a,
                            onUnmountAutoFocus: i,
                            children: (0, h.jsx)(tD, nQ(n$({
                                role: "dialog",
                                id: c.contentId,
                                "aria-describedby": c.descriptionId,
                                "aria-labelledby": c.titleId,
                                "data-state": rR(c.open)
                            }, l), {
                                ref: s,
                                onDismiss: function() {
                                    return c.onOpenChange(!1)
                                }
                            }))
                        }), (0, h.jsxs)(h.Fragment, {
                            children: [(0, h.jsx)(rL, {
                                titleId: c.titleId
                            }), (0, h.jsx)(rU, {
                                contentRef: u,
                                descriptionId: c.descriptionId
                            })]
                        })]
                    })
                }),
                rC = "DialogTitle",
                rA = E.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        o = nX(t, ["__scopeDialog"]),
                        a = rc(rC, r);
                    return (0, h.jsx)(rn.h2, nQ(n$({
                        id: a.titleId
                    }, o), {
                        ref: n
                    }))
                });
            rA.displayName = rC;
            var rO = "DialogDescription";
            E.forwardRef(function(t, n) {
                var r = t.__scopeDialog,
                    o = nX(t, ["__scopeDialog"]),
                    a = rc(rO, r);
                return (0, h.jsx)(rn.p, nQ(n$({
                    id: a.descriptionId
                }, o), {
                    ref: n
                }))
            }).displayName = rO;
            var rN = "DialogClose",
                rI = E.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        o = nX(t, ["__scopeDialog"]),
                        a = rc(rN, r);
                    return (0, h.jsx)(rn.button, nQ(n$({
                        type: "button"
                    }, o), {
                        ref: n,
                        onClick: n0(t.onClick, function() {
                            return a.onOpenChange(!1)
                        })
                    }))
                });

            function rR(t) {
                return t ? "open" : "closed"
            }
            rI.displayName = rN;
            var rT = "DialogTitleWarning",
                rP = nZ((o = {
                    contentName: rS,
                    titleName: rC,
                    docsSlug: "dialog"
                }, a = E.createContext(o), (i = function(t) {
                    var n = t.children,
                        r = nX(t, ["children"]),
                        o = E.useMemo(function() {
                            return r
                        }, Object.values(r));
                    return (0, h.jsx)(a.Provider, {
                        value: o,
                        children: n
                    })
                }).displayName = rT + "Provider", [i, function(t) {
                    var n = E.useContext(a);
                    if (n) return n;
                    if (void 0 !== o) return o;
                    throw Error("`".concat(t, "` must be used within `").concat(rT, "`"))
                }]), 2),
                rk = (rP[0], rP[1]),
                rL = function(t) {
                    var n = t.titleId,
                        r = rk(rT),
                        o = "`".concat(r.contentName, "` requires a `").concat(r.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);
                    return E.useEffect(function() {
                        n && (document.getElementById(n) || console.error(o))
                    }, [o, n]), null
                },
                rU = function(t) {
                    var n = t.contentRef,
                        r = t.descriptionId,
                        o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(rk("DialogDescriptionWarning").contentName, "}.");
                    return E.useEffect(function() {
                        var t, a = null == (t = n.current) ? void 0 : t.getAttribute("aria-describedby");
                        r && a && (document.getElementById(r) || console.warn(o))
                    }, [o, n, r]), null
                };

            function rD(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function rM(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function r_(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        rM(t, n, r[n])
                    })
                }
                return t
            }

            function rB(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, o)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function rF(t, n) {
                if (null == t) return {};
                var r, o, a = function(t, n) {
                    if (null == t) return {};
                    var r, o, a = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (a[r] = t[r]);
                    return a
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
                }
                return a
            }

            function rq(t) {
                return function(t) {
                    if (Array.isArray(t)) return rD(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return rD(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rD(t, n)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rW(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }
            var rz = Symbol("radix.slottable");

            function rV(t) {
                return E.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === rz
            }
            var rG = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(t, n) {
                    var r, o, a, i, l, c = (o = r = "Primitive.".concat(n), (a = E.forwardRef(function(t, n) {
                            var r = t.children,
                                o = rF(t, ["children"]);
                            if (E.isValidElement(r)) {
                                var a, i, l, c = (l = null == (a = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : a.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                    u = function(t, n) {
                                        var r = r_({}, n);
                                        for (var o in n) ! function(o) {
                                            var a = t[o],
                                                i = n[o];
                                            /^on[A-Z]/.test(o) ? a && i ? r[o] = function() {
                                                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                var o = i.apply(void 0, rq(n));
                                                return a.apply(void 0, rq(n)), o
                                            } : a && (r[o] = a) : "style" === o ? r[o] = r_({}, a, i) : "className" === o && (r[o] = [a, i].filter(Boolean).join(" "))
                                        }(o);
                                        return r_({}, t, r)
                                    }(o, r.props);
                                return r.type !== E.Fragment && (u.ref = n ? function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return function(t) {
                                        var r = !1,
                                            o = n.map(function(n) {
                                                var o = rW(n, t);
                                                return r || "function" != typeof o || (r = !0), o
                                            });
                                        if (r) return function() {
                                            for (var t = 0; t < o.length; t++) {
                                                var r = o[t];
                                                "function" == typeof r ? r() : rW(n[t], null)
                                            }
                                        }
                                    }
                                }(n, c) : c), E.cloneElement(r, u)
                            }
                            return E.Children.count(r) > 1 ? E.Children.only(null) : null
                        })).displayName = "".concat(o, ".SlotClone"), i = a, (l = E.forwardRef(function(t, n) {
                            var r = t.children,
                                o = rF(t, ["children"]),
                                a = E.Children.toArray(r),
                                l = a.find(rV);
                            if (l) {
                                var c = l.props.children,
                                    u = a.map(function(t) {
                                        return t === l ? E.Children.count(c) > 1 ? E.Children.only(null) : E.isValidElement(c) ? c.props.children : null : t
                                    });
                                return (0, h.jsx)(i, rB(r_({}, o), {
                                    ref: n,
                                    children: E.isValidElement(c) ? E.cloneElement(c, void 0, u) : null
                                }))
                            }
                            return (0, h.jsx)(i, rB(r_({}, o), {
                                ref: n,
                                children: r
                            }))
                        })).displayName = "".concat(r, ".Slot"), l),
                        u = E.forwardRef(function(t, r) {
                            var o = t.asChild,
                                a = rF(t, ["asChild"]),
                                i = o ? c : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, h.jsx)(i, rB(r_({}, a), {
                                ref: r
                            }))
                        });
                    return u.displayName = "Primitive.".concat(n), rB(r_({}, t), rM({}, n, u))
                }, {}),
                rK = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                rH = E.forwardRef(function(t, n) {
                    return (0, h.jsx)(rG.span, rB(r_({}, t), {
                        ref: n,
                        style: r_({}, rK, t.style)
                    }))
                });

            function r$(t, n) {
                void 0 === n && (n = {});
                var r = n.insertAt;
                if (t && "undefined" != typeof document) {
                    var o = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("style");
                    a.type = "text/css", "top" === r && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
                }
            }
            rH.displayName = "VisuallyHidden", r$(".bg-common-backdrop{background-color:var(--color-common-backdrop)}.shadow-transient-high{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-400) var(--size-800) -1px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-1200) var(--size-1400) -1.5px var(--alpha-color-shadow-subtle)}.shadow-transient-low{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle)}.foundation-web-portal-zindex{z-index:1050}.fui-future-shadow-affixed-low{box-shadow:0 0 var(--size-100) 0 var(--fui-future-alpha-color-shadow-subtle),0 0 var(--size-500) 0 var(--fui-future-alpha-color-shadow-subtle)}.light-theme,.system-theme,:root{--alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-system-progress:#335fff}.dark-theme{--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}@media (prefers-color-scheme:dark){:is(:root,.system-theme){--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}}:is(:root,.light-theme,.system-theme) .stroke-contrast-alpha{border-color:rgba(27,37,75,.5)}.dark-theme .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}@media (prefers-color-scheme:dark){:is(:root,.system-theme) .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}}");
            var rQ = "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
                rX = function() {
                    return j().createElement("div", {
                        role: "presentation",
                        className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
                    })
                },
                rZ = {
                    Small: "padding-xsmall",
                    Medium: "padding-small",
                    Large: "padding-medium"
                },
                rY = {
                    Utility: "bg-action-link",
                    OverMedia: "bg-over-media-100"
                },
                rJ = function(t) {
                    var n = t.variant,
                        r = t.size,
                        o = t.isCircular,
                        a = t.className,
                        i = e5(t, ["variant", "size", "isCircular", "className"]);
                    return j().createElement("button", Object.assign({
                        type: "button",
                        className: e3("foundation-web-close-affordance flex stroke-none bg-none cursor-pointer", rQ, rY[n], rZ[r], o && "radius-circle", a)
                    }, i), j().createElement(rX, null), j().createElement(tn, {
                        name: "icon-regular-x",
                        size: r
                    }))
                };
            r$(".foundation-web-dialog-overlay{bottom:0;display:grid;left:0;overflow-y:auto;place-items:center;position:fixed;right:0;top:0}.foundation-web-dialog-close-container{right:var(--size-300);top:var(--size-300);z-index:1}.foundation-web-dialog-hero-media{border-top-left-radius:var(--radius-large);border-top-right-radius:var(--radius-large);margin-left:calc(var(--stroke-standard)*-1);margin-right:calc(var(--stroke-standard)*-1);margin-top:calc(var(--stroke-standard)*-1);overflow:clip}.foundation-web-dialog-content[data-size=Small]{max-width:calc(var(--size-100)*80);min-width:calc(var(--size-100)*75)}.foundation-web-dialog-content[data-size=Medium]{max-width:calc(var(--size-100)*120);min-width:calc(var(--size-100)*94)}.foundation-web-dialog-content[data-size=Large]{max-width:calc(var(--size-100)*160);min-width:calc(var(--size-100)*94)}");
            var r0 = (0, E.createContext)({
                    size: "Medium",
                    isModal: !0,
                    hasCloseAffordance: !1,
                    hasMarginTop: !0,
                    hasMarginBottom: !0,
                    type: "Default"
                }),
                r1 = function() {
                    var t = (0, E.useContext)(r0);
                    if (!t) throw Error("Dialog components must be used within a Dialog");
                    return t
                },
                r2 = {
                    Small: "padding-x-large",
                    Medium: "padding-x-xlarge",
                    Large: "padding-x-xlarge"
                },
                r8 = {
                    Small: "padding-top-large",
                    Medium: "padding-top-xlarge",
                    Large: "padding-top-xlarge"
                },
                r5 = {
                    Small: "padding-bottom-large",
                    Medium: "padding-bottom-xlarge",
                    Large: "padding-bottom-xlarge"
                },
                r3 = function(t) {
                    var n = t.open,
                        r = t.onOpenChange,
                        o = t.children,
                        a = t.size,
                        i = t.type,
                        l = void 0 === i ? "Default" : i,
                        c = t.isModal,
                        u = t.hasCloseAffordance,
                        s = t.closeLabel,
                        d = t.hasMarginTop,
                        f = void 0 === d || d,
                        p = t.hasMarginBottom,
                        m = void 0 === p || p,
                        v = t.experimentalDisablePointerEventsStylingOnBody,
                        h = void 0 !== v && v,
                        b = (0, E.useMemo)(function() {
                            return {
                                size: a,
                                isModal: c,
                                type: l,
                                hasCloseAffordance: u,
                                closeLabel: s,
                                hasMarginTop: f,
                                hasMarginBottom: m
                            }
                        }, [a, c, l, u, s, f, m]);
                    return (0, E.useEffect)(function() {
                        h && setTimeout(function() {
                            Object.assign(document.body.style, {
                                pointerEvents: "unset"
                            })
                        }, 0)
                    }, [h, n]), j().createElement(r0.Provider, {
                        value: b
                    }, j().createElement(ru, {
                        open: n,
                        onOpenChange: r
                    }, o))
                };
            r3.displayName = "Dialog";
            var r6 = function(t) {
                var n = t.children,
                    r = t.className,
                    o = t.style,
                    a = t.overlayClassName,
                    i = t.overlayStyle,
                    l = e5(t, ["children", "className", "style", "overlayClassName", "overlayStyle"]),
                    c = r1(),
                    u = c.size,
                    s = c.isModal,
                    d = c.hasCloseAffordance,
                    f = c.closeLabel,
                    p = e3("foundation-web-dialog-overlay padding-y-medium foundation-web-portal-zindex", s && "bg-common-backdrop", a),
                    m = e3("relative radius-large bg-surface-100 stroke-muted stroke-standard foundation-web-dialog-content shadow-transient-high", r);
                return j().createElement(rv, null, j().createElement(rb, {
                    className: p,
                    style: i
                }, j().createElement(rw, Object.assign({
                    className: m,
                    "data-size": u,
                    style: o
                }, l), d && j().createElement("div", {
                    className: "absolute foundation-web-dialog-close-container"
                }, j().createElement(rI, {
                    asChild: !0
                }, j().createElement(rJ, {
                    variant: "OverMedia",
                    size: u,
                    isCircular: !0,
                    "aria-label": f
                }))), n)))
            };
            r6.displayName = "DialogContent";
            var r4 = function(t) {
                var n = t.children,
                    r = t.className,
                    o = e5(t, ["children", "className"]),
                    a = r1(),
                    i = a.size,
                    l = a.hasMarginTop,
                    c = a.hasMarginBottom,
                    u = e3(r2[i], l && r8[i], c && r5[i], r);
                return j().createElement("div", Object.assign({
                    className: u
                }, o), n)
            };
            r4.displayName = "DialogBody";
            var r7 = function(t) {
                var n = t.children,
                    r = t.className,
                    o = t.hidden,
                    a = e5(t, ["children", "className", "hidden"]),
                    i = j().createElement(rA, Object.assign({
                        className: r
                    }, a), n);
                return o ? j().createElement(rH, null, i) : i
            };
            r7.displayName = "DialogTitle";
            var r9 = function(t) {
                var n = t.children,
                    r = t.className,
                    o = e5(t, ["children", "className"]),
                    a = r1().size,
                    i = e3(r2[a], r5[a], r);
                return j().createElement("div", Object.assign({
                    className: i
                }, o), n)
            };
            r9.displayName = "DialogFooter", r$("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}");
            var oe = function(t) {
                    var n = t.width,
                        r = t.height;
                    return j().createElement("svg", {
                        className: "foundation-web-loading-spinner",
                        width: n,
                        height: r,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, j().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentColor",
                        d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
                    }))
                },
                ot = {
                    Large: 24,
                    Medium: 20,
                    Small: 16,
                    XSmall: 12
                },
                on = {
                    Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-medium"],
                    Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
                    Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
                    XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
                },
                or = {
                    Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-alert", "content-action-alert"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                oo = {
                    Emphasis: ["bg-action-standard", "content-action-standard"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-standard", "content-action-standard"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-standard", "content-action-standard"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                oa = (0, E.forwardRef)(function(t, n) {
                    var r = t.children,
                        o = t.className,
                        a = t.style,
                        i = t.isDisabled,
                        l = void 0 !== i && i,
                        c = t.isLoading,
                        u = void 0 !== c && c,
                        s = t.icon,
                        d = t.size,
                        f = void 0 === d ? "Large" : d,
                        p = t.variant,
                        m = void 0 === p ? "Emphasis" : p,
                        v = e5(t, ["children", "className", "style", "isDisabled", "isLoading", "icon", "size", "variant"]),
                        h = e3("foundation-web-button", l ? "opacity-[0.5]" : [rQ, "cursor-pointer"], "relative flex items-center justify-center stroke-none padding-y-none select-none", on[f], l ? oo[m] : or[m], o),
                        b = j().createElement(j().Fragment, null, j().createElement(rX, null), u && j().createElement("div", {
                            "aria-hidden": "true",
                            className: "absolute flex"
                        }, j().createElement(oe, {
                            width: ot[f],
                            height: ot[f]
                        })), j().createElement("span", {
                            className: e3("flex items-center min-width-0", "Large" === f || "Medium" === f ? "gap-small" : "gap-xsmall", u && "invisible")
                        }, s && j().createElement(tn, {
                            name: s,
                            size: f
                        }), j().createElement("span", {
                            className: "padding-y-xsmall text-truncate-end text-no-wrap"
                        }, r))),
                        y = Object.assign({
                            textDecoration: "none"
                        }, a);
                    if ("a" === v.as) {
                        v.as;
                        var g = v.href,
                            S = e5(v, ["as", "href"]);
                        return j().createElement("a", Object.assign({
                            ref: n
                        }, S, {
                            "aria-disabled": l,
                            href: l ? void 0 : g,
                            className: h,
                            style: y
                        }), b)
                    }
                    var w = e5(v, ["as"]);
                    return j().createElement("button", Object.assign({
                        ref: n,
                        type: "button"
                    }, w, {
                        disabled: l,
                        className: h,
                        style: y
                    }), b)
                }),
                oi = window.Roblox["core-scripts"].realtime,
                ol = r.n(oi),
                oc = function(t) {
                    var n = t.event,
                        r = t.queryKey,
                        o = t.queryClient;
                    (0, E.useEffect)(function() {
                        var t = ol().GetClient(),
                            a = function() {
                                return o.invalidateQueries({
                                    queryKey: r
                                })
                            };
                        return t.Subscribe(n, a),
                            function() {
                                t.Unsubscribe(n, a)
                            }
                    }, [n, o, r])
                };

            function ou(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function os(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return ou(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ou(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var od = "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
                of = function() {
                    return (0, h.jsx)("div", {
                        role: "presentation",
                        className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
                    })
                },
                op = "content-emphasis text-title-large flex items-center gap-small padding-left-xsmall padding-right-xxsmall radius-medium",
                om = "size-1000 grow-0 shrink-0 basis-auto flex justify-center items-center",
                ov = function(t) {
                    var n = t.id,
                        r = t.displayName;
                    return (0, h.jsx)("li", {
                        children: (0, h.jsxs)("a", {
                            href: "/users/profile",
                            className: A()(op, od),
                            children: [(0, h.jsx)( of , {}), (0, h.jsx)("span", {
                                className: om,
                                children: (0, h.jsx)("span", {
                                    className: "radius-circle clip size-600",
                                    children: (0, h.jsx)(N.Thumbnail2d, {
                                        targetId: n,
                                        type: N.ThumbnailTypes.avatarHeadshot,
                                        altName: r
                                    })
                                })
                            }), (0, h.jsxs)("span", {
                                className: "flex gap-xsmall min-width-0",
                                children: [(0, h.jsx)("span", {
                                    className: "text-truncate-end text-no-wrap",
                                    children: r
                                }), (0, R.currentUserHasVerifiedBadge)() ? (0, h.jsx)(R.VerifiedBadgeIconContainer, {
                                    size: R.BadgeSizes.CAPTIONHEADER
                                }) : null]
                            })]
                        })
                    })
                },
                oh = function(t) {
                    var n, r = t.path,
                        o = t.isCurrentPath,
                        a = t.icon,
                        i = t.text,
                        l = t.notification,
                        c = (null != (n = URL) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](r) : r instanceof n) ? r.href : (0, T.getAbsoluteUrl)(r);
                    return (0, h.jsx)("li", {
                        children: (0, h.jsxs)("a", {
                            href: c,
                            className: A()(op, od, o && "bg-surface-300"),
                            children: [(0, h.jsx)( of , {}), (0, h.jsx)("span", {
                                className: om,
                                children: (0, h.jsx)(tn, {
                                    name: a,
                                    size: "Large"
                                })
                            }), (0, h.jsx)("span", {
                                className: "min-width-0 text-truncate-end text-no-wrap",
                                children: i
                            }), l && (0, h.jsx)("span", {
                                className: "fill basis-auto padding-x-small flex justify-end items-center",
                                children: (0, h.jsx)(ti, {
                                    label: l,
                                    variant: "Contrast"
                                })
                            })]
                        })
                    }, c)
                },
                ob = function() {
                    var t = (0, S.useTranslation)().translate,
                        n = os((0, E.useState)(!1), 2),
                        r = n[0],
                        o = n[1];
                    return (0, h.jsxs)("li", {
                        children: [(0, h.jsxs)("button", {
                            type: "button",
                            className: A()("bg-none width-full stroke-none", op, od),
                            onClick: function() {
                                o(!r)
                            },
                            children: [(0, h.jsx)( of , {}), (0, h.jsx)("span", {
                                className: om,
                                children: (0, h.jsx)(tn, {
                                    name: "icon-regular-building-store",
                                    size: "Large"
                                })
                            }), (0, h.jsx)("span", {
                                children: t("Label.OfficialStore")
                            })]
                        }), (0, h.jsx)(r3, {
                            open: r,
                            size: "Medium",
                            isModal: !0,
                            hasCloseAffordance: !0,
                            closeLabel: t("Action.Close"),
                            onOpenChange: function() {
                                o(!1)
                            },
                            children: (0, h.jsxs)(r6, {
                                children: [(0, h.jsxs)(r4, {
                                    children: [(0, h.jsx)(r7, {
                                        children: t("Heading.LeavingRoblox")
                                    }), (0, h.jsx)("p", {
                                        children: t("Description.RetailWebsiteRedirect")
                                    }), (0, h.jsx)("p", {
                                        children: t("Description.PurchaseAgeWarning")
                                    })]
                                }), (0, h.jsxs)(r9, {
                                    className: "flex gap-medium justify-end",
                                    children: [(0, h.jsx)(oa, {
                                        variant: "Standard",
                                        onClick: function() {
                                            o(!1)
                                        },
                                        children: t("Action.Cancel")
                                    }), (0, h.jsx)(oa, {
                                        as: "a",
                                        variant: "Emphasis",
                                        href: decodeURIComponent(k().amazonWebStoreLink),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        onClick: function() {
                                            o(!1), (0, e7.sendEventWithTarget)("clickContinueToAmazonStore", "click", {}, e7.targetTypes.WWW)
                                        },
                                        children: t("Action.Continue")
                                    })]
                                })]
                            })
                        })]
                    })
                },
                oy = function() {
                    var t = (0, S.useTranslation)().translate;
                    return (0, h.jsx)("li", {
                        children: (0, h.jsx)(oa, {
                            as: "a",
                            href: (0, T.getAbsoluteUrl)("/premium/membership?ctx=leftnav"),
                            variant: "Standard",
                            size: "Medium",
                            className: "grow",
                            onClick: function() {
                                te().sendUserPurchaseFlowEvent(te().ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, te().ENUM_VIEW_NAME.LEFT_NAVIGATION_BAR, te().ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, te().ENUM_VIEW_MESSAGE.GET_PREMIUM)
                            },
                            children: t("ActionsGetPremium")
                        })
                    })
                },
                og = function(t, n) {
                    return t > n ? "".concat(n, "+") : t.toString()
                },
                oS = function(t) {
                    var n, r = t.user,
                        o = r.id,
                        a = os((0, E.useState)(new URL(window.location.href).pathname), 2),
                        i = a[0],
                        l = a[1];
                    (0, E.useEffect)(function() {
                        var t = new URL(window.location.href).pathname,
                            n = new MutationObserver(function() {
                                var n = new URL(window.location.href).pathname;
                                t !== n && (t = n, l(n))
                            });
                        return n.observe(document.body, {
                                childList: !0,
                                subtree: !0
                            }),
                            function() {
                                n.disconnect()
                            }
                    }, []);
                    var c = (0, S.useTranslation)().translate,
                        u = (0, b.useQueryClient)(),
                        s = (0, b.useQuery)({
                            queryKey: ["friend-request-count"],
                            queryFn: function() {
                                return e4.get({
                                    url: "".concat(k().friendsApi, "/v1/user/friend-requests/count"),
                                    withCredentials: !0
                                }).then(function(t) {
                                    return t.data.count
                                })
                            },
                            staleTime: 1 / 0
                        }).data;
                    oc({
                        event: "FriendshipNotifications",
                        queryKey: ["friend-request-count"],
                        queryClient: u
                    });
                    var d = (0, b.useQuery)({
                        queryKey: ["message-unread-count"],
                        queryFn: function() {
                            return e4.get({
                                url: "".concat(k().privateMessagesApi, "/v1/messages/unread/count"),
                                withCredentials: !0
                            }).then(function(t) {
                                return t.data.count
                            })
                        },
                        staleTime: 1 / 0
                    }).data;
                    oc({
                        event: "Roblox.Messages.CountChanged",
                        queryKey: ["message-unread-count"],
                        queryClient: u
                    });
                    var f = (0, b.useQuery)({
                        queryKey: ["trade-inbound-count"],
                        queryFn: function() {
                            return e4.get({
                                url: "".concat(k().tradesApi, "/v1/trades/inbound/count"),
                                withCredentials: !0
                            }).then(function(t) {
                                return t.data.count
                            })
                        },
                        staleTime: 1 / 0
                    }).data;
                    return (0, h.jsx)("nav", {
                        children: (0, h.jsxs)("ul", {
                            className: "flex flex-col gap-small",
                            children: [(0, h.jsx)(ov, {
                                id: o,
                                displayName: null != (n = r.displayName) ? n : ""
                            }), (0, h.jsx)(oh, {
                                path: "/home",
                                isCurrentPath: /^\/home(\/|$)/.test(i),
                                icon: "icon-regular-house",
                                text: c("Label.sHome")
                            }), (0, h.jsx)(oh, {
                                path: "/users/profile",
                                isCurrentPath: /^\/users\/(\d+\/)?profile(\/|$)/.test(i),
                                icon: "icon-regular-person",
                                text: c("Label.sProfile")
                            }), (0, h.jsx)(oh, {
                                path: "/my/messages/#!/inbox",
                                isCurrentPath: /^\/my\/messages(\/|$)/.test(i),
                                icon: "icon-regular-speech-bubble-align-center",
                                text: c("Label.sMessages"),
                                notification: d ? og(d, 500) : void 0
                            }), (0, h.jsx)(oh, {
                                path: s ? "/users/friends#!/friend-requests" : "/users/friends",
                                isCurrentPath: /^\/users\/(\d+\/)?friends(\/|$)/.test(i),
                                icon: "icon-regular-two-people",
                                text: c("Label.Connect"),
                                notification: s ? og(s, 500) : void 0
                            }), (0, h.jsx)(oh, {
                                path: "/my/avatar",
                                isCurrentPath: /^\/my\/avatar(\/|$)/.test(i),
                                icon: "icon-regular-person-standing",
                                text: c("Label.sAvatar")
                            }), (0, h.jsx)(oh, {
                                path: "/users/inventory",
                                isCurrentPath: /^\/users\/(\d+\/)?inventory(\/|$)/.test(i),
                                icon: "icon-regular-backpack",
                                text: c("Label.sInventory")
                            }), (0, h.jsx)(oh, {
                                path: "/trades",
                                isCurrentPath: /^\/trades(\/|$)/.test(i),
                                icon: "icon-regular-hand-two-arrows-horizontal",
                                text: c("Label.sTrade"),
                                notification: f ? og(f, 999) : void 0
                            }), (0, h.jsx)(oh, {
                                path: "/communities",
                                isCurrentPath: /^\/communities(\/|$)/.test(i),
                                icon: "icon-regular-three-people",
                                text: c("Label.sGroups")
                            }), (0, h.jsx)(oh, {
                                path: new URL("https://blog.roblox.com"),
                                isCurrentPath: !1,
                                icon: "icon-regular-fountain-pen-nib",
                                text: c("Label.sBlog")
                            }), (0, h.jsx)(ob, {}), (0, h.jsx)(oh, {
                                path: "/giftcards-us",
                                isCurrentPath: /^\/giftcards-us(\/|$)/.test(i),
                                icon: "icon-regular-gift-card",
                                text: c("Label.GiftCards")
                            }), (0, h.jsx)(oy, {})]
                        })
                    })
                };

            function ow(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var ox = function(t) {
                    var n, r = t.user;
                    (0, E.useEffect)(function() {
                        var t = document.getElementById("wrap");
                        return null != t && t.classList.add("left-nav-new-width"),
                            function() {
                                null != t && t.classList.remove("left-nav-new-width")
                            }
                    });
                    var o = (n = (0, E.useState)(!1), function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != a) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, o = t
                                } finally {
                                    try {
                                        l || null == a.return || a.return()
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return ow(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ow(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        a = o[0],
                        i = o[1],
                        l = (0, E.useCallback)(function() {
                            i(function(t) {
                                return !t
                            })
                        }, [i]);
                    return (0, E.useEffect)(function() {
                        return document.addEventListener("headerMenuIconClick", l),
                            function() {
                                document.removeEventListener("headerMenuIconClick", l)
                            }
                    }, [l]), (0, h.jsx)("div", {
                        className: A()("left-nav fixed left-[0] [z-index:1001] bg-surface-0", "motion-safe:[transition-property:transform,visibility] ease-standard-out duration-100 large:visible large:[transform:unset]", a ? "visible" : "invisible [transform:translateX(-100%)]"),
                        children: (0, h.jsxs)("div", {
                            className: "flex width-[216px] height-full scroll-y",
                            children: [(0, h.jsx)("div", {
                                className: "width-[215px]",
                                children: (0, h.jsx)("div", {
                                    className: "padding-x-large padding-y-medium flex flex-col gap-large",
                                    children: (0, h.jsx)(oS, {
                                        user: r
                                    })
                                })
                            }), (0, h.jsx)(e6, {
                                orientation: "vertical"
                            })]
                        })
                    })
                },
                oE = JSON.parse('{"P":["CommonUI.Features","CommonUI.Messages","Common.AlertsAndOptions","Feature.ShopDialog","Purchasing.RedeemGameCard","IAPExperience.PurchaseError","Feature.NotApproved","Authentication.LogoutModal"]}'),
                oj = function() {
                    var t, n = document.querySelector('meta[name="account-experience-revamp-data"]');
                    return "true" === (null != (t = null == n ? void 0 : n.dataset) ? t : {}).isAccountExperienceRevampEnabled
                },
                oC = window.Roblox["core-scripts"].localStorage.localStorage,
                oA = r.n(oC),
                oO = window.Roblox["core-scripts"].meta.environment,
                oN = window.Roblox.ExperimentationService,
                oI = r.n(oN);

            function oR(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }

            function oT(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }
            var oP = "new-left-nav",
                ok = function() {
                    var t = oA().getLocalStorage(oP);
                    if (null == t || (void 0 === t ? "undefined" : oT(t)) !== "object") return null;
                    var n = t.data;
                    return null == n || (void 0 === n ? "undefined" : oT(n)) !== "object" ? null : n
                },
                oL = function() {
                    var t, n, r, o, a = null == (n = (0, x.authenticatedUser)()) || null == (t = n.id) ? void 0 : t.toString(),
                        i = null != (r = ok()) ? r : {};
                    return (0, b.useQuery)({
                        queryKey: ["new-left-nav"],
                        queryFn: function() {
                            var t;
                            return (t = function() {
                                var t;
                                return function(t, n) {
                                    var r, o, a, i = {
                                            label: 0,
                                            sent: function() {
                                                if (1 & a[0]) throw a[1];
                                                return a[1]
                                            },
                                            trys: [],
                                            ops: []
                                        },
                                        l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                                    return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                                        return this
                                    }), l;

                                    function c(c) {
                                        return function(u) {
                                            var s = [c, u];
                                            if (r) throw TypeError("Generator is already executing.");
                                            for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                                                if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                                                switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                                    case 0:
                                                    case 1:
                                                        a = s;
                                                        break;
                                                    case 4:
                                                        return i.label++, {
                                                            value: s[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        i.label++, o = s[1], s = [0];
                                                        continue;
                                                    case 7:
                                                        s = i.ops.pop(), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                            i = 0;
                                                            continue
                                                        }
                                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                            i.label = s[1];
                                                            break
                                                        }
                                                        if (6 === s[0] && i.label < a[1]) {
                                                            i.label = a[1], a = s;
                                                            break
                                                        }
                                                        if (a && i.label < a[2]) {
                                                            i.label = a[2], i.ops.push(s);
                                                            break
                                                        }
                                                        a[2] && i.ops.pop(), i.trys.pop();
                                                        continue
                                                }
                                                s = n.call(t, i)
                                            } catch (t) {
                                                s = [6, t], o = 0
                                            } finally {
                                                r = a = 0
                                            }
                                            if (5 & s[0]) throw s[1];
                                            return {
                                                value: s[0] ? s[1] : void 0,
                                                done: !0
                                            }
                                        }
                                    }
                                }(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if ((0, oO.isTestSite)()) return [2, !0];
                                            return [4, oI().getAllValuesForLayer("Website.Navigation")];
                                        case 1:
                                            return t = !0 === n.sent().IsNewLeftNavEnabled, i[a] = t, oA().setLocalStorage(oP, {
                                                data: i
                                            }), [2, t]
                                    }
                                })
                            }, function() {
                                var n = this,
                                    r = arguments;
                                return new Promise(function(o, a) {
                                    var i = t.apply(n, r);

                                    function l(t) {
                                        oR(i, o, a, l, c, "next", t)
                                    }

                                    function c(t) {
                                        oR(i, o, a, l, c, "throw", t)
                                    }
                                    l(void 0)
                                })
                            })()
                        },
                        enabled: null != a,
                        placeholderData: null != a && null != (o = i[a]) && o
                    }).data
                },
                oU = function() {
                    var t = oL(),
                        n = (0, x.authenticatedUser)();
                    return !(null == n ? void 0 : n.isAuthenticated) || oj() ? null : (0, h.jsx)(S.TranslationProvider, {
                        config: oE.P,
                        children: t ? (0, h.jsx)(ox, {
                            user: n
                        }) : (0, h.jsx)(e2, {})
                    })
                },
                oD = window.ReactUtilities;

            function oM(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }

            function o_(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(o, a) {
                        var i = t.apply(n, r);

                        function l(t) {
                            oM(i, o, a, l, c, "next", t)
                        }

                        function c(t) {
                            oM(i, o, a, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function oB(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        var o;
                        o = r[n], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return t
            }

            function oF(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, o)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function oq(t, n) {
                var r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function c(c) {
                    return function(u) {
                        var s = [c, u];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                            switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                    a = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, o = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < a[1]) {
                                        i.label = a[1], a = s;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2], i.ops.push(s);
                                        break
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], o = 0
                        } finally {
                            r = a = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var oW = F.httpService.createCancelToken(),
                oz = ((l = {})[l.GameSuggestion = 0] = "GameSuggestion", l[l.QuerySuggestion = 1] = "QuerySuggestion", l[l.TrendingQuerySuggestion = 2] = "TrendingQuerySuggestion", l),
                oV = function(t, n, r, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return o_(function() {
                        var i, l;
                        return oq(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null === (i = n) && (i = e_.englishLanguageCode), l = {
                                            prefix: t.toLowerCase(),
                                            limit: r,
                                            lang: i,
                                            q: o
                                        }, oW.cancel(), oW = F.httpService.createCancelToken(), !a) return [3, 2];
                                    return [4, F.httpService.get(oF(oB({}, e_.avatarRequestSuggestionUrl), {
                                        timeout: e_.expiryTimeout,
                                        cancelToken: oW.token,
                                        fullError: !0
                                    }), l)];
                                case 1:
                                case 3:
                                    return [2, c.sent().data];
                                case 2:
                                    return [4, F.httpService.get(oF(oB({}, e_.avatarRequestSuggestionCdnUrl), {
                                        timeout: e_.expiryTimeout,
                                        cancelToken: oW.token,
                                        fullError: !0
                                    }), l)]
                            }
                        })
                    })()
                },
                oG = function(t) {
                    return void 0 === t.label
                },
                oK = function(t) {
                    return void 0 !== t.Query
                },
                oH = function(t) {
                    if (oK(t)) return "avatar";
                    switch (t.type) {
                        case oz.QuerySuggestion:
                            return "keyword";
                        case oz.GameSuggestion:
                            return "game";
                        default:
                            throw Error("Unrecognized autocomplete suggestion, ".concat(JSON.stringify(t)))
                    }
                },
                o$ = function(t) {
                    switch (t.label) {
                        case "Label.Players":
                            return "defaultPlayers";
                        case "Heading.Marketplace":
                        case "Label.AvatarShop":
                        case "Label.sCatalog":
                            return "defaultShops";
                        case "Label.sGroups":
                            return "defaultGroups";
                        case "Label.CreatorStore":
                            return "defaultLibrary";
                        case "Label.Experience":
                            return "defaultGames";
                        default:
                            throw Error("Unrecognized default suggestion, ".concat(JSON.stringify(t)))
                    }
                },
                oQ = function(t, n) {
                    var r, o, a;
                    return oG(t) && oK(t) ? _.avatarSearchLink.url + encodeURIComponent(null != (r = t.Query) ? r : "") : oG(t) ? _.gameSearchLink.url + encodeURIComponent(null != (o = t.searchQuery) ? o : "") : (null == n ? void 0 : n.target.value) ? (null != (a = t.url) ? a : "") + encodeURIComponent(n.target.value) : ""
                },
                oX = function() {
                    var t = new ee.TranslationResourceProvider().intl.getLocale(),
                        n = t.indexOf("-");
                    return (t = t.substring(0, -1 !== n ? n : t.length)) !== e_.englishLanguageCode && (t += ",".concat(e_.englishLanguageCode)), t
                },
                oZ = function(t, n) {
                    return t.map(function(t) {
                        return oG(t) ? "".concat(oH(t), "|").concat(t.searchQuery) : "".concat(o$(t), "|").concat(n)
                    }).join(",")
                },
                oY = et.eventStreamService.eventTypes,
                oJ = "searchAutocomplete",
                o0 = F.uuidService.generateRandomUuid,
                o1 = oJ,
                o2 = "searchLandingPage",
                o8 = "open",
                o5 = "submit",
                o3 = "close",
                o6 = "cancel",
                o4 = function(t, n, r, o, a, i, l) {
                    return [{
                        name: "searchSuggestionClicked",
                        type: oY.formInteraction,
                        context: oJ
                    }, {
                        kwd: t,
                        searchType: n,
                        suggestionPosition: r,
                        suggestionClicked: o,
                        suggestionType: a,
                        suggestions: i,
                        sessionInfo: l
                    }]
                },
                o7 = function(t, n, r, o, a, i, l, c, u, s) {
                    return [{
                        name: "searchAutocomplete",
                        type: oY.formInteraction,
                        context: oJ
                    }, {
                        kwd: t,
                        previousKwd: n,
                        fromLocalCache: r,
                        suggestions: o,
                        algorithm: a,
                        latency: i,
                        timeoutDelayMs: l,
                        sessionInfo: c,
                        page: u,
                        isPersonalizedBasedOnPreviousQuery: s
                    }]
                },
                o9 = function(t, n, r, o, a) {
                    return [{
                        name: "search",
                        type: oY.formInteraction,
                        context: n
                    }, {
                        kwd: t,
                        actionType: r,
                        sessionInfo: o,
                        searchLandingPageSessionInfo: a
                    }]
                },
                ae = function(t, n) {
                    return [{
                        name: "catalogSearch",
                        type: oY.formInteraction,
                        context: oJ
                    }, {
                        autocompleteFlag: t,
                        previousPage: n
                    }]
                };

            function at(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function an(t, n) {
                if (t) {
                    if ("string" == typeof t) return at(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return at(t, n)
                }
            }

            function ar(t) {
                var n = t.translate,
                    r = t.searchInput,
                    o = t.indexOfSelectedOption,
                    a = t.autocompleteSessionInfo,
                    i = t.resetSessionInfo,
                    l = eP();
                return (0, h.jsx)(j().Fragment, {
                    children: Object.entries(l).map(function(t) {
                        var c = function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, n) {
                                var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != a) {
                                    var i = [],
                                        l = !0,
                                        c = !1;
                                    try {
                                        for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                    } catch (t) {
                                        c = !0, o = t
                                    } finally {
                                        try {
                                            l || null == a.return || a.return()
                                        } finally {
                                            if (c) throw o
                                        }
                                    }
                                    return i
                                }
                            }(t, 2) || an(t, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            u = c[0],
                            s = c[1],
                            d = s.url,
                            f = s.label,
                            p = A()("navbar-search-option rbx-clickable-li", parseInt(u, 10) === o ? " selected" : "");
                        return (0, h.jsx)("li", {
                            className: p,
                            children: (0, h.jsx)(O.Link, {
                                className: "navbar-search-anchor",
                                url: d + r,
                                onClick: function() {
                                    var t, n;
                                    (t = et.eventStreamService).sendEvent.apply(t, function(t) {
                                        if (Array.isArray(t)) return at(t)
                                    }(n = o4(r, void 0, u, r, o$(s), oZ(l, r), a)) || function(t) {
                                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                    }(n) || an(n) || function() {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()), i()
                                },
                                children: n("Label.sSearchPhrase", {
                                    phrase: r,
                                    location: n(f)
                                })
                            })
                        }, u)
                    })
                })
            }

            function ao(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            ar.propTypes = {
                translate: J().func.isRequired,
                searchInput: J().string.isRequired,
                indexOfSelectedOption: J().number.isRequired,
                autocompleteSessionInfo: J().string.isRequired,
                resetSessionInfo: J().func.isRequired
            };
            var aa = _.gameSearchLink,
                ai = _.avatarSearchLink,
                al = _.creatorStoreUrl;

            function ac(t) {
                var n, r = t.translate,
                    o = t.selected,
                    a = t.suggestion,
                    i = t.onClick,
                    l = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": o
                    }),
                    c = a.type,
                    u = a.universeId,
                    s = a.searchQuery,
                    d = (n = (0, E.useState)(!1), function(t) {
                        if (Array.isArray(t)) return t
                    }(n) || function(t, n) {
                        var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    l || null == a.return || a.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return i
                        }
                    }(n, 2) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return ao(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ao(t, n)
                        }
                    }(n, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    f = d[0],
                    p = d[1];
                return c === oz.GameSuggestion ? (0, h.jsx)("li", {
                    className: l,
                    children: (0, h.jsxs)(O.Link, {
                        className: "new-navbar-search-anchor",
                        url: aa.url + encodeURIComponent(s),
                        onClick: i,
                        children: [(0, h.jsx)("span", {
                            className: A()(aa.icon, "navbar-list-option-icon")
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-text",
                            children: s
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-suffix",
                            children: r("Label.sSearchPhraseV2", {
                                location: r(aa.label)
                            })
                        }), (0, h.jsxs)("span", {
                            className: A()("navbar-list-option-thumbnail", {
                                "navbar-list-option-thumbnail-visible": f
                            }),
                            children: [(0, h.jsx)("span", {
                                className: "background-icon"
                            }), (0, h.jsx)(N.Thumbnail2d, {
                                type: N.ThumbnailTypes.gameIcon,
                                size: N.DefaultThumbnailSize,
                                targetId: u,
                                containerClass: "thumbnail-icon",
                                format: N.ThumbnailFormat.jpeg,
                                onLoad: function() {
                                    p(!0)
                                }
                            })]
                        })]
                    })
                }) : (0, h.jsx)("li", {
                    className: l,
                    children: (0, h.jsxs)(O.Link, {
                        className: "new-navbar-search-anchor",
                        url: aa.url + encodeURIComponent(s),
                        onClick: i,
                        children: [(0, h.jsx)("span", {
                            className: A()(aa.icon, "navbar-list-option-icon")
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-text",
                            children: s
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-suffix",
                            children: r("Label.sSearchPhraseV2", {
                                location: r(aa.label)
                            })
                        })]
                    })
                })
            }

            function au(t) {
                var n = t.translate,
                    r = t.selected,
                    o = t.suggestion,
                    a = t.onClick,
                    i = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": r
                    }),
                    l = o.Query;
                return (0, h.jsx)("li", {
                    className: i,
                    children: (0, h.jsxs)(O.Link, {
                        className: "new-navbar-search-anchor",
                        url: ai.url + encodeURIComponent(l),
                        onClick: a,
                        children: [(0, h.jsx)("span", {
                            className: A()(ai.icon, "navbar-list-option-icon")
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-text",
                            children: l
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-suffix",
                            children: n("Label.sSearchPhraseV2", {
                                location: n(ai.label)
                            })
                        })]
                    })
                })
            }

            function as(t) {
                var n = t.translate,
                    r = t.selected,
                    o = t.searchInput,
                    a = t.suggestion,
                    i = t.onClick,
                    l = a.url,
                    c = a.label,
                    u = a.icon,
                    s = "Label.CreatorStore" === c ? al : l,
                    d = A()("navbar-search-option rbx-clickable-li", {
                        "new-selected": r
                    });
                return (0, h.jsx)("li", {
                    className: d,
                    children: (0, h.jsxs)(O.Link, {
                        className: "new-navbar-search-anchor",
                        url: s + encodeURIComponent(o),
                        onClick: i,
                        children: [(0, h.jsx)("span", {
                            className: A()(u, "navbar-list-option-icon")
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-text",
                            children: o.toLowerCase()
                        }), (0, h.jsx)("span", {
                            className: "navbar-list-option-suffix",
                            children: n("Label.sSearchPhraseV2", {
                                location: n(c)
                            })
                        })]
                    })
                })
            }

            function ad(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function af(t) {
                return function(t) {
                    if (Array.isArray(t)) return ad(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return ad(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ad(t, n)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ap(t) {
                var n = t.translate,
                    r = t.searchInput,
                    o = t.indexOfSelectedOption,
                    a = t.searchSuggestions,
                    i = t.autocompleteSessionInfo,
                    l = t.resetSessionInfo,
                    c = function(t, n) {
                        return function() {
                            var o, c, u = a[n];
                            (o = et.eventStreamService).sendEvent.apply(o, af(o4(r, void 0, n, oG(u) ? u.searchQuery : r, t, oZ(a, r), i))), l();
                            var s = +!t.includes("default");
                            (c = et.eventStreamService).sendEvent.apply(c, af(ae(s, F.pageName.PageNameProvider.getInternalPageName())))
                        }
                    };
                return a.map(function(t, a) {
                    var i = parseInt(a, 10) === o;
                    return oG(t) && oK(t) ? (0, h.jsx)(au, {
                        translate: n,
                        selected: i,
                        suggestion: t,
                        onClick: c(oH(t), a)
                    }, t.Query) : oG(t) ? (0, h.jsx)(ac, {
                        translate: n,
                        selected: i,
                        suggestion: t,
                        onClick: c(oH(t), a)
                    }, t.searchQuery) : (0, h.jsx)(as, {
                        translate: n,
                        selected: i,
                        suggestion: t,
                        searchInput: r,
                        onClick: c(o$(t), a)
                    }, t.url)
                })
            }

            function am(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function av(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || ah(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ah(t, n) {
                if (t) {
                    if ("string" == typeof t) return am(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return am(t, n)
                }
            }

            function ab(t) {
                var n = t.translate,
                    r = t.searchInput,
                    o = t.isMenuOpen,
                    a = t.handleSearchOpenOrInputChange,
                    i = t.closeMenu,
                    l = t.setIsMenuHover,
                    c = t.indexOfSelectedOption,
                    u = t.onSubmit,
                    s = t.onKeyDown,
                    d = t.onKeyUp,
                    f = t.isUniverseSearchShown,
                    p = t.searchSuggestions,
                    m = t.autocompleteSessionInfo,
                    v = t.resetSessionInfo,
                    b = t.isAvatarAutocompleteEnabled,
                    y = (0, E.createRef)(),
                    g = (0, E.createRef)(),
                    S = (0, E.createRef)(),
                    w = av((0, E.useState)(!1), 2),
                    x = w[0],
                    C = w[1],
                    O = av((0, E.useState)(!0), 2),
                    N = O[0],
                    I = O[1];
                (0, E.useEffect)(function() {
                    var t = function() {
                        I(!1)
                    };
                    return window.addEventListener("SetSearchLandingHasContent", t),
                        function() {
                            window.removeEventListener("SetSearchLandingHasContent", t)
                        }
                }, []);
                var R = (0, E.useRef)(!1),
                    T = (0, E.useCallback)(function() {
                        var t, n, o, i, l, c, u, s;
                        (t = et.eventStreamService).sendEvent.apply(t, function(t) {
                            if (Array.isArray(t)) return am(t)
                        }((l = r, c = void 0, u = m, s = null === F.pageName || void 0 === F.pageName || null == (n = F.pageName.PageNameProvider) ? void 0 : n.getInternalPageName(), i = [{
                            name: "searchClear",
                            type: oY.formInteraction,
                            context: oJ
                        }, {
                            kwd: l,
                            searchType: c,
                            sessionInfo: u,
                            page: s
                        }])) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(i) || ah(i) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()), R.current = !0, null == y || null == (o = y.current) || o.focus(), a("")
                    }, [m, y, a, r]),
                    P = (0, E.useCallback)(function() {
                        if (C(!0), R.current) {
                            R.current = !1;
                            return
                        }
                        a()
                    }, [a]),
                    k = function() {
                        C(!1)
                    },
                    L = (0, E.useCallback)(function(t) {
                        a(t.target.value)
                    }, [a]),
                    U = A()("navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3", {
                        "navbar-search-open": o && r.length > 0,
                        shown: f
                    }),
                    D = A()("search-landing-root", {
                        "search-landing-root-open": 0 === r.length && x
                    }),
                    M = x && (!N && 0 === r.length || r.length > 0),
                    _ = A()("search-overlay", {
                        "search-overlay-show": M
                    }),
                    B = e_.isAutocompleteSuggestionsIXPTestEnabled() || b;
                return (0, oD.useOnClickOutside)([y, g, S], i), (0, E.useEffect)(function() {
                    S.current && ee.SearchLandingService.mountSearchLanding()
                }, [S]), (0, h.jsxs)(j().Fragment, {
                    children: [(0, h.jsxs)("div", {
                        "data-testid": "navigation-search-input",
                        className: U,
                        role: "search",
                        children: [(0, h.jsxs)("div", {
                            className: "input-group",
                            children: [(0, h.jsx)("form", {
                                name: "search-form",
                                onSubmit: u,
                                action: "/search",
                                children: B ? (0, h.jsxs)("div", {
                                    className: "form-has-feedback",
                                    children: [(0, h.jsx)("input", {
                                        ref: y,
                                        id: "navbar-search-input",
                                        type: "search",
                                        name: "search-bar",
                                        "data-testid": "navigation-search-input-field",
                                        className: "form-control input-field new-input-field",
                                        value: r,
                                        onChange: L,
                                        placeholder: n("Label.sSearch"),
                                        maxLength: "120",
                                        onFocus: P,
                                        onBlur: k,
                                        onKeyDown: s,
                                        onKeyUp: d,
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false"
                                    }), r.length > 0 && (0, h.jsx)("span", {
                                        "data-testid": "navigation-search-input-clear-button",
                                        tabIndex: 0,
                                        role: "button",
                                        "aria-label": "Clear Search",
                                        onClick: T,
                                        onKeyDown: T,
                                        className: "clear-search icon-actions-clear-sm",
                                        children: (0, h.jsx)("span", {})
                                    })]
                                }) : (0, h.jsx)("input", {
                                    ref: y,
                                    id: "navbar-search-input",
                                    type: "search",
                                    name: "search-bar",
                                    "data-testid": "navigation-search-input-field",
                                    className: "form-control input-field",
                                    value: r,
                                    onChange: L,
                                    placeholder: n("Label.sSearch"),
                                    maxLength: "120",
                                    onFocus: P,
                                    onBlur: k,
                                    onKeyDown: s,
                                    onKeyUp: d,
                                    autoComplete: "off"
                                })
                            }), (0, h.jsx)("div", {
                                className: "input-group-btn",
                                children: (0, h.jsx)("button", {
                                    "data-testid": "navigation-search-input-search-button",
                                    className: "input-addon-btn",
                                    type: "submit",
                                    children: (0, h.jsx)("span", {
                                        className: "icon-common-search-sm"
                                    })
                                })
                            })]
                        }), (0, h.jsx)("ul", {
                            ref: g,
                            className: A()("dropdown-menu", {
                                "new-dropdown-menu": B
                            }),
                            role: "menu",
                            onMouseEnter: function() {
                                l(!0)
                            },
                            onMouseLeave: function() {
                                l(!1)
                            },
                            children: B ? (0, h.jsx)(ap, {
                                translate: n,
                                searchInput: r,
                                indexOfSelectedOption: c,
                                searchSuggestions: p,
                                autocompleteSessionInfo: m,
                                resetSessionInfo: v
                            }) : (0, h.jsx)(ar, {
                                translate: n,
                                searchInput: r,
                                indexOfSelectedOption: c,
                                autocompleteSessionInfo: m,
                                resetSessionInfo: v
                            })
                        }), (0, h.jsx)("div", {
                            ref: S,
                            id: "search-landing-root",
                            "data-testid": "search-landing-root",
                            className: D
                        })]
                    }), (0, h.jsx)("div", {
                        className: _
                    })]
                })
            }

            function ay(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function ag(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }

            function aS(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(o, a) {
                        var i = t.apply(n, r);

                        function l(t) {
                            ag(i, o, a, l, c, "next", t)
                        }

                        function c(t) {
                            ag(i, o, a, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function aw(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || aE(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ax(t) {
                return function(t) {
                    if (Array.isArray(t)) return ay(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || aE(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function aE(t, n) {
                if (t) {
                    if ("string" == typeof t) return ay(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ay(t, n)
                }
            }

            function aj(t, n) {
                var r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function c(c) {
                    return function(u) {
                        var s = [c, u];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                            switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                    a = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, o = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < a[1]) {
                                        i.label = a[1], a = s;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2], i.ops.push(s);
                                        break
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], o = 0
                        } finally {
                            r = a = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function aC(t) {
                var n = t.translate,
                    r = t.isUniverseSearchShown,
                    o = aw((0, E.useState)(eU(window.location.search).keyword || ""), 2),
                    a = o[0],
                    i = o[1],
                    l = (0, oD.useDebounce)(a, e_.debounceTimeout),
                    c = (0, oD.usePrevious)(l),
                    u = aw((0, E.useState)(null), 2),
                    s = u[0],
                    d = u[1],
                    f = aw((0, E.useState)(o0()), 2),
                    p = f[0],
                    m = f[1],
                    v = aw((0, E.useState)(o0()), 2),
                    b = v[0],
                    y = v[1],
                    g = aw((0, E.useState)(!1), 2),
                    S = g[0],
                    w = g[1],
                    x = aw((0, E.useState)(!0), 2),
                    j = x[0],
                    C = x[1],
                    A = aw((0, E.useState)(!1), 2),
                    O = A[0],
                    N = A[1],
                    I = aw((0, E.useState)(0), 2),
                    R = I[0],
                    T = I[1],
                    P = aw((0, E.useState)(!1), 2),
                    k = P[0],
                    L = P[1],
                    U = aw((0, E.useState)(e_.isAutocompleteSuggestionsIXPTestEnabled() ? ek() : eP()), 2),
                    D = U[0],
                    M = U[1],
                    B = D.findIndex(function(t) {
                        return t.label === _.gameSearchLink.label
                    }),
                    q = ek().findIndex(function(t) {
                        return t.label === _.avatarSearchLink.label
                    }),
                    W = oX(),
                    z = eO.pageSort.some(function(t) {
                        return window.location.pathname.indexOf(t) > -1
                    }),
                    V = function(t) {
                        if (t) {
                            if (z) {
                                var n = -1 === s.findIndex(function(t) {
                                        return t.searchQuery === l.toLowerCase() && oK(t)
                                    }),
                                    r = t.filter(function(t) {
                                        return t.searchQuery !== l.toLowerCase() || oK(t)
                                    });
                                return ax(D.slice(0, n ? q + 1 : q)).concat(ax(r), ax(D.slice(q + 1)))
                            }
                            if (e_.isSpecialTreatmentAutocompleteRestricted()) return D;
                            var o = -1 === t.findIndex(function(t) {
                                    return t.searchQuery === l.toLowerCase() && t.type === oz.GameSuggestion
                                }),
                                a = t.filter(function(t) {
                                    return t.searchQuery !== l.toLowerCase() || t.type === oz.GameSuggestion
                                }).slice(0, e_.isSpecialTreatment() ? e_.numberOfSpecialTreatmentAutocompleteSuggestions : e_.numberOfAutocompleteSuggestions());
                            return ax(D.slice(0, o ? B + 1 : B)).concat(ax(a), ax(D.slice(B + 1)))
                        }
                        return D
                    },
                    G = (0, E.useMemo)(function() {
                        return V(s)
                    }, [s, D]),
                    K = function(t, n) {
                        var r = 0,
                            o = [];
                        return t.forEach(function(t) {
                            r < e_.avatarAutocompleteSuggestionLimit && t.Query !== n && (o.push(t), r += 1)
                        }), o
                    },
                    H = G.length;
                (0, E.useEffect)(function() {
                    if (!j) {
                        var t;
                        (t = et.eventStreamService).sendEvent.apply(t, ax(o9(a, o1, o5, p)))
                    }
                    C(!1), z && M(ek()), aS(function() {
                        var t, n, r, o, a, i, u, s, f, m, v;
                        return aj(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (!(void 0 !== l && "" !== l && l.length <= e_.debouncedSearchInputMaxLength)) return [3, 9];
                                    if (d(null), t = Date.now(), !z) return [3, 5];
                                    h.label = 1;
                                case 1:
                                    return h.trys.push([1, 3, , 4]), r = Date.now(), [4, oV(l, W, e_.avatarAutocompleteQueryPaddingAmount, c, k)];
                                case 2:
                                    return a = K((o = h.sent()).Data, l), (n = et.eventStreamService).sendEvent.apply(n, ax(o7(l, c, !1, a, o.Args.Algo, r - t, e_.debounceTimeout, "", F.pageName.PageNameProvider.getInternalPageName(), "" !== c))), d(a), [3, 4];
                                case 3:
                                    return i = h.sent(), F.httpService.isCancelled(i) || d([]), L(!0), [3, 4];
                                case 4:
                                    return [3, 9];
                                case 5:
                                    if (!e_.isAutocompleteSuggestionsIXPTestEnabled()) return [3, 9];
                                    h.label = 6;
                                case 6:
                                    var b;
                                    return h.trys.push([6, 8, , 9]), [4, (b = l, o_(function() {
                                        return oq(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return oW.cancel(), oW = F.httpService.createCancelToken(), [4, F.httpService.get(oF(oB({}, e_.getSuggestionUrl), {
                                                        url: e_.getSuggestionUrl.url + encodeURIComponent(b.toLowerCase()),
                                                        cancelToken: oW.token
                                                    }))];
                                                case 1:
                                                    return [2, t.sent().data]
                                            }
                                        })
                                    })())];
                                case 7:
                                    return s = h.sent(), f = Date.now(), m = V(s.entries), (u = et.eventStreamService).sendEvent.apply(u, ax(o7(l, c, !1, oZ(m, l), s.algorithmName, f - t, e_.debounceTimeout, p, F.pageName.PageNameProvider.getInternalPageName(), !1))), d(s.entries), [3, 9];
                                case 8:
                                    return v = h.sent(), F.httpService.isCancelled(v) || d([]), [3, 9];
                                case 9:
                                    return [2]
                            }
                        })
                    })()
                }, [l]);
                var $ = function() {
                        m(o0())
                    },
                    Q = function() {
                        var t = o0();
                        y(t), ee.SearchLandingService.updateSessionInfo(t)
                    },
                    X = (0, E.useCallback)(function() {
                        var t, n = o0();
                        ee.SearchLandingService.showSearchLanding(n), (t = et.eventStreamService).sendEvent.apply(t, ax(o9(void 0, o2, o8, void 0, n))), y(n)
                    }, []),
                    Z = (0, E.useCallback)(function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                        return aS(function() {
                            var n, r, o;
                            return aj(this, function(l) {
                                var c, u, s, d;
                                return i(t), t.length < a.length && (n = et.eventStreamService).sendEvent.apply(n, ax((c = a, u = t, s = void 0, d = p, [{
                                    name: "searchTextTrim",
                                    type: oY.formInteraction,
                                    context: oJ
                                }, {
                                    kwd: c,
                                    resultingKwd: u,
                                    searchType: s,
                                    sessionInfo: d
                                }]))), 0 === t.length && (X(), o = o0(), (r = et.eventStreamService).sendEvent.apply(r, ax(o9(t, o1, o8, o))), m(o), T(0)), O || w(!0), [2]
                            })
                        })()
                    }, [p, X, O, a]),
                    Y = function() {
                        w(!1)
                    };
                return (0, E.useEffect)(function() {
                    return window.addEventListener("setSearchMenuClose", Y),
                        function() {
                            window.removeEventListener("setSearchMenuClose", Y)
                        }
                }, [S]), (0, h.jsx)(ab, {
                    searchInput: a,
                    handleSearchOpenOrInputChange: Z,
                    closeMenu: function() {
                        var t, n;
                        S && (0 === a.length ? (t = et.eventStreamService).sendEvent.apply(t, ax(o9(null, o2, o6, void 0, b))) : (n = et.eventStreamService).sendEvent.apply(n, ax(o9(a, o1, o3, p))), w(!1))
                    },
                    setIsMenuHover: N,
                    isMenuOpen: S,
                    indexOfSelectedOption: R,
                    onSubmit: function(t) {
                        t.preventDefault(), t.stopPropagation()
                    },
                    onKeyDown: function(t) {
                        var n = R;
                        S && (t.keyCode === en.arrowUp || t.keyCode === en.arrowDown || t.keyCode === en.tab) && (t.stopPropagation(), t.preventDefault(), t.keyCode === en.arrowUp ? n -= 1 : n += 1, (n %= H) < 0 && (n = H + n), T(n))
                    },
                    onKeyUp: function(t) {
                        if (t.keyCode === en.enter && (t.stopPropagation(), t.preventDefault(), 0 !== a.length)) {
                            var n = G[R];
                            oG(n) ? ((o = et.eventStreamService).sendEvent.apply(o, ax(o4(l, void 0, R, n.searchQuery, oH(n), oZ(G, a), p))), (i = et.eventStreamService).sendEvent.apply(i, ax(ae(1, F.pageName.PageNameProvider.getInternalPageName())))) : ((c = et.eventStreamService).sendEvent.apply(c, ax(o4(l, void 0, R, l, o$(n), oZ(G, a), p))), (u = et.eventStreamService).sendEvent.apply(u, ax(ae(0, F.pageName.PageNameProvider.getInternalPageName())))), $();
                            var r = oQ(n, t);
                            if (r) {
                                var o, i, c, u, s, d = r;
                                if ("Label.CreatorStore" === n.label && (d = _.creatorStoreUrl, (null == t || null == (s = t.target) ? void 0 : s.value) && (d += encodeURIComponent(t.target.value))), document.getElementById("routing")) {
                                    var f = new URL(d);
                                    if (f.origin === window.location.origin && "/catalog" === ee.Endpoints.removeUrlLocale(f.pathname).toLowerCase()) {
                                        var m = new CustomEvent("externalNavigation", {
                                            detail: {
                                                url: d
                                            }
                                        });
                                        window.dispatchEvent(m), w(!1), document.getElementById("navbar-search-input").blur();
                                        return
                                    }
                                }
                                window.location = d
                            }
                        }
                    },
                    isUniverseSearchShown: r,
                    translate: n,
                    searchSuggestions: G,
                    autocompleteSessionInfo: p,
                    resetSessionInfo: function() {
                        $(), Q()
                    },
                    isAvatarAutocompleteEnabled: z
                })
            }
            ac.propTypes = {
                translate: J().func.isRequired,
                selected: J().bool.isRequired,
                suggestion: J().shape({
                    type: J().number.isRequired,
                    score: J().number.isRequired,
                    universeId: J().number,
                    canonicalTitle: J().string,
                    thumbnailUrl: J().string,
                    searchQuery: J().string.isRequired,
                    trendingSearchStartDateTime: J().string
                }).isRequired,
                onClick: J().func.isRequired
            }, au.propTypes = {
                translate: J().func.isRequired,
                selected: J().bool.isRequired,
                suggestion: J().shape({
                    Query: J().string
                }).isRequired,
                onClick: J().func.isRequired
            }, as.propTypes = {
                translate: J().func.isRequired,
                selected: J().bool.isRequired,
                searchInput: J().string.isRequired,
                suggestion: J().shape({
                    url: J().string.isRequired,
                    label: J().string.isRequired,
                    pageSort: J().arrayOf(J().string).isRequired,
                    icon: J().string.isRequired
                }).isRequired,
                onClick: J().func.isRequired
            }, ap.propTypes = {
                translate: J().func.isRequired,
                searchInput: J().string.isRequired,
                indexOfSelectedOption: J().number.isRequired,
                searchSuggestions: J().arrayOf(J().oneOfType([J().shape({
                    type: J().number.isRequired,
                    score: J().number.isRequired,
                    universeId: J().number.isRequired,
                    canonicalTitle: J().string,
                    thumbnailUrl: J().string,
                    searchQuery: J().string.isRequired,
                    trendingSearchStartDateTime: J().string
                }), J().shape({
                    url: J().string.isRequired,
                    label: J().string.isRequired,
                    pageSort: J().arrayOf(J().string).isRequired,
                    icon: J().string.isRequired
                }), J().shape({
                    Query: J().string.isRequired,
                    Score: J().number.isRequired
                })])).isRequired,
                autocompleteSessionInfo: J().string.isRequired,
                resetSessionInfo: J().func.isRequired
            }, ab.defaultProps = {
                isUniverseSearchShown: !0,
                isAvatarAutocompleteEnabled: !1
            }, ab.propTypes = {
                translate: J().func.isRequired,
                searchInput: J().string.isRequired,
                isMenuOpen: J().bool.isRequired,
                handleSearchOpenOrInputChange: J().func.isRequired,
                closeMenu: J().func.isRequired,
                setIsMenuHover: J().func.isRequired,
                indexOfSelectedOption: J().number.isRequired,
                onSubmit: J().func.isRequired,
                onKeyDown: J().func.isRequired,
                onKeyUp: J().func.isRequired,
                isUniverseSearchShown: J().bool,
                isAvatarAutocompleteEnabled: J().bool,
                searchSuggestions: J().arrayOf(J().oneOfType([J().shape({
                    type: J().number.isRequired,
                    score: J().number.isRequired,
                    universeId: J().number.isRequired,
                    canonicalTitle: J().string,
                    thumbnailUrl: J().string,
                    searchQuery: J().string.isRequired,
                    trendingSearchStartDateTime: J().string
                }), J().shape({
                    url: J().string.isRequired,
                    label: J().string.isRequired,
                    pageSort: J().arrayOf(J().string).isRequired,
                    icon: J().string
                }), J().shape({
                    query: J().string.isRequired,
                    score: J().number.isRequired
                })])).isRequired,
                autocompleteSessionInfo: J().string.isRequired,
                resetSessionInfo: J().func.isRequired
            }, aC.defaultProps = {
                isUniverseSearchShown: !0
            }, aC.propTypes = {
                translate: J().func.isRequired,
                isUniverseSearchShown: J().bool
            };
            var aA = (0, S.withTranslations)(aC, oE.P),
                aO = window.angular,
                aN = r.n(aO);

            function aI(t) {
                return (aI = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function aR(t, n) {
                return (aR = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function aT() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (aT = function() {
                    return !!t
                })()
            }
            var aP = function(t) {
                var n;
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");

                function r() {
                    var t, n;
                    if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
                    return t = r, n = arguments, t = aI(t),
                        function(t, n) {
                            var r;
                            if (n && ("object" == ((r = n) && "undefined" != typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r) || "function" == typeof n)) return n;
                            if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(this, aT() ? Reflect.construct(t, n || [], aI(this).constructor) : t.apply(this, n))
                }
                return r.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: r,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && aR(r, t), n = [{
                        key: "componentDidMount",
                        value: function() {
                            try {
                                aN().module("notificationStreamIcon"), aN().bootstrap(this.container, ["notificationStreamIcon"])
                            } catch (t) {
                                console.error(t)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return (0, h.jsx)("span", {
                                ref: function(n) {
                                    t.container = n
                                },
                                className: "nav-robux-icon rbx-menu-item",
                                children: (0, h.jsx)("span", {
                                    id: "notification-stream-icon-container",
                                    "notification-stream-indicator": "true"
                                })
                            })
                        }
                    }],
                    function(t, n) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }(r.prototype, n), r
            }(j().Component);

            function ak(t) {
                return (ak = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function aL(t, n) {
                return (aL = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function aU() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (t) {}
                return (aU = function() {
                    return !!t
                })()
            }
            var aD = function(t) {
                    var n;
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");

                    function r() {
                        var t, n;
                        if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
                        return t = r, n = arguments, t = ak(t),
                            function(t, n) {
                                var r;
                                if (n && ("object" == ((r = n) && "undefined" != typeof Symbol && r.constructor === Symbol ? "symbol" : typeof r) || "function" == typeof n)) return n;
                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }(this, aU() ? Reflect.construct(t, n || [], ak(this).constructor) : t.apply(this, n))
                    }
                    return r.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: r,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && aL(r, t), n = [{
                            key: "componentDidMount",
                            value: function() {
                                try {
                                    aN().module("notificationStream"), aN().bootstrap(this.container, ["notificationStream"])
                                } catch (t) {
                                    console.error(t)
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = this,
                                    n = eL(),
                                    r = A()("notification-stream-base", n);
                                return (0, h.jsx)("div", {
                                    ref: function(n) {
                                        t.container = n
                                    },
                                    className: r,
                                    "notification-stream-base-view": "true"
                                })
                            }
                        }],
                        function(t, n) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                            }
                        }(r.prototype, n), r
                }(j().Component),
                aM = "nsCloseContent",
                a_ = "click",
                aB = {};

            function aF() {
                var t = (0, E.useRef)();
                return (0, h.jsx)("li", {
                    id: "navbar-stream",
                    ref: t,
                    className: "navbar-icon-item navbar-stream notification-margins",
                    children: (0, h.jsx)(O.Popover, {
                        id: "notification-stream-popover",
                        trigger: "click",
                        placement: "bottom",
                        closeOnClick: !1,
                        button: (0, h.jsx)("button", {
                            type: "button",
                            className: "btn-uiblox-common-common-notification-bell-md",
                            children: (0, h.jsx)(aP, {})
                        }),
                        container: t.current,
                        onExit: function() {
                            window.dispatchEvent(new Event("Roblox.NotificationStream.StreamClosed")), et.eventStreamService.sendEventWithTarget(aM, a_, aB)
                        },
                        role: "menu",
                        children: (0, h.jsx)(aD, {})
                    })
                })
            }

            function aq(t) {
                var n = t.accountNotificationCount,
                    r = A()("notification-red notification nav-setting-highlight", {
                        hidden: 0 === n
                    });
                return (0, h.jsxs)("span", {
                    id: "settings-icon",
                    className: "nav-settings-icon rbx-menu-item",
                    children: [(0, h.jsx)("span", {
                        className: "icon-nav-settings roblox-popover-close",
                        id: "nav-settings"
                    }), (0, h.jsx)("span", {
                        className: r,
                        children: n
                    })]
                })
            }
            aF.propTypes = {}, aq.defaultProps = {
                accountNotificationCount: 0
            }, aq.propTypes = {
                accountNotificationCount: J().number
            };
            var aW = "CachedUserId";

            function az(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }
            var aV = function() {
                    var t;
                    return (t = function() {
                        return function(t, n) {
                            var r, o, a, i = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & a[0]) throw a[1];
                                        return a[1]
                                    },
                                    trys: [],
                                    ops: []
                                },
                                l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                            return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                                return this
                            }), l;

                            function c(c) {
                                return function(u) {
                                    var s = [c, u];
                                    if (r) throw TypeError("Generator is already executing.");
                                    for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                                        if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                                        switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                            case 0:
                                            case 1:
                                                a = s;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, o = s[1], s = [0];
                                                continue;
                                            case 7:
                                                s = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                    i.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && i.label < a[1]) {
                                                    i.label = a[1], a = s;
                                                    break
                                                }
                                                if (a && i.label < a[2]) {
                                                    i.label = a[2], i.ops.push(s);
                                                    break
                                                }
                                                a[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        s = n.call(t, i)
                                    } catch (t) {
                                        s = [6, t], o = 0
                                    } finally {
                                        r = a = 0
                                    }
                                    if (5 & s[0]) throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, (0, B.callBehaviour)("intl-auth-compliance")];
                                case 1:
                                    return [2, t.sent()]
                            }
                        })
                    }, function() {
                        var n = this,
                            r = arguments;
                        return new Promise(function(o, a) {
                            var i = t.apply(n, r);

                            function l(t) {
                                az(i, o, a, l, c, "next", t)
                            }

                            function c(t) {
                                az(i, o, a, l, c, "throw", t)
                            }
                            l(void 0)
                        })
                    })()
                },
                aG = "authButtonClick",
                aK = "authPageLoad",
                aH = "authClientError",
                a$ = "homepage",
                aQ = "accountSwitcherStatus",
                aX = "cachedUserChanged",
                aZ = "signInRedirect",
                aY = "logout",
                aJ = "switchAccount",
                a0 = "signIn",
                a1 = function() {
                    et.eventStreamService.sendEventWithTarget(aG, a$, {
                        btn: aY
                    })
                },
                a2 = function(t) {
                    et.eventStreamService.sendEventWithTarget(aG, a$, {
                        btn: aJ,
                        state: t
                    })
                },
                a8 = function() {
                    et.eventStreamService.sendEventWithTarget(aK, aZ, {})
                },
                a5 = function() {
                    et.eventStreamService.sendEventWithTarget(aG, aZ, {
                        btn: a0
                    })
                },
                a3 = function(t) {
                    et.eventStreamService.sendEventWithTarget(aK, aQ, {
                        state: t.toString()
                    })
                };

            function a6(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function a4(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }

            function a7(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(o, a) {
                        var i = t.apply(n, r);

                        function l(t) {
                            a4(i, o, a, l, c, "next", t)
                        }

                        function c(t) {
                            a4(i, o, a, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function a9(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return a6(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a6(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(t, n) {
                var r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function c(c) {
                    return function(u) {
                        var s = [c, u];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                            if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                            switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                    a = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, o = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < a[1]) {
                                        i.label = a[1], a = s;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2], i.ops.push(s);
                                        break
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], o = 0
                        } finally {
                            r = a = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var it = F.urlService.getQueryParam,
                ir = F.urlService.composeQueryString,
                io = function() {
                    return (0, T.getAbsoluteUrl)("/CreateAccount")
                },
                ia = function() {
                    var t = it("returnUrl") || window.location.href;
                    return t === q() || t === io() ? "" : t
                },
                ii = function() {
                    var t, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (I.authenticatedUser.isAuthenticated && r) t = ia(), n = io();
                    else {
                        var o = (t = it("returnUrl") || window.location.href).toLowerCase();
                        t = o.startsWith(q().toLowerCase()) || o.startsWith((0, T.getAbsoluteUrl)("/newLogin").toLowerCase()) ? "" : t, n = (0, T.getAbsoluteUrl)("/account/signupredir")
                    }
                    return "".concat(n, "?").concat(ir({
                        returnUrl: t
                    }))
                },
                il = function() {
                    var t = (null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService ? void 0 : ee.AccountSwitcherService.isAccountSwitcherAvailable()) ? ia() : it("returnUrl") || window.location.href,
                        n = q();
                    return "".concat(n, "?").concat(ir({
                        returnUrl: t
                    }))
                },
                ic = function() {
                    return H().then(function() {
                        return a7(function() {
                            var t;
                            return ie(this, function(n) {
                                return document.dispatchEvent(new CustomEvent(er)), aN().isUndefined(aN().element("#chat-container").scope()) || (t = aN().element("#chat-container").scope()).$digest(t.$broadcast("Roblox.Chat.destroyChatCookie")), et.localStorageService.setLocalStorage(aW, null), window.location.reload(), [2]
                            })
                        })()
                    })
                },
                iu = function() {
                    window.location.href = il()
                },
                is = function(t) {
                    t.stopPropagation(), t.preventDefault(), a1(), null === ee.EmailVerificationService || void 0 === ee.EmailVerificationService || ee.EmailVerificationService.handleUserEmailUpsellAtLogout(ic).then(function(t) {
                        (!t || t.emailAddress) && ic()
                    })
                },
                id = function(t) {
                    if (t.stopPropagation(), t.preventDefault(), a2(window.location.href), et.localStorageService.setLocalStorage(aW, null), !aN().isUndefined(aN().element("#chat-container").scope())) {
                        var n = aN().element("#chat-container").scope();
                        n.$digest(n.$broadcast("Roblox.Chat.destroyChatCookie"))
                    }
                    var r = {
                        containerId: "navigation-account-switcher-container",
                        onAccountSwitched: function() {
                            et.localStorageService.setLocalStorage(em, !0), window.location.href = (0, T.getAbsoluteUrl)("/home")
                        },
                        handleAddAccount: function() {
                            window.location.href = q()
                        }
                    };
                    a7(function() {
                        return ie(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService ? void 0 : ee.AccountSwitcherService.isAccountSwitcherAvailable()];
                                case 1:
                                    return t.sent() && (null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService || ee.AccountSwitcherService.renderAccountSwitcher(r)), [2]
                            }
                        })
                    })()
                },
                ip = function() {
                    var t, n = null != (t = ("undefined" != typeof window && window.location ? window.location.pathname : "").toLowerCase()) ? t : "";
                    return !n.startsWith("/login") && !n.startsWith("/newlogin")
                },
                im = function() {
                    return a7(function() {
                        var t, n, r, o, a, i;
                        return ie(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 2, , 3]), [4, Promise.all([oI().getAllValuesForLayer("Website.LandingPage"), aV()])];
                                case 1:
                                    return n = (t = a9.apply(void 0, [l.sent(), 2]))[0], r = t[1], a = null != (o = n.IsVngLandingPageRedirectEnabled) && o, [2, null != (i = r.isVNGComplianceEnabled) && i && a];
                                case 2:
                                    return l.sent(), [2, !1];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                };

            function iv(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function ih(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return iv(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iv(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ib = _.settingsUrl,
                iy = _.quickLoginUrl,
                ig = "quickLogin",
                iS = "logout",
                iw = "settings",
                ix = "switchAccountKey",
                iE = ig,
                ij = iS,
                iC = ix,
                iA = function(t) {
                    var n = t.translate,
                        r = t.accountNotificationCount,
                        o = void 0 === r ? 0 : r,
                        a = t.isCrossDeviceLoginCodeValidationDisplayed,
                        i = void 0 !== a && a,
                        l = A()("notification-blue notification nav-setting-highlight", {
                            hidden: 0 === o
                        }),
                        c = ih(ee.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser(), 1)[0];
                    return (0, h.jsx)(j().Fragment, {
                        children: Object.entries(ib).map(function(t) {
                            var r = ih(t, 2),
                                a = r[0],
                                u = r[1],
                                s = u.url,
                                d = u.label;
                            return (0, h.jsxs)("li", {
                                children: [a === ij && (0, h.jsx)(O.Link, {
                                    className: "rbx-menu-item logout-menu-item",
                                    onClick: is,
                                    url: "#",
                                    children: n(d)
                                }, a), a === iC && c && (0, h.jsx)(O.Link, {
                                    className: "rbx-menu-item account-switch-menu-item",
                                    onClick: id,
                                    url: "#",
                                    children: n(d)
                                }, a), a === iE && i && (0, h.jsx)(O.Link, {
                                    className: "rbx-menu-item",
                                    url: iy,
                                    children: n(d)
                                }, a), a !== ij && a !== iE && a !== iC && (0, h.jsxs)(O.Link, {
                                    cssClasses: "rbx-menu-item",
                                    url: s,
                                    children: [n(d), a === iw && (0, h.jsx)("span", {
                                        className: l,
                                        children: o
                                    })]
                                }, a)]
                            }, a)
                        })
                    })
                };

            function iO(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function iN(t, n, r, o, a, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(o, a)
            }

            function iI(t) {
                var n, r = t.translate,
                    o = t.accountNotificationCount,
                    a = (n = (0, E.useState)(!1), function(t) {
                        if (Array.isArray(t)) return t
                    }(n) || function(t, n) {
                        var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    l || null == a.return || a.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return i
                        }
                    }(n, 2) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return iO(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iO(t, n)
                        }
                    }(n, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = a[0],
                    l = a[1],
                    c = (0, E.useRef)();
                return (0, E.useEffect)(function() {
                    var t;
                    l(!0), a3(!!(null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService ? void 0 : ee.AccountSwitcherService.getStoredAccountSwitcherBlob())), (t = function() {
                        return function(t, n) {
                            var r, o, a, i = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & a[0]) throw a[1];
                                        return a[1]
                                    },
                                    trys: [],
                                    ops: []
                                },
                                l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                            return l.next = c(0), l.throw = c(1), l.return = c(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                                return this
                            }), l;

                            function c(c) {
                                return function(u) {
                                    var s = [c, u];
                                    if (r) throw TypeError("Generator is already executing.");
                                    for (; l && (l = 0, s[0] && (i = 0)), i;) try {
                                        if (r = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                                        switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                            case 0:
                                            case 1:
                                                a = s;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, o = s[1], s = [0];
                                                continue;
                                            case 7:
                                                s = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                    i.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && i.label < a[1]) {
                                                    i.label = a[1], a = s;
                                                    break
                                                }
                                                if (a && i.label < a[2]) {
                                                    i.label = a[2], i.ops.push(s);
                                                    break
                                                }
                                                a[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        s = n.call(t, i)
                                    } catch (t) {
                                        s = [6, t], o = 0
                                    } finally {
                                        r = a = 0
                                    }
                                    if (5 & s[0]) throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService ? void 0 : ee.AccountSwitcherService.syncAccountSwitcherBlobIfNeeded()];
                                case 1:
                                    return t.sent(), [3, 3];
                                case 2:
                                    return console.warn("account switching has issues", t.sent()), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    }, function() {
                        var n = this,
                            r = arguments;
                        return new Promise(function(o, a) {
                            var i = t.apply(n, r);

                            function l(t) {
                                iN(i, o, a, l, c, "next", t)
                            }

                            function c(t) {
                                iN(i, o, a, l, c, "throw", t)
                            }
                            l(void 0)
                        })
                    })()
                }, []), (0, h.jsx)("li", {
                    id: "navbar-settings",
                    ref: c,
                    className: "navbar-icon-item",
                    children: (0, h.jsx)(O.Popover, {
                        id: "settings-popover",
                        trigger: "click",
                        placement: "bottom",
                        className: eL(),
                        containerPadding: 20,
                        button: (0, h.jsx)("button", {
                            type: "button",
                            className: "btn-navigation-nav-settings-md",
                            children: (0, h.jsx)(aq, {
                                accountNotificationCount: o
                            })
                        }),
                        container: c.current,
                        role: "menu",
                        children: (0, h.jsx)("div", {
                            className: eL(),
                            children: (0, h.jsx)("ul", {
                                id: "settings-popover-menu",
                                className: "dropdown-menu",
                                children: (0, h.jsx)(iA, {
                                    isCrossDeviceLoginCodeValidationDisplayed: i,
                                    translate: r,
                                    accountNotificationCount: o
                                })
                            })
                        })
                    })
                })
            }
            iI.defaultProps = {
                accountNotificationCount: 0
            }, iI.propTypes = {
                translate: J().func.isRequired,
                accountNotificationCount: J().number
            };
            var iR = {
                VIRTUAL_ITEM: "VIRTUAL_ITEM",
                UPDATE: "UPDATE",
                PERSONALIZED_BONUS_ITEMS: "PERSONALIZED_BONUS_ITEMS"
            };

            function iT(t) {
                var n = t.robuxAmount,
                    r = t.isGetCurrencyCallDone,
                    o = t.robuxError,
                    a = t.creditDisplayConfig,
                    i = t.robuxBadgeType,
                    l = o ? "?" : F.abbreviateNumber.getTruncValue(n),
                    c = A()("notification-red robux-badge", {
                        hidden: !i
                    }),
                    u = (0, h.jsxs)(E.Fragment, {
                        children: [(0, h.jsx)("span", {
                            className: "icon-robux-28x28 roblox-popover-close",
                            id: "nav-robux"
                        }), a !== ef && (0, h.jsx)("span", {
                            className: "rbx-text-navbar-right text-header",
                            id: "nav-robux-amount",
                            children: r && l
                        })]
                    });
                return (0, h.jsxs)("span", {
                    id: "nav-robux-icon",
                    className: "nav-robux-icon rbx-menu-item",
                    children: [o ? (0, h.jsx)(O.Tooltip, {
                        id: "current-error",
                        content: o,
                        placement: "bottom",
                        containerClassName: "nav-buy-robux-icon-tooltip-container",
                        children: u
                    }) : u, (0, h.jsx)("span", {
                        className: c
                    })]
                })
            }
            iT.defaultProps = {
                robuxAmount: 0,
                robuxError: "",
                robuxBadgeType: null
            }, iT.propTypes = {
                robuxAmount: J().number,
                robuxError: J().string,
                isGetCurrencyCallDone: J().bool.isRequired,
                creditDisplayConfig: J().string.isRequired,
                robuxBadgeType: J().oneOf(Object.values(iR))
            };
            var iP = function(t) {
                    switch (t) {
                        case iR.VIRTUAL_ITEM:
                            var n;
                            return "prevLocalVirtualItemStartTimeSeconds".concat(null != (n = null === ee.CurrentUser || void 0 === ee.CurrentUser ? void 0 : ee.CurrentUser.userId) ? n : "");
                        case iR.UPDATE:
                            return "hasSeenRobuxUpdate";
                        case iR.PERSONALIZED_BONUS_ITEMS:
                            return "hasSeenRobuxPersonalizedBonusItems";
                        default:
                            return ""
                    }
                },
                ik = function(t) {
                    switch (t) {
                        case iR.VIRTUAL_ITEM:
                        case iR.PERSONALIZED_BONUS_ITEMS:
                            return "Labels.NewItem";
                        case iR.UPDATE:
                            return "Labels.NewUpdate";
                        default:
                            return ""
                    }
                },
                iL = function(t) {
                    var n = iP(t);
                    switch (t) {
                        case iR.VIRTUAL_ITEM:
                            et.localStorageService.setLocalStorage(n, Math.floor(Date.now() / 1e3));
                            break;
                        case iR.UPDATE:
                        case iR.PERSONALIZED_BONUS_ITEMS:
                            et.localStorageService.setLocalStorage(n, "true")
                    }
                },
                iU = function(t) {
                    var n = iP(t);
                    return et.localStorageService.getLocalStorage(n)
                };

            function iD(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function iM(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return iD(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iD(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var i_ = _.buyRobuxUrl,
                iB = _.redeemUrl,
                iF = _.buyGiftCardUrl,
                iq = new Map;

            function iW(t) {
                var n = t.creditAmount,
                    r = t.creditDisplayConfig,
                    o = t.creditError,
                    a = t.currencyCode,
                    i = t.isEligibleForVng,
                    l = t.robuxAmount,
                    c = t.robuxError,
                    u = t.onBuyGiftCardClick,
                    s = t.onBuyRobuxExternalClick,
                    d = t.robuxBadgeType,
                    f = t.translate,
                    p = iM((0, E.useState)(!0), 2),
                    m = p[0],
                    v = p[1],
                    b = iM((0, E.useState)(!1), 2),
                    y = b[0],
                    g = b[1],
                    S = c ? "?" : F.numberFormat.getNumberFormat(l),
                    w = function(t) {
                        et.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(et.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_ROBUX_PURCHASE, !1, et.paymentFlowAnalyticsService.ENUM_VIEW_NAME.NAVIGATION_DROPDOWN_MENU, et.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, t)
                    },
                    x = ik(d);
                return (0, E.useEffect)(function() {
                    l < eu && n < es && r !== ef && v(!1)
                }, [l, n, r]), (0, E.useEffect)(function() {
                    window.dispatchEvent(new CustomEvent("price-tag:render", {
                        detail: {
                            targetSelector: ".dropdown-credit-balance"
                        }
                    }))
                }, [r]), (0, E.useEffect)(function() {
                    iq.has(iF.cacheKey) ? g(iq.get(iF.cacheKey)) : Q().then(function(t) {
                        var n = t.data;
                        g(n.displayBuyGiftCardOption), iq.set(iF.cacheKey, n.displayBuyGiftCardOption)
                    })
                }, []), (0, h.jsxs)(E.Fragment, {
                    children: [(0, h.jsxs)("div", {
                        className: m ? "" : "wallet-hidden",
                        children: [(0, h.jsx)("li", {
                            className: "dropdown-wallet",
                            children: (0, h.jsxs)(O.Link, {
                                className: "dropdown-wallet-section",
                                children: [(0, h.jsx)("span", {
                                    className: "icon-robux-28x28",
                                    id: "nav-robux"
                                }), (0, h.jsx)("span", {
                                    id: "nav-robux-balance",
                                    children: S
                                })]
                            })
                        }), r !== ed && (0, h.jsx)("li", {
                            className: "dropdown-wallet",
                            children: (0, h.jsxs)(O.Link, {
                                className: "dropdown-wallet-section",
                                children: [(0, h.jsx)("span", {
                                    className: "icon-menu-wallet"
                                }), o ? "?" : (0, h.jsx)("span", {
                                    className: "dropdown-credit-balance",
                                    "data-amount": n,
                                    "data-currency-code": a
                                })]
                            })
                        }), (0, h.jsx)("li", {
                            className: "rbx-divider"
                        })]
                    }), i ? (0, h.jsx)("li", {
                        children: (0, h.jsx)("button", {
                            type: "button",
                            className: "rbx-menu-item",
                            onClick: s,
                            children: f(i_.buyRobux.label)
                        })
                    }) : (0, h.jsx)("li", {
                        className: "rbx-menu-item-container",
                        children: (0, h.jsx)(O.Link, {
                            cssClasses: "rbx-menu-item buy-robux-button",
                            url: i_.buyRobux.url,
                            onClick: function() {
                                w(et.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.BUY_ROBUX), iL(d)
                            },
                            children: (0, h.jsxs)("span", {
                                className: "buy-robux-link-container",
                                children: [f(i_.buyRobux.label), x && (0, h.jsx)("div", {
                                    className: "new-item-pill small",
                                    children: (0, h.jsx)("span", {
                                        className: "new-item-pill-text",
                                        children: f(x)
                                    })
                                })]
                            })
                        })
                    }), y && (0, h.jsx)("li", {
                        children: (0, h.jsx)("button", {
                            type: "button",
                            className: "rbx-menu-item",
                            onClick: u,
                            children: f(iF.label) || "Buy Gift Card"
                        })
                    }), (0, h.jsx)("li", {
                        children: (0, h.jsx)(O.Link, {
                            cssClasses: "rbx-menu-item",
                            url: i_.myTransactions.url,
                            children: f(i_.myTransactions.label)
                        })
                    }), (0, h.jsx)("li", {
                        children: (0, h.jsx)(O.Link, {
                            cssClasses: "rbx-menu-item",
                            url: iB.url,
                            children: f(iB.label)
                        })
                    })]
                })
            }

            function iz(t) {
                var n = t.creditAmount,
                    r = t.currencyCode,
                    o = t.creditError,
                    a = (0, h.jsxs)(E.Fragment, {
                        children: [(0, h.jsx)("span", {
                            className: "icon-menu-wallet roblox-popover-close",
                            id: "nav-credit-icon"
                        }), (0, h.jsx)("span", {
                            className: "rbx-text-navbar-right text-header",
                            id: "nav-robux-amount",
                            children: o ? (0, h.jsx)("div", {
                                className: "nav-credit-text",
                                children: "?"
                            }) : (0, h.jsx)("div", {
                                className: "credit-balance",
                                "data-amount": n,
                                "data-currency-code": r
                            })
                        })]
                    });
                return (0, E.useEffect)(function() {
                    window.dispatchEvent(new CustomEvent("price-tag:render", {
                        detail: {
                            targetSelector: ".credit-balance",
                            tagClassName: "navbar-compact nav-credit-text"
                        }
                    }))
                }, [n, r]), (0, h.jsx)("span", {
                    id: "nav-robux-icon",
                    className: "nav-robux-icon rbx-menu-item nav-credit",
                    children: a
                })
            }

            function iV(t) {
                var n = t.translate,
                    r = t.isShopModalOpen,
                    o = t.closeShopModal,
                    a = t.onModalContinue,
                    i = (0, h.jsxs)(j().Fragment, {
                        children: [(0, h.jsx)("p", {
                            className: "shop-description",
                            children: n("Description.RetailWebsiteRedirect")
                        }), (0, h.jsx)("p", {
                            className: "shop-warning",
                            children: n("Description.PurchaseAgeWarning")
                        })]
                    });
                return (0, h.jsx)(O.SimpleModal, {
                    title: n("Heading.LeavingRoblox"),
                    body: i,
                    show: r,
                    actionButtonShow: !0,
                    actionButtonText: n("Action.Continue"),
                    neutralButtonText: n("Action.Cancel"),
                    onAction: a,
                    onNeutral: o,
                    onClose: o
                })
            }
            iW.defaultProps = {
                isEligibleForVng: !1,
                robuxAmount: 0,
                robuxError: "",
                creditAmount: 0,
                currencyCode: "",
                creditError: "",
                robuxBadgeType: null
            }, iW.propTypes = {
                isEligibleForVng: J().bool,
                translate: J().func.isRequired,
                robuxAmount: J().number,
                robuxError: J().string,
                creditAmount: J().number,
                currencyCode: J().string,
                creditError: J().string,
                robuxBadgeType: J().oneOf(Object.values(iR)),
                creditDisplayConfig: J().string.isRequired,
                onBuyGiftCardClick: J().func.isRequired,
                onBuyRobuxExternalClick: J().func.isRequired
            }, iz.defaultProps = {
                creditAmount: 0,
                creditError: "",
                currencyCode: "USD"
            }, iz.propTypes = {
                creditAmount: J().number,
                creditError: J().string,
                currencyCode: J().string
            }, iV.propTypes = {
                translate: J().func.isRequired,
                isShopModalOpen: J().bool.isRequired,
                closeShopModal: J().func.isRequired,
                onModalContinue: J().func.isRequired
            };
            var iG = (0, S.withTranslations)(iV, oE.P);

            function iK(t) {
                var n = t.translate,
                    r = t.isOpen,
                    o = t.onClose,
                    a = t.onContinue,
                    i = (0, h.jsx)("p", {
                        className: "modal-body",
                        children: n("Description.RedirectToPartnerWebsite") || "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\nProceed to partner website for payment?"
                    });
                return (0, h.jsx)(O.SimpleModal, {
                    title: n("Heading.LeaveRoblox") || "Leaving Roblox",
                    body: i,
                    show: r,
                    actionButtonShow: !0,
                    actionButtonText: n("Action.ContinueToPayment") || "Continue to Payment",
                    neutralButtonText: n("Action.Cancel") || "Cancel",
                    onAction: a,
                    onNeutral: o,
                    onClose: o
                })
            }
            iK.propTypes = {
                translate: J().func.isRequired,
                isOpen: J().bool.isRequired,
                onClose: J().func.isRequired,
                onContinue: J().func.isRequired
            };
            var iH = (0, S.withTranslations)(iK, oE.P);

            function i$(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function iQ(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return i$(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i$(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function iX(t) {
                var n = t.creditAmount,
                    r = t.creditDisplayConfig,
                    o = t.creditError,
                    a = t.currencyCode,
                    i = t.isEligibleForVng,
                    l = t.isExperimentCallDone,
                    c = t.isGetCurrencyCallDone,
                    u = t.robuxBadgeType,
                    s = t.robuxAmount,
                    d = t.robuxError,
                    f = t.translate,
                    p = _.buyGiftCardUrl,
                    m = _.buyRobuxUrl.buyRobuxOnVng,
                    v = et.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
                    b = et.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
                    y = et.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
                    g = et.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
                    S = (0, E.useRef)(),
                    w = iQ((0, E.useState)(!1), 2),
                    x = w[0],
                    j = w[1],
                    C = iQ((0, E.useState)(!1), 2),
                    N = C[0],
                    I = C[1],
                    R = function(t) {
                        et.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(v.WEB_ROBUX_PURCHASE, !1, b.NAVIGATION_DROPDOWN_MENU, g.USER_INPUT, t)
                    };
                return (0, h.jsxs)("li", {
                    id: "navbar-robux",
                    ref: S,
                    className: A()("navbar-icon-item", {
                        "robux-popover-margins": r === ef
                    }),
                    children: [(0, h.jsx)(iG, {
                        isShopModalOpen: x,
                        closeShopModal: function() {
                            j(!1)
                        },
                        onModalContinue: function() {
                            R(y.CONTINUE_TO_CASHSTAR);
                            var t = decodeURIComponent(p.url);
                            window.open(t, "_blank")
                        }
                    }), i && (0, h.jsx)(iH, {
                        isOpen: N,
                        onClose: function() {
                            I(!1)
                        },
                        onContinue: function() {
                            R(y.CONTINUE_TO_VNG), X().then(function(t) {
                                var n = t.data.vngShopRedirectUrl;
                                window.open(n || m.url, "_blank").focus()
                            }, function() {
                                window.open(m.url, "_blank").focus()
                            }), I(!1)
                        }
                    }), l && (0, h.jsx)(O.Popover, {
                        id: "buy-robux-popover",
                        trigger: "click",
                        placement: "bottom",
                        button: (0, h.jsxs)("button", {
                            type: "button",
                            className: "btn-navigation-nav-robux-md",
                            children: [(0, h.jsx)(iT, {
                                robuxAmount: s,
                                isGetCurrencyCallDone: c,
                                robuxError: d,
                                creditDisplayConfig: r,
                                robuxBadgeType: u
                            }), r === ep && (0, h.jsx)(iz, {
                                creditAmount: n,
                                currencyCode: a,
                                creditError: o
                            })]
                        }),
                        role: "menu",
                        container: S.current,
                        children: (0, h.jsx)("div", {
                            className: eL(),
                            children: (0, h.jsx)("ul", {
                                id: "buy-robux-popover-menu",
                                className: "dropdown-menu",
                                children: (0, h.jsx)(iW, {
                                    isEligibleForVng: i,
                                    translate: f,
                                    robuxAmount: s,
                                    robuxError: d,
                                    creditAmount: n,
                                    currencyCode: a,
                                    creditError: o,
                                    creditDisplayConfig: r,
                                    onBuyGiftCardClick: function() {
                                        R(y.BUY_GIFT_CARD), j(!0)
                                    },
                                    onBuyRobuxExternalClick: function() {
                                        R(y.EXTERNAL_LINK_MODAL), I(!0)
                                    },
                                    robuxBadgeType: u
                                })
                            })
                        })
                    })]
                })
            }

            function iZ(t) {
                var n = t.toggleUniverseSearch;
                return (0, h.jsx)("li", {
                    className: "rbx-navbar-right-search",
                    children: (0, h.jsx)("button", {
                        type: "button",
                        className: "rbx-menu-item btn-navigation-nav-search-white-md",
                        onClick: n,
                        children: (0, h.jsx)("span", {
                            className: "icon-nav-search-white"
                        })
                    })
                })
            }
            iX.defaultProps = {
                robuxAmount: 0,
                robuxError: "",
                creditAmount: 0,
                creditError: "",
                currencyCode: "USD",
                creditDisplayConfig: ed,
                isExperimentCallDone: !1,
                isEligibleForVng: !1,
                robuxBadgeType: null
            }, iX.propTypes = {
                translate: J().func.isRequired,
                robuxAmount: J().number,
                robuxError: J().string,
                isGetCurrencyCallDone: J().bool.isRequired,
                creditAmount: J().number,
                currencyCode: J().string,
                creditError: J().string,
                creditDisplayConfig: J().string,
                isExperimentCallDone: J().bool,
                isEligibleForVng: J().bool,
                robuxBadgeType: J().oneOf(Object.values(iR))
            }, iZ.propTypes = {
                toggleUniverseSearch: J().func.isRequired
            };
            var iY = function() {
                var t = (0, E.useRef)(null),
                    n = (0, R.currentUserHasVerifiedBadge)() && R.VerifiedBadgeIconContainer ? (0, h.jsx)("section", {
                        ref: function(n) {
                            t.current = n
                        },
                        children: (0, h.jsx)(R.VerifiedBadgeIconContainer, {
                            overrideImgClass: "verified-badge-icon-header",
                            size: R.BadgeSizes.CAPTIONHEADER
                        })
                    }) : null;
                return (0, h.jsx)("div", {
                    className: "age-bracket-label text-header",
                    children: (0, h.jsxs)(O.Link, {
                        className: "text-link dynamic-overflow-container",
                        url: _.scrollListItems.profile.url,
                        children: [(0, h.jsx)("span", {
                            className: "avatar avatar-headshot-xs",
                            children: (0, h.jsx)(N.Thumbnail2d, {
                                containerClass: "avatar-card-image",
                                targetId: I.authenticatedUser.id,
                                type: N.ThumbnailTypes.avatarHeadshot,
                                altName: I.authenticatedUser.name
                            })
                        }), (0, h.jsx)("span", {
                            className: "text-overflow age-bracket-label-username font-caption-header",
                            children: eJ.nameForDisplay
                        }), n]
                    })
                })
            };

            function iJ(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function i0(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return iJ(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iJ(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var i1 = i0((0, O.createSystemFeedback)(), 2),
                i2 = i1[0],
                i8 = i1[1];

            function i5(t) {
                var n = t.translate,
                    r = t.toggleUniverseSearch,
                    o = I.authenticatedUser.isAuthenticated,
                    a = I.authenticatedUser.id,
                    i = i0((0, E.useState)(0), 2),
                    l = i[0],
                    c = i[1],
                    u = i0((0, E.useState)(!1), 2),
                    s = u[0],
                    d = u[1],
                    f = i0((0, E.useState)(0), 2),
                    p = f[0],
                    m = f[1],
                    v = i0((0, E.useState)(!1), 2),
                    b = v[0],
                    y = v[1],
                    g = i0((0, E.useState)(!0), 2),
                    S = g[0],
                    w = g[1],
                    x = i0((0, E.useState)(null), 2),
                    j = x[0],
                    C = x[1],
                    A = i0((0, E.useState)(""), 2),
                    O = A[0],
                    N = A[1],
                    R = i0((0, E.useState)(ed), 2),
                    T = R[0],
                    P = R[1],
                    k = i0((0, E.useState)(null), 2),
                    L = k[0],
                    U = k[1],
                    D = i0((0, E.useState)(null), 2),
                    M = D[0],
                    _ = D[1],
                    B = i0((0, E.useState)(""), 2),
                    F = B[0],
                    q = B[1],
                    W = i0((0, E.useState)(!1), 2),
                    G = W[0],
                    K = W[1],
                    H = function() {
                        o && (d(!1), z(a).then(function(t) {
                            m(t.data.robux)
                        }, function() {
                            N(n(el) || el)
                        }).finally(function() {
                            d(!0)
                        }))
                    },
                    Q = function() {
                        o && V().then(function(t) {
                            y(t.shouldShowVng), w(t.notificationsCanAccessStream)
                        }, function() {
                            N(n(el))
                        })
                    },
                    X = function() {
                        o && Z().then(function(t) {
                            var n = t.data,
                                r = "true" !== iU(iR.PERSONALIZED_BONUS_ITEMS) ? iR.PERSONALIZED_BONUS_ITEMS : "";
                            n.is_virtual_item_available && r && C(r)
                        }).catch(function(t) {
                            if (403 === t.status) C(null);
                            else throw t
                        })
                    };
                (0, E.useEffect)(function() {
                    window.addEventListener("navigation-update-user-currency", function() {
                        H()
                    })
                }, []), (0, E.useEffect)(function() {
                    if (o) {
                        Promise.resolve(0).then(c), H(), Q(), X(), $().then(function(t) {
                            var n, r = t.data;
                            null === r.creditDisplayConfig || null === r.creditBalance || 0 === r.creditBalance || null === r.currencyCode ? P(ed) : P(null != (n = r.creditDisplayConfig) ? n : ed), U(r.creditBalance), _(r.currencyCode)
                        }, function() {
                            q(n(el))
                        }).finally(function() {
                            K(!0)
                        });
                        try {
                            et.localStorageService.getLocalStorage(em) && (i8.success(n(ev, {
                                accountName: I.authenticatedUser.name
                            }), 0, 5e3), et.localStorageService.removeLocalStorage(em))
                        } catch (t) {}
                    }
                }, [o, a]);
                var Y = (0, h.jsx)("li", {
                    id: "navbar-stream",
                    className: "navbar-icon-item navbar-stream",
                    children: (0, h.jsx)("span", {
                        className: "nav-robux-icon rbx-menu-item",
                        children: (0, h.jsx)("span", {
                            id: "notification-stream-icon-container",
                            "notification-stream-indicator": "true"
                        })
                    })
                });
                try {
                    aN().module("notificationStreamIcon"), aN().module("notificationStream"), Y = (0, h.jsx)(aF, {})
                } catch (t) {
                    console.error(t)
                }
                return (0, h.jsxs)("ul", {
                    className: "nav navbar-right rbx-navbar-icon-group",
                    children: [(0, h.jsx)(i2, {}), (0, h.jsx)(iY, {}), (0, h.jsx)(iZ, {
                        translate: n,
                        toggleUniverseSearch: r
                    }), S && Y, (0, h.jsx)(iX, {
                        translate: n,
                        robuxAmount: p,
                        robuxError: O,
                        creditAmount: L,
                        currencyCode: M,
                        creditError: F,
                        creditDisplayConfig: T,
                        isEligibleForVng: b,
                        isExperimentCallDone: G,
                        isGetCurrencyCallDone: s,
                        robuxBadgeType: j
                    }), (0, h.jsx)(iI, {
                        translate: n,
                        accountNotificationCount: l
                    })]
                })
            }
            i5.propTypes = {
                translate: J().func.isRequired,
                toggleUniverseSearch: J().func.isRequired
            };
            var i3 = (0, S.withTranslations)(i5, oE.P);

            function i6(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function i4(t) {
                var n, r, o = t.translate,
                    a = (n = null != (r = null === ee.AccountSwitcherService || void 0 === ee.AccountSwitcherService ? void 0 : ee.AccountSwitcherService.useIsAccountSwitcherAvailableForBrowser()) ? r : [!1], function(t) {
                        if (Array.isArray(t)) return t
                    }(n) || function(t, n) {
                        var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != a) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, o = t
                            } finally {
                                try {
                                    l || null == a.return || a.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return i
                        }
                    }(n, 1) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return i6(t, 1);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i6(t, n)
                        }
                    }(n, 1) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[0];
                return (0, E.useEffect)(function() {
                    try {
                        (0, et.dataStores.authIntentDataStore.saveGameIntentFromCurrentUrl)()
                    } catch (t) {
                        console.error("Failed to save game intent from current url", t)
                    }
                }, []), !(0, b.useQuery)({
                    queryKey: ["getIsVNGLandingRedirectEnabled"],
                    queryFn: im,
                    placeholderData: !0
                }).data && (0, h.jsx)("li", {
                    className: "signup-button-container",
                    children: (0, h.jsx)(O.Link, {
                        onClick: function() {
                            window.location.href = ii(a)
                        },
                        url: ii(a),
                        id: "sign-up-button",
                        className: "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button",
                        children: o(oj() ? "Label.CreateAccount" : "Label.sSignUp")
                    })
                })
            }
            i4.propTypes = {
                translate: J().func.isRequired
            };
            var i7 = function() {
                window.location.href = il()
            };

            function i9(t) {
                var n = t.translate;
                return (0, h.jsx)("li", {
                    className: "login-action",
                    children: ip() && (0, h.jsx)(O.Link, {
                        onClick: i7,
                        url: il(),
                        className: "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item",
                        children: n("Label.sLogin")
                    })
                })
            }

            function le(t) {
                var n = t.translate,
                    r = t.toggleUniverseSearch,
                    o = function(t, n) {
                        if (null == t) return {};
                        var r, o, a = function(t, n) {
                            if (null == t) return {};
                            var r, o, a = {},
                                i = Object.keys(t);
                            for (o = 0; o < i.length; o++) r = i[o], n.indexOf(r) >= 0 || (a[r] = t[r]);
                            return a
                        }(t, n);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (o = 0; o < i.length; o++) r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
                        }
                        return a
                    }(t, ["translate", "toggleUniverseSearch"]);
                return I.authenticatedUser.isAuthenticated ? (0, h.jsx)("div", {
                    className: "navbar-right rbx-navbar-right",
                    children: (0, h.jsx)(i3, function(t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                o = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable
                            }))), o.forEach(function(n) {
                                var o;
                                o = r[n], n in t ? Object.defineProperty(t, n, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = o
                            })
                        }
                        return t
                    }({
                        translate: n,
                        toggleUniverseSearch: r
                    }, o))
                }) : (0, h.jsx)("div", {
                    className: "navbar-right rbx-navbar-right",
                    children: (0, h.jsxs)("ul", {
                        className: "nav navbar-right rbx-navbar-right-nav",
                        children: [(0, h.jsx)(i4, {
                            translate: n
                        }), (0, h.jsx)(i9, {
                            translate: n
                        }), (0, h.jsx)(iZ, {
                            translate: n,
                            toggleUniverseSearch: r
                        })]
                    })
                })
            }

            function lt(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function ln(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        var o;
                        o = r[n], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return t
            }

            function lr(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return lt(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lt(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            i9.propTypes = {
                translate: J().func.isRequired
            }, le.propTypes = {
                translate: J().func.isRequired,
                toggleUniverseSearch: J().func.isRequired
            };
            var lo = (0, S.withTranslations)(function(t) {
                var n = eT(),
                    r = lr((0, E.useState)(n), 2),
                    o = r[0],
                    a = r[1],
                    i = lr((0, E.useState)(!n), 2),
                    l = i[0],
                    c = i[1],
                    u = (0, E.useCallback)(function() {
                        var t = eT();
                        o !== t && (a(t), c(!t))
                    }, [o]);
                return (0, E.useEffect)(function() {
                    return window.addEventListener("resize", u),
                        function() {
                            window.removeEventListener("resize", u)
                        }
                }, [u]), (0, h.jsxs)(b.QueryClientProvider, {
                    client: S.queryClient,
                    children: [(0, h.jsx)(aA, ln({
                        isUniverseSearchShown: l
                    }, t)), (0, h.jsx)(le, ln({
                        toggleUniverseSearch: function() {
                            c(function(t) {
                                return !t
                            })
                        }
                    }, t))]
                })
            }, oE.P);

            function la(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }

            function li(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != a) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, o = t
                        } finally {
                            try {
                                l || null == a.return || a.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return la(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return la(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ll(t) {
                var n = t.translate,
                    r = _.buyRobuxUrl,
                    o = r.buyRobux,
                    a = r.buyRobuxOnVng,
                    i = I.authenticatedUser.isAuthenticated,
                    l = et.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT,
                    c = et.paymentFlowAnalyticsService.ENUM_VIEW_NAME,
                    u = et.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE,
                    s = et.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE,
                    d = li((0, E.useState)(!1), 2),
                    f = d[0],
                    p = d[1],
                    m = li((0, E.useState)(!1), 2),
                    v = m[0],
                    b = m[1],
                    y = (0, E.useRef)(new Map),
                    g = function(t) {
                        et.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(l.WEB_ROBUX_PURCHASE, !1, c.NAVIGATION_ROBUX_TEXT, s.USER_INPUT, t)
                    };
                return (0, E.useEffect)(function() {
                    var t = y.current,
                        n = a.cacheKey;
                    t.has(n) ? p(t.get(n)) : i && V().then(function(r) {
                        p(r.shouldShowVng), t.set(n, r.shouldShowVng)
                    })
                }, [a, a.cacheKey, i]), (0, h.jsx)("div", {
                    children: f ? (0, h.jsxs)(j().Fragment, {
                        children: [(0, h.jsx)(iH, {
                            isOpen: v,
                            onClose: function() {
                                b(!1)
                            },
                            onContinue: function() {
                                g(u.CONTINUE_TO_VNG), X().then(function(t) {
                                    var n = t.data.vngShopRedirectUrl;
                                    window.open(n || a.url, "_blank").focus()
                                }, function() {
                                    window.open(a.url, "_blank").focus()
                                }), b(!1)
                            }
                        }), (0, h.jsx)(O.Link, {
                            cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
                            onClick: function() {
                                g(u.EXTERNAL_LINK_MODAL), b(!0)
                            },
                            children: n(o.name)
                        })]
                    }) : (0, h.jsx)(O.Link, {
                        cssClasses: "font-header-2 nav-menu-title text-header robux-menu-btn",
                        url: o.url,
                        onClick: function() {
                            return g(u.BUY_ROBUX)
                        },
                        children: n(o.name)
                    })
                })
            }
            ll.propTypes = {
                translate: J().func.isRequired
            };
            var lc = (0, S.withTranslations)(ll, oE.P),
                lu = [{
                    ids: ["nav-logo-link"],
                    navItem: "logo"
                }, {
                    ids: ["nav-charts-md-link", "nav-charts-sm-link"],
                    navItem: "charts"
                }, {
                    ids: ["nav-marketplace-md-link", "nav-marketplace-sm-link"],
                    navItem: "marketplace"
                }, {
                    ids: ["header-develop-md-link", "header-develop-sm-link"],
                    navItem: "create"
                }];

            function ls(t) {
                var n = t.translate,
                    r = document.getElementById("container-main");
                return (0, h.jsx)(O.Button, {
                    id: "skip-to-main-content",
                    size: O.Button.sizes.extraSmall,
                    variant: O.Button.variants.primary,
                    onClick: function() {
                        return r.focus()
                    },
                    children: n("Action.SkipToMainContent") || "Skip to main content"
                })
            }
            ls.propTypes = {
                translate: J().func.isRequired
            };
            var ld = I.authenticatedUser.isAuthenticated;

            function lf(t) {
                var n = O.IconButton.iconTypes;
                return oj() ? null : (0, h.jsxs)(E.Fragment, {
                    children: [(0, h.jsx)(ls, function(t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                o = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable
                            }))), o.forEach(function(n) {
                                var o;
                                o = r[n], n in t ? Object.defineProperty(t, n, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = o
                            })
                        }
                        return t
                    }({}, t)), ld && (0, h.jsx)(O.IconButton, {
                        className: "menu-button",
                        iconType: n.navigation,
                        iconName: "nav-menu",
                        onClick: function() {
                            document.dispatchEvent(new CustomEvent(ec.name))
                        }
                    })]
                })
            }
            lf.propTypes = {};
            var lp = (0, S.withTranslations)(lf, oE.P),
                lm = "auth-401-modal",
                lv = "Heading.SignedOut",
                lh = "Body.SignInCTA",
                lb = "Action.SignIn";

            function ly(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, o = Array(n); r < n; r++) o[r] = t[r];
                return o
            }
            var lg = (0, S.withTranslations)(function(t) {
                    var n, r = t.translate,
                        o = t.titleKey,
                        a = t.bodyContextKey,
                        i = t.bodyCtaKey,
                        l = t.buttonKey,
                        c = (n = E.useState(!0), function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, o, a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != a) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (a = a.call(t); !(l = (r = a.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, o = t
                                } finally {
                                    try {
                                        l || null == a.return || a.return()
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return ly(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ly(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = c[0],
                        s = c[1];
                    E.useEffect(function() {
                        a8()
                    }, []);
                    var d = E.useCallback(function() {
                            a5(), s(!1);
                            var t, n = document.getElementById(lm);
                            null == n || null == (t = n.parentNode) || t.removeChild(n), iu()
                        }, []),
                        f = r(null != o ? o : lv),
                        p = a ? r(a) : "",
                        m = r(null != i ? i : lh),
                        v = r(null != l ? l : lb);
                    return (0, h.jsx)(r3, {
                        open: u,
                        size: "Small",
                        isModal: !0,
                        hasCloseAffordance: !1,
                        children: (0, h.jsxs)(r6, {
                            children: [(0, h.jsxs)(r4, {
                                className: "gap-large",
                                children: [(0, h.jsx)(r7, {
                                    className: "text-heading-medium padding-none",
                                    children: f
                                }), p ? (0, h.jsxs)(E.Fragment, {
                                    children: [(0, h.jsx)("p", {
                                        className: "text-body-medium",
                                        children: p
                                    }), (0, h.jsx)("p", {
                                        className: "text-body-medium",
                                        children: m
                                    })]
                                }) : (0, h.jsx)("p", {
                                    className: "text-body-medium",
                                    children: m
                                })]
                            }), (0, h.jsx)(r9, {
                                className: "width-full",
                                children: (0, h.jsx)(oa, {
                                    variant: "Emphasis",
                                    className: "width-full",
                                    onClick: d,
                                    size: "Medium",
                                    children: v
                                })
                            })]
                        })
                    })
                }, oE.P),
                lS = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = document.getElementById(lm);
                    if (n) {
                        var r = window.React;
                        window.ReactDOM.render(r.createElement(lg, t), n)
                    }
                },
                lw = function() {
                    var t = document.getElementById(lm);
                    return t || ((t = document.createElement("div")).id = lm, document.body.append(t)), t
                };
            r(5), r(2);
            var lx = "right-navigation-header",
                lE = "left-navigation-container",
                lj = "header-menu-icon",
                lC = "navigation-robux-container",
                lA = "navigation-robux-mobile-container";
            (function(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                if ("string" == typeof t) r[t] = n;
                else {
                    var o = function(t) {
                            if (Array.isArray(t)) return w(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return w(t, void 0);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(t, n)
                            }
                        }(t) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        a = o.pop(),
                        i = r,
                        l = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var s, d = o[Symbol.iterator](); !(l = (s = d.next()).done); l = !0) {
                            var f, p = s.value;
                            null != (f = i)[p] || (f[p] = {}), i = i[p]
                        }
                    } catch (t) {
                        c = !0, u = t
                    } finally {
                        try {
                            l || null == d.return || d.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    i[a] = n
                }
            })(["Roblox", "NavigationService"], function(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), o.forEach(function(n) {
                        var o;
                        o = r[n], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return t
            }({}, v)), f = null != (s = null == (u = window.Roblox) || null == (c = u.CurrentUser) ? void 0 : c.userId) ? s : null, null != (p = null != (d = et.localStorageService.getLocalStorage(aW)) ? d : null) && null != f && p !== f && (t = "".concat(f, ",").concat(p), n = window.location.href, et.eventStreamService.sendEventWithTarget(aH, aX, {
                state: t,
                url: n
            })), et.localStorageService.setLocalStorage(aW, f), window.addEventListener("Roblox.Login", function(t) {
                var n;
                et.localStorageService.setLocalStorage(aW, null == t || null == (n = t.detail) ? void 0 : n.userId)
            }), window.addEventListener("Roblox.Signup", function(t) {
                var n;
                et.localStorageService.setLocalStorage(aW, null == t || null == (n = t.detail) ? void 0 : n.userId)
            }), ({
                initializeDevelopLink: function() {
                    var t = document.getElementById("header-develop-md-link"),
                        n = document.getElementById("header-develop-sm-link");
                    null !== t && (t.href = "https://create.".concat(k().domain, "/")), null !== n && (n.href = "https://create.".concat(k().domain, "/"))
                }
            }).initializeDevelopLink(), ({
                initNavClickEvents: function() {
                    lu.forEach(function(t) {
                        var n = t.ids,
                            r = t.navItem;
                        n.forEach(function(t) {
                            var n = document.getElementById(t);
                            n && n.addEventListener("click", function() {
                                ee.EventStream && ee.EventStream.SendEventWithTarget("navBarClick", "click", {
                                    nav_item: r
                                }, ee.EventStream.TargetTypes.WWW)
                            })
                        })
                    })
                }
            }).initNavClickEvents(), e4.httpClient.interceptors.response.use(function(t) {
                return t
            }, function(t) {
                if (null != t && (void 0 === t ? "undefined" : t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t) == "object" && t.status === e4.HttpResponseCodes.unauthorized) {
                    var n, r, o, a, i = t.data,
                        l = null == i || null == (r = i.errors) || null == (n = r[0]) ? void 0 : n.code,
                        c = null == i || null == (a = i.errors) || null == (o = a[0]) ? void 0 : o.subcode;
                    if (9002 === l && 2 === c) return lw(), lS({
                        titleKey: lv,
                        bodyContextKey: "",
                        bodyCtaKey: lh,
                        buttonKey: lb
                    }), new Promise(function() {})
                }
                return Promise.reject(t)
            }), g()(function() {
                document.getElementById(lj) && (0, S.renderWithErrorBoundary)((0, h.jsx)(lp, {}), document.getElementById(lj)), document.getElementById(lC) && (0, S.renderWithErrorBoundary)((0, h.jsx)(lc, {
                    translate: oE.P
                }), document.getElementById(lC)), document.getElementById(lA) && (0, S.renderWithErrorBoundary)((0, h.jsx)(lc, {
                    translate: oE.P
                }), document.getElementById(lA)), document.getElementById(lx) && (0, S.renderWithErrorBoundary)((0, h.jsx)(lo, {}), document.getElementById(lx)), document.getElementById(lE) && (0, S.renderWithErrorBoundary)((0, h.jsx)(b.QueryClientProvider, {
                    client: S.queryClient,
                    children: (0, h.jsx)(oU, {})
                }), document.getElementById(lE))
            })
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Navigation");
//# debugId=cf427ea9-ae9b-4923-a4b4-fd8c252f1c33
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/navigation-7684350aaffbdc61.js.map