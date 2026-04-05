const text = ["Software Developer", "Python Developer", "Frontend Developer"];
let i = 0, j = 0;
let currentText = "", isDeleting = false;

function type() {
    currentText = text[i];
    
    if (!isDeleting) {
        document.querySelector(".typing").textContent = currentText.substring(0, j++);
    } else {
        document.querySelector(".typing").textContent = currentText.substring(0, j--);
    }

    if (j === currentText.length) isDeleting = true;
    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


document.querySelector('.about-link').addEventListener("click", () => {
    navigateTo('about.html'); 
});
document.querySelector('.skills-link').addEventListener("click", () => {
    navigateTo('skills.html'); 
});
document.querySelector('.projects-link').addEventListener("click", () => {
    navigateTo('projects.html'); 
});
document.querySelector('.contact-link').addEventListener("click", () => {
    navigateTo('contact.html'); 
});


