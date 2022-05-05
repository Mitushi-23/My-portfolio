var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }
var elementsToShow = document.querySelectorAll('.show-on-scroll')

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible')
    } else {
      element.classList.remove('is-visible')
    }
  })

  scroll(loop)
}

loop()

function isElementInViewport(el) {
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0]
  }
  var rect = el.getBoundingClientRect()
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  )
}
function progress() {
  $('.p1').animate(
    {
      width: '25%',
    },
    1000,
  )
  $('.p2').animate(
    {
      width: '50%',
    },
    1000,
  )
  $('.p3').animate(
    {
      width: '75%',
    },
    1000,
  )
  $('.p4').animate(
    {
      width: '93%',
    },
    1000,
  )
  $('.p5').animate(
    {
      width: '85%',
    },
    1000,
  )
  $('.p6').animate(
    {
      width: '90%',
    },
    1000,
  )
  $('.p7').animate(
    {
      width: '30%',
    },
    1000,
  )
}
window.load()
{
  progress()
}
function load() {
  progress()
}

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