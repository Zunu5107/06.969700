
const el = document.querySelector("div.name");
var slideIndex = 1;

var menu_on = document.querySelector(".menu_label>input");

$( document ).ready(function() {
  var main_page = document.querySelector("div.main_page");
  var loadedit = document.querySelector("div.loadedit");
  loadedit.style.display = "block";
  main_page.style.display = "none";
});

el.addEventListener("animationend", () => {
  console.log("Animation ended");
  var main_page = document.querySelector("div.main_page");
  var loadedit = document.querySelector("div.loadedit");
  loadedit.style.display = "none";
  main_page.style.display = "block";
  //$("body").css('backgroundColor', '#ffffff');
  showSlides(slideIndex);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function McurrentSlide(n) {
  showSlides(slideIndex = n);
  menu_on.checked = false;
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}