exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE cut, color, style RESTART IDENTITY CASCADE")

  .then(function(){
    return knex('cut').del();
  })
  .then(function(){
    return knex('color').del();
  })
  .then(function(){
    return knex('style').del();
  });

};
