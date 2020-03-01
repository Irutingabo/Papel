import user from './user.routes'
import account from './account.routes' 


export default function(router) {
    user(router)
    account(router)
    return router
}
