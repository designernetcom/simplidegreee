(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9057],
  {
    65144: function (e, a, i) {
      Promise.resolve().then(i.t.bind(i, 3645, 23)),
        Promise.resolve().then(i.t.bind(i, 50821, 23)),
        Promise.resolve().then(i.t.bind(i, 39e3, 23)),
        Promise.resolve().then(i.bind(i, 50257)),
        Promise.resolve().then(i.bind(i, 89301)),
        Promise.resolve().then(i.t.bind(i, 72588, 23)),
        Promise.resolve().then(i.bind(i, 56999)),
        Promise.resolve().then(i.bind(i, 46523)),
        Promise.resolve().then(i.bind(i, 41265)),
        Promise.resolve().then(i.bind(i, 7713)),
        Promise.resolve().then(i.bind(i, 47064)),
        Promise.resolve().then(i.t.bind(i, 50742, 23)),
        Promise.resolve().then(i.t.bind(i, 31332, 23)),
        Promise.resolve().then(i.t.bind(i, 6554, 23)),
        Promise.resolve().then(i.bind(i, 81961)),
        Promise.resolve().then(i.bind(i, 75272));
    },
    6403: function (e, a, i) {
      "use strict";
      i.d(a, {
        default: function () {
          return o.a;
        },
      });
      var t = i(36158),
        o = i.n(t);
    },
    83946: function (e, a, i) {
      "use strict";
      var t = i(92008);
      i.o(t, "usePathname") &&
        i.d(a, {
          usePathname: function () {
            return t.usePathname;
          },
        }),
        i.o(t, "useRouter") &&
          i.d(a, {
            useRouter: function () {
              return t.useRouter;
            },
          }),
        i.o(t, "useSearchParams") &&
          i.d(a, {
            useSearchParams: function () {
              return t.useSearchParams;
            },
          });
    },
    36158: function (e, a, i) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let t = i(50390);
      i(76136), i(15082);
      let o = t._(i(48077));
      function r(e, a) {
        var i;
        let t = {
          loading: (e) => {
            let { error: a, isLoading: i, pastDelay: t } = e;
            return null;
          },
        };
        "function" == typeof e && (t.loader = e);
        let r = { ...t, ...a };
        return (0, o.default)({
          ...r,
          modules: null == (i = r.loadableGenerated) ? void 0 : i.modules,
        });
      }
      ("function" == typeof a.default ||
        ("object" == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, "__esModule", { value: !0 }),
        Object.assign(a.default, a),
        (e.exports = a.default));
    },
    50257: function (e, a, i) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let t = i(12351);
      function o(e) {
        let { reason: a, children: i } = e;
        if ("undefined" == typeof window) throw new t.BailoutToCSRError(a);
        return i;
      }
    },
    48077: function (e, a, i) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let t = i(76136),
        o = i(15082),
        r = i(50257),
        s = i(89301);
      function n(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let l = {
          loader: () => Promise.resolve(n(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let a = { ...l, ...e },
            i = (0, o.lazy)(() => a.loader().then(n)),
            c = a.loading;
          function _(e) {
            let n = c
                ? (0, t.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              l = a.ssr
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, t.jsx)(s.PreloadCss, { moduleIds: a.modules })
                        : null,
                      (0, t.jsx)(i, { ...e }),
                    ],
                  })
                : (0, t.jsx)(r.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, t.jsx)(i, { ...e }),
                  });
            return (0, t.jsx)(o.Suspense, { fallback: n, children: l });
          }
          return (_.displayName = "LoadableComponent"), _;
        };
    },
    89301: function (e, a, i) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let t = i(76136),
        o = i(9519);
      function r(e) {
        let { moduleIds: a } = e;
        if ("undefined" != typeof window) return null;
        let i = (0, o.getExpectedRequestStore)("next/dynamic css"),
          r = [];
        if (i.reactLoadableManifest && a) {
          let e = i.reactLoadableManifest;
          for (let i of a) {
            if (!e[i]) continue;
            let a = e[i].files.filter((e) => e.endsWith(".css"));
            r.push(...a);
          }
        }
        return 0 === r.length
          ? null
          : (0, t.jsx)(t.Fragment, {
              children: r.map((e) =>
                (0, t.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: i.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    41265: function (e, a, i) {
      "use strict";
      var t = i(76136),
        o = i(15082),
        r = i(92937),
        s = i(52088);
      a.default = () => {
        let [e, a] = (0, o.useState)(!1),
          [i, n] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            if (!sessionStorage.getItem("LrmodalShown")) {
              let e = setTimeout(() => {
                a(!0), sessionStorage.setItem("LrmodalShown", "true");
              }, 15e3);
              return () => clearTimeout(e);
            }
          }, []),
          (0, o.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get(
              "utm_source"
            );
            e && sessionStorage.setItem("lr_utm_source", e);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              e &&
                (0, t.jsx)(r.default, {
                  onClose: () => a(!1),
                  openthank: () => n(!0),
                }),
              i && (0, t.jsx)(s.Z, { onCloseThank: () => n(!1) }),
            ],
          })
        );
      };
    },
    24261: function (e, a, i) {
      "use strict";
      i.d(a, {
        G: function () {
          return em;
        },
      });
      var t = i(76136),
        o = i(58149),
        r = i(87009),
        s = i.n(r),
        n = i(15082),
        l = i(88018),
        c = i(83946),
        _ = i(36451),
        d = i(1626),
        u = i(80411),
        A = i(78504),
        m = i(73716),
        g = i(21925),
        h = i(67003),
        b = i(94204),
        p = i(88876),
        v = i(55001),
        x = i(25668),
        M = i(72599),
        f = i(42568),
        C = i(1043),
        N = i(12020),
        w = i(5516),
        U = i(10237),
        B = i(77967),
        j = i(7807),
        k = i(46273),
        D = i(45050),
        y = i(32316),
        I = i(36361),
        R = i(5349),
        S = i(30256),
        Z = i(54448),
        E = i(26886),
        Q = i(32861),
        G = i(49647),
        P = i(19914),
        L = i(4390),
        T = i(13750),
        Y = i(91229),
        F = i(32312),
        J = i(63876),
        O = i(52222),
        W = i(26455),
        H = i(97454),
        V = i(26311),
        X = i(77443),
        z = i(51462),
        q = i(78810),
        K = i(79506),
        $ = i(63038),
        ee = i(97669),
        ea = i(33583),
        ei = i(30792),
        et = i(3270),
        eo = i(50727),
        er = i(20894),
        es = i(23391),
        en = i(89018),
        el = i(34967),
        ec = i(19652),
        e_ = i(71653),
        ed = i(36155),
        eu = i(85379);
      let eA = {
          "Online PG Programmes": [
            {
              id: 1,
              course: "Online MBA",
              duration: "2 Years",
              img: _.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/online-mba",
            },
            {
              id: 2,
              course: "Online MCA",
              duration: "2 Years",
              img: d.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/online-mca",
            },
            {
              id: 3,
              course: "Online MCom",
              duration: "2 Years",
              img: u.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-mcom",
            },
            {
              id: 4,
              course: "Online MSc",
              duration: "2 Years",
              img: A.Z,
              degree: "/colleges?degree=MSc",
              path: "/courses/online-msc",
            },
            {
              id: 5,
              course: "Online MA",
              duration: "2 Years",
              img: m.Z,
              degree: "/colleges?degree=MA",
              path: "/courses/online-ma",
            },
            {
              id: 6,
              course: "M.Com with ACCA",
              duration: "2 Years",
              img: A.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-acca-mcom",
            },
            {
              id: 7,
              course: "Distance MBA",
              duration: "2 Years",
              img: g.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/distance-mba",
            },
            {
              id: 8,
              course: "Distance MCA",
              duration: "2 Years",
              img: h.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/distance-mca",
            },
            {
              id: 9,
              course: "Distance MCom",
              duration: "2 Years",
              img: b.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/distance-mcom",
            },
            {
              id: 10,
              course: "Distance MLIS",
              duration: "1 Year",
              img: B.Z,
              degree: "/colleges?degree=MLIS",
              path: "/courses/master-of-library-and-information-science",
            },
          ],
          "Online UG Programmes": [
            {
              id: 1,
              course: "Online BCA",
              duration: "3 Years",
              img: p.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/online-bca",
            },
            {
              id: 2,
              course: "Online BBA",
              duration: "2 Years",
              img: v.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/online-bba",
            },
            {
              id: 3,
              course: "Online BCom",
              duration: "3 Years",
              img: x.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/online-bcom",
            },
            {
              id: 4,
              course: "Distance BA",
              duration: "3 Years",
              img: M.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/distance-ba",
            },
            {
              id: 5,
              course: "Online BA",
              duration: "3 Years",
              img: f.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/online-ba",
            },
            {
              id: 6,
              course: "Distance BCA",
              duration: "3 Years",
              img: C.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/distance-bca",
            },
            {
              id: 7,
              course: "Distance BBA",
              duration: "3 Years",
              img: N.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/distance-bba",
            },
            {
              id: 8,
              course: "Distance BCom",
              duration: "3 Years",
              img: w.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/distance-bcom",
            },
            {
              id: 9,
              course: "Distance BSc",
              duration: "3 Years",
              img: M.Z,
              degree: "/colleges?degree=BSc",
              path: "/courses/distance-bsc",
            },
            {
              id: 10,
              course: "Distance BLIS",
              duration: "1 Years",
              img: U.Z,
              degree: "/colleges?degree=BLIS",
              path: "/courses/distance-bachelor-of-library-and-information-science",
            },
          ],
          "Diploma Courses": [
            {
              id: 1,
              course: "PGD Finance & Acc.",
              duration: "1-2 years",
              img: j.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-finance-accounting",
            },
            {
              id: 2,
              course: "PGD Data Science",
              duration: "1 to 2 years",
              img: I.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-data-science",
            },
            {
              id: 3,
              course: "Digital Marketing",
              duration: "1 to 2 years",
              img: Q.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/professional-diploma-digital-marketing",
            },
            {
              id: 4,
              course: "PGD Retail Mgmt. ",
              duration: "1 to 2 years",
              img: Z.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-retail-management",
            },
            {
              id: 5,
              course: "PGD Marketing",
              duration: "1 Year",
              img: S.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-marketing-management",
            },
            {
              id: 6,
              course: "PGD HR Mgmt.",
              duration: "1 to 2 years",
              img: R.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-hr-management",
            },
            {
              id: 7,
              course: "Banking & Finance",
              duration: "1 to 2 years",
              img: k.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/banking-finance-management-diploma",
            },
            {
              id: 8,
              course: "International Trade",
              duration: "12 Months",
              img: y.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/international-trade-management-diploma",
            },
            {
              id: 9,
              course: "Cyber Law",
              duration: "1 Year",
              img: D.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-in-cyber-law",
            },
            {
              id: 10,
              course: "PGD IT",
              duration: "1 Year",
              img: E.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-in-it",
            },
          ],
          "Executive Programmes": [
            {
              id: 1,
              course: "Master of Business  Administration",
              duration: "Upto 3 Years",
              img: L.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-mba",
            },
            {
              id: 2,
              course: "EPGD Business Analytics",
              duration: "15-16 months",
              img: T.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-pg-diploma-in-business-analytics",
            },
            {
              id: 3,
              course: "Operations and Supply Chain Mgmt.",
              duration: "6 to 12 months",
              img: W.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-operations-and-supply-chain-management",
            },
            {
              id: 4,
              course: "EDP Strategic Management",
              duration: "6 - 12 months",
              img: P.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-development-programme-in-strategic-management",
            },
            {
              id: 5,
              course: "Chief Financial Officer Programme",
              duration: " 6 to 12 months",
              img: O.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/chief-financial-officer-programme",
            },
            {
              id: 6,
              course: "Leadership and Management",
              duration: "4 to 12 months ",
              img: J.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-leadership-and-management",
            },
            {
              id: 7,
              course: "EP in General Managment",
              duration: "6 to 12 months",
              img: Y.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-general-management",
            },
            {
              id: 8,
              course: "EDP Strategic HR Management",
              duration: "6 to 12 months",
              img: G.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-development-programme-in-strategic-human-resource-management",
            },
            {
              id: 9,
              course: "EP in Project Management",
              duration: " 6 to 12 months",
              img: Q.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-project-management",
            },
            {
              id: 10,
              course: "Healthcare Service Management",
              duration: "6 to 12 months",
              img: F.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-healthcare-service-management",
            },
          ],
          "International Programmes": [
            {
              id: 1,
              course: "MBA - Golden Gate University",
              duration: "2 Years",
              img: et.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-golden-gate-university",
            },
            {
              id: 2,
              course: "MBA - Liverpool Business School",
              duration: "2 Years",
              img: eo.Z,
              degree: "/study-abroad",
              path: "/courses/mba-by-liverpool-business-school",
            },
            {
              id: 3,
              course: "MBA - Edgewood",
              duration: "2 Years",
              img: er.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-edgewood-college",
            },
            {
              id: 4,
              course: "MBA (Global) - Deakin",
              duration: "2 Years",
              img: es.Z,
              degree: "/study-abroad",
              path: "/courses/mba-global-from-deakin-business-school",
            },
            {
              id: 5,
              course: "MBA - UTICA",
              duration: "2 Years",
              img: en.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-utica-university",
            },
            {
              id: 6,
              course: "MBA (90 ECTS) - IU",
              duration: "2 Years",
              img: el.Z,
              degree: "/study-abroad",
              path: "/courses/mba-90-ects-by-iu-university",
            },
            {
              id: 7,
              course: "MBA - Clarkson",
              duration: "2 Years",
              img: ec.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-clarkson-university",
            },
            {
              id: 8,
              course: "MBA - ISM",
              duration: "2 Years",
              img: e_.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-ism-international-school-of-management-germany",
            },
            {
              id: 9,
              course: "MBA- Sunderland",
              duration: "2 Years",
              img: ed.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-university-of-sunderland-uk",
            },
            {
              id: 10,
              course: "MSBA - Golden Gate",
              duration: "2 Years",
              img: eu.Z,
              degree: "/study-abroad",
              path: "/courses/ms-in-business-analytics-by-golden-gate-university-usa",
            },
          ],
          "Free Courses": [
            {
              id: 1,
              course: "Data Analytics ",
              duration: "Upto 12 weeks",
              img: q.Z,
              path: "/freecourses/data-analytics-certification",
            },
            {
              id: 2,
              course: "Digital Marketing",
              duration: "Upto 6 months",
              img: $.Z,
              path: "/freecourses/digital-marketing-certification",
            },
            {
              id: 3,
              course: "Cyber Security ",
              duration: "Upto 3 months ",
              img: K.Z,
              path: "/freecourses/cyber-security-certification",
            },
            {
              id: 4,
              course: "MS Excel",
              duration: "Upto 7 days",
              img: z.Z,
              path: "/freecourses/certification-in-ms-excel",
            },
            {
              id: 5,
              course: "AI and ML ",
              duration: "Upto 12 hrs",
              img: H.Z,
              path: "/freecourses/certification-in-ai-and-ml",
            },
            {
              id: 6,
              course: "Marketing",
              duration: "Upto months",
              img: X.Z,
              path: "/freecourses/certification-in-marketing",
            },
            {
              id: 7,
              course: "Leadership Skills",
              duration: "Upto 4 weeks",
              img: V.Z,
              path: "/freecourses/certification-in-leadership-skills",
            },
            {
              id: 8,
              course: "Project Management",
              duration: "Upto 22 hrs",
              img: ea.Z,
              path: "/freecourses/project-management-certification",
            },
            {
              id: 9,
              course: "Supply Chain Mgmt.",
              duration: "Upto 28hrs",
              img: ei.Z,
              path: "/freecourses/supply-chain-management-certification",
            },
            {
              id: 10,
              course: "Financial Accounting",
              duration: "3 hrs to 3 months ",
              img: ee.Z,
              path: "/freecourses/financial-accounting-certification",
            },
          ],
        },
        em = (e) => {
          let { handleToggleModal: a } = e,
            i = Object.keys(eA),
            [r, _] = (0, n.useState)("Online PG Programmes"),
            d = eA[r],
            u = (0, c.useRouter)(),
            A = (e) => {
              _(e);
            },
            m = (e) => {
              u.push(e);
            };
          return (0, t.jsx)("div", {
            children: (0, t.jsxs)("div", {
              className: s().home_browse_course_container,
              children: [
                (0, t.jsx)("div", {
                  className: s().home_browse_course_list_main_box,
                  children: i.map((e) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: ""
                          .concat(s().home_course_list_single_box, " ")
                          .concat(r === e ? s().bgColor : ""),
                        style: { color: r === e ? "white" : "" },
                        onClick: () => A(e),
                        children: (0, t.jsx)("div", {
                          className: s().browse_slide_individual_box,
                          children: (0, t.jsx)("span", { children: e }),
                        }),
                      },
                      e
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: s().course_grid_box,
                  children: d.map((e) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: s().browse_course_card,
                        children: [
                          (0, t.jsx)(
                            o.default,
                            {
                              href: e.path,
                              style: { textDecoration: "none" },
                              onClick: () => {
                                a && a();
                              },
                              prefetch: !0,
                              children: (0, t.jsxs)("div", {
                                className: s().browse_course_card_top_container,
                                children: [
                                  (0, t.jsx)("div", {
                                    children: (0, t.jsx)(l.default, {
                                      className: s().browse_course_card_img,
                                      src: e.img,
                                      alt: "img",
                                      width: 200,
                                      height: 180,
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          s().browse_course_card_heading,
                                        children: e.course,
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          s().browse_course_card_duration,
                                        children: ["Duration: ", e.duration],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.id
                          ),
                          (0, t.jsx)("div", {
                            className: s().browse_course_card_view,
                            onClick: () => m(e.path),
                            children: "Read More",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          });
        };
    },
    7713: function (e, a, i) {
      "use strict";
      i.r(a);
      var t = i(76136),
        o = i(15082),
        r = i(92937),
        s = i(20319),
        n = i.n(s),
        l = i(68271),
        c = i(52088);
      a.default = () => {
        let [e, a] = (0, o.useState)(!1),
          [i, s] = (0, o.useState)(!1);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("button", {
              className: n().enquirynow_btn,
              style: { transformOrigin: "bottom right" },
              onClick: () => a(!0),
              children: [(0, t.jsx)(l.Zlu, {}), "\xa0Enquire Now"],
            }),
            e &&
              (0, t.jsx)(r.default, {
                onClose: () => a(!1),
                openthank: () => s(!0),
              }),
            i && (0, t.jsx)(c.Z, { onCloseThank: () => s(!1) }),
          ],
        });
      };
    },
    52088: function (e, a, i) {
      "use strict";
      var t = i(76136),
        o = i(78774),
        r = i(24218),
        s = i.n(r),
        n = i(34413),
        l = i(71758),
        c = i(73451);
      a.Z = (e) => {
        let { onCloseThank: a } = e;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className: s().modal_overlay,
            children: (0, t.jsxs)("div", {
              className: s().modal,
              children: [
                (0, t.jsx)("button", {
                  className: s().close_button,
                  onClick: a,
                  children: (0, t.jsx)(o.$iT, {
                    fontSize: "1.5em",
                    color: "#000",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: s().thankxContainer,
                  children: [
                    (0, t.jsx)(c.$_b, {
                      color: "var(--dark-blue)",
                      fontSize: "4rem",
                    }),
                    (0, t.jsx)("h3", {
                      className: s().thankyouText,
                      children: "Thank You !",
                    }),
                    (0, t.jsx)("p", {
                      className: s().call,
                      children: "Our Counsellor Reach You Soon Or Call Us On",
                    }),
                    (0, t.jsx)("p", {
                      className: s().phoneIVR,
                      children: "+91-9228122474",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("p", {
                          className: s().enquireDetail,
                          children: [
                            (0, t.jsx)(n.y5A, {}),
                            "Your enquiry has been successfully received.",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className: s().enquireDetail,
                          children: [
                            (0, t.jsx)(n.y5A, {}),
                            " Counsellors will reach you soon.",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className: s().enquireDetail,
                          children: [
                            (0, t.jsx)(n.y5A, {}),
                            "Download Prospectus from below.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("a", {
                      href: "/file/LR_Brochure.pdf",
                      onClick: () => {
                        window.open(
                          "/file/LR_Brochure.pdf",
                          "_blank",
                          "noopener",
                          "noreferrer"
                        );
                      },
                      className: s().download,
                      download: !0,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        (0, t.jsx)(l.sjv, {
                          color: "red",
                          fontSize: "2rem",
                          className: s().downloadIcon,
                        }),
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("p", { children: "Download Brochure" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    47064: function (e, a, i) {
      "use strict";
      i.d(a, {
        default: function () {
          return aP;
        },
      });
      var t = i(76136),
        o = i(15082),
        r = i(68271),
        s = i(82058),
        n = i.n(s),
        l = i(58149),
        c = i(88018),
        _ = i(90827),
        d = i.n(_),
        u = i(71157),
        A = i(91058),
        m = i(65257),
        g = i(86978),
        h = i(65814),
        b = i.n(h),
        p = i(28123),
        v = i(34413);
      function x(e) {
        let { name: a, data: i } = e,
          [r, s] = (0, o.useState)(!1),
          n = (0, o.useRef)(null),
          l = () => {
            s(!r);
          },
          c = (e) => {
            n.current && !n.current.contains(e.target) && l();
          };
        return (
          (0, o.useEffect)(
            () => (
              r
                ? ((document.body.style.overflow = "hidden"),
                  document.addEventListener("click", c))
                : ((document.body.style.overflow = "auto"),
                  document.removeEventListener("click", c)),
              () => {
                (document.body.style.overflow = "auto"),
                  document.removeEventListener("click", c);
              }
            ),
            [r]
          ),
          (0, t.jsxs)("div", {
            className: b().ModalContainer,
            children: [
              (0, t.jsxs)("div", {
                className: b().buttonXl,
                onClick: l,
                children: [
                  a,
                  r
                    ? (0, t.jsx)(v.rWj, { style: { marginLeft: "4px" } })
                    : (0, t.jsx)(p.OrA, { style: { marginLeft: "4px" } }),
                ],
              }),
              r &&
                (0, t.jsx)("div", {
                  className: b().modal,
                  ref: n,
                  children: (0, t.jsx)("div", {
                    className: b().modalDialog,
                    children: (0, t.jsxs)("div", {
                      className: b().modalContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: b().modalHeader,
                          children: (0, t.jsx)("button", {
                            type: "button",
                            className: b().modalCloseBtn,
                            onClick: l,
                            children: (0, t.jsx)(A.oHP, {}),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: b().modalBody,
                          children: i,
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var M = i(53669),
        f = i.n(M),
        C = {
          src: "/_next/static/media/maharastra.e72b4e18.png",
          height: 62,
          width: 75,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAGFBMVEWGhoaFhYV/f3+GhoaFhYWFhYWLi4uFhYVXZ4KDAAAACHRSTlNFeARqMZAbV6izBWcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicBcGBAQAwCIMwaNX9//ESEu5ISHY1Abb4QIVW5M0whfGuA3b7tn4QJACOmmWaRgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        N = {
          src: "/_next/static/media/Delhi.c6bd79a7.png",
          height: 62,
          width: 45,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAGFBMVEWFhYWEhISEhISFhYWFhYWFhYVMaXGEhIRNt+bcAAAACHRSTlN/Y1FEoTMAtA2e8AIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicJcGxAQAgDMMwO2nh/48ZkDgBD96ZyzeYGGkgJXSR2jU43fEBC6YAaoi0cncAAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        },
        w = {
          src: "/_next/static/media/Bengaluru.34c17cd4.png",
          height: 62,
          width: 78,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEWEhISFhYWEhISgoKCFhYWFhYWEhISDg4N5bzfqAAAACHRSTlOEm3ICXjozIpJWOO4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicFcm5EQAwCASxvQfov2OPlYrkZi4hK6MNdqXaCAMIUf0EOlt4DhsAboH6DE4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        },
        U = {
          src: "/_next/static/media/Hyderabad.a380f818.png",
          height: 64,
          width: 68,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEWEhISEhISDg4OEhISLi4uFhYWGhoaEhISFhYWFhYWP2ZseAAAACnRSTlOBVSSQBm8/aLEcGj7WpgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJxFyLENwEAMw0BaL9n+/RcOkiYgriG2WrbJHc2N2eJQKzYcsqJTVdOC89X0/OeVByM3ANse7DzFAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        B = {
          src: "/_next/static/media/Ahmedabad.a0ac2fa0.png",
          height: 62,
          width: 75,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEWEhISGhoaFhYWEhISEhISEhIRMaXGBgYF6enokyVngAAAACXRSTlNlglOaN3IAHAznuAYVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBBwEAIADDsO4B/hWTcGrwPaCBZKQk0bBlRpH0rgLuzlvLSB34EaQAl4A4nboAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        j = {
          src: "/_next/static/media/punjab.6953ca4d.png",
          height: 62,
          width: 75,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAFVBMVEVNTU1QUFBQUFBQUFBQUFBPT09XV1d2b0s9AAAAB3RSTlMCV0pAeGYjkQVfUAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwliEEOADAMgkTt/v/kpSkHQpCkoGP6Lph1HLCtaXFbGfahxAT7AwpnAGM9TEk5AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        k = {
          src: "/_next/static/media/up.ca05e7bc.webp",
          height: 63,
          width: 76,
          blurDataURL:
            "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAAAECsAAAAAAAZjaQ4AAAAFRQQARQcAAH+2uLW7kAAAq7mkoLywDQCusIVss7URFLmzlomvwyYAVlA4IDIAAACQAQCdASoIAAcAAkA4JaQAAlwlxgAA/siobZnCklnPoOKfWbIvR6OD0ZFjyRjGoAAAAA==",
          blurWidth: 8,
          blurHeight: 7,
        },
        D = {
          src: "/_next/static/media/rajasthan.9f076684.png",
          height: 62,
          width: 75,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAFVBMVEWKioqKioqLi4uKiopMaXGPj49/f3+woSw3AAAAB3RSTlNhRjp7ABMMnlLOewAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJw1yUEKACAMxMBkbf3/k6UFcxoIVa1dxY1gmrDlQ8KsRWaIZ/MBDCYAVVeo+CkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        y = {
          src: "/_next/static/media/Chandigarh.f50ca456.png",
          height: 63,
          width: 83,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEWFhYWEhISFhYWFhYWFhYWNjY2EhITeywb5AAAAB3RSTlNEbTQTIgODIxJSVgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwdyMENwEAQArEBFvov+ZTIP9NqUkstIZdgDOEuPzD5Fm3nTQ8NaACAxC823wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        },
        I = {
          src: "/_next/static/media/tamilnadu.d3b30745.png",
          height: 62,
          width: 75,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAGFBMVEVGRkZnZ2dpaWlqampqampoaGhpaWloaGhsyntkAAAACHRSTlMCNG5Ufx1IjzSGCOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicJcjJDQAwCMTAvYD+O44gfo0MABKumqlDJz4o0S5aMRdNfsgt4gEMvQBp0XzNIwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        R = () => {
          let [e, a] = (0, o.useState)(!1),
            i = () => {
              a(!e);
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(x, {
              name: "Top University",
              data: (0, t.jsx)(Z, { handleClick: i }),
              showModal: e,
              toggleModal: i,
            }),
          });
        };
      let S = [
        {
          id: 1,
          name: "Maharashtra",
          img: C,
          url: "/colleges?state=Maharashtra",
        },
        { id: 2, name: "New Delhi", img: N, url: "/colleges?state=New Delhi" },
        { id: 3, name: "Karnataka", img: w, url: "/colleges?state=Karnataka" },
        { id: 4, name: "Telangana", img: U, url: "/colleges?state=Telangana" },
        { id: 5, name: "Gujarat", img: B, url: "/colleges?state=Gujarat" },
        { id: 6, name: "Punjab", img: j, url: "/colleges?state=Punjab" },
        {
          id: 7,
          name: "Uttar Pradesh",
          img: k,
          url: "/colleges?state=Uttar Pradesh",
        },
        { id: 8, name: "Rajasthan", img: D, url: "/colleges?state=Rajasthan" },
        { id: 9, name: "Haryana", img: y, url: "/colleges?state=Haryana" },
        {
          id: 10,
          name: "Tamil Nadu",
          img: I,
          url: "/colleges?state=Tamil Nadu",
        },
      ];
      function Z(e) {
        let { handleToggleModal: a } = e;
        return (0, t.jsxs)("div", {
          className: f().topUniversitiesMegaMenu__Container,
          children: [
            (0, t.jsx)("br", {}),
            (0, t.jsxs)("div", {
              className: f().topUniversitiesModal__citiesContainer,
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("p", {
                    className:
                      f().topUniversitiesMegaMenu__citiesContainer_text,
                    children: "Popular States",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: f().topUniversitiesModal__citiesContainer_flexRow,
                  children: S.map((e, i) =>
                    (0, t.jsx)(
                      l.default,
                      {
                        href: e.url,
                        onClick: () => {
                          a();
                        },
                        style: { textDecoration: "none" },
                        children: (0, t.jsxs)(
                          "div",
                          {
                            className:
                              f().topUniversitiesMegaMenu__cityContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  f().topUniversitiesMegaMenu__cityImgContainer,
                                children: (0, t.jsx)(c.default, {
                                  src: e.img,
                                  alt: "img",
                                  style: { color: "red" },
                                  color: "red",
                                  className: f().cityImage,
                                }),
                              }),
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)("p", {
                                  className:
                                    f().topUniversitiesMegaMenu__city_text,
                                  children: e.name,
                                }),
                              }),
                            ],
                          },
                          e.id
                        ),
                      },
                      i
                    )
                  ),
                }),
                (0, t.jsx)(l.default, {
                  href: "/colleges",
                  prefetch: !0,
                  onClick: () => {
                    a();
                  },
                  style: { textDecoration: "none" },
                  children: (0, t.jsx)("div", {
                    className: f().topUniversitiesMegaMenu__viewAllBtn,
                    children: "View All",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var E = i(68287),
        Q = i.n(E);
      let G = [
          {
            id: 1,
            name: "Maharashtra",
            img: C,
            url: "/colleges?state=Maharashtra",
          },
          {
            id: 2,
            name: "New Delhi",
            img: N,
            url: "/colleges?state=New Delhi",
          },
          {
            id: 3,
            name: "Karnataka",
            img: w,
            url: "/colleges?state=Karnataka",
          },
          {
            id: 4,
            name: "Telangana",
            img: U,
            url: "/colleges?state=Telangana",
          },
          { id: 5, name: "Gujarat", img: B, url: "/colleges?state=Gujarat" },
          { id: 6, name: "Punjab", img: j, url: "/colleges?state=Punjab" },
          {
            id: 7,
            name: "Tamil Nadu",
            img: I,
            url: "/colleges?state=Tamil Nadu",
          },
          {
            id: 8,
            name: "Rajasthan",
            img: D,
            url: "/colleges?state=Rajasthan",
          },
          { id: 9, name: "Haryana", img: y, url: "/colleges?state=Haryana" },
        ],
        P = (e) => {
          let { closeDrawer: a } = e;
          return (0, t.jsx)("div", {
            className: Q().mob_topUniversitiesMegaMenu__Container,
            children: (0, t.jsxs)("div", {
              className: Q().mob_topUniversitiesModal__citiesContainer,
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("p", {
                    className:
                      Q().mob_topUniversitiesMegaMenu__citiesContainer_text,
                    children: "Popular Cities",
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    Q().mob_topUniversitiesModal__citiesContainer_flexRow,
                  children: G.map((e, i) =>
                    (0, t.jsx)(
                      l.default,
                      {
                        href: e.url,
                        style: { textDecoration: "none" },
                        onClick: () => {
                          a();
                        },
                        children: (0, t.jsxs)(
                          "div",
                          {
                            className:
                              Q().mob_topUniversitiesMegaMenu__cityContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  Q()
                                    .mob_topUniversitiesMegaMenu__cityImgContainer,
                                children: (0, t.jsx)(c.default, {
                                  src: e.img,
                                  alt: "img",
                                  className: Q().mob_top_uni_cityImage,
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  Q()
                                    .mob_topUniversitiesMegaMenu__city_text_container,
                                children: (0, t.jsx)("p", {
                                  className:
                                    Q().mob_topUniversitiesMegaMenu__city_text,
                                  style: { margin: "0px", padding: "0px" },
                                  children: e.name,
                                }),
                              }),
                            ],
                          },
                          e.id
                        ),
                      },
                      i
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: Q().mob_topUniversitiesMegaMenu__viewAllBtn,
                  children: (0, t.jsx)(l.default, {
                    href: "/colleges",
                    onClick: () => {
                      a();
                    },
                    style: { textDecoration: "none", color: "white" },
                    children: " View All",
                  }),
                }),
              ],
            }),
          });
        };
      var L = i(26189),
        T = i.n(L),
        Y = i(36451),
        F = i(1626),
        J = i(80411),
        O = i(78504),
        W = i(73716),
        H = i(21925),
        V = i(67003),
        X = i(94204),
        z = i(88876),
        q = i(55001),
        K = i(25668),
        $ = i(72599),
        ee = i(42568),
        ea = i(1043),
        ei = i(12020),
        et = i(5516),
        eo = i(10237),
        er = i(77967),
        es = i(7807),
        en = i(46273),
        el = i(45050),
        ec = i(32316),
        e_ = i(36361),
        ed = i(5349),
        eu = i(30256),
        eA = i(54448),
        em = i(26886),
        eg = i(32861),
        eh = i(49647),
        eb = i(19914),
        ep = i(4390),
        ev = i(13750),
        ex = i(91229),
        eM = i(32312),
        ef = i(63876),
        eC = i(52222),
        eN = i(26455),
        ew = i(97454),
        eU = i(26311),
        eB = i(77443),
        ej = i(51462),
        ek = i(78810),
        eD = i(79506),
        ey = i(63038),
        eI = i(97669),
        eR = i(33583),
        eS = i(30792),
        eZ = i(83946),
        eE = i(3270),
        eQ = i(50727),
        eG = i(20894),
        eP = i(23391),
        eL = i(89018),
        eT = i(34967),
        eY = i(19652),
        eF = i(71653),
        eJ = i(36155),
        eO = i(85379);
      let eW = {
          "Online PG Programmes": [
            {
              id: 1,
              course: "Online MBA",
              duration: "2 Years",
              img: Y.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/online-mba",
            },
            {
              id: 2,
              course: "Online MCA",
              duration: "2 Years",
              img: F.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/online-mca",
            },
            {
              id: 3,
              course: "Online MCom",
              duration: "2 Years",
              img: J.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-mcom",
            },
            {
              id: 4,
              course: "Online MSc",
              duration: "2 Years",
              img: O.Z,
              degree: "/colleges?degree=MSc",
              path: "/courses/online-msc",
            },
            {
              id: 5,
              course: "Online MA",
              duration: "2 Years",
              img: W.Z,
              degree: "/colleges?degree=MA",
              path: "/courses/online-ma",
            },
            {
              id: 6,
              course: "M.Com with ACCA",
              duration: "2 Years",
              img: O.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-acca-mcom",
            },
            {
              id: 7,
              course: "Distance MBA",
              duration: "2 Years",
              img: H.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/distance-mba",
            },
            {
              id: 8,
              course: "Distance MCA",
              duration: "2 Years",
              img: V.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/distance-mca",
            },
            {
              id: 9,
              course: "Distance MCom",
              duration: "2 Years",
              img: X.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/distance-mcom",
            },
            {
              id: 10,
              course: "Distance MLIS",
              duration: "1 Year",
              img: er.Z,
              degree: "/colleges?degree=MLIS",
              path: "/courses/distance-m.com",
            },
          ],
          "Online UG Programmes": [
            {
              id: 1,
              course: "Online BCA",
              duration: "3 Years",
              img: z.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/online-bca",
            },
            {
              id: 2,
              course: "Online BBA",
              duration: "2 Years",
              img: q.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/online-bba",
            },
            {
              id: 3,
              course: "Online BCom",
              duration: "3 Years",
              img: K.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/online-bcom",
            },
            {
              id: 4,
              course: "Distance BA",
              duration: "3 Years",
              img: $.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/distance-ba",
            },
            {
              id: 5,
              course: "Online BA",
              duration: "3 Years",
              img: ee.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/online-ba",
            },
            {
              id: 6,
              course: "Distance BCA",
              duration: "3 Years",
              img: ea.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/distance-bca",
            },
            {
              id: 7,
              course: "Distance BBA",
              duration: "3 Years",
              img: ei.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/distance-bba",
            },
            {
              id: 8,
              course: "Distance BCom",
              duration: "3 Years",
              img: et.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/distance-bcom",
            },
            {
              id: 9,
              course: "Distance BSc",
              duration: "3 Years",
              img: $.Z,
              degree: "/colleges?degree=BSc",
              path: "/courses/distance-bsc",
            },
            {
              id: 10,
              course: "Distance BLIS",
              duration: "1 Years",
              img: eo.Z,
              degree: "/colleges?degree=BLIS",
              path: "/courses/distance-b.sc",
            },
          ],
          "Diploma Courses": [
            {
              id: 1,
              course: "PGD Finance & Acc.",
              duration: "1-2 years",
              img: es.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-finance-accounting",
            },
            {
              id: 2,
              course: "PGD Data Science",
              duration: "1 to 2 years",
              img: e_.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-data-science",
            },
            {
              id: 3,
              course: "Digital Marketing",
              duration: "1 to 2 years",
              img: eg.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/professional-diploma-digital-marketing",
            },
            {
              id: 4,
              course: "PGD Retail Mgmt. ",
              duration: "1 to 2 years",
              img: eA.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-retail-management",
            },
            {
              id: 5,
              course: "PGD Marketing",
              duration: "1 Year",
              img: eu.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-marketing-management",
            },
            {
              id: 6,
              course: "PGD HR Mgmt.",
              duration: "1 to 2 years",
              img: ed.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-hr-management",
            },
            {
              id: 7,
              course: "Banking & Finance",
              duration: "1 to 2 years",
              img: en.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/banking-finance-management-diploma",
            },
            {
              id: 8,
              course: "International Trade",
              duration: "12 Months",
              img: ec.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/international-trade-management-diploma",
            },
            {
              id: 9,
              course: "Cyber Law",
              duration: "1 Year",
              img: el.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-in-cyber-law",
            },
            {
              id: 10,
              course: "PGD IT",
              duration: "1 Year",
              img: em.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-in-it",
            },
          ],
          "Executive Programmes": [
            {
              id: 1,
              course: "Master of Business  Administration",
              duration: "Upto 3 Years",
              img: ep.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-mba",
            },
            {
              id: 2,
              course: "EPGD Business Analytics",
              duration: "15-16 months",
              img: ev.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-pg-diploma-in-business-analytics",
            },
            {
              id: 3,
              course: "Operations and Supply Chain Mgmt.",
              duration: "6 to 12 months",
              img: eN.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-operations-and-supply-chain-management",
            },
            {
              id: 4,
              course: "EDP Strategic Management",
              duration: "6 - 12 months",
              img: eb.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-development-programme-in-strategic-management",
            },
            {
              id: 5,
              course: "Chief Financial Officer Programme",
              duration: " 6 to 12 months",
              img: eC.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/chief-financial-officer-programme",
            },
            {
              id: 6,
              course: "Leadership and Management",
              duration: "4 to 12 months ",
              img: ef.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-leadership-and-management",
            },
            {
              id: 7,
              course: "EP in General Managment",
              duration: "6 to 12 months",
              img: ex.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-general-management",
            },
            {
              id: 8,
              course: "EDP Strategic HR Management",
              duration: "6 to 12 months",
              img: eh.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-development-programme-in-strategic-human-resource-management",
            },
            {
              id: 9,
              course: "EP in Project Management",
              duration: " 6 to 12 months",
              img: eg.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-project-management",
            },
            {
              id: 10,
              course: "Healthcare Service Management",
              duration: "6 to 12 months",
              img: eM.Z,
              degree: "/colleges?degree=Executive course",
              path: "/courses/executive-programme-in-healthcare-service-management",
            },
          ],
          "International Programmes": [
            {
              id: 1,
              course: "MBA - Golden Gate University",
              duration: "2 Years",
              img: eE.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-golden-gate-university",
            },
            {
              id: 2,
              course: "MBA - Liverpool Business School",
              duration: "2 Years",
              img: eQ.Z,
              degree: "/study-abroad",
              path: "/courses/mba-by-liverpool-business-school",
            },
            {
              id: 3,
              course: "MBA - Edgewood",
              duration: "2 Years",
              img: eG.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-edgewood-college",
            },
            {
              id: 4,
              course: "MBA (Global) - Deakin",
              duration: "2 Years",
              img: eP.Z,
              degree: "/study-abroad",
              path: "/courses/mba-global-from-deakin-business-school",
            },
            {
              id: 5,
              course: "MBA - UTICA",
              duration: "2 Years",
              img: eL.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-utica-university",
            },
            {
              id: 6,
              course: "MBA (90 ECTS) - IU",
              duration: "2 Years",
              img: eT.Z,
              degree: "/study-abroad",
              path: "/courses/mba-90-ects-by-iu-university",
            },
            {
              id: 7,
              course: "MBA - Clarkson",
              duration: "2 Years",
              img: eY.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-clarkson-university",
            },
            {
              id: 8,
              course: "MBA - ISM",
              duration: "2 Years",
              img: eF.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-ism-international-school-of-management-germany",
            },
            {
              id: 9,
              course: "MBA- Sunderland",
              duration: "2 Years",
              img: eJ.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-university-of-sunderland-uk",
            },
            {
              id: 10,
              course: "MSBA - Golden Gate",
              duration: "2 Years",
              img: eO.Z,
              degree: "/study-abroad",
              path: "/courses/ms-in-business-analytics-by-golden-gate-university-usa",
            },
          ],
          "Free Courses": [
            {
              id: 1,
              course: "Data Analytics ",
              duration: "Upto 12 weeks",
              img: ek.Z,
              path: "/freecourses/data-analytics-certification",
            },
            {
              id: 2,
              course: "Digital Marketing",
              duration: "Upto 6 months",
              img: ey.Z,
              path: "/freecourses/digital-marketing-certification",
            },
            {
              id: 3,
              course: "Cyber Security ",
              duration: "Upto 3 months ",
              img: eD.Z,
              path: "/freecourses/cyber-security-certification",
            },
            {
              id: 4,
              course: "MS Excel",
              duration: "Upto 7 days",
              img: ej.Z,
              path: "/freecourses/certification-in-ms-excel",
            },
            {
              id: 5,
              course: "AI and ML ",
              duration: "Upto 12 hrs",
              img: ew.Z,
              path: "/freecourses/certification-in-ai-and-ml",
            },
            {
              id: 6,
              course: "Marketing",
              duration: "Upto months",
              img: eB.Z,
              path: "/freecourses/certification-in-marketing",
            },
            {
              id: 7,
              course: "Leadership Skills",
              duration: "Upto 4 weeks",
              img: eU.Z,
              path: "/freecourses/certification-in-leadership-skills",
            },
            {
              id: 8,
              course: "Project Management",
              duration: "Upto 22 hrs",
              img: eR.Z,
              path: "/freecourses/project-management-certification",
            },
            {
              id: 9,
              course: "Supply Chain Mgmt.",
              duration: "Upto 28hrs",
              img: eS.Z,
              path: "/freecourses/supply-chain-management-certification",
            },
            {
              id: 10,
              course: "Financial Accounting",
              duration: "3 hrs to 3 months ",
              img: eI.Z,
              path: "/freecourses/financial-accounting-certification",
            },
          ],
        },
        eH = () => (0, t.jsx)("div", { children: (0, t.jsx)(eV, {}) }),
        eV = () => {
          let e = Object.keys(eW),
            [a, i] = (0, o.useState)("Online PG Programmes"),
            r = eW[a],
            s = (0, eZ.useRouter)(),
            n = (e) => {
              i(e);
            },
            _ = (e) => {
              s.push(e);
            };
          return (0, t.jsx)("div", {
            className: T().mob_nav_browse_container,
            children: (0, t.jsxs)("div", {
              className: T().mob_nav_browse_course_container,
              children: [
                (0, t.jsx)("div", {
                  className: T().mob_nav_browse_course_list_main_box,
                  children: e.map((e) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: ""
                          .concat(T().mob_nav_course_list_single_box, " ")
                          .concat(a === e ? T().bgColor : ""),
                        style: { color: a === e ? "white" : "" },
                        onClick: () => n(e),
                        children: (0, t.jsx)("div", {
                          className: T().mob_nav_browse_slide_individual_box,
                          children: (0, t.jsx)("span", { children: e }),
                        }),
                      },
                      e
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: T().mob_nav_course_grid_box,
                  children: r.map((e, a) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: T().mob_nav_browse_course_card,
                        children: [
                          (0, t.jsx)(
                            l.default,
                            {
                              href: e.path,
                              style: { textDecoration: "none" },
                              onClick: () => {
                                closeDrawer();
                              },
                              children: (0, t.jsxs)("div", {
                                className:
                                  T().mob_nav_browse_course_card_top_container,
                                children: [
                                  (0, t.jsx)("div", {
                                    children: (0, t.jsx)(c.default, {
                                      className:
                                        T().mob_nav_browse_course_card_img,
                                      src: e.img,
                                      alt: "img",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          T()
                                            .mob_nav_browse_course_card_heading,
                                        children: e.course,
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          T()
                                            .mob_nav_browse_course_card_duration,
                                        children: ["Duration: ", e.duration],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            a
                          ),
                          (0, t.jsx)("div", {
                            className: T().mob_nav_browse_course_card_view,
                            onClick: () => _(e.path),
                            children: "View More",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          });
        };
      var eX = i(6403),
        ez = i(37278),
        eq = i(73451);
      let eK = (0, eX.default)(
          () =>
            Promise.all([
              i.e(6153),
              i.e(1889),
              i.e(6402),
              i.e(4582),
              i.e(9760),
              i.e(8694),
            ]).then(i.bind(i, 83233)),
          { loadableGenerated: { webpack: () => [83233] } }
        ),
        e$ = (0, eX.default)(
          () =>
            Promise.all([i.e(6153), i.e(6402), i.e(2290)]).then(
              i.bind(i, 74361)
            ),
          { loadableGenerated: { webpack: () => [74361] } }
        );
      var e0 = function () {
        let e, a;
        let [i, s] = (0, o.useState)(!1),
          [n, c] = (0, o.useState)(!1),
          [_, u] = (0, o.useState)(!1),
          [h, b] = (0, o.useState)(!1),
          [p, v] = (0, o.useState)(!1),
          [x, M] = (0, o.useState)(!1),
          { data: f } = (0, ez.useSession)(),
          C = (0, eZ.useRouter)(),
          N = () => {
            s(!i);
          },
          w = (e) => {
            s(!1), C.push(e);
          };
        (e = localStorage.getItem("LR_Num")),
          (a = localStorage.getItem("LR_fullName"));
        let U = async () => {
          localStorage.removeItem("LR_Num"),
            localStorage.removeItem("email"),
            localStorage.removeItem("LR_token"),
            localStorage.removeItem("LR_fullName"),
            M(!x),
            C.push("/");
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: d().mobileNavMenuContainer,
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("button", {
                    className: d().menu,
                    onClick: N,
                    children: (0, t.jsx)(g.vHB, {}),
                  }),
                  i &&
                    (0, t.jsxs)("div", {
                      className: d().drawer,
                      children: [
                        (0, t.jsx)("div", {
                          className: d().drawerButton,
                          onClick: N,
                          children: (0, t.jsx)(A.oHP, {
                            color: "white",
                            className: d().MobNav_close_icon,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsxs)("div", {
                              className: d().MobNav_loginContainer,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: d().MobNav_login,
                                  children: [
                                    (0, t.jsx)(r.BKo, {
                                      className: d().MobNav_login_icon,
                                    }),
                                    (0, t.jsx)("div", {
                                      children: (0, t.jsx)("div", {
                                        className: d().MobNav_login_text,
                                        children:
                                          e || a || f
                                            ? (0, t.jsx)("p", {
                                                onClick: U,
                                                children: "Logout",
                                              })
                                            : (0, t.jsx)("p", {
                                                onClick: () => b(!0),
                                                children: "Login",
                                              }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("button", {
                                  onClick: () => w("/freecourses"),
                                  className: d().MobNav_freeCoursesBtn,
                                  children: "Free Courses",
                                }),
                              ],
                            }),
                            f
                              ? (0, t.jsx)("p", {
                                  className: d().MobNav_loginContainer,
                                  style: { color: "#fff" },
                                  children: f.user.email,
                                })
                              : (0, t.jsx)("p", {
                                  className: d().MobNav_loginContainer,
                                }),
                            (0, t.jsxs)("p", {
                              className: d().MobNav_loginContainer,
                              style: { color: "#fff" },
                              onClick: () => C.push("/user-dashboard"),
                              children: [
                                a && (0, t.jsx)(t.Fragment, { children: a }),
                                e &&
                                  (0, t.jsx)(t.Fragment, {
                                    children: "Hello User",
                                  }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: d().menuItemsContainerOne,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: d().phoneBtn,
                                  children: [
                                    " ",
                                    (0, t.jsx)(eq.XqJ, { fontSize: "1.5rem" }),
                                    (0, t.jsx)("a", {
                                      href: "tel:+918750054277",
                                      style: {
                                        textDecoration: "none",
                                        color: "var(--white)",
                                      },
                                      children: "8750054277",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: d().menuExploreCourses,
                                  onClick: () => {
                                    u(!_);
                                  },
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "Explore Courses",
                                      " ",
                                      _
                                        ? (0, t.jsx)(m.Vmf, {})
                                        : (0, t.jsx)(m.OId, {}),
                                    ],
                                  }),
                                }),
                                _ &&
                                  (0, t.jsx)("div", {
                                    className:
                                      d()
                                        .mobile_nav_explore_course_modal_container,
                                    children: (0, t.jsx)(eH, {}),
                                  }),
                                (0, t.jsx)("div", {
                                  className: d().topUniversities,
                                  onClick: () => {
                                    c(!n);
                                  },
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "Top Universities",
                                      " ",
                                      n
                                        ? (0, t.jsx)(m.Vmf, {})
                                        : (0, t.jsx)(m.OId, {}),
                                    ],
                                  }),
                                }),
                                n &&
                                  (0, t.jsx)("div", {
                                    className:
                                      d()
                                        .mobile_nav_top_university_modal_container,
                                    children: (0, t.jsx)(P, {
                                      closeDrrawer: () => {
                                        s(!1);
                                      },
                                    }),
                                  }),
                                (0, t.jsx)("div", {
                                  className: d().lrTag,
                                  onClick: () => w("/online-video-meet"),
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      " ",
                                      (0, t.jsx)(A.FI4, {
                                        className: d().flashingIcon,
                                      }),
                                      " ",
                                      "Free Counselling",
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: d().lrTag,
                                  onClick: () => w("/ai-college-finder"),
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "College Finder",
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: d().glowEffect,
                                        children: "AI Based",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: d().workWithUs,
                                  onClick: () => w("/career"),
                                  children: (0, t.jsx)("p", {
                                    children: "Work With us",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: d().blogs,
                                  onClick: () => w("/blog"),
                                  children: (0, t.jsx)("p", {
                                    children: "Blogs",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: d().contactUs,
                                  onClick: () => w("/contact-us"),
                                  children: (0, t.jsx)("p", {
                                    children: "Contact Us",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: d().menuItemsContainerTwo,
                              children: [
                                (0, t.jsx)("div", {
                                  className: "menuTopUniversitiesAndCollege",
                                  onClick: () => w("/colleges"),
                                  children: (0, t.jsx)("p", {
                                    children: "Top Universities and Colleges",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuTrendingCourses",
                                  onClick: () => w("/"),
                                  children: (0, t.jsxs)(l.default, {
                                    href: "#courses",
                                    style: {
                                      textDecoration: "none",
                                      color: "white",
                                    },
                                    children: [
                                      " ",
                                      (0, t.jsx)("p", {
                                        children: "Trending Courses",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuStudyAbroad",
                                  onClick: () => w("/study-abroad"),
                                  children: (0, t.jsx)("p", {
                                    children: "Study Abroad",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuAdmission",
                                  onClick: () => w("/exams"),
                                  children: (0, t.jsx)("p", {
                                    children: "Entrance Exams",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuAdmission",
                                  onClick: () => w("/web-stories"),
                                  children: (0, t.jsx)("p", {
                                    children: "Web Stories",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: d().closeBottomButtonContainer,
                          children: (0, t.jsx)("button", {
                            className: d().closeBottomButton,
                            onClick: N,
                            children: "close",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            h &&
              (0, t.jsx)(eK, {
                onClose: () => {
                  b(!1);
                },
                onOpen: () => {
                  b(!1), v(!0);
                },
              }),
            p &&
              (0, t.jsx)(e$, {
                onClose: () => {
                  v(!1);
                },
                openSign: () => {
                  b(!0);
                },
              }),
          ],
        });
      };
      let e4 = () =>
        (0, t.jsxs)("div", {
          className: d().mobileNav,
          children: [
            (0, t.jsx)("div", {
              className: d().mobileNavLogo,
              children: (0, t.jsx)(l.default, {
                href: "/",
                children: (0, t.jsx)(c.default, {
                  src: u.Z,
                  alt: "icon",
                  className: d().mobileNavLogoImg,
                }),
              }),
            }),
            (0, t.jsxs)("div", {
              className: d().mobileNavMenu,
              children: [(0, t.jsx)(e0, {}), " "],
            }),
          ],
        });
      var e6 = i(19932),
        e1 = i(17471);
      let e2 = (0, eX.default)(
          () =>
            Promise.all([
              i.e(6153),
              i.e(1889),
              i.e(6402),
              i.e(4582),
              i.e(9760),
              i.e(8694),
            ]).then(i.bind(i, 83233)),
          { loadableGenerated: { webpack: () => [83233] }, ssr: !1 }
        ),
        e5 = (0, eX.default)(
          () =>
            Promise.all([i.e(6153), i.e(6402), i.e(2290)]).then(
              i.bind(i, 74361)
            ),
          { loadableGenerated: { webpack: () => [74361] }, ssr: !1 }
        );
      function e3() {
        let { data: e } = (0, ez.useSession)(),
          [a, i] = (0, o.useState)(!1),
          { userName: s, phone: c } = (0, e6.v9)((e) => e.auth),
          [_, d] = (0, o.useState)(!1),
          u = (0, e6.I0)(),
          A = (0, eZ.useRouter)();
        (0, o.useEffect)(() => {
          localStorage.getItem("LR_Num"),
            localStorage.getItem("LR_fullName"),
            d(!0);
        }, []);
        let [m, g] = (0, o.useState)(!1),
          h = () => {
            g(!0);
          },
          b = async () => {
            localStorage.removeItem("LR_Num"),
              localStorage.removeItem("email"),
              localStorage.removeItem("LR_token"),
              localStorage.removeItem("LR_fullName"),
              A.push("/"),
              u((0, e1.kS)());
          },
          [p, v] = (0, o.useState)(!1),
          x = (e) => {
            A.push(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: n().topNavBar__Container,
              children: [
                (0, t.jsx)(e4, {}),
                (0, t.jsxs)("div", {
                  className: n().topNavBar__flexContainer,
                  children: [
                    (0, t.jsxs)("div", {
                      className: n().topNavBar__linksContainer,
                      children: [
                        (0, t.jsx)("div", {
                          className: n().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: n().linkComp,
                            href: "/colleges",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Top Universities & Colleges",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: n().topNavBar__link,
                          onClick: () => x("/online-pg-programmes.html"),
                          children: (0, t.jsx)(l.default, {
                            className: n().linkComp,
                            href: "online-pg-programmes.html",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Trending Courses",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: n().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: n().linkComp,
                            href: "/study-abroad",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Study Abroad",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: n().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: n().linkComp,
                            href: "/exams",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Entrance Exams",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: n().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: n().linkComp,
                            href: "/web-stories",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Web Stories",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: n().topNavBar__loginContainer,
                      children: [
                        (0, t.jsxs)("div", {
                          className: n().phoneBtn,
                          children: [
                            " ",
                            (0, t.jsx)(eq.XqJ, { fontSize: "1.5rem" }),
                            " ",
                            (0, t.jsx)("a", {
                              href: "tel:+919228165349",
                              style: {
                                textDecoration: "none",
                                color: "var(--white)",
                              },
                              children: "9228165349",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: n().topNavBar__login,
                          children: [
                            (0, t.jsx)(r.BKo, {
                              className: n().topNavBar__login_icon,
                              color: "white",
                            }),
                            (0, t.jsx)("div", {
                              children: _
                                ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      c || s || e
                                        ? (0, t.jsx)("p", {
                                            onClick: b,
                                            className:
                                              n().topNavBar__login_text,
                                            children: "Logout",
                                          })
                                        : (0, t.jsx)("p", {
                                            onClick: h,
                                            className:
                                              n().topNavBar__login_text,
                                            children: "Login",
                                          }),
                                      (0, t.jsx)("p", {
                                        className: n().topNavBar__login_text,
                                        onClick: () =>
                                          A.push("/user-dashboard"),
                                        children:
                                          s || (c ? "Hello User" : null),
                                      }),
                                    ],
                                  })
                                : (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                      className: n().topNavBar__login_text,
                                      children: "Loading...",
                                    }),
                                  }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(l.default, {
                          href: "/freecourses",
                          className: n().topNavBar__freeCoursesBtn,
                          prefetch: !0,
                          children: "Free Courses",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m &&
              (0, t.jsx)(e2, {
                onClose: () => {
                  g(!1);
                },
                onOpen: () => {
                  g(!1), v(!0);
                },
              }),
            p &&
              (0, t.jsx)(e5, {
                onClose: () => {
                  v(!1);
                },
                openSign: h,
              }),
          ],
        });
      }
      var e7 = {
          src: "/_next/static/media/Referral.e77cea67.png",
          height: 25,
          width: 24,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX/GAD/////////////ZQD/RwRMaXH/OQL/EAD/PgD/6eH/ck3/PAz/Wi//ZTD/EwD/YgD/MAD/PQD/IQL/ZgP/gmT/j2X/XAEBS72jAAAAE3RSTlP9pQE9VfwAKlX71kL6/v6pqftXxCjLeQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJxjYGNiZGZmZGJjYGfn5uLiZmdnYBAW5mFlFRdh4BcW5uVjFRdg4BBmEBXjFGHBxmCAMABaXALLDMxwywAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        e8 = i(46523),
        e9 = i(67704),
        ae = i.n(e9),
        aa = i(24261),
        ai = () => {
          let [e, a] = (0, o.useState)(!1),
            i = () => {
              a(!e);
            };
          return (0, t.jsx)("div", {
            children: (0, t.jsx)(x, {
              name: "Explore Courses",
              data: (0, t.jsx)(aa.G, { handleClick: i }),
              showModal: e,
              toggleModal: i,
            }),
          });
        };
      i(92357);
      var at = i(92937);
      function ao() {
        let [e, a] = (0, o.useState)(!1),
          [i, r] = (0, o.useState)(!1),
          [s, n] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            let e = setTimeout(() => {
              n(!1);
            }, 3e3);
            return () => clearTimeout(e);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: ae().mainNavBar__container,
                children: (0, t.jsxs)("div", {
                  className: ae().mainNavBar__flexContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)(l.default, {
                        href: "/",
                        prefetch: !0,
                        children: (0, t.jsx)(c.default, {
                          alt: "logo",
                          className: ae().mainNavBar__image,
                          src: e8.default,
                          priority: !0,
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: ae().mainNavBar__buttonsContainer,
                      children: [
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__exploreButton,
                          children: (0, t.jsx)(ai, {}),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__topUniversities,
                          children: (0, t.jsx)(R, {}),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__buttons,
                          children: (0, t.jsxs)(l.default, {
                            href: "/ai-college-finder",
                            className: ae().link,
                            prefetch: !0,
                            children: [
                              "College Finder",
                              " ",
                              (0, t.jsx)("span", {
                                className: ae().glowEffect,
                                children: "AI Based",
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__buttons,
                          children: (0, t.jsxs)(l.default, {
                            href: "/online-video-meet",
                            className: ae().link,
                            prefetch: !0,
                            children: [
                              (0, t.jsx)(A.FI4, {
                                className: ae().flashingIcon,
                              }),
                              " Free Counselling",
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__buttons,
                          children: (0, t.jsx)(l.default, {
                            href: "/career",
                            className: ae().link,
                            prefetch: !0,
                            children: "Career",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__buttons,
                          children: (0, t.jsx)(l.default, {
                            href: "/blog",
                            className: ae().link,
                            prefetch: !0,
                            children: "Blogs",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__buttons,
                          children: (0, t.jsx)(l.default, {
                            href: "/contact-us",
                            className: ae().link,
                            prefetch: !0,
                            children: "Contact Us",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ae().mainNavBar__referral,
                          children: (0, t.jsx)(l.default, {
                            href: "/refer-and-earn",
                            children: (0, t.jsxs)("div", {
                              className: ae().tooltip,
                              onMouseEnter: () => n(!0),
                              onMouseLeave: () => n(!1),
                              children: [
                                (0, t.jsx)(c.default, { src: e7, alt: "img" }),
                                s &&
                                  (0, t.jsxs)("span", {
                                    className: ae().tooltipText,
                                    children: [
                                      "Refer and Earn",
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: ae().rupee,
                                        children: "₹ 5000",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i &&
                (0, t.jsx)(at.default, {
                  onClose: () => {
                    r(!1), a(!1);
                  },
                }),
            ],
          })
        );
      }
      var ar = i(75441),
        as = i.n(ar),
        an = i(43284),
        al = i.n(an),
        ac = {
          src: "/_next/static/media/logo-blue.7ec37570.webp",
          height: 213,
          width: 635,
          blurDataURL:
            "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAOwAAAAcXbhdVQ01ACS2sLUBDQBkHFyQaAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWUAnQBDwCleGAA/vqGCC41tXmwADqOZN0OMIjNtUM4EKQSiAA=",
          blurWidth: 8,
          blurHeight: 3,
        },
        a_ = i(92270),
        ad = i.n(a_);
      function au(e) {
        let { name: a, data: i } = e,
          [r, s] = (0, o.useState)(!1),
          n = (0, o.useRef)(null),
          l = () => {
            s(!r);
          },
          c = (e) => {
            n.current && !n.current.contains(e.target) && l();
          };
        return (
          (0, o.useEffect)(
            () => (
              r
                ? ((document.body.style.overflow = "hidden"),
                  document.addEventListener("click", c))
                : ((document.body.style.overflow = "auto"),
                  document.removeEventListener("click", c)),
              () => {
                (document.body.style.overflow = "auto"),
                  document.removeEventListener("click", c);
              }
            ),
            [r]
          ),
          (0, t.jsxs)("div", {
            className: ad().ModalContainer,
            children: [
              (0, t.jsxs)("div", {
                className: ad().buttonXl,
                onClick: l,
                children: [
                  a,
                  r
                    ? (0, t.jsx)(v.rWj, { style: { marginLeft: "4px" } })
                    : (0, t.jsx)(p.OrA, { style: { marginLeft: "4px" } }),
                ],
              }),
              r &&
                (0, t.jsx)("div", {
                  className: ad().modal,
                  ref: n,
                  children: (0, t.jsx)("div", {
                    className: ad().modalDialog,
                    children: (0, t.jsxs)("div", {
                      className: ad().modalContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: ad().modalHeader,
                          children: (0, t.jsx)("button", {
                            type: "button",
                            className: ad().modalCloseBtn,
                            onClick: l,
                            children: (0, t.jsx)(A.oHP, {}),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: ad().modalBody,
                          children: i,
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var aA = i(94007),
        am = i.n(aA),
        ag = () => {
          let [e, a] = (0, o.useState)(!1),
            i = () => {
              a(!e);
            };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(au, {
              name: "Top University",
              data: (0, t.jsx)(ab, { handleClick: i }),
              showModal: e,
              toggleModal: i,
            }),
          });
        };
      let ah = [
        {
          id: 1,
          name: "Maharashtra",
          img: C,
          url: "/colleges?state=Maharashtra",
        },
        { id: 2, name: "New Delhi", img: N, url: "/colleges?state=New Delhi" },
        { id: 3, name: "Karnataka", img: w, url: "/colleges?state=Karnataka" },
        { id: 4, name: "Telangana", img: U, url: "/colleges?state=Telangana" },
        { id: 5, name: "Gujarat", img: B, url: "/colleges?state=Gujarat" },
        { id: 6, name: "Punjab", img: j, url: "/colleges?state=Punjab" },
        {
          id: 7,
          name: "Uttar Pradesh",
          img: k,
          url: "/colleges?state=Uttar Pradesh",
        },
        { id: 8, name: "Rajasthan", img: D, url: "/colleges?state=Rajasthan" },
        { id: 9, name: "Haryana", img: y, url: "/colleges?state=Haryana" },
        {
          id: 10,
          name: "Tamil Nadu",
          img: I,
          url: "/colleges?state=Tamil Nadu",
        },
      ];
      function ab(e) {
        let { handleToggleModal: a } = e;
        return (0, t.jsxs)("div", {
          className: am().topUniversitiesMegaMenu__Container,
          children: [
            (0, t.jsx)("br", {}),
            (0, t.jsxs)("div", {
              className: am().topUniversitiesModal__citiesContainer,
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("p", {
                    className:
                      am().topUniversitiesMegaMenu__citiesContainer_text,
                    children: "Popular States",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: am().topUniversitiesModal__citiesContainer_flexRow,
                  children: ah.map((e, i) =>
                    (0, t.jsx)(
                      l.default,
                      {
                        href: e.url,
                        onClick: () => {
                          a();
                        },
                        style: { textDecoration: "none" },
                        children: (0, t.jsxs)(
                          "div",
                          {
                            className:
                              am().topUniversitiesMegaMenu__cityContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  am()
                                    .topUniversitiesMegaMenu__cityImgContainer,
                                children: (0, t.jsx)(c.default, {
                                  src: e.img,
                                  alt: "img",
                                  style: { color: "red" },
                                  color: "red",
                                  className: am().cityImage,
                                }),
                              }),
                              (0, t.jsx)("div", {
                                children: (0, t.jsx)("p", {
                                  className:
                                    am().topUniversitiesMegaMenu__city_text,
                                  children: e.name,
                                }),
                              }),
                            ],
                          },
                          e.id
                        ),
                      },
                      i
                    )
                  ),
                }),
                (0, t.jsx)(l.default, {
                  href: "/colleges",
                  prefetch: !0,
                  onClick: () => {
                    a();
                  },
                  style: { textDecoration: "none" },
                  children: (0, t.jsx)("div", {
                    className: am().topUniversitiesMegaMenu__viewAllBtn,
                    children: "View All",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var ap = i(81227),
        av = i.n(ap);
      let ax = [
          {
            id: 1,
            name: "Maharashtra",
            img: C,
            url: "/colleges?state=Maharashtra",
          },
          {
            id: 2,
            name: "New Delhi",
            img: N,
            url: "/colleges?state=New Delhi",
          },
          {
            id: 3,
            name: "Karnataka",
            img: w,
            url: "/colleges?state=Karnataka",
          },
          {
            id: 4,
            name: "Telangana",
            img: U,
            url: "/colleges?state=Telangana",
          },
          { id: 5, name: "Gujarat", img: B, url: "/colleges?state=Gujarat" },
          { id: 6, name: "Punjab", img: j, url: "/colleges?state=Punjab" },
          {
            id: 7,
            name: "Tamil Nadu",
            img: I,
            url: "/colleges?state=Tamil Nadu",
          },
          {
            id: 8,
            name: "Rajasthan",
            img: D,
            url: "/colleges?state=Rajasthan",
          },
          { id: 9, name: "Haryana", img: y, url: "/colleges?state=Haryana" },
        ],
        aM = (e) => {
          let { closeDrawer: a } = e;
          return (0, t.jsx)("div", {
            className: av().mob_topUniversitiesMegaMenu__Container,
            children: (0, t.jsxs)("div", {
              className: av().mob_topUniversitiesModal__citiesContainer,
              children: [
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("p", {
                    className:
                      av().mob_topUniversitiesMegaMenu__citiesContainer_text,
                    children: "Popular Cities",
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    av().mob_topUniversitiesModal__citiesContainer_flexRow,
                  children: ax.map((e, i) =>
                    (0, t.jsx)(
                      l.default,
                      {
                        href: e.url,
                        style: { textDecoration: "none" },
                        onClick: () => {
                          a();
                        },
                        children: (0, t.jsxs)(
                          "div",
                          {
                            className:
                              av().mob_topUniversitiesMegaMenu__cityContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  av()
                                    .mob_topUniversitiesMegaMenu__cityImgContainer,
                                children: (0, t.jsx)(c.default, {
                                  src: e.img,
                                  alt: "img",
                                  className: av().mob_top_uni_cityImage,
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  av()
                                    .mob_topUniversitiesMegaMenu__city_text_container,
                                children: (0, t.jsx)("p", {
                                  className:
                                    av().mob_topUniversitiesMegaMenu__city_text,
                                  style: { margin: "0px", padding: "0px" },
                                  children: e.name,
                                }),
                              }),
                            ],
                          },
                          e.id
                        ),
                      },
                      i
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: av().mob_topUniversitiesMegaMenu__viewAllBtn,
                  children: (0, t.jsx)(l.default, {
                    href: "/colleges",
                    onClick: () => {
                      a();
                    },
                    style: { textDecoration: "none", color: "white" },
                    children: " View All",
                  }),
                }),
              ],
            }),
          });
        };
      var af = i(40177),
        aC = i.n(af);
      let aN = {
          "Online PG Programmes": [
            {
              id: 1,
              course: "Online MBA",
              duration: "2 Years",
              img: Y.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/online-mba",
            },
            {
              id: 2,
              course: "Online MCA",
              duration: "2 Years",
              img: F.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/online-mca",
            },
            {
              id: 3,
              course: "Online MCom",
              duration: "2 Years",
              img: J.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-mcom",
            },
            {
              id: 4,
              course: "Online MSc",
              duration: "2 Years",
              img: O.Z,
              degree: "/colleges?degree=MSc",
              path: "/courses/online-msc",
            },
            {
              id: 5,
              course: "Online MA",
              duration: "2 Years",
              img: W.Z,
              degree: "/colleges?degree=MA",
              path: "/courses/online-ma",
            },
            {
              id: 6,
              course: "M.Com with ACCA",
              duration: "2 Years",
              img: O.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/online-acca-mcom",
            },
            {
              id: 7,
              course: "Distance MBA",
              duration: "2 Years",
              img: H.Z,
              degree: "/colleges?degree=MBA",
              path: "/courses/distance-mba",
            },
            {
              id: 8,
              course: "Distance MCA",
              duration: "2 Years",
              img: V.Z,
              degree: "/colleges?degree=MCA",
              path: "/courses/distance-mca",
            },
            {
              id: 9,
              course: "Distance MCom",
              duration: "2 Years",
              img: X.Z,
              degree: "/colleges?degree=MCom",
              path: "/courses/distance-mcom",
            },
            {
              id: 10,
              course: "Distance MLIS",
              duration: "1 Year",
              img: er.Z,
              degree: "/colleges?degree=MLIS",
              path: "/courses/distance-m.com",
            },
          ],
          "Online UG Programmes": [
            {
              id: 1,
              course: "Online BCA",
              duration: "3 Years",
              img: z.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/online-bca",
            },
            {
              id: 2,
              course: "Online BBA",
              duration: "2 Years",
              img: q.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/online-bba",
            },
            {
              id: 3,
              course: "Online BCom",
              duration: "3 Years",
              img: K.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/online-bcom",
            },
            {
              id: 4,
              course: "Distance BA",
              duration: "3 Years",
              img: $.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/distance-ba",
            },
            {
              id: 5,
              course: "Online BA",
              duration: "3 Years",
              img: ee.Z,
              degree: "/colleges?degree=BA",
              path: "/courses/online-ba",
            },
            {
              id: 6,
              course: "Distance BCA",
              duration: "3 Years",
              img: ea.Z,
              degree: "/colleges?degree=BCA",
              path: "/courses/distance-bca",
            },
            {
              id: 7,
              course: "Distance BBA",
              duration: "3 Years",
              img: ei.Z,
              degree: "/colleges?degree=BBA",
              path: "/courses/distance-bba",
            },
            {
              id: 8,
              course: "Distance BCom",
              duration: "3 Years",
              img: et.Z,
              degree: "/colleges?degree=BCom",
              path: "/courses/distance-bcom",
            },
            {
              id: 9,
              course: "Distance BSc",
              duration: "3 Years",
              img: $.Z,
              degree: "/colleges?degree=BSc",
              path: "/courses/distance-bsc",
            },
            {
              id: 10,
              course: "Distance BLIS",
              duration: "1 Years",
              img: eo.Z,
              degree: "/colleges?degree=BLIS",
              path: "/courses/distance-b.sc",
            },
          ],
          "Diploma Courses": [
            {
              id: 1,
              course: "PGD Finance & Acc.",
              duration: "1-2 years",
              img: es.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-finance-accounting",
            },
            {
              id: 2,
              course: "PGD Data Science",
              duration: "1 to 2 years",
              img: e_.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-data-science",
            },
            {
              id: 3,
              course: "Digital Marketing",
              duration: "1 to 2 years",
              img: eg.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/professional-diploma-digital-marketing",
            },
            {
              id: 4,
              course: "PGD Retail Mgmt. ",
              duration: "1 to 2 years",
              img: eA.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-retail-management",
            },
            {
              id: 5,
              course: "PGD Marketing",
              duration: "1 Year",
              img: eu.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-marketing-management",
            },
            {
              id: 6,
              course: "PGD HR Mgmt.",
              duration: "1 to 2 years",
              img: ed.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-hr-management",
            },
            {
              id: 7,
              course: "Banking & Finance",
              duration: "1 to 2 years",
              img: en.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/banking-finance-management-diploma",
            },
            {
              id: 8,
              course: "International Trade",
              duration: "12 Months",
              img: ec.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/international-trade-management-diploma",
            },
            {
              id: 9,
              course: "Cyber Law",
              duration: "1 Year",
              img: el.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/diploma-in-cyber-law",
            },
            {
              id: 10,
              course: "PGD IT",
              duration: "1 Year",
              img: em.Z,
              degree: "/colleges?degree=PGD",
              path: "/courses/pg-diploma-in-it",
            },
          ],
          "Executive Programmes": [
            {
              id: 1,
              course: "Master of Business  Administration",
              duration: "Upto 3 Years",
              img: ep.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-mba",
            },
            {
              id: 2,
              course: "EPGD Business Analytics",
              duration: "15-16 months",
              img: ev.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-pg-diploma-in-business-analytics",
            },
            {
              id: 3,
              course: "Operations and Supply Chain Mgmt.",
              duration: "6 to 12 months",
              img: eN.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-programme-in-operations-and-supply-chain-management",
            },
            {
              id: 4,
              course: "EDP Strategic Management",
              duration: "6 - 12 months",
              img: eb.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-development-programme-in-strategic-management",
            },
            {
              id: 5,
              course: "Chief Financial Officer Programme",
              duration: " 6 to 12 months",
              img: eC.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/chief-financial-officer-programme",
            },
            {
              id: 6,
              course: "Leadership and Management",
              duration: "4 to 12 months ",
              img: ef.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-programme-in-leadership-and-management",
            },
            {
              id: 7,
              course: "EP in General Managment",
              duration: "6 to 12 months",
              img: ex.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-programme-in-general-management",
            },
            {
              id: 8,
              course: "EDP Strategic HR Management",
              duration: "6 to 12 months",
              img: eh.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-development-programme-in-strategic-human-resource-management",
            },
            {
              id: 9,
              course: "EP in Project Management",
              duration: " 6 to 12 months",
              img: eg.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-programme-in-project-management",
            },
            {
              id: 10,
              course: "Healthcare Service Management",
              duration: "6 to 12 months",
              img: eM.Z,
              degree: "/colleges?degree=Executive mba",
              path: "/courses/executive-programme-in-healthcare-service-management",
            },
          ],
          "International Programmes": [
            {
              id: 1,
              course: "MBA - Golden Gate University",
              duration: "2 Years",
              img: eE.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-golden-gate-university",
            },
            {
              id: 2,
              course: "MBA - Liverpool Business School",
              duration: "2 Years",
              img: eQ.Z,
              degree: "/study-abroad",
              path: "/courses/mba-by-liverpool-business-school",
            },
            {
              id: 3,
              course: "MBA - Edgewood",
              duration: "2 Years",
              img: eG.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-edgewood-college",
            },
            {
              id: 4,
              course: "MBA (Global) - Deakin",
              duration: "2 Years",
              img: eP.Z,
              degree: "/study-abroad",
              path: "/courses/mba-global-from-deakin-business-school",
            },
            {
              id: 5,
              course: "MBA - UTICA",
              duration: "2 Years",
              img: eL.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-utica-university",
            },
            {
              id: 6,
              course: "MBA (90 ECTS) - IU",
              duration: "2 Years",
              img: eT.Z,
              degree: "/study-abroad",
              path: "/courses/mba-90-ects-by-iu-university",
            },
            {
              id: 7,
              course: "MBA - Clarkson",
              duration: "2 Years",
              img: eY.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-clarkson-university",
            },
            {
              id: 8,
              course: "MBA - ISM",
              duration: "2 Years",
              img: eF.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-ism-international-school-of-management-germany",
            },
            {
              id: 9,
              course: "MBA- Sunderland",
              duration: "2 Years",
              img: eJ.Z,
              degree: "/study-abroad",
              path: "/courses/mba-from-university-of-sunderland-uk",
            },
            {
              id: 10,
              course: "MSBA - Golden Gate",
              duration: "2 Years",
              img: eO.Z,
              degree: "/study-abroad",
              path: "/courses/ms-in-business-analytics-by-golden-gate-university-usa",
            },
          ],
          "Free Courses": [
            {
              id: 1,
              course: "Data Analytics ",
              duration: "Upto 12 weeks",
              img: ek.Z,
              path: "/freecourses/data-analytics-certification",
            },
            {
              id: 2,
              course: "Digital Marketing",
              duration: "Upto 6 months",
              img: ey.Z,
              path: "/freecourses/digital-marketing-certification",
            },
            {
              id: 3,
              course: "Cyber Security ",
              duration: "Upto 3 months ",
              img: eD.Z,
              path: "/freecourses/cyber-security-certification",
            },
            {
              id: 4,
              course: "MS Excel",
              duration: "Upto 7 days",
              img: ej.Z,
              path: "/freecourses/certification-in-ms-excel",
            },
            {
              id: 5,
              course: "AI and ML ",
              duration: "Upto 12 hrs",
              img: ew.Z,
              path: "/freecourses/certification-in-ai-and-ml",
            },
            {
              id: 6,
              course: "Marketing",
              duration: "Upto months",
              img: eB.Z,
              path: "/freecourses/certification-in-marketing",
            },
            {
              id: 7,
              course: "Leadership Skills",
              duration: "Upto 4 weeks",
              img: eU.Z,
              path: "/freecourses/certification-in-leadership-skills",
            },
            {
              id: 8,
              course: "Project Management",
              duration: "Upto 22 hrs",
              img: eR.Z,
              path: "/freecourses/project-management-certification",
            },
            {
              id: 9,
              course: "Supply Chain Mgmt.",
              duration: "Upto 28hrs",
              img: eS.Z,
              path: "/freecourses/supply-chain-management-certification",
            },
            {
              id: 10,
              course: "Financial Accounting",
              duration: "3 hrs to 3 months ",
              img: eI.Z,
              path: "/freecourses/financial-accounting-certification",
            },
          ],
        },
        aw = () => (0, t.jsx)("div", { children: (0, t.jsx)(aU, {}) }),
        aU = () => {
          let e = Object.keys(aN),
            [a, i] = (0, o.useState)("Online PG Programmes"),
            r = aN[a],
            s = (0, eZ.useRouter)(),
            n = (e) => {
              i(e);
            },
            _ = (e) => {
              s.push(e);
            };
          return (0, t.jsx)("div", {
            className: aC().mob_nav_browse_container,
            children: (0, t.jsxs)("div", {
              className: aC().mob_nav_browse_course_container,
              children: [
                (0, t.jsx)("div", {
                  className: aC().mob_nav_browse_course_list_main_box,
                  children: e.map((e) =>
                    (0, t.jsx)(
                      "div",
                      {
                        className: ""
                          .concat(aC().mob_nav_course_list_single_box, " ")
                          .concat(a === e ? aC().bgColor : ""),
                        style: { color: a === e ? "white" : "" },
                        onClick: () => n(e),
                        children: (0, t.jsx)("div", {
                          className: aC().mob_nav_browse_slide_individual_box,
                          children: (0, t.jsx)("span", { children: e }),
                        }),
                      },
                      e
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: aC().mob_nav_course_grid_box,
                  children: r.map((e, a) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: aC().mob_nav_browse_course_card,
                        children: [
                          (0, t.jsx)(
                            l.default,
                            {
                              href: e.path,
                              style: { textDecoration: "none" },
                              onClick: () => {
                                closeDrawer();
                              },
                              children: (0, t.jsxs)("div", {
                                className:
                                  aC().mob_nav_browse_course_card_top_container,
                                children: [
                                  (0, t.jsx)("div", {
                                    children: (0, t.jsx)(c.default, {
                                      className:
                                        aC().mob_nav_browse_course_card_img,
                                      src: e.img,
                                      alt: "img",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          aC()
                                            .mob_nav_browse_course_card_heading,
                                        children: e.course,
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          aC()
                                            .mob_nav_browse_course_card_duration,
                                        children: ["Duration: ", e.duration],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            a
                          ),
                          (0, t.jsx)("div", {
                            className: aC().mob_nav_browse_course_card_view,
                            onClick: () => _(e.path),
                            children: "View More",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          });
        },
        aB = (0, eX.default)(
          () =>
            Promise.all([
              i.e(6153),
              i.e(1889),
              i.e(6402),
              i.e(4582),
              i.e(9760),
              i.e(8694),
            ]).then(i.bind(i, 83233)),
          { loadableGenerated: { webpack: () => [83233] } }
        ),
        aj = (0, eX.default)(
          () =>
            Promise.all([i.e(6153), i.e(6402), i.e(2290)]).then(
              i.bind(i, 74361)
            ),
          { loadableGenerated: { webpack: () => [74361] } }
        );
      var ak = function () {
        let e, a;
        let [i, s] = (0, o.useState)(!1),
          [n, c] = (0, o.useState)(!1),
          [_, d] = (0, o.useState)(!1),
          [u, h] = (0, o.useState)(!1),
          [b, p] = (0, o.useState)(!1),
          [v, x] = (0, o.useState)(!1),
          { data: M } = (0, ez.useSession)(),
          f = (0, eZ.useRouter)(),
          C = () => {
            s(!i);
          },
          N = (e) => {
            s(!1), f.push(e);
          };
        (e = localStorage.getItem("LR_Num")),
          (a = localStorage.getItem("LR_fullName"));
        let w = async () => {
          localStorage.removeItem("LR_Num"),
            localStorage.removeItem("email"),
            localStorage.removeItem("LR_token"),
            localStorage.removeItem("LR_fullName"),
            x(!v),
            f.push("/");
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: al().mobileNavMenuContainer,
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("button", {
                    className: al().menu,
                    onClick: C,
                    children: (0, t.jsx)(g.vHB, {}),
                  }),
                  i &&
                    (0, t.jsxs)("div", {
                      className: al().drawer,
                      children: [
                        (0, t.jsx)("div", {
                          className: al().drawerButton,
                          onClick: C,
                          children: (0, t.jsx)(A.oHP, {
                            color: "white",
                            className: al().MobNav_close_icon,
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsxs)("div", {
                              className: al().MobNav_loginContainer,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: al().MobNav_login,
                                  children: [
                                    (0, t.jsx)(r.BKo, {
                                      className: al().MobNav_login_icon,
                                    }),
                                    (0, t.jsx)("div", {
                                      children: (0, t.jsx)("div", {
                                        className: al().MobNav_login_text,
                                        children:
                                          e || a || M
                                            ? (0, t.jsx)("p", {
                                                onClick: w,
                                                children: "Logout",
                                              })
                                            : (0, t.jsx)("p", {
                                                onClick: () => h(!0),
                                                children: "Login",
                                              }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("button", {
                                  onClick: () => N("/freecourses"),
                                  className: al().MobNav_freeCoursesBtn,
                                  children: "Free Courses",
                                }),
                              ],
                            }),
                            M
                              ? (0, t.jsx)("p", {
                                  className: al().MobNav_loginContainer,
                                  style: { color: "#fff" },
                                  children: M.user.email,
                                })
                              : (0, t.jsx)("p", {
                                  className: al().MobNav_loginContainer,
                                }),
                            (0, t.jsxs)("p", {
                              className: al().MobNav_loginContainer,
                              style: { color: "#fff" },
                              onClick: () => f.push("/user-dashboard"),
                              children: [
                                a && (0, t.jsx)(t.Fragment, { children: a }),
                                e &&
                                  (0, t.jsx)(t.Fragment, {
                                    children: "Hello User",
                                  }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: al().menuItemsContainerOne,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: al().phoneBtn,
                                  children: [
                                    " ",
                                    (0, t.jsx)(eq.XqJ, { fontSize: "1.5rem" }),
                                    (0, t.jsx)("a", {
                                      href: "tel:+919228122474",
                                      style: {
                                        textDecoration: "none",
                                        color: "var(--white)",
                                      },
                                      children: "9228122474",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: al().menuExploreCourses,
                                  onClick: () => {
                                    d(!_);
                                  },
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "Explore Courses",
                                      " ",
                                      _
                                        ? (0, t.jsx)(m.Vmf, {})
                                        : (0, t.jsx)(m.OId, {}),
                                    ],
                                  }),
                                }),
                                _ &&
                                  (0, t.jsx)("div", {
                                    className:
                                      al()
                                        .mobile_nav_explore_course_modal_container,
                                    children: (0, t.jsx)(aw, {}),
                                  }),
                                (0, t.jsx)("div", {
                                  className: al().topUniversities,
                                  onClick: () => {
                                    c(!n);
                                  },
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "Top Universities",
                                      " ",
                                      n
                                        ? (0, t.jsx)(m.Vmf, {})
                                        : (0, t.jsx)(m.OId, {}),
                                    ],
                                  }),
                                }),
                                n &&
                                  (0, t.jsx)("div", {
                                    className:
                                      al()
                                        .mobile_nav_top_university_modal_container,
                                    children: (0, t.jsx)(aM, {
                                      closeDrrawer: () => {
                                        s(!1);
                                      },
                                    }),
                                  }),
                                (0, t.jsx)("div", {
                                  className: al().lrTag,
                                  onClick: () => N("/online-video-meet"),
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      " ",
                                      (0, t.jsx)(A.FI4, {
                                        className: al().flashingIcon,
                                      }),
                                      " ",
                                      "Free Counselling",
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: al().lrTag,
                                  onClick: () => N("/ai-college-finder"),
                                  children: (0, t.jsxs)("p", {
                                    children: [
                                      "College Finder",
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: al().glowEffect,
                                        children: "AI Based",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: al().workWithUs,
                                  onClick: () => N("/career"),
                                  children: (0, t.jsx)("p", {
                                    children: "Work With us",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: al().blogs,
                                  onClick: () => N("/blog"),
                                  children: (0, t.jsx)("p", {
                                    children: "Blogs",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: al().contactUs,
                                  onClick: () => N("/contact-us"),
                                  children: (0, t.jsx)("p", {
                                    children: "Contact Us",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: al().menuItemsContainerTwo,
                              children: [
                                (0, t.jsx)("div", {
                                  className: "menuTopUniversitiesAndCollege",
                                  onClick: () => N("/colleges"),
                                  children: (0, t.jsx)("p", {
                                    children: "Top Universities and Colleges",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuTrendingCourses",
                                  onClick: () => N("/"),
                                  children: (0, t.jsxs)(l.default, {
                                    href: "#courses",
                                    style: {
                                      textDecoration: "none",
                                      color: "white",
                                    },
                                    children: [
                                      " ",
                                      (0, t.jsx)("p", {
                                        children: "Trending Courses",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuStudyAbroad",
                                  onClick: () => N("/study-abroad"),
                                  children: (0, t.jsx)("p", {
                                    children: "Study Abroad",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuAdmission",
                                  onClick: () => N("/exams"),
                                  children: (0, t.jsx)("p", {
                                    children: "Entrance Exams",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "menuAdmission",
                                  onClick: () => N("/web-stories"),
                                  children: (0, t.jsx)("p", {
                                    children: "Web Stories",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: al().closeBottomButtonContainer,
                          children: (0, t.jsx)("button", {
                            className: al().closeBottomButton,
                            onClick: C,
                            children: "close",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            u &&
              (0, t.jsx)(aB, {
                onClose: () => {
                  h(!1);
                },
                onOpen: () => {
                  h(!1), p(!0);
                },
              }),
            b &&
              (0, t.jsx)(aj, {
                onClose: () => {
                  p(!1);
                },
                openSign: () => {
                  h(!0);
                },
              }),
          ],
        });
      };
      let aD = () =>
          (0, t.jsxs)("div", {
            className: al().mobileNav,
            children: [
              (0, t.jsx)("div", {
                className: al().mobileNavLogo,
                children: (0, t.jsx)(l.default, {
                  href: "/",
                  children: (0, t.jsx)(c.default, {
                    src: ac,
                    alt: "icon",
                    className: al().mobileNavLogoImg,
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: al().mobileNavMenu,
                children: [(0, t.jsx)(ak, {}), " "],
              }),
            ],
          }),
        ay = (0, eX.default)(
          () =>
            Promise.all([
              i.e(6153),
              i.e(1889),
              i.e(6402),
              i.e(4582),
              i.e(9760),
              i.e(8694),
            ]).then(i.bind(i, 83233)),
          { loadableGenerated: { webpack: () => [83233] }, ssr: !1 }
        ),
        aI = (0, eX.default)(
          () =>
            Promise.all([i.e(6153), i.e(6402), i.e(2290)]).then(
              i.bind(i, 74361)
            ),
          { loadableGenerated: { webpack: () => [74361] }, ssr: !1 }
        );
      function aR() {
        let { data: e } = (0, ez.useSession)(),
          [a, i] = (0, o.useState)(!1),
          { userName: s, phone: n } = (0, e6.v9)((e) => e.auth),
          [c, _] = (0, o.useState)(!1),
          d = (0, e6.I0)(),
          u = (0, eZ.useRouter)();
        (0, o.useEffect)(() => {
          localStorage.getItem("LR_Num"),
            localStorage.getItem("LR_fullName"),
            _(!0);
        }, []);
        let [A, m] = (0, o.useState)(!1),
          g = () => {
            m(!0);
          },
          h = async () => {
            localStorage.removeItem("LR_Num"),
              localStorage.removeItem("email"),
              localStorage.removeItem("LR_token"),
              localStorage.removeItem("LR_fullName"),
              u.push("/"),
              d((0, e1.kS)());
          },
          [b, p] = (0, o.useState)(!1),
          v = (e) => {
            u.push(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: as().topNavBar__Container,
              children: [
                (0, t.jsx)(aD, {}),
                (0, t.jsxs)("div", {
                  className: as().topNavBar__flexContainer,
                  children: [
                    (0, t.jsxs)("div", {
                      className: as().topNavBar__linksContainer,
                      children: [
                        (0, t.jsx)("div", {
                          className: as().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: as().linkComp,
                            href: "/colleges",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Top Universities & Colleges",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: as().topNavBar__link,
                          onClick: () => v("/online-pg-programmes.html"),
                          children: (0, t.jsx)(l.default, {
                            className: as().linkComp,
                            href: "online-pg-programmes.html",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Trending Courses",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: as().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: as().linkComp,
                            href: "/study-abroad",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Study Abroad",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: as().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: as().linkComp,
                            href: "/exams",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Entrance Exams",
                            }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: as().topNavBar__link,
                          children: (0, t.jsx)(l.default, {
                            className: as().linkComp,
                            href: "/web-stories",
                            prefetch: !0,
                            children: (0, t.jsx)("p", {
                              children: "Web Stories",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: as().topNavBar__loginContainer,
                      children: [
                        (0, t.jsxs)("div", {
                          className: as().phoneBtn,
                          children: [
                            " ",
                            (0, t.jsx)(eq.XqJ, { fontSize: "1.3rem" }),
                            " ",
                            (0, t.jsx)("a", {
                              href: "tel:+919228165349",
                              style: {
                                textDecoration: "none",
                                color: "var(--dark-blue)",
                              },
                              children: "9228165349",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: as().topNavBar__login,
                          children: [
                            (0, t.jsx)(r.BKo, {
                              className: as().topNavBar__login_icon,
                            }),
                            (0, t.jsx)("div", {
                              children: c
                                ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      n || s || e
                                        ? (0, t.jsx)("p", {
                                            onClick: h,
                                            className:
                                              as().topNavBar__login_text,
                                            children: "Logout",
                                          })
                                        : (0, t.jsx)("p", {
                                            onClick: g,
                                            className:
                                              as().topNavBar__login_text,
                                            children: "Login",
                                          }),
                                      (0, t.jsx)("p", {
                                        className: as().topNavBar__login_text,
                                        onClick: () =>
                                          u.push("/user-dashboard"),
                                        children:
                                          s || (n ? "Hello User" : null),
                                      }),
                                    ],
                                  })
                                : (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("p", {
                                      className: as().topNavBar__login_text,
                                      children: "Loading...",
                                    }),
                                  }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(l.default, {
                          href: "/freecourses",
                          className: as().topNavBar__freeCoursesBtn,
                          prefetch: !0,
                          children: "Free Courses",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            A &&
              (0, t.jsx)(ay, {
                onClose: () => {
                  m(!1);
                },
                onOpen: () => {
                  m(!1), p(!0);
                },
              }),
            b &&
              (0, t.jsx)(aI, {
                onClose: () => {
                  p(!1);
                },
                openSign: g,
              }),
          ],
        });
      }
      var aS = i(37717),
        aZ = i.n(aS),
        aE = () => {
          let [e, a] = (0, o.useState)(!1),
            i = () => {
              a(!e);
            };
          return (0, t.jsx)("div", {
            children: (0, t.jsx)(au, {
              name: "Explore Courses",
              data: (0, t.jsx)(aa.G, { handleClick: i }),
              showModal: e,
              toggleModal: i,
            }),
          });
        };
      function aQ() {
        let [e, a] = (0, o.useState)(!1),
          [i, r] = (0, o.useState)(!1),
          [s, n] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            let e = setTimeout(() => {
              n(!1);
            }, 3e3);
            return () => clearTimeout(e);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: aZ().mainNavBar__container,
                children: (0, t.jsxs)("div", {
                  className: aZ().mainNavBar__flexContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)(l.default, {
                        href: "/",
                        prefetch: !0,
                        children: (0, t.jsx)(c.default, {
                          alt: "logo",
                          className: aZ().mainNavBar__image,
                          src: ac,
                          priority: !0,
                        }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: aZ().mainNavBar__navbarContainer,
                      children: [
                        (0, t.jsx)("div", {
                          className: aZ().mainNavBar__exploreButton,
                          children: (0, t.jsx)(aE, {}),
                        }),
                        (0, t.jsxs)("div", {
                          className: aZ().mainNavBar__buttonsContainer,
                          children: [
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__topUniversities,
                              children: (0, t.jsx)(ag, {}),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__buttons,
                              children: (0, t.jsxs)(l.default, {
                                href: "/ai-college-finder",
                                className: aZ().link,
                                prefetch: !0,
                                children: [
                                  "College Finder",
                                  " ",
                                  (0, t.jsx)("span", {
                                    className: aZ().glowEffect,
                                    children: "AI Based",
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__buttons,
                              children: (0, t.jsxs)(l.default, {
                                href: "/online-video-meet",
                                className: aZ().link,
                                prefetch: !0,
                                children: [
                                  (0, t.jsx)(A.FI4, {
                                    className: aZ().flashingIcon,
                                  }),
                                  " Free Counselling",
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__buttons,
                              children: (0, t.jsx)(l.default, {
                                href: "/career",
                                className: aZ().link,
                                prefetch: !0,
                                children: "Career",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__buttons,
                              children: (0, t.jsx)(l.default, {
                                href: "/blog",
                                className: aZ().link,
                                prefetch: !0,
                                children: "Blogs",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__buttons,
                              children: (0, t.jsx)(l.default, {
                                href: "/contact-us",
                                className: aZ().link,
                                prefetch: !0,
                                children: "Contact Us",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: aZ().mainNavBar__referral,
                              children: (0, t.jsx)(l.default, {
                                href: "/refer-and-earn",
                                children: (0, t.jsxs)("div", {
                                  className: aZ().tooltip,
                                  onMouseEnter: () => n(!0),
                                  onMouseLeave: () => n(!1),
                                  children: [
                                    (0, t.jsx)(c.default, {
                                      src: e7,
                                      alt: "img",
                                    }),
                                    s &&
                                      (0, t.jsxs)("span", {
                                        className: aZ().tooltipText,
                                        children: [
                                          "Refer and Earn",
                                          " ",
                                          (0, t.jsx)("span", {
                                            className: aZ().rupee,
                                            children: "₹ 5000",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i &&
                (0, t.jsx)(at.default, {
                  onClose: () => {
                    r(!1), a(!1);
                  },
                }),
            ],
          })
        );
      }
      i(38464);
      var aG = function () {
          return (0, t.jsxs)("div", {
            children: [(0, t.jsx)(aR, {}), (0, t.jsx)(aQ, {})],
          });
        },
        aP = function () {
          let e = (0, eZ.usePathname)();
          return (0, t.jsx)(t.Fragment, {
            children:
              "/" === e
                ? (0, t.jsx)(aG, {})
                : (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("div", { children: (0, t.jsx)(e3, {}) }),
                      (0, t.jsx)("div", { children: (0, t.jsx)(ao, {}) }),
                    ],
                  }),
          });
        };
    },
    81961: function (e, a, i) {
      "use strict";
      var t = i(76136);
      i(15082);
      var o = i(37278);
      a.default = (e) => {
        let { children: a } = e;
        return (0, t.jsx)(o.SessionProvider, { children: a });
      };
    },
    79274: function (e, a, i) {
      "use strict";
      i.d(a, {
        k: function () {
          return o;
        },
      });
      let t = (0, i(49909).oM)({
          name: "cfresult",
          initialState: { collegefinderData: [] },
          reducers: {
            cfallData: (e, a) => {
              e.collegefinderData = a.payload;
            },
          },
        }),
        { cfallData: o } = t.actions;
      a.Z = t.reducer;
    },
    17471: function (e, a, i) {
      "use strict";
      i.d(a, {
        Qo: function () {
          return c;
        },
        Tr: function () {
          return l;
        },
        kS: function () {
          return n;
        },
        pH: function () {
          return r;
        },
      });
      var t = i(49909),
        o = i(15797);
      let r = (0, t.hg)("auth/loginUser", async (e, a) => {
        let { email: i, password: t } = e;
        try {
          let e = await o.Z.post(
            "https://learned-one-411711.wl.r.appspot.com/auth/signin",
            { email: i, password: t }
          );
          if (201 === e.data.code)
            return (
              localStorage.setItem("LR_token", e.data.response.token),
              localStorage.setItem("email", i),
              localStorage.setItem("LR_fullName", e.data.fullName),
              alert(e.data.message),
              { ...e.data, email: i }
            );
        } catch (e) {
          return (
            alert(e.response.data.error), a.rejectWithValue(e.response.data)
          );
        }
      });
      (0, t.hg)("auth/updateUser", async (e, a) => {
        try {
          let a = await o.Z.patch("http://localhost:5030/auth/update", e);
          if (200 === a.data.code) return alert(a.data.message), a.data;
        } catch (e) {
          return (
            alert(e.response.data.error), a.rejectWithValue(e.response.data)
          );
        }
      });
      let s = (0, t.oM)({
          name: "auth",
          initialState: {
            userName: null,
            token: null,
            loading: !1,
            error: null,
            email: null,
            phone: null,
          },
          reducers: {
            logout: (e) => {
              (e.userName = null),
                (e.token = null),
                (e.email = null),
                (e.phone = null);
            },
            upDate: (e, a) => {
              e.userName = a.payload;
            },
            addphone: (e, a) => {
              (e.phone = a.payload.phone), (e.token = a.payload.token);
            },
          },
          extraReducers: (e) => {
            e.addCase(r.pending, (e) => {
              (e.loading = !0),
                (e.error = null),
                (e.userName = null),
                (e.token = null),
                (e.email = null);
            })
              .addCase(r.fulfilled, (e, a) => {
                (e.userName = a.payload.response.userName),
                  (e.token = a.payload.response.token),
                  (e.email = a.payload.email),
                  (e.loading = !1),
                  (e.error = null);
              })
              .addCase(r.rejected, (e, a) => {
                (e.loading = !1), (e.error = a.payload);
              });
          },
        }),
        { logout: n, upDate: l, addphone: c } = s.actions;
      a.ZP = s.reducer;
    },
    75272: function (e, a, i) {
      "use strict";
      i.d(a, {
        default: function () {
          return A;
        },
      });
      var t = i(76136),
        o = i(19932),
        r = i(10208),
        s = i(49909),
        n = i(17471),
        l = i(79274);
      let c = (e) => {
          try {
            let a = JSON.stringify(e);
            localStorage.setItem("state", a);
          } catch (e) {
            console.error("Save state error:", e);
          }
        },
        _ = (0, r.UY)({ auth: n.ZP, cfresult: l.Z }),
        d = (() => {
          try {
            let e = localStorage.getItem("state");
            if (null === e) return;
            return JSON.parse(e);
          } catch (e) {
            console.error("Load state error:", e);
            return;
          }
        })(),
        u = (0, s.xC)({ reducer: _, preloadedState: d });
      function A(e) {
        let { children: a } = e;
        return (0, t.jsx)(o.zt, { store: u, children: a });
      }
      u.subscribe(() => {
        c(u.getState());
      });
    },
    50742: function () {},
    87009: function (e) {
      e.exports = {
        bgColor: "BrowseCourse_bgColor__zDC4o",
        home_browse_container: "BrowseCourse_home_browse_container__tQp9L",
        home_browse_heading_container:
          "BrowseCourse_home_browse_heading_container__EJAFM",
        home_browse_heading_img_container:
          "BrowseCourse_home_browse_heading_img_container__gqEkj",
        home_browse_heading_img: "BrowseCourse_home_browse_heading_img__T1arj",
        home_browse_heading: "BrowseCourse_home_browse_heading__10RSs",
        home_browse_sub_heading: "BrowseCourse_home_browse_sub_heading__IbpwW",
        home_browse_heading_btn: "BrowseCourse_home_browse_heading_btn__Kikxx",
        home_browse_heading_img_box:
          "BrowseCourse_home_browse_heading_img_box__gYsVm",
        home_browse_course_container:
          "BrowseCourse_home_browse_course_container__PlZ71",
        home_browse_course_list_main_box:
          "BrowseCourse_home_browse_course_list_main_box__2D0BM",
        home_course_list_btn: "BrowseCourse_home_course_list_btn__vS39D",
        home_course_list_single_box:
          "BrowseCourse_home_course_list_single_box__d92j6",
        BrowseCourse_slide_arrow_right:
          "BrowseCourse_BrowseCourse_slide_arrow_right__TxHK3",
        BrowseCourse_slide_arrow_left:
          "BrowseCourse_BrowseCourse_slide_arrow_left__oGkPB",
        course_grid_box: "BrowseCourse_course_grid_box__h2DdU",
        browse_course_card: "BrowseCourse_browse_course_card__6O_U1",
        browse_course_card_top_container:
          "BrowseCourse_browse_course_card_top_container__4dzBP",
        browse_course_card_img: "BrowseCourse_browse_course_card_img__UCBw8",
        browse_course_card_heading:
          "BrowseCourse_browse_course_card_heading__7Cx3L",
        browse_course_card_duration:
          "BrowseCourse_browse_course_card_duration__mSOzf",
        browse_course_card_compare:
          "BrowseCourse_browse_course_card_compare__Q3JnF",
        browse_course_card_view: "BrowseCourse_browse_course_card_view__wBC_X",
        browse_slide_individual_box:
          "BrowseCourse_browse_slide_individual_box__PeTNq",
        home_browse_heading_btn_box:
          "BrowseCourse_home_browse_heading_btn_box__dYYcz",
      };
    },
    20319: function (e) {
      e.exports = { enquirynow_btn: "enquirynow_enquirynow_btn__mRuEZ" };
    },
    67704: function (e) {
      e.exports = {
        glowEffect: "MainNavbar_glowEffect__rDwyX",
        glowing: "MainNavbar_glowing__n5aat",
        link: "MainNavbar_link__iO0Mw",
        navMenu: "MainNavbar_navMenu__OVz2R",
        mainNavBar__container: "MainNavbar_mainNavBar__container__z6qtu",
        mainNavBar__flexContainer:
          "MainNavbar_mainNavBar__flexContainer__vrduk",
        mainNavBar__image: "MainNavbar_mainNavBar__image__PzG4X",
        mainNavBar__buttonsContainer:
          "MainNavbar_mainNavBar__buttonsContainer__cd5rz",
        mainNavBar__exploreButton:
          "MainNavbar_mainNavBar__exploreButton__5Zbpj",
        mainNavBar__universityButton:
          "MainNavbar_mainNavBar__universityButton__gcLg0",
        mainNavBar__buttons: "MainNavbar_mainNavBar__buttons__d4Wd3",
        mainNavBar__topUniversities:
          "MainNavbar_mainNavBar__topUniversities__6O3dP",
        mainNavBar__referral: "MainNavbar_mainNavBar__referral__YsfZj",
        tooltip: "MainNavbar_tooltip__cUQ11",
        tooltipText: "MainNavbar_tooltipText__ktv3w",
        rupee: "MainNavbar_rupee__Vz2cU",
        hamburger__login: "MainNavbar_hamburger__login__Z2UXZ",
        hamburger__login_icon: "MainNavbar_hamburger__login_icon___kV9J",
        hamburger__login_text: "MainNavbar_hamburger__login_text__OdLJu",
        hamburger__link_1: "MainNavbar_hamburger__link_1__j35QB",
        hamburger__link_2: "MainNavbar_hamburger__link_2__1evAZ",
        hamburger__link_span: "MainNavbar_hamburger__link_span__7ks6c",
        flashingIcon: "MainNavbar_flashingIcon__CnDNy",
        flash: "MainNavbar_flash__k_if3",
        mainNavBar__button: "MainNavbar_mainNavBar__button__1rmif",
        topUniversitiesModal__viewAllBtn:
          "MainNavbar_topUniversitiesModal__viewAllBtn__kWvRx",
        topUniversitiesModal__citiesContainer_flexRow:
          "MainNavbar_topUniversitiesModal__citiesContainer_flexRow__u4cZ9",
        topUniversitiesModal__inputContainer:
          "MainNavbar_topUniversitiesModal__inputContainer__qP5uY",
        topUniversitiesModal_iconContainer:
          "MainNavbar_topUniversitiesModal_iconContainer__RT3A3",
        topUniversitiesModal__Container:
          "MainNavbar_topUniversitiesModal__Container__mihgT",
        topUniversitiesModal__input:
          "MainNavbar_topUniversitiesModal__input__2kXlM",
      };
    },
    65814: function (e) {
      e.exports = {
        ModalContainer: "Modal_ModalContainer__HlLYT",
        buttonXl: "Modal_buttonXl__ZcExg",
        modal: "Modal_modal__OsI9a",
        modalCloseBtn: "Modal_modalCloseBtn__5F_e2",
        topUniversitiesMegaMenu__Container:
          "Modal_topUniversitiesMegaMenu__Container__ecBDt",
        topUniversitiesMegaMenu__citiesContainer_text:
          "Modal_topUniversitiesMegaMenu__citiesContainer_text__zEkE0",
        topUniversitiesMegaMenu__inputContainer:
          "Modal_topUniversitiesMegaMenu__inputContainer__0Qmf_",
        topUniversitiesMegaMenu__input:
          "Modal_topUniversitiesMegaMenu__input__Fm6YP",
        topUniversitiesModal_iconContainer:
          "Modal_topUniversitiesModal_iconContainer__qtR1Y",
        topUniversitiesModal__citiesContainer_flexRow:
          "Modal_topUniversitiesModal__citiesContainer_flexRow__K0Zw7",
        topUniversitiesMegaMenu__cityContainer:
          "Modal_topUniversitiesMegaMenu__cityContainer__4wuvL",
        topUniversitiesMegaMenu__cityImgContainer:
          "Modal_topUniversitiesMegaMenu__cityImgContainer__cZ_Yn",
        cityImage: "Modal_cityImage__pM_xq",
        topUniversitiesMegaMenu__city_text:
          "Modal_topUniversitiesMegaMenu__city_text__SHF9r",
        topUniversitiesMegaMenu__viewAllBtn:
          "Modal_topUniversitiesMegaMenu__viewAllBtn__e_guT",
      };
    },
    53669: function (e) {
      e.exports = {
        topUniversitiesMegaMenu__Container:
          "TopUniversityNav_topUniversitiesMegaMenu__Container__BA5jS",
        topUniversitiesMegaMenu__citiesContainer_text:
          "TopUniversityNav_topUniversitiesMegaMenu__citiesContainer_text__T1LQH",
        topUniversitiesMegaMenu__inputContainer:
          "TopUniversityNav_topUniversitiesMegaMenu__inputContainer__YJHtB",
        topUniversitiesMegaMenu__input:
          "TopUniversityNav_topUniversitiesMegaMenu__input__uFtJS",
        topUniversitiesModal_iconContainer:
          "TopUniversityNav_topUniversitiesModal_iconContainer__XRLIf",
        cityImage: "TopUniversityNav_cityImage__rKtrO",
        topUniversitiesModal__citiesContainer_flexRow:
          "TopUniversityNav_topUniversitiesModal__citiesContainer_flexRow__KFQS3",
        topUniversitiesMegaMenu__cityContainer:
          "TopUniversityNav_topUniversitiesMegaMenu__cityContainer__sCc_G",
        topUniversitiesMegaMenu__city_text:
          "TopUniversityNav_topUniversitiesMegaMenu__city_text__wFH4h",
        topUniversitiesMegaMenu__viewAllBtn:
          "TopUniversityNav_topUniversitiesMegaMenu__viewAllBtn__yuIby",
      };
    },
    26189: function (e) {
      e.exports = {
        bgColor: "MobNavExpModal_bgColor__QB_zZ",
        mob_nav_browse_container:
          "MobNavExpModal_mob_nav_browse_container__cLpSL",
        mob_nav_course_list_single_box:
          "MobNavExpModal_mob_nav_course_list_single_box__4YkmZ",
        mob_nav_browse_slide_individual_box:
          "MobNavExpModal_mob_nav_browse_slide_individual_box__dh_Uj",
        mob_nav_course_list_btn:
          "MobNavExpModal_mob_nav_course_list_btn__riFLq",
        mob_nav_browse_course_container:
          "MobNavExpModal_mob_nav_browse_course_container___tqJy",
        mob_nav_browse_course_list_main_box:
          "MobNavExpModal_mob_nav_browse_course_list_main_box__t7Klt",
        mob_nav_course_grid_box:
          "MobNavExpModal_mob_nav_course_grid_box__eA81Z",
        mob_nav_browse_course_card:
          "MobNavExpModal_mob_nav_browse_course_card__HEedV",
        mob_nav_browse_course_card_top_container:
          "MobNavExpModal_mob_nav_browse_course_card_top_container__aihwk",
        mob_nav_browse_course_card_img:
          "MobNavExpModal_mob_nav_browse_course_card_img__3eoXt",
        mob_nav_browse_course_card_view:
          "MobNavExpModal_mob_nav_browse_course_card_view__ZTxM3",
        mob_nav_browse_course_card_heading:
          "MobNavExpModal_mob_nav_browse_course_card_heading__yDE6u",
        mob_nav_browse_course_card_duration:
          "MobNavExpModal_mob_nav_browse_course_card_duration__Ohiiy",
        mob_nav_browse_course_card_compare:
          "MobNavExpModal_mob_nav_browse_course_card_compare__ZWg86",
        compare_arrow: "MobNavExpModal_compare_arrow__dVLrG",
        mob_nav_browse_course_view_all_btn:
          "MobNavExpModal_mob_nav_browse_course_view_all_btn__9Aq_O",
      };
    },
    68287: function (e) {
      e.exports = {
        ModalContainer: "MobTopUni_ModalContainer__1xW4j",
        buttonXl: "MobTopUni_buttonXl__PaJyH",
        modal: "MobTopUni_modal__mFs9C",
        mob_modalCloseBtn: "MobTopUni_mob_modalCloseBtn__m0s3B",
        modalCloseBtn: "MobTopUni_modalCloseBtn__rTlKw",
        mob_topUniversitiesMegaMenu__Container:
          "MobTopUni_mob_topUniversitiesMegaMenu__Container__HBoUo",
        mob_topUniversitiesMegaMenu__citiesContainer_text:
          "MobTopUni_mob_topUniversitiesMegaMenu__citiesContainer_text__KDpvg",
        mob_topUniversitiesMegaMenu__inputContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__inputContainer__kfYbx",
        mob_topUniversitiesMegaMenu__input:
          "MobTopUni_mob_topUniversitiesMegaMenu__input__y7OVe",
        mob_topUniversitiesModal_iconContainer:
          "MobTopUni_mob_topUniversitiesModal_iconContainer__iwZRf",
        mob_topUniversitiesModal__citiesContainer_flexRow:
          "MobTopUni_mob_topUniversitiesModal__citiesContainer_flexRow__pNAFB",
        mob_topUniversitiesMegaMenu__cityContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__cityContainer__mLwp8",
        mob_topUniversitiesMegaMenu__cityImgContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__cityImgContainer__DR10X",
        mob_top_uni_cityImage: "MobTopUni_mob_top_uni_cityImage__vb0As",
        mob_topUniversitiesMegaMenu__city_text_container:
          "MobTopUni_mob_topUniversitiesMegaMenu__city_text_container__TRbkV",
        mob_topUniversitiesMegaMenu__city_text:
          "MobTopUni_mob_topUniversitiesMegaMenu__city_text__Ar5tk",
        mob_topUniversitiesMegaMenu__viewAllBtn:
          "MobTopUni_mob_topUniversitiesMegaMenu__viewAllBtn___DE0w",
      };
    },
    90827: function (e) {
      e.exports = {
        glowEffect: "MobileNav_glowEffect__dcMDN",
        glowing: "MobileNav_glowing__Py_S_",
        mobileNav: "MobileNav_mobileNav__fGaWP",
        mobileNavLogoImg: "MobileNav_mobileNavLogoImg__SULsK",
        phoneBtn: "MobileNav_phoneBtn__Lk5_P",
        flashingIcon: "MobileNav_flashingIcon__FUest",
        flash: "MobileNav_flash__dFlej",
        menu: "MobileNav_menu__FvTyP",
        drawer: "MobileNav_drawer___2_ZL",
        drawerButton: "MobileNav_drawerButton__0MbuV",
        MobNav_loginContainer: "MobileNav_MobNav_loginContainer__WcwDK",
        MobNav_login: "MobileNav_MobNav_login__iZA0l",
        MobNav_login_icon: "MobileNav_MobNav_login_icon__67alb",
        MobNav_login_text: "MobileNav_MobNav_login_text__lrIxo",
        MobNav_freeCoursesBtn: "MobileNav_MobNav_freeCoursesBtn__DZz3d",
        MobNav_close_icon: "MobileNav_MobNav_close_icon__Lkmh_",
        menuItemsContainerOne: "MobileNav_menuItemsContainerOne__WO_qa",
        mobNavAi: "MobileNav_mobNavAi__6pMa0",
        menuItemsContainerTwo: "MobileNav_menuItemsContainerTwo__3cvLB",
        closeBottomButtonContainer:
          "MobileNav_closeBottomButtonContainer__sYQZt",
        closeBottomButton: "MobileNav_closeBottomButton__3wgji",
      };
    },
    82058: function (e) {
      e.exports = {
        topNavBar__Container: "TopNavbar_topNavBar__Container__Ugq6B",
        topNavBar__flexContainer: "TopNavbar_topNavBar__flexContainer__ELwWP",
        topNavBar__linksContainer: "TopNavbar_topNavBar__linksContainer__sYHv4",
        topNavBar__link: "TopNavbar_topNavBar__link__Zu_Pz",
        linkComp: "TopNavbar_linkComp__UgCfz",
        topNavBar__link_span: "TopNavbar_topNavBar__link_span__UMR8w",
        topNavBar__loginContainer: "TopNavbar_topNavBar__loginContainer__bevfK",
        topNavBar__login: "TopNavbar_topNavBar__login__JBL7b",
        topNavBar__login_icon: "TopNavbar_topNavBar__login_icon__4AY56",
        topNavBar__login_text: "TopNavbar_topNavBar__login_text__ZvF_3",
        topNavBar__freeCoursesBtn: "TopNavbar_topNavBar__freeCoursesBtn__amUTi",
        phoneBtn: "TopNavbar_phoneBtn__3WEF_",
      };
    },
    37717: function (e) {
      e.exports = {
        glowEffect: "MainNavbar_glowEffect__ORd8S",
        glowing: "MainNavbar_glowing__Vh1sa",
        link: "MainNavbar_link__Je6tm",
        navMenu: "MainNavbar_navMenu__YD6t2",
        mainNavBar__container: "MainNavbar_mainNavBar__container__WxyCm",
        mainNavBar__navbarContainer:
          "MainNavbar_mainNavBar__navbarContainer__8aIZC",
        mainNavBar__flexContainer:
          "MainNavbar_mainNavBar__flexContainer__uxuMS",
        mainNavBar__image: "MainNavbar_mainNavBar__image__ZE0A9",
        mainNavBar__buttonsContainer:
          "MainNavbar_mainNavBar__buttonsContainer__QAT3r",
        mainNavBar__exploreButton:
          "MainNavbar_mainNavBar__exploreButton__llabC",
        mainNavBar__universityButton:
          "MainNavbar_mainNavBar__universityButton__WXTWg",
        mainNavBar__buttons: "MainNavbar_mainNavBar__buttons__fxxQT",
        mainNavBar__topUniversities:
          "MainNavbar_mainNavBar__topUniversities___6bwc",
        mainNavBar__referral: "MainNavbar_mainNavBar__referral__wb9C6",
        tooltip: "MainNavbar_tooltip__r7Ode",
        tooltipText: "MainNavbar_tooltipText__Mu_xF",
        rupee: "MainNavbar_rupee__AoHAZ",
        hamburger__login: "MainNavbar_hamburger__login__0fO1a",
        hamburger__login_icon: "MainNavbar_hamburger__login_icon__eQ43Q",
        hamburger__login_text: "MainNavbar_hamburger__login_text__jEpuH",
        hamburger__link_1: "MainNavbar_hamburger__link_1__lwje1",
        hamburger__link_2: "MainNavbar_hamburger__link_2__u5ERB",
        hamburger__link_span: "MainNavbar_hamburger__link_span__DXmBd",
        flashingIcon: "MainNavbar_flashingIcon__290hO",
        flash: "MainNavbar_flash__ZESb5",
        mainNavBar__button: "MainNavbar_mainNavBar__button__bxA9R",
        topUniversitiesModal__viewAllBtn:
          "MainNavbar_topUniversitiesModal__viewAllBtn__zsitB",
        topUniversitiesModal__citiesContainer_flexRow:
          "MainNavbar_topUniversitiesModal__citiesContainer_flexRow__CPBzQ",
        topUniversitiesModal__inputContainer:
          "MainNavbar_topUniversitiesModal__inputContainer__8jJbr",
        topUniversitiesModal_iconContainer:
          "MainNavbar_topUniversitiesModal_iconContainer__NT9AC",
        topUniversitiesModal__Container:
          "MainNavbar_topUniversitiesModal__Container__Z55Ui",
        topUniversitiesModal__input:
          "MainNavbar_topUniversitiesModal__input__oozbG",
      };
    },
    92270: function (e) {
      e.exports = {
        ModalContainer: "Modal_ModalContainer__yYgZo",
        buttonXl: "Modal_buttonXl__4JKO_",
        modal: "Modal_modal__K9i_f",
        modalCloseBtn: "Modal_modalCloseBtn__yF5zk",
        topUniversitiesMegaMenu__Container:
          "Modal_topUniversitiesMegaMenu__Container__sZ4dC",
        topUniversitiesMegaMenu__citiesContainer_text:
          "Modal_topUniversitiesMegaMenu__citiesContainer_text__BPH6J",
        topUniversitiesMegaMenu__inputContainer:
          "Modal_topUniversitiesMegaMenu__inputContainer__g_tnN",
        topUniversitiesMegaMenu__input:
          "Modal_topUniversitiesMegaMenu__input__JgdeD",
        topUniversitiesModal_iconContainer:
          "Modal_topUniversitiesModal_iconContainer__epCyV",
        topUniversitiesModal__citiesContainer_flexRow:
          "Modal_topUniversitiesModal__citiesContainer_flexRow__AWbPc",
        topUniversitiesMegaMenu__cityContainer:
          "Modal_topUniversitiesMegaMenu__cityContainer__GW4Zz",
        topUniversitiesMegaMenu__cityImgContainer:
          "Modal_topUniversitiesMegaMenu__cityImgContainer__g2JvL",
        cityImage: "Modal_cityImage__IVHDL",
        topUniversitiesMegaMenu__city_text:
          "Modal_topUniversitiesMegaMenu__city_text__DM__i",
        topUniversitiesMegaMenu__viewAllBtn:
          "Modal_topUniversitiesMegaMenu__viewAllBtn__A1Wol",
      };
    },
    94007: function (e) {
      e.exports = {
        topUniversitiesMegaMenu__Container:
          "TopUniversityNav_topUniversitiesMegaMenu__Container__x1cJB",
        topUniversitiesMegaMenu__citiesContainer_text:
          "TopUniversityNav_topUniversitiesMegaMenu__citiesContainer_text__TUpRM",
        topUniversitiesMegaMenu__inputContainer:
          "TopUniversityNav_topUniversitiesMegaMenu__inputContainer__QsCA3",
        topUniversitiesMegaMenu__input:
          "TopUniversityNav_topUniversitiesMegaMenu__input__26gjl",
        topUniversitiesModal_iconContainer:
          "TopUniversityNav_topUniversitiesModal_iconContainer__2ZWGV",
        cityImage: "TopUniversityNav_cityImage__Bu4MF",
        topUniversitiesModal__citiesContainer_flexRow:
          "TopUniversityNav_topUniversitiesModal__citiesContainer_flexRow__3UENf",
        topUniversitiesMegaMenu__cityContainer:
          "TopUniversityNav_topUniversitiesMegaMenu__cityContainer__ohjPo",
        topUniversitiesMegaMenu__city_text:
          "TopUniversityNav_topUniversitiesMegaMenu__city_text__pHlkU",
        topUniversitiesMegaMenu__viewAllBtn:
          "TopUniversityNav_topUniversitiesMegaMenu__viewAllBtn__OylKG",
      };
    },
    40177: function (e) {
      e.exports = {
        bgColor: "MobNavExpModal_bgColor__uFPi7",
        mob_nav_browse_container:
          "MobNavExpModal_mob_nav_browse_container__MIV6V",
        mob_nav_course_list_single_box:
          "MobNavExpModal_mob_nav_course_list_single_box__lmjT_",
        mob_nav_browse_slide_individual_box:
          "MobNavExpModal_mob_nav_browse_slide_individual_box__07o_J",
        mob_nav_course_list_btn:
          "MobNavExpModal_mob_nav_course_list_btn__gebK7",
        mob_nav_browse_course_container:
          "MobNavExpModal_mob_nav_browse_course_container__UXl3A",
        mob_nav_browse_course_list_main_box:
          "MobNavExpModal_mob_nav_browse_course_list_main_box__EZtLd",
        mob_nav_course_grid_box:
          "MobNavExpModal_mob_nav_course_grid_box__5epB_",
        mob_nav_browse_course_card:
          "MobNavExpModal_mob_nav_browse_course_card__Pysw1",
        mob_nav_browse_course_card_top_container:
          "MobNavExpModal_mob_nav_browse_course_card_top_container__R288w",
        mob_nav_browse_course_card_img:
          "MobNavExpModal_mob_nav_browse_course_card_img__hzeKv",
        mob_nav_browse_course_card_view:
          "MobNavExpModal_mob_nav_browse_course_card_view__Rw0XX",
        mob_nav_browse_course_card_heading:
          "MobNavExpModal_mob_nav_browse_course_card_heading__GrmFK",
        mob_nav_browse_course_card_duration:
          "MobNavExpModal_mob_nav_browse_course_card_duration__AXkvo",
        mob_nav_browse_course_card_compare:
          "MobNavExpModal_mob_nav_browse_course_card_compare__6lD5T",
        compare_arrow: "MobNavExpModal_compare_arrow__Rtw9d",
        mob_nav_browse_course_view_all_btn:
          "MobNavExpModal_mob_nav_browse_course_view_all_btn__S_yuq",
      };
    },
    81227: function (e) {
      e.exports = {
        ModalContainer: "MobTopUni_ModalContainer__p1qkz",
        buttonXl: "MobTopUni_buttonXl___3Qmb",
        modal: "MobTopUni_modal__U_6lY",
        mob_modalCloseBtn: "MobTopUni_mob_modalCloseBtn__ko8VH",
        modalCloseBtn: "MobTopUni_modalCloseBtn__NLahh",
        mob_topUniversitiesMegaMenu__Container:
          "MobTopUni_mob_topUniversitiesMegaMenu__Container__QxVMu",
        mob_topUniversitiesMegaMenu__citiesContainer_text:
          "MobTopUni_mob_topUniversitiesMegaMenu__citiesContainer_text__yOIGX",
        mob_topUniversitiesMegaMenu__inputContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__inputContainer__vQv5Z",
        mob_topUniversitiesMegaMenu__input:
          "MobTopUni_mob_topUniversitiesMegaMenu__input__9Y7oG",
        mob_topUniversitiesModal_iconContainer:
          "MobTopUni_mob_topUniversitiesModal_iconContainer__FBrlv",
        mob_topUniversitiesModal__citiesContainer_flexRow:
          "MobTopUni_mob_topUniversitiesModal__citiesContainer_flexRow__Nv6VX",
        mob_topUniversitiesMegaMenu__cityContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__cityContainer__nE0s5",
        mob_topUniversitiesMegaMenu__cityImgContainer:
          "MobTopUni_mob_topUniversitiesMegaMenu__cityImgContainer__19YuC",
        mob_top_uni_cityImage: "MobTopUni_mob_top_uni_cityImage__3XXrx",
        mob_topUniversitiesMegaMenu__city_text_container:
          "MobTopUni_mob_topUniversitiesMegaMenu__city_text_container__T_Fj9",
        mob_topUniversitiesMegaMenu__city_text:
          "MobTopUni_mob_topUniversitiesMegaMenu__city_text__7EsuY",
        mob_topUniversitiesMegaMenu__viewAllBtn:
          "MobTopUni_mob_topUniversitiesMegaMenu__viewAllBtn__6VPKS",
      };
    },
    43284: function (e) {
      e.exports = {
        glowEffect: "MobileNav_glowEffect__JBAgY",
        glowing: "MobileNav_glowing__xL0kj",
        mobileNav: "MobileNav_mobileNav__9hkbo",
        mobileNavLogoImg: "MobileNav_mobileNavLogoImg__uxQ7p",
        phoneBtn: "MobileNav_phoneBtn__FiNGv",
        flashingIcon: "MobileNav_flashingIcon__xM0BJ",
        flash: "MobileNav_flash__6td8E",
        menu: "MobileNav_menu__xxzsj",
        drawer: "MobileNav_drawer__CHBzy",
        drawerButton: "MobileNav_drawerButton__hdlov",
        MobNav_loginContainer: "MobileNav_MobNav_loginContainer__e4MP_",
        MobNav_login: "MobileNav_MobNav_login__59IB1",
        MobNav_login_icon: "MobileNav_MobNav_login_icon__IDSRq",
        MobNav_login_text: "MobileNav_MobNav_login_text__NkT9j",
        MobNav_freeCoursesBtn: "MobileNav_MobNav_freeCoursesBtn__sQQmF",
        MobNav_close_icon: "MobileNav_MobNav_close_icon__p3sUs",
        menuItemsContainerOne: "MobileNav_menuItemsContainerOne__aXZhX",
        mobNavAi: "MobileNav_mobNavAi___vgMG",
        menuItemsContainerTwo: "MobileNav_menuItemsContainerTwo__1IEhi",
        closeBottomButtonContainer:
          "MobileNav_closeBottomButtonContainer__tnAVr",
        closeBottomButton: "MobileNav_closeBottomButton__Qd0TR",
      };
    },
    38464: function (e) {
      e.exports = { bgnav: "NavbarWhite_bgnav__DIAmK" };
    },
    75441: function (e) {
      e.exports = {
        topNavBar__Container: "TopNavbar_topNavBar__Container__63eNB",
        topNavBar__flexContainer: "TopNavbar_topNavBar__flexContainer__jpTqI",
        topNavBar__linksContainer: "TopNavbar_topNavBar__linksContainer__5ci9a",
        topNavBar__link: "TopNavbar_topNavBar__link__Y5UGY",
        linkComp: "TopNavbar_linkComp__iHTrA",
        topNavBar__link_span: "TopNavbar_topNavBar__link_span__kSBNF",
        topNavBar__loginContainer: "TopNavbar_topNavBar__loginContainer__d8NFn",
        topNavBar__login: "TopNavbar_topNavBar__login__NTr1D",
        topNavBar__login_icon: "TopNavbar_topNavBar__login_icon__DYr7p",
        topNavBar__login_text: "TopNavbar_topNavBar__login_text__Y0ErT",
        topNavBar__freeCoursesBtn: "TopNavbar_topNavBar__freeCoursesBtn__48l_Q",
        phoneBtn: "TopNavbar_phoneBtn__TCkgd",
      };
    },
    6554: function (e) {
      e.exports = {
        footer__Container: "footer_footer__Container__brMaJ",
        footer__row: "footer_footer__row__kgs5H",
        footer__col: "footer_footer__col__4F7Mb",
        Footer__logo: "footer_Footer__logo__xeANo",
        Footer_LogoInfo_text_1: "footer_Footer_LogoInfo_text_1__kVCZk",
        Footer_LogoInfo_text_2: "footer_Footer_LogoInfo_text_2__tZBCM",
        Footer_LogoInfo_iconsContainer:
          "footer_Footer_LogoInfo_iconsContainer__lsNE7",
        Footer__icon_insta: "footer_Footer__icon_insta__dWcve",
        Footer__icon_linkedin: "footer_Footer__icon_linkedin__n63hj",
        Footer__icon_facebook: "footer_Footer__icon_facebook__whpkx",
        Footer__icon_twitter: "footer_Footer__icon_twitter__W3K6m",
        Footer__icon_utube: "footer_Footer__icon_utube__Xa6ET",
        Footer_section_headerContainer:
          "footer_Footer_section_headerContainer__vQDCD",
        Footer_section_heading: "footer_Footer_section_heading__fsEMx",
        Footer_section_link: "footer_Footer_section_link__pMXOf",
        ctaboxlinks: "footer_ctaboxlinks__5WueN",
        ctabox: "footer_ctabox__61Q43",
        ctaicon: "footer_ctaicon__gkOGW",
        leftsec: "footer_leftsec__voM1P",
        rightsec2: "footer_rightsec2__viZrB",
        staricon: "footer_staricon__shCsW",
        Footer__bottomSectionContainer:
          "footer_Footer__bottomSectionContainer__L8VoB",
        Footer__bottomSection_left: "footer_Footer__bottomSection_left__Q1LwX",
        Footer__bottomSection_links:
          "footer_Footer__bottomSection_links__DUZG7",
        Footer__bottomSection_right:
          "footer_Footer__bottomSection_right__CSvmu",
        Footer__Container: "footer_Footer__Container__bNiA1",
      };
    },
    31332: function (e) {
      e.exports = {
        footerbottom__Container: "footerbottom_footerbottom__Container__3yZAc",
        footerbottom__row: "footerbottom_footerbottom__row__v6ZVx",
        footerbottom__col: "footerbottom_footerbottom__col__4lnqQ",
        Footerbottom_text_1: "footerbottom_Footerbottom_text_1__Ec9jQ",
        Footerbottom_text_2: "footerbottom_Footerbottom_text_2__mwyDD",
        Footerbottom_text_3: "footerbottom_Footerbottom_text_3__huQ3M",
        Footerbottom_toptext_3: "footerbottom_Footerbottom_toptext_3__p0onr",
        Footerbottom_disclaimer: "footerbottom_Footerbottom_disclaimer__XNNH7",
        qrcode: "footerbottom_qrcode__1H3_z",
        contactlinks: "footerbottom_contactlinks__aVNGs",
      };
    },
    92357: function (e) {
      e.exports = {
        modal_overlay: "OfferModal_modal_overlay__PKx92",
        modal: "OfferModal_modal__lncYO",
        offerheading: "OfferModal_offerheading__PbQIJ",
        close_button: "OfferModal_close_button__f1UpS",
        join_popup: "OfferModal_join_popup__lgUK2",
        offerImg: "OfferModal_offerImg__sOhSx",
        offerBtn: "OfferModal_offerBtn__UWkhC",
      };
    },
    10237: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/BachelorofLibraryandInformationScience.7223d6c6.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JZACdADyfvaAAP5Eo/A8fIp85wg3mYWcilqfEyZXo+nR4/4jU8vH5Qb8/9Jh4qscaVvn9EAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    97454: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/CertificationInAIandML.64276248.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZwCdAD0h/tsAAD+9kwj61TgH7Oh1c2Pd5p5w9KVFjbKN/HgNwIE7soE+T6C4AAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    26311: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/CertificationInLeadershipSkills.bcc5dc25.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoIAAUAAkA4JQBOgCLMKH/JoIAA/LTuA9J8J7B6uij7315wxpO/7JEcu77VBSoUzTu3AYGCfa21Fs8sOcAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    77443: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/CertificationInMarketing.13796f68.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JQBWAMUAtiuzQAD++bqDeWseRmGukdh6enq246MNF1BWLlRA6b3xnT7FWWR3IvK5YAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    51462: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/CertificationInMsExcel.2b56eed3.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JZACdAD0QVz/QAD+6JtXbrzP5hTjLIENDWyma/eC37TFkqGTK0UnI/XUc/T2MEm6gAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    52222: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ChiefFinancialOfficerProgramme.b8a18416.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZwAAxPvt6CAAP6s0esPvlC473cOd04m3PP4HhyU1H+Vb95A7h5AAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    79506: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/CyberSecurityCertification.30e5b581.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoIAAUAAkA4JYwCdH8AFx/J52WAAP6tQ+O5pEgIb/j/zUfLtU1e9KSFfpMzE4v4osjHArzY5QKFoAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    78810: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DataAnalyticsCertification.64dc9c14.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JZQC7AD0mE+oAAD+nBN4aJnaeLGmg/jyz12d0FcuGsyvdY4PxAV/N/zoFsEYUdHVwewAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    63038: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DigitalMarketingCertification.1d9f6d2e.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZQC7AEUnv5eAAD9/T9zcb8KNvyRG4BApVMHHzyHo+Xw77+DzI1F/gDCmmBMlgAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    46273: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/Diploma_in_Banking_and_Finance_Management.70d301b0.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoIAAUAAkA4JYwCdAD5ad7QAP7ykrSgJFdR3G5Uj9f2ONfX3dT0UZyCN6vvtJpIGqavf3dzCcyrH7JPODemAAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    45050: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/Diploma_in_Cyber_Law.4b7627e2.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZwCdAED/Cf6AAD+nDvz1cQM8tX98s22h/wav2lhb/cNWfPEAUXYqUcCKR38FUgAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    32316: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/Diploma_in_International_Trade_Management.556f475e.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JQBOgCLKGrGOSAD+5+Mn7Xf2f+0Cz+7ffe21J9+eXAjNDoURA101dMVI63FJwdkltwZmgAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    49647: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveDevelopmentProgramm.6b594df6.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAkA4JZQCdH8AFcqkYUAA/u0F7BRPE05D36oknkP6Wwo+iFM/qaZH/z/6ek2NVUj4yNepsAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    19914: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveDevelopmentProgrammeinStrategicManagement.298e86d9.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAUAAkA4JQBOgB6Rk9GwAP7eO3YDiUVVs8Sjf/2jzC/I5z8g5P8iHXFcpcRnETPy2pqcch0pmHW+Ce8Mpw7gAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    4390: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveMBA.a78e928c.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JZwCdAD0h67XAAD+zvjttpxvTe2Dh9hh8IwfNEgBW7pL4KdgMZaoKAEBgcAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    13750: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutivePGDiplomainBusinessAnalytics.011a0ffe.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JZQCdAEUmfHtAAD+67zDnEr0tPbWGrif8QQEdJPpei/ncAIVwqyASFUkgf4QESch7AAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    91229: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveProgrammeinGeneralManagment.4c20dd14.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JZQCdAD0QV+DYAD++PUgZEX/uQNnLmqZtPo+/tqNisDSrwJxfYGCIeb0JAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    32312: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveProgrammeinHealthcareServiceManagement.241eb54e.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JZwC7AERH144IYAA/th95bbjvk2N2PkM8D1Og6plrXPSuqGydwAAUUBzX0AAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    63876: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveProgrammeinLeadershipandManagement.ce1fd6c4.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JYwCdAEVzEecpgAA/k/zye6zskXcZDEVqjzU1v4daX8Jb/E/2T5l/xXkJvGRkAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    26455: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ExecutiveProgrammeinOperationsandSupplyChainManagement.91dfd156.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JQBOkCYjE3lJU/AA/u5qtoqqQWn56J9zCSvf55vivt/pJTLA+EdsqenXDYj4AAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    97669: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/FinancialAccountingCertification.ca7522fe.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAkA4JZQCdH8AFbMU94AA/ubdsqBO9+f+kyPZlj3jWB+Qs5pKx1+OIBTOBWyELy1JRpSDIMfoAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    50727: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/LiverpoolBusinessSchool.06bd0758.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JQBOgCHfwF2AAP729I/HjitR1nk7qiq8wnnRh6L/HGlgZvB23DIvUf+AQAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    34967: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBA90ECTSIU.27940ddf.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZwCdAD0gwXoAAD+8173taHfanYCtllxBuj7iVBleHtp6j+tHocICQAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    19652: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAClarkson.a6f6b194.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEXfo+2sAD+0ng32Izjq4gzlzWVRLwkCutGcX+jQ24IghSjngA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    20894: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAEdgewood.896dca4d.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZQCdAD0enKUAAD+wU2lXjZtGjNHNt/RogizoXs9iGGFHEa73CCu6AAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    23391: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAGlobalDeakin.481e4d8f.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAkA4JZQCdAEPAQEwQAD++3GmOD23XftrWna9uBue3a7YUBohsFxAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    3270: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAGoldenGateUniversity.04357870.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYwCdAD0bSBwAN5iPM9S+fnkZ42gauIb86bYfcbnyNdcIujKQBHAlhAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    71653: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAISM.d4c6bb0b.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAhMYET/IwBWUDggPAAAANABAJ0BKggABQACQDgllAJ0ARSZ8giAAP71/tXkInkDp0U24RpUzh5uezBdRh63wWi+mhZWiM8WmAwAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    36155: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBASunderland.72e435b2.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAUAAkA4JZwCdAD0QVz/QAD+7bO39aqqXeIsh0f3JRzRzCRBL1/mJa1sEBwqd/aJdQMZTo8GOF6QVAAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    89018: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MBAUTICA.5ded4d86.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JQBOgB5vaUYAAP5OIaXwhNJfMntKZLzkN3I6trZqYklWVNP02ZDTeJ2GVtjRo4zvW2lDAn9wAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    85379: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MSBAGoldenGate.b2325a9e.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JYwCdAD0HRxxAAD9nSenyBXsDJoUJgZGns+58xZIG+kvP/wq+GKIAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    77967: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/MasterofLibraryandInformationScience.2073727c.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoIAAUAAkA4JZwCdAEXfpiQ1gAA4geeZtXXm1hYydU+vz91ap/7haHlVhpAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    26886: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PGDiplomainIT.6069f4f1.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAkA4JZwAAppikcAA/pE5F/oomBpZiTzNy4GAfPdrAkr1GgAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    5349: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PG_Diploma_In_Human_Resource_Management.2011fc43.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JZQCdAD0QV5ggAD+8mXt5d6WT4LYhH14lq9nYsI67voKVt7hQwcsCC4UAPReTITYbgAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    36361: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PG_Diploma_in_Data_Science.157663e2.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoIAAUAAkA4JbACdLoAArp8l3gA/CWS053G7Djz8OB/T+p5BxcCv1125TL5gT3yLuCSFokKs/7cffvpUekAWhAbAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    7807: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PG_Diploma_in_Finance_&_Accounting.6cca7ce8.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAQAgCdASoIAAUAAkA4JZwCdG1/AkKoGS4AAP7m7XARCqlyZEsJ+9FbpAH9SZ4ijwD5449YoteA8WA35/wAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    30256: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PG_Diploma_in_Marketing_Management.e927d08b.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAQCdASoIAAUAAkA4JQBOgB6SuDaAAP7g2aP9XC0s3p338pMG/cP8f6BzvIh3xPjfFH1V+3kDdBpxUNiR+Ba13/Zpo+wqHydvNwAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    54448: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/PG_Diploma_in_Retail_Management.cf49b94a.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAUAAkA4JZwCdH8AFbMUjgAA4n6waaGOjpNf57OCrMAxZYBTjszF962mmS5o2MkAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    32861: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/Professional_Diploma_in_Digital_Marketing.4b871dd0.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAkA4JZwC7AEUpFp2wQAA/pwTVazzrNGa4H/j/3MjHmD7Ljf9l/3KzCa40Y+7AAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    33583: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/ProjectManagementCertification.49e752d9.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZwAAvyEsHHsAAD+iIwhsGng1a6N3wxDLzpp68d9hsUGHag7nNlpuwAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    30792: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/SupplyChainManagementCertification.4eb71f4a.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAQCdASoIAAUAAkA4JagCdADze0iIAP7m5Xdf7RhILk9gbCNcdoCcFkyNwyO98YPw9JaF8dn+Li9W2Z8HP3SEh7NbHe/W/o9vgAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    12020: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceBBA.58f96e35.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JQBOgB6Hr2f2AAD9nOKSbf6/XC9zx/vVzv6cfAdtdCH/aq3FviZm6pkDlm8PDvu6btOoYAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    1043: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceBCA.6afb81a1.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAUAAkA4JbACdAD5hInrCAD+4asrf41/vsVeP1c3rMM7dMQPvhFxks1WR6V3gChpfV/bwRf6PLV+4Ek3jgAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    5516: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceBCom.c740729f.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAkA4JZQCw7EO2pOZYAD+iPn2JVxaRJcGLchfQ/F3m7FWfG1r6AWuvwrIhPvpk+RAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    72599: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceBSc.0f6b9897.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAkA4JQBOgCLMJWvLqwAA/Nl6XkGAQfTZN3UWJB9uxU/qredHB/KS3sQCYoog+uNRBrl6RuQAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    21925: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceMBA.b6b377b9.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JYwCdADzesjgAP7A2a3AE1ieuaUhs/GTkyaQc4ajGO8N7yl+sOzGE1hAAAAA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    67003: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceMCA.34309f4a.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEO/gPIAAD+hBuwYwbHbbbEzvz+Om1rjIA/Z3W3biggXV1jUAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    94204: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/DistanceMCom.fdd3ad15.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JQBOgB6TFo4SAAD+2rsQ/xayk7KpOnee+OQwFcZTveeB838GMskr2WWr+JZjkYzlUb2EXA7xGC/DCOAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    46523: function (e, a, i) {
      "use strict";
      i.r(a),
        (a.default = {
          src: "/_next/static/media/LR_logo.23fe17c1.webp",
          height: 207,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAQAAAAAcWcBddTFI/CjGoM0NBNScLDhwRAFZQOCA4AAAAsAEAnQEqCAADAAJAOCUAToAekGCGAAD++9AmQm8X1Due3KaDbIoLA5W7Ma9L34JWWXsZnslIAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    42568: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineBA.117f04f4.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoIAAUAAkA4JZACdAD5ijd3vwAA/sHq6CN7dcItrWuY2QSUIY0LIFvopuANyHLHr/Pbvz66JW7A3C0/YAAAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    55001: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineBBA.2c5a5552.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAkA4JYgCdADze7hYAPKdfUTzGDVHt/eGDKujTg0XhVMCDwoiRlmPgl7zPBuOXxE7JN9kGlWgAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    88876: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineBCA.9992faed.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZwAAp1yiAQAAP5niTSviX2fnmXNy1nklUvtQ1v8uIF5dg9RC1EwAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    25668: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineBCom.a5e960d1.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAkA4JQBOgB6SuDaAAP76k672jGULGb1qoTgmHQAuy24eed81jxXQxrqs8Eve5BiVrmSr1uwA",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    73716: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineMA.f853951c.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZQCdAD0h61QAPw1iBl43+ryzpfr3d/DGU/7YLaV7SEpy7QFR3kAAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    36451: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineMBA.d9316f36.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAkA4JZQCdAD0eqnsAP7xg2SeeUqXe5Z5BiE2kYnMAFsUxp4aJ7YxP/g3XAZtzVZ016UAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    1626: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineMCA.bd5f4d11.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JaQAAub17j5AAP6Rv5SHfol/y2AOCev8eujkcAtJtx2yOTU/K+XgAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    80411: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineMCom.7647deef.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JbACdAD0QV+MYAD+uEhNzLPy7km4WyZX8NIL87l+H4FRbEzAnGq3C0GoBkZF5zUzYZQnqzzQzXdC2sgAAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    78504: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/OnlineMSc.f7fa37d8.webp",
        height: 164,
        width: 256,
        blurDataURL:
          "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JZQCdAEWTxotNAD+9BJmt+Yi3bUet8V3g0ZMDTkvoz6ze+kARgQYMN43qKhgAnJix7LZAAA=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    56999: function (e, a, i) {
      "use strict";
      i.r(a),
        (a.default = {
          src: "/_next/static/media/careerqr.99c2a425.webp",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBEAAAABD9D/iAgIBJLVcx8iov+hAQBWUDggPAAAALABAJ0BKggACAACQDglpAACWjT+TgAA/Kx3cK4An035NDu50i0SqRZ34yw5UW3obw7+Fk/u75t4AAAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    71157: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/logo-white.93af67a1.webp",
        height: 175,
        width: 544,
        blurDataURL:
          "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAVAAAAAYzOQB/N0o3B215AE0/PhUJHiMGAFZQOCA8AAAAsAEAnQEqCAADAAJAOCWUAnQBDvpgYADOPiDVTfblOSad53DsZV29DkUF6jJYL32kkUG7UR9DGkLSAAAA",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    72588: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Work_Sans_8a48d8', '__Work_Sans_Fallback_8a48d8'",
          fontStyle: "normal",
        },
        className: "__className_8a48d8",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        9799, 4545, 9432, 8716, 4405, 8796, 6263, 9492, 3399, 8108, 9691, 7035,
        3991, 6853, 9232, 7457, 3645, 821, 5797, 9932, 9909, 7278, 7400, 2937,
        3784, 2717, 1744,
      ],
      function () {
        return e((e.s = 65144));
      }
    ),
      (_N_E = e.O());
  },
]);
