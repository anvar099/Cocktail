const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

next.addEventListener("click", () => {
  slider.append(slider.firstElementChild);
  //slider.style.transform = 'translateX(-400px)'
});

prev.addEventListener("click", () => {
  slider.prepend(slider.lastElementChild);
  //slider.style.transform = 'translateX(0px)'
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
  margin: 10,
  // slideBy: 'page',
  // stagePadding: 100,
  responsive: {
    0: {
      items: 1,
    },
    571: {
      items: 2,
    },
    991: {
      items: 3,
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