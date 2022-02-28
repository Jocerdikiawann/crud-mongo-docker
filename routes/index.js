var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`tes : ${req.body.helboy}`)
  res.send(`tes : ${req.body.helboy}`)
});

module.exports = router;
