const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

//router
const cateoriesRouter = require('./app/api/v1/categories/router');
const imagesRouter = require('./app/api/v1/images/router');

const v1 = '/api/v1/cms';
const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to api webevent'
    });
});
app.post('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to api webevent'
    });
});

app.use(v1, cateoriesRouter);
app.use(v1, imagesRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;