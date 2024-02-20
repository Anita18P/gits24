const heading=document.createElement('h3');
 const headText=document.createTextNode("Buy high quality organic fruits online");
 heading.appendChild(headText);

const divs=document.getElementsByTagName('div');
const firstDiv=divs[0];
firstDiv.appendChild(heading);
heading.style.fontStyle='italic';

const para=document.createElement('p');
const paraText=document.createTextNode("Total fruits: 4");
para.appendChild(paraText);

const secondDiv=divs[1];
const ul=document.querySelector('.fruits');
secondDiv.insertBefore(para,ul);
para.id="fruits-total"