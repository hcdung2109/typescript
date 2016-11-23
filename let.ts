function demoHoisting2(name){
    let hienthi;
    if (name === "hcdung"){
        hienthi = "hoang cong dung"; 
    } else {
        hienthi = "tran thi thu thuy";
    }
    
    console.log(hienthi);
    
}

demoHoisting2('hcdung');

console.log('Vi du 2 :  var');

for(var i=0;i<=5;i++){
    console.log(i);
}

console.log('vi du 2 : var');
for(var i=0;i<=5;i++) // bien var - 
{
    setTimeout(function(){
        console.log(i);
    },1000)
}

console.log('Vi du 3:  let');

for(let i=0 ;i<=5;i++){
    console.log(i);
}


