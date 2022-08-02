'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      url: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },

      previewImage: {
        type: Sequelize.STRING,
        allowNull: false
      },

      spotid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true

      },
      reviewid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true

      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')


      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};
