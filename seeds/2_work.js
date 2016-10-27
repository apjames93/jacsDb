
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('work').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 2
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 3
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 4
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 5
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 2
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 4
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 2
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 4
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 5
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 1
        }),
        knex('work').insert({
          description: 'yes yea wooo so good look yea so yea pooptarts',
          img:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10527793_761403510578286_5002416104751473510_n.jpg?oh=809eb73757453ef53c586d0f0d3c627a&oe=589C5438',
          lookUp: 5
        }),
      ]);
    });
};
