(function (L, E) {
  typeof exports == "object" && typeof module == "object"
    ? (module.exports = E())
    : typeof define == "function" && define.amd
    ? define([], E)
    : typeof exports == "object"
    ? (exports.Lightense = E())
    : (L.Lightense = E());
})(window, function () {
  return (
    (d = {}),
    (L.m = E =
      [
        function (f, S) {
          function P(K, B) {
            var p,
              b = Object.keys(K);
            return (
              Object.getOwnPropertySymbols &&
                ((p = Object.getOwnPropertySymbols(K)),
                B &&
                  (p = p.filter(function (a) {
                    return Object.getOwnPropertyDescriptor(K, a).enumerable;
                  })),
                b.push.apply(b, p)),
              b
            );
          }
          function z(K) {
            for (var B = 1; B < arguments.length; B++) {
              var p = arguments[B] != null ? arguments[B] : {};
              B % 2
                ? P(Object(p), !0).forEach(function (b) {
                    var a, q, rn;
                    (a = K),
                      (rn = p[(q = b)]),
                      q in a
                        ? Object.defineProperty(a, q, {
                            value: rn,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (a[q] = rn);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    K,
                    Object.getOwnPropertyDescriptors(p)
                  )
                : P(Object(p)).forEach(function (b) {
                    Object.defineProperty(
                      K,
                      b,
                      Object.getOwnPropertyDescriptor(p, b)
                    );
                  });
            }
            return K;
          }
          function en(K) {
            return (en =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (B) {
                    return typeof B;
                  }
                : function (B) {
                    return B &&
                      typeof Symbol == "function" &&
                      B.constructor === Symbol &&
                      B !== Symbol.prototype
                      ? "symbol"
                      : typeof B;
                  })(K);
          }
          var pn = (function () {
            "use strict";
            var K,
              B = window,
              p = document,
              b = {
                time: 300,
                padding: 40,
                offset: 40,
                keyboard: !0,
                cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
                background: "var(--bg-color-80, rgba(255, 255, 255, .98))",
                zIndex: 1e6,
                beforeShow: void 0,
                afterShow: void 0,
                beforeHide: void 0,
                afterHide: void 0,
              },
              a = {};
            function q(k) {
              var R = a[k];
              if (R) {
                if (typeof R != "function")
                  throw "config.".concat(k, " must be a function!");
                Reflect.apply(R, a, [a]);
              }
            }
            function rn(k) {
              k.src &&
                !k.classList.contains("lightense-target") &&
                (k.classList.add("lightense-target"),
                k.addEventListener(
                  "click",
                  function (R) {
                    return a.keyboard && (R.metaKey || R.ctrlKey)
                      ? B.open(k.src, "_blank")
                      : void (function (Y) {
                          if (
                            ((a.target = Y),
                            a.target.classList.contains("lightense-open"))
                          )
                            return G();
                          q("beforeShow"),
                            (a.scrollY = B.scrollY),
                            (function (X, _, jn) {
                              X.addEventListener(_, function Bn(Vn) {
                                Reflect.apply(jn, this, Vn),
                                  X.removeEventListener(_, Bn);
                              });
                            })(a.target, "transitionend", function () {
                              q("afterShow");
                            });
                          var ln = new Image();
                          (ln.onload = function () {
                            (function (X) {
                              var _ = X.width,
                                jn = X.height,
                                Bn =
                                  B.pageYOffset ||
                                  p.documentElement.scrollTop ||
                                  0,
                                Vn =
                                  B.pageXOffset ||
                                  p.documentElement.scrollLeft ||
                                  0,
                                Rn = a.target.getBoundingClientRect(),
                                fe = _ / Rn.width,
                                Wn =
                                  B.innerWidth ||
                                  p.documentElement.clientWidth ||
                                  0,
                                F =
                                  B.innerHeight ||
                                  p.documentElement.clientHeight ||
                                  0,
                                $ =
                                  a.target.getAttribute(
                                    "data-lightense-padding"
                                  ) ||
                                  a.target.getAttribute("data-padding") ||
                                  a.padding,
                                de = $ < Wn ? Wn - $ : Wn - b.padding,
                                Kn = $ < F ? F - $ : F - b.padding,
                                i = _ / jn,
                                l = de / Kn;
                              a.scaleFactor =
                                _ < de && jn < Kn
                                  ? fe
                                  : i < l
                                  ? (Kn / jn) * fe
                                  : (de / _) * fe;
                              var m = Wn / 2,
                                O = Bn + F / 2,
                                v = Rn.left + Vn + Rn.width / 2,
                                Q = Rn.top + Bn + Rn.height / 2;
                              (a.translateX = Math.round(m - v)),
                                (a.translateY = Math.round(O - Q));
                            })(this),
                              (function () {
                                a.target.classList.add("lightense-open"),
                                  (a.wrap = p.createElement("div")),
                                  (a.wrap.className = "lightense-wrap"),
                                  setTimeout(function () {
                                    a.target.style.transform =
                                      "scale(" + a.scaleFactor + ")";
                                  }, 20),
                                  a.target.parentNode.insertBefore(
                                    a.wrap,
                                    a.target
                                  ),
                                  a.wrap.appendChild(a.target),
                                  setTimeout(function () {
                                    a.wrap.style.transform =
                                      "translate3d(" +
                                      a.translateX +
                                      "px, " +
                                      a.translateY +
                                      "px, 0)";
                                  }, 20);
                                var X = {
                                    cubicBezier:
                                      a.target.getAttribute(
                                        "data-lightense-cubic-bezier"
                                      ) || a.cubicBezier,
                                    background:
                                      a.target.getAttribute(
                                        "data-lightense-background"
                                      ) ||
                                      a.target.getAttribute(
                                        "data-background"
                                      ) ||
                                      a.background,
                                    zIndex:
                                      a.target.getAttribute(
                                        "data-lightense-z-index"
                                      ) || a.zIndex,
                                  },
                                  _ = z(z({}, a), X);
                                M(
                                  "lightense-images-css-computed",
                                  `
    :root {
      --lightense-z-index: `
                                    .concat(
                                      _.zIndex - 1,
                                      `;
      --lightense-backdrop: `
                                    )
                                    .concat(
                                      _.background,
                                      `;
      --lightense-duration: `
                                    )
                                    .concat(
                                      _.time,
                                      `ms;
      --lightense-timing-func: `
                                    )
                                    .concat(
                                      _.cubicBezier,
                                      `;
    }`
                                    )
                                ),
                                  (a.container.style.visibility = "visible"),
                                  setTimeout(function () {
                                    a.container.style.opacity = "1";
                                  }, 20);
                              })(),
                              B.addEventListener("keyup", A, !1),
                              B.addEventListener("scroll", c, !1),
                              a.container.addEventListener("click", G, !1);
                          }),
                            (ln.src = a.target.src);
                        })(this);
                  },
                  !1
                ));
            }
            function M(k, R) {
              var Y = p.head || p.getElementsByTagName("head")[0];
              p.getElementById(k) && p.getElementById(k).remove();
              var ln = p.createElement("style");
              (ln.id = k),
                ln.styleSheet
                  ? (ln.styleSheet.cssText = R)
                  : ln.appendChild(p.createTextNode(R)),
                Y.appendChild(ln);
            }
            function G() {
              q("beforeHide"),
                B.removeEventListener("keyup", A, !1),
                B.removeEventListener("scroll", c, !1),
                a.container.removeEventListener("click", G, !1),
                a.target.classList.remove("lightense-open"),
                (a.wrap.style.transform = ""),
                (a.target.style.transform = ""),
                a.target.classList.add("lightense-transitioning"),
                (a.container.style.opacity = ""),
                setTimeout(function () {
                  q("afterHide"),
                    (a.container.style.visibility = ""),
                    (a.container.style.backgroundColor = ""),
                    a.wrap.parentNode.replaceChild(a.target, a.wrap),
                    a.target.classList.remove("lightense-transitioning");
                }, a.time);
            }
            function c() {
              Math.abs(a.scrollY - B.scrollY) >= a.offset && G();
            }
            function A(k) {
              k.preventDefault(), k.keyCode === 27 && G();
            }
            return function (k) {
              var R =
                1 < arguments.length && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              (K = (function (Y) {
                switch (en(Y)) {
                  case "undefined":
                    throw "You need to pass an element!";
                  case "string":
                    return p.querySelectorAll(Y);
                  case "object":
                    return Y;
                }
              })(k)),
                (a = z(z({}, b), R)),
                M(
                  "lightense-images-css",
                  `
:root {
  --lightense-z-index: `
                    .concat(
                      a.zIndex - 1,
                      `;
  --lightense-backdrop: `
                    )
                    .concat(
                      a.background,
                      `;
  --lightense-duration: `
                    )
                    .concat(
                      a.time,
                      `ms;
  --lightense-timing-func: `
                    )
                    .concat(
                      a.cubicBezier,
                      `;
}

.lightense-backdrop {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: calc(var(--lightense-z-index) - 1);
  padding: 0;
  margin: 0;
  transition: opacity var(--lightense-duration) ease;
  cursor: zoom-out;
  opacity: 0;
  background-color: var(--lightense-backdrop);
  visibility: hidden;
}

@supports (-webkit-backdrop-filter: blur(30px)) {
  .lightense-backdrop {
    background-color: var(--lightense-backdrop);
    -webkit-backdrop-filter: blur(30px);
  }
}

@supports (backdrop-filter: blur(30px)) {
  .lightense-backdrop {
    background-color: var(--lightense-backdrop);
    backdrop-filter: blur(30px);
  }
}

.lightense-wrap {
  position: relative;
  transition: transform var(--lightense-duration) var(--lightense-timing-func);
  z-index: var(--lightense-z-index);
  pointer-events: none;
}

.lightense-target {
  cursor: zoom-in;
  transition: transform var(--lightense-duration) var(--lightense-timing-func);
  pointer-events: auto;
}

.lightense-open {
  cursor: zoom-out;
}

.lightense-transitioning {
  pointer-events: none;
}`
                    )
                ),
                p.querySelector(".lightense-backdrop") ||
                  ((a.container = p.createElement("div")),
                  (a.container.className = "lightense-backdrop"),
                  p.body.appendChild(a.container)),
                (function (Y) {
                  var ln = Y.length;
                  if (ln) for (var X = 0; X < ln; X++) rn(Y[X]);
                  else rn(Y);
                })(K);
            };
          })();
          f.exports = pn;
        },
      ]),
    (L.c = d),
    (L.d = function (f, S, P) {
      L.o(f, S) || Object.defineProperty(f, S, { enumerable: !0, get: P });
    }),
    (L.r = function (f) {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(f, "__esModule", { value: !0 });
    }),
    (L.t = function (f, S) {
      if (
        (1 & S && (f = L(f)),
        8 & S || (4 & S && typeof f == "object" && f && f.__esModule))
      )
        return f;
      var P = Object.create(null);
      if (
        (L.r(P),
        Object.defineProperty(P, "default", { enumerable: !0, value: f }),
        2 & S && typeof f != "string")
      )
        for (var z in f)
          L.d(
            P,
            z,
            function (en) {
              return f[en];
            }.bind(null, z)
          );
      return P;
    }),
    (L.n = function (f) {
      var S =
        f && f.__esModule
          ? function () {
              return f.default;
            }
          : function () {
              return f;
            };
      return L.d(S, "a", S), S;
    }),
    (L.o = function (f, S) {
      return Object.prototype.hasOwnProperty.call(f, S);
    }),
    (L.p = ""),
    L((L.s = 0))
  );
  function L(f) {
    if (d[f]) return d[f].exports;
    var S = (d[f] = { i: f, l: !1, exports: {} });
    return E[f].call(S.exports, S, S.exports, L), (S.l = !0), S.exports;
  }
  var E, d;
}),
  (function (L, E) {
    typeof exports == "object" && typeof module < "u"
      ? (module.exports = E())
      : typeof define == "function" && define.amd
      ? define(E)
      : ((L = typeof globalThis < "u" ? globalThis : L || self).reframe = E());
  })(this, function () {
    "use strict";
    function L() {
      for (var E = 0, d = 0, f = arguments.length; d < f; d++)
        E += arguments[d].length;
      for (var S = Array(E), P = 0, d = 0; d < f; d++)
        for (var z = arguments[d], en = 0, pn = z.length; en < pn; en++, P++)
          S[P] = z[en];
      return S;
    }
    return function (E, d) {
      return (
        d === void 0 && (d = "js-reframe"),
        (typeof E == "string"
          ? L(document.querySelectorAll(E))
          : "length" in E
          ? L(E)
          : [E]
        ).forEach(function (f) {
          var S, P, z, en, pn, K, B, p;
          f.className.split(" ").indexOf(d) !== -1 ||
            -1 < f.style.width.indexOf("%") ||
            ((z = f.getAttribute("height") || f.offsetHeight),
            (en = f.getAttribute("width") || f.offsetWidth),
            (pn =
              ((typeof z == "string" ? parseInt(z) : z) /
                (typeof en == "string" ? parseInt(en) : en)) *
              100),
            ((K = document.createElement("div")).className = d),
            ((B = K.style).position = "relative"),
            (B.width = "100%"),
            (B.paddingTop = pn + "%"),
            ((p = f.style).position = "absolute"),
            (p.width = "100%"),
            (p.height = "100%"),
            (p.left = "0"),
            (p.top = "0"),
            (S = f.parentNode) !== null && S !== void 0 && S.insertBefore(K, f),
            (P = f.parentNode) !== null && P !== void 0 && P.removeChild(f),
            K.appendChild(f));
        })
      );
    };
  });
var tns = (function () {
  var L = window,
    E =
      L.requestAnimationFrame ||
      L.webkitRequestAnimationFrame ||
      L.mozRequestAnimationFrame ||
      L.msRequestAnimationFrame ||
      function (i) {
        return setTimeout(i, 16);
      },
    d = window,
    f =
      d.cancelAnimationFrame ||
      d.mozCancelAnimationFrame ||
      function (i) {
        clearTimeout(i);
      };
  function S() {
    for (
      var i, l, m, O = arguments[0] || {}, v = 1, Q = arguments.length;
      v < Q;
      v++
    )
      if ((i = arguments[v]) !== null)
        for (l in i) O !== (m = i[l]) && m !== void 0 && (O[l] = m);
    return O;
  }
  function P(i) {
    return 0 <= ["true", "false"].indexOf(i) ? JSON.parse(i) : i;
  }
  function z(i, l, m, O) {
    if (O)
      try {
        i.setItem(l, m);
      } catch {}
    return m;
  }
  function en() {
    var i = document,
      l = i.body;
    return l || ((l = i.createElement("body")).fake = !0), l;
  }
  var pn = document.documentElement;
  function K(i) {
    var l = "";
    return (
      i.fake &&
        ((l = pn.style.overflow),
        (i.style.background = ""),
        (i.style.overflow = pn.style.overflow = "hidden"),
        pn.appendChild(i)),
      l
    );
  }
  function B(i, l) {
    i.fake && (i.remove(), (pn.style.overflow = l), pn.offsetHeight);
  }
  function p(i, l, m, O) {
    "insertRule" in i ? i.insertRule(l + "{" + m + "}", O) : i.addRule(l, m, O);
  }
  function b(i) {
    return ("insertRule" in i ? i.cssRules : i.rules).length;
  }
  function a(i, l, m) {
    for (var O = 0, v = i.length; O < v; O++) l.call(m, i[O], O);
  }
  var q = "classList" in document.createElement("_"),
    rn = q
      ? function (i, l) {
          return i.classList.contains(l);
        }
      : function (i, l) {
          return 0 <= i.className.indexOf(l);
        },
    M = q
      ? function (i, l) {
          rn(i, l) || i.classList.add(l);
        }
      : function (i, l) {
          rn(i, l) || (i.className += " " + l);
        },
    G = q
      ? function (i, l) {
          rn(i, l) && i.classList.remove(l);
        }
      : function (i, l) {
          rn(i, l) && (i.className = i.className.replace(l, ""));
        };
  function c(i, l) {
    return i.hasAttribute(l);
  }
  function A(i, l) {
    return i.getAttribute(l);
  }
  function k(i) {
    return i.item !== void 0;
  }
  function R(i, l) {
    if (
      ((i = k(i) || i instanceof Array ? i : [i]),
      Object.prototype.toString.call(l) === "[object Object]")
    )
      for (var m = i.length; m--; ) for (var O in l) i[m].setAttribute(O, l[O]);
  }
  function Y(i, l) {
    i = k(i) || i instanceof Array ? i : [i];
    for (var m = (l = l instanceof Array ? l : [l]).length, O = i.length; O--; )
      for (var v = m; v--; ) i[O].removeAttribute(l[v]);
  }
  function ln(i) {
    for (var l = [], m = 0, O = i.length; m < O; m++) l.push(i[m]);
    return l;
  }
  function X(i, l) {
    i.style.display !== "none" && (i.style.display = "none");
  }
  function _(i, l) {
    i.style.display === "none" && (i.style.display = "");
  }
  function jn(i) {
    return window.getComputedStyle(i).display !== "none";
  }
  function Bn(i) {
    if (typeof i == "string") {
      var l = [i],
        m = i.charAt(0).toUpperCase() + i.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (qe) {
        (qe === "ms" && i !== "transform") || l.push(qe + m);
      }),
        (i = l);
    }
    for (
      var O = document.createElement("fakeelement"), v = (i.length, 0);
      v < i.length;
      v++
    ) {
      var Q = i[v];
      if (O.style[Q] !== void 0) return Q;
    }
    return !1;
  }
  function Vn(i, l) {
    var m = !1;
    return (
      /^Webkit/.test(i)
        ? (m = "webkit" + l + "End")
        : /^O/.test(i)
        ? (m = "o" + l + "End")
        : i && (m = l.toLowerCase() + "end"),
      m
    );
  }
  var Rn = !1;
  try {
    var fe = Object.defineProperty({}, "passive", {
      get: function () {
        Rn = !0;
      },
    });
    window.addEventListener("test", null, fe);
  } catch {}
  var Wn = !!Rn && { passive: !0 };
  function F(i, l, m) {
    for (var O in l) {
      var v = 0 <= ["touchstart", "touchmove"].indexOf(O) && !m && Wn;
      i.addEventListener(O, l[O], v);
    }
  }
  function $(i, l) {
    for (var m in l) {
      var O = 0 <= ["touchstart", "touchmove"].indexOf(m) && Wn;
      i.removeEventListener(m, l[m], O);
    }
  }
  function de() {
    return {
      topics: {},
      on: function (i, l) {
        (this.topics[i] = this.topics[i] || []), this.topics[i].push(l);
      },
      off: function (i, l) {
        if (this.topics[i]) {
          for (var m = 0; m < this.topics[i].length; m++)
            if (this.topics[i][m] === l) {
              this.topics[i].splice(m, 1);
              break;
            }
        }
      },
      emit: function (i, l) {
        (l.type = i),
          this.topics[i] &&
            this.topics[i].forEach(function (m) {
              m(l, i);
            });
      },
    };
  }
  Object.keys ||
    (Object.keys = function (i) {
      var l = [];
      for (var m in i) Object.prototype.hasOwnProperty.call(i, m) && l.push(m);
      return l;
    }),
    "remove" in Element.prototype ||
      (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this);
      });
  var Kn = function (i) {
    i = S(
      {
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: !1,
        autoWidth: !1,
        viewportMax: !1,
        slideBy: 1,
        center: !1,
        controls: !0,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: !1,
        prevButton: !1,
        nextButton: !1,
        nav: !0,
        navPosition: "top",
        navContainer: !1,
        navAsThumbnails: !1,
        arrowKeys: !1,
        speed: 300,
        autoplay: !1,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: !1,
        autoplayButton: !1,
        autoplayButtonOutput: !0,
        autoplayResetOnVisibility: !0,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: !1,
        loop: !0,
        rewind: !1,
        autoHeight: !1,
        responsive: !1,
        lazyload: !1,
        lazyloadSelector: ".tns-lazy-img",
        touch: !0,
        mouseDrag: !1,
        swipeAngle: 15,
        nested: !1,
        preventActionWhenRunning: !1,
        preventScrollOnTouch: !1,
        freezable: !0,
        onInit: !1,
        useLocalStorage: !0,
        nonce: !1,
      },
      i || {}
    );
    var l = document,
      m = window,
      O = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
      v = {},
      Q = i.useLocalStorage;
    if (Q) {
      var qe = navigator.userAgent,
        je = new Date();
      try {
        (v = m.localStorage)
          ? (v.setItem(je, je), (Q = v.getItem(je) == je), v.removeItem(je))
          : (Q = !1),
          Q || (v = {});
      } catch {
        Q = !1;
      }
      Q &&
        (v.tnsApp &&
          v.tnsApp !== qe &&
          [
            "tC",
            "tPL",
            "tMQ",
            "tTf",
            "t3D",
            "tTDu",
            "tTDe",
            "tADu",
            "tADe",
            "tTE",
            "tAE",
          ].forEach(function (n) {
            v.removeItem(n);
          }),
        (localStorage.tnsApp = qe));
    }
    var pe = v.tC
        ? P(v.tC)
        : z(
            v,
            "tC",
            (function () {
              var n = document,
                e = en(),
                r = K(e),
                t = n.createElement("div"),
                o = !1;
              e.appendChild(t);
              try {
                for (
                  var s,
                    y = "(10px * 10)",
                    N = ["calc" + y, "-moz-calc" + y, "-webkit-calc" + y],
                    an = 0;
                  an < 3;
                  an++
                )
                  if (
                    ((s = N[an]), (t.style.width = s), t.offsetWidth === 100)
                  ) {
                    o = s.replace(y, "");
                    break;
                  }
              } catch {}
              return e.fake ? B(e, r) : t.remove(), o;
            })(),
            Q
          ),
      Ar = v.tPL
        ? P(v.tPL)
        : z(
            v,
            "tPL",
            (function () {
              var n,
                e = document,
                r = en(),
                t = K(r),
                o = e.createElement("div"),
                s = e.createElement("div"),
                y = "";
              (o.className = "tns-t-subp2"), (s.className = "tns-t-ct");
              for (var N = 0; N < 70; N++) y += "<div></div>";
              return (
                (s.innerHTML = y),
                o.appendChild(s),
                r.appendChild(o),
                (n =
                  Math.abs(
                    o.getBoundingClientRect().left -
                      s.children[67].getBoundingClientRect().left
                  ) < 2),
                r.fake ? B(r, t) : o.remove(),
                n
              );
            })(),
            Q
          ),
      Oe = v.tMQ
        ? P(v.tMQ)
        : z(
            v,
            "tMQ",
            (function () {
              if (window.matchMedia || window.msMatchMedia) return !0;
              var n,
                e = document,
                r = en(),
                t = K(r),
                o = e.createElement("div"),
                s = e.createElement("style"),
                y =
                  "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
              return (
                (s.type = "text/css"),
                (o.className = "tns-mq-test"),
                r.appendChild(s),
                r.appendChild(o),
                s.styleSheet
                  ? (s.styleSheet.cssText = y)
                  : s.appendChild(e.createTextNode(y)),
                (n = window.getComputedStyle
                  ? window.getComputedStyle(o).position
                  : o.currentStyle.position),
                r.fake ? B(r, t) : o.remove(),
                n === "absolute"
              );
            })(),
            Q
          ),
      We = v.tTf ? P(v.tTf) : z(v, "tTf", Bn("transform"), Q),
      At = v.t3D
        ? P(v.t3D)
        : z(
            v,
            "t3D",
            (function (n) {
              if (!n || !window.getComputedStyle) return !1;
              var e,
                r = document,
                t = en(),
                o = K(t),
                s = r.createElement("p"),
                y =
                  9 < n.length ? "-" + n.slice(0, -9).toLowerCase() + "-" : "";
              return (
                (y += "transform"),
                t.insertBefore(s, null),
                (s.style[n] = "translate3d(1px,1px,1px)"),
                (e = window.getComputedStyle(s).getPropertyValue(y)),
                t.fake ? B(t, o) : s.remove(),
                e !== void 0 && 0 < e.length && e !== "none"
              );
            })(We),
            Q
          ),
      yn = v.tTDu ? P(v.tTDu) : z(v, "tTDu", Bn("transitionDuration"), Q),
      fi = v.tTDe ? P(v.tTDe) : z(v, "tTDe", Bn("transitionDelay"), Q),
      di = v.tADu ? P(v.tADu) : z(v, "tADu", Bn("animationDuration"), Q),
      Zi = v.tADe ? P(v.tADe) : z(v, "tADe", Bn("animationDelay"), Q),
      ve = v.tTE ? P(v.tTE) : z(v, "tTE", Vn(yn, "Transition"), Q),
      Dr = v.tAE ? P(v.tAE) : z(v, "tAE", Vn(di, "Animation"), Q),
      Lr = m.console && typeof m.console.warn == "function",
      Fi = [
        "container",
        "controlsContainer",
        "prevButton",
        "nextButton",
        "navContainer",
        "autoplayButton",
      ],
      zr = {};
    if (
      (Fi.forEach(function (n) {
        if (typeof i[n] == "string") {
          var e = i[n],
            r = l.querySelector(e);
          if (((zr[n] = e), !r || !r.nodeName))
            return void (Lr && console.warn("Can't find", i[n]));
          i[n] = r;
        }
      }),
      !(i.container.children.length < 1))
    ) {
      var I = i.responsive,
        Be = i.nested,
        h = i.mode === "carousel";
      if (I) {
        0 in I && ((i = S(i, I[0])), delete I[0]);
        var Ji = {};
        for (var Rr in I) {
          var Xe = I[Rr];
          (Xe = typeof Xe == "number" ? { items: Xe } : Xe), (Ji[Rr] = Xe);
        }
        (I = Ji), (Ji = null);
      }
      if (
        (h ||
          (function n(e) {
            for (var r in e)
              h ||
                (r === "slideBy" && (e[r] = "page"),
                r === "edgePadding" && (e[r] = !1),
                r === "autoHeight" && (e[r] = !1)),
                r === "responsive" && n(e[r]);
          })(i),
        !h)
      ) {
        (i.axis = "horizontal"), (i.slideBy = "page"), (i.edgePadding = !1);
        var Hn = i.animateIn,
          pi = i.animateOut,
          Ki = i.animateDelay,
          Xn = i.animateNormal;
      }
      var _n,
        _e,
        Z = i.axis === "horizontal",
        wn = l.createElement("div"),
        Tn = l.createElement("div"),
        x = i.container,
        Gi = x.parentNode,
        Pr = x.outerHTML,
        W = x.children,
        w = W.length,
        vi = Kr(),
        Ue = !1;
      I && tt(), h && (x.className += " tns-vpfix");
      var sn,
        $i,
        Vi,
        Hi,
        mi,
        Ye,
        Qi,
        Ii,
        me,
        C = i.autoWidth,
        g = T("fixedWidth"),
        tn = T("edgePadding"),
        j = T("gutter"),
        fn = Gr(),
        vn = T("center"),
        D = C ? 1 : Math.floor(T("items")),
        Me = T("slideBy"),
        nr = i.viewportMax || i.fixedWidthViewportWidth,
        Qn = T("arrowKeys"),
        An = T("speed"),
        Ze = i.rewind,
        mn = !Ze && i.loop,
        Cn = T("autoHeight"),
        Un = T("controls"),
        In = T("controlsText"),
        Yn = T("nav"),
        ne = T("touch"),
        ee = T("mouseDrag"),
        bn = T("autoplay"),
        er = T("autoplayTimeout"),
        ie = T("autoplayText"),
        re = T("autoplayHoverPause"),
        te = T("autoplayResetOnVisibility"),
        J =
          ((Qi = null),
          (Ii = T("nonce")),
          (me = document.createElement("style")),
          Qi && me.setAttribute("media", Qi),
          Ii && me.setAttribute("nonce", Ii),
          document.querySelector("head").appendChild(me),
          me.sheet ? me.sheet : me.styleSheet),
        Fe = i.lazyload,
        Dt = i.lazyloadSelector,
        ke = [],
        hn = mn
          ? ((mi = (function () {
              {
                if (C || (g && !nr)) return w - 1;
                var n = g ? "fixedWidth" : "items",
                  e = [];
                if (((g || i[n] < w) && e.push(i[n]), I))
                  for (var r in I) {
                    var t = I[r][n];
                    t && (g || t < w) && e.push(t);
                  }
                return (
                  e.length || e.push(0),
                  Math.ceil(
                    g ? nr / Math.min.apply(null, e) : Math.max.apply(null, e)
                  )
                );
              }
            })()),
            (Ye = h ? Math.ceil((5 * mi - w) / 2) : 4 * mi - w),
            (Ye = Math.max(mi, Ye)),
            Gn("edgePadding") ? Ye + 1 : Ye)
          : 0,
        U = h ? w + 2 * hn : w + hn,
        Nr = !((!g && !C) || mn),
        Ae = g ? yr() : null,
        ir = !h || !mn,
        he = Z ? "left" : "top",
        oe = "",
        De = "",
        Je = g
          ? function () {
              return vn && !mn ? w - 1 : Math.ceil(-Ae / (g + j));
            }
          : C
          ? function () {
              for (var n = 0; n < U; n++) if (sn[n] >= -Ae) return n;
            }
          : function () {
              return vn && h && !mn
                ? w - 1
                : mn || h
                ? Math.max(0, U - Math.ceil(D))
                : U - 1;
            },
        u = Fr(T("startIndex")),
        ae = u,
        Zn = (Zr(), 0),
        Mn = C ? null : Je(),
        hi = i.preventActionWhenRunning,
        gi = i.swipeAngle,
        Fn = !gi || "?",
        le = !1,
        rr = i.onInit,
        dn = new de(),
        se = " tns-slider tns-" + i.mode,
        nn =
          x.id ||
          ((Hi = window.tnsId),
          (window.tnsId = Hi ? Hi + 1 : 1),
          "tns" + window.tnsId),
        Sn = T("disable"),
        Ke = !1,
        yi = i.freezable,
        Pn = !(!yi || C) && dr(),
        Ge = !1,
        $e = {
          click: ue,
          keydown: function (n) {
            n = $n(n);
            var e = [O.LEFT, O.RIGHT].indexOf(n.keyCode);
            0 <= e &&
              (e === 0 ? V.disabled || ue(n, -1) : H.disabled || ue(n, 1));
          },
        },
        tr = {
          click: function (n) {
            if (le) {
              if (hi) return;
              Jn();
            }
            for (var e = Pe((n = $n(n))); e !== gn && !c(e, "data-nav"); )
              e = e.parentNode;
            if (c(e, "data-nav")) {
              var r = (ye = Number(A(e, "data-nav"))),
                t = g || C ? (r * w) / Ln : r * D,
                o = ei ? r : Math.min(Math.ceil(t), w - 1);
              si(o, n), kn === r && (On && ui(), (ye = -1));
            }
          },
          keydown: function (n) {
            n = $n(n);
            var e = l.activeElement;
            if (!!c(e, "data-nav")) {
              var r = [O.LEFT, O.RIGHT, O.ENTER, O.SPACE].indexOf(n.keyCode),
                t = Number(A(e, "data-nav"));
              0 <= r &&
                (r === 0
                  ? 0 < t && Et(Dn[t - 1])
                  : r === 1
                  ? t < Ln - 1 && Et(Dn[t + 1])
                  : si((ye = t), n));
            }
          },
        },
        Ve = {
          mouseover: function () {
            On && (Xi(), (Ci = !0));
          },
          mouseout: function () {
            Ci && (Wi(), (Ci = !1));
          },
        },
        He = {
          visibilitychange: function () {
            l.hidden ? On && (Xi(), (Si = !0)) : Si && (Wi(), (Si = !1));
          },
        },
        Qe = {
          keydown: function (n) {
            n = $n(n);
            var e = [O.LEFT, O.RIGHT].indexOf(n.keyCode);
            0 <= e && ue(n, e === 0 ? -1 : 1);
          },
        },
        Ie = { touchstart: Ot, touchmove: Bt, touchend: Ui, touchcancel: Ui },
        ni = { mousedown: Ot, mousemove: Bt, mouseup: Ui, mouseleave: Ui },
        bi = Gn("controls"),
        or = Gn("nav"),
        ei = !!C || i.navAsThumbnails,
        ar = Gn("autoplay"),
        qr = Gn("touch"),
        jr = Gn("mouseDrag"),
        lr = "tns-slide-active",
        Wr = "tns-slide-cloned",
        xi = "tns-complete",
        wi = {
          load: function (n) {
            ct(Pe(n));
          },
          error: function (n) {
            (e = Pe(n)), M(e, "failed"), mr(e);
            var e;
          },
        },
        ii = i.preventScrollOnTouch === "force";
      if (bi)
        var ri,
          ti,
          un = i.controlsContainer,
          Xr = i.controlsContainer ? i.controlsContainer.outerHTML : "",
          V = i.prevButton,
          H = i.nextButton,
          Lt = i.prevButton ? i.prevButton.outerHTML : "",
          zt = i.nextButton ? i.nextButton.outerHTML : "";
      if (or)
        var Dn,
          gn = i.navContainer,
          _r = i.navContainer ? i.navContainer.outerHTML : "",
          Ln = C ? w : Mt(),
          ge = 0,
          ye = -1,
          kn = Jr(),
          Le = kn,
          Ti = "tns-nav-active",
          ze = "Carousel Page ",
          sr = " (Current Slide)";
      if (ar)
        var Ei,
          On,
          Ci,
          Re,
          Si,
          Ur = i.autoplayDirection === "forward" ? 1 : -1,
          on = i.autoplayButton,
          Yr = i.autoplayButton ? i.autoplayButton.outerHTML : "",
          oi = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (qr || jr)
        var Oi,
          zn,
          be = {},
          Nn = {},
          xe = !1,
          ur = Z
            ? function (n, e) {
                return n.x - e.x;
              }
            : function (n, e) {
                return n.y - e.y;
              };
      C || Bi(Sn || Pn),
        We &&
          ((he = We),
          (oe = "translate"),
          At
            ? ((oe += Z ? "3d(" : "3d(0px, "),
              (De = Z ? ", 0px, 0px)" : ", 0px)"))
            : ((oe += Z ? "X(" : "Y("), (De = ")"))),
        h && (x.className = x.className.replace("tns-vpfix", "")),
        (function () {
          if (
            (Gn("gutter"),
            (wn.className = "tns-outer"),
            (Tn.className = "tns-inner"),
            (wn.id = nn + "-ow"),
            (Tn.id = nn + "-iw"),
            x.id === "" && (x.id = nn),
            (se += Ar || C ? " tns-subpixel" : " tns-no-subpixel"),
            (se += pe ? " tns-calc" : " tns-no-calc"),
            C && (se += " tns-autowidth"),
            (se += " tns-" + i.axis),
            (x.className += se),
            h
              ? (((_n = l.createElement("div")).id = nn + "-mw"),
                (_n.className = "tns-ovh"),
                wn.appendChild(_n),
                _n.appendChild(Tn))
              : wn.appendChild(Tn),
            Cn)
          ) {
            var n = _n || Tn;
            n.className += " tns-ah";
          }
          if (
            (Gi.insertBefore(wn, x),
            Tn.appendChild(x),
            a(W, function (N, an) {
              M(N, "tns-item"),
                N.id || (N.id = nn + "-item" + an),
                !h && Xn && M(N, Xn),
                R(N, { "aria-hidden": "true", tabindex: "-1" });
            }),
            hn)
          ) {
            for (
              var e = l.createDocumentFragment(),
                r = l.createDocumentFragment(),
                t = hn;
              t--;

            ) {
              var o = t % w,
                s = W[o].cloneNode(!0);
              if ((M(s, Wr), Y(s, "id"), r.insertBefore(s, r.firstChild), h)) {
                var y = W[w - 1 - o].cloneNode(!0);
                M(y, Wr), Y(y, "id"), e.appendChild(y);
              }
            }
            x.insertBefore(e, x.firstChild), x.appendChild(r), (W = x.children);
          }
        })(),
        (function () {
          if (!h)
            for (var n = u, e = u + Math.min(w, D); n < e; n++) {
              var r = W[n];
              (r.style.left = (100 * (n - u)) / D + "%"), M(r, Hn), G(r, Xn);
            }
          if (
            (Z &&
              (Ar || C
                ? (p(
                    J,
                    "#" + nn + " > .tns-item",
                    "font-size:" + m.getComputedStyle(W[0]).fontSize + ";",
                    b(J)
                  ),
                  p(J, "#" + nn, "font-size:0;", b(J)))
                : h &&
                  a(W, function (Sr, Or) {
                    var ci;
                    Sr.style.marginLeft =
                      ((ci = Or),
                      pe
                        ? pe + "(" + 100 * ci + "% / " + U + ")"
                        : (100 * ci) / U + "%");
                  })),
            Oe)
          ) {
            if (yn) {
              var t = _n && i.autoHeight ? we(i.speed) : "";
              p(J, "#" + nn + "-mw", t, b(J));
            }
            (t = ki(
              i.edgePadding,
              i.gutter,
              i.fixedWidth,
              i.speed,
              i.autoHeight
            )),
              p(J, "#" + nn + "-iw", t, b(J)),
              h &&
                ((t =
                  Z && !C
                    ? "width:" + Ai(i.fixedWidth, i.gutter, i.items) + ";"
                    : ""),
                yn && (t += we(An)),
                p(J, "#" + nn, t, b(J))),
              (t = Z && !C ? Di(i.fixedWidth, i.gutter, i.items) : ""),
              i.gutter && (t += Li(i.gutter)),
              h || (yn && (t += we(An)), di && (t += Vr(An))),
              t && p(J, "#" + nn + " > .tns-item", t, b(J));
          } else {
            h && Cn && (_n.style[yn] = An / 1e3 + "s"),
              (Tn.style.cssText = ki(tn, j, g, Cn)),
              h && Z && !C && (x.style.width = Ai(g, j, D));
            var t = Z && !C ? Di(g, j, D) : "";
            j && (t += Li(j)), t && p(J, "#" + nn + " > .tns-item", t, b(J));
          }
          if (I && Oe)
            for (var o in I) {
              o = parseInt(o);
              var s = I[o],
                t = "",
                y = "",
                N = "",
                an = "",
                cn = "",
                Ee = C ? null : T("items", o),
                Ce = T("fixedWidth", o),
                Se = T("speed", o),
                Er = T("edgePadding", o),
                Cr = T("autoHeight", o),
                Ne = T("gutter", o);
              yn &&
                _n &&
                T("autoHeight", o) &&
                "speed" in s &&
                (y = "#" + nn + "-mw{" + we(Se) + "}"),
                ("edgePadding" in s || "gutter" in s) &&
                  (N = "#" + nn + "-iw{" + ki(Er, Ne, Ce, Se, Cr) + "}"),
                h &&
                  Z &&
                  !C &&
                  ("fixedWidth" in s || "items" in s || (g && "gutter" in s)) &&
                  (an = "width:" + Ai(Ce, Ne, Ee) + ";"),
                yn && "speed" in s && (an += we(Se)),
                an && (an = "#" + nn + "{" + an + "}"),
                ("fixedWidth" in s ||
                  (g && "gutter" in s) ||
                  (!h && "items" in s)) &&
                  (cn += Di(Ce, Ne, Ee)),
                "gutter" in s && (cn += Li(Ne)),
                !h &&
                  "speed" in s &&
                  (yn && (cn += we(Se)), di && (cn += Vr(Se))),
                cn && (cn = "#" + nn + " > .tns-item{" + cn + "}"),
                (t = y + N + an + cn) &&
                  J.insertRule(
                    "@media (min-width: " + o / 16 + "em) {" + t + "}",
                    J.cssRules.length
                  );
            }
        })(),
        Hr();
      var cr = mn
          ? h
            ? function () {
                var n = Zn,
                  e = Mn;
                (n += Me),
                  (e -= Me),
                  tn
                    ? ((n += 1), (e -= 1))
                    : g && (fn + j) % (g + j) && (e -= 1),
                  hn && (e < u ? (u -= w) : u < n && (u += w));
              }
            : function () {
                if (Mn < u) for (; Zn + w <= u; ) u -= w;
                else if (u < Zn) for (; u <= Mn - w; ) u += w;
              }
          : function () {
              u = Math.max(Zn, Math.min(Mn, u));
            },
        Rt = h
          ? function () {
              var n, e, r, t, o, s, y, N, an, cn, Ee;
              qi(x, ""),
                yn || !An
                  ? (br(), (An && jn(x)) || Jn())
                  : ((n = x),
                    (e = he),
                    (r = oe),
                    (t = De),
                    (o = ji()),
                    (s = An),
                    (y = Jn),
                    (N = Math.min(s, 10)),
                    (an = 0 <= o.indexOf("%") ? "%" : "px"),
                    (o = o.replace(an, "")),
                    (cn = Number(
                      n.style[e].replace(r, "").replace(t, "").replace(an, "")
                    )),
                    (Ee = ((o - cn) / s) * N),
                    setTimeout(function Ce() {
                      (s -= N),
                        (cn += Ee),
                        (n.style[e] = r + cn + an + t),
                        0 < s ? setTimeout(Ce, N) : y();
                    }, N)),
                Z || wr();
            }
          : function () {
              ke = [];
              var n = {};
              (n[ve] = n[Dr] = Jn),
                $(W[ae], n),
                F(W[u], n),
                bt(ae, Hn, pi, !0),
                bt(u, Xn, Hn),
                (ve && Dr && An && jn(x)) || Jn();
            };
      return {
        version: "2.9.3",
        getInfo: xn,
        events: dn,
        goTo: si,
        play: function () {
          bn && !On && (_i(), (Re = !1));
        },
        pause: function () {
          On && (ui(), (Re = !0));
        },
        isOn: Ue,
        updateSliderHeight: pt,
        refresh: Hr,
        destroy: function () {
          if (
            ((J.disabled = !0),
            J.ownerNode && J.ownerNode.remove(),
            $(m, { resize: it }),
            Qn && $(l, Qe),
            un && $(un, $e),
            gn && $(gn, tr),
            $(x, Ve),
            $(x, He),
            on && $(on, { click: Tt }),
            bn && clearInterval(Ei),
            h && ve)
          ) {
            var n = {};
            (n[ve] = Jn), $(x, n);
          }
          ne && $(x, Ie), ee && $(x, ni);
          var e = [Pr, Xr, Lt, zt, _r, Yr];
          for (var r in (Fi.forEach(function (t, o) {
            var s = t === "container" ? wn : i[t];
            if (typeof s == "object" && s) {
              var y = !!s.previousElementSibling && s.previousElementSibling,
                N = s.parentNode;
              (s.outerHTML = e[o]),
                (i[t] = y ? y.nextElementSibling : N.firstElementChild);
            }
          }),
          (Fi =
            Hn =
            pi =
            Ki =
            Xn =
            Z =
            wn =
            Tn =
            x =
            Gi =
            Pr =
            W =
            w =
            _e =
            vi =
            C =
            g =
            tn =
            j =
            fn =
            D =
            Me =
            nr =
            Qn =
            An =
            Ze =
            mn =
            Cn =
            J =
            Fe =
            sn =
            ke =
            hn =
            U =
            Nr =
            Ae =
            ir =
            he =
            oe =
            De =
            Je =
            u =
            ae =
            Zn =
            Mn =
            gi =
            Fn =
            le =
            rr =
            dn =
            se =
            nn =
            Sn =
            Ke =
            yi =
            Pn =
            Ge =
            $e =
            tr =
            Ve =
            He =
            Qe =
            Ie =
            ni =
            bi =
            or =
            ei =
            ar =
            qr =
            jr =
            lr =
            xi =
            wi =
            $i =
            Un =
            In =
            un =
            Xr =
            V =
            H =
            ri =
            ti =
            Yn =
            gn =
            _r =
            Dn =
            Ln =
            ge =
            ye =
            kn =
            Le =
            Ti =
            ze =
            sr =
            bn =
            er =
            Ur =
            ie =
            re =
            on =
            Yr =
            te =
            oi =
            Ei =
            On =
            Ci =
            Re =
            Si =
            be =
            Nn =
            Oi =
            xe =
            zn =
            ur =
            ne =
            ee =
              null),
          this))
            r !== "rebuild" && (this[r] = null);
          Ue = !1;
        },
        rebuild: function () {
          return Kn(S(i, zr));
        },
      };
    }
    function Bi(n) {
      n && (Un = Yn = ne = ee = Qn = bn = re = te = !1);
    }
    function Zr() {
      for (var n = h ? u - hn : u; n < 0; ) n += w;
      return (n % w) + 1;
    }
    function Fr(n) {
      return (
        (n = n ? Math.max(0, Math.min(mn ? w - 1 : w - D, n)) : 0),
        h ? n + hn : n
      );
    }
    function Mi(n) {
      for (n == null && (n = u), h && (n -= hn); n < 0; ) n += w;
      return Math.floor(n % w);
    }
    function Jr() {
      var n,
        e = Mi();
      return (
        (n = ei
          ? e
          : g || C
          ? Math.ceil(((e + 1) * Ln) / w - 1)
          : Math.floor(e / D)),
        !mn && h && u === Mn && (n = Ln - 1),
        n
      );
    }
    function Kr() {
      return (
        m.innerWidth || l.documentElement.clientWidth || l.body.clientWidth
      );
    }
    function fr(n) {
      return n === "top" ? "afterbegin" : "beforeend";
    }
    function Gr() {
      var n = tn ? 2 * tn - j : 0;
      return (
        (function e(r) {
          if (r != null) {
            var t,
              o,
              s = l.createElement("div");
            return (
              r.appendChild(s),
              (o = (t = s.getBoundingClientRect()).right - t.left),
              s.remove(),
              o || e(r.parentNode)
            );
          }
        })(Gi) - n
      );
    }
    function Gn(n) {
      if (i[n]) return !0;
      if (I) {
        for (var e in I) if (I[e][n]) return !0;
      }
      return !1;
    }
    function T(n, e) {
      if ((e == null && (e = vi), n === "items" && g))
        return Math.floor((fn + j) / (g + j)) || 1;
      var r = i[n];
      if (I) for (var t in I) e >= parseInt(t) && n in I[t] && (r = I[t][n]);
      return (
        n === "slideBy" && r === "page" && (r = T("items")),
        h || (n !== "slideBy" && n !== "items") || (r = Math.floor(r)),
        r
      );
    }
    function ki(n, e, r, t, o) {
      var s = "";
      if (n !== void 0) {
        var y = n;
        e && (y -= e),
          (s = Z
            ? "margin: 0 " + y + "px 0 " + n + "px;"
            : "margin: " + n + "px 0 " + y + "px 0;");
      } else if (e && !r) {
        var N = "-" + e + "px";
        s = "margin: 0 " + (Z ? N + " 0 0" : "0 " + N + " 0") + ";";
      }
      return !h && o && yn && t && (s += we(t)), s;
    }
    function Ai(n, e, r) {
      return n
        ? (n + e) * U + "px"
        : pe
        ? pe + "(" + 100 * U + "% / " + r + ")"
        : (100 * U) / r + "%";
    }
    function Di(n, e, r) {
      var t;
      if (n) t = n + e + "px";
      else {
        h || (r = Math.floor(r));
        var o = h ? U : r;
        t = pe ? pe + "(100% / " + o + ")" : 100 / o + "%";
      }
      return (t = "width:" + t), Be !== "inner" ? t + ";" : t + " !important;";
    }
    function Li(n) {
      var e = "";
      return (
        n !== !1 &&
          (e =
            (Z ? "padding-" : "margin-") +
            (Z ? "right" : "bottom") +
            ": " +
            n +
            "px;"),
        e
      );
    }
    function $r(n, e) {
      var r = n.substring(0, n.length - e).toLowerCase();
      return r && (r = "-" + r + "-"), r;
    }
    function we(n) {
      return $r(yn, 18) + "transition-duration:" + n / 1e3 + "s;";
    }
    function Vr(n) {
      return $r(di, 17) + "animation-duration:" + n / 1e3 + "s;";
    }
    function Hr() {
      if (Gn("autoHeight") || C || !Z) {
        var n = x.querySelectorAll("img");
        a(n, function (e) {
          var r = e.src;
          Fe ||
            (r && r.indexOf("data:image") < 0
              ? ((e.src = ""), F(e, wi), M(e, "loading"), (e.src = r))
              : ct(e));
        }),
          E(function () {
            Pi(ln(n), function () {
              $i = !0;
            });
          }),
          Gn("autoHeight") && (n = hr(u, Math.min(u + D - 1, U - 1))),
          Fe
            ? Qr()
            : E(function () {
                Pi(ln(n), Qr);
              });
      } else h && li(), nt(), et();
    }
    function Qr() {
      if (C && 1 < w) {
        var n = mn ? u : w - 1;
        (function e() {
          var r = W[n].getBoundingClientRect().left,
            t = W[n - 1].getBoundingClientRect().right;
          Math.abs(r - t) <= 1
            ? Ir()
            : setTimeout(function () {
                e();
              }, 16);
        })();
      } else Ir();
    }
    function Ir() {
      (Z && !C) ||
        (vt(),
        C ? ((Ae = yr()), yi && (Pn = dr()), (Mn = Je()), Bi(Sn || Pn)) : wr()),
        h && li(),
        nt(),
        et();
    }
    function nt() {
      if (
        (gr(),
        wn.insertAdjacentHTML(
          "afterbegin",
          '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
            ut() +
            "</span>  of " +
            w +
            "</div>"
        ),
        (Vi = wn.querySelector(".tns-liveregion .current")),
        ar)
      ) {
        var n = bn ? "stop" : "start";
        on
          ? R(on, { "data-action": n })
          : i.autoplayButtonOutput &&
            (wn.insertAdjacentHTML(
              fr(i.autoplayPosition),
              '<button type="button" data-action="' +
                n +
                '">' +
                oi[0] +
                n +
                oi[1] +
                ie[0] +
                "</button>"
            ),
            (on = wn.querySelector("[data-action]"))),
          on && F(on, { click: Tt }),
          bn && (_i(), re && F(x, Ve), te && F(x, He));
      }
      if (or) {
        if (gn)
          R(gn, { "aria-label": "Carousel Pagination" }),
            a((Dn = gn.children), function (y, N) {
              R(y, {
                "data-nav": N,
                tabindex: "-1",
                "aria-label": ze + (N + 1),
                "aria-controls": nn,
              });
            });
        else {
          for (
            var e = "", r = ei ? "" : 'style="display:none"', t = 0;
            t < w;
            t++
          )
            e +=
              '<button type="button" data-nav="' +
              t +
              '" tabindex="-1" aria-controls="' +
              nn +
              '" ' +
              r +
              ' aria-label="' +
              ze +
              (t + 1) +
              '"></button>';
          (e =
            '<div class="tns-nav" aria-label="Carousel Pagination">' +
            e +
            "</div>"),
            wn.insertAdjacentHTML(fr(i.navPosition), e),
            (gn = wn.querySelector(".tns-nav")),
            (Dn = gn.children);
        }
        if ((Tr(), yn)) {
          var o = yn.substring(0, yn.length - 18).toLowerCase(),
            s = "transition: all " + An / 1e3 + "s";
          o && (s = "-" + o + "-" + s),
            p(J, "[aria-controls^=" + nn + "-item]", s, b(J));
        }
        R(Dn[kn], { "aria-label": ze + (kn + 1) + sr }),
          Y(Dn[kn], "tabindex"),
          M(Dn[kn], Ti),
          F(gn, tr);
      }
      bi &&
        (un ||
          (V && H) ||
          (wn.insertAdjacentHTML(
            fr(i.controlsPosition),
            '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
              nn +
              '">' +
              In[0] +
              '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
              nn +
              '">' +
              In[1] +
              "</button></div>"
          ),
          (un = wn.querySelector(".tns-controls"))),
        (V && H) || ((V = un.children[0]), (H = un.children[1])),
        i.controlsContainer &&
          R(un, { "aria-label": "Carousel Navigation", tabindex: "0" }),
        (i.controlsContainer || (i.prevButton && i.nextButton)) &&
          R([V, H], { "aria-controls": nn, tabindex: "-1" }),
        (i.controlsContainer || (i.prevButton && i.nextButton)) &&
          (R(V, { "data-controls": "prev" }),
          R(H, { "data-controls": "next" })),
        (ri = ht(V)),
        (ti = ht(H)),
        yt(),
        un ? F(un, $e) : (F(V, $e), F(H, $e))),
        pr();
    }
    function et() {
      if (h && ve) {
        var n = {};
        (n[ve] = Jn), F(x, n);
      }
      ne && F(x, Ie, i.preventScrollOnTouch),
        ee && F(x, ni),
        Qn && F(l, Qe),
        Be === "inner"
          ? dn.on("outerResized", function () {
              rt(), dn.emit("innerLoaded", xn());
            })
          : (I || g || C || Cn || !Z) && F(m, { resize: it }),
        Cn && (Be === "outer" ? dn.on("innerLoaded", Ri) : Sn || Ri()),
        vr(),
        Sn ? lt() : Pn && at(),
        dn.on("indexChanged", ft),
        Be === "inner" && dn.emit("innerLoaded", xn()),
        typeof rr == "function" && rr(xn()),
        (Ue = !0);
    }
    function it(n) {
      E(function () {
        rt($n(n));
      });
    }
    function rt(n) {
      if (Ue) {
        Be === "outer" && dn.emit("outerResized", xn(n)), (vi = Kr());
        var e,
          r = _e,
          t = !1;
        I && (tt(), (e = r !== _e) && dn.emit("newBreakpointStart", xn(n)));
        var o,
          s,
          y,
          N,
          an = D,
          cn = Sn,
          Ee = Pn,
          Ce = Qn,
          Se = Un,
          Er = Yn,
          Cr = ne,
          Ne = ee,
          Sr = bn,
          Or = re,
          ci = te,
          Pt = u;
        if (e) {
          var Nt = g,
            qt = Cn,
            jt = In,
            Wt = vn,
            Br = ie;
          if (!Oe)
            var Xt = j,
              _t = tn;
        }
        if (
          ((Qn = T("arrowKeys")),
          (Un = T("controls")),
          (Yn = T("nav")),
          (ne = T("touch")),
          (vn = T("center")),
          (ee = T("mouseDrag")),
          (bn = T("autoplay")),
          (re = T("autoplayHoverPause")),
          (te = T("autoplayResetOnVisibility")),
          e &&
            ((Sn = T("disable")),
            (g = T("fixedWidth")),
            (An = T("speed")),
            (Cn = T("autoHeight")),
            (In = T("controlsText")),
            (ie = T("autoplayText")),
            (er = T("autoplayTimeout")),
            Oe || ((tn = T("edgePadding")), (j = T("gutter")))),
          Bi(Sn),
          (fn = Gr()),
          (Z && !C) || Sn || (vt(), Z || (wr(), (t = !0))),
          (g || C) && ((Ae = yr()), (Mn = Je())),
          (e || g) &&
            ((D = T("items")),
            (Me = T("slideBy")),
            (s = D !== an) && (g || C || (Mn = Je()), cr())),
          e &&
            Sn !== cn &&
            (Sn
              ? lt()
              : (function () {
                  if (!!Ke) {
                    if (((J.disabled = !1), (x.className += se), li(), mn))
                      for (var ce = hn; ce--; ) h && _(W[ce]), _(W[U - ce - 1]);
                    if (!h)
                      for (var En = u, qn = u + w; En < qn; En++) {
                        var Yi = W[En],
                          Yt = En < u + D ? Hn : Xn;
                        (Yi.style.left = (100 * (En - u)) / D + "%"), M(Yi, Yt);
                      }
                    ot(), (Ke = !1);
                  }
                })()),
          yi &&
            (e || g || C) &&
            (Pn = dr()) !== Ee &&
            (Pn
              ? (br(ji(Fr(0))), at())
              : ((function () {
                  if (!!Ge) {
                    if ((tn && Oe && (Tn.style.margin = ""), hn))
                      for (var ce = "tns-transparent", En = hn; En--; )
                        h && G(W[En], ce), G(W[U - En - 1], ce);
                    ot(), (Ge = !1);
                  }
                })(),
                (t = !0))),
          Bi(Sn || Pn),
          bn || (re = te = !1),
          Qn !== Ce && (Qn ? F(l, Qe) : $(l, Qe)),
          Un !== Se &&
            (Un
              ? un
                ? _(un)
                : (V && _(V), H && _(H))
              : un
              ? X(un)
              : (V && X(V), H && X(H))),
          Yn !== Er && (Yn ? (_(gn), Tr()) : X(gn)),
          ne !== Cr && (ne ? F(x, Ie, i.preventScrollOnTouch) : $(x, Ie)),
          ee !== Ne && (ee ? F(x, ni) : $(x, ni)),
          bn !== Sr &&
            (bn ? (on && _(on), On || Re || _i()) : (on && X(on), On && ui())),
          re !== Or && (re ? F(x, Ve) : $(x, Ve)),
          te !== ci && (te ? F(l, He) : $(l, He)),
          e)
        ) {
          if (
            ((g === Nt && vn === Wt) || (t = !0),
            Cn !== qt && (Cn || (Tn.style.height = "")),
            Un && In !== jt && ((V.innerHTML = In[0]), (H.innerHTML = In[1])),
            on && ie !== Br)
          ) {
            var Mr = bn ? 1 : 0,
              kr = on.innerHTML,
              kt = kr.length - Br[Mr].length;
            kr.substring(kt) === Br[Mr] &&
              (on.innerHTML = kr.substring(0, kt) + ie[Mr]);
          }
        } else vn && (g || C) && (t = !0);
        if (
          ((s || (g && !C)) && ((Ln = Mt()), Tr()),
          (o = u !== Pt)
            ? (dn.emit("indexChanged", xn()), (t = !0))
            : s
            ? o || ft()
            : (g || C) && (vr(), gr(), st()),
          s &&
            !h &&
            (function () {
              for (var ce = u + Math.min(w, D), En = U; En--; ) {
                var qn = W[En];
                u <= En && En < ce
                  ? (M(qn, "tns-moving"),
                    (qn.style.left = (100 * (En - u)) / D + "%"),
                    M(qn, Hn),
                    G(qn, Xn))
                  : qn.style.left &&
                    ((qn.style.left = ""), M(qn, Xn), G(qn, Hn)),
                  G(qn, pi);
              }
              setTimeout(function () {
                a(W, function (Yi) {
                  G(Yi, "tns-moving");
                });
              }, 300);
            })(),
          !Sn && !Pn)
        ) {
          if (
            e &&
            !Oe &&
            ((tn === _t && j === Xt) ||
              (Tn.style.cssText = ki(tn, j, g, An, Cn)),
            Z)
          ) {
            h && (x.style.width = Ai(g, j, D));
            var Ut = Di(g, j, D) + Li(j);
            (N = b((y = J)) - 1),
              "deleteRule" in y ? y.deleteRule(N) : y.removeRule(N),
              p(J, "#" + nn + " > .tns-item", Ut, b(J));
          }
          Cn && Ri(), t && (li(), (ae = u));
        }
        e && dn.emit("newBreakpointEnd", xn(n));
      }
    }
    function dr() {
      if (!g && !C) return w <= (vn ? D - (D - 1) / 2 : D);
      var n = g ? (g + j) * w : sn[w],
        e = tn ? fn + 2 * tn : fn + j;
      return (
        vn && (e -= g ? (fn - g) / 2 : (fn - (sn[u + 1] - sn[u] - j)) / 2),
        n <= e
      );
    }
    function tt() {
      for (var n in ((_e = 0), I)) (n = parseInt(n)) <= vi && (_e = n);
    }
    function pr() {
      !bn && on && X(on),
        !Yn && gn && X(gn),
        Un || (un ? X(un) : (V && X(V), H && X(H)));
    }
    function ot() {
      bn && on && _(on),
        Yn && gn && _(gn),
        Un && (un ? _(un) : (V && _(V), H && _(H)));
    }
    function at() {
      if (!Ge) {
        if ((tn && (Tn.style.margin = "0px"), hn))
          for (var n = "tns-transparent", e = hn; e--; )
            h && M(W[e], n), M(W[U - e - 1], n);
        pr(), (Ge = !0);
      }
    }
    function lt() {
      if (!Ke) {
        if (
          ((J.disabled = !0),
          (x.className = x.className.replace(se.substring(1), "")),
          Y(x, ["style"]),
          mn)
        )
          for (var n = hn; n--; ) h && X(W[n]), X(W[U - n - 1]);
        if (((Z && h) || Y(Tn, ["style"]), !h))
          for (var e = u, r = u + w; e < r; e++) {
            var t = W[e];
            Y(t, ["style"]), G(t, Hn), G(t, Xn);
          }
        pr(), (Ke = !0);
      }
    }
    function st() {
      var n = ut();
      Vi.innerHTML !== n && (Vi.innerHTML = n);
    }
    function ut() {
      var n = zi(),
        e = n[0] + 1,
        r = n[1] + 1;
      return e === r ? e + "" : e + " to " + r;
    }
    function zi(n) {
      n == null && (n = ji());
      var e,
        r,
        t,
        o = u;
      if (
        (vn || tn
          ? (C || g) && ((r = -(parseFloat(n) + tn)), (t = r + fn + 2 * tn))
          : C && ((r = sn[u]), (t = r + fn)),
        C)
      )
        sn.forEach(function (an, cn) {
          cn < U &&
            ((vn || tn) && an <= r + 0.5 && (o = cn),
            0.5 <= t - an && (e = cn));
        });
      else {
        if (g) {
          var s = g + j;
          vn || tn
            ? ((o = Math.floor(r / s)), (e = Math.ceil(t / s - 1)))
            : (e = o + Math.ceil(fn / s) - 1);
        } else if (vn || tn) {
          var y = D - 1;
          if ((vn ? ((o -= y / 2), (e = u + y / 2)) : (e = u + y), tn)) {
            var N = (tn * D) / fn;
            (o -= N), (e += N);
          }
          (o = Math.floor(o)), (e = Math.ceil(e));
        } else e = o + D - 1;
        (o = Math.max(o, 0)), (e = Math.min(e, U - 1));
      }
      return [o, e];
    }
    function vr() {
      if (Fe && !Sn) {
        var n = zi();
        n.push(Dt),
          hr.apply(null, n).forEach(function (e) {
            if (!rn(e, xi)) {
              var r = {};
              (r[ve] = function (o) {
                o.stopPropagation();
              }),
                F(e, r),
                F(e, wi),
                (e.src = A(e, "data-src"));
              var t = A(e, "data-srcset");
              t && (e.srcset = t), M(e, "loading");
            }
          });
      }
    }
    function ct(n) {
      M(n, "loaded"), mr(n);
    }
    function mr(n) {
      M(n, xi), G(n, "loading"), $(n, wi);
    }
    function hr(n, e, r) {
      var t = [];
      for (r || (r = "img"); n <= e; )
        a(W[n].querySelectorAll(r), function (o) {
          t.push(o);
        }),
          n++;
      return t;
    }
    function Ri() {
      var n = hr.apply(null, zi());
      E(function () {
        Pi(n, pt);
      });
    }
    function Pi(n, e) {
      return $i
        ? e()
        : (n.forEach(function (r, t) {
            !Fe && r.complete && mr(r), rn(r, xi) && n.splice(t, 1);
          }),
          n.length
            ? void E(function () {
                Pi(n, e);
              })
            : e());
    }
    function ft() {
      vr(),
        gr(),
        st(),
        yt(),
        (function () {
          if (Yn && ((kn = 0 <= ye ? ye : Jr()), (ye = -1), kn !== Le)) {
            var n = Dn[Le],
              e = Dn[kn];
            R(n, { tabindex: "-1", "aria-label": ze + (Le + 1) }),
              G(n, Ti),
              R(e, { "aria-label": ze + (kn + 1) + sr }),
              Y(e, "tabindex"),
              M(e, Ti),
              (Le = kn);
          }
        })();
    }
    function dt(n, e) {
      for (var r = [], t = n, o = Math.min(n + e, U); t < o; t++)
        r.push(W[t].offsetHeight);
      return Math.max.apply(null, r);
    }
    function pt() {
      var n = Cn ? dt(u, D) : dt(hn, w),
        e = _n || Tn;
      e.style.height !== n && (e.style.height = n + "px");
    }
    function vt() {
      sn = [0];
      var n = Z ? "left" : "top",
        e = Z ? "right" : "bottom",
        r = W[0].getBoundingClientRect()[n];
      a(W, function (t, o) {
        o && sn.push(t.getBoundingClientRect()[n] - r),
          o === U - 1 && sn.push(t.getBoundingClientRect()[e] - r);
      });
    }
    function gr() {
      var n = zi(),
        e = n[0],
        r = n[1];
      a(W, function (t, o) {
        e <= o && o <= r
          ? c(t, "aria-hidden") && (Y(t, ["aria-hidden", "tabindex"]), M(t, lr))
          : c(t, "aria-hidden") ||
            (R(t, { "aria-hidden": "true", tabindex: "-1" }), G(t, lr));
      });
    }
    function mt(n) {
      return n.nodeName.toLowerCase();
    }
    function ht(n) {
      return mt(n) === "button";
    }
    function gt(n) {
      return n.getAttribute("aria-disabled") === "true";
    }
    function Ni(n, e, r) {
      n ? (e.disabled = r) : e.setAttribute("aria-disabled", r.toString());
    }
    function yt() {
      if (Un && !Ze && !mn) {
        var n = ri ? V.disabled : gt(V),
          e = ti ? H.disabled : gt(H),
          r = u <= Zn,
          t = !Ze && Mn <= u;
        r && !n && Ni(ri, V, !0),
          !r && n && Ni(ri, V, !1),
          t && !e && Ni(ti, H, !0),
          !t && e && Ni(ti, H, !1);
      }
    }
    function qi(n, e) {
      yn && (n.style[yn] = e);
    }
    function ai(n) {
      return (
        n == null && (n = u),
        C
          ? (fn - (tn ? j : 0) - (sn[n + 1] - sn[n] - j)) / 2
          : g
          ? (fn - g) / 2
          : (D - 1) / 2
      );
    }
    function yr() {
      var n = fn + (tn ? j : 0) - (g ? (g + j) * U : sn[U]);
      return (
        vn &&
          !mn &&
          (n = g ? -(g + j) * (U - 1) - ai() : ai(U - 1) - sn[U - 1]),
        0 < n && (n = 0),
        n
      );
    }
    function ji(n) {
      var e;
      if ((n == null && (n = u), Z && !C))
        if (g) (e = -(g + j) * n), vn && (e += ai());
        else {
          var r = We ? U : D;
          vn && (n -= ai()), (e = (100 * -n) / r);
        }
      else (e = -sn[n]), vn && C && (e += ai());
      return Nr && (e = Math.max(e, Ae)), (e += !Z || C || g ? "px" : "%");
    }
    function li(n) {
      qi(x, "0s"), br(n);
    }
    function br(n) {
      n == null && (n = ji()), (x.style[he] = oe + n + De);
    }
    function bt(n, e, r, t) {
      var o = n + D;
      mn || (o = Math.min(o, U));
      for (var s = n; s < o; s++) {
        var y = W[s];
        t || (y.style.left = (100 * (s - u)) / D + "%"),
          Ki && fi && (y.style[fi] = y.style[Zi] = (Ki * (s - n)) / 1e3 + "s"),
          G(y, e),
          M(y, r),
          t && ke.push(y);
      }
    }
    function xr(n, e) {
      ir && cr(),
        (u !== ae || e) &&
          (dn.emit("indexChanged", xn()),
          dn.emit("transitionStart", xn()),
          Cn && Ri(),
          On && n && 0 <= ["click", "keydown"].indexOf(n.type) && ui(),
          (le = !0),
          Rt());
    }
    function xt(n) {
      return n.toLowerCase().replace(/-/g, "");
    }
    function Jn(n) {
      if (h || le) {
        if ((dn.emit("transitionEnd", xn(n)), !h && 0 < ke.length))
          for (var e = 0; e < ke.length; e++) {
            var r = ke[e];
            (r.style.left = ""),
              Zi && fi && ((r.style[Zi] = ""), (r.style[fi] = "")),
              G(r, pi),
              M(r, Xn);
          }
        if (
          !n ||
          (!h && n.target.parentNode === x) ||
          (n.target === x && xt(n.propertyName) === xt(he))
        ) {
          if (!ir) {
            var t = u;
            cr(), u !== t && (dn.emit("indexChanged", xn()), li());
          }
          Be === "inner" && dn.emit("innerLoaded", xn()), (le = !1), (ae = u);
        }
      }
    }
    function si(n, e) {
      if (!Pn)
        if (n === "prev") ue(e, -1);
        else if (n === "next") ue(e, 1);
        else {
          if (le) {
            if (hi) return;
            Jn();
          }
          var r = Mi(),
            t = 0;
          if (
            (n === "first"
              ? (t = -r)
              : n === "last"
              ? (t = h ? w - D - r : w - 1 - r)
              : (typeof n != "number" && (n = parseInt(n)),
                isNaN(n) ||
                  (e || (n = Math.max(0, Math.min(w - 1, n))), (t = n - r))),
            !h && t && Math.abs(t) < D)
          ) {
            var o = 0 < t ? 1 : -1;
            t += Zn <= u + t - w ? w * o : 2 * w * o * -1;
          }
          (u += t),
            h && mn && (u < Zn && (u += w), Mn < u && (u -= w)),
            Mi(u) !== Mi(ae) && xr(e);
        }
    }
    function ue(n, e) {
      if (le) {
        if (hi) return;
        Jn();
      }
      var r;
      if (!e) {
        for (var t = Pe((n = $n(n))); t !== un && [V, H].indexOf(t) < 0; )
          t = t.parentNode;
        var o = [V, H].indexOf(t);
        0 <= o && ((r = !0), (e = o === 0 ? -1 : 1));
      }
      if (Ze) {
        if (u === Zn && e === -1) return void si("last", n);
        if (u === Mn && e === 1) return void si("first", n);
      }
      e &&
        ((u += Me * e),
        C && (u = Math.floor(u)),
        xr(r || (n && n.type === "keydown") ? n : null));
    }
    function Wi() {
      (Ei = setInterval(function () {
        ue(null, Ur);
      }, er)),
        (On = !0);
    }
    function Xi() {
      clearInterval(Ei), (On = !1);
    }
    function wt(n, e) {
      R(on, { "data-action": n }), (on.innerHTML = oi[0] + n + oi[1] + e);
    }
    function _i() {
      Wi(), on && wt("stop", ie[1]);
    }
    function ui() {
      Xi(), on && wt("start", ie[0]);
    }
    function Tt() {
      On ? (ui(), (Re = !0)) : (_i(), (Re = !1));
    }
    function Et(n) {
      n.focus();
    }
    function $n(n) {
      return Te((n = n || m.event)) ? n.changedTouches[0] : n;
    }
    function Pe(n) {
      return n.target || m.event.srcElement;
    }
    function Te(n) {
      return 0 <= n.type.indexOf("touch");
    }
    function Ct(n) {
      n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
    }
    function St() {
      return (
        (o = Nn.y - be.y),
        (s = Nn.x - be.x),
        (n = Math.atan2(o, s) * (180 / Math.PI)),
        (e = gi),
        (r = !1),
        (t = Math.abs(90 - Math.abs(n))),
        90 - e <= t ? (r = "horizontal") : t <= e && (r = "vertical"),
        r === i.axis
      );
      var n, e, r, t, o, s;
    }
    function Ot(n) {
      if (le) {
        if (hi) return;
        Jn();
      }
      bn && On && Xi(), (xe = !0), zn && (f(zn), (zn = null));
      var e = $n(n);
      dn.emit(Te(n) ? "touchStart" : "dragStart", xn(n)),
        !Te(n) && 0 <= ["img", "a"].indexOf(mt(Pe(n))) && Ct(n),
        (Nn.x = be.x = e.clientX),
        (Nn.y = be.y = e.clientY),
        h && ((Oi = parseFloat(x.style[he].replace(oe, ""))), qi(x, "0s"));
    }
    function Bt(n) {
      if (xe) {
        var e = $n(n);
        (Nn.x = e.clientX),
          (Nn.y = e.clientY),
          h
            ? zn ||
              (zn = E(function () {
                (function r(t) {
                  if (!Fn) return void (xe = !1);
                  if (
                    (f(zn),
                    xe &&
                      (zn = E(function () {
                        r(t);
                      })),
                    Fn === "?" && (Fn = St()),
                    Fn)
                  ) {
                    !ii && Te(t) && (ii = !0);
                    try {
                      t.type &&
                        dn.emit(Te(t) ? "touchMove" : "dragMove", xn(t));
                    } catch {}
                    var o = Oi,
                      s = ur(Nn, be);
                    if (!Z || g || C) (o += s), (o += "px");
                    else {
                      var y = We
                        ? (s * D * 100) / ((fn + j) * U)
                        : (100 * s) / (fn + j);
                      (o += y), (o += "%");
                    }
                    x.style[he] = oe + o + De;
                  }
                })(n);
              }))
            : (Fn === "?" && (Fn = St()), Fn && (ii = !0)),
          (typeof n.cancelable != "boolean" || n.cancelable) &&
            ii &&
            n.preventDefault();
      }
    }
    function Ui(n) {
      if (xe) {
        zn && (f(zn), (zn = null)), h && qi(x, ""), (xe = !1);
        var e = $n(n);
        (Nn.x = e.clientX), (Nn.y = e.clientY);
        var r = ur(Nn, be);
        if (Math.abs(r)) {
          if (!Te(n)) {
            var t = Pe(n);
            F(t, {
              click: function o(s) {
                Ct(s), $(t, { click: o });
              },
            });
          }
          h
            ? (zn = E(function () {
                if (Z && !C) {
                  var o = (-r * D) / (fn + j);
                  (o = 0 < r ? Math.floor(o) : Math.ceil(o)), (u += o);
                } else {
                  var s = -(Oi + r);
                  if (s <= 0) u = Zn;
                  else if (s >= sn[U - 1]) u = Mn;
                  else
                    for (var y = 0; y < U && s >= sn[y]; )
                      s > sn[(u = y)] && r < 0 && (u += 1), y++;
                }
                xr(n, r), dn.emit(Te(n) ? "touchEnd" : "dragEnd", xn(n));
              }))
            : Fn && ue(n, 0 < r ? -1 : 1);
        }
      }
      i.preventScrollOnTouch === "auto" && (ii = !1),
        gi && (Fn = "?"),
        bn && !On && Wi();
    }
    function wr() {
      (_n || Tn).style.height = sn[u + D] - sn[u] + "px";
    }
    function Mt() {
      var n = g ? ((g + j) * w) / fn : w / D;
      return Math.min(Math.ceil(n), w);
    }
    function Tr() {
      if (Yn && !ei && Ln !== ge) {
        var n = ge,
          e = Ln,
          r = _;
        for (Ln < ge && ((n = Ln), (e = ge), (r = X)); n < e; ) r(Dn[n]), n++;
        ge = Ln;
      }
    }
    function xn(n) {
      return {
        container: x,
        slideItems: W,
        navContainer: gn,
        navItems: Dn,
        controlsContainer: un,
        hasControls: bi,
        prevButton: V,
        nextButton: H,
        items: D,
        slideBy: Me,
        cloneCount: hn,
        slideCount: w,
        slideCountNew: U,
        index: u,
        indexCached: ae,
        displayIndex: Zr(),
        navCurrentIndex: kn,
        navCurrentIndexCached: Le,
        pages: Ln,
        pagesCached: ge,
        sheet: J,
        isOn: Ue,
        event: n || {},
      };
    }
    Lr && console.warn("No slides found in", i.container);
  };
  return Kn;
})();
(function (L, E) {
  typeof exports == "object" && typeof module < "u"
    ? E(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], E)
    : E((L.ityped = {}));
})(this, function (L) {
  "use strict";
  (L.init = function (E, d) {
    var f = 0,
      S = void 0,
      P = void 0,
      z = function (p, b) {
        f === S && b.loop && (f = 0),
          setTimeout(function () {
            en(p[f], b);
          }, b.startDelay);
      },
      en = function (p, b) {
        var a = 0,
          q = p.length,
          rn = setInterval(function () {
            if (
              (b.placeholder
                ? (E.placeholder += p[a])
                : (E.textContent += p[a]),
              ++a === q)
            )
              return pn(rn, b);
          }, b.typeSpeed);
      },
      pn = function (p, b) {
        return (
          clearInterval(p),
          b.disableBackTyping && f === S - 1
            ? b.onFinished()
            : b.loop || f !== S - 1
            ? void setTimeout(function () {
                return K(b);
              }, b.backDelay)
            : b.onFinished()
        );
      },
      K = function (p) {
        var b = p.placeholder ? E.placeholder : E.textContent,
          a = b.length,
          q = setInterval(function () {
            if (
              (p.placeholder
                ? (E.placeholder = E.placeholder.substr(0, --a))
                : (E.textContent = b.substr(0, --a)),
              a === 0)
            )
              return B(q, p);
          }, p.backSpeed);
      },
      B = function (p, b) {
        clearInterval(p), ++f, z(P, b);
      };
    return (function (p) {
      var b = (function (q) {
          var rn = q.strings,
            M = rn === void 0 ? ["Put your strings here...", "and Enjoy!"] : rn,
            G = q.typeSpeed,
            c = G === void 0 ? 100 : G,
            A = q.backSpeed,
            k = A === void 0 ? 50 : A,
            R = q.backDelay,
            Y = R === void 0 ? 500 : R,
            ln = q.startDelay,
            X = ln === void 0 ? 500 : ln,
            _ = q.cursorChar,
            jn = _ === void 0 ? "|" : _,
            Bn = q.placeholder,
            Vn = Bn !== void 0 && Bn,
            Rn = q.showCursor,
            fe = Rn === void 0 || Rn,
            Wn = q.disableBackTyping,
            F = Wn !== void 0 && Wn,
            $ = q.onFinished,
            de = $ === void 0 ? function () {} : $,
            Kn = q.loop;
          return {
            strings: M,
            typeSpeed: c,
            backSpeed: k,
            cursorChar: jn,
            backDelay: Y,
            placeholder: Vn,
            startDelay: X,
            showCursor: fe,
            loop: Kn === void 0 || Kn,
            disableBackTyping: F,
            onFinished: de,
          };
        })(p || {}),
        a = b.strings;
      (P = a),
        (S = a.length),
        typeof E == "string" && (E = document.querySelector(E)),
        b.showCursor &&
          (function (q, rn) {
            var M = document.createElement("span");
            M.classList.add("ityped-cursor"),
            M.classList.add("c-subscribe__title"),
              (M.textContent = "|"),
              (M.textContent = rn.cursorChar),
              q.insertAdjacentElement("afterend", M);
          })(E, b),
        z(a, b);
    })(d);
  }),
    Object.defineProperty(L, "__esModule", { value: !0 });
}),
  (function () {
    "use strict";
    function L(S) {
      var P = ["MSIE ", "Trident/", "Edge/"];
      return new RegExp(P.join("|")).test(S);
    }
    function E() {
      function S(c, A) {
        (this.scrollLeft = c), (this.scrollTop = A);
      }
      function P(c) {
        return 0.5 * (1 - Math.cos(Math.PI * c));
      }
      function z(c) {
        if (
          c === null ||
          typeof c != "object" ||
          c.behavior === void 0 ||
          c.behavior === "auto" ||
          c.behavior === "instant"
        )
          return !0;
        if (typeof c == "object" && c.behavior === "smooth") return !1;
        throw new TypeError(
          "behavior member of ScrollOptions " +
            c.behavior +
            " is not a valid value for enumeration ScrollBehavior."
        );
      }
      function en(c, A) {
        return A === "Y"
          ? c.clientHeight + rn < c.scrollHeight
          : A === "X"
          ? c.clientWidth + rn < c.scrollWidth
          : void 0;
      }
      function pn(c, A) {
        var k = d.getComputedStyle(c, null)["overflow" + A];
        return k === "auto" || k === "scroll";
      }
      function K(c) {
        var A = en(c, "Y") && pn(c, "Y"),
          k = en(c, "X") && pn(c, "X");
        return A || k;
      }
      function B(c) {
        var A;
        do A = (c = c.parentNode) === f.body;
        while (A === !1 && K(c) === !1);
        return (A = null), c;
      }
      function p(c) {
        var A,
          k,
          R,
          Y = (G() - c.startTime) / q;
        (A = P((Y = Y > 1 ? 1 : Y))),
          (k = c.startX + (c.x - c.startX) * A),
          (R = c.startY + (c.y - c.startY) * A),
          c.method.call(c.scrollable, k, R),
          (k === c.x && R === c.y) || d.requestAnimationFrame(p.bind(d, c));
      }
      function b(c, A, k) {
        var R,
          Y,
          ln,
          X,
          _ = G();
        c === f.body
          ? ((R = d),
            (Y = d.scrollX || d.pageXOffset),
            (ln = d.scrollY || d.pageYOffset),
            (X = M.scroll))
          : ((R = c), (Y = c.scrollLeft), (ln = c.scrollTop), (X = S)),
          p({
            scrollable: R,
            method: X,
            startTime: _,
            startX: Y,
            startY: ln,
            x: A,
            y: k,
          });
      }
      if (
        !(
          "scrollBehavior" in f.documentElement.style &&
          d.__forceSmoothScrollPolyfill__ !== !0
        )
      ) {
        var a = d.HTMLElement || d.Element,
          q = 468,
          rn = L(d.navigator.userAgent) ? 1 : 0,
          M = {
            scroll: d.scroll || d.scrollTo,
            scrollBy: d.scrollBy,
            elementScroll: a.prototype.scroll || S,
            scrollIntoView: a.prototype.scrollIntoView,
          },
          G =
            d.performance && d.performance.now
              ? d.performance.now.bind(d.performance)
              : Date.now;
        (d.scroll = d.scrollTo =
          function () {
            arguments[0] !== void 0 &&
              (z(arguments[0]) !== !0
                ? b.call(
                    d,
                    f.body,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : d.scrollX || d.pageXOffset,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : d.scrollY || d.pageYOffset
                  )
                : M.scroll.call(
                    d,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != "object"
                      ? arguments[0]
                      : d.scrollX || d.pageXOffset,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                      ? arguments[1]
                      : d.scrollY || d.pageYOffset
                  ));
          }),
          (d.scrollBy = function () {
            arguments[0] !== void 0 &&
              (z(arguments[0])
                ? M.scrollBy.call(
                    d,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != "object"
                      ? arguments[0]
                      : 0,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                      ? arguments[1]
                      : 0
                  )
                : b.call(
                    d,
                    f.body,
                    ~~arguments[0].left + (d.scrollX || d.pageXOffset),
                    ~~arguments[0].top + (d.scrollY || d.pageYOffset)
                  ));
          }),
          (a.prototype.scroll = a.prototype.scrollTo =
            function () {
              if (arguments[0] !== void 0)
                if (z(arguments[0]) !== !0) {
                  var c = arguments[0].left,
                    A = arguments[0].top;
                  b.call(
                    this,
                    this,
                    c === void 0 ? this.scrollLeft : ~~c,
                    A === void 0 ? this.scrollTop : ~~A
                  );
                } else {
                  if (
                    typeof arguments[0] == "number" &&
                    arguments[1] === void 0
                  )
                    throw new SyntaxError("Value couldn't be converted");
                  M.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : typeof arguments[0] != "object"
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : arguments[1] !== void 0
                      ? ~~arguments[1]
                      : this.scrollTop
                  );
                }
            }),
          (a.prototype.scrollBy = function () {
            arguments[0] !== void 0 &&
              (z(arguments[0]) !== !0
                ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior,
                  })
                : M.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left + this.scrollLeft
                      : ~~arguments[0] + this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top + this.scrollTop
                      : ~~arguments[1] + this.scrollTop
                  ));
          }),
          (a.prototype.scrollIntoView = function () {
            if (z(arguments[0]) !== !0) {
              var c = B(this),
                A = c.getBoundingClientRect(),
                k = this.getBoundingClientRect();
              c !== f.body
                ? (b.call(
                    this,
                    c,
                    c.scrollLeft + k.left - A.left,
                    c.scrollTop + k.top - A.top
                  ),
                  d.getComputedStyle(c).position !== "fixed" &&
                    d.scrollBy({
                      left: A.left,
                      top: A.top,
                      behavior: "smooth",
                    }))
                : d.scrollBy({ left: k.left, top: k.top, behavior: "smooth" });
            } else
              M.scrollIntoView.call(
                this,
                arguments[0] === void 0 || arguments[0]
              );
          });
      }
    }
    var d = window,
      f = document;
    typeof exports == "object" ? (module.exports = { polyfill: E }) : E();
  })();
