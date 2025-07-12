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

// Dark mode toggle
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Fade-in on scroll
const posts = document.querySelectorAll('.blog-post');

function revealPosts() {
  posts.forEach(post => {
    const windowHeight = window.innerHeight;
    const postTop = post.getBoundingClientRect().top;
    const revealPoint = 100;

    if (postTop < windowHeight - revealPoint) {
      post.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts);
