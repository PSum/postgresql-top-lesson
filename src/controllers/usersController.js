const db = require('../db/queries');

module.exports = {
    usersGet: async (req, res) => {
        let usernames;
        if (req.query.search) {
            usernames = await db.searchUsername(req.query.search);
        }
        else {
            usernames = await db.getAllUsernames();
        }

        console.log("Usernames: ", usernames);
        res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    },
    newUserGet: (req, res) => {
        res.render('new')
    },
    newUserPost: async (req, res) => {
        const { username } = req.body;
        await db.insertUsername(username);
        res.redirect("/");
    },
    deleteAllGet: async (req, res) => {
        await db.deleteAllUsernames();
        res.redirect("/");
    }
}