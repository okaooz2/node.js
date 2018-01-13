function start() {
    console.log("requestHandler模块的start函数被执行");
}

function upload() {
    console.log("requestHandler模块的upload函数被执行");
}


exports.start = start;
exports.upload = upload;