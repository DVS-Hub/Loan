export default class VideoPlayer {
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

    this.btns.forEach((btn) => {
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
