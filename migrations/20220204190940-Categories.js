'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Categories = await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })

    return Categories;
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.dropTable("Categories")
  }
};
