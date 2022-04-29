const statusCode = require('../helper/statusCode');
const { Category } = require('../models');

const error = {
  err: {
    message: 'Category already registered',
  },
  status: statusCode.CONFLICT,
};

module.exports = async (name) => {
  const categoryExists = await Category.findOne({ where: { name } });

  if (categoryExists) {
    return error; 
  }
 
  const createResult = await Category.create({ name });
  return { status: statusCode.CREATED, createResult };
};