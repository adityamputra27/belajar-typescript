"use strict";
class Root {
}
let User = (() => {
    class User {
        constructor(id, firstName, lastName) {
            this.rertyLogin = 0;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.token = '';
            this.save = false;
            this.done = false;
        }
        login(username, password) {
            this.rertyLogin += 1;
            if (username == 'admin' && password == 'admin') {
                return true;
            }
            if (this.rertyLogin >= User.MAX_FAILED_LOGIN) {
                return 'max login attemped';
            }
            return false;
        }
        register() { }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, 'Adit', 'Putra');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
class EnhancementUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myUser1 = new EnhancementUser('Medan', 2, 'Ucok', 'Cool');
