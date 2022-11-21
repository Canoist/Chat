const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

const PORT = 8000;

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

const rooms = [];

app.get("/rooms", (req, res) => {
    res.json(rooms);
});
app.post("/rooms", (req, res) => {
    let roomId = "Room " + rooms.length;
    rooms.push({
        roomId: roomId,
        roomData: { users: [], messages: [] },
    });
    res.json({
        rooms,
        roomId,
    });
});

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.on("ROOM:JOIN", ({ roomId, userName }) => {
        socket.join(roomId);
        const index = rooms.findIndex((room) => room.roomId === roomId);
        const users = rooms[index].roomData.users;
        users.push({
            socketId: socket.id,
            user: userName,
        });
        socket.broadcast.to(roomId).emit("ROOM:JOINED", users);
    });
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log("Server has been started on port " + PORT);
});
