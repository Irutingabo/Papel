class Account {
    constructor(args) {
        this.username = args.username;
        this.email = args.email;
        this.accountnumber = args.accountnumber;
        this.accountType = args.accountType;
        this.status = args.status || 'Draft';
        this.openingBalance = args.balance || 0;
        this.balance = args.balance || 0;
        this.createdOn = args.createdOn || new Date();
        
    }
}

export default Account;
