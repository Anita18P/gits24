function handleFormSubmit(event){
    event.preventDefault();
    const form=document.querySelector('form');
    let user={
        username:form.username.value.toString(),
        Email:form.email.value.toString(),
        Phone:form.phone.value.toString()
  };
      //console.log(user.username); 
    
    const userList = document.querySelector("ul");
    const listItem = document.createElement("li");
    listItem.textContent =`${user.username} ${user.Email} ${user.Phone}`;
    //console.log(`${user.username}`);
     console.log(listItem);
    userList.appendChild(listItem);
    
    
}
