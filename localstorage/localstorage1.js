function handleFormSubmit(event){
    event.preventDefault();
    const form=document.querySelector('form');
    let dataObj={
        username:form.username.value.toString(),
        Email:form.email.value.toString(),
        Phone:form.phone.value.toString()


    };
    let dataobj_serialized=JSON.stringify(dataObj);
    localStorage.setItem("user Details",dataobj_serialized);
    
     

}
