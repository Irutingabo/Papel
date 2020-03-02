class Transaction {
    constructor(args) {
        this.username = args.username;
        this.transactionType = args.transactionType;
        this.accountnumber = args.accountnumber;
        this.cashier = args.cashier;
        this.amount = args.amount;
        this.oldBalance = args.oldBalance;
        this.newBalance = args.newBalance;
        this.createdOn = args.createdOn || new Date();
    }
}

export default Transaction;
