module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Task1', [
      {
        tasktName: 'Chandu',
        status: 'pending',
  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tasktName: 'sree',
        status: 'Done',
  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Task1', null, {});
  },
};