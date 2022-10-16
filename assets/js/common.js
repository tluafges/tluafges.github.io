document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var n = document.querySelector("body"),
    r = document.querySelector(".nav__icon-menu"),
    c = document.querySelector(".nav__icon-close"),
    i = document.querySelector(".main-nav");
  r.addEventListener("click", () => {
    a();
  }),
    c.addEventListener("click", () => {
      l();
    });
  function a() {
    i.classList.add("is-open");
  }
  function l() {
    i.classList.remove("is-open");
  }
  setTimeout(function () {
    n.classList.add("is-in");
  }, 150),
    setTimeout(function () {
      n.classList.add("stop-animations");
    }, 1500);
  let s;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper"),
      clearTimeout(s),
      (s = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 300));
  }),
    reframe(
      ".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)"
    );
  const d = document.querySelector(".page img, .post img"),
    t = document.querySelectorAll(".page a img, .post a img");
  if (t) {
    for (var e = 0; e < t.length; e++)
      t[e].parentNode.classList.add("image-link");
    for (var e = 0; e < t.length; e++) t[e].classList.add("no-lightense");
  }
  if (
    (d &&
      Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense)", {
        padding: 60,
        offset: 30,
      }),
    document.querySelectorAll(".works-button").forEach((m) => {
      m.addEventListener("click", function (f) {
        f.preventDefault(),
          document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
      });
    }),
    document.querySelector(".my-slider"))
  )
    var p = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 20,
      nav: !1,
      mouseDrag: !0,
      autoplay: !1,
      controlsContainer: "#customize-controls",
      responsive: { 1024: { items: 3 }, 768: { items: 2 }, 0: { items: 1 } },
    });
  if (document.querySelector(".c-subscribe")) {
    var u = {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: !0,
      showCursor: !0,
      cursorChar: "|",
      onFinished: function () {},
    };
    ityped.init("#ityped", u);
  }
  const o = document.querySelector(".top");
  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight
      ? o.classList.add("is-active")
      : o.classList.remove("is-active");
  }),
    o.addEventListener("click", function () {
      window.scrollY != 0 &&
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
});
