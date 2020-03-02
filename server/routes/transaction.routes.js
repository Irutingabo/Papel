import { verify, verifyStaff } from '../middlewares/verifyToken'
import { creditAccount } from '../controllers/transaction.controllers'

export default function (router) {

        router.route('/transactions/:accNumber/credit')
        .post(verifyStaff, creditAccount)
        
        

}
