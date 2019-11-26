var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('from user .js');
});
router.get('/amir', function(req, res, next) {
  res.send('user and amir');
});

module.exports = router;
