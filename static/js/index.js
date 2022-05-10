//jshint esversion: 6

//mobile menu code

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.menu-close');
const menuItems = document.querySelector('.menu-item');

function menuOpen (){
  mobileMenu.style.height = "100vh";
  mobileMenu.style.width = "100vw";
  mobileMenu.style.opacity = "1";
  mobileMenu.style.zIndex = "10";
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
  mobileMenu.style.zIndex = "0";
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.addEventListener('click', menuClose);

//mobile menu dropdowns

const dropdown = document.querySelector('#dropdown');
const dropdownEl = document.querySelector('#dropdown-element');
const dropdownAbout = document.querySelector('#dropdown-m-about');
const dropdownAboutEl = document.querySelector('#dropdown-el-m-about');

dropdownAbout.addEventListener('click', function(){
  if(dropdownAboutEl.style.display == 'flex'){
    dropdownAboutEl.style.display = 'none';
    dropdownAbout.classList.remove('active-dropdown');
  }else{
    dropdownAboutEl.style.display = 'flex';
    dropdownAbout.classList.add('active-dropdown');
  }
});

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

const dropdownAboutDT = document.querySelector('#dropdown-about-dt');
const dropdownAboutElDT = document.querySelector('#dropdown-about-element-dt');

dropdownAboutDT.addEventListener('click', function(){
  if(dropdownAboutElDT.style.display == 'flex'){
    dropdownAboutElDT.style.display = 'none';
    dropdownAboutDT.classList.remove('active-dropdown-dt');
  }else{
    dropdownAboutElDT.style.display = 'flex';
    dropdownAboutDT.classList.add('active-dropdown-dt');
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
    }else{
      searchModal.style.display = 'block';
    }
  });
});

searchClose.addEventListener('click', function(){
  searchModal.style.display = 'none';
});



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
