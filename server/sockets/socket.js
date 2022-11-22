const messageHandler = require("./handlers/messageHandler");
const userHandler = require("./handlers/userHandler");

module.exports = (io, socket) => {
    const { roomId, userName } = socket.handshake.query;

    socket.roomId = roomId;
    socket.userName = userName;

    socket.join(roomId);

    userHandler(io, socket);

    messageHandler(io, socket);
};
