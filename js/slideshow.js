// Declares variables
let slideIndex = 1;
showSlides(slideIndex);

// adds or minuses when arrows are clicked, show slides takes this change and adds it to what slide is shown
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  // grabs class 'slideshow-image', declares it as slides
  let slides = document.getElementsByClassName("slideshow-image");
  // resets slide show to the first one when looping
  if (n > slides.length) {
    slideIndex = 1;
  }
  // sets slideshow to the last slide when going back on the first slide
  if (n < 1) {
    slideIndex = slides.length;
  }
  // hides all other slides not being shown
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // shows the chosen slide
  slides[slideIndex - 1].style.display = "block";
}
