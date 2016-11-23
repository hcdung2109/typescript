var demoSpread = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i - 0] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var colors = ['xanh', 'do', 'vang'];
demoSpread.apply(void 0, colors);
//# sourceMappingURL=spread.js.map