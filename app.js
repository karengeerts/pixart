
$( ".set_color_button" ).click(function() {
  value = $(".colourpicker").val();
  $(".brushbox").css("background-color", value);
});
