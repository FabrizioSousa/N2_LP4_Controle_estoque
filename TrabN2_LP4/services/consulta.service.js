var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('Estoque');

var service = {};

service.create = create;
service.getAll = getAll;
service.delete = _delete;

module.exports = service;

function create(questionParam) {
    var deferred = Q.defer();
        db.Estoque.insert(
            questionParam,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });

    return deferred.promise;
}

function _delete(id) {
    
   
    console.log(id)
    var deferred = Q.defer();
    db.Estoque.deleteOne({ID: Number(id)});
       
    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.Estoque.find().toArray(function (err, questions) {
        if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve(questions);
    }
    )
    return deferred.promise;
}

