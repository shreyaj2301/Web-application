document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load Theme
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && email && validateEmail(email)) {
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid name and email.');
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (name && validateEmail(email) && validatePhone(phone) && message) {
            alert('Thank you for contacting us!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    //Form validation functions
    function validateEmail(email) {
       const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
  }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
       return re.test(String(phone));
    }



    // Loading Spinner
    window.addEventListener('load', () => {
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = 'none';
    });

    // Show loading spinner on page load
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
        question.classList.toggle('active');
    });
});

