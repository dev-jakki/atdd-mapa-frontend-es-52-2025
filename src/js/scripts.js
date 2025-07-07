// JavaScript code for adding interactivity to the website

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Clear previous error messages
    document.getElementById('error-message').innerText = '';

    // Name validation
    if (name === '') {
        valid = false;
        document.getElementById('error-message').innerText += 'Name is required.\n';
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '' || !email.match(emailPattern)) {
        valid = false;
        document.getElementById('error-message').innerText += 'Valid email is required.\n';
    }

    // Message validation
    if (message === '') {
        valid = false;
        document.getElementById('error-message').innerText += 'Message cannot be empty.\n';
    }

    return valid;
}

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Interactive effect 1: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive effect 2: Image hover effect
const images = document.querySelectorAll('.portfolio-image');
images.forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});