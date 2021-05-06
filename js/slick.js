function ibg(){

   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
   }
   }
   
   ibg();

   function ibgt(){

      let ibgt=document.querySelectorAll(".ibgt");
      for (var i = 0; i < ibgt.length; i++) {
      if(ibgt[i].querySelector('img')){
      ibgt[i].style.backgroundImage = 'url('+ibgt[i].querySelector('img').getAttribute('src')+')';
      }
      }
      }
      
      ibgt();
   



   //рекламный слайдер

   $(document).ready(function(){

      $('.slider').slick({
   
         arrows: false,
         dots: true,
         adaptiveHeight: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 500,
         easing: 'linear',
         infinite: true,
         initialSlide: 0,
         autoplay: false,
         autoplaySpeed: 1000,
         pauseOnFocus: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         draggable: true,
         swipe: true,
         touchThreshold: 10,
         touchMove: true,
         waitForAnimate: true,
         centerMode: false,
         variableWidth: false,
         rows: 1,
         slidesPerRow: 1,
         vertical: false,
         verticalSwiping: false,
         fade: false,

         
   
      });


      //продуктовый слайдер

      $('.slider_product').slick({

         arrows: true,
         dots: false,
         adaptiveHeight: false,
         slidesToShow: 3,
         slidesToScroll: 3,
         speed: 500,
         easing: 'linear',
         infinite: false,
         initialSlide: 0,
         autoplay: false,
         autoplaySpeed: 1000,
         pauseOnFocus: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         draggable: true,
         swipe: true,
         touchThreshold: 10,
         touchMove: true,
         waitForAnimate: true,
         centerMode: false,
         variableWidth: false,
         rows: 2,
         slidesPerRow: 1,
         vertical: false,
         verticalSwiping: false,
         fade: false,


         responsive: [
            {
               breakpoint: 750,
               settings: {
                  slidesToShow: 2,
                  rows: 3,
                  slidesToScroll: 2,
               }
            },{
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               rows: 6,
               slidesToScroll: 1,
            }
         }
         ],

         appendArrows: $('.slider__arrows'),

      });





      //бренды слайдер

      $('.sliderBrend').slick({

         arrows: true,
         dots: false,
         adaptiveHeight: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         speed: 500,
         easing: 'linear',
         infinite: true,
         initialSlide: 0,
         autoplay: false,
         autoplaySpeed: 1000,
         pauseOnFocus: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         draggable: true,
         swipe: true,
         touchThreshold: 10,
         touchMove: true,
         waitForAnimate: true,
         centerMode: false,
         variableWidth: false,
         rows: 1,
         slidesPerRow: 1,
         vertical: false,
         verticalSwiping: false,
         fade: false,


         responsive: [
            {
               breakpoint: 850,
               settings: {
                  slidesToShow: 4,
               }
            },{
               breakpoint: 600,
               settings: {
               slidesToShow: 3,
               }
            },{
               breakpoint: 500,
               settings: {
               slidesToShow: 2,
               }
            },{
               breakpoint: 400,
               settings: {
               slidesToShow: 1,
            },
         }



         ],      
         

      });  
      
      




      $('.sheet_slider').slick({

         arrows: false,
         dots: true,
         adaptiveHeight: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 600,
         easing: 'linear',
         infinite: false,
         initialSlide: 0,
         autoplay: false,
         autoplaySpeed: 1000,
         pauseOnFocus: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         draggable: true,
         swipe: true,
         touchThreshold: 10,
         touchMove: true,
         waitForAnimate: true,
         centerMode: false,
         variableWidth: false,
         rows: 1,
         slidesPerRow: 1,
         vertical: false,
         verticalSwiping: false,
         fade: false,


         appendDots: $('.slider__dots'),

      });


   });









