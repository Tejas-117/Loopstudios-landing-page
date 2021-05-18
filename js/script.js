// navbar for mobiles;
const navbarLinks = document.querySelector('.navbar-links');
const toggleBtn = document.querySelector('.toggle-button');
const hamburgerBtn = document.querySelector('.hamburger-img');
const closeBtn = document.querySelector('.close-img');

const topSection = document.querySelector('.top-section');//to change the bg according to the click
   toggleBtn.addEventListener('click', (e) => {
      navbarLinks.classList.toggle('show-navbar');
      topSection.classList.toggle('topsection-bg');

      if(navbarLinks.classList.contains('show-navbar')){
         hamburgerBtn.style.display='none';
         closeBtn.style.display='block';
         document.body.style.overflow='hidden';//overflow hidden when navbar is active;
      }
      else{
         hamburgerBtn.style.display='block';
         closeBtn.style.display='none';
         document.body.style.overflow='unset';
      }
   });


const deviceWidth = document.body.clientWidth;
// changing the images for desktop depending on device width;
const heroImg = document.querySelector('.hero-img');
 if(deviceWidth>=900){
   heroImg.src = "images/desktop/image-interactive.jpg";
 }