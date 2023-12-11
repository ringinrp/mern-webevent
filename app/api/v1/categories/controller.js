const {
    StatusCodes
} = require('http-status-codes');
const {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCatgories
} = require('../../../services/monggose/categories');

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req);
        res.status(StatusCodes.CREATED).json({
            data: result,

        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories();

        res.status(StatusCodes.OK).json({
            data: result,

        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,

        });
    } catch (err) {
        next(err)
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req);
        // runvalidators untuk menjalankan model, new untuk menampilkan yang baru

        res.status(StatusCodes.OK).json({
            data: result,
        });

    } catch (err) {
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCatgories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index,
    find,
    destroy,
    update,
    create,
}