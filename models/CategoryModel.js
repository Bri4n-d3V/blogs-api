const Category = (sequelize, DataTypes) => {
  const CategoryReturn = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return CategoryReturn;
};

module.exports = Category;