const readline = require("readline-sync");
const { getPostByURL,
        showPost,
        filterPostsByUserID,
        showAllPosts} = require("./Service");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

(async function run() {
    let postID = readline.question("Input postID: ");
    let selectedPost = await getPostByURL(`${BASE_URL}${SLUG}/${postID}`)
    showPost(selectedPost)

    let userID = Number(readline.question("Input userID: "))
    let allPosts = await getPostByURL(`${BASE_URL}${SLUG}`)
    let postsByUserID = filterPostsByUserID(allPosts, userID)
    showAllPosts(postsByUserID)
})()