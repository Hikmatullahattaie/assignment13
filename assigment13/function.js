// function creation and calling 
function hi() {
    console.log("hi");
}
hi();
// function Exprition 
const number = function sum(a, b) {
    return a + b;


}
console.log(number(12, 88));
// function constractor 
const myFunction = new Function("c", "d", "return c*d");
let x = myFunction(4, 5);
console.log(x);

// ریس مزرعه
// number of argument
function multipale(a, b) {
    console.log(arguments.length);


}
multipale(1, 34);
console.log("multipale2");



function multipale2() {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}
multipale2(12, 22, 32, 23, 1232, 32, 123, 232);
// simple function
function division(a,b) {
    console.log(a/b);
    
    
}
division(12,11)
// arrow function
var z= (i , j)=>console.log(i/j);
    z(12,14)
;
function hello(a) {
    console.log(`"Hello",${a}!`);
    
    
}
hello("ali")


var v = function (a,b) {
    return a*b;
    // console.log(a*b);   
}
 console.log(v(12,22));
  










