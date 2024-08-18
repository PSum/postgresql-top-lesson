const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT * FROM usernames');
    return rows;
};

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

async function searchUsername(search) {
    const {rows} = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${search}%'`);
    return rows;
}

async function deleteAllUsernames() {
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteAllUsernames
}