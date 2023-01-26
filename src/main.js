const offerMessageBtn = document.querySelector(".offer-msg-btn");

const btn = document.querySelector(".button-group");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav");
console.log(nav);
btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  close.classList.toggle("hidden");
  nav.classList.toggle("translate-x-full");
  //opacity-0 pointer-events-none
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("pointer-events-none");
});

if (offerMessageBtn) {
  offerMessageBtn.addEventListener("click", (e) => {
    offerMessageBtn
      .closest("div.offer-message-section")
      .classList.add("hidden");
  });
}
