//   q1
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
// q2
checkNumber(12)
function checkNumber(a) {
    if (a % 2 == 0) {
        console.log("the number is even");
    }
    else if (a == 0) {
        console.log("the number is zero");

    } else {
        console.log("the number is odd ");


    }

}
// q3
console.log(checkVawels("aloi"));

function checkVawels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}
// Q4

console.log(factorial(12));


function factorial(n) {
    if (n < 0) {
        return undefined;
    }
    var resulte = 1;
    let i = n;

    while (i > 1) {
        resulte *= i;
        i--;

    }
    return resulte;


}
// q5
console.log(isPlandrome('dad'));

function isPlandrome(sub) {
    const cleanedSub = sub.replace(/[^a-zA-Z0-9]/,'').toLowerCase();
    const reversedub = cleanedSub.split('').reverse().join('');
    return cleanedSub === reversedub;

    
}
// q6
console.log(findMax([12,12,32,43,23]));

function findMax(arr) {
    if(arr.lenght ===0)
        return null;
    let max =arr[0];
    for (let num of arr) {
        if (num>max){
            max=num;
        }
      
        
    }
    return max;
}
// q7
console.log(reverseString("ali"));

function reverseString(pramt) {
    return pramt.split('').reverse().join('');
    
}

