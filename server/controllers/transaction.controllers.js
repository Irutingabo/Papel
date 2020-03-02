import { query } from "../config/config";
import Transaction from "../models/transaction.model";
import jwt from "jsonwebtoken";

const creditAccount = async (req, res) => {
  const value = req.body;
  const { amount } = value;
  const cashier = req.user.username;

  const accNumberID = parseInt(req.params.accNumber.replace(/[\W_]+/g, ""));

  const {
    rows
  } = await query("SELECT * FROM accounts WHERE accountnumber = $1", [
    accNumberID
  ]);

  if (rows[0] && amount) {
    const { username, accountnumber, balance } = rows[0];

    const aTransaction = new Transaction({
      username,
      transactionType: "Credit",
      accountnumber,
      cashier,
      amount,
      oldBalance: balance,
      newBalance: balance + amount
    });

    await query(`UPDATE accounts SET balance=$1 WHERE accountnumber=$2`, [
      aTransaction.newBalance,
      accNumberID
    ]);

    // Save an account
    await query(
      `INSERT INTO transactions 
                    ( username, transactionType, accountnumber, cashier, amount, oldBalance, newBalance, createdOn) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      Object.values(aTransaction)
    );

    const printOu = {
      status: "200",
      message: "An account credited successfully",
      data: aTransaction
    };

    return res.status(200).send(printOu);
  }
  return res.status(404).send({
    status: 404,
    error: "No such account found"
  });
};


export { creditAccount };
