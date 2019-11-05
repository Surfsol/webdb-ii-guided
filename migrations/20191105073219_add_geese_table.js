//changes to make on db schema
// knexjs.org  - schema builder - create table
//will be columns on sqlite
exports.up = function(knex) {
  return knex.schema.createTable('geese', function(tbl){
      //primary key, named 'id' that is an integer and auto-increments
      tbl.increments();

      tbl.string('name', 128).notNullable();
  })
};

//how to undo changes made to db schema
//manual undo
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('geese')
};
