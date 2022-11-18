/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Figaro', pet_type_id: 2},
    {id: 2, name: 'Egypt', pet_type_id: 3},
    {id: 3, name: 'Thorin', pet_type_id: 3},
    {id: 4, name: 'Flounder', pet_type_id: 4}
  ]);
};
