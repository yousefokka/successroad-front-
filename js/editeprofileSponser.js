$(document).ready(function(){//read code js in html
    getName();
    $('#upload').click(function(event){
        
        formone();
        formthree();
        formtwo();
        window.location.href="SponsorProfile.html";
    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

        var formData = JSON.stringify({
            profile_type :2,
            sponser : {
                'name' :$('input[name=name]').val(),
                'Address':$('input[name=Address]').val(),
                'Catagory':$('input[name=Catagory]').val(),
                'Gander' :$('input[name=Gander]').val(),
                'Funding':$('input[name=Funding]').val(),
                'Typemanagment':$('input[name=Typemanagment]').val(),
                'exprience':$('input[name=exprience]').val(),
                'phone' :$('input[name=phone]').val(),
                'sponcerBio':$('input[name=sponcerBio]').val(),
            }
        });
        //form processing
        $.ajax({

            type :'PUT',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            data: formData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            console.log("success");

        }).error(function(error){
            alert("failed");
            
        });
        



    }
    function formthree(){
        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

    

        var formmData =JSON.stringify( {
            user :{
            'email': $('input[name=email]').val(),
            
          }
      });
        //form processing
        $.ajax({

            type :'PUT',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'',
            data: formmData,
            dataType: 'json',
            headers: {
                'Content-Type': 'app$(document).ready(function(){//read code js in html
    getName();
    $('#upload').click(function(event){
        
        formone();
        formthree();
        formtwo();
        window.location.href="SponsorProfile.html";
    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

        var formData = JSON.stringify({
            profile_type :2,
            sponser : {
                'name' :$('input[name=name]').val(),
                'Address':$('input[name=Address]').val(),
                'Catagory':$('input[name=Catagory]').val(),
                'Gander' :$('input[name=Gander]').val(),
                'Funding':$('input[name=Funding]').val(),
                'Typemanagment':$('input[name=Typemanagment]').val(),
                'exprience':$('input[name=exprience]').val(),
                'phone' :$('input[name=phone]').val(),
                'sponcerBio':$('input[name=sponcerBio]').val(),
            }
        });
        //form processing
        $.ajax({

            type :'PUT',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            data: formData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            console.log("success");

        }).error(function(error){
            alert("failed");
            
        });
        



    }
    function formthree(){
        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

    

        var formmData =JSON.stringify( {
            user :{
            'email': $('input[name=email]').val(),
            
          }
      });
        //form processing
        $.ajax({

            type :'PUT',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'',
            data: formmData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            alert("Data Changed");

        }).error(function(error){
            //check data signed data
            
            if($('input[name=password]').val() != $('input[name=confpassword]').val() ){
               alert("PASSWORD DOSEN'T MATCH!");
           }
             
         });


    }

    function formtwo(){
        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

    

        var formmData =JSON.stringify( {
            user :{
            
            'password':$('input[name=password]').val(),
            'password_confirmation':$('input[name=confpassword]').val()
          }
      });
        //form processing
        $.ajax({

            type :'PUT',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'',
            data: formmData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            console.log("Data Changed");

        })


    }


    function getName (){


        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');
    
    
        const username = document.getElementById("username");
        
    
        $.ajax({
            url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            type: "GET",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: token
            },
            success : function(data){
                
                username.innerHTML=data.name;
                
            },
            error : function (data){
                alert("Error");
                
            }
    
        })    
    
    }
});
$(document).on('click','#cancel', function(){
  
    
    
    window.location.href="SponsorProfile.html";
    
    
  });