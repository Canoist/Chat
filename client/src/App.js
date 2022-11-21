import React, { useState, useReducer } from "react";
import ConnectUserWindow from "./layouts/connectUserWindow";
import Messenger from "./layouts/messenger";
import roomsService from "./services/roomsService";
import reducer from "./utils/reducer";

const roomsBase = [
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
const rooms = roomsBase.slice();

function App() {
    const [dialogCheck, setDialogCheck] = useState(rooms[0]);
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        userName: null,
        roomId: null,
    });

    const handleChange = (value) => {
        setUserName(value);
        setError("");
    };

    const handleLogin = async () => {
        if (userName.length < 2) {
            setError("userName sholud be more than 1 symbols");
            return;
        }
        try {
            const data = await roomsService.post({ userName });
            dispatch({
                type: "JOIN",
                payload: {
                    joined: true,
                    userName: userName,
                    roomId: data.roomId,
                },
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleRoomChange = (id) => {
        const roomId = rooms.findIndex((c) => c._id === id);
        setDialogCheck(rooms[roomId]);
    };

    return state.joined ? (
        <Messenger
            rooms={rooms}
            toggleRoom={handleRoomChange}
            dialogCheck={dialogCheck}
        />
    ) : (
        <ConnectUserWindow
            value={userName}
            onChange={handleChange}
            connect={handleLogin}
            error={error}
        />
    );
}

export default App;
