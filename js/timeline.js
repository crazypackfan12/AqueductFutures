var img = new Image();
var whichImgShowing = 0;

function changeDate(changeTo)
{
	switch(changeTo)
	{
		case -1:
			if(whichImgShowing < 10)
			{
				img.src = "images/timeline/test" + (whichImgShowing+2) + ".jpg";
				document.getElementById("text").contentWindow.location.replace("images/timeline/text/" + (whichImgShowing+2) + ".txt");
				document.getElementById("option"+(whichImgShowing+1)).style.color="#FF0000";
				document.getElementById("img"+(whichImgShowing+1)).style.visibility='visible';
				whichImgShowing++;
			}
			break;
		
		case 0:
			img.src = "images/timeline/test1.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/1.txt");
			document.getElementById("option0").style.color="#FF0000";
			document.getElementById("img0").style.visibility='visible';
			whichImgShowing = 0;
			break;
		
		case 1:
			img.src = "images/timeline/test2.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/2.txt");
			document.getElementById("option1").style.color="#FF0000";
			document.getElementById("img1").style.visibility='visible';
			whichImgShowing = 1;
			break;
		
		case 2:
			img.src = "images/timeline/test3.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/3.txt");
			document.getElementById("option2").style.color="#FF0000";
			document.getElementById("img2").style.visibility='visible';
			whichImgShowing = 2;
			break;
			
		case 3:
			img.src = "images/timeline/test4.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/4.txt")
			document.getElementById("option3").style.color="#FF0000";
			document.getElementById("img3").style.visibility='visible';
			whichImgShowing = 3;
			break;
		
		case 4:
			img.src = "images/timeline/test5.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/5.txt")
			document.getElementById("option4").style.color="#FF0000";
			document.getElementById("img4").style.visibility='visible';
			whichImgShowing = 4;
			break;
		
		case 5:
			img.src = "images/timeline/test6.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/6.txt")
			document.getElementById("option5").style.color="#FF0000";
			document.getElementById("img5").style.visibility='visible';
			whichImgShowing = 5;
			break;
		
		case 6:
			img.src = "images/timeline/test7.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/7.txt")
			document.getElementById("option6").style.color="#FF0000";
			document.getElementById("img6").style.visibility='visible';
			whichImgShowing = 6;
			break;
		
		case 7:
			img.src = "images/timeline/test8.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/8.txt")
			document.getElementById("option7").style.color="#FF0000";
			document.getElementById("img7").style.visibility='visible';
			whichImgShowing = 7;
			break;
		
		case 8:
			img.src = "images/timeline/test9.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/9.txt")
			document.getElementById("option8").style.color="#FF0000";
			document.getElementById("img8").style.visibility='visible';
			whichImgShowing = 8;
			break;
		
		case 9:
			img.src = "images/timeline/test10.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/10.txt")
			document.getElementById("option9").style.color="#FF0000";
			document.getElementById("img9").style.visibility='visible';
			whichImgShowing = 9;
			break;
			
		case 10:
			img.src = "images/timeline/test11.jpg";
			document.getElementById("text").contentWindow.location.replace("images/timeline/text/11.txt")
			document.getElementById("option10").style.color="#FF0000";
			document.getElementById("img10").style.visibility='visible';
			whichImgShowing = 10;
			break;
			
		case 11:
			if(whichImgShowing > 0)
			{	
				img.src = "images/timeline/test" + whichImgShowing + ".jpg";
				document.getElementById("text").contentWindow.location.replace("images/timeline/text/" + whichImgShowing + ".txt");
				document.getElementById("option"+(whichImgShowing-1)).style.color="#FF0000";
				document.getElementById("img"+(whichImgShowing-1)).style.visibility='visible';
				whichImgShowing--;
			}
			break;
	}	
	document.getElementById("pic").appendChild(img);
	document.getElementById("pic").onclick = function(){
												window.open("images/timeline/test" + (whichImgShowing+1) + ".jpg", "_blank");};
	
	for(var i = 0; i < 11; i++)
	{
		if(i != whichImgShowing)
		{
			document.getElementById("option" + i).display = "none";
			document.getElementById("option" + i).style.color="#0000FD";
			document.getElementById("img" + i).style.visibility='hidden';
		}
	}
}
	