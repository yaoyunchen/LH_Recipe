$(document).ready(function() {
	//console.log("Script included!");

	//Double click to mark ingredient as bought.
	$('table > tbody > tr').click(function() {
		$(this).fadeOut(50).fadeIn(50);
	});
	$('table > tbody > tr').dblclick(function() {
		$(this).toggleClass('Marked');
	});

	//User keeps focus on position in list.
	$('#ProLeft > ol').click(function() {
		$('.PlaceHolder').next().addClass("PlaceHolder");
	});

	//Hide images.
	$('#HideImg').click(function() {
		$('img').toggleClass('HideImg');
	});
});