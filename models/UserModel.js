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

  return UserReturn;
};

module.exports = User;