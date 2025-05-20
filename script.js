$(document).ready(function () {
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain, .right-curtain').css('width', '0%');

  $('.valentines-day').click(function () {
    // Abrir cortinas
    $('.left-curtain').animate({ width: '0%' }, 1000);
    $('.right-curtain').animate({ width: '0%' }, 1000);

    // Animar caída del sobre
    $('.envelope').css({
      'animation': 'fall 3s linear 1',
      '-webkit-animation': 'fall 3s linear 1'
    });

    // FadeOut y mostrar carta
    $('.envelope').fadeOut(800, function () {
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      const $card = $('#card');
      $card.css({
        'visibility': 'visible',
        'opacity': 0,
        'transform': 'scale(0.1)',
        'transition': 'transform 0.5s ease-out, opacity 0.5s ease-out'
      });

      // Animación ondulante
      let start = null;
      function animateCard(timestamp) {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / 1000;
        const scale = 1 + Math.sin(progress * 5) * 0.05;
        $card.css({
          'opacity': 1,
          'transform': 'scale(' + scale + ')'
        });

        if (progress < 2) {
          requestAnimationFrame(animateCard);
        } else {
          $card.css('transform', 'scale(1)');
        }
      }

      requestAnimationFrame(animateCard);
    });
  });
});
