exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([{
        id: 1,
        title: `Snickers Bar`,
        img: `password`,
        category: `Candy`,
        description: `You aren't yourself when you're hungry. Grab a Snickers`,
        quantity: 10,
        price: 3
      }]);
    });
};