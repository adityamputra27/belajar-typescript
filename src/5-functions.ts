/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number): number {
    return x + y;
}

console.log(add(2, 3));

// function expression
// const addEx = function (x, y) {
//     return x + y;
// };

const addEx = function (x: number, y: number): number {
    return x + y;
};

// arrow function
// const addArrow = (x, y) => x + y;
const addArrow = (x: number, y: number): number => x + y;

// function with no return value
// const hello = (name) => console.log("hello " + name)

// function with callback
// function request(url,cb){

// }

type Greeter = (message: string) => void;

function request(url: string, cb: Greeter) {
    cb(url);
}
let fn = (str: string) => console.log(str);
request('https://typescriptlang.org', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

// solusinya mnggunakan type aliases
type Contact = {
    firstName: string;
    lastName: string;
    gender?: string; //optional
    languange: string;
};

function submitContact(firstName: string, lastName: string, languange = 'English', gender?: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}

let result = submitContact('valen', 'mayer', 'female');
console.log(result);

/********** 3. Rest Parameter  ***********/
/*
function fruitsCollection(item, ...restItems) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
// console.log(fruits);
*/
function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// function CT(param) {
//   return param
// }

// solution 1 : union
function CT(param: string | number): string | number {
    return param;
}
// solution 2 : generic
function CT_generic<T>(param: T): T {
    return param;
}
CT_generic<string>('Hello TYPESCRIPT!');
CT_generic<number>(081234124123);
// solution 3 : overloading
function CT_overload(param: string): string;
function CT_overload(param: number): number;
function CT_overload(param: any): any {
    return param;
}
