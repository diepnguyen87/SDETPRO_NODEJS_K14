const Post = require('./Post')

class RequestHandler {

    async getTargetPost(url, userID, postID) {
        let postsModelByUserID = await this.getAllPostsByUserID(url, userID)
        
        if(postsModelByUserID === "eUserID"){
            return postsModelByUserID;
        }

        let targetPostModel = postsModelByUserID.filter(function (postModel) {
            return postModel.postID === postID
        })[0]

        if(targetPostModel === undefined){
            return "ePostID"
        }
        
        return targetPostModel
    }

    async getAllPostsByUserID(url, userID) {
        let response = await fetch(url)
        let allPosts = await response.json()
        let allPostsByUserID = allPosts.filter(function (post) {
            return post.userId === userID;
        })

        if(allPostsByUserID.length === 0){
            return "eUserID";
        }

        let postsModel = []
        allPostsByUserID.forEach(post => {
            postsModel.push(new Post(post.userId, post.id, post.title, post.body))
        });
        return postsModel;
    }
}

module.exports = RequestHandler