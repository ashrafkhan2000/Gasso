document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        // Send a POST request to the backend API
        const response = await fetch('signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // Debugging response (use in development)
        console.log(await response.text());

        // Handle the response
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                alert('Sign-up successful! Redirecting to login page...');
                window.location.href = 'login.html'; // Redirect to the login page
            } else {
                alert('Sign-up failed: ' + result.message);
            }
        } else {
            throw new Error('Network error occurred');
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
