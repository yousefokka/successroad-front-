function jobHome(){
  let token = localStorage.getItem('token');
  
    
    const row = $('.brdr') /*document.querySelectorAll("[id=brdr]")[0]*/;
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/Jobhome",
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
          const myText = "";
          const addressArray = [];
          const titleArray = [];
          const typeArray = [];
          const idArray = [];
          const catArray = [];
          const timeArray=[];
          //Set Arrays for data
          data.map((user) => {     
            addressArray.push(user.address);
            titleArray.push(user.title);
            typeArray.push(user.jtype);
            idArray.push(user.id);
            catArray.push(user.catagory); 
            timeArray.push(user.created_at);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 2 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.titleforjob').html(titleArray[i]);
            clone.find('.txs1').html(catArray[i]);
            clone.find('.txs3').html(typeArray[i]);
            clone.find('.txs2').html(addressArray[i]);
            clone.find('.jbdate1').html(timeArray[i]);
            // jbtype.innerHTML= typeArray[i];
            // jbaddress.innerHTML= addressArray[i];
            $('#conte').append(clone);
            
            console.log(clone.find('.titleforjob'));
            // container.appendChild(clone);
            // //sessionStorage.setItem("jobid-"+i,idArray[i]);
             i++;
          }
          
      },
      error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}

//button function with another type
function jobSelected(){
    let token = localStorage.getItem('token');
  
    const jbid = sessionStorage.getItem("selectedId");
   
    
    const hedtitle = document.getElementById("headertitle");
    const jbtime = document.getElementById("txt3");
    const jbaddress = document.getElementById("txt2");
    const jbcat = document.getElementById("txt1");
    const desc = document.getElementById("descc");

    //side Bar
    const sal = document.getElementById("sal");
    const location = document.getElementById("locl");
    const gender = document.getElementById("gend");
    const Time = document.getElementById("time");
    const Qualification = document.getElementById("qual");
    const Experience = document.getElementById("exp");
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/Jobhome/'+jbid+'',
        type: "GET",
        dataType: "json",
        headers: {
          "Confunction jobHome(){
  let token = localStorage.getItem('token');
  
    
    const row = $('.brdr') /*document.querySelectorAll("[id=brdr]")[0]*/;
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/Jobhome",
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
          const myText = "";
          const addressArray = [];
          const titleArray = [];
          const typeArray = [];
          const idArray = [];
          const catArray = [];
          const timeArray=[];
          //Set Arrays for data
          data.map((user) => {     
            addressArray.push(user.address);
            titleArray.push(user.title);
            typeArray.push(user.jtype);
            idArray.push(user.id);
            catArray.push(user.catagory); 
            timeArray.push(user.created_at);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 2 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.titleforjob').html(titleArray[i]);
            clone.find('.txs1').html(catArray[i]);
            clone.find('.txs3').html(typeArray[i]);
            clone.find('.txs2').html(addressArray[i]);
            clone.find('.jbdate1').html(timeArray[i]);
            // jbtype.innerHTML= typeArray[i];
            // jbaddress.innerHTML= addressArray[i];
            $('#conte').append(clone);
            
            console.log(clone.find('.titleforjob'));
            // container.appendChild(clone);
            // //sessionStorage.setItem("jobid-"+i,idArray[i]);
             i++;
          }
          
      },
      error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}

//button function with another type
function jobSelected(){
    let token = localStorage.getItem('token');
  
    const jbid = sessionStorage.getItem("selectedId");
   
    
    const hedtitle = document.getElementById("headertitle");
    const jbtime = document.getElementById("txt3");
    const jbaddress = document.getElementById("txt2");
    const jbcat = document.getElementById("txt1");
    const desc = document.getElementById("descc");

    //side Bar
    const sal = document.getElementById("sal");
    const location = document.getElementById("locl");
    const gender = document.getElementById("gend");
    const Time = document.getElementById("time");
    const Qualification = document.getElementById("qual");
    const Experience = document.getElementById("exp");
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/Jobhome/'+jbid+'',
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
            
           hedtitle.innerHTML=data.title; 
           jbtime.innerHTML=data.jtype; 
           jbaddress.innerHTML=data.address; 
           jbcat.innerHTML=data.catagory;
           desc.innerHTML=data.description;
           //side bar


           sal.innerHTML=data.salary;
           location.innerHTML=data.address;
           gender.innerHTML=data.gander;
           Time.innerHTML=data.jtype;
           Qualification.innerHTML=data.qualification;
           Experience.innerHTML=data.experience;
           console.log(data,jbid); 

      },
        error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}



//Button Method
$(document).on('click','.bttn', function(){
  //console.log($(this).parents('.row').attr('id'));
  const jbidi = $(this).parents('.row').attr('id');
  
  
  sessionStorage.clear("selectedId");
  sessionStorage.setItem("selectedId",jbidi);
  
  console.log(sessionStorage.getItem("selectedId"));
  jobSelected();
  $(window).scrollTop(0);
});

$(document).ready(function () {
  jobHome();
  jobSelected();
});
$(document).on('click','#logout', function(){
  
  localStorage.removeItem('token');
  
  window.location.href="Log In.html";
  
  
});

$(document).on('click','.scs', function(){
 
  let jobid = $(this).parents('.row').attr('id');
  const token = localStorage.getItem('token');
  var id = localStorage.getItem('id');
  
  var formData =JSON.stringify( {
    
      'job_id': jobid,
  
  });

      $.ajax({

          type :'POST',
          url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/Jobfavoutit',
          data: formData,
          dataType: 'json',
          headers: {
              'Content-Type': 'application/json' ,
              "Authorization": token
              },
              encode:true 

        }).done(function(data){
            alert("Favourited");

        }).error(function(error){
            alert(`Error ${error}`);
          
      });
});



$(document).on('click','#favbutton', function(){
 
  
  let jobid = sessionStorage.getItem("selectedId");
  const token = localStorage.getItem('token');
  var id = localStorage.getItem('id');
  
  var formData =JSON.stringify( {
    
      'job_id': jobid,
  
  });

      $.ajax({

          type :'POST',
          url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/Jobfavoutit',
          data: formData,
          dataType: 'json',
          headers: {
              'Content-Type': 'application/json' ,
              "Authorization": token
              },
              encode:true 

        }).done(function(data){
            alert("Favourited");

        }).error(function(error){
          alert("You Can't Do It Again");
          
      });
});


$(document).on('click','#Applyjob', function(){
 
  
  let jobid = sessionStorage.getItem("selectedId");
  const token = localStorage.getItem('token');
  var id = localStorage.getItem('id');
  
  var formData =JSON.stringify( {
    
      'user_id': id,
      'job_id': jobid,
  
  });

      $.ajax({

          type :'POST',
          url :'https://successsroadv2.herokuapp.com/api/v1/submittings',
          data: formData,
          dataType: 'json',
          headers: {
              'Content-Type': 'application/json' ,
              "Authorization": token
              },
              encode:true 

        }).done(function(data){
            alert("Successful");

        }).error(function(error){
            alert("You Can't Do It Again");
          
      });
});