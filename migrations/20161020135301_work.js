
exports.up = function(knex, Promise) {
 return knex.schema.createTable('work', function(table){
   table.increments();
   table.text('description');
   table.text('img');
   table.integer('lookUp').references('category.id');
 	});
};
exports.down = function(knex, Promise) {
 	return knex.schema.dropTableIfExists('work');
};
