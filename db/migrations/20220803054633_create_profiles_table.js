/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
	return knex.schema.createTable("profiles", function (table) {
		table.increments("profile_id").primary(); // Set this column as the primary key
		table.integer("user_id").notNullable();
		table
			.string("email", 320)
			.unique() // This is a constraint that prevents duplicate emails in the table
			.notNullable();
		table.string("full_name", 100).notNullable();
		table.string("about", 500);
		table.string("linkedin_profile", 255);
		table.string("twitter_handle", 100);
		table.string("profile_photo", 255);
		table.integer("cc_cohort");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	knex.schema.dropTable("profiles");
};
