export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
    this.playState = this.playState.bind(this);
  }

  playState(event) {
    try {
      let message = JSON.parse(event.data);

      if (
        message.type === "player:changeState" &&
        message.data.state === "stopped"
      ) {
        const blockedElem = this.activeBtn.closest(
          ".module__video-item",
        ).nextElementSibling;
        const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);

        if (
          blockedElem
            .querySelector(".play__circle")
            .classList.contains("closed")
        ) {
          blockedElem.querySelector(".play__circle").classList.remove("closed");
          blockedElem.querySelector("svg").remove();
          blockedElem.querySelector(".play__circle").appendChild(playBtn);
          blockedElem.querySelector(".play__text").textContent = "play video";
          blockedElem
            .querySelector(".play__text")
            .classList.remove("attention");
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = "none";
          blockedElem.setAttribute("data-disabled", "false");
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      this.btns.forEach((btn, i) => {
        try {
          const blockedElem = btn.closest(
            ".module__video-item",
          ).nextElementSibling;
          if (i % 2 == 0) {
            blockedElem.setAttribute("data-disabled", "true");
          }
        } catch (e) {}
        btn.addEventListener("click", () => {
          if (
            !btn.closest(".module__video-item") ||
            btn.closest(".module__video-item").getAttribute("data-disabled") !==
              "true"
          ) {
            this.activeBtn = btn;
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
          }
        });
      });
    }
  }
}
