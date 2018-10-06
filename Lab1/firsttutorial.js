var http = require('http');
var fileSys = require('fs');

// function getTime()
// {
// 	var date = new Date();
// 	var hour = date.getHours();
// 	var minutes = date.getMinutes();
// 	var seconds = date.getSeconds();


// 	hour = (hour < 10 ? "0" : "") + hour;
// 	minutes = (minutes < 10 ? "0" : "") + minutes;
// 	seconds = (seconds < 10 ? "0" : "") + seconds;

// 	if(hour > 12)
// 	{
// 		hour = hour - 12;
// 	}
// 	return (hour + ":" + minutes + ":" + seconds);
// }

http.createServer(function (req, res){
	fileSys.readFile('clockpage.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end('');
	});
}).listen(8080);

///home/alex/Documents/nodejs/LearningLab/Lab1/node_modules/pages
