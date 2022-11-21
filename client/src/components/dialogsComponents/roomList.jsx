import React from "react";
import Room from "./room";
import PropTypes from "prop-types";

const RoomList = ({ rooms, toggleRoom }) => {
    return (
        <div className="room-list">
            {rooms.map((room) => {
                return (
                    <Room
                        roomId={room.roomId}
                        key={room.roomId}
                        toggleRoom={toggleRoom}
                    />
                );
            })}
        </div>
    );
};

RoomList.propTypes = {
    rooms: PropTypes.array,
    toggleRoom: PropTypes.func,
};

export default RoomList;
