export const up = function(knex) {
    return knex.schema.createTable('comments', column => {
      column.increments('id').primary()
      column.string('post_id')
      column.string('author')
      column.string('comment')
      column.timestamps(false, true)
    })
  };
  
  export const down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments')
  };
