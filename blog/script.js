document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts");
    const posts = [
        { title: "My First Safari Trip", link: "posts/first-trip.md" },
    ];
    
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2><a href="${post.link}">${post.title}</a></h2>`;
        postsContainer.appendChild(postElement);
    });
});
