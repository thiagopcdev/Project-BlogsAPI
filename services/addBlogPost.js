const statusCode = require('../helper/statusCode');
const { BlogPosts, Category, PostsCategory } = require('../models');

const error = {
  err: {
    message: 'BlogPost already registered',
  },
  status: statusCode.BAD_REQUEST,
};

const error2 = {
  err: {
    message: '"categoryIds" not found',
  },
  status: statusCode.BAD_REQUEST,
};

module.exports = async (obj) => {
  const { title, categoryIds } = obj;

  const blogPostExists = await BlogPosts.findOne({ where: { title } });
  const newArray = categoryIds.map(async (cat) => Category.findByPk(cat));
  const categoryArray = await Promise.all(newArray);
  const categoryExists = categoryArray.some((field) => field === null);

  if (blogPostExists) {
    return error; 
  }

  if (categoryExists) {
    return error2; 
  }
 
  const createResult = await BlogPosts.create(
    { ...obj, published: new Date(), updated: new Date() },
  );

  categoryIds.forEach((catId) => {
    PostsCategory.create({ postId: createResult.id, categoryId: catId });
  });
  return { status: statusCode.CREATED, createResult };
};