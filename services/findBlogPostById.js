const statusCode = require('../helper/statusCode');
const { BlogPosts, User, Category } = require('../models');

module.exports = async (id) => {
  const blogPost = await BlogPosts.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    
  });
  if (!blogPost) {
    return { status: statusCode.NOT_FOUND, result: { message: 'Post does not exist' } };
  }
  return { status: statusCode.OK, result: blogPost };
};