const heroSection = document.querySelector(".hero");
const heroImg = document.querySelector(".hero__img");
const heroContent = document.querySelector(".hero__content");

const heroTl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
});

// hero;

gsap.set(heroSection, {
  color: "#fff",
});

heroTl.from(".text-main-1", {
  yPercent: 100,
  opacity: 0,
});

heroTl.from(".text-main-2", {
  yPercent: 100,
  opacity: 0,
});

heroTl.from(".text-main-3", {
  yPercent: 100,
  opacity: 0,
});

heroTl.from(".text-sec-1", {
  yPercent: 100,
  opacity: 0,
});

heroTl.from(".hero__btn button", {
  yPercent: 100,
  opacity: 0,
  stagger: 0.2,
});

heroTl.to(heroContent, {
  y: "24rem",
});

heroTl.to(
  ".hero-overlay",
  {
    top: "-100%",
  },
  "<"
);

heroTl.to(
  ".btn-hero-main",
  {
    color: "#fff",
  },
  "<"
);

heroTl.to(
  heroSection,
  {
    color: "#000",
  },
  "<"
);

heroTl.from(
  heroImg,
  {
    yPercent: 40,
    opacity: 0,
  },
  "<"
);

heroTl.to(heroImg, {
  scale: 1.3,
  yPercent: 10,
});

const heroTlScroll = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection,
    start: "0%",
    end: "95%",
    scrub: true,
    pin: true,
    pinSpacing: false,
    markers: false,
  },
});

heroTlScroll.to(
  "nav",
  {
    top: 0,
    opacity: 1,
  },
  "<"
);

heroTlScroll.to(
  heroContent,
  {
    opacity: 0,
  },
  "<"
);

heroTlScroll.to(
  heroImg,
  {
    y: "50%",
  },
  "<"
);

// Section 2

const textScrollSection = document.querySelector(".text-scroll");

const textScrollTl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: textScrollSection,
    start: "-60%",
    end: "50%",
    scrub: true,
    markers: false,
  },
});

const textScrollRemoveTl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: textScrollSection,
    start: "-40%",
    end: "80%",
    scrub: true,
  },
});

const textScrollImgTl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: textScrollSection,
    start: "-80%",
    end: "110%",
    scrub: true,
  },
});

textScrollTl.to(
  ".text-scroll__content .highlight",
  {
    color: "#ffffff",
    stagger: 1,
  },
  "<"
);

textScrollImgTl.fromTo(
  ".text-scroll__content .img__container",
  {
    yPercent: -80,
    opacity: 1,
  },
  {
    yPercent: 120,
    opacity: 0,
  }
);

textScrollRemoveTl.to(
  ".text-scroll__content .highlight",
  {
    color: "#ffffff33",
    stagger: 1,
  },
  "<"
);

// Section 3

const horizontalScrollSection = document.querySelector(".horizontal-scroll");
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const img1 = document.querySelectorAll(".slide .img__container")[0];
const slideText1 = document.querySelectorAll(".slide .slide__text")[0];
const img2 = document.querySelectorAll(".slide .img__container")[1];
const slideText2 = document.querySelectorAll(".slide .slide__text")[1];
const img3 = document.querySelectorAll(".slide .img__container")[2];
const slideText3 = document.querySelectorAll(".slide .slide__text")[2];

let horizontalScrollTween = gsap.to(slide, {
  ease: "none",
  xPercent: -100 * (slide.length - 1),
  scrollTrigger: {
    trigger: slider,
    end: () => "+=" + slider.offsetWidth,
    scrub: true,
    pin: true,
    // snap: 1 / (slide.length - 1),
  },
});

const horizontalScrollTl1 = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: horizontalScrollSection,
    start: "0%",
    end: "50%",
    scrub: true,
  },
});

const textScrollImgTl2 = gsap.timeline({
  defaults: { duration: 1, ease: "power.Out" },
  scrollTrigger: {
    trigger: horizontalScrollSection,
    start: "-20%",
    end: "5%",
    scrub: true,
  },
});

textScrollImgTl2.from(img1, {
  y: "-125%",
});

textScrollImgTl2.from(
  slideText1,
  {
    y: "45rem",
  },
  "<"
);

const slide1 = document.querySelectorAll(".slide")[0];

horizontalScrollTl1.to(slide1, {
  xPercent: -100,
  opacity: 0,
});

// horizontalScrollTl1.to(
//   img1,
//   {
//     xPercent: -100,
//     opacity: 0,
//   },
//   "<"
// );

const slide2 = document.querySelectorAll(".slide")[1];

const horizontalScrollTl2 = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: slide2,
    start: "-85%",
    end: "10%",
    scrub: true,
    containerAnimation: horizontalScrollTween,
    markers: false,
  },
});

horizontalScrollTl2.from(
  slideText2,
  {
    xPercent: -100,
    opacity: 0,
  },
  "<"
);

horizontalScrollTl2.from(img2, {
  xPercent: 90,
  opacity: 0,
  // scale: 1.5,
});

const slide3 = document.querySelectorAll(".slide")[2];

const horizontalScrollTl3 = gsap.timeline({
  defaults: { duration: 0.75, ease: "power.Out" },
  scrollTrigger: {
    trigger: slide3,
    start: "-80%",
    end: "20%",
    scrub: true,
    containerAnimation: horizontalScrollTween,
  },
});

horizontalScrollTl3.from(img3, {
  xPercent: -90,
  opacity: 0,
  // scale: 1.5,
});

horizontalScrollTl3.from(
  slideText3,
  {
    xPercent: -100,
    opacity: 0,
  },
  "<"
);

// section color

const sectionColor = document.querySelector(".section-color");
const colorSelect = document.querySelectorAll(".colors-selects span");
const colorImg = document.querySelectorAll(".color-closeup-img");
const colorLeft = document.querySelector(".color-left");
const colorRight = document.querySelector(".color-right");

let indexTop = 2;
let currentColor = "grey";

colorSelect.forEach((select, index) => {
  select.addEventListener("click", (e) => {
    const colorClicked = e.target.dataset.color;

    if (currentColor === colorClicked) return;

    colorImg.forEach((img) => {
      if (img.classList.contains(colorClicked)) {
        gsap.set(img, {
          zIndex: indexTop,
        });

        gsap.fromTo(
          img,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );

        indexTop++;
        currentColor = colorClicked;
      }
    });
  });
});

// const colorHeading = document.querySelector(".color-left .color-heading");

// const colorTl = gsap.timeline({
//   onComplete: function () {
//     this.restart();
//   },
// });

// const colorHeading1 = document.querySelectorAll(".color-left h1 span")[0];
// const colorHeading2 = document.querySelectorAll(".color-left h1 span")[1];
// const colorHeading3 = document.querySelectorAll(".color-left h1 span")[2];
// const colorHeading4 = document.querySelectorAll(".color-left h1 span")[3];

// window.onload = function () {
//   colorTl
//     .from(colorHeading1, 1, { autoAlpha: 0 })
//     .to(colorHeading1, 0.5, { autoAlpha: 0 })
//     .from(colorHeading2, 1, { autoAlpha: 0 })
//     .to(colorHeading2, 0.5, { autoAlpha: 0 })
//     .from(colorHeading3, 1, { autoAlpha: 0 })
//     .to(colorHeading3, 0.5, { autoAlpha: 0 })
//     .from(colorHeading4, 1, { autoAlpha: 0 })
//     .to(colorHeading4, 0.5, { autoAlpha: 0 });
// };

const sectionColorTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionColor,
    start: "-80%",
    end: "10%",
    scrub: true,
  },
});

sectionColorTl.fromTo(
  colorLeft.children,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
  },
  "<"
);

sectionColorTl.fromTo(
  colorRight.children,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
  },
  "<"
);

const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "0%",
    end: "100%",
    scrub: true,
    pin: true,
    // markers: true,
  },
});

const animFooter = document.querySelectorAll(".footer .fanim");
const backImgFooter = document.querySelector(".back");
const frontImgFooter = document.querySelector(".front");

footerTl.fromTo(
  backImgFooter,
  {
    x: "14.5rem",
  },
  {
    x: "5.5rem",
  },
  "<"
);

footerTl.fromTo(
  frontImgFooter,
  {
    x: "-14.5rem",
  },
  {
    x: "-5.5rem",
  },
  "<"
);

footerTl.fromTo(
  animFooter,
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
  },
  "<"
);

const lastSection = document.querySelector(".last");
const lastSectionImg = document.querySelector(".last__img");
const lastSectionContent = document.querySelector(".last__content");

const lastSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: lastSection,
    start: "10% 50%",
    end: "bottom bottom",
    // scrub: true,
    // pin: true,
    // markers: true,
    toggleActions: "restart none none reverse",
  },
  defaults: { duration: 0.75 },
});

lastSectionTl.fromTo(
  lastSectionImg,
  {
    rotate: 0,
    width: "36rem",
  },
  {
    rotate: -90,
    width: "48rem",
  }
);

lastSectionTl.fromTo(
  lastSectionContent.children,
  {
    opacity: 0,
    y: "10rem",
    // scale: 0.4,
  },
  {
    opacity: 1,
    y: 0,
    // scale: 1,
    stagger: 0.2,
  },
  "<"
);
