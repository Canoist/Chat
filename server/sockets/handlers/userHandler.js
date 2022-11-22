const { logMagenta } = require("../../config/utils/styledLogs");

const users = {};

module.exports = (io, socket) => {
    logMagenta("some actions with users");
    const { roomId, userName } = socket;

    if (!users[roomId]) {
        users[roomId] = [];
    }

    const updateUserList = () => {
        io.to(roomId).emit("users_list:update", users[roomId]);
    };

    socket.on("user:add", (user) => {
        socket.to(roomId).emit("log", `User ${userName} connected`);

        user.socketId = socket.id;

        users[roomId].push(user);

        updateUserList();
    });

    socket.on("disconnect", () => {
        if (!users[roomId]) return;

        socket.to(roomId).emit("log", `User ${userName} disconnected`);

        users[roomId] = users[roomId].filter(
            (user) => user.socketId !== socket.id
        );

        updateUserList();
    });
};
