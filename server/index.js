const express = require("express");
const cors = require("cors");
const http = require("http");
const chalk = require("chalk");
const config = require("config");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

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
        origin: "*",
    },
});

const logBgCyan = (data) => console.log(chalk.bgCyan(data));
const logRed = (data) => console.log(chalk.red(data));
const logGreen = (data) => console.log(chalk.bgGreen(data));

app.get("/:roomId", (req, res) => {
    res.json(rooms);
});

app.get("/:roomId", (req, res) => {
    const { roomId } = req.params;

    res.json(rooms);
});

io.on("connection", (socket) => {
    logBgCyan("a user connected", socket.id);
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    logBgCyan("Server has been started on port " + PORT);
});

async function startDB() {
    try {
        await mongoose.connect(config.get("MONGO_URI"));
        logGreen(`MongoDB connected`);
    } catch (error) {
        logRed(error.message);
        process.exit(1);
    }
}

startDB();
