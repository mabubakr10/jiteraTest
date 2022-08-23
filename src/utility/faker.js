import faker from 'faker';

module.exports = {
  randomName: faker.lorem.words(2),
  randomEmail: faker.internet.email(),
};
