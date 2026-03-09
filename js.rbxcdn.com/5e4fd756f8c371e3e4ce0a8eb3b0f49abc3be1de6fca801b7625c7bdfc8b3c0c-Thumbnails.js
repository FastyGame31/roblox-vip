! function() {
    var t = {
            631: function(t, e, n) {
                var r = {
                    "./2dThumbnailComponent.js": "54"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 631
            },
            916: function(t, e, n) {
                var r = {
                    "./thumbnailConstants.js": "883"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 916
            },
            316: function(t, e, n) {
                var r = {
                    "./2dThumbnailController.js": "138"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 316
            },
            281: function(t, e, n) {
                var r = {
                    "./imageLoadDirective.js": "243",
                    "./thumbnailErrorDirective.js": "666"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 281
            },
            87: function(t, e, n) {
                var r = {
                    "./thumbnailService.js": "868"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 87
            },
            892: function(t, e, n) {
                var r = {
                    "./components/templates/2dThumbnail.html": "79"
                };

                function o(t) {
                    return n(i(t))
                }

                function i(t) {
                    if (!n.o(r, t)) {
                        var e = Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return r[t]
                }
                o.keys = function() {
                    return Object.keys(r)
                }, o.resolve = i, t.exports = o, o.id = 892
            },
            79: function(t) {
                t.exports = '<span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="{{ $ctrl.thumbnailType }}" thumbnail-target-id="{{ $ctrl.thumbnailTargetId }}"> <img ng-if="$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()" ng-src="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed" ng-class="{\'loading\': $ctrl.thumbnailUrl && !isLoaded }" image-load alt="{{$ctrl.altName}}" title="{{$ctrl.altName}}"/> <img ng-if="$ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled()" lazy-img="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed"/> </span> '
            },
            54: function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n(869),
                    o = {
                        templateUrl: "2d-thumbnail",
                        bindings: {
                            thumbnailType: "<",
                            thumbnailTargetId: "<",
                            thumbnailOptions: "<?",
                            onSuccess: "<",
                            onFailure: "<",
                            altName: "<"
                        },
                        controller: "2dThumbnailController"
                    };
                r.A.component("thumbnail2d", o), e.default = o
            },
            883: function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n(517),
                    o = n(869),
                    i = {
                        thumbnailTypes: r.uS,
                        thumbnailStates: r.xc,
                        formats: r.Ul,
                        avatarHeadshotSize: r.jZ,
                        gameIconSize: r.fP,
                        thumbnailAvatarsSize: r.qh
                    };
                o.A.constant("thumbnailConstants", i), e.default = i
            },
            138: function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n(567),
                    o = n(517),
                    i = n(869);

                function a(t, e) {
                    var n = this,
                        i = "",
                        a = o.xc;
                    n.getCssClasses = function() {
                        return n.isThumbnailRequestSending ? "shimmer" : e.getCssClass(n.thumbnailState)
                    }, n.setThumbnailLoadFailed = function() {}, n.isLazyLoadingEnabled = function() {
                        return n.thumbnailOptions && n.thumbnailOptions.isLazyLoading
                    }, n.updateImageLoadMetrics = function(t) {
                        var e = t - n.startTime,
                            o = n.performance.retryAttempts;
                        (0, r.l)("ThumbnailLoadDurationWebapp", {
                            Status: "Success",
                            ThumbnailType: "".concat(n.thumbnailType, "_2d"),
                            Version: n.version,
                            Value: e.toString()
                        }), o ? (0, r.l)("ThumbnailRetryWebapp", {
                            ThumbnailType: "".concat(n.thumbnailType, "_2d"),
                            Version: n.version,
                            Value: o.toString()
                        }).catch(function(t) {
                            console.error(t)
                        }) : (0, r.l)("ThumbnailNoRetrySuccessWebapp", {
                            ThumbnailType: "".concat(n.thumbnailType, "_2d"),
                            Version: n.version
                        }).catch(function(t) {
                            console.error(t)
                        })
                    };
                    var u = function() {
                        var t, r, u = "".concat(n.thumbnailType, ":").concat(n.thumbnailTargetId);
                        if (n.startTime = new Date().getTime(), i !== u) {
                            i = u, n.thumbnailState = a.loading;
                            var c = (null == (t = n.thumbnailOptions) ? void 0 : t.size) || o.F5,
                                l = (null == (r = n.thumbnailOptions) ? void 0 : r.format) || o.R2;
                            n.isThumbnailRequestSending = !0, e.getThumbnailImage(n.thumbnailType, n.thumbnailTargetId, c, l).then(function(t) {
                                var e = t.thumbnail,
                                    r = e.state,
                                    o = e.imageUrl,
                                    i = e.version,
                                    a = t.performance;
                                n.thumbnailState = r, n.thumbnailUrl = o, n.performance = a, n.version = i, n.onSuccess && n.onSuccess(a)
                            }).catch(function(t) {
                                n.thumbnailState = a.error, n.onFailure && n.onFailure(t)
                            }).finally(function() {
                                n.isThumbnailRequestSending = !1
                            })
                        }
                    };
                    n.$onInit = u, n.$onChanges = u
                }
                a.$inject = ["$scope", "thumbnailService"], i.A.controller("2dThumbnailController", a), e.default = a
            },
            243: function(t, e, n) {
                "use strict";

                function r() {
                    return {
                        restrict: "A",
                        link: function(t, e) {
                            e.bind("load", function() {
                                t.$evalAsync(function() {
                                    t.$parent.$ctrl.updateImageLoadMetrics(new Date().getTime()), t.isLoaded = !0
                                })
                            })
                        }
                    }
                }
                n.r(e), n(869).A.directive("imageLoad", r), e.default = r
            },
            666: function(t, e, n) {
                "use strict";

                function r() {
                    return {
                        scope: {
                            thumbnailError: "<"
                        },
                        link: function(t, e) {
                            e.on("error", t.thumbnailError)
                        }
                    }
                }
                n.r(e), n(869).A.directive("thumbnailError", r), e.default = r
            },
            868: function(t, e, n) {
                "use strict";
                n.r(e);
                var r = n(392),
                    o = n(869);

                function i(t) {
                    return {
                        getThumbnailImage: function(e, n, o, i) {
                            return t(function(t, a) {
                                r.getThumbnailImage(e, o, i, n).then(function(e) {
                                    t(e)
                                }).catch(a)
                            })
                        },
                        getCssClass: function(t) {
                            return r.getCssClass(t)
                        },
                        reloadThumbnailImage: function(e, n, o) {
                            return t(function(t, i) {
                                r.reloadThumbnailImage(e, o, null, n).then(function(e) {
                                    t(e)
                                }).catch(i)
                            })
                        }
                    }
                }
                i.$inject = ["$q"], o.A.factory("thumbnailService", i), e.default = i
            },
            869: function(t, e, n) {
                "use strict";
                var r = n(192);
                e.A = n.n(r)().module("thumbnails", ["robloxApp", "thumbnailsTemplates", "angularLazyImg"])
            },
            255: function(t) {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }!
                /*!
                	Copyright (c) 2018 Jed Watson.
                	Licensed under the MIT License (MIT), see
                	http://jedwatson.github.io/classnames
                */
                function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function r() {
                        for (var t = "", i = 0; i < arguments.length; i++) {
                            var a = arguments[i];
                            a && (t = o(t, function(t) {
                                if ("string" == typeof t || "number" == typeof t) return t;
                                if ("object" !== e(t)) return "";
                                if (Array.isArray(t)) return r.apply(null, t);
                                if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                                var i = "";
                                for (var a in t) n.call(t, a) && t[a] && (i = o(i, a));
                                return i
                            }(a)))
                        }
                        return t
                    }

                    function o(t, e) {
                        return e ? t ? t + " " + e : t + e : t
                    }
                    t.exports ? (r.default = r, t.exports = r) : "function" == typeof define && "object" === e(define.amd) && define.amd ? define("classnames", [], function() {
                        return r
                    }) : window.classNames = r
                }()
            },
            517: function(t, e, n) {
                "use strict";
                n.d(e, {
                    DS: function() {
                        return _
                    },
                    EX: function() {
                        return J
                    },
                    F5: function() {
                        return P
                    },
                    JF: function() {
                        return I
                    },
                    MU: function() {
                        return X
                    },
                    Mi: function() {
                        return j
                    },
                    Ou: function() {
                        return z
                    },
                    Pq: function() {
                        return T
                    },
                    R2: function() {
                        return A
                    },
                    S3: function() {
                        return D
                    },
                    SD: function() {
                        return G
                    },
                    SH: function() {
                        return N
                    },
                    TP: function() {
                        return B
                    },
                    Tm: function() {
                        return E
                    },
                    Ul: function() {
                        return L
                    },
                    XC: function() {
                        return x
                    },
                    cu: function() {
                        return V
                    },
                    dS: function() {
                        return H
                    },
                    fP: function() {
                        return k
                    },
                    jZ: function() {
                        return q
                    },
                    lo: function() {
                        return F
                    },
                    o0: function() {
                        return O
                    },
                    qh: function() {
                        return R
                    },
                    s2: function() {
                        return M
                    },
                    tb: function() {
                        return W
                    },
                    uS: function() {
                        return C
                    },
                    wu: function() {
                        return $
                    },
                    x$: function() {
                        return K
                    },
                    xc: function() {
                        return U
                    }
                });
                var r, o, i, a, u, c, l, s, f, m, h, b, d, p, y, g, v, S = n(93),
                    w = n.n(S)().thumbnailsApi,
                    T = "".concat(w, "/v1/metadata"),
                    O = ((r = {}).processFailure = "processFailure", r.unretriableFailure = "unretriableFailure", r.maxAttemptsReached = "maxAttemptsReached", r),
                    I = ((o = {}).Avatar = "Avatar", o.AvatarHeadShot = "AvatarHeadShot", o.GameIcon = "GameIcon", o.BadgeIcon = "BadgeIcon", o.GameThumbnail = "GameThumbnail", o.GamePass = "GamePass", o.Asset = "Asset", o.BundleThumbnail = "BundleThumbnail", o.Outfit = "Outfit", o.GroupIcon = "GroupIcon", o.DeveloperProduct = "DeveloperProduct", o.PlaceIcon = "PlaceIcon", o.LookThumbnail = "Look", o.Screenshot = "Screenshot", o),
                    C = ((i = {}).avatar = "Avatar", i.avatarHeadshot = "AvatarHeadshot", i.gameIcon = "GameIcon", i.gameThumbnail = "GameThumbnail", i.badgeIcon = "BadgeIcon", i.gamePassIcon = "GamePass", i.assetThumbnail = "Asset", i.bundleThumbnail = "BundleThumbnail", i.userOutfit = "Outfit", i.groupIcon = "GroupIcon", i.developerProductIcon = "DeveloperProduct", i.universeThumbnail = "UniverseThumbnail", i.universeThumbnails = "UniverseThumbnails", i.placeGameIcon = "PlaceGameIcon", i.lookThumbnail = "Look", i.screenshot = "Screenshot", i),
                    x = 100,
                    j = ((a = {})[a.maxRetryAttempts = 10] = "maxRetryAttempts", a[a.minCooldown = 1e3] = "minCooldown", a[a.maxCooldown = 3e4] = "maxCooldown", a),
                    P = "150x150",
                    A = "webp",
                    k = ((u = {}).size50 = "50x50", u.size150 = "150x150", u.size256 = "256x256", u.size512 = "512x512", u),
                    z = ((c = {}).size150 = "150x150", c),
                    E = ((l = {}).size150 = "150x150", l.size420 = "420x420", l.size700 = "700x700", l.width256 = "256x144", l.width384 = "384x216", l.width480 = "480x270", l.width576 = "576x324", l.width768 = "768x432", l.width1320 = "1320x440", l.width660 = "660x220", l.width330 = "330x110", l.width720 = "720x228", l.width930 = "930x480", l.width1440 = "1440x456", l),
                    R = ((s = {}).size100 = "100x100", s.size352 = "352x352", s.size720 = "720x720", s),
                    q = ((f = {}).size48 = "48x48", f.size60 = "60x60", f.size150 = "150x150", f),
                    $ = ((m = {}).size150 = "150x150", m.size420 = "420x420", m),
                    D = ((h = {}).size150 = "150x150", h),
                    M = ((b = {}).size150 = "150x150", b),
                    N = ((d = {}).width768 = "768x432", d.width576 = "576x324", d.width480 = "480x270", d.width384 = "384x216", d.width256 = "256x144", d),
                    F = ((p = {}).width768 = "768x432", p.width576 = "576x324", p.width480 = "480x270", p.width384 = "384x216", p.width256 = "256x144", p),
                    U = ((y = {}).error = "Error", y.complete = "Completed", y.inReview = "InReview", y.pending = "Pending", y.blocked = "Blocked", y),
                    L = ((g = {}).png = "png", g.jpg = "jpg", g.jpeg = "jpeg", g.webp = "webp", g),
                    B = ((v = {}).PlaceHolder = "PlaceHolder", v.AutoGenerated = "AutoGenerated", v.ForceAutoGenerated = "ForceAutoGenerated", v),
                    G = "Thumbnail2DWeb",
                    _ = "LoadSuccess",
                    W = "RetryLoadSuccess",
                    J = "RetryPerThumbnailType",
                    H = "Sequence",
                    V = "LoadFailure",
                    X = "Counter",
                    K = {
                        thumbnailMetricsSampleSize: 10,
                        isWebappUseCacheEnabled: !1,
                        webappCacheExpirationTimespan: "00:00:00",
                        requestMinCooldown: 1e3,
                        requestMaxCooldown: 3e3,
                        requestMaxRetryAttempts: 5,
                        requestBatchSize: 100,
                        concurrentThumbnailRequestCount: 1
                    }
            },
            567: function(t, e, n) {
                "use strict";
                n.d(e, {
                    l: function() {
                        return I
                    }
                });
                var r, o, i = window.CoreUtilities,
                    a = n(93),
                    u = n.n(a)().beaconApi,
                    c = window.Roblox["core-scripts"].auth.xsrfToken;

                function l(t, e, n, r, o, i, a) {
                    try {
                        var u = t[i](a),
                            c = u.value
                    } catch (t) {
                        n(t);
                        return
                    }
                    u.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function s(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), r.forEach(function(e) {
                            s(t, e, n[e])
                        })
                    }
                    return t
                }

                function m(t, e) {
                    return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(e)).forEach(function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                    }), t
                }
                var h = "X-CSRF-TOKEN",
                    b = function(t, e) {
                        var n = (0, c.getToken)(),
                            r = null != e ? e : {},
                            o = r.headers,
                            i = function(t, e) {
                                if (null == t) return {};
                                var n, r, o = function(t, e) {
                                    if (null == t) return {};
                                    var n, r, o = {},
                                        i = Object.keys(t);
                                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                    return o
                                }(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(t);
                                    for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                                }
                                return o
                            }(r, ["headers"]),
                            a = m(f({}, Object.fromEntries(new Headers(o))), s({}, h, n));
                        return fetch(t, m(f({}, i), {
                            headers: a
                        }))
                    },
                    d = function(t, e) {
                        var n;
                        return (n = function() {
                            var n, r;
                            return function(t, e) {
                                var n, r, o, i = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    },
                                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                                return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(c) {
                                        var l = [u, c];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a && (a = 0, l[0] && (i = 0)), i;) try {
                                            if (n = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                                            switch (r = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                                                case 0:
                                                case 1:
                                                    o = l;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: l[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, r = l[1], l = [0];
                                                    continue;
                                                case 7:
                                                    l = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                                        i.label = l[1];
                                                        break
                                                    }
                                                    if (6 === l[0] && i.label < o[1]) {
                                                        i.label = o[1], o = l;
                                                        break
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        i.label = o[2], i.ops.push(l);
                                                        break
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            l = e.call(t, i)
                                        } catch (t) {
                                            l = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & l[0]) throw l[1];
                                        return {
                                            value: l[0] ? l[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            }(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, b(t, e)];
                                    case 1:
                                        if (403 !== (n = o.sent()).status || !(r = n.headers.get(h))) return [3, 3];
                                        return (0, c.setToken)(r), [4, b(t, e)];
                                    case 2:
                                        n = o.sent(), o.label = 3;
                                    case 3:
                                        return [2, n]
                                }
                            })
                        }, function() {
                            var t = this,
                                e = arguments;
                            return new Promise(function(r, o) {
                                var i = n.apply(t, e);

                                function a(t) {
                                    l(i, r, o, a, u, "next", t)
                                }

                                function u(t) {
                                    l(i, r, o, a, u, "throw", t)
                                }
                                a(void 0)
                            })
                        })()
                    };

                function p(t, e, n, r, o, i, a) {
                    try {
                        var u = t[i](a),
                            c = u.value
                    } catch (t) {
                        n(t);
                        return
                    }
                    u.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function y(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), r.forEach(function(e) {
                            var r;
                            r = n[e], e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r
                        })
                    }
                    return t
                }
                var g = new i.BatchRequestFactory,
                    v = 0,
                    S = (o = document.getElementsByName("performance")[0]) ? {
                        performanceMetricsBatchWaitTime: function(t) {
                            if (!t) return 0;
                            var e, n, r, o = t.split(":");
                            return (60 * parseInt(null != (e = o[0]) ? e : "", 10) * 60 + 60 * parseInt(null != (n = o[1]) ? n : "", 10) + parseInt(null != (r = o[2]) ? r : "", 10)) * 1e3
                        }(o.getAttribute("data-ui-performance-metrics-batch-wait-time")),
                        performanceMetricsBatchSize: parseInt(null != (r = o.getAttribute("data-ui-performance-metrics-batch-size")) ? r : "", 10)
                    } : {},
                    w = S.performanceMetricsBatchWaitTime,
                    T = S.performanceMetricsBatchSize,
                    O = g.createRequestProcessor(function(t) {
                        var e;
                        return (e = function() {
                            var e, n;
                            return function(t, e) {
                                var n, r, o, i = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    },
                                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                                return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(c) {
                                        var l = [u, c];
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a && (a = 0, l[0] && (i = 0)), i;) try {
                                            if (n = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                                            switch (r = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                                                case 0:
                                                case 1:
                                                    o = l;
                                                    break;
                                                case 4:
                                                    return i.label++, {
                                                        value: l[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    i.label++, r = l[1], l = [0];
                                                    continue;
                                                case 7:
                                                    l = i.ops.pop(), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                        i = 0;
                                                        continue
                                                    }
                                                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                                        i.label = l[1];
                                                        break
                                                    }
                                                    if (6 === l[0] && i.label < o[1]) {
                                                        i.label = o[1], o = l;
                                                        break
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        i.label = o[2], i.ops.push(l);
                                                        break
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue
                                            }
                                            l = e.call(t, i)
                                        } catch (t) {
                                            l = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & l[0]) throw l[1];
                                        return {
                                            value: l[0] ? l[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            }(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = t.map(function(t) {
                                            return t.data.taskId, y({}, function(t, e) {
                                                if (null == t) return {};
                                                var n, r, o = function(t, e) {
                                                    if (null == t) return {};
                                                    var n, r, o = {},
                                                        i = Object.keys(t);
                                                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                                    return o
                                                }(t, e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(t);
                                                    for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                                                }
                                                return o
                                            }(t.data, ["taskId"]))
                                        }), [4, d("".concat(u, "/v1/measurements"), {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            keepalive: !0,
                                            body: JSON.stringify(e)
                                        })];
                                    case 1:
                                        return r.sent(), n = {}, t.forEach(function(t) {
                                            n[t.key] = !0
                                        }), [2, n]
                                }
                            })
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(r, o) {
                                var i = e.apply(t, n);

                                function a(t) {
                                    p(i, r, o, a, u, "next", t)
                                }

                                function u(t) {
                                    p(i, r, o, a, u, "throw", t)
                                }
                                a(void 0)
                            })
                        })()
                    }, function(t) {
                        var e, n = t.taskId;
                        return null != (e = null == n ? void 0 : n.toString()) ? e : ""
                    }, {
                        getFailureCooldown: g.createExponentialBackoffCooldown(1e3, 3e3),
                        maxRetryAttempts: 5,
                        batchSize: null != T ? T : 100,
                        processBatchWaitTime: null != w ? w : 1e3
                    }),
                    I = function(t, e) {
                        var n = v;
                        v += 1;
                        var r = {
                            metricName: t,
                            jsonData: JSON.stringify(e)
                        };
                        return O.queueItem(y({
                            taskId: n
                        }, r))
                    }
            },
            392: function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    getCssClass: function() {
                        return l
                    },
                    getThumbnailImage: function() {
                        return u
                    },
                    reloadThumbnailImage: function() {
                        return c
                    }
                });
                var r = n(636),
                    o = n(606),
                    i = n(517),
                    a = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ul.webp,
                            a = arguments.length > 3 ? arguments[3] : void 0,
                            u = arguments.length > 4 ? arguments[4] : void 0,
                            c = arguments.length > 5 ? arguments[5] : void 0,
                            l = arguments.length > 6 ? arguments[6] : void 0;
                        if (!a && !u) return new Promise(function(t, e) {
                            e(Error("TargetId or token can not be empty."))
                        });
                        if (!t) return new Promise(function(t, e) {
                            e(Error("ThumbnailType can not be empty."))
                        });
                        null != n || (n = i.Ul.webp);
                        var s = n;
                        (t === i.uS.gameIcon || t === i.uS.gameThumbnail || t === i.uS.placeGameIcon || t === i.uS.universeThumbnail) && (s = i.Ul.webp);
                        var f = {
                                targetId: a,
                                token: u,
                                type: t,
                                format: s,
                                size: e,
                                version: l
                            },
                            m = [i.uS.universeThumbnails, i.uS.universeThumbnail].includes(t) ? "universeThumbnailProcessor" : "thumbnail2dProcessor";
                        return r.W8.processThumbnailBatchRequest(f, function(e) {
                            return t === i.uS.universeThumbnail ? o.yB.handle(e, 1) : t === i.uS.universeThumbnails ? o.yB.handle(e, 10) : o.u_.handle(e)
                        }, m, c)
                    },
                    u = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ul.webp,
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0,
                            u = arguments.length > 5 ? arguments[5] : void 0;
                        return a(t, e, n, r, o, !1, u)
                    },
                    c = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Ul.webp,
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        return a(t, e, n, r, o, !0)
                    },
                    l = function(t) {
                        return {
                            "icon-broken": t === i.xc.error,
                            "icon-in-review": t === i.xc.inReview,
                            "icon-blocked": t === i.xc.blocked,
                            "icon-pending": t === i.xc.pending
                        }
                    }
            },
            606: function(t, e, n) {
                "use strict";
                n.d(e, {
                    u_: function() {
                        return f
                    },
                    XY: function() {
                        return s
                    },
                    yB: function() {
                        return m
                    }
                });
                var r = window.CoreRobloxUtilities,
                    o = n(110),
                    i = n(517);

                function a(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))), r.forEach(function(e) {
                            a(t, e, n[e])
                        })
                    }
                    return t
                }
                var c = r.dataStores.thumbnailsDataStore,
                    l = r.dataStores.gameThumbnailsDataStore,
                    s = function() {
                        var t;

                        function e(t, n, r, o, i) {
                            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                            a(this, "storeInstance", void 0), a(this, "keySetter", void 0), a(this, "keyGetter", void 0), a(this, "validator", void 0), a(this, "resultSetter", void 0), this.storeInstance = t, this.keySetter = n, this.keyGetter = r, this.validator = o, this.resultSetter = i
                        }
                        return t = [{
                                key: "handle",
                                value: function(t, e) {
                                    var n = this;
                                    return new Promise(function(r) {
                                        n.storeInstance(t, e).then(function(o) {
                                            var a, c, l = new Map,
                                                s = {};
                                            (null != (c = null == o || null == (a = o.data) ? void 0 : a.data) ? c : []).forEach(function(t) {
                                                l.set(n.keySetter(t), t)
                                            }), t.forEach(function(t) {
                                                var r, o, a, c = n.keyGetter(t);
                                                if (l.has(c)) {
                                                    var f = l.get(c);
                                                    f && n.validator(f) && (s[c] = n.resultSetter(f, e))
                                                } else a = e && e > 1 ? {
                                                    thumbnails: []
                                                } : {
                                                    thumbnail: {
                                                        targetId: c,
                                                        state: i.xc.error
                                                    }
                                                }, s[c] = (r = u({}, a), o = o = {
                                                    errorcode: 3,
                                                    errorMessage: "id doesn't exist"
                                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
                                                    var n = Object.keys(t);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(t);
                                                        n.push.apply(n, r)
                                                    }
                                                    return n
                                                })(Object(o)).forEach(function(t) {
                                                    Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
                                                }), r)
                                            }), r(s)
                                        }).catch(function(t) {
                                            503 !== t.status && r({})
                                        })
                                    })
                                }
                            }],
                            function(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }(e.prototype, t), e
                    }(),
                    f = new s(function(t) {
                        var e = t.map(function(t) {
                            var e = t.data.type,
                                n = t.key,
                                r = function(t, e) {
                                    if (null == t) return {};
                                    var n, r, o = function(t, e) {
                                        if (null == t) return {};
                                        var n, r, o = {},
                                            i = Object.keys(t);
                                        for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                        return o
                                    }(t, e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(t);
                                        for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                                    }
                                    return o
                                }(t.data, ["type"]);
                            return u({
                                requestId: n,
                                type: (0, o.JS)(e)
                            }, r)
                        });
                        return new Promise(function(t, n) {
                            c.getBatchThumbnails(e).then(t).catch(n)
                        })
                    }, function(t) {
                        var e;
                        return null != (e = t.requestId) ? e : ""
                    }, function(t) {
                        return t.key
                    }, function(t) {
                        return t.state !== i.xc.pending
                    }, function(t) {
                        return {
                            thumbnail: t
                        }
                    }),
                    m = new s(function(t, e) {
                        return new Promise(function(n, r) {
                            var o, i, a;
                            l.getAllUniverseThumbnails(t.map(function(t) {
                                var e = t.data.targetId;
                                return null != e ? e : 0
                            }), null == (o = t[0]) ? void 0 : o.data.size, null == (i = t[0]) ? void 0 : i.data.format, null == (a = t[0]) ? void 0 : a.data.isCircular, e).then(n).catch(r)
                        })
                    }, function(t) {
                        return t.universeId.toString()
                    }, function(t) {
                        return t.data.targetId ? t.data.targetId.toString() : ""
                    }, function(t) {
                        return !t.error
                    }, function(t, e) {
                        return 1 === e ? {
                            thumbnail: t.thumbnails[0]
                        } : {
                            thumbnails: t.thumbnails
                        }
                    })
            },
            636: function(t, e, n) {
                "use strict";
                n.d(e, {
                    r6: function() {
                        return l
                    },
                    W8: function() {
                        return f
                    }
                });
                var r = window.Roblox["core-scripts"].util.batchRequest,
                    o = n.n(r),
                    i = n(567),
                    a = n(517),
                    u = n(110);

                function c(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var l = function() {
                    var t;

                    function e(t, n) {
                        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                        c(this, "batchRequestFactory", void 0), c(this, "thumbnailProcessorKeySerializer", void 0), c(this, "thumbnailItemIdSerializer", void 0), c(this, "thumbnailRequesters", {}), this.batchRequestFactory = new(o()), this.thumbnailItemIdSerializer = t, this.thumbnailProcessorKeySerializer = n
                    }
                    return t = [{
                            key: "getThumbnailRequesterProperties",
                            value: function(t) {
                                return t ? {
                                    getFailureCooldown: this.batchRequestFactory.createExponentialBackoffCooldown(t.requestMinCooldown, t.requestMaxCooldown),
                                    maxRetryAttempts: t.requestMaxRetryAttempts,
                                    batchSize: t.requestBatchSize,
                                    concurrentRequestCount: t.concurrentThumbnailRequestCount,
                                    processBatchWaitTime: 1e3
                                } : {
                                    getFailureCooldown: this.batchRequestFactory.createExponentialBackoffCooldown(a.Mi.minCooldown, a.Mi.maxCooldown),
                                    maxRetryAttempts: a.Mi.maxRetryAttempts,
                                    batchSize: a.XC
                                }
                            }
                        }, {
                            key: "getThumbnailRequester",
                            value: function(t, e, n) {
                                var r = this,
                                    o = this.thumbnailRequesters[e];
                                if (o) return o;
                                var i = this.batchRequestFactory.createRequestProcessor(t, function(t) {
                                    return r.thumbnailItemIdSerializer(t)
                                }, this.getThumbnailRequesterProperties(n));
                                return this.thumbnailRequesters[e] = i, i
                            }
                        }, {
                            key: "processThumbnailBatchRequest",
                            value: function(t, e) {
                                var n, r, o, c, l, s, f, m, h, b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.thumbnailProcessorKeySerializer(t),
                                    d = arguments.length > 3 ? arguments[3] : void 0,
                                    p = t.type,
                                    y = void 0 === p ? "custom" : p,
                                    g = (h = null == (n = document.getElementsByName("thumbnail-meta-data")[0]) ? void 0 : n.dataset) ? {
                                        thumbnailMetricsSampleSize: parseInt(null != (r = h.thumbnailMetricsSampleSize) ? r : "", 10),
                                        isWebappUseCacheEnabled: "True" === h.isWebappCacheEnabled,
                                        webappCacheExpirationTimespan: null != (o = h.webappCacheExpirationsTimespan) ? o : "",
                                        requestMinCooldown: parseInt(null != (c = h.requestMinCooldown) ? c : "", 10),
                                        requestMaxCooldown: parseInt(null != (l = h.requestMaxCooldown) ? l : "", 10),
                                        requestMaxRetryAttempts: parseInt(null != (s = h.requestMaxRetryAttempts) ? s : "", 10),
                                        requestBatchSize: parseInt(null != (f = h.requestBatchSize) ? f : "", 10),
                                        concurrentThumbnailRequestCount: parseInt(null != (m = h.concurrentThumbnailRequestCount) ? m : "", 10)
                                    } : a.x$,
                                    v = this.getThumbnailRequester(e, b, g);
                                d && v.invalidateItem(t);
                                var S = (0, u.$E)(g);
                                return v.queueItem(t, void 0, S).then(function(t) {
                                    if (t.performance && (0, u.rv)(g)) {
                                        var e = t.thumbnails,
                                            n = t.thumbnail,
                                            r = function(t) {
                                                (0, i.l)("ThumbnailStatusCountWebapp", {
                                                    ThumbnailType: "".concat(y, "_2d"),
                                                    Status: t.state,
                                                    Version: t.version
                                                }).catch(function(t) {
                                                    console.error(t)
                                                })
                                            };
                                        n && r(n), e && e.forEach(r)
                                    }
                                    return t
                                }).catch(function(t) {
                                    return console.error({
                                        error: t
                                    }), (0, u.rv)(g) && t === a.o0.maxAttemptsReached && (0, i.l)("ThumbnailTimeoutWebapp", {
                                        ThumbnailType: "".concat(y, "_2d")
                                    }).catch(function(t) {
                                        console.error(t)
                                    }), Promise.reject(t)
                                })
                            }
                        }],
                        function(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }(e.prototype, t), e
                }();

                function s(t) {
                    var e = t.targetId,
                        n = t.token,
                        r = t.type,
                        o = t.size,
                        i = t.format,
                        a = t.isCircular,
                        u = t.version;
                    return "".concat((void 0 === e ? 0 : e).toString(), ":").concat(n, ":").concat(r, ":").concat(o, ":").concat(i, ":").concat(a ? "circular" : "regular", ":").concat(void 0 === u ? 0 : u)
                }
                var f = new l(function(t) {
                    var e = t.type,
                        n = t.targetId;
                    return e === a.uS.universeThumbnail || e === a.uS.universeThumbnails ? (void 0 === n ? 0 : n).toString() : s(t)
                }, s);
                new l(function(t) {
                    return t.key
                }, function() {
                    return "customThumbnailRequester"
                })
            },
            110: function(t, e, n) {
                "use strict";
                n.d(e, {
                    $E: function() {
                        return l
                    },
                    JS: function() {
                        return c
                    },
                    rv: function() {
                        return s
                    }
                });
                var r, o = n(517);

                function i(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function a(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var u = (a(r = {}, o.uS.avatar, o.JF.Avatar), a(r, o.uS.avatarHeadshot, o.JF.AvatarHeadShot), a(r, o.uS.gameIcon, o.JF.GameIcon), a(r, o.uS.badgeIcon, o.JF.BadgeIcon), a(r, o.uS.gamePassIcon, o.JF.GamePass), a(r, o.uS.assetThumbnail, o.JF.Asset), a(r, o.uS.bundleThumbnail, o.JF.BundleThumbnail), a(r, o.uS.userOutfit, o.JF.Outfit), a(r, o.uS.groupIcon, o.JF.GroupIcon), a(r, o.uS.placeGameIcon, o.JF.PlaceIcon), a(r, o.uS.developerProductIcon, o.JF.DeveloperProduct), a(r, o.uS.gameThumbnail, o.JF.GameThumbnail), a(r, o.uS.lookThumbnail, o.JF.LookThumbnail), a(r, o.uS.screenshot, o.JF.Screenshot), r);

                function c(t) {
                    return u[t]
                }

                function l(t) {
                    if (t) {
                        var e, n, r, o, a;
                        return {
                            useCache: t.isWebappUseCacheEnabled,
                            expirationWindowMS: (r = (e = t.webappCacheExpirationTimespan.split(":"), n = function(t) {
                                if (Array.isArray(t)) return t
                            }(e) || function(t, e) {
                                var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != o) {
                                    var i = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), i.length !== e); a = !0);
                                    } catch (t) {
                                        u = !0, r = t
                                    } finally {
                                        try {
                                            a || null == o.return || o.return()
                                        } finally {
                                            if (u) throw r
                                        }
                                    }
                                    return i
                                }
                            }(e, 3) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return i(t, 3);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                                }
                            }(e, 3) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[0], o = n[1], a = n[2], void 0 === r || void 0 === o || void 0 === a ? NaN : (60 * parseInt(r, 10) * 60 + 60 * parseInt(o, 10) + parseInt(a, 10)) * 1e3)
                        }
                    }
                }

                function s(t) {
                    return !t || Math.floor(100 * Math.random()) <= t.thumbnailMetricsSampleSize
                }
            },
            480: function(t, e, n) {
                "use strict";
                t.exports = {}
            },
            192: function(t) {
                "use strict";
                t.exports = window.angular
            },
            93: function(t) {
                "use strict";
                t.exports = window.Roblox["core-scripts"].environmentUrls
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r](i, i.exports, n), i.exports
    }
    n.m = t, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, {
            a: e
        }), e
    }, n.d = function(t, e) {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.k = function(t) {
        return "" + t + ".css"
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.rv = function() {
        return "1.5.7"
    }, n.g.importScripts && (r = n.g.location + "");
    var r, o = n.g.document;
    if (!r && o && (o.currentScript && "SCRIPT" === o.currentScript.tagName.toUpperCase() && (r = o.currentScript.src), !r)) {
        var i = o.getElementsByTagName("script");
        if (i.length)
            for (var a = i.length - 1; a > -1 && (!r || !/^http(s?):/.test(r));) r = i[a--].src
    }
    if (!r) throw Error("Automatic publicPath is not supported in this browser");
    n.p = r.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.ruid = "bundler=rspack@1.5.7",
        function() {
            "use strict";
            var t, e = {};
            n.r(e), n.d(e, {
                BatchRequestError: function() {
                    return g.o0
                },
                DEFAULT_META_DATA: function() {
                    return g.x$
                },
                DefaultBatchSize: function() {
                    return g.XC
                },
                DefaultThumbnailFormat: function() {
                    return g.R2
                },
                DefaultThumbnailSize: function() {
                    return g.F5
                },
                FeatureName: function() {
                    return g.SD
                },
                LoadFailureMetricsType: function() {
                    return g.MU
                },
                LoadFailureName: function() {
                    return g.cu
                },
                LoadRetrySuccessName: function() {
                    return g.tb
                },
                LoadSuccessMetricsType: function() {
                    return g.dS
                },
                LoadSuccessName: function() {
                    return g.DS
                },
                RetryPerThumbnailType: function() {
                    return g.EX
                },
                ReturnPolicy: function() {
                    return g.TP
                },
                RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum: function() {
                    return g.JF
                },
                Thumbnail2d: function() {
                    return x
                },
                Thumbnail2dCarouselContainer: function() {
                    return k
                },
                ThumbnailAssetsSize: function() {
                    return g.Tm
                },
                ThumbnailAvatarHeadshotSize: function() {
                    return g.jZ
                },
                ThumbnailAvatarsSize: function() {
                    return g.qh
                },
                ThumbnailBadgeIconSize: function() {
                    return g.S3
                },
                ThumbnailCooldown: function() {
                    return g.Mi
                },
                ThumbnailDeveloperProductIconSize: function() {
                    return g.s2
                },
                ThumbnailFormat: function() {
                    return g.Ul
                },
                ThumbnailGameIconSize: function() {
                    return g.fP
                },
                ThumbnailGamePassIconSize: function() {
                    return g.Ou
                },
                ThumbnailGameThumbnailSize: function() {
                    return g.SH
                },
                ThumbnailGroupIconSize: function() {
                    return g.wu
                },
                ThumbnailMetadataUrl: function() {
                    return g.Pq
                },
                ThumbnailStates: function() {
                    return g.xc
                },
                ThumbnailTypes: function() {
                    return g.uS
                },
                ThumbnailUniverseThumbnailSize: function() {
                    return g.lo
                },
                thumbnailService: function() {
                    return d
                }
            });
            var r = n(192),
                o = n.n(r);

            function i(t, e) {
                if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var n = ({}).toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                }
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = function(t) {
                    t.keys().forEach(t)
                },
                c = window.ReactJSX,
                l = window.React,
                s = n(255),
                f = n.n(s),
                m = window.PropTypes,
                h = n.n(m),
                b = n(567),
                d = n(392),
                p = n(636),
                y = n(606),
                g = n(517);

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function S(t) {
                var e, n = t.onLoad,
                    r = t.errorIconClass,
                    o = t.thumbnailUrl,
                    i = t.imgClassName,
                    a = t.containerClass,
                    u = t.altName,
                    s = f()("thumbnail-2d-container", r, a),
                    m = (e = (0, l.useState)(f()(i, "loading")), function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), i.length !== e); a = !0);
                            } catch (t) {
                                u = !0, r = t
                            } finally {
                                try {
                                    a || null == o.return || o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(e, 2) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return v(t, 2);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                        }
                    }(e, 2) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    h = m[0],
                    b = m[1];
                return (0, l.useEffect)(function() {
                    null === o && b(f()(i, "loading"))
                }, [o, i]), (0, c.jsx)("span", {
                    className: s,
                    children: o && (0, c.jsx)("img", {
                        className: h,
                        src: o,
                        alt: u,
                        title: u,
                        onLoad: function() {
                            n(), b(i)
                        }
                    })
                })
            }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        var r;
                        r = n[e], e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    })
                }
                return t
            }

            function O(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            u = !0, r = t
                        } finally {
                            try {
                                a || null == o.return || o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return w(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            S.defaultProps = {
                errorIconClass: "",
                thumbnailUrl: "",
                imgClassName: "",
                containerClass: "",
                altName: "",
                onLoad: function() {}
            }, S.propTypes = {
                errorIconClass: h().string,
                thumbnailUrl: h().string,
                imgClassName: h().string,
                containerClass: h().string,
                altName: h().string,
                onLoad: h().func
            };
            var I = new p.r6(function(t) {
                return t.targetId
            }, function() {
                return "customThumbnailRequester"
            });

            function C(t) {
                var e = t.type,
                    n = t.targetId,
                    r = t.token,
                    o = t.size,
                    i = t.imgClassName,
                    a = t.containerClass,
                    u = t.format,
                    s = t.altName,
                    m = t.onLoad,
                    h = t.getThumbnail,
                    p = t.version,
                    v = O((0, l.useState)(new Date().getTime()), 1)[0],
                    w = O((0, l.useState)(null), 2),
                    C = w[0],
                    x = w[1],
                    j = O((0, l.useState)(null), 2),
                    P = j[0],
                    A = j[1],
                    k = f()(d.getCssClass(C)),
                    z = O((0, l.useState)("shimmer"), 2),
                    E = z[0],
                    R = z[1],
                    q = O((0, l.useState)(null), 2),
                    $ = q[0],
                    D = q[1],
                    M = (0, l.useMemo)(function() {
                        return new y.XY(function() {
                            return new Promise(function(t, e) {
                                h().then(function(e) {
                                    var r, o;
                                    t({
                                        data: {
                                            data: [(r = T({}, e.data), o = o = {
                                                targetId: n
                                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
                                                var n = Object.keys(t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(t);
                                                    n.push.apply(n, r)
                                                }
                                                return n
                                            })(Object(o)).forEach(function(t) {
                                                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t))
                                            }), r)]
                                        }
                                    })
                                }).catch(e)
                            })
                        }, function(t) {
                            return t.targetId
                        }, function(t) {
                            return t.key
                        }, function(t) {
                            return t.state !== g.xc.pending
                        }, function(t) {
                            return {
                                thumbnail: t
                            }
                        })
                    }, [n, h]),
                    N = (0, l.useCallback)(function() {
                        if ($) {
                            var t = new Date().getTime() - v,
                                n = $.retryAttempts;
                            (0, b.l)("ThumbnailLoadDurationWebapp", {
                                Status: "Success",
                                ThumbnailType: "".concat(e, "_2d"),
                                Value: t.toString()
                            }).catch(function(t) {
                                console.error(t)
                            }), n ? (0, b.l)("ThumbnailRetryWebapp", {
                                ThumbnailType: "".concat(e, "_2d"),
                                Value: n.toString()
                            }).catch(function(t) {
                                console.error(t)
                            }) : (0, b.l)("ThumbnailNoRetrySuccessWebapp", {
                                ThumbnailType: "".concat(e, "_2d")
                            }).catch(function(t) {
                                console.error(t)
                            })
                        }
                        m && m()
                    }, [$]);
                return (0, l.useEffect)(function() {
                    R("shimmer"), x(null), A(null);
                    var t = !1,
                        i = d.getThumbnailImage(e, o, u, n, r, p);
                    return h && (i = I.processThumbnailBatchRequest({
                            targetId: n,
                            type: e
                        }, function(t) {
                            return M.handle(t)
                        }, n)), i.then(function(e) {
                            var n = e.thumbnail,
                                r = n.state,
                                o = n.imageUrl,
                                i = e.performance;
                            !t && (x(r), A(o), R(""), i && D(T({}, i)))
                        }).catch(function(e) {
                            console.error(e), t || R("")
                        }),
                        function() {
                            t = !0
                        }
                }, [e, n, r, o, i, h, p]), (0, c.jsx)(S, {
                    thumbnailUrl: P,
                    errorIconClass: k,
                    imgClassName: i,
                    altName: s,
                    onLoad: N,
                    containerClass: f()(E, a)
                })
            }
            C.defaultProps = {
                targetId: 0,
                token: "",
                size: "150x150",
                imgClassName: "",
                containerClass: "",
                format: "webp",
                altName: "",
                onLoad: function() {},
                getThumbnail: null,
                version: ""
            }, C.propTypes = {
                type: h().string.isRequired,
                targetId: h().number,
                token: h().string,
                size: h().string,
                format: h().string,
                imgClassName: h().string,
                containerClass: h().string,
                altName: h().string,
                onLoad: h().func,
                getThumbnail: h().func,
                version: h().string
            };
            var x = C;

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function P(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(t); !(a = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                        } catch (t) {
                            u = !0, r = t
                        } finally {
                            try {
                                a || null == o.return || o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return j(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(t) {
                var e = t.type,
                    n = t.targetId,
                    r = t.size,
                    o = t.imgClassName,
                    i = t.containerClass,
                    a = t.format,
                    u = t.altName,
                    s = P((0, l.useState)(null), 2),
                    m = s[0],
                    h = s[1],
                    b = P((0, l.useState)(null), 2),
                    p = b[0],
                    y = b[1],
                    g = P((0, l.useState)(null), 2),
                    v = g[0],
                    w = g[1],
                    T = P((0, l.useState)("shimmer"), 2),
                    O = T[0],
                    I = T[1],
                    C = P((0, l.useState)(0), 2),
                    x = C[0],
                    j = C[1],
                    A = function() {
                        j(x >= m.length - 1 ? 0 : x + 1)
                    };
                return (0, l.useEffect)(function() {
                    var t;
                    if (m) {
                        var e = m[x];
                        y(e.state), w(e.imageUrl), I(""), t = setInterval(function() {
                            return A()
                        }, 4e3)
                    }
                    return function() {
                        clearInterval(t)
                    }
                }, [m, x]), (0, l.useEffect)(function() {
                    var t = !1;
                    return d.getThumbnailImage(e, r, a, n).then(function(e) {
                            t || h(e.thumbnails)
                        }).catch(function() {
                            t || I("")
                        }),
                        function() {
                            t = !0
                        }
                }, [e, n, r, o, a]), (0, c.jsx)(S, {
                    thumbnailUrl: v,
                    errorIconClass: f()(d.getCssClass(p)),
                    imgClassName: o,
                    altName: u,
                    containerClass: f()(O, i)
                })
            }
            A.defaultProps = {
                size: "576x324",
                imgClassName: "",
                containerClass: "",
                format: "webp",
                altName: ""
            }, A.propTypes = {
                type: h().string.isRequired,
                targetId: h().number.isRequired,
                size: h().string,
                format: h().string,
                imgClassName: h().string,
                containerClass: h().string,
                altName: h().string
            };
            var k = A;
            n(480), o().module("angularLazyImg", []).factory("LazyImgMagic", ["$window", "$rootScope", "lazyImgConfig", "lazyImgHelpers", function(t, e, n, r) {
                    var i, a, u, c, l, s, f, m;

                    function h() {
                        for (var t = u.length - 1; t >= 0; t--) {
                            var n = u[t];
                            n && r.isElementInView(n.$elem[0], l.offset, i) && (function(t) {
                                var n = new Image;
                                n.onerror = function() {
                                    l.errorClass && t.$elem.addClass(l.errorClass), e.$emit("lazyImg:error", t), l.onError(t)
                                }, n.onload = function() {
                                    var n, r;
                                    n = t.$elem, r = t.src, "img" === n[0].nodeName.toLowerCase() ? n[0].src = r : n.css("background-image", 'url("'.concat(r, '")')), t.$elem.removeClass(l.loadingClass), l.successClass && t.$elem.addClass(l.successClass), e.$emit("lazyImg:success", t), l.onSuccess(t)
                                }, n.src = t.src
                            }(n), u.splice(t, 1))
                        }
                        0 === u.length && p()
                    }

                    function b(t) {
                        m.forEach(function(e) {
                            e[t]("scroll", s), e[t]("touchmove", s)
                        }), a[t]("resize", s), a[t]("resize", f)
                    }

                    function d() {
                        c = !0, setTimeout(function() {
                            h(), b("on")
                        }, 1)
                    }

                    function p() {
                        c = !1, b("off")
                    }

                    function y(t) {
                        t.addClass(l.loadingClass), this.$elem = t
                    }
                    return u = [], c = !1, l = n.getOptions(), a = o().element(t), i = r.getWinDimensions(), f = r.throttle(function() {
                        i = r.getWinDimensions()
                    }, 60), m = [l.container || a], s = r.throttle(h, 30), y.prototype.setSource = function(t) {
                        this.src = t, u.unshift(this), c || d()
                    }, y.prototype.removeImage = function() {
                        var t; - 1 !== (t = u.indexOf(this)) && u.splice(t, 1), 0 === u.length && p()
                    }, y.prototype.checkImages = function() {
                        h()
                    }, y.addContainer = function(t) {
                        p(), m.push(t), d()
                    }, y.removeContainer = function(t) {
                        p(), m.splice(m.indexOf(t), 1), d()
                    }, y
                }]).provider("lazyImgConfig", function() {
                    this.options = {
                        offset: 100,
                        errorClass: null,
                        successClass: null,
                        onError: function() {},
                        onSuccess: function() {},
                        loadingClass: "icon-placeholder-game"
                    }, this.$get = function() {
                        var t = this.options;
                        return {
                            getOptions: function() {
                                return t
                            }
                        }
                    }, this.setOptions = function(t) {
                        o().extend(this.options, t)
                    }
                }).factory("lazyImgHelpers", ["$window", function(t) {
                    return {
                        isElementInView: function(t, e, n) {
                            var r = t.getBoundingClientRect(),
                                o = n.height + e;
                            return t.offsetParent && r.left >= 0 && r.right <= n.width + e && (r.top >= 0 && r.top <= o || r.bottom <= o && r.bottom >= 0 - e)
                        },
                        getWinDimensions: function() {
                            return {
                                height: t.innerHeight,
                                width: t.innerWidth
                            }
                        },
                        throttle: function(t, e, n) {
                            var r, o;
                            return function() {
                                var i = n || this,
                                    a = +new Date,
                                    u = arguments;
                                r && a < r + e ? (clearTimeout(o), o = setTimeout(function() {
                                    r = a, t.apply(i, u)
                                }, e)) : (r = a, t.apply(i, u))
                            }
                        }
                    }
                }]).directive("lazyImg", ["$rootScope", "LazyImgMagic", function(t, e) {
                    return {
                        link: function(n, r, o) {
                            var i = new e(r);
                            o.$observe("lazyImg", function(t) {
                                t && i.setSource(t)
                            }), n.$on("$destroy", function() {
                                i.removeImage()
                            }), t.$on("lazyImg.runCheck", function() {
                                i.checkImages()
                            }), t.$on("lazyImg:refresh", function() {
                                i.checkImages()
                            })
                        },
                        restrict: "A"
                    }
                }]).directive("lazyImgContainer", ["LazyImgMagic", function(t) {
                    return {
                        link: function(e, n) {
                            t.addContainer(n), e.$on("$destroy", function() {
                                t.removeContainer(n)
                            })
                        },
                        restrict: "A"
                    }
                }]), n(869),
                function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                    if ("string" == typeof t) n[t] = e;
                    else {
                        var r, o = function(t) {
                                if (Array.isArray(t)) return a(t)
                            }(t) || function(t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(t) || i(t) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            u = o.pop(),
                            c = n,
                            l = function(t, e) {
                                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(t) || (n = i(t))) {
                                        n && (t = n);
                                        var r = 0,
                                            o = function() {};
                                        return {
                                            s: o,
                                            n: function() {
                                                return r >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[r++]
                                                }
                                            },
                                            e: function(t) {
                                                throw t
                                            },
                                            f: o
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var a, u = !0,
                                    c = !1;
                                return {
                                    s: function() {
                                        n = n.call(t)
                                    },
                                    n: function() {
                                        var t = n.next();
                                        return u = t.done, t
                                    },
                                    e: function(t) {
                                        c = !0, a = t
                                    },
                                    f: function() {
                                        try {
                                            u || null == n.return || n.return()
                                        } finally {
                                            if (c) throw a
                                        }
                                    }
                                }
                            }(o);
                        try {
                            for (l.s(); !(r = l.n()).done;) {
                                var s, f = r.value;
                                null != (s = c)[f] || (s[f] = {}), c = c[f]
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        c[u] = e
                    }
                }("RobloxThumbnails", e), u(n(631)), u(n(916)), u(n(316)), u(n(281)), u(n(87));
            var z = n(892);
            t = o(), t.module("thumbnailsTemplates", []).run(["$templateCache", function(t) {
                z && z.keys().forEach(function(e) {
                    var n = e.split("/").pop().replace(".html", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    t.put(n, z(e))
                })
            }])
        }()
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails");
//# debugId=b3f29ae0-6b62-4b19-8f20-73840774e835
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/thumbnails-4b93160edec9983b.js.map