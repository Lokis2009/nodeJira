var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hooks/:hash', function(req, res, next) {
    res.send(req.params);
});

router.post('/hooks/:hash', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;
