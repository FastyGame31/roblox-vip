! function() {
    "use strict";
    var a = {
            n: function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return a.d(t, {
                    a: t
                }), t
            },
            d: function(e, t) {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            nc: void 0
        },
        De = React,
        Fe = a.n(De),
        c = ReactDOM,
        l = a.n(c),
        Ue = CoreUtilities,
        e = PropTypes,
        r = a.n(e),
        n = ReactUtilities,
        N = ReactStyleGuide,
        o = {
            purchasingResources: {
                common: ["IAPExperience.PurchaseError", "Feature.NotApproved"],
                feature: "Purchasing.PurchaseDialog"
            },
            itemResources: {
                common: [],
                feature: "Feature.Item"
            },
            itemModelResources: {
                common: [],
                feature: "Feature.ItemModel"
            }
        },
        t = {
            transactionFailure: "TransactionFailureView",
            insufficientFunds: "InsufficientFundsView",
            priceChanged: "PriceChangedView",
            pendingProductsLimitExceeded: "PendingProductsLimitExceeded"
        },
        i = {
            badRequest: "Bad Request"
        },
        s = {
            startItemPurchase: "ItemPurchaseStart",
            NEW_UPSELL_FAILED_DUE_TO_ERROR: "ReactBuyButtonNewUpsellProcessFailedDueToError",
            NEW_UPSELL_FAILED_DUE_TO_LOADING: "ReactBuyButtonNewUpsellProcessFailedDueToNotLoaded",
            NEW_UPSELL_FROM_REACT_BUY_BUTTON: "ReactBuyButtonNewUpsellProcessNewUpsellFromReactBuyButton"
        },
        u = {
            Plugin: 38,
            Decal: 13,
            Model: 10,
            Video: 62,
            MeshPart: 40,
            Place: 9,
            Badge: 21,
            GamePass: 34,
            Animation: 24
        },
        d = {
            Catalog: 0,
            Library: 1
        },
        f = {
            LookId: "lookId"
        },
        m = {
            insufficientFunds: "InsufficientFunds",
            retryErrorMessage: "Failed to determine purchasability status. Please try again by refreshing.",
            notForSale: "NotForSale",
            unauthorizedMessage: "Unauthorized",
            twoStepVerificationRequired: "TwoStepVerificationRequired"
        },
        p = {
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
        v = {
            shouldShowUnifiedPurchaseModal: "shouldShowUnifiedPurchaseModal"
        },
        b = 3,
        y = 5,
        h = 5;

    function g(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return w(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var E = Ao = {
        freeLabel: "Label.Free",
        okAction: "Action.Ok",
        insufficientFundsHeading: "Heading.InsufficientFunds",
        insufficientFundsMessage: "Message.InsufficientFunds",
        doneAction: "Action.Done",
        cancelAction: "Action.Cancel",
        buyRobuxAction: "Action.BuyRobux",
        buyAccessAction: "Action.BuyAccess",
        buyItemHeading: "Heading.BuyItem",
        buyNowAction: "Action.BuyNow",
        buyExperience: "Title.BuyExperience",
        getItemHeading: "Heading.GetItem",
        getNowAction: "Action.GetNow",
        priceChangedHeading: "Heading.PriceChanged",
        priceChangedMessage: "Message.PriceChanged",
        balanceAfterMessage: "Message.BalanceAfter",
        agreeAndPayLabel: "Label.AgreeAndPay",
        promptGetFreeAccessMessage: "Message.PromptGetFreeAccess",
        promptGetFreeMessage: "Message.PromptGetFree",
        promptBuyAccessMessage: "Message.PromptBuyAccess",
        promptBuyMessage: "Message.PromptBuy",
        promptBuySimplifiedMessage: "Message.PromptBuySimplified",
        configureAction: "Action.Customize",
        notNowAction: "Action.NotNow",
        customizeAction: "Action.Customize",
        continueAction: "Action.Continue",
        purchaseCompleteHeading: "Heading.PurchaseComplete",
        successfullyBoughtAccessMessage: "Message.SuccessfullyBoughtAccess",
        successfullyBoughtMessage: "Message.SuccessfullyBought",
        successfullyRenewedAccessMessage: "Message.SuccessfullyRenewedAccess",
        successfullyRenewedMessage: "Message.SuccessfullyRenewed",
        successfullyAcquiredAccessMessage: "Message.SuccessfullyAcquiredAccess",
        successfullyAcquiredMessage: "Message.SuccessfullyAcquired",
        itemGrantDelayMessage: "Message.ItemGrantDelay",
        errorOccuredHeading: "Heading.ErrorOccured",
        purchasingUnavailableMessage: "Message.PurchasingUnavailable",
        buyAction: "Action.Buy",
        installAction: "Action.Install",
        getAction: "Action.Get",
        bestPriceLabel: "Label.BestPrice",
        priceLabel: "Label.Price",
        premiumDiscountOpportunityPromptLabel: "Label.PremiumDiscountOpportunityPrompt",
        premiumDiscountSavingsLabel: "Label.PremiumDiscountSavings",
        premiumExclusiveEligiblePromptLabel: "Label.PremiumExclusiveEligiblePrompt",
        premiumExclusiveIneligiblePromptLabel: "Label.PremiumExclusiveIneligiblePrompt",
        getPremiumAction: "Action.GetPremium",
        itemNotCurrentlyForSaleLabel: "Label.ItemNotCurrentlyForSale",
        itemNoLongerForSaleLabel: "Label.ItemNoLongerForSale",
        purchasingTemporarilyUnavailableLabel: "Label.PurchasingTemporarilyUnavailable",
        itemAvailableInventoryLabel: "Label.ItemAvailableInventory",
        noOneCurrentlySellingLabel: "Label.NoOneCurrentlySelling",
        inventoryAction: "Action.Inventory",
        OffsaleCountdownHourMinuteSecondLabel: "Label.OffsaleCountdownHourMinuteSecond",
        CountdownTimerDayHourMinute: "Label.CountdownTimerDayHourMinute",
        batchBuyItemHeading: "Heading.BuyItems",
        batchBuyPromptMessage: "Message.PromptBatchBuy",
        batchBuyBalanceAfterMessage: "Message.BalanceAfter",
        purchaseCompletedMessage: "Heading.PurchaseCompleted",
        generalPurchaseErrorMessage: "Heading.GeneralError",
        batchBuyPartialSuccessGeneralFailureMessage: "Heading.PartialSuccessGeneralFailure",
        batchBuyPartialSuccessItemsOwnedFailureMessage: "Heading.PartialSuccessItemsOwnedFailure",
        batchBuyPartialSuccessInsufficientFundsFailureMessage: "Heading.PartialSuccessInsufficientFundsFailure",
        batchBuyPartialSuccessNetworkErrorFailureMessage: "Heading.PartialSuccessNetworkErrorFailure",
        batchBuyPartialSuccessFloodcheckFailureMessage: "Heading.PartialSuccessFloodcheckFailure",
        purchaseErrorFailureMessage: "Heading.PurchaseFailure",
        batchBuyItemsOwnedFailureMessage: "Heading.ItemsOwnedFailure",
        insufficientFundsFailureMessage: "Heading.InsufficientFundsFailure",
        networkErrroFailureMessage: "Heading.NetworkErrorFailure",
        floodcheckFailureMessage: "Heading.FloodcheckFailure",
        batchBuyPartialSuccessPremiumNeededFailureMessage: "Heading.PartialSuccessPremiumNeededFailure",
        batchBuyPartialSuccessNoSellersFailureMessage: "Heading.PartialSuccessNoSellersFailure",
        premiumNeededFailureMessage: "Heading.PremiumNeededFailure",
        noSellersFailureMessage: "Heading.NoSellersFailure",
        batchBuyPartialSuccessInExperienceOnlyFailureMessage: "Heading.PartialSuccessInExperienceOnlyFailure",
        inExperienceOnlyFailureMessage: "Heading.InExperienceOnlyFailure",
        redirectToPartnerWebsiteMessage: "Description.RedirectToPartnerWebsite",
        continueToPaymentAction: "Action.ContinueToPayment",
        leavingRobloxHeading: "Heading.LeavingRoblox",
        pendingDeveloperProductLimitReachedMessage: "Message.PendingDeveloperProductLimitReached",
        pendingDeveloperProductLimitReachedHeading: "Heading.PendingDeveloperProductLimitReached",
        additionalRobuxNeeded: "Message.AdditionalRobux",
        economicRestrictionsErrorHeading: "Heading.EconomicRestrictionsError",
        timedOptionDaysAbbreviation: "Label.TimedOptionDaysAbbreviation",
        timedOptionDaysTimerStartsWhenYouBuy: "Label.TimedOptionDaysTimerStartsWhenYouBuy"
    };

    function S() {
        var e = g((0, N.createModal)(), 2),
            a = e[0],
            e = e[1];

        function t(e) {
            var t = e.translate,
                r = e.title,
                n = e.message,
                e = e.onDecline,
                n = Fe().createElement("div", {
                    className: "modal-message"
                }, n);
            return Fe().createElement(a, {
                title: r,
                body: n,
                thumbnail: Fe().createElement("span", {
                    className: "icon-warning-orange-150x150"
                }),
                neutralButtonText: t(E.okAction),
                onNeutral: e,
                actionButtonShow: !1
            })
        }
        return t.defaultProps = {
            onDecline: null
        }, t.propTypes = {
            translate: r().func.isRequired,
            title: r().string.isRequired,
            message: r().string.isRequired,
            onDecline: r().func
        }, [(0, n.withTranslations)(t, o.purchasingResources), e]
    }
    var A = ReactDOMServer,
        P = CoreRobloxUtilities,
        Le = Roblox,
        x = Le.EnvironmentUrls.economyApi,
        I = Le.EnvironmentUrls.catalogApi,
        R = Le.EnvironmentUrls.apiGatewayUrl,
        T = Le.EnvironmentUrls.twoStepVerificationApi,
        C = Le.EnvironmentUrls.vngGamesShopUrl,
        O = {
            getRobuxUpgradesUrl: function(e) {
                return Ue.urlService.getUrlWithQueries("/Upgrades/Robux.aspx", {
                    ctx: e
                })
            },
            getAvatarPageUrl: function() {
                return Ue.urlService.getAbsoluteUrl("/my/avatar")
            },
            getPurchaseItemUrl: function(e) {
                return x + "/v1/purchases/products/" + e
            },
            getItemDetailsUrl: function(e, t) {
                return I + "/v1/catalog/items/" + e + "/details?itemType=" + t
            },
            postItemDetailsUrl: function() {
                return I + "/v1/catalog/items/details"
            },
            getPurchaseableDetailUrl: function(e) {
                return x + "/v1/products/" + e + "?showPurchasable=true"
            },
            getPremiumConversionUrl: function(e, t) {
                return "/premium/membership?ctx=WebItemDetail&upsellTargetType=" + t + "&upsellTargetId=" + e
            },
            getResellerDataUrl: function(e) {
                return x + "/v1/assets/" + e + "/resellers?limit=10"
            },
            getInventoryUrl: function(e) {
                return "/users/" + e + "/inventory"
            },
            getMetaDataUrl: function() {
                return x + "/v2/metadata"
            },
            getCurrentUserBalance: function(e) {
                return x + "/v1/users/" + e + "/currency"
            },
            getPurchaseCollectibleItemUrl: function(e) {
                return R + "/marketplace-sales/v1/item/" + e + "/purchase-item"
            },
            getPurchaseCollectibleItemInstanceUrl: function(e) {
                return R + "/marketplace-sales/v1/item/" + e + "/purchase-resale"
            },
            getCollectibleItemDetailsUrl: function() {
                return R + "/marketplace-items/v1/items/details"
            },
            getTwoStepVerificationConfig: function(e) {
                return T + "/v1/users/" + e + "/configuration"
            },
            postGenerateTwoStepVerificationToken: function(e) {
                return x + "/v2/" + e + "/two-step-verification/generate"
            },
            postRedeemTwoStepVerificationChallenge: function(e) {
                return x + "/v2/" + e + "/two-step-verification/redeem"
            },
            postBulkPurchaseUrl: function() {
                return R + "/cloud/v2/avatar-marketplace-orders"
            },
            getVngShopUrl: function() {
                return R + "/vng-payments/v1/getVngShopUrl"
            },
            getVngShopFallbackUrl: function() {
                return C
            },
            getSubscriptionsMetadataUrl: function() {
                return R + "/roblox-subscriptions/v1/metadata"
            },
            postPurchaseDeveloperProductUrl: function(e) {
                return R + "/developer-products/v1/developer-products/" + e + "/purchase?requestLocationType=ExperienceDetailPage"
            },
            postPurchaseGamePassUrl: function(e) {
                return R + "/game-passes/v1/game-passes/" + e + "/purchase"
            },
            postPurchaseSubscriptionWithRobuxUrl: function(e) {
                return R + "/v1/subscriptions/purchase-with-robux/" + e
            },
            postPrepareFiatSubscriptionPurchaseUrl: function(e) {
                return R + "/v1/subscriptions/prepare-purchase/" + e + "/web"
            }
        },
        M = Ao;

    function D(e) {
        var t = e.translate,
            r = e.price,
            n = e.color,
            e = e.useFreeText;
        return 0 === r && e ? Fe().createElement("span", {
            className: "text-robux text-free"
        }, t(M.freeLabel)) : Fe().createElement(Fe().Fragment, null, Fe().createElement("span", {
            className: "icon-robux".concat(n ? "-".concat(n) : "", "-16x16")
        }), Fe().createElement("span", {
            className: "text-robux"
        }, Ue.numberFormat.getNumberFormat(r)))
    }
    D.defaultProps = {
        color: "",
        useFreeText: !0
    }, D.propTypes = {
        price: r().number.isRequired,
        translate: r().func.isRequired,
        color: r().string,
        useFreeText: r().bool
    };
    var F = (0, n.withTranslations)(D, o.purchasingResources);

    function U() {
        return (U = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r, n = arguments[t];
                for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function L(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return B(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return B(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var k = Ao;

    function j() {
        var e = L((0, N.createModal)(), 2),
            i = e[0],
            e = e[1];

        function t(e) {
            var t = e.translate,
                r = e.robuxNeeded,
                n = e.source,
                a = e.onAccept,
                e = Fe().createElement("div", {
                    className: "modal-message",
                    dangerouslySetInnerHTML: {
                        __html: t(k.insufficientFundsMessage, {
                            robux: (0, A.renderToString)(Fe().createElement(F, {
                                price: r
                            }))
                        })
                    }
                });
            return r || (e = Fe().createElement("div", null, " ", t(k.additionalRobuxNeeded))), Fe().createElement(i, U({
                title: t(k.insufficientFundsHeading),
                body: e,
                thumbnail: Fe().createElement("span", {
                    className: "money-stack-icon"
                }),
                neutralButtonText: t(k.cancelAction),
                actionButtonText: t(k.buyRobuxAction),
                onAction: function() {
                    return P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_CATALOG_ROBUX_UPSELL, !0, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.BUY_ROBUX), a ? a() : window.location = O.getRobuxUpgradesUrl(n), !1
                },
                onClose: function() {
                    P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_CATALOG_ROBUX_UPSELL, !0, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.ROBUX_UPSELL, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL)
                }
            }, {
                actionButtonShow: !0
            }))
        }
        return t.defaultProps = {
            onAccept: null,
            source: ""
        }, t.propTypes = {
            translate: r().func.isRequired,
            source: r().string,
            onAccept: r().func,
            robuxNeeded: r().number.isRequired
        }, [(0, n.withTranslations)(t, o.purchasingResources), e]
    }
    var Be = function() {
            var e = document.getElementById("ItemPurchaseAjaxData");
            return e ? {
                userRobuxBalance: parseInt(e.getAttribute("data-user-balance-robux"), 10),
                userBc: parseInt(e.getAttribute("data-user-bc"), 10),
                hasCurrencyServiceError: "True" === e.getAttribute("data-has-currency-service-error"),
                currencyServiceErrorMessage: e.getAttribute("data-currency-service-error-message")
            } : {}
        },
        _ = Ao;

    function q(e) {
        var t = e.translate,
            r = e.expectedPrice,
            e = e.currentRobuxBalance,
            r = (null != e ? e : Be().userRobuxBalance) - r;
        return e ? Fe().createElement("span", {
            dangerouslySetInnerHTML: {
                __html: t(_.balanceAfterMessage, {
                    robuxBalance: (0, A.renderToString)(Fe().createElement(F, {
                        price: r,
                        color: "gray",
                        useFreeText: !1
                    }))
                })
            }
        }) : Fe().createElement("span", null)
    }
    q.propTypes = {
        expectedPrice: r().number.isRequired,
        currentRobuxBalance: r().number,
        translate: r().func.isRequired
    }, q.defaultProps = {
        currentRobuxBalance: void 0
    };
    var H = (0, n.withTranslations)(q, o.purchasingResources);

    function V() {
        return (V = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r, n = arguments[t];
                for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function W(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return z(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return z(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var G = Ao;

    function X() {
        var e = W((0, N.createModal)(), 2),
            l = e[0],
            e = e[1];

        function t(e) {
            var t = e.translate,
                r = e.expectedPrice,
                n = e.currentPrice,
                a = e.onAction,
                i = e.loading,
                e = W((0, De.useState)(!1), 2),
                o = e[0],
                c = e[1],
                r = Fe().createElement(Fe().Fragment, null, Fe().createElement("div", {
                    className: "modal-message",
                    dangerouslySetInnerHTML: {
                        __html: t(G.priceChangedMessage, {
                            robuxBefore: (0, A.renderToString)(Fe().createElement(F, {
                                price: r,
                                color: "gray"
                            })),
                            robuxAfter: (0, A.renderToString)(Fe().createElement(F, {
                                price: n,
                                color: "gray"
                            }))
                        })
                    }
                }), Fe().createElement("div", {
                    className: "modal-checkbox checkbox"
                }, Fe().createElement("input", {
                    id: "modal-checkbox-input",
                    name: "agreementCheckBox",
                    type: "checkbox",
                    checked: o
                }), Fe().createElement("label", {
                    onClick: function() {
                        return c(!o)
                    },
                    htmlFor: "modal-checkbox-input"
                }, t(G.agreeAndPayLabel))));
            return Fe().createElement(l, V({
                title: t(G.priceChangedHeading),
                body: r,
                neutralButtonText: t(G.cancelAction),
                actionButtonText: t(G.buyRobuxAction),
                onAction: a,
                loading: i,
                disableActionButton: !o,
                footerText: Fe().createElement(H, {
                    expectedPrice: n
                })
            }, {
                actionButtonShow: !0
            }))
        }
        return t.defaultProps = {
            loading: !1
        }, t.propTypes = {
            translate: r().func.isRequired,
            expectedPrice: r().number.isRequired,
            currentPrice: r().number.isRequired,
            onAction: r().func.isRequired,
            loading: r().bool
        }, [(0, n.withTranslations)(t, o.purchasingResources), e]
    }

    function Y(e) {
        e = e.name;
        return Fe().createElement("span", {
            className: "font-bold"
        }, e)
    }
    Y.propTypes = {
        name: r().string.isRequired
    };
    var K = Y;

    function $() {
        return ($ = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r, n = arguments[t];
                for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function Q(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Z(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var J = Ao;

    function ee() {
        var e = Q((0, N.createModal)(), 2),
            v = e[0],
            e = e[1];

        function t(e) {
            var t, r = e.translate,
                n = e.title,
                a = e.expectedPrice,
                i = e.displayPrice,
                o = e.thumbnail,
                c = e.assetName,
                l = e.assetType,
                s = e.assetTypeDisplayName,
                u = e.sellerName,
                d = e.isPlace,
                f = e.onAction,
                m = e.loading,
                p = e.currentRobuxBalance,
                e = !("Subscription" !== l || !i),
                l = {
                    assetName: (0, A.renderToString)(Fe().createElement(K, {
                        name: c
                    })),
                    assetType: s || l,
                    seller: (0, Ue.escapeHtml)()(u),
                    robux: e ? '<span class="text-robux">'.concat((0, Ue.escapeHtml)()(i), "</span>") : (0, A.renderToString)(Fe().createElement(F, {
                        price: a
                    }))
                },
                u = d ? J.promptBuyAccessMessage : J.promptBuyMessage;
            d || "" !== l.seller || (u = J.promptBuySimplifiedMessage), i = e || 0 === a ? (t = r(J.getItemHeading), r(J.getNowAction)) : (t = r(J.buyItemHeading), r(J.buyNowAction)), e && (t = r(J.buyItemHeading), i = r(J.buyNowAction)), d && (i = r(J.buyAccessAction));
            l = Fe().createElement("div", {
                className: "modal-message",
                dangerouslySetInnerHTML: {
                    __html: r(u, l)
                }
            });
            return Fe().createElement(v, $({
                title: n || t,
                body: l,
                thumbnail: o,
                neutralButtonText: r(J.cancelAction),
                actionButtonText: i,
                onAction: f,
                footerText: e ? null : Fe().createElement(H, {
                    expectedPrice: a,
                    currentRobuxBalance: p
                }),
                loading: m
            }, {
                actionButtonShow: !0
            }))
        }
        return t.defaultProps = {
            isPlace: !1,
            assetTypeDisplayName: "",
            title: "",
            loading: !1,
            currentRobuxBalance: void 0,
            displayPrice: ""
        }, t.propTypes = {
            translate: r().func.isRequired,
            title: r().string,
            expectedPrice: r().number.isRequired,
            displayPrice: r().string,
            thumbnail: r().node.isRequired,
            assetName: r().string.isRequired,
            assetType: r().string.isRequired,
            assetTypeDisplayName: r().string,
            sellerName: r().string.isRequired,
            isPlace: r().bool,
            onAction: r().func.isRequired,
            loading: r().bool,
            currentRobuxBalance: r().number
        }, [(0, n.withTranslations)(t, o.purchasingResources), e]
    }(mn = pn = pn || {}).Bought = "bought", mn.Renewed = "renewed";
    var te = pn;

    function re(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ne(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ne(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ne(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var ae = O.getAvatarPageUrl,
        ie = Ao;

    function oe() {
        var e = re((0, N.createModal)(), 2),
            h = e[0],
            e = e[1];

        function t(e) {
            var t, r, n = e.translate,
                a = e.expectedPrice,
                i = e.thumbnail,
                o = e.assetName,
                c = e.assetType,
                l = e.assetIsWearable,
                s = e.assetTypeDisplayName,
                u = e.sellerName,
                d = e.isPlace,
                f = e.isPrivateServer,
                m = e.onAccept,
                p = e.onDecline,
                v = e.transactionVerb,
                b = e.itemDelayed,
                y = e.currentRobuxBalance,
                e = n(ie.continueAction);
            f ? (t = n(ie.configureAction), e = n(ie.notNowAction)) : b ? (t = n(ie.customizeAction), e = n(ie.doneAction)) : l && (t = n(ie.customizeAction), e = n(ie.notNowAction), r = function() {
                return window.location.href = ae(), !1
            });
            u = {
                assetName: (0, A.renderToString)(Fe().createElement(K, {
                    name: o
                })),
                assetType: s || c,
                seller: (0, Ue.escapeHtml)()(u),
                robux: (0, A.renderToString)(Fe().createElement(F, {
                    price: a
                }))
            }, d = v === te.Bought ? d ? ie.successfullyAcquiredAccessMessage : ie.successfullyBoughtMessage : v === te.Renewed ? d ? ie.successfullyRenewedAccessMessage : ie.successfullyRenewedMessage : d ? ie.successfullyAcquiredAccessMessage : ie.successfullyAcquiredMessage, u = Fe().createElement("div", {
                className: "modal-message",
                dangerouslySetInnerHTML: {
                    __html: "".concat(n(d, u), " ").concat(b ? n(ie.itemGrantDelayMessage) : "")
                }
            });
            return Fe().createElement(h, {
                title: n(ie.purchaseCompleteHeading),
                body: u,
                thumbnail: i,
                neutralButtonText: e,
                actionButtonText: t,
                onAction: m || r,
                onNeutral: p,
                footerText: !f && Fe().createElement(H, {
                    expectedPrice: a,
                    currentRobuxBalance: y
                }),
                actionButtonShow: !!t,
                disableActionButton: b,
                onClose: function() {
                    return window.location.reload()
                }
            })
        }
        return t.defaultProps = {
            isPlace: !1,
            assetTypeDisplayName: "",
            transactionVerb: "",
            assetIsWearable: !1,
            isPrivateServer: !1,
            onAccept: null,
            onDecline: null,
            itemDelayed: !1,
            currentRobuxBalance: void 0
        }, t.propTypes = {
            translate: r().func.isRequired,
            transactionVerb: r().string,
            expectedPrice: r().number.isRequired,
            thumbnail: r().node.isRequired,
            assetName: r().string.isRequired,
            assetType: r().string.isRequired,
            assetTypeDisplayName: r().string,
            assetIsWearable: r().bool,
            sellerName: r().string.isRequired,
            isPlace: r().bool,
            isPrivateServer: r().bool,
            onAccept: r().func,
            onDecline: r().func,
            itemDelayed: r().bool,
            currentRobuxBalance: r().number
        }, [(0, n.withTranslations)(t, o.purchasingResources), e]
    }
    var ce = O.getPurchaseItemUrl,
        le = O.getPurchaseCollectibleItemUrl,
        se = O.getPurchaseCollectibleItemInstanceUrl,
        ue = O.postBulkPurchaseUrl,
        de = O.postPurchaseDeveloperProductUrl,
        fe = O.postPurchaseGamePassUrl,
        me = O.postPurchaseSubscriptionWithRobuxUrl,
        pe = O.postPrepareFiatSubscriptionPurchaseUrl,
        ke = {
            purchaseCollectibleItem: function(e, t) {
                e = {
                    url: le(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            purchaseCollectibleItemInstance: function(e, t) {
                e = {
                    url: se(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            purchaseDeveloperProduct: function(e, t) {
                e = {
                    url: de(e),
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            purchaseGamePass: function(e, t) {
                e = {
                    url: fe(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            purchaseItem: function(e, t) {
                e = {
                    url: ce(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            purchaseSubscriptionWithRobux: function(e, t, r) {
                t = {
                    url: me(e),
                    withCredentials: !0,
                    headers: {
                        "Roblox-Place-Id": t
                    }
                };
                return Ue.httpService.post(t, r)
            },
            prepareFiatSubscriptionPurchase: function(e, t) {
                e = {
                    url: pe(e),
                    withCredentials: !0
                };
                return Ue.httpService.post(e, t)
            },
            bulkPurchaseItem: function(e, t, r, n) {
                n = {
                    url: "".concat(ue(), "?idempotencyKey.key=").concat(n),
                    retryable: !0,
                    withCredentials: !0
                }, r = {
                    purchasingUser: "users/".concat(e),
                    context: {
                        productSurface: t
                    },
                    fulfillmentGroups: [r]
                };
                return Ue.httpService.post(n, r)
            }
        };

    function ve(e, t, r, n, a, i, o) {
        try {
            var c = e[i](o),
                l = c.value
        } catch (e) {
            return void r(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(n, a)
    }
    var be = O.getItemDetailsUrl,
        ye = O.postItemDetailsUrl,
        he = O.getPurchaseableDetailUrl,
        ge = O.getResellerDataUrl,
        we = O.getMetaDataUrl,
        Ee = O.getCollectibleItemDetailsUrl,
        Se = O.getCurrentUserBalance,
        Pe = O.getSubscriptionsMetadataUrl,
        je = {
            getItemDetails: function(e, t) {
                t = {
                    url: be(e, t),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(t)
            },
            postItemDetails: function(e) {
                var t = {
                        url: ye(),
                        retryable: !0,
                        withCredentials: !0
                    },
                    e = {
                        items: e
                    };
                return Ue.httpService.post(t, e)
            },
            getItemPurchasableDetail: function(e) {
                e = {
                    url: he(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(e)
            },
            getResellerDetail: function(e) {
                e = {
                    url: ge(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(e)
            },
            getEconomyMetadata: function() {
                var e = {
                    url: we(),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(e)
            },
            getCollectibleItemDetails: function(n) {
                return c = regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        url: Ee(),
                                        retryable: !0,
                                        withCredentials: !0
                                    }, r = {
                                        itemIds: [n]
                                    }, e.next = 4, Ue.httpService.post(t, r);
                                case 4:
                                    return r = e.sent, e.abrupt("return", (null === (r = r.data) || void 0 === r ? void 0 : r[0]) || null);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }),
                    function() {
                        var e = this,
                            o = arguments;
                        return new Promise(function(t, r) {
                            var n = c.apply(e, o);

                            function a(e) {
                                ve(n, t, r, a, i, "next", e)
                            }

                            function i(e) {
                                ve(n, t, r, a, i, "throw", e)
                            }
                            a(void 0)
                        })
                    }();
                var c
            },
            getCurrentUserBalance: function(e) {
                e = {
                    url: Se(e),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(e)
            },
            getSubscriptionsMetadata: function() {
                var e = {
                    url: Pe(),
                    retryable: !0,
                    withCredentials: !0
                };
                return Ue.httpService.get(e)
            }
        },
        xe = function(e, o, c, l) {
            return new(c = c || Promise)(function(r, t) {
                function n(e) {
                    try {
                        i(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(e) {
                    try {
                        i(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                        e(t)
                    })).then(n, a)
                }
                i((l = l.apply(e, o || [])).next())
            })
        },
        Ie = function(r, n) {
            var a, i, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                        if (a) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        c.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && c.label < o[1]) {
                                        c.label = o[1], o = t;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(t);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            t = n.call(r, c)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            a = o = 0
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
        Ae = O.getTwoStepVerificationConfig,
        Re = O.postGenerateTwoStepVerificationToken,
        Te = O.postRedeemTwoStepVerificationChallenge,
        Ne = function() {
            return xe(void 0, void 0, Promise, function() {
                var t;
                return Ie(this, function(e) {
                    switch (e.label) {
                        case 0:
                            t = {
                                url: Re("spend-friction"),
                                retryable: !0,
                                withCredentials: !0
                            }, e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Ue.httpService.post(t)];
                        case 2:
                            return [2, e.sent().data || null];
                        case 3:
                            return e.sent(), [2, null];
                        case 4:
                            return [2]
                    }
                })
            })
        },
        Ce = function(n, a) {
            return xe(void 0, void 0, Promise, function() {
                var t, r;
                return Ie(this, function(e) {
                    switch (e.label) {
                        case 0:
                            t = {
                                url: Te("spend-friction"),
                                retryable: !0,
                                withCredentials: !0
                            }, r = {
                                challengeToken: n,
                                verificationToken: a
                            }, e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Ue.httpService.post(t, r)];
                        case 2:
                            return r = e.sent(), [2, null !== (r = r.data) && void 0 !== r && r];
                        case 3:
                            return e.sent(), [2, !1];
                        case 4:
                            return [2]
                    }
                })
            })
        },
        Oe = function(e, o, c, l) {
            return new(c = c || Promise)(function(r, t) {
                function n(e) {
                    try {
                        i(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(e) {
                    try {
                        i(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                        e(t)
                    })).then(n, a)
                }
                i((l = l.apply(e, o || [])).next())
            })
        },
        Me = function(r, n) {
            var a, i, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                        if (a) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        c.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && c.label < o[1]) {
                                        c.label = o[1], o = t;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(t);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            t = n.call(r, c)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            a = o = 0
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
        _e = Le.AccountIntegrityChallengeService.TwoStepVerification;

    function qe(e) {
        var t = e.systemFeedbackService,
            e = e.translate;
        t.warning(e("Response.VerificationError"))
    }

    function He(e) {
        var o = e.stopTwoStepVerification,
            c = e.systemFeedbackService,
            r = e.totalAttempts,
            l = e.translate;
        return Oe(this, void 0, void 0, function() {
            var i, t = this;
            return Me(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Ne()];
                    case 1:
                        return (i = e.sent()) ? Le.AccountIntegrityChallengeService.TwoStepVerification.renderChallenge({
                            containerId: "two-sv-popup-entry",
                            userId: Le.CurrentUser.userId,
                            challengeId: i,
                            actionType: _e.ActionType.RobuxSpend,
                            renderInline: !1,
                            shouldShowRememberDeviceCheckbox: !1,
                            onChallengeCompleted: function(a) {
                                return Oe(t, void 0, void 0, function() {
                                    var n;
                                    return Me(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, Ce(i, a.verificationToken)];
                                            case 1:
                                                return n = e.sent(), o(), n ? (r = (t = {
                                                    systemFeedbackService: c,
                                                    translate: l
                                                }).systemFeedbackService, t = t.translate, r.success(t("Response.SuccessfulVerificationV2"))) : qe({
                                                    systemFeedbackService: c,
                                                    translate: l
                                                }), [2]
                                        }
                                        var t, r
                                    })
                                })
                            },
                            onChallengeInvalidated: function() {
                                var e = r || 0;
                                e < 3 ? He({
                                    stopTwoStepVerification: o,
                                    systemFeedbackService: c,
                                    translate: l,
                                    totalAttempts: e + 1
                                }) : (qe({
                                    systemFeedbackService: c,
                                    translate: l
                                }), o())
                            },
                            onModalChallengeAbandoned: function() {}
                        }) : qe({
                            systemFeedbackService: c,
                            translate: l
                        }), [2]
                }
            })
        })
    }
    var Ve = (0, n.withTranslations)(function(e) {
            var t = this,
                r = e.translate,
                n = e.isTwoStepVerificationActive,
                a = e.stopTwoStepVerification,
                i = e.systemFeedbackService;
            return (0, De.useEffect)(function() {
                n && Oe(t, void 0, void 0, function() {
                    return Me(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, xe(void 0, void 0, Promise, function() {
                                    var t;
                                    return Ie(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                t = {
                                                    url: Ae(Le.CurrentUser.userId),
                                                    retryable: !0,
                                                    withCredentials: !0
                                                }, e.label = 1;
                                            case 1:
                                                return e.trys.push([1, 3, , 4]), [4, Ue.httpService.get(t)];
                                            case 2:
                                                return t = e.sent(), [2, ((null === (t = null == t ? void 0 : t.data) || void 0 === t ? void 0 : t.methods) || []).some(function(e) {
                                                    return !!e.enabled
                                                })];
                                            case 3:
                                                return e.sent(), [2, !1];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })];
                            case 1:
                                return e.sent() ? He({
                                    stopTwoStepVerification: a,
                                    systemFeedbackService: i,
                                    translate: r
                                }) : (t = {
                                    titleText: (t = (t = {
                                        translate: r
                                    }).translate)("Heading.TwoStepVerificationRequiredV3"),
                                    bodyContent: t("Message.TwoStepVerificationRequiredV4"),
                                    imageUrl: void 0,
                                    acceptText: t("Action.GoToSecurity"),
                                    acceptColor: "btn-primary-md",
                                    onAccept: function() {
                                        window.location.href = Le.Endpoints.getAbsoluteUrl("/my/account#!/security")
                                    },
                                    declineText: t("Action.Cancel"),
                                    dismissable: !0,
                                    allowHtmlContentInBody: !0,
                                    onOpenCallback: function() {}
                                }, Le.Dialog.open(t)), [2]
                        }
                        var t
                    })
                })
            }, [n]), Fe().createElement("div", {
                id: "two-sv-popup-entry"
            })
        }, o.purchasingResources),
        We = function() {
            return (We = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        };

    function ze(e, t) {
        var r = {};
        for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
        return r
    }
    var Ge = function() {
            for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = function e(t) {
                var r, n = "";
                if ("string" == typeof t || "number" == typeof t) n += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t))
                        for (var a = t.length, i = 0; i < a; i++) t[i] && (r = e(t[i])) && (n && (n += " "), n += r);
                    else
                        for (r in t) t[r] && (n && (n += " "), n += r);
                return n
            }(e)) && (n && (n += " "), n += t);
            return n
        },
        Xe = ReactJSX;

    function Ye(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ke(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ke(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ke(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var $e = null !== globalThis && void 0 !== globalThis && globalThis.document ? De.useLayoutEffect : function() {},
        Qe = De[" useId ".trim().toString()] || function() {},
        Ze = 0;

    function Je(e) {
        var t = Ye(De.useState(Qe()), 2),
            r = t[0],
            n = t[1];
        return $e(function() {
            e || n(function(e) {
                return null != e ? e : String(Ze++)
            })
        }, [e]), e || (r ? "radix-".concat(r) : "")
    }

    function et(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = nt(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    t = function() {};
                return {
                    s: t,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: t
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0,
            o = !1;
        return {
            s: function() {
                r = e[Symbol.iterator]()
            },
            n: function() {
                var e = r.next();
                return i = e.done, e
            },
            e: function(e) {
                o = !0, a = e
            },
            f: function() {
                try {
                    i || null == r.return || r.return()
                } finally {
                    if (o) throw a
                }
            }
        }
    }

    function tt(e) {
        return function(e) {
            if (Array.isArray(e)) return at(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || nt(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function rt(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || nt(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function nt(e, t) {
        if (e) {
            if ("string" == typeof e) return at(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? at(e, t) : void 0
        }
    }

    function at(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function it(t, e) {
        var r, n = Object.keys(t);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, r)), n
    }

    function ot(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? it(Object(r), !0).forEach(function(e) {
                ct(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : it(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function ct(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function lt(e, t) {
        if (null == e) return {};
        var r, n = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) r = i[n], 0 <= t.indexOf(r) || (a[r] = e[r]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols)
            for (var a = Object.getOwnPropertySymbols(e), i = 0; i < a.length; i++) r = a[i], 0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
    }

    function st(t, r, e) {
        var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
            n = void 0 === e || e;
        return function(e) {
            if (null != t && t(e), !1 === n || !e.defaultPrevented) return null == r ? void 0 : r(e)
        }
    }

    function ut(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function dt() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        return function(t) {
            var r = !1,
                n = a.map(function(e) {
                    e = ut(e, t);
                    return r || "function" != typeof e || (r = !0), e
                });
            if (r) return function() {
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    "function" == typeof t ? t() : ut(a[e], null)
                }
            }
        }
    }

    function ft() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return De.useCallback(dt.apply(void 0, t), t)
    }

    function mt(e) {
        var t = De.forwardRef(function(e, t) {
            var r, n = e.children,
                a = lt(e, ["children"]);
            if (De.isValidElement(n)) {
                var i = (i = n, e = null === (r = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (r = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
                    a = function(n, a) {
                        var e, i = ot({}, a);
                        for (e in a) ! function(e) {
                            var t = n[e],
                                r = a[e];
                            /^on[A-Z]/.test(e) ? t && r ? i[e] = function() {
                                r.apply(void 0, arguments), t.apply(void 0, arguments)
                            } : t && (i[e] = t) : "style" === e ? i[e] = ot(ot({}, t), r) : "className" === e && (i[e] = [t, r].filter(Boolean).join(" "))
                        }(e);
                        return ot(ot({}, n), i)
                    }(a, n.props);
                return n.type !== De.Fragment && (a.ref = t ? dt(t, i) : i), De.cloneElement(n, a)
            }
            return 1 < De.Children.count(n) ? De.Children.only(null) : null
        });
        return t.displayName = "".concat(e, ".SlotClone"), t
    }
    var pt = Symbol("radix.slottable");

    function vt(e) {
        return De.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === pt
    }
    var bt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, n) {
        var t, o, r, a = (t = "Primitive.".concat(n), o = mt(t), (r = De.forwardRef(function(e, t) {
                var r = e.children,
                    n = lt(e, ["children"]),
                    e = De.Children.toArray(r),
                    a = e.find(vt);
                if (a) {
                    var i = a.props.children,
                        e = e.map(function(e) {
                            return e === a ? 1 < De.Children.count(i) ? De.Children.only(null) : De.isValidElement(i) ? i.props.children : null : e
                        });
                    return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                        ref: t,
                        children: De.isValidElement(i) ? De.cloneElement(i, void 0, e) : null
                    }))
                }
                return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                    ref: t,
                    children: r
                }))
            })).displayName = "".concat(t, ".Slot"), r),
            r = De.forwardRef(function(e, t) {
                var r = e.asChild,
                    e = lt(e, ["asChild"]),
                    r = r ? a : n;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Xe.jsx)(r, ot(ot({}, e), {}, {
                    ref: t
                }))
            });
        return r.displayName = "Primitive.".concat(n), ot(ot({}, e), {}, ct({}, n, r))
    }, {});

    function yt(e) {
        var a = De.useRef(e);
        return De.useEffect(function() {
            a.current = e
        }), De.useMemo(function() {
            return function() {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(r))
            }
        }, [])
    }

    function ht(e, t) {
        var r, a, n = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
            i = (r = e, a = De.useRef(r), De.useEffect(function() {
                a.current = r
            }), De.useMemo(function() {
                return function() {
                    for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(r))
                }
            }, []));
        De.useEffect(function() {
            function e(e) {
                "Escape" === e.key && i(e)
            }
            return n.addEventListener("keydown", e, {
                    capture: !0
                }),
                function() {
                    return n.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
        }, [i, n])
    }
    var gt, wt = "dismissableLayer.update",
        Et = De.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }),
        St = De.forwardRef(function(e, t) {
            var r = e.disableOutsidePointerEvents,
                n = void 0 !== r && r,
                a = e.onEscapeKeyDown,
                i = e.onPointerDownOutside,
                o = e.onFocusOutside,
                c = e.onInteractOutside,
                l = e.onDismiss,
                s = lt(e, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]),
                u = De.useContext(Et),
                d = rt(De.useState(null), 2),
                f = d[0],
                m = d[1],
                p = null !== (b = null == f ? void 0 : f.ownerDocument) && void 0 !== b ? b : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
                v = rt(De.useState({}), 2)[1],
                r = ft(t, function(e) {
                    return m(e)
                }),
                d = Array.from(u.layers),
                b = rt(tt(u.layersWithOutsidePointerEventsDisabled).slice(-1), 1)[0],
                t = d.indexOf(b),
                y = f ? d.indexOf(f) : -1,
                b = 0 < u.layersWithOutsidePointerEventsDisabled.size,
                h = t <= y,
                d = function(e, t) {
                    var n = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
                        a = yt(function(e) {
                            var t = e.target,
                                r = tt(u.branches).some(function(e) {
                                    return e.contains(t)
                                });
                            h && !r && (i !== null && i !== void 0 && i(e), c !== null && c !== void 0 && c(e), e.defaultPrevented || (l === null || l === void 0 ? void 0 : l()))
                        }),
                        i = De.useRef(!1),
                        o = De.useRef(function() {});
                    return De.useEffect(function() {
                        function e(e) {
                            var t, r;
                            e.target && !i.current ? (t = function() {
                                xt("dismissableLayer.pointerDownOutside", a, r, {
                                    discrete: !0
                                })
                            }, r = {
                                originalEvent: e
                            }, "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = t, n.addEventListener("click", o.current, {
                                once: !0
                            })) : t()) : n.removeEventListener("click", o.current), i.current = !1
                        }
                        var t = window.setTimeout(function() {
                            n.addEventListener("pointerdown", e)
                        }, 0);
                        return function() {
                            window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
                        }
                    }, [n, a]), {
                        onPointerDownCapture: function() {
                            return i.current = !0
                        }
                    }
                }(function(e) {
                    var t = e.target,
                        r = tt(u.branches).some(function(e) {
                            return e.contains(t)
                        });
                    h && !r && (i !== null && i !== void 0 && i(e), c !== null && c !== void 0 && c(e), e.defaultPrevented || (l === null || l === void 0 ? void 0 : l()))
                }, p),
                t = function(e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : null === globalThis || void 0 === globalThis ? void 0 : globalThis.document,
                        n = yt(function(e) {
                            var t = e.target;
                            tt(u.branches).some(function(e) {
                                return e.contains(t)
                            }) || (o !== null && o !== void 0 && o(e), c !== null && c !== void 0 && c(e), e.defaultPrevented || (l === null || l === void 0 ? void 0 : l()))
                        }),
                        a = De.useRef(!1);
                    return De.useEffect(function() {
                        function e(e) {
                            e.target && !a.current && xt("dismissableLayer.focusOutside", n, {
                                originalEvent: e
                            }, {
                                discrete: !1
                            })
                        }
                        return r.addEventListener("focusin", e),
                            function() {
                                return r.removeEventListener("focusin", e)
                            }
                    }, [r, n]), {
                        onFocusCapture: function() {
                            return a.current = !0
                        },
                        onBlurCapture: function() {
                            return a.current = !1
                        }
                    }
                }(function(e) {
                    var t = e.target;
                    tt(u.branches).some(function(e) {
                        return e.contains(t)
                    }) || (o !== null && o !== void 0 && o(e), c !== null && c !== void 0 && c(e), e.defaultPrevented || (l === null || l === void 0 ? void 0 : l()))
                }, p);
            return ht(function(e) {
                y === u.layers.size - 1 && (null != a && a(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
            }, p), De.useEffect(function() {
                if (f) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (gt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Pt(),
                    function() {
                        n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = gt)
                    }
            }, [f, p, n, u]), De.useEffect(function() {
                return function() {
                    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Pt())
                }
            }, [f, u]), De.useEffect(function() {
                function e() {
                    return v({})
                }
                return document.addEventListener(wt, e),
                    function() {
                        return document.removeEventListener(wt, e)
                    }
            }, []), (0, Xe.jsx)(bt.div, ot(ot({}, s), {}, {
                ref: r,
                style: ot({
                    pointerEvents: b ? h ? "auto" : "none" : void 0
                }, e.style),
                onFocusCapture: st(e.onFocusCapture, t.onFocusCapture),
                onBlurCapture: st(e.onBlurCapture, t.onBlurCapture),
                onPointerDownCapture: st(e.onPointerDownCapture, d.onPointerDownCapture)
            }))
        });

    function Pt() {
        var e = new CustomEvent(wt);
        document.dispatchEvent(e)
    }

    function xt(e, t, r, n) {
        var a, i, o = n.discrete,
            n = r.originalEvent.target,
            r = new CustomEvent(e, {
                bubbles: !1,
                cancelable: !0,
                detail: r
            });
        t && n.addEventListener(e, t, {
            once: !0
        }), o ? (i = r, (a = n) && c.flushSync(function() {
            return a.dispatchEvent(i)
        })) : n.dispatchEvent(r)
    }

    function It(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function At() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        return function(t) {
            var r = !1,
                n = a.map(function(e) {
                    e = It(e, t);
                    return r || "function" != typeof e || (r = !0), e
                });
            if (r) return function() {
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    "function" == typeof t ? t() : It(a[e], null)
                }
            }
        }
    }

    function Rt(e) {
        var t = De.forwardRef(function(e, t) {
            var r, n = e.children,
                a = lt(e, ["children"]);
            if (De.isValidElement(n)) {
                var i = (i = n, e = null === (r = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (r = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
                    a = function(n, a) {
                        var e, i = ot({}, a);
                        for (e in a) ! function(e) {
                            var t = n[e],
                                r = a[e];
                            /^on[A-Z]/.test(e) ? t && r ? i[e] = function() {
                                r.apply(void 0, arguments), t.apply(void 0, arguments)
                            } : t && (i[e] = t) : "style" === e ? i[e] = ot(ot({}, t), r) : "className" === e && (i[e] = [t, r].filter(Boolean).join(" "))
                        }(e);
                        return ot(ot({}, n), i)
                    }(a, n.props);
                return n.type !== De.Fragment && (a.ref = t ? At(t, i) : i), De.cloneElement(n, a)
            }
            return 1 < De.Children.count(n) ? De.Children.only(null) : null
        });
        return t.displayName = "".concat(e, ".SlotClone"), t
    }
    St.displayName = "DismissableLayer", De.forwardRef(function(e, t) {
        var r = De.useContext(Et),
            n = De.useRef(null),
            t = ft(t, n);
        return De.useEffect(function() {
            var e = n.current;
            if (e) return r.branches.add(e),
                function() {
                    r.branches.delete(e)
                }
        }, [r.branches]), (0, Xe.jsx)(bt.div, ot(ot({}, e), {}, {
            ref: t
        }))
    }).displayName = "DismissableLayerBranch";
    var Tt = Symbol("radix.slottable");

    function Nt(e) {
        return De.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Tt
    }
    var Ct = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, n) {
        var t, o, r, a = (t = "Primitive.".concat(n), o = Rt(t), (r = De.forwardRef(function(e, t) {
                var r = e.children,
                    n = lt(e, ["children"]),
                    e = De.Children.toArray(r),
                    a = e.find(Nt);
                if (a) {
                    var i = a.props.children,
                        e = e.map(function(e) {
                            return e === a ? 1 < De.Children.count(i) ? De.Children.only(null) : De.isValidElement(i) ? i.props.children : null : e
                        });
                    return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                        ref: t,
                        children: De.isValidElement(i) ? De.cloneElement(i, void 0, e) : null
                    }))
                }
                return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                    ref: t,
                    children: r
                }))
            })).displayName = "".concat(t, ".Slot"), r),
            r = De.forwardRef(function(e, t) {
                var r = e.asChild,
                    e = lt(e, ["asChild"]),
                    r = r ? a : n;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Xe.jsx)(r, ot(ot({}, e), {}, {
                    ref: t
                }))
            });
        return r.displayName = "Primitive.".concat(n), ot(ot({}, e), {}, ct({}, n, r))
    }, {});

    function Ot(e) {
        var a = De.useRef(e);
        return De.useEffect(function() {
            a.current = e
        }), De.useMemo(function() {
            return function() {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(r))
            }
        }, [])
    }
    var Mt = "focusScope.autoFocusOnMount",
        Dt = "focusScope.autoFocusOnUnmount",
        Ft = {
            bubbles: !1,
            cancelable: !0
        },
        Ut = De.forwardRef(function(e, t) {
            var r = e.loop,
                i = void 0 !== r && r,
                n = e.trapped,
                o = void 0 !== n && n,
                a = e.onMountAutoFocus,
                r = e.onUnmountAutoFocus,
                n = lt(e, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]),
                e = rt(De.useState(null), 2),
                c = e[0],
                l = e[1],
                s = Ot(a),
                u = Ot(r),
                d = De.useRef(null),
                r = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return De.useCallback(At.apply(void 0, t), t)
                }(t, function(e) {
                    return l(e)
                }),
                f = De.useRef({
                    paused: !1,
                    pause: function() {
                        this.paused = !0
                    },
                    resume: function() {
                        this.paused = !1
                    }
                }).current;
            De.useEffect(function() {
                if (o) {
                    var e = function(e) {
                            !f.paused && c && (e = e.target, c.contains(e) ? d.current = e : kt(d.current, {
                                select: !0
                            }))
                        },
                        t = function(e) {
                            f.paused || !c || null !== (e = e.relatedTarget) && (c.contains(e) || kt(d.current, {
                                select: !0
                            }))
                        };
                    document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                    var r = new MutationObserver(function(e) {
                        if (document.activeElement === document.body) {
                            var t, r = et(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) 0 < t.value.removedNodes.length && kt(c)
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }
                    });
                    return c && r.observe(c, {
                            childList: !0,
                            subtree: !0
                        }),
                        function() {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
                        }
                }
            }, [o, c, f.paused]), De.useEffect(function() {
                if (c) {
                    _t.add(f);
                    var e, t = document.activeElement;
                    return c.contains(t) || (e = new CustomEvent(Mt, Ft), c.addEventListener(Mt, s), c.dispatchEvent(e), e.defaultPrevented || (function(e, t) {
                            var r, n = void 0 !== (t = (1 < arguments.length && void 0 !== t ? t : {}).select) && t,
                                a = document.activeElement,
                                i = et(e);
                            try {
                                for (i.s(); !(r = i.n()).done;)
                                    if (kt(r.value, {
                                            select: n
                                        }), document.activeElement !== a) return
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }(Lt(c).filter(function(e) {
                            return "A" !== e.tagName
                        }), {
                            select: !0
                        }), document.activeElement === t && kt(c))),
                        function() {
                            c.removeEventListener(Mt, s), setTimeout(function() {
                                var e = new CustomEvent(Dt, Ft);
                                c.addEventListener(Dt, u), c.dispatchEvent(e), e.defaultPrevented || kt(null != t ? t : document.body, {
                                    select: !0
                                }), c.removeEventListener(Dt, u), _t.remove(f)
                            }, 0)
                        }
                }
            }, [c, s, u, f]);
            t = De.useCallback(function(e) {
                var t, r, n, a;
                (i || o) && (f.paused || (a = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey, t = document.activeElement, a && t && (r = e.currentTarget, n = (a = rt([Bt(a = Lt(n = r), n), Bt(a.reverse(), n)], 2))[0], a = a[1], n && a ? e.shiftKey || t !== a ? e.shiftKey && t === n && (e.preventDefault(), i && kt(a, {
                    select: !0
                })) : (e.preventDefault(), i && kt(n, {
                    select: !0
                })) : t === r && e.preventDefault())))
            }, [i, o, f.paused]);
            return (0, Xe.jsx)(Ct.div, ot(ot({
                tabIndex: -1
            }, n), {}, {
                ref: r,
                onKeyDown: t
            }))
        });

    function Lt(e) {
        for (var t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function(e) {
                    var t = "INPUT" === e.tagName && "hidden" === e.type;
                    return !(e.disabled || e.hidden || t) && 0 <= e.tabIndex ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            }); r.nextNode();) t.push(r.currentNode);
        return t
    }

    function Bt(e, t) {
        var r = et(e);
        try {
            for (r.s(); !(n = r.n()).done;) {
                var n = n.value;
                if (! function(e, t) {
                        var r = t.upTo;
                        if ("hidden" === getComputedStyle(e).visibility) return !0;
                        for (; e;) {
                            if (void 0 !== r && e === r) return !1;
                            if ("none" === getComputedStyle(e).display) return !0;
                            e = e.parentElement
                        }
                        return !1
                    }(n, {
                        upTo: t
                    })) return n
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
    }

    function kt(e, t) {
        var r = (1 < arguments.length && void 0 !== t ? t : {}).select,
            t = void 0 !== r && r;
        e && e.focus && (r = document.activeElement, e.focus({
            preventScroll: !0
        }), e !== r && e instanceof HTMLInputElement && "select" in e && t && e.select())
    }
    Ut.displayName = "FocusScope";
    var jt, _t = (jt = [], {
        add: function(e) {
            var t = jt[0];
            e !== t && null != t && t.pause(), (jt = qt(jt, e)).unshift(e)
        },
        remove: function(e) {
            null !== (e = (jt = qt(jt, e))[0]) && void 0 !== e && e.resume()
        }
    });

    function qt(e, t) {
        e = tt(e), t = e.indexOf(t);
        return -1 !== t && e.splice(t, 1), e
    }

    function Ht(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function Vt(e) {
        var t = De.forwardRef(function(e, t) {
            var r, n = e.children,
                a = lt(e, ["children"]);
            if (De.isValidElement(n)) {
                var i = (i = n, e = null === (r = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (r = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
                    a = function(n, a) {
                        var e, i = ot({}, a);
                        for (e in a) ! function(e) {
                            var t = n[e],
                                r = a[e];
                            /^on[A-Z]/.test(e) ? t && r ? i[e] = function() {
                                r.apply(void 0, arguments), t.apply(void 0, arguments)
                            } : t && (i[e] = t) : "style" === e ? i[e] = ot(ot({}, t), r) : "className" === e && (i[e] = [t, r].filter(Boolean).join(" "))
                        }(e);
                        return ot(ot({}, n), i)
                    }(a, n.props);
                return n.type !== De.Fragment && (a.ref = t ? function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return function(t) {
                        var r = !1,
                            n = a.map(function(e) {
                                e = Ht(e, t);
                                return r || "function" != typeof e || (r = !0), e
                            });
                        if (r) return function() {
                            for (var e = 0; e < n.length; e++) {
                                var t = n[e];
                                "function" == typeof t ? t() : Ht(a[e], null)
                            }
                        }
                    }
                }(t, i) : i), De.cloneElement(n, a)
            }
            return 1 < De.Children.count(n) ? De.Children.only(null) : null
        });
        return t.displayName = "".concat(e, ".SlotClone"), t
    }
    var Wt = Symbol("radix.slottable");

    function zt(e) {
        return De.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Wt
    }
    var Gt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, n) {
            var t, o, r, a = (t = "Primitive.".concat(n), o = Vt(t), (r = De.forwardRef(function(e, t) {
                    var r = e.children,
                        n = lt(e, ["children"]),
                        e = De.Children.toArray(r),
                        a = e.find(zt);
                    if (a) {
                        var i = a.props.children,
                            e = e.map(function(e) {
                                return e === a ? 1 < De.Children.count(i) ? De.Children.only(null) : De.isValidElement(i) ? i.props.children : null : e
                            });
                        return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                            ref: t,
                            children: De.isValidElement(i) ? De.cloneElement(i, void 0, e) : null
                        }))
                    }
                    return (0, Xe.jsx)(o, ot(ot({}, n), {}, {
                        ref: t,
                        children: r
                    }))
                })).displayName = "".concat(t, ".Slot"), r),
                r = De.forwardRef(function(e, t) {
                    var r = e.asChild,
                        e = lt(e, ["asChild"]),
                        r = r ? a : n;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Xe.jsx)(r, ot(ot({}, e), {}, {
                        ref: t
                    }))
                });
            return r.displayName = "Primitive.".concat(n), ot(ot({}, e), {}, ct({}, n, r))
        }, {}),
        Xt = null !== globalThis && void 0 !== globalThis && globalThis.document ? De.useLayoutEffect : function() {},
        Yt = De.forwardRef(function(e, t) {
            var r = e.container,
                n = lt(e, ["container"]),
                a = rt(De.useState(!1), 2),
                e = a[0],
                i = a[1];
            Xt(function() {
                return i(!0)
            }, []);
            var o = r || e && (null === globalThis || void 0 === globalThis || null === (o = globalThis.document) || void 0 === o ? void 0 : o.body);
            return o ? l().createPortal((0, Xe.jsx)(Gt.div, ot(ot({}, n), {}, {
                ref: t
            })), o) : null
        });
    Yt.displayName = "Portal";
    var Kt = 0;

    function $t() {
        var e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
    }
    var Qt = "right-scroll-bar-position",
        Zt = "width-before-scroll-bar";

    function Jt(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
    }
    var er = "undefined" != typeof window ? De.useLayoutEffect : De.useEffect,
        tr = new WeakMap;

    function rr(e) {
        return e
    }
    var nr = function(e) {
        var t = e.sideCar,
            e = ze(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        t = t.read();
        if (!t) throw new Error("Sidecar medium not found");
        return De.createElement(t, We({}, e))
    };

    function ar() {}
    nr.isSideCarExport = !0;
    var ir = function(e) {
            void 0 === e && (e = {});
            var t = function(e, r) {
                void 0 === r && (r = rr);
                var i = [],
                    o = !1;
                return {
                    read: function() {
                        if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return i.length ? i[i.length - 1] : e
                    },
                    useMedium: function(e) {
                        var t = r(e, o);
                        return i.push(t),
                            function() {
                                i = i.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(t) {
                        for (o = !0; i.length;) {
                            var e = i;
                            i = [], e.forEach(t)
                        }
                        i = {
                            push: function(e) {
                                return t(e)
                            },
                            filter: function() {
                                return i
                            }
                        }
                    },
                    assignMedium: function(t) {
                        o = !0;
                        var e, r = [];
                        i.length && (e = i, i = [], e.forEach(t), r = i);

                        function n() {
                            var e = r;
                            r = [], e.forEach(t)
                        }

                        function a() {
                            return Promise.resolve().then(n)
                        }
                        a(), i = {
                            push: function(e) {
                                r.push(e), a()
                            },
                            filter: function(e) {
                                return r = r.filter(e), i
                            }
                        }
                    }
                }
            }(null);
            return t.options = We({
                async: !0,
                ssr: !1
            }, e), t
        }(),
        or = De.forwardRef(function(e, t) {
            var a, r, n, i, o, c, l = De.useRef(null),
                s = De.useState({
                    onScrollCapture: ar,
                    onWheelCapture: ar,
                    onTouchMoveCapture: ar
                }),
                u = s[0],
                d = s[1],
                f = e.forwardProps,
                m = e.children,
                p = e.className,
                v = e.removeScrollBar,
                b = e.enabled,
                y = e.shards,
                h = e.sideCar,
                g = e.noIsolation,
                w = e.inert,
                E = e.allowPinchZoom,
                S = e.as,
                s = void 0 === S ? "div" : S,
                S = e.gapMode,
                e = ze(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                h = h,
                r = (a = [l, t], n = r || null, i = function(t) {
                    return a.forEach(function(e) {
                        return Jt(e, t)
                    })
                }, (o = (0, De.useState)(function() {
                    return {
                        value: n,
                        callback: i,
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
                })[0]).callback = i, c = o.facade, er(function() {
                    var t, r, n, e = tr.get(c);
                    e && (t = new Set(e), r = new Set(a), n = c.current, t.forEach(function(e) {
                        r.has(e) || Jt(e, null)
                    }), r.forEach(function(e) {
                        t.has(e) || Jt(e, n)
                    })), tr.set(c, a)
                }, [a]), c),
                u = We(We({}, e), u);
            return De.createElement(De.Fragment, null, b && De.createElement(h, {
                sideCar: ir,
                removeScrollBar: v,
                shards: y,
                noIsolation: g,
                inert: w,
                setCallbacks: d,
                allowPinchZoom: !!E,
                lockRef: l,
                gapMode: S
            }), f ? De.cloneElement(De.Children.only(m), We(We({}, u), {
                ref: r
            })) : De.createElement(s, We({}, u, {
                className: p,
                ref: r
            }), m))
        });

    function cr() {
        var r = 0,
            n = null;
        return {
            add: function(e) {
                var t;
                0 == r && (n = function() {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = a.nc;
                    return t && e.setAttribute("nonce", t), e
                }()) && (t = e, (e = n).styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), t = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(t)), r++
            },
            remove: function() {
                !--r && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
        }
    }

    function lr() {
        var r, n = (r = cr(), function(e, t) {
            De.useEffect(function() {
                return r.add(e),
                    function() {
                        r.remove()
                    }
            }, [e && t])
        });
        return function(e) {
            var t = e.styles,
                e = e.dynamic;
            return n(t, e), null
        }
    }

    function sr(e) {
        return parseInt(e || "", 10) || 0
    }

    function ur() {
        var e = parseInt(document.body.getAttribute(pr) || "0", 10);
        return isFinite(e) ? e : 0
    }

    function dr(e) {
        var t, r = e.noRelative,
            n = e.noImportant,
            a = void 0 === (t = e.gapMode) ? "margin" : t;
        De.useEffect(function() {
            return document.body.setAttribute(pr, (ur() + 1).toString()),
                function() {
                    var e = ur() - 1;
                    e <= 0 ? document.body.removeAttribute(pr) : document.body.setAttribute(pr, e.toString())
                }
        }, []);
        var i, o, c = De.useMemo(function() {
            return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return fr;
                var t, r, n, n = (t = e, r = window.getComputedStyle(document.body), n = r["padding" === t ? "paddingLeft" : "marginLeft"], e = r["padding" === t ? "paddingTop" : "marginTop"], t = r["padding" === t ? "paddingRight" : "marginRight"], [sr(n), sr(e), sr(t)]),
                    e = document.documentElement.clientWidth,
                    t = window.innerWidth;
                return {
                    left: n[0],
                    top: n[1],
                    right: n[2],
                    gap: Math.max(0, t - e + n[2] - n[0])
                }
            }(a)
        }, [a]);
        return De.createElement(mr, {
            styles: (i = !r, o = a, e = n ? "" : "!important", r = (t = c).left, n = t.top, c = t.right, t = t.gap, void 0 === o && (o = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(e, ";\n   padding-right: ").concat(t, "px ").concat(e, ";\n  }\n  body[").concat(pr, "] {\n    overflow: hidden ").concat(e, ";\n    overscroll-behavior: contain;\n    ").concat([i && "position: relative ".concat(e, ";"), "margin" === o && "\n    padding-left: ".concat(r, "px;\n    padding-top: ").concat(n, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(t, "px ").concat(e, ";\n    "), "padding" === o && "padding-right: ".concat(t, "px ").concat(e, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Qt, " {\n    right: ").concat(t, "px ").concat(e, ";\n  }\n  \n  .").concat(Zt, " {\n    margin-right: ").concat(t, "px ").concat(e, ";\n  }\n  \n  .").concat(Qt, " .").concat(Qt, " {\n    right: 0 ").concat(e, ";\n  }\n  \n  .").concat(Zt, " .").concat(Zt, " {\n    margin-right: 0 ").concat(e, ";\n  }\n  \n  body[").concat(pr, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(t, "px;\n  }\n"))
        })
    }
    or.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
    }, or.classNames = {
        fullWidth: Zt,
        zeroRight: Qt
    };
    var fr = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        },
        mr = lr(),
        pr = "data-scroll-locked",
        vr = !1;
    if ("undefined" != typeof window) try {
        var br = Object.defineProperty({}, "passive", {
            get: function() {
                return vr = !0
            }
        });
        window.addEventListener("test", br, br), window.removeEventListener("test", br, br)
    } catch (Qe) {
        vr = !1
    }

    function yr(e, t) {
        if (!(e instanceof Element)) return !1;
        var r = window.getComputedStyle(e);
        return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
    }

    function hr(e, t) {
        var r = t.ownerDocument,
            n = t;
        do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), Pr(e, n)) {
                var a = xr(e, n);
                if (a[1] > a[2]) return !0
            }
        } while ((n = n.parentNode) && n !== r.body);
        return !1
    }

    function gr(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    }

    function wr(e) {
        return [e.deltaX, e.deltaY]
    }

    function Er(e) {
        return e && "current" in e ? e.current : e
    }
    var Sr = !!vr && {
            passive: !1
        },
        Pr = function(e, t) {
            return yr(t, "v" === e ? "overflowY" : "overflowX")
        },
        xr = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        Ir = 0,
        Ar = [],
        Rr = (yn = function(t) {
            var i = De.useRef([]),
                l = De.useRef([0, 0]),
                s = De.useRef(),
                r = De.useState(Ir++)[0],
                a = De.useState(lr)[0],
                u = De.useRef(t);
            De.useEffect(function() {
                u.current = t
            }, [t]), De.useEffect(function() {
                if (t.inert) {
                    document.body.classList.add("block-interactivity-".concat(r));
                    var e = function(e, t, r) {
                        if (r || 2 === arguments.length)
                            for (var n, a = 0, i = t.length; a < i; a++) !n && a in t || ((n = n || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
                        return e.concat(n || Array.prototype.slice.call(t))
                    }([t.lockRef.current], (t.shards || []).map(Er), !0).filter(Boolean);
                    return e.forEach(function(e) {
                            return e.classList.add("allow-interactivity-".concat(r))
                        }),
                        function() {
                            document.body.classList.remove("block-interactivity-".concat(r)), e.forEach(function(e) {
                                return e.classList.remove("allow-interactivity-".concat(r))
                            })
                        }
                }
            }, [t.inert, t.lockRef.current, t.shards]);
            var o = De.useCallback(function(e, t) {
                    if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
                    var r = gr(e),
                        n = l.current,
                        a = "deltaX" in e ? e.deltaX : n[0] - r[0],
                        i = "deltaY" in e ? e.deltaY : n[1] - r[1],
                        o = e.target,
                        n = Math.abs(a) > Math.abs(i) ? "h" : "v";
                    if ("touches" in e && "h" == n && "range" === o.type) return !1;
                    r = hr(n, o);
                    if (!r) return !0;
                    if (r ? c = n : (c = "v" == n ? "h" : "v", r = hr(n, o)), !r) return !1;
                    if (!s.current && "changedTouches" in e && (a || i) && (s.current = c), !c) return !0;
                    var c = s.current || c;
                    return function(e, t, r, n, a) {
                        var i, o, c = (i = e, o = window.getComputedStyle(t).direction, "h" === i && "rtl" === o ? -1 : 1),
                            o = c * n,
                            l = r.target,
                            s = t.contains(l),
                            n = !1,
                            r = 0 < o,
                            u = 0,
                            d = 0;
                        do {
                            var f = xr(e, l),
                                m = f[0],
                                f = f[1] - f[2] - c * m
                        } while ((m || f) && Pr(e, l) && (u += f, d += m), l = l instanceof ShadowRoot ? l.host : l.parentNode, !s && l !== document.body || s && (t.contains(l) || t === l));
                        return (r && (a && Math.abs(u) < 1 || !a && u < o) || !r && (a && Math.abs(d) < 1 || !a && d < -o)) && (n = !0), n
                    }(c, t, e, "h" === c ? a : i, !0)
                }, []),
                e = De.useCallback(function(e) {
                    var r, n = e;
                    Ar.length && Ar[Ar.length - 1] === a && (r = ("deltaY" in n ? wr : gr)(n), (e = i.current.filter(function(e) {
                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, e = r, t[0] === e[0] && t[1] === e[1]);
                        var t
                    })[0]) && e.should ? n.cancelable && n.preventDefault() : e || (0 < (e = (u.current.shards || []).map(Er).filter(Boolean).filter(function(e) {
                        return e.contains(n.target)
                    })).length ? o(n, e[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault())
                }, []),
                n = De.useCallback(function(e, t, r, n) {
                    var a = {
                        name: e,
                        delta: t,
                        target: r,
                        should: n,
                        shadowParent: function(e) {
                            for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                            return t
                        }(r)
                    };
                    i.current.push(a), setTimeout(function() {
                        i.current = i.current.filter(function(e) {
                            return e !== a
                        })
                    }, 1)
                }, []),
                c = De.useCallback(function(e) {
                    l.current = gr(e), s.current = void 0
                }, []),
                d = De.useCallback(function(e) {
                    n(e.type, wr(e), e.target, o(e, t.lockRef.current))
                }, []),
                f = De.useCallback(function(e) {
                    n(e.type, gr(e), e.target, o(e, t.lockRef.current))
                }, []);
            De.useEffect(function() {
                return Ar.push(a), t.setCallbacks({
                        onScrollCapture: d,
                        onWheelCapture: d,
                        onTouchMoveCapture: f
                    }), document.addEventListener("wheel", e, Sr), document.addEventListener("touchmove", e, Sr), document.addEventListener("touchstart", c, Sr),
                    function() {
                        Ar = Ar.filter(function(e) {
                            return e !== a
                        }), document.removeEventListener("wheel", e, Sr), document.removeEventListener("touchmove", e, Sr), document.removeEventListener("touchstart", c, Sr)
                    }
            }, []);
            var m = t.removeScrollBar,
                p = t.inert;
            return De.createElement(De.Fragment, null, p ? De.createElement(a, {
                styles: "\n  .block-interactivity-".concat(p = r, " {pointer-events: none;}\n  .allow-interactivity-").concat(p, " {pointer-events: all;}\n")
            }) : null, m ? De.createElement(dr, {
                gapMode: t.gapMode
            }) : null)
        }, ir.useMedium(yn), nr),
        Tr = De.forwardRef(function(e, t) {
            return De.createElement(or, We({}, e, {
                ref: t,
                sideCar: Rr
            }))
        });

    function Nr(e) {
        return e && (e.host || Nr(e.parentNode))
    }

    function Cr(e, t, r) {
        void 0 === r && (r = "data-aria-hidden");
        var n = Array.from(Array.isArray(e) ? e : [e]),
            a = t || (a = e, "undefined" == typeof document ? null : (Array.isArray(a) ? a[0] : a).ownerDocument.body);
        return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), function(e, t, o, c) {
            var r, n = (r = t, (Array.isArray(e) ? e : [e]).map(function(e) {
                if (r.contains(e)) return e;
                var t = Nr(e);
                return t && r.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", r, ". Doing nothing"), null)
            }).filter(function(e) {
                return Boolean(e)
            }));
            Fr[o] || (Fr[o] = new WeakMap);
            var l = Fr[o],
                s = [],
                u = new Set,
                a = new Set(n),
                e = function e(t) {
                    t && !u.has(t) && (u.add(t), e(t.parentNode))
                };
            return n.forEach(e),
                function i(e) {
                    e && !a.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                        if (u.has(e)) i(e);
                        else try {
                            var t = e.getAttribute(c),
                                r = null !== t && "false" !== t,
                                n = (Mr.get(e) || 0) + 1,
                                a = (l.get(e) || 0) + 1;
                            Mr.set(e, n), l.set(e, a), s.push(e), 1 === n && r && Dr.set(e, !0), 1 === a && e.setAttribute(o, "true"), r || e.setAttribute(c, "true")
                        } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t)
                        }
                    })
                }(t), u.clear(), Ur++,
                function() {
                    s.forEach(function(e) {
                        var t = Mr.get(e) - 1,
                            r = l.get(e) - 1;
                        Mr.set(e, t), l.set(e, r), t || (Dr.has(e) || e.removeAttribute(c), Dr.delete(e)), r || e.removeAttribute(o)
                    }), --Ur || (Mr = new WeakMap, Mr = new WeakMap, Dr = new WeakMap, Fr = {})
                }
        }(n, a, r, "aria-hidden")) : function() {
            return null
        }
    }
    Tr.classNames = or.classNames;
    var Or = Tr,
        Mr = new WeakMap,
        Dr = new WeakMap,
        Fr = {},
        Ur = 0;

    function Lr(e, t) {
        void 0 === t && (t = {});
        var r, n = t.insertAt;
        e && "undefined" != typeof document && (r = document.head || document.getElementsByTagName("head")[0], (t = document.createElement("style")).type = "text/css", "top" === n && r.firstChild ? r.insertBefore(t, r.firstChild) : r.appendChild(t), t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)))
    }
    var Br = {
            XSmall: "size-[var(--icon-size-xsmall)]",
            Small: "size-[var(--icon-size-small)]",
            Medium: "size-[var(--icon-size-medium)]",
            Large: "size-[var(--icon-size-large)]",
            XLarge: "size-[var(--icon-size-xlarge)]"
        },
        kr = Fe().forwardRef(function(e, t) {
            var r = e.name,
                n = e.size,
                a = void 0 === n ? "Medium" : n,
                n = e.className;
            e.children;
            e = ze(e, ["name", "size", "className", "children"]);
            return Fe().createElement("span", We({
                ref: t,
                role: "presentation",
                className: Ge("grow-0 shrink-0 basis-auto icon", r, Br[a], n)
            }, e))
        });

    function jr() {
        return Fe().createElement("div", {
            role: "presentation",
            className: "absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none"
        })
    }

    function _r(e) {
        var t = e.variant,
            r = e.size,
            n = e.isCircular,
            a = e.className,
            e = ze(e, ["variant", "size", "isCircular", "className"]);
        return Fe().createElement("button", We({
            type: "button",
            "aria-label": "Close",
            className: Ge("foundation-web-close-affordance flex stroke-none bg-none cursor-pointer", qr, Vr[t], Hr[r], n && "radius-circle", a)
        }, e), Fe().createElement(jr, null), Fe().createElement(kr, {
            name: "icon-regular-x",
            size: r
        }))
    }
    kr.displayName = "Icon";
    var qr = "relative clip group/interactable focus-visible:outline-focus disabled:outline-none",
        Hr = {
            Small: "padding-xsmall",
            Medium: "padding-small",
            Large: "padding-medium"
        },
        Vr = {
            Utility: "bg-action-link",
            OverMedia: "bg-over-media-100"
        };

    function Wr(e) {
        return function(e) {
            if (Array.isArray(e)) return Yr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || Xr(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function zr(e, t) {
        if (null == e) return {};
        var r, n = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) r = i[n], 0 <= t.indexOf(r) || (a[r] = e[r]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols)
            for (var a = Object.getOwnPropertySymbols(e), i = 0; i < a.length; i++) r = a[i], 0 <= t.indexOf(r) || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
    }

    function Gr(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || Xr(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Xr(e, t) {
        if (e) {
            if ("string" == typeof e) return Yr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Yr(e, t) : void 0
        }
    }

    function Yr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function Kr(t, e) {
        var r, n = Object.keys(t);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, r)), n
    }

    function $r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Kr(Object(r), !0).forEach(function(e) {
                Qr(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Kr(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function Qr(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function Zr(t, r, e) {
        var e = (2 < arguments.length && void 0 !== e ? e : {}).checkForDefaultPrevented,
            n = void 0 === e || e;
        return function(e) {
            if (null != t && t(e), !1 === n || !e.defaultPrevented) return null == r ? void 0 : r(e)
        }
    }

    function Jr(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function en() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        return function(t) {
            var r = !1,
                n = a.map(function(e) {
                    e = Jr(e, t);
                    return r || "function" != typeof e || (r = !0), e
                });
            if (r) return function() {
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    "function" == typeof t ? t() : Jr(a[e], null)
                }
            }
        }
    }

    function tn() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return De.useCallback(en.apply(void 0, t), t)
    }

    function rn() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        var a = r[0];
        if (1 === r.length) return a;

        function n() {
            var t = r.map(function(e) {
                return {
                    useScope: e(),
                    scopeName: e.scopeName
                }
            });
            return function(n) {
                var e = t.reduce(function(e, t) {
                    var r = t.useScope,
                        t = t.scopeName;
                    return $r($r({}, e), r(n)["__scope".concat(t)])
                }, {});
                return De.useMemo(function() {
                    return Qr({}, "__scope".concat(a.scopeName), e)
                }, [e])
            }
        }
        return n.scopeName = a.scopeName, n
    }

    function nn(e) {
        var a = De.useRef(e);
        return De.useEffect(function() {
            a.current = e
        }), De.useMemo(function() {
            return function() {
                for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return null === (e = a.current) || void 0 === e ? void 0 : e.call.apply(e, [a].concat(r))
            }
        }, [])
    }

    function an(e) {
        var a, r, t, i, n, o, c, l, s, u, d = e.present,
            f = e.children,
            m = (a = d, t = Gr(De.useState(), 2), i = t[0], n = t[1], o = De.useRef({}), c = De.useRef(a), l = De.useRef("none"), t = a ? "mounted" : "unmounted", t = Gr((r = {
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
            }, De.useReducer(function(e, t) {
                return null !== (t = r[e][t]) && void 0 !== t ? t : e
            }, t)), 2), s = t[0], u = t[1], De.useEffect(function() {
                var e = cn(o.current);
                l.current = "mounted" === s ? e : "none"
            }, [s]), on(function() {
                var e, t, r = o.current,
                    n = c.current;
                n !== a && (e = l.current, t = cn(r), a ? u("MOUNT") : "none" === t || "none" === (null == r ? void 0 : r.display) ? u("UNMOUNT") : u(n && e !== t ? "ANIMATION_OUT" : "UNMOUNT"), c.current = a)
            }, [a, u]), on(function() {
                if (i) {
                    var e, n, a = null !== (e = i.ownerDocument.defaultView) && void 0 !== e ? e : window,
                        t = function(e) {
                            var t, r = cn(o.current).includes(e.animationName);
                            e.target === i && r && (u("ANIMATION_END"), !c.current) && (t = i.style.animationFillMode, i.style.animationFillMode = "forwards", n = a.setTimeout(function() {
                                "forwards" === i.style.animationFillMode && (i.style.animationFillMode = t)
                            }))
                        },
                        r = function(e) {
                            e.target === i && (l.current = cn(o.current))
                        };
                    return i.addEventListener("animationstart", r), i.addEventListener("animationcancel", t), i.addEventListener("animationend", t),
                        function() {
                            a.clearTimeout(n), i.removeEventListener("animationstart", r), i.removeEventListener("animationcancel", t), i.removeEventListener("animationend", t)
                        }
                }
                u("ANIMATION_END")
            }, [i, u]), {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: De.useCallback(function(e) {
                    e && (o.current = getComputedStyle(e)), n(e)
                }, [])
            }),
            p = "function" == typeof f ? f({
                present: m.isPresent
            }) : De.Children.only(f),
            e = tn(m.ref, (e = p, (t = null === (d = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.ref : (t = null === (d = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === d ? void 0 : d.get) && "isReactWarning" in t && t.isReactWarning ? e.props.ref : e.props.ref || e.ref));
        return "function" == typeof f || m.isPresent ? De.cloneElement(p, {
            ref: e
        }) : null
    }
    var on = null !== globalThis && void 0 !== globalThis && globalThis.document ? De.useLayoutEffect : function() {};

    function cn(e) {
        return (null == e ? void 0 : e.animationName) || "none"
    }

    function ln(e) {
        var t, r, o = (t = e, (r = De.forwardRef(function(e, t) {
                var r, n = e.children,
                    a = zr(e, ["children"]);
                if (De.isValidElement(n)) {
                    var i = (i = n, e = null === (r = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (r = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
                        a = function(n, a) {
                            var e, i = $r({}, a);
                            for (e in a) ! function(e) {
                                var t = n[e],
                                    r = a[e];
                                /^on[A-Z]/.test(e) ? t && r ? i[e] = function() {
                                    r.apply(void 0, arguments), t.apply(void 0, arguments)
                                } : t && (i[e] = t) : "style" === e ? i[e] = $r($r({}, t), r) : "className" === e && (i[e] = [t, r].filter(Boolean).join(" "))
                            }(e);
                            return $r($r({}, n), i)
                        }(a, n.props);
                    return n.type !== De.Fragment && (a.ref = t ? en(t, i) : i), De.cloneElement(n, a)
                }
                return 1 < De.Children.count(n) ? De.Children.only(null) : null
            })).displayName = "".concat(t, ".SlotClone"), r),
            r = De.forwardRef(function(e, t) {
                var r = e.children,
                    n = zr(e, ["children"]),
                    e = De.Children.toArray(r),
                    a = e.find(un);
                if (a) {
                    var i = a.props.children,
                        e = e.map(function(e) {
                            return e === a ? 1 < De.Children.count(i) ? De.Children.only(null) : De.isValidElement(i) ? i.props.children : null : e
                        });
                    return (0, Xe.jsx)(o, $r($r({}, n), {}, {
                        ref: t,
                        children: De.isValidElement(i) ? De.cloneElement(i, void 0, e) : null
                    }))
                }
                return (0, Xe.jsx)(o, $r($r({}, n), {}, {
                    ref: t,
                    children: r
                }))
            });
        return r.displayName = "".concat(e, ".Slot"), r
    }
    an.displayName = "Presence";
    var sn = Symbol("radix.slottable");

    function un(e) {
        return De.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === sn
    }
    var dn = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(function(e, n) {
            var a = ln("Primitive.".concat(n)),
                t = De.forwardRef(function(e, t) {
                    var r = e.asChild,
                        e = zr(e, ["asChild"]),
                        r = r ? a : n;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Xe.jsx)(r, $r($r({}, e), {}, {
                        ref: t
                    }))
                });
            return t.displayName = "Primitive.".concat(n), $r($r({}, e), {}, Qr({}, n, t))
        }, {}),
        fn = "Dialog",
        mn = (e = Gr(function(c, e) {
            var t = 1 < arguments.length && void 0 !== e ? e : [],
                l = [],
                e = function() {
                    var r = l.map(function(e) {
                        return De.createContext(e)
                    });
                    return function(e) {
                        var t = (null == e ? void 0 : e[c]) || r;
                        return De.useMemo(function() {
                            return Qr({}, "__scope".concat(c), $r($r({}, e), {}, Qr({}, c, t)))
                        }, [e, t])
                    }
                };
            return e.scopeName = c, [function(n, a) {
                var i = De.createContext(a),
                    o = l.length;
                l = [].concat(Wr(l), [a]);

                function e(e) {
                    var t = e.scope,
                        r = e.children,
                        n = zr(e, ["scope", "children"]),
                        t = (null == t || null === (a = t[c]) || void 0 === a ? void 0 : a[o]) || i,
                        a = De.useMemo(function() {
                            return n
                        }, Object.values(n));
                    return (0, Xe.jsx)(t.Provider, {
                        value: a,
                        children: r
                    })
                }
                return e.displayName = n + "Provider", [e, function(e, t) {
                    var r = (null == t || null === (r = t[c]) || void 0 === r ? void 0 : r[o]) || i,
                        r = De.useContext(r);
                    if (r) return r;
                    if (void 0 !== a) return a;
                    throw new Error("`".concat(e, "` must be used within `").concat(n, "`"))
                }]
            }, rn.apply(void 0, [e].concat(Wr(t)))]
        }(fn), 2))[0],
        pn = (e[1], Gr(mn(fn), 2)),
        vn = pn[0],
        bn = pn[1],
        yn = function(e) {
            var t, r, n, a, i, o, c, l = e.__scopeDialog,
                s = e.children,
                u = e.open,
                d = e.defaultOpen,
                f = e.onOpenChange,
                m = e.modal,
                p = void 0 === m || m,
                e = De.useRef(null),
                m = De.useRef(null),
                u = (a = (u = {
                    prop: u,
                    defaultProp: d,
                    onChange: f
                }).prop, d = u.defaultProp, f = u.onChange, d = (f = {
                    defaultProp: d,
                    onChange: u = void 0 === f ? function() {} : f
                }).defaultProp, f = f.onChange, d = De.useState(d), t = Gr(d, 1)[0], r = De.useRef(t), n = nn(f), De.useEffect(function() {
                    r.current !== t && (n(t), r.current = t)
                }, [t, r, n]), f = (d = Gr(f = d, 2))[0], i = d[1], f = (o = void 0 !== a) ? a : f, c = nn(u), [f, De.useCallback(function(e) {
                    var t;
                    o ? (t = "function" == typeof e ? e(a) : e) !== a && c(t) : i(e)
                }, [o, a, i, c])]),
                f = Gr(u, 2),
                u = f[0],
                u = void 0 !== u && u,
                v = f[1];
            return (0, Xe.jsx)(vn, {
                scope: l,
                triggerRef: e,
                contentRef: m,
                contentId: Je(),
                titleId: Je(),
                descriptionId: Je(),
                open: u,
                onOpenChange: v,
                onOpenToggle: De.useCallback(function() {
                    return v(function(e) {
                        return !e
                    })
                }, [v]),
                modal: p,
                children: s
            })
        };
    yn.displayName = fn;
    var hn = "DialogTrigger";
    De.forwardRef(function(e, t) {
        var r = e.__scopeDialog,
            n = zr(e, ["__scopeDialog"]),
            r = bn(hn, r),
            t = tn(t, r.triggerRef);
        return (0, Xe.jsx)(dn.button, $r($r({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": Mn(r.open)
        }, n), {}, {
            ref: t,
            onClick: Zr(e.onClick, r.onOpenToggle)
        }))
    }).displayName = hn;
    var gn = "DialogPortal",
        wn = (nr = Gr(mn(gn, {
            forceMount: void 0
        }), 2))[0],
        En = nr[1];
    (Tr = function(e) {
        var t = e.__scopeDialog,
            r = e.forceMount,
            n = e.children,
            a = e.container,
            i = bn(gn, t);
        return (0, Xe.jsx)(wn, {
            scope: t,
            forceMount: r,
            children: De.Children.map(n, function(e) {
                return (0, Xe.jsx)(an, {
                    present: r || i.open,
                    children: (0, Xe.jsx)(Yt, {
                        asChild: !0,
                        container: a,
                        children: e
                    })
                })
            })
        })
    }).displayName = gn;
    var Sn = "DialogOverlay";
    (e = De.forwardRef(function(e, t) {
        var r = En(Sn, e.__scopeDialog),
            n = e.forceMount,
            r = void 0 === n ? r.forceMount : n,
            n = zr(e, ["forceMount"]),
            e = bn(Sn, e.__scopeDialog);
        return e.modal ? (0, Xe.jsx)(an, {
            present: r || e.open,
            children: (0, Xe.jsx)(xn, $r($r({}, n), {}, {
                ref: t
            }))
        }) : null
    })).displayName = Sn;
    var Pn = ln("DialogOverlay.RemoveScroll"),
        xn = De.forwardRef(function(e, t) {
            var r = e.__scopeDialog,
                e = zr(e, ["__scopeDialog"]),
                r = bn(Sn, r);
            return (0, Xe.jsx)(Or, {
                as: Pn,
                allowPinchZoom: !0,
                shards: [r.contentRef],
                children: (0, Xe.jsx)(dn.div, $r($r({
                    "data-state": Mn(r.open)
                }, e), {}, {
                    ref: t,
                    style: $r({
                        pointerEvents: "auto"
                    }, e.style)
                }))
            })
        }),
        In = "DialogContent";
    (pn = De.forwardRef(function(e, t) {
        var r = En(In, e.__scopeDialog),
            n = e.forceMount,
            r = void 0 === n ? r.forceMount : n,
            n = zr(e, ["forceMount"]),
            e = bn(In, e.__scopeDialog);
        return (0, Xe.jsx)(an, {
            present: r || e.open,
            children: e.modal ? (0, Xe.jsx)(An, $r($r({}, n), {}, {
                ref: t
            })) : (0, Xe.jsx)(Rn, $r($r({}, n), {}, {
                ref: t
            }))
        })
    })).displayName = In;
    var An = De.forwardRef(function(e, t) {
            var r = bn(In, e.__scopeDialog),
                n = De.useRef(null),
                t = tn(t, r.contentRef, n);
            return De.useEffect(function() {
                var e = n.current;
                if (e) return Cr(e)
            }, []), (0, Xe.jsx)(Tn, $r($r({}, e), {}, {
                ref: t,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: Zr(e.onCloseAutoFocus, function(e) {
                    e.preventDefault(), null !== (e = r.triggerRef.current) && void 0 !== e && e.focus()
                }),
                onPointerDownOutside: Zr(e.onPointerDownOutside, function(e) {
                    var t = e.detail.originalEvent,
                        r = 0 === t.button && !0 === t.ctrlKey;
                    2 !== t.button && !r || e.preventDefault()
                }),
                onFocusOutside: Zr(e.onFocusOutside, function(e) {
                    return e.preventDefault()
                })
            }))
        }),
        Rn = De.forwardRef(function(n, e) {
            var a = bn(In, n.__scopeDialog),
                i = De.useRef(!1),
                o = De.useRef(!1);
            return (0, Xe.jsx)(Tn, $r($r({}, n), {}, {
                ref: e,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: function(e) {
                    var t;
                    null !== (t = n.onCloseAutoFocus) && void 0 !== t && t.call(n, e), e.defaultPrevented || (i.current || null !== (t = a.triggerRef.current) && void 0 !== t && t.focus(), e.preventDefault()), i.current = !1, o.current = !1
                },
                onInteractOutside: function(e) {
                    var t;
                    null !== (t = n.onInteractOutside) && void 0 !== t && t.call(n, e), e.defaultPrevented || (i.current = !0, "pointerdown" === e.detail.originalEvent.type && (o.current = !0));
                    var r = e.target;
                    (null === (t = a.triggerRef.current) || void 0 === t ? void 0 : t.contains(r)) && e.preventDefault(), "focusin" === e.detail.originalEvent.type && o.current && e.preventDefault()
                }
            }))
        }),
        Tn = De.forwardRef(function(e, t) {
            var r = e.__scopeDialog,
                n = e.trapFocus,
                a = e.onOpenAutoFocus,
                i = e.onCloseAutoFocus,
                e = zr(e, ["__scopeDialog", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus"]),
                o = bn(In, r),
                r = De.useRef(null),
                t = tn(t, r);
            return De.useEffect(function() {
                var e, t = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = t[0]) && void 0 !== e ? e : $t()), document.body.insertAdjacentElement("beforeend", null !== (t = t[1]) && void 0 !== t ? t : $t()), Kt++,
                    function() {
                        1 === Kt && document.querySelectorAll("[data-radix-focus-guard]").forEach(function(e) {
                            return e.remove()
                        }), Kt--
                    }
            }, []), (0, Xe.jsxs)(Xe.Fragment, {
                children: [(0, Xe.jsx)(Ut, {
                    asChild: !0,
                    loop: !0,
                    trapped: n,
                    onMountAutoFocus: a,
                    onUnmountAutoFocus: i,
                    children: (0, Xe.jsx)(St, $r($r({
                        role: "dialog",
                        id: o.contentId,
                        "aria-describedby": o.descriptionId,
                        "aria-labelledby": o.titleId,
                        "data-state": Mn(o.open)
                    }, e), {}, {
                        ref: t,
                        onDismiss: function() {
                            return o.onOpenChange(!1)
                        }
                    }))
                }), (0, Xe.jsxs)(Xe.Fragment, {
                    children: [(0, Xe.jsx)(Bn, {
                        titleId: o.titleId
                    }), (0, Xe.jsx)(kn, {
                        contentRef: r,
                        descriptionId: o.descriptionId
                    })]
                })]
            })
        }),
        Nn = "DialogTitle";
    (fn = De.forwardRef(function(e, t) {
        var r = e.__scopeDialog,
            e = zr(e, ["__scopeDialog"]),
            r = bn(Nn, r);
        return (0, Xe.jsx)(dn.h2, $r($r({
            id: r.titleId
        }, e), {}, {
            ref: t
        }))
    })).displayName = Nn;
    var Cn = "DialogDescription";
    De.forwardRef(function(e, t) {
        var r = e.__scopeDialog,
            e = zr(e, ["__scopeDialog"]),
            r = bn(Cn, r);
        return (0, Xe.jsx)(dn.p, $r($r({
            id: r.descriptionId
        }, e), {}, {
            ref: t
        }))
    }).displayName = Cn;
    var On = "DialogClose";

    function Mn(e) {
        return e ? "open" : "closed"
    }(mn = De.forwardRef(function(e, t) {
        var r = e.__scopeDialog,
            n = zr(e, ["__scopeDialog"]),
            a = bn(On, r);
        return (0, Xe.jsx)(dn.button, $r($r({
            type: "button"
        }, n), {}, {
            ref: t,
            onClick: Zr(e.onClick, function() {
                return a.onOpenChange(!1)
            })
        }))
    })).displayName = On;
    var Dn, Fn, Un = "DialogTitleWarning",
        Ln = ((nr = Gr((nr = Un, Dn = {
            contentName: In,
            titleName: Nn,
            docsSlug: "dialog"
        }, Fn = De.createContext(Dn), zn.displayName = nr + "Provider", [zn, function(e) {
            var t = De.useContext(Fn);
            return t || Dn
        }]), 2))[0], nr[1]),
        Bn = function(e) {
            var t = e.titleId,
                e = Ln(Un),
                r = "`".concat(e.contentName, "` requires a `").concat(e.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(e.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(e.docsSlug);
            return De.useEffect(function() {
                t && (document.getElementById(t) || console.error(r))
            }, [r, t]), null
        },
        kn = function(e) {
            var t = e.contentRef,
                r = e.descriptionId,
                n = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(Ln("DialogDescriptionWarning").contentName, "}.");
            return De.useEffect(function() {
                var e = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                r && e && (document.getElementById(r) || console.warn(n))
            }, [n, t, r]), null
        },
        jn = yn,
        _n = Tr,
        qn = e,
        Hn = pn,
        Vn = fn,
        Wn = mn;

    function zn(e) {
        var t = e.children,
            r = zr(e, ["children"]),
            e = De.useMemo(function() {
                return r
            }, Object.values(r));
        return (0, Xe.jsx)(Fn.Provider, {
            value: e,
            children: t
        })
    }

    function Gn(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function Xn(e) {
        var t = De.forwardRef(function(e, t) {
            var r, n = e.children,
                a = zr(e, ["children"]);
            if (De.isValidElement(n)) {
                var i = (i = n, e = null === (r = Object.getOwnPropertyDescriptor(i.props, "ref")) || void 0 === r ? void 0 : r.get, e && "isReactWarning" in e && e.isReactWarning ? i.ref : (e = null === (r = Object.getOwnPropertyDescriptor(i, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in e && e.isReactWarning ? i.props.ref : i.props.ref || i.ref),
                    a = function(n, a) {
                        var e, i = $r({}, a);
                        for (e in a) ! function(e) {
                            var t = n[e],
                                r = a[e];
                            /^on[A-Z]/.test(e) ? t && r ? i[e] = function() {
                                var e = r.apply(void 0, arguments);
                                return t.apply(void 0, arguments), e
                            } : t && (i[e] = t) : "style" === e ? i[e] = $r($r({}, t), r) : "className" === e && (i[e] = [t, r].filter(Boolean).join(" "))
                        }(e);
                        return $r($r({}, n), i)
                    }(a, n.props);
                return n.type !== De.Fragment && (a.ref = t ? function() {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return function(t) {
                        var r = !1,
                            n = a.map(function(e) {
                                e = Gn(e, t);
                                return r || "function" != typeof e || (r = !0), e
                            });
                        if (r) return function() {
                            for (var e = 0; e < n.length; e++) {
                                var t = n[e];
                                "function" == typeof t ? t() : Gn(a[e], null)
                            }
                        }
                    }
                }(t, i) : i), De.cloneElement(n, a)
            }
            return 1 < De.Children.count(n) ? De.Children.only(null) : null
        });
        return t.displayName = "".concat(e, ".SlotClone"), t
    }
    var Yn = Symbol("radix.slottable");

    function Kn(e) {
        return De.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Yn
    }
    var $n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(function(e, n) {
            var t, o, r, a = (t = "Primitive.".concat(n), o = Xn(t), (r = De.forwardRef(function(e, t) {
                    var r = e.children,
                        n = zr(e, ["children"]),
                        e = De.Children.toArray(r),
                        a = e.find(Kn);
                    if (a) {
                        var i = a.props.children,
                            e = e.map(function(e) {
                                return e === a ? 1 < De.Children.count(i) ? De.Children.only(null) : De.isValidElement(i) ? i.props.children : null : e
                            });
                        return (0, Xe.jsx)(o, $r($r({}, n), {}, {
                            ref: t,
                            children: De.isValidElement(i) ? De.cloneElement(i, void 0, e) : null
                        }))
                    }
                    return (0, Xe.jsx)(o, $r($r({}, n), {}, {
                        ref: t,
                        children: r
                    }))
                })).displayName = "".concat(t, ".Slot"), r),
                r = De.forwardRef(function(e, t) {
                    var r = e.asChild,
                        e = zr(e, ["asChild"]),
                        r = r ? a : n;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, Xe.jsx)(r, $r($r({}, e), {}, {
                        ref: t
                    }))
                });
            return r.displayName = "Primitive.".concat(n), $r($r({}, e), {}, Qr({}, n, r))
        }, {}),
        Qn = Object.freeze({
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
        Zn = De.forwardRef(function(e, t) {
            return (0, Xe.jsx)($n.span, $r($r({}, e), {}, {
                ref: t,
                style: $r($r({}, Qn), e.style)
            }))
        });

    function Jn() {
        var e = (0, De.useContext)(ta);
        if (!e) throw new Error("Dialog components must be used within a Dialog");
        return e
    }

    function ea(e) {
        var t = e.open,
            r = e.onOpenChange,
            n = e.children,
            a = e.size,
            i = e.type,
            o = void 0 === i ? "Default" : i,
            c = e.ariaLabel,
            l = e.isModal,
            s = void 0 === (i = e.hasCloseAffordance) || i,
            u = void 0 === (i = e.hasMarginTop) || i,
            d = void 0 === (i = e.hasMarginBottom) || i,
            f = void 0 !== (e = e.experimentalDisablePointerEventsStylingOnBody) && e,
            e = (0, De.useMemo)(function() {
                return {
                    size: a,
                    ariaLabel: c,
                    isModal: l,
                    type: o,
                    hasCloseAffordance: s,
                    hasMarginTop: u,
                    hasMarginBottom: d
                }
            }, [a, c, l, o, s, u, d]);
        return (0, De.useEffect)(function() {
            f && setTimeout(function() {
                Object.assign(document.body.style, {
                    pointerEvents: "unset"
                })
            }, 0)
        }, [f, t]), Fe().createElement(ta.Provider, {
            value: e
        }, Fe().createElement(jn, {
            open: t,
            onOpenChange: r
        }, n))
    }
    Zn.displayName = "VisuallyHidden", Lr(".foundation-web-dialog-overlay{bottom:0;display:grid;left:0;overflow-y:auto;place-items:center;position:fixed;right:0;top:0}.foundation-web-dialog-close-container{right:var(--size-300);top:var(--size-300);z-index:1}.foundation-web-dialog-hero-media{border-top-left-radius:var(--radius-large);border-top-right-radius:var(--radius-large);margin-left:calc(var(--stroke-standard)*-1);margin-right:calc(var(--stroke-standard)*-1);margin-top:calc(var(--stroke-standard)*-1);overflow:clip}.foundation-web-dialog-content[data-size=Small]{max-width:calc(var(--size-100)*80);min-width:calc(var(--size-100)*75)}.foundation-web-dialog-content[data-size=Medium]{max-width:calc(var(--size-100)*120);min-width:calc(var(--size-100)*94)}.foundation-web-dialog-content[data-size=Large]{max-width:calc(var(--size-100)*160);min-width:calc(var(--size-100)*94)}");
    var ta = (0, De.createContext)({
            size: "Medium",
            ariaLabel: "",
            isModal: !0,
            hasCloseAffordance: !0,
            hasMarginTop: !0,
            hasMarginBottom: !0,
            type: "Default"
        }),
        ra = {
            Small: "padding-x-large",
            Medium: "padding-x-xlarge",
            Large: "padding-x-xlarge"
        },
        na = {
            Small: "padding-top-large",
            Medium: "padding-top-xlarge",
            Large: "padding-top-xlarge"
        },
        aa = {
            Small: "padding-bottom-large",
            Medium: "padding-bottom-xlarge",
            Large: "padding-bottom-xlarge"
        };

    function ia(e) {
        var t = e.children,
            r = e.className,
            n = e.overlayClassName,
            a = ze(e, ["children", "className", "overlayClassName"]),
            i = (o = Jn()).size,
            e = o.isModal,
            o = o.hasCloseAffordance,
            n = Ge("foundation-web-dialog-overlay padding-y-medium foundation-web-portal-zindex", e && "bg-common-backdrop", n),
            r = Ge("relative radius-large bg-surface-100 stroke-muted stroke-standard foundation-web-dialog-content shadow-transient-high", r);
        return Fe().createElement(_n, null, Fe().createElement(qn, {
            className: n
        }, Fe().createElement(Hn, We({
            className: r,
            "data-size": i
        }, a), o && Fe().createElement("div", {
            className: "absolute foundation-web-dialog-close-container"
        }, Fe().createElement(Wn, {
            asChild: !0
        }, Fe().createElement(_r, {
            variant: "OverMedia",
            size: i,
            isCircular: !0
        }))), t)))
    }

    function oa(e) {
        var t = e.children,
            r = e.className,
            n = ze(e, ["children", "className"]),
            a = (o = Jn()).size,
            i = o.ariaLabel,
            e = o.hasMarginTop,
            o = o.hasMarginBottom,
            r = Ge(ra[a], e && na[a], o && aa[a], r);
        return Fe().createElement("div", We({
            className: r
        }, n), Fe().createElement(Zn, null, Fe().createElement(Vn, null, i)), t)
    }

    function ca(e) {
        var t = e.children,
            r = e.className,
            n = ze(e, ["children", "className"]),
            e = Jn().size,
            r = Ge(ra[e], aa[e], r);
        return Fe().createElement("div", We({
            className: r
        }, n), t)
    }

    function la(e) {
        var t = e.width,
            e = e.height;
        return Fe().createElement("svg", {
            className: "foundation-web-loading-spinner",
            width: t,
            height: e,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, Fe().createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
            d: "M10 2.75C8.56609 2.75 7.16438 3.1752 5.97212 3.97185C4.77986 4.76849 3.85061 5.90078 3.30188 7.22554C2.75314 8.55031 2.60957 10.008 2.88931 11.4144C3.16905 12.8208 3.85955 14.1126 4.87348 15.1265C5.88741 16.1405 7.17924 16.831 8.5856 17.1107C9.99196 17.3904 11.4497 17.2469 12.7745 16.6981C14.0992 16.1494 15.2315 15.2201 16.0282 14.0279C16.8248 12.8356 17.25 11.4339 17.25 10C17.25 9.58579 17.5858 9.25 18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 11.7306 18.2368 13.4223 17.2754 14.8612C16.3139 16.3002 14.9473 17.4217 13.3485 18.0839C11.7496 18.7462 9.9903 18.9195 8.29296 18.5819C6.59563 18.2443 5.03653 17.4109 3.81282 16.1872C2.58911 14.9635 1.75575 13.4044 1.41813 11.707C1.08051 10.0097 1.25379 8.25037 1.91606 6.65152C2.57832 5.05267 3.69983 3.6861 5.13876 2.72464C6.57769 1.76318 8.26942 1.25 10 1.25C10.4142 1.25 10.75 1.58579 10.75 2C10.75 2.41421 10.4142 2.75 10 2.75Z"
        }))
    }

    function sa(e) {
        var t = e.translate,
            r = e.thumbnail,
            n = e.assetName,
            a = e.expectedPrice,
            i = e.displayPrice,
            o = e.priceSuffix,
            c = void 0 === (c = e.thumbnailSizePx) ? 150 : c,
            e = void 0 === (e = e.rentalOptionDays) ? null : e;
        return Fe().createElement("div", {
            className: "flex flex-row items-center gap-large"
        }, Fe().createElement("div", {
            className: "relative shrink-0",
            style: {
                width: c,
                height: c
            }
        }, Fe().createElement("div", {
            className: "rounded",
            style: {
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.06)"
            }
        }), Fe().createElement("div", {
            className: "absolute unified-modal-thumbnail",
            style: {
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        }, r)), Fe().createElement("div", {
            className: "min-w-0 flex flex-col gap-small"
        }, Fe().createElement("span", {
            className: "text-body-large break-words"
        }, Fe().createElement(K, {
            name: n
        })), null != e && Fe().createElement("div", {
            className: "flex flex-row items-center gap-small"
        }, Fe().createElement(kr, {
            name: "icon-regular-clock"
        }), Fe().createElement("span", null, t(va.timedOptionDaysTimerStartsWhenYouBuy, {
            days: e
        }) || e + " days (Timer starts when you buy)")), Fe().createElement("div", {
            className: "flex flex-row items-center"
        }, i ? Fe().createElement("span", {
            className: "text-robux"
        }, i, o) : Fe().createElement(Fe().Fragment, null, Fe().createElement(F, {
            translate: t,
            price: a,
            color: "",
            useFreeText: !1
        }), o && Fe().createElement("span", {
            className: "text-robux"
        }, o)))))
    }
    ea.displayName = "Dialog", ia.displayName = "DialogContent", oa.displayName = "DialogBody", ca.displayName = "DialogFooter", Lr("@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.foundation-web-loading-spinner{animation:rotation 1s linear infinite normal}");
    var ua = {
            Large: 24,
            Medium: 20,
            Small: 16,
            XSmall: 12
        },
        da = {
            Large: ["radius-medium", "text-label-large", "height-1200", "padding-x-large"],
            Medium: ["radius-medium", "text-label-medium", "height-1000", "padding-x-medium"],
            Small: ["radius-medium", "text-label-small", "height-800", "padding-x-small"],
            XSmall: ["radius-small", "text-label-small", "height-600", "padding-x-small"]
        },
        fa = {
            Emphasis: ["bg-action-emphasis", "content-action-emphasis"],
            Standard: ["bg-action-standard", "content-action-standard"],
            SoftEmphasis: ["bg-action-soft-emphasis", "content-action-soft-emphasis"],
            ActionUtility: ["bg-action-subtle", "content-action-standard"],
            Alert: ["bg-action-alert", "content-action-alert"]
        },
        ma = {
            Emphasis: ["bg-action-standard", "content-action-standard"],
            Standard: ["bg-action-standard", "content-action-standard"],
            SoftEmphasis: ["bg-action-standard", "content-action-standard"],
            ActionUtility: ["bg-action-subtle", "content-action-standard"],
            Alert: ["bg-action-standard", "content-action-standard"]
        },
        pa = (0, De.forwardRef)(function(e, t) {
            var r = e.children,
                n = e.className,
                a = e.style,
                i = e.as,
                o = e.isDisabled,
                c = void 0 !== o && o,
                l = e.isLoading,
                s = void 0 !== l && l,
                u = e.size,
                o = void 0 === u ? "Large" : u,
                l = e.variant,
                u = void 0 === l ? "Emphasis" : l,
                l = ze(e, ["children", "className", "style", "as", "isDisabled", "isLoading", "size", "variant"]),
                e = null != i ? i : "button",
                i = l.href,
                l = ze(l, ["href"]);
            return Fe().createElement(e, We({
                ref: t,
                type: "button" === e ? "button" : void 0,
                disabled: c,
                "aria-disabled": c,
                href: c ? void 0 : i
            }, l, {
                className: Ge("foundation-web-button", qr, c ? "opacity-[0.5]" : "cursor-pointer", "flex items-center justify-center stroke-none padding-y-none select-none", da[o], (c ? ma : fa)[u], n),
                style: We({
                    textDecoration: "none"
                }, a)
            }), Fe().createElement(jr, null), s && Fe().createElement("div", {
                "aria-hidden": "true",
                className: "absolute flex"
            }, Fe().createElement(la, {
                width: ua[o],
                height: ua[o]
            })), Fe().createElement("span", {
                className: Ge("padding-y-xsmall text-truncate-end text-no-wrap", s && "invisible")
            }, r))
        }),
        va = Ao,
        ba = Ao;

    function ya(e) {
        var t = e.translate,
            r = e.titleText,
            e = e.currentRobuxBalance;
        return Fe().createElement("div", {
            id: "rbx-unified-purchase-heading",
            className: "flex flex-row items-center justify-between",
            style: {
                paddingRight: 42
            }
        }, Fe().createElement("span", {
            className: "text-heading-medium"
        }, r), "number" == typeof e && Fe().createElement("div", {
            className: "flex flex-row items-center"
        }, Fe().createElement(ha, {
            translate: t,
            price: e,
            color: "",
            useFreeText: !1
        })))
    }
    var ha = (0, n.withTranslations)(function(e) {
            var t = e.translate,
                r = e.price,
                n = void 0 === (n = e.color) ? "" : n,
                e = e.useFreeText;
            return 0 !== r || void 0 !== e && !e ? Fe().createElement(Fe().Fragment, null, Fe().createElement("span", {
                className: "icon-robux" + (n ? "-" + n : "") + "-16x16"
            }), Fe().createElement("span", {
                className: "text-robux ml-1"
            }, Ue.numberFormat.getNumberFormat(r))) : Fe().createElement("span", {
                className: "text-robux text-free"
            }, t(ba.freeLabel))
        }, o.purchasingResources),
        ga = window.EventTracker ? EventTracker : {
            fireEvent: console.log,
            start: console.log,
            endSuccess: console.log,
            endCancel: console.log,
            endFailure: console.log
        },
        wa = function(e, t) {
            (0, De.useEffect)(function() {
                t && (0, ga.fireEvent)("RenderTracking-Purchase-" + e)
            }, [t])
        },
        Ea = (0, n.withTranslations)(function(e) {
            var t = e.translate,
                r = e.titleText,
                n = e.actionButtonText,
                a = e.expectedPrice,
                i = e.displayPrice,
                o = e.thumbnail,
                c = e.assetName,
                l = (e.assetType, e.assetTypeDisplayName, e.sellerName, e.onAction),
                s = e.onSecondaryAction,
                u = e.secondaryActionButtonText,
                d = e.footerDisclaimerText,
                f = e.priceSuffix,
                m = e.onCancel,
                p = e.loading,
                v = void 0 !== p && p,
                b = e.currentRobuxBalance,
                p = e.rentalOptionDays,
                p = void 0 === p ? null : p,
                e = e.open,
                e = void 0 !== e && e;
            return wa("UnifiedPurchaseModal", e), Fe().createElement(ea, {
                open: e,
                onOpenChange: function(e) {
                    !e && m && m()
                },
                isModal: !0,
                size: "Large",
                type: "Default",
                ariaLabel: r,
                hasCloseAffordance: !0
            }, Fe().createElement(ia, {
                className: "relative width-full"
            }, Fe().createElement(oa, {
                className: "gap-xlarge flex flex-col"
            }, Fe().createElement(ya, {
                translate: t,
                titleText: r,
                currentRobuxBalance: i ? void 0 : b
            }), Fe().createElement(sa, {
                translate: t,
                thumbnail: o,
                assetName: c,
                expectedPrice: a,
                displayPrice: i,
                priceSuffix: f,
                rentalOptionDays: p
            })), Fe().createElement(ca, {
                className: "gap-small flex flex-col mt-[40px]"
            }, Fe().createElement("div", {
                className: "flex flex-row-reverse"
            }, Fe().createElement(pa, {
                variant: "Emphasis",
                className: "fill basis-0",
                onClick: l,
                isDisabled: v,
                "data-testid": "purchase-confirm-button"
            }, n)), s && u && Fe().createElement("div", {
                className: "flex flex-row-reverse"
            }, Fe().createElement(pa, {
                variant: "Standard",
                className: "fill basis-0",
                onClick: s,
                isDisabled: v,
                "data-testid": "purchase-secondary-button"
            }, u)), d && Fe().createElement("p", {
                className: "text-body-small content-default mt-[12px]"
            }, d))))
        }, o.purchasingResources),
        Sa = function() {
            return (Sa = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        },
        Pa = Ao;

    function xa() {
        var x = null,
            I = {
                open: function() {
                    x && x(!0)
                },
                close: function() {
                    x && x(!1)
                }
            };
        return [(0, n.withTranslations)(function(e) {
            var t, r = e.translate,
                n = void 0 === (h = e.title) ? "" : h,
                a = e.expectedPrice,
                i = void 0 === (g = e.displayPrice) ? "" : g,
                o = e.thumbnail,
                c = e.assetName,
                l = e.assetType,
                s = e.assetTypeDisplayName,
                u = void 0 === s ? "" : s,
                d = e.sellerName,
                f = void 0 !== (w = e.isPlace) && w,
                m = e.onAction,
                p = e.onSecondaryAction,
                v = void 0 === (E = e.primaryActionButtonText) ? "" : E,
                b = e.secondaryActionButtonText,
                y = void 0 === b ? "" : b,
                h = void 0 === (S = e.footerDisclaimerText) ? "" : S,
                g = e.priceSuffix,
                w = void 0 !== (s = e.loading) && s,
                E = e.currentRobuxBalance,
                S = void 0 === (b = e.rentalOptionDays) ? null : b,
                e = (s = Fe().useState(!1))[0],
                P = s[1];
            return Fe().useEffect(function() {
                return x = P,
                    function() {
                        x === P && (x = null)
                    }
            }, []), (0, A.renderToString)(Fe().createElement(K, {
                name: c
            })), b = (0, Ue.escapeHtml)()(d), (0, A.renderToString)(Fe().createElement(F, {
                translate: r,
                price: a,
                color: "",
                useFreeText: !1
            })), f ? Pa.promptBuyAccessMessage : Pa.promptBuyMessage, f || "" !== b || Pa.promptBuySimplifiedMessage, b = !(s = !("Subscription" !== l || !i)) && 0 === a ? (t = r(Pa.getItemHeading), r(Pa.getNowAction)) : (t = r(Pa.buyItemHeading), r(Pa.buyAction)), f && (t = r(Pa.buyExperience)), Fe().createElement(Ea, Sa({}, {
                translate: r,
                titleText: n || t,
                actionButtonText: v || b,
                expectedPrice: a,
                displayPrice: s ? i : void 0,
                thumbnail: o,
                assetName: c,
                assetType: l,
                assetTypeDisplayName: u,
                sellerName: d,
                isPlace: f,
                onAction: m,
                onSecondaryAction: p,
                secondaryActionButtonText: p ? y : void 0,
                footerDisclaimerText: h || void 0,
                priceSuffix: g,
                loading: w,
                currentRobuxBalance: E,
                rentalOptionDays: S,
                open: e,
                onCancel: I.close
            }))
        }, o.purchasingResources), I]
    }
    var Ia = function(e, o, c, l) {
            return new(c = c || Promise)(function(r, t) {
                function n(e) {
                    try {
                        i(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(e) {
                    try {
                        i(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    var t;
                    e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
                        e(t)
                    })).then(n, a)
                }
                i((l = l.apply(e, o || [])).next())
            })
        },
        Aa = function(r, n) {
            var a, i, o, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                        if (a) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (a = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
                            switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        c.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && c.label < o[1]) {
                                        c.label = o[1], o = t;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2], c.ops.push(t);
                                        break
                                    }
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            t = n.call(r, c)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            a = o = 0
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
        Ra = v.shouldShowUnifiedPurchaseModal,
        Ta = function() {
            return Ia(void 0, void 0, void 0, function() {
                var t, r, n, a, i, o;
                return Aa(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (t = P.localStorageService.getLocalStorage(Ra)) try {
                                if (r = JSON.parse(t), n = r.isEligible, a = r.expiry, Date.now() < a) return [2, n];
                                P.localStorageService.removeLocalStorage(Ra)
                            } catch (e) {
                                P.localStorageService.removeLocalStorage(Ra)
                            }
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, je.getSubscriptionsMetadata()];
                        case 2:
                            return i = e.sent(), i = null === (o = i.data) || void 0 === o ? void 0 : o.unifiedPurchaseFlowMetadata, o = i.isUserEligibleForUnifiedPurchaseFlow, i = i.expiresInSeconds, a = Date.now() + 1e3 * i, i = {
                                isEligible: o,
                                expiry: a
                            }, P.localStorageService.setLocalStorage(Ra, JSON.stringify(i)), [2, o];
                        case 3:
                            return e.sent(), [2, !1];
                        case 4:
                            return [2]
                    }
                })
            })
        };

    function Na(t, e) {
        var r, n = Object.keys(t);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, r)), n
    }

    function Ca(n) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Na(Object(a), !0).forEach(function(e) {
                var t, r;
                t = n, e = a[r = e], r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Na(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return n
    }

    function Oa(e, t, r, n, a, i, o) {
        try {
            var c = e[i](o),
                l = c.value
        } catch (e) {
            return void r(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(n, a)
    }

    function Ma(c) {
        return function() {
            var e = this,
                o = arguments;
            return new Promise(function(t, r) {
                var n = c.apply(e, o);

                function a(e) {
                    Oa(n, t, r, a, i, "next", e)
                }

                function i(e) {
                    Oa(n, t, r, a, i, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function Da(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Fa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fa(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Fa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var Ua = Ao,
        La = t,
        Ba = i,
        ka = s,
        ja = p;

    function _a() {
        function se() {
            Me.itemDetail.buyButtonElementDataset && (P.paymentFlowAnalyticsService.startRobuxUpsellFlow(Me.itemDetail.buyButtonElementDataset.assetType, !!Me.itemDetail.buyButtonElementDataset.userassetId, Me.itemDetail.buyButtonElementDataset.isPrivateServer, Me.itemDetail.buyButtonElementDataset.isPlace, Me.itemDetail.buyButtonElementDataset.productId), Ie.open())
        }

        function ue() {
            var e, t, r;
            if (Le.ItemPurchaseUpsellService && null !== (e = Me) && void 0 !== e && null !== (t = e.itemDetail) && void 0 !== t && t.expectedItemPrice)
                if (0 <= ve - (null === Me || void 0 === Me || null === (r = Me.itemDetail) || void 0 === r ? void 0 : r.expectedItemPrice)) se();
                else try {
                    Le.ItemPurchaseUpsellService.startItemUpsellProcess(Me.errorObject, Me.itemDetail, Me.startOriginalFlowCallback, void 0, Me.shouldShowUnifiedPurchaseModal), window.EventTracker.fireEvent(ka.NEW_UPSELL_FROM_REACT_BUY_BUTTON)
                } catch (e) {
                    window.EventTracker.fireEvent(ka.NEW_UPSELL_FAILED_DUE_TO_ERROR), se()
                } else window.EventTracker.fireEvent(ka.NEW_UPSELL_FAILED_DUE_TO_LOADING), se()
        }

        function de(e, t, r) {
            var n = Math.ceil(r / 60);
            if (24 < n) {
                var a = Math.ceil(n / 24);
                return e("Text.EconomicRestrictionsDaysGeneral", {
                    violation: e(null !== (r = ja[t]) && void 0 !== r ? r : "Label.Sublabel.FraudPaymentAbuse"),
                    day: a
                })
            }
            return e("Text.EconomicRestrictionsHoursGeneral", {
                violation: e(null !== (t = ja[t]) && void 0 !== t ? t : "Label.Sublabel.FraudPaymentAbuse"),
                hour: n
            })
        }
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            fe = e.customPurchaseVerificationModal,
            me = e.customPurchaseVerificationModalService,
            e = e.forceUnifiedModal,
            pe = void 0 !== e && e,
            ve = Be().userRobuxBalance,
            e = Da((0, N.createSystemFeedback)(), 2),
            be = e[0],
            ye = e[1],
            e = Da((0, N.createSystemFeedback)(), 2),
            he = e[0],
            ge = e[1],
            e = Da(ee(), 2),
            we = e[0],
            Ee = e[1],
            e = Da(xa(), 2),
            Se = e[0],
            Pe = e[1],
            e = Da(j(), 2),
            xe = e[0],
            Ie = e[1],
            e = Da(oe(), 2),
            Ae = e[0],
            Re = e[1],
            e = Da(X(), 2),
            Te = e[0],
            Ne = e[1],
            e = Da(S(), 2),
            Ce = e[0],
            Oe = e[1],
            Me = {
                errorObject: {},
                itemDetail: {},
                startOriginalFlowCallback: function() {
                    return null
                }
            };

        function t(e) {
            function l() {
                return Z(!0)
            }
            var s = e.translate,
                o = e.assetName,
                c = e.assetType,
                u = e.assetTypeDisplayName,
                d = e.productId,
                f = e.expectedCurrency,
                t = e.expectedPrice,
                m = e.expectedSellerId,
                p = e.expectedPromoId,
                v = e.userAssetId,
                r = e.thumbnail,
                n = e.sellerName,
                b = e.sellerType,
                y = e.showSuccessBanner,
                h = e.isPlace,
                g = e.isPrivateServer,
                w = e.handlePurchase,
                E = e.onPurchaseSuccess,
                S = e.collectibleItemId,
                P = e.collectibleItemInstanceId,
                x = e.collectibleProductId,
                I = e.isLimited,
                a = e.customProps,
                i = e.rentalOptionDays,
                A = void 0 === i ? null : i,
                R = e.saleLocationId,
                T = void 0 === R ? null : R,
                N = e.subscriptionTargetKey,
                C = void 0 === N ? null : N,
                O = e.subscriptionPlaceId,
                M = void 0 === O ? 0 : O,
                D = e.subscriptionPaymentProvider,
                F = void 0 === D ? "" : D,
                U = e.subscriptionSecondaryPaymentProvider,
                L = void 0 === U ? "" : U,
                B = e.subscriptionTitle,
                k = void 0 === B ? "" : B,
                j = e.primaryActionButtonText,
                _ = void 0 === j ? "" : j,
                q = e.secondaryActionButtonText,
                i = void 0 === q ? "" : q,
                R = e.subscriptionFooterDisclaimer,
                N = void 0 === R ? "" : R,
                O = e.subscriptionCancelPath,
                H = void 0 === O ? "" : O,
                D = e.displayPrice,
                U = void 0 === D ? "" : D,
                B = e.priceSuffix,
                j = void 0 === B ? "" : B,
                q = Da((0, De.useState)(!1), 2),
                R = q[0],
                V = q[1],
                O = Da((0, De.useState)(null), 2),
                W = O[0],
                z = O[1],
                D = Da((0, De.useState)(null), 2),
                G = D[0],
                X = D[1],
                e = Da((0, De.useState)(t - ve), 2),
                B = e[0],
                Y = e[1],
                q = Da((0, De.useState)(null), 2),
                O = q[0],
                K = q[1],
                D = Da((0, De.useState)(ve), 2),
                e = D[0],
                $ = D[1],
                q = Da((0, De.useState)(!1), 2),
                Q = q[0],
                Z = q[1],
                D = Da((0, De.useState)(!1), 2),
                q = D[0],
                J = D[1],
                D = Da((0, De.useState)(!1), 2),
                ee = D[0],
                te = D[1];
            (0, De.useEffect)(function() {
                Le.CurrentUser.isAuthenticated && void 0 === Be().userRobuxBalance ? je.getCurrentUserBalance(Le.CurrentUser.userId).then(function(e) {
                    $(e.data.robux), Y(t - e.data.robux)
                }).catch(function() {
                    $(void 0)
                }) : ($(Be().userRobuxBalance), Y(t - Be().userRobuxBalance))
            }, [d, t, m]), (0, De.useEffect)(function() {
                Q && J(!0)
            }, [Q]), (0, De.useEffect)(function() {
                Le.CurrentUser.isAuthenticated && (pe ? te(!0) : Ta().then(function(e) {
                    te(e)
                }).catch(function() {
                    te(!1)
                }))
            }, []);

            function re() {
                (me || (ee ? Pe : Ee)).close(), Ne.close()
            }

            function ne(e, t) {
                var r, n, a, i = {
                    assetType: c,
                    assetTypeDisplayName: u,
                    expectedCurrency: f,
                    expectedPrice: t,
                    expectedSellerId: m,
                    itemName: o,
                    itemType: c,
                    productId: d,
                    userassetId: v,
                    placeproductpromotionId: p,
                    isPrivateServer: g,
                    isPlace: h,
                    collectibleItemId: S,
                    collectibleItemInstanceId: P,
                    collectibleProductId: x
                };
                Me = {
                    errorObject: {
                        shortfallPrice: e,
                        currentCurrency: f,
                        isPlace: h
                    },
                    itemDetail: {
                        expectedItemPrice: t,
                        assetName: o,
                        isLimited: I,
                        buyButtonElementDataset: i
                    },
                    startOriginalFlowCallback: (r = e, n = i, function() {
                        Le.ItemPurchaseUpsellService && Le.ItemPurchaseUpsellService.showExceedLargestInsufficientRobuxModal ? Le.ItemPurchaseUpsellService.showExceedLargestInsufficientRobuxModal(r, n, se, void 0, a) : se()
                    }),
                    shouldShowUnifiedPurchaseModal: a = ee
                }
            }

            function ae(e) {
                var t = e.showDivId,
                    r = e.title,
                    n = e.errorMsg,
                    a = e.price,
                    i = e.shortfallPrice,
                    e = e.onDecline;
                t === La.transactionFailure ? (z({
                    title: r,
                    message: n,
                    onDecline: e
                }), Oe.open()) : t === La.insufficientFunds ? (Y(i), ne(i, a), ue()) : t === La.priceChanged && (X(a), Ne.open())
            }

            function ie(e) {
                K(e), Re.open()
            }

            function oe(e, t) {
                var r = t || F;
                V(!0), "Robux" !== r ? ke.prepareFiatSubscriptionPurchase(C, {
                    stripeCancelUrlPathName: H,
                    paymentProvider: r
                }).then(function(e) {
                    var t = e.data;
                    if (t.invalidReason) return V(!1), re(), void ae({
                        title: s(Ua.economicRestrictionsErrorHeading),
                        errorMsg: de(s, t.invalidReason, 0) || s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    });
                    "Stripe" === r && t.providerPayload ? (e = JSON.parse(t.providerPayload)).CheckoutUrl && (V(!1), window.location.href = e.CheckoutUrl) : "CreditBalance" === r && t.providerPayload ? (V(!1), window.location.href = "/upgrades/redeem?ap=0&subscriptionTargetKey=".concat(C)) : (V(!1), re(), ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    }))
                }).catch(function(e) {
                    V(!1), re(), 429 === (null == e ? void 0 : e.status) ? ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.floodcheckFailureMessage, {
                            throttleTime: 1
                        }),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    })
                }) : ke.purchaseSubscriptionWithRobux(C, M, {
                    priceInRobux: e
                }).then(function(e) {
                    e = e.data;
                    V(!1), re(), e.isSuccess ? (E(), y ? ye.success(s(Ua.purchaseCompleteHeading)) : ie({
                        assetIsWearable: !1,
                        transactionVerb: "",
                        onDecline: function() {
                            window.location.reload()
                        }
                    })) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: e.errorMessage || s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    })
                }).catch(function(e) {
                    V(!1), re(), 429 === (null == e ? void 0 : e.status) ? ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.floodcheckFailureMessage, {
                            throttleTime: 1
                        }),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    })
                })
            }

            function ce(e) {
                var t;
                S ? le(e) : "Product" === c ? (t = {
                    expectedPrice: t = e,
                    saleLocationType: "Website",
                    saleLocationId: T
                }, V(!0), ke.purchaseDeveloperProduct(d, t).then(function(e) {
                    e = e.data;
                    if (void 0 !== e.FailureReason && void 0 !== e.ExpirationTimeInMinutes) return V(!1), re(), void ae({
                        title: s(Ua.economicRestrictionsErrorHeading),
                        errorMsg: de(s, e.FailureReason, e.ExpirationTimeInMinutes),
                        showDivId: La.transactionFailure
                    });
                    V(!1), re(), e.purchased || "TwoStepVerificationRequired" !== e.reason ? e.purchased ? (E(), y ? ye.success(s(Ua.purchaseCompleteHeading)) : ie({
                        assetIsWearable: !1,
                        transactionVerb: "",
                        onDecline: function() {
                            window.location.reload()
                        }
                    })) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    }) : l()
                }).catch(function(e) {
                    console.debug(e), V(!1), re();
                    var t = null === (t = e.data) || void 0 === t ? void 0 : t.errorCode;
                    e && 500 === e.status && t === La.pendingProductsLimitExceeded ? ae({
                        title: s(Ua.pendingDeveloperProductLimitReachedHeading),
                        errorMsg: s(Ua.pendingDeveloperProductLimitReachedMessage),
                        showDivId: La.transactionFailure
                    }) : e && 400 !== (null == e ? void 0 : e.status) ? 429 === e.status ? ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.floodcheckFailureMessage, {
                            throttleTime: 1
                        }),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.purchasingUnavailableMessage),
                        showDivId: La.transactionFailure
                    })
                })) : "Game Pass" === c ? (t = {
                    expectedPrice: t = e
                }, V(!0), ke.purchaseGamePass(d, t).then(function(e) {
                    e = e.data;
                    if (void 0 !== e.failureReason && void 0 !== e.expirationTimeInMinutes) return V(!1), re(), void ae({
                        title: s(Ua.economicRestrictionsErrorHeading),
                        errorMsg: de(s, e.failureReason, e.expirationTimeInMinutes),
                        showDivId: La.transactionFailure
                    });
                    V(!1), re(), e.purchased || "TwoStepVerificationRequired" !== e.reason ? e.purchased ? (E(), y ? ye.success(s(Ua.purchaseCompleteHeading)) : ie({
                        assetIsWearable: !1,
                        transactionVerb: e.transactionVerb,
                        onDecline: function() {
                            window.location.reload()
                        }
                    })) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    }) : l()
                }).catch(function(e) {
                    console.debug(e), V(!1), re(), e && 400 !== (null == e ? void 0 : e.status) ? 429 === e.status ? ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.floodcheckFailureMessage, {
                            throttleTime: 1
                        }),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.generalPurchaseErrorMessage),
                        showDivId: La.transactionFailure
                    }) : ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.purchasingUnavailableMessage),
                        showDivId: La.transactionFailure
                    })
                })) : "Subscription" === c ? oe(e) : (e = {
                    expectedCurrency: f,
                    expectedPrice: e = e,
                    expectedSellerId: m
                }, 0 < p && (e.expectedPromoId = p), 0 < v && (e.userAssetId = v), w ? w({
                    params: e,
                    handleError: ae,
                    setLoading: V,
                    openConfirmation: ie,
                    closeAll: re
                }) : (V(!0), ke.purchaseItem(d, e).then(function(e) {
                    var t = e.data;
                    if (void 0 !== t.FailureReason && void 0 !== t.ExpirationTimeInMinutes) return V(!1), re(), void ae({
                        title: s(Ua.economicRestrictionsErrorHeading),
                        errorMsg: de(s, t.FailureReason, t.ExpirationTimeInMinutes),
                        showDivId: La.transactionFailure
                    });
                    console.debug(t);
                    var r = t.statusCode,
                        n = t.assetIsWearable,
                        e = t.transactionVerb;
                    V(!1), re(), t.purchased || "TwoStepVerificationRequired" !== t.reason ? 500 === r ? ae(t) : (E(), y ? ye.success(s(Ua.purchaseCompleteHeading)) : ie({
                        assetIsWearable: n,
                        transactionVerb: e,
                        onDecline: function() {
                            window.location.reload()
                        }
                    })) : l()
                }).catch(function(t) {
                    if (console.debug(t), V(!1), re(), t && (null == t ? void 0 : t.statusText) !== Ba.badRequest) {
                        429 === t.status && ae({
                            title: s(Ua.errorOccuredHeading),
                            errorMsg: s(Ua.floodcheckFailureMessage, {
                                throttleTime: 1
                            }),
                            showDivId: La.transactionFailure
                        });
                        try {
                            ae(JSON.parse(null == t ? void 0 : t.statusText))
                        } catch (e) {
                            ae({
                                errorMsg: null == t ? void 0 : t.statusText
                            })
                        }
                    } else ae({
                        title: s(Ua.errorOccuredHeading),
                        errorMsg: s(Ua.purchasingUnavailableMessage),
                        showDivId: La.transactionFailure
                    })
                })))
            }
            var le = function() {
                var e = Ma(regeneratorRuntime.mark(function e(r) {
                    var n, a, i, o, c;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = {
                                        collectibleItemId: S,
                                        expectedCurrency: f,
                                        expectedPrice: r,
                                        expectedPurchaserId: Le.CurrentUser.userId,
                                        expectedPurchaserType: "User",
                                        rentalOptionDays: A,
                                        expectedSellerId: m,
                                        expectedSellerType: b,
                                        idempotencyKey: Ue.uuidService.generateRandomUuid()
                                    }, P && (n.collectibleItemInstanceId = P), x && (n.collectibleProductId = x), w) return w({
                                    params: n,
                                    handleError: ae,
                                    setLoading: V,
                                    openConfirmation: ie,
                                    closeAll: re
                                }), t.abrupt("return");
                                t.next = 6;
                                break;
                            case 6:
                                return V(!0), a = P ? ke.purchaseCollectibleItemInstance : ke.purchaseCollectibleItem, t.prev = 8, t.next = 11, a(S, n);
                            case 11:
                                if (c = t.sent, void 0 !== (i = c.data).failureReason && void 0 !== i.expirationTimeInMinutes) return V(!1), re(), ae({
                                    title: s(Ua.economicRestrictionsErrorHeading),
                                    errorMsg: de(s, i.failureReason, i.expirationTimeInMinutes),
                                    showDivId: La.transactionFailure
                                }), t.abrupt("return");
                                t.next = 18;
                                break;
                            case 18:
                                if (o = i.transactionVerb, V(!1), re(), !("number" == typeof(c = null !== (c = i.statusCode) && void 0 !== c ? c : i.status) && 400 <= c || !1 === (null == i ? void 0 : i.purchased))) {
                                    t.next = 26;
                                    break
                                }!1 === (null == i ? void 0 : i.purchased) && "TwoStepVerificationRequired" === (null == i ? void 0 : i.reason) ? l() : !1 === (null == i ? void 0 : i.purchased) && "Flooded" === (null == i ? void 0 : i.purchaseResult) ? ae({
                                    title: s(Ua.errorOccuredHeading),
                                    errorMsg: s(Ua.floodcheckFailureMessage, {
                                        throttleTime: 1
                                    }),
                                    showDivId: La.transactionFailure
                                }) : "InsufficientBalance" === i.errorMessage ? Ie.open() : ae({
                                    title: s(Ua.errorOccuredHeading),
                                    errorMsg: s(Ua.purchasingUnavailableMessage),
                                    showDivId: La.transactionFailure,
                                    onDecline: function() {
                                        window.location.reload()
                                    }
                                }), t.next = 31;
                                break;
                            case 26:
                                if (E(), y) return ye.success(s(Ua.purchaseCompleteHeading)), t.abrupt("return");
                                t.next = 30;
                                break;
                            case 30:
                                ie({
                                    assetIsWearable: !0,
                                    transactionVerb: o,
                                    itemDelayed: null == i ? void 0 : i.pending,
                                    onDecline: function() {
                                        window.location.reload()
                                    }
                                });
                            case 31:
                                t.next = 42;
                                break;
                            case 33:
                                if (t.prev = 33, t.t0 = t.catch(8), console.debug(t.t0), Le.AccountIntegrityChallengeService.Generic.ChallengeError.matchAbandoned(W)) return V(!1), t.abrupt("return");
                                t.next = 39;
                                break;
                            case 39:
                                if (V(!1), re(), t.t0 && (null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.statusText) !== Ba.badRequest) {
                                    429 === t.t0.status && ae({
                                        title: s(Ua.errorOccuredHeading),
                                        errorMsg: s(Ua.floodcheckFailureMessage, {
                                            throttleTime: 1
                                        }),
                                        showDivId: La.transactionFailure
                                    });
                                    try {
                                        ae(JSON.parse(null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.statusText))
                                    } catch (e) {
                                        ae({
                                            errorMsg: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.statusText
                                        })
                                    }
                                } else ae({
                                    title: s(Ua.errorOccuredHeading),
                                    errorMsg: s(Ua.purchasingUnavailableMessage),
                                    showDivId: La.transactionFailure
                                });
                            case 42:
                            case "end":
                                return t.stop()
                        }
                    }, e, null, [
                        [8, 33]
                    ])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return U = fe ? Fe().createElement(fe, Ca({}, Ca({
                assetName: o,
                assetType: c,
                expectedPrice: t,
                thumbnail: r,
                sellerName: n,
                loading: R,
                onAction: function() {
                    return ce(t)
                }
            }, a))) : ee ? (a = "Subscription" === c && L ? function() {
                return oe(t, L), !1
            } : void 0, Fe().createElement(Se, {
                title: k || void 0,
                expectedPrice: t,
                displayPrice: U,
                thumbnail: r,
                assetName: o,
                assetType: c,
                assetTypeDisplayName: u,
                sellerName: n,
                isPlace: h,
                loading: R,
                currentRobuxBalance: e,
                rentalOptionDays: A,
                onAction: function() {
                    return ce(t), !1
                },
                primaryActionButtonText: _,
                onSecondaryAction: a,
                secondaryActionButtonText: i,
                footerDisclaimerText: N || void 0,
                priceSuffix: j || void 0
            })) : Fe().createElement(we, {
                expectedPrice: t,
                displayPrice: U,
                thumbnail: r,
                assetName: o,
                assetType: c,
                assetTypeDisplayName: u,
                sellerName: n,
                isPlace: h,
                loading: R,
                collectibleItemId: S,
                collectibleItemInstanceId: P,
                currentRobuxBalance: e,
                onAction: function() {
                    return ce(t), !1
                }
            }), 0 < B && Le.ItemPurchaseUpsellService && ne(B, null != G ? G : t), Fe().createElement(Fe().Fragment, null, Fe().createElement(Ve, {
                isTwoStepVerificationActive: Q,
                stopTwoStepVerification: function() {
                    return Z(!1)
                },
                systemFeedbackService: ge
            }), Fe().createElement(xe, {
                robuxNeeded: B
            }), (!B || B <= 0) && U, W && Fe().createElement(Ce, {
                title: W.title,
                message: W.message,
                onDecline: W.onDecline
            }), null != G && Fe().createElement(Te, {
                expectedPrice: t,
                currentPrice: G,
                loading: R,
                onAction: function() {
                    return ce(G), !1
                }
            }), O && Fe().createElement(Ae, Ca({
                thumbnail: r,
                assetName: o,
                assetType: c,
                assetTypeDisplayName: u,
                sellerName: n,
                isPlace: h,
                isPrivateServer: g,
                expectedPrice: G || t,
                currentRobuxBalance: e
            }, O)), y && Fe().createElement(be, null), q && Fe().createElement(he, null))
        }
        return t.defaultProps = {
            isPlace: !1,
            isPrivateServer: !1,
            productId: null,
            assetTypeDisplayName: "",
            expectedPromoId: 0,
            userAssetId: 0,
            showSuccessBanner: !1,
            handlePurchase: null,
            onPurchaseSuccess: function() {
                return null
            },
            customProps: {},
            collectibleItemId: null,
            collectibleItemInstanceId: null,
            collectibleProductId: null,
            sellerType: null,
            isLimited: !1,
            saleLocationId: null,
            rentalOptionDays: null,
            subscriptionTargetKey: null,
            subscriptionPlaceId: 0,
            subscriptionPaymentProvider: "",
            subscriptionSecondaryPaymentProvider: "",
            subscriptionTitle: "",
            primaryActionButtonText: "",
            secondaryActionButtonText: "",
            subscriptionFooterDisclaimer: "",
            subscriptionCancelPath: "",
            displayPrice: "",
            priceSuffix: ""
        }, t.propTypes = {
            translate: r().func.isRequired,
            productId: function(e, t, r) {
                var n = e.collectibleItemId,
                    a = e.productId,
                    e = e.subscriptionTargetKey;
                return n || e || "number" == typeof a ? null : new Error("Invalid prop ".concat(t, " supplied to ").concat(r, ". Validation failed."))
            },
            expectedCurrency: r().number.isRequired,
            expectedPrice: r().number.isRequired,
            thumbnail: r().node.isRequired,
            assetName: r().string.isRequired,
            assetType: r().string.isRequired,
            assetTypeDisplayName: r().string,
            expectedSellerId: r().number.isRequired,
            sellerName: r().string.isRequired,
            sellerType: r().string,
            isPlace: r().bool,
            isPrivateServer: r().bool,
            expectedPromoId: r().number,
            userAssetId: r().number,
            showSuccessBanner: r().bool,
            handlePurchase: r().func,
            onPurchaseSuccess: r().func,
            customProps: r().func,
            collectibleItemId: r().string,
            collectibleItemInstanceId: r().string,
            collectibleProductId: r().string,
            isLimited: r().bool,
            saleLocationId: r().number,
            rentalOptionDays: r().number,
            subscriptionTargetKey: r().string,
            subscriptionPlaceId: r().number,
            subscriptionPaymentProvider: r().string,
            subscriptionSecondaryPaymentProvider: r().string,
            subscriptionTitle: r().string,
            primaryActionButtonText: r().string,
            secondaryActionButtonText: r().string,
            subscriptionFooterDisclaimer: r().string,
            subscriptionCancelPath: r().string,
            displayPrice: r().string,
            priceSuffix: r().string
        }, [(0, n.withTranslations)(t, o.purchasingResources), {
            start: function() {
                function r() {
                    (me || Pe).open()
                }

                function n() {
                    (me || Ee).open()
                }
                if (pe) return r(), void ue();
                Ma(regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !1, e.prev = 1, e.next = 4, Ta();
                            case 4:
                                t = e.sent, e.next = 12;
                                break;
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(1), n(), ue(), e.abrupt("return");
                            case 12:
                                try {
                                    (t ? r : n)()
                                } finally {
                                    ue()
                                }
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 7]
                    ])
                }))()
            }
        }]
    }
    var qa = HeaderScripts;

    function Ha(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Va(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Va(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Va(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var Wa = m,
        za = function(e, t, r) {
            function n() {
                o({
                    loading: !1,
                    loadFailure: !0
                })
            }
            var a = Ha((0, De.useState)({
                    expectedSellerId: 0,
                    owned: !1,
                    isPurchasable: !1,
                    id: 0,
                    itemType: "",
                    assetType: "",
                    name: "",
                    description: "",
                    productId: 0,
                    creatorTargetId: 0,
                    creatorName: "",
                    price: null,
                    loading: !0,
                    loadFailure: !1,
                    premiumPricing: null,
                    premiumDiscountPercentage: null,
                    hasLimitedPrivateSales: !1,
                    isPublicDomain: !1,
                    premiumPriceInRobux: null,
                    assetTypeDisplayName: "",
                    offSaleDeadline: null,
                    unitsAvailableForConsumption: 0,
                    isLimited: !1,
                    resellerAvailable: !1,
                    firstReseller: {},
                    priceStatus: "",
                    isMarketPlaceEnabled: !0
                }), 2),
                i = a[0],
                o = a[1],
                c = (0, De.useCallback)(function() {
                    e(t, r).then(function(e) {
                        var e = e.data,
                            t = {
                                expectedSellerId: e.expectedSellerId,
                                owned: e.owned,
                                id: e.id,
                                itemType: e.itemType,
                                assetType: e.assetType,
                                name: e.name,
                                description: e.description,
                                productId: e.productId,
                                price: e.price,
                                lowestPrice: e.lowestPrice,
                                creatorTargetId: e.creatorTargetId,
                                creatorName: e.creatorName,
                                hasLimitedPrivateSales: void 0 !== e.lowestPrice,
                                isPublicDomain: 0 === e.price,
                                offSaleDeadline: e.offSaleDeadline,
                                isLimited: e.itemRestrictions.includes("Limited") || e.itemRestrictions.includes("LimitedUnique"),
                                unitsAvailableForConsumption: void 0 !== e.unitsAvailableForConsumption ? e.unitsAvailableForConsumption : 0,
                                priceStatus: void 0 !== e.priceStatus ? e.priceStatus : "",
                                itemRestrictions: e.itemRestrictions
                            };
                        void 0 !== e.premiumPricing && (t.premiumPriceInRobux = e.premiumPricing.premiumPriceInRobux, t.premiumDiscountPercentage = e.premiumPricing.premiumDiscountPercentage), t.isLimited && (t.price = void 0 !== t.lowestPrice ? t.lowestPrice : t.price, je.getResellerDetail(t.id).then(function(e) {
                            t.resellerAvailable = 0 < e.data.data.length, t.resellerAvailable && (e = Ha(e.data.data, 1)[0], t.price = e.price, t.firstReseller = e)
                        })), je.getItemPurchasableDetail(e.productId).then(function(e) {
                            !e.data.purchasable && e.data.reason && e.data.reason !== Wa.insufficientFunds ? t.isPurchasable = e.data.purchasable : t.isPurchasable = !0, t.assetTypeDisplayName = e.data.assetTypeDisplayName, t.loading = !1, t.loadFailure = !1, je.getEconomyMetadata().then(function(e) {
                                t.isMarketPlaceEnabled = e.data.isMarketPlaceEnabled && e.data.isItemsXchangeEnabled, o(t)
                            }).catch(function() {
                                n()
                            })
                        }).catch(function(e) {
                            e.statusText === Wa.unauthorizedMessage ? (t.loading = !1, t.loadFailure = !1, o(t)) : n()
                        })
                    }).catch(function() {
                        n()
                    })
                }, [t, r, e]);
            return (0, De.useEffect)(function() {
                c()
            }, []), {
                itemDetail: i,
                loadItemDetail: c
            }
        },
        v = function() {
            var e = document.getElementById("item-container");
            return e ? {
                itemDetailItemId: parseInt(e.getAttribute("data-item-id"), 10),
                itemDetailItemType: e.getAttribute("data-item-type")
            } : null
        },
        Ga = RobloxThumbnails;

    function Xa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var fn = _a(),
        Ya = (i = (mn = 2, function(e) {
            if (Array.isArray(e)) return e
        }(fn = fn) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(fn, mn) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Xa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xa(e, t)
        }(fn, mn) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()))[0],
        Ka = i[1],
        $a = Ao,
        Qa = O.getPremiumConversionUrl;

    function Za(e) {
        var t = e.translate,
            r = e.productId,
            n = e.price,
            a = e.itemName,
            i = e.itemType,
            o = e.assetTypeDisplayName,
            c = e.sellerName,
            l = e.expectedSellerId,
            s = e.isPurchasable,
            u = e.isOwned,
            d = e.isPlugin,
            f = e.itemDetailItemId,
            m = e.loading,
            p = e.userQualifiesForPremiumPrices,
            v = e.premiumPriceInRobux,
            b = e.isAuthenticated,
            y = e.resellerAvailable,
            h = e.firstReseller,
            y = e.isMarketPlaceEnabled && (y || s),
            s = function() {
                return t(0 === n ? $a.getAction : $a.buyAction)
            };
        if (m) return Fe().createElement(N.Loading, null);
        if (!b) return null != v ? Fe().createElement(N.Button, {
            id: "upgrade-button",
            className: "btn-fixed-width-lg btn-primary-lg",
            onClick: function() {
                P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.PREMIUM_UPSELL, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.GET_PREMIUM), window.open(Qa(f, i))
            }
        }, t($a.getPremiumAction)) : Fe().createElement(N.Button, {
            className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
            onClick: function() {
                window.location = "/login"
            }
        }, s());
        b = Fe().createElement(Ga.Thumbnail2d, {
            type: "bundle" === i ? Ga.ThumbnailTypes.bundleThumbnail : Ga.ThumbnailTypes.assetThumbnail,
            size: Ga.DefaultThumbnailSize,
            targetId: f,
            format: Ga.ThumbnailFormat.webp,
            altName: a
        });
        return d && (u || 0 === n) ? Fe().createElement(Fe().Fragment, null, Fe().createElement(N.Button, {
            className: "btn-fixed-width-lg btn-primary-lg InstallButton",
            onClick: function() {
                var e;
                e = f, Le.GameLauncher.openPluginInStudio(e)
            }
        }, Fe().createElement("span", null, t($a.installAction)))) : Fe().createElement(Fe().Fragment, null, Fe().createElement(N.Button, {
            className: "btn-fixed-width-lg btn-growth-lg PurchaseButton",
            onClick: Ka.start,
            isDisabled: !y
        }, s()), Fe().createElement(Ya, {
            productId: r,
            expectedPrice: p && null != v ? v : n,
            thumbnail: b,
            assetTypeDisplayName: o,
            assetName: a,
            sellerName: h ? h.seller.name : c,
            expectedSellerId: h ? h.seller.id : l,
            userAssetId: h ? h.userAssetId : 0,
            showSuccessBanner: !0
        }))
    }
    Za.propTypes = {
        translate: r().func.isRequired,
        productId: r().number.isRequired,
        price: r().number.isRequired,
        itemName: r().string.isRequired,
        itemType: r().string.isRequired,
        assetTypeDisplayName: r().string.isRequired,
        sellerName: r().string.isRequired,
        expectedSellerId: r().number.isRequired,
        isPurchasable: r().bool.isRequired,
        isOwned: r().bool.isRequired,
        isPlugin: r().bool.isRequired,
        itemDetailItemId: r().number.isRequired,
        loading: r().bool.isRequired,
        userQualifiesForPremiumPrices: r().bool.isRequired,
        premiumPriceInRobux: r().number.isRequired,
        isAuthenticated: r().bool.isRequired,
        resellerAvailable: r().bool.isRequired,
        firstReseller: r().shape({
            seller: {
                name: r().string.isRequired,
                id: r().number.isRequired
            },
            userAssetId: r().number.isRequired
        }).isRequired,
        isMarketPlaceEnabled: r().bool.isRequired
    };
    var Ja = (0, n.withTranslations)(Za, o.itemResources),
        ei = Ao;

    function ti(e) {
        var t = e.translate,
            r = e.isLimited,
            e = e.resellerAvailable,
            e = r && e;
        return Fe().createElement("div", {
            className: "text-label field-label price-label"
        }, Fe().createElement("span", null, t(e ? ei.bestPriceLabel : ei.priceLabel)))
    }
    ti.propTypes = {
        translate: r().func.isRequired,
        isLimited: r().bool.isRequired,
        resellerAvailable: r().bool.isRequired
    };
    var ri = (0, n.withTranslations)(ti, o.itemResources),
        ni = Ao,
        ai = m,
        ii = O.getPremiumConversionUrl;

    function oi(e) {
        function t(e) {
            P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_PREMIUM_PURCHASE, !1, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.PREMIUM_UPSELL, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, e.target.innerText)
        }
        var r = e.translate,
            n = e.price,
            a = e.itemType,
            i = e.itemDetailItemId,
            o = e.premiumPriceInRobux,
            c = e.premiumDiscountPercentage,
            l = e.userQualifiesForPremiumPrices,
            s = e.isOwned,
            u = e.loading,
            d = e.loadFailure,
            f = e.unitsAvailableForConsumption,
            m = e.isLimited,
            p = e.isPlugin,
            v = e.resellerAvailable,
            b = e.priceStatus,
            y = e.offSaleDeadline,
            h = e.isMarketPlaceEnabled,
            g = null == o && null == n,
            w = !0,
            e = "";
        return u ? Fe().createElement(N.Loading, null) : (!u && d ? e = ai.retryErrorMessage : b === ni.offSale && null === y ? e = r(ni.itemNoLongerForSaleLabel) : h || s ? p || !s || m ? m && 0 === f && !v ? e = r(ni.noOneCurrentlySellingLabel) : w = !1 : e = r(ni.itemAvailableInventoryLabel) : e = r(ni.purchasingTemporarilyUnavailableLabel), 0 === n ? null : w && !s ? Fe().createElement("div", {
            className: "price-container-text"
        }, Fe().createElement("div", {
            className: "item-first-line"
        }, " ", e, " ")) : Fe().createElement(Fe().Fragment, null, Fe().createElement("div", {
            className: "price-container-text"
        }, w ? Fe().createElement("div", {
            className: "item-first-line"
        }, " ", e, " ") : null, Fe().createElement(ri, {
            translate: r,
            isLimited: m,
            resellerAvailable: v
        }), Fe().createElement("div", {
            className: "price-info"
        }, Fe().createElement("div", {
            className: "icon-text-wrapper clearfix icon-robux-price-container"
        }, g ? Fe().createElement("span", {
            className: "icon-robux-16x16 icon-robux-gray-16x16 wait-for-i18n-format-render"
        }) : Fe().createElement("span", {
            className: "icon-robux-16x16 wait-for-i18n-format-render"
        }), Fe().createElement("span", {
            className: "text-robux-lg wait-for-i18n-format-render"
        }, l && null != o ? Ue.numberFormat.getNumberFormat(o) : Ue.numberFormat.getNumberFormat(n)))), function() {
            if (null == o || s) return null;
            if (null == n) return l ? Fe().createElement("span", {
                className: "small text field-content empty-label wait-for-i18n-format-render"
            }, r(ni.premiumExclusiveEligiblePromptLabel)) : Fe().createElement("span", {
                className: "small text field-content empty-label wait-for-i18n-format-render"
            }, r(ni.premiumExclusiveIneligiblePromptLabel));
            var e = {
                originalPrice: (0, A.renderToString)(Fe().createElement(F, {
                    price: n
                })),
                discountPercentage: c,
                premiumDiscountedPrice: (0, A.renderToString)(Fe().createElement(F, {
                    price: o
                }))
            };
            return Fe().createElement(Fe().Fragment, null, Fe().createElement("div", {
                className: "text-label field-label empty-label"
            }, " "), Fe().createElement("span", {
                className: "premium-prompt small text field-content empty-label wait-for-i18n-format-render"
            }, l ? Fe().createElement("a", {
                "aria-label": " ",
                href: ii(i, a),
                dangerouslySetInnerHTML: {
                    __html: r(ni.premiumDiscountSavingsLabel, e)
                },
                onClick: function(e) {
                    t(e), window.open(ii(i, a))
                }
            }) : Fe().createElement("a", {
                "aria-label": " ",
                href: ii(i, a),
                dangerouslySetInnerHTML: {
                    __html: r(ni.premiumDiscountOpportunityPromptLabel, e)
                },
                onClick: function(e) {
                    t(e), window.open(ii(i, a))
                }
            })))
        }())))
    }
    oi.propTypes = {
        translate: r().func.isRequired,
        price: r().number.isRequired,
        itemType: r().string.isRequired,
        itemDetailItemId: r().number.isRequired,
        premiumPriceInRobux: r().number.isRequired,
        premiumDiscountPercentage: r().number.isRequired,
        userQualifiesForPremiumPrices: r().bool.isRequired,
        loading: r().bool.isRequired,
        isOwned: r().bool.isRequired,
        loadFailure: r().bool.isRequired,
        unitsAvailableForConsumption: r().number.isRequired,
        isLimited: r().bool.isRequired,
        isPlugin: r().bool.isRequired,
        resellerAvailable: r().bool.isRequired,
        priceStatus: r().string.isRequired,
        offSaleDeadline: r().string.isRequired,
        isMarketPlaceEnabled: r().bool.isRequired
    };
    var ci = (0, n.withTranslations)(oi, o.itemModelResources);

    function li(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return si(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return si(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function si(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var ui = Ao;

    function di(e) {
        var t = e.translate,
            r = e.offSaleDeadline,
            e = li((0, De.useState)(0), 2),
            n = e[0],
            a = e[1],
            e = li((0, De.useState)(0), 2),
            i = e[0],
            o = e[1],
            e = li((0, De.useState)(0), 2),
            c = e[0],
            l = e[1],
            e = li((0, De.useState)(0), 2),
            s = e[0],
            u = e[1];
        (0, De.useEffect)(function() {
            function e() {
                var e;
                new Date < new Date(r) && (e = +new Date, e = (new Date(r).getTime() - e) / 1e3, a(Math.floor(e / 86400)), o(Math.floor(e / 3600 % 24)), l(Math.floor(e / 60 % 60)), u(Math.floor(e % 60)))
            }
            var t;
            return e(), t = setInterval(e, 1e3),
                function() {
                    return clearInterval(t)
                }
        }, [a, o, l, u]);
        return Fe().createElement("div", {
            id: "sale-clock",
            className: "text-error sale-clock desktop-sale-clock"
        }, function() {
            if (n < 1) {
                var e = {
                    numberOfHours: i,
                    numberOfMinutes: c,
                    numberOfSeconds: s
                };
                return Fe().createElement("div", {
                    className: "text",
                    dangerouslySetInnerHTML: {
                        __html: t(ui.OffsaleCountdownHourMinuteSecondLabel, e)
                    }
                })
            }
            if (s < 1) return window.location.reload(), null;
            e = {
                numberOfDays: n,
                numberOfHours: i,
                numberOfMinutes: c
            };
            return Fe().createElement("div", {
                className: "text",
                dangerouslySetInnerHTML: {
                    __html: t(ui.CountdownTimerDayHourMinute, e)
                }
            })
        }())
    }
    di.propTypes = {
        translate: r().func.isRequired,
        offSaleDeadline: r().string.isRequired
    };
    var fi = (0, n.withTranslations)(di, o.itemResources),
        mi = Ao,
        pi = u,
        vi = d,
        bi = O.getInventoryUrl;

    function yi(e) {
        var t = e.translate,
            r = e.assetType,
            n = qa.deviceMeta.getDeviceMeta(),
            a = "phone" === n.deviceType,
            e = bi(qa.authenticatedUser.id),
            i = r === pi.Plugin || r === pi.Decal || r === pi.Model || r === pi.Video || r === pi.Animation ? vi.Library : r === pi.Place || r === pi.Badge || r === pi.GamePass || r === pi.Animation ? null : vi.Catalog;
        return i !== vi.Catalog || n.isInApp || !qa.deviceMeta.isAndroidApp && !qa.deviceMeta.isIosApp || !qa.deviceMeta.isPhone && !qa.deviceMeta.isTablet ? i !== vi.Catalog || a ? Fe().createElement("a", {
            id: "inventory-button",
            href: e,
            className: "btn-fixed-width-lg btn-control-md"
        }, t(mi.inventoryAction)) : Fe().createElement("a", {
            id: "edit-avatar-button",
            href: "/my/avatar",
            className: "btn-control-md"
        }, Fe().createElement("span", {
            className: "icon-nav-charactercustomizer"
        })) : Fe().createElement("a", {
            id: "open-in-avatar-editor-button",
            href: "/#",
            className: "btn-fixed-width-lg btn-control-md"
        }, Fe().createElement("span", {
            className: "icon-nav-charactercustomizer"
        }))
    }
    yi.propTypes = {
        translate: r().func.isRequired,
        assetType: r().number.isRequired
    };
    var hi = (0, n.withTranslations)(yi, o.itemResources),
        gi = v,
        wi = u;

    function Ei(e) {
        var t = e.translate,
            e = gi(),
            r = e.itemDetailItemId,
            e = e.itemDetailItemType,
            n = za(je.getItemDetails, r, e).itemDetail;
        return Fe().createElement(Fe().Fragment, null, Fe().createElement(ci, {
            translate: t,
            price: n.price,
            itemType: n.itemType,
            itemDetailItemId: r,
            premiumPriceInRobux: n.premiumPriceInRobux,
            premiumDiscountPercentage: n.premiumDiscountPercentage,
            userQualifiesForPremiumPrices: qa.authenticatedUser.isPremiumUser,
            isOwned: n.owned,
            loading: n.loading,
            loadFailure: n.loadFailure,
            unitsAvailableForConsumption: n.unitsAvailableForConsumption,
            isLimited: n.isLimited,
            isPlugin: n.assetType === wi.Plugin,
            resellerAvailable: n.resellerAvailable,
            priceStatus: n.priceStatus,
            offSaleDeadline: n.offSaleDeadline,
            isMarketPlaceEnabled: n.isMarketPlaceEnabled
        }), !n.loadFailure && (n.owned && (!n.isLimited || 0 < n.unitsAvailableForConsumption) ? Fe().createElement("div", {
            className: "action-button"
        }, Fe().createElement(hi, {
            translate: t,
            assetType: n.assetType
        })) : Fe().createElement("div", {
            className: "action-button"
        }, Fe().createElement(Ja, {
            translate: t,
            productId: n.productId,
            price: n.price,
            itemType: n.itemType,
            assetTypeDisplayName: n.assetTypeDisplayName,
            itemName: n.name,
            sellerName: n.creatorName,
            expectedSellerId: n.expectedSellerId,
            isPurchasable: n.isPurchasable,
            isOwned: n.owned,
            isInstallable: n.assetType === wi.Plugin,
            itemDetailItemId: r,
            loading: n.loading,
            hasLimitedPrivateSales: n.hasLimitedPrivateSales,
            userQualifiesForPremiumPrices: qa.authenticatedUser.isPremiumUser,
            premiumPriceInRobux: n.premiumPriceInRobux,
            isAuthenticated: qa.authenticatedUser.isAuthenticated,
            unitsAvailableForConsumption: n.unitsAvailableForConsumption,
            isLimited: n.isLimited,
            resellerAvailable: n.resellerAvailable,
            firstReseller: n.firstReseller,
            isMarketPlaceEnabled: n.isMarketPlaceEnabled
        }), null !== n.offSaleDeadline && Fe().createElement(fi, {
            translate: t,
            offSaleDeadline: n.offSaleDeadline
        }))))
    }
    Ei.propTypes = {
        translate: r().func.isRequired
    };
    var Si = Ei;

    function Pi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return xi(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function xi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function Ii(t, e) {
        var r, n = Object.keys(t);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), n.push.apply(n, r)), n
    }

    function Ai(n) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ii(Object(a), !0).forEach(function(e) {
                var t, r;
                t = n, e = a[r = e], r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Ii(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return n
    }
    var Ri, s = function(e, t) {
            e = Ai(Ai({}, e), {}, {
                expectedSellerId: t.expectedSellerId,
                owned: t.owned,
                id: t.id,
                itemType: t.itemType,
                assetType: t.assetType,
                name: t.name,
                description: t.description,
                productId: t.productId,
                price: t.price,
                lowestPrice: t.lowestPrice,
                creatorTargetId: t.creatorTargetId,
                creatorName: t.creatorName,
                hasLimitedPrivateSales: void 0 !== t.lowestPrice,
                isPublicDomain: 0 === t.price,
                offSaleDeadline: t.offSaleDeadline,
                isLimited: t.itemRestrictions.includes("Limited") || t.itemRestrictions.includes("LimitedUnique"),
                collectibleItemId: t.collectibleItemId,
                collectibleItemDetails: t.collectibleItemDetails,
                unitsAvailableForConsumption: void 0 !== t.unitsAvailableForConsumption ? t.unitsAvailableForConsumption : 0,
                priceStatus: null !== (e = t.priceStatus) && void 0 !== e ? e : t.priceStatus,
                itemRestrictions: t.itemRestrictions
            });
            return void 0 !== t.premiumPricing && (e.premiumPriceInRobux = t.premiumPricing.premiumPriceInRobux, e.premiumDiscountPercentage = t.premiumPricing.premiumDiscountPercentage), e.isLimited && (e.price = void 0 !== e.lowestPrice ? e.lowestPrice : e.price), void 0 !== e.collectibleItemId && (e.resellerAvailable = t.hasResellers, e.isPurchasable = void 0 !== t.lowestPrice, e.isMarketPlaceEnabled = "ShopAndAllExperiences" === t.saleLocationType || "ShopOnly" === t.saleLocationType), e
        },
        i = function(e, t) {
            e = Ai({}, e);
            return e.resellerAvailable = 0 < t.data.data.length, e.resellerAvailable && (t = Pi(t.data.data, 1)[0], e.price = t.price, e.firstReseller = t), e
        },
        d = function(e, t, r) {
            var n = m,
                e = Ai({}, e);
            return !t.purchasable && t.reason && t.reason !== n.insufficientFunds && t.reason !== n.twoStepVerificationRequired ? e.isPurchasable = t.purchasable : (!t.purchasable && t.reason && t.reason === n.twoStepVerificationRequired && (e.twoStepVerificationRequired = !0), e.isPurchasable = !0), e.assetTypeDisplayName = t.assetTypeDisplayName, e.loading = !1, e.loadFailure = !1, e.isMarketPlaceEnabled = r.data.isMarketPlaceEnabled && r.data.isItemsXchangeEnabled, e
        },
        v = function(e) {
            e = Ai({}, e);
            return e.isPurchasable = !1, e
        };
    (u = Ri = Ri || {}).Asset = "asset", u.Bundle = "bundle";
    var Ti = Ri;

    function Ni(e, t, r, n, a, i, o) {
        try {
            var c = e[i](o),
                l = c.value
        } catch (e) {
            return void r(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(n, a)
    }

    function Ci(c) {
        return function() {
            var e = this,
                o = arguments;
            return new Promise(function(t, r) {
                var n = c.apply(e, o);

                function a(e) {
                    Ni(n, t, r, a, i, "next", e)
                }

                function i(e) {
                    Ni(n, t, r, a, i, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function Oi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Mi(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Mi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var Di, Fi = y,
        Ui = s,
        Li = i,
        Bi = d,
        ki = v,
        ji = function(i) {
            var a = (r = Oi((0, De.useState)(), 2))[0],
                t = r[1],
                e = Oi((0, De.useState)([]), 2),
                r = e[0],
                o = e[1],
                c = (e = Oi((0, De.useState)({}), 2))[0],
                l = e[1],
                n = 0,
                s = function() {
                    n < Fi ? (v(), n += 1) : o([{
                        loading: !1,
                        loadFailure: !0
                    }])
                },
                u = (0, De.useCallback)(function() {
                    qa.authenticatedUser.isAuthenticated ? je.getEconomyMetadata().then(function(e) {
                        t(e)
                    }).catch(function() {
                        s()
                    }) : t({
                        data: {
                            isMarketplaceEnabled: !1,
                            isItemsXchangeEnabled: !1
                        }
                    })
                }, []);

            function d(e) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = Ci(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.inCache) return e.abrupt("return", c[t.itemType.toLowerCase()][t.id]);
                                e.next = 2;
                                break;
                            case 2:
                                if ((r = Ui({}, t)).isLimited) return e.prev = 4, e.next = 7, je.getResellerDetail(r.id);
                                e.next = 14;
                                break;
                            case 7:
                                n = e.sent, r = Li(r, n), e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(4), r.resellerAvailable = !1;
                            case 14:
                                if (void 0 === t.productId) {
                                    e.next = 24;
                                    break
                                }
                                if (!qa.authenticatedUser.isAuthenticated) {
                                    e.next = 23;
                                    break
                                }
                                if (void 0 === r.collectibleItemId) return e.next = 19, je.getItemPurchasableDetail(t.productId);
                                e.next = 21;
                                break;
                            case 19:
                                n = e.sent, r = Bi(r, n.data, a);
                            case 21:
                                e.next = 24;
                                break;
                            case 23:
                                r = ki(r);
                            case 24:
                                return e.abrupt("return", r);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [4, 11]
                    ])
                }))).apply(this, arguments)
            }

            function m() {
                return (m = Ci(regeneratorRuntime.mark(function e(t) {
                    var r, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.all(t.map(function(e) {
                                    return d(e)
                                }));
                            case 3:
                                r = e.sent, o(r), n = c, r.forEach(function(e) {
                                    e.isLimited || c[e.itemType.toLowerCase()][e.id] || (n[e.itemType.toLowerCase()][e.id] = e)
                                }), l(n), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), s();
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 10]
                    ])
                }))).apply(this, arguments)
            }

            function p() {
                return (p = Ci(regeneratorRuntime.mark(function e() {
                    var t, r, n, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = [], i.forEach(function(e) {
                                        void 0 === c[e.itemType.toLowerCase()][e.id] && t.push(e)
                                    }), 0 < t.length) return n = [], t.map(function(e) {
                                    return n.push({
                                        itemType: e.itemType,
                                        id: e.id
                                    })
                                }), e.next = 7, Le.ItemDetailsHydrationService.getItemDetails(n, !1, !0);
                                e.next = 8;
                                break;
                            case 7:
                                r = e.sent;
                            case 8:
                                return a = [], i.forEach(function(t) {
                                    var e;
                                    void 0 === c[t.itemType.toLowerCase()][t.id] ? (e = r.find(function(e) {
                                        return e.id === t.id && e.itemType.toLowerCase() === t.itemType.toLowerCase()
                                    })) && a.push(e) : a.push({
                                        id: t.id,
                                        itemType: t.itemType,
                                        inCache: !0
                                    })
                                }), e.abrupt("return", a);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var v = (0, De.useCallback)(function() {
                (function() {
                    return p.apply(this, arguments)
                })().then(function(e) {
                    try {
                        ! function() {
                            m.apply(this, arguments)
                        }(e)
                    } catch (e) {
                        s()
                    }
                }).catch(function() {
                    s()
                })
            }, [a, i, d]);
            return (0, De.useEffect)(function() {
                var e = {};
                e[Ti.Asset] = {}, e[Ti.Bundle] = {}, l(e), u()
            }, []), (0, De.useEffect)(function() {
                void 0 !== a && v()
            }, [a, i]), {
                itemDetails: r,
                batchLoadItemDetails: v
            }
        },
        _i = {
            Neutral: "bg-shift-300",
            Contrast: "bg-system-contrast",
            Success: "bg-system-success",
            Warning: "bg-system-warning",
            Alert: "bg-system-alert",
            OverMedia: "bg-[var(--light-mode-surface-100)]"
        },
        qi = {
            Neutral: "content-emphasis",
            Contrast: "content-inverse-emphasis",
            Success: "content-[var(--light-mode-content-emphasis)]",
            Warning: "content-[var(--light-mode-content-emphasis)]",
            Alert: "content-[var(--dark-mode-content-emphasis)]",
            OverMedia: "content-[var(--light-mode-content-emphasis)]"
        },
        Hi = {
            Neutral: "stroke-none",
            Contrast: "stroke-none",
            Success: "stroke-none",
            Warning: "stroke-none",
            Alert: "stroke-none",
            OverMedia: "stroke-standard"
        },
        Vi = Fe().forwardRef(function(e, t) {
            var r = e.className,
                n = e.label,
                a = e.variant,
                i = void 0 === a ? "Neutral" : a,
                o = e.icon,
                a = ze(e, ["className", "label", "variant", "icon"]),
                e = o && !n;
            return Fe().createElement("div", We({
                ref: t
            }, a, {
                className: Ge("foundation-web-badge flex items-center radius-circle select-none height-600 gap-xsmall", e ? "width-600 justify-center" : "width-[fit-content] padding-x-small", _i[i], qi[i], Hi[i], r),
                style: {
                    borderColor: "var(--light-mode-stroke-default)"
                }
            }), o && Fe().createElement(kr, {
                name: o,
                size: "XSmall"
            }), n && Fe().createElement("span", {
                className: Ge("text-no-wrap text-truncate-split text-label-small", qi[i])
            }, n))
        });
    Vi.displayName = "Badge", (v = Di = Di || {}).Success = "Success", v.AlreadyOwned = "ALREADY_OWNED", v.InsufficientFunds = "INSUFFICIENT_ROBUX", v.ExceptionOccured = "INTERNAL", v.TooManyPurchases = "QUOTA_EXCEEDED", v.CaughtError = "CaughtError", v.PremiumNeeded = "INSUFFICIENT_MEMBERSHIP", v.NoSellers = "NOT_FOR_SALE", v.TwoStepVerificationRequired = "TwoStepVerificationRequired", v.InExperienceOnly = "PURCHASE_PLACE_INVALID";
    var Wi = Di;

    function zi(e, t, r, n, a, i, o) {
        try {
            var c = e[i](o),
                l = c.value
        } catch (e) {
            return void r(e)
        }
        c.done ? t(l) : Promise.resolve(l).then(n, a)
    }

    function Gi(c) {
        return function() {
            var e = this,
                o = arguments;
            return new Promise(function(t, r) {
                var n = c.apply(e, o);

                function a(e) {
                    zi(n, t, r, a, i, "next", e)
                }

                function i(e) {
                    zi(n, t, r, a, i, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function Xi(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Yi(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Yi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var Ki = p,
        $i = Ao,
        Qi = b,
        Zi = f,
        Ji = h;

    function eo(e) {
        var t = e.itemsCount,
            r = e.item,
            n = e.index,
            a = e.timedOption,
            i = e.translate,
            o = r.name,
            e = t - Qi,
            n = Qi < t && n === Qi - 1;
        return Fe().createElement("div", {
            className: "modal-multi-item-image-container"
        }, a && Fe().createElement("div", {
            className: "timed-options-badge-container"
        }, Fe().createElement(Vi, {
            variant: "Neutral",
            icon: "icon-regular-clock",
            className: "bg-surface-0",
            label: null != a && a.days ? i($i.timedOptionDaysAbbreviation, {
                days: a.days
            }) : ""
        })), Fe().createElement(Ga.Thumbnail2d, {
            type: r.itemType.toLowerCase() === Ti.Bundle ? Ga.ThumbnailTypes.bundleThumbnail : Ga.ThumbnailTypes.assetThumbnail,
            size: Ga.DefaultThumbnailSize,
            targetId: r.id,
            containerClass: "batch-buy-thumbnail",
            format: Ga.ThumbnailFormat.webp,
            altName: o
        }), n && Fe().createElement("div", {
            className: "thumb-overlay"
        }, Fe().createElement("div", {
            className: "font-header-1"
        }, "＋", e)))
    }
    var to = function(e, t) {
        var r = Xi(t.split("/"), 4),
            n = r[2],
            a = r[3],
            t = Math.ceil(a / 60);
        if (24 < t) {
            r = Math.ceil(t / 24);
            return {
                success: !1,
                message: "Text.EconomicRestrictionsDaysGeneral",
                params: {
                    violation: e(null !== (a = Ki[n]) && void 0 !== a ? a : "Label.Sublabel.FraudPaymentAbuse"),
                    day: r
                }
            }
        }
        return {
            success: !1,
            message: "Text.EconomicRestrictionsHoursGeneral",
            params: {
                violation: e(null !== (n = Ki[n]) && void 0 !== n ? n : "Label.Sublabel.FraudPaymentAbuse"),
                hour: t
            }
        }
    };

    function ro() {
        return (ro = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r, n = arguments[t];
                for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function no(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return ao(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ao(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ao(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var io = Ao,
        oo = function() {
            return Le.Guac.callBehaviour("vng-buy-robux")
        };

    function co(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return lo(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lo(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function lo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var so, uo = Ao,
        fo = (Ao = co(j(), 2))[0],
        mo = Ao[1],
        po = (Ao = co((so = (h = Xi((0, N.createModal)(), 2))[0], h = h[1], bo.defaultProps = {
            title: "",
            loading: !1
        }, bo.propTypes = {
            translate: r().func.isRequired,
            title: r().string,
            expectedTotalPrice: r().number.isRequired,
            items: r().arrayOf(r().shape({
                itemName: r().string.isRequired,
                itemType: r().string.isRequired,
                timedOption: r().shape({
                    days: r().number.isRequired,
                    price: r().number.isRequired
                })
            })).isRequired,
            currentRobuxBalance: r().number.isRequired,
            purchaseMetadata: r().instanceOf(Map).isRequired,
            itemDetails: r().arrayOf(r().shape({
                productId: r().number.isRequired,
                price: r().number.isRequired,
                itemName: r().string.isRequired,
                itemType: r().string.isRequired,
                assetTypeDisplayName: r().string.isRequired,
                sellerName: r().string.isRequired,
                expectedSellerId: r().number.isRequired,
                isPurchasable: r().bool.isRequired,
                isOwned: r().bool.isRequired,
                isPlugin: r().bool.isRequired,
                itemDetailItemId: r().number.isRequired,
                loading: r().bool.isRequired,
                userQualifiesForPremiumPrices: r().bool.isRequired,
                premiumPriceInRobux: r().number.isRequired,
                isAuthenticated: r().bool.isRequired,
                resellerAvailable: r().bool.isRequired,
                firstReseller: r().shape({
                    seller: {
                        name: r().string.isRequired,
                        id: r().number.isRequired
                    },
                    userAssetId: r().number.isRequired
                }).isRequired,
                isMarketPlaceEnabled: r().bool.isRequired
            })).isRequired,
            onCancel: r().func.isRequired,
            onTransactionComplete: r().func.isRequired,
            onAction: r().func.isRequired,
            loading: r().bool,
            productSurface: r().string.isRequired,
            systemFeedbackService: r().func.isRequired
        }, [(0, n.withTranslations)(bo, o.purchasingResources), h]), 2))[0],
        vo = Ao[1];

    function bo(e) {
        var t, n = e.translate,
            r = e.title,
            a = e.expectedTotalPrice,
            u = e.items,
            d = e.itemDetails,
            i = e.currentRobuxBalance,
            f = e.purchaseMetadata,
            o = e.onCancel,
            m = e.onTransactionComplete,
            c = e.onAction,
            l = e.loading,
            p = e.productSurface,
            s = e.systemFeedbackService,
            v = Xi((0, De.useState)(!1), 2),
            b = v[0],
            y = v[1],
            h = function() {
                s.loading(n("Message.TwoStepVerificationBatchPurchase")), y(!0)
            },
            g = Xi((0, De.useState)(!1), 2),
            w = g[0],
            E = g[1],
            S = {
                itemCount: d.length,
                robux: (0, A.renderToString)(Fe().createElement("span", {
                    className: "robux-price"
                }, Fe().createElement(F, {
                    price: a
                })))
            },
            e = $i.batchBuyPromptMessage,
            v = 0 === a ? (t = n($i.getItemHeading), n($i.getNowAction)) : (t = n($i.buyItemHeading), n($i.buyNowAction)),
            g = null == d ? void 0 : d.slice(0, Qi);

        function P(e) {
            var t = function(e, t, r) {
                    var n = 0,
                        a = [];
                    if (!t) return {
                        success: !1,
                        message: $i.purchaseErrorFailureMessage
                    };
                    if (200 === t.status) {
                        if (t.data && t.data.message && t.data.message.startsWith("Error/EconomicRestrictions")) {
                            var i = t.data.message;
                            return to(e, i)
                        }
                        if (t.data.fulfillmentGroups[0].lineItems.forEach(function(t) {
                                var e;
                                "SUCCEEDED" === t.status ? n += 1 : (e = a.find(function(e) {
                                    return e.error === t.errorReason
                                })) ? e.count += 1 : a.push({
                                    error: t.errorReason,
                                    count: 1
                                })
                            }), n === t.data.fulfillmentGroups[0].lineItems.length) return {
                            success: !0,
                            message: $i.purchaseCompleteHeading
                        };
                        var o = {
                            error: "",
                            count: 0
                        };
                        if (a.forEach(function(e) {
                                e.count > o.count && (o = e)
                            }), 0 < n) switch (o.error) {
                            case Wi.AlreadyOwned:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessItemsOwnedFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.InsufficientFunds:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessInsufficientFundsFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.ExceptionOccured:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessNetworkErrorFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.TooManyPurchases:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessFloodcheckFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.PremiumNeeded:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessPremiumNeededFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.NoSellers:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessNoSellersFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            case Wi.InExperienceOnly:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessInExperienceOnlyFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                };
                            default:
                                return {
                                    success: !1,
                                    message: $i.batchBuyPartialSuccessGeneralFailureMessage,
                                    params: {
                                        itemCountSuccess: n,
                                        itemCountFailure: o.count
                                    }
                                }
                        } else switch (o.error) {
                            case Wi.AlreadyOwned:
                                return {
                                    success: !1,
                                    message: $i.batchBuyItemsOwnedFailureMessage
                                };
                            case Wi.InsufficientFunds:
                                return {
                                    success: !1,
                                    message: $i.insufficientFundsFailureMessage
                                };
                            case Wi.ExceptionOccured:
                                return {
                                    success: !1,
                                    message: $i.networkErrroFailureMessage
                                };
                            case Wi.TooManyPurchases:
                                return {
                                    success: !1,
                                    message: $i.floodcheckFailureMessage,
                                    params: {
                                        throttleTime: Ji
                                    }
                                };
                            case Wi.PremiumNeeded:
                                return {
                                    success: !1,
                                    message: $i.premiumNeededFailureMessage
                                };
                            case Wi.NoSellers:
                                return {
                                    success: !1,
                                    message: $i.noSellersFailureMessage
                                };
                            case Wi.InExperienceOnly:
                                return {
                                    success: !1,
                                    message: $i.inExperienceOnlyFailureMessage
                                };
                            default:
                                return {
                                    success: !1,
                                    message: $i.purchaseErrorFailureMessage
                                }
                        }
                    } else if (403 === t.status && t.data.message.includes("2sv")) r();
                    else if (400 === t.status && t.data.message.includes("InsufficientTotalBalance")) return {
                        success: !1,
                        message: $i.insufficientFundsFailureMessage
                    };
                    return {
                        success: !1,
                        message: $i.purchaseErrorFailureMessage
                    }
                }(n, e, h),
                e = t.params ? n(t.message, t.params) : n(t.message);
            t.success ? s.success(e) : s.warning(e)
        }

        function x() {
            return (x = Gi(regeneratorRuntime.mark(function e() {
                var t, n, a, r, i, o, c, l, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = {
                                strategy: "BEST_EFFORT",
                                lineItems: []
                            }, n = [], a = [], d.forEach(function(t) {
                                var e, r = {};
                                void 0 !== t.collectibleItemId ? (e = u.find(function(e) {
                                    return e.id === t.id && e.itemType === t.itemType
                                }), !("ExperiencesDevApiOnly" !== t.collectibleItemDetails.saleLocationType && 0 < t.collectibleItemDetails.unitsAvailableForConsumption && (!t.collectibleItemDetails.hasResellers || t.collectibleItemDetails.price < t.collectibleItemDetails.lowestResalePrice)) && t.collectibleItemDetails.lowestAvailableResaleProductId ? r.collectibleProductId = t.collectibleItemDetails.lowestAvailableResaleProductId : r.collectibleProductId = t.collectibleItemDetails.collectibleProductId, null != e && e.timedOption ? (r.rentalOption = {
                                    durationDays: e.timedOption.days
                                }, r.agreedPriceRobux = e.timedOption.price) : r.agreedPriceRobux = t.collectibleItemDetails.lowestPrice) : void 0 !== t.firstReseller ? (r.limitedV1InstanceId = "".concat(t.firstReseller.userAssetId), r.agreedPriceRobux = t.firstReseller.price) : (r.virtualEconomyProductId = "".concat(t.productId), r.agreedPriceRobux = t.premiumPriceInRobux && qa.authenticatedUser.isPremiumUser ? t.premiumPriceInRobux : t.price), n.push(r);
                                r = {
                                    data: {
                                        itemData: {},
                                        reason: ""
                                    }
                                };
                                "Asset" === t.itemType ? r.data.itemData.assetId = t.id : r.data.itemData.bundleId = t.id, a.push(r)
                            }), t.lineItems = n, r = f.has(Zi.LookId) ? f.get(Zi.LookId) : "", i = Ue.uuidService.generateRandomUuid(), i = void 0 !== r && "" !== r ? "web_looks_purchase-".concat(r, "-").concat(i) : i, e.prev = 8, e.next = 11, ke.bulkPurchaseItem(Le.CurrentUser.userId, p, t, i);
                        case 11:
                            if (o = e.sent, (c = o.data).message && c.message.startsWith("Error/EconomicRestrictions")) return P(o), m(a), e.abrupt("return");
                            e.next = 17;
                            break;
                        case 17:
                            l = 0, c.fulfillmentGroups[0].lineItems.forEach(function(e) {
                                a[l].data.reason = "SUCCEEDED" === e.status ? "Success" : e.errorReason, l += 1
                            }), e.next = 26;
                            break;
                        case 21:
                            e.prev = 21, e.t0 = e.catch(8), o = e.t0, s = 0, a.forEach(function(e) {
                                o && (a[s].data.reason = null === o || void 0 === o ? void 0 : o.data.message), s += 1
                            });
                        case 26:
                            P(o), m(a);
                        case 28:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [8, 21]
                ])
            }))).apply(this, arguments)
        }
        g = Fe().createElement(De.Fragment, null, Fe().createElement("div", {
            className: "modal-message multi-item",
            dangerouslySetInnerHTML: {
                __html: n(e, S)
            }
        }), void 0 !== d && 0 < d.length && Fe().createElement("div", {
            className: "modal-multi-item-images-container"
        }, g.map(function(t, e) {
            var r = u.find(function(e) {
                return e.id === t.id && e.itemType === t.itemType
            });
            return Fe().createElement(eo, {
                key: t.itemId,
                itemsCount: d.length,
                item: t,
                index: e,
                timedOption: null == r ? void 0 : r.timedOption,
                translate: n
            })
        })));
        return Fe().createElement(Fe().Fragment, null, Fe().createElement(Ve, {
            isTwoStepVerificationActive: b,
            stopTwoStepVerification: function() {
                E(!0), y(!1)
            },
            systemFeedbackService: s
        }), Fe().createElement(so, {
            title: r || t,
            body: g,
            neutralButtonText: n($i.cancelAction),
            actionButtonText: v,
            onAction: function() {
                var t = !1;
                d.forEach(function(e) {
                    t = t || e.twoStepVerificationRequired
                }), t && !w ? h() : (function() {
                    x.apply(this, arguments)
                }(), c())
            },
            onNeutral: function() {
                o()
            },
            footerText: Fe().createElement(H, {
                expectedPrice: a,
                currentRobuxBalance: i
            }),
            loading: l,
            actionButtonShow: d
        }))
    }
    var yo, ho = (Ao = co((yo = (h = no((0, N.createModal)(), 2))[0], h = h[1], wo.defaultProps = {
            onContinueToPayment: null
        }, wo.propTypes = {
            translate: r().func.isRequired,
            onContinueToPayment: r().func
        }, [(0, n.withTranslations)(wo, o.purchasingResources), h]), 2))[0],
        go = Ao[1];

    function wo(e) {
        var t = e.translate,
            r = e.onContinueToPayment,
            e = t(io.redirectToPartnerWebsiteMessage, {
                linebreak: "\n\n"
            }) || "This purchase must be completed on our partner’s website. You will be returned to Roblox after the purchase is completed.\n\n Proceed to partner website for payment?",
            e = Fe().createElement("p", {
                className: "modal-body"
            }, e);
        return Fe().createElement(yo, ro({
            title: t(io.leavingRobloxHeading) || "Leaving Roblox",
            body: e,
            neutralButtonText: t(io.cancelAction),
            actionButtonText: t(io.continueToPaymentAction) || "Continue To Payment",
            onAction: function() {
                P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_CATALOG_ROBUX_UPSELL, !0, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEAVE_ROBLOX_WARNING, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CONTINUE_TO_VNG), r()
            },
            onClose: function() {
                P.paymentFlowAnalyticsService.sendUserPurchaseFlowEvent(P.paymentFlowAnalyticsService.ENUM_TRIGGERING_CONTEXT.WEB_CATALOG_ROBUX_UPSELL, !0, P.paymentFlowAnalyticsService.ENUM_VIEW_NAME.LEAVE_ROBLOX_WARNING, P.paymentFlowAnalyticsService.ENUM_PURCHASE_EVENT_TYPE.USER_INPUT, P.paymentFlowAnalyticsService.ENUM_VIEW_MESSAGE.CANCEL)
            }
        }, {
            actionButtonShow: !0
        }))
    }

    function Eo(e) {
        var t = e.currentUserBalance,
            r = e.items,
            n = e.itemDetails,
            a = e.purchaseMetadata,
            i = e.onBuyButtonClick,
            o = e.onConfirm,
            c = e.onCancel,
            l = e.onTransactionComplete,
            s = e.productSurface,
            u = e.displayPriceOnButton,
            d = e.systemFeedbackService,
            f = e.translate,
            m = e.variant,
            p = void 0 === m ? N.Button.variants.growth : m,
            v = e.size,
            b = void 0 === v ? N.Button.sizes.large : v,
            y = !1,
            h = 0,
            g = 0,
            w = [],
            E = co((0, De.useState)(!1), 2),
            m = E[0],
            S = E[1],
            e = co((0, De.useState)(!1), 2),
            P = e[0],
            x = e[1],
            v = co((0, De.useState)(null), 2),
            E = v[0],
            I = v[1],
            e = co((0, De.useState)(null), 2),
            v = e[0],
            A = e[1];
        (0, De.useEffect)(function() {
            oo().then(function(e) {
                e = e.shouldShowVng;
                x(e)
            }).catch(function(e) {
                console.debug(e), x(!1)
            })
        }, []);
        if (!qa.authenticatedUser.isAuthenticated) return Fe().createElement("div", {
            className: "sign-in"
        }, Fe().createElement(N.Button, {
            className: "action-button batch-buy-purchase-button sign-in-button",
            variant: p,
            size: b,
            onClick: function() {
                var e;
                window.location = (e = {
                    ReturnUrl: window.location.pathname
                }, Ue.urlService.getUrlWithQueries("/login", e))
            }
        }, f(uo.buyAction)));
        if (void 0 === n || 0 < n.length && n[0] && n[0].loading || void 0 === t) return Fe().createElement("div", {
            className: "loading"
        }, Fe().createElement(N.Button, {
            className: "action-button batch-buy-purchase-button",
            variant: p,
            size: b,
            isDisabled: !0
        }, Fe().createElement(N.Loading, null)));
        if (0 === n.length || n[0] && n[0].loadFailure) return Fe().createElement(N.Button, {
            className: "action-button batch-buy-purchase-button",
            variant: p,
            size: b,
            isDisabled: !0
        }, u ? Fe().createElement("div", {
            className: "purchase-price"
        }, Fe().createElement("span", {
            className: "icon-robux-white-28x28"
        }), Fe().createElement("span", {
            className: "purchase-price-text text-robux-lg"
        }, Ue.numberFormat.getNumberFormat(h))) : Fe().createElement("div", null, f(uo.buyAction)));
        n.forEach(function(t) {
            (void 0 !== (e = t).collectibleItemId ? e.isMarketPlaceEnabled && e.isPurchasable || e.resellerAvailable : e.isMarketPlaceEnabled && (e.resellerAvailable || e.isPurchasable)) && (y = !0);
            var e = r.find(function(e) {
                return e.id === t.id && e.itemType === t.itemType
            });
            null != e && e.timedOption ? h += e.timedOption.price : void 0 !== t.collectibleItemDetails ? t.collectibleItemDetails.lowestPrice ? h += t.collectibleItemDetails.lowestPrice : t.collectibleItemId.price && (h += t.collectibleItemDetails.price) : t.premiumPriceInRobux && qa.authenticatedUser.isPremiumUser ? g += t.premiumPriceInRobux : t.lowestPrice ? h += t.lowestPrice : t.price && (h += t.price), t.resellerAvailable && w.push(t)
        });
        var R = h + g - t,
            e = Fe().createElement(N.Loading, null);
        m || (e = u ? Fe().createElement("div", {
            className: "purchase-price"
        }, Fe().createElement("span", {
            className: "icon-robux-white-28x28"
        }), Fe().createElement("span", {
            className: "purchase-price-text text-robux-lg"
        }, Ue.numberFormat.getNumberFormat(h))) : Fe().createElement("div", null, f(uo.buyAction)));
        var T = function() {
            P ? go.open() : window.location = O.getRobuxUpgradesUrl("")
        };
        return Fe().createElement(Fe().Fragment, null, Fe().createElement("div", {
            className: "batch-buy-purchase-button-container"
        }, Fe().createElement(N.Button, {
            className: "action-button batch-buy-purchase-button",
            variant: p,
            size: b,
            onClick: function() {
                var e;
                0 < R ? (A(Fe().createElement(fo, {
                    robuxNeeded: R,
                    onAccept: T
                })), mo.open()) : (e = Fe().createElement(po, {
                    title: f(uo.buyNowAction),
                    expectedTotalPrice: h + g,
                    items: r,
                    purchaseMetadata: a,
                    itemDetails: n,
                    resaleItems: w,
                    currentRobuxBalance: t,
                    onCancel: function() {
                        var e;
                        null == vo || null !== (e = vo.close) && void 0 !== e && e.call(vo), c()
                    },
                    onTransactionComplete: function(e) {
                        S(!1), l(e)
                    },
                    onAction: function() {
                        var e;
                        null == vo || null !== (e = vo.close) && void 0 !== e && e.call(vo), S(!0), o()
                    },
                    loading: !1,
                    productSurface: s,
                    systemFeedbackService: d
                }), I(e), vo.open()), i()
            },
            isDisabled: !y
        }, e)), 0 < R && Fe().createElement("div", {
            id: "insufficient-funds-modal"
        }, v), P && Fe().createElement("div", {
            id: "leave-roblox-warning-modal"
        }, Fe().createElement(ho, {
            onContinueToPayment: function() {
                var e = {
                    url: O.getVngShopUrl(),
                    withCredentials: !0
                };
                Ue.httpService.get(e).then(function(e) {
                    e = e.data.vngShopRedirectUrl;
                    window.open(e, "_blank").focus()
                }).catch(function() {
                    window.open(O.getVngShopFallbackUrl, "_blank").focus()
                }), go.close()
            }
        })), E && Fe().createElement("div", {
            id: "multi-item-purchase-modal"
        }, E))
    }
    Eo.propTypes = {
        currentUserBalance: r().number.isRequired,
        items: r().arrayOf(r().shape({
            id: r().number.isRequired,
            itemType: r().string.isRequired,
            timedOption: r().shape({
                days: r().number.isRequired,
                price: r().number.isRequired
            })
        })).isRequired,
        purchaseMetadata: r().instanceOf(Map).isRequired,
        itemDetails: r().arrayOf(r().shape({
            productId: r().number.isRequired,
            price: r().number.isRequired,
            itemName: r().string.isRequired,
            itemType: r().string.isRequired,
            assetTypeDisplayName: r().string.isRequired,
            sellerName: r().string.isRequired,
            expectedSellerId: r().number.isRequired,
            isPurchasable: r().bool.isRequired,
            isOwned: r().bool.isRequired,
            isPlugin: r().bool.isRequired,
            itemDetailItemId: r().number.isRequired,
            loading: r().bool.isRequired,
            loadFailure: r().bool,
            userQualifiesForPremiumPrices: r().bool.isRequired,
            premiumPriceInRobux: r().number,
            isAuthenticated: r().bool.isRequired,
            resellerAvailable: r().bool.isRequired,
            firstReseller: r().shape({
                seller: {
                    name: r().string.isRequired,
                    id: r().number.isRequired
                },
                userAssetId: r().number.isRequired
            }),
            isMarketPlaceEnabled: r().bool.isRequired
        })).isRequired,
        onBuyButtonClick: r().func.isRequired,
        onConfirm: r().func.isRequired,
        onCancel: r().func.isRequired,
        onTransactionComplete: r().func.isRequired,
        productSurface: r().string.isRequired,
        displayPriceOnButton: r().bool.isRequired,
        systemFeedbackService: r().func.isRequired,
        translate: r().func.isRequired,
        variant: r().string,
        size: r().string
    }, Eo.defaultProps = {
        variant: N.Button.variants.growth,
        size: N.Button.sizes.large
    };
    var So = (0, n.withTranslations)(Eo, o.purchasingResources);

    function Po(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var r = [],
                n = !0,
                a = !1,
                i = void 0;
            try {
                for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (a) throw i
                }
            }
            return r
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return xo(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xo(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function xo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function Io(e) {
        var t = e.items,
            r = e.purchaseMetadata,
            n = e.onBuyButtonClick,
            a = e.systemFeedbackService,
            i = e.onConfirm,
            o = e.onCancel,
            c = e.onTransactionComplete,
            l = e.productSurface,
            s = e.displayPriceOnButton,
            u = e.translate,
            d = e.variant,
            f = e.size,
            m = Po((0, De.useState)(void 0), 2),
            e = m[0],
            p = m[1];
        (0, De.useEffect)(function() {
            qa.authenticatedUser.isAuthenticated && je.getCurrentUserBalance(qa.authenticatedUser.id).then(function(e) {
                p(e.data.robux)
            }).catch(function() {
                p(void 0)
            })
        }, []);
        m = ji(t).itemDetails;
        return Fe().createElement(So, {
            currentUserBalance: e,
            items: t,
            itemDetails: m,
            purchaseMetadata: r,
            systemFeedbackService: a,
            onBuyButtonClick: n,
            onConfirm: i,
            onCancel: o,
            onTransactionComplete: c,
            productSurface: l,
            displayPriceOnButton: s,
            translate: u,
            variant: d,
            size: f
        })
    }
    Io.propTypes = {
        items: r().arrayOf(r().object).isRequired,
        purchaseMetadata: r().instanceOf(Map).isRequired,
        onBuyButtonClick: r().func,
        onConfirm: r().func,
        onCancel: r().func,
        onTransactionComplete: r().func,
        systemFeedbackService: r().func.isRequired,
        productSurface: r().string,
        displayPriceOnButton: r().bool,
        translate: r().func.isRequired,
        variant: r().string,
        size: r().string
    }, Io.defaultProps = {
        onBuyButtonClick: function() {},
        onConfirm: function() {},
        onCancel: function() {},
        onTransactionComplete: function() {},
        productSurface: "SHOPPING_CART_WEB",
        displayPriceOnButton: !1,
        variant: N.Button.variants.growth,
        size: N.Button.sizes.large
    };
    var Ao = (0, n.withTranslations)(Io, o.purchasingResources),
        Ro = {
            GAME_PASS: "Game Pass",
            BUNDLE: "Bundle",
            BUNDLE_ALIAS: "Package",
            PRIVATE_SERVER: "Private Server"
        },
        To = function() {
            return (To = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        },
        No = (0, n.withTranslations)(function(e) {
            var t = e.ItemPurchase,
                r = e.itemPurchaseService,
                e = e.innerProps;
            return Fe().useEffect(function() {
                setTimeout(function() {
                    return r.start()
                }, 70)
            }, [r]), Fe().createElement(t, To({}, e))
        }, o.purchasingResources);
    window.RobloxItemPurchase = {
        createTransactionFailureModal: S,
        createInsufficientFundsModal: j,
        createPriceChangedModal: X,
        createPurchaseVerificationModal: ee,
        createPurchaseConfirmationModal: oe,
        createItemPurchase: _a,
        errorTypeIds: t,
        getMetaData: Be,
        BalanceAfterSaleText: H,
        PriceLabel: F,
        AssetName: K,
        TransactionVerb: te,
        BatchBuyPriceContainer: Ao,
        ASSET_TYPE_ENUM: Ro,
        startGamepassPurchaseFlow: function(e) {
            var t = "rbx-gamepass-purchase-root",
                r = document.getElementById(t);
            r || ((r = document.createElement("div")).id = t, document.body.appendChild(r));
            var n = Fe().createElement(Ga.Thumbnail2d, {
                    type: Ga.ThumbnailTypes.assetThumbnail,
                    targetId: e.iconAssetId,
                    size: Ga.ThumbnailGamePassIconSize.size150,
                    format: Ga.ThumbnailFormat.webp,
                    altName: e.assetName
                }),
                t = (a = _a())[0],
                a = a[1];
            return (0, c.render)(Fe().createElement(No, {
                    ItemPurchase: t,
                    itemPurchaseService: a,
                    innerProps: {
                        thumbnail: n,
                        productId: e.productId,
                        assetName: e.assetName,
                        assetType: Ro.GAME_PASS,
                        sellerName: e.sellerName,
                        expectedCurrency: 1,
                        expectedSellerId: e.expectedSellerId,
                        expectedPrice: e.expectedPrice,
                        onPurchaseSuccess: e.onPurchaseSuccess
                    }
                }), r),
                function() {
                    r && ((0, c.unmountComponentAtNode)(r), r.remove())
                }
        }
    }, (0, Ue.ready)(function() {
        var e = document.getElementById("display-price-container");
        e && (0, c.render)(Fe().createElement(Si, null), e)
    })
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/8feed94e133a4152a38be70b24f43871-itemPurchase.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ItemPurchase");