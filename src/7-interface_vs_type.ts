/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

// user -> name,age

interface User {
    name: string;
    age: number;
}

type TUser = {
    name: string;
    age: number;
};

/**
 * Merge
 */

interface Song {
    songName: string;
}

interface Song {
    artistName: string;
}

// type Song = {
//     songName: string;
// };

// type Song = {
//     artistName: string;
// };

const mySong: Song = {
    artistName: 'Metaillica',
    songName: 'Enter Sandman',
};

/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

// intersection
type IntersectionAB = typeA & typeB;
// union
type UnionAB = typeA | typeB;
// try
let myData: IntersectionAB = {
    id: 1,
    propA: 'propA',
    propB: 'propB',
};

let myData1: UnionAB = {
    id: 1,
    propA: 'propA',
    // propB: 'propB',
};

/**
 * Implements
 */

interface Address {
    street: string;
}

interface Person extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}

class People implements Person {
    name: string;
    age: number;
    street: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.street = '';
    }
    getName(id: number) {
        return 'yess';
    }
}

/**
 * Extend
 */
