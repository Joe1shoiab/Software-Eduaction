var express = require('express');
var router = express.Router();
const path = require('path');
const rootDir = require('../util/path');






/* GET main page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(rootDir , '../', 'views', 'Project1.html'));
});



module.exports = router;
