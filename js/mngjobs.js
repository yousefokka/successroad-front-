function jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row2');
    const container = document.getElementById("conte");
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/jobs",
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
          for (let i = 0; i <= 9 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.titleforjob').html(titleArray[i]);
            clone.find('.jcat').html(catArray[i]);
            clone.find('.jtype').html(typeArray[i]);
            clone.find('.adrss').html(addressArray[i]);
            clone.find('.date').html(timeArray[i]);
            // jbtype.innerHTML= typeArray[i];
            // jbaddress.innerHTML= addressArray[i];
            $('#customers').append(clone);
            
            console.log(idArray,titleArray);
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
function Deletejob(){
    const token = localStorage.getItem('token');
    const jbid = sessionStorage.getItem("deleteId");
   
    
    
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/jobs/'+jbid+'',
        type: 'DELETE',
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
           alert("DELETED");
      },
        error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}


//Button Delete Method
$(document).on('click','#btn1', function(){
  //console.log($(this).parents('.row').attr('id'));
  const delid = $(this).parents('.row2').attr('id');
  
  
  sessionStorage.clear("deleteId");
  sessionStorage.setItem("deleteId",delid);
  
  console.log(sessionStorage.getItem("deleteId"));
  
  Deletejob();
  window.location.reload();
});

//Button Edit Method
$(document).on('click','#btn2', function(){
  //console.log($(this).parents('.row').attr('id'));
  const editid = $(this).parents('.row2').attr('id');
  
  
  sessionStorage.clear("EditJob");
  sessionStorage.setItem("EditJob",editid);
  
  console.log(sessionStorage.getItem("EditJob"));
  window.locatiofunction jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row2');
    const container = document.getElementById("conte");
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/jobs",
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
          for (let i = 0; i <= 9 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.titleforjob').html(titleArray[i]);
            clone.find('.jcat').html(catArray[i]);
            clone.find('.jtype').html(typeArray[i]);
            clone.find('.adrss').html(addressArray[i]);
            clone.find('.date').html(timeArray[i]);
            // jbtype.innerHTML= typeArray[i];
            // jbaddress.innerHTML= addressArray[i];
            $('#customers').append(clone);
            
            console.log(idArray,titleArray);
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
function Deletejob(){
    const token = localStorage.getItem('token');
    const jbid = sessionStorage.getItem("deleteId");
   
    
    
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/jobs/'+jbid+'',
        type: 'DELETE',
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
           alert("DELETED");
      },
        error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}


//Button Delete Method
$(document).on('click','#btn1', function(){
  //console.log($(this).parents('.row').attr('id'));
  const delid = $(this).parents('.row2').attr('id');
  
  
  sessionStorage.clear("deleteId");
  sessionStorage.setItem("deleteId",delid);
  
  console.log(sessionStorage.getItem("deleteId"));
  
  Deletejob();
  window.location.reload();
});

//Button Edit Method
$(document).on('click','#btn2', function(){
  //console.log($(this).parents('.row').attr('id'));
  const editid = $(this).parents('.row2').attr('id');
  
  
  sessionStorage.clear("EditJob");
  sessionStorage.setItem("EditJob",editid);
  
  console.log(sessionStorage.getItem("EditJob"));
  window.location.href="editejop.html";
  
  
});

$(document).ready(function () {
  jobHome();
  
});
$(document).on('click','#logout', function(){
  
  localStorage.removeItem('token');
  
  window.location.href="Log In.html";
  
  
});