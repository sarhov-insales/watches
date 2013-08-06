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










// don't delete the end of document ready

});