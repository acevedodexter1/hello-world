document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';
    
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;
    
    // Validate username
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // If valid, show success
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        // Here you would typically send data to a server
        console.log({ username, email, password });
        // Reset form
        this.reset();
    }
});
