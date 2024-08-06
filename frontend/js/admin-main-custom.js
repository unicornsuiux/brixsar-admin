FilePond.registerPlugin(    
  // encodes the file as base64 data
  FilePondPluginFileEncode,
  // validates the size of the file
  FilePondPluginFileValidateSize,
  // corrects mobile image orientation
  FilePondPluginImageExifOrientation,
  // previews dropped images
  FilePondPluginImagePreview
);
// Select all file inputs with the class 'filepond' and turn them into ponds
document.querySelectorAll('input.filepond').forEach(inputElement => {
  FilePond.create(inputElement);
});
// Bootstrap tool tip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function() {
  // Function to handle level-1 submenu toggle
  $('.th-sidebar-menu > .submenu-btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('submenu-open');
    $(this).next('.sidebar-submenu').slideToggle();
  });

  // Function to handle level-2 submenu toggle
  $('.sidebar-submenu > li > .submenu-level-2-btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('submenu-open');
    $(this).next('.sidebar-submenu-level-2').slideToggle();
  });

  // Function to handle level-3 submenu toggle
  $('.sidebar-submenu-level-2 > li > .submenu-level-3-btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('submenu-open');
    $(this).next('.sidebar-submenu-level-3').slideToggle();
  });

  // Function to toggle sidebar
  $('.toggle-sidebar').click(function() {
    $('.th-admin-wrapper').toggleClass('sidebar-close');

    // Close open submenus when sidebar is toggled
    $('.th-sidebar-menu .th-meunu-link').removeClass('submenu-open');
    $('.th-sidebar-menu .sidebar-submenu').slideUp();

    // Close open level-2 submenus when sidebar is toggled
    $('.th-sidebar-menu .th-meunu-link.submenu-level-2-btn').removeClass('submenu-open');
    $('.th-sidebar-menu .sidebar-submenu-level-2').slideUp();

    // Close open level-3 submenus when sidebar is toggled
    $('.th-sidebar-menu .th-meunu-link.submenu-level-3-btn').removeClass('submenu-open');
    $('.th-sidebar-menu .sidebar-submenu-level-3').slideUp();
  });
});

// Select 2 JS
$(document).ready(function () {
  $(".js-select2").each(function () {
    var placeholder = $(this).data("placeholder");
    $(this).select2({
      placeholder: placeholder,
      allowClear: true, // Allows the user to clear the selection
    });
  });
});



$(document).ready(function() {
  function enterFullScreen() {
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
          document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
          document.documentElement.msRequestFullscreen();
      }
      $('.expand-screen').addClass('active');
  }

  function exitFullScreen() {
      if (document.exitFullscreen) {
          document.exitFullscreen().catch(err => {
              console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
          });
      } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
      }
      $('.expand-screen').removeClass('active');
  }

  // Check sessionStorage and set the initial state
  if (sessionStorage.getItem('isFullscreen') === 'true') {
      enterFullScreen();
  }

  $('.expand-screen').on('click', function() {
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          enterFullScreen();
          sessionStorage.setItem('isFullscreen', 'true');
      } else {
          exitFullScreen();
          sessionStorage.setItem('isFullscreen', 'false');
      }
  });

  // Listen for fullscreen change events to update sessionStorage
  document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          $('.expand-screen').removeClass('active');
          sessionStorage.setItem('isFullscreen', 'false');
      } else {
          $('.expand-screen').addClass('active');
          sessionStorage.setItem('isFullscreen', 'true');
      }
  });
});



// BAR CHART
// var options = {
//     series: [{
//     name: 'Sales',
//     data: [31, 40, 28, 51, 42, 109, 100]
//   }, {
//     name: 'Rental',
//     data: [11, 32, 45, 32, 34, 52, 41]
//   }],
//     chart: {
//     height: 350,
//     type: 'area'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   xaxis: {
//     type: 'datetime',
//     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//   },
//   tooltip: {
//     x: {
//       format: 'dd/MM/yy HH:mm'
//     },
//   },
//   responsive: [{
//     breakpoint: 1200,
//     options: {
//       chart: {
//         height: 288,
//       }
//     }
//   }]
// };
// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();

var options = {
  series: [{
      name: 'Active',
      data: [10, 20, 30, 40, 50]
  }, {
      name: 'In-Active',
      data: [11, 32, 45, 32, 34]
  }],
  chart: {
    height: 350,
      type: 'area'
  },
  colors: ['#FE2C55', '#2E2E2E'], // Specify colors for each series
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      type: 'category',
      categories: ["2015", "2016", "2017", "2018", "2019", "2020"]
  },
  yaxis: {
      min: 0,
      max: 50
  },
  tooltip: {
      x: {
      format: 'dd/MM/yy HH:mm'
      },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// action Dropdown
$(document).ready(function() {
  $('.on-action-dropdown-btn').on('click', function(event) {
      event.stopPropagation();
      var $dropdown = $(this).siblings('.action-dropdown');
      $('.action-dropdown').not($dropdown).removeClass('active'); // Close other dropdowns
      $dropdown.toggleClass('active');
  });

  $(document).on('click', function() {
      $('.action-dropdown').removeClass('active');
  });

  $('.action-dropdown').on('click', function(event) {
      event.stopPropagation();
  });
});
