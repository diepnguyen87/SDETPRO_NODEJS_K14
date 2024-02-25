
function showPostContent(post) {
    if (post === null || post === undefined) {
        console.log("Post is null or underfined");
    } else if (Object.keys(post).length === 0) {
        console.log("The entered PostID" + " does not available");
    } else {
        console.log(post);
    }
}

module.exports = {
    showPostContent: showPostContent
}
