
// JavaScript for Forgot Password functionality

document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    forgotPasswordForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            // Simulate sending the reset link (replace this with actual API call)
            console.log('Sending password reset link to:', email);

            // Mock success response
            setTimeout(() => {
                alert('A password reset link has been sent to your email address.');
                forgotPasswordForm.reset(); // Clear the form
            }, 1000);
        } catch (error) {
            console.error('Error sending reset link:', error);
            alert('Failed to send reset link. Please try again later.');
        }
    });

    // Utility function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
