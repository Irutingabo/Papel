/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
class User {
    constructor(args) {
        this.username = args.username;
        this.email = args.email;
        this.first = args.first;
        this.last = args.last;
        this.accNum = args.accNum;
        this.accType = args.accType;
    }

    isEmailValid() {
        return this.email && this.email.length > 3 && this.email.indexOf('@') > -1;
    }

    isfirstValid() {
        return this.first && isNaN(this.first);
    }

    islastValid() {
        return this.last && isNaN(this.last);
    }

    isUsernameValid() {
        return this.username && isNaN(this.username);
    }

    isAccNumValid() {
        return this.accNum && !isNaN(this.accNum);
    }

    isAccTypeValid() {
        return this.accType && isNaN(this.accType);
    }
}

module.exports = User;
