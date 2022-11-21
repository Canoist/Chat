import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomList from "../components/roomsComponents/roomList";
import Chat from "../components/chatWindowComponents/chat";
import socket from "../utils/socket";

const Messenger = ({ rooms, userName, roomId }) => {
    const [currentRoom, setCurrentRoom] = useState(
        ...rooms.filter((room) => room.roomId === roomId)
    );
    const handleRoomChange = (id) => {
        const index = rooms.findIndex((room) => room.roomId === id);
        setCurrentRoom(rooms[index]);
        socket.emit("ROOM:JOIN", { roomId: rooms[index].roomId, userName });
    };
    return (
        <div className="messenger">
            <RoomList rooms={rooms} toggleRoom={handleRoomChange} />
            <Chat room={currentRoom} userName={userName} />
        </div>
    );
};

Messenger.propTypes = {
    rooms: PropTypes.array,
    userName: PropTypes.string,
};

export default Messenger;
