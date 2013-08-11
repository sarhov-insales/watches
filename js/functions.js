


jQuery(document).ready(function($) {


// mobile navigation

var opener = $('.drop-open')
var drop = $('.drop');

$(opener).click(function() {
  $(this).toggleClass('drop-close').next(drop).slideToggle(600);
  if($(this).hasClass('drop-close')){
    $(this).attr('data-icon', '=');
  }
  else{
    $(this).attr('data-icon', '>');
  }
});


// list-grid

$(function() {
$('.products').addClass('grid');

var cc = $.cookie('list_grid');
if (cc == 'g') {
$('.products').addClass('grid');
$('#grid').addClass('active').siblings().removeClass('active');
} else {
$('.products').addClass('list');
$('.products').removeClass('grid');
$('#list').addClass('active').siblings().removeClass('active');
}
});

  
$('#grid').click(function() {
if($(this).hasClass("active")) {
return false;
} else {

$('.products').fadeOut(300, function() {
$('#grid').addClass('active').siblings().removeClass('active');
$(this).addClass('grid').removeClass('list').fadeIn(300);
$.cookie('list_grid', 'g');
});
return false;
}
});
  
$('#list').click(function() {

if($(this).hasClass("active")) {
return false;
} else {

$('.products').fadeOut(300, function() {
$(this).addClass('list').removeClass('grid').fadeIn(300);
$('#list').addClass('active').siblings().removeClass('active');
$.cookie('list_grid', 'l');
});
return false;
}
});



// cart

$('.cart-inner').click(function() {
	$('.cart_items_count').toggleClass('cart_items_count_white');
			
	$('.mini-cart').slideToggle('slow');	
});


// The  sub menu open close

// 

// slider

$(function () {
$('.rs-slider').refineSlide({
maxWidth              : 1200,      // Max slider width - should be set to image width
transition            : 'random',  // String (default 'cubeV'): Transition type ('custom', random', 'cubeH', 'cubeV', 'fade', 'sliceH', 'sliceV', 'slideH', 'slideV', 'scale', 'blockScale', 'kaleidoscope', 'fan', 'blindH', 'blindV')
fallback3d            : 'sliceV', // String (default 'sliceV'): Fallback for browsers that support transitions, but not 3d transforms (only used if primary transition makes use of 3d-transforms)
customTransitions     : [],       // Arr (Custom transitions wrapper)
perspective           : 1000,      // Perspective (used for 3d transforms)
useThumbs             : false,     // Bool (default true): Navigation type thumbnails
useArrows             :true,   // Bool (default false): Navigation type previous and next arrows
thumbMargin           : 3,        // Int (default 3): Percentage width of thumb margin
autoPlay              : true,    // Int (default false): Auto-cycle slider
delay                 : 5000,       // Int (default 5000) Time between slides in ms
transitionDuration    : 800,      // Int (default 800): Transition length in ms
startSlide            : 0,        // Int (default 0): First slide
keyNav                : true,     // Bool (default true): Use left/right arrow keys to switch slide
captionWidth          : 50,       // Int (default 50): Percentage of slide taken by caption
arrowTemplate         : '<div class="rs-arrows"><a href="#" data-icon="&#x61;" class="rs-prev"></a><a href="#" data-icon="&#x62;" class="rs-next"></a></div>', // String: The markup used for arrow controls (if arrows are used). Must use classes '.rs-next' & '.rs-prev'
onInit                : function () {}, // Func: User-defined, fires with slider initialisation
onChange              : function () {}, // Func: User-defined, fires with transition start
afterChange           : function () {}  // Func: User-defined, fires after transition end
});
});




// The animation fly to cart

$('.flytocart').click(function () {
$('.mini-cart').slideDown('slow');
$('.cart_items_count').addClass('cart_items_count_white');
$('body,html').animate({
scrollTop: 0
}, 1200);
var cart = $('.cart');
var imgtodrag = $(this).closest('.flybox').find(".flyimage");
var imgclone = imgtodrag.clone()
.offset({
top: imgtodrag.offset().top,
left: imgtodrag.offset().left
})
.css({
'opacity': '0.5',
'position': 'absolute',
'height': 'auto',
'width': '240px',
'z-index': '9999'
})
.appendTo($('html'))
.animate({
'top': cart.offset().top + 10,
'left': cart.offset().left + 10,
'width': 75,
'height': 105
},1200);
imgclone.animate({
'opacity':0
});
return false;
}); 






// quantity

$(function(){
   $('.plus').click(function(e){
           e.preventDefault();
     var qwt = $(this).parents('.quantity:first').find('.qwt').val();
           qwt = ++qwt;  
           $(this).parents('.quantity:first').find('.qwt').val(qwt);
           $(this).parents('.quantity:first').find('.qwt2').val(qwt).trigger('change');
     
          recalcAmount(this);
          });
          $('.minus').click(function(e){
           e.preventDefault();
           var qwt = $(this).parents('.quantity:first').find('.qwt').val();
           qwt = --qwt;  
             if (qwt == 0){return false;
             } else {
             $(this).parents('.quantity:first').find('.qwt').val(qwt);
             $(this).parents('.quantity:first').find('.qwt2').val(qwt).trigger('change');  
              recalcAmount(this);  
             }
           });

 });








// don't delete the end of document ready

});




$(window).load(function() {

// preloader
$('.loading').addClass('loading-out');


  // carousel
$("#carousel").flexisel({
visibleItems: 3,
animationSpeed: 1000,
autoPlay: true,
autoPlaySpeed: 3000,            
pauseOnHover: true,
enableResponsiveBreakpoints: true,
responsiveBreakpoints: { 
portrait: { 
changePoint:480,
visibleItems: 1
}, 
landscape: { 
changePoint:640,
visibleItems: 2
},
tablet: { 
changePoint:768,
visibleItems: 3
}
}
});



$("#items_carousel").flexisel({
visibleItems: 6,
animationSpeed: 1500,
autoPlay: false,
autoPlaySpeed: 2000,            
pauseOnHover: true,
enableResponsiveBreakpoints: true,
responsiveBreakpoints: { 
portrait: { 
changePoint:480,
visibleItems: 2
}, 
landscape: { 
changePoint:640,
visibleItems: 3
},
tablet: { 
changePoint:768,
visibleItems: 5
}
}

});

// don't remove the window ready

});