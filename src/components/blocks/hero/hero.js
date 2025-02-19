function initSliderDefault() {
  const $sliders = document.querySelectorAll("[data-slider-fade");
  if ($sliders.length) {
    $sliders.forEach(($slider) => {
      const $pagination = $slider.querySelector(".swiper-pagination") || null;

        const slider1 = new Swiper($slider, {
          slidesPerView: "auto",
          spaceBetween: 20,
          speed: 400,
          centeredSlides: false,
          watchOverflow: true,
          resizeObserver: true,
          allowTouchMove: true,
          slideVisibleClass: "active",
          pagination: {
            el: $pagination,
          },
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          breakpoints: {
            768: {
              spaceBetween: 20,
            },
          },
        });
    });
  }
}

window.addEventListener("load", initSliderDefault);

