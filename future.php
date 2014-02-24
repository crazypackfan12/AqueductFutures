<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<link rel="stylesheet" type="text/css" href="styles/futureStyle.css">
	<script src="js/jquery.js"></script>
	<script src="js/panelNav.js"></script>
	<?php include 'includes/header.php'; ?>
    <?php include 'includes/analytics/analytics_future.php'; ?>
	<title>Aqueduct - Future</title>
</head>

<body>
	
	<div id="pageTitle">
		FUTURE
	</div>
	
	<div id="galleryContainer">
		<div id="thumbContainer">
			<div id="thumbs">
				<img name="panel12" class="panelThumb" src="../images/thumbnail_gallery/bnw-12a.png" onclick="toAnchor('future1', 'future')" onmouseover="addColor('col-12a.png', 12)" onmouseout="removeColor('bnw-12a.png', 12)"/>
				<img name="panel13" class="panelThumb" src="../images/thumbnail_gallery/bnw-13a.png" onclick="toAnchor('future2', 'future')" onmouseover="addColor('col-13a.png', 13)" onmouseout="removeColor('bnw-13a.png', 13)"/>
				<img name="panel14" class="panelThumb" src="../images/thumbnail_gallery/bnw-14a.png" onclick="toAnchor('future3', 'future')" onmouseover="addColor('col-14a.png', 14)" onmouseout="removeColor('bnw-14a.png', 14)"/>			 
				<img name="panel15" class="panelThumb" src="../images/thumbnail_gallery/bnw-15a.png" onclick="toAnchor('future4', 'future')" onmouseover="addColor('col-15a.png', 15)" onmouseout="removeColor('bnw-15a.png', 15)"/>
				<img name="panel16" class="panelThumb" src="../images/thumbnail_gallery/bnw-16a.png" onclick="toAnchor('future5', 'future')" onmouseover="addColor('col-16a.png', 16)" onmouseout="removeColor('bnw-16a.png', 16)"/>
				<br><br>
				<img name="panel17" class="panelThumb" src="../images/thumbnail_gallery/bnw-17a.png" onclick="toAnchor('future6', 'future')" onmouseover="addColor('col-17a.png', 17)" onmouseout="removeColor('bnw-17a.png', 17)"/>
				<img name="panel18" class="panelThumb" src="../images/thumbnail_gallery/bnw-18a.png" onclick="toAnchor('future7', 'future')" onmouseover="addColor('col-18a.png', 18)" onmouseout="removeColor('bnw-18a.png', 18)"/>			 
				<img name="panel19" class="panelThumb" src="../images/thumbnail_gallery/bnw-19a.png" onclick="toAnchor('future8', 'future')" onmouseover="addColor('col-19a.png', 19)" onmouseout="removeColor('bnw-19a.png', 19)"/>			 
				<img name="panel20" class="panelThumb" src="../images/thumbnail_gallery/bnw-20a.png" onclick="toAnchor('future9', 'future')" onmouseover="addColor('col-20a.png', 20)" onmouseout="removeColor('bnw-20a.png', 20)"/>			 
			</div>
				
			<div id="thumbText">
				<iframe id="thumbText1" src="exhibit text/future/frontText.html" width="50%" height="200px"></iframe>
			</div>
		</div>
	
		<a id="future1">
			<img class="photo" src="../images/thumbnail_gallery/col-12.png" onclick="openImage('col-12.png')">
			<iframe class="textframe" src="exhibit text/future/1.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future2">
			<img class="photo" src="../images/thumbnail_gallery/col-13.png" onclick="openImage('col-13.png')">
			<iframe class="textframe" src="exhibit text/future/2.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future3">
			<img class="photo" src="../images/thumbnail_gallery/col-14.png" onclick="openImage('col-14.png')">
			<iframe class="textframe" src="exhibit text/future/3.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future4">
			<img class="photo" src="../images/thumbnail_gallery/col-15.png" onclick="openImage('col-15.png')">
			<iframe class="textframe" src="exhibit text/future/4.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="future5">
			<img class="photo" src="../images/thumbnail_gallery/col-16.png" onclick="openImage('col-16.png')">
			<iframe class="textframe" src="exhibit text/future/5.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future6">
			<img class="photo" src="../images/thumbnail_gallery/col-17.png" onclick="openImage('col-17.png')">
			<iframe class="textframe" src="exhibit text/future/6.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future7">
			<img class="photo" src="../images/thumbnail_gallery/col-18.png" onclick="openImage('col-18.png')">
			<iframe class="textframe" src="exhibit text/future/7.html" width="400px" height="690px"></iframe>
		</a>
			
		<a id="future8">
			<img class="photo" src="../images/thumbnail_gallery/col-19.png" onclick="openImage('col-19.png')">
			<iframe class="textframe" src="exhibit text/future/8.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="future9">
			<img class="photo" src="../images/thumbnail_gallery/col-20.png" onclick="openImage('col-20.png')">
			<iframe class="textframe" src="exhibit text/future/9.html" width="400px" height="690px"></iframe>
		</a>
		
		<a id="timeline1">
			<img class="photo" src="../images/timeline/test1.jpg" onclick="openTimeline()">
			<iframe class="textframe" src="exhibit text/future/timelineText.html" width="400px" height="690px"></iframe>
		</a>
	</div>
	<div id="footer"><?php include 'includes/footer.php'; ?></div>
</body>
</html>