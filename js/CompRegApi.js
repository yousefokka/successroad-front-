// magic.js
$(document).ready(function() {

    // process the form
    $('#upload').click(function(event) {
  
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');
       
  
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            profile_type :3,
            ideamaker : {
                'name' :$('input[name=name]').val(),
                'Website' :$('input[name=Website]').val(),
                'mobile' :$('input[name=mobile]').val(),
                'companyemail' :$('input[name=companyemail]').val(),
                'addree' :$('input[name=addree]').val(),
                'interstingfield' :$('input[name=interstingfield]').val(),
                'size' :$('input[name=size]').val(),
                'ideamakerBio' :$('input[name=ideamakerBio]').val(),
                'ownernaem' :$('input[name=ownernaem]').val(),
                'ownerphono' :$('input[name=ownerphono]').val(),
                'owneraddress' :$('input[name=owneraddress]').val(),
            }
        });
  
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {
              
              window.location.href = "addidea.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
  });                                                                                                                                                                                                                                                                                                                   // magic.js
$(document).ready(function() {

    // process the form
    $('#upload').click(function(event) {
  
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');
       
  
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            profile_type :3,
            ideamaker : {
                'name' :$('input[name=name]').val(),
                'Website' :$('input[name=Website]').val(),
                'mobile' :$('input[name=mobile]').val(),
                'companyemail' :$('input[name=companyemail]').val(),
                'addree' :$('input[name=addree]').val(),
                'interstingfield' :$('input[name=interstingfield]').val(),
                'size' :$('input[name=size]').val(),
                'ideamakerBio' :$('input[name=ideamakerBio]').val(),
                'ownernaem' :$('input[name=ownernaem]').val(),
                'ownerphono' :$('input[name=ownerphono]').val(),
                'owneraddress' :$('input[name=owneraddress]').val(),
            }
        });
  
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {
              
              window.location.href = "addidea.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
  });