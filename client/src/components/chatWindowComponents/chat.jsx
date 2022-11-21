import React from "react";
import socket from "../../utils/socket";
// import ChatWrapper from "./chatWrapper";
import InputMessage from "./inputMessage";
import { useState } from "react";
import PropTypes from "prop-types";

const Chat = ({ room }) => {
    const [message, setMessage] = useState();
    console.log("from Chat", room);
    const sendMessage = () => {
        const dataMessage = {
            // userName,
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
            <nav>{room.roomId}</nav>
            {/* <ChatWrapper {...rest} userName={userName} /> */}
            <InputMessage
                value={message}
                onChange={handleChange}
                sendMessage={sendMessage}
            />
        </div>
    );
};

Chat.propTypes = {
    room: PropTypes.object,
};

export default Chat;
