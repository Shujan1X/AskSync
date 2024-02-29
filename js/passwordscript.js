const togglePasswordButton = document.getElementsByClassName('passwordshow');
const passwordInput = document.getElementsByClassName('Input');

togglePasswordButton.addEventListener('click', 
function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordButton.textContent = type === 'password' ? 'Show' : 'Hide';
});

