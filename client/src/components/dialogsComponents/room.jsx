import React from "react";
import PropTypes from "prop-types";

const Room = ({ roomId, toggleRoom }) => {
    return (
        <div>
            <button
                type="button"
                className="btn btn-info m-2 room-list-item"
                onClick={() => {
                    toggleRoom(roomId);
                }}>
                <p>{roomId}</p>
            </button>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.string,
    toggleRoom: PropTypes.func,
};

export default Room;
