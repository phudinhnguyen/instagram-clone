import AuthRepository from "src/adapters/repository/auth"
import User from "../entities/user"

class AuthInteractor extends AuthRepository {
    constructor() {
        super()
    }
    async login(data) {
        return await super.login(data).then(res => {
            const { token, userInfo = {} } = res
            return {
                token: token,
                userInfo: new User(userInfo)
            }
        })
    }
}

export default AuthInteractor