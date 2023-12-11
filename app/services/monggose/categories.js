const Categories = require('../../api/v1/categories/model');
const {
    BadRequestError,
    NotFoundError
} = require('../../errors');

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
};

const createCategories = async (req) => {
    const {
        name
    } = req.body;

    const check = await Categories.findOne({
        name
    });

    if (check) throw new BadRequestError('kategori nama duplikat');

    const result = await Categories.create({
        name
    });

    return result;
};

const getOneCategories = async (req) => {
    const {
        id
    } = req.params;

    const result = await Categories.findOne({
        _id: id
    });

    if (!result) throw new NotFoundError(`Tidak ada kategori dengan ID ${id}:`);

    return result;
};

const updateCategories = async (req) => {
    const {
        id
    } = req.params;
    const {
        name
    } = req.body;

    const check = await Categories.findOne({
        name,
        _id: {
            $ne: id
        },
    });
    if (check) throw new BadRequestError('kategori nama duplikat');

    const result = await Categories.findOneAndUpdate({
        _id: id
    }, {
        name
    }, {
        new: true,
        runValidators: true
    });

    if (!result) throw new NotFoundError(`Tidak ada kategori dengan ID : ${id}`);

    return result;
};

const deleteCatgories = async (req) => {
    const {
        id
    } = req.params;

    const result = await Categories.findOne({
        _id: id
    });

    if (!result) throw new NotFoundError(`Tidak ada kategori dengan ID : ${id}`);


    await result.deleteOne();

    return result;
};


module.exports = {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCatgories
};