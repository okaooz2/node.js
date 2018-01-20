var handler = require("./requestHandler");
var router = require("./router.js");
var server = require("./server.js");


var handle = [];
handle["/"] = handler.welcome;
handle.error= handler.error;
handle["/upload"] = handler.formHandle;

var property = {
    route: router.route,
    handle: handle
};


server.startServer(property);