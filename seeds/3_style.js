exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('style').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('style').insert({
          img:'http://cdn2.bigcommerce.com/server2200/0927d/product_images/uploaded_images/unicorn-hair-braid-tutorial-lox-extensions.jpg', description: 'yes yea wooo so good look yea so yea pooptarts'
        }),
        knex('style').insert({
          img: 'https://www.regissalons.com/content/dam/signaturestyle/photography/models/1-x-1/signature-style-sleek-straight-hairstyle-vanessa-1x1.jpg' ,
           description: 'yes yea wooo so good look yea so yea pooptarts'
         }),
        knex('style').insert({
          img: 'https://www.regissalons.com/content/dam/signaturestyle/photography/models/1-x-1/signature-style-sleek-straight-hairstyle-vanessa-1x1.jpg' ,
          description: 'yes yea wooo so good look yea so yea pooptarts'
        })
      ]);
    });
};
