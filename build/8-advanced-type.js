"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(data) { }
CreateUser({
    id: 1,
    name: 'doe',
    age: 20,
    createdAt: new Date(),
});
const message = {
    id: '1',
    name: 'doe',
    address: 'Cianjur',
    age: 10,
};
const allUsers = {
    '1': {
        id: 1,
        name: 'doe',
        createdAt: new Date(),
        age: 20,
    },
    '2': {
        id: 1,
        name: 'mimin',
        createdAt: new Date(),
        age: 19,
    },
};
