document.addEventListener("DOMContentLoaded", function(event) {
	var productsCount = document.getElementById('products-count');
	console.log(productsCount);

	var addToCartButtons = document.querySelectorAll('.add-to-cart');
	console.log(addToCartButtons);

	for (var i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].addEventListener('click', function (event) {
			event.preventDefault();
			var prevProductsCount = +productsCount.textContent;
			productsCount.textContent = prevProductsCount + 1;

		})
	}


	$('.slider').slick({
		dots: true,
		speed: 300,
		autoplay: true,
  		autoplaySpeed: 2000,
	});

	$('.like').on('click', function (event) {
		event.preventDefault();
		var buttonLike = $(this);
		if (buttonLike.hasClass('liked')) {
			buttonLike.removeClass('liked');
		} else {
			buttonLike.addClass('liked');
		}
	})
});




