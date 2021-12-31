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
