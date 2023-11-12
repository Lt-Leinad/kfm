const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const topList = document.querySelector(".top-list");
const testimonial1 = document.querySelector(".testimonial1");
const testimonial2 = document.querySelector(".testimonial2");
const testimonial3 = document.querySelector(".testimonial3");
const testimonial4 = document.querySelector(".testimonial4");
const slides = document.querySelectorAll(".testimonial");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

// DISABLE SCROLLING

function disableScrolling() {
  document.documentElement.style.overflowY = "hidden";
}

// ENABLE SCROLLING

function enableScrolling() {
  document.documentElement.style.overflowY = "auto";
}

// MENU

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
  if (window.innerWidth < 900) {
    menu.classList.remove("display-none");
    disableScrolling();
  } else {
    menu.classList.remove("display-none");
  }
}

xOut.addEventListener("click", function () {
  if (window.innerWidth < 900) {
    menu.classList.add("display-none");
    enableScrolling();
  } else {
    menu.classList.add("display-none");
  }
});

// slider
function slider() {
  const dotContainer = document.querySelector(".dots");
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"  aria-label="Button for testimonial ${
          i + 1
        } "></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();

(function start() {
  console.log([...slides]);
})();
