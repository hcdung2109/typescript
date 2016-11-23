function demoHoisting2(name) {
    var hienthi;
    if (name === "hcdung") {
        hienthi = "hoang cong dung";
    }
    else {
        hienthi = "tran thi thu thuy";
    }
    console.log(hienthi);
}
demoHoisting2('hcdung');
console.log('Vi du 2 :  var');
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
console.log('vi du 2 : var');
for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
console.log('Vi du 3:  let');
for (var i_1 = 0; i_1 <= 5; i_1++) {
    console.log(i_1);
}
//# sourceMappingURL=let.js.map