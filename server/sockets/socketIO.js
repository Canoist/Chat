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
    io.emit("rooms:update", rooms);
    socket.join(roomId);

    userHandler(io, socket, rooms);

    messageHandler(io, socket);
};
