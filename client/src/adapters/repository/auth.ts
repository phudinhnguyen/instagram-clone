import CONFIG from "@config/index"
import User from "@entities/user"
import { decode } from "jsonwebtoken"
import httpRepository from "./http"
class AuthRepository {

    async register(payload) {
        return await httpRepository.execute({
            path: '/auth/register',
            method: 'post',
            payload,
            config: { isPrivate: false }
        })
    }

    async login(payload) {
        return await httpRepository.execute({
            path: '/auth/login',
            method: 'post',
            payload,
            config: { isPrivate: false }
        })
    }

    setToken(token) {
        if (typeof token == 'string') {
            localStorage.setItem(CONFIG.TOKEN_LOCALSTORANGE_FEILD, token)
        }
    }

    getToken() {
        const token: string = localStorage.getItem(CONFIG.TOKEN_LOCALSTORANGE_FEILD)
        return token
    }

    getInfoFromToken() {
        const token = this.getToken()
        const userInfo: User = new User(decode(token))
        return userInfo
    }
}

export default AuthRepository