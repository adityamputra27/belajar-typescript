"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y;
}
console.log(add(2, 3));
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('https://typescriptlang.org', fn);
function submitContact(firstName, lastName, languange = 'English', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('valen', 'mayer', 'female');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
CT_generic('Hello TYPESCRIPT!');
CT_generic(081234124123);
function CT_overload(param) {
    return param;
}
