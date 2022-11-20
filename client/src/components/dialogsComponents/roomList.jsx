import React from "react";
import Room from "./room";

const RoomList = ({ dialogs, toggleDialog }) => {
    return (
        <div className="room-list">
            {dialogs.map((dialog) => (
                <Room
                    chat={dialog}
                    key={dialog._id}
                    toggleDialog={toggleDialog}
                />
            ))}
        </div>
    );
};
export default RoomList;
