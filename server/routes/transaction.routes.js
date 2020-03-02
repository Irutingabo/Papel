import { verify, verifyStaff } from '../middlewares/verifyToken'
import { creditAccount, debitAccount, getAllTransactions, getOneTransaction } from '../controllers/transaction.controllers'

export default function (router) {

        router.route('/transactions')
        .get(verify, getAllTransactions)
        
        
        router.route('/transactions/:traNumber')
        .get(verify, getOneTransaction)
        
         
        router.route('/transactions/:accNumber/credit')
        .post(verifyStaff, creditAccount)
        
        
        router.route('/transactions/:accNumber/debit')
                .post(verifyStaff, debitAccount)
                
                
}
