import Comment from "./comment"
import Post from "./post"
import User from "./user"

class NotificationEntity {

    type: 0 | 1 | 2 = 0
    createdby: User = new User({})
    actionContent?: Comment = new Comment({})
    receiver: Array<User> = []
    impactedObject: Post | Comment

    constructor(notification) {
        Object.keys(this).forEach(key => {
            if (notification[key]) {
                this[key] = notification[key]
            }
        })
    }
}

export default NotificationEntity