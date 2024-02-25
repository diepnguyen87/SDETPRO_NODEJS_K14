let usID

async function getSelectedPost(baseURL, slug, postID='') {
    let targetURL = baseURL + slug + "/" + postID
    let response = await fetch(targetURL)
    let returnedPost = await response.json()
    return returnedPost
}

function showPostContent(post) {
    if(post === null || post === undefined){
        console.log("Post is null or underfined");
    }else if (Object.keys(post).length === 0) {
        console.log("The entered PostID" + " does not available");
    } else {
        console.log(post);
    }
}

function filterPostByUserID(allPost, userID){
    usID = userID
    return allPost.filter(getPostByUserID)
}

function getPostByUserID(item, index, array) {
    if (item.userId == usID) {
        return true
    }
}

module.exports = {
    getSelectedPost: getSelectedPost,
    showPostContent: showPostContent,
    filterPostByUserID: filterPostByUserID
}
