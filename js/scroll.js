// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
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

// Call the loop for the first time
loop()

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
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
}
window.load()
{
  progress()
}
function load() 
{
  progress()
}
// $(".tech1").scroll(function(){
// $(document).ready(function(){
//   $(".interest").fadeIn(3000);
// });
// });