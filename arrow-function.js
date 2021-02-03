// //in old system
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(4);
// console.log(result);

// const doubleIt = function (num){
//     return 2 * num;

// }
// In Es6 arrow Function 
const doubleIt = num => num * 2;
const addNumbers = (num1,num2) => num1 + num2;
const give10 = () => 10;
const doMath = (x,y) => {
    const sum = x + y;
    const difference = x - y ;
    const result = sum * difference;
    return result;
}

const result = doubleIt(6);
const result2 = addNumbers(12,12);
const result3 = give10();
const result4 = doMath(3,2);
console.log(result4);