import httpRepository from "./http"

class UserRepository {
    async getUserInfo(userId) {
        return await httpRepository.execute({
            path: `/user/${userId}`
        })
    }

    async getFollowing(userId) {
        return await httpRepository.execute({
            path: `/user/${userId}/followings`
        })
    }

    async editProfile(userId, payload) {
        return await httpRepository.execute({
            path: `/user/${userId}`,
            method: "put",
            payload
        })
    }

    async getFollowers(userId) {
        return await httpRepository.execute({
            path: `/user/${userId}/followers`
        })
    }

    async follow(payload) {
        return await httpRepository.execute({
            path: `/user/follow`,
            method: "post",
            payload
        })
    }

    async unfollow(payload) {
        return await httpRepository.execute({
            path: `/user/unfollow`,
            method: "post",
            payload
        })
    }

    async search(payload) {
        return await httpRepository.execute({
            path: `/user/search`,
            method: "post",
            payload
        })
    }
}

export default UserRepository