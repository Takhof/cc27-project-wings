/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("user_id").primary(); // Set this column as the primary key
    table
      .string("email", 320)
      .unique() // This is a constraint that prevents duplicate emails in the table
      .notNullable();
    table.string("password", 36).notNullable();
    table.boolean("active").defaultTo(true);
    table.dateTime("date_created").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("users");
};
