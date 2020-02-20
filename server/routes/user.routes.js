import { validateSignUpData } from '../helpers/validation'
import { signUp } from '../controllers/user.controllers'

export default function (router) {
    router.route('/signup')
        .post(validateSignUpData, signUp)
    
}
