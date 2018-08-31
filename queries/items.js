const database = require('../database-connection');

module.exports = {
  list() {
    return database('items').select();
  },
  read(id) {
    return database('items').select().where('id', id).first();
  },
  create(id) {
    return database('items')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('items')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('items').delete().where('id', id);
  }
};