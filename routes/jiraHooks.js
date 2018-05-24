var express = require('express');
var router = express.Router();
var parser = require('../controllers/jiraHooksController');

router.post('/', function(req, res, next) {
    console.log(req.query);
    // console.log(req.body);
    parser.hookParse(req.body);
    // res.send(req.query.user_id);
});

module.exports = router;