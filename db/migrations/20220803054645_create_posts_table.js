/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
  .createTable("posts", function (table) {
    table.increments("post_id").primary(); // Set this column as the primary key
    table
      .integer("user_id")
      .notNullable();
//      .references("profiles.user_id");
    table.string("post_text",500);
    table.string("post_photo",255);
    table
      .dateTime("post_date")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("posts");
};