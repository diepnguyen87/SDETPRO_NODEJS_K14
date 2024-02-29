let uID

function sendRequest(url) {
    return fetch(url)
        .then(response => response.json())
}

function showPost(post) {
    if (post === null || post === undefined) {
        console.log("Requested post is null or underfined");
    } else if (Object.keys(post).length === 0) {
        console.log("The entered postID is incorrect");
    } else {
        console.log(post);
    }
    console.log("===================");
}

function showAllPosts(posts) {
    if (posts === null || posts === undefined) {
        console.log("Requested post is null or underfined");
    } else if (posts.length === 0) {
        console.log("The entered userID is incorrect");
    } else {
        console.log(posts);
    }
    console.log("===================");
}

function showPostPromise(postPromise) {
    console.log("check:", postPromise);
    postPromise.then(post => showPost(post))
}

function showPostsPromise(postsPromise) {
    postsPromise.then(posts => showAllPosts(posts))
}

function filterPostsByUserID(allPosts, userID) {
    uID = userID
    return allPosts.filter(post => post.userId === uID)
}

function filterAllPostsPromiseByUserID(allPostsPromise, userID) {
    return allPostsPromise.then(allPosts => filterPostsByUserID(allPosts, userID))
}

async function getPostByURL(url) {
    let response = await fetch(url)
    let returnedPost = await response.json()
    return returnedPost
}

module.exports = {
    sendRequest,
    showPost,
    showAllPosts,
    showPostPromise,
    showPostsPromise,
    filterPostsByUserID,
    filterAllPostsPromiseByUserID,
    getPostByURL
}
