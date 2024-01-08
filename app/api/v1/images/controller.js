const {
    StatusCodes
} = require('http-status-codes');

const {
    createImges
} = require('../../../services/monggose/images');

const create = async (req, res, next) => {
    try {
        console.log('req.file');
        console.log(req.file);
        const result = await create(req, res, next);

        res.status(StatusCodes.CREATED).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    create
};