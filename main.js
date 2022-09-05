//Selectors
const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

//Event Listeners
openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

// GLobal Functions
const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

// Close the nav menu when menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((item) => {
    item.addEventListener("click", () => {
      closeNav();
    });
  });
}

// Testimonials Slider "Swiper Js"
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});
