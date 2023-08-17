// Load jQuery from NPM
// import $ from "jquery/dist/jquery.min.js";
// import "slick-carousel/slick/slick.min.js";
// import "/cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
window.jQuery = window.$ = $;

// import "./slick.min.js";

window.jQuery = $;
window.$ = $;

$(function () {
  $(document).on("click", ".menu_toggle", function () {
    $(this).toggleClass("opened");
    $(this).attr("aria-expanded", this.classList.contains("opened"));
    $(".nav").toggleClass("active");
  });

  var sliders = [
    {
      target: $(".slider"),
      config: {
        mobileFirst: true,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 5,
            },
          },
        ],
      },
      instance: null,
    },
  ];
  sliders.forEach(function (slider) {
    slider.instance = slider.target.slick(slider.config);
    $(window).on("resize", function () {
      if (!slider.instance.hasClass("slick-initialized")) {
        slider.target.slick(slider.config);
        // if(slider){
        //    console.log(slider);
        // }
      }
    });
  });
});

function updateTimer() {
  let future = Date.parse("sept 2, 2023 11:30:00");
  let now = new Date();
  let diff = future - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);

  let d = days;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = secs - mins * 60;

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("secs").innerHTML = s;

  // document.getElementById("timer").innerHTML =
  //   "<div>" +
  //   d +
  //   "<span>days</span></div>" +
  //   "<div>" +
  //   h +
  //   "<span>hours</span></div>" +
  //   "<div>" +
  //   m +
  //   "<span>minutes</span></div>" +
  //   "<div>" +
  //   s +
  //   "<span>seconds</span></div>";
}
// updateTimer();
if ($("#timer").length > 0) {
  setInterval(updateTimer, 1000);
}
