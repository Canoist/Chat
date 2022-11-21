import React, { useState, useReducer } from "react";
import ConnectUserWindow from "./layouts/connectUserWindow";
import Messenger from "./layouts/messenger";
import roomsService from "./services/roomsService";
import reducer from "./utils/reducer";

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
    const [error, setError] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        username: null,
        roomId: null,
    });

    const handleChange = (value) => {
        setUsername(value);
        setError("");
    };

    const handleLogin = async () => {
        if (username.length < 2) {
            setError("Username sholud be more than 1 symbols");
            return;
        }
        try {
            const data = await roomsService.post({ username });
            dispatch({
                type: "JOIN",
                payload: {
                    joined: true,
                    username: username,
                    roomId: data.roomId,
                },
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDialogChange = (id) => {
        const dialogId = dialogs.findIndex((c) => c._id === id);
        setDialogCheck(dialogs[dialogId]);
    };

    return state.joined ? (
        <Messenger
            dialogs={dialogs}
            handleDialogChange={handleDialogChange}
            dialogCheck={dialogCheck}
        />
    ) : (
        <ConnectUserWindow
            value={username}
            onChange={handleChange}
            connect={handleLogin}
            error={error}
        />
    );
}

export default App;
