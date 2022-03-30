const detailsAccordion = document.querySelectorAll(
  ".product-details__accordion-btn"
);
const faqAccordion = document.querySelectorAll(".faq__accordion-btn");

function accordion(accordionElement) {
  accordionElement.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");

      let content = this.nextElementSibling;
      console.log(content);

      if (!this.classList.contains("is-open")) {
        //this is if the accordion is open
        content.classList.remove("is-accordion-open");
      } else {
        //if the accordion is currently closed
        content.classList.add("is-accordion-open");
      }
    };
  });
}

accordion(detailsAccordion);

accordion(faqAccordion);
