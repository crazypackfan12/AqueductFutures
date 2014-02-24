function toAnchor(whichAnc, whichPage)
{
	window.open("http://aqueduct-dev.csupomona.edu/" + whichPage + ".php#" + whichAnc, "_parent");	
}

function addColor(panel, panelNum)
{
	document.images["panel" + panelNum].src="../images/thumbnail_gallery/" + panel;
}

function removeColor(panel, panelNum)
{
	document.images["panel" + panelNum].src="../images/thumbnail_gallery/" + panel;
}

function openImage(whichImg)
{
	window.open("http://aqueduct-dev.csupomona.edu/images/thumbnail_gallery/" + whichImg, "_blank");	
}

function openTimeline()
{
	window.open("http://aqueduct-dev.csupomona.edu/historicFlows.php", "_parent");	
}

window.addEventListener('hashchange', function() {if('' == window.location.hash) 
													window.location.reload();});