  // JavaScript to remove the typed-text class, allowing for manual updates
const typedTextElement = document.querySelector(".typed-text");
typedTextElement.classList.remove("typed-text");

// Array of text to display
const textArray = [
    "Front End Developer.",
    "Web Developer.",
    "WordPress Developer.",
];

let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // Adjust typing speed here
    } else {
        setTimeout(erase, 2000); // Pause before erasing text
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30); // Adjust erasing speed here
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 1000); // Pause before typing the next text
    }
}

// Start the typing animation
type();
// cirles
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent"); 
    var percent = Math.floor(dots * marked/100);
    var points = "";
    var rotates = 360 / dots;
    for (let i = 0; i <dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotates}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points'); 

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

