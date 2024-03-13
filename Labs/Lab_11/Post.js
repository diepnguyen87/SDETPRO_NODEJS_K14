class Post {
    constructor(userID, postID, postTitle, postBody) {
        this._assignIfDefined('_userID', userID);
        this._assignIfDefined('_postID', postID);
        this._assignIfDefined('_postTitle', postTitle);
        this._assignIfDefined('_postBody', postBody);
    }

    _assignIfDefined(propertyName, value) {
        if (value !== undefined) {
            this[propertyName] = value;
        }
    }

    get userID() {
        return this._userID;
    }

    set userID(userID) {
        this._userID = userID;
    }

    get postID() {
        return this._postID;
    }

    set postID(postID) {
        this._postID = postID;
    }

    get postTitle() {
        return this._postTitle;
    }

    set postTitle(postTitle) {
        this._postTitle = postTitle;
    }

    get postBody() {
        return this._postBody;
    }

    set postBody(postBody) {
        this._postBody = postBody;
    }
}

module.exports = Post