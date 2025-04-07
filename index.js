const axios = require("axios");

async function fetchPosts() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = response.data;
        posts.slice(0, 5).forEach((post, index) => {
            console.log(`Post ${index + 1} :${post.title}`);
        });
    } catch (error) {
        console.error(`there is an error`, error.message);
    }
}
fetchPosts();