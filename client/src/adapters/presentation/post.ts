import store from "@stores/index";
import listPostsStore from "@stores/listPosts";
import PostInteractor from "@useCases/post";

class PostPresenter extends PostInteractor {
    constructor() {
        super()
    }

    async getlistPosts(pagination) {
        return await super.getlistPosts(pagination).then(res => {
            if (!Array.isArray(res)) return []
            store.dispatch(listPostsStore.actions.fetchListPost(res))
            return res
        })
    }

    async like(postId) {
        return await super.like(postId).then(res => {
            store.dispatch(listPostsStore.actions.updateListPost([{ _id: postId, amILike: 1 }]))
            return res
        })
    }

    async unlike(postId) {
        return await super.unlike(postId).then(res => {
            store.dispatch(listPostsStore.actions.updateListPost([{ _id: postId, amILike: 0 }]))
            return res
        })
    }
}

export default PostPresenter