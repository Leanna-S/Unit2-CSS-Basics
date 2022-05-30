// https://www.w3schools.com/howto/howto_js_slideshow.asp
// most of the JS is from there, although i edited it and dumbed it down so i could get what it was doing, hence the comments
// for some reason i find it way harder to understand this code then usual. It's probably due to the fact that i
// have never used JS before and that all the variable names looked the same to me.

// Declares variables
let slideIndex = 1;
showSlides(slideIndex);

// adds or minuses when arrows are clicked, show slides takes this change and adds it to what slide is shown
function plusSlides(changeSlide) {
  showSlides((slideIndex += changeSlide));
}

function showSlides(changeSlide) {
  let i;
  // grabs class 'slideshow-image', declares it as slides
  let slides = document.getElementsByClassName("slideshow-image");
  // resets slide show to the first one when looping
  if (changeSlide > slides.length) {
    slideIndex = 1;
  }
  // sets slideshow to the last slide when going back on the first slide
  if (changeSlide < 1) {
    slideIndex = slides.length;
  }
  // by default, all slides are hidden so it makes sense to do it this way
  // hides the slide that was just shown
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // shows the chosen slide by setting display from none to block
  slides[slideIndex - 1].style.display = "block";
}
