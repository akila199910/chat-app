import { Server } from "socket.io";
import http from "http";
import express from "express";
import { log } from "console";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    log("User Connected", socket.id);

    socket.on("disconnect", () => {
        log("User Disconnected", socket.id);
    });
})
export { io, server, app };