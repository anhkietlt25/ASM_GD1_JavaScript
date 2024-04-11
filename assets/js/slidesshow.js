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
    if (i < 0) i = Slide.length - 1;
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

// Flash sale
var ful = new Date("May 8,2024 00:00:00").getTime()
setInterval(function(){
    var now = new Date().getTime()
    var D = ful - now
    var days = Math.floor(D/(1000*60*60*24))
    var hours = Math.floor(D/(1000*60*60))
    var minutes = Math.floor(D/(1000*60))
    var seconds = Math.floor(D/(1000))

    hours %= 24
    minutes %= 60
    seconds %= 60

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
},1000)
