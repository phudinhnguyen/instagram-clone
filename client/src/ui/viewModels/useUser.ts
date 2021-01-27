import { useAsync } from "@hook/useAsync"
import UserPresenter from "src/adapters/presentation/user"
const { getUserInfo, getProfile, search } = new UserPresenter()
const useUser = () => {

    return {
        getUserInfo,
        getProfile,
        search: useAsync(search)[0]
    }
}

export default useUser