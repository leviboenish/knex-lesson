const database = require('./database-connection.js');

module.exports ={
  getAll(){
    return database('knex_table');
  }
}
