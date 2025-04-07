const axios = require("axios");

function fetchAndDisplayPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data.slice(0, 5))
        .then(posts =>
            posts.forEach((post, i) =>
                console.log(`Post ${i + 1}: ${post.title}`)
            )
        )
        .catch(err => console.error("error has occured:", err.message));
}

fetchAndDisplayPosts(); 
