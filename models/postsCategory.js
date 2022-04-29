const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });

  postsCategory.associate = (model) => {
    model.BlogPosts.belongsToMany(model.Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    model.Category.belongsToMany(model.BlogPosts, {
      as: 'posts',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postsCategory;
};

module.exports = PostsCategory;