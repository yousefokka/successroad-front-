$(document).ready(function(){//read code js in html

    getName();
    $('#upload').click(function(event){
      
        formone();
        formthree();
        formtwo();

    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

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
            alert("success");

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
        var id = localStorage.getItem('id');;

    

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
            alert("Data Changed");

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
    
    
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     $(document).ready(function(){//read code js in html

    getName();
    $('#upload').click(function(event){
      
        formone();
        formthree();
        formtwo();

    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

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
            alert("success");

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
        var id = localStorage.getItem('id');;

    

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
            alert("Data Changed");

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