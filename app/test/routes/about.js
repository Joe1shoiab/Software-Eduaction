var express = require('express');
var router = express.Router();
const path = require('path');
var rootdir = require('../util/path');




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(rootdir ,'../', 'views', 'index.html'));
});

module.exports = router;
