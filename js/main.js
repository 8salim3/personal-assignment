// Contact Form Validation
function validateForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Reset previous errors
    [name, email, subject, message].forEach(field => {
        field.classList.remove('is-invalid');
    });

    // Validate name
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    // Validate subject
    if (subject.value.trim() === '') {
        subject.classList.add('is-invalid');
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
    }

    // Show success message if all valid
    if (isValid) {
        document.getElementById('successMessage').classList.remove('d-none');
    }
}
// Dark/Light Mode Toggle
function toggleMode() {
    document.body.classList.toggle('light-mode');

    const btn = document.getElementById('modeToggle');
    if (document.body.classList.contains('light-mode')) {
        btn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}

// Remember theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const btn = document.getElementById('modeToggle');
        if (btn) btn.textContent = '🌙 Dark Mode';
    }
};
// Back to Top Button
window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    if (btn) {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}