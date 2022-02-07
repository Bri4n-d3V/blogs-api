'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = await queryInterface.createTable("BlogPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        type: Sequelize.STRING,
      },
      updated: {
        type: Sequelize.STRING,
      },
    })

    return BlogPosts;
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("BlogPosts");
  }
};
