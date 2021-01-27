import NotificationEntity from "@entities/notification";
import NoTificationRepository from "@repository/notification";

class NotificationInteractor extends NoTificationRepository {
    async getListNotification(userId) {
        return await super.getListNotification(userId).then(res => {
            if (!Array.isArray(res)) return []
            return res.map(item => {
                console.log('new NotificationEntity(item): ', new NotificationEntity(item));
                return new NotificationEntity(item)
            })
        })
    }
}

export default NotificationInteractor