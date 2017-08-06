const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const button = document.querySelectorAll('.button');

// onload = function(e) {
//     buttons = document.getElementsByClassName('button');
//     for(i=0; i<buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {document.getElementById('inputOutput').innerText += document.getElementById(button[i].).innerText});
//     }
// }

function replyClick(clickedID) {
    alert(clickedID);
}

// button.addEventListener('click', function(){
//     console.log("clicked: " + event.target);
// });