


$(document).ready(function(){
    // dir
    var bodyDir = $('body').css('direction')
    var dirAr
    if(bodyDir == "rtl"){
      dirAr= true
    }
    else{
      dirAr = false
    }




    new WOW().init();






     const swiper = new Swiper('.swiper', {
      
      spaceBetween: 10 ,
      slidesPerView: 3.3,
      // centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 3.3,
        },
        1024: {
          slidesPerView: 3.3,
        },
      },
      mousewheel: {
        forceToAxis: true,
      },
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // Autoplay settings
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
      },

      rtl: dirAr,

    });







    


    //end
});







