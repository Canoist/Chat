const { logBgRed, logBgMagenta } = require("../../config/utils/styledLogs");

const users = {};

module.exports = (io, socket, rooms) => {
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
        if (!users[roomId]) {
            return;
        }

        socket.to(roomId).emit("log", `User ${userName} disconnected`);

        users[roomId] = users[roomId].filter(
            (user) => user.socketId !== socket.id
        );

        updateUserList();

        logBgRed("a user disconnected " + socket.userName);
        const index = rooms.findIndex(
            (room) => room.author === socket.userName
        );
        if (rooms[index]) {
            logBgMagenta(rooms[index].roomId);
            socket.emit(
                "log",
                `Room with roomId ${rooms[index].roomId} was closed`
            );
            rooms.splice(index, 1);
            io.emit("rooms:update", rooms);
        }
    });
};
