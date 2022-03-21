
new Splide( '#image-slider' ).mount();

var splide = new Splide('.splide_skills', {
  pagination: false,
  perPage: 4,
  perMove: 1,
  autoplay: true,
  breakpoints: {
      767: {
          perPage: 1,
      },
  }
});

splide.mount();