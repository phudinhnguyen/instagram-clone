import AuthRepository from "@repository/auth";
import store from "@stores/index";
import profileStore from "@stores/profile";
import userInfoStore from "@stores/userInfo";
import UserInteractor from "@useCases/user";

class UserPresenter extends UserInteractor {
    constructor() {
        super()
    }

    async getProfile() {
        const userInfo = new AuthRepository().getInfoFromToken()
        return await super.getUserInfo(userInfo._id).then(res => {
            store.dispatch(profileStore.actions.fetchProfile(res))
            return res
        })
    }

    async getUserInfo(userId: string) {
        return await super.getUserInfo(userId).then(res => {
            store.dispatch(userInfoStore.actions.fetchUser(res))
            return res
        })
    }
}

export default UserPresenter