var person = (function () {
    function person(name) {
        console.log(name);
    }
    person.prototype.run = function () {
        console.log('hello');
    };
    return person;
}());
var p = new person('hoangcongdung'); // khai bao 1 object
p.run();
//# sourceMappingURL=class.js.map