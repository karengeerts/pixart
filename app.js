var $body = $('.body');

$( ".set_color_button" ).click(function() {
  value = $(".colourpicker").val();
  $(".brushbox").css("background-color", value);
});

$(".colourpicker").keypress(function(e) {
    if(e.which == 13) {
      value = $(".colourpicker").val();
      $(".brushbox").css("background-color", value);
    }
});

var addPoster = function(result){
  var $moviePoster= $('<img>');
  $moviePoster.attr("src", result.Poster);
  $('.moviebox').append($moviePoster);
};


$(".moviepicker").click(function(){
  movie = $('.moviepicker').val();
  console.log(movie);
  movie_request = "http://www.omdbapi.com/?apikey=2f6435d9&t=" + movie;
  var xhr = $.get(movie_request);
    xhr.done(function(result) {
      addPoster(result);
});
});


var addSquares = function(){
  for (var i = 0; i < 100; i++){
    var $newSquare = $('<div>');
    $newSquare.mouseover(function(){
      $(this).css('background-color', $(".colourpicker").val());
    });
    $("body").append($newSquare);
  }
};

$(document).ready(function () {
    addSquares();
});
