
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knex_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('knex_table').insert([
        {breed: 'Tabby', popularity: 5},
        {breed: 'Bengal', popularity: 10},
        {breed: 'Siamiese', popularity: 3},
        {breed: 'Norwegian Forrest Cat', popularity: 2}
      ]);
    });
};
