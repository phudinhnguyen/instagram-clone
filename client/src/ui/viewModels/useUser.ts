import { useAsync } from "@hook/useAsync"
import UserPresenter from "src/adapters/presentation/user"
const { getUserInfo, getProfile, search, getRelationship, follow, unfollow } = new UserPresenter()

const useUser = () => {

    return {
        getUserInfo: useAsync(getUserInfo)[0],
        getProfile: useAsync(getProfile)[0],
        getRelationship: useAsync(getRelationship)[0],
        search: useAsync(search)[0],
        follow: useAsync(follow)[0],
        unfollow: useAsync(unfollow)[0],
    }
}

export default useUser