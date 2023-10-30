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

// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $(this).parents('.tabs').find('.js-tab-content[data-tab="' + id + '"]');

		$(this).parents('.tabs').find('.js-tab-trigger.active').removeClass('active'); // 1
		$(this).addClass('active'); // 2

		$(this).parents('.tabs').find('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
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

// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon();

$('.dropdown-sorting .dropdown-toggle').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('click').siblings('.dropdown-menu').fadeToggle();
});


// slider range
$(".polzunok-1").slider({
	min: 5346780,
	max: 12353467800,
	values: [5346780, 12353467800],
	range: true,
	animate: "fast",
	slide: function (event, ui) {
		$(".polzunok-input-1-left").val(ui.values[0]);
		$(".polzunok-input-1-right").val(ui.values[1]);
	}
});
$(".polzunok-input-1-left").val($(".polzunok-1").slider("values", 0));
$(".polzunok-input-1-right").val($(".polzunok-1").slider("values", 1));
$(".polzunok-container-1 input").change(function () {
	var input_left = $(".polzunok-input-1-left").val().replace(/[^0-9]/g, ''),
		opt_left = $(".polzunok-1").slider("option", "min"),
		where_right = $(".polzunok-1").slider("values", 1),
		input_right = $(".polzunok-input-1-right").val().replace(/[^0-9]/g, ''),
		opt_right = $(".polzunok-1").slider("option", "max"),
		where_left = $(".polzunok-1").slider("values", 0);
	if (input_left > where_right) {
		input_left = where_right;
	}
	if (input_left < opt_left) {
		input_left = opt_left;
	}
	if (input_left == "") {
		input_left = 0;
	}
	if (input_right < where_left) {
		input_right = where_left;
	}
	if (input_right > opt_right) {
		input_right = opt_right;
	}
	if (input_right == "") {
		input_right = 0;
	}
	$(".polzunok-input-1-left").val(input_left);
	$(".polzunok-input-1-right").val(input_right);
	if (input_left != where_left) {
		$(".polzunok-1").slider("values", 0, input_left);
	}
	if (input_right != where_right) {
		$(".polzunok-1").slider("values", 1, input_right);
	}
});


$(".polzunok-2").slider({
	min: 80,
	max: 250,
	values: [80, 250],
	range: true,
	animate: "fast",
	slide: function (event, ui) {
		$(".polzunok-input-2-left").val(ui.values[0]);
		$(".polzunok-input-2-right").val(ui.values[1]);
	}
});
$(".polzunok-input-2-left").val($(".polzunok-2").slider("values", 0));
$(".polzunok-input-2-right").val($(".polzunok-2").slider("values", 1));
$(".polzunok-container-2 input").change(function () {
	var input_left = $(".polzunok-input-2-left").val().replace(/[^0-9]/g, ''),
		opt_left = $(".polzunok-2").slider("option", "min"),
		where_right = $(".polzunok-2").slider("values", 1),
		input_right = $(".polzunok-input-2-right").val().replace(/[^0-9]/g, ''),
		opt_right = $(".polzunok-2").slider("option", "max"),
		where_left = $(".polzunok-2").slider("values", 0);
	if (input_left > where_right) {
		input_left = where_right;
	}
	if (input_left < opt_left) {
		input_left = opt_left;
	}
	if (input_left == "") {
		input_left = 0;
	}
	if (input_right < where_left) {
		input_right = where_left;
	}
	if (input_right > opt_right) {
		input_right = opt_right;
	}
	if (input_right == "") {
		input_right = 0;
	}
	$(".polzunok-input-2-left").val(input_left);
	$(".polzunok-input-2-right").val(input_right);
	if (input_left != where_left) {
		$(".polzunok-2").slider("values", 0, input_left);
	}
	if (input_right != where_right) {
		$(".polzunok-2").slider("values", 1, input_right);
	}
});

$('.btn-filter').click(function (e) {
	e.preventDefault();
	$('.sidebar-projects').fadeToggle();
});

$('.sidebar__close').click(function () {
	$('.sidebar-projects').fadeOut();
});
