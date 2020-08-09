function jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row2');
    
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/ideas",
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
          
          const titleArray = [];
          
          const idArray = [];
          const catArray = [];
          const fundArray=[];
          //Set Arrays for data
          data.map((user) => {     
            
            titleArray.push(user.title);
            
            idArray.push(user.id);
            catArray.push(user.ideacatagory); 
            fundArray.push(user.funding);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 19 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.title').html(titleArray[i]);
            clone.find('.ideacatg').html(catArray[i]);
            clone.find('.fund').html(fundArray[i]);
            
            // jbtype.innerHTML= typeArray[i];
            // jbaddress.innerHTML= addressArray[i];
            $('#customers').append(clone);
            
            cofunction jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row2');
    
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/ideas",
        type: "GET",
        dataType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        success: function (data) {
          
          const titleArray = [];
          
          const idArray = [];
          const catArray = [];
          const fundArray=[];
          //Set Arrays for data
          data.map((user) => {     
            
            titleArray.push(user.title);
            
            idArray.push(user.id);
            catArray.push(user.ideacatagory); 
            fundArray.push(user.funding);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 19 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            // //container.firstChild.innerHTML = "";
            clone.find('.title').html(titleArray[i]);
            clone.find('.ideacatg').html(catArray[i]);
            clone.find('.fund').html(fundArray[i]);
            
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
function Deleteidea(){
  const token = localStorage.getItem('token');
    const jbid = sessionStorage.getItem("deleteId");
   
    
    
    
  
    $.ajax({
        url: 'https://successsroadv2.herokuapp.com/api/v1/ideas/'+jbid+'',
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
  
  Deleteidea();
  window.location.reload();
});

//Button Edit Method
$(document).on('click','#btn2', function(){
  //console.log($(this).parents('.row').attr('id'));
  const editid = $(this).parents('.row2').attr('id');
  
  
  sessionStorage.clear("Editidea");
  sessionStorage.setItem("Editidea",editid);
  console.log(editid);
  console.log(sessionStorage.getItem("Editidea"));
  window.location.href="editeidea.html";
  
  
});

$(document).ready(function () {
  jobHome();
  
});
$(document).on('click','#logout', function(){
  
  localStorage.removeItem('token');
  
  window.location.href="Log In.html";
  
  
});