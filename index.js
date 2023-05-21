$(document).ready(function() {
    // Smooth scrolling when clicking on a navbar item
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        var navbarCollapse = document.getElementById('navbarSupportedContent');
        navbarCollapse.classList.toggle('show');
        var offset = target.offset().top;
        var navbarHeight = $('nav').outerHeight(); // Adjust this line if needed
        $('html, body').stop().animate({
            scrollTop: offset - navbarHeight
        }, 800);
      }
    });
  });