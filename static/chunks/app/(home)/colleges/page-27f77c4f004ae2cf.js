(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1141],
  {
    62896: function (e, a, t) {
      Promise.resolve().then(t.t.bind(t, 3645, 23)),
        Promise.resolve().then(t.t.bind(t, 50821, 23)),
        Promise.resolve().then(t.bind(t, 43499)),
        Promise.resolve().then(t.bind(t, 45887)),
        Promise.resolve().then(t.bind(t, 55858)),
        Promise.resolve().then(t.bind(t, 81665)),
        Promise.resolve().then(t.bind(t, 32379)),
        Promise.resolve().then(t.t.bind(t, 80722, 23)),
        Promise.resolve().then(t.bind(t, 54605)),
        Promise.resolve().then(t.t.bind(t, 50826, 23));
    },
    88018: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return s.a;
          },
        });
      var l = t(92560),
        s = t.n(l),
        n = {};
      for (var r in l)
        "default" !== r &&
          (n[r] = function (e) {
            return l[e];
          }.bind(0, r));
      t.d(a, n);
    },
    58149: function (e, a, t) {
      "use strict";
      t.d(a, {
        default: function () {
          return s.a;
        },
      });
      var l = t(50821),
        s = t.n(l);
    },
    83946: function (e, a, t) {
      "use strict";
      var l = t(92008);
      t.o(l, "usePathname") &&
        t.d(a, {
          usePathname: function () {
            return l.usePathname;
          },
        }),
        t.o(l, "useRouter") &&
          t.d(a, {
            useRouter: function () {
              return l.useRouter;
            },
          }),
        t.o(l, "useSearchParams") &&
          t.d(a, {
            useSearchParams: function () {
              return l.useSearchParams;
            },
          });
    },
    92560: function (e, a, t) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (function (e, a) {
          for (var t in a)
            Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
        })(a, {
          default: function () {
            return i;
          },
          getImageProps: function () {
            return c;
          },
        });
      let l = t(50390),
        s = t(75853),
        n = t(3645),
        r = l._(t(39193));
      function c(e) {
        let { props: a } = (0, s.getImgProps)(e, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e];
        return { props: a };
      }
      let i = n.Image;
    },
    50292: function (e, a, t) {
      "use strict";
      t.d(a, {
        w_: function () {
          return i;
        },
      });
      var l = t(15082),
        s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = l.createContext && l.createContext(s),
        r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var a, t = 1, l = arguments.length; t < l; t++)
                for (var s in (a = arguments[t]))
                  Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
              return e;
            }).apply(this, arguments);
        },
        c = function (e, a) {
          var t = {};
          for (var l in e)
            Object.prototype.hasOwnProperty.call(e, l) &&
              0 > a.indexOf(l) &&
              (t[l] = e[l]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var s = 0, l = Object.getOwnPropertySymbols(e);
              s < l.length;
              s++
            )
              0 > a.indexOf(l[s]) &&
                Object.prototype.propertyIsEnumerable.call(e, l[s]) &&
                (t[l[s]] = e[l[s]]);
          return t;
        };
      function i(e) {
        return function (a) {
          return l.createElement(
            o,
            r({ attr: r({}, e.attr) }, a),
            (function e(a) {
              return (
                a &&
                a.map(function (a, t) {
                  return l.createElement(
                    a.tag,
                    r({ key: t }, a.attr),
                    e(a.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function o(e) {
        var a = function (a) {
          var t,
            s = e.attr,
            n = e.size,
            i = e.title,
            o = c(e, ["attr", "size", "title"]),
            _ = n || a.size || "1em";
          return (
            a.className && (t = a.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            l.createElement(
              "svg",
              r(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                a.attr,
                s,
                o,
                {
                  className: t,
                  style: r(r({ color: e.color || a.color }, a.style), e.style),
                  height: _,
                  width: _,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && l.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== n
          ? l.createElement(n.Consumer, null, function (e) {
              return a(e);
            })
          : a(s);
      }
    },
    54605: function (e, a, t) {
      "use strict";
      t.d(a, {
        default: function () {
          return g;
        },
      });
      var l = t(76136),
        s = t(47031),
        n = t.n(s),
        r = t(15082),
        c = t(15797),
        i = t(83946),
        o = (e) => {
          let { filterData: a, searchState: t, searchDegree: s } = e,
            o = (0, r.useCallback)(a, []),
            [_, d] = (0, r.useState)(t),
            [h, m] = (0, r.useState)(s),
            [u, x] = (0, r.useState)([]),
            [p, b] = (0, r.useState)(""),
            [g, v] = (0, r.useState)([]),
            [j, f] = (0, r.useState)(""),
            y = (0, i.useRouter)(),
            A = (e) => {
              let a = e.target.value,
                t = e.target.checked;
              y.push("/colleges"),
                m(""),
                x((e) => (t ? [...e, a] : e.filter((e) => e !== a)));
            },
            k = () => {
              window.scrollTo({ top: 550, behavior: "smooth" });
            },
            N = (e) => {
              y.push("/colleges"), d("");
              let a = e.target.value,
                t = e.target.checked;
              v((e) => (t ? [...e, a] : e.filter((e) => e !== a)));
            },
            C = (e) => {
              let a = e.target.value;
              e.target.checked
                ? b([a])
                : (b([]),
                  "Executive Programmes" === a && (m(""), y.push("/colleges")));
            };
          return (
            (0, r.useEffect)(() => {
              window.scrollTo(0, 0);
            }, []),
            (0, r.useEffect)(() => {
              let e = {};
              u.length > 0 && ((e.degree_name = u), k()),
                j && ((e.course_fee_ul = +j), (e.course_fee_ll = 0), k()),
                p.includes("Online Programmes")
                  ? ((e.study_mode = "Online Programmes"), k())
                  : p.includes("Distance Programmes")
                  ? ((e.study_mode = "Distance Programmes"), k())
                  : p.includes("Executive Programmes")
                  ? ((e.study_mode = "Executive Programmes"), k())
                  : p.includes("Online / Distance Programmes") &&
                    ((e.study_mode = "Online / Distance Programmes"), k()),
                g.length > 0 && ((e.state = g), k()),
                _ && (g.push(_), (e.state = _), k()),
                h &&
                  ("Executive course" !== h
                    ? ((e.degree_name = h), u.push(h))
                    : (e.study_mode = "Executive Programmes"),
                  k()),
                c.Z.post(
                  "https://learned-one-411711.wl.r.appspot.com/CnC/filter/colleges_v1",
                  e
                )
                  .then((e) => {
                    o(e.data.response.response, "response");
                  })
                  .catch((e) => {
                    console.error(
                      "Error while fetching filtering colleges:",
                      e
                    );
                  });
            }, [u, j, p, g, o, _]),
            (0, r.useEffect)(() => {
              h && "Executive course" === h && b(["Executive Programmes"]);
            }, [h]),
            (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("h3", { children: "Search By Filters" }),
                  (0, l.jsxs)("div", {
                    className: n().filter_main,
                    children: [
                      (0, l.jsxs)("div", {
                        className: n().study_mode,
                        children: [
                          (0, l.jsx)("div", {
                            className: n().study_mode_select,
                            children: "Study Mode",
                          }),
                          (0, l.jsxs)("div", {
                            className: n().select_btn,
                            children: [
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Online Programmes",
                                checked: p.includes("Online Programmes"),
                                onChange: C,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Online Programs",
                                className: n().label_name,
                                children: "Online Programmes",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Online / Distance Programmes",
                                checked: p.includes(
                                  "Online / Distance Programmes"
                                ),
                                onChange: C,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Online / Distance Programmes",
                                className: n().label_name,
                                children: "Online / Distance Programmes",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Distance Programmes",
                                checked: p.includes("Distance Programmes"),
                                onChange: C,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Distance Programs",
                                className: n().label_name,
                                children: "Distance Programmes",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Executive Programmes",
                                checked: p.includes("Executive Programmes"),
                                onChange: C,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Executive Programmes",
                                className: n().label_name,
                                children: "Executive Programmes",
                              }),
                              (0, l.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: n().study_mode,
                        style: { marginTop: "20px" },
                        children: [
                          (0, l.jsx)("div", {
                            className: n().study_mode_select,
                            children: "Course Fee",
                          }),
                          (0, l.jsxs)("div", {
                            className: n().input_range,
                            children: [
                              (0, l.jsxs)("p", {
                                style: {
                                  marginTop: "30px",
                                  fontSize: "14px",
                                  height: "20px",
                                },
                                children: ["" !== j ? "₹" : "", j],
                              }),
                              (0, l.jsx)("input", {
                                type: "range",
                                name: "fees",
                                min: "0",
                                max: "1000000",
                                value: j,
                                onChange: (e) => {
                                  f(e.target.value);
                                },
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: n().ranges,
                            children: [
                              (0, l.jsx)("p", { children: "0" }),
                              (0, l.jsx)("p", { children: "10L" }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: n().study_mode,
                        style: { marginTop: "20px" },
                        children: [
                          (0, l.jsx)("div", {
                            className: n().study_mode_select,
                            children: "Degree (online / distance)",
                          }),
                          (0, l.jsxs)("div", {
                            className: n().select_btn,
                            children: [
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MBA",
                                checked: u.includes("MBA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "MBA",
                                className: n().label_name,
                                children: "MBA",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "PGDM",
                                checked: u.includes("PGDM"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "PGDM",
                                className: n().label_name,
                                children: "PGDM",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MCom",
                                checked: u.includes("MCom"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "M.com",
                                className: n().label_name,
                                children: "M.com",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "PhD",
                                checked: u.includes("PhD"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "PhD",
                                className: n().label_name,
                                children: "PhD",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Diploma",
                                checked: u.includes("Diploma"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Diploma",
                                className: n().label_name,
                                children: "Diploma",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MSc",
                                checked: u.includes("MSc"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "MSc",
                                className: n().label_name,
                                children: "M.Sc",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MA",
                                checked: u.includes("MA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "MA",
                                className: n().label_name,
                                children: "M.A.",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MCA",
                                checked: u.includes("MCA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "MCA",
                                className: n().label_name,
                                children: "M.C.A.",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BSc",
                                checked: u.includes("BSc"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "BSc",
                                className: n().label_name,
                                children: "B.Sc",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BBA",
                                checked: u.includes("BBA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "BBA",
                                className: n().label_name,
                                children: "BBA",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BCA",
                                checked: u.includes("BCA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "BCA",
                                className: n().label_name,
                                children: "BCA",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BA",
                                checked: u.includes("BA"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "BA",
                                className: n().label_name,
                                children: "BA",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BCom",
                                checked: u.includes("BCom"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "B.com",
                                className: n().label_name,
                                children: "B.com",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "MLIS",
                                checked: u.includes("MLIS"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "MLIS",
                                className: n().label_name,
                                children: "MLIS",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "BLIS",
                                checked: u.includes("BLIS"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "BLIS",
                                className: n().label_name,
                                children: "BLIS",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "PGD",
                                checked: u.includes("PGD"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "PGD",
                                className: n().label_name,
                                children: "Postgraduate Diploma",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Executive mba",
                                checked: u.includes("Executive mba"),
                                onChange: A,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Executive mba",
                                className: n().label_name,
                                children: "Executive mba",
                              }),
                              (0, l.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: n().study_mode,
                        style: { marginTop: "20px" },
                        children: [
                          (0, l.jsx)("div", {
                            className: n().study_mode_select,
                            children: "State",
                          }),
                          (0, l.jsxs)("div", {
                            className: n().select_btn,
                            children: [
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "New Delhi",
                                checked: g.includes("New Delhi"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "New Delhi",
                                className: n().label_name,
                                children: "New Delhi",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Punjab",
                                checked: g.includes("Punjab"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Punjab",
                                className: n().label_name,
                                children: "Punjab",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Gujarat",
                                checked: g.includes("Gujarat"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Gujarat",
                                className: n().label_name,
                                children: "Gujarat",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Telangana",
                                checked: g.includes("Telangana"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Telangana",
                                className: n().label_name,
                                children: "Telangana",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Karnataka",
                                checked: g.includes("Karnataka"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Karnataka",
                                className: n().label_name,
                                children: "Karnataka",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Maharashtra",
                                checked: g.includes("Maharashtra"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Maharashtra",
                                className: n().label_name,
                                children: "Maharashtra",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Rajasthan",
                                checked: g.includes("Rajasthan"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Rajasthan",
                                className: n().label_name,
                                children: "Rajasthan",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Uttarakhand",
                                checked: g.includes("Uttarakhand"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Uttarakhand",
                                className: n().label_name,
                                children: "Uttarakhand",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Uttar Pradesh",
                                checked: g.includes("Uttar Pradesh"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Uttar Pradesh",
                                className: n().label_name,
                                children: "Uttar Pradesh",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Tamil Nadu",
                                checked: g.includes("Tamil Nadu"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Tamil Nadu",
                                className: n().label_name,
                                children: "Tamil Nadu",
                              }),
                              (0, l.jsx)("br", {}),
                              (0, l.jsx)("input", {
                                type: "checkbox",
                                value: "Haryana",
                                checked: g.includes("Haryana"),
                                onChange: N,
                              }),
                              (0, l.jsx)("label", {
                                htmlFor: "Haryana",
                                className: n().label_name,
                                children: "Haryana",
                              }),
                              (0, l.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        _ = t(88018),
        d = t(31366),
        h = t.n(d),
        m = t(58149),
        u = t(81472),
        x = (e) => {
          var a, t, s, n, c, i, o, d;
          let { searchData: x } = e,
            [p, b] = (0, r.useState)(9),
            g = x.slice(0, p),
            [v, j] = (0, r.useState)([]),
            [f, y] = (0, r.useState)([]),
            [A, k] = (0, r.useState)(!1),
            [N, C] = (0, r.useState)(3),
            [E, w] = (0, r.useState)(!0);
          (0, r.useEffect)(() => {
            x.length > 0 && w(!1);
          }, [x]),
            (0, r.useEffect)(() => {
              if (window.sessionStorage) {
                let e = JSON.parse(sessionStorage.getItem("compareList")) || [];
                j(e), e.length > 0 && k(!0);
              }
            }, []),
            (0, r.useEffect)(() => {
              let e = () => {
                C(window.innerWidth <= 425 ? 2 : 3);
              };
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
          let P = (e) => {
              A || k(!0),
                y([...v, e]),
                v.some((a) => a._id === e._id)
                  ? alert("already exists in the compare list.")
                  : (v.push(e),
                    v.length > N && v.shift(),
                    sessionStorage.setItem("compareList", JSON.stringify(v)));
            },
            S = (e) => {
              let a = v.filter((a) => a !== e);
              j(a), sessionStorage.setItem("compareList", JSON.stringify(a));
            },
            D = () => {
              k(!1), window.scrollTo({ top: 550, behavior: "smooth" });
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                children: (0, l.jsx)("p", {
                  style: { margin: "20px 0px" },
                  children: E ? "" : "".concat(x.length, " RESULT FOUND"),
                }),
              }),
              (0, l.jsx)("div", {
                className: h().main_container_cards,
                children: E
                  ? (0, l.jsx)("div", { className: h().loader })
                  : g.map((e) => {
                      var a;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: h().cards,
                          children: [
                            (0, l.jsx)(m.default, {
                              href: "/colleges/".concat(e.path),
                              prefetch: !0,
                              className: h().college_link,
                              children: (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("div", {
                                    className: h().card_img_container,
                                    children: (0, l.jsx)(_.default, {
                                      src: e.card_image,
                                      className: h().card_image,
                                      height: 200,
                                      width: 200,
                                      alt: "card-image",
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: h().college_icon_div,
                                    children: [
                                      (0, l.jsx)("div", {
                                        className: h().college_logo,
                                        children: (0, l.jsx)(_.default, {
                                          src: e.college_icon,
                                          alt: "college-icon",
                                          width: 35,
                                          height: 35,
                                        }),
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: h().tooltip,
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: h().institute_name,
                                            children: e.name,
                                          }),
                                          (0, l.jsx)("span", {
                                            className: h().tooltip_text,
                                            children: e.name,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className: h().fees_div,
                                    children: (0, l.jsxs)("div", {
                                      className: h().per_year_fees,
                                      children: [
                                        (0, l.jsxs)("p", {
                                          className: h().card_fees,
                                          children: [
                                            "Starting Fee: ₹",
                                            Math.floor(e.minimum_fee),
                                            "*",
                                          ],
                                        }),
                                        (0, l.jsx)("div", {
                                          className: h().card_course,
                                          children:
                                            null === (a = e.accreditation) ||
                                            void 0 === a
                                              ? void 0
                                              : a.map((a, t) =>
                                                  (0, l.jsxs)(
                                                    r.Fragment,
                                                    {
                                                      children: [
                                                        (0, l.jsxs)("span", {
                                                          children: [
                                                            a.name,
                                                            " ",
                                                          ],
                                                        }),
                                                        t !==
                                                          e.accreditation
                                                            .length -
                                                            1 &&
                                                          (0, l.jsx)("span", {
                                                            children: ",",
                                                          }),
                                                      ],
                                                    },
                                                    a.name
                                                  )
                                                ),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsx)("button", {
                                className: h().add_to_compare_btn,
                                onClick: () => P(e),
                                children: "Add to Compare",
                              }),
                            }),
                          ],
                        },
                        e.path
                      );
                    }),
              }),
              (0, l.jsxs)("div", {
                style: { display: "flex", justifyContent: "center" },
                children: [
                  " ",
                  p < x.length &&
                    (0, l.jsx)("button", {
                      onClick: () => {
                        b(x.length);
                      },
                      className: h().view_more_btn,
                      children: "View More",
                    }),
                ],
              }),
              A &&
                (0, l.jsx)("div", {
                  className: h().compare_modal_overlay,
                  children: (0, l.jsxs)("div", {
                    className: h().compare_modal,
                    children: [
                      (0, l.jsxs)("button", {
                        className: h().compare_close_button,
                        onClick: () => k(!1),
                        children: ["X", " "],
                      }),
                      (0, l.jsx)("h4", {
                        style: {
                          textAlign: "center",
                          color: "white",
                          fontWeight: "600",
                          marginTop: "20px",
                        },
                        children: "Select University(s) to Compare",
                      }),
                      (0, l.jsxs)("div", {
                        className: h().colleges_container,
                        children: [
                          (0, l.jsxs)("div", {
                            className: h().colleges,
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (null == v ? void 0 : v.length) > 0
                                    ? (0, l.jsxs)("div", {
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: h().icon_div,
                                            children: [
                                              (0, l.jsx)(_.default, {
                                                src:
                                                  null === (a = v[0]) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.college_icon,
                                                alt: "college-icon",
                                                width: 35,
                                                height: 35,
                                              }),
                                              (0, l.jsx)("p", {
                                                style: {
                                                  color: "var(--black)",
                                                  fontWeight: "600",
                                                },
                                                children:
                                                  null === (t = v[0]) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.name,
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: h().fee_div,
                                            children: [
                                              null === (s = v[0]) ||
                                              void 0 === s
                                                ? void 0
                                                : s.ranking[0],
                                              " ",
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, l.jsxs)("div", {
                                        className: h().modal_compare_btn,
                                        onClick: () => D(),
                                        children: [
                                          (0, l.jsx)(u.AzW, {
                                            fontSize: "1.5em",
                                          }),
                                          (0, l.jsx)("p", {
                                            children: "Add To Compare",
                                          }),
                                        ],
                                      }),
                                  (0, l.jsx)("button", {
                                    onClick: () => S(v[0]),
                                    className: h().cross_button,
                                    children: "x",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (null == v ? void 0 : v.length) > 1
                                    ? (0, l.jsxs)("div", {
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: h().icon_div,
                                            children: [
                                              (0, l.jsx)(_.default, {
                                                src:
                                                  null === (n = v[1]) ||
                                                  void 0 === n
                                                    ? void 0
                                                    : n.college_icon,
                                                alt: "college-icon",
                                                width: 35,
                                                height: 35,
                                              }),
                                              (0, l.jsx)("p", {
                                                style: {
                                                  color: "var(--black)",
                                                  fontWeight: "600",
                                                },
                                                children:
                                                  null === (c = v[1]) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.name,
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: h().fee_div,
                                            children: [
                                              null === (i = v[1]) ||
                                              void 0 === i
                                                ? void 0
                                                : i.ranking[0],
                                              " ",
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, l.jsxs)("div", {
                                        className: h().modal_compare_btn,
                                        onClick: () => D(),
                                        children: [
                                          (0, l.jsx)(u.AzW, {
                                            fontSize: "1.5em",
                                          }),
                                          (0, l.jsx)("p", {
                                            children: "Add To Compare",
                                          }),
                                        ],
                                      }),
                                  (0, l.jsx)("button", {
                                    onClick: () => S(v[1]),
                                    className: h().cross_button,
                                    children: "x",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  v.length > 2
                                    ? (0, l.jsxs)("div", {
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: h().icon_div,
                                            children: [
                                              (0, l.jsx)(_.default, {
                                                src:
                                                  null === (o = v[2]) ||
                                                  void 0 === o
                                                    ? void 0
                                                    : o.college_icon,
                                                alt: "college-icon",
                                                width: 35,
                                                height: 35,
                                              }),
                                              (0, l.jsx)("p", {
                                                style: {
                                                  color: "var(--black)",
                                                  fontWeight: "600",
                                                },
                                                children: v[2].name,
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: h().fee_div,
                                            children: [
                                              null === (d = v[2]) ||
                                              void 0 === d
                                                ? void 0
                                                : d.ranking[0],
                                              " ",
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, l.jsxs)("div", {
                                        className: h().modal_compare_btn,
                                        onClick: () => D(),
                                        children: [
                                          (0, l.jsx)(u.AzW, {
                                            fontSize: "1.5em",
                                          }),
                                          (0, l.jsx)("p", {
                                            children: "Add To Compare",
                                          }),
                                        ],
                                      }),
                                  (0, l.jsx)("button", {
                                    onClick: () => S(v[2]),
                                    className: h().cross_button,
                                    children: "x",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)(m.default, {
                            href: "/compare-colleges",
                            children: (0, l.jsx)("button", {
                              className: h().compare_now_btn,
                              disabled: v.length < 2,
                              children: "Compare Now",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
        p = t(34413),
        b = t(78774),
        g = (e) => {
          let { state: a, degree: t } = e,
            [s, c] = (0, r.useState)(!1),
            [i, _] = (0, r.useState)([]),
            d = (e) => {
              _(e);
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: n().container,
                children: [
                  (0, l.jsx)("h1", {
                    className: n().explore_heading,
                    children: "EXPLORE BEST COURSES FROM TOP UNIVERSITIES",
                  }),
                  (0, l.jsxs)("button", {
                    className: n().filter_button,
                    onClick: () => c(!0),
                    children: [
                      "Filter",
                      (0, l.jsx)(p.Ix0, { fontSize: "15px" }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: n().filter_main_section,
                children: [
                  (0, l.jsx)("div", {
                    className: n().filter,
                    children: (0, l.jsx)(o, {
                      filterData: d,
                      searchState: a,
                      searchDegree: t,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: n().cards_section,
                    children: (0, l.jsx)(x, { searchData: i }),
                  }),
                ],
              }),
              s &&
                (0, l.jsx)("div", {
                  className: n().modal_overlay,
                  children: (0, l.jsxs)("div", {
                    className: n().modal,
                    children: [
                      (0, l.jsx)("button", {
                        className: n().close_button,
                        onClick: () => c(!1),
                        children: (0, l.jsx)(b.$iT, {
                          fontSize: "1.5em",
                          color: "#000",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: n().join_popup,
                        children: (0, l.jsx)(o, {
                          filterData: d,
                          searchState: a,
                          searchDegree: t,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: n().apply_btn,
                        children: (0, l.jsx)("button", {
                          onClick: () => c(!1),
                          children: "Apply",
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          });
        };
    },
    80722: function (e) {
      e.exports = {
        main: "bestcollege_main__G_q2G",
        banner_image: "bestcollege_banner_image__0XOk4",
        banner: "bestcollege_banner__DvNyN",
        explore_heading: "bestcollege_explore_heading__IahiT",
        banner_description: "bestcollege_banner_description__OxDnN",
        back_btn: "bestcollege_back_btn__7LFfg",
        gradientOverlayStyle: "bestcollege_gradientOverlayStyle__Mh9Kl",
      };
    },
    31366: function (e) {
      e.exports = {
        main_container_cards: "collegecards_main_container_cards__VLuAV",
        cards: "collegecards_cards__mTbVk",
        college_link: "collegecards_college_link__ctlCY",
        institute_name: "collegecards_institute_name__OAwls",
        tooltip: "collegecards_tooltip__17nZF",
        tooltip_text: "collegecards_tooltip_text__4LshK",
        card_img_container: "collegecards_card_img_container__iiTp9",
        card_image: "collegecards_card_image__nl5Bj",
        card_course: "collegecards_card_course__ZOkTv",
        card_fees: "collegecards_card_fees__dMiDC",
        fees_div: "collegecards_fees_div__rwOdY",
        per_year_fees: "collegecards_per_year_fees__cS4cb",
        add_to_compare_btn: "collegecards_add_to_compare_btn__HFjXO",
        download_btn: "collegecards_download_btn____fUC",
        college_icon_div: "collegecards_college_icon_div__t487O",
        college_logo: "collegecards_college_logo__jE0gt",
        loader: "collegecards_loader__oYXe4",
        spinner: "collegecards_spinner__9w0r6",
        view_more_btn: "collegecards_view_more_btn__r5h33",
        compare_modal_overlay: "collegecards_compare_modal_overlay__7qc_a",
        compare_modal: "collegecards_compare_modal__MPKix",
        compare_close_button: "collegecards_compare_close_button__GrIjL",
        colleges_container: "collegecards_colleges_container__zEbgd",
        colleges: "collegecards_colleges__CRAZN",
        cross_button: "collegecards_cross_button__07Q6Z",
        fee_div: "collegecards_fee_div__OvE06",
        compare_now_btn: "collegecards_compare_now_btn__uJ7Vf",
        icon_div: "collegecards_icon_div__RWVec",
        modal_compare_btn: "collegecards_modal_compare_btn__oOOWc",
      };
    },
    47031: function (e) {
      e.exports = {
        explore_heading: "topuniversity_explore_heading__e5Cnd",
        results: "topuniversity_results___WE2_",
        filter_button: "topuniversity_filter_button__Ra_9x",
        filter_main_section: "topuniversity_filter_main_section__cyltJ",
        filter: "topuniversity_filter__EWbBt",
        cards_section: "topuniversity_cards_section__7b6S3",
        searchWrapper: "topuniversity_searchWrapper__BhTUU",
        searchBar: "topuniversity_searchBar__y4a94",
        Hero_input: "topuniversity_Hero_input__D594i",
        Hero_iconContainer: "topuniversity_Hero_iconContainer__xDo7e",
        Hero_icon: "topuniversity_Hero_icon__Xj4xY",
        filter_main: "topuniversity_filter_main__b2Dto",
        select_btn: "topuniversity_select_btn__Ew4vM",
        study_mode: "topuniversity_study_mode__MxEoA",
        study_mode_select: "topuniversity_study_mode_select__eKz3p",
        label_name: "topuniversity_label_name__Ron3s",
        ranges: "topuniversity_ranges__b6dJv",
        input_range: "topuniversity_input_range__0gw4x",
        mobile_heading: "topuniversity_mobile_heading__lFBnc",
        modal_overlay: "topuniversity_modal_overlay__YZwN7",
        modal: "topuniversity_modal__pXNiF",
        close_button: "topuniversity_close_button__QxPRA",
        join_popup: "topuniversity_join_popup__ZCEtU",
        apply_btn: "topuniversity_apply_btn__En3zC",
        container: "topuniversity_container__3aJeI",
        mobile_explore: "topuniversity_mobile_explore__RuihO",
      };
    },
    50826: function (e) {
      e.exports = {
        Expert__Container: "Expert_Expert__Container__f2HSI",
        Expert__CardsContainer: "Expert_Expert__CardsContainer__DDdzT",
        Expert__text_1: "Expert_Expert__text_1__YxPGj",
        Expert__text_2: "Expert_Expert__text_2__6WHgU",
        Expert__allCardsContainer: "Expert_Expert__allCardsContainer__kKnmL",
        Expert__cardContainer: "Expert_Expert__cardContainer__2y7vz",
        Expert__cardData: "Expert_Expert__cardData__ocQ6N",
        Expert__flexContainer: "Expert_Expert__flexContainer__iCU0T",
        Expert__imageContainer: "Expert_Expert__imageContainer__zoZB6",
        Expert__image: "Expert_Expert__image__8wv_Z",
        Expert__ratingContainer: "Expert_Expert__ratingContainer__UIlw9",
        icon_container: "Expert_icon_container__lDnua",
        Expert__card_text_1: "Expert_Expert__card_text_1__NI_Zc",
        Expert__card_text_2: "Expert_Expert__card_text_2__jOGNC",
        Expert__card_text_3: "Expert_Expert__card_text_3__7CvA2",
        Expert__cardButton: "Expert_Expert__cardButton__cRBRJ",
        ExpertRatingValue: "Expert_ExpertRatingValue__2LPF2",
      };
    },
    43499: function (e, a, t) {
      "use strict";
      t.r(a),
        (a.default = {
          src: "/_next/static/media/chandigarh.36ef8a1e.webp",
          height: 870,
          width: 1920,
          blurDataURL:
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAQAAkA4JZQCdAEO9s5MgAD++317dp/RSVXtkw3ROk/4TRhlJpgA",
          blurWidth: 8,
          blurHeight: 4,
        });
    },
    45887: function (e, a, t) {
      "use strict";
      t.r(a),
        (a.default = {
          src: "/_next/static/media/DanishC.6a230675.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JQBOgCPQS3KvEAD+imeTamQfaMDZKHDJXUPIHjzn3/q+IIsaDuo0doUkvhoEaIAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    81665: function (e, a, t) {
      "use strict";
      t.r(a),
        (a.default = {
          src: "/_next/static/media/Mubashshir.759370d7.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JYwCdAEOO/H0AAD+wrI3qCYX4jcr+IUC7NIXRNSgHgETzXhvo7Af5fG9gGAA",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    32379: function (e, a, t) {
      "use strict";
      t.r(a),
        (a.default = {
          src: "/_next/static/media/VaishaliThakur.1fd1e788.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP7CqtW0CYn2UXwDNgL8/gWlntKqK6/XyTwImJcb1rwAAA==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    55858: function (e, a, t) {
      "use strict";
      t.r(a),
        (a.default = {
          src: "/_next/static/media/krishna.ea39407e.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP6t6KBo6f4XOVgNDex1GgJzhXEPr5J4ETJ2mfMfAAA=",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [1073, 4545, 3399, 9691, 7833, 3645, 821, 5797, 3784, 2717, 1744],
      function () {
        return e((e.s = 62896));
      }
    ),
      (_N_E = e.O());
  },
]);
