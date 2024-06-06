(function () {
  "use strict";
  var t = {
      839: function (t, n, l) {
        var e = l(5130),
          u = l(6768),
          i = l(144),
          o = (l(4114), l(4232));
        const a = { class: "input-data" },
          r = (0, u.Lk)("h1", null, "新增選項", -1),
          s = (0, u.Lk)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 29 29",
              width: "24px",
              height: "24px",
            },
            [
              (0, u.Lk)("path", {
                "fill-rule": "evenodd",
                d: "M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z",
              }),
            ],
            -1
          ),
          c = [s],
          p = { class: "display-inputData" },
          d = (0, u.Lk)("h3", null, "目前選項：", -1),
          v = ["onClick"],
          L = (0, u.Lk)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 29 29",
              width: "24px",
              height: "24px",
            },
            [
              (0, u.Lk)("path", {
                "fill-rule": "evenodd",
                d: "M 7 7 L 9 5 L 14 10 L 19 5 L 21 7 L 16 12 L 21 17 L 19 19 L 14 14 L 9 19 L 7 17 L 12 12 Z",
              }),
            ],
            -1
          ),
          h = [L];
        var f = {
          __name: "input_data",
          emits: ["inputdata-to-app"],
          setup(t, { emit: n }) {
            const l = (0, i.Kh)({ inputData: "", inputList: [] }),
              s = n,
              L = () => {
                ("" !== l.inputData) &
                  (0 !== l.inputData.split(" ").join("").length) &&
                  (l.inputList.push(l.inputData),
                  (l.inputData = ""),
                  s("inputdata-to-app", l.inputList));
              },
              f = (t) => {
                l.inputList.splice(t, 1), s("inputdata-to-app", l.inputList);
              };
            return (t, n) => (
              (0, u.uX)(),
              (0, u.CE)("div", a, [
                r,
                (0, u.bo)(
                  (0, u.Lk)(
                    "input",
                    {
                      type: "text",
                      name: "",
                      id: "",
                      placeholder: "輸入選項",
                      "onUpdate:modelValue":
                        n[0] || (n[0] = (t) => (l.inputData = t)),
                      onKeyup:
                        n[1] || (n[1] = (0, e.jR)((t) => L(), ["enter"])),
                    },
                    null,
                    544
                  ),
                  [[e.Jo, l.inputData]]
                ),
                (0, u.Lk)(
                  "div",
                  {
                    class: "add",
                    onClick: n[2] || (n[2] = (t) => L()),
                    title: "新增選項",
                  },
                  c
                ),
                (0, u.Lk)("div", p, [
                  d,
                  (0, u.Lk)("ul", null, [
                    ((0, u.uX)(!0),
                    (0, u.CE)(
                      u.FK,
                      null,
                      (0, u.pI)(
                        l.inputList,
                        (t, n) => (
                          (0, u.uX)(),
                          (0, u.CE)("li", { key: n }, [
                            (0, u.Lk)("div", null, (0, o.v_)(t), 1),
                            (0, u.Lk)(
                              "div",
                              {
                                class: "delete",
                                onClick: (t) => f(n),
                                title: "刪除選項",
                              },
                              h,
                              8,
                              v
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ])
            );
          },
        };
        const k = f;
        var g = k;
        const w = { class: "random-selector" },
          y = (0, u.Lk)("h1", null, "隨機抽選", -1);
        var m = {
          __name: "random_selector",
          props: ["inputList"],
          setup(t) {
            const n = t,
              { inputList: l } = (0, i.QW)(n);
            let a = (0, i.KR)(0);
            const r = () => {
              if (null === l.value) return;
              a.value = Object.values(l.value).length;
              const t = setInterval(() => {
                a.value = (a.value + 1) % l.value.length;
              }, 50);
              setTimeout(() => {
                clearInterval(t);
              }, Math.floor(501 * Math.random()) + 1e3);
            };
            return (t, n) => (
              (0, u.uX)(),
              (0, u.CE)("div", w, [
                y,
                (0, u.Lk)(
                  "a",
                  { class: "button", onClick: n[0] || (n[0] = (t) => r()) },
                  "START"
                ),
                ((0, u.uX)(!0),
                (0, u.CE)(
                  u.FK,
                  null,
                  (0, u.pI)((0, i.R1)(l), (t, n) =>
                    (0, u.bo)(
                      ((0, u.uX)(),
                      (0, u.CE)("div", { key: n }, (0, o.v_)(t), 1)),
                      [[e.aG, n === (0, i.R1)(a)]]
                    )
                  ),
                  128
                )),
              ])
            );
          },
        };
        const C = m;
        var b = C;
        const x = (0, u.Lk)("h1", null, "random selector", -1),
          _ = { class: "page" },
          E = (0, u.Lk)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22.703",
              height: "21.928",
            },
            [
              (0, u.Lk)("path", {
                fill: "#37474F",
                d: "M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z",
              }),
            ],
            -1
          ),
          O = [E],
          X = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22.703",
            height: "21.928",
            style: { transform: "scaleX(-1)" },
          },
          j = (0, u.Lk)(
            "path",
            {
              fill: "#37474F",
              d: "M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z",
            },
            null,
            -1
          ),
          D = [j],
          R = { class: "main" },
          F = (0, u.Lk)("div", null, null, -1),
          K = (0, u.Lk)("div", null, null, -1),
          M = (0, u.Lk)("div", null, null, -1),
          T = (0, u.Lk)("div", null, null, -1),
          I = (0, u.Lk)("div", null, null, -1),
          S = (0, u.Lk)("div", null, null, -1),
          q = (0, u.Lk)("div", null, null, -1),
          A = (0, u.Lk)("div", null, null, -1),
          Q = (0, u.Lk)("div", null, null, -1),
          V = (0, u.Lk)("div", null, null, -1),
          z = (0, u.Lk)("div", null, null, -1),
          B = (0, u.Lk)("div", null, null, -1);
        var P = {
          __name: "App",
          setup(t) {
            const n = (0, i.KR)(null),
              l = (t) => {
                n.value = t;
              };
            let e = (0, i.Kh)({ left: !1, right: !1 });
            const o = screen.width;
            o <= 767 && (e.left = !0);
            const a = () => {
                let t = document.querySelector(".input-data"),
                  n = document.querySelector(".random-selector");
                (t.style.opacity = 0),
                  (t.style.width = 0),
                  (n.style.opacity = 1),
                  (n.style.width = "auto"),
                  (e.left = !1),
                  (e.right = !0);
              },
              r = () => {
                let t = document.querySelector(".input-data"),
                  n = document.querySelector(".random-selector");
                (t.style.opacity = 1),
                  (t.style.width = "auto"),
                  (n.style.opacity = 0),
                  (n.style.width = 0),
                  (e.left = !0),
                  (e.right = !1);
              };
            return (t, o) => (
              (0, u.uX)(),
              (0, u.CE)("div", null, [
                x,
                (0, u.Lk)("div", _, [
                  (0, i.R1)(e).left
                    ? ((0, u.uX)(),
                      (0, u.CE)(
                        "div",
                        { key: 0, onClick: a, class: "flag-left" },
                        O
                      ))
                    : (0, u.Q3)("", !0),
                  (0, i.R1)(e).right
                    ? ((0, u.uX)(),
                      (0, u.CE)(
                        "div",
                        { key: 1, onClick: r, class: "flag-right" },
                        [((0, u.uX)(), (0, u.CE)("svg", X, D))]
                      ))
                    : (0, u.Q3)("", !0),
                ]),
                (0, u.Lk)("div", R, [
                  F,
                  K,
                  M,
                  T,
                  I,
                  (0, u.bF)(g, { onInputdataToApp: l }),
                  S,
                  (0, u.bF)(b, { inputList: n.value }, null, 8, ["inputList"]),
                  q,
                  A,
                  Q,
                  V,
                  z,
                  B,
                ]),
              ])
            );
          },
        };
        const Z = P;
        var G = Z;
        (0, e.Ef)(G).mount("#app");
      },
    },
    n = {};
  function l(e) {
    var u = n[e];
    if (void 0 !== u) return u.exports;
    var i = (n[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, l), i.exports;
  }
  (l.m = t),
    (function () {
      var t = [];
      l.O = function (n, e, u, i) {
        if (!e) {
          var o = 1 / 0;
          for (c = 0; c < t.length; c++) {
            (e = t[c][0]), (u = t[c][1]), (i = t[c][2]);
            for (var a = !0, r = 0; r < e.length; r++)
              (!1 & i || o >= i) &&
              Object.keys(l.O).every(function (t) {
                return l.O[t](e[r]);
              })
                ? e.splice(r--, 1)
                : ((a = !1), i < o && (o = i));
            if (a) {
              t.splice(c--, 1);
              var s = u();
              void 0 !== s && (n = s);
            }
          }
          return n;
        }
        i = i || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
        t[c] = [e, u, i];
      };
    })(),
    (function () {
      l.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return l.d(n, { a: n }), n;
      };
    })(),
    (function () {
      l.d = function (t, n) {
        for (var e in n)
          l.o(n, e) &&
            !l.o(t, e) &&
            Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
      };
    })(),
    (function () {
      l.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      l.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      };
    })(),
    (function () {
      var t = { 524: 0 };
      l.O.j = function (n) {
        return 0 === t[n];
      };
      var n = function (n, e) {
          var u,
            i,
            o = e[0],
            a = e[1],
            r = e[2],
            s = 0;
          if (
            o.some(function (n) {
              return 0 !== t[n];
            })
          ) {
            for (u in a) l.o(a, u) && (l.m[u] = a[u]);
            if (r) var c = r(l);
          }
          for (n && n(e); s < o.length; s++)
            (i = o[s]), l.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return l.O(c);
        },
        e = (self["webpackChunkrandom_selector"] =
          self["webpackChunkrandom_selector"] || []);
      e.forEach(n.bind(null, 0)), (e.push = n.bind(null, e.push.bind(e)));
    })();
  var e = l.O(void 0, [504], function () {
    return l(839);
  });
  e = l.O(e);
})();
//# sourceMappingURL=app.42bfaacd.js.map
