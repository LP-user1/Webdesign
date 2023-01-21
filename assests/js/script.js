const navBtn = document.querySelector(".nav-toggler");
const navIcon = document.querySelectorAll(".nav-icon");
const navMenu = document.querySelector(".header--menu");
const menuLink = document.querySelectorAll(".menu-link");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hide");
  });
});

// menuLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
//     navIcon.forEach((icon) => {
//       icon.classList.toggle("hide");
//     });
//     let active = link.nextElementSibling.classList.contains("active");
//     console.log(active);
//     if (!active) {
//       link.nextElementSibling.classList.add("active");
//     } else {
//       link.nextElementSibling.classList.remove("active");
//     }
//   });
// });
