document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const service = document.getElementById('service').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        alert('Login successful! Redirecting to your selected service...');
        localStorage.setItem('token', data.token);
        window.location.href = service; // Redirect based on user selection
    } else {
        alert('Invalid credentials, please try again.');
    }
});

document.getElementById('create-account-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    });

    if (response.ok) {
        alert(`Account created for ${newUsername}! You can now log in.`);
        window.location.href = '/login';
    } else {
        alert('Account creation failed, please try again.');
    }
});
