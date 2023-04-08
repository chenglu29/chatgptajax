$(document).ready(function() {
    $('#get-user').click(function() {
      var userId = $('#user-id').val();
      var apiUrl = 'https://jsonplaceholder.typicode.com/users/' + userId;
  
      $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          var name = data.name;
          var email = data.email;
          var result = 'Name: ' + name + '<br>Email: ' + email;
          $('#result').html(result);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $('#result').text('Error: ' + textStatus + ' - ' + errorThrown);
        }
      });
    });
  });
  