const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err) {
        console.error("ERROR CONNECTIONG TO DATABASE " + err.stack);
        return;
    }
    console.log("Connected as " + connection.threadId);
})

module.exports = connection;