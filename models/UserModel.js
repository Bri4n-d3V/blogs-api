const User = (sequelize, DataTypes) => {
  const UserReturn = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) =>
  User.hasMany(models.BlogPost, { as: 'BlogPost', foreignKey: 'userId' });

  return UserReturn;
};

module.exports = User;