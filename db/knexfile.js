module.exports = {
	development: {
		client: "pg",
		connection: {
			database: "wings",
			user: "wings",
			password: null,
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},

	production: {
		client: "pg",
		connection: {
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnauthorized: false },
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./seeds",
		},
	},
};
