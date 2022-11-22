const { logMagenta, logBgWhite } = require("../../config/utils/styledLogs");

const messages = {};

module.exports = () => {
    logMagenta("working with messageS");
    const { roomId } = socket;

    const updateMessageList = () => {
        io.to(roomId).emit("message_list:update", messages[roomId]);
    };

    socket.on("message:get", () => {
        logBgWhite("Get messages from DB");
    });

    socket.on("message:add", (message) => {
        logBgWhite("Create message at DB");
    });

    socket.on("message:remove", (message) => {
        const { messageId, messageType, textOrPathToFile } = message;
        logBgWhite("Delete message from DB");
        messages[roomId] = messages[roomId].filter(
            (message) => message.messageId !== messageId
        );

        updateMessageList();
    });
};
