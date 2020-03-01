import Joi from '@hapi/joi'

const validateSignUpData = (req, res, next) => {
    const signUpSchema = Joi.object({
        username: Joi.string().alphanum().max(30).min(3),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })

    const { error } = signUpSchema.validate(req.body)

    if (error) {
        return res.status(400).send({
            status: '400',
            error: error.details[0].message
        })
    } 
    next()
}



const validateSignInData = (req, res, next) => {
    const signInSchema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })

    const { error } = signInSchema.validate(req.body)

    if (error) {
        return res.status(400).send({
            status: '400',
            error: error.details[0].message
        })
    } 
    next()
}
export { validateSignUpData, validateSignInData }
