import React from "react";
import MessageList from "../../components/MessageList";
import RoomsList from "../../components/RoomsList";
import useSocket from "../../hooks/useSocket";

export const Chat = () => {
    const { messages, users } = useSocket();
    return (
        <div>
            Chat
            <p>Messages: {messages.length}</p>
            <p>Users: {users.length}</p>
            <RoomsList />
            <MessageList />
        </div>
    );
};
