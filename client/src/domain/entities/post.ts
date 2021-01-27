import Comment from "./comment"
import User from "./user"

class Post {
    _id: string = ''
    author: User = new User({})
    caption: string = ''
    medias: Array<any> = []
    totalLike: number = 0
    totalComment: number = 0
    amILike: number = 0
    listComment: Array<Comment> = []
    topFollowingLikeToo: Array<User> = []

    constructor(post) {
        Object.keys(this).forEach(key => {
            if (post[key]) {
                this[key] = post[key]
            }
        })
    }
}

export default Post