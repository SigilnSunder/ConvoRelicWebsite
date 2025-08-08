document.addEventListener('DOMContentLoaded', () => {
    const ideaForm = document.getElementById('idea-form');
    const successMessage = document.getElementById('success-message');

    ideaForm.addEventListener('submit', (event) => {
        // Stop the form from reloading the page
        event.preventDefault();

        const formData = new FormData(ideaForm);

        // Send the data to Netlify
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Success! Hide the form and show the message.
            ideaForm.style.display = 'none';
            successMessage.style.display = 'block';
        })
        .catch((error) => {
            // Handle errors if the submission fails
            console.error('Form submission error:', error);
            alert('Sorry, there was a problem. Please try again.');
        });
    });
});
