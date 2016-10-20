exports.up = function(knex, Promise) {
 return knex.schema.createTable('category', function(table){
   table.increments();
   table.text('category_name');
 	});
};
exports.down = function(knex, Promise) {
 	return knex.schema.dropTableIfExists('category');
};
