export default class ShowInfo {
  constructor(triggers, messageSelector) {
    this.btns = document.querySelectorAll(triggers);
    this.messageSelector = messageSelector;
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const messageElem = btn.parentNode.nextElementSibling;
        // messageElem.style.display != "block"
        //   ? (messageElem.style.display = "block")
        //   : (messageElem.style.display = "none");
        messageElem.classList.toggle("msg");
        messageElem.style.marginTop = "20px";
      });
    });
  }
}
