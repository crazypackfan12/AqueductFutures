<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<link rel="stylesheet" type="text/css" href="styles/timelineStyle.css">
	<script src="js/timeline.js"></script>
	<script src="js/jquery.js"></script>
	<?php include 'includes/header.php'; ?>
	<title>Aqueduct - Historic Flows</title>
</head>

<body onload="changeDate(0)">

	<div id="pageTitle">
		Historic Flows
	</div>
	
	<div id="timeLine">
		<div id="datePicker">
			<div id="arrow"><img src="\images\timeline\uparrow.png" onclick="changeDate(11)" style="margin-bottom:18px" height="20px" width="40px"></div>
			<div id="option0" onclick="changeDate(0)"> 
				<img id="img0" src="\images\timeline\icecapdrop.png"> 
				1850-1903
			</div>
			
			<div id="option1" onclick="changeDate(1)" style="margin-top:31px;"> 
				<img id="img1" src="\images\timeline\icecapdrop.png"> 
				1903-1923
			</div>
			
			<div id="option2" onclick="changeDate(2)" style="margin-top:31px;"> 
				<img id="img2" src="\images\timeline\icecapdrop.png"> 
				1923-1933
			</div>
			
			
			<div id="option3" onclick="changeDate(3)" style="margin-top:31px;"> 
				<img id="img3" src="\images\timeline\icecapdrop.png"> 
				1933-1943
			</div>
			
			<div id="option4" onclick="changeDate(4)" style="margin-top:31px;"> 
				<img id="img4" src="\images\timeline\icecapdrop.png"> 
				1943-1953
			</div>
			
			<div id="option5" onclick="changeDate(5)" style="margin-top:31px;"> 
				<img id="img5" src="\images\timeline\icecapdrop.png"> 
				1953-1963
			</div>
			
			<div id="option6" onclick="changeDate(6)" style="margin-top:31px;"> 
				<img id="img6" src="\images\timeline\icecapdrop.png"> 
				1963-1973
			</div>
			
			<div id="option7" onclick="changeDate(7)" style="margin-top:31px;"> 
				<img id="img7" src="\images\timeline\icecapdrop.png"> 
				1973-1983
			</div>
			
			<div id="option8" onclick="changeDate(8)" style="margin-top:30px;"> 
				<img id="img8" src="\images\timeline\icecapdrop.png"> 
				1983-1993
			</div>
			
			<div id="option9" onclick="changeDate(9)" style="margin-top:31px;"> 
				<img id="img9" src="\images\timeline\icecapdrop.png"> 
				1993-2003
			</div>
			
			<div id="option10" onclick="changeDate(10)" style="margin-top:31px;"> 
				<img id="img10" src="\images\timeline\icecapdrop.png"> 
				2003-2013
			</div>
			<div id="arrow"><img src="\images\timeline\downarrow.png" onclick="changeDate(-1)" style="margin-top:19px" height="20px" width="40px"></div>
		</div>
		<div id ="content">
			<div id="pic"></div>
			<iframe id="text" src=""></iframe>
		</div>
	</div>
	<div id="footer"><?php include 'includes/footer.php'; ?></div>
</body>
</html>