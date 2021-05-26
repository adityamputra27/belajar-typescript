// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';

let a;
let b: boolean;
b = true;

let c: number;
c = 1;

let d: string;
d = 'hello';

let e: bigint;
e = 100n;

let f: symbol;
f = Symbol('Sym');

let g: () => void;
g = function () {
    return null;
};

let h: null;
h = null;

let i: Record<string, unknown>;
i = {};

let j: [];
j = [];

class Product {}

let k = new Product();

let z: any;

z = [];
z = 'hello';
z = 99;
z = { a: 1, b: 2 };

function sum(a: number, b: number): void {
    // return a + b;
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);

// union type
let multi: string | number;
multi = 'hello';
multi = 123;
// multi = true;

// aliases type
type CustomType = string | number;
let myType: CustomType;
myType = 'hello';
myType = 123;
