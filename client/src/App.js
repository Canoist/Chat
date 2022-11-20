import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Chat from "./components/chatWindowComponents/chat";
import RoomList from "./components/dialogsComponents/roomList";

const socket = io("http://localhost:8000");

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
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [dialogCheck, setDialogCheck] = useState(dialogs[0]);

    const handleDialogChange = (id) => {
        const dialogId = dialogs.findIndex((c) => c._id === id);
        setDialogCheck(dialogs[dialogId]);
    };

    useEffect(() => {
        socket.on("connect", () => {
            setIsConnected(true);
        });

        socket.on("disconnect", () => {
            setIsConnected(false);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("pong");
        };
    }, []);

    return (
        <div className="messenger">
            <RoomList dialogs={dialogs} toggleDialog={handleDialogChange} />
            <Chat
                dialog={dialogCheck}
                socket={socket}
                connected={isConnected}
            />
        </div>
    );
}

export default App;
