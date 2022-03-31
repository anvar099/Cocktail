const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const sliderSeller = document.getElementById("slider-seller");

nextBtn.addEventListener("click", () => {
  sliderSeller.append(sliderSeller.firstElementChild);
});

prevBtn.addEventListener("click", () => {
  sliderSeller.prepend(sliderSeller.lastElementChild);
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    dots: true,
    slideBy: "page",
    responsive: {
      0: {
        items: 1,
        rows: 2,
      },
      768: {
        items: 1,
        rows: 2,
      },
      991: {
        items: 3,
        rows: 2,
      },
    },
  });
});

$("#carousel").owlCarousel({
  dots: true,
  slideBy: "page",
  // stagePadding: 100,
  responsive: {
    0: {
      items: 1,
      rows: 2,
    },
    768: {
      items: 1,
      rows: 2,
    },
    991: {
      items: 3,
      rows: 2,
    },
  },
});

$("#slider-product").owlCarousel({
  dots: true,
  margin: 10,
  // slideBy: 'page',

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
      stagePadding: 100,
    },
    991: {
      items: 1,
      stagePadding: 100,
    },
  },
});
