import React from "react";
// import ChatWrapper from "./chatWrapper";
import InputMessage from "./inputMessage";

const Chat = ({
    dialog,
    connected,
    username,
    socket,
    value,
    resetValue,
    ...rest
}) => {
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
        connected && (
            <div className="chat px-2">
                <nav>{dialog.name}</nav>
                {/* <ChatWrapper {...rest} username={username} /> */}
                <InputMessage
                    value={value}
                    setValue={resetValue}
                    sendMessage={sendMessage}
                />
            </div>
        )
    );
};
export default Chat;
