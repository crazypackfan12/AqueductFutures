function loadMessage()
{
	document.getElementById("light").style.display="block";
	document.getElementById("fade").style.display="block";
	document.getElementById("closeButton").onclick = function(){
												document.getElementById("light").style.display="none";
												document.getElementById("fade").style.display="none"; 
												};
												
	document.getElementById("fade").onclick = function(){
												document.getElementById("light").style.display="none";
												document.getElementById("fade").style.display="none"; 
												};
												
	$(document).keyup(function(event) {if(event.which === 27 || event.key == 27) 
										{
											document.getElementById("light").style.display="none";
											document.getElementById("fade").style.display="none"; 
										}});
}