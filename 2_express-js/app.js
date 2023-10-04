const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./routes/index');
const morgan = require('morgan');

// application level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json()); // built-in middleware
app.use(express.urlencoded()); // bult-in middleware
app.use(morgan('dev')); // third party middleware

// import
app.get('/', (req, res) => {
    console.log(data);
    res.send('Hello World');
});

// import mainRouter
app.get('/', (req, res) => {
    console.log(data);
    res.send('Hello world!');
});

app.use(mainRouter);

// error handling middleware -> 500 -> internal server error
app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: err.message,
    });
});

// running port 3000
app.listen(port, () => {
    console.log('app listening on port ' + port);
});