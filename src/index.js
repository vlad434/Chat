const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

//callback-ul primit o sa ruleze pentru fiecare user avut
io.on("connection", (socket) => {
  console.log("new websocket connection");
  //   socket.emit("countUpdated", count); //trimit un event de pe server si trebui sa-l primesc pe client ( chat.js )
  //parametrul pe care il dau dupa numele eventului, devine accesibil eventului de pe client

  //primesc eventul trimis de pe client
  //incrementez count-ul si apoi il trimit inapoi
  //   socket.on("increment", () => {
  //     count++;
  //     // socket.emit("countUpdated", count); //emite eventul doar catre un client, adica doar pentru 1 face update

  //     //emite eventul pentru toti clientii
  //     io.emit("countUpdated", count);
  //   });

  socket.emit("message", "Welcome!");

  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
