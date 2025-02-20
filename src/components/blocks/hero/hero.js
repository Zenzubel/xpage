function initSliderDefault() {
	const $sliders = document.querySelectorAll("[data-slider-fade");
	const $mediaSm = window.matchMedia('(max-width: 768px)');
	if ($sliders.length) {
		$sliders.forEach(($slider) => {
			const $pagination = $slider.querySelector(".swiper-pagination");
			const $paginationText = $slider.querySelectorAll("[data-pagination-text]");
			let  pagArray = []

			$paginationText.forEach(item => {
				let text = item.getAttribute('data-pagination-text');
				pagArray.push(text);
			});

			const slider1 = new Swiper($slider, {
				slidesPerView: "auto",
				speed: 1200,
				centeredSlides: false,
				watchOverflow: true,
				resizeObserver: true,
				allowTouchMove: true,
				slideVisibleClass: "active",
				pagination: {
					el: $pagination,
					clickable: true,
					renderBullet: function (index, bullet) {
						return '<span class="' + bullet + '">' + (pagArray[index]) + '</span>';
					},
				},
				effect: "fade",
				fadeEffect: {
					crossFade: true,
				},
			});

			if(!$mediaSm.matches) {
				const $paginationBullets = $pagination.querySelectorAll(".swiper-pagination-bullet");
				$paginationBullets.forEach((bullet, i) => {
					bullet.addEventListener('mouseenter', ()=> {
						slider1.slideTo(i);
					})
				});
			}
		});
	}
}
window.addEventListener("load", initSliderDefault);

