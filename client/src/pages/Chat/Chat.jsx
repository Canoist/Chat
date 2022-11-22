import React from "react";
import useSocket from "../../hooks/useSocket";

export const Chat = () => {
    const { messages, users, rooms } = useSocket();
    console.log("from chat ", rooms);
    return (
        <div>
            Chat
            <p>Messages: {messages}</p>
            <p>Users: {users}</p>
        </div>
    );
};
