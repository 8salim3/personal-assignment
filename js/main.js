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