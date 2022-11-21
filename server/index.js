const express = require("express");
const cors = require("cors");
const http = require("http");
const chalk = require("chalk");
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

const log = console.log;
const cyan = chalk.bgCyan;


app.get("/rooms", (req, res) => {
    res.json(rooms);
});

app.get("/rooms/:roomId", (req, res) => {
    const { roomId } = req.params;

    res.json(rooms);
});

app.post("/rooms", (req, res) => {
    const { userName } = req.body;
    let roomId = "Room " + rooms.length;
    rooms.push({
        owner: userName,
        roomId: roomId,
        roomData: { users: [], messages: [] },
    });
    res.json({
        rooms,
        roomId,
    });
});

io.on("connection", (socket) => {
    log(cyan("a user connected", socket.id));
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    log("Server has been started on port " + PORT);
});
