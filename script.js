document.querySelectorAll('.comments form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const postId = this.getAttribute('data-post');
    const name = this.name.value.trim();
    const message = this.message.value.trim();
    const commentList = document.getElementById(`comments-${postId}`);

    if (name && message) {
      const comment = document.createElement('p');
      comment.innerHTML = `<strong>${name}:</strong> ${message}`;
      commentList.appendChild(comment);
      this.reset();
    }
  });
});


window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts);
