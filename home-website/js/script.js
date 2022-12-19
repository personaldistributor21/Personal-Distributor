// JavaScript Document
//swiper script
 
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 5.2,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    
    // init: false,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
  
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
  
      // 1440:{
      //   slidesPerView: 5,
      //   spaceBetween: 10,
      // },
  
    }
  });