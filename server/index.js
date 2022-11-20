const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors);
const server = http.createServer(app);

const PORT = 8000;

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

const rooms = new Map();

app.get("/rooms", (req, res) => {
    res.json(rooms);
});

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.on("connection", () => {
        console.log("ping");
    });
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log("Server has been started on port " + PORT);
});
