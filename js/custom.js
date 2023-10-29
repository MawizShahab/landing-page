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
});

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

$(document).ready(function () {
  $(".text, .button-container").addClass("animate");
});

$(document).ready(function () {
  $(".toggle-chevron").on("click", function () {
    $(this).toggleClass("up");
    $(this)
      .closest(".discover-card")
      .find(".card-description, .card-button")
      .slideToggle();
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var firstOffset = $(".discover-cards-container.first").offset().top;
    var secondOffset = $(".discover-cards-container.second").offset().top;

    // Define the minimum width for desktop
    var desktopWidth = 768;

    if (windowWidth > desktopWidth) {
      if (scrollPos > firstOffset - windowHeight + 200) {
        $(".discover-cards-container.first").addClass("animate-cards");
      } else {
        $(".discover-cards-container.first").removeClass("animate-cards");
      }

      if (scrollPos > secondOffset - windowHeight + 200) {
        $(".discover-cards-container.second").addClass("animate-cards");
      } else {
        $(".discover-cards-container.second").removeClass("animate-cards");
      }
    }
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var section = $(
      ".filter-tabs-content, .tab-content.hide-by-default, .nav-tabs.hide-by-default"
    );

    // Define the minimum width for desktop
    var desktopWidth = 768;

    if (windowWidth > desktopWidth) {
      section.each(function () {
        var offset = $(this).offset().top;

        if (scrollPos > offset - windowHeight + 200) {
          $(this).addClass("visible");
        } else {
          $(this).removeClass("visible");
        }
      });
    }
  });
});
