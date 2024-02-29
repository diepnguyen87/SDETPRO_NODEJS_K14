const readline = require("../../node_modules/readline-sync");
const {
    sendRequest,
    showPost,
    showAllPosts,
    filterPostsByUserID } = require("./Service");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

function printAppMenu() {
    console.log(`
        ====MENU======
        1. Show post by postID
        2. Show all posts by UserID
        0. Exit
        `);
}

async function showSelectedPost() {
    let postID = readline.question("Input postID: ");
    let targetURL = `${BASE_URL}${SLUG}/${postID}`
    let returnedPost = await sendRequest(targetURL)
    await showPost(returnedPost)
}

async function showAllPostsByUserID() {
    let userID = Number(readline.question("Input userID: "))
    let targetURL = `${BASE_URL}${SLUG}`
    let returnedAllPosts = await sendRequest(targetURL)
    let postsByUserID = filterPostsByUserID(returnedAllPosts, userID)
    await showAllPosts(postsByUserID)
}

async function startApp() {
    let isPlaying = true
    while (isPlaying) {
        printAppMenu()
        let selectedOption = Number(readline.question("Enter your option: "))
        switch (selectedOption) {
            case 1:
                await showSelectedPost()
                break;
            case 2:
                await showAllPostsByUserID()
                break;
            case 0:
                console.log(selectedOption);
                isPlaying = false
                break
            default:
                console.log("Incorrect option, enter only 0, 1, 2");
        }
    }
}

startApp()