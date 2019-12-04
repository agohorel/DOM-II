const blocks = document.querySelectorAll(".blocks");
let timer;

blocks.forEach(block => {
  block.addEventListener("mousedown", e => {
    propelRocket(e.target);
  });

  block.addEventListener("mouseup", () => {
    stopRocket();
  });
});

function propelRocket(el) {
  timer = setInterval(() => {
    el.style.transform += "translateX(1px)";
  }, 16);
}

function stopRocket() {
  clearInterval(timer);
}
