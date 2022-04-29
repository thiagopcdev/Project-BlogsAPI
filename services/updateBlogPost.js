const { BlogPosts, Category } = require('../models');

module.exports = async (title, content, id, uId) => {
  const { userId } = await BlogPosts.findByPk(id);
  if (userId !== uId) { return { status: 401, message: 'Unauthorized user' }; }

  const [updatePost] = await BlogPosts.update(
    { title, content },
    { where: { id } },
  );

  if (!updatePost) {
    return { status: 400, message: 'Post not Found' };
  }

  const result = await BlogPosts.findOne({
    where: { id },
    attributes: ['title', 'content', 'userId'],
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    
  });
 
  return result;
};