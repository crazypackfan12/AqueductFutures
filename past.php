<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<link rel="stylesheet" type="text/css" href="styles/pastStyle.css">
	<script src="js/jquery.js"></script>
	<script src="js/panelNav.js"></script>
	<?php include 'includes/header.php'; ?>
    <?php include 'includes/analytics/analytics_past.php'; ?>
	<title>Aqueduct - Past</title>
</head>

<body>
	
	<div id="pageTitle">
		PAST
	</div>
	
	<div id="galleryContainer">	
		<div id="thumbContainer">
			<div id="thumbs">
				<img name="panel1" class="panelThumb" src="../images/thumbnail_gallery/bnw-1a.png" onclick="toAnchor('past1', 'past')" onmouseover="addColor('col-1a.png', 1)" onmouseout="removeColor('bnw-1a.png', 1)"/>
				<img name="panel2" class="panelThumb" src="../images/thumbnail_gallery/bnw-2a.png" onclick="toAnchor('past2', 'past')" onmouseover="addColor('col-2a.png', 2)" onmouseout="removeColor('bnw-2a.png', 2)"/>
				<img name="panel3" class="panelThumb" src="../images/thumbnail_gallery/bnw-3a.png" onclick="toAnchor('past3', 'past')" onmouseover="addColor('col-3a.png', 3)" onmouseout="removeColor('bnw-3a.png', 3)"/>
				<img name="panel4" class="panelThumb" src="../images/thumbnail_gallery/bnw-4a.png" onclick="toAnchor('past4', 'past')" onmouseover="addColor('col-4a.png', 4)" onmouseout="removeColor('bnw-4a.png', 4)"/>
			</div>
				
			<div id="thumbText">
				<iframe id="thumbText1" src="exhibit text/past/frontText.html" width="50%" height="200px"></iframe>
			</div>
		</div>
			
		<a id="past1">
			<img class="photo" src="../images/thumbnail_gallery/col-1.png" height="660px" width="400px" onclick="openImage('col-1.png')">
			<iframe class="textframe" src="exhibit text/past/1.html" width="400px" height="690px"></iframe>
		</a>
		
		
		
		<a id="past2">
			<img class="photo" src="../images/thumbnail_gallery/col-2.png" onclick="openImage('col-2.png')">
			<iframe class="textframe" src="exhibit text/past/2.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="past3">
			<img class="photo" src="../images/thumbnail_gallery/col-3.png" onclick="openImage('col-3.png')">
			<iframe class="textframe" src="exhibit text/past/3.html" width="400px" height="690px"></iframe>
		<a>
			
		<a id="past4">
			<img class="photo" src="../images/thumbnail_gallery/col-4.png" onclick="openImage('col-4.png')">
			<iframe class="textframe" src="exhibit text/past/4.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="timeline1">
			<img class="photo" src="../images/timeline/test1.jpg" onclick="openTimeline()">
			<iframe class="textframe" src="exhibit text/past/timelineText.html" width="400px" height="690px"></iframe>
		</a>
	</div>
	<div id="footer"><?php include 'includes/footer.php'; ?></div>
</body>
</html>