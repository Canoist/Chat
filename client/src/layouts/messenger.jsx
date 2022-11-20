import React from "react";
import PropTypes from "prop-types";
import RoomList from "../components/dialogsComponents/roomList";
import Chat from "../components/chatWindowComponents/chat";

const Messenger = ({ dialogs, handleDialogChange, dialogCheck }) => {
    return (
        <div className="messenger">
            <RoomList dialogs={dialogs} toggleDialog={handleDialogChange} />
            <Chat dialog={dialogCheck} />
        </div>
    );
};

Messenger.propTypes = {
    dialogs: PropTypes.array,
    handleDialogChange: PropTypes.func,
    dialogCheck: PropTypes.object,
};

export default Messenger;
