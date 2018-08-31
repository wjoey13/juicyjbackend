exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', items => {
    items.increments();
    items.string('title');
    items.string('img');
    items.string('category');
    items.string('description');
    items.integer('quantity');
    items.integer('price');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};