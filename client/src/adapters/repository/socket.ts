import { io, Socket } from "socket.io-client";

class SocketRepository {
    socket: Socket

    constructor(baseUrl?) {
        let socket = io(
            baseUrl || 'http://localhost:9520',
            {
                reconnectionDelay: 1000,
                reconnection: true,
                transports: [ 'websocket' ],
                agent: false,
                upgrade: false,
                rejectUnauthorized: false
            }
        )
        this.socket = socket
    }
}

const socketRepository = new SocketRepository().socket

export default socketRepository