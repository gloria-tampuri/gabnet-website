
let exploreLink = document.querySelector(".explore-tag")
let exploreOverlay = document.querySelector('.explore-overlay')
let body = document.getElementById('body')

// Function declarations

function removeExplore(){
    exploreOverlay.style.display = 'none'
}

function closeExplore(){
    setTimeout(() => {
      return removeExplore()
    }, "500000")   
}

function displayExplore(){
 exploreOverlay.style.display = 'flex';
 return closeExplore()
}



// Calling Declared Function
exploreLink.addEventListener('mouseover' , displayExplore)
body.addEventListener('click', removeExplore)
closeExplore()