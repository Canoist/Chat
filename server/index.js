const express = require("express");
const cors = require("cors");
const http = require("http");
const config = require("config");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const { logBgCyan, logGreen, underline } = require("./config/utils/styledLogs");
const errorHandler = require("./sockets/handlers/errorHandler");
const socketIO = require("./sockets/socketIO");

const app = express();
app.use(
    cors({
        origin: config.get("ORIGIN"),
    })
);
app.use(express.json());
const server = http.createServer(app);

const PORT = config.get("PORT") || 8000;

const io = new Server(server, {
    cors: {
        origin: config.get("ORIGIN"),
    },
    serveClient: false,
});

io.on("connection", (socket) => {
    logBgCyan("a user connected", socket.id);
    socketIO(io, socket);
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    logBgCyan("- Server has been started on port " + PORT);
});

async function startDB() {
    try {
        await mongoose.connect(config.get("MONGO_URI"));
        logGreen(underline(`- MongoDB connected`));
    } catch (error) {
        errorHandler(error);
        process.exit(1);
    }
}

startDB();
