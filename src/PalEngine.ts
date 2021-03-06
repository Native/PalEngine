import * as io from "socket.io-client";

export class Connection {
    public sock: any;
    constructor() {
        var token = this.randomString(15);
        this.sock = io('https://v3.palringo.com:3051/' + '?token=' + token + '&device=bot', { transports: ['websocket'] });
        return this;
    }

    randomString(length: number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}

let connection = new Connection().sock;
connection.on('connect', function() {
    console.log('connected');
});