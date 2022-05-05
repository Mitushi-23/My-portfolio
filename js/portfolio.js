burger = document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navbarbrand =document.querySelector('.navbar-brand');
nav=document.querySelector('.nav');
containerFluid=document.querySelector('.container-fluid');
navbarHeader=document.querySelector('.navbar-header');

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-class-resp');
    navbarbrand.classList.toggle('v-class-resp');
    containerFluid.classList.toggle('h-nav-resp');
    navbarHeader.classList.toggle('h-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})

// scroll to top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}