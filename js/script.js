
var nameinput=document.getElementById("siteinput");
var wepsite=document.getElementById("websiteinput");
var productsWrapper =document.getElementById("productscontainer");
var alldate =[];

alldate =JSON.parse(localStorage.getItem('alldate')) || [];      //retrive data
displaydate()




function adddate(){
  if(validate() === true){
    var date ={
      nameinput :nameinput.value,
      wepsite :wepsite.value,
  }
  alldate.push(date)
  displaydate()
   localStorage.setItem('alldate',JSON.stringify(alldate))          //retrive data
   clearForm()
  }
}


function displaydate(){
    var cartonaa = '';
   
    for (var i = 0 ; i<alldate.length ; i++){
         cartonaa+= `
           <tr>
                   <td> ${i+1} </td>
                   <td> ${alldate[i].nameinput} </td>
                   <td>
                   <a href="wepsite" class="btn btn-success">
                    <i class="fa-sharp fa-solid fa-eye"></i>
                   Visite
                     </a>
                   </td>
                   <td>
                 <button class="btn btn-danger" onclick="delteDate(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                 Delate</button>
                   </td>
               </tr> 
         
         `
    }
   productsWrapper .innerHTML=cartonaa
   }


  function delteDate(index){
    alldate.splice(index,1)
    displaydate()
    localStorage.setItem('alldate', JSON.stringify( alldate))
  }

  function clearForm(){
    nameinput.value = null
    wepsite.value = null
  }

                                                              //// regular expersion ////

 function validate(){
 var regex =  /^[\w]{3,}\s?\.com$/i
 var regexBook = /^[\w]{3,}\s?$/i
 if(regex.test(websiteinput.value) && regexBook.test(siteinput.value)){
   Swal.fire({
     title: "Good ",
     icon: "success"
   });
   websiteinput.classList.add("is-valid")
   websiteinput.classList.remove("is-invalid")
   siteinput.classList.add("is-valid")
   siteinput.classList.remove("is-invalid")

  return true
  
 }
 else{  
   Swal.fire({
     text: "Enter the name of the bookmark, a minimum of 3 letters or numbers  and Enter a URL that contains at least 3 letters or numbers and .com",
     icon: "error"
   });  
   websiteinput.classList.add("is-invalid")
   websiteinput.classList.remove("is-valid")
   siteinput.classList.add("is-invalid")
   siteinput.classList.remove("is-valid")

   return false
}
 }

 
 