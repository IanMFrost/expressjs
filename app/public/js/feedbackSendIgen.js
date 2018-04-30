$(function() {
  $.getJSON('api', updateFeedback);

  $('.feedback-form-sendIgen').submit(function(e) {
    e.preventDefault();
    $.post('http://localhost:49650/Service1.svc/getall/', {
      name: $('#feedback-form-name').val(),
      title: $('#feedback-form-title').val(),
      message: $('#feedback-form-message').val()
    }, updateFeedback);
  });

});
