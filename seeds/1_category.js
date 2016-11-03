exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('category').insert({
          category_name: 'cut'
        }),
        knex('category').insert({
          category_name: 'color'
        }),
        knex('category').insert({
          category_name: 'style'
        })

      ]);
    });
};
