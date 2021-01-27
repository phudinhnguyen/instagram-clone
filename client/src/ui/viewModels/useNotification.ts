import NotificationEntity from "@entities/notification";
import { useAsync } from "@hook/useAsync";
import NotificationPresenter from "src/adapters/presentation/notification";

const { getListNotification, subcribeNotification } = new NotificationPresenter()

const useNotification = (listNotification: Array<NotificationEntity>) => {

    const getContentByType = (notif: NotificationEntity) => {
        switch (notif.type) {
            case 1:
                return notif.actionContent.content
            case 2:
                return notif.actionContent.content

            default:
                return 'like'
        }
    }

    const convertListNotification = (listNotif) => {
        listNotif.map(notif => ({
            ...notif,
            content: getContentByType(notif)
        }))
    }

    return {
        listNotification: convertListNotification(listNotification),
        getListNotification: useAsync(getListNotification)[0],
        subcribeNotification
    }
}

export default useNotification