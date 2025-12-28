'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber : 'Airbus A320ceo',
        capacity : 180,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Boeing 737',
        capacity : 189,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Boeing 777',
        capacity : 368,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Boeing 787',
        capacity : 320,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : 'Airbus A320neo',
        capacity : 194,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
