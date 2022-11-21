import React, { useState } from "react";
import PropTypes from "prop-types";
import RoomList from "../components/dialogsComponents/roomList";
import Chat from "../components/chatWindowComponents/chat";

const Messenger = ({ rooms }) => {
    const [currentRoom, setCurrentRoom] = useState(rooms[0]);
    const handleRoomChange = (id) => {
        const index = rooms.findIndex((room) => room.roomId === id);
        setCurrentRoom(rooms[index]);
    };
    return (
        <div className="messenger">
            <RoomList rooms={rooms} toggleRoom={handleRoomChange} />
            <Chat room={currentRoom} />
        </div>
    );
};

Messenger.propTypes = {
    rooms: PropTypes.array,
};

export default Messenger;
