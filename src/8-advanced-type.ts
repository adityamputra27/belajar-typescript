/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

function CreateUser(data: User) {}
// partial -> membuat properti mnjdi opsional
// function CreateUser(data: Partial<User>) {}
// required -> membuat properti untuk wajib disertakan
// function CreateUser(data: Required<User>) {}
// readonly -> mmbuat data/propertinya tdk bisa dirubah
// function CreateUser(data: Readonly<User>) {}
// Pick -> membuat data hanya beberpa sja/sesuai pilihan
// function CreateUser(data: Pick<User, 'id' | 'name'>) {} // hanya mmbuat data id dan name
// Omit -> membuat data tetapi dimasukkan param pengecualian data yg akan dibuat
// function CreateUser(data: Omit<User, 'id' | 'name'>) {}

CreateUser({
    id: 1,
    name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
/*

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

type Response = Record<string, string | number>;
const message: Response = {
    id: '1',
    name: 'doe',
    address: 'Cianjur',
    age: 10,
};

type Users = Record<string, User>;
const allUsers: Users = {
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

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

//  extract
// digunakan ktika bekrja dengan dua type dan mengambil data / properti yg sama

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

// type ExtType = Extract<'id' | 'name', 'id' | 'title'>;
// keyof -> merubah interface atau type menjdi union type
type ExtType = Extract<keyof User, keyof Post>;
type MyNewType = Record<string, ExtType>;

// exclude
// digunakan untuk mengambil data / properti yg berbeda
type ExcType = Exclude<keyof User, keyof Post>;
type MyNewType1 = Record<string, ExtType>;
