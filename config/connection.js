// Setting up the MySQL database connection 
// If this were a proper application we would want to use secure connections

const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ayp9hm6p6aaid755",
    password: "pxnva0p4t2r713wg",
    database: "e1vljno4kmzf1mv9"
})

// Connection
connection.connect((err) => {
    if (err) {
        console.error("ERROR CONNECTIONG TO DATABASE " + err.stack);
        return;
    }
    console.log("Database Connection Established");
})
// Export
module.exports = connection;