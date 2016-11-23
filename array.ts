console.log('boc tach mot mang');
var employees = ['A','B','C'];

let [emp1,emp2,emp3] = employees;

console.log(emp1);
console.log(emp2);

console.log('Vi du 2 : vong lap for of');

// for of => giong nhu foreach trong php
for(let item of employees)
{
    console.log(item);
}

let name = "123";
for(let item of name)
{
    console.log(item);
}
