import user from './user.routes'
import account from './account.routes' 
import transaction from './transaction.routes' 


export default function(router) {
    user(router)
    account(router)
    transaction(router)
    return router
}
