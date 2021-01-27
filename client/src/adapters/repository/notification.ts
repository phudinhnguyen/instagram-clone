import httpRepository from "./http";
import socketRepository from "./socket";

class NoTificationRepository {
    async getListNotification(userId) {
        return await httpRepository.execute({
            path: 'notification',
            method: "post",
            payload: { limit: 100, skip: 0 }
        })
    }
}

export default NoTificationRepository