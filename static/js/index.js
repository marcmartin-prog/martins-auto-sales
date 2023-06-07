//jshint esversion: 6

function disableScrolling(){
  var body = document.querySelector('body');
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
}

function enableScrolling(){
    body.style.height = 'unset';
    body.style.overflowY = 'scroll';
}

//mobile menu code

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.menu-close');
const menuItems = document.querySelectorAll('.menu-item');
const body = document.querySelector('body');


function menuOpen (){
  mobileMenu.style.height = "100vh";
  mobileMenu.style.width = "100vw";
  mobileMenu.style.opacity = "1";
  mobileMenu.style.zIndex = "30";
  disableScrolling();
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
  mobileMenu.style.zIndex = "0";
  enableScrolling();
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.forEach(element => {
  element.addEventListener('click', function(){
    menuClose();
  });
});

//mobile menu dropdowns

const dropdown = document.querySelector('#dropdown');
const dropdownEl = document.querySelector('#dropdown-element');



dropdown.addEventListener('click', function(){
  if(dropdownEl.style.display == 'flex'){
    dropdownEl.style.display = 'none';
    dropdown.classList.remove('active-dropdown');
  }else{
    dropdownEl.style.display = 'flex';
    dropdown.classList.add('active-dropdown');
  }
});

//desktop menu dropdowns

const dropdownDT = document.querySelector('#dropdown-dt');
const dropdownElDT = document.querySelector('#dropdown-element-dt');

dropdownDT.addEventListener('click', function(){
  if(dropdownElDT.style.display == 'flex'){
    dropdownElDT.style.display = 'none';
    dropdownDT.classList.remove('active-dropdown-dt');
  }else{
    dropdownElDT.style.display = 'flex';
    dropdownDT.classList.add('active-dropdown-dt');
  }
});


//search modal code

const searchButton = document.querySelectorAll('.search-mobile');
const searchModal = document.querySelector('.mobile-search');
const searchClose = document.querySelector('#search-close');

searchButton.forEach(button => {
  button.addEventListener('click', function(){
    if(searchModal.style.display == 'block'){
      searchModal.style.display ="none";
      enableScrolling();
    }else{
      searchModal.style.display = 'block';
      disableScrolling();
    }
  });
});

searchClose.addEventListener('click', function(){
  searchModal.style.display = 'none';
  enableScrolling();
});




//mobile and desktop search field change;

// Create a condition that targets viewports at least 1024px wide
const searchField = document.querySelector('#search');
const dtSearchField = document.querySelector('#search-dt');
const mobileSearchParent = document.querySelector('.mobile-search');
let mediaQuery = window.matchMedia('(min-width: 1024px)');
function handleTabletChange(e) {

  if (e.matches) {
    dtSearchField.appendChild(searchField);

  } else{
    mobileSearchParent.appendChild(searchField);
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

// update Code


function hideUpdate(){
  const update = document.querySelector("#update");
  update.style.display = 'none';
  enableScrolling();
}


//code for the floating label on forms

const FloatLabel = (() => {

  // add active class
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };

  // remove active class
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };

  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('.input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  };

  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.form-input');

    floatContainers.forEach((element) => {

      if (element.querySelector('.input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init
  };
})();

FloatLabel.init();


//star elements on Reviews

const rating = document.querySelectorAll('.rating');


rating.forEach((element) => {
  const ratingEl = document.querySelector('.rating').innerText;
  let ratingNumber = parseInt(ratingEl);

  for(let i = 0; i < ratingNumber; i++){
    const star = document.createElement('img');
    star.src = '/images/star.svg';
    star.alt = 'review star';
  }
});


// Load this script after everything else (document is ready)
document.addEventListener("DOMContentLoaded", function(event) {

	// This is the actual script
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$$('img').forEach(ele => {
			src = ele.src;
			if(src.includes('webp')) {
				src = src.replace('.webp', '.jpg');
				ele.src = src;
			}
		});
	}

});

let links = document.querySelectorAll("a[data-analytics]");
 for (var i = 0; i < links.length; i++) {
     links[i].addEventListener('click', handleLinkEvent);
     links[i].addEventListener('auxclick', handleLinkEvent);
 }

 function handleLinkEvent(event) {
     var link = event.target;
     var middle = event.type == "auxclick" && event.which == 2;
     var click = event.type == "click";
     while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
         link = link.parentNode;
     }
     if (middle || click) {
         let attributes = link.getAttribute('data-analytics').split(/,(.+)/);
         let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];
         plausible(...events);
     }
     if (!link.target) {
         if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
             setTimeout(function () {
                 location.href = link.href;
             }, 150);
             event.preventDefault();
         }
     }
 }

//reviews slider code
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const slider = document.querySelector('.reviews-slider');
const review = document.querySelector('.review');
const scrollByWidth = review.clientWidth;

leftArrow.addEventListener('click', function(){
  slider.scrollBy({left: -scrollByWidth, top: 0, behavior: 'smooth'});
});

rightArrow.addEventListener('click', function(){
  slider.scrollBy({left: scrollByWidth, top: 0, behavior: 'smooth'});
});
