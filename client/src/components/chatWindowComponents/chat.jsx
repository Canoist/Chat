import React from "react";
import socket from "../../utils/socket";
// import ChatWrapper from "./chatWrapper";
import InputMessage from "./inputMessage";

const Chat = ({ dialog, username, value, resetValue, ...rest }) => {
    const sendMessage = () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: "message",
        };
        socket.emit("message", JSON.stringify(message));
        resetValue("");
    };

    return (
        <div className="chat px-2">
            <nav>{dialog.name}</nav>
            {/* <ChatWrapper {...rest} username={username} /> */}
            <InputMessage
                value={value}
                setValue={resetValue}
                sendMessage={sendMessage}
            />
        </div>
    );
};
export default Chat;
