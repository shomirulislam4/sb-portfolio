/* Preloader */
$(function(){
  $(window).on("load",function(){
    $('.pre__loader').delay(1200).fadeOut(500);
  });
  $('.preload__close').on('click', function(){
    $('.pre__loader').fadeOut(500);
  })
});

/* Cursor */
$(function() {
  $('body').append('<div class="cursor"></div><div class="cursor-follower"></div>');

  const $cursor = $('.cursor');
  const $cursorFollower = $('.cursor-follower');

  $(document).on('mousemove', function(e) {
      $cursor.css({
          left: e.clientX + 'px',
          top: e.clientY + 'px'
      });

      setTimeout(() => {
          $cursorFollower.css({
              left: e.clientX + 'px',
              top: e.clientY + 'px'
          });
      }, 80);
  });

  $(document).on('mousedown', function() {
      $cursor.css('transform', 'translate(-50%, -50%) scale(0.8)');
      $cursorFollower.css('transform', 'translate(-50%, -50%) scale(0.6)');
  });

  $(document).on('mouseup', function() {
      $cursor.css('transform', 'translate(-50%, -50%) scale(1)');
      $cursorFollower.css('transform', 'translate(-50%, -50%) scale(1)');
  });

  $(document).on('mouseenter', 'a, button, input', function() {
      $cursorFollower.css({
          'transform': 'translate(-50%, -50%) scale(1.5)',
          'border-width': '0.5px'
      });
      $cursor.css('opacity', '0.5');
  });

  $(document).on('mouseleave', 'a, button, input', function() {
      $cursorFollower.css({
          'transform': 'translate(-50%, -50%) scale(1)',
          'border-width': '1px'
      });
      $cursor.css('opacity', '1');
  });
});

/* Auto Nav Link Select */
$(function() {
  var $navigationLinks = $('.homepageheader a');
  var $sections = $('section');
  
  function getCurrentSection(scrolled) {
    var currentSection;
    $sections.each(function() {
      var sectionTop = $(this).offset().top - 5;
      if (scrolled >= sectionTop) {
        currentSection = $(this);
      }
    });
    return currentSection;
  }
  
  function updateActiveClass() {
    var scrolled = $(window).scrollTop();
    var currentSection = getCurrentSection(scrolled);
    
    $navigationLinks.removeClass('active');
    
    $('.homepageheader a[href="#' + currentSection.attr('id') + '"]').addClass('active');
  }
  
  $(window).on('scroll', function() {
    updateActiveClass();
  });
  
  $('.homepageheader a').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href');
    var $targetSection = $(targetId);
    
    $('html, body').animate({
      scrollTop: $targetSection.offset().top
    }, 400);
  });
});

/* Mobile Menu Toggle */
$(function(){
  $('.sb__main__menu').on('click', function(){
    $('.sb__header .wrapper').addClass('show');
  });

  $('.sb__mainmenu__close, .sb__header .wrapper a').on('click', function(){
    $('.sb__header .wrapper').removeClass('show');
  });
});

/* Hero Section Parallax Effect */
$(function() {
    if ($(window).width() > 767) {
      $('.sb__hero__section').each(function() {
          $(this).data('initialPosition', { left: 0, top: 0 });
      });

      $('.sb__hero__section').on('mousemove', function(event) {
          var moveX = (event.pageX - $(this).offset().left) / $(this).width() - 0.5;
          var moveY = (event.pageY - $(this).offset().top) / $(this).height() - 0.5;

          $(this).find('.parallax__effect1').css({
              'transform': 'translate(' + moveX * -20 + 'px, ' + moveY * -20 + 'px)'
          });

          $(this).find('.parallax__effect2').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });
          
          $(this).find('.parallax__effect3').css({
            'transform': 'translate(' + moveX * -9 + 'px, ' + moveY * -9 + 'px)'
          });

          $(this).find('.parallax__effect4').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });

          $(this).find('.parallax__effect5').css({
            'transform': 'translate(' + moveX * -7 + 'px, ' + moveY * -7 + 'px)'
          });

        }).on('mouseleave', function() {
            // Retrieve initial position and reset the image
            var initialPosition = $(this).data('initialPosition');
            $(this).find('.parallax__effect').css({
                'transform': 'translate(0, 0)'
            });
        });
    }
});

/* Skill Progression */
$(function() {
  function isVisible(element) {
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + $(window).height();
    const elementTop = $(element).offset().top;
    const elementBottom = elementTop + $(element).outerHeight();

    return elementBottom > windowTop && elementTop < windowBottom;
  }

  function animateProgressBar($bar) {
    if ($bar.data('animated')) return;

    $bar.data('animated', true);

    const target = parseInt($bar.data('progress'), 10);
    const $percentText = $bar.find('.progress__percent');

    $bar.css('width', target + '%');

    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        $percentText.text(current + '%');

        const barWidth = $bar.outerWidth();
        const containerWidth = $bar.parent().outerWidth();
        const position = (barWidth / containerWidth) * 100;
      }
    }, 20);
  }

  $(window).on('scroll load', function() {
    $('.progress__bar').each(function() {
      if (isVisible(this)) {
        animateProgressBar($(this));
      }
    });
  });
});

/* Portfolio Filter */
const $grid = $('.sb__portfolio__grid').isotope({
  itemSelector: '.sbportfolio__item',
  layoutMode: 'masonry'
});

$('.sbptflobtn').on('click', function () {
  const filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

  $('.sbptflobtn').removeClass('active');
  $(this).addClass('active');
});

/* About Us Counter */
$(function() {
  const counterUp = window.counterUp.default;

  const IO = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          const $el = $(entry.target);
          if (entry.isIntersecting && !$el.hasClass('is-visible')) {
              counterUp(entry.target, {
                  duration: 1000,
                  delay: 5,
              });
              $el.addClass('is-visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 1 });

  $('.number').each(function () {
      IO.observe(this);
  });
});
