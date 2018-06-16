$(document).ready(function() {
  // finished task
  $("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  });

  // delete task
  $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut("slow", function() {
      $(this).remove();
    });
    event.stopPropagation(); // stops bubbling
  });

  $("input[type='text']").keypress( function(event) {
    if (event. which === 13) { // enter key
      var toDo = $(this).val();
      $(this).val("");
      var spanTag = "<span><i class='fa fa-trash'></i></span>"

      $("ul").append("<li> " + spanTag + toDo +"</li>")
    }
  });

  $(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
  });

});
