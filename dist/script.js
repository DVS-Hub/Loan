/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
  }
  init() {
    // const div = this.overlay.querySelector("#frame");
    // div.innerHTML = `
    // <iframe
    //     width="720"
    //     height="405"
    //     src="https://rutube.ru/play/embed/36c54c15e4efa98b0baab8a291a27324/"
    //     frameBorder="0"
    //     allow="clipboard-write; autoplay"
    //     webkitAllowFullScreen
    //     mozallowfullscreen
    //     allowFullScreen
    // ></iframe>;
    // `;

    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.url = btn.getAttribute("data-url");
        const div = this.overlay.querySelector("#frame");
        div.innerHTML = `
        <iframe
            id="playerFrame"
            width="100%"
            height="100%"
            src="https://rutube.ru/play/embed/${this.url}/"
            frameBorder="0"
            allow="clipboard-write; autoplay"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
        ></iframe>;
        `;
        this.close.addEventListener("click", () => {
          document.querySelector("#playerFrame").remove();
          this.overlay.style.display = "none";
        });
        this.overlay.style.display = "flex";
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
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
    this.slides.forEach(slide => {
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
    this.showSlides(this.slideIndex += n);
  }
  render() {
    try {
      this.hanson = document.querySelector(".hanson");
    } catch (e) {
      return;
    }
    this.btns.forEach(item => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener("click", e => {
        e.preventDefault;
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");


window.addEventListener("DOMContentLoaded", () => {
  const slider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"](".page", ".next");
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"](".showup .play", ".overlay");
  slider.render();
  player.init();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map