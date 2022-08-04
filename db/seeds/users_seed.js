/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {email: 'aki@yahoo.co.jp', password: 'Passw0rd', active: true},
    {email: 'booyah@aol.com', password: 'Passw0rd', active: true},
    {email: 'shin1997@hotmail.com', password: 'Passw0rd', active: true},
    {email: 'oliver_daiba@gmail.com', password: 'Passw0rd', active: true},
    {email: 'mickey@disney.com', password: 'Passw0rd', active: true},
    {email: 'hara_juku@gmail.com', password: 'Passw0rd', active: true},
    {email: 'skytree@yahoo.co.jp', password: 'Passw0rd', active: true},
    {email: 'ekb48@freemail.jp', password: 'Passw0rd', active: true},
    {email: 'mumu@yahoo.com', password: 'Passw0rd', active: true},
    {email: 'yoko.hama@codechrysalis.io', password: 'Passw0rd', active: true},
  ]);
};
