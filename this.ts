var employee = {
    id : 1,
    hello : function(){
        var obj = this;
        setTimeout(function(){
            console.log(obj.id);
        },1000)
    }
}
employee.hello();

