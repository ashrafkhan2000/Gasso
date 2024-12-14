// JavaScript for handling the backend functionality of the login button

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        // Send a POST request to the backend API
        const response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // Handle the response
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                alert('Login successful! Redirecting...');
                window.location.href = 'test.html'; // Redirect to the dashboard
            } else {
                alert('Login failed: ' + result.message);
            }
        } else {
            throw new Error('Network error occurred');
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
