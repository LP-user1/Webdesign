// Dynamic Nav Toggle
const navBtn = document.querySelector(".nav-toggler");
const navIcon = document.querySelectorAll(".nav-icon");
const navMenu = document.querySelector(".header--menu");
const menuLinkLi = document.querySelectorAll(".menu-link");
const menuLink = document.querySelectorAll("li.menu-link a");

// Fixed Navbar while Scroll
const header = document.querySelector(".header");

// Toggle button Event Listener
navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hide");
  });
});

// Nav menu link Event Listener
menuLinkLi.forEach((link) => {
  link.addEventListener("click", (e) => {
    let active = e.target.classList.contains("active");
    menuLink.forEach((e) => {
      e.classList.remove("active");
    });
    if (!active) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
    navMenu.classList.toggle("show");
    navIcon.forEach((icon) => {
      icon.classList.toggle("hide");
    });
  });
});

// Navbar fixed while scroll function
function navFixed() {
  let navOffsetTop = header.clientHeight + 60;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= navOffsetTop) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  });
}

navFixed();
