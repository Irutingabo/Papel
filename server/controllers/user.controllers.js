import bcrypt from 'bcrypt'
import { query } from '../config/config'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

const signUp = async (req, res) => {
    const { email, username, firstname, lastname, password } = req.body
    const { rows } = await query('SELECT * FROM users WHERE email = $1', [email])


    if (rows[0] == undefined) {
        const hashed = await bcrypt.hash(password, 10)

        const nUser = new User({
            username,
            firstname,
            lastname,
            email,
            password: hashed,
        })

        // Save and display user
        await query('INSERT INTO users (email, username, firstname, lastname, password, type, isAdmin, createdAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', Object.values(nUser))
        return res.status(201).send({
            status: 201,
            message: 'User created successfully',
            data: {
                username,
                firstname,
                lastname,
                email
              }
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
            const {
              email,
              userid,
              username,
              firstname,
              lastname,
              type,
              isAdmin
            } = rows[0];

            // Create TOKEN
            const token = jwt.sign(
                {
                  email,
                  userid,
                  username,
                  firstname,
                  lastname,
                  type,
                  isAdmin
                },
                process.env.TOKEN_SECRET
              );

            // return json response
            return res.status(200).send({
                status: 200,
                message: 'User signed in successfully',
                data: {
                    token: token,
                    firstname,
                    lastname,
                    email
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


const getAllUsers = async (req, res) => {
    const { rows } = await query("SELECT * FROM users");
  
    if (rows !== "") {
      return res.status(200).send({
        status: "200",
        data: rows
      });
    }
    return res.status(404).send({
      status: 404,
      error: "No User found"
    });
  };

export { signUp, signIn, getAllUsers }
