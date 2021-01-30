class User {
    _id: string = ''
    fullName: string = ''
    userName: string = ''
    phone: number = 0
    email: string = ''
    password: string = ''
    avatar: string = ''
    totalFollowing: number = 0
    totalFollower: number = 0
    totalPost: number = 0
    aboutMe: string = ""

    constructor(user) {
        if (!user) return
        Object.keys(this).forEach(key => {
            if (user[ key ]) {
                this[ key ] = user[ key ]
            }
        })
    }
}

export default User