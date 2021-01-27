import { useAsync } from "@hook/useAsync"
import PostPresenter from "src/adapters/presentation/post"

const { getlistPosts } = new PostPresenter()

const uselistPosts = (listPostsStore) => {

    return {
        listPosts: Object.values(listPostsStore),
        getlistPosts: useAsync(getlistPosts)[0]
    }
}

export default uselistPosts