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
// Typing Animation for Hero Section
const titles = [
    "Computer Science Student",
    "Web Developer",
    "Quant Finance Enthusiast",
    "Problem Solver"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const typedElement = document.getElementById('typedText');
    if (!typedElement) return;

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typedElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(typeAnimation, isDeleting ? 50 : 100);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('typedText')) {
        typeAnimation();
    }
});
// Project Filter
function filterProjects(status) {
    const items = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active-filter'));
    event.target.classList.add('active-filter');

    // Filter projects
    items.forEach(item => {
        if (status === 'all' || item.dataset.status === status) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// Animate Progress Bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease';
            bar.style.width = width;
        }, 300);
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.progress-bar')) {
        animateProgressBars();
    }
});
// Initialize Bootstrap Tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });
});
