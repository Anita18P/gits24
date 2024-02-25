const form=document.querySelector("form");
function handleonsubmit(event){
    event.preventDefault();
    const expensen=event.target.expenseAmt.value;
    const desc=event.target.desc.value;
    const category=event.target.category.value;
      document.getElementById("iexpenseAmt").value='';
      document.getElementById("idesc").value='';
      document.getElementById("icategory").value='';
    const ulexpenses=document.querySelector("#ulexpenses");
    const newLi=document.createElement('li');
    const obj={
        expense:expensen,
        description:desc,
        category:category,

    };
    const newobj=JSON.stringify(obj);
    localStorage.setItem(`${expensen}`, newobj);
    
    const deleteButton=document.createElement('button');
      deleteButton.id="delete-button";
      deleteButton.textContent="Delete Expense";
      const editButton=document.createElement("Button");
      editButton.textContent="Edit Expense";
         editButton.id="Edit-btn";
       
       deleteButton.onclick = function() {
        // Remove the list item when the delete button is clicked
        ulexpenses.removeChild(newLi);
        // Also remove the user details from local storage (if needed)
        localStorage.removeItem(expensen);
      };
      editButton.onclick=function(){
       
              ulexpenses.removeChild(newLi);
            const storedUserDetails = JSON.parse(localStorage.getItem(expensen));
               
            document.getElementById("iexpenseAmt").value=storedUserDetails.expense;
            document.getElementById("idesc").value=storedUserDetails.description;
            document.getElementById("icategory").value=storedUserDetails.category;
                
              localStorage.removeItem(expensen);
         };
         newLi.textContent=`${expensen}-${desc}-${category}`;
         newLi.appendChild(deleteButton);
       newLi.appendChild(editButton);
    ulexpenses.appendChild(newLi);

}