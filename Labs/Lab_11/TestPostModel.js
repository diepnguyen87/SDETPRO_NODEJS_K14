const readline = require("../../node_modules/readline-sync");
const RequestHandler = require("./RequestHandler")

const BASE_URL = "https://jsonplaceholder.typicode.com";
const SLUG = "/posts";

let postID = Number(readline.question("Input postID: "));
let userID = Number(readline.question("Input userID: "));

async function run() {
    let targetURL = `${BASE_URL}${SLUG}`
    let requestHandler = new RequestHandler();

    //// get tartgetPost by userID and postID
    let targetPost = await requestHandler.getTargetPost(targetURL, userID, postID)
    if(targetPost === "eUserID"){
        console.log("The entered UserID is incorrect. Pls try again!!!");
    }else if(targetPost === "ePostID"){
        console.log("The entered PostID is incorrect. Pls try again!!!");
    }else{
        console.log(targetPost);
    }

    // get all posts by UserID
    let allPostsByUserID = await requestHandler.getAllPostsByUserID(targetURL, userID)
    if(allPostsByUserID === "eUserID"){
        console.log("The entered UserID is incorrect. Pls try again!!!");
    }else{
        console.log(allPostsByUserID);
    }
}

run();