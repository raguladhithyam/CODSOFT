document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".course-box button").forEach(function(button) {
    button.addEventListener('click', function() {
      alert('Site under development');
    });
  });

  document.querySelector("form button").addEventListener('click', function() {
    alert('Query submitted');
  });
});

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {
  var backToTopButton = $('#backToTopBtn');

  $(window).scroll(function() {
    if ($(this).scrollTop() > $('#home').height()) {
      backToTopButton.fadeIn();
    } else {
      backToTopButton.fadeOut();
    }
  });

  backToTopButton.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});