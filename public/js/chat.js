const socket = io(); //primesc acces la obiectul(parametru) socket de pe server

// //primirea eventului; numele eventului trebui sa fie la fel cu cel de pe server
// socket.on("countUpdated", (count) => {
//   console.log("the count has been updated, ", count);
// });

// document.getElementById("increment").addEventListener("click", () => {
//   console.log("clicked");
//   //emiterea unui event de pe client catre server
//   socket.emit("increment");
// });

socket.on("message", (message) => {
  console.log(message);
});

document.getElementById("message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputData = document.getElementById("input-data").value;
  socket.emit("sendMessage", inputData);
});
