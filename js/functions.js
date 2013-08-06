jQuery(document).ready(function($) {


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









// don't delete the end of document ready

});