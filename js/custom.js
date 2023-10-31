$(document).ready(function () {
  // Handling FAQ toggle
  $(".question").click(function () {
    const answer = $(this).next(".answer");
    const icon = $(this).find(".toggle-icon i");

    if (answer.is(":visible")) {
      answer.slideUp();
      icon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
      answer.slideDown();
      icon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }
  });

  // Animation code for Discover Cards and other sections
  $(window).on("scroll", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var section = $(
      ".filter-tabs-content, .tab-content.hide-by-default, .nav-tabs.hide-by-default, .speak-content, .button-container-speak-us, .faq-content, .faq-toggle"
    );
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

      var firstOffset = $(".discover-cards-container.first").offset().top;
      var secondOffset = $(".discover-cards-container.second").offset().top;

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

  // Button animation
  $(".text, .button-container").addClass("animate");

  // Mobile toggle for discover cards and footer links
  if ($(window).width() < 768) {
    $(".links").hide();
    $(".newsletter-subscription").insertBefore(".footer-end");
    $(".toggle-chevron").on("click", function () {
      $(this).toggleClass("up");
      $(this)
        .closest(".discover-card, .footer-links")
        .find(".card-description, .card-button, .links, .label-seperator")
        .slideToggle();
    });
  }

  // Active state and category link handling
  var activeCategory = localStorage.getItem("activeCategory");
  if (activeCategory) {
    $(".categories a[data-category='" + activeCategory + "']").addClass(
      "active"
    );
  }

  $(".categories a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var category = $(this).data("category");
    localStorage.setItem("activeCategory", category);
    $(".categories a").removeClass("active");
    $(this).addClass("active");
    setTimeout(function () {
      window.location.href = target;
    }, 100);
  });

  // Mobile navigation toggle
  $(".burger-menu").click(function () {
    $(".mobile-nav, .categories, .btn-primary").toggleClass("show hide");
    $(this).toggleClass("hide");
    $(".cross-menu").toggleClass("show");
  });

  $(".cross-menu").click(function () {
    $(".mobile-nav, .categories, .btn-primary").toggleClass("show hide");
    $(this).toggleClass("show");
    $(".burger-menu").toggleClass("hide");
  });
});
