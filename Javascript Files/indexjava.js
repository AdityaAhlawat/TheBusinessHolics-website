window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);  
}); 

setTimeout(function() {
    const popup = document.querySelector('.pop-up'); 
    popup.classList.toggle('open');
    }, 3000);
    
const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

function changeWord() {
var cw = wordArray[currentWord];
var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
}

for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
setTimeout(function() {
        cw[i].className = 'letter out';
}, i*80);
}

function animateLetterIn(nw, i) {
setTimeout(function() {
        nw[i].className = 'letter in';
}, 340+(i*80));
}

function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
}

wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
window.onscroll = () => {
    let pos = window.scrollY;
    console.log(pos);
}

const popup = document.querySelector('.pop-up'); 
const close = document.querySelector('.close');

close.onclick = function(){
    popup.classList.toggle('open');
}

