import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import localStorageService from "../services/localStorageService";

const useSocket = () => {
    const [users, setUsers] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [log, setLog] = useState(null);
    const userData = localStorageService.getUserData();

    const { current: socket } = useRef(
        io("http://localhost:8000", {
            query: {
                roomId: userData.roomId,
                userName: userData.userName,
            },
        })
    );

    useEffect(() => {
        socket.emit("user:add", userData);

        socket.emit("message:get");

        socket.on("log", (log) => {
            setLog(log);
        });

        socket.on("rooms:update", (rooms) => {
            setRooms(rooms);
        });

        socket.on("user_list:update", (users) => {
            setUsers(users);
        });

        socket.on("message_list:update", (messages) => {
            setMessages(messages);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendMessage = (message) => {
        socket.emit("message:add", message);
    };

    const deleteMessage = (message) => {
        socket.emit("message:delete", message);
    };

    return { users, rooms, messages, log, sendMessage, deleteMessage };
};

export default useSocket;