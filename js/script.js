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
         
      }
      else{
         hamburgerBtn.style.display='block';
         closeBtn.style.display='none';
      }
   });


const deviceWidth = document.body.clientWidth;
// chamging the  images for desktop depending on device width;
const heroImg = document.querySelector('.hero-img');
 if(deviceWidth>=900){
    console.log(heroImg);
   heroImg.src = "images/desktop/image-interactive.jpg";
   console.log(heroImg);
 }