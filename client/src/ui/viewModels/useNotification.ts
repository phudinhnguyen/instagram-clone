import NotificationEntity from "@entities/notification";
import { useAsync } from "@hook/useAsync";
import NotificationPresenter from "src/adapters/presentation/notification";

const { getListNotification, subcribeNotification } = new NotificationPresenter()

const useNotification = (listNotification: Array<NotificationEntity>) => {

    const getContentByType = (notif: NotificationEntity) => {
        switch (notif.type) {
            case 0:
                return "like your photo."
            case 1:
                return `commented: ${ notif.actionContent.content }`
            case 2:
                return `mention you in his photo`
            case 3:
                return notif.actionContent.content

            default:
                return ''
        }
    }

    const convertListNotification = (listNotif) => {
        return listNotif.map(notif => ({
            ...notif,
            content: getContentByType(notif)
        }))
    }

    return {
        listNotification: convertListNotification(listNotification),
        getListNotification: useAsync(getListNotification)[ 0 ],
        subcribeNotification
    }
}

export default useNotification