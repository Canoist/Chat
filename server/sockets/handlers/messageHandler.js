const { logBgWhite } = require("../../config/utils/styledLogs");
const Message = require("../../models/Message");
const errorHandler = require("./errorHandler");

const messages = {};

// const message = {
//     messageId: string,
//     content: string,
//     roomId: string,
//     userId: strng,
//     userName: string,
// };

module.exports = (io, socket) => {
    const { roomId } = socket;

    const updateMessageList = () => {
        io.to(roomId).emit("message_list:update", messages[roomId]);
    };

    socket.on("message:get", async () => {
        try {
            const messagesFromDB = await Message.find({ roomId });

            messages[roomId] = messagesFromDB;

            updateMessageList();
        } catch (error) {
            errorHandler(error);
        }
    });

    socket.on("message:add", (message) => {
        logBgWhite("Create message at DB");
        try {
            Message.create(message);
            // for client side
            message.createdAt = Date.now();

            messages[roomId].push(message);

            updateMessageList();
        } catch (error) {
            errorHandler(error);
        }
    });

    socket.on("message:delete", (message) => {
        const { messageId } = message;
        logBgWhite("Delete message from DB");
        try {
            Message.deleteOne({ messageId });

            messages[roomId] = messages[roomId].filter(
                (message) => message.messageId !== messageId
            );

            updateMessageList();
        } catch (error) {
            errorHandler(error);
        }
    });
};
