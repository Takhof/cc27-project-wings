/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{ user_id: 2, email: "aki@yahoo.co.jp", password: "Passw0rd", active: true },
		{ user_id: 3, email: "booyah@aol.com", password: "Passw0rd", active: true },
		{ user_id: 4, email: "shin1997@hotmail.com", password: "Passw0rd", active: true },
		{ user_id: 5, email: "oliver_daiba@gmail.com", password: "Passw0rd", active: true },
		{ user_id: 6, email: "mickey@disney.com", password: "Passw0rd", active: true },
		{ user_id: 7, email: "hara_juku@gmail.com", password: "Passw0rd", active: true },
		{ user_id: 8, email: "skytree@yahoo.co.jp", password: "Passw0rd", active: true },
		{ user_id: 9, email: "ekb48@freemail.jp", password: "Passw0rd", active: true },
		{ user_id: 10, email: "mumu@yahoo.com", password: "Passw0rd", active: true },
		{ user_id: 11,email: "yoko.hama@codechrysalis.io", password: "Passw0rd", active: true },
	]);
};
