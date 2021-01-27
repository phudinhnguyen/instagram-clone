import httpRepository from "./http"

class PostRepository {
    async create(payload) {
        return await httpRepository.execute({
            path: '/post',
            method: 'post',
            payload,
        })
    }

    async edit(payload) {
        return await httpRepository.execute({
            path: '/post',
            method: 'put',
            payload,
        })
    }

    async remove(postId) {
        return await httpRepository.execute({
            path: `/post/${postId}`,
            method: 'delete',
        })
    }

    async getlistPosts(payload) {
        return await httpRepository.execute({
            path: `/post/newsFeed`,
            method: 'post',
            payload: {}
        })
    }

    async getPostsOfUser(userId: string) {
        return await httpRepository.execute({
            path: `/post/of-user/${userId}`
        })
    }

    async like(postId: string) {
        return await httpRepository.execute({
            path: `/post/${postId}/like`,
            method: 'post',
            payload: {}
        })
    }

    async unlike(postId: string) {
        return await httpRepository.execute({
            path: `/post/${postId}/unlike`,
            method: 'post',
            payload: {}
        })
    }
}

export default PostRepository