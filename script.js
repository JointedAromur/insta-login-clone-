document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = id('username');
    const passwordInput = id('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real app, you would send this to a server
        console.log('Attempting login with:', usernameInput.value);
        alert('This is a demo page. Data was not sent.');
    });

    function id(name) {
        return document.getElementById(name);
    }
});