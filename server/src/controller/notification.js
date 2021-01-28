const Notification = require("../model/notification")
const { ObjectID } = require("mongodb")
const userController = require("../controller/user")
const commentController = require("../controller/comment")
const postController = require("../controller/post")
const notification = require("../model/notification")

let notificationController = {}

notificationController.insert = async (data) => {
    const notifications = await Notification.insertMany(data)
    return notifications
}

notificationController.getByFilter = async (filter = {}, projection = {}, loadmore = {}) => {
    const { limit, skip } = loadmore
    const notifications = await Notification.find(filter, projection).limit(limit).skip(skip)
    return notifications
}

notificationController.getById = async (id, projection = {}) => {
    const [notification] = await notificationController.getByFilter({ _id: ObjectID(id) }, projection)
    return notification
}

notificationController.updateByFilter = async (filter, dataUpdate) => {
    await Notification.updateMany(filter, dataUpdate)
    return true
}

notificationController.updateById = async (id, dataUpdate) => {
    await notificationController.updateByFilter({ _id: ObjectID(id) }, dataUpdate)
    return true
}

notificationController.deleteByFilter = async (filter) => {
    await Notification.remove(filter)
    return true
}

notificationController.deleteById = async (id) => {
    await notificationController.deleteByFilter({ _id: id })
    return true
}

notificationController.emitNotification = (notification, io) => {
    const detailNotification = notificationController.getDetail(notification)

    notification.receiver.forEach(receiver => {
        io.emit(`notification/${receiver}`, detailNotification)
    })
}

notificationController.checkType = (type) => {
    switch (type) {
        case 0: return "like"
        case 1: return "comment"
        case 2: return "tag"
        case 3: return "follow"
        case 4: return "accept"
        case 5: return "post"
    
        default: return null
    }
}

notificationController.getDetail = async (notification) => {
    let detailNotification = {
        type: notification.type
    }

    detailNotification.createdby = await userController.getById(notification.createdBy)
    detailNotification.post = await postController.getById(notification.postId)

    if (notificationController.checkType(notification.type) == "comment") {
        detailNotification.actionContent = notification.actionContent
    }


    return detailNotification
}

notificationController.getListNotificationOfUser = async (userId, loadmore = {}) => {
    let notifs = await notificationController.getByFilter({
        receiver: {
            $elemMatch: { $eq: ObjectID(userId) }
        }
    }, {}, loadmore)
    
    let listNotifDetail = []

    for (let index = 0; index < notifs.length; index++) {
        let notifDetail = await notificationController.getDetail(notifs[index])
        listNotifDetail.push(notifDetail)
    }

    return listNotifDetail
}

module.exports = notificationController