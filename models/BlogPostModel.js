const BlogPost = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  BlogPost.associate = (models) => 
  BlogPost.belongsTo(models.User, { as: 'user', foreingKey: 'userId' });

  return blogpost;
};

module.exports = BlogPost;