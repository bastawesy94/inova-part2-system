const faker = require('faker');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const stories = [];

    for (let i = 0; i < 50000; i++) {
      stories.push({
        title: faker.lorem.words(20),
        userId:1,
        body: faker.lorem.paragraphs(50),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('stories', stories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stories', null, {});
  },
};
