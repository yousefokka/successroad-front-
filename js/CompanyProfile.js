function getemail(){

    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const email = document.getElementById("owneremail");

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


    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const ownerphonno = document.getElementById("ownerphonno");
    const owneraddress = document.getElementById("ownaddress");
    const compname = document.getElementById("compname");
    const compwebsite = document.getElementById("compsite");
    const compphone = document.getElementById("compphonno");
    const companymail = document.getElementById("compemail");
    const field = document.getElementById("field");
    const compsize = document.getElementById("comsize");
    const compaddress = document.getElementById("comaddress");
    
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
            
            username.innerHTML=data.ownernaem;
            name.innerHTML=data.ownernaem;
            ownerphonno.innerHTML=data.ownerphono;
            owneraddress.innerHTML=data.owneraddress;
            compname.innerHTML=data.name;
            compwebsite.innerHTML=data.Website;
            compphone.innerHTML=data.mobile;
            companymail.innerHTML=data.companyemail;
            field.innerHTML=data.interstingfield;
            compsize.innerHTML=data.size;
            compaddress.innerHTML=data.addree;
            bio.innerHTML=data.ideamakerBio;
        }

    })    

}
$(document).ready(function () {
    getData();
    getemail();
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 function getemail(){

    const token = localStorage.getItem('token');
    var id = localStorage.getItem('id');


    const email = document.getElementById("owneremail");

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


    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const ownerphonno = document.getElementById("ownerphonno");
    const owneraddress = document.getElementById("ownaddress");
    const compname = document.getElementById("compname");
    const compwebsite = document.getElementById("compsite");
    const compphone = document.getElementById("compphonno");
    const companymail = document.getElementById("compemail");
    const field = document.getElementById("field");
    const compsize = document.getElementById("comsize");
    const compaddress = document.getElementById("comaddress");
    
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
            
            username.innerHTML=data.ownernaem;
            name.innerHTML=data.ownernaem;
            ownerphonno.innerHTML=data.ownerphono;
            owneraddress.innerHTML=data.owneraddress;
            compname.innerHTML=data.name;
            compwebsite.innerHTML=data.Website;
            compphone.innerHTML=data.mobile;
            companymail.innerHTML=data.companyemail;
            field.innerHTML=data.interstingfield;
            compsize.innerHTML=data.size;
            compaddress.innerHTML=data.addree;
            bio.innerHTML=data.ideamakerBio;
        }

    })    

}
$(document).ready(function () {
    getData();
    getemail();
  });