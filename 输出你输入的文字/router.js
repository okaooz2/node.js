/**
 * 路由模块
 * 决定应该执行什么操作，并执行该操作
*/

//路由操作，根据请求的路径决定执行什么操作
function route(obj) {
    console.log("执行路由操作");

    if(typeof obj.handler[obj.path_name] === "function") {
        obj.handler[obj.path_name](obj);
    }
    else {
        obj.handler.error(obj);
    }
}

exports.route = route;