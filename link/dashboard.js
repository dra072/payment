function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "";
    
    if (cityName=="London"){
      document.getElementById("path").innerHTML="Home &rsaquo; Recruitment &rsaquo; Job Post"
    }
    else if(cityName=="Paris"){
      document.getElementById("path").innerHTML="Home &rsaquo; Recruitment &rsaquo; Candidate"           
    }
    else if(cityName=="Tokyo"){
      document.getElementById("path").innerHTML="Home &rsaquo; Recruitment &rsaquo; Interview Schedule"            
    }
}

function openForm(){
      document.getElementById("myForm").style.display = "block";
}

function closeForm(){
      document.getElementById("myForm").style.display = "none";
  }

function option1()
  {
      option=document.getElementById("option").value;
      if (option=="delete")
      {
        alert("Delete Succesfull")
      }


  }

// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


