// Smooth Scrolling
// ...........................................
$('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 125
        },
        900
      );
    }
  });

// Sticky menu background
// ...........................................
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('#header').style.opacity = 0.95;
  } else {
    document.querySelector('#header').style.opacity = 1;
  }
});