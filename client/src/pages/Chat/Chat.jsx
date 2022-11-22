import React from "react";
import MessageList from "../../components/MessageList";
import useSocket from "../../hooks/useSocket";

export const Chat = () => {
    const { messages, users, rooms } = useSocket();
    return (
        <div>
            Chat
            <p>Messages: {messages.length}</p>
            <p>Users: {users.length}</p>
            <p>Rooms: {rooms.length}</p>
            <MessageList />
        </div>
    );
};
