const messageHandler = require("./handlers/messageHandler");
const userHandler = require("./handlers/userHandler");

const rooms = [];

module.exports = (io, socket) => {
    const { roomId, userName } = socket.handshake.query;

    socket.roomId = roomId;
    socket.userName = userName;

    if (!rooms.some((room) => room.roomId === roomId)) {
        rooms.push({ roomId, author: userName });
    }
    socket.join(roomId);
    socket.emit("rooms:update", rooms);

    userHandler(io, socket);

    messageHandler(io, socket);
};
