
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('work').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 2
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 3
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 3
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 2
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://s-media-cache-ak0.pinimg.com/736x/ef/fa/35/effa35ec16ba06473c87d23b19cf2c79.jpg',
          lookUp: 1
        }),
      ]);
    });
};
