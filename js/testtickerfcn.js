var aniSpd01 = 4000;
var fadeSpd01 = 2500;
var fadeSpd02 = 500;
var fadeSpd03 = 1000;
var fadeintro = 1000;

$(function() {
    var startIndex = 0;
    var endIndex = $('#aniHolder div').length;
    $('#aniHolder div:first').fadeIn(fadeintro);
    window.setInterval(function() {
    $('#aniHolder div:eq(' + startIndex + ')').fadeOut(fadeSpd02);
        startIndex++;
        $('#aniHolder div:eq(' + startIndex + ')').fadeIn(fadeSpd01);
		
        if (endIndex == startIndex) startIndex = -1;
    }, aniSpd01);
});