import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);

      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  nextSlide() {
    let first;
    do {
      first = this.slides.shift();
      this.slides.push(first);
      this.container.appendChild(first);
      this.decorizeSlides();
    } while (this.slides[0].tagName == "BUTTON");
  }

  bindTriggers() {
    this.next.addEventListener("click", () => {
      this.nextSlide();
    });

    this.prev.addEventListener("click", () => {
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== "BUTTON") {
          let last = this.slides[i];
          this.slides.splice(i, 1);
          this.slides.unshift(last);
          this.container.insertBefore(last, this.slides[1]);
          this.decorizeSlides();
          break;
        }
      }
    });
  }

  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
  `;
      this.bindTriggers();
      this.decorizeSlides();

      if (this.autoplay) {
        let id = setInterval(() => this.nextSlide(), 5000);
        this.container.addEventListener("mouseenter", () => {
          clearInterval(id);
        });
        this.container.addEventListener("mouseleave", () => {
          id = setInterval(() => this.nextSlide(), 5000);
        });
      }
    } catch (e) {}
  }
}
