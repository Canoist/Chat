import React, { useState, useEffect, useReducer } from "react";
import Chat from "./components/chatWindowComponents/chat";
import RoomList from "./components/dialogsComponents/roomList";
import ConnectUserWindow from "./layouts/connectUserWindow";
import Messenger from "./layouts/messenger";
import reducer from "./utils/reducer";
import socket from "./utils/socket";

const dialogsBase = [
    {
        _id: 1,
        name: "Chat 1",
    },
    {
        _id: 2,
        name: "Chat 2",
    },
    {
        _id: 3,
        name: "Chat 3",
    },
];
const dialogs = dialogsBase.slice();

function App() {
    const [dialogCheck, setDialogCheck] = useState(dialogs[0]);
    const [username, setUsername] = useState("");
    const [state, dispatch] = useReducer(reducer, { isAuth: false });

    const onLogin = () => {
        dispatch({
            type: "IS_AUTH",
            payload: true,
        });
    };

    const handleDialogChange = (id) => {
        const dialogId = dialogs.findIndex((c) => c._id === id);
        setDialogCheck(dialogs[dialogId]);
    };

    return state.isAuth ? (
        <Messenger
            dialogs={dialogs}
            handleDialogChange={handleDialogChange}
            dialogCheck={dialogCheck}
        />
    ) : (
        <ConnectUserWindow
            value={username}
            setUserName={setUsername}
            connect={onLogin}
        />
    );
}

export default App;
