exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('color').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('color').insert({
          img:'https://s-media-cache-ak0.pinimg.com/736x/80/a4/b4/80a4b4555213da6e9ee1d004a6c5d935.jpg', description: 'yes yea wooo so good look yea so yea pooptarts'
        }),
        knex('color').insert({
          img: 'https://media1.popsugar-assets.com/files/thumbor/7ZTGsaNtvcGrD77QWwe87SRksdo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/08/23/913/n/1922153/52ac942c_edit_img__42268489_1471976241_3c522153_rainbowmain/i/Rainbow-Balayage-Hair-Color-Inspiration.jpg' ,
           description: 'yes yea wooo so good look yea so yea pooptarts'
         }),
        knex('color').insert({
          img: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2016/10/100516-pumpkin-spice-hair.jpg?itok=Ma8dT_8Y' ,
          description: 'yes yea wooo so good look yea so yea pooptarts'
        })
      ]);
    });
};
