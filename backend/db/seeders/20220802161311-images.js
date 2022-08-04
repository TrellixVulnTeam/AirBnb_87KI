'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Images', [

      {
        url: 'www.allstar1.com',
        previewImage: true,
        spotId: 1,
        reviewId: null,
        userId: 1
       },

       {
        url: 'www.allstar2.com',
        previewImage: true,
        spotId: null,
        reviewId: 2,
        userId: 2
       },

       {
        url: 'www.allstar3.com',
        previewImage: true,
        spotId: 3,
        reviewId: null,
        userId: 3
       }

    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});
  }
};
