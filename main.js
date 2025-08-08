document.addEventListener('DOMContentLoaded', () => {
    const ideaForm = document.getElementById('idea-form');
    const successMessage = document.getElementById('success-message');

    ideaForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from submitting the default way

        // ** PASTE THE 'action' URL FROM YOUR GOOGLE FORM HERE **
        const googleFormActionURL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScFh98sHr0Q8lnwreNP8CmCEALRkjlhL9rnIFKnYo5N00ZoQg/formResponse';

        const formData = new FormData(ideaForm);

        // This sends the data to your Google Form.
        // We use 'no-cors' mode because Google doesn't send back a standard response,
        // but the submission will still go through successfully.
        fetch(googleFormActionURL, {
            method: 'POST',
            mode: 'no-cors', // Important!
            body: new URLSearchParams(formData)
        });

        // Because we used 'no-cors', we can't check the response.
        // We'll just assume it was successful.
        ideaForm.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
