const knex = require("../knex");
const USERS_TABLE = "users";

// insert second argument = return array
module.exports = {
  create: function (user) {
    return knex(USERS_TABLE)
      .insert(user, ["user_id", "email"])
      .then((res) => res[0]);
  },

  login: function (email) {
    return knex
      .select({
        id: "user_id",
        email: "email",
        password: "password",
      })
      .from(USERS_TABLE)
      .where({
        email: email,
        active: true,
      })
      .first();
  },

  // ***** DEVELOPMENT ONLY *****
  getAll: function (limit = 10) {
    return knex
      .select({
        id: "user_id",
        email: "email",
        active: "active",
        dateCreated: "date_created",
      })
      .from(USERS_TABLE)
      .orderBy("user_id")
      .limit(limit);
  },
};
