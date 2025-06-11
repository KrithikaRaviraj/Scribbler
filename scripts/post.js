document.addEventListener('DOMContentLoaded', function () {
    // Edit/Save functionality
    const editBtn = document.getElementById('edit-post-btn');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    let isEditing = false;

    editBtn.addEventListener('click', function () {
        if (!isEditing) {
            isEditing = true;
            postTitle.contentEditable = "true";
            postContent.contentEditable = "true";
            postTitle.classList.add('editable');
            postContent.classList.add('editable');
            editBtn.innerHTML = 'Save <i class="fa fa-save"></i>';
            editBtn.classList.remove('edit-btn');
            editBtn.classList.add('save-btn');
            postTitle.focus();
        } else {
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

    // Like button functionality
    const likeBtn = document.getElementById('like-btn');
    const likeMsg = document.getElementById('like-msg');
    let likeCount = 0;

    likeBtn.addEventListener('click', function () {
        likeCount++;
        likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
        if (likeCount === 1) {
            likeMsg.textContent = '1 person likes this!';
        } else {
            likeMsg.textContent = `${likeCount} person likes this!`;
        }
    });


    // Comment functionality
    const commentBtn = document.getElementById('comment-btn');
    const commentInput = document.getElementById('comment-input');
    const allComments = document.getElementById('all-comments');

    commentBtn.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
             commentDiv.className = 'comment';
            allComments.prepend(commentDiv);
            commentInput.value = '';
        }
    });
});
