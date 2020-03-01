import  {verify, verifyStaff, verifyAdmin} from '../middlewares/verifyToken'
import { 
    createAccount
}  from '../controllers/account.controllers'


export default function (router) {
    
    router.route('/accounts')
        .post(verify, createAccount)

    

}
