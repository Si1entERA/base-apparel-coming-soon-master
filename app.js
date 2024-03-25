button = document.querySelector(".btn");
email = document.querySelector(".email");
output = document.querySelector(".output");

button.addEventListener("click", function(){
  const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if(email.value == ""){
    output.innerText = "email is empty"
  }
  else if(email.value.match(regex)){
    output.innerText = "Success";
    output.style.paddingLeft = "90px";
    output.style.color = "green";
  }
  else{
    output.style.color = "red";
    output.innerText = "The email address is not formatted correctly"
  }
  
})