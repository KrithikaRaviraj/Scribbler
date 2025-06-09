document.addEventListener('DOMContentLoaded', function() {
    // Show modal when Sign Up is clicked
    document.getElementById('signup-btn').onclick = function() {
        document.getElementById('signup-modal').style.display = 'block';
    };
    // Hide modal when close is clicked
    document.getElementById('close-signup').onclick = function() {
        document.getElementById('signup-modal').style.display = 'none';
    };
    // Hide modal when clicking outside modal content
    window.onclick = function(event) {
        var modal = document.getElementById('signup-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});