function fcntimer(message, delay) {
	var tid, s, rem = delay;
	
	this.pause = function() {
		window.clearTimeout(tid);
		rem -= new Date() - s;
	};
	
	this.resume = function() {
		s = new Date();
		tid = window.setTimeout(message, rem);
	};
	
	this.resume();
}

function testfcntimer()
{
	var t = new fcntimer(function()
			{
				alert("Done!");
			}, 1000);

	timer.pause();
	setTimeout(timer.resume(), 5000);
}

