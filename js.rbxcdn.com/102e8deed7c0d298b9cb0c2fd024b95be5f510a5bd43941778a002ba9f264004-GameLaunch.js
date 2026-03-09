! function() {
    "use strict";
    var t = {
            70: function(t, n, r) {
                t.exports = {}
            },
            788: function(t, n, r) {
                t.exports = {}
            }
        },
        n = {};

    function r(a) {
        var o = n[a];
        if (void 0 !== o) return o.exports;
        var i = n[a] = {
            exports: {}
        };
        return t[a](i, i.exports, r), i.exports
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
        for (var a in n) r.o(n, a) && !r.o(t, a) && Object.defineProperty(t, a, {
            enumerable: !0,
            get: n[a]
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
    }, r.g.importScripts && (a = r.g.location + "");
    var a, o = r.g.document;
    if (!a && o && (o.currentScript && "SCRIPT" === o.currentScript.tagName.toUpperCase() && (a = o.currentScript.src), !a)) {
        var i = o.getElementsByTagName("script");
        if (i.length)
            for (var l = i.length - 1; l > -1 && (!a || !/^http(s?):/.test(a));) a = i[l--].src
    }
    if (!a) throw Error("Automatic publicPath is not supported in this browser");
    r.p = a.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.ruid = "bundler=rspack@1.5.7",
        function() {
            var t, n, a, o, i = window.jQuery,
                l = r.n(i),
                c = window.Roblox,
                u = window.React,
                s = r.n(u),
                d = window.TanstackQuery,
                f = window.Roblox["core-scripts"].http.http,
                p = window.CoreRobloxUtilities,
                v = window.Roblox["core-scripts"].guac,
                m = window.Roblox["core-scripts"].environmentUrls,
                y = r.n(m);

            function h(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function b(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            h(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            h(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function g(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var w = p.dataStores.gamesDataStore,
                P = function() {
                    var t = {
                        url: "".concat(y().apiGatewayUrl, "/user-settings-api/v1/user-settings/settings-and-options"),
                        withCredentials: !0
                    };
                    return f.get(t).then(function(t) {
                        return t.data
                    })
                },
                x = function(t) {
                    var n = {
                        url: "".concat(y().apiGatewayUrl, "/experience-guidelines-api/experience-guidelines/get-age-recommendation"),
                        withCredentials: !0
                    };
                    return f.post(n, {
                        universeId: t
                    }).then(function(t) {
                        return t.data
                    })
                },
                S = function(t, n) {
                    var r = {
                        url: "".concat(y().apiGatewayUrl, "/fiat-paid-access-service/v1/purchase"),
                        withCredentials: !0,
                        retryable: !0
                    };
                    return f.post(r, {
                        rootPlaceId: t,
                        expectedBasePriceId: n
                    }).then(function(t) {
                        var n, r;
                        return null != (r = JSON.parse(null != (n = t.data.checkoutUrl) ? n : "").checkoutUrl) ? r : ""
                    })
                };

            function I(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }
            var E = {
                    UnplayableOtherReason: "UnplayableOtherReason",
                    Playable: "Playable",
                    GuestProhibited: "GuestProhibited",
                    GameUnapproved: "GameUnapproved",
                    IncorrectConfiguration: "IncorrectConfiguration",
                    UniverseRootPlaceIsPrivate: "UniverseRootPlaceIsPrivate",
                    InsufficientPermissionFriendsOnly: "InsufficientPermissionFriendsOnly",
                    InsufficientPermissionGroupOnly: "InsufficientPermissionGroupOnly",
                    DeviceRestricted: "DeviceRestricted",
                    UnderReview: "UnderReview",
                    PurchaseRequired: "PurchaseRequired",
                    AccountRestricted: "AccountRestricted",
                    TemporarilyUnavailable: "TemporarilyUnavailable",
                    ComplianceBlocked: "ComplianceBlocked",
                    ContextualPlayabilityRegionalAvailability: "ContextualPlayabilityRegionalAvailability",
                    ContextualPlayabilityRegionalCompliance: "ContextualPlayabilityRegionalCompliance",
                    ContextualPlayabilityAgeRecommendationParentalControls: "ContextualPlayabilityAgeRecommendationParentalControls",
                    ContextualPlayabilityAgeGated: "ContextualPlayabilityAgeGated",
                    PlaceHasNoPublishedVersion: "PlaceHasNoPublishedVersion",
                    ContextualPlayabilityUnverifiedSeventeenPlusUser: "ContextualPlayabilityUnverifiedSeventeenPlusUser",
                    FiatPurchaseRequired: "FiatPurchaseRequired",
                    ContextualPlayabilityUnrated: "ContextualPlayabilityUnrated",
                    ContextualPlayabilityAgeGatedByDescriptor: "ContextualPlayabilityAgeGatedByDescriptor",
                    ContextualPlayabilityExperienceBlockedParentalControls: "ContextualPlayabilityExperienceBlockedParentalControls"
                },
                C = (I(tX = {}, E.UnplayableOtherReason, "UnplayableError.UnplayableOther"), I(tX, E.TemporarilyUnavailable, "UnplayableError.TemporarilyUnavailable"), I(tX, E.GameUnapproved, "UnplayableError.GameUnapproved"), I(tX, E.IncorrectConfiguration, "UnplayableError.IncorrectConfiguration"), I(tX, E.UniverseRootPlaceIsPrivate, "UnplayableError.UniverseRootPlaceIsPrivate"), I(tX, E.InsufficientPermissionFriendsOnly, "UnplayableError.InsufficientPermissionFriendsOnly"), I(tX, E.InsufficientPermissionGroupOnly, "UnplayableError.InsufficientPermissionGroupOnly"), I(tX, E.DeviceRestricted, "UnplayableError.DeviceRestrictedDefault"), I(tX, E.UnderReview, "UnplayableError.UnderReview"), I(tX, E.AccountRestricted, "UnplayableError.AccountRestricted"), I(tX, E.ComplianceBlocked, "UnplayableError.ComplianceBlocked"), I(tX, E.ContextualPlayabilityRegionalAvailability, "UnplayableError.ContextualPlayabilityRegionalAvailability"), I(tX, E.ContextualPlayabilityRegionalCompliance, "UnplayableError.ContextualPlayabilityRegionalCompliance"), I(tX, E.ContextualPlayabilityAgeRecommendationParentalControls, "UnplayableError.ContextualPlayabilityAgeRecommendationParentalControls"), I(tX, E.ContextualPlayabilityAgeGated, "UnplayableError.ContextualPlayabilityAgeGated"), I(tX, E.PlaceHasNoPublishedVersion, "UnplayableError.PlaceHasNoPublishedVersion"), I(tX, E.ContextualPlayabilityUnrated, "UnplayableError.ContextualPlayabilityUnrated"), I(tX, E.ContextualPlayabilityAgeGatedByDescriptor, "UnplayableError.ContextualPlayabilityAgeGatedByDescriptor"), I(tX, E.ContextualPlayabilityExperienceBlockedParentalControls, "UnplayableError.ContextualPlayabilityExperienceBlockedParentalControls"), tX),
                O = "PlayButtonMessage.AgreeToNotice",
                j = "PlayButtonText.ActionNeeded",
                A = "PlayButtonText.Unavailable",
                N = "PlayButtonText.Buy",
                k = function(t, n) {
                    var r, a;
                    return {
                        eventName: "playGameClicked",
                        ctx: "click",
                        properties: (r = function(t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    a = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                                }))), a.forEach(function(n) {
                                    I(t, n, r[n])
                                })
                            }
                            return t
                        }({}, n), a = a = {
                            placeId: t
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(t, n) {
                            var r = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(t);
                                r.push.apply(r, a)
                            }
                            return r
                        })(Object(a)).forEach(function(t) {
                            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t))
                        }), r),
                        gamePlayIntentEventCtx: "PlayButton"
                    }
                },
                T = {
                    ActionNeeded: "ActionNeededButtonShown",
                    Unplayable: "UnplayableErrorShown",
                    SeventeenPlusInPlayable: "ReachedSeventeenPlusCaseInPlayable",
                    PlayButtonUpsellSelfUpdateSettingTriggered: "PlayButtonUpsellSelfUpdateSettingTriggered",
                    PlayButtonUpsellAskYourParentTriggered: "PlayButtonUpsellAskYourParentTriggered",
                    PlayButtonUpsellRestrictedUnplayableTriggered: "PlayButtonUpsellRestrictedUnplayableTriggered",
                    PlayButtonUpsellAgeRestrictionVerificationTriggered: "PlayButtonUpsellAgeRestrictionVerificationTriggered",
                    PlayButtonUpsellUnknownSettingOrAge: "PlayButtonUpsellUnknownSettingOrAge",
                    PlayButtonUpsellMinimalMaturityRating: "PlayButtonUpsellMinimalMaturityRating",
                    PlayButtonUpsellAgeNotInMapping: "PlayButtonUpsellAgeNotInMapping",
                    PlayButtonUpsellParentalConsentError: "PlayButtonUpsellParentalConsentError",
                    PlayButtonUpsellAgeRestrictionVerificationError: "PlayButtonUpsellAgeRestrictionVerificationError",
                    PlayButtonUpsellUnknownRequirement: "PlayButtonUpsellUnknownRequirement",
                    PreparePurchaseUrlError: "PreparePurchaseUrlError",
                    PlayButtonShowIdentificationError: "PlayButtonShowIdentificationIssueCaught",
                    PlayabilityStatusFetchInvalidUniverseId: "PlayabilityStatusFetchInvalidUniverseId",
                    PlayabilityStatusFetchInvalidResponse: "PlayabilityStatusFetchInvalidResponse",
                    PlayabilityStatusFetchFailed: "PlayabilityStatusFetchFailed"
                },
                U = {
                    eventName: "unlockPlayIntent",
                    gameLaunchFallbackUpsellName: "GameLaunch",
                    restrictedUnplayableUpsellName: "RestrictedUnplayableOptionNotFound",
                    unverifiedSeventeenPlusUpsellName: "AgeVerificationUnverifiedSeventeenPlusUser",
                    fiatPurchaseUpsellName: "FiatPurchase"
                };

            function R(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            var D = {
                    playabilityStatus: E.TemporarilyUnavailable,
                    isPlayable: void 0,
                    unplayableDisplayText: void 0
                },
                L = window.Roblox["core-scripts"].game,
                M = window.Roblox["core-scripts"].util.url,
                B = window.CoreUtilities,
                F = window.HeaderScripts;

            function G(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function _(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            G(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            G(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function V(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), a.forEach(function(n) {
                        var a;
                        a = r[n], n in t ? Object.defineProperty(t, n, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = a
                    })
                }
                return t
            }

            function W(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var z = {
                pid: "experiencestart_mobileweb",
                is_retargeting: "false"
            };

            function q(t) {
                if (!(null === c.GameLauncher || void 0 === c.GameLauncher ? void 0 : c.GameLauncher.isJoinAttemptIdEnabled())) return {};
                var n = t.joinAttemptOrigin,
                    r = t.joinAttemptId;
                return {
                    joinAttemptId: r = "string" == typeof r ? r : B.uuidService.generateRandomUuid(),
                    joinAttemptOrigin: n
                }
            }

            function H(t, n, r) {
                var a = V({
                    placeId: n
                }, t, q(t), r);
                return p.eventStreamService.sendEventWithTarget("playGameClicked", "click", a), a
            }

            function J(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = "".concat(y().websiteUrl, "/games/start?placeid=").concat(t);
                if (null === c.GameLauncher || void 0 === c.GameLauncher ? void 0 : c.GameLauncher.isJoinAttemptIdEnabled()) {
                    var a = q(n),
                        o = a.joinAttemptId,
                        i = a.joinAttemptOrigin;
                    "string" == typeof o && o.length > 0 && (r += "&joinAttemptId=".concat(o), "string" == typeof i && i.length > 0 && (r += "&joinAttemptOrigin=".concat(i)))
                }
                var l = n.launchData,
                    u = n.eventId;
                return "string" == typeof l && l.length > 0 && (r += "&launchData=".concat(l)), "string" == typeof u && u.length > 0 && (r += "&eventId=".concat(u)), encodeURIComponent(r)
            }
            var K = function(t, n, r, a) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
                        c = F.deviceMeta.getDeviceMeta();
                    if ((null == c ? void 0 : c.isIosDevice) || (null == c ? void 0 : c.isAndroidDevice) || F.jsClientDeviceIdentifier.isIos13Ipad || (null == c ? void 0 : c.isChromeOs)) {
                        var u = H(o, t, i),
                            s = J(t, u),
                            d = M.composeQueryString(V({}, z, l));
                        window.open("https://ro.blox.com/Ebh5?".concat(d, "&af_dp=").concat(s, "&af_web_dp=").concat(s, "&deep_link_value=").concat(s), "_self")
                    } else {
                        var f = "0";
                        null !== window.localStorage.getItem("ref_info") && (f = function() {
                            var t = window.localStorage.getItem("ref_info");
                            if (!t) return {};
                            try {
                                return JSON.parse(atob(t))
                            } catch (t) {
                                return {}
                            }
                        }()[t]), (0, L.launchGame)((0, L.buildPlayGameProperties)(n, t, a, void 0, r, f, i), k(t, o)), window.localStorage.getItem("ref_info") && window.localStorage.removeItem("ref_info")
                    }
                },
                $ = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = F.deviceMeta.getDeviceMeta();
                    if ((null == r ? void 0 : r.isIosDevice) || (null == r ? void 0 : r.isAndroidDevice) || F.jsClientDeviceIdentifier.isIos13Ipad || (null == r ? void 0 : r.isChromeOs)) {
                        var a = H({}, t, {}),
                            o = J(t, a),
                            i = M.composeQueryString(V({}, z, n));
                        window.open("https://ro.blox.com/Ebh5?".concat(i, "&af_dp=").concat(o, "&af_web_dp=").concat(o, "&deep_link_value=").concat(o), "_self")
                    } else(0, L.launchGame)((0, L.buildPlayGameProperties)(void 0, t), k(t, {}))
                },
                X = function() {
                    return _(function() {
                        var t, n;
                        return W(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, null == (t = window.Roblox.AccessManagementUpsellService) ? void 0 : t.showAccessManagementVerificationModal()];
                                case 1:
                                    return [2, null != (n = r.sent()) && n];
                                case 2:
                                    return r.sent(), [2, !1];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                },
                Z = function(t, n) {
                    try {
                        var r, a = null == (r = window.Roblox.UrlParser) ? void 0 : r.getParameterValueByName("shareLinkSourceType", !1);
                        if ((null == a ? void 0 : a.toLowerCase()) !== "experiencedetails") return;
                        var o = window.Roblox.EventStream;
                        null == o || o.SendEventWithTarget("shareLinkGameJoin", "GamePlayButtonWeb", {
                            placeId: t,
                            universeId: n
                        }, o.TargetTypes.WWW)
                    } catch (t) {}
                },
                Q = function(t, n) {
                    return void 0 !== t && t !== E.Playable && t !== E.GuestProhibited && t !== E.PurchaseRequired && t !== E.ContextualPlayabilityUnverifiedSeventeenPlusUser && t !== E.FiatPurchaseRequired && (t !== E.ContextualPlayabilityAgeRecommendationParentalControls || !n) && !0
                },
                Y = function(t, n, r) {
                    p.eventStreamService.sendEvent({
                        name: U.eventName,
                        type: U.eventName,
                        context: p.eventStreamService.eventTypes.formInteraction
                    }, {
                        universeId: t,
                        upsellName: n,
                        playabilityStatus: r
                    })
                },
                ee = window.ReactJSX,
                et = window.ReactStyleGuide,
                en = window.Roblox["core-scripts"].react,
                er = window.Roblox.NavigationService,
                ea = window.Roblox.ExperimentationService,
                eo = r.n(ea),
                ei = window.ReactUtilities,
                el = ["Feature.GameLaunchGuestMode", "Common.VisitGame", "CommonUI.Controls", "Feature.ExperienceDetails", "Feature.DownloadLanding"],
                ec = (0, ei.withTranslations)(function(t) {
                    var n = t.onButtonClick,
                        r = t.iconClassName,
                        a = t.buttonWidth,
                        o = void 0 === a ? et.Button.widths.full : a,
                        i = t.buttonClassName,
                        l = t.hideButtonText,
                        c = t.translate;
                    return (0, ee.jsxs)(s().Fragment, {
                        children: [(0, ee.jsxs)(et.Button, {
                            "data-testid": "play-action-needed-button",
                            width: o,
                            className: void 0 === i ? "btn-common-play-game-action-needed-lg" : i,
                            onClick: n,
                            children: [(0, ee.jsx)("span", {
                                className: void 0 === r ? "icon-status-private-primary" : r
                            }), !(void 0 !== l && l) && (0, ee.jsx)("span", {
                                className: "btn-text",
                                children: c(j)
                            })]
                        }), (0, ee.jsx)("div", {
                            id: "access-management-upsell-container-v1"
                        })]
                    })
                }, el),
                eu = function(t) {
                    var n = t.titleText,
                        r = t.bodyText,
                        a = t.primaryButtonText,
                        o = t.secondaryButtonText,
                        i = t.onPrimaryButtonClick,
                        l = t.onSecondaryButtonClick,
                        c = t.isModalOpen,
                        u = t.onCloseModal,
                        s = t.modalSize;
                    return (0, ee.jsxs)(et.Modal, {
                        show: c,
                        onHide: u,
                        size: s,
                        "aria-labelledby": "upsell-modal-title",
                        className: "upsell-modal-container",
                        centered: "true",
                        children: [(0, ee.jsxs)(et.Modal.Header, {
                            useBaseBootstrapComponent: !0,
                            children: [(0, ee.jsx)("button", {
                                type: "button",
                                className: "close",
                                onClick: u,
                                children: (0, ee.jsx)("span", {
                                    className: "icon-close"
                                })
                            }), (0, ee.jsx)(et.Modal.Title, {
                                id: "upsell-modal-title",
                                children: n
                            })]
                        }), (0, ee.jsx)(et.Modal.Body, {
                            children: r
                        }), (0, ee.jsxs)(et.Modal.Footer, {
                            children: [o && l && (0, ee.jsx)(et.Button, {
                                variant: et.Button.variants.secondary,
                                size: et.Button.sizes.medium,
                                onClick: l,
                                className: "modal-button",
                                children: o
                            }), a && i && (0, ee.jsx)(et.Button, {
                                variant: et.Button.variants.primary,
                                size: et.Button.sizes.medium,
                                onClick: i,
                                className: "modal-button",
                                children: a
                            })]
                        })]
                    })
                };
            eu.defaultProps = {
                primaryButtonText: void 0,
                secondaryButtonText: void 0,
                onPrimaryButtonClick: void 0,
                onSecondaryButtonClick: void 0,
                modalSize: "sm"
            };
            var es = function(t) {
                    var n = t.isModalOpen,
                        r = t.navigateToAccountSettings,
                        a = t.closeModal,
                        o = t.translate;
                    return (0, ee.jsx)(eu, {
                        titleText: o("UpdateMaturitySettingModal.Label.Title"),
                        bodyText: o("UpdateMaturitySettingModal.Label.Body"),
                        primaryButtonText: o("UpdateMaturitySettingModal.Action.GoToSettings"),
                        secondaryButtonText: o("UpdateMaturitySettingModal.Action.Cancel"),
                        onPrimaryButtonClick: r,
                        onSecondaryButtonClick: a,
                        isModalOpen: n,
                        onCloseModal: a
                    })
                },
                ed = function(t) {
                    var n = t.isModalOpen,
                        r = t.closeModal,
                        a = t.translate;
                    return (0, ee.jsx)(eu, {
                        titleText: a("RestrictedUnplayableModal.Label.Title"),
                        bodyText: a("RestrictedUnplayableModal.Label.Body"),
                        secondaryButtonText: a("RestrictedUnplayableModal.Action.Ok"),
                        onSecondaryButtonClick: r,
                        isModalOpen: n,
                        onCloseModal: r
                    })
                };

            function ef(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function ep(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return ef(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ef(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ev = function(t) {
                var n = ep((0, u.useState)(void 0), 2),
                    r = n[0],
                    a = n[1],
                    o = ep((0, u.useState)(!1), 2),
                    i = o[0],
                    l = o[1],
                    c = ep((0, u.useState)(void 0), 2),
                    s = c[0],
                    d = c[1],
                    f = ep((0, u.useState)(!1), 2),
                    p = f[0],
                    v = f[1],
                    m = ep((0, u.useState)(!1), 2),
                    y = m[0],
                    h = m[1];
                return (0, u.useEffect)(function() {
                    l(!0), P().then(function(t) {
                        a(t.contentAgeRestriction)
                    }).catch(function() {
                        h(!0)
                    }).finally(function() {
                        l(!1)
                    })
                }, []), (0, u.useEffect)(function() {
                    v(!0), x(t).then(function(t) {
                        d(t.ageRecommendationDetails.summary.ageRecommendation.contentMaturity)
                    }).catch(function() {
                        h(!0)
                    }).finally(function() {
                        v(!1)
                    })
                }, [t]), {
                    contentAgeRestriction: r,
                    contentMaturityRating: s,
                    isFetching: i || p,
                    hasError: y
                }
            };

            function em(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function ey(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function eh(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return em(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return em(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var eb = function(t, n, r, a, o, i, l) {
                    var s = eh((0, u.useState)(!1), 2),
                        d = s[0],
                        f = s[1],
                        p = eh((0, u.useState)(!1), 2),
                        v = p[0],
                        m = p[1],
                        y = (0, u.useCallback)(function() {
                            K(t, r, a, o, i, void 0, l)
                        }, [i, o, t, a, r, l]),
                        h = (0, u.useCallback)(function(t, r, a) {
                            var o;
                            return (o = function() {
                                var o, i, l, c, u, s;
                                return function(t, n) {
                                    var r, a, o, i = {
                                            label: 0,
                                            sent: function() {
                                                if (1 & o[0]) throw o[1];
                                                return o[1]
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
                                                if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                                switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = s;
                                                        break;
                                                    case 4:
                                                        return i.label++, {
                                                            value: s[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        i.label++, a = s[1], s = [0];
                                                        continue;
                                                    case 7:
                                                        s = i.ops.pop(), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                            i = 0;
                                                            continue
                                                        }
                                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                            i.label = s[1];
                                                            break
                                                        }
                                                        if (6 === s[0] && i.label < o[1]) {
                                                            i.label = o[1], o = s;
                                                            break
                                                        }
                                                        if (o && i.label < o[2]) {
                                                            i.label = o[2], i.ops.push(s);
                                                            break
                                                        }
                                                        o[2] && i.ops.pop(), i.trys.pop();
                                                        continue
                                                }
                                                s = n.call(t, i)
                                            } catch (t) {
                                                s = [6, t], a = 0
                                            } finally {
                                                r = o = 0
                                            }
                                            if (5 & s[0]) throw s[1];
                                            return {
                                                value: s[0] ? s[1] : void 0,
                                                done: !0
                                            }
                                        }
                                    }
                                }(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (o = function(t) {
                                                    Y(n, t, E.ContextualPlayabilityAgeRecommendationParentalControls)
                                                }, l = (null != (i = window.EventTracker) ? i : {}).fireEvent, a || void 0 === t || void 0 === r) return y(), null == l || l(T.PlayButtonUpsellUnknownSettingOrAge), o(U.gameLaunchFallbackUpsellName), [2];
                                            if ("minimal" === r) return y(), null == l || l(T.PlayButtonUpsellMinimalMaturityRating), o(U.gameLaunchFallbackUpsellName), [2];
                                            if (!(c = ({
                                                    mild: "NinePlus",
                                                    moderate: "ThirteenPlus",
                                                    restricted: "SeventeenPlus",
                                                    unrated: "ThirteenPlus"
                                                })[r])) return y(), null == l || l(T.PlayButtonUpsellAgeNotInMapping), o(U.gameLaunchFallbackUpsellName), [2];
                                            if (!(u = t.options.find(function(t) {
                                                    return t.option.optionValue === c
                                                }))) return [3, 12];
                                            switch (s = u.requirement) {
                                                case "SelfUpdateSetting":
                                                    return [3, 1];
                                                case "ParentalConsent":
                                                    return [3, 2];
                                                case "ContentAgeRestrictionVerification":
                                                    return [3, 6]
                                            }
                                            return [3, 10];
                                        case 1:
                                            return f(!0), null == l || l(T.PlayButtonUpsellSelfUpdateSettingTriggered), o(s), [3, 11];
                                        case 2:
                                            return d.trys.push([2, 4, , 5]), null == l || l(T.PlayButtonUpsellAskYourParentTriggered), o(s), [4, window.Roblox.AccessManagementUpsellV2Service.startAccessManagementUpsell({
                                                featureName: "CanChangeSetting",
                                                isAsyncCall: !1,
                                                usePrologue: !0,
                                                ampRecourseData: {
                                                    contentAgeRestriction: u.option.optionValue
                                                }
                                            })];
                                        case 3:
                                            return d.sent(), [3, 5];
                                        case 4:
                                            return d.sent(), y(), null == l || l(T.PlayButtonUpsellParentalConsentError), o(U.gameLaunchFallbackUpsellName), [3, 5];
                                        case 5:
                                        case 9:
                                            return [3, 11];
                                        case 6:
                                            return d.trys.push([6, 8, , 9]), null == l || l(T.PlayButtonUpsellAgeRestrictionVerificationTriggered), o(s), [4, X()];
                                        case 7:
                                            return d.sent(), [3, 9];
                                        case 8:
                                            return d.sent(), y(), null == l || l(T.PlayButtonUpsellAgeRestrictionVerificationError), o(U.gameLaunchFallbackUpsellName), [3, 9];
                                        case 10:
                                            y(), null == l || l(T.PlayButtonUpsellUnknownRequirement), o(U.gameLaunchFallbackUpsellName), d.label = 11;
                                        case 11:
                                            return [3, 13];
                                        case 12:
                                            m(!0), null == l || l(T.PlayButtonUpsellRestrictedUnplayableTriggered), o(U.restrictedUnplayableUpsellName), d.label = 13;
                                        case 13:
                                            return [2]
                                    }
                                })
                            }, function() {
                                var t = this,
                                    n = arguments;
                                return new Promise(function(r, a) {
                                    var i = o.apply(t, n);

                                    function l(t) {
                                        ey(i, r, a, l, c, "next", t)
                                    }

                                    function c(t) {
                                        ey(i, r, a, l, c, "throw", t)
                                    }
                                    l(void 0)
                                })
                            })()
                        }, [y, n]),
                        b = (0, u.useCallback)(function() {
                            f(!1)
                        }, []),
                        g = (0, u.useCallback)(function() {
                            m(!1)
                        }, []);
                    return {
                        launchPlayButtonUpsell: h,
                        isSelfUpdateSettingModalOpen: d,
                        navigateToAccountSettings: (0, u.useCallback)(function() {
                            var t = c.Endpoints.getAbsoluteUrl("/my/account#!/privacy");
                            "undefined" != typeof window && (window.location.href = t, f(!1))
                        }, []),
                        closeSelfUpdateSettingModal: b,
                        isRestrictedUnplayableModalOpen: v,
                        closeRestrictedUnplayableModal: g
                    }
                },
                eg = function(t) {
                    var n = t.universeId,
                        r = t.hideButtonText,
                        a = t.buttonClassName,
                        o = t.placeId,
                        i = t.rootPlaceId,
                        l = t.privateServerLinkCode,
                        c = t.gameInstanceId,
                        d = t.eventProperties,
                        f = t.appsFlyerReferralProperties,
                        p = t.translate,
                        v = ev(n),
                        m = v.contentAgeRestriction,
                        y = v.contentMaturityRating,
                        h = v.isFetching,
                        b = v.hasError,
                        g = eb(o, n, i, l, c, d, f),
                        w = g.launchPlayButtonUpsell,
                        P = g.isSelfUpdateSettingModalOpen,
                        x = g.navigateToAccountSettings,
                        S = g.closeSelfUpdateSettingModal,
                        I = g.isRestrictedUnplayableModalOpen,
                        E = g.closeRestrictedUnplayableModal,
                        C = (0, u.useCallback)(function(t) {
                            t.preventDefault(), t.stopPropagation(), w(m, y, b)
                        }, [w, m, y, b]);
                    return !b && h ? (0, ee.jsx)(et.Loading, {}) : (0, ee.jsxs)(s().Fragment, {
                        children: [(0, ee.jsx)(ec, {
                            onButtonClick: C,
                            hideButtonText: r,
                            buttonClassName: a
                        }), P && (0, ee.jsx)(es, {
                            isModalOpen: P,
                            navigateToAccountSettings: x,
                            closeModal: S,
                            translate: p
                        }), I && (0, ee.jsx)(ed, {
                            isModalOpen: I,
                            closeModal: E,
                            translate: p
                        })]
                    })
                };
            eg.defaultProps = {
                hideButtonText: void 0,
                buttonClassName: void 0,
                rootPlaceId: void 0,
                privateServerLinkCode: void 0,
                gameInstanceId: void 0,
                eventProperties: {},
                appsFlyerReferralProperties: {}
            };
            var ew = (0, ei.withTranslations)(eg, el),
                eP = function(t) {
                    var n = t.buttonWidth,
                        r = t.buttonClassName,
                        a = t.iconClassName,
                        o = t.hideButtonText,
                        i = t.hideButtonIcon,
                        l = t.buttonContent,
                        c = t.onClick,
                        u = t.isPurchasing,
                        s = t.redirectUrl;
                    return s ? (0, ee.jsx)(et.Link, {
                        url: s,
                        className: "purchase-button-link",
                        children: (0, ee.jsxs)(et.Button, {
                            "data-testid": "play-purchase-button",
                            width: n,
                            className: r,
                            onClick: function() {
                                return null
                            },
                            isDisabled: u,
                            children: [!i && (0, ee.jsx)("span", {
                                className: a
                            }), !o && (0, ee.jsx)("span", {
                                className: "btn-text",
                                children: l
                            })]
                        })
                    }) : (0, ee.jsxs)(et.Button, {
                        "data-testid": "play-purchase-button",
                        width: n,
                        className: r,
                        onClick: function(t) {
                            c && !u && c(t)
                        },
                        isDisabled: u,
                        children: [!i && (0, ee.jsx)("span", {
                            className: a
                        }), !o && (0, ee.jsx)("span", {
                            className: "btn-text",
                            children: l
                        })]
                    })
                };

            function ex(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function eS(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            eP.defaultProps = {
                hideButtonText: !1,
                buttonWidth: et.Button.widths.full,
                buttonClassName: "btn-economy-robux-white-lg",
                iconClassName: "icon-robux-white",
                hideButtonIcon: !1,
                isPurchasing: !1,
                onClick: void 0,
                redirectUrl: void 0
            };
            var eI = function(t) {
                    var n, r, a, o = t.universeId,
                        i = t.placeId,
                        l = t.productDetails,
                        c = t.translate,
                        s = t.iconClassName,
                        d = t.buttonWidth,
                        f = t.buttonClassName,
                        p = t.hideButtonText,
                        v = t.redirectPurchaseUrl,
                        m = t.showDefaultPurchaseText,
                        y = (n = (0, u.useState)(!1), function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, a = t
                                } finally {
                                    try {
                                        l || null == o.return || o.return()
                                    } finally {
                                        if (c) throw a
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return ex(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ex(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        h = y[0],
                        b = y[1],
                        g = (0, u.useCallback)(function(t) {
                            var n;
                            return (n = function() {
                                var n, r, a, c;
                                return function(t, n) {
                                    var r, a, o, i = {
                                            label: 0,
                                            sent: function() {
                                                if (1 & o[0]) throw o[1];
                                                return o[1]
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
                                                if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                                switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = s;
                                                        break;
                                                    case 4:
                                                        return i.label++, {
                                                            value: s[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        i.label++, a = s[1], s = [0];
                                                        continue;
                                                    case 7:
                                                        s = i.ops.pop(), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                            i = 0;
                                                            continue
                                                        }
                                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                            i.label = s[1];
                                                            break
                                                        }
                                                        if (6 === s[0] && i.label < o[1]) {
                                                            i.label = o[1], o = s;
                                                            break
                                                        }
                                                        if (o && i.label < o[2]) {
                                                            i.label = o[2], i.ops.push(s);
                                                            break
                                                        }
                                                        o[2] && i.ops.pop(), i.trys.pop();
                                                        continue
                                                }
                                                s = n.call(t, i)
                                            } catch (t) {
                                                s = [6, t], a = 0
                                            } finally {
                                                r = o = 0
                                            }
                                            if (5 & s[0]) throw s[1];
                                            return {
                                                value: s[0] ? s[1] : void 0,
                                                done: !0
                                            }
                                        }
                                    }
                                }(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (t.preventDefault(), t.stopPropagation(), r = null == (n = l.fiatPurchaseData) ? void 0 : n.basePriceId, !i || !r) return [2];
                                            b(!0), u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, 4, 5]), Y(o, U.fiatPurchaseUpsellName, E.FiatPurchaseRequired), [4, S(i, r)];
                                        case 2:
                                            return (a = u.sent()) && (0, M.isValidStripeCheckoutUrl)(a) && (window.location.href = a), [3, 5];
                                        case 3:
                                            return u.sent(), null == (c = window.EventTracker) || c.fireEvent(T.PreparePurchaseUrlError), console.error("Error preparing purchase url"), [3, 5];
                                        case 4:
                                            return b(!1), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            }, function() {
                                var t = this,
                                    r = arguments;
                                return new Promise(function(a, o) {
                                    var i = n.apply(t, r);

                                    function l(t) {
                                        eS(i, a, o, l, c, "next", t)
                                    }

                                    function c(t) {
                                        eS(i, a, o, l, c, "throw", t)
                                    }
                                    l(void 0)
                                })
                            })()
                        }, [i, l, o]);
                    return (0, ee.jsx)(eP, {
                        buttonWidth: d,
                        buttonClassName: f,
                        iconClassName: s,
                        hideButtonText: p,
                        hideButtonIcon: !0,
                        buttonContent: void 0 !== m && m ? c(N) : null != (a = null == (r = l.fiatPurchaseData) ? void 0 : r.localizedFiatPrice) ? a : "",
                        onClick: v ? void 0 : g,
                        redirectUrl: v,
                        isPurchasing: h
                    })
                },
                eE = window.RobloxThumbnails;

            function eC(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }
            var eO = function(t) {
                    var n;
                    return null != (n = null == t ? void 0 : t.price.toString()) ? n : ""
                },
                ej = function(t) {
                    var n, r = t.universeId,
                        a = t.iconClassName,
                        o = t.buttonWidth,
                        i = t.buttonClassName,
                        l = t.hideButtonText,
                        c = t.redirectPurchaseUrl,
                        d = t.productDetails,
                        f = t.productInfo,
                        p = t.translate,
                        v = t.refetchPlayabilityStatus,
                        m = (0, u.useRef)();
                    null != m.current || (m.current = window.RobloxItemPurchase.createItemPurchase());
                    var y = (n = m.current, function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, a = t
                                } finally {
                                    try {
                                        l || null == o.return || o.return()
                                    } finally {
                                        if (c) throw a
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return eC(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eC(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        h = y[0],
                        b = y[1],
                        g = (0, u.useCallback)(function(t) {
                            t.preventDefault(), t.stopPropagation(), b.start()
                        }, [b]);
                    return (0, ee.jsxs)(s().Fragment, {
                        children: [(0, ee.jsx)(eP, {
                            buttonWidth: o,
                            buttonClassName: i,
                            iconClassName: a,
                            hideButtonText: l,
                            buttonContent: eO(f),
                            onClick: c ? void 0 : g,
                            redirectUrl: c
                        }), (0, ee.jsx)(h, {
                            translate: p,
                            productId: f.productId,
                            expectedPrice: f.price,
                            thumbnail: (0, ee.jsx)(eE.Thumbnail2d, {
                                type: eE.ThumbnailTypes.gameIcon,
                                size: eE.DefaultThumbnailSize,
                                targetId: parseInt(r, 10),
                                imgClassName: "game-card-thumb",
                                format: eE.ThumbnailFormat.jpeg
                            }),
                            assetName: d.name,
                            assetType: "Place",
                            sellerName: d.builder,
                            expectedCurrency: 1,
                            expectedSellerId: f.sellerId,
                            onPurchaseSuccess: v,
                            isPlace: !0
                        })]
                    })
                };

            function eA(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function eN(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function ek(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            eN(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            eN(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function eT(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return eA(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eA(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eU(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var eR = (0, ei.withTranslations)(function(t) {
                var n = t.translate,
                    r = t.universeId,
                    a = t.placeId,
                    o = t.iconClassName,
                    i = void 0 === o ? "icon-robux-white" : o,
                    l = t.buttonWidth,
                    c = void 0 === l ? et.Button.widths.full : l,
                    s = t.buttonClassName,
                    d = void 0 === s ? "btn-economy-robux-white-lg" : s,
                    f = t.refetchPlayabilityStatus,
                    p = t.hideButtonText,
                    v = void 0 !== p && p,
                    m = t.redirectPurchaseUrl,
                    y = t.playabilityStatus,
                    h = t.showDefaultPurchaseText,
                    P = eT((0, u.useState)(void 0), 2),
                    x = P[0],
                    S = P[1],
                    I = eT((0, u.useState)(void 0), 2),
                    C = I[0],
                    O = I[1];
                return ((0, u.useEffect)(function() {
                    ek(function() {
                        return eU(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    var n;
                                    return t.trys.push([0, 2, , 3]), [4, (n = [r], b(function() {
                                        var t;
                                        return g(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, w.getProductInfo(n)];
                                                case 1:
                                                    return [2, (void 0 === (t = r.sent().data.data) ? [] : t)[0]]
                                            }
                                        })
                                    })())];
                                case 1:
                                    return S(t.sent()), [3, 3];
                                case 2:
                                    return console.error(t.sent()), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })(), ek(function() {
                        return eU(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    var n;
                                    return t.trys.push([0, 2, , 3]), [4, (n = [a], b(function() {
                                        var t;
                                        return g(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, w.getPlaceDetails(n)];
                                                case 1:
                                                    return [2, (void 0 === (t = r.sent().data) ? [] : t)[0]]
                                            }
                                        })
                                    })())];
                                case 1:
                                    return O(t.sent()), [3, 3];
                                case 2:
                                    return console.error(t.sent()), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                }, [a, r]), void 0 === x || void 0 === C) ? (0, ee.jsx)(et.Loading, {}) : "Fiat" == (y === E.FiatPurchaseRequired && (null == C ? void 0 : C.fiatPurchaseData) ? "Fiat" : "Robux") ? (0, ee.jsx)(eI, {
                    universeId: r,
                    placeId: a,
                    iconClassName: i,
                    buttonWidth: c,
                    buttonClassName: d,
                    hideButtonText: v,
                    redirectPurchaseUrl: m,
                    productDetails: C,
                    translate: n,
                    showDefaultPurchaseText: void 0 !== h && h
                }) : (0, ee.jsx)(ej, {
                    universeId: r,
                    iconClassName: i,
                    buttonWidth: c,
                    buttonClassName: d,
                    hideButtonText: v,
                    redirectPurchaseUrl: m,
                    productDetails: C,
                    productInfo: x,
                    translate: n,
                    refetchPlayabilityStatus: f
                })
            }, el);

            function eD(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            var eL = function(t) {
                var n = t.universeId,
                    r = t.hideButtonText,
                    a = t.buttonClassName,
                    o = (0, u.useCallback)(function(t) {
                        var r;
                        return (r = function() {
                            return function(t, n) {
                                var r, a, o, i = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
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
                                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                case 0:
                                                case 1:
                                                    o = s;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: s[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, a = s[1], s = [0];
                                                    continue;
                                                case 7:
                                                    s = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                        i.label = s[1];
                                                        break
                                                    }
                                                    if (6 === s[0] && i.label < o[1]) {
                                                        i.label = o[1], o = s;
                                                        break
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        i.label = o[2], i.ops.push(s);
                                                        break
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            s = n.call(t, i)
                                        } catch (t) {
                                            s = [6, t], a = 0
                                        } finally {
                                            r = o = 0
                                        }
                                        if (5 & s[0]) throw s[1];
                                        return {
                                            value: s[0] ? s[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            }(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t.preventDefault(), t.stopPropagation(), Y(n, U.unverifiedSeventeenPlusUpsellName, E.ContextualPlayabilityUnverifiedSeventeenPlusUser), [4, X()];
                                    case 1:
                                        return r.sent(), [2]
                                }
                            })
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(a, o) {
                                var i = r.apply(t, n);

                                function l(t) {
                                    eD(i, a, o, l, c, "next", t)
                                }

                                function c(t) {
                                    eD(i, a, o, l, c, "throw", t)
                                }
                                l(void 0)
                            })
                        })()
                    }, [n]);
                return (0, ee.jsx)(ec, {
                    onButtonClick: o,
                    hideButtonText: r,
                    buttonClassName: a
                })
            };
            eL.defaultProps = {
                hideButtonText: void 0,
                buttonClassName: void 0
            };
            var eM = (0, ei.withTranslations)(function(t) {
                var n = t.translate,
                    r = t.iconClassName,
                    a = t.buttonWidth,
                    o = void 0 === a ? et.Button.widths.full : a,
                    i = t.buttonClassName,
                    l = t.hideButtonText;
                return (0, ee.jsxs)(et.Button, {
                    "data-testid": "play-unplayable-button",
                    width: o,
                    className: void 0 === i ? "btn-common-play-game-unplayable-lg" : i,
                    isDisabled: !0,
                    onClick: function() {
                        return null
                    },
                    children: [(0, ee.jsx)("span", {
                        className: void 0 === r ? "icon-status-unavailable-secondary" : r
                    }), !(void 0 !== l && l) && (0, ee.jsx)("span", {
                        className: "btn-text",
                        children: n(A)
                    })]
                })
            }, el);

            function eB(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function eF(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function eG(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            eF(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            eF(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function e_(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return eB(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eB(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function eV(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var eW = function() {
                    var t, n;
                    return {
                        launchData: null != (t = new URLSearchParams(window.location.search).get("launchData")) ? t : void 0,
                        eventId: null != (n = new URLSearchParams(window.location.search).get("eventId")) ? n : void 0
                    }
                },
                ez = function(t) {
                    var n = t.universeId,
                        r = t.placeId,
                        a = t.rootPlaceId,
                        o = t.privateServerLinkCode,
                        i = t.gameInstanceId,
                        l = t.status,
                        c = t.eventProperties,
                        p = void 0 === c ? {} : c,
                        m = t.appsFlyerReferralProperties,
                        h = void 0 === m ? {} : m,
                        w = t.iconClassName,
                        P = t.buttonWidth,
                        x = void 0 === P ? et.Button.widths.full : P,
                        S = t.buttonClassName,
                        I = t.disableLoadingState,
                        C = t.buttonText,
                        O = void 0 === C ? void 0 : C,
                        j = t.hideIcon,
                        A = t.analyticsCallback,
                        N = void 0 === A ? void 0 : A,
                        k = e_((0, u.useState)(void 0), 2),
                        U = k[0],
                        R = k[1],
                        D = e_((0, u.useState)(void 0), 2),
                        L = D[0],
                        M = D[1],
                        B = e_((0, u.useState)(void 0), 2),
                        G = B[0],
                        V = B[1],
                        z = e_((0, u.useState)(void 0), 2),
                        q = z[0],
                        H = z[1],
                        J = e_((0, u.useState)(void 0), 2),
                        X = J[0],
                        Q = J[1],
                        Y = e_((0, u.useState)(void 0), 2),
                        en = Y[0],
                        ea = Y[1],
                        ei = e_((0, u.useState)(void 0), 2),
                        el = ei[0],
                        ec = ei[1],
                        eu = e_((0, u.useState)(void 0), 2),
                        es = eu[0],
                        ed = eu[1],
                        ef = (0, d.useQuery)({
                            queryKey: ["getIsVNGLandingRedirectEnabled"],
                            queryFn: er.getIsVNGLandingRedirectEnabled,
                            retry: !1
                        }).data;
                    return ((0, u.useEffect)(function() {
                        eG(function() {
                            var t, r, a;
                            return eV(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, eG(function() {
                                            var t, r, a, o, i, l, c, u, s, d, p, m, h, w, P, x, S;
                                            return eV(this, function(I) {
                                                switch (I.label) {
                                                    case 0:
                                                        if (t = {
                                                                isUniverseEnabledForVoice: !1,
                                                                isUniverseEnabledForAvatarVideo: !1
                                                            }, !F.authenticatedUser.isAuthenticated) return [2, {
                                                            elegibleToSeeVoiceUpsell: !1,
                                                            universePlaceVoiceEnabledSettings: t,
                                                            showAgeVerificationOverlay: !1,
                                                            showVoiceOptInOverlay: !1,
                                                            showAvatarVideoOptInOverlay: !1,
                                                            requireExplicitVoiceConsent: !0,
                                                            useCameraU13Design: !1,
                                                            useVoiceUpsellV2Design: !1
                                                        }];
                                                        return [4, b(function() {
                                                            return g(this, function(t) {
                                                                return [2, (0, v.callBehaviour)("play-button-ui")]
                                                            })
                                                        })()];
                                                    case 1:
                                                        var E;
                                                        if (a = (r = I.sent()).playButtonOverlayWebFlag, o = r.voiceOptInWebFlag, i = r.cameraOptInWebFlag, l = r.cameraOptInWebFlagU13, c = r.requireExplicitVoiceConsent, u = r.useCameraU13Design, s = r.useVoiceUpsellV2Design, !a && !(o || i)) return [2, {
                                                            elegibleToSeeVoiceUpsell: !1,
                                                            universePlaceVoiceEnabledSettings: t,
                                                            showAgeVerificationOverlay: !1,
                                                            showVoiceOptInOverlay: !1,
                                                            showAvatarVideoOptInOverlay: !1,
                                                            requireExplicitVoiceConsent: c,
                                                            useCameraU13Design: u,
                                                            useVoiceUpsellV2Design: s
                                                        }];
                                                        return [4, (E = n, b(function() {
                                                            var t;
                                                            return g(this, function(n) {
                                                                switch (n.label) {
                                                                    case 0:
                                                                        return t = {
                                                                            withCredentials: !0,
                                                                            url: "".concat(y().voiceApi, "/v1/settings/verify/show-age-verification-overlay/").concat(E)
                                                                        }, [4, f.get(t)];
                                                                    case 1:
                                                                        return [2, n.sent().data]
                                                                }
                                                            })
                                                        })())];
                                                    case 2:
                                                        if (p = (d = I.sent()).showAgeVerificationOverlay, m = d.showVoiceOptInOverlay, h = d.showAvatarVideoOptInOverlay, w = d.elegibleToSeeVoiceUpsell, P = d.universePlaceVoiceEnabledSettings, x = !1, S = !1, !eo().getAllValuesForLayer) return [3, 5];
                                                        return [4, eo().getAllValuesForLayer("Voice.AvatarChat.Upsell")];
                                                    case 3:
                                                        return x = Boolean.apply(void 0, [I.sent().ShouldShowUpsell]), [4, eo().getAllValuesForLayer("Voice.AvatarChat.U13Upsell")];
                                                    case 4:
                                                        S = Boolean.apply(void 0, [I.sent().ShouldShowUpsell]), I.label = 5;
                                                    case 5:
                                                        return [2, {
                                                            elegibleToSeeVoiceUpsell: w,
                                                            universePlaceVoiceEnabledSettings: P,
                                                            showAgeVerificationOverlay: a && p,
                                                            showVoiceOptInOverlay: o && m,
                                                            showAvatarVideoOptInOverlay: h && (i && x || l && S),
                                                            requireExplicitVoiceConsent: c,
                                                            useCameraU13Design: u,
                                                            useVoiceUpsellV2Design: s
                                                        }]
                                                }
                                            })
                                        })()];
                                    case 1:
                                        return R(null != (r = (t = o.sent()).universePlaceVoiceEnabledSettings.isUniverseEnabledForVoice) && r), V(t.elegibleToSeeVoiceUpsell), M(t.showAgeVerificationOverlay), H(t.showVoiceOptInOverlay), Q(t.showAvatarVideoOptInOverlay), ea(t.requireExplicitVoiceConsent), ec(t.useCameraU13Design), ed(t.useVoiceUpsellV2Design), [3, 3];
                                    case 2:
                                        return o.sent(), null == (a = window.EventTracker) || a.fireEvent(T.PlayButtonShowIdentificationError), V(!1), R(!1), M(!1), H(!1), Q(!1), ea(!0), ec(!1), ed(!1), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, []), void 0 !== L || void 0 !== I && I) ? (0, ee.jsxs)(s().Fragment, {
                        children: [(0, ee.jsxs)(et.Button, {
                            "data-testid": "play-button",
                            width: x,
                            className: void 0 === S ? "btn-common-play-game-lg" : S,
                            onClick: function(t) {
                                return eG(function() {
                                    var c;
                                    return eV(this, function(u) {
                                        var s, d, f, v;
                                        switch (u.label) {
                                            case 0:
                                                if (t.preventDefault(), t.stopPropagation(), l !== E.Playable) return [3, 7];
                                                if (G && U && eo().getAllValuesForLayer("SocialVoice.VoiceUpsell").then(function() {
                                                        eo().logLayerExposure("SocialVoice.VoiceUpsell")
                                                    }).catch(function() {
                                                        console.error("error logging exposure event in play-join")
                                                    }), !L) return [3, 2];
                                                return [4, _(function() {
                                                    return W(this, function(t) {
                                                        try {
                                                            return [2, window.Roblox.IdentityVerificationService.startVerificationFlow()]
                                                        } catch (t) {
                                                            return [2, [!1, !1]]
                                                        }
                                                    })
                                                })()];
                                            case 1:
                                                return (c = e_.apply(void 0, [u.sent(), 2]))[0], c[1] && M(!1), [3, 6];
                                            case 2:
                                                if (!q) return [3, 4];
                                                return [4, (s = null == en || en, d = null != es && es, _(function() {
                                                    return W(this, function(t) {
                                                        try {
                                                            return [2, window.Roblox.IdentityVerificationService.showVoiceOptInOverlay(s, d)]
                                                        } catch (t) {
                                                            return [2, !1]
                                                        }
                                                    })
                                                })())];
                                            case 3:
                                                return u.sent() && H(!1), [3, 6];
                                            case 4:
                                                if (!X) return [3, 6];
                                                return [4, (f = null == en || en, v = null == el || el, _(function() {
                                                    return W(this, function(t) {
                                                        try {
                                                            return [2, window.Roblox.IdentityVerificationService.showAvatarVideoOptInOverlay(f, v)]
                                                        } catch (t) {
                                                            return [2, !1]
                                                        }
                                                    })
                                                })())];
                                            case 5:
                                                u.sent() && Q(!1), u.label = 6;
                                            case 6:
                                                return Z(r, n), K(r, a, o, i, p, eW(), h), [3, 8];
                                            case 7:
                                                l === E.GuestProhibited && (ef ? er.navigateToLoginWithRedirect() : $(r, h)), u.label = 8;
                                            case 8:
                                                return N && N(), [2]
                                        }
                                    })
                                })()
                            },
                            children: [!(void 0 !== j && j) && (0, ee.jsx)("span", {
                                className: void 0 === w ? "icon-common-play" : w
                            }), O && (0, ee.jsx)("span", {
                                className: "play-button-text",
                                children: O
                            })]
                        }), (0, ee.jsx)("div", {
                            id: "id-verification-container"
                        })]
                    }) : (0, ee.jsx)(et.Loading, {})
                },
                eq = function(t) {
                    return (0, ee.jsx)(d.QueryClientProvider, {
                        client: en.queryClient,
                        children: (0, ee.jsx)(ez, function(t) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    a = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                                }))), a.forEach(function(n) {
                                    var a;
                                    a = r[n], n in t ? Object.defineProperty(t, n, {
                                        value: a,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = a
                                })
                            }
                            return t
                        }({}, t))
                    })
                },
                eH = (0, ei.withTranslations)(function(t) {
                    var n = t.translate,
                        r = t.playabilityStatus,
                        a = t.unplayableDisplayText,
                        o = t.errorClassName;
                    return (0, ee.jsx)("span", {
                        "data-testid": "play-error",
                        className: void 0 === o ? "error-message" : o,
                        children: null == a || "" === a ? n(C[r] ? C[r] : C[E.UnplayableOtherReason]) : a
                    })
                }, el),
                eJ = (0, ei.withTranslations)(function(t) {
                    var n = t.translate,
                        r = t.playabilityStatus,
                        a = t.shouldShowVpcPlayButtonUpsells,
                        o = t.unplayableDisplayText,
                        i = t.shouldShowNoticeAgreementIfPlayable,
                        l = t.contextualMessageClassName,
                        c = void 0 === l ? "contextual-message" : l;
                    return Q(r, a) ? (0, ee.jsx)(eH, {
                        playabilityStatus: r,
                        unplayableDisplayText: o,
                        errorClassName: c
                    }) : r === E.Playable && i ? (0, ee.jsx)("span", {
                        "data-testid": "play-contextual-message",
                        className: c,
                        children: n(O)
                    }) : null
                }, el);

            function eK(t) {
                var n = new(l()).Deferred;
                return c.Hybrid.Game.launchGame(t, function() {
                    n.resolve(t)
                }), n
            }
            var e$ = {
                isJoinAttemptIdEnabled: !1,
                joinMultiplayerGame: function(t) {
                    var n = !0 === t.isPlayTogetherGame,
                        r = {
                            requestType: c.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                            placeId: t.placeId.toString(),
                            isPlayTogetherGame: n,
                            browserTrackerId: c.Cookies.getBrowserTrackerId()
                        };
                    return t.joinAttemptId && (r.joinAttemptId = t.joinAttemptId), t.joinAttemptOrigin && (r.joinAttemptOrigin = t.joinAttemptOrigin), eK(r)
                },
                followPlayerIntoGame: function(t) {
                    var n = {
                        requestType: c.Hybrid.Game.LAUNCH_MODES.FOLLOW_USER,
                        userId: t.userId.toString(),
                        browserTrackerId: c.Cookies.getBrowserTrackerId()
                    };
                    return t.joinAttemptId && (n.joinAttemptId = t.joinAttemptId), t.joinAttemptOrigin && (n.joinAttemptOrigin = t.joinAttemptOrigin), eK(n)
                },
                joinGameInstance: function(t) {
                    var n = !0 === t.isPlayTogetherGame,
                        r = {
                            requestType: c.Hybrid.Game.LAUNCH_MODES.GAME_INSTANCE,
                            placeId: t.placeId.toString(),
                            instanceId: t.gameId,
                            isPlayTogetherGame: n,
                            browserTrackerId: c.Cookies.getBrowserTrackerId()
                        };
                    return t.joinAttemptId && (r.joinAttemptId = t.joinAttemptId), t.joinAttemptOrigin && (r.joinAttemptOrigin = t.joinAttemptOrigin), eK(r)
                },
                joinPrivateGame: function(t) {
                    var n = {
                        requestType: c.Hybrid.Game.LAUNCH_MODES.PRIVATE_SERVER,
                        placeId: t.placeId.toString(),
                        accessCode: t.accessCode,
                        browserTrackerId: c.Cookies.getBrowserTrackerId()
                    };
                    return t.joinAttemptId && (n.joinAttemptId = t.joinAttemptId), t.joinAttemptOrigin && (n.joinAttemptOrigin = t.joinAttemptOrigin), eK(n)
                },
                playTogetherGame: function(t) {
                    var n = {
                        requestType: c.Hybrid.Game.LAUNCH_MODES.SIMPLE_GAME,
                        placeId: t.placeId.toString(),
                        conversationId: t.conversationId.toString(),
                        browserTrackerId: c.Cookies.getBrowserTrackerId()
                    };
                    return t.joinAttemptId && (n.joinAttemptId = t.joinAttemptId), t.joinAttemptOrigin && (n.joinAttemptOrigin = t.joinAttemptOrigin), eK(n)
                }
            };
            l()(document).ready(function() {
                tZ = new c.TranslationResourceProvider().getTranslationResource("Feature.GameLaunchGuestMode")
            });
            var eX = {
                restrictGuests: function(t) {
                    var n = new(l()).Deferred;
                    return c.CurrentUser.isAuthenticated ? n.resolve(t) : c.Dialog.open({
                        titleText: tZ.get("Heading.Dialog.SignUpOrLogin"),
                        bodyContent: tZ.get("Description.Dialog.ConnectionsSignUpOrLogin"),
                        cssClass: "soli-modal",
                        acceptColor: c.Dialog.green,
                        acceptText: tZ.get("Action.Dialog.SignUp"),
                        declineText: tZ.get("Action.Dialog.Login"),
                        onDecline: function() {
                            c.FormEvents && c.FormEvents.SendInteractionClick("gameDetails", "gameLaunch_login");
                            var t = "/login?returnurl=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search);
                            window.location.href = c.Endpoints ? c.Endpoints.getAbsoluteUrl(t) : t
                        },
                        onAccept: function() {
                            var t;
                            c.FormEvents && c.FormEvents.SendInteractionClick("gameDetails", "gameLaunch_signup"), t = "/CreateAccount?returnurl=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search), window.location.href = c.Endpoints ? c.Endpoints.getAbsoluteUrl(t) : t
                        }
                    }), n
                }
            };

            function eZ(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            var eQ = {
                gameLaunchInterface: null,
                gameLaunchLogger: null,
                initialized: new Promise(function(t) {
                    tQ = t
                })
            };

            function eY(t, n, r) {
                var a, o, i = (a = function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))), a.forEach(function(n) {
                            var a;
                            a = r[n], n in t ? Object.defineProperty(t, n, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = a
                        })
                    }
                    return t
                }({}, t), o = o = {
                    joinAttemptId: null != n ? n : B.uuidService.generateRandomUuid()
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, a)
                    }
                    return r
                })(Object(o)).forEach(function(t) {
                    Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(o, t))
                }), a);
                return r && (i.joinAttemptOrigin = r), i
            }

            function e0(t, n, r) {
                var a, o, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
                    d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "";
                i && l && (a = {
                    url: "".concat(c.EnvironmentUrls.gameJoinApi, "/v1/team-create-preemptive"),
                    withCredentials: !0,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }, o = {
                    gameJoinAttemptId: B.uuidService.generateRandomUuid(),
                    placeId: t
                }, B.httpService.post(a, o)), eQ.gameLaunchInterface.editGameInStudio(t, n, r, i && u, s, d)
            }

            function e1(t, n, r, a, o, i, l) {
                var c = {
                    placeId: t,
                    launchData: null == i ? void 0 : i.launchData,
                    eventId: null == i ? void 0 : i.eventId,
                    isPlayTogetherGame: !0 === r,
                    referredByPlayerId: l
                };
                return eQ.gameLaunchInterface.isJoinAttemptIdEnabled && (c = eY(c, a, o)), eX.restrictGuests(c).then(eQ.gameLaunchInterface.joinMultiplayerGame)
            }
            l().fn.bindGameLaunch = function() {
                return this.find(".VisitButtonPlayGLI").click(function() {
                    var t = l()(this);
                    e1(t.attr("placeid"), t.data("is-membership-level-ok"))
                }), this.find(".VisitButtonEditGLI").click(function() {
                    var t = l()(this);
                    e0(t.attr("placeid"), t.data("universeid"), !!t.data("allowupload"))
                }), this
            }, l()(document).ready(function() {
                l()("body").bindGameLaunch()
            }), Object.assign(eQ, {
                authenticationChecker: eX,
                joinMultiplayerGame: e1,
                openStudio: function() {
                    eQ.gameLaunchInterface.openStudio()
                },
                openPluginInStudio: function(t) {
                    eQ.gameLaunchInterface.openPluginInStudio(t)
                },
                editGameInStudio: e0,
                followPlayerIntoGame: function(t, n, r) {
                    var a = {
                        userId: t
                    };
                    return eQ.gameLaunchInterface.isJoinAttemptIdEnabled && (a = eY(a, n, r)), eX.restrictGuests(a).then(eQ.gameLaunchInterface.followPlayerIntoGame)
                },
                joinGameInstance: function(t, n, r, a, o, i, l) {
                    var c = {
                        placeId: t,
                        gameId: n,
                        isPlayTogetherGame: !0 === a,
                        referredByPlayerId: l
                    };
                    return eQ.gameLaunchInterface.isJoinAttemptIdEnabled && (c = eY(c, o, i)), eX.restrictGuests(c).then(eQ.gameLaunchInterface.joinGameInstance)
                },
                joinPrivateGame: function(t, n, r, a, o) {
                    var i;
                    return (i = function() {
                        var i;
                        return function(t, n) {
                            var r, a, o, i = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
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
                                        if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                        switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                            case 0:
                                            case 1:
                                                o = s;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, a = s[1], s = [0];
                                                continue;
                                            case 7:
                                                s = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                    i.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && i.label < o[1]) {
                                                    i.label = o[1], o = s;
                                                    break
                                                }
                                                if (o && i.label < o[2]) {
                                                    i.label = o[2], i.ops.push(s);
                                                    break
                                                }
                                                o[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        s = n.call(t, i)
                                    } catch (t) {
                                        s = [6, t], a = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & s[0]) throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, eQ.initialized];
                                case 1:
                                    return l.sent(), i = {
                                        placeId: t,
                                        accessCode: n,
                                        linkCode: r
                                    }, eQ.gameLaunchInterface.isJoinAttemptIdEnabled && (i = eY(i, a, o)), [2, eQ.gameLaunchInterface.joinPrivateGame(i)]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, a) {
                            var o = i.apply(t, n);

                            function l(t) {
                                eZ(o, r, a, l, c, "next", t)
                            }

                            function c(t) {
                                eZ(o, r, a, l, c, "throw", t)
                            }
                            l(void 0)
                        })
                    })()
                },
                playTogetherGame: function(t, n, r, a) {
                    var o = {
                        placeId: t,
                        conversationId: n
                    };
                    return eQ.gameLaunchInterface.isJoinAttemptIdEnabled && (o = eY(o, r, a)), eX.restrictGuests(o).then(eQ.gameLaunchInterface.playTogetherGame)
                },
                setGameLaunchInterface: function(t) {
                    eQ.gameLaunchInterface = t, tQ()
                },
                setGameLaunchLogger: function(t) {
                    eQ.gameLaunchLogger = t
                },
                tryAssetInStudio: function(t) {
                    eQ.gameLaunchInterface.tryAssetInStudio(t)
                },
                isJoinAttemptIdEnabled: function() {
                    var t;
                    return null == (t = eQ.gameLaunchInterface) ? void 0 : t.isJoinAttemptIdEnabled
                },
                startClientAttemptedEvent: "startClientAttempted",
                startClientFailedEvent: "startClientFailed",
                startClientSucceededEvent: "startClientSucceeded",
                beginInstallEvent: "beginInstall",
                successfulInstallEvent: "successfulInstall",
                manualDownloadEvent: "manualDownload"
            });
            var e2 = {
                lastContext: "unknown",
                contextCategories: {
                    joinUser: "JoinUser"
                }
            };

            function e3(t, n, r, a, o) {
                var i, l, u;
                null !== n && "" !== n && "unknown" !== n && (e2.lastContext = n), c.EventStream.SendEvent(t, e2.lastContext, {
                    lType: "protocol",
                    pid: r,
                    refuid: a,
                    pg: (i = window.location.pathname.toLowerCase(), l = "profile", -1 !== (u = i.lastIndexOf(l)) && i.length === u + l.length ? l : 0 === i.indexOf("/develop") ? "develop" : 0 === i.indexOf("/discover") ? "games" : "gameDetail"),
                    joinAttemptId: o
                })
            }
            Object.assign(e2, {
                SendGamePlayIntent: function(t, n, r, a) {
                    e3("gamePlayIntent", t, n, r, a), l()(document).trigger("playButton:gamePlayIntent")
                },
                SendDevelopIntent: function(t, n) {
                    e3("developIntent", t, n)
                },
                SendInstallBegin: function(t, n) {
                    e3("installBegin", t, n)
                },
                SendInstallSuccess: function(t, n) {
                    e3("installSuccess", t, n)
                },
                SendClientStartAttempt: function(t, n) {
                    e3("clientStartAttempt", t, n)
                },
                SendClientStartSuccessWeb: function(t, n) {
                    e3("clientStartSuccessWeb", t, n)
                },
                SendManualDownloadClick: function(t, n) {
                    e3("manualDownload", t, n)
                }
            });
            var e5 = {
                    logToConsoleEnabled: !1,
                    logToGAEnabled: !0,
                    logToEphemeralCountersEnabled: !0
                },
                e4 = {};
            e4[eQ.startClientAttemptedEvent] = ["GameLaunchAttempt_<os>", "GameLaunchAttempt_<os>_<launchmethod>"], e4[eQ.startClientSucceededEvent] = ["GameLaunchSuccessWeb_<os>", "GameLaunchSuccessWeb_<os>_<launchmethod>"];
            var e6 = {};
            c.GaEventSettings.gaLaunchAttemptAndLaunchSuccessEnabled && (e6[eQ.startClientAttemptedEvent] = "Launch Attempt", e6[eQ.startClientSucceededEvent] = "Launch Success"), e6[eQ.beginInstallEvent] = "Install Begin", e6[eQ.successfulInstallEvent] = "Install Success", e6[eQ.manualDownloadEvent] = "Manual Download";
            var e8 = {};

            function e7(t) {
                e5.logToConsoleEnabled && console.log(t)
            }

            function e9(t, n) {
                if (e5.logToEphemeralCountersEnabled) {
                    var r, a = l()("#PlaceLauncherStatusPanel").data("os-name");
                    "Windows" === a && (a = "Win32");
                    var o = t;
                    o = (o = o.replace("<os>", a)).replace("<launchmethod>", n), (null == (r = window.EventTracker) ? void 0 : r.fireEvent) && window.EventTracker.fireEvent(o)
                }
            }

            function te(t, n, r, a) {
                void 0 !== window.GoogleAnalyticsEvents && e5.logToGAEnabled && window.GoogleAnalyticsEvents.FireEvent && window.GoogleAnalyticsEvents.FireEvent([t, n, r, a])
            }

            function tt(t, n) {
                e7("".concat(t.type, ": ").concat(JSON.stringify(n))), e4[t.type] && l().each(e4[t.type], function(t, r) {
                    e9(r, n.launchMethod)
                }), e6[t.type] && te(n.launchMethod, e6[t.type], n.params.launchMode, 0), e8[t.type] && e8[t.type](null, n.params.placeId)
            }
            e8[eQ.startClientAttemptedEvent] = e2.SendClientStartAttempt, e8[eQ.startClientSucceededEvent] = e2.SendClientStartSuccessWeb, e8[eQ.beginInstallEvent] = e2.SendInstallBegin, e8[eQ.successfulInstallEvent] = e2.SendInstallSuccess, e8[eQ.manualDownloadEvent] = e2.SendManualDownloadClick, Object.assign(e5, {
                logToConsole: e7,
                logToEphemeralCounters: e9,
                logToGA: te
            }), l()(document).ready(function() {
                var t = [eQ.startClientAttemptedEvent, eQ.startClientFailedEvent, eQ.startClientSucceededEvent, eQ.beginInstallEvent, eQ.successfulInstallEvent, eQ.manualDownloadEvent];
                l()(eQ).on(t.join(" "), tt)
            });
            var tn = function() {
                    var t = "click";
                    l()("body").on(t, ".VisitButtonPlay, .VisitButtonPlayGLI", function() {
                        var t, n = l()(this);
                        if ((n.hasClass("VisitButtonPlay") || n.hasClass("VisitButtonPlayGLI")) && (t = "PlayButton"), t) {
                            var r = l()(this).attr("placeid"),
                                a = c.UrlParser ? c.UrlParser.getParameterValueByName("rbxp") : null;
                            e2.SendGamePlayIntent(t, r, a)
                        }
                    }), l()("body").on(t, ".VisitButtonEdit, .VisitButtonEditGLI", function() {
                        var t = l()(this).attr("placeid");
                        e2.SendDevelopIntent("Edit", t)
                    }), l()("#rbx-running-games").on(t, ".rbx-game-server-item .rbx-game-server-join", function() {
                        var t = l()(this).data("placeid");
                        t && e2.SendGamePlayIntent("JoinInstance", t)
                    }), l()("#rbx-friends-running-games").on(t, ".rbx-friends-game-server-item .rbx-friends-game-server-join", function() {
                        var t = l()(this).data("placeid");
                        t && e2.SendGamePlayIntent("JoinInstance", t)
                    }), l()("#game-instances").on(t, "#rbx-vip-servers .rbx-vip-server-item .rbx-vip-server-join", function() {
                        var t = l()(this).data("placeid");
                        t && e2.SendGamePlayIntent("PrivateServer", t)
                    })
                },
                tr = window.ReactDOM,
                ta = r.n(tr),
                to = JSON.parse('{"P":["Feature.GameLaunchGuestMode","Common.VisitGame","CommonUI.Controls","Feature.ExperienceDetails","Feature.DownloadLanding"]}'),
                ti = "deeplink",
                tl = ["/games/{placeId}/{placeName}", "/share-links?code={linkId}&type=ExperienceInvite"].map(function(t) {
                    return new RegExp(t.replace(/\{.*?\}/g, "([^/]+)"))
                }),
                tc = ["/share-links"],
                tu = ["ExperienceAffiliate"],
                ts = function(t) {
                    var n;
                    return tc.includes(t.pathname) && tu.includes(null != (n = t.searchParams.get("type")) ? n : "")
                },
                td = function(t) {
                    try {
                        var n = new URL(t).searchParams.get("referralUrl");
                        if (!n) return null;
                        var r = new URL(decodeURIComponent(n));
                        if (ts(r)) return r.href;
                        return null
                    } catch (t) {
                        return null
                    }
                },
                tf = function(t, n, r) {
                    var a;
                    try {
                        null == (a = window.Roblox.EventStream) || a.SendEventWithTarget("tokenAction", "EdpDownloadRobloxInstaller", {
                            link_url: n,
                            group: ti,
                            action: "create-token-attempt",
                            status_code: r,
                            token: null != t ? t : ""
                        }, window.Roblox.EventStream.TargetTypes.WWW)
                    } catch (t) {}
                };

            function tp(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            var tv = "".concat(y().apiGatewayUrl, "/deferred-deep-link/token-api"),
                tm = function(t) {
                    var n;
                    return (n = function() {
                        var n, r, a, o, i;
                        return function(t, n) {
                            var r, a, o, i = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
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
                                        if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                        switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                            case 0:
                                            case 1:
                                                o = s;
                                                break;
                                            case 4:
                                                return i.label++, {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                i.label++, a = s[1], s = [0];
                                                continue;
                                            case 7:
                                                s = i.ops.pop(), i.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    i = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                    i.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && i.label < o[1]) {
                                                    i.label = o[1], o = s;
                                                    break
                                                }
                                                if (o && i.label < o[2]) {
                                                    i.label = o[2], i.ops.push(s);
                                                    break
                                                }
                                                o[2] && i.ops.pop(), i.trys.pop();
                                                continue
                                        }
                                        s = n.call(t, i)
                                    } catch (t) {
                                        s = [6, t], a = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & s[0]) throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }
                            }
                        }(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    n = {
                                        linkId: t,
                                        group: ti
                                    }, r = {
                                        withCredentials: !0,
                                        url: "".concat(tv, "/create-token")
                                    }, l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), [4, f.post(r, n)];
                                case 2:
                                    return tf(i = null != (o = (a = l.sent()).data.token) ? o : null, t, a.status), [2, i];
                                case 3:
                                    return l.sent(), [2, null];
                                case 4:
                                    return [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            r = arguments;
                        return new Promise(function(a, o) {
                            var i = n.apply(t, r);

                            function l(t) {
                                tp(i, a, o, l, c, "next", t)
                            }

                            function c(t) {
                                tp(i, a, o, l, c, "throw", t)
                            }
                            l(void 0)
                        })
                    })()
                };

            function ty(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }
            var th = window.Roblox["core-scripts"].meta.device,
                tb = window.Roblox["core-scripts"].endpoints,
                tg = "undefined" != typeof window ? window.navigator.userAgent : "",
                tw = /Mac OS X/i.test(tg),
                tP = /Windows NT/i.test(tg);
            /Linux/i.test(tg) && /Android/i.test(tg);
            var tx = /Android/i.test(tg),
                tS = /iPhone|iPad|iPod/i.test(tg),
                tI = function(t) {
                    var n = t.alt,
                        r = void 0 === n ? "App Icon" : n,
                        a = t.className,
                        o = t.title,
                        i = t.style;
                    return s().createElement("div", {
                        className: "app-icon-bluebg app-icon-".concat(tw ? "mac" : tP ? "windows" : tS ? "ios" : tx ? "android" : "windows", " ").concat(void 0 === a ? "" : a),
                        role: "img",
                        "aria-label": r,
                        title: (void 0 === o ? "" : o) || r,
                        style: void 0 === i ? {} : i
                    })
                },
                tE = function() {
                    return (tE = Object.assign || function(t) {
                        for (var n, r = 1, a = arguments.length; r < a; r++)
                            for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                        return t
                    }).apply(this, arguments)
                };

            function tC(t, n) {
                var r = {};
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && 0 > n.indexOf(a) && (r[a] = t[a]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (a = Object.getOwnPropertySymbols(t); o < a.length; o++) 0 > n.indexOf(a[o]) && Object.prototype.propertyIsEnumerable.call(t, a[o]) && (r[a[o]] = t[a[o]])
                }
                return r
            }
            var tO = function() {
                for (var t, n, r = 0, a = "", o = arguments.length; r < o; r++)(t = arguments[r]) && (n = function t(n) {
                    var r, a, o = "";
                    if ("string" == typeof n || "number" == typeof n) o += n;
                    else if ("object" == (void 0 === n ? "undefined" : n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n))
                        if (Array.isArray(n)) {
                            var i = n.length;
                            for (r = 0; r < i; r++) n[r] && (a = t(n[r])) && (o && (o += " "), o += a)
                        } else
                            for (a in n) n[a] && (o && (o += " "), o += a);
                    return o
                }(t)) && (a && (a += " "), a += n);
                return a
            };

            function tj(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }
            var tA = (null == (tY = globalThis) ? void 0 : tY.document) ? u.useLayoutEffect : function() {},
                tN = u[" useId ".trim().toString()] || function() {},
                tk = 0;

            function tT(t) {
                var n, r = (n = u.useState(tN()), function(t) {
                        if (Array.isArray(t)) return t
                    }(n) || function(t, n) {
                        var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != o) {
                            var i = [],
                                l = !0,
                                c = !1;
                            try {
                                for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                            } catch (t) {
                                c = !0, a = t
                            } finally {
                                try {
                                    l || null == o.return || o.return()
                                } finally {
                                    if (c) throw a
                                }
                            }
                            return i
                        }
                    }(n, 2) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return tj(t, 2);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tj(t, n)
                        }
                    }(n, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    a = r[0],
                    o = r[1];
                return tA(function() {
                    t || o(function(t) {
                        return null != t ? t : String(tk++)
                    })
                }, [t]), t || (a ? "radix-".concat(a) : "")
            }

            function tU(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function tR(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function tD(t, n) {
                return null != n && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n
            }

            function tL(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), a.forEach(function(n) {
                        tR(t, n, r[n])
                    })
                }
                return t
            }

            function tM(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, a)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function tB(t, n) {
                if (null == t) return {};
                var r, a, o = function(t, n) {
                    if (null == t) return {};
                    var r, a, o = {},
                        i = Object.keys(t);
                    for (a = 0; a < i.length; a++) r = i[a], n.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < i.length; a++) r = i[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function tF(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || t_(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function tG(t) {
                return function(t) {
                    if (Array.isArray(t)) return tU(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || t_(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function t_(t, n) {
                if (t) {
                    if ("string" == typeof t) return tU(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tU(t, n)
                }
            }

            function tV(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = r.checkForDefaultPrevented,
                    o = void 0 === a || a;
                return function(r) {
                    if (null == t || t(r), !1 === o || !r.defaultPrevented) return null == n ? void 0 : n(r)
                }
            }

            function tW(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function tz() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        a = n.map(function(n) {
                            var a = tW(n, t);
                            return r || "function" != typeof a || (r = !0), a
                        });
                    if (r) return function() {
                        for (var t = 0; t < a.length; t++) {
                            var r = a[t];
                            "function" == typeof r ? r() : tW(n[t], null)
                        }
                    }
                }
            }

            function tq() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return u.useCallback(tz.apply(void 0, tG(n)), n)
            }
            var tH = Symbol("radix.slottable");

            function tJ(t) {
                return u.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === tH
            }
            var tK = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                var r, a, o, i, l, c = (a = r = "Primitive.".concat(n), (o = u.forwardRef(function(t, n) {
                        var r = t.children,
                            a = tB(t, ["children"]);
                        if (u.isValidElement(r)) {
                            var o, i, l, c = (l = null == (o = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : o.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                s = function(t, n) {
                                    var r = tL({}, n);
                                    for (var a in n) ! function(a) {
                                        var o = t[a],
                                            i = n[a];
                                        /^on[A-Z]/.test(a) ? o && i ? r[a] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, tG(n)), o.apply(void 0, tG(n))
                                        } : o && (r[a] = o) : "style" === a ? r[a] = tL({}, o, i) : "className" === a && (r[a] = [o, i].filter(Boolean).join(" "))
                                    }(a);
                                    return tL({}, t, r)
                                }(a, r.props);
                            return r.type !== u.Fragment && (s.ref = n ? tz(n, c) : c), u.cloneElement(r, s)
                        }
                        return u.Children.count(r) > 1 ? u.Children.only(null) : null
                    })).displayName = "".concat(a, ".SlotClone"), i = o, (l = u.forwardRef(function(t, n) {
                        var r = t.children,
                            a = tB(t, ["children"]),
                            o = u.Children.toArray(r),
                            l = o.find(tJ);
                        if (l) {
                            var c = l.props.children,
                                s = o.map(function(t) {
                                    return t === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, ee.jsx)(i, tM(tL({}, a), {
                                ref: n,
                                children: u.isValidElement(c) ? u.cloneElement(c, void 0, s) : null
                            }))
                        }
                        return (0, ee.jsx)(i, tM(tL({}, a), {
                            ref: n,
                            children: r
                        }))
                    })).displayName = "".concat(r, ".Slot"), l),
                    s = u.forwardRef(function(t, r) {
                        var a = t.asChild,
                            o = tB(t, ["asChild"]),
                            i = a ? c : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, ee.jsx)(i, tM(tL({}, o), {
                            ref: r
                        }))
                    });
                return s.displayName = "Primitive.".concat(n), tM(tL({}, t), tR({}, n, s))
            }, {});

            function t$(t) {
                var n = u.useRef(t);
                return u.useEffect(function() {
                    n.current = t
                }), u.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(tG(a)))
                    }
                }, [])
            }
            var tX, tZ, tQ, tY, t0, t1, t2 = "dismissableLayer.update",
                t3 = u.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                t5 = u.forwardRef(function(t, n) {
                    var r, a, o = t.disableOutsidePointerEvents,
                        i = void 0 !== o && o,
                        l = t.onEscapeKeyDown,
                        c = t.onPointerDownOutside,
                        s = t.onFocusOutside,
                        d = t.onInteractOutside,
                        f = t.onDismiss,
                        p = tB(t, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]),
                        v = u.useContext(t3),
                        m = tF(u.useState(null), 2),
                        y = m[0],
                        h = m[1],
                        b = null != (a = null == y ? void 0 : y.ownerDocument) ? a : null == (r = globalThis) ? void 0 : r.document,
                        g = tF(u.useState({}), 2)[1],
                        w = tq(n, function(t) {
                            return h(t)
                        }),
                        P = Array.from(v.layers),
                        x = tF(tG(v.layersWithOutsidePointerEventsDisabled).slice(-1), 1)[0],
                        S = P.indexOf(x),
                        I = y ? P.indexOf(y) : -1,
                        E = v.layersWithOutsidePointerEventsDisabled.size > 0,
                        C = I >= S,
                        O = function(t) {
                            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                                a = t$(t),
                                o = u.useRef(!1),
                                i = u.useRef(function() {});
                            return u.useEffect(function() {
                                var t = function(t) {
                                        if (t.target && !o.current) {
                                            var n = function() {
                                                    t6("dismissableLayer.pointerDownOutside", a, l, {
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
                                        o.current = !1
                                    },
                                    n = window.setTimeout(function() {
                                        r.addEventListener("pointerdown", t)
                                    }, 0);
                                return function() {
                                    window.clearTimeout(n), r.removeEventListener("pointerdown", t), r.removeEventListener("click", i.current)
                                }
                            }, [r, a]), {
                                onPointerDownCapture: function() {
                                    return o.current = !0
                                }
                            }
                        }(function(t) {
                            var n = t.target,
                                r = tG(v.branches).some(function(t) {
                                    return t.contains(n)
                                });
                            C && !r && (null == c || c(t), null == d || d(t), t.defaultPrevented || null == f || f())
                        }, b),
                        j = function(t) {
                            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                                a = t$(t),
                                o = u.useRef(!1);
                            return u.useEffect(function() {
                                var t = function(t) {
                                    t.target && !o.current && t6("dismissableLayer.focusOutside", a, {
                                        originalEvent: t
                                    }, {
                                        discrete: !1
                                    })
                                };
                                return r.addEventListener("focusin", t),
                                    function() {
                                        return r.removeEventListener("focusin", t)
                                    }
                            }, [r, a]), {
                                onFocusCapture: function() {
                                    return o.current = !0
                                },
                                onBlurCapture: function() {
                                    return o.current = !1
                                }
                            }
                        }(function(t) {
                            var n = t.target;
                            tG(v.branches).some(function(t) {
                                return t.contains(n)
                            }) || (null == s || s(t), null == d || d(t), t.defaultPrevented || null == f || f())
                        }, b);
                    return function(t) {
                        var n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (n = globalThis) ? void 0 : n.document,
                            o = (r = u.useRef(t), u.useEffect(function() {
                                r.current = t
                            }), u.useMemo(function() {
                                return function() {
                                    for (var t, n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                                    return null == (t = r.current) ? void 0 : t.call.apply(t, [r].concat(tG(a)))
                                }
                            }, []));
                        u.useEffect(function() {
                            var t = function(t) {
                                "Escape" === t.key && o(t)
                            };
                            return a.addEventListener("keydown", t, {
                                    capture: !0
                                }),
                                function() {
                                    return a.removeEventListener("keydown", t, {
                                        capture: !0
                                    })
                                }
                        }, [o, a])
                    }(function(t) {
                        I === v.layers.size - 1 && (null == l || l(t), !t.defaultPrevented && f && (t.preventDefault(), f()))
                    }, b), u.useEffect(function() {
                        if (y) return i && (0 === v.layersWithOutsidePointerEventsDisabled.size && (t1 = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(y)), v.layers.add(y), t4(),
                            function() {
                                i && 1 === v.layersWithOutsidePointerEventsDisabled.size && (b.body.style.pointerEvents = t1)
                            }
                    }, [y, b, i, v]), u.useEffect(function() {
                        return function() {
                            y && (v.layers.delete(y), v.layersWithOutsidePointerEventsDisabled.delete(y), t4())
                        }
                    }, [y, v]), u.useEffect(function() {
                        var t = function() {
                            return g({})
                        };
                        return document.addEventListener(t2, t),
                            function() {
                                return document.removeEventListener(t2, t)
                            }
                    }, []), (0, ee.jsx)(tK.div, tM(tL({}, p), {
                        ref: w,
                        style: tL({
                            pointerEvents: E ? C ? "auto" : "none" : void 0
                        }, t.style),
                        onFocusCapture: tV(t.onFocusCapture, j.onFocusCapture),
                        onBlurCapture: tV(t.onBlurCapture, j.onBlurCapture),
                        onPointerDownCapture: tV(t.onPointerDownCapture, O.onPointerDownCapture)
                    }))
                });

            function t4() {
                var t = new CustomEvent(t2);
                document.dispatchEvent(t)
            }

            function t6(t, n, r, a) {
                var o = a.discrete,
                    i = r.originalEvent.target,
                    l = new CustomEvent(t, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                n && i.addEventListener(t, n, {
                    once: !0
                }), o ? i && tr.flushSync(function() {
                    return i.dispatchEvent(l)
                }) : i.dispatchEvent(l)
            }

            function t8(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function t7() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        a = n.map(function(n) {
                            var a = t8(n, t);
                            return r || "function" != typeof a || (r = !0), a
                        });
                    if (r) return function() {
                        for (var t = 0; t < a.length; t++) {
                            var r = a[t];
                            "function" == typeof r ? r() : t8(n[t], null)
                        }
                    }
                }
            }
            t5.displayName = "DismissableLayer", u.forwardRef(function(t, n) {
                var r = u.useContext(t3),
                    a = u.useRef(null),
                    o = tq(n, a);
                return u.useEffect(function() {
                    var t = a.current;
                    if (t) return r.branches.add(t),
                        function() {
                            r.branches.delete(t)
                        }
                }, [r.branches]), (0, ee.jsx)(tK.div, tM(tL({}, t), {
                    ref: o
                }))
            }).displayName = "DismissableLayerBranch";
            var t9 = Symbol("radix.slottable");

            function ne(t) {
                return u.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === t9
            }
            var nt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                var r, a, o, i, l, c = (a = r = "Primitive.".concat(n), (o = u.forwardRef(function(t, n) {
                        var r = t.children,
                            a = tB(t, ["children"]);
                        if (u.isValidElement(r)) {
                            var o, i, l, c = (l = null == (o = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : o.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                s = function(t, n) {
                                    var r = tL({}, n);
                                    for (var a in n) ! function(a) {
                                        var o = t[a],
                                            i = n[a];
                                        /^on[A-Z]/.test(a) ? o && i ? r[a] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, tG(n)), o.apply(void 0, tG(n))
                                        } : o && (r[a] = o) : "style" === a ? r[a] = tL({}, o, i) : "className" === a && (r[a] = [o, i].filter(Boolean).join(" "))
                                    }(a);
                                    return tL({}, t, r)
                                }(a, r.props);
                            return r.type !== u.Fragment && (s.ref = n ? t7(n, c) : c), u.cloneElement(r, s)
                        }
                        return u.Children.count(r) > 1 ? u.Children.only(null) : null
                    })).displayName = "".concat(a, ".SlotClone"), i = o, (l = u.forwardRef(function(t, n) {
                        var r = t.children,
                            a = tB(t, ["children"]),
                            o = u.Children.toArray(r),
                            l = o.find(ne);
                        if (l) {
                            var c = l.props.children,
                                s = o.map(function(t) {
                                    return t === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, ee.jsx)(i, tM(tL({}, a), {
                                ref: n,
                                children: u.isValidElement(c) ? u.cloneElement(c, void 0, s) : null
                            }))
                        }
                        return (0, ee.jsx)(i, tM(tL({}, a), {
                            ref: n,
                            children: r
                        }))
                    })).displayName = "".concat(r, ".Slot"), l),
                    s = u.forwardRef(function(t, r) {
                        var a = t.asChild,
                            o = tB(t, ["asChild"]),
                            i = a ? c : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, ee.jsx)(i, tM(tL({}, o), {
                            ref: r
                        }))
                    });
                return s.displayName = "Primitive.".concat(n), tM(tL({}, t), tR({}, n, s))
            }, {});

            function nn(t) {
                var n = u.useRef(t);
                return u.useEffect(function() {
                    n.current = t
                }), u.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(tG(a)))
                    }
                }, [])
            }
            var nr = "focusScope.autoFocusOnMount",
                na = "focusScope.autoFocusOnUnmount",
                no = {
                    bubbles: !1,
                    cancelable: !0
                },
                ni = u.forwardRef(function(t, n) {
                    var r = t.loop,
                        a = void 0 !== r && r,
                        o = t.trapped,
                        i = void 0 !== o && o,
                        l = t.onMountAutoFocus,
                        c = t.onUnmountAutoFocus,
                        s = tB(t, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]),
                        d = tF(u.useState(null), 2),
                        f = d[0],
                        p = d[1],
                        v = nn(l),
                        m = nn(c),
                        y = u.useRef(null),
                        h = function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return u.useCallback(t7.apply(void 0, tG(n)), n)
                        }(n, function(t) {
                            return p(t)
                        }),
                        b = u.useRef({
                            paused: !1,
                            pause: function() {
                                this.paused = !0
                            },
                            resume: function() {
                                this.paused = !1
                            }
                        }).current;
                    u.useEffect(function() {
                        if (i) {
                            var t = function(t) {
                                    if (!b.paused && f) {
                                        var n = t.target;
                                        f.contains(n) ? y.current = n : nu(y.current, {
                                            select: !0
                                        })
                                    }
                                },
                                n = function(t) {
                                    if (!b.paused && f) {
                                        var n = t.relatedTarget;
                                        null !== n && (f.contains(n) || nu(y.current, {
                                            select: !0
                                        }))
                                    }
                                };
                            document.addEventListener("focusin", t), document.addEventListener("focusout", n);
                            var r = new MutationObserver(function(t) {
                                var n = !0,
                                    r = !1,
                                    a = void 0;
                                if (document.activeElement === document.body) try {
                                    for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) o.value.removedNodes.length > 0 && nu(f)
                                } catch (t) {
                                    r = !0, a = t
                                } finally {
                                    try {
                                        n || null == i.return || i.return()
                                    } finally {
                                        if (r) throw a
                                    }
                                }
                            });
                            return f && r.observe(f, {
                                    childList: !0,
                                    subtree: !0
                                }),
                                function() {
                                    document.removeEventListener("focusin", t), document.removeEventListener("focusout", n), r.disconnect()
                                }
                        }
                    }, [i, f, b.paused]), u.useEffect(function() {
                        if (f) {
                            ns.add(b);
                            var t = document.activeElement;
                            if (!f.contains(t)) {
                                var n = new CustomEvent(nr, no);
                                f.addEventListener(nr, v), f.dispatchEvent(n), n.defaultPrevented || (! function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = n.select,
                                        a = void 0 !== r && r,
                                        o = document.activeElement,
                                        i = !0,
                                        l = !1,
                                        c = void 0;
                                    try {
                                        for (var u, s = t[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) {
                                            var d = u.value;
                                            if (nu(d, {
                                                    select: a
                                                }), document.activeElement !== o) return
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
                                }(nl(f).filter(function(t) {
                                    return "A" !== t.tagName
                                }), {
                                    select: !0
                                }), document.activeElement === t && nu(f))
                            }
                            return function() {
                                f.removeEventListener(nr, v), setTimeout(function() {
                                    var n = new CustomEvent(na, no);
                                    f.addEventListener(na, m), f.dispatchEvent(n), n.defaultPrevented || nu(null != t ? t : document.body, {
                                        select: !0
                                    }), f.removeEventListener(na, m), ns.remove(b)
                                }, 0)
                            }
                        }
                    }, [f, v, m, b]);
                    var g = u.useCallback(function(t) {
                        if ((a || i) && !b.paused) {
                            var n = "Tab" === t.key && !t.altKey && !t.ctrlKey && !t.metaKey,
                                r = document.activeElement;
                            if (n && r) {
                                var o, l = t.currentTarget,
                                    c = tF([nc(o = nl(l), l), nc(o.reverse(), l)], 2),
                                    u = c[0],
                                    s = c[1];
                                u && s ? t.shiftKey || r !== s ? t.shiftKey && r === u && (t.preventDefault(), a && nu(s, {
                                    select: !0
                                })) : (t.preventDefault(), a && nu(u, {
                                    select: !0
                                })) : r === l && t.preventDefault()
                            }
                        }
                    }, [a, i, b.paused]);
                    return (0, ee.jsx)(nt.div, tM(tL({
                        tabIndex: -1
                    }, s), {
                        ref: h,
                        onKeyDown: g
                    }))
                });

            function nl(t) {
                for (var n = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: function(t) {
                            var n = "INPUT" === t.tagName && "hidden" === t.type;
                            return t.disabled || t.hidden || n ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    }); r.nextNode();) n.push(r.currentNode);
                return n
            }

            function nc(t, n) {
                var r = !0,
                    a = !1,
                    o = void 0;
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
                    a = !0, o = t
                } finally {
                    try {
                        r || null == l.return || l.return()
                    } finally {
                        if (a) throw o
                    }
                }
            }

            function nu(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.select;
                if (t && t.focus) {
                    var a, o = document.activeElement;
                    t.focus({
                        preventScroll: !0
                    }), t !== o && tD(a = t, HTMLInputElement) && "select" in a && void 0 !== r && r && t.select()
                }
            }
            ni.displayName = "FocusScope";
            var ns = (n_ = [], {
                add: function(t) {
                    var n = n_[0];
                    t !== n && (null == n || n.pause()), (n_ = nd(n_, t)).unshift(t)
                },
                remove: function(t) {
                    var n;
                    null == (n = (n_ = nd(n_, t))[0]) || n.resume()
                }
            });

            function nd(t, n) {
                var r = tG(t),
                    a = r.indexOf(n);
                return -1 !== a && r.splice(a, 1), r
            }

            function nf(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }
            var np = Symbol("radix.slottable");

            function nv(t) {
                return u.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === np
            }
            var nm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                    var r, a, o, i, l, c = (a = r = "Primitive.".concat(n), (o = u.forwardRef(function(t, n) {
                            var r = t.children,
                                a = tB(t, ["children"]);
                            if (u.isValidElement(r)) {
                                var o, i, l, c = (l = null == (o = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : o.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                    s = function(t, n) {
                                        var r = tL({}, n);
                                        for (var a in n) ! function(a) {
                                            var o = t[a],
                                                i = n[a];
                                            /^on[A-Z]/.test(a) ? o && i ? r[a] = function() {
                                                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                i.apply(void 0, tG(n)), o.apply(void 0, tG(n))
                                            } : o && (r[a] = o) : "style" === a ? r[a] = tL({}, o, i) : "className" === a && (r[a] = [o, i].filter(Boolean).join(" "))
                                        }(a);
                                        return tL({}, t, r)
                                    }(a, r.props);
                                return r.type !== u.Fragment && (s.ref = n ? function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return function(t) {
                                        var r = !1,
                                            a = n.map(function(n) {
                                                var a = nf(n, t);
                                                return r || "function" != typeof a || (r = !0), a
                                            });
                                        if (r) return function() {
                                            for (var t = 0; t < a.length; t++) {
                                                var r = a[t];
                                                "function" == typeof r ? r() : nf(n[t], null)
                                            }
                                        }
                                    }
                                }(n, c) : c), u.cloneElement(r, s)
                            }
                            return u.Children.count(r) > 1 ? u.Children.only(null) : null
                        })).displayName = "".concat(a, ".SlotClone"), i = o, (l = u.forwardRef(function(t, n) {
                            var r = t.children,
                                a = tB(t, ["children"]),
                                o = u.Children.toArray(r),
                                l = o.find(nv);
                            if (l) {
                                var c = l.props.children,
                                    s = o.map(function(t) {
                                        return t === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : t
                                    });
                                return (0, ee.jsx)(i, tM(tL({}, a), {
                                    ref: n,
                                    children: u.isValidElement(c) ? u.cloneElement(c, void 0, s) : null
                                }))
                            }
                            return (0, ee.jsx)(i, tM(tL({}, a), {
                                ref: n,
                                children: r
                            }))
                        })).displayName = "".concat(r, ".Slot"), l),
                        s = u.forwardRef(function(t, r) {
                            var a = t.asChild,
                                o = tB(t, ["asChild"]),
                                i = a ? c : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, ee.jsx)(i, tM(tL({}, o), {
                                ref: r
                            }))
                        });
                    return s.displayName = "Primitive.".concat(n), tM(tL({}, t), tR({}, n, s))
                }, {}),
                ny = (null == (t0 = globalThis) ? void 0 : t0.document) ? u.useLayoutEffect : function() {},
                nh = u.forwardRef(function(t, n) {
                    var r, a, o = t.container,
                        i = tB(t, ["container"]),
                        l = tF(u.useState(!1), 2),
                        c = l[0],
                        s = l[1];
                    ny(function() {
                        return s(!0)
                    }, []);
                    var d = o || c && (null == (a = globalThis) || null == (r = a.document) ? void 0 : r.body);
                    return d ? ta().createPortal((0, ee.jsx)(nm.div, tM(tL({}, i), {
                        ref: n
                    })), d) : null
                });
            nh.displayName = "Portal";
            var nb = 0;

            function ng() {
                var t = document.createElement("span");
                return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t
            }
            var nw = "right-scroll-bar-position",
                nP = "width-before-scroll-bar";

            function nx(t, n) {
                return "function" == typeof t ? t(n) : t && (t.current = n), t
            }
            var nS = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect,
                nI = new WeakMap,
                nE = function(t) {
                    var n = t.sideCar,
                        r = tC(t, ["sideCar"]);
                    if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                    var a = n.read();
                    if (!a) throw Error("Sidecar medium not found");
                    return u.createElement(a, tE({}, r))
                };
            nE.isSideCarExport = !0;
            var nC = (void 0 === nV && (nV = {}), (void 0 === nW && (nW = function(t) {
                    return t
                }), nz = [], nq = !1, nH = {
                    read: function() {
                        if (nq) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return nz.length ? nz[nz.length - 1] : null
                    },
                    useMedium: function(t) {
                        var n = nW(t, nq);
                        return nz.push(n),
                            function() {
                                nz = nz.filter(function(t) {
                                    return t !== n
                                })
                            }
                    },
                    assignSyncMedium: function(t) {
                        for (nq = !0; nz.length;) {
                            var n = nz;
                            nz = [], n.forEach(t)
                        }
                        nz = {
                            push: function(n) {
                                return t(n)
                            },
                            filter: function() {
                                return nz
                            }
                        }
                    },
                    assignMedium: function(t) {
                        nq = !0;
                        var n = [];
                        if (nz.length) {
                            var r = nz;
                            nz = [], r.forEach(t), n = nz
                        }
                        var a = function() {
                                var r = n;
                                n = [], r.forEach(t)
                            },
                            o = function() {
                                return Promise.resolve().then(a)
                            };
                        o(), nz = {
                            push: function(t) {
                                n.push(t), o()
                            },
                            filter: function(t) {
                                return n = n.filter(t), nz
                            }
                        }
                    }
                }).options = tE({
                    async: !0,
                    ssr: !1
                }, nV), nH),
                nO = function() {},
                nj = u.forwardRef(function(t, n) {
                    var r, a, o, i, l = u.useRef(null),
                        c = u.useState({
                            onScrollCapture: nO,
                            onWheelCapture: nO,
                            onTouchMoveCapture: nO
                        }),
                        s = c[0],
                        d = c[1],
                        f = t.forwardProps,
                        p = t.children,
                        v = t.className,
                        m = t.removeScrollBar,
                        y = t.enabled,
                        h = t.shards,
                        b = t.sideCar,
                        g = t.noIsolation,
                        w = t.inert,
                        P = t.allowPinchZoom,
                        x = t.as,
                        S = t.gapMode,
                        I = tC(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        E = (r = [l, n], a = function(t) {
                            return r.forEach(function(n) {
                                return nx(n, t)
                            })
                        }, (o = (0, u.useState)(function() {
                            return {
                                value: null,
                                callback: a,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(e) {
                                        var t = o.value;
                                        t !== e && (o.value = e, o.callback(e, t))
                                    }
                                }
                            }
                        })[0]).callback = a, i = o.facade, nS(function() {
                            var t = nI.get(i);
                            if (t) {
                                var n = new Set(t),
                                    a = new Set(r),
                                    o = i.current;
                                n.forEach(function(t) {
                                    a.has(t) || nx(t, null)
                                }), a.forEach(function(t) {
                                    n.has(t) || nx(t, o)
                                })
                            }
                            nI.set(i, r)
                        }, [r]), i),
                        C = tE(tE({}, I), s);
                    return u.createElement(u.Fragment, null, y && u.createElement(b, {
                        sideCar: nC,
                        removeScrollBar: m,
                        shards: h,
                        noIsolation: g,
                        inert: w,
                        setCallbacks: d,
                        allowPinchZoom: !!P,
                        lockRef: l,
                        gapMode: S
                    }), f ? u.cloneElement(u.Children.only(p), tE(tE({}, C), {
                        ref: E
                    })) : u.createElement(void 0 === x ? "div" : x, tE({}, C, {
                        className: v,
                        ref: E
                    }), p))
                });
            nj.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, nj.classNames = {
                fullWidth: nP,
                zeroRight: nw
            };
            var nA = function() {
                    var t = 0,
                        n = null;
                    return {
                        add: function(a) {
                            var o, i;
                            0 == t && (n = function() {
                                if (!document) return null;
                                var t = document.createElement("style");
                                t.type = "text/css";
                                var n = r.nc;
                                return n && t.setAttribute("nonce", n), t
                            }()) && ((o = n).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), i = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)), t++
                        },
                        remove: function() {
                            --t || !n || (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                nN = function() {
                    var t, n = (t = nA(), function(n, r) {
                        u.useEffect(function() {
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
                nk = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                nT = function(t) {
                    return parseInt(t || "", 10) || 0
                },
                nU = function(t) {
                    if (void 0 === t && (t = "margin"), "undefined" == typeof window) return nk;
                    var n, r, a, o, i, l = (n = t, a = (r = window.getComputedStyle(document.body))["padding" === n ? "paddingLeft" : "marginLeft"], o = r["padding" === n ? "paddingTop" : "marginTop"], i = r["padding" === n ? "paddingRight" : "marginRight"], [nT(a), nT(o), nT(i)]),
                        c = document.documentElement.clientWidth,
                        u = window.innerWidth;
                    return {
                        left: l[0],
                        top: l[1],
                        right: l[2],
                        gap: Math.max(0, u - c + l[2] - l[0])
                    }
                },
                nR = nN(),
                nD = "data-scroll-locked",
                nL = function(t, n, r, a) {
                    var o = t.left,
                        i = t.top,
                        l = t.right,
                        c = t.gap;
                    return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(a, ";\n   padding-right: ").concat(c, "px ").concat(a, ";\n  }\n  body[").concat(nD, "] {\n    overflow: hidden ").concat(a, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(a, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(a, ";\n    "), "padding" === r && "padding-right: ".concat(c, "px ").concat(a, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(nw, " {\n    right: ").concat(c, "px ").concat(a, ";\n  }\n  \n  .").concat(nP, " {\n    margin-right: ").concat(c, "px ").concat(a, ";\n  }\n  \n  .").concat(nw, " .").concat(nw, " {\n    right: 0 ").concat(a, ";\n  }\n  \n  .").concat(nP, " .").concat(nP, " {\n    margin-right: 0 ").concat(a, ";\n  }\n  \n  body[").concat(nD, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
                },
                nM = function() {
                    var t = parseInt(document.body.getAttribute(nD) || "0", 10);
                    return isFinite(t) ? t : 0
                },
                nB = function(t) {
                    var n = t.noRelative,
                        r = t.noImportant,
                        a = t.gapMode,
                        o = void 0 === a ? "margin" : a;
                    u.useEffect(function() {
                        return document.body.setAttribute(nD, (nM() + 1).toString()),
                            function() {
                                var t = nM() - 1;
                                t <= 0 ? document.body.removeAttribute(nD) : document.body.setAttribute(nD, t.toString())
                            }
                    }, []);
                    var i = u.useMemo(function() {
                        return nU(o)
                    }, [o]);
                    return u.createElement(nR, {
                        styles: nL(i, !n, o, r ? "" : "!important")
                    })
                },
                nF = !1;
            if ("undefined" != typeof window) try {
                var nG = Object.defineProperty({}, "passive", {
                    get: function() {
                        return nF = !0, !0
                    }
                });
                window.addEventListener("test", nG, nG), window.removeEventListener("test", nG, nG)
            } catch (t) {
                nF = !1
            }
            var n_, nV, nW, nz, nq, nH, nJ, nK = !!nF && {
                    passive: !1
                },
                n$ = function(t, n) {
                    if (!tD(t, Element)) return !1;
                    var r = window.getComputedStyle(t);
                    return "hidden" !== r[n] && (r.overflowY !== r.overflowX || "TEXTAREA" === t.tagName || "visible" !== r[n])
                },
                nX = function(t, n) {
                    var r = n.ownerDocument,
                        a = n;
                    do {
                        if ("undefined" != typeof ShadowRoot && tD(a, ShadowRoot) && (a = a.host), nZ(t, a)) {
                            var o = nQ(t, a);
                            if (o[1] > o[2]) return !0
                        }
                        a = a.parentNode
                    } while (a && a !== r.body);
                    return !1
                },
                nZ = function(t, n) {
                    return "v" === t ? n$(n, "overflowY") : n$(n, "overflowX")
                },
                nQ = function(t, n) {
                    return "v" === t ? [n.scrollTop, n.scrollHeight, n.clientHeight] : [n.scrollLeft, n.scrollWidth, n.clientWidth]
                },
                nY = function(t, n, r, a, o) {
                    var i, l = (i = window.getComputedStyle(n).direction, "h" === t && "rtl" === i ? -1 : 1),
                        c = l * a,
                        u = r.target,
                        s = n.contains(u),
                        d = !1,
                        f = c > 0,
                        p = 0,
                        v = 0;
                    do {
                        var m = nQ(t, u),
                            y = m[0],
                            h = m[1] - m[2] - l * y;
                        (y || h) && nZ(t, u) && (p += h, v += y), u = tD(u, ShadowRoot) ? u.host : u.parentNode
                    } while (!s && u !== document.body || s && (n.contains(u) || n === u));
                    return (f && (o && 1 > Math.abs(p) || !o && c > p) || !f && (o && 1 > Math.abs(v) || !o && -c > v)) && (d = !0), d
                },
                n0 = function(t) {
                    return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
                },
                n1 = function(t) {
                    return [t.deltaX, t.deltaY]
                },
                n2 = function(t) {
                    return t && "current" in t ? t.current : t
                },
                n3 = 0,
                n5 = [],
                n4 = (nJ = function(t) {
                    var n = u.useRef([]),
                        r = u.useRef([0, 0]),
                        a = u.useRef(),
                        o = u.useState(n3++)[0],
                        i = u.useState(nN)[0],
                        l = u.useRef(t);
                    u.useEffect(function() {
                        l.current = t
                    }, [t]), u.useEffect(function() {
                        if (t.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var n = (function(t, n, r) {
                                if (r || 2 == arguments.length)
                                    for (var a, o = 0, i = n.length; o < i; o++) !a && o in n || (a || (a = Array.prototype.slice.call(n, 0, o)), a[o] = n[o]);
                                return t.concat(a || Array.prototype.slice.call(n))
                            })([t.lockRef.current], (t.shards || []).map(n2), !0).filter(Boolean);
                            return n.forEach(function(t) {
                                    return t.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), n.forEach(function(t) {
                                        return t.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [t.inert, t.lockRef.current, t.shards]);
                    var c = u.useCallback(function(t, n) {
                            if ("touches" in t && 2 === t.touches.length || "wheel" === t.type && t.ctrlKey) return !l.current.allowPinchZoom;
                            var o, i = n0(t),
                                c = r.current,
                                u = "deltaX" in t ? t.deltaX : c[0] - i[0],
                                s = "deltaY" in t ? t.deltaY : c[1] - i[1],
                                d = t.target,
                                f = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in t && "h" === f && "range" === d.type) return !1;
                            var p = nX(f, d);
                            if (!p) return !0;
                            if (p ? o = f : (o = "v" === f ? "h" : "v", p = nX(f, d)), !p) return !1;
                            if (!a.current && "changedTouches" in t && (u || s) && (a.current = o), !o) return !0;
                            var v = a.current || o;
                            return nY(v, n, t, "h" === v ? u : s, !0)
                        }, []),
                        s = u.useCallback(function(t) {
                            if (n5.length && n5[n5.length - 1] === i) {
                                var r = "deltaY" in t ? n1(t) : n0(t),
                                    a = n.current.filter(function(n) {
                                        var a;
                                        return n.name === t.type && (n.target === t.target || t.target === n.shadowParent) && (a = n.delta, a[0] === r[0] && a[1] === r[1])
                                    })[0];
                                if (a && a.should) t.cancelable && t.preventDefault();
                                else if (!a) {
                                    var o = (l.current.shards || []).map(n2).filter(Boolean).filter(function(n) {
                                        return n.contains(t.target)
                                    });
                                    (o.length > 0 ? c(t, o[0]) : !l.current.noIsolation) && t.cancelable && t.preventDefault()
                                }
                            }
                        }, []),
                        d = u.useCallback(function(t, r, a, o) {
                            var i = {
                                name: t,
                                delta: r,
                                target: a,
                                should: o,
                                shadowParent: function(t) {
                                    for (var n = null; null !== t;) tD(t, ShadowRoot) && (n = t.host, t = t.host), t = t.parentNode;
                                    return n
                                }(a)
                            };
                            n.current.push(i), setTimeout(function() {
                                n.current = n.current.filter(function(t) {
                                    return t !== i
                                })
                            }, 1)
                        }, []),
                        f = u.useCallback(function(t) {
                            r.current = n0(t), a.current = void 0
                        }, []),
                        p = u.useCallback(function(n) {
                            d(n.type, n1(n), n.target, c(n, t.lockRef.current))
                        }, []),
                        v = u.useCallback(function(n) {
                            d(n.type, n0(n), n.target, c(n, t.lockRef.current))
                        }, []);
                    u.useEffect(function() {
                        return n5.push(i), t.setCallbacks({
                                onScrollCapture: p,
                                onWheelCapture: p,
                                onTouchMoveCapture: v
                            }), document.addEventListener("wheel", s, nK), document.addEventListener("touchmove", s, nK), document.addEventListener("touchstart", f, nK),
                            function() {
                                n5 = n5.filter(function(t) {
                                    return t !== i
                                }), document.removeEventListener("wheel", s, nK), document.removeEventListener("touchmove", s, nK), document.removeEventListener("touchstart", f, nK)
                            }
                    }, []);
                    var m = t.removeScrollBar,
                        y = t.inert;
                    return u.createElement(u.Fragment, null, y ? u.createElement(i, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? u.createElement(nB, {
                        gapMode: t.gapMode
                    }) : null)
                }, nC.useMedium(nJ), nE),
                n6 = u.forwardRef(function(t, n) {
                    return u.createElement(nj, tE({}, t, {
                        ref: n,
                        sideCar: n4
                    }))
                });
            n6.classNames = nj.classNames;
            var n8 = new WeakMap,
                n7 = new WeakMap,
                n9 = {},
                re = 0,
                rt = function(t) {
                    return t && (t.host || rt(t.parentNode))
                },
                rn = function(t, n, r, a) {
                    var o = (Array.isArray(t) ? t : [t]).map(function(t) {
                        if (n.contains(t)) return t;
                        var r = rt(t);
                        return r && n.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", n, ". Doing nothing"), null)
                    }).filter(function(t) {
                        return !!t
                    });
                    n9[r] || (n9[r] = new WeakMap);
                    var i = n9[r],
                        l = [],
                        c = new Set,
                        u = new Set(o),
                        s = function(t) {
                            t && !c.has(t) && (c.add(t), s(t.parentNode))
                        };
                    o.forEach(s);
                    var d = function(t) {
                        t && !u.has(t) && Array.prototype.forEach.call(t.children, function(t) {
                            if (c.has(t)) d(t);
                            else try {
                                var n = t.getAttribute(a),
                                    o = null !== n && "false" !== n,
                                    u = (n8.get(t) || 0) + 1,
                                    s = (i.get(t) || 0) + 1;
                                n8.set(t, u), i.set(t, s), l.push(t), 1 === u && o && n7.set(t, !0), 1 === s && t.setAttribute(r, "true"), o || t.setAttribute(a, "true")
                            } catch (n) {
                                console.error("aria-hidden: cannot operate on ", t, n)
                            }
                        })
                    };
                    return d(n), c.clear(), re++,
                        function() {
                            l.forEach(function(t) {
                                var n = n8.get(t) - 1,
                                    o = i.get(t) - 1;
                                n8.set(t, n), i.set(t, o), n || (n7.has(t) || t.removeAttribute(a), n7.delete(t)), o || t.removeAttribute(r)
                            }), --re || (n8 = new WeakMap, n8 = new WeakMap, n7 = new WeakMap, n9 = {})
                        }
                },
                rr = function(t, n, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var a = Array.from(Array.isArray(t) ? t : [t]),
                        o = n || ("undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body);
                    return o ? (a.push.apply(a, Array.from(o.querySelectorAll("[aria-live]"))), rn(a, o, r, "aria-hidden")) : function() {
                        return null
                    }
                };

            function ra(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function ro(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function ri(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), a.forEach(function(n) {
                        ro(t, n, r[n])
                    })
                }
                return t
            }

            function rl(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, a)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function rc(t, n) {
                if (null == t) return {};
                var r, a, o = function(t, n) {
                    if (null == t) return {};
                    var r, a, o = {},
                        i = Object.keys(t);
                    for (a = 0; a < i.length; a++) r = i[a], n.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < i.length; a++) r = i[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function ru(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || rd(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rs(t) {
                return function(t) {
                    if (Array.isArray(t)) return ra(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || rd(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rd(t, n) {
                if (t) {
                    if ("string" == typeof t) return ra(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ra(t, n)
                }
            }

            function rf(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = r.checkForDefaultPrevented,
                    o = void 0 === a || a;
                return function(r) {
                    if (null == t || t(r), !1 === o || !r.defaultPrevented) return null == n ? void 0 : n(r)
                }
            }

            function rp(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }

            function rv() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return function(t) {
                    var r = !1,
                        a = n.map(function(n) {
                            var a = rp(n, t);
                            return r || "function" != typeof a || (r = !0), a
                        });
                    if (r) return function() {
                        for (var t = 0; t < a.length; t++) {
                            var r = a[t];
                            "function" == typeof r ? r() : rp(n[t], null)
                        }
                    }
                }
            }

            function rm() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return u.useCallback(rv.apply(void 0, rs(n)), n)
            }

            function ry() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var a = n[0];
                if (1 === n.length) return a;
                var o = function() {
                    var t = n.map(function(t) {
                        return {
                            useScope: t(),
                            scopeName: t.scopeName
                        }
                    });
                    return function(n) {
                        var r = t.reduce(function(t, r) {
                            var a = r.useScope,
                                o = r.scopeName;
                            return ri({}, t, a(n)["__scope".concat(o)])
                        }, {});
                        return u.useMemo(function() {
                            return ro({}, "__scope".concat(a.scopeName), r)
                        }, [r])
                    }
                };
                return o.scopeName = a.scopeName, o
            }

            function rh(t) {
                var n = u.useRef(t);
                return u.useEffect(function() {
                    n.current = t
                }), u.useMemo(function() {
                    return function() {
                        for (var t, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        return null == (t = n.current) ? void 0 : t.call.apply(t, [n].concat(rs(a)))
                    }
                }, [])
            }
            var rb = (null == (o = globalThis) ? void 0 : o.document) ? u.useLayoutEffect : function() {},
                rg = function(t) {
                    var n, r, a, o, i, l, c, s, d, f, p, v, m, y, h = t.present,
                        b = t.children,
                        g = (o = (a = ru(u.useState(), 2))[0], i = a[1], l = u.useRef({}), c = u.useRef(h), s = u.useRef("none"), f = (d = ru((n = h ? "mounted" : "unmounted", r = {
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
                        }, u.useReducer(function(t, n) {
                            var a;
                            return null != (a = r[t][n]) ? a : t
                        }, n)), 2))[0], p = d[1], u.useEffect(function() {
                            var t = rw(l.current);
                            s.current = "mounted" === f ? t : "none"
                        }, [f]), rb(function() {
                            var t = l.current,
                                n = c.current;
                            if (n !== h) {
                                var r = s.current,
                                    a = rw(t);
                                h ? p("MOUNT") : "none" === a || "none" === (null == t ? void 0 : t.display) ? p("UNMOUNT") : p(n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), c.current = h
                            }
                        }, [h, p]), rb(function() {
                            if (o) {
                                var t, n, r = null != (n = o.ownerDocument.defaultView) ? n : window,
                                    a = function(n) {
                                        var a = rw(l.current).includes(n.animationName);
                                        if (n.target === o && a && (p("ANIMATION_END"), !c.current)) {
                                            var i = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = r.setTimeout(function() {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = i)
                                            })
                                        }
                                    },
                                    i = function(t) {
                                        t.target === o && (s.current = rw(l.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", a), o.addEventListener("animationend", a),
                                    function() {
                                        r.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", a), o.removeEventListener("animationend", a)
                                    }
                            }
                            p("ANIMATION_END")
                        }, [o, p]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: u.useCallback(function(t) {
                                t && (l.current = getComputedStyle(t)), i(t)
                            }, [])
                        }),
                        w = "function" == typeof b ? b({
                            present: g.isPresent
                        }) : u.Children.only(b),
                        P = rm(g.ref, (y = null == (v = Object.getOwnPropertyDescriptor(w.props, "ref")) ? void 0 : v.get) && "isReactWarning" in y && y.isReactWarning ? w.ref : (y = null == (m = Object.getOwnPropertyDescriptor(w, "ref")) ? void 0 : m.get) && "isReactWarning" in y && y.isReactWarning ? w.props.ref : w.props.ref || w.ref);
                    return "function" == typeof b || g.isPresent ? u.cloneElement(w, {
                        ref: P
                    }) : null
                };

            function rw(t) {
                return (null == t ? void 0 : t.animationName) || "none"
            }

            function rP(t) {
                var n, r, a = (n = t, (r = u.forwardRef(function(t, n) {
                        var r = t.children,
                            a = rc(t, ["children"]);
                        if (u.isValidElement(r)) {
                            var o, i, l, c = (l = null == (o = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : o.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                s = function(t, n) {
                                    var r = ri({}, n);
                                    for (var a in n) ! function(a) {
                                        var o = t[a],
                                            i = n[a];
                                        /^on[A-Z]/.test(a) ? o && i ? r[a] = function() {
                                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                            i.apply(void 0, rs(n)), o.apply(void 0, rs(n))
                                        } : o && (r[a] = o) : "style" === a ? r[a] = ri({}, o, i) : "className" === a && (r[a] = [o, i].filter(Boolean).join(" "))
                                    }(a);
                                    return ri({}, t, r)
                                }(a, r.props);
                            return r.type !== u.Fragment && (s.ref = n ? rv(n, c) : c), u.cloneElement(r, s)
                        }
                        return u.Children.count(r) > 1 ? u.Children.only(null) : null
                    })).displayName = "".concat(n, ".SlotClone"), r),
                    o = u.forwardRef(function(t, n) {
                        var r = t.children,
                            o = rc(t, ["children"]),
                            i = u.Children.toArray(r),
                            l = i.find(rS);
                        if (l) {
                            var c = l.props.children,
                                s = i.map(function(t) {
                                    return t === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : t
                                });
                            return (0, ee.jsx)(a, rl(ri({}, o), {
                                ref: n,
                                children: u.isValidElement(c) ? u.cloneElement(c, void 0, s) : null
                            }))
                        }
                        return (0, ee.jsx)(a, rl(ri({}, o), {
                            ref: n,
                            children: r
                        }))
                    });
                return o.displayName = "".concat(t, ".Slot"), o
            }
            rg.displayName = "Presence";
            var rx = Symbol("radix.slottable");

            function rS(t) {
                return u.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === rx
            }
            var rI = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(t, n) {
                    var r = rP("Primitive.".concat(n)),
                        a = u.forwardRef(function(t, a) {
                            var o = t.asChild,
                                i = rc(t, ["asChild"]),
                                l = o ? r : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, ee.jsx)(l, rl(ri({}, i), {
                                ref: a
                            }))
                        });
                    return a.displayName = "Primitive.".concat(n), rl(ri({}, t), ro({}, n, a))
                }, {}),
                rE = "Dialog",
                rC = ru(function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = [],
                        a = function() {
                            var n = r.map(function(t) {
                                return u.createContext(t)
                            });
                            return function(r) {
                                var a = (null == r ? void 0 : r[t]) || n;
                                return u.useMemo(function() {
                                    return ro({}, "__scope".concat(t), rl(ri({}, r), ro({}, t, a)))
                                }, [r, a])
                            }
                        };
                    return a.scopeName = t, [function(n, a) {
                        var o = u.createContext(a),
                            i = r.length;
                        r = rs(r).concat([a]);
                        var l = function(n) {
                            var r, a = n.scope,
                                l = n.children,
                                c = rc(n, ["scope", "children"]),
                                s = (null == a || null == (r = a[t]) ? void 0 : r[i]) || o,
                                d = u.useMemo(function() {
                                    return c
                                }, Object.values(c));
                            return (0, ee.jsx)(s.Provider, {
                                value: d,
                                children: l
                            })
                        };
                        return l.displayName = n + "Provider", [l, function(r, l) {
                            var c, s = (null == l || null == (c = l[t]) ? void 0 : c[i]) || o,
                                d = u.useContext(s);
                            if (d) return d;
                            if (void 0 !== a) return a;
                            throw Error("`".concat(r, "` must be used within `").concat(n, "`"))
                        }]
                    }, ry.apply(void 0, [a].concat(rs(n)))]
                }(rE), 2),
                rO = rC[0],
                rj = (rC[1], ru(rO(rE), 2)),
                rA = rj[0],
                rN = rj[1],
                rk = function(t) {
                    var n, r, a, o, i, l, c, s, d, f, p, v, m, y, h, b, g, w = t.__scopeDialog,
                        P = t.children,
                        x = t.open,
                        S = t.defaultOpen,
                        I = t.onOpenChange,
                        E = t.modal,
                        C = u.useRef(null),
                        O = u.useRef(null),
                        j = ru((r = (n = {
                            prop: x,
                            defaultProp: S,
                            onChange: I
                        }).prop, m = (v = ru((l = (i = {
                            defaultProp: n.defaultProp,
                            onChange: o = void 0 === (a = n.onChange) ? function() {} : a
                        }).defaultProp, c = i.onChange, d = ru(s = u.useState(l), 1)[0], f = u.useRef(d), p = rh(c), u.useEffect(function() {
                            f.current !== d && (p(d), f.current = d)
                        }, [d, f, p]), s), 2))[0], y = v[1], b = (h = void 0 !== r) ? r : m, g = rh(o), [b, u.useCallback(function(t) {
                            if (h) {
                                var n = "function" == typeof t ? t(r) : t;
                                n !== r && g(n)
                            } else y(t)
                        }, [h, r, y, g])]), 2),
                        A = j[0],
                        N = j[1];
                    return (0, ee.jsx)(rA, {
                        scope: w,
                        triggerRef: C,
                        contentRef: O,
                        contentId: tT(),
                        titleId: tT(),
                        descriptionId: tT(),
                        open: void 0 !== A && A,
                        onOpenChange: N,
                        onOpenToggle: u.useCallback(function() {
                            return N(function(t) {
                                return !t
                            })
                        }, [N]),
                        modal: void 0 === E || E,
                        children: P
                    })
                };
            rk.displayName = rE;
            var rT = "DialogTrigger";
            u.forwardRef(function(t, n) {
                var r = t.__scopeDialog,
                    a = rc(t, ["__scopeDialog"]),
                    o = rN(rT, r),
                    i = rm(n, o.triggerRef);
                return (0, ee.jsx)(rI.button, rl(ri({
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": o.open,
                    "aria-controls": o.contentId,
                    "data-state": rQ(o.open)
                }, a), {
                    ref: i,
                    onClick: rf(t.onClick, o.onOpenToggle)
                }))
            }).displayName = rT;
            var rU = "DialogPortal",
                rR = ru(rO(rU, {
                    forceMount: void 0
                }), 2),
                rD = rR[0],
                rL = rR[1],
                rM = function(t) {
                    var n = t.__scopeDialog,
                        r = t.forceMount,
                        a = t.children,
                        o = t.container,
                        i = rN(rU, n);
                    return (0, ee.jsx)(rD, {
                        scope: n,
                        forceMount: r,
                        children: u.Children.map(a, function(t) {
                            return (0, ee.jsx)(rg, {
                                present: r || i.open,
                                children: (0, ee.jsx)(nh, {
                                    asChild: !0,
                                    container: o,
                                    children: t
                                })
                            })
                        })
                    })
                };
            rM.displayName = rU;
            var rB = "DialogOverlay",
                rF = u.forwardRef(function(t, n) {
                    var r = rL(rB, t.__scopeDialog),
                        a = t.forceMount,
                        o = void 0 === a ? r.forceMount : a,
                        i = rc(t, ["forceMount"]),
                        l = rN(rB, t.__scopeDialog);
                    return l.modal ? (0, ee.jsx)(rg, {
                        present: o || l.open,
                        children: (0, ee.jsx)(r_, rl(ri({}, i), {
                            ref: n
                        }))
                    }) : null
                });
            rF.displayName = rB;
            var rG = rP("DialogOverlay.RemoveScroll"),
                r_ = u.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        a = rc(t, ["__scopeDialog"]),
                        o = rN(rB, r);
                    return (0, ee.jsx)(n6, {
                        as: rG,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, ee.jsx)(rI.div, rl(ri({
                            "data-state": rQ(o.open)
                        }, a), {
                            ref: n,
                            style: ri({
                                pointerEvents: "auto"
                            }, a.style)
                        }))
                    })
                }),
                rV = "DialogContent",
                rW = u.forwardRef(function(t, n) {
                    var r = rL(rV, t.__scopeDialog),
                        a = t.forceMount,
                        o = void 0 === a ? r.forceMount : a,
                        i = rc(t, ["forceMount"]),
                        l = rN(rV, t.__scopeDialog);
                    return (0, ee.jsx)(rg, {
                        present: o || l.open,
                        children: l.modal ? (0, ee.jsx)(rz, rl(ri({}, i), {
                            ref: n
                        })) : (0, ee.jsx)(rq, rl(ri({}, i), {
                            ref: n
                        }))
                    })
                });
            rW.displayName = rV;
            var rz = u.forwardRef(function(t, n) {
                    var r = rN(rV, t.__scopeDialog),
                        a = u.useRef(null),
                        o = rm(n, r.contentRef, a);
                    return u.useEffect(function() {
                        var t = a.current;
                        if (t) return rr(t)
                    }, []), (0, ee.jsx)(rH, rl(ri({}, t), {
                        ref: o,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: rf(t.onCloseAutoFocus, function(t) {
                            var n;
                            t.preventDefault(), null == (n = r.triggerRef.current) || n.focus()
                        }),
                        onPointerDownOutside: rf(t.onPointerDownOutside, function(t) {
                            var n = t.detail.originalEvent,
                                r = 0 === n.button && !0 === n.ctrlKey;
                            (2 === n.button || r) && t.preventDefault()
                        }),
                        onFocusOutside: rf(t.onFocusOutside, function(t) {
                            return t.preventDefault()
                        })
                    }))
                }),
                rq = u.forwardRef(function(t, n) {
                    var r = rN(rV, t.__scopeDialog),
                        a = u.useRef(!1),
                        o = u.useRef(!1);
                    return (0, ee.jsx)(rH, rl(ri({}, t), {
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: function(n) {
                            var i, l;
                            null == (i = t.onCloseAutoFocus) || i.call(t, n), n.defaultPrevented || (a.current || null == (l = r.triggerRef.current) || l.focus(), n.preventDefault()), a.current = !1, o.current = !1
                        },
                        onInteractOutside: function(n) {
                            null == (i = t.onInteractOutside) || i.call(t, n), n.defaultPrevented || (a.current = !0, "pointerdown" === n.detail.originalEvent.type && (o.current = !0));
                            var i, l, c = n.target;
                            (null == (l = r.triggerRef.current) ? void 0 : l.contains(c)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && o.current && n.preventDefault()
                        }
                    }))
                }),
                rH = u.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        a = t.trapFocus,
                        o = t.onOpenAutoFocus,
                        i = t.onCloseAutoFocus,
                        l = rc(t, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]),
                        c = rN(rV, r),
                        s = u.useRef(null),
                        d = rm(n, s);
                    return u.useEffect(function() {
                        var t, n, r = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null != (t = r[0]) ? t : ng()), document.body.insertAdjacentElement("beforeend", null != (n = r[1]) ? n : ng()), nb++,
                            function() {
                                1 === nb && document.querySelectorAll("[data-radix-focus-guard]").forEach(function(t) {
                                    return t.remove()
                                }), nb--
                            }
                    }, []), (0, ee.jsxs)(ee.Fragment, {
                        children: [(0, ee.jsx)(ni, {
                            asChild: !0,
                            loop: !0,
                            trapped: a,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: i,
                            children: (0, ee.jsx)(t5, rl(ri({
                                role: "dialog",
                                id: c.contentId,
                                "aria-describedby": c.descriptionId,
                                "aria-labelledby": c.titleId,
                                "data-state": rQ(c.open)
                            }, l), {
                                ref: d,
                                onDismiss: function() {
                                    return c.onOpenChange(!1)
                                }
                            }))
                        }), (0, ee.jsxs)(ee.Fragment, {
                            children: [(0, ee.jsx)(r2, {
                                titleId: c.titleId
                            }), (0, ee.jsx)(r3, {
                                contentRef: s,
                                descriptionId: c.descriptionId
                            })]
                        })]
                    })
                }),
                rJ = "DialogTitle",
                rK = u.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        a = rc(t, ["__scopeDialog"]),
                        o = rN(rJ, r);
                    return (0, ee.jsx)(rI.h2, rl(ri({
                        id: o.titleId
                    }, a), {
                        ref: n
                    }))
                });
            rK.displayName = rJ;
            var r$ = "DialogDescription";
            u.forwardRef(function(t, n) {
                var r = t.__scopeDialog,
                    a = rc(t, ["__scopeDialog"]),
                    o = rN(r$, r);
                return (0, ee.jsx)(rI.p, rl(ri({
                    id: o.descriptionId
                }, a), {
                    ref: n
                }))
            }).displayName = r$;
            var rX = "DialogClose",
                rZ = u.forwardRef(function(t, n) {
                    var r = t.__scopeDialog,
                        a = rc(t, ["__scopeDialog"]),
                        o = rN(rX, r);
                    return (0, ee.jsx)(rI.button, rl(ri({
                        type: "button"
                    }, a), {
                        ref: n,
                        onClick: rf(t.onClick, function() {
                            return o.onOpenChange(!1)
                        })
                    }))
                });

            function rQ(t) {
                return t ? "open" : "closed"
            }
            rZ.displayName = rX;
            var rY = "DialogTitleWarning",
                r0 = ru((t = {
                    contentName: rV,
                    titleName: rJ,
                    docsSlug: "dialog"
                }, n = u.createContext(t), (a = function(t) {
                    var r = t.children,
                        a = rc(t, ["children"]),
                        o = u.useMemo(function() {
                            return a
                        }, Object.values(a));
                    return (0, ee.jsx)(n.Provider, {
                        value: o,
                        children: r
                    })
                }).displayName = rY + "Provider", [a, function(r) {
                    var a = u.useContext(n);
                    if (a) return a;
                    if (void 0 !== t) return t;
                    throw Error("`".concat(r, "` must be used within `").concat(rY, "`"))
                }]), 2),
                r1 = (r0[0], r0[1]),
                r2 = function(t) {
                    var n = t.titleId,
                        r = r1(rY),
                        a = "`".concat(r.contentName, "` requires a `").concat(r.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);
                    return u.useEffect(function() {
                        n && (document.getElementById(n) || console.error(a))
                    }, [a, n]), null
                },
                r3 = function(t) {
                    var n = t.contentRef,
                        r = t.descriptionId,
                        a = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r1("DialogDescriptionWarning").contentName, "}.");
                    return u.useEffect(function() {
                        var t, o = null == (t = n.current) ? void 0 : t.getAttribute("aria-describedby");
                        r && o && (document.getElementById(r) || console.warn(a))
                    }, [a, n, r]), null
                };

            function r5(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function r4(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }

            function r6(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), a.forEach(function(n) {
                        r4(t, n, r[n])
                    })
                }
                return t
            }

            function r8(t, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        r.push.apply(r, a)
                    }
                    return r
                })(Object(n)).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
                }), t
            }

            function r7(t, n) {
                if (null == t) return {};
                var r, a, o = function(t, n) {
                    if (null == t) return {};
                    var r, a, o = {},
                        i = Object.keys(t);
                    for (a = 0; a < i.length; a++) r = i[a], n.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (a = 0; a < i.length; a++) r = i[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function r9(t) {
                return function(t) {
                    if (Array.isArray(t)) return r5(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return r5(t, void 0);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return r5(t, n)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ae(t, n) {
                if ("function" == typeof t) return t(n);
                null != t && (t.current = n)
            }
            var at = Symbol("radix.slottable");

            function an(t) {
                return u.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === at
            }
            var ar = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(t, n) {
                    var r, a, o, i, l, c = (a = r = "Primitive.".concat(n), (o = u.forwardRef(function(t, n) {
                            var r = t.children,
                                a = r7(t, ["children"]);
                            if (u.isValidElement(r)) {
                                var o, i, l, c = (l = null == (o = Object.getOwnPropertyDescriptor(r.props, "ref")) ? void 0 : o.get) && "isReactWarning" in l && l.isReactWarning ? r.ref : (l = null == (i = Object.getOwnPropertyDescriptor(r, "ref")) ? void 0 : i.get) && "isReactWarning" in l && l.isReactWarning ? r.props.ref : r.props.ref || r.ref,
                                    s = function(t, n) {
                                        var r = r6({}, n);
                                        for (var a in n) ! function(a) {
                                            var o = t[a],
                                                i = n[a];
                                            /^on[A-Z]/.test(a) ? o && i ? r[a] = function() {
                                                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                var a = i.apply(void 0, r9(n));
                                                return o.apply(void 0, r9(n)), a
                                            } : o && (r[a] = o) : "style" === a ? r[a] = r6({}, o, i) : "className" === a && (r[a] = [o, i].filter(Boolean).join(" "))
                                        }(a);
                                        return r6({}, t, r)
                                    }(a, r.props);
                                return r.type !== u.Fragment && (s.ref = n ? function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return function(t) {
                                        var r = !1,
                                            a = n.map(function(n) {
                                                var a = ae(n, t);
                                                return r || "function" != typeof a || (r = !0), a
                                            });
                                        if (r) return function() {
                                            for (var t = 0; t < a.length; t++) {
                                                var r = a[t];
                                                "function" == typeof r ? r() : ae(n[t], null)
                                            }
                                        }
                                    }
                                }(n, c) : c), u.cloneElement(r, s)
                            }
                            return u.Children.count(r) > 1 ? u.Children.only(null) : null
                        })).displayName = "".concat(a, ".SlotClone"), i = o, (l = u.forwardRef(function(t, n) {
                            var r = t.children,
                                a = r7(t, ["children"]),
                                o = u.Children.toArray(r),
                                l = o.find(an);
                            if (l) {
                                var c = l.props.children,
                                    s = o.map(function(t) {
                                        return t === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : t
                                    });
                                return (0, ee.jsx)(i, r8(r6({}, a), {
                                    ref: n,
                                    children: u.isValidElement(c) ? u.cloneElement(c, void 0, s) : null
                                }))
                            }
                            return (0, ee.jsx)(i, r8(r6({}, a), {
                                ref: n,
                                children: r
                            }))
                        })).displayName = "".concat(r, ".Slot"), l),
                        s = u.forwardRef(function(t, r) {
                            var a = t.asChild,
                                o = r7(t, ["asChild"]),
                                i = a ? c : n;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, ee.jsx)(i, r8(r6({}, o), {
                                ref: r
                            }))
                        });
                    return s.displayName = "Primitive.".concat(n), r8(r6({}, t), r4({}, n, s))
                }, {}),
                aa = Object.freeze({
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
                ao = u.forwardRef(function(t, n) {
                    return (0, ee.jsx)(ar.span, r8(r6({}, t), {
                        ref: n,
                        style: r6({}, aa, t.style)
                    }))
                });

            function ai(t, n) {
                void 0 === n && (n = {});
                var r = n.insertAt;
                if (t && "undefined" != typeof document) {
                    var a = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css", "top" === r && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
                }
            }
            ao.displayName = "VisuallyHidden", ai(".bg-common-backdrop{background-color:var(--color-common-backdrop)}.shadow-transient-high{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-400) var(--size-800) -1px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-1200) var(--size-1400) -1.5px var(--alpha-color-shadow-subtle)}.shadow-transient-low{box-shadow:var(--size-0) var(--size-50) var(--size-100) -.5px var(--alpha-color-shadow-subtle),var(--size-0) var(--size-250) var(--size-500) -.75px var(--alpha-color-shadow-subtle)}.foundation-web-portal-zindex{z-index:1050}.fui-future-shadow-affixed-low{box-shadow:0 0 var(--size-100) 0 var(--fui-future-alpha-color-shadow-subtle),0 0 var(--size-500) 0 var(--fui-future-alpha-color-shadow-subtle)}.light-theme,.system-theme,:root{--alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-shadow-subtle:rgba(0,0,0,.08);--fui-future-alpha-color-system-progress:#335fff}.dark-theme{--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}@media (prefers-color-scheme:dark){:is(:root,.system-theme){--alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-shadow-subtle:rgba(4,4,8,.25);--fui-future-alpha-color-system-progress:var(--dark-mode-system-contrast)}}:is(:root,.light-theme,.system-theme) .stroke-contrast-alpha{border-color:rgba(27,37,75,.5)}.dark-theme .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}@media (prefers-color-scheme:dark){:is(:root,.system-theme) .stroke-contrast-alpha{border-color:rgba(208,217,251,.4)}}");
            var al = {
                    XSmall: "size-[var(--icon-size-xsmall)]",
                    Small: "size-[var(--icon-size-small)]",
                    Medium: "size-[var(--icon-size-medium)]",
                    Large: "size-[var(--icon-size-large)]",
                    XLarge: "size-[var(--icon-size-xlarge)]"
                },
                ac = s().forwardRef(function(t, n) {
                    var r = t.name,
                        a = t.size,
                        o = t.className,
                        i = (t.children, tC(t, ["name", "size", "className", "children"]));
                    return s().createElement("span", Object.assign({
                        ref: n,
                        role: "presentation",
                        className: tO("grow-0 shrink-0 basis-auto icon", r, al[void 0 === a ? "Medium" : a], o)
                    }, i))
                });
            ac.displayName = "Icon";
            var au = "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
                as = function() {
                    return s().createElement("div", {
                        role: "presentation",
                        className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
                    })
                },
                ad = {
                    Small: "padding-xsmall",
                    Medium: "padding-small",
                    Large: "padding-medium"
                },
                af = {
                    Utility: "bg-action-link",
                    OverMedia: "bg-over-media-100"
                },
                ap = function(t) {
                    var n = t.variant,
                        r = t.size,
                        a = t.isCircular,
                        o = t.className,
                        i = tC(t, ["variant", "size", "isCircular", "className"]);
                    return s().createElement("button", Object.assign({
                        type: "button",
                        className: tO("foundation-web-close-affordance flex stroke-none bg-none cursor-pointer", au, af[n], ad[r], a && "radius-circle", o)
                    }, i), s().createElement(as, null), s().createElement(ac, {
                        name: "icon-regular-x",
                        size: r
                    }))
                };
            ai(".foundation-web-dialog-overlay{bottom:0;display:grid;left:0;overflow-y:auto;place-items:center;position:fixed;right:0;top:0}.foundation-web-dialog-close-container{right:var(--size-300);top:var(--size-300);z-index:1}.foundation-web-dialog-hero-media{border-top-left-radius:var(--radius-large);border-top-right-radius:var(--radius-large);margin-left:calc(var(--stroke-standard)*-1);margin-right:calc(var(--stroke-standard)*-1);margin-top:calc(var(--stroke-standard)*-1);overflow:clip}.foundation-web-dialog-content[data-size=Small]{max-width:calc(var(--size-100)*80);min-width:calc(var(--size-100)*75)}.foundation-web-dialog-content[data-size=Medium]{max-width:calc(var(--size-100)*120);min-width:calc(var(--size-100)*94)}.foundation-web-dialog-content[data-size=Large]{max-width:calc(var(--size-100)*160);min-width:calc(var(--size-100)*94)}");
            var av = (0, u.createContext)({
                    size: "Medium",
                    isModal: !0,
                    hasCloseAffordance: !1,
                    hasMarginTop: !0,
                    hasMarginBottom: !0,
                    type: "Default"
                }),
                am = function() {
                    var t = (0, u.useContext)(av);
                    if (!t) throw Error("Dialog components must be used within a Dialog");
                    return t
                },
                ay = {
                    Small: "padding-x-large",
                    Medium: "padding-x-xlarge",
                    Large: "padding-x-xlarge"
                },
                ah = {
                    Small: "padding-top-large",
                    Medium: "padding-top-xlarge",
                    Large: "padding-top-xlarge"
                },
                ab = {
                    Small: "padding-bottom-large",
                    Medium: "padding-bottom-xlarge",
                    Large: "padding-bottom-xlarge"
                },
                ag = function(t) {
                    var n = t.open,
                        r = t.onOpenChange,
                        a = t.children,
                        o = t.size,
                        i = t.type,
                        l = void 0 === i ? "Default" : i,
                        c = t.isModal,
                        d = t.hasCloseAffordance,
                        f = t.closeLabel,
                        p = t.hasMarginTop,
                        v = void 0 === p || p,
                        m = t.hasMarginBottom,
                        y = void 0 === m || m,
                        h = t.experimentalDisablePointerEventsStylingOnBody,
                        b = void 0 !== h && h,
                        g = (0, u.useMemo)(function() {
                            return {
                                size: o,
                                isModal: c,
                                type: l,
                                hasCloseAffordance: d,
                                closeLabel: f,
                                hasMarginTop: v,
                                hasMarginBottom: y
                            }
                        }, [o, c, l, d, f, v, y]);
                    return (0, u.useEffect)(function() {
                        b && setTimeout(function() {
                            Object.assign(document.body.style, {
                                pointerEvents: "unset"
                            })
                        }, 0)
                    }, [b, n]), s().createElement(av.Provider, {
                        value: g
                    }, s().createElement(rk, {
                        open: n,
                        onOpenChange: r
                    }, a))
                };
            ag.displayName = "Dialog";
            var aw = function(t) {
                var n = t.children,
                    r = t.className,
                    a = t.style,
                    o = t.overlayClassName,
                    i = t.overlayStyle,
                    l = tC(t, ["children", "className", "style", "overlayClassName", "overlayStyle"]),
                    c = am(),
                    u = c.size,
                    d = c.isModal,
                    f = c.hasCloseAffordance,
                    p = c.closeLabel,
                    v = tO("foundation-web-dialog-overlay padding-y-medium foundation-web-portal-zindex", d && "bg-common-backdrop", o),
                    m = tO("relative radius-large bg-surface-100 stroke-muted stroke-standard foundation-web-dialog-content shadow-transient-high", r);
                return s().createElement(rM, null, s().createElement(rF, {
                    className: v,
                    style: i
                }, s().createElement(rW, Object.assign({
                    className: m,
                    "data-size": u,
                    style: a
                }, l), f && s().createElement("div", {
                    className: "absolute foundation-web-dialog-close-container"
                }, s().createElement(rZ, {
                    asChild: !0
                }, s().createElement(ap, {
                    variant: "OverMedia",
                    size: u,
                    isCircular: !0,
                    "aria-label": p
                }))), n)))
            };
            aw.displayName = "DialogContent";
            var aP = function(t) {
                var n = t.children,
                    r = t.className,
                    a = tC(t, ["children", "className"]),
                    o = am(),
                    i = o.size,
                    l = o.hasMarginTop,
                    c = o.hasMarginBottom,
                    u = tO(ay[i], l && ah[i], c && ab[i], r);
                return s().createElement("div", Object.assign({
                    className: u
                }, a), n)
            };
            aP.displayName = "DialogBody";
            var ax = function(t) {
                var n = t.children,
                    r = t.className,
                    a = t.hidden,
                    o = tC(t, ["children", "className", "hidden"]),
                    i = s().createElement(rK, Object.assign({
                        className: r
                    }, o), n);
                return a ? s().createElement(ao, null, i) : i
            };
            ax.displayName = "DialogTitle";
            var aS = function(t) {
                var n = t.children,
                    r = t.className,
                    a = tC(t, ["children", "className"]),
                    o = am().size,
                    i = tO(ay[o], ab[o], r);
                return s().createElement("div", Object.assign({
                    className: i
                }, a), n)
            };
            aS.displayName = "DialogFooter", ai("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}");
            var aI = function(t) {
                    var n = t.width,
                        r = t.height;
                    return s().createElement("svg", {
                        className: "foundation-web-loading-spinner",
                        width: n,
                        height: r,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, s().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: "currentColor",
                        d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
                    }))
                },
                aE = {
                    Large: 24,
                    Medium: 20,
                    Small: 16,
                    XSmall: 12
                },
                aC = {
                    Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-medium"],
                    Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
                    Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
                    XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
                },
                aO = {
                    Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-alert", "content-action-alert"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                aj = {
                    Emphasis: ["bg-action-standard", "content-action-standard"],
                    Standard: ["bg-action-standard", "content-action-standard"],
                    SoftEmphasis: ["bg-action-standard", "content-action-standard"],
                    Utility: ["bg-action-subtle", "content-action-standard"],
                    Link: ["bg-action-link", "content-system-emphasis"],
                    Alert: ["bg-action-standard", "content-action-standard"],
                    ActionUtility: ["bg-action-subtle", "content-action-standard"]
                },
                aA = (0, u.forwardRef)(function(t, n) {
                    var r = t.children,
                        a = t.className,
                        o = t.style,
                        i = t.isDisabled,
                        l = void 0 !== i && i,
                        c = t.isLoading,
                        u = void 0 !== c && c,
                        d = t.icon,
                        f = t.size,
                        p = void 0 === f ? "Large" : f,
                        v = t.variant,
                        m = void 0 === v ? "Emphasis" : v,
                        y = tC(t, ["children", "className", "style", "isDisabled", "isLoading", "icon", "size", "variant"]),
                        h = tO("foundation-web-button", l ? "opacity-[0.5]" : [au, "cursor-pointer"], "relative flex items-center justify-center stroke-none padding-y-none select-none", aC[p], l ? aj[m] : aO[m], a),
                        b = s().createElement(s().Fragment, null, s().createElement(as, null), u && s().createElement("div", {
                            "aria-hidden": "true",
                            className: "absolute flex"
                        }, s().createElement(aI, {
                            width: aE[p],
                            height: aE[p]
                        })), s().createElement("span", {
                            className: tO("flex items-center min-width-0", "Large" === p || "Medium" === p ? "gap-small" : "gap-xsmall", u && "invisible")
                        }, d && s().createElement(ac, {
                            name: d,
                            size: p
                        }), s().createElement("span", {
                            className: "padding-y-xsmall text-truncate-end text-no-wrap"
                        }, r))),
                        g = Object.assign({
                            textDecoration: "none"
                        }, o);
                    if ("a" === y.as) {
                        y.as;
                        var w = y.href,
                            P = tC(y, ["as", "href"]);
                        return s().createElement("a", Object.assign({
                            ref: n
                        }, P, {
                            "aria-disabled": l,
                            href: l ? void 0 : w,
                            className: h,
                            style: g
                        }), b)
                    }
                    var x = tC(y, ["as"]);
                    return s().createElement("button", Object.assign({
                        ref: n,
                        type: "button"
                    }, x, {
                        disabled: l,
                        className: h,
                        style: g
                    }), b)
                });

            function aN(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function ak(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            aN(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            aN(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function aT(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function aU(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function aR(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function aD(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            aR(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            aR(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function aL(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var aM = function(t) {
                    var n = t.indexOf(".");
                    return n >= 0 ? (0, ee.jsxs)(s().Fragment, {
                        children: [(0, ee.jsx)("span", {
                            children: t.substring(0, n + 1)
                        }), (0, ee.jsx)("span", {
                            children: t.substring(n + 1)
                        })]
                    }) : t
                },
                aB = "download-join-experience",
                aF = function(t) {
                    var n, r = t.download,
                        a = t.launchGame,
                        o = t.unmount,
                        i = (n = (0, u.useState)(!1), function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, n) {
                            var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), i.length !== n); l = !0);
                                } catch (t) {
                                    c = !0, a = t
                                } finally {
                                    try {
                                        l || null == o.return || o.return()
                                    } finally {
                                        if (c) throw a
                                    }
                                }
                                return i
                            }
                        }(n, 2) || function(t, n) {
                            if (t) {
                                if ("string" == typeof t) return aU(t, 2);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return aU(t, n)
                            }
                        }(n, 2) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        l = i[0],
                        c = i[1],
                        s = (0, en.useTranslation)().translate,
                        p = (0, d.useQuery)({
                            queryKey: ["client-status"],
                            queryFn: function() {
                                return aD(function() {
                                    return aL(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, ak(function() {
                                                    return aT(this, function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return [4, f.get({
                                                                    url: "".concat(y().matchmakingApi, "/v1/client-status"),
                                                                    withCredentials: !0
                                                                })];
                                                            case 1:
                                                                return [2, t.sent().data]
                                                        }
                                                    })
                                                })()];
                                            case 1:
                                                if ("Unknown" === t.sent().status) throw Error();
                                                return o(), [2, !0]
                                        }
                                    })
                                })()
                            },
                            retry: 2,
                            retryDelay: 2500,
                            cacheTime: 0
                        }).isLoading;
                    if ((0, u.useEffect)(function() {
                            if (null != a && l) {
                                var t = null,
                                    n = new MutationObserver(function() {
                                        null != (t = document.getElementById(aB)) && (t.addEventListener("click", a), n.disconnect())
                                    });
                                return n.observe(document.body, {
                                        childList: !0,
                                        subtree: !0
                                    }),
                                    function() {
                                        n.disconnect(), null != t && t.removeEventListener("click", a)
                                    }
                            }
                        }, [l, a]), !l) {
                        var v = s(p ? "Label.RobloxLoadingToPlay" : "Label.RobloxExciteToDownload");
                        return (0, ee.jsx)(ag, {
                            hasCloseAffordance: !0,
                            closeLabel: s("Action.Close"),
                            isModal: !0,
                            open: !0,
                            size: "Medium",
                            onOpenChange: o,
                            children: (0, ee.jsxs)(aw, {
                                className: "download-dialog",
                                children: [(0, ee.jsxs)(aP, {
                                    className: "flex flex-col items-center gap-xlarge",
                                    children: [(0, ee.jsx)(tI, {
                                        className: "size-1600"
                                    }), (0, ee.jsx)(ax, {
                                        className: "text-heading-small padding-x-xxlarge padding-y-none text-align-x-center flex flex-col",
                                        "aria-hidden": !0,
                                        children: p ? aM(v) : v
                                    })]
                                }), (0, ee.jsx)(aS, {
                                    className: "flex",
                                    children: p ? (0, ee.jsx)(aA, {
                                        variant: "Emphasis",
                                        size: "Medium",
                                        className: "grow",
                                        isLoading: !0
                                    }) : (0, ee.jsx)(aA, {
                                        variant: "Emphasis",
                                        size: "Medium",
                                        className: "grow",
                                        onClick: function() {
                                            return aD(function() {
                                                return aL(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return c(!0), [4, r()];
                                                        case 1:
                                                            return t.sent(), [2]
                                                    }
                                                })
                                            })()
                                        },
                                        children: s("Title.DownloadPage")
                                    })
                                })]
                            })
                        })
                    }
                    var m = (0, th.getDeviceMeta)(),
                        h = (null == m ? void 0 : m.isIosDevice) ? "Response.Dialog.MacFirstInstruction" : "Response.Dialog.WindowsFirstInstruction",
                        b = (null == m ? void 0 : m.isIosDevice) ? (0, tb.getAbsoluteUrl)("/download/client?os=mac") : (0, tb.getAbsoluteUrl)("/download/client?os=win");
                    return (0, ee.jsx)(ag, {
                        hasCloseAffordance: !0,
                        closeLabel: s("Action.Close"),
                        isModal: !0,
                        open: !0,
                        size: "Large",
                        onOpenChange: o,
                        children: (0, ee.jsx)(aw, {
                            className: "install-dialog",
                            children: (0, ee.jsx)(aP, {
                                className: "content-default",
                                children: (0, ee.jsxs)("div", {
                                    className: "flex flex-col gap-xlarge padding-xlarge",
                                    children: [(0, ee.jsxs)("div", {
                                        className: "flex flex-col gap-xsmall",
                                        children: [(0, ee.jsx)(ax, {
                                            className: "text-heading-medium content-emphasis padding-none",
                                            children: s("Heading.DownloadConfirmation")
                                        }), (0, ee.jsx)("p", {
                                            className: "text-body-large",
                                            dangerouslySetInnerHTML: {
                                                __html: "".concat(s("Label.FollowInstallSteps"), " ").concat(s("Label.RetryDownload", {
                                                    startLink: '<a href="'.concat(b, '" class="download-link-underline">'),
                                                    endLink: "</a>"
                                                }))
                                            }
                                        })]
                                    }), (0, ee.jsx)("div", {}), " ", (0, ee.jsxs)("div", {
                                        className: "flex gap-xxlarge",
                                        children: [(0, ee.jsxs)("section", {
                                            className: "flex flex-col gap-large grow basis-0",
                                            children: [(0, ee.jsx)("h3", {
                                                className: "text-title-large content-emphasis padding-none",
                                                children: s("Heading.InstallInstructions")
                                            }), (0, ee.jsxs)("ol", {
                                                className: "download-instructions-list flex flex-col gap-xlarge margin-none padding-left-large text-body-medium",
                                                children: [(0, ee.jsx)("li", {
                                                    className: "padding-left-medium",
                                                    dangerouslySetInnerHTML: {
                                                        __html: s(h, {
                                                            startBold: "<b>",
                                                            endBold: "</b>"
                                                        })
                                                    }
                                                }), (0, ee.jsx)("li", {
                                                    className: "padding-left-medium",
                                                    dangerouslySetInnerHTML: {
                                                        __html: s("Response.Dialog.SecondInstruction", {
                                                            startBold: "<b>",
                                                            endBold: "</b>"
                                                        })
                                                    }
                                                }), (0, ee.jsx)("li", {
                                                    className: "padding-left-medium",
                                                    children: s("Response.Dialog.ThirdInstruction")
                                                }), (0, ee.jsx)("li", {
                                                    className: "padding-left-medium",
                                                    dangerouslySetInnerHTML: {
                                                        __html: s("Response.Dialog.FourthInstruction", {
                                                            startLink: '<a id="'.concat(aB, '" class="download-link-underline">'),
                                                            endLink: "</a>"
                                                        })
                                                    }
                                                })]
                                            })]
                                        }), (0, ee.jsx)("div", {}), " ", (0, ee.jsx)("div", {
                                            className: "stroke-standard stroke-default"
                                        }), (0, ee.jsx)("div", {}), " ", (0, ee.jsxs)("section", {
                                            className: "flex flex-col grow basis-0 gap-xxlarge",
                                            children: [(0, ee.jsxs)("div", {
                                                className: "flex flex-col gap-small",
                                                children: [(0, ee.jsx)("h3", {
                                                    className: "text-label-large content-emphasis padding-none",
                                                    children: s("Heading.MobileAppDownloadOption")
                                                }), (0, ee.jsx)("p", {
                                                    className: "text-body-medium",
                                                    children: s("Label.MobileAppQrCode")
                                                })]
                                            }), (0, ee.jsx)("div", {
                                                className: "flex grow justify-center items-center bg-shift-100 radius-medium padding-x-large",
                                                children: (0, ee.jsx)("div", {
                                                    className: "radius-medium padding-small bg-[white]",
                                                    children: (0, ee.jsx)("img", {
                                                        className: "size-2100",
                                                        src: "https://images.rbxcdn.com/79852c254bf43f36.webp",
                                                        alt: ""
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                };

            function aG(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, a = Array(n); r < n; r++) a[r] = t[r];
                return a
            }

            function a_(t, n, r, a, o, i, l) {
                try {
                    var c = t[i](l),
                        u = c.value
                } catch (t) {
                    r(t);
                    return
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o)
            }

            function aV(t) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, r);

                        function l(t) {
                            a_(i, a, o, l, c, "next", t)
                        }

                        function c(t) {
                            a_(i, a, o, l, c, "throw", t)
                        }
                        l(void 0)
                    })
                }
            }

            function aW(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var r, a, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (o = o.call(t); !(l = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); l = !0);
                        } catch (t) {
                            c = !0, a = t
                        } finally {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return aG(t, n);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return aG(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function az(t, n) {
                var r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
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
                            if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                            switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                case 0:
                                case 1:
                                    o = s;
                                    break;
                                case 4:
                                    return i.label++, {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++, a = s[1], s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < o[1]) {
                                        i.label = o[1], o = s;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2], i.ops.push(s);
                                        break
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue
                            }
                            s = n.call(t, i)
                        } catch (t) {
                            s = [6, t], a = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & s[0]) throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            var aq = {
                isInstalling: !1,
                robloxLocale: "",
                gameLocale: "",
                protocolUrlSeparator: "+",
                protocolDetectionEnabled: !1,
                avatarParamEnabled: !0,
                separateScriptParamsEnabled: !1,
                waitTimeBeforeFailure: 300,
                protocolNameForStudio: "roblox-studio",
                protocolNameForClient: "roblox-client",
                logger: null,
                channel: "",
                studioChannel: "",
                playerChannel: "",
                isDuarAutoOptInEnabled: !1,
                isDuarOptOutDisabled: !1,
                isJoinAttemptIdEnabled: !1
            };

            function aH(t) {
                return "edit" === t || "plugin" === t || "asset" === t
            }

            function aJ() {
                l().modal.close();
                var t = new c.TranslationResourceProvider,
                    n = t.getTranslationResource("Common.VisitGame"),
                    r = t.getTranslationResource("CommonUI.Controls");
                c.Dialog.open({
                    titleText: n.get("Heading.ErrorStartingGame"),
                    bodyContent: n.get("Response.Dialog.ErrorLaunching"),
                    acceptText: r.get("Action.OK") || "OK",
                    showDecline: !1
                })
            }

            function aK(t) {
                l().modal.close();
                var n = {
                    launchMethod: "Protocol",
                    params: t
                };
                l()(eQ).trigger(eQ.startClientSucceededEvent, n), aq.isInstalling && (l()(eQ).trigger(eQ.successfulInstallEvent, n), aq.isInstalling = !1)
            }

            function a$(t) {
                var n = l()("iframe#gamelaunch");
                n.length > 0 && n.remove(), n = l()("<iframe id='gamelaunch' class='hidden'></iframe>").attr("src", t), l()("body").append(n);
                var r = new Event("ProtocolLaunchStartSelenium");
                window.dispatchEvent(r)
            }

            function aX(t) {
                return aV(function() {
                    var n, r, a;
                    return az(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (o.trys.push([0, 5, , 6]), n = aH(null == t ? void 0 : t.launchMode), r = ak(function() {
                                        return aT(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, f.post({
                                                        url: "".concat(y().matchmakingApi, "/v1/client-status"),
                                                        withCredentials: !0
                                                    }, {
                                                        status: "Unknown"
                                                    })];
                                                case 1:
                                                    return t.sent(), [2]
                                            }
                                        })
                                    })(), !(c.CurrentUser.isAuthenticated && !n)) return [3, 2];
                                return [4, Promise.all([ak(function() {
                                    var t, n, r;
                                    return aT(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 2, , 3]), [4, f.get({
                                                    url: "".concat(y().authApi, "/v1/client-assertion/"),
                                                    withCredentials: !0
                                                })];
                                            case 1:
                                                return t = a.sent().data, [3, 3];
                                            case 2:
                                                return a.sent(), [3, 3];
                                            case 3:
                                                return a.trys.push([3, 5, , 6]), [4, f.post({
                                                    url: "".concat(y().authApi, "/v1/authentication-ticket/"),
                                                    withCredentials: !0
                                                }, null != t ? t : {})];
                                            case 4:
                                                if (null != (n = a.sent().headers) && (void 0 === n ? "undefined" : n && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n) == "object" && "string" == typeof(r = n["rbx-authentication-ticket"]) && r.length > 0) return [2, r];
                                                return [2, void 0];
                                            case 5:
                                                return a.sent(), [2, void 0];
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })(), r])];
                            case 1:
                                return a = aW.apply(void 0, [o.sent(), 1])[0], [3, 4];
                            case 2:
                                return [4, r];
                            case 3:
                                o.sent(), o.label = 4;
                            case 4:
                                var i, u, s, d, p, v, m;
                                return i = a, d = aH(null == t ? void 0 : t.launchMode), p = aq.protocolUrlSeparator, v = "".concat(t.protocolName, ":"), (m = []).push(1), m.push("launchmode:".concat(t.launchMode)), i && (t.protocolName !== aq.protocolNameForStudio || 0 !== i.indexOf("Guest:")) && m.push("gameinfo:".concat(encodeURIComponent(i))), m.push("launchtime:".concat(t.launchTime)), d && c.CurrentUser.isAuthenticated && (m.push("distributorType:".concat("Global")), m.push("userId:".concat(c.CurrentUser.userId))), d && m.push("browser:".concat((0, B.getCurrentBrowser)())), l().each(t.otherParams, function(t, n) {
                                    t === n ? m.push(t) : m.push("".concat(t, ":").concat(encodeURIComponent(n)))
                                }), v += m.join(p), null == (s = eQ.gameLaunchLogger) || null == (u = s.logToConsole) || u.call(s, "launchProtocolUrl: ".concat(JSON.stringify({
                                    url: v,
                                    params: t
                                }))), a$(v), aK(t), [3, 6];
                            case 5:
                                return console.error(o.sent()), aJ(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })()
            }

            function aZ(t) {
                var n = function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))), a.forEach(function(n) {
                            var a;
                            a = r[n], n in t ? Object.defineProperty(t, n, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = a
                        })
                    }
                    return t
                }({}, t);
                n.launchTime = new Date().getTime(), n.otherParams.browsertrackerid = c.Cookies.getBrowserTrackerId(), n.otherParams.robloxLocale = aq.robloxLocale, n.otherParams.gameLocale = aq.gameLocale, n.otherParams.channel = aq.channel, n.protocolName === aq.protocolNameForStudio ? n.otherParams.channel = aq.studioChannel : n.otherParams.channel = aq.playerChannel, aq.isDuarAutoOptInEnabled && n.protocolName === aq.protocolNameForClient && !n.otherParams.LaunchExp && (aq.isDuarOptOutDisabled ? n.otherParams.LaunchExp = "InApp" : n.otherParams.LaunchExp = "PreferInApp"), l()(eQ).trigger(eQ.startClientAttemptedEvent, {
                    launchMethod: "Protocol",
                    params: n
                });
                var r = aX(n);
                return aq.showDialog(n), r
            }

            function aQ(t, n) {
                var r = " ";
                c.Endpoints && c.Endpoints.Urls && (r = "".concat(c.Endpoints.getAbsoluteUrl("/Game/PlaceLauncher.ashx"), "?")), "h" !== r[0] && (r = "http://".concat(window.location.host) + "/Game/PlaceLauncher.ashx?"), r = r.replace("placelauncher", "PlaceLauncher");
                var a = {
                    request: t,
                    browserTrackerId: c.Cookies.getBrowserTrackerId()
                };
                return l().extend(a, n), r + l().param(a)
            }

            function aY() {
                return aV(function() {
                    var t, n, r;
                    return az(this, function(a) {
                        switch (a.label) {
                            case 0:
                                var o, i;
                                return t = document.getElementById("downloadInstallerIFrame"), n = "/download/client", t.referrerPolicy = "no-referrer", [4, (o = window.location.toString(), (i = function() {
                                    var t, n, r;
                                    return function(t, n) {
                                        var r, a, o, i = {
                                                label: 0,
                                                sent: function() {
                                                    if (1 & o[0]) throw o[1];
                                                    return o[1]
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
                                                    if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                                    switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = s;
                                                            break;
                                                        case 4:
                                                            return i.label++, {
                                                                value: s[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            i.label++, a = s[1], s = [0];
                                                            continue;
                                                        case 7:
                                                            s = i.ops.pop(), i.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                                i = 0;
                                                                continue
                                                            }
                                                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                                i.label = s[1];
                                                                break
                                                            }
                                                            if (6 === s[0] && i.label < o[1]) {
                                                                i.label = o[1], o = s;
                                                                break
                                                            }
                                                            if (o && i.label < o[2]) {
                                                                i.label = o[2], i.ops.push(s);
                                                                break
                                                            }
                                                            o[2] && i.ops.pop(), i.trys.pop();
                                                            continue
                                                    }
                                                    s = n.call(t, i)
                                                } catch (t) {
                                                    s = [6, t], a = 0
                                                } finally {
                                                    r = o = 0
                                                }
                                                if (5 & s[0]) throw s[1];
                                                return {
                                                    value: s[0] ? s[1] : void 0,
                                                    done: !0
                                                }
                                            }
                                        }
                                    }(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (t = "", !(n = function(t) {
                                                        var n = td(t);
                                                        if (n) return n;
                                                        var r = new URL(t);
                                                        return (r.search = "", r.hash = "", tl.some(function(t) {
                                                            return t.test(r.pathname)
                                                        })) ? r.toString() : null
                                                    }(o))) return [2, t];
                                                return [4, tm(n)];
                                            case 1:
                                                return (r = a.sent()) && (t = "?".concat("token", "=").concat(r)), [2, t]
                                        }
                                    })
                                }, function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function(r, a) {
                                        var o = i.apply(t, n);

                                        function l(t) {
                                            ty(o, r, a, l, c, "next", t)
                                        }

                                        function c(t) {
                                            ty(o, r, a, l, c, "throw", t)
                                        }
                                        l(void 0)
                                    })
                                })())];
                            case 1:
                                return r = a.sent(), t.src = "".concat(n).concat(r), [2]
                        }
                    })
                })()
            }

            function a0() {
                return aV(function() {
                    return az(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return l()(eQ).trigger(eQ.manualDownloadEvent, {
                                    launchMethod: "Protocol",
                                    params: {}
                                }), [4, aY()];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })()
            }

            function a1(t) {
                switch (c.EnvironmentUrls.domain) {
                    case "sitetest1.robloxlabs.com":
                        return "".concat(t, "-sitetest1");
                    case "sitetest2.robloxlabs.com":
                        return "".concat(t, "-sitetest2");
                    case "sitetest3.robloxlabs.com":
                        return "".concat(t, "-sitetest3");
                    default:
                        return t
                }
            }
            Object.assign(aq, {
                joinMultiplayerGame: function(t) {
                    var n = aq.protocolNameForClient,
                        r = aQ("RequestGame", t),
                        a = !0 === t.isPlayTogetherGame;
                    return aZ({
                        protocolName: n,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: r
                        },
                        placeId: t.placeId,
                        isPlayTogetherGame: a,
                        launchData: t.launchData,
                        eventId: t.eventId
                    })
                },
                openStudio: function() {
                    var t = {};
                    return aq.avatarParamEnabled && (t.avatar = "avatar"), aZ({
                        protocolName: aq.protocolNameForStudio,
                        launchMode: "edit",
                        otherParams: t
                    })
                },
                tryAssetInStudio: function(t) {
                    var n = {
                        assetid: t
                    };
                    return aq.avatarParamEnabled && (n.avatar = "avatar"), aZ({
                        protocolName: aq.protocolNameForStudio,
                        launchMode: "asset",
                        otherParams: n
                    })
                },
                openPluginInStudio: function(t) {
                    var n = {
                        pluginid: t
                    };
                    aq.avatarParamEnabled && (n.avatar = "avatar"), aZ({
                        protocolName: aq.protocolNameForStudio,
                        launchMode: "plugin",
                        otherParams: n
                    })
                },
                editGameInStudio: function(t, n, r) {
                    var a, o, i, u, s, d, f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                        v = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
                    aq.separateScriptParamsEnabled ? (d = {
                        task: f ? "StartTeamTest" : "EditPlace",
                        placeId: t,
                        universeId: n
                    }, !f && (p && (d.targetInstanceId = p), v && (d.annotationId = v))) : d = {
                        script: (a = t, o = n, i = r, u = "Edit.ashx", s = " ", c.Endpoints && c.Endpoints.Urls && (s = "".concat(c.Endpoints.getAbsoluteUrl("/Game/".concat(u)), "?")), "h" !== s[0] && (s = "http://".concat(window.location.host) + "/Game/".concat(u, "?")), s + l().param({
                            placeId: a,
                            upload: i ? a : "",
                            universeId: o,
                            testMode: !1
                        }))
                    }, aq.avatarParamEnabled && (d.avatar = "avatar"), aZ({
                        protocolName: aq.protocolNameForStudio,
                        launchMode: "edit",
                        otherParams: d,
                        placeId: t
                    })
                },
                followPlayerIntoGame: function(t) {
                    return aZ({
                        protocolName: aq.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: aQ("RequestFollowUser", t)
                        }
                    })
                },
                joinGameInstance: function(t) {
                    var n = aq.protocolNameForClient,
                        r = aQ("RequestGameJob", t),
                        a = !0 === t.isPlayTogetherGame;
                    return aZ({
                        protocolName: n,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: r
                        },
                        placeId: t.placeId,
                        isPlayTogetherGame: a
                    })
                },
                joinPrivateGame: function(t) {
                    return aZ({
                        protocolName: aq.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: aQ("RequestPrivateGame", t)
                        },
                        placeId: t.placeId
                    })
                },
                playTogetherGame: function(t) {
                    return aZ({
                        protocolName: aq.protocolNameForClient,
                        launchMode: "play",
                        otherParams: {
                            placelauncherurl: aQ("RequestPlayTogetherGame", t)
                        },
                        placeId: t.placeId,
                        conversationId: t.conversationId
                    })
                },
                manualDownload: a0,
                attachManualDownloadToLink: function() {
                    return aV(function() {
                        return az(this, function(t) {
                            return l()("body #GameLaunchManualInstallLink").click(function() {
                                return aV(function() {
                                    return az(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, a0()];
                                            case 1:
                                                return t.sent(), [2, !1]
                                        }
                                    })
                                })()
                            }), [2]
                        })
                    })()
                },
                startDownload: aY,
                setLocationHref: a$,
                openDesktopUniversalApp: function() {
                    var t = {};
                    t.protocolName = aq.protocolNameForClient, t.launchTime = new Date().getTime(), t.launchMode = "app", t.otherParams = {}, t.otherParams.browsertrackerid = c.Cookies.getBrowserTrackerId(), t.otherParams.robloxLocale = aq.robloxLocale, t.otherParams.gameLocale = aq.gameLocale, t.otherParams.LaunchExp = "InApp", l()(eQ).trigger(eQ.startClientAttemptedEvent, {
                        launchMethod: "Protocol",
                        params: t
                    });
                    var n = aX(t);
                    return aq.showDialog(t), n
                },
                showDialog: function(t) {
                    var n, r, a = (n = "react-dialog-container", (r = document.getElementById(n)) ? (ta().unmountComponentAtNode(r), r.innerHTML = "") : ((r = document.createElement("div")).id = n, document.body.appendChild(r)), r),
                        o = function() {
                            return ta().unmountComponentAtNode(a)
                        },
                        i = aH(null == t ? void 0 : t.launchMode);
                    (0, en.renderWithErrorBoundary)((0, ee.jsx)(en.TranslationProvider, {
                        config: to.P,
                        children: (0, ee.jsx)(d.QueryClientProvider, {
                            client: en.queryClient,
                            children: (0, ee.jsx)(aF, {
                                download: function() {
                                    return aV(function() {
                                        var n, r;
                                        return az(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    if (t.placeId && null != (n = window.localStorage.getItem("ref_info"))) {
                                                        window.localStorage.removeItem("ref_info"), r = {};
                                                        try {
                                                            r = JSON.parse(atob(n))
                                                        } catch (t) {}
                                                        t.referredByPlayerId = r[t.placeId]
                                                    }
                                                    if (l()(eQ).trigger(eQ.beginInstallEvent, {
                                                            launchMethod: "Protocol",
                                                            params: t
                                                        }), aq.isInstalling = !0, !i) return [3, 1];
                                                    return document.getElementById("downloadInstallerIFrame").src = "/download/studio", o(), [3, 3];
                                                case 1:
                                                    return [4, aY()];
                                                case 2:
                                                    a.sent(), a.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    })()
                                },
                                launchGame: function() {
                                    return aV(function() {
                                        return az(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, aX(t)];
                                                case 1:
                                                    return [2, n.sent()]
                                            }
                                        })
                                    })()
                                },
                                unmount: o
                            })
                        })
                    }), a)
                },
                showLaunchFailureDialog: aJ,
                cleanUpAndLogSuccess: aK,
                startGameWithDeepLinkUrl: function(t, n) {
                    var r = {
                        launchMode: "play",
                        protocolName: aq.protocolNameForClient,
                        placeId: n
                    };
                    aq.showDialog(r), a$(t)
                }
            }), l()(document).ready(function() {
                eQ.setGameLaunchInterface(aq);
                var t = l()("#PlaceLauncherStatusPanel");
                aq.protocolNameForClient = a1("roblox-player"), aq.protocolNameForStudio = a1("roblox-studio"), aq.protocolDetectionEnabled = !0, aq.separateScriptParamsEnabled = !0, aq.avatarParamEnabled = !0, aq.isJoinAttemptIdEnabled = !0, aq.robloxLocale = t.data("protocol-roblox-locale"), aq.gameLocale = t.data("protocol-game-locale");
                var n = t.data("protocol-channel-name");
                "string" == typeof n && "LIVE" !== n.toUpperCase() && (aq.channel = n);
                var r = t.data("protocol-studio-channel-name");
                "string" == typeof r && "LIVE" !== r.toUpperCase() && (aq.studioChannel = r);
                var a = t.data("protocol-player-channel-name");
                "string" == typeof a && "LIVE" !== a.toUpperCase() && (aq.playerChannel = a), aq.logger || void 0 === window.Roblox.ProtocolHandlerLogger || (aq.logger = window.Roblox.ProtocolHandlerLogger), aq.isDuarAutoOptInEnabled = t.data("is-duar-auto-opt-in-enabled"), aq.isDuarOptOutDisabled = t.data("is-duar-opt-out-disabled")
            }), r(788), r(70), Object.assign(window.Roblox, {
                AuthenticationChecker: eX,
                GameLauncher: eQ,
                GameLaunchLogger: e5,
                GamePlayEvents: e2,
                ProtocolHandlerClientInterface: aq,
                PlayButton: {
                    usePlayabilityStatus: function(t) {
                        var n = (0, d.useQuery)({
                                queryKey: ["playabilityStatus", t],
                                queryFn: function() {
                                    var n;
                                    return (n = function() {
                                        var n, r, a, o;
                                        return function(t, n) {
                                            var r, a, o, i = {
                                                    label: 0,
                                                    sent: function() {
                                                        if (1 & o[0]) throw o[1];
                                                        return o[1]
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
                                                        if (r = 1, a && (o = 2 & s[0] ? a.return : s[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
                                                        switch (a = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                                            case 0:
                                                            case 1:
                                                                o = s;
                                                                break;
                                                            case 4:
                                                                return i.label++, {
                                                                    value: s[1],
                                                                    done: !1
                                                                };
                                                            case 5:
                                                                i.label++, a = s[1], s = [0];
                                                                continue;
                                                            case 7:
                                                                s = i.ops.pop(), i.trys.pop();
                                                                continue;
                                                            default:
                                                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                                    i = 0;
                                                                    continue
                                                                }
                                                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                                    i.label = s[1];
                                                                    break
                                                                }
                                                                if (6 === s[0] && i.label < o[1]) {
                                                                    i.label = o[1], o = s;
                                                                    break
                                                                }
                                                                if (o && i.label < o[2]) {
                                                                    i.label = o[2], i.ops.push(s);
                                                                    break
                                                                }
                                                                o[2] && i.ops.pop(), i.trys.pop();
                                                                continue
                                                        }
                                                        s = n.call(t, i)
                                                    } catch (t) {
                                                        s = [6, t], a = 0
                                                    } finally {
                                                        r = o = 0
                                                    }
                                                    if (5 & s[0]) throw s[1];
                                                    return {
                                                        value: s[0] ? s[1] : void 0,
                                                        done: !0
                                                    }
                                                }
                                            }
                                        }(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!t) throw null == (n = window.EventTracker) || n.fireEvent(T.PlayabilityStatusFetchInvalidUniverseId), Error("Invalid universe ID for playability status fetch");
                                                    i.label = 1;
                                                case 1:
                                                    var l;
                                                    return i.trys.push([1, 3, , 4]), [4, (l = [t], b(function() {
                                                        var t;
                                                        return g(this, function(n) {
                                                            switch (n.label) {
                                                                case 0:
                                                                    return [4, w.getPlayabilityStatus(l)];
                                                                case 1:
                                                                    return [2, (void 0 === (t = n.sent().data) ? [] : t)[0]]
                                                            }
                                                        })
                                                    })())];
                                                case 2:
                                                    return r = i.sent(), [3, 4];
                                                case 3:
                                                    throw i.sent(), null == (a = window.EventTracker) || a.fireEvent(T.PlayabilityStatusFetchFailed), Error("Playability status fetch failed");
                                                case 4:
                                                    if (!(null == r ? void 0 : r.playabilityStatus) || void 0 === r.isPlayable) throw null == (o = window.EventTracker) || o.fireEvent(T.PlayabilityStatusFetchInvalidResponse), Error("Invalid playability status response");
                                                    return [2, {
                                                        playabilityStatus: r.playabilityStatus,
                                                        isPlayable: r.isPlayable,
                                                        unplayableDisplayText: r.unplayableDisplayText
                                                    }]
                                            }
                                        })
                                    }, function() {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function(a, o) {
                                            var i = n.apply(t, r);

                                            function l(t) {
                                                R(i, a, o, l, c, "next", t)
                                            }

                                            function c(t) {
                                                R(i, a, o, l, c, "throw", t)
                                            }
                                            l(void 0)
                                        })
                                    })()
                                },
                                staleTime: 3e4
                            }),
                            r = n.data,
                            a = n.isFetching,
                            o = n.isError,
                            i = n.refetch,
                            l = (0, u.useCallback)(function() {
                                i()
                            }, [i]);
                        return (0, u.useEffect)(function() {
                            var t = function(t) {
                                t.persisted && l()
                            };
                            return window.addEventListener("pageshow", t),
                                function() {
                                    window.removeEventListener("pageshow", t)
                                }
                        }, [l]), (0, u.useMemo)(function() {
                            return o ? {
                                playabilityStatus: D.playabilityStatus,
                                isPlayable: D.isPlayable,
                                unplayableDisplayText: D.unplayableDisplayText,
                                isFetchingPlayability: a,
                                refetchPlayabilityData: l
                            } : {
                                playabilityStatus: null == r ? void 0 : r.playabilityStatus,
                                isPlayable: null == r ? void 0 : r.isPlayable,
                                unplayableDisplayText: null == r ? void 0 : r.unplayableDisplayText,
                                isFetchingPlayability: a,
                                refetchPlayabilityData: l
                            }
                        }, [r, o, a, l])
                    },
                    PlayabilityStatuses: E,
                    launchGame: K,
                    launchLogin: $,
                    shouldShowUnplayableButton: Q,
                    DefaultPlayButton: function(t) {
                        var n, r = t.placeId,
                            a = t.rootPlaceId,
                            o = t.universeId,
                            i = t.privateServerLinkCode,
                            l = t.gameInstanceId,
                            c = t.refetchPlayabilityStatus,
                            u = t.playabilityStatus,
                            s = t.hideButtonText,
                            d = t.eventProperties,
                            f = void 0 === d ? {} : d,
                            p = t.appsFlyerReferralProperties,
                            v = void 0 === p ? {} : p,
                            m = t.disableLoadingState,
                            y = t.buttonClassName,
                            h = t.redirectPurchaseUrl,
                            b = t.showDefaultPurchaseText,
                            g = t.shouldShowVpcPlayButtonUpsells,
                            w = (null != (n = window.EventTracker) ? n : {}).fireEvent;
                        switch (u) {
                            case void 0:
                                if (!m) return (0, ee.jsx)(et.Loading, {});
                                return (0, ee.jsx)(eq, {
                                    universeId: o,
                                    placeId: r,
                                    rootPlaceId: a,
                                    privateServerLinkCode: i,
                                    gameInstanceId: l,
                                    status: E.Playable,
                                    eventProperties: f,
                                    appsFlyerReferralProperties: v,
                                    disableLoadingState: m,
                                    buttonClassName: y
                                });
                            case E.Playable:
                            case E.GuestProhibited:
                                return (0, ee.jsx)(eq, {
                                    universeId: o,
                                    placeId: r,
                                    rootPlaceId: a,
                                    privateServerLinkCode: i,
                                    gameInstanceId: l,
                                    status: u,
                                    eventProperties: f,
                                    appsFlyerReferralProperties: v,
                                    disableLoadingState: m,
                                    buttonClassName: y
                                });
                            case E.ContextualPlayabilityUnverifiedSeventeenPlusUser:
                                return null == w || w(T.ActionNeeded), (0, ee.jsx)(eL, {
                                    universeId: o,
                                    hideButtonText: s,
                                    buttonClassName: y
                                });
                            case E.PurchaseRequired:
                            case E.FiatPurchaseRequired:
                                return (0, ee.jsx)(eR, {
                                    refetchPlayabilityStatus: c,
                                    universeId: o,
                                    placeId: r,
                                    hideButtonText: s,
                                    buttonClassName: y,
                                    redirectPurchaseUrl: h,
                                    playabilityStatus: u,
                                    showDefaultPurchaseText: b
                                });
                            case E.ContextualPlayabilityAgeRecommendationParentalControls:
                                if (g) return null == w || w(T.ActionNeeded), (0, ee.jsx)(ew, {
                                    universeId: o,
                                    hideButtonText: s,
                                    buttonClassName: y,
                                    placeId: r,
                                    rootPlaceId: a,
                                    privateServerLinkCode: i,
                                    gameInstanceId: l,
                                    eventProperties: f,
                                    appsFlyerReferralProperties: v
                                });
                                return null == w || w(T.Unplayable), (0, ee.jsx)(eM, {
                                    hideButtonText: s,
                                    buttonClassName: y
                                });
                            case E.UnplayableOtherReason:
                            case E.GameUnapproved:
                            case E.IncorrectConfiguration:
                            case E.UniverseRootPlaceIsPrivate:
                            case E.InsufficientPermissionFriendsOnly:
                            case E.InsufficientPermissionGroupOnly:
                            case E.DeviceRestricted:
                            case E.UnderReview:
                            case E.AccountRestricted:
                            case E.TemporarilyUnavailable:
                            case E.ComplianceBlocked:
                            case E.ContextualPlayabilityRegionalAvailability:
                            case E.ContextualPlayabilityRegionalCompliance:
                            case E.ContextualPlayabilityAgeGated:
                            case E.PlaceHasNoPublishedVersion:
                            case E.ContextualPlayabilityUnrated:
                            case E.ContextualPlayabilityAgeGatedByDescriptor:
                            case E.ContextualPlayabilityExperienceBlockedParentalControls:
                            default:
                                return null == w || w(T.Unplayable), (0, ee.jsx)(eM, {
                                    hideButtonText: s,
                                    buttonClassName: y
                                })
                        }
                    },
                    PlayButton: eq,
                    PurchaseButton: eR,
                    Error: eH,
                    ContextualMessage: eJ
                }
            }), l()(document).ready(function() {
                tn();
                var t = (0, c.DeviceMeta)();
                (t.isUWPApp || t.isUniversalApp) && (e$.isJoinAttemptIdEnabled = !0, window.Roblox.AppHybridClientInterface = e$, eQ.setGameLaunchInterface(e$)), eQ.setGameLaunchLogger(e5)
            })
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameLaunch");
//# debugId=b6d04dd8-270b-4d0f-8ead-141ac359867c
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/gameLaunch-b2c5bfb0b231bd41.js.map