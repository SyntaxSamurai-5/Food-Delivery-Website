// Get the modal element and buttons
const contactModal = document.getElementById("contact-modal");
const contactBtn = document.querySelector(".cta-btn"); // The "Get in Touch" button
const closeModal = document.querySelector(".close-modal");

// Open the modal when the "Get in Touch" button is clicked
contactBtn.addEventListener("click", () => {
    contactModal.style.display = "flex"; // Show the modal
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
    contactModal.style.display = "none"; // Hide the modal
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
});

// Handle the form submission (basic example, you can enhance it with real functionality)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get the form data (can be sent to a server via an API call here)
    const name = contactForm.user_name.value;
    const email = contactForm.user_email.value;
    const message = contactForm.message.value;

    alert(`Form submitted! Name: ${name}, Email: ${email}, Message: ${message}`);

    // Close the modal after submission
    contactModal.style.display = "none";

    // Optionally, reset the form
    contactForm.reset();
});
