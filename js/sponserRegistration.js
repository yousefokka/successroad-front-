$(document).ready(function(){//read code js in html

    $('#upload').click(function(event){
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');

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

            type :'POST',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            data: formData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            window.location.href = "ideaindex.html";

        }).error(function(error){
            alert("failed");
            
        });
        

    });
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    $(document).ready(function(){//read code js in html

    $('#upload').click(function(event){
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');

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

            type :'POST',
            url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/profile',
            data: formData,
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json' ,
                "Authorization": token
                },
                encode:true 

        }).done(function(data){
            window.location.href = "ideaindex.html";

        }).error(function(error){
            alert("failed");
            
        });
        

    });
});