const counters = document.querySelectorAll(".value");
const speed = 200;

const waypoint = new Waypoint({
  element: document.getElementById("counterDiv"),
  handler: function () {
    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("akhi");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      };

      animate();
    });
  },
  offset: "60%",
});

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
let cards = document.querySelectorAll(".flip-card-back");
let body = document.querySelector("body");
let moonIcon = document.querySelector(".fa-moon");
let navButton = document.querySelector("#navbar-toggler");

const darkToggler = () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("darkLink");
    });
    cards.forEach((card) => {
      card.classList.remove("darkCard");
    });

    moonIcon.style.color = "black";
    navButton.style.backgroundColor = "transparent";

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
    cards.forEach((card) => {
      card.classList.add("darkCard");
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
