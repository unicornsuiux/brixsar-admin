// HEADER SHIFT
$(document).ready(function () {
  var lastScroll = 5;
  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      setTimeout(function () {
        //gives 100ms to finish scrolling before doing a check
        var scroll = $(window).scrollTop();
        console.log("Scroll:", scroll);
        console.log("LastScroll:", lastScroll);

        if (scroll > 5) {
          $(".header").addClass("shift");
        } else {
          $(".header").removeClass("shift");
        }
        lastScroll = scroll;
      }, 5);
    });
  });
});



// Gallery
$(document).ready(function () {
  lightGallery(document.getElementById("animated-thumbnails"), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: "your_license_key",
    speed: 500,
  });

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-theVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src", videoSRC);
      });
    });
  }

  autoPlayYouTubeModal();
});

// Bootstrap tool tip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


$(document).ready(function() {
  $('.th-sidebar-menu').each(function() {
      var $submenu = $(this).find('.sidebar-submenu');
      var $submenuBtn = $(this).find('.submenu-btn');

      $submenuBtn.click(function(e) {
          e.preventDefault();
          $(this).toggleClass('submenu-open');
          $submenu.slideToggle();
      });
  });
});


$(document).ready(function() {
  $('.toggle-sidebar').click(function() {
      $('.th-admin-wrapper').toggleClass('sidebar-close');
  });
});