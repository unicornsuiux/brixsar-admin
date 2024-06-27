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
  // Function to handle submenu toggle
  $('.th-sidebar-menu').each(function() {
    var $submenu = $(this).find('.sidebar-submenu');
    var $submenuBtn = $(this).find('.submenu-btn');

    $submenuBtn.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('submenu-open');
      $submenu.slideToggle();
    });
  });

  // Function to toggle sidebar
  $('.toggle-sidebar').click(function() {
    $('.th-admin-wrapper').toggleClass('sidebar-close');

    // Close open submenus when sidebar is toggled
    $('.th-sidebar-menu .submenu-btn').removeClass('submenu-open');
    $('.th-sidebar-menu .sidebar-submenu').slideUp();
  });
});



$(document).ready(function() {
  $(document).click(function(event) {
    if (!$(event.target).closest('.employer_notification-dropdown, .employer_profile-dropdown').length) {
      $('.profile-dropdown').hide();
    }
  });

  $('#open_profile_notification').click(function() {
    var profileDropdown = $('.employer_notification-dropdown .profile-dropdown');
    var profileDropdownVisible = profileDropdown.is(':visible');
    var profileDropdownOther = $('.employer_profile-dropdown .profile-dropdown');

    if (profileDropdownVisible) {
      profileDropdown.hide();
    } else {
      profileDropdown.show();
      profileDropdownOther.hide();
    }
  });

  $('#open_profile_dropdown').click(function() {
    var profileDropdown = $('.employer_profile-dropdown .profile-dropdown');
    var profileDropdownVisible = profileDropdown.is(':visible');
    var profileDropdownOther = $('.employer_notification-dropdown .profile-dropdown');

    if (profileDropdownVisible) {
      profileDropdown.hide();
    } else {
      profileDropdown.show();
      profileDropdownOther.hide();
    }
  });

  // Close dropdown when the button is clicked again
  $('#open_profile_notification, #open_profile_dropdown').click(function() {
    var profileDropdown = $(this).siblings('.profile-dropdown');
    var profileDropdownVisible = profileDropdown.is(':visible');

    if (profileDropdownVisible) {
      profileDropdown.hide();
    }
  });
});



// BAR CHART
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// DOUNT CHART
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 360,
  type: 'donut',
},
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
},
legend: {
  formatter: function(val, opts) {
    return val + " - " + opts.w.globals.series[opts.seriesIndex]
  }
},
responsive: [{
  breakpoint: 1900,
  options: {
    chart: {
      width: 320
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#dount"), options);
chart.render();