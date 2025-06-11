document.addEventListener('DOMContentLoaded', function () {
    const editBtn = document.getElementById('edit-post-btn');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

    let isEditing = false;

    editBtn.addEventListener('click', function () {
        if (!isEditing) {
            // Switch to edit mode
            isEditing = true;
            postTitle.contentEditable = "true";
            postContent.contentEditable = "true";
            postTitle.classList.add('editable');
            postContent.classList.add('editable');
            editBtn.innerHTML = 'Save <i class="fa fa-save"></i>';
            editBtn.classList.remove('edit-btn');
            editBtn.classList.add('save-btn');
        } else {
            // Save changes
            isEditing = false;
            postTitle.contentEditable = "false";
            postContent.contentEditable = "false";
            postTitle.classList.remove('editable');
            postContent.classList.remove('editable');
            editBtn.innerHTML = 'Edit <i class="fa fa-edit"></i>';
            editBtn.classList.remove('save-btn');
            editBtn.classList.add('edit-btn');
        }
    });
});