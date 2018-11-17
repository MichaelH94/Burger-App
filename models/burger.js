// Sends information to the ORM to be processed through the database - should be hidden, but kept available for this application

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll('burgers', (res) => {
        cb(res);
      });
    },
  
    insertOne: (cols, vals, cb) => {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;