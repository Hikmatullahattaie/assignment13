// no parametrs arrow function
var a =()=> "salaam";
console.log(a());


// singal parametrs arrow function
var x = a =>"salaam marning"
console.log(x());


// multiple parameters arrow function
var d = (x,y)=>
    "salaam"+(x+y);
console.log(d(12,11));


// multiple statements in body arrow funvtion
var f=(t,y)=>{
    console.log("salaam1");
    console.log('salaam 2');
    return t*y
}
f()

// return object literals in arrow funtion
var e =() => ({id:12,name:"ali",age:66});
var temp=e();
console.log(temp.id);
console.log(temp.name);
console.log(temp.age);

// high order function and callbacks with arrow function 
var nums =[2,3,4,5,6,65,4]
nums.push(200)
nums.forEach(v,i,r)







