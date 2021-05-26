/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// Object literal vs object instance

abstract class Root {
    abstract done: boolean;
}

class User {
    // properties
    id: number;
    firstName: string;
    lastName: string;
    private token: string;
    protected save: boolean;
    static MAX_FAILED_LOGIN = 2;
    private rertyLogin = 0;
    done: boolean;

    // constructor
    constructor(id: number, firstName: string, lastName: string) {
        // super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = '';
        this.save = false;
        this.done = false;
    }

    // method
    login(username: string, password: string) {
        this.rertyLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }
        if (this.rertyLogin >= User.MAX_FAILED_LOGIN) {
            return 'max login attemped';
        }
        return false;
    }

    register() {}
}

User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, 'Adit', 'Putra');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));

class EnhancementUser extends User {
    location: string;
    constructor(location: string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}

let myUser1 = new EnhancementUser('Medan', 2, 'Ucok', 'Cool');
