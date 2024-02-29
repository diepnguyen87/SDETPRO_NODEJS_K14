const readline = require("../../node_modules/readline-sync");
const {
    sendRequest,
    showPostPromise,
    showPostsPromise,
    filterAllPostsPromiseByUserID, } = require("./Service");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

let postID = readline.question("Input postID: ");
let userID = Number(readline.question("Input userID: "))

// Print out post content by postID
let targetURL = `${BASE_URL}${SLUG}/${postID}`
let postPromise = sendRequest(targetURL)
showPostPromise(postPromise)

// Print all posts by UserID
targetURL = `${BASE_URL}${SLUG}`
let allPostsPromise = sendRequest(targetURL)
let postsPromiseByUserID = filterAllPostsPromiseByUserID(allPostsPromise, userID)
showPostsPromise(postsPromiseByUserID)