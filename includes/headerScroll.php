
<div id="header">
  	<div id="image">
    	<a href="../index_two.php"><img src="../images/header/horizontalLogo1.jpg" height="100" width="480"/></a>
    </div>
    <div id="spacer">
    	<link rel="stylesheet" type="text/css" href="../styles/li-scroller.css">
    	<script src="../js/li-scroller.js" type="text/javascript"></script>
    	
        <ul id="ticker01">
        <?php include 'includes/scroll.php'; ?>
        <?php include '../includes/scroll.php'; ?>
		<!-- eccetera -->
			</ul>

		<script type="text/javascript">
			$(function(){
				$("ul#ticker01").liScroll({travelocity: 0.075});
					});
		</script>
    </div>
    <div id="navWrap">
        <div id="nav">
  	  	  <a href="../historicFlows.php"> <img name="pastButton" src="../images/header/buttons/pastButton.png"/></a>
       	  <a href="../gallery.php"> <img name="presentButton" src="../images/header/buttons/presentButton.png"/></a>
       	  <a href="../exhibit.php"><img name="futureBotton" src="../images/header/buttons/futureButton.png"/></a>
       	  <a href="../about.php"><img name="aboutButton" src="../images/header/buttons/aboutButton.png"/></a>
          <a href="../more.php"><img name="moreButton" src="../images/header/buttons/moreButton.png"/></a>
    	</div>
    </div>
  </div>