document.getElementById("blog-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const title = document.getElementById("tittle").value.trim();
  const content = document.getElementById("content").value.trim();
  const error = document.getElementById("error-message");

  if (!username || !title || !content) {
    error.style.display = "block";
    return;
  } else {
    error.style.display = "none";
  }

  const blogPost = { username, title, content };
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  blogPosts.push(blogPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  window.location.href = "blog.html";
});
   