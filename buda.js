(this["webpackJsonpprj-3-510-buddhajones"] = this["webpackJsonpprj-3-510-buddhajones"] || []).push([
    [10], {
        11: function (C, e, t) {
            "use strict";
            t.d(e, "b", (function () {
                return a
            }));
            var n = t(0),
                r = t.n(n),
                a = {
                    Landing: "/",
                    Works: "/work/",
                    ProjectDetail: "/work/:caseStudy/",
                    Preview: "/preview/:caseStudy/",
                    OurStory: "/our-story/",
                    Private: "/private/:hash",
                    NotFound: "/404"
                };
            e.a = [{
                key: a.Landing,
                component: r.a.lazy((function () {
                    return t.e(7).then(t.bind(null, 241))
                })),
                exact: !0
            }, {
                key: a.Works,
                component: r.a.lazy((function () {
                    return Promise.all([t.e(0), t.e(6), t.e(9)]).then(t.bind(null, 243))
                })),
                exact: !0
            }, {
                key: a.OurStory,
                component: r.a.lazy((function () {
                    return t.e(8).then(t.bind(null, 242))
                })),
                exact: !0
            }, {
                key: a.Private,
                component: r.a.lazy((function () {
                    return Promise.all([t.e(0), t.e(2), t.e(1), t.e(3)]).then(t.bind(null, 244))
                })),
                exact: !0
            }, {
                key: a.NotFound,
                component: r.a.lazy((function () {
                    return t.e(5).then(t.bind(null, 245))
                })),
                exact: !0
            }]
        },
        116: function (C, e, t) {
            "use strict";
            t.d(e, "a", (function () {
                return c
            }));
            var n, r = t(73),
                a = t.n(r),
                o = t(3),
                i = {
                    x: 0,
                    y: 0,
                    duration: 0,
                    ease: "quart.inOut",
                    delay: 0
                };

            function c() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.a,
                    t = Object.assign({}, i, C),
                    r = t.x,
                    c = t.y,
                    s = t.duration,
                    u = t.ease,
                    l = t.delay;
                n && clearTimeout(n), n = setTimeout(e, 1e3 * s), o.a.to(window, {
                    duration: s,
                    ease: u,
                    delay: l,
                    scrollTo: {
                        x: r,
                        y: c,
                        autoKill: !1
                    }
                })
            }
        },
        117: function (C, e, t) {
            "use strict";
            var n = t(21),
                r = t(74),
                a = t(0),
                o = t.n(a),
                i = t(15),
                c = t.n(i),
                s = (t(22), t(129)),
                u = (t(236), o.a.forwardRef((function (C, e) {
                    var t = C.url,
                        i = C.className,
                        u = C.height,
                        l = C.width,
                        d = C.autoplay,
                        f = C.controls,
                        h = C.isPlaying,
                        p = C.useContainerSize,
                        v = Object(a.useRef)(null),
                        m = Object(a.useRef)(null),
                        L = Object(a.useRef)(null),
                        E = Object(a.useState)(null),
                        g = Object(r.a)(E, 2),
                        y = g[0],
                        S = g[1];
                    return Object(a.useEffect)((function () {
                        null !== t && S(t)
                    }), [t]), Object(a.useEffect)((function () {
                        h ? L.current && L.current.play() : L.current && L.current.pause()
                    }), [h]), Object(a.useEffect)((function () {
                        var C = v && v.current.clientWidth,
                            e = v && v.current.clientHeight,
                            r = null;
                        r = p ? {
                            width: C,
                            height: e
                        } : {
                            width: .7 * l < u ? l : null,
                            height: l > u ? u : null
                        }, L.current && t !== y && null !== t && L.current.destroy(), h && t && (L.current = new s.a(m.current, Object(n.a)({
                            url: t,
                            autoplay: d,
                            controls: f
                        }, r)))
                    }), [h, t, l, u, d, f, y, p]), o.a.createElement("div", {
                        className: c()("VimeoPlayer", i),
                        ref: v
                    }, o.a.createElement("div", {
                        className: "video-container",
                        ref: m
                    }))
                })));
            u.defaultProps = {}, e.a = u
        },
        119: function (C, e, t) {
            "use strict";
            var n = t(0),
                r = t.n(n),
                a = t(15),
                o = t.n(a);
            t(22), t(233);

            function i() {
                return (i = Object.assign || function (C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }).apply(this, arguments)
            }

            function c(C, e) {
                if (null == C) return {};
                var t, n, r = function (C, e) {
                    if (null == C) return {};
                    var t, n, r = {},
                        a = Object.keys(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = C[t]);
                    return r
                }(C, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(C, t) && (r[t] = C[t])
                }
                return r
            }
            var s = r.a.createElement("rect", {
                    x: 2,
                    y: .999756,
                    width: 30,
                    height: 2,
                    rx: 1,
                    transform: "rotate(45 2 0.999756)",
                    fill: "currentColor"
                }),
                u = r.a.createElement("rect", {
                    x: 1,
                    y: 21.9998,
                    width: 30,
                    height: 2,
                    rx: 1,
                    transform: "rotate(-45 1 21.9998)",
                    fill: "currentColor"
                }),
                l = function (C) {
                    var e = C.svgRef,
                        t = C.title,
                        n = c(C, ["svgRef", "title"]);
                    return r.a.createElement("svg", i({
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        ref: e
                    }, n), t ? r.a.createElement("title", null, t) : null, s, u)
                },
                d = r.a.forwardRef((function (C, e) {
                    return r.a.createElement(l, i({
                        svgRef: e
                    }, C))
                })),
                f = (t.p, r.a.forwardRef((function (C, e) {
                    var t = C.className,
                        n = C.ariaLabel,
                        a = C.isWhite,
                        i = C.onClick,
                        c = C.onMouseEnter,
                        s = C.onMouseLeave;
                    return r.a.createElement("div", {
                        ref: e,
                        className: o()("CloseButton", t, {
                            "is-white": a
                        }),
                        "aria-label": n,
                        onClick: function () {
                            i()
                        },
                        onMouseEnter: function () {
                            c && c()
                        },
                        onMouseLeave: function () {
                            s && s()
                        }
                    }, r.a.createElement(d, null))
                })));
            f.defaultProps = {};
            e.a = r.a.memo(f)
        },
        12: function (C, e, t) {
            "use strict";
            t.d(e, "c", (function () {
                return r
            })), t.d(e, "a", (function () {
                return a
            })), t.d(e, "b", (function () {
                return o
            }));
            var n = t(9),
                r = (t(11), function (C, e) {
                    return C.sort((function (C, t) {
                        var n = e ? C[e].toLowerCase() : C.toLowerCase(),
                            r = e ? t[e].toLowerCase() : C.toLowerCase();
                        return n < r ? -1 : n > r ? 1 : 0
                    }))
                });

            function a(C, e) {
                var t = function (C) {
                    var e = C.split("/").filter((function (C) {
                        return C
                    }));
                    return e[1] && (e[1] = "slug"), e.join("/")
                };
                return t(C) === t(e)
            }
            var o = function () {
                var C = window.navigator.userAgent.match(/(iPad)/) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
                return n.c.isMobile || C
            }()
        },
        131: function (C) {
            C.exports = JSON.parse('{"v":"5.6.3","fr":30,"ip":0,"op":36,"w":319,"h":33,"nm":"Drawn Element - Lg Line","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[174,14,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-73.329,-1.587],[-21.289,1.577]],"o":[[0,0],[73.329,1.587],[21.289,-1.577]],"v":[[-164.379,3.953],[-40.272,1.555],[133.984,1.508]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.86],"y":[0]},"o":{"x":[0.66],"y":[0]},"t":20,"s":[0]},{"t":35,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.34],"y":[1]},"o":{"x":[0.14],"y":[1]},"t":0,"s":[0]},{"t":20,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1696,"st":0,"bm":0}],"markers":[]}')
        },
        143: function (C, e, t) {
            C.exports = t(240)
        },
        199: function (C, e, t) {},
        200: function (C, e, t) {},
        201: function (C, e, t) {},
        207: function (C, e, t) {},
        208: function (C, e, t) {},
        233: function (C, e, t) {},
        236: function (C, e, t) {},
        237: function (C, e, t) {},
        238: function (C, e, t) {},
        239: function (C, e, t) {},
        240: function (C, e, t) {
            "use strict";
            t.r(e);
            t(144);
            var n = t(9),
                r = t(68);

            function a() {
                var C = n.b.getName().toLowerCase(),
                    e = parseFloat(n.b.getVersion()),
                    t = n.d ? n.d.getName().toLowerCase() : "unknown",
                    a = "Unknown" === n.d.getVersion() ? Number.MAX_SAFE_INTEGER : parseFloat(n.d.getVersion());
                if (n.a.isBot()) return !0;
                var o = r[t],
                    i = r[C];
                if (i || o) {
                    if (void 0 !== o && a < o) return !1;
                    if (void 0 !== i && e < i) return !1
                }
                return !0
            }
            window.location.href.indexOf("unsupported") >= 0 ? a() && (window.location = "/") : a() || (window.location = "/unsupported.html");
            t(145), t(166);
            var o = t(35),
                i = t(0),
                c = t.n(i),
                s = t(32),
                u = t.n(s),
                l = t(14),
                d = t(53),
                f = t(34),
                h = t(121),
                p = t.n(h),
                v = t(122),
                m = t(4),
                L = t(20),
                E = t(21),
                g = {
                    _emitChange: null,
                    _reducers: {},
                    get reducers() {
                        return Object(E.a)({}, this._reducers)
                    },
                    set reducers(C) {
                        this._reducers = C
                    },
                    register: function (C, e) {
                        this._reducers = Object(E.a)({}, this._reducers, Object(L.a)({}, C, e)), this._emitChange && this._emitChange(this.reducers)
                    },
                    setChangeListener: function (C) {
                        this._emitChange = C
                    }
                };

            function y() {
                var C = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case m.a.PAGE_LOADED:
                        return e.loaded;
                    default:
                        return C
                }
            }
            var S = t(39);

            function b() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "close",
                    e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case m.a.SET_MENU_STATE:
                        return e.menuState;
                    default:
                        return C
                }
            }

            function O(C) {
                return {
                    type: m.a.SET_MENU_STATE,
                    menuState: C
                }
            }
            var k, w = t(6),
                T = {},
                _ = function (C) {
                    return {
                        router: Object(d.b)(C),
                        preloader: S.a,
                        windowSize: w.w,
                        previousRoute: w.h,
                        layout: w.e,
                        isPageLoaded: y,
                        menuState: b,
                        generalData: w.d,
                        pagesData: w.f,
                        postData: w.g,
                        scrollDirection: w.i,
                        cursorHover: w.c,
                        preloadAssets: S.b,
                        videoState: w.v,
                        carouselCursor: w.b,
                        searchCursor: w.j
                    }
                },
                R = function (C) {
                    var e = Object.keys(C);
                    return Object.keys(T).forEach((function (t) {
                            -1 === e.indexOf(t) && (C[t] = function () {
                                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return C
                            })
                        })),
                        function (C) {
                            return function (e, t) {
                                switch (t.type) {
                                    case m.a.BATCH_ACTIONS:
                                        return t.actions.reduce(C, e);
                                    default:
                                        return C(e, t)
                                }
                            }
                        }(Object(f.combineReducers)(C))
                },
                A = p()();
            g.setChangeListener((function (C) {
                k.replaceReducer(R(C))
            }));
            var j = v.composeWithDevTools.apply(void 0, []);
            var M = k = Object(f.createStore)((g.reducers = _(A), R(_(A))), T, j),
                P = t(12),
                D = t(16),
                x = t.n(D),
                N = t(24),
                I = t(7),
                H = t(8),
                Z = t(18),
                W = t(17),
                B = t(249),
                V = t(124),
                U = t.n(V),
                z = (t(22), t(188), t(3)),
                G = t(41),
                F = t(125),
                K = t.n(F),
                Y = t(130),
                J = t(246),
                X = t(248),
                q = t(15),
                Q = t.n(q),
                $ = (t(199), t(55)),
                CC = t(11),
                eC = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        return Object(I.a)(this, t), e.apply(this, arguments)
                    }
                    return Object(H.a)(t, [{
                        key: "render",
                        value: function () {
                            var C = this.props,
                                e = C.routeProps,
                                t = C.title,
                                n = C.slug,
                                r = C.pageBlocks,
                                a = C.transitionState,
                                o = CC.a.find((function (C) {
                                    return Object(P.a)(C.key, n)
                                })).component;
                            return c.a.createElement(i.Suspense, {
                                fallback: c.a.createElement("div", null)
                            }, c.a.createElement(o, Object.assign({}, e, {
                                pageBlocks: r,
                                title: t,
                                transitionState: a
                            })))
                        }
                    }]), t
                }(c.a.PureComponent);
            eC.defaultProps = {};
            var tC = eC,
                nC = Object(i.lazy)((function () {
                    return t.e(5).then(t.bind(null, 245))
                })),
                rC = Object(i.lazy)((function () {
                    return t.e(23).then(t.bind(null, 425))
                })),
                aC = Object(i.lazy)((function () {
                    return Promise.all([t.e(0), t.e(2), t.e(1), t.e(3)]).then(t.bind(null, 244))
                })),
                oC = function (C) {
                    var e = C.location,
                        t = Object(Y.a)(C, ["location"]),
                        n = t.pagesData,
                        r = Object(i.useCallback)((function (C) {
                            return Object.keys(n.pages).map((function (e, t) {
                                var r = CC.a.find((function (C) {
                                    return Object(P.a)(C.key, e)
                                }));
                                if (!r) return null;
                                var a = n.pages[e],
                                    o = a.blocks,
                                    i = a.title;
                                return c.a.createElement(J.a, {
                                    key: e,
                                    exact: r.exact,
                                    path: e,
                                    render: function (t) {
                                        return c.a.createElement(tC, {
                                            routeProps: t,
                                            slug: e,
                                            key: i,
                                            pageBlocks: o,
                                            title: i,
                                            transitionState: C
                                        })
                                    }
                                })
                            }))
                        }), [n]);
                    return c.a.createElement("main", {
                        className: Q()("Pages", t.className),
                        role: "main"
                    }, c.a.createElement(G.TransitionGroup, {
                        component: i.Fragment,
                        childFactory: function (C) {
                            return c.a.cloneElement(C, {
                                appear: !0,
                                timeout: Object($.b)(C.props.factoryKey),
                                key: C.props.factoryKey,
                                unmountOnExit: !0
                            })
                        }
                    }, c.a.createElement(G.Transition, {
                        factoryKey: e.pathname,
                        key: e.pathname,
                        appear: !0,
                        timeout: Object($.b)(e.pathname),
                        unmountOnExit: !0
                    }, (function (C) {
                        return c.a.createElement(X.a, {
                            location: e
                        }, r(C), c.a.createElement(J.a, {
                            key: "/work/case-study",
                            exact: !0,
                            path: "".concat(CC.b.ProjectDetail),
                            render: function (e) {
                                return c.a.createElement(i.Suspense, {
                                    fallback: c.a.createElement("div", null)
                                }, c.a.createElement(rC, Object.assign({}, e, {
                                    key: "case-study-component",
                                    transitionState: C
                                })))
                            }
                        }), c.a.createElement(J.a, {
                            key: "/private/hash",
                            exact: !0,
                            path: "".concat(CC.b.Private),
                            render: function (e) {
                                return c.a.createElement(i.Suspense, {
                                    fallback: c.a.createElement("div", null)
                                }, c.a.createElement(aC, Object.assign({}, e, {
                                    key: "private-url-component",
                                    transitionState: C
                                })))
                            }
                        }), c.a.createElement(J.a, {
                            key: "four-oh-four",
                            render: function () {
                                return c.a.createElement(i.Suspense, {
                                    fallback: c.a.createElement("div", null)
                                }, c.a.createElement(nC, null), " ")
                            }
                        }))
                    }))))
                };
            oC.defaultProps = {};
            var iC = Object(B.a)(Object(l.c)((function (C) {
                    return {
                        pagesData: C.pagesData
                    }
                }), null)(oC)),
                cC = t(28),
                sC = t(44),
                uC = function (C) {
                    var e, t, n, r = null === C || void 0 === C || null === (e = C.menu) || void 0 === e ? void 0 : e.navigation;
                    if (Array.isArray(r) && (!(null === (t = r[0]) || void 0 === t ? void 0 : t.copy) || !(null === (n = r[0]) || void 0 === n ? void 0 : n.link))) throw new Error("Invalid general data");
                    return !0
                },
                lC = t(52),
                dC = (t(200), t(80)),
                fC = "OPEN",
                hC = "IS_CLOSING",
                pC = "CLOSE",
                vC = t(5),
                mC = t(77),
                LC = t.n(mC),
                EC = (t(201), t(131)),
                gC = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        var C;
                        Object(I.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (C = e.call.apply(e, [this].concat(r))).state = {
                            strokeThickness: 0
                        }, C.line = c.a.createRef(), C.container = c.a.createRef(), C.lottieAnimation = null, C.handleEnter = function () {
                            C.lottieAnimation.playSegments([0, 17], !0), C.props.setCursorHover(!0), C.setState({
                                strokeThickness: C.getStrokeWidth()
                            })
                        }, C.handleLeave = function () {
                            C.lottieAnimation.playSegments([17, 50], !0), C.props.setCursorHover(!1)
                        }, C.handleClick = function () {
                            C.props.onClick(C.props.link)
                        }, C
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.setupLottie()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {}
                    }, {
                        key: "setupLottie",
                        value: function (C) {
                            this.lottieAnimation = LC.a.loadAnimation({
                                container: this.line.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: EC
                            }), this.setState({
                                strokeThickness: this.getStrokeWidth()
                            })
                        }
                    }, {
                        key: "getStrokeWidth",
                        value: function () {
                            return this.container.current && .4 * window.innerWidth / parseInt(this.container.current.clientWidth) * 1.3
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var C = this.props,
                                e = C.children,
                                t = C.active,
                                n = C.link,
                                r = {
                                    "--stroke-width": this.state.strokeThickness
                                };
                            return c.a.createElement("div", {
                                className: Q()("MenuButton", this.props.className, {
                                    active: t
                                }),
                                onClick: this.handleClick,
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.container,
                                "data-url": n
                            }, e, c.a.createElement("div", {
                                className: "line",
                                ref: this.line,
                                style: r
                            }))
                        }
                    }]), t
                }(c.a.PureComponent);
            gC.defaultProps = {};
            var yC = Object(l.c)(null, (function (C) {
                    return {
                        setCursorHover: function (e) {
                            return C(Object(w.l)(e))
                        }
                    }
                }))(gC),
                SC = t(81),
                bC = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        var C;
                        Object(I.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (C = e.call.apply(e, [this].concat(r))).state = {
                            isMenuOpen: !1
                        }, C.el = c.a.createRef(), C.bg = c.a.createRef(), C.info = c.a.createRef(), C.linksRef = c.a.createRef(), C.closeBtn = c.a.createRef(), C.headerLogo = c.a.createRef(), C.links = [], C.infos = [], C.leftPoint = {
                            pos: 0
                        }, C.rightPoint = {
                            pos: 0
                        }, C.pathStyle = "clip-path", C._wheelListener = function (e) {
                            e.preventDefault(), C.props.setMenuState(hC)
                        }, C.handleClose = Object(N.a)(x.a.mark((function e() {
                            return x.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.resolve(C.animateOut());
                                    case 2:
                                        C.nextRoute && C.props.history.push(C.nextRoute), C.props.setMenuState(pC);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), C.handleEnter = function () {
                            C.props.setCursorHover(!0)
                        }, C.handleLeave = function () {
                            C.props.setCursorHover(!1)
                        }, C.animateIn = function () {
                            C.el.current.style[C.pathStyle] = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", C.closeBtn.current && z.a.fromTo(C.closeBtn.current, .4, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: vC.a,
                                delay: .35
                            }), C.headerLogo.current && z.a.fromTo(C.headerLogo.current, .4, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: vC.a,
                                delay: .35
                            }), C.infos && z.a.fromTo(C.infos, .7, {
                                opacity: 0,
                                y: 150
                            }, {
                                opacity: 1,
                                y: 0,
                                ease: "quint.out",
                                delay: .7,
                                stagger: .05
                            }), C.links && z.a.fromTo(C.links, .7, {
                                opacity: 0,
                                skewY: 10,
                                y: 150
                            }, {
                                opacity: 1,
                                skewY: 0,
                                y: 0,
                                ease: "quint.out",
                                delay: .5,
                                stagger: .1
                            });
                            var e = SC.a;
                            C.updatePoints(e[0].s), C.tl = z.a.timeline({
                                paused: !0
                            }), C.setupMaskTimeline(e, C.tl), z.a.to(C.tl, {
                                progress: 1,
                                duration: 1,
                                ease: vC.a
                            })
                        }, C.handleClick = function (e) {
                            C.props.setMenuState(hC), C.nextRoute = e, C.handleClose()
                        }, C
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            n.b.isSafari && (this.pathStyle = "-webkit-clip-path"), this.wheelListener = this._wheelListener.bind(this)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {
                            this.props.menuState !== C.menuState && (this.props.menuState === fC ? (this.setState({
                                isMenuOpen: !0
                            }), document.addEventListener("wheel", this.wheelListener, {
                                passive: !1
                            }), this.animateIn()) : this.props.menuState === hC ? (document.removeEventListener("wheel", this.wheelListener), this.handleClose()) : (this.setState({
                                isMenuOpen: !1
                            }), this.nextRoute = null))
                        }
                    }, {
                        key: "setupMaskTimeline",
                        value: function (C, e) {
                            var t = this,
                                n = [],
                                r = 0;
                            C.forEach((function (a, i) {
                                var c;
                                n[i] = Object(o.a)(a.s);
                                var s = a.e;
                                r += (null === (c = C[i - 1]) || void 0 === c ? void 0 : c.duration) || 0, e.to(n[i], {
                                    endArray: s,
                                    duration: a.duration,
                                    onUpdate: t.updatePoints,
                                    callbackScope: t,
                                    onUpdateParams: [n[i], !0],
                                    ease: "none"
                                }, r)
                            }))
                        }
                    }, {
                        key: "updatePoints",
                        value: function (C) {
                            var e = this.el.current;
                            if (null !== e && void 0 !== e) {
                                var t = C.map((function (e, t) {
                                        return "".concat(e, "%").concat((t + 1) % 2 === 0 && t + 1 < C.length ? "," : " ")
                                    })),
                                    n = "polygon(".concat(t.join(""), ")");
                                z.a.set(e, Object(L.a)({}, this.pathStyle, n))
                            }
                        }
                    }, {
                        key: "animateOut",
                        value: function () {
                            var C = this;
                            return new Promise((function (e, t) {
                                z.a.to(C.tl, {
                                    progress: 0,
                                    duration: 1,
                                    ease: vC.a,
                                    onComplete: function () {
                                        e()
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "renderMenuItems",
                        value: function (C) {
                            var e = this;
                            return C.map((function (t, n) {
                                var r = Object(P.a)(e.props.routerPath, t.link);
                                return c.a.createElement("li", {
                                    key: n,
                                    className: "link",
                                    ref: function (t) {
                                        return e.links.length < C.length && (e.links[n] = t)
                                    }
                                }, c.a.createElement(yC, {
                                    link: t.link,
                                    containerWidth: e.linksRef.current && e.linksRef.current.clientWidth,
                                    active: r,
                                    onClick: e.handleClick
                                }, t.copy))
                            }))
                        }
                    }, {
                        key: "renderInfoBlock",
                        value: function (C, e) {
                            var t = this;
                            return c.a.createElement("li", {
                                className: "info-block",
                                ref: function (C) {
                                    return C && t.infos.length < 3 && t.infos.push(C)
                                }
                            }, c.a.createElement("h6", {
                                className: "info-title"
                            }, C), e)
                        }
                    }, {
                        key: "renderContact",
                        value: function (C) {
                            var e = C.phone,
                                t = C.email,
                                n = C.title,
                                r = c.a.createElement("div", {
                                    className: "info-content contact"
                                }, c.a.createElement("span", null, c.a.createElement(lC.a, {
                                    link: "tel:".concat(e.replace(/[^A-Z0-9]/gi, "")),
                                    onMouseEnter: this.handleEnter,
                                    onMouseLeave: this.handleLeave
                                }, e)), c.a.createElement("span", null, c.a.createElement(lC.a, {
                                    link: "mailto:".concat(t),
                                    onMouseEnter: this.handleEnter,
                                    onMouseLeave: this.handleLeave
                                }, t)));
                            return this.renderInfoBlock(n, r)
                        }
                    }, {
                        key: "renderLocation",
                        value: function (C) {
                            var e = C.address,
                                t = C.title,
                                n = c.a.createElement("div", {
                                    className: "info-content"
                                }, c.a.createElement("a", {
                                    href: "http://maps.google.com/?q=".concat(e),
                                    dangerouslySetInnerHTML: {
                                        __html: Object(dC.a)(e)
                                    },
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onMouseEnter: this.handleEnter,
                                    onMouseLeave: this.handleLeave
                                }));
                            return this.renderInfoBlock(t, n)
                        }
                    }, {
                        key: "renderSocial",
                        value: function (C) {
                            var e = this,
                                t = C.items,
                                n = C.title,
                                r = c.a.createElement("div", {
                                    className: "info-content"
                                }, t.map((function (C, t) {
                                    return c.a.createElement(lC.a, {
                                        className: "social",
                                        key: t,
                                        link: C.link,
                                        onMouseEnter: e.handleEnter,
                                        onMouseLeave: e.handleLeave
                                    }, C.text)
                                })));
                            return this.renderInfoBlock(n, r)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var C = this.props.generalData,
                                e = C.contact,
                                t = C.location,
                                n = C.social,
                                r = C.menu;
                            return this.props.generalData && c.a.createElement("div", {
                                className: Q()("Menu", this.props.className, this.state.isMenuOpen ? "isOpen" : "isClosed"),
                                ref: this.el
                            }, c.a.createElement("div", {
                                className: "bg",
                                ref: this.bg
                            }), c.a.createElement("div", {
                                className: "content grid-container"
                            }, c.a.createElement("div", {
                                className: "info",
                                ref: this.info
                            }, this.renderContact(e), this.renderLocation(t), this.renderSocial(n)), c.a.createElement("ul", {
                                className: "links",
                                ref: this.linksRef
                            }, this.renderMenuItems(r.navigation))))
                        }
                    }]), t
                }(c.a.PureComponent);
            bC.defaultProps = {};
            var OC = Object(B.a)(Object(l.c)((function (C) {
                    var e = C.menuState,
                        t = C.generalData,
                        n = C.router,
                        r = C.previousRoute;
                    return {
                        menuState: e,
                        generalData: t,
                        routerPath: n.location.pathname,
                        previousRoute: r
                    }
                }), (function (C) {
                    return {
                        setMenuState: function (e) {
                            return C(O(e))
                        },
                        setCursorHover: function (e) {
                            return C(Object(w.l)(e))
                        }
                    }
                }))(bC)),
                kC = t(247),
                wC = t(75),
                TC = t.n(wC),
                _C = t(40),
                RC = t(78),
                AC = t.n(RC),
                jC = t(1),
                MC = (t(207), function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        var C;
                        Object(I.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (C = e.call.apply(e, [this].concat(r))).state = {
                            isOpen: !1,
                            isClosing: !1
                        }, C.topLine = c.a.createRef(), C.bottomLine = c.a.createRef(), C.icon = c.a.createRef(), C.checkColor = function () {
                            z.a.to([C.topLine.current, C.bottomLine.current], 1, {
                                backgroundColor: C.props.color,
                                ease: vC.a
                            })
                        }, C.handleClick = function () {
                            C.state.isClosing || (C.state.isOpen ? (C.setState({
                                isClosing: !0
                            }), C.props.closeMenu()) : (C.props.openMenu(), C.setState({
                                isOpen: !0
                            }), C.animateToClose()))
                        }, C.animateToClose = function () {
                            z.a.to([C.topLine.current, C.bottomLine.current], 1, {
                                backgroundColor: "#000",
                                ease: vC.a
                            }), z.a.to(C.topLine.current, 1, {
                                rotation: -45,
                                ease: vC.a
                            }), z.a.to(C.bottomLine.current, 1, {
                                rotation: 45,
                                x: 0,
                                y: 0,
                                scaleX: 40,
                                ease: vC.a
                            }), z.a.to(C.icon.current, 1, {
                                y: 20,
                                ease: vC.a
                            })
                        }, C.reset = function () {
                            z.a.to([C.topLine.current, C.bottomLine.current], 1, {
                                backgroundColor: C.props.color,
                                ease: vC.a
                            }), z.a.to(C.topLine.current, 1, {
                                rotation: 0,
                                ease: vC.a
                            }), z.a.to(C.bottomLine.current, 1, {
                                rotation: 0,
                                x: 5,
                                y: 10,
                                scaleX: 30,
                                ease: vC.a
                            }), z.a.to(C.icon.current, 1, {
                                x: 20,
                                y: 15,
                                ease: vC.a
                            })
                        }, C.handleEnter = function () {
                            C.props.setCursorHover(!0)
                        }, C.handleLeave = function () {
                            C.props.setCursorHover(!1)
                        }, C
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            z.a.set(this.topLine.current, {
                                scaleX: 40
                            }), z.a.set(this.bottomLine.current, {
                                x: 5,
                                y: 10,
                                scaleX: 30
                            }), z.a.set(this.icon.current, {
                                x: 20,
                                y: 15
                            }), z.a.from(this.icon.current, 1, {
                                scaleX: 0,
                                ease: vC.a,
                                transformOrigin: "center right"
                            }), this.checkColor()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {
                            var t = this.props,
                                n = t.color,
                                r = t.menuState;
                            C.menuState !== r && r === pC && this.setState({
                                isClosing: !1,
                                isOpen: !1
                            }), r === hC && this.reset(), n !== C.color && this.checkColor()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return c.a.createElement("div", {
                                className: Q()("HamburgerButton", this.props.className),
                                onClick: this.handleClick,
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave
                            }, c.a.createElement("ul", {
                                className: "icon",
                                ref: this.icon
                            }, c.a.createElement("li", {
                                ref: this.topLine
                            }), c.a.createElement("li", {
                                ref: this.bottomLine
                            })))
                        }
                    }]), t
                }(c.a.PureComponent));
            MC.defaultProps = {};
            var PC = Object(l.c)((function (C) {
                return {
                    menuState: C.menuState
                }
            }), (function (C) {
                return {
                    openMenu: function () {
                        return C(O(fC))
                    },
                    closeMenu: function () {
                        return C(O(hC))
                    },
                    setCursorHover: function (e) {
                        return C(Object(w.l)(e))
                    }
                }
            }))(MC);

            function DC() {
                return (DC = Object.assign || function (C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }).apply(this, arguments)
            }

            function xC(C, e) {
                if (null == C) return {};
                var t, n, r = function (C, e) {
                    if (null == C) return {};
                    var t, n, r = {},
                        a = Object.keys(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = C[t]);
                    return r
                }(C, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(C, t) && (r[t] = C[t])
                }
                return r
            }
            var NC = c.a.createElement("style", {
                    type: "text/css"
                }, "\n\t.logo-text{fill:#FFFFFF;}\n\t.logo-dot{fill:#F9A15E;}\n"),
                IC = c.a.createElement("g", {
                    id: "Layer_1"
                }, c.a.createElement("g", {
                    className: "logo-text"
                }, c.a.createElement("path", {
                    d: "M154.6,75.9v14.5h-30.2V85c-6,4.2-12.1,6.3-18.3,6.3c-6.1,0-10.8-1.7-14.3-5.1c-3.4-3.4-5.2-8.2-5.2-14.4V42 h-9.4V27.5h29.4v39.2c0,3.1,0.5,5.2,1.4,6.4c1,1.1,2.7,1.7,5.2,1.7c3.4,0,7.1-1.5,11.1-4.5V42h-9.7V27.5h29.8v48.4H154.6z"
                }), c.a.createElement("path", {
                    d: "M224.4,75.9v14.5H194v-7.5c-5.6,5.6-11.7,8.4-18.2,8.4c-7.8,0-14.3-3.2-19.5-9.5c-5.2-6.4-7.7-14.1-7.7-23.1 c0-9.2,2.6-16.9,7.9-23.2c5.3-6.3,11.7-9.5,19.4-9.5c7.3,0,13.4,2.9,18.1,8.6v-20h-9.8V0h29.9v75.9H224.4z M194.2,58.8 c0-6-1.3-10.3-3.9-12.9c-2.6-2.6-5.5-3.8-8.8-3.8c-3.9,0-7,1.5-9.1,4.6c-2.1,3.1-3.2,7.1-3.2,12.1c0,4.7,1.1,8.7,3.2,11.9 c2.1,3.2,5.2,4.8,9.2,4.8c3.3,0,6.3-1.3,8.8-3.9C192.9,68.9,194.2,64.7,194.2,58.8z"
                }), c.a.createElement("path", {
                    d: "M293.3,75.9v14.5h-30.4v-7.5c-5.6,5.6-11.7,8.4-18.2,8.4c-7.8,0-14.3-3.2-19.5-9.5 c-5.2-6.4-7.7-14.1-7.7-23.1c0-9.2,2.6-16.9,7.9-23.2c5.3-6.3,11.7-9.5,19.4-9.5c7.3,0,13.4,2.9,18.1,8.6v-20h-9.8V0h29.9v75.9 H293.3z M263.1,58.8c0-6-1.3-10.3-3.9-12.9c-2.6-2.6-5.5-3.8-8.8-3.8c-3.9,0-7,1.5-9.1,4.6c-2.1,3.1-3.2,7.1-3.2,12.1 c0,4.7,1.1,8.7,3.2,11.9c2.1,3.2,5.2,4.8,9.2,4.8c3.3,0,6.3-1.3,8.8-3.9C261.8,68.9,263.1,64.7,263.1,58.8z"
                }), c.a.createElement("path", {
                    d: "M287.6,90.4V75.9h10.1V14.5h-10.1V0h30.1v32.5c6.3-4.4,12.3-6.6,17.9-6.6c12.9,0,19.3,7.7,19.3,23.2v26.8h9.2 v14.5h-29.3V50c0-2.9-0.5-5-1.6-6.1c-1.1-1.1-2.7-1.7-4.8-1.7c-3,0-6.6,1.3-10.7,4v29.6h9v14.5H287.6z"
                }), c.a.createElement("path", {
                    d: "M431.2,75.9v14.5H401v-5c-5.4,3.9-11.1,5.9-17.2,5.9c-6.2,0-11.6-1.8-16.1-5.3c-4.5-3.6-6.8-8.3-6.8-14.3 c0-6,2.4-11.1,7.1-15.1c4.8-4.1,10.9-6.1,18.4-6.1c4.2,0,9,1.1,14.5,3.2v-3.8c0-3.2-1.1-5.8-3.2-7.9c-2.2-2.1-5.1-3.1-8.7-3.1 c-4.5,0-8.4,1.6-11.6,4.9l-16.2-2.9c4.7-9.9,14.8-14.9,30.5-14.9c6.1,0,11.1,0.7,15.1,2c4,1.4,6.9,3.1,8.9,5.3 c1.9,2.2,3.3,4.5,4.1,7.1c0.8,2.6,1.2,6.8,1.2,12.6v22.9H431.2z M401,67.1c-4.9-3-8.7-4.5-11.6-4.5c-2.3,0-4.4,0.7-6.3,2 c-1.9,1.3-2.8,3.3-2.8,5.8c0,2.3,0.8,4.3,2.3,5.9c1.5,1.6,3.5,2.5,5.8,2.5c3.7,0,7.9-2.2,12.6-6.6V67.1z"
                }), c.a.createElement("path", {
                    d: "M6.4,110.5V95.2h31.4v64.1c0,8.3-0.8,14.5-2.3,18.5c-1.5,4-4.4,7.2-8.8,9.5c-4.4,2.3-10.8,3.5-19.1,3.5 c-3.1,0-5.6-0.1-7.6-0.3v-17c1.4,0.2,2.7,0.3,4,0.3c4.1,0,6.9-0.4,8.6-1.3c1.7-0.9,2.8-2,3.3-3.4c0.5-1.4,0.8-3.9,0.8-7.5v-50.9 H6.4z"
                }), c.a.createElement("path", {
                    d: "M74.6,162.9c-9.8,0-18-3.1-24.7-9.3c-6.7-6.2-10.1-14.6-10.1-25.4c0-10.8,3.4-19.2,10.1-25.4 c6.7-6.2,15-9.3,24.7-9.3c9.8,0,18.1,3.1,24.8,9.3c6.7,6.2,10.1,14.6,10.1,25.4c0,10.6-3.3,19.1-9.9,25.3 C92.8,159.8,84.5,162.9,74.6,162.9z M74.5,146.5c3.9,0,7.1-1.5,9.5-4.5c2.4-3,3.7-7.7,3.7-14.2c0-5.7-1.2-10.1-3.6-13.2 c-2.4-3.2-5.6-4.8-9.6-4.8c-8.7,0-13.1,6.3-13.1,18.9c0,5.2,1.1,9.4,3.2,12.8C66.9,144.8,70.1,146.5,74.5,146.5z"
                }), c.a.createElement("path", {
                    d: "M106.4,110.5V95.2h31.3v6.2c6.4-4.8,12.9-7.2,19.4-7.2c13.4,0,20,8.5,20,25.6v26.4h10v15.3H156v-40.1 c0-3.6-0.5-6.1-1.5-7.4c-1-1.3-2.6-2-4.8-2c-3.9,0-7.9,1.4-12,4.3v29.9h10.2v15.3h-41.4v-15.3h10.1v-35.7H106.4z"
                }), c.a.createElement("path", {
                    d: "M235,141.5l16.4,5.3c-6.9,10.8-17.6,16.2-32.3,16.2c-11.7,0-20.8-3.1-27.3-9.2c-6.5-6.2-9.8-14.3-9.8-24.3 c0-10.2,3.4-18.7,10.1-25.6c6.7-6.8,15.3-10.3,25.8-10.3c7.6,0,14.1,1.9,19.6,5.7c5.5,3.8,9.3,8.6,11.5,14.3 c2.1,5.7,3.2,12.1,3.2,19.1h-49.3c0.3,6,2.2,10.3,5.7,12.8c3.5,2.5,7.2,3.8,11,3.8C224.7,149.3,229.9,146.7,235,141.5z M231,120.9 c-0.5-3.7-1.9-6.8-4.3-9.4c-2.4-2.6-5.7-3.9-9.8-3.9c-7.7,0-12.3,4.4-13.5,13.3H231z"
                }), c.a.createElement("path", {
                    d: "M254.9,161.4v-22.8h15.5c0.1,3.1,1.6,5.6,4.3,7.4c2.7,1.8,6.1,2.8,10.1,2.8c3.5,0,6.2-0.6,8.1-1.8 c1.9-1.2,2.9-2.7,2.9-4.6c0-1.7-0.9-3.1-2.7-4c-1.8-1-5.3-1.9-10.5-2.7c-10.7-1.7-18.4-4.4-23.2-7.9c-4.7-3.5-7.1-8.2-7.1-14 c0-5.5,2.2-10.1,6.7-13.8c4.5-3.8,10.4-5.6,17.8-5.6c6,0,11.6,1.1,16.8,3.3v-2.3h15.1v19.2h-15.1c-1.4-4.6-6.2-6.9-14.5-6.9 c-6.1,0-9.2,1.7-9.2,5.1c0,1.3,0.6,2.2,1.9,2.9c1.3,0.7,4.5,1.4,9.6,2.4c8.2,1.4,14.3,2.8,18.3,4.2c4.1,1.4,7.3,3.8,9.7,7 c2.4,3.3,3.7,7.2,3.7,11.7c0,6.5-2.3,11.8-6.9,15.9c-4.6,4.1-11.2,6.2-19.7,6.2c-7.9,0-13.3-1.6-16.2-4.8v3.3H254.9z"
                }), c.a.createElement("path", {
                    d: "M37.3,0v34.6c5-5.8,11-8.7,17.9-8.7c8.1,0,14.6,3.1,19.7,9.2c5,6.1,7.6,13.9,7.6,23.5c0,10.2-2.5,18.2-7.6,24 c-5,5.8-11.4,8.7-19.1,8.7c-6.9,0-13.1-2.7-18.4-8.2v7.3h-31V75.9h10.9V14.5H6.3V0H37.3z M61.8,58.4c0-5.4-1.1-9.4-3.3-12.1 c-2.2-2.7-5.1-4.1-8.8-4.1c-3.5,0-6.4,1.3-8.9,4c-2.5,2.7-3.7,7.1-3.7,13.1c0,5.1,1.2,9.1,3.5,12c2.3,2.9,5.3,4.4,8.9,4.4 c3.5,0,6.4-1.4,8.8-4.2C60.7,68.6,61.8,64.3,61.8,58.4z"
                }))),
                HC = c.a.createElement("g", {
                    className: "logo-dot"
                }, c.a.createElement("path", {
                    d: "M338.8,153c0,5.7-4.6,10.3-10.3,10.3c-5.7,0-10.3-4.6-10.3-10.3c0-5.7,4.6-10.3,10.3-10.3 C334.2,142.7,338.8,147.3,338.8,153z"
                })),
                ZC = function (C) {
                    var e = C.svgRef,
                        t = C.title,
                        n = xC(C, ["svgRef", "title"]);
                    return c.a.createElement("svg", DC({
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 431.2 190.7",
                        style: {
                            enableBackground: "new 0 0 431.2 190.7"
                        },
                        xmlSpace: "preserve",
                        ref: e
                    }, n), t ? c.a.createElement("title", null, t) : null, NC, IC, HC)
                },
                WC = c.a.forwardRef((function (C, e) {
                    return c.a.createElement(ZC, DC({
                        svgRef: e
                    }, C))
                })),
                BC = (t.p, t(208), -1),
                VC = 1,
                UC = [CC.b.Landing, CC.b.ProjectDetail],
                zC = [CC.b.Private],
                GC = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        var C;
                        Object(I.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (C = e.call.apply(e, [this].concat(r))).state = {
                            isWhite: null,
                            isSolid: !1,
                            isActive: !0
                        }, C.logo = c.a.createRef(), C.oldScrollPos = 0, C.setHeaderState = function () {
                            var e = C.shouldBeHidden(C.props.location),
                                t = C.shouldBeWhite(C.props.menuState, C.props.location),
                                n = C.shouldBeSolid(C.props.menuState);
                            return t && !n && C.animateLight(), t || C.animateDark(), {
                                isHidden: e,
                                isWhite: t,
                                isSolid: n,
                                isActive: !0
                            }
                        }, C.scrollListener = TC()((function (e) {
                            var t, n = Object(_C.a)();
                            if (n !== C.oldScrollPos) {
                                t = n > C.oldScrollPos ? VC : BC, C.oldScrollPos = n;
                                var r = .1 * C.props.windowHeight;
                                n >= r && t === VC ? (C.setState({
                                    isActive: !1
                                }), C.animateDark()) : n >= r && t === BC ? (C.setState({
                                    isActive: !0,
                                    isSolid: !0
                                }), C.animateDark()) : (C.setState({
                                    isActive: !0,
                                    isSolid: !1
                                }), C.state.isWhite && C.animateLight())
                            }
                        }), 100), C.handleEnter = function () {
                            C.props.setCursorHover(!0)
                        }, C.handleLeave = function () {
                            C.props.setCursorHover(!1)
                        }, C
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            z.a.from(this.logo.current, 1, {
                                x: 100,
                                ease: vC.a
                            }), this.setState(this.setHeaderState), this.setupScrollListener()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {
                            C.menuState === this.props.menuState && C.location === this.props.location || this.setState(this.setHeaderState)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.vs && (this.vs.off(this.scrollListener, this), this.vs.destroy())
                        }
                    }, {
                        key: "shouldBeWhite",
                        value: function (C, e) {
                            var t = UC.find((function (C) {
                                return Object(P.a)(e.pathname, C)
                            }));
                            switch (!0) {
                                case C === fC:
                                    return !1;
                                case t && t.length > 0:
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                    }, {
                        key: "shouldBeSolid",
                        value: function (C) {
                            switch (!0) {
                                case Object(_C.a)() >= .1 * this.props.windowHeight && C !== fC:
                                    return !0;
                                case C === fC:
                                default:
                                    return !1
                            }
                        }
                    }, {
                        key: "shouldBeHidden",
                        value: function (C) {
                            var e = zC.find((function (e) {
                                return Object(P.a)(C.pathname, e)
                            }));
                            return e && e.length > 0
                        }
                    }, {
                        key: "setupScrollListener",
                        value: function () {
                            this.vs = new AC.a({
                                limitInertia: !1
                            }), this.vs.on(this.scrollListener, this)
                        }
                    }, {
                        key: "animateDark",
                        value: function () {
                            var C = this.logo.current.querySelector(".logo-text");
                            jC.v.to(C, {
                                duration: 1,
                                fill: "rgba(0, 0, 0, 1)",
                                ease: vC.a
                            })
                        }
                    }, {
                        key: "animateLight",
                        value: function () {
                            var C = this.logo.current.querySelector(".logo-text");
                            jC.v.to(C, {
                                duration: 1,
                                fill: "rgba(255, 255, 255, 1)",
                                ease: vC.a
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var C = this.props.className,
                                e = this.state,
                                t = e.isWhite,
                                n = e.isSolid,
                                r = e.isActive,
                                a = e.isHidden;
                            return c.a.createElement("div", {
                                className: Q()("Header", C, {
                                    "is-solid": n,
                                    "dark-theme": !t,
                                    "is-active": r,
                                    "is-hidden": a
                                })
                            }, c.a.createElement("div", {
                                className: "content"
                            }, c.a.createElement("div", {
                                ref: this.logo
                            }, c.a.createElement(kC.a, {
                                to: CC.b.Landing,
                                className: "logo",
                                ref: this.logo,
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave
                            }, c.a.createElement(WC, null))), c.a.createElement(PC, {
                                className: "hamburger-button",
                                color: t && !n ? "#fff" : "#000"
                            })))
                        }
                    }]), t
                }(c.a.PureComponent);
            GC.defaultProps = {};
            var FC = Object(l.c)((function (C) {
                    return {
                        menuState: C.menuState,
                        windowHeight: C.windowSize.height
                    }
                }), (function (C) {
                    return {
                        setCursorHover: function (e) {
                            return C(Object(w.l)(e))
                        }
                    }
                }))(GC),
                KC = t(63),
                YC = t(43),
                JC = t(56),
                XC = t(119),
                qC = t(117),
                QC = (t(237), c.a.forwardRef((function (C, e) {
                    var t = C.url,
                        n = C.className,
                        r = C.transitionState,
                        a = C.onClose,
                        o = C.height,
                        s = C.width,
                        u = C.isPlaying,
                        l = C.onCloseEnter,
                        d = C.onCloseLeave,
                        f = Object(i.useRef)(null),
                        h = Object(i.useRef)(null),
                        p = Object(i.useRef)(null),
                        v = Object(i.useRef)(null),
                        m = Object(i.useRef)(null);
                    return Object(i.useLayoutEffect)((function () {
                        return function () {
                                f.current = z.a.timeline({
                                    paused: !0
                                });
                                var C = f.current;
                                C.from(h.current, {
                                    autoAlpha: 0
                                }, 0), C.from(v.current, {
                                    duration: .3,
                                    autoAlpha: 0,
                                    ease: vC.a
                                }, 0), C.from(m.current, {
                                    duration: .7,
                                    y: 80,
                                    autoAlpha: 0,
                                    ease: vC.a
                                }, .067), C.from(p.current, {
                                    duration: .7,
                                    scale: .7,
                                    autoAlpha: 0,
                                    ease: vC.a
                                }, .134)
                            }(),
                            function () {
                                YC.a.unlock()
                            }
                    }), []), Object(i.useEffect)((function () {
                        r === JC.a.ENTERING ? (YC.a.lock(), f.current.restart()) : r === JC.a.EXITING && (YC.a.unlock(), f.current.pause(), z.a.to(h.current, {
                            duration: .3,
                            autoAlpha: 0,
                            ease: vC.a
                        }))
                    }), [r, a]), c.a.createElement("div", {
                        className: Q()("VideoOverlay", n),
                        ref: h
                    }, c.a.createElement("div", {
                        className: "background-container",
                        onClick: a,
                        ref: v
                    }), c.a.createElement("div", {
                        className: "player-container",
                        ref: m
                    }, c.a.createElement(qC.a, {
                        url: t,
                        height: o,
                        width: s,
                        autoplay: !0,
                        isPlaying: u
                    })), c.a.createElement(XC.a, {
                        onMouseEnter: function () {
                            l && l()
                        },
                        onMouseLeave: function () {
                            d && d()
                        },
                        ref: p,
                        className: "close-button",
                        "data-url": t,
                        ariaLabel: "Close video",
                        isWhite: !0,
                        onClick: a
                    }))
                })));
            QC.defaultProps = {};
            var $C = c.a.memo(QC);

            function Ce() {
                return (Ce = Object.assign || function (C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }).apply(this, arguments)
            }

            function ee(C, e) {
                if (null == C) return {};
                var t, n, r = function (C, e) {
                    if (null == C) return {};
                    var t, n, r = {},
                        a = Object.keys(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = C[t]);
                    return r
                }(C, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(C, t) && (r[t] = C[t])
                }
                return r
            }
            var te = c.a.createElement("path", {
                    d: "M19.416 3.00781C14.0323 4.95845 8.72955 7.18316 3.48699 9.48953C3.00877 9.69991 1.50444 9.88011 2.00968 10.0131C3.45212 10.3927 4.71655 11.6491 5.73946 12.6533C8.90432 15.7601 11.8283 18.8962 14.7721 22.2159C15.5955 23.1445 16.6843 24.2684 17.0115 25.4896",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                ne = c.a.createElement("path", {
                    d: "M19.27 4.18164C19.065 9.83577 18.2801 15.3338 17.8032 20.9362C17.6692 22.5107 17.3539 24.1204 17.4248 25.7123",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                re = c.a.createElement("path", {
                    d: "M15.7718 5.13664C12.8553 6.29784 3.90532 9.0148 7.01831 8.6102C8.08029 8.47217 9.19691 8.05025 10.1478 7.58011C11.6091 6.85756 13.5548 6.53074 14.8931 5.67007C17.1243 4.23522 9.78328 7.61361 7.91594 9.49774C5.67274 11.7611 14.0826 7.88795 17.1607 7.06318C20.7415 6.10371 10.2887 9.86254 6.96218 11.4986C2.32605 13.7787 6.84358 11.8434 8.84767 11.2275C11.2845 10.4787 13.7705 9.95367 16.1619 9.05482C16.9954 8.74154 19.3348 7.74378 17.1084 8.6948C16.2815 9.04799 8.39618 12.7198 8.73975 14.0021C8.88604 14.548 16.3596 12.2583 16.9562 12.0985C18.548 11.6719 17.4759 12.0015 16.6321 12.3981C14.2563 13.5149 11.7441 14.4126 9.61087 15.9822C9.52012 16.049 7.51453 17.7598 7.78829 17.9179C8.39765 18.2697 10.8411 17.185 11.4834 17.0129C11.8622 16.9114 14.0319 16.3063 13.7274 16.4116C12.3028 16.9045 11.0056 17.9415 9.92036 18.9642C7.52417 21.2223 10.7164 19.922 12.134 19.5204C13.2383 19.2075 14.2064 18.6176 15.2949 18.2903C16.2082 18.0157 13.8937 19.152 13.6315 19.3107C12.8273 19.7975 12.061 20.4785 11.2245 20.8921C11.0407 20.983 12.755 20.4957 13.1362 20.4012C16.7675 19.5012 12.9333 20.6591 12.8114 21.2544",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                ae = c.a.createElement("path", {
                    d: "M16.9462 10.4866C18.3027 10.1231 19.3972 10.1647 20.7725 10.3962C22.067 10.6141 23.337 10.7416 24.5728 11.2282C26.2362 11.883 28.081 12.4738 29.6124 13.4082C31.3789 14.4862 32.7905 16.3597 33.9056 18.07C35.0951 19.8947 36.0446 21.8641 36.8959 23.8655C37.3394 24.9081 37.6097 25.9953 37.9022 27.087C38.1282 27.9303 38.0974 30.1581 38.1209 31.0378C37.9781 33.2689 37.4861 34.0859 36.5504 36.0727C35.7837 37.7005 34.7862 39.2194 33.8495 40.7518C33.1389 41.9145 32.3959 43.0921 31.5419 44.1552C29.7057 46.4411 27.3488 48.5924 24.8927 50.193C24.1338 50.6875 23.3309 51.2235 22.4572 51.4929C22.0753 51.6106 22.5354 51.5896 22.6808 51.5506",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                oe = c.a.createElement("path", {
                    d: "M16.9848 16.7221C19.7923 16.0267 23.0282 18.8424 24.6011 21.0654C25.5408 22.3935 26.2883 24.0806 26.7072 25.6441C27.2133 27.5327 27.9682 29.6318 27.607 31.6078C27.4283 32.5855 27.3898 33.56 26.9715 34.4724C26.4443 35.6224 25.8679 36.673 25.1737 37.7281C24.6333 38.5494 23.8855 39.3672 23.1659 40.0313C22.5032 40.6429 21.9031 41.3624 21.1659 41.8812C19.8482 42.8083 18.4983 43.6506 17.0658 44.3867C16.4305 44.7131 14.3502 45.2603 15.0393 45.0757",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                ie = c.a.createElement("path", {
                    d: "M18.8315 14.3772C18.8121 14.2954 18.7106 12.3243 18.8038 12.3783C18.9836 12.4826 18.704 13.876 18.6848 14.0244C18.5613 14.9786 18.4532 15.9245 18.3965 16.8856C18.3919 16.9637 18.3288 18.7123 18.3946 18.6767C18.8884 18.4093 19.1139 17.0497 19.2357 16.615C19.4942 15.6925 19.5957 14.7833 19.7163 13.8395C19.7858 13.2959 19.9812 11.7174 20.1231 12.247C20.2514 12.7255 19.9128 13.4323 19.8055 13.8809C19.5722 14.8566 19.4202 15.8506 19.209 16.8313C19.1081 17.2998 18.8638 17.8583 18.8648 18.3416C18.8655 18.691 19.4762 17.9695 19.6789 17.6856C20.7953 16.1215 21.4347 13.9851 21.9727 12.1501C22.0006 12.0548 22.308 11.039 22.3683 11.3906C22.6532 13.0527 21.9644 15.0634 21.6838 16.7105C21.6678 16.8049 21.3821 18.0582 21.5414 17.9773C22.2698 17.6073 22.7381 16.5704 23.0795 15.8922C23.7344 14.5913 24.299 13.24 24.9202 11.9223C25.1083 11.5234 25.7385 10.3777 25.4482 10.7091C24.9595 11.267 24.7762 12.4899 24.4997 13.1721C23.8557 14.7612 22.923 16.4181 22.4802 18.0787C22.3352 18.6223 23.2383 17.8458 23.2437 17.8414C24.3352 16.9442 25.2403 15.8513 26.1891 14.8107C26.875 14.0583 27.621 13.3439 28.2428 12.5351C28.5512 12.1339 28.2948 12.1653 27.9933 12.4059C26.4062 13.6725 25.2255 15.566 24.0951 17.2277C24.0522 17.2908 23.3338 18.5498 23.3614 18.5483C23.693 18.531 23.8856 18.1356 24.1099 17.8903C25.0329 16.8808 25.8846 15.8 26.7417 14.7345C27.474 13.824 28.1713 12.8868 28.8998 11.9735C29.1243 11.692 29.8563 11.0341 29.499 11.0745C29.0402 11.1262 28.3465 12.7317 28.1676 13.0323C27.3916 14.3365 26.6631 15.6702 25.944 17.0068C25.6077 17.6317 25.2688 18.2582 24.9517 18.8934C24.8789 19.0392 24.5186 19.5951 24.9532 19.4092C26.0842 18.9254 27.0342 17.8939 27.8797 17.037C28.8027 16.1016 29.6796 15.1161 30.5619 14.1422C31.3886 13.2295 30.8002 13.6461 30.235 14.2101C28.977 15.4656 27.785 16.7991 26.5675 18.0944C25.8254 18.8839 25.0758 19.6679 24.3446 20.4676C24.0181 20.8247 23.8319 21.0531 24.5006 20.831C26.3748 20.2083 28.1516 18.6582 29.6816 17.443C29.9626 17.2198 30.0829 17.1016 30.3491 16.872C30.5063 16.7365 31.0362 16.4667 30.829 16.4755C29.9106 16.5145 28.6392 17.4854 27.8831 17.9249C27.7134 18.0236 24.721 20.1106 24.7646 20.1394C25.0863 20.3521 26.024 19.9853 26.3464 19.9182C27.1945 19.7414 28.0355 19.5571 28.8725 19.3328C29.0475 19.2859 30.9846 18.7499 30.0998 19.0039C28.6436 19.422 27.0538 20.0999 25.8567 21.0558C25.793 21.1066 25.63 21.1972 25.6982 21.242C25.9147 21.3841 27.1088 21.0308 27.1746 21.0163C28.6404 20.6944 30.1376 20.3509 31.5362 19.7954C31.9391 19.6353 32.3745 19.4326 32.7342 19.1868C32.8533 19.1054 31.4202 19.4731 31.3021 19.5052C29.1443 20.0921 26.9971 20.6805 24.9838 21.6622C24.8167 21.7436 24.626 21.8347 24.9246 21.8545C25.926 21.9208 26.9287 21.86 27.9247 21.7499C29.8414 21.5379 31.7241 21.1288 33.5903 20.6565C33.9227 20.5724 34.0761 20.6218 33.5938 20.7667C32.386 21.1294 31.1558 21.4265 29.9377 21.7529C29.7562 21.8015 27.6078 22.2581 28.25 22.4534C29.6781 22.8878 31.5945 22.7701 33.0404 22.4442C33.8353 22.265 33.2892 22.3841 32.8233 22.5089C31.4421 22.879 30.0608 23.2491 28.6796 23.6192C28.1786 23.7534 25.3941 24.2584 27.3109 24.5872C29.3217 24.9321 31.4109 24.6614 33.4307 24.5812C33.689 24.5709 35.3755 24.5208 34.2653 24.8281C32.57 25.2972 30.8666 25.7387 29.1676 26.194C28.6314 26.3377 28.9139 26.4163 29.317 26.533C30.2179 26.7937 31.1748 26.7836 32.103 26.7471C32.7774 26.7206 33.442 26.6327 34.1128 26.568C34.8165 26.5002 33.8678 26.699 33.7464 26.7316C32.0088 27.1971 30.1837 27.5481 28.4847 28.1414C28.0359 28.2982 29.2328 28.8161 29.2614 28.8286C30.3316 29.2975 31.5091 29.583 32.6584 29.7678C33.449 29.895 34.2543 29.966 35.0549 29.9622C35.8452 29.9584 34.9346 30.166 34.6931 30.216C33.1401 30.5372 31.5424 30.5913 29.9912 30.9204C29.8726 30.9455 29.4857 30.9925 29.7586 31.1461C30.4186 31.5173 31.2101 31.7458 31.9266 31.9702C33.0584 32.3247 36.5615 32.938 35.4307 32.5801C33.196 31.8728 30.5927 32.1355 28.2829 32.1035C27.9656 32.0991 27.1449 31.9734 27.3389 32.2257C27.8453 32.8846 29.2019 33.3332 29.9336 33.6217C31.0628 34.067 32.2644 34.3879 33.4635 34.571C33.9257 34.6416 35.2362 35.0245 34.854 34.7539C34.2566 34.331 33.1668 34.2262 32.4809 34.0632C31.4495 33.8181 30.4057 33.6482 29.3658 33.4471C29.2909 33.4326 28.1757 33.2519 28.3723 33.3604C29.2687 33.8554 30.3655 34.1371 31.3311 34.4628C32.0245 34.6967 32.7323 34.8795 33.433 35.089C33.5836 35.134 34.2877 35.2144 34.3966 35.3797C34.4514 35.463 33.0486 35.3305 33.0282 35.3281C32.0869 35.2203 31.1541 35.2174 30.2088 35.2079C29.8861 35.2046 29.3865 35.1221 29.0708 35.2383C28.9818 35.2711 29.0505 35.3482 29.089 35.4034C29.4008 35.85 29.9324 36.1861 30.3776 36.4697C31.5494 37.216 32.8235 37.8682 34.1255 38.3539C34.4034 38.4576 34.5717 38.5106 34.847 38.5919C35.0075 38.6394 35.375 38.8856 35.3316 38.7235C35.3049 38.6241 34.2006 38.3351 34.1984 38.3344C33.004 37.9595 31.7932 37.6091 30.5771 37.3115C30.2694 37.2362 28.2926 36.7812 29.5817 37.2907C30.2596 37.5586 30.9198 37.8747 31.6324 38.0417C31.7944 38.0797 32.4479 38.2449 31.842 38.0705C29.6459 37.4386 27.443 36.9765 25.1798 36.66C24.7557 36.6006 24.9736 36.7193 25.215 36.84C26.1636 37.3144 27.1082 37.7976 28.059 38.2673C28.6663 38.5672 29.2904 38.8349 29.8907 39.1488C30.0176 39.2152 30.3567 39.3539 30.0038 39.1577C28.6807 38.422 27.1603 37.9487 25.7053 37.5517C25.5952 37.5217 24.8097 37.2584 25.0781 37.6413C25.673 38.49 26.6517 39.07 27.5074 39.611C28.1931 40.0445 28.8724 40.4844 29.5483 40.9332C29.9595 41.2062 30.5714 41.4734 29.7373 41.1766C27.2768 40.3012 24.5524 39.5906 21.9647 39.1944C21.1912 39.076 22.4278 40.0204 22.4869 40.074C23.9223 41.3768 25.4174 42.6354 27.0021 43.7524C27.1805 43.8781 27.7978 44.2921 28.0183 44.4342C28.166 44.5294 28.5194 44.8407 28.491 44.667C28.3945 44.0787 26.7986 43.4469 26.3793 43.2266C25.1439 42.5774 23.8659 42.0374 22.5544 41.5655C22.2549 41.4577 22.9369 42.0811 23.1732 42.295C23.7803 42.8446 24.4104 43.3542 25.1087 43.7827C25.7121 44.153 26.3285 44.3691 25.2724 43.8107C23.8789 43.0738 22.4679 42.6882 21.0038 42.1705C20.7969 42.0973 20.7518 42.1437 20.8729 42.3624C21.4438 43.3928 22.2957 44.2853 23.0636 45.1671C23.5379 45.7118 24.0117 46.2622 24.528 46.768C24.9658 47.1969 24.1435 46.3645 24.076 46.3205C22.5323 45.3137 20.7146 44.5079 19.0031 43.8176C18.8399 43.7517 18.6413 43.6736 18.8765 43.9038C19.5241 44.5377 20.2977 45.0577 21.0275 45.5885C21.543 45.9635 22.0575 46.3447 22.5975 46.684C22.7245 46.7639 23.058 47.0499 22.9801 46.9213C22.5374 46.1904 21.3591 45.7764 20.6479 45.4354C19.6663 44.9647 18.6547 44.5772 17.6538 44.153C17.6019 44.131 17.0477 43.823 16.9636 43.9589C16.8051 44.2151 17.8462 45.4008 17.9639 45.5533C18.768 46.595 19.5876 47.635 20.4223 48.6523C20.7128 49.0063 21.2958 49.809 21.8036 49.8702C22.1013 49.9061 21.5202 49.3252 21.2975 49.1236C20.023 47.9696 18.5932 46.9797 17.2037 45.9727C16.4152 45.4013 15.6272 44.8369 14.8103 44.3071C14.6029 44.1726 14.3046 43.8547 14.055 43.7972C13.7796 43.7337 14.3931 44.2558 14.6006 44.4483C15.6463 45.418 16.6949 46.3905 17.7739 47.323C19.2591 48.6066 20.8305 50.0915 22.5793 51.0151C22.7858 51.1242 23.1097 51.3434 23.3517 51.3702C23.3817 51.3735 22.3754 50.509 22.3395 50.4847C21.0263 49.5971 19.6564 48.775 18.2269 48.0904C17.4215 47.7046 16.5349 47.4288 15.7609 46.9801C15.0007 46.5394 16.6815 47.8313 16.7797 47.89C18.5151 48.9272 20.7347 49.6235 22.7591 49.7906C24.7934 49.9585 16.8732 44.2808 18.7097 45.1771C20.5687 46.0843 22.4907 46.7768 24.3677 47.6278C25.6247 48.1977 23.5482 46.3005 23.3542 46.1545C22.802 45.7388 22.2694 45.2911 21.7066 44.8903C21.3745 44.6539 21.3207 44.6383 21.7914 44.7696C24.0105 45.3882 26.2239 46.0689 28.5079 46.4073C28.8518 46.4583 28.1213 45.8167 27.8586 45.588C26.876 44.7327 25.7731 44.023 24.6838 43.3149C24.3765 43.1152 22.0974 41.6666 23.6491 42.3701C25.0769 43.0174 26.5611 43.6302 28.0291 44.183C29.3549 44.6822 27.1617 42.8351 26.9463 42.6694C26.792 42.5507 24.251 41.1289 24.2746 41.0588C24.3068 40.9631 25.574 41.4657 25.6328 41.4857C26.2682 41.7018 26.9241 41.8449 27.5812 41.9765C27.6653 41.9934 28.1009 42.1218 28.1868 42.0495C28.3179 41.9392 27.1283 40.8664 27.0677 40.8136C26.4695 40.2925 25.8029 39.8659 25.179 39.3788C25.1342 39.3439 24.517 38.8462 24.6919 38.8492C25.401 38.8616 26.1934 39.1541 26.885 39.2811C28.1102 39.5061 29.342 39.696 30.5695 39.908C31.0963 39.999 31.6261 40.0748 32.1563 40.1429C32.5466 40.193 31.5666 39.6078 31.2202 39.42C29.2358 38.3437 27.0898 37.7364 25.0541 36.7982C24.3682 36.4821 25.0163 36.7711 25.3456 36.89C26.7679 37.4037 28.1912 37.8625 29.6735 38.168C31.0245 38.4464 33.0765 39.0222 34.4486 38.4177C34.6601 38.3245 33.2167 37.2403 33.2145 37.2387C31.6919 36.1569 29.99 35.399 28.3132 34.5983C27.6308 34.2724 26.9656 33.9149 26.2884 33.579C25.6414 33.258 25.8191 33.2441 26.5071 33.3504C28.8901 33.7186 31.2756 34.0085 33.6881 33.8051C34.1507 33.7661 34.1887 33.7518 33.6704 33.4961C32.5307 32.9339 31.347 32.502 30.1593 32.0582C29.5593 31.8339 28.9596 31.6066 28.3617 31.3766C28.3095 31.3565 28.035 31.3111 28.1633 31.2925C30.1903 30.998 32.2871 31.1172 34.3297 30.9015C34.8501 30.8465 35.4183 30.8018 35.9134 30.6144C36.4135 30.4251 34.9294 30.1807 34.4122 30.0429C31.7327 29.3287 28.9722 29.0039 26.2844 28.3389C26.1689 28.3103 25.5406 28.1446 26.1001 28.1857C27.2982 28.2736 28.4705 28.4426 29.6768 28.4102C31.3573 28.365 33.0686 28.2071 34.6957 27.7712C35.4185 27.5775 34.2923 27.519 34.12 27.4941C32.7533 27.2963 31.3783 27.1594 30.0022 27.0486C29.1406 26.9793 28.2748 26.9131 27.4121 26.8604C27.1463 26.8442 26.7184 26.8187 27.3198 26.9048C29.7442 27.2517 32.2335 27.1616 34.6739 27.0581C34.9513 27.0464 35.7767 27.055 35.5047 26.9989C33.709 26.6288 31.8174 26.5162 29.9975 26.3506C28.0866 26.1768 26.1638 26.1096 24.2637 25.8284C23.8172 25.7624 22.553 25.7653 22.9415 25.5358C23.8397 25.005 25.3236 24.9538 26.3163 24.7883C27.9803 24.5109 29.6284 24.1817 31.2844 23.8623C31.5829 23.8047 33.348 23.2213 33.5792 23.4827",
                    stroke: "#F8A15C",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                ce = function (C) {
                    var e = C.svgRef,
                        t = C.title,
                        n = ee(C, ["svgRef", "title"]);
                    return c.a.createElement("svg", Ce({
                        viewBox: "0 0 44 54",
                        fill: "none",
                        ref: e
                    }, n), t ? c.a.createElement("title", null, t) : null, te, ne, re, ae, oe, ie)
                },
                se = c.a.forwardRef((function (C, e) {
                    return c.a.createElement(ce, Ce({
                        svgRef: e
                    }, C))
                })),
                ue = (t.p, {
                    Icon: se,
                    copy: "For a better experience, please rotate screen."
                });
            t(238);

            function le() {
                return (le = Object.assign || function (C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }).apply(this, arguments)
            }

            function de(C, e) {
                if (null == C) return {};
                var t, n, r = function (C, e) {
                    if (null == C) return {};
                    var t, n, r = {},
                        a = Object.keys(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = C[t]);
                    return r
                }(C, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(C);
                    for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(C, t) && (r[t] = C[t])
                }
                return r
            }
            var fe = c.a.createElement("mask", {
                    id: "path-1-inside-1",
                    fill: "white"
                }, c.a.createElement("path", {
                    d: "M1.35463 11.5734C2.56181 9.33972 4.3726 7.63948 6.71596 6.53933C6.71596 6.53933 6.75146 6.53933 6.75146 6.50599C6.78697 6.50599 6.78697 6.47265 6.82247 6.47265L6.85798 6.43932L6.89349 6.40598L6.92899 6.37264L6.9645 6.3393L6.9645 6.30596C6.9645 6.30596 6.9645 6.30597 6.9645 6.27263C6.9645 6.27263 6.9645 6.27263 6.9645 6.23929C6.9645 6.20595 7 6.17261 7 6.17261L7 6.13928C7 6.13928 7 6.13927 7 6.10594C7 6.0726 7 6.00592 7 5.97258C7 5.93925 7 5.87257 7 5.83923C7 5.83923 7 5.83923 7 5.8059L7 5.77256C7 5.73922 6.9645 5.70588 6.9645 5.70588C6.9645 5.70588 6.9645 5.70588 6.9645 5.67254C6.9645 5.67254 6.9645 5.67254 6.9645 5.6392L6.9645 5.60587L6.92899 5.57253C6.92899 5.53919 6.89349 5.53919 6.89349 5.53919L6.85798 5.50585L6.82247 5.47251C6.78697 5.47251 6.78697 5.43918 6.75146 5.43918C6.75146 5.43918 6.71596 5.43918 6.71596 5.40584C4.3726 4.30569 2.56181 2.60545 1.35463 0.371803C1.1771 0.0384235 0.751032 -0.0949277 0.395977 0.0717623C0.0409222 0.238452 -0.1011 0.638507 0.0764279 0.971887C1.03508 2.7388 2.34878 4.20567 3.94653 5.33916C4.48838 5.77256 4.70384 5.83923 5.02997 6C4.71615 6.13928 4.43298 6.30596 3.94653 6.67268C2.34878 7.80618 1.03508 9.27305 0.0764283 11.04C-0.101099 11.3733 0.0409227 11.7734 0.395978 11.9401C0.751033 12.1068 1.1771 11.9067 1.35463 11.5734Z"
                })),
                he = c.a.createElement("path", {
                    d: "M1.35463 11.5734C2.56181 9.33972 4.3726 7.63948 6.71596 6.53933C6.71596 6.53933 6.75146 6.53933 6.75146 6.50599C6.78697 6.50599 6.78697 6.47265 6.82247 6.47265L6.85798 6.43932L6.89349 6.40598L6.92899 6.37264L6.9645 6.3393L6.9645 6.30596C6.9645 6.30596 6.9645 6.30597 6.9645 6.27263C6.9645 6.27263 6.9645 6.27263 6.9645 6.23929C6.9645 6.20595 7 6.17261 7 6.17261L7 6.13928C7 6.13928 7 6.13927 7 6.10594C7 6.0726 7 6.00592 7 5.97258C7 5.93925 7 5.87257 7 5.83923C7 5.83923 7 5.83923 7 5.8059L7 5.77256C7 5.73922 6.9645 5.70588 6.9645 5.70588C6.9645 5.70588 6.9645 5.70588 6.9645 5.67254C6.9645 5.67254 6.9645 5.67254 6.9645 5.6392L6.9645 5.60587L6.92899 5.57253C6.92899 5.53919 6.89349 5.53919 6.89349 5.53919L6.85798 5.50585L6.82247 5.47251C6.78697 5.47251 6.78697 5.43918 6.75146 5.43918C6.75146 5.43918 6.71596 5.43918 6.71596 5.40584C4.3726 4.30569 2.56181 2.60545 1.35463 0.371803C1.1771 0.0384235 0.751032 -0.0949277 0.395977 0.0717623C0.0409222 0.238452 -0.1011 0.638507 0.0764279 0.971887C1.03508 2.7388 2.34878 4.20567 3.94653 5.33916C4.48838 5.77256 4.70384 5.83923 5.02997 6C4.71615 6.13928 4.43298 6.30596 3.94653 6.67268C2.34878 7.80618 1.03508 9.27305 0.0764283 11.04C-0.101099 11.3733 0.0409227 11.7734 0.395978 11.9401C0.751033 12.1068 1.1771 11.9067 1.35463 11.5734Z",
                    fill: "#F8A15C"
                }),
                pe = c.a.createElement("path", {
                    d: "M1.35463 11.5734L0.471953 11.1033L0.474888 11.0979L1.35463 11.5734ZM6.71596 6.53933L6.29099 5.63412L6.49291 5.53933L6.71598 5.53933L6.71596 6.53933ZM6.75146 6.50599L5.75146 6.50599L5.75146 5.50599L6.75146 5.50599L6.75146 6.50599ZM6.82247 6.47265L7.50695 7.20169L7.21834 7.47265L6.82247 7.47265L6.82247 6.47265ZM6.85798 6.43932L7.5425 7.16831L7.54245 7.16836L6.85798 6.43932ZM6.89349 6.40598L7.57803 7.13495L7.578 7.13498L6.89349 6.40598ZM6.92899 6.37264L6.24445 5.64367L6.24451 5.64361L6.92899 6.37264ZM6.9645 6.3393L7.9645 6.3393L7.9645 6.7721L7.64898 7.06834L6.9645 6.3393ZM7 6.17261L8 6.17261L8 6.60538L7.68452 6.90161L7 6.17261ZM6.9645 5.70588L5.9645 5.70588L5.9645 3.39511L7.64902 4.97689L6.9645 5.70588ZM6.9645 5.60587L7.64898 4.87683L7.9645 5.17307L7.9645 5.60587L6.9645 5.60587ZM6.92899 5.57253L6.24451 6.30156L5.92899 6.00532L5.92899 5.57253L6.92899 5.57253ZM6.89349 5.53919L6.89345 6.53919L6.49758 6.53918L6.20898 6.2682L6.89349 5.53919ZM6.85798 5.50585L7.54248 4.77684L7.54249 4.77685L6.85798 5.50585ZM6.82247 5.47251L6.82247 4.47251L7.21836 4.47251L7.50697 4.7435L6.82247 5.47251ZM6.75146 5.43918L6.75146 4.43918L6.75146 4.43918L6.75146 5.43918ZM6.71596 5.40584L7.14093 4.50063L7.71596 4.7706L7.71596 5.40584L6.71596 5.40584ZM1.35463 0.371803L0.474871 0.847272L0.47197 0.841824L1.35463 0.371803ZM0.0764279 0.971887L-0.802563 1.44879L-0.806227 1.44191L0.0764279 0.971887ZM3.94653 5.33916L4.52514 4.52356L4.54864 4.54023L4.57114 4.55823L3.94653 5.33916ZM5.02997 6L5.47212 5.10306L7.38805 6.04752L5.43562 6.91403L5.02997 6ZM3.94653 6.67268L4.5485 7.4712L4.53695 7.47991L4.52514 7.48829L3.94653 6.67268ZM0.0764283 11.04L-0.806254 10.5699L-0.802536 10.5631L0.0764283 11.04ZM0.474888 11.0979C1.78592 8.67213 3.75805 6.82328 6.29099 5.63412L7.14093 7.44454C4.98714 8.45569 3.33771 10.0073 2.23436 12.0488L0.474888 11.0979ZM6.71596 6.53933C6.71598 5.53933 6.71552 5.53933 6.71506 5.53933C6.71491 5.53933 6.71444 5.53933 6.71414 5.53933C6.71352 5.53933 6.71291 5.53933 6.71229 5.53934C6.71105 5.53934 6.7098 5.53935 6.70855 5.53936C6.70604 5.53938 6.70351 5.53941 6.70094 5.53944C6.6958 5.53952 6.69051 5.53964 6.68509 5.53981C6.67428 5.54015 6.66275 5.54069 6.65058 5.54151C6.62658 5.54312 6.59836 5.54591 6.56691 5.55083C6.50896 5.5599 6.41533 5.57991 6.30874 5.62996C6.19973 5.68114 6.05116 5.77645 5.93053 5.94635C5.8032 6.12569 5.75146 6.32591 5.75146 6.50599L7.75146 6.50599C7.75146 6.70275 7.69529 6.91546 7.5613 7.10419C7.43402 7.28346 7.27657 7.38502 7.15868 7.44037C7.04321 7.49458 6.94071 7.51668 6.8761 7.52679C6.84132 7.53223 6.81033 7.53529 6.78439 7.53702C6.77125 7.53791 6.75896 7.53848 6.74762 7.53883C6.74194 7.53901 6.73646 7.53914 6.73119 7.53921C6.72855 7.53925 6.72596 7.53928 6.72342 7.5393C6.72215 7.53931 6.72089 7.53932 6.71964 7.53932C6.71902 7.53933 6.7184 7.53933 6.71778 7.53933C6.71748 7.53933 6.71701 7.53933 6.71686 7.53933C6.7164 7.53933 6.71594 7.53933 6.71596 6.53933ZM6.75146 5.50599C6.6763 5.50599 6.59431 5.51499 6.50898 5.53743C6.42311 5.56 6.34707 5.59271 6.2817 5.62954C6.21821 5.6653 6.17111 5.70143 6.14219 5.72539C6.12784 5.73728 6.11681 5.74716 6.11056 5.75285C6.10496 5.75794 6.10041 5.76224 6.10246 5.76032C6.10263 5.76016 6.1094 5.75377 6.11725 5.74663C6.12575 5.73889 6.13907 5.727 6.15578 5.71315C6.18942 5.68528 6.24152 5.64551 6.31055 5.60662C6.38146 5.56666 6.46361 5.53135 6.55642 5.50695C6.64868 5.4827 6.73844 5.47265 6.82247 5.47265L6.82247 7.47265C6.89764 7.47265 6.97962 7.46365 7.06496 7.44122C7.15083 7.41864 7.22687 7.38594 7.29224 7.34911C7.35572 7.31334 7.40282 7.27722 7.43175 7.25325C7.4461 7.24136 7.45713 7.23149 7.46338 7.2258C7.46897 7.22071 7.47353 7.2164 7.47147 7.21833C7.47131 7.21849 7.46454 7.22487 7.45669 7.23201C7.44818 7.23976 7.43486 7.25165 7.41816 7.2655C7.38452 7.29337 7.33242 7.33314 7.26339 7.37203C7.19247 7.41198 7.11033 7.44729 7.01752 7.47169C6.92526 7.49595 6.8355 7.50599 6.75146 7.50599L6.75146 5.50599ZM6.138 5.74361L6.17351 5.71028L7.54245 7.16836L7.50695 7.20169L6.138 5.74361ZM6.17347 5.71032L6.20897 5.67698L7.578 7.13498L7.5425 7.16831L6.17347 5.71032ZM6.20895 5.67701L6.24445 5.64367L7.61353 7.10162L7.57803 7.13495L6.20895 5.67701ZM6.24451 5.64361L6.28002 5.61027L7.64898 7.06834L7.61347 7.10167L6.24451 5.64361ZM5.9645 6.3393L5.9645 6.30596L7.9645 6.30596L7.9645 6.3393L5.9645 6.3393ZM6.9645 6.30596C7.9645 6.30596 6.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596L5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596L5.9645 6.30596L5.9645 6.30596L5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596L5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596L5.9645 6.30596C5.9645 6.30596 5.9645 6.30596 5.9645 6.30596L5.9645 6.30596C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30595 5.9645 6.30595 5.9645 6.30595C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30594 5.9645 6.30594 5.9645 6.30594C5.9645 6.30593 5.9645 6.30593 5.9645 6.30593C5.9645 6.30593 5.9645 6.30593 5.9645 6.30593C5.9645 6.30593 5.9645 6.30593 5.9645 6.30593C5.9645 6.30593 5.9645 6.30593 5.9645 6.30593C5.9645 6.30593 5.9645 6.30593 5.9645 6.30593C5.9645 6.30592 5.9645 6.30592 5.9645 6.30592C5.9645 6.30592 5.9645 6.30592 5.9645 6.30592C5.9645 6.30592 5.9645 6.30592 5.9645 6.30592C5.9645 6.30592 5.9645 6.30592 5.9645 6.30592C5.9645 6.30592 5.9645 6.30591 5.9645 6.30591C5.9645 6.30591 5.9645 6.30591 5.9645 6.30591C5.9645 6.30591 5.9645 6.30591 5.9645 6.30591C5.9645 6.30591 5.9645 6.30591 5.9645 6.30591C5.9645 6.3059 5.9645 6.3059 5.9645 6.3059C5.9645 6.3059 5.9645 6.3059 5.9645 6.3059C5.9645 6.3059 5.9645 6.3059 5.9645 6.3059C5.9645 6.3059 5.9645 6.30589 5.9645 6.30589C5.9645 6.30589 5.9645 6.30589 5.9645 6.30589C5.9645 6.30589 5.9645 6.30589 5.9645 6.30589C5.9645 6.30589 5.9645 6.30588 5.9645 6.30588C5.9645 6.30588 5.9645 6.30588 5.9645 6.30588C5.9645 6.30588 5.9645 6.30588 5.9645 6.30588C5.9645 6.30587 5.9645 6.30587 5.9645 6.30587C5.9645 6.30587 5.9645 6.30587 5.9645 6.30587C5.9645 6.30587 5.9645 6.30587 5.9645 6.30586C5.9645 6.30586 5.9645 6.30586 5.9645 6.30586C5.9645 6.30586 5.9645 6.30586 5.9645 6.30586C5.9645 6.30585 5.9645 6.30585 5.9645 6.30585C5.9645 6.30585 5.9645 6.30585 5.9645 6.30585C5.9645 6.30585 5.9645 6.30584 5.9645 6.30584C5.9645 6.30584 5.9645 6.30584 5.9645 6.30584C5.9645 6.30584 5.9645 6.30583 5.9645 6.30583C5.9645 6.30583 5.9645 6.30583 5.9645 6.30583C5.9645 6.30583 5.9645 6.30582 5.9645 6.30582C5.9645 6.30582 5.9645 6.30582 5.9645 6.30582C5.9645 6.30582 5.9645 6.30581 5.9645 6.30581C5.9645 6.30581 5.9645 6.30581 5.9645 6.30581C5.9645 6.3058 5.9645 6.3058 5.9645 6.3058C5.9645 6.3058 5.9645 6.3058 5.9645 6.3058C5.9645 6.30579 5.9645 6.30579 5.9645 6.30579C5.9645 6.30579 5.9645 6.30579 5.9645 6.30578C5.9645 6.30578 5.9645 6.30578 5.9645 6.30578C5.9645 6.30578 5.9645 6.30577 5.9645 6.30577C5.9645 6.30577 5.9645 6.30577 5.9645 6.30576C5.9645 6.30576 5.9645 6.30576 5.9645 6.30576C5.9645 6.30576 5.9645 6.30575 5.9645 6.30575C5.9645 6.30575 5.9645 6.30575 5.9645 6.30574C5.9645 6.30574 5.9645 6.30574 5.9645 6.30574C5.9645 6.30574 5.9645 6.30573 5.9645 6.30573C5.9645 6.30573 5.9645 6.30573 5.9645 6.30572C5.9645 6.30572 5.9645 6.30572 5.9645 6.30572C5.9645 6.30571 5.9645 6.30571 5.9645 6.30571C5.9645 6.30571 5.9645 6.3057 5.9645 6.3057C5.9645 6.3057 5.9645 6.3057 5.9645 6.30569C5.9645 6.30569 5.9645 6.30569 5.9645 6.30569C5.9645 6.30568 5.9645 6.30568 5.9645 6.30568C5.9645 6.30567 5.9645 6.30567 5.9645 6.30567C5.9645 6.30567 5.9645 6.30566 5.9645 6.30566C5.9645 6.30566 5.9645 6.30565 5.9645 6.30565C5.9645 6.30565 5.9645 6.30565 5.9645 6.30564C5.9645 6.30564 5.9645 6.30564 5.9645 6.30563C5.9645 6.30563 5.9645 6.30563 5.9645 6.30563C5.9645 6.30562 5.9645 6.30562 5.9645 6.30562C5.9645 6.30561 5.9645 6.30561 5.9645 6.30561C5.9645 6.3056 5.9645 6.3056 5.9645 6.3056C5.9645 6.30559 5.9645 6.30559 5.9645 6.30559C5.9645 6.30558 5.9645 6.30558 5.9645 6.30558C5.9645 6.30557 5.9645 6.30557 5.9645 6.30557C5.9645 6.30556 5.9645 6.30556 5.9645 6.30556C5.9645 6.30555 5.9645 6.30555 5.9645 6.30555C5.9645 6.30554 5.9645 6.30554 5.9645 6.30554C5.9645 6.30553 5.9645 6.30553 5.9645 6.30552C5.9645 6.30552 5.9645 6.30552 5.9645 6.30551C5.9645 6.30551 5.9645 6.30551 5.9645 6.3055C5.9645 6.3055 5.9645 6.3055 5.9645 6.30549C5.9645 6.30549 5.9645 6.30548 5.9645 6.30548C5.9645 6.30548 5.9645 6.30547 5.9645 6.30547C5.9645 6.30546 5.9645 6.30546 5.9645 6.30546C5.9645 6.30545 5.9645 6.30545 5.9645 6.30544C5.9645 6.30544 5.9645 6.30544 5.9645 6.30543C5.9645 6.30543 5.9645 6.30542 5.9645 6.30542C5.9645 6.30541 5.9645 6.30541 5.9645 6.30541C5.9645 6.3054 5.9645 6.3054 5.9645 6.30539C5.9645 6.30539 5.9645 6.30538 5.9645 6.30538C5.9645 6.30538 5.9645 6.30537 5.9645 6.30537C5.9645 6.30536 5.9645 6.30536 5.9645 6.30535C5.9645 6.30535 5.9645 6.30534 5.9645 6.30534C5.9645 6.30534 5.9645 6.30533 5.9645 6.30533C5.9645 6.30532 5.9645 6.30532 5.9645 6.30531C5.9645 6.30531 5.9645 6.3053 5.9645 6.3053C5.9645 6.30529 5.9645 6.30529 5.9645 6.30528C5.9645 6.30528 5.9645 6.30527 5.9645 6.30527C5.9645 6.30526 5.9645 6.30526 5.9645 6.30525C5.9645 6.30525 5.9645 6.30524 5.9645 6.30524C5.9645 6.30523 5.9645 6.30523 5.9645 6.30522C5.9645 6.30522 5.9645 6.30521 5.9645 6.30521C5.9645 6.3052 5.9645 6.3052 5.9645 6.30519C5.9645 6.30519 5.9645 6.30518 5.9645 6.30518C5.9645 6.30517 5.9645 6.30517 5.9645 6.30516C5.9645 6.30515 5.9645 6.30515 5.9645 6.30514C5.9645 6.30514 5.9645 6.30513 5.9645 6.30513C5.9645 6.30512 5.9645 6.30512 5.9645 6.30511C5.9645 6.3051 5.9645 6.3051 5.9645 6.30509C5.9645 6.30509 5.9645 6.30508 5.9645 6.30508C5.9645 6.30507 5.9645 6.30506 5.9645 6.30506C5.9645 6.30505 5.9645 6.30505 5.9645 6.30504C5.9645 6.30503 5.9645 6.30503 5.9645 6.30502C5.9645 6.30502 5.9645 6.30501 5.9645 6.305C5.9645 6.305 5.9645 6.30499 5.9645 6.30499C5.9645 6.30498 5.9645 6.30497 5.9645 6.30497C5.9645 6.30496 5.9645 6.30495 5.9645 6.30495C5.9645 6.30494 5.9645 6.30493 5.9645 6.30493C5.9645 6.30492 5.9645 6.30492 5.9645 6.30491C5.9645 6.3049 5.9645 6.3049 5.9645 6.30489C5.9645 6.30488 5.9645 6.30488 5.9645 6.30487C5.9645 6.30486 5.9645 6.30486 5.9645 6.30485C5.9645 6.30484 5.9645 6.30484 5.9645 6.30483C5.9645 6.30482 5.9645 6.30482 5.9645 6.30481C5.9645 6.3048 5.9645 6.30479 5.9645 6.30479C5.9645 6.30478 5.9645 6.30477 5.9645 6.30477C5.9645 6.30476 5.9645 6.30475 5.9645 6.30474C5.9645 6.30474 5.9645 6.30473 5.9645 6.30472C5.9645 6.30472 5.9645 6.30471 5.9645 6.3047C5.9645 6.30469 5.9645 6.30469 5.9645 6.30468C5.9645 6.30467 5.9645 6.30466 5.9645 6.30466C5.9645 6.30465 5.9645 6.30464 5.9645 6.30463C5.9645 6.30463 5.9645 6.30462 5.9645 6.30461C5.9645 6.3046 5.9645 6.3046 5.9645 6.30459C5.9645 6.30458 5.9645 6.30457 5.9645 6.30456C5.9645 6.30456 5.9645 6.30455 5.9645 6.30454C5.9645 6.30453 5.9645 6.30452 5.9645 6.30452C5.9645 6.30451 5.9645 6.3045 5.9645 6.30449C5.9645 6.30448 5.9645 6.30448 5.9645 6.30447C5.9645 6.30446 5.9645 6.30445 5.9645 6.30444C5.9645 6.30443 5.9645 6.30443 5.9645 6.30442C5.9645 6.30441 5.9645 6.3044 5.9645 6.30439C5.9645 6.30438 5.9645 6.30437 5.9645 6.30437C5.9645 6.30436 5.9645 6.30435 5.9645 6.30434C5.9645 6.30433 5.9645 6.30432 5.9645 6.30431C5.9645 6.30431 5.9645 6.3043 5.9645 6.30429C5.9645 6.30428 5.9645 6.30427 5.9645 6.30426C5.9645 6.30425 5.9645 6.30424 5.9645 6.30423C5.9645 6.30423 5.9645 6.30422 5.9645 6.30421C5.9645 6.3042 5.9645 6.30419 5.9645 6.30418C5.9645 6.30417 5.9645 6.30416 5.9645 6.30415C5.9645 6.30414 5.9645 6.30413 5.9645 6.30412C5.9645 6.30411 5.9645 6.3041 5.9645 6.30409C5.9645 6.30408 5.9645 6.30408 5.9645 6.30407C5.9645 6.30406 5.9645 6.30405 5.9645 6.30404C5.9645 6.30403 5.9645 6.30402 5.9645 6.30401C5.9645 6.304 5.9645 6.30399 5.9645 6.30398C5.9645 6.30397 5.9645 6.30396 5.9645 6.30395C5.9645 6.30394 5.9645 6.30393 5.9645 6.30392C5.9645 6.30391 5.9645 6.3039 5.9645 6.30389C5.9645 6.30388 5.9645 6.30387 5.9645 6.30386C5.9645 6.30385 5.9645 6.30384 5.9645 6.30383C5.9645 6.30381 5.9645 6.3038 5.9645 6.30379C5.9645 6.30378 5.9645 6.30377 5.9645 6.30376C5.9645 6.30375 5.9645 6.30374 5.9645 6.30373C5.9645 6.30372 5.9645 6.30371 5.9645 6.3037C5.9645 6.30369 5.9645 6.30368 5.9645 6.30366C5.9645 6.30365 5.9645 6.30364 5.9645 6.30363C5.9645 6.30362 5.9645 6.30361 5.9645 6.3036C5.9645 6.30359 5.9645 6.30358 5.9645 6.30356C5.9645 6.30355 5.9645 6.30354 5.9645 6.30353C5.9645 6.30352 5.9645 6.30351 5.9645 6.3035C5.9645 6.30348 5.9645 6.30347 5.9645 6.30346C5.9645 6.30345 5.9645 6.30344 5.9645 6.30343C5.9645 6.30342 5.9645 6.3034 5.9645 6.30339C5.9645 6.30338 5.9645 6.30337 5.9645 6.30336C5.9645 6.30334 5.9645 6.30333 5.9645 6.30332C5.9645 6.30331 5.9645 6.3033 5.9645 6.30328C5.9645 6.30327 5.9645 6.30326 5.9645 6.30325C5.9645 6.30324 5.9645 6.30322 5.9645 6.30321C5.9645 6.3032 5.9645 6.30319 5.9645 6.30317C5.9645 6.30316 5.9645 6.30315 5.9645 6.30314C5.9645 6.30312 5.9645 6.30311 5.9645 6.3031C5.9645 6.30309 5.9645 6.30307 5.9645 6.30306C5.9645 6.30305 5.9645 6.30303 5.9645 6.30302C5.9645 6.30301 5.9645 6.30299 5.9645 6.30298C5.9645 6.30297 5.9645 6.30296 5.9645 6.30294C5.9645 6.30293 5.9645 6.30292 5.9645 6.3029C5.9645 6.30289 5.9645 6.30288 5.9645 6.30286C5.9645 6.30285 5.9645 6.30284 5.9645 6.30282C5.9645 6.30281 5.9645 6.3028 5.9645 6.30278C5.9645 6.30277 5.9645 6.30276 5.9645 6.30274C5.9645 6.30273 5.9645 6.30271 5.9645 6.3027C5.9645 6.30269 5.9645 6.30267 5.9645 6.30266C5.9645 6.30264 5.9645 6.30263 5.9645 6.30262C5.9645 6.3026 5.9645 6.30259 5.9645 6.30257C5.9645 6.30256 5.9645 6.30255 5.9645 6.30253C5.9645 6.30252 5.9645 6.3025 5.9645 6.30249C5.9645 6.30247 5.9645 6.30246 5.9645 6.30244C5.9645 6.30243 5.9645 6.30242 5.9645 6.3024C5.9645 6.30239 5.9645 6.30237 5.9645 6.30236C5.9645 6.30234 5.9645 6.30233 5.9645 6.30231C5.9645 6.3023 5.9645 6.30228 5.9645 6.30227C5.9645 6.30225 5.9645 6.30224 5.9645 6.30222C5.9645 6.30221 5.9645 6.30219 5.9645 6.30218C5.9645 6.30216 5.9645 6.30215 5.9645 6.30213C5.9645 6.30211 5.9645 6.3021 5.9645 6.30208C5.9645 6.30207 5.9645 6.30205 5.9645 6.30204C5.9645 6.30202 5.9645 6.30201 5.9645 6.30199C5.9645 6.30197 5.9645 6.30196 5.9645 6.30194C5.9645 6.30193 5.9645 6.30191 5.9645 6.30189C5.9645 6.30188 5.9645 6.30186 5.9645 6.30185C5.9645 6.30183 5.9645 6.30181 5.9645 6.3018C5.9645 6.30178 5.9645 6.30177 5.9645 6.30175C5.9645 6.30173 5.9645 6.30172 5.9645 6.3017C5.9645 6.30168 5.9645 6.30167 5.9645 6.30165C5.9645 6.30163 5.9645 6.30162 5.9645 6.3016C5.9645 6.30158 5.9645 6.30157 5.9645 6.30155C5.9645 6.30153 5.9645 6.30151 5.9645 6.3015C5.9645 6.30148 5.9645 6.30146 5.9645 6.30145C5.9645 6.30143 5.9645 6.30141 5.9645 6.30139C5.9645 6.30138 5.9645 6.30136 5.9645 6.30134C5.9645 6.30133 5.9645 6.30131 5.9645 6.30129C5.9645 6.30127 5.9645 6.30125 5.9645 6.30124C5.9645 6.30122 5.9645 6.3012 5.9645 6.30118C5.9645 6.30117 5.9645 6.30115 5.9645 6.30113C5.9645 6.30111 5.9645 6.30109 5.9645 6.30108C5.9645 6.30106 5.9645 6.30104 5.9645 6.30102C5.9645 6.301 5.9645 6.30099 5.9645 6.30097C5.9645 6.30095 5.9645 6.30093 5.9645 6.30091C5.9645 6.30089 5.9645 6.30087 5.9645 6.30086C5.9645 6.30084 5.9645 6.30082 5.9645 6.3008C5.9645 6.30078 5.9645 6.30076 5.9645 6.30074C5.9645 6.30072 5.9645 6.3007 5.9645 6.30069C5.9645 6.30067 5.9645 6.30065 5.9645 6.30063C5.9645 6.30061 5.9645 6.30059 5.9645 6.30057C5.9645 6.30055 5.9645 6.30053 5.9645 6.30051C5.9645 6.30049 5.9645 6.30047 5.9645 6.30045C5.9645 6.30043 5.9645 6.30041 5.9645 6.30039C5.9645 6.30038 5.9645 6.30036 5.9645 6.30034C5.9645 6.30032 5.9645 6.3003 5.9645 6.30028C5.9645 6.30026 5.9645 6.30024 5.9645 6.30021C5.9645 6.30019 5.9645 6.30017 5.9645 6.30015C5.9645 6.30013 5.9645 6.30011 5.9645 6.30009C5.9645 6.30007 5.9645 6.30005 5.9645 6.30003C5.9645 6.30001 5.9645 6.29999 5.9645 6.29997C5.9645 6.29995 5.9645 6.29993 5.9645 6.29991C5.9645 6.29989 5.9645 6.29987 5.9645 6.29984C5.9645 6.29982 5.9645 6.2998 5.9645 6.29978C5.9645 6.29976 5.9645 6.29974 5.9645 6.29972C5.9645 6.2997 5.9645 6.29967 5.9645 6.29965C5.9645 6.29963 5.9645 6.29961 5.9645 6.29959C5.9645 6.29957 5.9645 6.29955 5.9645 6.29952C5.9645 6.2995 5.9645 6.29948 5.9645 6.29946C5.9645 6.29944 5.9645 6.29941 5.9645 6.29939C5.9645 6.29937 5.9645 6.29935 5.9645 6.29933C5.9645 6.2993 5.9645 6.29928 5.9645 6.29926C5.9645 6.29924 5.9645 6.29921 5.9645 6.29919C5.9645 6.29917 5.9645 6.29915 5.9645 6.29912C5.9645 6.2991 5.9645 6.29908 5.9645 6.29906C5.9645 6.29903 5.9645 6.29901 5.9645 6.29899C5.9645 6.29896 5.9645 6.29894 5.9645 6.29892C5.9645 6.29889 5.9645 6.29887 5.9645 6.29885C5.9645 6.29883 5.9645 6.2988 5.9645 6.29878C5.9645 6.29875 5.9645 6.29873 5.9645 6.29871C5.9645 6.29868 5.9645 6.29866 5.9645 6.29864C5.9645 6.29861 5.9645 6.29859 5.9645 6.29857C5.9645 6.29854 5.9645 6.29852 5.9645 6.29849C5.9645 6.29847 5.9645 6.29845 5.9645 6.29842C5.9645 6.2984 5.9645 6.29837 5.9645 6.29835C5.9645 6.29832 5.9645 6.2983 5.9645 6.29828C5.9645 6.29825 5.9645 6.29823 5.9645 6.2982C5.9645 6.29818 5.9645 6.29815 5.9645 6.29813C5.9645 6.2981 5.9645 6.29808 5.9645 6.29805C5.9645 6.29803 5.9645 6.298 5.9645 6.29798C5.9645 6.29795 5.9645 6.29793 5.9645 6.2979C5.9645 6.29788 5.9645 6.29785 5.9645 6.29783C5.9645 6.2978 5.9645 6.29778 5.9645 6.29775C5.9645 6.29772 5.9645 6.2977 5.9645 6.29767C5.9645 6.29765 5.9645 6.29762 5.9645 6.29759C5.9645 6.29757 5.9645 6.29754 5.9645 6.29752C5.9645 6.29749 5.9645 6.29746 5.9645 6.29744C5.9645 6.29741 5.9645 6.29739 5.9645 6.29736C5.9645 6.29733 5.9645 6.29731 5.9645 6.29728C5.9645 6.29725 5.9645 6.29723 5.9645 6.2972C5.9645 6.29717 5.9645 6.29715 5.9645 6.29712C5.9645 6.29709 5.9645 6.29707 5.9645 6.29704C5.9645 6.29701 5.9645 6.29698 5.9645 6.29696C5.9645 6.29693 5.9645 6.2969 5.9645 6.29688C5.9645 6.29685 5.9645 6.29682 5.9645 6.29679C5.9645 6.29677 5.9645 6.29674 5.9645 6.29671C5.9645 6.29668 5.9645 6.29665 5.9645 6.29663C5.9645 6.2966 5.9645 6.29657 5.9645 6.29654C5.9645 6.29652 5.9645 6.29649 5.9645 6.29646C5.9645 6.29643 5.9645 6.2964 5.9645 6.29637C5.9645 6.29635 5.9645 6.29632 5.9645 6.29629C5.9645 6.29626 5.9645 6.29623 5.9645 6.2962C5.9645 6.29617 5.9645 6.29615 5.9645 6.29612C5.9645 6.29609 5.9645 6.29606 5.9645 6.29603C5.9645 6.296 5.9645 6.29597 5.9645 6.29594C5.9645 6.29591 5.9645 6.29588 5.9645 6.29585C5.9645 6.29582 5.9645 6.2958 5.9645 6.29577C5.9645 6.29574 5.9645 6.29571 5.9645 6.29568C5.9645 6.29565 5.9645 6.29562 5.9645 6.29559C5.9645 6.29556 5.9645 6.29553 5.9645 6.2955C5.9645 6.29547 5.9645 6.29544 5.9645 6.29541C5.9645 6.29538 5.9645 6.29535 5.9645 6.29532C5.9645 6.29528 5.9645 6.29525 5.9645 6.29522C5.9645 6.29519 5.9645 6.29516 5.9645 6.29513C5.9645 6.2951 5.9645 6.29507 5.9645 6.29504C5.9645 6.29501 5.9645 6.29498 5.9645 6.29495C5.9645 6.29491 5.9645 6.29488 5.9645 6.29485C5.9645 6.29482 5.9645 6.29479 5.9645 6.29476C5.9645 6.29473 5.9645 6.2947 5.9645 6.29466C5.9645 6.29463 5.9645 6.2946 5.9645 6.29457C5.9645 6.29454 5.9645 6.2945 5.9645 6.29447C5.9645 6.29444 5.9645 6.29441 5.9645 6.29438C5.9645 6.29434 5.9645 6.29431 5.9645 6.29428C5.9645 6.29425 5.9645 6.29421 5.9645 6.29418C5.9645 6.29415 5.9645 6.29412 5.9645 6.29408C5.9645 6.29405 5.9645 6.29402 5.9645 6.29399C5.9645 6.29395 5.9645 6.29392 5.9645 6.29389C5.9645 6.29385 5.9645 6.29382 5.9645 6.29379C5.9645 6.29375 5.9645 6.29372 5.9645 6.29369C5.9645 6.29365 5.9645 6.29362 5.9645 6.29359C5.9645 6.29355 5.9645 6.29352 5.9645 6.29349C5.9645 6.29345 5.9645 6.29342 5.9645 6.29338C5.9645 6.29335 5.9645 6.29332 5.9645 6.29328C5.9645 6.29325 5.9645 6.29321 5.9645 6.29318C5.9645 6.29314 5.9645 6.29311 5.9645 6.29308C5.9645 6.29304 5.9645 6.29301 5.9645 6.29297C5.9645 6.29294 5.9645 6.2929 5.9645 6.29287C5.9645 6.29283 5.9645 6.2928 5.9645 6.29276C5.9645 6.29273 5.9645 6.29269 5.9645 6.29266C5.9645 6.29262 5.9645 6.29259 5.9645 6.29255C5.9645 6.29251 5.9645 6.29248 5.9645 6.29244C5.9645 6.29241 5.9645 6.29237 5.9645 6.29234C5.9645 6.2923 5.9645 6.29226 5.9645 6.29223C5.9645 6.29219 5.9645 6.29216 5.9645 6.29212C5.9645 6.29208 5.9645 6.29205 5.9645 6.29201C5.9645 6.29197 5.9645 6.29194 5.9645 6.2919C5.9645 6.29186 5.9645 6.29183 5.9645 6.29179C5.9645 6.29175 5.9645 6.29172 5.9645 6.29168C5.9645 6.29164 5.9645 6.29161 5.9645 6.29157C5.9645 6.29153 5.9645 6.29149 5.9645 6.29146C5.9645 6.29142 5.9645 6.29138 5.9645 6.29134C5.9645 6.29131 5.9645 6.29127 5.9645 6.29123C5.9645 6.29119 5.9645 6.29116 5.9645 6.29112C5.9645 6.29108 5.9645 6.29104 5.9645 6.291C5.9645 6.29097 5.9645 6.29093 5.9645 6.29089C5.9645 6.29085 5.9645 6.29081 5.9645 6.29077C5.9645 6.29073 5.9645 6.2907 5.9645 6.29066C5.9645 6.29062 5.9645 6.29058 5.9645 6.29054C5.9645 6.2905 5.9645 6.29046 5.9645 6.29042C5.9645 6.29038 5.9645 6.29034 5.9645 6.29031C5.9645 6.29027 5.9645 6.29023 5.9645 6.29019C5.9645 6.29015 5.9645 6.29011 5.9645 6.29007C5.9645 6.29003 5.9645 6.28999 5.9645 6.28995C5.9645 6.28991 5.9645 6.28987 5.9645 6.28983C5.9645 6.28979 5.9645 6.28975 5.9645 6.28971C5.9645 6.28967 5.9645 6.28963 5.9645 6.28959C5.9645 6.28955 5.9645 6.28951 5.9645 6.28946C5.9645 6.28942 5.9645 6.28938 5.9645 6.28934C5.9645 6.2893 5.9645 6.28926 5.9645 6.28922C5.9645 6.28918 5.9645 6.28914 5.9645 6.2891C5.9645 6.28905 5.9645 6.28901 5.9645 6.28897C5.9645 6.28893 5.9645 6.28889 5.9645 6.28885C5.9645 6.2888 5.9645 6.28876 5.9645 6.28872C5.9645 6.28868 5.9645 6.28864 5.9645 6.28859C5.9645 6.28855 5.9645 6.28851 5.9645 6.28847C5.9645 6.28843 5.9645 6.28838 5.9645 6.28834C5.9645 6.2883 5.9645 6.28825 5.9645 6.28821C5.9645 6.28817 5.9645 6.28813 5.9645 6.28808C5.9645 6.28804 5.9645 6.288 5.9645 6.28795C5.9645 6.28791 5.9645 6.28787 5.9645 6.28782C5.9645 6.28778 5.9645 6.28774 5.9645 6.28769C5.9645 6.28765 5.9645 6.28761 5.9645 6.28756C5.9645 6.28752 5.9645 6.28747 5.9645 6.28743C5.9645 6.28739 5.9645 6.28734 5.9645 6.2873C5.9645 6.28725 5.9645 6.28721 5.9645 6.28717C5.9645 6.28712 5.9645 6.28708 5.9645 6.28703C5.9645 6.28699 5.9645 6.28694 5.9645 6.2869C5.9645 6.28685 5.9645 6.28681 5.9645 6.28676C5.9645 6.28672 5.9645 6.28667 5.9645 6.28663C5.9645 6.28658 5.9645 6.28654 5.9645 6.28649C5.9645 6.28645 5.9645 6.2864 5.9645 6.28635C5.9645 6.28631 5.9645 6.28626 5.9645 6.28622C5.9645 6.28617 5.9645 6.28612 5.9645 6.28608C5.9645 6.28603 5.9645 6.28599 5.9645 6.28594C5.9645 6.28589 5.9645 6.28585 5.9645 6.2858C5.9645 6.28575 5.9645 6.28571 5.9645 6.28566C5.9645 6.28561 5.9645 6.28557 5.9645 6.28552C5.9645 6.28547 5.9645 6.28543 5.9645 6.28538C5.9645 6.28533 5.9645 6.28528 5.9645 6.28524C5.9645 6.28519 5.9645 6.28514 5.9645 6.28509C5.9645 6.28505 5.9645 6.285 5.9645 6.28495C5.9645 6.2849 5.9645 6.28485 5.9645 6.28481C5.9645 6.28476 5.9645 6.28471 5.9645 6.28466C5.9645 6.28461 5.9645 6.28457 5.9645 6.28452C5.9645 6.28447 5.9645 6.28442 5.9645 6.28437C5.9645 6.28432 5.9645 6.28427 5.9645 6.28422C5.9645 6.28418 5.9645 6.28413 5.9645 6.28408C5.9645 6.28403 5.9645 6.28398 5.9645 6.28393C5.9645 6.28388 5.9645 6.28383 5.9645 6.28378C5.9645 6.28373 5.9645 6.28368 5.9645 6.28363C5.9645 6.28358 5.9645 6.28353 5.9645 6.28348C5.9645 6.28343 5.9645 6.28338 5.9645 6.28333C5.9645 6.28328 5.9645 6.28323 5.9645 6.28318C5.9645 6.28313 5.9645 6.28308 5.9645 6.28303C5.9645 6.28298 5.9645 6.28293 5.9645 6.28288C5.9645 6.28282 5.9645 6.28277 5.9645 6.28272C5.9645 6.28267 5.9645 6.28262 5.9645 6.28257C5.9645 6.28252 5.9645 6.28247 5.9645 6.28241C5.9645 6.28236 5.9645 6.28231 5.9645 6.28226C5.9645 6.28221 5.9645 6.28215 5.9645 6.2821C5.9645 6.28205 5.9645 6.282 5.9645 6.28195C5.9645 6.28189 5.9645 6.28184 5.9645 6.28179C5.9645 6.28174 5.9645 6.28168 5.9645 6.28163C5.9645 6.28158 5.9645 6.28152 5.9645 6.28147C5.9645 6.28142 5.9645 6.28137 5.9645 6.28131C5.9645 6.28126 5.9645 6.28121 5.9645 6.28115C5.9645 6.2811 5.9645 6.28105 5.9645 6.28099C5.9645 6.28094 5.9645 6.28088 5.9645 6.28083C5.9645 6.28078 5.9645 6.28072 5.9645 6.28067C5.9645 6.28061 5.9645 6.28056 5.9645 6.2805C5.9645 6.28045 5.9645 6.2804 5.9645 6.28034C5.9645 6.28029 5.9645 6.28023 5.9645 6.28018C5.9645 6.28012 5.9645 6.28007 5.9645 6.28001C5.9645 6.27996 5.9645 6.2799 5.9645 6.27985C5.9645 6.27979 5.9645 6.27974 5.9645 6.27968C5.9645 6.27962 5.9645 6.27957 5.9645 6.27951C5.9645 6.27946 5.9645 6.2794 5.9645 6.27935C5.9645 6.27929 5.9645 6.27923 5.9645 6.27918C5.9645 6.27912 5.9645 6.27906 5.9645 6.27901C5.9645 6.27895 5.9645 6.27889 5.9645 6.27884C5.9645 6.27878 5.9645 6.27872 5.9645 6.27867C5.9645 6.27861 5.9645 6.27855 5.9645 6.2785C5.9645 6.27844 5.9645 6.27838 5.9645 6.27832C5.9645 6.27827 5.9645 6.27821 5.9645 6.27815C5.9645 6.27809 5.9645 6.27804 5.9645 6.27798C5.9645 6.27792 5.9645 6.27786 5.9645 6.2778C5.9645 6.27774 5.9645 6.27769 5.9645 6.27763C5.9645 6.27757 5.9645 6.27751 5.9645 6.27745C5.9645 6.27739 5.9645 6.27734 5.9645 6.27728C5.9645 6.27722 5.9645 6.27716 5.9645 6.2771C5.9645 6.27704 5.9645 6.27698 5.9645 6.27692C5.9645 6.27686 5.9645 6.2768 5.9645 6.27674C5.9645 6.27668 5.9645 6.27662 5.9645 6.27656C5.9645 6.2765 5.9645 6.27644 5.9645 6.27638C5.9645 6.27632 5.9645 6.27626 5.9645 6.2762C5.9645 6.27614 5.9645 6.27608 5.9645 6.27602C5.9645 6.27596 5.9645 6.2759 5.9645 6.27584C5.9645 6.27578 5.9645 6.27572 5.9645 6.27566C5.9645 6.27559 5.9645 6.27553 5.9645 6.27547C5.9645 6.27541 5.9645 6.27535 5.9645 6.27529C5.9645 6.27523 5.9645 6.27516 5.9645 6.2751C5.9645 6.27504 5.9645 6.27498 5.9645 6.27492C5.9645 6.27485 5.9645 6.27479 5.9645 6.27473C5.9645 6.27467 5.9645 6.27461 5.9645 6.27454C5.9645 6.27448 5.9645 6.27442 5.9645 6.27435C5.9645 6.27429 5.9645 6.27423 5.9645 6.27417C5.9645 6.2741 5.9645 6.27404 5.9645 6.27398C5.9645 6.27391 5.9645 6.27385 5.9645 6.27379C5.9645 6.27372 5.9645 6.27366 5.9645 6.27359C5.9645 6.27353 5.9645 6.27347 5.9645 6.2734C5.9645 6.27334 5.9645 6.27327 5.9645 6.27321C5.9645 6.27315 5.9645 6.27308 5.9645 6.27302C5.9645 6.27295 5.9645 6.27289 5.9645 6.27282C5.9645 6.27276 5.9645 6.27269 5.9645 6.27263L7.9645 6.27263C7.9645 6.27269 7.9645 6.27276 7.9645 6.27282C7.9645 6.27289 7.9645 6.27295 7.9645 6.27302C7.9645 6.27308 7.9645 6.27315 7.9645 6.27321C7.9645 6.27327 7.9645 6.27334 7.9645 6.2734C7.9645 6.27347 7.9645 6.27353 7.9645 6.27359C7.9645 6.27366 7.9645 6.27372 7.9645 6.27379C7.9645 6.27385 7.9645 6.27391 7.9645 6.27398C7.9645 6.27404 7.9645 6.2741 7.9645 6.27417C7.9645 6.27423 7.9645 6.27429 7.9645 6.27435C7.9645 6.27442 7.9645 6.27448 7.9645 6.27454C7.9645 6.27461 7.9645 6.27467 7.9645 6.27473C7.9645 6.27479 7.9645 6.27485 7.9645 6.27492C7.9645 6.27498 7.9645 6.27504 7.9645 6.2751C7.9645 6.27516 7.9645 6.27523 7.9645 6.27529C7.9645 6.27535 7.9645 6.27541 7.9645 6.27547C7.9645 6.27553 7.9645 6.27559 7.9645 6.27566C7.9645 6.27572 7.9645 6.27578 7.9645 6.27584C7.9645 6.2759 7.9645 6.27596 7.9645 6.27602C7.9645 6.27608 7.9645 6.27614 7.9645 6.2762C7.9645 6.27626 7.9645 6.27632 7.9645 6.27638C7.9645 6.27644 7.9645 6.2765 7.9645 6.27656C7.9645 6.27662 7.9645 6.27668 7.9645 6.27674C7.9645 6.2768 7.9645 6.27686 7.9645 6.27692C7.9645 6.27698 7.9645 6.27704 7.9645 6.2771C7.9645 6.27716 7.9645 6.27722 7.9645 6.27728C7.9645 6.27734 7.9645 6.27739 7.9645 6.27745C7.9645 6.27751 7.9645 6.27757 7.9645 6.27763C7.9645 6.27769 7.9645 6.27774 7.9645 6.2778C7.9645 6.27786 7.9645 6.27792 7.9645 6.27798C7.9645 6.27804 7.9645 6.27809 7.9645 6.27815C7.9645 6.27821 7.9645 6.27827 7.9645 6.27832C7.9645 6.27838 7.9645 6.27844 7.9645 6.2785C7.9645 6.27855 7.9645 6.27861 7.9645 6.27867C7.9645 6.27872 7.9645 6.27878 7.9645 6.27884C7.9645 6.27889 7.9645 6.27895 7.9645 6.27901C7.9645 6.27906 7.9645 6.27912 7.9645 6.27918C7.9645 6.27923 7.9645 6.27929 7.9645 6.27935C7.9645 6.2794 7.9645 6.27946 7.9645 6.27951C7.9645 6.27957 7.9645 6.27962 7.9645 6.27968C7.9645 6.27974 7.9645 6.27979 7.9645 6.27985C7.9645 6.2799 7.9645 6.27996 7.9645 6.28001C7.9645 6.28007 7.9645 6.28012 7.9645 6.28018C7.9645 6.28023 7.9645 6.28029 7.9645 6.28034C7.9645 6.2804 7.9645 6.28045 7.9645 6.2805C7.9645 6.28056 7.9645 6.28061 7.9645 6.28067C7.9645 6.28072 7.9645 6.28078 7.9645 6.28083C7.9645 6.28088 7.9645 6.28094 7.9645 6.28099C7.9645 6.28105 7.9645 6.2811 7.9645 6.28115C7.9645 6.28121 7.9645 6.28126 7.9645 6.28131C7.9645 6.28137 7.9645 6.28142 7.9645 6.28147C7.9645 6.28152 7.9645 6.28158 7.9645 6.28163C7.9645 6.28168 7.9645 6.28174 7.9645 6.28179C7.9645 6.28184 7.9645 6.28189 7.9645 6.28195C7.9645 6.282 7.9645 6.28205 7.9645 6.2821C7.9645 6.28215 7.9645 6.28221 7.9645 6.28226C7.9645 6.28231 7.9645 6.28236 7.9645 6.28241C7.9645 6.28247 7.9645 6.28252 7.9645 6.28257C7.9645 6.28262 7.9645 6.28267 7.9645 6.28272C7.9645 6.28277 7.9645 6.28282 7.9645 6.28288C7.9645 6.28293 7.9645 6.28298 7.9645 6.28303C7.9645 6.28308 7.9645 6.28313 7.9645 6.28318C7.9645 6.28323 7.9645 6.28328 7.9645 6.28333C7.9645 6.28338 7.9645 6.28343 7.9645 6.28348C7.9645 6.28353 7.9645 6.28358 7.9645 6.28363C7.9645 6.28368 7.9645 6.28373 7.9645 6.28378C7.9645 6.28383 7.9645 6.28388 7.9645 6.28393C7.9645 6.28398 7.9645 6.28403 7.9645 6.28408C7.9645 6.28413 7.9645 6.28418 7.9645 6.28422C7.9645 6.28427 7.9645 6.28432 7.9645 6.28437C7.9645 6.28442 7.9645 6.28447 7.9645 6.28452C7.9645 6.28457 7.9645 6.28461 7.9645 6.28466C7.9645 6.28471 7.9645 6.28476 7.9645 6.28481C7.9645 6.28485 7.9645 6.2849 7.9645 6.28495C7.9645 6.285 7.9645 6.28505 7.9645 6.28509C7.9645 6.28514 7.9645 6.28519 7.9645 6.28524C7.9645 6.28528 7.9645 6.28533 7.9645 6.28538C7.9645 6.28543 7.9645 6.28547 7.9645 6.28552C7.9645 6.28557 7.9645 6.28561 7.9645 6.28566C7.9645 6.28571 7.9645 6.28575 7.9645 6.2858C7.9645 6.28585 7.9645 6.28589 7.9645 6.28594C7.9645 6.28599 7.9645 6.28603 7.9645 6.28608C7.9645 6.28612 7.9645 6.28617 7.9645 6.28622C7.9645 6.28626 7.9645 6.28631 7.9645 6.28635C7.9645 6.2864 7.9645 6.28645 7.9645 6.28649C7.9645 6.28654 7.9645 6.28658 7.9645 6.28663C7.9645 6.28667 7.9645 6.28672 7.9645 6.28676C7.9645 6.28681 7.9645 6.28685 7.9645 6.2869C7.9645 6.28694 7.9645 6.28699 7.9645 6.28703C7.9645 6.28708 7.9645 6.28712 7.9645 6.28717C7.9645 6.28721 7.9645 6.28725 7.9645 6.2873C7.9645 6.28734 7.9645 6.28739 7.9645 6.28743C7.9645 6.28747 7.9645 6.28752 7.9645 6.28756C7.9645 6.28761 7.9645 6.28765 7.9645 6.28769C7.9645 6.28774 7.9645 6.28778 7.9645 6.28782C7.9645 6.28787 7.9645 6.28791 7.9645 6.28795C7.9645 6.288 7.9645 6.28804 7.9645 6.28808C7.9645 6.28813 7.9645 6.28817 7.9645 6.28821C7.9645 6.28825 7.9645 6.2883 7.9645 6.28834C7.9645 6.28838 7.9645 6.28843 7.9645 6.28847C7.9645 6.28851 7.9645 6.28855 7.9645 6.28859C7.9645 6.28864 7.9645 6.28868 7.9645 6.28872C7.9645 6.28876 7.9645 6.2888 7.9645 6.28885C7.9645 6.28889 7.9645 6.28893 7.9645 6.28897C7.9645 6.28901 7.9645 6.28905 7.9645 6.2891C7.9645 6.28914 7.9645 6.28918 7.9645 6.28922C7.9645 6.28926 7.9645 6.2893 7.9645 6.28934C7.9645 6.28938 7.9645 6.28942 7.9645 6.28946C7.9645 6.28951 7.9645 6.28955 7.9645 6.28959C7.9645 6.28963 7.9645 6.28967 7.9645 6.28971C7.9645 6.28975 7.9645 6.28979 7.9645 6.28983C7.9645 6.28987 7.9645 6.28991 7.9645 6.28995C7.9645 6.28999 7.9645 6.29003 7.9645 6.29007C7.9645 6.29011 7.9645 6.29015 7.9645 6.29019C7.9645 6.29023 7.9645 6.29027 7.9645 6.29031C7.9645 6.29034 7.9645 6.29038 7.9645 6.29042C7.9645 6.29046 7.9645 6.2905 7.9645 6.29054C7.9645 6.29058 7.9645 6.29062 7.9645 6.29066C7.9645 6.2907 7.9645 6.29073 7.9645 6.29077C7.9645 6.29081 7.9645 6.29085 7.9645 6.29089C7.9645 6.29093 7.9645 6.29097 7.9645 6.291C7.9645 6.29104 7.9645 6.29108 7.9645 6.29112C7.9645 6.29116 7.9645 6.29119 7.9645 6.29123C7.9645 6.29127 7.9645 6.29131 7.9645 6.29134C7.9645 6.29138 7.9645 6.29142 7.9645 6.29146C7.9645 6.29149 7.9645 6.29153 7.9645 6.29157C7.9645 6.29161 7.9645 6.29164 7.9645 6.29168C7.9645 6.29172 7.9645 6.29175 7.9645 6.29179C7.9645 6.29183 7.9645 6.29186 7.9645 6.2919C7.9645 6.29194 7.9645 6.29197 7.9645 6.29201C7.9645 6.29205 7.9645 6.29208 7.9645 6.29212C7.9645 6.29216 7.9645 6.29219 7.9645 6.29223C7.9645 6.29226 7.9645 6.2923 7.9645 6.29234C7.9645 6.29237 7.9645 6.29241 7.9645 6.29244C7.9645 6.29248 7.9645 6.29251 7.9645 6.29255C7.9645 6.29259 7.9645 6.29262 7.9645 6.29266C7.9645 6.29269 7.9645 6.29273 7.9645 6.29276C7.9645 6.2928 7.9645 6.29283 7.9645 6.29287C7.9645 6.2929 7.9645 6.29294 7.9645 6.29297C7.9645 6.29301 7.9645 6.29304 7.9645 6.29308C7.9645 6.29311 7.9645 6.29314 7.9645 6.29318C7.9645 6.29321 7.9645 6.29325 7.9645 6.29328C7.9645 6.29332 7.9645 6.29335 7.9645 6.29338C7.9645 6.29342 7.9645 6.29345 7.9645 6.29349C7.9645 6.29352 7.9645 6.29355 7.9645 6.29359C7.9645 6.29362 7.9645 6.29365 7.9645 6.29369C7.9645 6.29372 7.9645 6.29375 7.9645 6.29379C7.9645 6.29382 7.9645 6.29385 7.9645 6.29389C7.9645 6.29392 7.9645 6.29395 7.9645 6.29399C7.9645 6.29402 7.9645 6.29405 7.9645 6.29408C7.9645 6.29412 7.9645 6.29415 7.9645 6.29418C7.9645 6.29421 7.9645 6.29425 7.9645 6.29428C7.9645 6.29431 7.9645 6.29434 7.9645 6.29438C7.9645 6.29441 7.9645 6.29444 7.9645 6.29447C7.9645 6.2945 7.9645 6.29454 7.9645 6.29457C7.9645 6.2946 7.9645 6.29463 7.9645 6.29466C7.9645 6.2947 7.9645 6.29473 7.9645 6.29476C7.9645 6.29479 7.9645 6.29482 7.9645 6.29485C7.9645 6.29488 7.9645 6.29491 7.9645 6.29495C7.9645 6.29498 7.9645 6.29501 7.9645 6.29504C7.9645 6.29507 7.9645 6.2951 7.9645 6.29513C7.9645 6.29516 7.9645 6.29519 7.9645 6.29522C7.9645 6.29525 7.9645 6.29528 7.9645 6.29532C7.9645 6.29535 7.9645 6.29538 7.9645 6.29541C7.9645 6.29544 7.9645 6.29547 7.9645 6.2955C7.9645 6.29553 7.9645 6.29556 7.9645 6.29559C7.9645 6.29562 7.9645 6.29565 7.9645 6.29568C7.9645 6.29571 7.9645 6.29574 7.9645 6.29577C7.9645 6.2958 7.9645 6.29582 7.9645 6.29585C7.9645 6.29588 7.9645 6.29591 7.9645 6.29594C7.9645 6.29597 7.9645 6.296 7.9645 6.29603C7.9645 6.29606 7.9645 6.29609 7.9645 6.29612C7.9645 6.29615 7.9645 6.29617 7.9645 6.2962C7.9645 6.29623 7.9645 6.29626 7.9645 6.29629C7.9645 6.29632 7.9645 6.29635 7.9645 6.29637C7.9645 6.2964 7.9645 6.29643 7.9645 6.29646C7.9645 6.29649 7.9645 6.29652 7.9645 6.29654C7.9645 6.29657 7.9645 6.2966 7.9645 6.29663C7.9645 6.29665 7.9645 6.29668 7.9645 6.29671C7.9645 6.29674 7.9645 6.29677 7.9645 6.29679C7.9645 6.29682 7.9645 6.29685 7.9645 6.29688C7.9645 6.2969 7.9645 6.29693 7.9645 6.29696C7.9645 6.29698 7.9645 6.29701 7.9645 6.29704C7.9645 6.29707 7.9645 6.29709 7.9645 6.29712C7.9645 6.29715 7.9645 6.29717 7.9645 6.2972C7.9645 6.29723 7.9645 6.29725 7.9645 6.29728C7.9645 6.29731 7.9645 6.29733 7.9645 6.29736C7.9645 6.29739 7.9645 6.29741 7.9645 6.29744C7.9645 6.29746 7.9645 6.29749 7.9645 6.29752C7.9645 6.29754 7.9645 6.29757 7.9645 6.29759C7.9645 6.29762 7.9645 6.29765 7.9645 6.29767C7.9645 6.2977 7.9645 6.29772 7.9645 6.29775C7.9645 6.29777 7.9645 6.2978 7.9645 6.29783C7.9645 6.29785 7.9645 6.29788 7.9645 6.2979C7.9645 6.29793 7.9645 6.29795 7.9645 6.29798C7.9645 6.298 7.9645 6.29803 7.9645 6.29805C7.9645 6.29808 7.9645 6.2981 7.9645 6.29813C7.9645 6.29815 7.9645 6.29818 7.9645 6.2982C7.9645 6.29823 7.9645 6.29825 7.9645 6.29828C7.9645 6.2983 7.9645 6.29832 7.9645 6.29835C7.9645 6.29837 7.9645 6.2984 7.9645 6.29842C7.9645 6.29845 7.9645 6.29847 7.9645 6.29849C7.9645 6.29852 7.9645 6.29854 7.9645 6.29857C7.9645 6.29859 7.9645 6.29861 7.9645 6.29864C7.9645 6.29866 7.9645 6.29868 7.9645 6.29871C7.9645 6.29873 7.9645 6.29875 7.9645 6.29878C7.9645 6.2988 7.9645 6.29882 7.9645 6.29885C7.9645 6.29887 7.9645 6.29889 7.9645 6.29892C7.9645 6.29894 7.9645 6.29896 7.9645 6.29899C7.9645 6.29901 7.9645 6.29903 7.9645 6.29906C7.9645 6.29908 7.9645 6.2991 7.9645 6.29912C7.9645 6.29915 7.9645 6.29917 7.9645 6.29919C7.9645 6.29921 7.9645 6.29924 7.9645 6.29926C7.9645 6.29928 7.9645 6.2993 7.9645 6.29933C7.9645 6.29935 7.9645 6.29937 7.9645 6.29939C7.9645 6.29941 7.9645 6.29944 7.9645 6.29946C7.9645 6.29948 7.9645 6.2995 7.9645 6.29952C7.9645 6.29954 7.9645 6.29957 7.9645 6.29959C7.9645 6.29961 7.9645 6.29963 7.9645 6.29965C7.9645 6.29967 7.9645 6.2997 7.9645 6.29972C7.9645 6.29974 7.9645 6.29976 7.9645 6.29978C7.9645 6.2998 7.9645 6.29982 7.9645 6.29984C7.9645 6.29987 7.9645 6.29989 7.9645 6.29991C7.9645 6.29993 7.9645 6.29995 7.9645 6.29997C7.9645 6.29999 7.9645 6.30001 7.9645 6.30003C7.9645 6.30005 7.9645 6.30007 7.9645 6.30009C7.9645 6.30011 7.9645 6.30013 7.9645 6.30015C7.9645 6.30017 7.9645 6.30019 7.9645 6.30021C7.9645 6.30024 7.9645 6.30026 7.9645 6.30028C7.9645 6.3003 7.9645 6.30032 7.9645 6.30034C7.9645 6.30036 7.9645 6.30038 7.9645 6.30039C7.9645 6.30041 7.9645 6.30043 7.9645 6.30045C7.9645 6.30047 7.9645 6.30049 7.9645 6.30051C7.9645 6.30053 7.9645 6.30055 7.9645 6.30057C7.9645 6.30059 7.9645 6.30061 7.9645 6.30063C7.9645 6.30065 7.9645 6.30067 7.9645 6.30069C7.9645 6.3007 7.9645 6.30072 7.9645 6.30074C7.9645 6.30076 7.9645 6.30078 7.9645 6.3008C7.9645 6.30082 7.9645 6.30084 7.9645 6.30086C7.9645 6.30087 7.9645 6.30089 7.9645 6.30091C7.9645 6.30093 7.9645 6.30095 7.9645 6.30097C7.9645 6.30098 7.9645 6.301 7.9645 6.30102C7.9645 6.30104 7.9645 6.30106 7.9645 6.30108C7.9645 6.30109 7.9645 6.30111 7.9645 6.30113C7.9645 6.30115 7.9645 6.30117 7.9645 6.30118C7.9645 6.3012 7.9645 6.30122 7.9645 6.30124C7.9645 6.30125 7.9645 6.30127 7.9645 6.30129C7.9645 6.30131 7.9645 6.30132 7.9645 6.30134C7.9645 6.30136 7.9645 6.30138 7.9645 6.30139C7.9645 6.30141 7.9645 6.30143 7.9645 6.30145C7.9645 6.30146 7.9645 6.30148 7.9645 6.3015C7.9645 6.30151 7.9645 6.30153 7.9645 6.30155C7.9645 6.30157 7.9645 6.30158 7.9645 6.3016C7.9645 6.30162 7.9645 6.30163 7.9645 6.30165C7.9645 6.30167 7.9645 6.30168 7.9645 6.3017C7.9645 6.30172 7.9645 6.30173 7.9645 6.30175C7.9645 6.30177 7.9645 6.30178 7.9645 6.3018C7.9645 6.30181 7.9645 6.30183 7.9645 6.30185C7.9645 6.30186 7.9645 6.30188 7.9645 6.30189C7.9645 6.30191 7.9645 6.30193 7.9645 6.30194C7.9645 6.30196 7.9645 6.30197 7.9645 6.30199C7.9645 6.30201 7.9645 6.30202 7.9645 6.30204C7.9645 6.30205 7.9645 6.30207 7.9645 6.30208C7.9645 6.3021 7.9645 6.30211 7.9645 6.30213C7.9645 6.30215 7.9645 6.30216 7.9645 6.30218C7.9645 6.30219 7.9645 6.30221 7.9645 6.30222C7.9645 6.30224 7.9645 6.30225 7.9645 6.30227C7.9645 6.30228 7.9645 6.3023 7.9645 6.30231C7.9645 6.30233 7.9645 6.30234 7.9645 6.30236C7.9645 6.30237 7.9645 6.30239 7.9645 6.3024C7.9645 6.30242 7.9645 6.30243 7.9645 6.30244C7.9645 6.30246 7.9645 6.30247 7.9645 6.30249C7.9645 6.3025 7.9645 6.30252 7.9645 6.30253C7.9645 6.30255 7.9645 6.30256 7.9645 6.30257C7.9645 6.30259 7.9645 6.3026 7.9645 6.30262C7.9645 6.30263 7.9645 6.30264 7.9645 6.30266C7.9645 6.30267 7.9645 6.30269 7.9645 6.3027C7.9645 6.30271 7.9645 6.30273 7.9645 6.30274C7.9645 6.30276 7.9645 6.30277 7.9645 6.30278C7.9645 6.3028 7.9645 6.30281 7.9645 6.30282C7.9645 6.30284 7.9645 6.30285 7.9645 6.30286C7.9645 6.30288 7.9645 6.30289 7.9645 6.3029C7.9645 6.30292 7.9645 6.30293 7.9645 6.30294C7.9645 6.30296 7.9645 6.30297 7.9645 6.30298C7.9645 6.30299 7.9645 6.30301 7.9645 6.30302C7.9645 6.30303 7.9645 6.30305 7.9645 6.30306C7.9645 6.30307 7.9645 6.30308 7.9645 6.3031C7.9645 6.30311 7.9645 6.30312 7.9645 6.30314C7.9645 6.30315 7.9645 6.30316 7.9645 6.30317C7.9645 6.30319 7.9645 6.3032 7.9645 6.30321C7.9645 6.30322 7.9645 6.30324 7.9645 6.30325C7.9645 6.30326 7.9645 6.30327 7.9645 6.30328C7.9645 6.3033 7.9645 6.30331 7.9645 6.30332C7.9645 6.30333 7.9645 6.30334 7.9645 6.30336C7.9645 6.30337 7.9645 6.30338 7.9645 6.30339C7.9645 6.3034 7.9645 6.30341 7.9645 6.30343C7.9645 6.30344 7.9645 6.30345 7.9645 6.30346C7.9645 6.30347 7.9645 6.30348 7.9645 6.3035C7.9645 6.30351 7.9645 6.30352 7.9645 6.30353C7.9645 6.30354 7.9645 6.30355 7.9645 6.30356C7.9645 6.30358 7.9645 6.30359 7.9645 6.3036C7.9645 6.30361 7.9645 6.30362 7.9645 6.30363C7.9645 6.30364 7.9645 6.30365 7.9645 6.30366C7.9645 6.30368 7.9645 6.30369 7.9645 6.3037C7.9645 6.30371 7.9645 6.30372 7.9645 6.30373C7.9645 6.30374 7.9645 6.30375 7.9645 6.30376C7.9645 6.30377 7.9645 6.30378 7.9645 6.30379C7.9645 6.3038 7.9645 6.30381 7.9645 6.30383C7.9645 6.30384 7.9645 6.30385 7.9645 6.30386C7.9645 6.30387 7.9645 6.30388 7.9645 6.30389C7.9645 6.3039 7.9645 6.30391 7.9645 6.30392C7.9645 6.30393 7.9645 6.30394 7.9645 6.30395C7.9645 6.30396 7.9645 6.30397 7.9645 6.30398C7.9645 6.30399 7.9645 6.304 7.9645 6.30401C7.9645 6.30402 7.9645 6.30403 7.9645 6.30404C7.9645 6.30405 7.9645 6.30406 7.9645 6.30407C7.9645 6.30408 7.9645 6.30408 7.9645 6.30409C7.9645 6.3041 7.9645 6.30411 7.9645 6.30412C7.9645 6.30413 7.9645 6.30414 7.9645 6.30415C7.9645 6.30416 7.9645 6.30417 7.9645 6.30418C7.9645 6.30419 7.9645 6.3042 7.9645 6.30421C7.9645 6.30422 7.9645 6.30423 7.9645 6.30423C7.9645 6.30424 7.9645 6.30425 7.9645 6.30426C7.9645 6.30427 7.9645 6.30428 7.9645 6.30429C7.9645 6.3043 7.9645 6.30431 7.9645 6.30431C7.9645 6.30432 7.9645 6.30433 7.9645 6.30434C7.9645 6.30435 7.9645 6.30436 7.9645 6.30437C7.9645 6.30437 7.9645 6.30438 7.9645 6.30439C7.9645 6.3044 7.9645 6.30441 7.9645 6.30442C7.9645 6.30443 7.9645 6.30443 7.9645 6.30444C7.9645 6.30445 7.9645 6.30446 7.9645 6.30447C7.9645 6.30448 7.9645 6.30448 7.9645 6.30449C7.9645 6.3045 7.9645 6.30451 7.9645 6.30452C7.9645 6.30452 7.9645 6.30453 7.9645 6.30454C7.9645 6.30455 7.9645 6.30456 7.9645 6.30456C7.9645 6.30457 7.9645 6.30458 7.9645 6.30459C7.9645 6.3046 7.9645 6.3046 7.9645 6.30461C7.9645 6.30462 7.9645 6.30463 7.9645 6.30463C7.9645 6.30464 7.9645 6.30465 7.9645 6.30466C7.9645 6.30466 7.9645 6.30467 7.9645 6.30468C7.9645 6.30469 7.9645 6.30469 7.9645 6.3047C7.9645 6.30471 7.9645 6.30472 7.9645 6.30472C7.9645 6.30473 7.9645 6.30474 7.9645 6.30474C7.9645 6.30475 7.9645 6.30476 7.9645 6.30477C7.9645 6.30477 7.9645 6.30478 7.9645 6.30479C7.9645 6.30479 7.9645 6.3048 7.9645 6.30481C7.9645 6.30481 7.9645 6.30482 7.9645 6.30483C7.9645 6.30484 7.9645 6.30484 7.9645 6.30485C7.9645 6.30486 7.9645 6.30486 7.9645 6.30487C7.9645 6.30488 7.9645 6.30488 7.9645 6.30489C7.9645 6.3049 7.9645 6.3049 7.9645 6.30491C7.9645 6.30492 7.9645 6.30492 7.9645 6.30493C7.9645 6.30493 7.9645 6.30494 7.9645 6.30495C7.9645 6.30495 7.9645 6.30496 7.9645 6.30497C7.9645 6.30497 7.9645 6.30498 7.9645 6.30499C7.9645 6.30499 7.9645 6.305 7.9645 6.305C7.9645 6.30501 7.9645 6.30502 7.9645 6.30502C7.9645 6.30503 7.9645 6.30503 7.9645 6.30504C7.9645 6.30505 7.9645 6.30505 7.9645 6.30506C7.9645 6.30506 7.9645 6.30507 7.9645 6.30508C7.9645 6.30508 7.9645 6.30509 7.9645 6.30509C7.9645 6.3051 7.9645 6.3051 7.9645 6.30511C7.9645 6.30512 7.9645 6.30512 7.9645 6.30513C7.9645 6.30513 7.9645 6.30514 7.9645 6.30514C7.9645 6.30515 7.9645 6.30515 7.9645 6.30516C7.9645 6.30516 7.9645 6.30517 7.9645 6.30518C7.9645 6.30518 7.9645 6.30519 7.9645 6.30519C7.9645 6.3052 7.9645 6.3052 7.9645 6.30521C7.9645 6.30521 7.9645 6.30522 7.9645 6.30522C7.9645 6.30523 7.9645 6.30523 7.9645 6.30524C7.9645 6.30524 7.9645 6.30525 7.9645 6.30525C7.9645 6.30526 7.9645 6.30526 7.9645 6.30527C7.9645 6.30527 7.9645 6.30528 7.9645 6.30528C7.9645 6.30529 7.9645 6.30529 7.9645 6.3053C7.9645 6.3053 7.9645 6.30531 7.9645 6.30531C7.9645 6.30532 7.9645 6.30532 7.9645 6.30533C7.9645 6.30533 7.9645 6.30534 7.9645 6.30534C7.9645 6.30534 7.9645 6.30535 7.9645 6.30535C7.9645 6.30536 7.9645 6.30536 7.9645 6.30537C7.9645 6.30537 7.9645 6.30538 7.9645 6.30538C7.9645 6.30538 7.9645 6.30539 7.9645 6.30539C7.9645 6.3054 7.9645 6.3054 7.9645 6.30541C7.9645 6.30541 7.9645 6.30541 7.9645 6.30542C7.9645 6.30542 7.9645 6.30543 7.9645 6.30543C7.9645 6.30544 7.9645 6.30544 7.9645 6.30544C7.9645 6.30545 7.9645 6.30545 7.9645 6.30546C7.9645 6.30546 7.9645 6.30546 7.9645 6.30547C7.9645 6.30547 7.9645 6.30548 7.9645 6.30548C7.9645 6.30548 7.9645 6.30549 7.9645 6.30549C7.9645 6.30549 7.9645 6.3055 7.9645 6.3055C7.9645 6.30551 7.9645 6.30551 7.9645 6.30551C7.9645 6.30552 7.9645 6.30552 7.9645 6.30552C7.9645 6.30553 7.9645 6.30553 7.9645 6.30554C7.9645 6.30554 7.9645 6.30554 7.9645 6.30555C7.9645 6.30555 7.9645 6.30555 7.9645 6.30556C7.9645 6.30556 7.9645 6.30556 7.9645 6.30557C7.9645 6.30557 7.9645 6.30557 7.9645 6.30558C7.9645 6.30558 7.9645 6.30558 7.9645 6.30559C7.9645 6.30559 7.9645 6.30559 7.9645 6.3056C7.9645 6.3056 7.9645 6.3056 7.9645 6.30561C7.9645 6.30561 7.9645 6.30561 7.9645 6.30562C7.9645 6.30562 7.9645 6.30562 7.9645 6.30563C7.9645 6.30563 7.9645 6.30563 7.9645 6.30563C7.9645 6.30564 7.9645 6.30564 7.9645 6.30564C7.9645 6.30565 7.9645 6.30565 7.9645 6.30565C7.9645 6.30565 7.9645 6.30566 7.9645 6.30566C7.9645 6.30566 7.9645 6.30567 7.9645 6.30567C7.9645 6.30567 7.9645 6.30567 7.9645 6.30568C7.9645 6.30568 7.9645 6.30568 7.9645 6.30569C7.9645 6.30569 7.9645 6.30569 7.9645 6.30569C7.9645 6.3057 7.9645 6.3057 7.9645 6.3057C7.9645 6.3057 7.9645 6.30571 7.9645 6.30571C7.9645 6.30571 7.9645 6.30571 7.9645 6.30572C7.9645 6.30572 7.9645 6.30572 7.9645 6.30572C7.9645 6.30573 7.9645 6.30573 7.9645 6.30573C7.9645 6.30573 7.9645 6.30574 7.9645 6.30574C7.9645 6.30574 7.9645 6.30574 7.9645 6.30574C7.9645 6.30575 7.9645 6.30575 7.9645 6.30575C7.9645 6.30575 7.9645 6.30576 7.9645 6.30576C7.9645 6.30576 7.9645 6.30576 7.9645 6.30576C7.9645 6.30577 7.9645 6.30577 7.9645 6.30577C7.9645 6.30577 7.9645 6.30578 7.9645 6.30578C7.9645 6.30578 7.9645 6.30578 7.9645 6.30578C7.9645 6.30579 7.9645 6.30579 7.9645 6.30579C7.9645 6.30579 7.9645 6.30579 7.9645 6.3058C7.9645 6.3058 7.9645 6.3058 7.9645 6.3058C7.9645 6.3058 7.9645 6.3058 7.9645 6.30581C7.9645 6.30581 7.9645 6.30581 7.9645 6.30581C7.9645 6.30581 7.9645 6.30582 7.9645 6.30582C7.9645 6.30582 7.9645 6.30582 7.9645 6.30582C7.9645 6.30582 7.9645 6.30583 7.9645 6.30583C7.9645 6.30583 7.9645 6.30583 7.9645 6.30583C7.9645 6.30583 7.9645 6.30584 7.9645 6.30584C7.9645 6.30584 7.9645 6.30584 7.9645 6.30584C7.9645 6.30584 7.9645 6.30585 7.9645 6.30585C7.9645 6.30585 7.9645 6.30585 7.9645 6.30585C7.9645 6.30585 7.9645 6.30585 7.9645 6.30586C7.9645 6.30586 7.9645 6.30586 7.9645 6.30586C7.9645 6.30586 7.9645 6.30586 7.9645 6.30586C7.9645 6.30587 7.9645 6.30587 7.9645 6.30587C7.9645 6.30587 7.9645 6.30587 7.9645 6.30587C7.9645 6.30587 7.9645 6.30587 7.9645 6.30588C7.9645 6.30588 7.9645 6.30588 7.9645 6.30588C7.9645 6.30588 7.9645 6.30588 7.9645 6.30588C7.9645 6.30588 7.9645 6.30589 7.9645 6.30589C7.9645 6.30589 7.9645 6.30589 7.9645 6.30589C7.9645 6.30589 7.9645 6.30589 7.9645 6.30589C7.9645 6.30589 7.9645 6.3059 7.9645 6.3059C7.9645 6.3059 7.9645 6.3059 7.9645 6.3059C7.9645 6.3059 7.9645 6.3059 7.9645 6.3059C7.9645 6.3059 7.9645 6.3059 7.9645 6.30591C7.9645 6.30591 7.9645 6.30591 7.9645 6.30591C7.9645 6.30591 7.9645 6.30591 7.9645 6.30591C7.9645 6.30591 7.9645 6.30591 7.9645 6.30591C7.9645 6.30591 7.9645 6.30592 7.9645 6.30592C7.9645 6.30592 7.9645 6.30592 7.9645 6.30592C7.9645 6.30592 7.9645 6.30592 7.9645 6.30592C7.9645 6.30592 7.9645 6.30592 7.9645 6.30592C7.9645 6.30592 7.9645 6.30592 7.9645 6.30593C7.9645 6.30593 7.9645 6.30593 7.9645 6.30593C7.9645 6.30593 7.9645 6.30593 7.9645 6.30593C7.9645 6.30593 7.9645 6.30593 7.9645 6.30593C7.9645 6.30593 7.9645 6.30593 7.9645 6.30593C7.9645 6.30593 7.9645 6.30593 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30594C7.9645 6.30594 7.9645 6.30594 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30595C7.9645 6.30595 7.9645 6.30595 7.9645 6.30596L7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596L7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596L7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596L7.9645 6.30596L7.9645 6.30596L7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596L7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C7.9645 6.30596 7.9645 6.30596 7.9645 6.30596C6.9645 6.30596 5.9645 6.30596 6.9645 6.30596ZM6.9645 6.27263C5.9645 6.27263 5.9645 6.27263 5.9645 6.27263L5.9645 6.27263L5.9645 6.27263C5.9645 6.27263 5.9645 6.27263 5.9645 6.27263C5.9645 6.27263 5.9645 6.27263 5.9645 6.27263C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262L5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262L5.9645 6.27262L5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262L5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262L5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27262C5.9645 6.27262 5.9645 6.27262 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.27261C5.9645 6.27261 5.9645 6.27261 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.2726C5.9645 6.2726 5.9645 6.2726 5.9645 6.27259C5.9645 6.27259 5.9645 6.27259 5.9645 6.27259C5.9645 6.27259 5.9645 6.27259 5.9645 6.27259C5.9645 6.27259 5.9645 6.27259 5.9645 6.27259C5.9645 6.27259 5.9645 6.27259 5.9645 6.27259C5.9645 6.27259 5.9645 6.27258 5.9645 6.27258C5.9645 6.27258 5.9645 6.27258 5.9645 6.27258C5.9645 6.27258 5.9645 6.27258 5.9645 6.27258C5.9645 6.27258 5.9645 6.27258 5.9645 6.27258C5.9645 6.27258 5.9645 6.27257 5.9645 6.27257C5.9645 6.27257 5.9645 6.27257 5.9645 6.27257C5.9645 6.27257 5.9645 6.27257 5.9645 6.27257C5.9645 6.27257 5.9645 6.27257 5.9645 6.27257C5.9645 6.27256 5.9645 6.27256 5.9645 6.27256C5.9645 6.27256 5.9645 6.27256 5.9645 6.27256C5.9645 6.27256 5.9645 6.27256 5.9645 6.27256C5.9645 6.27255 5.9645 6.27255 5.9645 6.27255C5.9645 6.27255 5.9645 6.27255 5.9645 6.27255C5.9645 6.27255 5.9645 6.27255 5.9645 6.27255C5.9645 6.27254 5.9645 6.27254 5.9645 6.27254C5.9645 6.27254 5.9645 6.27254 5.9645 6.27254C5.9645 6.27254 5.9645 6.27254 5.9645 6.27253C5.9645 6.27253 5.9645 6.27253 5.9645 6.27253C5.9645 6.27253 5.9645 6.27253 5.9645 6.27253C5.9645 6.27253 5.9645 6.27252 5.9645 6.27252C5.9645 6.27252 5.9645 6.27252 5.9645 6.27252C5.9645 6.27252 5.9645 6.27252 5.9645 6.27251C5.9645 6.27251 5.9645 6.27251 5.9645 6.27251C5.9645 6.27251 5.9645 6.27251 5.9645 6.27251C5.9645 6.2725 5.9645 6.2725 5.9645 6.2725C5.9645 6.2725 5.9645 6.2725 5.9645 6.2725C5.9645 6.27249 5.9645 6.27249 5.9645 6.27249C5.9645 6.27249 5.9645 6.27249 5.9645 6.27249C5.9645 6.27248 5.9645 6.27248 5.9645 6.27248C5.9645 6.27248 5.9645 6.27248 5.9645 6.27247C5.9645 6.27247 5.9645 6.27247 5.9645 6.27247C5.9645 6.27247 5.9645 6.27247 5.9645 6.27246C5.9645 6.27246 5.9645 6.27246 5.9645 6.27246C5.9645 6.27246 5.9645 6.27245 5.9645 6.27245C5.9645 6.27245 5.9645 6.27245 5.9645 6.27245C5.9645 6.27244 5.9645 6.27244 5.9645 6.27244C5.9645 6.27244 5.9645 6.27244 5.9645 6.27243C5.9645 6.27243 5.9645 6.27243 5.9645 6.27243C5.9645 6.27243 5.9645 6.27242 5.9645 6.27242C5.9645 6.27242 5.9645 6.27242 5.9645 6.27241C5.9645 6.27241 5.9645 6.27241 5.9645 6.27241C5.9645 6.27241 5.9645 6.2724 5.9645 6.2724C5.9645 6.2724 5.9645 6.2724 5.9645 6.27239C5.9645 6.27239 5.9645 6.27239 5.9645 6.27239C5.9645 6.27238 5.9645 6.27238 5.9645 6.27238C5.9645 6.27238 5.9645 6.27237 5.9645 6.27237C5.9645 6.27237 5.9645 6.27237 5.9645 6.27236C5.9645 6.27236 5.9645 6.27236 5.9645 6.27236C5.9645 6.27235 5.9645 6.27235 5.9645 6.27235C5.9645 6.27235 5.9645 6.27234 5.9645 6.27234C5.9645 6.27234 5.9645 6.27233 5.9645 6.27233C5.9645 6.27233 5.9645 6.27233 5.9645 6.27232C5.9645 6.27232 5.9645 6.27232 5.9645 6.27231C5.9645 6.27231 5.9645 6.27231 5.9645 6.27231C5.9645 6.2723 5.9645 6.2723 5.9645 6.2723C5.9645 6.27229 5.9645 6.27229 5.9645 6.27229C5.9645 6.27228 5.9645 6.27228 5.9645 6.27228C5.9645 6.27228 5.9645 6.27227 5.9645 6.27227C5.9645 6.27227 5.9645 6.27226 5.9645 6.27226C5.9645 6.27226 5.9645 6.27225 5.9645 6.27225C5.9645 6.27225 5.9645 6.27224 5.9645 6.27224C5.9645 6.27224 5.9645 6.27223 5.9645 6.27223C5.9645 6.27223 5.9645 6.27222 5.9645 6.27222C5.9645 6.27222 5.9645 6.27221 5.9645 6.27221C5.9645 6.27221 5.9645 6.2722 5.9645 6.2722C5.9645 6.27219 5.9645 6.27219 5.9645 6.27219C5.9645 6.27218 5.9645 6.27218 5.9645 6.27218C5.9645 6.27217 5.9645 6.27217 5.9645 6.27217C5.9645 6.27216 5.9645 6.27216 5.9645 6.27215C5.9645 6.27215 5.9645 6.27215 5.9645 6.27214C5.9645 6.27214 5.9645 6.27213 5.9645 6.27213C5.9645 6.27213 5.9645 6.27212 5.9645 6.27212C5.9645 6.27211 5.9645 6.27211 5.9645 6.27211C5.9645 6.2721 5.9645 6.2721 5.9645 6.27209C5.9645 6.27209 5.9645 6.27209 5.9645 6.27208C5.9645 6.27208 5.9645 6.27207 5.9645 6.27207C5.9645 6.27206 5.9645 6.27206 5.9645 6.27206C5.9645 6.27205 5.9645 6.27205 5.9645 6.27204C5.9645 6.27204 5.9645 6.27203 5.9645 6.27203C5.9645 6.27203 5.9645 6.27202 5.9645 6.27202C5.9645 6.27201 5.9645 6.27201 5.9645 6.272C5.9645 6.272 5.9645 6.27199 5.9645 6.27199C5.9645 6.27198 5.9645 6.27198 5.9645 6.27197C5.9645 6.27197 5.9645 6.27197 5.9645 6.27196C5.9645 6.27196 5.9645 6.27195 5.9645 6.27195C5.9645 6.27194 5.9645 6.27194 5.9645 6.27193C5.9645 6.27193 5.9645 6.27192 5.9645 6.27192C5.9645 6.27191 5.9645 6.27191 5.9645 6.2719C5.9645 6.2719 5.9645 6.27189 5.9645 6.27189C5.9645 6.27188 5.9645 6.27188 5.9645 6.27187C5.9645 6.27186 5.9645 6.27186 5.9645 6.27185C5.9645 6.27185 5.9645 6.27184 5.9645 6.27184C5.9645 6.27183 5.9645 6.27183 5.9645 6.27182C5.9645 6.27182 5.9645 6.27181 5.9645 6.27181C5.9645 6.2718 5.9645 6.27179 5.9645 6.27179C5.9645 6.27178 5.9645 6.27178 5.9645 6.27177C5.9645 6.27177 5.9645 6.27176 5.9645 6.27175C5.9645 6.27175 5.9645 6.27174 5.9645 6.27174C5.9645 6.27173 5.9645 6.27173 5.9645 6.27172C5.9645 6.27171 5.9645 6.27171 5.9645 6.2717C5.9645 6.2717 5.9645 6.27169 5.9645 6.27168C5.9645 6.27168 5.9645 6.27167 5.9645 6.27167C5.9645 6.27166 5.9645 6.27165 5.9645 6.27165C5.9645 6.27164 5.9645 6.27164 5.9645 6.27163C5.9645 6.27162 5.9645 6.27162 5.9645 6.27161C5.9645 6.2716 5.9645 6.2716 5.9645 6.27159C5.9645 6.27158 5.9645 6.27158 5.9645 6.27157C5.9645 6.27156 5.9645 6.27156 5.9645 6.27155C5.9645 6.27155 5.9645 6.27154 5.9645 6.27153C5.9645 6.27153 5.9645 6.27152 5.9645 6.27151C5.9645 6.2715 5.9645 6.2715 5.9645 6.27149C5.9645 6.27148 5.9645 6.27148 5.9645 6.27147C5.9645 6.27146 5.9645 6.27146 5.9645 6.27145C5.9645 6.27144 5.9645 6.27144 5.9645 6.27143C5.9645 6.27142 5.9645 6.27141 5.9645 6.27141C5.9645 6.2714 5.9645 6.27139 5.9645 6.27139C5.9645 6.27138 5.9645 6.27137 5.9645 6.27136C5.9645 6.27136 5.9645 6.27135 5.9645 6.27134C5.9645 6.27133 5.9645 6.27133 5.9645 6.27132C5.9645 6.27131 5.9645 6.2713 5.9645 6.2713C5.9645 6.27129 5.9645 6.27128 5.9645 6.27127C5.9645 6.27127 5.9645 6.27126 5.9645 6.27125C5.9645 6.27124 5.9645 6.27123 5.9645 6.27123C5.9645 6.27122 5.9645 6.27121 5.9645 6.2712C5.9645 6.27119 5.9645 6.27119 5.9645 6.27118C5.9645 6.27117 5.9645 6.27116 5.9645 6.27115C5.9645 6.27115 5.9645 6.27114 5.9645 6.27113C5.9645 6.27112 5.9645 6.27111 5.9645 6.27111C5.9645 6.2711 5.9645 6.27109 5.9645 6.27108C5.9645 6.27107 5.9645 6.27106 5.9645 6.27105C5.9645 6.27105 5.9645 6.27104 5.9645 6.27103C5.9645 6.27102 5.9645 6.27101 5.9645 6.271C5.9645 6.27099 5.9645 6.27099 5.9645 6.27098C5.9645 6.27097 5.9645 6.27096 5.9645 6.27095C5.9645 6.27094 5.9645 6.27093 5.9645 6.27092C5.9645 6.27091 5.9645 6.27091 5.9645 6.2709C5.9645 6.27089 5.9645 6.27088 5.9645 6.27087C5.9645 6.27086 5.9645 6.27085 5.9645 6.27084C5.9645 6.27083 5.9645 6.27082 5.9645 6.27081C5.9645 6.2708 5.9645 6.2708 5.9645 6.27079C5.9645 6.27078 5.9645 6.27077 5.9645 6.27076C5.9645 6.27075 5.9645 6.27074 5.9645 6.27073C5.9645 6.27072 5.9645 6.27071 5.9645 6.2707C5.9645 6.27069 5.9645 6.27068 5.9645 6.27067C5.9645 6.27066 5.9645 6.27065 5.9645 6.27064C5.9645 6.27063 5.9645 6.27062 5.9645 6.27061C5.9645 6.2706 5.9645 6.27059 5.9645 6.27058C5.9645 6.27057 5.9645 6.27056 5.9645 6.27055C5.9645 6.27054 5.9645 6.27053 5.9645 6.27052C5.9645 6.27051 5.9645 6.2705 5.9645 6.27049C5.9645 6.27048 5.9645 6.27047 5.9645 6.27046C5.9645 6.27045 5.9645 6.27043 5.9645 6.27042C5.9645 6.27041 5.9645 6.2704 5.9645 6.27039C5.9645 6.27038 5.9645 6.27037 5.9645 6.27036C5.9645 6.27035 5.9645 6.27034 5.9645 6.27033C5.9645 6.27032 5.9645 6.2703 5.9645 6.27029C5.9645 6.27028 5.9645 6.27027 5.9645 6.27026C5.9645 6.27025 5.9645 6.27024 5.9645 6.27023C5.9645 6.27022 5.9645 6.2702 5.9645 6.27019C5.9645 6.27018 5.9645 6.27017 5.9645 6.27016C5.9645 6.27015 5.9645 6.27014 5.9645 6.27012C5.9645 6.27011 5.9645 6.2701 5.9645 6.27009C5.9645 6.27008 5.9645 6.27007 5.9645 6.27005C5.9645 6.27004 5.9645 6.27003 5.9645 6.27002C5.9645 6.27001 5.9645 6.26999 5.9645 6.26998C5.9645 6.26997 5.9645 6.26996 5.9645 6.26995C5.9645 6.26993 5.9645 6.26992 5.9645 6.26991C5.9645 6.2699 5.9645 6.26989 5.9645 6.26987C5.9645 6.26986 5.9645 6.26985 5.9645 6.26984C5.9645 6.26982 5.9645 6.26981 5.9645 6.2698C5.9645 6.26979 5.9645 6.26977 5.9645 6.26976C5.9645 6.26975 5.9645 6.26973 5.9645 6.26972C5.9645 6.26971 5.9645 6.2697 5.9645 6.26968C5.9645 6.26967 5.9645 6.26966 5.9645 6.26964C5.9645 6.26963 5.9645 6.26962 5.9645 6.26961C5.9645 6.26959 5.9645 6.26958 5.9645 6.26957C5.9645 6.26955 5.9645 6.26954 5.9645 6.26953C5.9645 6.26951 5.9645 6.2695 5.9645 6.26949C5.9645 6.26947 5.9645 6.26946 5.9645 6.26944C5.9645 6.26943 5.9645 6.26942 5.9645 6.2694C5.9645 6.26939 5.9645 6.26938 5.9645 6.26936C5.9645 6.26935 5.9645 6.26933 5.9645 6.26932C5.9645 6.26931 5.9645 6.26929 5.9645 6.26928C5.9645 6.26926 5.9645 6.26925 5.9645 6.26924C5.9645 6.26922 5.9645 6.26921 5.9645 6.26919C5.9645 6.26918 5.9645 6.26916 5.9645 6.26915C5.9645 6.26914 5.9645 6.26912 5.9645 6.26911C5.9645 6.26909 5.9645 6.26908 5.9645 6.26906C5.9645 6.26905 5.9645 6.26903 5.9645 6.26902C5.9645 6.269 5.9645 6.26899 5.9645 6.26897C5.9645 6.26896 5.9645 6.26894 5.9645 6.26893C5.9645 6.26891 5.9645 6.2689 5.9645 6.26888C5.9645 6.26887 5.9645 6.26885 5.9645 6.26884C5.9645 6.26882 5.9645 6.26881 5.9645 6.26879C5.9645 6.26878 5.9645 6.26876 5.9645 6.26875C5.9645 6.26873 5.9645 6.26872 5.9645 6.2687C5.9645 6.26868 5.9645 6.26867 5.9645 6.26865C5.9645 6.26864 5.9645 6.26862 5.9645 6.2686C5.9645 6.26859 5.9645 6.26857 5.9645 6.26856C5.9645 6.26854 5.9645 6.26852 5.9645 6.26851C5.9645 6.26849 5.9645 6.26848 5.9645 6.26846C5.9645 6.26844 5.9645 6.26843 5.9645 6.26841C5.9645 6.26839 5.9645 6.26838 5.9645 6.26836C5.9645 6.26835 5.9645 6.26833 5.9645 6.26831C5.9645 6.2683 5.9645 6.26828 5.9645 6.26826C5.9645 6.26824 5.9645 6.26823 5.9645 6.26821C5.9645 6.26819 5.9645 6.26818 5.9645 6.26816C5.9645 6.26814 5.9645 6.26813 5.9645 6.26811C5.9645 6.26809 5.9645 6.26807 5.9645 6.26806C5.9645 6.26804 5.9645 6.26802 5.9645 6.26801C5.9645 6.26799 5.9645 6.26797 5.9645 6.26795C5.9645 6.26794 5.9645 6.26792 5.9645 6.2679C5.9645 6.26788 5.9645 6.26786 5.9645 6.26785C5.9645 6.26783 5.9645 6.26781 5.9645 6.26779C5.9645 6.26777 5.9645 6.26776 5.9645 6.26774C5.9645 6.26772 5.9645 6.2677 5.9645 6.26768C5.9645 6.26767 5.9645 6.26765 5.9645 6.26763C5.9645 6.26761 5.9645 6.26759 5.9645 6.26757C5.9645 6.26755 5.9645 6.26754 5.9645 6.26752C5.9645 6.2675 5.9645 6.26748 5.9645 6.26746C5.9645 6.26744 5.9645 6.26742 5.9645 6.26741C5.9645 6.26739 5.9645 6.26737 5.9645 6.26735C5.9645 6.26733 5.9645 6.26731 5.9645 6.26729C5.9645 6.26727 5.9645 6.26725 5.9645 6.26723C5.9645 6.26721 5.9645 6.26719 5.9645 6.26717C5.9645 6.26716 5.9645 6.26714 5.9645 6.26712C5.9645 6.2671 5.9645 6.26708 5.9645 6.26706C5.9645 6.26704 5.9645 6.26702 5.9645 6.267C5.9645 6.26698 5.9645 6.26696 5.9645 6.26694C5.9645 6.26692 5.9645 6.2669 5.9645 6.26688C5.9645 6.26686 5.9645 6.26684 5.9645 6.26682C5.9645 6.2668 5.9645 6.26678 5.9645 6.26676C5.9645 6.26673 5.9645 6.26671 5.9645 6.26669C5.9645 6.26667 5.9645 6.26665 5.9645 6.26663C5.9645 6.26661 5.9645 6.26659 5.9645 6.26657C5.9645 6.26655 5.9645 6.26653 5.9645 6.26651C5.9645 6.26649 5.9645 6.26646 5.9645 6.26644C5.9645 6.26642 5.9645 6.2664 5.9645 6.26638C5.9645 6.26636 5.9645 6.26634 5.9645 6.26632C5.9645 6.26629 5.9645 6.26627 5.9645 6.26625C5.9645 6.26623 5.9645 6.26621 5.9645 6.26619C5.9645 6.26616 5.9645 6.26614 5.9645 6.26612C5.9645 6.2661 5.9645 6.26608 5.9645 6.26605C5.9645 6.26603 5.9645 6.26601 5.9645 6.26599C5.9645 6.26597 5.9645 6.26594 5.9645 6.26592C5.9645 6.2659 5.9645 6.26588 5.9645 6.26585C5.9645 6.26583 5.9645 6.26581 5.9645 6.26579C5.9645 6.26576 5.9645 6.26574 5.9645 6.26572C5.9645 6.26569 5.9645 6.26567 5.9645 6.26565C5.9645 6.26563 5.9645 6.2656 5.9645 6.26558C5.9645 6.26556 5.9645 6.26553 5.9645 6.26551C5.9645 6.26549 5.9645 6.26546 5.9645 6.26544C5.9645 6.26542 5.9645 6.26539 5.9645 6.26537C5.9645 6.26535 5.9645 6.26532 5.9645 6.2653C5.9645 6.26528 5.9645 6.26525 5.9645 6.26523C5.9645 6.2652 5.9645 6.26518 5.9645 6.26516C5.9645 6.26513 5.9645 6.26511 5.9645 6.26508C5.9645 6.26506 5.9645 6.26503 5.9645 6.26501C5.9645 6.26499 5.9645 6.26496 5.9645 6.26494C5.9645 6.26491 5.9645 6.26489 5.9645 6.26486C5.9645 6.26484 5.9645 6.26481 5.9645 6.26479C5.9645 6.26476 5.9645 6.26474 5.9645 6.26471C5.9645 6.26469 5.9645 6.26466 5.9645 6.26464C5.9645 6.26461 5.9645 6.26459 5.9645 6.26456C5.9645 6.26454 5.9645 6.26451 5.9645 6.26449C5.9645 6.26446 5.9645 6.26444 5.9645 6.26441C5.9645 6.26439 5.9645 6.26436 5.9645 6.26433C5.9645 6.26431 5.9645 6.26428 5.9645 6.26426C5.9645 6.26423 5.9645 6.26421 5.9645 6.26418C5.9645 6.26415 5.9645 6.26413 5.9645 6.2641C5.9645 6.26407 5.9645 6.26405 5.9645 6.26402C5.9645 6.264 5.9645 6.26397 5.9645 6.26394C5.9645 6.26392 5.9645 6.26389 5.9645 6.26386C5.9645 6.26384 5.9645 6.26381 5.9645 6.26378C5.9645 6.26376 5.9645 6.26373 5.9645 6.2637C5.9645 6.26367 5.9645 6.26365 5.9645 6.26362C5.9645 6.26359 5.9645 6.26357 5.9645 6.26354C5.9645 6.26351 5.9645 6.26348 5.9645 6.26346C5.9645 6.26343 5.9645 6.2634 5.9645 6.26337C5.9645 6.26334 5.9645 6.26332 5.9645 6.26329C5.9645 6.26326 5.9645 6.26323 5.9645 6.26321C5.9645 6.26318 5.9645 6.26315 5.9645 6.26312C5.9645 6.26309 5.9645 6.26306 5.9645 6.26304C5.9645 6.26301 5.9645 6.26298 5.9645 6.26295C5.9645 6.26292 5.9645 6.26289 5.9645 6.26286C5.9645 6.26284 5.9645 6.26281 5.9645 6.26278C5.9645 6.26275 5.9645 6.26272 5.9645 6.26269C5.9645 6.26266 5.9645 6.26263 5.9645 6.2626C5.9645 6.26257 5.9645 6.26255 5.9645 6.26252C5.9645 6.26249 5.9645 6.26246 5.9645 6.26243C5.9645 6.2624 5.9645 6.26237 5.9645 6.26234C5.9645 6.26231 5.9645 6.26228 5.9645 6.26225C5.9645 6.26222 5.9645 6.26219 5.9645 6.26216C5.9645 6.26213 5.9645 6.2621 5.9645 6.26207C5.9645 6.26204 5.9645 6.26201 5.9645 6.26198C5.9645 6.26195 5.9645 6.26192 5.9645 6.26189C5.9645 6.26186 5.9645 6.26182 5.9645 6.26179C5.9645 6.26176 5.9645 6.26173 5.9645 6.2617C5.9645 6.26167 5.9645 6.26164 5.9645 6.26161C5.9645 6.26158 5.9645 6.26155 5.9645 6.26151C5.9645 6.26148 5.9645 6.26145 5.9645 6.26142C5.9645 6.26139 5.9645 6.26136 5.9645 6.26133C5.9645 6.26129 5.9645 6.26126 5.9645 6.26123C5.9645 6.2612 5.9645 6.26117 5.9645 6.26113C5.9645 6.2611 5.9645 6.26107 5.9645 6.26104C5.9645 6.26101 5.9645 6.26097 5.9645 6.26094C5.9645 6.26091 5.9645 6.26088 5.9645 6.26084C5.9645 6.26081 5.9645 6.26078 5.9645 6.26075C5.9645 6.26071 5.9645 6.26068 5.9645 6.26065C5.9645 6.26062 5.9645 6.26058 5.9645 6.26055C5.9645 6.26052 5.9645 6.26048 5.9645 6.26045C5.9645 6.26042 5.9645 6.26038 5.9645 6.26035C5.9645 6.26032 5.9645 6.26028 5.9645 6.26025C5.9645 6.26022 5.9645 6.26018 5.9645 6.26015C5.9645 6.26011 5.9645 6.26008 5.9645 6.26005C5.9645 6.26001 5.9645 6.25998 5.9645 6.25994C5.9645 6.25991 5.9645 6.25988 5.9645 6.25984C5.9645 6.25981 5.9645 6.25977 5.9645 6.25974C5.9645 6.2597 5.9645 6.25967 5.9645 6.25963C5.9645 6.2596 5.9645 6.25956 5.9645 6.25953C5.9645 6.25949 5.9645 6.25946 5.9645 6.25942C5.9645 6.25939 5.9645 6.25935 5.9645 6.25932C5.9645 6.25928 5.9645 6.25925 5.9645 6.25921C5.9645 6.25918 5.9645 6.25914 5.9645 6.2591C5.9645 6.25907 5.9645 6.25903 5.9645 6.259C5.9645 6.25896 5.9645 6.25893 5.9645 6.25889C5.9645 6.25885 5.9645 6.25882 5.9645 6.25878C5.9645 6.25874 5.9645 6.25871 5.9645 6.25867C5.9645 6.25864 5.9645 6.2586 5.9645 6.25856C5.9645 6.25853 5.9645 6.25849 5.9645 6.25845C5.9645 6.25842 5.9645 6.25838 5.9645 6.25834C5.9645 6.2583 5.9645 6.25827 5.9645 6.25823C5.9645 6.25819 5.9645 6.25816 5.9645 6.25812C5.9645 6.25808 5.9645 6.25804 5.9645 6.25801C5.9645 6.25797 5.9645 6.25793 5.9645 6.25789C5.9645 6.25786 5.9645 6.25782 5.9645 6.25778C5.9645 6.25774 5.9645 6.2577 5.9645 6.25767C5.9645 6.25763 5.9645 6.25759 5.9645 6.25755C5.9645 6.25751 5.9645 6.25747 5.9645 6.25744C5.9645 6.2574 5.9645 6.25736 5.9645 6.25732C5.9645 6.25728 5.9645 6.25724 5.9645 6.2572C5.9645 6.25716 5.9645 6.25712 5.9645 6.25709C5.9645 6.25705 5.9645 6.25701 5.9645 6.25697C5.9645 6.25693 5.9645 6.25689 5.9645 6.25685C5.9645 6.25681 5.9645 6.25677 5.9645 6.25673C5.9645 6.25669 5.9645 6.25665 5.9645 6.25661C5.9645 6.25657 5.9645 6.25653 5.9645 6.25649C5.9645 6.25645 5.9645 6.25641 5.9645 6.25637C5.9645 6.25633 5.9645 6.25629 5.9645 6.25625C5.9645 6.25621 5.9645 6.25617 5.9645 6.25613C5.9645 6.25609 5.9645 6.25605 5.9645 6.256C5.9645 6.25596 5.9645 6.25592 5.9645 6.25588C5.9645 6.25584 5.9645 6.2558 5.9645 6.25576C5.9645 6.25572 5.9645 6.25567 5.9645 6.25563C5.9645 6.25559 5.9645 6.25555 5.9645 6.25551C5.9645 6.25547 5.9645 6.25542 5.9645 6.25538C5.9645 6.25534 5.9645 6.2553 5.9645 6.25526C5.9645 6.25521 5.9645 6.25517 5.9645 6.25513C5.9645 6.25509 5.9645 6.25504 5.9645 6.255C5.9645 6.25496 5.9645 6.25492 5.9645 6.25487C5.9645 6.25483 5.9645 6.25479 5.9645 6.25475C5.9645 6.2547 5.9645 6.25466 5.9645 6.25462C5.9645 6.25457 5.9645 6.25453 5.9645 6.25449C5.9645 6.25444 5.9645 6.2544 5.9645 6.25436C5.9645 6.25431 5.9645 6.25427 5.9645 6.25422C5.9645 6.25418 5.9645 6.25414 5.9645 6.25409C5.9645 6.25405 5.9645 6.254 5.9645 6.25396C5.9645 6.25392 5.9645 6.25387 5.9645 6.25383C5.9645 6.25378 5.9645 6.25374 5.9645 6.25369C5.9645 6.25365 5.9645 6.2536 5.9645 6.25356C5.9645 6.25351 5.9645 6.25347 5.9645 6.25342C5.9645 6.25338 5.9645 6.25333 5.9645 6.25329C5.9645 6.25324 5.9645 6.2532 5.9645 6.25315C5.9645 6.25311 5.9645 6.25306 5.9645 6.25302C5.9645 6.25297 5.9645 6.25292 5.9645 6.25288C5.9645 6.25283 5.9645 6.25279 5.9645 6.25274C5.9645 6.25269 5.9645 6.25265 5.9645 6.2526C5.9645 6.25256 5.9645 6.25251 5.9645 6.25246C5.9645 6.25242 5.9645 6.25237 5.9645 6.25232C5.9645 6.25228 5.9645 6.25223 5.9645 6.25218C5.9645 6.25213 5.9645 6.25209 5.9645 6.25204C5.9645 6.25199 5.9645 6.25195 5.9645 6.2519C5.9645 6.25185 5.9645 6.2518 5.9645 6.25176C5.9645 6.25171 5.9645 6.25166 5.9645 6.25161C5.9645 6.25156 5.9645 6.25152 5.9645 6.25147C5.9645 6.25142 5.9645 6.25137 5.9645 6.25132C5.9645 6.25128 5.9645 6.25123 5.9645 6.25118C5.9645 6.25113 5.9645 6.25108 5.9645 6.25103C5.9645 6.25098 5.9645 6.25094 5.9645 6.25089C5.9645 6.25084 5.9645 6.25079 5.9645 6.25074C5.9645 6.25069 5.9645 6.25064 5.9645 6.25059C5.9645 6.25054 5.9645 6.25049 5.9645 6.25044C5.9645 6.25039 5.9645 6.25034 5.9645 6.25029C5.9645 6.25024 5.9645 6.25019 5.9645 6.25014C5.9645 6.25009 5.9645 6.25004 5.9645 6.24999C5.9645 6.24994 5.9645 6.24989 5.9645 6.24984C5.9645 6.24979 5.9645 6.24974 5.9645 6.24969C5.9645 6.24964 5.9645 6.24959 5.9645 6.24954C5.9645 6.24949 5.9645 6.24944 5.9645 6.24938C5.9645 6.24933 5.9645 6.24928 5.9645 6.24923C5.9645 6.24918 5.9645 6.24913 5.9645 6.24908C5.9645 6.24902 5.9645 6.24897 5.9645 6.24892C5.9645 6.24887 5.9645 6.24882 5.9645 6.24876C5.9645 6.24871 5.9645 6.24866 5.9645 6.24861C5.9645 6.24856 5.9645 6.2485 5.9645 6.24845C5.9645 6.2484 5.9645 6.24835 5.9645 6.24829C5.9645 6.24824 5.9645 6.24819 5.9645 6.24813C5.9645 6.24808 5.9645 6.24803 5.9645 6.24797C5.9645 6.24792 5.9645 6.24787 5.9645 6.24781C5.9645 6.24776 5.9645 6.24771 5.9645 6.24765C5.9645 6.2476 5.9645 6.24755 5.9645 6.24749C5.9645 6.24744 5.9645 6.24738 5.9645 6.24733C5.9645 6.24728 5.9645 6.24722 5.9645 6.24717C5.9645 6.24711 5.9645 6.24706 5.9645 6.247C5.9645 6.24695 5.9645 6.24689 5.9645 6.24684C5.9645 6.24678 5.9645 6.24673 5.9645 6.24667C5.9645 6.24662 5.9645 6.24656 5.9645 6.24651C5.9645 6.24645 5.9645 6.2464 5.9645 6.24634C5.9645 6.24629 5.9645 6.24623 5.9645 6.24618C5.9645 6.24612 5.9645 6.24606 5.9645 6.24601C5.9645 6.24595 5.9645 6.2459 5.9645 6.24584C5.9645 6.24578 5.9645 6.24573 5.9645 6.24567C5.9645 6.24561 5.9645 6.24556 5.9645 6.2455C5.9645 6.24544 5.9645 6.24539 5.9645 6.24533C5.9645 6.24527 5.9645 6.24521 5.9645 6.24516C5.9645 6.2451 5.9645 6.24504 5.9645 6.24499C5.9645 6.24493 5.9645 6.24487 5.9645 6.24481C5.9645 6.24476 5.9645 6.2447 5.9645 6.24464C5.9645 6.24458 5.9645 6.24452 5.9645 6.24447C5.9645 6.24441 5.9645 6.24435 5.9645 6.24429C5.9645 6.24423 5.9645 6.24417 5.9645 6.24411C5.9645 6.24406 5.9645 6.244 5.9645 6.24394C5.9645 6.24388 5.9645 6.24382 5.9645 6.24376C5.9645 6.2437 5.9645 6.24364 5.9645 6.24358C5.9645 6.24352 5.9645 6.24346 5.9645 6.2434C5.9645 6.24334 5.9645 6.24329 5.9645 6.24323C5.9645 6.24317 5.9645 6.24311 5.9645 6.24305C5.9645 6.24299 5.9645 6.24292 5.9645 6.24286C5.9645 6.2428 5.9645 6.24274 5.9645 6.24268C5.9645 6.24262 5.9645 6.24256 5.9645 6.2425C5.9645 6.24244 5.9645 6.24238 5.9645 6.24232C5.9645 6.24226 5.9645 6.2422 5.9645 6.24213C5.9645 6.24207 5.9645 6.24201 5.9645 6.24195C5.9645 6.24189 5.9645 6.24183 5.9645 6.24176C5.9645 6.2417 5.9645 6.24164 5.9645 6.24158C5.9645 6.24152 5.9645 6.24145 5.9645 6.24139C5.9645 6.24133 5.9645 6.24127 5.9645 6.2412C5.9645 6.24114 5.9645 6.24108 5.9645 6.24102C5.9645 6.24095 5.9645 6.24089 5.9645 6.24083C5.9645 6.24076 5.9645 6.2407 5.9645 6.24064C5.9645 6.24057 5.9645 6.24051 5.9645 6.24045C5.9645 6.24038 5.9645 6.24032 5.9645 6.24026C5.9645 6.24019 5.9645 6.24013 5.9645 6.24006C5.9645 6.24 5.9645 6.23994 5.9645 6.23987C5.9645 6.23981 5.9645 6.23974 5.9645 6.23968C5.9645 6.23961 5.9645 6.23955 5.9645 6.23948C5.9645 6.23942 5.9645 6.23935 5.9645 6.23929L7.9645 6.23929C7.9645 6.23935 7.9645 6.23942 7.9645 6.23948C7.9645 6.23955 7.9645 6.23961 7.9645 6.23968C7.9645 6.23974 7.9645 6.23981 7.9645 6.23987C7.9645 6.23994 7.9645 6.24 7.9645 6.24006C7.9645 6.24013 7.9645 6.24019 7.9645 6.24026C7.9645 6.24032 7.9645 6.24038 7.9645 6.24045C7.9645 6.24051 7.9645 6.24057 7.9645 6.24064C7.9645 6.2407 7.9645 6.24076 7.9645 6.24083C7.9645 6.24089 7.9645 6.24095 7.9645 6.24102C7.9645 6.24108 7.9645 6.24114 7.9645 6.2412C7.9645 6.24127 7.9645 6.24133 7.9645 6.24139C7.9645 6.24145 7.9645 6.24152 7.9645 6.24158C7.9645 6.24164 7.9645 6.2417 7.9645 6.24176C7.9645 6.24183 7.9645 6.24189 7.9645 6.24195C7.9645 6.24201 7.9645 6.24207 7.9645 6.24213C7.9645 6.2422 7.9645 6.24226 7.9645 6.24232C7.9645 6.24238 7.9645 6.24244 7.9645 6.2425C7.9645 6.24256 7.9645 6.24262 7.9645 6.24268C7.9645 6.24274 7.9645 6.2428 7.9645 6.24286C7.9645 6.24292 7.9645 6.24299 7.9645 6.24305C7.9645 6.24311 7.9645 6.24317 7.9645 6.24323C7.9645 6.24329 7.9645 6.24334 7.9645 6.2434C7.9645 6.24346 7.9645 6.24352 7.9645 6.24358C7.9645 6.24364 7.9645 6.2437 7.9645 6.24376C7.9645 6.24382 7.9645 6.24388 7.9645 6.24394C7.9645 6.244 7.9645 6.24406 7.9645 6.24411C7.9645 6.24417 7.9645 6.24423 7.9645 6.24429C7.9645 6.24435 7.9645 6.24441 7.9645 6.24447C7.9645 6.24452 7.9645 6.24458 7.9645 6.24464C7.9645 6.2447 7.9645 6.24475 7.9645 6.24481C7.9645 6.24487 7.9645 6.24493 7.9645 6.24499C7.9645 6.24504 7.9645 6.2451 7.9645 6.24516C7.9645 6.24521 7.9645 6.24527 7.9645 6.24533C7.9645 6.24539 7.9645 6.24544 7.9645 6.2455C7.9645 6.24556 7.9645 6.24561 7.9645 6.24567C7.9645 6.24573 7.9645 6.24578 7.9645 6.24584C7.9645 6.2459 7.9645 6.24595 7.9645 6.24601C7.9645 6.24606 7.9645 6.24612 7.9645 6.24617C7.9645 6.24623 7.9645 6.24629 7.9645 6.24634C7.9645 6.2464 7.9645 6.24645 7.9645 6.24651C7.9645 6.24656 7.9645 6.24662 7.9645 6.24667C7.9645 6.24673 7.9645 6.24678 7.9645 6.24684C7.9645 6.24689 7.9645 6.24695 7.9645 6.247C7.9645 6.24706 7.9645 6.24711 7.9645 6.24717C7.9645 6.24722 7.9645 6.24728 7.9645 6.24733C7.9645 6.24738 7.9645 6.24744 7.9645 6.24749C7.9645 6.24755 7.9645 6.2476 7.9645 6.24765C7.9645 6.24771 7.9645 6.24776 7.9645 6.24781C7.9645 6.24787 7.9645 6.24792 7.9645 6.24797C7.9645 6.24803 7.9645 6.24808 7.9645 6.24813C7.9645 6.24819 7.9645 6.24824 7.9645 6.24829C7.9645 6.24835 7.9645 6.2484 7.9645 6.24845C7.9645 6.2485 7.9645 6.24856 7.9645 6.24861C7.9645 6.24866 7.9645 6.24871 7.9645 6.24876C7.9645 6.24882 7.9645 6.24887 7.9645 6.24892C7.9645 6.24897 7.9645 6.24902 7.9645 6.24908C7.9645 6.24913 7.9645 6.24918 7.9645 6.24923C7.9645 6.24928 7.9645 6.24933 7.9645 6.24938C7.9645 6.24944 7.9645 6.24949 7.9645 6.24954C7.9645 6.24959 7.9645 6.24964 7.9645 6.24969C7.9645 6.24974 7.9645 6.24979 7.9645 6.24984C7.9645 6.24989 7.9645 6.24994 7.9645 6.24999C7.9645 6.25004 7.9645 6.25009 7.9645 6.25014C7.9645 6.25019 7.9645 6.25024 7.9645 6.25029C7.9645 6.25034 7.9645 6.25039 7.9645 6.25044C7.9645 6.25049 7.9645 6.25054 7.9645 6.25059C7.9645 6.25064 7.9645 6.25069 7.9645 6.25074C7.9645 6.25079 7.9645 6.25084 7.9645 6.25089C7.9645 6.25094 7.9645 6.25098 7.9645 6.25103C7.9645 6.25108 7.9645 6.25113 7.9645 6.25118C7.9645 6.25123 7.9645 6.25128 7.9645 6.25132C7.9645 6.25137 7.9645 6.25142 7.9645 6.25147C7.9645 6.25152 7.9645 6.25156 7.9645 6.25161C7.9645 6.25166 7.9645 6.25171 7.9645 6.25176C7.9645 6.2518 7.9645 6.25185 7.9645 6.2519C7.9645 6.25195 7.9645 6.25199 7.9645 6.25204C7.9645 6.25209 7.9645 6.25213 7.9645 6.25218C7.9645 6.25223 7.9645 6.25228 7.9645 6.25232C7.9645 6.25237 7.9645 6.25242 7.9645 6.25246C7.9645 6.25251 7.9645 6.25256 7.9645 6.2526C7.9645 6.25265 7.9645 6.25269 7.9645 6.25274C7.9645 6.25279 7.9645 6.25283 7.9645 6.25288C7.9645 6.25292 7.9645 6.25297 7.9645 6.25302C7.9645 6.25306 7.9645 6.25311 7.9645 6.25315C7.9645 6.2532 7.9645 6.25324 7.9645 6.25329C7.9645 6.25333 7.9645 6.25338 7.9645 6.25342C7.9645 6.25347 7.9645 6.25351 7.9645 6.25356C7.9645 6.2536 7.9645 6.25365 7.9645 6.25369C7.9645 6.25374 7.9645 6.25378 7.9645 6.25383C7.9645 6.25387 7.9645 6.25392 7.9645 6.25396C7.9645 6.254 7.9645 6.25405 7.9645 6.25409C7.9645 6.25414 7.9645 6.25418 7.9645 6.25422C7.9645 6.25427 7.9645 6.25431 7.9645 6.25436C7.9645 6.2544 7.9645 6.25444 7.9645 6.25449C7.9645 6.25453 7.9645 6.25457 7.9645 6.25462C7.9645 6.25466 7.9645 6.2547 7.9645 6.25475C7.9645 6.25479 7.9645 6.25483 7.9645 6.25487C7.9645 6.25492 7.9645 6.25496 7.9645 6.255C7.9645 6.25504 7.9645 6.25509 7.9645 6.25513C7.9645 6.25517 7.9645 6.25521 7.9645 6.25526C7.9645 6.2553 7.9645 6.25534 7.9645 6.25538C7.9645 6.25542 7.9645 6.25547 7.9645 6.25551C7.9645 6.25555 7.9645 6.25559 7.9645 6.25563C7.9645 6.25567 7.9645 6.25572 7.9645 6.25576C7.9645 6.2558 7.9645 6.25584 7.9645 6.25588C7.9645 6.25592 7.9645 6.25596 7.9645 6.256C7.9645 6.25604 7.9645 6.25609 7.9645 6.25613C7.9645 6.25617 7.9645 6.25621 7.9645 6.25625C7.9645 6.25629 7.9645 6.25633 7.9645 6.25637C7.9645 6.25641 7.9645 6.25645 7.9645 6.25649C7.9645 6.25653 7.9645 6.25657 7.9645 6.25661C7.9645 6.25665 7.9645 6.25669 7.9645 6.25673C7.9645 6.25677 7.9645 6.25681 7.9645 6.25685C7.9645 6.25689 7.9645 6.25693 7.9645 6.25697C7.9645 6.25701 7.9645 6.25705 7.9645 6.25709C7.9645 6.25712 7.9645 6.25716 7.9645 6.2572C7.9645 6.25724 7.9645 6.25728 7.9645 6.25732C7.9645 6.25736 7.9645 6.2574 7.9645 6.25743C7.9645 6.25747 7.9645 6.25751 7.9645 6.25755C7.9645 6.25759 7.9645 6.25763 7.9645 6.25767C7.9645 6.2577 7.9645 6.25774 7.9645 6.25778C7.9645 6.25782 7.9645 6.25786 7.9645 6.25789C7.9645 6.25793 7.9645 6.25797 7.9645 6.25801C7.9645 6.25804 7.9645 6.25808 7.9645 6.25812C7.9645 6.25816 7.9645 6.25819 7.9645 6.25823C7.9645 6.25827 7.9645 6.2583 7.9645 6.25834C7.9645 6.25838 7.9645 6.25842 7.9645 6.25845C7.9645 6.25849 7.9645 6.25853 7.9645 6.25856C7.9645 6.2586 7.9645 6.25864 7.9645 6.25867C7.9645 6.25871 7.9645 6.25874 7.9645 6.25878C7.9645 6.25882 7.9645 6.25885 7.9645 6.25889C7.9645 6.25893 7.9645 6.25896 7.9645 6.259C7.9645 6.25903 7.9645 6.25907 7.9645 6.2591C7.9645 6.25914 7.9645 6.25918 7.9645 6.25921C7.9645 6.25925 7.9645 6.25928 7.9645 6.25932C7.9645 6.25935 7.9645 6.25939 7.9645 6.25942C7.9645 6.25946 7.9645 6.25949 7.9645 6.25953C7.9645 6.25956 7.9645 6.2596 7.9645 6.25963C7.9645 6.25967 7.9645 6.2597 7.9645 6.25974C7.9645 6.25977 7.9645 6.25981 7.9645 6.25984C7.9645 6.25987 7.9645 6.25991 7.9645 6.25994C7.9645 6.25998 7.9645 6.26001 7.9645 6.26005C7.9645 6.26008 7.9645 6.26011 7.9645 6.26015C7.9645 6.26018 7.9645 6.26021 7.9645 6.26025C7.9645 6.26028 7.9645 6.26032 7.9645 6.26035C7.9645 6.26038 7.9645 6.26042 7.9645 6.26045C7.9645 6.26048 7.9645 6.26052 7.9645 6.26055C7.9645 6.26058 7.9645 6.26062 7.9645 6.26065C7.9645 6.26068 7.9645 6.26071 7.9645 6.26075C7.9645 6.26078 7.9645 6.26081 7.9645 6.26084C7.9645 6.26088 7.9645 6.26091 7.9645 6.26094C7.9645 6.26097 7.9645 6.26101 7.9645 6.26104C7.9645 6.26107 7.9645 6.2611 7.9645 6.26113C7.9645 6.26117 7.9645 6.2612 7.9645 6.26123C7.9645 6.26126 7.9645 6.26129 7.9645 6.26133C7.9645 6.26136 7.9645 6.26139 7.9645 6.26142C7.9645 6.26145 7.9645 6.26148 7.9645 6.26151C7.9645 6.26155 7.9645 6.26158 7.9645 6.26161C7.9645 6.26164 7.9645 6.26167 7.9645 6.2617C7.9645 6.26173 7.9645 6.26176 7.9645 6.26179C7.9645 6.26182 7.9645 6.26186 7.9645 6.26189C7.9645 6.26192 7.9645 6.26195 7.9645 6.26198C7.9645 6.26201 7.9645 6.26204 7.9645 6.26207C7.9645 6.2621 7.9645 6.26213 7.9645 6.26216C7.9645 6.26219 7.9645 6.26222 7.9645 6.26225C7.9645 6.26228 7.9645 6.26231 7.9645 6.26234C7.9645 6.26237 7.9645 6.2624 7.9645 6.26243C7.9645 6.26246 7.9645 6.26249 7.9645 6.26252C7.9645 6.26255 7.9645 6.26257 7.9645 6.2626C7.9645 6.26263 7.9645 6.26266 7.9645 6.26269C7.9645 6.26272 7.9645 6.26275 7.9645 6.26278C7.9645 6.26281 7.9645 6.26284 7.9645 6.26286C7.9645 6.26289 7.9645 6.26292 7.9645 6.26295C7.9645 6.26298 7.9645 6.26301 7.9645 6.26304C7.9645 6.26306 7.9645 6.26309 7.9645 6.26312C7.9645 6.26315 7.9645 6.26318 7.9645 6.26321C7.9645 6.26323 7.9645 6.26326 7.9645 6.26329C7.9645 6.26332 7.9645 6.26334 7.9645 6.26337C7.9645 6.2634 7.9645 6.26343 7.9645 6.26346C7.9645 6.26348 7.9645 6.26351 7.9645 6.26354C7.9645 6.26357 7.9645 6.26359 7.9645 6.26362C7.9645 6.26365 7.9645 6.26367 7.9645 6.2637C7.9645 6.26373 7.9645 6.26375 7.9645 6.26378C7.9645 6.26381 7.9645 6.26384 7.9645 6.26386C7.9645 6.26389 7.9645 6.26392 7.9645 6.26394C7.9645 6.26397 7.9645 6.264 7.9645 6.26402C7.9645 6.26405 7.9645 6.26407 7.9645 6.2641C7.9645 6.26413 7.9645 6.26415 7.9645 6.26418C7.9645 6.26421 7.9645 6.26423 7.9645 6.26426C7.9645 6.26428 7.9645 6.26431 7.9645 6.26433C7.9645 6.26436 7.9645 6.26439 7.9645 6.26441C7.9645 6.26444 7.9645 6.26446 7.9645 6.26449C7.9645 6.26451 7.9645 6.26454 7.9645 6.26456C7.9645 6.26459 7.9645 6.26461 7.9645 6.26464C7.9645 6.26466 7.9645 6.26469 7.9645 6.26471C7.9645 6.26474 7.9645 6.26476 7.9645 6.26479C7.9645 6.26481 7.9645 6.26484 7.9645 6.26486C7.9645 6.26489 7.9645 6.26491 7.9645 6.26494C7.9645 6.26496 7.9645 6.26499 7.9645 6.26501C7.9645 6.26503 7.9645 6.26506 7.9645 6.26508C7.9645 6.26511 7.9645 6.26513 7.9645 6.26516C7.9645 6.26518 7.9645 6.2652 7.9645 6.26523C7.9645 6.26525 7.9645 6.26528 7.9645 6.2653C7.9645 6.26532 7.9645 6.26535 7.9645 6.26537C7.9645 6.26539 7.9645 6.26542 7.9645 6.26544C7.9645 6.26546 7.9645 6.26549 7.9645 6.26551C7.9645 6.26553 7.9645 6.26556 7.9645 6.26558C7.9645 6.2656 7.9645 6.26563 7.9645 6.26565C7.9645 6.26567 7.9645 6.26569 7.9645 6.26572C7.9645 6.26574 7.9645 6.26576 7.9645 6.26579C7.9645 6.26581 7.9645 6.26583 7.9645 6.26585C7.9645 6.26588 7.9645 6.2659 7.9645 6.26592C7.9645 6.26594 7.9645 6.26597 7.9645 6.26599C7.9645 6.26601 7.9645 6.26603 7.9645 6.26605C7.9645 6.26608 7.9645 6.2661 7.9645 6.26612C7.9645 6.26614 7.9645 6.26616 7.9645 6.26619C7.9645 6.26621 7.9645 6.26623 7.9645 6.26625C7.9645 6.26627 7.9645 6.26629 7.9645 6.26632C7.9645 6.26634 7.9645 6.26636 7.9645 6.26638C7.9645 6.2664 7.9645 6.26642 7.9645 6.26644C7.9645 6.26646 7.9645 6.26649 7.9645 6.26651C7.9645 6.26653 7.9645 6.26655 7.9645 6.26657C7.9645 6.26659 7.9645 6.26661 7.9645 6.26663C7.9645 6.26665 7.9645 6.26667 7.9645 6.26669C7.9645 6.26671 7.9645 6.26673 7.9645 6.26676C7.9645 6.26678 7.9645 6.2668 7.9645 6.26682C7.9645 6.26684 7.9645 6.26686 7.9645 6.26688C7.9645 6.2669 7.9645 6.26692 7.9645 6.26694C7.9645 6.26696 7.9645 6.26698 7.9645 6.267C7.9645 6.26702 7.9645 6.26704 7.9645 6.26706C7.9645 6.26708 7.9645 6.2671 7.9645 6.26712C7.9645 6.26714 7.9645 6.26716 7.9645 6.26717C7.9645 6.26719 7.9645 6.26721 7.9645 6.26723C7.9645 6.26725 7.9645 6.26727 7.9645 6.26729C7.9645 6.26731 7.9645 6.26733 7.9645 6.26735C7.9645 6.26737 7.9645 6.26739 7.9645 6.26741C7.9645 6.26742 7.9645 6.26744 7.9645 6.26746C7.9645 6.26748 7.9645 6.2675 7.9645 6.26752C7.9645 6.26754 7.9645 6.26755 7.9645 6.26757C7.9645 6.26759 7.9645 6.26761 7.9645 6.26763C7.9645 6.26765 7.9645 6.26767 7.9645 6.26768C7.9645 6.2677 7.9645 6.26772 7.9645 6.26774C7.9645 6.26776 7.9645 6.26777 7.9645 6.26779C7.9645 6.26781 7.9645 6.26783 7.9645 6.26785C7.9645 6.26786 7.9645 6.26788 7.9645 6.2679C7.9645 6.26792 7.9645 6.26793 7.9645 6.26795C7.9645 6.26797 7.9645 6.26799 7.9645 6.26801C7.9645 6.26802 7.9645 6.26804 7.9645 6.26806C7.9645 6.26807 7.9645 6.26809 7.9645 6.26811C7.9645 6.26813 7.9645 6.26814 7.9645 6.26816C7.9645 6.26818 7.9645 6.26819 7.9645 6.26821C7.9645 6.26823 7.9645 6.26824 7.9645 6.26826C7.9645 6.26828 7.9645 6.26829 7.9645 6.26831C7.9645 6.26833 7.9645 6.26835 7.9645 6.26836C7.9645 6.26838 7.9645 6.26839 7.9645 6.26841C7.9645 6.26843 7.9645 6.26844 7.9645 6.26846C7.9645 6.26848 7.9645 6.26849 7.9645 6.26851C7.9645 6.26852 7.9645 6.26854 7.9645 6.26856C7.9645 6.26857 7.9645 6.26859 7.9645 6.2686C7.9645 6.26862 7.9645 6.26864 7.9645 6.26865C7.9645 6.26867 7.9645 6.26868 7.9645 6.2687C7.9645 6.26872 7.9645 6.26873 7.9645 6.26875C7.9645 6.26876 7.9645 6.26878 7.9645 6.26879C7.9645 6.26881 7.9645 6.26882 7.9645 6.26884C7.9645 6.26885 7.9645 6.26887 7.9645 6.26888C7.9645 6.2689 7.9645 6.26891 7.9645 6.26893C7.9645 6.26894 7.9645 6.26896 7.9645 6.26897C7.9645 6.26899 7.9645 6.269 7.9645 6.26902C7.9645 6.26903 7.9645 6.26905 7.9645 6.26906C7.9645 6.26908 7.9645 6.26909 7.9645 6.26911C7.9645 6.26912 7.9645 6.26914 7.9645 6.26915C7.9645 6.26916 7.9645 6.26918 7.9645 6.26919C7.9645 6.26921 7.9645 6.26922 7.9645 6.26924C7.9645 6.26925 7.9645 6.26926 7.9645 6.26928C7.9645 6.26929 7.9645 6.26931 7.9645 6.26932C7.9645 6.26933 7.9645 6.26935 7.9645 6.26936C7.9645 6.26938 7.9645 6.26939 7.9645 6.2694C7.9645 6.26942 7.9645 6.26943 7.9645 6.26944C7.9645 6.26946 7.9645 6.26947 7.9645 6.26949C7.9645 6.2695 7.9645 6.26951 7.9645 6.26953C7.9645 6.26954 7.9645 6.26955 7.9645 6.26957C7.9645 6.26958 7.9645 6.26959 7.9645 6.26961C7.9645 6.26962 7.9645 6.26963 7.9645 6.26964C7.9645 6.26966 7.9645 6.26967 7.9645 6.26968C7.9645 6.2697 7.9645 6.26971 7.9645 6.26972C7.9645 6.26973 7.9645 6.26975 7.9645 6.26976C7.9645 6.26977 7.9645 6.26979 7.9645 6.2698C7.9645 6.26981 7.9645 6.26982 7.9645 6.26984C7.9645 6.26985 7.9645 6.26986 7.9645 6.26987C7.9645 6.26989 7.9645 6.2699 7.9645 6.26991C7.9645 6.26992 7.9645 6.26993 7.9645 6.26995C7.9645 6.26996 7.9645 6.26997 7.9645 6.26998C7.9645 6.26999 7.9645 6.27001 7.9645 6.27002C7.9645 6.27003 7.9645 6.27004 7.9645 6.27005C7.9645 6.27007 7.9645 6.27008 7.9645 6.27009C7.9645 6.2701 7.9645 6.27011 7.9645 6.27012C7.9645 6.27014 7.9645 6.27015 7.9645 6.27016C7.9645 6.27017 7.9645 6.27018 7.9645 6.27019C7.9645 6.2702 7.9645 6.27022 7.9645 6.27023C7.9645 6.27024 7.9645 6.27025 7.9645 6.27026C7.9645 6.27027 7.9645 6.27028 7.9645 6.27029C7.9645 6.2703 7.9645 6.27032 7.9645 6.27033C7.9645 6.27034 7.9645 6.27035 7.9645 6.27036C7.9645 6.27037 7.9645 6.27038 7.9645 6.27039C7.9645 6.2704 7.9645 6.27041 7.9645 6.27042C7.9645 6.27043 7.9645 6.27045 7.9645 6.27046C7.9645 6.27047 7.9645 6.27048 7.9645 6.27049C7.9645 6.2705 7.9645 6.27051 7.9645 6.27052C7.9645 6.27053 7.9645 6.27054 7.9645 6.27055C7.9645 6.27056 7.9645 6.27057 7.9645 6.27058C7.9645 6.27059 7.9645 6.2706 7.9645 6.27061C7.9645 6.27062 7.9645 6.27063 7.9645 6.27064C7.9645 6.27065 7.9645 6.27066 7.9645 6.27067C7.9645 6.27068 7.9645 6.27069 7.9645 6.2707C7.9645 6.27071 7.9645 6.27072 7.9645 6.27073C7.9645 6.27074 7.9645 6.27075 7.9645 6.27076C7.9645 6.27077 7.9645 6.27078 7.9645 6.27079C7.9645 6.27079 7.9645 6.2708 7.9645 6.27081C7.9645 6.27082 7.9645 6.27083 7.9645 6.27084C7.9645 6.27085 7.9645 6.27086 7.9645 6.27087C7.9645 6.27088 7.9645 6.27089 7.9645 6.2709C7.9645 6.27091 7.9645 6.27091 7.9645 6.27092C7.9645 6.27093 7.9645 6.27094 7.9645 6.27095C7.9645 6.27096 7.9645 6.27097 7.9645 6.27098C7.9645 6.27099 7.9645 6.27099 7.9645 6.271C7.9645 6.27101 7.9645 6.27102 7.9645 6.27103C7.9645 6.27104 7.9645 6.27105 7.9645 6.27105C7.9645 6.27106 7.9645 6.27107 7.9645 6.27108C7.9645 6.27109 7.9645 6.2711 7.9645 6.2711C7.9645 6.27111 7.9645 6.27112 7.9645 6.27113C7.9645 6.27114 7.9645 6.27115 7.9645 6.27115C7.9645 6.27116 7.9645 6.27117 7.9645 6.27118C7.9645 6.27119 7.9645 6.27119 7.9645 6.2712C7.9645 6.27121 7.9645 6.27122 7.9645 6.27123C7.9645 6.27123 7.9645 6.27124 7.9645 6.27125C7.9645 6.27126 7.9645 6.27127 7.9645 6.27127C7.9645 6.27128 7.9645 6.27129 7.9645 6.2713C7.9645 6.2713 7.9645 6.27131 7.9645 6.27132C7.9645 6.27133 7.9645 6.27133 7.9645 6.27134C7.9645 6.27135 7.9645 6.27136 7.9645 6.27136C7.9645 6.27137 7.9645 6.27138 7.9645 6.27139C7.9645 6.27139 7.9645 6.2714 7.9645 6.27141C7.9645 6.27141 7.9645 6.27142 7.9645 6.27143C7.9645 6.27144 7.9645 6.27144 7.9645 6.27145C7.9645 6.27146 7.9645 6.27146 7.9645 6.27147C7.9645 6.27148 7.9645 6.27148 7.9645 6.27149C7.9645 6.2715 7.9645 6.2715 7.9645 6.27151C7.9645 6.27152 7.9645 6.27153 7.9645 6.27153C7.9645 6.27154 7.9645 6.27155 7.9645 6.27155C7.9645 6.27156 7.9645 6.27156 7.9645 6.27157C7.9645 6.27158 7.9645 6.27158 7.9645 6.27159C7.9645 6.2716 7.9645 6.2716 7.9645 6.27161C7.9645 6.27162 7.9645 6.27162 7.9645 6.27163C7.9645 6.27164 7.9645 6.27164 7.9645 6.27165C7.9645 6.27165 7.9645 6.27166 7.9645 6.27167C7.9645 6.27167 7.9645 6.27168 7.9645 6.27168C7.9645 6.27169 7.9645 6.2717 7.9645 6.2717C7.9645 6.27171 7.9645 6.27171 7.9645 6.27172C7.9645 6.27173 7.9645 6.27173 7.9645 6.27174C7.9645 6.27174 7.9645 6.27175 7.9645 6.27175C7.9645 6.27176 7.9645 6.27177 7.9645 6.27177C7.9645 6.27178 7.9645 6.27178 7.9645 6.27179C7.9645 6.27179 7.9645 6.2718 7.9645 6.27181C7.9645 6.27181 7.9645 6.27182 7.9645 6.27182C7.9645 6.27183 7.9645 6.27183 7.9645 6.27184C7.9645 6.27184 7.9645 6.27185 7.9645 6.27185C7.9645 6.27186 7.9645 6.27186 7.9645 6.27187C7.9645 6.27188 7.9645 6.27188 7.9645 6.27189C7.9645 6.27189 7.9645 6.2719 7.9645 6.2719C7.9645 6.27191 7.9645 6.27191 7.9645 6.27192C7.9645 6.27192 7.9645 6.27193 7.9645 6.27193C7.9645 6.27194 7.9645 6.27194 7.9645 6.27195C7.9645 6.27195 7.9645 6.27196 7.9645 6.27196C7.9645 6.27197 7.9645 6.27197 7.9645 6.27197C7.9645 6.27198 7.9645 6.27198 7.9645 6.27199C7.9645 6.27199 7.9645 6.272 7.9645 6.272C7.9645 6.27201 7.9645 6.27201 7.9645 6.27202C7.9645 6.27202 7.9645 6.27203 7.9645 6.27203C7.9645 6.27203 7.9645 6.27204 7.9645 6.27204C7.9645 6.27205 7.9645 6.27205 7.9645 6.27206C7.9645 6.27206 7.9645 6.27206 7.9645 6.27207C7.9645 6.27207 7.9645 6.27208 7.9645 6.27208C7.9645 6.27209 7.9645 6.27209 7.9645 6.27209C7.9645 6.2721 7.9645 6.2721 7.9645 6.27211C7.9645 6.27211 7.9645 6.27211 7.9645 6.27212C7.9645 6.27212 7.9645 6.27213 7.9645 6.27213C7.9645 6.27213 7.9645 6.27214 7.9645 6.27214C7.9645 6.27215 7.9645 6.27215 7.9645 6.27215C7.9645 6.27216 7.9645 6.27216 7.9645 6.27216C7.9645 6.27217 7.9645 6.27217 7.9645 6.27218C7.9645 6.27218 7.9645 6.27218 7.9645 6.27219C7.9645 6.27219 7.9645 6.27219 7.9645 6.2722C7.9645 6.2722 7.9645 6.27221 7.9645 6.27221C7.9645 6.27221 7.9645 6.27222 7.9645 6.27222C7.9645 6.27222 7.9645 6.27223 7.9645 6.27223C7.9645 6.27223 7.9645 6.27224 7.9645 6.27224C7.9645 6.27224 7.9645 6.27225 7.9645 6.27225C7.9645 6.27225 7.9645 6.27226 7.9645 6.27226C7.9645 6.27226 7.9645 6.27227 7.9645 6.27227C7.9645 6.27227 7.9645 6.27228 7.9645 6.27228C7.9645 6.27228 7.9645 6.27228 7.9645 6.27229C7.9645 6.27229 7.9645 6.27229 7.9645 6.2723C7.9645 6.2723 7.9645 6.2723 7.9645 6.27231C7.9645 6.27231 7.9645 6.27231 7.9645 6.27231C7.9645 6.27232 7.9645 6.27232 7.9645 6.27232C7.9645 6.27233 7.9645 6.27233 7.9645 6.27233C7.9645 6.27233 7.9645 6.27234 7.9645 6.27234C7.9645 6.27234 7.9645 6.27235 7.9645 6.27235C7.9645 6.27235 7.9645 6.27235 7.9645 6.27236C7.9645 6.27236 7.9645 6.27236 7.9645 6.27236C7.9645 6.27237 7.9645 6.27237 7.9645 6.27237C7.9645 6.27237 7.9645 6.27238 7.9645 6.27238C7.9645 6.27238 7.9645 6.27238 7.9645 6.27239C7.9645 6.27239 7.9645 6.27239 7.9645 6.27239C7.9645 6.2724 7.9645 6.2724 7.9645 6.2724C7.9645 6.2724 7.9645 6.27241 7.9645 6.27241C7.9645 6.27241 7.9645 6.27241 7.9645 6.27241C7.9645 6.27242 7.9645 6.27242 7.9645 6.27242C7.9645 6.27242 7.9645 6.27243 7.9645 6.27243C7.9645 6.27243 7.9645 6.27243 7.9645 6.27243C7.9645 6.27244 7.9645 6.27244 7.9645 6.27244C7.9645 6.27244 7.9645 6.27244 7.9645 6.27245C7.9645 6.27245 7.9645 6.27245 7.9645 6.27245C7.9645 6.27245 7.9645 6.27246 7.9645 6.27246C7.9645 6.27246 7.9645 6.27246 7.9645 6.27246C7.9645 6.27247 7.9645 6.27247 7.9645 6.27247C7.9645 6.27247 7.9645 6.27247 7.9645 6.27247C7.9645 6.27248 7.9645 6.27248 7.9645 6.27248C7.9645 6.27248 7.9645 6.27248 7.9645 6.27249C7.9645 6.27249 7.9645 6.27249 7.9645 6.27249C7.9645 6.27249 7.9645 6.27249 7.9645 6.2725C7.9645 6.2725 7.9645 6.2725 7.9645 6.2725C7.9645 6.2725 7.9645 6.2725 7.9645 6.2725C7.9645 6.27251 7.9645 6.27251 7.9645 6.27251C7.9645 6.27251 7.9645 6.27251 7.9645 6.27251C7.9645 6.27252 7.9645 6.27252 7.9645 6.27252C7.9645 6.27252 7.9645 6.27252 7.9645 6.27252C7.9645 6.27252 7.9645 6.27253 7.9645 6.27253C7.9645 6.27253 7.9645 6.27253 7.9645 6.27253C7.9645 6.27253 7.9645 6.27253 7.9645 6.27253C7.9645 6.27254 7.9645 6.27254 7.9645 6.27254C7.9645 6.27254 7.9645 6.27254 7.9645 6.27254C7.9645 6.27254 7.9645 6.27254 7.9645 6.27255C7.9645 6.27255 7.9645 6.27255 7.9645 6.27255C7.9645 6.27255 7.9645 6.27255 7.9645 6.27255C7.9645 6.27255 7.9645 6.27255 7.9645 6.27256C7.9645 6.27256 7.9645 6.27256 7.9645 6.27256C7.9645 6.27256 7.9645 6.27256 7.9645 6.27256C7.9645 6.27256 7.9645 6.27256 7.9645 6.27257C7.9645 6.27257 7.9645 6.27257 7.9645 6.27257C7.9645 6.27257 7.9645 6.27257 7.9645 6.27257C7.9645 6.27257 7.9645 6.27257 7.9645 6.27257C7.9645 6.27257 7.9645 6.27258 7.9645 6.27258C7.9645 6.27258 7.9645 6.27258 7.9645 6.27258C7.9645 6.27258 7.9645 6.27258 7.9645 6.27258C7.9645 6.27258 7.9645 6.27258 7.9645 6.27258C7.9645 6.27258 7.9645 6.27259 7.9645 6.27259C7.9645 6.27259 7.9645 6.27259 7.9645 6.27259C7.9645 6.27259 7.9645 6.27259 7.9645 6.27259C7.9645 6.27259 7.9645 6.27259 7.9645 6.27259C7.9645 6.27259 7.9645 6.27259 7.9645 6.27259C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.2726 7.9645 6.2726 7.9645 6.2726C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27261 7.9645 6.27261 7.9645 6.27261C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262L7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262L7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262L7.9645 6.27262L7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27262L7.9645 6.27262C7.9645 6.27262 7.9645 6.27262 7.9645 6.27263C7.9645 6.27263 7.9645 6.27263 7.9645 6.27263C7.9645 6.27263 7.9645 6.27263 7.9645 6.27263L7.9645 6.27263L7.9645 6.27263C7.9645 6.27263 7.9645 6.27263 6.9645 6.27263ZM5.9645 6.23929C5.9645 5.90318 6.12516 5.67327 6.16686 5.61454C6.20053 5.56711 6.23242 5.52987 6.25589 5.50416C6.26813 5.49075 6.2794 5.47904 6.28924 5.46914C6.29419 5.46416 6.29887 5.45954 6.30324 5.45531C6.30542 5.45319 6.30754 5.45115 6.30958 5.44921C6.3106 5.44823 6.3116 5.44728 6.31259 5.44635C6.31308 5.44588 6.31356 5.44542 6.31405 5.44497C6.31429 5.44474 6.31453 5.44451 6.31477 5.44429C6.31489 5.44418 6.31507 5.44401 6.31513 5.44395C6.3153 5.44378 6.31548 5.44362 7 6.17261C7.68452 6.90161 7.6847 6.90144 7.68487 6.90128C7.68493 6.90122 7.68511 6.90105 7.68523 6.90094C7.68547 6.90072 7.6857 6.9005 7.68594 6.90027C7.68641 6.89982 7.68689 6.89938 7.68736 6.89893C7.68831 6.89803 7.68927 6.89712 7.69022 6.89622C7.69212 6.8944 7.69404 6.89255 7.69597 6.89068C7.69981 6.88695 7.70373 6.88309 7.70771 6.87908C7.71561 6.87113 7.72411 6.86229 7.73302 6.85253C7.74983 6.83411 7.77284 6.80728 7.79764 6.77236C7.82115 6.73925 7.85743 6.68329 7.89005 6.60672C7.9217 6.53241 7.9645 6.40466 7.9645 6.23929L5.9645 6.23929ZM6 6.17261L6 6.13928L8 6.13928L8 6.17261L6 6.17261ZM7 6.13928C6 6.13928 6 6.13927 6 6.13927L6 6.13927L6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13927 6 6.13927 6 6.13927L6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13927 6 6.13927 6 6.13927L6 6.13927L6 6.13927C6 6.13927 6 6.13927 6 6.13927L6 6.13927C6 6.13927 6 6.13927 6 6.13927L6 6.13927C6 6.13927 6 6.13927 6 6.13927C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13926 6 6.13926 6 6.13926C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13925 6 6.13925C6 6.13925 6 6.13924 6 6.13924C6 6.13924 6 6.13924 6 6.13924C6 6.13924 6 6.13924 6 6.13924C6 6.13924 6 6.13924 6 6.13924C6 6.13924 6 6.13924 6 6.13924C6 6.13924 6 6.13923 6 6.13923C6 6.13923 6 6.13923 6 6.13923C6 6.13923 6 6.13923 6 6.13923C6 6.13923 6 6.13923 6 6.13923C6 6.13923 6 6.13922 6 6.13922C6 6.13922 6 6.13922 6 6.13922C6 6.13922 6 6.13922 6 6.13922C6 6.13922 6 6.13922 6 6.13922C6 6.13921 6 6.13921 6 6.13921C6 6.13921 6 6.13921 6 6.13921C6 6.13921 6 6.13921 6 6.13921C6 6.13921 6 6.1392 6 6.1392C6 6.1392 6 6.1392 6 6.1392C6 6.1392 6 6.1392 6 6.1392C6 6.1392 6 6.13919 6 6.13919C6 6.13919 6 6.13919 6 6.13919C6 6.13919 6 6.13919 6 6.13919C6 6.13918 6 6.13918 6 6.13918C6 6.13918 6 6.13918 6 6.13918C6 6.13918 6 6.13918 6 6.13917C6 6.13917 6 6.13917 6 6.13917C6 6.13917 6 6.13917 6 6.13917C6 6.13916 6 6.13916 6 6.13916C6 6.13916 6 6.13916 6 6.13916C6 6.13916 6 6.13915 6 6.13915C6 6.13915 6 6.13915 6 6.13915C6 6.13915 6 6.13914 6 6.13914C6 6.13914 6 6.13914 6 6.13914C6 6.13914 6 6.13913 6 6.13913C6 6.13913 6 6.13913 6 6.13913C6 6.13913 6 6.13912 6 6.13912C6 6.13912 6 6.13912 6 6.13912C6 6.13912 6 6.13911 6 6.13911C6 6.13911 6 6.13911 6 6.13911C6 6.1391 6 6.1391 6 6.1391C6 6.1391 6 6.1391 6 6.13909C6 6.13909 6 6.13909 6 6.13909C6 6.13909 6 6.13908 6 6.13908C6 6.13908 6 6.13908 6 6.13908C6 6.13907 6 6.13907 6 6.13907C6 6.13907 6 6.13906 6 6.13906C6 6.13906 6 6.13906 6 6.13906C6 6.13905 6 6.13905 6 6.13905C6 6.13905 6 6.13904 6 6.13904C6 6.13904 6 6.13904 6 6.13903C6 6.13903 6 6.13903 6 6.13903C6 6.13902 6 6.13902 6 6.13902C6 6.13902 6 6.13901 6 6.13901C6 6.13901 6 6.13901 6 6.139C6 6.139 6 6.139 6 6.139C6 6.13899 6 6.13899 6 6.13899C6 6.13898 6 6.13898 6 6.13898C6 6.13898 6 6.13897 6 6.13897C6 6.13897 6 6.13896 6 6.13896C6 6.13896 6 6.13896 6 6.13895C6 6.13895 6 6.13895 6 6.13894C6 6.13894 6 6.13894 6 6.13894C6 6.13893 6 6.13893 6 6.13893C6 6.13892 6 6.13892 6 6.13892C6 6.13891 6 6.13891 6 6.13891C6 6.1389 6 6.1389 6 6.1389C6 6.13889 6 6.13889 6 6.13889C6 6.13888 6 6.13888 6 6.13888C6 6.13887 6 6.13887 6 6.13887C6 6.13886 6 6.13886 6 6.13886C6 6.13885 6 6.13885 6 6.13885C6 6.13884 6 6.13884 6 6.13884C6 6.13883 6 6.13883 6 6.13882C6 6.13882 6 6.13882 6 6.13881C6 6.13881 6 6.13881 6 6.1388C6 6.1388 6 6.13879 6 6.13879C6 6.13879 6 6.13878 6 6.13878C6 6.13877 6 6.13877 6 6.13877C6 6.13876 6 6.13876 6 6.13875C6 6.13875 6 6.13875 6 6.13874C6 6.13874 6 6.13873 6 6.13873C6 6.13873 6 6.13872 6 6.13872C6 6.13871 6 6.13871 6 6.1387C6 6.1387 6 6.13869 6 6.13869C6 6.13869 6 6.13868 6 6.13868C6 6.13867 6 6.13867 6 6.13866C6 6.13866 6 6.13865 6 6.13865C6 6.13865 6 6.13864 6 6.13864C6 6.13863 6 6.13863 6 6.13862C6 6.13862 6 6.13861 6 6.13861C6 6.1386 6 6.1386 6 6.13859C6 6.13859 6 6.13858 6 6.13858C6 6.13857 6 6.13857 6 6.13856C6 6.13856 6 6.13855 6 6.13855C6 6.13854 6 6.13854 6 6.13853C6 6.13853 6 6.13852 6 6.13852C6 6.13851 6 6.13851 6 6.1385C6 6.1385 6 6.13849 6 6.13849C6 6.13848 6 6.13848 6 6.13847C6 6.13846 6 6.13846 6 6.13845C6 6.13845 6 6.13844 6 6.13844C6 6.13843 6 6.13843 6 6.13842C6 6.13841 6 6.13841 6 6.1384C6 6.1384 6 6.13839 6 6.13839C6 6.13838 6 6.13837 6 6.13837C6 6.13836 6 6.13836 6 6.13835C6 6.13834 6 6.13834 6 6.13833C6 6.13833 6 6.13832 6 6.13831C6 6.13831 6 6.1383 6 6.1383C6 6.13829 6 6.13828 6 6.13828C6 6.13827 6 6.13826 6 6.13826C6 6.13825 6 6.13824 6 6.13824C6 6.13823 6 6.13823 6 6.13822C6 6.13821 6 6.13821 6 6.1382C6 6.13819 6 6.13819 6 6.13818C6 6.13817 6 6.13817 6 6.13816C6 6.13815 6 6.13815 6 6.13814C6 6.13813 6 6.13813 6 6.13812C6 6.13811 6 6.1381 6 6.1381C6 6.13809 6 6.13808 6 6.13808C6 6.13807 6 6.13806 6 6.13805C6 6.13805 6 6.13804 6 6.13803C6 6.13803 6 6.13802 6 6.13801C6 6.138 6 6.138 6 6.13799C6 6.13798 6 6.13797 6 6.13797C6 6.13796 6 6.13795 6 6.13794C6 6.13794 6 6.13793 6 6.13792C6 6.13791 6 6.13791 6 6.1379C6 6.13789 6 6.13788 6 6.13787C6 6.13787 6 6.13786 6 6.13785C6 6.13784 6 6.13783 6 6.13783C6 6.13782 6 6.13781 6 6.1378C6 6.13779 6 6.13779 6 6.13778C6 6.13777 6 6.13776 6 6.13775C6 6.13774 6 6.13774 6 6.13773C6 6.13772 6 6.13771 6 6.1377C6 6.13769 6 6.13769 6 6.13768C6 6.13767 6 6.13766 6 6.13765C6 6.13764 6 6.13763 6 6.13762C6 6.13762 6 6.13761 6 6.1376C6 6.13759 6 6.13758 6 6.13757C6 6.13756 6 6.13755 6 6.13754C6 6.13754 6 6.13753 6 6.13752C6 6.13751 6 6.1375 6 6.13749C6 6.13748 6 6.13747 6 6.13746C6 6.13745 6 6.13744 6 6.13743C6 6.13742 6 6.13741 6 6.1374C6 6.1374 6 6.13739 6 6.13738C6 6.13737 6 6.13736 6 6.13735C6 6.13734 6 6.13733 6 6.13732C6 6.13731 6 6.1373 6 6.13729C6 6.13728 6 6.13727 6 6.13726C6 6.13725 6 6.13724 6 6.13723C6 6.13722 6 6.13721 6 6.1372C6 6.13719 6 6.13718 6 6.13717C6 6.13716 6 6.13715 6 6.13714C6 6.13712 6 6.13711 6 6.1371C6 6.13709 6 6.13708 6 6.13707C6 6.13706 6 6.13705 6 6.13704C6 6.13703 6 6.13702 6 6.13701C6 6.137 6 6.13699 6 6.13697C6 6.13696 6 6.13695 6 6.13694C6 6.13693 6 6.13692 6 6.13691C6 6.1369 6 6.13689 6 6.13687C6 6.13686 6 6.13685 6 6.13684C6 6.13683 6 6.13682 6 6.13681C6 6.13679 6 6.13678 6 6.13677C6 6.13676 6 6.13675 6 6.13674C6 6.13673 6 6.13671 6 6.1367C6 6.13669 6 6.13668 6 6.13667C6 6.13665 6 6.13664 6 6.13663C6 6.13662 6 6.13661 6 6.13659C6 6.13658 6 6.13657 6 6.13656C6 6.13655 6 6.13653 6 6.13652C6 6.13651 6 6.1365 6 6.13648C6 6.13647 6 6.13646 6 6.13645C6 6.13643 6 6.13642 6 6.13641C6 6.1364 6 6.13638 6 6.13637C6 6.13636 6 6.13634 6 6.13633C6 6.13632 6 6.13631 6 6.13629C6 6.13628 6 6.13627 6 6.13625C6 6.13624 6 6.13623 6 6.13621C6 6.1362 6 6.13619 6 6.13617C6 6.13616 6 6.13615 6 6.13613C6 6.13612 6 6.13611 6 6.13609C6 6.13608 6 6.13607 6 6.13605C6 6.13604 6 6.13602 6 6.13601C6 6.136 6 6.13598 6 6.13597C6 6.13595 6 6.13594 6 6.13593C6 6.13591 6 6.1359 6 6.13588C6 6.13587 6 6.13586 6 6.13584C6 6.13583 6 6.13581 6 6.1358C6 6.13578 6 6.13577 6 6.13575C6 6.13574 6 6.13573 6 6.13571C6 6.1357 6 6.13568 6 6.13567C6 6.13565 6 6.13564 6 6.13562C6 6.13561 6 6.13559 6 6.13558C6 6.13556 6 6.13555 6 6.13553C6 6.13552 6 6.1355 6 6.13549C6 6.13547 6 6.13546 6 6.13544C6 6.13542 6 6.13541 6 6.13539C6 6.13538 6 6.13536 6 6.13535C6 6.13533 6 6.13532 6 6.1353C6 6.13528 6 6.13527 6 6.13525C6 6.13524 6 6.13522 6 6.1352C6 6.13519 6 6.13517 6 6.13516C6 6.13514 6 6.13512 6 6.13511C6 6.13509 6 6.13508 6 6.13506C6 6.13504 6 6.13503 6 6.13501C6 6.13499 6 6.13498 6 6.13496C6 6.13494 6 6.13493 6 6.13491C6 6.13489 6 6.13488 6 6.13486C6 6.13484 6 6.13482 6 6.13481C6 6.13479 6 6.13477 6 6.13476C6 6.13474 6 6.13472 6 6.1347C6 6.13469 6 6.13467 6 6.13465C6 6.13464 6 6.13462 6 6.1346C6 6.13458 6 6.13457 6 6.13455C6 6.13453 6 6.13451 6 6.13449C6 6.13448 6 6.13446 6 6.13444C6 6.13442 6 6.1344 6 6.13439C6 6.13437 6 6.13435 6 6.13433C6 6.13431 6 6.13429 6 6.13428C6 6.13426 6 6.13424 6 6.13422C6 6.1342 6 6.13418 6 6.13417C6 6.13415 6 6.13413 6 6.13411C6 6.13409 6 6.13407 6 6.13405C6 6.13403 6 6.13401 6 6.134C6 6.13398 6 6.13396 6 6.13394C6 6.13392 6 6.1339 6 6.13388C6 6.13386 6 6.13384 6 6.13382C6 6.1338 6 6.13378 6 6.13376C6 6.13374 6 6.13372 6 6.1337C6 6.13368 6 6.13367 6 6.13365C6 6.13363 6 6.13361 6 6.13359C6 6.13357 6 6.13355 6 6.13353C6 6.13351 6 6.13348 6 6.13346C6 6.13344 6 6.13342 6 6.1334C6 6.13338 6 6.13336 6 6.13334C6 6.13332 6 6.1333 6 6.13328C6 6.13326 6 6.13324 6 6.13322C6 6.1332 6 6.13318 6 6.13315C6 6.13313 6 6.13311 6 6.13309C6 6.13307 6 6.13305 6 6.13303C6 6.13301 6 6.13298 6 6.13296C6 6.13294 6 6.13292 6 6.1329C6 6.13288 6 6.13286 6 6.13283C6 6.13281 6 6.13279 6 6.13277C6 6.13275 6 6.13272 6 6.1327C6 6.13268 6 6.13266 6 6.13264C6 6.13261 6 6.13259 6 6.13257C6 6.13255 6 6.13252 6 6.1325C6 6.13248 6 6.13246 6 6.13243C6 6.13241 6 6.13239 6 6.13237C6 6.13234 6 6.13232 6 6.1323C6 6.13227 6 6.13225 6 6.13223C6 6.1322 6 6.13218 6 6.13216C6 6.13213 6 6.13211 6 6.13209C6 6.13206 6 6.13204 6 6.13202C6 6.13199 6 6.13197 6 6.13195C6 6.13192 6 6.1319 6 6.13188C6 6.13185 6 6.13183 6 6.1318C6 6.13178 6 6.13176 6 6.13173C6 6.13171 6 6.13168 6 6.13166C6 6.13163 6 6.13161 6 6.13159C6 6.13156 6 6.13154 6 6.13151C6 6.13149 6 6.13146 6 6.13144C6 6.13141 6 6.13139 6 6.13136C6 6.13134 6 6.13131 6 6.13129C6 6.13126 6 6.13124 6 6.13121C6 6.13119 6 6.13116 6 6.13114C6 6.13111 6 6.13108 6 6.13106C6 6.13103 6 6.13101 6 6.13098C6 6.13096 6 6.13093 6 6.1309C6 6.13088 6 6.13085 6 6.13083C6 6.1308 6 6.13077 6 6.13075C6 6.13072 6 6.1307 6 6.13067C6 6.13064 6 6.13062 6 6.13059C6 6.13056 6 6.13054 6 6.13051C6 6.13048 6 6.13046 6 6.13043C6 6.1304 6 6.13038 6 6.13035C6 6.13032 6 6.13029 6 6.13027C6 6.13024 6 6.13021 6 6.13019C6 6.13016 6 6.13013 6 6.1301C6 6.13008 6 6.13005 6 6.13002C6 6.12999 6 6.12996 6 6.12994C6 6.12991 6 6.12988 6 6.12985C6 6.12982 6 6.1298 6 6.12977C6 6.12974 6 6.12971 6 6.12968C6 6.12966 6 6.12963 6 6.1296C6 6.12957 6 6.12954 6 6.12951C6 6.12948 6 6.12945 6 6.12943C6 6.1294 6 6.12937 6 6.12934C6 6.12931 6 6.12928 6 6.12925C6 6.12922 6 6.12919 6 6.12916C6 6.12913 6 6.1291 6 6.12908C6 6.12905 6 6.12902 6 6.12899C6 6.12896 6 6.12893 6 6.1289C6 6.12887 6 6.12884 6 6.12881C6 6.12878 6 6.12875 6 6.12872C6 6.12869 6 6.12866 6 6.12863C6 6.1286 6 6.12856 6 6.12853C6 6.1285 6 6.12847 6 6.12844C6 6.12841 6 6.12838 6 6.12835C6 6.12832 6 6.12829 6 6.12826C6 6.12823 6 6.12819 6 6.12816C6 6.12813 6 6.1281 6 6.12807C6 6.12804 6 6.12801 6 6.12797C6 6.12794 6 6.12791 6 6.12788C6 6.12785 6 6.12781 6 6.12778C6 6.12775 6 6.12772 6 6.12769C6 6.12765 6 6.12762 6 6.12759C6 6.12756 6 6.12752 6 6.12749C6 6.12746 6 6.12743 6 6.12739C6 6.12736 6 6.12733 6 6.1273C6 6.12726 6 6.12723 6 6.1272C6 6.12716 6 6.12713 6 6.1271C6 6.12706 6 6.12703 6 6.127C6 6.12696 6 6.12693 6 6.1269C6 6.12686 6 6.12683 6 6.1268C6 6.12676 6 6.12673 6 6.12669C6 6.12666 6 6.12663 6 6.12659C6 6.12656 6 6.12652 6 6.12649C6 6.12645 6 6.12642 6 6.12638C6 6.12635 6 6.12632 6 6.12628C6 6.12625 6 6.12621 6 6.12618C6 6.12614 6 6.12611 6 6.12607C6 6.12604 6 6.126 6 6.12597C6 6.12593 6 6.1259 6 6.12586C6 6.12582 6 6.12579 6 6.12575C6 6.12572 6 6.12568 6 6.12565C6 6.12561 6 6.12557 6 6.12554C6 6.1255 6 6.12547 6 6.12543C6 6.12539 6 6.12536 6 6.12532C6 6.12528 6 6.12525 6 6.12521C6 6.12517 6 6.12514 6 6.1251C6 6.12506 6 6.12503 6 6.12499C6 6.12495 6 6.12492 6 6.12488C6 6.12484 6 6.1248 6 6.12477C6 6.12473 6 6.12469 6 6.12465C6 6.12462 6 6.12458 6 6.12454C6 6.1245 6 6.12447 6 6.12443C6 6.12439 6 6.12435 6 6.12431C6 6.12427 6 6.12424 6 6.1242C6 6.12416 6 6.12412 6 6.12408C6 6.12404 6 6.12401 6 6.12397C6 6.12393 6 6.12389 6 6.12385C6 6.12381 6 6.12377 6 6.12373C6 6.12369 6 6.12365 6 6.12362C6 6.12358 6 6.12354 6 6.1235C6 6.12346 6 6.12342 6 6.12338C6 6.12334 6 6.1233 6 6.12326C6 6.12322 6 6.12318 6 6.12314C6 6.1231 6 6.12306 6 6.12302C6 6.12298 6 6.12294 6 6.1229C6 6.12286 6 6.12282 6 6.12277C6 6.12273 6 6.12269 6 6.12265C6 6.12261 6 6.12257 6 6.12253C6 6.12249 6 6.12245 6 6.12241C6 6.12236 6 6.12232 6 6.12228C6 6.12224 6 6.1222 6 6.12216C6 6.12211 6 6.12207 6 6.12203C6 6.12199 6 6.12195 6 6.1219C6 6.12186 6 6.12182 6 6.12178C6 6.12173 6 6.12169 6 6.12165C6 6.12161 6 6.12156 6 6.12152C6 6.12148 6 6.12144 6 6.12139C6 6.12135 6 6.12131 6 6.12126C6 6.12122 6 6.12118 6 6.12113C6 6.12109 6 6.12105 6 6.121C6 6.12096 6 6.12092 6 6.12087C6 6.12083 6 6.12078 6 6.12074C6 6.1207 6 6.12065 6 6.12061C6 6.12056 6 6.12052 6 6.12048C6 6.12043 6 6.12039 6 6.12034C6 6.1203 6 6.12025 6 6.12021C6 6.12016 6 6.12012 6 6.12007C6 6.12003 6 6.11998 6 6.11994C6 6.11989 6 6.11985 6 6.1198C6 6.11976 6 6.11971 6 6.11966C6 6.11962 6 6.11957 6 6.11953C6 6.11948 6 6.11943 6 6.11939C6 6.11934 6 6.1193 6 6.11925C6 6.1192 6 6.11916 6 6.11911C6 6.11906 6 6.11902 6 6.11897C6 6.11892 6 6.11888 6 6.11883C6 6.11878 6 6.11874 6 6.11869C6 6.11864 6 6.11859 6 6.11855C6 6.1185 6 6.11845 6 6.1184C6 6.11836 6 6.11831 6 6.11826C6 6.11821 6 6.11816 6 6.11812C6 6.11807 6 6.11802 6 6.11797C6 6.11792 6 6.11787 6 6.11783C6 6.11778 6 6.11773 6 6.11768C6 6.11763 6 6.11758 6 6.11753C6 6.11749 6 6.11744 6 6.11739C6 6.11734 6 6.11729 6 6.11724C6 6.11719 6 6.11714 6 6.11709C6 6.11704 6 6.11699 6 6.11694C6 6.11689 6 6.11684 6 6.11679C6 6.11674 6 6.11669 6 6.11664C6 6.11659 6 6.11654 6 6.11649C6 6.11644 6 6.11639 6 6.11634C6 6.11629 6 6.11624 6 6.11618C6 6.11613 6 6.11608 6 6.11603C6 6.11598 6 6.11593 6 6.11588C6 6.11583 6 6.11577 6 6.11572C6 6.11567 6 6.11562 6 6.11557C6 6.11552 6 6.11546 6 6.11541C6 6.11536 6 6.11531 6 6.11526C6 6.1152 6 6.11515 6 6.1151C6 6.11505 6 6.11499 6 6.11494C6 6.11489 6 6.11483 6 6.11478C6 6.11473 6 6.11468 6 6.11462C6 6.11457 6 6.11452 6 6.11446C6 6.11441 6 6.11435 6 6.1143C6 6.11425 6 6.11419 6 6.11414C6 6.11409 6 6.11403 6 6.11398C6 6.11392 6 6.11387 6 6.11381C6 6.11376 6 6.11371 6 6.11365C6 6.1136 6 6.11354 6 6.11349C6 6.11343 6 6.11338 6 6.11332C6 6.11327 6 6.11321 6 6.11316C6 6.1131 6 6.11305 6 6.11299C6 6.11293 6 6.11288 6 6.11282C6 6.11277 6 6.11271 6 6.11265C6 6.1126 6 6.11254 6 6.11249C6 6.11243 6 6.11237 6 6.11232C6 6.11226 6 6.1122 6 6.11215C6 6.11209 6 6.11203 6 6.11198C6 6.11192 6 6.11186 6 6.11181C6 6.11175 6 6.11169 6 6.11163C6 6.11158 6 6.11152 6 6.11146C6 6.1114 6 6.11135 6 6.11129C6 6.11123 6 6.11117 6 6.11111C6 6.11105 6 6.111 6 6.11094C6 6.11088 6 6.11082 6 6.11076C6 6.1107 6 6.11065 6 6.11059C6 6.11053 6 6.11047 6 6.11041C6 6.11035 6 6.11029 6 6.11023C6 6.11017 6 6.11011 6 6.11005C6 6.10999 6 6.10993 6 6.10987C6 6.10981 6 6.10975 6 6.10969C6 6.10963 6 6.10957 6 6.10951C6 6.10945 6 6.10939 6 6.10933C6 6.10927 6 6.10921 6 6.10915C6 6.10909 6 6.10903 6 6.10897C6 6.1089 6 6.10884 6 6.10878C6 6.10872 6 6.10866 6 6.1086C6 6.10854 6 6.10847 6 6.10841C6 6.10835 6 6.10829 6 6.10823C6 6.10816 6 6.1081 6 6.10804C6 6.10798 6 6.10792 6 6.10785C6 6.10779 6 6.10773 6 6.10766C6 6.1076 6 6.10754 6 6.10748C6 6.10741 6 6.10735 6 6.10729C6 6.10722 6 6.10716 6 6.1071C6 6.10703 6 6.10697 6 6.1069C6 6.10684 6 6.10678 6 6.10671C6 6.10665 6 6.10658 6 6.10652C6 6.10646 6 6.10639 6 6.10633C6 6.10626 6 6.1062 6 6.10613C6 6.10607 6 6.106 6 6.10594L8 6.10594C8 6.106 8 6.10607 8 6.10613C8 6.1062 8 6.10626 8 6.10633C8 6.10639 8 6.10645 8 6.10652C8 6.10658 8 6.10665 8 6.10671C8 6.10678 8 6.10684 8 6.1069C8 6.10697 8 6.10703 8 6.1071C8 6.10716 8 6.10722 8 6.10729C8 6.10735 8 6.10741 8 6.10748C8 6.10754 8 6.1076 8 6.10766C8 6.10773 8 6.10779 8 6.10785C8 6.10792 8 6.10798 8 6.10804C8 6.1081 8 6.10816 8 6.10823C8 6.10829 8 6.10835 8 6.10841C8 6.10847 8 6.10854 8 6.1086C8 6.10866 8 6.10872 8 6.10878C8 6.10884 8 6.1089 8 6.10897C8 6.10903 8 6.10909 8 6.10915C8 6.10921 8 6.10927 8 6.10933C8 6.10939 8 6.10945 8 6.10951C8 6.10957 8 6.10963 8 6.10969C8 6.10975 8 6.10981 8 6.10987C8 6.10993 8 6.10999 8 6.11005C8 6.11011 8 6.11017 8 6.11023C8 6.11029 8 6.11035 8 6.11041C8 6.11047 8 6.11053 8 6.11059C8 6.11064 8 6.1107 8 6.11076C8 6.11082 8 6.11088 8 6.11094C8 6.111 8 6.11105 8 6.11111C8 6.11117 8 6.11123 8 6.11129C8 6.11134 8 6.1114 8 6.11146C8 6.11152 8 6.11158 8 6.11163C8 6.11169 8 6.11175 8 6.11181C8 6.11186 8 6.11192 8 6.11198C8 6.11203 8 6.11209 8 6.11215C8 6.1122 8 6.11226 8 6.11232C8 6.11237 8 6.11243 8 6.11249C8 6.11254 8 6.1126 8 6.11265C8 6.11271 8 6.11277 8 6.11282C8 6.11288 8 6.11293 8 6.11299C8 6.11305 8 6.1131 8 6.11316C8 6.11321 8 6.11327 8 6.11332C8 6.11338 8 6.11343 8 6.11349C8 6.11354 8 6.1136 8 6.11365C8 6.11371 8 6.11376 8 6.11381C8 6.11387 8 6.11392 8 6.11398C8 6.11403 8 6.11409 8 6.11414C8 6.11419 8 6.11425 8 6.1143C8 6.11435 8 6.11441 8 6.11446C8 6.11451 8 6.11457 8 6.11462C8 6.11468 8 6.11473 8 6.11478C8 6.11483 8 6.11489 8 6.11494C8 6.11499 8 6.11505 8 6.1151C8 6.11515 8 6.1152 8 6.11526C8 6.11531 8 6.11536 8 6.11541C8 6.11546 8 6.11552 8 6.11557C8 6.11562 8 6.11567 8 6.11572C8 6.11577 8 6.11583 8 6.11588C8 6.11593 8 6.11598 8 6.11603C8 6.11608 8 6.11613 8 6.11618C8 6.11624 8 6.11629 8 6.11634C8 6.11639 8 6.11644 8 6.11649C8 6.11654 8 6.11659 8 6.11664C8 6.11669 8 6.11674 8 6.11679C8 6.11684 8 6.11689 8 6.11694C8 6.11699 8 6.11704 8 6.11709C8 6.11714 8 6.11719 8 6.11724C8 6.11729 8 6.11734 8 6.11739C8 6.11744 8 6.11749 8 6.11753C8 6.11758 8 6.11763 8 6.11768C8 6.11773 8 6.11778 8 6.11783C8 6.11787 8 6.11792 8 6.11797C8 6.11802 8 6.11807 8 6.11812C8 6.11816 8 6.11821 8 6.11826C8 6.11831 8 6.11836 8 6.1184C8 6.11845 8 6.1185 8 6.11855C8 6.11859 8 6.11864 8 6.11869C8 6.11874 8 6.11878 8 6.11883C8 6.11888 8 6.11892 8 6.11897C8 6.11902 8 6.11906 8 6.11911C8 6.11916 8 6.1192 8 6.11925C8 6.1193 8 6.11934 8 6.11939C8 6.11943 8 6.11948 8 6.11953C8 6.11957 8 6.11962 8 6.11966C8 6.11971 8 6.11975 8 6.1198C8 6.11985 8 6.11989 8 6.11994C8 6.11998 8 6.12003 8 6.12007C8 6.12012 8 6.12016 8 6.12021C8 6.12025 8 6.1203 8 6.12034C8 6.12039 8 6.12043 8 6.12048C8 6.12052 8 6.12056 8 6.12061C8 6.12065 8 6.1207 8 6.12074C8 6.12078 8 6.12083 8 6.12087C8 6.12092 8 6.12096 8 6.121C8 6.12105 8 6.12109 8 6.12113C8 6.12118 8 6.12122 8 6.12126C8 6.12131 8 6.12135 8 6.12139C8 6.12144 8 6.12148 8 6.12152C8 6.12156 8 6.12161 8 6.12165C8 6.12169 8 6.12173 8 6.12178C8 6.12182 8 6.12186 8 6.1219C8 6.12195 8 6.12199 8 6.12203C8 6.12207 8 6.12211 8 6.12216C8 6.1222 8 6.12224 8 6.12228C8 6.12232 8 6.12236 8 6.12241C8 6.12245 8 6.12249 8 6.12253C8 6.12257 8 6.12261 8 6.12265C8 6.12269 8 6.12273 8 6.12277C8 6.12282 8 6.12286 8 6.1229C8 6.12294 8 6.12298 8 6.12302C8 6.12306 8 6.1231 8 6.12314C8 6.12318 8 6.12322 8 6.12326C8 6.1233 8 6.12334 8 6.12338C8 6.12342 8 6.12346 8 6.1235C8 6.12354 8 6.12358 8 6.12362C8 6.12365 8 6.12369 8 6.12373C8 6.12377 8 6.12381 8 6.12385C8 6.12389 8 6.12393 8 6.12397C8 6.12401 8 6.12404 8 6.12408C8 6.12412 8 6.12416 8 6.1242C8 6.12424 8 6.12427 8 6.12431C8 6.12435 8 6.12439 8 6.12443C8 6.12447 8 6.1245 8 6.12454C8 6.12458 8 6.12462 8 6.12465C8 6.12469 8 6.12473 8 6.12477C8 6.1248 8 6.12484 8 6.12488C8 6.12492 8 6.12495 8 6.12499C8 6.12503 8 6.12506 8 6.1251C8 6.12514 8 6.12517 8 6.12521C8 6.12525 8 6.12528 8 6.12532C8 6.12536 8 6.12539 8 6.12543C8 6.12547 8 6.1255 8 6.12554C8 6.12557 8 6.12561 8 6.12565C8 6.12568 8 6.12572 8 6.12575C8 6.12579 8 6.12582 8 6.12586C8 6.1259 8 6.12593 8 6.12597C8 6.126 8 6.12604 8 6.12607C8 6.12611 8 6.12614 8 6.12618C8 6.12621 8 6.12625 8 6.12628C8 6.12632 8 6.12635 8 6.12638C8 6.12642 8 6.12645 8 6.12649C8 6.12652 8 6.12656 8 6.12659C8 6.12663 8 6.12666 8 6.12669C8 6.12673 8 6.12676 8 6.12679C8 6.12683 8 6.12686 8 6.1269C8 6.12693 8 6.12696 8 6.127C8 6.12703 8 6.12706 8 6.1271C8 6.12713 8 6.12716 8 6.1272C8 6.12723 8 6.12726 8 6.1273C8 6.12733 8 6.12736 8 6.12739C8 6.12743 8 6.12746 8 6.12749C8 6.12752 8 6.12756 8 6.12759C8 6.12762 8 6.12765 8 6.12769C8 6.12772 8 6.12775 8 6.12778C8 6.12781 8 6.12785 8 6.12788C8 6.12791 8 6.12794 8 6.12797C8 6.12801 8 6.12804 8 6.12807C8 6.1281 8 6.12813 8 6.12816C8 6.12819 8 6.12822 8 6.12826C8 6.12829 8 6.12832 8 6.12835C8 6.12838 8 6.12841 8 6.12844C8 6.12847 8 6.1285 8 6.12853C8 6.12856 8 6.1286 8 6.12863C8 6.12866 8 6.12869 8 6.12872C8 6.12875 8 6.12878 8 6.12881C8 6.12884 8 6.12887 8 6.1289C8 6.12893 8 6.12896 8 6.12899C8 6.12902 8 6.12905 8 6.12908C8 6.1291 8 6.12913 8 6.12916C8 6.12919 8 6.12922 8 6.12925C8 6.12928 8 6.12931 8 6.12934C8 6.12937 8 6.1294 8 6.12943C8 6.12945 8 6.12948 8 6.12951C8 6.12954 8 6.12957 8 6.1296C8 6.12963 8 6.12966 8 6.12968C8 6.12971 8 6.12974 8 6.12977C8 6.1298 8 6.12982 8 6.12985C8 6.12988 8 6.12991 8 6.12994C8 6.12996 8 6.12999 8 6.13002C8 6.13005 8 6.13008 8 6.1301C8 6.13013 8 6.13016 8 6.13019C8 6.13021 8 6.13024 8 6.13027C8 6.13029 8 6.13032 8 6.13035C8 6.13038 8 6.1304 8 6.13043C8 6.13046 8 6.13048 8 6.13051C8 6.13054 8 6.13056 8 6.13059C8 6.13062 8 6.13064 8 6.13067C8 6.1307 8 6.13072 8 6.13075C8 6.13077 8 6.1308 8 6.13083C8 6.13085 8 6.13088 8 6.1309C8 6.13093 8 6.13096 8 6.13098C8 6.13101 8 6.13103 8 6.13106C8 6.13108 8 6.13111 8 6.13114C8 6.13116 8 6.13119 8 6.13121C8 6.13124 8 6.13126 8 6.13129C8 6.13131 8 6.13134 8 6.13136C8 6.13139 8 6.13141 8 6.13144C8 6.13146 8 6.13149 8 6.13151C8 6.13154 8 6.13156 8 6.13159C8 6.13161 8 6.13163 8 6.13166C8 6.13168 8 6.13171 8 6.13173C8 6.13176 8 6.13178 8 6.1318C8 6.13183 8 6.13185 8 6.13188C8 6.1319 8 6.13192 8 6.13195C8 6.13197 8 6.13199 8 6.13202C8 6.13204 8 6.13206 8 6.13209C8 6.13211 8 6.13213 8 6.13216C8 6.13218 8 6.1322 8 6.13223C8 6.13225 8 6.13227 8 6.1323C8 6.13232 8 6.13234 8 6.13237C8 6.13239 8 6.13241 8 6.13243C8 6.13246 8 6.13248 8 6.1325C8 6.13252 8 6.13255 8 6.13257C8 6.13259 8 6.13261 8 6.13264C8 6.13266 8 6.13268 8 6.1327C8 6.13272 8 6.13275 8 6.13277C8 6.13279 8 6.13281 8 6.13283C8 6.13286 8 6.13288 8 6.1329C8 6.13292 8 6.13294 8 6.13296C8 6.13298 8 6.13301 8 6.13303C8 6.13305 8 6.13307 8 6.13309C8 6.13311 8 6.13313 8 6.13315C8 6.13318 8 6.1332 8 6.13322C8 6.13324 8 6.13326 8 6.13328C8 6.1333 8 6.13332 8 6.13334C8 6.13336 8 6.13338 8 6.1334C8 6.13342 8 6.13344 8 6.13346C8 6.13348 8 6.1335 8 6.13353C8 6.13355 8 6.13357 8 6.13359C8 6.13361 8 6.13363 8 6.13365C8 6.13367 8 6.13368 8 6.1337C8 6.13372 8 6.13374 8 6.13376C8 6.13378 8 6.1338 8 6.13382C8 6.13384 8 6.13386 8 6.13388C8 6.1339 8 6.13392 8 6.13394C8 6.13396 8 6.13398 8 6.134C8 6.13401 8 6.13403 8 6.13405C8 6.13407 8 6.13409 8 6.13411C8 6.13413 8 6.13415 8 6.13417C8 6.13418 8 6.1342 8 6.13422C8 6.13424 8 6.13426 8 6.13428C8 6.13429 8 6.13431 8 6.13433C8 6.13435 8 6.13437 8 6.13439C8 6.1344 8 6.13442 8 6.13444C8 6.13446 8 6.13448 8 6.13449C8 6.13451 8 6.13453 8 6.13455C8 6.13457 8 6.13458 8 6.1346C8 6.13462 8 6.13464 8 6.13465C8 6.13467 8 6.13469 8 6.1347C8 6.13472 8 6.13474 8 6.13476C8 6.13477 8 6.13479 8 6.13481C8 6.13482 8 6.13484 8 6.13486C8 6.13488 8 6.13489 8 6.13491C8 6.13493 8 6.13494 8 6.13496C8 6.13498 8 6.13499 8 6.13501C8 6.13503 8 6.13504 8 6.13506C8 6.13508 8 6.13509 8 6.13511C8 6.13512 8 6.13514 8 6.13516C8 6.13517 8 6.13519 8 6.1352C8 6.13522 8 6.13524 8 6.13525C8 6.13527 8 6.13528 8 6.1353C8 6.13532 8 6.13533 8 6.13535C8 6.13536 8 6.13538 8 6.13539C8 6.13541 8 6.13542 8 6.13544C8 6.13546 8 6.13547 8 6.13549C8 6.1355 8 6.13552 8 6.13553C8 6.13555 8 6.13556 8 6.13558C8 6.13559 8 6.13561 8 6.13562C8 6.13564 8 6.13565 8 6.13567C8 6.13568 8 6.1357 8 6.13571C8 6.13573 8 6.13574 8 6.13575C8 6.13577 8 6.13578 8 6.1358C8 6.13581 8 6.13583 8 6.13584C8 6.13586 8 6.13587 8 6.13588C8 6.1359 8 6.13591 8 6.13593C8 6.13594 8 6.13595 8 6.13597C8 6.13598 8 6.136 8 6.13601C8 6.13602 8 6.13604 8 6.13605C8 6.13607 8 6.13608 8 6.13609C8 6.13611 8 6.13612 8 6.13613C8 6.13615 8 6.13616 8 6.13617C8 6.13619 8 6.1362 8 6.13621C8 6.13623 8 6.13624 8 6.13625C8 6.13627 8 6.13628 8 6.13629C8 6.1363 8 6.13632 8 6.13633C8 6.13634 8 6.13636 8 6.13637C8 6.13638 8 6.1364 8 6.13641C8 6.13642 8 6.13643 8 6.13645C8 6.13646 8 6.13647 8 6.13648C8 6.1365 8 6.13651 8 6.13652C8 6.13653 8 6.13655 8 6.13656C8 6.13657 8 6.13658 8 6.13659C8 6.13661 8 6.13662 8 6.13663C8 6.13664 8 6.13665 8 6.13667C8 6.13668 8 6.13669 8 6.1367C8 6.13671 8 6.13673 8 6.13674C8 6.13675 8 6.13676 8 6.13677C8 6.13678 8 6.13679 8 6.13681C8 6.13682 8 6.13683 8 6.13684C8 6.13685 8 6.13686 8 6.13687C8 6.13689 8 6.1369 8 6.13691C8 6.13692 8 6.13693 8 6.13694C8 6.13695 8 6.13696 8 6.13697C8 6.13699 8 6.137 8 6.13701C8 6.13702 8 6.13703 8 6.13704C8 6.13705 8 6.13706 8 6.13707C8 6.13708 8 6.13709 8 6.1371C8 6.13711 8 6.13712 8 6.13714C8 6.13715 8 6.13716 8 6.13717C8 6.13718 8 6.13719 8 6.1372C8 6.13721 8 6.13722 8 6.13723C8 6.13724 8 6.13725 8 6.13726C8 6.13727 8 6.13728 8 6.13729C8 6.1373 8 6.13731 8 6.13732C8 6.13733 8 6.13734 8 6.13735C8 6.13736 8 6.13737 8 6.13738C8 6.13739 8 6.1374 8 6.1374C8 6.13741 8 6.13742 8 6.13743C8 6.13744 8 6.13745 8 6.13746C8 6.13747 8 6.13748 8 6.13749C8 6.1375 8 6.13751 8 6.13752C8 6.13753 8 6.13754 8 6.13754C8 6.13755 8 6.13756 8 6.13757C8 6.13758 8 6.13759 8 6.1376C8 6.13761 8 6.13762 8 6.13762C8 6.13763 8 6.13764 8 6.13765C8 6.13766 8 6.13767 8 6.13768C8 6.13769 8 6.13769 8 6.1377C8 6.13771 8 6.13772 8 6.13773C8 6.13774 8 6.13774 8 6.13775C8 6.13776 8 6.13777 8 6.13778C8 6.13779 8 6.13779 8 6.1378C8 6.13781 8 6.13782 8 6.13783C8 6.13783 8 6.13784 8 6.13785C8 6.13786 8 6.13787 8 6.13787C8 6.13788 8 6.13789 8 6.1379C8 6.13791 8 6.13791 8 6.13792C8 6.13793 8 6.13794 8 6.13794C8 6.13795 8 6.13796 8 6.13797C8 6.13797 8 6.13798 8 6.13799C8 6.138 8 6.138 8 6.13801C8 6.13802 8 6.13803 8 6.13803C8 6.13804 8 6.13805 8 6.13805C8 6.13806 8 6.13807 8 6.13808C8 6.13808 8 6.13809 8 6.1381C8 6.1381 8 6.13811 8 6.13812C8 6.13813 8 6.13813 8 6.13814C8 6.13815 8 6.13815 8 6.13816C8 6.13817 8 6.13817 8 6.13818C8 6.13819 8 6.13819 8 6.1382C8 6.13821 8 6.13821 8 6.13822C8 6.13823 8 6.13823 8 6.13824C8 6.13824 8 6.13825 8 6.13826C8 6.13826 8 6.13827 8 6.13828C8 6.13828 8 6.13829 8 6.1383C8 6.1383 8 6.13831 8 6.13831C8 6.13832 8 6.13833 8 6.13833C8 6.13834 8 6.13834 8 6.13835C8 6.13836 8 6.13836 8 6.13837C8 6.13837 8 6.13838 8 6.13839C8 6.13839 8 6.1384 8 6.1384C8 6.13841 8 6.13841 8 6.13842C8 6.13843 8 6.13843 8 6.13844C8 6.13844 8 6.13845 8 6.13845C8 6.13846 8 6.13846 8 6.13847C8 6.13848 8 6.13848 8 6.13849C8 6.13849 8 6.1385 8 6.1385C8 6.13851 8 6.13851 8 6.13852C8 6.13852 8 6.13853 8 6.13853C8 6.13854 8 6.13854 8 6.13855C8 6.13855 8 6.13856 8 6.13856C8 6.13857 8 6.13857 8 6.13858C8 6.13858 8 6.13859 8 6.13859C8 6.1386 8 6.1386 8 6.13861C8 6.13861 8 6.13862 8 6.13862C8 6.13863 8 6.13863 8 6.13864C8 6.13864 8 6.13865 8 6.13865C8 6.13865 8 6.13866 8 6.13866C8 6.13867 8 6.13867 8 6.13868C8 6.13868 8 6.13869 8 6.13869C8 6.13869 8 6.1387 8 6.1387C8 6.13871 8 6.13871 8 6.13872C8 6.13872 8 6.13872 8 6.13873C8 6.13873 8 6.13874 8 6.13874C8 6.13875 8 6.13875 8 6.13875C8 6.13876 8 6.13876 8 6.13877C8 6.13877 8 6.13877 8 6.13878C8 6.13878 8 6.13879 8 6.13879C8 6.13879 8 6.1388 8 6.1388C8 6.13881 8 6.13881 8 6.13881C8 6.13882 8 6.13882 8 6.13882C8 6.13883 8 6.13883 8 6.13884C8 6.13884 8 6.13884 8 6.13885C8 6.13885 8 6.13885 8 6.13886C8 6.13886 8 6.13886 8 6.13887C8 6.13887 8 6.13887 8 6.13888C8 6.13888 8 6.13888 8 6.13889C8 6.13889 8 6.13889 8 6.1389C8 6.1389 8 6.1389 8 6.13891C8 6.13891 8 6.13891 8 6.13892C8 6.13892 8 6.13892 8 6.13893C8 6.13893 8 6.13893 8 6.13894C8 6.13894 8 6.13894 8 6.13894C8 6.13895 8 6.13895 8 6.13895C8 6.13896 8 6.13896 8 6.13896C8 6.13896 8 6.13897 8 6.13897C8 6.13897 8 6.13898 8 6.13898C8 6.13898 8 6.13898 8 6.13899C8 6.13899 8 6.13899 8 6.139C8 6.139 8 6.139 8 6.139C8 6.13901 8 6.13901 8 6.13901C8 6.13901 8 6.13902 8 6.13902C8 6.13902 8 6.13902 8 6.13903C8 6.13903 8 6.13903 8 6.13903C8 6.13904 8 6.13904 8 6.13904C8 6.13904 8 6.13905 8 6.13905C8 6.13905 8 6.13905 8 6.13906C8 6.13906 8 6.13906 8 6.13906C8 6.13906 8 6.13907 8 6.13907C8 6.13907 8 6.13907 8 6.13907C8 6.13908 8 6.13908 8 6.13908C8 6.13908 8 6.13909 8 6.13909C8 6.13909 8 6.13909 8 6.13909C8 6.1391 8 6.1391 8 6.1391C8 6.1391 8 6.1391 8 6.13911C8 6.13911 8 6.13911 8 6.13911C8 6.13911 8 6.13911 8 6.13912C8 6.13912 8 6.13912 8 6.13912C8 6.13912 8 6.13913 8 6.13913C8 6.13913 8 6.13913 8 6.13913C8 6.13913 8 6.13914 8 6.13914C8 6.13914 8 6.13914 8 6.13914C8 6.13914 8 6.13915 8 6.13915C8 6.13915 8 6.13915 8 6.13915C8 6.13915 8 6.13916 8 6.13916C8 6.13916 8 6.13916 8 6.13916C8 6.13916 8 6.13916 8 6.13917C8 6.13917 8 6.13917 8 6.13917C8 6.13917 8 6.13917 8 6.13917C8 6.13918 8 6.13918 8 6.13918C8 6.13918 8 6.13918 8 6.13918C8 6.13918 8 6.13918 8 6.13919C8 6.13919 8 6.13919 8 6.13919C8 6.13919 8 6.13919 8 6.13919C8 6.13919 8 6.1392 8 6.1392C8 6.1392 8 6.1392 8 6.1392C8 6.1392 8 6.1392 8 6.1392C8 6.1392 8 6.13921 8 6.13921C8 6.13921 8 6.13921 8 6.13921C8 6.13921 8 6.13921 8 6.13921C8 6.13921 8 6.13921 8 6.13922C8 6.13922 8 6.13922 8 6.13922C8 6.13922 8 6.13922 8 6.13922C8 6.13922 8 6.13922 8 6.13922C8 6.13922 8 6.13923 8 6.13923C8 6.13923 8 6.13923 8 6.13923C8 6.13923 8 6.13923 8 6.13923C8 6.13923 8 6.13923 8 6.13923C8 6.13923 8 6.13924 8 6.13924C8 6.13924 8 6.13924 8 6.13924C8 6.13924 8 6.13924 8 6.13924C8 6.13924 8 6.13924 8 6.13924C8 6.13924 8 6.13924 8 6.13924C8 6.13924 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13925C8 6.13925 8 6.13925 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13926C8 6.13926 8 6.13926 8 6.13927C8 6.13927 8 6.13927 8 6.13927L8 6.13927C8 6.13927 8 6.13927 8 6.13927L8 6.13927C8 6.13927 8 6.13927 8 6.13927L8 6.13927L8 6.13927C8 6.13927 8 6.13927 8 6.13927C8 6.13927 8 6.13927 8 6.13927C8 6.13927 8 6.13927 8 6.13927C8 6.13927 8 6.13927 8 6.13927L8 6.13927C8 6.13927 8 6.13927 8 6.13927C8 6.13927 8 6.13927 8 6.13927C8 6.13927 8 6.13927 8 6.13927L8 6.13927L8 6.13927C8 6.13927 8 6.13928 7 6.13928ZM6 6.10594C6 6.10587 6 6.10581 6 6.10574C6 6.10568 6 6.10561 6 6.10554C6 6.10548 6 6.10541 6 6.10535C6 6.10528 6 6.10522 6 6.10515C6 6.10508 6 6.10502 6 6.10495C6 6.10488 6 6.10482 6 6.10475C6 6.10468 6 6.10462 6 6.10455C6 6.10448 6 6.10442 6 6.10435C6 6.10428 6 6.10422 6 6.10415C6 6.10408 6 6.10401 6 6.10395C6 6.10388 6 6.10381 6 6.10374C6 6.10368 6 6.10361 6 6.10354C6 6.10347 6 6.1034 6 6.10333C6 6.10327 6 6.1032 6 6.10313C6 6.10306 6 6.10299 6 6.10292C6 6.10285 6 6.10278 6 6.10272C6 6.10265 6 6.10258 6 6.10251C6 6.10244 6 6.10237 6 6.1023C6 6.10223 6 6.10216 6 6.10209C6 6.10202 6 6.10195 6 6.10188C6 6.10181 6 6.10174 6 6.10167C6 6.1016 6 6.10153 6 6.10146C6 6.10139 6 6.10132 6 6.10125C6 6.10118 6 6.10111 6 6.10104C6 6.10097 6 6.10089 6 6.10082C6 6.10075 6 6.10068 6 6.10061C6 6.10054 6 6.10047 6 6.10039C6 6.10032 6 6.10025 6 6.10018C6 6.10011 6 6.10004 6 6.09996C6 6.09989 6 6.09982 6 6.09975C6 6.09967 6 6.0996 6 6.09953C6 6.09946 6 6.09938 6 6.09931C6 6.09924 6 6.09917 6 6.09909C6 6.09902 6 6.09895 6 6.09887C6 6.0988 6 6.09873 6 6.09865C6 6.09858 6 6.09851 6 6.09843C6 6.09836 6 6.09829 6 6.09821C6 6.09814 6 6.09806 6 6.09799C6 6.09792 6 6.09784 6 6.09777C6 6.09769 6 6.09762 6 6.09754C6 6.09747 6 6.0974 6 6.09732C6 6.09725 6 6.09717 6 6.0971C6 6.09702 6 6.09695 6 6.09687C6 6.0968 6 6.09672 6 6.09665C6 6.09657 6 6.09649 6 6.09642C6 6.09634 6 6.09627 6 6.09619C6 6.09612 6 6.09604 6 6.09596C6 6.09589 6 6.09581 6 6.09574C6 6.09566 6 6.09558 6 6.09551C6 6.09543 6 6.09535 6 6.09528C6 6.0952 6 6.09512 6 6.09505C6 6.09497 6 6.09489 6 6.09482C6 6.09474 6 6.09466 6 6.09459C6 6.09451 6 6.09443 6 6.09435C6 6.09428 6 6.0942 6 6.09412C6 6.09404 6 6.09397 6 6.09389C6 6.09381 6 6.09373 6 6.09365C6 6.09358 6 6.0935 6 6.09342C6 6.09334 6 6.09326 6 6.09319C6 6.09311 6 6.09303 6 6.09295C6 6.09287 6 6.09279 6 6.09271C6 6.09264 6 6.09256 6 6.09248C6 6.0924 6 6.09232 6 6.09224C6 6.09216 6 6.09208 6 6.092C6 6.09192 6 6.09184 6 6.09176C6 6.09169 6 6.09161 6 6.09153C6 6.09145 6 6.09137 6 6.09129C6 6.09121 6 6.09113 6 6.09105C6 6.09097 6 6.09089 6 6.09081C6 6.09073 6 6.09064 6 6.09056C6 6.09048 6 6.0904 6 6.09032C6 6.09024 6 6.09016 6 6.09008C6 6.09 6 6.08992 6 6.08984C6 6.08976 6 6.08968 6 6.08959C6 6.08951 6 6.08943 6 6.08935C6 6.08927 6 6.08919 6 6.08911C6 6.08902 6 6.08894 6 6.08886C6 6.08878 6 6.0887 6 6.08862C6 6.08853 6 6.08845 6 6.08837C6 6.08829 6 6.0882 6 6.08812C6 6.08804 6 6.08796 6 6.08788C6 6.08779 6 6.08771 6 6.08763C6 6.08755 6 6.08746 6 6.08738C6 6.0873 6 6.08721 6 6.08713C6 6.08705 6 6.08696 6 6.08688C6 6.0868 6 6.08672 6 6.08663C6 6.08655 6 6.08647 6 6.08638C6 6.0863 6 6.08621 6 6.08613C6 6.08605 6 6.08596 6 6.08588C6 6.0858 6 6.08571 6 6.08563C6 6.08554 6 6.08546 6 6.08538C6 6.08529 6 6.08521 6 6.08512C6 6.08504 6 6.08495 6 6.08487C6 6.08479 6 6.0847 6 6.08462C6 6.08453 6 6.08445 6 6.08436C6 6.08428 6 6.08419 6 6.08411C6 6.08402 6 6.08394 6 6.08385C6 6.08377 6 6.08368 6 6.0836C6 6.08351 6 6.08343 6 6.08334C6 6.08326 6 6.08317 6 6.08308C6 6.083 6 6.08291 6 6.08283C6 6.08274 6 6.08266 6 6.08257C6 6.08248 6 6.0824 6 6.08231C6 6.08223 6 6.08214 6 6.08205C6 6.08197 6 6.08188 6 6.08179C6 6.08171 6 6.08162 6 6.08154C6 6.08145 6 6.08136 6 6.08128C6 6.08119 6 6.0811 6 6.08102C6 6.08093 6 6.08084 6 6.08076C6 6.08067 6 6.08058 6 6.08049C6 6.08041 6 6.08032 6 6.08023C6 6.08015 6 6.08006 6 6.07997C6 6.07988 6 6.0798 6 6.07971C6 6.07962 6 6.07953 6 6.07945C6 6.07936 6 6.07927 6 6.07918C6 6.0791 6 6.07901 6 6.07892C6 6.07883 6 6.07874 6 6.07865C6 6.07857 6 6.07848 6 6.07839C6 6.0783 6 6.07821 6 6.07813C6 6.07804 6 6.07795 6 6.07786C6 6.07777 6 6.07768 6 6.07759C6 6.07751 6 6.07742 6 6.07733C6 6.07724 6 6.07715 6 6.07706C6 6.07697 6 6.07688 6 6.0768C6 6.07671 6 6.07662 6 6.07653C6 6.07644 6 6.07635 6 6.07626C6 6.07617 6 6.07608 6 6.07599C6 6.0759 6 6.07581 6 6.07572C6 6.07563 6 6.07555 6 6.07546C6 6.07537 6 6.07528 6 6.07519C6 6.0751 6 6.07501 6 6.07492C6 6.07483 6 6.07474 6 6.07465C6 6.07456 6 6.07447 6 6.07438C6 6.07429 6 6.0742 6 6.07411C6 6.07402 6 6.07393 6 6.07384C6 6.07374 6 6.07365 6 6.07356C6 6.07347 6 6.07338 6 6.07329C6 6.0732 6 6.07311 6 6.07302C6 6.07293 6 6.07284 6 6.07275C6 6.07266 6 6.07257 6 6.07247C6 6.07238 6 6.07229 6 6.0722C6 6.07211 6 6.07202 6 6.07193C6 6.07184 6 6.07175 6 6.07165C6 6.07156 6 6.07147 6 6.07138C6 6.07129 6 6.0712 6 6.07111C6 6.07101 6 6.07092 6 6.07083C6 6.07074 6 6.07065 6 6.07056C6 6.07046 6 6.07037 6 6.07028C6 6.07019 6 6.0701 6 6.07C6 6.06991 6 6.06982 6 6.06973C6 6.06964 6 6.06954 6 6.06945C6 6.06936 6 6.06927 6 6.06917C6 6.06908 6 6.06899 6 6.0689C6 6.06881 6 6.06871 6 6.06862C6 6.06853 6 6.06844 6 6.06834C6 6.06825 6 6.06816 6 6.06806C6 6.06797 6 6.06788 6 6.06779C6 6.06769 6 6.0676 6 6.06751C6 6.06742 6 6.06732 6 6.06723C6 6.06714 6 6.06704 6 6.06695C6 6.06686 6 6.06676 6 6.06667C6 6.06658 6 6.06648 6 6.06639C6 6.0663 6 6.0662 6 6.06611C6 6.06602 6 6.06592 6 6.06583C6 6.06574 6 6.06564 6 6.06555C6 6.06546 6 6.06536 6 6.06527C6 6.06518 6 6.06508 6 6.06499C6 6.06489 6 6.0648 6 6.06471C6 6.06461 6 6.06452 6 6.06443C6 6.06433 6 6.06424 6 6.06414C6 6.06405 6 6.06396 6 6.06386C6 6.06377 6 6.06367 6 6.06358C6 6.06349 6 6.06339 6 6.0633C6 6.0632 6 6.06311 6 6.06301C6 6.06292 6 6.06282 6 6.06273C6 6.06264 6 6.06254 6 6.06245C6 6.06235 6 6.06226 6 6.06216C6 6.06207 6 6.06197 6 6.06188C6 6.06179 6 6.06169 6 6.0616C6 6.0615 6 6.06141 6 6.06131C6 6.06122 6 6.06112 6 6.06103C6 6.06093 6 6.06084 6 6.06074C6 6.06065 6 6.06055 6 6.06046C6 6.06036 6 6.06027 6 6.06017C6 6.06008 6 6.05998 6 6.05989C6 6.05979 6 6.0597 6 6.0596C6 6.05951 6 6.05941 6 6.05932C6 6.05922 6 6.05912 6 6.05903C6 6.05893 6 6.05884 6 6.05874C6 6.05865 6 6.05855 6 6.05846C6 6.05836 6 6.05827 6 6.05817C6 6.05807 6 6.05798 6 6.05788C6 6.05779 6 6.05769 6 6.0576C6 6.0575 6 6.0574 6 6.05731C6 6.05721 6 6.05712 6 6.05702C6 6.05693 6 6.05683 6 6.05673C6 6.05664 6 6.05654 6 6.05645C6 6.05635 6 6.05625 6 6.05616C6 6.05606 6 6.05597 6 6.05587C6 6.05577 6 6.05568 6 6.05558C6 6.05549 6 6.05539 6 6.05529C6 6.0552 6 6.0551 6 6.05501C6 6.05491 6 6.05481 6 6.05472C6 6.05462 6 6.05452 6 6.05443C6 6.05433 6 6.05423 6 6.05414C6 6.05404 6 6.05395 6 6.05385C6 6.05375 6 6.05366 6 6.05356C6 6.05346 6 6.05337 6 6.05327C6 6.05317 6 6.05308 6 6.05298C6 6.05288 6 6.05279 6 6.05269C6 6.05259 6 6.0525 6 6.0524C6 6.0523 6 6.05221 6 6.05211C6 6.05201 6 6.05192 6 6.05182C6 6.05172 6 6.05163 6 6.05153C6 6.05143 6 6.05134 6 6.05124C6 6.05114 6 6.05105 6 6.05095C6 6.05085 6 6.05076 6 6.05066C6 6.05056 6 6.05046 6 6.05037C6 6.05027 6 6.05017 6 6.05008C6 6.04998 6 6.04988 6 6.04979C6 6.04969 6 6.04959 6 6.04949C6 6.0494 6 6.0493 6 6.0492C6 6.04911 6 6.04901 6 6.04891C6 6.04881 6 6.04872 6 6.04862C6 6.04852 6 6.04843 6 6.04833C6 6.04823 6 6.04814 6 6.04804C6 6.04794 6 6.04784 6 6.04775C6 6.04765 6 6.04755 6 6.04745C6 6.04736 6 6.04726 6 6.04716C6 6.04706 6 6.04697 6 6.04687C6 6.04677 6 6.04668 6 6.04658C6 6.04648 6 6.04638 6 6.04629C6 6.04619 6 6.04609 6 6.04599C6 6.0459 6 6.0458 6 6.0457C6 6.0456 6 6.04551 6 6.04541C6 6.04531 6 6.04521 6 6.04512C6 6.04502 6 6.04492 6 6.04482C6 6.04473 6 6.04463 6 6.04453C6 6.04443 6 6.04434 6 6.04424C6 6.04414 6 6.04404 6 6.04395C6 6.04385 6 6.04375 6 6.04365C6 6.04356 6 6.04346 6 6.04336C6 6.04326 6 6.04317 6 6.04307C6 6.04297 6 6.04287 6 6.04278C6 6.04268 6 6.04258 6 6.04248C6 6.04239 6 6.04229 6 6.04219C6 6.04209 6 6.042 6 6.0419C6 6.0418 6 6.0417 6 6.0416C6 6.04151 6 6.04141 6 6.04131C6 6.04121 6 6.04112 6 6.04102C6 6.04092 6 6.04082 6 6.04073C6 6.04063 6 6.04053 6 6.04043C6 6.04034 6 6.04024 6 6.04014C6 6.04004 6 6.03994 6 6.03985C6 6.03975 6 6.03965 6 6.03955C6 6.03946 6 6.03936 6 6.03926C6 6.03916 6 6.03907 6 6.03897C6 6.03887 6 6.03877 6 6.03868C6 6.03858 6 6.03848 6 6.03838C6 6.03828 6 6.03819 6 6.03809C6 6.03799 6 6.03789 6 6.0378C6 6.0377 6 6.0376 6 6.0375C6 6.03741 6 6.03731 6 6.03721C6 6.03711 6 6.03701 6 6.03692C6 6.03682 6 6.03672 6 6.03662C6 6.03653 6 6.03643 6 6.03633C6 6.03623 6 6.03614 6 6.03604C6 6.03594 6 6.03584 6 6.03575C6 6.03565 6 6.03555 6 6.03545C6 6.03536 6 6.03526 6 6.03516C6 6.03506 6 6.03496 6 6.03487C6 6.03477 6 6.03467 6 6.03457C6 6.03448 6 6.03438 6 6.03428C6 6.03418 6 6.03409 6 6.03399C6 6.03389 6 6.03379 6 6.0337C6 6.0336 6 6.0335 6 6.0334C6 6.03331 6 6.03321 6 6.03311C6 6.03301 6 6.03292 6 6.03282C6 6.03272 6 6.03262 6 6.03253C6 6.03243 6 6.03233 6 6.03224C6 6.03214 6 6.03204 6 6.03194C6 6.03185 6 6.03175 6 6.03165C6 6.03155 6 6.03146 6 6.03136C6 6.03126 6 6.03116 6 6.03107C6 6.03097 6 6.03087 6 6.03078C6 6.03068 6 6.03058 6 6.03048C6 6.03039 6 6.03029 6 6.03019C6 6.0301 6 6.03 6 6.0299C6 6.0298 6 6.02971 6 6.02961C6 6.02951 6 6.02941 6 6.02932C6 6.02922 6 6.02912 6 6.02903C6 6.02893 6 6.02883 6 6.02874C6 6.02864 6 6.02854 6 6.02844C6 6.02835 6 6.02825 6 6.02815C6 6.02806 6 6.02796 6 6.02786C6 6.02777 6 6.02767 6 6.02757C6 6.02748 6 6.02738 6 6.02728C6 6.02718 6 6.02709 6 6.02699C6 6.02689 6 6.0268 6 6.0267C6 6.0266 6 6.02651 6 6.02641C6 6.02631 6 6.02622 6 6.02612C6 6.02602 6 6.02593 6 6.02583C6 6.02573 6 6.02564 6 6.02554C6 6.02544 6 6.02535 6 6.02525C6 6.02515 6 6.02506 6 6.02496C6 6.02487 6 6.02477 6 6.02467C6 6.02458 6 6.02448 6 6.02438C6 6.02429 6 6.02419 6 6.02409C6 6.024 6 6.0239 6 6.02381C6 6.02371 6 6.02361 6 6.02352C6 6.02342 6 6.02332 6 6.02323C6 6.02313 6 6.02304 6 6.02294C6 6.02284 6 6.02275 6 6.02265C6 6.02256 6 6.02246 6 6.02236C6 6.02227 6 6.02217 6 6.02208C6 6.02198 6 6.02188 6 6.02179C6 6.02169 6 6.0216 6 6.0215C6 6.0214 6 6.02131 6 6.02121C6 6.02112 6 6.02102 6 6.02093C6 6.02083 6 6.02073 6 6.02064C6 6.02054 6 6.02045 6 6.02035C6 6.02026 6 6.02016 6 6.02007C6 6.01997 6 6.01987 6 6.01978C6 6.01968 6 6.01959 6 6.01949C6 6.0194 6 6.0193 6 6.01921C6 6.01911 6 6.01902 6 6.01892C6 6.01883 6 6.01873 6 6.01864C6 6.01854 6 6.01844 6 6.01835C6 6.01825 6 6.01816 6 6.01806C6 6.01797 6 6.01787 6 6.01778C6 6.01768 6 6.01759 6 6.01749C6 6.0174 6 6.01731 6 6.01721C6 6.01712 6 6.01702 6 6.01693C6 6.01683 6 6.01674 6 6.01664C6 6.01655 6 6.01645 6 6.01636C6 6.01626 6 6.01617 6 6.01607C6 6.01598 6 6.01589 6 6.01579C6 6.0157 6 6.0156 6 6.01551C6 6.01541 6 6.01532 6 6.01523C6 6.01513 6 6.01504 6 6.01494C6 6.01485 6 6.01475 6 6.01466C6 6.01457 6 6.01447 6 6.01438C6 6.01428 6 6.01419 6 6.0141C6 6.014 6 6.01391 6 6.01381C6 6.01372 6 6.01363 6 6.01353C6 6.01344 6 6.01335 6 6.01325C6 6.01316 6 6.01306 6 6.01297C6 6.01288 6 6.01278 6 6.01269C6 6.0126 6 6.0125 6 6.01241C6 6.01232 6 6.01222 6 6.01213C6 6.01204 6 6.01194 6 6.01185C6 6.01176 6 6.01166 6 6.01157C6 6.01148 6 6.01139 6 6.01129C6 6.0112 6 6.01111 6 6.01101C6 6.01092 6 6.01083 6 6.01073C6 6.01064 6 6.01055 6 6.01046C6 6.01036 6 6.01027 6 6.01018C6 6.01009 6 6.00999 6 6.0099C6 6.00981 6 6.00972 6 6.00962C6 6.00953 6 6.00944 6 6.00935C6 6.00925 6 6.00916 6 6.00907C6 6.00898 6 6.00889 6 6.00879C6 6.0087 6 6.00861 6 6.00852C6 6.00843 6 6.00833 6 6.00824C6 6.00815 6 6.00806 6 6.00797C6 6.00787 6 6.00778 6 6.00769C6 6.0076 6 6.00751 6 6.00742C6 6.00732 6 6.00723 6 6.00714C6 6.00705 6 6.00696 6 6.00687C6 6.00678 6 6.00668 6 6.00659C6 6.0065 6 6.00641 6 6.00632C6 6.00623 6 6.00614 6 6.00605C6 6.00596 6 6.00587 6 6.00577C6 6.00568 6 6.00559 6 6.0055C6 6.00541 6 6.00532 6 6.00523C6 6.00514 6 6.00505 6 6.00496C6 6.00487 6 6.00478 6 6.00469C6 6.0046 6 6.00451 6 6.00442C6 6.00433 6 6.00424 6 6.00414C6 6.00405 6 6.00396 6 6.00387C6 6.00378 6 6.00369 6 6.0036C6 6.00351 6 6.00342 6 6.00334C6 6.00325 6 6.00316 6 6.00307C6 6.00298 6 6.00289 6 6.0028C6 6.00271 6 6.00262 6 6.00253C6 6.00244 6 6.00235 6 6.00226C6 6.00217 6 6.00208 6 6.00199C6 6.0019 6 6.00182 6 6.00173C6 6.00164 6 6.00155 6 6.00146C6 6.00137 6 6.00128 6 6.00119C6 6.0011 6 6.00102 6 6.00093C6 6.00084 6 6.00075 6 6.00066C6 6.00057 6 6.00048 6 6.0004C6 6.00031 6 6.00022 6 6.00013C6 6.00004 6 5.99995 6 5.99987C6 5.99978 6 5.99969 6 5.9996C6 5.99951 6 5.99943 6 5.99934C6 5.99925 6 5.99916 6 5.99908C6 5.99899 6 5.9989 6 5.99881C6 5.99873 6 5.99864 6 5.99855C6 5.99846 6 5.99838 6 5.99829C6 5.9982 6 5.99811 6 5.99803C6 5.99794 6 5.99785 6 5.99777C6 5.99768 6 5.99759 6 5.99751C6 5.99742 6 5.99733 6 5.99725C6 5.99716 6 5.99707 6 5.99699C6 5.9969 6 5.99681 6 5.99673C6 5.99664 6 5.99655 6 5.99647C6 5.99638 6 5.9963 6 5.99621C6 5.99612 6 5.99604 6 5.99595C6 5.99587 6 5.99578 6 5.99569C6 5.99561 6 5.99552 6 5.99544C6 5.99535 6 5.99527 6 5.99518C6 5.9951 6 5.99501 6 5.99492C6 5.99484 6 5.99475 6 5.99467C6 5.99458 6 5.9945 6 5.99441C6 5.99433 6 5.99424 6 5.99416C6 5.99407 6 5.99399 6 5.99391C6 5.99382 6 5.99374 6 5.99365C6 5.99357 6 5.99348 6 5.9934C6 5.99331 6 5.99323 6 5.99315C6 5.99306 6 5.99298 6 5.99289C6 5.99281 6 5.99273 6 5.99264C6 5.99256 6 5.99247 6 5.99239C6 5.99231 6 5.99222 6 5.99214C6 5.99206 6 5.99197 6 5.99189C6 5.99181 6 5.99172 6 5.99164C6 5.99156 6 5.99147 6 5.99139C6 5.99131 6 5.99122 6 5.99114C6 5.99106 6 5.99098 6 5.99089C6 5.99081 6 5.99073 6 5.99065C6 5.99056 6 5.99048 6 5.9904C6 5.99032 6 5.99023 6 5.99015C6 5.99007 6 5.98999 6 5.98991C6 5.98982 6 5.98974 6 5.98966C6 5.98958 6 5.9895 6 5.98942C6 5.98933 6 5.98925 6 5.98917C6 5.98909 6 5.98901 6 5.98893C6 5.98885 6 5.98877 6 5.98868C6 5.9886 6 5.98852 6 5.98844C6 5.98836 6 5.98828 6 5.9882C6 5.98812 6 5.98804 6 5.98796C6 5.98788 6 5.9878 6 5.98772C6 5.98764 6 5.98756 6 5.98748C6 5.9874 6 5.98732 6 5.98724C6 5.98716 6 5.98708 6 5.987C6 5.98692 6 5.98684 6 5.98676C6 5.98668 6 5.9866 6 5.98652C6 5.98644 6 5.98636 6 5.98628C6 5.9862 6 5.98612 6 5.98604C6 5.98596 6 5.98589 6 5.98581C6 5.98573 6 5.98565 6 5.98557C6 5.98549 6 5.98541 6 5.98534C6 5.98526 6 5.98518 6 5.9851C6 5.98502 6 5.98494 6 5.98487C6 5.98479 6 5.98471 6 5.98463C6 5.98455 6 5.98448 6 5.9844C6 5.98432 6 5.98424 6 5.98417C6 5.98409 6 5.98401 6 5.98394C6 5.98386 6 5.98378 6 5.9837C6 5.98363 6 5.98355 6 5.98347C6 5.9834 6 5.98332 6 5.98324C6 5.98317 6 5.98309 6 5.98301C6 5.98294 6 5.98286 6 5.98278C6 5.98271 6 5.98263 6 5.98256C6 5.98248 6 5.9824 6 5.98233C6 5.98225 6 5.98218 6 5.9821C6 5.98203 6 5.98195 6 5.98188C6 5.9818 6 5.98173 6 5.98165C6 5.98158 6 5.9815 6 5.98143C6 5.98135 6 5.98128 6 5.9812C6 5.98113 6 5.98105 6 5.98098C6 5.9809 6 5.98083 6 5.98075C6 5.98068 6 5.98061 6 5.98053C6 5.98046 6 5.98038 6 5.98031C6 5.98024 6 5.98016 6 5.98009C6 5.98001 6 5.97994 6 5.97987C6 5.97979 6 5.97972 6 5.97965C6 5.97957 6 5.9795 6 5.97943C6 5.97936 6 5.97928 6 5.97921C6 5.97914 6 5.97906 6 5.97899C6 5.97892 6 5.97885 6 5.97877C6 5.9787 6 5.97863 6 5.97856C6 5.97849 6 5.97841 6 5.97834C6 5.97827 6 5.9782 6 5.97813C6 5.97806 6 5.97798 6 5.97791C6 5.97784 6 5.97777 6 5.9777C6 5.97763 6 5.97756 6 5.97749C6 5.97741 6 5.97734 6 5.97727C6 5.9772 6 5.97713 6 5.97706C6 5.97699 6 5.97692 6 5.97685C6 5.97678 6 5.97671 6 5.97664C6 5.97657 6 5.9765 6 5.97643C6 5.97636 6 5.97629 6 5.97622C6 5.97615 6 5.97608 6 5.97601C6 5.97594 6 5.97587 6 5.97581C6 5.97574 6 5.97567 6 5.9756C6 5.97553 6 5.97546 6 5.97539C6 5.97532 6 5.97526 6 5.97519C6 5.97512 6 5.97505 6 5.97498C6 5.97491 6 5.97485 6 5.97478C6 5.97471 6 5.97464 6 5.97458C6 5.97451 6 5.97444 6 5.97437C6 5.97431 6 5.97424 6 5.97417C6 5.9741 6 5.97404 6 5.97397C6 5.9739 6 5.97384 6 5.97377C6 5.9737 6 5.97364 6 5.97357C6 5.9735 6 5.97344 6 5.97337C6 5.97331 6 5.97324 6 5.97317C6 5.97311 6 5.97304 6 5.97298C6 5.97291 6 5.97285 6 5.97278C6 5.97272 6 5.97265 6 5.97258L8 5.97258C8 5.97265 8 5.97272 8 5.97278C8 5.97285 8 5.97291 8 5.97298C8 5.97304 8 5.97311 8 5.97317C8 5.97324 8 5.97331 8 5.97337C8 5.97344 8 5.9735 8 5.97357C8 5.97364 8 5.9737 8 5.97377C8 5.97384 8 5.9739 8 5.97397C8 5.97404 8 5.9741 8 5.97417C8 5.97424 8 5.97431 8 5.97437C8 5.97444 8 5.97451 8 5.97458C8 5.97464 8 5.97471 8 5.97478C8 5.97485 8 5.97491 8 5.97498C8 5.97505 8 5.97512 8 5.97519C8 5.97526 8 5.97532 8 5.97539C8 5.97546 8 5.97553 8 5.9756C8 5.97567 8 5.97574 8 5.97581C8 5.97587 8 5.97594 8 5.97601C8 5.97608 8 5.97615 8 5.97622C8 5.97629 8 5.97636 8 5.97643C8 5.9765 8 5.97657 8 5.97664C8 5.97671 8 5.97678 8 5.97685C8 5.97692 8 5.97699 8 5.97706C8 5.97713 8 5.9772 8 5.97727C8 5.97734 8 5.97741 8 5.97749C8 5.97756 8 5.97763 8 5.9777C8 5.97777 8 5.97784 8 5.97791C8 5.97798 8 5.97806 8 5.97813C8 5.9782 8 5.97827 8 5.97834C8 5.97841 8 5.97849 8 5.97856C8 5.97863 8 5.9787 8 5.97877C8 5.97885 8 5.97892 8 5.97899C8 5.97906 8 5.97914 8 5.97921C8 5.97928 8 5.97936 8 5.97943C8 5.9795 8 5.97957 8 5.97965C8 5.97972 8 5.97979 8 5.97987C8 5.97994 8 5.98001 8 5.98009C8 5.98016 8 5.98024 8 5.98031C8 5.98038 8 5.98046 8 5.98053C8 5.98061 8 5.98068 8 5.98075C8 5.98083 8 5.9809 8 5.98098C8 5.98105 8 5.98113 8 5.9812C8 5.98128 8 5.98135 8 5.98142C8 5.9815 8 5.98158 8 5.98165C8 5.98173 8 5.9818 8 5.98188C8 5.98195 8 5.98203 8 5.9821C8 5.98218 8 5.98225 8 5.98233C8 5.9824 8 5.98248 8 5.98256C8 5.98263 8 5.98271 8 5.98278C8 5.98286 8 5.98294 8 5.98301C8 5.98309 8 5.98317 8 5.98324C8 5.98332 8 5.9834 8 5.98347C8 5.98355 8 5.98363 8 5.9837C8 5.98378 8 5.98386 8 5.98394C8 5.98401 8 5.98409 8 5.98417C8 5.98424 8 5.98432 8 5.9844C8 5.98448 8 5.98455 8 5.98463C8 5.98471 8 5.98479 8 5.98487C8 5.98494 8 5.98502 8 5.9851C8 5.98518 8 5.98526 8 5.98534C8 5.98541 8 5.98549 8 5.98557C8 5.98565 8 5.98573 8 5.98581C8 5.98589 8 5.98596 8 5.98604C8 5.98612 8 5.9862 8 5.98628C8 5.98636 8 5.98644 8 5.98652C8 5.9866 8 5.98668 8 5.98676C8 5.98684 8 5.98692 8 5.987C8 5.98708 8 5.98716 8 5.98724C8 5.98732 8 5.9874 8 5.98748C8 5.98756 8 5.98764 8 5.98772C8 5.9878 8 5.98788 8 5.98796C8 5.98804 8 5.98812 8 5.9882C8 5.98828 8 5.98836 8 5.98844C8 5.98852 8 5.9886 8 5.98868C8 5.98877 8 5.98885 8 5.98893C8 5.98901 8 5.98909 8 5.98917C8 5.98925 8 5.98933 8 5.98942C8 5.9895 8 5.98958 8 5.98966C8 5.98974 8 5.98982 8 5.98991C8 5.98999 8 5.99007 8 5.99015C8 5.99023 8 5.99032 8 5.9904C8 5.99048 8 5.99056 8 5.99065C8 5.99073 8 5.99081 8 5.99089C8 5.99098 8 5.99106 8 5.99114C8 5.99122 8 5.99131 8 5.99139C8 5.99147 8 5.99156 8 5.99164C8 5.99172 8 5.99181 8 5.99189C8 5.99197 8 5.99206 8 5.99214C8 5.99222 8 5.99231 8 5.99239C8 5.99247 8 5.99256 8 5.99264C8 5.99273 8 5.99281 8 5.99289C8 5.99298 8 5.99306 8 5.99315C8 5.99323 8 5.99331 8 5.9934C8 5.99348 8 5.99357 8 5.99365C8 5.99374 8 5.99382 8 5.99391C8 5.99399 8 5.99407 8 5.99416C8 5.99424 8 5.99433 8 5.99441C8 5.9945 8 5.99458 8 5.99467C8 5.99475 8 5.99484 8 5.99492C8 5.99501 8 5.9951 8 5.99518C8 5.99527 8 5.99535 8 5.99544C8 5.99552 8 5.99561 8 5.99569C8 5.99578 8 5.99587 8 5.99595C8 5.99604 8 5.99612 8 5.99621C8 5.9963 8 5.99638 8 5.99647C8 5.99655 8 5.99664 8 5.99673C8 5.99681 8 5.9969 8 5.99699C8 5.99707 8 5.99716 8 5.99725C8 5.99733 8 5.99742 8 5.99751C8 5.99759 8 5.99768 8 5.99777C8 5.99785 8 5.99794 8 5.99803C8 5.99811 8 5.9982 8 5.99829C8 5.99838 8 5.99846 8 5.99855C8 5.99864 8 5.99873 8 5.99881C8 5.9989 8 5.99899 8 5.99908C8 5.99916 8 5.99925 8 5.99934C8 5.99943 8 5.99951 8 5.9996C8 5.99969 8 5.99978 8 5.99987C8 5.99995 8 6.00004 8 6.00013C8 6.00022 8 6.00031 8 6.0004C8 6.00048 8 6.00057 8 6.00066C8 6.00075 8 6.00084 8 6.00093C8 6.00102 8 6.0011 8 6.00119C8 6.00128 8 6.00137 8 6.00146C8 6.00155 8 6.00164 8 6.00173C8 6.00181 8 6.0019 8 6.00199C8 6.00208 8 6.00217 8 6.00226C8 6.00235 8 6.00244 8 6.00253C8 6.00262 8 6.00271 8 6.0028C8 6.00289 8 6.00298 8 6.00307C8 6.00316 8 6.00325 8 6.00334C8 6.00342 8 6.00351 8 6.0036C8 6.00369 8 6.00378 8 6.00387C8 6.00396 8 6.00405 8 6.00414C8 6.00423 8 6.00433 8 6.00442C8 6.00451 8 6.0046 8 6.00469C8 6.00478 8 6.00487 8 6.00496C8 6.00505 8 6.00514 8 6.00523C8 6.00532 8 6.00541 8 6.0055C8 6.00559 8 6.00568 8 6.00577C8 6.00587 8 6.00596 8 6.00605C8 6.00614 8 6.00623 8 6.00632C8 6.00641 8 6.0065 8 6.00659C8 6.00668 8 6.00678 8 6.00687C8 6.00696 8 6.00705 8 6.00714C8 6.00723 8 6.00732 8 6.00742C8 6.00751 8 6.0076 8 6.00769C8 6.00778 8 6.00787 8 6.00797C8 6.00806 8 6.00815 8 6.00824C8 6.00833 8 6.00843 8 6.00852C8 6.00861 8 6.0087 8 6.00879C8 6.00889 8 6.00898 8 6.00907C8 6.00916 8 6.00925 8 6.00935C8 6.00944 8 6.00953 8 6.00962C8 6.00972 8 6.00981 8 6.0099C8 6.00999 8 6.01009 8 6.01018C8 6.01027 8 6.01036 8 6.01046C8 6.01055 8 6.01064 8 6.01073C8 6.01083 8 6.01092 8 6.01101C8 6.01111 8 6.0112 8 6.01129C8 6.01139 8 6.01148 8 6.01157C8 6.01166 8 6.01176 8 6.01185C8 6.01194 8 6.01204 8 6.01213C8 6.01222 8 6.01232 8 6.01241C8 6.0125 8 6.0126 8 6.01269C8 6.01278 8 6.01288 8 6.01297C8 6.01306 8 6.01316 8 6.01325C8 6.01335 8 6.01344 8 6.01353C8 6.01363 8 6.01372 8 6.01381C8 6.01391 8 6.014 8 6.0141C8 6.01419 8 6.01428 8 6.01438C8 6.01447 8 6.01457 8 6.01466C8 6.01475 8 6.01485 8 6.01494C8 6.01504 8 6.01513 8 6.01523C8 6.01532 8 6.01541 8 6.01551C8 6.0156 8 6.0157 8 6.01579C8 6.01589 8 6.01598 8 6.01607C8 6.01617 8 6.01626 8 6.01636C8 6.01645 8 6.01655 8 6.01664C8 6.01674 8 6.01683 8 6.01693C8 6.01702 8 6.01712 8 6.01721C8 6.01731 8 6.0174 8 6.01749C8 6.01759 8 6.01768 8 6.01778C8 6.01787 8 6.01797 8 6.01806C8 6.01816 8 6.01825 8 6.01835C8 6.01844 8 6.01854 8 6.01863C8 6.01873 8 6.01883 8 6.01892C8 6.01902 8 6.01911 8 6.01921C8 6.0193 8 6.0194 8 6.01949C8 6.01959 8 6.01968 8 6.01978C8 6.01987 8 6.01997 8 6.02006C8 6.02016 8 6.02026 8 6.02035C8 6.02045 8 6.02054 8 6.02064C8 6.02073 8 6.02083 8 6.02093C8 6.02102 8 6.02112 8 6.02121C8 6.02131 8 6.0214 8 6.0215C8 6.0216 8 6.02169 8 6.02179C8 6.02188 8 6.02198 8 6.02208C8 6.02217 8 6.02227 8 6.02236C8 6.02246 8 6.02256 8 6.02265C8 6.02275 8 6.02284 8 6.02294C8 6.02304 8 6.02313 8 6.02323C8 6.02332 8 6.02342 8 6.02352C8 6.02361 8 6.02371 8 6.02381C8 6.0239 8 6.024 8 6.02409C8 6.02419 8 6.02429 8 6.02438C8 6.02448 8 6.02458 8 6.02467C8 6.02477 8 6.02487 8 6.02496C8 6.02506 8 6.02515 8 6.02525C8 6.02535 8 6.02544 8 6.02554C8 6.02564 8 6.02573 8 6.02583C8 6.02593 8 6.02602 8 6.02612C8 6.02622 8 6.02631 8 6.02641C8 6.02651 8 6.0266 8 6.0267C8 6.0268 8 6.02689 8 6.02699C8 6.02709 8 6.02718 8 6.02728C8 6.02738 8 6.02748 8 6.02757C8 6.02767 8 6.02777 8 6.02786C8 6.02796 8 6.02806 8 6.02815C8 6.02825 8 6.02835 8 6.02844C8 6.02854 8 6.02864 8 6.02874C8 6.02883 8 6.02893 8 6.02903C8 6.02912 8 6.02922 8 6.02932C8 6.02941 8 6.02951 8 6.02961C8 6.02971 8 6.0298 8 6.0299C8 6.03 8 6.0301 8 6.03019C8 6.03029 8 6.03039 8 6.03048C8 6.03058 8 6.03068 8 6.03078C8 6.03087 8 6.03097 8 6.03107C8 6.03116 8 6.03126 8 6.03136C8 6.03146 8 6.03155 8 6.03165C8 6.03175 8 6.03185 8 6.03194C8 6.03204 8 6.03214 8 6.03224C8 6.03233 8 6.03243 8 6.03253C8 6.03262 8 6.03272 8 6.03282C8 6.03292 8 6.03301 8 6.03311C8 6.03321 8 6.03331 8 6.0334C8 6.0335 8 6.0336 8 6.0337C8 6.03379 8 6.03389 8 6.03399C8 6.03409 8 6.03418 8 6.03428C8 6.03438 8 6.03448 8 6.03457C8 6.03467 8 6.03477 8 6.03487C8 6.03496 8 6.03506 8 6.03516C8 6.03526 8 6.03536 8 6.03545C8 6.03555 8 6.03565 8 6.03575C8 6.03584 8 6.03594 8 6.03604C8 6.03614 8 6.03623 8 6.03633C8 6.03643 8 6.03653 8 6.03662C8 6.03672 8 6.03682 8 6.03692C8 6.03701 8 6.03711 8 6.03721C8 6.03731 8 6.03741 8 6.0375C8 6.0376 8 6.0377 8 6.0378C8 6.03789 8 6.03799 8 6.03809C8 6.03819 8 6.03828 8 6.03838C8 6.03848 8 6.03858 8 6.03867C8 6.03877 8 6.03887 8 6.03897C8 6.03907 8 6.03916 8 6.03926C8 6.03936 8 6.03946 8 6.03955C8 6.03965 8 6.03975 8 6.03985C8 6.03994 8 6.04004 8 6.04014C8 6.04024 8 6.04034 8 6.04043C8 6.04053 8 6.04063 8 6.04073C8 6.04082 8 6.04092 8 6.04102C8 6.04112 8 6.04121 8 6.04131C8 6.04141 8 6.04151 8 6.0416C8 6.0417 8 6.0418 8 6.0419C8 6.042 8 6.04209 8 6.04219C8 6.04229 8 6.04239 8 6.04248C8 6.04258 8 6.04268 8 6.04278C8 6.04287 8 6.04297 8 6.04307C8 6.04317 8 6.04326 8 6.04336C8 6.04346 8 6.04356 8 6.04365C8 6.04375 8 6.04385 8 6.04395C8 6.04404 8 6.04414 8 6.04424C8 6.04434 8 6.04443 8 6.04453C8 6.04463 8 6.04473 8 6.04482C8 6.04492 8 6.04502 8 6.04512C8 6.04521 8 6.04531 8 6.04541C8 6.04551 8 6.0456 8 6.0457C8 6.0458 8 6.0459 8 6.04599C8 6.04609 8 6.04619 8 6.04629C8 6.04638 8 6.04648 8 6.04658C8 6.04668 8 6.04677 8 6.04687C8 6.04697 8 6.04706 8 6.04716C8 6.04726 8 6.04736 8 6.04745C8 6.04755 8 6.04765 8 6.04775C8 6.04784 8 6.04794 8 6.04804C8 6.04813 8 6.04823 8 6.04833C8 6.04843 8 6.04852 8 6.04862C8 6.04872 8 6.04881 8 6.04891C8 6.04901 8 6.04911 8 6.0492C8 6.0493 8 6.0494 8 6.04949C8 6.04959 8 6.04969 8 6.04979C8 6.04988 8 6.04998 8 6.05008C8 6.05017 8 6.05027 8 6.05037C8 6.05046 8 6.05056 8 6.05066C8 6.05076 8 6.05085 8 6.05095C8 6.05105 8 6.05114 8 6.05124C8 6.05134 8 6.05143 8 6.05153C8 6.05163 8 6.05172 8 6.05182C8 6.05192 8 6.05201 8 6.05211C8 6.05221 8 6.0523 8 6.0524C8 6.0525 8 6.05259 8 6.05269C8 6.05279 8 6.05288 8 6.05298C8 6.05308 8 6.05317 8 6.05327C8 6.05337 8 6.05346 8 6.05356C8 6.05366 8 6.05375 8 6.05385C8 6.05395 8 6.05404 8 6.05414C8 6.05423 8 6.05433 8 6.05443C8 6.05452 8 6.05462 8 6.05472C8 6.05481 8 6.05491 8 6.05501C8 6.0551 8 6.0552 8 6.05529C8 6.05539 8 6.05549 8 6.05558C8 6.05568 8 6.05577 8 6.05587C8 6.05597 8 6.05606 8 6.05616C8 6.05625 8 6.05635 8 6.05645C8 6.05654 8 6.05664 8 6.05673C8 6.05683 8 6.05693 8 6.05702C8 6.05712 8 6.05721 8 6.05731C8 6.0574 8 6.0575 8 6.0576C8 6.05769 8 6.05779 8 6.05788C8 6.05798 8 6.05807 8 6.05817C8 6.05827 8 6.05836 8 6.05846C8 6.05855 8 6.05865 8 6.05874C8 6.05884 8 6.05893 8 6.05903C8 6.05912 8 6.05922 8 6.05932C8 6.05941 8 6.05951 8 6.0596C8 6.0597 8 6.05979 8 6.05989C8 6.05998 8 6.06008 8 6.06017C8 6.06027 8 6.06036 8 6.06046C8 6.06055 8 6.06065 8 6.06074C8 6.06084 8 6.06093 8 6.06103C8 6.06112 8 6.06122 8 6.06131C8 6.06141 8 6.0615 8 6.0616C8 6.06169 8 6.06179 8 6.06188C8 6.06197 8 6.06207 8 6.06216C8 6.06226 8 6.06235 8 6.06245C8 6.06254 8 6.06264 8 6.06273C8 6.06282 8 6.06292 8 6.06301C8 6.06311 8 6.0632 8 6.0633C8 6.06339 8 6.06349 8 6.06358C8 6.06367 8 6.06377 8 6.06386C8 6.06396 8 6.06405 8 6.06414C8 6.06424 8 6.06433 8 6.06443C8 6.06452 8 6.06461 8 6.06471C8 6.0648 8 6.06489 8 6.06499C8 6.06508 8 6.06518 8 6.06527C8 6.06536 8 6.06546 8 6.06555C8 6.06564 8 6.06574 8 6.06583C8 6.06592 8 6.06602 8 6.06611C8 6.0662 8 6.0663 8 6.06639C8 6.06648 8 6.06658 8 6.06667C8 6.06676 8 6.06686 8 6.06695C8 6.06704 8 6.06714 8 6.06723C8 6.06732 8 6.06742 8 6.06751C8 6.0676 8 6.06769 8 6.06779C8 6.06788 8 6.06797 8 6.06806C8 6.06816 8 6.06825 8 6.06834C8 6.06844 8 6.06853 8 6.06862C8 6.06871 8 6.06881 8 6.0689C8 6.06899 8 6.06908 8 6.06917C8 6.06927 8 6.06936 8 6.06945C8 6.06954 8 6.06964 8 6.06973C8 6.06982 8 6.06991 8 6.07C8 6.0701 8 6.07019 8 6.07028C8 6.07037 8 6.07046 8 6.07056C8 6.07065 8 6.07074 8 6.07083C8 6.07092 8 6.07101 8 6.07111C8 6.0712 8 6.07129 8 6.07138C8 6.07147 8 6.07156 8 6.07165C8 6.07175 8 6.07184 8 6.07193C8 6.07202 8 6.07211 8 6.0722C8 6.07229 8 6.07238 8 6.07247C8 6.07257 8 6.07266 8 6.07275C8 6.07284 8 6.07293 8 6.07302C8 6.07311 8 6.0732 8 6.07329C8 6.07338 8 6.07347 8 6.07356C8 6.07365 8 6.07374 8 6.07384C8 6.07393 8 6.07402 8 6.07411C8 6.0742 8 6.07429 8 6.07438C8 6.07447 8 6.07456 8 6.07465C8 6.07474 8 6.07483 8 6.07492C8 6.07501 8 6.0751 8 6.07519C8 6.07528 8 6.07537 8 6.07546C8 6.07554 8 6.07563 8 6.07572C8 6.07581 8 6.0759 8 6.07599C8 6.07608 8 6.07617 8 6.07626C8 6.07635 8 6.07644 8 6.07653C8 6.07662 8 6.07671 8 6.0768C8 6.07688 8 6.07697 8 6.07706C8 6.07715 8 6.07724 8 6.07733C8 6.07742 8 6.07751 8 6.07759C8 6.07768 8 6.07777 8 6.07786C8 6.07795 8 6.07804 8 6.07813C8 6.07821 8 6.0783 8 6.07839C8 6.07848 8 6.07857 8 6.07865C8 6.07874 8 6.07883 8 6.07892C8 6.07901 8 6.0791 8 6.07918C8 6.07927 8 6.07936 8 6.07945C8 6.07953 8 6.07962 8 6.07971C8 6.0798 8 6.07988 8 6.07997C8 6.08006 8 6.08015 8 6.08023C8 6.08032 8 6.08041 8 6.08049C8 6.08058 8 6.08067 8 6.08076C8 6.08084 8 6.08093 8 6.08102C8 6.0811 8 6.08119 8 6.08128C8 6.08136 8 6.08145 8 6.08154C8 6.08162 8 6.08171 8 6.08179C8 6.08188 8 6.08197 8 6.08205C8 6.08214 8 6.08223 8 6.08231C8 6.0824 8 6.08248 8 6.08257C8 6.08266 8 6.08274 8 6.08283C8 6.08291 8 6.083 8 6.08308C8 6.08317 8 6.08326 8 6.08334C8 6.08343 8 6.08351 8 6.0836C8 6.08368 8 6.08377 8 6.08385C8 6.08394 8 6.08402 8 6.08411C8 6.08419 8 6.08428 8 6.08436C8 6.08445 8 6.08453 8 6.08462C8 6.0847 8 6.08479 8 6.08487C8 6.08495 8 6.08504 8 6.08512C8 6.08521 8 6.08529 8 6.08538C8 6.08546 8 6.08554 8 6.08563C8 6.08571 8 6.0858 8 6.08588C8 6.08596 8 6.08605 8 6.08613C8 6.08621 8 6.0863 8 6.08638C8 6.08647 8 6.08655 8 6.08663C8 6.08672 8 6.0868 8 6.08688C8 6.08696 8 6.08705 8 6.08713C8 6.08721 8 6.0873 8 6.08738C8 6.08746 8 6.08755 8 6.08763C8 6.08771 8 6.08779 8 6.08788C8 6.08796 8 6.08804 8 6.08812C8 6.0882 8 6.08829 8 6.08837C8 6.08845 8 6.08853 8 6.08862C8 6.0887 8 6.08878 8 6.08886C8 6.08894 8 6.08902 8 6.08911C8 6.08919 8 6.08927 8 6.08935C8 6.08943 8 6.08951 8 6.08959C8 6.08968 8 6.08976 8 6.08984C8 6.08992 8 6.09 8 6.09008C8 6.09016 8 6.09024 8 6.09032C8 6.0904 8 6.09048 8 6.09056C8 6.09064 8 6.09073 8 6.09081C8 6.09089 8 6.09097 8 6.09105C8 6.09113 8 6.09121 8 6.09129C8 6.09137 8 6.09145 8 6.09153C8 6.09161 8 6.09168 8 6.09176C8 6.09184 8 6.09192 8 6.092C8 6.09208 8 6.09216 8 6.09224C8 6.09232 8 6.0924 8 6.09248C8 6.09256 8 6.09264 8 6.09271C8 6.09279 8 6.09287 8 6.09295C8 6.09303 8 6.09311 8 6.09319C8 6.09326 8 6.09334 8 6.09342C8 6.0935 8 6.09358 8 6.09365C8 6.09373 8 6.09381 8 6.09389C8 6.09397 8 6.09404 8 6.09412C8 6.0942 8 6.09428 8 6.09435C8 6.09443 8 6.09451 8 6.09459C8 6.09466 8 6.09474 8 6.09482C8 6.09489 8 6.09497 8 6.09505C8 6.09512 8 6.0952 8 6.09528C8 6.09535 8 6.09543 8 6.09551C8 6.09558 8 6.09566 8 6.09574C8 6.09581 8 6.09589 8 6.09596C8 6.09604 8 6.09612 8 6.09619C8 6.09627 8 6.09634 8 6.09642C8 6.09649 8 6.09657 8 6.09665C8 6.09672 8 6.0968 8 6.09687C8 6.09695 8 6.09702 8 6.0971C8 6.09717 8 6.09725 8 6.09732C8 6.0974 8 6.09747 8 6.09754C8 6.09762 8 6.09769 8 6.09777C8 6.09784 8 6.09792 8 6.09799C8 6.09806 8 6.09814 8 6.09821C8 6.09829 8 6.09836 8 6.09843C8 6.09851 8 6.09858 8 6.09865C8 6.09873 8 6.0988 8 6.09887C8 6.09895 8 6.09902 8 6.09909C8 6.09917 8 6.09924 8 6.09931C8 6.09938 8 6.09946 8 6.09953C8 6.0996 8 6.09967 8 6.09975C8 6.09982 8 6.09989 8 6.09996C8 6.10004 8 6.10011 8 6.10018C8 6.10025 8 6.10032 8 6.10039C8 6.10047 8 6.10054 8 6.10061C8 6.10068 8 6.10075 8 6.10082C8 6.10089 8 6.10097 8 6.10104C8 6.10111 8 6.10118 8 6.10125C8 6.10132 8 6.10139 8 6.10146C8 6.10153 8 6.1016 8 6.10167C8 6.10174 8 6.10181 8 6.10188C8 6.10195 8 6.10202 8 6.10209C8 6.10216 8 6.10223 8 6.1023C8 6.10237 8 6.10244 8 6.10251C8 6.10258 8 6.10265 8 6.10272C8 6.10278 8 6.10285 8 6.10292C8 6.10299 8 6.10306 8 6.10313C8 6.1032 8 6.10327 8 6.10333C8 6.1034 8 6.10347 8 6.10354C8 6.10361 8 6.10368 8 6.10374C8 6.10381 8 6.10388 8 6.10395C8 6.10401 8 6.10408 8 6.10415C8 6.10422 8 6.10428 8 6.10435C8 6.10442 8 6.10448 8 6.10455C8 6.10462 8 6.10468 8 6.10475C8 6.10482 8 6.10488 8 6.10495C8 6.10502 8 6.10508 8 6.10515C8 6.10522 8 6.10528 8 6.10535C8 6.10541 8 6.10548 8 6.10554C8 6.10561 8 6.10568 8 6.10574C8 6.10581 8 6.10587 8 6.10594L6 6.10594ZM6 5.97258C6 5.97252 6 5.97245 6 5.97239C6 5.97232 6 5.97226 6 5.97219C6 5.97213 6 5.97206 6 5.972C6 5.97193 6 5.97186 6 5.9718C6 5.97173 6 5.97167 6 5.9716C6 5.97153 6 5.97147 6 5.9714C6 5.97133 6 5.97127 6 5.9712C6 5.97113 6 5.97106 6 5.971C6 5.97093 6 5.97086 6 5.9708C6 5.97073 6 5.97066 6 5.97059C6 5.97053 6 5.97046 6 5.97039C6 5.97032 6 5.97025 6 5.97019C6 5.97012 6 5.97005 6 5.96998C6 5.96991 6 5.96985 6 5.96978C6 5.96971 6 5.96964 6 5.96957C6 5.9695 6 5.96943 6 5.96936C6 5.96929 6 5.96923 6 5.96916C6 5.96909 6 5.96902 6 5.96895C6 5.96888 6 5.96881 6 5.96874C6 5.96867 6 5.9686 6 5.96853C6 5.96846 6 5.96839 6 5.96832C6 5.96825 6 5.96818 6 5.96811C6 5.96804 6 5.96797 6 5.9679C6 5.96783 6 5.96775 6 5.96768C6 5.96761 6 5.96754 6 5.96747C6 5.9674 6 5.96733 6 5.96726C6 5.96719 6 5.96711 6 5.96704C6 5.96697 6 5.9669 6 5.96683C6 5.96676 6 5.96668 6 5.96661C6 5.96654 6 5.96647 6 5.96639C6 5.96632 6 5.96625 6 5.96618C6 5.9661 6 5.96603 6 5.96596C6 5.96589 6 5.96581 6 5.96574C6 5.96567 6 5.96559 6 5.96552C6 5.96545 6 5.96538 6 5.9653C6 5.96523 6 5.96515 6 5.96508C6 5.96501 6 5.96493 6 5.96486C6 5.96479 6 5.96471 6 5.96464C6 5.96456 6 5.96449 6 5.96442C6 5.96434 6 5.96427 6 5.96419C6 5.96412 6 5.96404 6 5.96397C6 5.96389 6 5.96382 6 5.96374C6 5.96367 6 5.96359 6 5.96352C6 5.96344 6 5.96337 6 5.96329C6 5.96322 6 5.96314 6 5.96307C6 5.96299 6 5.96292 6 5.96284C6 5.96276 6 5.96269 6 5.96261C6 5.96254 6 5.96246 6 5.96238C6 5.96231 6 5.96223 6 5.96216C6 5.96208 6 5.962 6 5.96193C6 5.96185 6 5.96177 6 5.9617C6 5.96162 6 5.96154 6 5.96147C6 5.96139 6 5.96131 6 5.96123C6 5.96116 6 5.96108 6 5.961C6 5.96092 6 5.96085 6 5.96077C6 5.96069 6 5.96061 6 5.96054C6 5.96046 6 5.96038 6 5.9603C6 5.96022 6 5.96015 6 5.96007C6 5.95999 6 5.95991 6 5.95983C6 5.95976 6 5.95968 6 5.9596C6 5.95952 6 5.95944 6 5.95936C6 5.95928 6 5.9592 6 5.95913C6 5.95905 6 5.95897 6 5.95889C6 5.95881 6 5.95873 6 5.95865C6 5.95857 6 5.95849 6 5.95841C6 5.95833 6 5.95825 6 5.95817C6 5.95809 6 5.95801 6 5.95793C6 5.95785 6 5.95777 6 5.95769C6 5.95761 6 5.95753 6 5.95745C6 5.95737 6 5.95729 6 5.95721C6 5.95713 6 5.95705 6 5.95697C6 5.95689 6 5.95681 6 5.95673C6 5.95665 6 5.95657 6 5.95649C6 5.9564 6 5.95632 6 5.95624C6 5.95616 6 5.95608 6 5.956C6 5.95592 6 5.95584 6 5.95575C6 5.95567 6 5.95559 6 5.95551C6 5.95543 6 5.95534 6 5.95526C6 5.95518 6 5.9551 6 5.95502C6 5.95493 6 5.95485 6 5.95477C6 5.95469 6 5.95461 6 5.95452C6 5.95444 6 5.95436 6 5.95428C6 5.95419 6 5.95411 6 5.95403C6 5.95394 6 5.95386 6 5.95378C6 5.9537 6 5.95361 6 5.95353C6 5.95345 6 5.95336 6 5.95328C6 5.9532 6 5.95311 6 5.95303C6 5.95295 6 5.95286 6 5.95278C6 5.9527 6 5.95261 6 5.95253C6 5.95244 6 5.95236 6 5.95228C6 5.95219 6 5.95211 6 5.95202C6 5.95194 6 5.95186 6 5.95177C6 5.95169 6 5.9516 6 5.95152C6 5.95143 6 5.95135 6 5.95126C6 5.95118 6 5.95109 6 5.95101C6 5.95093 6 5.95084 6 5.95076C6 5.95067 6 5.95059 6 5.9505C6 5.95042 6 5.95033 6 5.95025C6 5.95016 6 5.95007 6 5.94999C6 5.9499 6 5.94982 6 5.94973C6 5.94965 6 5.94956 6 5.94948C6 5.94939 6 5.9493 6 5.94922C6 5.94913 6 5.94905 6 5.94896C6 5.94887 6 5.94879 6 5.9487C6 5.94862 6 5.94853 6 5.94844C6 5.94836 6 5.94827 6 5.94818C6 5.9481 6 5.94801 6 5.94792C6 5.94784 6 5.94775 6 5.94766C6 5.94758 6 5.94749 6 5.9474C6 5.94732 6 5.94723 6 5.94714C6 5.94706 6 5.94697 6 5.94688C6 5.94679 6 5.94671 6 5.94662C6 5.94653 6 5.94644 6 5.94636C6 5.94627 6 5.94618 6 5.94609C6 5.94601 6 5.94592 6 5.94583C6 5.94574 6 5.94566 6 5.94557C6 5.94548 6 5.94539 6 5.9453C6 5.94521 6 5.94513 6 5.94504C6 5.94495 6 5.94486 6 5.94477C6 5.94469 6 5.9446 6 5.94451C6 5.94442 6 5.94433 6 5.94424C6 5.94415 6 5.94407 6 5.94398C6 5.94389 6 5.9438 6 5.94371C6 5.94362 6 5.94353 6 5.94344C6 5.94335 6 5.94327 6 5.94318C6 5.94309 6 5.943 6 5.94291C6 5.94282 6 5.94273 6 5.94264C6 5.94255 6 5.94246 6 5.94237C6 5.94228 6 5.94219 6 5.9421C6 5.94201 6 5.94192 6 5.94183C6 5.94174 6 5.94165 6 5.94156C6 5.94147 6 5.94139 6 5.94129C6 5.9412 6 5.94111 6 5.94102C6 5.94093 6 5.94084 6 5.94075C6 5.94066 6 5.94057 6 5.94048C6 5.94039 6 5.9403 6 5.94021C6 5.94012 6 5.94003 6 5.93994C6 5.93985 6 5.93976 6 5.93967C6 5.93958 6 5.93949 6 5.9394C6 5.9393 6 5.93921 6 5.93912C6 5.93903 6 5.93894 6 5.93885C6 5.93876 6 5.93867 6 5.93858C6 5.93848 6 5.93839 6 5.9383C6 5.93821 6 5.93812 6 5.93803C6 5.93794 6 5.93784 6 5.93775C6 5.93766 6 5.93757 6 5.93748C6 5.93739 6 5.9373 6 5.9372C6 5.93711 6 5.93702 6 5.93693C6 5.93684 6 5.93674 6 5.93665C6 5.93656 6 5.93647 6 5.93638C6 5.93628 6 5.93619 6 5.9361C6 5.93601 6 5.93592 6 5.93582C6 5.93573 6 5.93564 6 5.93555C6 5.93545 6 5.93536 6 5.93527C6 5.93518 6 5.93508 6 5.93499C6 5.9349 6 5.93481 6 5.93471C6 5.93462 6 5.93453 6 5.93443C6 5.93434 6 5.93425 6 5.93416C6 5.93406 6 5.93397 6 5.93388C6 5.93378 6 5.93369 6 5.9336C6 5.93351 6 5.93341 6 5.93332C6 5.93323 6 5.93313 6 5.93304C6 5.93295 6 5.93285 6 5.93276C6 5.93267 6 5.93257 6 5.93248C6 5.93239 6 5.93229 6 5.9322C6 5.9321 6 5.93201 6 5.93192C6 5.93182 6 5.93173 6 5.93164C6 5.93154 6 5.93145 6 5.93136C6 5.93126 6 5.93117 6 5.93107C6 5.93098 6 5.93089 6 5.93079C6 5.9307 6 5.9306 6 5.93051C6 5.93042 6 5.93032 6 5.93023C6 5.93013 6 5.93004 6 5.92994C6 5.92985 6 5.92976 6 5.92966C6 5.92957 6 5.92947 6 5.92938C6 5.92928 6 5.92919 6 5.9291C6 5.929 6 5.92891 6 5.92881C6 5.92872 6 5.92862 6 5.92853C6 5.92843 6 5.92834 6 5.92824C6 5.92815 6 5.92805 6 5.92796C6 5.92786 6 5.92777 6 5.92767C6 5.92758 6 5.92749 6 5.92739C6 5.9273 6 5.9272 6 5.92711C6 5.92701 6 5.92692 6 5.92682C6 5.92673 6 5.92663 6 5.92653C6 5.92644 6 5.92634 6 5.92625C6 5.92615 6 5.92606 6 5.92596C6 5.92587 6 5.92577 6 5.92568C6 5.92558 6 5.92549 6 5.92539C6 5.9253 6 5.9252 6 5.9251C6 5.92501 6 5.92491 6 5.92482C6 5.92472 6 5.92463 6 5.92453C6 5.92444 6 5.92434 6 5.92424C6 5.92415 6 5.92405 6 5.92396C6 5.92386 6 5.92377 6 5.92367C6 5.92357 6 5.92348 6 5.92338C6 5.92329 6 5.92319 6 5.92309C6 5.923 6 5.9229 6 5.92281C6 5.92271 6 5.92261 6 5.92252C6 5.92242 6 5.92233 6 5.92223C6 5.92213 6 5.92204 6 5.92194C6 5.92185 6 5.92175 6 5.92165C6 5.92156 6 5.92146 6 5.92136C6 5.92127 6 5.92117 6 5.92108C6 5.92098 6 5.92088 6 5.92079C6 5.92069 6 5.92059 6 5.9205C6 5.9204 6 5.9203 6 5.92021C6 5.92011 6 5.92002 6 5.91992C6 5.91982 6 5.91973 6 5.91963C6 5.91953 6 5.91944 6 5.91934C6 5.91924 6 5.91915 6 5.91905C6 5.91895 6 5.91886 6 5.91876C6 5.91866 6 5.91857 6 5.91847C6 5.91837 6 5.91828 6 5.91818C6 5.91808 6 5.91799 6 5.91789C6 5.91779 6 5.91769 6 5.9176C6 5.9175 6 5.9174 6 5.91731C6 5.91721 6 5.91711 6 5.91702C6 5.91692 6 5.91682 6 5.91673C6 5.91663 6 5.91653 6 5.91643C6 5.91634 6 5.91624 6 5.91614C6 5.91605 6 5.91595 6 5.91585C6 5.91575 6 5.91566 6 5.91556C6 5.91546 6 5.91537 6 5.91527C6 5.91517 6 5.91507 6 5.91498C6 5.91488 6 5.91478 6 5.91469C6 5.91459 6 5.91449 6 5.91439C6 5.9143 6 5.9142 6 5.9141C6 5.91401 6 5.91391 6 5.91381C6 5.91371 6 5.91362 6 5.91352C6 5.91342 6 5.91332 6 5.91323C6 5.91313 6 5.91303 6 5.91293C6 5.91284 6 5.91274 6 5.91264C6 5.91254 6 5.91245 6 5.91235C6 5.91225 6 5.91215 6 5.91206C6 5.91196 6 5.91186 6 5.91177C6 5.91167 6 5.91157 6 5.91147C6 5.91138 6 5.91128 6 5.91118C6 5.91108 6 5.91099 6 5.91089C6 5.91079 6 5.91069 6 5.9106C6 5.9105 6 5.9104 6 5.9103C6 5.91021 6 5.91011 6 5.91001C6 5.90991 6 5.90981 6 5.90972C6 5.90962 6 5.90952 6 5.90942C6 5.90933 6 5.90923 6 5.90913C6 5.90903 6 5.90894 6 5.90884C6 5.90874 6 5.90864 6 5.90855C6 5.90845 6 5.90835 6 5.90825C6 5.90816 6 5.90806 6 5.90796C6 5.90786 6 5.90776 6 5.90767C6 5.90757 6 5.90747 6 5.90737C6 5.90728 6 5.90718 6 5.90708C6 5.90698 6 5.90689 6 5.90679C6 5.90669 6 5.90659 6 5.9065C6 5.9064 6 5.9063 6 5.9062C6 5.9061 6 5.90601 6 5.90591C6 5.90581 6 5.90571 6 5.90562C6 5.90552 6 5.90542 6 5.90532C6 5.90523 6 5.90513 6 5.90503C6 5.90493 6 5.90483 6 5.90474C6 5.90464 6 5.90454 6 5.90444C6 5.90435 6 5.90425 6 5.90415C6 5.90405 6 5.90396 6 5.90386C6 5.90376 6 5.90366 6 5.90357C6 5.90347 6 5.90337 6 5.90327C6 5.90317 6 5.90308 6 5.90298C6 5.90288 6 5.90278 6 5.90269C6 5.90259 6 5.90249 6 5.90239C6 5.9023 6 5.9022 6 5.9021C6 5.902 6 5.90191 6 5.90181C6 5.90171 6 5.90161 6 5.90152C6 5.90142 6 5.90132 6 5.90122C6 5.90113 6 5.90103 6 5.90093C6 5.90083 6 5.90074 6 5.90064C6 5.90054 6 5.90044 6 5.90035C6 5.90025 6 5.90015 6 5.90005C6 5.89996 6 5.89986 6 5.89976C6 5.89966 6 5.89957 6 5.89947C6 5.89937 6 5.89927 6 5.89918C6 5.89908 6 5.89898 6 5.89888C6 5.89879 6 5.89869 6 5.89859C6 5.89849 6 5.8984 6 5.8983C6 5.8982 6 5.8981 6 5.89801C6 5.89791 6 5.89781 6 5.89772C6 5.89762 6 5.89752 6 5.89742C6 5.89733 6 5.89723 6 5.89713C6 5.89703 6 5.89694 6 5.89684C6 5.89674 6 5.89665 6 5.89655C6 5.89645 6 5.89635 6 5.89626C6 5.89616 6 5.89606 6 5.89597C6 5.89587 6 5.89577 6 5.89567C6 5.89558 6 5.89548 6 5.89538C6 5.89529 6 5.89519 6 5.89509C6 5.895 6 5.8949 6 5.8948C6 5.89471 6 5.89461 6 5.89451C6 5.89441 6 5.89432 6 5.89422C6 5.89412 6 5.89403 6 5.89393C6 5.89383 6 5.89374 6 5.89364C6 5.89354 6 5.89345 6 5.89335C6 5.89325 6 5.89316 6 5.89306C6 5.89296 6 5.89287 6 5.89277C6 5.89267 6 5.89258 6 5.89248C6 5.89238 6 5.89229 6 5.89219C6 5.89209 6 5.892 6 5.8919C6 5.8918 6 5.89171 6 5.89161C6 5.89151 6 5.89142 6 5.89132C6 5.89122 6 5.89113 6 5.89103C6 5.89094 6 5.89084 6 5.89074C6 5.89065 6 5.89055 6 5.89045C6 5.89036 6 5.89026 6 5.89017C6 5.89007 6 5.88997 6 5.88988C6 5.88978 6 5.88968 6 5.88959C6 5.88949 6 5.8894 6 5.8893C6 5.8892 6 5.88911 6 5.88901C6 5.88892 6 5.88882 6 5.88872C6 5.88863 6 5.88853 6 5.88844C6 5.88834 6 5.88824 6 5.88815C6 5.88805 6 5.88796 6 5.88786C6 5.88777 6 5.88767 6 5.88757C6 5.88748 6 5.88738 6 5.88729C6 5.88719 6 5.8871 6 5.887C6 5.8869 6 5.88681 6 5.88671C6 5.88662 6 5.88652 6 5.88643C6 5.88633 6 5.88624 6 5.88614C6 5.88605 6 5.88595 6 5.88585C6 5.88576 6 5.88566 6 5.88557C6 5.88547 6 5.88538 6 5.88528C6 5.88519 6 5.88509 6 5.885C6 5.8849 6 5.88481 6 5.88471C6 5.88462 6 5.88452 6 5.88443C6 5.88433 6 5.88424 6 5.88414C6 5.88405 6 5.88395 6 5.88386C6 5.88376 6 5.88367 6 5.88357C6 5.88348 6 5.88338 6 5.88329C6 5.8832 6 5.8831 6 5.88301C6 5.88291 6 5.88282 6 5.88272C6 5.88263 6 5.88253 6 5.88244C6 5.88234 6 5.88225 6 5.88216C6 5.88206 6 5.88197 6 5.88187C6 5.88178 6 5.88168 6 5.88159C6 5.8815 6 5.8814 6 5.88131C6 5.88121 6 5.88112 6 5.88103C6 5.88093 6 5.88084 6 5.88074C6 5.88065 6 5.88056 6 5.88046C6 5.88037 6 5.88028 6 5.88018C6 5.88009 6 5.87999 6 5.8799C6 5.87981 6 5.87971 6 5.87962C6 5.87953 6 5.87943 6 5.87934C6 5.87925 6 5.87915 6 5.87906C6 5.87897 6 5.87887 6 5.87878C6 5.87869 6 5.87859 6 5.8785C6 5.87841 6 5.87831 6 5.87822C6 5.87813 6 5.87803 6 5.87794C6 5.87785 6 5.87775 6 5.87766C6 5.87757 6 5.87748 6 5.87738C6 5.87729 6 5.8772 6 5.8771C6 5.87701 6 5.87692 6 5.87683C6 5.87673 6 5.87664 6 5.87655C6 5.87646 6 5.87636 6 5.87627C6 5.87618 6 5.87609 6 5.87599C6 5.8759 6 5.87581 6 5.87572C6 5.87563 6 5.87553 6 5.87544C6 5.87535 6 5.87526 6 5.87517C6 5.87507 6 5.87498 6 5.87489C6 5.8748 6 5.87471 6 5.87461C6 5.87452 6 5.87443 6 5.87434C6 5.87425 6 5.87416 6 5.87406C6 5.87397 6 5.87388 6 5.87379C6 5.8737 6 5.87361 6 5.87352C6 5.87342 6 5.87333 6 5.87324C6 5.87315 6 5.87306 6 5.87297C6 5.87288 6 5.87279 6 5.8727C6 5.8726 6 5.87251 6 5.87242C6 5.87233 6 5.87224 6 5.87215C6 5.87206 6 5.87197 6 5.87188C6 5.87179 6 5.8717 6 5.87161C6 5.87152 6 5.87143 6 5.87134C6 5.87124 6 5.87115 6 5.87106C6 5.87097 6 5.87088 6 5.87079C6 5.8707 6 5.87061 6 5.87052C6 5.87043 6 5.87034 6 5.87025C6 5.87016 6 5.87007 6 5.86998C6 5.86989 6 5.8698 6 5.86971C6 5.86962 6 5.86954 6 5.86945C6 5.86936 6 5.86927 6 5.86918C6 5.86909 6 5.869 6 5.86891C6 5.86882 6 5.86873 6 5.86864C6 5.86855 6 5.86846 6 5.86837C6 5.86829 6 5.8682 6 5.86811C6 5.86802 6 5.86793 6 5.86784C6 5.86775 6 5.86766 6 5.86758C6 5.86749 6 5.8674 6 5.86731C6 5.86722 6 5.86713 6 5.86704C6 5.86696 6 5.86687 6 5.86678C6 5.86669 6 5.8666 6 5.86652C6 5.86643 6 5.86634 6 5.86625C6 5.86616 6 5.86608 6 5.86599C6 5.8659 6 5.86581 6 5.86572C6 5.86564 6 5.86555 6 5.86546C6 5.86537 6 5.86529 6 5.8652C6 5.86511 6 5.86502 6 5.86494C6 5.86485 6 5.86476 6 5.86468C6 5.86459 6 5.8645 6 5.86441C6 5.86433 6 5.86424 6 5.86415C6 5.86407 6 5.86398 6 5.86389C6 5.86381 6 5.86372 6 5.86363C6 5.86355 6 5.86346 6 5.86338C6 5.86329 6 5.8632 6 5.86312C6 5.86303 6 5.86294 6 5.86286C6 5.86277 6 5.86269 6 5.8626C6 5.86251 6 5.86243 6 5.86234C6 5.86226 6 5.86217 6 5.86209C6 5.862 6 5.86191 6 5.86183C6 5.86174 6 5.86166 6 5.86157C6 5.86149 6 5.8614 6 5.86132C6 5.86123 6 5.86115 6 5.86106C6 5.86098 6 5.86089 6 5.86081C6 5.86072 6 5.86064 6 5.86055C6 5.86047 6 5.86038 6 5.8603C6 5.86022 6 5.86013 6 5.86005C6 5.85996 6 5.85988 6 5.85979C6 5.85971 6 5.85963 6 5.85954C6 5.85946 6 5.85937 6 5.85929C6 5.85921 6 5.85912 6 5.85904C6 5.85896 6 5.85887 6 5.85879C6 5.85871 6 5.85862 6 5.85854C6 5.85845 6 5.85837 6 5.85829C6 5.85821 6 5.85812 6 5.85804C6 5.85796 6 5.85787 6 5.85779C6 5.85771 6 5.85763 6 5.85754C6 5.85746 6 5.85738 6 5.8573C6 5.85721 6 5.85713 6 5.85705C6 5.85697 6 5.85688 6 5.8568C6 5.85672 6 5.85664 6 5.85656C6 5.85647 6 5.85639 6 5.85631C6 5.85623 6 5.85615 6 5.85607C6 5.85598 6 5.8559 6 5.85582C6 5.85574 6 5.85566 6 5.85558C6 5.8555 6 5.85541 6 5.85533C6 5.85525 6 5.85517 6 5.85509C6 5.85501 6 5.85493 6 5.85485C6 5.85477 6 5.85469 6 5.85461C6 5.85453 6 5.85445 6 5.85437C6 5.85428 6 5.8542 6 5.85412C6 5.85404 6 5.85396 6 5.85388C6 5.8538 6 5.85372 6 5.85365C6 5.85357 6 5.85349 6 5.85341C6 5.85333 6 5.85325 6 5.85317C6 5.85309 6 5.85301 6 5.85293C6 5.85285 6 5.85277 6 5.85269C6 5.85261 6 5.85253 6 5.85246C6 5.85238 6 5.8523 6 5.85222C6 5.85214 6 5.85206 6 5.85198C6 5.85191 6 5.85183 6 5.85175C6 5.85167 6 5.85159 6 5.85152C6 5.85144 6 5.85136 6 5.85128C6 5.8512 6 5.85113 6 5.85105C6 5.85097 6 5.85089 6 5.85082C6 5.85074 6 5.85066 6 5.85058C6 5.85051 6 5.85043 6 5.85035C6 5.85028 6 5.8502 6 5.85012C6 5.85005 6 5.84997 6 5.84989C6 5.84982 6 5.84974 6 5.84966C6 5.84959 6 5.84951 6 5.84943C6 5.84936 6 5.84928 6 5.84921C6 5.84913 6 5.84905 6 5.84898C6 5.8489 6 5.84883 6 5.84875C6 5.84868 6 5.8486 6 5.84852C6 5.84845 6 5.84837 6 5.8483C6 5.84822 6 5.84815 6 5.84807C6 5.848 6 5.84792 6 5.84785C6 5.84777 6 5.8477 6 5.84763C6 5.84755 6 5.84748 6 5.8474C6 5.84733 6 5.84725 6 5.84718C6 5.84711 6 5.84703 6 5.84696C6 5.84688 6 5.84681 6 5.84674C6 5.84666 6 5.84659 6 5.84652C6 5.84644 6 5.84637 6 5.8463C6 5.84622 6 5.84615 6 5.84608C6 5.846 6 5.84593 6 5.84586C6 5.84579 6 5.84571 6 5.84564C6 5.84557 6 5.8455 6 5.84542C6 5.84535 6 5.84528 6 5.84521C6 5.84513 6 5.84506 6 5.84499C6 5.84492 6 5.84485 6 5.84478C6 5.8447 6 5.84463 6 5.84456C6 5.84449 6 5.84442 6 5.84435C6 5.84428 6 5.84421 6 5.84413C6 5.84406 6 5.84399 6 5.84392C6 5.84385 6 5.84378 6 5.84371C6 5.84364 6 5.84357 6 5.8435C6 5.84343 6 5.84336 6 5.84329C6 5.84322 6 5.84315 6 5.84308C6 5.84301 6 5.84294 6 5.84287C6 5.8428 6 5.84273 6 5.84266C6 5.84259 6 5.84252 6 5.84245C6 5.84239 6 5.84232 6 5.84225C6 5.84218 6 5.84211 6 5.84204C6 5.84197 6 5.8419 6 5.84184C6 5.84177 6 5.8417 6 5.84163C6 5.84156 6 5.8415 6 5.84143C6 5.84136 6 5.84129 6 5.84122C6 5.84116 6 5.84109 6 5.84102C6 5.84095 6 5.84089 6 5.84082C6 5.84075 6 5.84069 6 5.84062C6 5.84055 6 5.84049 6 5.84042C6 5.84035 6 5.84029 6 5.84022C6 5.84015 6 5.84009 6 5.84002C6 5.83995 6 5.83989 6 5.83982C6 5.83976 6 5.83969 6 5.83963C6 5.83956 6 5.83949 6 5.83943C6 5.83936 6 5.8393 6 5.83923L8 5.83923C8 5.8393 8 5.83936 8 5.83943C8 5.83949 8 5.83956 8 5.83963C8 5.83969 8 5.83976 8 5.83982C8 5.83989 8 5.83995 8 5.84002C8 5.84009 8 5.84015 8 5.84022C8 5.84029 8 5.84035 8 5.84042C8 5.84049 8 5.84055 8 5.84062C8 5.84069 8 5.84075 8 5.84082C8 5.84089 8 5.84095 8 5.84102C8 5.84109 8 5.84116 8 5.84122C8 5.84129 8 5.84136 8 5.84143C8 5.8415 8 5.84156 8 5.84163C8 5.8417 8 5.84177 8 5.84184C8 5.8419 8 5.84197 8 5.84204C8 5.84211 8 5.84218 8 5.84225C8 5.84232 8 5.84239 8 5.84245C8 5.84252 8 5.84259 8 5.84266C8 5.84273 8 5.8428 8 5.84287C8 5.84294 8 5.84301 8 5.84308C8 5.84315 8 5.84322 8 5.84329C8 5.84336 8 5.84343 8 5.8435C8 5.84357 8 5.84364 8 5.84371C8 5.84378 8 5.84385 8 5.84392C8 5.84399 8 5.84406 8 5.84413C8 5.84421 8 5.84428 8 5.84435C8 5.84442 8 5.84449 8 5.84456C8 5.84463 8 5.8447 8 5.84478C8 5.84485 8 5.84492 8 5.84499C8 5.84506 8 5.84513 8 5.84521C8 5.84528 8 5.84535 8 5.84542C8 5.8455 8 5.84557 8 5.84564C8 5.84571 8 5.84579 8 5.84586C8 5.84593 8 5.846 8 5.84608C8 5.84615 8 5.84622 8 5.8463C8 5.84637 8 5.84644 8 5.84652C8 5.84659 8 5.84666 8 5.84674C8 5.84681 8 5.84688 8 5.84696C8 5.84703 8 5.84711 8 5.84718C8 5.84725 8 5.84733 8 5.8474C8 5.84748 8 5.84755 8 5.84763C8 5.8477 8 5.84777 8 5.84785C8 5.84792 8 5.848 8 5.84807C8 5.84815 8 5.84822 8 5.8483C8 5.84837 8 5.84845 8 5.84852C8 5.8486 8 5.84868 8 5.84875C8 5.84883 8 5.8489 8 5.84898C8 5.84905 8 5.84913 8 5.84921C8 5.84928 8 5.84936 8 5.84943C8 5.84951 8 5.84959 8 5.84966C8 5.84974 8 5.84982 8 5.84989C8 5.84997 8 5.85005 8 5.85012C8 5.8502 8 5.85028 8 5.85035C8 5.85043 8 5.85051 8 5.85058C8 5.85066 8 5.85074 8 5.85082C8 5.85089 8 5.85097 8 5.85105C8 5.85113 8 5.8512 8 5.85128C8 5.85136 8 5.85144 8 5.85152C8 5.85159 8 5.85167 8 5.85175C8 5.85183 8 5.85191 8 5.85198C8 5.85206 8 5.85214 8 5.85222C8 5.8523 8 5.85238 8 5.85246C8 5.85253 8 5.85261 8 5.85269C8 5.85277 8 5.85285 8 5.85293C8 5.85301 8 5.85309 8 5.85317C8 5.85325 8 5.85333 8 5.85341C8 5.85349 8 5.85357 8 5.85364C8 5.85372 8 5.8538 8 5.85388C8 5.85396 8 5.85404 8 5.85412C8 5.8542 8 5.85428 8 5.85436C8 5.85445 8 5.85453 8 5.85461C8 5.85469 8 5.85477 8 5.85485C8 5.85493 8 5.85501 8 5.85509C8 5.85517 8 5.85525 8 5.85533C8 5.85541 8 5.8555 8 5.85558C8 5.85566 8 5.85574 8 5.85582C8 5.8559 8 5.85598 8 5.85606C8 5.85615 8 5.85623 8 5.85631C8 5.85639 8 5.85647 8 5.85656C8 5.85664 8 5.85672 8 5.8568C8 5.85688 8 5.85697 8 5.85705C8 5.85713 8 5.85721 8 5.8573C8 5.85738 8 5.85746 8 5.85754C8 5.85763 8 5.85771 8 5.85779C8 5.85787 8 5.85796 8 5.85804C8 5.85812 8 5.85821 8 5.85829C8 5.85837 8 5.85845 8 5.85854C8 5.85862 8 5.85871 8 5.85879C8 5.85887 8 5.85896 8 5.85904C8 5.85912 8 5.85921 8 5.85929C8 5.85937 8 5.85946 8 5.85954C8 5.85963 8 5.85971 8 5.85979C8 5.85988 8 5.85996 8 5.86005C8 5.86013 8 5.86022 8 5.8603C8 5.86038 8 5.86047 8 5.86055C8 5.86064 8 5.86072 8 5.86081C8 5.86089 8 5.86098 8 5.86106C8 5.86115 8 5.86123 8 5.86132C8 5.8614 8 5.86149 8 5.86157C8 5.86166 8 5.86174 8 5.86183C8 5.86191 8 5.862 8 5.86209C8 5.86217 8 5.86226 8 5.86234C8 5.86243 8 5.86251 8 5.8626C8 5.86269 8 5.86277 8 5.86286C8 5.86294 8 5.86303 8 5.86312C8 5.8632 8 5.86329 8 5.86338C8 5.86346 8 5.86355 8 5.86363C8 5.86372 8 5.86381 8 5.86389C8 5.86398 8 5.86407 8 5.86415C8 5.86424 8 5.86433 8 5.86441C8 5.8645 8 5.86459 8 5.86468C8 5.86476 8 5.86485 8 5.86494C8 5.86502 8 5.86511 8 5.8652C8 5.86529 8 5.86537 8 5.86546C8 5.86555 8 5.86564 8 5.86572C8 5.86581 8 5.8659 8 5.86599C8 5.86608 8 5.86616 8 5.86625C8 5.86634 8 5.86643 8 5.86652C8 5.8666 8 5.86669 8 5.86678C8 5.86687 8 5.86696 8 5.86704C8 5.86713 8 5.86722 8 5.86731C8 5.8674 8 5.86749 8 5.86758C8 5.86766 8 5.86775 8 5.86784C8 5.86793 8 5.86802 8 5.86811C8 5.8682 8 5.86829 8 5.86837C8 5.86846 8 5.86855 8 5.86864C8 5.86873 8 5.86882 8 5.86891C8 5.869 8 5.86909 8 5.86918C8 5.86927 8 5.86936 8 5.86945C8 5.86954 8 5.86962 8 5.86971C8 5.8698 8 5.86989 8 5.86998C8 5.87007 8 5.87016 8 5.87025C8 5.87034 8 5.87043 8 5.87052C8 5.87061 8 5.8707 8 5.87079C8 5.87088 8 5.87097 8 5.87106C8 5.87115 8 5.87124 8 5.87134C8 5.87143 8 5.87152 8 5.87161C8 5.8717 8 5.87179 8 5.87188C8 5.87197 8 5.87206 8 5.87215C8 5.87224 8 5.87233 8 5.87242C8 5.87251 8 5.8726 8 5.8727C8 5.87279 8 5.87288 8 5.87297C8 5.87306 8 5.87315 8 5.87324C8 5.87333 8 5.87342 8 5.87352C8 5.87361 8 5.8737 8 5.87379C8 5.87388 8 5.87397 8 5.87406C8 5.87416 8 5.87425 8 5.87434C8 5.87443 8 5.87452 8 5.87461C8 5.87471 8 5.8748 8 5.87489C8 5.87498 8 5.87507 8 5.87517C8 5.87526 8 5.87535 8 5.87544C8 5.87553 8 5.87563 8 5.87572C8 5.87581 8 5.8759 8 5.87599C8 5.87609 8 5.87618 8 5.87627C8 5.87636 8 5.87646 8 5.87655C8 5.87664 8 5.87673 8 5.87683C8 5.87692 8 5.87701 8 5.8771C8 5.8772 8 5.87729 8 5.87738C8 5.87748 8 5.87757 8 5.87766C8 5.87775 8 5.87785 8 5.87794C8 5.87803 8 5.87813 8 5.87822C8 5.87831 8 5.87841 8 5.8785C8 5.87859 8 5.87869 8 5.87878C8 5.87887 8 5.87897 8 5.87906C8 5.87915 8 5.87925 8 5.87934C8 5.87943 8 5.87953 8 5.87962C8 5.87971 8 5.87981 8 5.8799C8 5.87999 8 5.88009 8 5.88018C8 5.88028 8 5.88037 8 5.88046C8 5.88056 8 5.88065 8 5.88074C8 5.88084 8 5.88093 8 5.88103C8 5.88112 8 5.88121 8 5.88131C8 5.8814 8 5.8815 8 5.88159C8 5.88168 8 5.88178 8 5.88187C8 5.88197 8 5.88206 8 5.88216C8 5.88225 8 5.88234 8 5.88244C8 5.88253 8 5.88263 8 5.88272C8 5.88282 8 5.88291 8 5.88301C8 5.8831 8 5.8832 8 5.88329C8 5.88338 8 5.88348 8 5.88357C8 5.88367 8 5.88376 8 5.88386C8 5.88395 8 5.88405 8 5.88414C8 5.88424 8 5.88433 8 5.88443C8 5.88452 8 5.88462 8 5.88471C8 5.88481 8 5.8849 8 5.885C8 5.88509 8 5.88519 8 5.88528C8 5.88538 8 5.88547 8 5.88557C8 5.88566 8 5.88576 8 5.88585C8 5.88595 8 5.88605 8 5.88614C8 5.88624 8 5.88633 8 5.88643C8 5.88652 8 5.88662 8 5.88671C8 5.88681 8 5.8869 8 5.887C8 5.8871 8 5.88719 8 5.88729C8 5.88738 8 5.88748 8 5.88757C8 5.88767 8 5.88777 8 5.88786C8 5.88796 8 5.88805 8 5.88815C8 5.88824 8 5.88834 8 5.88844C8 5.88853 8 5.88863 8 5.88872C8 5.88882 8 5.88892 8 5.88901C8 5.88911 8 5.8892 8 5.8893C8 5.8894 8 5.88949 8 5.88959C8 5.88968 8 5.88978 8 5.88988C8 5.88997 8 5.89007 8 5.89016C8 5.89026 8 5.89036 8 5.89045C8 5.89055 8 5.89065 8 5.89074C8 5.89084 8 5.89094 8 5.89103C8 5.89113 8 5.89122 8 5.89132C8 5.89142 8 5.89151 8 5.89161C8 5.89171 8 5.8918 8 5.8919C8 5.892 8 5.89209 8 5.89219C8 5.89229 8 5.89238 8 5.89248C8 5.89258 8 5.89267 8 5.89277C8 5.89287 8 5.89296 8 5.89306C8 5.89316 8 5.89325 8 5.89335C8 5.89345 8 5.89354 8 5.89364C8 5.89374 8 5.89383 8 5.89393C8 5.89403 8 5.89412 8 5.89422C8 5.89432 8 5.89441 8 5.89451C8 5.89461 8 5.8947 8 5.8948C8 5.8949 8 5.895 8 5.89509C8 5.89519 8 5.89529 8 5.89538C8 5.89548 8 5.89558 8 5.89567C8 5.89577 8 5.89587 8 5.89597C8 5.89606 8 5.89616 8 5.89626C8 5.89635 8 5.89645 8 5.89655C8 5.89665 8 5.89674 8 5.89684C8 5.89694 8 5.89703 8 5.89713C8 5.89723 8 5.89733 8 5.89742C8 5.89752 8 5.89762 8 5.89772C8 5.89781 8 5.89791 8 5.89801C8 5.8981 8 5.8982 8 5.8983C8 5.8984 8 5.89849 8 5.89859C8 5.89869 8 5.89879 8 5.89888C8 5.89898 8 5.89908 8 5.89918C8 5.89927 8 5.89937 8 5.89947C8 5.89957 8 5.89966 8 5.89976C8 5.89986 8 5.89996 8 5.90005C8 5.90015 8 5.90025 8 5.90035C8 5.90044 8 5.90054 8 5.90064C8 5.90074 8 5.90083 8 5.90093C8 5.90103 8 5.90113 8 5.90122C8 5.90132 8 5.90142 8 5.90152C8 5.90161 8 5.90171 8 5.90181C8 5.90191 8 5.902 8 5.9021C8 5.9022 8 5.9023 8 5.90239C8 5.90249 8 5.90259 8 5.90269C8 5.90278 8 5.90288 8 5.90298C8 5.90308 8 5.90317 8 5.90327C8 5.90337 8 5.90347 8 5.90357C8 5.90366 8 5.90376 8 5.90386C8 5.90396 8 5.90405 8 5.90415C8 5.90425 8 5.90435 8 5.90444C8 5.90454 8 5.90464 8 5.90474C8 5.90483 8 5.90493 8 5.90503C8 5.90513 8 5.90523 8 5.90532C8 5.90542 8 5.90552 8 5.90562C8 5.90571 8 5.90581 8 5.90591C8 5.90601 8 5.9061 8 5.9062C8 5.9063 8 5.9064 8 5.9065C8 5.90659 8 5.90669 8 5.90679C8 5.90689 8 5.90698 8 5.90708C8 5.90718 8 5.90728 8 5.90737C8 5.90747 8 5.90757 8 5.90767C8 5.90776 8 5.90786 8 5.90796C8 5.90806 8 5.90816 8 5.90825C8 5.90835 8 5.90845 8 5.90855C8 5.90864 8 5.90874 8 5.90884C8 5.90894 8 5.90903 8 5.90913C8 5.90923 8 5.90933 8 5.90942C8 5.90952 8 5.90962 8 5.90972C8 5.90981 8 5.90991 8 5.91001C8 5.91011 8 5.91021 8 5.9103C8 5.9104 8 5.9105 8 5.9106C8 5.91069 8 5.91079 8 5.91089C8 5.91099 8 5.91108 8 5.91118C8 5.91128 8 5.91138 8 5.91147C8 5.91157 8 5.91167 8 5.91177C8 5.91186 8 5.91196 8 5.91206C8 5.91215 8 5.91225 8 5.91235C8 5.91245 8 5.91254 8 5.91264C8 5.91274 8 5.91284 8 5.91293C8 5.91303 8 5.91313 8 5.91323C8 5.91332 8 5.91342 8 5.91352C8 5.91362 8 5.91371 8 5.91381C8 5.91391 8 5.914 8 5.9141C8 5.9142 8 5.9143 8 5.91439C8 5.91449 8 5.91459 8 5.91469C8 5.91478 8 5.91488 8 5.91498C8 5.91507 8 5.91517 8 5.91527C8 5.91537 8 5.91546 8 5.91556C8 5.91566 8 5.91575 8 5.91585C8 5.91595 8 5.91605 8 5.91614C8 5.91624 8 5.91634 8 5.91643C8 5.91653 8 5.91663 8 5.91673C8 5.91682 8 5.91692 8 5.91702C8 5.91711 8 5.91721 8 5.91731C8 5.9174 8 5.9175 8 5.9176C8 5.91769 8 5.91779 8 5.91789C8 5.91799 8 5.91808 8 5.91818C8 5.91828 8 5.91837 8 5.91847C8 5.91857 8 5.91866 8 5.91876C8 5.91886 8 5.91895 8 5.91905C8 5.91915 8 5.91924 8 5.91934C8 5.91944 8 5.91953 8 5.91963C8 5.91973 8 5.91982 8 5.91992C8 5.92001 8 5.92011 8 5.92021C8 5.9203 8 5.9204 8 5.9205C8 5.92059 8 5.92069 8 5.92079C8 5.92088 8 5.92098 8 5.92108C8 5.92117 8 5.92127 8 5.92136C8 5.92146 8 5.92156 8 5.92165C8 5.92175 8 5.92185 8 5.92194C8 5.92204 8 5.92213 8 5.92223C8 5.92233 8 5.92242 8 5.92252C8 5.92261 8 5.92271 8 5.92281C8 5.9229 8 5.923 8 5.92309C8 5.92319 8 5.92329 8 5.92338C8 5.92348 8 5.92357 8 5.92367C8 5.92377 8 5.92386 8 5.92396C8 5.92405 8 5.92415 8 5.92424C8 5.92434 8 5.92444 8 5.92453C8 5.92463 8 5.92472 8 5.92482C8 5.92491 8 5.92501 8 5.9251C8 5.9252 8 5.9253 8 5.92539C8 5.92549 8 5.92558 8 5.92568C8 5.92577 8 5.92587 8 5.92596C8 5.92606 8 5.92615 8 5.92625C8 5.92634 8 5.92644 8 5.92653C8 5.92663 8 5.92673 8 5.92682C8 5.92692 8 5.92701 8 5.92711C8 5.9272 8 5.9273 8 5.92739C8 5.92749 8 5.92758 8 5.92767C8 5.92777 8 5.92786 8 5.92796C8 5.92805 8 5.92815 8 5.92824C8 5.92834 8 5.92843 8 5.92853C8 5.92862 8 5.92872 8 5.92881C8 5.92891 8 5.929 8 5.9291C8 5.92919 8 5.92928 8 5.92938C8 5.92947 8 5.92957 8 5.92966C8 5.92976 8 5.92985 8 5.92994C8 5.93004 8 5.93013 8 5.93023C8 5.93032 8 5.93042 8 5.93051C8 5.9306 8 5.9307 8 5.93079C8 5.93089 8 5.93098 8 5.93107C8 5.93117 8 5.93126 8 5.93136C8 5.93145 8 5.93154 8 5.93164C8 5.93173 8 5.93182 8 5.93192C8 5.93201 8 5.9321 8 5.9322C8 5.93229 8 5.93239 8 5.93248C8 5.93257 8 5.93267 8 5.93276C8 5.93285 8 5.93295 8 5.93304C8 5.93313 8 5.93323 8 5.93332C8 5.93341 8 5.93351 8 5.9336C8 5.93369 8 5.93378 8 5.93388C8 5.93397 8 5.93406 8 5.93416C8 5.93425 8 5.93434 8 5.93443C8 5.93453 8 5.93462 8 5.93471C8 5.93481 8 5.9349 8 5.93499C8 5.93508 8 5.93518 8 5.93527C8 5.93536 8 5.93545 8 5.93555C8 5.93564 8 5.93573 8 5.93582C8 5.93592 8 5.93601 8 5.9361C8 5.93619 8 5.93628 8 5.93638C8 5.93647 8 5.93656 8 5.93665C8 5.93674 8 5.93684 8 5.93693C8 5.93702 8 5.93711 8 5.9372C8 5.9373 8 5.93739 8 5.93748C8 5.93757 8 5.93766 8 5.93775C8 5.93784 8 5.93794 8 5.93803C8 5.93812 8 5.93821 8 5.9383C8 5.93839 8 5.93848 8 5.93858C8 5.93867 8 5.93876 8 5.93885C8 5.93894 8 5.93903 8 5.93912C8 5.93921 8 5.9393 8 5.9394C8 5.93949 8 5.93958 8 5.93967C8 5.93976 8 5.93985 8 5.93994C8 5.94003 8 5.94012 8 5.94021C8 5.9403 8 5.94039 8 5.94048C8 5.94057 8 5.94066 8 5.94075C8 5.94084 8 5.94093 8 5.94102C8 5.94111 8 5.9412 8 5.94129C8 5.94138 8 5.94147 8 5.94156C8 5.94165 8 5.94174 8 5.94183C8 5.94192 8 5.94201 8 5.9421C8 5.94219 8 5.94228 8 5.94237C8 5.94246 8 5.94255 8 5.94264C8 5.94273 8 5.94282 8 5.94291C8 5.943 8 5.94309 8 5.94318C8 5.94327 8 5.94335 8 5.94344C8 5.94353 8 5.94362 8 5.94371C8 5.9438 8 5.94389 8 5.94398C8 5.94407 8 5.94415 8 5.94424C8 5.94433 8 5.94442 8 5.94451C8 5.9446 8 5.94469 8 5.94477C8 5.94486 8 5.94495 8 5.94504C8 5.94513 8 5.94521 8 5.9453C8 5.94539 8 5.94548 8 5.94557C8 5.94565 8 5.94574 8 5.94583C8 5.94592 8 5.94601 8 5.94609C8 5.94618 8 5.94627 8 5.94636C8 5.94644 8 5.94653 8 5.94662C8 5.94671 8 5.94679 8 5.94688C8 5.94697 8 5.94705 8 5.94714C8 5.94723 8 5.94732 8 5.9474C8 5.94749 8 5.94758 8 5.94766C8 5.94775 8 5.94784 8 5.94792C8 5.94801 8 5.9481 8 5.94818C8 5.94827 8 5.94836 8 5.94844C8 5.94853 8 5.94862 8 5.9487C8 5.94879 8 5.94887 8 5.94896C8 5.94905 8 5.94913 8 5.94922C8 5.9493 8 5.94939 8 5.94948C8 5.94956 8 5.94965 8 5.94973C8 5.94982 8 5.9499 8 5.94999C8 5.95007 8 5.95016 8 5.95025C8 5.95033 8 5.95042 8 5.9505C8 5.95059 8 5.95067 8 5.95076C8 5.95084 8 5.95093 8 5.95101C8 5.95109 8 5.95118 8 5.95126C8 5.95135 8 5.95143 8 5.95152C8 5.9516 8 5.95169 8 5.95177C8 5.95186 8 5.95194 8 5.95202C8 5.95211 8 5.95219 8 5.95228C8 5.95236 8 5.95244 8 5.95253C8 5.95261 8 5.9527 8 5.95278C8 5.95286 8 5.95295 8 5.95303C8 5.95311 8 5.9532 8 5.95328C8 5.95336 8 5.95345 8 5.95353C8 5.95361 8 5.9537 8 5.95378C8 5.95386 8 5.95394 8 5.95403C8 5.95411 8 5.95419 8 5.95428C8 5.95436 8 5.95444 8 5.95452C8 5.95461 8 5.95469 8 5.95477C8 5.95485 8 5.95493 8 5.95502C8 5.9551 8 5.95518 8 5.95526C8 5.95534 8 5.95543 8 5.95551C8 5.95559 8 5.95567 8 5.95575C8 5.95583 8 5.95592 8 5.956C8 5.95608 8 5.95616 8 5.95624C8 5.95632 8 5.9564 8 5.95648C8 5.95657 8 5.95665 8 5.95673C8 5.95681 8 5.95689 8 5.95697C8 5.95705 8 5.95713 8 5.95721C8 5.95729 8 5.95737 8 5.95745C8 5.95753 8 5.95761 8 5.95769C8 5.95777 8 5.95785 8 5.95793C8 5.95801 8 5.95809 8 5.95817C8 5.95825 8 5.95833 8 5.95841C8 5.95849 8 5.95857 8 5.95865C8 5.95873 8 5.95881 8 5.95889C8 5.95897 8 5.95905 8 5.95913C8 5.9592 8 5.95928 8 5.95936C8 5.95944 8 5.95952 8 5.9596C8 5.95968 8 5.95976 8 5.95983C8 5.95991 8 5.95999 8 5.96007C8 5.96015 8 5.96022 8 5.9603C8 5.96038 8 5.96046 8 5.96054C8 5.96061 8 5.96069 8 5.96077C8 5.96085 8 5.96092 8 5.961C8 5.96108 8 5.96116 8 5.96123C8 5.96131 8 5.96139 8 5.96147C8 5.96154 8 5.96162 8 5.9617C8 5.96177 8 5.96185 8 5.96193C8 5.962 8 5.96208 8 5.96216C8 5.96223 8 5.96231 8 5.96238C8 5.96246 8 5.96254 8 5.96261C8 5.96269 8 5.96276 8 5.96284C8 5.96292 8 5.96299 8 5.96307C8 5.96314 8 5.96322 8 5.96329C8 5.96337 8 5.96344 8 5.96352C8 5.96359 8 5.96367 8 5.96374C8 5.96382 8 5.96389 8 5.96397C8 5.96404 8 5.96412 8 5.96419C8 5.96427 8 5.96434 8 5.96442C8 5.96449 8 5.96456 8 5.96464C8 5.96471 8 5.96479 8 5.96486C8 5.96493 8 5.96501 8 5.96508C8 5.96515 8 5.96523 8 5.9653C8 5.96538 8 5.96545 8 5.96552C8 5.96559 8 5.96567 8 5.96574C8 5.96581 8 5.96589 8 5.96596C8 5.96603 8 5.9661 8 5.96618C8 5.96625 8 5.96632 8 5.96639C8 5.96647 8 5.96654 8 5.96661C8 5.96668 8 5.96676 8 5.96683C8 5.9669 8 5.96697 8 5.96704C8 5.96711 8 5.96719 8 5.96726C8 5.96733 8 5.9674 8 5.96747C8 5.96754 8 5.96761 8 5.96768C8 5.96775 8 5.96783 8 5.9679C8 5.96797 8 5.96804 8 5.96811C8 5.96818 8 5.96825 8 5.96832C8 5.96839 8 5.96846 8 5.96853C8 5.9686 8 5.96867 8 5.96874C8 5.96881 8 5.96888 8 5.96895C8 5.96902 8 5.96909 8 5.96916C8 5.96923 8 5.96929 8 5.96936C8 5.96943 8 5.9695 8 5.96957C8 5.96964 8 5.96971 8 5.96978C8 5.96984 8 5.96991 8 5.96998C8 5.97005 8 5.97012 8 5.97019C8 5.97025 8 5.97032 8 5.97039C8 5.97046 8 5.97053 8 5.97059C8 5.97066 8 5.97073 8 5.9708C8 5.97086 8 5.97093 8 5.971C8 5.97106 8 5.97113 8 5.9712C8 5.97127 8 5.97133 8 5.9714C8 5.97147 8 5.97153 8 5.9716C8 5.97167 8 5.97173 8 5.9718C8 5.97186 8 5.97193 8 5.972C8 5.97206 8 5.97213 8 5.97219C8 5.97226 8 5.97232 8 5.97239C8 5.97245 8 5.97252 8 5.97258L6 5.97258ZM7 5.83923C6 5.83923 6 5.83923 6 5.83923C6 5.83923 6 5.83923 6 5.83923L6 5.83923C6 5.83923 6 5.83923 6 5.83923L6 5.83923C6 5.83923 6 5.83923 6 5.83923L6 5.83923C6 5.83923 6 5.83923 6 5.83923C6 5.83923 6 5.83923 6 5.83923C6 5.83923 6 5.83923 6 5.83923C6 5.83923 6 5.83923 6 5.83923C6 5.83923 6 5.83923 6 5.83923L6 5.83923L6 5.83923C6 5.83923 6 5.83923 6 5.83923L6 5.83923C6 5.83923 6 5.83923 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83922 6 5.83922 6 5.83922C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.83921C6 5.83921 6 5.83921 6 5.8392C6 5.8392 6 5.8392 6 5.8392C6 5.8392 6 5.8392 6 5.8392C6 5.8392 6 5.8392 6 5.8392C6 5.8392 6 5.8392 6 5.8392C6 5.8392 6 5.83919 6 5.83919C6 5.83919 6 5.83919 6 5.83919C6 5.83919 6 5.83919 6 5.83919C6 5.83919 6 5.83919 6 5.83919C6 5.83919 6 5.83919 6 5.83918C6 5.83918 6 5.83918 6 5.83918C6 5.83918 6 5.83918 6 5.83918C6 5.83918 6 5.83918 6 5.83918C6 5.83918 6 5.83918 6 5.83917C6 5.83917 6 5.83917 6 5.83917C6 5.83917 6 5.83917 6 5.83917C6 5.83917 6 5.83917 6 5.83917C6 5.83916 6 5.83916 6 5.83916C6 5.83916 6 5.83916 6 5.83916C6 5.83916 6 5.83916 6 5.83916C6 5.83915 6 5.83915 6 5.83915C6 5.83915 6 5.83915 6 5.83915C6 5.83915 6 5.83915 6 5.83914C6 5.83914 6 5.83914 6 5.83914C6 5.83914 6 5.83914 6 5.83914C6 5.83914 6 5.83913 6 5.83913C6 5.83913 6 5.83913 6 5.83913C6 5.83913 6 5.83913 6 5.83912C6 5.83912 6 5.83912 6 5.83912C6 5.83912 6 5.83912 6 5.83912C6 5.83911 6 5.83911 6 5.83911C6 5.83911 6 5.83911 6 5.83911C6 5.8391 6 5.8391 6 5.8391C6 5.8391 6 5.8391 6 5.8391C6 5.83909 6 5.83909 6 5.83909C6 5.83909 6 5.83909 6 5.83909C6 5.83908 6 5.83908 6 5.83908C6 5.83908 6 5.83908 6 5.83908C6 5.83907 6 5.83907 6 5.83907C6 5.83907 6 5.83907 6 5.83906C6 5.83906 6 5.83906 6 5.83906C6 5.83906 6 5.83905 6 5.83905C6 5.83905 6 5.83905 6 5.83905C6 5.83904 6 5.83904 6 5.83904C6 5.83904 6 5.83904 6 5.83903C6 5.83903 6 5.83903 6 5.83903C6 5.83902 6 5.83902 6 5.83902C6 5.83902 6 5.83902 6 5.83901C6 5.83901 6 5.83901 6 5.83901C6 5.839 6 5.839 6 5.839C6 5.839 6 5.83899 6 5.83899C6 5.83899 6 5.83899 6 5.83899C6 5.83898 6 5.83898 6 5.83898C6 5.83898 6 5.83897 6 5.83897C6 5.83897 6 5.83896 6 5.83896C6 5.83896 6 5.83896 6 5.83895C6 5.83895 6 5.83895 6 5.83895C6 5.83894 6 5.83894 6 5.83894C6 5.83893 6 5.83893 6 5.83893C6 5.83893 6 5.83892 6 5.83892C6 5.83892 6 5.83891 6 5.83891C6 5.83891 6 5.83891 6 5.8389C6 5.8389 6 5.8389 6 5.83889C6 5.83889 6 5.83889 6 5.83888C6 5.83888 6 5.83888 6 5.83888C6 5.83887 6 5.83887 6 5.83887C6 5.83886 6 5.83886 6 5.83886C6 5.83885 6 5.83885 6 5.83885C6 5.83884 6 5.83884 6 5.83884C6 5.83883 6 5.83883 6 5.83883C6 5.83882 6 5.83882 6 5.83881C6 5.83881 6 5.83881 6 5.8388C6 5.8388 6 5.8388 6 5.83879C6 5.83879 6 5.83879 6 5.83878C6 5.83878 6 5.83877 6 5.83877C6 5.83877 6 5.83876 6 5.83876C6 5.83876 6 5.83875 6 5.83875C6 5.83874 6 5.83874 6 5.83874C6 5.83873 6 5.83873 6 5.83872C6 5.83872 6 5.83872 6 5.83871C6 5.83871 6 5.8387 6 5.8387C6 5.8387 6 5.83869 6 5.83869C6 5.83868 6 5.83868 6 5.83868C6 5.83867 6 5.83867 6 5.83866C6 5.83866 6 5.83865 6 5.83865C6 5.83864 6 5.83864 6 5.83864C6 5.83863 6 5.83863 6 5.83862C6 5.83862 6 5.83861 6 5.83861C6 5.8386 6 5.8386 6 5.83859C6 5.83859 6 5.83859 6 5.83858C6 5.83858 6 5.83857 6 5.83857C6 5.83856 6 5.83856 6 5.83855C6 5.83855 6 5.83854 6 5.83854C6 5.83853 6 5.83853 6 5.83852C6 5.83852 6 5.83851 6 5.83851C6 5.8385 6 5.8385 6 5.83849C6 5.83849 6 5.83848 6 5.83848C6 5.83847 6 5.83847 6 5.83846C6 5.83845 6 5.83845 6 5.83844C6 5.83844 6 5.83843 6 5.83843C6 5.83842 6 5.83842 6 5.83841C6 5.83841 6 5.8384 6 5.8384C6 5.83839 6 5.83838 6 5.83838C6 5.83837 6 5.83837 6 5.83836C6 5.83836 6 5.83835 6 5.83834C6 5.83834 6 5.83833 6 5.83833C6 5.83832 6 5.83831 6 5.83831C6 5.8383 6 5.8383 6 5.83829C6 5.83828 6 5.83828 6 5.83827C6 5.83827 6 5.83826 6 5.83825C6 5.83825 6 5.83824 6 5.83824C6 5.83823 6 5.83822 6 5.83822C6 5.83821 6 5.8382 6 5.8382C6 5.83819 6 5.83818 6 5.83818C6 5.83817 6 5.83816 6 5.83816C6 5.83815 6 5.83814 6 5.83814C6 5.83813 6 5.83812 6 5.83812C6 5.83811 6 5.8381 6 5.8381C6 5.83809 6 5.83808 6 5.83808C6 5.83807 6 5.83806 6 5.83806C6 5.83805 6 5.83804 6 5.83803C6 5.83803 6 5.83802 6 5.83801C6 5.83801 6 5.838 6 5.83799C6 5.83798 6 5.83798 6 5.83797C6 5.83796 6 5.83795 6 5.83795C6 5.83794 6 5.83793 6 5.83792C6 5.83792 6 5.83791 6 5.8379C6 5.83789 6 5.83789 6 5.83788C6 5.83787 6 5.83786 6 5.83786C6 5.83785 6 5.83784 6 5.83783C6 5.83782 6 5.83782 6 5.83781C6 5.8378 6 5.83779 6 5.83778C6 5.83778 6 5.83777 6 5.83776C6 5.83775 6 5.83774 6 5.83774C6 5.83773 6 5.83772 6 5.83771C6 5.8377 6 5.83769 6 5.83769C6 5.83768 6 5.83767 6 5.83766C6 5.83765 6 5.83764 6 5.83764C6 5.83763 6 5.83762 6 5.83761C6 5.8376 6 5.83759 6 5.83758C6 5.83757 6 5.83757 6 5.83756C6 5.83755 6 5.83754 6 5.83753C6 5.83752 6 5.83751 6 5.8375C6 5.83749 6 5.83748 6 5.83748C6 5.83747 6 5.83746 6 5.83745C6 5.83744 6 5.83743 6 5.83742C6 5.83741 6 5.8374 6 5.83739C6 5.83738 6 5.83737 6 5.83736C6 5.83735 6 5.83734 6 5.83733C6 5.83732 6 5.83731 6 5.83731C6 5.8373 6 5.83729 6 5.83728C6 5.83727 6 5.83726 6 5.83725C6 5.83724 6 5.83723 6 5.83722C6 5.83721 6 5.8372 6 5.83719C6 5.83718 6 5.83717 6 5.83716C6 5.83715 6 5.83714 6 5.83712C6 5.83711 6 5.8371 6 5.83709C6 5.83708 6 5.83707 6 5.83706C6 5.83705 6 5.83704 6 5.83703C6 5.83702 6 5.83701 6 5.837C6 5.83699 6 5.83698 6 5.83697C6 5.83695 6 5.83694 6 5.83693C6 5.83692 6 5.83691 6 5.8369C6 5.83689 6 5.83688 6 5.83687C6 5.83686 6 5.83684 6 5.83683C6 5.83682 6 5.83681 6 5.8368C6 5.83679 6 5.83678 6 5.83676C6 5.83675 6 5.83674 6 5.83673C6 5.83672 6 5.83671 6 5.8367C6 5.83668 6 5.83667 6 5.83666C6 5.83665 6 5.83664 6 5.83662C6 5.83661 6 5.8366 6 5.83659C6 5.83658 6 5.83656 6 5.83655C6 5.83654 6 5.83653 6 5.83652C6 5.8365 6 5.83649 6 5.83648C6 5.83647 6 5.83645 6 5.83644C6 5.83643 6 5.83642 6 5.8364C6 5.83639 6 5.83638 6 5.83637C6 5.83635 6 5.83634 6 5.83633C6 5.83631 6 5.8363 6 5.83629C6 5.83628 6 5.83626 6 5.83625C6 5.83624 6 5.83622 6 5.83621C6 5.8362 6 5.83618 6 5.83617C6 5.83616 6 5.83615 6 5.83613C6 5.83612 6 5.83611 6 5.83609C6 5.83608 6 5.83606 6 5.83605C6 5.83604 6 5.83602 6 5.83601C6 5.836 6 5.83598 6 5.83597C6 5.83595 6 5.83594 6 5.83593C6 5.83591 6 5.8359 6 5.83588C6 5.83587 6 5.83586 6 5.83584C6 5.83583 6 5.83581 6 5.8358C6 5.83579 6 5.83577 6 5.83576C6 5.83574 6 5.83573 6 5.83571C6 5.8357 6 5.83568 6 5.83567C6 5.83565 6 5.83564 6 5.83562C6 5.83561 6 5.8356 6 5.83558C6 5.83557 6 5.83555 6 5.83554C6 5.83552 6 5.83551 6 5.83549C6 5.83548 6 5.83546 6 5.83544C6 5.83543 6 5.83541 6 5.8354C6 5.83538 6 5.83537 6 5.83535C6 5.83534 6 5.83532 6 5.83531C6 5.83529 6 5.83527 6 5.83526C6 5.83524 6 5.83523 6 5.83521C6 5.83519 6 5.83518 6 5.83516C6 5.83515 6 5.83513 6 5.83511C6 5.8351 6 5.83508 6 5.83507C6 5.83505 6 5.83503 6 5.83502C6 5.835 6 5.83498 6 5.83497C6 5.83495 6 5.83493 6 5.83492C6 5.8349 6 5.83488 6 5.83487C6 5.83485 6 5.83483 6 5.83482C6 5.8348 6 5.83478 6 5.83477C6 5.83475 6 5.83473 6 5.83471C6 5.8347 6 5.83468 6 5.83466C6 5.83465 6 5.83463 6 5.83461C6 5.83459 6 5.83458 6 5.83456C6 5.83454 6 5.83452 6 5.83451C6 5.83449 6 5.83447 6 5.83445C6 5.83443 6 5.83442 6 5.8344C6 5.83438 6 5.83436 6 5.83434C6 5.83433 6 5.83431 6 5.83429C6 5.83427 6 5.83425 6 5.83423C6 5.83422 6 5.8342 6 5.83418C6 5.83416 6 5.83414 6 5.83412C6 5.83411 6 5.83409 6 5.83407C6 5.83405 6 5.83403 6 5.83401C6 5.83399 6 5.83397 6 5.83395C6 5.83393 6 5.83392 6 5.8339C6 5.83388 6 5.83386 6 5.83384C6 5.83382 6 5.8338 6 5.83378C6 5.83376 6 5.83374 6 5.83372C6 5.8337 6 5.83368 6 5.83366C6 5.83364 6 5.83362 6 5.8336C6 5.83358 6 5.83356 6 5.83354C6 5.83352 6 5.8335 6 5.83348C6 5.83346 6 5.83344 6 5.83342C6 5.8334 6 5.83338 6 5.83336C6 5.83334 6 5.83332 6 5.8333C6 5.83328 6 5.83326 6 5.83324C6 5.83322 6 5.8332 6 5.83318C6 5.83315 6 5.83313 6 5.83311C6 5.83309 6 5.83307 6 5.83305C6 5.83303 6 5.83301 6 5.83299C6 5.83296 6 5.83294 6 5.83292C6 5.8329 6 5.83288 6 5.83286C6 5.83283 6 5.83281 6 5.83279C6 5.83277 6 5.83275 6 5.83273C6 5.8327 6 5.83268 6 5.83266C6 5.83264 6 5.83262 6 5.83259C6 5.83257 6 5.83255 6 5.83253C6 5.8325 6 5.83248 6 5.83246C6 5.83244 6 5.83241 6 5.83239C6 5.83237 6 5.83235 6 5.83232C6 5.8323 6 5.83228 6 5.83226C6 5.83223 6 5.83221 6 5.83219C6 5.83216 6 5.83214 6 5.83212C6 5.83209 6 5.83207 6 5.83205C6 5.83202 6 5.832 6 5.83198C6 5.83195 6 5.83193 6 5.83191C6 5.83188 6 5.83186 6 5.83183C6 5.83181 6 5.83179 6 5.83176C6 5.83174 6 5.83171 6 5.83169C6 5.83167 6 5.83164 6 5.83162C6 5.83159 6 5.83157 6 5.83154C6 5.83152 6 5.83149 6 5.83147C6 5.83144 6 5.83142 6 5.8314C6 5.83137 6 5.83135 6 5.83132C6 5.8313 6 5.83127 6 5.83125C6 5.83122 6 5.8312 6 5.83117C6 5.83115 6 5.83112 6 5.83109C6 5.83107 6 5.83104 6 5.83102C6 5.83099 6 5.83097 6 5.83094C6 5.83091 6 5.83089 6 5.83086C6 5.83084 6 5.83081 6 5.83079C6 5.83076 6 5.83073 6 5.83071C6 5.83068 6 5.83065 6 5.83063C6 5.8306 6 5.83057 6 5.83055C6 5.83052 6 5.8305 6 5.83047C6 5.83044 6 5.83041 6 5.83039C6 5.83036 6 5.83033 6 5.83031C6 5.83028 6 5.83025 6 5.83023C6 5.8302 6 5.83017 6 5.83014C6 5.83012 6 5.83009 6 5.83006C6 5.83003 6 5.83001 6 5.82998C6 5.82995 6 5.82992 6 5.82989C6 5.82987 6 5.82984 6 5.82981C6 5.82978 6 5.82976 6 5.82973C6 5.8297 6 5.82967 6 5.82964C6 5.82961 6 5.82958 6 5.82956C6 5.82953 6 5.8295 6 5.82947C6 5.82944 6 5.82941 6 5.82938C6 5.82936 6 5.82933 6 5.8293C6 5.82927 6 5.82924 6 5.82921C6 5.82918 6 5.82915 6 5.82912C6 5.82909 6 5.82906 6 5.82903C6 5.829 6 5.82897 6 5.82894C6 5.82891 6 5.82888 6 5.82886C6 5.82883 6 5.8288 6 5.82877C6 5.82874 6 5.82871 6 5.82867C6 5.82864 6 5.82861 6 5.82858C6 5.82855 6 5.82852 6 5.82849C6 5.82846 6 5.82843 6 5.8284C6 5.82837 6 5.82834 6 5.82831C6 5.82828 6 5.82825 6 5.82821C6 5.82818 6 5.82815 6 5.82812C6 5.82809 6 5.82806 6 5.82803C6 5.828 6 5.82796 6 5.82793C6 5.8279 6 5.82787 6 5.82784C6 5.8278 6 5.82777 6 5.82774C6 5.82771 6 5.82768 6 5.82764C6 5.82761 6 5.82758 6 5.82755C6 5.82752 6 5.82748 6 5.82745C6 5.82742 6 5.82739 6 5.82735C6 5.82732 6 5.82729 6 5.82725C6 5.82722 6 5.82719 6 5.82715C6 5.82712 6 5.82709 6 5.82706C6 5.82702 6 5.82699 6 5.82696C6 5.82692 6 5.82689 6 5.82685C6 5.82682 6 5.82679 6 5.82675C6 5.82672 6 5.82669 6 5.82665C6 5.82662 6 5.82658 6 5.82655C6 5.82651 6 5.82648 6 5.82645C6 5.82641 6 5.82638 6 5.82634C6 5.82631 6 5.82627 6 5.82624C6 5.8262 6 5.82617 6 5.82613C6 5.8261 6 5.82606 6 5.82603C6 5.82599 6 5.82596 6 5.82592C6 5.82589 6 5.82585 6 5.82582C6 5.82578 6 5.82575 6 5.82571C6 5.82568 6 5.82564 6 5.8256C6 5.82557 6 5.82553 6 5.8255C6 5.82546 6 5.82542 6 5.82539C6 5.82535 6 5.82531 6 5.82528C6 5.82524 6 5.82521 6 5.82517C6 5.82513 6 5.8251 6 5.82506C6 5.82502 6 5.82498 6 5.82495C6 5.82491 6 5.82487 6 5.82484C6 5.8248 6 5.82476 6 5.82472C6 5.82469 6 5.82465 6 5.82461C6 5.82457 6 5.82454 6 5.8245C6 5.82446 6 5.82442 6 5.82439C6 5.82435 6 5.82431 6 5.82427C6 5.82423 6 5.82419 6 5.82416C6 5.82412 6 5.82408 6 5.82404C6 5.824 6 5.82396 6 5.82393C6 5.82389 6 5.82385 6 5.82381C6 5.82377 6 5.82373 6 5.82369C6 5.82365 6 5.82361 6 5.82357C6 5.82353 6 5.82349 6 5.82346C6 5.82342 6 5.82338 6 5.82334C6 5.8233 6 5.82326 6 5.82322C6 5.82318 6 5.82314 6 5.8231C6 5.82306 6 5.82302 6 5.82298C6 5.82294 6 5.8229 6 5.82285C6 5.82281 6 5.82277 6 5.82273C6 5.82269 6 5.82265 6 5.82261C6 5.82257 6 5.82253 6 5.82249C6 5.82245 6 5.8224 6 5.82236C6 5.82232 6 5.82228 6 5.82224C6 5.8222 6 5.82216 6 5.82211C6 5.82207 6 5.82203 6 5.82199C6 5.82195 6 5.8219 6 5.82186C6 5.82182 6 5.82178 6 5.82174C6 5.82169 6 5.82165 6 5.82161C6 5.82157 6 5.82152 6 5.82148C6 5.82144 6 5.82139 6 5.82135C6 5.82131 6 5.82127 6 5.82122C6 5.82118 6 5.82114 6 5.82109C6 5.82105 6 5.82101 6 5.82096C6 5.82092 6 5.82087 6 5.82083C6 5.82079 6 5.82074 6 5.8207C6 5.82065 6 5.82061 6 5.82057C6 5.82052 6 5.82048 6 5.82043C6 5.82039 6 5.82034 6 5.8203C6 5.82026 6 5.82021 6 5.82017C6 5.82012 6 5.82008 6 5.82003C6 5.81999 6 5.81994 6 5.8199C6 5.81985 6 5.8198 6 5.81976C6 5.81971 6 5.81967 6 5.81962C6 5.81958 6 5.81953 6 5.81948C6 5.81944 6 5.81939 6 5.81935C6 5.8193 6 5.81925 6 5.81921C6 5.81916 6 5.81911 6 5.81907C6 5.81902 6 5.81898 6 5.81893C6 5.81888 6 5.81883 6 5.81879C6 5.81874 6 5.81869 6 5.81865C6 5.8186 6 5.81855 6 5.8185C6 5.81846 6 5.81841 6 5.81836C6 5.81831 6 5.81827 6 5.81822C6 5.81817 6 5.81812 6 5.81807C6 5.81803 6 5.81798 6 5.81793C6 5.81788 6 5.81783 6 5.81778C6 5.81774 6 5.81769 6 5.81764C6 5.81759 6 5.81754 6 5.81749C6 5.81744 6 5.81739 6 5.81734C6 5.8173 6 5.81725 6 5.8172C6 5.81715 6 5.8171 6 5.81705C6 5.817 6 5.81695 6 5.8169C6 5.81685 6 5.8168 6 5.81675C6 5.8167 6 5.81665 6 5.8166C6 5.81655 6 5.8165 6 5.81645C6 5.8164 6 5.81635 6 5.8163C6 5.81624 6 5.81619 6 5.81614C6 5.81609 6 5.81604 6 5.81599C6 5.81594 6 5.81589 6 5.81584C6 5.81578 6 5.81573 6 5.81568C6 5.81563 6 5.81558 6 5.81553C6 5.81547 6 5.81542 6 5.81537C6 5.81532 6 5.81527 6 5.81521C6 5.81516 6 5.81511 6 5.81506C6 5.815 6 5.81495 6 5.8149C6 5.81485 6 5.81479 6 5.81474C6 5.81469 6 5.81463 6 5.81458C6 5.81453 6 5.81447 6 5.81442C6 5.81437 6 5.81431 6 5.81426C6 5.81421 6 5.81415 6 5.8141C6 5.81404 6 5.81399 6 5.81394C6 5.81388 6 5.81383 6 5.81377C6 5.81372 6 5.81366 6 5.81361C6 5.81355 6 5.8135 6 5.81344C6 5.81339 6 5.81333 6 5.81328C6 5.81322 6 5.81317 6 5.81311C6 5.81306 6 5.813 6 5.81295C6 5.81289 6 5.81284 6 5.81278C6 5.81272 6 5.81267 6 5.81261C6 5.81256 6 5.8125 6 5.81244C6 5.81239 6 5.81233 6 5.81228C6 5.81222 6 5.81216 6 5.81211C6 5.81205 6 5.81199 6 5.81193C6 5.81188 6 5.81182 6 5.81176C6 5.81171 6 5.81165 6 5.81159C6 5.81153 6 5.81148 6 5.81142C6 5.81136 6 5.8113 6 5.81125C6 5.81119 6 5.81113 6 5.81107C6 5.81101 6 5.81095 6 5.8109C6 5.81084 6 5.81078 6 5.81072C6 5.81066 6 5.8106 6 5.81054C6 5.81049 6 5.81043 6 5.81037C6 5.81031 6 5.81025 6 5.81019C6 5.81013 6 5.81007 6 5.81001C6 5.80995 6 5.80989 6 5.80983C6 5.80977 6 5.80971 6 5.80965C6 5.80959 6 5.80953 6 5.80947C6 5.80941 6 5.80935 6 5.80929C6 5.80923 6 5.80917 6 5.80911C6 5.80905 6 5.80898 6 5.80892C6 5.80886 6 5.8088 6 5.80874C6 5.80868 6 5.80862 6 5.80856C6 5.80849 6 5.80843 6 5.80837C6 5.80831 6 5.80825 6 5.80818C6 5.80812 6 5.80806 6 5.808C6 5.80794 6 5.80787 6 5.80781C6 5.80775 6 5.80769 6 5.80762C6 5.80756 6 5.8075 6 5.80743C6 5.80737 6 5.80731 6 5.80724C6 5.80718 6 5.80712 6 5.80705C6 5.80699 6 5.80693 6 5.80686C6 5.8068 6 5.80673 6 5.80667C6 5.80661 6 5.80654 6 5.80648C6 5.80641 6 5.80635 6 5.80628C6 5.80622 6 5.80615 6 5.80609C6 5.80603 6 5.80596 6 5.8059L8 5.80589C8 5.80596 8 5.80603 8 5.80609C8 5.80615 8 5.80622 8 5.80628C8 5.80635 8 5.80641 8 5.80648C8 5.80654 8 5.80661 8 5.80667C8 5.80673 8 5.8068 8 5.80686C8 5.80693 8 5.80699 8 5.80705C8 5.80712 8 5.80718 8 5.80724C8 5.80731 8 5.80737 8 5.80743C8 5.8075 8 5.80756 8 5.80762C8 5.80769 8 5.80775 8 5.80781C8 5.80787 8 5.80794 8 5.808C8 5.80806 8 5.80812 8 5.80818C8 5.80825 8 5.80831 8 5.80837C8 5.80843 8 5.80849 8 5.80856C8 5.80862 8 5.80868 8 5.80874C8 5.8088 8 5.80886 8 5.80892C8 5.80898 8 5.80905 8 5.80911C8 5.80917 8 5.80923 8 5.80929C8 5.80935 8 5.80941 8 5.80947C8 5.80953 8 5.80959 8 5.80965C8 5.80971 8 5.80977 8 5.80983C8 5.80989 8 5.80995 8 5.81001C8 5.81007 8 5.81013 8 5.81019C8 5.81025 8 5.81031 8 5.81037C8 5.81043 8 5.81049 8 5.81054C8 5.8106 8 5.81066 8 5.81072C8 5.81078 8 5.81084 8 5.8109C8 5.81095 8 5.81101 8 5.81107C8 5.81113 8 5.81119 8 5.81125C8 5.8113 8 5.81136 8 5.81142C8 5.81148 8 5.81153 8 5.81159C8 5.81165 8 5.81171 8 5.81176C8 5.81182 8 5.81188 8 5.81193C8 5.81199 8 5.81205 8 5.81211C8 5.81216 8 5.81222 8 5.81228C8 5.81233 8 5.81239 8 5.81244C8 5.8125 8 5.81256 8 5.81261C8 5.81267 8 5.81272 8 5.81278C8 5.81284 8 5.81289 8 5.81295C8 5.813 8 5.81306 8 5.81311C8 5.81317 8 5.81322 8 5.81328C8 5.81333 8 5.81339 8 5.81344C8 5.8135 8 5.81355 8 5.81361C8 5.81366 8 5.81372 8 5.81377C8 5.81383 8 5.81388 8 5.81394C8 5.81399 8 5.81404 8 5.8141C8 5.81415 8 5.81421 8 5.81426C8 5.81431 8 5.81437 8 5.81442C8 5.81447 8 5.81453 8 5.81458C8 5.81463 8 5.81469 8 5.81474C8 5.81479 8 5.81485 8 5.8149C8 5.81495 8 5.815 8 5.81506C8 5.81511 8 5.81516 8 5.81521C8 5.81527 8 5.81532 8 5.81537C8 5.81542 8 5.81547 8 5.81553C8 5.81558 8 5.81563 8 5.81568C8 5.81573 8 5.81578 8 5.81584C8 5.81589 8 5.81594 8 5.81599C8 5.81604 8 5.81609 8 5.81614C8 5.81619 8 5.81624 8 5.8163C8 5.81635 8 5.8164 8 5.81645C8 5.8165 8 5.81655 8 5.8166C8 5.81665 8 5.8167 8 5.81675C8 5.8168 8 5.81685 8 5.8169C8 5.81695 8 5.817 8 5.81705C8 5.8171 8 5.81715 8 5.8172C8 5.81725 8 5.8173 8 5.81734C8 5.81739 8 5.81744 8 5.81749C8 5.81754 8 5.81759 8 5.81764C8 5.81769 8 5.81774 8 5.81778C8 5.81783 8 5.81788 8 5.81793C8 5.81798 8 5.81803 8 5.81807C8 5.81812 8 5.81817 8 5.81822C8 5.81827 8 5.81831 8 5.81836C8 5.81841 8 5.81846 8 5.8185C8 5.81855 8 5.8186 8 5.81865C8 5.81869 8 5.81874 8 5.81879C8 5.81883 8 5.81888 8 5.81893C8 5.81898 8 5.81902 8 5.81907C8 5.81911 8 5.81916 8 5.81921C8 5.81925 8 5.8193 8 5.81935C8 5.81939 8 5.81944 8 5.81948C8 5.81953 8 5.81958 8 5.81962C8 5.81967 8 5.81971 8 5.81976C8 5.8198 8 5.81985 8 5.81989C8 5.81994 8 5.81999 8 5.82003C8 5.82008 8 5.82012 8 5.82017C8 5.82021 8 5.82025 8 5.8203C8 5.82034 8 5.82039 8 5.82043C8 5.82048 8 5.82052 8 5.82057C8 5.82061 8 5.82065 8 5.8207C8 5.82074 8 5.82079 8 5.82083C8 5.82087 8 5.82092 8 5.82096C8 5.821 8 5.82105 8 5.82109C8 5.82114 8 5.82118 8 5.82122C8 5.82127 8 5.82131 8 5.82135C8 5.82139 8 5.82144 8 5.82148C8 5.82152 8 5.82157 8 5.82161C8 5.82165 8 5.82169 8 5.82174C8 5.82178 8 5.82182 8 5.82186C8 5.8219 8 5.82195 8 5.82199C8 5.82203 8 5.82207 8 5.82211C8 5.82216 8 5.8222 8 5.82224C8 5.82228 8 5.82232 8 5.82236C8 5.8224 8 5.82245 8 5.82249C8 5.82253 8 5.82257 8 5.82261C8 5.82265 8 5.82269 8 5.82273C8 5.82277 8 5.82281 8 5.82285C8 5.8229 8 5.82294 8 5.82298C8 5.82302 8 5.82306 8 5.8231C8 5.82314 8 5.82318 8 5.82322C8 5.82326 8 5.8233 8 5.82334C8 5.82338 8 5.82342 8 5.82345C8 5.82349 8 5.82353 8 5.82357C8 5.82361 8 5.82365 8 5.82369C8 5.82373 8 5.82377 8 5.82381C8 5.82385 8 5.82389 8 5.82393C8 5.82396 8 5.824 8 5.82404C8 5.82408 8 5.82412 8 5.82416C8 5.82419 8 5.82423 8 5.82427C8 5.82431 8 5.82435 8 5.82439C8 5.82442 8 5.82446 8 5.8245C8 5.82454 8 5.82457 8 5.82461C8 5.82465 8 5.82469 8 5.82472C8 5.82476 8 5.8248 8 5.82484C8 5.82487 8 5.82491 8 5.82495C8 5.82498 8 5.82502 8 5.82506C8 5.8251 8 5.82513 8 5.82517C8 5.8252 8 5.82524 8 5.82528C8 5.82531 8 5.82535 8 5.82539C8 5.82542 8 5.82546 8 5.8255C8 5.82553 8 5.82557 8 5.8256C8 5.82564 8 5.82568 8 5.82571C8 5.82575 8 5.82578 8 5.82582C8 5.82585 8 5.82589 8 5.82592C8 5.82596 8 5.82599 8 5.82603C8 5.82606 8 5.8261 8 5.82613C8 5.82617 8 5.8262 8 5.82624C8 5.82627 8 5.82631 8 5.82634C8 5.82638 8 5.82641 8 5.82645C8 5.82648 8 5.82651 8 5.82655C8 5.82658 8 5.82662 8 5.82665C8 5.82669 8 5.82672 8 5.82675C8 5.82679 8 5.82682 8 5.82685C8 5.82689 8 5.82692 8 5.82695C8 5.82699 8 5.82702 8 5.82706C8 5.82709 8 5.82712 8 5.82715C8 5.82719 8 5.82722 8 5.82725C8 5.82729 8 5.82732 8 5.82735C8 5.82739 8 5.82742 8 5.82745C8 5.82748 8 5.82752 8 5.82755C8 5.82758 8 5.82761 8 5.82764C8 5.82768 8 5.82771 8 5.82774C8 5.82777 8 5.8278 8 5.82784C8 5.82787 8 5.8279 8 5.82793C8 5.82796 8 5.82799 8 5.82803C8 5.82806 8 5.82809 8 5.82812C8 5.82815 8 5.82818 8 5.82821C8 5.82825 8 5.82828 8 5.82831C8 5.82834 8 5.82837 8 5.8284C8 5.82843 8 5.82846 8 5.82849C8 5.82852 8 5.82855 8 5.82858C8 5.82861 8 5.82864 8 5.82867C8 5.8287 8 5.82874 8 5.82877C8 5.8288 8 5.82883 8 5.82886C8 5.82888 8 5.82891 8 5.82894C8 5.82897 8 5.829 8 5.82903C8 5.82906 8 5.82909 8 5.82912C8 5.82915 8 5.82918 8 5.82921C8 5.82924 8 5.82927 8 5.8293C8 5.82933 8 5.82936 8 5.82938C8 5.82941 8 5.82944 8 5.82947C8 5.8295 8 5.82953 8 5.82956C8 5.82958 8 5.82961 8 5.82964C8 5.82967 8 5.8297 8 5.82973C8 5.82975 8 5.82978 8 5.82981C8 5.82984 8 5.82987 8 5.82989C8 5.82992 8 5.82995 8 5.82998C8 5.83001 8 5.83003 8 5.83006C8 5.83009 8 5.83012 8 5.83014C8 5.83017 8 5.8302 8 5.83023C8 5.83025 8 5.83028 8 5.83031C8 5.83033 8 5.83036 8 5.83039C8 5.83041 8 5.83044 8 5.83047C8 5.8305 8 5.83052 8 5.83055C8 5.83057 8 5.8306 8 5.83063C8 5.83065 8 5.83068 8 5.83071C8 5.83073 8 5.83076 8 5.83078C8 5.83081 8 5.83084 8 5.83086C8 5.83089 8 5.83091 8 5.83094C8 5.83097 8 5.83099 8 5.83102C8 5.83104 8 5.83107 8 5.83109C8 5.83112 8 5.83114 8 5.83117C8 5.8312 8 5.83122 8 5.83125C8 5.83127 8 5.8313 8 5.83132C8 5.83135 8 5.83137 8 5.8314C8 5.83142 8 5.83144 8 5.83147C8 5.83149 8 5.83152 8 5.83154C8 5.83157 8 5.83159 8 5.83162C8 5.83164 8 5.83167 8 5.83169C8 5.83171 8 5.83174 8 5.83176C8 5.83179 8 5.83181 8 5.83183C8 5.83186 8 5.83188 8 5.83191C8 5.83193 8 5.83195 8 5.83198C8 5.832 8 5.83202 8 5.83205C8 5.83207 8 5.83209 8 5.83212C8 5.83214 8 5.83216 8 5.83219C8 5.83221 8 5.83223 8 5.83226C8 5.83228 8 5.8323 8 5.83232C8 5.83235 8 5.83237 8 5.83239C8 5.83241 8 5.83244 8 5.83246C8 5.83248 8 5.8325 8 5.83253C8 5.83255 8 5.83257 8 5.83259C8 5.83262 8 5.83264 8 5.83266C8 5.83268 8 5.8327 8 5.83273C8 5.83275 8 5.83277 8 5.83279C8 5.83281 8 5.83283 8 5.83286C8 5.83288 8 5.8329 8 5.83292C8 5.83294 8 5.83296 8 5.83299C8 5.83301 8 5.83303 8 5.83305C8 5.83307 8 5.83309 8 5.83311C8 5.83313 8 5.83315 8 5.83318C8 5.8332 8 5.83322 8 5.83324C8 5.83326 8 5.83328 8 5.8333C8 5.83332 8 5.83334 8 5.83336C8 5.83338 8 5.8334 8 5.83342C8 5.83344 8 5.83346 8 5.83348C8 5.8335 8 5.83352 8 5.83354C8 5.83356 8 5.83358 8 5.8336C8 5.83362 8 5.83364 8 5.83366C8 5.83368 8 5.8337 8 5.83372C8 5.83374 8 5.83376 8 5.83378C8 5.8338 8 5.83382 8 5.83384C8 5.83386 8 5.83388 8 5.8339C8 5.83392 8 5.83393 8 5.83395C8 5.83397 8 5.83399 8 5.83401C8 5.83403 8 5.83405 8 5.83407C8 5.83409 8 5.83411 8 5.83412C8 5.83414 8 5.83416 8 5.83418C8 5.8342 8 5.83422 8 5.83423C8 5.83425 8 5.83427 8 5.83429C8 5.83431 8 5.83433 8 5.83434C8 5.83436 8 5.83438 8 5.8344C8 5.83442 8 5.83443 8 5.83445C8 5.83447 8 5.83449 8 5.83451C8 5.83452 8 5.83454 8 5.83456C8 5.83458 8 5.83459 8 5.83461C8 5.83463 8 5.83465 8 5.83466C8 5.83468 8 5.8347 8 5.83471C8 5.83473 8 5.83475 8 5.83477C8 5.83478 8 5.8348 8 5.83482C8 5.83483 8 5.83485 8 5.83487C8 5.83488 8 5.8349 8 5.83492C8 5.83493 8 5.83495 8 5.83497C8 5.83498 8 5.835 8 5.83502C8 5.83503 8 5.83505 8 5.83507C8 5.83508 8 5.8351 8 5.83511C8 5.83513 8 5.83515 8 5.83516C8 5.83518 8 5.83519 8 5.83521C8 5.83523 8 5.83524 8 5.83526C8 5.83527 8 5.83529 8 5.83531C8 5.83532 8 5.83534 8 5.83535C8 5.83537 8 5.83538 8 5.8354C8 5.83541 8 5.83543 8 5.83544C8 5.83546 8 5.83548 8 5.83549C8 5.83551 8 5.83552 8 5.83554C8 5.83555 8 5.83557 8 5.83558C8 5.8356 8 5.83561 8 5.83562C8 5.83564 8 5.83565 8 5.83567C8 5.83568 8 5.8357 8 5.83571C8 5.83573 8 5.83574 8 5.83576C8 5.83577 8 5.83579 8 5.8358C8 5.83581 8 5.83583 8 5.83584C8 5.83586 8 5.83587 8 5.83588C8 5.8359 8 5.83591 8 5.83593C8 5.83594 8 5.83595 8 5.83597C8 5.83598 8 5.836 8 5.83601C8 5.83602 8 5.83604 8 5.83605C8 5.83606 8 5.83608 8 5.83609C8 5.8361 8 5.83612 8 5.83613C8 5.83615 8 5.83616 8 5.83617C8 5.83618 8 5.8362 8 5.83621C8 5.83622 8 5.83624 8 5.83625C8 5.83626 8 5.83628 8 5.83629C8 5.8363 8 5.83631 8 5.83633C8 5.83634 8 5.83635 8 5.83637C8 5.83638 8 5.83639 8 5.8364C8 5.83642 8 5.83643 8 5.83644C8 5.83645 8 5.83647 8 5.83648C8 5.83649 8 5.8365 8 5.83652C8 5.83653 8 5.83654 8 5.83655C8 5.83656 8 5.83658 8 5.83659C8 5.8366 8 5.83661 8 5.83662C8 5.83664 8 5.83665 8 5.83666C8 5.83667 8 5.83668 8 5.8367C8 5.83671 8 5.83672 8 5.83673C8 5.83674 8 5.83675 8 5.83676C8 5.83678 8 5.83679 8 5.8368C8 5.83681 8 5.83682 8 5.83683C8 5.83684 8 5.83686 8 5.83687C8 5.83688 8 5.83689 8 5.8369C8 5.83691 8 5.83692 8 5.83693C8 5.83694 8 5.83695 8 5.83697C8 5.83698 8 5.83699 8 5.837C8 5.83701 8 5.83702 8 5.83703C8 5.83704 8 5.83705 8 5.83706C8 5.83707 8 5.83708 8 5.83709C8 5.8371 8 5.83711 8 5.83712C8 5.83713 8 5.83714 8 5.83716C8 5.83717 8 5.83718 8 5.83719C8 5.8372 8 5.83721 8 5.83722C8 5.83723 8 5.83724 8 5.83725C8 5.83726 8 5.83727 8 5.83728C8 5.83729 8 5.8373 8 5.83731C8 5.83731 8 5.83732 8 5.83733C8 5.83734 8 5.83735 8 5.83736C8 5.83737 8 5.83738 8 5.83739C8 5.8374 8 5.83741 8 5.83742C8 5.83743 8 5.83744 8 5.83745C8 5.83746 8 5.83747 8 5.83748C8 5.83748 8 5.83749 8 5.8375C8 5.83751 8 5.83752 8 5.83753C8 5.83754 8 5.83755 8 5.83756C8 5.83757 8 5.83757 8 5.83758C8 5.83759 8 5.8376 8 5.83761C8 5.83762 8 5.83763 8 5.83764C8 5.83764 8 5.83765 8 5.83766C8 5.83767 8 5.83768 8 5.83769C8 5.83769 8 5.8377 8 5.83771C8 5.83772 8 5.83773 8 5.83774C8 5.83774 8 5.83775 8 5.83776C8 5.83777 8 5.83778 8 5.83778C8 5.83779 8 5.8378 8 5.83781C8 5.83782 8 5.83782 8 5.83783C8 5.83784 8 5.83785 8 5.83786C8 5.83786 8 5.83787 8 5.83788C8 5.83789 8 5.83789 8 5.8379C8 5.83791 8 5.83792 8 5.83792C8 5.83793 8 5.83794 8 5.83795C8 5.83795 8 5.83796 8 5.83797C8 5.83798 8 5.83798 8 5.83799C8 5.838 8 5.83801 8 5.83801C8 5.83802 8 5.83803 8 5.83803C8 5.83804 8 5.83805 8 5.83806C8 5.83806 8 5.83807 8 5.83808C8 5.83808 8 5.83809 8 5.8381C8 5.8381 8 5.83811 8 5.83812C8 5.83812 8 5.83813 8 5.83814C8 5.83814 8 5.83815 8 5.83816C8 5.83816 8 5.83817 8 5.83818C8 5.83818 8 5.83819 8 5.8382C8 5.8382 8 5.83821 8 5.83822C8 5.83822 8 5.83823 8 5.83824C8 5.83824 8 5.83825 8 5.83825C8 5.83826 8 5.83827 8 5.83827C8 5.83828 8 5.83828 8 5.83829C8 5.8383 8 5.8383 8 5.83831C8 5.83831 8 5.83832 8 5.83833C8 5.83833 8 5.83834 8 5.83834C8 5.83835 8 5.83836 8 5.83836C8 5.83837 8 5.83837 8 5.83838C8 5.83838 8 5.83839 8 5.8384C8 5.8384 8 5.83841 8 5.83841C8 5.83842 8 5.83842 8 5.83843C8 5.83843 8 5.83844 8 5.83844C8 5.83845 8 5.83845 8 5.83846C8 5.83847 8 5.83847 8 5.83848C8 5.83848 8 5.83849 8 5.83849C8 5.8385 8 5.8385 8 5.83851C8 5.83851 8 5.83852 8 5.83852C8 5.83853 8 5.83853 8 5.83854C8 5.83854 8 5.83855 8 5.83855C8 5.83856 8 5.83856 8 5.83857C8 5.83857 8 5.83858 8 5.83858C8 5.83859 8 5.83859 8 5.83859C8 5.8386 8 5.8386 8 5.83861C8 5.83861 8 5.83862 8 5.83862C8 5.83863 8 5.83863 8 5.83864C8 5.83864 8 5.83864 8 5.83865C8 5.83865 8 5.83866 8 5.83866C8 5.83867 8 5.83867 8 5.83868C8 5.83868 8 5.83868 8 5.83869C8 5.83869 8 5.8387 8 5.8387C8 5.8387 8 5.83871 8 5.83871C8 5.83872 8 5.83872 8 5.83872C8 5.83873 8 5.83873 8 5.83874C8 5.83874 8 5.83874 8 5.83875C8 5.83875 8 5.83876 8 5.83876C8 5.83876 8 5.83877 8 5.83877C8 5.83877 8 5.83878 8 5.83878C8 5.83879 8 5.83879 8 5.83879C8 5.8388 8 5.8388 8 5.8388C8 5.83881 8 5.83881 8 5.83881C8 5.83882 8 5.83882 8 5.83883C8 5.83883 8 5.83883 8 5.83884C8 5.83884 8 5.83884 8 5.83885C8 5.83885 8 5.83885 8 5.83886C8 5.83886 8 5.83886 8 5.83887C8 5.83887 8 5.83887 8 5.83887C8 5.83888 8 5.83888 8 5.83888C8 5.83889 8 5.83889 8 5.83889C8 5.8389 8 5.8389 8 5.8389C8 5.83891 8 5.83891 8 5.83891C8 5.83891 8 5.83892 8 5.83892C8 5.83892 8 5.83893 8 5.83893C8 5.83893 8 5.83893 8 5.83894C8 5.83894 8 5.83894 8 5.83895C8 5.83895 8 5.83895 8 5.83895C8 5.83896 8 5.83896 8 5.83896C8 5.83896 8 5.83897 8 5.83897C8 5.83897 8 5.83898 8 5.83898C8 5.83898 8 5.83898 8 5.83899C8 5.83899 8 5.83899 8 5.83899C8 5.83899 8 5.839 8 5.839C8 5.839 8 5.839 8 5.83901C8 5.83901 8 5.83901 8 5.83901C8 5.83902 8 5.83902 8 5.83902C8 5.83902 8 5.83902 8 5.83903C8 5.83903 8 5.83903 8 5.83903C8 5.83904 8 5.83904 8 5.83904C8 5.83904 8 5.83904 8 5.83905C8 5.83905 8 5.83905 8 5.83905C8 5.83905 8 5.83906 8 5.83906C8 5.83906 8 5.83906 8 5.83906C8 5.83907 8 5.83907 8 5.83907C8 5.83907 8 5.83907 8 5.83908C8 5.83908 8 5.83908 8 5.83908C8 5.83908 8 5.83908 8 5.83909C8 5.83909 8 5.83909 8 5.83909C8 5.83909 8 5.83909 8 5.8391C8 5.8391 8 5.8391 8 5.8391C8 5.8391 8 5.8391 8 5.83911C8 5.83911 8 5.83911 8 5.83911C8 5.83911 8 5.83911 8 5.83912C8 5.83912 8 5.83912 8 5.83912C8 5.83912 8 5.83912 8 5.83912C8 5.83913 8 5.83913 8 5.83913C8 5.83913 8 5.83913 8 5.83913C8 5.83913 8 5.83914 8 5.83914C8 5.83914 8 5.83914 8 5.83914C8 5.83914 8 5.83914 8 5.83914C8 5.83915 8 5.83915 8 5.83915C8 5.83915 8 5.83915 8 5.83915C8 5.83915 8 5.83915 8 5.83916C8 5.83916 8 5.83916 8 5.83916C8 5.83916 8 5.83916 8 5.83916C8 5.83916 8 5.83916 8 5.83917C8 5.83917 8 5.83917 8 5.83917C8 5.83917 8 5.83917 8 5.83917C8 5.83917 8 5.83917 8 5.83917C8 5.83918 8 5.83918 8 5.83918C8 5.83918 8 5.83918 8 5.83918C8 5.83918 8 5.83918 8 5.83918C8 5.83918 8 5.83918 8 5.83918C8 5.83919 8 5.83919 8 5.83919C8 5.83919 8 5.83919 8 5.83919C8 5.83919 8 5.83919 8 5.83919C8 5.83919 8 5.83919 8 5.83919C8 5.83919 8 5.8392 8 5.8392C8 5.8392 8 5.8392 8 5.8392C8 5.8392 8 5.8392 8 5.8392C8 5.8392 8 5.8392 8 5.8392C8 5.8392 8 5.8392 8 5.8392C8 5.8392 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83921 8 5.83921 8 5.83921C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83922C8 5.83922 8 5.83922 8 5.83923L8 5.83923C8 5.83923 8 5.83923 8 5.83923L8 5.83923L8 5.83923C8 5.83923 8 5.83923 8 5.83923C8 5.83923 8 5.83923 8 5.83923C8 5.83923 8 5.83923 8 5.83923C8 5.83923 8 5.83923 8 5.83923C8 5.83923 8 5.83923 8 5.83923L8 5.83923C8 5.83923 8 5.83923 8 5.83923L8 5.83923C8 5.83923 8 5.83923 8 5.83923L8 5.83923C8 5.83923 8 5.83923 8 5.83923C8 5.83923 8 5.83923 7 5.83923ZM6 5.8059L6 5.77256L8 5.77256L8 5.80589L6 5.8059ZM6 5.77256C6 5.93792 6.04279 6.06567 6.07445 6.13998C6.10707 6.21655 6.14335 6.27251 6.16685 6.30562C6.19165 6.34055 6.21466 6.36737 6.23148 6.38579C6.24038 6.39555 6.24888 6.40439 6.25678 6.41234C6.26076 6.41635 6.26468 6.42021 6.26852 6.42394C6.27045 6.42581 6.27237 6.42766 6.27427 6.42948C6.27522 6.43038 6.27618 6.43129 6.27713 6.43219C6.2776 6.43264 6.27808 6.43308 6.27855 6.43353C6.27879 6.43376 6.27902 6.43398 6.27926 6.4342C6.27938 6.43431 6.27956 6.43448 6.27962 6.43454C6.27979 6.4347 6.27997 6.43487 6.9645 5.70588C7.64902 4.97689 7.6492 4.97706 7.64938 4.97723C7.64944 4.97728 7.64962 4.97745 7.64974 4.97756C7.64998 4.97779 7.65022 4.97801 7.65046 4.97824C7.65094 4.9787 7.65143 4.97916 7.65192 4.97962C7.6529 4.98055 7.65391 4.98151 7.65493 4.98248C7.65697 4.98443 7.65908 4.98646 7.66127 4.98858C7.66563 4.99282 7.67032 4.99743 7.67527 5.00242C7.68511 5.01232 7.69638 5.02403 7.70861 5.03743C7.73208 5.06314 7.76397 5.10039 7.79764 5.14781C7.83934 5.20654 8 5.43645 8 5.77256L6 5.77256ZM6.9645 5.70588C7.9645 5.70588 6.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588L5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588L5.9645 5.70588L5.9645 5.70588L5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70588C5.9645 5.70588 5.9645 5.70588 5.9645 5.70587L5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587L5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70587 5.9645 5.70587 5.9645 5.70587C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70586 5.9645 5.70586 5.9645 5.70586C5.9645 5.70585 5.9645 5.70585 5.9645 5.70585C5.9645 5.70585 5.9645 5.70585 5.9645 5.70585C5.9645 5.70585 5.9645 5.70585 5.9645 5.70585C5.9645 5.70585 5.9645 5.70585 5.9645 5.70585C5.9645 5.70585 5.9645 5.70585 5.9645 5.70585C5.9645 5.70585 5.9645 5.70584 5.9645 5.70584C5.9645 5.70584 5.9645 5.70584 5.9645 5.70584C5.9645 5.70584 5.9645 5.70584 5.9645 5.70584C5.9645 5.70584 5.9645 5.70584 5.9645 5.70584C5.9645 5.70584 5.9645 5.70584 5.9645 5.70584C5.9645 5.70583 5.9645 5.70583 5.9645 5.70583C5.9645 5.70583 5.9645 5.70583 5.9645 5.70583C5.9645 5.70583 5.9645 5.70583 5.9645 5.70583C5.9645 5.70583 5.9645 5.70583 5.9645 5.70582C5.9645 5.70582 5.9645 5.70582 5.9645 5.70582C5.9645 5.70582 5.9645 5.70582 5.9645 5.70582C5.9645 5.70582 5.9645 5.70582 5.9645 5.70582C5.9645 5.70581 5.9645 5.70581 5.9645 5.70581C5.9645 5.70581 5.9645 5.70581 5.9645 5.70581C5.9645 5.70581 5.9645 5.70581 5.9645 5.70581C5.9645 5.70581 5.9645 5.7058 5.9645 5.7058C5.9645 5.7058 5.9645 5.7058 5.9645 5.7058C5.9645 5.7058 5.9645 5.7058 5.9645 5.7058C5.9645 5.70579 5.9645 5.70579 5.9645 5.70579C5.9645 5.70579 5.9645 5.70579 5.9645 5.70579C5.9645 5.70579 5.9645 5.70579 5.9645 5.70578C5.9645 5.70578 5.9645 5.70578 5.9645 5.70578C5.9645 5.70578 5.9645 5.70578 5.9645 5.70578C5.9645 5.70577 5.9645 5.70577 5.9645 5.70577C5.9645 5.70577 5.9645 5.70577 5.9645 5.70577C5.9645 5.70577 5.9645 5.70576 5.9645 5.70576C5.9645 5.70576 5.9645 5.70576 5.9645 5.70576C5.9645 5.70576 5.9645 5.70576 5.9645 5.70575C5.9645 5.70575 5.9645 5.70575 5.9645 5.70575C5.9645 5.70575 5.9645 5.70575 5.9645 5.70574C5.9645 5.70574 5.9645 5.70574 5.9645 5.70574C5.9645 5.70574 5.9645 5.70574 5.9645 5.70573C5.9645 5.70573 5.9645 5.70573 5.9645 5.70573C5.9645 5.70573 5.9645 5.70572 5.9645 5.70572C5.9645 5.70572 5.9645 5.70572 5.9645 5.70572C5.9645 5.70572 5.9645 5.70571 5.9645 5.70571C5.9645 5.70571 5.9645 5.70571 5.9645 5.70571C5.9645 5.7057 5.9645 5.7057 5.9645 5.7057C5.9645 5.7057 5.9645 5.7057 5.9645 5.70569C5.9645 5.70569 5.9645 5.70569 5.9645 5.70569C5.9645 5.70569 5.9645 5.70568 5.9645 5.70568C5.9645 5.70568 5.9645 5.70568 5.9645 5.70567C5.9645 5.70567 5.9645 5.70567 5.9645 5.70567C5.9645 5.70567 5.9645 5.70566 5.9645 5.70566C5.9645 5.70566 5.9645 5.70566 5.9645 5.70565C5.9645 5.70565 5.9645 5.70565 5.9645 5.70565C5.9645 5.70564 5.9645 5.70564 5.9645 5.70564C5.9645 5.70564 5.9645 5.70564 5.9645 5.70563C5.9645 5.70563 5.9645 5.70563 5.9645 5.70563C5.9645 5.70562 5.9645 5.70562 5.9645 5.70562C5.9645 5.70561 5.9645 5.70561 5.9645 5.70561C5.9645 5.70561 5.9645 5.7056 5.9645 5.7056C5.9645 5.7056 5.9645 5.7056 5.9645 5.70559C5.9645 5.70559 5.9645 5.70559 5.9645 5.70559C5.9645 5.70558 5.9645 5.70558 5.9645 5.70558C5.9645 5.70557 5.9645 5.70557 5.9645 5.70557C5.9645 5.70557 5.9645 5.70556 5.9645 5.70556C5.9645 5.70556 5.9645 5.70555 5.9645 5.70555C5.9645 5.70555 5.9645 5.70554 5.9645 5.70554C5.9645 5.70554 5.9645 5.70554 5.9645 5.70553C5.9645 5.70553 5.9645 5.70553 5.9645 5.70552C5.9645 5.70552 5.9645 5.70552 5.9645 5.70551C5.9645 5.70551 5.9645 5.70551 5.9645 5.7055C5.9645 5.7055 5.9645 5.7055 5.9645 5.70549C5.9645 5.70549 5.9645 5.70549 5.9645 5.70548C5.9645 5.70548 5.9645 5.70548 5.9645 5.70547C5.9645 5.70547 5.9645 5.70547 5.9645 5.70546C5.9645 5.70546 5.9645 5.70546 5.9645 5.70545C5.9645 5.70545 5.9645 5.70544 5.9645 5.70544C5.9645 5.70544 5.9645 5.70543 5.9645 5.70543C5.9645 5.70543 5.9645 5.70542 5.9645 5.70542C5.9645 5.70541 5.9645 5.70541 5.9645 5.70541C5.9645 5.7054 5.9645 5.7054 5.9645 5.7054C5.9645 5.70539 5.9645 5.70539 5.9645 5.70538C5.9645 5.70538 5.9645 5.70538 5.9645 5.70537C5.9645 5.70537 5.9645 5.70536 5.9645 5.70536C5.9645 5.70536 5.9645 5.70535 5.9645 5.70535C5.9645 5.70534 5.9645 5.70534 5.9645 5.70534C5.9645 5.70533 5.9645 5.70533 5.9645 5.70532C5.9645 5.70532 5.9645 5.70531 5.9645 5.70531C5.9645 5.70531 5.9645 5.7053 5.9645 5.7053C5.9645 5.70529 5.9645 5.70529 5.9645 5.70528C5.9645 5.70528 5.9645 5.70527 5.9645 5.70527C5.9645 5.70527 5.9645 5.70526 5.9645 5.70526C5.9645 5.70525 5.9645 5.70525 5.9645 5.70524C5.9645 5.70524 5.9645 5.70523 5.9645 5.70523C5.9645 5.70522 5.9645 5.70522 5.9645 5.70521C5.9645 5.70521 5.9645 5.7052 5.9645 5.7052C5.9645 5.70519 5.9645 5.70519 5.9645 5.70518C5.9645 5.70518 5.9645 5.70517 5.9645 5.70517C5.9645 5.70516 5.9645 5.70516 5.9645 5.70515C5.9645 5.70515 5.9645 5.70514 5.9645 5.70514C5.9645 5.70513 5.9645 5.70513 5.9645 5.70512C5.9645 5.70512 5.9645 5.70511 5.9645 5.70511C5.9645 5.7051 5.9645 5.7051 5.9645 5.70509C5.9645 5.70509 5.9645 5.70508 5.9645 5.70508C5.9645 5.70507 5.9645 5.70506 5.9645 5.70506C5.9645 5.70505 5.9645 5.70505 5.9645 5.70504C5.9645 5.70504 5.9645 5.70503 5.9645 5.70503C5.9645 5.70502 5.9645 5.70501 5.9645 5.70501C5.9645 5.705 5.9645 5.705 5.9645 5.70499C5.9645 5.70499 5.9645 5.70498 5.9645 5.70497C5.9645 5.70497 5.9645 5.70496 5.9645 5.70496C5.9645 5.70495 5.9645 5.70494 5.9645 5.70494C5.9645 5.70493 5.9645 5.70493 5.9645 5.70492C5.9645 5.70491 5.9645 5.70491 5.9645 5.7049C5.9645 5.7049 5.9645 5.70489 5.9645 5.70488C5.9645 5.70488 5.9645 5.70487 5.9645 5.70486C5.9645 5.70486 5.9645 5.70485 5.9645 5.70484C5.9645 5.70484 5.9645 5.70483 5.9645 5.70483C5.9645 5.70482 5.9645 5.70481 5.9645 5.70481C5.9645 5.7048 5.9645 5.70479 5.9645 5.70479C5.9645 5.70478 5.9645 5.70477 5.9645 5.70477C5.9645 5.70476 5.9645 5.70475 5.9645 5.70475C5.9645 5.70474 5.9645 5.70473 5.9645 5.70472C5.9645 5.70472 5.9645 5.70471 5.9645 5.7047C5.9645 5.7047 5.9645 5.70469 5.9645 5.70468C5.9645 5.70467 5.9645 5.70467 5.9645 5.70466C5.9645 5.70465 5.9645 5.70465 5.9645 5.70464C5.9645 5.70463 5.9645 5.70462 5.9645 5.70462C5.9645 5.70461 5.9645 5.7046 5.9645 5.70459C5.9645 5.70459 5.9645 5.70458 5.9645 5.70457C5.9645 5.70457 5.9645 5.70456 5.9645 5.70455C5.9645 5.70454 5.9645 5.70453 5.9645 5.70453C5.9645 5.70452 5.9645 5.70451 5.9645 5.7045C5.9645 5.7045 5.9645 5.70449 5.9645 5.70448C5.9645 5.70447 5.9645 5.70446 5.9645 5.70446C5.9645 5.70445 5.9645 5.70444 5.9645 5.70443C5.9645 5.70442 5.9645 5.70442 5.9645 5.70441C5.9645 5.7044 5.9645 5.70439 5.9645 5.70438C5.9645 5.70438 5.9645 5.70437 5.9645 5.70436C5.9645 5.70435 5.9645 5.70434 5.9645 5.70433C5.9645 5.70433 5.9645 5.70432 5.9645 5.70431C5.9645 5.7043 5.9645 5.70429 5.9645 5.70428C5.9645 5.70427 5.9645 5.70427 5.9645 5.70426C5.9645 5.70425 5.9645 5.70424 5.9645 5.70423C5.9645 5.70422 5.9645 5.70421 5.9645 5.7042C5.9645 5.7042 5.9645 5.70419 5.9645 5.70418C5.9645 5.70417 5.9645 5.70416 5.9645 5.70415C5.9645 5.70414 5.9645 5.70413 5.9645 5.70412C5.9645 5.70411 5.9645 5.7041 5.9645 5.7041C5.9645 5.70409 5.9645 5.70408 5.9645 5.70407C5.9645 5.70406 5.9645 5.70405 5.9645 5.70404C5.9645 5.70403 5.9645 5.70402 5.9645 5.70401C5.9645 5.704 5.9645 5.70399 5.9645 5.70398C5.9645 5.70397 5.9645 5.70396 5.9645 5.70395C5.9645 5.70394 5.9645 5.70393 5.9645 5.70392C5.9645 5.70391 5.9645 5.7039 5.9645 5.70389C5.9645 5.70388 5.9645 5.70387 5.9645 5.70386C5.9645 5.70385 5.9645 5.70384 5.9645 5.70383C5.9645 5.70382 5.9645 5.70381 5.9645 5.7038C5.9645 5.70379 5.9645 5.70378 5.9645 5.70377C5.9645 5.70376 5.9645 5.70375 5.9645 5.70374C5.9645 5.70373 5.9645 5.70372 5.9645 5.70371C5.9645 5.7037 5.9645 5.70369 5.9645 5.70368C5.9645 5.70367 5.9645 5.70366 5.9645 5.70365C5.9645 5.70364 5.9645 5.70362 5.9645 5.70361C5.9645 5.7036 5.9645 5.70359 5.9645 5.70358C5.9645 5.70357 5.9645 5.70356 5.9645 5.70355C5.9645 5.70354 5.9645 5.70353 5.9645 5.70351C5.9645 5.7035 5.9645 5.70349 5.9645 5.70348C5.9645 5.70347 5.9645 5.70346 5.9645 5.70345C5.9645 5.70344 5.9645 5.70342 5.9645 5.70341C5.9645 5.7034 5.9645 5.70339 5.9645 5.70338C5.9645 5.70337 5.9645 5.70336 5.9645 5.70334C5.9645 5.70333 5.9645 5.70332 5.9645 5.70331C5.9645 5.7033 5.9645 5.70328 5.9645 5.70327C5.9645 5.70326 5.9645 5.70325 5.9645 5.70324C5.9645 5.70322 5.9645 5.70321 5.9645 5.7032C5.9645 5.70319 5.9645 5.70318 5.9645 5.70316C5.9645 5.70315 5.9645 5.70314 5.9645 5.70313C5.9645 5.70311 5.9645 5.7031 5.9645 5.70309C5.9645 5.70308 5.9645 5.70306 5.9645 5.70305C5.9645 5.70304 5.9645 5.70303 5.9645 5.70301C5.9645 5.703 5.9645 5.70299 5.9645 5.70298C5.9645 5.70296 5.9645 5.70295 5.9645 5.70294C5.9645 5.70292 5.9645 5.70291 5.9645 5.7029C5.9645 5.70289 5.9645 5.70287 5.9645 5.70286C5.9645 5.70285 5.9645 5.70283 5.9645 5.70282C5.9645 5.70281 5.9645 5.70279 5.9645 5.70278C5.9645 5.70277 5.9645 5.70275 5.9645 5.70274C5.9645 5.70273 5.9645 5.70271 5.9645 5.7027C5.9645 5.70269 5.9645 5.70267 5.9645 5.70266C5.9645 5.70264 5.9645 5.70263 5.9645 5.70262C5.9645 5.7026 5.9645 5.70259 5.9645 5.70257C5.9645 5.70256 5.9645 5.70255 5.9645 5.70253C5.9645 5.70252 5.9645 5.7025 5.9645 5.70249C5.9645 5.70248 5.9645 5.70246 5.9645 5.70245C5.9645 5.70243 5.9645 5.70242 5.9645 5.7024C5.9645 5.70239 5.9645 5.70238 5.9645 5.70236C5.9645 5.70235 5.9645 5.70233 5.9645 5.70232C5.9645 5.7023 5.9645 5.70229 5.9645 5.70227C5.9645 5.70226 5.9645 5.70224 5.9645 5.70223C5.9645 5.70221 5.9645 5.7022 5.9645 5.70218C5.9645 5.70217 5.9645 5.70215 5.9645 5.70214C5.9645 5.70212 5.9645 5.70211 5.9645 5.70209C5.9645 5.70208 5.9645 5.70206 5.9645 5.70205C5.9645 5.70203 5.9645 5.70202 5.9645 5.702C5.9645 5.70198 5.9645 5.70197 5.9645 5.70195C5.9645 5.70194 5.9645 5.70192 5.9645 5.70191C5.9645 5.70189 5.9645 5.70187 5.9645 5.70186C5.9645 5.70184 5.9645 5.70183 5.9645 5.70181C5.9645 5.70179 5.9645 5.70178 5.9645 5.70176C5.9645 5.70175 5.9645 5.70173 5.9645 5.70171C5.9645 5.7017 5.9645 5.70168 5.9645 5.70167C5.9645 5.70165 5.9645 5.70163 5.9645 5.70162C5.9645 5.7016 5.9645 5.70158 5.9645 5.70157C5.9645 5.70155 5.9645 5.70153 5.9645 5.70152C5.9645 5.7015 5.9645 5.70148 5.9645 5.70147C5.9645 5.70145 5.9645 5.70143 5.9645 5.70141C5.9645 5.7014 5.9645 5.70138 5.9645 5.70136C5.9645 5.70135 5.9645 5.70133 5.9645 5.70131C5.9645 5.70129 5.9645 5.70128 5.9645 5.70126C5.9645 5.70124 5.9645 5.70122 5.9645 5.70121C5.9645 5.70119 5.9645 5.70117 5.9645 5.70115C5.9645 5.70114 5.9645 5.70112 5.9645 5.7011C5.9645 5.70108 5.9645 5.70106 5.9645 5.70105C5.9645 5.70103 5.9645 5.70101 5.9645 5.70099C5.9645 5.70097 5.9645 5.70096 5.9645 5.70094C5.9645 5.70092 5.9645 5.7009 5.9645 5.70088C5.9645 5.70086 5.9645 5.70085 5.9645 5.70083C5.9645 5.70081 5.9645 5.70079 5.9645 5.70077C5.9645 5.70075 5.9645 5.70073 5.9645 5.70072C5.9645 5.7007 5.9645 5.70068 5.9645 5.70066C5.9645 5.70064 5.9645 5.70062 5.9645 5.7006C5.9645 5.70058 5.9645 5.70056 5.9645 5.70055C5.9645 5.70053 5.9645 5.70051 5.9645 5.70049C5.9645 5.70047 5.9645 5.70045 5.9645 5.70043C5.9645 5.70041 5.9645 5.70039 5.9645 5.70037C5.9645 5.70035 5.9645 5.70033 5.9645 5.70031C5.9645 5.70029 5.9645 5.70027 5.9645 5.70025C5.9645 5.70023 5.9645 5.70021 5.9645 5.70019C5.9645 5.70017 5.9645 5.70015 5.9645 5.70013C5.9645 5.70011 5.9645 5.70009 5.9645 5.70007C5.9645 5.70005 5.9645 5.70003 5.9645 5.70001C5.9645 5.69999 5.9645 5.69997 5.9645 5.69995C5.9645 5.69993 5.9645 5.69991 5.9645 5.69989C5.9645 5.69987 5.9645 5.69984 5.9645 5.69982C5.9645 5.6998 5.9645 5.69978 5.9645 5.69976C5.9645 5.69974 5.9645 5.69972 5.9645 5.6997C5.9645 5.69968 5.9645 5.69965 5.9645 5.69963C5.9645 5.69961 5.9645 5.69959 5.9645 5.69957C5.9645 5.69955 5.9645 5.69953 5.9645 5.6995C5.9645 5.69948 5.9645 5.69946 5.9645 5.69944C5.9645 5.69942 5.9645 5.6994 5.9645 5.69937C5.9645 5.69935 5.9645 5.69933 5.9645 5.69931C5.9645 5.69929 5.9645 5.69926 5.9645 5.69924C5.9645 5.69922 5.9645 5.6992 5.9645 5.69918C5.9645 5.69915 5.9645 5.69913 5.9645 5.69911C5.9645 5.69909 5.9645 5.69906 5.9645 5.69904C5.9645 5.69902 5.9645 5.69899 5.9645 5.69897C5.9645 5.69895 5.9645 5.69893 5.9645 5.6989C5.9645 5.69888 5.9645 5.69886 5.9645 5.69883C5.9645 5.69881 5.9645 5.69879 5.9645 5.69876C5.9645 5.69874 5.9645 5.69872 5.9645 5.69869C5.9645 5.69867 5.9645 5.69865 5.9645 5.69862C5.9645 5.6986 5.9645 5.69858 5.9645 5.69855C5.9645 5.69853 5.9645 5.69851 5.9645 5.69848C5.9645 5.69846 5.9645 5.69843 5.9645 5.69841C5.9645 5.69839 5.9645 5.69836 5.9645 5.69834C5.9645 5.69831 5.9645 5.69829 5.9645 5.69826C5.9645 5.69824 5.9645 5.69822 5.9645 5.69819C5.9645 5.69817 5.9645 5.69814 5.9645 5.69812C5.9645 5.69809 5.9645 5.69807 5.9645 5.69804C5.9645 5.69802 5.9645 5.69799 5.9645 5.69797C5.9645 5.69794 5.9645 5.69792 5.9645 5.69789C5.9645 5.69787 5.9645 5.69784 5.9645 5.69782C5.9645 5.69779 5.9645 5.69777 5.9645 5.69774C5.9645 5.69772 5.9645 5.69769 5.9645 5.69767C5.9645 5.69764 5.9645 5.69761 5.9645 5.69759C5.9645 5.69756 5.9645 5.69754 5.9645 5.69751C5.9645 5.69749 5.9645 5.69746 5.9645 5.69743C5.9645 5.69741 5.9645 5.69738 5.9645 5.69736C5.9645 5.69733 5.9645 5.6973 5.9645 5.69728C5.9645 5.69725 5.9645 5.69722 5.9645 5.6972C5.9645 5.69717 5.9645 5.69714 5.9645 5.69712C5.9645 5.69709 5.9645 5.69706 5.9645 5.69704C5.9645 5.69701 5.9645 5.69698 5.9645 5.69696C5.9645 5.69693 5.9645 5.6969 5.9645 5.69687C5.9645 5.69685 5.9645 5.69682 5.9645 5.69679C5.9645 5.69676 5.9645 5.69674 5.9645 5.69671C5.9645 5.69668 5.9645 5.69665 5.9645 5.69663C5.9645 5.6966 5.9645 5.69657 5.9645 5.69654C5.9645 5.69652 5.9645 5.69649 5.9645 5.69646C5.9645 5.69643 5.9645 5.6964 5.9645 5.69638C5.9645 5.69635 5.9645 5.69632 5.9645 5.69629C5.9645 5.69626 5.9645 5.69623 5.9645 5.6962C5.9645 5.69618 5.9645 5.69615 5.9645 5.69612C5.9645 5.69609 5.9645 5.69606 5.9645 5.69603C5.9645 5.696 5.9645 5.69597 5.9645 5.69595C5.9645 5.69592 5.9645 5.69589 5.9645 5.69586C5.9645 5.69583 5.9645 5.6958 5.9645 5.69577C5.9645 5.69574 5.9645 5.69571 5.9645 5.69568C5.9645 5.69565 5.9645 5.69562 5.9645 5.69559C5.9645 5.69556 5.9645 5.69553 5.9645 5.6955C5.9645 5.69547 5.9645 5.69544 5.9645 5.69541C5.9645 5.69538 5.9645 5.69535 5.9645 5.69532C5.9645 5.69529 5.9645 5.69526 5.9645 5.69523C5.9645 5.6952 5.9645 5.69517 5.9645 5.69514C5.9645 5.69511 5.9645 5.69508 5.9645 5.69505C5.9645 5.69502 5.9645 5.69499 5.9645 5.69496C5.9645 5.69493 5.9645 5.69489 5.9645 5.69486C5.9645 5.69483 5.9645 5.6948 5.9645 5.69477C5.9645 5.69474 5.9645 5.69471 5.9645 5.69467C5.9645 5.69464 5.9645 5.69461 5.9645 5.69458C5.9645 5.69455 5.9645 5.69452 5.9645 5.69448C5.9645 5.69445 5.9645 5.69442 5.9645 5.69439C5.9645 5.69436 5.9645 5.69433 5.9645 5.69429C5.9645 5.69426 5.9645 5.69423 5.9645 5.6942C5.9645 5.69416 5.9645 5.69413 5.9645 5.6941C5.9645 5.69407 5.9645 5.69403 5.9645 5.694C5.9645 5.69397 5.9645 5.69394 5.9645 5.6939C5.9645 5.69387 5.9645 5.69384 5.9645 5.6938C5.9645 5.69377 5.9645 5.69374 5.9645 5.6937C5.9645 5.69367 5.9645 5.69364 5.9645 5.6936C5.9645 5.69357 5.9645 5.69354 5.9645 5.6935C5.9645 5.69347 5.9645 5.69344 5.9645 5.6934C5.9645 5.69337 5.9645 5.69333 5.9645 5.6933C5.9645 5.69327 5.9645 5.69323 5.9645 5.6932C5.9645 5.69316 5.9645 5.69313 5.9645 5.69309C5.9645 5.69306 5.9645 5.69303 5.9645 5.69299C5.9645 5.69296 5.9645 5.69292 5.9645 5.69289C5.9645 5.69285 5.9645 5.69282 5.9645 5.69278C5.9645 5.69275 5.9645 5.69271 5.9645 5.69268C5.9645 5.69264 5.9645 5.69261 5.9645 5.69257C5.9645 5.69254 5.9645 5.6925 5.9645 5.69247C5.9645 5.69243 5.9645 5.69239 5.9645 5.69236C5.9645 5.69232 5.9645 5.69229 5.9645 5.69225C5.9645 5.69222 5.9645 5.69218 5.9645 5.69214C5.9645 5.69211 5.9645 5.69207 5.9645 5.69204C5.9645 5.692 5.9645 5.69196 5.9645 5.69193C5.9645 5.69189 5.9645 5.69185 5.9645 5.69182C5.9645 5.69178 5.9645 5.69174 5.9645 5.69171C5.9645 5.69167 5.9645 5.69163 5.9645 5.6916C5.9645 5.69156 5.9645 5.69152 5.9645 5.69149C5.9645 5.69145 5.9645 5.69141 5.9645 5.69137C5.9645 5.69134 5.9645 5.6913 5.9645 5.69126C5.9645 5.69122 5.9645 5.69119 5.9645 5.69115C5.9645 5.69111 5.9645 5.69107 5.9645 5.69103C5.9645 5.691 5.9645 5.69096 5.9645 5.69092C5.9645 5.69088 5.9645 5.69084 5.9645 5.69081C5.9645 5.69077 5.9645 5.69073 5.9645 5.69069C5.9645 5.69065 5.9645 5.69061 5.9645 5.69057C5.9645 5.69053 5.9645 5.6905 5.9645 5.69046C5.9645 5.69042 5.9645 5.69038 5.9645 5.69034C5.9645 5.6903 5.9645 5.69026 5.9645 5.69022C5.9645 5.69018 5.9645 5.69014 5.9645 5.6901C5.9645 5.69006 5.9645 5.69002 5.9645 5.68999C5.9645 5.68994 5.9645 5.68991 5.9645 5.68987C5.9645 5.68983 5.9645 5.68979 5.9645 5.68975C5.9645 5.68971 5.9645 5.68967 5.9645 5.68962C5.9645 5.68958 5.9645 5.68954 5.9645 5.6895C5.9645 5.68946 5.9645 5.68942 5.9645 5.68938C5.9645 5.68934 5.9645 5.6893 5.9645 5.68926C5.9645 5.68922 5.9645 5.68918 5.9645 5.68914C5.9645 5.68909 5.9645 5.68905 5.9645 5.68901C5.9645 5.68897 5.9645 5.68893 5.9645 5.68889C5.9645 5.68885 5.9645 5.6888 5.9645 5.68876C5.9645 5.68872 5.9645 5.68868 5.9645 5.68864C5.9645 5.6886 5.9645 5.68855 5.9645 5.68851C5.9645 5.68847 5.9645 5.68843 5.9645 5.68838C5.9645 5.68834 5.9645 5.6883 5.9645 5.68826C5.9645 5.68821 5.9645 5.68817 5.9645 5.68813C5.9645 5.68809 5.9645 5.68804 5.9645 5.688C5.9645 5.68796 5.9645 5.68791 5.9645 5.68787C5.9645 5.68783 5.9645 5.68778 5.9645 5.68774C5.9645 5.6877 5.9645 5.68765 5.9645 5.68761C5.9645 5.68757 5.9645 5.68752 5.9645 5.68748C5.9645 5.68744 5.9645 5.68739 5.9645 5.68735C5.9645 5.6873 5.9645 5.68726 5.9645 5.68722C5.9645 5.68717 5.9645 5.68713 5.9645 5.68708C5.9645 5.68704 5.9645 5.68699 5.9645 5.68695C5.9645 5.6869 5.9645 5.68686 5.9645 5.68681C5.9645 5.68677 5.9645 5.68672 5.9645 5.68668C5.9645 5.68663 5.9645 5.68659 5.9645 5.68654C5.9645 5.6865 5.9645 5.68645 5.9645 5.68641C5.9645 5.68636 5.9645 5.68632 5.9645 5.68627C5.9645 5.68623 5.9645 5.68618 5.9645 5.68613C5.9645 5.68609 5.9645 5.68604 5.9645 5.686C5.9645 5.68595 5.9645 5.6859 5.9645 5.68586C5.9645 5.68581 5.9645 5.68576 5.9645 5.68572C5.9645 5.68567 5.9645 5.68562 5.9645 5.68558C5.9645 5.68553 5.9645 5.68548 5.9645 5.68544C5.9645 5.68539 5.9645 5.68534 5.9645 5.68529C5.9645 5.68525 5.9645 5.6852 5.9645 5.68515C5.9645 5.68511 5.9645 5.68506 5.9645 5.68501C5.9645 5.68496 5.9645 5.68491 5.9645 5.68487C5.9645 5.68482 5.9645 5.68477 5.9645 5.68472C5.9645 5.68467 5.9645 5.68463 5.9645 5.68458C5.9645 5.68453 5.9645 5.68448 5.9645 5.68443C5.9645 5.68439 5.9645 5.68434 5.9645 5.68429C5.9645 5.68424 5.9645 5.68419 5.9645 5.68414C5.9645 5.68409 5.9645 5.68404 5.9645 5.68399C5.9645 5.68394 5.9645 5.6839 5.9645 5.68385C5.9645 5.6838 5.9645 5.68375 5.9645 5.6837C5.9645 5.68365 5.9645 5.6836 5.9645 5.68355C5.9645 5.6835 5.9645 5.68345 5.9645 5.6834C5.9645 5.68335 5.9645 5.6833 5.9645 5.68325C5.9645 5.6832 5.9645 5.68315 5.9645 5.6831C5.9645 5.68305 5.9645 5.683 5.9645 5.68294C5.9645 5.68289 5.9645 5.68284 5.9645 5.68279C5.9645 5.68274 5.9645 5.68269 5.9645 5.68264C5.9645 5.68259 5.9645 5.68254 5.9645 5.68248C5.9645 5.68243 5.9645 5.68238 5.9645 5.68233C5.9645 5.68228 5.9645 5.68223 5.9645 5.68217C5.9645 5.68212 5.9645 5.68207 5.9645 5.68202C5.9645 5.68197 5.9645 5.68191 5.9645 5.68186C5.9645 5.68181 5.9645 5.68176 5.9645 5.6817C5.9645 5.68165 5.9645 5.6816 5.9645 5.68155C5.9645 5.68149 5.9645 5.68144 5.9645 5.68139C5.9645 5.68134 5.9645 5.68128 5.9645 5.68123C5.9645 5.68118 5.9645 5.68112 5.9645 5.68107C5.9645 5.68102 5.9645 5.68096 5.9645 5.68091C5.9645 5.68085 5.9645 5.6808 5.9645 5.68075C5.9645 5.68069 5.9645 5.68064 5.9645 5.68058C5.9645 5.68053 5.9645 5.68048 5.9645 5.68042C5.9645 5.68037 5.9645 5.68031 5.9645 5.68026C5.9645 5.6802 5.9645 5.68015 5.9645 5.68009C5.9645 5.68004 5.9645 5.67998 5.9645 5.67993C5.9645 5.67987 5.9645 5.67982 5.9645 5.67976C5.9645 5.67971 5.9645 5.67965 5.9645 5.6796C5.9645 5.67954 5.9645 5.67949 5.9645 5.67943C5.9645 5.67937 5.9645 5.67932 5.9645 5.67926C5.9645 5.67921 5.9645 5.67915 5.9645 5.67909C5.9645 5.67904 5.9645 5.67898 5.9645 5.67892C5.9645 5.67887 5.9645 5.67881 5.9645 5.67875C5.9645 5.6787 5.9645 5.67864 5.9645 5.67858C5.9645 5.67853 5.9645 5.67847 5.9645 5.67841C5.9645 5.67835 5.9645 5.6783 5.9645 5.67824C5.9645 5.67818 5.9645 5.67813 5.9645 5.67807C5.9645 5.67801 5.9645 5.67795 5.9645 5.67789C5.9645 5.67784 5.9645 5.67778 5.9645 5.67772C5.9645 5.67766 5.9645 5.6776 5.9645 5.67754C5.9645 5.67749 5.9645 5.67743 5.9645 5.67737C5.9645 5.67731 5.9645 5.67725 5.9645 5.67719C5.9645 5.67713 5.9645 5.67707 5.9645 5.67702C5.9645 5.67696 5.9645 5.6769 5.9645 5.67684C5.9645 5.67678 5.9645 5.67672 5.9645 5.67666C5.9645 5.6766 5.9645 5.67654 5.9645 5.67648C5.9645 5.67642 5.9645 5.67636 5.9645 5.6763C5.9645 5.67624 5.9645 5.67618 5.9645 5.67612C5.9645 5.67606 5.9645 5.676 5.9645 5.67594C5.9645 5.67588 5.9645 5.67582 5.9645 5.67576C5.9645 5.67569 5.9645 5.67563 5.9645 5.67557C5.9645 5.67551 5.9645 5.67545 5.9645 5.67539C5.9645 5.67533 5.9645 5.67527 5.9645 5.6752C5.9645 5.67514 5.9645 5.67508 5.9645 5.67502C5.9645 5.67496 5.9645 5.6749 5.9645 5.67483C5.9645 5.67477 5.9645 5.67471 5.9645 5.67465C5.9645 5.67458 5.9645 5.67452 5.9645 5.67446C5.9645 5.6744 5.9645 5.67433 5.9645 5.67427C5.9645 5.67421 5.9645 5.67415 5.9645 5.67408C5.9645 5.67402 5.9645 5.67396 5.9645 5.67389C5.9645 5.67383 5.9645 5.67377 5.9645 5.6737C5.9645 5.67364 5.9645 5.67357 5.9645 5.67351C5.9645 5.67345 5.9645 5.67338 5.9645 5.67332C5.9645 5.67326 5.9645 5.67319 5.9645 5.67313C5.9645 5.67306 5.9645 5.673 5.9645 5.67293C5.9645 5.67287 5.9645 5.6728 5.9645 5.67274C5.9645 5.67267 5.9645 5.67261 5.9645 5.67254L7.9645 5.67254C7.9645 5.67261 7.9645 5.67267 7.9645 5.67274C7.9645 5.6728 7.9645 5.67287 7.9645 5.67293C7.9645 5.673 7.9645 5.67306 7.9645 5.67313C7.9645 5.67319 7.9645 5.67326 7.9645 5.67332C7.9645 5.67338 7.9645 5.67345 7.9645 5.67351C7.9645 5.67357 7.9645 5.67364 7.9645 5.6737C7.9645 5.67377 7.9645 5.67383 7.9645 5.67389C7.9645 5.67396 7.9645 5.67402 7.9645 5.67408C7.9645 5.67415 7.9645 5.67421 7.9645 5.67427C7.9645 5.67433 7.9645 5.6744 7.9645 5.67446C7.9645 5.67452 7.9645 5.67458 7.9645 5.67465C7.9645 5.67471 7.9645 5.67477 7.9645 5.67483C7.9645 5.6749 7.9645 5.67496 7.9645 5.67502C7.9645 5.67508 7.9645 5.67514 7.9645 5.6752C7.9645 5.67527 7.9645 5.67533 7.9645 5.67539C7.9645 5.67545 7.9645 5.67551 7.9645 5.67557C7.9645 5.67563 7.9645 5.67569 7.9645 5.67576C7.9645 5.67582 7.9645 5.67588 7.9645 5.67594C7.9645 5.676 7.9645 5.67606 7.9645 5.67612C7.9645 5.67618 7.9645 5.67624 7.9645 5.6763C7.9645 5.67636 7.9645 5.67642 7.9645 5.67648C7.9645 5.67654 7.9645 5.6766 7.9645 5.67666C7.9645 5.67672 7.9645 5.67678 7.9645 5.67684C7.9645 5.6769 7.9645 5.67696 7.9645 5.67702C7.9645 5.67707 7.9645 5.67713 7.9645 5.67719C7.9645 5.67725 7.9645 5.67731 7.9645 5.67737C7.9645 5.67743 7.9645 5.67749 7.9645 5.67754C7.9645 5.6776 7.9645 5.67766 7.9645 5.67772C7.9645 5.67778 7.9645 5.67784 7.9645 5.67789C7.9645 5.67795 7.9645 5.67801 7.9645 5.67807C7.9645 5.67813 7.9645 5.67818 7.9645 5.67824C7.9645 5.6783 7.9645 5.67835 7.9645 5.67841C7.9645 5.67847 7.9645 5.67853 7.9645 5.67858C7.9645 5.67864 7.9645 5.6787 7.9645 5.67875C7.9645 5.67881 7.9645 5.67887 7.9645 5.67892C7.9645 5.67898 7.9645 5.67904 7.9645 5.67909C7.9645 5.67915 7.9645 5.67921 7.9645 5.67926C7.9645 5.67932 7.9645 5.67937 7.9645 5.67943C7.9645 5.67948 7.9645 5.67954 7.9645 5.6796C7.9645 5.67965 7.9645 5.67971 7.9645 5.67976C7.9645 5.67982 7.9645 5.67987 7.9645 5.67993C7.9645 5.67998 7.9645 5.68004 7.9645 5.68009C7.9645 5.68015 7.9645 5.6802 7.9645 5.68026C7.9645 5.68031 7.9645 5.68037 7.9645 5.68042C7.9645 5.68048 7.9645 5.68053 7.9645 5.68058C7.9645 5.68064 7.9645 5.68069 7.9645 5.68075C7.9645 5.6808 7.9645 5.68085 7.9645 5.68091C7.9645 5.68096 7.9645 5.68102 7.9645 5.68107C7.9645 5.68112 7.9645 5.68118 7.9645 5.68123C7.9645 5.68128 7.9645 5.68134 7.9645 5.68139C7.9645 5.68144 7.9645 5.68149 7.9645 5.68155C7.9645 5.6816 7.9645 5.68165 7.9645 5.6817C7.9645 5.68176 7.9645 5.68181 7.9645 5.68186C7.9645 5.68191 7.9645 5.68197 7.9645 5.68202C7.9645 5.68207 7.9645 5.68212 7.9645 5.68217C7.9645 5.68223 7.9645 5.68228 7.9645 5.68233C7.9645 5.68238 7.9645 5.68243 7.9645 5.68248C7.9645 5.68254 7.9645 5.68259 7.9645 5.68264C7.9645 5.68269 7.9645 5.68274 7.9645 5.68279C7.9645 5.68284 7.9645 5.68289 7.9645 5.68294C7.9645 5.68299 7.9645 5.68305 7.9645 5.6831C7.9645 5.68315 7.9645 5.6832 7.9645 5.68325C7.9645 5.6833 7.9645 5.68335 7.9645 5.6834C7.9645 5.68345 7.9645 5.6835 7.9645 5.68355C7.9645 5.6836 7.9645 5.68365 7.9645 5.6837C7.9645 5.68375 7.9645 5.6838 7.9645 5.68385C7.9645 5.6839 7.9645 5.68394 7.9645 5.68399C7.9645 5.68404 7.9645 5.68409 7.9645 5.68414C7.9645 5.68419 7.9645 5.68424 7.9645 5.68429C7.9645 5.68434 7.9645 5.68438 7.9645 5.68443C7.9645 5.68448 7.9645 5.68453 7.9645 5.68458C7.9645 5.68463 7.9645 5.68467 7.9645 5.68472C7.9645 5.68477 7.9645 5.68482 7.9645 5.68487C7.9645 5.68491 7.9645 5.68496 7.9645 5.68501C7.9645 5.68506 7.9645 5.68511 7.9645 5.68515C7.9645 5.6852 7.9645 5.68525 7.9645 5.68529C7.9645 5.68534 7.9645 5.68539 7.9645 5.68544C7.9645 5.68548 7.9645 5.68553 7.9645 5.68558C7.9645 5.68562 7.9645 5.68567 7.9645 5.68572C7.9645 5.68576 7.9645 5.68581 7.9645 5.68586C7.9645 5.6859 7.9645 5.68595 7.9645 5.686C7.9645 5.68604 7.9645 5.68609 7.9645 5.68613C7.9645 5.68618 7.9645 5.68623 7.9645 5.68627C7.9645 5.68632 7.9645 5.68636 7.9645 5.68641C7.9645 5.68645 7.9645 5.6865 7.9645 5.68654C7.9645 5.68659 7.9645 5.68663 7.9645 5.68668C7.9645 5.68672 7.9645 5.68677 7.9645 5.68681C7.9645 5.68686 7.9645 5.6869 7.9645 5.68695C7.9645 5.68699 7.9645 5.68704 7.9645 5.68708C7.9645 5.68713 7.9645 5.68717 7.9645 5.68721C7.9645 5.68726 7.9645 5.6873 7.9645 5.68735C7.9645 5.68739 7.9645 5.68744 7.9645 5.68748C7.9645 5.68752 7.9645 5.68757 7.9645 5.68761C7.9645 5.68765 7.9645 5.6877 7.9645 5.68774C7.9645 5.68778 7.9645 5.68783 7.9645 5.68787C7.9645 5.68791 7.9645 5.68796 7.9645 5.688C7.9645 5.68804 7.9645 5.68809 7.9645 5.68813C7.9645 5.68817 7.9645 5.68821 7.9645 5.68826C7.9645 5.6883 7.9645 5.68834 7.9645 5.68838C7.9645 5.68843 7.9645 5.68847 7.9645 5.68851C7.9645 5.68855 7.9645 5.68859 7.9645 5.68864C7.9645 5.68868 7.9645 5.68872 7.9645 5.68876C7.9645 5.6888 7.9645 5.68885 7.9645 5.68889C7.9645 5.68893 7.9645 5.68897 7.9645 5.68901C7.9645 5.68905 7.9645 5.68909 7.9645 5.68914C7.9645 5.68918 7.9645 5.68922 7.9645 5.68926C7.9645 5.6893 7.9645 5.68934 7.9645 5.68938C7.9645 5.68942 7.9645 5.68946 7.9645 5.6895C7.9645 5.68954 7.9645 5.68958 7.9645 5.68962C7.9645 5.68966 7.9645 5.68971 7.9645 5.68975C7.9645 5.68979 7.9645 5.68983 7.9645 5.68987C7.9645 5.68991 7.9645 5.68994 7.9645 5.68998C7.9645 5.69002 7.9645 5.69006 7.9645 5.6901C7.9645 5.69014 7.9645 5.69018 7.9645 5.69022C7.9645 5.69026 7.9645 5.6903 7.9645 5.69034C7.9645 5.69038 7.9645 5.69042 7.9645 5.69046C7.9645 5.6905 7.9645 5.69053 7.9645 5.69057C7.9645 5.69061 7.9645 5.69065 7.9645 5.69069C7.9645 5.69073 7.9645 5.69077 7.9645 5.69081C7.9645 5.69084 7.9645 5.69088 7.9645 5.69092C7.9645 5.69096 7.9645 5.691 7.9645 5.69103C7.9645 5.69107 7.9645 5.69111 7.9645 5.69115C7.9645 5.69119 7.9645 5.69122 7.9645 5.69126C7.9645 5.6913 7.9645 5.69134 7.9645 5.69137C7.9645 5.69141 7.9645 5.69145 7.9645 5.69149C7.9645 5.69152 7.9645 5.69156 7.9645 5.6916C7.9645 5.69163 7.9645 5.69167 7.9645 5.69171C7.9645 5.69174 7.9645 5.69178 7.9645 5.69182C7.9645 5.69185 7.9645 5.69189 7.9645 5.69193C7.9645 5.69196 7.9645 5.692 7.9645 5.69204C7.9645 5.69207 7.9645 5.69211 7.9645 5.69214C7.9645 5.69218 7.9645 5.69222 7.9645 5.69225C7.9645 5.69229 7.9645 5.69232 7.9645 5.69236C7.9645 5.69239 7.9645 5.69243 7.9645 5.69247C7.9645 5.6925 7.9645 5.69254 7.9645 5.69257C7.9645 5.69261 7.9645 5.69264 7.9645 5.69268C7.9645 5.69271 7.9645 5.69275 7.9645 5.69278C7.9645 5.69282 7.9645 5.69285 7.9645 5.69289C7.9645 5.69292 7.9645 5.69296 7.9645 5.69299C7.9645 5.69303 7.9645 5.69306 7.9645 5.69309C7.9645 5.69313 7.9645 5.69316 7.9645 5.6932C7.9645 5.69323 7.9645 5.69327 7.9645 5.6933C7.9645 5.69333 7.9645 5.69337 7.9645 5.6934C7.9645 5.69344 7.9645 5.69347 7.9645 5.6935C7.9645 5.69354 7.9645 5.69357 7.9645 5.6936C7.9645 5.69364 7.9645 5.69367 7.9645 5.6937C7.9645 5.69374 7.9645 5.69377 7.9645 5.6938C7.9645 5.69384 7.9645 5.69387 7.9645 5.6939C7.9645 5.69394 7.9645 5.69397 7.9645 5.694C7.9645 5.69403 7.9645 5.69407 7.9645 5.6941C7.9645 5.69413 7.9645 5.69416 7.9645 5.6942C7.9645 5.69423 7.9645 5.69426 7.9645 5.69429C7.9645 5.69433 7.9645 5.69436 7.9645 5.69439C7.9645 5.69442 7.9645 5.69445 7.9645 5.69448C7.9645 5.69452 7.9645 5.69455 7.9645 5.69458C7.9645 5.69461 7.9645 5.69464 7.9645 5.69467C7.9645 5.69471 7.9645 5.69474 7.9645 5.69477C7.9645 5.6948 7.9645 5.69483 7.9645 5.69486C7.9645 5.69489 7.9645 5.69492 7.9645 5.69496C7.9645 5.69499 7.9645 5.69502 7.9645 5.69505C7.9645 5.69508 7.9645 5.69511 7.9645 5.69514C7.9645 5.69517 7.9645 5.6952 7.9645 5.69523C7.9645 5.69526 7.9645 5.69529 7.9645 5.69532C7.9645 5.69535 7.9645 5.69538 7.9645 5.69541C7.9645 5.69544 7.9645 5.69547 7.9645 5.6955C7.9645 5.69553 7.9645 5.69556 7.9645 5.69559C7.9645 5.69562 7.9645 5.69565 7.9645 5.69568C7.9645 5.69571 7.9645 5.69574 7.9645 5.69577C7.9645 5.6958 7.9645 5.69583 7.9645 5.69586C7.9645 5.69589 7.9645 5.69592 7.9645 5.69595C7.9645 5.69597 7.9645 5.696 7.9645 5.69603C7.9645 5.69606 7.9645 5.69609 7.9645 5.69612C7.9645 5.69615 7.9645 5.69618 7.9645 5.6962C7.9645 5.69623 7.9645 5.69626 7.9645 5.69629C7.9645 5.69632 7.9645 5.69635 7.9645 5.69638C7.9645 5.6964 7.9645 5.69643 7.9645 5.69646C7.9645 5.69649 7.9645 5.69652 7.9645 5.69654C7.9645 5.69657 7.9645 5.6966 7.9645 5.69663C7.9645 5.69665 7.9645 5.69668 7.9645 5.69671C7.9645 5.69674 7.9645 5.69676 7.9645 5.69679C7.9645 5.69682 7.9645 5.69685 7.9645 5.69687C7.9645 5.6969 7.9645 5.69693 7.9645 5.69696C7.9645 5.69698 7.9645 5.69701 7.9645 5.69704C7.9645 5.69706 7.9645 5.69709 7.9645 5.69712C7.9645 5.69714 7.9645 5.69717 7.9645 5.6972C7.9645 5.69722 7.9645 5.69725 7.9645 5.69728C7.9645 5.6973 7.9645 5.69733 7.9645 5.69735C7.9645 5.69738 7.9645 5.69741 7.9645 5.69743C7.9645 5.69746 7.9645 5.69749 7.9645 5.69751C7.9645 5.69754 7.9645 5.69756 7.9645 5.69759C7.9645 5.69761 7.9645 5.69764 7.9645 5.69767C7.9645 5.69769 7.9645 5.69772 7.9645 5.69774C7.9645 5.69777 7.9645 5.69779 7.9645 5.69782C7.9645 5.69784 7.9645 5.69787 7.9645 5.69789C7.9645 5.69792 7.9645 5.69794 7.9645 5.69797C7.9645 5.69799 7.9645 5.69802 7.9645 5.69804C7.9645 5.69807 7.9645 5.69809 7.9645 5.69812C7.9645 5.69814 7.9645 5.69817 7.9645 5.69819C7.9645 5.69822 7.9645 5.69824 7.9645 5.69826C7.9645 5.69829 7.9645 5.69831 7.9645 5.69834C7.9645 5.69836 7.9645 5.69839 7.9645 5.69841C7.9645 5.69843 7.9645 5.69846 7.9645 5.69848C7.9645 5.69851 7.9645 5.69853 7.9645 5.69855C7.9645 5.69858 7.9645 5.6986 7.9645 5.69862C7.9645 5.69865 7.9645 5.69867 7.9645 5.69869C7.9645 5.69872 7.9645 5.69874 7.9645 5.69876C7.9645 5.69879 7.9645 5.69881 7.9645 5.69883C7.9645 5.69886 7.9645 5.69888 7.9645 5.6989C7.9645 5.69893 7.9645 5.69895 7.9645 5.69897C7.9645 5.69899 7.9645 5.69902 7.9645 5.69904C7.9645 5.69906 7.9645 5.69909 7.9645 5.69911C7.9645 5.69913 7.9645 5.69915 7.9645 5.69918C7.9645 5.6992 7.9645 5.69922 7.9645 5.69924C7.9645 5.69926 7.9645 5.69929 7.9645 5.69931C7.9645 5.69933 7.9645 5.69935 7.9645 5.69937C7.9645 5.6994 7.9645 5.69942 7.9645 5.69944C7.9645 5.69946 7.9645 5.69948 7.9645 5.6995C7.9645 5.69953 7.9645 5.69955 7.9645 5.69957C7.9645 5.69959 7.9645 5.69961 7.9645 5.69963C7.9645 5.69965 7.9645 5.69968 7.9645 5.6997C7.9645 5.69972 7.9645 5.69974 7.9645 5.69976C7.9645 5.69978 7.9645 5.6998 7.9645 5.69982C7.9645 5.69984 7.9645 5.69986 7.9645 5.69989C7.9645 5.69991 7.9645 5.69993 7.9645 5.69995C7.9645 5.69997 7.9645 5.69999 7.9645 5.70001C7.9645 5.70003 7.9645 5.70005 7.9645 5.70007C7.9645 5.70009 7.9645 5.70011 7.9645 5.70013C7.9645 5.70015 7.9645 5.70017 7.9645 5.70019C7.9645 5.70021 7.9645 5.70023 7.9645 5.70025C7.9645 5.70027 7.9645 5.70029 7.9645 5.70031C7.9645 5.70033 7.9645 5.70035 7.9645 5.70037C7.9645 5.70039 7.9645 5.70041 7.9645 5.70043C7.9645 5.70045 7.9645 5.70047 7.9645 5.70049C7.9645 5.70051 7.9645 5.70053 7.9645 5.70054C7.9645 5.70056 7.9645 5.70058 7.9645 5.7006C7.9645 5.70062 7.9645 5.70064 7.9645 5.70066C7.9645 5.70068 7.9645 5.7007 7.9645 5.70072C7.9645 5.70073 7.9645 5.70075 7.9645 5.70077C7.9645 5.70079 7.9645 5.70081 7.9645 5.70083C7.9645 5.70085 7.9645 5.70086 7.9645 5.70088C7.9645 5.7009 7.9645 5.70092 7.9645 5.70094C7.9645 5.70096 7.9645 5.70097 7.9645 5.70099C7.9645 5.70101 7.9645 5.70103 7.9645 5.70105C7.9645 5.70106 7.9645 5.70108 7.9645 5.7011C7.9645 5.70112 7.9645 5.70114 7.9645 5.70115C7.9645 5.70117 7.9645 5.70119 7.9645 5.70121C7.9645 5.70122 7.9645 5.70124 7.9645 5.70126C7.9645 5.70128 7.9645 5.70129 7.9645 5.70131C7.9645 5.70133 7.9645 5.70135 7.9645 5.70136C7.9645 5.70138 7.9645 5.7014 7.9645 5.70141C7.9645 5.70143 7.9645 5.70145 7.9645 5.70147C7.9645 5.70148 7.9645 5.7015 7.9645 5.70152C7.9645 5.70153 7.9645 5.70155 7.9645 5.70157C7.9645 5.70158 7.9645 5.7016 7.9645 5.70162C7.9645 5.70163 7.9645 5.70165 7.9645 5.70167C7.9645 5.70168 7.9645 5.7017 7.9645 5.70171C7.9645 5.70173 7.9645 5.70175 7.9645 5.70176C7.9645 5.70178 7.9645 5.70179 7.9645 5.70181C7.9645 5.70183 7.9645 5.70184 7.9645 5.70186C7.9645 5.70187 7.9645 5.70189 7.9645 5.70191C7.9645 5.70192 7.9645 5.70194 7.9645 5.70195C7.9645 5.70197 7.9645 5.70198 7.9645 5.702C7.9645 5.70202 7.9645 5.70203 7.9645 5.70205C7.9645 5.70206 7.9645 5.70208 7.9645 5.70209C7.9645 5.70211 7.9645 5.70212 7.9645 5.70214C7.9645 5.70215 7.9645 5.70217 7.9645 5.70218C7.9645 5.7022 7.9645 5.70221 7.9645 5.70223C7.9645 5.70224 7.9645 5.70226 7.9645 5.70227C7.9645 5.70229 7.9645 5.7023 7.9645 5.70232C7.9645 5.70233 7.9645 5.70235 7.9645 5.70236C7.9645 5.70238 7.9645 5.70239 7.9645 5.7024C7.9645 5.70242 7.9645 5.70243 7.9645 5.70245C7.9645 5.70246 7.9645 5.70248 7.9645 5.70249C7.9645 5.7025 7.9645 5.70252 7.9645 5.70253C7.9645 5.70255 7.9645 5.70256 7.9645 5.70257C7.9645 5.70259 7.9645 5.7026 7.9645 5.70262C7.9645 5.70263 7.9645 5.70264 7.9645 5.70266C7.9645 5.70267 7.9645 5.70269 7.9645 5.7027C7.9645 5.70271 7.9645 5.70273 7.9645 5.70274C7.9645 5.70275 7.9645 5.70277 7.9645 5.70278C7.9645 5.70279 7.9645 5.70281 7.9645 5.70282C7.9645 5.70283 7.9645 5.70285 7.9645 5.70286C7.9645 5.70287 7.9645 5.70289 7.9645 5.7029C7.9645 5.70291 7.9645 5.70292 7.9645 5.70294C7.9645 5.70295 7.9645 5.70296 7.9645 5.70298C7.9645 5.70299 7.9645 5.703 7.9645 5.70301C7.9645 5.70303 7.9645 5.70304 7.9645 5.70305C7.9645 5.70306 7.9645 5.70308 7.9645 5.70309C7.9645 5.7031 7.9645 5.70311 7.9645 5.70313C7.9645 5.70314 7.9645 5.70315 7.9645 5.70316C7.9645 5.70318 7.9645 5.70319 7.9645 5.7032C7.9645 5.70321 7.9645 5.70322 7.9645 5.70324C7.9645 5.70325 7.9645 5.70326 7.9645 5.70327C7.9645 5.70328 7.9645 5.7033 7.9645 5.70331C7.9645 5.70332 7.9645 5.70333 7.9645 5.70334C7.9645 5.70335 7.9645 5.70337 7.9645 5.70338C7.9645 5.70339 7.9645 5.7034 7.9645 5.70341C7.9645 5.70342 7.9645 5.70344 7.9645 5.70345C7.9645 5.70346 7.9645 5.70347 7.9645 5.70348C7.9645 5.70349 7.9645 5.7035 7.9645 5.70351C7.9645 5.70353 7.9645 5.70354 7.9645 5.70355C7.9645 5.70356 7.9645 5.70357 7.9645 5.70358C7.9645 5.70359 7.9645 5.7036 7.9645 5.70361C7.9645 5.70362 7.9645 5.70364 7.9645 5.70365C7.9645 5.70366 7.9645 5.70367 7.9645 5.70368C7.9645 5.70369 7.9645 5.7037 7.9645 5.70371C7.9645 5.70372 7.9645 5.70373 7.9645 5.70374C7.9645 5.70375 7.9645 5.70376 7.9645 5.70377C7.9645 5.70378 7.9645 5.70379 7.9645 5.7038C7.9645 5.70381 7.9645 5.70382 7.9645 5.70383C7.9645 5.70384 7.9645 5.70385 7.9645 5.70386C7.9645 5.70387 7.9645 5.70388 7.9645 5.70389C7.9645 5.7039 7.9645 5.70391 7.9645 5.70392C7.9645 5.70393 7.9645 5.70394 7.9645 5.70395C7.9645 5.70396 7.9645 5.70397 7.9645 5.70398C7.9645 5.70399 7.9645 5.704 7.9645 5.70401C7.9645 5.70402 7.9645 5.70403 7.9645 5.70404C7.9645 5.70405 7.9645 5.70406 7.9645 5.70407C7.9645 5.70408 7.9645 5.70409 7.9645 5.7041C7.9645 5.7041 7.9645 5.70411 7.9645 5.70412C7.9645 5.70413 7.9645 5.70414 7.9645 5.70415C7.9645 5.70416 7.9645 5.70417 7.9645 5.70418C7.9645 5.70419 7.9645 5.7042 7.9645 5.7042C7.9645 5.70421 7.9645 5.70422 7.9645 5.70423C7.9645 5.70424 7.9645 5.70425 7.9645 5.70426C7.9645 5.70427 7.9645 5.70427 7.9645 5.70428C7.9645 5.70429 7.9645 5.7043 7.9645 5.70431C7.9645 5.70432 7.9645 5.70433 7.9645 5.70433C7.9645 5.70434 7.9645 5.70435 7.9645 5.70436C7.9645 5.70437 7.9645 5.70438 7.9645 5.70438C7.9645 5.70439 7.9645 5.7044 7.9645 5.70441C7.9645 5.70442 7.9645 5.70442 7.9645 5.70443C7.9645 5.70444 7.9645 5.70445 7.9645 5.70446C7.9645 5.70446 7.9645 5.70447 7.9645 5.70448C7.9645 5.70449 7.9645 5.7045 7.9645 5.7045C7.9645 5.70451 7.9645 5.70452 7.9645 5.70453C7.9645 5.70453 7.9645 5.70454 7.9645 5.70455C7.9645 5.70456 7.9645 5.70457 7.9645 5.70457C7.9645 5.70458 7.9645 5.70459 7.9645 5.70459C7.9645 5.7046 7.9645 5.70461 7.9645 5.70462C7.9645 5.70462 7.9645 5.70463 7.9645 5.70464C7.9645 5.70465 7.9645 5.70465 7.9645 5.70466C7.9645 5.70467 7.9645 5.70467 7.9645 5.70468C7.9645 5.70469 7.9645 5.7047 7.9645 5.7047C7.9645 5.70471 7.9645 5.70472 7.9645 5.70472C7.9645 5.70473 7.9645 5.70474 7.9645 5.70474C7.9645 5.70475 7.9645 5.70476 7.9645 5.70477C7.9645 5.70477 7.9645 5.70478 7.9645 5.70479C7.9645 5.70479 7.9645 5.7048 7.9645 5.70481C7.9645 5.70481 7.9645 5.70482 7.9645 5.70483C7.9645 5.70483 7.9645 5.70484 7.9645 5.70484C7.9645 5.70485 7.9645 5.70486 7.9645 5.70486C7.9645 5.70487 7.9645 5.70488 7.9645 5.70488C7.9645 5.70489 7.9645 5.7049 7.9645 5.7049C7.9645 5.70491 7.9645 5.70491 7.9645 5.70492C7.9645 5.70493 7.9645 5.70493 7.9645 5.70494C7.9645 5.70494 7.9645 5.70495 7.9645 5.70496C7.9645 5.70496 7.9645 5.70497 7.9645 5.70497C7.9645 5.70498 7.9645 5.70499 7.9645 5.70499C7.9645 5.705 7.9645 5.705 7.9645 5.70501C7.9645 5.70501 7.9645 5.70502 7.9645 5.70503C7.9645 5.70503 7.9645 5.70504 7.9645 5.70504C7.9645 5.70505 7.9645 5.70505 7.9645 5.70506C7.9645 5.70506 7.9645 5.70507 7.9645 5.70508C7.9645 5.70508 7.9645 5.70509 7.9645 5.70509C7.9645 5.7051 7.9645 5.7051 7.9645 5.70511C7.9645 5.70511 7.9645 5.70512 7.9645 5.70512C7.9645 5.70513 7.9645 5.70513 7.9645 5.70514C7.9645 5.70514 7.9645 5.70515 7.9645 5.70515C7.9645 5.70516 7.9645 5.70516 7.9645 5.70517C7.9645 5.70517 7.9645 5.70518 7.9645 5.70518C7.9645 5.70519 7.9645 5.70519 7.9645 5.7052C7.9645 5.7052 7.9645 5.70521 7.9645 5.70521C7.9645 5.70522 7.9645 5.70522 7.9645 5.70523C7.9645 5.70523 7.9645 5.70524 7.9645 5.70524C7.9645 5.70525 7.9645 5.70525 7.9645 5.70526C7.9645 5.70526 7.9645 5.70527 7.9645 5.70527C7.9645 5.70527 7.9645 5.70528 7.9645 5.70528C7.9645 5.70529 7.9645 5.70529 7.9645 5.7053C7.9645 5.7053 7.9645 5.70531 7.9645 5.70531C7.9645 5.70531 7.9645 5.70532 7.9645 5.70532C7.9645 5.70533 7.9645 5.70533 7.9645 5.70534C7.9645 5.70534 7.9645 5.70534 7.9645 5.70535C7.9645 5.70535 7.9645 5.70536 7.9645 5.70536C7.9645 5.70536 7.9645 5.70537 7.9645 5.70537C7.9645 5.70538 7.9645 5.70538 7.9645 5.70538C7.9645 5.70539 7.9645 5.70539 7.9645 5.7054C7.9645 5.7054 7.9645 5.7054 7.9645 5.70541C7.9645 5.70541 7.9645 5.70541 7.9645 5.70542C7.9645 5.70542 7.9645 5.70543 7.9645 5.70543C7.9645 5.70543 7.9645 5.70544 7.9645 5.70544C7.9645 5.70544 7.9645 5.70545 7.9645 5.70545C7.9645 5.70546 7.9645 5.70546 7.9645 5.70546C7.9645 5.70547 7.9645 5.70547 7.9645 5.70547C7.9645 5.70548 7.9645 5.70548 7.9645 5.70548C7.9645 5.70549 7.9645 5.70549 7.9645 5.70549C7.9645 5.7055 7.9645 5.7055 7.9645 5.7055C7.9645 5.70551 7.9645 5.70551 7.9645 5.70551C7.9645 5.70552 7.9645 5.70552 7.9645 5.70552C7.9645 5.70553 7.9645 5.70553 7.9645 5.70553C7.9645 5.70554 7.9645 5.70554 7.9645 5.70554C7.9645 5.70554 7.9645 5.70555 7.9645 5.70555C7.9645 5.70555 7.9645 5.70556 7.9645 5.70556C7.9645 5.70556 7.9645 5.70557 7.9645 5.70557C7.9645 5.70557 7.9645 5.70557 7.9645 5.70558C7.9645 5.70558 7.9645 5.70558 7.9645 5.70559C7.9645 5.70559 7.9645 5.70559 7.9645 5.70559C7.9645 5.7056 7.9645 5.7056 7.9645 5.7056C7.9645 5.7056 7.9645 5.70561 7.9645 5.70561C7.9645 5.70561 7.9645 5.70561 7.9645 5.70562C7.9645 5.70562 7.9645 5.70562 7.9645 5.70563C7.9645 5.70563 7.9645 5.70563 7.9645 5.70563C7.9645 5.70564 7.9645 5.70564 7.9645 5.70564C7.9645 5.70564 7.9645 5.70564 7.9645 5.70565C7.9645 5.70565 7.9645 5.70565 7.9645 5.70565C7.9645 5.70566 7.9645 5.70566 7.9645 5.70566C7.9645 5.70566 7.9645 5.70567 7.9645 5.70567C7.9645 5.70567 7.9645 5.70567 7.9645 5.70567C7.9645 5.70568 7.9645 5.70568 7.9645 5.70568C7.9645 5.70568 7.9645 5.70569 7.9645 5.70569C7.9645 5.70569 7.9645 5.70569 7.9645 5.70569C7.9645 5.7057 7.9645 5.7057 7.9645 5.7057C7.9645 5.7057 7.9645 5.7057 7.9645 5.70571C7.9645 5.70571 7.9645 5.70571 7.9645 5.70571C7.9645 5.70571 7.9645 5.70572 7.9645 5.70572C7.9645 5.70572 7.9645 5.70572 7.9645 5.70572C7.9645 5.70572 7.9645 5.70573 7.9645 5.70573C7.9645 5.70573 7.9645 5.70573 7.9645 5.70573C7.9645 5.70574 7.9645 5.70574 7.9645 5.70574C7.9645 5.70574 7.9645 5.70574 7.9645 5.70574C7.9645 5.70575 7.9645 5.70575 7.9645 5.70575C7.9645 5.70575 7.9645 5.70575 7.9645 5.70575C7.9645 5.70576 7.9645 5.70576 7.9645 5.70576C7.9645 5.70576 7.9645 5.70576 7.9645 5.70576C7.9645 5.70576 7.9645 5.70577 7.9645 5.70577C7.9645 5.70577 7.9645 5.70577 7.9645 5.70577C7.9645 5.70577 7.9645 5.70577 7.9645 5.70578C7.9645 5.70578 7.9645 5.70578 7.9645 5.70578C7.9645 5.70578 7.9645 5.70578 7.9645 5.70578C7.9645 5.70579 7.9645 5.70579 7.9645 5.70579C7.9645 5.70579 7.9645 5.70579 7.9645 5.70579C7.9645 5.70579 7.9645 5.70579 7.9645 5.7058C7.9645 5.7058 7.9645 5.7058 7.9645 5.7058C7.9645 5.7058 7.9645 5.7058 7.9645 5.7058C7.9645 5.7058 7.9645 5.7058 7.9645 5.70581C7.9645 5.70581 7.9645 5.70581 7.9645 5.70581C7.9645 5.70581 7.9645 5.70581 7.9645 5.70581C7.9645 5.70581 7.9645 5.70581 7.9645 5.70582C7.9645 5.70582 7.9645 5.70582 7.9645 5.70582C7.9645 5.70582 7.9645 5.70582 7.9645 5.70582C7.9645 5.70582 7.9645 5.70582 7.9645 5.70582C7.9645 5.70583 7.9645 5.70583 7.9645 5.70583C7.9645 5.70583 7.9645 5.70583 7.9645 5.70583C7.9645 5.70583 7.9645 5.70583 7.9645 5.70583C7.9645 5.70583 7.9645 5.70583 7.9645 5.70583C7.9645 5.70584 7.9645 5.70584 7.9645 5.70584C7.9645 5.70584 7.9645 5.70584 7.9645 5.70584C7.9645 5.70584 7.9645 5.70584 7.9645 5.70584C7.9645 5.70584 7.9645 5.70584 7.9645 5.70584C7.9645 5.70584 7.9645 5.70585 7.9645 5.70585C7.9645 5.70585 7.9645 5.70585 7.9645 5.70585C7.9645 5.70585 7.9645 5.70585 7.9645 5.70585C7.9645 5.70585 7.9645 5.70585 7.9645 5.70585C7.9645 5.70585 7.9645 5.70585 7.9645 5.70585C7.9645 5.70585 7.9645 5.70585 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70586C7.9645 5.70586 7.9645 5.70586 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587L7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587C7.9645 5.70587 7.9645 5.70587 7.9645 5.70587L7.9645 5.70587C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588L7.9645 5.70588L7.9645 5.70588L7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588L7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C7.9645 5.70588 7.9645 5.70588 7.9645 5.70588C6.9645 5.70588 5.9645 5.70588 6.9645 5.70588ZM6.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254L5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254L5.9645 5.67254L5.9645 5.67254L5.9645 5.67254L5.9645 5.67254L5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254L5.9645 5.67254C5.9645 5.67254 5.9645 5.67254 5.9645 5.67254L5.9645 5.67254C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67253 5.9645 5.67253C5.9645 5.67253 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67252C5.9645 5.67252 5.9645 5.67252 5.9645 5.67251C5.9645 5.67251 5.9645 5.67251 5.9645 5.67251C5.9645 5.67251 5.9645 5.67251 5.9645 5.67251C5.9645 5.67251 5.9645 5.67251 5.9645 5.67251C5.9645 5.67251 5.9645 5.67251 5.9645 5.67251C5.9645 5.67251 5.9645 5.67251 5.9645 5.6725C5.9645 5.6725 5.9645 5.6725 5.9645 5.6725C5.9645 5.6725 5.9645 5.6725 5.9645 5.6725C5.9645 5.6725 5.9645 5.6725 5.9645 5.6725C5.9645 5.6725 5.9645 5.6725 5.9645 5.6725C5.9645 5.67249 5.9645 5.67249 5.9645 5.67249C5.9645 5.67249 5.9645 5.67249 5.9645 5.67249C5.9645 5.67249 5.9645 5.67249 5.9645 5.67249C5.9645 5.67249 5.9645 5.67249 5.9645 5.67248C5.9645 5.67248 5.9645 5.67248 5.9645 5.67248C5.9645 5.67248 5.9645 5.67248 5.9645 5.67248C5.9645 5.67248 5.9645 5.67248 5.9645 5.67248C5.9645 5.67247 5.9645 5.67247 5.9645 5.67247C5.9645 5.67247 5.9645 5.67247 5.9645 5.67247C5.9645 5.67247 5.9645 5.67247 5.9645 5.67247C5.9645 5.67246 5.9645 5.67246 5.9645 5.67246C5.9645 5.67246 5.9645 5.67246 5.9645 5.67246C5.9645 5.67246 5.9645 5.67246 5.9645 5.67246C5.9645 5.67245 5.9645 5.67245 5.9645 5.67245C5.9645 5.67245 5.9645 5.67245 5.9645 5.67245C5.9645 5.67245 5.9645 5.67244 5.9645 5.67244C5.9645 5.67244 5.9645 5.67244 5.9645 5.67244C5.9645 5.67244 5.9645 5.67244 5.9645 5.67243C5.9645 5.67243 5.9645 5.67243 5.9645 5.67243C5.9645 5.67243 5.9645 5.67243 5.9645 5.67243C5.9645 5.67242 5.9645 5.67242 5.9645 5.67242C5.9645 5.67242 5.9645 5.67242 5.9645 5.67242C5.9645 5.67241 5.9645 5.67241 5.9645 5.67241C5.9645 5.67241 5.9645 5.67241 5.9645 5.67241C5.9645 5.6724 5.9645 5.6724 5.9645 5.6724C5.9645 5.6724 5.9645 5.6724 5.9645 5.6724C5.9645 5.67239 5.9645 5.67239 5.9645 5.67239C5.9645 5.67239 5.9645 5.67239 5.9645 5.67239C5.9645 5.67238 5.9645 5.67238 5.9645 5.67238C5.9645 5.67238 5.9645 5.67238 5.9645 5.67237C5.9645 5.67237 5.9645 5.67237 5.9645 5.67237C5.9645 5.67237 5.9645 5.67236 5.9645 5.67236C5.9645 5.67236 5.9645 5.67236 5.9645 5.67236C5.9645 5.67235 5.9645 5.67235 5.9645 5.67235C5.9645 5.67235 5.9645 5.67235 5.9645 5.67234C5.9645 5.67234 5.9645 5.67234 5.9645 5.67234C5.9645 5.67234 5.9645 5.67233 5.9645 5.67233C5.9645 5.67233 5.9645 5.67233 5.9645 5.67232C5.9645 5.67232 5.9645 5.67232 5.9645 5.67232C5.9645 5.67231 5.9645 5.67231 5.9645 5.67231C5.9645 5.67231 5.9645 5.67231 5.9645 5.6723C5.9645 5.6723 5.9645 5.6723 5.9645 5.6723C5.9645 5.67229 5.9645 5.67229 5.9645 5.67229C5.9645 5.67229 5.9645 5.67228 5.9645 5.67228C5.9645 5.67228 5.9645 5.67227 5.9645 5.67227C5.9645 5.67227 5.9645 5.67227 5.9645 5.67226C5.9645 5.67226 5.9645 5.67226 5.9645 5.67226C5.9645 5.67225 5.9645 5.67225 5.9645 5.67225C5.9645 5.67225 5.9645 5.67224 5.9645 5.67224C5.9645 5.67224 5.9645 5.67223 5.9645 5.67223C5.9645 5.67223 5.9645 5.67223 5.9645 5.67222C5.9645 5.67222 5.9645 5.67222 5.9645 5.67221C5.9645 5.67221 5.9645 5.67221 5.9645 5.6722C5.9645 5.6722 5.9645 5.6722 5.9645 5.67219C5.9645 5.67219 5.9645 5.67219 5.9645 5.67219C5.9645 5.67218 5.9645 5.67218 5.9645 5.67218C5.9645 5.67217 5.9645 5.67217 5.9645 5.67217C5.9645 5.67216 5.9645 5.67216 5.9645 5.67216C5.9645 5.67215 5.9645 5.67215 5.9645 5.67215C5.9645 5.67214 5.9645 5.67214 5.9645 5.67214C5.9645 5.67213 5.9645 5.67213 5.9645 5.67213C5.9645 5.67212 5.9645 5.67212 5.9645 5.67211C5.9645 5.67211 5.9645 5.67211 5.9645 5.6721C5.9645 5.6721 5.9645 5.6721 5.9645 5.67209C5.9645 5.67209 5.9645 5.67209 5.9645 5.67208C5.9645 5.67208 5.9645 5.67207 5.9645 5.67207C5.9645 5.67207 5.9645 5.67206 5.9645 5.67206C5.9645 5.67205 5.9645 5.67205 5.9645 5.67205C5.9645 5.67204 5.9645 5.67204 5.9645 5.67203C5.9645 5.67203 5.9645 5.67203 5.9645 5.67202C5.9645 5.67202 5.9645 5.67201 5.9645 5.67201C5.9645 5.67201 5.9645 5.672 5.9645 5.672C5.9645 5.67199 5.9645 5.67199 5.9645 5.67199C5.9645 5.67198 5.9645 5.67198 5.9645 5.67197C5.9645 5.67197 5.9645 5.67196 5.9645 5.67196C5.9645 5.67195 5.9645 5.67195 5.9645 5.67195C5.9645 5.67194 5.9645 5.67194 5.9645 5.67193C5.9645 5.67193 5.9645 5.67192 5.9645 5.67192C5.9645 5.67191 5.9645 5.67191 5.9645 5.6719C5.9645 5.6719 5.9645 5.6719 5.9645 5.67189C5.9645 5.67189 5.9645 5.67188 5.9645 5.67188C5.9645 5.67187 5.9645 5.67187 5.9645 5.67186C5.9645 5.67186 5.9645 5.67185 5.9645 5.67185C5.9645 5.67184 5.9645 5.67184 5.9645 5.67183C5.9645 5.67183 5.9645 5.67182 5.9645 5.67182C5.9645 5.67181 5.9645 5.67181 5.9645 5.6718C5.9645 5.6718 5.9645 5.67179 5.9645 5.67179C5.9645 5.67178 5.9645 5.67178 5.9645 5.67177C5.9645 5.67177 5.9645 5.67176 5.9645 5.67175C5.9645 5.67175 5.9645 5.67174 5.9645 5.67174C5.9645 5.67173 5.9645 5.67173 5.9645 5.67172C5.9645 5.67172 5.9645 5.67171 5.9645 5.67171C5.9645 5.6717 5.9645 5.67169 5.9645 5.67169C5.9645 5.67168 5.9645 5.67168 5.9645 5.67167C5.9645 5.67167 5.9645 5.67166 5.9645 5.67165C5.9645 5.67165 5.9645 5.67164 5.9645 5.67164C5.9645 5.67163 5.9645 5.67162 5.9645 5.67162C5.9645 5.67161 5.9645 5.67161 5.9645 5.6716C5.9645 5.67159 5.9645 5.67159 5.9645 5.67158C5.9645 5.67158 5.9645 5.67157 5.9645 5.67156C5.9645 5.67156 5.9645 5.67155 5.9645 5.67155C5.9645 5.67154 5.9645 5.67153 5.9645 5.67153C5.9645 5.67152 5.9645 5.67151 5.9645 5.67151C5.9645 5.6715 5.9645 5.67149 5.9645 5.67149C5.9645 5.67148 5.9645 5.67147 5.9645 5.67147C5.9645 5.67146 5.9645 5.67145 5.9645 5.67145C5.9645 5.67144 5.9645 5.67143 5.9645 5.67143C5.9645 5.67142 5.9645 5.67141 5.9645 5.67141C5.9645 5.6714 5.9645 5.67139 5.9645 5.67139C5.9645 5.67138 5.9645 5.67137 5.9645 5.67137C5.9645 5.67136 5.9645 5.67135 5.9645 5.67134C5.9645 5.67134 5.9645 5.67133 5.9645 5.67132C5.9645 5.67132 5.9645 5.67131 5.9645 5.6713C5.9645 5.67129 5.9645 5.67129 5.9645 5.67128C5.9645 5.67127 5.9645 5.67126 5.9645 5.67126C5.9645 5.67125 5.9645 5.67124 5.9645 5.67123C5.9645 5.67123 5.9645 5.67122 5.9645 5.67121C5.9645 5.6712 5.9645 5.6712 5.9645 5.67119C5.9645 5.67118 5.9645 5.67117 5.9645 5.67117C5.9645 5.67116 5.9645 5.67115 5.9645 5.67114C5.9645 5.67113 5.9645 5.67113 5.9645 5.67112C5.9645 5.67111 5.9645 5.6711 5.9645 5.6711C5.9645 5.67109 5.9645 5.67108 5.9645 5.67107C5.9645 5.67106 5.9645 5.67105 5.9645 5.67105C5.9645 5.67104 5.9645 5.67103 5.9645 5.67102C5.9645 5.67101 5.9645 5.671 5.9645 5.671C5.9645 5.67099 5.9645 5.67098 5.9645 5.67097C5.9645 5.67096 5.9645 5.67095 5.9645 5.67095C5.9645 5.67094 5.9645 5.67093 5.9645 5.67092C5.9645 5.67091 5.9645 5.6709 5.9645 5.67089C5.9645 5.67088 5.9645 5.67088 5.9645 5.67087C5.9645 5.67086 5.9645 5.67085 5.9645 5.67084C5.9645 5.67083 5.9645 5.67082 5.9645 5.67081C5.9645 5.6708 5.9645 5.67079 5.9645 5.67079C5.9645 5.67078 5.9645 5.67077 5.9645 5.67076C5.9645 5.67075 5.9645 5.67074 5.9645 5.67073C5.9645 5.67072 5.9645 5.67071 5.9645 5.6707C5.9645 5.67069 5.9645 5.67068 5.9645 5.67067C5.9645 5.67066 5.9645 5.67065 5.9645 5.67064C5.9645 5.67063 5.9645 5.67062 5.9645 5.67062C5.9645 5.67061 5.9645 5.6706 5.9645 5.67059C5.9645 5.67058 5.9645 5.67057 5.9645 5.67056C5.9645 5.67055 5.9645 5.67054 5.9645 5.67053C5.9645 5.67052 5.9645 5.67051 5.9645 5.6705C5.9645 5.67049 5.9645 5.67048 5.9645 5.67047C5.9645 5.67046 5.9645 5.67045 5.9645 5.67043C5.9645 5.67042 5.9645 5.67041 5.9645 5.6704C5.9645 5.67039 5.9645 5.67038 5.9645 5.67037C5.9645 5.67036 5.9645 5.67035 5.9645 5.67034C5.9645 5.67033 5.9645 5.67032 5.9645 5.67031C5.9645 5.6703 5.9645 5.67029 5.9645 5.67028C5.9645 5.67026 5.9645 5.67025 5.9645 5.67024C5.9645 5.67023 5.9645 5.67022 5.9645 5.67021C5.9645 5.6702 5.9645 5.67019 5.9645 5.67018C5.9645 5.67017 5.9645 5.67015 5.9645 5.67014C5.9645 5.67013 5.9645 5.67012 5.9645 5.67011C5.9645 5.6701 5.9645 5.67009 5.9645 5.67007C5.9645 5.67006 5.9645 5.67005 5.9645 5.67004C5.9645 5.67003 5.9645 5.67002 5.9645 5.67001C5.9645 5.66999 5.9645 5.66998 5.9645 5.66997C5.9645 5.66996 5.9645 5.66995 5.9645 5.66993C5.9645 5.66992 5.9645 5.66991 5.9645 5.6699C5.9645 5.66989 5.9645 5.66987 5.9645 5.66986C5.9645 5.66985 5.9645 5.66984 5.9645 5.66983C5.9645 5.66981 5.9645 5.6698 5.9645 5.66979C5.9645 5.66978 5.9645 5.66976 5.9645 5.66975C5.9645 5.66974 5.9645 5.66973 5.9645 5.66971C5.9645 5.6697 5.9645 5.66969 5.9645 5.66968C5.9645 5.66966 5.9645 5.66965 5.9645 5.66964C5.9645 5.66963 5.9645 5.66961 5.9645 5.6696C5.9645 5.66959 5.9645 5.66957 5.9645 5.66956C5.9645 5.66955 5.9645 5.66953 5.9645 5.66952C5.9645 5.66951 5.9645 5.66949 5.9645 5.66948C5.9645 5.66947 5.9645 5.66946 5.9645 5.66944C5.9645 5.66943 5.9645 5.66941 5.9645 5.6694C5.9645 5.66939 5.9645 5.66937 5.9645 5.66936C5.9645 5.66935 5.9645 5.66933 5.9645 5.66932C5.9645 5.66931 5.9645 5.66929 5.9645 5.66928C5.9645 5.66926 5.9645 5.66925 5.9645 5.66924C5.9645 5.66922 5.9645 5.66921 5.9645 5.66919C5.9645 5.66918 5.9645 5.66917 5.9645 5.66915C5.9645 5.66914 5.9645 5.66912 5.9645 5.66911C5.9645 5.6691 5.9645 5.66908 5.9645 5.66907C5.9645 5.66905 5.9645 5.66904 5.9645 5.66902C5.9645 5.66901 5.9645 5.66899 5.9645 5.66898C5.9645 5.66896 5.9645 5.66895 5.9645 5.66894C5.9645 5.66892 5.9645 5.66891 5.9645 5.66889C5.9645 5.66888 5.9645 5.66886 5.9645 5.66885C5.9645 5.66883 5.9645 5.66882 5.9645 5.6688C5.9645 5.66879 5.9645 5.66877 5.9645 5.66875C5.9645 5.66874 5.9645 5.66872 5.9645 5.66871C5.9645 5.66869 5.9645 5.66868 5.9645 5.66866C5.9645 5.66865 5.9645 5.66863 5.9645 5.66862C5.9645 5.6686 5.9645 5.66858 5.9645 5.66857C5.9645 5.66855 5.9645 5.66854 5.9645 5.66852C5.9645 5.6685 5.9645 5.66849 5.9645 5.66847C5.9645 5.66846 5.9645 5.66844 5.9645 5.66842C5.9645 5.66841 5.9645 5.66839 5.9645 5.66838C5.9645 5.66836 5.9645 5.66834 5.9645 5.66833C5.9645 5.66831 5.9645 5.66829 5.9645 5.66828C5.9645 5.66826 5.9645 5.66824 5.9645 5.66823C5.9645 5.66821 5.9645 5.66819 5.9645 5.66818C5.9645 5.66816 5.9645 5.66814 5.9645 5.66813C5.9645 5.66811 5.9645 5.66809 5.9645 5.66808C5.9645 5.66806 5.9645 5.66804 5.9645 5.66802C5.9645 5.66801 5.9645 5.66799 5.9645 5.66797C5.9645 5.66796 5.9645 5.66794 5.9645 5.66792C5.9645 5.6679 5.9645 5.66789 5.9645 5.66787C5.9645 5.66785 5.9645 5.66783 5.9645 5.66782C5.9645 5.6678 5.9645 5.66778 5.9645 5.66776C5.9645 5.66774 5.9645 5.66773 5.9645 5.66771C5.9645 5.66769 5.9645 5.66767 5.9645 5.66765C5.9645 5.66764 5.9645 5.66762 5.9645 5.6676C5.9645 5.66758 5.9645 5.66756 5.9645 5.66754C5.9645 5.66753 5.9645 5.66751 5.9645 5.66749C5.9645 5.66747 5.9645 5.66745 5.9645 5.66743C5.9645 5.66741 5.9645 5.6674 5.9645 5.66738C5.9645 5.66736 5.9645 5.66734 5.9645 5.66732C5.9645 5.6673 5.9645 5.66728 5.9645 5.66726C5.9645 5.66725 5.9645 5.66723 5.9645 5.66721C5.9645 5.66719 5.9645 5.66717 5.9645 5.66715C5.9645 5.66713 5.9645 5.66711 5.9645 5.66709C5.9645 5.66707 5.9645 5.66705 5.9645 5.66703C5.9645 5.66701 5.9645 5.66699 5.9645 5.66697C5.9645 5.66695 5.9645 5.66693 5.9645 5.66691C5.9645 5.66689 5.9645 5.66687 5.9645 5.66685C5.9645 5.66683 5.9645 5.66681 5.9645 5.66679C5.9645 5.66677 5.9645 5.66675 5.9645 5.66673C5.9645 5.66671 5.9645 5.66669 5.9645 5.66667C5.9645 5.66665 5.9645 5.66663 5.9645 5.66661C5.9645 5.66659 5.9645 5.66657 5.9645 5.66655C5.9645 5.66653 5.9645 5.66651 5.9645 5.66649C5.9645 5.66646 5.9645 5.66644 5.9645 5.66642C5.9645 5.6664 5.9645 5.66638 5.9645 5.66636C5.9645 5.66634 5.9645 5.66632 5.9645 5.6663C5.9645 5.66627 5.9645 5.66625 5.9645 5.66623C5.9645 5.66621 5.9645 5.66619 5.9645 5.66617C5.9645 5.66615 5.9645 5.66612 5.9645 5.6661C5.9645 5.66608 5.9645 5.66606 5.9645 5.66604C5.9645 5.66601 5.9645 5.66599 5.9645 5.66597C5.9645 5.66595 5.9645 5.66593 5.9645 5.6659C5.9645 5.66588 5.9645 5.66586 5.9645 5.66584C5.9645 5.66581 5.9645 5.66579 5.9645 5.66577C5.9645 5.66575 5.9645 5.66572 5.9645 5.6657C5.9645 5.66568 5.9645 5.66566 5.9645 5.66563C5.9645 5.66561 5.9645 5.66559 5.9645 5.66556C5.9645 5.66554 5.9645 5.66552 5.9645 5.6655C5.9645 5.66547 5.9645 5.66545 5.9645 5.66543C5.9645 5.6654 5.9645 5.66538 5.9645 5.66536C5.9645 5.66533 5.9645 5.66531 5.9645 5.66529C5.9645 5.66526 5.9645 5.66524 5.9645 5.66521C5.9645 5.66519 5.9645 5.66517 5.9645 5.66514C5.9645 5.66512 5.9645 5.6651 5.9645 5.66507C5.9645 5.66505 5.9645 5.66502 5.9645 5.665C5.9645 5.66497 5.9645 5.66495 5.9645 5.66493C5.9645 5.6649 5.9645 5.66488 5.9645 5.66485C5.9645 5.66483 5.9645 5.6648 5.9645 5.66478C5.9645 5.66476 5.9645 5.66473 5.9645 5.66471C5.9645 5.66468 5.9645 5.66466 5.9645 5.66463C5.9645 5.66461 5.9645 5.66458 5.9645 5.66456C5.9645 5.66453 5.9645 5.66451 5.9645 5.66448C5.9645 5.66445 5.9645 5.66443 5.9645 5.6644C5.9645 5.66438 5.9645 5.66435 5.9645 5.66433C5.9645 5.6643 5.9645 5.66428 5.9645 5.66425C5.9645 5.66422 5.9645 5.6642 5.9645 5.66417C5.9645 5.66415 5.9645 5.66412 5.9645 5.66409C5.9645 5.66407 5.9645 5.66404 5.9645 5.66402C5.9645 5.66399 5.9645 5.66396 5.9645 5.66394C5.9645 5.66391 5.9645 5.66388 5.9645 5.66386C5.9645 5.66383 5.9645 5.6638 5.9645 5.66378C5.9645 5.66375 5.9645 5.66372 5.9645 5.6637C5.9645 5.66367 5.9645 5.66364 5.9645 5.66362C5.9645 5.66359 5.9645 5.66356 5.9645 5.66354C5.9645 5.66351 5.9645 5.66348 5.9645 5.66345C5.9645 5.66343 5.9645 5.6634 5.9645 5.66337C5.9645 5.66334 5.9645 5.66332 5.9645 5.66329C5.9645 5.66326 5.9645 5.66323 5.9645 5.6632C5.9645 5.66318 5.9645 5.66315 5.9645 5.66312C5.9645 5.66309 5.9645 5.66306 5.9645 5.66304C5.9645 5.66301 5.9645 5.66298 5.9645 5.66295C5.9645 5.66292 5.9645 5.66289 5.9645 5.66287C5.9645 5.66284 5.9645 5.66281 5.9645 5.66278C5.9645 5.66275 5.9645 5.66272 5.9645 5.66269C5.9645 5.66267 5.9645 5.66264 5.9645 5.66261C5.9645 5.66258 5.9645 5.66255 5.9645 5.66252C5.9645 5.66249 5.9645 5.66246 5.9645 5.66243C5.9645 5.6624 5.9645 5.66237 5.9645 5.66234C5.9645 5.66231 5.9645 5.66228 5.9645 5.66225C5.9645 5.66222 5.9645 5.66219 5.9645 5.66216C5.9645 5.66213 5.9645 5.6621 5.9645 5.66207C5.9645 5.66204 5.9645 5.66201 5.9645 5.66198C5.9645 5.66195 5.9645 5.66192 5.9645 5.66189C5.9645 5.66186 5.9645 5.66183 5.9645 5.6618C5.9645 5.66177 5.9645 5.66174 5.9645 5.66171C5.9645 5.66168 5.9645 5.66165 5.9645 5.66162C5.9645 5.66159 5.9645 5.66156 5.9645 5.66152C5.9645 5.66149 5.9645 5.66146 5.9645 5.66143C5.9645 5.6614 5.9645 5.66137 5.9645 5.66134C5.9645 5.6613 5.9645 5.66127 5.9645 5.66124C5.9645 5.66121 5.9645 5.66118 5.9645 5.66115C5.9645 5.66111 5.9645 5.66108 5.9645 5.66105C5.9645 5.66102 5.9645 5.66099 5.9645 5.66095C5.9645 5.66092 5.9645 5.66089 5.9645 5.66086C5.9645 5.66082 5.9645 5.66079 5.9645 5.66076C5.9645 5.66073 5.9645 5.66069 5.9645 5.66066C5.9645 5.66063 5.9645 5.6606 5.9645 5.66056C5.9645 5.66053 5.9645 5.6605 5.9645 5.66046C5.9645 5.66043 5.9645 5.6604 5.9645 5.66036C5.9645 5.66033 5.9645 5.6603 5.9645 5.66026C5.9645 5.66023 5.9645 5.6602 5.9645 5.66016C5.9645 5.66013 5.9645 5.6601 5.9645 5.66006C5.9645 5.66003 5.9645 5.66 5.9645 5.65996C5.9645 5.65993 5.9645 5.65989 5.9645 5.65986C5.9645 5.65983 5.9645 5.65979 5.9645 5.65976C5.9645 5.65972 5.9645 5.65969 5.9645 5.65965C5.9645 5.65962 5.9645 5.65958 5.9645 5.65955C5.9645 5.65951 5.9645 5.65948 5.9645 5.65944C5.9645 5.65941 5.9645 5.65937 5.9645 5.65934C5.9645 5.6593 5.9645 5.65927 5.9645 5.65923C5.9645 5.6592 5.9645 5.65916 5.9645 5.65913C5.9645 5.65909 5.9645 5.65906 5.9645 5.65902C5.9645 5.65898 5.9645 5.65895 5.9645 5.65891C5.9645 5.65888 5.9645 5.65884 5.9645 5.65881C5.9645 5.65877 5.9645 5.65873 5.9645 5.6587C5.9645 5.65866 5.9645 5.65862 5.9645 5.65859C5.9645 5.65855 5.9645 5.65852 5.9645 5.65848C5.9645 5.65844 5.9645 5.65841 5.9645 5.65837C5.9645 5.65833 5.9645 5.65829 5.9645 5.65826C5.9645 5.65822 5.9645 5.65818 5.9645 5.65815C5.9645 5.65811 5.9645 5.65807 5.9645 5.65803C5.9645 5.658 5.9645 5.65796 5.9645 5.65792C5.9645 5.65788 5.9645 5.65785 5.9645 5.65781C5.9645 5.65777 5.9645 5.65773 5.9645 5.6577C5.9645 5.65766 5.9645 5.65762 5.9645 5.65758C5.9645 5.65754 5.9645 5.6575 5.9645 5.65747C5.9645 5.65743 5.9645 5.65739 5.9645 5.65735C5.9645 5.65731 5.9645 5.65727 5.9645 5.65723C5.9645 5.6572 5.9645 5.65716 5.9645 5.65712C5.9645 5.65708 5.9645 5.65704 5.9645 5.657C5.9645 5.65696 5.9645 5.65692 5.9645 5.65688C5.9645 5.65684 5.9645 5.6568 5.9645 5.65677C5.9645 5.65673 5.9645 5.65669 5.9645 5.65665C5.9645 5.65661 5.9645 5.65657 5.9645 5.65653C5.9645 5.65649 5.9645 5.65645 5.9645 5.65641C5.9645 5.65637 5.9645 5.65633 5.9645 5.65629C5.9645 5.65625 5.9645 5.6562 5.9645 5.65616C5.9645 5.65612 5.9645 5.65608 5.9645 5.65604C5.9645 5.656 5.9645 5.65596 5.9645 5.65592C5.9645 5.65588 5.9645 5.65584 5.9645 5.6558C5.9645 5.65576 5.9645 5.65571 5.9645 5.65567C5.9645 5.65563 5.9645 5.65559 5.9645 5.65555C5.9645 5.65551 5.9645 5.65547 5.9645 5.65542C5.9645 5.65538 5.9645 5.65534 5.9645 5.6553C5.9645 5.65526 5.9645 5.65521 5.9645 5.65517C5.9645 5.65513 5.9645 5.65509 5.9645 5.65505C5.9645 5.655 5.9645 5.65496 5.9645 5.65492C5.9645 5.65488 5.9645 5.65483 5.9645 5.65479C5.9645 5.65475 5.9645 5.6547 5.9645 5.65466C5.9645 5.65462 5.9645 5.65458 5.9645 5.65453C5.9645 5.65449 5.9645 5.65445 5.9645 5.6544C5.9645 5.65436 5.9645 5.65432 5.9645 5.65427C5.9645 5.65423 5.9645 5.65418 5.9645 5.65414C5.9645 5.6541 5.9645 5.65405 5.9645 5.65401C5.9645 5.65396 5.9645 5.65392 5.9645 5.65388C5.9645 5.65383 5.9645 5.65379 5.9645 5.65374C5.9645 5.6537 5.9645 5.65365 5.9645 5.65361C5.9645 5.65356 5.9645 5.65352 5.9645 5.65348C5.9645 5.65343 5.9645 5.65339 5.9645 5.65334C5.9645 5.6533 5.9645 5.65325 5.9645 5.6532C5.9645 5.65316 5.9645 5.65311 5.9645 5.65307C5.9645 5.65302 5.9645 5.65298 5.9645 5.65293C5.9645 5.65289 5.9645 5.65284 5.9645 5.65279C5.9645 5.65275 5.9645 5.6527 5.9645 5.65266C5.9645 5.65261 5.9645 5.65256 5.9645 5.65252C5.9645 5.65247 5.9645 5.65242 5.9645 5.65238C5.9645 5.65233 5.9645 5.65228 5.9645 5.65224C5.9645 5.65219 5.9645 5.65214 5.9645 5.6521C5.9645 5.65205 5.9645 5.652 5.9645 5.65196C5.9645 5.65191 5.9645 5.65186 5.9645 5.65181C5.9645 5.65177 5.9645 5.65172 5.9645 5.65167C5.9645 5.65162 5.9645 5.65158 5.9645 5.65153C5.9645 5.65148 5.9645 5.65143 5.9645 5.65138C5.9645 5.65134 5.9645 5.65129 5.9645 5.65124C5.9645 5.65119 5.9645 5.65114 5.9645 5.65109C5.9645 5.65105 5.9645 5.651 5.9645 5.65095C5.9645 5.6509 5.9645 5.65085 5.9645 5.6508C5.9645 5.65075 5.9645 5.6507 5.9645 5.65065C5.9645 5.65061 5.9645 5.65056 5.9645 5.65051C5.9645 5.65046 5.9645 5.65041 5.9645 5.65036C5.9645 5.65031 5.9645 5.65026 5.9645 5.65021C5.9645 5.65016 5.9645 5.65011 5.9645 5.65006C5.9645 5.65001 5.9645 5.64996 5.9645 5.64991C5.9645 5.64986 5.9645 5.64981 5.9645 5.64976C5.9645 5.64971 5.9645 5.64966 5.9645 5.64961C5.9645 5.64955 5.9645 5.6495 5.9645 5.64945C5.9645 5.6494 5.9645 5.64935 5.9645 5.6493C5.9645 5.64925 5.9645 5.6492 5.9645 5.64915C5.9645 5.64909 5.9645 5.64904 5.9645 5.64899C5.9645 5.64894 5.9645 5.64889 5.9645 5.64884C5.9645 5.64878 5.9645 5.64873 5.9645 5.64868C5.9645 5.64863 5.9645 5.64858 5.9645 5.64852C5.9645 5.64847 5.9645 5.64842 5.9645 5.64837C5.9645 5.64831 5.9645 5.64826 5.9645 5.64821C5.9645 5.64815 5.9645 5.6481 5.9645 5.64805C5.9645 5.648 5.9645 5.64794 5.9645 5.64789C5.9645 5.64784 5.9645 5.64778 5.9645 5.64773C5.9645 5.64768 5.9645 5.64762 5.9645 5.64757C5.9645 5.64752 5.9645 5.64746 5.9645 5.64741C5.9645 5.64735 5.9645 5.6473 5.9645 5.64725C5.9645 5.64719 5.9645 5.64714 5.9645 5.64708C5.9645 5.64703 5.9645 5.64697 5.9645 5.64692C5.9645 5.64686 5.9645 5.64681 5.9645 5.64675C5.9645 5.6467 5.9645 5.64664 5.9645 5.64659C5.9645 5.64653 5.9645 5.64648 5.9645 5.64642C5.9645 5.64637 5.9645 5.64631 5.9645 5.64626C5.9645 5.6462 5.9645 5.64615 5.9645 5.64609C5.9645 5.64603 5.9645 5.64598 5.9645 5.64592C5.9645 5.64587 5.9645 5.64581 5.9645 5.64575C5.9645 5.6457 5.9645 5.64564 5.9645 5.64558C5.9645 5.64553 5.9645 5.64547 5.9645 5.64542C5.9645 5.64536 5.9645 5.6453 5.9645 5.64524C5.9645 5.64519 5.9645 5.64513 5.9645 5.64507C5.9645 5.64502 5.9645 5.64496 5.9645 5.6449C5.9645 5.64484 5.9645 5.64479 5.9645 5.64473C5.9645 5.64467 5.9645 5.64461 5.9645 5.64455C5.9645 5.6445 5.9645 5.64444 5.9645 5.64438C5.9645 5.64432 5.9645 5.64426 5.9645 5.64421C5.9645 5.64415 5.9645 5.64409 5.9645 5.64403C5.9645 5.64397 5.9645 5.64391 5.9645 5.64385C5.9645 5.64379 5.9645 5.64374 5.9645 5.64368C5.9645 5.64362 5.9645 5.64356 5.9645 5.6435C5.9645 5.64344 5.9645 5.64338 5.9645 5.64332C5.9645 5.64326 5.9645 5.6432 5.9645 5.64314C5.9645 5.64308 5.9645 5.64302 5.9645 5.64296C5.9645 5.6429 5.9645 5.64284 5.9645 5.64278C5.9645 5.64272 5.9645 5.64266 5.9645 5.6426C5.9645 5.64254 5.9645 5.64248 5.9645 5.64242C5.9645 5.64236 5.9645 5.64229 5.9645 5.64223C5.9645 5.64217 5.9645 5.64211 5.9645 5.64205C5.9645 5.64199 5.9645 5.64193 5.9645 5.64187C5.9645 5.6418 5.9645 5.64174 5.9645 5.64168C5.9645 5.64162 5.9645 5.64156 5.9645 5.64149C5.9645 5.64143 5.9645 5.64137 5.9645 5.64131C5.9645 5.64125 5.9645 5.64118 5.9645 5.64112C5.9645 5.64106 5.9645 5.64099 5.9645 5.64093C5.9645 5.64087 5.9645 5.64081 5.9645 5.64074C5.9645 5.64068 5.9645 5.64062 5.9645 5.64055C5.9645 5.64049 5.9645 5.64043 5.9645 5.64036C5.9645 5.6403 5.9645 5.64024 5.9645 5.64017C5.9645 5.64011 5.9645 5.64004 5.9645 5.63998C5.9645 5.63992 5.9645 5.63985 5.9645 5.63979C5.9645 5.63972 5.9645 5.63966 5.9645 5.63959C5.9645 5.63953 5.9645 5.63946 5.9645 5.6394C5.9645 5.63933 5.9645 5.63927 5.9645 5.6392L7.9645 5.6392C7.9645 5.63927 7.9645 5.63933 7.9645 5.6394C7.9645 5.63946 7.9645 5.63953 7.9645 5.63959C7.9645 5.63966 7.9645 5.63972 7.9645 5.63979C7.9645 5.63985 7.9645 5.63992 7.9645 5.63998C7.9645 5.64004 7.9645 5.64011 7.9645 5.64017C7.9645 5.64024 7.9645 5.6403 7.9645 5.64036C7.9645 5.64043 7.9645 5.64049 7.9645 5.64055C7.9645 5.64062 7.9645 5.64068 7.9645 5.64074C7.9645 5.64081 7.9645 5.64087 7.9645 5.64093C7.9645 5.64099 7.9645 5.64106 7.9645 5.64112C7.9645 5.64118 7.9645 5.64125 7.9645 5.64131C7.9645 5.64137 7.9645 5.64143 7.9645 5.64149C7.9645 5.64156 7.9645 5.64162 7.9645 5.64168C7.9645 5.64174 7.9645 5.6418 7.9645 5.64187C7.9645 5.64193 7.9645 5.64199 7.9645 5.64205C7.9645 5.64211 7.9645 5.64217 7.9645 5.64223C7.9645 5.64229 7.9645 5.64236 7.9645 5.64242C7.9645 5.64248 7.9645 5.64254 7.9645 5.6426C7.9645 5.64266 7.9645 5.64272 7.9645 5.64278C7.9645 5.64284 7.9645 5.6429 7.9645 5.64296C7.9645 5.64302 7.9645 5.64308 7.9645 5.64314C7.9645 5.6432 7.9645 5.64326 7.9645 5.64332C7.9645 5.64338 7.9645 5.64344 7.9645 5.6435C7.9645 5.64356 7.9645 5.64362 7.9645 5.64368C7.9645 5.64374 7.9645 5.64379 7.9645 5.64385C7.9645 5.64391 7.9645 5.64397 7.9645 5.64403C7.9645 5.64409 7.9645 5.64415 7.9645 5.64421C7.9645 5.64426 7.9645 5.64432 7.9645 5.64438C7.9645 5.64444 7.9645 5.6445 7.9645 5.64455C7.9645 5.64461 7.9645 5.64467 7.9645 5.64473C7.9645 5.64479 7.9645 5.64484 7.9645 5.6449C7.9645 5.64496 7.9645 5.64502 7.9645 5.64507C7.9645 5.64513 7.9645 5.64519 7.9645 5.64524C7.9645 5.6453 7.9645 5.64536 7.9645 5.64541C7.9645 5.64547 7.9645 5.64553 7.9645 5.64558C7.9645 5.64564 7.9645 5.6457 7.9645 5.64575C7.9645 5.64581 7.9645 5.64587 7.9645 5.64592C7.9645 5.64598 7.9645 5.64603 7.9645 5.64609C7.9645 5.64615 7.9645 5.6462 7.9645 5.64626C7.9645 5.64631 7.9645 5.64637 7.9645 5.64642C7.9645 5.64648 7.9645 5.64653 7.9645 5.64659C7.9645 5.64664 7.9645 5.6467 7.9645 5.64675C7.9645 5.64681 7.9645 5.64686 7.9645 5.64692C7.9645 5.64697 7.9645 5.64703 7.9645 5.64708C7.9645 5.64714 7.9645 5.64719 7.9645 5.64725C7.9645 5.6473 7.9645 5.64735 7.9645 5.64741C7.9645 5.64746 7.9645 5.64751 7.9645 5.64757C7.9645 5.64762 7.9645 5.64768 7.9645 5.64773C7.9645 5.64778 7.9645 5.64784 7.9645 5.64789C7.9645 5.64794 7.9645 5.648 7.9645 5.64805C7.9645 5.6481 7.9645 5.64815 7.9645 5.64821C7.9645 5.64826 7.9645 5.64831 7.9645 5.64837C7.9645 5.64842 7.9645 5.64847 7.9645 5.64852C7.9645 5.64858 7.9645 5.64863 7.9645 5.64868C7.9645 5.64873 7.9645 5.64878 7.9645 5.64884C7.9645 5.64889 7.9645 5.64894 7.9645 5.64899C7.9645 5.64904 7.9645 5.64909 7.9645 5.64915C7.9645 5.6492 7.9645 5.64925 7.9645 5.6493C7.9645 5.64935 7.9645 5.6494 7.9645 5.64945C7.9645 5.6495 7.9645 5.64955 7.9645 5.64961C7.9645 5.64966 7.9645 5.64971 7.9645 5.64976C7.9645 5.64981 7.9645 5.64986 7.9645 5.64991C7.9645 5.64996 7.9645 5.65001 7.9645 5.65006C7.9645 5.65011 7.9645 5.65016 7.9645 5.65021C7.9645 5.65026 7.9645 5.65031 7.9645 5.65036C7.9645 5.65041 7.9645 5.65046 7.9645 5.65051C7.9645 5.65056 7.9645 5.65061 7.9645 5.65065C7.9645 5.6507 7.9645 5.65075 7.9645 5.6508C7.9645 5.65085 7.9645 5.6509 7.9645 5.65095C7.9645 5.651 7.9645 5.65105 7.9645 5.65109C7.9645 5.65114 7.9645 5.65119 7.9645 5.65124C7.9645 5.65129 7.9645 5.65134 7.9645 5.65138C7.9645 5.65143 7.9645 5.65148 7.9645 5.65153C7.9645 5.65158 7.9645 5.65162 7.9645 5.65167C7.9645 5.65172 7.9645 5.65177 7.9645 5.65181C7.9645 5.65186 7.9645 5.65191 7.9645 5.65196C7.9645 5.652 7.9645 5.65205 7.9645 5.6521C7.9645 5.65214 7.9645 5.65219 7.9645 5.65224C7.9645 5.65228 7.9645 5.65233 7.9645 5.65238C7.9645 5.65242 7.9645 5.65247 7.9645 5.65252C7.9645 5.65256 7.9645 5.65261 7.9645 5.65266C7.9645 5.6527 7.9645 5.65275 7.9645 5.65279C7.9645 5.65284 7.9645 5.65289 7.9645 5.65293C7.9645 5.65298 7.9645 5.65302 7.9645 5.65307C7.9645 5.65311 7.9645 5.65316 7.9645 5.6532C7.9645 5.65325 7.9645 5.6533 7.9645 5.65334C7.9645 5.65339 7.9645 5.65343 7.9645 5.65347C7.9645 5.65352 7.9645 5.65356 7.9645 5.65361C7.9645 5.65365 7.9645 5.6537 7.9645 5.65374C7.9645 5.65379 7.9645 5.65383 7.9645 5.65388C7.9645 5.65392 7.9645 5.65396 7.9645 5.65401C7.9645 5.65405 7.9645 5.6541 7.9645 5.65414C7.9645 5.65418 7.9645 5.65423 7.9645 5.65427C7.9645 5.65432 7.9645 5.65436 7.9645 5.6544C7.9645 5.65445 7.9645 5.65449 7.9645 5.65453C7.9645 5.65457 7.9645 5.65462 7.9645 5.65466C7.9645 5.6547 7.9645 5.65475 7.9645 5.65479C7.9645 5.65483 7.9645 5.65487 7.9645 5.65492C7.9645 5.65496 7.9645 5.655 7.9645 5.65505C7.9645 5.65509 7.9645 5.65513 7.9645 5.65517C7.9645 5.65521 7.9645 5.65526 7.9645 5.6553C7.9645 5.65534 7.9645 5.65538 7.9645 5.65542C7.9645 5.65547 7.9645 5.65551 7.9645 5.65555C7.9645 5.65559 7.9645 5.65563 7.9645 5.65567C7.9645 5.65571 7.9645 5.65576 7.9645 5.6558C7.9645 5.65584 7.9645 5.65588 7.9645 5.65592C7.9645 5.65596 7.9645 5.656 7.9645 5.65604C7.9645 5.65608 7.9645 5.65612 7.9645 5.65616C7.9645 5.6562 7.9645 5.65625 7.9645 5.65629C7.9645 5.65633 7.9645 5.65637 7.9645 5.65641C7.9645 5.65645 7.9645 5.65649 7.9645 5.65653C7.9645 5.65657 7.9645 5.65661 7.9645 5.65665C7.9645 5.65669 7.9645 5.65673 7.9645 5.65677C7.9645 5.6568 7.9645 5.65684 7.9645 5.65688C7.9645 5.65692 7.9645 5.65696 7.9645 5.657C7.9645 5.65704 7.9645 5.65708 7.9645 5.65712C7.9645 5.65716 7.9645 5.6572 7.9645 5.65723C7.9645 5.65727 7.9645 5.65731 7.9645 5.65735C7.9645 5.65739 7.9645 5.65743 7.9645 5.65747C7.9645 5.6575 7.9645 5.65754 7.9645 5.65758C7.9645 5.65762 7.9645 5.65766 7.9645 5.65769C7.9645 5.65773 7.9645 5.65777 7.9645 5.65781C7.9645 5.65785 7.9645 5.65788 7.9645 5.65792C7.9645 5.65796 7.9645 5.658 7.9645 5.65803C7.9645 5.65807 7.9645 5.65811 7.9645 5.65815C7.9645 5.65818 7.9645 5.65822 7.9645 5.65826C7.9645 5.65829 7.9645 5.65833 7.9645 5.65837C7.9645 5.6584 7.9645 5.65844 7.9645 5.65848C7.9645 5.65852 7.9645 5.65855 7.9645 5.65859C7.9645 5.65862 7.9645 5.65866 7.9645 5.6587C7.9645 5.65873 7.9645 5.65877 7.9645 5.65881C7.9645 5.65884 7.9645 5.65888 7.9645 5.65891C7.9645 5.65895 7.9645 5.65898 7.9645 5.65902C7.9645 5.65906 7.9645 5.65909 7.9645 5.65913C7.9645 5.65916 7.9645 5.6592 7.9645 5.65923C7.9645 5.65927 7.9645 5.6593 7.9645 5.65934C7.9645 5.65937 7.9645 5.65941 7.9645 5.65944C7.9645 5.65948 7.9645 5.65951 7.9645 5.65955C7.9645 5.65958 7.9645 5.65962 7.9645 5.65965C7.9645 5.65969 7.9645 5.65972 7.9645 5.65976C7.9645 5.65979 7.9645 5.65982 7.9645 5.65986C7.9645 5.65989 7.9645 5.65993 7.9645 5.65996C7.9645 5.66 7.9645 5.66003 7.9645 5.66006C7.9645 5.6601 7.9645 5.66013 7.9645 5.66016C7.9645 5.6602 7.9645 5.66023 7.9645 5.66026C7.9645 5.6603 7.9645 5.66033 7.9645 5.66036C7.9645 5.6604 7.9645 5.66043 7.9645 5.66046C7.9645 5.6605 7.9645 5.66053 7.9645 5.66056C7.9645 5.6606 7.9645 5.66063 7.9645 5.66066C7.9645 5.66069 7.9645 5.66073 7.9645 5.66076C7.9645 5.66079 7.9645 5.66082 7.9645 5.66086C7.9645 5.66089 7.9645 5.66092 7.9645 5.66095C7.9645 5.66099 7.9645 5.66102 7.9645 5.66105C7.9645 5.66108 7.9645 5.66111 7.9645 5.66115C7.9645 5.66118 7.9645 5.66121 7.9645 5.66124C7.9645 5.66127 7.9645 5.6613 7.9645 5.66134C7.9645 5.66137 7.9645 5.6614 7.9645 5.66143C7.9645 5.66146 7.9645 5.66149 7.9645 5.66152C7.9645 5.66155 7.9645 5.66159 7.9645 5.66162C7.9645 5.66165 7.9645 5.66168 7.9645 5.66171C7.9645 5.66174 7.9645 5.66177 7.9645 5.6618C7.9645 5.66183 7.9645 5.66186 7.9645 5.66189C7.9645 5.66192 7.9645 5.66195 7.9645 5.66198C7.9645 5.66201 7.9645 5.66204 7.9645 5.66207C7.9645 5.6621 7.9645 5.66213 7.9645 5.66216C7.9645 5.66219 7.9645 5.66222 7.9645 5.66225C7.9645 5.66228 7.9645 5.66231 7.9645 5.66234C7.9645 5.66237 7.9645 5.6624 7.9645 5.66243C7.9645 5.66246 7.9645 5.66249 7.9645 5.66252C7.9645 5.66255 7.9645 5.66258 7.9645 5.66261C7.9645 5.66264 7.9645 5.66267 7.9645 5.66269C7.9645 5.66272 7.9645 5.66275 7.9645 5.66278C7.9645 5.66281 7.9645 5.66284 7.9645 5.66287C7.9645 5.66289 7.9645 5.66292 7.9645 5.66295C7.9645 5.66298 7.9645 5.66301 7.9645 5.66304C7.9645 5.66306 7.9645 5.66309 7.9645 5.66312C7.9645 5.66315 7.9645 5.66318 7.9645 5.6632C7.9645 5.66323 7.9645 5.66326 7.9645 5.66329C7.9645 5.66332 7.9645 5.66334 7.9645 5.66337C7.9645 5.6634 7.9645 5.66343 7.9645 5.66345C7.9645 5.66348 7.9645 5.66351 7.9645 5.66354C7.9645 5.66356 7.9645 5.66359 7.9645 5.66362C7.9645 5.66364 7.9645 5.66367 7.9645 5.6637C7.9645 5.66372 7.9645 5.66375 7.9645 5.66378C7.9645 5.6638 7.9645 5.66383 7.9645 5.66386C7.9645 5.66388 7.9645 5.66391 7.9645 5.66394C7.9645 5.66396 7.9645 5.66399 7.9645 5.66402C7.9645 5.66404 7.9645 5.66407 7.9645 5.66409C7.9645 5.66412 7.9645 5.66415 7.9645 5.66417C7.9645 5.6642 7.9645 5.66422 7.9645 5.66425C7.9645 5.66428 7.9645 5.6643 7.9645 5.66433C7.9645 5.66435 7.9645 5.66438 7.9645 5.6644C7.9645 5.66443 7.9645 5.66445 7.9645 5.66448C7.9645 5.66451 7.9645 5.66453 7.9645 5.66456C7.9645 5.66458 7.9645 5.66461 7.9645 5.66463C7.9645 5.66466 7.9645 5.66468 7.9645 5.66471C7.9645 5.66473 7.9645 5.66475 7.9645 5.66478C7.9645 5.6648 7.9645 5.66483 7.9645 5.66485C7.9645 5.66488 7.9645 5.6649 7.9645 5.66493C7.9645 5.66495 7.9645 5.66497 7.9645 5.665C7.9645 5.66502 7.9645 5.66505 7.9645 5.66507C7.9645 5.6651 7.9645 5.66512 7.9645 5.66514C7.9645 5.66517 7.9645 5.66519 7.9645 5.66521C7.9645 5.66524 7.9645 5.66526 7.9645 5.66529C7.9645 5.66531 7.9645 5.66533 7.9645 5.66536C7.9645 5.66538 7.9645 5.6654 7.9645 5.66543C7.9645 5.66545 7.9645 5.66547 7.9645 5.6655C7.9645 5.66552 7.9645 5.66554 7.9645 5.66556C7.9645 5.66559 7.9645 5.66561 7.9645 5.66563C7.9645 5.66566 7.9645 5.66568 7.9645 5.6657C7.9645 5.66572 7.9645 5.66575 7.9645 5.66577C7.9645 5.66579 7.9645 5.66581 7.9645 5.66584C7.9645 5.66586 7.9645 5.66588 7.9645 5.6659C7.9645 5.66593 7.9645 5.66595 7.9645 5.66597C7.9645 5.66599 7.9645 5.66601 7.9645 5.66604C7.9645 5.66606 7.9645 5.66608 7.9645 5.6661C7.9645 5.66612 7.9645 5.66614 7.9645 5.66617C7.9645 5.66619 7.9645 5.66621 7.9645 5.66623C7.9645 5.66625 7.9645 5.66627 7.9645 5.6663C7.9645 5.66632 7.9645 5.66634 7.9645 5.66636C7.9645 5.66638 7.9645 5.6664 7.9645 5.66642C7.9645 5.66644 7.9645 5.66646 7.9645 5.66648C7.9645 5.66651 7.9645 5.66653 7.9645 5.66655C7.9645 5.66657 7.9645 5.66659 7.9645 5.66661C7.9645 5.66663 7.9645 5.66665 7.9645 5.66667C7.9645 5.66669 7.9645 5.66671 7.9645 5.66673C7.9645 5.66675 7.9645 5.66677 7.9645 5.66679C7.9645 5.66681 7.9645 5.66683 7.9645 5.66685C7.9645 5.66687 7.9645 5.66689 7.9645 5.66691C7.9645 5.66693 7.9645 5.66695 7.9645 5.66697C7.9645 5.66699 7.9645 5.66701 7.9645 5.66703C7.9645 5.66705 7.9645 5.66707 7.9645 5.66709C7.9645 5.66711 7.9645 5.66713 7.9645 5.66715C7.9645 5.66717 7.9645 5.66719 7.9645 5.66721C7.9645 5.66723 7.9645 5.66725 7.9645 5.66726C7.9645 5.66728 7.9645 5.6673 7.9645 5.66732C7.9645 5.66734 7.9645 5.66736 7.9645 5.66738C7.9645 5.6674 7.9645 5.66741 7.9645 5.66743C7.9645 5.66745 7.9645 5.66747 7.9645 5.66749C7.9645 5.66751 7.9645 5.66753 7.9645 5.66754C7.9645 5.66756 7.9645 5.66758 7.9645 5.6676C7.9645 5.66762 7.9645 5.66764 7.9645 5.66765C7.9645 5.66767 7.9645 5.66769 7.9645 5.66771C7.9645 5.66773 7.9645 5.66774 7.9645 5.66776C7.9645 5.66778 7.9645 5.6678 7.9645 5.66782C7.9645 5.66783 7.9645 5.66785 7.9645 5.66787C7.9645 5.66789 7.9645 5.6679 7.9645 5.66792C7.9645 5.66794 7.9645 5.66796 7.9645 5.66797C7.9645 5.66799 7.9645 5.66801 7.9645 5.66802C7.9645 5.66804 7.9645 5.66806 7.9645 5.66808C7.9645 5.66809 7.9645 5.66811 7.9645 5.66813C7.9645 5.66814 7.9645 5.66816 7.9645 5.66818C7.9645 5.66819 7.9645 5.66821 7.9645 5.66823C7.9645 5.66824 7.9645 5.66826 7.9645 5.66828C7.9645 5.66829 7.9645 5.66831 7.9645 5.66833C7.9645 5.66834 7.9645 5.66836 7.9645 5.66838C7.9645 5.66839 7.9645 5.66841 7.9645 5.66842C7.9645 5.66844 7.9645 5.66846 7.9645 5.66847C7.9645 5.66849 7.9645 5.6685 7.9645 5.66852C7.9645 5.66854 7.9645 5.66855 7.9645 5.66857C7.9645 5.66858 7.9645 5.6686 7.9645 5.66862C7.9645 5.66863 7.9645 5.66865 7.9645 5.66866C7.9645 5.66868 7.9645 5.66869 7.9645 5.66871C7.9645 5.66872 7.9645 5.66874 7.9645 5.66875C7.9645 5.66877 7.9645 5.66879 7.9645 5.6688C7.9645 5.66882 7.9645 5.66883 7.9645 5.66885C7.9645 5.66886 7.9645 5.66888 7.9645 5.66889C7.9645 5.66891 7.9645 5.66892 7.9645 5.66893C7.9645 5.66895 7.9645 5.66896 7.9645 5.66898C7.9645 5.66899 7.9645 5.66901 7.9645 5.66902C7.9645 5.66904 7.9645 5.66905 7.9645 5.66907C7.9645 5.66908 7.9645 5.6691 7.9645 5.66911C7.9645 5.66912 7.9645 5.66914 7.9645 5.66915C7.9645 5.66917 7.9645 5.66918 7.9645 5.66919C7.9645 5.66921 7.9645 5.66922 7.9645 5.66924C7.9645 5.66925 7.9645 5.66926 7.9645 5.66928C7.9645 5.66929 7.9645 5.66931 7.9645 5.66932C7.9645 5.66933 7.9645 5.66935 7.9645 5.66936C7.9645 5.66937 7.9645 5.66939 7.9645 5.6694C7.9645 5.66941 7.9645 5.66943 7.9645 5.66944C7.9645 5.66946 7.9645 5.66947 7.9645 5.66948C7.9645 5.66949 7.9645 5.66951 7.9645 5.66952C7.9645 5.66953 7.9645 5.66955 7.9645 5.66956C7.9645 5.66957 7.9645 5.66959 7.9645 5.6696C7.9645 5.66961 7.9645 5.66962 7.9645 5.66964C7.9645 5.66965 7.9645 5.66966 7.9645 5.66968C7.9645 5.66969 7.9645 5.6697 7.9645 5.66971C7.9645 5.66973 7.9645 5.66974 7.9645 5.66975C7.9645 5.66976 7.9645 5.66978 7.9645 5.66979C7.9645 5.6698 7.9645 5.66981 7.9645 5.66983C7.9645 5.66984 7.9645 5.66985 7.9645 5.66986C7.9645 5.66987 7.9645 5.66989 7.9645 5.6699C7.9645 5.66991 7.9645 5.66992 7.9645 5.66993C7.9645 5.66995 7.9645 5.66996 7.9645 5.66997C7.9645 5.66998 7.9645 5.66999 7.9645 5.67001C7.9645 5.67002 7.9645 5.67003 7.9645 5.67004C7.9645 5.67005 7.9645 5.67006 7.9645 5.67007C7.9645 5.67009 7.9645 5.6701 7.9645 5.67011C7.9645 5.67012 7.9645 5.67013 7.9645 5.67014C7.9645 5.67015 7.9645 5.67017 7.9645 5.67018C7.9645 5.67019 7.9645 5.6702 7.9645 5.67021C7.9645 5.67022 7.9645 5.67023 7.9645 5.67024C7.9645 5.67025 7.9645 5.67026 7.9645 5.67028C7.9645 5.67029 7.9645 5.6703 7.9645 5.67031C7.9645 5.67032 7.9645 5.67033 7.9645 5.67034C7.9645 5.67035 7.9645 5.67036 7.9645 5.67037C7.9645 5.67038 7.9645 5.67039 7.9645 5.6704C7.9645 5.67041 7.9645 5.67042 7.9645 5.67043C7.9645 5.67045 7.9645 5.67046 7.9645 5.67047C7.9645 5.67048 7.9645 5.67049 7.9645 5.6705C7.9645 5.67051 7.9645 5.67052 7.9645 5.67053C7.9645 5.67054 7.9645 5.67055 7.9645 5.67056C7.9645 5.67057 7.9645 5.67058 7.9645 5.67059C7.9645 5.6706 7.9645 5.67061 7.9645 5.67062C7.9645 5.67062 7.9645 5.67063 7.9645 5.67064C7.9645 5.67065 7.9645 5.67066 7.9645 5.67067C7.9645 5.67068 7.9645 5.67069 7.9645 5.6707C7.9645 5.67071 7.9645 5.67072 7.9645 5.67073C7.9645 5.67074 7.9645 5.67075 7.9645 5.67076C7.9645 5.67077 7.9645 5.67078 7.9645 5.67079C7.9645 5.67079 7.9645 5.6708 7.9645 5.67081C7.9645 5.67082 7.9645 5.67083 7.9645 5.67084C7.9645 5.67085 7.9645 5.67086 7.9645 5.67087C7.9645 5.67088 7.9645 5.67088 7.9645 5.67089C7.9645 5.6709 7.9645 5.67091 7.9645 5.67092C7.9645 5.67093 7.9645 5.67094 7.9645 5.67095C7.9645 5.67095 7.9645 5.67096 7.9645 5.67097C7.9645 5.67098 7.9645 5.67099 7.9645 5.671C7.9645 5.671 7.9645 5.67101 7.9645 5.67102C7.9645 5.67103 7.9645 5.67104 7.9645 5.67105C7.9645 5.67105 7.9645 5.67106 7.9645 5.67107C7.9645 5.67108 7.9645 5.67109 7.9645 5.6711C7.9645 5.6711 7.9645 5.67111 7.9645 5.67112C7.9645 5.67113 7.9645 5.67113 7.9645 5.67114C7.9645 5.67115 7.9645 5.67116 7.9645 5.67117C7.9645 5.67117 7.9645 5.67118 7.9645 5.67119C7.9645 5.6712 7.9645 5.6712 7.9645 5.67121C7.9645 5.67122 7.9645 5.67123 7.9645 5.67123C7.9645 5.67124 7.9645 5.67125 7.9645 5.67126C7.9645 5.67126 7.9645 5.67127 7.9645 5.67128C7.9645 5.67129 7.9645 5.67129 7.9645 5.6713C7.9645 5.67131 7.9645 5.67132 7.9645 5.67132C7.9645 5.67133 7.9645 5.67134 7.9645 5.67134C7.9645 5.67135 7.9645 5.67136 7.9645 5.67137C7.9645 5.67137 7.9645 5.67138 7.9645 5.67139C7.9645 5.67139 7.9645 5.6714 7.9645 5.67141C7.9645 5.67141 7.9645 5.67142 7.9645 5.67143C7.9645 5.67143 7.9645 5.67144 7.9645 5.67145C7.9645 5.67145 7.9645 5.67146 7.9645 5.67147C7.9645 5.67147 7.9645 5.67148 7.9645 5.67149C7.9645 5.67149 7.9645 5.6715 7.9645 5.67151C7.9645 5.67151 7.9645 5.67152 7.9645 5.67153C7.9645 5.67153 7.9645 5.67154 7.9645 5.67155C7.9645 5.67155 7.9645 5.67156 7.9645 5.67156C7.9645 5.67157 7.9645 5.67158 7.9645 5.67158C7.9645 5.67159 7.9645 5.67159 7.9645 5.6716C7.9645 5.67161 7.9645 5.67161 7.9645 5.67162C7.9645 5.67162 7.9645 5.67163 7.9645 5.67164C7.9645 5.67164 7.9645 5.67165 7.9645 5.67165C7.9645 5.67166 7.9645 5.67167 7.9645 5.67167C7.9645 5.67168 7.9645 5.67168 7.9645 5.67169C7.9645 5.67169 7.9645 5.6717 7.9645 5.67171C7.9645 5.67171 7.9645 5.67172 7.9645 5.67172C7.9645 5.67173 7.9645 5.67173 7.9645 5.67174C7.9645 5.67174 7.9645 5.67175 7.9645 5.67175C7.9645 5.67176 7.9645 5.67177 7.9645 5.67177C7.9645 5.67178 7.9645 5.67178 7.9645 5.67179C7.9645 5.67179 7.9645 5.6718 7.9645 5.6718C7.9645 5.67181 7.9645 5.67181 7.9645 5.67182C7.9645 5.67182 7.9645 5.67183 7.9645 5.67183C7.9645 5.67184 7.9645 5.67184 7.9645 5.67185C7.9645 5.67185 7.9645 5.67186 7.9645 5.67186C7.9645 5.67187 7.9645 5.67187 7.9645 5.67188C7.9645 5.67188 7.9645 5.67189 7.9645 5.67189C7.9645 5.6719 7.9645 5.6719 7.9645 5.6719C7.9645 5.67191 7.9645 5.67191 7.9645 5.67192C7.9645 5.67192 7.9645 5.67193 7.9645 5.67193C7.9645 5.67194 7.9645 5.67194 7.9645 5.67195C7.9645 5.67195 7.9645 5.67195 7.9645 5.67196C7.9645 5.67196 7.9645 5.67197 7.9645 5.67197C7.9645 5.67198 7.9645 5.67198 7.9645 5.67199C7.9645 5.67199 7.9645 5.67199 7.9645 5.672C7.9645 5.672 7.9645 5.67201 7.9645 5.67201C7.9645 5.67201 7.9645 5.67202 7.9645 5.67202C7.9645 5.67203 7.9645 5.67203 7.9645 5.67203C7.9645 5.67204 7.9645 5.67204 7.9645 5.67205C7.9645 5.67205 7.9645 5.67205 7.9645 5.67206C7.9645 5.67206 7.9645 5.67207 7.9645 5.67207C7.9645 5.67207 7.9645 5.67208 7.9645 5.67208C7.9645 5.67208 7.9645 5.67209 7.9645 5.67209C7.9645 5.6721 7.9645 5.6721 7.9645 5.6721C7.9645 5.67211 7.9645 5.67211 7.9645 5.67211C7.9645 5.67212 7.9645 5.67212 7.9645 5.67212C7.9645 5.67213 7.9645 5.67213 7.9645 5.67214C7.9645 5.67214 7.9645 5.67214 7.9645 5.67215C7.9645 5.67215 7.9645 5.67215 7.9645 5.67216C7.9645 5.67216 7.9645 5.67216 7.9645 5.67217C7.9645 5.67217 7.9645 5.67217 7.9645 5.67218C7.9645 5.67218 7.9645 5.67218 7.9645 5.67219C7.9645 5.67219 7.9645 5.67219 7.9645 5.67219C7.9645 5.6722 7.9645 5.6722 7.9645 5.6722C7.9645 5.67221 7.9645 5.67221 7.9645 5.67221C7.9645 5.67222 7.9645 5.67222 7.9645 5.67222C7.9645 5.67223 7.9645 5.67223 7.9645 5.67223C7.9645 5.67223 7.9645 5.67224 7.9645 5.67224C7.9645 5.67224 7.9645 5.67225 7.9645 5.67225C7.9645 5.67225 7.9645 5.67225 7.9645 5.67226C7.9645 5.67226 7.9645 5.67226 7.9645 5.67226C7.9645 5.67227 7.9645 5.67227 7.9645 5.67227C7.9645 5.67227 7.9645 5.67228 7.9645 5.67228C7.9645 5.67228 7.9645 5.67229 7.9645 5.67229C7.9645 5.67229 7.9645 5.67229 7.9645 5.6723C7.9645 5.6723 7.9645 5.6723 7.9645 5.6723C7.9645 5.67231 7.9645 5.67231 7.9645 5.67231C7.9645 5.67231 7.9645 5.67231 7.9645 5.67232C7.9645 5.67232 7.9645 5.67232 7.9645 5.67232C7.9645 5.67233 7.9645 5.67233 7.9645 5.67233C7.9645 5.67233 7.9645 5.67234 7.9645 5.67234C7.9645 5.67234 7.9645 5.67234 7.9645 5.67234C7.9645 5.67235 7.9645 5.67235 7.9645 5.67235C7.9645 5.67235 7.9645 5.67235 7.9645 5.67236C7.9645 5.67236 7.9645 5.67236 7.9645 5.67236C7.9645 5.67236 7.9645 5.67237 7.9645 5.67237C7.9645 5.67237 7.9645 5.67237 7.9645 5.67237C7.9645 5.67238 7.9645 5.67238 7.9645 5.67238C7.9645 5.67238 7.9645 5.67238 7.9645 5.67239C7.9645 5.67239 7.9645 5.67239 7.9645 5.67239C7.9645 5.67239 7.9645 5.67239 7.9645 5.6724C7.9645 5.6724 7.9645 5.6724 7.9645 5.6724C7.9645 5.6724 7.9645 5.6724 7.9645 5.67241C7.9645 5.67241 7.9645 5.67241 7.9645 5.67241C7.9645 5.67241 7.9645 5.67241 7.9645 5.67242C7.9645 5.67242 7.9645 5.67242 7.9645 5.67242C7.9645 5.67242 7.9645 5.67242 7.9645 5.67243C7.9645 5.67243 7.9645 5.67243 7.9645 5.67243C7.9645 5.67243 7.9645 5.67243 7.9645 5.67243C7.9645 5.67244 7.9645 5.67244 7.9645 5.67244C7.9645 5.67244 7.9645 5.67244 7.9645 5.67244C7.9645 5.67244 7.9645 5.67245 7.9645 5.67245C7.9645 5.67245 7.9645 5.67245 7.9645 5.67245C7.9645 5.67245 7.9645 5.67245 7.9645 5.67245C7.9645 5.67246 7.9645 5.67246 7.9645 5.67246C7.9645 5.67246 7.9645 5.67246 7.9645 5.67246C7.9645 5.67246 7.9645 5.67246 7.9645 5.67247C7.9645 5.67247 7.9645 5.67247 7.9645 5.67247C7.9645 5.67247 7.9645 5.67247 7.9645 5.67247C7.9645 5.67247 7.9645 5.67247 7.9645 5.67248C7.9645 5.67248 7.9645 5.67248 7.9645 5.67248C7.9645 5.67248 7.9645 5.67248 7.9645 5.67248C7.9645 5.67248 7.9645 5.67248 7.9645 5.67248C7.9645 5.67249 7.9645 5.67249 7.9645 5.67249C7.9645 5.67249 7.9645 5.67249 7.9645 5.67249C7.9645 5.67249 7.9645 5.67249 7.9645 5.67249C7.9645 5.67249 7.9645 5.67249 7.9645 5.6725C7.9645 5.6725 7.9645 5.6725 7.9645 5.6725C7.9645 5.6725 7.9645 5.6725 7.9645 5.6725C7.9645 5.6725 7.9645 5.6725 7.9645 5.6725C7.9645 5.6725 7.9645 5.6725 7.9645 5.6725C7.9645 5.67251 7.9645 5.67251 7.9645 5.67251C7.9645 5.67251 7.9645 5.67251 7.9645 5.67251C7.9645 5.67251 7.9645 5.67251 7.9645 5.67251C7.9645 5.67251 7.9645 5.67251 7.9645 5.67251C7.9645 5.67251 7.9645 5.67251 7.9645 5.67251C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67252 7.9645 5.67252C7.9645 5.67252 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67253C7.9645 5.67253 7.9645 5.67253 7.9645 5.67254L7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254L7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254L7.9645 5.67254L7.9645 5.67254L7.9645 5.67254L7.9645 5.67254L7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254L7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 7.9645 5.67254C7.9645 5.67254 7.9645 5.67254 6.9645 5.67254ZM5.9645 5.6392L5.9645 5.60587L7.9645 5.60587L7.9645 5.6392L5.9645 5.6392ZM6.28002 6.3349L6.24451 6.30156L7.61347 4.8435L7.64898 4.87683L6.28002 6.3349ZM5.92899 5.57253C5.92899 5.75261 5.98072 5.95281 6.10804 6.13215C6.22865 6.30204 6.3772 6.39736 6.48621 6.44854C6.5928 6.49859 6.68643 6.51861 6.74438 6.52768C6.77583 6.5326 6.80405 6.5354 6.82806 6.53701C6.84022 6.53783 6.85175 6.53837 6.86257 6.53871C6.86799 6.53888 6.87327 6.539 6.87841 6.53908C6.88098 6.53912 6.88352 6.53914 6.88603 6.53916C6.88728 6.53917 6.88853 6.53918 6.88976 6.53918C6.89038 6.53919 6.891 6.53919 6.89161 6.53919C6.89192 6.53919 6.89238 6.53919 6.89254 6.53919C6.89299 6.53919 6.89345 6.53919 6.89349 5.53919C6.89352 4.53919 6.89398 4.53919 6.89444 4.53919C6.89459 4.53919 6.89505 4.53919 6.89536 4.53919C6.89598 4.53919 6.8966 4.5392 6.89722 4.5392C6.89847 4.5392 6.89973 4.53921 6.901 4.53922C6.90354 4.53924 6.90613 4.53927 6.90876 4.53931C6.91404 4.53939 6.91952 4.53951 6.9252 4.53969C6.93654 4.54004 6.94883 4.54062 6.96197 4.5415C6.98791 4.54324 7.01891 4.5463 7.05369 4.55174C7.11829 4.56186 7.2208 4.58396 7.33626 4.63818C7.45415 4.69353 7.61158 4.7951 7.73885 4.97437C7.87282 5.16308 7.92899 5.37579 7.92899 5.57253L5.92899 5.57253ZM6.20898 6.2682L6.17348 6.23486L7.54249 4.77685L7.57799 4.81018L6.20898 6.2682ZM6.17349 6.23487L6.13798 6.20153L7.50697 4.7435L7.54248 4.77684L6.17349 6.23487ZM6.82247 6.47251C6.73844 6.47251 6.64869 6.46247 6.55642 6.43822C6.46362 6.41382 6.38148 6.37851 6.31056 6.33856C6.24153 6.29967 6.18944 6.2599 6.1558 6.23203C6.13909 6.21819 6.12577 6.20629 6.11726 6.19855C6.10941 6.19141 6.10264 6.18502 6.10247 6.18486C6.10042 6.18294 6.10498 6.18724 6.11057 6.19233C6.11682 6.19802 6.12785 6.2079 6.1422 6.21979C6.17113 6.24375 6.21823 6.27988 6.28171 6.31564C6.34708 6.35247 6.42312 6.38517 6.50899 6.40775C6.59432 6.43018 6.6763 6.43918 6.75146 6.43918L6.75146 4.43918C6.8355 4.43918 6.92525 4.44922 7.01751 4.47347C7.11032 4.49787 7.19246 4.53318 7.26338 4.57313C7.33241 4.61202 7.3845 4.65179 7.41814 4.67966C7.43485 4.69351 7.44817 4.7054 7.45668 4.71315C7.46452 4.72029 7.4713 4.72667 7.47146 4.72683C7.47351 4.72875 7.46896 4.72445 7.46337 4.71936C7.45712 4.71367 7.44609 4.7038 7.43173 4.69191C7.40281 4.66794 7.35571 4.63182 7.29222 4.59605C7.22686 4.55923 7.15082 4.52652 7.06495 4.50395C6.97962 4.48151 6.89763 4.47251 6.82247 4.47251L6.82247 6.47251ZM6.75146 5.43918C6.75147 6.43918 6.75101 6.43918 6.75055 6.43918C6.7504 6.43918 6.74994 6.43918 6.74963 6.43918C6.74901 6.43917 6.74839 6.43917 6.74777 6.43917C6.74652 6.43917 6.74526 6.43916 6.74399 6.43915C6.74145 6.43913 6.73886 6.4391 6.73623 6.43906C6.73095 6.43898 6.72547 6.43886 6.71979 6.43868C6.70845 6.43833 6.69616 6.43775 6.68303 6.43687C6.65708 6.43513 6.62609 6.43208 6.59131 6.42663C6.5267 6.41652 6.4242 6.39442 6.30873 6.34021C6.19084 6.28487 6.0334 6.1833 5.90612 6.00403C5.77213 5.81531 5.71596 5.60259 5.71596 5.40584L7.71596 5.40584C7.71596 5.22575 7.66423 5.02554 7.53689 4.8462C7.41627 4.6763 7.2677 4.58099 7.15869 4.52981C7.0521 4.47976 6.95847 4.45975 6.90052 4.45068C6.86907 4.44576 6.84085 4.44296 6.81685 4.44135C6.80468 4.44054 6.79316 4.44 6.78234 4.43966C6.77692 4.43949 6.77163 4.43937 6.7665 4.43929C6.76393 4.43925 6.76139 4.43922 6.75888 4.4392C6.75763 4.4392 6.75638 4.43919 6.75515 4.43918C6.75453 4.43918 6.75391 4.43918 6.75329 4.43918C6.75299 4.43918 6.75253 4.43918 6.75237 4.43918C6.75191 4.43918 6.75146 4.43918 6.75146 5.43918ZM6.29099 6.31105C3.75805 5.12189 1.78592 3.27304 0.474887 0.847263L2.23436 -0.103656C3.33771 1.93785 4.98714 3.48948 7.14093 4.50063L6.29099 6.31105ZM0.47197 0.841824C0.516065 0.924631 0.585265 0.970479 0.643179 0.988605C0.700659 1.0066 0.764152 1.00363 0.82095 0.976968L-0.0289959 -0.833444C0.778097 -1.21235 1.79399 -0.93067 2.23728 -0.0982176L0.47197 0.841824ZM0.82095 0.976968C0.879866 0.949309 0.945269 0.888493 0.978862 0.793865C1.01314 0.697308 1.0051 0.588274 0.959083 0.501866L-0.806227 1.44191C-1.27052 0.570008 -0.866789 -0.44012 -0.0289959 -0.833444L0.82095 0.976968ZM0.955393 0.495C1.84048 2.12633 3.05097 3.47774 4.52514 4.52356L3.36792 6.15476C1.6466 4.93361 0.229673 3.35127 -0.802537 1.44877L0.955393 0.495ZM4.52514 7.48829C3.05097 8.53411 1.84048 9.88552 0.955393 11.5168L-0.802536 10.5631C0.229673 8.66058 1.6466 7.07824 3.36792 5.85708L4.52514 7.48829ZM0.959084 11.51C1.0051 11.4236 1.01314 11.3145 0.978863 11.218C0.945269 11.1234 0.879867 11.0625 0.820951 11.0349L-0.0289953 12.8453C-0.866788 12.452 -1.27052 11.4418 -0.806227 10.5699L0.959084 11.51ZM0.820951 11.0349C0.70597 10.9809 0.605933 11.0012 0.563086 11.0188C0.527049 11.0335 0.496296 11.0577 0.47197 11.1033L2.23728 12.0434C1.8695 12.734 0.916171 13.289 -0.0289953 12.8453L0.820951 11.0349ZM5.43562 6.91403C5.21277 7.01293 4.99613 7.13375 4.5485 7.4712L3.34456 5.87417C3.86983 5.47818 4.21953 5.26562 4.62432 5.08597L5.43562 6.91403ZM4.57114 4.55823C4.80953 4.7489 4.95337 4.84085 5.05782 4.89935C5.1928 4.97495 5.24555 4.99137 5.47212 5.10306L4.58782 6.89694C4.28107 6.74573 3.96362 6.63335 3.32191 6.1201L4.57114 4.55823Z",
                    fill: "#F8A15C",
                    mask: "url(#path-1-inside-1)"
                }),
                ve = function (C) {
                    var e = C.svgRef,
                        t = C.title,
                        n = de(C, ["svgRef", "title"]);
                    return c.a.createElement("svg", le({
                        width: 7,
                        height: 12,
                        viewBox: "0 0 7 12",
                        fill: "none",
                        ref: e
                    }, n), t ? c.a.createElement("title", null, t) : null, fe, he, pe)
                },
                me = c.a.forwardRef((function (C, e) {
                    return c.a.createElement(ve, le({
                        svgRef: e
                    }, C))
                })),
                Le = (t.p, t(27)),
                Ee = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t() {
                        var C;
                        Object(I.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (C = e.call.apply(e, [this].concat(r))).state = {
                            isVisible: !1
                        }, C.el = c.a.createRef(), C.cursorDot = c.a.createRef(), C.requestRef = c.a.createRef(), C.previousTimeRef = c.a.createRef(), C.cursorVisible = c.a.createRef(!1), C.cursorEnlarged = c.a.createRef(!1), C.arrowLeft = c.a.createRef(), C.arrowRight = c.a.createRef(), C.handleMouseMove = function (e) {
                            e.target && "iframe" === e.target.localName ? C.setState({
                                isVisible: !1
                            }) : C.setState({
                                isVisible: !0
                            }), C.positionDot(e)
                        }, C.handleMouseEnter = function () {
                            C.setState({
                                isVisible: !0
                            })
                        }, C.handleMouseLeave = function () {
                            C.setState({
                                isVisible: !1
                            })
                        }, C.handleOver = function () {
                            z.a.to(C.cursorDot.current, {
                                duration: .334,
                                scale: 2,
                                backgroundColor: "rgba(248, 161, 92, 0.1)",
                                ease: vC.a
                            }), C.props.carouselCursor !== Le.a.LEFT && C.props.carouselCursor !== Le.a.BOTH || (z.a.killTweensOf(C.arrowLeft.current), z.a.fromTo(C.arrowLeft.current, {
                                x: 0
                            }, {
                                duration: .5,
                                x: -10
                            }), z.a.to(C.arrowLeft.current, {
                                duration: .334,
                                autoAlpha: 1,
                                ease: vC.a
                            })), C.props.carouselCursor === Le.a.LEFT && (z.a.killTweensOf(C.arrowRight.current), z.a.to(C.arrowRight.current, {
                                duration: .334,
                                autoAlpha: 0,
                                ease: vC.a
                            })), C.props.carouselCursor !== Le.a.RIGHT && C.props.carouselCursor !== Le.a.BOTH || (z.a.killTweensOf(C.arrowRight.current), z.a.fromTo(C.arrowRight.current, {
                                x: 0
                            }, {
                                duration: .5,
                                x: 10
                            }), z.a.to(C.arrowRight.current, {
                                duration: .334,
                                autoAlpha: 1,
                                ease: vC.a
                            })), C.props.carouselCursor === Le.a.RIGHT && (z.a.killTweensOf(C.arrowLeft.current), z.a.to(C.arrowLeft.current, {
                                duration: .334,
                                autoAlpha: 0,
                                ease: vC.a
                            }))
                        }, C.handleOut = function () {
                            z.a.to(C.cursorDot.current, {
                                duration: .334,
                                scale: 1,
                                backgroundColor: "rgba(248, 161, 92, 1)",
                                ease: vC.a
                            }), z.a.killTweensOf([C.arrowLeft.current, C.arrowRight.current]), z.a.to([C.arrowLeft.current, C.arrowRight.current], {
                                duration: .334,
                                autoAlpha: 0,
                                ease: vC.a
                            }, 0)
                        }, C.positionDot = function (e) {
                            C.endX = e.clientX, C.endY = e.clientY, z.a.killTweensOf(C.el.current), z.a.set(C.el.current, {
                                force3D: !0,
                                x: C.endX,
                                y: C.endY
                            })
                        }, C.toggleCursorVisibility = function () {
                            C.state.isVisible ? (C.el.current.style.opacity = 1, document.body.style.cursor = "none") : (C.el.current.style.opacity = 0, document.body.style.cursor = "default")
                        }, C
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            P.b || (document.addEventListener("mousemove", this.handleMouseMove, !1), document.addEventListener("mouseenter", this.handleMouseEnter, !1), document.addEventListener("mouseleave", this.handleMouseLeave, !1)), z.a.set([this.arrowLeft.current, this.arrowRight.current], {
                                autoAlpha: 0
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {
                            C.cursorHover === this.props.cursorHover || P.b || (this.props.cursorHover ? this.handleOver() : this.handleOut()), C.carouselCursor !== this.props.carouselCursor && (this.props.carouselCursor !== Le.a.NONE ? this.handleOver() : this.handleOut()), e.isVisible !== this.state.isVisible && this.toggleCursorVisibility()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            P.b || (document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseenter", this.handleMouseEnter), document.removeEventListener("mouseleave", this.handleMouseLeave))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return c.a.createElement("div", {
                                className: Q()("CustomCursor", this.props.className, {
                                    search: this.props.searchCursor
                                })
                            }, c.a.createElement("div", {
                                className: "cursor-pointer",
                                ref: this.el
                            }, c.a.createElement("div", {
                                ref: this.cursorDot,
                                className: "inner"
                            }), c.a.createElement("div", {
                                className: "left-arrow-container",
                                ref: this.arrowLeft
                            }, c.a.createElement(me, {
                                className: "left-arrow"
                            })), c.a.createElement("div", {
                                className: "right-arrow-container",
                                ref: this.arrowRight
                            }, c.a.createElement(me, {
                                className: "right-arrow"
                            }))))
                        }
                    }]), t
                }(c.a.PureComponent);
            Ee.defaultProps = {
                carouselCursor: Le.a.NONE
            };
            var ge = Object(l.c)((function (C, e) {
                    return {
                        cursorHover: C.cursorHover,
                        carouselCursor: C.carouselCursor,
                        searchCursor: C.searchCursor
                    }
                }), null)(Ee),
                ye = Object(i.lazy)((function () {
                    return Promise.all([t.e(13), t.e(6), t.e(31)]).then(t.bind(null, 426))
                })),
                Se = n.c.isPhone && Object(i.lazy)((function () {
                    return t.e(32).then(t.bind(null, 424))
                }));
            var be = {
                    gtmId: "GTM-PGW8CVC"
                },
                Oe = function (C) {
                    Object(Z.a)(t, C);
                    var e = Object(W.a)(t);

                    function t(C) {
                        var n;
                        return Object(I.a)(this, t), (n = e.call(this, C)).initSite = function () {
                            z.a.set(n.contentRef.current, {
                                overflow: null
                            }), n.contentRef.current.style[n.pathStyle] = "initial", n.setState({
                                loaded: !0
                            })
                        }, n.closeVideoOverlay = function () {
                            n.props.setVideoState({
                                active: !1,
                                url: null
                            })
                        }, n.updateMask = function () {
                            n.contentRef.current && (n.contentRef.current.style[n.pathStyle] = "circle(".concat(n.mask.center, "px at 50% ").concat(.5 * window.innerHeight, "px)"))
                        }, n.handleCloseEnter = function () {
                            n.props.setCursorHover(!0)
                        }, n.handleCloseLeave = function () {
                            n.props.setCursorHover(!1)
                        }, n.handleResize = U()((function () {
                            var C = function () {
                                var C = navigator.userAgent || navigator.vendor || window.opera;
                                return C.indexOf("FBAN") > -1 || C.indexOf("FBAV") > -1 || C.indexOf("Instagram") > -1
                            }() ? window.screen.height - 80 : window.innerHeight;
                            n.props.setLayout(window.innerWidth, C, sC.a.all)
                        }), cC.e), n.state = {
                            loaded: !1
                        }, n.contentRef = c.a.createRef(), n
                    }
                    return Object(H.a)(t, [{
                        key: "componentDidMount",
                        value: function () {
                            if (K.a.initialize(be), window.addEventListener("resize", this.handleResize), this.handleResize(), this.props.getGeneralData(), this.props.getPagesData(), window.preload_assets) {
                                var C = window.preload_assets;
                                if (n.c.isMobile) {
                                    var e = null === C || void 0 === C ? void 0 : C.mobile.flatMap((function (C) {
                                        return Object.values(C)
                                    }));
                                    this.props.setPreloadAssets(e)
                                } else {
                                    var t = null === C || void 0 === C ? void 0 : C.desktop.flatMap((function (C) {
                                        return Object.values(C)
                                    }));
                                    this.props.setPreloadAssets(t)
                                }
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (C, e) {
                            if (C.location.pathname !== this.props.location.pathname && (this.props.setPreviousRoute(C.location.pathname), this.props.menuState === fC && this.props.setMenuState(hC)), C.ready !== this.props.ready && this.props.ready) {
                                this.mask = {
                                    center: 0
                                }, this.pathStyle = "clip-path", n.b.isSafari && (this.pathStyle = "-webkit-clip-path");
                                var t = this.contentRef.current,
                                    r = Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2));
                                z.a.to(this.mask, .667, {
                                    center: r,
                                    onStart: function () {
                                        z.a.set(t, {
                                            visibility: "visible",
                                            overflow: "hidden"
                                        })
                                    },
                                    onUpdate: this.updateMask,
                                    ease: vC.a,
                                    onComplete: this.initSite,
                                    delay: .133
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            window.removeEventListener("resize", this.handleResize)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var C = this,
                                e = this.props,
                                t = e.location,
                                n = e.generalData,
                                r = e.pagesData,
                                a = e.ready,
                                o = e.videoState,
                                s = e.windowSize;
                            return c.a.createElement(i.Fragment, null, c.a.createElement(i.Suspense, {
                                fallback: c.a.createElement("div", {
                                    className: "loading"
                                })
                            }, !this.state.loaded && c.a.createElement(ye, null)), c.a.createElement("div", {
                                ref: this.contentRef,
                                style: {
                                    visibility: "hidden"
                                }
                            }, a && n && r && c.a.createElement(i.Fragment, null, c.a.createElement(i.Suspense, {
                                fallback: c.a.createElement("div", {
                                    className: "loading"
                                })
                            }, Se && c.a.createElement(Se, ue)), !1, c.a.createElement(OC, null), c.a.createElement(FC, {
                                location: t
                            }), c.a.createElement(iC, null), c.a.createElement(G.Transition, {
                                in: o.active && Boolean(o.url),
                                timeout: {
                                    enter: 1e3,
                                    exit: 300
                                }
                            }, (function (e) {
                                return c.a.createElement($C, {
                                    url: C.props.videoState.url,
                                    transitionState: e,
                                    onClose: C.closeVideoOverlay,
                                    onCloseEnter: C.handleCloseEnter,
                                    onCloseLeave: C.handleCloseLeave,
                                    height: .8 * s.height,
                                    width: .8 * s.width,
                                    isPlaying: C.props.videoState.active
                                })
                            })), c.a.createElement(ge, null))))
                        }
                    }]), t
                }(c.a.PureComponent);
            Oe.defaultProps = {};
            var ke = Object(B.a)(Object(l.c)((function (C) {
                var e = C.windowSize,
                    t = C.layout,
                    n = C.menuState,
                    r = C.generalData,
                    a = C.pagesData,
                    o = C.preloader,
                    i = C.videoState,
                    c = C.isMobileMenuOpen;
                return {
                    windowSize: e,
                    layout: t,
                    menuState: n,
                    generalData: uC(r) ? r : null,
                    pagesData: a,
                    ready: o.ready,
                    videoState: i,
                    isMobileMenuOpen: c
                }
            }), (function (C) {
                return {
                    setPreviousRoute: function (e) {
                        return C(Object(w.q)(e))
                    },
                    setLayout: function (e, t, n) {
                        return C(Object(w.a)([Object(w.u)({
                            width: e,
                            height: t
                        }), Object(w.n)(n)]))
                    },
                    setMenuState: function (e) {
                        return C(O(e))
                    },
                    setVideoState: function (e) {
                        return C(Object(w.t)(e))
                    },
                    getGeneralData: function () {
                        var e = Object(N.a)(x.a.mark((function e() {
                            return x.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = C, e.t1 = w.m, e.next = 4, Object(KC.a)("general");
                                    case 4:
                                        return e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.abrupt("return", (0, e.t0)(e.t3));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    getPagesData: function () {
                        var e = Object(N.a)(x.a.mark((function e() {
                            return x.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = C, e.t1 = w.o, e.next = 4, Object(KC.a)("pages");
                                    case 4:
                                        return e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.abrupt("return", (0, e.t0)(e.t3));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    setCursorHover: function (e) {
                        return C(Object(w.l)(e))
                    },
                    setPreloadAssets: function (e) {
                        return C(Object(S.c)(e))
                    }
                }
            }))(Oe));
            t(239);
            (function () {
                var C = document.getElementById("root"),
                    e = [P.b ? "mobile" : "", n.c.getType(), n.b.getName()].filter((function (C) {
                        return Boolean(C)
                    }));
                document.body.className = [].concat(Object(o.a)(document.body.className.split(" ")), Object(o.a)(e)).filter(Boolean).join(" ");
                var t;
                t = c.a.createElement(ke, null), u.a.render(c.a.createElement(l.a, {
                    store: M
                }, c.a.createElement(d.a, {
                    history: A
                }, t)), C)
            })()
        },
        27: function (C, e, t) {
            "use strict";
            e.a = {
                LEFT: "left",
                RIGHT: "right",
                BOTH: "both",
                NONE: "none"
            }
        },
        28: function (C, e, t) {
            "use strict";
            t.d(e, "e", (function () {
                return n
            })), t.d(e, "d", (function () {
                return r
            })), t.d(e, "b", (function () {
                return a
            })), t.d(e, "c", (function () {
                return o
            })), t.d(e, "a", (function () {
                return i
            }));
            var n = 10,
                r = !1,
                a = ("".concat("", "/assets/"), "".concat("", "/assets/images/"), Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    REACT_APP_API_USERNAME: "buddha",
                    REACT_APP_SW_CACHE_BUST: "1615428452",
                    REACT_APP_GA_TRACKING_ID: "UA-000000000-1",
                    REACT_APP_WEBSITE_NAME: "Buddha Jones ",
                    REACT_APP_WEBSITE_TITLE: "Buddha Jones",
                    REACT_APP_WEBSITE_DESCRIPTION: "Default description",
                    REACT_APP_WEBSITE_KEY_WORD: "Buddha Jones,web App,React",
                    REACT_APP_WEBSITE_SITE_URL: "http://buddha-jones.com/",
                    REACT_APP_WEBSITE_OG_LOCALE: "en_US",
                    REACT_APP_WEBSITE_OG_IMAGE: "",
                    REACT_APP_WEBSITE_FB_APP_ID: "[fb-id]",
                    REACT_APP_WEBSITE_TW_CARD: "summary",
                    REACT_APP_STATIC_URL: "/wp-content/themes/buddha-theme/release/static/js/",
                    REACT_APP_CONNECT_WITH_API: "true",
                    REACT_APP_API_URL: "/wp-json/jam3/v1/",
                    REACT_APP_API_PASSWORD: "cDW^TSBeyWJ8!",
                    REACT_APP_NODE_ENV: "production",
                    REACT_APP_GTM_ID: "GTM-PGW8CVC"
                }).REACT_APP_PROXY_URL || "/wp-json/jam3/v1/"),
                o = "buddha",
                i = "cDW^TSBeyWJ8!"
        },
        31: function (C) {
            C.exports = JSON.parse('{"e":768,"d":1024,"a":1200,"c":1440,"b":1920}')
        },
        39: function (C, e, t) {
            "use strict";
            t.d(e, "a", (function () {
                return o
            })), t.d(e, "b", (function () {
                return i
            })), t.d(e, "e", (function () {
                return c
            })), t.d(e, "d", (function () {
                return s
            })), t.d(e, "c", (function () {
                return u
            }));
            var n = t(21),
                r = t(4),
                a = {
                    preloader: {
                        progress: 0,
                        ready: !1
                    }
                };

            function o() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.preloader,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case r.a.SET_PROGRESS:
                        return Object(n.a)({}, C, {
                            progress: e.progress
                        });
                    case r.a.SET_READY:
                        return Object(n.a)({}, C, {
                            ready: e.ready
                        });
                    default:
                        return C
                }
            }

            function i() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.assets;
                return t === r.a.SET_PRELOAD_ASSETS ? n : C
            }

            function c(C) {
                return {
                    type: r.a.SET_READY,
                    ready: C
                }
            }

            function s(C) {
                return {
                    type: r.a.SET_PROGRESS,
                    progress: C
                }
            }

            function u(C) {
                return {
                    type: r.a.SET_PRELOAD_ASSETS,
                    assets: C
                }
            }
        },
        4: function (C, e, t) {
            "use strict";
            e.a = {
                SET_READY: "SET_READY",
                SET_PROGRESS: "SET_PROGRESS",
                BATCH_ACTIONS: "BATCH_ACTIONS",
                SET_WINDOW_SIZE: "SET_WINDOW_SIZE",
                SET_LAYOUT: "SET_LAYOUT",
                SET_MENU_STATE: "SET_MENU_STATE",
                SET_PREV_ROUTE: "SET_PREV_ROUTE",
                PAGE_LOADED: "PAGE_LOADED",
                SET_GENERAL_DATA: "SET_GENERAL_DATA",
                SET_PAGES_DATA: "SET_PAGES_DATA",
                SET_WORK_DATA: "SET_WORK_DATA",
                SET_POST_DATA: "SET_POST_DATA",
                SET_PRELOAD_ASSETS: "SET_PRELOAD_ASSETS",
                SEARCH_WORK: "SEARCH_WORK",
                FILTER_WORK: "FILTER_WORK",
                SET_SCROLL_DIRECTION: "SET_SCROLL_DIRECTION",
                SET_VIDEO_STATE: "SET_VIDEO_STATE",
                SET_CURSOR_HOVER: "SET_CURSOR_HOVER",
                SET_PRIVATE_URL_DATA: "SET_PRIVATE_URL_DATA",
                SET_CAROUSEL_CURSOR: "SET_CAROUSEL_CURSOR",
                SET_SEARCH_CURSOR: "SET_SEARCH_CURSOR"
            }
        },
        43: function (C, e, t) {
            "use strict";
            var n = t(40),
                r = t(116);
            e.a = function () {
                var C = 0,
                    e = !1;
                return {
                    isLocked: e,
                    lock: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e || (t || (C = Object(n.a)(), document.body.style.marginTop = "-".concat(C, "px")), document.body.style.position = "fixed", document.body.style.overflow = "hidden", e = !0)
                    },
                    unlock: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && (document.body.style.position = "", document.body.style.overflow = "", document.body.style.marginTop = "", !t && Object(r.a)({
                            y: C
                        }), e = !1)
                    }
                }
            }()
        },
        44: function (C, e, t) {
            "use strict";
            var n = t(31),
                r = "(min-width: ".concat(n.e, "px)"),
                a = "(min-width: ".concat(n.d, "px)"),
                o = "(min-width: ".concat(n.a, "px)"),
                i = "(min-width: ".concat(n.c, "px)"),
                c = "(min-width: ".concat(n.b, "px)"),
                s = window.matchMedia(r),
                u = window.matchMedia(a),
                l = window.matchMedia(o),
                d = window.matchMedia(i),
                f = window.matchMedia(c);
            e.a = {
                get small() {
                    return !this.tabletSmall
                },
                get tabletSmall() {
                    return s.matches
                },
                get tabletLarge() {
                    return u.matches
                },
                get desktop() {
                    return l.matches
                },
                get medium() {
                    return d.matches
                },
                get large() {
                    return f.matches
                },
                get all() {
                    return {
                        small: this.small,
                        tabletSmall: this.tabletSmall,
                        tabletLarge: this.tabletLarge,
                        desktop: this.desktop,
                        medium: this.medium,
                        large: this.large
                    }
                }
            }
        },
        5: function (C, e, t) {
            "use strict";
            t.d(e, "a", (function () {
                return c
            })), t.d(e, "b", (function () {
                return s
            })), t.d(e, "c", (function () {
                return u
            })), t.d(e, "d", (function () {
                return l
            })), t.d(e, "e", (function () {
                return d
            }));
            var n = t(30),
                r = t.n(n),
                a = t(71),
                o = t(29),
                i = t(67);
            a.a.registerPlugin(o.b), a.a.registerPlugin(i.a);
            var c = r()(.9, 0, .1, 1),
                s = (r()(.9, 0, .83, 1), r()(.14, 1, .34, 1)),
                u = r()(.76, 0, .24, 1),
                l = r()(.17, 0, .1, 1),
                d = r()(.48, .04, .52, .96)
        },
        55: function (C, e, t) {
            "use strict";
            t.d(e, "a", (function () {
                return c
            })), t.d(e, "b", (function () {
                return s
            }));
            var n, r = t(20),
                a = t(11),
                o = t(12),
                i = (n = {}, Object(r.a)(n, "".concat(a.b.Landing), {
                    exit: 1e3
                }), Object(r.a)(n, "".concat(a.b.ProjectDetail), {
                    exit: 1e3
                }), Object(r.a)(n, "".concat(a.b.Works), {
                    exit: 1e3
                }), Object(r.a)(n, "".concat(a.b.OurStory), {
                    exit: 1e3
                }), Object(r.a)(n, "".concat(a.b.Private), {
                    exit: 1e3
                }), Object(r.a)(n, "".concat(a.b.NotFound), {
                    exit: 1e3
                }), n);

            function c(C) {
                var e;
                return (null === (e = i[Object.keys(i).find((function (e) {
                    return Object(o.a)(e, C)
                }))]) || void 0 === e ? void 0 : e.exit) || 1e3
            }

            function s(C) {
                return i[Object.keys(i).find((function (e) {
                    return Object(o.a)(e, C)
                }))] || {
                    exit: 1e3
                }
            }
        },
        56: function (C, e, t) {
            "use strict";
            e.a = {
                ENTERING: "entering",
                ENTERED: "entered",
                EXITING: "exiting",
                EXITED: "exited"
            }
        },
        6: function (C, e, t) {
            "use strict";
            t.d(e, "w", (function () {
                return i
            })), t.d(e, "h", (function () {
                return c
            })), t.d(e, "e", (function () {
                return s
            })), t.d(e, "d", (function () {
                return u
            })), t.d(e, "f", (function () {
                return l
            })), t.d(e, "i", (function () {
                return d
            })), t.d(e, "c", (function () {
                return f
            })), t.d(e, "v", (function () {
                return h
            })), t.d(e, "g", (function () {
                return p
            })), t.d(e, "b", (function () {
                return v
            })), t.d(e, "j", (function () {
                return m
            })), t.d(e, "u", (function () {
                return L
            })), t.d(e, "q", (function () {
                return E
            })), t.d(e, "n", (function () {
                return g
            })), t.d(e, "a", (function () {
                return y
            })), t.d(e, "m", (function () {
                return S
            })), t.d(e, "o", (function () {
                return b
            })), t.d(e, "p", (function () {
                return O
            })), t.d(e, "r", (function () {
                return k
            })), t.d(e, "l", (function () {
                return w
            })), t.d(e, "t", (function () {
                return T
            })), t.d(e, "k", (function () {
                return _
            })), t.d(e, "s", (function () {
                return R
            }));
            var n = t(21),
                r = t(4),
                a = t(44),
                o = {
                    windowSize: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    previousRoute: null,
                    layout: a.a.all,
                    generalData: null,
                    pagesData: null,
                    postData: {},
                    privateData: {},
                    scrollDirection: 1,
                    cursorHover: !1,
                    videoState: {
                        active: !1,
                        url: null
                    },
                    carouselCursor: "none",
                    searchCursor: !1
                };

            function i() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.windowSize,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.windowSize;
                return t === r.a.SET_WINDOW_SIZE ? n : C
            }

            function c() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.previousRoute,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.previousRoute;
                return t === r.a.SET_PREV_ROUTE ? n : C
            }

            function s() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.layout,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.layout;
                return t === r.a.SET_LAYOUT && Boolean(Object.keys(n).filter((function (e) {
                    return C[e] !== n[e]
                })).length) ? n : C
            }

            function u() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.generalData,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.generalData;
                return t === r.a.SET_GENERAL_DATA && n ? n : C
            }

            function l() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.generalData,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.pagesData;
                return t === r.a.SET_PAGES_DATA && n ? n : C
            }

            function d() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.scrollDirection,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.scrollDirection;
                return t === r.a.SET_SCROLL_DIRECTION ? n : C
            }

            function f() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.cursorHover,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.cursorHover;
                return t === r.a.SET_CURSOR_HOVER ? n : C
            }

            function h() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.videoState,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.videoState;
                return t === r.a.SET_VIDEO_STATE ? n : C
            }

            function p() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.postData,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    a = e.postData;
                return t === r.a.SET_POST_DATA && a ? Object(n.a)({}, C, {}, a) : C
            }

            function v() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.carouselCursor,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.carouselCursor;
                return t === r.a.SET_CAROUSEL_CURSOR ? n : C
            }

            function m() {
                var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.searchCursor,
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    t = e.type,
                    n = e.searchCursor;
                return t === r.a.SET_SEARCH_CURSOR ? n : C
            }

            function L(C) {
                return {
                    type: r.a.SET_WINDOW_SIZE,
                    windowSize: C
                }
            }

            function E(C) {
                return {
                    type: r.a.SET_PREV_ROUTE,
                    previousRoute: C
                }
            }

            function g(C) {
                return {
                    type: r.a.SET_LAYOUT,
                    layout: C
                }
            }

            function y(C) {
                return {
                    type: r.a.BATCH_ACTIONS,
                    actions: C
                }
            }

            function S(C) {
                return {
                    type: r.a.SET_GENERAL_DATA,
                    generalData: C
                }
            }

            function b(C) {
                return {
                    type: r.a.SET_PAGES_DATA,
                    pagesData: C
                }
            }

            function O(C) {
                var e = {};
                return e[C.id] = C, {
                    type: r.a.SET_POST_DATA,
                    postData: e
                }
            }

            function k(C) {
                return {
                    type: r.a.SET_SCROLL_DIRECTION,
                    scrollDirection: C
                }
            }

            function w(C) {
                return {
                    type: r.a.SET_CURSOR_HOVER,
                    cursorHover: C
                }
            }

            function T(C) {
                return {
                    type: r.a.SET_VIDEO_STATE,
                    videoState: C
                }
            }

            function _(C) {
                return {
                    type: r.a.SET_CAROUSEL_CURSOR,
                    carouselCursor: C
                }
            }

            function R(C) {
                return {
                    type: r.a.SET_SEARCH_CURSOR,
                    searchCursor: C
                }
            }
        },
        63: function (C, e, t) {
            "use strict";
            var n = t(16),
                r = t.n(n),
                a = t(24),
                o = t(79),
                i = function (C) {
                    var e = window.data_timestamp;
                    try {
                        return void 0 !== e ? e[C] : Math.floor(Date.now() / 1e3)
                    } catch (t) {
                        console.warn("Fail to get new timestamp: ".concat(t.message))
                    }
                },
                c = function (C) {
                    var e = C.key,
                        t = C.currentTimestamp;
                    if ("undefined" === typeof sessionStorage) return !1;
                    var n = sessionStorage.getItem(e);
                    if (!n) return !1;
                    try {
                        return JSON.parse(n).timestamp === t
                    } catch (r) {
                        console.warn("Fail to get ".concat(e, " data timestamp from session storage: ").concat(r.message))
                    }
                },
                s = function (C) {
                    return sessionStorage.getItem(C)
                },
                u = function (C) {
                    var e = C.key,
                        t = C.data,
                        n = C.timestamp;
                    try {
                        null !== s(e) && sessionStorage.removeItem(e), sessionStorage.setItem(e, '{ "data": '.concat(t, ', "timestamp": ').concat(n, "} "))
                    } catch (r) {
                        console.warn("Session storage is not available: ".concat(r.message))
                    }
                },
                l = function () {
                    var C = Object(a.a)(r.a.mark((function C(e) {
                        var t, n;
                        return r.a.wrap((function (C) {
                            for (;;) switch (C.prev = C.next) {
                                case 0:
                                    if (t = i(e), !c({
                                            key: e,
                                            currentTimestamp: t
                                        })) {
                                        C.next = 11;
                                        break
                                    }
                                    return C.prev = 2, C.abrupt("return", JSON.parse(s(e)).data);
                                case 6:
                                    C.prev = 6, C.t0 = C.catch(2), console.warn("Fail to get ".concat(e, " data from session storage ").concat(C.t0.message));
                                case 9:
                                    C.next = 16;
                                    break;
                                case 11:
                                    return C.next = 13, Object(o.a)(e);
                                case 13:
                                    return n = C.sent, u({
                                        key: e,
                                        data: JSON.stringify(n),
                                        timestamp: t
                                    }), C.abrupt("return", n);
                                case 16:
                                case "end":
                                    return C.stop()
                            }
                        }), C, null, [
                            [2, 6]
                        ])
                    })));
                    return function (e) {
                        return C.apply(this, arguments)
                    }
                }();
            e.a = l
        },
        68: function (C) {
            C.exports = JSON.parse('{"chrome":30,"firefox":40,"safari":9,"internet explorer":10,"edge":12,"ios":9,"mac":10.1,"windows":7}')
        },
        79: function (C, e, t) {
            "use strict";
            t.d(e, "a", (function () {
                return d
            }));
            var n = t(16),
                r = t.n(n),
                a = t(24),
                o = t(72),
                i = t.n(o),
                c = t(128),
                s = t.n(c),
                u = t(28),
                l = function (C) {
                    return function (e) {
                        throw new Error('Connection error requesting "'.concat(C, '": ').concat(e.message))
                    }
                },
                d = function () {
                    var C = Object(a.a)(r.a.mark((function C(e) {
                        var t, n, a, o;
                        return r.a.wrap((function (C) {
                            for (;;) switch (C.prev = C.next) {
                                case 0:
                                    return t = new URLSearchParams(window.location.search), C.prev = 1, n = "".concat(u.b).concat(e), C.next = 5, i.a.get(n, {
                                        auth: {
                                            username: u.c,
                                            password: u.a
                                        },
                                        params: {
                                            preview_id: t.get("preview_id")
                                        }
                                    });
                                case 5:
                                    return a = C.sent, o = a.data, C.abrupt("return", o);
                                case 10:
                                    C.prev = 10, C.t0 = C.catch(1), console.error(s.a.red(C.t0.message)), l(e);
                                case 14:
                                case "end":
                                    return C.stop()
                            }
                        }), C, null, [
                            [1, 10]
                        ])
                    })));
                    return function (e) {
                        return C.apply(this, arguments)
                    }
                }()
        },
        80: function (C, e, t) {
            "use strict";
            var n = t(127),
                r = t.n(n);
            e.a = function (C) {
                for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
                return r.a.sanitize(C, t)
            }
        },
        81: function (C, e, t) {
            "use strict";
            t.d(e, "d", (function () {
                return n
            })), t.d(e, "c", (function () {
                return r
            })), t.d(e, "b", (function () {
                return a
            })), t.d(e, "a", (function () {
                return o
            }));
            var n = {
                    s1: [0, 0, 100, 0, 100, 0, 100, 100, 0, 100],
                    e1: [0, 0, 0, 0, 100, 100, 100, 100, 0, 100],
                    s2: [0, 0, 100, 100, 100, 100, 0, 100],
                    e2: [0, 100, 0, 100, 100, 100, 0, 100]
                },
                r = {
                    s1: [0, 0, 100, 0, 100, 100, 0, 100, 0, 100],
                    e1: [0, 0, 100, 0, 100, 100, 100, 100, 0, 0],
                    s2: [0, 0, 100, 0, 100, 100],
                    e2: [100, 0, 100, 0, 100, 0]
                },
                a = [{
                    s: [0, 100, 0, 100, 100, 100, 100, 100, 0, 100],
                    e: [0, 83, 100, 100, 100, 100, 100, 100, 0, 100],
                    duration: .17
                }, {
                    s: [0, 83, 0, 83, 100, 100, 100, 100, 0, 100],
                    e: [0, 0, 0, 0, 100, 17, 100, 100, 0, 100],
                    duration: .66
                }, {
                    s: [0, 0, 0, 0, 100, 17, 100, 100, 0, 100],
                    e: [0, 0, 100, 0, 100, 0, 100, 100, 0, 100],
                    duration: .17
                }],
                o = [{
                    s: [0, 0, 100, 0, 100, 0, 100, 0],
                    e: [0, 0, 100, 0, 100, 17, 0, 0],
                    duration: .17
                }, {
                    s: [0, 0, 100, 0, 100, 17, 0, 0],
                    e: [0, 0, 100, 0, 100, 100, 0, 83],
                    duration: .66
                }, {
                    s: [0, 0, 100, 0, 100, 100, 100, 100, 0, 83],
                    e: [0, 0, 100, 0, 100, 100, 0, 100, 0, 100],
                    duration: .17
                }]
        }
    },
    [
        [143, 11, 12]
    ]
]);