const readline = require("../../node_modules/readline-sync");
const Service = require("./ServiceThenable");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

let postID = readline.question("Input postID: ");
let userID = readline.question("Input userID: ")

let targetURL = BASE_URL + SLUG + "/" + postID
fetch(targetURL)
    .then(response => response.json())
    .then(post => Service.showPostContent(post))
    .then(function(){
        targetURL = BASE_URL + SLUG
        return fetch(targetURL)
    })
    .then(response => response.json())
    .then(function(allPost){
        return allPost.filter(getPostByUserID)
    })
    .then(function(postsByUserID){
        Service.showPostContent(postsByUserID)
    })

function getPostByUserID(item, index, array) {
    if (item.userId == userID) {
        return true
    }
}

