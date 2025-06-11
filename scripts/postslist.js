document.addEventListener('DOMContentLoaded', function() {
    let deleteModal = document.getElementById('delete-modal');
    let postToDelete = null;

    document.querySelectorAll('.icon.trash').forEach(icon => {
        icon.addEventListener('click', function() {
            postToDelete = this.closest('.post-card');
            deleteModal.style.display = 'flex';
        });
    });

    document.getElementById('delete-no').onclick = function() {
        deleteModal.style.display = 'none';
        postToDelete = null;
    };
    document.getElementById('delete-yes').onclick = function() {
        if (postToDelete) postToDelete.remove();
        deleteModal.style.display = 'none';
        postToDelete = null;
    };

    // Ellipsis click
    document.querySelectorAll('.icon.ellipsis').forEach(icon => {
        icon.addEventListener('click', function() {
            window.location.href = 'post.html';
        });
    });

    // close modal on outside click
    window.onclick = function(event) {
        if (event.target === deleteModal) {
            deleteModal.style.display = 'none';
            postToDelete = null;
        }
    };
});
