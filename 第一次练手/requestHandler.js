/**
 * 请求处理模块
 */
var exec = require("child_process").exec;

function action0() {
    return "执行了action0()函数";
}

function action1() {

    return "执行了action1()函数";
}

var content = "empty";
function action2() {
    // return "执行了action2()函数";

    exec("ls -lah", function(error, stdout, stderr) {
        content = stdout;
        // sleep(10000);
    });
    
    return content;
}

function action3() {
    sleep(10000);
    return "执行了action3()函数";
}

exports.action0 = action0;
exports.action1 = action1;
exports.action2 = action2;
exports.action3 = action3;

function sleep(millisecond) {
    var time = new Date().getTime();

    while(new Date().getTime() < time + millisecond) {
        ;
    }
}


