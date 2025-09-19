document.querySelector('form.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    console.log(`Email: ${email}, Password: ${password}`);
    if (email === '' || password === '') {
        alert('All fields must be filled!');
    } else {
        const formData = { email, password };
        console.log(formData);
        event.target.reset();
    }
});
