var http = require("http");



function startServer(property) {
    console.log("服务器开始工作");
    var route = property.route;
    
    var server = http.createServer(onRequest);
    var listener = server.listen(666);


    function onRequest(request, responce) {
        var property_all = {
            request: request,
            responce: responce,
            handle: property.handle
        };

        route(property_all);
        // request.addListener("data", function(data_chunk) {

        // });
        // request.addListener("end", function() {
        //     route(property_all);
        // });
    }
}



exports.startServer = startServer;