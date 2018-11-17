var connection = require ('./connection.js');

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

var orm = {
	selectAll: (tableInput, cb) => {
		connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: (table, cols, vals, cb) => {
		connection.query("INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + qmarks(vals.length) + ") ", vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    
	updateOne: (table, objColVals, condition, cb) => {
		connection.query("UPDATE " + table + " SET " + toSql(objColVals) + " WHERE " + condition, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;