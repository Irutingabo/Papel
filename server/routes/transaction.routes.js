import { verify, verifyStaff } from '../middlewares/verifyToken'
import { creditAccount, debitAccount } from '../controllers/transaction.controllers'

export default function (router) {

        router.route('/transactions/:accNumber/credit')
        .post(verifyStaff, creditAccount)
        
        
        router.route('/transactions/:accNumber/debit')
                .post(verifyStaff, debitAccount)
                
                
}