
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {post_id: '3', author: 'Bruno Ramos', comment: 'afsjkfjakldfjask'}
  ]);
};
