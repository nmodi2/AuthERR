  /*  
    File Name: users.js
    Group 2: 2BeOrNot2Be
    
     */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
