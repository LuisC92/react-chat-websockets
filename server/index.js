// TODO: write server code here
const express = require("express");
const uniqid = require("uniqid");
const app = express();
const socketIO = require("socket.io");

const server = app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

const io = socketIO(server, {
  cors: { origin: ["http://localhost:3000"], methods: ["GET", "POST"] },
});

const messages = [
  { id: uniqid(), author: "server", text: "welcome to WildChat" },
];

io.on("connect", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
