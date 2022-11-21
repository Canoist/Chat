import React, { useState, useReducer } from "react";
import ConnectUserWindow from "./layouts/connectUserWindow";
import Messenger from "./layouts/messenger";
import roomsService from "./services/roomsService";
import reducer from "./utils/reducer";
import socket from "./utils/socket";

function App() {
    const [rooms, setRooms] = useState([]);
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
            const { roomId, rooms } = await roomsService.post({ userName });
            dispatch({
                type: "JOIN",
                payload: {
                    joined: true,
                    userName: userName,
                    roomId: roomId,
                },
            });
            setRooms(rooms);
            console.log(rooms);
            socket.emit("ROOM:JOIN", { roomId, userName });
        } catch (error) {
            setError(error.message);
        }
    };

    socket.on("ROOM:JOINED", (users) => {
        console.log("Новый пользователь", users);
    });



    return state.joined ? (
        <Messenger
            rooms={rooms}
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
