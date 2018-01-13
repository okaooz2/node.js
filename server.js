var http = require("http");
var url = require("url");

var route = null;
function start(route_in) {
    route = route_in;
    http.createServer(onRequest).listen(666);
}
exports.start = start;
exports.name = "god";

var counter = 0;
function onRequest(request, response) {
  var path_name = url.parse(request.url).pathname;
  path_name = decodeURIComponent(path_name);
  console.log(path_name);

  route(path_name);

  console.log("响应程序开始啦");
  response.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
  response.write("Hello World, 大神无敌<h1 style='background: #ff0;'>无敌大神</h1>");
  response.write("<h3>你的路径是：" + path_name + "</h3>");
  response.write("<h4>编号：<span style='padding-left: 0.3em; padding-right: 0.3em; background: #000; color: #fff; font-weight: bold;'>" + (counter++) + "</span></h4>");
  response.end();
}

console.log("服务器代码执行到末尾");