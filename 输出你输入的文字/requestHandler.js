/**
 * 请求处理模块
 * 定义服务器对于某请求应该进行的操作，该操作会在路由模块被调用
*/

//初始欢迎
function welcome(obj) {
    obj.response.writeHead(200, {
        "content-type": "text/html; charset=utf-8"
    });
    obj.response.write("<h1 style='background: #ff0;'>欢迎来到本页面</h1>");
    obj.response.end();
}

//错误请求界面
function error(obj) {
    obj.response.writeHead(404, {
        "content-type": "text/html; charset=utf-8"
    });
    obj.response.write("<h1 style='background: #f00;'>404</h1>");
    obj.response.write("<h3 style='background: #f00;'>你请求的页面有误</h3>");
    obj.response.end();
}

//输入文字重新输出页面
function displayText(obj) {
    obj.response.writeHead(200, {
        "content-type": "text/html; charset=utf-8"
    });
    obj.response.write("<pre style='background: #ccc;'>" + obj.post_data + "</pre>");
    obj.response.end();
}


exports.welcome = welcome;
exports.error = error;
exports.displayText = displayText;