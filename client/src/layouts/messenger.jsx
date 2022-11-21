import React from "react";
import PropTypes from "prop-types";
import RoomList from "../components/dialogsComponents/roomList";
import Chat from "../components/chatWindowComponents/chat";

const Messenger = ({ rooms, toggleRoom, dialogCheck }) => {
    return (
        <div className="messenger">
            <RoomList rooms={rooms} toggleRoom={toggleRoom} />
            <Chat dialog={dialogCheck} />
        </div>
    );
};

Messenger.propTypes = {
    rooms: PropTypes.array,
    toggleRoom: PropTypes.func,
    dialogCheck: PropTypes.object,
};

export default Messenger;
