// nav logo
const navLogo = document.querySelector(".logo-heading");

navLogo.addEventListener("click", () => {
  alert("clicked!");
});

// nav items
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    alert("clicked!");
  });
});

// hero img
const hero = document.querySelector(".intro img");

hero.addEventListener("click", () => {
  alert("clicked!");
});

// all other imgs
const imgs = document.querySelectorAll(
  ".img-content img, .content-destination img"
);

imgs.forEach(img => {
  img.addEventListener("click", () => {
    alert("clicked!");
  });
});

// buttons
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("clicked!");
  });
});
