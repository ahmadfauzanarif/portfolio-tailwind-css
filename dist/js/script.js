// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger"); // cari elemen id hamburger
const navMenu = document.querySelector("#nav-menu"); // cari elemen id nav-menu

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("hidden");
});
