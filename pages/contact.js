// JavaScript to handle the form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(contactForm);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    // Here you can send the data to the server or use any other method
    alert(`Thank you, ${userName}! Your message has been sent. We will respond to ${userEmail} soon.`);

    // Optionally reset the form
    contactForm.reset();
});
