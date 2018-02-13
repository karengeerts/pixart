
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
