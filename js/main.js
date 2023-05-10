let section3 = document.querySelector(".sec-3");
let section4 = document.querySelector(".sec-4");
let sectionImages = document.querySelectorAll(".img-sec3");
let sectionh2Images = document.querySelectorAll(".h2sec3");
let sectionh5Images = document.querySelectorAll(".h5sec3");
let conBook = document.querySelectorAll(".con-cat");
let line = document.querySelector(".div-line");
let nav_phone = document.querySelector(".nav-phone");
let nav_cols = document.querySelector(".closet-nav");

line.addEventListener("click", function () {
  line.style.cssText = "transform: scale(0.9);";
  nav_phone.style.cssText = "left: 0;";
});
nav_cols.addEventListener("click", function () {
  line.style.cssText = "transform: scale(0.9);";
  nav_phone.style.cssText = "left: -100%;";
});
nav_phone.addEventListener("click", function () {
  nav_phone.style.cssText = "left: -100%;";
});

window.onscroll = () => {
  if (window.scrollY >= section3.offsetTop - 400) {
    console.log("here");
    sectionImages.forEach((img) => {
      img.style.cssText =
        "animation-fill-mode: forwards;animation:im-3 2s linear forwards ; opacity: 1;"; // Adding a margin of 10px as an example
    });
    sectionh2Images.forEach((img) => {
      img.style.cssText = "animation: h2 2s linear forwards ;  "; // Adding a margin of 10px as an example
    });
    sectionh5Images.forEach((img) => {
      img.style.cssText = "animation: h5 2s linear forwards ;  "; // Adding a margin of 10px as an example
    });
  }
  if (window.scrollY >= section4.offsetTop - 300) {
    console.log("oki");
    conBook.forEach((conBook) => {
      conBook.style.cssText = "animation: h5 3s linear forwards ; opacity: 1; "; // Adding a margin of 10px as an example
    });
  }
};
