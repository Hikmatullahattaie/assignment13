// var student = {
//     id:20,
//     name:"foo",
//     set setName (x){
//         this.name=x;
//     },
//     get getName(){
//         return this.name;
//     }


// };
// console.log(getName());
var calculator={
    add :(a,b)=>(a+b),
    subtract:(a,b)=>(a-b),
    multipaly :(a,b)=>(a*b),
    divide :(a,b)=>(a/b),

}
var all= calculator.add(5,calculator.subtract(3,calculator.multipaly(2,calculator.divide(4,2))));
console.log(all);




