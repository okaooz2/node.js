function Obj() {
    this.name = "god";
    this.age = 666;
}
Obj.prototype = {
    introduce: function() {
        console.log("I'm " + this.name + "and is " + this.age + "years old.");
    }
};

var someone = new Obj();
exports = someone;
