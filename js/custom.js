$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("hide");
    $(".cross-menu").toggleClass("show");
  });

  $(".cross-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("show");
    $(".burger-menu").toggleClass("hide");
  });

  // $(".goto").click(function (event) {
  //   event.preventDefault();
  //   var targetId = $(this).attr("href");
  //   $("html, body").animate({ scrollTop: jQuery(targetId).offset().top }, 1000);
  // });
});

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 3, // Display three images per slide
//     nav: true, // Show navigation arrows
//     loop: true, // Enable infinite loop
//     margin: 65, // Add spacing between images
//     responsive: {
//       0: {
//         items: 1, // On small screens, show one image per slide
//       },
//       768: {
//         items: 2, // On medium screens, show two images per slide
//       },
//       992: {
//         items: 3, // On larger screens, show three images per slide
//       },
//     },
//   });
// });

$(document).ready(function () {
  $(".question").click(function () {
    const answer = $(this).next(".answer");
    const icon = $(this).find(".toggle-icon i"); // Select the <i> element

    if (answer.is(":visible")) {
      answer.slideUp();
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
      answer.slideDown();
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }
  });
});
