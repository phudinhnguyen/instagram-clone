import Post from "@entities/post";
import PostRepository from "@repository/post";

class PostInteractor extends PostRepository {
    constructor() {
        super()
    }

    async getlistPosts(pagination) {
        return await super.getlistPosts(pagination).then(res => {
            return res.map(post => new Post(post))
        })
    }
}

export default PostInteractor