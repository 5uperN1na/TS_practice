// function getSum(num1: number, num2: number): number{
//     return num1 + num2;
// }
// console.log(getSum(2, 3));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(mySum(5, 5));
var myName = function (first, last) {
    return first + ' ' + last;
};
console.log(myName('jane', 'smith'));
//make last name optional
var myName1 = function (first, last) {
    if (last == undefined) {
        return first;
    }
    return first + ' ' + last;
};
console.log(myName1('joe'));
