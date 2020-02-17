class User {
    constructor(args){
        this.email = args.email;
        this.username = args.username;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.password = args.password;
        this.type = args.type || 'user';
        this.isAdmin = args.isAdmin || false;
        this.createdAt = args.createdAt || new Date();
    }
}

export default User;
