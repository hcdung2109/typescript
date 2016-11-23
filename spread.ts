var demoSpread = function(...colors){
    for(let i in colors)
    {
        console.log(colors[i]);
    }
}

let colors:string[] = ['xanh','do','vang'];
demoSpread(...colors);