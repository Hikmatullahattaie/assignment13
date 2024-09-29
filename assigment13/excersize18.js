
// var book = {titale :"Math",auther:"ali",year:2000}
// console.log(book.titale,book.auther,book.year);
// var resulte =Object.values(book);
// console.log(resulte);

// var car ={color:"red",model:"markX",year :2024,
//     dispaly:function() {
//         return this.color+" "+this.model+" "  +this.year

//     }

// }
// console.log(car.dispaly());
// const obja={
//     name : "ali",
//     gride : 'b',
//     id : 12,
// };
// const objb={
//     name : "balal",
//     gride : 'c',
//     id : 11,
// };
// const resulte=Object.assign({},obja,objb);
// console.log(resulte);
// function rectangle(width, hight) {
//     this.width = width;
//     this.hight = hight;
//     this.area = function () {
//         return this.width * this.hight;
//     };
// }
// const my = new rectangle(5, 10);
// console.log(my.area());


//  const student ={
//     name:"ali",
//     id :12,
//     gride:'a'

//  }
// //  var a =Object.keys(student)
// //  console.log(a);
// for (const key in student){
//     console.log(`${key}: ${student[key]}`);
    
// }
 
const student1={
    grades :[80,45,33,44,43,],
    name:"ali",
    id :662,
    averageGrade : function () {
        const total = this.grades.reduce((acc,grade)=>acc+grade,0);
        return total/this.grades.length;
        
    }
};
console.log(student1.averageGrade());





