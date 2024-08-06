const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv/config");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "Theme")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Theme/Welcome", "index.html"));
});

const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => console.log(`Server Running On ${port}`));

let socketsConnected = new Set();

io.on("connection", onConnected);

function onConnected(socket) {
  console.log("Socket connected", socket.id);
  socketsConnected.add(socket.id);
  io.emit("clients-total", socketsConnected.size);

  socket.on("disconnect", () => {
    console.log("Socket disconnected", socket.id);
    socketsConnected.delete(socket.id);
    io.emit("clients-total", socketsConnected.size);
  });

  socket.on("message", (data) => {
    socket.broadcast.emit("chat-message", data);
  });

  socket.on("feedback", (data) => {
    socket.broadcast.emit("feedback", data);
  });
}
