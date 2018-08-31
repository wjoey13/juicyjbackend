module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/webdevvids',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/webdevvids',
  },

};