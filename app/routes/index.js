var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index.ejs', {
    pageTitle: 'Home',
    pageID: 'home'
  });
      
});

module.exports = router;
