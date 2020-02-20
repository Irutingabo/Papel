import bcrypt from 'bcrypt'
import { query } from '../config/config'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

const signUp = async (req, res) => {
    const { email, username, firstName, lastName, password } = req.body
    const { rows } = await query('SELECT * FROM users WHERE email = $1', [email])


    if (rows[0] == undefined) {
        const hashed = await bcrypt.hash(password, 10)

        const nUser = new User({
            username,
            firstName,
            lastName,
            email,
            password: hashed,
        })

        // Save and display user
        await query('INSERT INTO users (email, username, firstName, lastName, password, type, isAdmin, createdAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', Object.values(nUser))
        return res.status(201).send({
            status: 201,
            message: 'User created successfully',
            data: nUser
        });

    } else if (rows)
        return res.status(400).send({ status: 400, error: 'The user exists' })
};


const signIn = async (req, res) => {
    const { email, password } = req.body
    const { rows } = await query('SELECT * FROM users WHERE email = $1', [email])

    if (rows[0] && rows[0] !== undefined) {

        const matched = await bcrypt.compare(password, rows[0].password)

        if (matched) {

            // Create TOKEN
            const token = jwt.sign({
                email: rows[0].email,
                id: rows[0].userId,
                username: rows[0],
                type: rows[0].type
            }, process.env.TOKEN_SECRET)

            // return json response
            return res.status(200).send({
                status: 200,
                message: 'User signed in successfully',
                data: {
                    token: token,
                    user: rows[0]
                }
            })
        } else {
            return res.status(400).send({
                status: 400,
                error: 'Incorrect password'
            })
        }
    }
    return res.status(404).send({
        status: 404,
        error: 'User does not exist!'
    })
};

export { signUp, signIn }
