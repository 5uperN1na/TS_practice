// function getSum(num1: number, num2: number): number{
//     return num1 + num2;
// }

// console.log(getSum(2, 3));

let mySum = function (num1: any, num2: any): number {
    if (typeof num1 == 'string'){
        num1 = parseInt (num1);
    }
    return num1 + num2;
}

console.log(mySum(5, 5));

let myName = function (first: string, last: string): string {

    return first + ' ' + last;
}

console.log(myName('jane', 'smith'));

//make last name optional

let myName1 = function (first: string, last?: string): string {
    if (last == undefined){
        return first;

    }

    return first + ' ' + last;
}

console.log(myName1('joe'));