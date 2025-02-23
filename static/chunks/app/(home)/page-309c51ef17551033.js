(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5608],
  {
    12999: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 3645, 23)),
        Promise.resolve().then(a.t.bind(a, 50821, 23)),
        Promise.resolve().then(a.bind(a, 34811)),
        Promise.resolve().then(a.bind(a, 14387)),
        Promise.resolve().then(a.bind(a, 78041)),
        Promise.resolve().then(a.bind(a, 46369)),
        Promise.resolve().then(a.bind(a, 76986)),
        Promise.resolve().then(a.bind(a, 11806)),
        Promise.resolve().then(a.bind(a, 20016)),
        Promise.resolve().then(a.bind(a, 32821)),
        Promise.resolve().then(a.bind(a, 7098)),
        Promise.resolve().then(a.bind(a, 37020)),
        Promise.resolve().then(a.bind(a, 38770)),
        Promise.resolve().then(a.bind(a, 75047)),
        Promise.resolve().then(a.bind(a, 3770)),
        Promise.resolve().then(a.bind(a, 255)),
        Promise.resolve().then(a.bind(a, 45887)),
        Promise.resolve().then(a.bind(a, 55858)),
        Promise.resolve().then(a.bind(a, 81665)),
        Promise.resolve().then(a.bind(a, 32379)),
        Promise.resolve().then(a.bind(a, 94928)),
        Promise.resolve().then(a.bind(a, 78683)),
        Promise.resolve().then(a.t.bind(a, 55475, 23)),
        Promise.resolve().then(a.bind(a, 74120)),
        Promise.resolve().then(a.bind(a, 25166)),
        Promise.resolve().then(a.bind(a, 26387)),
        Promise.resolve().then(a.t.bind(a, 28898, 23)),
        Promise.resolve().then(a.t.bind(a, 50826, 23)),
        Promise.resolve().then(a.bind(a, 21623)),
        Promise.resolve().then(a.bind(a, 71838)),
        Promise.resolve().then(a.t.bind(a, 23388, 23)),
        Promise.resolve().then(a.t.bind(a, 82469, 23)),
        Promise.resolve().then(a.t.bind(a, 42089, 23));
    },
    6403: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = a(36158),
        i = a.n(r);
    },
    36158: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return A;
          },
        });
      let r = a(50390);
      a(76136), a(15082);
      let i = r._(a(48077));
      function A(e, t) {
        var a;
        let r = {
          loading: (e) => {
            let { error: t, isLoading: a, pastDelay: r } = e;
            return null;
          },
        };
        "function" == typeof e && (r.loader = e);
        let A = { ...r, ...t };
        return (0, i.default)({
          ...A,
          modules: null == (a = A.loadableGenerated) ? void 0 : a.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    50257: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = a(12351);
      function i(e) {
        let { reason: t, children: a } = e;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
        return a;
      }
    },
    48077: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = a(76136),
        i = a(15082),
        A = a(50257),
        n = a(89301);
      function l(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let s = {
          loader: () => Promise.resolve(l(() => null)),
          loading: null,
          ssr: !0,
        },
        o = function (e) {
          let t = { ...s, ...e },
            a = (0, i.lazy)(() => t.loader().then(l)),
            o = t.loading;
          function d(e) {
            let l = o
                ? (0, r.jsx)(o, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              s = t.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, r.jsx)(n.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, r.jsx)(a, { ...e }),
                    ],
                  })
                : (0, r.jsx)(A.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(a, { ...e }),
                  });
            return (0, r.jsx)(i.Suspense, { fallback: l, children: s });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    89301: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return A;
          },
        });
      let r = a(76136),
        i = a(9519);
      function A(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let a = (0, i.getExpectedRequestStore)("next/dynamic css"),
          A = [];
        if (a.reactLoadableManifest && t) {
          let e = a.reactLoadableManifest;
          for (let a of t) {
            if (!e[a]) continue;
            let t = e[a].files.filter((e) => e.endsWith(".css"));
            A.push(...t);
          }
        }
        return 0 === A.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: A.map((e) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: a.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    60883: function (e, t, a) {
      "use strict";
      var r = a(76136);
      a(15082);
      var i = a(28902),
        A = a.n(i),
        n = a(22590),
        l = a(88018);
      a(58149);
      let s = {
        Aayushi: "/images/aayushi.jpeg",
        Jagpreet: "/images/jagpreet.jpeg",
        Vishnu: "/images/vishnu.png",
        Kamaldeep: "/images/kamal.webp",
        Elina: "/images/elina.webp",
        Komal: "/images/komal.jpeg",
        Prashant: "/images/prashant.webp",
        Manavta: "/images/manavta.webp",
      };
      t.Z = (e) => {
        let {
          title: t,
          excerpt: a,
          bannerImg: i,
          author: o,
          date: d,
          slug: _,
        } = e;
        a.replace("[...]", "");
        let c = new Date(d).toISOString().split("T")[0];
        return (0, r.jsx)("a", {
          href: "/blog/".concat(_),
          className: A().blog_link,
          children: (0, r.jsxs)("div", {
            className: A().singleBlogContainer,
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("div", {
                    className: A().bannerImgContainer,
                    children: (0, r.jsx)(l.default, {
                      src: i,
                      className: A().bannerImg,
                      alt: "banner-image",
                      height: 200,
                      width: 200,
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: A().author_profile_container,
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)(l.default, {
                          src: s[o],
                          className: A().auther_img,
                          alt: "img",
                          height: 150,
                          width: 150,
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("p", {
                            className: A().blog_author_name,
                            children: o,
                          }),
                          (0, r.jsx)("p", {
                            className: A().blog_date,
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: A().blog_title_excerpt_container,
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsx)("p", {
                          className: A().single_blog_heading,
                          children: t,
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: A().blog_excerpt,
                        dangerouslySetInnerHTML: {
                          __html: a.includes("[&hellip;]")
                            ? a.replace("[&hellip;]", "")
                            : a,
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: A().read_more_container,
                children: [
                  (0, r.jsx)("p", {
                    className: A().blog_card_readMore_text,
                    children: "Read More",
                  }),
                  (0, r.jsx)(l.default, {
                    className: A().blog_card_readMore_arrow,
                    src: n.default,
                    alt: "image",
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    25166: function (e, t, a) {
      "use strict";
      var r = a(76136),
        i = a(15082),
        A = a(89899),
        n = a.n(A),
        l = a(68271);
      let s = [
        {
          id: 1,
          name: "Kartikeya Misra",
          role: "(Altruist Technologies Pvt Ltd.)",
          content:
            "Learning Routes Platform provided me with a seamless and flexible learning experience. My coordinator, Mubbashir, was extremely supportive and helped me in every possible way throughout my entire course journey.",
          image: "/HomePage/Kartikeya.webp",
        },
        {
          id: 2,
          name: "Manav Dhodare",
          role: "(HDFC Bank)",
          content:
            "Learning Routes provided me with a seamless learning experience, it was like an excellent experience. Yash sir helped me with each and every part of assignments and exam schedules on time.",
          image: "/HomePage/Manav-Dhodare.webp",
        },
        {
          id: 3,
          name: "Namita Khandelwal",
          role: "(Deloitte India)",
          content:
            "It was a great learning experience for me, especially the RM that had been assigned to me. My relationship manager was always supportive, with a ready-to-respond attitude towards every query.",
          image: "/HomePage/Namita.webp",
        },
        {
          id: 4,
          name: "Piyush Sharma",
          role: "(Biocon Ltd.)",
          content:
            "Thanks to Learning Routes Team for all the assistance and support they provided in my 2-year PGDM programme. Overall it was a good experience.",
          image: "/HomePage/Piyush.webp",
        },
        {
          id: 5,
          name: "Bhavika Shah",
          role: "(Dentsu Aegis Network)",
          content:
            "My personal experience with Learning routes has been very good. Very supportive and patient. Thank you for the all the guidance.",
          image: "/HomePage/bhavika.webp",
        },
      ];
      t.default = () => {
        let [e, t] = (0, i.useState)(0),
          a = (t) => t === e || t === e + 1;
        return (0, r.jsx)("div", {
          className: n().container,
          children: (0, r.jsxs)("div", {
            className: n().wrapper,
            children: [
              (0, r.jsxs)("div", {
                className: n().header,
                children: [
                  (0, r.jsx)("h3", {
                    className: n().label,
                    children: "Trusted Feedback",
                  }),
                  (0, r.jsx)("h2", {
                    className: n().title,
                    children:
                      "Don't Believe Us, Check What Students Think Of Us",
                  }),
                  (0, r.jsxs)("div", {
                    className: n().navigation,
                    children: [
                      (0, r.jsx)("button", {
                        onClick: () => {
                          t((e) => (0 === e ? s.length - 2 : e - 1));
                        },
                        className: n().navButton,
                        "aria-label": "Previous testimonial",
                        children: (0, r.jsx)(l.x_l, { size: 24 }),
                      }),
                      (0, r.jsx)("div", {
                        className: n().progressBar,
                        children: (0, r.jsx)("div", {
                          className: n().progressFill,
                          style: {
                            width: "".concat(((e + 2) / s.length) * 100, "%"),
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: n().testimonialGrid,
                children: s.map((e, t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className: ""
                        .concat(n().testimonialCard, " ")
                        .concat(a(t) ? n().visible : ""),
                      children: (0, r.jsxs)("div", {
                        className: n().testimonialHeader,
                        children: [
                          (0, r.jsx)("div", {
                            className: n().imageContainer,
                            children: (0, r.jsx)("img", {
                              src: e.image,
                              alt: e.name,
                              className: n().avatar,
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("h3", {
                                className: n().name,
                                children: e.name,
                              }),
                              (0, r.jsx)("p", {
                                className: n().role,
                                children: e.role,
                              }),
                              (0, r.jsx)("div", { className: n().quote }),
                              (0, r.jsx)("p", {
                                className: n().content,
                                children: e.content,
                              }),
                            ],
                          }),
                        ],
                      }),
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
    26387: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return _;
        },
      });
      var r = a(76136),
        i = a(15082),
        A = a(58149),
        n = a(88018),
        l = a(68271),
        s = a(37615),
        o = a.n(s);
      let d = [
        {
          id: 1,
          image: {
            src: "/_next/static/media/1.8cd6968e.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAQAAkA4JZgCdAD0gbffAAD+9ls6S1eWVdd6wHSxPoZ4n/J8bMcNycld0RMs2ODc1G0cvTrDJVYY8K5SvAAAAAA=",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/colleges",
        },
        {
          id: 2,
          image: {
            src: "/_next/static/media/2.5e94ebee.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoIAAQAAkA4JaACdH8AGJwwz6WAAP3U8f0UpHEUiPCGQKosYQfD9YvB/0qvwSRIJyTQrVAA",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/online-video-meet",
        },
        {
          id: 3,
          image: {
            src: "/_next/static/media/3.9e3cd246.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAQAAkA4JaACdAD0gbboAP75pAEUWe4RAwmV9m3twK9Q0VMwV9WP/HCh8qvk0+H15PC65VZiAAAA",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/ai-college-finder",
        },
        {
          id: 4,
          image: {
            src: "/_next/static/media/4.81e2f927.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoIAAQAAkA4JQBOiP/wNw87tAAA/vmkARSn43QM0LP8sEef1D0dE6TPr91QcHreBdbvy4nBbE4ur42k7wAAAA==",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/online-video-meet",
        },
        {
          id: 5,
          image: {
            src: "/_next/static/media/5.39b2eaa2.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAQAAkA4JQBOgB6QOiNgAP7wa6kOR7IVMrj6AR07QuVLULp6otxwJw1GQS5e5BlIpWNIAAA=",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/online-video-meet",
        },
        {
          id: 6,
          image: {
            src: "/_next/static/media/6.1cc5bd26.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAQAAkA4JagCdAEf3TXYVgAA/u4b1r0MZ2Zi9Albwvx3daAsqAIuMt7bv9J7XX8oXYg+3pK9WgAA",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/study-abroad",
        },
        {
          id: 7,
          image: {
            src: "/_next/static/media/7.a0363d80.webp",
            height: 305,
            width: 640,
            blurDataURL:
              "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAQAAkA4JZgCdAD0gbVuAP73UEYlPxui7hlGcRs1XzAM9/CZAE57XkTyI9Y/1Q+2x3y/dbUYVZOHVwAAAA==",
            blurWidth: 8,
            blurHeight: 4,
          },
          url: "/",
        },
      ];
      var _ = () => {
        let [e, t] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % d.length);
            }, 7e3);
            return () => clearInterval(e);
          }, []),
          (0, r.jsxs)("div", {
            className: o().sliderContainer,
            children: [
              (0, r.jsx)("div", {
                className: o().sliderWrapper,
                children: (0, r.jsx)("div", {
                  className: o().slideGrid,
                  children: (() => {
                    let t = [];
                    for (let a = 0; a < 3; a++) {
                      let r = (e + a) % d.length;
                      t.push(d[r]);
                    }
                    return t;
                  })().map((e) =>
                    (0, r.jsx)(
                      A.default,
                      {
                        href: e.url,
                        className: o().slide,
                        children: (0, r.jsx)("div", {
                          className: o().imageWrapper,
                          children: (0, r.jsx)(n.default, {
                            src: e.image,
                            alt: "Slide ".concat(e.id),
                            width: 640,
                            height: 305,
                            priority: !0,
                            className: o().slideImage,
                          }),
                        }),
                      },
                      e.id
                    )
                  ),
                }),
              }),
              (0, r.jsx)("button", {
                onClick: () => {
                  t((e) => (e - 1 + d.length) % d.length);
                },
                className: "".concat(o().navButton, " ").concat(o().prevButton),
                "aria-label": "Previous slide",
                children: (0, r.jsx)(l.ZCH, { className: o().navIcon }),
              }),
              (0, r.jsx)("button", {
                onClick: () => {
                  t((e) => (e + 1) % d.length);
                },
                className: "".concat(o().navButton, " ").concat(o().nextButton),
                "aria-label": "Next slide",
                children: (0, r.jsx)(l.jS6, { className: o().navIcon }),
              }),
            ],
          })
        );
      };
    },
    21623: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return j;
        },
      });
      var r = a(76136),
        i = a(15082),
        A = a(29338),
        n = a(45498);
      a(8644);
      var l = a(88018),
        s = a(28898),
        o = a.n(s),
        d = a(68271),
        _ = a(59095),
        c = a(13644),
        h = a.n(c),
        u = (e) => {
          let { openModal: t } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: h().searchWrapper,
              onClick: t,
              children: (0, r.jsxs)("div", {
                className: h().searchBar,
                children: [
                  (0, r.jsx)("div", {
                    className: h().Hero_input,
                    variant: "unstyled",
                    children: "Search for colleges and courses",
                  }),
                  (0, r.jsx)("div", {
                    className: h().Hero_iconContainer,
                    children: (0, r.jsx)(_.jRj, { className: h().Hero_icon }),
                  }),
                ],
              }),
            }),
          });
        },
        g = a(6403),
        m = a(58149),
        b = {
          src: "/_next/static/media/poster.ea45f88b.webp",
          height: 215,
          width: 559,
          blurDataURL:
            "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAUWNXbnp3fpHS//////7/lRonJR0WDYY3AFZQOCA2AAAA0AEAnQEqCAADAAJAOCWcAnQBEBQEPgAA/tUXyqW+H+k1lWzzyxKDLe7HqrbpXFYPsgFQQgAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        x = {
          src: "/_next/static/media/poster1.44f1b3a4.webp",
          height: 215,
          width: 653,
          blurDataURL:
            "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAZVRqcXx0eZX///////7/nSkmHx0PEoA/AFZQOCA2AAAA0AEAnQEqCAADAAJAOCWUAsOxFPfb6mAA/tUXyqfrv/rCoHDpD4WNwYMhWWRkiHm0suKcsAAA",
          blurWidth: 8,
          blurHeight: 3,
        },
        p = {
          src: "/_next/static/media/batch.ac4d2e8b.webp",
          height: 238,
          width: 663,
          blurDataURL:
            "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAQ1ZJXmpoZ33K/////PP/mAgRDwkHAVI1AFZQOCAyAAAAsAEAnQEqCAADAAJAOCWcAnQBDo4QgAD+/MmwCP7gjxYI4KivFPU84ZiOmPxB9woXAAA=",
          blurWidth: 8,
          blurHeight: 3,
        },
        C = {
          src: "/_next/static/media/s1.6193f08f.webp",
          height: 763,
          width: 986,
          blurDataURL:
            "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAYAAkA4JYwCdADW0agAAP765Zo9TEyHIv+s99vPzywIY9veiofGtCMmWdYuREW8v5IdoSnD32lwmlMAAA==",
          blurWidth: 8,
          blurHeight: 6,
        },
        w = {
          src: "/_next/static/media/s2.35df2925.webp",
          height: 696,
          width: 687,
          blurDataURL:
            "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAA+AAC3ZQAAjt7SY71+AIO6vgNq7ulmI4S6gub//8sAdNHT6///1mDg6YNV//9BBzlxIWb//2AAAmoCcvXydABWUDggUgAAANABAJ0BKggACAACQDgljAJ0APSYsrsAAP7rnd6x4chn9Axpyh2yrar7A3o+xp/O70249jtlsfH3mP1ivo+YDisbRlYmo4brLovRI0dsR297aAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/s4.672ee0b2.webp",
          height: 698,
          width: 553,
          blurDataURL:
            "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAACOXAAAAGL74jkAV/////Qfs/////9wrv////9zg/////+a0vf//+/Og/////hyAFZQOCBYAAAAMAIAnQEqBgAIAAJAOCUATo1wFvqgbah/ygAA/uz5EbJF5mWP1/1idZeKtZKiKXjf+96wlsLLZ2RNh55zYmwXfi7sTH7crOaPrufTgDvqBgaN5n60BAzAAA==",
          blurWidth: 6,
          blurHeight: 8,
        },
        v = a(83315),
        U = a.n(v),
        Q = (e) => {
          let { leadCount: t } = e;
          return (0, r.jsxs)("div", {
            className: U().countercontainer,
            children: [
              (0, r.jsxs)("div", {
                className: U().counter,
                children: [
                  String("".concat(t))
                    .split("")
                    .map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        { className: U().digit, children: e },
                        t
                      )
                    ),
                  (0, r.jsx)("div", {
                    className: U().livetextbanner,
                    children: "\xb7 LIVE",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: U().counterlabel,
                children: "STUDENTS COUNSELLED",
              }),
            ],
          });
        };
      let B = (0, g.default)(
        () =>
          Promise.all([
            a.e(2e3),
            a.e(780),
            a.e(6324),
            a.e(5942),
            a.e(6255),
            a.e(4028),
            a.e(8070),
          ]).then(a.bind(a, 73483)),
        { loadableGenerated: { webpack: () => [73483] }, ssr: !1 }
      );
      var j = (e) => {
        let { leadCount: t } = e,
          [a, s] = (0, i.useState)(!1),
          _ = () => {
            s(!0);
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(A.tq, {
              spaceBetween: 0,
              speed: 2e3,
              loop: !0,
              centeredSlides: !0,
              autoplay: { delay: 6e3, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              navigation: !1,
              modules: [n.pt],
              className: o().mySwiper,
              children: [
                (0, r.jsx)(A.o5, {
                  className: o().card,
                  children: (0, r.jsxs)("div", {
                    className: o().heroMain,
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                          className: o().searchContent,
                          children: [
                            (0, r.jsxs)("div", {
                              className: o().searchContentBox,
                              children: [
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(Q, { leadCount: t }),
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u, { openModal: _ }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: o().textContainer,
                              children: [
                                (0, r.jsxs)("div", {
                                  className: o().Hero_text_1,
                                  children: [
                                    (0, r.jsx)("strong", {
                                      children: "Grab It Now:",
                                    }),
                                    " Early Bird Offer!",
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: o().Hero_text_2,
                                  children: [
                                    "₹ 7000/- Off On Admissions",
                                    (0, r.jsx)("sup", { children: "*" }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: o().hashtag,
                                  children: (0, r.jsx)(l.default, {
                                    src: p,
                                    alt: "hashtag",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: o().made,
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "MADE IN INDIA WITH",
                                    }),
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(d.$0H, {
                                        color: "red",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: o().imgCont,
                        children: (0, r.jsx)(l.default, {
                          loading: "eager",
                          src: f,
                          alt: "slide1",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(A.o5, {
                  className: o().card,
                  children: (0, r.jsxs)("div", {
                    className: o().heroMain,
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                          className: o().searchContent,
                          children: [
                            (0, r.jsxs)("div", {
                              className: o().searchContentBox,
                              children: [
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(Q, { leadCount: t }),
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u, { openModal: _ }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: o().textContainer,
                              children: [
                                (0, r.jsx)("div", {
                                  className: o().Hero_text_1,
                                  children: "India Ki Top Universities Se",
                                }),
                                (0, r.jsx)("div", {
                                  className: o().Hero_text_2,
                                  children: "Apni Skills Ko Enhance Karo!",
                                }),
                                (0, r.jsx)("div", {
                                  className: o().hashtag,
                                  children: (0, r.jsx)(l.default, {
                                    src: x,
                                    alt: "hashtag",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: o().made,
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "MADE IN INDIA WITH",
                                    }),
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(d.$0H, {
                                        color: "red",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: o().imgCont,
                        children: (0, r.jsx)(m.default, {
                          href: "/colleges",
                          children: (0, r.jsx)(l.default, {
                            src: C,
                            alt: "slide1",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(A.o5, {
                  className: o().card,
                  children: (0, r.jsxs)("div", {
                    className: o().heroMain,
                    children: [
                      (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                          className: o().searchContent,
                          children: [
                            (0, r.jsxs)("div", {
                              className: o().searchContentBox,
                              children: [
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(Q, { leadCount: t }),
                                }),
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u, { openModal: _ }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: o().textContainer,
                              children: [
                                (0, r.jsx)("div", {
                                  className: o().Hero_text_1,
                                  children:
                                    "Konse College Me Admission Lena Sahi?",
                                }),
                                (0, r.jsx)("div", {
                                  className: o().Hero_text_2,
                                  children: "Ab Karo Har College Compare",
                                }),
                                (0, r.jsx)("div", {
                                  className: o().hashtag,
                                  children: (0, r.jsx)(l.default, {
                                    src: b,
                                    alt: "hashtag",
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: o().made,
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "MADE IN INDIA WITH",
                                    }),
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(d.$0H, {
                                        color: "red",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: o().imgCont,
                        children: (0, r.jsx)(l.default, {
                          src: w,
                          alt: "slide1",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            a && (0, r.jsx)(B, { onClose: () => s(!1) }),
          ],
        });
      };
    },
    71838: function (e, t, a) {
      "use strict";
      var r = a(54567),
        i = a(76136),
        A = a(7008),
        n = a.n(A),
        l = a(15082),
        s = a(68636),
        o = a(60883);
      function d() {
        let e = (0, r._)([
          "\n        {\n          posts(first: 3) {\n            nodes {\n              id\n              slug\n              title\n              excerpt\n              date\n              featuredImage {\n                node {\n                  sourceUrl\n                  altText\n                }\n              }\n              author {\n                node {\n                  name\n                }\n              }\n            }\n          }\n        }\n      ",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      t.default = () => {
        let [e, t] = (0, l.useState)([]),
          [a, r] = (0, l.useState)(null);
        return (
          (0, l.useEffect)(() => {
            (async () => {
              let e = (0, s.Ps)(d());
              try {
                let a = await (0, s.WY)(
                  "https://askusedu.com/blogdashboard/graphql",
                  e
                );
                t(a.posts.nodes);
              } catch (e) {
                console.error("Error fetching blog posts:", e),
                  r("Error fetching blog posts");
              }
            })();
          }, []),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: n().News__Container,
              children: [
                (0, i.jsxs)("p", {
                  className: n().News__text_2,
                  children: ["What's", " Trending in the Ed-Tech World?"],
                }),
                (0, i.jsx)("h2", {
                  className: n().News__text_1,
                  children: "LATEST NEWS & EVENTS ",
                }),
                (0, i.jsx)("div", {
                  className: n().News__allCardsContainer,
                  children: a
                    ? (0, i.jsx)("div", { children: a })
                    : e.map((e) => {
                        var t, a, r, A;
                        return (0, i.jsx)(
                          o.Z,
                          {
                            slug: e.slug,
                            excerpt: e.excerpt,
                            title: e.title,
                            bannerImg:
                              null === (a = e.featuredImage) || void 0 === a
                                ? void 0
                                : null === (t = a.node) || void 0 === t
                                ? void 0
                                : t.sourceUrl,
                            author:
                              null === (A = e.author) || void 0 === A
                                ? void 0
                                : null === (r = A.node) || void 0 === r
                                ? void 0
                                : r.name,
                            date: e.date,
                          },
                          e.id
                        );
                      }),
                }),
              ],
            }),
          })
        );
      };
    },
    28902: function (e) {
      e.exports = {
        blog_link: "SingleBlogCard_blog_link__hbF4A",
        singleBlogContainer: "SingleBlogCard_singleBlogContainer__15LQw",
        bannerImgContainer: "SingleBlogCard_bannerImgContainer__aznfS",
        bannerImg: "SingleBlogCard_bannerImg__QItlV",
        author_profile_container:
          "SingleBlogCard_author_profile_container__VTwek",
        auther_img: "SingleBlogCard_auther_img__773C2",
        blog_author_name: "SingleBlogCard_blog_author_name__jv0bF",
        blog_date: "SingleBlogCard_blog_date__CLESk",
        blog_title_excerpt_container:
          "SingleBlogCard_blog_title_excerpt_container__YFISS",
        single_blog_heading: "SingleBlogCard_single_blog_heading__yRrXQ",
        blog_excerpt: "SingleBlogCard_blog_excerpt__dXl41",
        read_more_container: "SingleBlogCard_read_more_container__jvcJE",
        blog_card_readMore_arrow:
          "SingleBlogCard_blog_card_readMore_arrow__MHsYw",
        blog_card_readMore_text:
          "SingleBlogCard_blog_card_readMore_text__h4L__",
      };
    },
    55475: function (e) {
      e.exports = {
        college_card_container: "AllCollegeCards_college_card_container__Ts4Zo",
        college_grid_container: "AllCollegeCards_college_grid_container__PA9Ro",
        college_indi_card: "AllCollegeCards_college_indi_card__d9m_r",
        college_indi_card_img: "AllCollegeCards_college_indi_card_img__8_YF2",
        college_indi_card_name: "AllCollegeCards_college_indi_card_name__25zbO",
        viewAllLink: "AllCollegeCards_viewAllLink__R1QMr",
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
    89899: function (e) {
      e.exports = {
        container: "TestimonialSlider_container__Je36b",
        wrapper: "TestimonialSlider_wrapper__IvjzI",
        header: "TestimonialSlider_header__znYD7",
        imageContainer: "TestimonialSlider_imageContainer__qw6pl",
        label: "TestimonialSlider_label__z2WhH",
        title: "TestimonialSlider_title__I_aMr",
        navigation: "TestimonialSlider_navigation__cQfS8",
        navButton: "TestimonialSlider_navButton__Cflns",
        progressBar: "TestimonialSlider_progressBar__pQdwb",
        progressFill: "TestimonialSlider_progressFill__TJBB8",
        testimonialGrid: "TestimonialSlider_testimonialGrid__jr3sh",
        testimonialCard: "TestimonialSlider_testimonialCard__rAlFM",
        visible: "TestimonialSlider_visible__zceg4",
        avatar: "TestimonialSlider_avatar__tkuAI",
        quote: "TestimonialSlider_quote__D_DKH",
        name: "TestimonialSlider_name__gQxRY",
        role: "TestimonialSlider_role__D4hYz",
        content: "TestimonialSlider_content__dEIEb",
      };
    },
    37615: function (e) {
      e.exports = {
        sliderContainer: "ImageSlider_sliderContainer__mlhoZ",
        sliderWrapper: "ImageSlider_sliderWrapper__nAFir",
        slideGrid: "ImageSlider_slideGrid__NwM1v",
        "slide-left": "ImageSlider_slide-left__r6Ao5",
        "slide-right": "ImageSlider_slide-right__kbCe2",
        slide: "ImageSlider_slide__N_u17",
        imageWrapper: "ImageSlider_imageWrapper__w1Nxx",
        slideImage: "ImageSlider_slideImage__V_iD1",
        navButton: "ImageSlider_navButton__AOJvJ",
        prevButton: "ImageSlider_prevButton__mDjpr",
        nextButton: "ImageSlider_nextButton__qtGxb",
        navIcon: "ImageSlider_navIcon__j99zf",
      };
    },
    28898: function (e) {
      e.exports = {
        relative: "Hero_relative__x641X",
        newheroContainer: "Hero_newheroContainer__lAPRu",
        swiper: "Hero_swiper__CCXXt",
        sliderImage: "Hero_sliderImage__kPvKg",
        Hero_imageContainer: "Hero_Hero_imageContainer__PUlJI",
        Hero_textContainer: "Hero_Hero_textContainer__h_kfm",
        Hero_text_1: "Hero_Hero_text_1__tiOzY",
        Hero_text_2: "Hero_Hero_text_2__pG74x",
        Hero_UniTextContainer: "Hero_Hero_UniTextContainer__crnd2",
        Hero_UniTextContainer_text_1:
          "Hero_Hero_UniTextContainer_text_1__jBSiV",
        Hero_UniRatingBorder: "Hero_Hero_UniRatingBorder__OpDMn",
        Hero_UniTextContainer_text_2:
          "Hero_Hero_UniTextContainer_text_2__Pe4YL",
        Hero_inputContainer: "Hero_Hero_inputContainer__0DlW2",
        Hero_input: "Hero_Hero_input__u0o_z",
        Hero_iconContainer: "Hero_Hero_iconContainer__rD1fI",
        Hero_icon: "Hero_Hero_icon__mR8kJ",
        heroMain: "Hero_heroMain__dP9sl",
        imgCont: "Hero_imgCont__lhqFP",
        searchContent: "Hero_searchContent__wSOwy",
        hashtag: "Hero_hashtag__ky4R9",
        made: "Hero_made__edb3d",
        card: "Hero_card__ynLLv",
        Hero_static_input: "Hero_Hero_static_input__ilywU",
        searchContentBox: "Hero_searchContentBox__mTqoR",
        textContainer: "Hero_textContainer__zTKJs",
      };
    },
    13644: function (e) {
      e.exports = {
        search_res: "SearchBar_search_res__narLa",
        searchResults: "SearchBar_searchResults__kp5ou",
        searchCategory: "SearchBar_searchCategory__hruDv",
        searchTerm: "SearchBar_searchTerm__rdHYG",
        searchWrapper: "SearchBar_searchWrapper__zmgjs",
        searchBar: "SearchBar_searchBar__lYNNN",
        Hero_input: "SearchBar_Hero_input__VYpfM",
        Hero_iconContainer: "SearchBar_Hero_iconContainer__psyvf",
        Hero_icon: "SearchBar_Hero_icon__Wmwe2",
        modal_overlay: "SearchBar_modal_overlay__SdD18",
        modal: "SearchBar_modal__EQxTq",
        modal_sub: "SearchBar_modal_sub__0h_nb",
        close_button: "SearchBar_close_button__S2qgQ",
        join_popup: "SearchBar_join_popup__JXYCX",
      };
    },
    83315: function (e) {
      e.exports = {
        countercontainer: "counter_countercontainer__CiYqi",
        counter: "counter_counter__W_2Wz",
        digit: "counter_digit__L6cff",
        counterlabel: "counter_counterlabel__r7_fx",
        livetextbanner: "counter_livetextbanner__Vykhp",
      };
    },
    7008: function (e) {
      e.exports = {
        News__Container: "News_News__Container__039ly",
        News__text_1: "News_News__text_1__53wqj",
        News__text_2: "News_News__text_2__J_Ovz",
        News__allCardsContainer: "News_News__allCardsContainer__n0_G_",
      };
    },
    23388: function (e) {
      e.exports = {
        usefultools_container: "UsefulTools_usefultools_container__0usj7",
        usefultools_heading: "UsefulTools_usefultools_heading__T1fgC",
        usefultools_subheading: "UsefulTools_usefultools_subheading__P4IkQ",
        toolGrid: "UsefulTools_toolGrid__sVhb_",
        toolLink: "UsefulTools_toolLink__ztevN",
        toolCard: "UsefulTools_toolCard__fe_ci",
        iconWrapper: "UsefulTools_iconWrapper__hAyFp",
        icon: "UsefulTools_icon__wppRA",
        toolName: "UsefulTools_toolName___I8lN",
        buttonWrapper: "UsefulTools_buttonWrapper__hoyza",
        buttonText: "UsefulTools_buttonText__LGVjG",
      };
    },
    42089: function (e) {
      e.exports = {
        grid: "FeatureCards_grid__eohS1",
        card: "FeatureCards_card__nomhR",
        blue: "FeatureCards_blue__Zui4W",
        yellow: "FeatureCards_yellow__UlRWd",
        iconContainer: "FeatureCards_iconContainer__nJWtY",
        icon: "FeatureCards_icon__xRWQo",
        title: "FeatureCards_title__2rUbs",
        description: "FeatureCards_description__WKAA2",
      };
    },
    82469: function (e) {
      e.exports = {
        container: "WhyUs_container__jG_LS",
        heroSection: "WhyUs_heroSection__fE4YP",
        leftSection: "WhyUs_leftSection__dvECi",
        rightSection: "WhyUs_rightSection__MwuY5",
        experienceCard: "WhyUs_experienceCard__mZ824",
        experienceContent: "WhyUs_experienceContent__bU0un",
        timeIcon: "WhyUs_timeIcon__ie8GL",
        imageWrapper: "WhyUs_imageWrapper__UfsSb",
        image: "WhyUs_image__pqSOt",
        imageOverlay: "WhyUs_imageOverlay__s3DZX",
        reviewCard: "WhyUs_reviewCard__hFj11",
        reviewHeader: "WhyUs_reviewHeader__1G6H9",
        avatarGroup: "WhyUs_avatarGroup__hCobu",
        aboutSection: "WhyUs_aboutSection__oJ_R3",
        aboutHeader: "WhyUs_aboutHeader__kzyyu",
        mainTitle: "WhyUs_mainTitle__Y5jRZ",
        description: "WhyUs_description__y2f5_",
        exploreButton: "WhyUs_exploreButton__CFVYV",
        arrowIcon: "WhyUs_arrowIcon__xypJT",
      };
    },
    76986: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/ICFAi.ecf6e778.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAKTkmRTwTLgA2WiRkRFM9AE6srKysrE4AAFZQOCBSAAAA8AEAnQEqCAADAAJAOCWwAnRMgAFWCbQAAOJ7fOEuEgkjHaiVoL7t78ugi7kvAHLR+Dw6rZICGBkNyZP/xIr+/L8qizM/1isiJJ/8QoGrYVAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    75047: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/OnlineUU.0cde2983.png",
          height: 67,
          width: 101,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEVAYJtGrtWEXWg8dbA5cps3ZKRAZ4igYKBoWFdNtt5DdYlFYIFJXnqCYkNFXotYudkzrNLhdTGWtVcxN5Hf3z8ccbJuBkB2AAAAFnRSTlNdYUA/b3ZUAjVIp1VJMT43KDRMtDCxzcL/6wAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwFwYcBACEIALFTUcD+xf1XNUH1f+JW5eMVElCrzNJbQU4aFs1wXyF4zhceQgFCaGC6YwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    34811: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/au-logo.5f7724f4.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAnFsjJ0UvLhP/p0pJVTE2BmcnKiwsLiEOAFZQOCA+AAAA0AEAnQEqCAADAAJAOCWQAnQBDwCpNwAA9r5ghX9xn1EKJnCnaQJC4MwTmt7T9C9I9szS7Mft2J6qZRR34AA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    14387: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/chitkara.9052a633.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAACbtGSSkpqlmuD/kCEjMScknLZlAFZQOCBCAAAA0AEAnQEqCAADAAJAOCWwAnQA9IHQ9QAA/fB4Fm70ml/3ubf6IO/d7bBVpPfVgBr857If/Bv/8kfkDZD/4N/qAAAA",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    78041: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/cu.96c17570.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAACb2CWFIUAAAL9LByb1YGAAinaycfEgEAAFZQOCA4AAAA0AEAnQEqCAADAAJAOCUAWHYj/9prSAAA/gmpf8jrP0Gg6LY2YGcCZO45/94DKUq/RZVL4nOyAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    46369: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/dypatil.0a426fea.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAfsIrIyAnIAC4/zQlNS8KACF3AAUQCwAAAFZQOCA2AAAAsAEAnQEqCAADAAJAOCWUAAMWE4PmgAD+2GGMA45qvluUNAcxZ1T1e8R7OsSXr9w8RiCi2AAA",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    11806: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/iim-raipur.34a45af0.png",
          height: 81,
          width: 233,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEU+XlZMaXF/AEd7RUx6Q0m4YW6KQUtNAC3/AAAAB3RSTlMcAAJfSni0SlPcCwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB9JREFUeJwVxrkNAAAIxLDkePYfGeHKxN5ORGtKP4B6AwAALOdpOQoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    20016: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/iima.11f6349f.png",
          height: 72,
          width: 208,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEUAAFoLDl4RFGEAEVgLEGAVFWEWFl8PEmGkGQvUAAAACHRSTlMCnYQObDw4eFQMuzUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAdSURBVHicY2BgYGNiZQABZkZGRmYwi4WJhZmBAQACAAAkqXjhPgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    32821: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/imt.b38505c6.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAANA4gEQAAAABuGTIxLDMWDTMfDw4ODg4IAFZQOCA4AAAA0AEAnQEqCAADAAJAOCWcAsOw9IzyPAAA4nt9+qtp95Up++y+zhxD4H+C3T+WDVnt9qRayaYcAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    7098: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/jain-online.0e3b2441.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAGRMaJxcBAACnboqFbh8kHwgWBwoHAAAAAFZQOCAuAAAAkAEAnQEqCAADAAJAOCWkAALnUAwQAP7g29bddf//VX/TEfmhFBIIuMiLAAAAAA==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    37020: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/lpu.e74d44d9.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWZ0ubScWAADn/4l9LS4qAGGnMW4oJiEAAFZQOCA4AAAAMAIAnQEqCAADAAJAOCWUAnRH/4HsfmR9ZAAA/uJI1vWuOYaYVE6qucNFeZTeDJGNY+sOPq4oAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    38770: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/online-manipal.80de36c9.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAATgoAAAAAAAB5OXFNMDA6GiUIAAAAAAAAAFZQOCA4AAAAsAEAnQEqCAADAAJAOCWUAsOw9G0boAD+7jjlWbnEapff2bVlbZYltQR3D8FRkW/GAeXT3YcAAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    3770: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/op-jindal.8ac7ab5d.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAATimEABIX005gv9CAAAAAAFCoR0AAFZQOCA4AAAAsAEAnQEqCAADAAJAOCWUAuwA3QRlJAD+1zc5i7zD3hbAA3r9vXPBwjqSAcMl3ZFVLvfun2NQAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    255: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/upes.f27139aa.webp",
          height: 84,
          width: 250,
          blurDataURL:
            "data:image/webp;base64,UklGRmYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAA7e3t7e3t7an/////////ttnZ2dnZ2dmaAFZQOCAmAAAAkAEAnQEqCAADAAJAOCWkAALnT91gAP77uAAlkwE7MngXqUAAAAA=",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    45887: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/DanishC.6a230675.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JQBOgCPQS3KvEAD+imeTamQfaMDZKHDJXUPIHjzn3/q+IIsaDuo0doUkvhoEaIAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    81665: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/Mubashshir.759370d7.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAkA4JYwCdAEOO/H0AAD+wrI3qCYX4jcr+IUC7NIXRNSgHgETzXhvo7Af5fG9gGAA",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    32379: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/VaishaliThakur.1fd1e788.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP7CqtW0CYn2UXwDNgL8/gWlntKqK6/XyTwImJcb1rwAAA==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    55858: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/krishna.ea39407e.webp",
          height: 373,
          width: 600,
          blurDataURL:
            "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP6t6KBo6f4XOVgNDex1GgJzhXEPr5J4ETJ2mfMfAAA=",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    94928: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/whyus1.b5169eee.webp",
          height: 500,
          width: 350,
          blurDataURL:
            "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoGAAgAAkA4JZwCdAD0MYo0AP4nYX1blZsVxpDnhZZyl1HZ20TEOGWZW8s9m4vx/42IUBFnT3j+xEAA",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    78683: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/whyus2.88302701.webp",
          height: 500,
          width: 350,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAwAgCdASoGAAgAAkA4JZQC7AYp5kyee5/0gAD5coolP2ZzGJ9fqLJbmlTTmdIPDwnvBfOiK+QxKBcYQ7MXziwAmjJiVjhgAAA=",
          blurWidth: 6,
          blurHeight: 8,
        });
    },
    22590: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/Arrow.2984707a.svg",
          height: 23,
          width: 50,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [
        613, 4405, 4545, 7250, 9492, 2469, 3645, 821, 36, 5848, 4120, 3784,
        2717, 1744,
      ],
      function () {
        return e((e.s = 12999));
      }
    ),
      (_N_E = e.O());
  },
]);
