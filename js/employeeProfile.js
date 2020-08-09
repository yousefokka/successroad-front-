function getemail(){

    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');


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
            alert("Error");
        }

    })    



}


function getData (){


    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const jbtype = document.getElementById("jbtype");
    const jbcatg = document.getElementById("jbcatg");
    const salr = document.getElementById("salr");
    const qualf = document.getElementById("qualf");
    const expr = document.getElementById("expr");
    const degree = document.getElementById("degree");
    const inst = document.getElementById("inst");
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
            phonno.innerHTML=data.mobile;
            address.innerHTML=data.address;
            gender.innerHTML=data.Gander;
            jbtype.innerHTML=data.jobtype;
            jbcatg.innerHTML=data.jobcategory;
            salr.innerHTML=data.salary;
            qualf.innerHTML=data.Qualifcation;
            expr.innerHTML=data.Exprense;
            degree.innerHTML=data.Degree;
            inst.innerHTML=data.Indestry;
            bio.innerHTML=data.employeeBio;
        },
        error : function (data){
            alert("Error");
        }

    })    

}

function getJobsApp (){


    let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = documenfunction getemail(){

    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');


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
            alert("Error");
        }

    })    



}


function getData (){


    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const jbtype = document.getElementById("jbtype");
    const jbcatg = document.getElementById("jbcatg");
    const salr = document.getElementById("salr");
    const qualf = document.getElementById("qualf");
    const expr = document.getElementById("expr");
    const degree = document.getElementById("degree");
    const inst = document.getElementById("inst");
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
            phonno.innerHTML=data.mobile;
            address.innerHTML=data.address;
            gender.innerHTML=data.Gander;
            jbtype.innerHTML=data.jobtype;
            jbcatg.innerHTML=data.jobcategory;
            salr.innerHTML=data.salary;
            qualf.innerHTML=data.Qualifcation;
            expr.innerHTML=data.Exprense;
            degree.innerHTML=data.Degree;
            inst.innerHTML=data.Indestry;
            bio.innerHTML=data.employeeBio;
        },
        error : function (data){
            alert("Error");
        }

    })    

}

function getJobsApp (){


    let token = localStorage.getItem('token');
        let id = localStorage.getItem('id');


    const username = document.getElementById("username");
    const name = document.getElementById("name");
    const phonno = document.getElementById("phonno");
    const address = document.getElementById("address");
    const gender = document.getElementById("gender");
    const jbtype = document.getElementById("jbtype");
    const jbcatg = document.getElementById("jbcatg");
    const salr = document.getElementById("salr");
    const qualf = document.getElementById("qualf");
    const expr = document.getElementById("expr");
    const degree = document.getElementById("degree");
    const inst = document.getElementById("inst");
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
            phonno.innerHTML=data.mobile;
            address.innerHTML=data.address;
            gender.innerHTML=data.Gander;
            jbtype.innerHTML=data.jobtype;
            jbcatg.innerHTML=data.jobcategory;
            salr.innerHTML=data.salary;
            qualf.innerHTML=data.Qualifcation;
            expr.innerHTML=data.Exprense;
            degree.innerHTML=data.Degree;
            inst.innerHTML=data.Indestry;
            bio.innerHTML=data.employeeBio;
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

  function jobHome(){
    let token = localStorage.getItem('token');
    
      
      const row = $('.brdr') /*document.querySelectorAll("[id=brdr]")[0]*/;
      
    
      $.ajax({
          url: "https://successsroadv2.herokuapp.com/api/v1/submittings",
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

                const jobid = data[i].job_id;
                //console.log(data[i].job_id)
              let clone = row.clone();
              clone.attr('id', idArray[i]);
              
              console.log(job.title);
              clone.find('.titleforjob').html("job.title");
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
