function handlesubmit(event){
    const subButton=document.getElementById('sbutton')
     subButton.textContent='Submit';
    event.preventDefault();
    const fb={
        name:event.target.name1.value,
        rate:event.target.selrate.value,
    }
    console.log(fb);
    document.getElementById('iname').value="";
    document.getElementById('srate').value="";
    axios.post("https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback",fb)
    .then((response)=>{
        console.log(response);
        displayOverallRating(response.data,0);
        displayFeedbackDetails(response.data);
    }).catch((err)=>{
        console.log("crud err");
        console.log(err);
    })

}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback")
    .then((response)=>{
       for(var i=0;i<response.data.length;i++){
            displayFeedbackDetails(response.data[i]);
            displayOverallRating(response.data[i],0);
        }
    })
  })
  function displayOverallRating(fDetails, num){
    
    if(fDetails.rate==1 && num==0){
    document.getElementById('first').innerHTML=parseInt(document.getElementById('first').innerHTML)+1;
    }
    else if(fDetails.rate==1 && num==1){
       
        document.getElementById('first').innerHTML=parseInt(document.getElementById('first').innerHTML)-1;
    }
    if(fDetails.rate==2 && num==0){
    document.getElementById('second').innerHTML=parseInt(document.getElementById('second').innerHTML)+1;
    }
    else if(fDetails.rate==2 && num==1){
    document.getElementById('second').innerHTML=parseInt(document.getElementById('second').innerHTML)-1;
    }
    if(fDetails.rate==3 && num==0){
    document.getElementById('third').innerHTML=parseInt(document.getElementById('third').innerHTML)+1;
    }
    else if(fDetails.rate==3 && num==1){
      
    document.getElementById('third').innerHTML=parseInt(document.getElementById('third').innerHTML)-1;
    }
    if(fDetails.rate==4 && num==0){
    document.getElementById('fourth').innerHTML=parseInt(document.getElementById('fourth').innerHTML)+1;
    }
    else if(fDetails.rate==4 && num==1){
    document.getElementById('fourth').innerHTML=parseInt(document.getElementById('fourth').innerHTML)-1;
    }
    if(fDetails.rate==5 && num==0){
    document.getElementById('fifth').innerHTML=parseInt(document.getElementById('fifth').innerHTML)+1;
    }
    else  if(fDetails.rate==5 && num==1){
    document.getElementById('fifth').innerHTML=parseInt(document.getElementById('fifth').innerHTML)-1;
    }
}

  function displayFeedbackDetails(fDetails){
    const ndiv=document.getElementById('ifeedbacks');
    const newLi=document.createElement('li');
    newLi.textContent=`${fDetails.name} ${fDetails.rate}`;
    const deleteButton=document.createElement('button');
    deleteButton.id='delete-btn';
    deleteButton.textContent="DELETE"
    const editButton=document.createElement('button');
    editButton.id='edit-btn';
    editButton.textContent="EDIT";
    deleteButton.addEventListener('click',function(event){
        event.preventDefault();
        ndiv.removeChild(event.target.parentElement);
        
        axios.get("https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback")
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].name===fDetails.name){
                    axios.delete(`https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback/${response.data[i]._id}`)
                    .then((response)=>{
                        console.log(response);
                        console.log(fDetails);
                        displayOverallRating(fDetails,1);
                    }).catch((err)=>{
                        console.log(err);
                    })
                }
            }
        }).catch((err)=>{
            console.log(err);
        })

    });
    editButton.addEventListener('click',function(event){
        event.preventDefault();
        
        document.getElementById('iname').value=fDetails.name;
        document.getElementById('srate').value=fDetails.rate;
        axios.get("https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback")
        .then((response)=>{
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].name===fDetails.name){
                    axios.delete(`https://crudcrud.com/api/3b634fa42ab94cd39f250929d7d81f09/feedback/${response.data[i]._id}`)
                    .then((response)=>{
                        console.log(response);
                        displayOverallRating(fDetails,1);
                    }).catch((err)=>{
                        console.log(err);
                    })
                }
            }
        }).catch((err)=>{
            console.log(err);
        })
        const subButton=document.getElementById('sbutton')
        subButton.textContent='Edit Rating';
        ndiv.removeChild(event.target.parentElement);
       
        })
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    ndiv.appendChild(newLi);
  }