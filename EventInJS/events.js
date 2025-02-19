// function changeText() {
//     let heading = document.getElementsByTagName("h1")[0];
//     heading.textContent = "Hello jii kaise ho sab?"; 
// }

// let heading = document.getElementsByTagName("h1")[0];
// heading.addEventListener('click', changeText); 

// heading.removeEventListener('click', changeText);



// Avoiding to many event Listners to improve the performance of the website

// let para = document.querySelectorAll('p');
// for(let a=0; a<para.length; a++){
//     para[a].addEventListener('click', function(){
//         alert("You have clicked on para - "+ a)
//     })
// }

// let para = document.querySelectorAll('p');
// function alertMsg(event){
//     alert("You have clicked on prar - " + event.target.textContent)
// }

// for(let i=0; i<para.length; i++){
//     para[i].addEventListener('click', alertMsg);
// }

function alertMsg(event){
    alert("You have clicked on prar - " + event.target.textContent)
}

let div = document.getElementsByTagName('div');
document.addEventListener('click', alertMsg)


document.addEventListener("DOMContentLoaded", function () {
    let heading = document.querySelector("h1"); 
    heading.textContent = "DOM is fully loaded!"; 
});
