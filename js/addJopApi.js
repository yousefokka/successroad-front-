// magic.js
$(document).ready(function() {
    getname();
    // process the form
    $('#upload').click(function(event) {
        fromone();
        
    });

    function fromone(){


        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            'title' :$('input[name=title]').val(),
            'jtype' :$('input[name=jtype]').val(),
            'catagory' :$('input[name=catagory]').val(),
            'address' :$('input[name=adrs]').val(),
            'salary' :$('input[name=salary]').val(),
            'gander' :$('input[name=gander]').val(),
            'country' :$('input[name=country]').val(),
            'qualification' :$('input[name=qualification]').val(),
            'experience' :$('input[name=experience]').val(),
            'description' :$('input[name=description]').val(),
            //na2sa el city
            
        });
        
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/jobs', // the url where we want to POST
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
              console.log(data);
              //window.location.href = "Account Type.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    function getname(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        const namee = document.getElementById("name");

        $.ajax({
            url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            type: "GET",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            success : function(data){
                
                
                namee.innerHTML=data.name;
                
            }
    
        })


    }

  });
  $(document).on('click','#logout', function(){
  
    localStorage.removeItem('token');
    
    window.location.href="Log In.html";
    
    
  });                                     // magic.js
$(document).ready(function() {
    getname();
    // process the form
    $('#upload').click(function(event) {
        fromone();
        
    });

    function fromone(){


        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = JSON.stringify({
            'title' :$('input[name=title]').val(),
            'jtype' :$('input[name=jtype]').val(),
            'catagory' :$('input[name=catagory]').val(),
            'address' :$('input[name=adrs]').val(),
            'salary' :$('input[name=salary]').val(),
            'gander' :$('input[name=gander]').val(),
            'country' :$('input[name=country]').val(),
            'qualification' :$('input[name=qualification]').val(),
            'experience' :$('input[name=experience]').val(),
            'description' :$('input[name=description]').val(),
            //na2sa el city
            
        });
        
        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/jobs', // the url where we want to POST
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
              console.log(data);
              //window.location.href = "Account Type.html";
             
            }).error( function (error) {
              
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    function getname(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        const namee = document.getElementById("name");

        $.ajax({
            url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            type: "GET",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            success : function(data){
                
                
                namee.innerHTML=data.name;
                
            }
    
        })


    }

  });
  $(document).on('click','#logout', function(){
  
    localStorage.removeItem('token');
    
    window.location.href="Log In.html";
    
    
  });