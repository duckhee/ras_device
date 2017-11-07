//sequelize model controller value
var models = require('../models/index');
var Values = require('../models/value.js');

//find and insert local db
exports.findAndinsert_data = function(value_info, callback) {
    models.Values.findOrCreate({
        where: {},
        default: {}
    }).then(function(row) {
        console.log('insert data : ', row);
        callback(row, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);
    });
};


//insert local db
exports.insert_data = function(value_info, callback) {
    models.Values.create({}).then(function(row) {
        console.log('success insert', row);
        callback(row, e);
    }).catch(function(e) {
        callback(null, e);
    });
};

//find local db
exports.find_data = function(value_info, callback) {
    models.Values.find({
        where: {},
    }).then(function(row) {
        callback(row, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);
    });
}

//list data local db
exports.list_data = function(value_info, callback) {
    models.Values.findAll({
        where: {},
    }).then(function(rows) {
        callback(rows, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);
    });
};

//delete data local db
exports.delete_data = function(value_info, callback) {
    models.Values.destroy({
        where: {},
    }).then(function(rows) {
        console.log('delete : ', row);
        callback(row, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);

    });
}