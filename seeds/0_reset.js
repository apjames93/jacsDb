exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE category, work  RESTART IDENTITY CASCADE")

  .then(function(){
    return knex('category').del();
  })
  .then(function(){
    return knex('work').del();
  });


};
