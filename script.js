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
// Image Automatic Slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

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
