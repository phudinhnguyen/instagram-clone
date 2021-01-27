import socketRepository from "@repository/socket";
import store from "@stores/index";
import notificationsStore from "@stores/notification";
import NotificationInteractor from "@useCases/notification";

class NotificationPresenter extends NotificationInteractor {
    async getListNotification(userId) {
        return await super.getListNotification(userId).then(res => {
            store.dispatch(notificationsStore.actions.fetchList(res))
            return res
        })
    }

    async subcribeNotification(userId) {
        return await socketRepository.on(`notification/${ userId }`, res => {
            store.dispatch(notificationsStore.actions.updateList([ res ]))
            return res
        })
    }
}

export default NotificationPresenter