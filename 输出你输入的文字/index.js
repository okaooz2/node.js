/**
 * 整体统筹模块
*/

var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handler = [];
handler["/"] = requestHandler.welcome;
handler["/welcome"] = requestHandler.welcome;
handler["error"] = requestHandler.error;
handler["/输出文字/后续路径"] = requestHandler.displayText;


server.startService(router.route, handler);