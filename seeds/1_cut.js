
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cut').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cut').insert({
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg', description: 'yes yea wooo so good look yea so yea pooptarts'
        }),
        knex('cut').insert({
          img: 'http://www.sunsilk.com.pk/wp-content/uploads/2014/10/peicey-ends.jpg' ,
           description: 'yes yea wooo so good look yea so yea pooptarts'
         }),
        knex('cut').insert({
          img: 'http://www.princess3.com/up/do.php?img=10189' ,
          description: 'yes yea wooo so good look yea so yea pooptarts'
        })
      ]);
    });
};
