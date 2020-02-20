import bcrypt from 'bcrypt'
import {query} from '../config/config'
import User from '../models/user.model'

    const signUp = async (req, res) => {
        const {email,username, firstName, lastName, password} = req.body
        const { rows } = await query('SELECT * FROM users WHERE email = $1', [email])
    
       
        if (rows[0] == undefined){
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
        return res.status(400).send({ status: 400,  error: 'The user exists'})
    };

export { signUp }
