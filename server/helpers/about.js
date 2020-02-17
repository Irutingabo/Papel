const argon2 = require('argon2');
const db = require('../config/config')
const User = require('../models/user.model').default

module.exports = {

    signUp: async (req, res) => {
        const userEmail = req.body.email
        const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [userEmail])
               
        if (rows[0] == undefined){
            const hashed = await argon2.hash(req.body.password)
            const nUser = new User({
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashed,
            })

            // Save and display user
            await db.query('INSERT INTO users (email, username, firstName, lastName, password, type, isAdmin, createdAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', Object.values(nUser))
            res.status(201).send({
                status: 201,
                message: 'User created successfully',
                data: nUser
            });
            return nUser
            
        } else if (rows)
        return res.status(303).send({ status: 303,  error: 'The user exists'})
    }
}
