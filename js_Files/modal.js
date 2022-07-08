const menuBtn = document.querySelector('.menu svg');
const closeBtn = document.getElementById('hide');
const backdrop = document.querySelector('.backdrop');
const modalMenu = document.querySelector('.modal');
const exploreDropdown = document.querySelector('.explore__btn');
const exploreDropUp = document.querySelector('.explore__close');
const firstDrop = document.querySelector('.explore__dropdown');
const plusIcon = document.querySelector('.plustoggle');
const minusIcon =document.querySelector('.minustoggle');
const plusIcon2 = document.querySelector('.plustoggle2');
const minusIcon2 =document.querySelector('.minustoggle2');
const plusIcon3 = document.querySelector('.plustoggle3');
const minusIcon3=document.querySelector('.minustoggle3');
const secondDrop = document.querySelector('.drop__toggle');
const secondDrop2 = document.querySelector('.drop__toggle2');
const secondDrop3 = document.querySelector('.drop__toggle3');
const dropdownIcon = document.querySelector('.dropicon')
 //fourth category
const plusIcon4 = document.querySelector('.plustoggle4');
const minusIcon4=document.querySelector('.minustoggle4');
const secondDrop4 = document.querySelector('.drop__toggle4');
// fifth Category
const plusIcon5 = document.querySelector('.plustoggle5');
const minusIcon5=document.querySelector('.minustoggle5');
const secondDrop5 = document.querySelector('.drop__toggle5');
//fifth Category
const plusIcon6 = document.querySelector('.plustoggle6');
const minusIcon6=document.querySelector('.minustoggle6');
const secondDrop6= document.querySelector('.drop__toggle6');


console.log(plusIcon5);
// funtions
function showSideMenu (){
   
    backdrop.style.display = 'block';
    modalMenu.style.display = 'block'

}
function hideModal(){
    backdrop.style.display = 'none';
    modalMenu.style.display = 'none'
    firstDrop.style.display = 'none'
    exploreDropUp.style.display = 'none'
    exploreDropdown.style.display = 'block'
    hideToggle2();
    hideToggle3();
    hideToggle4();
    hideToggle5();
    hideToggle6();
    return hideToggle();
    // secondDrop.style.display = 'none'
}
function firstToggle(){
        firstDrop.style.display = 'grid';
        plusIcon.style.display = 'block';
        exploreDropUp.style.display = 'block';
        exploreDropdown.style.display = 'none';
        minusIcon.style.display = 'none'
        minusIcon2.style.display= 'none';//Added by KBQ
        minusIcon3.style.display= 'none';
        minusIcon4.style.display= 'none';
        minusIcon5.style.display= 'none';
        minusIcon6.style.display= 'none';
}

function closeToggle(){
    exploreDropUp.style.display = 'none'
    exploreDropdown.style.display = 'block';
    firstDrop.style.display='none'
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
       
}

function secondToggle(){
secondDrop.style.display = 'block'
plusIcon.style.display = 'none';
minusIcon.style.display = 'block'
  console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
  console.log(newToggleBtn);
}

function hideToggle(){
    minusIcon.style.display = 'none';
    plusIcon.style.display = 'block'
    secondDrop.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}

function secondToggle2(){
    secondDrop2.style.display = 'block'
    minusIcon2.style.display = 'block'//Added by KBQ
    plusIcon2.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
    }
    

function hideToggle2(){
    minusIcon2.style.display = 'none';
    plusIcon2.style.display = 'block'
    secondDrop2.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}

function secondToggle3(){
    secondDrop3.style.display = 'block'
    minusIcon3.style.display = 'block'
    plusIcon3.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
    }
    

function hideToggle3(){
    minusIcon3.style.display = 'none';
    plusIcon3.style.display = 'block'
    secondDrop3.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}

function secondToggle4(){
    secondDrop4.style.display = 'block'
    minusIcon4.style.display = 'block'
    plusIcon4.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
    }
    

function hideToggle4(){
    minusIcon4.style.display = 'none';
    plusIcon4.style.display = 'block'
    secondDrop4.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}

function secondToggle5(){
    secondDrop5.style.display = 'block'
    minusIcon5.style.display = 'block'
    plusIcon5.style.display = 'none' 
    console.log('Close item 5');
}
    

function hideToggle5(){
    minusIcon5.style.display = 'none';
    plusIcon5.style.display = 'block'
    secondDrop5.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}

function secondToggle6(){
    secondDrop6.style.display = 'block'
    minusIcon6.style.display = 'block'
    plusIcon6.style.display = 'none' 
    console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
    }
    

function hideToggle6(){
    minusIcon6.style.display = 'none';
    plusIcon6.style.display = 'block'
    secondDrop6.style.display = 'none' 
      console.log('adsfdsafdsafdsfsda asdfhasdfsdfsd');
}
console.log(secondToggle5);

//  call to action;
menuBtn.addEventListener('click', showSideMenu);
closeBtn.addEventListener('click', hideModal);
exploreDropdown.addEventListener('click', firstToggle);
plusIcon.addEventListener('click', secondToggle);
minusIcon.addEventListener('click', hideToggle)
minusIcon2.addEventListener('click', hideToggle2)
plusIcon2.addEventListener('click', secondToggle2);
minusIcon3.addEventListener('click', hideToggle3)
plusIcon3.addEventListener('click', secondToggle3);
minusIcon4.addEventListener('click', hideToggle4)
plusIcon4.addEventListener('click', secondToggle4);
minusIcon5.addEventListener('click', hideToggle5);
plusIcon5.addEventListener('click', secondToggle5);
minusIcon6.addEventListener('click', hideToggle6);
plusIcon6.addEventListener('click', secondToggle6);
exploreDropUp.addEventListener('click', closeToggle);

