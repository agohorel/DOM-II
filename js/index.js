// nav logo hover
const navLogo = document.querySelector(".logo-heading");

navLogo.addEventListener("mouseenter", () => {
  gsap.to(navLogo, {
    duration: 0.5,
    color: "#e65e15",
    scale: 1.1,
    rotate: 3,
    ease: "elastic.out(1, 0.3)"
  });
});

navLogo.addEventListener("mouseleave", () => {
  gsap.to(navLogo, {
    duration: 0.5,
    color: "#000",
    scale: 1,
    rotate: 0,
    ease: "bounce.out"
  });
});

// nav items
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    alert("clicked!");
  });
});

// all imgs
window.addEventListener("load", () => {
  gsap.from("img", {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    delay: 0.25,
    stagger: 0.3,
    ease: "circ.out"
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

// print guilt tripping lol
window.addEventListener("beforeprint", () => {
  alert("do you really want to kill a tree that badly? 🌲😢🌳😭🌴");
});

window.addEventListener("afterprint", () => {
  alert("oooo wow look at this cool guy *printing websites* 😂🙃😂");
});
