const readline = require("readline-sync");
const Service = require("./Service");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

(async function run() {
    let postID = readline.question("Input postID: ");
    let selectedPost = await Service.getSelectedPost(BASE_URL, SLUG, postID)
    Service.showPostContent(selectedPost)

    let userID = readline.question("Input userID: ")
    let allPost = await Service.getSelectedPost(BASE_URL, SLUG)
    let allPostByUserID = Service.filterPostByUserID(allPost, userID)
    console.log(allPostByUserID);
})()