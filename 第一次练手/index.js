/**
 * 全局统筹模块
*/


var server = require("./server");
var requestHandler = require("./requestHandler");

var handle = [];
handle["/"] = requestHandler.action0;
handle["/path1"] = requestHandler.action1;
handle["/path2"] = requestHandler.action2;
handle["/path3"] = requestHandler.action3;

server.startServer(handle);