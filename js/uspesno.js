let theme = document.querySelector("#theme a");
let navLinks = document.querySelectorAll("#navbar li");
let body = document.querySelector("body");
let moonIcon = document.querySelector(".fa-moon");
let navButton = document.querySelector("#navbar-toggler");

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}

let darkMode = getCookie("darkMode");
window.onload = () => {
  if (darkMode == 1) {
    darkToggler();
  }
  var sec = 4;
  setInterval(function () {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == -1) {
      history.back();
    }
  }, 1000);
};

const darkToggler = () => {
  if (body.classList.contains("dark")) {
    document.cookie = "darkMode=0";
    body.classList.remove("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("darkLink");
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
    document.cookie = "darkMode=1";
    body.classList.add("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.add("darkLink");
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
