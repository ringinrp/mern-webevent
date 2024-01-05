const express = require('express')
const router = express();
const {
    create,
} = require('./controller')


router.post('/categories', create);

module.exports = router;