////////
////
//// INTERSECTION OBSERVER
////
///////

// Add data set for delay here : https://www.youtube.com/watch?v=_5Bu3JY-ZHc

// Target elements to anim
const elements = document.querySelectorAll('.anim')

const observer = new IntersectionObserver((entries) => {
  // informations
  console.log(entries)
  // Start observer
  entries.forEach(function (entry) {
    entry.target.style.opacity = 1
  })
})

// ELEMENT TO OBSERVE
elements.forEach((element) => {
  observer.observe(element)
})
