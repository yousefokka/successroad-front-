$(document).ready(function(){//read code js in html

    getName ()
    $('#upload').click(function(event){
        
        formone();
        formthree();
        formtwo();
    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

        var formData = JSON.stringify({
            profile_type :1,
            employee : {
                'name' :$('input[name=name]').val(),
                'jobtybe':$('input[name=jobtybe]').val(),
                'jobcategory':$('input[name=jobcategory]').val(),
                'mobile' :$('input[name=mobile]').val(),
                'address':$('input[name=address]').val(),
                'salary':$('input[name=salary]').val(),
                'Gander':$('input[name=Gander]').val(),
                'Qualifcation' :$('input[name=Qualifcation]').val(),
                'Degree':$('input[name=Degree]').val(),
                'Indestry':$('input[name=Indestry]').val(),
                'Exprense':$('input[name=Exprense]').val(),
                'employeeBio':$('input[name=employeeBio]').val(),
                'Datafrom':$('input[name=Datafrom]').val(),
                'Datato':$('input[name=Datato]').val(),
                'Datafrom':$('input[name=Datafrom]').val(),
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

        }$(document).ready(function(){//read code js in html

    getName ()
    $('#upload').click(function(event){
        
        formone();
        formthree();
        formtwo();
    });

    function formone(){

        const token = localStorage.getItem('token');
        var id = localStorage.getItem('id');

        var formData = JSON.stringify({
            profile_type :1,
            employee : {
                'name' :$('input[name=name]').val(),
                'jobtybe':$('input[name=jobtybe]').val(),
                'jobcategory':$('input[name=jobcategory]').val(),
                'mobile' :$('input[name=mobile]').val(),
                'address':$('input[name=address]').val(),
                'salary':$('input[name=salary]').val(),
                'Gander':$('input[name=Gander]').val(),
                'Qualifcation' :$('input[name=Qualifcation]').val(),
                'Degree':$('input[name=Degree]').val(),
                'Indestry':$('input[name=Indestry]').val(),
                'Exprense':$('input[name=Exprense]').val(),
                'employeeBio':$('input[name=employeeBio]').val(),
                'Datafrom':$('input[name=Datafrom]').val(),
                'Datato':$('input[name=Datato]').val(),
                'Datafrom':$('input[name=Datafrom]').val(),
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
            'email'              : $('input[name=email]').val(),
            
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
            
            'password'             : $('input[name=password]').val(),
            'password_confirmation'    : $('input[name=confpassword]').val()
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
  
    
    
    window.location.href="EmployeeProfile.html";
    
    
  });