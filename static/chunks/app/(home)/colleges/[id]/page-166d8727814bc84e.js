(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9483],
  {
    91443: function (e, a, i) {
      Promise.resolve().then(i.t.bind(i, 3645, 23)),
        Promise.resolve().then(i.t.bind(i, 69350, 23)),
        Promise.resolve().then(i.t.bind(i, 13192, 23)),
        Promise.resolve().then(i.t.bind(i, 88174, 23)),
        Promise.resolve().then(i.t.bind(i, 31744, 23)),
        Promise.resolve().then(i.bind(i, 96505)),
        Promise.resolve().then(i.bind(i, 47453)),
        Promise.resolve().then(i.bind(i, 74425)),
        Promise.resolve().then(i.t.bind(i, 42915, 23)),
        Promise.resolve().then(i.bind(i, 9066)),
        Promise.resolve().then(i.bind(i, 75688)),
        Promise.resolve().then(i.bind(i, 68866)),
        Promise.resolve().then(i.t.bind(i, 61072, 23)),
        Promise.resolve().then(i.t.bind(i, 35094, 23)),
        Promise.resolve().then(i.t.bind(i, 61528, 23)),
        Promise.resolve().then(i.t.bind(i, 1877, 23)),
        Promise.resolve().then(i.t.bind(i, 84321, 23)),
        Promise.resolve().then(i.t.bind(i, 81886, 23)),
        Promise.resolve().then(i.t.bind(i, 16128, 23)),
        Promise.resolve().then(i.t.bind(i, 97829, 23));
    },
    88018: function (e, a, i) {
      "use strict";
      i.r(a),
        i.d(a, {
          default: function () {
            return n.a;
          },
        });
      var l = i(92560),
        n = i.n(l),
        r = {};
      for (var t in l)
        "default" !== t &&
          (r[t] = function (e) {
            return l[e];
          }.bind(0, t));
      i.d(a, r);
    },
    92560: function (e, a, i) {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (function (e, a) {
          for (var i in a)
            Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
        })(a, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return o;
          },
        });
      let l = i(50390),
        n = i(75853),
        r = i(3645),
        t = l._(i(39193));
      function o(e) {
        let { props: a } = (0, n.getImgProps)(e, {
          defaultLoader: t.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, i] of Object.entries(a)) void 0 === i && delete a[e];
        return { props: a };
      }
      let s = r.Image;
    },
    47453: function (e, a, i) {
      "use strict";
      i.r(a);
      var l = i(76136),
        n = i(15082),
        r = i(12988),
        t = i.n(r);
      let o = [
        {
          id: 2,
          path: "/colleges/sharda-university-online",
          tag: "AW-604138654/ukBeCMKr1b0ZEJ7ZiaAC",
          source: "CM",
          collegeID: "925",
        },
      ];
      a.default = (e) => {
        let { path: a, collegeId: i } = e;
        (0, n.useEffect)(() => {
          sessionStorage.setItem("collegeId", i);
        }, [i]);
        let r = o.find((e) => e.path === a),
          s = null == r ? void 0 : r.tag,
          [_, c] = (0, n.useState)({});
        (0, n.useEffect)(() => {
          let e, a;
          (e = new URL(window.location.href)),
            (a = {}),
            e.searchParams.forEach((e, i) => {
              i.startsWith("utm_") && (a[i] = e);
            }),
            c(a);
        }, []),
          (0, n.useEffect)(() => {
            window.sessionStorage && sessionStorage.getItem("lr_utm_source");
          }, []);
        let [d, g] = (0, n.useState)(!1),
          [h, m] = (0, n.useState)({
            name: "",
            email: "",
            phone: "",
            program: "",
            state: "",
          }),
          v = async (e) => {
            e.preventDefault(), g(!0);
            let l = ["name", "email", "phone", "program", "state"].filter(
              (e) => !h[e]
            );
            if (l.length > 0) {
              alert(
                "Please enter data for the following fields: ".concat(
                  l.join(", ")
                )
              ),
                g(!1);
              return;
            }
            if (10 !== h.phone.length) {
              alert("Phone number should be exactly 10 digits"), g(!1);
              return;
            }
            let n = new URLSearchParams(window.location.search).get(
                "utm_content"
              ),
              r = {
                name: h.name,
                email: h.email,
                phone: h.phone,
                program: h.program,
                state: h.state,
                path: a,
                clg_id: i,
                lead_type: "CLL",
                source: n || "WEB",
              };
            try {
              (
                await fetch(
                  "https://learned-one-411711.wl.r.appspot.com/lead",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(r),
                  }
                )
              ).ok &&
                (s &&
                  (console.warn("⚠ Firing selective gTag logic"),
                  s &&
                    gtag("event", "conversion", {
                      send_to: s,
                      event_callback: function () {
                        console.warn("⚠ Firing selective gTag logic");
                      },
                    })),
                alert("We will connect with you soon!"),
                m({ name: "", email: "", phone: "", program: "", state: "" }));
            } catch (e) {
              console.error("Error submitting the form:", e),
                alert("Error submitting the form. Please try again later.");
            } finally {
              g(!1);
            }
          },
          u = (e) => {
            let { name: a, value: i } = e.target;
            m((e) => ({ ...e, [a]: i }));
          };
        return (0, l.jsxs)("div", {
          className: t().collegeform,
          children: [
            (0, l.jsx)("h2", {
              className: t().form_heading,
              children: "Get Free Career Consultation",
            }),
            (0, l.jsx)("div", {
              className: t().form_div,
              children: (0, l.jsxs)("form", {
                className: t().form,
                onSubmit: v,
                children: [
                  (0, l.jsx)("input", {
                    type: "text",
                    placeholder: "Name*",
                    name: "name",
                    value: h.name,
                    onChange: u,
                  }),
                  (0, l.jsx)("input", {
                    type: "email",
                    placeholder: "Email*",
                    name: "email",
                    value: h.email,
                    onChange: u,
                  }),
                  (0, l.jsx)("input", {
                    type: "number",
                    placeholder: "Phone*",
                    name: "phone",
                    value: h.phone,
                    onChange: u,
                  }),
                  (0, l.jsxs)("select", {
                    name: "program",
                    value: h.program,
                    onChange: u,
                    children: [
                      (0, l.jsx)("option", {
                        value: "",
                        children: "Choose a Program*",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online MBA",
                        children: "Online MBA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Executive MBA",
                        children: "Executive MBA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online MCA",
                        children: "Online MCA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online MSC",
                        children: "Online MSC",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online MCOM",
                        children: "Online MCOM",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online MA",
                        children: "Online MA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online PGDM",
                        children: "Online PGDM",
                      }),
                      (0, l.jsx)("option", {
                        value: "Distance MEd",
                        children: "Distance MEd",
                      }),
                      (0, l.jsx)("option", {
                        value: "PG Diploma",
                        children: "PG Diploma",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online BBA",
                        children: "Online BBA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online BCA",
                        children: "Online BCA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online BSC",
                        children: "Online BSC",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online BCom",
                        children: "Online BCom",
                      }),
                      (0, l.jsx)("option", {
                        value: "Online BA",
                        children: "Online BA",
                      }),
                      (0, l.jsx)("option", {
                        value: "Distance BEd",
                        children: "Distance BEd",
                      }),
                      (0, l.jsx)("option", {
                        value: "IT Certifications",
                        children: "IT Certifications",
                      }),
                      (0, l.jsx)("option", {
                        value: "Help Me Decide",
                        children: "Help Me Decide",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("select", {
                    name: "state",
                    value: h.state,
                    onChange: u,
                    children: [
                      (0, l.jsx)("option", {
                        value: "",
                        children: "State/Province",
                      }),
                      (0, l.jsx)("option", {
                        value: "Arunachal Pradesh",
                        children: "Arunachal Pradesh",
                      }),
                      (0, l.jsx)("option", {
                        value: "Assam",
                        children: "Assam",
                      }),
                      (0, l.jsx)("option", {
                        value: "Bihar",
                        children: "Bihar",
                      }),
                      (0, l.jsx)("option", {
                        value: "Chhattisgarh",
                        children: "Chhattisgarh",
                      }),
                      (0, l.jsx)("option", {
                        value: "Delhi",
                        children: "Delhi",
                      }),
                      (0, l.jsx)("option", { value: "Goa", children: "Goa" }),
                      (0, l.jsx)("option", {
                        value: "Gujarat",
                        children: "Gujarat",
                      }),
                      (0, l.jsx)("option", {
                        value: "Haryana",
                        children: "Haryana",
                      }),
                      (0, l.jsx)("option", {
                        value: "Himachal Pradesh",
                        children: "Himachal Pradesh",
                      }),
                      (0, l.jsx)("option", {
                        value: "Jharkhand",
                        children: "Jharkhand",
                      }),
                      (0, l.jsx)("option", {
                        value: "Karnataka",
                        children: "Karnataka",
                      }),
                      (0, l.jsx)("option", {
                        value: "Kerala",
                        children: "Kerala",
                      }),
                      (0, l.jsx)("option", {
                        value: "Madhya Pradesh",
                        children: "Madhya Pradesh",
                      }),
                      (0, l.jsx)("option", {
                        value: "Maharashtra",
                        children: "Maharashtra",
                      }),
                      (0, l.jsx)("option", {
                        value: "Manipur",
                        children: "Manipur",
                      }),
                      (0, l.jsx)("option", {
                        value: "Meghalaya",
                        children: "Meghalaya",
                      }),
                      (0, l.jsx)("option", {
                        value: "Mizoram",
                        children: "Mizoram",
                      }),
                      (0, l.jsx)("option", {
                        value: "Nagaland",
                        children: "Nagaland",
                      }),
                      (0, l.jsx)("option", {
                        value: "Odisha",
                        children: "Odisha",
                      }),
                      (0, l.jsx)("option", {
                        value: "Punjab",
                        children: "Punjab",
                      }),
                      (0, l.jsx)("option", {
                        value: "Rajasthan",
                        children: "Rajasthan",
                      }),
                      (0, l.jsx)("option", {
                        value: "Sikkim",
                        children: "Sikkim",
                      }),
                      (0, l.jsx)("option", {
                        value: "Tamil Nadu",
                        children: "Tamil Nadu",
                      }),
                      (0, l.jsx)("option", {
                        value: "Telangana",
                        children: "Telangana",
                      }),
                      (0, l.jsx)("option", {
                        value: "Tripura",
                        children: "Tripura",
                      }),
                      (0, l.jsx)("option", {
                        value: "Uttarakhand",
                        children: "Uttarakhand",
                      }),
                      (0, l.jsx)("option", {
                        value: "Uttar Pradesh",
                        children: "Uttar Pradesh",
                      }),
                      (0, l.jsx)("option", {
                        value: "West Bengal",
                        children: "West Bengal",
                      }),
                    ],
                  }),
                  (0, l.jsx)("button", {
                    type: "submit",
                    className: t().submit_btn,
                    onClick: v,
                    children: "Submit",
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    74425: function (e, a, i) {
      "use strict";
      i.d(a, {
        CollegeReview: function () {
          return m;
        },
      });
      var l = i(76136),
        n = i(67249),
        r = i.n(n),
        t = i(15082),
        o = i(88018),
        s = i(6403);
      let _ = (0, s.default)(() =>
          Promise.all([
            i.e(6153),
            i.e(1889),
            i.e(9492),
            i.e(4582),
            i.e(5797),
            i.e(9932),
            i.e(9909),
            i.e(9760),
            i.e(7278),
            i.e(3233),
          ]).then(i.bind(i, 83233))
        ),
        c = (0, s.default)(() =>
          Promise.all([
            i.e(6153),
            i.e(9492),
            i.e(5797),
            i.e(7278),
            i.e(4361),
          ]).then(i.bind(i, 74361))
        );
      var d = (e) => {
          let { param: a } = e,
            [i, n] = (0, t.useState)(!1),
            [s, d] = (0, t.useState)(!1),
            [g, h] = (0, t.useState)([!1, !1, !1, !1, !1]),
            [m, v] = (0, t.useState)(0),
            [u, p] = (0, t.useState)({
              reviewerName: "",
              rating: m,
              comment: "",
              mobile: "",
              email: "",
              verified: !1,
            }),
            f = (e) => {
              let a = [...g];
              if (((a[e] = !a[e]), a[e]))
                for (let i = 0; i <= e; i++) a[i] = !0;
              else for (let i = e + 1; i < a.length; i++) a[i] = !1;
              h(a), v(a.filter((e) => e).length);
            },
            x = (e) => {
              let { name: a, value: i } = e.target;
              p({ ...u, [a]: i });
            },
            w = async (e) => {
              e.preventDefault();
              let i = localStorage.getItem("LR_Num"),
                l = localStorage.getItem("email"),
                r = localStorage.getItem("LR_token");
              if (0 == m) return alert("Please give star rating");
              let t = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: r,
                },
                body: JSON.stringify({ ...u, rating: m, mobile: i, email: l }),
              };
              try {
                let e = await fetch(
                  "https://learned-one-411711.wl.r.appspot.com/CnC/college/add-review/".concat(
                    a
                  ),
                  t
                );
                if (!e.ok) throw Error("Failed to submit review");
                await e.json(),
                  alert("Review submitted successfully"),
                  p({
                    reviewerName: "",
                    rating: m,
                    comment: "",
                    mobile: "",
                    email: "",
                    verified: !1,
                  }),
                  h([!1, !1, !1, !1, !1]),
                  v(0);
              } catch (e) {
                console.log("Error submitting review:", e.message),
                  console.log(e),
                  alert("Please Login First"),
                  n(!0);
              }
            };
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("form", {
                onSubmit: w,
                children: (0, l.jsxs)("div", {
                  className: r().college_page_details_review_form_container,
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        r()
                          .college_page_details_review_form_rating_count_img_container,
                      children: [
                        (0, l.jsxs)("p", {
                          className:
                            r().college_page_details_review_form_rating_count,
                          children: [m, " out of 5"],
                        }),
                        (0, l.jsx)("div", {
                          children: g.map((e, a) =>
                            (0, l.jsx)(
                              "span",
                              {
                                className: "star ".concat(e ? "colored" : ""),
                                onClick: () => f(a),
                                children: e
                                  ? (0, l.jsx)(o.default, {
                                      src: "/images/StarOne.png",
                                      className:
                                        r()
                                          .college_page_details_review_form_rating_img,
                                      alt: "rating",
                                      width: 400,
                                      height: 400,
                                    })
                                  : (0, l.jsx)(o.default, {
                                      src: "/images/StarTwo.png",
                                      className:
                                        r()
                                          .college_page_details_review_form_rating_img,
                                      alt: "rating",
                                      width: 400,
                                      height: 400,
                                    }),
                              },
                              a
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: r().rating_form_container,
                      children: [
                        (0, l.jsx)("input", {
                          className: r().reviewer_name,
                          name: "reviewerName",
                          value: u.reviewerName,
                          onChange: x,
                          type: "text",
                          placeholder: "Enter your name",
                          required: !0,
                        }),
                        (0, l.jsx)("textarea", {
                          placeholder: "Write your reviews",
                          className: r().college_page_details_review_form_input,
                          name: "comment",
                          value: u.comment,
                          onChange: x,
                          required: !0,
                        }),
                        (0, l.jsx)("button", {
                          className: r().college_page_details_review_form_btn,
                          children: "Send message",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              i && (0, l.jsx)(_, { onClose: () => n(!1), onOpen: () => d(!0) }),
              s &&
                (0, l.jsx)(c, { onClose: () => d(!1), openSign: () => n(!1) }),
            ],
          });
        },
        g = i(79231),
        h = i(93224);
      let m = (e) => {
        let { collegeReview: a, param: i, title: n } = e,
          t = (e) => {
            let a = [],
              i = [];
            for (let i = 0; i < e; i++)
              a.push(
                (0, l.jsx)(
                  o.default,
                  {
                    src: g.default,
                    className: r().college_page_details_rating_img,
                    alt: "Colored Star",
                    width: 100,
                    height: 100,
                  },
                  "colored-".concat(i)
                )
              );
            for (let a = 0; a < 5 - e; a++)
              i.push(
                (0, l.jsx)(
                  o.default,
                  {
                    src: h.Z,
                    className: r().college_page_details_rating_img,
                    alt: "Non-Colored Star",
                    width: 100,
                    height: 100,
                  },
                  "non-colored-".concat(a)
                )
              );
            return (0, l.jsxs)("div", { children: [a, i] });
          };
        return (0, l.jsxs)("div", {
          className: r().college_page_details_review_container,
          id: "contact",
          children: [
            (0, l.jsxs)("h2", {
              className: r().college_page_details_review_heading,
              children: [n, " Review"],
            }),
            (0, l.jsx)(d, { param: i }),
            (0, l.jsx)("div", {
              className: r().college_page_details_verified_review_container,
              children:
                null == a
                  ? void 0
                  : a.map((e, a) => {
                      var i;
                      return (0, l.jsx)(
                        "div",
                        {
                          children:
                            !e.isDeleted &&
                            (0, l.jsxs)(
                              "div",
                              {
                                className:
                                  r().college_page_details_review_container_box,
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      r()
                                        .college_page_details_verified_review_name_rating_container,
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          r()
                                            .college_page_details_verified_reviewer_sort_name,
                                        children:
                                          null == e
                                            ? void 0
                                            : e.reviewerName[0],
                                      }),
                                      (0, l.jsxs)("div", {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className:
                                              r()
                                                .college_page_details_verified_reviewer_name,
                                            children: e.reviewerName,
                                          }),
                                          (0, l.jsxs)("div", {
                                            className:
                                              r()
                                                .college_page_details_verified_review_img_container,
                                            children: [" ", t(e.rating)],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      r()
                                        .college_page_details_reviewer_location_date,
                                    children: [
                                      "Reviewed on ",
                                      null == e
                                        ? void 0
                                        : null === (i = e.date) || void 0 === i
                                        ? void 0
                                        : i.split("T")[0],
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      r()
                                        .college_page_details_verified_review_comment,
                                    children: e.comment,
                                  }),
                                ],
                              },
                              "".concat(e.id, "-").concat(a)
                            ),
                        },
                        "".concat(e.id, "-").concat(a)
                      );
                    }),
            }),
          ],
        });
      };
    },
    75688: function (e, a, i) {
      "use strict";
      var l = i(76136),
        n = i(15082),
        r = i(63453),
        t = i.n(r),
        o = i(30491),
        s = i(28123);
      a.default = (e) => {
        let { faq: a } = e,
          [i, r] = (0, n.useState)(null),
          _ = (e) => {
            r(i === e ? null : e);
          };
        return (0, l.jsxs)("div", {
          className: t().container,
          children: [
            (0, l.jsx)("h2", { className: t().heading, children: "FAQ's" }),
            (0, l.jsx)("div", {
              className: t().faqMainContainer,
              children: a.map((e, a) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: t().faqMain,
                    children: [
                      (0, l.jsxs)("div", {
                        className: t().questionContainer,
                        children: [
                          (0, l.jsxs)("div", {
                            className: t().ques,
                            children: ["Q.", a + 1, " ", e.ques],
                          }),
                          (0, l.jsx)("div", {
                            onClick: () => _(a),
                            className: t().accordionIcon,
                            children:
                              i === a
                                ? (0, l.jsx)(o.t94, { className: t().icon })
                                : (0, l.jsx)(s._ej, { className: t().icon }),
                          }),
                        ],
                      }),
                      i === a &&
                        (0, l.jsx)("div", {
                          className: t().ans,
                          children: e.ans,
                        }),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        });
      };
    },
    68866: function (e, a, i) {
      "use strict";
      var l = i(76136);
      i(15082);
      var n = i(31229),
        r = i.n(n);
      i(79231), i(93224), i(88018);
      var t = i(58149);
      a.default = (e) => {
        let { data: a } = e,
          i = null == a ? void 0 : a.accreditation,
          n = (e) => {
            let a = JSON.parse(sessionStorage.getItem("compareList")) || [];
            a.some((a) => a._id === e._id)
              ? (console.log(
                  "Item with ID",
                  e._id,
                  "already exists in the compare list."
                ),
                alert("already exists in the compare list."))
              : (a.push(e),
                a.length > 3 && a.shift(),
                sessionStorage.setItem("compareList", JSON.stringify(a)),
                console.log(e._id, "indi college"));
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("link", {
              rel: "preload",
              as: "image",
              href: a.hero_image,
            }),
            (0, l.jsxs)("div", {
              className: r().collegeCarousal,
              children: [
                (0, l.jsx)("img", {
                  src: a.hero_image,
                  fetchPriority: "high",
                  className: r().clg_banner,
                  alt: "hero-image",
                  width: 240,
                  height: 240,
                }),
                (0, l.jsx)("div", { className: r().gradientOverlayStyle }),
                (0, l.jsxs)("div", {
                  className: r().collegeHeadingContainer,
                  children: [
                    (0, l.jsx)("h1", {
                      className: r().collegeHeading,
                      children: a.name,
                    }),
                    (0, l.jsxs)("p", {
                      className: r().location,
                      children: [a.city, ", ", a.state],
                    }),
                    (0, l.jsx)("p", {
                      className: r().ranking,
                      children: a.ranking[0],
                    }),
                    (0, l.jsx)("div", {
                      className: r().accreditation,
                      children:
                        null == i
                          ? void 0
                          : i.map((e, a) =>
                              (0, l.jsx)(
                                "img",
                                {
                                  src: e.path,
                                  alt: "accreditation",
                                  className: r().accImg,
                                  width: 20,
                                  height: 20,
                                },
                                a
                              )
                            ),
                    }),
                    (0, l.jsx)("div", {
                      className: r().proceedCompareContainer,
                      children: (0, l.jsx)(t.default, {
                        href: "/colleges",
                        children: (0, l.jsx)("button", {
                          className: r().collegeCompare,
                          onClick: () => n(a),
                          children: "Add To Compare",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    12988: function (e) {
      e.exports = {
        collegeform: "collegenquiry_collegeform__wTRAT",
        form_div: "collegenquiry_form_div__RSaaQ",
        form_heading: "collegenquiry_form_heading__GszFG",
        form: "collegenquiry_form__uF7mS",
        submit_btn: "collegenquiry_submit_btn__cjBuo",
        "button-loading-spinner": "collegenquiry_button-loading-spinner__M_sVZ",
      };
    },
    67249: function (e) {
      e.exports = {
        college_page_details_review_container:
          "CollegeReview_college_page_details_review_container__KbbIU",
        college_page_details_review_heading:
          "CollegeReview_college_page_details_review_heading__7gRVc",
        college_page_details_review_form_container:
          "CollegeReview_college_page_details_review_form_container__rP5km",
        college_page_details_review_form_rating_count_img_container:
          "CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd",
        college_page_details_review_form_rating_count:
          "CollegeReview_college_page_details_review_form_rating_count__oLqL0",
        college_page_details_review_form_rating_img:
          "CollegeReview_college_page_details_review_form_rating_img__h_Yj7",
        reviewer_name: "CollegeReview_reviewer_name__Fdlnr",
        college_page_details_review_form_input:
          "CollegeReview_college_page_details_review_form_input__niDf2",
        rating_form_container: "CollegeReview_rating_form_container__q_Xvp",
        college_page_details_review_form_btn:
          "CollegeReview_college_page_details_review_form_btn__xh_Sn",
        college_page_details_verified_review_container:
          "CollegeReview_college_page_details_verified_review_container__m7rGG",
        college_page_details_verified_review_name_rating_container:
          "CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll",
        college_page_details_verified_reviewer_sort_name:
          "CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ",
        college_page_details_review_container_box:
          "CollegeReview_college_page_details_review_container_box__t9yW9",
        college_page_details_verified_reviewer_name:
          "CollegeReview_college_page_details_verified_reviewer_name__EtV8N",
        college_page_details_rating_img:
          "CollegeReview_college_page_details_rating_img__IUdrQ",
        college_page_details_verified_review_img_container:
          "CollegeReview_college_page_details_verified_review_img_container__YJFHn",
        college_page_details_reviewer_location_date:
          "CollegeReview_college_page_details_reviewer_location_date__LoHUc",
        college_page_details_verified_review_verified:
          "CollegeReview_college_page_details_verified_review_verified__a1Fl3",
        college_page_details_verified_review_not_verified:
          "CollegeReview_college_page_details_verified_review_not_verified__6igdW",
        college_page_details_verified_review_comment:
          "CollegeReview_college_page_details_verified_review_comment__ec5gu",
      };
    },
    97829: function (e) {
      e.exports = {
        heading: "emi_heading__fOAZV",
        container: "emi_container__k2QbZ",
        title: "emi_title__UXhF1",
        para: "emi_para__0BeXd",
        diamondIcon: "emi_diamondIcon__XqB7W",
        emiDetail: "emi_emiDetail__gOPHp",
        emiDesc: "emi_emiDesc__GhNMM",
      };
    },
    63453: function (e) {
      e.exports = {
        heading: "faq_heading__ypOPH",
        container: "faq_container__v2O04",
        faqMainContainer: "faq_faqMainContainer__T9i6Q",
        faqMain: "faq_faqMain__ACefH",
        questionContainer: "faq_questionContainer__zAsad",
        ques: "faq_ques__Hgq7Z",
        ans: "faq_ans__cTHuB",
        accordionIcon: "faq_accordionIcon__8lbAd",
        icon: "faq_icon__lyHtn",
      };
    },
    16128: function (e) {
      e.exports = {
        heading: "scholarshop_heading__wLasH",
        container: "scholarshop_container__KSXI8",
        scholarDesc: "scholarshop_scholarDesc__hpzVr",
        diamondIcon: "scholarshop_diamondIcon__Spg2t",
        title: "scholarshop_title__k4_Sc",
        description: "scholarshop_description__Qzg2d",
        scholarshipDetail: "scholarshop_scholarshipDetail__m_Jhr",
      };
    },
    69350: function (e) {
      e.exports = {
        blink: "college_blink__yxq74",
        collegWrapper: "college_collegWrapper__vaQh1",
        collegeContainer: "college_collegeContainer__nqZS1",
        dataSection: "college_dataSection__0M4eV",
        Heading: "college_Heading__Z08ff",
        specialHeading: "college_specialHeading__eeK2M",
      };
    },
    31229: function (e) {
      e.exports = {
        clg_banner: "headCarousal_clg_banner__CXazi",
        collegeCarousal: "headCarousal_collegeCarousal__4a5Bq",
        gradientOverlayStyle: "headCarousal_gradientOverlayStyle__DEkSg",
        collegeHeadingContainer: "headCarousal_collegeHeadingContainer__E4uDz",
        collegeHeading: "headCarousal_collegeHeading__KBbuL",
        location: "headCarousal_location__7rFlL",
        ranking: "headCarousal_ranking__1yTOY",
        rating: "headCarousal_rating__3IbSP",
        ratingImg: "headCarousal_ratingImg___aeJT",
        accImg: "headCarousal_accImg__NoM8M",
        accreditation: "headCarousal_accreditation__HUqxZ",
        proceedCompareContainer: "headCarousal_proceedCompareContainer__rekWb",
        collegeProceed: "headCarousal_collegeProceed__12q85",
        collegeCompare: "headCarousal_collegeCompare__znhHH",
        ratingValue: "headCarousal_ratingValue__Z_ai1",
      };
    },
    79231: function (e, a, i) {
      "use strict";
      i.r(a),
        (a.default = {
          src: "/_next/static/media/StarOne.ab23013b.png",
          height: 20,
          width: 21,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXH/XQD/mAD/dwD/lQD/qwD/jgD/fwD/cQD/mwD/WQD/UAD/bQD+ugD/sgD/tQD/mAD/oAD+kwD/kwD/XgD/XgD/fQD/XgD/ogD/ZACxbdaKAAAAGHRSTlMAKqyAYG/+/f0mPl0OOLP+/dL8QNnAy5zi5oKoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nB3FRRLAMAwAsQ3agTI5//9op9VFAGniV5b560ibmY8Fb3vOq0X6LSISgKCq6oBnXOeoQKv05ngBRPUCE+K7wk8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    93224: function (e, a) {
      "use strict";
      a.Z = {
        src: "/_next/static/media/StarTwo.8edcf9fc.png",
        height: 20,
        width: 21,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXHOzs7IyMjJycnIyMjExMTIyMjT09PLy8vLy8vExMTIyMjOzs7f39+MvixAAAAADXRSTlMA/WjH/AY1/kqsGo2Ko39ySQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwVxUkSgDAMBLEe7wH8/+9S0UWQ2JAAj/xW5tKx4qwieo10RegFrFsq4Fv3HWCGtOIHIAUA/JIy8x4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [1413, 1073, 6452, 3399, 6402, 6853, 3645, 821, 1490, 3784, 2717, 1744],
      function () {
        return e((e.s = 91443));
      }
    ),
      (_N_E = e.O());
  },
]);
