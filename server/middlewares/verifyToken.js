const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    const header = req.headers['authorization']
    if (!header) {
        return res.status(401).send('Sign in or Create account first!')
    }
    try {
        const bearer = header.split(' ');
        const token = bearer[1];

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        if (verified.type == 'user' || verified.type == 'staff'  || verified.type == 'admin' ) {
            req.user = verified;
            next();
            }
    } catch {
        res.status(400).send('Invalid token!')
    }
}

const verifyStaff = (req, res, next) => {
    const header = req.headers['authorization']
    if (!header) {
        return res.status(401).send('Sign in or Create account first!')
    }
    try {
        const bearer = header.split(' ');
        const token = bearer[1];

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        if (verified.type == 'staff' || verified.type == 'admin') {
        req.user = verified;
        next();
        }
        else {
        res.status(400).send('Login as Staff!')
        }
    } catch {
        res.status(400).send('Invalid token!')
    }
}


const verifyAdmin = (req, res, next) => {
    const header = req.headers['authorization']
    
    if (!header) {
        return res.status(401).send('Sign in or Create account first!')
    }
    try {
        const bearer = header.split(' ');
        const token = bearer[1];

        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        if (verified.type == 'admin') {
        req.user = verified;
        next();
        }
        else {
            res.status(400).send('Login as Admin!')
            }
    } catch {
        res.status(400).send('Invalid token!')
    }
}
export { verify, verifyStaff, verifyAdmin }
