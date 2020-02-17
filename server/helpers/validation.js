// const Joi = require('@hapi/joi')
import Joi from '@hapi/joi'

const validateSignUpData = (req, res, next) => {
    const signUpSchema = Joi.object({
        username: Joi.string(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

    const { error, value } = signUpSchema.validate(req.body)

    if (error) {
        return res.status(400).send({
            status: '400',
            error: error.details[0].message
        })
    } else if (value) 
    try {
        req.body = value
        next()
    } catch (error) {
        return res.send('internal failure')
    }
}


module.exports = { validateSignUpData }
