/**
 * 服务器模块
*/


var http = require("http");



function startServer(handle) {
    console.log("服务器开始工作");
    
    http.createServer(serverHandler).listen(666);
    function serverHandler(request, response) {
        var path_name = decodeURIComponent(request.url);

        response.writeHead(200, {"content-type": "text/html;charset=utf-8;"});
        response.write("<h1>请求成功</h1>");
        response.write("<h3>你的url是：" + path_name + "</h3>");
        

        if(typeof handle[path_name] === "function") {
            response.write("<p>" + handle[path_name]() + "</p>");
        }
        else {
            response.write("<p>没有执行任何请求处理函数</p>");
        }
        
        response.end();
    }
}
exports.startServer = startServer;