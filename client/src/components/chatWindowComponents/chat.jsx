import React from "react";
import socket from "../../utils/socket";
// import ChatWrapper from "./chatWrapper";
import InputMessage from "./inputMessage";
import { useState } from "react";

const Chat = () => {
    const [message, setMessage] = useState("");
    const sendMessage = () => {
        const dataMessage = {
            userName,
            message,
            id: Date.now(),
            event: "message",
        };
        socket.emit("message", JSON.stringify(dataMessage));
        setMessage("");
    };

    const handleChange = (value) => {
        setMessage(value);
    };

    return (
        <div className="chat px-2">
            {/* <nav>{dialog.name}</nav> */}
            {/* <ChatWrapper {...rest} userName={userName} /> */}
            <InputMessage
                value={message}
                onChange={handleChange}
                sendMessage={sendMessage}
            />
        </div>
    );
};


export default Chat;
