export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = Array.from(this.page.children);
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    } else if (n < 1) {
      this.slideIndex = this.slideIndex.length;
    }

    try {
      this.hanson.style.opacity = "0";

      this.hanson.classList.add("animated");

      if (n === 3) {
        setTimeout(() => {
          this.hanson.style.opacity = "1";
          this.hanson.classList.add("slideInUp");
        }, 3000);
      } else {
        this.hanson.classList.remove("slideInUp");
      }
    } catch (e) {
      return;
    }

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    this.slides[this.slideIndex - 1].style.display = "block";

    // if (this.slides[this.slideIndex - 1].classList.contains("modules")) {
    //   this.slides[this.slideIndex - 1].querySelector(".hanson").style.display =
    //     "none";
    //   setTimeout(() => {
    //     const hanson =
    //       this.slides[this.slideIndex - 1].querySelector(".hanson");
    //     hanson.classList.add("animated", "fadeInUp");
    //     hanson.style.display = "block";
    //   }, 3000);
    // }
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (e) {
      return;
    }
    this.btns.forEach((item) => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault;
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}
