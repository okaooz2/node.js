var express = require("express");
var fs = require("fs");
var formidable = require("formidable");
var util = require("util");


//欢迎界面
function welcome(obj) {
    console.log("执行welcome()函数");
    var request = obj.request;
    var responce = obj.responce;

    // responce.writeHead(200, {"content-type": "text/html; charset=utf-8;"});
    // responce.write("<h1>欢迎到来</h1>");
    // responce.end();
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if(err) {
            error(obj);
        }
        else {
            responce.writeHead(200, {"content-type": "text/html; charset=utf-8;"});
            responce.write(data.toString());
            responce.end();
        }
    });
}

//错误页面
function error(obj) {
    console.log("执行error()函数");
    var request = obj.request;
    var responce = obj.responce;

    responce.writeHead(404, {"content-type": "text/html; charset=utf-8;"});
    responce.write("<h1>404</h1>");
    responce.write("<h3>你迷路了<h3>");
    responce.end();
}

//处理表单上传的文件
function formHandle(obj) {
    var request = obj.request;
    var responce = obj.responce;

    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + "/temp";
    form.keepExtensions = true;
    form.on("progress", function(bytes_reveived, bytes_expected) {
        console.log((bytes_reveived/bytes_expected*100).toFixed(2) + "%");
    });

    form.parse(request, function(err, fileds, files) {
        var img = fs.readFileSync(files["nihao"].path, "binary");
        responce.writeHead(200, {"content-type": files["nihao"].type});
        // responce.write("<img src='" + files["nihao"].path + "'></img>");
        // responce.write("<img src='E:/MyProjects/JavaScript/node.js/显示上传的图片/temp/7.jpg'></img>");
        responce.write(img, "binary");
        responce.end("<pre>" + util.inspect({fileds: fileds, files: files}) + "</pre>");

        fs.unlinkSync(files["nihao"].path);
    });
}


exports.welcome = welcome;
exports.error = error;
exports.formHandle = formHandle;