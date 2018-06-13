$(document).ready(function() {
  // finished task
  $("li").click(function(){
    $(this).toggleClass("completed");
  });

  // delete task
  $("span").click(function(event) {
    $(this).parent().fadeOut("slow", function() {
      $(this).parent().remove();
    });
    event.stopPropagation(); // stops bubbling
  })
});
