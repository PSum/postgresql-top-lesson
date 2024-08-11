// db/queries.js
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// Without parameterization this could also look like:
// pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
}

module.exports = {
  getAllUsernames,
  insertUsername
};