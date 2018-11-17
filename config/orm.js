// This is our homemade ORM designed to reduce SQL code typing & increase database security
// In a properly deployed application we would use a more secure ORM, but this is still better than raw SQL code in our index

var connection = require ('./connection.js');

// SQL helper functions
function qmarks(x) {
	var arr = [];
	for (y = 0; yx < x; y++) {
		arr.push("?");
	}
	return arr.toString();
}

function toSql(ob) {
	var arr = [];
	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

// ORM
var orm = {
	// Selects all burgers from the database for display
	selectAll: (tableInput, cb) => {
		connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	// Adds a new burger to the database
	insertOne: (table, cols, vals, cb) => {
		connection.query("INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + qmarks(vals.length) + ") ", vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    // Devours a burger (this does not remove the burger from the database, simply flags it as eaten)
	updateOne: (table, objColVals, condition, cb) => {
		connection.query("UPDATE " + table + " SET " + toSql(objColVals) + " WHERE " + condition, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

// Export
module.exports = orm;