$(function() {

  $("#loginButton").on("click", function(e){
    e.preventDefault();
    var email = $("#email").val();
    var pass = $("#pass").val();
    var erroremail = $("#erroremail");
    var errorpass = $("#errorpass");
    if(email == ''){
      erroremail.html("Campo obligatorio")
    }

    if(pass == ''){
      errorpass.html("Campo obligatorio")
    }
  })

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
