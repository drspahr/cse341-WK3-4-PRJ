// APPLICATION CONTROL FILE
const express = require('express');
const mongodb = require('./modules/db');
const bodyParser = require('body-parser');

const app = express();

// PORT AND HOST
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost"

// ROUTES
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})
app.use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
})

// INITIALIZE MONGODB 
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Listening on ${host}:${port}.`);
        })
    }
});