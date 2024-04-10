$(document).ready(function () {
  $(window).on("scroll", throttle(function () {
      let scrollTop = $(document).scrollTop();
      let navbar = $(".nav");

      if (scrollTop > 800) {
        navbar.addClass("scrolled");
      } else {
        navbar.removeClass("scrolled");
      }
    }, 100)
  );
    
  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
});