// Wait for the page to load fully
document.addEventListener("DOMContentLoaded", function () {
    console.log("Blog script loaded!");

    // Function to load recent blog posts dynamically
    loadRecentPosts();

    // Function to handle comments if on a blog post page
    if (document.getElementById("comment-section")) {
        loadComments();
    }
});

// Function to dynamically add recent blog posts
function loadRecentPosts() {
    let blogList = document.getElementById("blog-list");
    
    // If the blog list exists, populate it
    if (blogList) {
        let posts = [
            {
                title: "My First Safari Trip",
                image: "images/maya-photo.jpg",
                link: "posts/first-trip.html",
                description: "Join me as I explore Tadoba and meet the legendary tigress, Maya."
            },
            {
                title: "Another Thrilling Safari",
                image: "images/safari-photo.jpg",
                link: "posts/second-trip.html",
                description: "A deep dive into the wild landscapes of India."
            }
        ];

        // Generate blog post HTML dynamically
        let postHTML = "";
        posts.forEach(post => {
            postHTML += `
                <div class="blog-item">
                    <img src="${post.image}" alt="${post.title}">
                    <h3><a href="${post.link}">${post.title}</a></h3>
                    <p>${post.description}</p>
                </div>
            `;
        });

        // Insert into blog list
        blogList.innerHTML = postHTML;
    }
}

// Function to load comments using GitHub Issues (Utterances)
function loadComments() {
    let commentSection = document.getElementById("comment-section");

    // Check if Utterances script is already loaded
    if (!document.querySelector('script[src="https://utteranc.es/client.js"]')) {
        let script = document.createElement("script");
        script.src = "https://utteranc.es/client.js";
        script.setAttribute("repo", "amolbais-coder/wildlife-portfolio");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-light");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        commentSection.appendChild(script);
    }
}
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Lazy Load Images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});
