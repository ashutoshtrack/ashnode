const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bluebird = require('bluebird');
const config = require('./config/local');
const userRoutes = require('./api/routes/users.route');
const session = require('express-session');
let app = new express();

app.use(cors());
app.use(express.json())

mongoose.Promise = bluebird;
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to DB successfully!');
    }
});

app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1200000,
        httpOnly: true,
        secure: false
    },
}))
//add routes here
app.use('/', userRoutes);
app.get('/', (req, res) => {
    return res.end('Api workings');
})

app.listen(config.port, function () {
    console.log('Listening port: ' + config.port)
});


