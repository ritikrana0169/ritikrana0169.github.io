$(document).ready(function () { 
  $(window).scroll(function () {
    // sticky nav-menu on scroll script
    if (this.scrollY > 20) {
      $(".nav-menu").addClass("sticky");
    } else {
      $(".nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".nav-menu .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/nav-menu script
  $(".menu-btn").click(function () {
    $(".nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  function toggleMenu() {
    var menuBtn = document.querySelector(".menu-btn");
    menuBtn.classList.toggle("active");
  }
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Java Back-End Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Dreamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    autoplayTimeOut: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

