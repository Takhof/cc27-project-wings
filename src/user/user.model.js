const knex = require("../knex");

// KNEX HERE

const USERS_TABLE = "users";

// export to controller.js
// insert second argument = what we return
module.exports = {
  create: function (user) {
    return knex(USERS_TABLE)
      .insert(user, ["user_id"])
      .then((res) => res[0]);
  },

  getAll: function (limit = 10) {
    return knex
      .select({
        id: "user_id",
        email: "email",
        password: "password",
        active: "active",
        dateCreated: "date_created",
      })
      .from(USERS_TABLE)
      .orderBy("user_id")
      .limit(limit);
  },
};
