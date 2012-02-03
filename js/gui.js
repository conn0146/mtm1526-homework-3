$(document).ready(function () {
	
$('form').on('submit', function (ev) {
		ev.preventDefault();
		
		if ($('#dropdown').val() = '#bor') {
		$(this).css('border-color', '#color');
		}
		
		else if ($('#dropdown').val() = '#bac') {
		$(this).css('background-color', '#color');
		}
		
		else {
		$(this).css('color', '#color');
		}
});







});