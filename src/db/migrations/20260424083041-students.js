'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'users', key: 'user_id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date_of_birth: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  },
};
