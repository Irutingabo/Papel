require('dotenv').config();
import express from 'express'
import createTable from './db'

let PORT = process.env.PORT || 4000
import routes from './routes/index.routes'

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes(router));


// eslint-disable-next-line no-console
app.listen(PORT, () => {
    console.log(`server is live and ready: ${PORT}`)
    createTable()
});

module.exports = app;
