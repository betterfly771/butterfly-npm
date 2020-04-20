var sum = function (a, b) {
    return a + b;
};
var Butterfly = (function () {
    function Butterfly() {
        this.name = "yueqi";
    }
    Butterfly.prototype.test = function () {
        return sum(1, 2);
    };
    return Butterfly;
}());
console.log(111);

export default Butterfly;
//# sourceMappingURL=index.js.map
