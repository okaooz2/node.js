var http = require("http");

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {"content-type": "text/html; charset=utf-8;"});
//     res.write("<h1 style='background: #ff0;'>welcome</h1>");
//     res.write("<h3>欢迎来到召唤师峡谷</h3>");
//     res.end();
// });
// var listener = server.listen(666);

var server = http.createServer();
server.on("request", function(req, res) {
    res.writeHead(200, {"content-type": "text/html; charset=utf-8;"});
    res.write("<h1 style='background: #ff0;'>welcome</h1>");
    res.write("<h3>欢迎来到召唤师峡谷</h3>");
    res.end();
});
var listener = server.listen(666);

console.log("服务器已开始工作");