
jQuery(document).ready(function($) {


$('.cart-inner').click(function() {
	$('.cart_items_count').toggleClass('cart_items_count_white');
			
	$('.mini-cart').slideToggle('slow');	
});


// The  sub menu open close

if ($(document.body).width() < 1200) {
$('li.item ul').each(function(index) {
$(this).prev().addClass('hassub')});
$('li.item a').after('<span></span>');
$('li.item ul').css('display','none');
$('li.item ul.active').css('display','block');
$('li.item ul').each(function(index) {
$(this).prev().addClass('open-close').click(function() {
if (
$(this).next().css('display') == 'none') {
$(this).next().slideDown(400, function () {
$(this).prev().removeClass('collapsed').addClass('expanded');
});
}else {
$(this).next().slideUp(400, function () {
$(this).prev().removeClass('expanded').addClass('collapsed');
$(this).find('ul').each(function() {
$(this).hide().prev().removeClass('expanded').addClass('collapsed');
});
});
}
return false;
});
});
}


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
}, 400);
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
},1000);
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

// don't remove this one
});