function jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row1');
    
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/Ideahome",
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
          const fundArray=[];
          //Set Arrays for data
          data.map((user) => {     
            addressArray.push(user.address);
            titleArray.push(user.title);
            typeArray.push(user.jtype);
            idArray.push(user.id);
            catArray.push(user.ideacatagory); 
            timeArray.push(user.created_at);
            fundArray.push(user.funding);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 15 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            
            clone.find('.titleforidea').html(titleArray[i]);       
            clone.find('.txts').html(Array[i]);
            clone.find('.txs2').html(catArray[i]);
            clone.find('.jbdate1').html(timeArray[i]);
            clone.find('.txsfund').html(fundArray[i]);
            $('#conte').append(clone);
            
            
           
        function jobHome(){
    const token = localStorage.getItem('token');
    
    
    const row = $('.row1');
    
    
    
  
    $.ajax({
        url: "https://successsroadv2.herokuapp.com/api/v1/Ideahome",
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
          const fundArray=[];
          //Set Arrays for data
          data.map((user) => {     
            addressArray.push(user.address);
            titleArray.push(user.title);
            typeArray.push(user.jtype);
            idArray.push(user.id);
            catArray.push(user.ideacatagory); 
            timeArray.push(user.created_at);
            fundArray.push(user.funding);
          });
          
          //for loop to repeat printed jobs
          for (let i = 0; i <= 15 ;) {
            let clone = row.clone();
            clone.attr('id', idArray[i]);
            
            
            clone.find('.titleforidea').html(titleArray[i]);       
            clone.find('.txts').html(Array[i]);
            clone.find('.txs2').html(catArray[i]);
            clone.find('.jbdate1').html(timeArray[i]);
            clone.find('.txsfund').html(fundArray[i]);
            $('#conte').append(clone);
            
            
           
             i++;
          }
          
      },
      error: function (error) {
        console.log(`Error ${error}`);
      }
    });
}

//Button Method
$(document).on('click','.applybtn', function(){
 
  const jbidi = $(this).parents('.row').attr('id');
  
  
  sessionStorage.removeItem("selectedId");
  sessionStorage.setItem("selectedId",jbidi);
  
  console.log(sessionStorage.getItem("selectedId"));
  window.location.href="Applyidea1.html";
  
  $(window).scrollTop(0);
});

$(document).on('click','.lovebtn', function(){
 
  let ideaid = $(this).parents('.row').attr('id');
  const token = localStorage.getItem('token');
  var id = localStorage.getItem('id');
  
  var formData =JSON.stringify( {
    
      'idea_id': ideaid,
  
  });

      $.ajax({

          type :'POST',
          url :'https://successsroadv2.herokuapp.com/api/v1/users/'+id+'/Ideafavoutit',
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
});

$(document).ready(function () {
  jobHome();
  
});

$(document).on('click','#logout', function(){
  
  localStorage.removeItem('token');
  
  window.location.href="Log In.html";
  
  
});