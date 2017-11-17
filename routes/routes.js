var express = require('express');
var router = express.Router();

// export router
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AUP' });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'abt' });
});


/* GET users listing. */
router.get('/users', function(req, res, next) {
var MongoClient = require('mongodb').MongoClient 
MongoClient.connect(
  'mongodb://maryamscloud9-mango-5663705:27017/3051', function (err, db) { 
    if (err) throw err 
    db.collection('users').find().
        toArray(function (err, result) { 
      if (err) throw err 
      res.render('users',
             { 'title': 'Express', 'data': result });
       })
    })
});

/* GET classes listing. */
router.get('/classes', function(req, res, next) {
var MongoClient = require('mongodb').MongoClient 
MongoClient.connect(
  'mongodb://maryamscloud9-mango-5663705:27017/classes', function (err, db) { 
    if (err) throw err 
    db.collection('classes').find().
        toArray(function (err, result) { 
      if (err) throw err 
      res.render('classes',
             { 'title': 'Express', 'data': result });
       })
    })
});
