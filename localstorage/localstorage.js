const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    localStorage.setItem("username",form.username.value.toString());
    localStorage.setItem("Email",form.email.value.toString());
    localStorage.setItem("phone",form.phone.value.toString());
     

})
