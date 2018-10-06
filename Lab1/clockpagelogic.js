

var currentTime = setInterval(myTime, 500);

function myTime() {
	var d = new Date();
	document.getElementById("time").innerHTML = d;
}

