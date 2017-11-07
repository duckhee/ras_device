var models = require('../models/index');
var Cameras = require('../models/carmera');

//find and insert image 
exports.findAndinsert_image = function(carmera_info, callback) {
    models.Cameras.findOrCreate({
        where: {

        },
        default: {

        },
    }).then(function(row) {
        console.log('insert carmera info : ', row);
        callback(row, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);
    });
};

//insert image 
exports.insert_image = function(carmera_info, callback) {
    models.Cameras.cratee({

    }).then(function(row) {
        console.log('insert image : ', row);
        callback(row, null);
    }).catch(function(e) {
        console.log('error : ', e.stack);
        callback(null, e);
    });
};