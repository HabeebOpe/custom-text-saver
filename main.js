const btnSave = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');
const emptyEl = [];

btnSave.addEventListener('click', function(){
        
        emptyEl.push(inputEl.value);
        inputEl.value = ""
        renderLead()
})
function renderLead(){

let listItems = "";

for (i = 0; i < emptyEl.length; i++){
       listItems += `
       <li>${emptyEl[i]} ${emptyEl[i]}
       </li> `
}
ulEl.innerHTML = listItems
}
