<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<link rel="stylesheet" type="text/css" href="styles/presentStyle.css">
	<script src="js/jquery.js"></script>
	<script src="js/panelNav.js"></script>
	<?php include 'includes/header.php'; ?>
    <?php include 'includes/analytics/analytics_present.php'; ?>
	<title>Aqueduct - Present</title>
</head>

<body>
	
	<div id="pageTitle">
		PRESENT
	</div>
	
	<div id="galleryContainer">	
		<div id="thumbContainer">
			<div id="thumbs">
				<img name="panel5" class="panelThumb" src="../images/thumbnail_gallery/bnw-5a.png" onclick="toAnchor('present1', 'present')" onmouseover="addColor('col-5a.png', 5)" onmouseout="removeColor('bnw-5a.png', 5)"/>
				<img name="panel6" class="panelThumb" src="../images/thumbnail_gallery/bnw-6a.png" onclick="toAnchor('present2', 'present')" onmouseover="addColor('col-6a.png', 6)" onmouseout="removeColor('bnw-6a.png', 6)"/>
				<img name="panel7" class="panelThumb" src="../images/thumbnail_gallery/bnw-7a.png" onclick="toAnchor('present3', 'present')" onmouseover="addColor('col-7a.png', 7)" onmouseout="removeColor('bnw-7a.png', 7)"/>			 
				<img name="panel8" class="panelThumb" src="../images/thumbnail_gallery/bnw-8a.png" onclick="toAnchor('present4', 'present')" onmouseover="addColor('col-8a.png', 8)" onmouseout="removeColor('bnw-8a.png', 8)"/>
				<br><br>
				<img name="panel9" class="panelThumb" src="../images/thumbnail_gallery/bnw-9a.png" onclick="toAnchor('present5', 'present')" onmouseover="addColor('col-9a.png', 9)" onmouseout="removeColor('bnw-9a.png', 9)"/>
				<img name="panel10" class="panelThumb" src="../images/thumbnail_gallery/bnw-10a.png" onclick="toAnchor('present6', 'present')" onmouseover="addColor('col-10a.png', 10)" onmouseout="removeColor('bnw-10a.png', 10)"/>
				<img name="panel11" class="panelThumb" src="../images/thumbnail_gallery/bnw-11a.png" onclick="toAnchor('present7', 'present')" onmouseover="addColor('col-11a.png', 11)" onmouseout="removeColor('bnw-11a.png', 11)"/>			 
			</div>
				
			<div id="thumbText">
				<iframe id="thumbText1" src="exhibit text/present/frontText.html" width="50%" height="200px"></iframe>
			</div>
		</div>
				
		<a id="present1">
			<img class="photo" src="../images/thumbnail_gallery/col-5.png" onclick="openImage('col-5.png')">
			<iframe class="textframe" src="exhibit text/present/1.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="present2">
			<img class="photo" src="../images/thumbnail_gallery/col-6.png" onclick="openImage('col-6.png')">
			<iframe class="textframe" src="exhibit text/present/2.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="present3">
			<img class="photo" src="../images/thumbnail_gallery/col-7.png" onclick="openImage('col-7.png')">
			<iframe class="textframe" src="exhibit text/present/3.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="present4">
			<img class="photo" src="../images/thumbnail_gallery/col-8.png" onclick="openImage('col-8.png')">
			<iframe class="textframe" src="exhibit text/present/4.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="present5">
			<img class="photo" src="../images/thumbnail_gallery/col-9.png" onclick="openImage('col-9.png')">
			<iframe class="textframe" src="exhibit text/present/5.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="present6">
			<img class="photo" src="../images/thumbnail_gallery/col-10.png" onclick="openImage('col-10.png')">
			<iframe class="textframe" src="exhibit text/present/6.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="present7">
			<img class="photo" src="../images/thumbnail_gallery/col-11.png" onclick="openImage('col-11.png')">
			<iframe class="textframe" src="exhibit text/present/7.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="timeline1">
			<img class="photo" src="../images/timeline/test1.jpg" onclick="openTimeline()">
			<iframe class="textframe" src="exhibit text/present/timelineText.html" width="400px" height="690px"></iframe>
		</a>
	</div>
	<div id="footer"><?php include 'includes/footer.php'; ?></div>
</body>
</html>