import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
import Difference from "./modules/difference";
import Forms from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ container: ".page", btns: ".next" });
  slider.render();

  const modulePageSlider = new MainSlider({
    btns: ".next",
    container: ".moduleapp",
  });
  modulePageSlider.render();

  new VideoPlayer(".showup .play", ".overlay").init();
  new VideoPlayer(".schedule .play", ".overlay").init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  new Difference(".officerold", ".officernew", ".officer__card-item").init();
  new Forms(".form").init();

  new ShowInfo(".module__info-show .plus", ".msg").init();

  new Download(".download").init();
});
