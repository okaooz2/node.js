/**
 * 服务器模块
 * 开启服务器并监听端口
 */

var http = require("http");

//开启服务器
function startService(route, handler) {
    //创建一个服务器并监听666端口
    http.createServer(onRequest).listen(666);
    console.log("服务器启动完毕");

    //调用路由模块
    function onRequest(request, response) {
        var obj = {
            request: request,
            response: response,
            path_name: decodeURIComponent(request.url),
            handler: handler
        };
        // console.log(request.url);

        var post_data = "";
        request.addListener("data", function(post_data_chunk) {
            post_data += post_data_chunk;
        });

        request.addListener("end", function() {
            if(post_data !== "") {
                post_data = decodeURIComponent(post_data);
                obj.post_data = post_data;
                // console.log(post_data);
            }
            
            route(obj);
        });
    }
}

exports.startService = startService;