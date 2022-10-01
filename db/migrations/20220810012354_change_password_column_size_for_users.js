const TABLE_NAME = "users";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("password", 72).notNullable().alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable(TABLE_NAME, function (table) {
    table.string("password", 36).notNullable().alter();
  });
};
