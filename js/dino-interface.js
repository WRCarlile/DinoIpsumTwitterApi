// var apiKey = "YOUR-API-KEY-GOES-HERE";

$(document).ready(function() {
  $('.button').click(function() {
    // $.get('http://dinoipsum.herokuapp.com/api/?format=html').then(function(response) {
    //   $('#some-awesome-container').html(response);

      $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
        $('#some-awesome-container').html(response);

    }, function() {
      console.log('Where did all the dinosaurs go?');
    });
   });
  });
