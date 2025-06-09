document.addEventListener('DOMContentLoaded', function() {
    // Sign Up modal logic
    document.getElementById('signup-btn').onclick = function() {
        document.getElementById('signup-modal').style.display = 'block';
    };
    document.getElementById('close-signup').onclick = function() {
        document.getElementById('signup-modal').style.display = 'none';
    };

    // Sign In modal logic
    document.getElementById('signin-btn').onclick = function() {
        document.getElementById('signin-modal').style.display = 'block';
    };
    document.getElementById('close-signin').onclick = function() {
        document.getElementById('signin-modal').style.display = 'none';
    };

    // Clicking outside closes modals
    window.onclick = function(event) {
        var signupModal = document.getElementById('signup-modal');
        var signinModal = document.getElementById('signin-modal');
        if (event.target === signupModal) signupModal.style.display = 'none';
        if (event.target === signinModal) signinModal.style.display = 'none';
    };

    // Switch from Sign In to Sign Up
    document.getElementById('show-signup').onclick = function(e) {
        e.preventDefault();
        document.getElementById('signin-modal').style.display = 'none';
        document.getElementById('signup-modal').style.display = 'block';
    };

    // Prevent form submission for both modals
    document.getElementById('signup-form').onsubmit = function(e) { e.preventDefault(); };
    document.getElementById('signin-form').onsubmit = function(e) { e.preventDefault(); };
});