exports.up = function(knex, Promise) {
    return knex.schema.createTable('color', function(table){
          table.increments();
         table.string('img');
         table.string('description');
         });
};
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('color');
};
