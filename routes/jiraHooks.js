var express = require('express');
var router = express.Router();
var parser = require('../controllers/jiraHooksController');

router.post('/', function(req, res, next) {
    parser.hookParse(req.body);
});

module.exports = router;