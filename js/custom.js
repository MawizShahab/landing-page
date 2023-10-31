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



/* Hnadel active state */

$(document).ready(function () {
  // Retrieve the active category from local storage
  var activeCategory = localStorage.getItem("activeCategory");

  // Set the active class on the category link
  if (activeCategory) {
    $(".categories a[data-category='" + activeCategory + "']").addClass(
      "active"
    );
  }

  // Handle click on category links
  $(".categories a").click(function (e) {
    e.preventDefault(); // Prevent the default link behavior (page navigation)
    var target = $(this).attr("href"); // Get the target URL
    var category = $(this).data("category");

    // Store the active category in local storage
    localStorage.setItem("activeCategory", category);

    // Set the active class on the category link
    $(".categories a").removeClass("active"); // Remove active class from all links
    $(this).addClass("active"); // Set active class on the clicked link

    // Redirect to the target page after a short delay
    setTimeout(function () {
      window.location.href = target;
    }, 100); // Adjust the delay as needed
  });
});

/* jQuery code to toggle FAQ's */

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

/* To animate buttons */

$(document).ready(function () {
  $(".text, .button-container").addClass("animate");
});

/* To toggle disover cards and footer-links for mobile only */

$(document).ready(function () {
  if ($(window).width() < 768) {
    $(".links").hide();
    $(".newsletter-subscription").insertBefore(".footer-end");
  }

  $(".toggle-chevron").on("click", function () {
    $(this).toggleClass("up");
    $(this)
      .closest(".discover-card, .footer-links")
      .find(".card-description, .card-button, .links, .label-seperator")
      .slideToggle();
  });
});

/* Animation code to animate the Discover Cards */

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

/* Animation code to animate the other sections */

$(document).ready(function () {
  $(window).on("scroll", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var section = $(
      ".filter-tabs-content, .tab-content.hide-by-default, .nav-tabs.hide-by-default, .speak-content, .button-container-speak-us, .faq-content, .faq-toggle"
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
