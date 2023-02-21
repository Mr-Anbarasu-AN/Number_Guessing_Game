const randomNumber = Math.floor(Math.random() * 100);
var noOfAttempt = 10;
document.getElementById('attempt').innerHTML = noOfAttempt;
const container = document.getElementById('gameSection');
function checkTheNumber() {
const inputedNumber = parseInt(document.getElementById("number").value);
noOfAttempt--;
document.getElementById('attempt').innerHTML = noOfAttempt;
document.getElementById("number").value = '';
if(noOfAttempt == 0) {
container.innerHTML = `<div>

<span class="emoji">&#128542;</span>
<h3>Better luck next time</h3>
</div>`;
} else if(inputedNumber == randomNumber) {
container.innerHTML = `<div>

<span class="emoji">🎉</span>
<h3>CONGRATS!! You have Won the Game:)</h3>

</div>`;

} else if(inputedNumber > 100 || inputedNumber < 1) {
document.getElementById('message').innerHTML = "Enter number between 1 to 100 &#128532;";
}else if(inputedNumber > randomNumber) {
document.getElementById('message').innerHTML = "Guessed number in large &#128532;";
} else if(inputedNumber < randomNumber) {
document.getElementById('message').innerHTML = "Guessed number in smaller &#128532;";
} else {
document.getElementById('message').innerHTML = "Try Again!! Enter valid Number";
}
}