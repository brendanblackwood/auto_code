// put your code that you want to write in this file. 
// Ideally you will want to rename the file to have the appropriate 
// file extention for syntax highlighting if you aren't using javascript.
// here is some sample code:

var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
