const fokusiranje = (x, focus = true) => {
  let element = document.querySelector(`#${x}Req`);
  if (focus) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

let nameErr = document.querySelector("#nameErr");
let surnameErr = document.querySelector("#surnameErr");
let emailErr = document.querySelector("#emailErr");
let messageErr = document.querySelector("#messageErr");

const form = document.querySelector("#contactForm");
let name = form["name"];
let surname = form["surname"];
let email = form["email"];
let message = form["message"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let err = 0;
  nameErr.innerHTML = "";
  surnameErr.innerHTML = "";
  emailErr.innerHTML = "";
  messageErr.innerHTML = "";
  name.style.background = "white";
  surname.style.background = "white";
  email.style.background = "white";
  message.style.background = "white";

  if (
    name.value.length < 3 ||
    name.value.length > 15 ||
    name.value[0] !== name.value[0].toUpperCase()
  ) {
    let p = document.createElement("p");
    p.innerHTML = "Netacno uneti podaci";
    nameErr.append(p);
    name.style.background = "rgba(233, 71, 71, 0.8)";
    err++;
  }

  if (
    surname.value.length < 4 ||
    surname.value.length > 20 ||
    surname.value[0] !== surname.value[0].toUpperCase()
  ) {
    let p = document.createElement("p");
    p.innerHTML = "Netacno uneti podaci";
    surnameErr.append(p);
    surname.style.background = "rgba(233, 71, 71, 0.8)";
    err++;
  }

  if (
    !email.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    let p = document.createElement("p");
    p.innerHTML = "Netacno uneti podaci";
    emailErr.append(p);
    email.style.background = "rgba(233, 71, 71, 0.8)";
    err++;
  }

  if (message.value.length < 30 || message.value.length > 1000) {
    let p = document.createElement("p");
    p.innerHTML = "Netacno uneti podaci";
    messageErr.append(p);
    message.style.background = "rgba(233, 71, 71, 0.8)";
    err++;
  }

  if (err == 0) {
    window.location.href = "uspesno.html";
  }
});

$("textarea").keyup(function () {
  let characterCount = $(this).val().length,
    current = $("#current"),
    maximum = $("#maximum"),
    theCount = $("#the-count");

  current.text(characterCount);

  if (characterCount < 30 || characterCount > 1000) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCount.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCount.css("font-weight", "normal");
  }
});

let theme = document.querySelector("#theme a");
let navLinks = document.querySelectorAll("#navbar li");
let body = document.querySelector("body");
let moonIcon = document.querySelector(".fa-moon");
let navButton = document.querySelector("#navbar-toggler");

const darkToggler = () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("darkLink");
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
