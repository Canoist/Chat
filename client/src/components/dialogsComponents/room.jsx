import React from "react";
import PropTypes from "prop-types";

const Room = ({ room, toggleRoom }) => {
    return (
        <div>
            <button
                type="button"
                className="btn btn-info m-2 room-list-item"
                onClick={() => {
                    toggleRoom(room.id);
                }}>
                <p>{room.name}</p>
            </button>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.object,
    toggleRoom: PropTypes.func,
};

export default Room;
