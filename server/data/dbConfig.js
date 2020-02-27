const knex = require('knex');
const config = require('./../knexfile.js');

const env = process.env.DB_ENV || 'letsdothis';

module.exports = knex(config.development);
