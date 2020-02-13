
import express from 'express';


import config from './config/config.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.send({
        status: 'ok',
        message: 'You reached home on Papel',
    });
    console.log('Successful');
});

app.listen(config.port, () => console.log(`server is live and ready on: ${config.port}`));
