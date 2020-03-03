import { query } from '../config/config'
import { generateAcc, formatAcc } from '../helpers/static'
import Account from '../models/account.model'

const createAccount = async (req, res) => {
    const value = req.body
    const { userid, username, email } = req.user
    const newAccount = generateAcc(userid)
    if (value) {

        const anAccount = new Account({
            username,
            email,
            accountnumber: newAccount,
            accountType: value.accountType,
        })

        // Save an account
        await query(`INSERT INTO accounts 
                    ( username, email, accountnumber, accountType, status, openingBalance, balance, createdOn) 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, Object.values(anAccount))

        // return something
        const printOu = {
            status: '200',
            message: 'An account created successfully',
            account: formatAcc(newAccount)
        }
        return res.status(200).send(printOu)
    }
    return res.status(400).send({
        status: '400',
        message: 'Try again with data'
    })
};


const getAccounts = async (req, res) => {

    const  {status}  = req.query 
    
    const {rows} = (status==undefined)? await query('SELECT * FROM accounts') : await query('SELECT * FROM accounts WHERE status = $1', [status]);
    if (rows[0]) {

        res.status(200).send({
            status: '200',
            message: 'Accounts successfully retrieved!',
            data: rows
        })
    } else {
        return res.status(404).send({
            status: 404,
            error: 'No account found'
        })
    }

};


const getOneAccount = async (req, res) => {

    const accNumberID = parseInt((req.params.accNumber).replace(/[\W_]+/g, ''))


    const { rows } = await query('SELECT * FROM accounts WHERE accountnumber = $1', [accNumberID])

    if (rows[0]) {
        return res.status(200).send({
            message: `An account retrieved successfully!`,
            status: '200',
            data: rows[0]
        })
    }
    return res.status(404).send({
        status: 404,
        error: 'No such account found'
    })

};


const toggleAccountStatus = async (req, res) => {

    const accNumberID = parseInt((req.params.accNumber).replace(/[\W_]+/g, ''))

    const { rows } = await query('SELECT * FROM accounts WHERE accountnumber = $1', [accNumberID])

    if (rows[0]) {

        const newStatus = (rows[0].status == 'Draft' || rows[0].status == 'Dormant') ? 'Active' : 'Dormant';
        
        
        
        await query(`UPDATE accounts SET status=$1 WHERE accountnumber=$2`,  [newStatus, accNumberID]) 
                  
        const printOu = [{
            Account: req.params.accNumberID,
            message: `Status updated successfully! your account is now ${newStatus}`,
        }]
        res.status(200).send({
            status: '200',
            data: printOu
        })
    } else {
        return res.status(404).send({
            status: 404,
            error: 'No such account found'
        })
    }

};


const deleteOneAccount = async (req, res) => {

    const accNumberID = parseInt((req.params.accNumber).replace(/[\W_]+/g, ''))

    const { rows } = await query('SELECT * FROM accounts WHERE accountnumber = $1', [accNumberID])

    if (rows[0]) {

        await query(`DELETE FROM accounts WHERE accountnumber=$1`, [accNumberID]) 

        const printOu = [{
            id: req.params.accNumberID,
            message: 'Account deleted successfully!',
        }]
        res.status(200).send({
            status: '200',
            data: printOu
        })
    } else {
        return res.status(404).send({
            status: 404,
            error: 'No such account found'
        })
    }

};


const getOneAccountTransactions = async (req, res) => {

    
    const accNumberID = parseInt((req.params.accNumber).replace(/[\W_]+/g, ''))

    const { rows } = await query('SELECT * FROM transactions WHERE accountnumber = $1', [accNumberID])

    if (rows[0]) {
        return res.status(200).send({
            status: '200',
            data: rows[0]
        })
    }
    return res.status(404).send({
        status: 404,
        error: 'No transactions found'
    })

};

export {
    createAccount,
    getOneAccount,
    getAccounts,
    toggleAccountStatus,
    deleteOneAccount,
    getOneAccountTransactions
}
