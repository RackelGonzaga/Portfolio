// Typewriter effect
const text = "Hey, eu sou Web Dev";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Fade-in on scroll
function showOnScroll() {
  const hiddenElements = document.querySelectorAll('.hidden');
  const triggerBottom = window.innerHeight * 0.85;

  hiddenElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.onload = () => {
  typeWriter();
  document.querySelector('#about').classList.add('show');
};
