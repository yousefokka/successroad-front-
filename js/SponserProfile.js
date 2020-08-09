function getemail(){

    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const email = document.getElementById("email");

    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'',
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success : function(data){
            
            email.innerHTML=data.email;
            
        },
        error : function (data){
            window.location.href="Log In.html";
        }

    })    



}


function getData (){


    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const catg = document.getElementById("catg");
    const funding = document.getElementById("funding");
    const tOMngt = document.getElementById("tOMngt");
    const expr = document.getElementById("expr");
    const bio = document.getElementById("bio");

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
            name.innerHTML=data.name;
            phonno.innerHTML=data.phone;
            address.innerHTML=data.Address;
            gender.innerHTML=data.Gander;
            catg.innerHTML=data.Catagory;
            funding.innerHTML=data.Funding;
            tOMngt.innerHTML=data.Typemanagment;
            expr.innerHTML=data.exprience;
            bio.innerHTML=data.sponcerBiofunction getemail(){

    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const email = document.getElementById("email");

    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'',
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success : function(data){
            
            email.innerHTML=data.email;
            
        },
        error : function (data){
            window.location.href="Log In.html";
        }

    })    



}


function getData (){


    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const catg = document.getElementById("catg");
    const funding = document.getElementById("funding");
    const tOMngt = document.getElementById("tOMngt");
    const expr = document.getElementById("expr");
    const bio = document.getElementById("bio");

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
            name.innerHTML=data.name;
            phonno.innerHTML=data.phone;
            address.innerHTML=data.Address;
            gender.innerHTML=data.Gander;
            catg.innerHTML=data.Catagory;
            funding.innerHTML=data.Funding;
            tOMngt.innerHTML=data.Typemanagment;
            expr.innerHTML=data.exprience;
            bio.innerHTML=data.sponcerBio;
        },
        error : function (data){
            alert("Error");
            
        }

    })    

}
$(document).ready(function () {
    getData();
    getemail();
    jobHome();
  });

  $(document).on('click','#logout', function(){
  
    localStorage.removeItem('token');
    
    window.location.href="Log In.html";
    
    
  });

  function jobHome(){
    let token = localStorage.getItem('token');
    
      
      const row = $('.brdr') /*document.querySelectorAll("[id=brdr]")[0]*/;
      
    
      $.ajax({
          url: "https://successsroadv2.herokuapp.com/api/v1/funds",
          type: "GET",
          dataType: "json",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          success: function (data) {
            
            const addressArray = [];
            const titleArray = [];
            const typeArray = [];
            const idArray = [];
            const catArray = [];
            const timeArray=[];
            const resArray=[];
            const job=[];
            //Set Arrays for data
            // data.map((user) => {     
            //   addressArray.push(user.address);
            //   titleArray.push(user.title);
            //   typeArray.push(user.jtype);
            //   idArray.push(user.id);
            //   catArray.push(user.catagory); 
            //   timeArray.push(user.created_at);
            //   resArray.push(user.Responce);
            //   job.push(user.job);
            // });
            
            //for loop to repeat printed jobs
            for (let i = 0; i <= 2 ;) {

                
              let clone = row.clone();
              clone.attr('id', idArray[i]);
              
              
              clone.find('.titleforjob').html("Idea - title");
            //   clone.find('.txs1').html(catArray[i]);
            //   clone.find('.txs3').html(typeArray[i]);
            //   clone.find('.txs2').html(addressArray[i]);
            //   clone.find('.jbdate1').html(timeArray[i]);
              clone.find('#bttn').html(data[i].Responce);
              $('#conte').append(clone);
              
              console.log(clone.find('.titleforjob'));
              
               i++;
            }
            
        },
        error: function (error) {
          console.log(`Error ${error}`);
        }
      });
  }  