$(function (){



//*BANNER SLIDE


$('#banner').slick({
   
   arrows:false,
   dots: true,

  });



  $('.product-slider').slick({
   slidesToShow: 4,
   prevArrow:'.arrows  .left-arrow',
   nextArrow:'.arrows  .right-arrow',



   responsive: [
      {
        breakpoint:1199,
        settings: {
          slidesToShow: 4,
        
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        
        }
      },
      {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
         
         }
       },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
         
        }
      }
   
    ]
  });




  $('.coundown').countdown("2022/12/31 23:59:59",function(e){
    let time = e.strftime('%D days %H:%M:%S');
  
     $('.coundown .days') .html( e.strftime('%D'));
     $('.coundown .hours') .html( e.strftime('%H')); 
     $('.coundown .mins') .html( e.strftime('%M'));
     $('.coundown .sec') .html( e.strftime('%S'));

  });

  


  new VenoBox({
    selector: ".box"
});




//*shop detail pages//


$('.top-image_slider').slick({

  arrows:false,
  asNavFor: '.bottom_image_slider',
});
 
 
$('.bottom_image_slider').slick({

  arrows:false,
  slidesToShow:5,
  asNavFor: '.top-image_slider',
  centerMode: true,
  centerPadding:'0px',
});

 










});




 
 

