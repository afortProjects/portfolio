//Scrolling animation
$(document).ready(function() {
    // Smooth scrolling when clicking on a navbar item
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        if(! ($(this).hasClass('carousel-control-prev') || $(this).hasClass('carousel-control-next'))) {
          event.preventDefault();
          //If clicked on phone menu item
          if($(this).hasClass('nav-link')) {
            var navbarCollapse = document.getElementById('navbarSupportedContent');
            navbarCollapse.classList.toggle('show');
          }
          var offset = target.offset().top;
          var navbarHeight = $('nav').outerHeight();
          $('html, body').stop().animate({
              scrollTop: offset - navbarHeight
          }, 800);
        }
      }
    });
  });
// Scroll to top button animation
  $(document).ready(function() {
    // Show/hide the button based on scroll position
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollButton').fadeIn();
      } else {
        $('#scrollButton').fadeOut();
      }
    });
  
    // Scroll to top when the button is clicked
    $('#scrollButton').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  });