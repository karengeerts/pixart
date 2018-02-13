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

var addSquares = function(){
  for (var i = 0; i < 100; i++){
    var $newSquare = $('<div>');
    $("body").append($newSquare);
  }
};

$(document).ready(function () {
    addSquares();
});
