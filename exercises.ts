//types

let myString: string;
let myNum: number;
let myBool: boolean;
let num: any;
let mySlice: string;

myString = "Hey, hey string!";
mySlice = "Hello".slice (0, 3);
myNum = 25;
myBool = true;
num = "hello friend";

console.log(mySlice);


//array types

let strArr: string[];
let numArr: number[];
let boolArr: boolean[];

strArr = ["hello", "la monde"];
numArr = [1,2,3];
boolArr = [true, false, true];

console.log(boolArr);

//array with angle brackets

let stringArray: Array<string>;
let numberArray: Array<number>;
let booleanArray: Array<boolean>;

stringArray = ["this", "is so fun!"];

console.log (stringArray);

//tuple

let strNumTuple: [string, number];

// strNumTuple = ["hi friends", 25];
strNumTuple = ["hi friends", 26, 27, 28];

console.log (strNumTuple);

// let myVoid: void = null;
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myUndefined);



