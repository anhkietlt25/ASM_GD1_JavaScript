var Slide = [
    "galaxy-a35.webp",
    "s24-sliding.webp",
    "vivo-v29e.webp",
    "xiaomi-14.webp",
];

var i = 0;
var getSlideImg = document.getElementById("mySlide");
var t;

function Back() {
    i--;
    if (i <= Slide.length) i = 0;
    getSlideImg.src = "./assets/slides/" + Slide[i];
}

function Next() {
    i++;
    if (i >= Slide.length) i = 0;
    getSlideImg.src = "./assets/slides/" + Slide[i];
}

function Start() {
    t = window.setInterval(Next, 3000);
}
