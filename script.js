/* Task 1 */

var heading=document.getElementById('heading')
console.log(heading.textContent);
/* Task 2 using plain JavaScript */
function addText(event){
var p= document.createElement('p')
p.innerText="Hello World"
var div=document.getElementById('task2a')
div.appendChild(p)
}

function addColor(event){
    document.body.style.backgroundColor= event.target.innerText.toLowerCase();
}
function addPage(event){
    window.location.href = "https://www.google.com/";

}


/* Task 4 using jQuery */
