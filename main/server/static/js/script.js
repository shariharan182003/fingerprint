$(document).ready(function() {
    setInterval(function() {
      $.ajax({
        url: "/fetchdata",
        type: "GET",
        success: function(response) {
            $('#rep').text(response)
        },
        error: function(error) {
            console.error(error);
        }
      });
    }, 500);
});

