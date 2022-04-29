const { BlogPosts } = require('../models');
const statusCode = require('../helper/statusCode');

module.exports = async (id, uId) => {
  const checkPost = await BlogPosts.findByPk(id);

  if (!checkPost) {
    return { status: statusCode.NOT_FOUND, message: 'Post does not exist' };
  }

  if (checkPost.userId !== uId) { 
    return { status: statusCode.UNAUTHORIZED, message: 'Unauthorized user' }; 
  }

  const deletePost = await BlogPosts.destroy({ where: { id } });
  if (!deletePost) {
    return { 
      status: statusCode.INTERNAL_SERVER_ERROR, 
      message: 'Post has not been deleted', 
    };
  }
 
  return { status: statusCode.NO_CONTENT };
};