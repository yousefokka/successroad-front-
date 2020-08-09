// magic.js
$(document).ready(function() {

  // process the form
  $('form').submit(function(event) {

      
     

      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      var formData = {
            user :{
            'email'              : $('input[name=email]').val(),
            'password'             : $('input[name=password]').val(),
            'password_confirmation'    : $('input[name=confpassword]').val()
          }
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : 'https://successsroadv2.herokuapp.com/api/v1/users', // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
                      encode          : true
      })
          // using the done promise callback
          .success(function(data) {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.setItem('token', data.auth_token);
            localStorage.setItem('id', data.id);
            console.log(data.auth_token);
            console.log(data.id);
            window.location.href = "Account Type.html";
           
          }).error( function (error) {
            //check data signed data
            if($('input[name=password]').val() == '' || $('input[name=confpassword]').val() == '' || $('input[name=email]').val() == ''){
              alert("PLEASE ENTER EMAIL AND PASSWORD!");
            }
            else if($('input[name=password]').val() != $('input[name=confpassword]').val() ){
                alert("PASSWORD DOSEN'T MATCH!");
            }else
            alert("EMAIL ALREADY REGISTERED ! ")
          });

      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
  });
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      // magic.js
$(document).ready(function() {

  // process the form
  $('form').submit(function(event) {

      
     

      // get the form data
      // there are many ways to get this data using jQuery (you can use the class or id also)
      var formData = {
            user :{
            'email'              : $('input[name=email]').val(),
            'password'             : $('input[name=password]').val(),
            'password_confirmation'    : $('input[name=confpassword]').val()
          }
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : 'https://successsroadv2.herokuapp.com/api/v1/users', // the url where we want to POST
          data        : formData, // our data object
          dataType    : 'json', // what type of data do we expect back from the server
                      encode          : true
      })
          // using the done promise callback
          .success(function(data) {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.setItem('token', data.auth_token);
            localStorage.setItem('id', data.id);
            console.log(data.auth_token);
            console.log(data.id);
            window.location.href = "Account Type.html";
           
          }).error( function (error) {
            //check data signed data
            if($('input[name=password]').val() == '' || $('input[name=confpassword]').val() == '' || $('input[name=email]').val() == ''){
              alert("PLEASE ENTER EMAIL AND PASSWORD!");
            }
            else if($('input[name=password]').val() != $('input[name=confpassword]').val() ){
                alert("PASSWORD DOSEN'T MATCH!");
            }else
            alert("EMAIL ALREADY REGISTERED ! ")
          });

      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
  });
});
