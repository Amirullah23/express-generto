var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home' , (req , res) => {
  res.send({
    amir: "test1234"
  })
})

module.exports = router;
