import React from "react";
import useSocket from "../hooks/useSocket";
import MessageItem from "./MessageItem";

const MessageList = () => {
    const { messages, log, removeMessage } = useSocket();
    return (
        <div className="container message">
            <h2>Messages</h2>
            <ul className="list message">
                {messages.map((message) => (
                    <MessageItem
                        key={message.messageId}
                        message={message}
                        removeMessage={removeMessage}
                    />
                ))}

                <p className="log">{log}</p>
            </ul>
        </div>
    );
};
export default MessageList;
