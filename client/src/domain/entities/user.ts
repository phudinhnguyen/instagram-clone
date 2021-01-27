class User {
    _id: string = ''
    fullName: string = ''
    userName: string = ''
    phone: number = 0
    email: string = ''
    password: string = ''
    avatar: string = ''

    constructor(user) {
        if (!user) return
        Object.keys(this).forEach(key => {
            if (user[key]) {
                this[key] = user[key]
            }
        })
    }
}

export default User