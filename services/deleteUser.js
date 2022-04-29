const { User } = require('../models');
const statusCode = require('../helper/statusCode');

module.exports = async (id) => {
  const deletePost = await User.destroy({ where: { id } });
  if (!deletePost) {
    return { 
      status: statusCode.INTERNAL_SERVER_ERROR, 
      message: 'Post has not been deleted', 
    };
  }
 
  return { status: statusCode.NO_CONTENT };
};