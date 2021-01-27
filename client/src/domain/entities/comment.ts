class Comment {
    _id: string = ''
    author: string = ''
    postId: string = ''
    parentId: string = ''
    content: string = ''
    tags: Array<string> = []
    child: Array<Comment> = []

    constructor(post) {
        Object.keys(this).forEach(key => {
            if (post[key]) {
                this[key] = post[key]
            }
        })
    }
}

export default Comment