require('dotenv').config();
const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;

// import router url link
const v1Router = require('./router/v1');

// use router
app.use(express.json());
app.use('/api/v1', v1Router);

// error handler 404 Not Found!
app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        message: 'Not Found!',
        data: null
    });
});

// error handler 500 Internal Server Error!
app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: 'Internal Server Error!',
        data: err.message
    });
});

// running port (listen)
app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));