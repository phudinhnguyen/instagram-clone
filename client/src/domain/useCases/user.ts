import User from "@entities/user";
import UserRepository from "src/adapters/repository/user";

class UserInteractor extends UserRepository {
    constructor() {
        super()
    }

    async getUserInfo(userId: string) {
        return await super.getUserInfo(userId).then(res => {
            return new User(res)
        })
    }

    async getFollowing(userId: string) {
        return await super.getFollowing(userId).then(res => {
            return res.map(user => new User(user))
        })
    }

    async getFollowers(userId: string) {
        return await super.getFollowers(userId).then(res => {
            return res.map(user => new User(user))
        })
    }

    async search(data) {
        return await super.search(data).then(res => {
            if (!Array.isArray(res)) return []

            return res.map(user => new User(user))
        })
    }
}

export default UserInteractor