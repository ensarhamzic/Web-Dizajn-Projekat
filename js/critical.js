$(document).ready(function () {
  $("#readMoreBtn").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#intro").offset().top,
      },
      50
    );
  });
});

let theme = document.querySelector("#theme a");
let navLinks = document.querySelectorAll("#navbar li");
let body = document.querySelector("body");
let characteristics = document.querySelectorAll(".characteristic");
let moonIcon = document.querySelector(".fa-moon");
let navButton = document.querySelector("#navbar-toggler");

const darkToggler = () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("darkLink");
    });
    characteristics.forEach((char) => {
      char.classList.remove("darkCharacteristics");
    });
    navButton.style.backgroundColor = "transparent";

    moonIcon.style.color = "black";
    if (getComputedStyle(navButton).display == "none") {
      theme.classList.add("rotateIcon");
      setTimeout(() => {
        theme.classList.remove("rotateIcon");
      }, 700);
    }
  } else {
    body.classList.add("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.add("darkLink");
    });
    characteristics.forEach((char) => {
      char.classList.add("darkCharacteristics");
    });
    navButton.style.backgroundColor = "white";

    moonIcon.style.color = "white";
    if (getComputedStyle(navButton).display == "none") {
      theme.classList.add("rotateIcon");
      setTimeout(() => {
        theme.classList.remove("rotateIcon");
      }, 700);
    }
  }
};

theme.addEventListener("click", (e) => {
  e.preventDefault();
  darkToggler();
});
