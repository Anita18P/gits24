function handleFormSubmit(event){
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;


   //'<button class="delete-btn">delete</button>';
const userList = document.querySelector('#userList');
const newLi = document.createElement('li');  

//userList.appendChild(newLi);
const obj = {
      username: username,
      email: email,
      phone: phone
  };
const newobj = JSON.stringify(obj);
localStorage.setItem("userDetails", newobj);

const deleteButton=document.createElement("Button");
   deleteButton.textContent="Delete";
   deleteButton.className="delete-btn";
   //deleteButton.onclick=handleclick;
   deleteButton.onclick = function() {
    // Remove the list item when the delete button is clicked
    userList.removeChild(newLi);
    // Also remove the user details from local storage (if needed)
    localStorage.removeItem("userDetails");
  };
  
newLi.textContent = `${username} - ${email} - ${phone}`;
newLi.appendChild(deleteButton); 
console.log(newLi);
         userList.appendChild(newLi);
       
  


  
 
}
// const dltbtn=document.getElementsByClassName("delete-btn");

//module.exports = handleFormSubmit;