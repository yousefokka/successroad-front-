// magic.js
$(document).ready(function() {
    //getname();
    // process the form
    $('#upload').click(function(event) {
        fromone();
        
    });

    function fromone(){


        let token = localStorage.getItem('token');
        let editid = sessionStorage.getItem("Editidea");

        
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            'title' :$('input[name=title]').val(),
            'Management' :$('input[name=mngt]').val(),
            'ideacatagory' :$('input[name=ideacat]').val(),
            'address' :$('input[name=adrs]').val(),
            'funding' :$('input[name=fndng]').val(),
            'ideaDescription' :$('input[name=idesc]').val(),
            
        });
        
        // process the form
        $.ajax({
            type        : 'PUT', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/ideas/'+editid+'', // the url where we want to POST
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
              alert("Edited")
              window.location.href="index3manageidea.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    

  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              // magic.js
$(document).ready(function() {
    //getname();
    // process the form
    $('#upload').click(function(event) {
        fromone();
        
    });

    function fromone(){


        let token = localStorage.getItem('token');
        let editid = sessionStorage.getItem("Editidea");

        
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            'title' :$('input[name=title]').val(),
            'Management' :$('input[name=mngt]').val(),
            'ideacatagory' :$('input[name=ideacat]').val(),
            'address' :$('input[name=adrs]').val(),
            'funding' :$('input[name=fndng]').val(),
            'ideaDescription' :$('input[name=idesc]').val(),
            
        });
        
        // process the form
        $.ajax({
            type        : 'PUT', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/ideas/'+editid+'', // the url where we want to POST
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
              alert("Edited")
              window.location.href="index3manageidea.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    

  });