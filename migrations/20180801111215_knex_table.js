
exports.up = function(knex, Promise) {
  return knex.schema.createTable('knex_table', (table) =>{
    table.increments()
    table.text('breed')
    table.integer('popularity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('knex_table')
};
