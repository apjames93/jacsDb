exports.up = function(knex, Promise) {
    return knex.schema.createTable('style', function(table){
          table.increments();
         table.string('img');
         table.string('description');
         });
};
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('style');
};