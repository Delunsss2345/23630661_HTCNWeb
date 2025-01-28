const listBanner = document.querySelector('.main_content--list_banner') ; 
const banners = document.querySelectorAll('.main_content--banner');
const listChoice = document.querySelector('.list__banner--show') ;
const choices = document.querySelectorAll('.list__banner--show ul li');

console.log(choices);
let i = 0; 
const lengthBanner = banners.length; 

// setInterval(() => {
//     i++; 
//     if (i === lengthBanner) { 
//         i = 0; 
//     }
//     const width = banners[0].offsetWidth;
//     listBanner.style.transform = `translateX(${-width * i}px)`; 
//     listBanner.style.transition = 'transform 0.5s ease-in-out'; 
//     // choices[i].classList.add('active');
// }, 1000);
