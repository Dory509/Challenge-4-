const blogPostContainer = document.getElementById("blog-posts");

const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

blogPosts.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.className = "blog-post";
  postElement.innerHTML += `
 <h2>${post.title}</h2>
 <hr/> 
      <p>${post.content}</p>
      <p>
        <em>Posted by ${post.username}</em>
      </p>
`;
  blogPostContainer.appendChild(postElement);
});

document.getElementById("back").addEventListener("click", () => {
  window.location.href = "index.html";
});

const themeButton = document.getElementById("toggle-theme");
themeButton.addEventListener("click", () => {
  console.log(document.body.classList);
  // document.body.classList.toggle("dark-mode");
  var allPosts = document.querySelectorAll(".blog-post");
  allPosts.forEach(post=> {
    post.classList.toggle("dark-mode");  
 });
 document.body.classList.toggle("dark-body");
  themeButton.textContent=document.querySelector(".blog-post").classList.contains("dark-mode")
    ? "light Mode"
    : "Dark Mode";
});
