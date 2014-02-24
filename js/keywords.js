function toggleDef(toShow)
{
	var divToShow = document.getElementById(toShow);
	
	if(divToShow.style.display == "none")
		divToShow.style.display = "block";
		
	else
		divToShow.style.display = "none";
}