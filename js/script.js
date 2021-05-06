

//бургер

$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__list').toggleClass('active');
   });
});


//споилеры

//главный каталог
$(document).ready(function() {
   $('.catalog__burger').click(function(event) {//обращаемся к заголовку, по событию слик

      $(this).toggleClass('active').next().slideToggle(300);// добавить при клике заголовку класс, и показать текст с анимацией
   });
});


//подкаталог
$(document).ready(function() {
   $('.big').click(function(event) {//обращаемся к большому пункту 
      
      $('.big__item_mob').toggleClass('active');
   });
});

$(document).ready(function() {
   $('.big').hover(function(event) {
      
      $('.big__item_base').toggleClass('active');
      //$('.big_item__item').toggleClass('active');
   });
});



//
$(document).ready(function() {
   $('.big').hover(function(event) {//обращаемся к большому пункту 
      
      $('.big').toggleClass('active').next();// добавить при клике его пункту свойства
      //$('.big_item__item').toggleClass('active');
   });
});


//не знаю, что это
$(document).ready(function() {
   $('.product__item').hover(function(event) { 
      
      $.next().toggleClass('active');
      //$('.item_swipe').toggleClass('active');
   });
});







$(document).ready(function() {
   $('.producer__title').click(function(event) {//обращаемся к заголовку, по событию слик

      $(this).toggleClass('active').next().slideToggle(300);// добавить при клике заголовку класс, и показать текст с анимацией
   });
});



$(document).ready(function() {
   $('.char__menu').click(function(event) {//обращаемся к большому пункту 
      
      $(this).toggleClass('active').next();// добавить при клике его пункту свойства
      //$('.big_item__item').toggleClass('active');
   });
});




//табы описания товара
$(document).ready(function() {
   $('.a_1').click(function(event) {

      if($('.tab__item_2').hasClass('active')){
         $('.tab__item_2').removeClass('active');
      }

      if($('.a_2').hasClass('active')){
         $('.a_2').removeClass('active');
      }

      if(!$('.a_1').hasClass('active')){
         $('.tab__item_1').toggleClass('active');
         $('.a_1').toggleClass('active');
      }   

   });
});

$(document).ready(function() {
   $('.a_2').click(function(event) {

      if($('.tab__item_1').hasClass('active')){
         $('.tab__item_1').removeClass('active');
      }

      if($('.a_1').hasClass('active')){
         $('.a_1').removeClass('active');
      }

      if(!$('.a_2').hasClass('active')){
         $('.tab__item_2').toggleClass('active');
         $('.a_2').toggleClass('active');
      }

   });
});





//табы заказа

$(document).ready(function() {
   $('.i_1').click(function(event) {

      if($('.u_2').hasClass('active') || $('.u_3').hasClass('active') ){

         $('.u_2').removeClass('active');
         $('.u_3').removeClass('active');

         $('.i_2').removeClass('active');
         $('.i_3').removeClass('active');


         $('.i_1').toggleClass('active');
         $('.u_1').toggleClass('active');

      }
   });
});

$(document).ready(function() {
   $('.i_2').click(function(event) {

      if($('.u_1').hasClass('active') || $('.u_3').hasClass('active') ){

         $('.u_1').removeClass('active');
         $('.u_3').removeClass('active');

         $('.i_1').removeClass('active');
         $('.i_3').removeClass('active');


         $('.i_2').toggleClass('active');
         $('.u_2').toggleClass('active');

      }
   });
});

$(document).ready(function() {
   $('.i_3').click(function(event) {

      if($('.u_1').hasClass('active') || $('.u_2').hasClass('active') ){

         $('.u_1').removeClass('active');
         $('.u_2').removeClass('active');

         $('.i_1').removeClass('active');
         $('.i_2').removeClass('active');


         $('.i_3').toggleClass('active');
         $('.u_3').toggleClass('active');

      }
   });
});












