var express = require('express');
var router = express.Router();

router.get('/feedbackSendIgen', function(req, res) {

  res.render('feedbackSendIgen', {
    pageTitle: 'FeedbackSendIgen',
    pageID: 'feedbackSendIgen'
  });

});

module.exports = router;
