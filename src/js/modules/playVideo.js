export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
  }

  playState(event) {
    let message = JSON.parse(event.data);

    if (
      message.type === "player:changeState" &&
      message.data.state === "stopped"
    ) {
      console.log(this.activeBtn);
      const blockedElem = this.activeBtn.closest(
        ".module__video-item",
      ).nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);

      if (
        blockedElem.querySelector(".play__circle").classList.contains("closed")
      ) {
        blockedElem.querySelector(".play__circle").classList.remove("closed");
        blockedElem.querySelector("svg").remove();
      }
    }
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

    if (this.btns.length > 0) {
      this.btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.activeBtn = btn;
          console.log(this.activeBtn);
          this.url = btn.getAttribute("data-url");
          const div = this.overlay.querySelector("#frame");
          div.innerHTML = `
          <iframe
              id="playerFrame"
              width="720"
              height="480"
              src="https://rutube.ru/play/embed/${this.url}/"
              frameBorder="0"
              allow="clipboard-write; autoplay"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
          ></iframe>`;
          window.addEventListener("message", this.playState);
          this.close.addEventListener("click", () => {
            this.overlay.querySelector("#frame").innerHTML = "";
            this.overlay.style.display = "none";
            window.removeEventListener("message", this.playState);
          });

          this.overlay.style.display = "flex";
        });
      });
    }
  }
}
