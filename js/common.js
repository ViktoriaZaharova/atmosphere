$('[name="phone"]').mask('+7 (999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
	$('.header-bottom').fadeToggle();
});

$('.nav-menu__close').on('click', function () {
	$('.header-bottom').fadeOut();
});


// модальные окна (несколько)
$(function () {
	let overlay = $('.overlay'),
		open_modal = $('.open_modal'),
		close = $('.modal__close, .overlay'),
		modal = $('.modal__div');

	open_modal.on('click', function (event) {
		event.preventDefault();

		modal.css('display', 'none').animate({
			opacity: 0,
			top: '45%'
		}, 200);

		let div = $(this).attr('href');
		overlay.fadeIn(400,
			function () {
				$(div)
					.css('display', 'flex')
					.animate({
						opacity: 1,
						top: '50%'
					}, 200);
			});
	});

	close.on('click', function () {
		modal
			.animate({
				opacity: 0,
				top: '45%'
			}, 200,
				function () {
					$(this).css('display', 'none');
					overlay.fadeOut(400);
				}
			);
	});
});
//end

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});

// slick slider
$('.employee-slider').slick({
	slidesToShow: 3,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-next"></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});