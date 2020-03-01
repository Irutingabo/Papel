import { validateSignUpData, validateSignInData } from '../middlewares/validation'
import { signUp , signIn } from '../controllers/user.controllers'

export default function (router) {
    router.route('/signup')
        .post(validateSignUpData, signUp)

    router.route('/signin')
        .post(validateSignInData, signIn)

}
