'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = await queryInterface.createTable("PostsCategories", {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    })

    return PostsCategories;
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("Categories");
  }
};
