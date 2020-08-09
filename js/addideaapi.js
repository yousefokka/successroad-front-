// magic.js
$(document).ready(function() {
    getname();
    // process the form
    $('#upload').click(function(event) {

        
        formone();
        
    }); 

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
       
  
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
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/ideas', // the url where we want to POST
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
              window.location.reload();
             
            }).error( function (error) {
                if($('input[name=title]').val() == '' || $('input[name=mngt]').val() == '' || $('input[name=ideacat]').val() == '' || $('input[name=adrs]').val() == '' || $('input[name=fndng]').val() == '' || $('input[name=idesc]').val() == ''){
                    alert("PLEASE FILL ALL DATA");
                  }
                  
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    function getname(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        const name = document.getElementById("name");

        $.ajax({
            url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            type: "GET",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            success : function(data){
                
                
                name.innerHTML=data.name;
                
            }
    
        })


    }
  });
  $(document).on('click','#logout', function(){
  
    localStorage.removeItem('token');
    
    window.location.href="Log In.html";
    
    
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // magic.js
$(document).ready(function() {
    getname();
    // process the form
    $('#upload').click(function(event) {

        
        formone();
        
    }); 

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
       
  
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
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://successsroadv2.herokuapp.com/api/v1/ideas', // the url where we want to POST
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
              window.location.reload();
             
            }).error( function (error) {
                if($('input[name=title]').val() == '' || $('input[name=mngt]').val() == '' || $('input[name=ideacat]').val() == '' || $('input[name=adrs]').val() == '' || $('input[name=fndng]').val() == '' || $('input[name=idesc]').val() == ''){
                    alert("PLEASE FILL ALL DATA");
                  }
                  
            });
  
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();


    }


    function getname(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
        
        const name = document.getElementById("name");

        $.ajax({
            url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            type: "GET",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            success : function(data){
                
                
                name.innerHTML=data.name;
                
            }
    
        })


    }
  });
  $(document).on('click','#logout', function(){
  
    localStorage.removeItem('token');
    
    window.location.href="Log In.html";
    
    
  });