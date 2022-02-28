var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.body.helboy == ""){
      res.send({
          "success":false,
          "message":'helboy require'
      },404)
  }
  res.send(`tes : ${req.body.helboy}`)
});

module.exports = router;