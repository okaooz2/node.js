var fs = require("fs");

//路由选择函数
function route(obj) {
    console.log("执行路由操作");
    
    var request = obj.request;
    var responce = obj.responce;
    var handle = obj.handle;
    var path = decodeURIComponent(request.url);
    
    if(typeof handle[path] === "function") {
        handle[path](obj);
    }
    else {
        handle["error"](obj);
    }
}



exports.route = route;